'use client'

import { useCallback, useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'

import { useRewardCelebration } from '@/components/celebration/RewardCelebration'
import { Skeleton } from '@/components/ui/skeleton'
import { QuestionShell } from '@/components/questions/QuestionShell'
import type { ScoreInput } from '@/lib/progress/serverScoring'
import type { Misconception, Question } from '@/types/content'
import type {
  DailyChallengeRecord,
  DailyChallengeStatus,
} from '@/types/dailyChallenge'
import type { BadgeId } from '@/types/gamification'

type FetchState =
  | { kind: 'idle' }
  | { kind: 'loading' }
  | { kind: 'unauthenticated' }
  | { kind: 'no-content' }
  | { kind: 'error' }
  | {
      kind: 'ready'
      challenge: DailyChallengeRecord
      node: { id: string; title: string }
      question: Question
      misconceptions: Misconception[]
    }
  | {
      kind: 'terminal'
      challenge: DailyChallengeRecord
      node: { id: string; title: string }
    }

interface GetSuccess {
  status: 'ok'
  challenge: DailyChallengeRecord
  node: { id: string; title: string; realm: string }
  question: Question
  misconceptions: Misconception[]
}

interface GetEmpty {
  status: 'no-content'
}

type GetResponse = GetSuccess | GetEmpty

interface PostResponse {
  challenge: DailyChallengeRecord
  badgeUnlocks: BadgeId[]
}

function isTerminal(status: DailyChallengeStatus): boolean {
  return status === 'correct' || status === 'incorrect'
}

function CardFrame({ children }: { children: React.ReactNode }) {
  return (
    <section
      aria-label="Daily Challenge"
      className="rounded-xl border bg-card p-4"
    >
      <div className="flex items-baseline justify-between">
        <h2 className="text-sm font-semibold tracking-tight">Daily Challenge</h2>
        <p className="text-xs font-medium text-muted-foreground">25 XP</p>
      </div>
      <div className="mt-3">{children}</div>
    </section>
  )
}

export function DailyChallengeCard() {
  const { status: sessionStatus } = useSession()
  const { celebrate } = useRewardCelebration()
  const [state, setState] = useState<FetchState>({ kind: 'idle' })

  useEffect(() => {
    if (sessionStatus === 'loading') {
      setState({ kind: 'loading' })
      return
    }
    if (sessionStatus !== 'authenticated') {
      setState({ kind: 'unauthenticated' })
      return
    }

    let cancelled = false
    setState({ kind: 'loading' })
    fetch('/api/daily-challenge')
      .then(async r => {
        if (!r.ok) throw new Error(`status ${r.status}`)
        return (await r.json()) as GetResponse
      })
      .then(payload => {
        if (cancelled) return
        if (payload.status === 'no-content') {
          setState({ kind: 'no-content' })
          return
        }
        if (isTerminal(payload.challenge.status)) {
          setState({
            kind: 'terminal',
            challenge: payload.challenge,
            node: payload.node,
          })
        } else {
          setState({
            kind: 'ready',
            challenge: payload.challenge,
            node: payload.node,
            question: payload.question,
            misconceptions: payload.misconceptions,
          })
        }
      })
      .catch(() => {
        if (!cancelled) setState({ kind: 'error' })
      })

    return () => {
      cancelled = true
    }
  }, [sessionStatus])

  const handleComplete = useCallback(
    (correct: boolean, _attemptCount: number, payload: ScoreInput) => {
      if (state.kind !== 'ready') return
      const node = state.node
      const challengeForOptimistic = state.challenge
      // Lock UI immediately so a refresh-loop in flight cannot retry.
      setState({
        kind: 'terminal',
        challenge: { ...challengeForOptimistic, status: correct ? 'correct' : 'incorrect' },
        node,
      })

      const body: { answer?: unknown; clientCorrect?: boolean } = {}
      if (payload.answer !== undefined) body.answer = payload.answer
      if (payload.clientCorrect !== undefined)
        body.clientCorrect = payload.clientCorrect

      fetch('/api/daily-challenge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
        .then(async r => {
          if (!r.ok) return null
          return (await r.json()) as PostResponse
        })
        .then(payload => {
          if (!payload) return
          setState({ kind: 'terminal', challenge: payload.challenge, node })
          for (const badgeId of payload.badgeUnlocks) {
            celebrate({ type: 'badge-unlock', badgeId })
          }
        })
        .catch(() => {
          // optimistic state already shown; no rollback needed
        })
    },
    [state, celebrate]
  )

  if (state.kind === 'idle' || state.kind === 'loading') {
    return (
      <CardFrame>
        <Skeleton className="h-12 w-full" />
      </CardFrame>
    )
  }

  if (state.kind === 'unauthenticated') {
    return (
      <CardFrame>
        <p className="text-sm text-muted-foreground">
          Sign in to play today&apos;s challenge.
        </p>
      </CardFrame>
    )
  }

  if (state.kind === 'no-content') {
    return (
      <CardFrame>
        <p className="text-sm text-muted-foreground">
          No challenge available today. Check back soon.
        </p>
      </CardFrame>
    )
  }

  if (state.kind === 'error') {
    return (
      <CardFrame>
        <p className="text-sm text-muted-foreground">
          Could not load the challenge. Refresh to try again.
        </p>
      </CardFrame>
    )
  }

  if (state.kind === 'terminal') {
    const correct = state.challenge.status === 'correct'
    return (
      <CardFrame>
        <div
          className={
            correct
              ? 'rounded-md border border-green-500/50 bg-green-50 p-3 text-sm dark:bg-green-950/30'
              : 'rounded-md border border-muted bg-muted/40 p-3 text-sm'
          }
          role="status"
          data-testid="daily-challenge-terminal"
          data-status={state.challenge.status}
        >
          <p className="font-semibold">
            {correct ? `Correct. +${state.challenge.xpAwarded} XP.` : 'Not today.'}
          </p>
          <p className="mt-1 text-muted-foreground">
            From {state.node.title}. Come back tomorrow for a fresh question.
          </p>
        </div>
      </CardFrame>
    )
  }

  return (
    <CardFrame>
      <p className="mb-3 text-xs uppercase tracking-wide text-muted-foreground">
        From {state.node.title}
      </p>
      <QuestionShell
        question={state.question}
        misconceptions={state.misconceptions}
        onComplete={handleComplete}
        oneShot
      />
    </CardFrame>
  )
}
