import type { SkillNode } from '@/types/content'

export const bidmasWithDecimals: SkillNode = {
  id: 'maths-bidmas-with-decimals',
  title: 'BIDMAS with Decimals',
  description:
    'Apply the priority of operations (BIDMAS) to expressions that contain decimals. Treat each decimal as a single number and follow the same priority order: Brackets, Indices, Multiplication and Division (left to right), then Addition and Subtraction (left to right). Keep decimal places aligned during addition and subtraction, count decimal places carefully during multiplication, and round only at the very end of the calculation.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-bidmas',
  zoneName: 'BIDMAS',
  tier: 'confident',
  prerequisites: ['maths-bidmas-order-of-operations'],
  curriculum: {
    ks3Objective:
      'Use conventional notation for the priority of operations applied to expressions involving decimals.',
    awardingBodies: {
      aqa: 'N3 Apply BIDMAS to decimal expressions (GCSE Mathematics 8300)',
      edexcel: 'N4 Apply the priority of operations to expressions involving decimals (GCSE Mathematics 1MA1)',
      ocr: '2.05b Apply BIDMAS to decimal expressions (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'bwd-scene-expression-anatomy',
      title: 'Anatomy of 2.5 + 0.3 x 4',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to reveal the priority of each operation in 2.5 + 0.3 x 4. Multiplication outranks Addition, so 0.3 x 4 is the first move regardless of the order on the page. The addition then folds the product back into the running total.',
      data: {
        viewBox: '0 0 100 100',
        hotspots: [
          {
            id: 'bwd-h-firstterm',
            x: 12,
            y: 50,
            label: '2.5 (waiting term)',
            description: 'A decimal value sitting on its own. Nothing to do at this step.',
          },
          {
            id: 'bwd-h-plus',
            x: 30,
            y: 50,
            label: '+ (priority 4: lowest)',
            description: 'Addition is the lowest priority. It waits until every higher rank has finished.',
          },
          {
            id: 'bwd-h-mult',
            x: 58,
            y: 50,
            label: '0.3 x 4 (priority 3: first move)',
            description: 'Multiplication beats addition in BIDMAS. Evaluate this before touching the plus.',
          },
          {
            id: 'bwd-h-product',
            x: 58,
            y: 78,
            label: '0.3 x 4 = 1.2',
            description: 'Three tenths added four times gives twelve tenths, which is 1.2.',
          },
          {
            id: 'bwd-h-result',
            x: 80,
            y: 50,
            label: '2.5 + 1.2 = 3.7 (final)',
            description: 'Substitute the product back, then add: 2.5 + 1.2 = 3.7.',
          },
        ],
      },
    },
    {
      id: 'bwd-scene-decimal-as-fraction',
      title: 'Decimals as Tenths and Hundredths',
      type: 'fraction-wall',
      instructions:
        'Click the bars to highlight 0.5 (five tenths) and 0.25 (twenty-five hundredths). Reading a decimal as a fraction confirms its size: 0.5 is one half, 0.25 is one quarter, 0.1 is one tenth. The bars stop the slip of thinking 0.5 is somehow smaller than 0.25 just because it has fewer digits after the point.',
      data: {
        bars: [
          { label: '1', parts: 1 },
          { label: '1/2 (0.5)', parts: 2, highlight: [0] },
          { label: '1/4 (0.25)', parts: 4, highlight: [0] },
          { label: '1/10 (0.1)', parts: 10, highlight: [0] },
        ],
        rule: 'Convert tricky decimals into fractions when you need a sanity check on size before applying BIDMAS.',
      },
    },
    {
      id: 'bwd-scene-bidmas-strategy',
      title: 'A Decimal-Friendly BIDMAS Strategy',
      type: 'diagram',
      instructions:
        'Walk through 5 - (0.2 + 0.6) x 1.5 one priority at a time. Brackets first: 0.2 + 0.6 = 0.8. Indices: none. Multiplication next: 0.8 x 1.5 = 1.2. Subtraction last: 5 - 1.2 = 3.8. Working priority by priority stops the slip of evaluating left to right, and lining up decimal places stops carry mistakes. Round only when the final value asks for it.',
      data: {
        expression: '5 - (0.2 + 0.6) x 1.5',
        priorityOrder: [
          { step: 'Brackets', action: '0.2 + 0.6 = 0.8', remaining: '5 - 0.8 x 1.5' },
          { step: 'Indices', action: 'no powers in this expression', remaining: '5 - 0.8 x 1.5' },
          { step: 'Multiplication and Division', action: '0.8 x 1.5 = 1.20', remaining: '5 - 1.2' },
          { step: 'Addition and Subtraction', action: '5 - 1.2 = 3.8', remaining: '3.8' },
        ],
        answer: 3.8,
        rule: 'Find the highest priority operation first, do it carefully with decimal places aligned, then move to the next priority.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'bwd-worked-1',
      title: 'Evaluate 2.5 + 0.3 x 4',
      steps: [
        {
          explanation:
            'Identify the highest-priority operation. There are no brackets and no indices.',
          maths: '2.5 + 0.3 x 4',
        },
        {
          explanation:
            'Multiplication and Division come before Addition and Subtraction. Compute 0.3 x 4.',
          maths: '0.3 x 4 = 1.2',
        },
        {
          explanation:
            'Substitute the product back into the expression.',
          maths: '2.5 + 1.2',
        },
        {
          explanation:
            'Add the decimals by lining up the points.',
          maths: '2.5 + 1.2 = 3.7',
        },
        {
          explanation: 'So 2.5 + 0.3 x 4 = 3.7.',
          maths: '2.5 + 0.3 x 4 = 3.7',
        },
      ],
    },
    {
      id: 'bwd-worked-2',
      title: 'Evaluate (4.2 - 0.7) x 1.5 (missing step revealed by the engine)',
      steps: [
        {
          explanation:
            'Brackets first. Work out the subtraction inside the bracket.',
          maths: '(4.2 - 0.7) x 1.5',
        },
        {
          explanation:
            'Subtract inside the bracket: line up the decimal points.',
        },
        {
          explanation:
            'Substitute the bracket value back into the expression.',
          maths: '3.5 x 1.5',
        },
        {
          explanation:
            'Multiply the digits as whole numbers first: 35 x 15 = 525.',
          maths: '35 x 15 = 525',
        },
        {
          explanation:
            'Count the decimal places in each factor: 3.5 has 1 dp, 1.5 has 1 dp. Total = 2 dp.',
          maths: 'total decimal places: 2',
        },
        {
          explanation:
            'Place the decimal point so the answer has 2 digits after it.',
          maths: '3.5 x 1.5 = 5.25',
        },
        {
          explanation: 'So (4.2 - 0.7) x 1.5 = 5.25.',
          maths: '(4.2 - 0.7) x 1.5 = 5.25',
        },
      ],
    },
  ],
  questions: [
    // Core 1: MCQ. BIDMAS basic with decimal: multiply first
    {
      id: 'bwd-q1',
      type: 'multiple-choice',
      stem: 'Evaluate 2.5 + 0.3 x 4.',
      tier: 'core',
      options: ['11.2', '3.7', '4.0', '7.5'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'bwd-mis-left-to-right-strict',
      hint: 'Multiplication before addition: 0.3 x 4 = 1.2. Then 2.5 + 1.2 = 3.7.',
    },
    // Core 2: numeric. Brackets first with decimals (decimal alignment risk)
    {
      id: 'bwd-q2',
      type: 'numeric-entry',
      stem: 'Work out (1.2 + 0.8) x 3.',
      tier: 'core',
      correctAnswer: 6,
      xpValue: 10,
      misconceptionId: 'bwd-mis-align-right-decimal-add',
      hint: 'Brackets first: line up the decimal points. 1.2 + 0.8 = 2.0. Then 2.0 x 3 = 6.',
    },
    // Core 3: MCQ. Subtraction after multiplication
    {
      id: 'bwd-q3',
      type: 'multiple-choice',
      stem: 'Evaluate 5 - 0.4 x 2.',
      tier: 'core',
      options: ['9.2', '4.2', '4.0', '5.8'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'bwd-mis-left-to-right-strict',
      hint: 'Multiplication first: 0.4 x 2 = 0.8. Then 5 - 0.8 = 4.2.',
    },
    // Core 4: numeric. Division then addition with decimals (decimal-as-integer risk)
    {
      id: 'bwd-q4',
      type: 'numeric-entry',
      stem: 'Evaluate 1.5 / 5 + 0.2.',
      tier: 'core',
      correctAnswer: 0.5,
      xpValue: 10,
      misconceptionId: 'bwd-mis-decimal-as-integer',
      hint: 'Division first: 1.5 / 5 = 0.3 (not 3). Then 0.3 + 0.2 = 0.5.',
    },
    // Core 5: MCQ. Pound and pence sum, multiplication then addition
    {
      id: 'bwd-q5',
      type: 'multiple-choice',
      stem: 'A Tunbridge Wells corner shop sells a notebook for £1.20 and pencils at £0.30 each. What is the total for one notebook and three pencils, in pounds?',
      tier: 'core',
      options: ['£4.50', '£1.50', '£2.10', '£2.50'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Cost = 1.20 + 0.30 x 3. Multiplication first: 0.30 x 3 = 0.90. Then 1.20 + 0.90 = 2.10.',
    },
    // Core 6: MCQ. Order of operations with brackets and addition outside
    {
      id: 'bwd-q6',
      type: 'multiple-choice',
      stem: 'Evaluate (2.5 - 0.5) + 0.6 x 2.',
      tier: 'core',
      options: ['3.6', '4.6', '5.2', '3.2'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Brackets: 2.5 - 0.5 = 2.0. Multiplication: 0.6 x 2 = 1.2. Then 2.0 + 1.2 = 3.2.',
    },
    // Core 7: numeric. Mixed decimal + integer with division
    {
      id: 'bwd-q7',
      type: 'numeric-entry',
      stem: 'Work out 6 - 4.8 / 4.',
      tier: 'core',
      correctAnswer: 4.8,
      xpValue: 10,
      hint: 'Division first: 4.8 / 4 = 1.2. Then 6 - 1.2 = 4.8.',
    },
    // Confident 1: MCQ. Brackets with mixed decimal sum
    {
      id: 'bwd-q8',
      type: 'multiple-choice',
      stem: 'Evaluate (4.2 - 0.7) x 1.5.',
      tier: 'confident',
      options: ['5.25', '6.30', '3.50', '4.05'],
      correctIndex: 0,
      xpValue: 15,
      hint: 'Brackets first: 4.2 - 0.7 = 3.5. Then 3.5 x 1.5 = 5.25.',
    },
    // Confident 2: spot-misconception. Decimal place misalignment
    {
      id: 'bwd-q9',
      type: 'spot-misconception',
      stem: 'Maya works out 4.5 + 0.6 x 2 and writes "addition first because it sits on the left: 4.5 + 0.6 = 5.1, then 5.1 x 2 = 10.2".',
      tier: 'confident',
      statements: [
        {
          text: 'Maya is right. The operations sit left to right, so addition is evaluated first.',
          isMisconception: true,
        },
        {
          text: 'In fact Multiplication is higher priority than Addition. Compute 0.6 x 2 = 1.2 first, then 4.5 + 1.2 = 5.7. Position on the page does not override BIDMAS.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'bwd-mis-left-to-right-strict',
    },
    // Confident 3: MCQ. Two-step product with two-decimal multiplier
    {
      id: 'bwd-q10',
      type: 'multiple-choice',
      stem: 'Evaluate 0.5 x 0.4 + 0.1.',
      tier: 'confident',
      options: ['0.3', '0.21', '0.5', '0.06'],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'bwd-mis-decimal-place-shift',
      hint: 'Multiplication first: 0.5 x 0.4 = 0.20 (1 + 1 = 2 decimal places). Then 0.20 + 0.10 = 0.30.',
    },
    // Confident 4: spot-misconception. Bracket-skipping slip
    {
      id: 'bwd-q11',
      type: 'spot-misconception',
      stem: 'Liam works out 0.5 x (3.2 + 0.8) and writes "multiplication has higher priority than addition in BIDMAS, so 0.5 x 3.2 = 1.6 first, then 1.6 + 0.8 = 2.4".',
      tier: 'confident',
      statements: [
        {
          text: 'Liam is right. Multiplication is always evaluated before addition, even when the addition sits inside brackets.',
          isMisconception: true,
        },
        {
          text: 'In fact Brackets sit at the top of the BIDMAS priority, above Multiplication. Compute the bracket first: 3.2 + 0.8 = 4.0. Then 0.5 x 4.0 = 2.0.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'bwd-mis-bracket-skip',
    },
    // Confident 5: missing-step worked example
    {
      id: 'bwd-q12',
      type: 'missing-step',
      stem: 'Fill in the missing step. Liam evaluates 7.2 - 0.3 x 2 + 1.5.',
      tier: 'confident',
      steps: [
        'Identify the highest priority operations. No brackets, no indices.',
        'Multiplication first: 0.3 x 2 = 0.6.',
        null,
        'Subtract and add left to right: 7.2 - 0.6 + 1.5 = 6.6 + 1.5 = 8.1.',
      ],
      missingStepIndex: 2,
      correctStep: 'Substitute the product back into the expression: 7.2 - 0.6 + 1.5.',
      xpValue: 20,
    },
    // Confident 6: MCQ. Multiplication then subtraction (negative-feeling result)
    {
      id: 'bwd-q13',
      type: 'multiple-choice',
      stem: 'Evaluate 1.5 - 0.5 x 2.5.',
      tier: 'confident',
      options: ['0.25', '2.5', '0.75', '0.5'],
      correctIndex: 0,
      xpValue: 15,
      hint: 'Multiplication first: 0.5 x 2.5 = 1.25. Then 1.5 - 1.25 = 0.25.',
    },
    // Confident 7: drag-order
    {
      id: 'bwd-q14',
      type: 'drag-order',
      stem: 'Drag the steps into the correct order for evaluating (2 + 0.5) x 0.4.',
      tier: 'confident',
      items: [
        'Multiply 0.4 by the bracket value: 2.5 x 0.4 = 1.0.',
        'Add inside the bracket: 2 + 0.5 = 2.5.',
        'Final answer: 1.0.',
        'Identify Brackets as the highest priority.',
      ],
      correctOrder: [3, 1, 0, 2],
      xpValue: 20,
      hint: 'BIDMAS says identify the priority first, then evaluate the bracket, then the multiplication, then state the answer.',
    },
    // Confident 8: numeric. Supermarket scenario with brackets implied
    {
      id: 'bwd-q15',
      type: 'numeric-entry',
      stem: 'At a Manchester supermarket, apples cost £0.45 each and a basket holds 6. The till adds a £0.20 bag charge to the basket. What is the total cost in pounds?',
      tier: 'confident',
      correctAnswer: 2.9,
      unit: 'pounds',
      xpValue: 15,
      hint: 'Cost = 0.45 x 6 + 0.20. Multiplication first: 0.45 x 6 = 2.70. Then 2.70 + 0.20 = 2.90.',
    },
    // Challenge 1: numeric. Bond-style word problem with brackets and rounding
    {
      id: 'bwd-q16',
      type: 'numeric-entry',
      stem: 'A Sevenoaks fabric shop sells ribbon at £1.20 per metre and a roll of tape at £0.85. Aisha buys 2.5 metres of ribbon and one roll of tape, then pays with a £5 note. How much change does she get, in pounds?',
      tier: 'challenge',
      correctAnswer: 1.15,
      unit: 'pounds',
      xpValue: 25,
      hint: 'Cost = 1.20 x 2.5 + 0.85. Multiplication first: 1.20 x 2.5 = 3.00. Then 3.00 + 0.85 = 3.85. Change = 5 - 3.85 = 1.15.',
    },
    // Challenge 2: MCQ. Multi-step decimal chain
    {
      id: 'bwd-q17',
      type: 'multiple-choice',
      stem: 'Evaluate (1.5 + 0.5) x 0.4 - 0.3.',
      tier: 'challenge',
      options: ['0.5', '0.8', '1.1', '0.7'],
      correctIndex: 0,
      xpValue: 25,
      hint: 'Brackets: 1.5 + 0.5 = 2.0. Multiplication: 2.0 x 0.4 = 0.8. Subtraction: 0.8 - 0.3 = 0.5.',
    },
    // Challenge 3: numeric. Measurement context with grams and rounding
    {
      id: 'bwd-q18',
      type: 'numeric-entry',
      stem: 'A jar holds 250 grams of sugar. A baker pours out 0.4 of the jar twice, then adds 30 grams back. How many grams of sugar are now in the jar?',
      tier: 'challenge',
      correctAnswer: 80,
      unit: 'grams',
      xpValue: 25,
      hint: 'Removed = 0.4 x 250 x 2 = 200 grams. Final = 250 - 200 + 30 = 80 grams.',
    },
    // Challenge 4: MCQ. Round-too-early misconception trigger
    {
      id: 'bwd-q19',
      type: 'multiple-choice',
      stem: 'Evaluate 0.45 x 4 + 0.27, then round the answer to 1 decimal place.',
      tier: 'challenge',
      options: ['2.0', '2.1', '2.3', '2.07'],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'bwd-mis-round-too-early',
      hint: 'Do BIDMAS in full first: 0.45 x 4 = 1.80, then 1.80 + 0.27 = 2.07. Round at the end: 2.07 rounds to 2.1.',
    },
    // Challenge 5: numeric. Exam-style with brackets and multiplication
    {
      id: 'bwd-q20',
      type: 'numeric-entry',
      stem: 'Evaluate 8 - (1.2 + 0.3) x 2.',
      tier: 'challenge',
      correctAnswer: 5,
      xpValue: 25,
      hint: 'Brackets first: 1.2 + 0.3 = 1.5. Multiplication: 1.5 x 2 = 3.0. Subtraction: 8 - 3.0 = 5.0.',
    },
    // Challenge 6: MCQ. Bond-style multi-step with measure (grams) and money
    {
      id: 'bwd-q21',
      type: 'multiple-choice',
      stem: 'A Manchester market stall sells loose oats at £0.04 per 10 grams. A customer buys 250 grams of oats and a £0.30 paper bag. What is the total cost in pounds?',
      tier: 'challenge',
      options: ['£1.00', '£1.30', '£0.84', '£1.04'],
      correctIndex: 1,
      xpValue: 25,
      hint: 'Cost of oats = 0.04 x (250 / 10) = 0.04 x 25 = 1.00. Total = 1.00 + 0.30 = 1.30.',
    },
  ],
  misconceptions: [
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 1F (Foundation, Non-calculator), commentary on a 2.5 + 0.3 x 4-style question where pupils added before multiplying, reading the expression strictly left to right.
    {
      id: 'bwd-mis-left-to-right-strict',
      description:
        'I read the expression strictly left to right and ignore the BIDMAS priority, so 2.5 + 0.3 x 4 becomes (2.5 + 0.3) x 4 = 11.2.',
      triggerAnswer: 'left-to-right-strict',
      correction:
        'Actually BIDMAS sets a priority order. Multiplication beats Addition wherever it sits in the expression.',
      reExplanation:
        'For 2.5 + 0.3 x 4, the multiplication 0.3 x 4 = 1.2 is evaluated first because Multiplication is higher priority than Addition. Then 2.5 + 1.2 = 3.7. Left to right only applies within the same priority level, such as multiplication and division together, or addition and subtraction together. It does not apply across different levels.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a decimal-addition question where pupils right-aligned the digits instead of the decimal points, producing answers off by a factor of ten.
    {
      id: 'bwd-mis-align-right-decimal-add',
      description:
        'When I add decimals with different numbers of digits after the point, I line up the right edges and add column by column.',
      triggerAnswer: 'align-right-decimal-add',
      correction:
        'In fact decimals are lined up by the decimal point, not by the right edge of the digits.',
      reExplanation:
        'For 4.5 + 0.36, pad 4.5 to 4.50 so each column has a digit. Then 4.50 + 0.36 = 4.86. Lining up the right edges would place the 36 in the tenths and hundredths of 4.5, which gives an answer that is the wrong size by a factor of ten or more.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Decimals and Place Value" page, "Common mistake" callout warning that 0.5 is not the same as the digit 5.
    {
      id: 'bwd-mis-decimal-as-integer',
      description:
        'I treat the decimal 0.5 as the integer 5 when it suits me, so 0.5 x 4 becomes 5 x 4 = 20.',
      triggerAnswer: 'decimal-as-integer',
      correction:
        'Actually 0.5 is half of one, not the same as five. The leading zero and the decimal point change the value.',
      reExplanation:
        '0.5 means 5 tenths, or one half. Multiplying by 0.5 halves the other number: 0.5 x 4 = 2. Reading 0.5 as the integer 5 would give 20, which is ten times too big. A quick check is the size: half of 4 is 2, not 20.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 1F (Foundation, Non-calculator), commentary on a 0.3 x 4 question where pupils answered 0.12 by miscounting the decimal places in the product.
    {
      id: 'bwd-mis-decimal-place-shift',
      description:
        'When I multiply decimals I work out the digits but put the decimal point in the wrong place, so 0.3 x 4 becomes 0.12 instead of 1.2.',
      triggerAnswer: 'decimal-place-shift',
      correction:
        'In fact the answer has as many decimal places as the two factors together. 0.3 has 1 decimal place, 4 has 0, so the answer has 1 decimal place.',
      reExplanation:
        'For 0.3 x 4, ignore the decimal point first: 3 x 4 = 12. Count the decimal places in the question: 1 + 0 = 1. Place the point so the answer has 1 digit after it: 1.2. Reading 0.3 x 4 as 0.12 doubles the decimal places by mistake and shrinks the answer by a factor of ten.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on bracket-skipping in BIDMAS questions where pupils evaluated the multiplication first and ignored the brackets.
    {
      id: 'bwd-mis-bracket-skip',
      description:
        'I skip the brackets and evaluate the multiplication or division first, so (1.2 + 0.8) x 3 becomes 1.2 + 0.8 x 3 = 1.2 + 2.4 = 3.6.',
      triggerAnswer: 'bracket-skip',
      correction:
        'Actually Brackets sit at the top of the BIDMAS priority. They are always evaluated before any other operation.',
      reExplanation:
        'For (1.2 + 0.8) x 3, the bracket means "do this first". 1.2 + 0.8 = 2.0, then 2.0 x 3 = 6.0. Brackets exist precisely to override the default BIDMAS order, so a learner who skips them changes the meaning of the expression. Read the bracket first every time, no matter what comes after.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 01 (Foundation, Non-calculator), commentary on multi-step decimal questions where pupils rounded intermediate values and lost accuracy in the final answer.
    {
      id: 'bwd-mis-round-too-early',
      description:
        'I round each intermediate decimal to 1 decimal place as I go, so 0.45 x 4 becomes 0.5 x 4 = 2.0, then 2.0 + 0.27 rounds to 2.3.',
      triggerAnswer: 'round-too-early',
      correction:
        'In fact you keep the full precision through every step and round only at the final answer.',
      reExplanation:
        'For 0.45 x 4 + 0.27, work in full: 0.45 x 4 = 1.80, then 1.80 + 0.27 = 2.07. Round 2.07 to 1 decimal place at the end: 2.1. Rounding 0.45 to 0.5 early loses 0.05 of accuracy, and that error grows when you multiply by 4. Rounding once at the end keeps the answer trustworthy.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const bidmasWithDecimalsZoneNodes = [bidmasWithDecimals]
