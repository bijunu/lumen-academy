import { NextResponse } from 'next/server'

import { auth } from '@/lib/auth/authOptions'
import { getContentRepository } from '@/lib/content'
import { logger } from '@/lib/logger'
import { getProgressRepository } from '@/lib/progress/progressRepository'
import { WEAK_SPOTS_DEFAULT_LIMIT, pickWeakSpots } from '@/lib/progress/weakSpots'

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

    const [progressRows, allNodes] = await Promise.all([
      progressRepo.listAllProgress(userId),
      contentRepo.getAllNodes(),
    ])

    const spots = pickWeakSpots(
      progressRows,
      allNodes,
      new Date(),
      WEAK_SPOTS_DEFAULT_LIMIT
    )

    return NextResponse.json({ spots })
  } catch (err) {
    logger.error('progress.weakSpots.failed', { err })
    return NextResponse.json({ error: 'persistence-failed' }, { status: 500 })
  }
}
