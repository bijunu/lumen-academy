import { describe, it, expect } from 'vitest'
import { qualityFromAttempt } from './qualityFromAttempt'

describe('qualityFromAttempt', () => {
  it('first-try correct with no hint scores 5', () => {
    expect(
      qualityFromAttempt({ correct: true, attemptCount: 1 })
    ).toBe(5)
  })

  it('first-try correct after a nudge scores 4', () => {
    expect(
      qualityFromAttempt({
        correct: true,
        attemptCount: 1,
        hintLevel: 'nudge',
      })
    ).toBe(4)
  })

  it('first-try correct after a partial hint scores 3', () => {
    expect(
      qualityFromAttempt({
        correct: true,
        attemptCount: 1,
        hintLevel: 'partial',
      })
    ).toBe(3)
  })

  it('first-try correct after a worked example scores 3', () => {
    expect(
      qualityFromAttempt({
        correct: true,
        attemptCount: 1,
        hintLevel: 'worked',
      })
    ).toBe(3)
  })

  it('penalises additional attempts but stays at the passing floor', () => {
    expect(
      qualityFromAttempt({ correct: true, attemptCount: 2 })
    ).toBe(4)
    expect(
      qualityFromAttempt({ correct: true, attemptCount: 3 })
    ).toBe(3)
    expect(
      qualityFromAttempt({ correct: true, attemptCount: 10 })
    ).toBe(3)
  })

  it('correct after a nudge on attempt 2 still passes', () => {
    expect(
      qualityFromAttempt({
        correct: true,
        attemptCount: 2,
        hintLevel: 'nudge',
      })
    ).toBe(3)
  })

  it('incorrect first attempt scores 2', () => {
    expect(
      qualityFromAttempt({ correct: false, attemptCount: 1 })
    ).toBe(2)
  })

  it('incorrect second attempt scores 1', () => {
    expect(
      qualityFromAttempt({ correct: false, attemptCount: 2 })
    ).toBe(1)
  })

  it('incorrect third attempt scores 0', () => {
    expect(
      qualityFromAttempt({ correct: false, attemptCount: 3 })
    ).toBe(0)
  })

  it('incorrect tenth attempt still scores 0', () => {
    expect(
      qualityFromAttempt({ correct: false, attemptCount: 10 })
    ).toBe(0)
  })
})
