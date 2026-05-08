import { utcDayKey } from '@/lib/time/utcDay'
import type { SessionRecord } from '@/types/progress'

export const WEEKLY_TIME_DAYS = 7

export interface DailyMinutes {
  day: string
  minutes: number
}

export interface WeeklyTime {
  totalMinutes: number
  dailyMinutes: DailyMinutes[]
}

type WeeklyTimeInput = Pick<SessionRecord, 'startedAt' | 'endedAt'>

export function computeWeeklyTime(
  records: readonly WeeklyTimeInput[],
  weekStart: Date
): WeeklyTime {
  const startUtc = startOfUtcDay(weekStart)
  const dailyMinutes: DailyMinutes[] = []
  for (let i = 0; i < WEEKLY_TIME_DAYS; i++) {
    const d = new Date(startUtc.getTime() + i * 24 * 60 * 60 * 1000)
    dailyMinutes.push({ day: utcDayKey(d), minutes: 0 })
  }
  const indexByDay = new Map(dailyMinutes.map((d, i) => [d.day, i]))
  let total = 0
  for (const record of records) {
    const startedAt =
      record.startedAt instanceof Date
        ? record.startedAt
        : new Date(record.startedAt)
    if (startedAt.getTime() < startUtc.getTime()) continue
    const dayKey = utcDayKey(startedAt)
    const idx = indexByDay.get(dayKey)
    if (idx === undefined) continue
    const minutes = sessionMinutes(record)
    if (minutes <= 0) continue
    dailyMinutes[idx].minutes += minutes
    total += minutes
  }
  return {
    totalMinutes: total,
    dailyMinutes,
  }
}

export function startOfUtcDay(d: Date): Date {
  return new Date(
    Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate())
  )
}

export function startOfWeekUtc(now: Date): Date {
  const todayUtc = startOfUtcDay(now)
  return new Date(todayUtc.getTime() - 6 * 24 * 60 * 60 * 1000)
}

export function formatMinutes(minutes: number): string {
  if (minutes <= 0) return '0 min'
  if (minutes < 60) return `${minutes} min`
  const hours = Math.floor(minutes / 60)
  const rest = minutes % 60
  if (rest === 0) return `${hours}h`
  return `${hours}h ${rest}m`
}

function sessionMinutes(record: WeeklyTimeInput): number {
  if (!record.endedAt) return 0
  const endedAt =
    record.endedAt instanceof Date ? record.endedAt : new Date(record.endedAt)
  const startedAt =
    record.startedAt instanceof Date
      ? record.startedAt
      : new Date(record.startedAt)
  const diffMs = endedAt.getTime() - startedAt.getTime()
  if (diffMs <= 0) return 0
  return Math.round(diffMs / 60000)
}
