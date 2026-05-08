import { MongoServerError, type Db } from 'mongodb'

import { DAILY_QUESTS_COLLECTION } from '@/lib/db/ensureIndexes'
import { getMongoDb } from '@/lib/db/mongoClient'
import type { DailyQuestRecord, DailyQuestTask } from '@/types/dailyQuest'

interface GetOrCreateArgs {
  userId: string
  utcDay: string
  pick: () => DailyQuestTask[]
  now: Date
}

interface MarkTaskCompleteArgs {
  userId: string
  utcDay: string
  nodeId: string
  now: Date
}

export interface MarkTaskCompleteResult {
  record: DailyQuestRecord | null
  becameComplete: boolean
}

export interface DailyQuestRepository {
  getOrCreate(args: GetOrCreateArgs): Promise<DailyQuestRecord | null>
  getForDay(userId: string, utcDay: string): Promise<DailyQuestRecord | null>
  markTaskComplete(args: MarkTaskCompleteArgs): Promise<MarkTaskCompleteResult>
  markBonusAwarded(
    userId: string,
    utcDay: string,
    now: Date
  ): Promise<DailyQuestRecord | null>
}

const PROJECTION = { _id: 0 } as const

function allComplete(record: DailyQuestRecord): boolean {
  if (record.tasks.length === 0) return false
  return record.tasks.every(t => t.status === 'complete')
}

export class MongoDailyQuestRepository implements DailyQuestRepository {
  constructor(private readonly dbPromise: Promise<Db> = getMongoDb()) {}

  async getForDay(
    userId: string,
    utcDay: string
  ): Promise<DailyQuestRecord | null> {
    const db = await this.dbPromise
    return db
      .collection<DailyQuestRecord>(DAILY_QUESTS_COLLECTION)
      .findOne({ userId, utcDay }, { projection: PROJECTION })
  }

  async getOrCreate({
    userId,
    utcDay,
    pick,
    now,
  }: GetOrCreateArgs): Promise<DailyQuestRecord | null> {
    const db = await this.dbPromise
    const col = db.collection<DailyQuestRecord>(DAILY_QUESTS_COLLECTION)

    const existing = await col.findOne({ userId, utcDay }, { projection: PROJECTION })
    if (existing) return existing

    const tasks = pick()
    if (tasks.length === 0) return null

    const record: DailyQuestRecord = {
      userId,
      utcDay,
      tasks,
      createdAt: now,
      bonusAwardedAt: null,
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

  async markTaskComplete({
    userId,
    utcDay,
    nodeId,
    now,
  }: MarkTaskCompleteArgs): Promise<MarkTaskCompleteResult> {
    const db = await this.dbPromise
    const col = db.collection<DailyQuestRecord>(DAILY_QUESTS_COLLECTION)

    const updated = await col.findOneAndUpdate(
      { userId, utcDay, 'tasks.nodeId': nodeId, 'tasks.status': 'pending' },
      {
        $set: {
          'tasks.$[t].status': 'complete',
          'tasks.$[t].completedAt': now,
        },
      },
      {
        arrayFilters: [{ 't.nodeId': nodeId, 't.status': 'pending' }],
        returnDocument: 'after',
        projection: PROJECTION,
      }
    )

    if (!updated) {
      const fallback = await col.findOne(
        { userId, utcDay },
        { projection: PROJECTION }
      )
      return { record: fallback ?? null, becameComplete: false }
    }

    const becameComplete = allComplete(updated) && updated.bonusAwardedAt === null
    return { record: updated, becameComplete }
  }

  async markBonusAwarded(
    userId: string,
    utcDay: string,
    now: Date
  ): Promise<DailyQuestRecord | null> {
    const db = await this.dbPromise
    const col = db.collection<DailyQuestRecord>(DAILY_QUESTS_COLLECTION)
    const updated = await col.findOneAndUpdate(
      { userId, utcDay, bonusAwardedAt: null },
      { $set: { bonusAwardedAt: now } },
      { returnDocument: 'after', projection: PROJECTION }
    )
    return updated ?? null
  }
}

export function getDailyQuestRepository(): DailyQuestRepository {
  return new MongoDailyQuestRepository()
}
