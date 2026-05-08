'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'

import { REALMS, type RealmId } from '@/lib/constants/realms'
import type { TrendPoint } from '@/lib/progress/trend'

import { TrendSparkline } from './TrendSparkline'

interface NodeTrendProps {
  nodeId: string
  realm: RealmId
}

interface GetResponse {
  points: TrendPoint[]
}

export function NodeTrend({ nodeId, realm }: NodeTrendProps) {
  const { status } = useSession()
  const [points, setPoints] = useState<TrendPoint[] | null>(null)

  useEffect(() => {
    if (status !== 'authenticated') return
    let cancelled = false
    fetch(`/api/progress/trend?nodeId=${encodeURIComponent(nodeId)}`)
      .then(async r => {
        if (!r.ok) throw new Error(`status ${r.status}`)
        return (await r.json()) as GetResponse
      })
      .then(payload => {
        if (cancelled) return
        setPoints(payload.points)
      })
      .catch(() => {
        if (!cancelled) setPoints([])
      })
    return () => {
      cancelled = true
    }
  }, [nodeId, status])

  if (status !== 'authenticated') return null
  if (!points || points.length < 2) return null

  return (
    <div className="space-y-2" data-testid="node-trend">
      <p className="text-xs uppercase tracking-wide text-muted-foreground">
        Recent accuracy
      </p>
      <TrendSparkline points={points} colour={REALMS[realm].colour} />
      <p className="text-xs text-muted-foreground">
        {points.length} day{points.length === 1 ? '' : 's'} of data, last 10 days.
      </p>
    </div>
  )
}
