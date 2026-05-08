import type { SkillNode } from '@/types/content'

export interface DailyChallengeCandidate {
  nodeId: string
  questionId: string
}

export function flattenCandidates(
  nodes: readonly SkillNode[]
): DailyChallengeCandidate[] {
  const out: DailyChallengeCandidate[] = []
  for (const node of nodes) {
    for (const q of node.questions) {
      out.push({ nodeId: node.id, questionId: q.id })
    }
  }
  return out
}

function fnv1a(input: string): number {
  let hash = 0x811c9dc5
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i)
    hash = Math.imul(hash, 0x01000193)
  }
  return hash >>> 0
}

export function pickQuestion(
  seedKey: string,
  candidates: readonly DailyChallengeCandidate[]
): DailyChallengeCandidate | null {
  if (candidates.length === 0) return null
  const sorted = [...candidates].sort((a, b) =>
    a.nodeId === b.nodeId
      ? a.questionId.localeCompare(b.questionId)
      : a.nodeId.localeCompare(b.nodeId)
  )
  const idx = fnv1a(seedKey) % sorted.length
  return sorted[idx]
}
