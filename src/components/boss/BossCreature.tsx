'use client'

interface BossCreatureProps {
  hpRemaining: number
  hpTotal: number
  defeated?: boolean
}

export function BossCreature({
  hpRemaining,
  hpTotal,
  defeated = false,
}: BossCreatureProps) {
  const ratio = hpTotal > 0 ? Math.max(0, hpRemaining / hpTotal) : 1
  const fill = defeated ? '#9CA3AF' : ratio > 0.5 ? '#A855F7' : '#EF4444'
  const eyes = defeated ? '✕' : ratio > 0 ? '◉' : '◌'

  return (
    <div
      className="flex flex-col items-center gap-3 motion-reduce:[&_circle]:!animate-none"
      data-testid="boss-creature"
      data-boss-state={defeated ? 'defeated' : ratio > 0 ? 'alive' : 'dying'}
    >
      <svg
        viewBox="0 0 200 200"
        className="h-44 w-44"
        role="img"
        aria-label="Zone boss"
      >
        <defs>
          <radialGradient id="bossBody" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor={fill} stopOpacity="0.9" />
            <stop offset="100%" stopColor={fill} stopOpacity="0.45" />
          </radialGradient>
        </defs>
        <circle
          cx="100"
          cy="105"
          r="78"
          fill="url(#bossBody)"
          stroke={fill}
          strokeWidth="3"
        />
        <circle
          cx="100"
          cy="105"
          r="60"
          fill="none"
          stroke={fill}
          strokeWidth="1.5"
          strokeDasharray="4 6"
          opacity="0.55"
        />
        <text
          x="100"
          y="115"
          textAnchor="middle"
          fontSize="56"
          fill="white"
          aria-hidden
        >
          {eyes}
        </text>
      </svg>
      <div className="w-44">
        <div
          className="h-3 overflow-hidden rounded-full border bg-muted"
          aria-label="Boss HP"
          aria-valuemin={0}
          aria-valuemax={hpTotal}
          aria-valuenow={hpRemaining}
          role="progressbar"
        >
          <div
            className="h-full transition-all"
            style={{
              width: `${ratio * 100}%`,
              backgroundColor: fill,
            }}
          />
        </div>
        <p className="mt-1 text-center text-xs text-muted-foreground">
          {defeated
            ? 'Defeated'
            : `HP ${hpRemaining} of ${hpTotal}`}
        </p>
      </div>
    </div>
  )
}
