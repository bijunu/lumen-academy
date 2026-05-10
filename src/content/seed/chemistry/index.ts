import type { SkillNode, Zone } from '@/types/content'
import { particleModelZone, statesOfMatter, diffusion } from './particle-model'
import { stateChanges } from './state-changes'
import {
  separatingMixturesZone,
  filtrationEvaporation,
  distillation,
} from './separating-mixtures'
import {
  atomsZone,
  atomsElementsCompoundsBasics,
  symbolsAndSimpleFormulae,
} from './atoms'

export { particleModelZone, statesOfMatter, diffusion } from './particle-model'
export { stateChanges } from './state-changes'
export {
  separatingMixturesZone,
  filtrationEvaporation,
  distillation,
} from './separating-mixtures'
export {
  atomsZone,
  atomsElementsCompoundsBasics,
  symbolsAndSimpleFormulae,
} from './atoms'

export const chemistryNodes: SkillNode[] = [
  statesOfMatter,
  stateChanges,
  diffusion,
  filtrationEvaporation,
  distillation,
  atomsElementsCompoundsBasics,
  symbolsAndSimpleFormulae,
]

export const chemistryZones: Zone[] = [
  particleModelZone,
  separatingMixturesZone,
  atomsZone,
]
