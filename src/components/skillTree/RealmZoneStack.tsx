'use client'

import Link from 'next/link'
import { Check, Lock, Shield, ShieldCheck, Sparkles } from 'lucide-react'

import { masteryStarCount } from '@/lib/mastery/upgradeMastery'
import type { SkillTreeLayout } from '@/lib/skillTree/layout'
import type { LockState } from '@/lib/skillTree/lockState'
import type { RealmId } from '@/lib/constants/realms'
import type { SkillNode, Tier } from '@/types/content'
import type { MasteryLevel } from '@/types/progress'

const TIER_COLOURS: Record<Tier, string> = {
  core: '#3B82F6',
  confident: '#22C55E',
  challenge: '#F97316',
}

const TIER_LABELS: Record<Tier, string> = {
  core: 'Core',
  confident: 'Confident',
  challenge: 'Challenge',
}

export interface BossMarkerState {
  eligible: boolean
  defeated: boolean
}

interface RealmZoneStackProps {
  nodes: SkillNode[]
  layout: SkillTreeLayout
  lockStates: Map<string, LockState>
  masteryByNodeId?: Map<string, MasteryLevel>
  bossesByZoneId?: Map<string, BossMarkerState>
  realmLabel: string
  realmId?: RealmId
}

interface ZoneSummary {
  zoneId: string
  zoneName: string
  nodes: SkillNode[]
}

function summariseZones(
  nodes: SkillNode[],
  layout: SkillTreeLayout
): ZoneSummary[] {
  const order: ZoneSummary[] = []
  const byZone = new Map<string, ZoneSummary>()
  for (const band of layout.bands) {
    const summary: ZoneSummary = {
      zoneId: band.zoneId,
      zoneName: band.zoneName,
      nodes: [],
    }
    byZone.set(band.zoneId, summary)
    order.push(summary)
  }
  for (const node of nodes) {
    const zone = byZone.get(node.zoneId)
    if (!zone) continue
    zone.nodes.push(node)
  }
  for (const zone of order) {
    zone.nodes.sort((a, b) => {
      const ax = layout.positions.get(a.id)?.x ?? 0
      const bx = layout.positions.get(b.id)?.x ?? 0
      if (ax !== bx) return ax - bx
      return a.title.localeCompare(b.title)
    })
  }
  return order
}

function ProgressStrip({
  mastered,
  total,
  accent,
}: {
  mastered: number
  total: number
  accent: string
}) {
  const segments = total > 0 ? total : 1
  return (
    <div
      className="flex items-center gap-1"
      role="img"
      aria-label={`${mastered} of ${total} mastered`}
    >
      {Array.from({ length: segments }, (_, i) => (
        <span
          key={i}
          className="h-1.5 w-5 rounded-full"
          style={{
            backgroundColor: i < mastered ? accent : 'hsl(var(--muted))',
          }}
        />
      ))}
    </div>
  )
}

function BossButton({
  zoneId,
  state,
  zoneName,
  realmAccent,
}: {
  zoneId: string
  state: BossMarkerState
  zoneName: string
  realmAccent: string
}) {
  if (state.defeated) {
    return (
      <Link
        href={`/boss/${zoneId}`}
        data-boss-marker={zoneId}
        data-boss-state="defeated"
        className="group inline-flex items-center gap-1.5 rounded-full border bg-amber-500 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label={`${zoneName} boss, defeated. Replay`}
      >
        <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
        Boss cleared
      </Link>
    )
  }
  if (state.eligible) {
    return (
      <Link
        href={`/boss/${zoneId}`}
        data-boss-marker={zoneId}
        data-boss-state="available"
        className="group inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-safe:animate-pulse"
        style={{ backgroundColor: realmAccent }}
        aria-label={`${zoneName} boss, available now`}
      >
        <Sparkles className="h-3.5 w-3.5" aria-hidden />
        Boss ready
      </Link>
    )
  }
  return (
    <span
      data-boss-marker={zoneId}
      data-boss-state="locked"
      className="inline-flex items-center gap-1.5 rounded-full border border-dashed px-3 py-1.5 text-xs font-medium text-muted-foreground"
      aria-label={`${zoneName} boss, locked. Train every node first.`}
    >
      <Shield className="h-3.5 w-3.5" aria-hidden />
      Boss locked
    </span>
  )
}

