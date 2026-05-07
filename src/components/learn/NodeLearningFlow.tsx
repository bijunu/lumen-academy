'use client'

import { useState, useCallback } from 'react'
import type { SkillNode } from '@/types/content'
import { FractionWall } from '@/components/scenes/FractionWall'
import { WorkedExample } from './WorkedExample'
import { QuestionShell } from '@/components/questions/QuestionShell'
import { SessionSummary } from './SessionSummary'
import { useSessionTracker } from '@/lib/mastery/sessionTracker'

type FlowPhase = 'scenes' | 'worked-examples' | 'questions' | 'summary'

interface NodeLearningFlowProps {
  node: SkillNode
  onRequestHint: (questionStem: string) => void
}

export function NodeLearningFlow({ node, onRequestHint }: NodeLearningFlowProps) {
  const [phase, setPhase] = useState<FlowPhase>('scenes')
  const [sceneIndex, setSceneIndex] = useState(0)
  const [exampleIndex, setExampleIndex] = useState(0)
  const [questionIndex, setQuestionIndex] = useState(0)
  const tracker = useSessionTracker()

  const advanceScene = useCallback(() => {
    if (sceneIndex < node.scenes.length - 1) {
      setSceneIndex(prev => prev + 1)
    } else if (node.workedExamples.length > 0) {
      setPhase('worked-examples')
    } else {
      setPhase('questions')
    }
  }, [sceneIndex, node.scenes.length, node.workedExamples.length])

  const advanceExample = useCallback(() => {
    if (exampleIndex < node.workedExamples.length - 1) {
      setExampleIndex(prev => prev + 1)
    } else {
      setPhase('questions')
    }
  }, [exampleIndex, node.workedExamples.length])

  const handleQuestionComplete = useCallback(
    (correct: boolean, attemptCount: number) => {
      const question = node.questions[questionIndex]
      tracker.recordAnswer(correct, question.xpValue, attemptCount)

      if (questionIndex < node.questions.length - 1) {
        setQuestionIndex(prev => prev + 1)
      } else {
        setPhase('summary')
      }
    },
    [questionIndex, node.questions, tracker]
  )

  if (phase === 'scenes') {
    const scene = node.scenes[sceneIndex]
    return (
      <div className="space-y-4">
        <header>
          <h2 className="text-lg font-semibold">{scene.title}</h2>
          <p className="text-sm text-muted-foreground">
            Scene {sceneIndex + 1} of {node.scenes.length}
          </p>
        </header>
        {scene.type === 'fraction-wall' ? (
          <FractionWall scene={scene} onComplete={advanceScene} />
        ) : (
          <div className="space-y-3 rounded-lg border p-4">
            <p className="text-sm">{scene.instructions}</p>
            <button
              onClick={advanceScene}
              className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90"
            >
              Continue
            </button>
          </div>
        )}
      </div>
    )
  }

  if (phase === 'worked-examples') {
    return (
      <div className="space-y-4">
        <header>
          <h2 className="text-lg font-semibold">Worked Example</h2>
          <p className="text-sm text-muted-foreground">
            Example {exampleIndex + 1} of {node.workedExamples.length}
          </p>
        </header>
        <WorkedExample
          example={node.workedExamples[exampleIndex]}
          onComplete={advanceExample}
        />
      </div>
    )
  }

  if (phase === 'questions') {
    const question = node.questions[questionIndex]
    return (
      <div className="space-y-4">
        <header>
          <h2 className="text-lg font-semibold">{node.title}</h2>
          <p className="text-sm text-muted-foreground">
            Question {questionIndex + 1} of {node.questions.length}
          </p>
        </header>
        <QuestionShell
          key={question.id}
          question={question}
          misconceptions={node.misconceptions}
          onComplete={handleQuestionComplete}
          onHintRequest={() => onRequestHint(question.stem)}
        />
      </div>
    )
  }

  return (
    <SessionSummary
      nodeTitle={node.title}
      questionsAttempted={tracker.questionsAttempted}
      questionsCorrect={tracker.questionsCorrect}
      xpEarned={tracker.xpEarned}
      streak={tracker.currentStreak}
    />
  )
}
