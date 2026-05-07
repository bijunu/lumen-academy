'use client'

import { useState } from 'react'
import type { WorkedExample as WorkedExampleType } from '@/types/content'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface WorkedExampleProps {
  example: WorkedExampleType
  onComplete: () => void
}

export function WorkedExample({ example, onComplete }: WorkedExampleProps) {
  const [visibleSteps, setVisibleSteps] = useState(1)

  const allRevealed = visibleSteps >= example.steps.length

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">{example.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {example.steps.slice(0, visibleSteps).map((step, i) => (
          <div key={i} className="space-y-1 rounded-md bg-muted/50 p-3">
            <p className="text-sm">{step.explanation}</p>
            {step.maths && (
              <p className="font-mono text-sm text-primary">{step.maths}</p>
            )}
          </div>
        ))}

        {!allRevealed ? (
          <Button onClick={() => setVisibleSteps(prev => prev + 1)} variant="outline" size="sm">
            Reveal next step
          </Button>
        ) : (
          <Button onClick={onComplete} size="sm">
            I understand, continue
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
