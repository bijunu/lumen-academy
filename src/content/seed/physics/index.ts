import type { SkillNode, Zone } from '@/types/content'

import {
  electricityCircuitSymbols,
  electricitySeriesParallel,
  electricityCurrentVoltage,
  electricityCircuitsZoneNodes,
} from './electricity-circuits'
import {
  electricityVoltageRules,
  electricityVoltageRulesZoneNodes,
} from './electricity-voltage-rules'
import {
  electricityLampBrightness,
  electricityLampBrightnessZoneNodes,
} from './electricity-lamp-brightness'
import {
  electricityBuildingSeries,
  electricityBuildingSeriesZoneNodes,
} from './electricity-building-series'
import {
  electricityHazards,
  electricityHazardsZoneNodes,
} from './electricity-hazards'
import {
  electricityResistanceFactors,
  electricityResistanceFactorsZoneNodes,
} from './electricity-resistance-factors'
import {
  electricityReadingMeters,
  electricityReadingMetersZoneNodes,
} from './electricity-reading-meters'
import {
  electricitySwitchesCells,
  electricitySwitchesCellsZoneNodes,
} from './electricity-switches-cells'
import {
  electricityUkMains,
  electricityUkMainsZoneNodes,
} from './electricity-uk-mains'
import {
  electricityStaticBasics,
  electricityStaticBasicsZoneNodes,
} from './electricity-static-basics'
import {
  electricityOhmsLawPractice,
  electricityOhmsLawPracticeZoneNodes,
} from './electricity-ohms-law-practice'
import {
  electricityCurrentRules,
  electricityCurrentRulesZoneNodes,
} from './electricity-current-rules'
import {
  electricityPowerFormula,
  electricityPowerFormulaZoneNodes,
} from './electricity-power-formula'
import {
  electricityFusesPlugRatings,
  electricityFusesPlugRatingsZoneNodes,
} from './electricity-fuses-plug-ratings'
import {
  electricityFaultFinding,
  electricityFaultFindingZoneNodes,
} from './electricity-fault-finding'
import {
  forcesTypes,
  forcesBalanced,
  forcesFriction,
  forcesZoneNodes,
  forcesZone,
} from './forces'
import {
  forcesFreeBody,
  forcesFreeBodyZoneNodes,
} from './forces-free-body'
import {
  forcesResultant1D,
  forcesResultant1DZoneNodes,
} from './forces-resultant-1d'
import {
  forcesSpeedDistanceTime,
  forcesSpeedDistanceTimeZoneNodes,
} from './forces-speed-distance-time'
import {
  forcesDistanceTimeGraphs,
  forcesDistanceTimeGraphsZoneNodes,
} from './forces-distance-time-graphs'
import {
  forcesScalarsVectors,
  forcesScalarsVectorsZoneNodes,
} from './forces-scalars-vectors'
import {
  forcesNewtonFirst,
  forcesNewtonFirstZoneNodes,
} from './forces-newton-first'
import {
  forcesHookesLaw,
  forcesHookesLawZoneNodes,
} from './forces-hookes-law'
import {
  forcesAcceleration,
  forcesAccelerationZoneNodes,
} from './forces-acceleration'
import {
  forcesNewtonSecond,
  forcesNewtonSecondZoneNodes,
} from './forces-newton-second'
import {
  forcesTerminalVelocity,
  forcesTerminalVelocityZoneNodes,
} from './forces-terminal-velocity'
import {
  forcesNewtonThird,
  forcesNewtonThirdZoneNodes,
} from './forces-newton-third'
import {
  forcesMoments,
  forcesMomentsZoneNodes,
} from './forces-moments'
import {
  gravityMassVsWeight,
  gravityWeightCalculation,
  gravityZoneNodes,
  gravityZone,
} from './gravity'
import {
  gravityOtherPlanets,
  gravityOtherPlanetsZoneNodes,
} from './gravity-other-planets'
import {
  gravityFreeFall,
  gravityFreeFallZoneNodes,
} from './gravity-free-fall'
import {
  gravityVacuumFall,
  gravityVacuumFallZoneNodes,
} from './gravity-vacuum-fall'
import {
  gravityEarthMoonTides,
  gravityEarthMoonTidesZoneNodes,
} from './gravity-earth-moon-tides'
import {
  gravitySatellitesOrbits,
  gravitySatellitesOrbitsZoneNodes,
} from './gravity-satellites-orbits'
import {
  gravityWeightlessness,
  gravityWeightlessnessZoneNodes,
} from './gravity-weightlessness'
import {
  gravityThirdLawPairs,
  gravityThirdLawPairsZoneNodes,
} from './gravity-third-law-pairs'
import {
  gravityCentreOfMass,
  gravityCentreOfMassZoneNodes,
} from './gravity-centre-of-mass'
import {
  gravityInverseSquare,
  gravityInverseSquareZoneNodes,
} from './gravity-inverse-square'
import {
  gravityMassWeightInstruments,
  gravityMassWeightInstrumentsZoneNodes,
} from './gravity-mass-weight-instruments'
import {
  energyStores,
  energyTransfers,
  energyEfficiency,
  energyZoneNodes,
  energyZone,
} from './energy'
import {
  energySankeyDiagrams,
  energySankeyDiagramsZoneNodes,
} from './energy-sankey-diagrams'
import {
  energyGravitationalPotential,
  energyGravitationalPotentialZoneNodes,
} from './energy-gravitational-potential'
import {
  energyConservation,
  energyConservationZoneNodes,
} from './energy-conservation'
import {
  energyKeGpeInterchange,
  energyKeGpeInterchangeZoneNodes,
} from './energy-ke-gpe-interchange'
import {
  energyUkMixRenewables,
  energyUkMixRenewablesZoneNodes,
} from './energy-uk-mix-renewables'
import {
  energyHomeInsulation,
  energyHomeInsulationZoneNodes,
} from './energy-home-insulation'
import {
  energyKinetic,
  energyKineticZoneNodes,
} from './energy-kinetic'
import {
  energyEfficiencyPercentage,
  energyEfficiencyPercentageZoneNodes,
} from './energy-efficiency-percentage'
import {
  energyPower,
  energyPowerZoneNodes,
} from './energy-power'
import {
  energyWorkDone,
  energyWorkDoneZoneNodes,
} from './energy-work-done'
import {
  energyNationalGrid,
  energyNationalGridZoneNodes,
} from './energy-national-grid'
import {
  energyElectricityCost,
  energyElectricityCostZoneNodes,
} from './energy-electricity-cost'
import {
  wavesAnatomy,
  wavesSoundLight,
  wavesZoneNodes,
  wavesZone,
} from './waves'
import {
  wavesFrequencyPeriod,
  wavesFrequencyPeriodZoneNodes,
} from './waves-frequency-period'
import {
  wavesLawOfReflection,
  wavesLawOfReflectionZoneNodes,
} from './waves-law-of-reflection'
import {
  wavesWaveEquation,
  wavesWaveEquationZoneNodes,
} from './waves-wave-equation'
import {
  wavesSpeedOfSound,
  wavesSpeedOfSoundZoneNodes,
} from './waves-speed-of-sound'
import {
  wavesLoudnessPitch,
  wavesLoudnessPitchZoneNodes,
} from './waves-loudness-pitch'
import {
  wavesPlaneMirrorImages,
  wavesPlaneMirrorImagesZoneNodes,
} from './waves-plane-mirror-images'
import {
  wavesEmSpectrum,
  wavesEmSpectrumZoneNodes,
} from './waves-em-spectrum'
import {
  wavesRefractionGlassBlock,
  wavesRefractionGlassBlockZoneNodes,
} from './waves-refraction-glass-block'
import {
  wavesDispersionPrism,
  wavesDispersionPrismZoneNodes,
} from './waves-dispersion-prism'
import {
  wavesEmUsesDangers,
  wavesEmUsesDangersZoneNodes,
} from './waves-em-uses-dangers'
import {
  wavesSkyBlueScattering,
  wavesSkyBlueScatteringZoneNodes,
} from './waves-sky-blue-scattering'
import {
  wavesDopplerEffect,
  wavesDopplerEffectZoneNodes,
} from './waves-doppler-effect'
import {
  spaceSolarSystem,
  spaceDayNightSeasons,
  spaceZoneNodes,
  spaceZone,
} from './space'
import {
  spaceMoonPhases,
  spaceMoonPhasesZoneNodes,
} from './space-moon-phases'
import {
  spaceOrbitsGravity,
  spaceOrbitsGravityZoneNodes,
} from './space-orbits-gravity'
import {
  spaceEclipses,
  spaceEclipsesZoneNodes,
} from './space-eclipses'
import {
  spaceSunAsStar,
  spaceSunAsStarZoneNodes,
} from './space-sun-as-star'
import {
  spaceLightYears,
  spaceLightYearsZoneNodes,
} from './space-light-years'
import {
  spaceSatellites,
  spaceSatellitesZoneNodes,
} from './space-satellites'
import {
  spaceGalaxies,
  spaceGalaxiesZoneNodes,
} from './space-galaxies'
import {
  spaceStarLifeCycle,
  spaceStarLifeCycleZoneNodes,
} from './space-star-life-cycle'
import {
  spaceBigBang,
  spaceBigBangZoneNodes,
} from './space-big-bang'
import {
  spaceCometsAsteroids,
  spaceCometsAsteroidsZoneNodes,
} from './space-comets-asteroids'
import {
  magnetismFields,
  magnetismElectromagnets,
  magnetismZoneNodes,
  magnetismZone,
} from './magnetism'

