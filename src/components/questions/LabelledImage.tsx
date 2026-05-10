'use client'

import { useState } from 'react'
import type { LabelledImageQuestion } from '@/types/content'

interface LabelledImageProps {
  question: LabelledImageQuestion
  disabled: boolean
  onSubmit: (placements: Record<string, string>) => void
}

const DEFAULT_VIEWBOX = '0 0 600 400'

export function LabelledImage({ question, disabled, onSubmit }: LabelledImageProps) {
  const viewBox = question.viewBox ?? DEFAULT_VIEWBOX
  const [, , vbWidth, vbHeight] = viewBox.split(' ').map(Number)

  const [armedLabel, setArmedLabel] = useState<string | null>(null)
  const [placements, setPlacements] = useState<Record<string, string>>({})

  const placedLabels = new Set(Object.values(placements))

  const handleLabelClick = (label: string) => {
    if (disabled) return
    if (placedLabels.has(label)) return
    setArmedLabel(prev => (prev === label ? null : label))
  }

  const handleHotspotClick = (hotspotId: string) => {
    if (disabled) return
    if (armedLabel) {
      setPlacements(prev => ({ ...prev, [hotspotId]: armedLabel }))
      setArmedLabel(null)
    } else if (placements[hotspotId]) {
      setPlacements(prev => {
        const next = { ...prev }
        delete next[hotspotId]
        return next
      })
    }
  }

  const allFilled = question.hotspots.every(h => placements[h.id])

  const handleSubmit = () => {
    onSubmit(placements)
  }

  return (
    <div className="space-y-3">
      <div className="rounded-lg border bg-card p-3">
        <svg
          viewBox={viewBox}
          className="w-full max-w-[600px]"
          role="img"
          aria-label="Labelling diagram"
        >
          {question.svg ? (
            <g
              dangerouslySetInnerHTML={{ __html: question.svg }}
              aria-hidden="true"
            />
          ) : question.image ? (
            <image
              href={question.image}
              x={0}
              y={0}
              width={vbWidth}
              height={vbHeight}
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            />
          ) : null}

          {question.hotspots.map((h, idx) => {
            const cx = (h.x / 100) * vbWidth
            const cy = (h.y / 100) * vbHeight
            const placed = placements[h.id]
            return (
              <g key={h.id}>
                <circle
                  cx={cx}
                  cy={cy}
                  r={16}
                  fill={placed ? 'var(--primary, #3B82F6)' : 'white'}
                  stroke="var(--primary, #3B82F6)"
                  strokeWidth={2}
                  className={disabled ? '' : 'cursor-pointer transition-colors'}
                  onClick={() => handleHotspotClick(h.id)}
                  role="button"
                  tabIndex={0}
                  aria-label={
                    placed
                      ? `Hotspot ${idx + 1}, labelled ${placed}. Click to remove.`
                      : `Hotspot ${idx + 1}, empty. Click to place selected label.`
                  }
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      handleHotspotClick(h.id)
                    }
                  }}
                />
                <text
                  x={cx}
                  y={cy + 4}
                  fontSize={12}
                  fontWeight={600}
                  fill={placed ? 'white' : 'var(--primary, #3B82F6)'}
                  textAnchor="middle"
                  pointerEvents="none"
                >
                  {idx + 1}
                </text>
                {placed && (
                  <text
                    x={cx + 24}
                    y={cy + 4}
                    fontSize={13}
                    fontWeight={500}
                    fill="currentColor"
                    pointerEvents="none"
                  >
                    {placed}
                  </text>
                )}
              </g>
            )
          })}
        </svg>
      </div>

      <div>
        <p className="mb-1 text-xs text-muted-foreground">
          Click a label, then click a hotspot to place it.
        </p>
        <div className="flex flex-wrap gap-2" role="list" aria-label="Label pool">
          {question.labels.map(label => {
            const isPlaced = placedLabels.has(label)
            const isArmed = armedLabel === label
            return (
              <button
                key={label}
                type="button"
                onClick={() => handleLabelClick(label)}
                disabled={disabled || isPlaced}
                aria-pressed={isArmed}
                aria-label={
                  isPlaced
                    ? `${label} (placed)`
                    : isArmed
                      ? `${label} (selected)`
                      : `Select label ${label}`
                }
                className={
                  'rounded-md border px-3 py-1 text-sm hover:bg-muted disabled:opacity-30 ' +
                  (isArmed
                    ? 'ring-2 ring-primary bg-primary/10'
                    : 'bg-background')
                }
              >
                {label}
              </button>
            )
          })}
        </div>
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        disabled={disabled || !allFilled}
        className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
      >
        Submit
      </button>
    </div>
  )
}
