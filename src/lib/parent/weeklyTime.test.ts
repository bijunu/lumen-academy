import { describe, expect, it } from 'vitest'

import type { SessionRecord } from '@/types/progress'

import {
  computeWeeklyTime,
  formatMinutes,
  startOfWeekUtc,
} from './weeklyTime'

function record(
  startISO: string,
  endISO: string | null
): Pick<SessionRecord, 'startedAt' | 'endedAt'> {
  return {
    startedAt: new Date(startISO),
    endedAt: endISO ? new Date(endISO) : null,
  }
}

describe('computeWeeklyTime', () => {
  const weekStart = new Date('2026-05-03T00:00:00Z') // Sunday
  // 7 day window: 2026-05-03 .. 2026-05-09 inclusive

  it('returns 7 zero-minute days for an empty input', () => {
    const out = computeWeeklyTime([], weekStart)
    expect(out.totalMinutes).toBe(0)
    expect(out.dailyMinutes).toHaveLength(7)
    expect(out.dailyMinutes[0].day).toBe('2026-05-03')
    expect(out.dailyMinutes[6].day).toBe('2026-05-09')
    expect(out.dailyMinutes.every(d => d.minutes === 0)).toBe(true)
  })

  it('sums real session duration into the matching UTC day', () => {
    const out = computeWeeklyTime(
      [
        record('2026-05-09T08:00:00Z', '2026-05-09T08:30:00Z'),
        record('2026-05-09T20:00:00Z', '2026-05-09T20:15:00Z'),
        record('2026-05-07T10:00:00Z', '2026-05-07T10:42:00Z'),
      ],
      weekStart
    )
    expect(out.totalMinutes).toBe(30 + 15 + 42)
    const day9 = out.dailyMinutes.find(d => d.day === '2026-05-09')
    expect(day9?.minutes).toBe(45)
    const day7 = out.dailyMinutes.find(d => d.day === '2026-05-07')
    expect(day7?.minutes).toBe(42)
  })

  it('counts sessions with null endedAt as zero minutes', () => {
    const out = computeWeeklyTime(
      [record('2026-05-09T08:00:00Z', null)],
      weekStart
    )
    expect(out.totalMinutes).toBe(0)
  })

  it('drops sessions started outside the window', () => {
    const out = computeWeeklyTime(
      [
        record('2026-04-01T08:00:00Z', '2026-04-01T08:30:00Z'),
        record('2026-05-10T08:00:00Z', '2026-05-10T08:30:00Z'),
      ],
      weekStart
    )
    expect(out.totalMinutes).toBe(0)
  })

  it('drops sessions where endedAt precedes startedAt', () => {
    const out = computeWeeklyTime(
      [record('2026-05-09T10:00:00Z', '2026-05-09T09:00:00Z')],
      weekStart
    )
    expect(out.totalMinutes).toBe(0)
  })
})

describe('startOfWeekUtc', () => {
  it('returns the UTC day six days before today', () => {
    const out = startOfWeekUtc(new Date('2026-05-09T15:30:00Z'))
    expect(out.toISOString()).toBe('2026-05-03T00:00:00.000Z')
  })
})

describe('formatMinutes', () => {
  it('formats sub-hour values as "N min"', () => {
    expect(formatMinutes(0)).toBe('0 min')
    expect(formatMinutes(45)).toBe('45 min')
  })
  it('formats whole-hour values as "Nh"', () => {
    expect(formatMinutes(60)).toBe('1h')
    expect(formatMinutes(180)).toBe('3h')
  })
  it('formats hour+minute values as "Nh Mm"', () => {
    expect(formatMinutes(75)).toBe('1h 15m')
    expect(formatMinutes(605)).toBe('10h 5m')
  })
})
