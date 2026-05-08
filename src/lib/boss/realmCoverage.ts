import type { RealmId } from '@/lib/constants/realms'

export interface RealmCoverage {
  defeated: number
  total: number
}

export type RealmZoneCoverage = Record<RealmId, RealmCoverage>

export interface RealmZonesByRealm {
  numerica: readonly string[]
  vitalia: readonly string[]
  elementia: readonly string[]
  mechanica: readonly string[]
}

export function realmZoneCoverage(
  defeatedZoneIds: readonly string[],
  zonesByRealm: RealmZonesByRealm
): RealmZoneCoverage {
  const defeatedSet = new Set(defeatedZoneIds)
  const realmIds: RealmId[] = ['numerica', 'vitalia', 'elementia', 'mechanica']
  return realmIds.reduce((acc, r) => {
    const zones = zonesByRealm[r] ?? []
    const total = zones.length
    let defeated = 0
    for (const z of zones) {
      if (defeatedSet.has(z)) defeated++
    }
    acc[r] = { defeated, total }
    return acc
  }, {} as RealmZoneCoverage)
}
