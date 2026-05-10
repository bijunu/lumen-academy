import { NextResponse } from 'next/server'

import { auth } from '@/lib/auth/authOptions'
import { evaluateBadges } from '@/lib/badges/badgeRules'
import { getContentRepository } from '@/lib/content'
import { getDailyChallengeRepository } from '@/lib/dailyChallenge/dailyChallengeRepository'
import {
  flattenCandidates,
  pickQuestion,
} from '@/lib/dailyChallenge/pickQuestion'
import { logger } from '@/lib/logger'
import { dailyChallengeAttemptSchema } from '@/lib/progress/schemas'
import { InvalidAnswerError, scoreAnswer } from '@/lib/progress/serverScoring'
import { getScholarRepository } from '@/lib/scholar/scholarRepository'
import { utcDayKey } from '@/lib/time/utcDay'
import { DAILY_CHALLENGE_XP } from '@/types/dailyChallenge'
import type { BadgeId } from '@/types/gamification'

export const runtime = 'nodejs'

export async function GET() {
  const session = await auth()
  if (!session?.user) {
    return NextResponse.json({ error: 'unauthorised' }, { status: 401 })
  }

  const userId = session.user.id
  const now = new Date()
  const day = utcDayKey(now)

  try {
    const contentRepo = getContentRepository()
    const allNodes = await contentRepo.getAllNodes()
    const candidates = flattenCandidates(allNodes)

    const repo = getDailyChallengeRepository()
    const record = await repo.getOrCreate({
      userId,
      utcDay: day,
      pick: () => pickQuestion(`${userId}:${day}`, candidates),
      now,
    })

    if (!record) {
      return NextResponse.json({ status: 'no-content' as const })
    }

    const node = await contentRepo.getNode(record.nodeId)
    const question = node?.questions.find(q => q.id === record.questionId)
    if (!node || !question) {
      logger.warn('dailyChallenge.missing-content', {
        nodeId: record.nodeId,
        questionId: record.questionId,
      })
      return NextResponse.json({ status: 'no-content' as const })
    }

    return NextResponse.json({
      status: 'ok' as const,
      challenge: record,
      node: { id: node.id, title: node.title, realm: node.realm },
      question,
      misconceptions: node.misconceptions,
    })
  } catch (err) {
    logger.error('dailyChallenge.get.failed', { err })
    return NextResponse.json({ error: 'internal-error' }, { status: 500 })
  }
}

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

  const parsed = dailyChallengeAttemptSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'invalid-body', details: parsed.error.flatten() },
      { status: 400 }
    )
  }

  const userId = session.user.id
  const now = new Date()
  const day = utcDayKey(now)

  try {
    const repo = getDailyChallengeRepository()
    const locked = await repo.getRecord(userId, day)
    if (!locked) {
      return NextResponse.json({ error: 'no-challenge' }, { status: 404 })
    }
    if (locked.status !== 'pending') {
      return NextResponse.json(
        { error: 'already-attempted' },
        { status: 409 }
      )
    }

    const contentRepo = getContentRepository()
    const lockedNode = await contentRepo.getNode(locked.nodeId)
    const lockedQuestion = lockedNode?.questions.find(
      q => q.id === locked.questionId
    )
    if (!lockedNode || !lockedQuestion) {
      logger.warn('dailyChallenge.post.missing-content', {
        nodeId: locked.nodeId,
        questionId: locked.questionId,
      })
      return NextResponse.json({ error: 'no-challenge' }, { status: 404 })
    }

    let correct: boolean
    try {
      correct = scoreAnswer(lockedQuestion, {
        answer: parsed.data.answer,
        clientCorrect: parsed.data.clientCorrect,
      })
    } catch (err) {
      if (err instanceof InvalidAnswerError) {
        return NextResponse.json(
          { error: 'invalid-answer', message: err.message },
          { status: 400 }
        )
      }
      throw err
    }

    const updated = await repo.recordAttempt({
      userId,
      utcDay: day,
      correct,
      xpAwarded: DAILY_CHALLENGE_XP,
      now,
    })

    if (!updated) {
      return NextResponse.json(
        { error: 'already-attempted' },
        { status: 409 }
      )
    }

    let badgeUnlocks: BadgeId[] = []
    if (updated.status === 'correct' && updated.xpAwarded > 0) {
      const scholarRepo = getScholarRepository()
      const profile = await scholarRepo.applyUpdate(userId, {
        realm: lockedNode.realm,
        xpDelta: updated.xpAwarded,
        insightDelta: 1,
        sparkDelta: 0,
        occurredAt: now,
      })
      const newlyEarned = evaluateBadges(profile, now)
      if (newlyEarned.length > 0) {
        await scholarRepo.markBadgesEarned(userId, newlyEarned, now)
        badgeUnlocks = newlyEarned
      }
    }

    return NextResponse.json({ challenge: updated, badgeUnlocks })
  } catch (err) {
    logger.error('dailyChallenge.post.failed', { err })
    return NextResponse.json({ error: 'persistence-failed' }, { status: 500 })
  }
}
