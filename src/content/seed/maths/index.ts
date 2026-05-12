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
import {
  factorsMultiplesThreeNumbers,
  factorsMultiplesThreeNumbersZoneNodes,
} from './factors-multiples-three-numbers'
import {
  factorsMultiplesWordProblems,
  factorsMultiplesWordProblemsZoneNodes,
} from './factors-multiples-word-problems'
import {
  factorsMultiplesDivisibilityTests,
  factorsMultiplesDivisibilityTestsZoneNodes,
} from './factors-multiples-divisibility-tests'
import {
  factorsMultiplesSieveEratosthenes,
  factorsMultiplesSieveEratosthenesZoneNodes,
} from './factors-multiples-sieve-eratosthenes'
import {
  factorsMultiplesViaPrimeFactorisation,
  factorsMultiplesViaPrimeFactorisationZoneNodes,
} from './factors-multiples-via-prime-factorisation'
import {
  factorsMultiplesEuclidean,
  factorsMultiplesEuclideanZoneNodes,
} from './factors-multiples-euclidean'
import { recognisingPrimes, primesZoneNodes } from './primes'
import {
  primesPrimeFactorisation,
  primesPrimeFactorisationZoneNodes,
} from './primes-prime-factorisation'
import {
  primesSquaresCubes,
  primesSquaresCubesZoneNodes,
} from './primes-squares-cubes'
import {
  primesIndicesMultiplication,
  primesIndicesMultiplicationZoneNodes,
} from './primes-indices-multiplication'
import {
  primesIndicesDivision,
  primesIndicesDivisionZoneNodes,
} from './primes-indices-division'
import {
  primesIndicesPowerOfPower,
  primesIndicesPowerOfPowerZoneNodes,
} from './primes-indices-power-of-power'
import {
  primesZeroNegativeIndices,
  primesZeroNegativeIndicesZoneNodes,
} from './primes-zero-negative-indices'
import {
  primesNumberOfFactors,
  primesNumberOfFactorsZoneNodes,
} from './primes-number-of-factors'
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
  fractionsComparingOrdering,
  fractionsComparingOrderingZoneNodes,
} from './fractions-comparing-ordering'
import {
  fractionsOfAmount,
  fractionsOfAmountZoneNodes,
} from './fractions-of-amount'
import {
  fractionsFdpConversion,
  fractionsFdpConversionZoneNodes,
} from './fractions-fdp-conversion'
import {
  fractionsOnNumberLine,
  fractionsOnNumberLineZoneNodes,
} from './fractions-on-number-line'
import {
  fractionsMultiStepProblems,
  fractionsMultiStepProblemsZoneNodes,
} from './fractions-multi-step-problems'
import {
  bidmasWithNegatives,
  bidmasWithNegativesZoneNodes,
} from './bidmas-with-negatives'
import { wholeNumberPlaceValue, placeValueZoneNodes } from './place-value'
import {
  placeValueSignificantFigures,
  placeValueSignificantFiguresZoneNodes,
} from './place-value-significant-figures'
import {
  placeValuePowersOfTen,
  placeValuePowersOfTenZoneNodes,
} from './place-value-powers-of-ten'
import {
  placeValueVeryLargeVerySmall,
  placeValueVeryLargeVerySmallZoneNodes,
} from './place-value-very-large-very-small'
import {
  placeValueEstimation,
  placeValueEstimationZoneNodes,
} from './place-value-estimation'
import {
  placeValueStandardFormIntro,
  placeValueStandardFormIntroZoneNodes,
} from './place-value-standard-form-intro'
import {
  placeValueStandardFormArithmetic,
  placeValueStandardFormArithmeticZoneNodes,
} from './place-value-standard-form-arithmetic'
import {
  placeValueOrdering,
  placeValueOrderingZoneNodes,
} from './place-value-ordering'
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
import {
  algebraCollectingLikeTerms,
  algebraCollectingLikeTermsZoneNodes,
} from './algebra-collecting-like-terms'
import {
  algebraExpandingSingleBrackets,
  algebraExpandingSingleBracketsZoneNodes,
} from './algebra-expanding-single-brackets'
import {
  algebraFactorisingSingleBrackets,
  algebraFactorisingSingleBracketsZoneNodes,
} from './algebra-factorising-single-brackets'
import {
  algebraFunctionMachines,
  algebraFunctionMachinesZoneNodes,
} from './algebra-function-machines'
import {
  algebraFormingEquations,
  algebraFormingEquationsZoneNodes,
} from './algebra-forming-equations'
import {
  algebraEquationsWithBrackets,
  algebraEquationsWithBracketsZoneNodes,
} from './algebra-equations-with-brackets'
import { sequencesRules, sequencesZoneNodes } from './sequences'
import {
  sequencesNthTerm,
  sequencesNthTermZoneNodes,
} from './sequences-nth-term'
import {
  sequencesMissingTerms,
  sequencesMissingTermsZoneNodes,
} from './sequences-missing-terms'
import {
  sequencesGeometric,
  sequencesGeometricZoneNodes,
} from './sequences-geometric'
import {
  sequencesDecreasingNthTerm,
  sequencesDecreasingNthTermZoneNodes,
} from './sequences-decreasing-nth-term'
import {
  sequencesFromPatterns,
  sequencesFromPatternsZoneNodes,
} from './sequences-from-patterns'
import {
  sequencesSpecialTypes,
  sequencesSpecialTypesZoneNodes,
} from './sequences-special-types'
import {
  sequencesQuadraticRecognition,
  sequencesQuadraticRecognitionZoneNodes,
} from './sequences-quadratic-recognition'
import { coordinatesGrid, coordinatesZoneNodes } from './coordinates'
import {
  coordinatesShapes,
  coordinatesShapesZoneNodes,
} from './coordinates-shapes'
import {
  coordinatesMidpoints,
  coordinatesMidpointsZoneNodes,
} from './coordinates-midpoints'
import {
  coordinatesEquationFromLine,
  coordinatesEquationFromLineZoneNodes,
} from './coordinates-equation-from-line'
import {
  coordinatesPlottingLinear,
  coordinatesPlottingLinearZoneNodes,
} from './coordinates-plotting-linear'
import {
  coordinatesHorizontalVerticalLines,
  coordinatesHorizontalVerticalLinesZoneNodes,
} from './coordinates-horizontal-vertical-lines'
import {
  coordinatesDistanceBetweenPoints,
  coordinatesDistanceBetweenPointsZoneNodes,
} from './coordinates-distance-between-points'
import {
  coordinatesReflectionsAxes,
  coordinatesReflectionsAxesZoneNodes,
} from './coordinates-reflections-axes'
import {
  negativeNumbersAddSubtract,
  multiplyDivideNegatives,
  fourOperationsZoneNodes,
} from './four-operations'
import {
  fourOperationsLongDivision,
  fourOperationsLongDivisionZoneNodes,
} from './four-operations-long-division'
import {
  fourOperationsLongMultiplication,
  fourOperationsLongMultiplicationZoneNodes,
} from './four-operations-long-multiplication'
import {
  fourOperationsEstimationChecking,
  fourOperationsEstimationCheckingZoneNodes,
} from './four-operations-estimation-checking'
import {
  fourOperationsCalculatorSkills,
  fourOperationsCalculatorSkillsZoneNodes,
} from './four-operations-calculator-skills'
import {
  fourOperationsPowersOfNegatives,
  fourOperationsPowersOfNegativesZoneNodes,
} from './four-operations-powers-of-negatives'
import {
  fourOperationsMixedWordProblems,
  fourOperationsMixedWordProblemsZoneNodes,
} from './four-operations-mixed-word-problems'
import {
  fourOperationsNegativesInContext,
  fourOperationsNegativesInContextZoneNodes,
} from './four-operations-negatives-in-context'
import {
  areaRectangles,
  areaRectanglesZoneNodes,
} from './area-rectangles'
import {
  areaTriangles,
  areaTrianglesZoneNodes,
} from './geometry-measure-area-triangles'
import {
  geometryMeasureAreaParallelograms,
  geometryMeasureAreaParallelogramsZoneNodes,
} from './geometry-measure-area-parallelograms'
import {
  areaTrapezia,
  areaTrapeziaZoneNodes,
} from './geometry-measure-area-trapezia'
import {
  geometryMeasureAngleRules,
  geometryMeasureAngleRulesZoneNodes,
} from './geometry-measure-angle-rules'
import { perimeter, perimeterZoneNodes } from './perimeter'
import { volumeCuboids, volumeCuboidsZoneNodes } from './volume-cuboids'
import {
  volumePrisms,
  volumePrismsZoneNodes,
} from './geometry-measure-volume-prisms'
import {
  surfaceAreaCuboids,
  surfaceAreaCuboidsZoneNodes,
} from './geometry-measure-surface-area-cuboids'
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
import {
  probabilitySumToOne,
  probabilitySumToOneZoneNodes,
} from './probability-sum-to-one'
import {
  probabilityTwoWayTables,
  probabilityTwoWayTablesZoneNodes,
} from './probability-two-way-tables'
import {
  probabilityExpectedFrequency,
  probabilityExpectedFrequencyZoneNodes,
} from './probability-expected-frequency'
import {
  probabilityEquallyLikelyEvents,
  probabilityEquallyLikelyEventsZoneNodes,
} from './probability-equally-likely-events'
import {
  probabilitySampleSpaceTwoEvent,
  probabilitySampleSpaceTwoEventZoneNodes,
} from './probability-sample-space-two-event'
import {
  probabilityComparingExperimentalTheoretical,
  probabilityComparingExperimentalTheoreticalZoneNodes,
} from './probability-comparing-experimental-theoretical'

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
  factorsMultiplesThreeNumbers,
  factorsMultiplesThreeNumbersZoneNodes,
  factorsMultiplesWordProblems,
  factorsMultiplesWordProblemsZoneNodes,
  factorsMultiplesDivisibilityTests,
  factorsMultiplesDivisibilityTestsZoneNodes,
  factorsMultiplesSieveEratosthenes,
  factorsMultiplesSieveEratosthenesZoneNodes,
  factorsMultiplesViaPrimeFactorisation,
  factorsMultiplesViaPrimeFactorisationZoneNodes,
  factorsMultiplesEuclidean,
  factorsMultiplesEuclideanZoneNodes,
  recognisingPrimes,
  primesZoneNodes,
  primesPrimeFactorisation,
  primesPrimeFactorisationZoneNodes,
  primesSquaresCubes,
  primesSquaresCubesZoneNodes,
  primesIndicesMultiplication,
  primesIndicesMultiplicationZoneNodes,
  primesIndicesDivision,
  primesIndicesDivisionZoneNodes,
  primesIndicesPowerOfPower,
  primesIndicesPowerOfPowerZoneNodes,
  primesZeroNegativeIndices,
  primesZeroNegativeIndicesZoneNodes,
  primesNumberOfFactors,
  primesNumberOfFactorsZoneNodes,
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
  fractionsComparingOrdering,
  fractionsComparingOrderingZoneNodes,
  fractionsOfAmount,
  fractionsOfAmountZoneNodes,
  fractionsFdpConversion,
  fractionsFdpConversionZoneNodes,
  fractionsOnNumberLine,
  fractionsOnNumberLineZoneNodes,
  fractionsMultiStepProblems,
  fractionsMultiStepProblemsZoneNodes,
  bidmasWithNegatives,
  bidmasWithNegativesZoneNodes,
  wholeNumberPlaceValue,
  placeValueZoneNodes,
  placeValueSignificantFigures,
  placeValueSignificantFiguresZoneNodes,
  placeValuePowersOfTen,
  placeValuePowersOfTenZoneNodes,
  placeValueVeryLargeVerySmall,
  placeValueVeryLargeVerySmallZoneNodes,
  placeValueEstimation,
  placeValueEstimationZoneNodes,
  placeValueStandardFormIntro,
  placeValueStandardFormIntroZoneNodes,
  placeValueStandardFormArithmetic,
  placeValueStandardFormArithmeticZoneNodes,
  placeValueOrdering,
  placeValueOrderingZoneNodes,
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
  algebraCollectingLikeTerms,
  algebraCollectingLikeTermsZoneNodes,
  algebraExpandingSingleBrackets,
  algebraExpandingSingleBracketsZoneNodes,
  algebraFactorisingSingleBrackets,
  algebraFactorisingSingleBracketsZoneNodes,
  algebraFunctionMachines,
  algebraFunctionMachinesZoneNodes,
  algebraFormingEquations,
  algebraFormingEquationsZoneNodes,
  algebraEquationsWithBrackets,
  algebraEquationsWithBracketsZoneNodes,
  sequencesRules,
  sequencesZoneNodes,
  sequencesNthTerm,
  sequencesNthTermZoneNodes,
  sequencesMissingTerms,
  sequencesMissingTermsZoneNodes,
  sequencesGeometric,
  sequencesGeometricZoneNodes,
  sequencesDecreasingNthTerm,
  sequencesDecreasingNthTermZoneNodes,
  sequencesFromPatterns,
  sequencesFromPatternsZoneNodes,
  sequencesSpecialTypes,
  sequencesSpecialTypesZoneNodes,
  sequencesQuadraticRecognition,
  sequencesQuadraticRecognitionZoneNodes,
  coordinatesGrid,
  coordinatesZoneNodes,
  coordinatesShapes,
  coordinatesShapesZoneNodes,
  coordinatesMidpoints,
  coordinatesMidpointsZoneNodes,
  coordinatesPlottingLinear,
  coordinatesPlottingLinearZoneNodes,
  coordinatesHorizontalVerticalLines,
  coordinatesHorizontalVerticalLinesZoneNodes,
  coordinatesDistanceBetweenPoints,
  coordinatesDistanceBetweenPointsZoneNodes,
  coordinatesReflectionsAxes,
  coordinatesReflectionsAxesZoneNodes,
  coordinatesEquationFromLine,
  coordinatesEquationFromLineZoneNodes,
  negativeNumbersAddSubtract,
  multiplyDivideNegatives,
  fourOperationsZoneNodes,
  fourOperationsLongDivision,
  fourOperationsLongDivisionZoneNodes,
  fourOperationsLongMultiplication,
  fourOperationsLongMultiplicationZoneNodes,
  fourOperationsEstimationChecking,
  fourOperationsEstimationCheckingZoneNodes,
  fourOperationsCalculatorSkills,
  fourOperationsCalculatorSkillsZoneNodes,
  fourOperationsMixedWordProblems,
  fourOperationsMixedWordProblemsZoneNodes,
  fourOperationsNegativesInContext,
  fourOperationsNegativesInContextZoneNodes,
  fourOperationsPowersOfNegatives,
  fourOperationsPowersOfNegativesZoneNodes,
  areaRectangles,
  areaRectanglesZoneNodes,
  areaTriangles,
  areaTrianglesZoneNodes,
  geometryMeasureAreaParallelograms,
  geometryMeasureAreaParallelogramsZoneNodes,
  areaTrapezia,
  areaTrapeziaZoneNodes,
  geometryMeasureAngleRules,
  geometryMeasureAngleRulesZoneNodes,
  perimeter,
  perimeterZoneNodes,
  volumeCuboids,
  volumeCuboidsZoneNodes,
  volumePrisms,
  volumePrismsZoneNodes,
  surfaceAreaCuboids,
  surfaceAreaCuboidsZoneNodes,
  probabilityScale,
  probabilityScaleZoneNodes,
  probabilityListingOutcomes,
  probabilityListingOutcomesZoneNodes,
  probabilityExperimental,
  probabilityExperimentalZoneNodes,
  probabilitySumToOne,
  probabilitySumToOneZoneNodes,
  probabilityTwoWayTables,
  probabilityTwoWayTablesZoneNodes,
  probabilityEquallyLikelyEvents,
  probabilityEquallyLikelyEventsZoneNodes,
  probabilitySampleSpaceTwoEvent,
  probabilitySampleSpaceTwoEventZoneNodes,
  probabilityComparingExperimentalTheoretical,
  probabilityComparingExperimentalTheoreticalZoneNodes,
  probabilityExpectedFrequency,
  probabilityExpectedFrequencyZoneNodes,
}

