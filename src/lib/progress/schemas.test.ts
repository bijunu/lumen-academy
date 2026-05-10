import { describe, expect, it } from 'vitest'

import {
  attemptWriteSchema,
  dailyChallengeAttemptSchema,
  sessionRecordWriteSchema,
} from './schemas'

describe('attemptWriteSchema', () => {
  const valid = {
    nodeId: 'maths-fractions-equivalent',
    questionId: 'q1',
    attemptCount: 1,
    answer: 1,
  }

  it('accepts a payload with an answer payload', () => {
    const result = attemptWriteSchema.safeParse(valid)
    expect(result.success).toBe(true)
  })

  it('accepts a payload with clientCorrect for renderer-scored types', () => {
    const result = attemptWriteSchema.safeParse({
      nodeId: 'n',
      questionId: 'q',
      attemptCount: 1,
      clientCorrect: true,
    })
    expect(result.success).toBe(true)
  })

  it('accepts a valid payload with hintLevel', () => {
    const result = attemptWriteSchema.safeParse({
      ...valid,
      hintLevel: 'partial',
    })
    expect(result.success).toBe(true)
  })

  it('rejects when nodeId is missing', () => {
    const { nodeId: _omit, ...rest } = valid
    void _omit
    const result = attemptWriteSchema.safeParse(rest)
    expect(result.success).toBe(false)
  })

  it('rejects an unknown hintLevel value', () => {
    const result = attemptWriteSchema.safeParse({
      ...valid,
      hintLevel: 'mega-hint',
    })
    expect(result.success).toBe(false)
  })

  it('rejects attemptCount below 1', () => {
    const result = attemptWriteSchema.safeParse({ ...valid, attemptCount: 0 })
    expect(result.success).toBe(false)
  })
})

describe('sessionRecordWriteSchema', () => {
  const valid = {
    startedAt: '2026-05-08T12:00:00Z',
    endedAt: '2026-05-08T12:30:00Z',
    nodeIds: ['maths-fractions-equivalent'],
    questionsAttempted: 5,
    questionsCorrect: 4,
    xpEarned: 50,
    masteryChanges: [],
  }

  it('coerces ISO string dates into Date instances', () => {
    const result = sessionRecordWriteSchema.safeParse(valid)
    expect(result.success).toBe(true)
    if (result.success) {
      expect(result.data.startedAt).toBeInstanceOf(Date)
      expect(result.data.endedAt).toBeInstanceOf(Date)
    }
  })

  it('accepts endedAt as null', () => {
    const result = sessionRecordWriteSchema.safeParse({
      ...valid,
      endedAt: null,
    })
    expect(result.success).toBe(true)
  })

  it('rejects when questionsCorrect exceeds questionsAttempted', () => {
    const result = sessionRecordWriteSchema.safeParse({
      ...valid,
      questionsAttempted: 3,
      questionsCorrect: 5,
    })
    expect(result.success).toBe(false)
  })

  it('rejects an empty nodeIds array', () => {
    const result = sessionRecordWriteSchema.safeParse({
      ...valid,
      nodeIds: [],
    })
    expect(result.success).toBe(false)
  })
})

describe('dailyChallengeAttemptSchema', () => {
  it('accepts an answer payload', () => {
    expect(dailyChallengeAttemptSchema.safeParse({ answer: 0 }).success).toBe(true)
  })

  it('accepts a clientCorrect boolean for renderer-scored types', () => {
    expect(
      dailyChallengeAttemptSchema.safeParse({ clientCorrect: true }).success
    ).toBe(true)
  })

  it('accepts an empty payload (server scoring will reject if needed)', () => {
    expect(dailyChallengeAttemptSchema.safeParse({}).success).toBe(true)
  })

  it('rejects clientCorrect of the wrong type', () => {
    expect(
      dailyChallengeAttemptSchema.safeParse({ clientCorrect: 'yes' }).success
    ).toBe(false)
  })
})
