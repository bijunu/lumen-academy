'use client'

import { useState } from 'react'
import { Lock } from 'lucide-react'

import type {
  InteractiveScene,
  LabelledDiagramHotspot,
  LabelledDiagramSceneData,
} from '@/types/content'
import { cn } from '@/lib/utils'

interface LabelledDiagramProps {
  scene: InteractiveScene
  onComplete: () => void
  realmAccent?: string
}

const DEFAULT_VIEWBOX = '0 0 600 400'

export function LabelledDiagram({
  scene,
  onComplete,
  realmAccent = 'hsl(var(--primary))',
}: LabelledDiagramProps) {
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
  const minDim = Math.min(vbWidth, vbHeight)
  const hotspotRadius = minDim * 0.045
  const hotspotStroke = Math.max(0.6, minDim * 0.006)
  const numberFontSize = hotspotRadius * 1.1

  return (
    <div className="space-y-5">
      <p className="text-base text-foreground">{scene.instructions}</p>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(240px,320px)]">
        <div className="rounded-xl border bg-slate-50 p-4 shadow-inner dark:bg-slate-100">
          <svg
            viewBox={viewBox}
            className="mx-auto block w-full max-w-[640px]"
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

            {hotspots.map((h, idx) => {
              const cx = (h.x / 100) * vbWidth
              const cy = (h.y / 100) * vbHeight
              const isRevealed = revealed.has(h.id)
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
                    fill={isRevealed ? realmAccent : 'white'}
                    stroke={realmAccent}
                    strokeWidth={hotspotStroke}
                    className="cursor-pointer transition-colors"
                    onClick={() => reveal(h.id)}
                    role="button"
                    tabIndex={0}
                    aria-label={
                      isRevealed
                        ? `Marker ${number}: ${h.label}`
                        : `Reveal label for hotspot ${h.id}`
                    }
                    aria-pressed={isRevealed}
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        reveal(h.id)
                      }
                    }}
                  />
                  <text
                    x={cx}
                    y={cy + numberFontSize * 0.34}
                    fontSize={numberFontSize}
                    fontWeight={700}
                    fill={isRevealed ? 'white' : realmAccent}
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

        <ol className="space-y-2.5">
          {hotspots.map((h, idx) => {
            const isRevealed = revealed.has(h.id)
            const number = idx + 1
            return (
              <li key={h.id}>
                <button
                  type="button"
                  onClick={() => reveal(h.id)}
                  className={cn(
                    'group flex w-full items-start gap-3 rounded-xl border p-3 text-left transition-all',
                    isRevealed
                      ? 'bg-card shadow-sm'
                      : 'bg-muted/30 hover:bg-muted/50',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
                  )}
                  style={
                    isRevealed
                      ? {
                          borderColor: `${realmAccent}55`,
                          backgroundColor: `${realmAccent}0E`,
                        }
                      : undefined
                  }
                  aria-pressed={isRevealed}
                >
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                    style={{
                      backgroundColor: isRevealed ? realmAccent : 'hsl(var(--muted))',
                      color: isRevealed ? 'white' : 'hsl(var(--muted-foreground))',
                    }}
                    aria-hidden
                  >
                    {number}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p
                      className={cn(
                        'text-sm font-semibold',
                        !isRevealed && 'text-muted-foreground'
                      )}
                    >
                      {h.label}
                    </p>
                    {isRevealed && h.description && (
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {h.description}
                      </p>
                    )}
                    {!isRevealed && (
                      <p className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <Lock className="h-3 w-3" aria-hidden />
                        Click marker {number} on the diagram or this card
                      </p>
                    )}
                  </div>
                </button>
              </li>
            )
          })}
        </ol>
      </div>

      <button
        type="button"
        onClick={onComplete}
        disabled={revealed.size === 0}
        className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:translate-y-0 disabled:bg-muted disabled:text-muted-foreground disabled:shadow-none"
        style={
          revealed.size === 0 ? undefined : { backgroundColor: realmAccent }
        }
      >
        Continue
        <span aria-hidden>→</span>
      </button>
    </div>
  )
}
