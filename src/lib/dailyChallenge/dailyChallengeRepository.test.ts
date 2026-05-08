import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest'
import { MongoClient, type Db } from 'mongodb'
import { MongoMemoryServer } from 'mongodb-memory-server'

import { DAILY_CHALLENGES_COLLECTION, ensureIndexes } from '@/lib/db/ensureIndexes'

import { MongoDailyChallengeRepository } from './dailyChallengeRepository'
import type { DailyChallengeCandidate } from './pickQuestion'

let server: MongoMemoryServer
let client: MongoClient
let db: Db
let repo: MongoDailyChallengeRepository

const NOW = new Date('2026-05-08T12:00:00Z')
const LATER = new Date('2026-05-08T12:05:00Z')
const userId = 'user-1'
const utcDay = '2026-05-08'

beforeAll(async () => {
  server = await MongoMemoryServer.create({ binary: { version: '6.0.14' } })
  client = await new MongoClient(server.getUri()).connect()
  db = client.db('lumen-academy-test')
  await ensureIndexes(db)
  repo = new MongoDailyChallengeRepository(Promise.resolve(db))
}, 60_000)

afterAll(async () => {
  await client?.close()
  await server?.stop()
}, 30_000)

beforeEach(async () => {
  await db.collection(DAILY_CHALLENGES_COLLECTION).deleteMany({})
})

const pickFixed = (
  candidate: DailyChallengeCandidate
): (() => DailyChallengeCandidate) => {
  return () => candidate
}

describe('MongoDailyChallengeRepository.getOrCreate', () => {
  it('creates a fresh pending record on the first call', async () => {
    const record = await repo.getOrCreate({
      userId,
      utcDay,
      pick: pickFixed({ nodeId: 'n1', questionId: 'q1' }),
      now: NOW,
    })
    expect(record).not.toBeNull()
    expect(record).toMatchObject({
      userId,
      utcDay,
      nodeId: 'n1',
      questionId: 'q1',
      status: 'pending',
      attemptedAt: null,
      xpAwarded: 0,
    })
  })

  it('returns the same record on subsequent calls without re-picking', async () => {
    let pickCount = 0
    const pick = () => {
      pickCount += 1
      return { nodeId: 'n1', questionId: 'q1' }
    }
    const first = await repo.getOrCreate({ userId, utcDay, pick, now: NOW })
    const second = await repo.getOrCreate({ userId, utcDay, pick, now: LATER })
    expect(first).toEqual(second)
    expect(pickCount).toBe(1)
  })

  it('returns null when the picker has no candidates', async () => {
    const record = await repo.getOrCreate({
      userId,
      utcDay,
      pick: () => null,
      now: NOW,
    })
    expect(record).toBeNull()
  })

  it('isolates records per user and per day', async () => {
    await repo.getOrCreate({
      userId: 'user-a',
      utcDay: '2026-05-08',
      pick: pickFixed({ nodeId: 'n1', questionId: 'q1' }),
      now: NOW,
    })
    await repo.getOrCreate({
      userId: 'user-b',
      utcDay: '2026-05-08',
      pick: pickFixed({ nodeId: 'n2', questionId: 'q2' }),
      now: NOW,
    })
    await repo.getOrCreate({
      userId: 'user-a',
      utcDay: '2026-05-09',
      pick: pickFixed({ nodeId: 'n3', questionId: 'q3' }),
      now: NOW,
    })
    const count = await db
      .collection(DAILY_CHALLENGES_COLLECTION)
      .countDocuments({})
    expect(count).toBe(3)
  })

  it('strips _id from returned records', async () => {
    const record = await repo.getOrCreate({
      userId,
      utcDay,
      pick: pickFixed({ nodeId: 'n1', questionId: 'q1' }),
      now: NOW,
    })
    expect(record && '_id' in record).toBe(false)
  })
})

describe('MongoDailyChallengeRepository.recordAttempt', () => {
  beforeEach(async () => {
    await repo.getOrCreate({
      userId,
      utcDay,
      pick: pickFixed({ nodeId: 'n1', questionId: 'q1' }),
      now: NOW,
    })
  })

  it('flips pending to correct and credits xpAwarded', async () => {
    const result = await repo.recordAttempt({
      userId,
      utcDay,
      correct: true,
      xpAwarded: 25,
      now: LATER,
    })
    expect(result).toMatchObject({
      status: 'correct',
      xpAwarded: 25,
      attemptedAt: LATER,
    })
  })

  it('flips pending to incorrect and awards no XP', async () => {
    const result = await repo.recordAttempt({
      userId,
      utcDay,
      correct: false,
      xpAwarded: 25,
      now: LATER,
    })
    expect(result).toMatchObject({
      status: 'incorrect',
      xpAwarded: 0,
      attemptedAt: LATER,
    })
  })

  it('returns null on a second attempt after the first locks the record (anti-refresh)', async () => {
    await repo.recordAttempt({
      userId,
      utcDay,
      correct: true,
      xpAwarded: 25,
      now: LATER,
    })
    const second = await repo.recordAttempt({
      userId,
      utcDay,
      correct: true,
      xpAwarded: 25,
      now: LATER,
    })
    expect(second).toBeNull()
  })

  it('returns null when no record exists for the day', async () => {
    const result = await repo.recordAttempt({
      userId,
      utcDay: '2099-01-01',
      correct: true,
      xpAwarded: 25,
      now: LATER,
    })
    expect(result).toBeNull()
  })
})

describe('daily_challenges unique index', () => {
  it('prevents duplicate (userId, utcDay) pairs', async () => {
    await db.collection(DAILY_CHALLENGES_COLLECTION).insertOne({
      userId,
      utcDay,
      nodeId: 'n1',
      questionId: 'q1',
      status: 'pending',
      createdAt: NOW,
      attemptedAt: null,
      xpAwarded: 0,
    })
    await expect(
      db.collection(DAILY_CHALLENGES_COLLECTION).insertOne({
        userId,
        utcDay,
        nodeId: 'n2',
        questionId: 'q2',
        status: 'pending',
        createdAt: NOW,
        attemptedAt: null,
        xpAwarded: 0,
      })
    ).rejects.toThrow()
  })
})
