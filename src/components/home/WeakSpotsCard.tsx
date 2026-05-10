'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { TrendingDown } from 'lucide-react'
import { useSession } from 'next-auth/react'

import { Skeleton } from '@/components/ui/skeleton'
import { REALMS, type RealmId } from '@/lib/constants/realms'

interface WeakSpotPayload {
  nodeId: string
  title: string
  realm: RealmId
  accuracy: number
  totalAttempts: number
  lastAttemptAt: string | null
}

type FetchState =
  | { kind: 'idle' }
  | { kind: 'loading' }
  | { kind: 'unauthenticated' }
  | { kind: 'error' }
  | { kind: 'ready'; spots: WeakSpotPayload[] }

interface GetResponse {
  spots: WeakSpotPayload[]
}

function CardFrame({
  caption,
  children,
}: {
  caption?: string
  children: React.ReactNode
}) {
  return (
    <section
      aria-label="Weak Spots"
      className="rounded-xl border bg-card p-4"
    >
      <div className="flex items-baseline justify-between">
        <h2 className="text-sm font-semibold tracking-tight">Weak Spots</h2>
        {caption && (
          <p className="text-xs text-muted-foreground">{caption}</p>
        )}
      </div>
      <div className="mt-3">{children}</div>
    </section>
  )
}

function SpotRow({ spot }: { spot: WeakSpotPayload }) {
  const realm = REALMS[spot.realm]
  const Icon = realm.icon
  const accuracyPercent = Math.round(spot.accuracy * 100)
  return (
    <li
      className="flex items-center gap-3 rounded-md border p-2"
      data-testid="weak-spot"
    >
      <Icon
        className="h-4 w-4 shrink-0"
        style={{ color: realm.colour }}
        aria-hidden
      />
      <div className="min-w-0 flex-1">
        <Link
          href={`/learn/${spot.nodeId}`}
          className="block truncate text-sm font-medium hover:underline"
        >
          {spot.title}
        </Link>
        <p className="text-xs text-muted-foreground">
          {realm.label} · {accuracyPercent}% so far
        </p>
      </div>
    </li>
  )
}

export function WeakSpotsCard() {
  const { status: sessionStatus } = useSession()
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
    fetch('/api/progress/weak-spots')
      .then(async r => {
        if (!r.ok) throw new Error(`status ${r.status}`)
        return (await r.json()) as GetResponse
      })
      .then(payload => {
        if (cancelled) return
        setState({ kind: 'ready', spots: payload.spots })
      })
      .catch(() => {
        if (!cancelled) setState({ kind: 'error' })
      })

    return () => {
      cancelled = true
    }
  }, [sessionStatus])

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
          Sign in to see your weak spots.
        </p>
      </CardFrame>
    )
  }

  if (state.kind === 'error') {
    return (
      <CardFrame>
        <p className="text-sm text-muted-foreground">
          Could not load weak spots. Refresh to try again.
        </p>
      </CardFrame>
    )
  }

  if (state.spots.length === 0) {
    return (
      <CardFrame>
        <div className="flex items-start gap-2 rounded-md border border-dashed p-3 text-sm">
          <TrendingDown
            className="mt-0.5 h-4 w-4 text-muted-foreground"
            aria-hidden
          />
          <div>
            <p className="font-medium">Nothing due right now.</p>
            <p className="text-muted-foreground">
              Try a new topic from one of the realms below.
            </p>
          </div>
        </div>
      </CardFrame>
    )
  }

  return (
    <CardFrame caption={`${state.spots.length} ready for another go`}>
      <ul className="space-y-1.5">
        {state.spots.map(spot => (
          <SpotRow key={spot.nodeId} spot={spot} />
        ))}
      </ul>
    </CardFrame>
  )
}
