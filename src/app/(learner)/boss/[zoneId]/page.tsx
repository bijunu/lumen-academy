import { notFound, redirect } from 'next/navigation'

import { auth } from '@/lib/auth/authOptions'
import { isBossEligible } from '@/lib/boss/bossEligibility'
import { getContentRepository } from '@/lib/content'
import { getProgressRepository } from '@/lib/progress/progressRepository'
import type { NodeProgress } from '@/types/progress'

import { BossClient } from './BossClient'

export const dynamic = 'force-dynamic'

interface BossPageProps {
  params: { zoneId: string }
}

export default async function BossPage({ params }: BossPageProps) {
  const session = await auth()
  if (!session?.user) {
    redirect('/api/auth/signin')
  }

  const contentRepo = getContentRepository()
  const allNodes = await contentRepo.getAllNodes()
  const zoneNodes = allNodes.filter(n => n.zoneId === params.zoneId)
  if (zoneNodes.length === 0) {
    notFound()
  }
  const realmId = zoneNodes[0].realm
  const zoneName = zoneNodes[0].zoneName

  const progressRepo = getProgressRepository()
  const progressMap = new Map<string, NodeProgress>()
  for (const node of zoneNodes) {
    const p = await progressRepo.getNodeProgress(session.user.id, node.id)
    if (p) progressMap.set(node.id, p)
  }

  if (!isBossEligible(zoneNodes, progressMap)) {
    redirect(`/realm/${realmId}`)
  }

  return <BossClient zoneId={params.zoneId} zoneName={zoneName} realmId={realmId} />
}
