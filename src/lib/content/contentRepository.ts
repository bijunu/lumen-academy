import type { SkillNode, Zone } from '@/types/content'
import type { RealmId } from '@/lib/constants/realms'

export interface ContentRepository {
  getNode(id: string): Promise<SkillNode | null>
  getZoneNodes(zoneId: string): Promise<SkillNode[]>
  getRealmZones(realmId: RealmId): Promise<Zone[]>
  getAllNodes(): Promise<SkillNode[]>
}
