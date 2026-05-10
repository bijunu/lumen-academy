'use client'

import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'

import { CompanionCreature } from '@/components/companion/CompanionCreature'
import { REALMS, type RealmId } from '@/lib/constants/realms'
import {
  DAILY_QUEST_BONUS_SPARK,
  DAILY_QUEST_BONUS_XP,
  type DailyQuestRecord,
} from '@/types/dailyQuest'

interface HeroNode {
  id: string
  title: string
  realm: RealmId
}

interface HomeHeroProps {
  state:
    | { kind: 'loading' }
    | { kind: 'unauthenticated' }
    | { kind: 'no-content' }
    | { kind: 'error' }
    | { kind: 'ready'; quest: DailyQuestRecord; nodes: HeroNode[] }
}

function greetingForHour(hour: number): string {
  if (hour < 5) return 'Working late, Scholar'
  if (hour < 12) return 'Good morning, Scholar'
  if (hour < 18) return 'Good afternoon, Scholar'
  return 'Good evening, Scholar'
}

function HeroFrame({ children }: { children: React.ReactNode }) {
  return (
    <section
      aria-labelledby="home-hero-heading"
      className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-6 sm:p-8"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
        <CompanionCreature variant="hero" />
        <div className="flex-1">{children}</div>
      </div>
    </section>
  )
}

function CTACard({
  href,
  realmId,
  title,
  meta,
}: {
  href: string
  realmId: RealmId
  title: string
  meta: string
}) {
  const realm = REALMS[realmId]
  return (
    <Link
      href={href}
      className="group flex items-center justify-between gap-4 rounded-xl border bg-background p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      style={{ borderColor: `${realm.colour}33` }}
    >
      <div className="min-w-0">
        <p
          className="text-xs font-semibold uppercase tracking-wider"
          style={{ color: realm.colour }}
        >
          {realm.label}
        </p>
        <p className="mt-0.5 truncate text-base font-semibold">{title}</p>
        <p className="mt-0.5 text-sm text-muted-foreground">{meta}</p>
      </div>
      <span
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-primary-foreground transition-transform group-hover:translate-x-0.5"
        style={{ backgroundColor: realm.colour }}
        aria-hidden
      >
        <ArrowRight className="h-5 w-5" />
      </span>
    </Link>
  )
}

export function HomeHero({ state }: HomeHeroProps) {
  const greeting = greetingForHour(new Date().getHours())

  if (state.kind === 'unauthenticated') {
    return (
      <HeroFrame>
        <h1 id="home-hero-heading" className="text-2xl font-bold tracking-tight">
          Welcome to Lumen Academy
        </h1>
        <p className="mt-2 text-base text-muted-foreground">
          Sign in to start your first mission and unlock the realms.
        </p>
      </HeroFrame>
    )
  }

  if (state.kind === 'loading') {
    return (
      <HeroFrame>
        <p className="text-sm uppercase tracking-wider text-muted-foreground">
          Loading
        </p>
        <h1
          id="home-hero-heading"
          className="mt-1 text-2xl font-bold tracking-tight"
        >
          {greeting}
        </h1>
        <div className="mt-4 h-20 animate-pulse rounded-xl bg-muted" />
      </HeroFrame>
    )
  }

  if (state.kind === 'error') {
    return (
      <HeroFrame>
        <h1 id="home-hero-heading" className="text-2xl font-bold tracking-tight">
          {greeting}
        </h1>
        <p className="mt-2 text-base text-muted-foreground">
          We could not load today&apos;s mission. Refresh to try again.
        </p>
      </HeroFrame>
    )
  }

  if (state.kind === 'no-content') {
    return (
      <HeroFrame>
        <h1 id="home-hero-heading" className="text-2xl font-bold tracking-tight">
          {greeting}
        </h1>
        <p className="mt-2 text-base text-muted-foreground">
          No mission queued today. Pick a realm below and start exploring.
        </p>
      </HeroFrame>
    )
  }

  const { quest, nodes } = state
  const nodeIndex = new Map(nodes.map(n => [n.id, n]))
  const completedTasks = quest.tasks.filter(t => t.status === 'complete').length
  const totalTasks = quest.tasks.length
  const allDone = totalTasks > 0 && completedTasks === totalTasks

  if (allDone) {
    return (
      <HeroFrame>
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          Quest complete
        </p>
        <h1
          id="home-hero-heading"
          className="mt-1 text-2xl font-bold tracking-tight"
        >
          Nicely done, Scholar.
        </h1>
        <p className="mt-2 text-base text-muted-foreground">
          You earned +{DAILY_QUEST_BONUS_XP} XP and +{DAILY_QUEST_BONUS_SPARK}{' '}
          Spark today. Come back tomorrow for a fresh quest.
        </p>
      </HeroFrame>
    )
  }

  const nextTask = quest.tasks.find(t => t.status === 'pending') ?? quest.tasks[0]
  const nextNode = nodeIndex.get(nextTask.nodeId)
  const remaining = quest.tasks.filter(t => t.status === 'pending').length - 1
  const taskMeta = nextTask.kind === 'due-review' ? 'Review' : 'New topic'

  if (!nextNode) {
    return (
      <HeroFrame>
        <h1 id="home-hero-heading" className="text-2xl font-bold tracking-tight">
          {greeting}
        </h1>
        <p className="mt-2 text-base text-muted-foreground">
          Today&apos;s mission is loading slowly. Refresh in a moment.
        </p>
      </HeroFrame>
    )
  }

  return (
    <HeroFrame>
      <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        {greeting}
      </p>
      <h1 id="home-hero-heading" className="mt-1 text-2xl font-bold tracking-tight">
        Today&apos;s mission
      </h1>
      <div className="mt-4">
        <CTACard
          href={`/learn/${nextNode.id}`}
          realmId={nextNode.realm}
          title={nextNode.title}
          meta={`${taskMeta} · ${completedTasks} of ${totalTasks} done`}
        />
      </div>
      {remaining > 0 && (
        <p className="mt-3 inline-flex items-center gap-1 text-sm text-muted-foreground">
          {remaining} more {remaining === 1 ? 'task' : 'tasks'} in today&apos;s quest
          <ChevronRight className="h-4 w-4" aria-hidden />
        </p>
      )}
    </HeroFrame>
  )
}
