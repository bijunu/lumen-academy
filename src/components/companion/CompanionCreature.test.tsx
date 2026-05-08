import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'

import { CompanionCreature } from './CompanionCreature'

describe('CompanionCreature', () => {
  it('renders a non-interactive companion in the corner', () => {
    const { getByTestId } = render(<CompanionCreature />)
    const el = getByTestId('companion-creature')
    expect(el.getAttribute('aria-hidden')).toBe('true')
    expect(el.className).toContain('pointer-events-none')
    expect(el.querySelector('svg')).toBeTruthy()
  })
})
