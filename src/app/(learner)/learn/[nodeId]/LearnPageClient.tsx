'use client'

import { useState, useCallback, useEffect } from 'react'
import type { SkillNode } from '@/types/content'
import { NodeLearningFlow } from '@/components/learn/NodeLearningFlow'
import { TutorPanel } from '@/components/tutor/TutorPanel'
import { useRightRail } from '@/contexts/RightRailContext'

interface LearnPageClientProps {
  node: SkillNode
}

export function LearnPageClient({ node }: LearnPageClientProps) {
  const [currentQuestionStem, setCurrentQuestionStem] = useState<string | undefined>()
  const { open, setContent } = useRightRail()

  useEffect(() => {
    setContent(
      <TutorPanel
        nodeId={node.id}
        nodeTitle={node.title}
        currentQuestionStem={currentQuestionStem}
      />
    )
    return () => setContent(null)
  }, [node.id, node.title, currentQuestionStem, setContent])

  const handleHintRequest = useCallback(
    (stem: string) => {
      setCurrentQuestionStem(stem)
      open()
    },
    [open]
  )

  return <NodeLearningFlow node={node} onRequestHint={handleHintRequest} />
}
