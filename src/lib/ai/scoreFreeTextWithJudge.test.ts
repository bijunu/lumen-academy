import { describe, it, expect, vi, beforeEach } from 'vitest'
import type { FreeTextQuestion } from '@/types/content'

import { InMemoryJudgeRateLimiter } from './judgeRateLimit'
import { scoreFreeTextWithJudge } from './scoreFreeTextWithJudge'
import {
  type FreetextJudgmentRecord,
  type FreetextJudgmentRepository,
} from './freetextJudgmentRepository'

const question: FreeTextQuestion = {
  id: 'ft-1',
  type: 'free-text',
  stem: 'Explain photosynthesis.',
  keywords: ['plants', 'sunlight', 'energy'],
  sampleAnswer:
    'Plants use sunlight to turn carbon dioxide and water into glucose, which stores energy.',
  tier: 'core',
  xpValue: 15,
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

describe('scoreFreeTextWithJudge', () => {
  it('fast-path-fails an empty or tiny answer without calling judge', async () => {
    const result = await scoreFreeTextWithJudge(
      { question, answer: '   ', userId },
      { repository: repo, rateLimiter, judge, apiKey: 'sk-test' }
    )
    expect(result.source).toBe('fast-empty')
    expect(result.correct).toBe(false)
    expect(judge).not.toHaveBeenCalled()
  })

  it('fast-path-passes when all keywords present and answer is long', async () => {
    const longAnswer =
      'Plants use sunlight to capture energy. The chloroplasts in the leaves of plants store the captured energy as glucose so the plant can grow.'
    const result = await scoreFreeTextWithJudge(
      { question, answer: longAnswer, userId },
      { repository: repo, rateLimiter, judge, apiKey: 'sk-test' }
    )
    expect(result.source).toBe('fast-keywords')
    expect(result.correct).toBe(true)
    expect(judge).not.toHaveBeenCalled()
  })

  it('returns cached judgment on second attempt with the same answer', async () => {
    judge.mockResolvedValueOnce({
      correct: true,
      reason: 'You explained it well.',
    })
    const ans = 'plants take in sunlight and use the energy'
    const first = await scoreFreeTextWithJudge(
      { question, answer: ans, userId },
      { repository: repo, rateLimiter, judge, apiKey: 'sk-test' }
    )
    expect(first.source).toBe('judge')

    const second = await scoreFreeTextWithJudge(
      { question, answer: ans, userId },
      { repository: repo, rateLimiter, judge, apiKey: 'sk-test' }
    )
    expect(second.source).toBe('cache')
    expect(second.correct).toBe(true)
    expect(second.reason).toBe('You explained it well.')
    expect(judge).toHaveBeenCalledTimes(1)
  })

  it('falls back to keyword check when no API key is configured', async () => {
    const result = await scoreFreeTextWithJudge(
      {
        question,
        answer: 'plants take in sunlight and store energy',
        userId,
      },
      { repository: repo, rateLimiter, judge, apiKey: undefined }
    )
    expect(result.source).toBe('no-key')
    expect(result.correct).toBe(true)
    expect(judge).not.toHaveBeenCalled()
  })

  it('falls back to keyword check when rate limit is exceeded', async () => {
    const tight = new InMemoryJudgeRateLimiter(60_000, 1)
    judge.mockResolvedValueOnce({ correct: true, reason: 'first one' })
    await scoreFreeTextWithJudge(
      { question, answer: 'plants store sun energy', userId },
      { repository: repo, rateLimiter: tight, judge, apiKey: 'sk-test' }
    )
    judge.mockResolvedValueOnce({ correct: true, reason: 'second one' })
    const second = await scoreFreeTextWithJudge(
      {
        question,
        answer: 'a different answer using sunlight plants and energy',
        userId,
      },
      { repository: repo, rateLimiter: tight, judge, apiKey: 'sk-test' }
    )
    expect(second.source).toBe('rate-limited')
    expect(second.correct).toBe(true)
    expect(judge).toHaveBeenCalledTimes(1)
  })

  it('falls back to keyword check when judge call fails (returns null)', async () => {
    judge.mockResolvedValueOnce(null)
    const result = await scoreFreeTextWithJudge(
      { question, answer: 'plants sunlight energy short', userId },
      { repository: repo, rateLimiter, judge, apiKey: 'sk-test' }
    )
    expect(result.source).toBe('judge-failed')
    expect(result.correct).toBe(true)
  })

  it('marks incorrect when judge rules so', async () => {
    judge.mockResolvedValueOnce({
      correct: false,
      reason: 'You did not explain where the energy comes from.',
    })
    const result = await scoreFreeTextWithJudge(
      { question, answer: 'plants make food somehow', userId },
      { repository: repo, rateLimiter, judge, apiKey: 'sk-test' }
    )
    expect(result.source).toBe('judge')
    expect(result.correct).toBe(false)
    expect(result.reason).toContain('energy')
  })

  it('still returns a result if cache save fails', async () => {
    const flakyRepo: FreetextJudgmentRepository = {
      get: vi.fn().mockResolvedValue(null),
      save: vi.fn().mockRejectedValue(new Error('mongo down')),
    }
    judge.mockResolvedValueOnce({ correct: true, reason: 'ok' })
    const result = await scoreFreeTextWithJudge(
      { question, answer: 'plants and sun and energy', userId },
      {
        repository: flakyRepo,
        rateLimiter,
        judge,
        apiKey: 'sk-test',
      }
    )
    expect(result.source).toBe('judge')
    expect(result.correct).toBe(true)
  })
})
