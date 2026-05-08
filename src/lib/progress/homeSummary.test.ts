import { describe, expect, it } from 'vitest'

import type { SkillNode } from '@/types/content'
import type { NodeProgress } from '@/types/progress'

import {
  STREAK_WINDOW_DAYS,
  computeRealmProgress,
  computeStreakDays,
  emptyRealmProgress,
} from './homeSummary'

function progressRow(
  nodeId: string,
  mastery: NodeProgress['mastery']
): NodeProgress {
  return {
    nodeId,
    userId: 'u1',
    mastery,
    correctStreak: 0,
    totalAttempts: 1,
    totalCorrect: mastery === 'none' ? 0 : 1,
    lastAttemptAt: null,
    nextReviewAt: null,
    sm2: { interval: 0, repetition: 0, easeFactor: 2.5 },
  }
}

function node(
  id: string,
  realm: SkillNode['realm']
): Pick<SkillNode, 'id' | 'realm'> {
  return { id, realm }
}

describe('computeStreakDays', () => {
  it('returns 14 dots oldest-first ending today', () => {
    const now = new Date('2026-05-09T08:00:00Z')
    const days = computeStreakDays(['2026-05-09', '2026-05-07'], now)
    expect(days).toHaveLength(STREAK_WINDOW_DAYS)
    expect(days[STREAK_WINDOW_DAYS - 1]).toBe(true) // today
    expect(days[STREAK_WINDOW_DAYS - 2]).toBe(false) // yesterday (no session)
    expect(days[STREAK_WINDOW_DAYS - 3]).toBe(true) // two days ago
  })

  it('returns all false when no sessions', () => {
    const now = new Date('2026-05-09T00:00:00Z')
    const days = computeStreakDays([], now)
    expect(days.every(d => d === false)).toBe(true)
  })

  it('ignores session days outside the 14 day window', () => {
    const now = new Date('2026-05-09T00:00:00Z')
    const days = computeStreakDays(['2026-04-01'], now)
    expect(days.every(d => d === false)).toBe(true)
  })

  it('handles multiple sessions on the same day', () => {
    const now = new Date('2026-05-09T23:59:59Z')
    const days = computeStreakDays(
      ['2026-05-09', '2026-05-09', '2026-05-08'],
      now
    )
    expect(days[STREAK_WINDOW_DAYS - 1]).toBe(true)
    expect(days[STREAK_WINDOW_DAYS - 2]).toBe(true)
  })
})

describe('computeRealmProgress', () => {
  it('counts mastered nodes per realm and reports realm totals', () => {
    const allNodes = [
      node('m1', 'numerica'),
      node('m2', 'numerica'),
      node('m3', 'numerica'),
      node('b1', 'vitalia'),
      node('c1', 'elementia'),
    ]
    const rows = [
      progressRow('m1', 'silver'),
      progressRow('m2', 'none'),
      progressRow('b1', 'bronze'),
    ]
    const out = computeRealmProgress(rows, allNodes)
    expect(out.numerica).toEqual({ mastered: 1, total: 3 })
    expect(out.vitalia).toEqual({ mastered: 1, total: 1 })
    expect(out.elementia).toEqual({ mastered: 0, total: 1 })
    expect(out.mechanica).toEqual({ mastered: 0, total: 0 })
  })

  it('ignores progress for nodes not in catalogue', () => {
    const out = computeRealmProgress(
      [progressRow('orphan', 'gold')],
      [node('m1', 'numerica')]
    )
    expect(out.numerica).toEqual({ mastered: 0, total: 1 })
  })

  it('does not double count when progress includes mastery none', () => {
    const out = computeRealmProgress(
      [progressRow('m1', 'none')],
      [node('m1', 'numerica')]
    )
    expect(out.numerica).toEqual({ mastered: 0, total: 1 })
  })
})

describe('emptyRealmProgress', () => {
  it('returns zeroed totals for all realms', () => {
    const out = emptyRealmProgress()
    expect(out.numerica).toEqual({ mastered: 0, total: 0 })
    expect(out.vitalia).toEqual({ mastered: 0, total: 0 })
    expect(out.elementia).toEqual({ mastered: 0, total: 0 })
    expect(out.mechanica).toEqual({ mastered: 0, total: 0 })
  })
})
