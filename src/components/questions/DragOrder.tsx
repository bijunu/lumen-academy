'use client'

import { useState, useCallback, useRef, useEffect, type KeyboardEvent } from 'react'
import type { DragOrderQuestion } from '@/types/content'
import { cn } from '@/lib/utils'

interface DragOrderProps {
  question: DragOrderQuestion
  disabled: boolean
  onSubmit: (order: number[]) => void
}

function moveItem<T>(arr: T[], from: number, to: number): T[] {
  if (from === to) return arr
  const next = [...arr]
  const [moved] = next.splice(from, 1)
  next.splice(to, 0, moved)
  return next
}

export function DragOrder({ question, disabled, onSubmit }: DragOrderProps) {
  const [items, setItems] = useState(() => question.items.map((text, i) => ({ text, originalIndex: i })))
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const refocusIndexRef = useRef<number | null>(null)

  useEffect(() => {
    if (refocusIndexRef.current === null) return
    itemRefs.current[refocusIndexRef.current]?.focus()
    refocusIndexRef.current = null
  }, [items])

  const handleDragStart = useCallback((index: number) => {
    setDraggedIndex(index)
  }, [])

  const handleDrop = useCallback(
    (targetIndex: number) => {
      if (draggedIndex === null || draggedIndex === targetIndex) return
      setItems(prev => moveItem(prev, draggedIndex, targetIndex))
      setDraggedIndex(null)
    },
    [draggedIndex]
  )

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>, index: number) => {
      if (disabled) return
      let target: number | null = null
      if (e.key === 'ArrowUp' && index > 0) target = index - 1
      else if (e.key === 'ArrowDown' && index < items.length - 1) target = index + 1
      else if (e.key === 'Home' && index !== 0) target = 0
      else if (e.key === 'End' && index !== items.length - 1) target = items.length - 1
      if (target === null) return
      e.preventDefault()
      refocusIndexRef.current = target
      setItems(prev => moveItem(prev, index, target))
    },
    [disabled, items.length]
  )

  const handleSubmit = () => {
    onSubmit(items.map(item => item.originalIndex))
  }

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">
        Drag with the mouse, or focus an item and use the arrow keys to reorder.
      </p>
      <div className="space-y-2" role="list" aria-label="Drag to reorder">
        {items.map((item, i) => (
          <div
            key={item.originalIndex}
            ref={el => {
              itemRefs.current[i] = el
            }}
            draggable={!disabled}
            tabIndex={disabled ? -1 : 0}
            role="listitem"
            aria-label={`Item ${i + 1} of ${items.length}: ${item.text}. Use arrow keys to reorder.`}
            aria-keyshortcuts="ArrowUp ArrowDown Home End"
            onDragStart={() => handleDragStart(i)}
            onDragOver={e => e.preventDefault()}
            onDrop={() => handleDrop(i)}
            onKeyDown={e => handleKeyDown(e, i)}
            className={cn(
              'flex cursor-grab items-center gap-2 rounded-lg border p-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
              draggedIndex === i && 'opacity-50',
              disabled && 'cursor-not-allowed'
            )}
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
