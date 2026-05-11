import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest'
import { MongoClient, type Db } from 'mongodb'
import { MongoMemoryServer } from 'mongodb-memory-server'

import {
  FREETEXT_JUDGMENTS_COLLECTION,
  ensureIndexes,
} from '@/lib/db/ensureIndexes'

import {
  MongoFreetextJudgmentRepository,
  hashAnswer,
} from './freetextJudgmentRepository'

let server: MongoMemoryServer
let client: MongoClient
let db: Db
let repo: MongoFreetextJudgmentRepository

beforeAll(async () => {
  server = await MongoMemoryServer.create({ binary: { version: '6.0.14' } })
  client = await new MongoClient(server.getUri()).connect()
  db = client.db('lumen-academy-test')
  await ensureIndexes(db)
  repo = new MongoFreetextJudgmentRepository(Promise.resolve(db))
}, 60_000)

afterAll(async () => {
  await client?.close()
  await server?.stop()
}, 30_000)

beforeEach(async () => {
  await db.collection(FREETEXT_JUDGMENTS_COLLECTION).deleteMany({})
})

describe('hashAnswer', () => {
  it('normalises whitespace and case', () => {
    expect(hashAnswer('  Hello   World  ')).toBe(hashAnswer('hello world'))
  })

  it('returns different hashes for different content', () => {
    expect(hashAnswer('a')).not.toBe(hashAnswer('b'))
  })
})

describe('MongoFreetextJudgmentRepository', () => {
  it('returns null when no cached judgment exists', async () => {
    const result = await repo.get('q1', 'some answer')
    expect(result).toBeNull()
  })

  it('persists and retrieves a judgment', async () => {
    const now = new Date('2026-05-11T00:00:00Z')
    await repo.save({
      questionId: 'q1',
      answerHash: hashAnswer('hello world'),
      correct: true,
      reason: 'good answer',
      judgedAt: now,
    })
    const fetched = await repo.get('q1', 'hello world')
    expect(fetched).toEqual({
      questionId: 'q1',
      answerHash: hashAnswer('hello world'),
      correct: true,
      reason: 'good answer',
      judgedAt: now,
    })
  })

  it('treats whitespace and case differences as the same answer', async () => {
    await repo.save({
      questionId: 'q1',
      answerHash: hashAnswer('Hello   World'),
      correct: true,
      reason: 'good',
      judgedAt: new Date('2026-05-11T00:00:00Z'),
    })
    const fetched = await repo.get('q1', '   hello world   ')
    expect(fetched).not.toBeNull()
    expect(fetched?.correct).toBe(true)
  })

  it('does not collide across questions', async () => {
    await repo.save({
      questionId: 'q1',
      answerHash: hashAnswer('apple'),
      correct: true,
      reason: 'r1',
      judgedAt: new Date('2026-05-11T00:00:00Z'),
    })
    const result = await repo.get('q2', 'apple')
    expect(result).toBeNull()
  })

  it('overwrites an existing judgment on save (idempotent)', async () => {
    await repo.save({
      questionId: 'q1',
      answerHash: hashAnswer('answer'),
      correct: false,
      reason: 'first verdict',
      judgedAt: new Date('2026-05-11T00:00:00Z'),
    })
    await repo.save({
      questionId: 'q1',
      answerHash: hashAnswer('answer'),
      correct: true,
      reason: 'second verdict',
      judgedAt: new Date('2026-05-11T00:01:00Z'),
    })
    const fetched = await repo.get('q1', 'answer')
    expect(fetched?.correct).toBe(true)
    expect(fetched?.reason).toBe('second verdict')
  })
})
