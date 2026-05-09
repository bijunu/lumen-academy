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
  forcesZoneNodes,
  forcesZone,
} from './forces'

export {
  electricityCircuitSymbols,
  electricitySeriesParallel,
  electricityCurrentVoltage,
  electricityCircuitsZoneNodes,
  forcesTypes,
  forcesBalanced,
  forcesZoneNodes,
  forcesZone,
}

export const physicsNodes: SkillNode[] = [
  ...electricityCircuitsZoneNodes,
  ...forcesZoneNodes,
]

export const physicsZones: Zone[] = [
  {
    id: 'physics-electricity-circuits',
    name: 'Electricity and Circuits',
    realm: 'mechanica',
    nodeIds: electricityCircuitsZoneNodes.map(n => n.id),
  },
  forcesZone,
]
