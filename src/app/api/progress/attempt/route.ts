import { NextResponse } from 'next/server'

import { scoreFreeTextWithJudge } from '@/lib/ai/scoreFreeTextWithJudge'
import { auth } from '@/lib/auth/authOptions'
import { evaluateBadges } from '@/lib/badges/badgeRules'
import { getContentRepository } from '@/lib/content'
import { logger } from '@/lib/logger'
import { xpForAttempt } from '@/lib/gamification/xpForAttempt'
import { getProgressRepository } from '@/lib/progress/progressRepository'
import { attemptWriteSchema } from '@/lib/progress/schemas'
import { InvalidAnswerError, scoreAnswer } from '@/lib/progress/serverScoring'
import { getScholarRepository } from '@/lib/scholar/scholarRepository'
import type { Attempt } from '@/types/progress'
import type { BadgeId, ScholarCounters } from '@/types/gamification'

export const runtime = 'nodejs'

export async function POST(request: Request) {
  const session = await auth()
  if (!session?.user) {
    return NextResponse.json({ error: 'unauthorised' }, { status: 401 })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'invalid-json' }, { status: 400 })
  }

  const parsed = attemptWriteSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'invalid-body', details: parsed.error.flatten() },
      { status: 400 }
    )
  }

  const answeredAt = new Date()
  const { nodeId, questionId, attemptCount, hintLevel, answer, clientCorrect } =
    parsed.data

  const node = await getContentRepository().getNode(nodeId)
  if (!node) {
    return NextResponse.json({ error: 'invalid-node' }, { status: 400 })
  }
  const question = node.questions.find(q => q.id === questionId)
  if (!question) {
    return NextResponse.json({ error: 'invalid-question' }, { status: 400 })
  }

  let correct: boolean
  let judgeReason: string | undefined
  try {
    if (question.type === 'free-text' && typeof answer === 'string') {
      const judged = await scoreFreeTextWithJudge({
        question,
        answer,
        userId: session.user.id,
      })
      correct = judged.correct
      judgeReason = judged.reason
    } else {
      correct = scoreAnswer(question, { answer, clientCorrect })
    }
  } catch (err) {
    if (err instanceof InvalidAnswerError) {
      return NextResponse.json(
        { error: 'invalid-answer', message: err.message },
        { status: 400 }
      )
    }
    throw err
  }

  const attempt: Attempt = {
    userId: session.user.id,
    nodeId,
    questionId,
    correct,
    attemptCount,
    answeredAt,
    ...(hintLevel ? { hintLevel } : {}),
  }

  try {
    const { progress, previousMastery } =
      await getProgressRepository().upsertAttempt(attempt)

    let badgeUnlocks: BadgeId[] = []

    const xpDelta = attempt.correct
      ? xpForAttempt({
          baseXp: question.xpValue,
          tier: question.tier,
          firstTry: attempt.attemptCount === 1,
        })
      : 0
    const insightDelta = attempt.correct ? 1 : 0
    const sparkDelta = progress.mastery !== previousMastery ? 1 : 0

    const counterDeltas: Partial<ScholarCounters> = {}
    if (attempt.correct && question.tier === 'challenge') {
      counterDeltas.challengeCorrect = 1
    }
    if (attempt.correct && question.type === 'spot-misconception') {
      counterDeltas.misconceptionCorrect = 1
    }
    if (previousMastery !== 'platinum' && progress.mastery === 'platinum') {
      counterDeltas.platinumCount = 1
    }
    if (
      previousMastery === 'none' &&
      progress.mastery === 'bronze' &&
      progress.totalAttempts > progress.totalCorrect
    ) {
      counterDeltas.bouncedBackCount = 1
    }
    const hasCounterDelta = Object.keys(counterDeltas).length > 0

    const scholarRepo = getScholarRepository()
    if (xpDelta > 0 || insightDelta > 0 || sparkDelta > 0 || hasCounterDelta) {
      const profile = await scholarRepo.applyUpdate(session.user.id, {
        realm: node.realm,
        xpDelta,
        insightDelta,
        sparkDelta,
        counterDeltas: hasCounterDelta ? counterDeltas : undefined,
        occurredAt: answeredAt,
      })

      const newlyEarned = evaluateBadges(profile, answeredAt)
      if (newlyEarned.length > 0) {
        await scholarRepo.markBadgesEarned(
          session.user.id,
          newlyEarned,
          answeredAt
        )
        badgeUnlocks = newlyEarned
      }
    }

    return NextResponse.json({
      progress,
      badgeUnlocks,
      masteryUpgraded: progress.mastery !== previousMastery,
      previousMastery,
      correct,
      ...(judgeReason !== undefined ? { judgeReason } : {}),
    })
  } catch (err) {
    logger.error('progress.attempt.failed', { err })
    return NextResponse.json({ error: 'persistence-failed' }, { status: 500 })
  }
}
