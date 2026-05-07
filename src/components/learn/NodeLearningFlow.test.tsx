import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import { NodeLearningFlow } from './NodeLearningFlow'
import { equivalentFractions } from '@/content/seed'

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn() }),
}))

describe('NodeLearningFlow', () => {
  it('starts with the first scene', () => {
    const { getByText } = render(
      <NodeLearningFlow node={equivalentFractions} onRequestHint={vi.fn()} />
    )
    expect(getByText('The Fraction Wall')).toBeTruthy()
    expect(getByText('Scene 1 of 3')).toBeTruthy()
  })

  it('shows scene instructions', () => {
    const { getByText } = render(
      <NodeLearningFlow node={equivalentFractions} onRequestHint={vi.fn()} />
    )
    expect(
      getByText(/Click on different fraction bars/)
    ).toBeTruthy()
  })
})
