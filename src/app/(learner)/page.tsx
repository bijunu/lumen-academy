'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'

import { DailyChallengeCard } from '@/components/home/DailyChallengeCard'
import { DailyQuestCard, type DailyQuestState } from '@/components/home/DailyQuestCard'
import { HomeHero } from '@/components/home/HomeHero'
import { RealmTile } from '@/components/home/RealmTile'
import { WeakSpotsCard } from '@/components/home/WeakSpotsCard'
import { ShortcutHelpOverlay } from '@/components/layout/ShortcutHelpOverlay'
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts'
import { REALM_LIST, type RealmId } from '@/lib/constants/realms'
import {
  STREAK_WINDOW_DAYS,
  emptyRealmProgress,
  type RealmProgressMap,
} from '@/lib/progress/homeSummary'
import type { DailyQuestRecord } from '@/types/dailyQuest'

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

interface QuestNode {
  id: string
  title: string
  realm: RealmId
}

interface DailyQuestSuccess {
  status: 'ok'
  quest: DailyQuestRecord
  nodes: QuestNode[]
}

interface DailyQuestEmpty {
  status: 'no-content'
}

type DailyQuestResponse = DailyQuestSuccess | DailyQuestEmpty

const PLACEHOLDER_DAYS: boolean[] = Array.from(
  { length: STREAK_WINDOW_DAYS },
  () => false
)

function StreakBand({ days }: { days: boolean[] }) {
  const activeCount = days.filter(Boolean).length
  return (
    <section
      aria-label="Streak"
      className="flex items-center justify-between rounded-xl border bg-card px-4 py-3"
    >
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium tracking-tight">Streak</span>
        <span className="text-xs text-muted-foreground">
          {activeCount} of last {STREAK_WINDOW_DAYS} days
        </span>
      </div>
      <div className="flex items-center gap-1.5">
        {days.map((active, i) => (
          <div
            key={i}
            role="img"
            className={`h-2.5 w-2.5 rounded-full ${active ? 'bg-primary' : 'bg-muted'}`}
            aria-label={active ? 'Active day' : 'Inactive day'}
          />
        ))}
      </div>
    </section>
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

function useDailyQuest(): DailyQuestState {
  const { status } = useSession()
  const [state, setState] = useState<DailyQuestState>({ kind: 'loading' })

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
    fetch('/api/daily-quest')
      .then(async r => {
        if (!r.ok) throw new Error(`status ${r.status}`)
        return (await r.json()) as DailyQuestResponse
      })
      .then(payload => {
        if (cancelled) return
        if (payload.status === 'no-content') {
          setState({ kind: 'no-content' })
        } else {
          setState({
            kind: 'ready',
            quest: payload.quest,
            nodes: payload.nodes,
          })
        }
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
  const questState = useDailyQuest()

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
        <HomeHero state={questState} />

        <section aria-labelledby="home-realms-heading">
          <h2
            id="home-realms-heading"
            className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground"
          >
            Realms
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {REALM_LIST.map(realm => {
              const progress = realmProgress[realm.id as RealmId]
              return (
                <RealmTile
                  key={realm.id}
                  realmId={realm.id as RealmId}
                  mastered={progress.mastered}
                  total={progress.total}
                />
              )
            })}
          </div>
        </section>

        <div className="grid gap-4 md:grid-cols-3">
          <DailyQuestCard state={questState} />
          <DailyChallengeCard />
          <WeakSpotsCard />
        </div>

        <StreakBand days={days} />
      </div>

      <ShortcutHelpOverlay open={showHelp} onClose={() => setShowHelp(false)} />
    </>
  )
}
