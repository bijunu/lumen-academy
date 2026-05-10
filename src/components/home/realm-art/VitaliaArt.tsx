export function VitaliaArt() {
  return (
    <svg
      viewBox="0 0 320 180"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      role="presentation"
      aria-hidden
    >
      <defs>
        <linearGradient id="vitalia-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(var(--realm-vitalia) / 0.20)" />
          <stop offset="100%" stopColor="hsl(var(--realm-vitalia) / 0.04)" />
        </linearGradient>
      </defs>
      <rect width="320" height="180" fill="url(#vitalia-bg)" />
      <g opacity="0.18" fill="hsl(var(--realm-vitalia))">
        <circle cx="42" cy="146" r="3" />
        <circle cx="68" cy="36" r="2" />
        <circle cx="262" cy="58" r="2.5" />
        <circle cx="288" cy="138" r="3" />
        <circle cx="22" cy="74" r="2" />
      </g>
      <g
        stroke="hsl(var(--realm-vitalia))"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      >
        <path
          d="M 90,150 Q 100,80 160,40 Q 220,80 230,150 Q 160,170 90,150 Z"
          fill="hsl(var(--realm-vitalia) / 0.18)"
        />
        <path d="M 160,40 Q 160,100 160,150" />
        <path d="M 160,75 Q 130,80 105,110" />
        <path d="M 160,75 Q 190,80 215,110" />
        <path d="M 160,110 Q 135,115 115,135" />
        <path d="M 160,110 Q 185,115 205,135" />
      </g>
      <g
        stroke="hsl(var(--realm-vitalia))"
        strokeWidth="1.5"
        fill="hsl(var(--realm-vitalia) / 0.12)"
        opacity="0.7"
      >
        <circle cx="48" cy="58" r="14" />
        <circle cx="48" cy="58" r="4" fill="hsl(var(--realm-vitalia))" />
      </g>
    </svg>
  )
}
