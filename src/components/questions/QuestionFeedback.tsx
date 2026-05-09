'use client'

import type { AnswerStatus } from '@/hooks/useQuestionState'
import type { Misconception } from '@/types/content'
import { cn } from '@/lib/utils'

interface QuestionFeedbackProps {
  status: AnswerStatus
  misconception?: Misconception
  onNext: () => void
  nextLabel?: string
  modelAnswer?: string
}

export function QuestionFeedback({
  status,
  misconception,
  onNext,
  nextLabel,
  modelAnswer,
}: QuestionFeedbackProps) {
  if (status === 'unanswered') return null

  return (
    <div
      className={cn(
        'mt-4 rounded-lg border p-4',
        status === 'correct'
          ? 'border-green-500/50 bg-green-50 dark:bg-green-950/30'
          : 'border-red-500/50 bg-red-50 dark:bg-red-950/30'
      )}
      role="alert"
    >
      <p className="font-semibold">
        {status === 'correct' ? 'Correct!' : 'Not quite right.'}
      </p>
      {status === 'incorrect' && misconception && (
        <div className="mt-2 space-y-1 text-sm">
          <p>{misconception.correction}</p>
          <p className="text-muted-foreground">{misconception.reExplanation}</p>
        </div>
      )}
      {status === 'incorrect' && modelAnswer && (
        <div className="mt-2 space-y-1 text-sm">
          <p className="font-medium">A good answer might say:</p>
          <p className="text-muted-foreground">{modelAnswer}</p>
        </div>
      )}
      <button
        onClick={onNext}
        className="mt-3 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90"
      >
        {nextLabel ?? (status === 'correct' ? 'Next' : 'Try Again')}
      </button>
    </div>
  )
}
