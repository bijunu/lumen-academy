import { describe, expect, it } from 'vitest'

import type { SkillNode } from '@/types/content'
import type { NodeProgress } from '@/types/progress'

import { isBossEligible } from './bossEligibility'

function node(id: string): SkillNode {
  return { id } as SkillNode
}

function progress(
  nodeId: string,
  overrides: Partial<NodeProgress> = {}
): NodeProgress {
  return {
    userId: 'u1',
    nodeId,
    mastery: 'bronze',
    correctStreak: 1,
    totalAttempts: 1,
    totalCorrect: 1,
    lastAttemptAt: null,
    nextReviewAt: null,
    sm2: { interval: 0, repetition: 0, easeFactor: 2.5 },
    ...overrides,
  }
}

describe('isBossEligible', () => {
  it('is false for an empty zone', () => {
    expect(isBossEligible([], new Map())).toBe(false)
  })

  it('is false when one node has no progress at all', () => {
    const nodes = [node('a'), node('b')]
    const map = new Map([['a', progress('a')]])
    expect(isBossEligible(nodes, map)).toBe(false)
  })

  it('is false when one node has zero correct answers', () => {
    const nodes = [node('a'), node('b')]
    const map = new Map([
      ['a', progress('a')],
      ['b', progress('b', { totalCorrect: 0 })],
    ])
    expect(isBossEligible(nodes, map)).toBe(false)
  })

  it('is true when every node has totalCorrect >= 1', () => {
    const nodes = [node('a'), node('b'), node('c')]
    const map = new Map([
      ['a', progress('a', { totalCorrect: 1 })],
      ['b', progress('b', { totalCorrect: 4 })],
      ['c', progress('c', { totalCorrect: 2 })],
    ])
    expect(isBossEligible(nodes, map)).toBe(true)
  })
})
