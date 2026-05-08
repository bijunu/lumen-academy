import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import type { TrendPoint } from '@/lib/progress/trend'

import { TrendSparkline } from './TrendSparkline'

function point(day: string, accuracy: number, attempts = 1): TrendPoint {
  return { day, accuracy, attempts }
}

describe('TrendSparkline', () => {
  it('renders nothing when fewer than two points are supplied', () => {
    const { container } = render(
      <TrendSparkline points={[point('2026-05-09', 1)]} />
    )
    expect(container.firstChild).toBeNull()
  })

  it('renders an SVG with one polyline and one circle per point', () => {
    const points = [
      point('2026-05-07', 0.5, 4),
      point('2026-05-08', 0.75, 4),
      point('2026-05-09', 1, 2),
    ]
    render(<TrendSparkline points={points} />)
    const svg = screen.getByTestId('trend-sparkline')
    expect(svg).toBeTruthy()
    expect(svg.querySelectorAll('polyline').length).toBe(1)
    expect(svg.querySelectorAll('circle').length).toBe(3)
    const aria = svg.getAttribute('aria-label') ?? ''
    expect(aria).toContain('Accuracy over 3 days')
    expect(aria).toContain('50%')
    expect(aria).toContain('100%')
  })

  it('uses the provided colour for the polyline stroke', () => {
    const points = [point('2026-05-08', 0.5), point('2026-05-09', 1)]
    render(<TrendSparkline points={points} colour="#22C55E" />)
    const polyline = screen
      .getByTestId('trend-sparkline')
      .querySelector('polyline')
    expect(polyline?.getAttribute('stroke')).toBe('#22C55E')
  })
})
