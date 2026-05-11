import { describe, it, expect, vi, beforeEach } from 'vitest'
import type { MissingStepQuestion } from '@/types/content'

import { InMemoryJudgeRateLimiter } from './judgeRateLimit'
import { scoreMissingStepWithJudge } from './scoreMissingStepWithJudge'
import {
  type FreetextJudgmentRecord,
  type FreetextJudgmentRepository,
} from './freetextJudgmentRepository'

const question: MissingStepQuestion = {
  id: 'ms-q1',
  type: 'missing-step',
  stem: 'A pizza is cut into 8 equal slices and 5 slices have been eaten. What fraction has been eaten?',
  tier: 'confident',
  steps: [
    'The denominator counts the total number of equal parts.',
    'There are 8 equal slices in the whole pizza.',
    null,
    'So the fraction eaten is 5/8.',
  ],
  missingStepIndex: 2,
  correctStep:
    'The numerator counts the number of parts we are looking at. 5 slices have been eaten, so the numerator is 5.',
  xpValue: 20,
}

const userId = 'user-1'

function makeInMemoryRepo(): FreetextJudgmentRepository {
  const store = new Map<string, FreetextJudgmentRecord>()
  return {
    async get(questionId, answer) {
      const { hashAnswer } = await import('./freetextJudgmentRepository')
      const key = `${questionId}::${hashAnswer(answer)}`
      return store.get(key) ?? null
    },
    async save(record) {
      const key = `${record.questionId}::${record.answerHash}`
      store.set(key, record)
    },
  }
}

let repo: FreetextJudgmentRepository
let rateLimiter: InMemoryJudgeRateLimiter
let judge: ReturnType<typeof vi.fn>

beforeEach(() => {
  repo = makeInMemoryRepo()
  rateLimiter = new InMemoryJudgeRateLimiter()
  judge = vi.fn()
})

describe('scoreMissingStepWithJudge', () => {
  it('fast-fails an empty or near-empty answer without calling judge', async () => {
    const result = await scoreMissingStepWithJudge(
      { question, answer: '  ', userId },
      { repository: repo, rateLimiter, judge, apiKey: 'sk-test' }
    )
    expect(result.source).toBe('fast-empty')
    expect(result.correct).toBe(false)
    expect(judge).not.toHaveBeenCalled()
  })

  it('fast-passes when the answer matches the canonical step exactly', async () => {
    const result = await scoreMissingStepWithJudge(
      { question, answer: question.correctStep, userId },
      { repository: repo, rateLimiter, judge, apiKey: 'sk-test' }
    )
    expect(result.source).toBe('fast-keywords')
    expect(result.correct).toBe(true)
    expect(judge).not.toHaveBeenCalled()
  })

  it('fast-passes when whitespace/casing differs from the canonical', async () => {
    const messy = `   ${question.correctStep.toUpperCase()}   `
    const result = await scoreMissingStepWithJudge(
      { question, answer: messy, userId },
      { repository: repo, rateLimiter, judge, apiKey: 'sk-test' }
    )
    expect(result.source).toBe('fast-keywords')
    expect(result.correct).toBe(true)
    expect(judge).not.toHaveBeenCalled()
  })

  it('returns cached judgment on repeat with the same answer', async () => {
    judge.mockResolvedValueOnce({
      correct: true,
      reason: 'You stated the numerator idea differently but correctly.',
    })
    const ans = 'The numerator counts the eaten slices, so it is 5.'
    const first = await scoreMissingStepWithJudge(
      { question, answer: ans, userId },
      { repository: repo, rateLimiter, judge, apiKey: 'sk-test' }
    )
    expect(first.source).toBe('judge')
    const second = await scoreMissingStepWithJudge(
      { question, answer: ans, userId },
      { repository: repo, rateLimiter, judge, apiKey: 'sk-test' }
    )
    expect(second.source).toBe('cache')
    expect(second.correct).toBe(true)
    expect(judge).toHaveBeenCalledTimes(1)
  })

  it('returns no-key incorrect when API key absent and not an exact match', async () => {
    const result = await scoreMissingStepWithJudge(
      {
        question,
        answer: 'a wholly different reasoning that nonetheless reaches 5',
        userId,
      },
      { repository: repo, rateLimiter, judge, apiKey: undefined }
    )
    expect(result.source).toBe('no-key')
    expect(result.correct).toBe(false)
    expect(judge).not.toHaveBeenCalled()
  })

  it('falls back to incorrect when rate limit exceeded', async () => {
    const tight = new InMemoryJudgeRateLimiter(60_000, 1)
    judge.mockResolvedValueOnce({ correct: true, reason: 'first' })
    await scoreMissingStepWithJudge(
      { question, answer: 'answer one with enough text', userId },
      { repository: repo, rateLimiter: tight, judge, apiKey: 'sk-test' }
    )
    const second = await scoreMissingStepWithJudge(
      { question, answer: 'answer two with different text', userId },
      { repository: repo, rateLimiter: tight, judge, apiKey: 'sk-test' }
    )
    expect(second.source).toBe('rate-limited')
    expect(second.correct).toBe(false)
    expect(judge).toHaveBeenCalledTimes(1)
  })

  it('falls back to incorrect when judge call fails (returns null)', async () => {
    judge.mockResolvedValueOnce(null)
    const result = await scoreMissingStepWithJudge(
      { question, answer: 'rephrased but correct reasoning', userId },
      { repository: repo, rateLimiter, judge, apiKey: 'sk-test' }
    )
    expect(result.source).toBe('judge-failed')
    expect(result.correct).toBe(false)
  })

  it('marks correct when judge rules so', async () => {
    judge.mockResolvedValueOnce({
      correct: true,
      reason: 'You captured the numerator idea in your own words.',
    })
    const result = await scoreMissingStepWithJudge(
      {
        question,
        answer: 'The top of the fraction is the eaten count, which is 5.',
        userId,
      },
      { repository: repo, rateLimiter, judge, apiKey: 'sk-test' }
    )
    expect(result.source).toBe('judge')
    expect(result.correct).toBe(true)
    expect(result.reason).toContain('numerator')
  })
})
