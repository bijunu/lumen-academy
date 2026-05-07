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

  it('records a correct answer', () => {
    const { result } = renderHook(() => useSessionTracker())

    act(() => {
      result.current.recordAnswer(true, 10, 1)
    })

    expect(result.current.questionsAttempted).toBe(1)
    expect(result.current.questionsCorrect).toBe(1)
    expect(result.current.xpEarned).toBe(15) // 10 base + 5 first-try bonus
    expect(result.current.currentStreak).toBe(1)
  })

  it('records an incorrect answer and resets streak', () => {
    const { result } = renderHook(() => useSessionTracker())

    act(() => {
      result.current.recordAnswer(true, 10, 1)
      result.current.recordAnswer(false, 10, 1)
    })

    expect(result.current.questionsAttempted).toBe(2)
    expect(result.current.questionsCorrect).toBe(1)
    expect(result.current.currentStreak).toBe(0)
  })

  it('gives no first-try bonus on second attempt', () => {
    const { result } = renderHook(() => useSessionTracker())

    act(() => {
      result.current.recordAnswer(true, 10, 2)
    })

    expect(result.current.xpEarned).toBe(10) // base only, no first-try bonus
  })
})
