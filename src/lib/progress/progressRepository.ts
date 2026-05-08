import { type Db } from 'mongodb'

import {
  ATTEMPTS_COLLECTION,
  NODE_PROGRESS_COLLECTION,
  SESSION_RECORDS_COLLECTION,
} from '@/lib/db/ensureIndexes'
import { getMongoDb } from '@/lib/db/mongoClient'
import { qualityFromAttempt } from '@/lib/mastery/qualityFromAttempt'
import { scheduleNext } from '@/lib/mastery/sm2'
import { upgradeMastery } from '@/lib/mastery/upgradeMastery'
import { utcDayKey } from '@/lib/time/utcDay'
import type {
  Attempt,
  MasteryLevel,
  NodeProgress,
  SessionRecord,
  SpacedRepetitionCard,
} from '@/types/progress'

export interface UpsertAttemptResult {
  progress: NodeProgress
  previousMastery: MasteryLevel
}

const DEFAULT_SM2: SpacedRepetitionCard = {
  interval: 0,
  repetition: 0,
  easeFactor: 2.5,
}

export interface ProgressRepository {
  getNodeProgress(userId: string, nodeId: string): Promise<NodeProgress | null>
  upsertAttempt(attempt: Attempt): Promise<UpsertAttemptResult>
  recordSession(record: SessionRecord): Promise<void>
  listDueReviews(userId: string, now?: Date): Promise<NodeProgress[]>
  listTouchedNodeIds(userId: string): Promise<string[]>
  listAllProgress(userId: string): Promise<NodeProgress[]>
  listSessionDays(userId: string, sinceDays: number, now?: Date): Promise<string[]>
  listAttemptsForNode(
    userId: string,
    nodeId: string,
    sinceDays: number,
    now?: Date
  ): Promise<Attempt[]>
  listSessionsInWindow(
    userId: string,
    start: Date,
    end: Date
  ): Promise<SessionRecord[]>
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
  const quality = qualityFromAttempt({
    correct: attempt.correct,
    attemptCount: attempt.attemptCount,
    hintLevel: attempt.hintLevel,
  })
  const scheduled = scheduleNext(progress.sm2, quality, attempt.answeredAt)

  const interim: NodeProgress = {
    ...progress,
    totalAttempts: progress.totalAttempts + 1,
    totalCorrect: progress.totalCorrect + (attempt.correct ? 1 : 0),
    correctStreak: attempt.correct ? progress.correctStreak + 1 : 0,
    lastAttemptAt: attempt.answeredAt,
    sm2: {
      interval: scheduled.interval,
      repetition: scheduled.repetition,
      easeFactor: scheduled.easeFactor,
    },
    nextReviewAt: scheduled.nextReviewAt,
  }

  return {
    ...interim,
    mastery: upgradeMastery(interim),
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

  async upsertAttempt(attempt: Attempt): Promise<UpsertAttemptResult> {
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

    return { progress: next, previousMastery: base.mastery }
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

  async listTouchedNodeIds(userId: string): Promise<string[]> {
    const db = await this.dbPromise
    const rows = await db
      .collection<NodeProgress>(NODE_PROGRESS_COLLECTION)
      .find({ userId }, { projection: { _id: 0, nodeId: 1 } })
      .toArray()
    return rows.map(r => r.nodeId)
  }

  async listAllProgress(userId: string): Promise<NodeProgress[]> {
    const db = await this.dbPromise
    return db
      .collection<NodeProgress>(NODE_PROGRESS_COLLECTION)
      .find({ userId }, { projection: { _id: 0 } })
      .toArray()
  }

  async listSessionDays(
    userId: string,
    sinceDays: number,
    now: Date = new Date()
  ): Promise<string[]> {
    const db = await this.dbPromise
    const cutoff = new Date(now.getTime() - sinceDays * 24 * 60 * 60 * 1000)
    const rows = await db
      .collection<{ startedAt: Date }>(SESSION_RECORDS_COLLECTION)
      .find(
        { userId, startedAt: { $gte: cutoff } },
        { projection: { _id: 0, startedAt: 1 } }
      )
      .toArray()
    const days = new Set<string>()
    for (const row of rows) {
      days.add(utcDayKey(new Date(row.startedAt)))
    }
    return Array.from(days)
  }

  async listAttemptsForNode(
    userId: string,
    nodeId: string,
    sinceDays: number,
    now: Date = new Date()
  ): Promise<Attempt[]> {
    const db = await this.dbPromise
    const cutoff = new Date(now.getTime() - sinceDays * 24 * 60 * 60 * 1000)
    return db
      .collection<Attempt>(ATTEMPTS_COLLECTION)
      .find(
        { userId, nodeId, answeredAt: { $gte: cutoff } },
        { projection: { _id: 0 } }
      )
      .sort({ answeredAt: 1 })
      .toArray()
  }

  async listSessionsInWindow(
    userId: string,
    start: Date,
    end: Date
  ): Promise<SessionRecord[]> {
    const db = await this.dbPromise
    return db
      .collection<SessionRecord>(SESSION_RECORDS_COLLECTION)
      .find(
        { userId, startedAt: { $gte: start, $lt: end } },
        { projection: { _id: 0 } }
      )
      .sort({ startedAt: 1 })
      .toArray()
  }
}

export function getProgressRepository(): ProgressRepository {
  return new MongoProgressRepository()
}
