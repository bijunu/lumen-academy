import { describe, it, expect } from 'vitest'
import { scheduleNext } from './sm2'
import type { SpacedRepetitionCard } from '@/types/progress'

const FRESH_CARD: SpacedRepetitionCard = {
  interval: 0,
  repetition: 0,
  easeFactor: 2.5,
}

const NOW = new Date('2026-05-08T12:00:00.000Z')
const MS_PER_DAY = 24 * 60 * 60 * 1000

describe('scheduleNext', () => {
  it('first successful review schedules one day out', () => {
    const result = scheduleNext(FRESH_CARD, 5, NOW)
    expect(result.repetition).toBe(1)
    expect(result.interval).toBe(1)
    expect(result.nextReviewAt.getTime()).toBe(NOW.getTime() + MS_PER_DAY)
  })

  it('second successful review schedules six days out', () => {
    const after1 = scheduleNext(FRESH_CARD, 5, NOW)
    const after2 = scheduleNext(after1, 5, after1.nextReviewAt)
    expect(after2.repetition).toBe(2)
    expect(after2.interval).toBe(6)
  })

  it('third successful review uses prevInterval times ease factor', () => {
    const after1 = scheduleNext(FRESH_CARD, 4, NOW)
    const after2 = scheduleNext(after1, 4, after1.nextReviewAt)
    const after3 = scheduleNext(after2, 4, after2.nextReviewAt)
    expect(after3.repetition).toBe(3)
    expect(after3.interval).toBe(Math.round(after2.interval * after3.easeFactor))
  })

  it('failure resets repetition and interval but keeps card learnable', () => {
    const after1 = scheduleNext(FRESH_CARD, 5, NOW)
    const failed = scheduleNext(after1, 1, after1.nextReviewAt)
    expect(failed.repetition).toBe(0)
    expect(failed.interval).toBe(1)
    expect(failed.easeFactor).toBeLessThan(after1.easeFactor)
  })

  it('ease factor is clamped at 1.3 floor', () => {
    let card: SpacedRepetitionCard = { ...FRESH_CARD }
    let when = NOW
    for (let i = 0; i < 20; i++) {
      const r = scheduleNext(card, 0, when)
      card = r
      when = r.nextReviewAt
    }
    expect(card.easeFactor).toBeCloseTo(1.3, 5)
  })

  it('quality 3 is the lowest passing grade', () => {
    const result = scheduleNext(FRESH_CARD, 3, NOW)
    expect(result.repetition).toBe(1)
    expect(result.interval).toBe(1)
  })

  it('quality 2 is a failure', () => {
    const after1 = scheduleNext(FRESH_CARD, 5, NOW)
    const result = scheduleNext(after1, 2, after1.nextReviewAt)
    expect(result.repetition).toBe(0)
    expect(result.interval).toBe(1)
  })

  it('ease factor moves up on perfect recall', () => {
    const result = scheduleNext(FRESH_CARD, 5, NOW)
    expect(result.easeFactor).toBeGreaterThan(FRESH_CARD.easeFactor)
  })

  it('ease factor unchanged on quality 4', () => {
    const result = scheduleNext(FRESH_CARD, 4, NOW)
    expect(result.easeFactor).toBeCloseTo(FRESH_CARD.easeFactor, 10)
  })
})
