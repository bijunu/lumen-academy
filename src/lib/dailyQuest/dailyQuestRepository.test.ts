import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest'
import { MongoClient, type Db } from 'mongodb'
import { MongoMemoryServer } from 'mongodb-memory-server'

import { DAILY_QUESTS_COLLECTION, ensureIndexes } from '@/lib/db/ensureIndexes'
import type { DailyQuestTask } from '@/types/dailyQuest'

import { MongoDailyQuestRepository } from './dailyQuestRepository'

let server: MongoMemoryServer
let client: MongoClient
let db: Db
let repo: MongoDailyQuestRepository

const NOW = new Date('2026-05-09T08:00:00Z')
const LATER = new Date('2026-05-09T08:05:00Z')
const userId = 'user-1'
const utcDay = '2026-05-09'

function pendingTask(nodeId: string, kind: 'due-review' | 'new-node' = 'due-review'): DailyQuestTask {
  return { nodeId, kind, status: 'pending', completedAt: null }
}

beforeAll(async () => {
  server = await MongoMemoryServer.create({ binary: { version: '6.0.14' } })
  client = await new MongoClient(server.getUri()).connect()
  db = client.db('lumen-academy-test')
  await ensureIndexes(db)
  repo = new MongoDailyQuestRepository(Promise.resolve(db))
}, 60_000)

afterAll(async () => {
  await client?.close()
  await server?.stop()
}, 30_000)

beforeEach(async () => {
  await db.collection(DAILY_QUESTS_COLLECTION).deleteMany({})
})

describe('MongoDailyQuestRepository.getOrCreate', () => {
  it('locks tasks on first call', async () => {
    const record = await repo.getOrCreate({
      userId,
      utcDay,
      pick: () => [pendingTask('n1'), pendingTask('n2', 'new-node')],
      now: NOW,
    })
    expect(record).not.toBeNull()
    expect(record?.tasks).toHaveLength(2)
    expect(record?.tasks[0]).toMatchObject({
      nodeId: 'n1',
      kind: 'due-review',
      status: 'pending',
      completedAt: null,
    })
    expect(record?.bonusAwardedAt).toBeNull()
  })

  it('returns the same record without re-picking on subsequent calls', async () => {
    let pickCount = 0
    const pick = () => {
      pickCount += 1
      return [pendingTask('n1')]
    }
    const first = await repo.getOrCreate({ userId, utcDay, pick, now: NOW })
    const second = await repo.getOrCreate({ userId, utcDay, pick, now: LATER })
    expect(first).toEqual(second)
    expect(pickCount).toBe(1)
  })

  it('returns null when picker yields no tasks', async () => {
    const record = await repo.getOrCreate({
      userId,
      utcDay,
      pick: () => [],
      now: NOW,
    })
    expect(record).toBeNull()
  })

  it('isolates records per user and per day', async () => {
    await repo.getOrCreate({
      userId: 'u-a',
      utcDay,
      pick: () => [pendingTask('n1')],
      now: NOW,
    })
    await repo.getOrCreate({
      userId: 'u-b',
      utcDay,
      pick: () => [pendingTask('n2')],
      now: NOW,
    })
    await repo.getOrCreate({
      userId: 'u-a',
      utcDay: '2026-05-10',
      pick: () => [pendingTask('n3')],
      now: NOW,
    })
    const count = await db.collection(DAILY_QUESTS_COLLECTION).countDocuments({})
    expect(count).toBe(3)
  })
})

