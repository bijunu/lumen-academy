'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CheckCircle2, Circle } from 'lucide-react'
import { useSession } from 'next-auth/react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import type {
  DailyQuestRecord,
  DailyQuestTask,
} from '@/types/dailyQuest'
import {
  DAILY_QUEST_BONUS_SPARK,
  DAILY_QUEST_BONUS_XP,
  DAILY_QUEST_TASK_COUNT,
} from '@/types/dailyQuest'

interface QuestNode {
  id: string
  title: string
  realm: string
}

type FetchState =
  | { kind: 'idle' }
  | { kind: 'loading' }
  | { kind: 'unauthenticated' }
  | { kind: 'no-content' }
  | { kind: 'error' }
  | {
      kind: 'ready'
      quest: DailyQuestRecord
      nodes: QuestNode[]
    }

interface GetSuccess {
  status: 'ok'
  quest: DailyQuestRecord
  nodes: QuestNode[]
}

interface GetEmpty {
  status: 'no-content'
}

type GetResponse = GetSuccess | GetEmpty

function CardFrame({ children }: { children: React.ReactNode }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Today&apos;s Quest
          <Badge variant="secondary">{DAILY_QUEST_TASK_COUNT} tasks</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}

function questStatus(quest: DailyQuestRecord): {
  completed: number
  total: number
  allDone: boolean
} {
  const total = quest.tasks.length
  const completed = quest.tasks.filter(t => t.status === 'complete').length
  return { completed, total, allDone: total > 0 && completed === total }
}

function TaskRow({
  task,
  node,
}: {
  task: DailyQuestTask
  node: QuestNode | undefined
}) {
  const isComplete = task.status === 'complete'
  const title = node?.title ?? task.nodeId
  const Icon = isComplete ? CheckCircle2 : Circle
  return (
    <li
      className="flex items-center gap-3 rounded-md border p-2"
      data-testid="daily-quest-task"
      data-task-status={task.status}
    >
      <Icon
        className={
          isComplete ? 'h-4 w-4 text-primary' : 'h-4 w-4 text-muted-foreground'
        }
        aria-hidden
      />
      <div className="flex-1">
        <Link
          href={`/learn/${task.nodeId}`}
          className="text-sm font-medium hover:underline"
        >
          {title}
        </Link>
        <p className="text-xs text-muted-foreground">
          {task.kind === 'due-review' ? 'Review' : 'New topic'}
        </p>
      </div>
    </li>
  )
}

export function DailyQuestCard() {
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
    fetch('/api/daily-quest')
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
        setState({
          kind: 'ready',
          quest: payload.quest,
          nodes: payload.nodes,
        })
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
        <Skeleton className="h-24 w-full" />
        <p className="mt-3 text-sm text-muted-foreground">
          Complete three mixed tasks to earn bonus XP.
        </p>
      </CardFrame>
    )
  }

  if (state.kind === 'unauthenticated') {
    return (
      <CardFrame>
        <p className="text-sm text-muted-foreground">
          Sign in to start today&apos;s quest.
        </p>
      </CardFrame>
    )
  }

  if (state.kind === 'no-content') {
    return (
      <CardFrame>
        <p className="text-sm text-muted-foreground">
          No quest available today. Check back soon.
        </p>
      </CardFrame>
    )
  }

  if (state.kind === 'error') {
    return (
      <CardFrame>
        <p className="text-sm text-muted-foreground">
          Could not load the quest. Refresh to try again.
        </p>
      </CardFrame>
    )
  }

  const { quest, nodes } = state
  const { completed, total, allDone } = questStatus(quest)
  const nodeIndex = new Map(nodes.map(n => [n.id, n]))

  return (
    <CardFrame>
      {allDone ? (
        <div
          className="rounded-md border border-green-500/50 bg-green-50 p-3 text-sm dark:bg-green-950/30"
          role="status"
          data-testid="daily-quest-complete"
        >
          <p className="font-semibold">
            Quest complete. +{DAILY_QUEST_BONUS_XP} XP, +
            {DAILY_QUEST_BONUS_SPARK} Spark.
          </p>
          <p className="mt-1 text-muted-foreground">
            Come back tomorrow for a fresh quest.
          </p>
        </div>
      ) : (
        <p className="mb-2 text-xs uppercase tracking-wide text-muted-foreground">
          {completed} of {total} done
        </p>
      )}
      <ul className="mt-2 space-y-2">
        {quest.tasks.map(task => (
          <TaskRow
            key={task.nodeId}
            task={task}
            node={nodeIndex.get(task.nodeId)}
          />
        ))}
      </ul>
    </CardFrame>
  )
}
