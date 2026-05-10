import type { SkillNode, Zone } from '@/types/content'

import {
  whatIsAFraction,
  equivalentFractions,
  simplifyingFractions,
  fractionsZoneNodes,
} from './fractions'
import {
  fractionsAddSubtract,
  fractionsAddSubtractZoneNodes,
} from './fractions-add-subtract'
import {
  findingFactorsAndMultiples,
  factorsMultiplesZoneNodes,
} from './factors-multiples'
import { recognisingPrimes, primesZoneNodes } from './primes'
import { decimalPlaceValue, decimalsZoneNodes } from './decimals'
import { decimalsRounding, decimalsRoundingZoneNodes } from './decimals-rounding'
import { wholeNumberPlaceValue, placeValueZoneNodes } from './place-value'
import {
  percentagesAsDecimalsFractions,
  percentagesZoneNodes,
} from './percentages'
import {
  percentagesOfAmount,
  percentagesOfAmountZoneNodes,
} from './percentages-of-amount'
import { ratioIntroduction, ratioZoneNodes } from './ratio'
import { ratioSharing, ratioSharingZoneNodes } from './ratio-sharing'
import { bidmasOrderOfOperations, bidmasZoneNodes } from './bidmas'
import { algebraIntroduction, algebraZoneNodes } from './algebra'
import { sequencesRules, sequencesZoneNodes } from './sequences'
import {
  sequencesNthTerm,
  sequencesNthTermZoneNodes,
} from './sequences-nth-term'
import { coordinatesGrid, coordinatesZoneNodes } from './coordinates'
import {
  coordinatesShapes,
  coordinatesShapesZoneNodes,
} from './coordinates-shapes'
import {
  negativeNumbersAddSubtract,
  multiplyDivideNegatives,
  fourOperationsZoneNodes,
} from './four-operations'
import {
  areaRectangles,
  areaRectanglesZoneNodes,
} from './area-rectangles'
import { perimeter, perimeterZoneNodes } from './perimeter'

export {
  whatIsAFraction,
  equivalentFractions,
  simplifyingFractions,
  fractionsZoneNodes,
  fractionsAddSubtract,
  fractionsAddSubtractZoneNodes,
  findingFactorsAndMultiples,
  factorsMultiplesZoneNodes,
  recognisingPrimes,
  primesZoneNodes,
  decimalPlaceValue,
  decimalsZoneNodes,
  decimalsRounding,
  decimalsRoundingZoneNodes,
  wholeNumberPlaceValue,
  placeValueZoneNodes,
  percentagesAsDecimalsFractions,
  percentagesZoneNodes,
  percentagesOfAmount,
  percentagesOfAmountZoneNodes,
  ratioIntroduction,
  ratioZoneNodes,
  ratioSharing,
  ratioSharingZoneNodes,
  bidmasOrderOfOperations,
  bidmasZoneNodes,
  algebraIntroduction,
  algebraZoneNodes,
  sequencesRules,
  sequencesZoneNodes,
  sequencesNthTerm,
  sequencesNthTermZoneNodes,
  coordinatesGrid,
  coordinatesZoneNodes,
  coordinatesShapes,
  coordinatesShapesZoneNodes,
  negativeNumbersAddSubtract,
  multiplyDivideNegatives,
  fourOperationsZoneNodes,
  areaRectangles,
  areaRectanglesZoneNodes,
  perimeter,
  perimeterZoneNodes,
}

export const mathsNodes: SkillNode[] = [
  ...fractionsZoneNodes,
  ...fractionsAddSubtractZoneNodes,
  ...factorsMultiplesZoneNodes,
  ...primesZoneNodes,
  ...decimalsZoneNodes,
  ...decimalsRoundingZoneNodes,
  ...placeValueZoneNodes,
  ...percentagesZoneNodes,
  ...percentagesOfAmountZoneNodes,
  ...ratioZoneNodes,
  ...ratioSharingZoneNodes,
  ...bidmasZoneNodes,
  ...algebraZoneNodes,
  ...sequencesZoneNodes,
  ...sequencesNthTermZoneNodes,
  ...coordinatesZoneNodes,
  ...coordinatesShapesZoneNodes,
  ...fourOperationsZoneNodes,
  ...areaRectanglesZoneNodes,
  ...perimeterZoneNodes,
]

export const mathsZones: Zone[] = [
  {
    id: 'maths-fractions',
    name: 'Fractions',
    realm: 'numerica',
    nodeIds: [
      ...fractionsZoneNodes.map(n => n.id),
      ...fractionsAddSubtractZoneNodes.map(n => n.id),
    ],
  },
  {
    id: 'maths-factors-multiples',
    name: 'Factors and Multiples',
    realm: 'numerica',
    nodeIds: factorsMultiplesZoneNodes.map(n => n.id),
  },
  {
    id: 'maths-primes',
    name: 'Primes',
    realm: 'numerica',
    nodeIds: primesZoneNodes.map(n => n.id),
  },
  {
    id: 'maths-decimals',
    name: 'Decimals',
    realm: 'numerica',
    nodeIds: [
      ...decimalsZoneNodes.map(n => n.id),
      ...decimalsRoundingZoneNodes.map(n => n.id),
    ],
  },
  {
    id: 'maths-place-value',
    name: 'Place Value',
    realm: 'numerica',
    nodeIds: placeValueZoneNodes.map(n => n.id),
  },
  {
    id: 'maths-percentages',
    name: 'Percentages',
    realm: 'numerica',
    nodeIds: [
      ...percentagesZoneNodes.map(n => n.id),
      ...percentagesOfAmountZoneNodes.map(n => n.id),
    ],
  },
  {
    id: 'maths-ratio',
    name: 'Ratio and Proportion',
    realm: 'numerica',
    nodeIds: [
      ...ratioZoneNodes.map(n => n.id),
      ...ratioSharingZoneNodes.map(n => n.id),
    ],
  },
  {
    id: 'maths-bidmas',
    name: 'BIDMAS',
    realm: 'numerica',
    nodeIds: bidmasZoneNodes.map(n => n.id),
  },
  {
    id: 'maths-algebra',
    name: 'Basic Algebra',
    realm: 'numerica',
    nodeIds: algebraZoneNodes.map(n => n.id),
  },
  {
    id: 'maths-sequences',
    name: 'Sequences',
    realm: 'numerica',
    nodeIds: [
      ...sequencesZoneNodes.map(n => n.id),
      ...sequencesNthTermZoneNodes.map(n => n.id),
    ],
  },
  {
    id: 'maths-coordinates',
    name: 'Coordinates',
    realm: 'numerica',
    nodeIds: [
      ...coordinatesZoneNodes.map(n => n.id),
      ...coordinatesShapesZoneNodes.map(n => n.id),
    ],
  },
  {
    id: 'maths-four-operations',
    name: 'Four Operations',
    realm: 'numerica',
    nodeIds: fourOperationsZoneNodes.map(n => n.id),
  },
  {
    id: 'maths-geometry-measure',
    name: 'Geometry and Measure',
    realm: 'numerica',
    nodeIds: [
      ...areaRectanglesZoneNodes.map(n => n.id),
      ...perimeterZoneNodes.map(n => n.id),
    ],
  },
]
