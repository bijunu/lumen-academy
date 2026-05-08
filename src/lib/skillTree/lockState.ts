import type { SkillNode } from '@/types/content'
import type { NodeProgress } from '@/types/progress'

export type LockState = 'locked' | 'unlocked' | 'completed'

export function computeLockState(
  nodes: SkillNode[],
  progressByNodeId: Map<string, NodeProgress>
): Map<string, LockState> {
  const result = new Map<string, LockState>()
  const byId = new Map(nodes.map(n => [n.id, n]))

  for (const node of nodes) {
    const own = progressByNodeId.get(node.id)
    if ((own?.sm2.repetition ?? 0) >= 1) {
      result.set(node.id, 'completed')
      continue
    }

    let allPrereqsClear = true
    for (const prereqId of node.prerequisites) {
      if (!byId.has(prereqId)) continue
      const prereqProgress = progressByNodeId.get(prereqId)
      if ((prereqProgress?.totalCorrect ?? 0) < 1) {
        allPrereqsClear = false
        break
      }
    }

    result.set(node.id, allPrereqsClear ? 'unlocked' : 'locked')
  }

  return result
}
