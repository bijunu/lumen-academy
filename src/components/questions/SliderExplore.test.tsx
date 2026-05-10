import { describe, it, expect, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import { SliderExplore } from './SliderExplore'
import type { SliderExploreQuestion } from '@/types/content'

const baseQuestion: SliderExploreQuestion = {
  id: 'se-q1',
  type: 'slider-explore',
  stem: 'How many millilitres of squash give the right strength?',
  tier: 'challenge',
  min: 0,
  max: 100,
  step: 5,
  correctRange: [40, 60],
  label: 'Squash (ml)',
  xpValue: 20,
}

describe('SliderExplore', () => {
  it('forwards the slider value when in range', () => {
    const onSubmit = vi.fn()
    const { getByLabelText, getByText } = render(
      <SliderExplore question={baseQuestion} disabled={false} onSubmit={onSubmit} />
    )
    fireEvent.change(getByLabelText('Squash (ml)'), { target: { value: '45' } })
    fireEvent.click(getByText('Submit'))
    expect(onSubmit).toHaveBeenCalledWith(45)
  })

  it('forwards an out-of-range value verbatim', () => {
    const onSubmit = vi.fn()
    const { getByLabelText, getByText } = render(
      <SliderExplore question={baseQuestion} disabled={false} onSubmit={onSubmit} />
    )
    fireEvent.change(getByLabelText('Squash (ml)'), { target: { value: '20' } })
    fireEvent.click(getByText('Submit'))
    expect(onSubmit).toHaveBeenCalledWith(20)
  })

  it('starts at the midpoint of the range', () => {
    const { getByLabelText } = render(
      <SliderExplore question={baseQuestion} disabled={false} onSubmit={vi.fn()} />
    )
    expect((getByLabelText('Squash (ml)') as HTMLInputElement).value).toBe('50')
  })

  it('disables slider and submit when disabled', () => {
    const { getByLabelText, getByText } = render(
      <SliderExplore question={baseQuestion} disabled={true} onSubmit={vi.fn()} />
    )
    expect((getByLabelText('Squash (ml)') as HTMLInputElement).disabled).toBe(true)
    expect((getByText('Submit') as HTMLButtonElement).disabled).toBe(true)
  })
})
