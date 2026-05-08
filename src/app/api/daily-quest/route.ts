import { NextResponse } from 'next/server'

import { auth } from '@/lib/auth/authOptions'
import { getContentRepository } from '@/lib/content'
import { getDailyQuestRepository } from '@/lib/dailyQuest/dailyQuestRepository'
import { pickTasks } from '@/lib/dailyQuest/pickTasks'
import { logger } from '@/lib/logger'
import { getProgressRepository } from '@/lib/progress/progressRepository'
import { utcDayKey } from '@/lib/time/utcDay'

export const runtime = 'nodejs'

export async function GET() {
  const session = await auth()
  if (!session?.user) {
    return NextResponse.json({ error: 'unauthorised' }, { status: 401 })
  }

  const userId = session.user.id
  const now = new Date()
  const day = utcDayKey(now)

  try {
    const contentRepo = getContentRepository()
    const progressRepo = getProgressRepository()

    const [allNodes, dueProgress, touchedIds] = await Promise.all([
      contentRepo.getAllNodes(),
      progressRepo.listDueReviews(userId, now),
      progressRepo.listTouchedNodeIds(userId),
    ])

    const dueNodeIds = dueProgress.map(p => p.nodeId)
    const touchedSet = new Set(touchedIds)
    const untouchedNodeIds = allNodes
      .map(n => n.id)
      .filter(id => !touchedSet.has(id))

    const repo = getDailyQuestRepository()
    const record = await repo.getOrCreate({
      userId,
      utcDay: day,
      pick: () =>
        pickTasks({
          dueNodeIds,
          untouchedNodeIds,
          seedKey: `${userId}:${day}`,
        }),
      now,
    })

    if (!record) {
      return NextResponse.json({ status: 'no-content' as const })
    }

    const nodeIndex = new Map(allNodes.map(n => [n.id, n]))
    const taskNodes = record.tasks.map(t => {
      const node = nodeIndex.get(t.nodeId)
      return node
        ? { id: node.id, title: node.title, realm: node.realm }
        : { id: t.nodeId, title: t.nodeId, realm: 'numerica' as const }
    })

    return NextResponse.json({
      status: 'ok' as const,
      quest: record,
      nodes: taskNodes,
    })
  } catch (err) {
    logger.error('dailyQuest.get.failed', { err })
    return NextResponse.json({ error: 'internal-error' }, { status: 500 })
  }
}
