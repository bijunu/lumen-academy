import { getContentRepository } from '@/lib/content'
import { computeRealmProgress } from '@/lib/progress/homeSummary'
import { getProgressRepository } from '@/lib/progress/progressRepository'

import { composeDigest, type WeeklyDigest } from './digest'
import { suggestConversationPrompts } from './conversationPrompts'
import { pickStrugglingTopics } from './strugglingTopics'
import {
  WEEKLY_TIME_DAYS,
  computeWeeklyTime,
  startOfUtcDay,
} from './weeklyTime'

interface LoadDigestInput {
  userId: string
  weekEnding: Date
  learnerLabel?: string
}

export async function loadWeeklyDigest(
  input: LoadDigestInput
): Promise<WeeklyDigest> {
  const weekEndDay = startOfUtcDay(input.weekEnding)
  const weekStart = new Date(
    weekEndDay.getTime() - (WEEKLY_TIME_DAYS - 1) * 24 * 60 * 60 * 1000
  )
  const windowEnd = new Date(weekEndDay.getTime() + 24 * 60 * 60 * 1000)

  const progressRepo = getProgressRepository()
  const contentRepo = getContentRepository()

  const [sessions, progressRows, allNodes] = await Promise.all([
    progressRepo.listSessionsInWindow(input.userId, weekStart, windowEnd),
    progressRepo.listAllProgress(input.userId),
    contentRepo.getAllNodes(),
  ])

  const weeklyTime = computeWeeklyTime(sessions, weekStart)
  const realmProgress = computeRealmProgress(progressRows, allNodes)
  const struggling = pickStrugglingTopics(progressRows, allNodes, 5)
  const prompts = suggestConversationPrompts(struggling, 3)

  return composeDigest({
    weeklyTime,
    realmProgress,
    struggling,
    prompts,
    learnerLabel: input.learnerLabel,
  })
}

export function parseWeekEndingParam(value: string | null): Date | null {
  if (!value) return null
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value)
  if (!m) return null
  const [, y, mo, d] = m
  const date = new Date(Date.UTC(Number(y), Number(mo) - 1, Number(d)))
  if (Number.isNaN(date.getTime())) return null
  return date
}
