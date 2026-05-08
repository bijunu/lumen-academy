import { describe, it, expect } from 'vitest'
import { computeLockState } from './lockState'
import type { SkillNode } from '@/types/content'
import type { NodeProgress } from '@/types/progress'

function fakeNode(
  overrides: Partial<SkillNode> & { id: string }
): SkillNode {
  return {
    title: overrides.id,
    description: '',
    subject: 'maths',
    realm: 'numerica',
    zoneId: 'zone-default',
    zoneName: 'Default',
    tier: 'core',
    prerequisites: [],
    curriculum: { ks3Objective: '', awardingBodies: {} },
    scenes: [],
    workedExamples: [],
    questions: [],
    misconceptions: [],
    masteryRule: { streak: 3, spacedReviewDays: [1, 3, 7] },
    ...overrides,
  }
}

function fakeProgress(
  overrides: Partial<NodeProgress> & { nodeId: string; userId: string }
): NodeProgress {
  return {
    mastery: 'none',
    correctStreak: 0,
    totalAttempts: 0,
    totalCorrect: 0,
    lastAttemptAt: null,
    nextReviewAt: null,
    sm2: { interval: 0, repetition: 0, easeFactor: 2.5 },
    ...overrides,
  }
}

const userId = 'user-1'

describe('computeLockState', () => {
  it('returns an empty map for no nodes', () => {
    expect(computeLockState([], new Map()).size).toBe(0)
  })

  it('marks a root node as unlocked when no progress exists', () => {
    const states = computeLockState([fakeNode({ id: 'a' })], new Map())
    expect(states.get('a')).toBe('unlocked')
  })

  it('marks a node with sm2 repetition as completed', () => {
    const progress = new Map<string, NodeProgress>([
      [
        'a',
        fakeProgress({
          userId,
          nodeId: 'a',
          totalCorrect: 1,
          sm2: { interval: 1, repetition: 1, easeFactor: 2.5 },
        }),
      ],
    ])
    const states = computeLockState([fakeNode({ id: 'a' })], progress)
    expect(states.get('a')).toBe('completed')
  })

  it('locks a node whose prerequisite has no progress', () => {
    const states = computeLockState(
      [fakeNode({ id: 'a' }), fakeNode({ id: 'b', prerequisites: ['a'] })],
      new Map()
    )
    expect(states.get('a')).toBe('unlocked')
    expect(states.get('b')).toBe('locked')
  })

  it('unlocks a node once its prerequisite has at least one correct attempt', () => {
    const progress = new Map<string, NodeProgress>([
      ['a', fakeProgress({ userId, nodeId: 'a', totalCorrect: 1 })],
    ])
    const states = computeLockState(
      [fakeNode({ id: 'a' }), fakeNode({ id: 'b', prerequisites: ['a'] })],
      progress
    )
    expect(states.get('b')).toBe('unlocked')
  })

  it('locks a node when only some of its prerequisites are satisfied', () => {
    const progress = new Map<string, NodeProgress>([
      ['a', fakeProgress({ userId, nodeId: 'a', totalCorrect: 1 })],
    ])
    const nodes = [
      fakeNode({ id: 'a' }),
      fakeNode({ id: 'b' }),
      fakeNode({ id: 'c', prerequisites: ['a', 'b'] }),
    ]
    const states = computeLockState(nodes, progress)
    expect(states.get('c')).toBe('locked')
  })

  it('skips prerequisites not in the input set', () => {
    const states = computeLockState(
      [fakeNode({ id: 'b', prerequisites: ['out-of-set'] })],
      new Map()
    )
    expect(states.get('b')).toBe('unlocked')
  })

  it('marks a node completed even if its prerequisites are not satisfied', () => {
    const progress = new Map<string, NodeProgress>([
      [
        'b',
        fakeProgress({
          userId,
          nodeId: 'b',
          totalCorrect: 1,
          sm2: { interval: 1, repetition: 1, easeFactor: 2.5 },
        }),
      ],
    ])
    const states = computeLockState(
      [fakeNode({ id: 'a' }), fakeNode({ id: 'b', prerequisites: ['a'] })],
      progress
    )
    expect(states.get('b')).toBe('completed')
  })

  it('chains correctly across a three-node sequence', () => {
    const progress = new Map<string, NodeProgress>([
      [
        'a',
        fakeProgress({
          userId,
          nodeId: 'a',
          totalCorrect: 2,
          sm2: { interval: 1, repetition: 1, easeFactor: 2.5 },
        }),
      ],
    ])
    const states = computeLockState(
      [
        fakeNode({ id: 'a' }),
        fakeNode({ id: 'b', prerequisites: ['a'] }),
        fakeNode({ id: 'c', prerequisites: ['b'] }),
      ],
      progress
    )
    expect(states.get('a')).toBe('completed')
    expect(states.get('b')).toBe('unlocked')
    expect(states.get('c')).toBe('locked')
  })
})
