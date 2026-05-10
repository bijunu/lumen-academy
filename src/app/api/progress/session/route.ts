import { randomUUID } from 'node:crypto'

import { NextResponse } from 'next/server'

import { auth } from '@/lib/auth/authOptions'
import { evaluateBadges } from '@/lib/badges/badgeRules'
import { getContentRepository } from '@/lib/content'
import { getDailyQuestRepository } from '@/lib/dailyQuest/dailyQuestRepository'
import { logger } from '@/lib/logger'
import { getProgressRepository } from '@/lib/progress/progressRepository'
import { sessionRecordWriteSchema } from '@/lib/progress/schemas'
import { getScholarRepository } from '@/lib/scholar/scholarRepository'
import { utcDayKey } from '@/lib/time/utcDay'
import {
  DAILY_QUEST_BONUS_SPARK,
  DAILY_QUEST_BONUS_XP,
} from '@/types/dailyQuest'
import type { BadgeId } from '@/types/gamification'
import type { SessionRecord } from '@/types/progress'

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

  const parsed = sessionRecordWriteSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'invalid-body', details: parsed.error.flatten() },
      { status: 400 }
    )
  }

  const userId = session.user.id
  const record: SessionRecord = {
    ...parsed.data,
    id: randomUUID(),
    userId,
  }

  try {
    await getProgressRepository().recordSession(record)
  } catch (err) {
    logger.error('progress.session.failed', { err })
    return NextResponse.json({ error: 'persistence-failed' }, { status: 500 })
  }

  const now = new Date()
  const day = utcDayKey(now)
  const questRepo = getDailyQuestRepository()
  const scholarRepo = getScholarRepository()
  let questCompleted = false
  let badgeUnlocks: BadgeId[] = []

  try {
    const attemptedNodeIds = await getProgressRepository()
      .listAttemptedNodeIdsInWindow(userId, record.startedAt, now)
    const attemptedSet = new Set(attemptedNodeIds)
    const verifiedNodeIds = record.nodeIds.filter(id => attemptedSet.has(id))

    let anyBecameComplete = false
    for (const nodeId of verifiedNodeIds) {
      const result = await questRepo.markTaskComplete({
        userId,
        utcDay: day,
        nodeId,
        now,
      })
      if (result.becameComplete) anyBecameComplete = true
    }

    if (anyBecameComplete) {
      const stamped = await questRepo.markBonusAwarded(userId, day, now)
      if (stamped) {
        questCompleted = true
        const firstNodeId = verifiedNodeIds[0]
        const node = firstNodeId
          ? await getContentRepository().getNode(firstNodeId)
          : null
        const realm = node?.realm ?? 'numerica'
        const profile = await scholarRepo.applyUpdate(userId, {
          realm,
          xpDelta: DAILY_QUEST_BONUS_XP,
          insightDelta: 0,
          sparkDelta: DAILY_QUEST_BONUS_SPARK,
          questCompletedOn: day,
          occurredAt: now,
        })
        const newlyEarned = evaluateBadges(profile, now)
        if (newlyEarned.length > 0) {
          await scholarRepo.markBadgesEarned(userId, newlyEarned, now)
          badgeUnlocks = newlyEarned
        }
      }
    }
  } catch (err) {
    logger.error('dailyQuest.session.completion.failed', { err })
  }

  return NextResponse.json({
    ok: true,
    id: record.id,
    questCompleted,
    badgeUnlocks,
  })
}
