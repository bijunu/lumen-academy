import { randomUUID } from 'node:crypto'

import { NextResponse } from 'next/server'

import { auth } from '@/lib/auth/authOptions'
import { logger } from '@/lib/logger'
import { getProgressRepository } from '@/lib/progress/progressRepository'
import { sessionRecordWriteSchema } from '@/lib/progress/schemas'
import type { SessionRecord } from '@/types/progress'

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

  const parsed = sessionRecordWriteSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'invalid-body', details: parsed.error.flatten() },
      { status: 400 }
    )
  }

  const record: SessionRecord = {
    ...parsed.data,
    id: randomUUID(),
    userId: session.user.id,
  }

  try {
    await getProgressRepository().recordSession(record)
    return NextResponse.json({ ok: true, id: record.id })
  } catch (err) {
    logger.error('progress.session.failed', { err })
    return NextResponse.json({ error: 'persistence-failed' }, { status: 500 })
  }
}
