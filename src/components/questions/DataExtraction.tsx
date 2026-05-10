'use client'

import { useState } from 'react'
import type { DataExtractionQuestion } from '@/types/content'

interface DataExtractionProps {
  question: DataExtractionQuestion
  disabled: boolean
  onSubmit: (value: string) => void
}

export function DataExtraction({ question, disabled, onSubmit }: DataExtractionProps) {
  const [value, setValue] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (value.trim() === '') return
    onSubmit(value)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <blockquote className="rounded-md border-l-4 border-primary bg-muted/20 p-3 text-sm whitespace-pre-wrap">
        {question.dataSource}
      </blockquote>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        disabled={disabled}
        className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        placeholder="Your answer"
        aria-label="Your answer"
        autoFocus
      />
      <button
        type="submit"
        disabled={disabled || value.trim() === ''}
        className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
      >
        Submit
      </button>
    </form>
  )
}
