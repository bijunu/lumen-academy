import type { ContentRepository } from './contentRepository'
import type { SkillNode, Zone } from '@/types/content'
import type { RealmId } from '@/lib/constants/realms'
import { fractionsZoneNodes } from '@/content/seed'

const allNodes: SkillNode[] = [...fractionsZoneNodes]

const zones: Zone[] = [
  {
    id: 'maths-fractions',
    name: 'Fractions',
    realm: 'numerica',
    nodeIds: fractionsZoneNodes.map(n => n.id),
  },
]

export class LocalContentRepository implements ContentRepository {
  async getNode(id: string): Promise<SkillNode | null> {
    return allNodes.find(n => n.id === id) ?? null
  }

  async getZoneNodes(zoneId: string): Promise<SkillNode[]> {
    return allNodes.filter(n => n.zoneId === zoneId)
  }

  async getRealmZones(realmId: RealmId): Promise<Zone[]> {
    return zones.filter(z => z.realm === realmId)
  }

  async getAllNodes(): Promise<SkillNode[]> {
    return [...allNodes]
  }
}

export const localContent = new LocalContentRepository()
