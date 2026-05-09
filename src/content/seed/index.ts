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

export {
  whatIsAFraction,
  equivalentFractions,
  simplifyingFractions,
  fractionsZoneNodes,
  findingFactorsAndMultiples,
  factorsMultiplesZoneNodes,
  recognisingPrimes,
  primesZoneNodes,
}

export const allSeededNodes: SkillNode[] = [
  ...fractionsZoneNodes,
  ...factorsMultiplesZoneNodes,
  ...primesZoneNodes,
]
