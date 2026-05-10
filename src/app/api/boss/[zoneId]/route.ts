import { NextResponse } from 'next/server'

import { auth } from '@/lib/auth/authOptions'
import { evaluateBadges } from '@/lib/badges/badgeRules'
import { getBossRepository } from '@/lib/boss/bossRepository'
import { isBossEligible } from '@/lib/boss/bossEligibility'
import { pickBossQuestions } from '@/lib/boss/pickBossQuestions'
import { realmZoneCoverage } from '@/lib/boss/realmCoverage'
import { getContentRepository } from '@/lib/content'
import { REALMS, type RealmId } from '@/lib/constants/realms'
import { logger } from '@/lib/logger'
import { getProgressRepository } from '@/lib/progress/progressRepository'
import { bossAttemptSchema } from '@/lib/progress/schemas'
import { InvalidAnswerError, scoreAnswer } from '@/lib/progress/serverScoring'
import { getScholarRepository } from '@/lib/scholar/scholarRepository'
import { utcDayKey } from '@/lib/time/utcDay'
import {
  BOSS_FIRST_DEFEAT_SPARK,
  BOSS_FIRST_DEFEAT_XP,
  BOSS_PASS_THRESHOLD,
  BOSS_QUESTION_COUNT,
  BOSS_REPEAT_DEFEAT_XP,
} from '@/types/boss'
import type { BadgeId, ScholarCounters } from '@/types/gamification'
import type { NodeProgress } from '@/types/progress'
import type { Question, SkillNode } from '@/types/content'

export const runtime = 'nodejs'

const REALM_IDS = Object.keys(REALMS) as RealmId[]

interface RouteContext {
  params: { zoneId: string }
}

export async function GET(_request: Request, context: RouteContext) {
  const session = await auth()
  if (!session?.user) {
    return NextResponse.json({ error: 'unauthorised' }, { status: 401 })
  }

  const userId = session.user.id
  const zoneId = context.params.zoneId
  const now = new Date()
  const day = utcDayKey(now)

  try {
    const contentRepo = getContentRepository()
    const progressRepo = getProgressRepository()
    const allNodes = await contentRepo.getAllNodes()
    const zoneNodes = allNodes.filter(n => n.zoneId === zoneId)
    if (zoneNodes.length === 0) {
      return NextResponse.json({ error: 'no-such-zone' }, { status: 404 })
    }

    const progressMap = new Map<string, NodeProgress>()
    for (const node of zoneNodes) {
      const p = await progressRepo.getNodeProgress(userId, node.id)
      if (p) progressMap.set(node.id, p)
    }

    if (!isBossEligible(zoneNodes, progressMap)) {
      return NextResponse.json({ error: 'not-eligible' }, { status: 403 })
    }

    const bossRepo = getBossRepository()
    const attempt = await bossRepo.getOrCreateAttempt({
      userId,
      zoneId,
      utcDay: day,
      pick: () =>
        pickBossQuestions({
          zoneNodes,
          seedKey: `${userId}:${zoneId}:${day}`,
          count: BOSS_QUESTION_COUNT,
        }),
      now,
    })

    if (!attempt) {
      return NextResponse.json({ error: 'no-content' }, { status: 404 })
    }

    const nodeIndex = new Map<string, SkillNode>(
      zoneNodes.map(n => [n.id, n])
    )
    const enrichedQuestions: Array<{
      nodeId: string
      nodeTitle: string
      question: Question
    }> = []
    for (const slot of attempt.questions) {
      const node = nodeIndex.get(slot.nodeId)
      const question = node?.questions.find(q => q.id === slot.questionId)
      if (node && question) {
        enrichedQuestions.push({
          nodeId: node.id,
          nodeTitle: node.title,
          question,
        })
      }
    }

    return NextResponse.json({
      status: 'ok' as const,
      attempt,
      questions: enrichedQuestions,
      zone: {
        id: zoneId,
        name: zoneNodes[0]?.zoneName ?? zoneId,
        realm: zoneNodes[0]?.realm,
      },
      passThreshold: BOSS_PASS_THRESHOLD,
      questionCount: BOSS_QUESTION_COUNT,
    })
  } catch (err) {
    logger.error('boss.get.failed', { err })
    return NextResponse.json({ error: 'internal-error' }, { status: 500 })
  }
}

