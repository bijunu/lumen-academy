import type { RealmId } from '@/lib/constants/realms'
import type { SkillNode } from '@/types/content'
import type { NodeProgress } from '@/types/progress'

export const STRUGGLING_TOPICS_DEFAULT_LIMIT = 5

export interface StrugglingTopic {
  nodeId: string
  title: string
  realm: RealmId
  accuracy: number
  totalAttempts: number
  totalCorrect: number
  lastAttemptAt: Date | null
}

type NodeMeta = Pick<SkillNode, 'id' | 'title' | 'realm'>

export function pickStrugglingTopics(
  progressRows: readonly NodeProgress[],
  allNodes: readonly NodeMeta[],
  max: number = STRUGGLING_TOPICS_DEFAULT_LIMIT
): StrugglingTopic[] {
  if (max <= 0) return []
  const nodeById = new Map(allNodes.map(n => [n.id, n]))
  const candidates: StrugglingTopic[] = []
  for (const row of progressRows) {
    if (row.totalAttempts < 1) continue
    const meta = nodeById.get(row.nodeId)
    if (!meta) continue
    candidates.push({
      nodeId: row.nodeId,
      title: meta.title,
      realm: meta.realm,
      accuracy: row.totalCorrect / row.totalAttempts,
      totalAttempts: row.totalAttempts,
      totalCorrect: row.totalCorrect,
      lastAttemptAt: row.lastAttemptAt,
    })
  }
  candidates.sort(compare)
  return candidates.slice(0, max)
}

function compare(a: StrugglingTopic, b: StrugglingTopic): number {
  if (a.accuracy !== b.accuracy) return a.accuracy - b.accuracy
  const at = a.lastAttemptAt?.getTime() ?? 0
  const bt = b.lastAttemptAt?.getTime() ?? 0
  if (at !== bt) return at - bt
  return a.nodeId < b.nodeId ? -1 : a.nodeId > b.nodeId ? 1 : 0
}
