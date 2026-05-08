import { describe, expect, it } from 'vitest'

import { pickTasks } from './pickTasks'

const SEED = 'user-1:2026-05-09'

describe('pickTasks', () => {
  it('returns empty when there are no candidates', () => {
    expect(
      pickTasks({ dueNodeIds: [], untouchedNodeIds: [], seedKey: SEED })
    ).toEqual([])
  })

  it('prefers two due reviews and one new node when both pools are full', () => {
    const tasks = pickTasks({
      dueNodeIds: ['d1', 'd2', 'd3', 'd4'],
      untouchedNodeIds: ['n1', 'n2', 'n3'],
      seedKey: SEED,
    })
    expect(tasks).toHaveLength(3)
    const dueCount = tasks.filter(t => t.kind === 'due-review').length
    const newCount = tasks.filter(t => t.kind === 'new-node').length
    expect(dueCount).toBe(2)
    expect(newCount).toBe(1)
  })

  it('falls back to filling from the new pool when due is short', () => {
    const tasks = pickTasks({
      dueNodeIds: ['d1'],
      untouchedNodeIds: ['n1', 'n2', 'n3'],
      seedKey: SEED,
    })
    expect(tasks).toHaveLength(3)
    expect(tasks.filter(t => t.kind === 'due-review')).toHaveLength(1)
    expect(tasks.filter(t => t.kind === 'new-node')).toHaveLength(2)
  })

  it('falls back to filling from the due pool when no new nodes', () => {
    const tasks = pickTasks({
      dueNodeIds: ['d1', 'd2', 'd3', 'd4'],
      untouchedNodeIds: [],
      seedKey: SEED,
    })
    expect(tasks).toHaveLength(3)
    expect(tasks.every(t => t.kind === 'due-review')).toBe(true)
  })

  it('locks fewer tasks when total candidates fall under the count', () => {
    const tasks = pickTasks({
      dueNodeIds: ['d1'],
      untouchedNodeIds: ['n1'],
      seedKey: SEED,
    })
    expect(tasks).toHaveLength(2)
  })

  it('is deterministic for a given seed', () => {
    const args = {
      dueNodeIds: ['d1', 'd2', 'd3'],
      untouchedNodeIds: ['n1', 'n2', 'n3'],
      seedKey: SEED,
    }
    expect(pickTasks(args)).toEqual(pickTasks(args))
  })

  it('produces stable picks regardless of input ordering', () => {
    const a = pickTasks({
      dueNodeIds: ['d1', 'd2', 'd3'],
      untouchedNodeIds: ['n1', 'n2', 'n3'],
      seedKey: SEED,
    })
    const b = pickTasks({
      dueNodeIds: ['d3', 'd1', 'd2'],
      untouchedNodeIds: ['n3', 'n2', 'n1'],
      seedKey: SEED,
    })
    expect(a.map(t => t.nodeId).sort()).toEqual(b.map(t => t.nodeId).sort())
  })

  it('does not pick a node that is in both pools', () => {
    const tasks = pickTasks({
      dueNodeIds: ['d1', 'd2', 'shared'],
      untouchedNodeIds: ['shared', 'n1'],
      seedKey: SEED,
    })
    const ids = tasks.map(t => t.nodeId)
    const sharedCount = ids.filter(id => id === 'shared').length
    expect(sharedCount).toBeLessThanOrEqual(1)
  })

  it('fresh tasks are pending with no completedAt', () => {
    const tasks = pickTasks({
      dueNodeIds: ['d1'],
      untouchedNodeIds: ['n1', 'n2'],
      seedKey: SEED,
    })
    for (const t of tasks) {
      expect(t.status).toBe('pending')
      expect(t.completedAt).toBeNull()
    }
  })

  it('changes selection across distinct seeds (sanity)', () => {
    const due = ['d1', 'd2', 'd3', 'd4']
    const fresh = ['n1', 'n2', 'n3', 'n4']
    const seeds = ['u:2026-05-09', 'u:2026-05-10', 'u:2026-05-11', 'u:2026-05-12']
    const fingerprints = new Set(
      seeds.map(s =>
        pickTasks({ dueNodeIds: due, untouchedNodeIds: fresh, seedKey: s })
          .map(t => t.nodeId)
          .join('|')
      )
    )
    expect(fingerprints.size).toBeGreaterThan(1)
  })
})
