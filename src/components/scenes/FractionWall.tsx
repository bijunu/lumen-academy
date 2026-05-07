'use client'

import { useState } from 'react'
import type { InteractiveScene } from '@/types/content'

interface FractionWallProps {
  scene: InteractiveScene
  onComplete: () => void
}

interface FractionRow {
  denominator: number
  colour: string
}

export function FractionWall({ scene, onComplete }: FractionWallProps) {
  const rows = (scene.data.rows ?? []) as FractionRow[]
  const [selectedParts, setSelectedParts] = useState<Set<string>>(new Set())

  const wallWidth = 600
  const rowHeight = 40
  const gap = 2

  const togglePart = (rowIdx: number, partIdx: number) => {
    const key = `${rowIdx}-${partIdx}`
    setSelectedParts(prev => {
      const next = new Set(prev)
      if (next.has(key)) {
        next.delete(key)
      } else {
        next.add(key)
      }
      return next
    })
  }

  return (
    <div className="space-y-4">
      <div className="rounded-lg border bg-card p-4">
        <p className="mb-3 text-sm text-muted-foreground">{scene.instructions}</p>
        <svg
          viewBox={`0 0 ${wallWidth} ${rows.length * (rowHeight + gap)}`}
          className="w-full max-w-[600px]"
          role="img"
          aria-label="Fraction wall showing rows of different denominators"
        >
          {rows.map((row, rowIdx) => {
            const partWidth = wallWidth / row.denominator
            return Array.from({ length: row.denominator }, (_, partIdx) => {
              const key = `${rowIdx}-${partIdx}`
              const isSelected = selectedParts.has(key)
              return (
                <rect
                  key={key}
                  x={partIdx * partWidth + 1}
                  y={rowIdx * (rowHeight + gap)}
                  width={partWidth - 2}
                  height={rowHeight}
                  rx={4}
                  fill={isSelected ? row.colour : `${row.colour}33`}
                  stroke={row.colour}
                  strokeWidth={1.5}
                  className="cursor-pointer transition-colors"
                  onClick={() => togglePart(rowIdx, partIdx)}
                  role="button"
                  aria-label={`${partIdx + 1}/${row.denominator}`}
                />
              )
            })
          })}
        </svg>
        <p className="mt-2 text-xs text-muted-foreground">
          Click on bars to highlight them. Look for fractions that line up.
        </p>
      </div>

      <button
        onClick={onComplete}
        className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90"
      >
        I&apos;ve explored the wall, continue
      </button>
    </div>
  )
}
