import { utcDayKey } from '@/lib/time/utcDay'
import type { Attempt } from '@/types/progress'

export const TREND_DEFAULT_DAYS = 10

export interface TrendPoint {
  day: string
  accuracy: number
  attempts: number
}

type TrendInput = Pick<Attempt, 'correct' | 'answeredAt'>

export function computeTrend(
  attempts: readonly TrendInput[],
  days: number = TREND_DEFAULT_DAYS,
  now: Date = new Date()
): TrendPoint[] {
  if (days <= 0) return []
  const cutoff = new Date(now.getTime() - days * 24 * 60 * 60 * 1000)
  const buckets = new Map<string, { correct: number; total: number }>()
  for (const a of attempts) {
    const at = a.answeredAt instanceof Date ? a.answeredAt : new Date(a.answeredAt)
    if (at.getTime() < cutoff.getTime()) continue
    if (at.getTime() > now.getTime()) continue
    const key = utcDayKey(at)
    const bucket = buckets.get(key) ?? { correct: 0, total: 0 }
    bucket.total += 1
    if (a.correct) bucket.correct += 1
    buckets.set(key, bucket)
  }
  return Array.from(buckets.entries())
    .map(([day, b]) => ({
      day,
      accuracy: b.total > 0 ? b.correct / b.total : 0,
      attempts: b.total,
    }))
    .sort((a, b) => (a.day < b.day ? -1 : a.day > b.day ? 1 : 0))
}
