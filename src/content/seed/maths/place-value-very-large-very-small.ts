import type { SkillNode } from '@/types/content'

export const placeValueVeryLargeVerySmall: SkillNode = {
  id: 'maths-place-value-very-large-very-small',
  title: 'Very Large and Very Small Numbers',
  description:
    'Read, write, compare and order whole numbers up to billions and decimals down to millionths. Use UK place value language for very large quantities (populations, distances) and very small quantities (atomic radii, virus diameters).',
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
      aqa: 'N1.1 Place value with numbers up to billions and decimals to thousandths',
      edexcel: 'N2 Read, write and compare numbers up to one billion, and decimals to thousandths',
      ocr: '1.01a Place value across large and small numbers',
    },
  },
  scenes: [
    {
      id: 'pvl-scene-extending-up',
      title: 'Extending the Chart Up to Billions',
      type: 'simulation',
      instructions:
        'Look at how the place value chart keeps stretching to the left in groups of three columns. After thousands come ten thousands, hundred thousands and millions; after millions come ten millions, hundred millions and billions. In modern UK use, one billion means one thousand million, written 1,000,000,000 with ten digits.',
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
            digits: '67000000',
            grouped: '67,000,000',
            words: 'Sixty-seven million',
            context: 'About the population of the United Kingdom in the 2021 census.',
          },
          {
            digits: '150000000',
            grouped: '150,000,000',
            words: 'One hundred and fifty million',
            context: 'The average distance from the Earth to the Sun in kilometres.',
          },
          {
            digits: '13800000000',
            grouped: '13,800,000,000',
            words: 'Thirteen billion, eight hundred million',
            context: 'The current best estimate of the age of the universe in years.',
          },
        ],
        callout:
          'A blank column always needs a 0 holding it open. Without those zeros, every digit to the left would slide one column to the right.',
      },
    },
    {
      id: 'pvl-scene-extending-down',
      title: 'Extending the Chart Down to Millionths',
      type: 'simulation',
      instructions:
        'Cross the decimal point and the same pattern continues, but each column to the right is worth one tenth of the one before. The columns read tenths, hundredths, thousandths, ten-thousandths, hundred-thousandths, then millionths. So 0.000006 means six millionths, where the six sits in the seventh decimal column.',
      data: {
        columns: [
          { id: 'O', label: 'Ones', power: 1 },
          { id: 't', label: 'Tenths', power: 0.1 },
          { id: 'h', label: 'Hundredths', power: 0.01 },
          { id: 'th', label: 'Thousandths', power: 0.001 },
          { id: 'tth', label: 'Ten-thousandths', power: 0.0001 },
          { id: 'hth', label: 'Hundred-thousandths', power: 0.00001 },
          { id: 'm', label: 'Millionths', power: 0.000001 },
        ],
        workedNumbers: [
          {
            digits: '0.5',
            words: 'Five tenths',
            note: 'The same value as one half.',
          },
          {
            digits: '0.04',
            words: 'Four hundredths',
            note: 'The 0 in the tenths column keeps the 4 in its proper place.',
          },
          {
            digits: '0.006',
            words: 'Six thousandths',
            note: 'Two zeros sit between the decimal point and the 6.',
          },
          {
            digits: '0.000006',
            words: 'Six millionths',
            note: 'Five zeros now sit between the point and the 6.',
          },
        ],
        callout:
          'Reading 0.75 as "zero point seven five" names each digit in its column. Saying "zero point seventy-five" mixes two columns into one and is not the convention.',
      },
    },
    {
      id: 'pvl-scene-real-world',
      title: 'Real-World Sizes',
      type: 'number-line',
      instructions:
        'Each marker on this stretched number line shows a value from a real measurement, sitting at the right power of ten. The width of one atom (about 0.0000001 metres) sits in the ten-millionths region. The diameter of a virus (about 0.00000003 metres) sits in the hundred-millionths region. The number of stars in our galaxy (about 200,000,000,000) reaches into the hundred billions.',
      data: {
        examples: [
          {
            label: 'Width of one atom',
            value: 0.0000001,
            unit: 'metres',
            words: 'one ten-millionth of a metre',
          },
          {
            label: 'Diameter of a virus particle',
            value: 0.00000003,
            unit: 'metres',
            words: 'three hundred-millionths of a metre',
          },
          {
            label: 'Mass of a 1p coin',
            value: 0.00356,
            unit: 'kilograms',
            words: 'three thousand five hundred and sixty millionths of a kilogram',
          },
          {
            label: 'Population of the United Kingdom',
            value: 67000000,
            unit: 'people',
            words: 'sixty-seven million',
          },
          {
            label: 'Distance from Earth to the Sun',
            value: 150000000,
            unit: 'kilometres',
            words: 'one hundred and fifty million',
          },
          {
            label: 'Age of the universe',
            value: 13800000000,
            unit: 'years',
            words: 'thirteen billion, eight hundred million',
          },
        ],
        callout:
          'The chart stretches over seventeen columns from millionths up to billions. Numbers near the edges are easier to mishear, so writing them in figures with comma groups keeps the place values clear.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'pvl-worked-1',
      title: 'Reading the number 4,070,300,008',
      steps: [
        {
          explanation:
            'Group the digits into threes from the right. This sets up the billions, millions, thousands and ones blocks.',
          maths: '4 | 070 | 300 | 008',
        },
        {
          explanation:
            'Read the leftmost block. The 4 sits in the billions block, so it stands for four billion.',
          maths: '4,000,000,000',
        },
        {
          explanation:
            'Read the next block. The 070 in the millions block means seventy million; the leading zero holds the hundred-millions column open.',
          maths: '70,000,000',
        },
        {
          explanation:
            'Read the next block. The 300 in the thousands block means three hundred thousand.',
          maths: '300,000',
        },
        {
          explanation:
            'Read the rightmost block. The 008 means eight, with two zeros holding the hundreds and tens columns open.',
          maths: '8',
        },
        {
          explanation:
            'Put the four blocks together. The number reads as four billion, seventy million, three hundred thousand, and eight.',
          maths: '4,070,300,008',
        },
      ],
    },
    {
      id: 'pvl-worked-2',
      title: 'Writing "two and four hundred and six millionths" in figures',
      steps: [
        {
          explanation:
            'Read the whole-number part first. The "two and" tells you that the digit before the decimal point is 2.',
          maths: '2.???????',
        },
        {
          explanation:
            'Read the fraction-name suffix. The word "millionths" sets the rightmost column at the sixth decimal place.',
          maths: 'columns: tenths, hundredths, thousandths, ten-thousandths, hundred-thousandths, millionths',
        },
        {
          explanation:
            'Write the named numerator (406) so that its final digit lands in the millionths column. 406 is a three-digit number, so it fills the last three columns from the right.',
          maths: 'columns 4..6 = 4, 0, 6',
        },
        {
          explanation:
            'Fill the remaining decimal columns (tenths, hundredths, thousandths) with zeros to keep the 4, 0 and 6 in their proper places.',
          maths: 'columns 1..3 = 0, 0, 0',
        },
        {
          explanation:
            'Combine the whole-number part, the decimal point and the six decimal columns. The final figure is 2.000406.',
          maths: '2.000406',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pvl-q1',
      type: 'multiple-choice',
      stem: 'In the number 3,250,000,000, what is the value of the digit 3?',
      tier: 'core',
      options: [
        'three billion',
        'three hundred million',
        'three million',
        'three thousand million times ten',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pvl-mis-million-billion-mix',
      hint: 'Group the digits into threes from the right and read the leftmost block.',
    },
    {
      id: 'pvl-q2',
      type: 'multiple-choice',
      stem: 'How is one billion written in figures using the modern UK convention?',
      tier: 'core',
      options: ['1,000,000', '1,000,000,000', '1,000,000,000,000', '1,000,000,000,000,000'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pvl-mis-old-long-scale',
    },
    {
      id: 'pvl-q3',
      type: 'multiple-choice',
      stem: 'What is the value of the digit 7 in 0.0073?',
      tier: 'core',
      options: ['seven tenths', 'seven hundredths', 'seven thousandths', 'seven ten-thousandths'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pvl-mis-decimal-column-name',
      hint: 'Count the columns to the right of the decimal point: tenths, hundredths, thousandths.',
    },
    {
      id: 'pvl-q4',
      type: 'multiple-choice',
      stem: 'Which of these numbers is six millionths?',
      tier: 'core',
      options: ['0.6', '0.0006', '0.000006', '6,000,000'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pvl-mis-decimal-column-name',
    },
    {
      id: 'pvl-q5',
      type: 'multiple-choice',
      stem: 'Which is the correct way to read 0.45 out loud?',
      tier: 'core',
      options: [
        'zero point forty-five',
        'zero point four five',
        'zero point four and a half',
        'four and five tenths',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pvl-mis-read-as-whole',
    },
    {
      id: 'pvl-q6',
      type: 'numeric-entry',
      stem: 'A wildlife reserve records 1,425,000 visits in a year. Write down the value of the digit 4 in this number. Enter the value as a whole number.',
      tier: 'core',
      correctAnswer: 400000,
      xpValue: 10,
      hint: 'The 4 sits in the hundred-thousands column.',
    },
    {
      id: 'pvl-q7',
      type: 'numeric-entry',
      stem: 'How many zeros come between the decimal point and the digit 5 in five thousandths? Enter a whole number.',
      tier: 'core',
      correctAnswer: 2,
      xpValue: 10,
      hint: 'Five thousandths is written 0.005.',
    },
    {
      id: 'pvl-q8',
      type: 'multiple-choice',
      stem: 'Which decimal is the largest?',
      tier: 'confident',
      options: ['0.7', '0.345', '0.68', '0.5'],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'pvl-mis-more-digits-bigger',
      hint: 'Compare the tenths column first, only moving on if the tenths digits are equal.',
    },
    {
      id: 'pvl-q9',
      type: 'multiple-choice',
      stem: 'Which statement about 5.7 and 5.700 is true?',
      tier: 'confident',
      options: [
        '5.700 is one thousand times bigger than 5.7.',
        '5.700 is greater than 5.7 because it has more digits.',
        '5.700 has the same value as 5.7; the trailing zeros only show extra precision.',
        '5.7 is greater than 5.700 because it is shorter.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pvl-mis-trailing-zeros',
    },
    {
      id: 'pvl-q10',
      type: 'multiple-choice',
      stem: 'How is the number "two and forty-five thousandths" written in figures?',
      tier: 'confident',
      options: ['2.45', '2.045', '2.0045', '2.450'],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'pvl-mis-decimal-column-name',
    },
    {
      id: 'pvl-q11',
      type: 'numeric-entry',
      stem: 'A scientist writes the diameter of a small virus as 0.00000003 metres. How many zeros sit between the decimal point and the 3? Enter a whole number.',
      tier: 'confident',
      correctAnswer: 7,
      xpValue: 15,
      hint: 'The 3 sits in the hundred-millionths column, eight columns to the right of the point.',
    },
    {
      id: 'pvl-q12',
      type: 'numeric-entry',
      stem: 'The distance from the Earth to the Sun is about 150 million kilometres. Write this distance as a whole number of kilometres without commas.',
      tier: 'confident',
      correctAnswer: 150000000,
      xpValue: 15,
      hint: 'One million is 1,000,000. One hundred and fifty million is 150 lots of that.',
    },
    {
      id: 'pvl-q13',
      type: 'numeric-entry',
      stem: 'The width of a single atom is about 0.0000001 metres. What is the value of the digit 1 in this measurement, written as a fraction with denominator 10,000,000? Enter just the numerator.',
      tier: 'confident',
      correctAnswer: 1,
      xpValue: 15,
      hint: 'The 1 sits in the ten-millionths column, so its value is one ten-millionth.',
    },
    {
      id: 'pvl-q14',
      type: 'drag-order',
      stem: 'Place these decimals in order from smallest to largest.',
      tier: 'confident',
      items: ['0.7', '0.345', '0.5', '0.68'],
      correctOrder: [1, 2, 3, 0],
      xpValue: 15,
      misconceptionId: 'pvl-mis-more-digits-bigger',
    },
    {
      id: 'pvl-q15',
      type: 'spot-misconception',
      stem: 'A pupil writes that 0.345 is greater than 0.7 because 345 is greater than 7.',
      tier: 'confident',
      statements: [
        {
          text: 'The reasoning is sound. The decimal with more digits after the point is always the larger one.',
          isMisconception: true,
        },
        {
          text: 'The reasoning is faulty. The tenths column decides first: 0.7 has 7 tenths, while 0.345 has only 3 tenths, so 0.7 is larger.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pvl-mis-more-digits-bigger',
    },
    {
      id: 'pvl-q16',
      type: 'multiple-choice',
      stem: 'A UK news report states that a national lottery jackpot is worth two billion, four hundred and fifty million pounds. Which figure matches this?',
      tier: 'challenge',
      options: ['£2,450,000', '£24,500,000', '£245,000,000', '£2,450,000,000'],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'pvl-mis-million-billion-mix',
      hint: 'Two billion alone is 2,000,000,000. Four hundred and fifty million is 450,000,000. Add them.',
    },
    {
      id: 'pvl-q17',
      type: 'multiple-choice',
      stem: 'A laboratory measures three small lengths in metres: A = 0.000045, B = 0.0000006, C = 0.00012. Which list places them in order from smallest to largest?',
      tier: 'challenge',
      options: ['A, B, C', 'B, A, C', 'C, A, B', 'B, C, A'],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'pvl-mis-leading-zero-count',
      hint: 'Count the zeros between the decimal point and the first non-zero digit. The most zeros means the smallest value.',
    },
    {
      id: 'pvl-q18',
      type: 'numeric-entry',
      stem: 'A school census in 2024 records that the United Kingdom population is roughly 67 million. The Greater Manchester area holds about 2,900,000 people. How many people, to the nearest million, live outside Greater Manchester?',
      tier: 'challenge',
      correctAnswer: 64000000,
      xpValue: 25,
      hint: 'Subtract 2,900,000 from 67,000,000 first, then round the result to the nearest million.',
    },
    {
      id: 'pvl-q19',
      type: 'spot-misconception',
      stem: 'A pupil sees the figure 1,500,000,000 in a news article and reads it as "one billion, five hundred million", but adds that this means the same as one and a half million million.',
      tier: 'challenge',
      statements: [
        {
          text: 'The first part is correct, but the second part is wrong. In modern UK use, one billion means one thousand million, not one million million.',
          isMisconception: false,
        },
        {
          text: 'Both parts are correct. A billion has always meant a million million in British English, so 1,500,000,000 is one and a half million million.',
          isMisconception: true,
        },
      ],
      xpValue: 25,
      misconceptionId: 'pvl-mis-old-long-scale',
    },
    {
      id: 'pvl-q20',
      type: 'missing-step',
      stem: 'Fill in the missing step in this worked solution. Write "three and seven hundred-thousandths" as a decimal.',
      tier: 'challenge',
      steps: [
        'Read the whole-number part. The "three and" gives the digit 3 before the decimal point.',
        'Identify the rightmost decimal column from the suffix. "Hundred-thousandths" sits five places after the decimal point.',
        null,
        'Fill the four columns between the decimal point and the 7 with zeros to keep the 7 in its proper place.',
        'So the number is 3.00007.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Place the named numerator (7) so that its final digit lands in the hundred-thousandths column, the fifth column after the decimal point.',
      xpValue: 25,
    },
    {
      id: 'pvl-q21',
      type: 'slider-explore',
      stem: 'Set the slider to a number that lies between three thousandths and four thousandths, but is not equal to either boundary.',
      tier: 'challenge',
      min: 0,
      max: 0.01,
      step: 0.0001,
      correctRange: [0.0031, 0.0039],
      label: 'Decimal value',
      xpValue: 25,
      hint: 'Three thousandths is 0.003 and four thousandths is 0.004. Look in the ten-thousandths column for a value strictly between them.',
    },
  ],
  misconceptions: [
    // Source: CGP KS3 Maths Study Guide p.6 Common mistake box on million versus billion
    {
      id: 'pvl-mis-million-billion-mix',
      description:
        'Treating million and billion as interchangeable, or naming a seven-digit number a billion when it is really only in the millions.',
      triggerAnswer: 'million-billion-mix',
      correction:
        'A million has six zeros and ten digits in total when written as one million. A billion has nine zeros and ten digits.',
      reExplanation:
        'In modern UK use, one billion means one thousand million, written 1,000,000,000 with ten digits in total. A figure such as 3,250,000,000 has ten digits, so it is in the billions; the leading 3 is worth three billion. Always count the digits before naming the leading block.',
    },
    // Source: CGP KS3 Maths Workbook p.4 Common mistake box on the long-scale billion
    {
      id: 'pvl-mis-old-long-scale',
      description:
        'Believing that, in British English, one billion means one million million (the old long-scale meaning).',
      triggerAnswer: 'old-long-scale',
      correction:
        'British English now matches American use. One billion means one thousand million, not one million million.',
      reExplanation:
        'The old long-scale meaning of billion was dropped from official UK use in 1974. Today every UK textbook, news article and government report treats one billion as 1,000,000,000, that is one thousand million. So 1,500,000,000 is one and a half billion, never one and a half million million.',
    },
    // Source: AQA GCSE Maths Foundation tier examiner report June 2023, Paper 1F Q2, on naming decimal columns
    {
      id: 'pvl-mis-decimal-column-name',
      description:
        'Naming the wrong decimal column for a digit, often calling thousandths "hundredths" or skipping the ten-thousandths column when reading.',
      triggerAnswer: 'decimal-column-name',
      correction:
        'Count the columns to the right of the decimal point in order: tenths, hundredths, thousandths, ten-thousandths, hundred-thousandths, millionths.',
      reExplanation:
        'In 0.0073 the 7 sits three columns to the right of the decimal point, so it is in the thousandths column. Its value is seven thousandths, which is 7 divided by 1000. Always count columns one at a time rather than guessing from the size of the digit.',
    },
    // Source: CGP KS3 Maths Study Guide p.20 Common mistake box on reading decimals
    {
      id: 'pvl-mis-read-as-whole',
      description:
        'Reading the digits after the decimal point as a single whole number, for example saying "zero point seventy-five" instead of "zero point seven five".',
      triggerAnswer: 'read-as-whole',
      correction:
        'Each digit after the decimal point lives in its own column, so they are read one at a time, not joined into a whole number.',
      reExplanation:
        'The decimal 0.45 is read as "zero point four five". Saying "zero point forty-five" makes it sound like a single two-digit whole number, which mixes the tenths and hundredths columns into one. Reading each digit separately keeps the place values straight.',
    },
    // Source: Bond 11+ Maths Assessment Papers 10-11 Years Book 2 Paper 4 Q6, recurring decimal-comparison trap
    {
      id: 'pvl-mis-more-digits-bigger',
      description:
        'Believing that the decimal with more digits after the point is always the larger one, for example judging 0.345 to be greater than 0.7.',
      triggerAnswer: 'more-digits-bigger',
      correction:
        'For decimals, you compare the tenths column first, then the hundredths, and so on. Number of digits does not decide.',
      reExplanation:
        '0.7 has 7 tenths, while 0.345 has only 3 tenths. The tenths column decides the comparison, so 0.7 is larger even though 0.345 looks longer. Lining the decimal points up underneath each other makes the right column to compare obvious.',
    },
    // Source: Edexcel GCSE Maths examiner report November 2021, Paper 1F Q4, on trailing zeros
    {
      id: 'pvl-mis-trailing-zeros',
      description:
        'Thinking that adding zeros to the end of a decimal makes it bigger, or that 5.7 and 5.700 hold different values.',
      triggerAnswer: 'trailing-zeros',
      correction:
        'A trailing zero after the decimal point fills an empty column. It does not change the value of the number.',
      reExplanation:
        '5.700 splits as 5 ones, 7 tenths, 0 hundredths and 0 thousandths. The two trailing zeros add no value because 0 hundredths is nothing and 0 thousandths is nothing. So 5.7 and 5.700 are the same value; the extra zeros only signal extra precision.',
    },
    // Source: OCR GCSE Maths examiner report June 2022, Paper 1 Q3, on counting leading zeros in small decimals
    {
      id: 'pvl-mis-leading-zero-count',
      description:
        'Miscounting the zeros between the decimal point and the first non-zero digit when comparing very small numbers.',
      triggerAnswer: 'leading-zero-count',
      correction:
        'For small positive decimals, more leading zeros means a smaller value. Count the zeros carefully before comparing.',
      reExplanation:
        '0.000045 has four zeros after the point before the 4, putting the 4 in the hundred-thousandths column. 0.0000006 has six zeros, putting the 6 in the ten-millionths column, which is far smaller. Lining the decimal points up and counting columns avoids confusing the two.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const placeValueVeryLargeVerySmallZoneNodes = [placeValueVeryLargeVerySmall]
