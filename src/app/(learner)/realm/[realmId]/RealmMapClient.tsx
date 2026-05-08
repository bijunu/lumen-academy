'use client'

import { useMemo } from 'react'
import type { SkillNode } from '@/types/content'
import type { NodeProgress } from '@/types/progress'
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

  return (
    <SkillTreeMap
      nodes={nodes}
      layout={layout}
      lockStates={lockStates}
      realmLabel={realmLabel}
    />
  )
}
