'use client'

import { useState } from 'react'

import { LessonCTA } from '@/components/learn/LessonCTA'
import type { NumericEntryQuestion } from '@/types/content'

interface NumericEntryProps {
  question: NumericEntryQuestion
  disabled: boolean
  onSubmit: (value: number) => void
  realmAccent?: string
}

export function NumericEntry({
  question,
  disabled,
  onSubmit,
  realmAccent,
}: NumericEntryProps) {
  const [value, setValue] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const num = parseFloat(value)
    if (!isNaN(num)) {
      onSubmit(num)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center gap-2">
        <input
          type="number"
          value={value}
          onChange={e => setValue(e.target.value)}
          disabled={disabled}
          className="w-40 rounded-md border bg-background px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="Answer"
          autoFocus
          step="any"
        />
        {question.unit && <span className="text-sm text-muted-foreground">{question.unit}</span>}
      </div>
      <LessonCTA
        type="submit"
        disabled={disabled || value === ''}
        realmAccent={realmAccent}
      >
        Submit
      </LessonCTA>
    </form>
  )
}
