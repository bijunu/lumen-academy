import { describe, it, expect, vi } from 'vitest'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { MissingStep } from './MissingStep'
import type { MissingStepQuestion } from '@/types/content'

const baseQuestion: MissingStepQuestion = {
  id: 'ms-q1',
  type: 'missing-step',
  stem: 'Complete the working.',
  tier: 'core',
  steps: ['3a + 4 + 2a', null, '6a + 4'],
  missingStepIndex: 1,
  correctStep: '5a + 4',
  xpValue: 10,
}

describe('MissingStep', () => {
  it('renders the non-missing steps as text and the missing step as an input', () => {
    const { getByText, getByLabelText } = render(
      <MissingStep question={baseQuestion} disabled={false} onSubmit={vi.fn()} />
    )
    expect(getByText('3a + 4 + 2a')).toBeTruthy()
    expect(getByText('6a + 4')).toBeTruthy()
    expect(getByLabelText('Step 2 (missing)')).toBeTruthy()
  })

  it('reports correct when answer matches the canonical step (case/whitespace insensitive)', () => {
    const onSubmit = vi.fn()
    const { getByLabelText, getByText } = render(
      <MissingStep question={baseQuestion} disabled={false} onSubmit={onSubmit} />
    )
    fireEvent.change(getByLabelText('Step 2 (missing)'), {
      target: { value: '  5A + 4  ' },
    })
    fireEvent.click(getByText('Submit'))
    expect(onSubmit).toHaveBeenCalledWith('correct')
  })

  it('reports incorrect when answer differs from the canonical step', () => {
    const onSubmit = vi.fn()
    const { getByLabelText, getByText } = render(
      <MissingStep question={baseQuestion} disabled={false} onSubmit={onSubmit} />
    )
    fireEvent.change(getByLabelText('Step 2 (missing)'), {
      target: { value: '6a + 4' },
    })
    fireEvent.click(getByText('Submit'))
    expect(onSubmit).toHaveBeenCalledWith('incorrect')
  })

  it('disables the input and submit button when disabled', () => {
    const { getByLabelText, getByText } = render(
      <MissingStep question={baseQuestion} disabled={true} onSubmit={vi.fn()} />
    )
    expect((getByLabelText('Step 2 (missing)') as HTMLInputElement).disabled).toBe(
      true
    )
    expect((getByText('Submit') as HTMLButtonElement).disabled).toBe(true)
  })

  it('routes through onJudge when provided and forwards verdict + reason', async () => {
    const onSubmit = vi.fn()
    const onJudge = vi
      .fn()
      .mockResolvedValue({
        correct: true,
        reason: 'You explained the algebraic combine clearly.',
      })
    const { getByLabelText, getByText } = render(
      <MissingStep
        question={baseQuestion}
        disabled={false}
        onSubmit={onSubmit}
        onJudge={onJudge}
      />
    )
    fireEvent.change(getByLabelText('Step 2 (missing)'), {
      target: { value: 'add the like terms 3a and 2a to give 5a' },
    })
    fireEvent.click(getByText('Submit'))
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalled()
    })
    expect(onJudge).toHaveBeenCalledWith('add the like terms 3a and 2a to give 5a')
    expect(onSubmit).toHaveBeenCalledWith(
      'correct',
      'You explained the algebraic combine clearly.'
    )
  })

  it('falls back to exact-match scoring when onJudge returns null', async () => {
    const onSubmit = vi.fn()
    const onJudge = vi.fn().mockResolvedValue(null)
    const { getByLabelText, getByText } = render(
      <MissingStep
        question={baseQuestion}
        disabled={false}
        onSubmit={onSubmit}
        onJudge={onJudge}
      />
    )
    fireEvent.change(getByLabelText('Step 2 (missing)'), {
      target: { value: '5a + 4' },
    })
    fireEvent.click(getByText('Submit'))
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalled()
    })
    expect(onSubmit).toHaveBeenCalledWith('correct')
  })
})
