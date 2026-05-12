import type { SkillNode } from '@/types/content'

export const primesIndicesDivision: SkillNode = {
  id: 'maths-primes-indices-division',
  title: 'Indices: Dividing Powers of the Same Base',
  description:
    'Divide powers that share the same base by subtracting the indices: a^m / a^n = a^(m-n). The base stays the same; only the exponents change. Coefficients divide as ordinary numbers, separately from the powers, so 12a^7 / 4a^2 = 3a^5. The rule applies only when the bases match: 2^5 / 3^2 stays as 32 / 9.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-primes',
  zoneName: 'Primes',
  tier: 'confident',
  prerequisites: ['maths-primes-indices-multiplication'],
  curriculum: {
    ks3Objective:
      'Use the laws of indices for division of integer powers of the same base.',
    awardingBodies: {
      aqa: 'N7 Calculate with integer powers; apply the index law a^m / a^n = a^(m-n) (GCSE Mathematics 8300)',
      edexcel: 'N7 Calculate with roots and with integer indices; apply a^m / a^n = a^(m-n) (GCSE Mathematics 1MA1)',
      ocr: '1.05b Apply the index laws including a^m / a^n = a^(m-n) (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'pid-scene-cancellation-proof',
      title: 'Why Subtract the Indices? Cancellation Shows You',
      type: 'labelled-diagram',
      instructions:
        'Look at the cancellation proof for 2^5 / 2^2. Write the powers in long form on the top and bottom of a fraction: top is 2 x 2 x 2 x 2 x 2 (five 2s) and bottom is 2 x 2 (two 2s). Cancel one 2 on top against one 2 on bottom, then again. Two 2s have left the bottom, leaving 1; three 2s remain on top: 2 x 2 x 2 = 2^3. Notice the count: 5 minus 2 = 3. The subtraction is the cancellation in shorthand. So 2^5 / 2^2 = 2^(5-2) = 2^3 = 8.',
      data: {
        viewBox: '0 0 200 120',
        hotspots: [
          { id: 'pid-h-top-row', x: 50, y: 18, label: 'Top: 2 x 2 x 2 x 2 x 2 (five 2s, that is 2^5)', description: 'The numerator written out long.' },
          { id: 'pid-h-bottom-row', x: 50, y: 50, label: 'Bottom: 2 x 2 (two 2s, that is 2^2)', description: 'The denominator written out long.' },
          { id: 'pid-h-cancel-pair-1', x: 25, y: 35, label: 'First cancellation: one 2 from top with one 2 from bottom', description: 'Top loses a 2; bottom loses a 2.' },
          { id: 'pid-h-cancel-pair-2', x: 65, y: 35, label: 'Second cancellation: another 2 from top with another 2 from bottom', description: 'Bottom is now 1; top still has three 2s.' },
          { id: 'pid-h-result', x: 50, y: 90, label: 'Result: 2 x 2 x 2 = 2^3 = 8', description: 'Five minus two cancellations leaves a power of 3.' },
        ],
      },
    },
    {
      id: 'pid-scene-general-law',
      title: 'The General Law: a^m / a^n = a^(m-n)',
      type: 'simulation',
      instructions:
        'See the rule applied across many bases and exponents. Whenever the BASE is the same on top and bottom, subtract the bottom index from the top index. The base never changes. The pattern is identical whether the base is a number (2, 3, 5, 10) or a letter (x, y, a). At this stage the top index is bigger than the bottom index, so the answer index is always positive.',
      data: {
        examples: [
          { quotient: '2^7 / 2^4', subtraction: '7 - 4 = 3', result: '2^3 = 8' },
          { quotient: '3^5 / 3^3', subtraction: '5 - 3 = 2', result: '3^2 = 9' },
          { quotient: '10^6 / 10^2', subtraction: '6 - 2 = 4', result: '10^4 = 10 000' },
          { quotient: 'x^8 / x^3', subtraction: '8 - 3 = 5', result: 'x^5' },
          { quotient: 'y^9 / y^9', subtraction: '9 - 9 = 0', result: 'y^0 = 1' },
        ],
        rule: 'Same base: subtract the indices, keep the base. a^m / a^n = a^(m-n).',
        warning: 'Different bases (such as 2^5 / 3^2) do not follow this rule. Work them out as ordinary numbers.',
      },
    },
    {
      id: 'pid-scene-coefficients',
      title: 'Coefficients Divide Separately from the Powers',
      type: 'simulation',
      instructions:
        'Watch how an algebraic quotient like 12a^7 / 4a^2 splits into two parts. Divide the numbers (12 / 4 = 3). Apply the index law to the letter parts (a^7 / a^2 = a^(7-2) = a^5). Multiply the two results back together: 3 x a^5 = 3a^5. The numbers are NOT exponents, so they divide normally; only the matching letter bases use the subtraction rule.',
      data: {
        examples: [
          { quotient: '12a^7 / 4a^2', numberStep: '12 / 4 = 3', powerStep: 'a^7 / a^2 = a^5', result: '3a^5' },
          { quotient: '20m^6 / 5m^4', numberStep: '20 / 5 = 4', powerStep: 'm^6 / m^4 = m^2', result: '4m^2' },
          { quotient: '15p^9 / 3p^3', numberStep: '15 / 3 = 5', powerStep: 'p^9 / p^3 = p^6', result: '5p^6' },
          { quotient: '24k^5 / 8k', numberStep: '24 / 8 = 3', powerStep: 'k^5 / k^1 = k^4', result: '3k^4' },
        ],
        rule: 'Divide the coefficients normally; subtract the indices on matching letter bases.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'pid-worked-1',
      title: 'Simplify 3^7 / 3^4 and give your answer as a power of 3 and as a number',
      steps: [
        {
          explanation: 'Check the bases. Both top and bottom have base 3, so the index law applies.',
          maths: '3^7 / 3^4',
        },
        {
          explanation: 'Subtract the bottom index from the top index. Keep the base 3.',
          maths: '3^7 / 3^4 = 3^(7 - 4)',
        },
        {
          explanation: 'Carry out the subtraction in the exponent.',
          maths: '3^(7 - 4) = 3^3',
        },
        {
          explanation: 'Evaluate the power: 3^3 means three 3s multiplied together.',
          maths: '3^3 = 3 x 3 x 3 = 27',
        },
        {
          explanation: 'So the answer in index form is 3^3, and as a number it is 27.',
          maths: '3^7 / 3^4 = 3^3 = 27',
        },
      ],
    },
    {
      id: 'pid-worked-2',
      title: 'Simplify 18b^8 / 6b^3, giving your answer in simplest form',
      steps: [
        {
          explanation: 'Split the quotient into a number part and a letter part.',
          maths: '18b^8 / 6b^3 = (18 / 6) x (b^8 / b^3)',
        },
        {
          explanation: 'Divide the coefficients: 18 / 6 = 3. The numbers are not exponents, so this is ordinary division.',
          maths: '18 / 6 = 3',
        },
        {
          explanation: 'Apply the index law to the letter part. Same base b, so subtract the indices.',
          maths: 'b^8 / b^3 = b^(8 - 3) = b^5',
        },
        {
          explanation: 'Multiply the two parts back together.',
          maths: '3 x b^5 = 3b^5',
        },
        {
          explanation: 'The simplified form is 3b^5.',
          maths: '18b^8 / 6b^3 = 3b^5',
        },
      ],
    },
  ],
  questions: [
    // Core 1: simplest base-2 quotient
    {
      id: 'pid-q1',
      type: 'multiple-choice',
      stem: 'Simplify 2^7 / 2^4 in index form.',
      tier: 'core',
      options: ['2^11', '2^4', '2^28', '2^3'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Same base, so subtract the indices. 7 - 4 = 3, giving 2^3.',
    },
    // Core 2: numeric value of a small quotient (rotates correctIndex to 1)
    {
      id: 'pid-q2',
      type: 'multiple-choice',
      stem: 'What is 3^5 / 3^3 as a whole number?',
      tier: 'core',
      options: ['6', '9', '15', '27'],
      correctIndex: 1,
      xpValue: 10,
      hint: '3^5 / 3^3 = 3^(5-3) = 3^2 = 3 x 3 = 9.',
    },
    // Core 3: same base, letter
    {
      id: 'pid-q3',
      type: 'multiple-choice',
      stem: 'Simplify x^9 / x^4.',
      tier: 'core',
      options: ['x^13', 'x^36', 'x^5', 'x^2.25'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pid-mis-divide-indices',
      hint: 'Same base x, so subtract the indices. 9 - 4 = 5, giving x^5. Do not divide the indices.',
    },
    // Core 4: numeric entry, fill in missing exponent
    {
      id: 'pid-q4',
      type: 'numeric-entry',
      stem: 'Find the missing index: m^9 / m^4 = m^?',
      tier: 'core',
      correctAnswer: 5,
      xpValue: 10,
      hint: 'Subtract the indices: 9 - 4 = 5. So m^9 / m^4 = m^5.',
    },
    // Core 5: numeric entry small power
    {
      id: 'pid-q5',
      type: 'numeric-entry',
      stem: 'Work out 2^6 / 2^3 as a whole number.',
      tier: 'core',
      correctAnswer: 8,
      xpValue: 10,
      hint: '2^6 / 2^3 = 2^(6-3) = 2^3 = 8.',
    },
    // Core 6: numeric entry on a base-5 quotient
    {
      id: 'pid-q6',
      type: 'numeric-entry',
      stem: '5^7 / 5^3 = 5^?. Give the missing index.',
      tier: 'core',
      correctAnswer: 4,
      xpValue: 10,
      hint: 'Subtract the indices: 7 - 3 = 4. So 5^7 / 5^3 = 5^4.',
    },
    // Core 7: simple letter base, correctIndex 1
    {
      id: 'pid-q7',
      type: 'multiple-choice',
      stem: 'Simplify y^6 / y.',
      tier: 'core',
      options: ['y^7', 'y^5', 'y^6', '6'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'A letter on its own is to the power 1: y means y^1. So y^6 / y^1 = y^(6-1) = y^5.',
    },
    // Confident 1: coefficients divide
    {
      id: 'pid-q8',
      type: 'multiple-choice',
      stem: 'Simplify 12a^7 / 4a^2.',
      tier: 'confident',
      options: ['8a^5', '3a^5', '3a^9', '8a^9'],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'pid-mis-coefficients-subtract',
      hint: 'Divide the numbers: 12 / 4 = 3. Subtract the indices: a^7 / a^2 = a^5. Combine: 3a^5.',
    },
    // Confident 2: numeric entry coefficient quotient
    {
      id: 'pid-q9',
      type: 'numeric-entry',
      stem: 'Simplify 20p^6 / 5p^4. The result is in the form kp^n. What is k?',
      tier: 'confident',
      correctAnswer: 4,
      xpValue: 15,
      hint: 'Divide the coefficients: 20 / 5 = 4. (The power part p^6 / p^4 = p^2 is the n side.)',
    },
    // Confident 3: indices equal -> answer 1, MCQ correctIndex 0
    {
      id: 'pid-q10',
      type: 'multiple-choice',
      stem: 'Karim says k^5 / k^5 = 0 because the powers cancel. What is the correct value?',
      tier: 'confident',
      options: ['1', '0', 'k^0 (and we cannot tell)', 'k'],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'pid-mis-equal-indices-zero',
      hint: 'Any non-zero number divided by itself is 1. So k^5 / k^5 = 1. (Strictly k^(5-5) = k^0 = 1, but the value is just 1.)',
    },
    // Confident 4: chain operation. correctIndex 2
    {
      id: 'pid-q11',
      type: 'multiple-choice',
      stem: 'Simplify (2^7 x 2^3) / 2^4 in index form.',
      tier: 'confident',
      options: ['2^14', '2^4', '2^6', '2^10'],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pid-mis-stop-half-way',
      hint: 'Multiply on top first: 2^7 x 2^3 = 2^(7+3) = 2^10. Then divide: 2^10 / 2^4 = 2^(10-4) = 2^6. Do not stop after the multiplication step.',
    },
    // Confident 5: spot-misconception on different bases
    {
      id: 'pid-q12',
      type: 'spot-misconception',
      stem: 'Yusuf simplifies 6^7 / 2^3 by writing "the bases divide and the indices subtract, so 6^7 / 2^3 = 3^4".',
      tier: 'confident',
      statements: [
        {
          text: 'Yusuf is right. The rule a^m / a^n = a^(m-n) works any time you divide two powers.',
          isMisconception: true,
        },
        {
          text: 'In fact the law a^m / a^n = a^(m-n) only applies when the BASES are the same. 6 and 2 are different bases, so the rule cannot be used here. To evaluate 6^7 / 2^3 you compute 6^7 = 279 936 and 2^3 = 8, then divide: 279 936 / 8 = 34 992.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pid-mis-different-bases',
    },
    // Confident 6: missing-step worked example, drives missing-step quota
    {
      id: 'pid-q13',
      type: 'missing-step',
      stem: 'Fill in the missing step. Esi simplifies 24c^9 / 6c^4.',
      tier: 'confident',
      steps: [
        'Split into number and letter parts: (24 / 6) x (c^9 / c^4).',
        'Divide the coefficients: 24 / 6 = 4.',
        null,
        'Combine the two parts: 4c^5.',
      ],
      missingStepIndex: 2,
      correctStep: 'Apply the index law to the letter part: c^9 / c^4 = c^(9-4) = c^5.',
      xpValue: 20,
    },
    // Confident 7: drag-order quotients by their result, correctIndex N/A (drag)
    {
      id: 'pid-q14',
      type: 'drag-order',
      stem: 'Drag these quotients into order from smallest result to largest result. All bases are 2.',
      tier: 'confident',
      items: ['2^5 / 2^4', '2^6 / 2^3', '2^9 / 2^4', '2^7 / 2^1'],
      correctOrder: [0, 1, 2, 3],
      xpValue: 20,
      hint: 'Subtract the indices: 2^5/2^4 = 2^1 = 2. 2^6/2^3 = 2^3 = 8. 2^9/2^4 = 2^5 = 32. 2^7/2^1 = 2^6 = 64. Order: 2, 8, 32, 64.',
    },
    // Confident 8: numeric entry, find a coefficient correctly. (Total numeric so far: 5; this is 6.)
    {
      id: 'pid-q15',
      type: 'numeric-entry',
      stem: 'Simplify 30q^8 / 5q^3. The result is in the form kq^n. What is the value of n?',
      tier: 'confident',
      correctAnswer: 5,
      xpValue: 15,
      hint: 'For the n part, only the indices matter: q^8 / q^3 = q^(8-3) = q^5, so n = 5.',
    },
    // Challenge 1: multi-step Bond-style word problem with coefficients
    {
      id: 'pid-q16',
      type: 'multiple-choice',
      stem: 'A village hall has a floor area of 8m^7 square metres and is divided into 4 equal storage rooms of m^3 square metres each. Treating m as a length scale factor, what is the area of one storage room as a multiple of m?',
      tier: 'challenge',
      options: ['2m^4', '4m^4', '4m^21', '2m^10'],
      correctIndex: 0,
      xpValue: 25,
      misconceptionId: 'pid-mis-coefficients-subtract',
      hint: 'Total area / number of rooms = 8m^7 / (4 x m^3) = 8m^7 / 4m^3. Coefficients: 8 / 4 = 2. Indices: m^7 / m^3 = m^4. Each room has area 2m^4.',
    },
    // Challenge 2: numeric entry, multi-step Bond style
    {
      id: 'pid-q17',
      type: 'numeric-entry',
      stem: 'A computer file has size 2^15 kilobytes. It is split equally into 2^9 sections, then each section is split equally into 2^4 packets. How many kilobytes are in one packet?',
      tier: 'challenge',
      correctAnswer: 4,
      xpValue: 25,
      hint: 'Each section: 2^15 / 2^9 = 2^6 kilobytes. Each packet: 2^6 / 2^4 = 2^2 = 4 kilobytes.',
    },
    // Challenge 3: chained MCQ requires thinking about chained operations, correctIndex 3
    {
      id: 'pid-q18',
      type: 'multiple-choice',
      stem: 'Simplify (3^8 x 3^2) / (3^5 x 3^2) in index form.',
      tier: 'challenge',
      options: ['3^17', '3^13', '3^7', '3^3'],
      correctIndex: 3,
      xpValue: 25,
      hint: 'Top: 3^8 x 3^2 = 3^(8+2) = 3^10. Bottom: 3^5 x 3^2 = 3^(5+2) = 3^7. Quotient: 3^10 / 3^7 = 3^(10-7) = 3^3.',
    },
    // Challenge 4: numeric entry, find missing index in two unknowns
    {
      id: 'pid-q19',
      type: 'numeric-entry',
      stem: 'Given that 7^a / 7^3 = 7^4, find the value of a.',
      tier: 'challenge',
      correctAnswer: 7,
      xpValue: 25,
      hint: 'Set up the index equation: a - 3 = 4. Solve: a = 4 + 3 = 7. Check: 7^7 / 7^3 = 7^4. Correct.',
    },
    // Challenge 5: MCQ algebraic, correctIndex 0
    {
      id: 'pid-q20',
      type: 'multiple-choice',
      stem: 'Simplify (16w^10) / (2w^4) and then divide the result by 4w^2.',
      tier: 'challenge',
      options: ['2w^4', '8w^4', '2w^16', '8w^16'],
      correctIndex: 0,
      xpValue: 25,
      hint: 'First step: 16w^10 / 2w^4 = 8w^6. Second step: 8w^6 / 4w^2 = 2w^(6-2) = 2w^4.',
    },
    // Challenge 6: drag-order four chained quotients by their result. Brings drag count to 2.
    {
      id: 'pid-q21',
      type: 'drag-order',
      stem: 'Drag these expressions into order from smallest result to largest result.',
      tier: 'challenge',
      items: ['(2^5 x 2^3) / 2^6', '5^6 / 5^4', '(3^4 x 3^2) / 3^4', '(2^7 x 2^3) / 2^5'],
      correctOrder: [0, 2, 1, 3],
      xpValue: 25,
      hint: 'Compute each: (2^5 x 2^3)/2^6 = 2^2 = 4. 5^6/5^4 = 5^2 = 25. (3^4 x 3^2)/3^4 = 3^2 = 9. (2^7 x 2^3)/2^5 = 2^5 = 32. Smallest to largest: 4, 9, 25, 32, which is positions [0, 2, 1, 3].',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on an index-laws question where pupils divided the indices instead of subtracting.
    {
      id: 'pid-mis-divide-indices',
      description:
        'I divide the indices when dividing powers of the same base, so I write a^8 / a^2 = a^4 instead of a^6.',
      triggerAnswer: 'divide-indices',
      correction:
        'Actually you SUBTRACT the indices, you do not divide them. The rule is a^m / a^n = a^(m-n).',
      reExplanation:
        'Cancellation shows why. a^8 / a^2 written long is (a x a x a x a x a x a x a x a) / (a x a). Cancel two pairs; six a values remain, giving a^6. The count went from 8 to 6 by subtracting 2, not by dividing. Test: 2^6 / 2^2 = 64 / 4 = 16 = 2^4, where 6 - 2 = 4 works but 6 / 2 = 3 does not.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on an index-laws question where pupils applied the rule to different bases.
    {
      id: 'pid-mis-different-bases',
      description:
        'I apply a^m / a^n = a^(m-n) even when the bases differ, so I write 6^7 / 2^3 = 3^4 by dividing the bases and subtracting the indices.',
      triggerAnswer: 'different-bases',
      correction:
        'In fact the rule only works when the BASES are the same. With different bases you must evaluate each power and divide the results.',
      reExplanation:
        'The cancellation argument depends on identical factors on top and bottom. With 6^7 / 2^3 the factors are 6, 6, 6, 6, 6, 6, 6 on top and 2, 2, 2 on bottom. None of these cancel directly. So evaluate: 6^7 = 279 936 and 2^3 = 8. Divide: 279 936 / 8 = 34 992. Always check first that both bases are identical before subtracting indices.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 01 (Foundation, Non-calculator), commentary on an algebraic-fraction question where pupils subtracted the coefficients instead of dividing them.
    {
      id: 'pid-mis-coefficients-subtract',
      description:
        'I subtract the coefficients instead of dividing them when simplifying an algebraic quotient, so I write 12a^7 / 4a^2 = 8a^5.',
      triggerAnswer: 'coefficients-subtract',
      correction:
        'Actually the coefficients are ordinary numbers, so you DIVIDE them: 12 / 4 = 3, not 12 - 4 = 8.',
      reExplanation:
        'Only the matching letter bases use the index-subtraction rule. The numbers 12 and 4 are not exponents. They are factors that multiply the letter parts, so they obey ordinary arithmetic. Split the work in two: 12a^7 / 4a^2 = (12 / 4) x (a^7 / a^2) = 3 x a^5 = 3a^5. Always treat coefficients and powers separately, then multiply at the end.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Algebra section, "Common mistake" callout warning that x^5 / x^5 is 1, not 0.
    {
      id: 'pid-mis-equal-indices-zero',
      description:
        'I think k^5 / k^5 equals 0 because the cancellations seem to wipe out everything.',
      triggerAnswer: 'equal-indices-zero',
      correction:
        'In fact any non-zero number divided by itself is 1, so k^5 / k^5 = 1.',
      reExplanation:
        'Cancellation pairs top and bottom factors so they reduce to 1, not to 0. Five 2s over five 2s is 32 / 32 = 1. The same logic works for any base. Using the rule, k^5 / k^5 = k^(5-5) = k^0, and k^0 is defined as 1. Either way the value is 1, never 0.',
    },
    // Source: NCETM Secondary Magazine, Issue 134, article on common index-law slips, citing pupil work that applied the addition rule instead of subtraction.
    {
      id: 'pid-mis-add-instead-of-subtract',
      description:
        'I add the indices when dividing powers, mixing up multiplication and division rules, so I write 2^7 / 2^4 = 2^11.',
      triggerAnswer: 'add-instead-of-subtract',
      correction:
        'Actually for division you SUBTRACT (a^m / a^n = a^(m-n)). Addition is the rule for multiplication (a^m x a^n = a^(m+n)).',
      reExplanation:
        'A quick sanity check spots the error: 2^7 = 128 and 2^4 = 16. Their quotient is 128 / 16 = 8 = 2^3. The answer must be smaller than the top power, so subtraction is needed. Memory aid: the operation on the indices mirrors the operation on the powers. Multiplication outside means addition inside; division outside means subtraction inside.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter on multiplicative operations, on pupils stopping a calculation after the first step in a chained expression.
    {
      id: 'pid-mis-stop-half-way',
      description:
        'In an expression like (2^7 x 2^3) / 2^4 I compute the multiplication on top, get 2^10, then forget to do the division and write 2^10 as my answer.',
      triggerAnswer: 'stop-half-way',
      correction:
        'In fact a chained expression has to be carried through to the end. After 2^7 x 2^3 = 2^10, you still have to divide by 2^4.',
      reExplanation:
        'Read the whole expression first and plan the steps. Step 1: top = 2^7 x 2^3 = 2^(7+3) = 2^10. Step 2: divide by the bottom = 2^10 / 2^4 = 2^(10-4) = 2^6. Final answer: 2^6 = 64. Crossing each step off as you finish it stops you from stopping mid-way. The fraction bar is a "do this division" signal as much as the multiplication signs are "do this multiplication" signals.',
    },
    // Authored, no external source: classroom-observed slip where pupils write the base wrong, changing 2 to a different base while subtracting the indices correctly.
    {
      id: 'pid-mis-base-changes',
      description:
        'I subtract the indices correctly but accidentally change the base too, so I write 2^7 / 2^4 = 8^3 (treating 2^7 / 2^4 as a base division).',
      triggerAnswer: 'base-changes',
      correction:
        'In fact the BASE stays the same in the answer. Only the index changes. 2^7 / 2^4 = 2^3, not 8^3.',
      reExplanation:
        'The cancellation proof keeps every remaining factor identical to the original base. After cancelling, three 2s remain on top, not three 8s. The rule a^m / a^n = a^(m-n) keeps the same a on both sides. A check: 2^3 = 8 but 8^3 = 512, and 2^7 / 2^4 = 128 / 16 = 8, matching only the base-2 answer.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const primesIndicesDivisionZoneNodes = [primesIndicesDivision]
