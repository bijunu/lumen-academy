import type { SkillNode, Zone } from '@/types/content'
import { particleModelZone, statesOfMatter, diffusion } from './particle-model'
import { stateChanges } from './state-changes'
import {
  separatingMixturesZone,
  filtrationEvaporation,
  distillation,
  chromatography,
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
import {
  acidsAlkalisZone,
  acidsAlkalisCommon,
  acidsAlkalisNeutralisation,
} from './acids-alkalis'
import { phZone, phScale, phStrongWeak } from './ph'
import { simpleReactionsZone, combustion, acidMetal } from './simple-reactions'

export { particleModelZone, statesOfMatter, diffusion } from './particle-model'
export { stateChanges } from './state-changes'
export {
  separatingMixturesZone,
  filtrationEvaporation,
  distillation,
  chromatography,
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
export {
  acidsAlkalisZone,
  acidsAlkalisCommon,
  acidsAlkalisNeutralisation,
} from './acids-alkalis'
export { phZone, phScale, phStrongWeak } from './ph'
export { simpleReactionsZone, combustion, acidMetal } from './simple-reactions'

export const chemistryNodes: SkillNode[] = [
  statesOfMatter,
  stateChanges,
  diffusion,
  filtrationEvaporation,
  distillation,
  chromatography,
  atomsElementsCompoundsBasics,
  symbolsAndSimpleFormulae,
  periodicTableLayout,
  periodicTableGroup1And7,
  acidsAlkalisCommon,
  acidsAlkalisNeutralisation,
  phScale,
  phStrongWeak,
  combustion,
  acidMetal,
]

export const chemistryZones: Zone[] = [
  particleModelZone,
  separatingMixturesZone,
  atomsZone,
  periodicTableZone,
  acidsAlkalisZone,
  phZone,
  simpleReactionsZone,
]
