'use client'

import type { SpotMisconceptionQuestion } from '@/types/content'
import { cn } from '@/lib/utils'

interface SpotMisconceptionProps {
  question: SpotMisconceptionQuestion
  selectedIndex: number | null
  disabled: boolean
  onSelect: (index: number) => void
}

export function SpotMisconception({
  question,
  selectedIndex,
  disabled,
  onSelect,
}: SpotMisconceptionProps) {
  return (
    <div className="space-y-2" role="radiogroup" aria-label="Identify the misconception">
      {question.statements.map((stmt, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          disabled={disabled}
          role="radio"
          aria-checked={selectedIndex === i}
          className={cn(
            'flex w-full items-center gap-3 rounded-lg border p-3 text-left transition-colors',
            selectedIndex === i
              ? 'border-primary bg-primary/10'
              : 'border-border hover:border-primary/50 hover:bg-accent',
            disabled && 'cursor-not-allowed opacity-60'
          )}
        >
          <kbd className="flex h-6 w-6 items-center justify-center rounded border bg-muted text-xs font-mono">
            {i + 1}
          </kbd>
          <span className="text-sm">{stmt.text}</span>
        </button>
      ))}
    </div>
  )
}
