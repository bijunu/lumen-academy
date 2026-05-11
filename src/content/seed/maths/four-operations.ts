import type { SkillNode } from '@/types/content'

export const negativeNumbersAddSubtract: SkillNode = {
  id: 'maths-four-operations-negative-numbers-add-subtract',
  title: 'Adding and Subtracting Negative Numbers',
  description:
    'Add and subtract positive and negative integers on a number line, with counter pairs, and using signed-arithmetic rules. Recognise that subtracting a negative is the same as adding a positive, and order signed integers from smallest to largest.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-four-operations',
  zoneName: 'Four Operations',
  tier: 'core',
  prerequisites: [],
  curriculum: {
    ks3Objective:
      'Use the four operations, including formal written methods, applied to integers, decimals, proper and improper fractions, and mixed numbers, all both positive and negative.',
    awardingBodies: {
      aqa: 'N2 Apply the four operations, including formal written methods, to integers (positive and negative)',
      edexcel: 'N2 The four operations applied to integers, both positive and negative',
      ocr: '1.02a Apply the four operations to directed numbers',
    },
  },
  scenes: [
    {
      id: 'negas-scene-number-line-walk',
      title: 'Walk the Number Line',
      type: 'number-line',
      instructions:
        'Look at how each calculation lays out as a walk along the line. Starting at -3 and adding 5 sends the marker five places to the right and lands on 2. Starting at 2 and subtracting 7 sends it seven places to the left and lands on -5. Subtracting a negative reverses direction once more, so -5 - (-4) lands on -1.',
      data: {
        range: [-10, 10],
        step: 1,
        startMark: -3,
        labelledTicks: [-10, -5, 0, 5, 10],
        examples: [
          {
            calculation: '-3 + 5',
            from: -3,
            direction: 'right',
            steps: 5,
            to: 2,
          },
          {
            calculation: '2 - 7',
            from: 2,
            direction: 'left',
            steps: 7,
            to: -5,
          },
          {
            calculation: '-5 - (-4)',
            from: -5,
            direction: 'right',
            steps: 4,
            to: -1,
          },
        ],
        notes:
          'Adding any number moves the marker to the right. Subtracting any number moves it to the left. Subtracting a negative reverses direction once more, which sends you back to the right.',
      },
    },
    {
      id: 'negas-scene-temperature-tracker',
      title: 'Temperature in Tunbridge Wells',
      type: 'simulation',
      instructions:
        'See how the garden temperature in Tunbridge Wells crosses zero through the day. At 6am it sits at -3 with frost on the lawn, climbs to 1 by 9am, peaks at 8 around noon, falls to 4 by 6pm, and dips back to -1 by 11pm. Crossing zero on the thermometer obeys the same rules as crossing zero on a number line.',
      data: {
        contextLabel: 'Overnight to midday in a Tunbridge Wells back garden',
        unit: 'degrees Celsius',
        range: [-15, 25],
        step: 0.5,
        readings: [
          { time: '6am', temperature: -3, note: 'frost on the lawn' },
          { time: '9am', temperature: 1, note: 'frost has melted' },
          { time: 'noon', temperature: 8, note: 'sunny start to the day' },
          { time: '6pm', temperature: 4, note: 'shadow has returned' },
          { time: '11pm', temperature: -1, note: 'just below freezing again' },
        ],
        notes:
          'Crossing zero on the thermometer is the same as crossing zero on a number line. The negative readings sit below zero and obey the same rules as the positive readings above it.',
      },
    },
    {
      id: 'negas-scene-counter-pairs',
      title: 'Counter Pairs',
      type: 'diagram',
      instructions:
        'Look at how a positive counter and a negative counter cancel out as a pair, leaving zero behind. For 5 + (-3), three pairs cancel and two positives remain, giving 2. For 6 + (-8), six pairs cancel and two negatives are left over, giving -2. The answer is whatever the surviving colour says.',
      data: {
        positiveColour: '#22C55E',
        negativeColour: '#EF4444',
        examples: [
          {
            sum: '5 + (-3)',
            positives: 5,
            negatives: 3,
            pairsCancelled: 3,
            remaining: { positives: 2, negatives: 0 },
            result: 2,
          },
          {
            sum: '(-4) + (-2)',
            positives: 0,
            negatives: 6,
            pairsCancelled: 0,
            remaining: { positives: 0, negatives: 6 },
            result: -6,
          },
          {
            sum: '6 + (-8)',
            positives: 6,
            negatives: 8,
            pairsCancelled: 6,
            remaining: { positives: 0, negatives: 2 },
            result: -2,
          },
        ],
        notes:
          'Each green counter cancels with a red counter. Whatever remains, positive or negative, is the answer.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'negas-worked-1',
      title: 'Computing -3 + 8 on the number line',
      steps: [
        {
          explanation:
            'We want to work out -3 + 8. Read it as start at -3, then add 8.',
          maths: '-3 + 8',
        },
        {
          explanation: 'Place the marker on the number line at -3.',
          maths: 'start at -3',
        },
        {
          explanation:
            'Adding 8 means moving 8 places to the right.',
          maths: 'move right 8',
        },
        {
          explanation:
            'Step 1 lands on -2. Step 2 lands on -1. Step 3 lands on 0.',
          maths: '-3 to -2 to -1 to 0',
        },
        {
          explanation: 'From 0, the next 5 steps land on 1, 2, 3, 4 and 5.',
          maths: '0 to 5',
        },
        {
          explanation: 'The marker now sits on 5, so -3 + 8 = 5.',
          maths: '-3 + 8 = 5',
        },
      ],
    },
    {
      id: 'negas-worked-2',
      title: 'Computing 5 - (-4) by rewriting the subtraction',
      steps: [
        {
          explanation: 'We want to work out 5 - (-4).',
          maths: '5 - (-4)',
        },
        {
          explanation:
            'Subtracting a negative is the same as adding a positive. The two minus signs cancel.',
          maths: '- (-4) becomes + 4',
        },
        {
          explanation: 'So 5 - (-4) is the same as 5 + 4.',
          maths: '5 - (-4) = 5 + 4',
        },
        {
          explanation: 'Adding 4 to 5 gives 9.',
          maths: '5 + 4 = 9',
        },
        {
          explanation:
            'Check on the number line: start at 5 and move 4 places to the right. The marker lands on 9, which matches.',
          maths: '5 to 9 (right by 4)',
        },
        {
          explanation: 'So 5 - (-4) = 9.',
          maths: '5 - (-4) = 9',
        },
      ],
    },
    {
      id: 'negas-worked-3',
      title: 'Walking -2 + 6 - (-3) - 4 step by step on the number line',
      steps: [
        {
          explanation:
            'We want to compute -2 + 6 - (-3) - 4. We will walk it term by term on the number line.',
          maths: '-2 + 6 - (-3) - 4',
        },
        {
          explanation: 'Place the marker at -2 to start.',
          maths: 'start at -2',
        },
        {
          explanation:
            'The first operation is + 6. Move 6 places to the right. From -2 we land on 4.',
          maths: '-2 + 6 = 4',
        },
        {
          explanation:
            'The next part is - (-3). Subtracting a negative is the same as adding a positive, so this is + 3. Move 3 more places right.',
          maths: '4 - (-3) = 4 + 3 = 7',
        },
        {
          explanation:
            'The last part is - 4. Move 4 places to the left. From 7 we land on 3.',
          maths: '7 - 4 = 3',
        },
        {
          explanation: 'So -2 + 6 - (-3) - 4 = 3.',
          maths: '-2 + 6 - (-3) - 4 = 3',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'negas-q1',
      type: 'multiple-choice',
      stem: 'What is -3 + 5?',
      tier: 'core',
      options: ['8', '2', '-2', '-8'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Start at -3 on a number line and move 5 places to the right.',
      misconceptionId: 'negas-mis-magnitude-before-sign',
    },
    {
      id: 'negas-q21',
      type: 'multiple-choice',
      stem: 'What is (-5) + (-8)?',
      tier: 'core',
      options: ['3', '13', '-13', '-3'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Adding a negative moves you further left. Two negatives in a sum stay negative.',
      misconceptionId: 'negas-mis-two-negatives-positive',
    },
    {
      id: 'negas-q2',
      type: 'multiple-choice',
      stem: 'Four overnight readings on a Tunbridge Wells thermometer are -2, -8, 0 and 3 degrees Celsius. Which reading is the coldest?',
      tier: 'core',
      options: ['-2', '-8', '0', '3'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'On a number line, the further left a number sits, the smaller it is.',
      misconceptionId: 'negas-mis-larger-negative-bigger',
    },
    {
      id: 'negas-q3',
      type: 'numeric-entry',
      stem: 'Compute -7 + 4. Enter your answer as an integer.',
      tier: 'core',
      correctAnswer: -3,
      xpValue: 10,
      hint: 'Start at -7 on a number line and move 4 places to the right.',
    },
    {
      id: 'negas-q4',
      type: 'numeric-entry',
      stem: 'Compute 6 - 9. Enter your answer as an integer.',
      tier: 'core',
      correctAnswer: -3,
      xpValue: 10,
      hint: 'Start at 6 and move 9 places to the left. You will cross zero.',
      misconceptionId: 'negas-mis-cannot-subtract-larger',
    },
    {
      id: 'negas-q5',
      type: 'numeric-entry',
      stem: 'Compute (-4) + (-3). Enter your answer as an integer.',
      tier: 'core',
      correctAnswer: -7,
      xpValue: 10,
      hint: 'Adding a negative moves you further left. Two negatives in a sum stay negative.',
      misconceptionId: 'negas-mis-two-negatives-positive',
    },
    {
      id: 'negas-q6',
      type: 'slider-explore',
      stem: 'Set the marker on the number line to -3.',
      tier: 'core',
      min: -10,
      max: 10,
      step: 1,
      correctRange: [-3, -3],
      label: 'Marker position',
      xpValue: 10,
      hint: 'On the line, -3 sits three places to the left of zero, between -2 and -4.',
    },
    {
      id: 'negas-q7',
      type: 'multiple-choice',
      stem: 'Pick the true statement about adding and subtracting negatives.',
      tier: 'core',
      options: [
        'Subtracting a negative is the same as adding a positive.',
        'Subtracting a negative is the same as adding a negative.',
        'Adding a negative is the same as adding a positive.',
        'Two negatives in a sum always make a positive.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'negas-mis-two-negatives-positive',
    },
    {
      id: 'negas-q8',
      type: 'multiple-choice',
      stem: 'A diver is exploring at -12 metres below sea level. She rises 7 metres. What is her new depth in metres?',
      tier: 'confident',
      options: ['5', '19', '-19', '-5'],
      correctIndex: 3,
      xpValue: 15,
      hint: 'Rising means adding. Start at -12 and move 7 places to the right.',
      misconceptionId: 'negas-mis-magnitude-before-sign',
    },
    {
      id: 'negas-q9',
      type: 'numeric-entry',
      stem: 'Compute (-9) - (-4). Enter your answer as an integer.',
      tier: 'confident',
      correctAnswer: -5,
      xpValue: 15,
      hint: 'Subtracting a negative is the same as adding a positive. So (-9) - (-4) is the same as -9 + 4.',
      misconceptionId: 'negas-mis-minus-minus-minus',
    },
    {
      id: 'negas-q10',
      type: 'multiple-choice',
      stem: 'Which calculation gives the largest result?',
      tier: 'confident',
      options: ['8 - (-3)', '-8 - 3', '8 + (-3)', '-8 + 3'],
      correctIndex: 0,
      xpValue: 15,
      hint: 'Work each one out. Two are negative, one is small and positive, one is the largest.',
      misconceptionId: 'negas-mis-minus-minus-minus',
    },
    {
      id: 'negas-q11',
      type: 'numeric-entry',
      stem: 'Compute 12 + (-15) - (-4). Enter your answer as an integer.',
      tier: 'confident',
      correctAnswer: 1,
      xpValue: 15,
      hint: 'Rewrite each part. 12 + (-15) is 12 - 15. Then - (-4) becomes + 4.',
    },
    {
      id: 'negas-q12',
      type: 'multiple-choice',
      stem: 'Which is the correct rewriting of -8 - (-5) - (-3) without any double signs?',
      tier: 'confident',
      options: ['-8 + 5 - 3', '8 + 5 + 3', '-8 + 5 + 3', '-8 - 5 - 3'],
      correctIndex: 2,
      xpValue: 15,
      hint: 'Each "- (-N)" becomes "+ N". The leading -8 keeps its sign.',
      misconceptionId: 'negas-mis-minus-minus-minus',
    },
    {
      id: 'negas-q13',
      type: 'spot-misconception',
      stem: 'Tom says: "(-6) + (-7) is +13 because two negatives make a positive."',
      tier: 'confident',
      statements: [
        {
          text: 'Tom is right. Two negatives in any sum cancel out, so the result is positive 13.',
          isMisconception: true,
        },
        {
          text: 'Tom is wrong. Adding two negatives moves you further left on the number line, so the answer is -13.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'negas-mis-two-negatives-positive',
    },
    {
      id: 'negas-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step in this worked solution. Compute 4 - (-9).',
      tier: 'confident',
      steps: [
        'Read the calculation: 4 take away negative 9.',
        null,
        'So 4 - (-9) is the same as 4 + 9.',
        '4 + 9 = 13.',
        'So 4 - (-9) = 13.',
      ],
      missingStepIndex: 1,
      correctStep:
        'Subtracting a negative is the same as adding a positive, so the two minus signs in front of the 9 cancel.',
      xpValue: 20,
    },
    {
      id: 'negas-q15',
      type: 'multiple-choice',
      stem: 'At 6am the temperature in a Sevenoaks back garden was -3 degrees Celsius. By midday it had risen by 11 degrees, then dropped 5 degrees by sunset. What was the temperature at sunset, in degrees Celsius?',
      tier: 'challenge',
      options: ['3', '9', '13', '-19'],
      correctIndex: 0,
      xpValue: 25,
      hint: 'Work it in two steps. First find the midday temperature, then the sunset temperature.',
      misconceptionId: 'negas-mis-magnitude-before-sign',
    },
    {
      id: 'negas-q16',
      type: 'spot-misconception',
      stem: 'Aisha says: "-12 must be greater than -5 because 12 is greater than 5."',
      tier: 'challenge',
      statements: [
        {
          text: 'Aisha is right. The number with the larger digit must be the larger value, even when both are negative.',
          isMisconception: true,
        },
        {
          text: 'Aisha is wrong. -12 sits further to the left of zero than -5, so -12 is the smaller number.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'negas-mis-larger-negative-bigger',
    },
    {
      id: 'negas-q17',
      type: 'numeric-entry',
      stem: 'A submarine starts at -45 metres relative to sea level. It descends 30 metres to investigate a fish shoal, then rises 65 metres for fresh air. What is its final position relative to sea level, in metres?',
      tier: 'challenge',
      correctAnswer: -10,
      xpValue: 25,
      unit: 'metres',
      hint: 'Descending is subtracting. Rising is adding. Work from left to right.',
      misconceptionId: 'negas-mis-subtraction-only-smaller',
    },
    {
      id: 'negas-q18',
      type: 'missing-step',
      stem: 'Fill in the missing step. Compute -7 + 12 - (-4) - 9.',
      tier: 'challenge',
      steps: [
        'Rewrite minus negative four as plus four.',
        'The calculation becomes: -7 + 12 + 4 - 9.',
        null,
        'Continue from left to right: 5 + 4 = 9, then 9 - 9 = 0.',
        'So -7 + 12 - (-4) - 9 = 0.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Working from left to right, start with -7 + 12. This is the same as 12 - 7, which equals 5.',
      xpValue: 25,
    },
    {
      id: 'negas-q19',
      type: 'numeric-entry',
      stem: 'Maya\'s bank account is overdrawn by GBP 28. She is paid GBP 75 from a Saturday job, then pays GBP 12 for a bus pass and GBP 9 for a lunch deal. What is her balance, in pounds, at the end of the day?',
      tier: 'challenge',
      correctAnswer: 26,
      xpValue: 25,
      unit: 'GBP',
      hint: 'Overdrawn means a starting balance of -28. Each payment changes the balance up or down. Track it step by step.',
    },
    {
      id: 'negas-q20',
      type: 'drag-order',
      stem: 'Drag these temperatures in degrees Celsius into order from coldest to warmest.',
      tier: 'challenge',
      items: ['-3', '0', '-7', '5', '-12', '1'],
      correctOrder: [4, 2, 0, 1, 5, 3],
      xpValue: 25,
      hint: 'On a number line, the coldest sits furthest to the left and the warmest sits furthest to the right.',
      misconceptionId: 'negas-mis-larger-negative-bigger',
    },
  ],
  misconceptions: [
    // Source: Vlassis, J. (2004), "Making sense of the minus sign or becoming flexible in 'negativity'", Learning and Instruction 14(5), 469-484, on additive over-application of the multiplicative two-negatives-make-a-positive rule. Reinforced by CGP KS3 Maths Study Guide (Years 7-9), Negative Numbers chapter, "Common mistake" callout on adding two negatives.
    {
      id: 'negas-mis-two-negatives-positive',
      description:
        'Believing that any sum or difference involving two negative numbers must give a positive result, because "two negatives make a positive".',
      triggerAnswer: 'two-negatives-positive',
      correction:
        'In fact the "two negatives make a positive" rule is only for multiplication and division. Adding two negative numbers gives a more negative result.',
      reExplanation:
        '(-6) + (-7) means start at -6 and move 7 more places to the left. You land on -13, not 13. Counter pairs make this clear: six red counters plus seven more red counters give thirteen red counters in total, which is -13.',
    },
    // Source: Bell, A. (1986), "Diagnostic teaching: 2 - Developing conflict - discussion lessons", Mathematics Teaching 116, 26-29, on the magnitude-as-value error with negative integers. Reinforced by CGP KS3 Maths Study Guide (Years 7-9), Negative Numbers chapter, "Common mistake" callout on ordering negatives.
    {
      id: 'negas-mis-larger-negative-bigger',
      description:
        'Believing that a negative number with a larger digit (such as -12) must be greater than a negative number with a smaller digit (such as -5).',
      triggerAnswer: 'larger-negative-bigger',
      correction:
        'For negative numbers, the further left on the number line, the smaller the value. So -12 is less than -5, even though 12 is greater than 5.',
      reExplanation:
        'Picture a thermometer. -12 degrees Celsius is colder than -5 degrees Celsius, even though 12 is the larger digit. On a number line, -12 sits further to the left of zero than -5 does, so -12 is the smaller value.',
    },
    // Source: Hart, K.M. ed. (1981), "Children's Understanding of Mathematics 11-16" (CSMS), John Murray, Directed Numbers chapter, on the "subtraction must reduce" intuition. Reinforced by AQA GCSE Mathematics 8300 Foundation tier examiner reports across the 2017-2023 series, recurring on items requiring subtraction of a negative.
    {
      id: 'negas-mis-subtraction-only-smaller',
      description:
        'Believing that subtraction can never give a result larger than the starting number, even when the number being subtracted is negative.',
      triggerAnswer: 'subtraction-only-smaller',
      correction:
        'Subtracting a negative is the same as adding a positive, so the result can be larger than where you started.',
      reExplanation:
        '5 - (-4) reads as start at 5, then take away negative 4. Taking away a debt of 4 leaves you 4 better off, so the answer is 9, which is larger than 5. On a number line, the two minus signs reverse direction back to the right.',
    },
    // Source: Hart, K.M. ed. (1981), CSMS, Directed Numbers chapter, on pupils refusing to compute a-b when b is greater than a. Reinforced by Edexcel GCSE Mathematics 1MA1 Foundation tier (Paper 1F) examiner reports across the 2017-2023 series, on items where the result of a single subtraction crosses zero.
    {
      id: 'negas-mis-cannot-subtract-larger',
      description:
        'Believing that you cannot subtract a larger number from a smaller one, so 6 - 9 is "impossible" or is reversed to 9 - 6 = 3.',
      triggerAnswer: 'cannot-subtract-larger',
      correction:
        'In fact you can. Crossing zero gives a negative result. 6 - 9 starts at 6 and moves 9 places left, landing on -3.',
      reExplanation:
        'On a number line, start at 6 and step left. After 6 steps you reach 0; the next 3 steps take you to -3. The answer is -3, not 3 and not "impossible". Crossing zero is what makes the result negative.',
    },
    // Source: Hart, K.M. ed. (1981), CSMS, Directed Numbers chapter, on the strategy of computing magnitudes first then attaching a sign. Also Vlassis, J. (2008), "The role of mathematical symbols in the development of number conceptualization", Philosophical Psychology 21(4), 555-570, on the multiple roles of the minus sign.
    {
      id: 'negas-mis-magnitude-before-sign',
      description:
        'Computing a signed sum by ignoring the signs, adding the digits, then attaching a sign at the end somewhat arbitrarily.',
      triggerAnswer: 'magnitude-before-sign',
      correction:
        'The signs decide the direction of each move on the number line. They cannot be removed and added back at the end.',
      reExplanation:
        '-3 + 5 is not 3 + 5 with a sign attached. It is start at -3, then move 5 places right, which lands on 2. Counter pairs show the same answer: three red counters and five green counters cancel three pairs, leaving two green counters.',
    },
    // Source: Vlassis, J. (2004), Learning and Instruction 14(5), 469-484, on the "double minus" symbol confusion in directed-number arithmetic. Reinforced by CGP KS3 Maths Study Guide (Years 7-9), Negative Numbers chapter, "Common mistake" callout on subtracting a negative; also OCR GCSE Mathematics J560 Foundation tier examiner reports across the 2017-2023 series, on items where pupils reduced "- (-N)" to "-N".
    {
      id: 'negas-mis-minus-minus-minus',
      description:
        'Treating two adjacent minus signs as a single minus, so reading 5 - (-3) as 5 - 3 instead of 5 + 3.',
      triggerAnswer: 'minus-minus-minus',
      correction:
        'Two adjacent minus signs cancel. So "- (-N)" is the same as "+ N", and 5 - (-3) is 5 + 3.',
      reExplanation:
        'Read each minus as a reversal. The first minus reverses your direction once; the second minus reverses it back. So subtracting a negative ends up moving in the same direction as adding a positive. 5 - (-3) reaches 8, not 2.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const multiplyDivideNegatives: SkillNode = {
  id: 'maths-four-operations-multiply-divide-negatives',
  title: 'Multiplying and Dividing Negative Numbers',
  description:
    'Multiply and divide positive and negative integers using sign rules, repeated addition, and counter groups. Recognise that two matching signs give a positive result, that two different signs give a negative result, and that the same rule applies to both multiplication and division.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-four-operations',
  zoneName: 'Four Operations',
  tier: 'core',
  prerequisites: ['maths-four-operations-negative-numbers-add-subtract'],
  curriculum: {
    ks3Objective:
      'Use the four operations, including formal written methods, applied to integers, decimals, proper and improper fractions, and mixed numbers, all both positive and negative.',
    awardingBodies: {
      aqa: 'N2 Apply the four operations, including formal written methods, to integers (positive and negative)',
      edexcel: 'N2 The four operations applied to integers, both positive and negative',
      ocr: '1.02a Apply the four operations to directed numbers',
    },
  },
  scenes: [
    {
      id: 'mdneg-scene-sign-rule-grid',
      title: 'The Sign Rule Grid',
      type: 'diagram',
      instructions:
        'Read the four worked examples below. Each one pairs a sign on the left with a sign on the right. Two matching signs always give a positive result, two different signs always give a negative one.',
      data: {
        positiveColour: '#22C55E',
        negativeColour: '#EF4444',
        examples: [
          {
            sum: '4 × 3',
            description: 'positive times positive',
            sign: 'positive',
            result: 12,
          },
          {
            sum: '4 × (-3)',
            description: 'positive times negative',
            sign: 'negative',
            result: -12,
          },
          {
            sum: '(-4) × 3',
            description: 'negative times positive',
            sign: 'negative',
            result: -12,
          },
          {
            sum: '(-4) × (-3)',
            description: 'negative times negative',
            sign: 'positive',
            result: 12,
          },
        ],
        notes:
          'Two signs that match give a positive result. Two signs that differ give a negative result. Division uses the same rule as multiplication.',
      },
    },
    {
      id: 'mdneg-scene-repeated-addition',
      title: 'Repeated Addition on the Number Line',
      type: 'number-line',
      instructions:
        'Look at how each multiplication is laid out as repeated jumps on the number line. Three jumps of -4 land on -12, just like four jumps of -3 do, because the order of the factors does not change the result.',
      data: {
        range: [-15, 15],
        step: 1,
        startMark: 0,
        labelledTicks: [-15, -10, -5, 0, 5, 10, 15],
        examples: [
          {
            calculation: '3 × (-4)',
            from: 0,
            direction: 'left',
            steps: 12,
            to: -12,
          },
          {
            calculation: '4 × (-3)',
            from: 0,
            direction: 'left',
            steps: 12,
            to: -12,
          },
          {
            calculation: '(-3) × 4',
            from: 0,
            direction: 'left',
            steps: 12,
            to: -12,
          },
        ],
        notes:
          'Three jumps of -4 land on -12. Four jumps of -3 land in the same place. Swapping the order of the factors does not change the result. A leading negative reverses the direction of the jumps.',
      },
    },
    {
      id: 'mdneg-scene-counter-groups',
      title: 'Counters in Groups',
      type: 'diagram',
      instructions:
        'Read each example as repeated grouping. A leading negative reads as "the opposite of": "(-2) × 5" is the opposite of "two groups of five", and the opposite of a negative result flips it back to a positive.',
      data: {
        positiveColour: '#22C55E',
        negativeColour: '#EF4444',
        examples: [
          {
            sum: '4 × (-3)',
            description: 'four groups of three red counters',
            groups: 4,
            perGroup: -3,
            result: -12,
          },
          {
            sum: '(-2) × 5',
            description: 'the opposite of two groups of five green counters',
            groups: 2,
            perGroup: 5,
            negate: true,
            result: -10,
          },
          {
            sum: '(-3) × (-4)',
            description: 'the opposite of three groups of four red counters',
            groups: 3,
            perGroup: -4,
            negate: true,
            result: 12,
          },
        ],
        notes:
          'A leading negative reads as "the opposite of". Taking the opposite of a negative result flips it back to a positive.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'mdneg-worked-1',
      title: 'Computing 4 × (-7) by repeated addition',
      steps: [
        {
          explanation:
            'We want to work out 4 × (-7). Read it as four lots of negative seven.',
          maths: '4 × (-7)',
        },
        {
          explanation: 'Add four copies of -7 together.',
          maths: '-7 + -7 + -7 + -7',
        },
        {
          explanation: 'The first two give -14.',
          maths: '-7 + -7 = -14',
        },
        {
          explanation: 'Adding another -7 gives -21.',
          maths: '-14 + -7 = -21',
        },
        {
          explanation: 'Adding the last -7 gives -28.',
          maths: '-21 + -7 = -28',
        },
        {
          explanation:
            'Check using the sign rule: positive times negative is negative, and 4 × 7 = 28.',
          maths: '4 × (-7) = -28',
        },
      ],
    },
    {
      id: 'mdneg-worked-2',
      title: 'Computing (-6) × (-3) by reading the leading minus as "the opposite of"',
      steps: [
        {
          explanation: 'We want to work out (-6) × (-3).',
          maths: '(-6) × (-3)',
        },
        {
          explanation:
            'Read the leading -6 as "the opposite of 6". So the calculation is the opposite of 6 × (-3).',
          maths: '(-6) × (-3) = - (6 × (-3))',
        },
        {
          explanation: 'First find 6 × (-3). Six lots of -3 add to -18.',
          maths: '6 × (-3) = -18',
        },
        {
          explanation: 'Now take the opposite of -18, which is +18.',
          maths: '- (-18) = 18',
        },
        {
          explanation:
            'So (-6) × (-3) = 18. The two minus signs cancel, the same way they cancel on a number line.',
          maths: '(-6) × (-3) = 18',
        },
      ],
    },
    {
      id: 'mdneg-worked-3',
      title: 'Computing (-48) ÷ 6 and (-48) ÷ (-6) using the sign rule',
      steps: [
        {
          explanation:
            'We want to work out (-48) ÷ 6 and (-48) ÷ (-6). Division uses the same sign rule as multiplication.',
          maths: '(-48) ÷ 6 and (-48) ÷ (-6)',
        },
        {
          explanation:
            'Sign rule: matching signs give a positive result; different signs give a negative result.',
          maths: '+ ÷ + = +, - ÷ - = +, + ÷ - = -, - ÷ + = -',
        },
        {
          explanation: 'For (-48) ÷ 6 the signs differ, so the answer is negative.',
          maths: '(-48) ÷ 6 → negative',
        },
        {
          explanation: 'Divide the digits: 48 ÷ 6 = 8. Apply the sign.',
          maths: '(-48) ÷ 6 = -8',
        },
        {
          explanation: 'For (-48) ÷ (-6) the signs match, so the answer is positive.',
          maths: '(-48) ÷ (-6) → positive',
        },
        {
          explanation: 'Divide the digits: 48 ÷ 6 = 8. Apply the sign.',
          maths: '(-48) ÷ (-6) = 8',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'mdneg-q1',
      type: 'multiple-choice',
      stem: 'What is 3 × (-4)?',
      tier: 'core',
      options: ['12', '-12', '-7', '7'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Three lots of -4. Add three copies of -4 and read off the result.',
      misconceptionId: 'mdneg-mis-magnitude-then-sign',
    },
    {
      id: 'mdneg-q2',
      type: 'multiple-choice',
      stem: 'What is (-2) × 6?',
      tier: 'core',
      options: ['12', '-8', '8', '-12'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Negative times positive gives a negative. Multiply 2 × 6, then attach the minus sign.',
      misconceptionId: 'mdneg-mis-add-rule-applied',
    },
    {
      id: 'mdneg-q3',
      type: 'multiple-choice',
      stem: 'What is (-12) ÷ 3?',
      tier: 'core',
      options: ['-4', '4', '-9', '9'],
      correctIndex: 0,
      xpValue: 10,
      hint: 'Different signs in a division give a negative result. Divide 12 ÷ 3, then attach the sign.',
      misconceptionId: 'mdneg-mis-division-different-rule',
    },
    {
      id: 'mdneg-q4',
      type: 'multiple-choice',
      stem: 'What is (-20) ÷ (-5)?',
      tier: 'core',
      options: ['-4', '-25', '4', '25'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Two matching signs in a division give a positive result. Divide 20 ÷ 5, then attach the sign.',
      misconceptionId: 'mdneg-mis-division-different-rule',
    },
    {
      id: 'mdneg-q5',
      type: 'numeric-entry',
      stem: 'Compute (-7) × 4. Enter your answer as an integer.',
      tier: 'core',
      correctAnswer: -28,
      xpValue: 10,
      hint: 'Negative times positive gives a negative. Multiply 7 × 4 and apply the sign.',
      misconceptionId: 'mdneg-mis-magnitude-then-sign',
    },
    {
      id: 'mdneg-q6',
      type: 'numeric-entry',
      stem: 'Compute (-6) × (-3). Enter your answer as an integer.',
      tier: 'core',
      correctAnswer: 18,
      xpValue: 10,
      hint: 'Two negatives multiplied give a positive. Multiply 6 × 3 and the result is positive.',
      misconceptionId: 'mdneg-mis-neg-times-neg-negative',
    },
    {
      id: 'mdneg-q7',
      type: 'numeric-entry',
      stem: 'Compute (-30) ÷ 6. Enter your answer as an integer.',
      tier: 'core',
      correctAnswer: -5,
      xpValue: 10,
      hint: 'Different signs in a division give a negative result. Divide 30 ÷ 6 and apply the sign.',
    },
    {
      id: 'mdneg-q8',
      type: 'missing-step',
      stem: 'Fill in the missing step in this worked solution. Compute 5 × (-3).',
      tier: 'core',
      steps: [
        'Read the calculation: 5 × (-3) means five lots of negative 3.',
        null,
        'Adding five copies of -3 gives -3 + -3 + -3 + -3 + -3 = -15.',
        'Check using the sign rule: positive times negative is negative, and 5 × 3 = 15.',
        'So 5 × (-3) = -15.',
      ],
      missingStepIndex: 1,
      correctStep:
        'Multiplication is repeated addition, so add five copies of -3 together.',
      xpValue: 20,
    },
    {
      id: 'mdneg-q9',
      type: 'multiple-choice',
      stem: 'Which calculation gives the largest result?',
      tier: 'confident',
      options: ['(-4) × (-5)', '(-7) × 3', '(-2) × 9', '4 × (-6)'],
      correctIndex: 0,
      xpValue: 15,
      hint: 'Work each one out. Three of the four are negative; one is the only positive.',
      misconceptionId: 'mdneg-mis-neg-times-neg-negative',
    },
    {
      id: 'mdneg-q10',
      type: 'multiple-choice',
      stem: 'Without working out the digits, what is the sign of (-3) × (-4) × (-2)?',
      tier: 'confident',
      options: [
        'positive, because pairs of negatives cancel',
        'negative, because there are three negatives',
        'zero, because the negatives cancel out',
        'cannot be decided without computing the answer',
      ],
      correctIndex: 1,
      xpValue: 15,
      hint: 'Pair the negatives. Each pair turns into a positive. An odd number of negatives leaves one minus sign behind.',
      misconceptionId: 'mdneg-mis-only-one-sign-survives',
    },
    {
      id: 'mdneg-q11',
      type: 'multiple-choice',
      stem: 'Pick the true statement about multiplying and dividing negatives.',
      tier: 'confident',
      options: [
        'A negative divided by a negative is negative.',
        'A positive times a negative is positive.',
        'A negative times a negative is positive.',
        'Two negatives multiplied always give a smaller result than either factor.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'mdneg-mis-add-rule-applied',
    },
    {
      id: 'mdneg-q12',
      type: 'numeric-entry',
      stem: 'Compute (-8) × (-7). Enter your answer as an integer.',
      tier: 'confident',
      correctAnswer: 56,
      xpValue: 15,
      hint: 'Two negatives multiplied give a positive. Multiply 8 × 7.',
      misconceptionId: 'mdneg-mis-neg-times-neg-negative',
    },
    {
      id: 'mdneg-q13',
      type: 'numeric-entry',
      stem: 'Compute (-72) ÷ (-9). Enter your answer as an integer.',
      tier: 'confident',
      correctAnswer: 8,
      xpValue: 15,
      hint: 'Two matching signs in a division give a positive. Divide 72 ÷ 9.',
      misconceptionId: 'mdneg-mis-division-different-rule',
    },
    {
      id: 'mdneg-q14',
      type: 'spot-misconception',
      stem: 'Liam says: "(-4) × (-6) is -24, because the two negatives keep the answer negative."',
      tier: 'confident',
      statements: [
        {
          text: 'Liam is right. Multiplying two negatives keeps the negative sign, so the answer is -24.',
          isMisconception: true,
        },
        {
          text: 'Liam is wrong. A negative times a negative gives a positive, so (-4) × (-6) = 24.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'mdneg-mis-neg-times-neg-negative',
    },
    {
      id: 'mdneg-q15',
      type: 'drag-order',
      stem: 'Drag these calculations into order from smallest result to largest.',
      tier: 'confident',
      items: ['(-3) × 4', '(-2) × (-6)', '5 × (-2)', '(-15) ÷ (-3)', '(-20) ÷ 5'],
      correctOrder: [0, 2, 4, 3, 1],
      xpValue: 15,
      hint: 'Work each one out, then place them on a number line from smallest to largest.',
    },
    {
      id: 'mdneg-q16',
      type: 'missing-step',
      stem: 'Fill in the missing step. Compute (-9) × 6 ÷ (-3).',
      tier: 'confident',
      steps: [
        'Read the calculation: negative 9 times 6, divided by negative 3.',
        'Work left to right. First (-9) × 6.',
        null,
        'Then (-54) ÷ (-3). Two matching signs in a division give a positive, so this is 54 ÷ 3 = 18.',
        'So (-9) × 6 ÷ (-3) = 18.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Negative times positive gives a negative. Multiply 9 × 6 = 54, so (-9) × 6 = -54.',
      xpValue: 20,
    },
    {
      id: 'mdneg-q17',
      type: 'multiple-choice',
      stem: 'A submarine off the Cornish coast descends at -6 metres per minute for 8 minutes, then drifts back up 13 metres. What is the change in its depth, in metres, relative to where it started?',
      tier: 'challenge',
      options: ['-35', '35', '-61', '-48'],
      correctIndex: 0,
      xpValue: 25,
      hint: 'Work it in two steps. First find the descent over the 8 minutes, then add the drift back up.',
      misconceptionId: 'mdneg-mis-add-rule-applied',
    },
    {
      id: 'mdneg-q18',
      type: 'numeric-entry',
      stem: 'A Premier League club is docked 3 points by the league panel each time a fan-zone breach is reported. The panel logs 4 breaches across the season. The club had finished its matches on 38 points before any deduction. How many points does the club end the season with?',
      tier: 'challenge',
      correctAnswer: 26,
      xpValue: 25,
      unit: 'points',
      hint: 'First find the total deduction across the four breaches as a multiplication. Then apply that change to the starting points.',
    },
    {
      id: 'mdneg-q19',
      type: 'numeric-entry',
      stem: 'Compute (-4) × (-3) × (-5). Enter your answer as an integer.',
      tier: 'challenge',
      correctAnswer: -60,
      xpValue: 25,
      hint: 'Pair the negatives. Two negatives give a positive; the leftover negative makes the final answer negative.',
      misconceptionId: 'mdneg-mis-only-one-sign-survives',
    },
    {
      id: 'mdneg-q20',
      type: 'spot-misconception',
      stem: 'Aisha says: "(-4) squared is -16, because squaring just multiplies a number by itself, and the minus sign stays."',
      tier: 'challenge',
      statements: [
        {
          text: 'Aisha is right. Squaring keeps the original sign, so (-4) squared is -16.',
          isMisconception: true,
        },
        {
          text: 'Aisha is wrong. (-4) squared means (-4) × (-4), and a negative times a negative gives a positive, so the answer is 16.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'mdneg-mis-neg-squared-negative',
    },
    {
      id: 'mdneg-q21',
      type: 'drag-order',
      stem: 'Drag these calculations into order from smallest result to largest.',
      tier: 'challenge',
      items: [
        '(-2) × (-2) × (-2)',
        '(-3) × (-3)',
        '4 × (-5)',
        '(-24) ÷ (-3)',
        '(-2) × (-3) × (-1)',
      ],
      correctOrder: [2, 0, 4, 3, 1],
      xpValue: 25,
      hint: 'Work out each one carefully. Watch the number of negative factors: an odd count keeps the result negative.',
    },
    {
      id: 'mdneg-q22',
      type: 'missing-step',
      stem: 'Fill in the missing step. Compute (-3) × (-2) × (-5) × 4.',
      tier: 'challenge',
      steps: [
        'Read the calculation: (-3) × (-2) × (-5) × 4.',
        'Work left to right. First (-3) × (-2). Two matching signs give a positive, so this is 6.',
        null,
        'Then (-30) × 4. Negative times positive is negative, so this is -120.',
        'So (-3) × (-2) × (-5) × 4 = -120.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Then 6 × (-5). Positive times negative is negative, so this is -30.',
      xpValue: 25,
    },
  ],
  misconceptions: [
    // Source: Vlassis, J. (2004), "Making sense of the minus sign or becoming flexible in 'negativity'", Learning and Instruction 14(5), 469-484, on the persistence of the negative-times-negative-stays-negative error in early directed-number work. Reinforced by CGP KS3 Maths Study Guide (Years 7-9), Negative Numbers chapter, "Common mistake" callout on multiplying two negatives.
    {
      id: 'mdneg-mis-neg-times-neg-negative',
      description:
        'Believing that multiplying two negative numbers gives a negative result, because the minus signs are seen as accumulating rather than cancelling.',
      triggerAnswer: 'neg-times-neg-negative',
      correction:
        'In fact a negative multiplied by a negative gives a positive. The two minus signs cancel, the same way that subtracting a negative is the same as adding a positive.',
      reExplanation:
        '(-4) × (-6) reads as "the opposite of 4 lots of -6". Four lots of -6 is -24, and the opposite of -24 is +24. The same pattern shows on a number line: each leading minus reverses direction once, so two minuses send you back to the right.',
    },
    // Source: Hart, K.M. ed. (1981), "Children's Understanding of Mathematics 11-16" (CSMS), John Murray, Directed Numbers chapter, on the strategy of computing magnitudes first then attaching a sign at the end. Reinforced by Vlassis, J. (2008), Philosophical Psychology 21(4), 555-570, on the multiple roles of the minus sign.
    {
      id: 'mdneg-mis-magnitude-then-sign',
      description:
        'Computing a signed product or quotient by multiplying or dividing the digits, then attaching a sign at the end without applying the sign rule.',
      triggerAnswer: 'magnitude-then-sign',
      correction:
        'In fact the signs of the factors decide the sign of the result. They cannot be ignored and added back later.',
      reExplanation:
        '3 × (-4) is not 3 × 4 with a sign attached. It is three lots of -4, which is -12. The sign rule says the answer is negative because one factor is negative; the digits 3 × 4 = 12 only set the size.',
    },
    // Source: Vlassis, J. (2004), Learning and Instruction 14(5), 469-484, on cross-contamination of additive sign rules into multiplicative settings. Reinforced by AQA GCSE Mathematics 8300 Foundation tier examiner reports across the 2017-2023 series, recurring on items mixing addition and multiplication of directed numbers.
    {
      id: 'mdneg-mis-add-rule-applied',
      description:
        'Applying the rule for adding signed numbers when the operation is multiplication or division, for example treating (-2) × 6 like (-2) + 6.',
      triggerAnswer: 'add-rule-applied',
      correction:
        'Multiplication and division have their own sign rule. Matching signs give a positive result; different signs give a negative result. The size of the digits does not affect the sign.',
      reExplanation:
        '(-2) × 6 means six lots of -2 (or two lots of -6 by swapping the factors), which adds to -12. The rule for addition would have given a different answer, -2 + 6 = 4, which is the wrong operation here.',
    },
    // Source: CGP KS3 Maths Study Guide (Years 7-9), Powers and Roots chapter, "Common mistake" callout on the unary minus and bracket convention. Reinforced by OCR GCSE Mathematics J560 Foundation tier examiner reports across the 2017-2023 series, on items where pupils interpreted -a^2 and (-a)^2 as the same expression.
    {
      id: 'mdneg-mis-neg-squared-negative',
      description:
        'Believing that squaring a negative number gives a negative result, because the minus sign is treated as part of the number being multiplied without applying the sign rule.',
      triggerAnswer: 'neg-squared-negative',
      correction:
        'In fact squaring a negative gives a positive, because (-a) × (-a) is two negatives multiplied, and two matching signs give a positive result.',
      reExplanation:
        '(-4) squared means (-4) × (-4). The two negatives cancel, the digits give 16, and the answer is +16.',
    },
    // Source: Bell, A. (1986), "Diagnostic teaching: 2 - Developing conflict - discussion lessons", Mathematics Teaching 116, 26-29, on the "only one sign survives" pattern in multi-factor products. Reinforced by CGP KS3 Maths Study Guide (Years 7-9), Negative Numbers chapter, on counting the number of negative factors.
    {
      id: 'mdneg-mis-only-one-sign-survives',
      description:
        'Believing that no matter how many negative factors a product has, only one minus sign survives, so the result is always negative when any factor is negative.',
      triggerAnswer: 'only-one-sign-survives',
      correction:
        'In fact each pair of negatives cancels into a positive. An even number of negative factors gives a positive result; an odd number gives a negative result.',
      reExplanation:
        '(-3) × (-4) × (-2) has three negative factors. Pair the first two: (-3) × (-4) = 12. Now multiply by the third: 12 × (-2) = -24. The single leftover negative is what makes the result negative.',
    },
    // Source: Edexcel GCSE Mathematics 1MA1 Foundation tier (Paper 1F) examiner reports across the 2017-2023 series, on items where pupils applied the multiplication sign rule but reverted to a magnitude-only answer for division. Reinforced by Vlassis, J. (2004), Learning and Instruction 14(5), 469-484, on rule transfer between multiplication and division.
    {
      id: 'mdneg-mis-division-different-rule',
      description:
        'Believing that the sign rule for division is different from the sign rule for multiplication, so dividing two negatives gives a negative answer.',
      triggerAnswer: 'division-different-rule',
      correction:
        'In fact division uses the same sign rule as multiplication. Matching signs give a positive result; different signs give a negative result.',
      reExplanation:
        '(-20) ÷ (-5) asks "how many groups of -5 are in -20?". The answer is 4 groups, which is positive. Treat division as the inverse of multiplication: if 4 × (-5) = -20, then (-20) ÷ (-5) = 4 and (-20) ÷ 4 = -5.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const fourOperationsZoneNodes = [
  negativeNumbersAddSubtract,
  multiplyDivideNegatives,
]
