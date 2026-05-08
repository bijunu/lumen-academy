'use client'

import { Moon, Sun, Eye, Type } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { useTheme } from '@/components/providers/ThemeProvider'
import { ScholarStatusPill } from './ScholarStatusPill'

export function TopBar() {
  const { mode, setMode, highContrast, toggleHighContrast, dyslexicFont, toggleDyslexicFont } =
    useTheme()

  return (
    <header className="flex h-14 items-center justify-between border-b px-4" data-testid="topbar">
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center gap-1 text-sm text-muted-foreground">
          <li>Home</li>
        </ol>
      </nav>

      <div className="flex items-center gap-3">
        <ScholarStatusPill />

        <TooltipProvider delayDuration={300}>
          <div className="flex items-center gap-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
                  aria-label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {mode === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>
              </TooltipTrigger>
              <TooltipContent>Toggle dark mode</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant={highContrast ? 'secondary' : 'ghost'}
                  size="icon"
                  onClick={toggleHighContrast}
                  aria-label="Toggle high contrast"
                >
                  <Eye className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>High contrast</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant={dyslexicFont ? 'secondary' : 'ghost'}
                  size="icon"
                  onClick={toggleDyslexicFont}
                  aria-label="Toggle dyslexia friendly font"
                >
                  <Type className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Dyslexia friendly font</TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </div>
    </header>
  )
}
