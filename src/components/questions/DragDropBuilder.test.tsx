import { describe, it, expect, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import { DragDropBuilder } from './DragDropBuilder'
import type { DragDropBuilderQuestion } from '@/types/content'

const baseQuestion: DragDropBuilderQuestion = {
  id: 'ddb-q1',
  type: 'drag-drop-builder',
  stem: 'Build the expression for "double a number n, then add 5".',
  tier: 'confident',
  parts: ['2n', 'n', '+', '+ 5', '5n', '5'],
  correctArrangement: ['2n', '+ 5'],
  xpValue: 15,
}

describe('DragDropBuilder', () => {
  it('reports correct when the chosen parts match correctArrangement in order', () => {
    const onSubmit = vi.fn()
    const { getByLabelText, getByText } = render(
      <DragDropBuilder question={baseQuestion} disabled={false} onSubmit={onSubmit} />
    )
    fireEvent.click(getByLabelText('Add 2n to answer'))
    fireEvent.click(getByLabelText('Add + 5 to answer'))
    fireEvent.click(getByText('Submit'))
    expect(onSubmit).toHaveBeenCalledWith('correct')
  })

  it('reports incorrect when order differs', () => {
    const onSubmit = vi.fn()
    const { getByLabelText, getByText } = render(
      <DragDropBuilder question={baseQuestion} disabled={false} onSubmit={onSubmit} />
    )
    fireEvent.click(getByLabelText('Add + 5 to answer'))
    fireEvent.click(getByLabelText('Add 2n to answer'))
    fireEvent.click(getByText('Submit'))
    expect(onSubmit).toHaveBeenCalledWith('incorrect')
  })

  it('returns a part to the pool when its build chip is clicked', () => {
    const { getByLabelText } = render(
      <DragDropBuilder question={baseQuestion} disabled={false} onSubmit={vi.fn()} />
    )
    fireEvent.click(getByLabelText('Add 2n to answer'))
    expect((getByLabelText('Add 2n to answer') as HTMLButtonElement).disabled).toBe(true)
    fireEvent.click(getByLabelText('Remove 2n from answer'))
    expect((getByLabelText('Add 2n to answer') as HTMLButtonElement).disabled).toBe(false)
  })

  it('disables the submit button when no parts are selected', () => {
    const { getByText } = render(
      <DragDropBuilder question={baseQuestion} disabled={false} onSubmit={vi.fn()} />
    )
    expect((getByText('Submit') as HTMLButtonElement).disabled).toBe(true)
  })
})
