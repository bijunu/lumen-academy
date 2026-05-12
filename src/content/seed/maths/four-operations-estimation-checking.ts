import type { SkillNode } from '@/types/content'

export const fourOperationsEstimationChecking: SkillNode = {
  id: 'maths-four-operations-estimation-checking',
  title: 'Estimating and Checking Calculations',
  description:
    'Estimate the answer to a calculation by rounding each input to one significant figure, use the estimate to spot calculator slips and ordering errors, and verify a result with an inverse operation.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-four-operations',
  zoneName: 'Four Operations',
  tier: 'confident',
  prerequisites: ['maths-four-operations-multiply-divide-negatives'],
  curriculum: {
    ks3Objective:
      'Use approximation through rounding to estimate answers and calculate possible resulting errors expressed using inequality notation a less than x less than or equal to b.',
    awardingBodies: {
      aqa: 'N14 Estimate answers; check calculations using approximation and estimation, including answers obtained using technology',
      edexcel:
        'N14 Estimate answers; check calculations using approximation and estimation, including answers obtained using technology',
      ocr: '1.04b Estimate to check answers to calculations',
    },
  },
  scenes: [
    {
      id: 'fec-scene-round-to-one-sf',
      title: 'Round Each Input to One Significant Figure',
      type: 'diagram',
      instructions:
        'Read each row. The original calculation sits on the left, the inputs rounded to one significant figure sit in the middle, and the quick estimate sits on the right. The estimate is not the exact answer, it is a sensible ballpark a Year 7 learner can do without a calculator.',
      data: {
        positiveColour: '#22C55E',
        negativeColour: '#EF4444',
        examples: [
          {
            calculation: '387 × 19',
            rounded: '400 × 20',
            estimate: 8000,
            actual: 7353,
          },
          {
            calculation: '612 + 289',
            rounded: '600 + 300',
            estimate: 900,
            actual: 901,
          },
          {
            calculation: '8736 ÷ 24',
            rounded: '9000 ÷ 20',
            estimate: 450,
            actual: 364,
          },
          {
            calculation: '2.84 × 5.13',
            rounded: '3 × 5',
            estimate: 15,
            actual: 14.5692,
          },
        ],
        notes:
          'One significant figure for each input keeps the arithmetic mental. The estimate sits in the same order of magnitude as the exact answer, so a calculator slip that produces 73530 instead of 7353 stands out at once.',
      },
    },
    {
      id: 'fec-scene-spot-the-slip',
      title: 'Spot the Calculator Slip',
      type: 'diagram',
      instructions:
        'Each row shows a calculation, what the learner typed into the calculator, and the result the calculator returned. The estimate column tells you whether to trust the result. A result far from the estimate is almost always a finger slip on the keys.',
      data: {
        positiveColour: '#22C55E',
        negativeColour: '#EF4444',
        examples: [
          {
            calculation: '387 × 19',
            estimate: 8000,
            calculatorShows: 73530,
            verdict: 'reject',
            reason: 'Off by a factor of about 10. Likely an extra digit was typed.',
          },
          {
            calculation: '8736 ÷ 24',
            estimate: 450,
            calculatorShows: 364,
            verdict: 'accept',
            reason: 'Close to the estimate of 450. Sensible.',
          },
          {
            calculation: '4.7 × 31',
            estimate: 150,
            calculatorShows: 14.57,
            verdict: 'reject',
            reason: 'Off by a factor of about 10. The decimal point is in the wrong place.',
          },
          {
            calculation: '612 - 289',
            estimate: 300,
            calculatorShows: 901,
            verdict: 'reject',
            reason: 'The estimate is around 300, so 901 is the wrong operation. The plus key was pressed by mistake.',
          },
        ],
        notes:
          'A close estimate does not prove the answer is exact, but a far estimate is strong evidence the result is wrong.',
      },
    },
    {
      id: 'fec-scene-inverse-check',
      title: 'Check by Reversing the Operation',
      type: 'diagram',
      instructions:
        'Look at how each result is verified by undoing the original operation. A division check multiplies back to the dividend. A subtraction check adds back to the larger number. The verification is independent, so it catches errors that an estimate alone would miss.',
      data: {
        positiveColour: '#22C55E',
        negativeColour: '#EF4444',
        examples: [
          {
            calculation: '8736 ÷ 24 = 364',
            inverse: '364 × 24',
            inverseResult: 8736,
            verdict: 'accept',
            reason: 'The inverse returns 8736, the original dividend.',
          },
          {
            calculation: '903 - 478 = 425',
            inverse: '425 + 478',
            inverseResult: 903,
            verdict: 'accept',
            reason: 'The inverse returns 903, the original number.',
          },
          {
            calculation: '17 × 23 = 381',
            inverse: '381 ÷ 23',
            inverseResult: 16.56,
            verdict: 'reject',
            reason: 'The inverse returns 16.56, not 17. The original product was wrong.',
          },
        ],
        notes:
          'Inverse checking is the most reliable single test, because retyping the same calculation only catches mis-typing, not mis-reading the original numbers.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'fec-worked-1',
      title: 'Estimate 387 × 19 by rounding to one significant figure',
      steps: [
        {
          explanation:
            'We want a quick estimate of 387 × 19 to use as a sense check on a calculator answer.',
          maths: '387 × 19',
        },
        {
          explanation:
            'Round 387 to one significant figure. The first non-zero digit is 3, the next digit is 8, so 387 rounds up to 400.',
          maths: '387 ≈ 400',
        },
        {
          explanation:
            'Round 19 to one significant figure. The first digit is 1, the next digit is 9, so 19 rounds up to 20.',
          maths: '19 ≈ 20',
        },
        {
          explanation: 'Multiply the rounded values mentally.',
          maths: '400 × 20 = 8000',
        },
        {
          explanation:
            'So a sensible estimate for 387 × 19 is 8000. The exact answer should land in the thousands, not in the hundreds and not in the tens of thousands.',
          maths: 'estimate = 8000',
        },
        {
          explanation:
            'Compare with the calculator result of 7353. That sits close to 8000, so the calculator answer is reasonable.',
          maths: '7353 vs 8000 → reasonable',
        },
      ],
    },
    {
      id: 'fec-worked-2',
      title: 'Check 8736 ÷ 24 = 364 with an inverse multiplication',
      steps: [
        {
          explanation:
            'A learner has worked out 8736 ÷ 24 = 364. We want to be sure before we move on.',
          maths: '8736 ÷ 24 = 364',
        },
        {
          explanation:
            'First do a quick estimate. Round 8736 to 9000 and 24 to 20.',
          maths: '8736 ÷ 24 ≈ 9000 ÷ 20 = 450',
        },
        {
          explanation:
            'The estimate of 450 sits in the same order of magnitude as 364. The result is in the right ballpark.',
          maths: '364 vs 450 → reasonable',
        },
        {
          explanation:
            'Now run the inverse check. The inverse of dividing by 24 is multiplying by 24.',
          maths: '364 × 24',
        },
        {
          explanation:
            'Compute 364 × 24 by partition: 364 × 20 = 7280, and 364 × 4 = 1456.',
          maths: '7280 + 1456 = 8736',
        },
        {
          explanation:
            'The inverse returns 8736, the original dividend. So 8736 ÷ 24 = 364 is correct.',
          maths: 'verified: 364 × 24 = 8736',
        },
      ],
    },
    {
      id: 'fec-worked-3',
      title: 'Use an estimate to catch a calculator slip on 4.7 × 31',
      steps: [
        {
          explanation:
            'A learner enters 4.7 × 31 on a calculator and reads off 14.57. We want to know if that is right.',
          maths: '4.7 × 31 → calculator shows 14.57',
        },
        {
          explanation:
            'Estimate first. Round 4.7 to 5 and 31 to 30.',
          maths: '4.7 × 31 ≈ 5 × 30',
        },
        {
          explanation: 'Compute the rounded product mentally.',
          maths: '5 × 30 = 150',
        },
        {
          explanation:
            'The estimate is 150, but the calculator shows 14.57. That is about ten times smaller than the estimate.',
          maths: '14.57 vs 150 → off by ~10',
        },
        {
          explanation:
            'A factor of about 10 difference is the signature of a misplaced decimal point. The likely cause is that 0.47 was typed instead of 4.7.',
          maths: '0.47 × 31 = 14.57',
        },
        {
          explanation:
            'So 14.57 is rejected. Re-enter the calculation as 4.7 × 31 and the calculator returns 145.7, which sits close to the estimate of 150.',
          maths: 'correct value: 4.7 × 31 = 145.7',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'fec-q1',
      type: 'multiple-choice',
      stem: 'Which of these is the best one significant figure estimate for 387 × 19?',
      tier: 'core',
      options: ['7000', '8000', '6000', '80000'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Round 387 to 400 and 19 to 20, then multiply mentally.',
      misconceptionId: 'fec-mis-rounding-up-always',
    },
    {
      id: 'fec-q2',
      type: 'multiple-choice',
      stem: 'Round 612 to one significant figure.',
      tier: 'core',
      options: ['700', '610', '600', '500'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'The first digit is 6, the next digit is 1. Look at the next digit to decide whether to round up or stay.',
      misconceptionId: 'fec-mis-rounding-up-always',
    },
    {
      id: 'fec-q3',
      type: 'numeric-entry',
      stem: 'Estimate 612 + 289 by rounding each number to one significant figure. Enter your estimate.',
      tier: 'core',
      correctAnswer: 900,
      xpValue: 10,
      hint: '612 rounds to 600 and 289 rounds to 300. Add the rounded values.',
    },
    {
      id: 'fec-q4',
      type: 'numeric-entry',
      stem: 'Estimate 2.84 × 5.13 by rounding each number to one significant figure. Enter your estimate.',
      tier: 'core',
      correctAnswer: 15,
      xpValue: 10,
      hint: '2.84 rounds to 3 and 5.13 rounds to 5. Multiply.',
    },
    {
      id: 'fec-q5',
      type: 'multiple-choice',
      stem: 'A learner works out 47 + 28 = 75. Which estimate is closest to that result and shows it is reasonable?',
      tier: 'core',
      options: ['100', '70', '80', '50'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Round 47 to 50 and 28 to 30, then add.',
    },
    {
      id: 'fec-q6',
      type: 'numeric-entry',
      stem: 'Round 8736 to one significant figure. Enter your answer.',
      tier: 'core',
      correctAnswer: 9000,
      xpValue: 10,
      hint: 'The first digit is 8, the next digit is 7. The digit after the first is 5 or more, so round up.',
    },
    {
      id: 'fec-q7',
      type: 'multiple-choice',
      stem: 'Why is rounding to one significant figure usually preferred over rounding to two when making a quick estimate?',
      tier: 'core',
      options: [
        'Two significant figures gives a smaller answer than one.',
        'One significant figure keeps the arithmetic mental and quick.',
        'Two significant figures is never allowed in estimation.',
        'One significant figure always gives the exact answer.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'fec-mis-estimate-must-be-exact',
    },
    {
      id: 'fec-q8',
      type: 'multiple-choice',
      stem: 'A calculator shows 387 × 19 = 73530. The estimate is 8000. What is the most likely explanation?',
      tier: 'confident',
      options: [
        'The result is correct; the estimate is too low.',
        'The result is wrong; an extra digit was typed by mistake.',
        'The result is wrong; the multiplication key was pressed twice.',
        'The result is correct; the calculator added a zero by accident.',
      ],
      correctIndex: 1,
      xpValue: 15,
      hint: '73530 is about 10 times larger than the estimate. A factor of 10 usually points at an extra digit or a misplaced decimal point.',
      misconceptionId: 'fec-mis-trust-calculator-anyway',
    },
    {
      id: 'fec-q9',
      type: 'numeric-entry',
      stem: 'A learner works out 903 - 478 = 425. Which inverse calculation should they perform to check, and what value should it return? Enter the value the inverse calculation should return.',
      tier: 'confident',
      correctAnswer: 903,
      xpValue: 15,
      hint: 'The inverse of subtracting 478 is adding 478 to the result. The inverse should return the original starting number.',
      misconceptionId: 'fec-mis-recompute-same-calculation',
    },
    {
      id: 'fec-q10',
      type: 'multiple-choice',
      stem: 'Which calculation is the correct inverse check for 17 × 23 = 391?',
      tier: 'confident',
      options: ['23 ÷ 17', '17 × 391', '391 × 17', '391 ÷ 17'],
      correctIndex: 3,
      xpValue: 15,
      hint: 'The inverse of multiplying by 17 is dividing by 17. The check should return the other factor, 23.',
      misconceptionId: 'fec-mis-inverse-wrong-operation',
    },
    {
      id: 'fec-q11',
      type: 'numeric-entry',
      stem: 'Estimate 4.7 × 31 by rounding each number to one significant figure. Enter your estimate.',
      tier: 'core',
      correctAnswer: 150,
      xpValue: 10,
      hint: '4.7 rounds to 5 and 31 rounds to 30. Multiply.',
    },
    {
      id: 'fec-q12',
      type: 'multiple-choice',
      stem: 'A learner runs an inverse check on 17 × 23 = 391 by computing 391 ÷ 23 and gets 17. What does this tell them?',
      tier: 'confident',
      options: [
        'The inverse matches one factor, so 17 × 23 = 391 is verified.',
        'The inverse only catches typing errors, so the original may still be wrong.',
        'The inverse is the same as the original, so it is not a real check.',
        'The inverse should return 391, not 17.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'fec-mis-recompute-same-calculation',
    },
    {
      id: 'fec-q13',
      type: 'spot-misconception',
      stem: 'Maya says: "If my estimate of 387 × 19 is 8000 and the calculator says 7353, the calculator must be wrong because it does not match my estimate exactly."',
      tier: 'confident',
      statements: [
        {
          text: 'Maya is right. A calculator answer must equal the estimate or the calculator is wrong.',
          isMisconception: true,
        },
        {
          text: 'Maya is wrong. An estimate is a ballpark, not the exact answer. 7353 sits in the same thousands range as 8000, so the calculator answer is reasonable.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fec-mis-estimate-must-be-exact',
    },
    {
      id: 'fec-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step in this estimation. Estimate 5824 ÷ 29 to one significant figure.',
      tier: 'confident',
      steps: [
        'We want a quick estimate of 5824 ÷ 29.',
        'Round 5824 to one significant figure. 5824 rounds to 6000.',
        null,
        'Now compute the rounded division: 6000 ÷ 30 = 200.',
        'So a sensible estimate for 5824 ÷ 29 is 200.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Round 29 to one significant figure. The first digit is 2 and the next digit is 9, so 29 rounds up to 30.',
      xpValue: 20,
    },
    {
      id: 'fec-q15',
      type: 'numeric-entry',
      stem: 'Estimate 5824 ÷ 29 by rounding each number to one significant figure. Enter your estimate.',
      tier: 'confident',
      correctAnswer: 200,
      xpValue: 15,
      hint: '5824 rounds to 6000 and 29 rounds to 30. Divide.',
      misconceptionId: 'fec-mis-divide-round-same-way',
    },
    {
      id: 'fec-q16',
      type: 'drag-order',
      stem: 'Drag these steps into order to estimate 612 + 289 and check it on a calculator.',
      tier: 'confident',
      items: [
        'Compare the calculator result with the estimate. 901 sits very close to 900.',
        'Round 612 to one significant figure: 612 rounds to 600.',
        'Add the rounded values: 600 + 300 = 900.',
        'Conclude that 901 is reasonable, so accept the calculator answer.',
        'Round 289 to one significant figure: 289 rounds to 300.',
        'Enter 612 + 289 on a calculator and read 901.',
      ],
      correctOrder: [1, 4, 2, 5, 0, 3],
      xpValue: 20,
      hint: 'Round each input first, add the rounded values to get the estimate, then enter the actual calculation and compare.',
    },
    {
      id: 'fec-q17',
      type: 'multiple-choice',
      stem: 'A till at a Tunbridge Wells canteen rings up four lunches at GBP 4.85 each and shows a total of GBP 1.94. Which of these gives the best estimate, in pounds, and tells you the till total is wrong?',
      tier: 'challenge',
      options: ['20', '2', '40', '8'],
      correctIndex: 0,
      xpValue: 25,
      hint: 'Round GBP 4.85 to GBP 5 and the count of lunches stays at 4. Multiply, then compare with the till total.',
      misconceptionId: 'fec-mis-trust-calculator-anyway',
    },
    {
      id: 'fec-q18',
      type: 'numeric-entry',
      stem: 'A school trip from Sevenoaks hires three coaches, each holding 49 pupils. The trip lead types 3 × 49 into a calculator and reads 1470. Estimate the correct total to one significant figure to check, and enter your estimate of the number of pupils.',
      tier: 'challenge',
      correctAnswer: 150,
      xpValue: 25,
      unit: 'pupils',
      hint: 'Round 49 to 50, then multiply by 3. The calculator result of 1470 is far from your estimate, which signals a typing slip.',
      misconceptionId: 'fec-mis-trust-calculator-anyway',
    },
    {
      id: 'fec-q19',
      type: 'spot-misconception',
      stem: 'Liam works out 8736 ÷ 24 on a calculator, gets 364, then re-enters 8736 ÷ 24 on the same calculator, sees 364 again, and declares the answer checked. Which response is right?',
      tier: 'challenge',
      statements: [
        {
          text: 'Liam is right. Getting the same result twice confirms the answer.',
          isMisconception: true,
        },
        {
          text: 'Liam is wrong. Re-typing the same calculation only catches a typing slip the second time. A real check uses an inverse, such as 364 × 24, or an estimate from rounded inputs.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'fec-mis-recompute-same-calculation',
    },
    {
      id: 'fec-q20',
      type: 'missing-step',
      stem: 'Fill in the missing step. A learner computes 47 × 38 = 1786. Use an inverse check to verify it.',
      tier: 'challenge',
      steps: [
        'The inverse of multiplying by 38 is dividing by 38.',
        'So divide the result by 38: 1786 ÷ 38.',
        null,
        'The inverse returns 47, which matches the original factor.',
        'So 47 × 38 = 1786 is verified.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Compute 1786 ÷ 38. Long division (or a partition) gives 47.',
      xpValue: 25,
    },
    {
      id: 'fec-q21',
      type: 'drag-order',
      stem: 'Drag these calculator results into order from "definitely wrong" to "looks reasonable" against the estimate of 8000 for 387 × 19.',
      tier: 'challenge',
      items: ['82', '750', '7353', '73530', '735300'],
      correctOrder: [4, 3, 0, 1, 2],
      xpValue: 25,
      hint: 'A result far from 8000 is wrong; a result close to 8000 is reasonable. Place the most-out-of-range first.',
    },
  ],
  misconceptions: [
    // Source: Reys, R.E. and Bestgen, B.J. (1981), "Teaching and Assessing Computational Estimation Skills", Elementary School Journal 82(2), 117-127, on the persistence of the "estimate must equal exact" belief among learners new to estimation. Reinforced by CGP KS3 Maths Study Guide (Years 7-9), Approximation chapter, "Common mistake" callout that an estimate is a ballpark and not a precise answer.
    {
      id: 'fec-mis-estimate-must-be-exact',
      description:
        'Believing that a useful estimate must match the exact answer, so an estimate of 8000 against a calculator value of 7353 means the calculator is wrong.',
      triggerAnswer: 'estimate-must-be-exact',
      correction:
        'In fact an estimate is a ballpark check on the order of magnitude. A close estimate is enough to accept the result.',
      reExplanation:
        'Estimating 387 × 19 by 400 × 20 = 8000 is meant to flag results that are nowhere near the right size. The exact answer of 7353 sits in the thousands, the same range as 8000, so the calculator value is reasonable. A useful estimate is fast and mental, not exact.',
    },
    // Source: AQA GCSE Mathematics 8300 Foundation tier examiner reports (2017-2023 series), recurring on items where pupils round all inputs upward without checking the next digit. Reinforced by CGP KS3 Maths Study Guide (Years 7-9), Approximation chapter, "Common mistake" callout on always rounding up.
    {
      id: 'fec-mis-rounding-up-always',
      description:
        'Believing that rounding always rounds the digit upward, so 612 rounds to 700 instead of 600.',
      triggerAnswer: 'rounding-up-always',
      correction:
        'In fact you round up only when the next digit is 5 or more. If the next digit is 4 or less, the rounded digit stays the same.',
      reExplanation:
        '612 to one significant figure: keep the 6 and look at the next digit, which is 1. Because 1 is less than 5, the 6 stays put and 612 rounds to 600. The same rule applies to 289, where the next digit is 8, so 289 rounds up to 300.',
    },
    // Source: Edexcel GCSE Mathematics 1MA1 Foundation tier (Paper 1F) examiner reports across the 2017-2023 series, on items where pupils accept calculator outputs without comparing to a quick estimate. Reinforced by Sowder, J.T. and Wheeler, M.M. (1989), "The Development of Concepts and Strategies Used in Computational Estimation", Journal for Research in Mathematics Education 20(2), 130-146.
    {
      id: 'fec-mis-trust-calculator-anyway',
      description:
        'Believing that a calculator output is correct simply because the calculator produced it, even when the result is far from a sensible estimate.',
      triggerAnswer: 'trust-calculator-anyway',
      correction:
        'A calculator only does what it is told. A finger slip on the keys, a misplaced decimal point, or the wrong key all give plausible-looking outputs.',
      reExplanation:
        'For 387 × 19, an estimate of 400 × 20 = 8000 sits in the thousands. A calculator output of 73530 is about ten times larger and stands out at once. Compare every calculator value to a quick estimate before accepting it, especially in money or measurement contexts.',
    },
    // Source: OCR GCSE Mathematics J560 Foundation tier examiner reports across the 2017-2023 series, on items where pupils verified a calculator answer by re-typing the same calculation rather than using an inverse. Reinforced by CGP KS3 Maths Study Guide (Years 7-9), Approximation chapter, on independent checking strategies.
    {
      id: 'fec-mis-recompute-same-calculation',
      description:
        'Believing that re-typing a calculation on the same calculator and getting the same result counts as a check on the answer.',
      triggerAnswer: 'recompute-same-calculation',
      correction:
        'Re-typing only catches a finger slip on the second attempt. A real check uses a different method, such as an inverse operation or an estimate.',
      reExplanation:
        'For 8736 ÷ 24 = 364, a real check is the inverse multiplication 364 × 24, which should return 8736. If the original was a mis-read of the dividend, re-typing the same wrong number would not catch it; the inverse against the printed dividend would.',
    },
    // Source: Hart, K.M. ed. (1981), "Children's Understanding of Mathematics 11-16" (CSMS), John Murray, on confusion between the inverse of compound expressions and simple operations. Reinforced by AQA GCSE Mathematics 8300 Foundation tier examiner reports across the 2017-2023 series, on items requiring an inverse check on a two-step calculation.
    {
      id: 'fec-mis-inverse-wrong-operation',
      description:
        'Believing that any inverse uses the same numbers in the same order, for example checking 17 × 23 = 391 by computing 391 × 17 instead of 391 ÷ 17.',
      triggerAnswer: 'inverse-wrong-operation',
      correction:
        'In fact an inverse undoes the original operation. Multiplication is undone by division, addition is undone by subtraction.',
      reExplanation:
        'For 17 × 23 = 391, the inverse divides the product by one factor and should return the other. So 391 ÷ 23 = 17, or 391 ÷ 17 = 23. Multiplying again by the same factor would give 17 × 391, which only repeats the original style of calculation and tells you nothing new.',
    },
    // Authored, no external source: a common Year 7 framing observation. Pupils sometimes round both numerator and denominator upward in a division estimate and lose the compensating effect; this surfaces in classroom diagnostic discussion at KS3 but is rarely formalised in the published examiner reports.
    {
      id: 'fec-mis-divide-round-same-way',
      description:
        'Believing that in a division estimate you should round both numbers the same way, so 8736 ÷ 24 always rounds upward to 9000 ÷ 30 = 300, even though rounding both upward shrinks the quotient further from the true answer.',
      triggerAnswer: 'divide-round-same-way',
      correction:
        'In fact rounding to one significant figure follows the standard rule for each number on its own. The compensating effects in division are an extra refinement, not a starter rule.',
      reExplanation:
        'For 8736 ÷ 24, round each input by the digit-after-first rule: 8736 rounds to 9000 (next digit 7) and 24 rounds to 20 (next digit 4). The estimate 9000 ÷ 20 = 450 sits sensibly above the exact value 364. A learner who rounds 24 up to 30 would get 300, an estimate that is further from the exact answer than 450.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const fourOperationsEstimationCheckingZoneNodes = [
  fourOperationsEstimationChecking,
]
