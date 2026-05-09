import type { SkillNode, Zone } from '@/types/content'

import { cellsZone, cellsZoneNodes } from './cells'
import { microscopyZone, microscopyZoneNodes } from './microscopy'

export { animalCell, cellsZone, cellsZoneNodes } from './cells'
export { plantCell } from './plant-cell'
export { specialisedCells } from './specialised-cells'
export {
  lightMicroscope,
  magnificationCalculations,
  microscopyZone,
  microscopyZoneNodes,
} from './microscopy'

export const biologyNodes: SkillNode[] = [...cellsZoneNodes, ...microscopyZoneNodes]

export const biologyZones: Zone[] = [cellsZone, microscopyZone]