export {
  electricityCircuitSymbols,
  electricitySeriesParallel,
  electricityCurrentVoltage,
  electricityCircuitsZoneNodes,
  electricityVoltageRules,
  electricityVoltageRulesZoneNodes,
  electricityLampBrightness,
  electricityLampBrightnessZoneNodes,
  electricityBuildingSeries,
  electricityBuildingSeriesZoneNodes,
  electricityHazards,
  electricityHazardsZoneNodes,
  electricityReadingMeters,
  electricityReadingMetersZoneNodes,
  electricitySwitchesCells,
  electricitySwitchesCellsZoneNodes,
  electricityResistanceFactors,
  electricityResistanceFactorsZoneNodes,
  electricityUkMains,
  electricityUkMainsZoneNodes,
  electricityOhmsLawPractice,
  electricityOhmsLawPracticeZoneNodes,
  electricityCurrentRules,
  electricityCurrentRulesZoneNodes,
  electricityPowerFormula,
  electricityPowerFormulaZoneNodes,
  electricityFusesPlugRatings,
  electricityFusesPlugRatingsZoneNodes,
  electricityFaultFinding,
  electricityFaultFindingZoneNodes,
  electricityStaticBasics,
  electricityStaticBasicsZoneNodes,
  forcesTypes,
  forcesBalanced,
  forcesFriction,
  forcesZoneNodes,
  forcesZone,
  forcesFreeBody,
  forcesFreeBodyZoneNodes,
  forcesResultant1D,
  forcesResultant1DZoneNodes,
  forcesSpeedDistanceTime,
  forcesSpeedDistanceTimeZoneNodes,
  forcesDistanceTimeGraphs,
  forcesDistanceTimeGraphsZoneNodes,
  forcesScalarsVectors,
  forcesScalarsVectorsZoneNodes,
  forcesNewtonFirst,
  forcesNewtonFirstZoneNodes,
  forcesHookesLaw,
  forcesHookesLawZoneNodes,
  forcesAcceleration,
  forcesAccelerationZoneNodes,
  forcesNewtonSecond,
  forcesNewtonSecondZoneNodes,
  forcesTerminalVelocity,
  forcesTerminalVelocityZoneNodes,
  forcesNewtonThird,
  forcesNewtonThirdZoneNodes,
  forcesMoments,
  forcesMomentsZoneNodes,
  gravityMassVsWeight,
  gravityWeightCalculation,
  gravityZoneNodes,
  gravityZone,
  gravityOtherPlanets,
  gravityOtherPlanetsZoneNodes,
  gravityFreeFall,
  gravityFreeFallZoneNodes,
  gravityVacuumFall,
  gravityVacuumFallZoneNodes,
  gravityEarthMoonTides,
  gravityEarthMoonTidesZoneNodes,
  gravitySatellitesOrbits,
  gravitySatellitesOrbitsZoneNodes,
  gravityWeightlessness,
  gravityWeightlessnessZoneNodes,
  gravityThirdLawPairs,
  gravityThirdLawPairsZoneNodes,
  gravityCentreOfMass,
  gravityCentreOfMassZoneNodes,
  gravityInverseSquare,
  gravityInverseSquareZoneNodes,
  gravityMassWeightInstruments,
  gravityMassWeightInstrumentsZoneNodes,
  energyStores,
  energyTransfers,
  energyEfficiency,
  energyZoneNodes,
  energyZone,
  energySankeyDiagrams,
  energySankeyDiagramsZoneNodes,
  energyGravitationalPotential,
  energyGravitationalPotentialZoneNodes,
  energyConservation,
  energyConservationZoneNodes,
  energyKeGpeInterchange,
  energyKeGpeInterchangeZoneNodes,
  energyUkMixRenewables,
  energyUkMixRenewablesZoneNodes,
  energyHomeInsulation,
  energyHomeInsulationZoneNodes,
  energyKinetic,
  energyKineticZoneNodes,
  energyEfficiencyPercentage,
  energyEfficiencyPercentageZoneNodes,
  energyPower,
  energyPowerZoneNodes,
  energyWorkDone,
  energyWorkDoneZoneNodes,
  energyNationalGrid,
  energyNationalGridZoneNodes,
  energyElectricityCost,
  energyElectricityCostZoneNodes,
  wavesAnatomy,
  wavesSoundLight,
  wavesZoneNodes,
  wavesZone,
  wavesFrequencyPeriod,
  wavesFrequencyPeriodZoneNodes,
  wavesLawOfReflection,
  wavesLawOfReflectionZoneNodes,
  wavesWaveEquation,
  wavesWaveEquationZoneNodes,
  wavesSpeedOfSound,
  wavesSpeedOfSoundZoneNodes,
  wavesLoudnessPitch,
  wavesLoudnessPitchZoneNodes,
  wavesPlaneMirrorImages,
  wavesPlaneMirrorImagesZoneNodes,
  wavesEmSpectrum,
  wavesEmSpectrumZoneNodes,
  wavesRefractionGlassBlock,
  wavesRefractionGlassBlockZoneNodes,
  wavesDispersionPrism,
  wavesDispersionPrismZoneNodes,
  wavesEmUsesDangers,
  wavesEmUsesDangersZoneNodes,
  wavesSkyBlueScattering,
  wavesSkyBlueScatteringZoneNodes,
  wavesDopplerEffect,
  wavesDopplerEffectZoneNodes,
  spaceSolarSystem,
  spaceDayNightSeasons,
  spaceZoneNodes,
  spaceZone,
  spaceMoonPhases,
  spaceMoonPhasesZoneNodes,
  spaceOrbitsGravity,
  spaceOrbitsGravityZoneNodes,
  spaceEclipses,
  spaceEclipsesZoneNodes,
  spaceSunAsStar,
  spaceSunAsStarZoneNodes,
  spaceSatellites,
  spaceSatellitesZoneNodes,
  spaceLightYears,
  spaceLightYearsZoneNodes,
  spaceGalaxies,
  spaceGalaxiesZoneNodes,
  spaceStarLifeCycle,
  spaceStarLifeCycleZoneNodes,
  spaceBigBang,
  spaceBigBangZoneNodes,
  spaceCometsAsteroids,
  spaceCometsAsteroidsZoneNodes,
  magnetismFields,
  magnetismElectromagnets,
  magnetismZoneNodes,
  magnetismZone,
}

