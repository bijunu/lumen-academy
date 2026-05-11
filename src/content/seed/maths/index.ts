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
import {
  factorsMultiplesHcfLcm,
  factorsMultiplesHcfLcmZoneNodes,
} from './factors-multiples-hcf-lcm'
import { recognisingPrimes, primesZoneNodes } from './primes'
import {
  primesPrimeFactorisation,
  primesPrimeFactorisationZoneNodes,
} from './primes-prime-factorisation'
import { decimalPlaceValue, decimalsZoneNodes } from './decimals'
import { decimalsRounding, decimalsRoundingZoneNodes } from './decimals-rounding'
import {
  decimalsArithmetic,
  decimalsArithmeticZoneNodes,
} from './decimals-arithmetic'
import {
  decimalsWordProblems,
  decimalsWordProblemsZoneNodes,
} from './decimals-word-problems'
import {
  decimalsComparingPrecision,
  decimalsComparingPrecisionZoneNodes,
} from './decimals-comparing-precision'
import {
  decimalsFractionConversion,
  decimalsFractionConversionZoneNodes,
} from './decimals-fraction-conversion'
import {
  decimalsEstimation,
  decimalsEstimationZoneNodes,
} from './decimals-estimation'
import {
  decimalsRecurring,
  decimalsRecurringZoneNodes,
} from './decimals-recurring'
import {
  fractionsMultiplyDivide,
  fractionsMultiplyDivideZoneNodes,
} from './fractions-multiply-divide'
import {
  fractionsMixedNumbers,
  fractionsMixedNumbersZoneNodes,
} from './fractions-mixed-numbers'
import {
  bidmasWithNegatives,
  bidmasWithNegativesZoneNodes,
} from './bidmas-with-negatives'
import { wholeNumberPlaceValue, placeValueZoneNodes } from './place-value'
import {
  percentagesAsDecimalsFractions,
  percentagesZoneNodes,
} from './percentages'
import {
  percentagesOfAmount,
  percentagesOfAmountZoneNodes,
} from './percentages-of-amount'
import {
  percentagesChange,
  percentagesChangeZoneNodes,
} from './percentages-change'
import {
  percentagesReverse,
  percentagesReverseZoneNodes,
} from './percentages-reverse'
import {
  percentagesFinancialInterest,
  percentagesFinancialInterestZoneNodes,
} from './percentages-financial-interest'
import {
  percentagesComparing,
  percentagesComparingZoneNodes,
} from './percentages-comparing'
import {
  percentagesRepeatedChange,
  percentagesRepeatedChangeZoneNodes,
} from './percentages-repeated-change'
import {
  percentagesCompoundGrowth,
  percentagesCompoundGrowthZoneNodes,
} from './percentages-compound-growth'
import { ratioIntroduction, ratioZoneNodes } from './ratio'
import { ratioSharing, ratioSharingZoneNodes } from './ratio-sharing'
import {
  ratioScalingRecipes,
  ratioScalingRecipesZoneNodes,
} from './ratio-scaling-recipes'
import {
  ratioProportion,
  ratioProportionZoneNodes,
} from './ratio-proportion'
import { ratioThreePart, ratioThreePartZoneNodes } from './ratio-three-part'
import { ratioBestValue, ratioBestValueZoneNodes } from './ratio-best-value'
import { ratioCombining, ratioCombiningZoneNodes } from './ratio-combining'
import {
  ratioSpeedDensity,
  ratioSpeedDensityZoneNodes,
} from './ratio-speed-density'
import { bidmasOrderOfOperations, bidmasZoneNodes } from './bidmas'
import {
  bidmasWithSubstitution,
  bidmasWithSubstitutionZoneNodes,
} from './bidmas-with-substitution'
import {
  bidmasWithPowersRoots,
  bidmasWithPowersRootsZoneNodes,
} from './bidmas-with-powers-roots'
import {
  bidmasWithFractions,
  bidmasWithFractionsZoneNodes,
} from './bidmas-with-fractions'
import {
  bidmasWithDecimals,
  bidmasWithDecimalsZoneNodes,
} from './bidmas-with-decimals'
import {
  bidmasNestedBrackets,
  bidmasNestedBracketsZoneNodes,
} from './bidmas-nested-brackets'
import {
  bidmasInFormulae,
  bidmasInFormulaeZoneNodes,
} from './bidmas-in-formulae'
import { algebraIntroduction, algebraZoneNodes } from './algebra'
import {
  algebraSimpleEquations,
  algebraSimpleEquationsZoneNodes,
} from './algebra-simple-equations'
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
import { volumeCuboids, volumeCuboidsZoneNodes } from './volume-cuboids'
import {
  probabilityScale,
  probabilityScaleZoneNodes,
} from './probability-scale'
import {
  probabilityListingOutcomes,
  probabilityListingOutcomesZoneNodes,
} from './probability-listing'
import {
  probabilityExperimental,
  probabilityExperimentalZoneNodes,
} from './probability-experimental'

