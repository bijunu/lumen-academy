'use client'

import { useCallback, useState } from 'react'
import type { Question, Misconception } from '@/types/content'
import { useQuestionState } from '@/hooks/useQuestionState'
import type { ScoreInput } from '@/lib/progress/serverScoring'
import { MultipleChoice } from './MultipleChoice'
import { NumericEntry } from './NumericEntry'
import { DragOrder } from './DragOrder'
import { SpotMisconception } from './SpotMisconception'
import { MissingStep } from './MissingStep'
import { FreeText } from './FreeText'
import { SliderExplore } from './SliderExplore'
import { Sketch } from './Sketch'
import { DragDropBuilder } from './DragDropBuilder'
import { DataExtraction } from './DataExtraction'
import { LabelledImage } from './LabelledImage'
import { QuestionFeedback } from './QuestionFeedback'
import { Badge } from '@/components/ui/badge'

interface QuestionShellProps {
  question: Question
  misconceptions: Misconception[]
  onComplete: (
    correct: boolean,
    attemptCount: number,
    payload: ScoreInput
  ) => void
  onHintRequest?: () => void
  onJudgeFreeText?: (
    answer: string
  ) => Promise<{ correct: boolean; reason: string } | null>
  oneShot?: boolean
  realmAccent?: string
}

export function QuestionShell({
  question,
  misconceptions,
  onComplete,
  onHintRequest,
  onJudgeFreeText,
  oneShot = false,
  realmAccent,
}: QuestionShellProps) {
  const { payload, status, attemptCount, showFeedback, submit, reset } =
    useQuestionState(question)
  const [judgeReason, setJudgeReason] = useState<string | null>(null)

  const activeMisconception = question.misconceptionId
    ? misconceptions.find(m => m.id === question.misconceptionId)
    : undefined

  const handleNext = useCallback(() => {
    if (oneShot || status === 'correct') {
      onComplete(status === 'correct', attemptCount, payload ?? {})
    } else {
      setJudgeReason(null)
      reset()
    }
  }, [oneShot, status, attemptCount, payload, onComplete, reset])

  const isAnswered = status !== 'unanswered'
  const selectedIndex =
    typeof payload?.answer === 'number' ? payload.answer : null

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
          selectedIndex={selectedIndex}
          disabled={isAnswered}
          onSelect={index => submit({ answer: index })}
          realmAccent={realmAccent}
        />
      )}

      {question.type === 'numeric-entry' && (
        <NumericEntry
          question={question}
          disabled={isAnswered}
          onSubmit={value => submit({ answer: value })}
          realmAccent={realmAccent}
        />
      )}

      {question.type === 'drag-order' && (
        <DragOrder
          question={question}
          disabled={isAnswered}
          onSubmit={order => submit({ answer: order })}
          realmAccent={realmAccent}
        />
      )}

      {question.type === 'spot-misconception' && (
        <SpotMisconception
          question={question}
          selectedIndex={selectedIndex}
          disabled={isAnswered}
          onSelect={index => submit({ answer: index })}
          realmAccent={realmAccent}
        />
      )}

      {question.type === 'missing-step' && (
        <MissingStep
          question={question}
          disabled={isAnswered}
          onSubmit={value => submit({ answer: value })}
          realmAccent={realmAccent}
        />
      )}

      {question.type === 'free-text' && (
        <FreeText
          question={question}
          disabled={isAnswered}
          onSubmit={(result, reason) => {
            setJudgeReason(reason ?? null)
            submit({ clientCorrect: result === 'correct' })
          }}
          onJudge={onJudgeFreeText}
          realmAccent={realmAccent}
        />
      )}

      {question.type === 'slider-explore' && (
        <SliderExplore
          question={question}
          disabled={isAnswered}
          onSubmit={value => submit({ answer: value })}
          realmAccent={realmAccent}
        />
      )}

      {question.type === 'sketch' && (
        <Sketch
          question={question}
          disabled={isAnswered}
          onSubmit={result => submit({ clientCorrect: result === 'correct' })}
          realmAccent={realmAccent}
        />
      )}

      {question.type === 'drag-drop-builder' && (
        <DragDropBuilder
          question={question}
          disabled={isAnswered}
          onSubmit={arrangement => submit({ answer: arrangement })}
          realmAccent={realmAccent}
        />
      )}

      {question.type === 'data-extraction' && (
        <DataExtraction
          question={question}
          disabled={isAnswered}
          onSubmit={value => submit({ answer: value })}
          realmAccent={realmAccent}
        />
      )}

      {question.type === 'labelled-image' && (
        <LabelledImage
          question={question}
          disabled={isAnswered}
          onSubmit={placements => submit({ answer: placements })}
          realmAccent={realmAccent}
        />
      )}

      {showFeedback && (
        <QuestionFeedback
          status={status}
          misconception={status === 'incorrect' ? activeMisconception : undefined}
          onNext={handleNext}
          nextLabel={oneShot && status === 'incorrect' ? 'Done' : undefined}
          modelAnswer={question.type === 'free-text' ? question.sampleAnswer : undefined}
          judgeReason={judgeReason ?? undefined}
          realmAccent={realmAccent}
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
