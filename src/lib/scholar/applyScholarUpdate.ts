import type { RealmId } from '@/lib/constants/realms'
import type {
  ScholarCounters,
  ScholarProfile,
  ScholarRanks,
  ScholarUpdate,
} from '@/types/gamification'

const XP_PER_RANK = 100
const MAX_QUEST_COMPLETION_DATES = 28

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
    questCompletionDates: [],
    badges: {},
    updatedAt: null,
  }
}

export function applyScholarUpdate(
  profile: ScholarProfile,
  update: ScholarUpdate
): ScholarProfile {
  const counters = applyCounterDeltas(profile.counters, update.counterDeltas)
  const questCompletionDates = mergeQuestCompletionDates(
    profile.questCompletionDates ?? [],
    update.questCompletedOn
  )
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
    questCompletionDates,
    updatedAt: update.occurredAt,
  }
}

function mergeQuestCompletionDates(
  current: readonly string[],
  next?: string
): string[] {
  if (!next) return [...current]
  const merged = new Set(current)
  merged.add(next)
  return Array.from(merged)
    .sort((a, b) => (a < b ? 1 : a > b ? -1 : 0))
    .slice(0, MAX_QUEST_COMPLETION_DATES)
}

export function countQuestCompletionsInWindow(
  dates: readonly string[],
  now: Date,
  windowDays: number
): number {
  const ms = windowDays * 24 * 60 * 60 * 1000
  const cutoff = new Date(now.getTime() - ms)
  let count = 0
  for (const d of dates) {
    const parsed = parseUtcDay(d)
    if (parsed && parsed.getTime() > cutoff.getTime()) count++
  }
  return count
}

function parseUtcDay(key: string): Date | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(key)
  if (!m) return null
  const [, y, mo, d] = m
  const date = new Date(
    Date.UTC(Number(y), Number(mo) - 1, Number(d))
  )
  if (Number.isNaN(date.getTime())) return null
  return date
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
