'use client'

import { useState, useCallback, useEffect } from 'react'
import type { SkillNode } from '@/types/content'
import type { HintLevel } from '@/types/tutor'
import { BackLink } from '@/components/layout/BackLink'
import { NodeLearningFlow } from '@/components/learn/NodeLearningFlow'
import { TutorPanel } from '@/components/tutor/TutorPanel'
import { useRightRail } from '@/contexts/RightRailContext'
import { REALMS } from '@/lib/constants/realms'

interface LearnPageClientProps {
  node: SkillNode
}

export function LearnPageClient({ node }: LearnPageClientProps) {
  const [currentQuestionStem, setCurrentQuestionStem] = useState<string | undefined>()
  const [hintLevelByStem, setHintLevelByStem] = useState<Record<string, HintLevel>>({})
  const { open, setContent } = useRightRail()

  const handleHintConsumed = useCallback(
    (level: HintLevel) => {
      if (!currentQuestionStem) return
      setHintLevelByStem(prev => ({ ...prev, [currentQuestionStem]: level }))
    },
    [currentQuestionStem]
  )

  const lookupHintLevel = useCallback(
    (stem: string) => hintLevelByStem[stem],
    [hintLevelByStem]
  )

  useEffect(() => {
    setContent(
      <TutorPanel
        nodeId={node.id}
        nodeTitle={node.title}
        currentQuestionStem={currentQuestionStem}
        onHintConsumed={handleHintConsumed}
      />
    )
    return () => setContent(null)
  }, [node.id, node.title, currentQuestionStem, handleHintConsumed, setContent])

  const handleHintRequest = useCallback(
    (stem: string) => {
      setCurrentQuestionStem(stem)
      open()
    },
    [open]
  )

  const realm = REALMS[node.realm]

  return (
    <div className="space-y-4">
      <BackLink href={`/realm/${realm.id}`} label={`Back to ${realm.label}`} />
      <h1 className="text-2xl font-bold tracking-tight">{node.title}</h1>
      <NodeLearningFlow
        node={node}
        onRequestHint={handleHintRequest}
        lookupHintLevel={lookupHintLevel}
      />
    </div>
  )
}
