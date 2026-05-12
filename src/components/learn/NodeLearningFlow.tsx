'use client'

import { useMemo, useState, useCallback, useEffect, useRef } from 'react'
import { useSession } from 'next-auth/react'
import type { SkillNode } from '@/types/content'
import type { HintLevel } from '@/types/tutor'
import { FractionWall } from '@/components/scenes/FractionWall'
import { LabelledDiagram } from '@/components/scenes/LabelledDiagram'
import { LessonPhaseStrip, type LessonPhaseStep } from './LessonPhaseStrip'
import { LessonSection } from './LessonSection'
import { WorkedExample } from './WorkedExample'
import { QuestionShell } from '@/components/questions/QuestionShell'
import { SessionSummary } from './SessionSummary'
import { useSessionTracker } from '@/lib/mastery/sessionTracker'
import {
  judgeFreeTextAnswer,
  judgeMissingStepAnswer,
  postAttempt,
  postSession,
} from '@/lib/progress/client'
import type { ScoreInput } from '@/lib/progress/serverScoring'
import { useRewardCelebration } from '@/components/celebration/RewardCelebration'
import {
  DAILY_QUEST_BONUS_SPARK,
  DAILY_QUEST_BONUS_XP,
} from '@/types/dailyQuest'

type FlowPhase = 'scenes' | 'worked-examples' | 'questions' | 'summary'

interface NodeLearningFlowProps {
  node: SkillNode
  onRequestHint: (questionStem: string) => void
  lookupHintLevel?: (questionStem: string) => HintLevel | undefined
}

