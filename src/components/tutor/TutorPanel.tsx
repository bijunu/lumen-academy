'use client'

import { useState, useCallback } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { HintButton } from './HintButton'
import type { HintLevel, TutorInput, TutorOutput } from '@/types/tutor'

interface TutorMessage {
  role: 'tutor' | 'system'
  content: string
  hintLevel?: HintLevel
}

interface TutorPanelProps {
  nodeId: string
  nodeTitle: string
  currentQuestionStem?: string
}

const HINT_ESCALATION: HintLevel[] = ['nudge', 'partial', 'worked']

export function TutorPanel({ nodeId, nodeTitle, currentQuestionStem }: TutorPanelProps) {
  const [messages, setMessages] = useState<TutorMessage[]>([
    {
      role: 'system',
      content: `I am here to help you with ${nodeTitle}. Ask for a hint if you get stuck!`,
    },
  ])
  const [hintIndex, setHintIndex] = useState(0)
  const [loading, setLoading] = useState(false)

  const currentLevel = HINT_ESCALATION[Math.min(hintIndex, HINT_ESCALATION.length - 1)]

  const requestHint = useCallback(async () => {
    if (!currentQuestionStem || loading) return

    setLoading(true)

    const input: TutorInput = {
      nodeId,
      nodeTitle,
      questionStem: currentQuestionStem,
      questionType: 'multiple-choice',
      hintLevel: currentLevel,
      previousHints: messages
        .filter(m => m.role === 'tutor')
        .map(m => m.content),
      attemptCount: hintIndex + 1,
      frustrationSignal: hintIndex >= 2,
    }

    try {
      const res = await fetch('/api/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input),
      })

      const result: TutorOutput = await res.json()

      setMessages(prev => [
        ...prev,
        { role: 'tutor', content: result.message, hintLevel: currentLevel },
      ])

      if (result.shouldOfferBreak) {
        setMessages(prev => [
          ...prev,
          {
            role: 'system',
            content: 'It looks like you might want a break. There is no rush. Come back when you are ready.',
          },
        ])
      }

      setHintIndex(prev => Math.min(prev + 1, HINT_ESCALATION.length - 1))
    } catch {
      setMessages(prev => [
        ...prev,
        { role: 'system', content: 'Sorry, I could not get a hint right now. Try again in a moment.' },
      ])
    } finally {
      setLoading(false)
    }
  }, [currentQuestionStem, loading, currentLevel, messages, nodeId, nodeTitle, hintIndex])

  return (
    <div className="flex h-full flex-col">
      <ScrollArea className="flex-1">
        <div className="space-y-3 p-1">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`rounded-lg p-3 text-sm ${
                msg.role === 'tutor'
                  ? 'bg-primary/10 text-foreground'
                  : 'bg-muted text-muted-foreground'
              }`}
            >
              {msg.role === 'tutor' && msg.hintLevel && (
                <span className="mb-1 block text-xs font-semibold uppercase text-primary">
                  {msg.hintLevel}
                </span>
              )}
              {msg.content}
            </div>
          ))}
        </div>
      </ScrollArea>

      {currentQuestionStem && (
        <div className="border-t p-3">
          <HintButton currentLevel={currentLevel} loading={loading} onClick={requestHint} />
        </div>
      )}
    </div>
  )
}
