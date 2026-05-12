import type { SkillNode } from '@/types/content'

export const placeValuePowersOfTen: SkillNode = {
  id: 'maths-place-value-powers-of-ten',
  title: 'Multiplying and Dividing by Powers of Ten',
  description:
    'Multiplying or dividing by 10, 100 and 1000 shifts every digit a fixed number of place value columns. Going up by a factor of 10 moves each digit one column to the left; dividing by 10 moves each digit one column to the right. Negative powers of 10 (such as 10 to the power minus 2) are the same as dividing by the matching positive power, so multiplying by 0.01 is the same as dividing by 100. The decimal point stays put, the digits do the moving, and zeros come in only as placeholders to keep columns open.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-place-value',
  zoneName: 'Place Value',
  tier: 'confident',
  prerequisites: ['maths-place-value-whole-numbers'],
  curriculum: {
    ks3Objective:
      'Understand and use place value for decimals, measures and integers of any size.',
    awardingBodies: {
      aqa: 'N2 Multiply and divide numbers by powers of 10 (GCSE Mathematics 8300)',
      edexcel: 'N2 Multiply and divide numbers by positive and negative powers of 10 (GCSE Mathematics 1MA1)',
      ocr: '1.01b Multiply and divide by powers of 10 (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'ppt-scene-place-value-chart',
      title: 'The Place Value Chart with a Decimal Point',
      type: 'simulation',
      instructions:
        'Look at how the columns sit either side of the decimal point: thousands, hundreds, tens, ones, then tenths, hundredths, thousandths to the right. Each column to the left is worth ten times as much; each column to the right is worth one tenth as much. The decimal point marks the boundary between the ones and the tenths. Reading 4.7 shows a 4 in the ones column and a 7 in the tenths column.',
      data: {
        columns: [
          { id: 'Th', label: 'Thousands', power: 1000 },
          { id: 'H', label: 'Hundreds', power: 100 },
          { id: 'T', label: 'Tens', power: 10 },
          { id: 'O', label: 'Ones', power: 1 },
          { id: 'tenths', label: 'Tenths', power: 0.1 },
          { id: 'hundredths', label: 'Hundredths', power: 0.01 },
          { id: 'thousandths', label: 'Thousandths', power: 0.001 },
        ],
        workedNumbers: [
          {
            number: 4.7,
            placement: 'O = 4, tenths = 7',
            words: 'Four point seven, that is 4 ones and 7 tenths',
          },
          {
            number: 0.038,
            placement: 'hundredths = 3, thousandths = 8',
            words: 'Zero point zero three eight, that is 3 hundredths and 8 thousandths',
          },
          {
            number: 380,
            placement: 'H = 3, T = 8, O = 0',
            words: 'Three hundred and eighty, with a placeholder zero in the ones',
          },
        ],
      },
    },
    {
      id: 'ppt-scene-multiply-shift-left',
      title: 'Multiplying by Powers of Ten Shifts Digits Left',
      type: 'simulation',
      instructions:
        'See how every digit shifts one column to the left for each factor of 10. Multiplying 4.7 by 10 sends the 4 from ones into tens and the 7 from tenths into ones, giving 47. Multiplying 0.038 by 100 sends every digit two columns to the left, so the 3 lands in the ones column and the 8 in the tenths, giving 3.8. The decimal point itself stays put; only the digits change column. Zeros come in if a column would otherwise be empty.',
      data: {
        rule: 'Multiplying by 10 to the power n shifts every digit n columns to the left.',
        examples: [
          {
            input: 4.7,
            factor: 10,
            output: 47,
            note: '4 shifts ones to tens, 7 shifts tenths to ones.',
          },
          {
            input: 0.038,
            factor: 100,
            output: 3.8,
            note: '3 shifts hundredths to ones, 8 shifts thousandths to tenths.',
          },
          {
            input: 6.5,
            factor: 1000,
            output: 6500,
            note: '6 shifts ones to thousands, 5 shifts tenths to hundreds; placeholder zeros fill the empty tens and ones columns.',
          },
        ],
        callout:
          'Each factor of 10 promotes every digit one column to the left. The decimal point stays put.',
      },
    },
    {
      id: 'ppt-scene-divide-shift-right',
      title: 'Dividing by Powers of Ten Shifts Digits Right',
      type: 'simulation',
      instructions:
        'See how dividing reverses the shift: every digit travels one column to the right for each factor of 10. Dividing 380 by 100 sends the 3 from hundreds into ones and the 8 from tens into tenths, giving 3.8. Dividing 7 by 1000 sends the 7 from ones three columns right into the thousandths column, giving 0.007 (placeholder zeros hold the tenths and hundredths columns open). The decimal point stays put; the digits travel right and zeros plug any empty columns.',
      data: {
        rule: 'Dividing by 10 to the power n shifts every digit n columns to the right.',
        examples: [
          {
            input: 380,
            divisor: 100,
            output: 3.8,
            note: '3 shifts hundreds to ones, 8 shifts tens to tenths.',
          },
          {
            input: 7,
            divisor: 1000,
            output: 0.007,
            note: '7 shifts ones to thousandths; the tenths and hundredths columns are filled with placeholder zeros.',
          },
          {
            input: 92,
            divisor: 10,
            output: 9.2,
            note: '9 shifts tens to ones, 2 shifts ones to tenths.',
          },
        ],
        callout:
          'Dividing by 10 makes the value ten times smaller. Multiplying by 0.1 does exactly the same thing.',
      },
    },
    {
      id: 'ppt-scene-negative-powers',
      title: 'Negative Powers of Ten and Decimal Multipliers',
      type: 'diagram',
      instructions:
        'Notice how a negative index just renames a familiar division: 10 to the power minus 1 is 0.1, 10 to the power minus 2 is 0.01, and 10 to the power minus 3 is 0.001. Multiplying by 0.1 is the same as dividing by 10. Multiplying by 0.01 is the same as dividing by 100. The minus sign in the index changes the direction of the shift (right rather than left); it does not make the answer negative. The result of multiplying a positive number by 0.01 is a smaller positive number.',
      data: {
        title: 'Negative powers of 10 are decimal multipliers',
        rows: [
          { power: '10 to the power 2', value: 100, equivalent: 'multiply by 100' },
          { power: '10 to the power 1', value: 10, equivalent: 'multiply by 10' },
          { power: '10 to the power 0', value: 1, equivalent: 'multiply by 1' },
          { power: '10 to the power minus 1', value: 0.1, equivalent: 'divide by 10' },
          { power: '10 to the power minus 2', value: 0.01, equivalent: 'divide by 100' },
          { power: '10 to the power minus 3', value: 0.001, equivalent: 'divide by 1000' },
        ],
        worked: [
          { calc: '50 x 0.1', equivalent: '50 divided by 10', result: 5 },
          { calc: '6 x 0.01', equivalent: '6 divided by 100', result: 0.06 },
          { calc: '4.2 x 10 to the power minus 2', equivalent: '4.2 divided by 100', result: 0.042 },
        ],
        callout:
          'A negative index in a power of 10 means divide. The result is still a positive number, just smaller.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'ppt-worked-1',
      title: 'Calculate 0.038 multiplied by 100',
      steps: [
        {
          explanation: 'Identify the factor of 10. The number 100 is 10 to the power 2, so every digit shifts two columns to the left.',
          maths: '100 = 10 to the power 2',
        },
        {
          explanation: 'Place 0.038 in the columns: 0 in the ones, 0 in the tenths, 3 in the hundredths, 8 in the thousandths.',
          maths: 'O = 0, tenths = 0, hundredths = 3, thousandths = 8',
        },
        {
          explanation: 'Shift each non-zero digit two columns left. The 3 moves from hundredths to ones, and the 8 moves from thousandths to tenths.',
          maths: '3: hundredths to ones; 8: thousandths to tenths',
        },
        {
          explanation: 'Read the new columns: 3 in the ones, 8 in the tenths. Combine to give the answer.',
          maths: '0.038 x 100 = 3.8',
        },
        {
          explanation: 'Sense check: multiplying by 100 should make a small positive number larger, and 3.8 is roughly 100 times 0.038.',
          maths: '0.038 x 100 = 3.8',
        },
      ],
    },
    {
      id: 'ppt-worked-2',
      title: 'Calculate 7 divided by 1000',
      steps: [
        {
          explanation: 'Identify the factor of 10. The number 1000 is 10 to the power 3, so every digit shifts three columns to the right.',
          maths: '1000 = 10 to the power 3',
        },
        {
          explanation: 'Place 7 in the columns: 7 sits in the ones column.',
          maths: 'O = 7',
        },
        {
          explanation: 'Shift the 7 three columns to the right. It moves from ones to tenths to hundredths to thousandths.',
          maths: '7: ones to thousandths',
        },
        {
          explanation: 'Fill the empty tenths and hundredths columns with placeholder zeros, and put a leading 0 in the ones column.',
          maths: 'O = 0, tenths = 0, hundredths = 0, thousandths = 7',
        },
        {
          explanation: 'Read the digits left to right with the decimal point in place. The answer is 0.007.',
          maths: '7 divided by 1000 = 0.007',
        },
      ],
    },
  ],
  questions: [
    // Core 1, MCQ, position 2
    {
      id: 'ppt-q1',
      type: 'multiple-choice',
      stem: 'Calculate 4.7 multiplied by 10.',
      tier: 'core',
      options: ['4.70', '0.47', '47', '470'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'ppt-mis-add-zero',
      hint: 'Shift every digit one column to the left. The 4 moves from ones to tens, and the 7 moves from tenths to ones.',
    },
    // Core 2, MCQ, position 1
    {
      id: 'ppt-q2',
      type: 'multiple-choice',
      stem: 'Calculate 380 divided by 100.',
      tier: 'core',
      options: ['38', '3.8', '0.38', '3800'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'ppt-mis-cross-off-digit',
      hint: 'Shift every digit two columns to the right. The 3 moves from hundreds to ones, and the 8 moves from tens to tenths.',
    },
    // Core 3, MCQ, position 0
    {
      id: 'ppt-q3',
      type: 'multiple-choice',
      stem: 'Which calculation gives the same answer as 50 multiplied by 0.1?',
      tier: 'core',
      options: ['50 divided by 10', '50 multiplied by 10', '50 plus 0.1', '50 minus 0.1'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'ppt-mis-times-bigger',
      hint: 'Multiplying by 0.1 has the same effect as dividing by 10.',
    },
    // Core 4, MCQ, position 3
    {
      id: 'ppt-q4',
      type: 'multiple-choice',
      stem: 'Calculate 6.5 multiplied by 1000.',
      tier: 'core',
      options: ['65', '650', '6.500', '6500'],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'ppt-mis-missing-placeholder',
      hint: 'Shift every digit three columns to the left. Placeholder zeros fill the empty tens and ones columns.',
    },
    // Core 5, numeric
    {
      id: 'ppt-q5',
      type: 'numeric-entry',
      stem: 'Calculate 0.6 multiplied by 100.',
      tier: 'core',
      correctAnswer: 60,
      xpValue: 10,
      hint: 'Shift each digit two columns to the left. The 6 moves from tenths to tens, and a placeholder zero fills the ones column.',
    },
    // Core 6, numeric
    {
      id: 'ppt-q6',
      type: 'numeric-entry',
      stem: 'Calculate 92 divided by 10.',
      tier: 'core',
      correctAnswer: 9.2,
      tolerance: 0.001,
      xpValue: 10,
      hint: 'Shift every digit one column to the right. The 9 moves from tens to ones, and the 2 moves from ones to tenths.',
    },
    // Core 7, MCQ, position 1
    {
      id: 'ppt-q7',
      type: 'multiple-choice',
      stem: 'Which of these is equal to 10 to the power minus 2?',
      tier: 'core',
      options: ['0.1', '0.01', '0.001', '-100'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'ppt-mis-negative-power-negative',
      hint: 'A negative index in a power of 10 means divide. 10 to the power minus 2 is 1 divided by 100.',
    },
    // Confident 1, MCQ, position 0
    {
      id: 'ppt-q8',
      type: 'multiple-choice',
      stem: 'Calculate 0.038 multiplied by 100.',
      tier: 'confident',
      options: ['3.8', '0.38', '38', '380'],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'ppt-mis-add-zero',
      hint: 'Shift every digit two columns to the left. The 3 moves from hundredths to ones, and the 8 moves from thousandths to tenths.',
    },
    // Confident 2, MCQ, position 2
    {
      id: 'ppt-q9',
      type: 'multiple-choice',
      stem: 'Calculate 7 divided by 1000.',
      tier: 'confident',
      options: ['0.7', '0.07', '0.007', '0.0007'],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'ppt-mis-shift-count',
      hint: 'Dividing by 1000 shifts every digit three columns to the right. Use placeholder zeros to keep the empty columns open.',
    },
    // Confident 3, MCQ, position 3
    {
      id: 'ppt-q10',
      type: 'multiple-choice',
      stem: 'Calculate 4.2 multiplied by 10 to the power minus 2.',
      tier: 'confident',
      options: ['420', '4.2', '0.42', '0.042'],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'ppt-mis-decimal-point-move',
      hint: 'Multiplying by 10 to the power minus 2 is the same as dividing by 100. Shift every digit two columns to the right.',
    },
    // Confident 4, numeric
    {
      id: 'ppt-q11',
      type: 'numeric-entry',
      stem: 'Calculate 0.045 multiplied by 1000.',
      tier: 'confident',
      correctAnswer: 45,
      xpValue: 15,
      hint: 'Shift every digit three columns to the left. The 4 moves from hundredths to tens, and the 5 moves from thousandths to ones.',
    },
    // Confident 5, numeric
    {
      id: 'ppt-q12',
      type: 'numeric-entry',
      stem: 'Calculate 5400 divided by 1000.',
      tier: 'confident',
      correctAnswer: 5.4,
      tolerance: 0.001,
      xpValue: 15,
      hint: 'Shift every digit three columns to the right. The 5 moves from thousands to ones, and the 4 moves from hundreds to tenths.',
    },
    // Confident 6, numeric
    {
      id: 'ppt-q13',
      type: 'numeric-entry',
      stem: 'Calculate 8 multiplied by 0.01.',
      tier: 'confident',
      correctAnswer: 0.08,
      tolerance: 0.0001,
      xpValue: 15,
      misconceptionId: 'ppt-mis-times-bigger',
      hint: 'Multiplying by 0.01 has the same effect as dividing by 100.',
    },
    // Confident 7, MCQ, position 0
    {
      id: 'ppt-q14',
      type: 'multiple-choice',
      stem: 'A 2.5 metre length of ribbon is divided into 100 equal pieces. How long is each piece in metres?',
      tier: 'confident',
      options: ['0.025', '0.25', '25', '250'],
      correctIndex: 0,
      xpValue: 15,
      hint: 'Dividing by 100 shifts every digit two columns to the right.',
    },
    // Confident 8, spot-misconception
    {
      id: 'ppt-q15',
      type: 'spot-misconception',
      stem: 'Aisha calculates 3.4 multiplied by 10 by adding a zero on the end and writes 3.40.',
      tier: 'confident',
      statements: [
        {
          text: 'Aisha is right. To multiply any number by 10 you put a zero on the end.',
          isMisconception: true,
        },
        {
          text: 'In fact 3.40 is the same value as 3.4. To multiply by 10 every digit shifts one column to the left, so 3.4 multiplied by 10 is 34.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'ppt-mis-add-zero',
    },
    // Challenge 1, MCQ, position 2 (Bond-style multi-step word problem)
    {
      id: 'ppt-q16',
      type: 'multiple-choice',
      stem: 'A Sevenoaks bakery makes 1000 identical biscuits from 4.5 kilograms of flour. To the nearest gram, how much flour is in each biscuit? (1 kilogram = 1000 grams.)',
      tier: 'challenge',
      options: ['0.0045 g', '0.045 g', '4.5 g', '45 g'],
      correctIndex: 2,
      xpValue: 25,
      hint: 'First convert 4.5 kilograms to grams by multiplying by 1000. Then divide by the 1000 biscuits.',
    },
    // Challenge 2, numeric (Bond-style multi-step word problem)
    {
      id: 'ppt-q17',
      type: 'numeric-entry',
      stem: 'A Manchester reservoir holds 1.6 million litres of water. The water company says they release one hundredth of that amount each day. How many litres are released each day? (Enter the answer as a whole number of litres.)',
      tier: 'challenge',
      correctAnswer: 16000,
      xpValue: 25,
      unit: 'litres',
      hint: 'One hundredth of a number is the same as that number divided by 100. Write 1.6 million as 1,600,000 first.',
    },
    // Challenge 3, numeric
    {
      id: 'ppt-q18',
      type: 'numeric-entry',
      stem: 'Calculate 0.6 multiplied by 10 to the power minus 1, then multiplied by 10 to the power 3. (Enter the final answer as a decimal.)',
      tier: 'challenge',
      correctAnswer: 60,
      tolerance: 0.001,
      xpValue: 25,
      hint: 'Multiplying by 10 to the power minus 1 shifts each digit one column to the right. Multiplying by 10 to the power 3 then shifts every digit three columns to the left. The net shift is two columns to the left.',
    },
    // Challenge 4, missing-step
    {
      id: 'ppt-q19',
      type: 'missing-step',
      stem: 'Fill in the missing step. Calculate 0.0073 multiplied by 10 to the power 4.',
      tier: 'challenge',
      steps: [
        'Identify the factor of 10. The number 10 to the power 4 is 10,000, so every digit shifts four columns to the left.',
        'Place 0.0073 in the columns: 7 in the thousandths column and 3 in the ten-thousandths column.',
        null,
        'Read the new columns: 7 in the tens, 3 in the ones. The answer is 73.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Shift each non-zero digit four columns to the left. The 7 moves from thousandths to tens, and the 3 moves from ten-thousandths to ones.',
      xpValue: 25,
    },
    // Challenge 5, drag-order
    {
      id: 'ppt-q20',
      type: 'drag-order',
      stem: 'Order these results from smallest to largest.',
      tier: 'challenge',
      items: [
        '0.6 multiplied by 0.01',
        '6 divided by 1000',
        '6 multiplied by 0.1',
        '60 divided by 10',
      ],
      correctOrder: [0, 1, 2, 3],
      xpValue: 25,
      misconceptionId: 'ppt-mis-decimal-point-move',
      hint: 'Work each one out. 0.6 x 0.01 = 0.006, 6 divided by 1000 = 0.006, 6 x 0.1 = 0.6, 60 divided by 10 = 6. Two of them are equal, so put them in the order shown.',
    },
    // Challenge 6, spot-misconception
    {
      id: 'ppt-q21',
      type: 'spot-misconception',
      stem: 'Liam calculates 4 multiplied by 10 to the power minus 3 and writes -4000 because the index is negative.',
      tier: 'challenge',
      statements: [
        {
          text: 'Liam is right. The minus sign in the index makes the result negative.',
          isMisconception: true,
        },
        {
          text: 'In fact 10 to the power minus 3 means 0.001, so 4 multiplied by 0.001 = 0.004. The answer is a small positive number.',
          isMisconception: false,
        },
      ],
      xpValue: 25,
      misconceptionId: 'ppt-mis-negative-power-negative',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a "multiply by 10" question where pupils added a zero to the end of a decimal (writing 3.40 for 3.4 x 10) instead of shifting digits.
    {
      id: 'ppt-mis-add-zero',
      description:
        'I think multiplying by 10 always means adding a zero on the end of the number.',
      triggerAnswer: 'add-zero',
      correction:
        'Actually multiplying by 10 shifts every digit one column to the left. Adding a zero only works for whole numbers, not for decimals.',
      reExplanation:
        'For 3.4 multiplied by 10, every digit moves one column to the left: 3 moves from ones to tens, and 4 moves from tenths to ones. The answer is 34, not 3.40. The number 3.40 has the same value as 3.4, so writing 3.40 is unchanged. The shift rule works for both whole numbers and decimals.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 2F (Foundation, Calculator), commentary on a "divide by 10" question where pupils crossed off the last digit of a non-zero-ending integer.
    {
      id: 'ppt-mis-cross-off-digit',
      description:
        'I think dividing by 10 means crossing off the last digit of the number.',
      triggerAnswer: 'cross-off-digit',
      correction:
        'In fact dividing by 10 shifts every digit one column to the right. Crossing off the last digit only works for whole numbers ending in zero.',
      reExplanation:
        'For 47 divided by 10, every digit shifts one column to the right: 4 moves from tens to ones, and 7 moves from ones to tenths. The answer is 4.7, not 4. For numbers like 380 the trick happens to work, because the trailing zero coincides with the shift, but the underlying rule is always to shift the digits.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Multiplying and Dividing by 10, 100, 1000" page; the "Common mistake" callout that pupils think multiplying always makes a number bigger and divide always makes it smaller, and so apply the wrong direction when the multiplier is less than 1.
    {
      id: 'ppt-mis-times-bigger',
      description:
        'I think multiplying always makes a number bigger, so multiplying by 0.1 must make a number larger.',
      triggerAnswer: 'times-bigger',
      correction:
        'Actually multiplying by a number less than 1 makes the result smaller. Multiplying by 0.1 has the same effect as dividing by 10.',
      reExplanation:
        '50 multiplied by 0.1 is the same as 50 divided by 10, which is 5. The result is smaller than 50, not larger. Whenever the multiplier sits between 0 and 1, the answer is smaller than the original. Reading 0.1 as one tenth makes the rule plain: one tenth of 50 is 5.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 01 (Foundation, Non-calculator), commentary on a "negative index" question where pupils wrote a negative answer for 4 x 10 to the power minus 3 because they treated the minus sign in the index as a sign on the result.
    {
      id: 'ppt-mis-negative-power-negative',
      description:
        'I think a negative power of 10 produces a negative answer.',
      triggerAnswer: 'negative-power-negative',
      correction:
        'In fact a negative index means divide. The result of multiplying a positive number by 10 to a negative power is a smaller positive number, not a negative one.',
      reExplanation:
        '10 to the power minus 2 is the same as 1 divided by 100, which is 0.01. So 4 multiplied by 10 to the power minus 2 is 4 multiplied by 0.01, which is 0.04. The minus sign in the index changes the direction of the digit shift (right rather than left). It does not change the sign of the answer.',
    },
    // Source: NCETM "Misconceptions and how to overcome them: place value" Year 7 transition pack, on pupils moving the decimal point instead of shifting digits and getting the count wrong (shifting by two places when multiplying by 10).
    {
      id: 'ppt-mis-decimal-point-move',
      description:
        'I move the decimal point instead of moving the digits, and lose count of how many places to shift.',
      triggerAnswer: 'decimal-point-move',
      correction:
        'Actually it is the digits that shift columns, not the decimal point. The point stays put; each factor of 10 moves the digits one place.',
      reExplanation:
        'For 4.2 multiplied by 0.01, the rule is "divide by 100", so each digit shifts two columns to the right: 4 from ones to hundredths, 2 from tenths to thousandths. The answer is 0.042. Picturing the digits moving across a fixed decimal point keeps the place count honest.',
    },
    // Source: Bond 11+ Maths Assessment Papers 10-11 Years Book 1 Paper 5 Q12, recurring trap where pupils shift by the value of the power instead of by the index (for example shifting two columns when multiplying by 10, or three when multiplying by 100).
    {
      id: 'ppt-mis-shift-count',
      description:
        'I shift the digits by the wrong number of columns, often by the value of the power instead of by the index.',
      triggerAnswer: 'shift-count',
      correction:
        'In fact the index in 10 to the power n tells you how many columns to shift. Multiplying by 100 (which is 10 to the power 2) shifts by 2, not by 100.',
      reExplanation:
        'Dividing 7 by 1000 means shifting every digit three columns to the right, because 1000 is 10 to the power 3. The 7 moves from ones to thousandths, giving 0.007. Counting the zeros in 1000 also gives 3, which matches the shift. Always match the shift count to the index, not to the size of the multiplier.',
    },
    // Source: CGP KS3 Maths Workbook (MXHW41), Section 1 Number, "Powers of 10" page; the "Common mistake" callout that pupils forget to add placeholder zeros and so write the answer with too few digits (for example writing 6.5 multiplied by 1000 as 65 instead of 6500).
    {
      id: 'ppt-mis-missing-placeholder',
      description:
        'I forget to fill empty columns with placeholder zeros after shifting digits.',
      triggerAnswer: 'missing-placeholder',
      correction:
        'Actually any column that is left empty after the shift must be filled with a zero, so the digits stay in their proper places.',
      reExplanation:
        'For 6.5 multiplied by 1000, the 6 shifts from ones to thousands and the 5 shifts from tenths to hundreds. The tens and ones columns are left empty, so they need placeholder zeros. The answer is 6500, not 65. Without the zeros, the 6 would slip back into the tens column and the value would change.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const placeValuePowersOfTenZoneNodes = [placeValuePowersOfTen]
