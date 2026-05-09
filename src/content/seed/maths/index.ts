import type { SkillNode, Zone } from '@/types/content'

import {
  whatIsAFraction,
  equivalentFractions,
  simplifyingFractions,
  fractionsZoneNodes,
} from './fractions'
import {
  findingFactorsAndMultiples,
  factorsMultiplesZoneNodes,
} from './factors-multiples'
import { recognisingPrimes, primesZoneNodes } from './primes'
import { decimalPlaceValue, decimalsZoneNodes } from './decimals'
import { wholeNumberPlaceValue, placeValueZoneNodes } from './place-value'
import {
  percentagesAsDecimalsFractions,
  percentagesZoneNodes,
} from './percentages'
import { ratioIntroduction, ratioZoneNodes } from './ratio'
import { bidmasOrderOfOperations, bidmasZoneNodes } from './bidmas'
import { algebraIntroduction, algebraZoneNodes } from './algebra'
import { sequencesRules, sequencesZoneNodes } from './sequences'
import { coordinatesGrid, coordinatesZoneNodes } from './coordinates'
import {
  negativeNumbersAddSubtract,
  fourOperationsZoneNodes,
} from './four-operations'

export {
  whatIsAFraction,
  equivalentFractions,
  simplifyingFractions,
  fractionsZoneNodes,
  findingFactorsAndMultiples,
  factorsMultiplesZoneNodes,
  recognisingPrimes,
  primesZoneNodes,
  decimalPlaceValue,
  decimalsZoneNodes,
  wholeNumberPlaceValue,
  placeValueZoneNodes,
  percentagesAsDecimalsFractions,
  percentagesZoneNodes,
  ratioIntroduction,
  ratioZoneNodes,
  bidmasOrderOfOperations,
  bidmasZoneNodes,
  algebraIntroduction,
  algebraZoneNodes,
  sequencesRules,
  sequencesZoneNodes,
  coordinatesGrid,
  coordinatesZoneNodes,
  negativeNumbersAddSubtract,
  fourOperationsZoneNodes,
}

export const mathsNodes: SkillNode[] = [
  ...fractionsZoneNodes,
  ...factorsMultiplesZoneNodes,
  ...primesZoneNodes,
  ...decimalsZoneNodes,
  ...placeValueZoneNodes,
  ...percentagesZoneNodes,
  ...ratioZoneNodes,
  ...bidmasZoneNodes,
  ...algebraZoneNodes,
  ...sequencesZoneNodes,
  ...coordinatesZoneNodes,
  ...fourOperationsZoneNodes,
]

export const mathsZones: Zone[] = [
  {
    id: 'maths-fractions',
    name: 'Fractions',
    realm: 'numerica',
    nodeIds: fractionsZoneNodes.map(n => n.id),
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
    nodeIds: decimalsZoneNodes.map(n => n.id),
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
    nodeIds: percentagesZoneNodes.map(n => n.id),
  },
  {
    id: 'maths-ratio',
    name: 'Ratio and Proportion',
    realm: 'numerica',
    nodeIds: ratioZoneNodes.map(n => n.id),
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
    nodeIds: sequencesZoneNodes.map(n => n.id),
  },
  {
    id: 'maths-coordinates',
    name: 'Coordinates',
    realm: 'numerica',
    nodeIds: coordinatesZoneNodes.map(n => n.id),
  },
  {
    id: 'maths-four-operations',
    name: 'Four Operations',
    realm: 'numerica',
    nodeIds: fourOperationsZoneNodes.map(n => n.id),
  },
]
