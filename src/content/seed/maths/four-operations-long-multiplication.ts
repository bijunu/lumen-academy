import type { SkillNode } from '@/types/content'

export const fourOperationsLongMultiplication: SkillNode = {
  id: 'maths-four-operations-long-multiplication',
  title: 'Long Multiplication: Formal Written Method',
  description:
    'Use the formal column method for long multiplication of multi-digit integers, including the placeholder zero on each new row, and extend the method to decimals by multiplying as integers and counting the total decimal places.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-four-operations',
  zoneName: 'Four Operations',
  tier: 'confident',
  prerequisites: ['maths-four-operations-multiply-divide-negatives'],
  curriculum: {
    ks3Objective:
      'Use the four operations, including formal written methods, applied to integers, decimals.',
    awardingBodies: {
      aqa: 'N2 Apply the four operations, including formal written methods, to integers, decimals and simple fractions',
      edexcel: 'N2 The four operations applied to integers and decimals using formal written methods',
      ocr: '1.02a Apply the four operations, including formal written methods, to integers and decimals',
    },
  },
  scenes: [
    {
      id: 'flm-scene-grid-method-bridge',
      title: 'From Grid Method to Columns',
      type: 'diagram',
      instructions:
        'Look at how the grid method splits 347 by 26 into place value parts. Each cell holds a partial product. Adding the cells gives the same total that the column method produces, just laid out in a different shape.',
      data: {
        calculation: '347 × 26',
        rowSplit: ['300', '40', '7'],
        columnSplit: ['20', '6'],
        partialProducts: [
          ['6000', '800', '140'],
          ['1800', '240', '42'],
        ],
        rowTotals: ['6940', '2082'],
        finalTotal: 9022,
        notes:
          'The top row of the grid is 347 multiplied by 20, which equals 6940. The bottom row is 347 multiplied by 6, which equals 2082. The two row totals add to 9022.',
      },
    },
    {
      id: 'flm-scene-column-method',
      title: 'The Column Method for 347 × 26',
      type: 'diagram',
      instructions:
        'Read the column layout in two rows. The first row is 347 multiplied by 6, with carries above the next column. The second row is 347 multiplied by 20, written with a 0 in the units column before the digits of 347 × 2 are placed.',
      data: {
        calculation: '347 × 26',
        firstRow: {
          multiplier: '6',
          working: ['7 × 6 = 42, write 2 carry 4', '4 × 6 = 24 plus 4 = 28, write 8 carry 2', '3 × 6 = 18 plus 2 = 20, write 20'],
          row: '2082',
        },
        secondRow: {
          multiplier: '20',
          placeholder: '0 in the units column, because we are multiplying by 20 not by 2',
          working: ['7 × 2 = 14, write 4 carry 1', '4 × 2 = 8 plus 1 = 9, write 9', '3 × 2 = 6, write 6'],
          row: '6940',
        },
        addition: '2082 + 6940 = 9022',
        finalTotal: 9022,
        notes:
          'The placeholder zero on the second row reminds you that the digits there represent tens, not units. Without it, you would effectively multiply by 2 and lose a factor of 10.',
      },
    },
    {
      id: 'flm-scene-decimal-route',
      title: 'Decimals Through the Integer Route',
      type: 'diagram',
      instructions:
        'Read each example as a three step procedure. First multiply as if both numbers were integers. Then count the total decimal places in the two original factors. Then place the decimal point that many digits from the right of the integer answer.',
      data: {
        examples: [
          {
            calculation: '3.4 × 2.7',
            asIntegers: '34 × 27 = 918',
            decimalPlaces: '1 + 1 = 2',
            answer: '9.18',
          },
          {
            calculation: '0.6 × 1.5',
            asIntegers: '6 × 15 = 90',
            decimalPlaces: '1 + 1 = 2',
            answer: '0.90',
          },
          {
            calculation: '1.23 × 4',
            asIntegers: '123 × 4 = 492',
            decimalPlaces: '2 + 0 = 2',
            answer: '4.92',
          },
          {
            calculation: '0.04 × 0.3',
            asIntegers: '4 × 3 = 12',
            decimalPlaces: '2 + 1 = 3',
            answer: '0.012',
          },
        ],
        sanityCheck:
          '3.4 × 2.7 is roughly 3 × 3 = 9, so 9.18 sits in the right ballpark. Always round each factor and check the order of magnitude.',
        notes:
          'The integer route works because every decimal point shift is just a power of ten. Multiplying 3.4 by 10 and 2.7 by 10 gives 34 × 27, which is 100 times too big, so dividing by 100 at the end places the point two digits from the right.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'flm-worked-1',
      title: 'Long multiplication of 347 × 26 by the column method',
      steps: [
        {
          explanation:
            'We want to compute 347 × 26 using the column method. Stack 347 above 26, with 6 in the units column.',
          maths: '347 × 26',
        },
        {
          explanation:
            'Multiply the units row first. Compute 347 × 6, working right to left and carrying as needed.',
          maths: '347 × 6',
        },
        {
          explanation:
            '7 × 6 = 42. Write 2 in the units column, carry 4 into the tens column.',
          maths: '7 × 6 = 42',
        },
        {
          explanation:
            '4 × 6 = 24, plus the carried 4 gives 28. Write 8 in the tens column, carry 2 into the hundreds column.',
          maths: '4 × 6 + 4 = 28',
        },
        {
          explanation:
            '3 × 6 = 18, plus the carried 2 gives 20. Write 20 to the left, so the first row reads 2082.',
          maths: '3 × 6 + 2 = 20, row = 2082',
        },
        {
          explanation:
            'Now multiply by the tens digit. Place a 0 in the units column of the second row, because 2 here means 20.',
          maths: 'second row begins with 0',
        },
        {
          explanation:
            'Compute 347 × 2, working right to left. 7 × 2 = 14, write 4 carry 1. 4 × 2 = 8 plus 1 = 9. 3 × 2 = 6. The second row reads 6940.',
          maths: '347 × 20 = 6940',
        },
        {
          explanation:
            'Add the two rows in column form. 2082 + 6940 = 9022.',
          maths: '2082 + 6940 = 9022',
        },
        {
          explanation:
            'Sanity check: 347 × 26 is roughly 350 × 25 = 8750, so 9022 is the right order of magnitude.',
          maths: '347 × 26 = 9022',
        },
      ],
    },
    {
      id: 'flm-worked-2',
      title: 'Multiplying decimals 4.6 × 3.2 by the integer route',
      steps: [
        {
          explanation:
            'We want to compute 4.6 × 3.2. Strip the decimal points and treat both factors as integers.',
          maths: '46 × 32',
        },
        {
          explanation:
            'Set out the column method. First row multiplies 46 by 2.',
          maths: '46 × 2',
        },
        {
          explanation:
            '6 × 2 = 12. Write 2, carry 1. 4 × 2 = 8 plus 1 = 9. The first row reads 92.',
          maths: '46 × 2 = 92',
        },
        {
          explanation:
            'Second row multiplies 46 by 30. Place a 0 in the units column first.',
          maths: 'second row begins with 0',
        },
        {
          explanation:
            '6 × 3 = 18. Write 8, carry 1. 4 × 3 = 12 plus 1 = 13. The second row reads 1380.',
          maths: '46 × 30 = 1380',
        },
        {
          explanation: 'Add the two rows. 92 + 1380 = 1472.',
          maths: '92 + 1380 = 1472',
        },
        {
          explanation:
            'Now place the decimal point. Count the total decimal places in the original factors. 4.6 has 1 and 3.2 has 1, giving 2.',
          maths: '1 + 1 = 2 decimal places',
        },
        {
          explanation:
            'Move the point two digits from the right of 1472, giving 14.72.',
          maths: '4.6 × 3.2 = 14.72',
        },
        {
          explanation:
            'Sanity check: 4.6 × 3.2 is roughly 5 × 3 = 15, so 14.72 is in the right ballpark.',
          maths: '4.6 × 3.2 = 14.72',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'flm-q1',
      type: 'numeric-entry',
      stem: 'Compute 234 × 12 using the column method. Enter the answer as a whole number.',
      tier: 'core',
      correctAnswer: 2808,
      xpValue: 10,
      hint: 'First row is 234 × 2. Second row is 234 × 10, so begin with a 0 in the units column.',
      misconceptionId: 'flm-mis-multiply-each-pair-no-carry',
    },
    {
      id: 'flm-q2',
      type: 'multiple-choice',
      stem: 'When you compute 153 × 24 using the column method, what is the second row of working (153 multiplied by the tens digit, with the placeholder zero)?',
      tier: 'core',
      options: ['306', '3060', '612', '6120'],
      correctIndex: 1,
      xpValue: 10,
      hint: '153 × 2 = 306. Because the 2 stands for 20, place a 0 in the units column to get 3060.',
      misconceptionId: 'flm-mis-missing-placeholder-zero',
    },
    {
      id: 'flm-q3',
      type: 'numeric-entry',
      stem: 'Compute 218 × 35. Enter the answer as a whole number.',
      tier: 'core',
      correctAnswer: 7630,
      xpValue: 10,
      hint: 'First row is 218 × 5 = 1090. Second row is 218 × 30 = 6540. Add them.',
    },
    {
      id: 'flm-q4',
      type: 'multiple-choice',
      stem: 'When computing 347 × 6 in column form, the units digit is 7. What digit goes in the units column of the answer, and what is carried into the tens column?',
      tier: 'core',
      options: [
        'Write 2, carry 4',
        'Write 4, carry 2',
        'Write 8, carry 4',
        'Write 6, carry 7',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: '7 × 6 = 42. The 2 stays in the units column and the 4 carries into the tens column.',
      misconceptionId: 'flm-mis-carry-misplaced',
    },
    {
      id: 'flm-q5',
      type: 'numeric-entry',
      stem: 'Compute 462 × 18. Enter the answer as a whole number.',
      tier: 'core',
      correctAnswer: 8316,
      xpValue: 10,
      hint: 'First row is 462 × 8 = 3696. Second row is 462 × 10 = 4620. Add them.',
    },
    {
      id: 'flm-q6',
      type: 'numeric-entry',
      stem: 'Compute 526 × 23. Enter the answer as a whole number.',
      tier: 'core',
      correctAnswer: 12098,
      xpValue: 10,
      hint: 'First row is 526 × 3 = 1578. Second row is 526 × 20 = 10520.',
    },
    {
      id: 'flm-q7',
      type: 'multiple-choice',
      stem: 'A school orders 24 boxes of textbooks. Each box holds 36 books. How many books arrive in total?',
      tier: 'core',
      options: ['60', '720', '864', '960'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Set out 36 × 24 in columns. First row is 36 × 4 = 144. Second row is 36 × 20 = 720.',
    },
    {
      id: 'flm-q8',
      type: 'multiple-choice',
      stem: 'Compute 387 × 46 using the column method. Which is the correct total?',
      tier: 'confident',
      options: ['17802', '4644', '15480', '23220'],
      correctIndex: 0,
      xpValue: 15,
      hint: 'First row is 387 × 6 = 2322. Second row is 387 × 40 = 15480. Add them.',
    },
    {
      id: 'flm-q9',
      type: 'multiple-choice',
      stem: 'A pupil computes 2.4 × 3.5. They multiply 24 × 35 = 840. How should they place the decimal point?',
      tier: 'confident',
      options: [
        '84.0, because each factor has one decimal place so move the point one digit',
        '0.840, because there are two decimal points to deal with',
        '8400, because the decimal points cancel',
        '8.40, because the total decimal places in the factors is 2',
      ],
      correctIndex: 3,
      xpValue: 15,
      hint: 'Add the decimal places in the original factors: 1 + 1 = 2. Place the point two digits from the right of 840.',
      misconceptionId: 'flm-mis-decimal-count-zeros',
    },
    {
      id: 'flm-q10',
      type: 'numeric-entry',
      stem: 'Compute 4.6 × 2.3. Give the answer as a decimal.',
      tier: 'confident',
      correctAnswer: 10.58,
      tolerance: 0.001,
      xpValue: 15,
      hint: 'Treat as 46 × 23 = 1058. Total decimal places: 1 + 1 = 2. Place the point two digits from the right.',
    },
    {
      id: 'flm-q11',
      type: 'multiple-choice',
      stem: 'Compute 6.4 × 1.7. Which is the correct answer?',
      tier: 'core',
      options: ['10.88', '108.8', '1.088', '7.28'],
      correctIndex: 0,
      xpValue: 10,
      hint: 'Treat as 64 × 17 = 1088. Total decimal places: 1 + 1 = 2.',
    },
    {
      id: 'flm-q12',
      type: 'multiple-choice',
      stem: 'A pupil sets out 158 × 23 in columns. They write the first row as 474 (which is 158 × 3) and the second row as 316 (which is 158 × 2, no placeholder). They add to get 790. Spot the error.',
      tier: 'confident',
      options: [
        'They forgot the placeholder 0 on the second row. The second row should be 3160, giving a total of 3634.',
        'There is no error. The total is 790.',
        'They multiplied the first row wrongly. 158 × 3 is 464, not 474.',
        'They should have multiplied 158 by 23 in one go, not split it into two rows.',
      ],
      correctIndex: 0,
      xpValue: 15,
      hint: 'In 23 the 2 stands for 20, so the second row is 158 × 20 = 3160, not 158 × 2 = 316.',
      misconceptionId: 'flm-mis-missing-placeholder-zero',
    },
    {
      id: 'flm-q13',
      type: 'multiple-choice',
      stem: 'Compute 0.45 × 6. Which is the correct answer?',
      tier: 'confident',
      options: ['27', '0.27', '2.7', '0.027'],
      correctIndex: 2,
      xpValue: 15,
      hint: 'Treat as 45 × 6 = 270. Total decimal places: 2 + 0 = 2. So the answer is 2.70, which simplifies to 2.7.',
    },
    {
      id: 'flm-q14',
      type: 'spot-misconception',
      stem: 'Aisha computes 3.4 × 2.5 by lining up the decimal points like an addition. She writes 3.4 above 2.5, multiplies column by column, and gets 8.50.',
      tier: 'confident',
      statements: [
        {
          text: 'Aisha is right. Lining up the decimal points works for both addition and multiplication.',
          isMisconception: true,
        },
        {
          text: 'Aisha is wrong. Lining up decimal points is the rule for addition. For multiplication, treat the factors as integers (34 × 25 = 850) then count total decimal places (2) and place the point.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'flm-mis-line-up-decimals',
    },
    {
      id: 'flm-q15',
      type: 'missing-step',
      stem: 'Fill in the missing step. Compute 245 × 36 using the column method.',
      tier: 'confident',
      steps: [
        'Set out 245 above 36 in columns.',
        'First row: 245 × 6 = 1470.',
        null,
        'Second row: 245 × 3 = 735, so the row reads 7350.',
        'Add the rows: 1470 + 7350 = 8820.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Begin the second row with a placeholder 0 in the units column, because the 3 in 36 stands for 30.',
      xpValue: 20,
    },
    {
      id: 'flm-q16',
      type: 'drag-order',
      stem: 'Place these steps for computing 47 × 23 in the correct order.',
      tier: 'confident',
      items: [
        'Set out 47 above 23 in columns.',
        'Multiply 47 × 3 = 141 for the first row.',
        'Place a 0 in the units column of the second row.',
        'Multiply 47 × 2 = 94, giving the second row 940.',
        'Add 141 + 940 = 1081.',
      ],
      correctOrder: [0, 1, 2, 3, 4],
      xpValue: 15,
      hint: 'Set out, multiply by units, place the placeholder, multiply by tens, then add.',
    },
    {
      id: 'flm-q17',
      type: 'numeric-entry',
      stem: 'A coach hires 28 minibuses for a school trip. Each minibus carries 17 pupils. How many pupils travel in total?',
      tier: 'challenge',
      correctAnswer: 476,
      xpValue: 25,
      unit: 'pupils',
      hint: 'Set out 28 × 17. First row is 28 × 7 = 196. Second row is 28 × 10 = 280. Add them.',
    },
    {
      id: 'flm-q18',
      type: 'missing-step',
      stem: 'Fill in the missing step. A garden centre sells potting compost at GBP 7.45 per sack. A landscaper buys 16 sacks. Find the total cost in pounds.',
      tier: 'challenge',
      steps: [
        'Strip the decimal point and treat 7.45 as 745. Set out 745 × 16 in columns.',
        'First row: 745 × 6 = 4470.',
        'Second row begins with a placeholder 0. Then 745 × 1 = 745, so the row reads 7450.',
        null,
        'Place the decimal point. The original factor 7.45 had 2 decimal places and 16 had none, so move two digits from the right of 11920 to give 119.20 pounds.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Add the two rows: 4470 + 7450 = 11920.',
      xpValue: 25,
    },
    {
      id: 'flm-q19',
      type: 'multiple-choice',
      stem: 'A delivery van travels 38 kilometres each working day across 24 days. Without computing the digits, which estimate is closest to the total distance in kilometres?',
      tier: 'challenge',
      options: ['80', '600', '900', '1500'],
      correctIndex: 2,
      xpValue: 20,
      hint: '38 is roughly 40 and 24 is roughly 25. So 38 × 24 is roughly 40 × 25 = 1000. The closest option is 900.',
    },
    {
      id: 'flm-q20',
      type: 'numeric-entry',
      stem: 'A community hall is fitted with new oak flooring at GBP 32.50 per square metre. The hall covers 18 square metres. What is the total cost in pounds?',
      tier: 'challenge',
      correctAnswer: 585,
      xpValue: 25,
      unit: 'GBP',
      hint: 'Compute 32.50 × 18. Treat as 3250 × 18 = 58500. Total decimal places: 2 + 0 = 2. So the cost is 585.00 pounds.',
    },
    {
      id: 'flm-q21',
      type: 'multiple-choice',
      stem: 'Without working out 528 × 47 in full, estimate the answer to one significant figure for a sense check, then identify the genuine answer from the options.',
      tier: 'challenge',
      options: ['2416', '24816', '2816', '248160'],
      correctIndex: 1,
      xpValue: 25,
      hint: '500 × 50 = 25000, so the answer should be about 25000. Only one option matches that order of magnitude.',
      misconceptionId: 'flm-mis-skip-estimation',
    },
  ],
  misconceptions: [
    // Source: CGP KS3 Maths Study Guide (Years 7-9), Multiplication chapter, "Common mistake" callout on the placeholder zero in long multiplication. Reinforced by AQA GCSE Mathematics 8300 Foundation tier examiner reports across the 2017-2023 series, recurring on items requiring formal long multiplication of two-digit by three-digit integers.
    {
      id: 'flm-mis-missing-placeholder-zero',
      description:
        'Forgetting the placeholder zero on the second row of long multiplication, so the digits for the tens row are written in the units position instead.',
      triggerAnswer: 'missing-placeholder-zero',
      correction:
        'In fact the second row multiplies by tens, not units. Place a 0 in the units column first, so the digits sit one place to the left.',
      reExplanation:
        'For 158 × 23, the second row is 158 × 20, not 158 × 2. Multiplying 158 by 2 gives 316, but 158 × 20 = 3160. The placeholder 0 reminds you that the 2 stands for 20. Without it, the total is too small by a factor of about ten.',
    },
    // Source: Edexcel GCSE Mathematics 1MA1 Foundation tier (Paper 1F) examiner reports across the 2017-2023 series, on items where pupils computed digit pairs without carrying or carried into the wrong column. Reinforced by CGP KS3 Maths Study Guide (Years 7-9), Multiplication chapter, "Common mistake" callout on carries.
    {
      id: 'flm-mis-carry-misplaced',
      description:
        'Writing the full product of two digits in the units column and carrying nothing, or carrying into the wrong column when computing a row.',
      triggerAnswer: 'carry-misplaced',
      correction:
        'In fact only the units digit of each product stays in the column. Anything from the tens place onward carries one column to the left.',
      reExplanation:
        'For 7 × 6 = 42, the 2 belongs in the units column and the 4 carries into the tens column. The next product is then 4 (digit) times 6 plus 4 (the carry). Splitting and carrying keeps every digit in the right place value column.',
    },
    // Source: OCR GCSE Mathematics J560 Foundation tier examiner reports across the 2017-2023 series, on items requiring decimal multiplication where pupils placed the decimal point by counting trailing zeros instead of total decimal places. Reinforced by CGP KS3 Maths Study Guide (Years 7-9), Decimals chapter, "Common mistake" callout on decimal multiplication.
    {
      id: 'flm-mis-decimal-count-zeros',
      description:
        'Placing the decimal point in a decimal multiplication answer by counting zeros or commas instead of counting the total decimal places in the original factors.',
      triggerAnswer: 'decimal-count-zeros',
      correction:
        'In fact you count the total digits after the decimal point in the two factors, then place the point that many digits from the right of the integer answer.',
      reExplanation:
        'For 2.4 × 3.5, treat as 24 × 35 = 840. The factors have one decimal place each, so the total is 2. Move two digits from the right to give 8.40, which is 8.4. Counting zeros instead would give the wrong place for the point.',
    },
    // Source: AQA GCSE Mathematics 8300 Foundation tier examiner reports across the 2017-2023 series, on items where pupils confused the rule for adding and subtracting decimals (line up the decimal points) with the rule for multiplying decimals. Reinforced by CGP KS3 Maths Study Guide (Years 7-9), Decimals chapter, "Common mistake" callout on the wrong rule for the operation.
    {
      id: 'flm-mis-line-up-decimals',
      description:
        'Lining up the decimal points like a column addition when multiplying decimals, then computing as if each column shared a place value.',
      triggerAnswer: 'line-up-decimals',
      correction:
        'In fact lining up decimal points is the rule for addition and subtraction. For multiplication, multiply the factors as integers and place the point afterwards.',
      reExplanation:
        'For 3.4 × 2.5, multiply 34 × 25 = 850 first, then count 1 + 1 = 2 decimal places, giving 8.50. Lining up the points and multiplying column by column gives a layout that does not respect place value, and the answer comes out wrong.',
    },
    // Source: Bell, A. (1986), "Diagnostic teaching: 2 - Developing conflict - discussion lessons", Mathematics Teaching 116, 26-29, on pupils omitting magnitude estimates and accepting answers that are off by a factor of ten or more. Reinforced by Edexcel GCSE Mathematics 1MA1 Foundation tier examiner reports across the 2017-2023 series, recurring across all formal written method items.
    {
      id: 'flm-mis-skip-estimation',
      description:
        'Accepting a long multiplication answer without checking the order of magnitude, so order of ten errors slip through unnoticed.',
      triggerAnswer: 'skip-estimation',
      correction:
        'In fact a quick estimate using rounded factors catches most order of ten slips. Round each factor to one significant figure and compare.',
      reExplanation:
        'For 528 × 47, round to 500 × 50 = 25000. The genuine answer must sit near 25000. Options like 2816 or 248160 fail the sense check. A rough estimate before or after the working filters out the most common slip, which is a missing placeholder zero or a misplaced decimal point.',
    },
    // Source: CGP KS3 Maths Study Guide (Years 7-9), Multiplication chapter, "Common mistake" callout on multiplying digit pairs without carrying. Reinforced by Hart, K.M. ed. (1981), "Children's Understanding of Mathematics 11-16" (CSMS), John Murray, Place Value and Decimals chapter, on the digit-pair fallacy in multi-digit multiplication.
    {
      id: 'flm-mis-multiply-each-pair-no-carry',
      description:
        'Multiplying each pair of digits separately without combining the results into the column structure, so 23 × 14 is treated as 2 × 1, 2 × 4, 3 × 1, 3 × 4 written side by side.',
      triggerAnswer: 'multiply-each-pair-no-carry',
      correction:
        'In fact the column method respects place value. Multiply each digit of one factor by the whole second factor, row by row, with carries.',
      reExplanation:
        'For 23 × 14, the first row is 23 × 4 = 92, with the 6 × 4 = 12 split as 2 carry 1. The second row is 23 × 10 = 230. Add them to get 322. Treating digit pairs as standalone products gives nonsense like 2814 instead of 322.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const fourOperationsLongMultiplicationZoneNodes = [
  fourOperationsLongMultiplication,
]
