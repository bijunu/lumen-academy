import { describe, it, expect } from 'vitest'

import { InMemoryJudgeRateLimiter } from './judgeRateLimit'

describe('InMemoryJudgeRateLimiter', () => {
  it('allows the first call for a fresh user', () => {
    const limiter = new InMemoryJudgeRateLimiter()
    expect(limiter.check('alice')).toBe(true)
  })

  it('counts each call within the window', () => {
    const limiter = new InMemoryJudgeRateLimiter(60_000, 3)
    const t0 = new Date('2026-05-11T00:00:00Z')
    expect(limiter.check('alice', t0)).toBe(true)
    expect(limiter.check('alice', t0)).toBe(true)
    expect(limiter.check('alice', t0)).toBe(true)
    expect(limiter.check('alice', t0)).toBe(false)
  })

  it('does not consume budget across users', () => {
    const limiter = new InMemoryJudgeRateLimiter(60_000, 2)
    const t0 = new Date('2026-05-11T00:00:00Z')
    expect(limiter.check('alice', t0)).toBe(true)
    expect(limiter.check('alice', t0)).toBe(true)
    expect(limiter.check('alice', t0)).toBe(false)
    expect(limiter.check('bob', t0)).toBe(true)
    expect(limiter.check('bob', t0)).toBe(true)
    expect(limiter.check('bob', t0)).toBe(false)
  })

  it('resets the budget after the window passes', () => {
    const limiter = new InMemoryJudgeRateLimiter(60_000, 2)
    const t0 = new Date('2026-05-11T00:00:00Z')
    const tAfter = new Date(t0.getTime() + 60_001)
    expect(limiter.check('alice', t0)).toBe(true)
    expect(limiter.check('alice', t0)).toBe(true)
    expect(limiter.check('alice', t0)).toBe(false)
    expect(limiter.check('alice', tAfter)).toBe(true)
  })

  it('reset() clears all state', () => {
    const limiter = new InMemoryJudgeRateLimiter(60_000, 1)
    expect(limiter.check('alice')).toBe(true)
    expect(limiter.check('alice')).toBe(false)
    limiter.reset()
    expect(limiter.check('alice')).toBe(true)
  })
})
