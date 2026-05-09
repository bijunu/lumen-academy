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
    const { positions, edges, bands } = layoutSkillTree([])
    expect(positions.size).toBe(0)
    expect(edges).toEqual([])
    expect(bands).toEqual([])
  })

  it('places a single root node at (0,0) with no edges and one band', () => {
    const { positions, edges, bands } = layoutSkillTree([fakeNode({ id: 'a' })])
    expect(positions.get('a')).toEqual({ x: 0, y: 0 })
    expect(edges).toEqual([])
    expect(bands).toEqual([
      { zoneId: 'zone-default', zoneName: 'Default', y0: 0, y1: 0 },
    ])
  })

  it('layers a linear in-zone chain by prerequisite depth', () => {
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

  it('places branching siblings on the same x within their band', () => {
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

  it('orders within a depth-layer of the same band by title', () => {
    const nodes = [
      fakeNode({ id: 'a', title: 'Cherry' }),
      fakeNode({ id: 'b', title: 'Banana' }),
      fakeNode({ id: 'c', title: 'Apple' }),
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

  it('takes the longest in-zone path when a node has multiple prerequisites', () => {
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

  it('places nodes from different zones in stacked horizontal bands', () => {
    const nodes = [
      fakeNode({ id: 'a', zoneId: 'fractions', zoneName: 'Fractions' }),
      fakeNode({ id: 'b', zoneId: 'decimals', zoneName: 'Decimals' }),
      fakeNode({ id: 'c', zoneId: 'percentages', zoneName: 'Percentages' }),
    ]
    const { positions, bands } = layoutSkillTree(nodes)
    expect(positions.get('a')).toEqual({ x: 0, y: 0 })
    expect(positions.get('b')).toEqual({ x: 0, y: 1 })
    expect(positions.get('c')).toEqual({ x: 0, y: 2 })
    expect(bands).toEqual([
      { zoneId: 'fractions', zoneName: 'Fractions', y0: 0, y1: 0 },
      { zoneId: 'decimals', zoneName: 'Decimals', y0: 1, y1: 1 },
      { zoneId: 'percentages', zoneName: 'Percentages', y0: 2, y1: 2 },
    ])
  })

  it('preserves zone first-appearance order from the input array', () => {
    const nodes = [
      fakeNode({ id: 'p1', zoneId: 'percentages', zoneName: 'Percentages' }),
      fakeNode({ id: 'f1', zoneId: 'fractions', zoneName: 'Fractions' }),
      fakeNode({ id: 'd1', zoneId: 'decimals', zoneName: 'Decimals' }),
    ]
    const { bands } = layoutSkillTree(nodes)
    expect(bands.map(b => b.zoneId)).toEqual([
      'percentages',
      'fractions',
      'decimals',
    ])
  })

  it('computes per-zone depth ignoring cross-zone prerequisites for x', () => {
    const nodes = [
      fakeNode({
        id: 'bidmas-1',
        zoneId: 'bidmas',
        zoneName: 'BIDMAS',
      }),
      fakeNode({
        id: 'algebra-1',
        zoneId: 'algebra',
        zoneName: 'Algebra',
        prerequisites: ['bidmas-1'],
      }),
    ]
    const { positions, edges } = layoutSkillTree(nodes)
    expect(positions.get('bidmas-1')?.x).toBe(0)
    expect(positions.get('algebra-1')?.x).toBe(0)
    expect(positions.get('bidmas-1')?.y).toBe(0)
    expect(positions.get('algebra-1')?.y).toBe(1)
    expect(edges).toContainEqual({ from: 'bidmas-1', to: 'algebra-1' })
  })

  it('sizes a band to the widest depth-layer within that zone', () => {
    const nodes = [
      fakeNode({ id: 'f-root', zoneId: 'fractions', zoneName: 'Fractions' }),
      fakeNode({
        id: 'f-a',
        zoneId: 'fractions',
        zoneName: 'Fractions',
        prerequisites: ['f-root'],
        title: 'A',
      }),
      fakeNode({
        id: 'f-b',
        zoneId: 'fractions',
        zoneName: 'Fractions',
        prerequisites: ['f-root'],
        title: 'B',
      }),
      fakeNode({
        id: 'f-c',
        zoneId: 'fractions',
        zoneName: 'Fractions',
        prerequisites: ['f-root'],
        title: 'C',
      }),
      fakeNode({
        id: 'd-root',
        zoneId: 'decimals',
        zoneName: 'Decimals',
      }),
    ]
    const { positions, bands } = layoutSkillTree(nodes)
    expect(bands[0]).toEqual({
      zoneId: 'fractions',
      zoneName: 'Fractions',
      y0: 0,
      y1: 2,
    })
    expect(bands[1]).toEqual({
      zoneId: 'decimals',
      zoneName: 'Decimals',
      y0: 3,
      y1: 3,
    })
    expect(positions.get('d-root')).toEqual({ x: 0, y: 3 })
    expect(positions.get('f-root')).toEqual({ x: 0, y: 0 })
    expect(positions.get('f-a')?.x).toBe(1)
    expect(positions.get('f-b')?.x).toBe(1)
    expect(positions.get('f-c')?.x).toBe(1)
  })
})
