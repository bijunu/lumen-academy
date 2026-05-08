import { describe, it, expect } from 'vitest'
import { layoutSkillTree } from './layout'
import type { SkillNode } from '@/types/content'

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

describe('layoutSkillTree', () => {
  it('returns empty for no nodes', () => {
    const { positions, edges } = layoutSkillTree([])
    expect(positions.size).toBe(0)
    expect(edges).toEqual([])
  })

  it('places a single root node at (0,0) with no edges', () => {
    const { positions, edges } = layoutSkillTree([fakeNode({ id: 'a' })])
    expect(positions.get('a')).toEqual({ x: 0, y: 0 })
    expect(edges).toEqual([])
  })

  it('layers a linear chain by prerequisite depth', () => {
    const nodes = [
      fakeNode({ id: 'a' }),
      fakeNode({ id: 'b', prerequisites: ['a'] }),
      fakeNode({ id: 'c', prerequisites: ['b'] }),
    ]
    const { positions, edges } = layoutSkillTree(nodes)
    expect(positions.get('a')?.x).toBe(0)
    expect(positions.get('b')?.x).toBe(1)
    expect(positions.get('c')?.x).toBe(2)
    expect(edges).toEqual([
      { from: 'a', to: 'b' },
      { from: 'b', to: 'c' },
    ])
  })

  it('places branching siblings on the same layer', () => {
    const nodes = [
      fakeNode({ id: 'a' }),
      fakeNode({ id: 'b', prerequisites: ['a'], title: 'B' }),
      fakeNode({ id: 'c', prerequisites: ['a'], title: 'C' }),
    ]
    const { positions } = layoutSkillTree(nodes)
    expect(positions.get('b')?.x).toBe(1)
    expect(positions.get('c')?.x).toBe(1)
    expect(positions.get('b')?.y).not.toBe(positions.get('c')?.y)
  })

  it('orders the same layer deterministically by zoneId then title', () => {
    const nodes = [
      fakeNode({ id: 'a', zoneId: 'zone-b', title: 'Apple' }),
      fakeNode({ id: 'b', zoneId: 'zone-a', title: 'Cherry' }),
      fakeNode({ id: 'c', zoneId: 'zone-a', title: 'Banana' }),
    ]
    const { positions } = layoutSkillTree(nodes)
    expect(positions.get('c')?.y).toBe(0)
    expect(positions.get('b')?.y).toBe(1)
    expect(positions.get('a')?.y).toBe(2)
  })

  it('ignores prerequisites not in the input set for depth and edges', () => {
    const { positions, edges } = layoutSkillTree([
      fakeNode({ id: 'b', prerequisites: ['missing-prereq'] }),
    ])
    expect(positions.get('b')?.x).toBe(0)
    expect(edges).toEqual([])
  })

  it('takes the longest path when a node has multiple prerequisites', () => {
    const nodes = [
      fakeNode({ id: 'a' }),
      fakeNode({ id: 'b', prerequisites: ['a'] }),
      fakeNode({ id: 'c', prerequisites: ['a', 'b'] }),
    ]
    const { positions, edges } = layoutSkillTree(nodes)
    expect(positions.get('c')?.x).toBe(2)
    expect(edges).toContainEqual({ from: 'a', to: 'c' })
    expect(edges).toContainEqual({ from: 'b', to: 'c' })
  })

  it('throws on a prerequisite cycle', () => {
    const nodes = [
      fakeNode({ id: 'a', prerequisites: ['b'] }),
      fakeNode({ id: 'b', prerequisites: ['a'] }),
    ]
    expect(() => layoutSkillTree(nodes)).toThrow(/Cycle/)
  })
})
