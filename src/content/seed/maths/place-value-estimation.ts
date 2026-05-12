import type { SkillNode } from '@/types/content'

export const placeValueEstimation: SkillNode = {
  id: 'maths-place-value-estimation',
  title: 'Estimation by Rounding to One Significant Figure',
  description:
    'Round each number in a calculation to 1 significant figure, then work out the rounded sum, product, or quotient as a quick estimate. Use the estimate to check that a calculator answer or a written total is sensible, and judge whether the estimate is likely to be too high or too low.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-place-value',
  zoneName: 'Place Value',
  tier: 'confident',
  prerequisites: ['maths-place-value-whole-numbers'],
  curriculum: {
    ks3Objective:
      'Round numbers and measures to an appropriate degree of accuracy; use approximation through rounding to estimate answers.',
    awardingBodies: {
      aqa: 'N14 Estimate answers; check calculations using approximation and estimation (GCSE Mathematics 8300)',
      edexcel:
        'N14 Estimate answers; check calculations using approximation and estimation, including answers obtained using technology (GCSE Mathematics 1MA1)',
      ocr: '1.04b Estimate answers to calculations by rounding to 1 significant figure (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'pve-scene-first-sig-fig',
      title: 'Find the First Significant Figure',
      type: 'number-line',
      instructions:
        'Read each number on the line and see where its first significant figure sits. The first significant figure is the leftmost non-zero digit. For 38 the first significant figure is 3 (the tens digit). For 387 it is 3 (the hundreds digit). For 0.0234 the first significant figure is 2 (the hundredths digit), since leading zeros are placeholders, not significant. The decider is the digit immediately to the right of the first significant figure: if it is 5 or more, round up; otherwise round down.',
      data: {
        examples: [
          {
            number: 38,
            firstSigFig: 3,
            firstSigFigPlace: 'tens',
            decider: 8,
            roundedTo1Sf: 40,
            reason:
              'The first significant figure 3 sits in the tens column. The decider 8 is 5 or more, so 3 rounds up to 4 and the number becomes 40.',
          },
          {
            number: 387,
            firstSigFig: 3,
            firstSigFigPlace: 'hundreds',
            decider: 8,
            roundedTo1Sf: 400,
            reason:
              'The first significant figure 3 sits in the hundreds column. The decider 8 is 5 or more, so 3 rounds up to 4 and the number becomes 400.',
          },
          {
            number: 4623,
            firstSigFig: 4,
            firstSigFigPlace: 'thousands',
            decider: 6,
            roundedTo1Sf: 5000,
            reason:
              'The first significant figure 4 sits in the thousands column. The decider 6 is 5 or more, so 4 rounds up to 5 and the number becomes 5000.',
          },
          {
            number: 0.0234,
            firstSigFig: 2,
            firstSigFigPlace: 'hundredths',
            decider: 3,
            roundedTo1Sf: 0.02,
            reason:
              'Leading zeros are placeholders. The first significant figure 2 sits in the hundredths column. The decider 3 is less than 5, so 2 stays and the number becomes 0.02.',
          },
        ],
      },
    },
    {
      id: 'pve-scene-estimate-product',
      title: 'Estimate a Product by Rounding Each Factor',
      type: 'diagram',
      instructions:
        'Read how the product 387 multiplied by 19 turns into a one-line estimate. Round each factor to 1 significant figure first: 387 rounds to 400 and 19 rounds to 20. Then 400 multiplied by 20 is 8000. The exact answer is 7353, so the estimate sits within about 9 percent of the true value. Estimating before reaching for a calculator gives you a target answer to compare against, so a slip of the finger like a missing zero stands out at once.',
      data: {
        focusCalculation: '387 x 19',
        steps: [
          { stage: 'round 387 to 1 sf', value: 400, reason: 'decider 8 forces a round up' },
          { stage: 'round 19 to 1 sf', value: 20, reason: 'decider 9 forces a round up' },
          { stage: 'multiply rounded factors', value: 8000, reason: '400 x 20 = 8000' },
        ],
        trueValue: 7353,
        rule: 'Round every input to 1 significant figure first, then do the simpler calculation.',
      },
    },
    {
      id: 'pve-scene-over-or-under',
      title: 'Spot Whether the Estimate is High or Low',
      type: 'diagram',
      instructions:
        'Read how the rounding direction of each input tells you if the estimate sits above or below the true value. If both inputs were rounded UP, the estimate is an overestimate. If both were rounded DOWN, the estimate is an underestimate. If one was rounded up and the other rounded down, the estimate could land either side of the true value. For 387 multiplied by 19, both factors were rounded up to 400 and 20, so the estimate 8000 is an overestimate, and indeed 8000 sits above the true value 7353.',
      data: {
        cases: [
          {
            calculation: '387 x 19',
            roundings: [
              { input: 387, rounded: 400, direction: 'up' },
              { input: 19, rounded: 20, direction: 'up' },
            ],
            estimate: 8000,
            trueValue: 7353,
            verdict: 'overestimate (both rounded up)',
          },
          {
            calculation: '32 x 41',
            roundings: [
              { input: 32, rounded: 30, direction: 'down' },
              { input: 41, rounded: 40, direction: 'down' },
            ],
            estimate: 1200,
            trueValue: 1312,
            verdict: 'underestimate (both rounded down)',
          },
          {
            calculation: '52 x 28',
            roundings: [
              { input: 52, rounded: 50, direction: 'down' },
              { input: 28, rounded: 30, direction: 'up' },
            ],
            estimate: 1500,
            trueValue: 1456,
            verdict: 'mixed: hard to call from rounding alone',
          },
        ],
        rule:
          'Both up means overestimate. Both down means underestimate. Mixed means you need to check the size of each rounding gap.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'pve-worked-1',
      title: 'Round 4623 to 1 significant figure',
      steps: [
        {
          explanation:
            'Find the first significant figure. The leftmost non-zero digit of 4623 is 4, which sits in the thousands column.',
          maths: 'first sig fig = 4 (thousands)',
        },
        {
          explanation:
            'Find the decider. It is the digit immediately to the right of the first significant figure, the hundreds digit.',
          maths: 'decider = 6',
        },
        {
          explanation:
            'Apply the rounding rule. The decider 6 is 5 or more, so the first significant figure rounds up by 1.',
          maths: '4 rounds up to 5',
        },
        {
          explanation:
            'Replace every digit to the right of the first significant figure with 0 to keep the number in the right size band.',
          maths: '5 _ _ _',
        },
        {
          explanation:
            'So 4623 rounded to 1 significant figure is 5000.',
          maths: '4623 ~ 5000 (1 sf)',
        },
      ],
    },
    {
      id: 'pve-worked-2',
      title: 'Estimate 392 divided by 18 by rounding each input to 1 sf',
      steps: [
        {
          explanation:
            'Round 392 to 1 significant figure. The first significant figure is 3 in the hundreds column. The decider 9 is 5 or more, so 3 rounds up to 4 and the number becomes 400.',
          maths: '392 ~ 400 (1 sf)',
        },
        {
          explanation:
            'Round 18 to 1 significant figure. The first significant figure is 1 in the tens column. The decider 8 is 5 or more, so 1 rounds up to 2 and the number becomes 20.',
          maths: '18 ~ 20 (1 sf)',
        },
        {
          explanation:
            'Replace the original calculation with the rounded one.',
          maths: '400 / 20',
        },
        {
          explanation:
            'Work out the simpler division. 400 divided by 20 is the same as 40 divided by 2, which is 20.',
          maths: '400 / 20 = 20',
        },
        {
          explanation:
            'State the estimate. The exact answer is 21.78, so the estimate 20 sits within about 8 percent of the true value, well inside the useful range for a sanity check.',
          maths: '392 / 18 ~ 20',
        },
      ],
    },
  ],
  questions: [
    // Core 1: round a tens-range number to 1 sf
    {
      id: 'pve-q1',
      type: 'multiple-choice',
      stem: 'Round 38 to 1 significant figure.',
      tier: 'core',
      options: ['40', '30', '38', '4'],
      correctIndex: 0,
      xpValue: 10,
      hint: 'The first significant figure is 3 in the tens column. The decider 8 is 5 or more, so round up.',
    },
    // Core 2: round a hundreds-range number to 1 sf
    {
      id: 'pve-q2',
      type: 'multiple-choice',
      stem: 'Round 387 to 1 significant figure.',
      tier: 'core',
      options: ['380', '400', '300', '500'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'The first significant figure is 3 in the hundreds column. The decider 8 is 5 or more, so 3 rounds up to 4 and the number becomes 400.',
      misconceptionId: 'pve-mis-truncate',
    },
    // Core 3: round a thousands-range number to 1 sf
    {
      id: 'pve-q3',
      type: 'multiple-choice',
      stem: 'Round 4623 to 1 significant figure.',
      tier: 'core',
      options: ['4000', '4600', '5000', '46'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'The first significant figure is 4 in the thousands column. The decider 6 is 5 or more, so 4 rounds up to 5 and the number becomes 5000.',
      misconceptionId: 'pve-mis-1sf-1digit',
    },
    // Core 4: round a small decimal (0.0234) to 1 sf
    {
      id: 'pve-q4',
      type: 'multiple-choice',
      stem: 'Round 0.0234 to 1 significant figure.',
      tier: 'core',
      options: ['0', '0.1', '0.0', '0.02'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Leading zeros are placeholders. The first significant figure is 2 in the hundredths column. The decider 3 is less than 5, so 2 stays and the number becomes 0.02.',
      misconceptionId: 'pve-mis-drop-meaningful',
    },
    // Core 5: round a smaller decimal (0.00567) to 1 sf
    {
      id: 'pve-q5',
      type: 'multiple-choice',
      stem: 'Round 0.00567 to 1 significant figure.',
      tier: 'core',
      options: ['0.005', '0.006', '0.01', '0.0057'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'The first significant figure is 5 in the thousandths column. The decider 6 is 5 or more, so 5 rounds up to 6 and the number becomes 0.006.',
    },
    // Core 6: estimate a product
    {
      id: 'pve-q6',
      type: 'multiple-choice',
      stem: 'Estimate 387 x 19 by rounding each factor to 1 significant figure.',
      tier: 'core',
      options: ['8000', '6000', '7000', '9000'],
      correctIndex: 0,
      xpValue: 10,
      hint: '387 rounds to 400 and 19 rounds to 20. Then 400 x 20 = 8000.',
    },
    // Core 7: estimate a quotient (numeric)
    {
      id: 'pve-q7',
      type: 'numeric-entry',
      stem: 'Estimate 392 / 18 by rounding each input to 1 significant figure. Give your estimate as a single whole number.',
      tier: 'core',
      correctAnswer: 20,
      xpValue: 10,
      hint: '392 rounds to 400 and 18 rounds to 20. Then 400 / 20 = 20.',
    },
    // Confident 1: identify the first significant figure
    {
      id: 'pve-q8',
      type: 'multiple-choice',
      stem: 'Which digit is the first significant figure of 0.04086?',
      tier: 'confident',
      options: ['0', '4', '8', '6'],
      correctIndex: 1,
      xpValue: 15,
      hint: 'Leading zeros are placeholders, not significant. The first non-zero digit reading left to right is 4.',
      misconceptionId: 'pve-mis-leading-zeros',
    },
    // Confident 2: estimate a sum (numeric)
    {
      id: 'pve-q9',
      type: 'numeric-entry',
      stem: 'Estimate 612 + 478 + 89 by rounding each value to 1 significant figure. Give your estimate as a single whole number.',
      tier: 'confident',
      correctAnswer: 1190,
      xpValue: 15,
      hint: '612 rounds to 600, 478 rounds to 500, 89 rounds to 90. Then 600 + 500 + 90 = 1190.',
    },
    // Confident 3: 1 sf vs 1 dp distinction (MCQ)
    {
      id: 'pve-q10',
      type: 'multiple-choice',
      stem: 'Sam says "0.0234 to 1 significant figure is the same as 0.0234 to 1 decimal place: both give 0.0." Which statement is correct?',
      tier: 'confident',
      options: [
        'Sam is right because rounding to 1 sf and to 1 dp always agree.',
        'Sam is wrong. To 1 sf, 0.0234 is 0.02, because the first significant figure is the hundredths digit. To 1 dp, 0.0234 is 0.0, because the tenths column is empty.',
        'Sam is wrong. To 1 sf, 0.0234 is 0.024, because that keeps one significant figure.',
        'Sam is right because both rules drop everything after the first non-zero digit.',
      ],
      correctIndex: 1,
      xpValue: 15,
      hint: 'The two rules count from different starting points. 1 sf counts from the first non-zero digit; 1 dp counts from the decimal point. They give different answers when the leading zeros matter.',
      misconceptionId: 'pve-mis-same-as-1dp',
    },
    // Confident 4: estimate spotting an over or under
    {
      id: 'pve-q11',
      type: 'multiple-choice',
      stem: 'Aisha estimates 32 x 41 by rounding to 1 sf: 30 x 40 = 1200. The exact value is 1312. Without doing the full multiplication, why must her estimate be an underestimate?',
      tier: 'confident',
      options: [
        'Because she rounded both factors down, so the product of the rounded factors is below the product of the originals.',
        'Because 1 sf estimates are always underestimates.',
        'Because she rounded one factor up and one down, which guarantees an underestimate.',
        'Because 32 x 41 is a multiple of 8, and 1200 is not.',
      ],
      correctIndex: 0,
      xpValue: 15,
      hint: '32 rounded to 30 means rounding down. 41 rounded to 40 means rounding down. Both rounded down, so the product of the rounded factors must sit below the original product.',
      misconceptionId: 'pve-mis-rounding-direction',
    },
    // Confident 5: 1 sf rounding always rounds up (spot)
    {
      id: 'pve-q12',
      type: 'spot-misconception',
      stem: 'Liam claims "Rounding to 1 significant figure always rounds the first digit up by one, since you are removing all the digits to its right." Is his rule sound?',
      tier: 'confident',
      statements: [
        {
          text: 'In fact 1 sf rounding only rounds up when the decider digit is 5 or more. For 412, the decider 1 is less than 5, so 412 to 1 sf is 400, not 500.',
          isMisconception: false,
        },
        {
          text: 'Liam is right. Whenever you discard digits, you compensate by rounding the first digit up.',
          isMisconception: true,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pve-mis-always-up',
    },
    // Confident 6: missing-step (estimate worked example)
    {
      id: 'pve-q13',
      type: 'missing-step',
      stem: 'Fill in the missing step in this worked solution. Estimate 287 x 41 by rounding each factor to 1 significant figure.',
      tier: 'confident',
      steps: [
        'Round 287 to 1 sf. The first significant figure is 2 in the hundreds column. The decider 8 is 5 or more, so 2 rounds up to 3 and 287 becomes 300.',
        null,
        'Replace the original calculation with the rounded one: 300 x 40.',
        'Work out the simpler product: 300 x 40 = 12000.',
        'So the estimate is 12000.',
      ],
      missingStepIndex: 1,
      correctStep:
        'Round 41 to 1 sf. The first significant figure is 4 in the tens column. The decider 1 is less than 5, so 4 stays and 41 becomes 40.',
      xpValue: 20,
      hint: 'The middle step rounds the second factor, 41, to 1 significant figure. The decider digit is the ones digit.',
    },
    // Confident 7: drag-order four estimates
    {
      id: 'pve-q14',
      type: 'drag-order',
      stem: 'Drag these calculations into order from smallest estimated answer to largest, using 1 significant figure rounding for each.',
      tier: 'confident',
      items: [
        '0.034 x 0.21',
        '38 + 47 + 12',
        '612 / 28',
        '78 x 41',
      ],
      correctOrder: [0, 2, 1, 3],
      xpValue: 20,
      hint: 'Estimate each: 0.03 x 0.2 = 0.006; 40 + 50 + 10 = 100; 600 / 30 = 20; 80 x 40 = 3200. From smallest to largest: 0.006, 20, 100, 3200.',
    },
    // Confident 8: estimate then check calculator slip
    {
      id: 'pve-q15',
      type: 'numeric-entry',
      stem: 'A calculator shows 38.6 x 19.2 = 7411.2 after a typing slip. Estimate the true product to 1 significant figure to confirm the calculator is wrong, and give your estimate as a single whole number.',
      tier: 'confident',
      correctAnswer: 800,
      xpValue: 15,
      hint: '38.6 rounds to 40 and 19.2 rounds to 20. Then 40 x 20 = 800. The calculator value 7411.2 is about 10 times too big, suggesting an extra digit was typed.',
    },
    // Challenge 1: Bond-style word problem (school canteen)
    {
      id: 'pve-q16',
      type: 'numeric-entry',
      stem: 'A Sevenoaks school canteen serves an average of 287 lunches per day on each of 38 school days in a half term. Estimate the total number of lunches served in the half term to 1 significant figure. Give your estimate as a single whole number.',
      tier: 'challenge',
      correctAnswer: 12000,
      xpValue: 25,
      hint: '287 rounds to 300 and 38 rounds to 40. Then 300 x 40 = 12000. The exact value is about 10906, so the estimate sits within roughly 10 percent.',
    },
    // Challenge 2: petrol Bond-style with division
    {
      id: 'pve-q17',
      type: 'numeric-entry',
      stem: 'A delivery van uses about 9 litres of petrol per 100 km. The driver covers 412 km on Monday and 187 km on Tuesday. Estimate the total petrol used over both days to 1 significant figure. Give your estimate in litres as a single whole number.',
      tier: 'challenge',
      correctAnswer: 60,
      unit: 'litres',
      xpValue: 25,
      hint: 'Round each distance to 1 sf: 412 to 400 and 187 to 200. The total distance estimate is 600 km, so petrol used is about 9 x (600 / 100) = 9 x 6 = 54, which rounds to 60 litres at 1 sf.',
    },
    // Challenge 3: spot-misconception (estimate-as-final-answer)
    {
      id: 'pve-q18',
      type: 'spot-misconception',
      stem: 'A pupil is asked for the cost of 19 books at £4.85 each. They write "Estimate: 20 x 5 = £100, so the cost is £100." Is their reasoning sound for the question asked?',
      tier: 'challenge',
      statements: [
        {
          text: 'Yes. To 1 sf the answer is £100, so £100 is the cost.',
          isMisconception: true,
        },
        {
          text: 'In fact the estimate £100 is a sanity check, not the cost. The exact cost is 19 x 4.85 = £92.15. The estimate confirms the cost should sit near £100, but the answer to write down is £92.15.',
          isMisconception: false,
        },
      ],
      xpValue: 25,
      misconceptionId: 'pve-mis-estimate-is-answer',
    },
    // Challenge 4: judging over or under from rounding directions
    {
      id: 'pve-q19',
      type: 'multiple-choice',
      stem: 'Maya estimates 412 x 87 by rounding to 1 sf: 400 x 90 = 36000. Without doing the full multiplication, what can she say about her estimate?',
      tier: 'challenge',
      options: [
        'It is definitely an underestimate, because both factors were rounded down.',
        'It is definitely an overestimate, because both factors were rounded up.',
        'It could land either side. 412 was rounded down to 400 but 87 was rounded up to 90, so the rounding gaps push in opposite directions.',
        'It must equal the true value, because 1 sf estimates are always exact for two-digit times three-digit products.',
      ],
      correctIndex: 2,
      xpValue: 25,
      hint: '412 went down by 12 to 400 (decider 1 is less than 5). 87 went up by 3 to 90 (decider 7 is 5 or more). The two gaps push opposite ways, so the estimate could sit above or below the true product 35844.',
      misconceptionId: 'pve-mis-rounding-direction',
    },
    // Challenge 5: comparing two estimation strategies
    {
      id: 'pve-q20',
      type: 'numeric-entry',
      stem: 'A pupil estimates 612 / 19 in two ways. First, by rounding to 1 sf: 600 / 20 = 30. Second, by rounding the divisor 19 up to 20 and leaving 612 alone: 612 / 20. Work out the second estimate, written as a decimal to 1 decimal place.',
      tier: 'challenge',
      correctAnswer: 30.6,
      xpValue: 25,
      hint: '612 divided by 20 is 612 / 20 = 30.6. Both strategies give answers near 30, but only the first counts as a 1 sf estimate, since the second leaves 612 unrounded.',
    },
    // Challenge 6: free-text reasoning
    {
      id: 'pve-q21',
      type: 'free-text',
      stem: 'In one or two sentences, explain how rounding the inputs of a multiplication to 1 significant figure can tell you whether the estimate is an overestimate or an underestimate. Use 412 multiplied by 87 to make the point.',
      tier: 'challenge',
      sampleAnswer:
        'If both factors round up, the estimate sits above the true product, so it is an overestimate. If both round down, the estimate sits below, so it is an underestimate. For 412 multiplied by 87, the first factor 412 rounds down to 400 but the second factor 87 rounds up to 90, so the two rounding gaps push in opposite directions and the estimate 36000 could land either side of the true value 35844.',
      keywords: [
        'overestimate',
        'underestimate',
        'round up',
        'round down',
        'significant figure',
      ],
      xpValue: 25,
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator); commentary on a 1 sf rounding question where pupils truncated the trailing digits without using the decider, e.g. writing 387 to 1 sf as 380 or 300 instead of 400.
    {
      id: 'pve-mis-truncate',
      description:
        'When rounding to 1 sf, I keep the first significant figure as it stands and chop off the rest, so 387 becomes 380 or 300 instead of 400.',
      triggerAnswer: 'truncate',
      correction:
        'Actually 1 sf rounding uses a decider digit. Read the digit just to the right of the first significant figure, and round that figure up if the decider is 5 or more.',
      reExplanation:
        'For 387, the first significant figure is 3 in the hundreds column. The decider is 8, the tens digit. Since 8 is 5 or more, the 3 rounds up to 4 and every digit to its right becomes 0, so 387 to 1 sf is 400. Chopping the digits without using the decider gives 380 or 300, both too low whenever the decider is 5 or more.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2019, Paper 1F (Foundation, Non-calculator); commentary on a 1 sf rounding question where pupils wrote 4623 to 1 sf as 5 instead of 5000, treating "1 sf" as "1 digit total" and losing the size band.
    {
      id: 'pve-mis-1sf-1digit',
      description:
        'I read "1 significant figure" as "1 digit in total", so I write 4623 to 1 sf as 5 or 4 instead of 5000.',
      triggerAnswer: '1sf-1digit',
      correction:
        'In fact 1 sf rounding keeps the size band of the number. Replace every digit after the first significant figure with 0, so the rounded value still sits in the right thousands or hundreds range.',
      reExplanation:
        '4623 has its first significant figure 4 in the thousands column. After rounding the 4 up to 5 you must keep three placeholder zeros so the answer stays in the thousands. So 4623 to 1 sf is 5000, a four-digit number, even though only one of those digits is significant. Writing 5 collapses the number from thousands down to ones.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2022, Foundation tier (Paper 01); commentary on small-decimal rounding questions where pupils rounded 0.0234 to 0 or 0.0, dropping the only meaningful digit.
    {
      id: 'pve-mis-drop-meaningful',
      description:
        'When rounding a small decimal like 0.0234 to 1 sf, I round it to 0 or 0.0, dropping the only meaningful digit.',
      triggerAnswer: 'drop-meaningful',
      correction:
        'Actually leading zeros after the decimal point are placeholders, not significant. The first significant figure is the first non-zero digit, and you must keep it.',
      reExplanation:
        'For 0.0234, the leading zeros tell you the size band, but the first significant figure is 2 in the hundredths column. The decider 3 is less than 5, so the 2 stays and 0.0234 to 1 sf is 0.02. Rounding to 0 throws away every meaningful digit and reports nothing about the original number.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Significant Figures" page; the "Common mistake" callout about counting leading zeros as significant.
    {
      id: 'pve-mis-leading-zeros',
      description:
        'I count leading zeros after a decimal point as significant figures, so I think the first significant figure of 0.04086 is the leading zero, not the 4.',
      triggerAnswer: 'leading-zeros',
      correction:
        'In fact leading zeros after a decimal point are placeholders. The first significant figure is always the first non-zero digit, reading left to right.',
      reExplanation:
        'For 0.04086, ignore the two leading zeros. The first non-zero digit is 4 in the hundredths column, so 4 is the first significant figure. The next significant figure is 0 in the thousandths column, then 8 in the ten-thousandths column. Trailing zeros after a decimal point are significant; leading zeros are not.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2018, Paper 1F (Foundation, Non-calculator); commentary on a question testing 1 sf rounding versus 1 dp rounding for a small decimal, where pupils gave the same answer to both.
    {
      id: 'pve-mis-same-as-1dp',
      description:
        'I treat rounding to 1 sf and rounding to 1 dp as the same job, so I give 0.0234 the same value (0.0) for both.',
      triggerAnswer: 'same-as-1dp',
      correction:
        'Actually the two rules count from different starting points. 1 dp counts from the decimal point. 1 sf counts from the first non-zero digit, so the answers differ when leading zeros matter.',
      reExplanation:
        'For 0.0234 to 1 dp, the rounding column is the tenths and the decider 2 is less than 5, so the answer is 0.0. For 0.0234 to 1 sf, the rounding column is the hundredths (where the first significant figure 2 sits) and the decider 3 is less than 5, so the answer is 0.02. The two rules disagree whenever the number is small.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator); commentary on a 1 sf rounding question where pupils rounded every first digit up regardless of the decider, treating rounding as a mechanical "always round up" rule.
    {
      id: 'pve-mis-always-up',
      description:
        'I think rounding to 1 sf always rounds the first significant figure up by one, since I am removing the digits to its right.',
      triggerAnswer: 'always-up',
      correction:
        'In fact rounding only rounds up when the decider digit is 5 or more. If the decider is 4 or less, the first significant figure stays unchanged.',
      reExplanation:
        'For 412, the first significant figure is 4 and the decider is 1. Since 1 is less than 5, the 4 stays and 412 to 1 sf is 400, not 500. The "round up" half of the rule only fires when the decider is 5 or more, like the 8 in 387, which makes 387 to 1 sf round up to 400.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Foundation tier (Paper 01); commentary on an estimation question where pupils could not say whether their 1 sf estimate sat above or below the true value, even though both factors were rounded the same way.
    {
      id: 'pve-mis-rounding-direction',
      description:
        'I do not check the direction in which each factor was rounded, so I cannot tell whether my estimate is an overestimate or an underestimate.',
      triggerAnswer: 'rounding-direction',
      correction:
        'Actually the direction is the whole story for products and sums. If every input rounded up, the estimate sits above the true value. If every input rounded down, the estimate sits below.',
      reExplanation:
        'For 32 x 41, both factors round down (32 to 30, 41 to 40), so the estimate 1200 must sit below the true value 1312. For 387 x 19, both round up (387 to 400, 19 to 20), so the estimate 8000 must sit above the true value 7353. When the rounding directions are mixed, the rounding gaps push opposite ways and the estimate could land either side.',
    },
    // Authored, no external source: classroom-observed Year 7 confusion in which the estimate of a calculation is reported as the final answer, especially in word problems with money.
    {
      id: 'pve-mis-estimate-is-answer',
      description:
        'I report the 1 sf estimate as the final answer to a calculation, especially in money word problems, instead of using it only to check the size of a more precise method.',
      triggerAnswer: 'estimate-is-answer',
      correction:
        'Actually an estimate is a sanity check, not a final answer. Use it to confirm the size of a precise result, but write the precise result when one is asked for.',
      reExplanation:
        'For 19 books at £4.85 each, the 1 sf estimate is 20 x 5 = £100. That confirms the cost should sit near £100. The exact cost is 19 x 4.85 = £92.15, and that is what you write down as the answer. Reporting the estimate £100 as the cost short-changes the customer or shop by £7.85.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const placeValueEstimationZoneNodes = [placeValueEstimation]
