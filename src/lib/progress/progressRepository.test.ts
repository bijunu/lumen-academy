import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest'
import { MongoClient, type Db } from 'mongodb'
import { MongoMemoryServer } from 'mongodb-memory-server'

import {
  ATTEMPTS_COLLECTION,
  NODE_PROGRESS_COLLECTION,
  SESSION_RECORDS_COLLECTION,
} from '@/lib/db/ensureIndexes'
import type { Attempt, NodeProgress, SessionRecord } from '@/types/progress'

import {
  MongoProgressRepository,
  applyAttempt,
  freshProgress,
} from './progressRepository'

let server: MongoMemoryServer
let client: MongoClient
let db: Db
let repo: MongoProgressRepository

beforeAll(async () => {
  server = await MongoMemoryServer.create({ binary: { version: '6.0.14' } })
  client = await new MongoClient(server.getUri()).connect()
  db = client.db('lumen-academy-test')
  repo = new MongoProgressRepository(Promise.resolve(db))
}, 60_000)

afterAll(async () => {
  await client?.close()
  await server?.stop()
}, 30_000)

beforeEach(async () => {
  await db.collection(ATTEMPTS_COLLECTION).deleteMany({})
  await db.collection(NODE_PROGRESS_COLLECTION).deleteMany({})
  await db.collection(SESSION_RECORDS_COLLECTION).deleteMany({})
})

const userId = 'user-1'
const nodeId = 'maths-fractions-equivalent'

function makeAttempt(overrides: Partial<Attempt> = {}): Attempt {
  return {
    userId,
    nodeId,
    questionId: 'q1',
    correct: true,
    attemptCount: 1,
    answeredAt: new Date('2026-05-08T12:00:00Z'),
    ...overrides,
  }
}

describe('freshProgress', () => {
  it('returns zeroed counters, none mastery, default sm2', () => {
    const p = freshProgress(userId, nodeId)
    expect(p).toEqual({
      userId,
      nodeId,
      mastery: 'none',
      correctStreak: 0,
      totalAttempts: 0,
      totalCorrect: 0,
      lastAttemptAt: null,
      nextReviewAt: null,
      sm2: { interval: 0, repetition: 0, easeFactor: 2.5 },
    })
  })
})

describe('applyAttempt', () => {
  it('increments totals and streak on a correct attempt', () => {
    const base = freshProgress(userId, nodeId)
    const next = applyAttempt(base, makeAttempt({ correct: true }))
    expect(next.totalAttempts).toBe(1)
    expect(next.totalCorrect).toBe(1)
    expect(next.correctStreak).toBe(1)
  })

  it('resets streak on an incorrect attempt', () => {
    const base: NodeProgress = {
      ...freshProgress(userId, nodeId),
      correctStreak: 4,
      totalAttempts: 4,
      totalCorrect: 4,
    }
    const next = applyAttempt(base, makeAttempt({ correct: false }))
    expect(next.correctStreak).toBe(0)
    expect(next.totalAttempts).toBe(5)
    expect(next.totalCorrect).toBe(4)
  })

  it('advances sm2 and stamps nextReviewAt on a correct attempt', () => {
    const base = freshProgress(userId, nodeId)
    const at = new Date('2026-05-08T12:00:00Z')
    const next = applyAttempt(base, makeAttempt({ answeredAt: at }))
    expect(next.sm2.repetition).toBe(1)
    expect(next.sm2.interval).toBe(1)
    expect(next.nextReviewAt).toEqual(
      new Date(at.getTime() + 24 * 60 * 60 * 1000)
    )
  })

  it('resets sm2 repetition on an incorrect attempt', () => {
    const base: NodeProgress = {
      ...freshProgress(userId, nodeId),
      sm2: { interval: 6, repetition: 2, easeFactor: 2.5 },
    }
    const next = applyAttempt(base, makeAttempt({ correct: false }))
    expect(next.sm2.repetition).toBe(0)
    expect(next.sm2.interval).toBe(1)
  })

  it('upgrades mastery to bronze on the first correct attempt', () => {
    const base = freshProgress(userId, nodeId)
    const next = applyAttempt(base, makeAttempt({ correct: true }))
    expect(next.mastery).toBe('bronze')
  })

  it('does not award bronze on a wrong first attempt', () => {
    const base = freshProgress(userId, nodeId)
    const next = applyAttempt(base, makeAttempt({ correct: false }))
    expect(next.mastery).toBe('none')
  })

  it('keeps existing mastery after a wrong answer (never downgrades)', () => {
    const base: NodeProgress = {
      ...freshProgress(userId, nodeId),
      mastery: 'silver',
      totalCorrect: 2,
      sm2: { interval: 6, repetition: 2, easeFactor: 2.5 },
    }
    const next = applyAttempt(base, makeAttempt({ correct: false }))
    expect(next.mastery).toBe('silver')
  })

  it('stamps lastAttemptAt from the attempt', () => {
    const base = freshProgress(userId, nodeId)
    const at = new Date('2026-06-01T09:00:00Z')
    const next = applyAttempt(base, makeAttempt({ answeredAt: at }))
    expect(next.lastAttemptAt).toEqual(at)
  })
})

