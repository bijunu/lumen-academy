import type { SkillNode } from '@/types/content'

export const decimalPlaceValue: SkillNode = {
  id: 'maths-decimals-place-value',
  title: 'Decimal Place Value',
  description:
    'Read and write decimals up to thousandths, name the place value of each digit after the decimal point, compare and order decimals, and recognise common fraction-decimal equivalents such as 1/2, 1/4, 3/4, 1/10 and 1/100.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-decimals',
  zoneName: 'Decimals',
  tier: 'core',
  prerequisites: [],
  curriculum: {
    ks3Objective:
      'Understand and use place value for decimals, measures and integers of any size.',
    awardingBodies: {
      aqa: 'N2.1 Place value in decimals',
      edexcel: 'N2 Place value and ordering of decimals',
      ocr: '1.01a Place value, including decimals',
    },
  },
  scenes: [
    {
      id: 'dpv-scene-place-value-chart',
      title: 'The Decimal Place Value Chart',
      type: 'diagram',
      instructions:
        'Read the digits of 63.572 from left to right and notice the column each one sits in. The 6 stands for 60, the 3 stands for 3, then to the right of the decimal point the 5 stands for five tenths, the 7 stands for seven hundredths, and the 2 stands for two thousandths. Each step rightwards is ten times smaller.',
      data: {
        number: '63.572',
        columns: [
          { name: 'tens', position: 1, digit: '6', value: 60 },
          { name: 'ones', position: 0, digit: '3', value: 3 },
          { name: 'decimal point', position: null, digit: '.', value: null },
          { name: 'tenths', position: -1, digit: '5', value: 0.5 },
          { name: 'hundredths', position: -2, digit: '7', value: 0.07 },
          { name: 'thousandths', position: -3, digit: '2', value: 0.002 },
        ],
        notes:
          'Each step to the right is ten times smaller. Tenths split a one into ten equal parts, hundredths split a one into a hundred equal parts, and thousandths split a one into a thousand equal parts.',
      },
    },
    {
      id: 'dpv-scene-number-line-zoom',
      title: 'Zoom in on the Number Line',
      type: 'number-line',
      instructions:
        'Look at how the same stretch of the number line looks at different zoom levels. From 0 to 1 the line is split into ten tenths, then zooming on 0.3 to 0.4 splits that gap into ten hundredths, and zooming again on 0.34 to 0.35 splits it into ten thousandths. Between any two decimals there are always smaller decimals waiting at a finer scale.',
      data: {
        levels: [
          { range: [0, 1], step: 0.1, label: 'tenths', sampleMarks: [0.3, 0.7] },
          {
            range: [0.3, 0.4],
            step: 0.01,
            label: 'hundredths',
            sampleMarks: [0.34, 0.37],
          },
          {
            range: [0.34, 0.35],
            step: 0.001,
            label: 'thousandths',
            sampleMarks: [0.342, 0.348],
          },
        ],
        notes:
          'Zooming in shows that between any two decimals there are always smaller decimals waiting at a finer scale.',
      },
    },
    {
      id: 'dpv-scene-fraction-decimal',
      title: 'Fraction and Decimal Pairs',
      type: 'fraction-wall',
      instructions:
        'Click each bar to reveal the fraction it shows and the matching decimal written underneath.',
      data: {
        rows: [
          { denominator: 2, colour: '#22C55E', shaded: 1, decimal: '0.5' },
          { denominator: 4, colour: '#A855F7', shaded: 1, decimal: '0.25' },
          { denominator: 4, colour: '#A855F7', shaded: 3, decimal: '0.75' },
          { denominator: 10, colour: '#3B82F6', shaded: 1, decimal: '0.1' },
          { denominator: 10, colour: '#3B82F6', shaded: 3, decimal: '0.3' },
          {
            denominator: 100,
            colour: '#F59E0B',
            shaded: 1,
            decimal: '0.01',
          },
          {
            denominator: 100,
            colour: '#F59E0B',
            shaded: 25,
            decimal: '0.25',
          },
        ],
        equivalentPairs: [
          { fraction: '1/2', decimal: '0.5' },
          { fraction: '1/4', decimal: '0.25' },
          { fraction: '3/4', decimal: '0.75' },
          { fraction: '1/10', decimal: '0.1' },
          { fraction: '1/100', decimal: '0.01' },
        ],
      },
    },
    {
      id: 'dpv-scene-builder',
      title: 'Build a Decimal',
      type: 'simulation',
      instructions:
        'See how the target number 4.083 is built from place-value blocks. There are four ones in the ones column, no tenths, eight hundredths, and three thousandths. The zero in the tenths column is a placeholder: it keeps the other digits in the right place and cannot be left out.',
      data: {
        targetNumber: '4.083',
        availableBlocks: [
          { name: 'tens', value: 10 },
          { name: 'ones', value: 1 },
          { name: 'tenths', value: 0.1 },
          { name: 'hundredths', value: 0.01 },
          { name: 'thousandths', value: 0.001 },
        ],
        notes:
          'A zero in a column is a placeholder. It keeps the other digits in the right place and cannot be left out.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'dpv-worked-1',
      title: 'Reading 4.072 in place value',
      steps: [
        {
          explanation:
            'Look at the number 4.072. The decimal point splits the whole part on the left from the fractional part on the right.',
          maths: '4.072',
        },
        {
          explanation: 'The 4 sits in the ones column, so it stands for 4.',
          maths: '4 = 4',
        },
        {
          explanation:
            'The first digit after the decimal point is in the tenths column. It is a 0, which means there are no tenths.',
          maths: '0 in tenths = 0',
        },
        {
          explanation:
            'The next digit is in the hundredths column. It is a 7, so it stands for seven hundredths.',
          maths: '7 in hundredths = 0.07',
        },
        {
          explanation:
            'The last digit is in the thousandths column. It is a 2, so it stands for two thousandths.',
          maths: '2 in thousandths = 0.002',
        },
        {
          explanation:
            'So 4.072 means 4 ones, 0 tenths, 7 hundredths and 2 thousandths.',
          maths: '4.072 = 4 + 0.07 + 0.002',
        },
      ],
    },
    {
      id: 'dpv-worked-2',
      title: 'Comparing 0.7 and 0.65',
      steps: [
        {
          explanation:
            'We want to decide which is larger, 0.7 or 0.65. A common error is to read 0.65 as larger because it has more digits.',
          maths: '0.7 vs 0.65',
        },
        {
          explanation:
            'Line the numbers up by the decimal point. Add a placeholder zero so both numbers have the same number of decimal places.',
          maths: '0.70\n0.65',
        },
        {
          explanation:
            'Compare the digits column by column from the left. The tenths digit of 0.70 is 7, and the tenths digit of 0.65 is 6.',
          maths: '7 tenths vs 6 tenths',
        },
        {
          explanation:
            'Seven tenths is greater than six tenths, so 0.70 is larger than 0.65.',
          maths: '0.70 > 0.65',
        },
        {
          explanation:
            'Adding the trailing zero to 0.7 did not change its value. So 0.7 is greater than 0.65.',
          maths: '0.7 > 0.65',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'dpv-q1',
      type: 'multiple-choice',
      stem: 'In the number 8.246, which digit is in the hundredths column?',
      tier: 'core',
      options: ['8', '2', '6', '4'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Tenths come first after the decimal point, then hundredths, then thousandths.',
      misconceptionId: 'dpv-mis-column-names',
    },
    {
      id: 'dpv-q2',
      type: 'multiple-choice',
      stem: 'What is the value of the digit 7 in the number 5.179?',
      tier: 'core',
      options: ['7', '0.7', '0.07', '0.007'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'The 7 is the second digit after the decimal point.',
      misconceptionId: 'dpv-mis-column-names',
    },
    {
      id: 'dpv-q3',
      type: 'numeric-entry',
      stem: 'Write 0.4 as a fraction with denominator 10. What is the numerator?',
      tier: 'core',
      correctAnswer: 4,
      xpValue: 10,
      hint: 'The first column after the decimal point is tenths.',
    },
    {
      id: 'dpv-q4',
      type: 'multiple-choice',
      stem: 'Which of these decimals is equal to one half?',
      tier: 'core',
      options: ['0.5', '0.2', '0.25', '0.05'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'dpv-mis-half-as-point-two',
    },
    {
      id: 'dpv-q5',
      type: 'numeric-entry',
      stem: 'How many hundredths are there in 0.4? Write your answer as a whole number.',
      tier: 'core',
      correctAnswer: 40,
      xpValue: 10,
      hint: '0.4 is the same as 0.40. Each tenth is ten hundredths.',
      misconceptionId: 'dpv-mis-trailing-zero',
    },
    {
      id: 'dpv-q6',
      type: 'spot-misconception',
      stem: 'Liam says: "0.65 must be bigger than 0.7 because 65 is bigger than 7."',
      tier: 'core',
      statements: [
        {
          text: 'Liam is right. Comparing 65 and 7 tells you which decimal is bigger.',
          isMisconception: true,
        },
        {
          text: 'Compare column by column. 0.7 has 7 tenths, 0.65 has 6 tenths, so 0.7 is bigger.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'dpv-mis-longer-bigger',
    },
    {
      id: 'dpv-q7',
      type: 'slider-explore',
      stem: 'Use the slider to set the marker between 0.34 and 0.35. Which range gives a value between thirty-four hundredths and thirty-five hundredths?',
      tier: 'core',
      min: 0.3,
      max: 0.4,
      step: 0.001,
      correctRange: [0.34, 0.35],
      label: 'Slider value',
      xpValue: 15,
      hint: 'Between 0.34 and 0.35 lie all the thousandths from 0.341 to 0.349.',
    },
    {
      id: 'dpv-q8',
      type: 'numeric-entry',
      stem: 'Write the number that has 3 ones, 0 tenths, 8 hundredths and 5 thousandths. Enter the decimal as you would write it.',
      tier: 'core',
      correctAnswer: 3.085,
      tolerance: 0.0005,
      xpValue: 10,
      hint: 'Use a zero in the tenths column as a placeholder.',
      misconceptionId: 'dpv-mis-missing-placeholder',
    },
    {
      id: 'dpv-q9',
      type: 'multiple-choice',
      stem: 'Which decimal is equivalent to the fraction 3/4?',
      tier: 'confident',
      options: ['0.34', '0.43', '0.75', '0.7'],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'dpv-mis-fraction-as-digits',
    },
    {
      id: 'dpv-q10',
      type: 'multiple-choice',
      stem: 'Which list shows 0.6, 0.06, 0.66 and 0.606 in order from smallest to largest?',
      tier: 'confident',
      options: [
        '0.06, 0.6, 0.606, 0.66',
        '0.06, 0.6, 0.66, 0.606',
        '0.6, 0.06, 0.606, 0.66',
        '0.06, 0.606, 0.6, 0.66',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'dpv-mis-longer-bigger',
    },
    {
      id: 'dpv-q11',
      type: 'numeric-entry',
      stem: 'Write 7/100 as a decimal.',
      tier: 'confident',
      correctAnswer: 0.07,
      tolerance: 0.0005,
      xpValue: 15,
      hint: 'Hundredths are the second column after the decimal point. You may need a placeholder zero.',
    },
    {
      id: 'dpv-q12',
      type: 'numeric-entry',
      stem: 'A bottle holds 1.250 litres of water. What is this in litres, written without trailing zeros?',
      tier: 'confident',
      correctAnswer: 1.25,
      tolerance: 0.0005,
      xpValue: 15,
      unit: 'litres',
      hint: 'A trailing zero in a decimal does not change the value.',
      misconceptionId: 'dpv-mis-trailing-zero',
    },
    {
      id: 'dpv-q13',
      type: 'drag-order',
      stem: 'Drag these decimals into order from smallest to largest.',
      tier: 'confident',
      items: ['0.41', '0.4', '0.401', '0.5'],
      correctOrder: [2, 1, 0, 3],
      xpValue: 20,
      misconceptionId: 'dpv-mis-longer-bigger',
    },
    {
      id: 'dpv-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step in this worked solution. Compare 0.8 and 0.79 and decide which is larger.',
      tier: 'confident',
      steps: [
        'Line up the two decimals by the decimal point.',
        'Add a trailing zero to 0.8 so both numbers show hundredths: 0.80 and 0.79.',
        null,
        'Eight tenths is greater than seven tenths, so 0.80 is greater than 0.79.',
        'So 0.8 is greater than 0.79.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Compare the tenths digits. The tenths digit of 0.80 is 8, and the tenths digit of 0.79 is 7.',
      xpValue: 20,
    },
    {
      id: 'dpv-q15',
      type: 'multiple-choice',
      stem: 'A pupil writes 0.05 and says it is the same as 0.5 because both have a 5 after the decimal point. Why is this wrong?',
      tier: 'confident',
      options: [
        'It is not wrong; both are five tenths.',
        '0.05 is five hundredths and 0.5 is five tenths, so 0.5 is ten times larger.',
        '0.05 is larger because it has more digits.',
        'Both numbers round to the same value, so they must be equal.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'dpv-mis-missing-placeholder',
    },
    {
      id: 'dpv-q16',
      type: 'spot-misconception',
      stem: 'Aisha writes 0.5 + 0.5 = 0.10 because "five plus five is ten and you put it after the point."',
      tier: 'confident',
      statements: [
        {
          text: 'Aisha is right. Adding the digits after the point gives 10, so the answer is 0.10.',
          isMisconception: true,
        },
        {
          text: 'Each 0.5 is one half, so 0.5 + 0.5 is one whole. The answer is 1, not 0.10.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'dpv-mis-half-as-point-two',
    },
    {
      id: 'dpv-q17',
      type: 'numeric-entry',
      stem: 'A 1 metre ruler is split into 1000 equal millimetres. A pencil measures 0.137 metres. How many millimetres is the pencil?',
      tier: 'challenge',
      correctAnswer: 137,
      xpValue: 25,
      unit: 'mm',
      hint: '0.137 metres means 137 thousandths of a metre, and one thousandth of a metre is 1 mm.',
      misconceptionId: 'dpv-mis-thousandths-as-thousands',
    },
    {
      id: 'dpv-q18',
      type: 'multiple-choice',
      stem: 'A till receipt for a Sevenoaks tuck shop reads three items at GBP 1.05, GBP 1.5 and GBP 1.50. Which two costs are equal?',
      tier: 'challenge',
      options: [
        'GBP 1.05 and GBP 1.5, because both have 1 and 5 in them.',
        'GBP 1.05 and GBP 1.50, because 105 and 150 share the digit 5.',
        'No two of the three are equal.',
        'GBP 1.5 and GBP 1.50, because the trailing zero does not change the value.',
      ],
      correctIndex: 3,
      xpValue: 20,
      misconceptionId: 'dpv-mis-trailing-zero',
    },
    {
      id: 'dpv-q19',
      type: 'multiple-choice',
      stem: 'On a school trip to the Lake District, four pupils record their times in seconds for a 60 metre dash: 9.8, 9.75, 9.785 and 9.08. Whose time is the fastest?',
      tier: 'challenge',
      options: [
        'The pupil with 9.785, because it has the most digits.',
        'The pupil with 9.8, because 8 is the largest digit after the point.',
        'The pupil with 9.08, because 08 is the smallest pair of digits after the point.',
        'The pupil with 9.75, because 9.75 is the smallest of the four.',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'dpv-mis-longer-bigger',
    },
    {
      id: 'dpv-q20',
      type: 'numeric-entry',
      stem: 'Maya buys a ribbon priced at GBP 0.07 per centimetre and needs 1.250 metres of it. The shopkeeper writes the length without trailing zeros. What length, in metres, does the shopkeeper write?',
      tier: 'challenge',
      correctAnswer: 1.25,
      tolerance: 0.0005,
      xpValue: 25,
      unit: 'metres',
      hint: '1.250 has a trailing zero in the thousandths column. Removing it does not change the value.',
      misconceptionId: 'dpv-mis-trailing-zero',
    },
    {
      id: 'dpv-q21',
      type: 'drag-drop-builder',
      stem: 'Build the decimal that has 6 ones, 4 tenths, 0 hundredths and 9 thousandths. Drag the parts into the correct order from left to right.',
      tier: 'challenge',
      parts: ['6', '.', '4', '0', '9'],
      correctArrangement: ['6', '.', '4', '0', '9'],
      xpValue: 25,
      misconceptionId: 'dpv-mis-missing-placeholder',
    },
    {
      id: 'dpv-q22',
      type: 'free-text',
      stem: 'Tom claims that 0.9 is the largest decimal you can write between 0 and 1 with one digit after the decimal point. He then says you cannot write a decimal between 0.9 and 1. Explain in one or two sentences why Tom is wrong, and give one example of a decimal between 0.9 and 1.',
      tier: 'challenge',
      sampleAnswer:
        'Tom is wrong because adding more decimal places gives smaller and smaller steps. For example, 0.95 is between 0.9 and 1, and 0.99 is even closer to 1.',
      keywords: ['hundredths', 'between', '0.95', '0.99', 'thousandths'],
      xpValue: 25,
    },
  ],
  misconceptions: [
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Decimal place value" page; tenths/hundredths/thousandths columns explained with the common slip of mirroring whole-number column names.
    {
      id: 'dpv-mis-column-names',
      description:
        'Reading the columns after the decimal point as ones, tens and hundreds, mirroring the whole number columns.',
      triggerAnswer: 'column-names',
      correction:
        'The columns after the decimal point are tenths, hundredths and thousandths. They get smaller as you move to the right, not larger.',
      reExplanation:
        'Each column to the right of the decimal point is ten times smaller than the one before it. The first column is tenths (one tenth of a one). The second is hundredths. The third is thousandths.',
    },
    // Source: Roche, A. (2005) "Longer is Larger - Or Is It?", Australian Primary Mathematics Classroom 10(3), 11-16; the canonical write-up of the longer-decimal-must-be-larger misconception, also catalogued in NCETM "Misconceptions with the Key Objectives" (Number / Decimals).
    {
      id: 'dpv-mis-longer-bigger',
      description:
        'A decimal with more digits after the decimal point must be larger.',
      triggerAnswer: 'longer-bigger',
      correction:
        'The number of digits after the decimal point does not decide the size. You must compare column by column from the left.',
      reExplanation:
        '0.65 has more digits than 0.7, but 0.7 is larger. Add a placeholder zero to write 0.7 as 0.70, then compare the tenths column. 7 tenths is greater than 6 tenths, so 0.7 is greater than 0.65.',
    },
    // Source: NCETM "Misconceptions with the Key Objectives" reference document (Primary, Number / Decimals), trailing-zero misreading; consistent with Pearson Edexcel GCSE Mathematics 1MA1 Foundation Examiners' Report (June 2023, Paper 1F) commentary on decimal value confusions.
    {
      id: 'dpv-mis-trailing-zero',
      description:
        'A trailing zero at the end of a decimal makes the value larger.',
      triggerAnswer: 'trailing-zero',
      correction:
        'A zero at the end of a decimal does not change the value. 0.5 and 0.50 and 0.500 all stand for the same amount.',
      reExplanation:
        '0.5 means five tenths. 0.50 means five tenths and zero hundredths, which is the same five tenths. The trailing zero is just a placeholder and can be removed.',
    },
    // Source: Hart, K. M. (ed.) (1981) Children's Understanding of Mathematics: 11-16 (CSMS), John Murray; chapter on Fractions documents children writing 3/4 as 0.34 by stacking numerator and denominator after the decimal point.
    {
      id: 'dpv-mis-fraction-as-digits',
      description:
        'Reading 3/4 as the decimal 0.34 by writing 3 then 4 after the decimal point.',
      triggerAnswer: 'fraction-as-digits',
      correction:
        'A fraction is not built by stacking the numerator and denominator after the decimal point. To write a fraction as a decimal, work out how many tenths, hundredths or thousandths it equals.',
      reExplanation:
        '3/4 is three out of four equal parts of one whole. Three quarters of one is 0.75, because each quarter is 25 hundredths. So 3/4 = 0.75, not 0.34.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Decimal place value" page; the placeholder-zero callout that distinguishes 0.5 from 0.05.
    {
      id: 'dpv-mis-missing-placeholder',
      description:
        'Leaving out the placeholder zero so that 0.05 and 0.5 look the same.',
      triggerAnswer: 'missing-placeholder',
      correction:
        'A zero between the decimal point and a non-zero digit is a placeholder. It tells you the column the digit sits in. You cannot leave it out.',
      reExplanation:
        '0.5 means five tenths, but 0.05 means zero tenths and five hundredths. The zero in the tenths column shifts the 5 one column to the right, making 0.05 ten times smaller than 0.5.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023 Foundation tier (Paper 01); recurring fraction-to-decimal recall slip where pupils give 1/2 as 0.2.
    {
      id: 'dpv-mis-half-as-point-two',
      description:
        'Believing that one half is written as 0.2, because 1 divided by 2 looks like the digits 1 and 2.',
      triggerAnswer: 'half-as-point-two',
      correction:
        'In fact one half is 0.5, because splitting one whole into two equal parts gives five tenths in each part. The 2 in the denominator does not appear directly in the decimal.',
      reExplanation:
        'One whole is the same as ten tenths. Half of ten tenths is five tenths, which is 0.5. You can also see it on a number line: 0.5 sits exactly halfway between 0 and 1.',
    },
    // Authored, no external source: classroom-observed Year 7 slip when reading three decimal places aloud
    {
      id: 'dpv-mis-thousandths-as-thousands',
      description:
        'Reading the third digit after the decimal point as thousands rather than thousandths.',
      triggerAnswer: 'thousandths-as-thousands',
      correction:
        'Columns to the right of the decimal point name parts of one, not multiples of one. The third column is thousandths, which means a thousandth of a whole.',
      reExplanation:
        'Compare 4000 and 0.004. The 4 in 4000 stands for four thousand. The 4 in 0.004 stands for four thousandths, which is four out of a thousand equal parts of one. The two values are very different.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const decimalsZoneNodes = [decimalPlaceValue]
