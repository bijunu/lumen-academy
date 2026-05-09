/**
 * One-shot seeder for content_nodes and content_zones in MongoDB Atlas.
 * Idempotent: re-running upserts existing documents by `id`.
 *
 * Usage:
 *   npm run seed                              (all subjects)
 *   npm run seed -- --subject=biology        (one subject only)
 *   MONGODB_URI=... npm run seed              (override URI)
 */
import { MongoClient } from 'mongodb'
import {
  SUBJECT_BUNDLES,
  allSeededNodes,
  allSeededZones,
  type SeederSubject,
} from '../src/content/seed'
import {
  CONTENT_NODES_COLLECTION,
  CONTENT_ZONES_COLLECTION,
  ensureIndexes,
} from '../src/lib/db/ensureIndexes'
import type { SkillNode, Zone } from '../src/types/content'

const DEFAULT_DB_NAME = 'lumen-academy'

function parseSubjectArg(): SeederSubject | null {
  const arg = process.argv.find(a => a.startsWith('--subject='))
  if (!arg) return null
  const value = arg.split('=')[1]
  if (!value || !(value in SUBJECT_BUNDLES)) {
    const allowed = Object.keys(SUBJECT_BUNDLES).join(', ')
    throw new Error(
      `--subject=${value} is not recognised. Allowed: ${allowed}.`
    )
  }
  return value as SeederSubject
}

function selectBundle(): { nodes: SkillNode[]; zones: Zone[]; label: string } {
  const subject = parseSubjectArg()
  if (subject) {
    const bundle = SUBJECT_BUNDLES[subject]
    return { nodes: bundle.nodes, zones: bundle.zones, label: subject }
  }
  return { nodes: allSeededNodes, zones: allSeededZones, label: 'all subjects' }
}

async function seed(): Promise<void> {
  const uri = process.env.MONGODB_URI
  if (!uri) {
    throw new Error('MONGODB_URI is required. Set it in .env.local or export it.')
  }
  const dbName = process.env.MONGODB_DB_NAME ?? DEFAULT_DB_NAME

  const { nodes: targetNodes, zones: targetZones, label } = selectBundle()

  const client = new MongoClient(uri)
  await client.connect()
  console.info(`[seed] Connected to ${dbName}; seeding ${label}`)

  try {
    const db = client.db(dbName)
    const nodes = db.collection<SkillNode>(CONTENT_NODES_COLLECTION)
    const zones = db.collection<Zone>(CONTENT_ZONES_COLLECTION)

    await ensureIndexes(db)
    console.info('[seed] Indexes ensured')

    let nodeCount = 0
    for (const node of targetNodes) {
      await nodes.replaceOne({ id: node.id }, node, { upsert: true })
      nodeCount++
    }
    console.info(`[seed] Upserted ${nodeCount} nodes`)

    let zoneCount = 0
    for (const zone of targetZones) {
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
