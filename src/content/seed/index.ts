import type { SkillNode, Zone } from '@/types/content'

export * from './maths'
export * from './biology'
export * from './chemistry'
export * from './physics'

import { mathsNodes, mathsZones } from './maths'
import { biologyNodes, biologyZones } from './biology'
import { chemistryNodes, chemistryZones } from './chemistry'
import { physicsNodes, physicsZones } from './physics'

export const allSeededNodes: SkillNode[] = [
  ...mathsNodes,
  ...biologyNodes,
  ...chemistryNodes,
  ...physicsNodes,
]

export const allSeededZones: Zone[] = [
  ...mathsZones,
  ...biologyZones,
  ...chemistryZones,
  ...physicsZones,
]

export const SUBJECT_BUNDLES = {
  maths: { nodes: mathsNodes, zones: mathsZones },
  biology: { nodes: biologyNodes, zones: biologyZones },
  chemistry: { nodes: chemistryNodes, zones: chemistryZones },
  physics: { nodes: physicsNodes, zones: physicsZones },
} as const

export type SeederSubject = keyof typeof SUBJECT_BUNDLES
