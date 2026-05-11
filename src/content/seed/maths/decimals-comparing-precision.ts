import type { SkillNode } from '@/types/content'

export const decimalsComparingPrecision: SkillNode = {
  id: 'maths-decimals-comparing-precision',
  title: 'Comparing Decimals with Different Precision',
  description:
    'Compare and order decimals that have different numbers of decimal places. The reliable method is to pad the shorter decimals with trailing zeros until every number has the same number of digits after the point, then compare column by column from the tenths. Read 0.7, 0.70 and 0.700 as the same value. Spot and refuse the trap that says 0.65 is larger than 0.7 because 65 looks bigger than 7.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-decimals',
  zoneName: 'Decimals',
  tier: 'confident',
  prerequisites: ['maths-decimals-place-value'],
  curriculum: {
    ks3Objective:
      'Use the number line as a model for ordering of the real numbers; understand and use place value for decimals of any size.',
    awardingBodies: {
      aqa: 'N1 Order positive and negative integers, decimals and fractions (GCSE Mathematics 8300)',
      edexcel: 'N1 Order positive and negative integers, decimals and fractions (GCSE Mathematics 1MA1)',
      ocr: '1.01a Order positive and negative decimals to varying degrees of precision (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'dcp-scene-place-columns',
      title: 'Place Value Columns for 0.4, 0.41 and 0.401',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read what sits in the tenths, hundredths, and thousandths column for 0.4, 0.41 and 0.401.',
      data: {
        viewBox: '0 0 600 320',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 320"><rect x="20" y="20" width="560" height="280" rx="10" fill="#0F172A" stroke="#475569" stroke-width="2"/><text x="300" y="60" font-family="system-ui, sans-serif" font-size="16" fill="#94A3B8" text-anchor="middle">Three decimals in the same place-value grid</text><line x1="240" y1="80" x2="240" y2="280" stroke="#475569" stroke-width="1" stroke-dasharray="3 3"/><line x1="340" y1="80" x2="340" y2="280" stroke="#475569" stroke-width="1" stroke-dasharray="3 3"/><line x1="440" y1="80" x2="440" y2="280" stroke="#475569" stroke-width="1" stroke-dasharray="3 3"/><text x="290" y="100" font-family="system-ui, sans-serif" font-size="13" fill="#94A3B8" text-anchor="middle">tenths</text><text x="390" y="100" font-family="system-ui, sans-serif" font-size="13" fill="#94A3B8" text-anchor="middle">hundredths</text><text x="490" y="100" font-family="system-ui, sans-serif" font-size="13" fill="#94A3B8" text-anchor="middle">thousandths</text><text x="180" y="150" font-family="ui-monospace, SF Mono, Menlo, monospace" font-size="28" fill="#F8FAFC" text-anchor="middle">0.4</text><text x="290" y="150" font-family="ui-monospace, SF Mono, Menlo, monospace" font-size="28" fill="#F8FAFC" text-anchor="middle">4</text><text x="390" y="150" font-family="ui-monospace, SF Mono, Menlo, monospace" font-size="28" fill="#475569" text-anchor="middle">0</text><text x="490" y="150" font-family="ui-monospace, SF Mono, Menlo, monospace" font-size="28" fill="#475569" text-anchor="middle">0</text><text x="180" y="200" font-family="ui-monospace, SF Mono, Menlo, monospace" font-size="28" fill="#F8FAFC" text-anchor="middle">0.41</text><text x="290" y="200" font-family="ui-monospace, SF Mono, Menlo, monospace" font-size="28" fill="#F8FAFC" text-anchor="middle">4</text><text x="390" y="200" font-family="ui-monospace, SF Mono, Menlo, monospace" font-size="28" fill="#F8FAFC" text-anchor="middle">1</text><text x="490" y="200" font-family="ui-monospace, SF Mono, Menlo, monospace" font-size="28" fill="#475569" text-anchor="middle">0</text><text x="180" y="250" font-family="ui-monospace, SF Mono, Menlo, monospace" font-size="28" fill="#F8FAFC" text-anchor="middle">0.401</text><text x="290" y="250" font-family="ui-monospace, SF Mono, Menlo, monospace" font-size="28" fill="#F8FAFC" text-anchor="middle">4</text><text x="390" y="250" font-family="ui-monospace, SF Mono, Menlo, monospace" font-size="28" fill="#F8FAFC" text-anchor="middle">0</text><text x="490" y="250" font-family="ui-monospace, SF Mono, Menlo, monospace" font-size="28" fill="#F8FAFC" text-anchor="middle">1</text></svg>`,
        hotspots: [
          {
            id: 'dcp-spot-tenths',
            x: 48,
            y: 47,
            label: 'Tenths column: all three numbers hold a 4',
            description:
              'Every row has 4 in the tenths column. Because the tenths digits match, the comparison must move to the next column to the right.',
          },
          {
            id: 'dcp-spot-hundredths',
            x: 65,
            y: 62,
            label: 'Hundredths: 0.4 holds 0, 0.41 holds 1, 0.401 holds 0',
            description:
              'Pad 0.4 to 0.40 to read its hundredths digit as 0. 0.41 has 1 hundredth, which beats 0 hundredths, so 0.41 is bigger than 0.4 and bigger than 0.401.',
          },
          {
            id: 'dcp-spot-thousandths',
            x: 82,
            y: 78,
            label: 'Thousandths: 0.4 holds 0, 0.41 holds 0, 0.401 holds 1',
            description:
              'Once the tenths and hundredths are equal, the thousandths column decides. 0.401 has 1 thousandth while 0.4 has 0, so 0.401 is bigger than 0.4 but smaller than 0.41.',
          },
        ],
      },
    },
    {
      id: 'dcp-scene-equal-zeros-wall',
      title: 'Why 0.7, 0.70 and 0.700 Are the Same Bar',
      type: 'fraction-wall',
      instructions:
        'Click each row of the wall to highlight how 7/10, 70/100 and 700/1000 all colour in the same length.',
      data: {
        rows: [
          {
            denominator: 10,
            label: '7/10',
            cells: 10,
            highlight: 7,
            decimal: '0.7',
          },
          {
            denominator: 100,
            label: '70/100',
            cells: 100,
            highlight: 70,
            decimal: '0.70',
          },
          {
            denominator: 1000,
            label: '700/1000',
            cells: 1000,
            highlight: 700,
            decimal: '0.700',
          },
        ],
        note: 'Adding trailing zeros after the decimal point does not change the value. The bar fills to the same point along the wall.',
      },
    },
    {
      id: 'dcp-scene-pad-with-zeros',
      title: 'The Pad With Zeros Trick',
      type: 'diagram',
      instructions:
        'Read each row to see how padding a shorter decimal with trailing zeros lines its place-value columns up with a longer decimal. To compare 0.6 with 0.605, write 0.6 as 0.600. To compare 0.59 with 0.6, write 0.6 as 0.60 so both have two digits after the point. The tenths digit always decides first; once the tenths match, look at the hundredths, then the thousandths, and so on.',
      data: {
        examples: [
          {
            shorter: '0.6',
            padded: '0.600',
            compared: '0.605',
            winner: '0.605',
            reason: '0.600 has 0 thousandths; 0.605 has 5 thousandths.',
          },
          {
            shorter: '0.6',
            padded: '0.60',
            compared: '0.59',
            winner: '0.6',
            reason: '0.60 has 6 tenths; 0.59 has 5 tenths.',
          },
          {
            shorter: '0.7',
            padded: '0.70',
            compared: '0.65',
            winner: '0.7',
            reason: '0.70 has 7 tenths; 0.65 has 6 tenths. The tenths column decides first.',
          },
        ],
        rule: 'Pad with trailing zeros until every number has the same number of decimal places. Then compare column by column, starting from the tenths.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'dcp-worked-1',
      title: 'Order 0.6, 0.59 and 0.605 from smallest to largest',
      steps: [
        {
          explanation:
            'Find the longest decimal so we know how many digits each number needs after the point. 0.605 has three digits.',
          maths: 'longest: 0.605 (3 dp)',
        },
        {
          explanation:
            'Pad the other two with trailing zeros so every number has three digits after the point.',
          maths: '0.6 = 0.600, 0.59 = 0.590, 0.605 stays',
        },
        {
          explanation:
            'Compare the tenths column first. 0.600 has 6 tenths, 0.590 has 5 tenths, 0.605 has 6 tenths. So 0.590 is the smallest because 5 tenths is less than 6 tenths.',
          maths: 'tenths: 6, 5, 6',
        },
        {
          explanation:
            'The two numbers with 6 tenths must be compared in the hundredths column. 0.600 has 0 hundredths, 0.605 has 0 hundredths, so we move on.',
          maths: 'hundredths: 0, 0',
        },
        {
          explanation:
            'Compare the thousandths column for the tied pair. 0.600 has 0 thousandths, 0.605 has 5 thousandths, so 0.605 is the larger of the two.',
          maths: 'thousandths: 0, 5',
        },
        {
          explanation:
            'Put the three numbers in order from smallest to largest. The 0.59 with the smallest tenths digit comes first, then 0.6, then 0.605.',
          maths: '0.59 < 0.6 < 0.605',
        },
      ],
    },
    {
      id: 'dcp-worked-2',
      title: 'Compare 0.4 s and 0.45 s for two sprint splits (one step hidden by the engine)',
      steps: [
        {
          explanation:
            'A Sevenoaks Year 7 athlete records two 60 metre sprint splits: 0.4 s for the reaction time on one trial and 0.45 s on the next. Decide which split is faster, meaning which time is smaller.',
        },
        {
          explanation:
            'Find the longer of the two decimals so we know how many digits to use. 0.45 has two digits after the point.',
          maths: 'longest: 0.45 (2 dp)',
        },
        {
          explanation:
            'Pad the shorter decimal with a trailing zero so each number has the same number of digits after the point.',
          maths: '0.4 = 0.40',
        },
        {
          explanation:
            'Compare the tenths column. Both 0.40 and 0.45 have 4 tenths, so the tenths column ties and we move on.',
        },
        {
          explanation:
            'Compare the hundredths column. 0.40 has 0 hundredths and 0.45 has 5 hundredths, so 0.45 is bigger than 0.40.',
          maths: '0.45 > 0.40',
        },
        {
          explanation:
            'A smaller time is faster in sprinting. So 0.4 s is the faster reaction time of the two, and 0.45 s is the slower split.',
          maths: '0.4 s < 0.45 s, so 0.4 s is faster',
        },
      ],
    },
  ],
  questions: [
    // Core 1: tenths-column wins straight away
    {
      id: 'dcp-q1',
      type: 'multiple-choice',
      stem: 'Which of these decimals is the largest: 0.7, 0.65, 0.659?',
      tier: 'core',
      options: ['0.659', '0.65', '0.7', 'They are all the same value.'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'dcp-mis-longer-is-bigger',
      hint: 'Pad 0.7 to 0.700 so every number has three digits after the point. The tenths column is 7 in 0.7 and 6 in the other two, so the tenths digit decides.',
    },
    // Core 2: padding numeric entry (compare 0.4 vs 0.40)
    {
      id: 'dcp-q2',
      type: 'numeric-entry',
      stem: 'When you pad 0.4 with trailing zeros to have three digits after the point, what number do you write? Enter the answer as a decimal.',
      tier: 'core',
      correctAnswer: 0.4,
      tolerance: 0.00005,
      xpValue: 10,
      hint: 'Trailing zeros after the decimal point do not change the value. 0.4 with three digits after the point is 0.400, which is the same value as 0.4.',
    },
    // Core 3: drag-order four decimals smallest to largest
    {
      id: 'dcp-q3',
      type: 'drag-order',
      stem: 'Drag these four decimals into order from smallest to largest: 0.5, 0.41, 0.401, 0.51.',
      tier: 'core',
      items: ['0.5', '0.41', '0.401', '0.51'],
      correctOrder: [2, 1, 0, 3],
      xpValue: 15,
      misconceptionId: 'dcp-mis-longer-is-bigger',
      hint: 'Pad every decimal to 3 digits after the point: 0.500, 0.410, 0.401, 0.510. Compare column by column starting from the tenths.',
    },
    // Core 4: equal value 0.5 = 0.50
    {
      id: 'dcp-q4',
      type: 'multiple-choice',
      stem: 'Which statement about 0.5 and 0.50 is true?',
      tier: 'core',
      options: [
        '0.50 is larger than 0.5 because it has more digits after the point.',
        '0.5 is larger than 0.50 because shorter decimals are bigger.',
        '0.5 and 0.50 are different values that round to the same place.',
        '0.5 and 0.50 are equal in value; the trailing zero is a placeholder.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'dcp-mis-trailing-zero-changes-value',
      hint: 'Trailing zeros after the decimal point do not change the value. 0.5 means 5 tenths; 0.50 means 5 tenths and 0 hundredths, which is still 5 tenths.',
    },
    // Core 5: simple MCQ ordering with measurements
    {
      id: 'dcp-q5',
      type: 'multiple-choice',
      stem: 'A Year 7 long jumper records three jumps measured in metres: 2.3, 2.27 and 2.305. Which jump was the longest?',
      tier: 'core',
      options: ['2.27 m', '2.305 m', '2.3 m', 'All three are the same length.'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'dcp-mis-read-digits-only',
      hint: 'Pad every jump to 3 digits after the point: 2.300, 2.270, 2.305. Compare the tenths first, then the hundredths, then the thousandths.',
    },
    // Core 6: missing-step (worked example pattern)
    {
      id: 'dcp-q6',
      type: 'missing-step',
      stem: 'Fill in the missing step. The class is comparing 0.59 and 0.6.',
      tier: 'core',
      steps: [
        'Find the longer of the two decimals so we know how many digits to use. 0.59 has two digits after the point.',
        'Pad 0.6 with a trailing zero so each number has the same number of digits after the point: 0.6 becomes 0.60.',
        null,
        'Because 6 tenths is more than 5 tenths, 0.60 is bigger than 0.59. So 0.6 is bigger than 0.59.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Compare the tenths column. 0.60 has 6 tenths and 0.59 has 5 tenths.',
      xpValue: 15,
      hint: 'The missing step compares the leftmost column after both numbers have the same number of digits after the point.',
    },
    // Core 7: numeric-entry compare and write the larger one
    {
      id: 'dcp-q7',
      type: 'numeric-entry',
      stem: 'Which is larger, 0.08 or 0.1? Enter the larger value as a decimal.',
      tier: 'core',
      correctAnswer: 0.1,
      tolerance: 0.00005,
      xpValue: 10,
      misconceptionId: 'dcp-mis-longer-is-bigger',
      hint: 'Pad 0.1 to 0.10 so both numbers have two digits after the point. The tenths column reads 1 in 0.10 and 0 in 0.08, so 0.10 is bigger.',
    },
    // Confident 1: spot misconception (longer means bigger trap)
    {
      id: 'dcp-q8',
      type: 'spot-misconception',
      stem: 'Liam writes: "0.65 is bigger than 0.7 because 65 is bigger than 7."',
      tier: 'confident',
      statements: [
        {
          text: 'Liam is right. A decimal with more digits after the point is always larger because there are more places to fill.',
          isMisconception: true,
        },
        {
          text: 'Actually 0.7 is bigger than 0.65. Pad to the same length: 0.70 versus 0.65. The tenths column decides first, and 7 tenths is more than 6 tenths.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'dcp-mis-longer-is-bigger',
    },
    // Confident 2: drag-order with mixed precision athletic times
    {
      id: 'dcp-q9',
      type: 'drag-order',
      stem: 'A Year 7 100 metre race produces four splits in seconds: 13.4, 13.38, 13.402, 13.4001. Drag them from fastest (smallest time) to slowest (largest time).',
      tier: 'confident',
      items: ['13.4', '13.38', '13.402', '13.4001'],
      correctOrder: [1, 3, 0, 2],
      xpValue: 20,
      misconceptionId: 'dcp-mis-longer-is-bigger',
      hint: 'Pad each split to 4 digits after the point: 13.4000, 13.3800, 13.4020, 13.4001. Compare the tenths, then the hundredths, then the thousandths, then the ten-thousandths.',
    },
    // Confident 3: numeric-entry decide which midpoint
    {
      id: 'dcp-q10',
      type: 'numeric-entry',
      stem: 'A Year 7 maths test mark is reported to two decimal places. Aisha scores 0.7 (out of 1 as a decimal) on one paper and 0.68 on the next. Enter her higher mark, written to two decimal places.',
      tier: 'confident',
      correctAnswer: 0.7,
      tolerance: 0.00005,
      xpValue: 15,
      misconceptionId: 'dcp-mis-longer-is-bigger',
      hint: 'Pad 0.7 to 0.70 so both marks have two decimal places. The tenths digit decides: 7 tenths is more than 6 tenths.',
    },
    // Confident 4: MCQ compare equivalent forms (0.5 = 0.50 = 0.500)
    {
      id: 'dcp-q11',
      type: 'multiple-choice',
      stem: 'Which row puts 0.5, 0.50 and 0.500 in the correct order?',
      tier: 'confident',
      options: [
        '0.5 < 0.50 < 0.500',
        '0.500 < 0.50 < 0.5',
        '0.5 = 0.50 = 0.500',
        '0.5 < 0.500 < 0.50',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'dcp-mis-trailing-zero-changes-value',
      hint: 'Trailing zeros after the decimal point are placeholders. All three numbers stand for 5 tenths.',
    },
    // Confident 5: numeric-entry weighing in kg
    {
      id: 'dcp-q12',
      type: 'numeric-entry',
      stem: 'A Tunbridge Wells greengrocer weighs two punnets of strawberries on the same set of UK scales. One reads 0.45 kg and the other reads 0.4 kg. How much heavier is the larger punnet, in kilograms?',
      tier: 'confident',
      correctAnswer: 0.05,
      tolerance: 0.00005,
      unit: 'kg',
      xpValue: 15,
      hint: 'Pad 0.4 to 0.40 and subtract: 0.45 minus 0.40 = 0.05.',
    },
    // Confident 6: MCQ spot the equivalent decimal
    {
      id: 'dcp-q13',
      type: 'multiple-choice',
      stem: 'Which of these decimals is equal in value to 0.30?',
      tier: 'confident',
      options: ['0.03', '0.003', '0.300', '0.330'],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'dcp-mis-leading-zero-after-point',
      hint: 'A trailing zero on the right does not change the value. A zero immediately after the decimal point shifts every digit one column to the right, which divides the value by 10.',
    },
    // Confident 7: spot misconception (padding with non-zero digits)
    {
      id: 'dcp-q14',
      type: 'spot-misconception',
      stem: 'Maya wants to compare 0.4 and 0.41. She writes 0.4 as 0.41 by "padding" with a 1 in the hundredths column.',
      tier: 'confident',
      statements: [
        {
          text: 'Maya is right. You can pad a shorter decimal with any digit to make it the same length as the longer one.',
          isMisconception: true,
        },
        {
          text: 'Actually you may only pad with zeros. A trailing zero does not change the value, but writing a 1 in the hundredths column would change 0.4 (which is 0.40) into 0.41, a larger number.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'dcp-mis-pad-non-zero',
    },
    // Confident 8: missing-step pattern (number-line based reasoning)
    {
      id: 'dcp-q15',
      type: 'missing-step',
      stem: 'Fill in the missing step. The class is placing 0.6 and 0.605 on the number line between 0.6 and 0.7 to decide which is larger.',
      tier: 'confident',
      steps: [
        'Pad 0.6 with trailing zeros so it has three digits after the point: 0.6 becomes 0.600.',
        'Compare the tenths column. Both 0.600 and 0.605 have 6 tenths, so the tenths column ties.',
        'Compare the hundredths column. Both 0.600 and 0.605 have 0 hundredths, so the hundredths column ties.',
        null,
        'Because 5 thousandths is more than 0 thousandths, 0.605 is the larger of the two and sits to the right of 0.6 on the number line.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Compare the thousandths column. 0.600 has 0 thousandths and 0.605 has 5 thousandths.',
      xpValue: 20,
      hint: 'After the tenths and hundredths tie, the next column to the right decides.',
    },
    // Challenge 1: Bond-style multi-step word problem (athletics times to 2 dp ordering)
    {
      id: 'dcp-q16',
      type: 'numeric-entry',
      stem: 'A Sevenoaks school records four 100 metre sprint times in seconds: 13.4, 13.38, 13.42 and 13.405. The athletics teacher needs the fastest time to enter into a county form. Enter the fastest time, in seconds, rounded to two decimal places.',
      tier: 'challenge',
      correctAnswer: 13.38,
      tolerance: 0.005,
      unit: 'seconds',
      xpValue: 25,
      hint: 'Pad every time to 3 digits after the point: 13.400, 13.380, 13.420, 13.405. The smallest tenths digit wins; on a tie, look at hundredths, then thousandths. Then round the smallest value to two decimal places.',
    },
    // Challenge 2: negatives (mixed sign ordering, Bond shape)
    {
      id: 'dcp-q17',
      type: 'multiple-choice',
      stem: 'A weather station near Manchester logs four overnight temperatures in degrees Celsius: -0.4, -0.45, -0.405 and 0.04. Which row orders them from coldest to warmest?',
      tier: 'challenge',
      options: [
        '-0.45 < -0.405 < -0.4 < 0.04',
        '-0.4 < -0.405 < -0.45 < 0.04',
        '0.04 < -0.4 < -0.405 < -0.45',
        '-0.405 < -0.45 < -0.4 < 0.04',
      ],
      correctIndex: 0,
      xpValue: 25,
      misconceptionId: 'dcp-mis-negative-ordering',
      hint: 'For positive decimals, bigger digits mean bigger values. For negative decimals, bigger digits after the minus sign mean colder values, because a larger negative is further below zero.',
    },
    // Challenge 3: numeric-entry mixed units inside a single sentence
    {
      id: 'dcp-q18',
      type: 'numeric-entry',
      stem: 'A Lake District tour leader carries three water bottles weighing 0.5 kg, 0.450 kg and 0.475 kg. The heaviest bottle is given to the strongest walker. Enter the mass of the heaviest bottle, in kilograms.',
      tier: 'challenge',
      correctAnswer: 0.5,
      tolerance: 0.00005,
      unit: 'kg',
      xpValue: 25,
      misconceptionId: 'dcp-mis-longer-is-bigger',
      hint: 'Pad every mass to 3 digits after the point: 0.500, 0.450, 0.475. Compare the tenths first: 5, 4, 4. The tenths column tells you which is heaviest.',
    },
    // Challenge 4: MCQ mixed sign and equal-value spot
    {
      id: 'dcp-q19',
      type: 'multiple-choice',
      stem: 'A Dover ferry crew measures four tide heights below mean sea level in metres: -0.6, -0.60, -0.06 and -0.600. Which statement is true?',
      tier: 'challenge',
      options: [
        '-0.6, -0.60 and -0.600 are equal, and -0.06 is the warmest of all four because it is the least negative.',
        '-0.6, -0.60 and -0.600 are equal; -0.06 is shallower (closer to mean sea level) than the other three.',
        '-0.600 is the deepest because it has the most digits after the point.',
        '-0.06 is the deepest because the digit 6 comes after a placeholder zero.',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'dcp-mis-trailing-zero-changes-value',
      hint: 'Trailing zeros do not change a value, so -0.6 = -0.60 = -0.600. A leading zero after the point divides the value by 10, so -0.06 is one-tenth as far from zero as -0.6.',
    },
    // Challenge 5: numeric-entry Bond-style: ranking and gap
    {
      id: 'dcp-q20',
      type: 'numeric-entry',
      stem: 'Four Year 7 pupils sit the same maths paper. Aisha scores 0.7, Liam scores 0.68, Maya scores 0.705 and Tom scores 0.7 (all marks given as decimals out of 1). The top scorer and the bottom scorer are paired for revision. What is the difference between their two marks, as a decimal?',
      tier: 'challenge',
      correctAnswer: 0.025,
      tolerance: 0.00005,
      xpValue: 25,
      hint: 'Pad every mark to 3 decimal places: 0.700, 0.680, 0.705, 0.700. The top scorer is 0.705 and the bottom scorer is 0.680. Subtract: 0.705 - 0.680.',
    },
    // Challenge 6: MCQ Bond-style filter
    {
      id: 'dcp-q21',
      type: 'multiple-choice',
      stem: 'A scientist records the mass of three samples in grams: 0.085 g, 0.1 g and 0.09 g. The lab procedure says to discard any sample lighter than 0.09 g. How many samples must be discarded?',
      tier: 'challenge',
      options: ['0 samples', '1 sample', '2 samples', '3 samples'],
      correctIndex: 1,
      xpValue: 25,
      hint: 'Pad each mass to 3 decimal places: 0.085, 0.100, 0.090. Anything strictly less than 0.090 is discarded. Only 0.085 is below 0.090.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a question that asked pupils to order decimals of different lengths, where many pupils selected the decimal with the most digits after the point as the largest.
    {
      id: 'dcp-mis-longer-is-bigger',
      description:
        'I think a decimal with more digits after the point is always bigger, so 0.65 must be larger than 0.7 because 65 is larger than 7.',
      triggerAnswer: 'longer-is-bigger',
      correction:
        'In fact you compare decimals column by column starting from the tenths. The number of digits after the point does not decide.',
      reExplanation:
        'Pad both decimals to the same length: 0.70 versus 0.65. The tenths column decides first because 7 tenths is more than 6 tenths, so 0.7 is bigger. Length only counts if every leading column from the tenths onwards already ties. A longer decimal with smaller tenths is still the smaller value.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Ordering Decimals" page, "Common mistake" callout warning that trailing zeros do not change the value of a decimal.
    {
      id: 'dcp-mis-trailing-zero-changes-value',
      description:
        'I think 0.5 and 0.50 are different values because they have different numbers of digits after the point.',
      triggerAnswer: 'trailing-zero-changes-value',
      correction:
        'Actually trailing zeros after the decimal point are placeholders. They do not change the value, so 0.5 = 0.50 = 0.500.',
      reExplanation:
        '0.5 means 5 tenths. 0.50 means 5 tenths and 0 hundredths, which is still 5 tenths. Picture a fraction wall: 5/10, 50/100 and 500/1000 all fill the same length of the bar. Padding with trailing zeros is the standard way to line two decimals up for comparison, exactly because it leaves the value untouched.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 1F (Foundation, Non-calculator), commentary on a question where pupils treated a leading zero after the decimal point as a trailing zero and called 0.03 equal to 0.3.
    {
      id: 'dcp-mis-leading-zero-after-point',
      description:
        'I think a zero immediately after the decimal point does not change the value, so 0.03 must be the same as 0.3.',
      triggerAnswer: 'leading-zero-after-point',
      correction:
        'In fact a zero between the decimal point and a non-zero digit shifts the digit one column to the right, which divides the value by 10.',
      reExplanation:
        '0.3 has 3 in the tenths column, but 0.03 has 0 in the tenths and 3 in the hundredths. Three hundredths is ten times smaller than three tenths, so 0.03 is one-tenth as big as 0.3. Trailing zeros on the right do not change the value, but leading zeros immediately after the point are not trailing zeros and do matter.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 01 (Foundation, Non-calculator), commentary on an ordering question where pupils read only the digits after the point and ignored place value entirely.
    {
      id: 'dcp-mis-read-digits-only',
      description:
        'I order decimals by reading the digits after the point as a whole number, so 0.298 must come before 0.43 because 298 is less than 430.',
      triggerAnswer: 'read-digits-only',
      correction:
        'Actually each column after the point has its own place value. You must compare column by column, starting from the tenths.',
      reExplanation:
        'Pad to the same length: 0.430 versus 0.298. The tenths digit decides first because 4 tenths is more than 2 tenths, so 0.43 is bigger. Reading "298" against "430" treats the digits as if they all sat in the same column, but a 2 in the tenths is worth two-tenths while a 4 in the tenths is worth four-tenths. The columns are not equal.',
    },
    // Source: NCETM Secondary Magazine, Issue 122, article on persistent decimal misconceptions referencing Brown (CSMS) on pupils who pad shorter decimals with non-zero digits when comparing.
    {
      id: 'dcp-mis-pad-non-zero',
      description:
        'I pad a shorter decimal with any digit to make it the same length as the longer decimal, for example writing 0.4 as 0.41 to match 0.41.',
      triggerAnswer: 'pad-non-zero',
      correction:
        'In fact you may only pad with zeros. Any other digit changes the value because it fills a column with a non-zero amount.',
      reExplanation:
        '0.4 padded correctly with zeros becomes 0.40 or 0.400, all the same value. Writing 0.4 as 0.41 inserts a 1 into the hundredths column, which adds one hundredth and changes the value. The whole point of padding is to line columns up without altering values, and only the digit zero does that.',
    },
    // Source: NCETM "Misconceptions with the Key Objectives" reference document (Secondary, Number / Ordering), on pupils ordering negative decimals by treating the negative sign as a label rather than a direction.
    {
      id: 'dcp-mis-negative-ordering',
      description:
        'I order negative decimals the same way as positive ones, so -0.4 must be smaller than -0.45 because 0.4 is smaller than 0.45.',
      triggerAnswer: 'negative-ordering',
      correction:
        'Actually the bigger the digits after the minus sign, the more negative the value. So -0.45 is smaller than -0.4 because it is further below zero.',
      reExplanation:
        'Think of a number line. 0.45 sits to the right of 0.4 on the positive side. Reflect both through zero: -0.45 sits to the left of -0.4 on the negative side, which means -0.45 is smaller. The general rule is that for two negatives, the one with the bigger absolute value is the smaller number.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const decimalsComparingPrecisionZoneNodes = [decimalsComparingPrecision]
