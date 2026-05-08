export type DailyQuestTaskKind = 'due-review' | 'new-node'
export type DailyQuestTaskStatus = 'pending' | 'complete'

export interface DailyQuestTask {
  nodeId: string
  kind: DailyQuestTaskKind
  status: DailyQuestTaskStatus
  completedAt: Date | null
}

export interface DailyQuestRecord {
  userId: string
  utcDay: string
  tasks: DailyQuestTask[]
  createdAt: Date
  bonusAwardedAt: Date | null
}

export const DAILY_QUEST_TASK_COUNT = 3
export const DAILY_QUEST_BONUS_XP = 30
export const DAILY_QUEST_BONUS_SPARK = 1
