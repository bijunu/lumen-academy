import type { RealmId } from '@/lib/constants/realms'

export interface Currency {
  insight: number
  spark: number
}

export interface ScholarCounters {
  challengeCorrect: number
  misconceptionCorrect: number
  platinumCount: number
  bouncedBackCount: number
  bossDefeats: number
}

export interface ScholarProfile {
  userId: string
  xpTotal: number
  xpByRealm: Record<RealmId, number>
  currencies: Currency
  counters: ScholarCounters
  questCompletionDates: string[]
  defeatedZoneIds: string[]
  badges: Partial<Record<BadgeId, Date>>
  updatedAt: Date | null
}

export interface ScholarUpdate {
  realm: RealmId
  xpDelta: number
  insightDelta: number
  sparkDelta: number
  counterDeltas?: Partial<ScholarCounters>
  questCompletedOn?: string
  bossZoneDefeated?: string
  occurredAt: Date
}

export interface ScholarRanks {
  overall: number
  byRealm: Record<RealmId, number>
}

export type BadgeId =
  | 'first-light'
  | 'curious-mind'
  | 'bounce-back'
  | 'polymath'
  | 'deep-diver'
  | 'boss-tamer'
  | 'realm-walker'
  | 'stretch-scholar'
  | 'steady-hand'
  | 'quest-keeper'
  | 'misconception-hunter'
  | 'lumen-scholar'

export interface BadgeMeta {
  id: BadgeId
  name: string
  description: string
  earnable: boolean
}
