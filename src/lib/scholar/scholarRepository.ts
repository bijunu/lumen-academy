import { type Db } from 'mongodb'

import { SCHOLAR_PROFILES_COLLECTION } from '@/lib/db/ensureIndexes'
import { getMongoDb } from '@/lib/db/mongoClient'
import type {
  BadgeId,
  ScholarProfile,
  ScholarUpdate,
} from '@/types/gamification'

import { applyScholarUpdate, freshScholarProfile } from './applyScholarUpdate'

export interface ScholarRepository {
  getProfile(userId: string): Promise<ScholarProfile | null>
  applyUpdate(userId: string, update: ScholarUpdate): Promise<ScholarProfile>
  markBadgesEarned(
    userId: string,
    badgeIds: readonly BadgeId[],
    earnedAt: Date
  ): Promise<ScholarProfile>
}

export class MongoScholarRepository implements ScholarRepository {
  constructor(private readonly dbPromise: Promise<Db> = getMongoDb()) {}

  async getProfile(userId: string): Promise<ScholarProfile | null> {
    const db = await this.dbPromise
    const stored = await db
      .collection<ScholarProfile>(SCHOLAR_PROFILES_COLLECTION)
      .findOne({ userId }, { projection: { _id: 0 } })
    if (!stored) return null
    return {
      ...stored,
      counters: {
        ...stored.counters,
        bossDefeats: stored.counters?.bossDefeats ?? 0,
      },
      questCompletionDates: stored.questCompletionDates ?? [],
      defeatedZoneIds: stored.defeatedZoneIds ?? [],
    }
  }

  async applyUpdate(
    userId: string,
    update: ScholarUpdate
  ): Promise<ScholarProfile> {
    const db = await this.dbPromise
    const existing = await this.getProfile(userId)
    const base = existing ?? freshScholarProfile(userId)
    const next = applyScholarUpdate(base, update)
    await db
      .collection<ScholarProfile>(SCHOLAR_PROFILES_COLLECTION)
      .replaceOne({ userId }, next, { upsert: true })
    return next
  }

  async markBadgesEarned(
    userId: string,
    badgeIds: readonly BadgeId[],
    earnedAt: Date
  ): Promise<ScholarProfile> {
    const db = await this.dbPromise
    const existing = await this.getProfile(userId)
    const base = existing ?? freshScholarProfile(userId)
    const badges = { ...base.badges }
    for (const id of badgeIds) {
      if (!badges[id]) badges[id] = earnedAt
    }
    const next: ScholarProfile = { ...base, badges }
    await db
      .collection<ScholarProfile>(SCHOLAR_PROFILES_COLLECTION)
      .replaceOne({ userId }, next, { upsert: true })
    return next
  }
}

export function getScholarRepository(): ScholarRepository {
  return new MongoScholarRepository()
}
