'use client'

import { ArrowRight, CheckCircle2, RefreshCw, XCircle } from 'lucide-react'

import type { AnswerStatus } from '@/hooks/useQuestionState'
import type { Misconception } from '@/types/content'

interface QuestionFeedbackProps {
  status: AnswerStatus
  misconception?: Misconception
  onNext: () => void
  nextLabel?: string
  modelAnswer?: string
  judgeReason?: string
  realmAccent?: string
}

export function QuestionFeedback({
  status,
  misconception,
  onNext,
  nextLabel,
  modelAnswer,
  judgeReason,
  realmAccent = 'hsl(var(--primary))',
}: QuestionFeedbackProps) {
  if (status === 'unanswered') return null

  const correct = status === 'correct'

  return (
    <div
      role="alert"
      className="mt-4 rounded-xl border p-4"
      style={
        correct
          ? {
              borderColor: `${realmAccent}55`,
              backgroundColor: `${realmAccent}10`,
            }
          : {
              borderColor: 'rgb(245 158 11 / 0.5)',
              backgroundColor: 'rgb(245 158 11 / 0.08)',
            }
      }
    >
      <div className="flex items-start gap-3">
        <span
          className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white"
          style={{
            backgroundColor: correct ? realmAccent : '#F59E0B',
          }}
          aria-hidden
        >
          {correct ? (
            <CheckCircle2 className="h-4 w-4" />
          ) : (
            <XCircle className="h-4 w-4" />
          )}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-base font-semibold">
            {correct ? 'Spot on.' : 'Not quite.'}
          </p>
          {judgeReason && (
            <p className="mt-1 text-sm text-muted-foreground">{judgeReason}</p>
          )}
          {!correct && misconception && (
            <div className="mt-2 space-y-1 text-sm">
              <p>{misconception.correction}</p>
              <p className="text-muted-foreground">
                {misconception.reExplanation}
              </p>
            </div>
          )}
          {!correct && modelAnswer && (
            <div className="mt-2 space-y-1 text-sm">
              <p className="font-medium">A good answer might say:</p>
              <p className="text-muted-foreground">{modelAnswer}</p>
            </div>
          )}
        </div>
      </div>
      <button
        onClick={onNext}
        className="mt-4 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        style={{ backgroundColor: correct ? realmAccent : '#F59E0B' }}
      >
        {nextLabel ?? (correct ? 'Next' : 'Try again')}
        {correct ? (
          <ArrowRight className="h-4 w-4" />
        ) : (
          <RefreshCw className="h-4 w-4" />
        )}
      </button>
    </div>
  )
}
