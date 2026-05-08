import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'

import { WeakSpotsCard } from './WeakSpotsCard'

const mockUseSession = vi.fn()

vi.mock('next-auth/react', () => ({
  useSession: () => mockUseSession(),
}))

const originalFetch = global.fetch

beforeEach(() => {
  mockUseSession.mockReset()
})

afterEach(() => {
  global.fetch = originalFetch
})

describe('WeakSpotsCard', () => {
  it('shows a sign-in prompt when unauthenticated', () => {
    mockUseSession.mockReturnValue({ status: 'unauthenticated', data: null })
    render(<WeakSpotsCard />)
    expect(screen.getByText(/Sign in to see your weak spots/)).toBeTruthy()
  })

  it('renders weak spot rows linking to /learn/[nodeId]', async () => {
    mockUseSession.mockReturnValue({ status: 'authenticated', data: {} })
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        spots: [
          {
            nodeId: 'maths-fractions-equivalent',
            title: 'Equivalent Fractions',
            realm: 'numerica',
            accuracy: 0.5,
            totalAttempts: 4,
            lastAttemptAt: '2026-05-08T12:00:00Z',
          },
          {
            nodeId: 'biology-cells',
            title: 'Cell Parts',
            realm: 'vitalia',
            accuracy: 0.66,
            totalAttempts: 3,
            lastAttemptAt: '2026-05-07T12:00:00Z',
          },
        ],
      }),
    }) as unknown as typeof fetch

    render(<WeakSpotsCard />)

    await waitFor(() => {
      expect(screen.getAllByTestId('weak-spot').length).toBe(2)
    })
    expect(screen.getByText(/Equivalent Fractions/)).toBeTruthy()
    expect(screen.getByText(/Cell Parts/)).toBeTruthy()
    expect(screen.getByText(/50% so far/)).toBeTruthy()
    const equivalentLink = screen.getByText('Equivalent Fractions')
    expect(equivalentLink.getAttribute('href')).toBe(
      '/learn/maths-fractions-equivalent'
    )
  })

  it('renders the empty state when there are no spots', async () => {
    mockUseSession.mockReturnValue({ status: 'authenticated', data: {} })
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ spots: [] }),
    }) as unknown as typeof fetch

    render(<WeakSpotsCard />)

    await waitFor(() => {
      expect(screen.getByText(/Nothing due right now/)).toBeTruthy()
    })
  })

  it('falls back to an error message when the GET fails', async () => {
    mockUseSession.mockReturnValue({ status: 'authenticated', data: {} })
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
      json: async () => ({}),
    }) as unknown as typeof fetch

    render(<WeakSpotsCard />)

    await waitFor(() => {
      expect(screen.getByText(/Could not load weak spots/)).toBeTruthy()
    })
  })
})
