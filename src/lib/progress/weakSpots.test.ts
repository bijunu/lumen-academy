import { describe, expect, it } from 'vitest'

import type { SkillNode } from '@/types/content'
import type { NodeProgress } from '@/types/progress'

import { pickWeakSpots } from './weakSpots'

const NOW = new Date('2026-05-09T12:00:00Z')

function progress(
  nodeId: string,
  overrides: Partial<NodeProgress> = {}
): NodeProgress {
  return {
    nodeId,
    userId: 'u1',
    mastery: 'bronze',
    correctStreak: 1,
    totalAttempts: 4,
    totalCorrect: 2,
    lastAttemptAt: new Date('2026-05-08T12:00:00Z'),
    nextReviewAt: new Date('2026-05-09T08:00:00Z'),
    sm2: { interval: 1, repetition: 1, easeFactor: 2.5 },
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

describe('pickWeakSpots', () => {
  const nodes = [
    meta('m1', 'Equivalent fractions', 'numerica'),
    meta('m2', 'Adding fractions', 'numerica'),
    meta('b1', 'Cell parts', 'vitalia'),
  ]

  it('returns up to N due rows ordered by ascending accuracy', () => {
    const rows = [
      progress('m1', { totalAttempts: 4, totalCorrect: 3 }),
      progress('m2', { totalAttempts: 4, totalCorrect: 1 }),
      progress('b1', { totalAttempts: 4, totalCorrect: 2 }),
    ]
    const out = pickWeakSpots(rows, nodes, NOW, 3)
    expect(out.map(s => s.nodeId)).toEqual(['m2', 'b1', 'm1'])
    expect(out[0].accuracy).toBeCloseTo(0.25)
    expect(out[1].accuracy).toBeCloseTo(0.5)
    expect(out[2].accuracy).toBeCloseTo(0.75)
  })

  it('caps the result at max', () => {
    const rows = [
      progress('m1', { totalCorrect: 0 }),
      progress('m2', { totalCorrect: 1 }),
      progress('b1', { totalCorrect: 2 }),
    ]
    const out = pickWeakSpots(rows, nodes, NOW, 2)
    expect(out).toHaveLength(2)
    expect(out.map(s => s.nodeId)).toEqual(['m1', 'm2'])
  })

  it('skips rows that are not yet due', () => {
    const future = new Date('2099-01-01T00:00:00Z')
    const rows = [
      progress('m1', { nextReviewAt: future }),
      progress('m2', { totalCorrect: 0 }),
    ]
    const out = pickWeakSpots(rows, nodes, NOW, 3)
    expect(out.map(s => s.nodeId)).toEqual(['m2'])
  })

  it('skips rows with no attempts (no accuracy signal yet)', () => {
    const rows = [
      progress('m1', { totalAttempts: 0, totalCorrect: 0 }),
      progress('m2', { totalCorrect: 1 }),
    ]
    const out = pickWeakSpots(rows, nodes, NOW, 3)
    expect(out.map(s => s.nodeId)).toEqual(['m2'])
  })

  it('skips rows with no nextReviewAt (untouched scheduling)', () => {
    const rows = [
      progress('m1', { nextReviewAt: null }),
      progress('m2', { totalCorrect: 1 }),
    ]
    const out = pickWeakSpots(rows, nodes, NOW, 3)
    expect(out.map(s => s.nodeId)).toEqual(['m2'])
  })

  it('skips rows whose node is not in catalogue', () => {
    const rows = [progress('orphan', { totalCorrect: 0 })]
    const out = pickWeakSpots(rows, nodes, NOW, 3)
    expect(out).toEqual([])
  })

  it('breaks accuracy ties by oldest lastAttemptAt first', () => {
    const older = new Date('2026-05-01T00:00:00Z')
    const newer = new Date('2026-05-08T00:00:00Z')
    const rows = [
      progress('m1', { totalCorrect: 1, lastAttemptAt: newer }),
      progress('m2', { totalCorrect: 1, lastAttemptAt: older }),
    ]
    const out = pickWeakSpots(rows, nodes, NOW, 3)
    expect(out.map(s => s.nodeId)).toEqual(['m2', 'm1'])
  })

  it('returns empty list when max is zero or negative', () => {
    const rows = [progress('m1', { totalCorrect: 0 })]
    expect(pickWeakSpots(rows, nodes, NOW, 0)).toEqual([])
    expect(pickWeakSpots(rows, nodes, NOW, -1)).toEqual([])
  })
})