export {
  whatIsAFraction,
  equivalentFractions,
  simplifyingFractions,
  fractionsZoneNodes,
  fractionsAddSubtract,
  fractionsAddSubtractZoneNodes,
  findingFactorsAndMultiples,
  factorsMultiplesZoneNodes,
  factorsMultiplesHcfLcm,
  factorsMultiplesHcfLcmZoneNodes,
  recognisingPrimes,
  primesZoneNodes,
  primesPrimeFactorisation,
  primesPrimeFactorisationZoneNodes,
  decimalPlaceValue,
  decimalsZoneNodes,
  decimalsRounding,
  decimalsRoundingZoneNodes,
  decimalsArithmetic,
  decimalsArithmeticZoneNodes,
  decimalsWordProblems,
  decimalsWordProblemsZoneNodes,
  decimalsComparingPrecision,
  decimalsComparingPrecisionZoneNodes,
  decimalsFractionConversion,
  decimalsFractionConversionZoneNodes,
  decimalsEstimation,
  decimalsEstimationZoneNodes,
  decimalsRecurring,
  decimalsRecurringZoneNodes,
  fractionsMultiplyDivide,
  fractionsMultiplyDivideZoneNodes,
  fractionsMixedNumbers,
  fractionsMixedNumbersZoneNodes,
  bidmasWithNegatives,
  bidmasWithNegativesZoneNodes,
  wholeNumberPlaceValue,
  placeValueZoneNodes,
  percentagesAsDecimalsFractions,
  percentagesZoneNodes,
  percentagesOfAmount,
  percentagesOfAmountZoneNodes,
  percentagesChange,
  percentagesChangeZoneNodes,
  percentagesReverse,
  percentagesReverseZoneNodes,
  percentagesFinancialInterest,
  percentagesFinancialInterestZoneNodes,
  percentagesComparing,
  percentagesComparingZoneNodes,
  percentagesRepeatedChange,
  percentagesRepeatedChangeZoneNodes,
  percentagesCompoundGrowth,
  percentagesCompoundGrowthZoneNodes,
  ratioIntroduction,
  ratioZoneNodes,
  ratioSharing,
  ratioSharingZoneNodes,
  ratioScalingRecipes,
  ratioScalingRecipesZoneNodes,
  ratioProportion,
  ratioProportionZoneNodes,
  ratioThreePart,
  ratioThreePartZoneNodes,
  ratioBestValue,
  ratioBestValueZoneNodes,
  ratioCombining,
  ratioCombiningZoneNodes,
  ratioSpeedDensity,
  ratioSpeedDensityZoneNodes,
  bidmasOrderOfOperations,
  bidmasZoneNodes,
  bidmasWithSubstitution,
  bidmasWithSubstitutionZoneNodes,
  bidmasWithPowersRoots,
  bidmasWithPowersRootsZoneNodes,
  bidmasWithFractions,
  bidmasWithFractionsZoneNodes,
  bidmasWithDecimals,
  bidmasWithDecimalsZoneNodes,
  bidmasNestedBrackets,
  bidmasNestedBracketsZoneNodes,
  bidmasInFormulae,
  bidmasInFormulaeZoneNodes,
  algebraIntroduction,
  algebraZoneNodes,
  algebraSimpleEquations,
  algebraSimpleEquationsZoneNodes,
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
  volumeCuboids,
  volumeCuboidsZoneNodes,
  probabilityScale,
  probabilityScaleZoneNodes,
  probabilityListingOutcomes,
  probabilityListingOutcomesZoneNodes,
  probabilityExperimental,
  probabilityExperimentalZoneNodes,
}

