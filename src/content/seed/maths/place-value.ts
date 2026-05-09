import type { SkillNode } from '@/types/content'

export const wholeNumberPlaceValue: SkillNode = {
  id: 'maths-place-value-whole-numbers',
  title: 'Place Value of Whole Numbers',
  description:
    'Read and write whole numbers up to one thousand million, name the place value of each digit, compare and order whole numbers, and round whole numbers to the nearest 10, 100, 1000, 10,000 or larger.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-place-value',
  zoneName: 'Place Value',
  tier: 'core',
  prerequisites: [],
  curriculum: {
    ks3Objective:
      'Understand and use place value for decimals, measures and integers of any size.',
    awardingBodies: {
      aqa: 'N1.1 Place value, ordering and rounding',
      edexcel: 'N2 Order positive and negative integers, decimals and fractions; use the symbols =, not equal, less than, greater than, less than or equal to, greater than or equal to',
      ocr: '2.01a Order positive and negative integers, decimals and fractions',
    },
  },
  scenes: [
    {
      id: 'pv-scene-place-value-chart',
      title: 'The Place Value Chart',
      type: 'simulation',
      instructions:
        'Look at how each digit sits in a named column and reads as a value. The digits 2,407,056 read as two million, four hundred and seven thousand, and fifty-six because the 2 sits in millions, the 4 in hundred thousands, and so on. The grouping commas mark off each three-column block from the right.',
      data: {
        columns: [
          { id: 'B', label: 'Billions', power: 1_000_000_000 },
          { id: 'HM', label: 'Hundred millions', power: 100_000_000 },
          { id: 'TM', label: 'Ten millions', power: 10_000_000 },
          { id: 'M', label: 'Millions', power: 1_000_000 },
          { id: 'HTh', label: 'Hundred thousands', power: 100_000 },
          { id: 'TTh', label: 'Ten thousands', power: 10_000 },
          { id: 'Th', label: 'Thousands', power: 1_000 },
          { id: 'H', label: 'Hundreds', power: 100 },
          { id: 'T', label: 'Tens', power: 10 },
          { id: 'O', label: 'Ones', power: 1 },
        ],
        workedNumbers: [
          {
            digits: '2407056',
            grouped: '2,407,056',
            words: 'Two million, four hundred and seven thousand, and fifty-six',
          },
          {
            digits: '380900014',
            grouped: '380,900,014',
            words: 'Three hundred and eighty million, nine hundred thousand, and fourteen',
          },
          {
            digits: '1000000000',
            grouped: '1,000,000,000',
            words: 'One thousand million, also written as one billion',
          },
        ],
      },
    },
    {
      id: 'pv-scene-digit-shifter',
      title: 'Shift the Digit',
      type: 'simulation',
      instructions:
        'See how the value of a digit changes when it sits in a different column. Shifting the 7 in 2700 from the hundreds column one place to the left into the thousands column makes it worth 7000 instead of 700: ten times as much. Shifting one column to the right makes it worth one tenth as much.',
      data: {
        startNumber: 2700,
        movements: [
          {
            description: 'Move the 7 from hundreds to thousands.',
            before: 2700,
            after: 9700,
            note: 'A digit one column to the left is worth ten times as much.',
          },
          {
            description: 'Move the 7 back from thousands to hundreds.',
            before: 9700,
            after: 2700,
            note: 'A digit one column to the right is worth one tenth as much.',
          },
        ],
        callout:
          'Place value tells you what a digit is worth. The same digit 7 can stand for 7, 70, 700, or 7000 depending on its column.',
      },
    },
    {
      id: 'pv-scene-rounding-line',
      title: 'Rounding on the Number Line',
      type: 'number-line',
      instructions:
        'Look at how each number sits between two rounding boundaries on the line. Rounding 4732 to the nearest thousand, the boundaries are 4000 and 5000 with the midpoint at 4500: 4732 is past 4500 and rounds to 5000. 4350 is below 4500 and rounds to 4000. The convention is that exactly half-way values round up.',
      data: {
        examples: [
          {
            number: 4732,
            roundTo: 1000,
            lower: 4000,
            upper: 5000,
            midpoint: 4500,
            answer: 5000,
            reason: '4732 is past 4500, so it sits closer to 5000.',
          },
          {
            number: 4350,
            roundTo: 1000,
            lower: 4000,
            upper: 5000,
            midpoint: 4500,
            answer: 4000,
            reason: '4350 is below 4500, so it sits closer to 4000.',
          },
          {
            number: 4500,
            roundTo: 1000,
            lower: 4000,
            upper: 5000,
            midpoint: 4500,
            answer: 5000,
            reason: 'Half-way values round up by convention.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'pv-worked-1',
      title: 'Reading the number 36,408,072',
      steps: [
        {
          explanation:
            'Group the digits into threes from the right. This sets up the millions, thousands, and ones blocks.',
          maths: '36 | 408 | 072',
        },
        {
          explanation:
            'Read the leftmost block: 36 in the millions block means thirty-six million.',
          maths: '36,000,000',
        },
        {
          explanation:
            'Read the middle block: 408 in the thousands block means four hundred and eight thousand.',
          maths: '408,000',
        },
        {
          explanation:
            'Read the rightmost block: 072 means seventy-two. The 0 holds the hundreds column open.',
          maths: '72',
        },
        {
          explanation:
            'Put the three blocks together. The number reads as thirty-six million, four hundred and eight thousand, and seventy-two.',
          maths: '36,408,072',
        },
      ],
    },
    {
      id: 'pv-worked-2',
      title: 'Round 5,283,941 to the nearest 10,000',
      steps: [
        {
          explanation:
            'Identify the ten-thousands digit. In 5,283,941 the ten-thousands digit is 8.',
          maths: '5,2[8]3,941',
        },
        {
          explanation:
            'Look at the digit just to the right. The thousands digit is 3, which is the deciding digit.',
          maths: 'deciding digit = 3',
        },
        {
          explanation:
            'Apply the rounding rule. If the deciding digit is 5 or more, round up; if it is 4 or less, round down.',
          maths: '3 < 5, round down',
        },
        {
          explanation:
            'Keep the ten-thousands digit as 8 and replace every digit to its right with 0.',
        },
        {
          explanation:
            'The rounded number is 5,280,000.',
          maths: '5,283,941 ≈ 5,280,000',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pv-q1',
      type: 'multiple-choice',
      stem: 'In the number 47,302, what is the value of the digit 7?',
      tier: 'core',
      options: ['70', '700', '7000', '70,000'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pv-mis-column-name',
      hint: 'Count the columns from the right: ones, tens, hundreds, thousands.',
    },
    {
      id: 'pv-q2',
      type: 'multiple-choice',
      stem: 'How do you write the number "two hundred and six thousand, four hundred and ten" using digits?',
      tier: 'core',
      options: ['260,410', '206,410', '2,006,410', '206,041'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pv-mis-placeholder-zero',
    },
    {
      id: 'pv-q3',
      type: 'multiple-choice',
      stem: 'Which digit is in the ten-thousands column of 814,529?',
      tier: 'core',
      options: ['1', '8', '4', '5'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pv-mis-column-name',
    },
    {
      id: 'pv-q4',
      type: 'numeric-entry',
      stem: 'What is the value of the digit 5 in 4,506,238? Enter the value as a whole number.',
      tier: 'core',
      correctAnswer: 500000,
      xpValue: 10,
      hint: 'The 5 sits in the hundred-thousands column.',
    },
    {
      id: 'pv-q5',
      type: 'multiple-choice',
      stem: 'Which of these is the correct way to write "one hundred thousand and ninety" in digits?',
      tier: 'core',
      options: ['100,9', '109,000', '1,000,090', '100,090'],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'pv-mis-placeholder-zero',
    },
    {
      id: 'pv-q6',
      type: 'numeric-entry',
      stem: 'A football stadium holds 60,704 spectators. What is the value of the 7 in this number?',
      tier: 'core',
      correctAnswer: 700,
      xpValue: 10,
    },
    {
      id: 'pv-q7',
      type: 'drag-order',
      stem: 'Place these whole numbers in order from smallest to largest.',
      tier: 'core',
      items: ['9,981', '10,200', '8,799', '10,020'],
      correctOrder: [2, 0, 3, 1],
      xpValue: 15,
      misconceptionId: 'pv-mis-digit-count',
    },
    {
      id: 'pv-q8',
      type: 'multiple-choice',
      stem: 'Which of these symbols correctly compares 9,876 and 10,005?',
      tier: 'confident',
      options: ['9,876 > 10,005', '9,876 < 10,005', '9,876 = 10,005', '10,005 < 9,876'],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'pv-mis-digit-count',
    },
    {
      id: 'pv-q9',
      type: 'multiple-choice',
      stem: '38,472 rounded to the nearest 100 is what?',
      tier: 'confident',
      options: ['38,400', '38,470', '38,500', '38,000'],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pv-mis-truncate',
    },
    {
      id: 'pv-q10',
      type: 'multiple-choice',
      stem: 'Which of these is the largest number?',
      tier: 'confident',
      options: ['8,940,021', '894,200', '8,094,021', '8,940,210'],
      correctIndex: 3,
      xpValue: 15,
    },
    {
      id: 'pv-q11',
      type: 'numeric-entry',
      stem: 'Round 7,486 to the nearest 1000.',
      tier: 'confident',
      correctAnswer: 7000,
      xpValue: 15,
      hint: 'Look at the hundreds digit. If it is 5 or more, round up.',
    },
    {
      id: 'pv-q12',
      type: 'spot-misconception',
      stem: 'Aisha rounds 4,963 to the nearest 100. She writes 4,900 because she dropped the last two digits. Is her method sound?',
      tier: 'confident',
      statements: [
        {
          text: 'Her method is sound. To round to the nearest 100, you remove the tens and ones digits.',
          isMisconception: true,
        },
        {
          text: 'Her answer is wrong. To round, you look at the tens digit. Here it is 6, so 4,963 rounds up to 5,000.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pv-mis-truncate',
    },
    {
      id: 'pv-q13',
      type: 'numeric-entry',
      stem: 'Round 24,650 to the nearest 100.',
      tier: 'confident',
      correctAnswer: 24700,
      xpValue: 15,
      misconceptionId: 'pv-mis-wrong-column',
      hint: 'The deciding digit is the tens digit.',
    },
    {
      id: 'pv-q14',
      type: 'numeric-entry',
      stem: 'Manchester has a population of about 552,858. What is this rounded to the nearest 10,000?',
      tier: 'confident',
      correctAnswer: 550000,
      xpValue: 15,
      hint: 'The deciding digit is the thousands digit.',
    },
    {
      id: 'pv-q15',
      type: 'slider-explore',
      stem: 'Set the slider to a number that rounds to 50,000 when rounded to the nearest 10,000, but rounds to 45,000 when rounded to the nearest 1000.',
      tier: 'challenge',
      min: 40000,
      max: 55000,
      step: 50,
      correctRange: [45000, 45499],
      label: 'Number value',
      xpValue: 25,
      hint: 'The first rule means the number is at least 45,000 but less than 55,000. The second rule means it is between 44,500 and 45,499. Find a value in both ranges.',
    },
    {
      id: 'pv-q16',
      type: 'missing-step',
      stem: 'Fill in the missing step in this worked solution. Round 1,247,650 to the nearest 100,000.',
      tier: 'challenge',
      steps: [
        'Identify the hundred-thousands digit. In 1,247,650 it is 2.',
        'Look at the digit just to the right of it. The ten-thousands digit is 4.',
        null,
        'Keep the hundred-thousands digit as 2 and replace every digit to its right with 0.',
        'So 1,247,650 rounded to the nearest 100,000 is 1,200,000.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Apply the rounding rule. The deciding digit is 4, which is less than 5, so round down.',
      xpValue: 25,
    },
    {
      id: 'pv-q17',
      type: 'numeric-entry',
      stem: 'A train ticket office sold 8,749 tickets one weekend and 12,386 tickets the next weekend. How many more tickets were sold on the second weekend than the first?',
      tier: 'challenge',
      correctAnswer: 3637,
      xpValue: 25,
      hint: 'Line up the numbers in their place value columns and subtract.',
    },
    {
      id: 'pv-q18',
      type: 'multiple-choice',
      stem: 'A library catalogue shows 1,049,500 borrowed books. A pupil writes "one billion, forty-nine thousand, five hundred". Which statement is correct?',
      tier: 'challenge',
      options: [
        'The pupil has confused million with billion. The number is one million, forty-nine thousand, five hundred.',
        'The pupil is right because both billion and million can be used for any large number.',
        'The number is actually one thousand million, written without commas.',
        'The pupil should have written one hundred million, since the digits stretch that far.',
      ],
      correctIndex: 0,
      xpValue: 20,
      misconceptionId: 'pv-mis-million-billion',
    },
    {
      id: 'pv-q19',
      type: 'spot-misconception',
      stem: 'A pupil reads the number 1234567 by counting digits one at a time and says it is one hundred and twenty-three million, four hundred and fifty-six thousand and seven. Is this method sound?',
      tier: 'challenge',
      statements: [
        {
          text: 'The method is sound, because each digit gets read in turn from left to right.',
          isMisconception: true,
        },
        {
          text: 'The method is not sound. The digits must be grouped into threes from the right first. The correct reading is one million, two hundred and thirty-four thousand, five hundred and sixty-seven.',
          isMisconception: false,
        },
      ],
      xpValue: 25,
      misconceptionId: 'pv-mis-grouping',
    },
    {
      id: 'pv-q20',
      type: 'drag-order',
      stem: 'Place these populations of UK cities in order from smallest to largest.',
      tier: 'challenge',
      items: [
        'Sevenoaks: 30,540',
        'Tunbridge Wells: 59,947',
        'Dover: 41,409',
        'Manchester: 552,858',
      ],
      correctOrder: [0, 2, 1, 3],
      xpValue: 25,
    },
  ],
  misconceptions: [
    // Source: CGP KS3 Maths Study Guide p.6 Common mistake box on naming place value columns
    {
      id: 'pv-mis-column-name',
      description:
        'Mixing up the names of the place value columns, for example calling the ten-thousands column "ten thousands of" or reading the wrong column for a digit.',
      triggerAnswer: 'column-name',
      correction:
        'Count the columns from the right: ones, tens, hundreds, thousands, ten thousands, hundred thousands, then millions. Each column to the left is worth ten times as much.',
      reExplanation:
        'In 47,302 the digit 7 sits three columns from the right, so it is in the thousands column. Its value is 7 lots of 1000, which is 7000. Always count columns from the right rather than naming them by the size of the whole number.',
    },
    // Source: Bond 11+ Maths Assessment Papers 10-11 Years Book 1 Paper 1 Q4, recurring digit-count comparison trap
    {
      id: 'pv-mis-digit-count',
      description:
        'Believing that whichever number has more nines or larger leading digits must be bigger, regardless of how many digits each number has.',
      triggerAnswer: 'digit-count',
      correction:
        'A whole number with more digits is always bigger than one with fewer digits. Count the digits first, then compare column by column.',
      reExplanation:
        '9,876 has 4 digits, but 10,005 has 5 digits. The 5-digit number is in the ten-thousands range, while the 4-digit number is only in the thousands range. So 9,876 is less than 10,005, even though 9 looks larger than 1.',
    },
    // Source: CGP KS3 Maths Study Guide p.10 Common mistake box on rounding
    {
      id: 'pv-mis-truncate',
      description:
        'Rounding by chopping off the trailing digits and replacing them with zeros, without looking at the deciding digit.',
      triggerAnswer: 'truncate',
      correction:
        'Rounding is not the same as truncation. You must look at the digit just to the right of the rounding column and decide whether to round up or down.',
      reExplanation:
        '4,963 rounded to the nearest 100 is not 4,900. The tens digit is 6, which is 5 or more, so the hundreds digit goes up by 1. The correct answer is 5,000. Always check the deciding digit before replacing the rest with zeros.',
    },
    // Source: AQA GCSE Maths Foundation tier examiner report June 2022, Paper 1 Q3
    {
      id: 'pv-mis-wrong-column',
      description:
        'Looking at the wrong digit when rounding, often a digit two or three places away from the rounding column rather than the one immediately to its right.',
      triggerAnswer: 'wrong-column',
      correction:
        'When rounding to a chosen column, the deciding digit is always the one immediately to the right of that column. Underline the rounding column first to keep your eye on the right place.',
      reExplanation:
        'To round 24,650 to the nearest 100, the rounding column is the hundreds (the 6). The deciding digit is the tens (the 5), not the ones. Since 5 rounds up by convention, 24,650 rounds to 24,700.',
    },
    // Source: CGP KS3 Maths Workbook p.4 Common mistake box on millions and billions
    {
      id: 'pv-mis-million-billion',
      description:
        'Using the words million and billion as if they mean the same thing, or naming any seven-digit number a billion.',
      triggerAnswer: 'million-billion',
      correction:
        'A million is 1,000,000 (seven digits). A billion is 1,000,000,000, which is one thousand million (ten digits). The two are not interchangeable.',
      reExplanation:
        '1,049,500 has seven digits, so it is in the millions, not the billions. Reading it as one million, forty-nine thousand, five hundred matches the digit count. A true billion would need ten digits.',
    },
    // Source: Edexcel GCSE Maths examiner report November 2019, Paper 1F Q1, on reading large integers
    {
      id: 'pv-mis-grouping',
      description:
        'Reading a large number by saying its digits left to right without first grouping them into threes from the right.',
      triggerAnswer: 'grouping',
      correction:
        'Always group the digits into threes from the right before reading. Each group of three names a block: millions, then thousands, then ones.',
      reExplanation:
        '1234567 grouped from the right is 1 | 234 | 567. The leftmost block is the millions, so the number reads as one million, two hundred and thirty-four thousand, five hundred and sixty-seven. Counting from the left without grouping gives the wrong block names.',
    },
    // Authored, no external source
    {
      id: 'pv-mis-placeholder-zero',
      description:
        'Forgetting that zeros inside a number hold a column open, so writing or reading the number with the zeros missing.',
      triggerAnswer: 'placeholder-zero',
      correction:
        'A zero inside a number is not optional. It tells you that column is empty, so the digits to its left stay in their proper columns.',
      reExplanation:
        'Two hundred and six thousand, four hundred and ten is written 206,410. Skipping the zero would give 26,410, which is twenty-six thousand, four hundred and ten. The zero in the ten-thousands column keeps 2 in the hundred-thousands column where it belongs.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const placeValueZoneNodes = [wholeNumberPlaceValue]
