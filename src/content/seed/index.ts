import type { SkillNode } from '@/types/content'

import {
  whatIsAFraction,
  equivalentFractions,
  simplifyingFractions,
  fractionsZoneNodes,
} from './maths-fractions'
import {
  findingFactorsAndMultiples,
  factorsMultiplesZoneNodes,
} from './maths-factors-multiples'
import { recognisingPrimes, primesZoneNodes } from './maths-primes'
import { decimalPlaceValue, decimalsZoneNodes } from './maths-decimals'
import { wholeNumberPlaceValue, placeValueZoneNodes } from './maths-place-value'
import {
  percentagesAsDecimalsFractions,
  percentagesZoneNodes,
} from './maths-percentages'
import { ratioIntroduction, ratioZoneNodes } from './maths-ratio'
import { bidmasOrderOfOperations, bidmasZoneNodes } from './maths-bidmas'

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
}

export const allSeededNodes: SkillNode[] = [
  ...fractionsZoneNodes,
  ...factorsMultiplesZoneNodes,
  ...primesZoneNodes,
  ...decimalsZoneNodes,
  ...placeValueZoneNodes,
  ...percentagesZoneNodes,
  ...ratioZoneNodes,
  ...bidmasZoneNodes,
]
