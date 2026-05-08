import { notFound } from 'next/navigation'

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

  const allNodes = await getContentRepository().getAllNodes()
  const realmNodes = allNodes.filter(n => n.realm === params.realmId)

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

  return (
    <div className="space-y-4">
      <header>
        <h1 className="text-2xl font-bold tracking-tight">{realm.label}</h1>
        <p className="text-sm text-muted-foreground">
          Pan with the mouse and zoom with the wheel. Pick an unlocked node to begin.
        </p>
      </header>
      <RealmMapClient
        nodes={realmNodes}
        progressByNodeId={progressByNodeId}
        defeatedZoneIds={defeatedZoneIds}
        realmLabel={realm.label}
      />
    </div>
  )
}
