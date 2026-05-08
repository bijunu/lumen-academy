import { NextResponse } from 'next/server'

import { auth } from '@/lib/auth/authOptions'
import { logger } from '@/lib/logger'
import { getProgressRepository } from '@/lib/progress/progressRepository'
import { TREND_DEFAULT_DAYS, computeTrend } from '@/lib/progress/trend'

export const runtime = 'nodejs'

export async function GET(request: Request) {
  const session = await auth()
  if (!session?.user) {
    return NextResponse.json({ error: 'unauthorised' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const nodeId = searchParams.get('nodeId')?.trim()
  if (!nodeId) {
    return NextResponse.json(
      { error: 'invalid-query', details: { nodeId: 'required' } },
      { status: 400 }
    )
  }

  try {
    const now = new Date()
    const attempts = await getProgressRepository().listAttemptsForNode(
      session.user.id,
      nodeId,
      TREND_DEFAULT_DAYS,
      now
    )
    const points = computeTrend(attempts, TREND_DEFAULT_DAYS, now)
    return NextResponse.json({ points })
  } catch (err) {
    logger.error('progress.trend.failed', { err })
    return NextResponse.json({ error: 'persistence-failed' }, { status: 500 })
  }
}
