import type { RealmId } from '@/lib/constants/realms'

export interface ScholarProfile {
  userId: string
  displayName: string
  avatarConfig: Record<string, string>
  companionLevel: number
  overallRank: number
  realmRanks: Record<RealmId, number>
  currencies: Currency
  badges: Badge[]
  streakDays: number
  lastActiveDate: string
  autoFreezeAvailable: boolean
}

export interface Currency {
  insight: number
  spark: number
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

export interface XPEvent {
  nodeId: string
  questionId: string
  xp: number
  reason: 'correct' | 'first-try' | 'streak-bonus' | 'challenge-tier' | 'boss-defeat'
  timestamp: Date
}