export async function POST(request: Request, context: RouteContext) {
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

  const parsed = bossAttemptSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'invalid-body', details: parsed.error.flatten() },
      { status: 400 }
    )
  }

  const userId = session.user.id
  const zoneId = context.params.zoneId
  const now = new Date()
  const day = utcDayKey(now)

  try {
    const contentRepo = getContentRepository()
    const allNodes = await contentRepo.getAllNodes()
    const zoneNodes = allNodes.filter(n => n.zoneId === zoneId)
    if (zoneNodes.length === 0) {
      return NextResponse.json({ error: 'no-such-zone' }, { status: 404 })
    }
    const realmId = zoneNodes[0].realm

    const bossRepo = getBossRepository()
    const pending = await bossRepo.getPendingAttempt(userId, zoneId, day)
    if (!pending) {
      return NextResponse.json(
        { error: 'no-pending-attempt' },
        { status: 404 }
      )
    }
    if (pending.status !== 'pending') {
      return NextResponse.json(
        { error: 'already-attempted' },
        { status: 409 }
      )
    }

    const expectedKeys = new Set(
      pending.questions.map(q => `${q.nodeId}:${q.questionId}`)
    )
    const submittedKeys = new Set(
      parsed.data.answers.map(a => `${a.nodeId}:${a.questionId}`)
    )
    const sameSize = submittedKeys.size === expectedKeys.size
    const sameContents =
      sameSize && Array.from(submittedKeys).every(k => expectedKeys.has(k))
    const noDuplicates = parsed.data.answers.length === submittedKeys.size
    if (
      parsed.data.answers.length !== pending.questions.length ||
      !sameContents ||
      !noDuplicates
    ) {
      return NextResponse.json(
        { error: 'invalid-answer-set' },
        { status: 400 }
      )
    }

    const nodeIndex = new Map(zoneNodes.map(n => [n.id, n]))
    let score = 0
    try {
      for (const submitted of parsed.data.answers) {
        const node = nodeIndex.get(submitted.nodeId)
        const question = node?.questions.find(q => q.id === submitted.questionId)
        if (!node || !question) {
          return NextResponse.json(
            { error: 'invalid-answer-set' },
            { status: 400 }
          )
        }
        const correct = scoreAnswer(question, {
          answer: submitted.answer,
          clientCorrect: submitted.clientCorrect,
        })
        if (correct) score += 1
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

    const defeated = score >= BOSS_PASS_THRESHOLD

    const existingDefeat = (await bossRepo.getDefeats(userId)).find(
      d => d.zoneId === zoneId
    )
    const xpAwarded = defeated
      ? existingDefeat
        ? BOSS_REPEAT_DEFEAT_XP
        : BOSS_FIRST_DEFEAT_XP
      : 0

    const attemptRecord = await bossRepo.recordAttemptResult({
      userId,
      zoneId,
      utcDay: day,
      defeated,
      score,
      xpAwarded,
      now,
    })

    if (!attemptRecord) {
      return NextResponse.json(
        { error: 'already-attempted' },
        { status: 409 }
      )
    }

    let badgeUnlocks: BadgeId[] = []
    let isFirstDefeat = false

    if (defeated) {
      const defeatResult = await bossRepo.markDefeat({
        userId,
        zoneId,
        realmId,
        now,
      })
      isFirstDefeat = defeatResult.isFirstDefeat

      const counterDeltas: Partial<ScholarCounters> = isFirstDefeat
        ? { bossDefeats: 1 }
        : {}
      const sparkDelta = isFirstDefeat ? BOSS_FIRST_DEFEAT_SPARK : 0
      const update = {
        realm: realmId,
        xpDelta: xpAwarded,
        insightDelta: 0,
        sparkDelta,
        counterDeltas: isFirstDefeat ? counterDeltas : undefined,
        bossZoneDefeated: isFirstDefeat ? zoneId : undefined,
        occurredAt: now,
      } as const

      const scholarRepo = getScholarRepository()
      const profile = await scholarRepo.applyUpdate(userId, update)

      const allDefeats = await bossRepo.getDefeats(userId)
      const zonesByRealm = await buildZonesByRealm()
      const coverage = realmZoneCoverage(
        allDefeats.map(d => d.zoneId),
        zonesByRealm
      )

      const newlyEarned = evaluateBadges(profile, now, {
        realmZoneCoverage: coverage,
      })
      if (newlyEarned.length > 0) {
        await scholarRepo.markBadgesEarned(userId, newlyEarned, now)
        badgeUnlocks = newlyEarned
      }
    }

    return NextResponse.json({
      result: {
        defeated,
        score,
        xpAwarded,
        isFirstDefeat,
      },
      attempt: attemptRecord,
      badgeUnlocks,
    })
  } catch (err) {
    logger.error('boss.post.failed', { err })
    return NextResponse.json({ error: 'persistence-failed' }, { status: 500 })
  }
}

async function buildZonesByRealm() {
  const contentRepo = getContentRepository()
  const result = {
    numerica: [] as string[],
    vitalia: [] as string[],
    elementia: [] as string[],
    mechanica: [] as string[],
  }
  for (const realmId of REALM_IDS) {
    const zones = await contentRepo.getRealmZones(realmId)
    result[realmId] = zones.map(z => z.id)
  }
  return result
}
