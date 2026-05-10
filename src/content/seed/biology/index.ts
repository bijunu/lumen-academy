import type { SkillNode, Zone } from '@/types/content'

import { cellsZone, cellsZoneNodes } from './cells'
import { microscopyZone, microscopyZoneNodes } from './microscopy'
import { bodySystemsZone, bodySystemsZoneNodes } from './body-systems'
import { reproductionZone, reproductionZoneNodes } from './reproduction'

export { animalCell, cellsZone, cellsZoneNodes } from './cells'
export { plantCell } from './plant-cell'
export { specialisedCells } from './specialised-cells'
export {
  lightMicroscope,
  magnificationCalculations,
  microscopyZone,
  microscopyZoneNodes,
} from './microscopy'
export {
  digestiveSystem,
  circulatorySystem,
  respiratorySystem,
  bodySystemsZone,
  bodySystemsZoneNodes,
} from './body-systems'
export {
  floweringPlantReproduction,
  humanReproductionOverview,
  reproductionZone,
  reproductionZoneNodes,
} from './reproduction'

export const biologyNodes: SkillNode[] = [
  ...cellsZoneNodes,
  ...microscopyZoneNodes,
  ...bodySystemsZoneNodes,
  ...reproductionZoneNodes,
]

export const biologyZones: Zone[] = [
  cellsZone,
  microscopyZone,
  bodySystemsZone,
  reproductionZone,
]
