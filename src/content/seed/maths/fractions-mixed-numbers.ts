import type { SkillNode } from '@/types/content'

export const fractionsMixedNumbers: SkillNode = {
  id: 'maths-fractions-mixed-numbers',
  title: 'Mixed Numbers and Improper Fractions',
  description:
    'Convert between mixed numbers and improper fractions, then apply the four operations to mixed numbers. Add and subtract by lining up the whole and fractional parts and borrowing across the whole when the fractions need it. Multiply and divide by first converting every mixed number to an improper fraction, then using the rules from multiplying and dividing fractions.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-fractions',
  zoneName: 'Fractions',
  tier: 'challenge',
  prerequisites: ['maths-fractions-multiply-divide', 'maths-fractions-add-subtract'],
  curriculum: {
    ks3Objective:
      'Use the four operations, including formal written methods, applied to integers, decimals, proper and improper fractions, and mixed numbers, all both positive and negative.',
    awardingBodies: {
      aqa: 'N8 Calculate exactly with fractions including mixed numbers (GCSE Mathematics 8300)',
      edexcel: 'N8 Calculate exactly with fractions including mixed numbers (GCSE Mathematics 1MA1)',
      ocr: '2.01c Apply the four operations to mixed numbers (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'fmn-scene-number-line',
      title: '2 3/4 on a Number Line',
      type: 'number-line',
      instructions:
        'See where 2 3/4 sits on the number line. It is two whole units past zero, plus three more quarter ticks. There are four quarters in each whole, so 2 3/4 lies exactly three-quarters of the way between 2 and 3. The improper fraction form counts every quarter tick from zero: 2 wholes give 8 quarters, plus 3 more, equals 11 quarters. So 2 3/4 = 11/4.',
      data: {
        min: 0,
        max: 4,
        majorTicks: [0, 1, 2, 3, 4],
        minorDivisions: 4,
        highlights: [
          { value: 2.75, label: '2 3/4 = 11/4', colour: 'amber' },
          { value: 2, label: '2 wholes = 8 quarters', colour: 'blue' },
        ],
        rule: 'Total quarters = whole-number x 4 + fractional-number numerator. So 2 3/4 = (2 x 4 + 3) / 4 = 11/4.',
      },
    },
    {
      id: 'fmn-scene-bar-improper',
      title: 'Bar Model: 11 Quarters Make 2 3/4',
      type: 'fraction-wall',
      instructions:
        'Click each quarter-bar to highlight it. The wall holds 11 equal quarters in three rows: a full first row of 4, a full second row of 4, and a third row of 3. The first eight quarters make 2 wholes; the last 3 quarters make 3/4. Together they give 2 3/4, which is the same value as 11/4 written as an improper fraction.',
      data: {
        wholeLabel: '11 quarters = 2 3/4 = 11/4',
        rowSize: 4,
        parts: [
          { id: 'fmn-q1', share: 'whole-1', value: 0.25, colour: 'blue' },
          { id: 'fmn-q2', share: 'whole-1', value: 0.25, colour: 'blue' },
          { id: 'fmn-q3', share: 'whole-1', value: 0.25, colour: 'blue' },
          { id: 'fmn-q4', share: 'whole-1', value: 0.25, colour: 'blue' },
          { id: 'fmn-q5', share: 'whole-2', value: 0.25, colour: 'blue' },
          { id: 'fmn-q6', share: 'whole-2', value: 0.25, colour: 'blue' },
          { id: 'fmn-q7', share: 'whole-2', value: 0.25, colour: 'blue' },
          { id: 'fmn-q8', share: 'whole-2', value: 0.25, colour: 'blue' },
          { id: 'fmn-q9', share: 'fractional', value: 0.25, colour: 'amber' },
          { id: 'fmn-q10', share: 'fractional', value: 0.25, colour: 'amber' },
          { id: 'fmn-q11', share: 'fractional', value: 0.25, colour: 'amber' },
        ],
        wholeCount: 2,
        fractionalCount: 3,
        denominator: 4,
        improper: '11/4',
        mixed: '2 3/4',
      },
    },
    {
      id: 'fmn-scene-borrow-subtract',
      title: 'Borrowing Across a Whole: 4 1/4 minus 1 3/4',
      type: 'fraction-wall',
      instructions:
        'Click each part to follow the subtraction. 4 1/4 has 4 wholes and 1 quarter, but 3 quarters cannot come out of 1 quarter. Convert one whole into 4 quarters: now you have 3 wholes and 5 quarters. Subtract the wholes: 3 - 1 = 2 wholes. Subtract the quarters: 5 - 3 = 2 quarters = 1/2. The answer is 2 1/2.',
      data: {
        wholeLabel: '4 1/4 - 1 3/4 = 2 1/2',
        before: '4 wholes and 1 quarter',
        afterBorrow: '3 wholes and 5 quarters',
        subtractWholes: '3 - 1 = 2 wholes',
        subtractFractions: '5/4 - 3/4 = 2/4 = 1/2',
        result: '2 1/2',
        parts: [
          { id: 'fmn-b1', share: 'kept', value: 1, colour: 'blue' },
          { id: 'fmn-b2', share: 'kept', value: 1, colour: 'blue' },
          { id: 'fmn-b3', share: 'fractional', value: 0.5, colour: 'amber' },
        ],
        rule: 'When the fractional part of the second mixed number is bigger than the fractional part of the first, borrow one whole and convert it to a fraction with the same denominator.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'fmn-worked-1',
      title: 'Convert 2 3/4 to an improper fraction',
      steps: [
        {
          explanation:
            'Identify the whole-number part and the fractional part.',
          maths: 'whole: 2, fraction: 3/4',
        },
        {
          explanation:
            'Multiply the whole-number part by the denominator of the fraction.',
          maths: '2 x 4 = 8',
        },
        {
          explanation:
            'Add the numerator of the fraction to the product.',
          maths: '8 + 3 = 11',
        },
        {
          explanation:
            'Write the new total over the same denominator.',
          maths: '11/4',
        },
        {
          explanation: 'So 2 3/4 written as an improper fraction is 11/4.',
          maths: '2 3/4 = 11/4',
        },
      ],
    },
    {
      id: 'fmn-worked-2',
      title: 'Subtract 4 1/4 minus 1 3/4 with borrowing (missing step revealed by the engine)',
      steps: [
        {
          explanation:
            'Line up the whole-number parts and the fractional parts.',
          maths: '4 1/4 - 1 3/4',
        },
        {
          explanation:
            'Notice that 3/4 cannot be subtracted from 1/4 because the fractional part of the second number is larger.',
          maths: '1/4 < 3/4, so borrow is needed',
        },
        {
          explanation:
            'Borrow one whole from the 4 and convert it to 4/4. The first mixed number becomes 3 and 5/4.',
          maths: '4 1/4 = 3 + 4/4 + 1/4 = 3 5/4',
        },
        {
          explanation:
            'Subtract the whole-number parts.',
          maths: '3 - 1 = 2',
        },
        {
          explanation:
            'Subtract the fractional parts, both with denominator 4.',
          maths: '5/4 - 3/4 = 2/4',
        },
        {
          explanation:
            'Simplify the fractional part if possible.',
          maths: '2/4 = 1/2',
        },
        {
          explanation: 'So 4 1/4 - 1 3/4 = 2 1/2.',
          maths: '4 1/4 - 1 3/4 = 2 1/2',
        },
      ],
    },
  ],
  questions: [
    // Core 1: convert improper to mixed
    {
      id: 'fmn-q1',
      type: 'multiple-choice',
      stem: 'Which mixed number is equal to 7/2?',
      tier: 'core',
      options: ['7 1/2', '2 1/3', '3 1/7', '3 1/2'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Divide 7 by 2: 3 remainder 1. So 7/2 = 3 1/2.',
    },
    // Core 2: convert mixed to improper
    {
      id: 'fmn-q2',
      type: 'numeric-entry',
      stem: 'Convert 3 1/4 to an improper fraction. Enter the numerator.',
      tier: 'core',
      correctAnswer: 13,
      xpValue: 10,
      hint: 'Multiply the whole by the denominator, then add the numerator: 3 x 4 + 1 = 13. The improper fraction is 13/4.',
    },
    // Core 3: identify a mixed number from a bar model
    {
      id: 'fmn-q3',
      type: 'multiple-choice',
      stem: 'A bar model shows two full bars and three quarters of a third bar. Which mixed number does it represent?',
      tier: 'core',
      options: ['2 3/4', '3/4', '2 1/4', '3 3/4'],
      correctIndex: 0,
      xpValue: 10,
      hint: 'Count the full bars first (2), then the quarter sections of the partial bar (3 quarters).',
    },
    // Core 4: simple add without borrowing
    {
      id: 'fmn-q4',
      type: 'multiple-choice',
      stem: 'What is 1 1/2 + 1/2?',
      tier: 'core',
      options: ['1 1/2', '2 1/2', '2', '1'],
      correctIndex: 2,
      xpValue: 10,
      hint: '1/2 + 1/2 = 1, so the fractional parts combine to a whole: 1 + 1 = 2.',
    },
    // Core 5: improper-to-mixed (whole numerator)
    {
      id: 'fmn-q5',
      type: 'multiple-choice',
      stem: 'Which mixed number is equal to 11/3?',
      tier: 'core',
      options: ['3 1/3', '11/3', '4 1/3', '3 2/3'],
      correctIndex: 3,
      xpValue: 10,
      hint: '11 divided by 3 is 3 remainder 2. So 11/3 = 3 2/3.',
    },
    // Core 6: simple subtract without borrowing
    {
      id: 'fmn-q6',
      type: 'multiple-choice',
      stem: 'What is 3 3/4 - 1 1/4?',
      tier: 'core',
      options: ['2', '2 1/2', '1 1/2', '4 1/2'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Subtract the wholes: 3 - 1 = 2. Subtract the fractions: 3/4 - 1/4 = 2/4 = 1/2. So 2 1/2.',
    },
    // Core 7: 2 + 3/4 as mixed number recognition
    {
      id: 'fmn-q7',
      type: 'multiple-choice',
      stem: 'Which is the correct mixed-number form of 2 + 3/4?',
      tier: 'core',
      options: ['11/4', '2 3/4', '23/4', '5/4'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'A mixed number writes the whole next to the fraction with no operator between them: 2 3/4.',
    },
    // Core 8: spot-misconception on the "implicit multiplication" reading
    {
      id: 'fmn-q8',
      type: 'spot-misconception',
      stem: 'Aisha reads 2 1/3 and writes "this means 2 multiplied by 1/3, which is 2/3".',
      tier: 'core',
      statements: [
        {
          text: 'Aisha is right. The whole number and the fraction sitting next to each other means multiply, the way 3y means 3 times y.',
          isMisconception: true,
        },
        {
          text: 'In fact a mixed number reads as a sum: 2 1/3 means 2 + 1/3 = 7/3, not 2 x 1/3 = 2/3. The algebraic rule for letters next to numbers does not apply to mixed numbers.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fmn-mis-multiplication-implicit',
    },
    // Confident 1: add with carry across the whole
    {
      id: 'fmn-q9',
      type: 'numeric-entry',
      stem: 'Work out 1 3/4 + 2 1/2. Enter the whole-number part of the answer.',
      tier: 'confident',
      correctAnswer: 4,
      xpValue: 15,
      misconceptionId: 'fmn-mis-separate-parts',
      hint: 'Convert 1/2 to 2/4. Then 3/4 + 2/4 = 5/4 = 1 1/4, which carries one whole. So 1 + 2 + 1 = 4 wholes, plus 1/4 left: 4 1/4.',
    },
    // Confident 2: subtract with borrow
    {
      id: 'fmn-q10',
      type: 'numeric-entry',
      stem: 'Work out 4 1/3 - 1 2/3. Enter the whole-number part of the answer.',
      tier: 'confident',
      correctAnswer: 2,
      xpValue: 15,
      misconceptionId: 'fmn-mis-forget-borrow',
      hint: 'Borrow: 4 1/3 = 3 4/3. Then 3 - 1 = 2 and 4/3 - 2/3 = 2/3. Answer: 2 2/3.',
    },
    // Confident 3: spot-misconception on "always add the parts separately"
    {
      id: 'fmn-q11',
      type: 'spot-misconception',
      stem: 'Liam adds 1 3/4 + 2 1/2 by writing "wholes: 1 + 2 = 3, fractions: 3/4 + 1/2 = 5/4. Answer: 3 5/4".',
      tier: 'confident',
      statements: [
        {
          text: 'Liam is right. You add the wholes and the fractions separately and that is the final answer.',
          isMisconception: true,
        },
        {
          text: 'In fact when the fractions add to more than one whole, you must carry the extra whole back into the whole-number part. 5/4 is 1 1/4, so the answer becomes 3 + 1 + 1/4 = 4 1/4, not 3 5/4.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fmn-mis-separate-parts',
    },
    // Confident 4: multiply mixed number by fraction (convert to improper)
    {
      id: 'fmn-q12',
      type: 'multiple-choice',
      stem: 'Work out 1 1/2 x 2/3.',
      tier: 'confident',
      options: ['1', '2/6', '5/6', '1 1/3'],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'fmn-mis-multiply-mixed-direct',
      hint: 'Convert 1 1/2 to 3/2 first. Then 3/2 x 2/3 = 6/6 = 1.',
    },
    // Confident 5: missing-step borrowed subtraction
    {
      id: 'fmn-q13',
      type: 'missing-step',
      stem: 'Fill in the missing step. Maya works out 5 2/5 - 2 4/5.',
      tier: 'confident',
      steps: [
        'Notice that 4/5 cannot come out of 2/5: the fractional part of the second mixed number is bigger.',
        'Borrow one whole from the 5 and convert it to 5/5. The first mixed number becomes 4 + 5/5 + 2/5 = 4 7/5.',
        null,
        'Subtract the fractional parts: 7/5 - 4/5 = 3/5. The answer is 2 3/5.',
      ],
      missingStepIndex: 2,
      correctStep: 'Subtract the whole-number parts: 4 - 2 = 2.',
      xpValue: 20,
      misconceptionId: 'fmn-mis-forget-borrow',
    },
    // Confident 6: drag-order across mixed and improper forms
    {
      id: 'fmn-q14',
      type: 'drag-order',
      stem: 'Drag these values into order from smallest to largest.',
      tier: 'confident',
      items: ['1 1/2', '7/4', '1 1/3', '11/6'],
      correctOrder: [2, 0, 1, 3],
      xpValue: 20,
      hint: 'Convert each to a decimal or to a common denominator: 1 1/3 ≈ 1.33, 1 1/2 = 1.5, 7/4 = 1.75, 11/6 ≈ 1.83.',
    },
    // Confident 7: divide a whole by a mixed number
    {
      id: 'fmn-q15',
      type: 'numeric-entry',
      stem: 'Work out 5 divided by 1 1/4. Enter your answer as a single integer.',
      tier: 'confident',
      correctAnswer: 4,
      xpValue: 15,
      misconceptionId: 'fmn-mis-flip-mixed',
      hint: 'Convert 1 1/4 to 5/4 first. Then 5 / 5/4 = 5 x 4/5 = 20/5 = 4.',
    },
    // Confident 8: spot-misconception on direct multiplication of mixed numbers
    {
      id: 'fmn-q16',
      type: 'multiple-choice',
      stem: 'Tom works out 2 1/4 x 1 1/2 by writing "wholes: 2 x 1 = 2, fractions: 1/4 x 1/2 = 1/8. Answer: 2 1/8". Which answer is actually correct?',
      tier: 'confident',
      options: ['2 1/8', '2 3/8', '3 3/8', '4 1/2'],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'fmn-mis-multiply-mixed-direct',
      hint: 'Convert both to improper fractions first: 2 1/4 = 9/4 and 1 1/2 = 3/2. Multiply: 9/4 x 3/2 = 27/8 = 3 3/8.',
    },
    // Challenge 1: Bond-style multi-step rope split
    {
      id: 'fmn-q17',
      type: 'numeric-entry',
      stem: 'A 6 1/2 metre length of rope is cut into a long piece and a short piece. The long piece is 2 1/4 metres longer than the short piece. How long is the short piece, in metres? Enter the answer as a decimal to two decimal places.',
      tier: 'challenge',
      correctAnswer: 2.13,
      tolerance: 0.01,
      unit: 'metres',
      xpValue: 25,
      hint: 'Let s be the short piece. Then long = s + 2 1/4. Total = 2s + 2 1/4 = 6 1/2. So 2s = 6 1/2 - 2 1/4 = 17/4. s = 17/8 = 2.125 m.',
    },
    // Challenge 2: multi-step recipe
    {
      id: 'fmn-q18',
      type: 'multiple-choice',
      stem: 'A baker uses 1 1/2 kg of flour for one cake batch, 2 1/4 kg for another, and 3/4 kg for the icing. He starts with a 5 kg bag of flour. How much flour is left after baking and icing both batches?',
      tier: 'challenge',
      options: ['1/4 kg', '1/2 kg', '3/4 kg', '1 1/4 kg'],
      correctIndex: 1,
      xpValue: 25,
      hint: 'Total used = 1 1/2 + 2 1/4 + 3/4. Convert to quarters: 6/4 + 9/4 + 3/4 = 18/4 = 4 1/2 kg. Left = 5 - 4 1/2 = 1/2 kg.',
    },
    // Challenge 3: multiply two mixed numbers
    {
      id: 'fmn-q19',
      type: 'numeric-entry',
      stem: 'Work out 2 2/3 multiplied by 1 1/8. Enter the whole-number part of the answer.',
      tier: 'challenge',
      correctAnswer: 3,
      xpValue: 25,
      hint: 'Convert: 2 2/3 = 8/3 and 1 1/8 = 9/8. Multiply: 8/3 x 9/8 = 72/24 = 3. So the answer is exactly 3.',
    },
    // Challenge 4: chain with multiplication and subtraction in a money context
    {
      id: 'fmn-q20',
      type: 'multiple-choice',
      stem: 'A Dover market stall sells beetroot at £1.60 per kilogram. A customer buys 2 3/4 kg and pays with a £10 note. How much change does the customer get?',
      tier: 'challenge',
      options: ['£3.60', '£4.40', '£5.40', '£5.60'],
      correctIndex: 3,
      xpValue: 25,
      hint: 'Convert 2 3/4 to 11/4 and multiply: 11/4 x 1.60 = (11 x 1.60) / 4 = 17.60 / 4 = £4.40. Change = £10 - £4.40 = £5.60.',
    },
    // Challenge 5: dividing a mixed number by a fraction (split into smaller parts)
    {
      id: 'fmn-q21',
      type: 'numeric-entry',
      stem: 'A Sevenoaks florist has 3 3/4 metres of ribbon. She uses 5/8 of a metre on each bouquet. How many full bouquets can she tie before she runs out of ribbon?',
      tier: 'challenge',
      correctAnswer: 6,
      unit: 'bouquets',
      xpValue: 25,
      hint: 'Convert 3 3/4 to 15/4. Divide: 15/4 / 5/8 = 15/4 x 8/5 = 120/20 = 6. So she can tie exactly 6 bouquets.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a mixed-number question where pupils read "2 1/3" as a multiplication and wrote 2/3 as the value.
    {
      id: 'fmn-mis-multiplication-implicit',
      description:
        'I read a mixed number as a multiplication, so 2 1/3 means 2 multiplied by 1/3 and equals 2/3.',
      triggerAnswer: 'multiplication-implicit',
      correction:
        'Actually a mixed number is shorthand for addition, not multiplication. 2 1/3 means 2 + 1/3.',
      reExplanation:
        'A mixed number sits between two whole numbers on the number line: 2 1/3 sits between 2 and 3, exactly one-third of the way from 2 to 3. Algebraic notation like 3y means 3 times y, but mixed numbers do not follow that rule. To convert 2 1/3 to a single fraction, multiply the whole by the denominator and add the numerator: 2 x 3 + 1 = 7. So 2 1/3 = 7/3, not 2/3.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a mixed-number addition where pupils added the wholes and fractions separately and left an improper fraction in the fractional part.
    {
      id: 'fmn-mis-separate-parts',
      description:
        'When I add mixed numbers, I add the whole parts and the fraction parts separately and never carry, even when the fractions sum to more than a whole.',
      triggerAnswer: 'separate-parts',
      correction:
        'In fact, when the fractional parts sum to more than one whole, you carry the extra whole back into the whole-number part.',
      reExplanation:
        'For 1 3/4 + 2 1/2, convert 1/2 to 2/4. The fractions sum to 3/4 + 2/4 = 5/4. That is 1 whole and 1/4 left. Carry the 1 whole back into the wholes: 1 + 2 + 1 = 4 wholes. The final answer is 4 1/4, not 3 5/4. Leaving an improper fraction in the fractional part is a sign the carry was missed.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, November 2022, Paper 02 (Foundation, Calculator), commentary on a mixed-number subtraction where pupils failed to borrow across the whole when the second fractional part was larger.
    {
      id: 'fmn-mis-forget-borrow',
      description:
        'When I subtract mixed numbers and the second fractional part is bigger than the first, I just swap the order or write a negative fraction, instead of borrowing one whole.',
      triggerAnswer: 'forget-borrow',
      correction:
        'Actually you borrow one whole from the first mixed number and convert it to a fraction with the same denominator, then subtract column by column.',
      reExplanation:
        'For 4 1/3 - 1 2/3, the fractions are 1/3 and 2/3; you cannot take 2/3 out of 1/3. Borrow one whole: 4 1/3 becomes 3 + 3/3 + 1/3 = 3 4/3. Now subtract: 3 - 1 = 2 and 4/3 - 2/3 = 2/3. The answer is 2 2/3. Swapping to get 3/3 = 1 ignores the original meaning of the subtraction.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Mixed Numbers" page, "Common mistake" callout warning that mixed numbers must be converted to improper fractions before multiplying.
    {
      id: 'fmn-mis-multiply-mixed-direct',
      description:
        'I multiply two mixed numbers by multiplying the wholes together and the fractions together, then adding the two products.',
      triggerAnswer: 'multiply-mixed-direct',
      correction:
        'In fact you must convert each mixed number to an improper fraction first, then multiply normally.',
      reExplanation:
        'For 2 1/4 x 1 1/2, the direct method gives "2 x 1 = 2" and "1/4 x 1/2 = 1/8" then sums to 2 1/8, which loses two cross-product terms. Converting first: 2 1/4 = 9/4, 1 1/2 = 3/2. Multiply: 9/4 x 3/2 = 27/8 = 3 3/8. The correct answer 3 3/8 is significantly bigger than 2 1/8 because the missing cross-products 2 x 1/2 and 1 x 1/4 contribute over a whole between them.',
    },
    // Source: NCETM Secondary Magazine, Issue 119, article on mixed-number division, citing pupil work that flipped the divisor without first converting the dividend to an improper fraction.
    {
      id: 'fmn-mis-flip-mixed',
      description:
        'When I divide by a mixed number using Keep, Flip, Change, I flip the mixed number directly without first converting it to an improper fraction.',
      triggerAnswer: 'flip-mixed',
      correction:
        'Actually you must convert the mixed number to an improper fraction before applying the flip, otherwise the whole-number part is left in the wrong place.',
      reExplanation:
        'For 5 / 1 1/4, write 1 1/4 as 5/4 first. Then flip: 5 / 5/4 = 5 x 4/5 = 4. Flipping 1 1/4 directly to 1 4/1 = 5 would give 5 x 5 = 25, which is far too big. The whole-number part of a mixed number is part of the fraction, not a separate factor.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 5 "Fractions" by Hart, on pupils incorrectly multiplying the whole by the numerator (rather than by the denominator) when converting mixed numbers to improper fractions.
    {
      id: 'fmn-mis-improper-conversion',
      description:
        'When I convert a mixed number to an improper fraction, I multiply the whole by the numerator instead of by the denominator, so 2 3/4 becomes (2 x 3 + 3)/4 = 9/4.',
      triggerAnswer: 'improper-conversion',
      correction:
        'In fact you multiply the whole-number part by the denominator (not the numerator) and then add the original numerator.',
      reExplanation:
        'For 2 3/4, multiply the whole 2 by the denominator 4 to find how many quarters are in the whole part: 2 x 4 = 8 quarters. Add the existing numerator 3: 8 + 3 = 11. The improper fraction is 11/4. Multiplying by the numerator 3 instead of the denominator would only count three groups, which has nothing to do with how many quarters fit in 2 whole units.',
    },
    // Authored, no external source: classroom-observed slip where a Year 7 pupil reads 3 1/2 as the decimal 3.12 by treating the 1/2 as a string of digits to the right of the point.
    {
      id: 'fmn-mis-mixed-as-decimal-string',
      description:
        'I read a mixed number as a decimal by writing the whole number, a point, and then the digits of the fraction, so 3 1/2 becomes 3.12.',
      triggerAnswer: 'mixed-as-decimal-string',
      correction:
        'Actually you find the decimal form of the fraction first, then add it to the whole. 1/2 = 0.5, so 3 1/2 = 3.5.',
      reExplanation:
        'A mixed number 3 1/2 means 3 + 1/2 = 3 + 0.5 = 3.5, not 3.12. The digits 1 and 2 in the fraction 1/2 represent the numerator and denominator, not decimal place values. To convert any mixed number to a decimal, divide the numerator by the denominator (1 / 2 = 0.5) and add the whole-number part.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const fractionsMixedNumbersZoneNodes = [fractionsMixedNumbers]
