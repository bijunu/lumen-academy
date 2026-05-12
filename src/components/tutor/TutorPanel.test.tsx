import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render } from '@testing-library/react'
import { TutorPanel } from './TutorPanel'

const useSessionMock = vi.fn()

vi.mock('next-auth/react', () => ({
  useSession: () => useSessionMock(),
}))

describe('TutorPanel', () => {
  beforeEach(() => {
    useSessionMock.mockReturnValue({ data: { user: { id: 'u1' } }, status: 'authenticated' })
  })

  it('renders welcome message with node title when signed in', () => {
    const { getByText } = render(
      <TutorPanel
        nodeId="test-node"
        nodeTitle="Equivalent Fractions"
      />
    )
    expect(
      getByText(/I am here to help you with Equivalent Fractions/)
    ).toBeTruthy()
  })

  it('shows hint button when question stem is provided and signed in', () => {
    const { getByText } = render(
      <TutorPanel
        nodeId="test-node"
        nodeTitle="Equivalent Fractions"
        currentQuestionStem="What is 1/2 equivalent to?"
      />
    )
    expect(getByText('Get a nudge')).toBeTruthy()
  })

  it('does not show hint button without question stem', () => {
    const { queryByText } = render(
      <TutorPanel
        nodeId="test-node"
        nodeTitle="Equivalent Fractions"
      />
    )
    expect(queryByText('Get a nudge')).toBeNull()
  })

  it('shows guest message when unauthenticated', () => {
    useSessionMock.mockReturnValue({ data: null, status: 'unauthenticated' })
    const { getByText, queryByText } = render(
      <TutorPanel
        nodeId="test-node"
        nodeTitle="Equivalent Fractions"
        currentQuestionStem="What is 1/2 equivalent to?"
      />
    )
    expect(getByText('AI Tutor available when signed in.')).toBeTruthy()
    expect(queryByText('Get a nudge')).toBeNull()
  })
})
