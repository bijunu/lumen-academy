import type { SkillNode, Zone } from '@/types/content'
import { particleModelZone, statesOfMatter, diffusion } from './particle-model'
import { stateChanges } from './state-changes'
import {
  separatingMixturesZone,
  filtrationEvaporation,
  distillation,
} from './separating-mixtures'
import { atomsZone, atomsElementsCompoundsBasics } from './atoms'

export { particleModelZone, statesOfMatter, diffusion } from './particle-model'
export { stateChanges } from './state-changes'
export {
  separatingMixturesZone,
  filtrationEvaporation,
  distillation,
} from './separating-mixtures'
export { atomsZone, atomsElementsCompoundsBasics } from './atoms'

export const chemistryNodes: SkillNode[] = [
  statesOfMatter,
  stateChanges,
  diffusion,
  filtrationEvaporation,
  distillation,
  atomsElementsCompoundsBasics,
]

export const chemistryZones: Zone[] = [
  particleModelZone,
  separatingMixturesZone,
  atomsZone,
]
