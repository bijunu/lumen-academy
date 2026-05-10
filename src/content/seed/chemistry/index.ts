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
import {
  periodicTableZone,
  periodicTableLayout,
  periodicTableGroup1And7,
} from './periodic-table'

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
export {
  periodicTableZone,
  periodicTableLayout,
  periodicTableGroup1And7,
} from './periodic-table'

export const chemistryNodes: SkillNode[] = [
  statesOfMatter,
  stateChanges,
  diffusion,
  filtrationEvaporation,
  distillation,
  atomsElementsCompoundsBasics,
  symbolsAndSimpleFormulae,
  periodicTableLayout,
  periodicTableGroup1And7,
]

export const chemistryZones: Zone[] = [
  particleModelZone,
  separatingMixturesZone,
  atomsZone,
  periodicTableZone,
]
