import { describe, it, expect, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import { QuestionShell } from './QuestionShell'
import type { MultipleChoiceQuestion } from '@/types/content'

const mockQuestion: MultipleChoiceQuestion = {
  id: 'test-q1',
  type: 'multiple-choice',
  stem: 'Which fraction is equivalent to 1/2?',
  tier: 'core',
  options: ['2/3', '3/6', '2/5', '4/6'],
  correctIndex: 1,
  xpValue: 10,
}

describe('QuestionShell', () => {
  it('renders the question stem', () => {
    const { getByText } = render(
      <QuestionShell
        question={mockQuestion}
        misconceptions={[]}
        onComplete={vi.fn()}
      />
    )
    expect(getByText('Which fraction is equivalent to 1/2?')).toBeTruthy()
  })

  it('renders multiple choice options', () => {
    const { getByText } = render(
      <QuestionShell
        question={mockQuestion}
        misconceptions={[]}
        onComplete={vi.fn()}
      />
    )
    expect(getByText('2/3')).toBeTruthy()
    expect(getByText('3/6')).toBeTruthy()
  })

  it('shows correct feedback when right answer is selected', () => {
    const { getByText } = render(
      <QuestionShell
        question={mockQuestion}
        misconceptions={[]}
        onComplete={vi.fn()}
      />
    )

    fireEvent.click(getByText('3/6'))
    expect(getByText('Spot on.')).toBeTruthy()
  })

  it('shows incorrect feedback when wrong answer is selected', () => {
    const { getByText } = render(
      <QuestionShell
        question={mockQuestion}
        misconceptions={[]}
        onComplete={vi.fn()}
      />
    )

    fireEvent.click(getByText('2/3'))
    expect(getByText('Not quite.')).toBeTruthy()
  })

  it('displays tier badge', () => {
    const { getByText } = render(
      <QuestionShell
        question={mockQuestion}
        misconceptions={[]}
        onComplete={vi.fn()}
      />
    )
    expect(getByText('core')).toBeTruthy()
  })

  describe('eliminate-and-retry mode', () => {
    it('marks wrong picks tried, leaves others clickable, hides Try again', () => {
      const onComplete = vi.fn()
      const { getByText, queryByText, container } = render(
        <QuestionShell
          question={mockQuestion}
          misconceptions={[]}
          onComplete={onComplete}
        />
      )

      // First wrong pick: 2/3
      fireEvent.click(getByText('2/3'))
      expect(getByText('Not quite.')).toBeTruthy()
      // No "Try again" button in elim mode
      expect(queryByText('Try again')).toBeNull()
      // The tried-wrong option is flagged
      const triedWrong = container.querySelectorAll('[data-tried-wrong="true"]')
      expect(triedWrong.length).toBe(1)
      // Untried options stay clickable
      expect((getByText('3/6').closest('button') as HTMLButtonElement).disabled).toBe(
        false
      )
    })

    it('lets the student pick the correct option after a wrong one without resetting', () => {
      const onComplete = vi.fn()
      const { getByText } = render(
        <QuestionShell
          question={mockQuestion}
          misconceptions={[]}
          onComplete={onComplete}
        />
      )

      fireEvent.click(getByText('2/3')) // wrong
      fireEvent.click(getByText('3/6')) // correct
      expect(getByText('Spot on.')).toBeTruthy()
      // Next button is shown after correct
      expect(getByText('Next')).toBeTruthy()
      // onComplete fires when Next is clicked, with attemptCount 2
      fireEvent.click(getByText('Next'))
      expect(onComplete).toHaveBeenCalledTimes(1)
      const [correct, attemptCount] = onComplete.mock.calls[0]
      expect(correct).toBe(true)
      expect(attemptCount).toBe(2)
    })

    it('still shows Try again on oneShot questions when wrong', () => {
      const { getByText } = render(
        <QuestionShell
          question={mockQuestion}
          misconceptions={[]}
          onComplete={vi.fn()}
          oneShot
        />
      )
      fireEvent.click(getByText('2/3'))
      // Wrong + oneShot → "Done" button, not "Try again"
      expect(getByText('Done')).toBeTruthy()
    })
  })
})
