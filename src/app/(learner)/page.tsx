'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { REALM_LIST } from '@/lib/constants/realms'
import { ShortcutHelpOverlay } from '@/components/layout/ShortcutHelpOverlay'
import { DailyChallengeCard } from '@/components/home/DailyChallengeCard'
import { DailyQuestCard } from '@/components/home/DailyQuestCard'
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts'

function StreakStrip() {
  const days = Array.from({ length: 14 }, (_, i) => i < 7)
  return (
    <div className="flex items-center gap-1.5">
      {days.map((active, i) => (
        <div
          key={i}
          className={`h-3 w-3 rounded-full ${active ? 'bg-primary' : 'bg-muted'}`}
          aria-label={active ? 'Active day' : 'Inactive day'}
        />
      ))}
      <span className="ml-2 text-xs text-muted-foreground">Last 14 days</span>
    </div>
  )
}

function SubjectProgressBars() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {REALM_LIST.map(realm => (
        <div key={realm.id} className="space-y-1">
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-1.5">
              <realm.icon className="h-3.5 w-3.5" style={{ color: realm.colour }} />
              {realm.label}
            </span>
            <span className="text-muted-foreground">0%</span>
          </div>
          <div className="h-2 rounded-full bg-muted">
            <div
              className="h-2 rounded-full transition-all"
              style={{ width: '0%', backgroundColor: realm.colour }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default function HomePage() {
  const { showHelp, setShowHelp } = useKeyboardShortcuts()

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
            <StreakStrip />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Subject Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <SubjectProgressBars />
          </CardContent>
        </Card>
      </div>

      <ShortcutHelpOverlay open={showHelp} onClose={() => setShowHelp(false)} />
    </>
  )
}
