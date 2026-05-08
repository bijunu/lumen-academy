import { NextResponse } from 'next/server'

import { auth } from '@/lib/auth/authOptions'
import { logger } from '@/lib/logger'
import {
  deriveRanks,
  freshScholarProfile,
} from '@/lib/scholar/applyScholarUpdate'
import { getScholarRepository } from '@/lib/scholar/scholarRepository'

export const runtime = 'nodejs'

export async function GET() {
  const session = await auth()
  if (!session?.user) {
    return NextResponse.json({ error: 'unauthorised' }, { status: 401 })
  }

  try {
    const stored = await getScholarRepository().getProfile(session.user.id)
    const profile = stored ?? freshScholarProfile(session.user.id)
    const ranks = deriveRanks(profile)
    return NextResponse.json({ profile, ranks })
  } catch (err) {
    logger.error('scholar.profile.failed', { err })
    return NextResponse.json({ error: 'persistence-failed' }, { status: 500 })
  }
}
