const WINDOW_MS = 60 * 60 * 1000
const MAX_CALLS_PER_WINDOW = 60

interface UserWindow {
  windowStart: number
  count: number
}

export interface JudgeRateLimiter {
  check(userId: string, now?: Date): boolean
  reset(): void
}

export class InMemoryJudgeRateLimiter implements JudgeRateLimiter {
  private readonly store = new Map<string, UserWindow>()

  constructor(
    private readonly windowMs: number = WINDOW_MS,
    private readonly maxCalls: number = MAX_CALLS_PER_WINDOW
  ) {}

  check(userId: string, now: Date = new Date()): boolean {
    const ts = now.getTime()
    const existing = this.store.get(userId)
    if (!existing || ts - existing.windowStart > this.windowMs) {
      this.store.set(userId, { windowStart: ts, count: 1 })
      return true
    }
    if (existing.count >= this.maxCalls) {
      return false
    }
    existing.count += 1
    return true
  }

  reset(): void {
    this.store.clear()
  }
}

let cached: JudgeRateLimiter | null = null
export function getJudgeRateLimiter(): JudgeRateLimiter {
  if (!cached) cached = new InMemoryJudgeRateLimiter()
  return cached
}
