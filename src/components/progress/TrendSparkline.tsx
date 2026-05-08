import type { TrendPoint } from '@/lib/progress/trend'

interface TrendSparklineProps {
  points: readonly TrendPoint[]
  colour?: string
  height?: number
  ariaLabel?: string
}

const VIEWBOX_W = 200
const VIEWBOX_H = 60
const PAD = 6

export function TrendSparkline({
  points,
  colour,
  height = 60,
  ariaLabel,
}: TrendSparklineProps) {
  if (points.length < 2) return null

  const innerW = VIEWBOX_W - PAD * 2
  const innerH = VIEWBOX_H - PAD * 2
  const stroke = colour ?? 'currentColor'

  const xy = points.map((p, i) => {
    const x = PAD + (innerW * i) / (points.length - 1)
    const y = PAD + innerH * (1 - p.accuracy)
    return { x, y, point: p }
  })

  const path = xy.map(({ x, y }) => `${x.toFixed(2)},${y.toFixed(2)}`).join(' ')

  const first = points[0]
  const last = points[points.length - 1]
  const summary =
    ariaLabel ??
    `Accuracy over ${points.length} days. ` +
      `Started at ${Math.round(first.accuracy * 100)}% on ${first.day}, ` +
      `latest ${Math.round(last.accuracy * 100)}% on ${last.day}.`

  return (
    <svg
      viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
      role="img"
      aria-label={summary}
      data-testid="trend-sparkline"
      style={{ width: '100%', height }}
      preserveAspectRatio="none"
    >
      <line
        x1={PAD}
        x2={VIEWBOX_W - PAD}
        y1={PAD + innerH}
        y2={PAD + innerH}
        stroke="currentColor"
        strokeOpacity={0.15}
        strokeWidth={1}
      />
      <line
        x1={PAD}
        x2={VIEWBOX_W - PAD}
        y1={PAD}
        y2={PAD}
        stroke="currentColor"
        strokeOpacity={0.08}
        strokeWidth={1}
        strokeDasharray="2 3"
      />
      <polyline
        points={path}
        fill="none"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      {xy.map(({ x, y, point }) => (
        <circle
          key={point.day}
          cx={x}
          cy={y}
          r={2.5}
          fill={stroke}
          vectorEffect="non-scaling-stroke"
        >
          <title>{`${point.day}: ${Math.round(point.accuracy * 100)}% (${point.attempts})`}</title>
        </circle>
      ))}
    </svg>
  )
}