describe('MongoDailyQuestRepository.markTaskComplete', () => {
  beforeEach(async () => {
    await repo.getOrCreate({
      userId,
      utcDay,
      pick: () => [pendingTask('n1'), pendingTask('n2'), pendingTask('n3', 'new-node')],
      now: NOW,
    })
  })

  it('flips one task to complete and reports becameComplete=false while others remain pending', async () => {
    const result = await repo.markTaskComplete({ userId, utcDay, nodeId: 'n1', now: LATER })
    expect(result.becameComplete).toBe(false)
    const n1 = result.record?.tasks.find(t => t.nodeId === 'n1')
    expect(n1?.status).toBe('complete')
    expect(n1?.completedAt).toEqual(LATER)
    const n2 = result.record?.tasks.find(t => t.nodeId === 'n2')
    expect(n2?.status).toBe('pending')
  })

  it('reports becameComplete=true on the final task', async () => {
    await repo.markTaskComplete({ userId, utcDay, nodeId: 'n1', now: LATER })
    await repo.markTaskComplete({ userId, utcDay, nodeId: 'n2', now: LATER })
    const final = await repo.markTaskComplete({ userId, utcDay, nodeId: 'n3', now: LATER })
    expect(final.becameComplete).toBe(true)
    expect(final.record?.tasks.every(t => t.status === 'complete')).toBe(true)
  })

  it('is idempotent: a second completion of the same task does not report becameComplete', async () => {
    await repo.markTaskComplete({ userId, utcDay, nodeId: 'n1', now: LATER })
    const second = await repo.markTaskComplete({ userId, utcDay, nodeId: 'n1', now: LATER })
    expect(second.becameComplete).toBe(false)
  })

  it('does not double-report becameComplete after the bonus is already stamped', async () => {
    await repo.markTaskComplete({ userId, utcDay, nodeId: 'n1', now: LATER })
    await repo.markTaskComplete({ userId, utcDay, nodeId: 'n2', now: LATER })
    const final = await repo.markTaskComplete({ userId, utcDay, nodeId: 'n3', now: LATER })
    expect(final.becameComplete).toBe(true)
    await repo.markBonusAwarded(userId, utcDay, LATER)
    // Subsequent unrelated completion attempt must not re-claim the bonus.
    const again = await repo.markTaskComplete({ userId, utcDay, nodeId: 'n3', now: LATER })
    expect(again.becameComplete).toBe(false)
  })

  it('returns the record (not null) when the nodeId is not in todays quest', async () => {
    const result = await repo.markTaskComplete({ userId, utcDay, nodeId: 'unrelated', now: LATER })
    expect(result.becameComplete).toBe(false)
    expect(result.record).not.toBeNull()
    expect(result.record?.tasks.every(t => t.status === 'pending')).toBe(true)
  })

  it('returns null record when the user has no quest locked yet', async () => {
    const result = await repo.markTaskComplete({
      userId: 'no-such-user',
      utcDay,
      nodeId: 'n1',
      now: LATER,
    })
    expect(result.record).toBeNull()
    expect(result.becameComplete).toBe(false)
  })
})

describe('MongoDailyQuestRepository.markBonusAwarded', () => {
  beforeEach(async () => {
    await repo.getOrCreate({
      userId,
      utcDay,
      pick: () => [pendingTask('n1')],
      now: NOW,
    })
  })

  it('stamps bonusAwardedAt the first time and returns the record', async () => {
    const updated = await repo.markBonusAwarded(userId, utcDay, LATER)
    expect(updated?.bonusAwardedAt).toEqual(LATER)
  })

  it('returns null on a second award attempt (anti-double-credit)', async () => {
    await repo.markBonusAwarded(userId, utcDay, LATER)
    const second = await repo.markBonusAwarded(userId, utcDay, LATER)
    expect(second).toBeNull()
  })
})

describe('daily_quests unique index', () => {
  it('prevents duplicate (userId, utcDay) pairs', async () => {
    await db.collection(DAILY_QUESTS_COLLECTION).insertOne({
      userId,
      utcDay,
      tasks: [pendingTask('n1')],
      createdAt: NOW,
      bonusAwardedAt: null,
    })
    await expect(
      db.collection(DAILY_QUESTS_COLLECTION).insertOne({
        userId,
        utcDay,
        tasks: [pendingTask('n2')],
        createdAt: NOW,
        bonusAwardedAt: null,
      })
    ).rejects.toThrow()
  })
})
