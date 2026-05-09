import type { SkillNode } from '@/types/content'

export const findingFactorsAndMultiples: SkillNode = {
  id: 'maths-factors-multiples-finding-factors',
  title: 'Finding Factors and Multiples',
  description:
    'Recognise factors and multiples of a positive whole number. List factor pairs in order using a systematic search. Use the language "is a factor of" and "is a multiple of" to describe how two numbers are related.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-factors-multiples',
  zoneName: 'Factors and Multiples',
  tier: 'core',
  prerequisites: [],
  curriculum: {
    ks3Objective:
      'Use the concepts and vocabulary of prime numbers, factors (or divisors), multiples, common factors, common multiples, highest common factor, lowest common multiple, prime factorisation.',
    awardingBodies: {
      aqa: 'N4 Use the concepts and vocabulary of factors and multiples',
      edexcel: 'N4 Factors, multiples and primes',
      ocr: '2.02a Factors, multiples and primes',
    },
  },
  scenes: [
    {
      id: 'fm-scene-factor-pairs',
      title: 'Factor Pair Finder',
      type: 'simulation',
      instructions:
        'Drag the slider to set a target number, then click the boxes that pair up to make it. Watch how the pairs walk in from the outside.',
      data: {
        startNumber: 24,
        minNumber: 6,
        maxNumber: 60,
        examples: [
          { number: 12, pairs: [[1, 12], [2, 6], [3, 4]] },
          { number: 18, pairs: [[1, 18], [2, 9], [3, 6]] },
          { number: 24, pairs: [[1, 24], [2, 12], [3, 8], [4, 6]] },
          { number: 30, pairs: [[1, 30], [2, 15], [3, 10], [5, 6]] },
        ],
      },
    },
    {
      id: 'fm-scene-multiples-number-line',
      title: 'Multiples on the Number Line',
      type: 'number-line',
      instructions:
        'Click any number to highlight every multiple of it up to 60. Notice how the dots are evenly spaced.',
      data: {
        range: [0, 60],
        choices: [2, 3, 4, 5, 6, 7],
        defaultChoice: 4,
      },
    },
    {
      id: 'fm-scene-factor-vs-multiple',
      title: 'Factor or Multiple?',
      type: 'diagram',
      instructions:
        'Click each number on the left and read the sentence on the right. The same pair tells two stories at once.',
      data: {
        pairs: [
          {
            small: 3,
            large: 12,
            factorSentence: '3 is a factor of 12, because 3 divides 12 exactly.',
            multipleSentence: '12 is a multiple of 3, because 12 is in the 3 times table.',
          },
          {
            small: 5,
            large: 20,
            factorSentence: '5 is a factor of 20, because 5 divides 20 exactly.',
            multipleSentence: '20 is a multiple of 5, because 20 is in the 5 times table.',
          },
          {
            small: 7,
            large: 42,
            factorSentence: '7 is a factor of 42, because 7 divides 42 exactly.',
            multipleSentence: '42 is a multiple of 7, because 42 is in the 7 times table.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'fm-worked-1',
      title: 'List every factor of 24 in order',
      steps: [
        {
          explanation:
            'A factor of 24 is any whole number that divides 24 with no remainder. Start at 1 and walk upwards, writing each pair as you go.',
          maths: '24 = ?',
        },
        {
          explanation: 'Try 1. Since 1 times 24 is 24, the pair is 1 and 24.',
          maths: '1 x 24 = 24',
        },
        {
          explanation: 'Try 2. Since 2 times 12 is 24, the pair is 2 and 12.',
          maths: '2 x 12 = 24',
        },
        {
          explanation: 'Try 3. Since 3 times 8 is 24, the pair is 3 and 8.',
          maths: '3 x 8 = 24',
        },
        {
          explanation:
            'Try 4. Since 4 times 6 is 24, the pair is 4 and 6. Try 5. 24 divided by 5 leaves a remainder, so 5 is not a factor.',
          maths: '4 x 6 = 24',
        },
        {
          explanation:
            'The next number to check is 6, but 6 has already appeared in the pair 4 and 6. That is the signal to stop.',
          maths: 'stop at 4 x 6',
        },
        {
          explanation:
            'Read the pairs from the outside in to write every factor of 24 in order.',
          maths: 'Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24',
        },
      ],
    },
    {
      id: 'fm-worked-2',
      title: 'List the first six multiples of 7',
      steps: [
        {
          explanation:
            'A multiple of 7 is any number you reach by multiplying 7 by a positive whole number. Start at 7 times 1.',
          maths: '7 x 1 = 7',
        },
        {
          explanation: 'Multiply 7 by 2 to find the second multiple.',
          maths: '7 x 2 = 14',
        },
        {
          explanation: 'Multiply 7 by 3 to find the third multiple.',
          maths: '7 x 3 = 21',
        },
        {
          explanation: 'Multiply 7 by 4 to find the fourth multiple.',
          maths: '7 x 4 = 28',
        },
        {
          explanation: 'Multiply 7 by 5 to find the fifth multiple.',
          maths: '7 x 5 = 35',
        },
        {
          explanation:
            'Multiply 7 by 6 to find the sixth multiple. List the answers in order.',
          maths: 'First six multiples of 7: 7, 14, 21, 28, 35, 42',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'fm-q1',
      type: 'multiple-choice',
      stem: 'Which list shows every factor of 12?',
      tier: 'core',
      options: [
        '1, 2, 3, 4, 6, 12',
        '2, 3, 4, 6',
        '1, 2, 3, 4, 5, 6, 12',
        '12, 24, 36, 48',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'Walk from 1 upwards and write the pairs that multiply to 12.',
      misconceptionId: 'fm-mis-skip-one-and-self',
    },
    {
      id: 'fm-q2',
      type: 'multiple-choice',
      stem: 'Which number is a multiple of 6?',
      tier: 'core',
      options: ['16', '26', '42', '52'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Read the 6 times table: 6, 12, 18, 24, 30, 36, 42.',
      misconceptionId: 'fm-mis-multiple-vs-factor',
    },
    {
      id: 'fm-q3',
      type: 'numeric-entry',
      stem: 'How many factors does 18 have in total?',
      tier: 'core',
      correctAnswer: 6,
      xpValue: 10,
      hint: 'List the factor pairs of 18, then count every number that appears.',
    },
    {
      id: 'fm-q4',
      type: 'numeric-entry',
      stem: 'What is the fifth multiple of 8 (counting 8 as the first multiple)?',
      tier: 'core',
      correctAnswer: 40,
      xpValue: 10,
      hint: 'Multiply 8 by 5.',
    },
    {
      id: 'fm-q5',
      type: 'multiple-choice',
      stem: 'Which sentence is true about 9 and 36?',
      tier: 'core',
      options: [
        '36 is a factor of 9.',
        '9 is a factor of 36.',
        '9 is a multiple of 36.',
        '9 and 36 share no relationship.',
      ],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Which one divides into the other with no remainder?',
      misconceptionId: 'fm-mis-language-direction',
    },
    {
      id: 'fm-q6',
      type: 'numeric-entry',
      stem: 'Write down the largest factor of 30 that is less than 30 itself.',
      tier: 'core',
      correctAnswer: 15,
      xpValue: 10,
      hint: 'Pair 30 with the next factor in. 30 = 2 x ?',
    },
    {
      id: 'fm-q7',
      type: 'spot-misconception',
      stem: 'Liam says: "1 cannot be a factor of 15, because 1 is too small to be useful." Is he right?',
      tier: 'core',
      statements: [
        {
          text: 'Liam is right; 1 is too small to count as a factor.',
          isMisconception: true,
        },
        {
          text: '1 is a factor of every whole number, because 1 times any number gives that number back.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fm-mis-skip-one-and-self',
    },
    {
      id: 'fm-q8',
      type: 'drag-order',
      stem: 'Place the factors of 20 in order from smallest to largest.',
      tier: 'confident',
      items: ['10', '4', '20', '1', '5', '2'],
      correctOrder: [3, 5, 1, 4, 0, 2],
      xpValue: 15,
      misconceptionId: 'fm-mis-skip-one-and-self',
    },
    {
      id: 'fm-q9',
      type: 'multiple-choice',
      stem: 'Which of these numbers is NOT a factor of 36?',
      tier: 'confident',
      options: ['4', '6', '8', '9'],
      correctIndex: 2,
      xpValue: 15,
      hint: '36 divided by which number leaves a remainder?',
    },
    {
      id: 'fm-q10',
      type: 'numeric-entry',
      stem: 'A coach in Tunbridge Wells lines up 28 cricketers in equal rows. They want more than one row and more than one player per row. How many factor pairs of 28 satisfy this?',
      tier: 'confident',
      correctAnswer: 2,
      xpValue: 15,
      hint: 'List the factor pairs of 28, then drop the pair that uses 1.',
    },
    {
      id: 'fm-q11',
      type: 'multiple-choice',
      stem: 'Which number is a multiple of both 4 and 6?',
      tier: 'confident',
      options: ['16', '18', '22', '24'],
      correctIndex: 3,
      xpValue: 15,
      hint: 'Find a number that appears in both the 4 and the 6 times tables.',
      misconceptionId: 'fm-mis-add-instead-of-times',
    },
    {
      id: 'fm-q12',
      type: 'missing-step',
      stem: 'Fill in the missing step in this worked solution. List every factor of 40 in order.',
      tier: 'confident',
      steps: [
        'A factor of 40 divides 40 with no remainder.',
        'Walk from 1 upwards. The pairs are 1 and 40, then 2 and 20, then 4 and 10, then 5 and 8.',
        null,
        'Read the pairs from the outside in to list every factor: 1, 2, 4, 5, 8, 10, 20, 40.',
      ],
      missingStepIndex: 2,
      correctStep:
        'The next number to check is 6, but 6 does not divide 40 exactly. The number after that is 7, which also does not divide 40. The check after 8 would be a number already paired, so the search stops.',
      xpValue: 20,
      misconceptionId: 'fm-mis-stop-too-early',
    },
    {
      id: 'fm-q13',
      type: 'numeric-entry',
      stem: 'How many factors does 36 have in total?',
      tier: 'confident',
      correctAnswer: 9,
      xpValue: 15,
      hint: '36 has a square root that is a whole number, so one of its factor pairs has the same number twice.',
      misconceptionId: 'fm-mis-square-double-count',
    },
    {
      id: 'fm-q14',
      type: 'spot-misconception',
      stem: 'Aisha says: "45 is a multiple of 9 and 9 is a factor of 45, so the two sentences mean different things." What do you think?',
      tier: 'confident',
      statements: [
        {
          text: 'Aisha is right; the two sentences describe different relationships.',
          isMisconception: true,
        },
        {
          text: 'The two sentences describe the same relationship from opposite ends. If 9 is a factor of 45, then 45 must be a multiple of 9.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fm-mis-language-direction',
    },
    {
      id: 'fm-q15',
      type: 'drag-drop-builder',
      stem: 'Build a true sentence about 8 and 56 by dragging the parts into the boxes.',
      tier: 'confident',
      parts: ['8', 'is a factor of', '56'],
      correctArrangement: ['8', 'is a factor of', '56'],
      xpValue: 15,
      hint: 'Which one divides the other? The smaller number is the factor.',
      misconceptionId: 'fm-mis-language-direction',
    },
    {
      id: 'fm-q16',
      type: 'multiple-choice',
      stem: 'Which list shows the first four multiples of 9?',
      tier: 'core',
      options: [
        '9, 18, 27, 36',
        '1, 9, 18, 27',
        '0, 9, 18, 27',
        '9, 19, 29, 39',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'Multiples of 9 are 9 times 1, 9 times 2, 9 times 3, 9 times 4.',
      misconceptionId: 'fm-mis-include-zero',
    },
    {
      id: 'fm-q17',
      type: 'numeric-entry',
      stem: 'A baker in Sevenoaks has 48 buns to box. They want each box to hold the same number of buns, with more than one bun per box and more than one box. How many different box sizes are possible?',
      tier: 'challenge',
      correctAnswer: 8,
      xpValue: 25,
      hint: 'Count the factors of 48, then take off the two end factors that would mean one box or one bun per box.',
    },
    {
      id: 'fm-q18',
      type: 'multiple-choice',
      stem: 'A school in Manchester runs a club every 6 days and a separate club every 8 days, both starting on the same Monday. After how many days do both clubs next fall on the same day?',
      tier: 'challenge',
      options: ['14', '24', '48', '72'],
      correctIndex: 1,
      xpValue: 25,
      hint: 'List the multiples of 6 and the multiples of 8, then find the smallest number that appears in both lists.',
      misconceptionId: 'fm-mis-add-instead-of-times',
    },
    {
      id: 'fm-q20',
      type: 'multiple-choice',
      stem: 'A pupil writes that the factors of 49 are 1, 7, 7 and 49, and counts four factors. Why is the count wrong?',
      tier: 'challenge',
      options: [
        'The pupil should also have included 2 and 14.',
        '49 has only the factors 1 and 49.',
        '7 should only be listed once, so 49 has three factors: 1, 7 and 49.',
        '49 is not a square number, so the method does not apply.',
      ],
      correctIndex: 2,
      xpValue: 20,
      hint: '49 = 7 x 7. The factor pair has the same number twice, but the factor itself appears only once in the list.',
      misconceptionId: 'fm-mis-square-double-count',
    },
    {
      id: 'fm-q19',
      type: 'numeric-entry',
      stem: 'Two trains leave Dover at the same time. One returns every 15 minutes and the other every 20 minutes. After how many minutes do they next leave together?',
      tier: 'challenge',
      correctAnswer: 60,
      xpValue: 25,
      hint: 'Write out the multiples of 15 and the multiples of 20. The first match is the answer.',
    },
    {
      id: 'fm-q21',
      type: 'multiple-choice',
      stem: 'A canteen in the Lake District serves jacket potatoes every 4 school days and tomato soup every 6 school days, starting on the same Monday. After 36 school days, how many times have both been served on the same day, including the first Monday?',
      tier: 'challenge',
      options: ['1', '2', '3', '4'],
      correctIndex: 2,
      xpValue: 25,
      hint: 'Find when both menus first match (a multiple of both 4 and 6), then count how many of those days fit in 36, including day 0.',
    },
    {
      id: 'fm-q22',
      type: 'multiple-choice',
      stem: 'A bus fare in Sevenoaks is priced in whole pounds. The fare is a multiple of 4 and also a multiple of 6, and lies between £18 and £30 inclusive. Which fare is correct?',
      tier: 'challenge',
      options: ['£20', '£24', '£28', '£30'],
      correctIndex: 1,
      xpValue: 20,
      hint: 'A common multiple of 4 and 6 must be in both times tables. The smallest is 12. Walk up in steps of 12.',
      misconceptionId: 'fm-mis-add-instead-of-times',
    },
  ],
  misconceptions: [
    // Source: CGP KS3 Maths Study Guide, Common mistake on listing factors (verify page)
    {
      id: 'fm-mis-skip-one-and-self',
      description:
        'When I list factors of a number, I should leave out 1 and the number itself.',
      triggerAnswer: 'skip-one-and-self',
      correction:
        'Every positive whole number has 1 and itself as factors. They must always appear in the list.',
      reExplanation:
        'Factors are numbers that divide a number with no remainder. 1 divides every whole number, and every whole number divides itself, so 1 and the number always belong in the list. The factors of 12 are 1, 2, 3, 4, 6 and 12, all six of them.',
    },
    // Source: AQA GCSE Maths Foundation tier examiner reports, recurring KS2 to KS3 vocabulary error (verify exact year and Q reference)
    {
      id: 'fm-mis-multiple-vs-factor',
      description:
        'A multiple of 6 is a number that goes into 6.',
      triggerAnswer: 'multiple-vs-factor',
      correction:
        'A multiple of 6 is a number you get by multiplying 6 by a whole number. The numbers that go into 6 are its factors.',
      reExplanation:
        'Multiples of 6 are 6, 12, 18, 24, 30 and so on, marching upwards. Factors of 6 are 1, 2, 3 and 6, all sitting at or below 6. The two words point in opposite directions.',
    },
    // Source: Hart, Children's Understanding of Mathematics 11-16 (CSMS), recurring directional confusion in factor and multiple language (verify chapter)
    {
      id: 'fm-mis-language-direction',
      description:
        'If 9 is a factor of 45, then 45 must also be a factor of 9.',
      triggerAnswer: 'language-direction',
      correction:
        'The smaller number is the factor; the larger number is the multiple. The relationship is fixed by which number divides which.',
      reExplanation:
        'If A divides B with no remainder, then A is a factor of B and B is a multiple of A. 9 divides 45, so 9 is a factor of 45 and 45 is a multiple of 9. Saying 45 is a factor of 9 would mean 45 divides 9, which it does not.',
    },
    // Source: CGP KS3 Maths Study Guide, Common mistake on multiples and lowest common multiple (verify page)
    {
      id: 'fm-mis-add-instead-of-times',
      description:
        'A common multiple of 4 and 6 is a number that you can reach by adding 4 and 6 together.',
      triggerAnswer: 'add-instead-of-times',
      correction:
        'A common multiple of 4 and 6 must be in both the 4 times table and the 6 times table. Adding the two numbers gives 10, which is in neither.',
      reExplanation:
        'Multiples of 4 are 4, 8, 12, 16, 20, 24. Multiples of 6 are 6, 12, 18, 24, 30. The numbers in both lists, 12 and 24 so far, are the common multiples. The smallest one, 12, is the lowest common multiple.',
    },
    // Source: Edexcel GCSE Maths examiner observations on factor counting for square numbers (verify report year and Q reference)
    {
      id: 'fm-mis-square-double-count',
      description:
        'When a factor pair has the same number twice (like 6 and 6 for 36), the factor should be written twice in the list.',
      triggerAnswer: 'square-double-count',
      correction:
        'A factor is listed once even if its pair is itself. 36 has the pair 6 and 6, but 6 appears only once in the factor list.',
      reExplanation:
        '36 = 1 x 36, 2 x 18, 3 x 12, 4 x 9, 6 x 6. Reading the pairs from the outside in gives 1, 2, 3, 4, 6, 9, 12, 18, 36. That is nine factors, not ten. Square numbers always have an odd number of factors for this reason.',
    },
    // Source: OCR GCSE Maths examiner observations on multiples lists (verify report year and Q reference)
    {
      id: 'fm-mis-include-zero',
      description:
        'Zero is the first multiple of every number, so a list of multiples should start with 0.',
      triggerAnswer: 'include-zero',
      correction:
        'In school maths, the multiples of a number start at the number itself, not at 0. The first multiple of 9 is 9.',
      reExplanation:
        'Although 0 = 9 x 0 is technically true, KS3 and GCSE work treat the first multiple of 9 as 9, the second as 18, and so on. Starting at 9 keeps lists like "the first four multiples of 9" matching the 9 times table.',
    },
    // Authored, no external source: classroom-observed Year 7 reasoning slip on factor pair stopping rules
    {
      id: 'fm-mis-stop-too-early',
      description:
        'Once I have found three or four factor pairs, I have probably found them all and can stop searching.',
      triggerAnswer: 'stop-too-early',
      correction:
        'Stop only when the next number to test is one you have already listed inside a pair. Otherwise keep walking upwards.',
      reExplanation:
        'For 48, the pairs are 1 and 48, 2 and 24, 3 and 16, 4 and 12, 6 and 8. The next check is 7, which fails, then 8, which is already in the last pair. That is the signal to stop, not the count of pairs found.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const factorsMultiplesZoneNodes = [findingFactorsAndMultiples]
