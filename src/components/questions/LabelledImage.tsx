'use client'

import { useState } from 'react'

import { LessonCTA } from '@/components/learn/LessonCTA'
import type { LabelledImageQuestion } from '@/types/content'
import { cn } from '@/lib/utils'

interface LabelledImageProps {
  question: LabelledImageQuestion
  disabled: boolean
  onSubmit: (placements: Record<string, string>) => void
  realmAccent?: string
}

const DEFAULT_VIEWBOX = '0 0 600 400'

export function LabelledImage({
  question,
  disabled,
  onSubmit,
  realmAccent = 'hsl(var(--primary))',
}: LabelledImageProps) {
  const viewBox = question.viewBox ?? DEFAULT_VIEWBOX
  const [, , vbWidth, vbHeight] = viewBox.split(' ').map(Number)
  // Markers must keep a constant on-screen size whether the viewBox is
  // 100x100 or 600x400. Same scaling logic as LabelledDiagram.
  const minDim = Math.min(vbWidth, vbHeight)
  const hotspotRadius = minDim * 0.045
  const hotspotStroke = Math.max(0.6, minDim * 0.005)
  const numberFontSize = hotspotRadius * 1.1

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

  return (
    <div className="space-y-5">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(220px,300px)]">
        <div className="rounded-xl border bg-slate-50 p-4 shadow-inner dark:bg-slate-100">
          <svg
            viewBox={viewBox}
            className="mx-auto block w-full max-w-[640px]"
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
              const number = idx + 1
              return (
                <g key={h.id}>
                  <circle
                    cx={cx}
                    cy={cy}
                    r={hotspotRadius * 1.4}
                    fill={realmAccent}
                    fillOpacity="0.18"
                    pointerEvents="none"
                  />
                  <circle
                    cx={cx}
                    cy={cy}
                    r={hotspotRadius}
                    fill={placed ? realmAccent : 'white'}
                    stroke={realmAccent}
                    strokeWidth={hotspotStroke}
                    className={disabled ? '' : 'cursor-pointer transition-colors'}
                    onClick={() => handleHotspotClick(h.id)}
                    role="button"
                    tabIndex={0}
                    aria-label={
                      placed
                        ? `Hotspot ${number}, labelled ${placed}. Click to remove.`
                        : `Hotspot ${number}, empty. Click to place selected label.`
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
                    y={cy + numberFontSize * 0.34}
                    fontSize={numberFontSize}
                    fontWeight={700}
                    fill={placed ? 'white' : realmAccent}
                    textAnchor="middle"
                    pointerEvents="none"
                  >
                    {number}
                  </text>
                </g>
              )
            })}
          </svg>
        </div>

        <div className="space-y-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Drag-free labels
            </p>
            <p className="text-sm text-muted-foreground">
              Pick a label, then click the matching numbered hotspot.
            </p>
          </div>

          <div
            className="flex flex-wrap gap-2"
            role="list"
            aria-label="Label pool"
          >
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
                  className={cn(
                    'rounded-full border-2 px-3 py-1.5 text-sm font-medium transition-colors',
                    !isArmed && 'bg-background hover:bg-muted',
                    'disabled:cursor-not-allowed disabled:opacity-30'
                  )}
                  style={
                    isArmed
                      ? {
                          borderColor: realmAccent,
                          backgroundColor: `${realmAccent}1A`,
                          color: realmAccent,
                        }
                      : undefined
                  }
                >
                  {label}
                </button>
              )
            })}
          </div>

          {Object.keys(placements).length > 0 && (
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Placed
              </p>
              <ol className="space-y-1.5">
                {question.hotspots.map((h, idx) => {
                  const placed = placements[h.id]
                  if (!placed) return null
                  return (
                    <li
                      key={h.id}
                      className="flex items-center gap-2 text-sm"
                    >
                      <span
                        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
                        style={{ backgroundColor: realmAccent }}
                        aria-hidden
                      >
                        {idx + 1}
                      </span>
                      <span className="font-medium">{placed}</span>
                    </li>
                  )
                })}
              </ol>
            </div>
          )}
        </div>
      </div>

      <LessonCTA
        onClick={() => onSubmit(placements)}
        disabled={disabled || !allFilled}
        realmAccent={realmAccent}
      >
        Submit
      </LessonCTA>
    </div>
  )
}
