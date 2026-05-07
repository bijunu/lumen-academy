import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { MongoClient, type Db } from 'mongodb'
import { MongoMemoryServer } from 'mongodb-memory-server'
import {
  MongoContentRepository,
  NODES_COLLECTION,
  ZONES_COLLECTION,
} from './mongoContentRepository'
import { fractionsZoneNodes } from '@/content/seed'
import type { Zone } from '@/types/content'

let server: MongoMemoryServer
let client: MongoClient
let db: Db
let repo: MongoContentRepository

const seedZones: Zone[] = [
  {
    id: 'maths-fractions',
    name: 'Fractions',
    realm: 'numerica',
    nodeIds: fractionsZoneNodes.map(n => n.id),
  },
]

beforeAll(async () => {
  server = await MongoMemoryServer.create({
    binary: { version: '6.0.14' },
  })
  client = await new MongoClient(server.getUri()).connect()
  db = client.db('lumen-academy-test')

  await db.collection(NODES_COLLECTION).insertMany(fractionsZoneNodes.map(n => ({ ...n })))
  await db.collection(ZONES_COLLECTION).insertMany(seedZones.map(z => ({ ...z })))

  repo = new MongoContentRepository(Promise.resolve(db))
}, 60_000)

afterAll(async () => {
  await client?.close()
  await server?.stop()
}, 30_000)

describe('MongoContentRepository', () => {
  it('returns a node by id', async () => {
    const node = await repo.getNode('maths-fractions-equivalent')
    expect(node).not.toBeNull()
    expect(node?.title).toBe('Equivalent Fractions')
  })

  it('strips Mongo _id from results', async () => {
    const node = await repo.getNode('maths-fractions-equivalent')
    expect(node && '_id' in node).toBe(false)
  })

  it('returns null for unknown node', async () => {
    const node = await repo.getNode('nonexistent')
    expect(node).toBeNull()
  })

  it('returns zone nodes', async () => {
    const nodes = await repo.getZoneNodes('maths-fractions')
    expect(nodes.length).toBe(fractionsZoneNodes.length)
  })

  it('returns realm zones', async () => {
    const zones = await repo.getRealmZones('numerica')
    expect(zones.length).toBe(1)
    expect(zones[0].name).toBe('Fractions')
  })

  it('returns no zones for an empty realm', async () => {
    const zones = await repo.getRealmZones('vitalia')
    expect(zones).toEqual([])
  })

  it('returns all nodes', async () => {
    const nodes = await repo.getAllNodes()
    expect(nodes.length).toBe(fractionsZoneNodes.length)
  })
})
