import type { Tier } from '@/types/content'

const TIER_MULTIPLIER: Record<Tier, number> = {
  core: 1,
  confident: 1.25,
  challenge: 1.5,
}

const FIRST_TRY_BONUS = 0.5

export interface XpForAttemptInput {
  baseXp: number
  tier: Tier
  firstTry: boolean
}

export function xpForAttempt({
  baseXp,
  tier,
  firstTry,
}: XpForAttemptInput): number {
  const weighted = baseXp * TIER_MULTIPLIER[tier]
  const total = firstTry ? weighted * (1 + FIRST_TRY_BONUS) : weighted
  return Math.round(total)
}
