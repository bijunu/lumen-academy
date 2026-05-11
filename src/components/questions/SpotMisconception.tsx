'use client'

import { X } from 'lucide-react'

import type { SpotMisconceptionQuestion } from '@/types/content'
import { cn } from '@/lib/utils'

interface SpotMisconceptionProps {
  question: SpotMisconceptionQuestion
  selectedIndex: number | null
  disabled: boolean
  onSelect: (index: number) => void
  triedWrongIndices?: ReadonlySet<number>
  realmAccent?: string
}

const EMPTY_SET: ReadonlySet<number> = new Set()

export function SpotMisconception({
  question,
  selectedIndex,
  disabled,
  onSelect,
  triedWrongIndices = EMPTY_SET,
  realmAccent = 'hsl(var(--primary))',
}: SpotMisconceptionProps) {
  return (
    <div className="space-y-2.5">
      <p
        className="mb-1 text-sm text-muted-foreground"
        data-testid="spot-misconception-prompt"
      >
        <span className="font-semibold text-foreground">
          Spot the misconception.
        </span>{' '}
        Tap the statement that is wrong.
      </p>
      <div
        role="radiogroup"
        aria-label="Identify the misconception"
        className="space-y-2.5"
      >
      {question.statements.map((stmt, i) => {
        const isSelected = selectedIndex === i
        const isTriedWrong = triedWrongIndices.has(i)
        const isLocked = disabled || isTriedWrong
        return (
          <button
            key={i}
            onClick={() => onSelect(i)}
            disabled={isLocked}
            role="radio"
            aria-checked={isSelected}
            aria-disabled={isLocked}
            data-tried-wrong={isTriedWrong || undefined}
            className={cn(
              'flex w-full items-center gap-3 rounded-xl border-2 bg-card p-3.5 text-left transition-all',
              !isLocked && 'hover:-translate-y-0.5 hover:shadow-sm',
              !isSelected && !isTriedWrong && 'border-border',
              isLocked && !isTriedWrong && 'cursor-not-allowed opacity-60',
              isTriedWrong &&
                'cursor-not-allowed border-amber-500/60 bg-amber-50 text-muted-foreground line-through dark:bg-amber-950/20'
            )}
            style={
              isSelected && !isTriedWrong
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
                isSelected && !isTriedWrong
                  ? { backgroundColor: realmAccent, color: 'white' }
                  : isTriedWrong
                    ? { backgroundColor: '#F59E0B', color: 'white' }
                    : {
                        backgroundColor: 'hsl(var(--muted))',
                        color: 'hsl(var(--muted-foreground))',
                      }
              }
              aria-hidden
            >
              {isTriedWrong ? <X className="h-4 w-4" /> : i + 1}
            </kbd>
            <span className="text-[15px] font-medium leading-snug">{stmt.text}</span>
          </button>
        )
      })}
      </div>
    </div>
  )
}
