import type { SkillNode } from '@/types/content'

export const probabilityExpectedFrequency: SkillNode = {
  id: 'maths-probability-expected-frequency',
  title: 'Expected Frequency from Probability',
  description:
    'Expected frequency turns a probability into a predicted count: expected frequency = probability x number of trials. Tossing a fair coin 100 times gives an expected count of 50 heads, since 0.5 x 100 = 50. Rolling a fair 6-sided die 60 times gives an expected count of 10 sixes, since (1/6) x 60 = 10. The reverse rule gives a probability estimate from observed counts: estimated P = favourable count / total trials. Apply this to UK Year 7 contexts: school spinner trials, weather forecasts, quality checks at a Sevenoaks bakery. Treat "expected" as an average prediction, not a guarantee: actual results vary around the expected value, and large trial counts give tighter predictions.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-probability',
  zoneName: 'Probability',
  tier: 'challenge',
  prerequisites: ['maths-probability-experimental', 'maths-probability-equally-likely-events'],
  curriculum: {
    ks3Objective:
      'Understand that empirical unbiased samples tend towards theoretical probability distributions, with increasing sample size; calculate expected frequencies.',
    awardingBodies: {
      aqa: 'P2 Calculate expected frequencies given probability and number of trials (GCSE Mathematics 8300)',
      edexcel: 'P2 Apply the relationship probability x number of trials = expected frequency (GCSE Mathematics 1MA1)',
      ocr: '11.02c Calculate expected frequency from probability and trial count (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'pef-scene-coin-100',
      title: 'Fair Coin, 100 Tosses: Expected vs Actual',
      type: 'diagram',
      instructions:
        'Read how a Year 7 class plans 100 tosses of a fair coin. The theoretical probability is P(heads) = 0.5. The rule expected frequency = probability x trials gives 0.5 x 100 = 50. After running the experiment, the class records 47 heads and 53 tails. The expected count of 50 is the average prediction, not a guarantee. The actual count varies around 50 by a few each run. With 1 000 tosses the count would tend to sit near 500, with a smaller percentage gap.',
      data: {
        probability: 0.5,
        trials: 100,
        expectedCount: 50,
        observedHeads: 47,
        observedTails: 53,
        rule: 'expected frequency = probability x trials',
        callout:
          'Expected frequency is an average prediction. Actual counts vary, and the spread shrinks in proportion as trials grow.',
      },
    },
    {
      id: 'pef-scene-die-multiples',
      title: 'Fair Die: Scaling Trials Scales the Expected Count',
      type: 'fraction-wall',
      instructions:
        'Each bar shows the expected count of sixes for a fair 6-sided die at different trial counts. The probability stays at P(6) = 1/6 throughout. The expected count scales in proportion: 60 trials give 10 sixes, 240 trials give 40 sixes, 600 trials give 100 sixes. The rule expected frequency = probability x trials is multiplicative: doubling the trials doubles the expected count.',
      data: {
        title: 'Expected count of sixes for a fair die at different trial counts',
        bars: [
          { label: '60 rolls: expected 10 sixes', segments: 60, highlightedSegments: 10, value: '(1/6) x 60 = 10' },
          { label: '240 rolls: expected 40 sixes', segments: 240, highlightedSegments: 40, value: '(1/6) x 240 = 40' },
          { label: '600 rolls: expected 100 sixes', segments: 600, highlightedSegments: 100, value: '(1/6) x 600 = 100' },
        ],
        callout:
          'The shaded fraction is always 1/6. Scaling the trial count scales the expected count by the same factor.',
      },
    },
    {
      id: 'pef-scene-bakery-quality',
      title: 'Sevenoaks Bakery Quality Check: Reverse the Rule',
      type: 'diagram',
      instructions:
        'Read how a Sevenoaks bakery checks 200 loaves of bread for a small fault. 8 loaves come back faulty. Reverse the expected frequency rule to estimate the probability that a single loaf is faulty: estimated P(faulty) = 8 / 200 = 0.04 (or 4 percent). The bakery uses this estimate to predict the next batch: for 5 000 loaves, expected faulty count = 0.04 x 5 000 = 200. The two rules are paired: probability gives expected frequency; observed frequency gives an estimated probability.',
      data: {
        sample: { trials: 200, faulty: 8 },
        estimatedProbability: '8 / 200 = 0.04',
        prediction: { trials: 5000, expectedFaulty: 200 },
        rules: ['expected frequency = probability x trials', 'estimated probability = favourable / trials'],
        callout:
          'The reverse rule is the same equation rearranged. Divide the favourable count by the trial total to get the probability estimate.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'pef-worked-1',
      title: 'Compute expected frequency from a fraction probability',
      steps: [
        {
          explanation: 'Read the probability. For a fair 6-sided die, P(rolling a 6) = 1/6.',
          maths: 'P(6) = 1/6',
        },
        {
          explanation: 'Read the planned trial count. The class will roll 240 times.',
          maths: 'trials = 240',
        },
        {
          explanation: 'Apply the rule expected frequency = probability x trials.',
          maths: 'expected count = (1/6) x 240',
        },
        {
          explanation: 'Carry out the multiplication. Divide 240 by 6.',
          maths: '240 / 6 = 40',
        },
        {
          explanation:
            'State the prediction. After 240 rolls, expect about 40 sixes. The actual count will vary around 40, often by a few in either direction.',
          maths: 'expected count = 40 sixes',
        },
      ],
    },
    {
      id: 'pef-worked-2',
      title: 'Reverse the rule: estimate a probability from observed frequency',
      steps: [
        {
          explanation:
            'Read the data. A spinner is spun 250 times and lands on red 70 times.',
          maths: 'trials = 250, red count = 70',
        },
        {
          explanation:
            'Apply the reverse rule estimated probability = favourable / trials.',
          maths: 'estimated P(red) = 70 / 250',
        },
        {
          explanation: 'Carry out the division.',
        },
        {
          explanation:
            'Convert to a decimal so the value sits in [0, 1].',
          maths: '70 / 250 = 0.28',
        },
        {
          explanation:
            'Use the estimate to predict a future run. For 1 000 spins, expected count = 0.28 x 1 000 = 280 reds.',
          maths: 'expected count for 1 000 spins = 280',
        },
        {
          explanation:
            'State the answer. Estimated P(red) = 0.28; predicted red count for 1 000 spins = 280. The estimate gets sharper if the bakery (or class) runs more trials.',
        },
      ],
    },
  ],
  questions: [
    // Core 1
    {
      id: 'pef-q1',
      type: 'numeric-entry',
      stem: 'A fair coin is tossed 200 times. What is the expected number of heads?',
      tier: 'core',
      correctAnswer: 100,
      xpValue: 10,
      hint: 'Expected frequency = probability x trials = 0.5 x 200 = 100.',
    },
    // Core 2 (MCQ correctIndex 0)
    {
      id: 'pef-q2',
      type: 'multiple-choice',
      stem: 'A fair 6-sided die is rolled 60 times. Which calculation gives the expected number of fours?',
      tier: 'core',
      options: ['(1/6) x 60', '60 / 4', '4 x 60', '60 + (1/6)'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pef-mis-add-not-multiply',
      hint: 'Expected frequency = probability x trials. Here that is (1/6) x 60.',
    },
    // Core 3
    {
      id: 'pef-q3',
      type: 'numeric-entry',
      stem: 'A fair 6-sided die is rolled 60 times. What is the expected number of fours?',
      tier: 'core',
      correctAnswer: 10,
      xpValue: 10,
      hint: '(1/6) x 60 = 60 / 6 = 10.',
    },
    // Core 4 (MCQ correctIndex 1)
    {
      id: 'pef-q4',
      type: 'multiple-choice',
      stem: 'A spinner has 5 equal sectors. It is spun 100 times. What is the expected number of times it lands on any one chosen sector?',
      tier: 'core',
      options: ['100', '20', '5', '1/5'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'P(any one sector) = 1/5 = 0.2. Expected frequency = 0.2 x 100 = 20.',
    },
    // Core 5 (MCQ correctIndex 2)
    {
      id: 'pef-q5',
      type: 'multiple-choice',
      stem: 'A spinner is spun 200 times and lands on green 50 times. What is the estimated probability of green, as a decimal?',
      tier: 'core',
      options: ['50', '4', '0.25', '0.5'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pef-mis-frequency-not-probability',
      hint: 'Estimated probability = favourable / trials = 50 / 200 = 0.25.',
    },
    // Core 6
    {
      id: 'pef-q6',
      type: 'numeric-entry',
      stem: 'P(rain) on a UK summer Saturday is estimated at 0.3. Across 50 such Saturdays, what is the expected number of rainy ones?',
      tier: 'core',
      correctAnswer: 15,
      xpValue: 10,
      hint: 'Expected frequency = 0.3 x 50 = 15.',
    },
    // Core 7 (MCQ correctIndex 3)
    {
      id: 'pef-q7',
      type: 'multiple-choice',
      stem: 'In a Manchester traffic survey of 400 cars, 60 are red. What is the estimated probability that the next car is red?',
      tier: 'core',
      options: ['60', '6.7', '0.6', '0.15'],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'pef-mis-reverse-formula',
      hint: 'Estimated probability = favourable / trials = 60 / 400 = 0.15.',
    },
    // Confident 1 (MCQ correctIndex 0)
    {
      id: 'pef-q8',
      type: 'multiple-choice',
      stem: 'P(faulty) for a Sevenoaks bakery loaf is 0.04. The next batch contains 350 loaves. What is the expected number of faulty loaves?',
      tier: 'confident',
      options: ['14', '8.75', '350', '4'],
      correctIndex: 0,
      xpValue: 15,
      hint: 'Expected frequency = 0.04 x 350 = 14.',
    },
    // Confident 2
    {
      id: 'pef-q9',
      type: 'numeric-entry',
      stem: 'A fair 8-sided die is rolled 240 times. What is the expected number of times it lands on 3?',
      tier: 'confident',
      correctAnswer: 30,
      xpValue: 15,
      hint: 'P(3) = 1/8. Expected frequency = (1/8) x 240 = 240 / 8 = 30.',
    },
    // Confident 3 (MCQ correctIndex 1)
    {
      id: 'pef-q10',
      type: 'multiple-choice',
      stem: 'A spinner has P(blue) = 0.35. It is spun 80 times. Which value is the expected number of blue results?',
      tier: 'confident',
      options: ['35', '28', '80', '2.3'],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'pef-mis-percent-not-decimal',
      hint: 'Expected frequency = 0.35 x 80 = 28. Convert any percentage to a decimal first.',
    },
    // Confident 4 (spot-misconception)
    {
      id: 'pef-q11',
      type: 'spot-misconception',
      stem: 'A fair coin is tossed 100 times. Priya predicts: "exactly 50 heads will land, since P(heads) = 0.5 and 0.5 x 100 = 50." Which response is more accurate?',
      tier: 'confident',
      statements: [
        {
          text: 'Priya is right. The expected frequency rule predicts the exact count, not an average.',
          isMisconception: true,
        },
        {
          text: 'In fact 50 is the average prediction. Actual counts vary around 50 by chance, often by a few in either direction. Larger trial counts tighten the spread in proportion.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'pef-mis-expected-must-equal-actual',
    },
    // Confident 5 (MCQ correctIndex 2)
    {
      id: 'pef-q12',
      type: 'multiple-choice',
      stem: 'A Tunbridge Wells spinner has P(yellow) = 0.2. It is spun 150 times. Two pupils predict the yellow count differently. Which prediction follows the expected frequency rule?',
      tier: 'confident',
      options: [
        '150 / 0.2 = 750 yellows',
        '150 + 0.2 = 150.2 yellows',
        '0.2 x 150 = 30 yellows',
        '0.2 x 0.2 x 150 = 6 yellows',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pef-mis-add-not-multiply',
      hint: 'The rule is expected frequency = probability x trials. So 0.2 x 150 = 30.',
    },
    // Confident 6 (numeric, percentage stem)
    {
      id: 'pef-q13',
      type: 'numeric-entry',
      stem: 'A quality check shows 12 percent of light bulbs are duds. In a Dover warehouse batch of 250 bulbs, what is the expected number of duds?',
      tier: 'confident',
      correctAnswer: 30,
      xpValue: 15,
      misconceptionId: 'pef-mis-percent-not-decimal',
      hint: 'Convert 12 percent to 0.12. Expected frequency = 0.12 x 250 = 30.',
    },
    // Confident 7 (missing-step)
    {
      id: 'pef-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step. A bag holds counters in three colours with P(red) = 1/4. A pupil draws and replaces a counter 80 times. Find the expected number of reds.',
      tier: 'confident',
      steps: [
        'Read the probability: P(red) = 1/4.',
        'Read the trial count: 80 draws.',
        null,
        'Carry out the calculation: (1/4) x 80 = 80 / 4 = 20. Expected number of reds = 20.',
      ],
      missingStepIndex: 2,
      correctStep: 'Apply the rule expected frequency = probability x trials = (1/4) x 80.',
      xpValue: 20,
      misconceptionId: 'pef-mis-add-not-multiply',
    },
    // Confident 8 (MCQ correctIndex 3) - reverse-rule prediction
    {
      id: 'pef-q15',
      type: 'multiple-choice',
      stem: 'A drawing pin is dropped 400 times and lands point up 252 times. Using this experimental estimate, what is the expected number of point-up landings in 1 000 drops?',
      tier: 'confident',
      options: [
        '252',
        '0.63',
        '400',
        '630',
      ],
      correctIndex: 3,
      xpValue: 15,
      hint: 'Estimated P(point up) = 252 / 400 = 0.63. Expected count for 1 000 drops = 0.63 x 1 000 = 630.',
    },
    // Challenge 1 (drag-order)
    {
      id: 'pef-q16',
      type: 'drag-order',
      stem: 'Order the steps to predict the expected number of yellow sweets in a batch of 600, given a sample of 50 sweets contained 9 yellows.',
      tier: 'challenge',
      items: [
        'Multiply the probability estimate by the new trial total: 0.18 x 600.',
        'Divide the favourable count by the sample total: 9 / 50.',
        'State the prediction: expected yellow count for 600 sweets is 108.',
        'Convert the fraction to a decimal probability estimate: 9 / 50 = 0.18.',
      ],
      correctOrder: [1, 3, 0, 2],
      xpValue: 25,
      misconceptionId: 'pef-mis-reverse-formula',
      hint: 'Reverse rule first: divide favourable by sample to get the probability estimate. Then multiply by the new trial count to get the expected frequency.',
    },
    // Challenge 2 (MCQ correctIndex 0) Bond-style word problem
    {
      id: 'pef-q17',
      type: 'multiple-choice',
      stem: 'A Lake District weather station records that on 45 of 120 spring days the rainfall exceeds 5 millimetres. A walker plans a 30-day spring trip. Using the station data as an estimate, how many days should the walker expect to see more than 5 millimetres of rain?',
      tier: 'challenge',
      options: ['about 11 days', 'about 8 days', 'about 15 days', 'about 27 days'],
      correctIndex: 0,
      xpValue: 25,
      hint: 'Estimated P(rainfall over 5 millimetres) = 45 / 120 = 0.375. Expected days in a 30-day trip = 0.375 x 30 = 11.25, so about 11.',
    },
    // Challenge 3 (numeric)
    {
      id: 'pef-q18',
      type: 'numeric-entry',
      stem: 'A Sevenoaks deli sells salads. Past records show 3 in every 25 customers ask for an extra dressing. The deli expects 500 customers on Saturday. How many extra dressings should they prepare?',
      tier: 'challenge',
      correctAnswer: 60,
      xpValue: 25,
      unit: 'dressings',
      hint: 'Estimated P(extra dressing) = 3 / 25 = 0.12. Expected count = 0.12 x 500 = 60.',
    },
    // Challenge 4 (MCQ correctIndex 1) - gambler's-fallacy distractor
    {
      id: 'pef-q19',
      type: 'multiple-choice',
      stem: 'A Year 7 class plans 300 spins of a fair spinner with P(green) = 0.4. After the first 100 spins, green has come up only 30 times instead of the expected 40. Which prediction for the remaining 200 spins is most reasonable?',
      tier: 'challenge',
      options: [
        'about 90 greens, since the spinner must catch up to the expected total',
        'about 80 greens, since each remaining spin still has P(green) = 0.4',
        'about 50 greens, since past results force future trials to balance',
        'about 30 greens, since the spinner has shown a long-run rate of 0.3',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'pef-mis-past-affects-future',
      hint: 'Each spin is independent. For the remaining 200 spins, expected greens = 0.4 x 200 = 80. The first 100 spins do not force the next 200 to balance.',
    },
    // Challenge 5 (numeric, multi-step)
    {
      id: 'pef-q20',
      type: 'numeric-entry',
      stem: 'A Premier League youth coach records that 7 of every 40 free-kicks taken in training hit the target. The coach plans 360 free-kicks across the next month. How many of these are expected to hit the target?',
      tier: 'challenge',
      correctAnswer: 63,
      xpValue: 25,
      unit: 'free-kicks',
      hint: 'Estimated P(on target) = 7 / 40 = 0.175. Expected count = 0.175 x 360 = 63.',
    },
    // Challenge 6 (spot-misconception)
    {
      id: 'pef-q21',
      type: 'spot-misconception',
      stem: 'A fair 6-sided die is rolled 21 times. Liam computes the expected number of sixes as (1/6) x 21 = 3.5 and rejects the answer because "you cannot roll half a six." Which response is more accurate?',
      tier: 'challenge',
      statements: [
        {
          text: 'Liam is right. Expected frequency must always be a whole number, so the calculation is wrong.',
          isMisconception: true,
        },
        {
          text: 'In fact 3.5 is the long-run average count of sixes per 21 rolls. Across many sets of 21 rolls, the average sits at 3.5. Round to a whole number only when reporting "how many" for a single set.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'pef-mis-must-be-integer',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on an "expected frequency" question where pupils added the probability and trial count instead of multiplying them.
    {
      id: 'pef-mis-add-not-multiply',
      description:
        'I add the probability and the trial count, or I divide the trials by the probability, instead of multiplying probability by trials.',
      triggerAnswer: 'add-not-multiply',
      correction:
        'In fact the rule is expected frequency = probability x trials. The two values multiply, not add or divide.',
      reExplanation:
        'For P(6) = 1/6 and 60 rolls, expected sixes = (1/6) x 60 = 10. Adding gives 60 + (1/6), which is about 60, far too many. Dividing 60 by 1/6 gives 360, also wrong. Always multiply: probability x trials.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a "from frequency to probability" question where pupils reported the raw count as the probability.
    {
      id: 'pef-mis-frequency-not-probability',
      description:
        'I report the raw count as the probability, instead of dividing the count by the trial total.',
      triggerAnswer: 'frequency-not-probability',
      correction:
        'Actually a probability sits in the range 0 to 1. The raw count is divided by the trial total to give an estimated probability.',
      reExplanation:
        'For 50 greens in 200 spins, the estimated probability is 50 / 200 = 0.25, not 50. The "0.25" sits in [0, 1] as a probability must; "50" does not. Always divide the favourable count by the trial total before reporting.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2022, Paper 01 (Foundation, Non-calculator), commentary on a reverse-rule question where pupils used trials x frequency instead of frequency / trials when estimating probability from data.
    {
      id: 'pef-mis-reverse-formula',
      description:
        'I rearrange the rule incorrectly: I write probability = trials x frequency or use trial total on top of the fraction.',
      triggerAnswer: 'reverse-formula',
      correction:
        'In fact the reverse rule is estimated probability = favourable / trials. The favourable count goes on top of the fraction.',
      reExplanation:
        'For 60 red cars in 400, estimated P(red) = 60 / 400 = 0.15. Using 400 / 60 gives 6.67, which exceeds 1 and so cannot be a probability. The "favourable on top" pattern matches the rule for theoretical probability.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 2F (Foundation, Calculator), commentary on a percentage-based expected frequency question where pupils used 12 instead of 0.12 in the multiplication.
    {
      id: 'pef-mis-percent-not-decimal',
      description:
        'I multiply the percentage value directly by the trials, without first converting the percentage to a decimal or fraction.',
      triggerAnswer: 'percent-not-decimal',
      correction:
        'Actually a probability used in the rule must be a decimal or fraction in [0, 1]. Convert the percentage by dividing by 100 first.',
      reExplanation:
        'For 12 percent of 250 loaves, the probability value is 12 / 100 = 0.12. Expected frequency = 0.12 x 250 = 30. Multiplying 12 x 250 = 3 000 gives more loaves than the batch contains, which flags the slip immediately.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 7 Statistics and Probability, "Expected Frequency" page; the "Common mistake" callout that pupils expect the actual count to match the expected count exactly.
    {
      id: 'pef-mis-expected-must-equal-actual',
      description:
        'I expect the actual count to match the expected count exactly. So if expected heads = 50 in 100 tosses, I think we must get exactly 50 heads.',
      triggerAnswer: 'expected-must-equal-actual',
      correction:
        'Actually the expected frequency is an average prediction, not a guarantee. Real counts vary around it from run to run.',
      reExplanation:
        'For 100 tosses of a fair coin, the expected count is 50 heads, but actual results often sit near 47, 48, 51 or 53. As trials grow, the percentage gap shrinks: 1 000 tosses tend to give close to 500 heads, with a smaller spread in proportion.',
    },
    // Source: NCETM "Statistics and Probability at KS3" reference, on the gambler's fallacy in expected frequency reasoning where pupils believe past trials force future trials to balance out.
    {
      id: 'pef-mis-past-affects-future',
      description:
        'I think past trials change the probability of future trials, so a low count of greens forces extra greens in the next batch (the gambler\'s fallacy).',
      triggerAnswer: 'past-affects-future',
      correction:
        'In fact each trial is independent. The probability resets every spin, so past results never force future trials to balance.',
      reExplanation:
        'A fair spinner with P(green) = 0.4 has the same 0.4 chance on every spin, regardless of what came before. After a low-green run, the expected count for the next 200 spins is still 0.4 x 200 = 80, not "extra greens to make up the gap". Independence is the key idea.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 2F (Foundation, Calculator), commentary on an expected frequency question where pupils rejected a non-integer answer such as 3.5 sixes in 21 rolls.
    {
      id: 'pef-mis-must-be-integer',
      description:
        'I think the expected frequency must always be a whole number, so I reject answers like 3.5 sixes in 21 rolls.',
      triggerAnswer: 'must-be-integer',
      correction:
        'Actually the formula gives any real number. The decimal is the long-run average count per set of trials, even when a single set must be a whole number.',
      reExplanation:
        'For 21 rolls of a fair die, expected sixes = (1/6) x 21 = 3.5. No single run can give half a six, but across many runs the average sits at 3.5. Round to a whole number only when reporting "how many" for a single set, and keep the decimal in any further calculation.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const probabilityExpectedFrequencyZoneNodes = [probabilityExpectedFrequency]
