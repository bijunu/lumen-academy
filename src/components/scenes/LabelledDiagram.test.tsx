import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { LabelledDiagram } from './LabelledDiagram'
import type { InteractiveScene } from '@/types/content'

function buildScene(): InteractiveScene {
  return {
    id: 'scene-cell',
    title: 'Animal cell',
    type: 'labelled-diagram',
    instructions: 'Click each marker to reveal the part name.',
    data: {
      viewBox: '0 0 600 400',
      hotspots: [
        { id: 'h1', x: 30, y: 40, label: 'Nucleus', description: 'controls the cell' },
        { id: 'h2', x: 70, y: 60, label: 'Mitochondrion' },
      ],
    },
  }
}

describe('LabelledDiagram', () => {
  it('renders the scene title and instructions', () => {
    render(<LabelledDiagram scene={buildScene()} onComplete={() => {}} />)
    expect(screen.getByRole('img', { name: 'Animal cell' })).toBeInTheDocument()
    expect(
      screen.getByText('Click each marker to reveal the part name.')
    ).toBeInTheDocument()
  })

  it('renders a hotspot button for each entry', () => {
    render(<LabelledDiagram scene={buildScene()} onComplete={() => {}} />)
    expect(
      screen.getByRole('button', { name: /Reveal label for hotspot h1/ })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Reveal label for hotspot h2/ })
    ).toBeInTheDocument()
  })

  it('reveals the label when a hotspot is clicked', () => {
    render(<LabelledDiagram scene={buildScene()} onComplete={() => {}} />)
    const hotspot = screen.getByRole('button', { name: /Reveal label for hotspot h1/ })
    fireEvent.click(hotspot)
    expect(screen.getAllByText('Nucleus').length).toBeGreaterThan(0)
    expect(screen.getByText(/controls the cell/)).toBeInTheDocument()
  })

  it('disables Continue until at least one hotspot is revealed, then enables it', () => {
    const onComplete = vi.fn()
    render(<LabelledDiagram scene={buildScene()} onComplete={onComplete} />)
    const cont = screen.getByRole('button', { name: 'Continue' })
    expect(cont).toBeDisabled()

    fireEvent.click(screen.getByRole('button', { name: /Reveal label for hotspot h1/ }))
    expect(cont).not.toBeDisabled()

    fireEvent.click(cont)
    expect(onComplete).toHaveBeenCalledTimes(1)
  })

  it('reveals on Enter and Space key press', () => {
    render(<LabelledDiagram scene={buildScene()} onComplete={() => {}} />)
    const hotspot = screen.getByRole('button', { name: /Reveal label for hotspot h2/ })
    fireEvent.keyDown(hotspot, { key: 'Enter' })
    expect(screen.getByText('Mitochondrion')).toBeInTheDocument()
  })
})
