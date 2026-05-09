import { describe, it, expect, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import { LabelledImage } from './LabelledImage'
import type { LabelledImageQuestion } from '@/types/content'

const baseQuestion: LabelledImageQuestion = {
  id: 'li-q1',
  type: 'labelled-image',
  stem: 'Label the parts of the animal cell.',
  tier: 'core',
  viewBox: '0 0 600 400',
  hotspots: [
    { id: 'h1', x: 30, y: 40, correctLabel: 'Nucleus' },
    { id: 'h2', x: 70, y: 60, correctLabel: 'Mitochondrion' },
  ],
  labels: ['Nucleus', 'Mitochondrion', 'Chloroplast'],
  xpValue: 15,
}

describe('LabelledImage', () => {
  it('reports correct when every hotspot has its correct label', () => {
    const onSubmit = vi.fn()
    const { getByLabelText, getByText } = render(
      <LabelledImage question={baseQuestion} disabled={false} onSubmit={onSubmit} />
    )
    fireEvent.click(getByLabelText('Select label Nucleus'))
    fireEvent.click(getByLabelText(/Hotspot 1, empty/))
    fireEvent.click(getByLabelText('Select label Mitochondrion'))
    fireEvent.click(getByLabelText(/Hotspot 2, empty/))
    fireEvent.click(getByText('Submit'))
    expect(onSubmit).toHaveBeenCalledWith('correct')
  })

  it('reports incorrect when any hotspot has the wrong label', () => {
    const onSubmit = vi.fn()
    const { getByLabelText, getByText } = render(
      <LabelledImage question={baseQuestion} disabled={false} onSubmit={onSubmit} />
    )
    fireEvent.click(getByLabelText('Select label Mitochondrion'))
    fireEvent.click(getByLabelText(/Hotspot 1, empty/))
    fireEvent.click(getByLabelText('Select label Nucleus'))
    fireEvent.click(getByLabelText(/Hotspot 2, empty/))
    fireEvent.click(getByText('Submit'))
    expect(onSubmit).toHaveBeenCalledWith('incorrect')
  })

  it('disables Submit until every hotspot has a label', () => {
    const { getByLabelText, getByText } = render(
      <LabelledImage question={baseQuestion} disabled={false} onSubmit={vi.fn()} />
    )
    expect((getByText('Submit') as HTMLButtonElement).disabled).toBe(true)
    fireEvent.click(getByLabelText('Select label Nucleus'))
    fireEvent.click(getByLabelText(/Hotspot 1, empty/))
    expect((getByText('Submit') as HTMLButtonElement).disabled).toBe(true)
    fireEvent.click(getByLabelText('Select label Mitochondrion'))
    fireEvent.click(getByLabelText(/Hotspot 2, empty/))
    expect((getByText('Submit') as HTMLButtonElement).disabled).toBe(false)
  })

  it('removes a placed label when its hotspot is clicked again with no armed label', () => {
    const { getByLabelText } = render(
      <LabelledImage question={baseQuestion} disabled={false} onSubmit={vi.fn()} />
    )
    fireEvent.click(getByLabelText('Select label Nucleus'))
    fireEvent.click(getByLabelText(/Hotspot 1, empty/))
    expect(getByLabelText('Nucleus (placed)')).toBeInTheDocument()
    fireEvent.click(getByLabelText(/Hotspot 1, labelled Nucleus/))
    expect(getByLabelText('Select label Nucleus')).toBeInTheDocument()
  })

  it('blocks interaction when disabled', () => {
    const onSubmit = vi.fn()
    const { getByLabelText, getByText } = render(
      <LabelledImage question={baseQuestion} disabled={true} onSubmit={onSubmit} />
    )
    fireEvent.click(getByLabelText('Select label Nucleus'))
    fireEvent.click(getByLabelText(/Hotspot 1, empty/))
    expect((getByText('Submit') as HTMLButtonElement).disabled).toBe(true)
    expect(onSubmit).not.toHaveBeenCalled()
  })
})
