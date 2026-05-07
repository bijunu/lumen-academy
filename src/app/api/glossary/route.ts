import { NextResponse } from 'next/server'
import { logger } from '@/lib/logger'

export async function POST(request: Request) {
  try {
    const { term } = (await request.json()) as { term: string }

    if (!term || term.length > 100) {
      return NextResponse.json({ error: 'Invalid term' }, { status: 400 })
    }

    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) {
      return NextResponse.json({
        term,
        definition: `${term}: a mathematical concept used in Year 7 maths.`,
        example: `We use ${term} when working with numbers.`,
        relatedTerms: [],
      })
    }

    const { default: Anthropic } = await import('@anthropic-ai/sdk')
    const client = new Anthropic({ apiKey })

    const response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 256,
      system:
        'You are a glossary assistant for UK Year 7 students (age 11-12). Define maths and science terms in UK English at a reading age of 12. Return JSON with: definition (1-2 sentences), example (one sentence using the term), relatedTerms (array of 2-3 related terms). Use metric units and UK examples.',
      messages: [{ role: 'user', content: `Define: ${term}` }],
    })

    const text = response.content[0].type === 'text' ? response.content[0].text : '{}'

    try {
      const parsed = JSON.parse(text)
      return NextResponse.json({ term, ...parsed })
    } catch {
      return NextResponse.json({
        term,
        definition: text,
        example: '',
        relatedTerms: [],
      })
    }
  } catch (error) {
    logger.error('Glossary API error:', error)
    return NextResponse.json({ error: 'Failed to get definition' }, { status: 500 })
  }
}
