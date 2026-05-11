import type { Db } from 'mongodb'

import { PARENT_TOKENS_COLLECTION } from '@/lib/auth/parentalVerification'

export const CONTENT_NODES_COLLECTION = 'content_nodes'
export const CONTENT_ZONES_COLLECTION = 'content_zones'
export const NODE_PROGRESS_COLLECTION = 'node_progress'
export const SESSION_RECORDS_COLLECTION = 'session_records'
export const ATTEMPTS_COLLECTION = 'attempts'
export const SCHOLAR_PROFILES_COLLECTION = 'scholar_profiles'
export const DAILY_CHALLENGES_COLLECTION = 'daily_challenges'
export const DAILY_QUESTS_COLLECTION = 'daily_quests'
export const BOSS_ATTEMPTS_COLLECTION = 'boss_attempts'
export const BOSS_DEFEATS_COLLECTION = 'boss_defeats'
export const FREETEXT_JUDGMENTS_COLLECTION = 'freetext_judgments'

export async function ensureIndexes(db: Db): Promise<void> {
  const nodes = db.collection(CONTENT_NODES_COLLECTION)
  await nodes.createIndex({ id: 1 }, { unique: true })
  await nodes.createIndex({ zoneId: 1 })
  await nodes.createIndex({ realm: 1 })

  const zones = db.collection(CONTENT_ZONES_COLLECTION)
  await zones.createIndex({ id: 1 }, { unique: true })
  await zones.createIndex({ realm: 1 })

  const nodeProgress = db.collection(NODE_PROGRESS_COLLECTION)
  await nodeProgress.createIndex({ userId: 1, nodeId: 1 }, { unique: true })
  await nodeProgress.createIndex({ userId: 1, nextReviewAt: 1 })

  const sessions = db.collection(SESSION_RECORDS_COLLECTION)
  await sessions.createIndex({ userId: 1, startedAt: -1 })

  const attempts = db.collection(ATTEMPTS_COLLECTION)
  await attempts.createIndex({ userId: 1, nodeId: 1, answeredAt: -1 })

  const scholarProfiles = db.collection(SCHOLAR_PROFILES_COLLECTION)
  await scholarProfiles.createIndex({ userId: 1 }, { unique: true })

  const dailyChallenges = db.collection(DAILY_CHALLENGES_COLLECTION)
  await dailyChallenges.createIndex({ userId: 1, utcDay: 1 }, { unique: true })

  const dailyQuests = db.collection(DAILY_QUESTS_COLLECTION)
  await dailyQuests.createIndex({ userId: 1, utcDay: 1 }, { unique: true })

  const bossAttempts = db.collection(BOSS_ATTEMPTS_COLLECTION)
  await bossAttempts.createIndex(
    { userId: 1, zoneId: 1, utcDay: 1 },
    { unique: true }
  )

  const bossDefeats = db.collection(BOSS_DEFEATS_COLLECTION)
  await bossDefeats.createIndex({ userId: 1, zoneId: 1 }, { unique: true })
  await bossDefeats.createIndex({ userId: 1 })

  const freetextJudgments = db.collection(FREETEXT_JUDGMENTS_COLLECTION)
  await freetextJudgments.createIndex(
    { questionId: 1, answerHash: 1 },
    { unique: true }
  )

  const parentTokens = db.collection(PARENT_TOKENS_COLLECTION)
  await parentTokens.createIndex({ token: 1 }, { unique: true })
  await parentTokens.createIndex(
    { expiresAt: 1 },
    { expireAfterSeconds: 0 }
  )
}
