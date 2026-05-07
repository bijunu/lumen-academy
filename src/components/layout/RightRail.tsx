'use client'

import { PanelRightClose, PanelRightOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useRightRail } from '@/contexts/RightRailContext'
import { useMediaQuery } from '@/hooks/useMediaQuery'

export function RightRail({ children }: { children?: React.ReactNode }) {
  const { isOpen, toggle, content: contextContent } = useRightRail()
  const isNarrow = useMediaQuery('(max-width: 1024px)')

  const railContent = contextContent ?? children

  const content = (
    <div className="flex h-full flex-col" data-testid="right-rail">
      <div className="flex h-14 items-center justify-between border-b px-4">
        <span className="text-sm font-semibold">AI Tutor</span>
        {!isNarrow && (
          <Button variant="ghost" size="icon" onClick={toggle} aria-label="Close tutor panel">
            <PanelRightClose className="h-4 w-4" />
          </Button>
        )}
      </div>
      <ScrollArea className="flex-1 p-4">
        {railContent ?? (
          <p className="text-sm text-muted-foreground">
            Ask for a hint or start a learning session to activate the tutor.
          </p>
        )}
      </ScrollArea>
    </div>
  )

  if (isNarrow) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed bottom-4 right-4 z-40 h-12 w-12 rounded-full shadow-lg"
            aria-label="Open tutor panel"
          >
            <PanelRightOpen className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[360px] p-0">
          {content}
        </SheetContent>
      </Sheet>
    )
  }

  if (!isOpen) {
    return (
      <div className="flex h-full w-10 flex-col items-center border-l pt-4">
        <Button variant="ghost" size="icon" onClick={toggle} aria-label="Open tutor panel">
          <PanelRightOpen className="h-4 w-4" />
        </Button>
      </div>
    )
  }

  return <aside className="w-[360px] border-l bg-card">{content}</aside>
}
