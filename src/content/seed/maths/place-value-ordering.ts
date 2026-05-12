import type { SkillNode } from '@/types/content'

export const placeValueOrdering: SkillNode = {
  id: 'maths-place-value-ordering',
  title: 'Ordering Integers and Decimals',
  description:
    'Use the number line as a model for ordering integers and decimals, including negatives. Compare values column by column, pad decimals to the same precision, and read the symbols =, not equal, less than, greater than, less than or equal to, greater than or equal to.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-place-value',
  zoneName: 'Place Value',
  tier: 'confident',
  prerequisites: ['maths-place-value-whole-numbers'],
  curriculum: {
    ks3Objective:
      'Use the number line as a model for ordering of the real numbers; use the symbols =, not equal, less than, greater than, less than or equal to, greater than or equal to.',
    awardingBodies: {
      aqa: 'N1 Order positive and negative integers, decimals and fractions (GCSE Mathematics 8300)',
      edexcel: 'N1 Order positive and negative integers, decimals and fractions (GCSE Mathematics 1MA1)',
      ocr: '1.01a Order positive and negative integers, decimals and fractions (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'pvo-scene-number-line',
      title: 'The Number Line as the Master Ruler',
      type: 'number-line',
      instructions:
        'Read how every real number sits at one fixed point on the line. Numbers grow as you read to the right, so any value further right is the larger value. On the line below, -7 sits to the left of -3, which sits to the left of 0, which sits to the left of 3. So the order from smallest to largest reads -7, -3, 0, 3, 7. The same line settles all comparison questions: pick the value further right.',
      data: {
        from: -10,
        to: 10,
        step: 1,
        markers: [
          { value: -7, label: '-7' },
          { value: -3, label: '-3' },
          { value: 0, label: '0' },
          { value: 3, label: '3' },
          { value: 7, label: '7' },
        ],
        statements: [
          { text: '-7 < -3 because -7 sits further left.' },
          { text: '-3 < 0 because -3 sits left of zero.' },
          { text: '7 > 3 because 7 sits further right.' },
        ],
        callout:
          'Right means larger. The number with the greater absolute value is further from zero, but only positives grow as they move from zero. Negatives shrink as they move further left.',
      },
    },
    {
      id: 'pvo-scene-integer-columns',
      title: 'Comparing Integers Column by Column',
      type: 'simulation',
      instructions:
        'Read how a column-by-column line up settles any two whole numbers. First step: the integer with more digits is the larger one (47 has two digits, 245 has three, so 47 < 245). When the digit counts match, line the numbers up on the right so the units columns align. Then walk left to right and stop at the first column where the digits differ. The number with the larger digit there is the larger value.',
      data: {
        comparisons: [
          {
            left: '47',
            right: '245',
            verdict: '47 < 245',
            reason: '245 has 3 digits, 47 has only 2, so 245 is in the hundreds and 47 is in the tens.',
          },
          {
            left: '3,182',
            right: '3,159',
            verdict: '3,182 > 3,159',
            reason:
              'Both are 4-digit. Thousands match (3 = 3), hundreds match (1 = 1). At tens, 8 beats 5, so 3,182 wins.',
          },
          {
            left: '5,000',
            right: '4,999',
            verdict: '5,000 > 4,999',
            reason:
              'Thousands differ first: 5 beats 4, so the lower thousands digit loses, no matter how big the rest looks.',
          },
        ],
        callout:
          'For whole numbers, more digits always means larger. With matching digit counts, the leftmost differing digit decides.',
      },
    },
    {
      id: 'pvo-scene-decimal-pad',
      title: 'Decimals: Pad to the Same Precision',
      type: 'simulation',
      instructions:
        'Read how to compare decimals safely. Line the numbers up by the decimal point, then pad the shorter decimal with trailing zeros so both have the same number of decimal places. 0.7 versus 0.65 becomes 0.70 versus 0.65. Now compare like whole numbers in the same columns: tenths column, 7 beats 6, so 0.70 > 0.65, meaning 0.7 > 0.65. The trick of "longer decimal is larger" fails this case, but padding never does.',
      data: {
        comparisons: [
          {
            left: '0.7',
            right: '0.65',
            padded: '0.70 vs 0.65',
            verdict: '0.7 > 0.65',
            reason: 'Tenths: 7 > 6, so 0.70 > 0.65. The two decimal places of 0.65 do not make it bigger.',
          },
          {
            left: '0.45',
            right: '0.5',
            padded: '0.45 vs 0.50',
            verdict: '0.45 < 0.5',
            reason: 'Tenths: 4 < 5, so 0.45 < 0.50. Stop at the first differing column.',
          },
          {
            left: '-3.5',
            right: '-3.45',
            padded: '-3.50 vs -3.45',
            verdict: '-3.5 < -3.45',
            reason:
              'Ignore signs first: 3.50 > 3.45, so 3.5 is further from zero. With negatives, further from zero is smaller, so -3.5 < -3.45.',
          },
        ],
        callout:
          'Trailing zeros after the decimal point change nothing about value: 0.7 = 0.70 = 0.700. They only line the columns up.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'pvo-worked-1',
      title: 'Compare 0.7 and 0.65 using the symbols =, <, >',
      steps: [
        {
          explanation:
            'Notice that 0.7 has one decimal place and 0.65 has two. Pad 0.7 with a trailing zero so both have two decimal places.',
          maths: '0.7 = 0.70',
        },
        {
          explanation: 'Line the numbers up on the decimal point and look at the tenths column first.',
          maths: '0.70 vs 0.65 → tenths: 7 vs 6',
        },
        {
          explanation:
            'The tenths digits already differ, so the decision is made here. 7 > 6, so 0.70 > 0.65, which means 0.7 > 0.65.',
          maths: '0.7 > 0.65',
        },
        {
          explanation:
            'State the answer with the correct symbol. The wider end of the symbol > faces 0.7, the larger value.',
          maths: '0.7 > 0.65',
        },
      ],
    },
    {
      id: 'pvo-worked-2',
      title: 'Order from smallest to largest: -3.5, -3.45, 0.7, 0.65, -7',
      steps: [
        {
          explanation:
            'Split the list by sign first. Negatives are smaller than zero, positives are larger. Negatives: -3.5, -3.45, -7. Positives: 0.7, 0.65.',
        },
        {
          explanation:
            'Inside the positives, pad to two decimal places: 0.7 becomes 0.70. Compare tenths: 7 > 6, so 0.7 > 0.65. Smallest positive first: 0.65, then 0.7.',
          maths: '0.65 < 0.7',
        },
        {
          explanation:
            'Inside the negatives, ignore signs and rank by distance from zero: 3.45 < 3.50 < 7. Distances: 3.45, 3.5, 7.',
        },
        {
          explanation:
            'Flip back to negatives. The number furthest from zero on the negative side is the smallest. So -7 < -3.5 < -3.45.',
          maths: '-7 < -3.5 < -3.45',
        },
        {
          explanation:
            'Stitch the two halves together with the negatives first. The full ordering reads -7, -3.5, -3.45, 0.65, 0.7.',
          maths: '-7 < -3.5 < -3.45 < 0.65 < 0.7',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pvo-q1',
      type: 'multiple-choice',
      stem: 'Which symbol makes the statement true: 47 ? 245.',
      tier: 'core',
      options: ['>', '<', '=', '≥'],
      correctIndex: 1,
      xpValue: 10,
      hint: '245 has more digits than 47, so it is in the hundreds while 47 is in the tens.',
    },
    {
      id: 'pvo-q2',
      type: 'multiple-choice',
      stem: 'Which symbol makes the statement true: 0.7 ? 0.65.',
      tier: 'core',
      options: ['<', '=', '>', '≠ only'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pvo-mis-longer-decimal',
      hint: 'Pad 0.7 to 0.70 so both decimals have two decimal places, then compare tenths.',
    },
    {
      id: 'pvo-q3',
      type: 'multiple-choice',
      stem: 'Which of these numbers is the smallest?',
      tier: 'core',
      options: ['-3', '-7', '0', '3'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pvo-mis-negative-magnitude',
      hint: 'On a number line, smaller means further to the left.',
    },
    {
      id: 'pvo-q4',
      type: 'numeric-entry',
      stem: 'How many of these statements are true: 0.7 = 0.70, 0.7 > 0.65, 0.45 > 0.5, -7 < -3? Enter the count as a whole number from 0 to 4.',
      tier: 'core',
      correctAnswer: 3,
      xpValue: 10,
      misconceptionId: 'pvo-mis-trailing-zero-changes-value',
      hint: 'Check each in turn. Trailing zeros after the decimal point do not change value.',
    },
    {
      id: 'pvo-q5',
      type: 'multiple-choice',
      stem: 'Which symbol replaces the question mark: -3 ? -7.',
      tier: 'core',
      options: ['=', '<', '≤', '>'],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'pvo-mis-negative-magnitude',
      hint: '-3 sits to the right of -7 on the number line, closer to zero.',
    },
    {
      id: 'pvo-q6',
      type: 'multiple-choice',
      stem: 'Which statement reads correctly?',
      tier: 'core',
      options: [
        '5 < 3 reads as five is less than three.',
        '3 > 5 reads as three is greater than five.',
        '3 < 5 reads as three is less than five.',
        '5 = 3 reads as five equals three.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pvo-mis-arrow-eats-bigger',
      hint: 'The wider end of < or > always faces the larger value. Read left to right.',
    },
    {
      id: 'pvo-q7',
      type: 'drag-order',
      stem: 'Place these temperatures in order from coldest to warmest.',
      tier: 'core',
      items: ['2°C', '-5°C', '0°C', '-1°C'],
      correctOrder: [1, 3, 2, 0],
      xpValue: 15,
      misconceptionId: 'pvo-mis-mixed-sign-freeze',
    },
    {
      id: 'pvo-q8',
      type: 'multiple-choice',
      stem: 'Which list is in order from smallest to largest?',
      tier: 'confident',
      options: [
        '0.4, 0.39, 0.5, 0.65',
        '0.39, 0.4, 0.5, 0.65',
        '0.39, 0.4, 0.65, 0.5',
        '0.65, 0.5, 0.4, 0.39',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'pvo-mis-longer-decimal',
      hint: 'Pad each value to two decimal places, then compare in tenths and hundredths columns.',
    },
    {
      id: 'pvo-q9',
      type: 'numeric-entry',
      stem: 'How many of the integers -4, -3, -2, -1, 0, 1, 2 satisfy -3 ≤ n < 2?',
      tier: 'confident',
      correctAnswer: 5,
      xpValue: 15,
      hint: 'The ≤ on the left means -3 is included. The < on the right means 2 is not.',
    },
    {
      id: 'pvo-q10',
      type: 'multiple-choice',
      stem: 'Which symbol makes the statement true: -3.5 ? -3.45.',
      tier: 'confident',
      options: ['>', '=', '<', 'cannot be decided'],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pvo-mis-negative-magnitude',
      hint: 'Pad to -3.50 versus -3.45. Then remember: with negatives, further from zero is smaller.',
    },
    {
      id: 'pvo-q11',
      type: 'spot-misconception',
      stem: 'Asma says 0.45 > 0.5 because 0.45 has more digits, so it must be the bigger decimal.',
      tier: 'confident',
      statements: [
        {
          text: 'Her reasoning is sound. A decimal with more digits after the point is always larger.',
          isMisconception: true,
        },
        {
          text: 'Her reasoning is wrong. Pad to 0.45 versus 0.50, then in the tenths column 4 < 5, so 0.45 < 0.5.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pvo-mis-longer-decimal',
    },
    {
      id: 'pvo-q12',
      type: 'multiple-choice',
      stem: 'On a school trip, four pupils record their height change in centimetres over a year: Ben +3.2, Ciara -1.5, Dev +0.7, Ella -1.45. Who grew the most?',
      tier: 'confident',
      options: ['Ben', 'Ciara', 'Dev', 'Ella'],
      correctIndex: 0,
      xpValue: 15,
      hint: 'Greatest growth means the largest positive value. Negative values are losses, not gains.',
    },
    {
      id: 'pvo-q13',
      type: 'multiple-choice',
      stem: 'Which of these statements is false?',
      tier: 'confident',
      options: [
        '0.7 = 0.70',
        '-2 > -5',
        '0.65 ≥ 0.7',
        '4 ≤ 4',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pvo-mis-trailing-zero-changes-value',
      hint: 'The ≥ sign means greater than or equal to. Compare 0.65 to 0.70.',
    },
    {
      id: 'pvo-q14',
      type: 'numeric-entry',
      stem: 'List the integers n that satisfy -2 < n ≤ 3, then enter how many there are.',
      tier: 'confident',
      correctAnswer: 5,
      xpValue: 15,
      hint: 'The < on the left excludes -2. The ≤ on the right includes 3. List them: -1, 0, 1, 2, 3.',
    },
    {
      id: 'pvo-q15',
      type: 'spot-misconception',
      stem: 'Lewis is asked to put 4, -2, 0.5, -1.5, 3 in order from smallest to largest. He writes "4" because 4 is the largest, so it is the answer.',
      tier: 'confident',
      statements: [
        {
          text: 'Lewis is right. The largest value is the answer to an ordering question.',
          isMisconception: true,
        },
        {
          text: 'Lewis is wrong. Ordering means writing every value in sequence: -2, -1.5, 0.5, 3, 4.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pvo-mis-pick-largest-only',
    },
    {
      id: 'pvo-q16',
      type: 'drag-order',
      stem: 'Place these values in order from smallest to largest: 0.65, -3.5, 0.7, -3.45, -7.',
      tier: 'challenge',
      items: ['0.65', '-3.5', '0.7', '-3.45', '-7'],
      correctOrder: [4, 1, 3, 0, 2],
      xpValue: 25,
      misconceptionId: 'pvo-mis-mixed-sign-freeze',
    },
    {
      id: 'pvo-q17',
      type: 'missing-step',
      stem: 'Fill in the missing step. Show that -3.5 < -3.45.',
      tier: 'challenge',
      steps: [
        'Pad -3.5 to two decimal places: -3.5 = -3.50.',
        'Ignore the signs for a moment and compare 3.50 with 3.45.',
        null,
        'So 3.5 sits further from zero than 3.45 does.',
        'On the negative side of the line, further from zero means smaller, so -3.5 < -3.45.',
      ],
      missingStepIndex: 2,
      correctStep: 'Tenths match (5 = 4 fails, 5 > 4), so 3.50 > 3.45.',
      xpValue: 25,
    },
    {
      id: 'pvo-q18',
      type: 'numeric-entry',
      stem: 'A weather station in the Lake District records dawn temperatures over five days: -2.5°C, 0.5°C, -1.45°C, -2.05°C, 1°C. Enter the lowest temperature in degrees Celsius (use a minus sign and a decimal point).',
      tier: 'challenge',
      correctAnswer: -2.5,
      xpValue: 25,
      misconceptionId: 'pvo-mis-negative-magnitude',
      hint: 'Among negatives, the value furthest from zero is the smallest. Pad to two decimal places to compare safely.',
    },
    {
      id: 'pvo-q19',
      type: 'numeric-entry',
      stem: 'Sam records pocket-money balances in pounds at the end of four weeks: £1.05, £0.95, -£0.40 (overdrawn), £1.50. Enter the smallest balance in pounds (use a minus sign and a decimal point).',
      tier: 'challenge',
      correctAnswer: -0.4,
      xpValue: 20,
      hint: 'Overdrawn means a negative balance. Negatives are smaller than every positive.',
    },
    {
      id: 'pvo-q20',
      type: 'numeric-entry',
      stem: 'How many integers n satisfy both -5 ≤ n ≤ 5 and n ≠ 0?',
      tier: 'challenge',
      correctAnswer: 10,
      xpValue: 25,
      hint: 'There are 11 integers from -5 to 5 inclusive. The ≠ condition removes one of them.',
    },
    {
      id: 'pvo-q21',
      type: 'multiple-choice',
      stem: 'A pupil writes: "0.123 > 0.45 because 123 is bigger than 45, and the decimal point only separates the parts." Which option best diagnoses the mistake?',
      tier: 'challenge',
      options: [
        'The pupil treated the decimal as if the point did not matter, comparing 123 to 45 instead of comparing tenths first.',
        'The pupil should have rounded both decimals to one decimal place before comparing.',
        'The pupil is right. 0.123 is the larger value because it has more digits.',
        'The pupil should have used the ≥ symbol to be safe.',
      ],
      correctIndex: 0,
      xpValue: 25,
      misconceptionId: 'pvo-mis-drop-point',
      hint: 'Pad to three decimal places: 0.123 versus 0.450. The tenths column decides: 4 > 1.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Maths Foundation tier examiner report June 2018, Paper 1 Q2 on decimal ordering
    {
      id: 'pvo-mis-longer-decimal',
      description:
        'Believing that the decimal with more digits after the point is always the larger value, so 0.65 beats 0.7 because 65 looks bigger than 7.',
      triggerAnswer: 'longer-decimal',
      correction:
        'In fact a longer decimal can be smaller. Pad both values to the same precision, then compare column by column from the tenths.',
      reExplanation:
        'Pad 0.7 to 0.70 so both have two decimal places, then compare tenths first. 7 tenths is more than 6 tenths, so 0.70 > 0.65 and therefore 0.7 > 0.65. The extra digit in 0.65 only fills the hundredths column. It cannot rescue a smaller tenths digit.',
    },
    // Source: CGP KS3 Maths Study Guide p.16 Common mistake box on negative numbers
    {
      id: 'pvo-mis-negative-magnitude',
      description:
        'Treating the bigger-looking negative number as the larger value, so saying -7 > -3 because 7 > 3.',
      triggerAnswer: 'negative-magnitude',
      correction:
        'In fact a negative with greater absolute value sits further left on the line, so it is the smaller value.',
      reExplanation:
        'Sketch the number line. -7 is seven steps left of zero and -3 is three steps left of zero, so -7 sits further left than -3. On the line, further left means smaller. So -7 < -3, even though 7 looks larger than 3 on its own.',
    },
    // Source: CGP KS3 Maths Workbook p.5 callout on inequality symbols
    {
      id: 'pvo-mis-arrow-eats-bigger',
      description:
        'Reading the symbol < as if it eats the larger number, or simply guessing the direction of < and > rather than using a rule.',
      triggerAnswer: 'arrow-eats-bigger',
      correction:
        'In fact the wider end of < or > always faces the larger value. Read left to right: 3 < 5 says three is less than five.',
      reExplanation:
        'Picture < and > as opening jaws. The narrow point is the smaller end and faces the smaller number. So 3 < 5 reads as three is less than five, and 5 > 3 reads as five is greater than three. Both statements say the same thing in different word order.',
    },
    // Source: Edexcel GCSE Maths Foundation tier examiner report November 2021, Paper 1F Q4 on mixed integers
    {
      id: 'pvo-mis-mixed-sign-freeze',
      description:
        'Freezing or guessing when an ordering list mixes positives, negatives and zero, often putting all negatives at the end.',
      triggerAnswer: 'mixed-sign-freeze',
      correction:
        'In fact mixed signs are decided on the number line. Every negative sits left of zero, every positive sits right of zero.',
      reExplanation:
        'For -5°C, -1°C, 0°C, 2°C, sketch the line. -5°C sits the furthest left, then -1°C, then 0°C, then 2°C the furthest right. So coldest to warmest reads -5°C, -1°C, 0°C, 2°C. Always sort negatives among themselves first using distance from zero, then place zero, then sort positives.',
    },
    // Source: AQA GCSE Maths Foundation tier examiner report June 2019, Paper 1 Q1 on decimal place value
    {
      id: 'pvo-mis-drop-point',
      description:
        'Treating the digits after the decimal point as if they were a whole number, so reading 0.123 as bigger than 0.45 because 123 > 45.',
      triggerAnswer: 'drop-point',
      correction:
        'In fact the decimal point fixes the value of every digit. Pad to the same precision and compare column by column.',
      reExplanation:
        'Pad 0.45 to 0.450 so both decimals have three decimal places. Now compare 0.123 with 0.450 in the tenths column first: 1 < 4, so 0.123 < 0.45. The "123 > 45" reasoning ignores that 1 means 1 tenth, while 4 means 4 tenths.',
    },
    // Source: CGP KS3 Maths Study Guide p.18 Common mistake box on ordering lists
    {
      id: 'pvo-mis-pick-largest-only',
      description:
        'Reading "order from smallest to largest" as a request for one extreme value, then writing only the largest or smallest.',
      triggerAnswer: 'pick-largest-only',
      correction:
        'In fact ordering means listing every value in sequence, not picking one. The answer is a full sorted list separated by commas.',
      reExplanation:
        'For 4, -2, 0.5, -1.5, 3, the full sorted list from smallest to largest is -2, -1.5, 0.5, 3, 4. Every original value appears exactly once, with the smallest first. If a question asks for the largest only, it will say so directly.',
    },
    // Source: Edexcel GCSE Maths examiner report June 2017, Paper 1F Q2 on equivalent decimals
    {
      id: 'pvo-mis-trailing-zero-changes-value',
      description:
        'Believing that 0.7 and 0.70 are different values, so reading the longer one as the larger or refusing to compare them at all.',
      triggerAnswer: 'trailing-zero-changes-value',
      correction:
        'In fact trailing zeros after the decimal point do not change value. They only line columns up for comparison.',
      reExplanation:
        '0.7 means 7 tenths. 0.70 means 7 tenths and 0 hundredths. Both equal 7/10, so 0.7 = 0.70. Padding with trailing zeros is a safe step that helps with column lining; it never alters the number itself.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const placeValueOrderingZoneNodes = [placeValueOrdering]
