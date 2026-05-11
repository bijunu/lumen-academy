import { describe, it, expect, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

import type { SpotMisconceptionQuestion } from '@/types/content'

import { SpotMisconception } from './SpotMisconception'

const question: SpotMisconceptionQuestion = {
  id: 'sm-q1',
  type: 'spot-misconception',
  stem: 'A pupil says: "To find an equivalent fraction of 2/5, I add 2 to the top and bottom to get 4/7." Is this correct?',
  tier: 'core',
  statements: [
    { text: 'Adding 2 to both gives an equivalent fraction.', isMisconception: true },
    {
      text: 'You must multiply (or divide) both by the same number.',
      isMisconception: false,
    },
  ],
  xpValue: 15,
  misconceptionId: 'ef-mis-add',
}

describe('SpotMisconception', () => {
  it('renders a visible prompt telling the student to spot the wrong statement', () => {
    render(
      <SpotMisconception
        question={question}
        selectedIndex={null}
        disabled={false}
        onSelect={vi.fn()}
      />
    )
    const prompt = screen.getByTestId('spot-misconception-prompt')
    expect(prompt.textContent).toMatch(/spot the misconception/i)
    expect(prompt.textContent).toMatch(/wrong/i)
  })

  it('keeps the radiogroup landmark for screen readers', () => {
    render(
      <SpotMisconception
        question={question}
        selectedIndex={null}
        disabled={false}
        onSelect={vi.fn()}
      />
    )
    expect(screen.getByRole('radiogroup')).toBeTruthy()
  })

  it('forwards the chosen statement index when a student clicks', () => {
    const onSelect = vi.fn()
    render(
      <SpotMisconception
        question={question}
        selectedIndex={null}
        disabled={false}
        onSelect={onSelect}
      />
    )
    fireEvent.click(
      screen.getByText('Adding 2 to both gives an equivalent fraction.')
    )
    expect(onSelect).toHaveBeenCalledWith(0)
  })

  it('disables every option when disabled prop is set', () => {
    render(
      <SpotMisconception
        question={question}
        selectedIndex={null}
        disabled={true}
        onSelect={vi.fn()}
      />
    )
    for (const button of screen.getAllByRole('radio')) {
      expect((button as HTMLButtonElement).disabled).toBe(true)
    }
  })
})
