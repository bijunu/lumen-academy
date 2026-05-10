'use client'

import { useState } from 'react'
import type { DragDropBuilderQuestion } from '@/types/content'

interface DragDropBuilderProps {
  question: DragDropBuilderQuestion
  disabled: boolean
  onSubmit: (arrangement: string[]) => void
}

export function DragDropBuilder({ question, disabled, onSubmit }: DragDropBuilderProps) {
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
    <div className="space-y-3">
      <div>
        <p className="mb-1 text-xs text-muted-foreground">Your answer:</p>
        <div
          className="flex min-h-[3rem] flex-wrap gap-2 rounded-md border border-dashed bg-muted/20 p-2"
          role="list"
          aria-label="Build area"
        >
          {builtIndices.length === 0 && (
            <span className="self-center text-xs text-muted-foreground">
              Tap parts below to add them here.
            </span>
          )}
          {builtIndices.map(i => (
            <button
              key={i}
              type="button"
              onClick={() => moveToPool(i)}
              disabled={disabled}
              className="rounded-md bg-primary px-3 py-1 text-sm text-primary-foreground hover:opacity-90 disabled:opacity-50"
              aria-label={`Remove ${question.parts[i]} from answer`}
            >
              {question.parts[i]}
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="mb-1 text-xs text-muted-foreground">Available parts:</p>
        <div className="flex flex-wrap gap-2" role="list" aria-label="Parts pool">
          {question.parts.map((part, i) => (
            <button
              key={i}
              type="button"
              onClick={() => moveToBuild(i)}
              disabled={disabled || isUsed(i)}
              className="rounded-md border bg-background px-3 py-1 text-sm hover:bg-muted disabled:opacity-30"
              aria-label={`Add ${part} to answer`}
            >
              {part}
            </button>
          ))}
        </div>
      </div>
      <button
        onClick={handleSubmit}
        disabled={disabled || builtIndices.length === 0}
        className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
      >
        Submit
      </button>
    </div>
  )
}
