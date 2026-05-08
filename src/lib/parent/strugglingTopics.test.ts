import { describe, expect, it } from 'vitest'

import type { SkillNode } from '@/types/content'
import type { NodeProgress } from '@/types/progress'

import { pickStrugglingTopics } from './strugglingTopics'

function progress(
  nodeId: string,
  overrides: Partial<NodeProgress> = {}
): NodeProgress {
  return {
    nodeId,
    userId: 'u1',
    mastery: 'bronze',
    correctStreak: 0,
    totalAttempts: 4,
    totalCorrect: 2,
    lastAttemptAt: new Date('2026-05-08T12:00:00Z'),
    nextReviewAt: null,
    sm2: { interval: 0, repetition: 0, easeFactor: 2.5 },
    ...overrides,
  }
}

function meta(
  id: string,
  title: string,
  realm: SkillNode['realm']
): Pick<SkillNode, 'id' | 'title' | 'realm'> {
  return { id, title, realm }
}

describe('pickStrugglingTopics', () => {
  const nodes = [
    meta('m1', 'Equivalent fractions', 'numerica'),
    meta('m2', 'Adding fractions', 'numerica'),
    meta('b1', 'Cell parts', 'vitalia'),
    meta('p1', 'Forces', 'mechanica'),
  ]

  it('returns up to max rows ordered by ascending accuracy regardless of nextReviewAt', () => {
    const rows = [
      progress('m1', {
        totalCorrect: 3,
        nextReviewAt: new Date('2099-01-01T00:00:00Z'),
      }),
      progress('m2', { totalCorrect: 1 }),
      progress('b1', { totalCorrect: 0 }),
      progress('p1', {
        totalCorrect: 2,
        nextReviewAt: new Date('2099-01-01T00:00:00Z'),
      }),
    ]
    const out = pickStrugglingTopics(rows, nodes, 5)
    expect(out.map(t => t.nodeId)).toEqual(['b1', 'm2', 'p1', 'm1'])
    expect(out[0].accuracy).toBe(0)
    expect(out[3].accuracy).toBe(0.75)
  })

  it('caps at max', () => {
    const rows = nodes.map((n, i) => progress(n.id, { totalCorrect: i }))
    const out = pickStrugglingTopics(rows, nodes, 2)
    expect(out).toHaveLength(2)
  })

  it('skips rows with no attempts', () => {
    const out = pickStrugglingTopics(
      [progress('m1', { totalAttempts: 0, totalCorrect: 0 })],
      nodes,
      5
    )
    expect(out).toEqual([])
  })

  it('skips rows whose node is not in the catalogue', () => {
    const out = pickStrugglingTopics(
      [progress('orphan')],
      [meta('m1', 'X', 'numerica')],
      5
    )
    expect(out).toEqual([])
  })

  it('breaks accuracy ties by oldest lastAttemptAt then nodeId', () => {
    const older = new Date('2026-05-01T00:00:00Z')
    const newer = new Date('2026-05-08T00:00:00Z')
    const rows = [
      progress('m1', { totalCorrect: 1, lastAttemptAt: newer }),
      progress('m2', { totalCorrect: 1, lastAttemptAt: older }),
    ]
    const out = pickStrugglingTopics(rows, nodes, 5)
    expect(out.map(t => t.nodeId)).toEqual(['m2', 'm1'])
  })

  it('returns empty for max <= 0', () => {
    const rows = [progress('m1', { totalCorrect: 0 })]
    expect(pickStrugglingTopics(rows, nodes, 0)).toEqual([])
    expect(pickStrugglingTopics(rows, nodes, -1)).toEqual([])
  })
})
