import { describe, it, expect } from 'vitest'

import { xpForAttempt } from './xpForAttempt'

describe('xpForAttempt', () => {
  it('returns base XP for a core tier non-first-try correct answer', () => {
    expect(xpForAttempt({ baseXp: 10, tier: 'core', firstTry: false })).toBe(10)
  })

  it('adds 50% on top of weighted base for a first-try success', () => {
    expect(xpForAttempt({ baseXp: 10, tier: 'core', firstTry: true })).toBe(15)
  })

  it('weights confident tier at 1.25x', () => {
    expect(xpForAttempt({ baseXp: 8, tier: 'confident', firstTry: false })).toBe(
      10
    )
  })

  it('weights challenge tier at 1.5x', () => {
    expect(xpForAttempt({ baseXp: 8, tier: 'challenge', firstTry: false })).toBe(
      12
    )
  })

  it('compounds first-try bonus on top of tier multiplier', () => {
    // 10 * 1.5 * 1.5 = 22.5 → rounds to 23
    expect(xpForAttempt({ baseXp: 10, tier: 'challenge', firstTry: true })).toBe(
      23
    )
  })

  it('rounds to the nearest integer', () => {
    // 7 * 1.25 = 8.75 → 9
    expect(xpForAttempt({ baseXp: 7, tier: 'confident', firstTry: false })).toBe(
      9
    )
  })
})
