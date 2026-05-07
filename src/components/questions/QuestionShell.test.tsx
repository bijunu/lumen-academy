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
    expect(getByText('Correct!')).toBeTruthy()
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
    expect(getByText('Not quite right.')).toBeTruthy()
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
})
