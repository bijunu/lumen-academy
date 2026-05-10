import { MongoServerError, type Db } from 'mongodb'

import {
  BOSS_ATTEMPTS_COLLECTION,
  BOSS_DEFEATS_COLLECTION,
} from '@/lib/db/ensureIndexes'
import { getMongoDb } from '@/lib/db/mongoClient'
import type {
  BossAttemptRecord,
  BossDefeatRecord,
  BossQuestionSlot,
} from '@/types/boss'

const PROJECTION = { _id: 0 } as const

interface GetOrCreateAttemptArgs {
  userId: string
  zoneId: string
  utcDay: string
  pick: () => BossQuestionSlot[]
  now: Date
}

interface RecordAttemptResultArgs {
  userId: string
  zoneId: string
  utcDay: string
  defeated: boolean
  score: number
  xpAwarded: number
  now: Date
}

interface MarkDefeatArgs {
  userId: string
  zoneId: string
  realmId: string
  now: Date
}

export interface MarkDefeatResult {
  record: BossDefeatRecord
  isFirstDefeat: boolean
}

export interface BossRepository {
  getOrCreateAttempt(
    args: GetOrCreateAttemptArgs
  ): Promise<BossAttemptRecord | null>
  getPendingAttempt(
    userId: string,
    zoneId: string,
    utcDay: string
  ): Promise<BossAttemptRecord | null>
  recordAttemptResult(
    args: RecordAttemptResultArgs
  ): Promise<BossAttemptRecord | null>
  getDefeats(userId: string): Promise<BossDefeatRecord[]>
  markDefeat(args: MarkDefeatArgs): Promise<MarkDefeatResult>
}

export class MongoBossRepository implements BossRepository {
  constructor(private readonly dbPromise: Promise<Db> = getMongoDb()) {}

  async getOrCreateAttempt({
    userId,
    zoneId,
    utcDay,
    pick,
    now,
  }: GetOrCreateAttemptArgs): Promise<BossAttemptRecord | null> {
    const db = await this.dbPromise
    const col = db.collection<BossAttemptRecord>(BOSS_ATTEMPTS_COLLECTION)

    const existing = await col.findOne(
      { userId, zoneId, utcDay },
      { projection: PROJECTION }
    )
    if (existing) return existing

    const questions = pick()
    if (questions.length === 0) return null

    const record: BossAttemptRecord = {
      userId,
      zoneId,
      utcDay,
      questions,
      status: 'pending',
      score: 0,
      createdAt: now,
      attemptedAt: null,
      xpAwarded: 0,
    }

    try {
      await col.insertOne({ ...record })
      return record
    } catch (err) {
      if (err instanceof MongoServerError && err.code === 11000) {
        return col.findOne(
          { userId, zoneId, utcDay },
          { projection: PROJECTION }
        )
      }
      throw err
    }
  }

  async getPendingAttempt(
    userId: string,
    zoneId: string,
    utcDay: string
  ): Promise<BossAttemptRecord | null> {
    const db = await this.dbPromise
    return db
      .collection<BossAttemptRecord>(BOSS_ATTEMPTS_COLLECTION)
      .findOne({ userId, zoneId, utcDay }, { projection: PROJECTION })
  }

  async recordAttemptResult({
    userId,
    zoneId,
    utcDay,
    defeated,
    score,
    xpAwarded,
    now,
  }: RecordAttemptResultArgs): Promise<BossAttemptRecord | null> {
    const db = await this.dbPromise
    const col = db.collection<BossAttemptRecord>(BOSS_ATTEMPTS_COLLECTION)
    const updated = await col.findOneAndUpdate(
      { userId, zoneId, utcDay, status: 'pending' },
      {
        $set: {
          status: defeated ? 'defeated' : 'failed',
          score,
          attemptedAt: now,
          xpAwarded,
        },
      },
      { returnDocument: 'after', projection: PROJECTION }
    )
    return updated ?? null
  }

  async getDefeats(userId: string): Promise<BossDefeatRecord[]> {
    const db = await this.dbPromise
    return db
      .collection<BossDefeatRecord>(BOSS_DEFEATS_COLLECTION)
      .find({ userId }, { projection: PROJECTION })
      .toArray()
  }

  async markDefeat({
    userId,
    zoneId,
    realmId,
    now,
  }: MarkDefeatArgs): Promise<MarkDefeatResult> {
    const db = await this.dbPromise
    const col = db.collection<BossDefeatRecord>(BOSS_DEFEATS_COLLECTION)

    const existing = await col.findOne(
      { userId, zoneId },
      { projection: PROJECTION }
    )

    if (!existing) {
      const fresh: BossDefeatRecord = {
        userId,
        zoneId,
        realmId,
        firstDefeatedAt: now,
        defeatCount: 1,
        lastDefeatedAt: now,
      }
      try {
        await col.insertOne({ ...fresh })
        return { record: fresh, isFirstDefeat: true }
      } catch (err) {
        if (err instanceof MongoServerError && err.code === 11000) {
          // Lost the race: another writer created the row first.
          // Fall through to the increment branch below.
        } else {
          throw err
        }
      }
    }

    const updated = await col.findOneAndUpdate(
      { userId, zoneId },
      {
        $inc: { defeatCount: 1 },
        $set: { lastDefeatedAt: now },
        $setOnInsert: {
          userId,
          zoneId,
          realmId,
          firstDefeatedAt: now,
        },
      },
      { returnDocument: 'after', upsert: true, projection: PROJECTION }
    )
    if (!updated) {
      throw new Error('boss markDefeat: update returned null')
    }
    return { record: updated, isFirstDefeat: false }
  }
}

export function getBossRepository(): BossRepository {
  return new MongoBossRepository()
}
