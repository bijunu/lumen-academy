'use client'

import { RightRailProvider } from '@/contexts/RightRailContext'
import { AppShell } from '@/components/layout/AppShell'
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts'

export default function LearnerLayout({ children }: { children: React.ReactNode }) {
  useKeyboardShortcuts()

  return (
    <RightRailProvider>
      <AppShell>{children}</AppShell>
    </RightRailProvider>
  )
}
