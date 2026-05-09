'use client'

import { useState } from 'react'
import type { SliderExploreQuestion } from '@/types/content'

interface SliderExploreProps {
  question: SliderExploreQuestion
  disabled: boolean
  onSubmit: (result: 'correct' | 'incorrect') => void
}

function midpoint(min: number, max: number, step: number): number {
  const raw = (min + max) / 2
  if (step <= 0) return raw
  return Math.round(raw / step) * step
}

export function SliderExplore({ question, disabled, onSubmit }: SliderExploreProps) {
  const [value, setValue] = useState(() => midpoint(question.min, question.max, question.step))

  const handleSubmit = () => {
    const [lo, hi] = question.correctRange
    const isCorrect = value >= lo && value <= hi
    onSubmit(isCorrect ? 'correct' : 'incorrect')
  }

  return (
    <div className="space-y-3">
      <label className="block text-sm">
        <span className="text-muted-foreground">{question.label}: </span>
        <span className="font-mono font-semibold">{value}</span>
      </label>
      <input
        type="range"
        min={question.min}
        max={question.max}
        step={question.step}
        value={value}
        onChange={e => setValue(Number(e.target.value))}
        disabled={disabled}
        className="w-full"
        aria-label={question.label}
        aria-valuemin={question.min}
        aria-valuemax={question.max}
        aria-valuenow={value}
      />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{question.min}</span>
        <span>{question.max}</span>
      </div>
      <button
        onClick={handleSubmit}
        disabled={disabled}
        className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
      >
        Submit
      </button>
    </div>
  )
}
