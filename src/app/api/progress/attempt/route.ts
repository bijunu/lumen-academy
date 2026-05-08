import { NextResponse } from 'next/server'

import { auth } from '@/lib/auth/authOptions'
import { evaluateBadges } from '@/lib/badges/badgeRules'
import { getContentRepository } from '@/lib/content'
import { logger } from '@/lib/logger'
import { xpForAttempt } from '@/lib/gamification/xpForAttempt'
import { getProgressRepository } from '@/lib/progress/progressRepository'
import { attemptWriteSchema } from '@/lib/progress/schemas'
import { getScholarRepository } from '@/lib/scholar/scholarRepository'
import type { Attempt } from '@/types/progress'
import type { ScholarCounters } from '@/types/gamification'

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
  const attempt: Attempt = {
    ...parsed.data,
    userId: session.user.id,
    answeredAt,
  }

  try {
    const { progress, previousMastery } =
      await getProgressRepository().upsertAttempt(attempt)

    const node = await getContentRepository().getNode(attempt.nodeId)
    const question = node?.questions.find(q => q.id === attempt.questionId)

    if (node && question) {
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
      if (
        previousMastery !== 'platinum' &&
        progress.mastery === 'platinum'
      ) {
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

        const newlyEarned = evaluateBadges(profile)
        if (newlyEarned.length > 0) {
          await scholarRepo.markBadgesEarned(
            session.user.id,
            newlyEarned,
            answeredAt
          )
        }
      }
    }

    return NextResponse.json(progress)
  } catch (err) {
    logger.error('progress.attempt.failed', { err })
    return NextResponse.json({ error: 'persistence-failed' }, { status: 500 })
  }
}
