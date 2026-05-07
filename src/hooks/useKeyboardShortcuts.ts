'use client'

import { useEffect, useState, useCallback } from 'react'

export interface ShortcutDef {
  key: string
  label: string
  description: string
}

export const SHORTCUTS: ShortcutDef[] = [
  { key: '1-9', label: '1 to 9', description: 'Select answer option' },
  { key: 'Enter', label: 'Enter / Space', description: 'Submit answer' },
  { key: 'h', label: 'H', description: 'Open tutor for a hint' },
  { key: 'n', label: 'N', description: 'Next question' },
  { key: 'r', label: 'R', description: 'Rewind to last scene' },
  { key: 'g', label: 'G', description: 'Open glossary search' },
  { key: 'Escape', label: 'Esc', description: 'Close any open panel' },
  { key: '?', label: '?', description: 'Show shortcut help' },
]

export function useKeyboardShortcuts() {
  const [showHelp, setShowHelp] = useState(false)

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    const target = e.target as HTMLElement
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
      return
    }

    switch (e.key) {
      case '?':
        e.preventDefault()
        setShowHelp(prev => !prev)
        break
      case 'Escape':
        e.preventDefault()
        setShowHelp(false)
        break
    }
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return { showHelp, setShowHelp }
}
