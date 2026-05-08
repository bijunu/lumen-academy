import type { SkillNode } from '@/types/content'
import {
  BOSS_QUESTION_COUNT,
  MAX_QUESTIONS_PER_NODE,
  type BossQuestionSlot,
} from '@/types/boss'

interface PickArgs {
  zoneNodes: readonly SkillNode[]
  seedKey: string
  count?: number
  maxPerNode?: number
}

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

export function pickBossQuestions({
  zoneNodes,
  seedKey,
  count = BOSS_QUESTION_COUNT,
  maxPerNode = MAX_QUESTIONS_PER_NODE,
}: PickArgs): BossQuestionSlot[] {
  if (count <= 0) return []

  const candidates: BossQuestionSlot[] = []
  for (const node of [...zoneNodes].sort((a, b) => a.id.localeCompare(b.id))) {
    const sortedQuestions = [...node.questions].sort((a, b) =>
      a.id.localeCompare(b.id)
    )
    for (const q of sortedQuestions) {
      candidates.push({ nodeId: node.id, questionId: q.id })
    }
  }

  if (candidates.length === 0) return []

  const shuffled = shuffleDeterministic(candidates, seedKey)
  const perNode = new Map<string, number>()
  const picks: BossQuestionSlot[] = []

  for (const slot of shuffled) {
    if (picks.length >= count) break
    const taken = perNode.get(slot.nodeId) ?? 0
    if (taken >= maxPerNode) continue
    picks.push(slot)
    perNode.set(slot.nodeId, taken + 1)
  }

  if (picks.length < count) {
    for (const slot of shuffled) {
      if (picks.length >= count) break
      if (picks.includes(slot)) continue
      picks.push(slot)
    }
  }

  return picks
}
