import type { SkillNode } from '@/types/content'

export interface SkillTreePosition {
  x: number
  y: number
}

export interface SkillTreeEdge {
  from: string
  to: string
}

export interface SkillTreeLayout {
  positions: Map<string, SkillTreePosition>
  edges: SkillTreeEdge[]
}

export function layoutSkillTree(nodes: SkillNode[]): SkillTreeLayout {
  const positions = new Map<string, SkillTreePosition>()
  const edges: SkillTreeEdge[] = []

  if (nodes.length === 0) {
    return { positions, edges }
  }

  const byId = new Map(nodes.map(n => [n.id, n]))
  const depthCache = new Map<string, number>()
  const visiting = new Set<string>()

  function depthOf(id: string): number {
    const cached = depthCache.get(id)
    if (cached !== undefined) return cached
    if (visiting.has(id)) {
      throw new Error(`Cycle in skill tree at node ${id}`)
    }

    const node = byId.get(id)
    if (!node) return 0

    visiting.add(id)
    let maxPrereq = -1
    for (const prereq of node.prerequisites) {
      if (!byId.has(prereq)) continue
      const d = depthOf(prereq)
      if (d > maxPrereq) maxPrereq = d
    }
    visiting.delete(id)

    const result = maxPrereq + 1
    depthCache.set(id, result)
    return result
  }

  const byLayer = new Map<number, SkillNode[]>()
  for (const node of nodes) {
    const d = depthOf(node.id)
    const layer = byLayer.get(d) ?? []
    layer.push(node)
    byLayer.set(d, layer)
  }

  const sortedDepths = Array.from(byLayer.keys()).sort((a, b) => a - b)
  for (const depth of sortedDepths) {
    const layer = byLayer.get(depth)!
    layer.sort((a, b) => {
      if (a.zoneId !== b.zoneId) return a.zoneId.localeCompare(b.zoneId)
      return a.title.localeCompare(b.title)
    })
    layer.forEach((node, i) => {
      positions.set(node.id, { x: depth, y: i })
    })
  }

  for (const node of nodes) {
    for (const prereq of node.prerequisites) {
      if (byId.has(prereq)) {
        edges.push({ from: prereq, to: node.id })
      }
    }
  }

  return { positions, edges }
}
