'use client'

import { useState } from 'react'
import { Loader2 } from 'lucide-react'

import { LessonCTA } from '@/components/learn/LessonCTA'
import type { MissingStepQuestion } from '@/types/content'
import { cn } from '@/lib/utils'

interface MissingStepProps {
  question: MissingStepQuestion
  disabled: boolean
  onSubmit: (result: 'correct' | 'incorrect', judgeReason?: string) => void
  onJudge?: (
    answer: string
  ) => Promise<{ correct: boolean; reason: string } | null>
  realmAccent?: string
}

function normalise(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, ' ')
}

function exactMatch(answer: string, correctStep: string): boolean {
  return normalise(answer) === normalise(correctStep)
}

export function MissingStep({
  question,
  disabled,
  onSubmit,
  onJudge,
  realmAccent,
}: MissingStepProps) {
  const [value, setValue] = useState('')
  const [pending, setPending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (value.trim() === '' || pending) return

    if (onJudge) {
      setPending(true)
      try {
        const judged = await onJudge(value)
        if (judged) {
          onSubmit(judged.correct ? 'correct' : 'incorrect', judged.reason)
          return
        }
        const fallback = exactMatch(value, question.correctStep)
        onSubmit(fallback ? 'correct' : 'incorrect')
      } finally {
        setPending(false)
      }
      return
    }

    const isCorrect = exactMatch(value, question.correctStep)
    onSubmit(isCorrect ? 'correct' : 'incorrect')
  }

  const inputDisabled = disabled || pending

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <ol className="space-y-2" aria-label="Worked steps">
        {question.steps.map((step, i) => {
          const isMissing = i === question.missingStepIndex
          return (
            <li
              key={i}
              className={cn(
                'flex items-start gap-2 rounded-lg border p-3 text-sm',
                isMissing && 'border-dashed bg-muted/30'
              )}
            >
              <span className="text-xs text-muted-foreground">{i + 1}.</span>
              {isMissing ? (
                <input
                  type="text"
                  value={value}
                  onChange={e => setValue(e.target.value)}
                  disabled={inputDisabled}
                  className="flex-1 rounded-md border bg-background px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Fill in the missing step"
                  aria-label={`Step ${i + 1} (missing)`}
                  autoFocus
                />
              ) : (
                <span>{step ?? ''}</span>
              )}
            </li>
          )
        })}
      </ol>
      <div className="flex items-center gap-3">
        <LessonCTA
          type="submit"
          disabled={inputDisabled || value.trim() === ''}
          realmAccent={realmAccent}
        >
          Submit
        </LessonCTA>
        {pending && (
          <span
            role="status"
            aria-live="polite"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground"
          >
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Checking your answer...
          </span>
        )}
      </div>
    </form>
  )
}
