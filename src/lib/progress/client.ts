'use client'

import type { BadgeId } from '@/types/gamification'
import type { MasteryLevel, NodeProgress } from '@/types/progress'

import type {
  AttemptWriteInput,
  SessionRecordWriteInput,
} from './schemas'

const ATTEMPT_URL = '/api/progress/attempt'
const SESSION_URL = '/api/progress/session'

export interface AttemptResponse {
  progress: NodeProgress
  badgeUnlocks: BadgeId[]
  masteryUpgraded: boolean
  previousMastery: MasteryLevel
}

export async function postAttempt(
  input: AttemptWriteInput
): Promise<AttemptResponse | null> {
  try {
    const res = await fetch(ATTEMPT_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(input),
      credentials: 'same-origin',
    })
    if (!res.ok) return null
    return (await res.json()) as AttemptResponse
  } catch {
    return null
  }
}

export async function postSession(
  input: SessionRecordWriteInput
): Promise<void> {
  try {
    await fetch(SESSION_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(input),
      credentials: 'same-origin',
    })
  } catch {
    // Best-effort: see postAttempt.
  }
}
