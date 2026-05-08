import type { HintLevel } from '@/types/tutor'
import type { Sm2Quality } from './sm2'

export interface QualityInput {
  correct: boolean
  attemptCount: number
  hintLevel?: HintLevel
}

export function qualityFromAttempt({
  correct,
  attemptCount,
  hintLevel,
}: QualityInput): Sm2Quality {
  if (!correct) {
    if (attemptCount <= 1) return 2
    if (attemptCount === 2) return 1
    return 0
  }

  const base: Sm2Quality =
    hintLevel === undefined ? 5 : hintLevel === 'nudge' ? 4 : 3
  const penalty = Math.max(0, attemptCount - 1)
  const reduced = base - penalty
  return reduced < 3 ? 3 : (reduced as Sm2Quality)
}
