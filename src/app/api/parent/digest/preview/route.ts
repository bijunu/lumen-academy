import { NextResponse } from 'next/server'

import { auth } from '@/lib/auth/authOptions'
import { logger } from '@/lib/logger'
import { renderDigestHtml } from '@/lib/parent/digest'
import {
  loadWeeklyDigest,
  parseWeekEndingParam,
} from '@/lib/parent/digestService'

export const runtime = 'nodejs'

export async function GET(request: Request) {
  const session = await auth()
  if (!session?.user) {
    return NextResponse.json({ error: 'unauthorised' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const requested = parseWeekEndingParam(searchParams.get('weekEnding'))
  const weekEnding = requested ?? new Date()

  try {
    const digest = await loadWeeklyDigest({
      userId: session.user.id,
      weekEnding,
      learnerLabel: session.user.name ?? session.user.email ?? undefined,
    })
    const html = renderDigestHtml(digest)
    return new Response(html, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-store',
      },
    })
  } catch (err) {
    logger.error('parent.digest.preview.failed', { err })
    return NextResponse.json({ error: 'persistence-failed' }, { status: 500 })
  }
}
