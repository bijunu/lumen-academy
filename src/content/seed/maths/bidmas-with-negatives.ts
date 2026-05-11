import type { SkillNode } from '@/types/content'

export const bidmasWithNegatives: SkillNode = {
  id: 'maths-bidmas-with-negatives',
  title: 'BIDMAS with Negative Numbers',
  description:
    'Apply the priority of operations (BIDMAS) to expressions that include negative numbers. Brackets sit at the top of the priority list, followed by Indices, then Multiplication and Division (left to right), then Addition and Subtraction (left to right). Pay close attention to whether the negative sign is inside the bracket or outside, because that decides the sign of a square.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-bidmas',
  zoneName: 'BIDMAS',
  tier: 'confident',
  prerequisites: ['maths-bidmas-order-of-operations', 'maths-four-operations-multiply-divide-negatives'],
  curriculum: {
    ks3Objective:
      'Use conventional notation for the priority of operations, including brackets, powers, roots and reciprocals; understand and use the rules for the order of operations applied to expressions involving negative numbers.',
    awardingBodies: {
      aqa: 'N3 Use the priority of operations, including brackets and powers (GCSE Mathematics 8300)',
      edexcel: 'N4 Use the priority of operations applied to expressions with brackets, powers and negative numbers (GCSE Mathematics 1MA1)',
      ocr: '2.05b Apply the priority of operations to expressions involving negative numbers (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'bwn-scene-number-line-negative',
      title: 'Subtracting a Negative: Turn Around on the Number Line',
      type: 'number-line',
      instructions:
        'See how 5 minus (-3) works on a number line. Start at 5. Subtracting normally would step left, but the second number is itself negative, so the two negative signs cancel and you step right instead. Three steps to the right of 5 lands on 8. So 5 - (-3) = 8. Subtracting a negative is the same as adding a positive.',
      data: {
        min: -2,
        max: 10,
        majorTicks: [-2, 0, 2, 4, 5, 6, 8, 10],
        startValue: 5,
        operation: 'subtract (-3)',
        steps: [
          { from: 5, to: 8, direction: 'right', label: '5 - (-3) = 5 + 3 = 8' },
        ],
        rule: 'Two negatives in a row act like a positive: a - (-b) = a + b.',
      },
    },
    {
      id: 'bwn-scene-sign-square',
      title: 'Where the Brackets Live: -3^2 versus (-3)^2',
      type: 'simulation',
      instructions:
        'See how the brackets decide the sign. (-3)^2 squares the whole negative number, including the minus sign, so (-3) x (-3) = 9. Without brackets, -3^2 means "the negative of 3 squared" because squaring sits above the unary minus in priority. So -3^2 = -(3 x 3) = -9. Three small symbols, two different answers, and a sign that flips because of the brackets.',
      data: {
        expressions: [
          {
            calc: '(-3)^2',
            order: 'brackets first, then square',
            step1: '(-3) x (-3)',
            step2: '9',
            answer: 9,
          },
          {
            calc: '-3^2',
            order: 'square first (indices above unary minus), then apply the negative',
            step1: '-(3 x 3)',
            step2: '-9',
            answer: -9,
          },
        ],
        rule: 'A minus sign without brackets binds AFTER the index. A minus sign inside brackets is part of the number being squared.',
      },
    },
    {
      id: 'bwn-scene-bidmas-priority',
      title: 'BIDMAS Priority with a Negative Inside',
      type: 'simulation',
      instructions:
        'See how BIDMAS works through 8 - 2 x (-3). Brackets first: there is just the negative number (-3), already settled. Indices: none. Multiplication and Division left to right: 2 x (-3) = -6. Addition and Subtraction left to right: 8 - (-6) = 8 + 6 = 14. The multiplication step happens BEFORE the subtraction, even though the subtraction sits to the left of the expression.',
      data: {
        expression: '8 - 2 x (-3)',
        priorityOrder: [
          { step: 'Brackets', action: 'nothing to do; (-3) is already a single value', remaining: '8 - 2 x (-3)' },
          { step: 'Indices', action: 'no powers in this expression', remaining: '8 - 2 x (-3)' },
          { step: 'Multiplication and Division', action: '2 x (-3) = -6', remaining: '8 - (-6)' },
          { step: 'Addition and Subtraction', action: '8 - (-6) = 8 + 6 = 14', remaining: '14' },
        ],
        answer: 14,
        rule: 'BIDMAS is a priority list, not a left-to-right rule. Higher-priority operations are evaluated first wherever they appear.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'bwn-worked-1',
      title: 'Evaluate -3 + 4 x (-2)',
      steps: [
        {
          explanation:
            'Identify the highest-priority operation. There are no brackets, no indices.',
          maths: '-3 + 4 x (-2)',
        },
        {
          explanation:
            'Multiplication and Division come next. Work out 4 x (-2).',
          maths: '4 x (-2) = -8',
        },
        {
          explanation:
            'Substitute the multiplication back into the expression.',
          maths: '-3 + (-8)',
        },
        {
          explanation:
            'Now apply Addition. Adding a negative is the same as subtracting a positive.',
          maths: '-3 + (-8) = -3 - 8 = -11',
        },
        {
          explanation: 'So -3 + 4 x (-2) = -11.',
          maths: '-3 + 4 x (-2) = -11',
        },
      ],
    },
    {
      id: 'bwn-worked-2',
      title: 'Evaluate (-2)^2 - 3 x (-4) (missing step revealed by the engine)',
      steps: [
        {
          explanation:
            'Brackets first. The bracket already wraps a negative number, so it stays as (-2) for the index step.',
          maths: '(-2)^2 - 3 x (-4)',
        },
        {
          explanation:
            'Indices: square the bracketed negative.',
          maths: '(-2)^2 = (-2) x (-2) = 4',
        },
        {
          explanation:
            'Substitute the squared value back into the expression.',
          maths: '4 - 3 x (-4)',
        },
        {
          explanation:
            'Multiplication and Division: work out 3 x (-4).',
          maths: '3 x (-4) = -12',
        },
        {
          explanation:
            'Substitute the multiplication back into the expression.',
          maths: '4 - (-12)',
        },
        {
          explanation:
            'Subtracting a negative is the same as adding a positive.',
          maths: '4 - (-12) = 4 + 12 = 16',
        },
        {
          explanation: 'So (-2)^2 - 3 x (-4) = 16.',
          maths: '(-2)^2 - 3 x (-4) = 16',
        },
      ],
    },
  ],
  questions: [
    // Core 1: add positive to negative
    {
      id: 'bwn-q1',
      type: 'multiple-choice',
      stem: 'What is -3 + 7?',
      tier: 'core',
      options: ['-10', '-4', '10', '4'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Start at -3 on the number line and step 7 places to the right.',
    },
    // Core 2: subtract a negative
    {
      id: 'bwn-q2',
      type: 'numeric-entry',
      stem: 'Work out 5 - (-3).',
      tier: 'core',
      correctAnswer: 8,
      xpValue: 10,
      hint: 'Subtracting a negative is the same as adding a positive. So 5 - (-3) = 5 + 3 = 8.',
    },
    // Core 3: negative times positive
    {
      id: 'bwn-q3',
      type: 'multiple-choice',
      stem: 'What is -4 x 3?',
      tier: 'core',
      options: ['-12', '12', '-7', '7'],
      correctIndex: 0,
      xpValue: 10,
      hint: 'A negative times a positive gives a negative. Multiply the digits: 4 x 3 = 12. Apply the sign: -12.',
    },
    // Core 4: negative divided by negative
    {
      id: 'bwn-q4',
      type: 'numeric-entry',
      stem: 'Work out (-6) divided by (-2).',
      tier: 'core',
      correctAnswer: 3,
      xpValue: 10,
      hint: 'A negative divided by a negative gives a positive: -6 / -2 = +3.',
    },
    // Core 5: (-3) squared
    {
      id: 'bwn-q5',
      type: 'multiple-choice',
      stem: 'What is (-3)^2?',
      tier: 'core',
      options: ['6', '-9', '9', '-6'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'bwn-mis-negative-squared-stays-negative',
      hint: 'The bracket says the whole -3 is squared. (-3) x (-3) = +9. Two negatives multiplied give a positive.',
    },
    // Core 6: BIDMAS basic
    {
      id: 'bwn-q6',
      type: 'numeric-entry',
      stem: 'Evaluate -2 + 5 x 2.',
      tier: 'core',
      correctAnswer: 8,
      xpValue: 10,
      misconceptionId: 'bwn-mis-left-to-right-strict',
      hint: 'Multiplication before addition: 5 x 2 = 10. Then -2 + 10 = 8.',
    },
    // Core 7: MD before subtraction with negative
    {
      id: 'bwn-q7',
      type: 'multiple-choice',
      stem: 'Evaluate 10 - (-3) x 2.',
      tier: 'core',
      options: ['26', '4', '14', '16'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Multiplication first: (-3) x 2 = -6. Then 10 - (-6) = 10 + 6 = 16.',
    },
    // Core 8: spot-misconception on -3^2 vs (-3)^2
    {
      id: 'bwn-q8',
      type: 'spot-misconception',
      stem: 'Tom writes "-3^2 = (-3) x (-3) = 9".',
      tier: 'core',
      statements: [
        {
          text: 'Tom is right. The minus sign and the 3 belong together, so squaring affects the whole -3.',
          isMisconception: true,
        },
        {
          text: 'In fact -3^2 means the negative of 3 squared, because indices have higher priority than the unary minus. -3^2 = -(3 x 3) = -9. If the question wanted (-3) squared, it would use brackets: (-3)^2.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'bwn-mis-unary-minus-precedence',
    },
    // Confident 1: BIDMAS with negative multiplier
    {
      id: 'bwn-q9',
      type: 'multiple-choice',
      stem: 'Evaluate (-2) x 3 + 5.',
      tier: 'confident',
      options: ['1', '-1', '7', '-11'],
      correctIndex: 1,
      xpValue: 15,
      hint: 'Multiplication first: (-2) x 3 = -6. Then -6 + 5 = -1.',
    },
    // Confident 2: -2^2 (no brackets)
    {
      id: 'bwn-q10',
      type: 'multiple-choice',
      stem: 'What is -2^2?',
      tier: 'confident',
      options: ['-4', '4', '0', '-2'],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'bwn-mis-unary-minus-precedence',
      hint: 'Indices before the unary minus. Square first: 2^2 = 4. Apply the negative: -4.',
    },
    // Confident 3: subtract a negative product
    {
      id: 'bwn-q11',
      type: 'multiple-choice',
      stem: 'Evaluate 8 - 3 x (-2).',
      tier: 'confident',
      options: ['2', '-10', '14', '-22'],
      correctIndex: 2,
      xpValue: 15,
      hint: 'Multiplication first: 3 x (-2) = -6. Then 8 - (-6) = 8 + 6 = 14.',
    },
    // Confident 4: spot-misconception on AS strict order
    {
      id: 'bwn-q12',
      type: 'spot-misconception',
      stem: 'Maya works out 5 - 3 + 2 by writing "addition first because A comes before S in BIDMAS: 3 + 2 = 5, then 5 - 5 = 0".',
      tier: 'confident',
      statements: [
        {
          text: 'Maya is right. BIDMAS says A strictly before S, so addition always wins.',
          isMisconception: true,
        },
        {
          text: 'In fact addition and subtraction share the same priority level. They are evaluated left to right. So 5 - 3 + 2 = (5 - 3) + 2 = 2 + 2 = 4, not 0.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'bwn-mis-addition-before-subtraction',
    },
    // Confident 5: missing-step worked example with square of negative
    {
      id: 'bwn-q13',
      type: 'missing-step',
      stem: 'Fill in the missing step. Liam evaluates (-4)^2 + 2 x (-3).',
      tier: 'confident',
      steps: [
        'Brackets: (-4) is already a single value.',
        'Indices: (-4)^2 = (-4) x (-4) = 16.',
        null,
        'Add and Subtract: 16 + (-6) = 16 - 6 = 10.',
      ],
      missingStepIndex: 2,
      correctStep: 'Multiplication: 2 x (-3) = -6.',
      xpValue: 20,
    },
    // Confident 6: chain with double-negative subtraction
    {
      id: 'bwn-q14',
      type: 'multiple-choice',
      stem: 'Evaluate (-2) x (-3) - 4.',
      tier: 'confident',
      options: ['-10', '2', '-2', '10'],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'bwn-mis-double-negative-blanket',
      hint: 'Multiplication first: (-2) x (-3) = 6 (two negatives make a positive). Then 6 - 4 = 2.',
    },
    // Confident 7: drag-order by value
    {
      id: 'bwn-q15',
      type: 'drag-order',
      stem: 'Drag these expressions into order from the smallest value to the largest value.',
      tier: 'confident',
      items: ['(-2)^3', '-2^3', '8 - 2^3', '2 x (-3)'],
      correctOrder: [0, 1, 3, 2],
      xpValue: 20,
      hint: '(-2)^3 = -8, -2^3 = -8, 2 x (-3) = -6, 8 - 2^3 = 0. The first two tie at -8 but treat them as listed.',
    },
    // Confident 8: division with negative result
    {
      id: 'bwn-q16',
      type: 'numeric-entry',
      stem: 'Evaluate 20 / (-4) - 1.',
      tier: 'confident',
      correctAnswer: -6,
      xpValue: 15,
      hint: 'Division first: 20 / (-4) = -5. Then -5 - 1 = -6.',
    },
    // Challenge 1: Bond-style temperature word problem
    {
      id: 'bwn-q17',
      type: 'numeric-entry',
      stem: 'At dawn the temperature in the Lake District was -3 degrees Celsius. It rose by 7 degrees by lunchtime, then fell by 4 degrees by midnight. What was the midnight temperature in degrees Celsius?',
      tier: 'challenge',
      correctAnswer: 0,
      unit: 'degrees Celsius',
      xpValue: 25,
      hint: 'Start at -3. Rise by 7: -3 + 7 = 4. Fall by 4: 4 - 4 = 0. Midnight temperature is 0 degrees Celsius.',
    },
    // Challenge 2: chain with brackets and indices (the plan stretch)
    {
      id: 'bwn-q18',
      type: 'numeric-entry',
      stem: 'Evaluate (-4 + 2) x (-3)^2 - (-5).',
      tier: 'challenge',
      correctAnswer: -13,
      xpValue: 25,
      hint: 'Brackets first: -4 + 2 = -2. Indices: (-3)^2 = 9. Multiplication: -2 x 9 = -18. Subtraction: -18 - (-5) = -18 + 5 = -13.',
    },
    // Challenge 3: money / bank-balance word problem
    {
      id: 'bwn-q19',
      type: 'multiple-choice',
      stem: 'A bank account starts at -£25 (overdrawn). The account holder deposits £40, then has £15 withdrawn three days in a row. What is the final balance, in pounds?',
      tier: 'challenge',
      options: ['£30', '£0', '-£15', '-£30'],
      correctIndex: 3,
      xpValue: 25,
      hint: 'Start: -25. Deposit: -25 + 40 = 15. Three withdrawals: 15 - 3 x 15. BIDMAS: 3 x 15 = 45 first, then 15 - 45 = -30. So the balance is -£30.',
    },
    // Challenge 4: chain with square, multiplication, subtraction
    {
      id: 'bwn-q20',
      type: 'numeric-entry',
      stem: 'Evaluate (-5)^2 - 4 x (-3) + (-7).',
      tier: 'challenge',
      correctAnswer: 30,
      xpValue: 25,
      hint: 'Indices: (-5)^2 = 25. Multiplication: 4 x (-3) = -12. Substitute: 25 - (-12) + (-7) = 25 + 12 - 7 = 30.',
    },
    // Challenge 5: altitude word problem
    {
      id: 'bwn-q21',
      type: 'multiple-choice',
      stem: 'A submarine sits at -120 metres (below sea level). It rises 30 metres each minute for 3 minutes, then drops 15 metres. What is its final depth, in metres below sea level?',
      tier: 'challenge',
      options: ['45 m below', '75 m below', '15 m below', '105 m below'],
      correctIndex: 0,
      xpValue: 25,
      hint: 'Position relative to sea level: -120 + 3 x 30 - 15. BIDMAS: 3 x 30 = 90, then -120 + 90 - 15 = -45. The submarine is 45 m below sea level.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a question evaluating -3^2 where pupils answered 9 by treating the minus sign as part of the number being squared.
    {
      id: 'bwn-mis-unary-minus-precedence',
      description:
        'I think -3^2 means (-3) squared, so the answer is 9. I treat the minus sign as part of the number being squared, even when there are no brackets.',
      triggerAnswer: 'unary-minus-precedence',
      correction:
        'Actually indices have higher priority than the unary minus. Without brackets, -3^2 means the negative of 3 squared: -(3 x 3) = -9.',
      reExplanation:
        'BIDMAS puts Indices ABOVE the unary minus that begins an expression. So -3^2 evaluates as -(3^2) = -9. To square the negative number itself, the brackets are essential: (-3)^2 = (-3) x (-3) = 9. The two expressions look almost the same but give opposite signs. Whenever a power follows a negative, check whether brackets enclose the negative.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Powers and Negative Numbers" page, "Common mistake" callout warning that squaring a negative number gives a positive answer.
    {
      id: 'bwn-mis-negative-squared-stays-negative',
      description:
        'I think (-3)^2 is -9 because a negative number squared should still be negative.',
      triggerAnswer: 'negative-squared-stays-negative',
      correction:
        'In fact a negative number squared is positive, because squaring multiplies the number by itself: a negative times a negative is a positive.',
      reExplanation:
        '(-3)^2 means (-3) x (-3). When two negatives are multiplied the result is positive: (-3) x (-3) = +9. The same logic applies to any even power of a negative number. Only odd powers keep the negative sign: (-3)^3 = -27 because three negatives multiplied give a negative.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 1F (Foundation, Non-calculator), commentary on a 5 - 3 + 2 question where pupils evaluated as 0 by applying addition strictly before subtraction.
    {
      id: 'bwn-mis-addition-before-subtraction',
      description:
        'I think BIDMAS means addition is strictly evaluated before subtraction, so 5 - 3 + 2 = 5 - 5 = 0.',
      triggerAnswer: 'addition-before-subtraction',
      correction:
        'Actually addition and subtraction share the same priority level. Work through them left to right.',
      reExplanation:
        'BIDMAS lists Addition and Subtraction together as the lowest priority level. They are not separately ranked. Always evaluate left to right when only Addition and Subtraction remain. For 5 - 3 + 2, work from the left: 5 - 3 = 2, then 2 + 2 = 4. The same rule applies to Multiplication and Division (MD): they are also a single level evaluated left to right.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 01 (Foundation, Non-calculator), commentary on subtraction-of-negatives questions where pupils overgeneralised the double-negative rule from multiplication to subtraction.
    {
      id: 'bwn-mis-double-negative-blanket',
      description:
        'I apply the "two negatives make a positive" rule to any operation, so -3 - 2 becomes -3 + 2 = -1, or -3 + (-2) becomes +5.',
      triggerAnswer: 'double-negative-blanket',
      correction:
        'Actually the double-negative rule only applies to multiplication and division and to subtracting a negative (a - (-b) = a + b). It does NOT apply to adding two negatives or to plain subtraction with a positive.',
      reExplanation:
        'Multiplication: (-3) x (-2) = 6 (rule applies). Subtracting a negative: 5 - (-3) = 5 + 3 = 8 (rule applies because the two negatives sit next to each other). Adding two negatives: -3 + (-2) = -5 (rule does NOT apply; both numbers are negative and the result is more negative). Plain subtraction: -3 - 2 = -5 (rule does NOT apply; the second number is positive 2, the operation is subtract).',
    },
    // Source: NCETM Secondary Magazine, Issue 127, "Persistent Misconceptions in Order of Operations" article, citing pupil work that evaluates expressions strictly left to right ignoring the BIDMAS priority.
    {
      id: 'bwn-mis-left-to-right-strict',
      description:
        'I evaluate expressions strictly left to right and ignore the BIDMAS priority, so -2 + 5 x 2 becomes (-2 + 5) x 2 = 6.',
      triggerAnswer: 'left-to-right-strict',
      correction:
        'Actually BIDMAS sets a priority order. Multiplication beats Addition no matter where it sits in the expression.',
      reExplanation:
        'For -2 + 5 x 2, the multiplication 5 x 2 = 10 is evaluated first because Multiplication is higher priority than Addition. Then -2 + 10 = 8. Left to right only applies within the same priority level (for example, multiplication and division at the same level, or addition and subtraction at the same level). It does not apply across different levels.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 7 "Positive and Negative Numbers" by Kuchemann, on pupils treating a leading negative sign as if it were a subtraction, leading to slips in BIDMAS evaluation.
    {
      id: 'bwn-mis-leading-negative-as-subtraction',
      description:
        'I treat a leading negative sign in an expression like a subtraction with an invisible zero, so -3 + 4 means 0 - 3 + 4 = 1, not -3 + 4 = 1 (the answer happens to be the same, but the reasoning breaks down with multiplication).',
      triggerAnswer: 'leading-negative-as-subtraction',
      correction:
        'In fact a leading negative sign is part of the number itself. -3 is the number negative three, not the operation 0 minus 3.',
      reExplanation:
        'The mental model "0 - x" gives the right answer in addition but breaks in multiplication. For -3 x 4, the "0 - 3 x 4" model evaluates the multiplication first by BIDMAS: 0 - 12 = -12, which is correct. But the model encourages thinking of the sign as separate, which causes confusion when you meet -3^2 (where the sign and the digit do not bind together). Read the negative as part of the number from the start.',
    },
    // Authored, no external source: classroom-observed slip where Year 7 pupils combine a leading minus and a following operation incorrectly, treating "- + " (negative followed by addition) as a single operation.
    {
      id: 'bwn-mis-stacked-sign-operation',
      description:
        'When I see a negative number immediately followed by an addition or subtraction sign, I treat the two signs as a single operation and apply the "two negatives make a positive" shortcut, so 4 + (-3) becomes 4 + 3 = 7.',
      triggerAnswer: 'stacked-sign-operation',
      correction:
        'Actually the operation between the two numbers is one sign and the sign of the second number is another. Read them separately.',
      reExplanation:
        'For 4 + (-3), the operation is + (addition) and the second number is -3 (negative three). Adding a negative is the same as subtracting a positive: 4 + (-3) = 4 - 3 = 1. The "two negatives make a positive" shortcut applies to subtraction of a negative (5 - (-3) = 5 + 3 = 8), not to addition. Read each sign as belonging to either the operation OR the number, never to both at the same time.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const bidmasWithNegativesZoneNodes = [bidmasWithNegatives]
