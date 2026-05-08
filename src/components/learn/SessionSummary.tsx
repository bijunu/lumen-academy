'use client'

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { NodeTrend } from '@/components/progress/NodeTrend'
import type { RealmId } from '@/lib/constants/realms'

interface SessionSummaryProps {
  nodeId: string
  nodeTitle: string
  realm: RealmId
  questionsAttempted: number
  questionsCorrect: number
  xpEarned: number
  streak: number
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
  const accuracy = questionsAttempted > 0
    ? Math.round((questionsCorrect / questionsAttempted) * 100)
    : 0

  return (
    <Card className="mx-auto max-w-md">
      <CardHeader>
        <CardTitle>Session Complete</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Well done! You have finished <strong>{nodeTitle}</strong>.
        </p>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-md bg-muted p-3 text-center">
            <p className="text-2xl font-bold">{questionsCorrect}/{questionsAttempted}</p>
            <p className="text-xs text-muted-foreground">Correct</p>
          </div>
          <div className="rounded-md bg-muted p-3 text-center">
            <p className="text-2xl font-bold">{accuracy}%</p>
            <p className="text-xs text-muted-foreground">Accuracy</p>
          </div>
          <div className="rounded-md bg-muted p-3 text-center">
            <p className="text-2xl font-bold">{xpEarned}</p>
            <p className="text-xs text-muted-foreground">XP Earned</p>
          </div>
          <div className="rounded-md bg-muted p-3 text-center">
            <p className="text-2xl font-bold">{streak}</p>
            <p className="text-xs text-muted-foreground">Best Streak</p>
          </div>
        </div>

        <NodeTrend nodeId={nodeId} realm={realm} />

        <Link
          href="/"
          className="block rounded-md bg-primary px-4 py-2 text-center text-sm text-primary-foreground hover:bg-primary/90"
        >
          Back to Home
        </Link>
      </CardContent>
    </Card>
  )
}
