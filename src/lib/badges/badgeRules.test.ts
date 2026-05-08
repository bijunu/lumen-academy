import { describe, it, expect } from 'vitest'

import { freshScholarProfile } from '@/lib/scholar/applyScholarUpdate'
import type { ScholarProfile } from '@/types/gamification'

import { BADGE_BY_ID, BADGES, evaluateBadges } from './badgeRules'

function makeProfile(overrides: Partial<ScholarProfile> = {}): ScholarProfile {
  return {
    ...freshScholarProfile('u1'),
    ...overrides,
  }
}

describe('BADGES metadata', () => {
  it('contains all twelve badge IDs', () => {
    expect(BADGES).toHaveLength(12)
  })

  it('marks nine as earnable today', () => {
    const earnable = BADGES.filter(b => b.earnable).map(b => b.id)
    expect(earnable.sort()).toEqual(
      [
        'bounce-back',
        'polymath',
        'deep-diver',
        'stretch-scholar',
        'misconception-hunter',
        'lumen-scholar',
        'quest-keeper',
        'boss-tamer',
        'realm-walker',
      ].sort()
    )
  })

  it('exposes a lookup by id', () => {
    expect(BADGE_BY_ID['polymath'].name).toBe('Polymath')
  })
})

describe('evaluateBadges', () => {
  it('returns nothing for a brand new profile', () => {
    expect(evaluateBadges(makeProfile())).toEqual([])
  })

  it('grants polymath when every realm has any XP', () => {
    const p = makeProfile({
      xpByRealm: { numerica: 5, vitalia: 5, elementia: 5, mechanica: 5 },
    })
    expect(evaluateBadges(p)).toContain('polymath')
  })

  it('does not grant polymath when one realm is still untouched', () => {
    const p = makeProfile({
      xpByRealm: { numerica: 5, vitalia: 5, elementia: 0, mechanica: 5 },
    })
    expect(evaluateBadges(p)).not.toContain('polymath')
  })

  it('grants deep-diver after five platinum nodes', () => {
    const p = makeProfile({
      counters: { ...makeProfile().counters, platinumCount: 5 },
    })
    expect(evaluateBadges(p)).toContain('deep-diver')
  })

  it('grants stretch-scholar after ten challenge correct answers', () => {
    const p = makeProfile({
      counters: { ...makeProfile().counters, challengeCorrect: 10 },
    })
    expect(evaluateBadges(p)).toContain('stretch-scholar')
  })

  it('grants misconception-hunter after five misconception correct answers', () => {
    const p = makeProfile({
      counters: { ...makeProfile().counters, misconceptionCorrect: 5 },
    })
    expect(evaluateBadges(p)).toContain('misconception-hunter')
  })

  it('grants bounce-back after one bounced node', () => {
    const p = makeProfile({
      counters: { ...makeProfile().counters, bouncedBackCount: 1 },
    })
    expect(evaluateBadges(p)).toContain('bounce-back')
  })

  it('grants lumen-scholar only when all four realms reach rank 10', () => {
    const enough = 1000
    const notEnough = 999
    const win = makeProfile({
      xpTotal: enough * 4,
      xpByRealm: {
        numerica: enough,
        vitalia: enough,
        elementia: enough,
        mechanica: enough,
      },
    })
    expect(evaluateBadges(win)).toContain('lumen-scholar')

    const lose = makeProfile({
      xpTotal: enough * 3 + notEnough,
      xpByRealm: {
        numerica: enough,
        vitalia: enough,
        elementia: enough,
        mechanica: notEnough,
      },
    })
    expect(evaluateBadges(lose)).not.toContain('lumen-scholar')
  })

  it('does not re-emit a badge that is already earned', () => {
    const p = makeProfile({
      counters: { ...makeProfile().counters, platinumCount: 5 },
      badges: { 'deep-diver': new Date() },
    })
    expect(evaluateBadges(p)).not.toContain('deep-diver')
  })

  it('never emits non-earnable stub badges', () => {
    const p = makeProfile({
      xpByRealm: { numerica: 5, vitalia: 5, elementia: 5, mechanica: 5 },
      counters: {
        challengeCorrect: 100,
        misconceptionCorrect: 100,
        platinumCount: 100,
        bouncedBackCount: 100,
        bossDefeats: 0,
      },
    })
    const newly = evaluateBadges(p)
    expect(newly).not.toContain('first-light')
    expect(newly).not.toContain('curious-mind')
    expect(newly).not.toContain('steady-hand')
  })
})

