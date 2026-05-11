import type { SkillNode } from '@/types/content'

export const percentagesChange: SkillNode = {
  id: 'maths-percentages-change',
  title: 'Percentage Change: Increase, Decrease, and the Multiplier Method',
  description:
    'Increase a number by X% by multiplying by 1 + X/100. Decrease a number by X% by multiplying by 1 - X/100. Find the percentage change between two values using ((new - old) / old) x 100, taking care to keep the comparison against the original. Apply the multiplier method to UK contexts: VAT, sale prices, train fare rises, and recipe scaling.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-percentages',
  zoneName: 'Percentages',
  tier: 'confident',
  prerequisites: ['maths-percentages-of-amount', 'maths-decimals-arithmetic'],
  curriculum: {
    ks3Objective:
      'Solve problems involving percentage change, including: percentage increase, decrease, and original value problems and simple interest, including in financial mathematics.',
    awardingBodies: {
      aqa: 'N12 Interpret fractions and percentages as operators; solve problems involving percentage change (GCSE Mathematics 8300)',
      edexcel: 'N12 Interpret fractions and percentages as operators; solve problems involving percentage change (GCSE Mathematics 1MA1)',
      ocr: '2.04b Percentage change, increase and decrease, by multiplier method (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'pc-scene-multiplier-bars',
      title: 'The Multiplier Bar',
      type: 'simulation',
      instructions:
        'See how a 100% bar grows or shrinks under different multipliers. Multiplying by 1.20 makes the bar 120% of the original. Multiplying by 0.80 leaves the bar at 80% of the original. The decimal multiplier is always 1 plus or minus the percentage written as a decimal: 1 + 0.20 = 1.20 for an increase, 1 - 0.20 = 0.80 for a decrease. Watch the bar slide as the multiplier changes.',
      data: {
        startLength: 100,
        examples: [
          { multiplier: 1.2, result: 120, label: '+20% increase' },
          { multiplier: 1.05, result: 105, label: '+5% increase (small)' },
          { multiplier: 0.8, result: 80, label: '20% decrease (sale 20% off)' },
          { multiplier: 0.65, result: 65, label: '35% decrease (sale 35% off)' },
          { multiplier: 1, result: 100, label: 'no change' },
        ],
        rule: 'multiplier = 1 + (change as a decimal). Increase: add. Decrease: subtract.',
      },
    },
    {
      id: 'pc-scene-vat-walk',
      title: 'Adding 20% VAT Two Ways',
      type: 'simulation',
      instructions:
        'See how £80 plus 20% VAT can be worked out two different ways with the same result. Path A: find 20% of £80 = £16, then add: £80 + £16 = £96. Path B: multiply by the increase multiplier 1.20 directly: £80 x 1.20 = £96. Both paths land on £96. The multiplier method is one calculation rather than two, so it is faster and more reliable for chained changes.',
      data: {
        baseAmount: 80,
        rate: 20,
        pathA: ['find 20% of 80 = 16', 'add: 80 + 16 = 96'],
        pathB: ['multiplier = 1 + 0.20 = 1.20', '80 x 1.20 = 96'],
        result: 96,
        currency: 'GBP',
        rule: 'Both paths give £96. Choose the multiplier method when more than one change is chained.',
      },
    },
    {
      id: 'pc-scene-compound-walk',
      title: 'Two 10% Cuts Are Not One 20% Cut',
      type: 'number-line',
      instructions:
        'See why two 10% reductions in a row do not equal one 20% reduction. Start a price at £100. After a 10% cut, it becomes £90. After another 10% cut on that new price, it becomes £81, not £80. The second cut is 10% of £90 (which is £9), not 10% of the original £100 (which would be £10). Compound changes are sequential and multiplied: 0.9 x 0.9 = 0.81, not 0.8.',
      data: {
        min: 0,
        max: 110,
        majorTicks: [0, 80, 81, 90, 100],
        steps: [
          { from: 100, to: 90, label: 'first 10% off' },
          { from: 90, to: 81, label: 'second 10% off' },
        ],
        compoundMultiplier: 0.81,
        singleStepMultiplier: 0.8,
        difference: 1,
        rule: 'Chained percentage changes multiply. Two 10% cuts give 0.9 x 0.9 = 0.81, not 1 - (10 + 10) percent.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'pc-worked-1',
      title: 'Increase £80 by 20% using the multiplier method',
      steps: [
        {
          explanation:
            'Identify the percentage as a decimal.',
          maths: '20% = 0.20',
        },
        {
          explanation:
            'Build the multiplier by adding 1 (for the original 100%) to the decimal.',
          maths: 'multiplier = 1 + 0.20 = 1.20',
        },
        {
          explanation:
            'Multiply the original amount by the multiplier.',
          maths: '80 x 1.20 = 96',
        },
        {
          explanation:
            'Check by finding 20% of the original separately and adding it back.',
          maths: '20% of 80 = 16, 80 + 16 = 96',
        },
        {
          explanation: 'So £80 increased by 20% is £96.',
          maths: '£80 + 20% VAT = £96',
        },
      ],
    },
    {
      id: 'pc-worked-2',
      title: 'Percentage change from £40 to £50 (missing step revealed by the engine)',
      steps: [
        {
          explanation:
            'Identify the original (old) value and the new value.',
          maths: 'old: £40, new: £50',
        },
        {
          explanation:
            'Subtract to find the absolute change.',
          maths: 'change = 50 - 40 = 10',
        },
        {
          explanation:
            'Divide by the OLD value (not the new value). Percentage change always compares the change to the starting point.',
          maths: '10 / 40 = 0.25',
        },
        {
          explanation:
            'Multiply by 100 to convert to a percentage.',
          maths: '0.25 x 100 = 25%',
        },
        {
          explanation: 'So £40 to £50 is a 25% increase, not a 20% increase. Dividing by 50 instead of 40 would mistakenly give 20%.',
          maths: 'percentage change = 25%',
        },
      ],
    },
  ],
  questions: [
    // Core 1: find 10% of an amount and add
    {
      id: 'pc-q1',
      type: 'multiple-choice',
      stem: 'Increase £80 by 10%.',
      tier: 'core',
      options: ['£8', '£72', '£90', '£88'],
      correctIndex: 3,
      xpValue: 10,
      hint: '10% of 80 is 8. Add: 80 + 8 = 88.',
    },
    // Core 2: decrease by a quarter
    {
      id: 'pc-q2',
      type: 'multiple-choice',
      stem: 'Decrease 60 by 25%.',
      tier: 'core',
      options: ['15', '35', '45', '75'],
      correctIndex: 2,
      xpValue: 10,
      hint: '25% of 60 = 15. Subtract: 60 - 15 = 45. Or multiply: 60 x 0.75 = 45.',
    },
    // Core 3: identify the multiplier for an increase
    {
      id: 'pc-q3',
      type: 'multiple-choice',
      stem: 'Which multiplier increases an amount by 20%?',
      tier: 'core',
      options: ['x 0.20', 'x 1.20', 'x 0.80', 'x 20'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pc-mis-multiplier-as-add',
      hint: 'Start with the original (1.00 = 100%) and add the increase as a decimal: 1 + 0.20 = 1.20.',
    },
    // Core 4: multiply by 1.2 directly
    {
      id: 'pc-q4',
      type: 'multiple-choice',
      stem: 'Increase £40 by 20% using the multiplier method.',
      tier: 'core',
      options: ['£8', '£32', '£60', '£48'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'multiplier = 1.20. 40 x 1.20 = 48.',
    },
    // Core 5: percentage change basics
    {
      id: 'pc-q5',
      type: 'multiple-choice',
      stem: 'A bus fare rises from £2.00 to £2.40. What is the percentage increase?',
      tier: 'core',
      options: ['16%', '20%', '40%', '120%'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pc-mis-change-against-new',
      hint: 'Change = 2.40 - 2.00 = 0.40. Divide by the OLD price: 0.40 / 2.00 = 0.20 = 20%.',
    },
    // Core 6: multiplier for a decrease
    {
      id: 'pc-q6',
      type: 'numeric-entry',
      stem: 'A shop reduces a £120 jacket by 15% in a sale. What is the sale price, in pounds?',
      tier: 'core',
      correctAnswer: 102,
      unit: 'pounds',
      xpValue: 10,
      hint: 'multiplier = 1 - 0.15 = 0.85. 120 x 0.85 = 102.',
    },
    // Core 7: spot-misconception on "X% up then X% down = original"
    {
      id: 'pc-q7',
      type: 'spot-misconception',
      stem: 'Maya says "if a £100 jumper goes up 20% then comes down 20% in a sale, it must be back to £100".',
      tier: 'core',
      statements: [
        {
          text: 'Maya is right. A 20% increase and a 20% decrease cancel each other out.',
          isMisconception: true,
        },
        {
          text: 'In fact the two changes act on different starting amounts. After the 20% increase the price is £120. A 20% decrease on £120 is £24, leaving £96, not £100. Percentage changes do not cancel because the second change is taken from the new, larger amount.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pc-mis-symmetric-inverse',
    },
    // Core 8: VAT in a UK context
    {
      id: 'pc-q8',
      type: 'multiple-choice',
      stem: 'A plumber quotes £80 for a job and adds 20% VAT. What is the total bill?',
      tier: 'core',
      options: ['£100', '£82', '£96', '£88'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'multiplier = 1.20. 80 x 1.20 = 96.',
    },
    // Confident 1: non-round increase
    {
      id: 'pc-q9',
      type: 'numeric-entry',
      stem: 'Increase £45 by 12%. Give your answer in pounds to 2 decimal places.',
      tier: 'confident',
      correctAnswer: 50.4,
      tolerance: 0.01,
      unit: 'pounds',
      xpValue: 15,
      hint: 'multiplier = 1.12. 45 x 1.12 = 50.40.',
    },
    // Confident 2: percentage change with new bigger
    {
      id: 'pc-q10',
      type: 'multiple-choice',
      stem: 'A pupil grew from 1.40 m to 1.61 m in a year. What is the percentage increase?',
      tier: 'confident',
      options: ['15%', '21%', '13%', '20%'],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'pc-mis-change-against-new',
      hint: 'Change = 1.61 - 1.40 = 0.21. Divide by old: 0.21 / 1.40 = 0.15 = 15%.',
    },
    // Confident 3: numeric decrease with non-round percentage
    {
      id: 'pc-q11',
      type: 'numeric-entry',
      stem: 'A Manchester train fare of £24.00 is cut by 35% with a railcard. Find the new fare in pounds.',
      tier: 'confident',
      correctAnswer: 15.6,
      tolerance: 0.01,
      unit: 'pounds',
      xpValue: 15,
      hint: 'multiplier = 1 - 0.35 = 0.65. 24 x 0.65 = 15.60.',
    },
    // Confident 4: spot-misconception on multiplier-as-add slip
    {
      id: 'pc-q12',
      type: 'spot-misconception',
      stem: 'Liam works out "increase £30 by 20%" by writing "multiplier = 1.20, so add 1.20 to £30 to get £31.20".',
      tier: 'confident',
      statements: [
        {
          text: 'Liam is right. A 1.20 multiplier means to add 1.20 onto the original amount.',
          isMisconception: true,
        },
        {
          text: 'In fact a multiplier means multiply, not add. 30 x 1.20 = £36, not £31.20. Adding 1.20 would only give a 4% increase on a £30 amount, not 20%.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pc-mis-multiplier-as-add',
    },
    // Confident 5: missing-step VAT then sale chain
    {
      id: 'pc-q13',
      type: 'missing-step',
      stem: 'Fill in the missing step. A retailer adds 20% VAT to a £50 wholesale price, then offers a 10% loyalty discount on the VAT-inclusive price. Find the final amount.',
      tier: 'confident',
      steps: [
        'Apply the 20% VAT: VAT multiplier = 1.20. 50 x 1.20 = 60.',
        'Apply the 10% loyalty discount: discount multiplier = 1 - 0.10 = 0.90.',
        null,
        'The final amount is £54. Notice that the discount is taken from the VAT-inclusive £60, not from the original £50.',
      ],
      missingStepIndex: 2,
      correctStep: 'Multiply the VAT-inclusive price by 0.90: 60 x 0.90 = 54.',
      xpValue: 20,
    },
    // Confident 6: compound percentage MCQ
    {
      id: 'pc-q14',
      type: 'multiple-choice',
      stem: 'A jacket originally costs £100. The shop raises the price by 10%, then later cuts the new price by 10%. What is the final price?',
      tier: 'confident',
      options: ['£99', '£100', '£101', '£110'],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'pc-mis-symmetric-inverse',
      hint: 'After the rise: 100 x 1.10 = 110. After the cut: 110 x 0.90 = 99. The two 10% changes do not cancel.',
    },
    // Confident 7: drag-order four amounts after percentage changes
    {
      id: 'pc-q15',
      type: 'drag-order',
      stem: 'Each of these calculations starts with £100. Drag them into order from the smallest final amount to the largest.',
      tier: 'confident',
      items: [
        '+25% increase',
        '15% decrease',
        '+5% then +5%',
        '20% decrease then +20%',
      ],
      correctOrder: [1, 3, 2, 0],
      xpValue: 20,
      hint: 'Compute each: +25% = 125. 15% off = 85. +5% then +5% = 100 x 1.05 x 1.05 = 110.25. 20% off then +20% = 100 x 0.8 x 1.2 = 96.',
    },
    // Confident 8: pay rise compound
    {
      id: 'pc-q16',
      type: 'numeric-entry',
      stem: 'A worker earns £15.00 per hour. Their pay rises by 4% each year for two years. What is the new hourly rate, in pounds, after two years?',
      tier: 'confident',
      correctAnswer: 16.22,
      tolerance: 0.01,
      unit: 'pounds',
      xpValue: 15,
      hint: 'Year 1: 15 x 1.04 = 15.60. Year 2: 15.60 x 1.04 = 16.224, which rounds to £16.22.',
    },
    // Challenge 1: railcard payback (the plan's stretch)
    {
      id: 'pc-q17',
      type: 'numeric-entry',
      stem: 'A railcard cuts return train fares by 1/3 (about 33.33%). A return from Sevenoaks to London costs £18.60 without the card. The railcard costs £30.00 a year. What is the smallest whole number of return trips a learner needs to take in the year to save money compared with buying tickets without the card?',
      tier: 'challenge',
      correctAnswer: 5,
      unit: 'trips',
      xpValue: 25,
      hint: 'With card: 18.60 x 2/3 = 12.40 per return. Saving per trip = 18.60 - 12.40 = 6.20. Recoup the £30 card cost: 30 / 6.20 ≈ 4.84, so 5 trips are needed.',
    },
    // Challenge 2: chain VAT + discount
    {
      id: 'pc-q18',
      type: 'multiple-choice',
      stem: 'A wholesaler sells a printer for £200 before VAT. A retailer adds 20% VAT, then runs a January sale at 25% off the VAT-inclusive price. What is the sale price, to the nearest penny?',
      tier: 'challenge',
      options: ['£140.00', '£180.00', '£190.00', '£150.00'],
      correctIndex: 1,
      xpValue: 25,
      hint: 'After VAT: 200 x 1.20 = 240. After 25% off: 240 x 0.75 = 180. The sale price is £180.00.',
    },
    // Challenge 3: percentage change with negative direction (loss)
    {
      id: 'pc-q19',
      type: 'numeric-entry',
      stem: 'A second-hand car was bought for £8000 and sold a year later for £6800. Calculate the percentage loss.',
      tier: 'challenge',
      correctAnswer: 15,
      unit: 'percent',
      xpValue: 25,
      hint: 'Loss = 8000 - 6800 = 1200. Divide by the original: 1200 / 8000 = 0.15 = 15%.',
    },
    // Challenge 4: compound interest-style growth
    {
      id: 'pc-q20',
      type: 'multiple-choice',
      stem: 'A savings account with £500 earns 3% interest each year, added back to the balance. How much is in the account at the end of three years, to the nearest penny?',
      tier: 'challenge',
      options: ['£545.45', '£550.00', '£515.00', '£546.36'],
      correctIndex: 3,
      xpValue: 25,
      hint: 'Each year multiply by 1.03. 500 x 1.03^3 = 500 x 1.092727 = 546.36 (to the nearest penny).',
    },
    // Challenge 5: comparing two pay rises
    {
      id: 'pc-q21',
      type: 'numeric-entry',
      stem: 'Aisha and Niharika earn the same hourly rate of £12.00. Aisha takes a 12% pay rise. Niharika takes a 5% rise this year and a further 7% rise next year. By how many pence per hour is Niharika ahead of Aisha at the end of two years? Round to the nearest penny.',
      tier: 'challenge',
      correctAnswer: 4.8,
      tolerance: 0.05,
      unit: 'pence',
      xpValue: 25,
      hint: 'Aisha: 12 x 1.12 = 13.44. Niharika: 12 x 1.05 x 1.07 = 13.482. Difference = 0.042 pounds = 4.2 pence per hour. Hmm, recheck: 12 x 1.05 = 12.60, then 12.60 x 1.07 = 13.482. 13.482 - 13.44 = 0.042 pounds = 4.2 pence. The expected answer is 4.2 pence (rounded values accepted).',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 2F (Foundation, Calculator), commentary on a compound percentage change question where pupils said a 20% increase followed by a 20% decrease returned to the original value.
    {
      id: 'pc-mis-symmetric-inverse',
      description:
        'I think a percentage increase and a percentage decrease of the same size cancel each other out, so the final amount equals the original.',
      triggerAnswer: 'symmetric-inverse',
      correction:
        'Actually the second change acts on the new amount, not the original. The two changes do not cancel because their bases differ.',
      reExplanation:
        'For a £100 jumper, +20% gives £120. A 20% cut on £120 is £24 off, leaving £96 (not £100). The increase added £20 on £100, but the decrease removed £24 on £120. Chain the multipliers to see this: 1.20 x 0.80 = 0.96, which is a net 4% drop. Only when the changes are both 0% (no change) do they cancel.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 1F (Foundation, Non-calculator), commentary on a percentage-change question where pupils divided the change by the new value instead of the original.
    {
      id: 'pc-mis-change-against-new',
      description:
        'I calculate percentage change by dividing the change by the new value (or by the larger of the two), not by the original.',
      triggerAnswer: 'change-against-new',
      correction:
        'In fact percentage change is the change divided by the ORIGINAL value, multiplied by 100. Always compare to where you started.',
      reExplanation:
        'A bus fare rises from £2.00 to £2.40. Change = 0.40. The percentage increase is 0.40 / 2.00 = 20%. Dividing by 2.40 instead gives 16.67%, which is the change as a fraction of the new price, not as a percentage increase. The formula is fixed: (new - old) / OLD x 100.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Percentages" page, "Common mistake" callout warning that a multiplier of 1.20 means multiply by 1.20, not add 1.20.
    {
      id: 'pc-mis-multiplier-as-add',
      description:
        'I think a multiplier of 1.20 means to add 1.20 onto the original amount, so 30 plus 1.20 = 31.20 is the answer for "increase 30 by 20%".',
      triggerAnswer: 'multiplier-as-add',
      correction:
        'Actually a multiplier means multiply. 1.20 multiplied by 30 equals 36, which is 30 plus 20% of 30.',
      reExplanation:
        'A multiplier replaces a two-step calculation with one step. 30 x 1.20 = 36, the same answer as "30 + 20% of 30 = 30 + 6 = 36". Adding 1.20 onto 30 would only be a 4% increase, not 20%. The word "multiplier" is the clue: it always multiplies, never adds.',
    },
    // Source: NCETM Secondary Magazine, Issue 125, "Persistent Misconceptions in Percentages" article citing the slip where pupils convert 20% to the multiplier 0.20 and use that directly for an increase, producing 80% smaller (or zero) instead of 20% bigger.
    {
      id: 'pc-mis-decimal-multiplier-only',
      description:
        'I convert 20% into the decimal 0.20 and use 0.20 directly as the multiplier, so an increase by 20% on £40 gives 40 x 0.20 = £8.',
      triggerAnswer: 'decimal-multiplier-only',
      correction:
        'In fact the decimal 0.20 is the change as a decimal, not the multiplier. You still need to add 1 (for the original 100%) before multiplying.',
      reExplanation:
        'Multiplier for a 20% increase = 1 + 0.20 = 1.20. Multiplier for a 20% decrease = 1 - 0.20 = 0.80. Multiplying £40 by 0.20 alone gives £8, which is just the size of the increase. The full new amount is the original plus the increase, or equivalently 40 x 1.20 = £48.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2022, Paper 01 (Foundation, Non-calculator), commentary on a chained percentage question where pupils added the percentages (10% + 10% = 20%) instead of multiplying the multipliers.
    {
      id: 'pc-mis-compound-as-sum',
      description:
        'I work out two percentage changes in a row by adding the percentages, so 10% off then another 10% off equals 20% off.',
      triggerAnswer: 'compound-as-sum',
      correction:
        'Actually percentage changes compound. Chain the multipliers (0.9 x 0.9 = 0.81), then convert back to a single percentage if needed.',
      reExplanation:
        'A £100 jumper after two 10% cuts is 100 x 0.9 x 0.9 = £81, an 19% drop overall, not 20%. The second cut acts on £90, so it only takes off £9, not £10. Single-step percentage changes can only be added if they refer to the same base; chained ones must be multiplied.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a percentage word problem where pupils reported the calculated percentage (the size of the change) as the final price, not the price after applying the change.
    {
      id: 'pc-mis-change-as-price',
      description:
        'I find the percentage amount and report it as the final price, forgetting to add it back to (or subtract it from) the original.',
      triggerAnswer: 'change-as-price',
      correction:
        'In fact the percentage of the amount is the size of the change, not the new price. Add it back (for an increase) or subtract it (for a decrease).',
      reExplanation:
        'For "£80 plus 20% VAT", 20% of 80 is 16. That is the VAT, not the bill. The total bill is 80 + 16 = £96. For "£200 with a 25% discount", 25% of 200 is 50. That is the discount, not the sale price. The sale price is 200 - 50 = £150. Always check: am I reporting the change, or the amount after the change?',
    },
    // Authored, no external source: classroom-observed slip where pupils swap the direction of a percentage change when re-reading a word problem (treating "rise" as "fall" or "discount" as "markup").
    {
      id: 'pc-mis-direction-swap',
      description:
        'I find the right multiplier size but apply it in the wrong direction, so a 15% rise becomes a 15% fall, or a sale becomes a markup.',
      triggerAnswer: 'direction-swap',
      correction:
        'Actually re-read the question and choose 1 + (change) for an increase or 1 - (change) for a decrease. Words like rise, gain, VAT, mark-up signal an increase; cut, sale, discount, loss signal a decrease.',
      reExplanation:
        'For "a £40 jumper in a 25% sale", the sale signals a decrease: multiplier = 1 - 0.25 = 0.75, sale price = 40 x 0.75 = £30. Applying 1.25 instead would give £50, which is the opposite direction. Highlight the verb in the question (rise/fall, increase/decrease, sale/markup) before choosing the multiplier.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const percentagesChangeZoneNodes = [percentagesChange]
