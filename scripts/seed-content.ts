/**
 * One-shot seeder for content_nodes and content_zones in MongoDB Atlas.
 * Idempotent: re-running upserts existing documents by `id`.
 *
 * Usage:
 *   npm run seed                    (loads .env.local via --env-file)
 *   MONGODB_URI=... npm run seed    (override)
 */
import { MongoClient } from 'mongodb'
import { fractionsZoneNodes } from '../src/content/seed'
import type { SkillNode, Zone } from '../src/types/content'

const NODES_COLLECTION = 'content_nodes'
const ZONES_COLLECTION = 'content_zones'
const DEFAULT_DB_NAME = 'lumen-academy'

const allNodes: SkillNode[] = [...fractionsZoneNodes]

const allZones: Zone[] = [
  {
    id: 'maths-fractions',
    name: 'Fractions',
    realm: 'numerica',
    nodeIds: fractionsZoneNodes.map(n => n.id),
  },
]

async function seed(): Promise<void> {
  const uri = process.env.MONGODB_URI
  if (!uri) {
    throw new Error('MONGODB_URI is required. Set it in .env.local or export it.')
  }
  const dbName = process.env.MONGODB_DB_NAME ?? DEFAULT_DB_NAME

  const client = new MongoClient(uri)
  await client.connect()
  console.info(`[seed] Connected to ${dbName}`)

  try {
    const db = client.db(dbName)
    const nodes = db.collection<SkillNode>(NODES_COLLECTION)
    const zones = db.collection<Zone>(ZONES_COLLECTION)

    await nodes.createIndex({ id: 1 }, { unique: true })
    await nodes.createIndex({ zoneId: 1 })
    await nodes.createIndex({ realm: 1 })
    await zones.createIndex({ id: 1 }, { unique: true })
    await zones.createIndex({ realm: 1 })
    console.info('[seed] Indexes ensured')

    let nodeCount = 0
    for (const node of allNodes) {
      await nodes.replaceOne({ id: node.id }, node, { upsert: true })
      nodeCount++
    }
    console.info(`[seed] Upserted ${nodeCount} nodes`)

    let zoneCount = 0
    for (const zone of allZones) {
      await zones.replaceOne({ id: zone.id }, zone, { upsert: true })
      zoneCount++
    }
    console.info(`[seed] Upserted ${zoneCount} zones`)

    console.info('[seed] Done')
  } finally {
    await client.close()
  }
}

seed().catch(err => {
  console.error('[seed] Failed:', err)
  process.exit(1)
})