describe('MongoProgressRepository', () => {
  it('returns null when no progress exists for the node', async () => {
    const p = await repo.getNodeProgress(userId, nodeId)
    expect(p).toBeNull()
  })

  it('creates progress on the first upsertAttempt', async () => {
    const result = await repo.upsertAttempt(makeAttempt({ correct: true }))
    expect(result.totalAttempts).toBe(1)
    expect(result.correctStreak).toBe(1)

    const stored = await repo.getNodeProgress(userId, nodeId)
    expect(stored?.totalAttempts).toBe(1)
    expect(stored?.correctStreak).toBe(1)
  })

  it('grows streak across consecutive correct attempts', async () => {
    await repo.upsertAttempt(makeAttempt({ questionId: 'q1' }))
    await repo.upsertAttempt(makeAttempt({ questionId: 'q2' }))
    const final = await repo.upsertAttempt(makeAttempt({ questionId: 'q3' }))
    expect(final.correctStreak).toBe(3)
    expect(final.totalCorrect).toBe(3)
    expect(final.totalAttempts).toBe(3)
  })

  it('resets streak when an attempt is wrong', async () => {
    await repo.upsertAttempt(makeAttempt({ questionId: 'q1' }))
    await repo.upsertAttempt(makeAttempt({ questionId: 'q2' }))
    const after = await repo.upsertAttempt(
      makeAttempt({ questionId: 'q3', correct: false })
    )
    expect(after.correctStreak).toBe(0)
    expect(after.totalCorrect).toBe(2)
    expect(after.totalAttempts).toBe(3)
  })

  it('persists each attempt to the attempts collection', async () => {
    await repo.upsertAttempt(makeAttempt({ questionId: 'q1' }))
    await repo.upsertAttempt(makeAttempt({ questionId: 'q2' }))
    const count = await db.collection(ATTEMPTS_COLLECTION).countDocuments()
    expect(count).toBe(2)
  })

  it('strips _id from getNodeProgress results', async () => {
    await repo.upsertAttempt(makeAttempt())
    const p = await repo.getNodeProgress(userId, nodeId)
    expect(p && '_id' in p).toBe(false)
  })

  it('round-trips a session record', async () => {
    const record: SessionRecord = {
      id: 'session-1',
      userId,
      startedAt: new Date('2026-05-08T12:00:00Z'),
      endedAt: new Date('2026-05-08T12:30:00Z'),
      nodeIds: [nodeId],
      questionsAttempted: 5,
      questionsCorrect: 4,
      xpEarned: 50,
      masteryChanges: [],
    }
    await repo.recordSession(record)
    const stored = await db
      .collection<SessionRecord>(SESSION_RECORDS_COLLECTION)
      .findOne({ id: 'session-1' })
    expect(stored?.questionsCorrect).toBe(4)
    expect(stored?.nodeIds).toEqual([nodeId])
  })

  it('listDueReviews returns only due rows for the requesting user', async () => {
    const dueAt = new Date('2026-05-01T00:00:00Z')
    const futureAt = new Date('2099-01-01T00:00:00Z')
    const otherUserId = 'user-2'

    const rows: NodeProgress[] = [
      { ...freshProgress(userId, 'node-due'), nextReviewAt: dueAt },
      { ...freshProgress(userId, 'node-future'), nextReviewAt: futureAt },
      { ...freshProgress(userId, 'node-null') },
      { ...freshProgress(otherUserId, 'node-due'), nextReviewAt: dueAt },
    ]
    await db
      .collection<NodeProgress>(NODE_PROGRESS_COLLECTION)
      .insertMany(rows.map(r => ({ ...r })))

    const due = await repo.listDueReviews(
      userId,
      new Date('2026-05-08T00:00:00Z')
    )
    expect(due.length).toBe(1)
    expect(due[0].nodeId).toBe('node-due')
    expect(due[0].userId).toBe(userId)
  })
})
