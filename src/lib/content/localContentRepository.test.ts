import { describe, it, expect } from 'vitest'
import { localContent } from './localContentRepository'

describe('LocalContentRepository', () => {
  it('returns a node by id', async () => {
    const node = await localContent.getNode('maths-fractions-equivalent')
    expect(node).not.toBeNull()
    expect(node?.title).toBe('Equivalent Fractions')
  })

  it('returns null for unknown node', async () => {
    const node = await localContent.getNode('nonexistent')
    expect(node).toBeNull()
  })

  it('returns zone nodes', async () => {
    const nodes = await localContent.getZoneNodes('maths-fractions')
    expect(nodes.length).toBe(3)
  })

  it('returns realm zones', async () => {
    const zones = await localContent.getRealmZones('numerica')
    expect(zones.length).toBeGreaterThan(0)
    expect(zones[0].name).toBe('Fractions')
  })

  it('returns all nodes', async () => {
    const nodes = await localContent.getAllNodes()
    expect(nodes.length).toBeGreaterThanOrEqual(3)
  })
})
