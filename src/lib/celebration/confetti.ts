'use client'

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return true
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
}

export async function fireConfetti(): Promise<void> {
  if (prefersReducedMotion()) return
  const mod = await import('canvas-confetti')
  const confetti = mod.default
  confetti({
    particleCount: 80,
    spread: 70,
    startVelocity: 35,
    origin: { y: 0.7 },
    disableForReducedMotion: true,
  })
}
