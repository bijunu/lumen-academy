'use client'

import { useEffect } from 'react'
import type { MultipleChoiceQuestion } from '@/types/content'
import { cn } from '@/lib/utils'

interface MultipleChoiceProps {
  question: MultipleChoiceQuestion
  selectedIndex: number | null
  disabled: boolean
  onSelect: (index: number) => void
}

export function MultipleChoice({ question, selectedIndex, disabled, onSelect }: MultipleChoiceProps) {
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
    <div className="space-y-2" role="radiogroup" aria-label="Answer options">
      {question.options.map((option, i) => (
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
          <span className="text-sm">{option}</span>
        </button>
      ))}
    </div>
  )
}
