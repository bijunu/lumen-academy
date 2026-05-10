'use client'

import { useState } from 'react'

import { LessonCTA } from '@/components/learn/LessonCTA'
import type { DragDropBuilderQuestion } from '@/types/content'

interface DragDropBuilderProps {
  question: DragDropBuilderQuestion
  disabled: boolean
  onSubmit: (arrangement: string[]) => void
  realmAccent?: string
}

export function DragDropBuilder({
  question,
  disabled,
  onSubmit,
  realmAccent = 'hsl(var(--primary))',
}: DragDropBuilderProps) {
  const [builtIndices, setBuiltIndices] = useState<number[]>([])

  const isUsed = (i: number) => builtIndices.includes(i)

  const moveToBuild = (i: number) => {
    if (disabled) return
    setBuiltIndices(prev => (prev.includes(i) ? prev : [...prev, i]))
  }

  const moveToPool = (i: number) => {
    if (disabled) return
    setBuiltIndices(prev => prev.filter(x => x !== i))
  }

  const handleSubmit = () => {
    onSubmit(builtIndices.map(i => question.parts[i]))
  }

  return (
    <div className="space-y-4">
      <div>
        <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Your answer
        </p>
        <div
          className="flex min-h-[3rem] flex-wrap gap-2 rounded-xl border border-dashed bg-muted/20 p-3"
          role="list"
          aria-label="Build area"
        >
          {builtIndices.length === 0 && (
            <span className="self-center text-sm text-muted-foreground">
              Tap parts below to add them here.
            </span>
          )}
          {builtIndices.map(i => (
            <button
              key={i}
              type="button"
              onClick={() => moveToPool(i)}
              disabled={disabled}
              className="rounded-md px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-transform hover:-translate-y-0.5 disabled:opacity-50"
              style={{ backgroundColor: realmAccent }}
              aria-label={`Remove ${question.parts[i]} from answer`}
            >
              {question.parts[i]}
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Available parts
        </p>
        <div className="flex flex-wrap gap-2" role="list" aria-label="Parts pool">
          {question.parts.map((part, i) => (
            <button
              key={i}
              type="button"
              onClick={() => moveToBuild(i)}
              disabled={disabled || isUsed(i)}
              className="rounded-md border-2 bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-muted disabled:opacity-30"
              aria-label={`Add ${part} to answer`}
            >
              {part}
            </button>
          ))}
        </div>
      </div>
      <LessonCTA
        onClick={handleSubmit}
        disabled={disabled || builtIndices.length === 0}
        realmAccent={realmAccent}
      >
        Submit
      </LessonCTA>
    </div>
  )
}
