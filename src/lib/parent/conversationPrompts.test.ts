import { describe, expect, it } from 'vitest'

import type { StrugglingTopic } from './strugglingTopics'
import { suggestConversationPrompts } from './conversationPrompts'

function topic(
  nodeId: string,
  title: string,
  realm: StrugglingTopic['realm']
): StrugglingTopic {
  return {
    nodeId,
    title,
    realm,
    accuracy: 0.4,
    totalAttempts: 5,
    totalCorrect: 2,
    lastAttemptAt: null,
  }
}

describe('suggestConversationPrompts', () => {
  it('returns one prompt per supplied topic up to max', () => {
    const out = suggestConversationPrompts(
      [
        topic('m1', 'Equivalent fractions', 'numerica'),
        topic('b1', 'Cell parts', 'vitalia'),
      ],
      3
    )
    expect(out).toHaveLength(2)
    expect(out[0].nodeId).toBe('m1')
    expect(out[1].nodeId).toBe('b1')
  })

  it('substitutes the topic title in lowercase into the template', () => {
    const out = suggestConversationPrompts(
      [topic('m1', 'Equivalent Fractions', 'numerica')],
      1
    )
    expect(out[0].text).toContain('equivalent fractions')
    expect(out[0].text).not.toContain('{topic}')
  })

  it('selects deterministically given the same nodeId', () => {
    const a = suggestConversationPrompts(
      [topic('m1', 'Equivalent fractions', 'numerica')],
      1
    )
    const b = suggestConversationPrompts(
      [topic('m1', 'Equivalent fractions', 'numerica')],
      1
    )
    expect(a[0].text).toBe(b[0].text)
  })

  it('uses a realm-appropriate template family', () => {
    const out = suggestConversationPrompts(
      [
        topic('m1', 'Forces', 'mechanica'),
        topic('b1', 'Cell parts', 'vitalia'),
      ],
      3
    )
    expect(out[0].realm).toBe('mechanica')
    expect(out[1].realm).toBe('vitalia')
  })

  it('caps at max', () => {
    const out = suggestConversationPrompts(
      [
        topic('m1', 'A', 'numerica'),
        topic('m2', 'B', 'numerica'),
        topic('m3', 'C', 'numerica'),
        topic('m4', 'D', 'numerica'),
      ],
      2
    )
    expect(out).toHaveLength(2)
  })

  it('returns empty for max <= 0 or empty topics', () => {
    expect(
      suggestConversationPrompts(
        [topic('m1', 'A', 'numerica')],
        0
      )
    ).toEqual([])
    expect(suggestConversationPrompts([], 3)).toEqual([])
  })
})
