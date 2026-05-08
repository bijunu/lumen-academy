import { describe, it, expect } from 'vitest'

import type { NodeProgress } from '@/types/progress'

import {
  masteryFromProgress,
  masteryStarCount,
  upgradeMastery,
} from './upgradeMastery'

function makeProgress(overrides: Partial<NodeProgress> = {}): NodeProgress {
  return {
    userId: 'u',
    nodeId: 'n',
    mastery: 'none',
    correctStreak: 0,
    totalAttempts: 0,
    totalCorrect: 0,
    lastAttemptAt: null,
    nextReviewAt: null,
    sm2: { interval: 0, repetition: 0, easeFactor: 2.5 },
    ...overrides,
  }
}

describe('masteryFromProgress', () => {
  it('returns none when no correct answers and no sm2 progress', () => {
    expect(masteryFromProgress(makeProgress())).toBe('none')
  })

  it('returns bronze on the first correct answer', () => {
    expect(
      masteryFromProgress(makeProgress({ totalCorrect: 1 }))
    ).toBe('bronze')
  })

  it('returns silver once the card has survived two reviews', () => {
    expect(
      masteryFromProgress(
        makeProgress({
          totalCorrect: 2,
          sm2: { interval: 6, repetition: 2, easeFactor: 2.5 },
        })
      )
    ).toBe('silver')
  })

  it('returns gold at four reps with healthy ease factor', () => {
    expect(
      masteryFromProgress(
        makeProgress({
          totalCorrect: 4,
          sm2: { interval: 15, repetition: 4, easeFactor: 2.5 },
        })
      )
    ).toBe('gold')
  })

  it('does not award gold when ease factor has dropped below 2.5', () => {
    expect(
      masteryFromProgress(
        makeProgress({
          totalCorrect: 4,
          sm2: { interval: 15, repetition: 4, easeFactor: 2.36 },
        })
      )
    ).toBe('silver')
  })

  it('returns platinum at six reps and at least 30 day interval', () => {
    expect(
      masteryFromProgress(
        makeProgress({
          totalCorrect: 6,
          sm2: { interval: 30, repetition: 6, easeFactor: 2.6 },
        })
      )
    ).toBe('platinum')
  })

  it('does not award platinum when interval is still under 30 days', () => {
    expect(
      masteryFromProgress(
        makeProgress({
          totalCorrect: 6,
          sm2: { interval: 20, repetition: 6, easeFactor: 2.6 },
        })
      )
    ).toBe('gold')
  })
})

describe('upgradeMastery', () => {
  it('moves mastery up when the rule says so', () => {
    expect(
      upgradeMastery(makeProgress({ mastery: 'none', totalCorrect: 1 }))
    ).toBe('bronze')
  })

  it('never downgrades when rep resets after a wrong answer', () => {
    expect(
      upgradeMastery(
        makeProgress({
          mastery: 'silver',
          totalCorrect: 2,
          sm2: { interval: 1, repetition: 0, easeFactor: 2.4 },
        })
      )
    ).toBe('silver')
  })

  it('preserves platinum even if ease factor drifts down', () => {
    expect(
      upgradeMastery(
        makeProgress({
          mastery: 'platinum',
          totalCorrect: 8,
          sm2: { interval: 30, repetition: 6, easeFactor: 2.0 },
        })
      )
    ).toBe('platinum')
  })
})

describe('masteryStarCount', () => {
  it('maps each level to its star count', () => {
    expect(masteryStarCount('none')).toBe(0)
    expect(masteryStarCount('bronze')).toBe(1)
    expect(masteryStarCount('silver')).toBe(2)
    expect(masteryStarCount('gold')).toBe(3)
    expect(masteryStarCount('platinum')).toBe(4)
  })
})
