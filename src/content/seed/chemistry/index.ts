import type { SkillNode, Zone } from '@/types/content'
import { particleModelZone, statesOfMatter } from './particle-model'

export { particleModelZone, statesOfMatter } from './particle-model'

export const chemistryNodes: SkillNode[] = [statesOfMatter]

export const chemistryZones: Zone[] = [particleModelZone]
