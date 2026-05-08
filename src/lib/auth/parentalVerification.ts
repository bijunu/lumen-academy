import { randomBytes } from 'node:crypto'
import { ObjectId, type Db } from 'mongodb'

import { getMongoDb } from '@/lib/db/mongoClient'

export const PARENT_TOKENS_COLLECTION = 'parent_verification_tokens'
export const USERS_COLLECTION = 'users'

const DEFAULT_TTL_MS = 24 * 60 * 60 * 1000

export type ParentTokenDoc = {
  token: string
  learnerUserId: string
  parentEmail: string
  expiresAt: Date
  consumedAt: Date | null
  createdAt: Date
}

export type IssueTokenInput = {
  learnerUserId: string
  parentEmail: string
  baseUrl?: string
  ttlMs?: number
}

export type IssueTokenResult = {
  token: string
  url: string
  expiresAt: Date
}

export type ConsumeResult =
  | { ok: true; learnerUserId: string }
  | {
      ok: false
      reason: 'not-found' | 'expired' | 'already-consumed' | 'user-missing'
    }

function resolveBaseUrl(explicit: string | undefined): string {
  const raw = explicit ?? process.env.AUTH_URL ?? 'http://localhost:3000'
  return raw.replace(/\/+$/, '')
}

export class ParentalVerification {
  constructor(private readonly dbPromise: Promise<Db> = getMongoDb()) {}

  private async tokens() {
    const db = await this.dbPromise
    return db.collection<ParentTokenDoc>(PARENT_TOKENS_COLLECTION)
  }

  private async users() {
    const db = await this.dbPromise
    return db.collection(USERS_COLLECTION)
  }

  async issueToken(input: IssueTokenInput): Promise<IssueTokenResult> {
    const token = randomBytes(32).toString('hex')
    const now = new Date()
    const expiresAt = new Date(now.getTime() + (input.ttlMs ?? DEFAULT_TTL_MS))

    const tokens = await this.tokens()
    await tokens.insertOne({
      token,
      learnerUserId: input.learnerUserId,
      parentEmail: input.parentEmail.trim().toLowerCase(),
      expiresAt,
      consumedAt: null,
      createdAt: now,
    })

    const url = `${resolveBaseUrl(input.baseUrl)}/verify?token=${token}`
    return { token, url, expiresAt }
  }

  async consumeToken(token: string): Promise<ConsumeResult> {
    const tokens = await this.tokens()
    const doc = await tokens.findOne({ token })
    if (!doc) return { ok: false, reason: 'not-found' }
    if (doc.consumedAt) return { ok: false, reason: 'already-consumed' }
    if (doc.expiresAt.getTime() < Date.now()) {
      return { ok: false, reason: 'expired' }
    }

    let userObjectId: ObjectId
    try {
      userObjectId = new ObjectId(doc.learnerUserId)
    } catch {
      return { ok: false, reason: 'user-missing' }
    }

    const users = await this.users()
    const updated = await users.updateOne(
      { _id: userObjectId },
      { $set: { parentVerifiedAt: new Date() } }
    )
    if (updated.matchedCount === 0) {
      return { ok: false, reason: 'user-missing' }
    }

    await tokens.updateOne({ token }, { $set: { consumedAt: new Date() } })
    return { ok: true, learnerUserId: doc.learnerUserId }
  }
}

export function getParentalVerification(): ParentalVerification {
  return new ParentalVerification()
}
