import type { SkillNode } from '@/types/content'

export const primesIndicesPowerOfPower: SkillNode = {
  id: 'maths-primes-indices-power-of-power',
  title: 'Indices: Power of a Power',
  description:
    'Apply the power-of-a-power law of indices: (a^m)^n = a^(m x n). When a power is itself raised to a power, multiply the indices, do not add them. Extend the rule to bracketed products with coefficients: (3x^2)^3 = 3^3 x (x^2)^3 = 27x^6, where the outer power applies to every factor inside the bracket. Recognise that the rule does not distribute over a sum, so (a + b)^2 is not a^2 + b^2.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-primes',
  zoneName: 'Primes',
  tier: 'confident',
  prerequisites: ['maths-primes-indices-multiplication'],
  curriculum: {
    ks3Objective: 'Use the laws of indices for (a^m)^n.',
    awardingBodies: {
      aqa: 'N7 Calculate with positive indices and apply the laws of indices, including (a^m)^n = a^(mn) (GCSE Mathematics 8300)',
      edexcel: 'N7 Calculate with and interpret integer indices, applying the laws of indices to single bracketed terms (GCSE Mathematics 1MA1)',
      ocr: '1.05b Apply the laws of indices, including (a^m)^n = a^(mn), to numerical and algebraic expressions (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'ppp-scene-expansion-proof',
      title: 'Why a Power of a Power Multiplies the Indices',
      type: 'labelled-diagram',
      instructions:
        'Read the expansion of (2^3)^4 step by step. The outer 4 says "use 2^3 four times": (2^3)^4 = 2^3 x 2^3 x 2^3 x 2^3. Inside each bracket the base 2 appears 3 times, so altogether the base 2 appears 3 + 3 + 3 + 3 = 12 times. That is 2^12. Adding 3 four times is the same as 3 x 4, so the indices multiply: (2^3)^4 = 2^(3 x 4) = 2^12. The pattern always works because of the addition law for indices applied repeatedly.',
      data: {
        viewBox: '0 0 200 100',
        hotspots: [
          { id: 'ppp-h-outer', x: 15, y: 20, label: 'Outer index 4', description: 'The 4 outside the bracket says "repeat (2^3) four times".' },
          { id: 'ppp-h-expand', x: 50, y: 20, label: '(2^3)^4 = 2^3 x 2^3 x 2^3 x 2^3', description: 'Four copies of 2^3 multiplied together.' },
          { id: 'ppp-h-count', x: 50, y: 55, label: 'Count base 2s: 3 + 3 + 3 + 3 = 12', description: 'Each bracket holds three 2s; four brackets hold twelve 2s in total.' },
          { id: 'ppp-h-result', x: 50, y: 85, label: '(2^3)^4 = 2^12 = 4096', description: 'Multiply the indices: 3 x 4 = 12, and 2^12 = 4096.' },
        ],
      },
    },
    {
      id: 'ppp-scene-general-law',
      title: 'The General Power of a Power Law',
      type: 'simulation',
      instructions:
        'See how the rule (a^m)^n = a^(m x n) applies across different bases and indices. The base never changes. The two indices multiply to give the new single index. This works for any non-zero base, including algebraic bases like x, y, p.',
      data: {
        rule: '(a^m)^n = a^(m x n). The base stays the same, the indices multiply.',
        examples: [
          { input: '(2^3)^4', expanded: '2^(3 x 4)', result: '2^12 = 4096' },
          { input: '(5^2)^3', expanded: '5^(2 x 3)', result: '5^6 = 15625' },
          { input: '(x^4)^2', expanded: 'x^(4 x 2)', result: 'x^8' },
          { input: '(y^5)^3', expanded: 'y^(5 x 3)', result: 'y^15' },
          { input: '(p^1)^7', expanded: 'p^(1 x 7)', result: 'p^7' },
        ],
        watchOut: 'Do NOT add the indices. (a^m)^n is not a^(m + n). The addition law is for a^m x a^n.',
      },
    },
    {
      id: 'ppp-scene-bracketed-coefficient',
      title: 'When the Bracket Has a Coefficient',
      type: 'simulation',
      instructions:
        'When a coefficient sits inside the bracket, the outer power lifts onto every factor inside. Read each example slowly. The outer index applies to the number AND to the variable power, separately. Mistaking 27x^6 for 3x^6 is one of the most common slips at this tier.',
      data: {
        rule: '(ka^m)^n = k^n x a^(m x n). Distribute the outer power over each factor inside the bracket.',
        examples: [
          { input: '(3x^2)^3', step: '3^3 x (x^2)^3', result: '27 x x^6 = 27x^6' },
          { input: '(2y^4)^2', step: '2^2 x (y^4)^2', result: '4 x y^8 = 4y^8' },
          { input: '(5p)^3', step: '5^3 x p^3', result: '125 x p^3 = 125p^3' },
          { input: '(4m^3)^2', step: '4^2 x (m^3)^2', result: '16 x m^6 = 16m^6' },
        ],
        warning: 'The outer power does NOT distribute over a sum. (a + b)^2 is not a^2 + b^2; it equals a^2 + 2ab + b^2.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'ppp-worked-1',
      title: 'Simplify (5^2)^3',
      steps: [
        {
          explanation: 'Read the expression. The base is 5; the inner index is 2; the outer index is 3.',
          maths: '(5^2)^3',
        },
        {
          explanation: 'Apply the power-of-a-power law: keep the base, multiply the indices.',
          maths: '(5^2)^3 = 5^(2 x 3)',
        },
        {
          explanation: 'Multiply the indices: 2 x 3 = 6.',
          maths: '5^(2 x 3) = 5^6',
        },
        {
          explanation: 'Evaluate 5^6 by repeated multiplication: 5 x 5 = 25, 25 x 5 = 125, 125 x 5 = 625, 625 x 5 = 3125, 3125 x 5 = 15625.',
          maths: '5^6 = 15625',
        },
        {
          explanation: 'So (5^2)^3 simplifies to 5^6, which is 15625.',
          maths: '(5^2)^3 = 5^6 = 15625',
        },
      ],
    },
    {
      id: 'ppp-worked-2',
      title: 'Simplify (2x^3)^4',
      steps: [
        {
          explanation: 'The bracket contains a coefficient (2) and a variable power (x^3). The outer index 4 lifts onto every factor inside the bracket.',
          maths: '(2x^3)^4 = 2^4 x (x^3)^4',
        },
        {
          explanation: 'Evaluate the coefficient part: 2^4 = 2 x 2 x 2 x 2 = 16.',
          maths: '2^4 = 16',
        },
        {
          explanation: 'Apply the power-of-a-power law to the variable part: multiply the indices 3 x 4.',
          maths: '(x^3)^4 = x^(3 x 4) = x^12',
        },
        {
          explanation: 'Combine the two parts back together.',
          maths: '(2x^3)^4 = 16 x x^12',
        },
        {
          explanation: 'So (2x^3)^4 simplifies to 16x^12.',
          maths: '(2x^3)^4 = 16x^12',
        },
      ],
    },
  ],
  questions: [
    // Core 1 (MCQ, correctIndex 0): direct rule, single base
    {
      id: 'ppp-q1',
      type: 'multiple-choice',
      stem: 'Simplify (3^2)^4 as a single power of 3.',
      tier: 'core',
      options: ['3^8', '3^6', '3^16', '3^2'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'ppp-mis-add-instead-of-multiply',
      hint: 'Power of a power: keep the base, multiply the indices. 2 x 4 = 8, so the answer is 3^8 (NOT 3^6 from adding).',
    },
    // Core 2 (MCQ, correctIndex 1): algebraic base
    {
      id: 'ppp-q2',
      type: 'multiple-choice',
      stem: 'Simplify (x^5)^2.',
      tier: 'core',
      options: ['x^7', 'x^10', 'x^25', 'x^3'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'ppp-mis-add-instead-of-multiply',
      hint: 'Multiply the indices: 5 x 2 = 10. The base x stays the same, so the answer is x^10.',
    },
    // Core 3 (MCQ, correctIndex 2): numerical evaluation, not just simplification
    {
      id: 'ppp-q3',
      type: 'multiple-choice',
      stem: 'What is the value of (2^2)^3?',
      tier: 'core',
      options: ['32', '16', '64', '12'],
      correctIndex: 2,
      xpValue: 10,
      hint: '(2^2)^3 = 2^(2 x 3) = 2^6. Then 2^6 = 64. Working: 2^2 = 4, and 4^3 = 4 x 4 x 4 = 64.',
    },
    // Core 4 (MCQ, correctIndex 3): identify wrong simplification
    {
      id: 'ppp-q4',
      type: 'multiple-choice',
      stem: 'Which expression is equal to (a^4)^3?',
      tier: 'core',
      options: ['a^7', '3a^4', 'a^4 x 3', 'a^12'],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'ppp-mis-base-also-multiplied',
      hint: 'Multiply the indices: 4 x 3 = 12. The base a stays as a (it is not multiplied by 3). Answer: a^12.',
    },
    // Core 5 (numeric): missing index
    {
      id: 'ppp-q5',
      type: 'numeric-entry',
      stem: '(7^3)^k = 7^15. What is the value of k?',
      tier: 'core',
      correctAnswer: 5,
      xpValue: 10,
      hint: 'By the power-of-a-power law, (7^3)^k = 7^(3 x k) = 7^15. So 3 x k = 15, giving k = 5.',
    },
    // Core 6 (numeric): direct evaluation
    {
      id: 'ppp-q6',
      type: 'numeric-entry',
      stem: 'Work out the value of (3^2)^2.',
      tier: 'core',
      correctAnswer: 81,
      xpValue: 10,
      hint: '(3^2)^2 = 3^(2 x 2) = 3^4. Then 3^4 = 3 x 3 x 3 x 3 = 81.',
    },
    // Core 7 (missing-step worked example)
    {
      id: 'ppp-q7',
      type: 'missing-step',
      stem: 'Fill in the missing step. Saanvi simplifies (4^3)^2 in three lines.',
      tier: 'core',
      steps: [
        'Apply the power-of-a-power law: keep the base, multiply the indices.',
        null,
        'Evaluate 4^6 = 4096.',
      ],
      missingStepIndex: 1,
      correctStep: '(4^3)^2 = 4^(3 x 2) = 4^6.',
      xpValue: 15,
    },
    // Confident 1 (MCQ, correctIndex 0): bracketed coefficient
    {
      id: 'ppp-q8',
      type: 'multiple-choice',
      stem: 'Simplify (3x^2)^3.',
      tier: 'confident',
      options: ['27x^6', '3x^6', '9x^6', '27x^5'],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'ppp-mis-coefficient-not-raised',
      hint: 'The outer power 3 applies to BOTH the coefficient and the variable. 3^3 = 27 and (x^2)^3 = x^6, so the answer is 27x^6.',
    },
    // Confident 2 (MCQ, correctIndex 1): combining laws (multiplication then power)
    {
      id: 'ppp-q9',
      type: 'multiple-choice',
      stem: 'Simplify (x^2)^3 x x^5 as a single power of x.',
      tier: 'confident',
      options: ['x^10', 'x^11', 'x^16', 'x^30'],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'ppp-mis-double-application',
      hint: '(x^2)^3 = x^6 (multiply the indices). Then x^6 x x^5 = x^(6 + 5) = x^11 (add the indices for the multiplication law).',
    },
    // Confident 3 (MCQ, correctIndex 2): coefficient-and-variable, larger numbers
    {
      id: 'ppp-q10',
      type: 'multiple-choice',
      stem: 'Simplify (2y^4)^3.',
      tier: 'confident',
      options: ['2y^12', '6y^12', '8y^12', '8y^7'],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'ppp-mis-coefficient-not-raised',
      hint: 'Lift the outer 3 onto each factor inside: 2^3 = 8 and (y^4)^3 = y^12. Combine to get 8y^12.',
    },
    // Confident 4 (MCQ, correctIndex 3): identify a power of a power, harder
    {
      id: 'ppp-q11',
      type: 'multiple-choice',
      stem: 'Which expression simplifies to 2^20?',
      tier: 'confident',
      options: ['(2^4)^4', '2^4 x 2^5', '(2^2)^9', '(2^5)^4'],
      correctIndex: 3,
      xpValue: 15,
      hint: 'Test each: (2^4)^4 = 2^16; 2^4 x 2^5 = 2^9; (2^2)^9 = 2^18; (2^5)^4 = 2^(5 x 4) = 2^20. Only the last one matches.',
    },
    // Confident 5 (numeric): combine power-of-a-power with division law
    {
      id: 'ppp-q12',
      type: 'numeric-entry',
      stem: '(x^3)^2 x x^4 / x^5 simplifies to x^k. What is the value of k?',
      tier: 'confident',
      correctAnswer: 5,
      xpValue: 20,
      hint: '(x^3)^2 = x^6. Multiplying gives x^6 x x^4 = x^10. Dividing gives x^10 / x^5 = x^(10 - 5) = x^5. So k = 5.',
    },
    // Confident 6 (numeric): bracketed coefficient evaluation
    {
      id: 'ppp-q13',
      type: 'numeric-entry',
      stem: 'Evaluate (5^2)^2 - (3^2)^2. Give the value as a single integer.',
      tier: 'confident',
      correctAnswer: 544,
      xpValue: 20,
      hint: '(5^2)^2 = 5^4 = 625. (3^2)^2 = 3^4 = 81. So 625 - 81 = 544.',
    },
    // Confident 7 (drag-order): order results from smallest to largest
    {
      id: 'ppp-q14',
      type: 'drag-order',
      stem: 'Drag these expressions into order from smallest value to largest value.',
      tier: 'confident',
      items: ['(2^3)^2', '(3^2)^2', '(2^2)^4', '(5^2)^2'],
      correctOrder: [0, 1, 2, 3],
      xpValue: 20,
      hint: 'Simplify each first: (2^3)^2 = 2^6 = 64. (3^2)^2 = 3^4 = 81. (2^2)^4 = 2^8 = 256. (5^2)^2 = 5^4 = 625. Order: 64, 81, 256, 625.',
    },
    // Confident 8 (spot-misconception): the (a + b)^2 trap
    {
      id: 'ppp-q15',
      type: 'spot-misconception',
      stem: 'Marcus says (a + b)^2 = a^2 + b^2 because the outer 2 applies to each part inside the bracket.',
      tier: 'confident',
      statements: [
        {
          text: 'Marcus is right. The power-of-a-power law splits the outer index over both terms inside the bracket.',
          isMisconception: true,
        },
        {
          text: 'In fact the outer power distributes only over a PRODUCT inside the bracket, not over a SUM. (a + b)^2 means (a + b) x (a + b), which expands to a^2 + 2ab + b^2 (the missing 2ab is what trips most learners).',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'ppp-mis-power-of-sum',
    },
    // Challenge 1 (MCQ, correctIndex 1): tricky combine, three laws at once
    {
      id: 'ppp-q16',
      type: 'multiple-choice',
      stem: 'Simplify (x^4)^3 x (x^2)^5 / x^7 as a single power of x.',
      tier: 'challenge',
      options: ['x^14', 'x^15', 'x^29', 'x^9'],
      correctIndex: 1,
      xpValue: 25,
      hint: '(x^4)^3 = x^12 and (x^2)^5 = x^10. Multiplying: x^12 x x^10 = x^22. Dividing: x^22 / x^7 = x^(22 - 7) = x^15.',
    },
    // Challenge 2 (MCQ, correctIndex 2): bracketed coefficient with two variables
    {
      id: 'ppp-q17',
      type: 'multiple-choice',
      stem: 'Simplify (2a^3 b^2)^4.',
      tier: 'challenge',
      options: ['2a^12 b^8', '8a^12 b^8', '16a^12 b^8', '16a^7 b^6'],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'ppp-mis-coefficient-not-raised',
      hint: 'The outer 4 lifts onto every factor inside: 2^4 = 16, (a^3)^4 = a^12, (b^2)^4 = b^8. Combine to get 16a^12 b^8.',
    },
    // Challenge 3 (numeric): Bond-style multi-step word problem
    {
      id: 'ppp-q18',
      type: 'numeric-entry',
      stem: 'A small square has a side length of 2^3 cm. A larger square has a side length of (2^3)^2 cm. How many times bigger is the area of the larger square compared with the area of the smaller square?',
      tier: 'challenge',
      correctAnswer: 64,
      xpValue: 30,
      hint: 'Smaller side = 2^3 = 8 cm, area = 8 x 8 = 64 cm^2. Larger side = (2^3)^2 = 2^6 = 64 cm, area = 64 x 64 = 4096 cm^2. Ratio of areas = 4096 / 64 = 64, so the larger area is 64 times bigger.',
    },
    // Challenge 4 (numeric): rearrange to find unknown index
    {
      id: 'ppp-q19',
      type: 'numeric-entry',
      stem: '(2^k)^3 = 2^21. What is the value of k?',
      tier: 'challenge',
      correctAnswer: 7,
      xpValue: 25,
      hint: 'By the power-of-a-power law, (2^k)^3 = 2^(k x 3) = 2^21. So 3k = 21, giving k = 7.',
    },
    // Challenge 5 (numeric): two unknowns, bracketed coefficient
    {
      id: 'ppp-q20',
      type: 'numeric-entry',
      stem: '(3x^a)^b = 81x^20 and a, b are positive integers with b > 1. What is the value of a + b?',
      tier: 'challenge',
      correctAnswer: 9,
      xpValue: 30,
      hint: 'Coefficient: 3^b = 81 = 3^4, so b = 4. Variable: a x b = 20 with b = 4, so a = 5. Then a + b = 5 + 4 = 9.',
    },
    // Challenge 6 (spot-misconception): the larger-index misconception
    {
      id: 'ppp-q21',
      type: 'spot-misconception',
      stem: 'Priya is asked to simplify (a^5)^4 and writes "a^5 because 5 is the bigger index, so it wins".',
      tier: 'challenge',
      statements: [
        {
          text: 'Priya is right. When two indices appear, the answer takes the larger one.',
          isMisconception: true,
        },
        {
          text: 'In fact the rule is to multiply the two indices, not pick the larger. (a^5)^4 = a^(5 x 4) = a^20. The "larger wins" idea has no basis in the laws of indices and gives the wrong answer in almost every case.',
          isMisconception: false,
        },
      ],
      xpValue: 25,
      misconceptionId: 'ppp-mis-larger-index-wins',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a (a^m)^n question where pupils added the two indices instead of multiplying them.
    {
      id: 'ppp-mis-add-instead-of-multiply',
      description:
        'I add the two indices when a power is raised to a power, so I write (3^2)^4 = 3^6 instead of 3^8.',
      triggerAnswer: 'add-instead-of-multiply',
      correction:
        'Actually the power-of-a-power law multiplies the indices: (a^m)^n = a^(m x n). Adding is the rule for a^m x a^n, which is a different situation.',
      reExplanation:
        'Expand (3^2)^4: the outer 4 says "use 3^2 four times", giving 3^2 x 3^2 x 3^2 x 3^2. Each bracket holds two 3s, so altogether 3 appears 2 + 2 + 2 + 2 = 8 times: 3^8 = 6561. Adding 2 four times equals 2 x 4, which is why the indices multiply. Use the addition law a^m x a^n = a^(m + n) only for separate powers multiplied.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Indices" page, "Common mistake" callout warning that (3x^2)^3 is 27x^6, not 3x^6.
    {
      id: 'ppp-mis-coefficient-not-raised',
      description:
        'I forget to raise the coefficient inside the bracket to the outer power, so I write (3x^2)^3 = 3x^6 instead of 27x^6.',
      triggerAnswer: 'coefficient-not-raised',
      correction:
        'In fact the outer power applies to EVERY factor inside the bracket. (3x^2)^3 = 3^3 x (x^2)^3 = 27 x x^6 = 27x^6.',
      reExplanation:
        'Read (3x^2)^3 as "(3x^2) multiplied by itself 3 times": (3x^2) x (3x^2) x (3x^2). The three coefficients of 3 multiply to 27, and the three factors of x^2 multiply to x^6. Both parts of the bracket are raised. A useful check: substitute x = 1, so (3x^2)^3 = (3 x 1)^3 = 27. With the wrong answer 3x^6, x = 1 gives 3 instead, which fails the check. Always lift the outer power onto the number AND the variable.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 1F (Foundation, Non-calculator), commentary on an indices question where pupils selected the larger of the two indices as the answer rather than multiplying them.
    {
      id: 'ppp-mis-larger-index-wins',
      description:
        'I think when two indices appear in (a^m)^n the answer just takes the larger of the two, so I write (a^5)^4 = a^5.',
      triggerAnswer: 'larger-index-wins',
      correction:
        'Actually the indices multiply: (a^5)^4 = a^(5 x 4) = a^20. There is no "larger index wins" rule in any law of indices.',
      reExplanation:
        'The "larger wins" idea may come from confusing indices with comparing the size of two numbers. The actual law is simple: keep the base, multiply the two indices. Try (a^2)^3 = a^6 and check by writing it out: (a x a) x (a x a) x (a x a) has six a-factors, which is a^6. The larger of the two indices (3) is not the answer; the product (2 x 3 = 6) is.',
    },
    // Source: NCETM Secondary Magazine, Issue 142, "Misconceptions in Algebra" feature, on the persistent (a + b)^2 = a^2 + b^2 error in early KS4 algebra.
    {
      id: 'ppp-mis-power-of-sum',
      description:
        'I think the outer power distributes over a sum inside the bracket, so I write (a + b)^2 = a^2 + b^2.',
      triggerAnswer: 'power-of-sum',
      correction:
        'In fact the outer power only distributes over a PRODUCT inside the bracket, not over a sum. (a + b)^2 means (a + b) x (a + b), which expands to a^2 + 2ab + b^2.',
      reExplanation:
        'Test with a = 3 and b = 4: (3 + 4)^2 = 7^2 = 49. The wrong rule gives a^2 + b^2 = 9 + 16 = 25, missing the cross term 2ab = 24 (and 25 + 24 = 49). The full expansion (a + b)^2 = a^2 + 2ab + b^2 comes from multiplying out the bracket. Powers distribute over a product, never over a sum.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 01 (Foundation, Non-calculator), commentary on a (a^m)^n question where pupils multiplied the base by the outer index, writing (a^4)^3 as 3a^4.
    {
      id: 'ppp-mis-base-also-multiplied',
      description:
        'I multiply the base by the outer index instead of leaving it alone, so I write (a^4)^3 as 3a^4 or 3a.',
      triggerAnswer: 'base-also-multiplied',
      correction:
        'Actually the base never changes when applying the power-of-a-power law. Only the indices multiply: (a^4)^3 = a^(4 x 3) = a^12.',
      reExplanation:
        'The outer index says "how many times to use the base", not "what to multiply the base by". (a^4)^3 means (a^4) x (a^4) x (a^4) = a^4 + 4 + 4 = a^12. The base a stays as a; the count of a-factors grows. A safe routine: write the base first (unchanged), then multiply the two indices to get the new index. Base a, indices 4 and 3, answer a^(4 x 3) = a^12.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 4 "Number Operations" by Hart, on pupils miscounting which power belongs where when a coefficient sits inside a bracketed power, leading to swapped or doubled-up indices.
    {
      id: 'ppp-mis-double-application',
      description:
        'When combining two laws in one expression like (x^2)^3 x x^5, I apply the power-of-a-power law twice, giving x^(2 x 3 x 5) = x^30.',
      triggerAnswer: 'double-application',
      correction:
        'In fact the two laws apply to different parts. Use the power-of-a-power law inside the bracket only, then use the multiplication law to combine.',
      reExplanation:
        'Step through carefully. (x^2)^3 is a power of a power: multiply the indices to get x^6. Then x^6 x x^5 is two powers multiplied: ADD the indices to get x^11. The two laws never apply at the same time. Check: (2^2)^3 x 2 = 64 x 2 = 128 = 2^7, matching x^(6 + 1). Multiplying all three indices would give 2^12 = 4096, much too large.',
    },
    // Authored, no external source: classroom-observed slip where pupils raise both base AND index by the outer power, writing (a^3)^4 as a^12 (correct) but defending it as "multiply both the a and the 3 by 4", which gives gibberish like (4a)^12.
    {
      id: 'ppp-mis-base-and-index-multiplied',
      description:
        'I multiply both the base and the index by the outer power, writing (a^3)^4 as (4a)^12 or 4a^12.',
      triggerAnswer: 'base-and-index-multiplied',
      correction:
        'In fact the base is left untouched. Only the inner index gets multiplied by the outer index.',
      reExplanation:
        'The base a is what gets repeated; the inner index 3 counts repeats inside one bracket; the outer index 4 says how many brackets to multiply. So (a^3)^4 expands to twelve copies of a, giving a^12. The 4 never attaches to the base. The shortcut "multiply the indices, leave the base" gives the same answer in one step: a^(3 x 4) = a^12.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const primesIndicesPowerOfPowerZoneNodes = [primesIndicesPowerOfPower]
