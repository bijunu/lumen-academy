import type { FreeTextQuestion } from '@/types/content'
import { logger } from '@/lib/logger'

import {
  type FreetextJudgmentRepository,
  getFreetextJudgmentRepository,
  hashAnswer,
} from './freetextJudgmentRepository'
import { judgeFreeText as defaultJudge, type JudgeResult } from './judgeFreeText'
import {
  type JudgeRateLimiter,
  getJudgeRateLimiter,
} from './judgeRateLimit'

export type ScoreSource =
  | 'fast-empty'
  | 'fast-keywords'
  | 'cache'
  | 'judge'
  | 'rate-limited'
  | 'no-key'
  | 'judge-failed'

export interface ScoreFreeTextResult {
  correct: boolean
  reason: string
  source: ScoreSource
}

export interface ScoreFreeTextArgs {
  question: FreeTextQuestion
  answer: string
  userId: string
}

export interface ScoreFreeTextDeps {
  repository?: FreetextJudgmentRepository
  rateLimiter?: JudgeRateLimiter
  judge?: (
    question: FreeTextQuestion,
    answer: string
  ) => Promise<JudgeResult | null>
  apiKey?: string | undefined
  now?: () => Date
}

const MIN_ANSWER_CHARS = 10
const KEYWORD_AUTOPASS_MIN_CHARS = 100

function hasAllKeywords(answer: string, keywords: string[]): boolean {
  const lower = answer.toLowerCase()
  return keywords.every(k => lower.includes(k.toLowerCase()))
}

export async function scoreFreeTextWithJudge(
  args: ScoreFreeTextArgs,
  deps: ScoreFreeTextDeps = {}
): Promise<ScoreFreeTextResult> {
  const { question, answer, userId } = args
  const repository = deps.repository ?? getFreetextJudgmentRepository()
  const rateLimiter = deps.rateLimiter ?? getJudgeRateLimiter()
  const judge = deps.judge ?? defaultJudge
  const apiKey =
    deps.apiKey !== undefined ? deps.apiKey : process.env.ANTHROPIC_API_KEY
  const now = deps.now ?? (() => new Date())

  const trimmed = answer.trim()

  if (trimmed.length < MIN_ANSWER_CHARS) {
    return {
      correct: false,
      reason:
        'Your answer is very short. Try writing a sentence or two that explains your thinking.',
      source: 'fast-empty',
    }
  }

  const hasKeywords = hasAllKeywords(trimmed, question.keywords)
  if (hasKeywords && trimmed.length >= KEYWORD_AUTOPASS_MIN_CHARS) {
    return {
      correct: true,
      reason: 'You captured the key ideas in a full answer. Well done.',
      source: 'fast-keywords',
    }
  }

  try {
    const cached = await repository.get(question.id, trimmed)
    if (cached) {
      return {
        correct: cached.correct,
        reason: cached.reason,
        source: 'cache',
      }
    }
  } catch (err) {
    logger.warn('scoreFreeTextWithJudge: cache lookup failed', {
      error: err instanceof Error ? err.message : String(err),
    })
  }

  if (!apiKey) {
    return {
      correct: hasKeywords,
      reason: hasKeywords
        ? 'You used the key terms in your answer.'
        : 'Your answer is missing one or more of the key ideas the question asks for.',
      source: 'no-key',
    }
  }

  if (!rateLimiter.check(userId, now())) {
    return {
      correct: hasKeywords,
      reason: hasKeywords
        ? 'You used the key terms. (Detailed feedback paused for an hour.)'
        : 'Your answer is missing some key ideas. (Detailed feedback paused for an hour.)',
      source: 'rate-limited',
    }
  }

  const judgment = await judge(question, trimmed)
  if (!judgment) {
    return {
      correct: hasKeywords,
      reason: hasKeywords
        ? 'You used the key terms in your answer.'
        : 'Your answer is missing one or more of the key ideas the question asks for.',
      source: 'judge-failed',
    }
  }

  try {
    await repository.save({
      questionId: question.id,
      answerHash: hashAnswer(trimmed),
      correct: judgment.correct,
      reason: judgment.reason,
      judgedAt: now(),
    })
  } catch (err) {
    logger.warn('scoreFreeTextWithJudge: cache save failed', {
      error: err instanceof Error ? err.message : String(err),
    })
  }

  return {
    correct: judgment.correct,
    reason: judgment.reason,
    source: 'judge',
  }
}
