import type { SkillNode, Zone } from '@/types/content'
import { particleModelZone, statesOfMatter, diffusion } from './particle-model'
import { stateChanges } from './state-changes'
import {
  separatingMixturesZone,
  filtrationEvaporation,
} from './separating-mixtures'

export { particleModelZone, statesOfMatter, diffusion } from './particle-model'
export { stateChanges } from './state-changes'
export {
  separatingMixturesZone,
  filtrationEvaporation,
} from './separating-mixtures'

export const chemistryNodes: SkillNode[] = [
  statesOfMatter,
  stateChanges,
  diffusion,
  filtrationEvaporation,
]

export const chemistryZones: Zone[] = [
  particleModelZone,
  separatingMixturesZone,
]
