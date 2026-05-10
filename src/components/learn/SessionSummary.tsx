'use client'

import Link from 'next/link'
import { ArrowRight, Trophy } from 'lucide-react'

import { NodeTrend } from '@/components/progress/NodeTrend'
import { REALMS, type RealmId } from '@/lib/constants/realms'

interface SessionSummaryProps {
  nodeId: string
  nodeTitle: string
  realm: RealmId
  questionsAttempted: number
  questionsCorrect: number
  xpEarned: number
  streak: number
}

function StatTile({
  label,
  value,
  accent,
}: {
  label: string
  value: string
  accent: string
}) {
  return (
    <div className="rounded-xl border bg-card p-4 text-center">
      <p className="text-2xl font-bold tabular-nums" style={{ color: accent }}>
        {value}
      </p>
      <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
    </div>
  )
}

export function SessionSummary({
  nodeId,
  nodeTitle,
  realm,
  questionsAttempted,
  questionsCorrect,
  xpEarned,
  streak,
}: SessionSummaryProps) {
  const realmMeta = REALMS[realm]
  const realmAccent = realmMeta.colour
  const accuracy =
    questionsAttempted > 0
      ? Math.round((questionsCorrect / questionsAttempted) * 100)
      : 0

  return (
    <section
      className="relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm sm:p-8"
      style={{
        backgroundImage: `linear-gradient(135deg, ${realmAccent}1A, ${realmAccent}05)`,
      }}
      aria-labelledby="session-summary-title"
    >
      <header className="flex items-start gap-4">
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white shadow-sm"
          style={{ backgroundColor: realmAccent }}
          aria-hidden
        >
          <Trophy className="h-6 w-6" />
        </span>
        <div className="min-w-0 flex-1">
          <p
            className="text-xs font-semibold uppercase tracking-[0.18em]"
            style={{ color: realmAccent }}
          >
            Session complete
          </p>
          <h2
            id="session-summary-title"
            className="mt-0.5 text-2xl font-bold tracking-tight"
          >
            Nicely done with {nodeTitle}.
          </h2>
        </div>
      </header>

      <div className="mt-6 grid gap-3 sm:grid-cols-4">
        <StatTile
          label="Correct"
          value={`${questionsCorrect}/${questionsAttempted}`}
          accent={realmAccent}
        />
        <StatTile label="Accuracy" value={`${accuracy}%`} accent={realmAccent} />
        <StatTile label="XP earned" value={`${xpEarned}`} accent={realmAccent} />
        <StatTile label="Best streak" value={`${streak}`} accent={realmAccent} />
      </div>

      <div className="mt-6">
        <NodeTrend nodeId={nodeId} realm={realm} />
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          style={{ backgroundColor: realmAccent }}
        >
          Back to home
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
        <Link
          href={`/realm/${realm}`}
          className="inline-flex items-center gap-2 rounded-full border-2 bg-background px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          style={{ borderColor: `${realmAccent}55`, color: realmAccent }}
        >
          Back to {realmMeta.label}
        </Link>
      </div>
    </section>
  )
}
