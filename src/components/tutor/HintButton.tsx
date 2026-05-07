'use client'

import { Lightbulb } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { HintLevel } from '@/types/tutor'

interface HintButtonProps {
  currentLevel: HintLevel
  loading: boolean
  onClick: () => void
}

const LEVEL_LABELS: Record<HintLevel, string> = {
  nudge: 'Get a nudge',
  partial: 'Show me more',
  worked: 'Walk me through it',
}

export function HintButton({ currentLevel, loading, onClick }: HintButtonProps) {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onClick}
      disabled={loading}
      className="gap-2"
    >
      <Lightbulb className="h-4 w-4" />
      {loading ? 'Thinking...' : LEVEL_LABELS[currentLevel]}
    </Button>
  )
}
