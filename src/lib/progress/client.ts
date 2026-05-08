'use client'

import type {
  AttemptWriteInput,
  SessionRecordWriteInput,
} from './schemas'

const ATTEMPT_URL = '/api/progress/attempt'
const SESSION_URL = '/api/progress/session'

export async function postAttempt(input: AttemptWriteInput): Promise<void> {
  try {
    await fetch(ATTEMPT_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(input),
      credentials: 'same-origin',
    })
  } catch {
    // Best-effort: a failed persist must not block the UI.
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
