'use client'

import { useState } from 'react'
import type {
  InteractiveScene,
  LabelledDiagramHotspot,
  LabelledDiagramSceneData,
} from '@/types/content'

interface LabelledDiagramProps {
  scene: InteractiveScene
  onComplete: () => void
}

const DEFAULT_VIEWBOX = '0 0 600 400'

export function LabelledDiagram({ scene, onComplete }: LabelledDiagramProps) {
  const data = scene.data as Partial<LabelledDiagramSceneData>
  const hotspots: LabelledDiagramHotspot[] = data.hotspots ?? []
  const viewBox = data.viewBox ?? DEFAULT_VIEWBOX
  const [revealed, setRevealed] = useState<Set<string>>(new Set())

  const reveal = (id: string) => {
    setRevealed(prev => {
      const next = new Set(prev)
      next.add(id)
      return next
    })
  }

  const [, , vbWidth, vbHeight] = viewBox.split(' ').map(Number)

  return (
    <div className="space-y-4">
      <div className="rounded-lg border bg-card p-4">
        <p className="mb-3 text-sm text-muted-foreground">{scene.instructions}</p>
        <div className="relative w-full max-w-[600px]">
          <svg
            viewBox={viewBox}
            className="w-full"
            role="img"
            aria-label={scene.title}
          >
            {data.svg ? (
              <g
                dangerouslySetInnerHTML={{ __html: data.svg }}
                aria-hidden="true"
              />
            ) : data.image ? (
              <image
                href={data.image}
                x={0}
                y={0}
                width={vbWidth}
                height={vbHeight}
                preserveAspectRatio="xMidYMid meet"
                aria-hidden="true"
              />
            ) : null}

            {hotspots.map(h => {
              const cx = (h.x / 100) * vbWidth
              const cy = (h.y / 100) * vbHeight
              const isRevealed = revealed.has(h.id)
              return (
                <g key={h.id}>
                  <circle
                    cx={cx}
                    cy={cy}
                    r={14}
                    fill={isRevealed ? 'var(--primary, #3B82F6)' : 'white'}
                    stroke="var(--primary, #3B82F6)"
                    strokeWidth={2}
                    className="cursor-pointer transition-colors"
                    onClick={() => reveal(h.id)}
                    role="button"
                    tabIndex={0}
                    aria-label={isRevealed ? h.label : `Reveal label for hotspot ${h.id}`}
                    aria-pressed={isRevealed}
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        reveal(h.id)
                      }
                    }}
                  />
                  {isRevealed && (
                    <text
                      x={cx + 22}
                      y={cy + 4}
                      fontSize={14}
                      fontWeight={500}
                      fill="currentColor"
                      pointerEvents="none"
                    >
                      {h.label}
                    </text>
                  )}
                </g>
              )
            })}
          </svg>
        </div>
        {hotspots.some(h => revealed.has(h.id)) && (
          <ul className="mt-3 space-y-1 text-xs text-muted-foreground">
            {hotspots
              .filter(h => revealed.has(h.id) && h.description)
              .map(h => (
                <li key={h.id}>
                  <strong className="font-medium text-foreground">{h.label}</strong>
                  {' '}
                  {h.description}
                </li>
              ))}
          </ul>
        )}
      </div>

      <button
        type="button"
        onClick={onComplete}
        disabled={revealed.size === 0}
        className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
      >
        Continue
      </button>
    </div>
  )
}
