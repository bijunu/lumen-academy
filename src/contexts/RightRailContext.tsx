'use client'

import { createContext, useCallback, useContext, useState, type ReactNode } from 'react'

interface RightRailContextValue {
  isOpen: boolean
  toggle: () => void
  open: () => void
  close: () => void
  content: ReactNode | null
  setContent: (content: ReactNode | null) => void
}

const RightRailContext = createContext<RightRailContextValue | null>(null)

export function useRightRail() {
  const ctx = useContext(RightRailContext)
  if (!ctx) throw new Error('useRightRail must be used within RightRailProvider')
  return ctx
}

export function RightRailProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(true)
  const [content, setContent] = useState<ReactNode | null>(null)

  const toggle = useCallback(() => setIsOpen(prev => !prev), [])
  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  return (
    <RightRailContext.Provider value={{ isOpen, toggle, open, close, content, setContent }}>
      {children}
    </RightRailContext.Provider>
  )
}
