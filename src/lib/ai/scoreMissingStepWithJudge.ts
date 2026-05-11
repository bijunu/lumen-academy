import type { MissingStepQuestion } from '@/types/content'
import { logger } from '@/lib/logger'

import {
  type FreetextJudgmentRepository,
  getFreetextJudgmentRepository,
  hashAnswer,
} from './freetextJudgmentRepository'
import { judgeMissingStep as defaultJudge } from './judgeMissingStep'
import type { JudgeResult } from './judgeFreeText'
import {
  type JudgeRateLimiter,
  getJudgeRateLimiter,
} from './judgeRateLimit'
import type { ScoreSource } from './scoreFreeTextWithJudge'

export interface ScoreMissingStepResult {
  correct: boolean
  reason: string
  source: ScoreSource
}

export interface ScoreMissingStepArgs {
  question: MissingStepQuestion
  answer: string
  userId: string
}

export interface ScoreMissingStepDeps {
  repository?: FreetextJudgmentRepository
  rateLimiter?: JudgeRateLimiter
  judge?: (
    question: MissingStepQuestion,
    answer: string
  ) => Promise<JudgeResult | null>
  apiKey?: string | undefined
  now?: () => Date
}

const MIN_ANSWER_CHARS = 3

function normalise(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, ' ')
}

function exactMatch(answer: string, correctStep: string): boolean {
  return normalise(answer) === normalise(correctStep)
}

export async function scoreMissingStepWithJudge(
  args: ScoreMissingStepArgs,
  deps: ScoreMissingStepDeps = {}
): Promise<ScoreMissingStepResult> {
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
        'Your step is very short. Try writing the missing step as a sentence.',
      source: 'fast-empty',
    }
  }

  if (exactMatch(trimmed, question.correctStep)) {
    return {
      correct: true,
      reason: 'You wrote the step in the same words as the model solution.',
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
    logger.warn('scoreMissingStepWithJudge: cache lookup failed', {
      error: err instanceof Error ? err.message : String(err),
    })
  }

  if (!apiKey) {
    return {
      correct: false,
      reason:
        'Your step does not match the model solution exactly. Detailed marking is unavailable right now.',
      source: 'no-key',
    }
  }

  if (!rateLimiter.check(userId, now())) {
    return {
      correct: false,
      reason:
        'Detailed marking is paused for an hour. Your step does not match the model solution exactly.',
      source: 'rate-limited',
    }
  }

  const judgment = await judge(question, trimmed)
  if (!judgment) {
    return {
      correct: false,
      reason:
        'Your step does not match the model solution exactly. Detailed marking failed.',
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
    logger.warn('scoreMissingStepWithJudge: cache save failed', {
      error: err instanceof Error ? err.message : String(err),
    })
  }

  return {
    correct: judgment.correct,
    reason: judgment.reason,
    source: 'judge',
  }
}
