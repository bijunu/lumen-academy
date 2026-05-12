import type { SkillNode } from '@/types/content'

export const fourOperationsLongDivision: SkillNode = {
  id: 'maths-four-operations-long-division',
  title: 'Long and Short Division: Formal Written Method',
  description:
    'Use short division (the bus stop method) for single-digit divisors and long division for two-digit divisors. Handle integer remainders, extend a quotient into decimal places, and convert a decimal-divisor problem into a whole-number-divisor problem by scaling both numbers.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-four-operations',
  zoneName: 'Four Operations',
  tier: 'confident',
  prerequisites: ['maths-four-operations-multiply-divide-negatives'],
  curriculum: {
    ks3Objective:
      'Use the four operations, including formal written methods, applied to integers, decimals, proper and improper fractions, and mixed numbers, all both positive and negative.',
    awardingBodies: {
      aqa: 'N2 Apply the four operations, including formal written methods, to integers (positive and negative) and decimals',
      edexcel: 'N2 Apply the four operations, including formal written methods, to integers and decimals, including division of multi-digit integers by single-digit and two-digit divisors',
      ocr: '1.02a Apply the four operations to integers and decimals using formal written methods, including short and long division',
    },
  },
  scenes: [
    {
      id: 'fld-scene-bus-stop',
      title: 'Short Division: The Bus Stop',
      type: 'diagram',
      instructions:
        'Read the worked layout for 3528 ÷ 7. The dividend sits under the bus-stop bar; each digit is processed left to right; carries pass to the next column as small numbers above the bar.',
      data: {
        layout: 'short-division',
        dividend: 3528,
        divisor: 7,
        columns: [
          { digit: 3, quotient: 0, remainder: 3, note: '3 ÷ 7 = 0 remainder 3. Carry the 3 across to the next column.' },
          { digit: 5, withCarry: 35, quotient: 5, remainder: 0, note: '35 ÷ 7 = 5 remainder 0. Nothing to carry.' },
          { digit: 2, quotient: 0, remainder: 2, note: '2 ÷ 7 = 0 remainder 2. Carry the 2 across.' },
          { digit: 8, withCarry: 28, quotient: 4, remainder: 0, note: '28 ÷ 7 = 4 remainder 0. The division finishes exactly.' },
        ],
        quotient: 504,
        notes:
          'The quotient reads off the row above the bar: 0, 5, 0, 4 gives 504. The leading zero is silent. A zero in the middle of the answer must stay because it holds its place in the column.',
      },
    },
    {
      id: 'fld-scene-long-division',
      title: 'Long Division: 8736 ÷ 24',
      type: 'diagram',
      instructions:
        'Read the four passes through the dividend. At each pass, estimate the digit of the quotient, multiply the divisor, subtract, then bring down the next digit.',
      data: {
        layout: 'long-division',
        dividend: 8736,
        divisor: 24,
        passes: [
          {
            current: 87,
            estimate: 3,
            multiply: 'three lots of 24 is 72',
            subtract: '87 minus 72 is 15',
            bringDown: 3,
            newCurrent: 153,
          },
          {
            current: 153,
            estimate: 6,
            multiply: 'six lots of 24 is 144',
            subtract: '153 minus 144 is 9',
            bringDown: 6,
            newCurrent: 96,
          },
          {
            current: 96,
            estimate: 4,
            multiply: 'four lots of 24 is 96',
            subtract: '96 minus 96 is 0',
            bringDown: null,
            newCurrent: 0,
          },
        ],
        quotient: 364,
        notes:
          'The first two digits of the dividend (87) are large enough to contain the divisor at least once, so the first quotient digit is placed above the second dividend digit. After the final subtraction, no more digits remain to bring down and the remainder is zero, so 8736 ÷ 24 = 364 exactly.',
      },
    },
    {
      id: 'fld-scene-remainders-decimals',
      title: 'Remainders and Decimal Extensions',
      type: 'diagram',
      instructions:
        'Compare three ways of reporting 17 ÷ 5. The integer remainder is 2; the decimal extension carries the bus-stop method past the decimal point; the mixed-number form rewrites the remainder as a fraction.',
      data: {
        layout: 'remainder-forms',
        dividend: 17,
        divisor: 5,
        forms: [
          {
            form: 'integer remainder',
            result: '3 r 2',
            useCase: 'How many full coaches of 5 fit 17 children? 3 full coaches, 2 children left over.',
          },
          {
            form: 'decimal extension',
            result: '3.4',
            steps: [
              '17 ÷ 5: 17 contains three lots of 5, with 2 left over. Quotient so far: 3.',
              'Place a decimal point after the 3 in the answer and a matching point after the 17 in the dividend.',
              'Append a zero to the dividend so the remainder of 2 becomes 20 in the next column.',
              '20 ÷ 5 = 4 with no remainder. The next quotient digit is 4. Quotient: 3.4.',
            ],
            useCase: 'How many litres of cola does each guest get if 17 litres is shared between 5 guests? 3.4 litres each.',
          },
          {
            form: 'mixed number',
            result: '3 and 2 over 5',
            useCase: 'Rewriting the remainder over the divisor: 17/5 = 3 + 2/5.',
          },
        ],
        notes:
          'The decimal point in the answer sits directly above the decimal point in the dividend. Choose the form that matches the question. People and cars need integer remainders; lengths and money usually want a decimal.',
      },
    },
    {
      id: 'fld-scene-decimal-divisor',
      title: 'Scaling a Decimal Divisor',
      type: 'diagram',
      instructions:
        'Read the conversion of 4.8 ÷ 0.2 into 48 ÷ 2. Multiplying both numbers by 10 keeps the quotient unchanged and turns the divisor into a whole number.',
      data: {
        layout: 'scaling-divisor',
        original: { dividend: 4.8, divisor: 0.2, quotient: 24 },
        scaled: { dividend: 48, divisor: 2, quotient: 24 },
        scaleFactor: 10,
        worked: [
          'The divisor 0.2 has one decimal place. Multiply by 10 to clear it. The divisor becomes 2.',
          'Multiply the dividend 4.8 by the same factor of 10. The dividend becomes 48.',
          'Compute 48 ÷ 2 with short division: 4 ÷ 2 = 2; 8 ÷ 2 = 4. Quotient: 24.',
          'Because both numbers were scaled by the same factor, the quotient 24 is also the answer to the original 4.8 ÷ 0.2.',
        ],
        notes:
          'Always scale until the divisor is a whole number, not until the dividend is. A whole-number divisor is what the bus-stop and long-division layouts expect.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'fld-worked-1',
      title: 'Short division: 4536 ÷ 8',
      steps: [
        {
          explanation: 'We want to compute 4536 ÷ 8. Set out the bus-stop layout with 4536 under the bar and 8 to the left.',
          maths: '8) 4536',
        },
        {
          explanation: 'First column: 4 ÷ 8 = 0 remainder 4. Write 0 above the 4 and carry the 4 to the next column.',
          maths: '4 ÷ 8 = 0 r 4',
        },
        {
          explanation: 'Second column: with the carried 4, the value is 45. 45 ÷ 8 = 5 remainder 5. Write 5 above the 5 and carry 5.',
          maths: '45 ÷ 8 = 5 r 5',
        },
        {
          explanation: 'Third column: with the carried 5, the value is 53. 53 ÷ 8 = 6 remainder 5. Write 6 above the 3 and carry 5.',
          maths: '53 ÷ 8 = 6 r 5',
        },
        {
          explanation: 'Fourth column: with the carried 5, the value is 56. 56 ÷ 8 = 7 remainder 0. Write 7 above the 6.',
          maths: '56 ÷ 8 = 7 r 0',
        },
        {
          explanation: 'Read the quotient above the bar: 0, 5, 6, 7. The leading zero drops, so 4536 ÷ 8 = 567 exactly.',
          maths: '4536 ÷ 8 = 567',
        },
      ],
    },
    {
      id: 'fld-worked-2',
      title: 'Long division: 9776 ÷ 13',
      steps: [
        {
          explanation: 'We want to compute 9776 ÷ 13. Set out the long-division bracket with 9776 inside and 13 outside.',
          maths: '13) 9776',
        },
        {
          explanation: 'The first digit, 9, is smaller than 13, so look at the first two digits: 97. Estimate how many lots of 13 fit in 97.',
          maths: '97 ÷ 13',
        },
        {
          explanation: 'Seven lots of 13 is 91; eight lots is 104, which is too big. So the first quotient digit is 7, written above the 7 of 9776.',
          maths: '7 × 13 = 91; 97 − 91 = 6',
        },
        {
          explanation: 'Bring down the next dividend digit, 7, next to the remainder 6 to make 67.',
          maths: '67',
        },
        {
          explanation: 'Five lots of 13 is 65; six lots is 78, too big. Next quotient digit is 5. 67 − 65 = 2.',
          maths: '5 × 13 = 65; 67 − 65 = 2',
        },
        {
          explanation: 'Bring down the final dividend digit, 6, next to the remainder 2 to make 26.',
          maths: '26',
        },
        {
          explanation: 'Two lots of 13 is exactly 26. Next quotient digit is 2 with remainder 0.',
          maths: '2 × 13 = 26; 26 − 26 = 0',
        },
        {
          explanation: 'No digits remain to bring down and the remainder is 0. The quotient reads 752, so 9776 ÷ 13 = 752.',
          maths: '9776 ÷ 13 = 752',
        },
      ],
    },
    {
      id: 'fld-worked-3',
      title: 'Decimal extension: 23 ÷ 4 to two decimal places',
      steps: [
        {
          explanation: 'We want 23 ÷ 4 as a decimal. Set out the bus-stop with 23 under the bar.',
          maths: '4) 23',
        },
        {
          explanation: 'First column: 2 ÷ 4 = 0 remainder 2. Carry 2.',
          maths: '2 ÷ 4 = 0 r 2',
        },
        {
          explanation: 'Second column: with the carried 2, the value is 23. 23 ÷ 4 = 5 remainder 3.',
          maths: '23 ÷ 4 = 5 r 3',
        },
        {
          explanation: 'No more whole-number columns remain, but the remainder of 3 is non-zero. Place a decimal point in the answer above where it sits in the dividend, and append a zero to the dividend to extend.',
          maths: 'quotient so far: 5.',
        },
        {
          explanation: 'Next column: with the carried 3, the value is 30. 30 ÷ 4 = 7 remainder 2. Quotient: 5.7.',
          maths: '30 ÷ 4 = 7 r 2',
        },
        {
          explanation: 'Append another zero to extend further. With the carried 2, the value is 20. 20 ÷ 4 = 5 remainder 0. Quotient: 5.75.',
          maths: '20 ÷ 4 = 5 r 0',
        },
        {
          explanation: 'The remainder is now 0 and the answer terminates. 23 ÷ 4 = 5.75 exactly.',
          maths: '23 ÷ 4 = 5.75',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'fld-q1',
      type: 'multiple-choice',
      stem: 'What is 1764 ÷ 4 by short division?',
      tier: 'core',
      options: ['441', '414', '491', '481'],
      correctIndex: 0,
      xpValue: 10,
      hint: 'Process the digits left to right. 1 ÷ 4 = 0 r 1; 17 ÷ 4 = 4 r 1; 16 ÷ 4 = 4 r 0; 4 ÷ 4 = 1 r 0.',
      misconceptionId: 'fld-mis-skip-zero-quotient',
    },
    {
      id: 'fld-q2',
      type: 'numeric-entry',
      stem: 'Compute 3528 ÷ 7 using short division. Enter the quotient as a whole number.',
      tier: 'core',
      correctAnswer: 504,
      xpValue: 10,
      hint: '3 ÷ 7 = 0 r 3; 35 ÷ 7 = 5 r 0; 2 ÷ 7 = 0 r 2; 28 ÷ 7 = 4. Keep the middle 0 in the answer.',
      misconceptionId: 'fld-mis-skip-zero-quotient',
    },
    {
      id: 'fld-q3',
      type: 'multiple-choice',
      stem: 'What is 4536 ÷ 8 by short division?',
      tier: 'core',
      options: ['557', '566', '568', '567'],
      correctIndex: 3,
      xpValue: 10,
      hint: '4 ÷ 8 = 0 r 4; 45 ÷ 8 = 5 r 5; 53 ÷ 8 = 6 r 5; 56 ÷ 8 = 7 r 0.',
    },
    {
      id: 'fld-q4',
      type: 'numeric-entry',
      stem: 'Compute 6048 ÷ 6 using short division. Enter the quotient as a whole number.',
      tier: 'core',
      correctAnswer: 1008,
      xpValue: 10,
      hint: '6 ÷ 6 = 1 r 0; 0 ÷ 6 = 0 r 0; 4 ÷ 6 = 0 r 4; 48 ÷ 6 = 8. Keep both middle zeros.',
      misconceptionId: 'fld-mis-skip-zero-quotient',
    },
    {
      id: 'fld-q5',
      type: 'multiple-choice',
      stem: '17 sweets are shared equally between 5 children. How many full sweets does each child get, and how many are left over?',
      tier: 'core',
      options: [
        '2 each, with 7 left over',
        '4 each, with 3 left over',
        '3 each, with 2 left over',
        '3 each, with 5 left over',
      ],
      correctIndex: 2,
      xpValue: 10,
      hint: '17 ÷ 5 in integer-remainder form. Three lots of 5 is 15, and 17 − 15 = 2.',
      misconceptionId: 'fld-mis-remainder-as-answer',
    },
    {
      id: 'fld-q6',
      type: 'numeric-entry',
      stem: 'Compute 952 ÷ 8 using short division. Enter the quotient as a whole number.',
      tier: 'core',
      correctAnswer: 119,
      xpValue: 10,
      hint: '9 ÷ 8 = 1 r 1; 15 ÷ 8 = 1 r 7; 72 ÷ 8 = 9.',
    },
    {
      id: 'fld-q7',
      type: 'multiple-choice',
      stem: 'Which short-division working is set out correctly for 1206 ÷ 6?',
      tier: 'core',
      options: [
        '1 ÷ 6 = 0 r 1; 12 ÷ 6 = 2 r 0; 0 ÷ 6 = 0 r 0; 6 ÷ 6 = 1 r 0; quotient 201.',
        '12 ÷ 6 = 2; 0 ÷ 6 skipped; 6 ÷ 6 = 1; quotient 21.',
        '1 ÷ 6 = 0 r 1; 12 ÷ 6 = 2; 06 ÷ 6 = 1; quotient 21.',
        '12 ÷ 6 = 2; 06 ÷ 6 = 1; quotient 21.',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'Every digit must be processed in turn. The middle 0 in the dividend produces a 0 in the quotient that must be written, not skipped.',
      misconceptionId: 'fld-mis-skip-zero-quotient',
    },
    {
      id: 'fld-q8',
      type: 'numeric-entry',
      stem: 'Compute 8736 ÷ 24 using long division. Enter the quotient as a whole number.',
      tier: 'confident',
      correctAnswer: 364,
      xpValue: 15,
      hint: '87 ÷ 24 = 3 (3 × 24 = 72, 87 − 72 = 15). Bring down 3 → 153 ÷ 24 = 6 (6 × 24 = 144). Bring down 6 → 96 ÷ 24 = 4.',
    },
    {
      id: 'fld-q9',
      type: 'multiple-choice',
      stem: 'In the long division of 9776 ÷ 13, the first quotient digit is 7. What is the running remainder before the next dividend digit is brought down?',
      tier: 'confident',
      options: ['3', '6', '7', '14'],
      correctIndex: 1,
      xpValue: 15,
      hint: 'Seven lots of 13 is 91. Subtract 91 from 97.',
      misconceptionId: 'fld-mis-subtract-wrong-multiple',
    },
    {
      id: 'fld-q10',
      type: 'numeric-entry',
      stem: 'Compute 4928 ÷ 16 using long division. Enter the quotient as a whole number.',
      tier: 'confident',
      correctAnswer: 308,
      xpValue: 15,
      hint: '49 ÷ 16 = 3 (3 × 16 = 48). Bring down 2 → 12 ÷ 16 = 0 (write 0, bring down). Bring down 8 → 128 ÷ 16 = 8.',
      misconceptionId: 'fld-mis-skip-zero-quotient',
    },
    {
      id: 'fld-q11',
      type: 'multiple-choice',
      stem: 'A school orders 1632 exercise books packed in cartons of 17. How many full cartons do they receive?',
      tier: 'confident',
      options: ['86', '96', '92', '106'],
      correctIndex: 1,
      xpValue: 15,
      hint: 'Long division: 163 ÷ 17 = 9 (9 × 17 = 153, remainder 10). Bring down 2 → 102 ÷ 17 = 6.',
    },
    {
      id: 'fld-q12',
      type: 'multiple-choice',
      stem: 'What is 5824 ÷ 28 by long division?',
      tier: 'challenge',
      options: ['28', '218', '280', '208'],
      correctIndex: 3,
      xpValue: 25,
      hint: '58 ÷ 28 = 2 (2 × 28 = 56, remainder 2). Bring down 2 → 22 ÷ 28 = 0 (write 0). Bring down 4 → 224 ÷ 28 = 8.',
      misconceptionId: 'fld-mis-skip-zero-quotient',
    },
    {
      id: 'fld-q13',
      type: 'multiple-choice',
      stem: 'What is 23 ÷ 4 written as a decimal?',
      tier: 'challenge',
      options: ['5.3', '5.5', '5.75', '5.45'],
      correctIndex: 2,
      xpValue: 25,
      hint: '23 ÷ 4 = 5 r 3. Append a zero: 30 ÷ 4 = 7 r 2. Append another zero: 20 ÷ 4 = 5. Quotient: 5.75.',
      misconceptionId: 'fld-mis-decimal-point-misaligned',
    },
    {
      id: 'fld-q14',
      type: 'multiple-choice',
      stem: 'A 4.8 metre length of timber is cut into pieces of 0.2 metres each. How many pieces are made?',
      tier: 'confident',
      options: ['12', '24', '48', '96'],
      correctIndex: 1,
      xpValue: 15,
      hint: 'Multiply both numbers by 10 to clear the decimal divisor: 48 ÷ 2 = 24.',
      misconceptionId: 'fld-mis-divide-larger-by-smaller',
    },
    {
      id: 'fld-q15',
      type: 'spot-misconception',
      stem: 'Asha says: "5 ÷ 25 cannot be done, so the answer must be 25 ÷ 5 = 5."',
      tier: 'confident',
      statements: [
        {
          text: 'Asha is right. You cannot divide a smaller number by a larger one, so swap the order to get a sensible answer.',
          isMisconception: true,
        },
        {
          text: 'Asha is wrong. 5 ÷ 25 is 0.2 because 5 is one fifth of 25. The order of the numbers in a division matters.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fld-mis-divide-larger-by-smaller',
    },
    {
      id: 'fld-q16',
      type: 'missing-step',
      stem: 'Fill in the missing step in this long division of 7644 ÷ 21.',
      tier: 'confident',
      steps: [
        '76 ÷ 21: three lots of 21 is 63, four lots is 84 which is too big. The first quotient digit is 3, with remainder 76 − 63 = 13.',
        'Bring down the next dividend digit, 4, next to the remainder 13 to make 134.',
        null,
        'Bring down the final dividend digit, 4, next to the remainder 8 to make 84. 84 ÷ 21 = 4 with no remainder.',
        'The quotient reads 364. So 7644 ÷ 21 = 364.',
      ],
      missingStepIndex: 2,
      correctStep:
        '134 ÷ 21: six lots of 21 is 126, seven lots is 147 which is too big. The next quotient digit is 6, with remainder 134 − 126 = 8.',
      xpValue: 20,
    },
    {
      id: 'fld-q17',
      type: 'drag-order',
      stem: 'Drag the four short-division steps for 728 ÷ 4 into the correct order.',
      tier: 'confident',
      items: [
        '7 ÷ 4 = 1 remainder 3. Carry the 3 across.',
        '32 ÷ 4 = 8 remainder 0. The next quotient digit is 8.',
        '08 ÷ 4 = 2 remainder 0. The final quotient digit is 2.',
        'Read the quotient above the bar: 182. So 728 ÷ 4 = 182.',
      ],
      correctOrder: [0, 1, 2, 3],
      xpValue: 15,
      hint: 'Process the dividend left to right, then read off the quotient above the bar at the end.',
    },
    {
      id: 'fld-q18',
      type: 'multiple-choice',
      stem: 'A coach company can seat 47 passengers per coach. A school trip needs to take 612 pupils. How many full coaches must they book to seat everyone?',
      tier: 'challenge',
      options: ['12', '13', '14', '15'],
      correctIndex: 1,
      xpValue: 25,
      hint: '612 ÷ 47 by long division gives 13 with a non-zero remainder. The leftover pupils still need a coach, so round the quotient up.',
      misconceptionId: 'fld-mis-remainder-as-answer',
    },
    {
      id: 'fld-q19',
      type: 'numeric-entry',
      stem: 'A charity collects GBP 9576 in 24 weeks of bake sales, with the same takings each week. How much was collected each week, in GBP?',
      tier: 'challenge',
      correctAnswer: 399,
      xpValue: 25,
      unit: 'GBP',
      hint: 'Long division: 95 ÷ 24 = 3 (72, remainder 23). Bring down 7 → 237 ÷ 24 = 9 (216, remainder 21). Bring down 6 → 216 ÷ 24 = 9.',
    },
    {
      id: 'fld-q20',
      type: 'spot-misconception',
      stem: 'A class is asked to compute 0.84 ÷ 0.4. Sam writes: "Both numbers have a decimal point, so I can ignore the points and compute 84 ÷ 4 = 21."',
      tier: 'challenge',
      statements: [
        {
          text: 'Sam is right. The decimal points always cancel out, so 0.84 ÷ 0.4 = 21.',
          isMisconception: true,
        },
        {
          text: 'Sam is wrong. The two numbers have different numbers of decimal places. Multiply both by 10 to clear the divisor: 8.4 ÷ 4 = 2.1.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'fld-mis-clear-both-decimals-equally',
    },
    {
      id: 'fld-q21',
      type: 'numeric-entry',
      stem: 'A 0.75 metre ribbon is cut into pieces 0.05 metres long. How many pieces are made?',
      tier: 'challenge',
      correctAnswer: 15,
      xpValue: 25,
      hint: 'Multiply both numbers by 100 to clear the divisor: 75 ÷ 5 = 15.',
      misconceptionId: 'fld-mis-clear-both-decimals-equally',
    },
  ],
  misconceptions: [
    // Source: CGP KS3 Maths Study Guide (Years 7-9), Multiplying and Dividing chapter, "Common mistake" callout on the bus-stop method, on writing the wrong digit when the column quotient is zero. Reinforced by AQA GCSE Mathematics 8300 Foundation tier examiner reports across the 2017-2023 series, on items where pupils dropped a middle zero from the quotient of a short division.
    {
      id: 'fld-mis-skip-zero-quotient',
      description:
        'When a column of short division produces a quotient of zero, skipping it instead of writing the zero in the answer, so the final quotient is missing a digit.',
      triggerAnswer: 'skip-zero-quotient',
      correction:
        'In fact every column of the dividend produces a digit of the quotient. If the column quotient is zero, write the zero so the place value lines up.',
      reExplanation:
        'For 1206 ÷ 6, the column with the dividend digit 0 produces a quotient digit of 0. Skipping it gives 21, which is wrong. Writing it gives 201, which is correct: 6 × 201 = 1206.',
    },
    // Source: CGP KS3 Maths Study Guide (Years 7-9), Long Division chapter, "Common mistake" callout on subtracting the wrong multiple. Reinforced by Edexcel GCSE Mathematics 1MA1 Foundation tier (Paper 1F) examiner reports across the 2017-2023 series, on items where pupils estimated the quotient digit correctly but then subtracted a slipped multiple of the divisor.
    {
      id: 'fld-mis-subtract-wrong-multiple',
      description:
        'In long division, choosing the right quotient digit but then subtracting a different multiple of the divisor, often through a multiplication slip.',
      triggerAnswer: 'subtract-wrong-multiple',
      correction:
        'In fact you must subtract exactly the quotient digit times the divisor. Re-check the multiplication before subtracting.',
      reExplanation:
        'For 97 ÷ 13 with quotient digit 7, the value to subtract is 7 × 13 = 91, leaving remainder 6. Subtracting 89 or 92 by mistake throws every later digit off, because the wrong remainder is brought down.',
    },
    // Source: Hart, K.M. ed. (1981), "Children's Understanding of Mathematics 11-16" (CSMS), John Murray, Place Value and Decimals chapter, on the misalignment of the decimal point when extending a quotient. Reinforced by CGP KS3 Maths Study Guide (Years 7-9), Decimals chapter, "Common mistake" callout on the position of the decimal point in division.
    {
      id: 'fld-mis-decimal-point-misaligned',
      description:
        'When extending a short division into decimal places, placing the decimal point in the quotient at the wrong column, so the answer is ten times too large or too small.',
      triggerAnswer: 'decimal-point-misaligned',
      correction:
        'In fact the decimal point in the quotient sits directly above the decimal point in the dividend.',
      reExplanation:
        'For 23 ÷ 4, place a decimal point in the answer right after the 5 (above the implied point in 23.). Then 30 ÷ 4 = 7 and 20 ÷ 4 = 5 give 5.75, not 57.5 or 0.575. Lining up the points keeps the place value honest.',
    },
    // Source: Bell, A. (1986), "Diagnostic teaching: 2 - Developing conflict - discussion lessons", Mathematics Teaching 116, 26-29, on the "remainder is the answer" pattern in word problems. Reinforced by AQA GCSE Mathematics 8300 Foundation tier examiner reports across the 2017-2023 series, on items where pupils gave the remainder rather than the quotient or the rounded-up quotient as the answer.
    {
      id: 'fld-mis-remainder-as-answer',
      description:
        'In a word problem requiring a quotient, reporting the remainder as the answer instead of the quotient (or instead of the next whole number, where any leftover items still need a container).',
      triggerAnswer: 'remainder-as-answer',
      correction:
        'In fact the remainder counts the leftovers, not the answer. Read the question to decide whether to report the quotient, round it up, or split the remainder.',
      reExplanation:
        'For 17 sweets shared between 5 children, 17 ÷ 5 = 3 r 2. Each child gets 3 sweets, and 2 are left over. The "how many each" answer is 3, not 2. For 612 pupils on 47-seat coaches, the leftovers still need a coach, so the answer rounds up to 13.',
    },
    // Source: Hart, K.M. ed. (1981), CSMS, John Murray, Operations on Whole Numbers chapter, on the "divide larger by smaller" intuition. Reinforced by CGP KS3 Maths Study Guide (Years 7-9), Decimals chapter, "Common mistake" callout on dividing a small number by a larger one.
    {
      id: 'fld-mis-divide-larger-by-smaller',
      description:
        'Believing that the larger number must always be the dividend, so swapping the numbers in a division when the dividend is smaller than the divisor.',
      triggerAnswer: 'divide-larger-by-smaller',
      correction:
        'In fact the order matters. Dividing a smaller number by a larger one gives an answer less than 1, not an error.',
      reExplanation:
        '5 ÷ 25 means "what fraction of 25 is 5?". The answer is 5/25 = 1/5 = 0.2. Swapping to 25 ÷ 5 = 5 answers a different question. For 4.8 ÷ 0.2, both stay in their slots; multiplying both by 10 just makes the working tidier.',
    },
    // Source: Vlassis, J. (2008), "The role of mathematical symbols in the development of number conceptualization", Philosophical Psychology 21(4), 555-570, on procedural shortcut errors in decimal arithmetic. Reinforced by OCR GCSE Mathematics J560 Foundation tier examiner reports across the 2017-2023 series, on items requiring division by a decimal where pupils cleared the decimal point on both numbers without scaling matched factors.
    {
      id: 'fld-mis-clear-both-decimals-equally',
      description:
        'When dividing by a decimal, "cancelling" the decimal points on both numbers without checking that they have the same number of decimal places, so the dividend ends up scaled by a different factor than the divisor.',
      triggerAnswer: 'clear-both-decimals-equally',
      correction:
        'In fact you scale the divisor to a whole number first, then scale the dividend by the same factor. The factor is set by the divisor.',
      reExplanation:
        'For 0.84 ÷ 0.4, the divisor 0.4 has one decimal place. Multiply both by 10: 8.4 ÷ 4 = 2.1. Multiplying by 100 instead gives 84 ÷ 40, which still equals 2.1, but writing 84 ÷ 4 = 21 scales them by different factors and is wrong.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const fourOperationsLongDivisionZoneNodes = [fourOperationsLongDivision]
