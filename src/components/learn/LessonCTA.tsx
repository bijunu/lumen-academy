'use client'

import { ArrowRight } from 'lucide-react'

import { cn } from '@/lib/utils'

interface LessonCTAProps {
  type?: 'submit' | 'button'
  onClick?: () => void
  disabled?: boolean
  realmAccent?: string
  children: React.ReactNode
  withArrow?: boolean
  className?: string
}

export function LessonCTA({
  type = 'button',
  onClick,
  disabled = false,
  realmAccent = 'hsl(var(--primary))',
  children,
  withArrow = true,
  className,
}: LessonCTAProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:translate-y-0 disabled:bg-muted disabled:text-muted-foreground disabled:shadow-none',
        className
      )}
      style={disabled ? undefined : { backgroundColor: realmAccent }}
    >
      {children}
      {withArrow && <ArrowRight className="h-4 w-4" aria-hidden />}
    </button>
  )
}
