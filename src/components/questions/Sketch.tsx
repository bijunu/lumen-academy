'use client'

import { useRef, useState } from 'react'
import type { SketchQuestion } from '@/types/content'

interface SketchProps {
  question: SketchQuestion
  disabled: boolean
  onSubmit: (result: 'correct' | 'incorrect') => void
}

export function pointsMatch(
  placed: ReadonlyArray<[number, number]>,
  correct: ReadonlyArray<[number, number]>
): boolean {
  if (placed.length !== correct.length) return false
  return correct.every(([cx, cy]) => placed.some(([px, py]) => px === cx && py === cy))
}

const PAD = 0.6

export function Sketch({ question, disabled, onSubmit }: SketchProps) {
  const { xMin, xMax, yMin, yMax } = question.gridConfig
  const [points, setPoints] = useState<Array<[number, number]>>([])
  const svgRef = useRef<SVGSVGElement | null>(null)

  const toSvgX = (x: number) => x - xMin + PAD
  const toSvgY = (y: number) => yMax - y + PAD
  const vbW = xMax - xMin + 2 * PAD
  const vbH = yMax - yMin + 2 * PAD

  const handleClick = (e: React.MouseEvent<SVGSVGElement>) => {
    if (disabled) return
    const svg = svgRef.current
    if (!svg) return
    const rect = svg.getBoundingClientRect()
    if (rect.width === 0 || rect.height === 0) return
    const ratioX = (e.clientX - rect.left) / rect.width
    const ratioY = (e.clientY - rect.top) / rect.height
    const mathX = Math.round(ratioX * vbW - PAD + xMin)
    const mathY = Math.round(yMax - (ratioY * vbH - PAD))
    if (mathX < xMin || mathX > xMax || mathY < yMin || mathY > yMax) return
    setPoints(prev => {
      const idx = prev.findIndex(([px, py]) => px === mathX && py === mathY)
      if (idx >= 0) return prev.filter((_, i) => i !== idx)
      return [...prev, [mathX, mathY]]
    })
  }

  const handleSubmit = () => {
    onSubmit(pointsMatch(points, question.correctPoints) ? 'correct' : 'incorrect')
  }

  const xTicks = Array.from({ length: xMax - xMin + 1 }, (_, i) => xMin + i)
  const yTicks = Array.from({ length: yMax - yMin + 1 }, (_, i) => yMin + i)
  const showXAxis = yMin <= 0 && yMax >= 0
  const showYAxis = xMin <= 0 && xMax >= 0

  return (
    <div className="space-y-3">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${vbW} ${vbH}`}
        onClick={handleClick}
        className={`w-full max-w-md rounded-md border bg-background ${
          disabled ? 'cursor-not-allowed' : 'cursor-crosshair'
        }`}
        aria-label={`Coordinate grid from (${xMin}, ${yMin}) to (${xMax}, ${yMax})`}
        role="application"
      >
        {xTicks.map(x => (
          <line
            key={`vx${x}`}
            x1={toSvgX(x)}
            y1={toSvgY(yMin)}
            x2={toSvgX(x)}
            y2={toSvgY(yMax)}
            stroke="currentColor"
            strokeOpacity="0.15"
            strokeWidth="0.02"
          />
        ))}
        {yTicks.map(y => (
          <line
            key={`hy${y}`}
            x1={toSvgX(xMin)}
            y1={toSvgY(y)}
            x2={toSvgX(xMax)}
            y2={toSvgY(y)}
            stroke="currentColor"
            strokeOpacity="0.15"
            strokeWidth="0.02"
          />
        ))}
        {showYAxis && (
          <line
            x1={toSvgX(0)}
            y1={toSvgY(yMin)}
            x2={toSvgX(0)}
            y2={toSvgY(yMax)}
            stroke="currentColor"
            strokeOpacity="0.5"
            strokeWidth="0.04"
          />
        )}
        {showXAxis && (
          <line
            x1={toSvgX(xMin)}
            y1={toSvgY(0)}
            x2={toSvgX(xMax)}
            y2={toSvgY(0)}
            stroke="currentColor"
            strokeOpacity="0.5"
            strokeWidth="0.04"
          />
        )}
        {xTicks.map(x => (
          <text
            key={`tx${x}`}
            x={toSvgX(x)}
            y={toSvgY(yMin) + 0.4}
            fontSize="0.35"
            textAnchor="middle"
            fill="currentColor"
            fillOpacity="0.6"
          >
            {x}
          </text>
        ))}
        {yTicks.map(y => (
          <text
            key={`ty${y}`}
            x={toSvgX(xMin) - 0.15}
            y={toSvgY(y) + 0.12}
            fontSize="0.35"
            textAnchor="end"
            fill="currentColor"
            fillOpacity="0.6"
          >
            {y}
          </text>
        ))}
        {points.map(([x, y], i) => (
          <circle
            key={`p${i}`}
            cx={toSvgX(x)}
            cy={toSvgY(y)}
            r="0.18"
            className="fill-primary"
          />
        ))}
      </svg>
      <p className="text-xs text-muted-foreground">
        Click a grid intersection to place or remove a point.
        {points.length > 0 &&
          ` Placed: ${points.map(([x, y]) => `(${x}, ${y})`).join(', ')}.`}
      </p>
      <button
        onClick={handleSubmit}
        disabled={disabled || points.length === 0}
        className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
      >
        Submit
      </button>
    </div>
  )
}
