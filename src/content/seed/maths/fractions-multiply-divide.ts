import type { SkillNode } from '@/types/content'

export const fractionsMultiplyDivide: SkillNode = {
  id: 'maths-fractions-multiply-divide',
  title: 'Multiplying and Dividing Fractions',
  description:
    'Multiply two fractions by multiplying the tops and the bottoms, then simplify. Divide by a fraction using Keep, Flip, Change: keep the first fraction, flip the second to its reciprocal, change the divide to a multiply. Apply the same rules to whole numbers and to fraction-of-amount problems.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-fractions',
  zoneName: 'Fractions',
  tier: 'confident',
  prerequisites: ['maths-fractions-equivalent', 'maths-fractions-simplify'],
  curriculum: {
    ks3Objective:
      'Use the four operations, including formal written methods, applied to integers, decimals, proper and improper fractions, and mixed numbers, all both positive and negative.',
    awardingBodies: {
      aqa: 'N8 Calculate exactly with fractions (GCSE Mathematics 8300)',
      edexcel: 'N8 Calculate exactly with fractions (GCSE Mathematics 1MA1)',
      ocr: '2.01b Apply the four operations to proper fractions (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'fmd-scene-area-model',
      title: 'Area Model: One Half of One Third',
      type: 'fraction-wall',
      instructions:
        'Click each cell to highlight the overlap. The unit square is split into thirds across (red) and halves down (blue). The double-shaded patch covers 1 of 6 cells. So 1/2 of 1/3 is 1/6. Multiplying tops gives 1 x 1 = 1, multiplying bottoms gives 2 x 3 = 6, and the answer is 1/6.',
      data: {
        wholeLabel: 'Unit square split into halves and thirds',
        cols: 3,
        rows: 2,
        parts: [
          { id: 'fmd-1', share: 'overlap', value: 1, colour: 'purple' },
          { id: 'fmd-2', share: 'right-third', value: 1, colour: 'red' },
          { id: 'fmd-3', share: 'right-third', value: 1, colour: 'red' },
          { id: 'fmd-4', share: 'bottom-half', value: 1, colour: 'blue' },
          { id: 'fmd-5', share: 'background', value: 1 },
          { id: 'fmd-6', share: 'background', value: 1 },
        ],
        totalParts: 6,
        overlapParts: 1,
        result: '1/2 x 1/3 = 1/6',
        rule: 'Multiply the tops, multiply the bottoms, then simplify if you can.',
      },
    },
    {
      id: 'fmd-scene-kfc',
      title: 'How Many Quarters Fit in a Half?',
      type: 'simulation',
      instructions:
        'See how 1/2 divided by 1/4 asks the question "how many quarters fit in one half?". Two quarter slices line up perfectly inside a half. So 1/2 / 1/4 = 2, even though the answer is bigger than 1/2. Dividing by a fraction smaller than 1 always makes the answer larger than the first fraction. The Keep, Flip, Change trick gives the same answer: keep 1/2, flip 1/4 to 4/1, change to multiply: 1/2 x 4/1 = 4/2 = 2.',
      data: {
        question: '1/2 / 1/4',
        interpretation: 'How many quarters fit in one half?',
        result: 2,
        bar: [
          { id: 'half-bar', label: '1/2', length: 0.5 },
          { id: 'quarter-1', label: '1/4', length: 0.25, fits: true },
          { id: 'quarter-2', label: '1/4', length: 0.25, fits: true },
        ],
        kfc: 'keep 1/2, flip 1/4 to 4/1, change to multiply: 1/2 x 4/1 = 4/2 = 2',
        rule: 'Dividing by a fraction less than 1 gives an answer bigger than the first fraction.',
      },
    },
    {
      id: 'fmd-scene-reciprocals',
      title: 'Reciprocal Pairs',
      type: 'fraction-wall',
      instructions:
        'Click a tile to see its reciprocal. The reciprocal of a fraction swaps the top and bottom: 3/4 pairs with 4/3, 1/5 pairs with 5/1 (which is just 5), and the reciprocal of a whole number n is 1/n. A fraction multiplied by its reciprocal always equals 1: 3/4 x 4/3 = 12/12 = 1.',
      data: {
        wholeLabel: 'Reciprocal pairs',
        pairs: [
          { id: 'rec-1', fraction: '3/4', reciprocal: '4/3', product: '3/4 x 4/3 = 1' },
          { id: 'rec-2', fraction: '1/5', reciprocal: '5', product: '1/5 x 5 = 1' },
          { id: 'rec-3', fraction: '2/7', reciprocal: '7/2', product: '2/7 x 7/2 = 1' },
          { id: 'rec-4', fraction: '4', reciprocal: '1/4', product: '4 x 1/4 = 1' },
        ],
        rule: 'Swap top and bottom to find the reciprocal. The reciprocal of a whole number n is 1/n.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'fmd-worked-1',
      title: 'Multiply 3/4 by 8/9 and simplify',
      steps: [
        {
          explanation:
            'Multiply the numerators (tops) together.',
          maths: '3 x 8 = 24',
        },
        {
          explanation:
            'Multiply the denominators (bottoms) together.',
          maths: '4 x 9 = 36',
        },
        {
          explanation:
            'Write the result as a single fraction.',
          maths: '3/4 x 8/9 = 24/36',
        },
        {
          explanation:
            'Find the highest common factor of 24 and 36. Both share a factor of 12.',
          maths: 'HCF(24, 36) = 12',
        },
        {
          explanation:
            'Divide the top and bottom by the HCF to simplify.',
          maths: '24/36 = 2/3',
        },
        {
          explanation: 'So 3/4 multiplied by 8/9 is 2/3 in its simplest form.',
          maths: '3/4 x 8/9 = 2/3',
        },
      ],
    },
    {
      id: 'fmd-worked-2',
      title: 'Divide 5/6 by 5/12 using Keep, Flip, Change',
      steps: [
        {
          explanation:
            'Identify the dividend (the first fraction) and the divisor (the second fraction).',
          maths: 'dividend: 5/6, divisor: 5/12',
        },
        {
          explanation:
            'Keep the first fraction the same, flip the second to its reciprocal, and change the divide into a multiply.',
          maths: '5/6 / 5/12 becomes 5/6 x 12/5',
        },
        {
          explanation:
            'Multiply the tops and the bottoms.',
          maths: '(5 x 12) / (6 x 5) = 60/30',
        },
        {
          explanation:
            'Simplify by dividing top and bottom by the HCF, which is 30.',
          maths: '60/30 = 2',
        },
        {
          explanation: 'So 5/6 divided by 5/12 is 2.',
          maths: '5/6 / 5/12 = 2',
        },
      ],
    },
  ],
  questions: [
    // Core 1: multiply two unit fractions
    {
      id: 'fmd-q1',
      type: 'multiple-choice',
      stem: 'What is 1/2 x 1/4?',
      tier: 'core',
      options: ['1/8', '2/6', '1/6', '2/8'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'fmd-mis-add-tops-bottoms',
      hint: 'Multiply the tops: 1 x 1 = 1. Multiply the bottoms: 2 x 4 = 8.',
    },
    // Core 2: multiply two proper fractions, no simplification needed
    {
      id: 'fmd-q2',
      type: 'numeric-entry',
      stem: 'Work out 1/3 x 2/5 as a single fraction. Give your answer as the numerator of the simplest form, then the denominator. Enter the numerator.',
      tier: 'core',
      correctAnswer: 2,
      xpValue: 10,
      hint: '1/3 x 2/5 = (1 x 2) / (3 x 5) = 2/15. The numerator is 2.',
    },
    // Core 3: divide unit fractions (KFC)
    {
      id: 'fmd-q3',
      type: 'numeric-entry',
      stem: 'Work out 1/2 / 1/4 (one half divided by one quarter).',
      tier: 'core',
      correctAnswer: 2,
      xpValue: 10,
      misconceptionId: 'fmd-mis-divide-makes-smaller',
      hint: 'Keep, Flip, Change: 1/2 x 4/1 = 4/2 = 2. There are 2 quarters in one half.',
    },
    // Core 4: reciprocal of a proper fraction
    {
      id: 'fmd-q4',
      type: 'multiple-choice',
      stem: 'What is the reciprocal of 3/4?',
      tier: 'core',
      options: ['3/4', '1/3', '7/12', '4/3'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'A reciprocal swaps the top and bottom of the fraction.',
    },
    // Core 5: whole number times fraction
    {
      id: 'fmd-q5',
      type: 'multiple-choice',
      stem: 'What is 2/3 x 6?',
      tier: 'core',
      options: ['2', '4', '12', '9'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Write 6 as 6/1, then multiply: (2 x 6) / (3 x 1) = 12/3 = 4.',
    },
    // Core 6: fraction of an amount
    {
      id: 'fmd-q6',
      type: 'multiple-choice',
      stem: 'A canteen serves a 24-piece tray of vegetable sticks. Aisha takes 3/4 of them for her class. How many sticks does she take?',
      tier: 'core',
      options: ['12', '15', '18', '21'],
      correctIndex: 2,
      xpValue: 10,
      hint: '3/4 of 24 means (3 x 24) / 4 = 72 / 4 = 18.',
    },
    // Core 7: multiply, no simplification (testing place value of result)
    {
      id: 'fmd-q7',
      type: 'multiple-choice',
      stem: 'What is 2/5 x 3/7?',
      tier: 'core',
      options: ['5/12', '6/35', '6/12', '5/35'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'fmd-mis-add-tops-bottoms',
      hint: 'Multiply the tops: 2 x 3 = 6. Multiply the bottoms: 5 x 7 = 35.',
    },
    // Core 8: spot-misconception on adding tops and bottoms
    {
      id: 'fmd-q8',
      type: 'spot-misconception',
      stem: 'Tom writes 1/2 x 1/3 = 2/5 by adding the numerators and adding the denominators.',
      tier: 'core',
      statements: [
        {
          text: 'Tom is right. Multiplying fractions means adding the tops together and adding the bottoms together.',
          isMisconception: true,
        },
        {
          text: 'In fact you multiply the tops together and multiply the bottoms together. 1/2 x 1/3 = (1 x 1) / (2 x 3) = 1/6, not 2/5.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fmd-mis-add-tops-bottoms',
    },
    // Confident 1: multiply with simplification
    {
      id: 'fmd-q9',
      type: 'numeric-entry',
      stem: 'Work out 3/4 x 8/9 and give your answer in its simplest form. Enter the numerator.',
      tier: 'confident',
      correctAnswer: 2,
      xpValue: 15,
      hint: '3/4 x 8/9 = 24/36. The HCF of 24 and 36 is 12. Divide both by 12 to get 2/3, so the numerator is 2.',
    },
    // Confident 2: divide proper fractions (KFC + simplify)
    {
      id: 'fmd-q10',
      type: 'numeric-entry',
      stem: 'Work out 5/6 / 5/12 (five-sixths divided by five-twelfths).',
      tier: 'confident',
      correctAnswer: 2,
      xpValue: 15,
      misconceptionId: 'fmd-mis-flip-wrong',
      hint: 'Keep 5/6, flip 5/12 to 12/5, change to multiply: 5/6 x 12/5 = 60/30 = 2.',
    },
    // Confident 3: spot-misconception on common-denominator-for-multiplication
    {
      id: 'fmd-q11',
      type: 'spot-misconception',
      stem: 'Maya wants to work out 2/3 x 4/5. She writes "first find a common denominator of 15, so 2/3 becomes 10/15 and 4/5 becomes 12/15, then multiply: 10/15 x 12/15 = 120/15".',
      tier: 'confident',
      statements: [
        {
          text: 'Maya is right. You always need a common denominator before multiplying fractions.',
          isMisconception: true,
        },
        {
          text: 'In fact common denominators are needed for adding or subtracting fractions, not for multiplying. To multiply, just multiply the tops and the bottoms: 2/3 x 4/5 = 8/15.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fmd-mis-common-denominator',
    },
    // Confident 4: missing-step KFC
    {
      id: 'fmd-q12',
      type: 'missing-step',
      stem: 'Fill in the missing step. Liam works out 4/5 / 2/3.',
      tier: 'confident',
      steps: [
        'Keep the first fraction: 4/5.',
        'Flip the second fraction to its reciprocal: 2/3 becomes 3/2.',
        null,
        'Multiply the tops and the bottoms: (4 x 3) / (5 x 2) = 12/10. Simplify: 12/10 = 6/5.',
      ],
      missingStepIndex: 2,
      correctStep: 'Change the divide to a multiply: 4/5 x 3/2.',
      xpValue: 20,
      misconceptionId: 'fmd-mis-flip-wrong',
    },
    // Confident 5: fraction of an amount, money context
    {
      id: 'fmd-q13',
      type: 'multiple-choice',
      stem: 'A Tunbridge Wells school spends 2/5 of a £45 budget on art supplies. How much is spent on art supplies?',
      tier: 'confident',
      options: ['£18', '£15', '£12', '£20'],
      correctIndex: 0,
      xpValue: 15,
      hint: '2/5 of £45 = (2 x 45) / 5 = 90 / 5 = 18. The school spends £18.',
    },
    // Confident 6: drag-order fraction product sizes
    {
      id: 'fmd-q14',
      type: 'drag-order',
      stem: 'Drag these fraction products into order from smallest to largest.',
      tier: 'confident',
      items: ['1/4 x 1/2', '1/2 x 1/3', '2/3 x 3/4', '1/5 x 1/2'],
      correctOrder: [3, 0, 1, 2],
      xpValue: 20,
      hint: 'Work out each product: 1/4 x 1/2 = 1/8, 1/2 x 1/3 = 1/6, 2/3 x 3/4 = 6/12 = 1/2, 1/5 x 1/2 = 1/10. Order them by size.',
    },
    // Confident 7: dividing whole by fraction
    {
      id: 'fmd-q15',
      type: 'multiple-choice',
      stem: 'How many 1/3 metre lengths can be cut from a 5 metre roll of ribbon?',
      tier: 'confident',
      options: ['1 2/3', '5/3', '8', '15'],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'fmd-mis-divide-makes-smaller',
      hint: 'Set up: 5 / (1/3). KFC: 5 x 3/1 = 15. Dividing by a third multiplies by 3.',
    },
    // Confident 8: reciprocal of a whole number
    {
      id: 'fmd-q16',
      type: 'multiple-choice',
      stem: 'What is the reciprocal of 7?',
      tier: 'confident',
      options: ['7', '7/1', '1/7', '-7'],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'fmd-mis-reciprocal-of-whole',
      hint: 'Write 7 as 7/1. The reciprocal swaps top and bottom: 7/1 becomes 1/7.',
    },
    // Challenge 1: Bond-style multi-step word problem (baker's sugar)
    {
      id: 'fmd-q17',
      type: 'numeric-entry',
      stem: 'A Manchester baker uses 2/5 of a kilogram of sugar for each cake. He has a 3 kg bag of sugar in the cupboard. How many full cakes can he bake before he runs out?',
      tier: 'challenge',
      correctAnswer: 7,
      unit: 'cakes',
      xpValue: 25,
      hint: 'Divide 3 by 2/5. KFC: 3 x 5/2 = 15/2 = 7.5. He can bake 7 full cakes, with 1/5 kg of sugar left over.',
    },
    // Challenge 2: chain calculation, multiply then divide
    {
      id: 'fmd-q18',
      type: 'multiple-choice',
      stem: 'A Dover florist uses 3/4 of a metre of ribbon for each bouquet. She begins with a 12 metre roll and uses 8 bouquets worth before her shift ends. What fraction of the original roll is left at the end of the shift?',
      tier: 'challenge',
      options: ['1/4', '1/2', '1/3', '2/3'],
      correctIndex: 1,
      xpValue: 25,
      hint: 'She used 8 x 3/4 = 24/4 = 6 metres. So 6 m of 12 m is left, which is 6/12 = 1/2 of the roll.',
    },
    // Challenge 3: fraction of fraction word problem
    {
      id: 'fmd-q19',
      type: 'numeric-entry',
      stem: 'A Sevenoaks school has 360 pupils. 5/8 of them stay for after-school clubs on Tuesday. Of those, 2/3 attend a sports club. How many pupils attend a sports club on Tuesday?',
      tier: 'challenge',
      correctAnswer: 150,
      unit: 'pupils',
      xpValue: 25,
      hint: 'First find 5/8 of 360 = 225 pupils stay. Then find 2/3 of 225 = 150 pupils. Alternatively multiply the fractions first: 5/8 x 2/3 = 10/24 = 5/12 of 360 = 150.',
    },
    // Challenge 4: mixed-number divided by fraction in context
    {
      id: 'fmd-q20',
      type: 'multiple-choice',
      stem: 'A Lake District youth hostel orders 2 1/4 kilograms of butter for the kitchen. The chef uses 3/8 of a kilogram each day. The kitchen runs out part-way through a day. After how many full days of cooking does the chef need to reorder?',
      tier: 'challenge',
      options: ['4', '5', '7', '6'],
      correctIndex: 3,
      xpValue: 25,
      hint: '2 1/4 kg = 9/4 kg. Divide: 9/4 / 3/8 = 9/4 x 8/3 = 72/12 = 6. So 6 full days of cooking before reordering on day 7.',
    },
    // Challenge 5: leftover calculation (word problem)
    {
      id: 'fmd-q21',
      type: 'numeric-entry',
      stem: 'A baker has 4 kilograms of flour. Each batch of scones uses 3/4 of a kilogram of flour. How many full batches can the baker make, and how many grams of flour are left over after the final full batch? Enter just the grams left over.',
      tier: 'challenge',
      correctAnswer: 250,
      unit: 'grams',
      xpValue: 25,
      hint: '4 / (3/4) = 4 x 4/3 = 16/3 = 5 with a remainder of 1/3. So 5 full batches use 5 x 3/4 = 15/4 kg = 3.75 kg, leaving 4 - 3.75 = 0.25 kg = 250 g.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a fraction-multiplication question where pupils added the numerators and added the denominators instead of multiplying.
    {
      id: 'fmd-mis-add-tops-bottoms',
      description:
        'I multiply fractions by adding the tops and adding the bottoms, so 1/2 x 1/3 becomes 2/5.',
      triggerAnswer: 'add-tops-bottoms',
      correction:
        'Actually you multiply the tops together and multiply the bottoms together. Adding is the rule for fractions with the same denominator, not for multiplying.',
      reExplanation:
        'For 1/2 x 1/3, multiply the numerators: 1 x 1 = 1. Multiply the denominators: 2 x 3 = 6. The answer is 1/6, not 2/5. The area model confirms it: a unit square split into halves down and thirds across has 6 cells, and 1/2 of 1/3 covers just 1 of them.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Multiplying and Dividing Fractions" page, "Common mistake" callout warning that you do not need a common denominator to multiply.
    {
      id: 'fmd-mis-common-denominator',
      description:
        'I need to find a common denominator before I can multiply two fractions, the same way I do when adding or subtracting them.',
      triggerAnswer: 'common-denominator',
      correction:
        'In fact common denominators are only needed for adding or subtracting fractions. To multiply, just multiply the tops and the bottoms.',
      reExplanation:
        'For 2/3 x 4/5, multiply directly: (2 x 4) / (3 x 5) = 8/15. Finding a common denominator of 15 first would force 2/3 to 10/15 and 4/5 to 12/15, then multiplying 10 x 12 over 15 x 15 gives 120/225, which simplifies back to 8/15 anyway, with three extra steps and a higher risk of arithmetic slips.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 5 "Fractions" by Hart, on pupils believing division always makes the answer smaller, even when dividing by a value less than 1.
    {
      id: 'fmd-mis-divide-makes-smaller',
      description:
        'I think dividing always makes the answer smaller, so 1/2 / 1/4 must be less than 1/2.',
      triggerAnswer: 'divide-makes-smaller',
      correction:
        'Actually dividing by a fraction less than 1 makes the answer larger. 1/2 / 1/4 asks how many quarters fit in a half, which is 2.',
      reExplanation:
        '1/2 divided by 1/4 means "how many quarters fit inside one half". A half-bar holds exactly two quarter-bars, so the answer is 2, which is larger than 1/2. Keep, Flip, Change makes the rule mechanical: 1/2 x 4/1 = 4/2 = 2. Whenever the divisor is less than 1, the quotient grows.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 1F (Foundation, Non-calculator), commentary on a fraction-division question where pupils flipped the first fraction instead of the second when applying Keep, Flip, Change.
    {
      id: 'fmd-mis-flip-wrong',
      description:
        'When I divide fractions I use Keep, Flip, Change but I flip the first fraction instead of the second, so 4/5 / 2/3 becomes 5/4 x 2/3.',
      triggerAnswer: 'flip-wrong',
      correction:
        'In fact only the divisor (the second fraction) is flipped. The first fraction (the dividend) stays the same.',
      reExplanation:
        'For 4/5 / 2/3, keep 4/5 the same, flip 2/3 to 3/2, change the divide to a multiply: 4/5 x 3/2 = 12/10 = 6/5. Flipping 4/5 to 5/4 instead would give 5/4 x 2/3 = 10/12 = 5/6, a different (and incorrect) answer. The order matters: dividing by 2/3 is the same as multiplying by its reciprocal, 3/2.',
    },
    // Source: NCETM Secondary Magazine, Issue 124, "From the Library" article on reciprocals citing pupil work where the reciprocal of a whole number was written as the same whole number.
    {
      id: 'fmd-mis-reciprocal-of-whole',
      description:
        'I think the reciprocal of a whole number is the same whole number, so the reciprocal of 7 is 7.',
      triggerAnswer: 'reciprocal-of-whole',
      correction:
        'Actually the reciprocal of a whole number n is the unit fraction 1/n. Write the whole number as a fraction first.',
      reExplanation:
        'Any whole number n can be written as n/1, so its reciprocal swaps the top and bottom to give 1/n. The reciprocal of 7 is 1/7. Check by multiplying a number by its reciprocal: 7 x 1/7 = 7/7 = 1, which is the defining property of a reciprocal pair.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 01 (Foundation, Non-calculator), commentary on a fraction-multiplication question where pupils multiplied only the numerators (or only the denominators) and left the other half of the fraction unchanged.
    {
      id: 'fmd-mis-half-multiply',
      description:
        'I multiply fractions by multiplying the tops but I leave the bottom of one fraction unchanged, so 2/3 x 4/5 becomes 8/3 or 2/15.',
      triggerAnswer: 'half-multiply',
      correction:
        'In fact both the tops and the bottoms must be multiplied together. Skipping one side leaves the answer in the wrong place-value column.',
      reExplanation:
        'For 2/3 x 4/5, the correct method is (2 x 4) / (3 x 5) = 8/15. Multiplying tops only and leaving the first denominator gives 8/3 (about 2.67), which is bigger than either starting fraction. Multiplying bottoms only and leaving the first numerator gives 2/15, which is too small. The right answer 8/15 lies between the two starting fractions because both factors are less than 1.',
    },
    // Authored, no external source: classroom-observed slip when pupils encounter the phrase "of" in fraction-of-amount problems, treating "1/3 of 24" as a subtraction (24 - 3 = 21) or a division by the whole number alone (24 / 3 ignoring the numerator).
    {
      id: 'fmd-mis-fraction-of-as-subtract',
      description:
        'When a question says "1/3 of 24", I subtract or divide using the bottom number alone, instead of multiplying the fraction by the amount.',
      triggerAnswer: 'fraction-of-as-subtract',
      correction:
        'Actually "of" means multiply when working with fractions of an amount. Divide by the bottom and multiply by the top.',
      reExplanation:
        'For 1/3 of 24, write it as 1/3 x 24 = 24/3 = 8. For 3/4 of 24, divide first: 24 / 4 = 6 (one quarter), then multiply: 3 x 6 = 18. Subtracting 24 - 3 = 21 or dividing 24 / 3 = 8 (which only works because the numerator was 1) misses the structure for any fraction with a numerator other than 1.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const fractionsMultiplyDivideZoneNodes = [fractionsMultiplyDivide]
