export type DailyChallengeStatus = 'pending' | 'correct' | 'incorrect'

export interface DailyChallengeRecord {
  userId: string
  utcDay: string
  nodeId: string
  questionId: string
  status: DailyChallengeStatus
  createdAt: Date
  attemptedAt: Date | null
  xpAwarded: number
}

export const DAILY_CHALLENGE_XP = 25
