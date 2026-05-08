'use client'

import {
  useState,
  useRef,
  useCallback,
  useEffect,
  type PointerEvent,
} from 'react'
import { useRouter } from 'next/navigation'
import type { SkillNode, Tier } from '@/types/content'
import type { SkillTreeLayout } from '@/lib/skillTree/layout'
import type { LockState } from '@/lib/skillTree/lockState'
import { masteryStarCount } from '@/lib/mastery/upgradeMastery'
import type { MasteryLevel } from '@/types/progress'

const NODE_RADIUS = 36
const COL_SPACING = 220
const ROW_SPACING = 120
const PADDING = 80
const MIN_SCALE = 0.5
const MAX_SCALE = 2.5

const TIER_COLOURS: Record<Tier, string> = {
  core: '#3B82F6',
  confident: '#22C55E',
  challenge: '#F97316',
}

interface SkillTreeMapProps {
  nodes: SkillNode[]
  layout: SkillTreeLayout
  lockStates: Map<string, LockState>
  masteryByNodeId?: Map<string, MasteryLevel>
  realmLabel: string
}

export function SkillTreeMap({
  nodes,
  layout,
  lockStates,
  masteryByNodeId,
  realmLabel,
}: SkillTreeMapProps) {
  const router = useRouter()
  const svgRef = useRef<SVGSVGElement | null>(null)
  const dragStart = useRef<{
    x: number
    y: number
    tx: number
    ty: number
  } | null>(null)
  const [transform, setTransform] = useState({ tx: 0, ty: 0, scale: 1 })

  // Native wheel listener so we can call preventDefault (React's synthetic
  // wheel handler is passive and cannot stop the page from scrolling).
  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      const rect = svg.getBoundingClientRect()
      const px = e.clientX - rect.left
      const py = e.clientY - rect.top
      setTransform(prev => {
        const factor = e.deltaY < 0 ? 1.1 : 1 / 1.1
        const nextScale = Math.min(
          MAX_SCALE,
          Math.max(MIN_SCALE, prev.scale * factor)
        )
        const localX = (px - prev.tx) / prev.scale
        const localY = (py - prev.ty) / prev.scale
        return {
          tx: px - localX * nextScale,
          ty: py - localY * nextScale,
          scale: nextScale,
        }
      })
    }

    svg.addEventListener('wheel', onWheel, { passive: false })
    return () => svg.removeEventListener('wheel', onWheel)
  }, [])

  const handlePointerDown = useCallback(
    (e: PointerEvent<SVGSVGElement>) => {
      if ((e.target as Element).closest?.('[data-skill-node]')) return
      dragStart.current = {
        x: e.clientX,
        y: e.clientY,
        tx: transform.tx,
        ty: transform.ty,
      }
    },
    [transform.tx, transform.ty]
  )

  const handlePointerMove = useCallback((e: PointerEvent<SVGSVGElement>) => {
    if (!dragStart.current) return
    const start = dragStart.current
    setTransform(prev => ({
      ...prev,
      tx: start.tx + (e.clientX - start.x),
      ty: start.ty + (e.clientY - start.y),
    }))
  }, [])

  const handlePointerUp = useCallback(() => {
    dragStart.current = null
  }, [])

  if (nodes.length === 0) {
    return (
      <div
        className="rounded-lg border bg-card p-12 text-center"
        data-testid="skill-tree-empty"
      >
        <p className="text-lg font-semibold">
          {realmLabel} content is on the way
        </p>
        <p className="text-sm text-muted-foreground">
          New skill nodes for this realm will appear here as they land.
        </p>
      </div>
    )
  }

  const cx = (id: string) =>
    PADDING + (layout.positions.get(id)?.x ?? 0) * COL_SPACING
  const cy = (id: string) =>
    PADDING + (layout.positions.get(id)?.y ?? 0) * ROW_SPACING

  let maxX = 0
  let maxY = 0
  for (const node of nodes) {
    maxX = Math.max(maxX, cx(node.id))
    maxY = Math.max(maxY, cy(node.id))
  }
  const width = maxX + PADDING
  const height = maxY + PADDING

  const handleNodeClick = (id: string, state: LockState) => {
    if (state === 'locked') return
    router.push(`/learn/${id}`)
  }

  return (
    <div className="relative h-[calc(100vh-12rem)] overflow-hidden rounded-lg border bg-card">
      <svg
        ref={svgRef}
        className="h-full w-full cursor-grab touch-none select-none"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        role="application"
        aria-label={`${realmLabel} skill tree`}
      >
        <g
          transform={`translate(${transform.tx} ${transform.ty}) scale(${transform.scale})`}
        >
          {layout.edges.map(edge => (
            <line
              key={`${edge.from}->${edge.to}`}
              x1={cx(edge.from)}
              y1={cy(edge.from)}
              x2={cx(edge.to)}
              y2={cy(edge.to)}
              stroke="hsl(var(--border))"
              strokeWidth={2}
            />
          ))}
          {nodes.map(node => {
            const state = lockStates.get(node.id) ?? 'locked'
            const colour = TIER_COLOURS[node.tier]
            const x = cx(node.id)
            const y = cy(node.id)
            const isLocked = state === 'locked'
            const isCompleted = state === 'completed'
            const mastery = masteryByNodeId?.get(node.id) ?? 'none'
            const stars = masteryStarCount(mastery)
            const ariaLabel = stars > 0
              ? `${node.title}, ${state}, ${stars} of 4 mastery stars`
              : `${node.title}, ${state}`

            return (
              <g
                key={node.id}
                data-skill-node={node.id}
                data-skill-state={state}
                data-mastery-level={mastery}
                data-mastery-stars={stars}
                opacity={isLocked ? 0.45 : 1}
                onClick={() => handleNodeClick(node.id, state)}
                className={isLocked ? 'cursor-not-allowed' : 'cursor-pointer'}
                role={isLocked ? undefined : 'link'}
                aria-label={ariaLabel}
              >
                <circle
                  cx={x}
                  cy={y}
                  r={NODE_RADIUS}
                  fill={isCompleted ? colour : 'hsl(var(--background))'}
                  stroke={colour}
                  strokeWidth={3}
                />
                {stars > 0 && (
                  <text
                    x={x}
                    y={y - NODE_RADIUS - 6}
                    textAnchor="middle"
                    className="select-none text-sm font-medium"
                    fill={colour}
                    aria-hidden
                  >
                    {'★'.repeat(stars) + '☆'.repeat(4 - stars)}
                  </text>
                )}
                {isLocked && (
                  <g
                    transform={`translate(${x - 6} ${y - 8})`}
                    className="text-muted-foreground"
                  >
                    <path
                      d="M3 7V5a3 3 0 0 1 6 0v2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                    />
                    <rect
                      x={1}
                      y={7}
                      width={10}
                      height={9}
                      rx={1.5}
                      fill="currentColor"
                    />
                  </g>
                )}
                <text
                  x={x}
                  y={y + NODE_RADIUS + 18}
                  textAnchor="middle"
                  className="fill-foreground text-xs font-medium"
                >
                  {node.title}
                </text>
              </g>
            )
          })}
        </g>
      </svg>
    </div>
  )
}
