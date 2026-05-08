import type { SkillNode } from '@/types/content'
import type { NodeProgress } from '@/types/progress'

export function isBossEligible(
  zoneNodes: readonly SkillNode[],
  progressByNodeId: ReadonlyMap<string, NodeProgress>
): boolean {
  if (zoneNodes.length === 0) return false
  for (const node of zoneNodes) {
    const progress = progressByNodeId.get(node.id)
    if (!progress || progress.totalCorrect < 1) return false
  }
  return true
}
