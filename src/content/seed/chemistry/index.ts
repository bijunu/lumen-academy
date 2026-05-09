import type { SkillNode, Zone } from '@/types/content'
import { particleModelZone, statesOfMatter } from './particle-model'
import { stateChanges } from './state-changes'

export { particleModelZone, statesOfMatter } from './particle-model'
export { stateChanges } from './state-changes'

export const chemistryNodes: SkillNode[] = [statesOfMatter, stateChanges]

export const chemistryZones: Zone[] = [particleModelZone]
