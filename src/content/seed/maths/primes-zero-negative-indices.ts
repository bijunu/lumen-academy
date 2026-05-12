import type { SkillNode } from '@/types/content'

export const primesZeroNegativeIndices: SkillNode = {
  id: 'maths-primes-zero-negative-indices',
  title: 'Zero and Negative Indices',
  description:
    'Interpret and apply zero and negative integer indices. Derive the rule a^0 = 1 by writing a^n / a^n two ways: anything over itself is 1, and the division law gives a^(n-n) = a^0. Derive the rule a^(-n) = 1/a^n by writing a^0 / a^n two ways. Use the rules to evaluate expressions, simplify products and quotients with negative powers, and chain with the multiplication, division, and power-of-power laws.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-primes',
  zoneName: 'Primes',
  tier: 'challenge',
  prerequisites: ['maths-primes-indices-division'],
  curriculum: {
    ks3Objective:
      'Interpret and apply zero and negative integer indices.',
    awardingBodies: {
      aqa: 'N7 Calculate with negative and zero indices: a^0 = 1, a^(-n) = 1/a^n (GCSE Mathematics 8300)',
      edexcel: 'N7 Apply the index laws to zero and negative integer indices (GCSE Mathematics 1MA1)',
      ocr: '1.05c Apply the index laws to zero and negative integer indices (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'pzn-scene-derive-zero',
      title: 'Why Anything to the Power of Zero is 1',
      type: 'labelled-diagram',
      instructions:
        'Two ways to evaluate 2^3 / 2^3 must agree. Way 1: anything divided by itself is 1, so 2^3 / 2^3 = 8 / 8 = 1. Way 2: the division law gives 2^3 / 2^3 = 2^(3-3) = 2^0. Both routes start with the same expression, so 2^0 = 1. The same argument works for any non-zero base a, giving the rule a^0 = 1. The case 0^0 is left undefined at KS3 because the two routes disagree.',
      data: {
        viewBox: '0 0 200 120',
        hotspots: [
          { id: 'pzn-h-start', x: 50, y: 12, label: 'Start: 2^3 / 2^3', description: 'Same expression, two routes.' },
          { id: 'pzn-h-route1', x: 20, y: 50, label: 'Route 1: 8 / 8 = 1', description: 'Anything over itself is 1.' },
          { id: 'pzn-h-route2', x: 80, y: 50, label: 'Route 2: 2^(3-3) = 2^0', description: 'Apply the division law for indices.' },
          { id: 'pzn-h-equal', x: 50, y: 88, label: 'Both routes agree: 2^0 = 1', description: 'Generalises to a^0 = 1 for any a not equal to 0.' },
        ],
      },
    },
    {
      id: 'pzn-scene-derive-negative',
      title: 'Why a Negative Index Means a Reciprocal',
      type: 'simulation',
      instructions:
        'A negative index also comes from the division law. Write 2^0 / 2^3 in two ways. Way 1: 2^0 = 1, so 2^0 / 2^3 = 1 / 2^3 = 1/8. Way 2: the division law gives 2^0 / 2^3 = 2^(0-3) = 2^(-3). Both routes start with the same expression, so 2^(-3) = 1/8. The same argument works for any non-zero base, giving the rule a^(-n) = 1/a^n.',
      data: {
        derivations: [
          { expression: '2^0 / 2^3', route1: '1 / 2^3 = 1/8', route2: '2^(0-3) = 2^(-3)', conclusion: '2^(-3) = 1/8' },
          { expression: '5^0 / 5^2', route1: '1 / 5^2 = 1/25', route2: '5^(0-2) = 5^(-2)', conclusion: '5^(-2) = 1/25' },
          { expression: '3^0 / 3^1', route1: '1 / 3 = 1/3', route2: '3^(0-1) = 3^(-1)', conclusion: '3^(-1) = 1/3' },
        ],
        rule: 'a^(-n) = 1/a^n. The negative index flips the base; it does not make the answer negative.',
      },
    },
    {
      id: 'pzn-scene-mixed-laws',
      title: 'Combining Negative Indices with the Other Laws',
      type: 'simulation',
      instructions:
        'Negative indices follow all the usual index laws. The multiplication law a^m x a^n = a^(m+n) still holds when m or n is negative. So 2^5 x 2^(-3) = 2^(5-3) = 2^2 = 4. The division law a^m / a^n = a^(m-n) still holds. So x^2 / x^(-4) = x^(2-(-4)) = x^6. The power-of-a-power law (a^m)^n = a^(mn) still holds. So (x^2)^(-3) = x^(-6) = 1/x^6. The negative sign is part of the index, not a separate operation; it travels with the number through every step.',
      data: {
        examples: [
          { input: '2^5 x 2^(-3)', law: 'multiplication: add indices', work: '2^(5 + (-3)) = 2^2', value: 4 },
          { input: 'x^2 / x^(-4)', law: 'division: subtract indices', work: 'x^(2 - (-4)) = x^6', value: 'x^6' },
          { input: '(x^2)^(-3)', law: 'power of a power: multiply indices', work: 'x^(2 x -3) = x^(-6) = 1/x^6', value: '1/x^6' },
          { input: '3^(-2) x 3^2', law: 'multiplication: add indices', work: '3^(-2+2) = 3^0 = 1', value: 1 },
        ],
        rule: 'Treat the negative index as part of the number. Apply the same index laws as for positive integers.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'pzn-worked-1',
      title: 'Evaluate 5^0, 7^(-2), and (1/2)^(-1)',
      steps: [
        {
          explanation: 'For 5^0, use the rule a^0 = 1 for any non-zero base.',
          maths: '5^0 = 1',
        },
        {
          explanation: 'For 7^(-2), use the rule a^(-n) = 1/a^n. Take the reciprocal of 7^2.',
          maths: '7^(-2) = 1 / 7^2',
        },
        {
          explanation: 'Evaluate the denominator. 7^2 = 7 x 7 = 49.',
          maths: '7^(-2) = 1/49',
        },
        {
          explanation: 'For (1/2)^(-1), the negative index says take the reciprocal. The reciprocal of 1/2 is 2.',
          maths: '(1/2)^(-1) = 2',
        },
        {
          explanation: 'Final answers: 5^0 = 1, 7^(-2) = 1/49, (1/2)^(-1) = 2.',
          maths: '5^0 = 1; 7^(-2) = 1/49; (1/2)^(-1) = 2',
        },
      ],
    },
    {
      id: 'pzn-worked-2',
      title: 'Simplify (x^2)^3 x x^(-5) as a single power of x',
      steps: [
        {
          explanation: 'Apply the power-of-a-power law to (x^2)^3 first. Multiply the indices.',
          maths: '(x^2)^3 = x^(2 x 3) = x^6',
        },
        {
          explanation: 'Now the expression reads x^6 x x^(-5). The bases match, so use the multiplication law and add the indices.',
          maths: 'x^6 x x^(-5) = x^(6 + (-5))',
        },
        {
          explanation: 'Add 6 and -5 carefully. 6 + (-5) = 1.',
          maths: 'x^(6 + (-5)) = x^1',
        },
        {
          explanation: 'Anything to the power 1 is itself, so x^1 = x.',
          maths: 'x^1 = x',
        },
        {
          explanation: 'So (x^2)^3 x x^(-5) simplifies to x.',
          maths: '(x^2)^3 x x^(-5) = x',
        },
      ],
    },
  ],
  questions: [
    // Core 1: a^0 = 1, base 5
    {
      id: 'pzn-q1',
      type: 'multiple-choice',
      stem: 'What is the value of 5^0?',
      tier: 'core',
      options: ['0', '5', '1/5', '1'],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'pzn-mis-zero-power-is-zero',
      hint: 'Any non-zero base raised to the power 0 equals 1, by the division law a^n / a^n = a^0 = 1.',
    },
    // Core 2: a^0 = 1, base 100
    {
      id: 'pzn-q2',
      type: 'multiple-choice',
      stem: 'What is the value of 100^0?',
      tier: 'core',
      options: ['0', '1', '10', '100'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pzn-mis-zero-power-is-zero',
      hint: 'The base does not matter (provided it is not 0). a^0 = 1 for every non-zero a.',
    },
    // Core 3: evaluate 2^(-3)
    {
      id: 'pzn-q3',
      type: 'numeric-entry',
      stem: 'Evaluate 2^(-3) and write the answer as a fraction in the form 1/n. What is n?',
      tier: 'core',
      correctAnswer: 8,
      xpValue: 10,
      misconceptionId: 'pzn-mis-negative-index-makes-negative',
      hint: 'a^(-n) = 1/a^n. So 2^(-3) = 1/2^3 = 1/8. The denominator n is 8.',
    },
    // Core 4: evaluate 3^(-2)
    {
      id: 'pzn-q4',
      type: 'numeric-entry',
      stem: 'Evaluate 3^(-2) and write the answer as a fraction in the form 1/n. What is n?',
      tier: 'core',
      correctAnswer: 9,
      xpValue: 10,
      hint: '3^(-2) = 1/3^2 = 1/9. The denominator n is 9.',
    },
    // Core 5: convert 4^(-1) to a fraction
    {
      id: 'pzn-q5',
      type: 'multiple-choice',
      stem: 'Which of the following is equal to 4^(-1)?',
      tier: 'core',
      options: ['1/4', '-4', '0', '4'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pzn-mis-negative-index-makes-negative',
      hint: 'A negative index gives the reciprocal: 4^(-1) = 1/4. The answer is positive; the minus sign sits with the index, not the value.',
    },
    // Core 6: convert x^(-5) to fraction form
    {
      id: 'pzn-q6',
      type: 'multiple-choice',
      stem: 'Rewrite x^(-5) without a negative index.',
      tier: 'core',
      options: ['-x^5', '-5x', 'x^5', '1/x^5'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Use the rule a^(-n) = 1/a^n. So x^(-5) = 1/x^5.',
    },
    // Core 7: spot-misconception on a^0 = 0
    {
      id: 'pzn-q7',
      type: 'spot-misconception',
      stem: 'Daisy says 8^0 = 0 because "if you multiply 8 by itself zero times, you get nothing".',
      tier: 'core',
      statements: [
        {
          text: 'Daisy is right. Zero copies of 8 means no 8s at all, so the answer is 0.',
          isMisconception: true,
        },
        {
          text: 'In fact 8^0 = 1. The rule a^0 = 1 comes from the division law: 8^3 / 8^3 = 1 (anything over itself), and 8^3 / 8^3 = 8^(3-3) = 8^0. Both routes must agree, so 8^0 = 1.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pzn-mis-zero-power-is-zero',
    },
    // Confident 1: simplify x^4 x x^(-2)
    {
      id: 'pzn-q8',
      type: 'multiple-choice',
      stem: 'Simplify x^4 x x^(-2) as a single power of x.',
      tier: 'confident',
      options: ['x^6', 'x^2', 'x^(-2)', 'x^(-8)'],
      correctIndex: 1,
      xpValue: 15,
      hint: 'Multiplication law: add the indices. 4 + (-2) = 2. So x^4 x x^(-2) = x^2.',
    },
    // Confident 2: simplify x^3 / x^(-4)
    {
      id: 'pzn-q9',
      type: 'multiple-choice',
      stem: 'Simplify x^3 / x^(-4) as a single power of x.',
      tier: 'confident',
      options: ['x^7', 'x^(-1)', 'x^(-12)', 'x^(-7)'],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'pzn-mis-subtract-sign-error',
      hint: 'Division law: subtract the indices. 3 - (-4) = 3 + 4 = 7. So x^3 / x^(-4) = x^7.',
    },
    // Confident 3: power of a power with negative index
    {
      id: 'pzn-q10',
      type: 'numeric-entry',
      stem: '(x^(-2))^3 simplifies to x^k. What is the value of k?',
      tier: 'confident',
      correctAnswer: -6,
      xpValue: 15,
      hint: 'Power-of-a-power law: multiply the indices. -2 x 3 = -6, so the result is x^(-6) and k = -6.',
    },
    // Confident 4: evaluate (1/2)^(-1)
    {
      id: 'pzn-q11',
      type: 'numeric-entry',
      stem: 'Evaluate (1/2)^(-1).',
      tier: 'confident',
      correctAnswer: 2,
      xpValue: 15,
      hint: 'A negative index gives the reciprocal. The reciprocal of 1/2 is 2/1 = 2.',
    },
    // Confident 5: missing step in deriving 2^(-3) = 1/8
    {
      id: 'pzn-q12',
      type: 'missing-step',
      stem: 'Fill in the missing step. Tariq derives the value of 2^(-3) from the division law.',
      tier: 'confident',
      steps: [
        'Start: 2^0 / 2^3.',
        'Route 1: use 2^0 = 1, so 2^0 / 2^3 = 1 / 2^3.',
        null,
        'Both routes agree, so 2^(-3) = 1 / 2^3 = 1/8.',
      ],
      missingStepIndex: 2,
      correctStep: 'Route 2: apply the division law, 2^0 / 2^3 = 2^(0-3) = 2^(-3).',
      xpValue: 20,
    },
    // Confident 6: spot-misconception on negative index meaning negative number
    {
      id: 'pzn-q13',
      type: 'spot-misconception',
      stem: 'Mira evaluates 2^(-3) as -8 because "the minus sign in the index becomes a minus sign in the answer".',
      tier: 'confident',
      statements: [
        {
          text: 'Mira is right. A negative index just adds a minus sign to the usual answer.',
          isMisconception: true,
        },
        {
          text: 'In fact 2^(-3) = 1/8. The negative index means "take the reciprocal": a^(-n) = 1/a^n. The answer is a positive fraction, not a negative whole number. The minus sign stays with the index inside the rule, not with the final value.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pzn-mis-negative-index-makes-negative',
    },
    // Confident 7: convert 1/x^4 back to negative-index form
    {
      id: 'pzn-q14',
      type: 'multiple-choice',
      stem: 'Rewrite 1/x^4 as a single power of x.',
      tier: 'confident',
      options: ['x^4', '-x^4', 'x^(-4)', '-x^(-4)'],
      correctIndex: 2,
      xpValue: 15,
      hint: 'The rule a^(-n) = 1/a^n works in both directions. Reading right to left, 1/x^4 = x^(-4).',
    },
    // Confident 8: drag-order values
    {
      id: 'pzn-q15',
      type: 'drag-order',
      stem: 'Drag these values into order from smallest to largest.',
      tier: 'confident',
      items: ['2^(-3)', '2^(-1)', '2^0', '2^2'],
      correctOrder: [0, 1, 2, 3],
      xpValue: 20,
      hint: '2^(-3) = 1/8 = 0.125. 2^(-1) = 1/2 = 0.5. 2^0 = 1. 2^2 = 4. Order: 1/8, 1/2, 1, 4.',
    },
    // Challenge 1: chain of laws (x^2)^3 x x^(-5)
    {
      id: 'pzn-q16',
      type: 'numeric-entry',
      stem: 'Simplify (x^2)^3 x x^(-5) as a single power of x. The result is x^k. What is k?',
      tier: 'challenge',
      correctAnswer: 1,
      xpValue: 25,
      hint: '(x^2)^3 = x^6 (multiply indices). Then x^6 x x^(-5) = x^(6 + (-5)) = x^1, so k = 1.',
    },
    // Challenge 2: word problem with reciprocal halving (Bond-style)
    {
      id: 'pzn-q17',
      type: 'numeric-entry',
      stem: 'A scientist measures the brightness of a fading lamp every minute. Each minute the brightness is multiplied by 2^(-1). The starting brightness is 16 lumens. What is the brightness, in lumens, after 4 minutes?',
      tier: 'challenge',
      correctAnswer: 1,
      xpValue: 30,
      hint: 'Multiplying by 2^(-1) four times in a row is the same as multiplying by (2^(-1))^4 = 2^(-4) = 1/16. So brightness = 16 x 1/16 = 1 lumen.',
    },
    // Challenge 3: combine division and negative index (cancel to power 0)
    {
      id: 'pzn-q18',
      type: 'multiple-choice',
      stem: 'Simplify (x^(-3) x x^5) / x^2.',
      tier: 'challenge',
      options: ['1', 'x^(-10)', 'x^4', 'x^(-4)'],
      correctIndex: 0,
      xpValue: 25,
      hint: 'Top: x^(-3) x x^5 = x^(-3+5) = x^2. Then x^2 / x^2 = x^(2-2) = x^0 = 1.',
    },
    // Challenge 4: negative-index drag-order with mixed bases
    {
      id: 'pzn-q19',
      type: 'drag-order',
      stem: 'Drag these values into order from smallest to largest.',
      tier: 'challenge',
      items: ['3^(-2)', '2^(-2)', '5^0', '2^3'],
      correctOrder: [0, 1, 2, 3],
      xpValue: 25,
      hint: '3^(-2) = 1/9. 2^(-2) = 1/4. 5^0 = 1. 2^3 = 8. Order: 1/9, 1/4, 1, 8.',
    },
    // Challenge 5: missing-step in chained simplification
    {
      id: 'pzn-q20',
      type: 'missing-step',
      stem: 'Fill in the missing step. Priya simplifies (y^(-2))^(-3) / y^4 as a single power of y.',
      tier: 'challenge',
      steps: [
        'Apply power-of-a-power to (y^(-2))^(-3): multiply indices, -2 x -3 = 6. So (y^(-2))^(-3) = y^6.',
        null,
        'Apply the division law: subtract the indices, 6 - 4 = 2.',
        'Final answer: y^2.',
      ],
      missingStepIndex: 1,
      correctStep: 'The expression is now y^6 / y^4.',
      xpValue: 30,
    },
    // Challenge 6: word problem mixing zero index and reciprocal (Bond-style)
    {
      id: 'pzn-q21',
      type: 'numeric-entry',
      stem: 'A bank account is left untouched for k years. The balance after k years is given by B = 200 x 2^(-k) + 50 x 3^0 pounds. What is the balance, in pounds, after 2 years?',
      tier: 'challenge',
      correctAnswer: 100,
      xpValue: 30,
      hint: '2^(-k) with k = 2 gives 2^(-2) = 1/4. So 200 x 1/4 = 50. Also 3^0 = 1, so 50 x 1 = 50. Total: 50 + 50 = 100 pounds.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a question evaluating a^0 where pupils gave 0 instead of 1.
    {
      id: 'pzn-mis-zero-power-is-zero',
      description:
        'I think that any number to the power 0 is 0, because zero copies of the number is nothing.',
      triggerAnswer: 'zero-power-is-zero',
      correction:
        'Actually a^0 = 1 for every non-zero base. The result follows from the division law a^n / a^n = 1 = a^(n-n) = a^0.',
      reExplanation:
        'Pick any non-zero base, say 5. Then 5^3 / 5^3 = 125 / 125 = 1 (anything over itself is 1). The division law also gives 5^3 / 5^3 = 5^(3-3) = 5^0. Both routes start with the same expression, so 5^0 = 1. The same argument works for any non-zero base, which is why a^0 = 1 is a rule rather than a special case.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a negative-index question where pupils returned a negative whole number.
    {
      id: 'pzn-mis-negative-index-makes-negative',
      description:
        'I think a negative index gives a negative answer, so I write 2^(-3) = -8 by keeping the minus sign on the value.',
      triggerAnswer: 'negative-index-makes-negative',
      correction:
        'In fact a^(-n) = 1/a^n: the minus sign means "take the reciprocal", not "negate the answer". So 2^(-3) = 1/8, a positive fraction.',
      reExplanation:
        'A negative index acts on the position of the base in the fraction, not on the sign of the answer. Move the base to the denominator and drop the minus sign on the index: 2^(-3) = 1/2^3 = 1/8. Test it with the division law: 2^0 / 2^3 = 1 / 8 = 1/8, and 2^0 / 2^3 = 2^(0-3) = 2^(-3). So 2^(-3) and 1/8 are the same number, and it is positive.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 5 Algebra, "Powers" page, "Watch out" callout warning that 2^3 means 2 x 2 x 2 = 8, not 2 x 3 = 6.
    {
      id: 'pzn-mis-index-is-multiplier',
      description:
        'I treat the index as a multiplier, so 2^(-3) becomes 2 x (-3) = -6 instead of repeated multiplication followed by reciprocation.',
      triggerAnswer: 'index-is-multiplier',
      correction:
        'In fact the index counts repeated multiplications of the base. 2^3 means 2 x 2 x 2 = 8, and 2^(-3) means 1 / (2 x 2 x 2) = 1/8.',
      reExplanation:
        'The base is what gets repeated; the index is how many times. Read 2^3 as "two cubed" (2 x 2 x 2 = 8), not "two times three". When the index is negative, take the reciprocal of the positive-index version: 2^(-3) = 1 / 2^3 = 1/8. Sanity check with small values: 2^1 = 2, 2^2 = 4, 2^3 = 8, 2^4 = 16. The pattern is exponential growth, not 2 multiplied by the index.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 04 (Higher, Calculator), commentary on an indices simplification question where pupils mishandled subtracting a negative index, giving x^(-1) instead of x^7 for x^3 / x^(-4).
    {
      id: 'pzn-mis-subtract-sign-error',
      description:
        'When dividing powers and the second index is negative, I forget that subtracting a negative is the same as adding, so I get x^3 / x^(-4) = x^(-1) instead of x^7.',
      triggerAnswer: 'subtract-sign-error',
      correction:
        'Actually a - (-b) = a + b. So x^3 / x^(-4) = x^(3 - (-4)) = x^(3 + 4) = x^7.',
      reExplanation:
        'Write the subtraction in full before evaluating: 3 - (-4). Two minus signs in a row become a plus, giving 3 + 4 = 7. So x^3 / x^(-4) = x^7. A safe routine: replace any "minus a negative" with "plus the positive" first, then apply the index law. The same trap appears with addition when both indices are negative: 2 + (-3) = 2 - 3 = -1, not 2 + 3 = 5.',
    },
    // Source: NCETM Secondary Magazine, Issue 132, article on indices misconceptions, citing pupil work that mishandled (a^m)^n when n was negative, returning a positive index instead of a negative one.
    {
      id: 'pzn-mis-power-of-power-sign',
      description:
        'When raising a power to a negative power I drop the minus sign, so (x^2)^(-3) becomes x^6 instead of x^(-6).',
      triggerAnswer: 'power-of-power-sign',
      correction:
        'In fact (a^m)^n = a^(mn) keeps the sign of n. So (x^2)^(-3) = x^(2 x -3) = x^(-6) = 1/x^6.',
      reExplanation:
        'The power-of-a-power rule multiplies the indices, including their signs. 2 x (-3) = -6. So (x^2)^(-3) = x^(-6). Then convert to a fraction if asked: x^(-6) = 1/x^6. Sanity check by writing out the brackets: (x^2)^(-3) = 1 / (x^2)^3 = 1 / x^6 = x^(-6). The two routes agree.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 4 "Number Operations" by Hart, on pupils trying to apply index laws when the bases differ, treating 2^3 x 3^2 as a single power.
    {
      id: 'pzn-mis-different-bases',
      description:
        'I add the indices when the bases are different, writing 2^(-3) x 3^2 as something like 6^(-1) or (2 x 3)^(-1).',
      triggerAnswer: 'different-bases',
      correction:
        'In fact the multiplication law a^m x a^n = a^(m+n) only works when the BASES match. Different bases must be evaluated separately and then multiplied.',
      reExplanation:
        'For 2^(-3) x 3^2, evaluate each part on its own. 2^(-3) = 1/8 and 3^2 = 9. Then multiply: 1/8 x 9 = 9/8. There is no shortcut that combines the indices because the bases (2 and 3) are different. The "add the indices" rule needs identical bases to apply.',
    },
    // Authored, no external source: classroom-observed slip where pupils forget to apply the reciprocal step at the end and leave a negative-index answer in fractional form when asked for a single power.
    {
      id: 'pzn-mis-mixed-form-answer',
      description:
        'When asked to simplify to a single power of x, I leave the answer as 1/x^4 instead of converting it to x^(-4).',
      triggerAnswer: 'mixed-form-answer',
      correction:
        'In fact 1/x^n and x^(-n) are the same value, but the question asks for a single power. Use x^(-n) form so the answer is one term in index notation.',
      reExplanation:
        'A single power means one base raised to one index, with no fraction bar. 1/x^4 has a fraction bar, so it is not a single power; rewrite it as x^(-4). The reverse direction matters too: a question asking for a positive denominator wants 1/x^4, not x^(-4). Read the wording carefully and pick the form it asks for.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const primesZeroNegativeIndicesZoneNodes = [primesZeroNegativeIndices]
