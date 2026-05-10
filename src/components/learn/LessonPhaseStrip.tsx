'use client'

import { Check } from 'lucide-react'

import { cn } from '@/lib/utils'

export interface LessonPhaseStep {
  id: string
  label: string
}

interface LessonPhaseStripProps {
  phases: LessonPhaseStep[]
  activeId: string
  realmAccent: string
}

export function LessonPhaseStrip({
  phases,
  activeId,
  realmAccent,
}: LessonPhaseStripProps) {
  const activeIndex = Math.max(
    0,
    phases.findIndex(p => p.id === activeId)
  )

  return (
    <nav
      aria-label="Lesson progress"
      className="flex flex-wrap items-center gap-2"
    >
      {phases.map((phase, i) => {
        const isActive = i === activeIndex
        const isComplete = i < activeIndex
        return (
          <div key={phase.id} className="flex items-center gap-2">
            <span
              className={cn(
                'inline-flex h-8 items-center gap-1.5 rounded-full px-3 text-xs font-semibold',
                isActive && 'text-white shadow-sm',
                isComplete && 'border',
                !isActive && !isComplete && 'bg-muted text-muted-foreground'
              )}
              style={
                isActive
                  ? { backgroundColor: realmAccent }
                  : isComplete
                    ? {
                        color: realmAccent,
                        backgroundColor: `${realmAccent}1A`,
                        borderColor: `${realmAccent}33`,
                      }
                    : undefined
              }
              aria-current={isActive ? 'step' : undefined}
            >
              {isComplete && <Check className="h-3.5 w-3.5" aria-hidden />}
              <span>{phase.label}</span>
            </span>
            {i < phases.length - 1 && (
              <span
                aria-hidden
                className="h-px w-4 sm:w-6"
                style={{
                  backgroundColor: i < activeIndex ? realmAccent : 'hsl(var(--border))',
                }}
              />
            )}
          </div>
        )
      })}
    </nav>
  )
}
