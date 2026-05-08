import type { RealmId } from '@/lib/constants/realms'
import type { ScholarProfile, ScholarRanks, ScholarUpdate } from '@/types/gamification'

const XP_PER_RANK = 100

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
    updatedAt: null,
  }
}

export function applyScholarUpdate(
  profile: ScholarProfile,
  update: ScholarUpdate
): ScholarProfile {
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
    updatedAt: update.occurredAt,
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
