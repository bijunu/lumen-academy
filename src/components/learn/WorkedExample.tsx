'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react'

import type { WorkedExample as WorkedExampleType } from '@/types/content'

interface WorkedExampleProps {
  example: WorkedExampleType
  onComplete: () => void
  realmAccent?: string
}

export function WorkedExample({
  example,
  onComplete,
  realmAccent = 'hsl(var(--primary))',
}: WorkedExampleProps) {
  const [visibleSteps, setVisibleSteps] = useState(1)

  const allRevealed = visibleSteps >= example.steps.length

  return (
    <div className="space-y-4">
      <ol className="space-y-3">
        {example.steps.slice(0, visibleSteps).map((step, i) => {
          const isLatest = i === visibleSteps - 1
          return (
            <li
              key={i}
              className="flex gap-3 rounded-xl border bg-muted/30 p-4"
              style={
                isLatest
                  ? {
                      borderColor: `${realmAccent}55`,
                      backgroundColor: `${realmAccent}0A`,
                    }
                  : undefined
              }
            >
              <span
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white"
                style={{ backgroundColor: realmAccent }}
                aria-hidden
              >
                {i < visibleSteps - 1 ? (
                  <CheckCircle2 className="h-4 w-4" />
                ) : (
                  <span className="text-xs font-semibold">{i + 1}</span>
                )}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-base leading-relaxed">{step.explanation}</p>
                {step.maths && (
                  <p
                    className="mt-2 font-mono text-base font-semibold"
                    style={{ color: realmAccent }}
                  >
                    {step.maths}
                  </p>
                )}
              </div>
            </li>
          )
        })}
      </ol>

      {!allRevealed ? (
        <button
          type="button"
          onClick={() => setVisibleSteps(prev => prev + 1)}
          className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-semibold transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          style={{ borderColor: `${realmAccent}55`, color: realmAccent }}
        >
          Reveal next step
          <ChevronDown className="h-4 w-4" />
        </button>
      ) : (
        <button
          type="button"
          onClick={onComplete}
          className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          style={{ backgroundColor: realmAccent }}
        >
          I understand, continue
          <ArrowRight className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}
