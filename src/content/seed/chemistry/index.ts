import type { SkillNode, Zone } from '@/types/content'
import { particleModelZone, statesOfMatter, diffusion } from './particle-model'
import { stateChanges } from './state-changes'

export { particleModelZone, statesOfMatter, diffusion } from './particle-model'
export { stateChanges } from './state-changes'

export const chemistryNodes: SkillNode[] = [statesOfMatter, stateChanges, diffusion]

export const chemistryZones: Zone[] = [particleModelZone]
