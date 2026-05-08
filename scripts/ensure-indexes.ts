/**
 * One-shot index bootstrap for Atlas.
 * Idempotent: safe to re-run on every deploy.
 *
 * Usage:
 *   npm run ensure-indexes
 *   MONGODB_URI=... npm run ensure-indexes
 */
import { MongoClient } from 'mongodb'

import { ensureIndexes } from '../src/lib/db/ensureIndexes'

const DEFAULT_DB_NAME = 'lumen-academy'

async function run(): Promise<void> {
  const uri = process.env.MONGODB_URI
  if (!uri) {
    throw new Error(
      'MONGODB_URI is required. Set it in .env.local or export it.'
    )
  }
  const dbName = process.env.MONGODB_DB_NAME ?? DEFAULT_DB_NAME

  const client = new MongoClient(uri)
  await client.connect()
  console.info(`[ensure-indexes] Connected to ${dbName}`)

  try {
    const db = client.db(dbName)
    await ensureIndexes(db)
    console.info('[ensure-indexes] Done')
  } finally {
    await client.close()
  }
}

run().catch(err => {
  console.error('[ensure-indexes] Failed:', err)
  process.exit(1)
})
