import { describe, it, expect } from 'vitest'

import {
  applyScholarUpdate,
  deriveRanks,
  freshScholarProfile,
} from './applyScholarUpdate'

const NOW = new Date('2026-05-08T12:00:00Z')

describe('freshScholarProfile', () => {
  it('returns zeroed counters for every realm', () => {
    const p = freshScholarProfile('u1')
    expect(p.userId).toBe('u1')
    expect(p.xpTotal).toBe(0)
    expect(p.currencies).toEqual({ insight: 0, spark: 0 })
    expect(p.xpByRealm).toEqual({
      numerica: 0,
      vitalia: 0,
      elementia: 0,
      mechanica: 0,
    })
    expect(p.counters).toEqual({
      challengeCorrect: 0,
      misconceptionCorrect: 0,
      platinumCount: 0,
      bouncedBackCount: 0,
    })
    expect(p.badges).toEqual({})
    expect(p.updatedAt).toBeNull()
  })
})

describe('applyScholarUpdate counters', () => {
  it('accumulates partial counter deltas without disturbing the others', () => {
    let p = freshScholarProfile('u1')
    p = applyScholarUpdate(p, {
      realm: 'numerica',
      xpDelta: 0,
      insightDelta: 0,
      sparkDelta: 0,
      counterDeltas: { challengeCorrect: 1, misconceptionCorrect: 1 },
      occurredAt: NOW,
    })
    expect(p.counters.challengeCorrect).toBe(1)
    expect(p.counters.misconceptionCorrect).toBe(1)
    expect(p.counters.platinumCount).toBe(0)
    expect(p.counters.bouncedBackCount).toBe(0)
  })

  it('leaves counters untouched when no counterDeltas provided', () => {
    let p = freshScholarProfile('u1')
    p = applyScholarUpdate(p, {
      realm: 'numerica',
      xpDelta: 5,
      insightDelta: 1,
      sparkDelta: 0,
      occurredAt: NOW,
    })
    expect(p.counters.challengeCorrect).toBe(0)
    expect(p.counters.platinumCount).toBe(0)
  })

  it('preserves badges across updates', () => {
    let p = freshScholarProfile('u1')
    p = { ...p, badges: { 'deep-diver': new Date('2026-01-01T00:00:00Z') } }
    p = applyScholarUpdate(p, {
      realm: 'numerica',
      xpDelta: 5,
      insightDelta: 1,
      sparkDelta: 0,
      occurredAt: NOW,
    })
    expect(p.badges['deep-diver']).toEqual(new Date('2026-01-01T00:00:00Z'))
  })
})

describe('applyScholarUpdate', () => {
  it('accumulates XP into the correct realm and total', () => {
    const start = freshScholarProfile('u1')
    const next = applyScholarUpdate(start, {
      realm: 'numerica',
      xpDelta: 15,
      insightDelta: 1,
      sparkDelta: 0,
      occurredAt: NOW,
    })
    expect(next.xpTotal).toBe(15)
    expect(next.xpByRealm.numerica).toBe(15)
    expect(next.xpByRealm.vitalia).toBe(0)
    expect(next.currencies.insight).toBe(1)
    expect(next.currencies.spark).toBe(0)
    expect(next.updatedAt).toEqual(NOW)
  })

  it('keeps xp realms independent across updates', () => {
    let p = freshScholarProfile('u1')
    p = applyScholarUpdate(p, {
      realm: 'numerica',
      xpDelta: 10,
      insightDelta: 0,
      sparkDelta: 0,
      occurredAt: NOW,
    })
    p = applyScholarUpdate(p, {
      realm: 'vitalia',
      xpDelta: 7,
      insightDelta: 0,
      sparkDelta: 0,
      occurredAt: NOW,
    })
    expect(p.xpByRealm.numerica).toBe(10)
    expect(p.xpByRealm.vitalia).toBe(7)
    expect(p.xpTotal).toBe(17)
  })

  it('credits Spark on a mastery upgrade event', () => {
    const start = freshScholarProfile('u1')
    const next = applyScholarUpdate(start, {
      realm: 'numerica',
      xpDelta: 0,
      insightDelta: 0,
      sparkDelta: 1,
      occurredAt: NOW,
    })
    expect(next.currencies.spark).toBe(1)
  })

  it('does not mutate the input profile', () => {
    const start = freshScholarProfile('u1')
    applyScholarUpdate(start, {
      realm: 'numerica',
      xpDelta: 5,
      insightDelta: 1,
      sparkDelta: 0,
      occurredAt: NOW,
    })
    expect(start.xpTotal).toBe(0)
    expect(start.xpByRealm.numerica).toBe(0)
    expect(start.currencies.insight).toBe(0)
  })
})

describe('deriveRanks', () => {
  it('returns rank 0 for a brand new profile', () => {
    const ranks = deriveRanks(freshScholarProfile('u1'))
    expect(ranks.overall).toBe(0)
    expect(ranks.byRealm.numerica).toBe(0)
  })

  it('uses 100 XP per rank', () => {
    const p = applyScholarUpdate(freshScholarProfile('u1'), {
      realm: 'numerica',
      xpDelta: 250,
      insightDelta: 0,
      sparkDelta: 0,
      occurredAt: NOW,
    })
    const ranks = deriveRanks(p)
    expect(ranks.byRealm.numerica).toBe(2)
    expect(ranks.overall).toBe(2)
  })

  it('floors fractional progress towards the lower rank', () => {
    const p = applyScholarUpdate(freshScholarProfile('u1'), {
      realm: 'vitalia',
      xpDelta: 99,
      insightDelta: 0,
      sparkDelta: 0,
      occurredAt: NOW,
    })
    expect(deriveRanks(p).byRealm.vitalia).toBe(0)
  })
})
