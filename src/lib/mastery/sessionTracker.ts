'use client'

import { useCallback, useRef, useState } from 'react'

const BRONZE_STREAK = 5
const XP_STREAK_BONUS = 5

export function useSessionTracker() {
  const [questionsAttempted, setQuestionsAttempted] = useState(0)
  const [questionsCorrect, setQuestionsCorrect] = useState(0)
  const [xpEarned, setXpEarned] = useState(0)
  const [currentStreak, setCurrentStreak] = useState(0)
  const bestStreak = useRef(0)

  const recordAnswer = useCallback(
    (correct: boolean, baseXp: number, attemptCount: number) => {
      setQuestionsAttempted(prev => prev + 1)

      if (correct) {
        setQuestionsCorrect(prev => prev + 1)

        let xp = baseXp
        if (attemptCount === 1) xp += Math.round(baseXp * 0.5)

        setCurrentStreak(prev => {
          const next = prev + 1
          if (next > bestStreak.current) bestStreak.current = next
          if (next > 0 && next % BRONZE_STREAK === 0) xp += XP_STREAK_BONUS
          return next
        })

        setXpEarned(prev => prev + xp)
      } else {
        setCurrentStreak(0)
      }
    },
    []
  )

  return {
    questionsAttempted,
    questionsCorrect,
    xpEarned,
    currentStreak,
    bestStreak: bestStreak.current,
    hasBronzeMastery: bestStreak.current >= BRONZE_STREAK,
    recordAnswer,
  }
}
