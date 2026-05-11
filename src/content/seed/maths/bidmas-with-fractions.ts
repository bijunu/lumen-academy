import type { SkillNode } from '@/types/content'

export const bidmasWithFractions: SkillNode = {
  id: 'maths-bidmas-with-fractions',
  title: 'BIDMAS with Fractions',
  description:
    'Apply the priority of operations (BIDMAS) to expressions that contain fractions. Brackets still come first, indices next, then Multiplication and Division (left to right), then Addition and Subtraction (left to right). Treat a fraction bar as a bracket: everything above the bar is computed first and everything below the bar is computed first, then the division is performed. Convert mixed numbers to improper fractions before any operation outside Addition or Subtraction.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-bidmas',
  zoneName: 'BIDMAS',
  tier: 'confident',
  prerequisites: ['maths-bidmas-order-of-operations'],
  curriculum: {
    ks3Objective:
      'Use conventional notation for the priority of operations applied to expressions involving fractions.',
    awardingBodies: {
      aqa: 'N3 Apply BIDMAS to mixed fraction expressions (GCSE Mathematics 8300)',
      edexcel: 'N4 Apply the priority of operations to expressions involving fractions (GCSE Mathematics 1MA1)',
      ocr: '2.05b Apply BIDMAS to fraction expressions (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'bwf-scene-fraction-bar-bracket',
      title: 'The Fraction Bar Is a Hidden Bracket',
      type: 'fraction-wall',
      instructions:
        'Click each bar to see how (3 + 5) / 2 lays out. The top of the fraction bar groups 3 + 5 as if they sit inside a bracket, so the addition runs first and the bar then halves the total. The shaded bars show 8 (the bracketed sum) split evenly across 2 rows of 4 each. Reading the bar as plain division would compute 3 + 5 / 2 = 3 + 2.5 = 5.5, which is the wrong picture.',
      data: {
        rows: [
          { denominator: 8, colour: '#3B82F6', shaded: 3, label: '3 (top left of bar)' },
          { denominator: 8, colour: '#22C55E', shaded: 5, label: '5 (top right of bar)' },
          { denominator: 8, colour: '#A855F7', shaded: 8, label: '3 + 5 = 8 (above the bar)' },
          { denominator: 8, colour: '#EC4899', shaded: 4, label: '8 / 2 = 4 (below the bar halves it)' },
        ],
        notes:
          'A fraction bar acts as a pair of invisible brackets around the numerator AND around the denominator. Always compute each piece first, then divide.',
      },
    },
    {
      id: 'bwf-scene-expression-hotspots',
      title: 'Reading a Fraction Expression Piece by Piece',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how 1/2 + 1/3 x 6 is built. The fraction bars do not change anything inside themselves here (1/2 and 1/3 are single values). BIDMAS still applies to the operations between the fractions: the multiplication 1/3 x 6 runs before the addition 1/2 + (result).',
      data: {
        viewBox: '0 0 100 100',
        hotspots: [
          { id: 'bwf-h-half', x: 12, y: 50, label: '1/2', description: 'A single value, equal to 0.5. The fraction bar groups 1 over 2.' },
          { id: 'bwf-h-plus', x: 30, y: 50, label: '+', description: 'Lowest priority operation. Runs after the multiplication.' },
          { id: 'bwf-h-third', x: 50, y: 50, label: '1/3', description: 'A single value. The fraction bar groups 1 over 3.' },
          { id: 'bwf-h-times', x: 68, y: 50, label: 'x', description: 'Higher priority than the addition. Runs first.' },
          { id: 'bwf-h-six', x: 85, y: 50, label: '6', description: 'The whole number factor. Multiply 1/3 by 6 first.' },
          { id: 'bwf-h-step1', x: 50, y: 20, label: '1/3 x 6 = 2', description: 'Multiplication step. One third of 6 is 2.' },
          { id: 'bwf-h-step2', x: 50, y: 80, label: '1/2 + 2 = 2 1/2', description: 'Addition step. Final value is two and a half.' },
        ],
      },
    },
    {
      id: 'bwf-scene-priority-diagram',
      title: 'BIDMAS Priority for a Fraction Expression',
      type: 'diagram',
      instructions:
        'See how the priority list applies to 1/2 + 1/4 x 8. Brackets: none written, but the fraction bars act as invisible brackets around each fraction so 1/4 stays as the single value 0.25. Indices: none. Multiplication and Division: 1/4 x 8 = 2. Addition and Subtraction: 1/2 + 2 = 2 1/2. The multiplication step always runs before the addition step, no matter which sits to the left in the expression.',
      data: {
        expression: '1/2 + 1/4 x 8',
        priorityOrder: [
          { step: 'Brackets', action: 'The fraction bars act as invisible brackets around 1/2 and 1/4.', remaining: '1/2 + 1/4 x 8' },
          { step: 'Indices', action: 'No powers in this expression.', remaining: '1/2 + 1/4 x 8' },
          { step: 'Multiplication and Division', action: '1/4 x 8 = 2.', remaining: '1/2 + 2' },
          { step: 'Addition and Subtraction', action: '1/2 + 2 = 2 1/2.', remaining: '2 1/2' },
        ],
        answer: '2 1/2',
        rule: 'A fraction is a single value. BIDMAS applies to the operations between fractions, just as it does between whole numbers.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'bwf-worked-1',
      title: 'Evaluate 1/2 + 1/3 x 6',
      steps: [
        {
          explanation:
            'Identify the highest-priority operation. The fraction bars act as brackets around 1/2 and 1/3, but the values inside are already single numbers. There are no indices.',
          maths: '1/2 + 1/3 x 6',
        },
        {
          explanation:
            'Multiplication and Division come next. Compute 1/3 x 6 first.',
          maths: '1/3 x 6 = 6/3 = 2',
        },
        {
          explanation:
            'Substitute the product back into the expression.',
          maths: '1/2 + 2',
        },
        {
          explanation:
            'Now apply Addition. Rewrite 2 as 4/2 to share the same denominator, or simply add 1/2 to 2.',
          maths: '1/2 + 2 = 2 1/2',
        },
        {
          explanation: 'So 1/2 + 1/3 x 6 = 2 1/2 (which is also 5/2 as an improper fraction).',
          maths: '1/2 + 1/3 x 6 = 2 1/2',
        },
      ],
    },
    {
      id: 'bwf-worked-2',
      title: 'Evaluate (5 + 7) / 4 - 1/2 (missing step revealed by the engine)',
      steps: [
        {
          explanation:
            'Brackets first. The numerator (5 + 7) is grouped by the fraction bar AND the written brackets, so compute the sum before the division.',
          maths: '(5 + 7) / 4 - 1/2',
        },
        {
          explanation:
            'Work out the bracket on top of the fraction bar.',
          maths: '5 + 7 = 12',
        },
        {
          explanation:
            'Substitute the bracket value back into the fraction.',
        },
        {
          explanation:
            'Division: the fraction bar now reads 12 / 4.',
          maths: '12 / 4 = 3',
        },
        {
          explanation:
            'Substitute the division result back into the expression.',
          maths: '3 - 1/2',
        },
        {
          explanation:
            'Subtraction: rewrite 3 as 6/2 to share the denominator with 1/2, then subtract.',
          maths: '3 - 1/2 = 6/2 - 1/2 = 5/2 = 2 1/2',
        },
        {
          explanation: 'So (5 + 7) / 4 - 1/2 = 2 1/2.',
          maths: '(5 + 7) / 4 - 1/2 = 2 1/2',
        },
      ],
    },
  ],
  questions: [
    // Core 1: simple MCQ, multiplication before addition with a fraction
    {
      id: 'bwf-q1',
      type: 'multiple-choice',
      stem: 'Evaluate 1/2 + 1/4 x 8.',
      tier: 'core',
      options: ['6', '2 1/2', '12', '5'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Multiplication first: 1/4 x 8 = 2. Then 1/2 + 2 = 2 1/2.',
      misconceptionId: 'bwf-mis-add-before-multiply',
    },
    // Core 2: numeric, single half plus product
    {
      id: 'bwf-q2',
      type: 'numeric-entry',
      stem: 'Work out 1/3 x 9 as a whole number.',
      tier: 'core',
      correctAnswer: 3,
      xpValue: 10,
      hint: 'A third of 9 is 3. Multiplying 1/3 by 9 gives 9/3 = 3.',
    },
    // Core 3: numeric, fraction bar as bracket
    {
      id: 'bwf-q3',
      type: 'numeric-entry',
      stem: 'Work out (4 + 8) / 3 as a whole number.',
      tier: 'core',
      correctAnswer: 4,
      xpValue: 10,
      hint: 'Brackets first (the fraction bar also groups the top): 4 + 8 = 12. Then 12 / 3 = 4.',
      misconceptionId: 'bwf-mis-bar-as-plain-division',
    },
    // Core 4: numeric, product of fraction and whole number
    {
      id: 'bwf-q4',
      type: 'numeric-entry',
      stem: 'Evaluate 2 + 1/5 x 10 as a whole number.',
      tier: 'core',
      correctAnswer: 4,
      xpValue: 10,
      hint: 'Multiplication first: 1/5 x 10 = 2. Then 2 + 2 = 4.',
    },
    // Core 5: MCQ priority basics
    {
      id: 'bwf-q5',
      type: 'multiple-choice',
      stem: 'Evaluate 2 + 1/2 x 6.',
      tier: 'core',
      options: ['7 1/2', '5', '15', '5 1/2'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Multiplication first: 1/2 x 6 = 3. Then 2 + 3 = 5.',
      misconceptionId: 'bwf-mis-add-before-multiply',
    },
    // Core 6: MCQ, treat fraction bar as bracket
    {
      id: 'bwf-q6',
      type: 'multiple-choice',
      stem: 'Evaluate (6 + 2) / 4.',
      tier: 'core',
      options: ['6 1/2', '6', '2', '8'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'The fraction bar groups 6 + 2 = 8. Then 8 / 4 = 2.',
      misconceptionId: 'bwf-mis-bar-as-plain-division',
    },
    // Core 7: MCQ, multiplication of fractions
    {
      id: 'bwf-q7',
      type: 'multiple-choice',
      stem: 'Evaluate 1/4 x 12 + 1.',
      tier: 'core',
      options: ['1 1/3', '7', '4', '13'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Multiplication first: 1/4 x 12 = 3. Then 3 + 1 = 4.',
    },
    // Confident 1: multi-step with two fractions
    {
      id: 'bwf-q8',
      type: 'multiple-choice',
      stem: 'Evaluate 1/2 + 1/3 x 4. Give the answer as an improper fraction in lowest terms.',
      tier: 'confident',
      options: ['11/6', '6/5', '14/6', '7/3'],
      correctIndex: 0,
      xpValue: 15,
      hint: 'Multiplication first: 1/3 x 4 = 4/3. Then 1/2 + 4/3. Common denominator 6: 3/6 + 8/6 = 11/6.',
    },
    // Confident 2: numeric, fraction bar with brackets above
    {
      id: 'bwf-q9',
      type: 'numeric-entry',
      stem: 'Work out (3 + 9) / (1 + 2) as a whole number.',
      tier: 'confident',
      correctAnswer: 4,
      xpValue: 15,
      hint: 'Top bracket: 3 + 9 = 12. Bottom bracket: 1 + 2 = 3. Then 12 / 3 = 4.',
      misconceptionId: 'bwf-mis-top-only-bracket',
    },
    // Confident 3: spot-misconception on mixed numbers
    {
      id: 'bwf-q10',
      type: 'spot-misconception',
      stem: 'Tom needs to convert 2 1/3 to an improper fraction before multiplying. He writes "2 1/3 = 21/3 = 7".',
      tier: 'confident',
      statements: [
        {
          text: 'Tom is right. The digits 2 and 1 sit side by side, so the numerator is 21.',
          isMisconception: true,
        },
        {
          text: 'Actually a mixed number is a sum: 2 1/3 means 2 + 1/3. To convert, multiply the whole by the denominator and add the numerator: (2 x 3 + 1) / 3 = 7/3.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'bwf-mis-mixed-as-digits',
    },
    // Confident 4: spot-misconception on add-before-multiply
    {
      id: 'bwf-q11',
      type: 'spot-misconception',
      stem: 'A Sevenoaks Year 7 pupil writes "1/2 + 1/4 x 8 = (1/2 + 1/4) x 8 = 3/4 x 8 = 6".',
      tier: 'confident',
      statements: [
        {
          text: 'The pupil is right. Working left to right makes the addition run first.',
          isMisconception: true,
        },
        {
          text: 'Actually multiplication has higher priority than addition under BIDMAS. Compute 1/4 x 8 = 2 first, then add 1/2 to give 2 1/2. The pupil grouped the addition with an invisible bracket that is not there.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'bwf-mis-add-before-multiply',
    },
    // Confident 5: missing-step worked example
    {
      id: 'bwf-q12',
      type: 'missing-step',
      stem: 'Fill in the missing step. Maya evaluates (8 + 4) / 6 + 1/2.',
      tier: 'confident',
      steps: [
        'Brackets first (and the fraction bar groups the top): 8 + 4 = 12.',
        'Division: 12 / 6 = 2.',
        null,
        'Add: 2 + 1/2 = 2 1/2.',
      ],
      missingStepIndex: 2,
      correctStep: 'Substitute the division result back into the expression: 2 + 1/2.',
      xpValue: 20,
    },
    // Confident 6: MCQ with fraction multiplication and subtraction
    {
      id: 'bwf-q13',
      type: 'multiple-choice',
      stem: 'Evaluate 3 - 1/2 x 4.',
      tier: 'confident',
      options: ['10', '5', '1', '4'],
      correctIndex: 2,
      xpValue: 15,
      hint: 'Multiplication first: 1/2 x 4 = 2. Then 3 - 2 = 1.',
      misconceptionId: 'bwf-mis-add-before-multiply',
    },
    // Confident 7: drag-order
    {
      id: 'bwf-q14',
      type: 'drag-order',
      stem: 'Drag these expressions into order from the smallest value to the largest value.',
      tier: 'confident',
      items: ['1/2 + 1/4 x 8', '(1 + 5) / 3', '3 - 1/2 x 4', '1/3 x 9 + 2'],
      correctOrder: [2, 1, 0, 3],
      xpValue: 20,
      hint: 'Compute each: 1/2 + 1/4 x 8 = 2 1/2; (1 + 5) / 3 = 2; 3 - 1/2 x 4 = 1; 1/3 x 9 + 2 = 5. Order smallest to largest: 1, 2, 2 1/2, 5.',
    },
    // Confident 8: MCQ, treat numerator and denominator independently
    {
      id: 'bwf-q15',
      type: 'multiple-choice',
      stem: 'Evaluate (10 - 2) / (2 + 2).',
      tier: 'confident',
      options: ['8 - 1 = 7', '2', '8', '10 - 1 + 2 = 11'],
      correctIndex: 1,
      xpValue: 15,
      hint: 'Top bracket: 10 - 2 = 8. Bottom bracket: 2 + 2 = 4. Then 8 / 4 = 2.',
      misconceptionId: 'bwf-mis-top-only-bracket',
    },
    // Challenge 1: Bond-style word problem with fractions
    {
      id: 'bwf-q16',
      type: 'numeric-entry',
      stem: 'A Tunbridge Wells bakery sells 1/4 of its 60 loaves before 10 am, then a coach party buys 18 more loaves. How many loaves are left at the end of the morning?',
      tier: 'challenge',
      correctAnswer: 27,
      xpValue: 25,
      hint: 'Work out the morning sales by BIDMAS: 1/4 x 60 + 18 = 15 + 18 = 33. Subtract from 60: 60 - 33 = 27 loaves left.',
    },
    // Challenge 2: MCQ multi-step with bracket and fraction
    {
      id: 'bwf-q17',
      type: 'multiple-choice',
      stem: 'Evaluate (6 + 2) / 4 + 1/2 x 6.',
      tier: 'challenge',
      options: ['12', '6', '4', '5'],
      correctIndex: 3,
      xpValue: 25,
      hint: 'Top bracket: 6 + 2 = 8. Division: 8 / 4 = 2. Multiplication: 1/2 x 6 = 3. Then 2 + 3 = 5.',
    },
    // Challenge 3: numeric, mixed number inside BIDMAS
    {
      id: 'bwf-q18',
      type: 'numeric-entry',
      stem: 'Evaluate 2 1/2 x 4 - 6 as a whole number.',
      tier: 'challenge',
      correctAnswer: 4,
      xpValue: 25,
      hint: 'Convert the mixed number first: 2 1/2 = 5/2. Multiplication: 5/2 x 4 = 20/2 = 10. Subtraction: 10 - 6 = 4.',
      misconceptionId: 'bwf-mis-mixed-as-digits',
    },
    // Challenge 4: MCQ word problem in Manchester context
    {
      id: 'bwf-q19',
      type: 'multiple-choice',
      stem: 'A Manchester running club has 48 members. On Saturday 1/3 of the members run 5 km and a further 7 members run 10 km. How many members ran on Saturday?',
      tier: 'challenge',
      options: ['23', '16', '21', '14'],
      correctIndex: 0,
      xpValue: 25,
      hint: 'BIDMAS: 1/3 x 48 + 7. Multiplication first: 1/3 x 48 = 16. Then 16 + 7 = 23.',
    },
    // Challenge 5: numeric, expression with fraction bar covering a difference
    {
      id: 'bwf-q20',
      type: 'numeric-entry',
      stem: 'Work out (20 - 8) / 4 + 1/2 x 10 as a whole number.',
      tier: 'challenge',
      correctAnswer: 8,
      xpValue: 25,
      hint: 'Top bracket: 20 - 8 = 12. Division: 12 / 4 = 3. Multiplication: 1/2 x 10 = 5. Then 3 + 5 = 8.',
    },
    // Challenge 6: MCQ word problem with fraction of price
    {
      id: 'bwf-q21',
      type: 'multiple-choice',
      stem: 'A UK school worksheet pack costs £12. A Sevenoaks tutor buys 1/4 of a set of 20 packs at full price, then buys 3 more packs at half price. What is the total cost in pounds?',
      tier: 'challenge',
      options: ['£60', '£72', '£78', '£90'],
      correctIndex: 2,
      xpValue: 25,
      hint: 'Full price packs: 1/4 x 20 = 5 packs at £12 = £60. Half price packs: 3 x (1/2 x 12) = 3 x 6 = £18. Total: 60 + 18 = £78.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, November 2022, Paper 1F (Foundation, Non-calculator), commentary on a BIDMAS question of the form a + b x c where pupils evaluated left to right and ignored the priority of multiplication over addition.
    {
      id: 'bwf-mis-add-before-multiply',
      description:
        'I work through a fraction expression left to right, so 1/2 + 1/4 x 8 becomes (1/2 + 1/4) x 8 instead of 1/2 + (1/4 x 8).',
      triggerAnswer: 'add-before-multiply',
      correction:
        'Actually multiplication has higher priority than addition under BIDMAS. The product is computed first, then added to the other value.',
      reExplanation:
        'For 1/2 + 1/4 x 8, compute the multiplication first: 1/4 x 8 = 2. Then 1/2 + 2 = 2 1/2. Grouping the addition first gives 3/4 x 8 = 6, which is wrong because the addition runs after the multiplication, never before it.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a fraction-bar BIDMAS question where pupils computed only the first term above the bar without bracketing the whole numerator.
    {
      id: 'bwf-mis-bar-as-plain-division',
      description:
        'I read a fraction bar as a plain division sign, so (3 + 5) / 2 becomes 3 + 5 / 2 = 3 + 2.5 = 5.5.',
      triggerAnswer: 'bar-as-plain-division',
      correction:
        'Actually the fraction bar acts as a pair of invisible brackets around the top expression. The whole numerator is computed before the division.',
      reExplanation:
        'For (3 + 5) / 2, the bar groups 3 + 5 first: 3 + 5 = 8. Then 8 / 2 = 4. Treating the bar as plain division ignores the bracketing rule and gives 5.5, which is the answer to a different expression.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 01 (Foundation, Non-calculator), commentary on a question of the form (a + b) / (c + d) where pupils bracketed only the numerator and divided each part of the denominator separately.
    {
      id: 'bwf-mis-top-only-bracket',
      description:
        'I bracket only the top of a fraction bar and divide each term of the denominator separately, so (10 - 2) / (2 + 2) becomes 8 / 2 + 2 = 4 + 2 = 6.',
      triggerAnswer: 'top-only-bracket',
      correction:
        'Actually the fraction bar groups BOTH the top and the bottom. The whole denominator is computed first, then the division is done.',
      reExplanation:
        'For (10 - 2) / (2 + 2), top bracket: 10 - 2 = 8. Bottom bracket: 2 + 2 = 4. Then 8 / 4 = 2. The fraction bar wraps the whole numerator AND the whole denominator. Splitting the denominator across the division gives the wrong answer.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Fractions and Mixed Numbers" page, "Common mistake" callout warning that pupils sometimes treat the mixed number 2 1/3 as the product 2 multiplied by 1/3 or as the two-digit reading "twenty one over three".
    {
      id: 'bwf-mis-mixed-as-digits',
      description:
        'I read a mixed number like 2 1/3 as the digits 2 and 1 concatenated, giving 21/3 = 7, or as the product 2 x 1/3 = 2/3, instead of as 2 + 1/3.',
      triggerAnswer: 'mixed-as-digits',
      correction:
        'Actually a mixed number is a sum of a whole number and a fraction: 2 1/3 means 2 + 1/3. To make it improper, multiply the whole by the denominator and add the numerator.',
      reExplanation:
        'For 2 1/3, the whole part is 2 and the fraction part is 1/3. Convert to improper by writing (2 x 3 + 1) / 3 = 7/3. The digits 21 and 3 are not the right reading. Inside a BIDMAS expression, always convert a mixed number to an improper fraction before multiplying or dividing.',
    },
    // Source: NCETM Secondary Magazine, Issue 138, "Order of Operations with Fractions" article, citing pupil work that multiplied a numerator by the operand outside the fraction but left the denominator untouched.
    {
      id: 'bwf-mis-numerator-only-product',
      description:
        'When I multiply a fraction by a whole number I scale the numerator but forget to keep the denominator, so 1/3 x 6 becomes 6 instead of 6/3 = 2.',
      triggerAnswer: 'numerator-only-product',
      correction:
        'Actually multiplying a fraction by a whole number scales the numerator while the denominator stays the same. The new fraction is then simplified.',
      reExplanation:
        'For 1/3 x 6, multiply the numerator by 6: 1 x 6 = 6. Keep the denominator: 6/3. Simplify: 6/3 = 2. Forgetting the denominator gives 6, which is three times the correct answer. Picture the bar as splitting the new numerator into three equal parts.',
    },
    // Source: Hart, K. M. (ed.) (1981) Children's Understanding of Mathematics: 11-16 (CSMS), John Murray; chapter on Operations, where pupils misread implicit grouping symbols and parsed (a + b) / c as a + (b / c).
    {
      id: 'bwf-mis-bracket-drop-on-numerator',
      description:
        'I drop the bracket on the numerator when the fraction bar is written inline, so (a + b) / c becomes a + b / c.',
      triggerAnswer: 'bracket-drop-on-numerator',
      correction:
        'Actually the inline fraction bar still acts as a bracket on the numerator. Brackets remain even when the expression is written on one line.',
      reExplanation:
        'For (5 + 7) / 4, the bar groups 5 + 7 first: 12 / 4 = 3. Dropping the bracket gives 5 + 7 / 4 = 5 + 1.75 = 6.75, which solves a different expression. When typing on one line, the brackets are essential to preserve the grouping that a stacked fraction shows visually.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a multi-step BIDMAS expression with fractions where pupils performed all addition before any multiplication, including the fractional product.
    {
      id: 'bwf-mis-all-add-then-multiply',
      description:
        'I sum every term in an expression first, then multiply by anything that is multiplied, so 1/2 + 1/4 x 8 becomes (1/2 + 1/4) x 8 by gathering all additions before any product.',
      triggerAnswer: 'all-add-then-multiply',
      correction:
        'Actually each operation keeps its place. Only the operation marked by the multiplication sign is the product; the addition stays as an addition.',
      reExplanation:
        'For 1/2 + 1/4 x 8, the multiplication binds only the 1/4 and the 8. The 1/2 stays outside the product. Compute 1/4 x 8 = 2 first, then 1/2 + 2 = 2 1/2. Gathering all addition before any multiplication invents brackets that are not in the expression.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const bidmasWithFractionsZoneNodes = [bidmasWithFractions]
