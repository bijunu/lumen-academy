import type { SkillNode } from '@/types/content'

export const primesIndicesMultiplication: SkillNode = {
  id: 'maths-primes-indices-multiplication',
  title: 'Indices: Multiplying Powers of the Same Base',
  description:
    'Apply the multiplication index law a^m x a^n = a^(m+n) when the base is the same. The law follows from expansion: 2^3 x 2^4 = (2 x 2 x 2) x (2 x 2 x 2 x 2) = 2^7. Add the indices, keep the base. The law extends to algebraic terms (x^5 x x^2 = x^7) and to terms with coefficients, where the numbers multiply normally and only the index parts add (3a^2 x 4a^5 = 12a^7). Mixed bases do NOT combine: 2^3 x 3^4 stays as 2^3 x 3^4 because no index law applies across different bases.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-primes',
  zoneName: 'Primes',
  tier: 'confident',
  prerequisites: ['maths-primes-squares-cubes'],
  curriculum: {
    ks3Objective:
      'Use the laws of indices for multiplication of integer powers of the same base.',
    awardingBodies: {
      aqa: 'N7 Calculate with integer powers; apply the index law a^m x a^n = a^(m+n) (GCSE Mathematics 8300)',
      edexcel: 'N7 Calculate with roots and with integer indices; apply a^m x a^n = a^(m+n) (GCSE Mathematics 1MA1)',
      ocr: '1.05b Apply the index laws including a^m x a^n = a^(m+n) (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'pim-scene-expansion-proof',
      title: 'Why the Indices Add',
      type: 'labelled-diagram',
      instructions:
        'Read each row to see how 2^3 x 2^4 expands. The first row shows 2^3 as three 2s. The second row shows 2^4 as four 2s. Together that is seven 2s multiplied: 2 x 2 x 2 x 2 x 2 x 2 x 2 = 2^7. The total power (7) equals the sum of the two original powers (3 + 4). The base stays as 2 because every factor in the expansion is a 2.',
      data: {
        viewBox: '0 0 200 120',
        hotspots: [
          { id: 'pim-h-row1', x: 30, y: 20, label: '2^3 = 2 x 2 x 2', description: 'The first power expanded as three 2s.' },
          { id: 'pim-h-row2', x: 30, y: 50, label: '2^4 = 2 x 2 x 2 x 2', description: 'The second power expanded as four 2s.' },
          { id: 'pim-h-combined', x: 30, y: 80, label: 'Combined: 2 x 2 x 2 x 2 x 2 x 2 x 2', description: 'Three 2s plus four 2s gives seven 2s, all multiplied.' },
          { id: 'pim-h-result', x: 75, y: 80, label: '= 2^7 = 128', description: 'Seven 2s in a product is 2^7. Indices added: 3 + 4 = 7.' },
          { id: 'pim-h-rule', x: 50, y: 95, label: 'Rule: a^m x a^n = a^(m+n) (same base only)', description: 'Add the indices and keep the base. Works for any positive integer indices.' },
        ],
      },
    },
    {
      id: 'pim-scene-rule-applied',
      title: 'Same Base, Add the Indices',
      type: 'simulation',
      instructions:
        'Try the rule across different bases. The base never changes; only the indices add. Whether the base is 5, x, or any other letter, the same pattern applies. Note the trap: the rule needs the SAME base on both sides. If the bases differ, the indices cannot be combined.',
      data: {
        examples: [
          { product: '5^2 x 5^3', expansion: '(5 x 5) x (5 x 5 x 5)', result: '5^5', value: 3125 },
          { product: '7^4 x 7^1', expansion: '(7 x 7 x 7 x 7) x 7', result: '7^5', value: 16807 },
          { product: 'x^5 x x^2', expansion: '(x x x x x) x (x x)', result: 'x^7', value: 'algebraic' },
          { product: 'y^3 x y^6', expansion: 'three ys then six ys', result: 'y^9', value: 'algebraic' },
        ],
        rule: 'Same base on both sides: add the indices, keep the base. Different bases: rule does not apply.',
      },
    },
    {
      id: 'pim-scene-coefficients-and-mixed-bases',
      title: 'Coefficients Multiply, Mixed Bases Stay Apart',
      type: 'simulation',
      instructions:
        'Two extra cases to recognise. With coefficients, the numbers in front (3 and 4) MULTIPLY normally, while the index parts ADD: 3a^2 x 4a^5 = (3 x 4) x (a^2 x a^5) = 12a^7. With mixed bases, no rule combines them: 2^3 x 3^4 stays as 2^3 x 3^4 (or as a single number 8 x 81 = 648). Trying to write 6^7 or 5^7 mixes operations that are not equal.',
      data: {
        coefficientExample: { input: '3a^2 x 4a^5', coefficientStep: '3 x 4 = 12', indexStep: '2 + 5 = 7', result: '12a^7' },
        mixedBaseExample: { input: '2^3 x 3^4', wrongAttempts: ['6^7 (multiplies bases AND adds indices)', '5^7 (adds bases AND adds indices)'], correct: '2^3 x 3^4 = 8 x 81 = 648 (no index rule applies)' },
        rule: 'Coefficients: multiply numbers, add indices. Mixed bases: no shortcut, evaluate each power separately.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'pim-worked-1',
      title: 'Simplify 2^3 x 2^4 using the multiplication index law',
      steps: [
        {
          explanation: 'Check the bases match. Both terms have base 2, so the law applies.',
          maths: 'bases: 2 and 2 (same)',
        },
        {
          explanation: 'Apply the rule a^m x a^n = a^(m+n). Add the indices.',
          maths: '2^3 x 2^4 = 2^(3 + 4)',
        },
        {
          explanation: 'Carry out the addition in the index.',
          maths: '= 2^7',
        },
        {
          explanation: 'Verify by expansion: 2^3 = 8 and 2^4 = 16, so 8 x 16 = 128. And 2^7 = 128. The two methods agree.',
          maths: 'check: 8 x 16 = 128 = 2^7',
        },
        {
          explanation: 'So 2^3 x 2^4 = 2^7 (= 128).',
          maths: '2^3 x 2^4 = 2^7',
        },
      ],
    },
    {
      id: 'pim-worked-2',
      title: 'Simplify 3a^2 x 4a^5 (with coefficients)',
      steps: [
        {
          explanation: 'Separate the coefficients from the powers of a. The numbers in front are 3 and 4; the powers are a^2 and a^5.',
          maths: '3a^2 x 4a^5 = (3 x 4) x (a^2 x a^5)',
        },
        {
          explanation: 'Multiply the coefficients normally.',
          maths: '3 x 4 = 12',
        },
        {
          explanation: 'Apply the multiplication index law to the powers of a. Both have base a, so add the indices.',
          maths: 'a^2 x a^5 = a^(2 + 5) = a^7',
        },
        {
          explanation: 'Combine the two parts to write the simplified term.',
          maths: '= 12a^7',
        },
        {
          explanation: 'So 3a^2 x 4a^5 = 12a^7. The coefficients multiplied (3 x 4 = 12); the indices added (2 + 5 = 7).',
          maths: '3a^2 x 4a^5 = 12a^7',
        },
      ],
    },
  ],
  questions: [
    // Core 1: simplest case, identity check on the law
    {
      id: 'pim-q1',
      type: 'multiple-choice',
      stem: 'What is 2^3 x 2^4 in index form?',
      tier: 'core',
      options: ['2^12', '4^7', '2^7', '4^12'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pim-mis-multiply-indices',
      hint: 'Same base (2), so add the indices: 3 + 4 = 7. Keep the base. Answer: 2^7.',
    },
    // Core 2: numeric powers of 5
    {
      id: 'pim-q2',
      type: 'multiple-choice',
      stem: 'Simplify 5^2 x 5^3.',
      tier: 'core',
      options: ['5^5', '5^6', '10^5', '25^5'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pim-mis-combine-bases',
      hint: 'Bases match (both 5), so add the indices: 2 + 3 = 5. Keep the base. Answer: 5^5.',
    },
    // Core 3: algebraic, simple
    {
      id: 'pim-q3',
      type: 'numeric-entry',
      stem: 'Simplify x^5 x x^2 in the form x^n. What is n?',
      tier: 'core',
      correctAnswer: 7,
      xpValue: 10,
      hint: 'Same base x, so add the indices: 5 + 2 = 7. So x^5 x x^2 = x^7, and n = 7.',
    },
    // Core 4: 7 squared times 7 to power 1
    {
      id: 'pim-q4',
      type: 'multiple-choice',
      stem: 'Write 7^2 x 7 as a single power of 7.',
      tier: 'core',
      options: ['7^2', '7^3', '14^3', '49^2'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'A bare 7 is 7^1. Add the indices: 2 + 1 = 3. So 7^2 x 7 = 7^3.',
    },
    // Core 5: numeric value, MCQ form
    {
      id: 'pim-q5',
      type: 'multiple-choice',
      stem: 'Calculate the value of 2^2 x 2^5.',
      tier: 'core',
      options: ['7', '32', '64', '128'],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'pim-mis-drop-base',
      hint: 'First simplify in index form: 2^2 x 2^5 = 2^(2+5) = 2^7. Then evaluate: 2^7 = 128. Answering 7 just drops the base.',
    },
    // Core 6: missing exponent fill-in
    {
      id: 'pim-q6',
      type: 'numeric-entry',
      stem: 'Find the missing index: 3^4 x 3^? = 3^9. What number goes in place of ?',
      tier: 'core',
      correctAnswer: 5,
      xpValue: 10,
      hint: 'Same base, so the indices add: 4 + ? = 9. Solve: ? = 9 - 4 = 5.',
    },
    // Core 7: spot-misconception on multiplying indices
    {
      id: 'pim-q7',
      type: 'spot-misconception',
      stem: 'Daniel writes "a^3 x a^4 = a^12" because he multiplied the indices.',
      tier: 'core',
      statements: [
        {
          text: 'Daniel is right. When you multiply two powers of the same base, you multiply the indices to get the new index.',
          isMisconception: true,
        },
        {
          text: 'In fact you ADD the indices when multiplying same-base powers, not multiply them. Expand to see why: a^3 x a^4 = (a x a x a) x (a x a x a x a) = seven copies of a = a^7. So a^3 x a^4 = a^7, not a^12.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pim-mis-multiply-indices',
    },
    // Confident 1: y to higher powers
    {
      id: 'pim-q8',
      type: 'numeric-entry',
      stem: 'Simplify y^6 x y^4 in the form y^n. What is n?',
      tier: 'confident',
      correctAnswer: 10,
      xpValue: 15,
      hint: 'Same base y, so add the indices: 6 + 4 = 10. So y^6 x y^4 = y^10, and n = 10.',
    },
    // Confident 2: coefficients and indices together
    {
      id: 'pim-q9',
      type: 'multiple-choice',
      stem: 'Simplify 3a^2 x 4a^5.',
      tier: 'confident',
      options: ['7a^7', '12a^10', '12a^7', '7a^10'],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pim-mis-add-coefficients',
      hint: 'Coefficients MULTIPLY: 3 x 4 = 12. Indices ADD: 2 + 5 = 7. Answer: 12a^7.',
    },
    // Confident 3: mixed bases trap
    {
      id: 'pim-q10',
      type: 'multiple-choice',
      stem: 'Which of these correctly simplifies 2^3 x 3^4?',
      tier: 'confident',
      options: ['6^7', '5^7', 'It cannot be combined into a single power; the value is 648', '6^12'],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pim-mis-mixed-bases',
      hint: 'The bases (2 and 3) are different, so no index law applies. Evaluate each power and multiply: 2^3 x 3^4 = 8 x 81 = 648. The expression cannot be written as one power.',
    },
    // Confident 4: three terms same base
    {
      id: 'pim-q11',
      type: 'numeric-entry',
      stem: 'Simplify x^2 x x^3 x x^4 in the form x^n. What is n?',
      tier: 'confident',
      correctAnswer: 9,
      xpValue: 15,
      hint: 'The rule extends to three or more terms: same base, so add ALL the indices. 2 + 3 + 4 = 9. So x^2 x x^3 x x^4 = x^9.',
    },
    // Confident 5: spot-misconception on a + a (related to indices confusion)
    {
      id: 'pim-q12',
      type: 'spot-misconception',
      stem: 'Sara writes "a x a = a^2" and then says "a + a = a^2 as well, because both have two a’s".',
      tier: 'confident',
      statements: [
        {
          text: 'Sara is right on both. Anything with two a’s in it is a^2.',
          isMisconception: true,
        },
        {
          text: 'In fact only a x a = a^2. The expression a + a is repeated ADDITION, which equals 2a (not a^2). The index counts repeated MULTIPLICATION, not how many a’s appear in any way. Multiplying same-base powers (a^m x a^n) adds the indices; adding terms keeps the index and combines coefficients.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pim-mis-addition-as-power',
    },
    // Confident 6: missing-step worked example
    {
      id: 'pim-q13',
      type: 'missing-step',
      stem: 'Fill in the missing step. Hannah simplifies 5b^3 x 2b^4.',
      tier: 'confident',
      steps: [
        'Separate the parts: 5b^3 x 2b^4 = (5 x 2) x (b^3 x b^4).',
        'Multiply the coefficients: 5 x 2 = 10.',
        null,
        'Combine: 5b^3 x 2b^4 = 10b^7.',
      ],
      missingStepIndex: 2,
      correctStep: 'Add the indices on the powers of b: b^3 x b^4 = b^(3+4) = b^7.',
      xpValue: 20,
    },
    // Confident 7: drag-order, build the simplification
    {
      id: 'pim-q14',
      type: 'drag-order',
      stem: 'Drag the steps into the correct order to simplify 4x^3 x 2x^5.',
      tier: 'confident',
      items: [
        'Final answer: 8x^8.',
        'Multiply the coefficients: 4 x 2 = 8.',
        'Separate parts: 4x^3 x 2x^5 = (4 x 2) x (x^3 x x^5).',
        'Add the indices on x: x^3 x x^5 = x^(3+5) = x^8.',
      ],
      correctOrder: [2, 1, 3, 0],
      xpValue: 20,
      hint: 'Order: separate first, then handle coefficients, then handle indices, then combine.',
    },
    // Confident 8: power miscount trap (a^1 x a^0 type stretch -> use a^1 x a)
    {
      id: 'pim-q15',
      type: 'multiple-choice',
      stem: 'Simplify b x b^5.',
      tier: 'confident',
      options: ['b^5', '2b^5', 'b^6', 'b^4'],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pim-mis-bare-base-power',
      hint: 'A bare b is b^1 (the index of 1 is usually not written). Add the indices: 1 + 5 = 6. So b x b^5 = b^6.',
    },
    // Challenge 1: Bond-style word problem (multi-step)
    {
      id: 'pim-q16',
      type: 'numeric-entry',
      stem: 'A school library buys storage cubes. Each cube has 2^3 small cells inside. The librarian buys 2^4 cubes for the science section and another 2^2 cubes for the maths section. How many small cells are there in total across both sections? (Answer as a single number.)',
      tier: 'challenge',
      correctAnswer: 160,
      xpValue: 25,
      hint: 'Science cells: 2^3 x 2^4 = 2^7 = 128. Maths cells: 2^3 x 2^2 = 2^5 = 32. Total: 128 + 32 = 160.',
    },
    // Challenge 2: stretch with three different bases
    {
      id: 'pim-q17',
      type: 'multiple-choice',
      stem: 'Simplify 2a^3 x 5a^2 x a^4.',
      tier: 'challenge',
      options: ['10a^9', '7a^9', '10a^24', '8a^9'],
      correctIndex: 0,
      xpValue: 25,
      misconceptionId: 'pim-mis-add-coefficients',
      hint: 'Coefficients: 2 x 5 x 1 = 10 (the bare a^4 has coefficient 1). Indices: 3 + 2 + 4 = 9. So 2a^3 x 5a^2 x a^4 = 10a^9.',
    },
    // Challenge 3: missing index (algebraic)
    {
      id: 'pim-q18',
      type: 'numeric-entry',
      stem: 'Find the missing index: 2x^4 x 3x^? = 6x^11. What number goes in place of ?',
      tier: 'challenge',
      correctAnswer: 7,
      xpValue: 25,
      hint: 'Coefficients work out: 2 x 3 = 6 (matches). For the indices: 4 + ? = 11, so ? = 7.',
    },
    // Challenge 4: multi-step value
    {
      id: 'pim-q19',
      type: 'multiple-choice',
      stem: 'Calculate 3^2 x 3^3 and write the answer as a single number.',
      tier: 'challenge',
      options: ['729', '15', '125', '243'],
      correctIndex: 3,
      xpValue: 25,
      hint: 'First combine: 3^2 x 3^3 = 3^(2+3) = 3^5. Then evaluate: 3^5 = 3 x 3 x 3 x 3 x 3 = 243.',
    },
    // Challenge 5: tricky mixed expression with x and y
    {
      id: 'pim-q20',
      type: 'multiple-choice',
      stem: 'Simplify x^2 y^3 x x^4 y. Which is correct?',
      tier: 'challenge',
      options: ['x^6 y^4', 'x^8 y^3', '(xy)^10', 'x^6 y^3'],
      correctIndex: 0,
      xpValue: 25,
      misconceptionId: 'pim-mis-mixed-bases',
      hint: 'Treat each base separately. Powers of x: x^2 x x^4 = x^6. Powers of y: y^3 x y^1 = y^4. Combine: x^6 y^4. The two bases never merge.',
    },
    // Challenge 6: Bond-style word problem with coefficients
    {
      id: 'pim-q21',
      type: 'numeric-entry',
      stem: 'A box has 4n^2 chocolates. A shop receives 6n^3 boxes for a Christmas display. The simplified total number of chocolates is in the form kn^p. What is the value of k + p?',
      tier: 'challenge',
      correctAnswer: 29,
      xpValue: 25,
      hint: 'Total chocolates = (4n^2)(6n^3). Multiply coefficients: 4 x 6 = 24, so k = 24. Add indices: 2 + 3 = 5, so p = 5. Then k + p = 24 + 5 = 29.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on an indices-multiplication question where many candidates wrote a^3 x a^4 as a^12 by multiplying the indices instead of adding them.
    {
      id: 'pim-mis-multiply-indices',
      description:
        'I multiply the indices when I see two powers of the same base multiplied together, so I write a^3 x a^4 as a^12 instead of a^7.',
      triggerAnswer: 'multiply-indices',
      correction:
        'Actually you ADD the indices when multiplying same-base powers. Multiplying happens when raising a power to another power, not here.',
      reExplanation:
        'Expand to see it: a^3 x a^4 = (a x a x a) x (a x a x a x a). Count the as: 3 + 4 = 7 in total, so the result is a^7. The shortcut a^m x a^n = a^(m+n) just records that count. Multiplying the indices (3 x 4 = 12) would suggest twelve as, which the expansion clearly does not give.',
    },
    // Source: Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 1F (Foundation, Non-calculator), commentary on an index-laws question where pupils wrote 2^3 x 3^4 as 6^7, treating the bases as if they should combine.
    {
      id: 'pim-mis-mixed-bases',
      description:
        'I think the multiplication index law works for any two powers, so I combine 2^3 x 3^4 into 6^7 by multiplying the bases and adding the indices.',
      triggerAnswer: 'mixed-bases',
      correction:
        'In fact the law a^m x a^n = a^(m+n) only applies when the bases are the SAME. With different bases, no shortcut combines them into one power.',
      reExplanation:
        '2^3 x 3^4 means 8 x 81 = 648. Test the wrong attempt: 6^7 = 279,936, which is nowhere near 648. The expansion would be (2 x 2 x 2) x (3 x 3 x 3 x 3), which is seven factors but they are not all the same number, so they cannot be written as one base raised to a single power. Powers stay separate when bases differ.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 02 (Foundation, Calculator), commentary on a coefficient-and-index question where pupils wrote 3a^2 x 4a^5 as 7a^7 by adding the coefficients alongside adding the indices.
    {
      id: 'pim-mis-add-coefficients',
      description:
        'When simplifying terms with coefficients (such as 3a^2 x 4a^5), I add the coefficients to get 7 instead of multiplying them to get 12.',
      triggerAnswer: 'add-coefficients',
      correction:
        'Actually the coefficients MULTIPLY (3 x 4 = 12); only the indices add (2 + 5 = 7). The coefficient and the power of a are separate parts of the term.',
      reExplanation:
        '3a^2 means 3 x a x a, and 4a^5 means 4 x a x a x a x a x a. Multiplying: (3 x 4) x (a x a x a x a x a x a x a) = 12a^7. The numbers (3 and 4) follow normal multiplication; the index parts follow the multiplication index law. Adding 3 + 4 would be like saying 3 lots of something plus 4 lots of something, which is a different operation entirely.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Index Laws" page, "Common mistake" callout warning that the bases must match before applying any index rule, and that 6^7 is not equivalent to 2^3 x 3^4.
    {
      id: 'pim-mis-combine-bases',
      description:
        'I add the bases as well as the indices, so I write 5^2 x 5^3 as 10^5 because I added 5 + 5 to get 10.',
      triggerAnswer: 'combine-bases',
      correction:
        'In fact the BASE stays the same when you apply the multiplication index law. Only the indices add.',
      reExplanation:
        '5^2 x 5^3 = (5 x 5) x (5 x 5 x 5) = 5^5 = 3125. Test the wrong attempt: 10^5 = 100,000, which is far too big. The base 5 is what gets multiplied repeatedly; doubling it to 10 would change every factor in the expansion. The rule a^m x a^n = a^(m+n) keeps the base a unchanged.',
    },
    // Source: Hodder Education Edexcel GCSE Mathematics Foundation textbook, Chapter 4 "Indices", "Common error" margin note about pupils forgetting that a bare letter or number has an implicit index of 1.
    {
      id: 'pim-mis-bare-base-power',
      description:
        'I treat a bare b (with no visible index) as having power 0 instead of power 1, so I write b x b^5 as b^5 instead of b^6.',
      triggerAnswer: 'bare-base-power',
      correction:
        'Actually a bare b means b^1 (one copy of b). The index 1 is usually not written, but it is there.',
      reExplanation:
        'Anything to the power 1 is itself: 7^1 = 7, b^1 = b, x^1 = x. The index just counts how many copies are multiplied. So b x b^5 = b^1 x b^5 = b^(1+5) = b^6. By contrast, b^0 = 1 (a different rule, taught later). Always rewrite a bare base as power 1 before applying the index law to avoid losing a copy.',
    },
    // Source: NCETM Secondary Magazine, Issue 132, article on common errors with index laws, citing pupil work that confused repeated multiplication (which gives a power) with repeated addition (which gives a coefficient).
    {
      id: 'pim-mis-addition-as-power',
      description:
        'I think a + a equals a^2 (because there are two as), confusing repeated addition with repeated multiplication.',
      triggerAnswer: 'addition-as-power',
      correction:
        'In fact a + a = 2a (repeated addition gives a coefficient), while a x a = a^2 (repeated multiplication gives a power). The two operations behave differently.',
      reExplanation:
        'Try a = 3. Then a + a = 3 + 3 = 6, which is 2a (matches). And a x a = 3 x 3 = 9, which is a^2 = 3^2 (matches). The number 6 is not the same as 9, so a + a is not a^2. The index law a^m x a^n = a^(m+n) is about MULTIPLYING powers; adding terms uses different rules (collect like terms).',
    },
    // Authored, no external source: classroom-observed slip where pupils correctly add the indices but accidentally drop the base, writing the answer as just the new index (a^3 x a^4 = 7).
    {
      id: 'pim-mis-drop-base',
      description:
        'I add the indices but write down only the resulting number, dropping the base, so I give the answer to a^3 x a^4 as 7 instead of a^7.',
      triggerAnswer: 'drop-base',
      correction:
        'Actually the base must stay in the answer. The index 7 alone is not the same as a^7.',
      reExplanation:
        'a^7 means seven copies of a multiplied together (a x a x a x a x a x a x a). Writing just 7 says the answer is the number seven, which only happens if a equals a specific value. Always keep the base: a^m x a^n = a^(m+n), where the a on the right is the same a as on the left. The index is a label on top of the base, not a replacement for it.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const primesIndicesMultiplicationZoneNodes = [primesIndicesMultiplication]
