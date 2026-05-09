import type { SkillNode, Zone } from '@/types/content'

import {
  electricityCircuitSymbols,
  electricityCircuitsZoneNodes,
} from './electricity-circuits'

export { electricityCircuitSymbols, electricityCircuitsZoneNodes }

export const physicsNodes: SkillNode[] = [...electricityCircuitsZoneNodes]

export const physicsZones: Zone[] = [
  {
    id: 'physics-electricity-circuits',
    name: 'Electricity and Circuits',
    realm: 'mechanica',
    nodeIds: electricityCircuitsZoneNodes.map(n => n.id),
  },
]
