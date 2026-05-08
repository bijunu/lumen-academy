import { NextResponse } from 'next/server'

import { auth } from '@/lib/auth/authOptions'
import { getContentRepository } from '@/lib/content'
import { logger } from '@/lib/logger'
import {
  STREAK_WINDOW_DAYS,
  computeRealmProgress,
  computeStreakDays,
} from '@/lib/progress/homeSummary'
import { getProgressRepository } from '@/lib/progress/progressRepository'

export const runtime = 'nodejs'

export async function GET() {
  const session = await auth()
  if (!session?.user) {
    return NextResponse.json({ error: 'unauthorised' }, { status: 401 })
  }

  try {
    const userId = session.user.id
    const progressRepo = getProgressRepository()
    const contentRepo = getContentRepository()
    const now = new Date()

    const [sessionDays, progressRows, allNodes] = await Promise.all([
      progressRepo.listSessionDays(userId, STREAK_WINDOW_DAYS, now),
      progressRepo.listAllProgress(userId),
      contentRepo.getAllNodes(),
    ])

    const streakDays = computeStreakDays(sessionDays, now)
    const realmProgress = computeRealmProgress(progressRows, allNodes)

    return NextResponse.json({ streakDays, realmProgress })
  } catch (err) {
    logger.error('progress.homeSummary.failed', { err })
    return NextResponse.json({ error: 'persistence-failed' }, { status: 500 })
  }
}
