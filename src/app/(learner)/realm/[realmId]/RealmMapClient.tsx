'use client'

import { useMemo } from 'react'
import type { SkillNode } from '@/types/content'
import type { MasteryLevel, NodeProgress } from '@/types/progress'
import { layoutSkillTree } from '@/lib/skillTree/layout'
import { computeLockState } from '@/lib/skillTree/lockState'
import {
  SkillTreeMap,
  type BossMarkerState,
} from '@/components/skillTree/SkillTreeMap'
import { isBossEligible } from '@/lib/boss/bossEligibility'

interface RealmMapClientProps {
  nodes: SkillNode[]
  progressByNodeId: Record<string, NodeProgress>
  defeatedZoneIds: string[]
  realmLabel: string
}

export function RealmMapClient({
  nodes,
  progressByNodeId,
  defeatedZoneIds,
  realmLabel,
}: RealmMapClientProps) {
  const layout = useMemo(() => layoutSkillTree(nodes), [nodes])
  const lockStates = useMemo(
    () =>
      computeLockState(nodes, new Map(Object.entries(progressByNodeId))),
    [nodes, progressByNodeId]
  )
  const masteryByNodeId = useMemo(() => {
    const map = new Map<string, MasteryLevel>()
    for (const [id, p] of Object.entries(progressByNodeId)) {
      map.set(id, p.mastery)
    }
    return map
  }, [progressByNodeId])

  const bossesByZoneId = useMemo(() => {
    const progressMap = new Map(Object.entries(progressByNodeId))
    const defeatedSet = new Set(defeatedZoneIds)
    const byZone = new Map<string, SkillNode[]>()
    for (const node of nodes) {
      const arr = byZone.get(node.zoneId) ?? []
      arr.push(node)
      byZone.set(node.zoneId, arr)
    }
    const out = new Map<string, BossMarkerState>()
    Array.from(byZone.entries()).forEach(([zoneId, zoneNodes]) => {
      const eligible = isBossEligible(zoneNodes, progressMap)
      const defeated = defeatedSet.has(zoneId)
      out.set(zoneId, { eligible, defeated })
    })
    return out
  }, [nodes, progressByNodeId, defeatedZoneIds])

  return (
    <SkillTreeMap
      nodes={nodes}
      layout={layout}
      lockStates={lockStates}
      masteryByNodeId={masteryByNodeId}
      bossesByZoneId={bossesByZoneId}
      realmLabel={realmLabel}
    />
  )
}
