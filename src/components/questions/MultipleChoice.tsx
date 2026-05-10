'use client'

import { useEffect } from 'react'

import type { MultipleChoiceQuestion } from '@/types/content'
import { cn } from '@/lib/utils'

interface MultipleChoiceProps {
  question: MultipleChoiceQuestion
  selectedIndex: number | null
  disabled: boolean
  onSelect: (index: number) => void
  realmAccent?: string
}

export function MultipleChoice({
  question,
  selectedIndex,
  disabled,
  onSelect,
  realmAccent = 'hsl(var(--primary))',
}: MultipleChoiceProps) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (disabled) return
      const target = e.target as HTMLElement
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return

      const num = parseInt(e.key, 10)
      if (num >= 1 && num <= question.options.length) {
        e.preventDefault()
        onSelect(num - 1)
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [disabled, question.options.length, onSelect])

  return (
    <div
      className="space-y-2.5"
      role="radiogroup"
      aria-label="Answer options"
    >
      {question.options.map((option, i) => {
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
                  ? {
                      backgroundColor: realmAccent,
                      color: 'white',
                    }
                  : {
                      backgroundColor: 'hsl(var(--muted))',
                      color: 'hsl(var(--muted-foreground))',
                    }
              }
              aria-hidden
            >
              {i + 1}
            </kbd>
            <span className="text-[15px] font-medium leading-snug">{option}</span>
          </button>
        )
      })}
    </div>
  )
}
