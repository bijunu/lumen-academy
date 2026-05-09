import type { SkillNode } from '@/types/content'

export interface SkillTreePosition {
  x: number
  y: number
}

export interface SkillTreeEdge {
  from: string
  to: string
}

export interface SkillTreeBand {
  zoneId: string
  zoneName: string
  y0: number
  y1: number
}

export interface SkillTreeLayout {
  positions: Map<string, SkillTreePosition>
  edges: SkillTreeEdge[]
  bands: SkillTreeBand[]
}

export function layoutSkillTree(nodes: SkillNode[]): SkillTreeLayout {
  const positions = new Map<string, SkillTreePosition>()
  const edges: SkillTreeEdge[] = []
  const bands: SkillTreeBand[] = []

  if (nodes.length === 0) {
    return { positions, edges, bands }
  }

  const byId = new Map(nodes.map(n => [n.id, n]))

  const zoneOrder: string[] = []
  const zoneMembers = new Map<string, SkillNode[]>()
  const zoneNames = new Map<string, string>()
  for (const node of nodes) {
    if (!zoneMembers.has(node.zoneId)) {
      zoneOrder.push(node.zoneId)
      zoneMembers.set(node.zoneId, [])
      zoneNames.set(node.zoneId, node.zoneName)
    }
    zoneMembers.get(node.zoneId)!.push(node)
  }

  let nextY = 0
  for (const zoneId of zoneOrder) {
    const zoneNodes = zoneMembers.get(zoneId)!
    const zoneNodeIds = new Set(zoneNodes.map(n => n.id))

    const depthCache = new Map<string, number>()
    const visiting = new Set<string>()

    const depthOf = (id: string): number => {
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
        if (!zoneNodeIds.has(prereq)) continue
        const d = depthOf(prereq)
        if (d > maxPrereq) maxPrereq = d
      }
      visiting.delete(id)

      const result = maxPrereq + 1
      depthCache.set(id, result)
      return result
    }

    const byDepth = new Map<number, SkillNode[]>()
    for (const node of zoneNodes) {
      const d = depthOf(node.id)
      const layer = byDepth.get(d) ?? []
      layer.push(node)
      byDepth.set(d, layer)
    }

    let bandHeight = 0
    Array.from(byDepth.values()).forEach(layer => {
      if (layer.length > bandHeight) bandHeight = layer.length
    })

    const sortedDepths = Array.from(byDepth.keys()).sort((a, b) => a - b)
    for (const depth of sortedDepths) {
      const layer = byDepth.get(depth)!
      layer.sort((a, b) => a.title.localeCompare(b.title))
      layer.forEach((node, i) => {
        positions.set(node.id, { x: depth, y: nextY + i })
      })
    }

    bands.push({
      zoneId,
      zoneName: zoneNames.get(zoneId)!,
      y0: nextY,
      y1: nextY + bandHeight - 1,
    })

    nextY += bandHeight
  }

  for (const node of nodes) {
    for (const prereq of node.prerequisites) {
      if (byId.has(prereq)) {
        edges.push({ from: prereq, to: node.id })
      }
    }
  }

  return { positions, edges, bands }
}
