import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'

import { DailyQuestCard } from './DailyQuestCard'

const mockUseSession = vi.fn()

vi.mock('next-auth/react', () => ({
  useSession: () => mockUseSession(),
}))

vi.mock('next/link', () => ({
  default: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href}>{children}</a>
  ),
}))

const originalFetch = global.fetch

const NODES = [
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
      kind: 'due-review',
      status: 'complete',
      completedAt: new Date('2026-05-09T09:00:00Z').toISOString(),
    },
    {
      nodeId: 'maths-fractions-2',
      kind: 'due-review',
      status: 'pending',
      completedAt: null,
    },
    {
      nodeId: 'maths-fractions-3',
      kind: 'new-node',
      status: 'pending',
      completedAt: null,
    },
  ],
  createdAt: new Date('2026-05-09T08:00:00Z').toISOString(),
  bonusAwardedAt: null,
}

const COMPLETE_QUEST = {
  ...PARTIAL_QUEST,
  tasks: PARTIAL_QUEST.tasks.map(t => ({
    ...t,
    status: 'complete',
    completedAt: new Date('2026-05-09T10:00:00Z').toISOString(),
  })),
  bonusAwardedAt: new Date('2026-05-09T10:00:00Z').toISOString(),
}

beforeEach(() => {
  mockUseSession.mockReset()
})

afterEach(() => {
  global.fetch = originalFetch
})

describe('DailyQuestCard', () => {
  it('shows a sign-in prompt when unauthenticated', () => {
    mockUseSession.mockReturnValue({ status: 'unauthenticated', data: null })
    render(<DailyQuestCard />)
    expect(screen.getByText(/Sign in to start/)).toBeTruthy()
  })

  it('renders the no-content message when the API returns no-content', async () => {
    mockUseSession.mockReturnValue({ status: 'authenticated', data: {} })
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ status: 'no-content' }),
    }) as unknown as typeof fetch
    render(<DailyQuestCard />)
    await waitFor(() => {
      expect(screen.getByText(/No quest available today/)).toBeTruthy()
    })
  })

  it('renders three task rows with progress text when partially complete', async () => {
    mockUseSession.mockReturnValue({ status: 'authenticated', data: {} })
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        status: 'ok',
        quest: PARTIAL_QUEST,
        nodes: NODES,
      }),
    }) as unknown as typeof fetch

    render(<DailyQuestCard />)
    await waitFor(() => {
      expect(screen.getAllByTestId('daily-quest-task')).toHaveLength(3)
    })
    expect(screen.getByText('1 of 3 done')).toBeTruthy()
    expect(screen.getByText('Equivalent Fractions')).toBeTruthy()
    expect(screen.getByText('New topic')).toBeTruthy()
  })

  it('shows the complete state when every task is done', async () => {
    mockUseSession.mockReturnValue({ status: 'authenticated', data: {} })
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        status: 'ok',
        quest: COMPLETE_QUEST,
        nodes: NODES,
      }),
    }) as unknown as typeof fetch

    render(<DailyQuestCard />)
    await waitFor(() => {
      expect(screen.getByTestId('daily-quest-complete')).toBeTruthy()
    })
    expect(screen.getByText(/Quest complete/)).toBeTruthy()
    expect(screen.getByText(/\+30 XP/)).toBeTruthy()
  })

  it('falls back to error message on fetch failure', async () => {
    mockUseSession.mockReturnValue({ status: 'authenticated', data: {} })
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
      json: async () => ({}),
    }) as unknown as typeof fetch

    render(<DailyQuestCard />)
    await waitFor(() => {
      expect(screen.getByText(/Could not load the quest/)).toBeTruthy()
    })
  })

  it('links each task to its learn page', async () => {
    mockUseSession.mockReturnValue({ status: 'authenticated', data: {} })
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        status: 'ok',
        quest: PARTIAL_QUEST,
        nodes: NODES,
      }),
    }) as unknown as typeof fetch

    render(<DailyQuestCard />)
    await waitFor(() => {
      expect(screen.getAllByTestId('daily-quest-task')).toHaveLength(3)
    })
    const link = screen.getByText('Equivalent Fractions').closest('a')
    expect(link?.getAttribute('href')).toBe('/learn/maths-fractions-1')
  })
})
