import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'

import { ScholarStatusPill } from './ScholarStatusPill'

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

describe('ScholarStatusPill', () => {
  it('renders nothing when the user is unauthenticated', () => {
    mockUseSession.mockReturnValue({ status: 'unauthenticated', data: null })
    const { container } = render(<ScholarStatusPill />)
    expect(container.querySelector('[data-testid="scholar-pill"]')).toBeNull()
  })

  it('renders rank, XP, insight, and spark when authenticated', async () => {
    mockUseSession.mockReturnValue({ status: 'authenticated', data: {} })
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        profile: {
          userId: 'u1',
          xpTotal: 145,
          xpByRealm: { numerica: 120, vitalia: 25, elementia: 0, mechanica: 0 },
          currencies: { insight: 12, spark: 3 },
          updatedAt: null,
        },
        ranks: {
          overall: 1,
          byRealm: { numerica: 1, vitalia: 0, elementia: 0, mechanica: 0 },
        },
      }),
    }) as unknown as typeof fetch

    render(<ScholarStatusPill />)

    await waitFor(() => {
      expect(screen.getByTestId('scholar-pill')).toBeTruthy()
    })
    expect(screen.getByText(/Rank 1/)).toBeTruthy()
    expect(screen.getByText(/145 XP/)).toBeTruthy()
    expect(screen.getByLabelText('12 insight')).toBeTruthy()
    expect(screen.getByLabelText('3 spark')).toBeTruthy()
  })

  it('stays hidden when the profile fetch fails', async () => {
    mockUseSession.mockReturnValue({ status: 'authenticated', data: {} })
    global.fetch = vi
      .fn()
      .mockResolvedValue({ ok: false, json: async () => ({}) }) as unknown as typeof fetch

    const { container } = render(<ScholarStatusPill />)
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalled()
    })
    expect(container.querySelector('[data-testid="scholar-pill"]')).toBeNull()
  })
})
