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
import { daltonAtomicModel } from './atoms-dalton-model'
import { protonsNeutronsElectrons } from './atoms-protons-neutrons-electrons'
import { atomicNumberAndMassNumber } from './atoms-atomic-mass-number'
import { isotopesAndProperties } from './atoms-isotopes'
import { electronShellsArrangement } from './atoms-electron-shells'
import { readingPeriodicTableCell } from './atoms-periodic-table-cell'
import { countingAtomsInBrackets } from './atoms-counting-brackets'
import { plumPuddingToNuclear } from './atoms-plum-pudding-nuclear'
import { relativeAtomicMass } from './atoms-relative-atomic-mass'
import { ionicBondingIntro } from './atoms-ionic-bonding-intro'
import { writingIonicFormulae } from './atoms-ionic-formulae'
import {
  periodicTableZone,
  periodicTableLayout,
  periodicTableGroup1And7,
} from './periodic-table'
import { mendeleevPeriodicTable } from './periodic-table-mendeleev'
import { electronShellsAndGroups } from './periodic-table-electron-shells'
import { group1ReactionsWithWater } from './periodic-table-group-1-water'
import { group7PhysicalStates } from './periodic-table-group-7-states'
import { halogenDisplacement } from './periodic-table-halogen-displacement'
import { reactivitySeriesBasics } from './periodic-table-reactivity-series'
import { group0NobleGases } from './periodic-table-group-0'
import { periodTrendsMetallicCharacter } from './periodic-table-period-trends'
import { transitionMetalsOverview } from './periodic-table-transition-metals'
import { predictElementProperties } from './periodic-table-predict-properties'
import { atomicRadiusAndShielding } from './periodic-table-atomic-radius'
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
export { daltonAtomicModel } from './atoms-dalton-model'
export { protonsNeutronsElectrons } from './atoms-protons-neutrons-electrons'
export { atomicNumberAndMassNumber } from './atoms-atomic-mass-number'
export { isotopesAndProperties } from './atoms-isotopes'
export { electronShellsArrangement } from './atoms-electron-shells'
export { readingPeriodicTableCell } from './atoms-periodic-table-cell'
export { countingAtomsInBrackets } from './atoms-counting-brackets'
export { plumPuddingToNuclear } from './atoms-plum-pudding-nuclear'
export { relativeAtomicMass } from './atoms-relative-atomic-mass'
export { ionicBondingIntro } from './atoms-ionic-bonding-intro'
export { writingIonicFormulae } from './atoms-ionic-formulae'
export {
  periodicTableZone,
  periodicTableLayout,
  periodicTableGroup1And7,
} from './periodic-table'
export { mendeleevPeriodicTable } from './periodic-table-mendeleev'
export { electronShellsAndGroups } from './periodic-table-electron-shells'
export { group1ReactionsWithWater } from './periodic-table-group-1-water'
export { group7PhysicalStates } from './periodic-table-group-7-states'
export { halogenDisplacement } from './periodic-table-halogen-displacement'
export { reactivitySeriesBasics } from './periodic-table-reactivity-series'
export { group0NobleGases } from './periodic-table-group-0'
export { periodTrendsMetallicCharacter } from './periodic-table-period-trends'
export { transitionMetalsOverview } from './periodic-table-transition-metals'
export { predictElementProperties } from './periodic-table-predict-properties'
export { atomicRadiusAndShielding } from './periodic-table-atomic-radius'
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
  daltonAtomicModel,
  protonsNeutronsElectrons,
  atomicNumberAndMassNumber,
  isotopesAndProperties,
  electronShellsArrangement,
  readingPeriodicTableCell,
  countingAtomsInBrackets,
  plumPuddingToNuclear,
  relativeAtomicMass,
  ionicBondingIntro,
  writingIonicFormulae,
  periodicTableLayout,
  periodicTableGroup1And7,
  mendeleevPeriodicTable,
  electronShellsAndGroups,
  group1ReactionsWithWater,
  group7PhysicalStates,
  halogenDisplacement,
  reactivitySeriesBasics,
  group0NobleGases,
  periodTrendsMetallicCharacter,
  transitionMetalsOverview,
  predictElementProperties,
  atomicRadiusAndShielding,
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
