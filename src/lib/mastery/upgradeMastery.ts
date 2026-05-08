import type { MasteryLevel, NodeProgress } from '@/types/progress'

const MASTERY_ORDER: readonly MasteryLevel[] = [
  'none',
  'bronze',
  'silver',
  'gold',
  'platinum',
] as const

export function masteryFromProgress(progress: NodeProgress): MasteryLevel {
  const { totalCorrect, sm2 } = progress

  if (sm2.repetition >= 6 && sm2.interval >= 30) return 'platinum'
  if (sm2.repetition >= 4 && sm2.easeFactor >= 2.5) return 'gold'
  if (sm2.repetition >= 2) return 'silver'
  if (totalCorrect >= 1) return 'bronze'
  return 'none'
}

export function upgradeMastery(progress: NodeProgress): MasteryLevel {
  const candidate = masteryFromProgress(progress)
  return higher(progress.mastery, candidate)
}

function higher(a: MasteryLevel, b: MasteryLevel): MasteryLevel {
  return MASTERY_ORDER.indexOf(a) >= MASTERY_ORDER.indexOf(b) ? a : b
}

export function masteryStarCount(level: MasteryLevel): number {
  return MASTERY_ORDER.indexOf(level)
}