export const mathsNodes: SkillNode[] = [
  ...fractionsZoneNodes,
  ...fractionsAddSubtractZoneNodes,
  ...fractionsMultiplyDivideZoneNodes,
  ...fractionsMixedNumbersZoneNodes,
  ...fractionsComparingOrderingZoneNodes,
  ...fractionsOfAmountZoneNodes,
  ...fractionsFdpConversionZoneNodes,
  ...fractionsOnNumberLineZoneNodes,
  ...fractionsMultiStepProblemsZoneNodes,
  ...factorsMultiplesZoneNodes,
  ...factorsMultiplesHcfLcmZoneNodes,
  ...factorsMultiplesThreeNumbersZoneNodes,
  ...factorsMultiplesWordProblemsZoneNodes,
  ...factorsMultiplesDivisibilityTestsZoneNodes,
  ...factorsMultiplesSieveEratosthenesZoneNodes,
  ...factorsMultiplesViaPrimeFactorisationZoneNodes,
  ...factorsMultiplesEuclideanZoneNodes,
  ...primesZoneNodes,
  ...primesPrimeFactorisationZoneNodes,
  ...primesSquaresCubesZoneNodes,
  ...primesIndicesMultiplicationZoneNodes,
  ...primesIndicesDivisionZoneNodes,
  ...primesIndicesPowerOfPowerZoneNodes,
  ...primesZeroNegativeIndicesZoneNodes,
  ...primesNumberOfFactorsZoneNodes,
  ...decimalsZoneNodes,
  ...decimalsRoundingZoneNodes,
  ...decimalsArithmeticZoneNodes,
  ...decimalsWordProblemsZoneNodes,
  ...decimalsComparingPrecisionZoneNodes,
  ...decimalsFractionConversionZoneNodes,
  ...decimalsEstimationZoneNodes,
  ...decimalsRecurringZoneNodes,
  ...placeValueZoneNodes,
  ...placeValueSignificantFiguresZoneNodes,
  ...placeValuePowersOfTenZoneNodes,
  ...placeValueVeryLargeVerySmallZoneNodes,
  ...placeValueEstimationZoneNodes,
  ...placeValueStandardFormIntroZoneNodes,
  ...placeValueStandardFormArithmeticZoneNodes,
  ...placeValueOrderingZoneNodes,
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
  ...algebraCollectingLikeTermsZoneNodes,
  ...algebraExpandingSingleBracketsZoneNodes,
  ...algebraFactorisingSingleBracketsZoneNodes,
  ...algebraFunctionMachinesZoneNodes,
  ...algebraFormingEquationsZoneNodes,
  ...algebraEquationsWithBracketsZoneNodes,
  ...sequencesZoneNodes,
  ...sequencesNthTermZoneNodes,
  ...sequencesMissingTermsZoneNodes,
  ...sequencesGeometricZoneNodes,
  ...sequencesDecreasingNthTermZoneNodes,
  ...sequencesFromPatternsZoneNodes,
  ...sequencesSpecialTypesZoneNodes,
  ...sequencesQuadraticRecognitionZoneNodes,
  ...coordinatesZoneNodes,
  ...coordinatesShapesZoneNodes,
  ...coordinatesMidpointsZoneNodes,
  ...coordinatesPlottingLinearZoneNodes,
  ...coordinatesHorizontalVerticalLinesZoneNodes,
  ...coordinatesDistanceBetweenPointsZoneNodes,
  ...coordinatesReflectionsAxesZoneNodes,
  ...coordinatesEquationFromLineZoneNodes,
  ...fourOperationsZoneNodes,
  ...fourOperationsLongDivisionZoneNodes,
  ...fourOperationsLongMultiplicationZoneNodes,
  ...fourOperationsEstimationCheckingZoneNodes,
  ...fourOperationsCalculatorSkillsZoneNodes,
  ...fourOperationsNegativesInContextZoneNodes,
  ...fourOperationsMixedWordProblemsZoneNodes,
  ...fourOperationsPowersOfNegativesZoneNodes,
  ...areaRectanglesZoneNodes,
  ...areaTrianglesZoneNodes,
  ...geometryMeasureAreaParallelogramsZoneNodes,
  ...areaTrapeziaZoneNodes,
  ...geometryMeasureAngleRulesZoneNodes,
  ...perimeterZoneNodes,
  ...volumeCuboidsZoneNodes,
  ...volumePrismsZoneNodes,
  ...surfaceAreaCuboidsZoneNodes,
  ...probabilityScaleZoneNodes,
  ...probabilityListingOutcomesZoneNodes,
  ...probabilityExperimentalZoneNodes,
  ...probabilitySumToOneZoneNodes,
  ...probabilityTwoWayTablesZoneNodes,
  ...probabilityExpectedFrequencyZoneNodes,
  ...probabilityEquallyLikelyEventsZoneNodes,
  ...probabilitySampleSpaceTwoEventZoneNodes,
  ...probabilityComparingExperimentalTheoreticalZoneNodes,
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
      ...fractionsComparingOrderingZoneNodes.map(n => n.id),
      ...fractionsOfAmountZoneNodes.map(n => n.id),
      ...fractionsFdpConversionZoneNodes.map(n => n.id),
      ...fractionsOnNumberLineZoneNodes.map(n => n.id),
      ...fractionsMultiStepProblemsZoneNodes.map(n => n.id),
    ],
  },
  {
    id: 'maths-factors-multiples',
    name: 'Factors and Multiples',
    realm: 'numerica',
    nodeIds: [
      ...factorsMultiplesZoneNodes.map(n => n.id),
      ...factorsMultiplesHcfLcmZoneNodes.map(n => n.id),
      ...factorsMultiplesThreeNumbersZoneNodes.map(n => n.id),
      ...factorsMultiplesWordProblemsZoneNodes.map(n => n.id),
      ...factorsMultiplesDivisibilityTestsZoneNodes.map(n => n.id),
      ...factorsMultiplesSieveEratosthenesZoneNodes.map(n => n.id),
      ...factorsMultiplesViaPrimeFactorisationZoneNodes.map(n => n.id),
      ...factorsMultiplesEuclideanZoneNodes.map(n => n.id),
    ],
  },
  {
    id: 'maths-primes',
    name: 'Primes',
    realm: 'numerica',
    nodeIds: [
      ...primesZoneNodes.map(n => n.id),
      ...primesPrimeFactorisationZoneNodes.map(n => n.id),
      ...primesSquaresCubesZoneNodes.map(n => n.id),
      ...primesIndicesMultiplicationZoneNodes.map(n => n.id),
      ...primesIndicesDivisionZoneNodes.map(n => n.id),
      ...primesIndicesPowerOfPowerZoneNodes.map(n => n.id),
      ...primesZeroNegativeIndicesZoneNodes.map(n => n.id),
      ...primesNumberOfFactorsZoneNodes.map(n => n.id),
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
    nodeIds: [
      ...placeValueZoneNodes.map(n => n.id),
      ...placeValueSignificantFiguresZoneNodes.map(n => n.id),
      ...placeValuePowersOfTenZoneNodes.map(n => n.id),
      ...placeValueVeryLargeVerySmallZoneNodes.map(n => n.id),
      ...placeValueEstimationZoneNodes.map(n => n.id),
      ...placeValueStandardFormIntroZoneNodes.map(n => n.id),
      ...placeValueStandardFormArithmeticZoneNodes.map(n => n.id),
      ...placeValueOrderingZoneNodes.map(n => n.id),
    ],
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
      ...algebraCollectingLikeTermsZoneNodes.map(n => n.id),
      ...algebraExpandingSingleBracketsZoneNodes.map(n => n.id),
      ...algebraFactorisingSingleBracketsZoneNodes.map(n => n.id),
      ...algebraFunctionMachinesZoneNodes.map(n => n.id),
      ...algebraFormingEquationsZoneNodes.map(n => n.id),
      ...algebraEquationsWithBracketsZoneNodes.map(n => n.id),
    ],
  },
  {
    id: 'maths-sequences',
    name: 'Sequences',
    realm: 'numerica',
    nodeIds: [
      ...sequencesZoneNodes.map(n => n.id),
      ...sequencesNthTermZoneNodes.map(n => n.id),
      ...sequencesMissingTermsZoneNodes.map(n => n.id),
      ...sequencesGeometricZoneNodes.map(n => n.id),
      ...sequencesDecreasingNthTermZoneNodes.map(n => n.id),
      ...sequencesFromPatternsZoneNodes.map(n => n.id),
      ...sequencesSpecialTypesZoneNodes.map(n => n.id),
      ...sequencesQuadraticRecognitionZoneNodes.map(n => n.id),
    ],
  },
  {
    id: 'maths-coordinates',
    name: 'Coordinates',
    realm: 'numerica',
    nodeIds: [
      ...coordinatesZoneNodes.map(n => n.id),
      ...coordinatesShapesZoneNodes.map(n => n.id),
      ...coordinatesMidpointsZoneNodes.map(n => n.id),
      ...coordinatesPlottingLinearZoneNodes.map(n => n.id),
      ...coordinatesHorizontalVerticalLinesZoneNodes.map(n => n.id),
      ...coordinatesDistanceBetweenPointsZoneNodes.map(n => n.id),
      ...coordinatesReflectionsAxesZoneNodes.map(n => n.id),
      ...coordinatesEquationFromLineZoneNodes.map(n => n.id),
    ],
  },
  {
    id: 'maths-four-operations',
    name: 'Four Operations',
    realm: 'numerica',
    nodeIds: [
      ...fourOperationsZoneNodes.map(n => n.id),
      ...fourOperationsLongDivisionZoneNodes.map(n => n.id),
      ...fourOperationsLongMultiplicationZoneNodes.map(n => n.id),
      ...fourOperationsEstimationCheckingZoneNodes.map(n => n.id),
      ...fourOperationsCalculatorSkillsZoneNodes.map(n => n.id),
      ...fourOperationsNegativesInContextZoneNodes.map(n => n.id),
      ...fourOperationsMixedWordProblemsZoneNodes.map(n => n.id),
      ...fourOperationsPowersOfNegativesZoneNodes.map(n => n.id),
    ],
  },
  {
    id: 'maths-geometry-measure',
    name: 'Geometry and Measure',
    realm: 'numerica',
    nodeIds: [
      ...areaRectanglesZoneNodes.map(n => n.id),
      ...areaTrianglesZoneNodes.map(n => n.id),
      ...geometryMeasureAreaParallelogramsZoneNodes.map(n => n.id),
      ...areaTrapeziaZoneNodes.map(n => n.id),
      ...geometryMeasureAngleRulesZoneNodes.map(n => n.id),
      ...perimeterZoneNodes.map(n => n.id),
      ...volumeCuboidsZoneNodes.map(n => n.id),
      ...volumePrismsZoneNodes.map(n => n.id),
      ...surfaceAreaCuboidsZoneNodes.map(n => n.id),
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
      ...probabilitySumToOneZoneNodes.map(n => n.id),
      ...probabilityTwoWayTablesZoneNodes.map(n => n.id),
      ...probabilityExpectedFrequencyZoneNodes.map(n => n.id),
      ...probabilityEquallyLikelyEventsZoneNodes.map(n => n.id),
      ...probabilitySampleSpaceTwoEventZoneNodes.map(n => n.id),
      ...probabilityComparingExperimentalTheoreticalZoneNodes.map(n => n.id),
    ],
  },
]
