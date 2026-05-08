'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { Sparkles, Zap } from 'lucide-react'

import type { ScholarProfile, ScholarRanks } from '@/types/gamification'

interface ProfileResponse {
  profile: ScholarProfile
  ranks: ScholarRanks
}

export function ScholarStatusPill() {
  const { status } = useSession()
  const [data, setData] = useState<ProfileResponse | null>(null)

  useEffect(() => {
    if (status !== 'authenticated') return
    let cancelled = false
    fetch('/api/scholar/profile')
      .then(r => (r.ok ? r.json() : null))
      .then((payload: ProfileResponse | null) => {
        if (!cancelled && payload) setData(payload)
      })
      .catch(() => {
        // swallow — pill stays hidden
      })
    return () => {
      cancelled = true
    }
  }, [status])

  if (status !== 'authenticated' || !data) return null

  const { profile, ranks } = data

  return (
    <div
      data-testid="scholar-pill"
      className="flex items-center gap-3 rounded-full border bg-muted/50 px-3 py-1 text-xs font-medium"
    >
      <span aria-label={`Scholar rank ${ranks.overall}, ${profile.xpTotal} XP`}>
        Rank {ranks.overall}
        <span className="ml-1 text-muted-foreground">{profile.xpTotal} XP</span>
      </span>
      <span
        className="flex items-center gap-1"
        aria-label={`${profile.currencies.insight} insight`}
      >
        <Sparkles className="h-3.5 w-3.5" aria-hidden />
        {profile.currencies.insight}
      </span>
      <span
        className="flex items-center gap-1"
        aria-label={`${profile.currencies.spark} spark`}
      >
        <Zap className="h-3.5 w-3.5" aria-hidden />
        {profile.currencies.spark}
      </span>
    </div>
  )
}
