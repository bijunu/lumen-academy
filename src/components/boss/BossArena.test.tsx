import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'

import type { Question } from '@/types/content'

import { BossArena, type BossQuestionView } from './BossArena'

function mcQuestion(id: string, stem: string): Question {
  return {
    id,
    type: 'multiple-choice',
    stem,
    tier: 'core',
    xpValue: 10,
    options: ['A', 'B', 'C'],
    correctIndex: 1,
  } as Question
}

function questions(): BossQuestionView[] {
  return [
    { nodeId: 'n1', nodeTitle: 'Equivalent', question: mcQuestion('q1', 'Pick B 1') },
    { nodeId: 'n1', nodeTitle: 'Equivalent', question: mcQuestion('q2', 'Pick B 2') },
    { nodeId: 'n2', nodeTitle: 'Adding', question: mcQuestion('q3', 'Pick B 3') },
    { nodeId: 'n2', nodeTitle: 'Adding', question: mcQuestion('q4', 'Pick B 4') },
    { nodeId: 'n3', nodeTitle: 'Comparing', question: mcQuestion('q5', 'Pick B 5') },
  ]
}

async function answerQuestion(correct: boolean) {
  // Multiple-choice options are rendered as buttons. Index 1 ('B') is correct.
  const target = correct ? screen.getByText('B') : screen.getByText('A')
  fireEvent.click(target)
  // In oneShot mode QuestionShell labels the advance button "Next" when correct
  // and "Done" when incorrect.
  const advance = correct ? screen.getByText('Next') : screen.getByText('Done')
  fireEvent.click(advance)
}

describe('BossArena', () => {
  it('renders the first question and the boss creature', () => {
    const onSubmit = vi.fn().mockResolvedValue(null)
    const onExit = vi.fn()
    render(
      <BossArena
        zoneName="Fractions"
        questions={questions()}
        onSubmit={onSubmit}
        onExit={onExit}
      />
    )
    expect(screen.getByText('Fractions')).toBeTruthy()
    expect(screen.getByText('Pick B 1')).toBeTruthy()
    expect(screen.getByTestId('boss-creature')).toBeTruthy()
  })

  it('submits final answers and renders defeated result on score >= threshold', async () => {
    const onSubmit = vi.fn().mockResolvedValue({
      defeated: true,
      score: 5,
      xpAwarded: 100,
      isFirstDefeat: true,
    })
    const onExit = vi.fn()
    render(
      <BossArena
        zoneName="Fractions"
        questions={questions()}
        onSubmit={onSubmit}
        onExit={onExit}
      />
    )

    for (let i = 0; i < 5; i++) {
      await answerQuestion(true)
    }

    await waitFor(() => {
      expect(screen.getByTestId('boss-result')).toBeTruthy()
    })

    expect(onSubmit).toHaveBeenCalledTimes(1)
    const submitted = onSubmit.mock.calls[0][0] as Array<{
      correct: boolean
      questionId: string
    }>
    expect(submitted).toHaveLength(5)
    expect(submitted.every(a => a.correct)).toBe(true)
    expect(screen.getByText(/boss defeated/)).toBeTruthy()
    expect(screen.getByText(/first defeat bonus/)).toBeTruthy()
  })

  it('renders standing-firm result when below threshold', async () => {
    const onSubmit = vi.fn().mockResolvedValue({
      defeated: false,
      score: 2,
      xpAwarded: 0,
      isFirstDefeat: false,
    })
    const onExit = vi.fn()
    render(
      <BossArena
        zoneName="Fractions"
        questions={questions()}
        onSubmit={onSubmit}
        onExit={onExit}
      />
    )

    for (let i = 0; i < 5; i++) {
      await answerQuestion(i < 2)
    }

    await waitFor(() => {
      expect(screen.getByTestId('boss-result')).toBeTruthy()
    })
    expect(screen.getByText(/stands firm/)).toBeTruthy()
  })

  it('shows an error message when scoring fails', async () => {
    const onSubmit = vi.fn().mockResolvedValue(null)
    const onExit = vi.fn()
    render(
      <BossArena
        zoneName="Fractions"
        questions={questions()}
        onSubmit={onSubmit}
        onExit={onExit}
      />
    )

    for (let i = 0; i < 5; i++) {
      await answerQuestion(true)
    }
    await waitFor(() => {
      expect(screen.getByText(/could not score/i)).toBeTruthy()
    })
  })

  it('forfeit button calls onExit', () => {
    const onSubmit = vi.fn().mockResolvedValue(null)
    const onExit = vi.fn()
    render(
      <BossArena
        zoneName="Fractions"
        questions={questions()}
        onSubmit={onSubmit}
        onExit={onExit}
      />
    )
    fireEvent.click(screen.getByText('Forfeit'))
    expect(onExit).toHaveBeenCalledTimes(1)
  })
})
