'use client'

import type { SpotMisconceptionQuestion } from '@/types/content'
import { cn } from '@/lib/utils'

interface SpotMisconceptionProps {
  question: SpotMisconceptionQuestion
  selectedIndex: number | null
  disabled: boolean
  onSelect: (index: number) => void
  realmAccent?: string
}

export function SpotMisconception({
  question,
  selectedIndex,
  disabled,
  onSelect,
  realmAccent = 'hsl(var(--primary))',
}: SpotMisconceptionProps) {
  return (
    <div
      className="space-y-2.5"
      role="radiogroup"
      aria-label="Identify the misconception"
    >
      {question.statements.map((stmt, i) => {
        const isSelected = selectedIndex === i
        return (
          <button
            key={i}
            onClick={() => onSelect(i)}
            disabled={disabled}
            role="radio"
            aria-checked={isSelected}
            className={cn(
              'flex w-full items-center gap-3 rounded-xl border-2 bg-card p-3.5 text-left transition-all',
              !disabled && 'hover:-translate-y-0.5 hover:shadow-sm',
              !isSelected && 'border-border',
              disabled && 'cursor-not-allowed opacity-60'
            )}
            style={
              isSelected
                ? {
                    borderColor: realmAccent,
                    backgroundColor: `${realmAccent}10`,
                  }
                : undefined
            }
          >
            <kbd
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-mono text-sm font-semibold"
              style={
                isSelected
                  ? { backgroundColor: realmAccent, color: 'white' }
                  : {
                      backgroundColor: 'hsl(var(--muted))',
                      color: 'hsl(var(--muted-foreground))',
                    }
              }
              aria-hidden
            >
              {i + 1}
            </kbd>
            <span className="text-[15px] font-medium leading-snug">{stmt.text}</span>
          </button>
        )
      })}
    </div>
  )
}
