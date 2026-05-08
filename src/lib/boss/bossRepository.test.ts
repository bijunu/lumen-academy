import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest'
import { MongoClient, type Db } from 'mongodb'
import { MongoMemoryServer } from 'mongodb-memory-server'

import {
  BOSS_ATTEMPTS_COLLECTION,
  BOSS_DEFEATS_COLLECTION,
  ensureIndexes,
} from '@/lib/db/ensureIndexes'
import type { BossQuestionSlot } from '@/types/boss'

import { MongoBossRepository } from './bossRepository'

let server: MongoMemoryServer
let client: MongoClient
let db: Db
let repo: MongoBossRepository

const NOW = new Date('2026-05-09T08:00:00Z')
const LATER = new Date('2026-05-09T08:10:00Z')
const userId = 'user-1'
const zoneId = 'fractions'
const realmId = 'numerica'
const utcDay = '2026-05-09'

const SLOTS: BossQuestionSlot[] = [
  { nodeId: 'n1', questionId: 'q1' },
  { nodeId: 'n1', questionId: 'q2' },
  { nodeId: 'n2', questionId: 'q1' },
  { nodeId: 'n2', questionId: 'q2' },
  { nodeId: 'n3', questionId: 'q1' },
]

beforeAll(async () => {
  server = await MongoMemoryServer.create({ binary: { version: '6.0.14' } })
  client = await new MongoClient(server.getUri()).connect()
  db = client.db('lumen-academy-test')
  await ensureIndexes(db)
  repo = new MongoBossRepository(Promise.resolve(db))
}, 60_000)

afterAll(async () => {
  await client?.close()
  await server?.stop()
}, 30_000)

beforeEach(async () => {
  await db.collection(BOSS_ATTEMPTS_COLLECTION).deleteMany({})
  await db.collection(BOSS_DEFEATS_COLLECTION).deleteMany({})
})

describe('MongoBossRepository.getOrCreateAttempt', () => {
  it('locks an attempt on first call', async () => {
    const record = await repo.getOrCreateAttempt({
      userId,
      zoneId,
      utcDay,
      pick: () => SLOTS,
      now: NOW,
    })
    expect(record).not.toBeNull()
    expect(record?.questions).toHaveLength(5)
    expect(record?.status).toBe('pending')
    expect(record?.score).toBe(0)
    expect(record?.attemptedAt).toBeNull()
  })

  it('returns the existing attempt on subsequent calls without re-picking', async () => {
    let pickCount = 0
    const pick = () => {
      pickCount += 1
      return SLOTS
    }
    const a = await repo.getOrCreateAttempt({ userId, zoneId, utcDay, pick, now: NOW })
    const b = await repo.getOrCreateAttempt({ userId, zoneId, utcDay, pick, now: LATER })
    expect(a).toEqual(b)
    expect(pickCount).toBe(1)
  })

  it('returns null when picker yields no questions', async () => {
    const record = await repo.getOrCreateAttempt({
      userId,
      zoneId,
      utcDay,
      pick: () => [],
      now: NOW,
    })
    expect(record).toBeNull()
  })

  it('isolates attempts per (user, zone, day)', async () => {
    await repo.getOrCreateAttempt({ userId, zoneId, utcDay, pick: () => SLOTS, now: NOW })
    await repo.getOrCreateAttempt({ userId: 'u2', zoneId, utcDay, pick: () => SLOTS, now: NOW })
    await repo.getOrCreateAttempt({ userId, zoneId: 'cells', utcDay, pick: () => SLOTS, now: NOW })
    await repo.getOrCreateAttempt({ userId, zoneId, utcDay: '2026-05-10', pick: () => SLOTS, now: NOW })
    const count = await db.collection(BOSS_ATTEMPTS_COLLECTION).countDocuments({})
    expect(count).toBe(4)
  })
})

describe('MongoBossRepository.recordAttemptResult', () => {
  beforeEach(async () => {
    await repo.getOrCreateAttempt({ userId, zoneId, utcDay, pick: () => SLOTS, now: NOW })
  })

  it('marks the attempt defeated with score and xp', async () => {
    const result = await repo.recordAttemptResult({
      userId,
      zoneId,
      utcDay,
      defeated: true,
      score: 5,
      xpAwarded: 100,
      now: LATER,
    })
    expect(result?.status).toBe('defeated')
    expect(result?.score).toBe(5)
    expect(result?.xpAwarded).toBe(100)
    expect(result?.attemptedAt).toEqual(LATER)
  })

  it('marks the attempt failed with no xp', async () => {
    const result = await repo.recordAttemptResult({
      userId,
      zoneId,
      utcDay,
      defeated: false,
      score: 2,
      xpAwarded: 0,
      now: LATER,
    })
    expect(result?.status).toBe('failed')
    expect(result?.xpAwarded).toBe(0)
  })

  it('returns null on a second result call (anti-double-credit)', async () => {
    await repo.recordAttemptResult({
      userId,
      zoneId,
      utcDay,
      defeated: true,
      score: 5,
      xpAwarded: 100,
      now: LATER,
    })
    const second = await repo.recordAttemptResult({
      userId,
      zoneId,
      utcDay,
      defeated: true,
      score: 5,
      xpAwarded: 100,
      now: LATER,
    })
    expect(second).toBeNull()
  })
})

describe('MongoBossRepository.markDefeat / getDefeats', () => {
  it('inserts the first defeat with isFirstDefeat=true', async () => {
    const result = await repo.markDefeat({ userId, zoneId, realmId, now: NOW })
    expect(result.isFirstDefeat).toBe(true)
    expect(result.record.defeatCount).toBe(1)
    expect(result.record.firstDefeatedAt).toEqual(NOW)
    expect(result.record.lastDefeatedAt).toEqual(NOW)
  })

  it('increments defeatCount on a repeat defeat with isFirstDefeat=false', async () => {
    await repo.markDefeat({ userId, zoneId, realmId, now: NOW })
    const second = await repo.markDefeat({ userId, zoneId, realmId, now: LATER })
    expect(second.isFirstDefeat).toBe(false)
    expect(second.record.defeatCount).toBe(2)
    expect(second.record.firstDefeatedAt).toEqual(NOW)
    expect(second.record.lastDefeatedAt).toEqual(LATER)
  })

  it('lists defeats across zones for a user', async () => {
    await repo.markDefeat({ userId, zoneId: 'a', realmId, now: NOW })
    await repo.markDefeat({ userId, zoneId: 'b', realmId, now: NOW })
    await repo.markDefeat({ userId: 'other', zoneId: 'c', realmId, now: NOW })
    const defeats = await repo.getDefeats(userId)
    expect(defeats.map(d => d.zoneId).sort()).toEqual(['a', 'b'])
  })
})

describe('boss_attempts unique index', () => {
  it('prevents duplicate (userId, zoneId, utcDay) tuples', async () => {
    await db.collection(BOSS_ATTEMPTS_COLLECTION).insertOne({
      userId,
      zoneId,
      utcDay,
      questions: SLOTS,
      status: 'pending',
      score: 0,
      createdAt: NOW,
      attemptedAt: null,
      xpAwarded: 0,
    })
    await expect(
      db.collection(BOSS_ATTEMPTS_COLLECTION).insertOne({
        userId,
        zoneId,
        utcDay,
        questions: SLOTS,
        status: 'pending',
        score: 0,
        createdAt: NOW,
        attemptedAt: null,
        xpAwarded: 0,
      })
    ).rejects.toThrow()
  })
})
