import type { SkillNode, Zone } from '@/types/content'

import {
  electricityCircuitSymbols,
  electricitySeriesParallel,
  electricityCircuitsZoneNodes,
} from './electricity-circuits'

export {
  electricityCircuitSymbols,
  electricitySeriesParallel,
  electricityCircuitsZoneNodes,
}

export const physicsNodes: SkillNode[] = [...electricityCircuitsZoneNodes]

export const physicsZones: Zone[] = [
  {
    id: 'physics-electricity-circuits',
    name: 'Electricity and Circuits',
    realm: 'mechanica',
    nodeIds: electricityCircuitsZoneNodes.map(n => n.id),
  },
]
