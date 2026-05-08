import type { RealmId } from '@/lib/constants/realms'
import type { SkillNode } from '@/types/content'
import type { NodeProgress } from '@/types/progress'

export const WEAK_SPOTS_DEFAULT_LIMIT = 3

export interface WeakSpot {
  nodeId: string
  title: string
  realm: RealmId
  accuracy: number
  totalAttempts: number
  lastAttemptAt: Date | null
}

type NodeMeta = Pick<SkillNode, 'id' | 'title' | 'realm'>

export function pickWeakSpots(
  progressRows: readonly NodeProgress[],
  allNodes: readonly NodeMeta[],
  now: Date,
  max: number = WEAK_SPOTS_DEFAULT_LIMIT
): WeakSpot[] {
  if (max <= 0) return []
  const nodeById = new Map(allNodes.map(n => [n.id, n]))
  const candidates: WeakSpot[] = []
  for (const row of progressRows) {
    if (row.totalAttempts < 1) continue
    if (!row.nextReviewAt) continue
    if (row.nextReviewAt.getTime() > now.getTime()) continue
    const meta = nodeById.get(row.nodeId)
    if (!meta) continue
    candidates.push({
      nodeId: row.nodeId,
      title: meta.title,
      realm: meta.realm,
      accuracy: row.totalCorrect / row.totalAttempts,
      totalAttempts: row.totalAttempts,
      lastAttemptAt: row.lastAttemptAt,
    })
  }
  candidates.sort(compareWeakSpots)
  return candidates.slice(0, max)
}

function compareWeakSpots(a: WeakSpot, b: WeakSpot): number {
  if (a.accuracy !== b.accuracy) return a.accuracy - b.accuracy
  const at = a.lastAttemptAt?.getTime() ?? 0
  const bt = b.lastAttemptAt?.getTime() ?? 0
  if (at !== bt) return at - bt
  return a.nodeId < b.nodeId ? -1 : a.nodeId > b.nodeId ? 1 : 0
}
