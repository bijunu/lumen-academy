'use client'

import { useState } from 'react'

import { LessonCTA } from '@/components/learn/LessonCTA'
import type { MissingStepQuestion } from '@/types/content'
import { cn } from '@/lib/utils'

interface MissingStepProps {
  question: MissingStepQuestion
  disabled: boolean
  onSubmit: (value: string) => void
  realmAccent?: string
}

export function MissingStep({
  question,
  disabled,
  onSubmit,
  realmAccent,
}: MissingStepProps) {
  const [value, setValue] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (value.trim() === '') return
    onSubmit(value)
  }

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
                  disabled={disabled}
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
      <LessonCTA
        type="submit"
        disabled={disabled || value.trim() === ''}
        realmAccent={realmAccent}
      >
        Submit
      </LessonCTA>
    </form>
  )
}
