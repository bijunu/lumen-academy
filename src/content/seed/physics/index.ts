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
  gravityMassVsWeight,
  gravityWeightCalculation,
  gravityZoneNodes,
  gravityZone,
} from './gravity'

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
  gravityMassVsWeight,
  gravityWeightCalculation,
  gravityZoneNodes,
  gravityZone,
}

export const physicsNodes: SkillNode[] = [
  ...electricityCircuitsZoneNodes,
  ...forcesZoneNodes,
  ...gravityZoneNodes,
]

export const physicsZones: Zone[] = [
  {
    id: 'physics-electricity-circuits',
    name: 'Electricity and Circuits',
    realm: 'mechanica',
    nodeIds: electricityCircuitsZoneNodes.map(n => n.id),
  },
  forcesZone,
  gravityZone,
]
