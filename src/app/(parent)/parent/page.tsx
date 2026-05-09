import Link from 'next/link'
import { redirect } from 'next/navigation'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { auth } from '@/lib/auth/authOptions'
import { getContentRepository } from '@/lib/content'
import { REALMS, REALM_LIST, type RealmId } from '@/lib/constants/realms'
import { suggestConversationPrompts } from '@/lib/parent/conversationPrompts'
import { pickStrugglingTopics } from '@/lib/parent/strugglingTopics'
import {
  WEEKLY_TIME_DAYS,
  computeWeeklyTime,
  formatMinutes,
  startOfWeekUtc,
} from '@/lib/parent/weeklyTime'
import { computeRealmProgress } from '@/lib/progress/homeSummary'
import { getProgressRepository } from '@/lib/progress/progressRepository'

export const dynamic = 'force-dynamic'

const DAY_LABEL = new Intl.DateTimeFormat('en-GB', {
  weekday: 'short',
  timeZone: 'UTC',
})

function formatDayLabel(dayKey: string): string {
  const [y, m, d] = dayKey.split('-').map(Number)
  return DAY_LABEL.format(new Date(Date.UTC(y, m - 1, d)))
}

function accuracyLabel(value: number): string {
  return `${Math.round(value * 100)}%`
}

export default async function ParentPage() {
  const session = await auth()
  if (!session?.user) {
    redirect('/api/auth/signin?callbackUrl=/parent')
  }

  const userId = session.user.id
  const now = new Date()
  const weekStart = startOfWeekUtc(now)
  const weekEnd = new Date(
    weekStart.getTime() + WEEKLY_TIME_DAYS * 24 * 60 * 60 * 1000
  )

  const progressRepo = getProgressRepository()
  const contentRepo = getContentRepository()

  const [sessions, progressRows, allNodes] = await Promise.all([
    progressRepo.listSessionsInWindow(userId, weekStart, weekEnd),
    progressRepo.listAllProgress(userId),
    contentRepo.getAllNodes(),
  ])

  const weeklyTime = computeWeeklyTime(sessions, weekStart)
  const realmProgress = computeRealmProgress(progressRows, allNodes)
  const struggling = pickStrugglingTopics(progressRows, allNodes, 5)
  const prompts = suggestConversationPrompts(struggling, 3)

  const peakMinutes = Math.max(
    ...weeklyTime.dailyMinutes.map(d => d.minutes),
    1
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm text-muted-foreground">
          Signed in as <strong>{session.user.email}</strong>. Last 7 days,{' '}
          {weeklyTime.dailyMinutes[0].day} to{' '}
          {weeklyTime.dailyMinutes[WEEKLY_TIME_DAYS - 1].day}.
        </p>
        <Link
          href="/parent/digest"
          className="text-sm font-medium text-primary hover:underline"
        >
          Preview weekly digest
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Time on app this week</CardTitle>
          <CardDescription>
            {formatMinutes(weeklyTime.totalMinutes)} across{' '}
            {weeklyTime.dailyMinutes.filter(d => d.minutes > 0).length} day(s).
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-end gap-2">
            {weeklyTime.dailyMinutes.map(d => {
              const heightPercent = (d.minutes / peakMinutes) * 100
              return (
                <div
                  key={d.day}
                  className="flex flex-1 flex-col items-center gap-1"
                  data-testid="time-bar"
                  data-day={d.day}
                  data-minutes={d.minutes}
                >
                  <div className="flex h-24 w-full items-end">
                    <div
                      className="w-full rounded-t-md bg-primary/80"
                      style={{
                        height: `${d.minutes > 0 ? Math.max(heightPercent, 4) : 0}%`,
                      }}
                      aria-label={`${formatMinutes(d.minutes)} on ${d.day}`}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {formatDayLabel(d.day)}
                  </span>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Mastery progress per realm</CardTitle>
          <CardDescription>Nodes touched (mastery earned) by realm.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2">
            {REALM_LIST.map(realm => {
              const stats = realmProgress[realm.id as RealmId]
              const pct =
                stats.total > 0
                  ? Math.round((stats.mastered / stats.total) * 100)
                  : 0
              return (
                <div key={realm.id} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-1.5">
                      <realm.icon
                        className="h-3.5 w-3.5"
                        style={{ color: realm.colour }}
                      />
                      {realm.label}
                    </span>
                    <span className="text-muted-foreground">
                      {stats.mastered} of {stats.total}
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-muted">
                    <div
                      className="h-2 rounded-full"
                      style={{
                        width: `${pct}%`,
                        backgroundColor: realm.colour,
                      }}
                      aria-label={`${realm.label} progress ${pct}%`}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Struggling topics</CardTitle>
          <CardDescription>
            Lowest accuracy first. Open one to revisit it together.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {struggling.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              Nothing to flag yet. Once your child attempts a few questions, the
              weakest will surface here.
            </p>
          ) : (
            <ul className="space-y-2">
              {struggling.map(t => {
                const realm = REALMS[t.realm]
                const Icon = realm.icon
                return (
                  <li
                    key={t.nodeId}
                    className="flex items-center gap-3 rounded-md border p-2"
                    data-testid="struggling-topic"
                  >
                    <Icon
                      className="h-4 w-4 shrink-0"
                      style={{ color: realm.colour }}
                      aria-hidden
                    />
                    <div className="min-w-0 flex-1">
                      <Link
                        href={`/learn/${t.nodeId}`}
                        className="block truncate text-sm font-medium hover:underline"
                      >
                        {t.title}
                      </Link>
                      <p className="text-xs text-muted-foreground">
                        {realm.label} · {accuracyLabel(t.accuracy)} across{' '}
                        {t.totalAttempts} attempt{t.totalAttempts === 1 ? '' : 's'}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Conversation starters</CardTitle>
          <CardDescription>
            Quick prompts you can use at home, drawn from the topics above.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {prompts.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              We will suggest a few once your child has practised a topic or two.
            </p>
          ) : (
            <ul className="space-y-2">
              {prompts.map(p => (
                <li
                  key={p.nodeId}
                  className="rounded-md border-l-4 pl-3 text-sm"
                  style={{ borderLeftColor: REALMS[p.realm].colour }}
                  data-testid="conversation-prompt"
                >
                  {p.text}
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
