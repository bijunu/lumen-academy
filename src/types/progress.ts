export type MasteryLevel = 'none' | 'bronze' | 'silver' | 'gold' | 'platinum'

export interface NodeProgress {
  nodeId: string
  userId: string
  mastery: MasteryLevel
  correctStreak: number
  totalAttempts: number
  totalCorrect: number
  lastAttemptAt: Date | null
  nextReviewAt: Date | null
  sm2: SpacedRepetitionCard
}

export interface SpacedRepetitionCard {
  interval: number
  repetition: number
  easeFactor: number
}

export interface SessionRecord {
  id: string
  userId: string
  startedAt: Date
  endedAt: Date | null
  nodeIds: string[]
  questionsAttempted: number
  questionsCorrect: number
  xpEarned: number
  masteryChanges: { nodeId: string; from: MasteryLevel; to: MasteryLevel }[]
}
