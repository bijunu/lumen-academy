import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'

import { DailyChallengeCard } from './DailyChallengeCard'

const mockUseSession = vi.fn()
const mockCelebrate = vi.fn()

vi.mock('next-auth/react', () => ({
  useSession: () => mockUseSession(),
}))

vi.mock('@/components/celebration/RewardCelebration', () => ({
  useRewardCelebration: () => ({ celebrate: mockCelebrate }),
}))

const originalFetch = global.fetch

const correctChallenge = {
  userId: 'u1',
  utcDay: '2026-05-09',
  nodeId: 'n1',
  questionId: 'q1',
  status: 'correct' as const,
  createdAt: new Date('2026-05-09T08:00:00Z').toISOString(),
  attemptedAt: new Date('2026-05-09T09:00:00Z').toISOString(),
  xpAwarded: 25,
}

const pendingChallenge = {
  ...correctChallenge,
  status: 'pending' as const,
  attemptedAt: null,
  xpAwarded: 0,
}

const mcQuestion = {
  id: 'q1',
  type: 'multiple-choice',
  stem: 'Which fraction is equivalent to 1/2?',
  tier: 'core',
  options: ['2/3', '3/6', '2/5', '4/6'],
  correctIndex: 1,
  xpValue: 10,
}

beforeEach(() => {
  mockUseSession.mockReset()
  mockCelebrate.mockReset()
})

afterEach(() => {
  global.fetch = originalFetch
})

describe('DailyChallengeCard', () => {
  it('shows a sign-in prompt when unauthenticated', () => {
    mockUseSession.mockReturnValue({ status: 'unauthenticated', data: null })
    render(<DailyChallengeCard />)
    expect(screen.getByText(/Sign in to play/)).toBeTruthy()
  })

  it('shows the no-content message when the API returns no-content', async () => {
    mockUseSession.mockReturnValue({ status: 'authenticated', data: {} })
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ status: 'no-content' }),
    }) as unknown as typeof fetch

    render(<DailyChallengeCard />)
    await waitFor(() => {
      expect(screen.getByText(/No challenge available today/)).toBeTruthy()
    })
  })

  it('renders the terminal correct state when the day is already won', async () => {
    mockUseSession.mockReturnValue({ status: 'authenticated', data: {} })
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        status: 'ok',
        challenge: correctChallenge,
        node: { id: 'n1', title: 'Equivalent Fractions', realm: 'numerica' },
        question: mcQuestion,
        misconceptions: [],
      }),
    }) as unknown as typeof fetch

    render(<DailyChallengeCard />)
    await waitFor(() => {
      expect(screen.getByTestId('daily-challenge-terminal')).toBeTruthy()
    })
    expect(screen.getByText(/Correct\. \+25 XP\./)).toBeTruthy()
  })

  it('renders the question when the challenge is pending', async () => {
    mockUseSession.mockReturnValue({ status: 'authenticated', data: {} })
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        status: 'ok',
        challenge: pendingChallenge,
        node: { id: 'n1', title: 'Equivalent Fractions', realm: 'numerica' },
        question: mcQuestion,
        misconceptions: [],
      }),
    }) as unknown as typeof fetch

    render(<DailyChallengeCard />)
    await waitFor(() => {
      expect(screen.getByText(mcQuestion.stem)).toBeTruthy()
    })
    expect(screen.getByText('From Equivalent Fractions')).toBeTruthy()
  })

  it('locks the card and POSTs after a correct answer, celebrating any badge unlocks', async () => {
    mockUseSession.mockReturnValue({ status: 'authenticated', data: {} })
    const fetchMock = vi
      .fn()
      // GET
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          status: 'ok',
          challenge: pendingChallenge,
          node: { id: 'n1', title: 'Equivalent Fractions', realm: 'numerica' },
          question: mcQuestion,
          misconceptions: [],
        }),
      })
      // POST
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          challenge: correctChallenge,
          badgeUnlocks: ['polymath'],
        }),
      })
    global.fetch = fetchMock as unknown as typeof fetch

    render(<DailyChallengeCard />)
    await waitFor(() => {
      expect(screen.getByText('3/6')).toBeTruthy()
    })

    fireEvent.click(screen.getByText('3/6'))
    fireEvent.click(screen.getByText('Next'))

    await waitFor(() => {
      expect(screen.getByTestId('daily-challenge-terminal')).toBeTruthy()
    })

    const postCall = fetchMock.mock.calls.find(
      ([url, init]) =>
        url === '/api/daily-challenge' &&
        (init as RequestInit | undefined)?.method === 'POST'
    )
    expect(postCall).toBeTruthy()
    expect(JSON.parse((postCall![1] as RequestInit).body as string)).toEqual({
      correct: true,
    })

    await waitFor(() => {
      expect(mockCelebrate).toHaveBeenCalledWith({
        type: 'badge-unlock',
        badgeId: 'polymath',
      })
    })
  })

  it('falls back to an error message when the GET fails', async () => {
    mockUseSession.mockReturnValue({ status: 'authenticated', data: {} })
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
      json: async () => ({}),
    }) as unknown as typeof fetch

    render(<DailyChallengeCard />)
    await waitFor(() => {
      expect(screen.getByText(/Could not load the challenge/)).toBeTruthy()
    })
  })
})
