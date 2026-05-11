import type { SkillNode } from '@/types/content'

export const decimalsEstimation: SkillNode = {
  id: 'maths-decimals-estimation',
  title: 'Estimating with Decimals',
  description:
    'Estimate the answer to a calculation by rounding each input to 1 significant figure, or to a sensible benchmark, before working it out. Use estimates to check that a printed total or a calculator answer is sensible, and tell estimation apart from final-answer rounding to a fixed number of decimal places.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-decimals',
  zoneName: 'Decimals',
  tier: 'confident',
  prerequisites: ['maths-decimals-place-value'],
  curriculum: {
    ks3Objective:
      'Use approximation through rounding to estimate answers and calculate possible resulting errors expressed using inequality notation a less than x less than or equal to b.',
    awardingBodies: {
      aqa: 'N14 Estimate answers; check calculations using approximation and estimation (GCSE Mathematics 8300)',
      edexcel: 'N14 Estimate answers, including answers obtained using technology (GCSE Mathematics 1MA1)',
      ocr: '1.04b Estimate calculations involving decimals by rounding (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'de-scene-receipt',
      title: 'Round Each Row of a Shopping Receipt',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the receipt to see the price rounded to 1 significant figure and the running estimated total.',
      data: {
        viewBox: '0 0 600 360',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360"><rect x="120" y="20" width="360" height="320" rx="8" fill="#F8FAFC" stroke="#94A3B8" stroke-width="2"/><text x="300" y="55" font-family="ui-monospace, SF Mono, Menlo, monospace" font-size="18" fill="#0F172A" text-anchor="middle">SEVENOAKS GROCER</text><line x1="140" y1="70" x2="460" y2="70" stroke="#94A3B8" stroke-width="1"/><text x="160" y="110" font-family="ui-monospace, SF Mono, Menlo, monospace" font-size="16" fill="#0F172A">Bread loaf</text><text x="440" y="110" font-family="ui-monospace, SF Mono, Menlo, monospace" font-size="16" fill="#0F172A" text-anchor="end">£4.85</text><text x="160" y="155" font-family="ui-monospace, SF Mono, Menlo, monospace" font-size="16" fill="#0F172A">Cheese</text><text x="440" y="155" font-family="ui-monospace, SF Mono, Menlo, monospace" font-size="16" fill="#0F172A" text-anchor="end">£3.20</text><text x="160" y="200" font-family="ui-monospace, SF Mono, Menlo, monospace" font-size="16" fill="#0F172A">Salmon fillet</text><text x="440" y="200" font-family="ui-monospace, SF Mono, Menlo, monospace" font-size="16" fill="#0F172A" text-anchor="end">£7.99</text><text x="160" y="245" font-family="ui-monospace, SF Mono, Menlo, monospace" font-size="16" fill="#0F172A">Milk bottle</text><text x="440" y="245" font-family="ui-monospace, SF Mono, Menlo, monospace" font-size="16" fill="#0F172A" text-anchor="end">£2.05</text><line x1="140" y1="265" x2="460" y2="265" stroke="#94A3B8" stroke-width="1"/><text x="160" y="295" font-family="ui-monospace, SF Mono, Menlo, monospace" font-size="16" fill="#0F172A">Total (exact)</text><text x="440" y="295" font-family="ui-monospace, SF Mono, Menlo, monospace" font-size="16" fill="#0F172A" text-anchor="end">£18.09</text><text x="160" y="320" font-family="ui-monospace, SF Mono, Menlo, monospace" font-size="16" fill="#0F172A">Estimate</text><text x="440" y="320" font-family="ui-monospace, SF Mono, Menlo, monospace" font-size="16" fill="#0F172A" text-anchor="end">£18</text></svg>`,
        hotspots: [
          {
            id: 'de-spot-bread',
            x: 70,
            y: 30,
            label: '£4.85 rounds to £5 (1 sf)',
            description:
              'The first significant figure of 4.85 is 4. The decider is 8, which rounds up, so 4.85 becomes 5 to 1 sf.',
          },
          {
            id: 'de-spot-cheese',
            x: 70,
            y: 43,
            label: '£3.20 rounds to £3 (1 sf)',
            description:
              'The first significant figure of 3.20 is 3. The decider is 2, which rounds down, so 3.20 becomes 3 to 1 sf.',
          },
          {
            id: 'de-spot-salmon',
            x: 70,
            y: 56,
            label: '£7.99 rounds to £8 (1 sf)',
            description:
              'The first significant figure of 7.99 is 7. The decider is 9, which rounds up, so 7.99 becomes 8 to 1 sf.',
          },
          {
            id: 'de-spot-milk',
            x: 70,
            y: 68,
            label: '£2.05 rounds to £2 (1 sf)',
            description:
              'The first significant figure of 2.05 is 2. The decider is 0, which rounds down, so 2.05 becomes 2 to 1 sf.',
          },
          {
            id: 'de-spot-total',
            x: 70,
            y: 89,
            label: 'Estimate = 5 + 3 + 8 + 2 = £18',
            description:
              'The estimate £18 is within £1 of the exact total £18.09, which is enough to spot a typo at the till.',
          },
        ],
      },
    },
    {
      id: 'de-scene-sloppy-vs-sensible',
      title: 'Sloppy Rounding versus Sensible Rounding',
      type: 'diagram',
      instructions:
        'Look at how the same product can be estimated well or badly. The calculation is 12.4 multiplied by 9.8. A sensible estimate rounds each factor to 1 sf: 12 and 10, giving 120, which is within 2 of the true value 121.52. A sloppy estimate rounds 12.4 down to 10 and 9.8 down to 10, giving 100, which is more than 20 below the true value. The lesson is to round each factor to the nearest 1 sf, not always down.',
      data: {
        focusCalculation: '12.4 x 9.8',
        trueValue: 121.52,
        sensibleEstimate: {
          rounded: '12 x 10 = 120',
          error: 'About 1 percent off the true value.',
        },
        sloppyEstimate: {
          rounded: '10 x 10 = 100',
          error: 'About 18 percent off the true value.',
        },
        rule: 'Round each input to its nearest 1 significant figure, not always down or always up.',
      },
    },
    {
      id: 'de-scene-overestimate',
      title: 'Round Up for a Safe Overestimate',
      type: 'diagram',
      instructions:
        'Read the case for choosing to round up. Aisha has £20 to spend and wants to know if four items at £4.85, £3.20, £7.99 and £2.05 fit her budget. If she rounds each price up to the next pound (£5, £4, £8 and £3) she gets £20 as an overestimate. The true total is £18.09, so she is safe. Rounding up every price gives a ceiling she knows she will not exceed. For checking a calculator answer is sensible, plain 1 sf rounding is fine; for budget-fitting, an overestimate is safer.',
      data: {
        scenario: 'Budget check: £20 in pocket, four items in basket.',
        prices: [4.85, 3.2, 7.99, 2.05],
        roundedUp: [5, 4, 8, 3],
        overestimate: 20,
        trueTotal: 18.09,
        rule: 'Round each price up to the next pound when you need a safe overestimate.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'de-worked-1',
      title: 'Estimate £4.85 + £3.20 + £7.99 + £2.05',
      steps: [
        {
          explanation:
            'Round each price to 1 significant figure. The first significant figure is the first non-zero digit on the left.',
          maths: '4.85 -> 5, 3.20 -> 3, 7.99 -> 8, 2.05 -> 2',
        },
        {
          explanation:
            'Add the rounded values together as whole pounds.',
          maths: '5 + 3 + 8 + 2 = 18',
        },
        {
          explanation:
            'State the estimate, and compare with the exact total to check the estimate is sensible.',
          maths: 'estimate = £18, exact = £18.09',
        },
        {
          explanation:
            'So the estimated total is £18. The exact total is £18.09, so the estimate is within 9p of the true value.',
          maths: 'estimate £18 ~ £18.09',
        },
      ],
    },
    {
      id: 'de-worked-2',
      title: 'Estimate 12.4 x 9.8 by rounding to 1 sf (with one step omitted)',
      steps: [
        {
          explanation:
            'Round each factor to 1 significant figure. 12.4 rounds to 10 if you only kept the leading digit; but the first significant figure of 12.4 is 1, and the decider is 2, which rounds down, so 12.4 to 1 sf is 10. For 9.8, the first significant figure is 9 and the decider is 8, which rounds up, so 9.8 to 1 sf is 10.',
        },
        {
          explanation:
            'Both factors round to 10, so the calculation becomes 10 multiplied by 10.',
        },
        {
          explanation:
            'Work out the product of the rounded factors.',
          maths: '10 x 10 = 100',
        },
        {
          explanation:
            'Compare the estimate with what a calculator gives to check for sensible size.',
          maths: 'estimate = 100, exact = 121.52',
        },
        {
          explanation:
            'The estimate 100 is within about 20 percent of the true value, so an answer like 12.15 or 1215 on the calculator would be flagged as wrong.',
          maths: '12.4 x 9.8 = 121.52 ~ 100',
        },
      ],
    },
  ],
  questions: [
    // Core 1: round a single decimal to 1 sf
    {
      id: 'de-q1',
      type: 'multiple-choice',
      stem: 'Round 4.85 to 1 significant figure.',
      tier: 'core',
      options: ['4', '5', '4.9', '5.0'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'The first significant figure of 4.85 is 4. The decider is 8, which is 5 or more, so round up.',
    },
    // Core 2: estimate a sum
    {
      id: 'de-q2',
      type: 'multiple-choice',
      stem: 'Estimate £4.85 + £3.20 + £7.99 by rounding each price to 1 significant figure.',
      tier: 'core',
      options: ['£16', '£14', '£15', '£17'],
      correctIndex: 0,
      xpValue: 10,
      hint: 'Round 4.85 to 5, 3.20 to 3, 7.99 to 8. Then add the rounded values.',
    },
    // Core 3: estimate a product
    {
      id: 'de-q3',
      type: 'numeric-entry',
      stem: 'Estimate 12.4 x 9.8 by rounding each factor to 1 significant figure.',
      tier: 'core',
      correctAnswer: 100,
      xpValue: 10,
      hint: '12.4 rounds to 10 (the decider 2 is less than 5). 9.8 rounds to 10 (the decider 8 is 5 or more). Then 10 x 10 = 100.',
    },
    // Core 4: estimate a quotient
    {
      id: 'de-q4',
      type: 'numeric-entry',
      stem: 'Estimate 47.6 / 5.2 by rounding each number to 1 significant figure.',
      tier: 'core',
      correctAnswer: 10,
      xpValue: 10,
      hint: '47.6 rounds to 50 (the decider 7 is 5 or more). 5.2 rounds to 5. Then 50 / 5 = 10.',
    },
    // Core 5: petrol estimate
    {
      id: 'de-q5',
      type: 'multiple-choice',
      stem: 'A car uses about 6.2 litres of petrol per 100 km. Estimate how much petrol it uses on a 410 km journey by rounding both numbers to 1 significant figure.',
      tier: 'core',
      options: ['18 litres', '30 litres', '36 litres', '24 litres'],
      correctIndex: 3,
      xpValue: 10,
      hint: '6.2 rounds to 6 and 410 rounds to 400. Then 6 x (400 / 100) = 6 x 4 = 24 litres.',
    },
    // Core 6: tell estimation apart from rounding the final answer
    {
      id: 'de-q6',
      type: 'spot-misconception',
      stem: 'Liam is asked to estimate 0.48 x 21.7. He writes "0.48 x 21.7 = 10.416, then round to 1 decimal place: 10.4". Is his method right for an estimate?',
      tier: 'core',
      statements: [
        {
          text: 'Liam is right. To estimate, you work it out first and then round the answer to a sensible number of decimal places.',
          isMisconception: true,
        },
        {
          text: 'In fact estimation rounds the inputs first, before any working. Round 0.48 to 0.5 and 21.7 to 20, then 0.5 x 20 = 10. Estimating is meant to save you from doing the full calculation.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'de-mis-round-answer',
    },
    // Core 7: shopping ceiling - which estimate is closest
    {
      id: 'de-q7',
      type: 'multiple-choice',
      stem: 'A Manchester newsagent rings up four items at £1.85, £0.95, £2.10 and £3.05. Which is the best estimate of the total to 1 significant figure?',
      tier: 'core',
      options: ['£6', '£7', '£8', '£9'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Round each price to 1 sf: 1.85 to 2, 0.95 to 1, 2.10 to 2, 3.05 to 3. Then add: 2 + 1 + 2 + 3 = 8.',
    },
    // Confident 1: estimate vs sloppy estimate
    {
      id: 'de-q8',
      type: 'multiple-choice',
      stem: 'Maya estimates 12.4 x 9.8 by rounding both numbers down to 10. Is her estimate the best one to 1 significant figure?',
      tier: 'confident',
      options: [
        'Yes. Both numbers round to 10 to 1 sf, so 10 x 10 = 100 is the correct 1 sf estimate.',
        'No. The 1 sf estimate of 12.4 should be 12, not 10, so 12 x 10 = 120 is more accurate.',
        'No. The 1 sf estimate of 9.8 should be 9, so 10 x 9 = 90 is more accurate.',
        'Yes, but only because the answer comes out as a round number.',
      ],
      correctIndex: 0,
      xpValue: 15,
      hint: 'For 12.4 the decider is 2 (less than 5), so it rounds down to 10. For 9.8 the decider is 8 (5 or more), so it rounds up to 10. Both round to 10 honestly.',
      misconceptionId: 'de-mis-too-aggressive',
    },
    // Confident 2: estimate to spot a calculator slip
    {
      id: 'de-q9',
      type: 'numeric-entry',
      stem: 'Aisha types 38.4 x 51.6 into her calculator. The screen shows 19814.4. Estimate the answer to 1 significant figure to check if the calculator answer is sensible. Give your estimate as a single number.',
      tier: 'confident',
      correctAnswer: 2000,
      xpValue: 15,
      hint: 'Round 38.4 to 40 and 51.6 to 50. Then 40 x 50 = 2000. The calculator shows 19814.4, which is about 10 times too big, so a decimal point slip is likely.',
      misconceptionId: 'de-mis-confuse-with-dp',
    },
    // Confident 3: budget overestimate
    {
      id: 'de-q10',
      type: 'numeric-entry',
      stem: 'You have £20 and want a safe overestimate of these prices: £4.85, £3.20, £7.99 and £2.05. Round each price UP to the next whole pound and add. What is the safe overestimate, in pounds?',
      tier: 'confident',
      correctAnswer: 20,
      unit: 'pounds',
      xpValue: 15,
      hint: 'Round up: 4.85 -> 5, 3.20 -> 4, 7.99 -> 8, 2.05 -> 3. Add: 5 + 4 + 8 + 3 = 20.',
    },
    // Confident 4: distance over time
    {
      id: 'de-q11',
      type: 'multiple-choice',
      stem: 'A cyclist covers 48.6 km in 5.2 hours. Estimate the average speed in kilometres per hour to 1 significant figure.',
      tier: 'confident',
      options: ['8 km/h', '10 km/h', '12 km/h', '15 km/h'],
      correctIndex: 1,
      xpValue: 15,
      hint: '48.6 rounds to 50, 5.2 rounds to 5. Then 50 / 5 = 10 km/h.',
    },
    // Confident 5: estimate a quotient with a small divisor
    {
      id: 'de-q12',
      type: 'numeric-entry',
      stem: 'Estimate 0.624 / 0.31 to 1 significant figure.',
      tier: 'confident',
      correctAnswer: 2,
      xpValue: 15,
      hint: '0.624 rounds to 0.6 to 1 sf. 0.31 rounds to 0.3. Then 0.6 / 0.3 = 2.',
      misconceptionId: 'de-mis-bad-1sf-decimal',
    },
    // Confident 6: drag-order estimates
    {
      id: 'de-q13',
      type: 'drag-order',
      stem: 'Drag these calculations into order from smallest estimated answer to largest, using 1 significant figure rounding for each.',
      tier: 'confident',
      items: [
        '6.1 x 4.8',
        '21.4 + 19.7',
        '0.48 x 0.52',
        '76.2 / 3.8',
      ],
      correctOrder: [2, 3, 0, 1],
      xpValue: 20,
      hint: 'Estimate each: 6 x 5 = 30, 20 + 20 = 40, 0.5 x 0.5 = 0.25, 80 / 4 = 20. From smallest to largest: 0.25, 20, 30, 40.',
    },
    // Confident 7: missing step worked example
    {
      id: 'de-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step. Estimate 78.4 + 12.6 + 3.85 by rounding each value to 1 significant figure.',
      tier: 'confident',
      steps: [
        'Round 78.4 to 1 sf. The decider 8 is 5 or more, so 78.4 rounds to 80.',
        'Round 12.6 to 1 sf. The decider 2 is less than 5, so 12.6 rounds to 10.',
        null,
        'Add the rounded values: 80 + 10 + 4 = 94.',
        'So the estimate is about 94.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Round 3.85 to 1 sf. The decider 8 is 5 or more, so 3.85 rounds to 4.',
      xpValue: 20,
      hint: 'The middle step rounds the last value, 3.85, to 1 significant figure.',
    },
    // Confident 8: spot misconception on chop method
    {
      id: 'de-q15',
      type: 'spot-misconception',
      stem: 'Tom estimates 4.85 + 7.95 by chopping off everything after the decimal point: 4 + 7 = 11.',
      tier: 'confident',
      statements: [
        {
          text: 'Tom is right. To estimate, you ignore everything after the decimal point and add the whole-number parts.',
          isMisconception: true,
        },
        {
          text: 'In fact rounding to 1 sf is not the same as chopping off the decimal part. 4.85 rounds to 5 and 7.95 rounds to 8, so a better estimate is 5 + 8 = 13.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'de-mis-truncate-not-round',
    },
    // Challenge 1: petrol Bond-style
    {
      id: 'de-q16',
      type: 'numeric-entry',
      stem: 'A van uses 8.3 litres of petrol per 100 km. The driver plans a round trip from Dover to Tunbridge Wells and back that totals 188 km. Estimate, to 1 significant figure, how many litres of petrol the trip will use.',
      tier: 'challenge',
      correctAnswer: 16,
      unit: 'litres',
      xpValue: 25,
      hint: '8.3 rounds to 8, 188 rounds to 200. The trip uses about 8 x (200 / 100) = 8 x 2 = 16 litres.',
    },
    // Challenge 2: catch a calculator slip
    {
      id: 'de-q17',
      type: 'multiple-choice',
      stem: 'A till receipt in a Tunbridge Wells cafe shows seven sandwiches at £4.85 each totalling £33.95. The cashier suspects a typo. Estimate the true total to 1 significant figure, and use the estimate to say whether £33.95 is sensible.',
      tier: 'challenge',
      options: [
        'About £20, so £33.95 is roughly £10 too high.',
        'About £25, so £33.95 is sensible.',
        'About £42, so £33.95 is too low.',
        'About £35, so £33.95 is sensible.',
      ],
      correctIndex: 3,
      xpValue: 25,
      hint: 'Round 4.85 to 5, then 7 x 5 = £35. The receipt shows £33.95, which is close to £35, so it is sensible. The true value is 7 x 4.85 = £33.95.',
      misconceptionId: 'de-mis-estimate-is-answer',
    },
    // Challenge 3: percentage error sense
    {
      id: 'de-q18',
      type: 'multiple-choice',
      stem: 'Aisha estimates 19.8 x 4.2 as 80, by rounding 19.8 to 20 and 4.2 to 4. Her brother says she should round 4.2 to 5 to be safer. Whose estimate is closer to the exact answer of 83.16?',
      tier: 'challenge',
      options: [
        'Her brother. 20 x 5 = 100 is the closer estimate.',
        'Aisha. 20 x 4 = 80 is the closer estimate to 83.16.',
        'They tie. Both estimates are exactly the same distance from 83.16.',
        'Neither. Both round the wrong direction.',
      ],
      correctIndex: 1,
      xpValue: 25,
      hint: '4.2 to 1 sf is 4 (the decider 2 is less than 5), not 5. Aisha rounds correctly, and 80 is closer to 83.16 than 100 is.',
      misconceptionId: 'de-mis-round-some-only',
    },
    // Challenge 4: ratio Bond-style
    {
      id: 'de-q19',
      type: 'numeric-entry',
      stem: 'A school canteen serves an average of 287 lunches per day on each of 38 school days in a half term. Estimate the total number of lunches served in the half term to 1 significant figure.',
      tier: 'challenge',
      correctAnswer: 12000,
      xpValue: 25,
      hint: '287 rounds to 300 to 1 sf. 38 rounds to 40. Then 300 x 40 = 12000.',
    },
    // Challenge 5: choosing the right kind of rounding
    {
      id: 'de-q20',
      type: 'multiple-choice',
      stem: 'You are buying four items priced £4.85, £3.20, £7.99 and £2.05 with a £20 note in your pocket. Which kind of estimate tells you most safely that you can afford them?',
      tier: 'challenge',
      options: [
        'Round each price to 1 sf: 5 + 3 + 8 + 2 = £18 estimate.',
        'Round the total of £18.09 to 1 dp: £18.1.',
        'Round each price UP to the next pound: 5 + 4 + 8 + 3 = £20 overestimate.',
        'Round each price DOWN to the next pound: 4 + 3 + 7 + 2 = £16 underestimate.',
      ],
      correctIndex: 2,
      xpValue: 25,
      hint: 'For a safe budget check you want an overestimate. Rounding each price up gives £20, which you can afford with a £20 note. A 1 sf estimate sometimes undershoots.',
    },
    // Challenge 6: free-text reasoning about estimation vs rounding
    {
      id: 'de-q21',
      type: 'free-text',
      stem: 'In one or two sentences, explain how estimating a calculation is different from rounding a final answer to a number of decimal places. Use an example to make the difference clear.',
      tier: 'challenge',
      sampleAnswer:
        'Estimating rounds the inputs to 1 significant figure before any working, so you get a fast approximate answer. Rounding to a number of decimal places is the last step that trims a precise answer for reporting. For example, an estimate of 0.48 x 21.7 rounds the inputs first to give 0.5 x 20 = 10, but rounding the exact answer 10.416 to 1 dp gives 10.4.',
      keywords: [
        'estimate',
        'round',
        'inputs',
        'significant figure',
        'decimal place',
      ],
      xpValue: 25,
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator); commentary on an estimation question where pupils completed the full calculation and then rounded the answer, instead of rounding the inputs.
    {
      id: 'de-mis-round-answer',
      description:
        'When asked to estimate, I work out the calculation in full first and then round the answer to 1 decimal place.',
      triggerAnswer: 'round-answer',
      correction:
        'In fact estimation rounds the inputs first, before any working. The point is to skip the full calculation and get a quick approximate answer.',
      reExplanation:
        'For 0.48 x 21.7, round inputs first: 0.5 x 20 = 10. That takes one line. Doing the full multiplication 0.48 x 21.7 = 10.416 and then rounding to 10.4 is not an estimate, it is the exact answer dressed up. The whole point of estimating is to avoid the full sum, especially for a sanity check.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator); commentary on a question where pupils rounded one factor to 1 sf but left the other unrounded.
    {
      id: 'de-mis-round-some-only',
      description:
        'When estimating, I only round some of the numbers. I leave the small or awkward ones as they are.',
      triggerAnswer: 'round-some-only',
      correction:
        'Actually you round every input to the same level of accuracy. Leaving one number unrounded defeats the point of a quick estimate.',
      reExplanation:
        'For 19.8 x 4.2, round both factors: 19.8 to 20, 4.2 to 4, then 20 x 4 = 80. Keeping 4.2 as 4.2 forces you back into long multiplication, and the answer is no quicker than the exact one. Round every number to 1 sf so the working becomes one easy line.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Foundation tier (Paper 01); commentary on rounding too aggressively for a quick estimate so the estimate sat far outside the true answer.
    {
      id: 'de-mis-too-aggressive',
      description:
        'I round so aggressively that my estimate is nowhere near the true answer, for example saying 12.4 x 9.8 is about 100 when the true value is 121.52.',
      triggerAnswer: 'too-aggressive',
      correction:
        'In fact a 1 sf estimate may be off but should still be in the right ballpark. If the estimate is more than about 20 percent off, check that each input was rounded fairly.',
      reExplanation:
        '12.4 rounds to 10 and 9.8 rounds to 10, giving 100. That is about 18 percent below 121.52, on the edge of useful. Rounding 9.8 to 10 is fine because the decider 8 forces a round up, but if both factors had rounded down too generously, the estimate would be a poor sanity check.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Estimating" page; the "Common mistake" callout that estimating is different from rounding to a fixed number of decimal places.
    {
      id: 'de-mis-confuse-with-dp',
      description:
        'I confuse estimating a calculation with rounding the answer to a fixed number of decimal places, and treat them as the same job.',
      triggerAnswer: 'confuse-with-dp',
      correction:
        'Actually estimating gives a quick approximate answer by rounding the inputs. Rounding to decimal places is the last step that trims a precise answer for a report.',
      reExplanation:
        'For 38.4 x 51.6, estimate by rounding inputs: 40 x 50 = 2000. That checks the calculator. The exact answer 1981.44, rounded to 1 dp, is 1981.4. The two answers, 2000 and 1981.4, do different jobs: 2000 sanity checks, 1981.4 reports.',
    },
    // Source: NCETM "Misconceptions with the Key Objectives" reference document (Primary, Number / Rounding); pupils truncate decimals by chopping off the digits after the point without using the decider.
    {
      id: 'de-mis-truncate-not-round',
      description:
        'When I round to 1 sf I chop off the digits after the point instead of using the decider digit, so 4.85 becomes 4 instead of 5.',
      triggerAnswer: 'truncate-not-round',
      correction:
        'In fact 1 sf rounding keeps the first non-zero digit and uses the next digit as the decider, exactly like rounding to a number of decimal places.',
      reExplanation:
        'For 4.85 to 1 sf, the first significant figure is 4 and the decider is 8. Eight is 5 or more, so 4 rounds up to 5. Chopping the decimal part gives 4, which is one whole pound below the true value and makes the estimate too low whenever decider digits are 5 or more.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator); commentary on an estimation question with a decimal divisor where pupils rounded 0.31 to 0 or 1 and then divided, breaking the estimate.
    {
      id: 'de-mis-bad-1sf-decimal',
      description:
        'When the number is less than 1, I round it to 1 sf by rounding to the nearest whole number, so I round 0.31 to 0 and the division goes wrong.',
      triggerAnswer: 'bad-1sf-decimal',
      correction:
        'Actually 1 sf rounding of a small decimal keeps the first non-zero digit in place. 0.31 to 1 sf is 0.3, not 0 or 1.',
      reExplanation:
        'The first significant figure of 0.31 is 3. The decider is 1, which is less than 5, so 0.31 rounds to 0.3 to 1 sf. For 0.624 / 0.31, that gives 0.6 / 0.3 = 2. Rounding 0.31 to 0 would make the division undefined; rounding it to 1 would give 0.6, which is far from the truth.',
    },
    // Authored, no external source: classroom-observed Year 7 confusion between using the unrounded answer of a calculator and the estimate of the same calculation, both reported as "the answer".
    {
      id: 'de-mis-estimate-is-answer',
      description:
        'I report the estimate as the final answer to the calculation, instead of as a sanity check on a more precise method.',
      triggerAnswer: 'estimate-is-answer',
      correction:
        'In fact an estimate is a check, not a final answer. Use it to verify the size of a precise result, but write the precise result when one is asked for.',
      reExplanation:
        'A till receipt that says £33.95 for 7 sandwiches at £4.85 each is sensible because the estimate 7 x 5 = £35 is close. The estimate £35 confirms the receipt; the receipt itself, £33.95, is the answer you write down. Treating the estimate as the final price would short the shop by £1.05.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const decimalsEstimationZoneNodes = [decimalsEstimation]
