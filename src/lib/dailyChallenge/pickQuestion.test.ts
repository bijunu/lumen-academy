import { describe, expect, it } from 'vitest'

import {
  flattenCandidates,
  pickQuestion,
  type DailyChallengeCandidate,
} from './pickQuestion'
import type { SkillNode } from '@/types/content'

const candidates: DailyChallengeCandidate[] = [
  { nodeId: 'maths-fractions-1', questionId: 'q1' },
  { nodeId: 'maths-fractions-1', questionId: 'q2' },
  { nodeId: 'maths-fractions-2', questionId: 'q1' },
  { nodeId: 'maths-fractions-3', questionId: 'q1' },
]

describe('pickQuestion', () => {
  it('returns null when there are no candidates', () => {
    expect(pickQuestion('user-1:2026-05-08', [])).toBeNull()
  })

  it('is deterministic for the same seed', () => {
    const a = pickQuestion('user-1:2026-05-08', candidates)
    const b = pickQuestion('user-1:2026-05-08', candidates)
    expect(a).toEqual(b)
  })

  it('is stable when input order changes', () => {
    const reordered = [...candidates].reverse()
    const a = pickQuestion('user-1:2026-05-08', candidates)
    const b = pickQuestion('user-1:2026-05-08', reordered)
    expect(a).toEqual(b)
  })

  it('changes pick across distinct seeds (sanity)', () => {
    const seeds = [
      'user-1:2026-05-08',
      'user-1:2026-05-09',
      'user-1:2026-05-10',
      'user-2:2026-05-08',
      'user-2:2026-05-09',
      'user-3:2026-05-08',
    ]
    const picks = new Set(
      seeds.map(s => JSON.stringify(pickQuestion(s, candidates)))
    )
    expect(picks.size).toBeGreaterThan(1)
  })

  it('returns the only candidate when there is just one', () => {
    const only = [{ nodeId: 'n1', questionId: 'q1' }]
    expect(pickQuestion('any-seed', only)).toEqual(only[0])
  })
})

describe('flattenCandidates', () => {
  it('flattens questions across nodes', () => {
    const nodes = [
      {
        id: 'n1',
        questions: [{ id: 'q1' }, { id: 'q2' }],
      },
      {
        id: 'n2',
        questions: [{ id: 'q1' }],
      },
    ] as unknown as SkillNode[]
    const out = flattenCandidates(nodes)
    expect(out).toEqual([
      { nodeId: 'n1', questionId: 'q1' },
      { nodeId: 'n1', questionId: 'q2' },
      { nodeId: 'n2', questionId: 'q1' },
    ])
  })

  it('returns an empty array for no nodes', () => {
    expect(flattenCandidates([])).toEqual([])
  })
})
