'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'

import type { MultipleChoiceQuestion } from '@/types/content'
import { cn } from '@/lib/utils'

interface MultipleChoiceProps {
  question: MultipleChoiceQuestion
  selectedIndex: number | null
  disabled: boolean
  onSelect: (index: number) => void
  triedWrongIndices?: ReadonlySet<number>
  realmAccent?: string
}

const EMPTY_SET: ReadonlySet<number> = new Set()

export function MultipleChoice({
  question,
  selectedIndex,
  disabled,
  onSelect,
  triedWrongIndices = EMPTY_SET,
  realmAccent = 'hsl(var(--primary))',
}: MultipleChoiceProps) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (disabled) return
      const target = e.target as HTMLElement
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return

      const num = parseInt(e.key, 10)
      if (num >= 1 && num <= question.options.length) {
        if (triedWrongIndices.has(num - 1)) return
        e.preventDefault()
        onSelect(num - 1)
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [disabled, question.options.length, onSelect, triedWrongIndices])

  return (
    <div
      className="space-y-2.5"
      role="radiogroup"
      aria-label="Answer options"
    >
      {question.options.map((option, i) => {
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
                  ? {
                      backgroundColor: realmAccent,
                      color: 'white',
                    }
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
            <span className="text-[15px] font-medium leading-snug">{option}</span>
          </button>
        )
      })}
    </div>
  )
}
