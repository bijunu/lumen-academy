'use client'

import Link from 'next/link'

import { REALMS, type RealmId } from '@/lib/constants/realms'
import { ElementiaArt } from './realm-art/ElementiaArt'
import { MechanicaArt } from './realm-art/MechanicaArt'
import { NumericaArt } from './realm-art/NumericaArt'
import { VitaliaArt } from './realm-art/VitaliaArt'

const ART_BY_REALM: Record<RealmId, () => JSX.Element> = {
  numerica: NumericaArt,
  vitalia: VitaliaArt,
  elementia: ElementiaArt,
  mechanica: MechanicaArt,
}

interface RealmTileProps {
  realmId: RealmId
  mastered: number
  total: number
}

export function RealmTile({ realmId, mastered, total }: RealmTileProps) {
  const realm = REALMS[realmId]
  const Art = ART_BY_REALM[realmId]
  const Icon = realm.icon
  const percent = total > 0 ? Math.round((mastered / total) * 100) : 0

  return (
    <Link
      href={`/realm/${realm.id}`}
      className="group relative flex aspect-[16/9] flex-col justify-end overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label={`Enter ${realm.label}: ${mastered} of ${total} nodes mastered`}
    >
      <div className="absolute inset-0">
        <Art />
      </div>

      <div className="relative flex items-end justify-between gap-3 bg-gradient-to-t from-background/95 via-background/70 to-transparent p-4">
        <div>
          <div className="flex items-center gap-2">
            <Icon
              className="h-4 w-4"
              style={{ color: realm.colour }}
              aria-hidden
            />
            <span className="text-xs uppercase tracking-wider text-muted-foreground">
              {realm.subject.charAt(0).toUpperCase() + realm.subject.slice(1)}
            </span>
          </div>
          <h3 className="mt-0.5 text-lg font-semibold tracking-tight">
            {realm.label}
          </h3>
        </div>

        <div className="text-right">
          <p className="text-sm font-semibold tabular-nums">
            {mastered}
            <span className="text-muted-foreground">/{total}</span>
          </p>
          <p className="text-xs text-muted-foreground">{percent}% mastered</p>
        </div>
      </div>

      <div className="relative h-1 bg-muted">
        <div
          className="h-full transition-all"
          style={{
            width: `${percent}%`,
            backgroundColor: realm.colour,
          }}
          aria-hidden
        />
      </div>
    </Link>
  )
}
