import type { MissingStepQuestion } from '@/types/content'
import { logger } from '@/lib/logger'

import type { JudgeResult } from './judgeFreeText'

const MODEL = 'claude-haiku-4-5-20251001'
const MAX_TOKENS = 140
const TIMEOUT_MS = 8000

const SYSTEM_PROMPT = `You are a marking assistant for UK KS3 maths and science (Year 7, age 11-12).

You are given a question, a worked solution with one step missing, and the canonical step that should fill the gap. A student has filled in the missing step. Decide whether the student's step demonstrates the same reasoning as the canonical step, given the surrounding steps for context.

Marking principles:
- Be lenient about wording, spelling, punctuation, and phrasing
- Focus on whether the student's step captures the same mathematical or scientific reasoning
- The student's step must logically fit between the step before and after
- Different phrasings of the same idea count as equivalent
- UK English. Avoid em dashes
- Address the reason to the student in a friendly, encouraging tone
- One short sentence, no more than 25 words

Output a single JSON object on a single line with exactly these keys, no other text before or after:
{"correct": true|false, "reason": "<one short sentence>"}`

function buildRubric(question: MissingStepQuestion): string {
  const stepsLines: string[] = []
  for (let i = 0; i < question.steps.length; i++) {
    const step = question.steps[i]
    if (i === question.missingStepIndex) {
      stepsLines.push(`${i + 1}. [MISSING STEP — to be filled by the student]`)
    } else {
      stepsLines.push(`${i + 1}. ${step ?? ''}`)
    }
  }
  return [
    `Question: ${question.stem}`,
    'Worked solution:',
    ...stepsLines,
    '',
    `Canonical missing step: ${question.correctStep}`,
  ].join('\n')
}

export async function judgeMissingStep(
  question: MissingStepQuestion,
  answer: string
): Promise<JudgeResult | null> {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    logger.warn(
      'judgeMissingStep: ANTHROPIC_API_KEY not set, skipping LLM judge'
    )
    return null
  }

  try {
    const { default: Anthropic } = await import('@anthropic-ai/sdk')
    const client = new Anthropic({ apiKey, timeout: TIMEOUT_MS })

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
          text: buildRubric(question),
          cache_control: { type: 'ephemeral' },
        },
      ],
      messages: [
        {
          role: 'user',
          content: `Student's filled-in step: ${answer}\n\nReply only with the JSON object.`,
        },
      ],
    })

    const text =
      response.content[0]?.type === 'text' ? response.content[0].text : ''
    return parseJudgeResponse(text)
  } catch (err) {
    logger.warn('judgeMissingStep: SDK call failed', {
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
