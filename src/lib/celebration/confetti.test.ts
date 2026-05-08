import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

import { fireConfetti, prefersReducedMotion } from './confetti'

const originalMatchMedia = window.matchMedia

afterEach(() => {
  window.matchMedia = originalMatchMedia
  vi.unstubAllGlobals()
})

describe('prefersReducedMotion', () => {
  it('returns true when the media query matches', () => {
    window.matchMedia = vi.fn().mockReturnValue({ matches: true }) as unknown as typeof window.matchMedia
    expect(prefersReducedMotion()).toBe(true)
  })

  it('returns false when the media query does not match', () => {
    window.matchMedia = vi.fn().mockReturnValue({ matches: false }) as unknown as typeof window.matchMedia
    expect(prefersReducedMotion()).toBe(false)
  })
})

describe('fireConfetti', () => {
  beforeEach(() => {
    vi.resetModules()
  })

  it('skips loading canvas-confetti when reduced motion is preferred', async () => {
    window.matchMedia = vi.fn().mockReturnValue({ matches: true }) as unknown as typeof window.matchMedia
    const importSpy = vi.fn()
    vi.doMock('canvas-confetti', () => {
      importSpy()
      return { default: vi.fn() }
    })
    await fireConfetti()
    expect(importSpy).not.toHaveBeenCalled()
  })
})
