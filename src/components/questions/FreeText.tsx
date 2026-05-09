'use client'

import { useState } from 'react'
import type { FreeTextQuestion } from '@/types/content'

interface FreeTextProps {
  question: FreeTextQuestion
  disabled: boolean
  onSubmit: (result: 'correct' | 'incorrect') => void
}

function hasAllKeywords(answer: string, keywords: string[]): boolean {
  const lower = answer.toLowerCase()
  return keywords.every(k => lower.includes(k.toLowerCase()))
}

export function FreeText({ question, disabled, onSubmit }: FreeTextProps) {
  const [value, setValue] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (value.trim() === '') return
    const isCorrect = hasAllKeywords(value, question.keywords)
    onSubmit(isCorrect ? 'correct' : 'incorrect')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <textarea
        value={value}
        onChange={e => setValue(e.target.value)}
        disabled={disabled}
        rows={4}
        className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        placeholder="Type your answer in a sentence or two."
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
