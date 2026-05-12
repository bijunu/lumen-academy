import type { SkillNode } from '@/types/content'

export const fourOperationsPowersOfNegatives: SkillNode = {
  id: 'maths-four-operations-powers-of-negatives',
  title: 'Powers of Negative Numbers',
  description:
    'Apply the parity rule for powers of negative numbers: an even power of a negative gives a positive result, while an odd power gives a negative one. Distinguish (-a)^n from -a^n by reading the brackets and the BIDMAS order. Combine these powers with addition, subtraction, multiplication, and division in mixed expressions.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-four-operations',
  zoneName: 'Four Operations',
  tier: 'challenge',
  prerequisites: ['maths-four-operations-multiply-divide-negatives'],
  curriculum: {
    ks3Objective:
      'Use conventional notation for the priority of operations, including brackets, powers, roots and reciprocals; apply the sign rules to powers of negative numbers.',
    awardingBodies: {
      aqa: 'N6 Use positive integer powers and associated real roots; recognise powers of 2, 3, 4, 5 and apply sign rules',
      edexcel: 'N6 Use positive integer powers, including squares and cubes, and apply the sign rules to powers of negative numbers',
      ocr: '1.05a Calculate with powers of integers including negative bases, applying conventional priority of operations',
    },
  },
  scenes: [
    {
      id: 'fpn-scene-parity-grid',
      title: 'The Parity Grid',
      type: 'diagram',
      instructions:
        'Read the four worked rows below. An even power of a negative base lands on a positive answer; an odd power keeps the answer negative. The pattern repeats no matter which negative base is used.',
      data: {
        positiveColour: '#22C55E',
        negativeColour: '#EF4444',
        examples: [
          {
            sum: '(-2)^2',
            description: 'two negatives multiplied, even power',
            sign: 'positive',
            result: 4,
          },
          {
            sum: '(-2)^3',
            description: 'three negatives multiplied, odd power',
            sign: 'negative',
            result: -8,
          },
          {
            sum: '(-2)^4',
            description: 'four negatives multiplied, even power',
            sign: 'positive',
            result: 16,
          },
          {
            sum: '(-2)^5',
            description: 'five negatives multiplied, odd power',
            sign: 'negative',
            result: -32,
          },
        ],
        notes:
          'Each pair of negatives cancels into a positive. An even count of negative factors leaves nothing left over; an odd count leaves one minus sign behind, which makes the final answer negative.',
      },
    },
    {
      id: 'fpn-scene-bracket-or-not',
      title: 'Bracket or No Bracket',
      type: 'diagram',
      instructions:
        'Compare the two columns. The bracket decides whether the negative is part of the base or a separate sign applied at the end. BIDMAS handles powers before any leading minus that sits outside a bracket.',
      data: {
        positiveColour: '#22C55E',
        negativeColour: '#EF4444',
        examples: [
          {
            sum: '(-3)^2',
            description: 'the whole bracket is squared, so (-3) times (-3) = 9',
            sign: 'positive',
            result: 9,
          },
          {
            sum: '-3^2',
            description: 'BIDMAS squares 3 first, then the leading minus negates the result, so -(3 squared) = -9',
            sign: 'negative',
            result: -9,
          },
          {
            sum: '(-4)^2',
            description: 'the whole bracket is squared, so (-4) times (-4) = 16',
            sign: 'positive',
            result: 16,
          },
          {
            sum: '-4^2',
            description: 'BIDMAS squares 4 first, then the leading minus negates the result, so -(4 squared) = -16',
            sign: 'negative',
            result: -16,
          },
        ],
        notes:
          'A bracket around the base means the negative goes into the multiplication. Without a bracket, the power binds to the digit only, and the leading minus is applied last.',
      },
    },
    {
      id: 'fpn-scene-mixed-bidmas',
      title: 'Powers Inside a Mixed Calculation',
      type: 'number-line',
      instructions:
        'Look at how each calculation resolves on the number line. Powers come before addition and subtraction, so the cube or square is worked out first and then added or subtracted.',
      data: {
        range: [-15, 15],
        step: 1,
        startMark: 0,
        labelledTicks: [-15, -10, -5, 0, 5, 10, 15],
        examples: [
          {
            calculation: '5 + (-2)^3',
            from: 5,
            direction: 'left',
            steps: 8,
            to: -3,
          },
          {
            calculation: '5 - (-2)^3',
            from: 5,
            direction: 'right',
            steps: 8,
            to: 13,
          },
          {
            calculation: '10 + (-3)^2',
            from: 10,
            direction: 'right',
            steps: 9,
            to: 19,
          },
        ],
        notes:
          'BIDMAS resolves each power first. (-2)^3 = -8, so 5 + (-2)^3 = 5 + (-8) = -3, and 5 - (-2)^3 = 5 - (-8) = 5 + 8 = 13. (-3)^2 = 9, so 10 + (-3)^2 = 10 + 9 = 19.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'fpn-worked-1',
      title: 'Computing (-3)^4 by repeated multiplication',
      steps: [
        {
          explanation:
            'We want to compute (-3)^4. The bracket means the whole of -3 is the base, raised to the fourth power.',
          maths: '(-3)^4',
        },
        {
          explanation:
            'Write the calculation out as four copies of -3 multiplied together.',
          maths: '(-3) × (-3) × (-3) × (-3)',
        },
        {
          explanation:
            'Pair the negatives. The first pair (-3) × (-3) gives a positive 9 because two matching signs multiply to a positive.',
          maths: '(-3) × (-3) = 9',
        },
        {
          explanation:
            'The second pair (-3) × (-3) also gives 9 for the same reason.',
          maths: '(-3) × (-3) = 9',
        },
        {
          explanation:
            'Now multiply the two pair results: 9 × 9 = 81. The answer is positive because the power 4 is even.',
          maths: '9 × 9 = 81',
        },
        {
          explanation:
            'So (-3)^4 = 81. The parity rule confirms it: an even power of a negative base is positive.',
          maths: '(-3)^4 = 81',
        },
      ],
    },
    {
      id: 'fpn-worked-2',
      title: 'Comparing (-5)^2 with -5^2 by reading the brackets',
      steps: [
        {
          explanation: 'We want to compare (-5)^2 with -5^2.',
          maths: '(-5)^2 vs -5^2',
        },
        {
          explanation:
            'For (-5)^2 the bracket includes the minus sign, so the base is -5. Square the whole base: (-5) × (-5) = 25.',
          maths: '(-5)^2 = (-5) × (-5) = 25',
        },
        {
          explanation:
            'For -5^2 there is no bracket. By BIDMAS, the power binds to the 5 first. Square the 5: 5^2 = 25.',
          maths: '5^2 = 25',
        },
        {
          explanation:
            'Then apply the leading minus to the result: -(25) = -25.',
          maths: '-5^2 = -(5^2) = -25',
        },
        {
          explanation:
            'So (-5)^2 = 25 but -5^2 = -25. The bracket decides whether the minus sign is part of the base or sits outside the power.',
          maths: '(-5)^2 = 25, -5^2 = -25',
        },
      ],
    },
    {
      id: 'fpn-worked-3',
      title: 'Computing 7 - (-2)^3 step by step using BIDMAS',
      steps: [
        {
          explanation:
            'We want to compute 7 - (-2)^3. By BIDMAS, the bracketed base raised to the power is resolved before the subtraction.',
          maths: '7 - (-2)^3',
        },
        {
          explanation:
            'Work out (-2)^3 first. Write it as three copies of -2 multiplied together.',
          maths: '(-2)^3 = (-2) × (-2) × (-2)',
        },
        {
          explanation:
            'The first pair gives (-2) × (-2) = 4 because two matching signs multiply to a positive.',
          maths: '(-2) × (-2) = 4',
        },
        {
          explanation:
            'Multiply by the remaining -2: 4 × (-2) = -8. The result is negative because the power 3 is odd.',
          maths: '4 × (-2) = -8',
        },
        {
          explanation:
            'Substitute back into the original calculation: 7 - (-8).',
          maths: '7 - (-8)',
        },
        {
          explanation:
            'Subtracting a negative is the same as adding a positive, so 7 - (-8) = 7 + 8 = 15.',
          maths: '7 - (-2)^3 = 15',
        },
      ],
    },
  ],
  questions: [
    // CORE TIER (7)
    {
      id: 'fpn-q1',
      type: 'multiple-choice',
      stem: 'What is (-2)^2?',
      tier: 'core',
      options: ['-4', '4', '-2', '2'],
      correctIndex: 1,
      xpValue: 10,
      hint: '(-2)^2 means (-2) × (-2). Two matching signs in a multiplication give a positive result.',
      misconceptionId: 'fpn-mis-keep-sign-after-square',
    },
    {
      id: 'fpn-q2',
      type: 'multiple-choice',
      stem: 'What is (-2)^3?',
      tier: 'core',
      options: ['8', '-6', '-8', '6'],
      correctIndex: 2,
      xpValue: 10,
      hint: '(-2)^3 means (-2) × (-2) × (-2). The first pair gives 4; multiplying by the last -2 keeps the answer negative.',
      misconceptionId: 'fpn-mis-negative-always-negative',
    },
    {
      id: 'fpn-q3',
      type: 'numeric-entry',
      stem: 'Compute (-3)^2. Enter your answer as an integer.',
      tier: 'core',
      correctAnswer: 9,
      xpValue: 10,
      hint: '(-3)^2 means (-3) × (-3). Two matching signs multiplied give a positive.',
      misconceptionId: 'fpn-mis-keep-sign-after-square',
    },
    {
      id: 'fpn-q4',
      type: 'numeric-entry',
      stem: 'Compute (-4)^3. Enter your answer as an integer.',
      tier: 'core',
      correctAnswer: -64,
      xpValue: 10,
      hint: 'Three copies of -4 multiplied. The first pair gives 16; multiplying by the last -4 makes the result negative.',
      misconceptionId: 'fpn-mis-negative-always-negative',
    },
    {
      id: 'fpn-q5',
      type: 'multiple-choice',
      stem: 'Pick the true statement about powers of negative numbers.',
      tier: 'core',
      options: [
        'A negative base raised to any power gives a negative result.',
        'A negative base raised to an even power gives a positive result; an odd power gives a negative result.',
        'A negative base raised to any power gives a positive result, because two negatives always cancel.',
        'A negative base raised to an even power gives a negative result; an odd power gives a positive result.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'fpn-mis-negative-always-negative',
    },
    {
      id: 'fpn-q6',
      type: 'multiple-choice',
      stem: 'What is (-1)^7?',
      tier: 'core',
      options: ['1', '-7', '7', '-1'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Each (-1) factor flips the sign once. Seven flips is odd, so the final sign is negative.',
      misconceptionId: 'fpn-mis-negative-always-negative',
    },
    {
      id: 'fpn-q7',
      type: 'numeric-entry',
      stem: 'Compute (-5)^2. Enter your answer as an integer.',
      tier: 'core',
      correctAnswer: 25,
      xpValue: 10,
      hint: '(-5)^2 means (-5) × (-5). Two matching signs multiplied give a positive.',
      misconceptionId: 'fpn-mis-keep-sign-after-square',
    },

    // CONFIDENT TIER (8)
    {
      id: 'fpn-q8',
      type: 'multiple-choice',
      stem: 'What is the value of -3^2?',
      tier: 'confident',
      options: ['9', '-6', '6', '-9'],
      correctIndex: 3,
      xpValue: 15,
      hint: 'There is no bracket around the -3. By BIDMAS, the power binds to the 3 first, then the leading minus is applied to the result.',
      misconceptionId: 'fpn-mis-no-bracket-treated-as-bracket',
    },
    {
      id: 'fpn-q9',
      type: 'multiple-choice',
      stem: 'Which two expressions are NOT equal to each other?',
      tier: 'confident',
      options: [
        '(-4)^2 and 16',
        '(-2)^4 and 16',
        '(-4)^2 and -4^2',
        '-(4^2) and -16',
      ],
      correctIndex: 2,
      xpValue: 15,
      hint: '(-4)^2 squares the whole bracket, but -4^2 squares only the 4 and then negates. Compare the two values.',
      misconceptionId: 'fpn-mis-no-bracket-treated-as-bracket',
    },
    {
      id: 'fpn-q10',
      type: 'numeric-entry',
      stem: 'Compute (-2)^4. Enter your answer as an integer.',
      tier: 'confident',
      correctAnswer: 16,
      xpValue: 15,
      hint: 'Pair the negatives: (-2) × (-2) = 4, and another (-2) × (-2) = 4. Multiply the two pair results: 4 × 4 = 16.',
      misconceptionId: 'fpn-mis-negative-always-negative',
    },
    {
      id: 'fpn-q11',
      type: 'numeric-entry',
      stem: 'Compute -2^4. Enter your answer as an integer.',
      tier: 'confident',
      correctAnswer: -16,
      xpValue: 15,
      hint: 'No bracket around the 2. By BIDMAS, work out 2^4 = 16 first, then apply the leading minus.',
      misconceptionId: 'fpn-mis-no-bracket-treated-as-bracket',
    },
    {
      id: 'fpn-q12',
      type: 'multiple-choice',
      stem: 'What is (-3)^2 + (-2)^3?',
      tier: 'confident',
      options: ['1', '-1', '17', '-17'],
      correctIndex: 0,
      xpValue: 15,
      hint: 'BIDMAS resolves each power first. (-3)^2 = 9 and (-2)^3 = -8. Then 9 + (-8) = 1.',
      misconceptionId: 'fpn-mis-power-after-add',
    },
    {
      id: 'fpn-q13',
      type: 'spot-misconception',
      stem: 'Maya says: "(-3)^2 must be -9, because the minus sign stays attached to the 9 after squaring."',
      tier: 'confident',
      statements: [
        {
          text: 'Maya is right. Squaring keeps the original sign of the base, so (-3)^2 = -9.',
          isMisconception: true,
        },
        {
          text: 'Maya is wrong. (-3)^2 means (-3) × (-3), and two matching signs multiplied give a positive, so (-3)^2 = 9.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fpn-mis-keep-sign-after-square',
    },
    {
      id: 'fpn-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step. Compute (-2)^3 × (-3).',
      tier: 'confident',
      steps: [
        'Read the calculation: (-2)^3 means three copies of -2 multiplied together.',
        '(-2) × (-2) = 4, and 4 × (-2) = -8, so (-2)^3 = -8.',
        null,
        'Multiply 8 × 3 = 24, so (-8) × (-3) = 24.',
        'So (-2)^3 × (-3) = 24.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Substitute back into the calculation: (-8) × (-3). Two matching signs in a multiplication give a positive result.',
      xpValue: 20,
    },
    {
      id: 'fpn-q15',
      type: 'multiple-choice',
      stem: 'Without working out the digits, what is the sign of (-7)^11?',
      tier: 'confident',
      options: [
        'positive, because 11 is greater than 1',
        'positive, because every power of a negative number is positive',
        'negative, because 11 is an odd power of a negative base',
        'negative, because 11 is greater than 7',
      ],
      correctIndex: 2,
      xpValue: 15,
      hint: 'Use the parity rule. An odd power of a negative base keeps the result negative; an even power flips it positive.',
      misconceptionId: 'fpn-mis-negative-always-negative',
    },

    // CHALLENGE TIER (6)
    {
      id: 'fpn-q16',
      type: 'numeric-entry',
      stem: 'A weather station near Manchester logs the overnight temperature change as (-2)^3 degrees Celsius. The starting temperature at sunset was 5 degrees Celsius. What is the temperature at dawn, in degrees Celsius?',
      tier: 'challenge',
      correctAnswer: -3,
      xpValue: 25,
      unit: 'degrees Celsius',
      hint: 'First compute the change as (-2)^3. Then add that change to the starting temperature.',
      misconceptionId: 'fpn-mis-parity-on-no-bracket',
    },
    {
      id: 'fpn-q17',
      type: 'multiple-choice',
      stem: 'A submarine off the Cornish coast records its depth change in metres each minute as (-3)^2 - (-2)^3. After one minute, what is the change in depth, in metres, compared with where it started?',
      tier: 'challenge',
      options: ['17', '1', '-17', '-1'],
      correctIndex: 0,
      xpValue: 25,
      hint: 'Resolve each power first. (-3)^2 = 9 and (-2)^3 = -8. Then compute 9 - (-8) carefully.',
      misconceptionId: 'fpn-mis-subtract-negative-power',
    },
    {
      id: 'fpn-q18',
      type: 'numeric-entry',
      stem: 'Compute (-2)^4 + (-3)^3. Enter your answer as an integer.',
      tier: 'challenge',
      correctAnswer: -11,
      xpValue: 25,
      hint: 'Resolve each power separately using the parity rule. (-2)^4 is positive; (-3)^3 is negative. Then add them.',
      misconceptionId: 'fpn-mis-negative-always-negative',
    },
    {
      id: 'fpn-q19',
      type: 'spot-misconception',
      stem: 'Tom says: "-2^4 = 16, because four copies of -2 multiplied give a positive answer."',
      tier: 'challenge',
      statements: [
        {
          text: 'Tom is right. -2^4 means four copies of -2 multiplied, and an even power of a negative gives a positive, so the answer is 16.',
          isMisconception: true,
        },
        {
          text: 'Tom is wrong. Without a bracket, BIDMAS squares 2 first to give 16, then the leading minus is applied, so -2^4 = -16.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'fpn-mis-parity-on-no-bracket',
    },
    {
      id: 'fpn-q20',
      type: 'missing-step',
      stem: 'Fill in the missing step. Compute 20 + (-3)^2 - (-2)^3.',
      tier: 'challenge',
      steps: [
        'Resolve the powers first using BIDMAS. (-3)^2 = 9.',
        '(-2)^3 = (-2) × (-2) × (-2) = -8.',
        null,
        'Then 29 - (-8). Subtracting a negative is the same as adding a positive, so this is 29 + 8 = 37.',
        'So 20 + (-3)^2 - (-2)^3 = 37.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Substitute back: 20 + 9 - (-8). Working left to right, 20 + 9 = 29.',
      xpValue: 25,
    },
    {
      id: 'fpn-q21',
      type: 'drag-order',
      stem: 'Drag these expressions into order from smallest result to largest.',
      tier: 'challenge',
      items: ['(-2)^3', '-3^2', '(-1)^6', '(-2)^2', '(-3)^2'],
      correctOrder: [1, 0, 2, 3, 4],
      xpValue: 25,
      hint: 'Resolve each one carefully. Watch for the bracket-or-no-bracket trap on -3^2, and use the parity rule for the others.',
    },
  ],
  misconceptions: [
    // Source: CGP KS3 Maths Study Guide (Years 7-9), Powers and Roots chapter, "Common mistake" callout on the negative-squared error. Reinforced by Vlassis, J. (2004), "Making sense of the minus sign or becoming flexible in 'negativity'", Learning and Instruction 14(5), 469-484, on persistent sign-keeping after squaring.
    {
      id: 'fpn-mis-keep-sign-after-square',
      description:
        'Believing that squaring a negative base keeps the negative sign, so (-3)^2 must be -9 because the minus is treated as part of the answer.',
      triggerAnswer: 'keep-sign-after-square',
      correction:
        'In fact (-3)^2 means (-3) × (-3). Two matching signs multiplied give a positive, so (-3)^2 = 9.',
      reExplanation:
        'Write the bracket out: (-3)^2 = (-3) × (-3). Pair the two negatives. They cancel into a positive, the digits give 9, and the answer is +9. The same logic applies to any even power of a negative base.',
    },
    // Source: AQA GCSE Mathematics 8300 examiner reports, recurring across the 2017-2023 series, on items where pupils computed (-3)^4 as -81 by claiming "negative to any power stays negative". Reinforced by CGP KS3 Maths Study Guide (Years 7-9), Powers and Roots chapter, on the parity rule.
    {
      id: 'fpn-mis-negative-always-negative',
      description:
        'Believing that any power of a negative base must give a negative result, ignoring the parity of the exponent.',
      triggerAnswer: 'negative-always-negative',
      correction:
        'In fact the parity matters. An even power gives a positive result; an odd power gives a negative result.',
      reExplanation:
        '(-2)^4 = (-2) × (-2) × (-2) × (-2). Pair the negatives: each pair gives +4, and 4 × 4 = 16. With four negatives, every minus sign cancels. With three negatives, one minus is left over, so (-2)^3 = -8.',
    },
    // Source: OCR GCSE Mathematics J560 Foundation tier examiner reports across the 2017-2023 series, on items where pupils interpreted -a^2 and (-a)^2 as the same expression. Reinforced by CGP KS3 Maths Study Guide (Years 7-9), BIDMAS chapter, on the unary minus and bracket convention.
    {
      id: 'fpn-mis-no-bracket-treated-as-bracket',
      description:
        'Treating -a^n as if it were (-a)^n by reading the leading minus as part of the base, ignoring that BIDMAS resolves the power before applying the leading minus.',
      triggerAnswer: 'no-bracket-treated-as-bracket',
      correction:
        'Without a bracket the power binds to the digit only. By BIDMAS, work out a^n first, then apply the leading minus to the result.',
      reExplanation:
        '-3^2 is not the same as (-3)^2. By BIDMAS, the power comes before the unary minus, so 3^2 = 9 and the leading minus negates that to -9. With brackets, (-3)^2 squares the whole base and gives +9. The bracket changes the meaning.',
    },
    // Source: Edexcel GCSE Mathematics 1MA1 Foundation tier (Paper 1F) examiner reports across the 2017-2023 series, on items where pupils applied the parity rule to -a^n expressions and got the wrong sign. Reinforced by CGP KS3 Maths Study Guide (Years 7-9), Powers and Roots chapter, on the order of operations with leading minus.
    {
      id: 'fpn-mis-parity-on-no-bracket',
      description:
        'Applying the parity rule (even power = positive, odd power = negative) to expressions of the form -a^n, where the negative is not part of the base.',
      triggerAnswer: 'parity-on-no-bracket',
      correction:
        'The parity rule only works when the negative is inside a bracket, as in (-a)^n. For -a^n the leading minus is applied after the power, so the result is always the negative of a^n.',
      reExplanation:
        '-2^4 looks like it should be +16 by parity, but there is no bracket. BIDMAS gives 2^4 = 16 first, then the leading minus makes it -16. Always check for a bracket around the base before using the parity rule.',
    },
    // Source: Bell, A. (1986), "Diagnostic teaching: 2 - Developing conflict - discussion lessons", Mathematics Teaching 116, 26-29, on pupils ignoring BIDMAS when a power appears in a mixed expression. Reinforced by AQA GCSE Mathematics 8300 examiner reports across the 2017-2023 series, on items mixing addition or subtraction with powers of negatives.
    {
      id: 'fpn-mis-power-after-add',
      description:
        'Working a mixed expression like 5 + (-2)^3 from left to right, computing 5 + (-2) first and then cubing the result, instead of resolving the power first.',
      triggerAnswer: 'power-after-add',
      correction:
        'BIDMAS resolves powers before addition or subtraction. Work out the power first, then combine the result with the rest of the expression.',
      reExplanation:
        '5 + (-2)^3 is not (5 + (-2))^3. Powers come before addition in BIDMAS, so first compute (-2)^3 = -8. Then 5 + (-8) = -3. The left to right reading would give 27, which is wrong.',
    },
    // Source: Vlassis, J. (2004), Learning and Instruction 14(5), 469-484, on the "double minus" symbol confusion when subtraction meets a negative power result. Reinforced by CGP KS3 Maths Study Guide (Years 7-9), Negative Numbers chapter, on subtracting a negative.
    {
      id: 'fpn-mis-subtract-negative-power',
      description:
        'Reading 7 - (-2)^3 as 7 - 8 because the cube of -2 is treated as a positive 8, ignoring that an odd power of a negative is negative.',
      triggerAnswer: 'subtract-negative-power',
      correction:
        'First resolve the power. (-2)^3 = -8 because the power 3 is odd. Then 7 - (-8) = 7 + 8 = 15.',
      reExplanation:
        'Two errors stack here: missing the parity rule, then missing the double minus. (-2)^3 = -8, not 8. Subtracting a negative is the same as adding a positive, so 7 - (-8) = 15. Resolve the power first, then handle the sign.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const fourOperationsPowersOfNegativesZoneNodes = [
  fourOperationsPowersOfNegatives,
]
