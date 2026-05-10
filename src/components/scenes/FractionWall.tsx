'use client'

import { useState } from 'react'

import { LessonCTA } from '@/components/learn/LessonCTA'
import type { InteractiveScene } from '@/types/content'

interface FractionWallProps {
  scene: InteractiveScene
  onComplete: () => void
  realmAccent?: string
}

interface FractionRow {
  denominator: number
  colour: string
}

export function FractionWall({
  scene,
  onComplete,
  realmAccent,
}: FractionWallProps) {
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
    <div className="space-y-5">
      <p className="text-base text-foreground">{scene.instructions}</p>

      <div className="rounded-xl border bg-slate-50 p-4 shadow-inner dark:bg-slate-100">
        <svg
          viewBox={`0 0 ${wallWidth} ${rows.length * (rowHeight + gap)}`}
          className="mx-auto block w-full max-w-[640px]"
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
                  rx={6}
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
      </div>

      <p className="text-sm text-muted-foreground">
        Click on bars to highlight them. Look for fractions that line up.
      </p>

      <LessonCTA onClick={onComplete} realmAccent={realmAccent}>
        I&apos;ve explored the wall, continue
      </LessonCTA>
    </div>
  )
}
