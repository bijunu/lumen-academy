import type { SkillNode, Zone } from '@/types/content'

import { cellsZone, cellsZoneNodes } from './cells'

export { animalCell, cellsZone, cellsZoneNodes } from './cells'

export const biologyNodes: SkillNode[] = [...cellsZoneNodes]

export const biologyZones: Zone[] = [cellsZone]
