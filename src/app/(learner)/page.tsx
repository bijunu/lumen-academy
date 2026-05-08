'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { REALM_LIST, type RealmId } from '@/lib/constants/realms'
import { ShortcutHelpOverlay } from '@/components/layout/ShortcutHelpOverlay'
import { DailyChallengeCard } from '@/components/home/DailyChallengeCard'
import { DailyQuestCard } from '@/components/home/DailyQuestCard'
import {
  STREAK_WINDOW_DAYS,
  emptyRealmProgress,
  type RealmProgressMap,
} from '@/lib/progress/homeSummary'
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts'

interface HomeSummary {
  streakDays: boolean[]
  realmProgress: RealmProgressMap
}

type SummaryState =
  | { kind: 'idle' }
  | { kind: 'loading' }
  | { kind: 'unauthenticated' }
  | { kind: 'error' }
  | { kind: 'ready'; summary: HomeSummary }

const PLACEHOLDER_DAYS: boolean[] = Array.from(
  { length: STREAK_WINDOW_DAYS },
  () => false
)

function StreakStrip({ days }: { days: boolean[] }) {
  const activeCount = days.filter(Boolean).length
  return (
    <div className="flex items-center gap-1.5">
      {days.map((active, i) => (
        <div
          key={i}
          className={`h-3 w-3 rounded-full ${active ? 'bg-primary' : 'bg-muted'}`}
          aria-label={active ? 'Active day' : 'Inactive day'}
        />
      ))}
      <span className="ml-2 text-xs text-muted-foreground">
        {activeCount} of last {STREAK_WINDOW_DAYS} days
      </span>
    </div>
  )
}

function SubjectProgressBars({
  realmProgress,
}: {
  realmProgress: RealmProgressMap
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {REALM_LIST.map(realm => {
        const { mastered, total } = realmProgress[realm.id as RealmId]
        const percent = total > 0 ? Math.round((mastered / total) * 100) : 0
        return (
          <Link
            key={realm.id}
            href={`/realm/${realm.id}`}
            className="space-y-1 rounded-md p-1 transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-1.5">
                <realm.icon
                  className="h-3.5 w-3.5"
                  style={{ color: realm.colour }}
                />
                {realm.label}
              </span>
              <span className="text-muted-foreground">
                {mastered} of {total}
              </span>
            </div>
            <div className="h-2 rounded-full bg-muted">
              <div
                className="h-2 rounded-full transition-all"
                style={{
                  width: `${percent}%`,
                  backgroundColor: realm.colour,
                }}
                aria-label={`${realm.label} progress ${percent}%`}
              />
            </div>
          </Link>
        )
      })}
    </div>
  )
}

function useHomeSummary(): SummaryState {
  const { status } = useSession()
  const [state, setState] = useState<SummaryState>({ kind: 'idle' })

  useEffect(() => {
    if (status === 'loading') {
      setState({ kind: 'loading' })
      return
    }
    if (status !== 'authenticated') {
      setState({ kind: 'unauthenticated' })
      return
    }

    let cancelled = false
    setState({ kind: 'loading' })
    fetch('/api/progress/home-summary')
      .then(async r => {
        if (!r.ok) throw new Error(`status ${r.status}`)
        return (await r.json()) as HomeSummary
      })
      .then(summary => {
        if (cancelled) return
        setState({ kind: 'ready', summary })
      })
      .catch(() => {
        if (!cancelled) setState({ kind: 'error' })
      })

    return () => {
      cancelled = true
    }
  }, [status])

  return state
}

export default function HomePage() {
  const { showHelp, setShowHelp } = useKeyboardShortcuts()
  const summaryState = useHomeSummary()

  const days =
    summaryState.kind === 'ready'
      ? summaryState.summary.streakDays
      : PLACEHOLDER_DAYS
  const realmProgress =
    summaryState.kind === 'ready'
      ? summaryState.summary.realmProgress
      : emptyRealmProgress()

  return (
    <>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold tracking-tight">Welcome back, Scholar</h1>

        <div className="grid gap-4 md:grid-cols-2">
          <DailyQuestCard />

          <Card>
            <CardHeader>
              <CardTitle>Continue Adventure</CardTitle>
            </CardHeader>
            <CardContent>
              <Skeleton className="h-24 w-full" />
              <p className="mt-3 text-sm text-muted-foreground">
                Pick up where you left off in your current zone.
              </p>
            </CardContent>
          </Card>

          <DailyChallengeCard />

          <Card>
            <CardHeader>
              <CardTitle>Weak Spots</CardTitle>
            </CardHeader>
            <CardContent>
              <Skeleton className="h-16 w-full" />
              <p className="mt-3 text-sm text-muted-foreground">
                Three topics ready for another go.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Streak</CardTitle>
          </CardHeader>
          <CardContent>
            <StreakStrip days={days} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Subject Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <SubjectProgressBars realmProgress={realmProgress} />
          </CardContent>
        </Card>
      </div>

      <ShortcutHelpOverlay open={showHelp} onClose={() => setShowHelp(false)} />
    </>
  )
}
