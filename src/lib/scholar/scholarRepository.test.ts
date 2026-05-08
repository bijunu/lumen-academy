import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest'
import { MongoClient, type Db } from 'mongodb'
import { MongoMemoryServer } from 'mongodb-memory-server'

import { SCHOLAR_PROFILES_COLLECTION } from '@/lib/db/ensureIndexes'
import type { ScholarUpdate } from '@/types/gamification'

import { MongoScholarRepository } from './scholarRepository'

let server: MongoMemoryServer
let client: MongoClient
let db: Db
let repo: MongoScholarRepository

beforeAll(async () => {
  server = await MongoMemoryServer.create({ binary: { version: '6.0.14' } })
  client = await new MongoClient(server.getUri()).connect()
  db = client.db('lumen-academy-test')
  repo = new MongoScholarRepository(Promise.resolve(db))
}, 60_000)

afterAll(async () => {
  await client?.close()
  await server?.stop()
}, 30_000)

beforeEach(async () => {
  await db.collection(SCHOLAR_PROFILES_COLLECTION).deleteMany({})
})

const userId = 'user-1'
const NOW = new Date('2026-05-08T12:00:00Z')

function makeUpdate(overrides: Partial<ScholarUpdate> = {}): ScholarUpdate {
  return {
    realm: 'numerica',
    xpDelta: 10,
    insightDelta: 1,
    sparkDelta: 0,
    occurredAt: NOW,
    ...overrides,
  }
}

describe('MongoScholarRepository', () => {
  it('returns null when no profile exists', async () => {
    expect(await repo.getProfile(userId)).toBeNull()
  })

  it('lazily creates a profile on the first applyUpdate', async () => {
    const result = await repo.applyUpdate(userId, makeUpdate())
    expect(result.xpTotal).toBe(10)
    expect(result.xpByRealm.numerica).toBe(10)
    expect(result.currencies.insight).toBe(1)

    const stored = await repo.getProfile(userId)
    expect(stored?.xpTotal).toBe(10)
  })

  it('accumulates XP, Insight, and Spark across updates', async () => {
    await repo.applyUpdate(userId, makeUpdate({ xpDelta: 10, insightDelta: 1 }))
    await repo.applyUpdate(
      userId,
      makeUpdate({ xpDelta: 5, insightDelta: 0, sparkDelta: 1 })
    )
    const final = await repo.applyUpdate(
      userId,
      makeUpdate({ realm: 'vitalia', xpDelta: 7, insightDelta: 1 })
    )
    expect(final.xpTotal).toBe(22)
    expect(final.xpByRealm.numerica).toBe(15)
    expect(final.xpByRealm.vitalia).toBe(7)
    expect(final.currencies.insight).toBe(2)
    expect(final.currencies.spark).toBe(1)
  })

  it('isolates profiles between users', async () => {
    await repo.applyUpdate(userId, makeUpdate({ xpDelta: 10 }))
    await repo.applyUpdate('user-2', makeUpdate({ xpDelta: 25 }))
    const a = await repo.getProfile(userId)
    const b = await repo.getProfile('user-2')
    expect(a?.xpTotal).toBe(10)
    expect(b?.xpTotal).toBe(25)
  })

  it('strips _id from getProfile results', async () => {
    await repo.applyUpdate(userId, makeUpdate())
    const p = await repo.getProfile(userId)
    expect(p && '_id' in p).toBe(false)
  })
})
