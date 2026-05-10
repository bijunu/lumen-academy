import type { ReactNode } from 'react'

interface LessonSectionProps {
  kind: string
  title: string
  position?: string
  realmAccent: string
  children: ReactNode
}

export function LessonSection({
  kind,
  title,
  position,
  realmAccent,
  children,
}: LessonSectionProps) {
  return (
    <section
      className="relative overflow-hidden rounded-2xl border bg-card shadow-sm"
      style={
        {
          '--lesson-accent': realmAccent,
        } as React.CSSProperties
      }
    >
      <span
        aria-hidden
        className="absolute left-0 top-0 h-full w-1.5"
        style={{ backgroundColor: realmAccent }}
      />
      <div className="p-5 sm:p-6">
        <header className="mb-4 flex items-baseline justify-between gap-3">
          <div className="min-w-0 flex-1">
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: realmAccent }}
            >
              {kind}
            </p>
            <h2 className="mt-0.5 truncate text-xl font-bold tracking-tight sm:text-2xl">
              {title}
            </h2>
          </div>
          {position && (
            <p className="shrink-0 text-sm font-medium tabular-nums text-muted-foreground">
              {position}
            </p>
          )}
        </header>
        {children}
      </div>
    </section>
  )
}
