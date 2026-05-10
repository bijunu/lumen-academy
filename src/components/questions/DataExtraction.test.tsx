import { describe, it, expect, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import { DataExtraction } from './DataExtraction'
import type { DataExtractionQuestion } from '@/types/content'

const baseQuestion: DataExtractionQuestion = {
  id: 'de-q1',
  type: 'data-extraction',
  stem: 'What percentage of borrowers chose poetry?',
  tier: 'core',
  dataSource:
    'Tunbridge Wells library borrower survey: 12 out of every 100 borrowers chose a poetry book.',
  correctAnswer: '12%',
  xpValue: 10,
}

describe('DataExtraction', () => {
  it('renders the data source block', () => {
    const { getByText } = render(
      <DataExtraction question={baseQuestion} disabled={false} onSubmit={vi.fn()} />
    )
    expect(getByText(/Tunbridge Wells library/)).toBeTruthy()
  })

  it('forwards the raw text answer to onSubmit', () => {
    const onSubmit = vi.fn()
    const { getByLabelText, getByText } = render(
      <DataExtraction question={baseQuestion} disabled={false} onSubmit={onSubmit} />
    )
    fireEvent.change(getByLabelText('Your answer'), { target: { value: '  12% .' } })
    fireEvent.click(getByText('Submit'))
    expect(onSubmit).toHaveBeenCalledWith('  12% .')
  })

  it('forwards a wrong answer verbatim too', () => {
    const onSubmit = vi.fn()
    const { getByLabelText, getByText } = render(
      <DataExtraction question={baseQuestion} disabled={false} onSubmit={onSubmit} />
    )
    fireEvent.change(getByLabelText('Your answer'), { target: { value: '88%' } })
    fireEvent.click(getByText('Submit'))
    expect(onSubmit).toHaveBeenCalledWith('88%')
  })

  it('disables input and submit when disabled', () => {
    const { getByLabelText, getByText } = render(
      <DataExtraction question={baseQuestion} disabled={true} onSubmit={vi.fn()} />
    )
    expect((getByLabelText('Your answer') as HTMLInputElement).disabled).toBe(true)
    expect((getByText('Submit') as HTMLButtonElement).disabled).toBe(true)
  })
})
