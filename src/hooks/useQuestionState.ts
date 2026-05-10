'use client'

import { useCallback, useState } from 'react'
import type { Question } from '@/types/content'
import { scoreAnswer, type ScoreInput } from '@/lib/progress/serverScoring'

export type AnswerStatus = 'unanswered' | 'correct' | 'incorrect'

export interface QuestionState {
  question: Question
  payload: ScoreInput | null
  status: AnswerStatus
  attemptCount: number
  showFeedback: boolean
}

export function useQuestionState(question: Question) {
  const [payload, setPayload] = useState<ScoreInput | null>(null)
  const [status, setStatus] = useState<AnswerStatus>('unanswered')
  const [attemptCount, setAttemptCount] = useState(0)
  const [showFeedback, setShowFeedback] = useState(false)

  const submit = useCallback(
    (next: ScoreInput) => {
      setPayload(next)
      setAttemptCount(prev => prev + 1)
      let isCorrect = false
      try {
        isCorrect = scoreAnswer(question, next)
      } catch {
        isCorrect = false
      }
      setStatus(isCorrect ? 'correct' : 'incorrect')
      setShowFeedback(true)
    },
    [question]
  )

  const reset = useCallback(() => {
    setPayload(null)
    setStatus('unanswered')
    setShowFeedback(false)
  }, [])

  return {
    payload,
    status,
    attemptCount,
    showFeedback,
    submit,
    reset,
  }
}
