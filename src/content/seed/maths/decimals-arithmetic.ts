import type { SkillNode } from '@/types/content'

export const decimalsArithmetic: SkillNode = {
  id: 'maths-decimals-arithmetic',
  title: 'Decimal Arithmetic: Four Operations',
  description:
    'Add, subtract, multiply and divide decimals with confidence. Line up the decimal points for column addition and subtraction, pad with trailing zeros where the digit counts differ, count decimal places to place the point in a product, and keep the decimal point above its column in short division.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-decimals',
  zoneName: 'Decimals',
  tier: 'confident',
  prerequisites: ['maths-decimals-place-value'],
  curriculum: {
    ks3Objective:
      'Use the four operations, including formal written methods, applied to integers, decimals, proper and improper fractions, and mixed numbers, all both positive and negative.',
    awardingBodies: {
      aqa: 'N2 Apply the four operations, including formal written methods, to integers, decimals and simple fractions (GCSE Mathematics 8300)',
      edexcel: 'N2 Apply the four operations, including formal written methods, to integers, decimals and simple fractions (GCSE Mathematics 1MA1)',
      ocr: '2.02a Calculate exactly with decimals (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'da-scene-column-align',
      title: 'Line Up the Decimal Points',
      type: 'simulation',
      instructions:
        'See how 12.4 and 3.65 are added correctly when the decimal points line up. The tenths digit of 12.4 sits in the same column as the tenths digit of 3.65. Padding 12.4 with a trailing zero gives 12.40, so each column has a digit. Column addition then reads 5 in the hundredths, 0 + 4 = 4 in the tenths, and 2 + 3 = 5 in the units, plus 1 in the tens, giving 16.05. Right-aligning the numbers like whole-number addition would push the 65 into the tenths and hundredths of 12.4 and give the wrong answer.',
      data: {
        focusCalculation: '12.4 + 3.65 = 16.05',
        correctAlignment: [
          { label: 'tens', a: '1', b: '', sum: '1' },
          { label: 'units', a: '2', b: '3', sum: '5' },
          { label: 'point', a: '.', b: '.', sum: '.' },
          { label: 'tenths', a: '4', b: '6', sum: '0', carry: 1 },
          { label: 'hundredths', a: '0', b: '5', sum: '5' },
        ],
        padding: '12.4 becomes 12.40 so every column is filled.',
        wrongAnswer: '15.69 (right-aligned, pushes 65 into the wrong columns)',
        rightAnswer: '16.05',
        worked: 'Padding zero, then add column by column from the right.',
      },
    },
    {
      id: 'da-scene-grid-multiply',
      title: 'Decimal Multiplication on a 10 by 10 Grid',
      type: 'simulation',
      instructions:
        'See how 0.3 multiplied by 0.4 covers 12 squares of a 10 by 10 grid. 0.3 is 3 columns of the grid, 0.4 is 4 rows. The overlap is 12 small squares out of 100, which is 0.12. The number of decimal places in the answer equals the total number of decimal places in the two factors: 1 + 1 = 2 decimal places. The rule generalises: 0.06 multiplied by 0.5 has 2 + 1 = 3 decimal places after the digits 6 and 5 are multiplied to give 30.',
      data: {
        gridSize: 10,
        factorA: 0.3,
        factorB: 0.4,
        overlapCells: 12,
        totalCells: 100,
        answer: 0.12,
        rule: 'Count the total decimal places in the two factors; that is the decimal places in the product.',
        sampleProblems: [
          { calc: '0.3 x 0.4', dp: '1 + 1 = 2', product: 0.12 },
          { calc: '0.06 x 0.5', dp: '2 + 1 = 3', product: 0.03 },
          { calc: '1.2 x 0.5', dp: '1 + 1 = 2', product: 0.6 },
        ],
      },
    },
    {
      id: 'da-scene-short-divide',
      title: 'Short Division Keeps the Decimal Point in Place',
      type: 'simulation',
      instructions:
        'See how 12.6 divided by 6 is worked out by short division. The decimal point in the quotient sits directly above the decimal point in the dividend, so 12.6 / 6 lines up as 2.1. When the dividend will not divide cleanly, add a trailing zero: 9.3 / 6 becomes 9.30 / 6 = 1.55. The decimal point stays in its column throughout.',
      data: {
        examples: [
          { calc: '12.6 / 6', steps: ['12 / 6 = 2', '6 / 6 = 1, after the point'], quotient: 2.1 },
          { calc: '9.3 / 6', steps: ['9 / 6 = 1 r 3', '33 / 6 = 5 r 3', 'pad zero: 30 / 6 = 5'], quotient: 1.55 },
          { calc: '1.2 / 5', steps: ['1 / 5 = 0 r 1', '12 / 5 = 2 r 2', '20 / 5 = 4'], quotient: 0.24 },
        ],
        rule: 'Place the decimal point in the quotient directly above the decimal point in the dividend, then divide as normal.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'da-worked-1',
      title: 'Add 12.4 and 3.65 using column addition',
      steps: [
        {
          explanation:
            'Write the two numbers in a column with the decimal points lined up.',
          maths: '12.4\n+ 3.65',
        },
        {
          explanation:
            'Pad 12.4 with a trailing zero so each column has a digit. Trailing zeros after the decimal point do not change the value.',
          maths: '12.40\n+ 3.65',
        },
        {
          explanation:
            'Add the hundredths column: 0 + 5 = 5.',
          maths: 'hundredths: 5',
        },
        {
          explanation: 'Add the tenths column: 4 + 6 = 10, write 0 and carry 1.',
          maths: 'tenths: 0, carry 1',
        },
        {
          explanation: 'Add the units column with the carry: 2 + 3 + 1 = 6.',
          maths: 'units: 6',
        },
        {
          explanation:
            'Bring down the tens digit and place the decimal point in line with the column.',
          maths: '12.4 + 3.65 = 16.05',
        },
      ],
    },
    {
      id: 'da-worked-2',
      title: 'Multiply 0.6 by 0.4 (with a missing step the engine reveals later)',
      steps: [
        {
          explanation:
            'Ignore the decimal points for a moment and multiply the digits as whole numbers.',
          maths: '6 x 4 = 24',
        },
        {
          explanation:
            'Count the decimal places in each factor.',
          maths: '0.6 has 1 decimal place, 0.4 has 1 decimal place',
        },
        {
          explanation:
            'Add the decimal place counts: 1 + 1 = 2 decimal places in the answer.',
          maths: 'total decimal places: 2',
        },
        {
          explanation:
            'Place the decimal point so that there are 2 digits after it. 24 becomes 0.24.',
          maths: '0.6 x 0.4 = 0.24',
        },
        {
          explanation:
            'Check with the grid model: 0.6 of a column by 0.4 of a row covers 24 squares out of 100, which is 0.24.',
          maths: '24 / 100 = 0.24',
        },
      ],
    },
  ],
  questions: [
    // Core 1: straightforward addition with column alignment
    {
      id: 'da-q1',
      type: 'multiple-choice',
      stem: 'What is 4.7 + 2.5?',
      tier: 'core',
      options: ['6.12', '7.5', '7.12', '7.2'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Line up the decimal points. Add the tenths first (7 + 5 = 12, carry 1), then the units (4 + 2 + 1 = 7).',
    },
    // Core 2:addition with different decimal place counts
    {
      id: 'da-q2',
      type: 'multiple-choice',
      stem: 'What is 12.4 + 3.65?',
      tier: 'core',
      options: ['16.05', '15.69', '15.95', '16.69'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'da-mis-align-right',
      hint: 'Pad 12.4 with a trailing zero so it reads 12.40. Then add column by column.',
    },
    // Core 3:subtraction with a column zero (forces borrow)
    {
      id: 'da-q3',
      type: 'numeric-entry',
      stem: 'Calculate 5.0 minus 2.4.',
      tier: 'core',
      correctAnswer: 2.6,
      xpValue: 10,
      misconceptionId: 'da-mis-skip-borrow',
      hint: 'Borrow from the units column: 5.0 reads as 4 units and 10 tenths.',
    },
    // Core 4:multiplying a decimal by a whole
    {
      id: 'da-q4',
      type: 'multiple-choice',
      stem: 'What is 0.3 x 4?',
      tier: 'core',
      options: ['0.12', '0.7', '1.2', '12'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'da-mis-place-shift',
      hint: '3 x 4 = 12. The factor 0.3 has one decimal place, so the answer has one decimal place.',
    },
    // Core 5: multiplying decimal by decimal
    {
      id: 'da-q5',
      type: 'multiple-choice',
      stem: 'What is 0.5 x 0.2?',
      tier: 'core',
      options: ['0.1', '0.7', '1.0', '0.01'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'da-mis-multiply-makes-bigger',
      hint: '5 x 2 = 10. Each factor has one decimal place, so the answer has two: 0.10, which simplifies to 0.1.',
    },
    // Core 6:dividing a decimal by a whole
    {
      id: 'da-q6',
      type: 'numeric-entry',
      stem: 'What is 12.6 / 6?',
      tier: 'core',
      correctAnswer: 2.1,
      xpValue: 10,
      hint: 'Set out short division. The decimal point in the answer sits directly above the decimal point in 12.6.',
    },
    // Core 7:subtraction with different decimal place counts
    {
      id: 'da-q7',
      type: 'multiple-choice',
      stem: 'What is 8.7 minus 2.45?',
      tier: 'core',
      options: ['5.25', '6.35', '6.65', '6.25'],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'da-mis-align-right',
      hint: 'Pad 8.7 to 8.70 so each column has a digit. Borrow if you need to.',
    },
    // Core 8:spot-misconception: align-right slip
    {
      id: 'da-q8',
      type: 'spot-misconception',
      stem: 'Maya writes 4.5 + 0.36 = 0.81. She lined up the right edges of the digits and added them like whole numbers.',
      tier: 'core',
      statements: [
        {
          text: 'Maya is right. When the two numbers have different numbers of digits after the point, you line up the right edges.',
          isMisconception: true,
        },
        {
          text: 'In fact you line up the decimal points, not the right edges. 4.5 becomes 4.50 and 4.50 + 0.36 = 4.86. Lining up the right edges gives the digits the wrong place value.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'da-mis-align-right',
    },
    // Confident 1:decimal by decimal place-shift question
    {
      id: 'da-q9',
      type: 'multiple-choice',
      stem: 'What is 0.06 x 0.5?',
      tier: 'confident',
      options: ['0.003', '0.03', '0.3', '3'],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'da-mis-place-shift',
      hint: '6 x 5 = 30. 0.06 has 2 decimal places, 0.5 has 1 decimal place; the answer has 3 decimal places: 0.030 = 0.03.',
    },
    // Confident 2:ordering decimals (digit-count-bigger misconception)
    {
      id: 'da-q10',
      type: 'drag-order',
      stem: 'Drag these decimals into order from smallest to largest: 0.43, 0.5, 0.298, 0.305.',
      tier: 'confident',
      items: ['0.43', '0.5', '0.298', '0.305'],
      correctOrder: [2, 3, 0, 1],
      xpValue: 20,
      misconceptionId: 'da-mis-digit-count-bigger',
      hint: 'Pad each decimal to the same number of digits after the point: 0.430, 0.500, 0.298, 0.305. Then compare digit by digit.',
    },
    // Confident 3:division with leading-zero quotient
    {
      id: 'da-q11',
      type: 'numeric-entry',
      stem: 'Work out 1.2 / 5.',
      tier: 'confident',
      correctAnswer: 0.24,
      xpValue: 15,
      misconceptionId: 'da-mis-leading-zero-quotient',
      hint: '1 / 5 is 0 remainder 1. Carry the 1 to the tenths: 12 / 5 = 2 remainder 2. Pad a zero and continue: 20 / 5 = 4. The quotient is 0.24.',
    },
    // Confident 4:spot-misconception: digit count means bigger
    {
      id: 'da-q12',
      type: 'spot-misconception',
      stem: 'Liam compares 0.5 and 0.43 and writes "0.43 is bigger because it has more digits after the point".',
      tier: 'confident',
      statements: [
        {
          text: 'Liam is right. A decimal with more digits after the point is always larger.',
          isMisconception: true,
        },
        {
          text: 'In fact 0.5 is larger than 0.43. Pad to the same length: 0.50 versus 0.43. The tenths digit decides because 5 tenths is more than 4 tenths.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'da-mis-digit-count-bigger',
    },
    // Confident 5:multi-decimal addition
    {
      id: 'da-q13',
      type: 'multiple-choice',
      stem: 'A Tunbridge Wells corner shop sells three items priced at £2.50, £3.07 and £0.40. What is the total?',
      tier: 'confident',
      options: ['£5.97', '£5.55', '£6.17', '£5.27'],
      correctIndex: 0,
      xpValue: 15,
      hint: 'Pad each price to two decimal places: 2.50 + 3.07 + 0.40. Add the hundredths, then the tenths, then the pounds.',
    },
    // Confident 6:missing-step worked example
    {
      id: 'da-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step. The shop multiplies 1.2 m of ribbon by £0.40 per metre to find the cost.',
      tier: 'confident',
      steps: [
        'Multiply the digits as whole numbers: 12 x 4 = 48.',
        'Count the decimal places in each factor: 1.2 has 1 dp, 0.40 has 2 dp.',
        null,
        'Place the decimal point so the answer has 3 digits after it: 0.048, then express to a sensible number of decimal places. The cost is £0.48.',
      ],
      missingStepIndex: 2,
      correctStep: 'Add the decimal place counts: 1 + 2 = 3 decimal places.',
      xpValue: 20,
      hint: 'The middle step combines the two decimal place counts into a single total.',
    },
    // Confident 7:division by a decimal (equivalent calculation method)
    {
      id: 'da-q15',
      type: 'multiple-choice',
      stem: 'A 1.5 m plank is cut into pieces 0.3 m long. How many pieces does the carpenter get?',
      tier: 'confident',
      options: ['0.5 pieces', '4.5 pieces', '15 pieces', '5 pieces'],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'da-mis-divide-makes-smaller',
      hint: 'Multiply both numbers by 10 to clear the decimal: 1.5 / 0.3 becomes 15 / 3 = 5. Dividing by a number smaller than 1 makes the answer larger, not smaller.',
    },
    // Confident 8:petrol consumption (multiply decimal by whole)
    {
      id: 'da-q16',
      type: 'numeric-entry',
      stem: 'A car uses 0.06 litres of petrol per minute when idling. How much petrol does it use idling for 15 minutes?',
      tier: 'confident',
      correctAnswer: 0.9,
      unit: 'litres',
      xpValue: 15,
      hint: '0.06 x 15: think of 6 x 15 = 90, then 0.06 has 2 decimal places so the answer has 2 decimal places: 0.90 = 0.9.',
    },
    // Challenge 1:Bond-style multi-step word problem
    {
      id: 'da-q17',
      type: 'numeric-entry',
      stem: 'Aisha pays £14.40 for 12 metres of ribbon at one shop. Liam buys ribbon at a different shop, where 8 metres costs £8.00. How much would Aisha have saved on her 12 metres if she had bought from Liam\'s shop?',
      tier: 'challenge',
      correctAnswer: 2.4,
      unit: 'pounds',
      xpValue: 25,
      hint: 'Find the price per metre at each shop, then multiply Liam\'s price by 12 and compare with what Aisha paid.',
    },
    // Challenge 2:multi-step chain with division and rounding awareness
    {
      id: 'da-q18',
      type: 'multiple-choice',
      stem: 'A baker mixes 2.5 kg of flour and 0.75 kg of sugar into a single batch of biscuit dough. She portions it into balls of 0.125 kg each. How many full biscuit balls does she make?',
      tier: 'challenge',
      options: ['20', '24', '26', '28'],
      correctIndex: 2,
      xpValue: 25,
      hint: 'First add 2.5 + 0.75 = 3.25 kg of dough. Then divide by 0.125. Multiply both sides by 1000 to clear decimals: 3250 / 125 = 26.',
    },
    // Challenge 3:multi-step Bond style with multi-priced multiples
    {
      id: 'da-q19',
      type: 'numeric-entry',
      stem: 'A 6-pack of soft drinks costs £4.74. A single can of the same drink costs £0.85. How many pence does buying the 6-pack save compared with buying 6 single cans?',
      tier: 'challenge',
      correctAnswer: 36,
      unit: 'pence',
      xpValue: 25,
      hint: 'Find the cost of 6 single cans first (6 x 0.85), then subtract the 6-pack price. Convert pounds to pence at the end.',
    },
    // Challenge 4:multi-step decimal division
    {
      id: 'da-q20',
      type: 'multiple-choice',
      stem: 'Maya buys 0.6 kg of loose almonds for a Sunday roast at £1.25 per 100 g. She pays with a £10 note. How much change does she get?',
      tier: 'challenge',
      options: ['£0.75', '£2.50', '£3.75', '£8.75'],
      correctIndex: 1,
      xpValue: 25,
      hint: '0.6 kg is 600 g, which is 6 lots of 100 g. So the almonds cost 6 x £1.25 = £7.50. Change = £10 - £7.50.',
    },
    // Challenge 5:chained decimal multiplication
    {
      id: 'da-q21',
      type: 'numeric-entry',
      stem: 'A scale model uses 1 cm to represent 2.5 m on the real building. A doorway on the model is 0.8 cm tall. How tall is the real doorway, in metres?',
      tier: 'challenge',
      correctAnswer: 2,
      unit: 'metres',
      xpValue: 25,
      hint: '0.8 cm on the model represents 0.8 x 2.5 m in real life. 8 x 25 = 200, and the two factors have 1 + 1 = 2 decimal places, so 0.8 x 2.5 = 2.00 = 2 m.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a decimal-addition question where pupils right-aligned the digits instead of the decimal points, producing answers more than ten times too small or too large.
    {
      id: 'da-mis-align-right',
      description:
        'I line decimals up by the right edge of the digits when I add or subtract, the same way I would line up whole numbers.',
      triggerAnswer: 'align-right',
      correction:
        'Actually decimals are lined up by the decimal point, not by the right edge. The columns must carry the same place value.',
      reExplanation:
        'For 4.5 + 0.36, pad 4.5 to 4.50 so each column has a digit. Now 4.50 + 0.36 lines up as tens.tenths.hundredths and adds column by column to 4.86. Lining up the right edges would place 36 in the tenths and hundredths of 4.5, which gives an answer thousands of times too small.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Decimals" page, "Common mistake" callout warning that more digits after the point does not mean a larger decimal.
    {
      id: 'da-mis-digit-count-bigger',
      description:
        'I think a decimal with more digits after the point is always bigger, so 0.298 must be larger than 0.43.',
      triggerAnswer: 'digit-count-bigger',
      correction:
        'In fact you compare decimals column by column starting from the tenths. The number of digits does not decide.',
      reExplanation:
        'Pad both numbers to the same length: 0.430 versus 0.298. The tenths digit decides because 4 tenths is more than 2 tenths, so 0.43 is larger. Length only matters if the leading digits are equal. 0.298 has more digits but a smaller tenths digit, so it is smaller.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 1F (Foundation, Non-calculator), commentary on a 0.3 x 0.4 question where pupils answered 1.2 or 12 by miscounting the decimal places in the product.
    {
      id: 'da-mis-place-shift',
      description:
        'When I multiply decimals I work out the digits but put the decimal point in the wrong place, so 0.3 x 0.4 becomes 1.2 or 12 instead of 0.12.',
      triggerAnswer: 'place-shift',
      correction:
        'Actually the answer has as many decimal places as the two factors together. 0.3 has 1, 0.4 has 1, so the answer has 1 + 1 = 2 decimal places.',
      reExplanation:
        'For 0.3 x 0.4, ignore the decimal points first: 3 x 4 = 12. Then count the decimal places in the question: 1 + 1 = 2. The answer needs 2 digits after the point, so 12 becomes 0.12. Check with the 10 by 10 grid: 0.3 of a column by 0.4 of a row covers 12 small squares out of 100, which is 0.12.',
    },
    // Source: NCETM Secondary Magazine, Issue 122, article on persistent decimal misconceptions citing Brown (CSMS) on pupils believing multiplication always makes a number bigger and division always makes it smaller.
    {
      id: 'da-mis-multiply-makes-bigger',
      description:
        'I think multiplying always makes the answer bigger, so 0.5 x 0.4 must be more than 0.5.',
      triggerAnswer: 'multiply-makes-bigger',
      correction:
        'In fact multiplying by a number smaller than 1 makes the answer smaller. Only multiplying by a number bigger than 1 makes it grow.',
      reExplanation:
        '0.5 x 0.4 means half of 0.4, or 4 tenths shared between 2, which is 0.2. The grid shows it: 0.5 of a column by 0.4 of a row covers 20 squares out of 100, which is 0.2. The answer is smaller than both 0.5 and 0.4. Multiplying by 1 leaves a number unchanged, multiplying by less than 1 shrinks it, and multiplying by more than 1 grows it.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 2F (Foundation, Calculator allowed but pupils still showed working), commentary on a 1.2 / 5 short-division question where pupils answered 24 or 2.4 by forgetting the leading zero in the quotient.
    {
      id: 'da-mis-leading-zero-quotient',
      description:
        'When the answer to a division is less than 1, I write only the digits and miss out the leading zero, so 1.2 / 5 becomes 24 or 2.4 instead of 0.24.',
      triggerAnswer: 'leading-zero-quotient',
      correction:
        'Actually you must write the leading zero so the decimal point sits in the right place. 1.2 / 5 is less than 1, so the answer begins with 0.',
      reExplanation:
        'For 1.2 / 5, the first step is 1 / 5 = 0 remainder 1, so the units digit of the answer is 0. The decimal point goes next, then carry the 1 to make 12 tenths: 12 / 5 = 2 remainder 2. Pad a hundredths zero: 20 / 5 = 4. Putting it together gives 0.24, not 24 or 2.4.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 01 (Foundation, Non-calculator), commentary on a 5.0 minus 2.4 question where pupils answered 3.4 by failing to borrow across the decimal point.
    {
      id: 'da-mis-skip-borrow',
      description:
        'When I subtract a decimal from a number ending in zero, I forget to borrow because there is nothing to take from in the tenths column.',
      triggerAnswer: 'skip-borrow',
      correction:
        'In fact 5.0 has zero tenths but four units and ten tenths after borrowing. The decimal point does not stop the borrow rule from working.',
      reExplanation:
        'For 5.0 - 2.4, write 5.0 as "4 units and 10 tenths". The tenths column then reads 10 - 4 = 6 tenths. The units column reads 4 - 2 = 2 units. The answer is 2.6. A common slip is to write 0 - 4 in the tenths and skip the borrow, then read off 3.4, which is one whole too small.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 4 "Decimals" by Brown, on pupils believing division always makes the answer smaller, even when dividing by a value less than 1.
    {
      id: 'da-mis-divide-makes-smaller',
      description:
        'I think dividing always makes the answer smaller, so 6 / 0.5 must be less than 6.',
      triggerAnswer: 'divide-makes-smaller',
      correction:
        'Actually dividing by a number smaller than 1 makes the answer bigger. Only dividing by a number bigger than 1 shrinks it.',
      reExplanation:
        '6 / 0.5 asks "how many halves are in 6". There are 12 halves in 6, so 6 / 0.5 = 12. The answer is double 6 because dividing by half is the same as multiplying by 2. Dividing by 0.1 multiplies by 10, dividing by 0.01 multiplies by 100. The smaller the divisor, the bigger the quotient.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const decimalsArithmeticZoneNodes = [decimalsArithmetic]
