import { NextResponse } from 'next/server'

import { auth } from '@/lib/auth/authOptions'
import { logger } from '@/lib/logger'
import { getProgressRepository } from '@/lib/progress/progressRepository'

export const runtime = 'nodejs'

export async function GET() {
  const session = await auth()
  if (!session?.user) {
    return NextResponse.json({ error: 'unauthorised' }, { status: 401 })
  }

  try {
    const due = await getProgressRepository().listDueReviews(session.user.id)
    return NextResponse.json({ due })
  } catch (err) {
    logger.error('progress.due.failed', { err })
    return NextResponse.json({ error: 'persistence-failed' }, { status: 500 })
  }
}
