import { notFound } from 'next/navigation'

import { BackLink } from '@/components/layout/BackLink'
import { auth } from '@/lib/auth/authOptions'
import { getBossRepository } from '@/lib/boss/bossRepository'
import { REALMS, type RealmId } from '@/lib/constants/realms'
import { getContentRepository } from '@/lib/content'
import { getProgressRepository } from '@/lib/progress/progressRepository'
import type { NodeProgress } from '@/types/progress'

import { RealmMapClient } from './RealmMapClient'

const REALM_IDS = Object.keys(REALMS) as RealmId[]

interface RealmPageProps {
  params: { realmId: string }
}

function isRealmId(value: string): value is RealmId {
  return (REALM_IDS as string[]).includes(value)
}

export default async function RealmPage({ params }: RealmPageProps) {
  if (!isRealmId(params.realmId)) {
    notFound()
  }
  const realm = REALMS[params.realmId]
  const Icon = realm.icon

  const allNodes = await getContentRepository().getAllNodes()
  const realmNodes = allNodes.filter(n => n.realm === params.realmId)
  const zoneIds = new Set(realmNodes.map(n => n.zoneId))

  const progressByNodeId: Record<string, NodeProgress> = {}
  let defeatedZoneIds: string[] = []
  const session = await auth()
  if (session?.user) {
    const progressRepo = getProgressRepository()
    for (const node of realmNodes) {
      const p = await progressRepo.getNodeProgress(session.user.id, node.id)
      if (p) progressByNodeId[node.id] = p
    }
    const defeats = await getBossRepository().getDefeats(session.user.id)
    defeatedZoneIds = defeats
      .filter(d => d.realmId === params.realmId)
      .map(d => d.zoneId)
  }

  const masteredCount = Object.values(progressByNodeId).filter(
    p => p.mastery !== 'none'
  ).length
  const totalNodes = realmNodes.length
  const totalZones = zoneIds.size
  const defeatedCount = defeatedZoneIds.length

  return (
    <div className="space-y-5">
      <BackLink href="/" label="Back to home" />
      <header
        className="relative overflow-hidden rounded-2xl border p-6"
        style={{
          backgroundImage: `linear-gradient(135deg, hsl(var(--realm-${realm.id}) / 0.18), hsl(var(--realm-${realm.id}) / 0.04))`,
        }}
      >
        <div className="flex flex-wrap items-center gap-4">
          <span
            className="flex h-12 w-12 items-center justify-center rounded-xl text-primary-foreground shadow-sm"
            style={{ backgroundColor: realm.colour }}
            aria-hidden
          >
            <Icon className="h-6 w-6" />
          </span>
          <div className="flex-1 min-w-0">
            <p
              className="text-xs font-semibold uppercase tracking-[0.18em]"
              style={{ color: realm.colour }}
            >
              {realm.subject.charAt(0).toUpperCase() + realm.subject.slice(1)}
            </p>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {realm.label}
            </h1>
          </div>
        </div>

        <dl className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat
            label="Mastered"
            value={`${masteredCount}/${totalNodes}`}
            accent={realm.colour}
          />
          <Stat label="Zones" value={`${totalZones}`} accent={realm.colour} />
          <Stat
            label="Bosses defeated"
            value={`${defeatedCount}/${totalZones}`}
            accent={realm.colour}
          />
          <Stat
            label="Tier mix"
            value="Core · Confident · Challenge"
            accent={realm.colour}
            small
          />
        </dl>

        <p className="mt-4 text-xs text-muted-foreground">
          Drag to pan, scroll to zoom, click any unlocked node to begin.
        </p>
      </header>

      <RealmMapClient
        nodes={realmNodes}
        progressByNodeId={progressByNodeId}
        defeatedZoneIds={defeatedZoneIds}
        realmLabel={realm.label}
        realmId={params.realmId}
      />
    </div>
  )
}

function Stat({
  label,
  value,
  accent,
  small,
}: {
  label: string
  value: string
  accent: string
  small?: boolean
}) {
  return (
    <div className="rounded-lg border bg-card/70 px-3 py-2 backdrop-blur-sm">
      <dt
        className="text-[11px] font-semibold uppercase tracking-wider"
        style={{ color: accent }}
      >
        {label}
      </dt>
      <dd
        className={
          small
            ? 'mt-0.5 truncate text-xs text-muted-foreground'
            : 'mt-0.5 text-lg font-bold tabular-nums'
        }
      >
        {value}
      </dd>
    </div>
  )
}
