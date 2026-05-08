import type { RealmId } from '@/lib/constants/realms'

export interface Currency {
  insight: number
  spark: number
}

export interface ScholarProfile {
  userId: string
  xpTotal: number
  xpByRealm: Record<RealmId, number>
  currencies: Currency
  updatedAt: Date | null
}

export interface ScholarUpdate {
  realm: RealmId
  xpDelta: number
  insightDelta: number
  sparkDelta: number
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

export interface Badge {
  id: BadgeId
  name: string
  description: string
  earnedAt: Date | null
}