export const mathsNodes: SkillNode[] = [
  ...fractionsZoneNodes,
  ...fractionsAddSubtractZoneNodes,
  ...fractionsMultiplyDivideZoneNodes,
  ...fractionsMixedNumbersZoneNodes,
  ...factorsMultiplesZoneNodes,
  ...factorsMultiplesHcfLcmZoneNodes,
  ...primesZoneNodes,
  ...primesPrimeFactorisationZoneNodes,
  ...decimalsZoneNodes,
  ...decimalsRoundingZoneNodes,
  ...decimalsArithmeticZoneNodes,
  ...decimalsWordProblemsZoneNodes,
  ...decimalsComparingPrecisionZoneNodes,
  ...decimalsFractionConversionZoneNodes,
  ...decimalsEstimationZoneNodes,
  ...decimalsRecurringZoneNodes,
  ...placeValueZoneNodes,
  ...percentagesZoneNodes,
  ...percentagesOfAmountZoneNodes,
  ...percentagesChangeZoneNodes,
  ...percentagesReverseZoneNodes,
  ...percentagesFinancialInterestZoneNodes,
  ...percentagesComparingZoneNodes,
  ...percentagesRepeatedChangeZoneNodes,
  ...percentagesCompoundGrowthZoneNodes,
  ...ratioZoneNodes,
  ...ratioSharingZoneNodes,
  ...ratioScalingRecipesZoneNodes,
  ...ratioProportionZoneNodes,
  ...ratioThreePartZoneNodes,
  ...ratioBestValueZoneNodes,
  ...ratioCombiningZoneNodes,
  ...ratioSpeedDensityZoneNodes,
  ...bidmasZoneNodes,
  ...bidmasWithNegativesZoneNodes,
  ...bidmasWithSubstitutionZoneNodes,
  ...bidmasWithPowersRootsZoneNodes,
  ...bidmasWithFractionsZoneNodes,
  ...bidmasWithDecimalsZoneNodes,
  ...bidmasNestedBracketsZoneNodes,
  ...bidmasInFormulaeZoneNodes,
  ...algebraZoneNodes,
  ...algebraSimpleEquationsZoneNodes,
  ...sequencesZoneNodes,
  ...sequencesNthTermZoneNodes,
  ...coordinatesZoneNodes,
  ...coordinatesShapesZoneNodes,
  ...fourOperationsZoneNodes,
  ...areaRectanglesZoneNodes,
  ...perimeterZoneNodes,
  ...volumeCuboidsZoneNodes,
  ...probabilityScaleZoneNodes,
  ...probabilityListingOutcomesZoneNodes,
  ...probabilityExperimentalZoneNodes,
]

