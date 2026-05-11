import type { SkillNode } from '@/types/content'

export const percentagesRepeatedChange: SkillNode = {
  id: 'maths-percentages-repeated-change',
  title: 'Repeated Percentage Change',
  description:
    'Use the multiplier method to handle two or three percentage changes in a row. A 10% increase has multiplier 1.10 and a 15% decrease has multiplier 0.85, so 1.10 x 1.10 = 1.21 means a 21% total increase, not 20%. Apply repeated change to UK contexts such as house prices, salary rises, train fare hikes, bus pass renewals, library footfall and school roll growth.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-percentages',
  zoneName: 'Percentages',
  tier: 'confident',
  prerequisites: ['maths-percentages-change'],
  curriculum: {
    ks3Objective:
      'Solve problems involving percentage change, including percentage increase, decrease and original value problems; use the multiplier method for repeated change.',
    awardingBodies: {
      aqa: 'R9 Solve problems involving repeated proportional change using a multiplier (GCSE Mathematics 8300)',
      edexcel:
        'R16 Set up, solve and interpret growth and decay problems involving repeated percentage change (GCSE Mathematics 1MA1)',
      ocr: '6.03c Solve problems involving repeated percentage change (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'prc-scene-stacked-multipliers',
      title: 'Two 10% Rises Stack to 21%, Not 20%',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to reveal how a £100 price moves through two 10% increases. The first 10% lifts £100 to £110. The second 10% acts on the new £110, not on the original £100, so it adds £11, landing on £121 rather than £120.',
      data: {
        viewBox: '0 0 600 320',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 320"><rect x="20" y="20" width="560" height="280" rx="12" fill="#0F172A" stroke="#475569" stroke-width="2"/><text x="300" y="55" font-family="system-ui, sans-serif" font-size="16" fill="#94A3B8" text-anchor="middle">£100 after two 10% increases in a row</text><g font-family="ui-monospace, SF Mono, Menlo, monospace" font-size="20" fill="#F8FAFC" text-anchor="middle"><text x="120" y="140">Start</text><text x="300" y="140">After +10%</text><text x="480" y="140">After +10% again</text><text x="120" y="190" fill="#3B82F6">£100</text><text x="300" y="190" fill="#22C55E">£110</text><text x="480" y="190" fill="#A855F7">£121</text></g><g stroke="#94A3B8" stroke-width="2" fill="none"><path d="M170 180 L250 180" marker-end="url(#arrow)"/><path d="M350 180 L430 180" marker-end="url(#arrow)"/></g><defs><marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#94A3B8"/></marker></defs><text x="300" y="260" font-family="system-ui, sans-serif" font-size="14" fill="#94A3B8" text-anchor="middle">Multiplier chain: 1.10 x 1.10 = 1.21, a 21% rise overall.</text></svg>`,
        hotspots: [
          {
            id: 'prc-spot-start',
            x: 20,
            y: 56,
            label: 'Starting amount: £100',
            description: 'This is the original price before any changes are applied.',
          },
          {
            id: 'prc-spot-first-rise',
            x: 50,
            y: 56,
            label: 'First +10%: £100 x 1.10 = £110',
            description: 'The 10% increase is worth £10 because it acts on £100.',
          },
          {
            id: 'prc-spot-second-rise',
            x: 80,
            y: 56,
            label: 'Second +10%: £110 x 1.10 = £121',
            description: 'The second 10% acts on £110, so it is worth £11, not £10.',
          },
          {
            id: 'prc-spot-total',
            x: 50,
            y: 81,
            label: 'Total multiplier 1.21 means a 21% rise',
            description: 'Stacking 1.10 x 1.10 gives 1.21, not 1.20. Two 10% rises do not add to 20%.',
          },
        ],
      },
    },
    {
      id: 'prc-scene-multiplier-table',
      title: 'Reading the Multiplier from the Percentage',
      type: 'fraction-wall',
      instructions:
        'Click each bar to see the multiplier that matches the percentage change. Increases sit above 1, decreases sit below 1, and 0% sits at exactly 1.',
      data: {
        rows: [
          { denominator: 4, colour: '#3B82F6', shaded: 4, label: '+25% increase, multiplier 1.25' },
          { denominator: 4, colour: '#22C55E', shaded: 4, label: '+8% increase, multiplier 1.08' },
          { denominator: 4, colour: '#A855F7', shaded: 4, label: '+5% increase, multiplier 1.05' },
          { denominator: 4, colour: '#94A3B8', shaded: 4, label: '0% no change, multiplier 1.00' },
          { denominator: 4, colour: '#F59E0B', shaded: 3, label: '15% decrease, multiplier 0.85' },
          { denominator: 4, colour: '#EC4899', shaded: 3, label: '40% decrease, multiplier 0.60' },
        ],
        notes:
          'Increase multiplier = 1 + (rate / 100). Decrease multiplier = 1 - (rate / 100). To chain two changes, multiply the multipliers together. The decimal 1.08 is the multiplier for a +8% rise; reading 1.08 as 108% means the new amount is 108% of the old, which is the same as a 8% rise. Reading 1.08 as a percentage rise of 108% is the slip to avoid.',
      },
    },
    {
      id: 'prc-scene-common-errors',
      title: 'Three Common Slips with Repeated Change',
      type: 'diagram',
      instructions:
        'Read each row to see the three common slips with repeated percentage change. Slip one is adding the percentages: thinking 10% then 10% is the same as 20%. Slip two is treating an increase followed by a decrease of the same size as a return to the start: a 20% rise then a 20% fall lands on 96%, not 100%. Slip three is mixing up percentage points with a percentage rise: a bus pass that climbs from 5% of the budget to 8% has risen by three percentage points, but as a percentage rise that is 60%, not 3%. Each slip becomes visible the moment the multipliers are chained: 1.10 x 1.10 = 1.21, 1.20 x 0.80 = 0.96, and 8 divided by 5 equals 1.60.',
      data: {
        slips: [
          {
            slip: 'Adding the percentages',
            wrong: '10% then 10% = 20%',
            right: '1.10 x 1.10 = 1.21 means a 21% rise',
          },
          {
            slip: 'Treating inc-then-dec as a return to start',
            wrong: '£100 + 20% then -20% = £100',
            right: '£100 x 1.20 x 0.80 = £96, a 4% fall overall',
          },
          {
            slip: 'Percentage points read as percentage rise',
            wrong: '5% to 8% is a 3% rise',
            right: '5% to 8% is +3 percentage points, but a 60% rise',
          },
        ],
        notes:
          'Always reach for the multiplier chain. If you cannot see the start, middle and end amounts, the chain will show the slip.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'prc-worked-1',
      title: 'A £180,000 Manchester flat rises by 5% then by 4%',
      steps: [
        {
          explanation:
            'Read each percentage as a multiplier. A 5% rise has multiplier 1.05 and a 4% rise has multiplier 1.04.',
          maths: 'multipliers: 1.05 and 1.04',
        },
        {
          explanation:
            'Apply the first rise to the starting amount.',
          maths: '180000 x 1.05 = 189000',
        },
        {
          explanation:
            'Apply the second rise to the new amount, not to the original.',
          maths: '189000 x 1.04 = 196560',
        },
        {
          explanation:
            'Check the chain by multiplying the multipliers first, then by the start.',
          maths: '1.05 x 1.04 = 1.092, so 180000 x 1.092 = 196560',
        },
        {
          explanation:
            'So the flat is now worth £196,560. The total rise is 9.2%, not 9%, because the second 4% acted on the larger £189,000.',
          maths: 'final price = £196,560',
        },
      ],
    },
    {
      id: 'prc-worked-2',
      title: 'A library footfall climbs 20% then falls 20% (missing step revealed by the engine)',
      steps: [
        {
          explanation:
            'A Tunbridge Wells library has 5,000 visitors in May. Footfall rises by 20% in June and falls by 20% in July.',
          maths: 'start: 5000 visitors',
        },
        {
          explanation:
            'Build the multipliers. A 20% rise has multiplier 1.20 and a 20% fall has multiplier 0.80.',
          maths: 'multipliers: 1.20 and 0.80',
        },
        {
          explanation:
            'Apply the rise first.',
          maths: '5000 x 1.20 = 6000',
        },
        {
          explanation:
            'Apply the fall to the new total.',
          maths: '6000 x 0.80 = 4800',
        },
        {
          explanation:
            'Check the chain. Multiplying 1.20 by 0.80 gives 0.96, so the overall change is a 4% fall, not back to the start.',
          maths: '1.20 x 0.80 = 0.96',
        },
        {
          explanation:
            'So July footfall is 4,800 visitors, which is 200 fewer than May. A rise then a fall of the same size never returns to the original.',
          maths: 'final footfall = 4800',
        },
      ],
    },
  ],
  questions: [
    // Core 1: identify the multiplier for an increase
    {
      id: 'prc-q1',
      type: 'multiple-choice',
      stem: 'Which multiplier matches an 8% increase?',
      tier: 'core',
      options: ['0.08', '0.92', '1.08', '8.00'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Increase multiplier = 1 + (rate / 100). 1 + 0.08 = 1.08.',
      misconceptionId: 'prc-mis-multiplier-equals-percent',
    },
    // Core 2: identify the multiplier for a decrease
    {
      id: 'prc-q2',
      type: 'multiple-choice',
      stem: 'Which multiplier matches a 15% decrease?',
      tier: 'core',
      options: ['0.85', '1.15', '0.15', '0.50'],
      correctIndex: 0,
      xpValue: 10,
      hint: 'Decrease multiplier = 1 - (rate / 100). 1 - 0.15 = 0.85.',
    },
    // Core 3: two-step increase, small numbers
    {
      id: 'prc-q3',
      type: 'multiple-choice',
      stem: 'Increase £200 by 10%, then increase the new amount by 10% again. What is the final amount?',
      tier: 'core',
      options: ['£220', '£240', '£242', '£221'],
      correctIndex: 2,
      xpValue: 10,
      hint: '200 x 1.10 = 220. Then 220 x 1.10 = 242. The second 10% acts on £220, not on £200.',
      misconceptionId: 'prc-mis-add-percentages',
    },
    // Core 4: two-step decrease
    {
      id: 'prc-q4',
      type: 'numeric-entry',
      stem: 'A £80 bus pass is cut by 10%, then cut by 10% again. What is the final price, in pounds?',
      tier: 'core',
      correctAnswer: 64.8,
      tolerance: 0.01,
      unit: 'pounds',
      xpValue: 10,
      hint: '80 x 0.90 = 72. Then 72 x 0.90 = 64.80.',
    },
    // Core 5: inc-then-dec does not return to start
    {
      id: 'prc-q5',
      type: 'spot-misconception',
      stem: 'Liam says: "A £50 jumper goes up 10%, then comes down 10%. So it is back to £50."',
      tier: 'core',
      statements: [
        {
          text: 'Liam is right. The rise and fall are the same size, so they cancel out.',
          isMisconception: true,
        },
        {
          text: 'In fact the second change acts on the new, larger price. After +10% the jumper is £55, then 10% of £55 is £5.50, leaving £49.50, not £50. Chained percentage changes do not cancel.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'prc-mis-inc-dec-returns',
    },
    // Core 6: chain multipliers MCQ
    {
      id: 'prc-q6',
      type: 'multiple-choice',
      stem: 'Two percentage changes have multipliers 1.05 and 1.08. What single multiplier replaces them?',
      tier: 'core',
      options: ['1.13', '0.97', '2.13', '1.134'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Multiply the multipliers together: 1.05 x 1.08 = 1.134. Adding 0.05 and 0.08 to get 0.13 is the slip; multipliers compound, not add.',
      misconceptionId: 'prc-mis-add-percentages',
    },
    // Core 7: simple chained increase on a school roll
    {
      id: 'prc-q7',
      type: 'numeric-entry',
      stem: 'A Sevenoaks school has a roll of 600 pupils. The roll rises by 5% one year and by 5% the next. What is the new roll, to the nearest whole pupil?',
      tier: 'core',
      correctAnswer: 662,
      tolerance: 1,
      xpValue: 10,
      hint: '600 x 1.05 = 630. Then 630 x 1.05 = 661.5, which rounds up to 662 pupils.',
    },
    // Confident 1: subtraction slip
    {
      id: 'prc-q8',
      type: 'spot-misconception',
      stem: 'Maya wants to decrease £240 by 12%, then by 8% again. She writes "240 - 12 - 8 = 220".',
      tier: 'confident',
      statements: [
        {
          text: 'Maya is right. Subtract the percentages from the amount, one after the other.',
          isMisconception: true,
        },
        {
          text: 'In fact a percentage decrease is a multiplier, not a subtraction of the rate number. The right chain is 240 x 0.88 x 0.92 = 194.30, not 220. Subtracting 12 and 8 treats the percentages as plain pounds.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'prc-mis-subtract-rate',
    },
    // Confident 2: train fare two-step
    {
      id: 'prc-q9',
      type: 'numeric-entry',
      stem: 'A Manchester train fare of £18.00 rises by 12% in 2024 and by 8% in 2025. What is the fare at the end of 2025, in pounds to 2 decimal places?',
      tier: 'confident',
      correctAnswer: 21.77,
      tolerance: 0.01,
      unit: 'pounds',
      xpValue: 15,
      hint: '18 x 1.12 = 20.16. Then 20.16 x 1.08 = 21.7728, which rounds to £21.77.',
    },
    // Confident 3: mixed inc/dec house price
    {
      id: 'prc-q10',
      type: 'multiple-choice',
      stem: 'A Dover house worth £250,000 rises by 6%, then falls by 4% the next year. What is the new value?',
      tier: 'confident',
      options: ['£255,000', '£254,400', '£250,500', '£260,000'],
      correctIndex: 1,
      xpValue: 15,
      hint: '250000 x 1.06 = 265000. Then 265000 x 0.96 = 254400. The 4% fall acts on £265,000, not on the original £250,000.',
    },
    // Confident 4: missing-step chained calculation
    {
      id: 'prc-q11',
      type: 'missing-step',
      stem: 'Fill in the missing step. A £45 weekly food shop rises by 4% in spring and a further 6% in summer. Find the new weekly shop, to the nearest penny.',
      tier: 'confident',
      steps: [
        'Build the multipliers. A 4% rise has multiplier 1.04 and a 6% rise has multiplier 1.06.',
        'Apply the first rise: 45 x 1.04 = 46.80.',
        null,
        'So the new weekly shop is £49.61. Notice the 6% acted on £46.80, not on the original £45.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Apply the second rise to the new amount: 46.80 x 1.06 = 49.608, which rounds to £49.61.',
      xpValue: 20,
    },
    // Confident 5: drag-order four final amounts
    {
      id: 'prc-q12',
      type: 'drag-order',
      stem: 'Each calculation starts with £100. Drag them into order from the smallest final amount to the largest.',
      tier: 'confident',
      items: [
        '+10% then +10%',
        '+10% then -10%',
        '-10% then +10%',
        '+20% then -5%',
      ],
      correctOrder: [1, 2, 3, 0],
      xpValue: 20,
      hint: 'Compute each chain: +10% +10% = 100 x 1.10 x 1.10 = 121. +10% -10% = 100 x 1.10 x 0.90 = 99. -10% +10% = 100 x 0.90 x 1.10 = 99. +20% -5% = 100 x 1.20 x 0.95 = 114. The two 99s tie; list them first, then 114, then 121.',
    },
    // Confident 6: slider-explore for the overall multiplier
    {
      id: 'prc-q13',
      type: 'slider-explore',
      stem: 'Two changes are applied to a £100 amount: a 12% rise and then a 5% fall. Slide the marker to the overall multiplier that replaces this chain.',
      tier: 'confident',
      min: 0,
      max: 2,
      step: 0.001,
      correctRange: [1.063, 1.065],
      label: 'Overall multiplier (1.000 means no change)',
      xpValue: 20,
      hint: 'Chain the multipliers: 1.12 x 0.95 = 1.064. The slider should land between 1.063 and 1.065.',
    },
    // Confident 7: salary rise two-step
    {
      id: 'prc-q14',
      type: 'numeric-entry',
      stem: 'Aisha earns a salary of £24,000. She is given a 3% rise this year and a 4% rise next year. What is her salary at the end of next year, to the nearest pound?',
      tier: 'confident',
      correctAnswer: 25709,
      tolerance: 1,
      unit: 'pounds',
      xpValue: 15,
      hint: '24000 x 1.03 = 24720. Then 24720 x 1.04 = 25708.80, which rounds to £25,709.',
    },
    // Confident 8: percentage points vs percentage rise
    {
      id: 'prc-q15',
      type: 'multiple-choice',
      stem: 'A bus pass took 5% of Niharika\'s weekly pocket money last year. This year it takes 8%. Which statement is correct?',
      tier: 'confident',
      options: [
        'The bus pass has risen by 3% of pocket money.',
        'The bus pass has risen by 3 percentage points, which is a 60% rise.',
        'The bus pass has risen by 60 percentage points.',
        'The bus pass has fallen by 3% of pocket money.',
      ],
      correctIndex: 1,
      xpValue: 15,
      hint: '8 - 5 = 3 percentage points. As a percentage rise: 3 / 5 = 0.60 = 60%.',
      misconceptionId: 'prc-mis-points-vs-percent',
    },
    // Challenge 1: Bond-style multi-step word problem
    {
      id: 'prc-q16',
      type: 'free-text',
      stem: 'The price of a Manchester train ticket rose by 12% in 2024 and a further 8% in 2025. Aisha says the total rise is 20%. Explain in one or two sentences why she is wrong, and give the correct total percentage rise to one decimal place.',
      tier: 'challenge',
      sampleAnswer:
        'Aisha has added the percentages. The two rises chain as multipliers: 1.12 x 1.08 = 1.2096, so the total rise is 20.96%, which rounds to 21.0%. She missed that the 8% rise acted on the larger 2024 price, not on the original.',
      keywords: ['1.12', '1.08', '1.2096', '20.96', '21.0', 'multiplier', 'chain'],
      xpValue: 25,
    },
    // Challenge 2: three-step chain
    {
      id: 'prc-q17',
      type: 'numeric-entry',
      stem: 'A Lake District guest house charges £120 a night in May. It puts the price up by 10% in June, then up by 5% in July, then drops it by 8% in August. What is the August nightly rate, to the nearest penny?',
      tier: 'challenge',
      correctAnswer: 127.51,
      tolerance: 0.01,
      unit: 'pounds',
      xpValue: 25,
      hint: '120 x 1.10 = 132. Then 132 x 1.05 = 138.60. Then 138.60 x 0.92 = 127.512, which rounds to £127.51.',
    },
    // Challenge 3: find the original after two changes (reverse calculation)
    {
      id: 'prc-q18',
      type: 'multiple-choice',
      stem: 'After a 20% rise followed by a 10% fall, a Tunbridge Wells flat is worth £216,000. What was its original value?',
      tier: 'challenge',
      options: ['£240,000', '£200,000', '£210,000', '£220,000'],
      correctIndex: 1,
      xpValue: 25,
      hint: 'Combined multiplier: 1.20 x 0.90 = 1.08. Divide to undo: 216000 / 1.08 = £200,000.',
      misconceptionId: 'prc-mis-second-on-original',
    },
    // Challenge 4: drag-drop-builder, build the multiplier chain
    {
      id: 'prc-q19',
      type: 'drag-drop-builder',
      stem: 'Build the multiplier chain that finds the final value of a £500 amount after a 6% rise and then a 10% fall. Drag the parts into order.',
      tier: 'challenge',
      parts: ['500', 'x', '1.06', 'x', '0.90'],
      correctArrangement: ['500', 'x', '1.06', 'x', '0.90'],
      xpValue: 25,
      hint: 'Start with the amount, then chain the multipliers: 500 x 1.06 x 0.90. The final value is 500 x 0.954 = £477.',
    },
    // Challenge 5: percentage rise over two years, with rounding
    {
      id: 'prc-q20',
      type: 'numeric-entry',
      stem: 'A Sevenoaks library logs 8,000 visits in March. Footfall falls by 15% in April, then rises by 25% in May. How many more or fewer visits does the library log in May than in March? Enter a positive number if there are more, a negative number if fewer, to the nearest whole visit.',
      tier: 'challenge',
      correctAnswer: 500,
      tolerance: 1,
      unit: 'visits',
      xpValue: 25,
      hint: '8000 x 0.85 = 6800. Then 6800 x 1.25 = 8500. Difference: 8500 - 8000 = 500 more visits in May. Combined multiplier: 0.85 x 1.25 = 1.0625, a 6.25% rise overall.',
    },
    // Challenge 6: original value, two rises
    {
      id: 'prc-q21',
      type: 'multiple-choice',
      stem: 'After two yearly rises of 5% and 4%, a school roll has reached 1,365 pupils. What was the roll two years ago, to the nearest pupil?',
      tier: 'challenge',
      options: ['1,200', '1,310', '1,250', '1,300'],
      correctIndex: 2,
      xpValue: 25,
      hint: 'Combined multiplier: 1.05 x 1.04 = 1.092. Divide to undo: 1365 / 1.092 = 1250 pupils.',
    },
  ],
  misconceptions: [
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2022, Paper 01 (Foundation, Non-calculator); commentary on a chained percentage question where pupils added the two percentages (10% + 10% = 20%) instead of multiplying the multipliers.
    {
      id: 'prc-mis-add-percentages',
      description:
        'I think two percentage changes in a row can be added together, so 10% then 10% is the same as 20%.',
      triggerAnswer: 'add-percentages',
      correction:
        'Actually percentage changes chain by multiplying multipliers, not by adding rates. 1.10 x 1.10 = 1.21, a 21% rise overall.',
      reExplanation:
        'A £100 jumper after two 10% rises is 100 x 1.10 x 1.10 = £121, not £120. The second 10% acts on £110, so it is worth £11, not £10. The only time two rates can be added is when both refer to the same starting amount; chained ones must be multiplied.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 2F (Foundation, Calculator); commentary on a question where pupils claimed a 20% rise followed by a 20% fall returned to the original value.
    {
      id: 'prc-mis-inc-dec-returns',
      description:
        'I think an increase and a decrease of the same size cancel each other out, so the final amount equals the original.',
      triggerAnswer: 'inc-dec-returns',
      correction:
        'In fact the second change acts on the new amount, not the original. The two changes do not cancel because their starting points differ.',
      reExplanation:
        'A £100 jumper after +20% is £120. A 20% fall on £120 takes off £24, leaving £96, not £100. Chain the multipliers: 1.20 x 0.80 = 0.96, a 4% drop overall. Two changes of equal size always end below the start when one is a rise and the other a fall.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator); commentary on a percentage-decrease question where pupils subtracted the rate number from the amount as if it were pounds.
    {
      id: 'prc-mis-subtract-rate',
      description:
        'I work out a percentage decrease by subtracting the rate number from the amount, so a 12% cut on £240 means £240 minus 12 equals £228.',
      triggerAnswer: 'subtract-rate',
      correction:
        'Actually a percentage decrease uses the multiplier 1 - (rate / 100), then multiply. Subtracting the rate number treats the percentage as a number of pounds.',
      reExplanation:
        'For a 12% cut on £240: multiplier = 1 - 0.12 = 0.88. New amount = 240 x 0.88 = £211.20. Subtracting 12 would give £228, which is the answer to "take £12 off", not "take 12% off". The rate number and the change in pounds are different things until you do the multiplication.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Percentages" page; "Common mistake" callout that the second percentage in a chain is taken from the new amount, not the original.
    {
      id: 'prc-mis-second-on-original',
      description:
        'I apply the second percentage in a chain to the original amount, not to the new amount produced by the first change.',
      triggerAnswer: 'second-on-original',
      correction:
        'In fact each change in a chain acts on the most recent amount, not on the original. Always use the new total as the base for the next step.',
      reExplanation:
        'A £200 price after a 10% rise becomes £220. A second 5% rise acts on £220, not on £200, so it adds £11, giving £231. Treating the 5% as 5% of the original £200 would add only £10, giving £230, which is short by £1. The chain 200 x 1.10 x 1.05 = 231 keeps this clean.',
    },
    // Source: NCETM Secondary Magazine, Issue 125, "Persistent Misconceptions in Percentages" article; the slip where pupils read the multiplier digit as the percentage rate.
    {
      id: 'prc-mis-multiplier-equals-percent',
      description:
        'I read a multiplier of 1.08 as a 108% rise, because 1.08 looks like 108 over 100.',
      triggerAnswer: 'multiplier-equals-percent',
      correction:
        'Actually a multiplier of 1.08 means the new amount is 108% of the old, which is the same as an 8% rise, not a 108% rise.',
      reExplanation:
        'The new amount is the old amount times the multiplier. 100 x 1.08 = 108, which is £8 more than £100, so an 8% rise. A 108% rise would mean adding £108 onto £100 to reach £208, which would have multiplier 2.08. The decimal part of the multiplier (here 0.08) is the rate of change; the whole part (1) is the original 100%.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, November 2022, Paper 1F (Foundation, Non-calculator); commentary on a problem comparing two percentages where pupils confused "percentage points" with "percentage rise".
    {
      id: 'prc-mis-points-vs-percent',
      description:
        'I think a change from 5% to 8% is a 3% rise, because 8 minus 5 is 3.',
      triggerAnswer: 'points-vs-percent',
      correction:
        'Actually 5% to 8% is a rise of 3 percentage points, but as a percentage rise it is 3 divided by 5, which is 60%.',
      reExplanation:
        'Percentage points measure the gap between two percentages on the same scale: 8 - 5 = 3 points. A percentage rise compares the change to the starting value: 3 / 5 x 100 = 60%. The two ideas use the same digits but mean very different sizes of change. When the question asks for "the percentage rise", divide by the start; when it asks for "percentage points", just subtract.',
    },
    // Authored, no external source: classroom-observed slip where pupils round the multiplier too early and so lose pence on the final answer.
    {
      id: 'prc-mis-round-early',
      description:
        'I round the combined multiplier to two decimal places before I multiply, so my final answer is short by a few pence.',
      triggerAnswer: 'round-early',
      correction:
        'In fact rounding the multiplier early throws away the bits that matter on bigger amounts. Carry the multiplier to at least four decimal places, then round only the final pounds and pence.',
      reExplanation:
        'For a 12% rise then an 8% rise: 1.12 x 1.08 = 1.2096. Rounded early to 1.21 it changes a £180 amount from 180 x 1.2096 = £217.73 to 180 x 1.21 = £217.80, a 7p slip. On a £180,000 house the same early rounding moves the answer by £70. Keep the chained multiplier exact until the very last step.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const percentagesRepeatedChangeZoneNodes = [percentagesRepeatedChange]
