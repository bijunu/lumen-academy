import type { RealmId } from '@/lib/constants/realms'
import { utcDayKey } from '@/lib/time/utcDay'
import type { SkillNode } from '@/types/content'
import type { NodeProgress } from '@/types/progress'

export const STREAK_WINDOW_DAYS = 14

export interface RealmProgress {
  mastered: number
  total: number
}

export type RealmProgressMap = Record<RealmId, RealmProgress>

const EMPTY_REALM_PROGRESS: RealmProgressMap = {
  numerica: { mastered: 0, total: 0 },
  vitalia: { mastered: 0, total: 0 },
  elementia: { mastered: 0, total: 0 },
  mechanica: { mastered: 0, total: 0 },
}

export function computeStreakDays(
  sessionDays: readonly string[],
  now: Date
): boolean[] {
  const active = new Set(sessionDays)
  const out: boolean[] = []
  const todayUtc = Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate()
  )
  for (let offset = STREAK_WINDOW_DAYS - 1; offset >= 0; offset--) {
    const d = new Date(todayUtc - offset * 24 * 60 * 60 * 1000)
    out.push(active.has(utcDayKey(d)))
  }
  return out
}

export function computeRealmProgress(
  progressRows: readonly NodeProgress[],
  allNodes: readonly Pick<SkillNode, 'id' | 'realm'>[]
): RealmProgressMap {
  const totals: RealmProgressMap = {
    numerica: { mastered: 0, total: 0 },
    vitalia: { mastered: 0, total: 0 },
    elementia: { mastered: 0, total: 0 },
    mechanica: { mastered: 0, total: 0 },
  }
  const realmByNode = new Map<string, RealmId>()
  for (const node of allNodes) {
    realmByNode.set(node.id, node.realm)
    totals[node.realm].total += 1
  }
  for (const row of progressRows) {
    if (row.mastery === 'none') continue
    const realm = realmByNode.get(row.nodeId)
    if (!realm) continue
    totals[realm].mastered += 1
  }
  return totals
}

export function emptyRealmProgress(): RealmProgressMap {
  return {
    numerica: { ...EMPTY_REALM_PROGRESS.numerica },
    vitalia: { ...EMPTY_REALM_PROGRESS.vitalia },
    elementia: { ...EMPTY_REALM_PROGRESS.elementia },
    mechanica: { ...EMPTY_REALM_PROGRESS.mechanica },
  }
}
