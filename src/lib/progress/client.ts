'use client'

import type { BadgeId } from '@/types/gamification'
import type { MasteryLevel, NodeProgress } from '@/types/progress'

import type {
  AttemptWriteInput,
  SessionRecordWriteInput,
} from './schemas'

const ATTEMPT_URL = '/api/progress/attempt'
const SESSION_URL = '/api/progress/session'
const JUDGE_FREETEXT_URL = '/api/judge/freetext'
const JUDGE_MISSING_STEP_URL = '/api/judge/missing-step'

export interface AttemptResponse {
  progress: NodeProgress
  badgeUnlocks: BadgeId[]
  masteryUpgraded: boolean
  previousMastery: MasteryLevel
  correct?: boolean
  judgeReason?: string
}

export interface FreeTextJudgeResponse {
  correct: boolean
  reason: string
}

export async function judgeFreeTextAnswer(input: {
  nodeId: string
  questionId: string
  answer: string
}): Promise<FreeTextJudgeResponse | null> {
  try {
    const res = await fetch(JUDGE_FREETEXT_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(input),
      credentials: 'same-origin',
    })
    if (!res.ok) return null
    return (await res.json()) as FreeTextJudgeResponse
  } catch {
    return null
  }
}

export async function judgeMissingStepAnswer(input: {
  nodeId: string
  questionId: string
  answer: string
}): Promise<FreeTextJudgeResponse | null> {
  try {
    const res = await fetch(JUDGE_MISSING_STEP_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(input),
      credentials: 'same-origin',
    })
    if (!res.ok) return null
    return (await res.json()) as FreeTextJudgeResponse
  } catch {
    return null
  }
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

export interface SessionResponse {
  ok: boolean
  id: string
  questCompleted: boolean
  badgeUnlocks: BadgeId[]
}

export async function postSession(
  input: SessionRecordWriteInput
): Promise<SessionResponse | null> {
  try {
    const res = await fetch(SESSION_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(input),
      credentials: 'same-origin',
    })
    if (!res.ok) return null
    return (await res.json()) as SessionResponse
  } catch {
    return null
  }
}
