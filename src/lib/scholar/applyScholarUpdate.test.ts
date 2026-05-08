import { describe, it, expect } from 'vitest'

import {
  applyScholarUpdate,
  countQuestCompletionsInWindow,
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
      bossDefeats: 0,
    })
    expect(p.badges).toEqual({})
    expect(p.questCompletionDates).toEqual([])
    expect(p.defeatedZoneIds).toEqual([])
    expect(p.updatedAt).toBeNull()
  })
})

describe('applyScholarUpdate defeatedZoneIds', () => {
  it('appends a new zone id', () => {
    let p = freshScholarProfile('u1')
    p = applyScholarUpdate(p, {
      realm: 'numerica',
      xpDelta: 0,
      insightDelta: 0,
      sparkDelta: 0,
      bossZoneDefeated: 'fractions',
      occurredAt: new Date('2026-05-09T08:00:00Z'),
    })
    expect(p.defeatedZoneIds).toEqual(['fractions'])
  })

  it('dedupes when the same zone id is recorded twice', () => {
    let p = freshScholarProfile('u1')
    const args = {
      realm: 'numerica' as const,
      xpDelta: 0,
      insightDelta: 0,
      sparkDelta: 0,
      bossZoneDefeated: 'fractions',
      occurredAt: new Date('2026-05-09T08:00:00Z'),
    }
    p = applyScholarUpdate(p, args)
    p = applyScholarUpdate(p, args)
    expect(p.defeatedZoneIds).toEqual(['fractions'])
  })

  it('accumulates bossDefeats counter delta', () => {
    let p = freshScholarProfile('u1')
    p = applyScholarUpdate(p, {
      realm: 'numerica',
      xpDelta: 0,
      insightDelta: 0,
      sparkDelta: 0,
      counterDeltas: { bossDefeats: 1 },
      occurredAt: new Date('2026-05-09T08:00:00Z'),
    })
    expect(p.counters.bossDefeats).toBe(1)
  })
})

describe('applyScholarUpdate questCompletionDates', () => {
  it('appends a new utcDay key', () => {
    let p = freshScholarProfile('u1')
    p = applyScholarUpdate(p, {
      realm: 'numerica',
      xpDelta: 0,
      insightDelta: 0,
      sparkDelta: 0,
      questCompletedOn: '2026-05-09',
      occurredAt: new Date('2026-05-09T08:00:00Z'),
    })
    expect(p.questCompletionDates).toEqual(['2026-05-09'])
  })

  it('dedupes when the same day is recorded twice', () => {
    let p = freshScholarProfile('u1')
    const args = {
      realm: 'numerica' as const,
      xpDelta: 0,
      insightDelta: 0,
      sparkDelta: 0,
      questCompletedOn: '2026-05-09',
      occurredAt: new Date('2026-05-09T08:00:00Z'),
    }
    p = applyScholarUpdate(p, args)
    p = applyScholarUpdate(p, args)
    expect(p.questCompletionDates).toEqual(['2026-05-09'])
  })

  it('keeps only the 28 most recent dates', () => {
    let p = freshScholarProfile('u1')
    for (let i = 0; i < 35; i++) {
      const day = new Date(Date.UTC(2026, 0, i + 1))
      const key = day.toISOString().slice(0, 10)
      p = applyScholarUpdate(p, {
        realm: 'numerica',
        xpDelta: 0,
        insightDelta: 0,
        sparkDelta: 0,
        questCompletedOn: key,
        occurredAt: day,
      })
    }
    expect(p.questCompletionDates).toHaveLength(28)
    expect(p.questCompletionDates[0]).toBe('2026-02-04')
    expect(p.questCompletionDates[27]).toBe('2026-01-08')
  })

  it('leaves dates untouched when no questCompletedOn provided', () => {
    let p = freshScholarProfile('u1')
    p = applyScholarUpdate(p, {
      realm: 'numerica',
      xpDelta: 5,
      insightDelta: 0,
      sparkDelta: 0,
      questCompletedOn: '2026-05-09',
      occurredAt: new Date('2026-05-09T08:00:00Z'),
    })
    p = applyScholarUpdate(p, {
      realm: 'numerica',
      xpDelta: 5,
      insightDelta: 0,
      sparkDelta: 0,
      occurredAt: new Date('2026-05-10T08:00:00Z'),
    })
    expect(p.questCompletionDates).toEqual(['2026-05-09'])
  })
})

describe('countQuestCompletionsInWindow', () => {
  const now = new Date('2026-05-09T12:00:00Z')

  it('counts dates strictly within the trailing window', () => {
    const dates = [
      '2026-05-09',
      '2026-05-08',
      '2026-05-01',
      '2026-04-26',
      '2026-04-25',
    ]
    expect(countQuestCompletionsInWindow(dates, now, 14)).toBe(4)
  })

  it('returns 0 for an empty list', () => {
    expect(countQuestCompletionsInWindow([], now, 14)).toBe(0)
  })

  it('ignores malformed entries', () => {
    expect(
      countQuestCompletionsInWindow(['nonsense', '2026-05-09'], now, 14)
    ).toBe(1)
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
