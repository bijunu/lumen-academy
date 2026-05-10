'use client'

import Link from 'next/link'
import { CheckCircle2, Circle } from 'lucide-react'

import { REALMS, type RealmId } from '@/lib/constants/realms'
import {
  DAILY_QUEST_BONUS_SPARK,
  DAILY_QUEST_BONUS_XP,
  type DailyQuestRecord,
  type DailyQuestTask,
} from '@/types/dailyQuest'

interface QuestNode {
  id: string
  title: string
  realm: RealmId
}

export type DailyQuestState =
  | { kind: 'loading' }
  | { kind: 'unauthenticated' }
  | { kind: 'no-content' }
  | { kind: 'error' }
  | { kind: 'ready'; quest: DailyQuestRecord; nodes: QuestNode[] }

interface DailyQuestCardProps {
  state: DailyQuestState
}

function Frame({
  caption,
  children,
}: {
  caption: string
  children: React.ReactNode
}) {
  return (
    <section
      aria-label="Today's Quest"
      className="rounded-xl border bg-card p-4"
    >
      <div className="flex items-baseline justify-between">
        <h2 className="text-sm font-semibold tracking-tight">Today&apos;s Quest</h2>
        <p className="text-xs text-muted-foreground">{caption}</p>
      </div>
      <div className="mt-3">{children}</div>
    </section>
  )
}

function TaskRow({
  task,
  node,
}: {
  task: DailyQuestTask
  node: QuestNode | undefined
}) {
  const isComplete = task.status === 'complete'
  const realm = node ? REALMS[node.realm] : null
  const Icon = isComplete ? CheckCircle2 : Circle
  const kindLabel = task.kind === 'due-review' ? 'Review' : 'New topic'
  return (
    <li
      className="flex items-center gap-3 py-2"
      data-testid="daily-quest-task"
      data-task-status={task.status}
    >
      <Icon
        className="h-4 w-4 shrink-0"
        style={{
          color: isComplete
            ? 'hsl(var(--primary))'
            : (realm?.colour ?? 'hsl(var(--muted-foreground))'),
        }}
        aria-hidden
      />
      <div className="min-w-0 flex-1">
        <Link
          href={`/learn/${task.nodeId}`}
          className="block truncate text-sm font-medium hover:underline"
        >
          {node?.title ?? task.nodeId}
        </Link>
        <p className="text-xs text-muted-foreground">{kindLabel}</p>
      </div>
    </li>
  )
}

export function DailyQuestCard({ state }: DailyQuestCardProps) {
  if (state.kind === 'loading') {
    return <Frame caption="loading">
      <div className="h-16 animate-pulse rounded-md bg-muted" />
    </Frame>
  }

  if (state.kind === 'unauthenticated') {
    return (
      <Frame caption="signed out">
        <p className="text-sm text-muted-foreground">
          Sign in to start today&apos;s quest.
        </p>
      </Frame>
    )
  }

  if (state.kind === 'no-content') {
    return (
      <Frame caption="empty">
        <p className="text-sm text-muted-foreground">
          No quest available today.
        </p>
      </Frame>
    )
  }

  if (state.kind === 'error') {
    return (
      <Frame caption="error">
        <p className="text-sm text-muted-foreground">
          Could not load the quest.
        </p>
      </Frame>
    )
  }

  const { quest, nodes } = state
  const completed = quest.tasks.filter(t => t.status === 'complete').length
  const total = quest.tasks.length
  const allDone = total > 0 && completed === total
  const nodeIndex = new Map(nodes.map(n => [n.id, n]))

  return (
    <Frame caption={`${completed} of ${total} done`}>
      {allDone ? (
        <p
          className="text-sm font-medium text-primary"
          data-testid="daily-quest-complete"
          role="status"
        >
          Quest complete. +{DAILY_QUEST_BONUS_XP} XP, +{DAILY_QUEST_BONUS_SPARK}{' '}
          Spark.
        </p>
      ) : (
        <ul className="divide-y">
          {quest.tasks.map(task => (
            <TaskRow
              key={task.nodeId}
              task={task}
              node={nodeIndex.get(task.nodeId)}
            />
          ))}
        </ul>
      )}
    </Frame>
  )
}
