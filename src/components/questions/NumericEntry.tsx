'use client'

import { useState } from 'react'
import type { NumericEntryQuestion } from '@/types/content'

interface NumericEntryProps {
  question: NumericEntryQuestion
  disabled: boolean
  onSubmit: (value: number) => void
}

export function NumericEntry({ question, disabled, onSubmit }: NumericEntryProps) {
  const [value, setValue] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const num = parseFloat(value)
    if (!isNaN(num)) {
      onSubmit(num)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex items-center gap-2">
        <input
          type="number"
          value={value}
          onChange={e => setValue(e.target.value)}
          disabled={disabled}
          className="w-32 rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="Answer"
          autoFocus
          step="any"
        />
        {question.unit && <span className="text-sm text-muted-foreground">{question.unit}</span>}
      </div>
      <button
        type="submit"
        disabled={disabled || value === ''}
        className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
      >
        Submit
      </button>
    </form>
  )
}
