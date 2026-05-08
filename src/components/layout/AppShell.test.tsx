import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import { AppShell } from './AppShell'

vi.mock('next/navigation', () => ({
  usePathname: () => '/',
  useRouter: () => ({ push: vi.fn() }),
}))

vi.mock('@/contexts/RightRailContext', () => ({
  useRightRail: () => ({ isOpen: true, toggle: vi.fn(), open: vi.fn(), close: vi.fn(), content: null, setContent: vi.fn() }),
}))

vi.mock('@/components/providers/ThemeProvider', () => ({
  useTheme: () => ({
    mode: 'light',
    setMode: vi.fn(),
    highContrast: false,
    toggleHighContrast: vi.fn(),
    dyslexicFont: false,
    toggleDyslexicFont: vi.fn(),
  }),
}))

vi.mock('next-auth/react', () => ({
  useSession: () => ({ status: 'unauthenticated', data: null }),
}))

describe('AppShell', () => {
  it('renders sidebar, main content, and right rail', () => {
    const { getByTestId, getByText } = render(
      <AppShell>
        <p>Test content</p>
      </AppShell>
    )

    expect(getByTestId('sidebar')).toBeTruthy()
    expect(getByTestId('topbar')).toBeTruthy()
    expect(getByTestId('right-rail')).toBeTruthy()
    expect(getByText('Test content')).toBeTruthy()
  })

  it('renders main content area with correct id for skip link', () => {
    const { container } = render(
      <AppShell>
        <p>Content</p>
      </AppShell>
    )

    expect(container.querySelector('#main-content')).toBeTruthy()
  })
})
