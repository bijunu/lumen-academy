'use client'

interface CompanionCreatureProps {
  variant?: 'corner' | 'hero'
}

const SIZE_BY_VARIANT: Record<NonNullable<CompanionCreatureProps['variant']>, number> = {
  corner: 64,
  hero: 96,
}

export function CompanionCreature({ variant = 'corner' }: CompanionCreatureProps = {}) {
  const size = SIZE_BY_VARIANT[variant]
  const wrapperClass =
    variant === 'corner'
      ? 'pointer-events-none fixed bottom-6 right-[calc(var(--right-rail-width,0px)+1rem)] hidden lg:block'
      : 'pointer-events-none inline-flex shrink-0'

  return (
    <div data-testid="companion-creature" aria-hidden className={wrapperClass}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        className="companion-creature-svg"
      >
        <defs>
          <radialGradient id={`companion-glow-${variant}`} cx="50%" cy="50%" r="50%">
            <stop
              offset="0%"
              stopColor="hsl(var(--primary))"
              stopOpacity="0.4"
            />
            <stop
              offset="100%"
              stopColor="hsl(var(--primary))"
              stopOpacity="0"
            />
          </radialGradient>
        </defs>
        <circle
          cx="32"
          cy="32"
          r="30"
          fill={`url(#companion-glow-${variant})`}
          className="companion-creature-halo"
        />
        <circle
          cx="32"
          cy="32"
          r="14"
          fill="hsl(var(--primary))"
          fillOpacity="0.85"
          className="companion-creature-core"
        />
        <circle cx="27" cy="29" r="2" fill="hsl(var(--background))" />
        <circle cx="37" cy="29" r="2" fill="hsl(var(--background))" />
      </svg>
    </div>
  )
}