function NodeTile({
  node,
  state,
  mastery,
}: {
  node: SkillNode
  state: LockState
  mastery: MasteryLevel
}) {
  const isLocked = state === 'locked'
  const isCompleted = state === 'completed'
  const tierColour = TIER_COLOURS[node.tier]
  const stars = masteryStarCount(mastery)

  const baseClasses =
    'group relative flex h-[104px] w-[152px] shrink-0 flex-col justify-between rounded-xl border bg-card p-3 text-left shadow-sm transition-all'
  const interactiveClasses = isLocked
    ? 'opacity-55 cursor-not-allowed'
    : 'hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'

  const ariaLabel =
    stars > 0
      ? `${node.title}, ${state}, ${stars} of 4 mastery stars`
      : `${node.title}, ${state}`

  const inner = (
    <>
      <span
        aria-hidden
        className="absolute left-0 top-3 h-9 w-1 rounded-r-full"
        style={{ backgroundColor: tierColour }}
      />
      <div className="flex items-center justify-between">
        <span
          className={
            'flex h-6 w-6 items-center justify-center rounded-full ' +
            (isCompleted
              ? 'text-white'
              : isLocked
                ? 'text-muted-foreground'
                : 'text-foreground')
          }
          style={{
            backgroundColor: isCompleted
              ? tierColour
              : 'hsl(var(--muted))',
          }}
          aria-hidden
        >
          {isCompleted ? (
            <Check className="h-3.5 w-3.5" />
          ) : isLocked ? (
            <Lock className="h-3.5 w-3.5" />
          ) : (
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: tierColour }}
            />
          )}
        </span>
        <span
          className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground"
          aria-hidden
        >
          {TIER_LABELS[node.tier]}
        </span>
      </div>

      <p className="line-clamp-2 text-[13px] font-semibold leading-snug">
        {node.title}
      </p>

      <div className="text-[12px] font-medium" style={{ color: tierColour }}>
        {stars > 0
          ? '★'.repeat(stars) + '☆'.repeat(4 - stars)
          : ''}
      </div>
    </>
  )

  if (isLocked) {
    return (
      <div
        data-skill-node={node.id}
        data-skill-state={state}
        data-mastery-level={mastery}
        data-mastery-stars={stars}
        className={`${baseClasses} ${interactiveClasses}`}
        aria-label={ariaLabel}
      >
        {inner}
      </div>
    )
  }

  return (
    <Link
      href={`/learn/${node.id}`}
      data-skill-node={node.id}
      data-skill-state={state}
      data-mastery-level={mastery}
      data-mastery-stars={stars}
      className={`${baseClasses} ${interactiveClasses}`}
      aria-label={ariaLabel}
    >
      {inner}
    </Link>
  )
}

function ChevronSeparator({ accent }: { accent: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      className="shrink-0"
      role="presentation"
      aria-hidden
    >
      <path
        d="M 6 4 L 13 10 L 6 16"
        stroke={accent}
        strokeOpacity="0.6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

export function RealmZoneStack({
  nodes,
  layout,
  lockStates,
  masteryByNodeId,
  bossesByZoneId,
  realmLabel,
  realmId,
}: RealmZoneStackProps) {
  if (nodes.length === 0) {
    return (
      <div
        className="rounded-xl border bg-card p-12 text-center"
        data-testid="skill-tree-empty"
      >
        <p className="text-lg font-semibold">
          {realmLabel} content is on the way
        </p>
        <p className="text-sm text-muted-foreground">
          New skill nodes for this realm will appear here as they land.
        </p>
      </div>
    )
  }

  const realmAccent = realmId
    ? `hsl(var(--realm-${realmId}))`
    : 'hsl(var(--primary))'
  const zones = summariseZones(nodes, layout)

  return (
    <div className="space-y-4" role="list" aria-label={`${realmLabel} zones`}>
      {zones.map((zone, zoneIndex) => {
        const masteredInZone = zone.nodes.filter(n => {
          const m = masteryByNodeId?.get(n.id) ?? 'none'
          return m !== 'none'
        }).length
        const totalInZone = zone.nodes.length
        const bossState = bossesByZoneId?.get(zone.zoneId)

        return (
          <section
            key={zone.zoneId}
            role="listitem"
            data-band-zone={zone.zoneId}
            className="rounded-2xl border bg-card p-4 shadow-sm sm:p-5"
            aria-labelledby={`zone-${zone.zoneId}-title`}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <p
                  className="text-[11px] font-semibold uppercase tracking-[0.18em]"
                  style={{ color: realmAccent }}
                >
                  Zone {zoneIndex + 1}
                </p>
                <h2
                  id={`zone-${zone.zoneId}-title`}
                  className="mt-0.5 truncate text-lg font-bold tracking-tight sm:text-xl"
                >
                  {zone.zoneName}
                </h2>
                <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                  <ProgressStrip
                    mastered={masteredInZone}
                    total={totalInZone}
                    accent={realmAccent}
                  />
                  <span className="tabular-nums">
                    {masteredInZone} of {totalInZone} mastered
                  </span>
                </div>
              </div>

              {bossState && (
                <BossButton
                  zoneId={zone.zoneId}
                  state={bossState}
                  zoneName={zone.zoneName}
                  realmAccent={realmAccent}
                />
              )}
            </div>

            <div className="mt-4 -mx-1 flex items-center gap-2 overflow-x-auto px-1 pb-1">
              {zone.nodes.map((node, idx) => {
                const state = lockStates.get(node.id) ?? 'locked'
                const mastery = masteryByNodeId?.get(node.id) ?? 'none'
                return (
                  <div key={node.id} className="flex items-center gap-2">
                    {idx > 0 && <ChevronSeparator accent={realmAccent} />}
                    <NodeTile node={node} state={state} mastery={mastery} />
                  </div>
                )
              })}
            </div>
          </section>
        )
      })}
    </div>
  )
}
