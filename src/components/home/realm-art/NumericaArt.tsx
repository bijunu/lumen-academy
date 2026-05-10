export function NumericaArt() {
  return (
    <svg
      viewBox="0 0 320 180"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      role="presentation"
      aria-hidden
    >
      <defs>
        <linearGradient id="numerica-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(var(--realm-numerica) / 0.18)" />
          <stop offset="100%" stopColor="hsl(var(--realm-numerica) / 0.04)" />
        </linearGradient>
        <pattern
          id="numerica-grid"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle
            cx="2"
            cy="2"
            r="1"
            fill="hsl(var(--realm-numerica) / 0.35)"
          />
        </pattern>
      </defs>
      <rect width="320" height="180" fill="url(#numerica-bg)" />
      <rect width="320" height="180" fill="url(#numerica-grid)" />
      <g
        stroke="hsl(var(--realm-numerica))"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      >
        <polyline points="60,130 60,90 120,40 200,90 240,60" />
        <circle cx="60" cy="130" r="4" fill="hsl(var(--realm-numerica))" />
        <circle cx="120" cy="40" r="4" fill="hsl(var(--realm-numerica))" />
        <circle cx="200" cy="90" r="4" fill="hsl(var(--realm-numerica))" />
        <circle cx="240" cy="60" r="4" fill="hsl(var(--realm-numerica))" />
      </g>
      <g
        fill="hsl(var(--realm-numerica))"
        fontFamily="ui-monospace, monospace"
        fontWeight="600"
        opacity="0.35"
      >
        <text x="32" y="48" fontSize="22">π</text>
        <text x="270" y="120" fontSize="22">∑</text>
        <text x="156" y="158" fontSize="20">x²</text>
      </g>
    </svg>
  )
}
