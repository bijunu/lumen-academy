import type { SkillNode, Zone } from '@/types/content'

import { cellsZone, cellsZoneNodes } from './cells'
import { microscopyZone, microscopyZoneNodes } from './microscopy'
import { bodySystemsZone, bodySystemsZoneNodes } from './body-systems'
import { reproductionZone, reproductionZoneNodes } from './reproduction'
import {
  variationClassificationZone,
  variationClassificationZoneNodes,
} from './variation-classification'
import {
  photosynthesisZone,
  photosynthesisZoneNodes,
} from './photosynthesis'
import { ecosystemsZone, ecosystemsZoneNodes } from './ecosystems'

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
export {
  continuousDiscontinuousVariation,
  variationClassificationZone,
  variationClassificationZoneNodes,
} from './variation-classification'
export {
  photosynthesisOverview,
  photosynthesisZone,
  photosynthesisZoneNodes,
} from './photosynthesis'
export {
  foodChains,
  foodWebs,
  energyFlow,
  ecosystemsZone,
  ecosystemsZoneNodes,
} from './ecosystems'

export const biologyNodes: SkillNode[] = [
  ...cellsZoneNodes,
  ...microscopyZoneNodes,
  ...bodySystemsZoneNodes,
  ...reproductionZoneNodes,
  ...variationClassificationZoneNodes,
  ...photosynthesisZoneNodes,
  ...ecosystemsZoneNodes,
]

export const biologyZones: Zone[] = [
  cellsZone,
  microscopyZone,
  bodySystemsZone,
  reproductionZone,
  variationClassificationZone,
  photosynthesisZone,
  ecosystemsZone,
]
