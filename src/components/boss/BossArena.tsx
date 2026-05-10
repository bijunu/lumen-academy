'use client'

import { useCallback, useMemo, useState } from 'react'

import { Button } from '@/components/ui/button'
import { QuestionShell } from '@/components/questions/QuestionShell'
import type { ScoreInput } from '@/lib/progress/serverScoring'
import {
  BOSS_PASS_THRESHOLD,
  BOSS_QUESTION_COUNT,
} from '@/types/boss'
import type { Question } from '@/types/content'

import { BossCreature } from './BossCreature'

export interface BossQuestionView {
  nodeId: string
  nodeTitle: string
  question: Question
}

export interface BossAnswer {
  nodeId: string
  questionId: string
  answer?: unknown
  clientCorrect?: boolean
}

export interface BossSubmitResult {
  defeated: boolean
  score: number
  xpAwarded: number
  isFirstDefeat: boolean
}

interface BossArenaProps {
  zoneName: string
  questions: BossQuestionView[]
  passThreshold?: number
  onSubmit: (answers: BossAnswer[]) => Promise<BossSubmitResult | null>
  onExit: () => void
}

export function BossArena({
  zoneName,
  questions,
  passThreshold = BOSS_PASS_THRESHOLD,
  onSubmit,
  onExit,
}: BossArenaProps) {
  const total = questions.length || BOSS_QUESTION_COUNT
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<BossAnswer[]>([])
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState<BossSubmitResult | null>(null)
  const [error, setError] = useState<string | null>(null)

  const [localCorrects, setLocalCorrects] = useState<boolean[]>([])
  const correctSoFar = localCorrects.filter(Boolean).length
  const wrongSoFar = localCorrects.length - correctSoFar
  const hpTotal = total
  const hpRemaining = Math.max(0, hpTotal - correctSoFar)

  const submitAnswers = useMemo(
    () => async (final: BossAnswer[]) => {
      setSubmitting(true)
      setError(null)
      const res = await onSubmit(final)
      setSubmitting(false)
      if (!res) {
        setError('We could not score this attempt. Try again later.')
        return
      }
      setResult(res)
    },
    [onSubmit]
  )

  const handleQuestionComplete = useCallback(
    (correct: boolean, _attemptCount: number, payload: ScoreInput) => {
      const slot = questions[index]
      const next: BossAnswer = {
        nodeId: slot.nodeId,
        questionId: slot.question.id,
        ...(payload.answer !== undefined ? { answer: payload.answer } : {}),
        ...(payload.clientCorrect !== undefined
          ? { clientCorrect: payload.clientCorrect }
          : {}),
      }
      const updated = [...answers, next]
      setAnswers(updated)
      setLocalCorrects(prev => [...prev, correct])
      if (index < questions.length - 1) {
        setIndex(prev => prev + 1)
      } else {
        void submitAnswers(updated)
      }
    },
    [questions, index, answers, submitAnswers]
  )

  if (result) {
    return (
      <BossResultView
        zoneName={zoneName}
        result={result}
        passThreshold={passThreshold}
        total={total}
        onExit={onExit}
      />
    )
  }

  if (questions.length === 0) {
    return (
      <div className="space-y-4 p-6 text-center">
        <p className="text-sm text-muted-foreground">
          No boss questions are available for this zone yet.
        </p>
        <Button onClick={onExit}>Back to realm</Button>
      </div>
    )
  }

  const slot = questions[index]
  return (
    <div className="grid h-full grid-cols-1 gap-6 p-6 lg:grid-cols-[1fr_320px]">
      <div className="space-y-4">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              Boss battle
            </p>
            <h1 className="text-xl font-bold tracking-tight">{zoneName}</h1>
          </div>
          <Button variant="ghost" onClick={onExit}>
            Forfeit
          </Button>
        </header>
        <p className="text-xs uppercase tracking-wide text-muted-foreground">
          Question {index + 1} of {total} &middot; from {slot.nodeTitle}
        </p>
        <div data-testid="boss-question" className="rounded-lg border bg-card p-4">
          <QuestionShell
            key={`${slot.question.id}-${index}`}
            question={slot.question}
            misconceptions={[]}
            onComplete={handleQuestionComplete}
            oneShot
          />
        </div>
        {submitting && (
          <p className="text-sm text-muted-foreground">Scoring battle...</p>
        )}
        {error && (
          <p className="text-sm text-destructive" role="alert">
            {error}
          </p>
        )}
      </div>
      <aside className="flex flex-col items-center justify-center gap-4 rounded-lg border bg-card p-4">
        <BossCreature hpRemaining={hpRemaining} hpTotal={hpTotal} />
        <div className="text-center text-sm">
          <p>
            <span data-testid="boss-correct-count" className="font-semibold">
              {correctSoFar}
            </span>{' '}
            correct
          </p>
          <p className="text-muted-foreground">
            {wrongSoFar} wrong &middot; need {passThreshold} to defeat
          </p>
        </div>
      </aside>
    </div>
  )
}

function BossResultView({
  zoneName,
  result,
  passThreshold,
  total,
  onExit,
}: {
  zoneName: string
  result: BossSubmitResult
  passThreshold: number
  total: number
  onExit: () => void
}) {
  return (
    <div
      className="flex h-full flex-col items-center justify-center gap-6 p-6 text-center"
      data-testid="boss-result"
      data-defeated={result.defeated}
    >
      <BossCreature
        hpRemaining={result.defeated ? 0 : Math.max(0, total - result.score)}
        hpTotal={total}
        defeated={result.defeated}
      />
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">
          {result.defeated
            ? `${zoneName} boss defeated!`
            : `${zoneName} boss stands firm.`}
        </h2>
        <p className="text-muted-foreground">
          You scored {result.score} of {total}. Defeat threshold is{' '}
          {passThreshold}.
        </p>
        {result.defeated && (
          <p className="text-sm">
            +{result.xpAwarded} XP{' '}
            {result.isFirstDefeat
              ? '· first defeat bonus applied'
              : '· repeat defeat reward'}
          </p>
        )}
        {!result.defeated && (
          <p className="text-sm text-muted-foreground">
            Train more in the zone and come back tomorrow.
          </p>
        )}
      </div>
      <Button onClick={onExit}>Back to realm</Button>
    </div>
  )
}