export const physicsNodes: SkillNode[] = [
  ...electricityCircuitsZoneNodes,
  ...electricityVoltageRulesZoneNodes,
  ...electricityLampBrightnessZoneNodes,
  ...electricityBuildingSeriesZoneNodes,
  ...electricityHazardsZoneNodes,
  ...electricityReadingMetersZoneNodes,
  ...electricityResistanceFactorsZoneNodes,
  ...electricityUkMainsZoneNodes,
  ...electricityOhmsLawPracticeZoneNodes,
  ...electricityCurrentRulesZoneNodes,
  ...electricityPowerFormulaZoneNodes,
  ...electricityFaultFindingZoneNodes,
  ...electricityFusesPlugRatingsZoneNodes,
  ...electricitySwitchesCellsZoneNodes,
  ...electricityStaticBasicsZoneNodes,
  ...forcesZoneNodes,
  ...forcesFreeBodyZoneNodes,
  ...forcesResultant1DZoneNodes,
  ...forcesSpeedDistanceTimeZoneNodes,
  ...forcesDistanceTimeGraphsZoneNodes,
  ...forcesScalarsVectorsZoneNodes,
  ...forcesNewtonFirstZoneNodes,
  ...forcesHookesLawZoneNodes,
  ...forcesAccelerationZoneNodes,
  ...forcesNewtonSecondZoneNodes,
  ...forcesTerminalVelocityZoneNodes,
  ...forcesNewtonThirdZoneNodes,
  ...forcesMomentsZoneNodes,
  ...gravityZoneNodes,
  ...gravityOtherPlanetsZoneNodes,
  ...gravityFreeFallZoneNodes,
  ...gravityVacuumFallZoneNodes,
  ...gravityEarthMoonTidesZoneNodes,
  ...gravitySatellitesOrbitsZoneNodes,
  ...gravityWeightlessnessZoneNodes,
  ...gravityThirdLawPairsZoneNodes,
  ...gravityCentreOfMassZoneNodes,
  ...gravityInverseSquareZoneNodes,
  ...gravityMassWeightInstrumentsZoneNodes,
  ...energyZoneNodes,
  ...energySankeyDiagramsZoneNodes,
  ...energyGravitationalPotentialZoneNodes,
  ...energyConservationZoneNodes,
  ...energyKeGpeInterchangeZoneNodes,
  ...energyUkMixRenewablesZoneNodes,
  ...energyHomeInsulationZoneNodes,
  ...energyKineticZoneNodes,
  ...energyEfficiencyPercentageZoneNodes,
  ...energyPowerZoneNodes,
  ...energyWorkDoneZoneNodes,
  ...energyNationalGridZoneNodes,
  ...energyElectricityCostZoneNodes,
  ...wavesZoneNodes,
  ...wavesRefractionGlassBlockZoneNodes,
  ...wavesEmSpectrumZoneNodes,
  ...wavesPlaneMirrorImagesZoneNodes,
  ...wavesSpeedOfSoundZoneNodes,
  ...wavesLawOfReflectionZoneNodes,
  ...wavesFrequencyPeriodZoneNodes,
  ...wavesWaveEquationZoneNodes,
  ...wavesLoudnessPitchZoneNodes,
  ...wavesDispersionPrismZoneNodes,
  ...wavesEmUsesDangersZoneNodes,
  ...wavesSkyBlueScatteringZoneNodes,
  ...wavesDopplerEffectZoneNodes,
  ...spaceZoneNodes,
  ...spaceMoonPhasesZoneNodes,
  ...spaceOrbitsGravityZoneNodes,
  ...spaceEclipsesZoneNodes,
  ...spaceSatellitesZoneNodes,
  ...spaceSunAsStarZoneNodes,
  ...spaceLightYearsZoneNodes,
  ...spaceGalaxiesZoneNodes,
  ...spaceStarLifeCycleZoneNodes,
  ...spaceBigBangZoneNodes,
  ...spaceCometsAsteroidsZoneNodes,
  ...magnetismZoneNodes,
]

