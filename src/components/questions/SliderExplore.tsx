'use client'

import { useState } from 'react'

import { LessonCTA } from '@/components/learn/LessonCTA'
import type { SliderExploreQuestion } from '@/types/content'

interface SliderExploreProps {
  question: SliderExploreQuestion
  disabled: boolean
  onSubmit: (value: number) => void
  realmAccent?: string
}

function midpoint(min: number, max: number, step: number): number {
  const raw = (min + max) / 2
  if (step <= 0) return raw
  return Math.round(raw / step) * step
}

export function SliderExplore({
  question,
  disabled,
  onSubmit,
  realmAccent,
}: SliderExploreProps) {
  const [value, setValue] = useState(() => midpoint(question.min, question.max, question.step))

  const handleSubmit = () => {
    onSubmit(value)
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
      <LessonCTA
        onClick={handleSubmit}
        disabled={disabled}
        realmAccent={realmAccent}
      >
        Submit
      </LessonCTA>
    </div>
  )
}
