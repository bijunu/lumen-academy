import { NextResponse } from 'next/server'
import { z } from 'zod'

import { auth } from '@/lib/auth/authOptions'
import { scoreFreeTextWithJudge } from '@/lib/ai/scoreFreeTextWithJudge'
import { getContentRepository } from '@/lib/content'
import { logger } from '@/lib/logger'

export const runtime = 'nodejs'

const bodySchema = z.object({
  nodeId: z.string().min(1),
  questionId: z.string().min(1),
  answer: z.string().min(1),
})

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

  const parsed = bodySchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'invalid-body', details: parsed.error.flatten() },
      { status: 400 }
    )
  }

  const { nodeId, questionId, answer } = parsed.data

  const node = await getContentRepository().getNode(nodeId)
  if (!node) {
    return NextResponse.json({ error: 'invalid-node' }, { status: 400 })
  }
  const question = node.questions.find(q => q.id === questionId)
  if (!question || question.type !== 'free-text') {
    return NextResponse.json(
      { error: 'invalid-question' },
      { status: 400 }
    )
  }

  try {
    const result = await scoreFreeTextWithJudge({
      question,
      answer,
      userId: session.user.id,
    })
    logger.info('judge.freetext', {
      userId: session.user.id,
      questionId,
      source: result.source,
      correct: result.correct,
    })
    return NextResponse.json({
      correct: result.correct,
      reason: result.reason,
    })
  } catch (err) {
    logger.error('judge.freetext.failed', { err })
    return NextResponse.json({ error: 'judge-failed' }, { status: 500 })
  }
}
