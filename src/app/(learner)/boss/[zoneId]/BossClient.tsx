'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

import { useRewardCelebration } from '@/components/celebration/RewardCelebration'
import {
  BossArena,
  type BossAnswer,
  type BossQuestionView,
  type BossSubmitResult,
} from '@/components/boss/BossArena'
import { Skeleton } from '@/components/ui/skeleton'
import {
  BOSS_FIRST_DEFEAT_SPARK,
  BOSS_PASS_THRESHOLD,
} from '@/types/boss'
import type { BadgeId } from '@/types/gamification'

interface BossClientProps {
  zoneId: string
  zoneName: string
  realmId: string
}

interface GetSuccess {
  status: 'ok'
  attempt: { status: 'pending' | 'defeated' | 'failed' }
  questions: BossQuestionView[]
  zone: { id: string; name: string; realm: string }
  passThreshold: number
  questionCount: number
}

type FetchState =
  | { kind: 'loading' }
  | { kind: 'error'; message: string }
  | {
      kind: 'ready'
      questions: BossQuestionView[]
      passThreshold: number
    }
  | { kind: 'already-attempted' }

interface PostResponse {
  result: BossSubmitResult
  badgeUnlocks: BadgeId[]
}

export function BossClient({ zoneId, zoneName, realmId }: BossClientProps) {
  const router = useRouter()
  const { celebrate } = useRewardCelebration()
  const [state, setState] = useState<FetchState>({ kind: 'loading' })
  const dialogRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let cancelled = false
    fetch(`/api/boss/${zoneId}`)
      .then(async r => {
        if (r.status === 403) {
          throw new Error('not-eligible')
        }
        if (!r.ok) throw new Error(`status ${r.status}`)
        return (await r.json()) as GetSuccess
      })
      .then(payload => {
        if (cancelled) return
        if (payload.attempt.status !== 'pending') {
          setState({ kind: 'already-attempted' })
          return
        }
        setState({
          kind: 'ready',
          questions: payload.questions,
          passThreshold: payload.passThreshold,
        })
      })
      .catch(err => {
        if (cancelled) return
        const message =
          err instanceof Error && err.message === 'not-eligible'
            ? 'You are not yet eligible for this boss. Train every node to bronze first.'
            : 'Could not load the boss. Try again.'
        setState({ kind: 'error', message })
      })
    return () => {
      cancelled = true
    }
  }, [zoneId])

  const exitToRealm = useCallback(() => {
    router.push(`/realm/${realmId}`)
  }, [realmId, router])

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null
    dialogRef.current?.focus()
    return () => {
      previouslyFocused?.focus?.()
    }
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        exitToRealm()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [exitToRealm])

  const handleSubmit = useCallback(
    async (answers: BossAnswer[]): Promise<BossSubmitResult | null> => {
      try {
        const res = await fetch(`/api/boss/${zoneId}`, {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ answers }),
        })
        if (!res.ok) return null
        const payload = (await res.json()) as PostResponse
        if (payload.result.defeated) {
          celebrate({
            type: 'quest-complete',
            xp: payload.result.xpAwarded,
            spark: payload.result.isFirstDefeat ? BOSS_FIRST_DEFEAT_SPARK : 0,
          })
        }
        for (const badgeId of payload.badgeUnlocks) {
          celebrate({ type: 'badge-unlock', badgeId })
        }
        return payload.result
      } catch {
        return null
      }
    },
    [zoneId, celebrate]
  )

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${zoneName} boss battle`}
      tabIndex={-1}
      className="fixed inset-0 z-50 overflow-y-auto bg-background outline-none"
    >
      {state.kind === 'loading' && (
        <div className="space-y-4 p-8">
          <Skeleton className="h-8 w-1/3" />
          <Skeleton className="h-64 w-full" />
        </div>
      )}
      {state.kind === 'error' && (
        <div className="flex h-full items-center justify-center p-8 text-center">
          <div className="space-y-3">
            <p className="text-lg font-semibold">{state.message}</p>
            <button
              onClick={exitToRealm}
              className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90"
            >
              Back to realm
            </button>
          </div>
        </div>
      )}
      {state.kind === 'already-attempted' && (
        <div className="flex h-full items-center justify-center p-8 text-center">
          <div className="space-y-3">
            <p className="text-lg font-semibold">
              You have already battled this boss today.
            </p>
            <p className="text-sm text-muted-foreground">
              Come back tomorrow for a fresh attempt.
            </p>
            <button
              onClick={exitToRealm}
              className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90"
            >
              Back to realm
            </button>
          </div>
        </div>
      )}
      {state.kind === 'ready' && (
        <BossArena
          zoneName={zoneName}
          questions={state.questions}
          passThreshold={state.passThreshold ?? BOSS_PASS_THRESHOLD}
          onSubmit={handleSubmit}
          onExit={exitToRealm}
        />
      )}
    </div>
  )
}
