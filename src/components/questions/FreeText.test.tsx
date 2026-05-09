import { describe, it, expect, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import { FreeText } from './FreeText'
import type { FreeTextQuestion } from '@/types/content'

const baseQuestion: FreeTextQuestion = {
  id: 'ft-q1',
  type: 'free-text',
  stem: 'Explain why 0.5 is the same value as 1/2.',
  tier: 'confident',
  sampleAnswer: 'Half of a whole equals 0.5 because tenths and hundredths share the same idea as fractions.',
  keywords: ['half', 'tenths', 'fraction'],
  xpValue: 15,
}

describe('FreeText', () => {
  it('reports correct when every keyword appears (case-insensitive)', () => {
    const onSubmit = vi.fn()
    const { getByLabelText, getByText } = render(
      <FreeText question={baseQuestion} disabled={false} onSubmit={onSubmit} />
    )
    fireEvent.change(getByLabelText('Your answer'), {
      target: { value: 'A Half is a Fraction made of TENTHS over ten.' },
    })
    fireEvent.click(getByText('Submit'))
    expect(onSubmit).toHaveBeenCalledWith('correct')
  })

  it('reports incorrect when a keyword is missing', () => {
    const onSubmit = vi.fn()
    const { getByLabelText, getByText } = render(
      <FreeText question={baseQuestion} disabled={false} onSubmit={onSubmit} />
    )
    fireEvent.change(getByLabelText('Your answer'), {
      target: { value: 'It is a half written as a decimal.' },
    })
    fireEvent.click(getByText('Submit'))
    expect(onSubmit).toHaveBeenCalledWith('incorrect')
  })

  it('disables textarea and submit when disabled', () => {
    const { getByLabelText, getByText } = render(
      <FreeText question={baseQuestion} disabled={true} onSubmit={vi.fn()} />
    )
    expect((getByLabelText('Your answer') as HTMLTextAreaElement).disabled).toBe(true)
    expect((getByText('Submit') as HTMLButtonElement).disabled).toBe(true)
  })
})
