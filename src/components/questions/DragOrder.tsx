'use client'

import { useState, useCallback } from 'react'
import type { DragOrderQuestion } from '@/types/content'
import { cn } from '@/lib/utils'

interface DragOrderProps {
  question: DragOrderQuestion
  disabled: boolean
  onSubmit: (order: number[]) => void
}

export function DragOrder({ question, disabled, onSubmit }: DragOrderProps) {
  const [items, setItems] = useState(() => question.items.map((text, i) => ({ text, originalIndex: i })))
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null)

  const handleDragStart = useCallback((index: number) => {
    setDraggedIndex(index)
  }, [])

  const handleDrop = useCallback(
    (targetIndex: number) => {
      if (draggedIndex === null || draggedIndex === targetIndex) return
      setItems(prev => {
        const next = [...prev]
        const [moved] = next.splice(draggedIndex, 1)
        next.splice(targetIndex, 0, moved)
        return next
      })
      setDraggedIndex(null)
    },
    [draggedIndex]
  )

  const handleSubmit = () => {
    onSubmit(items.map(item => item.originalIndex))
  }

  return (
    <div className="space-y-3">
      <div className="space-y-2" role="list" aria-label="Drag to reorder">
        {items.map((item, i) => (
          <div
            key={item.originalIndex}
            draggable={!disabled}
            onDragStart={() => handleDragStart(i)}
            onDragOver={e => e.preventDefault()}
            onDrop={() => handleDrop(i)}
            className={cn(
              'flex cursor-grab items-center gap-2 rounded-lg border p-3 transition-colors',
              draggedIndex === i && 'opacity-50',
              disabled && 'cursor-not-allowed'
            )}
            role="listitem"
          >
            <span className="text-xs text-muted-foreground">{i + 1}.</span>
            <span className="text-sm">{item.text}</span>
          </div>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        disabled={disabled}
        className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
      >
        Submit Order
      </button>
    </div>
  )
}