export const mathsZones: Zone[] = [
  {
    id: 'maths-fractions',
    name: 'Fractions',
    realm: 'numerica',
    nodeIds: [
      ...fractionsZoneNodes.map(n => n.id),
      ...fractionsAddSubtractZoneNodes.map(n => n.id),
      ...fractionsMultiplyDivideZoneNodes.map(n => n.id),
      ...fractionsMixedNumbersZoneNodes.map(n => n.id),
    ],
  },
  {
    id: 'maths-factors-multiples',
    name: 'Factors and Multiples',
    realm: 'numerica',
    nodeIds: [
      ...factorsMultiplesZoneNodes.map(n => n.id),
      ...factorsMultiplesHcfLcmZoneNodes.map(n => n.id),
    ],
  },
  {
    id: 'maths-primes',
    name: 'Primes',
    realm: 'numerica',
    nodeIds: [
      ...primesZoneNodes.map(n => n.id),
      ...primesPrimeFactorisationZoneNodes.map(n => n.id),
    ],
  },
  {
    id: 'maths-decimals',
    name: 'Decimals',
    realm: 'numerica',
    nodeIds: [
      ...decimalsZoneNodes.map(n => n.id),
      ...decimalsRoundingZoneNodes.map(n => n.id),
      ...decimalsArithmeticZoneNodes.map(n => n.id),
      ...decimalsWordProblemsZoneNodes.map(n => n.id),
      ...decimalsComparingPrecisionZoneNodes.map(n => n.id),
      ...decimalsFractionConversionZoneNodes.map(n => n.id),
      ...decimalsEstimationZoneNodes.map(n => n.id),
      ...decimalsRecurringZoneNodes.map(n => n.id),
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
      ...percentagesChangeZoneNodes.map(n => n.id),
      ...percentagesReverseZoneNodes.map(n => n.id),
      ...percentagesFinancialInterestZoneNodes.map(n => n.id),
      ...percentagesComparingZoneNodes.map(n => n.id),
      ...percentagesRepeatedChangeZoneNodes.map(n => n.id),
      ...percentagesCompoundGrowthZoneNodes.map(n => n.id),
    ],
  },
  {
    id: 'maths-ratio',
    name: 'Ratio and Proportion',
    realm: 'numerica',
    nodeIds: [
      ...ratioZoneNodes.map(n => n.id),
      ...ratioSharingZoneNodes.map(n => n.id),
      ...ratioScalingRecipesZoneNodes.map(n => n.id),
      ...ratioProportionZoneNodes.map(n => n.id),
      ...ratioThreePartZoneNodes.map(n => n.id),
      ...ratioBestValueZoneNodes.map(n => n.id),
      ...ratioCombiningZoneNodes.map(n => n.id),
      ...ratioSpeedDensityZoneNodes.map(n => n.id),
    ],
  },
  {
    id: 'maths-bidmas',
    name: 'BIDMAS',
    realm: 'numerica',
    nodeIds: [
      ...bidmasZoneNodes.map(n => n.id),
      ...bidmasWithNegativesZoneNodes.map(n => n.id),
      ...bidmasWithSubstitutionZoneNodes.map(n => n.id),
      ...bidmasWithPowersRootsZoneNodes.map(n => n.id),
      ...bidmasWithFractionsZoneNodes.map(n => n.id),
      ...bidmasWithDecimalsZoneNodes.map(n => n.id),
      ...bidmasNestedBracketsZoneNodes.map(n => n.id),
      ...bidmasInFormulaeZoneNodes.map(n => n.id),
    ],
  },
  {
    id: 'maths-algebra',
    name: 'Basic Algebra',
    realm: 'numerica',
    nodeIds: [
      ...algebraZoneNodes.map(n => n.id),
      ...algebraSimpleEquationsZoneNodes.map(n => n.id),
    ],
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
      ...volumeCuboidsZoneNodes.map(n => n.id),
    ],
  },
  {
    id: 'maths-probability',
    name: 'Probability',
    realm: 'numerica',
    nodeIds: [
      ...probabilityScaleZoneNodes.map(n => n.id),
      ...probabilityListingOutcomesZoneNodes.map(n => n.id),
      ...probabilityExperimentalZoneNodes.map(n => n.id),
    ],
  },
]
