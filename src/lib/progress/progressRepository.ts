import { type Db } from 'mongodb'

import {
  ATTEMPTS_COLLECTION,
  NODE_PROGRESS_COLLECTION,
  SESSION_RECORDS_COLLECTION,
} from '@/lib/db/ensureIndexes'
import { getMongoDb } from '@/lib/db/mongoClient'
import type {
  Attempt,
  NodeProgress,
  SessionRecord,
  SpacedRepetitionCard,
} from '@/types/progress'

const DEFAULT_SM2: SpacedRepetitionCard = {
  interval: 0,
  repetition: 0,
  easeFactor: 2.5,
}

export interface ProgressRepository {
  getNodeProgress(userId: string, nodeId: string): Promise<NodeProgress | null>
  upsertAttempt(attempt: Attempt): Promise<NodeProgress>
  recordSession(record: SessionRecord): Promise<void>
  listDueReviews(userId: string, now?: Date): Promise<NodeProgress[]>
}

export function freshProgress(userId: string, nodeId: string): NodeProgress {
  return {
    userId,
    nodeId,
    mastery: 'none',
    correctStreak: 0,
    totalAttempts: 0,
    totalCorrect: 0,
    lastAttemptAt: null,
    nextReviewAt: null,
    sm2: { ...DEFAULT_SM2 },
  }
}

export function applyAttempt(
  progress: NodeProgress,
  attempt: Attempt
): NodeProgress {
  return {
    ...progress,
    totalAttempts: progress.totalAttempts + 1,
    totalCorrect: progress.totalCorrect + (attempt.correct ? 1 : 0),
    correctStreak: attempt.correct ? progress.correctStreak + 1 : 0,
    lastAttemptAt: attempt.answeredAt,
  }
}

export class MongoProgressRepository implements ProgressRepository {
  constructor(private readonly dbPromise: Promise<Db> = getMongoDb()) {}

  async getNodeProgress(
    userId: string,
    nodeId: string
  ): Promise<NodeProgress | null> {
    const db = await this.dbPromise
    return db
      .collection<NodeProgress>(NODE_PROGRESS_COLLECTION)
      .findOne({ userId, nodeId }, { projection: { _id: 0 } })
  }

  async upsertAttempt(attempt: Attempt): Promise<NodeProgress> {
    const db = await this.dbPromise

    await db.collection<Attempt>(ATTEMPTS_COLLECTION).insertOne({ ...attempt })

    const existing = await this.getNodeProgress(attempt.userId, attempt.nodeId)
    const base = existing ?? freshProgress(attempt.userId, attempt.nodeId)
    const next = applyAttempt(base, attempt)

    await db
      .collection<NodeProgress>(NODE_PROGRESS_COLLECTION)
      .replaceOne(
        { userId: attempt.userId, nodeId: attempt.nodeId },
        next,
        { upsert: true }
      )

    return next
  }

  async recordSession(record: SessionRecord): Promise<void> {
    const db = await this.dbPromise
    await db
      .collection<SessionRecord>(SESSION_RECORDS_COLLECTION)
      .insertOne({ ...record })
  }

  async listDueReviews(
    userId: string,
    now: Date = new Date()
  ): Promise<NodeProgress[]> {
    const db = await this.dbPromise
    return db
      .collection<NodeProgress>(NODE_PROGRESS_COLLECTION)
      .find(
        { userId, nextReviewAt: { $lte: now } },
        { projection: { _id: 0 } }
      )
      .toArray()
  }
}

export function getProgressRepository(): ProgressRepository {
  return new MongoProgressRepository()
}
