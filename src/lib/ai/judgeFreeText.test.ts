import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import type { FreeTextQuestion } from '@/types/content'

const mockCreate = vi.fn()
vi.mock('@anthropic-ai/sdk', () => ({
  default: class MockAnthropic {
    messages = { create: mockCreate }
    constructor(_config: { apiKey: string }) {}
  },
}))

import { judgeFreeText } from './judgeFreeText'

const question: FreeTextQuestion = {
  id: 'test-q',
  type: 'free-text',
  stem: 'What is photosynthesis in plants?',
  keywords: ['plants', 'sunlight', 'energy'],
  sampleAnswer:
    'Plants use sunlight to make food, turning carbon dioxide and water into glucose.',
  tier: 'core',
  xpValue: 15,
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

describe('judgeFreeText', () => {
  it('returns null when ANTHROPIC_API_KEY is not set', async () => {
    delete process.env.ANTHROPIC_API_KEY
    const result = await judgeFreeText(question, 'plants need sun')
    expect(result).toBeNull()
    expect(mockCreate).not.toHaveBeenCalled()
  })

  it('parses a clean JSON response', async () => {
    mockCreate.mockResolvedValueOnce({
      content: [
        {
          type: 'text',
          text: '{"correct":true,"reason":"You captured the key idea."}',
        },
      ],
    })
    const result = await judgeFreeText(
      question,
      'plants use sunlight to make energy'
    )
    expect(result).toEqual({
      correct: true,
      reason: 'You captured the key idea.',
    })
  })

  it('extracts JSON when the model adds surrounding prose', async () => {
    mockCreate.mockResolvedValueOnce({
      content: [
        {
          type: 'text',
          text: 'Here is my marking:\n{"correct":false,"reason":"Needs more detail about the inputs."}\n',
        },
      ],
    })
    const result = await judgeFreeText(question, 'sunlight stuff')
    expect(result).toEqual({
      correct: false,
      reason: 'Needs more detail about the inputs.',
    })
  })

  it('returns null when the SDK call throws', async () => {
    mockCreate.mockRejectedValueOnce(new Error('rate-limited'))
    const result = await judgeFreeText(question, 'something')
    expect(result).toBeNull()
  })

  it('returns null for malformed JSON', async () => {
    mockCreate.mockResolvedValueOnce({
      content: [{ type: 'text', text: 'not valid json' }],
    })
    const result = await judgeFreeText(question, 'something')
    expect(result).toBeNull()
  })

  it('returns null when JSON shape is wrong', async () => {
    mockCreate.mockResolvedValueOnce({
      content: [
        { type: 'text', text: '{"verdict":"correct","note":"hello"}' },
      ],
    })
    const result = await judgeFreeText(question, 'something')
    expect(result).toBeNull()
  })

  it('caps absurdly long reason strings at 280 chars', async () => {
    const longReason = 'a'.repeat(500)
    mockCreate.mockResolvedValueOnce({
      content: [
        {
          type: 'text',
          text: `{"correct":true,"reason":"${longReason}"}`,
        },
      ],
    })
    const result = await judgeFreeText(question, 'something')
    expect(result?.reason.length).toBe(280)
  })

  it('uses prompt caching on the system prompt and rubric', async () => {
    mockCreate.mockResolvedValueOnce({
      content: [{ type: 'text', text: '{"correct":true,"reason":"ok."}' }],
    })
    await judgeFreeText(question, 'an answer')
    const callArgs = mockCreate.mock.calls[0][0] as {
      system: Array<{ cache_control?: { type: string } }>
    }
    expect(Array.isArray(callArgs.system)).toBe(true)
    expect(callArgs.system[0]?.cache_control?.type).toBe('ephemeral')
    expect(callArgs.system[1]?.cache_control?.type).toBe('ephemeral')
  })
})
