import { describe, expect, it } from 'vitest'

import type { Attempt } from '@/types/progress'

import { computeTrend } from './trend'

const NOW = new Date('2026-05-09T12:00:00Z')

function attempt(
  iso: string,
  correct: boolean
): Pick<Attempt, 'correct' | 'answeredAt'> {
  return { correct, answeredAt: new Date(iso) }
}

describe('computeTrend', () => {
  it('returns one point per UTC day with accuracy and attempt count', () => {
    const out = computeTrend(
      [
        attempt('2026-05-09T08:00:00Z', true),
        attempt('2026-05-09T09:00:00Z', false),
        attempt('2026-05-08T10:00:00Z', true),
      ],
      10,
      NOW
    )
    expect(out).toEqual([
      { day: '2026-05-08', accuracy: 1, attempts: 1 },
      { day: '2026-05-09', accuracy: 0.5, attempts: 2 },
    ])
  })

  it('returns ascending day order', () => {
    const out = computeTrend(
      [
        attempt('2026-05-09T08:00:00Z', true),
        attempt('2026-05-04T08:00:00Z', true),
        attempt('2026-05-07T08:00:00Z', true),
      ],
      10,
      NOW
    )
    expect(out.map(p => p.day)).toEqual([
      '2026-05-04',
      '2026-05-07',
      '2026-05-09',
    ])
  })

  it('drops attempts older than the cutoff window', () => {
    const out = computeTrend(
      [
        attempt('2026-05-09T08:00:00Z', true),
        attempt('2026-04-01T08:00:00Z', true),
      ],
      10,
      NOW
    )
    expect(out.map(p => p.day)).toEqual(['2026-05-09'])
  })

  it('drops attempts dated after now (clock skew safety)', () => {
    const out = computeTrend(
      [
        attempt('2026-05-09T08:00:00Z', true),
        attempt('2099-01-01T00:00:00Z', true),
      ],
      10,
      NOW
    )
    expect(out.map(p => p.day)).toEqual(['2026-05-09'])
  })

  it('coerces ISO string answeredAt values', () => {
    const raw = [
      {
        correct: true,
        answeredAt: '2026-05-09T08:00:00Z' as unknown as Date,
      },
    ]
    const out = computeTrend(raw, 10, NOW)
    expect(out).toEqual([{ day: '2026-05-09', accuracy: 1, attempts: 1 }])
  })

  it('returns empty array for empty input', () => {
    expect(computeTrend([], 10, NOW)).toEqual([])
  })

  it('returns empty array when days <= 0', () => {
    const data = [attempt('2026-05-09T08:00:00Z', true)]
    expect(computeTrend(data, 0, NOW)).toEqual([])
    expect(computeTrend(data, -1, NOW)).toEqual([])
  })
})
