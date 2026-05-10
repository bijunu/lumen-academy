'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { LogIn } from 'lucide-react'

export function GuestProgressBanner() {
  const { status } = useSession()
  if (status !== 'unauthenticated') return null

  return (
    <div
      role="status"
      data-testid="guest-progress-banner"
      className="mb-6 flex flex-col gap-3 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 sm:flex-row sm:items-center sm:justify-between dark:border-amber-900/40 dark:bg-amber-950/30 dark:text-amber-100"
    >
      <p className="flex-1">
        <span className="font-semibold">You&apos;re browsing as a guest.</span>{' '}
        Sign in to save progress and unlock new topics.
      </p>
      <Link
        href="/api/auth/signin"
        className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full bg-amber-900 px-3 py-1.5 text-xs font-semibold text-amber-50 transition-colors hover:bg-amber-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 sm:self-auto dark:bg-amber-200 dark:text-amber-950 dark:hover:bg-amber-100"
      >
        <LogIn className="h-3.5 w-3.5" aria-hidden />
        Sign in
      </Link>
    </div>
  )
}
