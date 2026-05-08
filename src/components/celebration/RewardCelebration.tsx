'use client'

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from 'react'
import { Award, Scroll, Sparkles } from 'lucide-react'

import { fireConfetti } from '@/lib/celebration/confetti'
import { BADGE_BY_ID } from '@/lib/badges/badgeRules'
import type { BadgeId } from '@/types/gamification'
import type { MasteryLevel } from '@/types/progress'

const TOAST_TTL_MS = 4000

export type CelebrationEvent =
  | { type: 'badge-unlock'; badgeId: BadgeId }
  | { type: 'mastery-upgrade'; level: MasteryLevel; nodeTitle: string }
  | { type: 'quest-complete'; xp: number; spark: number }

interface RewardCelebrationContextValue {
  celebrate: (event: CelebrationEvent) => void
}

const RewardCelebrationContext =
  createContext<RewardCelebrationContextValue | null>(null)

interface ActiveToast {
  id: number
  event: CelebrationEvent
}

let nextToastId = 1

export function RewardCelebrationProvider({
  children,
}: {
  children: ReactNode
}) {
  const [toasts, setToasts] = useState<ActiveToast[]>([])

  const celebrate = useCallback((event: CelebrationEvent) => {
    void fireConfetti()
    const id = nextToastId++
    setToasts(prev => [...prev, { id, event }])
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id))
    }, TOAST_TTL_MS)
  }, [])

  return (
    <RewardCelebrationContext.Provider value={{ celebrate }}>
      {children}
      <ToastList toasts={toasts} />
    </RewardCelebrationContext.Provider>
  )
}

export function useRewardCelebration(): RewardCelebrationContextValue {
  const ctx = useContext(RewardCelebrationContext)
  if (!ctx) {
    throw new Error(
      'useRewardCelebration must be used inside RewardCelebrationProvider'
    )
  }
  return ctx
}

function ToastList({ toasts }: { toasts: ActiveToast[] }) {
  return (
    <div
      data-testid="celebration-toasts"
      aria-live="polite"
      className="pointer-events-none fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 flex-col gap-2"
    >
      {toasts.map(toast => (
        <CelebrationToast key={toast.id} event={toast.event} />
      ))}
    </div>
  )
}

function CelebrationToast({ event }: { event: CelebrationEvent }) {
  if (event.type === 'badge-unlock') {
    const meta = BADGE_BY_ID[event.badgeId]
    return (
      <div
        data-testid="celebration-toast"
        data-celebration-type="badge-unlock"
        className="flex items-center gap-3 rounded-lg border bg-card px-4 py-3 shadow-lg"
      >
        <Award className="h-5 w-5" aria-hidden />
        <div className="text-sm">
          <p className="font-semibold">Badge unlocked: {meta.name}</p>
          <p className="text-xs text-muted-foreground">{meta.description}</p>
        </div>
      </div>
    )
  }

  if (event.type === 'mastery-upgrade') {
    return (
      <div
        data-testid="celebration-toast"
        data-celebration-type="mastery-upgrade"
        className="flex items-center gap-3 rounded-lg border bg-card px-4 py-3 shadow-lg"
      >
        <Sparkles className="h-5 w-5" aria-hidden />
        <div className="text-sm">
          <p className="font-semibold">
            {capitalise(event.level)} mastery on {event.nodeTitle}
          </p>
          <p className="text-xs text-muted-foreground">
            Spaced reviews will keep it fresh.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div
      data-testid="celebration-toast"
      data-celebration-type="quest-complete"
      className="flex items-center gap-3 rounded-lg border bg-card px-4 py-3 shadow-lg"
    >
      <Scroll className="h-5 w-5" aria-hidden />
      <div className="text-sm">
        <p className="font-semibold">
          Daily Quest complete. +{event.xp} XP, +{event.spark} Spark.
        </p>
        <p className="text-xs text-muted-foreground">
          Come back tomorrow for a fresh quest.
        </p>
      </div>
    </div>
  )
}

function capitalise(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}
