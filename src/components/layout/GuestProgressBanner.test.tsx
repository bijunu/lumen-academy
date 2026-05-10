import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'

import { GuestProgressBanner } from './GuestProgressBanner'

const mockUseSession = vi.fn()
vi.mock('next-auth/react', () => ({
  useSession: () => mockUseSession(),
}))

beforeEach(() => {
  mockUseSession.mockReset()
})

describe('GuestProgressBanner', () => {
  it('renders nothing while the session is loading', () => {
    mockUseSession.mockReturnValue({ status: 'loading', data: null })
    const { container } = render(<GuestProgressBanner />)
    expect(
      container.querySelector('[data-testid="guest-progress-banner"]')
    ).toBeNull()
  })

  it('renders nothing when the user is authenticated', () => {
    mockUseSession.mockReturnValue({ status: 'authenticated', data: {} })
    const { container } = render(<GuestProgressBanner />)
    expect(
      container.querySelector('[data-testid="guest-progress-banner"]')
    ).toBeNull()
  })

  it('renders the banner with a Sign in CTA when unauthenticated', () => {
    mockUseSession.mockReturnValue({ status: 'unauthenticated', data: null })
    render(<GuestProgressBanner />)
    expect(screen.getByTestId('guest-progress-banner')).toBeTruthy()
    const cta = screen.getByRole('link', { name: /sign in/i })
    expect(cta.getAttribute('href')).toBe('/api/auth/signin')
  })
})
