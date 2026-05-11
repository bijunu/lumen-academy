import type { FreeTextQuestion } from '@/types/content'
import { logger } from '@/lib/logger'

export interface JudgeResult {
  correct: boolean
  reason: string
}

const MODEL = 'claude-haiku-4-5-20251001'
const MAX_TOKENS = 120
const TIMEOUT_MS = 8000

const SYSTEM_PROMPT = `You are a marking assistant for UK KS3 maths and science (Year 7, age 11-12).

Your job: given a question, a sample answer, and a student's answer, decide whether the student's answer demonstrates the same core understanding as the sample answer.

Marking principles:
- Be lenient about wording, spelling, punctuation, and phrasing
- Focus on whether the student grasped the key concept
- Different phrasings of the same idea count as equivalent
- UK English. Avoid em dashes
- Address the reason to the student in a friendly, encouraging tone
- One short sentence, no more than 25 words

Output a single JSON object on a single line with exactly these keys, no other text before or after:
{"correct": true|false, "reason": "<one short sentence>"}`

export async function judgeFreeText(
  question: FreeTextQuestion,
  answer: string
): Promise<JudgeResult | null> {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    logger.warn('judgeFreeText: ANTHROPIC_API_KEY not set, skipping LLM judge')
    return null
  }

  try {
    const { default: Anthropic } = await import('@anthropic-ai/sdk')
    const client = new Anthropic({ apiKey, timeout: TIMEOUT_MS })

    const rubric = [
      `Question: ${question.stem}`,
      `Sample answer: ${question.sampleAnswer}`,
      `Key ideas the answer should cover: ${question.keywords.join(', ')}`,
    ].join('\n')

    const response = await client.messages.create({
      model: MODEL,
      max_tokens: MAX_TOKENS,
      system: [
        {
          type: 'text',
          text: SYSTEM_PROMPT,
          cache_control: { type: 'ephemeral' },
        },
        {
          type: 'text',
          text: rubric,
          cache_control: { type: 'ephemeral' },
        },
      ],
      messages: [
        {
          role: 'user',
          content: `Student's answer: ${answer}\n\nReply only with the JSON object.`,
        },
      ],
    })

    const text =
      response.content[0]?.type === 'text' ? response.content[0].text : ''
    return parseJudgeResponse(text)
  } catch (err) {
    logger.warn('judgeFreeText: SDK call failed', {
      error: err instanceof Error ? err.message : String(err),
    })
    return null
  }
}

function parseJudgeResponse(text: string): JudgeResult | null {
  const trimmed = text.trim()
  const start = trimmed.indexOf('{')
  const end = trimmed.lastIndexOf('}')
  if (start < 0 || end < 0 || end < start) return null
  const json = trimmed.slice(start, end + 1)

  try {
    const parsed = JSON.parse(json) as Record<string, unknown>
    if (typeof parsed.correct !== 'boolean') return null
    if (typeof parsed.reason !== 'string') return null
    return {
      correct: parsed.correct,
      reason: parsed.reason.slice(0, 280),
    }
  } catch {
    return null
  }
}
