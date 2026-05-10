export function ElementiaArt() {
  return (
    <svg
      viewBox="0 0 320 180"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      role="presentation"
      aria-hidden
    >
      <defs>
        <linearGradient id="elementia-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(var(--realm-elementia) / 0.22)" />
          <stop offset="100%" stopColor="hsl(var(--realm-elementia) / 0.04)" />
        </linearGradient>
        <radialGradient id="elementia-glow" cx="50%" cy="60%" r="55%">
          <stop offset="0%" stopColor="hsl(var(--realm-elementia) / 0.35)" />
          <stop offset="100%" stopColor="hsl(var(--realm-elementia) / 0)" />
        </radialGradient>
      </defs>
      <rect width="320" height="180" fill="url(#elementia-bg)" />
      <rect width="320" height="180" fill="url(#elementia-glow)" />
      <g
        stroke="hsl(var(--realm-elementia))"
        strokeWidth="2.5"
        strokeLinejoin="round"
        fill="hsl(var(--realm-elementia) / 0.15)"
        opacity="0.9"
      >
        <path d="M 145,42 L 175,42 L 175,82 L 215,150 L 105,150 L 145,82 Z" />
        <line x1="145" y1="42" x2="175" y2="42" strokeWidth="3" />
      </g>
      <g
        fill="hsl(var(--realm-elementia))"
        opacity="0.75"
      >
        <circle cx="125" cy="120" r="3" />
        <circle cx="160" cy="108" r="4" />
        <circle cx="190" cy="125" r="2.5" />
        <circle cx="148" cy="135" r="2" />
      </g>
      <g
        stroke="hsl(var(--realm-elementia))"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.65"
      >
        <path d="M 60,120 L 60,140 M 50,130 L 70,130" />
        <path d="M 250,55 L 250,75 M 240,65 L 260,65" />
        <path d="M 280,118 L 280,134 M 272,126 L 288,126" />
      </g>
    </svg>
  )
}
