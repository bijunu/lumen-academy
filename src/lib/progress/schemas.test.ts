import { describe, expect, it } from 'vitest'

import { attemptWriteSchema, sessionRecordWriteSchema } from './schemas'

describe('attemptWriteSchema', () => {
  const valid = {
    nodeId: 'maths-fractions-equivalent',
    questionId: 'q1',
    correct: true,
    attemptCount: 1,
  }

  it('accepts a minimal valid payload without hintLevel', () => {
    const result = attemptWriteSchema.safeParse(valid)
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
