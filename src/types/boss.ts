export type BossAttemptStatus = 'pending' | 'defeated' | 'failed'

export interface BossQuestionSlot {
  nodeId: string
  questionId: string
}

export interface BossAttemptRecord {
  userId: string
  zoneId: string
  utcDay: string
  questions: BossQuestionSlot[]
  status: BossAttemptStatus
  score: number
  createdAt: Date
  attemptedAt: Date | null
  xpAwarded: number
}

export interface BossDefeatRecord {
  userId: string
  zoneId: string
  realmId: string
  firstDefeatedAt: Date
  defeatCount: number
  lastDefeatedAt: Date
}

export const BOSS_QUESTION_COUNT = 5
export const BOSS_PASS_THRESHOLD = 4
export const MAX_QUESTIONS_PER_NODE = 2
export const BOSS_FIRST_DEFEAT_XP = 100
export const BOSS_REPEAT_DEFEAT_XP = 25
export const BOSS_FIRST_DEFEAT_SPARK = 2
