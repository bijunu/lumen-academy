import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import { Sidebar } from './Sidebar'

vi.mock('next/navigation', () => ({
  usePathname: () => '/',
}))

describe('Sidebar', () => {
  it('renders the Lumen Academy title', () => {
    const { getByText } = render(<Sidebar />)
    expect(getByText('Lumen Academy')).toBeTruthy()
  })

  it('renders all four realm links', () => {
    const { getByText } = render(<Sidebar />)
    expect(getByText('Numerica')).toBeTruthy()
    expect(getByText('Vitalia')).toBeTruthy()
    expect(getByText('Elementia')).toBeTruthy()
    expect(getByText('Mechanica')).toBeTruthy()
  })

  it('renders navigation links', () => {
    const { getByText } = render(<Sidebar />)
    expect(getByText('Home')).toBeTruthy()
    expect(getByText('Badges')).toBeTruthy()
    expect(getByText('Parent')).toBeTruthy()
  })
})