describe('boss-tamer rule', () => {
  it('does not grant when bossDefeats is 0', () => {
    const p = makeProfile()
    expect(evaluateBadges(p)).not.toContain('boss-tamer')
  })

  it('grants on the first defeat', () => {
    const p = makeProfile({
      counters: { ...makeProfile().counters, bossDefeats: 1 },
    })
    expect(evaluateBadges(p)).toContain('boss-tamer')
  })
})

describe('realm-walker rule', () => {
  const NOW = new Date('2026-05-09T12:00:00Z')

  it('does not grant when no coverage context is supplied', () => {
    const p = makeProfile({ defeatedZoneIds: ['fractions'] })
    expect(evaluateBadges(p, NOW)).not.toContain('realm-walker')
  })

  it('does not grant when no realm has full coverage', () => {
    const p = makeProfile()
    expect(
      evaluateBadges(p, NOW, {
        realmZoneCoverage: {
          numerica: { defeated: 1, total: 2 },
          vitalia: { defeated: 0, total: 1 },
          elementia: { defeated: 0, total: 0 },
          mechanica: { defeated: 0, total: 0 },
        },
      })
    ).not.toContain('realm-walker')
  })

  it('grants when one realm has full coverage', () => {
    const p = makeProfile()
    expect(
      evaluateBadges(p, NOW, {
        realmZoneCoverage: {
          numerica: { defeated: 2, total: 2 },
          vitalia: { defeated: 0, total: 1 },
          elementia: { defeated: 0, total: 0 },
          mechanica: { defeated: 0, total: 0 },
        },
      })
    ).toContain('realm-walker')
  })

  it('does not grant for an empty realm with 0/0 coverage', () => {
    const p = makeProfile()
    expect(
      evaluateBadges(p, NOW, {
        realmZoneCoverage: {
          numerica: { defeated: 0, total: 0 },
          vitalia: { defeated: 0, total: 0 },
          elementia: { defeated: 0, total: 0 },
          mechanica: { defeated: 0, total: 0 },
        },
      })
    ).not.toContain('realm-walker')
  })
})

describe('quest-keeper rule', () => {
  const NOW = new Date('2026-05-09T12:00:00Z')

  function recentDays(n: number, anchor = NOW): string[] {
    const out: string[] = []
    for (let i = 0; i < n; i++) {
      const d = new Date(anchor.getTime() - i * 24 * 60 * 60 * 1000)
      out.push(d.toISOString().slice(0, 10))
    }
    return out
  }

  it('does not grant quest-keeper at nine completions in fourteen days', () => {
    const p = makeProfile({ questCompletionDates: recentDays(9) })
    expect(evaluateBadges(p, NOW)).not.toContain('quest-keeper')
  })

  it('grants quest-keeper at ten completions in fourteen days', () => {
    const p = makeProfile({ questCompletionDates: recentDays(10) })
    expect(evaluateBadges(p, NOW)).toContain('quest-keeper')
  })

  it('keeps granting quest-keeper at eleven completions in fourteen days', () => {
    const p = makeProfile({ questCompletionDates: recentDays(11) })
    expect(evaluateBadges(p, NOW)).toContain('quest-keeper')
  })

  it('does not count dates older than the trailing fourteen day window', () => {
    const inWindow = recentDays(9)
    const stale = '2026-04-10'
    const p = makeProfile({ questCompletionDates: [...inWindow, stale] })
    expect(evaluateBadges(p, NOW)).not.toContain('quest-keeper')
  })
})
