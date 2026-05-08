import type { SpacedRepetitionCard } from '@/types/progress'

export type Sm2Quality = 0 | 1 | 2 | 3 | 4 | 5

export interface Sm2Result extends SpacedRepetitionCard {
  nextReviewAt: Date
}

const MIN_EASE_FACTOR = 1.3
const MS_PER_DAY = 24 * 60 * 60 * 1000

export function scheduleNext(
  card: SpacedRepetitionCard,
  quality: Sm2Quality,
  now: Date
): Sm2Result {
  const updatedEase = updateEaseFactor(card.easeFactor, quality)

  let repetition: number
  let interval: number

  if (quality < 3) {
    repetition = 0
    interval = 1
  } else {
    repetition = card.repetition + 1
    if (repetition === 1) {
      interval = 1
    } else if (repetition === 2) {
      interval = 6
    } else {
      interval = Math.round(card.interval * updatedEase)
    }
  }

  const nextReviewAt = new Date(now.getTime() + interval * MS_PER_DAY)

  return {
    interval,
    repetition,
    easeFactor: updatedEase,
    nextReviewAt,
  }
}

function updateEaseFactor(current: number, quality: Sm2Quality): number {
  const delta = 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)
  const next = current + delta
  return next < MIN_EASE_FACTOR ? MIN_EASE_FACTOR : next
}
