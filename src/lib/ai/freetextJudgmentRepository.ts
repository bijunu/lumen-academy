import { createHash } from 'crypto'
import { type Db } from 'mongodb'

import { FREETEXT_JUDGMENTS_COLLECTION } from '@/lib/db/ensureIndexes'
import { getMongoDb } from '@/lib/db/mongoClient'

export interface FreetextJudgmentRecord {
  questionId: string
  answerHash: string
  correct: boolean
  reason: string
  judgedAt: Date
}

export interface FreetextJudgmentRepository {
  get(
    questionId: string,
    answer: string
  ): Promise<FreetextJudgmentRecord | null>
  save(record: FreetextJudgmentRecord): Promise<void>
}

const PROJECTION = { _id: 0 } as const

export function hashAnswer(answer: string): string {
  const normalised = answer.trim().replace(/\s+/g, ' ').toLowerCase()
  return createHash('sha256').update(normalised).digest('hex')
}

export class MongoFreetextJudgmentRepository
  implements FreetextJudgmentRepository
{
  constructor(private readonly dbPromise: Promise<Db> = getMongoDb()) {}

  async get(
    questionId: string,
    answer: string
  ): Promise<FreetextJudgmentRecord | null> {
    const db = await this.dbPromise
    const col = db.collection<FreetextJudgmentRecord>(
      FREETEXT_JUDGMENTS_COLLECTION
    )
    const hash = hashAnswer(answer)
    return col.findOne(
      { questionId, answerHash: hash },
      { projection: PROJECTION }
    )
  }

  async save(record: FreetextJudgmentRecord): Promise<void> {
    const db = await this.dbPromise
    const col = db.collection<FreetextJudgmentRecord>(
      FREETEXT_JUDGMENTS_COLLECTION
    )
    await col.updateOne(
      { questionId: record.questionId, answerHash: record.answerHash },
      { $set: record },
      { upsert: true }
    )
  }
}

let cached: FreetextJudgmentRepository | null = null
export function getFreetextJudgmentRepository(): FreetextJudgmentRepository {
  if (!cached) cached = new MongoFreetextJudgmentRepository()
  return cached
}
