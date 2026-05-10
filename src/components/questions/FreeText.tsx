'use client'

import { useState } from 'react'

import { LessonCTA } from '@/components/learn/LessonCTA'
import type { FreeTextQuestion } from '@/types/content'

interface FreeTextProps {
  question: FreeTextQuestion
  disabled: boolean
  onSubmit: (result: 'correct' | 'incorrect') => void
  realmAccent?: string
}

function hasAllKeywords(answer: string, keywords: string[]): boolean {
  const lower = answer.toLowerCase()
  return keywords.every(k => lower.includes(k.toLowerCase()))
}

export function FreeText({
  question,
  disabled,
  onSubmit,
  realmAccent,
}: FreeTextProps) {
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
      <LessonCTA
        type="submit"
        disabled={disabled || value.trim() === ''}
        realmAccent={realmAccent}
      >
        Submit
      </LessonCTA>
    </form>
  )
}
