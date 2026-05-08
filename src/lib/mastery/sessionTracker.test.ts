import { describe, it, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useSessionTracker } from './sessionTracker'

describe('useSessionTracker', () => {
  it('starts with zero stats', () => {
    const { result } = renderHook(() => useSessionTracker())
    expect(result.current.questionsAttempted).toBe(0)
    expect(result.current.questionsCorrect).toBe(0)
    expect(result.current.xpEarned).toBe(0)
    expect(result.current.currentStreak).toBe(0)
  })

  it('records a correct first-try core answer with the first-try bonus', () => {
    const { result } = renderHook(() => useSessionTracker())

    act(() => {
      result.current.recordAnswer(true, 10, 1, 'core')
    })

    expect(result.current.questionsAttempted).toBe(1)
    expect(result.current.questionsCorrect).toBe(1)
    expect(result.current.xpEarned).toBe(15) // 10 base + 50% first-try bonus
    expect(result.current.currentStreak).toBe(1)
  })

  it('records an incorrect answer and resets streak', () => {
    const { result } = renderHook(() => useSessionTracker())

    act(() => {
      result.current.recordAnswer(true, 10, 1, 'core')
      result.current.recordAnswer(false, 10, 1, 'core')
    })

    expect(result.current.questionsAttempted).toBe(2)
    expect(result.current.questionsCorrect).toBe(1)
    expect(result.current.currentStreak).toBe(0)
  })

  it('gives no first-try bonus on second attempt', () => {
    const { result } = renderHook(() => useSessionTracker())

    act(() => {
      result.current.recordAnswer(true, 10, 2, 'core')
    })

    expect(result.current.xpEarned).toBe(10) // base only, no first-try bonus
  })

  it('weights challenge tier higher than core for the same base XP', () => {
    const { result } = renderHook(() => useSessionTracker())

    act(() => {
      result.current.recordAnswer(true, 10, 2, 'challenge')
    })

    // 10 * 1.5 = 15, no first-try bonus
    expect(result.current.xpEarned).toBe(15)
  })

  it('compounds first-try bonus with confident tier weighting', () => {
    const { result } = renderHook(() => useSessionTracker())

    act(() => {
      result.current.recordAnswer(true, 10, 1, 'confident')
    })

    // 10 * 1.25 * 1.5 = 18.75 → 19
    expect(result.current.xpEarned).toBe(19)
  })
})
