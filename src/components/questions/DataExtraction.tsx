'use client'

import { useState } from 'react'

import { LessonCTA } from '@/components/learn/LessonCTA'
import type { DataExtractionQuestion } from '@/types/content'

interface DataExtractionProps {
  question: DataExtractionQuestion
  disabled: boolean
  onSubmit: (value: string) => void
  realmAccent?: string
}

export function DataExtraction({
  question,
  disabled,
  onSubmit,
  realmAccent,
}: DataExtractionProps) {
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
