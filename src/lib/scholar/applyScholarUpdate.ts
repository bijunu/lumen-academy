import type { RealmId } from '@/lib/constants/realms'
import type {
  ScholarCounters,
  ScholarProfile,
  ScholarRanks,
  ScholarUpdate,
} from '@/types/gamification'

const XP_PER_RANK = 100

export function freshScholarCounters(): ScholarCounters {
  return {
    challengeCorrect: 0,
    misconceptionCorrect: 0,
    platinumCount: 0,
    bouncedBackCount: 0,
  }
}

export function freshScholarProfile(userId: string): ScholarProfile {
  return {
    userId,
    xpTotal: 0,
    xpByRealm: {
      numerica: 0,
      vitalia: 0,
      elementia: 0,
      mechanica: 0,
    },
    currencies: { insight: 0, spark: 0 },
    counters: freshScholarCounters(),
    badges: {},
    updatedAt: null,
  }
}

export function applyScholarUpdate(
  profile: ScholarProfile,
  update: ScholarUpdate
): ScholarProfile {
  const counters = applyCounterDeltas(profile.counters, update.counterDeltas)
  return {
    ...profile,
    xpTotal: profile.xpTotal + update.xpDelta,
    xpByRealm: {
      ...profile.xpByRealm,
      [update.realm]:
        (profile.xpByRealm[update.realm] ?? 0) + update.xpDelta,
    },
    currencies: {
      insight: profile.currencies.insight + update.insightDelta,
      spark: profile.currencies.spark + update.sparkDelta,
    },
    counters,
    updatedAt: update.occurredAt,
  }
}

function applyCounterDeltas(
  base: ScholarCounters,
  deltas?: Partial<ScholarCounters>
): ScholarCounters {
  if (!deltas) return base
  return {
    challengeCorrect: base.challengeCorrect + (deltas.challengeCorrect ?? 0),
    misconceptionCorrect:
      base.misconceptionCorrect + (deltas.misconceptionCorrect ?? 0),
    platinumCount: base.platinumCount + (deltas.platinumCount ?? 0),
    bouncedBackCount: base.bouncedBackCount + (deltas.bouncedBackCount ?? 0),
  }
}

export function deriveRanks(profile: ScholarProfile): ScholarRanks {
  const byRealm = (Object.keys(profile.xpByRealm) as RealmId[]).reduce(
    (acc, realm) => {
      acc[realm] = Math.floor(profile.xpByRealm[realm] / XP_PER_RANK)
      return acc
    },
    {} as Record<RealmId, number>
  )
  const overall = Math.floor(profile.xpTotal / XP_PER_RANK)
  return { overall, byRealm }
}
