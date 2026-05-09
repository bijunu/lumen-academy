import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import { Sketch, pointsMatch } from './Sketch'
import type { SketchQuestion } from '@/types/content'

describe('pointsMatch', () => {
  it('returns true for equal sets regardless of order', () => {
    expect(pointsMatch([[1, 2], [3, 4]], [[3, 4], [1, 2]])).toBe(true)
  })

  it('returns false when lengths differ', () => {
    expect(pointsMatch([[1, 2]], [[1, 2], [3, 4]])).toBe(false)
  })

  it('returns false when a point differs', () => {
    expect(pointsMatch([[1, 2], [3, 5]], [[3, 4], [1, 2]])).toBe(false)
  })

  it('returns true when both are empty', () => {
    expect(pointsMatch([], [])).toBe(true)
  })
})

const baseQuestion: SketchQuestion = {
  id: 'sk-q1',
  type: 'sketch',
  stem: 'Plot the point (4, 3) on the grid.',
  tier: 'core',
  gridConfig: { xMin: 0, xMax: 6, yMin: 0, yMax: 6 },
  correctPoints: [[4, 3]],
  xpValue: 15,
}

describe('Sketch', () => {
  it('renders an SVG with an aria-label describing the grid bounds', () => {
    const { getByLabelText } = render(
      <Sketch question={baseQuestion} disabled={false} onSubmit={vi.fn()} />
    )
    expect(getByLabelText('Coordinate grid from (0, 0) to (6, 6)')).toBeTruthy()
  })

  it('disables the submit button when no points are placed', () => {
    const { getByText } = render(
      <Sketch question={baseQuestion} disabled={false} onSubmit={vi.fn()} />
    )
    expect((getByText('Submit') as HTMLButtonElement).disabled).toBe(true)
  })

  it('disables the submit button when the disabled prop is true', () => {
    const { getByText } = render(
      <Sketch question={baseQuestion} disabled={true} onSubmit={vi.fn()} />
    )
    expect((getByText('Submit') as HTMLButtonElement).disabled).toBe(true)
  })
})