export function NodeLearningFlow({
  node,
  onRequestHint,
  lookupHintLevel,
}: NodeLearningFlowProps) {
  const [phase, setPhase] = useState<FlowPhase>('scenes')
  const [sceneIndex, setSceneIndex] = useState(0)
  const [exampleIndex, setExampleIndex] = useState(0)
  const [questionIndex, setQuestionIndex] = useState(0)
  const tracker = useSessionTracker()
  const { status } = useSession()
  const { celebrate } = useRewardCelebration()
  const startedAtRef = useRef<Date>(new Date())
  const sessionPostedRef = useRef(false)
  const firstTryStreakRef = useRef<{ tier: string | null; count: number }>({
    tier: null,
    count: 0,
  })

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
    (correct: boolean, attemptCount: number, payload: ScoreInput) => {
      const question = node.questions[questionIndex]
      tracker.recordAnswer(correct, question.xpValue, attemptCount, question.tier)

      if (status === 'authenticated') {
        const hintLevel = lookupHintLevel?.(question.stem)
        postAttempt({
          nodeId: node.id,
          questionId: question.id,
          attemptCount,
          ...(hintLevel ? { hintLevel } : {}),
          ...(payload.answer !== undefined ? { answer: payload.answer } : {}),
          ...(payload.clientCorrect !== undefined
            ? { clientCorrect: payload.clientCorrect }
            : {}),
        }).then(response => {
          if (!response) return
          if (response.masteryUpgraded) {
            celebrate({
              type: 'mastery-upgrade',
              level: response.progress.mastery,
              nodeTitle: node.title,
            })
          }
          for (const badgeId of response.badgeUnlocks) {
            celebrate({ type: 'badge-unlock', badgeId })
          }
        })
      }

      // Adaptive ordering: after two consecutive first-try corrects at the
      // current tier, skip past the rest of that tier's questions and jump
      // to the first question of the next-higher tier. Resets on any wrong
      // answer or multi-attempt answer.
      const streak = firstTryStreakRef.current
      const firstTryCorrect = correct && attemptCount === 1
      if (firstTryCorrect) {
        if (streak.tier === question.tier) {
          streak.count += 1
        } else {
          streak.tier = question.tier
          streak.count = 1
        }
      } else {
        streak.tier = null
        streak.count = 0
      }

      const tierRank: Record<string, number> = {
        core: 0,
        confident: 1,
        challenge: 2,
      }
      const currentRank = tierRank[question.tier] ?? 0
      let nextIdx = questionIndex + 1
      if (streak.count >= 2 && currentRank < 2) {
        const skipToIdx = node.questions.findIndex(
          (q, i) =>
            i > questionIndex && (tierRank[q.tier] ?? 0) > currentRank
        )
        if (skipToIdx > nextIdx) {
          nextIdx = skipToIdx
          streak.tier = null
          streak.count = 0
        }
      }

      if (nextIdx < node.questions.length) {
        setQuestionIndex(nextIdx)
      } else {
        setPhase('summary')
      }
    },
    [
      questionIndex,
      node.id,
      node.title,
      node.questions,
      status,
      tracker,
      lookupHintLevel,
      celebrate,
    ]
  )

  useEffect(() => {
    if (phase !== 'summary') return
    if (status !== 'authenticated') return
    if (sessionPostedRef.current) return
    sessionPostedRef.current = true
    postSession({
      startedAt: startedAtRef.current,
      endedAt: new Date(),
      nodeIds: [node.id],
      questionsAttempted: tracker.questionsAttempted,
      questionsCorrect: tracker.questionsCorrect,
      xpEarned: tracker.xpEarned,
      masteryChanges: [],
    }).then(response => {
      if (!response) return
      if (response.questCompleted) {
        celebrate({
          type: 'quest-complete',
          xp: DAILY_QUEST_BONUS_XP,
          spark: DAILY_QUEST_BONUS_SPARK,
        })
      }
      for (const badgeId of response.badgeUnlocks) {
        celebrate({ type: 'badge-unlock', badgeId })
      }
    })
  }, [
    phase,
    status,
    node.id,
    tracker.questionsAttempted,
    tracker.questionsCorrect,
    tracker.xpEarned,
    celebrate,
  ])

  const realmAccent = `hsl(var(--realm-${node.realm}))`

  const phases = useMemo<LessonPhaseStep[]>(() => {
    const list: LessonPhaseStep[] = [{ id: 'scenes', label: 'Explore' }]
    if (node.workedExamples.length > 0) {
      list.push({ id: 'worked-examples', label: 'Worked example' })
    }
    list.push({ id: 'questions', label: 'Practice' })
    list.push({ id: 'summary', label: 'Summary' })
    return list
  }, [node.workedExamples.length])

  const phaseStrip = (
    <LessonPhaseStrip phases={phases} activeId={phase} realmAccent={realmAccent} />
  )

  if (phase === 'scenes') {
    const scene = node.scenes[sceneIndex]
    return (
      <div className="space-y-5">
        {phaseStrip}
        <LessonSection
          kind="Explore the idea"
          title={scene.title}
          position={`Scene ${sceneIndex + 1} of ${node.scenes.length}`}
          realmAccent={realmAccent}
        >
          {scene.type === 'fraction-wall' ? (
            <FractionWall scene={scene} onComplete={advanceScene} />
          ) : scene.type === 'labelled-diagram' ? (
            <LabelledDiagram
              scene={scene}
              onComplete={advanceScene}
              realmAccent={realmAccent}
            />
          ) : (
            <div className="space-y-4">
              <p className="text-base text-foreground">{scene.instructions}</p>
              <button
                onClick={advanceScene}
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                style={{ backgroundColor: realmAccent }}
              >
                Continue
                <span aria-hidden>→</span>
              </button>
            </div>
          )}
        </LessonSection>
      </div>
    )
  }

  if (phase === 'worked-examples') {
    return (
      <div className="space-y-5">
        {phaseStrip}
        <LessonSection
          kind="See it done"
          title={node.workedExamples[exampleIndex].title}
          position={`Example ${exampleIndex + 1} of ${node.workedExamples.length}`}
          realmAccent={realmAccent}
        >
          <WorkedExample
            example={node.workedExamples[exampleIndex]}
            onComplete={advanceExample}
            realmAccent={realmAccent}
          />
        </LessonSection>
      </div>
    )
  }

  if (phase === 'questions') {
    const question = node.questions[questionIndex]
    return (
      <div className="space-y-5">
        {phaseStrip}
        <LessonSection
          kind="Your turn"
          title={node.title}
          position={`Question ${questionIndex + 1} of ${node.questions.length}`}
          realmAccent={realmAccent}
        >
          <QuestionShell
            key={question.id}
            question={question}
            misconceptions={node.misconceptions}
            onComplete={handleQuestionComplete}
            onHintRequest={
              status === 'authenticated'
                ? () => onRequestHint(question.stem)
                : undefined
            }
            onJudgeFreeText={
              status === 'authenticated'
                ? async answer =>
                    judgeFreeTextAnswer({
                      nodeId: node.id,
                      questionId: question.id,
                      answer,
                    })
                : undefined
            }
            onJudgeMissingStep={
              status === 'authenticated'
                ? async answer =>
                    judgeMissingStepAnswer({
                      nodeId: node.id,
                      questionId: question.id,
                      answer,
                    })
                : undefined
            }
            realmAccent={realmAccent}
          />
        </LessonSection>
      </div>
    )
  }

  return (
    <div className="space-y-5">
      {phaseStrip}
      <SessionSummary
        nodeId={node.id}
        nodeTitle={node.title}
        realm={node.realm}
        questionsAttempted={tracker.questionsAttempted}
        questionsCorrect={tracker.questionsCorrect}
        xpEarned={tracker.xpEarned}
        streak={tracker.currentStreak}
      />
    </div>
  )
}
