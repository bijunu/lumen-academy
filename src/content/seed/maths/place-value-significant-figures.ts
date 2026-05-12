import type { SkillNode } from '@/types/content'

export const placeValueSignificantFigures: SkillNode = {
  id: 'maths-place-value-significant-figures',
  title: 'Significant Figures and Rounding',
  description:
    'Identify how many significant figures a number has, including the rules for leading, trapped, and trailing zeros, and round whole numbers and decimals to a chosen number of significant figures or decimal places.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-place-value',
  zoneName: 'Place Value',
  tier: 'confident',
  prerequisites: ['maths-place-value-whole-numbers'],
  curriculum: {
    ks3Objective:
      'Round numbers and measures to an appropriate degree of accuracy, for example to a number of decimal places or significant figures.',
    awardingBodies: {
      aqa: 'N15 Round numbers and measures to an appropriate degree of accuracy (decimal places or significant figures)',
      edexcel: 'N15 Round numbers and measures to an appropriate degree of accuracy (decimal places or significant figures)',
      ocr: '1.04a Round numbers to a specified number of decimal places or significant figures; estimate answers',
    },
  },
  scenes: [
    {
      id: 'psf-scene-which-digits-count',
      title: 'Which Digits Are Significant',
      type: 'simulation',
      instructions:
        'Look at how each kind of zero behaves. Non-zero digits always count. Zeros sandwiched between non-zero digits count too. Zeros at the front of a small decimal hold the place value but do not count, and zeros after a decimal point at the end of a number do count.',
      data: {
        rule: 'Non-zero digits are always significant. Zeros count when they are between non-zero digits or trail after a decimal point.',
        examples: [
          {
            number: '347',
            significantCount: 3,
            note: 'All three digits are non-zero, so all three are significant.',
          },
          {
            number: '0.00347',
            significantCount: 3,
            note: 'The leading zeros are placeholders only. The 3, 4, and 7 are significant.',
          },
          {
            number: '5007',
            significantCount: 4,
            note: 'The two zeros are trapped between non-zero digits, so they count.',
          },
          {
            number: '5.00',
            significantCount: 3,
            note: 'The trailing zeros after the decimal point show precision, so they count.',
          },
          {
            number: '0.0506',
            significantCount: 3,
            note: 'The leading zero before the decimal does not count. The trapped zero does. So 5, 0, and 6 are significant.',
          },
        ],
      },
    },
    {
      id: 'psf-scene-rounding-2sf',
      title: 'Rounding to 2 Significant Figures',
      type: 'simulation',
      instructions:
        'Watch the procedure on each example. First find the second significant digit. Then look at the next digit to decide whether to round up or stay. Replace any digits after the cut with zeros if they are part of a whole number, or remove them if they are after the decimal point.',
      data: {
        steps: [
          'Find the first significant digit (the first non-zero digit).',
          'Count along to the second significant digit.',
          'Look at the digit just to the right. If it is 5 or more, round up; if it is 4 or less, round down.',
          'Keep the digits up to the cut and replace digits to the right of it with zeros if needed for place value.',
        ],
        worked: [
          {
            input: '0.0034567',
            firstSig: '3',
            secondSig: '4',
            decider: '5',
            output: '0.0035',
            note: 'The deciding digit is 5, so round up. The 4 becomes 5.',
          },
          {
            input: '4628',
            firstSig: '4',
            secondSig: '6',
            decider: '2',
            output: '4600',
            note: 'The deciding digit is 2, so round down. The trailing zeros hold the place value.',
          },
          {
            input: '472',
            firstSig: '4',
            secondSig: '7',
            decider: '2',
            output: '470',
            note: 'Round down. The 0 keeps 7 in the tens column.',
          },
        ],
      },
    },
    {
      id: 'psf-scene-tricky-cases',
      title: 'Tricky Cases',
      type: 'simulation',
      instructions:
        'Study the cases where a carry up changes the digit count or where a long decimal needs a single decision at the cut. Do not chain-round digit by digit. Make one rounding decision based on the digit immediately to the right of the cut.',
      data: {
        cases: [
          {
            label: 'Carry up changes the leading digits',
            input: '5.997',
            target: '2 sf',
            output: '6.0',
            note: 'The third digit is 9, which rounds 5.99 up. The 9.9 becomes 10.0, which carries to give 6.0. Keep the trailing zero so the answer still shows 2 sf.',
          },
          {
            label: 'Carry up changes the digit count',
            input: '9.96',
            target: '2 sf',
            output: '10',
            note: 'Round up at the second digit. 9.9 plus 0.1 is 10. The answer reads as 10 to 2 sf, with both digits significant.',
          },
          {
            label: 'Do not chain-round',
            input: '5.4499',
            target: '2 sf',
            output: '5.4',
            note: 'Look only at the third digit, which is 4. Round down. Do not first round the 99 up to 5 and then carry through the rest.',
          },
          {
            label: 'Significant figures and decimal places differ',
            input: '0.0023',
            target: '2 sf',
            output: '0.0023',
            note: 'The number already has exactly 2 significant figures, so no change is needed. Rounding to 2 decimal places would give 0.00 instead, which loses the data entirely.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'psf-worked-1',
      title: 'How many significant figures does 0.0506 have?',
      steps: [
        {
          explanation:
            'Find the first non-zero digit. Reading left to right, the first non-zero digit is 5.',
          maths: '0.0[5]06',
        },
        {
          explanation:
            'Ignore the zeros before that 5. Leading zeros are placeholders, not significant.',
          maths: 'leading zeros: 0.0',
        },
        {
          explanation:
            'Count the digits from the first significant digit onwards: 5, then 0, then 6.',
          maths: '5, 0, 6',
        },
        {
          explanation:
            'The trapped zero counts because it sits between two non-zero digits.',
          maths: 'trapped 0 counts',
        },
        {
          explanation:
            'So 0.0506 has 3 significant figures.',
          maths: '3 sf',
        },
      ],
    },
    {
      id: 'psf-worked-2',
      title: 'Round 4623 to 2 significant figures',
      steps: [
        {
          explanation:
            'Find the first significant digit. The first non-zero digit reading left to right is 4.',
          maths: '[4]623',
        },
        {
          explanation:
            'Identify the second significant digit by counting one place to the right.',
          maths: '4[6]23',
        },
        {
          explanation:
            'Look at the deciding digit, which is the one immediately to the right of the second significant digit.',
          maths: 'deciding digit = 2',
        },
        {
          explanation:
            'Apply the rounding rule. Since 2 is less than 5, round down.',
          maths: '2 < 5, round down',
        },
        {
          explanation:
            'Keep the 4 and 6, then replace the remaining digits with zeros so the answer still has the right place value.',
        },
        {
          explanation:
            'So 4623 rounded to 2 significant figures is 4600.',
          maths: '4623 ≈ 4600 (2 sf)',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'psf-q1',
      type: 'multiple-choice',
      stem: 'How many significant figures does 347 have?',
      tier: 'core',
      options: ['1', '2', '3', '4'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'All non-zero digits are significant.',
    },
    {
      id: 'psf-q2',
      type: 'multiple-choice',
      stem: 'How many significant figures does 0.00347 have?',
      tier: 'core',
      options: ['5', '4', '3', '2'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'psf-mis-leading-zeros',
      hint: 'Zeros before the first non-zero digit are placeholders only.',
    },
    {
      id: 'psf-q3',
      type: 'multiple-choice',
      stem: 'How many significant figures does 5007 have?',
      tier: 'core',
      options: ['2', '3', '4', '5'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'psf-mis-trapped-zeros',
    },
    {
      id: 'psf-q4',
      type: 'multiple-choice',
      stem: 'How many significant figures does 5.00 have?',
      tier: 'core',
      options: ['3', '1', '2', '4'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'psf-mis-trailing-decimal-zeros',
    },
    {
      id: 'psf-q5',
      type: 'numeric-entry',
      stem: 'How many significant figures does 0.0506 have? Enter a whole number.',
      tier: 'core',
      correctAnswer: 3,
      xpValue: 10,
      hint: 'Count from the first non-zero digit. Trapped zeros count.',
    },
    {
      id: 'psf-q6',
      type: 'numeric-entry',
      stem: 'Round 472 to 2 significant figures.',
      tier: 'core',
      correctAnswer: 470,
      xpValue: 10,
      hint: 'The deciding digit is the third one. If it is less than 5, round down.',
    },
    {
      id: 'psf-q7',
      type: 'multiple-choice',
      stem: 'Round 4628 to 2 significant figures. Which is correct?',
      tier: 'core',
      options: ['4700', '4600', '46', '4630'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'psf-mis-truncate-sf',
      hint: 'The deciding digit is the third one in. The trailing zeros hold place value.',
    },
    {
      id: 'psf-q8',
      type: 'numeric-entry',
      stem: 'Round 0.0034567 to 2 significant figures.',
      tier: 'confident',
      correctAnswer: 0.0035,
      xpValue: 15,
      hint: 'The first significant digit is 3. The second is 4. Look at the next digit.',
    },
    {
      id: 'psf-q9',
      type: 'numeric-entry',
      stem: 'Round 4623 to 3 significant figures.',
      tier: 'confident',
      correctAnswer: 4620,
      xpValue: 15,
      hint: 'Find the third significant digit, then look at the next digit.',
    },
    {
      id: 'psf-q10',
      type: 'numeric-entry',
      stem: 'Round 4628 to 3 significant figures.',
      tier: 'confident',
      correctAnswer: 4630,
      xpValue: 15,
      hint: 'The fourth digit is 8, so round the third digit up.',
    },
    {
      id: 'psf-q11',
      type: 'multiple-choice',
      stem: 'Round 0.04085 to 2 significant figures. Which is correct?',
      tier: 'confident',
      options: ['0.04', '0.041', '0.0408', '0.0409'],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'psf-mis-confuse-sf-dp',
      hint: 'Leading zeros do not count. The first two significant digits are 4 and 0.',
    },
    {
      id: 'psf-q12',
      type: 'multiple-choice',
      stem: 'Round 5.997 to 2 significant figures. Which is correct?',
      tier: 'confident',
      options: ['5.9', '5.99', '6', '6.0'],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'psf-mis-drop-trailing-zero',
      hint: 'A carry up turns 5.99 into 6.00. Keep the trailing zero so the answer still has 2 sf.',
    },
    {
      id: 'psf-q13',
      type: 'spot-misconception',
      stem: 'Hassan rounds 5.4499 to 2 significant figures. He says: round 99 up to 100, so the 4 becomes 5, giving 5.5.',
      tier: 'confident',
      statements: [
        {
          text: 'His method is sound. You round each pair of digits in turn from the right until you reach the cut.',
          isMisconception: true,
        },
        {
          text: 'His method is not sound. Make one rounding decision based on the digit just to the right of the cut. The third digit is 4, so round down to 5.4.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'psf-mis-chain-round',
    },
    {
      id: 'psf-q14',
      type: 'multiple-choice',
      stem: 'Round 9.96 to 2 significant figures. Which is correct?',
      tier: 'confident',
      options: ['9.9', '9.96', '10', '100'],
      correctIndex: 2,
      xpValue: 15,
      hint: 'Round up at the second digit. The carry pushes 9.9 up to 10.',
    },
    {
      id: 'psf-q15',
      type: 'drag-order',
      stem: 'Place these numbers in order of how many significant figures they have, smallest count first.',
      tier: 'confident',
      items: ['0.060', '7.080', '12.305', '0.7'],
      correctOrder: [3, 0, 1, 2],
      xpValue: 15,
      hint: 'Count carefully: 0.7 has 1, 0.060 has 2, 7.080 has 4, and 12.305 has 5.',
    },
    {
      id: 'psf-q16',
      type: 'missing-step',
      stem: 'Fill in the missing step in this worked solution. Round 0.04085 to 2 significant figures.',
      tier: 'challenge',
      steps: [
        'Find the first significant digit. Ignore the leading zeros, so the first significant digit is 4.',
        'Identify the second significant digit, which is the 0 immediately after the 4.',
        null,
        'Apply the rule. The deciding digit is 8, which is 5 or more, so round up.',
        'The 0 in the second significant position becomes 1, giving 0.041.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Look at the deciding digit, which is the one immediately to the right of the second significant digit. The deciding digit is 8.',
      xpValue: 25,
    },
    {
      id: 'psf-q17',
      type: 'multiple-choice',
      stem: 'A scientist measures a chemical sample as 0.04955 grams. She records this to 2 significant figures. What value should she record?',
      tier: 'challenge',
      options: ['0.05', '0.049', '0.050', '0.04'],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'psf-mis-drop-trailing-zero',
      hint: 'The third significant digit is 5, so round up. Keep the trailing zero so the answer still shows 2 sf.',
    },
    {
      id: 'psf-q18',
      type: 'numeric-entry',
      stem: 'A village has 8463 residents. Round this population to 2 significant figures.',
      tier: 'challenge',
      correctAnswer: 8500,
      xpValue: 25,
      hint: 'The deciding digit is the third one. The 6 rounds 4 up to 5.',
    },
    {
      id: 'psf-q19',
      type: 'multiple-choice',
      stem: 'A train travels 247.6 kilometres in one journey and 192.4 kilometres in another. What is the total distance, rounded to 2 significant figures?',
      tier: 'challenge',
      options: ['450 km', '440 km', '400 km', '430 km'],
      correctIndex: 1,
      xpValue: 25,
      hint: 'Add the two distances first, then round the sum.',
    },
    {
      id: 'psf-q20',
      type: 'numeric-entry',
      stem: 'A baker uses 1.245 kilograms of flour for one batch and 0.876 kilograms for another. Round the total to 2 significant figures, in kilograms.',
      tier: 'challenge',
      correctAnswer: 2.1,
      xpValue: 25,
      hint: 'Add the two amounts first to get 2.121 kilograms, then round.',
    },
    {
      id: 'psf-q21',
      type: 'spot-misconception',
      stem: 'A pupil claims 0.00408 has 5 significant figures because it has 5 digits after the decimal point.',
      tier: 'challenge',
      statements: [
        {
          text: 'The pupil is right. Every digit after a decimal point counts as significant.',
          isMisconception: true,
        },
        {
          text: 'The pupil is wrong. Leading zeros are placeholders, so only the 4, the trapped 0, and the 8 count. The number has 3 significant figures.',
          isMisconception: false,
        },
      ],
      xpValue: 25,
      misconceptionId: 'psf-mis-leading-zeros',
    },
  ],
  misconceptions: [
    // Source: CGP KS3 Maths Study Guide p.10 Common mistake box on significant figures
    {
      id: 'psf-mis-leading-zeros',
      description:
        'Believing that zeros at the front of a small decimal count as significant figures, so reading 0.00347 as having 5 significant figures.',
      triggerAnswer: 'leading-zeros-count',
      correction:
        'In fact, leading zeros are only placeholders. They mark the place value but do not count as significant figures.',
      reExplanation:
        'In 0.00347 the first non-zero digit is 3. Counting from there gives 3, 4, and 7, so the number has 3 significant figures. The two zeros at the front simply tell us that 3 sits in the thousandths column.',
    },
    // Source: AQA GCSE Maths Foundation tier examiner report November 2021, Paper 1 Q2
    {
      id: 'psf-mis-trapped-zeros',
      description:
        'Skipping zeros that sit between non-zero digits when counting significant figures, so reading 5007 as having 2 significant figures.',
      triggerAnswer: 'skip-trapped-zeros',
      correction:
        'In fact, zeros trapped between non-zero digits always count. They cannot be ignored when counting significant figures.',
      reExplanation:
        'In 5007 the digits 5 and 7 are non-zero. The two zeros sit between them, so they hold real place value. Count every digit from the first significant one to the last, giving 4 significant figures.',
    },
    // Source: Edexcel GCSE Maths examiner report June 2022, Paper 1F Q4
    {
      id: 'psf-mis-trailing-decimal-zeros',
      description:
        'Believing that zeros after a decimal point at the end of a number do not count, so reading 5.00 as having only 1 significant figure.',
      triggerAnswer: 'drop-trailing-decimal-zeros',
      correction:
        'In fact, trailing zeros after the decimal point are significant. They show that the value is precise to that place.',
      reExplanation:
        'Writing 5.00 instead of 5 is a deliberate choice. It tells the reader the value is accurate to the hundredths place. So 5.00 has 3 significant figures, while plain 5 has only 1.',
    },
    // Source: CGP KS3 Maths Study Guide p.10 Common mistake box on rounding to sf
    {
      id: 'psf-mis-truncate-sf',
      description:
        'Rounding to a chosen number of significant figures by chopping off the digits without checking the deciding digit.',
      triggerAnswer: 'truncate-sf',
      correction:
        'Rounding is not the same as chopping. You must look at the digit just past the cut and round up if it is 5 or more.',
      reExplanation:
        'For 4628 to 2 sf, the second significant digit is 6. The deciding digit is 2, so round down. The answer is 4600, not the chopped value 46 and not the value 4700 from rounding the wrong digit.',
    },
    // Source: OCR GCSE Maths Foundation tier examiner report June 2023, Paper 1 Q3
    {
      id: 'psf-mis-confuse-sf-dp',
      description:
        'Treating "round to 2 significant figures" as the same as "round to 2 decimal places" and applying the wrong rule.',
      triggerAnswer: 'sf-equals-dp',
      correction:
        'In fact, decimal places count from the decimal point, but significant figures count from the first non-zero digit.',
      reExplanation:
        'For 0.04085 to 2 sf, count from the 4. The first two significant digits are 4 and 0, and the deciding digit is 8, giving 0.041. Rounding to 2 dp would give 0.04 instead, losing accuracy.',
    },
    // Source: AQA GCSE Maths Higher tier examiner report June 2022, Paper 1 Q5
    {
      id: 'psf-mis-chain-round',
      description:
        'Chain-rounding from the right by rounding each pair of digits in turn until reaching the cut, instead of making one decision at the cut.',
      triggerAnswer: 'chain-round',
      correction:
        'In fact, make one rounding decision. Use the single digit immediately to the right of the cut; do not round through the digits past it.',
      reExplanation:
        'For 5.4499 to 2 sf, the third digit is 4. Since 4 is less than 5, round down to 5.4. Chain-rounding 99 up first to inflate the 4 to 5 gives 5.5, which is wrong.',
    },
    // Source: Edexcel GCSE Maths Foundation tier examiner report November 2020, Paper 2F Q6
    {
      id: 'psf-mis-drop-trailing-zero',
      description:
        'Dropping a trailing zero in the answer after rounding, so writing 5.997 to 2 sf as 6 instead of 6.0.',
      triggerAnswer: 'drop-trailing-zero',
      correction:
        'In fact, keep the trailing zero so the answer still shows the correct number of significant figures.',
      reExplanation:
        'Rounding 5.997 to 2 sf gives 6.0. The trailing zero is needed to show two significant digits. Writing just 6 has only 1 significant figure, which is the wrong level of accuracy.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const placeValueSignificantFiguresZoneNodes = [placeValueSignificantFigures]
