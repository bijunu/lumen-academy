import type { SkillNode } from '@/types/content'

export const placeValueStandardFormIntro: SkillNode = {
  id: 'maths-place-value-standard-form-intro',
  title: 'Standard Form: An Introduction',
  description:
    'Interpret and compare numbers written in standard form A x 10^n, where 1 is less than or equal to A and A is less than 10, and n is a positive or negative integer or zero. Convert ordinary numbers to standard form and back, including very large numbers like 6,200,000 and very small numbers like 0.000043. Compare two numbers in standard form by looking at the power of 10 first and the number A second. Recognise common slips such as A falling outside the 1 to 10 range, the sign of n meaning the wrong direction, or treating standard form as if A could be negative.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-place-value',
  zoneName: 'Place Value',
  tier: 'challenge',
  prerequisites: [
    'maths-place-value-powers-of-ten',
    'maths-place-value-very-large-very-small',
  ],
  curriculum: {
    ks3Objective:
      'Interpret and compare numbers in standard form A x 10^n where 1 is less than or equal to A and A is less than 10, and n is a positive or negative integer or zero.',
    awardingBodies: {
      aqa: 'N9 Calculate with and interpret standard form A x 10^n where 1 less than or equal to A less than 10 and n is an integer (GCSE Mathematics 8300)',
      edexcel: 'N9 Calculate with and interpret standard form A x 10^n where 1 less than or equal to A less than 10 and n is an integer (GCSE Mathematics 1MA1)',
      ocr: '1.04c Standard form: converting between ordinary form and standard form (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'psi-scene-anatomy',
      title: 'The Anatomy of Standard Form',
      type: 'labelled-diagram',
      instructions:
        'Standard form writes a number as A x 10^n. The value A is a single non-zero digit, possibly followed by a decimal part, and must satisfy 1 is less than or equal to A and A is less than 10. So A can be 1, 3.7, or 9.99 but not 0.5 or 12. The power n is a whole number (positive, negative, or zero) that says how many places the decimal point in A shifts to recover the ordinary number. A positive n makes the number larger than A. A negative n makes the number smaller than A. The form 1 x 10^0 is just 1, since 10^0 = 1.',
      data: {
        viewBox: '0 0 200 120',
        hotspots: [
          { id: 'psi-h-a', x: 25, y: 50, label: 'A: between 1 and 10', description: 'A is at least 1 and less than 10. So 1, 3.7, 9.99 are valid; 0.5 and 12 are not.' },
          { id: 'psi-h-times', x: 45, y: 50, label: 'multiplied by', description: 'The x sign joins A to the power of 10.' },
          { id: 'psi-h-base', x: 65, y: 50, label: '10: the base', description: 'Standard form always uses base 10. That is what makes the place-value shift work.' },
          { id: 'psi-h-power', x: 82, y: 30, label: 'n: an integer', description: 'The index n can be positive, negative, or zero. Positive grows the number, negative shrinks it.' },
          { id: 'psi-h-example1', x: 30, y: 95, label: '6.2 x 10^6 = 6,200,000', description: 'A large number example with positive index.' },
          { id: 'psi-h-example2', x: 70, y: 95, label: '4.3 x 10^-5 = 0.000043', description: 'A small number example with negative index.' },
        ],
      },
    },
    {
      id: 'psi-scene-large-conversion',
      title: 'Converting a Large Number to Standard Form',
      type: 'simulation',
      instructions:
        'To rewrite a large number in standard form, find where the decimal point sits in A. Start with 6,200,000. The hidden decimal point sits at the right end: 6,200,000.0. For A to be at least 1 and less than 10, the decimal point must end up between the first two non-zero digits. That gives A = 6.2. Count the places the decimal point shifted to the left to get there: 1, 2, 3, 4, 5, 6 places. So n = 6 and the number is 6.2 x 10^6. The same method works for 47,000 (A = 4.7, n = 4) and for 305 (A = 3.05, n = 2). The shift is always to the left for whole numbers larger than 10.',
      data: {
        examples: [
          { ordinary: '6,200,000', a: 6.2, n: 6, shift: 'left 6 places', standardForm: '6.2 x 10^6' },
          { ordinary: '47,000', a: 4.7, n: 4, shift: 'left 4 places', standardForm: '4.7 x 10^4' },
          { ordinary: '305', a: 3.05, n: 2, shift: 'left 2 places', standardForm: '3.05 x 10^2' },
          { ordinary: '9', a: 9, n: 0, shift: 'no shift needed', standardForm: '9 x 10^0' },
        ],
        rule: 'For ordinary numbers at least 10, n is positive and equals the number of places the decimal point shifts to the left to land between the first two significant digits.',
      },
    },
    {
      id: 'psi-scene-small-conversion',
      title: 'Converting a Small Number to Standard Form',
      type: 'simulation',
      instructions:
        'For numbers below 1, the decimal point shifts to the right to make A at least 1. Start with 0.000043. The decimal point currently sits before the four leading zeros. To make A at least 1 and less than 10, the decimal point must shift to the right of the 4. That gives A = 4.3. Count the places the decimal point shifted to the right: 1, 2, 3, 4, 5 places. The index n is the negative of that count, so n = -5 and the number is 4.3 x 10^-5. The negative sign on n means the original number is smaller than A, not that A itself is negative. A is always positive at KS3.',
      data: {
        examples: [
          { ordinary: '0.000043', a: 4.3, n: -5, shift: 'right 5 places', standardForm: '4.3 x 10^-5' },
          { ordinary: '0.00072', a: 7.2, n: -4, shift: 'right 4 places', standardForm: '7.2 x 10^-4' },
          { ordinary: '0.5', a: 5, n: -1, shift: 'right 1 place', standardForm: '5 x 10^-1' },
          { ordinary: '0.0000091', a: 9.1, n: -6, shift: 'right 6 places', standardForm: '9.1 x 10^-6' },
        ],
        rule: 'For ordinary numbers less than 1, n is negative and the absolute value of n equals the number of places the decimal point shifts to the right to land between the first two significant digits.',
      },
    },
    {
      id: 'psi-scene-comparing',
      title: 'Comparing Numbers in Standard Form',
      type: 'simulation',
      instructions:
        'To compare two numbers in standard form, look at the power of 10 first. A higher power means a bigger number, no matter what A is, because each step in the index is a factor of 10. So 1.1 x 10^5 is larger than 9.9 x 10^4 because 10^5 is ten times 10^4 and the gap A cannot bridge. If the powers of 10 are equal, then compare the values of A. So 4.5 x 10^3 is larger than 3.4 x 10^3 because the powers match and 4.5 is greater than 3.4. The same rule works with negative indices: 2 x 10^-3 is larger than 8 x 10^-5 because -3 is greater than -5.',
      data: {
        comparisons: [
          { left: '1.1 x 10^5', right: '9.9 x 10^4', winner: 'left', reason: 'Powers differ: 10^5 beats 10^4 outright. The smaller A on the left does not change that.' },
          { left: '4.5 x 10^3', right: '3.4 x 10^3', winner: 'left', reason: 'Powers match, so compare A. 4.5 is greater than 3.4.' },
          { left: '2 x 10^-3', right: '8 x 10^-5', winner: 'left', reason: 'Negative indices: -3 is greater than -5, so 10^-3 is the bigger factor. 2 x 10^-3 = 0.002 and 8 x 10^-5 = 0.00008.' },
        ],
        rule: 'Compare the index n first. If n values are equal, compare A.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'psi-worked-1',
      title: 'Convert 38,500,000 to standard form',
      steps: [
        {
          explanation:
            'Find the position of the hidden decimal point. In a whole number it sits at the right end.',
          maths: '38,500,000 = 38,500,000.0',
        },
        {
          explanation:
            'Decide where the decimal point must end up. For A to satisfy 1 is less than or equal to A and A is less than 10, the point must sit between the 3 and the 8.',
          maths: 'A = 3.85',
        },
        {
          explanation:
            'Count the places the decimal point shifts to the left from its old position to its new position.',
          maths: '1, 2, 3, 4, 5, 6, 7 places left',
        },
        {
          explanation:
            'The number is at least 10, so n is positive. Use the count from the previous step as n.',
          maths: 'n = 7',
        },
        {
          explanation:
            'Write A and n in the form A x 10^n. The value 38,500,000 in standard form is 3.85 x 10^7.',
          maths: '38,500,000 = 3.85 x 10^7',
        },
      ],
    },
    {
      id: 'psi-worked-2',
      title: 'Convert 0.00091 to standard form',
      steps: [
        {
          explanation:
            'Find the leading non-zero digit. In 0.00091 it is the 9.',
          maths: '0.00091',
        },
        {
          explanation:
            'Decide where the decimal point must end up. For A to satisfy 1 is less than or equal to A and A is less than 10, the point must sit between the 9 and the 1.',
          maths: 'A = 9.1',
        },
        {
          explanation:
            'Count the places the decimal point shifts to the right from its old position to its new position.',
          maths: '1, 2, 3, 4 places right',
        },
        {
          explanation:
            'The number is less than 1, so n is the negative of that count.',
          maths: 'n = -4',
        },
        {
          explanation:
            'Write A and n in the form A x 10^n. The value 0.00091 in standard form is 9.1 x 10^-4.',
          maths: '0.00091 = 9.1 x 10^-4',
        },
      ],
    },
  ],
  questions: [
    // Core (7)
    {
      id: 'psi-q1',
      type: 'multiple-choice',
      stem: 'Which of these is written correctly in standard form?',
      tier: 'core',
      options: ['12 x 10^5', '3.7 x 10^6', '0.4 x 10^3', '6 x 5^4'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'psi-mis-base-must-be-10',
      hint: 'Standard form requires A to be at least 1 and less than 10, and the base must be 10.',
    },
    {
      id: 'psi-q2',
      type: 'numeric-entry',
      stem: 'Write 4.6 x 10^3 as an ordinary number.',
      tier: 'core',
      correctAnswer: 4600,
      xpValue: 10,
      hint: 'Shift the decimal point in 4.6 three places to the right, filling the gap with zeros.',
    },
    {
      id: 'psi-q3',
      type: 'multiple-choice',
      stem: 'In the standard form expression 5.2 x 10^4, what does the 4 tell you?',
      tier: 'core',
      options: [
        'The number of zeros at the end of the ordinary number.',
        'The number 5.2 multiplied by itself 4 times.',
        'The number of places the decimal point in 5.2 shifts to the right.',
        'The size of A in the expression.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'psi-mis-n-counts-zeros',
    },
    {
      id: 'psi-q4',
      type: 'numeric-entry',
      stem: 'Write 7.05 x 10^2 as an ordinary number.',
      tier: 'core',
      correctAnswer: 705,
      xpValue: 10,
      hint: 'Shift the decimal point two places to the right.',
    },
    {
      id: 'psi-q5',
      type: 'multiple-choice',
      stem: 'Which value of A makes 0.6 x 10^4 a correct standard form expression?',
      tier: 'core',
      options: ['0.6, the form is already correct.', '6, giving 6 x 10^3.', '60, giving 60 x 10^2.', '0.06, giving 0.06 x 10^5.'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'psi-mis-A-out-of-range',
      hint: 'A must be at least 1. Rewrite 0.6 as 6 and adjust the power of 10 to keep the value the same.',
    },
    {
      id: 'psi-q6',
      type: 'numeric-entry',
      stem: 'Write 8 x 10^-3 as an ordinary decimal.',
      tier: 'core',
      correctAnswer: 0.008,
      xpValue: 10,
      hint: 'A negative index means the ordinary number is small. Shift the decimal point in 8 three places to the left.',
    },
    {
      id: 'psi-q7',
      type: 'multiple-choice',
      stem: 'Which of these numbers, written in standard form, is 250,000?',
      tier: 'core',
      options: ['2.5 x 10^4', '25 x 10^4', '0.25 x 10^6', '2.5 x 10^5'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Place the decimal point between the 2 and the 5, then count places shifted left.',
    },
    // Confident (8)
    {
      id: 'psi-q8',
      type: 'numeric-entry',
      stem: 'A football crowd of 86,000 watches a match. Write the crowd size as A x 10^n in standard form. Enter the value of A.',
      tier: 'confident',
      correctAnswer: 8.6,
      xpValue: 15,
      hint: 'Place the decimal point between the 8 and the 6 to fix A.',
    },
    {
      id: 'psi-q9',
      type: 'numeric-entry',
      stem: 'For the same crowd of 86,000, what is the value of n in the standard form A x 10^n?',
      tier: 'confident',
      correctAnswer: 4,
      xpValue: 15,
      hint: 'Count the places the decimal point in 8.6 shifts to the left to recover 86,000.',
    },
    {
      id: 'psi-q10',
      type: 'multiple-choice',
      stem: 'Convert 0.00072 into standard form.',
      tier: 'confident',
      options: ['7.2 x 10^4', '0.72 x 10^-3', '7.2 x 10^-4', '72 x 10^-5'],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'psi-mis-direction-of-shift',
    },
    {
      id: 'psi-q11',
      type: 'numeric-entry',
      stem: 'Write 0.000305 in standard form A x 10^n. Enter the value of n.',
      tier: 'confident',
      correctAnswer: -4,
      xpValue: 15,
      misconceptionId: 'psi-mis-direction-of-shift',
      hint: 'The number is less than 1, so n must be negative. Count how many places the decimal point shifts to the right.',
    },
    {
      id: 'psi-q12',
      type: 'multiple-choice',
      stem: 'Which symbol correctly compares 3.4 x 10^5 and 4.5 x 10^4?',
      tier: 'confident',
      options: ['3.4 x 10^5 is less than 4.5 x 10^4.', '3.4 x 10^5 is greater than 4.5 x 10^4.', '3.4 x 10^5 is equal to 4.5 x 10^4.', '4.5 x 10^4 is greater than 3.4 x 10^5.'],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'psi-mis-bigger-A-wins',
    },
    {
      id: 'psi-q13',
      type: 'spot-misconception',
      stem: 'Lily writes 540,000 in standard form as 54 x 10^4 because she counted the four trailing zeros to get the index.',
      tier: 'confident',
      statements: [
        {
          text: 'Her answer is fine. Counting the trailing zeros of an ordinary whole number always gives the index n.',
          isMisconception: true,
        },
        {
          text: 'Her answer is not in standard form. A must satisfy 1 is less than or equal to A and A is less than 10, so 54 is too large. Move the decimal point one more place: 5.4 x 10^5.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'psi-mis-A-out-of-range',
    },
    {
      id: 'psi-q14',
      type: 'drag-order',
      stem: 'Place these numbers in order from smallest to largest.',
      tier: 'confident',
      items: ['3.1 x 10^4', '9.9 x 10^3', '3.1 x 10^5', '4.2 x 10^4'],
      correctOrder: [1, 0, 3, 2],
      xpValue: 15,
      misconceptionId: 'psi-mis-bigger-A-wins',
    },
    {
      id: 'psi-q15',
      type: 'multiple-choice',
      stem: 'A pupil writes 12 x 10^5 and is told it is not in standard form. Which rewrite is correct and in standard form?',
      tier: 'confident',
      options: [
        '1.2 x 10^6',
        '12 x 10^5 is fine; the rule does not apply here.',
        '1.2 x 10^5, since the index does not need to change.',
        '120 x 10^4, moving the decimal point the other way.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'psi-mis-rewrite-keeps-power',
      hint: 'Move the decimal point in 12 one place to the left to fix A. To keep the value the same, raise the index by 1.',
    },
    // Challenge (6)
    {
      id: 'psi-q16',
      type: 'multiple-choice',
      stem: 'A scientist records the diameter of a single bacterium as 0.0000019 m. What is this length in standard form?',
      tier: 'challenge',
      options: ['1.9 x 10^-5 m', '1.9 x 10^-7 m', '19 x 10^-7 m', '1.9 x 10^-6 m'],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'psi-mis-direction-of-shift',
      hint: 'Place the decimal point between the 1 and the 9, then count places shifted right.',
    },
    {
      id: 'psi-q17',
      type: 'multiple-choice',
      stem: 'Light travels at about 3 x 10^8 metres per second. Sound in air travels at about 3.4 x 10^2 metres per second. Roughly how many times faster is light than sound?',
      tier: 'challenge',
      options: [
        'About 1 million times faster.',
        'About 100 times faster.',
        'About 10 times faster.',
        'About 1 thousand times faster.',
      ],
      correctIndex: 0,
      xpValue: 25,
      hint: 'The A values are similar, so the gap is dominated by the powers of 10. Compare 10^8 and 10^2.',
    },
    {
      id: 'psi-q18',
      type: 'missing-step',
      stem: 'Fill in the missing step in this conversion of 207,000 to standard form.',
      tier: 'challenge',
      steps: [
        'The hidden decimal point sits at the right end: 207,000.0.',
        'Place the decimal point between the first two non-zero digits to fix A. So A = 2.07.',
        null,
        'The number is at least 10, so n is positive. Therefore n = 5.',
        'Putting it together, 207,000 in standard form is 2.07 x 10^5.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Count the places the decimal point shifts to the left from its old position to its new position: 1, 2, 3, 4, 5 places.',
      xpValue: 25,
    },
    {
      id: 'psi-q19',
      type: 'spot-misconception',
      stem: 'Sam writes the number 0.0042 in standard form. He says A = 4.2 and that the index n must also be positive because A is positive, giving 4.2 x 10^3.',
      tier: 'challenge',
      statements: [
        {
          text: 'Sam is right. The sign of A and the sign of n always match in standard form.',
          isMisconception: true,
        },
        {
          text: 'Sam is wrong. The sign of n shows the direction of the shift, not the sign of A. The number 0.0042 is smaller than A, so n is negative: 4.2 x 10^-3.',
          isMisconception: false,
        },
      ],
      xpValue: 25,
      misconceptionId: 'psi-mis-negative-n-means-negative-A',
    },
    {
      id: 'psi-q20',
      type: 'numeric-entry',
      stem: 'A jeweller in Sevenoaks weighs a tiny gold flake at 0.000056 grams and records it in standard form as 5.6 x 10^n grams. What integer value of n should be used?',
      tier: 'challenge',
      correctAnswer: -5,
      xpValue: 25,
      misconceptionId: 'psi-mis-direction-of-shift',
      hint: 'Place the decimal point between the 5 and the 6 to fix A. Then count how many places it shifted to the right.',
    },
    {
      id: 'psi-q21',
      type: 'slider-explore',
      stem: 'A library lists the population of a county as P, where P is at least 4.5 x 10^5 and P is less than 4.6 x 10^5. Set the slider to a population P that fits.',
      tier: 'challenge',
      min: 400000,
      max: 500000,
      step: 1000,
      correctRange: [450000, 459999],
      label: 'Population P',
      xpValue: 25,
      hint: '4.5 x 10^5 is 450,000 and 4.6 x 10^5 is 460,000. Pick any value in between, including 450,000 itself.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Maths Foundation tier examiner report November 2022, Paper 1F Q11 on standard form
    {
      id: 'psi-mis-A-out-of-range',
      description:
        'Believing that any expression of the form (number) x 10^(integer) is in standard form, even when the number is below 1 or 10 or above.',
      triggerAnswer: 'A-out-of-range',
      correction:
        'In standard form A must satisfy 1 is less than or equal to A and A is less than 10. So 54 x 10^4 and 0.6 x 10^4 are not in standard form.',
      reExplanation:
        'Take 54 x 10^4. The value of A is 54, which is too large. Move the decimal point in 54 one place to the left to get A = 5.4. Each place left raises the index by 1, so the index becomes 5. The standard form is 5.4 x 10^5. The same number, written so A sits in the right range.',
    },
    // Source: CGP KS3 Maths Study Guide p.34 Common mistake box on standard form indices
    {
      id: 'psi-mis-n-counts-zeros',
      description:
        'Thinking the index n always equals the number of trailing zeros of the ordinary whole number.',
      triggerAnswer: 'n-counts-zeros',
      correction:
        'The index n is the number of places the decimal point in A shifts to recover the ordinary number. Counting zeros works only for round numbers like 5,000.',
      reExplanation:
        'For 5,200,000 there are five trailing zeros, but the standard form is 5.2 x 10^6. The index is 6 because the decimal point in 5.2 shifts six places to the right to land at the end of 5,200,000. Counting zeros gives the wrong answer whenever A has more than one significant digit.',
    },
    // Source: Edexcel GCSE Maths Foundation tier examiner report June 2023, Paper 1F Q14 on small numbers in standard form
    {
      id: 'psi-mis-direction-of-shift',
      description:
        'Confusing whether the decimal point in A shifts left or right when converting, and getting the sign of n wrong as a result.',
      triggerAnswer: 'direction-of-shift',
      correction:
        'Large ordinary numbers (at least 10) give a positive n. Small ordinary numbers (less than 1) give a negative n. The sign of n shows the direction of the shift in A.',
      reExplanation:
        'For 0.00072 the decimal point starts before the seven and must shift right four places to land between 7 and 2. Right shifts on a small number give a negative index, so n is negative four. The correct answer is 7.2 x 10^-4, not 7.2 x 10^4.',
    },
    // Source: AQA GCSE Maths Higher tier examiner report June 2023, Paper 2H Q9 on comparing standard form values
    {
      id: 'psi-mis-bigger-A-wins',
      description:
        'Picking the number with the larger value of A as the bigger number, even when the powers of 10 differ.',
      triggerAnswer: 'bigger-A-wins',
      correction:
        'When the powers of 10 differ, the higher power wins. Compare A only after you have checked that the powers of 10 are equal.',
      reExplanation:
        'For 3.4 x 10^5 and 4.5 x 10^4 the first has 10^5 and the second has 10^4. The factor 10^5 is ten times 10^4, and that gap is far bigger than the gap between A values (4.5 versus 3.4). So 3.4 x 10^5 is the larger number, equal to 340,000 against 45,000.',
    },
    // Source: OCR GCSE Maths Foundation tier examiner report November 2022, Paper 1F Q8 on standard form sign of index
    {
      id: 'psi-mis-negative-n-means-negative-A',
      description:
        'Treating the negative sign on n as if it makes A negative, or refusing a negative n on the grounds that A is positive.',
      triggerAnswer: 'negative-n-means-negative-A',
      correction:
        'A is always positive at KS3. The sign of n is independent: it tells you which side of 1 the ordinary number sits on, not the sign of A.',
      reExplanation:
        '0.0042 is a positive number that happens to be very small. The standard form is 4.2 x 10^-3. The 4.2 is positive. The negative three says shift the decimal point in 4.2 three places to the left to recover the small ordinary value. Both signs do separate jobs.',
    },
    // Source: CGP KS3 Maths Workbook p.18 Common mistake box on rewriting standard form
    {
      id: 'psi-mis-rewrite-keeps-power',
      description:
        'When fixing an expression that is not in standard form, leaving the power of 10 untouched while moving the decimal point in A.',
      triggerAnswer: 'rewrite-keeps-power',
      correction:
        'Moving the decimal point in A must be paid for by changing the power of 10. Each place left adds 1 to the index. Each place right subtracts 1.',
      reExplanation:
        '12 x 10^5 is not in standard form because A is too big. Shift the decimal point in 12 one place to the left to get 1.2. To keep the value the same, raise the index by 1, giving 1.2 x 10^6. Both expressions equal 1,200,000, but only the second is in standard form.',
    },
    // Source: Bond 11+ Maths Stretch Papers Age 11-12 Paper 3 Q9, on identifying valid standard form
    {
      id: 'psi-mis-base-must-be-10',
      description:
        'Treating any expression with the shape (number) x (number)^(integer) as standard form, even when the base is not 10.',
      triggerAnswer: 'base-must-be-10',
      correction:
        'Standard form always uses base 10. Expressions like 6 x 5^4 are valid arithmetic but they are not in standard form.',
      reExplanation:
        'The whole point of standard form is to lean on the place-value system, which is built on powers of 10. A power of 5, or 7, or 2 will not slide the decimal point cleanly through the columns. Always check the base is 10 before calling an expression standard form.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const placeValueStandardFormIntroZoneNodes = [placeValueStandardFormIntro]
