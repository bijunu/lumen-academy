import { MongoServerError, type Db } from 'mongodb'

import { DAILY_CHALLENGES_COLLECTION } from '@/lib/db/ensureIndexes'
import { getMongoDb } from '@/lib/db/mongoClient'
import type { DailyChallengeRecord } from '@/types/dailyChallenge'

import type { DailyChallengeCandidate } from './pickQuestion'

interface GetOrCreateArgs {
  userId: string
  utcDay: string
  pick: () => DailyChallengeCandidate | null
  now: Date
}

interface RecordAttemptArgs {
  userId: string
  utcDay: string
  correct: boolean
  xpAwarded: number
  now: Date
}

export interface DailyChallengeRepository {
  getOrCreate(args: GetOrCreateArgs): Promise<DailyChallengeRecord | null>
  getRecord(userId: string, utcDay: string): Promise<DailyChallengeRecord | null>
  recordAttempt(args: RecordAttemptArgs): Promise<DailyChallengeRecord | null>
}

const PROJECTION = { _id: 0 } as const

export class MongoDailyChallengeRepository implements DailyChallengeRepository {
  constructor(private readonly dbPromise: Promise<Db> = getMongoDb()) {}

  async getOrCreate({
    userId,
    utcDay,
    pick,
    now,
  }: GetOrCreateArgs): Promise<DailyChallengeRecord | null> {
    const db = await this.dbPromise
    const col = db.collection<DailyChallengeRecord>(DAILY_CHALLENGES_COLLECTION)

    const existing = await col.findOne({ userId, utcDay }, { projection: PROJECTION })
    if (existing) return existing

    const picked = pick()
    if (!picked) return null

    const record: DailyChallengeRecord = {
      userId,
      utcDay,
      nodeId: picked.nodeId,
      questionId: picked.questionId,
      status: 'pending',
      createdAt: now,
      attemptedAt: null,
      xpAwarded: 0,
    }

    try {
      await col.insertOne({ ...record })
      return record
    } catch (err) {
      if (err instanceof MongoServerError && err.code === 11000) {
        return col.findOne({ userId, utcDay }, { projection: PROJECTION })
      }
      throw err
    }
  }

  async getRecord(
    userId: string,
    utcDay: string
  ): Promise<DailyChallengeRecord | null> {
    const db = await this.dbPromise
    return db
      .collection<DailyChallengeRecord>(DAILY_CHALLENGES_COLLECTION)
      .findOne({ userId, utcDay }, { projection: PROJECTION })
  }

  async recordAttempt({
    userId,
    utcDay,
    correct,
    xpAwarded,
    now,
  }: RecordAttemptArgs): Promise<DailyChallengeRecord | null> {
    const db = await this.dbPromise
    const col = db.collection<DailyChallengeRecord>(DAILY_CHALLENGES_COLLECTION)
    const result = await col.findOneAndUpdate(
      { userId, utcDay, status: 'pending' },
      {
        $set: {
          status: correct ? 'correct' : 'incorrect',
          attemptedAt: now,
          xpAwarded: correct ? xpAwarded : 0,
        },
      },
      { returnDocument: 'after', projection: PROJECTION }
    )
    return result ?? null
  }
}

export function getDailyChallengeRepository(): DailyChallengeRepository {
  return new MongoDailyChallengeRepository()
}
