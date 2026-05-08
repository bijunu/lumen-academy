import { describe, expect, it } from 'vitest'

import { utcDayKey } from './utcDay'

describe('utcDayKey', () => {
  it('formats a UTC date as YYYY-MM-DD', () => {
    expect(utcDayKey(new Date('2026-05-08T12:00:00Z'))).toBe('2026-05-08')
  })

  it('zero-pads single-digit months and days', () => {
    expect(utcDayKey(new Date('2026-01-03T00:00:00Z'))).toBe('2026-01-03')
  })

  it('rolls over at UTC midnight, not local midnight', () => {
    expect(utcDayKey(new Date('2026-05-08T23:59:59Z'))).toBe('2026-05-08')
    expect(utcDayKey(new Date('2026-05-09T00:00:00Z'))).toBe('2026-05-09')
  })

  it('produces the same key for the same UTC day across timezones', () => {
    const morningUtc = new Date('2026-05-08T01:00:00Z')
    const eveningUtc = new Date('2026-05-08T22:00:00Z')
    expect(utcDayKey(morningUtc)).toBe(utcDayKey(eveningUtc))
  })
})
