'use client'

import { useCallback } from 'react'
import type { Question, Misconception } from '@/types/content'
import { useQuestionState } from '@/hooks/useQuestionState'
import { MultipleChoice } from './MultipleChoice'
import { NumericEntry } from './NumericEntry'
import { DragOrder } from './DragOrder'
import { SpotMisconception } from './SpotMisconception'
import { QuestionFeedback } from './QuestionFeedback'
import { Badge } from '@/components/ui/badge'

interface QuestionShellProps {
  question: Question
  misconceptions: Misconception[]
  onComplete: (correct: boolean, attemptCount: number) => void
  onHintRequest?: () => void
  oneShot?: boolean
}

export function QuestionShell({
  question,
  misconceptions,
  onComplete,
  onHintRequest,
  oneShot = false,
}: QuestionShellProps) {
  const { selectedAnswer, status, attemptCount, showFeedback, submit, reset, setSelectedAnswer } =
    useQuestionState(question)

  const activeMisconception = question.misconceptionId
    ? misconceptions.find(m => m.id === question.misconceptionId)
    : undefined

  const handleNext = useCallback(() => {
    if (oneShot || status === 'correct') {
      onComplete(status === 'correct', attemptCount)
    } else {
      reset()
    }
  }, [oneShot, status, attemptCount, onComplete, reset])

  const handleSubmitAnswer = useCallback(
    (answer: string | number) => {
      submit(answer)
    },
    [submit]
  )

  const isAnswered = status !== 'unanswered'

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Badge variant="outline">{question.tier}</Badge>
        <span className="text-xs text-muted-foreground">{question.xpValue} XP</span>
      </div>

      <p className="text-base font-medium leading-relaxed">{question.stem}</p>

      {question.type === 'multiple-choice' && (
        <MultipleChoice
          question={question}
          selectedIndex={typeof selectedAnswer === 'number' ? selectedAnswer : null}
          disabled={isAnswered}
          onSelect={handleSubmitAnswer}
        />
      )}

      {question.type === 'numeric-entry' && (
        <NumericEntry question={question} disabled={isAnswered} onSubmit={handleSubmitAnswer} />
      )}

      {question.type === 'drag-order' && (
        <DragOrder
          question={question}
          disabled={isAnswered}
          onSubmit={order => {
            const isCorrect =
              JSON.stringify(order) === JSON.stringify(question.correctOrder)
            submit(isCorrect ? 'correct' : 'incorrect')
          }}
        />
      )}

      {question.type === 'spot-misconception' && (
        <SpotMisconception
          question={question}
          selectedIndex={typeof selectedAnswer === 'number' ? selectedAnswer : null}
          disabled={isAnswered}
          onSelect={i => {
            setSelectedAnswer(i)
            const stmt = question.statements[i]
            submit(stmt.isMisconception ? 'correct' : 'incorrect')
          }}
        />
      )}

      {showFeedback && (
        <QuestionFeedback
          status={status}
          misconception={status === 'incorrect' ? activeMisconception : undefined}
          onNext={handleNext}
          nextLabel={oneShot && status === 'incorrect' ? 'Done' : undefined}
        />
      )}

      {!isAnswered && question.hint && onHintRequest && (
        <button
          onClick={onHintRequest}
          className="text-sm text-muted-foreground underline hover:text-foreground"
        >
          Need a hint? Press H
        </button>
      )}
    </div>
  )
}
