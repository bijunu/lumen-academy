import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import type { MissingStepQuestion } from '@/types/content'

const mockCreate = vi.fn()
vi.mock('@anthropic-ai/sdk', () => ({
  default: class MockAnthropic {
    messages = { create: mockCreate }
    constructor(_config: { apiKey: string }) {}
  },
}))

import { judgeMissingStep } from './judgeMissingStep'

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

const ORIGINAL_KEY = process.env.ANTHROPIC_API_KEY

beforeEach(() => {
  mockCreate.mockReset()
  process.env.ANTHROPIC_API_KEY = 'sk-test'
})

afterEach(() => {
  if (ORIGINAL_KEY === undefined) {
    delete process.env.ANTHROPIC_API_KEY
  } else {
    process.env.ANTHROPIC_API_KEY = ORIGINAL_KEY
  }
})

describe('judgeMissingStep', () => {
  it('returns null when ANTHROPIC_API_KEY is not set', async () => {
    delete process.env.ANTHROPIC_API_KEY
    const result = await judgeMissingStep(question, 'numerator is 5')
    expect(result).toBeNull()
    expect(mockCreate).not.toHaveBeenCalled()
  })

  it('parses a clean JSON response', async () => {
    mockCreate.mockResolvedValueOnce({
      content: [
        {
          type: 'text',
          text: '{"correct":true,"reason":"You captured the numerator idea well."}',
        },
      ],
    })
    const result = await judgeMissingStep(
      question,
      'The numerator counts the eaten slices, so the numerator is 5.'
    )
    expect(result).toEqual({
      correct: true,
      reason: 'You captured the numerator idea well.',
    })
  })

  it('rubric includes the canonical step and the missing-step marker', async () => {
    mockCreate.mockResolvedValueOnce({
      content: [{ type: 'text', text: '{"correct":true,"reason":"ok."}' }],
    })
    await judgeMissingStep(question, 'something')
    const callArgs = mockCreate.mock.calls[0][0] as {
      system: Array<{ text: string }>
    }
    const rubric = callArgs.system[1].text
    expect(rubric).toMatch(/Canonical missing step/)
    expect(rubric).toMatch(/MISSING STEP/)
    expect(rubric).toMatch(question.correctStep)
  })

  it('returns null when SDK throws', async () => {
    mockCreate.mockRejectedValueOnce(new Error('rate-limited'))
    const result = await judgeMissingStep(question, 'something')
    expect(result).toBeNull()
  })

  it('returns null for malformed JSON', async () => {
    mockCreate.mockResolvedValueOnce({
      content: [{ type: 'text', text: 'not valid json' }],
    })
    const result = await judgeMissingStep(question, 'something')
    expect(result).toBeNull()
  })

  it('uses prompt caching on the system prompt and rubric', async () => {
    mockCreate.mockResolvedValueOnce({
      content: [{ type: 'text', text: '{"correct":true,"reason":"ok."}' }],
    })
    await judgeMissingStep(question, 'something')
    const callArgs = mockCreate.mock.calls[0][0] as {
      system: Array<{ cache_control?: { type: string } }>
    }
    expect(callArgs.system[0]?.cache_control?.type).toBe('ephemeral')
    expect(callArgs.system[1]?.cache_control?.type).toBe('ephemeral')
  })
})
