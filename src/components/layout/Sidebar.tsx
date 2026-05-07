'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, User, BookOpen, Users } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { REALM_LIST } from '@/lib/constants/realms'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/profile', label: 'Profile', icon: User },
  { href: '/glossary', label: 'Glossary', icon: BookOpen },
  { href: '/parent', label: 'Parent', icon: Users },
] as const

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="flex h-full w-60 flex-col border-r bg-card" data-testid="sidebar">
      <div className="flex h-14 items-center px-4">
        <Link href="/" className="text-lg font-bold tracking-tight">
          Lumen Academy
        </Link>
      </div>

      <Separator />

      <ScrollArea className="flex-1 px-2 py-4">
        <TooltipProvider delayDuration={300}>
          <nav aria-label="Realms">
            <p className="mb-2 px-2 text-xs font-semibold uppercase text-muted-foreground">
              Realms
            </p>
            <ul className="space-y-1">
              {REALM_LIST.map(realm => {
                const isActive = pathname?.startsWith(`/realm/${realm.id}`)
                return (
                  <li key={realm.id}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant={isActive ? 'secondary' : 'ghost'}
                          className={cn('w-full justify-start gap-2')}
                          asChild
                        >
                          <Link href={`/realm/${realm.id}`}>
                            <realm.icon
                              className="h-4 w-4"
                              style={{ color: realm.colour }}
                            />
                            {realm.label}
                          </Link>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        {realm.subject.charAt(0).toUpperCase() + realm.subject.slice(1)}
                      </TooltipContent>
                    </Tooltip>
                  </li>
                )
              })}
            </ul>
          </nav>

          <Separator className="my-4" />

          <nav aria-label="Main navigation">
            <ul className="space-y-1">
              {NAV_ITEMS.map(item => {
                const isActive = pathname === item.href
                return (
                  <li key={item.href}>
                    <Button
                      variant={isActive ? 'secondary' : 'ghost'}
                      className="w-full justify-start gap-2"
                      asChild
                    >
                      <Link href={item.href}>
                        <item.icon className="h-4 w-4" />
                        {item.label}
                      </Link>
                    </Button>
                  </li>
                )
              })}
            </ul>
          </nav>
        </TooltipProvider>
      </ScrollArea>
    </aside>
  )
}
