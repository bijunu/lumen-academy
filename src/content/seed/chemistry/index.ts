import type { SkillNode, Zone } from '@/types/content'
import { particleModelZone, statesOfMatter, diffusion } from './particle-model'
import { stateChanges } from './state-changes'
import { evaporationAndBoiling } from './particle-model-evaporation-boiling'
import { gasPressureAndCollisions } from './particle-model-gas-pressure'
import { densityAndState } from './particle-model-density-state'
import { compressibility } from './particle-model-compressibility'
import { temperatureParticleMotion } from './particle-model-temperature-energy'
import { diffusionFactors } from './particle-model-diffusion-factors'
import { shapeAndVolume } from './particle-model-shape-volume'
import { brownianMotion } from './particle-model-brownian-motion'
import { latentHeatHeatingCurves } from './particle-model-latent-heat'
import { surfaceTensionAndIntermolecularForces } from './particle-model-surface-tension'
import {
  separatingMixturesZone,
  filtrationEvaporation,
  distillation,
  chromatography,
} from './separating-mixtures'
import { pureSubstancePurityTesting } from './separating-pure-substance'
import { solubilityCurves } from './separating-solubility-curves'
import { saturatedSolutions } from './separating-saturated-solutions'
import { crystallisationCooling } from './separating-crystallisation-cooling'
import { crystallisationEvaporation } from './separating-crystallisation-evaporation'
import { immiscibleFunnel } from './separating-immiscible-funnel'
import { magneticSeparation } from './separating-magnetic'
import { dryingDesiccant } from './separating-drying-desiccant'
import { rfValue } from './separating-rf-value'
import { decanting } from './separating-decanting'
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
import { simpleReactionsZone, combustion, acidMetal, rusting } from './simple-reactions'

export { particleModelZone, statesOfMatter, diffusion } from './particle-model'
export { stateChanges } from './state-changes'
export { evaporationAndBoiling } from './particle-model-evaporation-boiling'
export { gasPressureAndCollisions } from './particle-model-gas-pressure'
export { densityAndState } from './particle-model-density-state'
export { compressibility } from './particle-model-compressibility'
export { temperatureParticleMotion } from './particle-model-temperature-energy'
export { diffusionFactors } from './particle-model-diffusion-factors'
export { shapeAndVolume } from './particle-model-shape-volume'
export { brownianMotion } from './particle-model-brownian-motion'
export { latentHeatHeatingCurves } from './particle-model-latent-heat'
export { surfaceTensionAndIntermolecularForces } from './particle-model-surface-tension'
export {
  separatingMixturesZone,
  filtrationEvaporation,
  distillation,
  chromatography,
} from './separating-mixtures'
export { pureSubstancePurityTesting } from './separating-pure-substance'
export { solubilityCurves } from './separating-solubility-curves'
export { saturatedSolutions } from './separating-saturated-solutions'
export { crystallisationCooling } from './separating-crystallisation-cooling'
export { crystallisationEvaporation } from './separating-crystallisation-evaporation'
export { immiscibleFunnel } from './separating-immiscible-funnel'
export { magneticSeparation } from './separating-magnetic'
export { dryingDesiccant } from './separating-drying-desiccant'
export { rfValue } from './separating-rf-value'
export { decanting } from './separating-decanting'
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
export { simpleReactionsZone, combustion, acidMetal, rusting } from './simple-reactions'

export const chemistryNodes: SkillNode[] = [
  statesOfMatter,
  stateChanges,
  diffusion,
  evaporationAndBoiling,
  gasPressureAndCollisions,
  densityAndState,
  compressibility,
  temperatureParticleMotion,
  diffusionFactors,
  shapeAndVolume,
  brownianMotion,
  latentHeatHeatingCurves,
  surfaceTensionAndIntermolecularForces,
  filtrationEvaporation,
  distillation,
  chromatography,
  pureSubstancePurityTesting,
  solubilityCurves,
  saturatedSolutions,
  crystallisationCooling,
  crystallisationEvaporation,
  immiscibleFunnel,
  magneticSeparation,
  dryingDesiccant,
  rfValue,
  decanting,
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
  rusting,
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
