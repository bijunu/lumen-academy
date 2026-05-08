import { Award, Lock } from 'lucide-react'

import { auth } from '@/lib/auth/authOptions'
import { BADGES } from '@/lib/badges/badgeRules'
import { freshScholarProfile } from '@/lib/scholar/applyScholarUpdate'
import { getScholarRepository } from '@/lib/scholar/scholarRepository'
import type { ScholarProfile } from '@/types/gamification'

export const dynamic = 'force-dynamic'

export default async function BadgesPage() {
  const session = await auth()
  let profile: ScholarProfile = freshScholarProfile(session?.user?.id ?? 'anon')
  if (session?.user) {
    const stored = await getScholarRepository().getProfile(session.user.id)
    if (stored) profile = stored
  }

  const totalEarnable = BADGES.filter(b => b.earnable).length
  const earnedCount = Object.keys(profile.badges).length

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold tracking-tight">Badges</h1>
        <p className="text-sm text-muted-foreground">
          Earned {earnedCount} of {totalEarnable} unlockable badges. Three more
          unlock as new game modes arrive.
        </p>
      </header>

      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {BADGES.map(badge => {
          const earnedAt = profile.badges[badge.id]
          const earned = Boolean(earnedAt)
          const stub = !badge.earnable
          return (
            <li
              key={badge.id}
              data-badge-id={badge.id}
              data-badge-state={
                earned ? 'earned' : stub ? 'stub' : 'available'
              }
              className="flex items-start gap-3 rounded-lg border bg-card p-4"
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border"
                style={{
                  borderColor: earned ? 'currentColor' : undefined,
                  opacity: earned ? 1 : 0.4,
                }}
              >
                {earned ? (
                  <Award className="h-5 w-5" />
                ) : (
                  <Lock className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold">{badge.name}</p>
                <p className="text-xs text-muted-foreground">
                  {badge.description}
                </p>
                {earned && earnedAt && (
                  <p className="text-xs text-muted-foreground">
                    Earned {new Date(earnedAt).toLocaleDateString('en-GB')}
                  </p>
                )}
                {stub && !earned && (
                  <p className="text-xs italic text-muted-foreground">
                    Coming soon
                  </p>
                )}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
