import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest'
import { MongoClient, ObjectId, type Db } from 'mongodb'
import { MongoMemoryServer } from 'mongodb-memory-server'

import {
  PARENT_TOKENS_COLLECTION,
  ParentalVerification,
  USERS_COLLECTION,
} from './parentalVerification'

let server: MongoMemoryServer
let client: MongoClient
let db: Db
let verification: ParentalVerification

async function seedLearner(): Promise<string> {
  const result = await db.collection(USERS_COLLECTION).insertOne({
    name: 'Test Learner',
    email: 'learner@example.co.uk',
    role: 'learner',
  })
  return result.insertedId.toHexString()
}

beforeAll(async () => {
  server = await MongoMemoryServer.create({
    binary: { version: '6.0.14' },
  })
  client = await new MongoClient(server.getUri()).connect()
  db = client.db('lumen-academy-test')
  verification = new ParentalVerification(Promise.resolve(db))
}, 60_000)

afterAll(async () => {
  await client?.close()
  await server?.stop()
}, 30_000)

beforeEach(async () => {
  await db.collection(PARENT_TOKENS_COLLECTION).deleteMany({})
  await db.collection(USERS_COLLECTION).deleteMany({})
})

describe('ParentalVerification.issueToken', () => {
  it('persists a token doc and returns a verification url', async () => {
    const learnerUserId = await seedLearner()
    const { token, url, expiresAt } = await verification.issueToken({
      learnerUserId,
      parentEmail: '  Parent@Example.co.uk  ',
      baseUrl: 'https://lumen.test/',
    })

    expect(token).toMatch(/^[a-f0-9]{64}$/)
    expect(url).toBe(`https://lumen.test/verify?token=${token}`)
    expect(expiresAt.getTime()).toBeGreaterThan(Date.now())

    const stored = await db.collection(PARENT_TOKENS_COLLECTION).findOne({ token })
    expect(stored).not.toBeNull()
    expect(stored?.parentEmail).toBe('parent@example.co.uk')
    expect(stored?.learnerUserId).toBe(learnerUserId)
    expect(stored?.consumedAt).toBeNull()
  })

  it('respects a custom ttl', async () => {
    const learnerUserId = await seedLearner()
    const { expiresAt } = await verification.issueToken({
      learnerUserId,
      parentEmail: 'p@x.com',
      ttlMs: 1000,
    })
    expect(expiresAt.getTime() - Date.now()).toBeLessThanOrEqual(1500)
  })
})

describe('ParentalVerification.consumeToken', () => {
  it('flags parentVerifiedAt on the learner user doc', async () => {
    const learnerUserId = await seedLearner()
    const { token } = await verification.issueToken({
      learnerUserId,
      parentEmail: 'p@x.com',
    })

    const result = await verification.consumeToken(token)
    expect(result).toEqual({ ok: true, learnerUserId })

    const user = await db
      .collection(USERS_COLLECTION)
      .findOne({ _id: new ObjectId(learnerUserId) })
    expect(user?.parentVerifiedAt).toBeInstanceOf(Date)
    expect(user?.role).toBe('learner')

    const tokenDoc = await db.collection(PARENT_TOKENS_COLLECTION).findOne({ token })
    expect(tokenDoc?.consumedAt).toBeInstanceOf(Date)
  })

  it('returns not-found for an unknown token', async () => {
    const result = await verification.consumeToken('does-not-exist')
    expect(result).toEqual({ ok: false, reason: 'not-found' })
  })

  it('rejects an already consumed token', async () => {
    const learnerUserId = await seedLearner()
    const { token } = await verification.issueToken({
      learnerUserId,
      parentEmail: 'p@x.com',
    })
    await verification.consumeToken(token)
    const second = await verification.consumeToken(token)
    expect(second).toEqual({ ok: false, reason: 'already-consumed' })
  })

  it('rejects an expired token', async () => {
    const learnerUserId = await seedLearner()
    await db.collection(PARENT_TOKENS_COLLECTION).insertOne({
      token: 'expired-token',
      learnerUserId,
      parentEmail: 'p@x.com',
      expiresAt: new Date(Date.now() - 60_000),
      consumedAt: null,
      createdAt: new Date(Date.now() - 120_000),
    })
    const result = await verification.consumeToken('expired-token')
    expect(result).toEqual({ ok: false, reason: 'expired' })
  })

  it('returns user-missing when the learner doc no longer exists', async () => {
    const learnerUserId = new ObjectId().toHexString()
    const { token } = await verification.issueToken({
      learnerUserId,
      parentEmail: 'p@x.com',
    })
    const result = await verification.consumeToken(token)
    expect(result).toEqual({ ok: false, reason: 'user-missing' })
  })

  it('returns user-missing for a malformed learner id', async () => {
    await db.collection(PARENT_TOKENS_COLLECTION).insertOne({
      token: 'bad-id-token',
      learnerUserId: 'not-an-object-id',
      parentEmail: 'p@x.com',
      expiresAt: new Date(Date.now() + 60_000),
      consumedAt: null,
      createdAt: new Date(),
    })
    const result = await verification.consumeToken('bad-id-token')
    expect(result).toEqual({ ok: false, reason: 'user-missing' })
  })
})
