'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

type ThemeMode = 'light' | 'dark' | 'system'

interface ThemeContextValue {
  mode: ThemeMode
  setMode: (mode: ThemeMode) => void
  highContrast: boolean
  toggleHighContrast: () => void
  dyslexicFont: boolean
  toggleDyslexicFont: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}

function resolveSystemTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>('system')
  const [highContrast, setHighContrast] = useState(false)
  const [dyslexicFont, setDyslexicFont] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('lumen-theme') as ThemeMode | null
    if (stored) setModeState(stored)
    setHighContrast(localStorage.getItem('lumen-high-contrast') === 'true')
    setDyslexicFont(localStorage.getItem('lumen-dyslexic-font') === 'true')
  }, [])

  useEffect(() => {
    const resolved = mode === 'system' ? resolveSystemTheme() : mode
    const root = document.documentElement
    root.classList.toggle('dark', resolved === 'dark')
    root.classList.toggle('high-contrast', highContrast)
    root.classList.toggle('font-dyslexic', dyslexicFont)
  }, [mode, highContrast, dyslexicFont])

  const setMode = useCallback((m: ThemeMode) => {
    setModeState(m)
    localStorage.setItem('lumen-theme', m)
  }, [])

  const toggleHighContrast = useCallback(() => {
    setHighContrast(prev => {
      localStorage.setItem('lumen-high-contrast', String(!prev))
      return !prev
    })
  }, [])

  const toggleDyslexicFont = useCallback(() => {
    setDyslexicFont(prev => {
      localStorage.setItem('lumen-dyslexic-font', String(!prev))
      return !prev
    })
  }, [])

  return (
    <ThemeContext.Provider
      value={{ mode, setMode, highContrast, toggleHighContrast, dyslexicFont, toggleDyslexicFont }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
