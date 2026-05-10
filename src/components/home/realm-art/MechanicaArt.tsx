export function MechanicaArt() {
  return (
    <svg
      viewBox="0 0 320 180"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      role="presentation"
      aria-hidden
    >
      <defs>
        <linearGradient id="mechanica-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(var(--realm-mechanica) / 0.20)" />
          <stop offset="100%" stopColor="hsl(var(--realm-mechanica) / 0.04)" />
        </linearGradient>
      </defs>
      <rect width="320" height="180" fill="url(#mechanica-bg)" />
      <g
        stroke="hsl(var(--realm-mechanica) / 0.4)"
        strokeWidth="1"
        strokeDasharray="3 4"
        fill="none"
      >
        <circle cx="160" cy="92" r="76" />
        <circle cx="160" cy="92" r="56" />
        <circle cx="160" cy="92" r="36" />
      </g>
      <g
        stroke="hsl(var(--realm-mechanica))"
        strokeWidth="2.5"
        strokeLinejoin="round"
        fill="hsl(var(--realm-mechanica) / 0.18)"
      >
        <path d="
          M 160,52
          L 170,55 L 174,46 L 184,52 L 184,62
          L 192,68 L 200,66 L 202,78 L 196,84
          L 198,94 L 204,98 L 198,108 L 188,108
          L 184,116 L 186,124 L 174,128 L 168,122
          L 160,124 L 152,122 L 146,128 L 134,124
          L 136,116 L 132,108 L 122,108 L 116,98
          L 122,94 L 124,84 L 118,78 L 120,66
          L 128,68 L 136,62 L 136,52 L 146,46
          L 150,55 Z
        " />
        <circle cx="160" cy="92" r="14" fill="hsl(var(--background))" />
        <circle cx="160" cy="92" r="6" fill="hsl(var(--realm-mechanica))" />
      </g>
      <g
        stroke="hsl(var(--realm-mechanica))"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.55"
      >
        <line x1="36" y1="156" x2="62" y2="156" />
        <line x1="36" y1="156" x2="36" y2="148" />
        <line x1="62" y1="156" x2="62" y2="148" />
        <line x1="258" y1="40" x2="290" y2="40" />
      </g>
    </svg>
  )
}
