import { DAILY_QUEST_TASK_COUNT } from '@/types/dailyQuest'
import type { DailyQuestTask, DailyQuestTaskKind } from '@/types/dailyQuest'

interface PickArgs {
  dueNodeIds: readonly string[]
  untouchedNodeIds: readonly string[]
  seedKey: string
  count?: number
  duePreferred?: number
}

const DEFAULT_DUE_PREFERRED = 2

function fnv1a(input: string): number {
  let hash = 0x811c9dc5
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i)
    hash = Math.imul(hash, 0x01000193)
  }
  return hash >>> 0
}

function shuffleDeterministic<T>(items: readonly T[], seedKey: string): T[] {
  const out = items.slice()
  for (let i = out.length - 1; i > 0; i--) {
    const j = fnv1a(`${seedKey}:${i}`) % (i + 1)
    const tmp = out[i]
    out[i] = out[j]
    out[j] = tmp
  }
  return out
}

function freshTask(nodeId: string, kind: DailyQuestTaskKind): DailyQuestTask {
  return { nodeId, kind, status: 'pending', completedAt: null }
}

export function pickTasks({
  dueNodeIds,
  untouchedNodeIds,
  seedKey,
  count = DAILY_QUEST_TASK_COUNT,
  duePreferred = DEFAULT_DUE_PREFERRED,
}: PickArgs): DailyQuestTask[] {
  if (count <= 0) return []

  const seenUntouched = new Set(untouchedNodeIds)
  const dueDeduped = [...dueNodeIds].sort().filter(id => !seenUntouched.has(id))
  const untouchedSorted = [...untouchedNodeIds].sort()

  const dueShuffled = shuffleDeterministic(dueDeduped, `${seedKey}:due`)
  const untouchedShuffled = shuffleDeterministic(
    untouchedSorted,
    `${seedKey}:new`
  )

  const tasks: DailyQuestTask[] = []
  const picked = new Set<string>()

  const takeFrom = (
    pool: string[],
    kind: DailyQuestTaskKind,
    upTo: number
  ) => {
    while (pool.length > 0 && upTo > 0 && tasks.length < count) {
      const id = pool.shift()
      if (!id || picked.has(id)) continue
      picked.add(id)
      tasks.push(freshTask(id, kind))
      upTo--
    }
  }

  takeFrom(dueShuffled, 'due-review', Math.min(duePreferred, count))
  takeFrom(untouchedShuffled, 'new-node', count - tasks.length)
  takeFrom(dueShuffled, 'due-review', count - tasks.length)
  takeFrom(untouchedShuffled, 'new-node', count - tasks.length)

  return tasks
}