export const physicsZones: Zone[] = [
  {
    id: 'physics-electricity-circuits',
    name: 'Electricity and Circuits',
    realm: 'mechanica',
    nodeIds: [
      ...electricityCircuitsZoneNodes.map(n => n.id),
      ...electricityVoltageRulesZoneNodes.map(n => n.id),
      ...electricityLampBrightnessZoneNodes.map(n => n.id),
      ...electricityBuildingSeriesZoneNodes.map(n => n.id),
      ...electricityHazardsZoneNodes.map(n => n.id),
      ...electricityReadingMetersZoneNodes.map(n => n.id),
      ...electricityResistanceFactorsZoneNodes.map(n => n.id),
      ...electricityOhmsLawPracticeZoneNodes.map(n => n.id),
      ...electricityCurrentRulesZoneNodes.map(n => n.id),
      ...electricityPowerFormulaZoneNodes.map(n => n.id),
      ...electricityFaultFindingZoneNodes.map(n => n.id),
      ...electricityFusesPlugRatingsZoneNodes.map(n => n.id),
      ...electricityUkMainsZoneNodes.map(n => n.id),
      ...electricitySwitchesCellsZoneNodes.map(n => n.id),
      ...electricityStaticBasicsZoneNodes.map(n => n.id),
    ],
  },
  {
    id: 'physics-forces',
    name: 'Forces',
    realm: 'mechanica',
    nodeIds: [
      ...forcesZoneNodes.map(n => n.id),
      ...forcesFreeBodyZoneNodes.map(n => n.id),
      ...forcesResultant1DZoneNodes.map(n => n.id),
      ...forcesSpeedDistanceTimeZoneNodes.map(n => n.id),
      ...forcesDistanceTimeGraphsZoneNodes.map(n => n.id),
      ...forcesScalarsVectorsZoneNodes.map(n => n.id),
      ...forcesNewtonFirstZoneNodes.map(n => n.id),
      ...forcesHookesLawZoneNodes.map(n => n.id),
      ...forcesAccelerationZoneNodes.map(n => n.id),
      ...forcesNewtonSecondZoneNodes.map(n => n.id),
      ...forcesTerminalVelocityZoneNodes.map(n => n.id),
      ...forcesNewtonThirdZoneNodes.map(n => n.id),
      ...forcesMomentsZoneNodes.map(n => n.id),
    ],
  },
  {
    id: 'physics-gravity',
    name: 'Gravity, Weight, Mass',
    realm: 'mechanica',
    nodeIds: [
      ...gravityZoneNodes.map(n => n.id),
      ...gravityOtherPlanetsZoneNodes.map(n => n.id),
      ...gravityFreeFallZoneNodes.map(n => n.id),
      ...gravityVacuumFallZoneNodes.map(n => n.id),
      ...gravityEarthMoonTidesZoneNodes.map(n => n.id),
      ...gravitySatellitesOrbitsZoneNodes.map(n => n.id),
      ...gravityWeightlessnessZoneNodes.map(n => n.id),
      ...gravityThirdLawPairsZoneNodes.map(n => n.id),
      ...gravityCentreOfMassZoneNodes.map(n => n.id),
      ...gravityInverseSquareZoneNodes.map(n => n.id),
      ...gravityMassWeightInstrumentsZoneNodes.map(n => n.id),
    ],
  },
  energyZone,
  wavesZone,
  spaceZone,
  magnetismZone,
]
