import { NextResponse } from 'next/server'

import { auth } from '@/lib/auth/authOptions'
import { logger } from '@/lib/logger'
import { getProgressRepository } from '@/lib/progress/progressRepository'
import { attemptWriteSchema } from '@/lib/progress/schemas'
import type { Attempt } from '@/types/progress'

export const runtime = 'nodejs'

export async function POST(request: Request) {
  const session = await auth()
  if (!session?.user) {
    return NextResponse.json({ error: 'unauthorised' }, { status: 401 })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'invalid-json' }, { status: 400 })
  }

  const parsed = attemptWriteSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'invalid-body', details: parsed.error.flatten() },
      { status: 400 }
    )
  }

  const attempt: Attempt = {
    ...parsed.data,
    userId: session.user.id,
    answeredAt: new Date(),
  }

  try {
    const progress = await getProgressRepository().upsertAttempt(attempt)
    return NextResponse.json(progress)
  } catch (err) {
    logger.error('progress.attempt.failed', { err })
    return NextResponse.json({ error: 'persistence-failed' }, { status: 500 })
  }
}
