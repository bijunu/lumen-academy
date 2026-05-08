'use client'

import { RightRailProvider } from '@/contexts/RightRailContext'
import { AppShell } from '@/components/layout/AppShell'
import { RewardCelebrationProvider } from '@/components/celebration/RewardCelebration'
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts'

export default function LearnerLayout({ children }: { children: React.ReactNode }) {
  useKeyboardShortcuts()

  return (
    <RightRailProvider>
      <RewardCelebrationProvider>
        <AppShell>{children}</AppShell>
      </RewardCelebrationProvider>
    </RightRailProvider>
  )
}
