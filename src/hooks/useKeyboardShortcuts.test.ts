import { describe, it, expect } from 'vitest'
import { SHORTCUTS } from './useKeyboardShortcuts'

describe('useKeyboardShortcuts', () => {
  it('defines expected shortcuts', () => {
    const keys = SHORTCUTS.map(s => s.key)
    expect(keys).toContain('1-9')
    expect(keys).toContain('Enter')
    expect(keys).toContain('h')
    expect(keys).toContain('n')
    expect(keys).toContain('g')
    expect(keys).toContain('Escape')
    expect(keys).toContain('?')
  })

  it('has descriptions for all shortcuts', () => {
    for (const s of SHORTCUTS) {
      expect(s.description.length).toBeGreaterThan(0)
    }
  })
})
