import type { SkillNode, Zone } from '@/types/content'

import {
  electricityCircuitSymbols,
  electricitySeriesParallel,
  electricityCurrentVoltage,
  electricityCircuitsZoneNodes,
} from './electricity-circuits'
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
  wavesAnatomy,
  wavesSoundLight,
  wavesZoneNodes,
  wavesZone,
} from './waves'
import {
  spaceSolarSystem,
  spaceDayNightSeasons,
  spaceZoneNodes,
  spaceZone,
} from './space'
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
  wavesAnatomy,
  wavesSoundLight,
  wavesZoneNodes,
  wavesZone,
  spaceSolarSystem,
  spaceDayNightSeasons,
  spaceZoneNodes,
  spaceZone,
  magnetismFields,
  magnetismElectromagnets,
  magnetismZoneNodes,
  magnetismZone,
}

export const physicsNodes: SkillNode[] = [
  ...electricityCircuitsZoneNodes,
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
  ...wavesZoneNodes,
  ...spaceZoneNodes,
  ...magnetismZoneNodes,
]

export const physicsZones: Zone[] = [
  {
    id: 'physics-electricity-circuits',
    name: 'Electricity and Circuits',
    realm: 'mechanica',
    nodeIds: electricityCircuitsZoneNodes.map(n => n.id),
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
