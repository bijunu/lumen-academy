'use client'

import { useCallback, useState } from 'react'
import type { Question } from '@/types/content'

export type AnswerStatus = 'unanswered' | 'correct' | 'incorrect'

export interface QuestionState {
  question: Question
  selectedAnswer: string | number | null
  status: AnswerStatus
  attemptCount: number
  showFeedback: boolean
}

export function useQuestionState(question: Question) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | number | null>(null)
  const [status, setStatus] = useState<AnswerStatus>('unanswered')
  const [attemptCount, setAttemptCount] = useState(0)
  const [showFeedback, setShowFeedback] = useState(false)

  const submit = useCallback(
    (answer: string | number) => {
      setSelectedAnswer(answer)
      setAttemptCount(prev => prev + 1)

      let isCorrect = false

      switch (question.type) {
        case 'multiple-choice':
          isCorrect = answer === question.correctIndex
          break
        case 'numeric-entry':
          isCorrect = question.tolerance
            ? Math.abs(Number(answer) - question.correctAnswer) <= question.tolerance
            : Number(answer) === question.correctAnswer
          break
        case 'spot-misconception':
          isCorrect = answer === 'correct'
          break
        default:
          // Renderer-side validation: caller passes 'correct' or 'incorrect' sentinel.
          isCorrect = answer === 'correct'
          break
      }

      setStatus(isCorrect ? 'correct' : 'incorrect')
      setShowFeedback(true)
    },
    [question]
  )

  const reset = useCallback(() => {
    setSelectedAnswer(null)
    setStatus('unanswered')
    setShowFeedback(false)
  }, [])

  return {
    selectedAnswer,
    status,
    attemptCount,
    showFeedback,
    submit,
    reset,
    setSelectedAnswer,
  }
}
