import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'

import { DailyQuestCard, type DailyQuestState } from './DailyQuestCard'

vi.mock('next/link', () => ({
  default: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href}>{children}</a>
  ),
}))

const NODES: Array<{ id: string; title: string; realm: 'numerica' }> = [
  { id: 'maths-fractions-1', title: 'Equivalent Fractions', realm: 'numerica' },
  { id: 'maths-fractions-2', title: 'Adding Fractions', realm: 'numerica' },
  { id: 'maths-fractions-3', title: 'Comparing Fractions', realm: 'numerica' },
]

const PARTIAL_QUEST = {
  userId: 'u1',
  utcDay: '2026-05-09',
  tasks: [
    {
      nodeId: 'maths-fractions-1',
      kind: 'due-review' as const,
      status: 'complete' as const,
      completedAt: new Date('2026-05-09T09:00:00Z'),
    },
    {
      nodeId: 'maths-fractions-2',
      kind: 'due-review' as const,
      status: 'pending' as const,
      completedAt: null,
    },
    {
      nodeId: 'maths-fractions-3',
      kind: 'new-node' as const,
      status: 'pending' as const,
      completedAt: null,
    },
  ],
  createdAt: new Date('2026-05-09T08:00:00Z'),
  bonusAwardedAt: null,
}

const COMPLETE_QUEST = {
  ...PARTIAL_QUEST,
  tasks: PARTIAL_QUEST.tasks.map(t => ({
    ...t,
    status: 'complete' as const,
    completedAt: new Date('2026-05-09T10:00:00Z'),
  })),
  bonusAwardedAt: new Date('2026-05-09T10:00:00Z'),
}

const partialState: DailyQuestState = {
  kind: 'ready',
  quest: PARTIAL_QUEST,
  nodes: NODES,
}

const completeState: DailyQuestState = {
  kind: 'ready',
  quest: COMPLETE_QUEST,
  nodes: NODES,
}

describe('DailyQuestCard', () => {
  it('shows a sign-in prompt when unauthenticated', () => {
    render(<DailyQuestCard state={{ kind: 'unauthenticated' }} />)
    expect(screen.getByText(/Sign in to start/)).toBeTruthy()
  })

  it('renders the no-content message when no quest is queued', () => {
    render(<DailyQuestCard state={{ kind: 'no-content' }} />)
    expect(screen.getByText(/No quest available today/)).toBeTruthy()
  })

  it('renders three task rows with progress text when partially complete', () => {
    render(<DailyQuestCard state={partialState} />)
    expect(screen.getAllByTestId('daily-quest-task')).toHaveLength(3)
    expect(screen.getByText('1 of 3 done')).toBeTruthy()
    expect(screen.getByText('Equivalent Fractions')).toBeTruthy()
    expect(screen.getByText('New topic')).toBeTruthy()
  })

  it('shows the complete state when every task is done', () => {
    render(<DailyQuestCard state={completeState} />)
    expect(screen.getByTestId('daily-quest-complete')).toBeTruthy()
    expect(screen.getByText(/Quest complete/)).toBeTruthy()
    expect(screen.getByText(/\+30 XP/)).toBeTruthy()
  })

  it('falls back to error message on the error state', () => {
    render(<DailyQuestCard state={{ kind: 'error' }} />)
    expect(screen.getByText(/Could not load the quest/)).toBeTruthy()
  })

  it('links each task to its learn page', () => {
    render(<DailyQuestCard state={partialState} />)
    const link = screen.getByText('Equivalent Fractions').closest('a')
    expect(link?.getAttribute('href')).toBe('/learn/maths-fractions-1')
  })
})
