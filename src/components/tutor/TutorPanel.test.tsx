import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { TutorPanel } from './TutorPanel'

describe('TutorPanel', () => {
  it('renders welcome message with node title', () => {
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

  it('shows hint button when question stem is provided', () => {
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
})
