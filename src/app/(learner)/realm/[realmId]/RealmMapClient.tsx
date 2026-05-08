'use client'

import { useMemo } from 'react'
import type { SkillNode } from '@/types/content'
import type { MasteryLevel, NodeProgress } from '@/types/progress'
import { layoutSkillTree } from '@/lib/skillTree/layout'
import { computeLockState } from '@/lib/skillTree/lockState'
import { SkillTreeMap } from '@/components/skillTree/SkillTreeMap'

interface RealmMapClientProps {
  nodes: SkillNode[]
  progressByNodeId: Record<string, NodeProgress>
  realmLabel: string
}

export function RealmMapClient({
  nodes,
  progressByNodeId,
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

  return (
    <SkillTreeMap
      nodes={nodes}
      layout={layout}
      lockStates={lockStates}
      masteryByNodeId={masteryByNodeId}
      realmLabel={realmLabel}
    />
  )
}
