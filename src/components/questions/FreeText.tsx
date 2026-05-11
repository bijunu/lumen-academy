'use client'

import { useState } from 'react'
import { Loader2 } from 'lucide-react'

import { LessonCTA } from '@/components/learn/LessonCTA'
import type { FreeTextQuestion } from '@/types/content'

interface FreeTextProps {
  question: FreeTextQuestion
  disabled: boolean
  onSubmit: (result: 'correct' | 'incorrect', judgeReason?: string) => void
  onJudge?: (
    answer: string
  ) => Promise<{ correct: boolean; reason: string } | null>
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
  onJudge,
  realmAccent,
}: FreeTextProps) {
  const [value, setValue] = useState('')
  const [pending, setPending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (value.trim() === '' || pending) return

    if (onJudge) {
      setPending(true)
      try {
        const judged = await onJudge(value)
        if (judged) {
          onSubmit(judged.correct ? 'correct' : 'incorrect', judged.reason)
          return
        }
        const fallback = hasAllKeywords(value, question.keywords)
        onSubmit(fallback ? 'correct' : 'incorrect')
      } finally {
        setPending(false)
      }
      return
    }

    const isCorrect = hasAllKeywords(value, question.keywords)
    onSubmit(isCorrect ? 'correct' : 'incorrect')
  }

  const inputDisabled = disabled || pending

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <textarea
        value={value}
        onChange={e => setValue(e.target.value)}
        disabled={inputDisabled}
        rows={4}
        className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        placeholder="Type your answer in a sentence or two."
        aria-label="Your answer"
        autoFocus
      />
      <div className="flex items-center gap-3">
        <LessonCTA
          type="submit"
          disabled={inputDisabled || value.trim() === ''}
          realmAccent={realmAccent}
        >
          Submit
        </LessonCTA>
        {pending && (
          <span
            role="status"
            aria-live="polite"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground"
          >
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Checking your answer...
          </span>
        )}
      </div>
    </form>
  )
}
