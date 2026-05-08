import { describe, expect, it } from 'vitest'

import type { SkillNode } from '@/types/content'

import { pickBossQuestions } from './pickBossQuestions'

function makeNode(id: string, questionIds: string[]): SkillNode {
  return {
    id,
    questions: questionIds.map(qid => ({ id: qid })),
  } as unknown as SkillNode
}

const seed = 'u1:zone-1:2026-05-09'

describe('pickBossQuestions', () => {
  it('returns 5 questions when zone has plenty', () => {
    const zone = [
      makeNode('n1', ['q1', 'q2', 'q3']),
      makeNode('n2', ['q1', 'q2', 'q3']),
      makeNode('n3', ['q1', 'q2', 'q3']),
    ]
    const picks = pickBossQuestions({ zoneNodes: zone, seedKey: seed })
    expect(picks).toHaveLength(5)
  })

  it('respects max 2 per node', () => {
    const zone = [
      makeNode('n1', ['q1', 'q2', 'q3', 'q4', 'q5']),
      makeNode('n2', ['q1', 'q2', 'q3', 'q4', 'q5']),
      makeNode('n3', ['q1', 'q2', 'q3', 'q4', 'q5']),
    ]
    const picks = pickBossQuestions({ zoneNodes: zone, seedKey: seed })
    const counts = picks.reduce<Record<string, number>>((acc, p) => {
      acc[p.nodeId] = (acc[p.nodeId] ?? 0) + 1
      return acc
    }, {})
    for (const c of Object.values(counts)) {
      expect(c).toBeLessThanOrEqual(2)
    }
  })

  it('is deterministic for a given seed', () => {
    const zone = [
      makeNode('n1', ['q1', 'q2', 'q3']),
      makeNode('n2', ['q1', 'q2', 'q3']),
      makeNode('n3', ['q1', 'q2', 'q3']),
    ]
    const a = pickBossQuestions({ zoneNodes: zone, seedKey: seed })
    const b = pickBossQuestions({ zoneNodes: zone, seedKey: seed })
    expect(a).toEqual(b)
  })

  it('changes selection across distinct seeds (sanity)', () => {
    const zone = [
      makeNode('n1', ['q1', 'q2', 'q3']),
      makeNode('n2', ['q1', 'q2', 'q3']),
      makeNode('n3', ['q1', 'q2', 'q3']),
    ]
    const seeds = [
      'u1:z:2026-05-09',
      'u1:z:2026-05-10',
      'u2:z:2026-05-09',
      'u1:z2:2026-05-09',
    ]
    const fingerprints = new Set(
      seeds.map(s =>
        pickBossQuestions({ zoneNodes: zone, seedKey: s })
          .map(p => `${p.nodeId}.${p.questionId}`)
          .join('|')
      )
    )
    expect(fingerprints.size).toBeGreaterThan(1)
  })

  it('returns fewer than 5 when zone has fewer questions', () => {
    const zone = [makeNode('n1', ['q1', 'q2']), makeNode('n2', ['q1'])]
    const picks = pickBossQuestions({ zoneNodes: zone, seedKey: seed })
    expect(picks.length).toBeLessThanOrEqual(3)
    expect(picks.length).toBeGreaterThan(0)
  })

  it('lifts the per-node cap as a last resort when total candidates are short of count', () => {
    const zone = [makeNode('n1', ['q1', 'q2', 'q3', 'q4', 'q5'])]
    const picks = pickBossQuestions({ zoneNodes: zone, seedKey: seed })
    expect(picks.length).toBe(5)
    const fromN1 = picks.filter(p => p.nodeId === 'n1').length
    expect(fromN1).toBe(5)
  })

  it('returns an empty list when zone has no questions', () => {
    const zone = [makeNode('n1', [])]
    expect(pickBossQuestions({ zoneNodes: zone, seedKey: seed })).toEqual([])
  })

  it('returns empty for an empty zone', () => {
    expect(pickBossQuestions({ zoneNodes: [], seedKey: seed })).toEqual([])
  })
})
