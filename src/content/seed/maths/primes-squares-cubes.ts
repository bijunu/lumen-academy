import type { SkillNode } from '@/types/content'

export const primesSquaresCubes: SkillNode = {
  id: 'maths-primes-squares-cubes',
  title: 'Squares, Cubes, and Their Roots',
  description:
    'Use positive integer powers and recognise their associated real roots. A square (n^2) is n multiplied by itself; a cube (n^3) is n multiplied by itself three times. The square root (sqrt) reverses squaring and the cube root (cbrt) reverses cubing. Memorise the squares to 12 and the cubes to 5, plus the small powers of 2, 3, 4, 5. Estimate roots of any positive number by sandwiching it between known perfect squares or cubes.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-primes',
  zoneName: 'Primes',
  tier: 'confident',
  prerequisites: ['maths-primes-recognising-primes'],
  curriculum: {
    ks3Objective:
      'Use positive integer powers and associated real roots (square, cube and higher), recognise powers of 2, 3, 4, 5; estimate powers and roots of any given positive number.',
    awardingBodies: {
      aqa: 'N6 Use positive integer powers and associated real roots, recognise powers of 2, 3, 4, 5 (GCSE Mathematics 8300)',
      edexcel: 'N6 Use positive integer powers and associated real roots; recognise powers of 2, 3, 4, 5 (GCSE Mathematics 1MA1)',
      ocr: '1.05a Calculate with positive integer powers and exact roots (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'psc-scene-square-grid',
      title: 'Squares Are Square Grids',
      type: 'labelled-diagram',
      instructions:
        'Click on each grid to see why n^2 is called "n squared". A 3 by 3 grid contains 3 x 3 = 9 small squares, so 3^2 = 9. A 5 by 5 grid contains 5 x 5 = 25, so 5^2 = 25. The shape is literally a square, side length n, area n^2. The squares of 1 to 12 give the times-table diagonal: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144. Memorise these; they reappear in area, Pythagoras, and quadratic equations.',
      data: {
        viewBox: '0 0 200 100',
        hotspots: [
          { id: 'psc-h-1sq', x: 8, y: 50, label: '1^2 = 1 (a single cell)', description: 'Side 1, area 1.' },
          { id: 'psc-h-2sq', x: 22, y: 50, label: '2^2 = 4 (a 2 by 2 block)', description: 'Side 2, area 4.' },
          { id: 'psc-h-3sq', x: 38, y: 50, label: '3^2 = 9 (a 3 by 3 block)', description: 'Side 3, area 9.' },
          { id: 'psc-h-5sq', x: 60, y: 50, label: '5^2 = 25 (a 5 by 5 block)', description: 'Side 5, area 25.' },
          { id: 'psc-h-7sq', x: 86, y: 50, label: '7^2 = 49 (a 7 by 7 block)', description: 'Side 7, area 49.' },
          { id: 'psc-h-list', x: 50, y: 95, label: 'Squares of 1 to 12: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144.', description: 'Memorise these; they appear everywhere in KS3 and KS4.' },
        ],
      },
    },
    {
      id: 'psc-scene-cube-stack',
      title: 'Cubes Are Cubic Stacks',
      type: 'labelled-diagram',
      instructions:
        'Click each stack to see why n^3 is called "n cubed". A 2 by 2 by 2 cube contains 2 x 2 x 2 = 8 unit cubes, so 2^3 = 8. A 3 by 3 by 3 cube contains 27 unit cubes, so 3^3 = 27. The shape is a cube, side length n, volume n^3. The cubes of 1 to 5 are 1, 8, 27, 64, 125; also memorise 10^3 = 1000.',
      data: {
        viewBox: '0 0 200 100',
        hotspots: [
          { id: 'psc-h-1cube', x: 8, y: 50, label: '1^3 = 1 (a single unit cube)', description: 'Side 1, volume 1.' },
          { id: 'psc-h-2cube', x: 25, y: 50, label: '2^3 = 8 (eight unit cubes)', description: 'Side 2, volume 8.' },
          { id: 'psc-h-3cube', x: 47, y: 50, label: '3^3 = 27 (twenty-seven unit cubes)', description: 'Side 3, volume 27.' },
          { id: 'psc-h-4cube', x: 72, y: 50, label: '4^3 = 64', description: 'Side 4, volume 64.' },
          { id: 'psc-h-5cube', x: 92, y: 50, label: '5^3 = 125', description: 'Side 5, volume 125.' },
          { id: 'psc-h-list', x: 50, y: 95, label: 'Cubes of 1 to 5: 1, 8, 27, 64, 125. Also 10^3 = 1000.', description: 'These are the cubes Year 7 should know on sight.' },
        ],
      },
    },
    {
      id: 'psc-scene-roots-as-inverses',
      title: 'Roots Reverse Powers',
      type: 'simulation',
      instructions:
        'Watch how a square root undoes squaring and a cube root undoes cubing. The notation sqrt(25) asks: which positive number squared gives 25? Answer 5, because 5^2 = 25. The notation cbrt(64) asks: which number cubed gives 64? Answer 4, because 4^3 = 64. At KS3 the square root symbol means the principal (positive) root only; sqrt(25) = 5, not -5. Roots of perfect squares and cubes are exact whole numbers; other roots fall between two whole numbers and need estimation.',
      data: {
        examples: [
          { input: '5^2', output: '25', inverse: 'sqrt(25) = 5', kind: 'square' },
          { input: '8^2', output: '64', inverse: 'sqrt(64) = 8', kind: 'square' },
          { input: '11^2', output: '121', inverse: 'sqrt(121) = 11', kind: 'square' },
          { input: '4^3', output: '64', inverse: 'cbrt(64) = 4', kind: 'cube' },
          { input: '5^3', output: '125', inverse: 'cbrt(125) = 5', kind: 'cube' },
          { input: '10^3', output: '1000', inverse: 'cbrt(1000) = 10', kind: 'cube' },
        ],
        rule: 'sqrt(n) gives the positive value v such that v^2 = n. cbrt(n) gives v such that v^3 = n.',
      },
    },
    {
      id: 'psc-scene-estimate-root',
      title: 'Estimate a Root by Sandwiching',
      type: 'simulation',
      instructions:
        'See how to estimate sqrt(70) without a calculator. Find the perfect squares either side: 64 = 8^2 and 81 = 9^2. So sqrt(70) lies between 8 and 9. Because 70 is closer to 64 than to 81, sqrt(70) is closer to 8 (the actual value is about 8.37). The same trick works for cube roots: cbrt(50) lies between cbrt(27) = 3 and cbrt(64) = 4, and is closer to 4 (about 3.68).',
      data: {
        examples: [
          { target: 'sqrt(70)', lowerSquare: 64, upperSquare: 81, lowerRoot: 8, upperRoot: 9, nearest: 8, actual: 8.37 },
          { target: 'sqrt(50)', lowerSquare: 49, upperSquare: 64, lowerRoot: 7, upperRoot: 8, nearest: 7, actual: 7.07 },
          { target: 'sqrt(110)', lowerSquare: 100, upperSquare: 121, lowerRoot: 10, upperRoot: 11, nearest: 10, actual: 10.49 },
          { target: 'cbrt(50)', lowerCube: 27, upperCube: 64, lowerRoot: 3, upperRoot: 4, nearest: 4, actual: 3.68 },
        ],
        rule: 'Sandwich the number between the nearest perfect square (or cube). The root sits between the two whole-number roots; pick whichever perfect power is closer for the nearest-integer estimate.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'psc-worked-1',
      title: 'Evaluate 6^2 + cbrt(125)',
      steps: [
        {
          explanation:
            'Read the powers carefully. 6^2 means 6 multiplied by itself, and cbrt(125) asks which number cubed gives 125.',
          maths: '6^2 + cbrt(125)',
        },
        {
          explanation: 'Work out 6^2. Multiply 6 by 6.',
          maths: '6^2 = 6 x 6 = 36',
        },
        {
          explanation: 'Work out cbrt(125). Recall the cubes: 1, 8, 27, 64, 125. So cbrt(125) = 5.',
          maths: 'cbrt(125) = 5',
        },
        {
          explanation: 'Add the two results.',
          maths: '36 + 5 = 41',
        },
        {
          explanation: 'So 6^2 + cbrt(125) = 41.',
          maths: '6^2 + cbrt(125) = 41',
        },
      ],
    },
    {
      id: 'psc-worked-2',
      title: 'Estimate sqrt(90) to the nearest whole number',
      steps: [
        {
          explanation: 'Sandwich 90 between two perfect squares from the memorised list.',
          maths: '81 < 90 < 100',
        },
        {
          explanation: 'Take the square root of each bound. 81 = 9^2 and 100 = 10^2.',
          maths: 'sqrt(81) = 9, sqrt(100) = 10',
        },
        {
          explanation: 'So sqrt(90) sits between 9 and 10.',
          maths: '9 < sqrt(90) < 10',
        },
        {
          explanation: 'Decide which bound 90 is closer to. The midpoint of 81 and 100 is 90.5; 90 falls just below the midpoint.',
          maths: 'midpoint = 90.5; 90 < 90.5',
        },
        {
          explanation: 'So sqrt(90) is closer to 9 than to 10. To the nearest whole number, sqrt(90) is 9. The actual value is about 9.49.',
          maths: 'sqrt(90) ~= 9 (actual 9.49)',
        },
      ],
    },
  ],
  questions: [
    // Core 1 (MCQ): basic square
    {
      id: 'psc-q1',
      type: 'multiple-choice',
      stem: 'What is the value of 5^2?',
      tier: 'core',
      options: ['10', '7', '25', '52'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'psc-mis-square-as-times-two',
      hint: '5^2 means 5 multiplied by itself: 5 x 5 = 25 (NOT 5 x 2 = 10).',
    },
    // Core 2 (MCQ): basic cube
    {
      id: 'psc-q2',
      type: 'multiple-choice',
      stem: 'What is the value of 3^3?',
      tier: 'core',
      options: ['27', '9', '6', '12'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'psc-mis-cube-as-times-three',
      hint: '3^3 means 3 x 3 x 3. First 3 x 3 = 9, then 9 x 3 = 27.',
    },
    // Core 3 (numeric): square root
    {
      id: 'psc-q3',
      type: 'numeric-entry',
      stem: 'What is the value of sqrt(81)?',
      tier: 'core',
      correctAnswer: 9,
      xpValue: 10,
      hint: 'Ask: which positive whole number, multiplied by itself, gives 81? Recall 9 x 9 = 81.',
    },
    // Core 4 (MCQ): power of 2
    {
      id: 'psc-q4',
      type: 'multiple-choice',
      stem: 'What is the value of 2^4?',
      tier: 'core',
      options: ['8', '16', '6', '24'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'psc-mis-power-as-multiply',
      hint: '2^4 means 2 x 2 x 2 x 2. Build up: 2 x 2 = 4, 4 x 2 = 8, 8 x 2 = 16.',
    },
    // Core 5 (numeric): cube root
    {
      id: 'psc-q5',
      type: 'numeric-entry',
      stem: 'What is the value of cbrt(64)?',
      tier: 'core',
      correctAnswer: 4,
      xpValue: 10,
      hint: 'Ask: which whole number cubed gives 64? Recall 4 x 4 x 4 = 64.',
    },
    // Core 6 (MCQ): identify the square
    {
      id: 'psc-q6',
      type: 'multiple-choice',
      stem: 'Which of the following is equal to 7^2?',
      tier: 'core',
      options: ['14', '21', '72', '49'],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'psc-mis-square-as-times-two',
      hint: '7^2 = 7 x 7 = 49 (not 7 x 2 = 14, and not the digits 7 and 2 placed side by side).',
    },
    // Core 7 (spot-misconception): squaring vs doubling
    {
      id: 'psc-q7',
      type: 'spot-misconception',
      stem: 'Daniel writes "6^2 = 12" on his homework.',
      tier: 'core',
      statements: [
        {
          text: 'Daniel is right. The little 2 means double the base, so 6^2 = 6 x 2 = 12.',
          isMisconception: true,
        },
        {
          text: 'In fact the small 2 is an exponent, not a factor. 6^2 means 6 multiplied by itself: 6 x 6 = 36, not 6 x 2 = 12. The base (6) gets repeated; the index (2) counts how many times.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'psc-mis-square-as-times-two',
    },
    // Confident 1 (numeric): estimate sqrt
    {
      id: 'psc-q8',
      type: 'numeric-entry',
      stem: 'Estimate sqrt(70) to the nearest whole number.',
      tier: 'confident',
      correctAnswer: 8,
      xpValue: 15,
      hint: 'Sandwich 70 between perfect squares: 64 = 8^2 and 81 = 9^2. So sqrt(70) is between 8 and 9. Because 70 is closer to 64 than to 81, the answer rounds down to 8.',
    },
    // Confident 2 (MCQ): identify list of first squares
    {
      id: 'psc-q9',
      type: 'multiple-choice',
      stem: 'Which list shows the first four square numbers in order?',
      tier: 'confident',
      options: ['2, 4, 6, 8', '1, 3, 5, 7', '1, 4, 9, 16', '1, 2, 4, 8'],
      correctIndex: 2,
      xpValue: 15,
      hint: 'The first four squares are 1^2, 2^2, 3^2, 4^2 = 1, 4, 9, 16. Doubling the previous number is not the same as squaring the next number.',
    },
    // Confident 3 (numeric): 12 squared
    {
      id: 'psc-q10',
      type: 'numeric-entry',
      stem: 'What is the value of 12^2?',
      tier: 'confident',
      correctAnswer: 144,
      xpValue: 15,
      hint: '12^2 = 12 x 12. Use the times-table fact 12 x 12 = 144 (the last row of the standard 12 by 12 table).',
    },
    // Confident 4 (MCQ): identify powers of 2 list
    {
      id: 'psc-q11',
      type: 'multiple-choice',
      stem: 'Which list shows the first five powers of 2 (starting at 2^1)?',
      tier: 'confident',
      options: ['2, 4, 8, 16, 32', '2, 4, 6, 8, 10', '1, 2, 4, 8, 16', '2, 4, 16, 64, 256'],
      correctIndex: 0,
      xpValue: 15,
      hint: 'Each power of 2 doubles the one before it: 2^1 = 2, 2^2 = 4, 2^3 = 8, 2^4 = 16, 2^5 = 32.',
    },
    // Confident 5 (missing-step): estimate sqrt(50)
    {
      id: 'psc-q12',
      type: 'missing-step',
      stem: 'Fill in the missing step. Bilal estimates sqrt(50) to the nearest whole number.',
      tier: 'confident',
      steps: [
        'Sandwich 50 between perfect squares: 49 < 50 < 64.',
        'Take square roots: sqrt(49) = 7 and sqrt(64) = 8, so sqrt(50) lies between 7 and 8.',
        null,
        'So sqrt(50) is closer to 7 than to 8. To the nearest whole number, sqrt(50) = 7.',
      ],
      missingStepIndex: 2,
      correctStep: 'Compare 50 with the midpoint of 49 and 64 (which is 56.5). Because 50 < 56.5, the value 50 is closer to 49 than to 64.',
      xpValue: 20,
    },
    // Confident 6 (spot-misconception): square root sign
    {
      id: 'psc-q13',
      type: 'spot-misconception',
      stem: 'Sara claims sqrt(36) has two answers, "+6 and -6", because (-6)^2 also equals 36.',
      tier: 'confident',
      statements: [
        {
          text: 'Sara is right. The square root symbol always has a positive and a negative answer, so sqrt(36) = +/- 6.',
          isMisconception: true,
        },
        {
          text: 'In fact at KS3 the square root sign sqrt(n) means the principal (positive) root only. So sqrt(36) = 6. It is true that (-6)^2 = 36, but the symbol sqrt(36) by convention picks out only the positive value.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'psc-mis-root-has-two-values',
    },
    // Confident 7 (drag-order): order powers
    {
      id: 'psc-q14',
      type: 'drag-order',
      stem: 'Drag these values into order from smallest to largest.',
      tier: 'confident',
      items: ['2^5', '3^3', '5^2', '4^2'],
      correctOrder: [3, 2, 0, 1],
      xpValue: 20,
      hint: 'Evaluate each one first: 4^2 = 16, 5^2 = 25, 2^5 = 32, 3^3 = 27. So smallest to largest: 16, 25, 27, 32, that is 4^2, 5^2, 3^3, 2^5.',
    },
    // Confident 8 (numeric): 3^4
    {
      id: 'psc-q15',
      type: 'numeric-entry',
      stem: 'What is the value of 3^4?',
      tier: 'confident',
      correctAnswer: 81,
      xpValue: 15,
      misconceptionId: 'psc-mis-power-as-multiply',
      hint: '3^4 means 3 x 3 x 3 x 3. Build up: 3 x 3 = 9, 9 x 3 = 27, 27 x 3 = 81 (NOT 3 x 4 = 12).',
    },
    // Challenge 1 (MCQ): sandwich a root
    {
      id: 'psc-q16',
      type: 'multiple-choice',
      stem: 'Between which two consecutive whole numbers does sqrt(110) lie?',
      tier: 'challenge',
      options: ['9 and 10', '10 and 11', '11 and 12', '12 and 13'],
      correctIndex: 1,
      xpValue: 25,
      hint: 'Find the perfect squares either side of 110. 100 = 10^2 and 121 = 11^2, and 100 < 110 < 121. So sqrt(110) is between 10 and 11.',
    },
    // Challenge 2 (numeric): cube volume Bond-style word problem
    {
      id: 'psc-q17',
      type: 'numeric-entry',
      stem: 'A cubic display box at the British Museum has a total volume of 216 cubic centimetres. What is the length of one side of the box, in centimetres?',
      tier: 'challenge',
      correctAnswer: 6,
      xpValue: 25,
      hint: 'A cube has volume side^3. So side = cbrt(216). Recall the cubes: 5^3 = 125 and 6^3 = 216. So side = 6 cm.',
    },
    // Challenge 3 (MCQ): identify 4^3 amongst distractors
    {
      id: 'psc-q18',
      type: 'multiple-choice',
      stem: 'Which expression has the same value as 8^2?',
      tier: 'challenge',
      options: ['2^3', '4^2', '2^5', '4^3'],
      correctIndex: 3,
      xpValue: 25,
      hint: '8^2 = 64. Evaluate each option: 2^3 = 8, 4^2 = 16, 2^5 = 32, 4^3 = 64. So 4^3 matches.',
    },
    // Challenge 4 (MCQ): Bond multi-step word problem (square garden)
    {
      id: 'psc-q19',
      type: 'multiple-choice',
      stem: 'A square allotment in Sevenoaks has an area of 169 square metres. The owner builds a 1 metre wide path around its outside. What is the total side length, in metres, of the larger square (allotment plus path on both sides)?',
      tier: 'challenge',
      options: ['14', '13', '15', '26'],
      correctIndex: 2,
      xpValue: 25,
      hint: 'Area 169 means the allotment side is sqrt(169) = 13 m. The path adds 1 m on each side, so 13 + 1 + 1 = 15 m.',
    },
    // Challenge 5 (numeric): sum of a square and a cube
    {
      id: 'psc-q20',
      type: 'numeric-entry',
      stem: 'A puzzle pack contains 11^2 number cards and 4^3 picture cards. How many cards are there altogether?',
      tier: 'challenge',
      correctAnswer: 185,
      xpValue: 25,
      hint: '11^2 = 121 (number cards) and 4^3 = 64 (picture cards). Total = 121 + 64 = 185.',
    },
    // Challenge 6 (MCQ): higher power
    {
      id: 'psc-q21',
      type: 'multiple-choice',
      stem: 'What is the value of 2^10?',
      tier: 'challenge',
      options: ['512', '1024', '20', '256'],
      correctIndex: 1,
      xpValue: 25,
      hint: 'Double from a known value. 2^5 = 32. Then 2^10 = 32 x 32 = 1024 (a useful fact in computing). Note 2 x 10 = 20 is multiplication, not exponentiation.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a powers question where pupils evaluated n^2 as n x 2 instead of n x n.
    {
      id: 'psc-mis-square-as-times-two',
      description:
        'I think n^2 means n multiplied by 2, so I work out 6^2 as 6 x 2 = 12 and 7^2 as 7 x 2 = 14.',
      triggerAnswer: 'square-as-times-two',
      correction:
        'Actually the small 2 is an exponent, not a factor. n^2 means n multiplied BY ITSELF: 6^2 = 6 x 6 = 36, not 6 x 2.',
      reExplanation:
        'Read n^2 as "n squared". The exponent counts how many copies of n are multiplied together. So 6^2 means two copies of 6 multiplied: 6 x 6 = 36. Compare side by side: 6 x 2 = 12 (that is doubling), 6 + 2 = 8 (addition), 6^2 = 36 (squaring). The picture helps: 6^2 is a 6 by 6 grid of unit squares, which contains 36 cells.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 1F (Foundation, Non-calculator), commentary on a cubes question where pupils evaluated n^3 as n x 3 instead of n x n x n.
    {
      id: 'psc-mis-cube-as-times-three',
      description:
        'I think n^3 means n multiplied by 3, so I work out 3^3 as 3 x 3 = 9 or 4^3 as 4 x 3 = 12.',
      triggerAnswer: 'cube-as-times-three',
      correction:
        'In fact n^3 means n multiplied by itself THREE times. So 3^3 = 3 x 3 x 3 = 27 and 4^3 = 4 x 4 x 4 = 64.',
      reExplanation:
        'Read n^3 as "n cubed". Build it up step by step: first n x n, then multiply that result by n again. For 3^3: 3 x 3 = 9, then 9 x 3 = 27. The geometric picture is a cube of side n containing n^3 unit cubes. So 3^3 = 27 unit cubes in a 3 by 3 by 3 stack. Memorise the small cubes: 1, 8, 27, 64, 125 (and 1000).',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Powers and Roots" page, "Common mistake" callout warning that the index is the count of repeated multiplications, not a multiplier.
    {
      id: 'psc-mis-power-as-multiply',
      description:
        'I treat the index in n^k as a multiplier, so 2^4 becomes 2 x 4 = 8 and 3^4 becomes 3 x 4 = 12.',
      triggerAnswer: 'power-as-multiply',
      correction:
        'Actually n^k means n multiplied BY ITSELF k times. So 2^4 = 2 x 2 x 2 x 2 = 16 and 3^4 = 3 x 3 x 3 x 3 = 81.',
      reExplanation:
        'The index k counts the copies of the base n. Build the power up one step at a time. For 2^4: 2 x 2 = 4, then 4 x 2 = 8, then 8 x 2 = 16. For 3^4: 3 x 3 = 9, 9 x 3 = 27, 27 x 3 = 81. The growth is exponential, not linear. Compare 3^4 = 81 with 3 x 4 = 12: very different sizes.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 01 (Foundation, Non-calculator), commentary on a square-root question where pupils gave both +/- values, missing that the radical symbol denotes the principal root at KS3 and GCSE Foundation.
    {
      id: 'psc-mis-root-has-two-values',
      description:
        'I write sqrt(36) as +/- 6 because both 6^2 and (-6)^2 equal 36.',
      triggerAnswer: 'root-has-two-values',
      correction:
        'In fact at KS3 the symbol sqrt(n) refers to the PRINCIPAL (positive) square root only. So sqrt(36) = 6, even though (-6)^2 also equals 36.',
      reExplanation:
        'It is true that two numbers, 6 and -6, both square to 36. But the radical symbol sqrt is defined to pick out only the non-negative answer, by mathematical convention. The two-value answer (+/- 6) belongs in the solution to the equation x^2 = 36. The bare expression sqrt(36) is a single number: 6. KS3 questions almost always want the positive root.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 4 "Number Operations" by Hart, on pupils confusing geometric (n^2) with arithmetic (n/2) language because both use "two".
    {
      id: 'psc-mis-root-as-half',
      description:
        'I think the square root of n is n divided by 2, so sqrt(16) = 8 and sqrt(100) = 50.',
      triggerAnswer: 'root-as-half',
      correction:
        'Actually sqrt(n) is the value v such that v x v = n, not n divided by 2. So sqrt(16) = 4 (because 4 x 4 = 16), not 8.',
      reExplanation:
        'Halving and rooting are different operations. Halving 16 gives 8; squaring 8 gives 64, not 16, so 8 cannot be the square root of 16. The square root of n is the side length of a square with area n. A square of area 16 has side 4 (4 x 4 = 16). A square of area 100 has side 10 (10 x 10 = 100). Always check by squaring your answer.',
    },
    // Source: NCETM Secondary Magazine, Issue 121, article on negative-number misconceptions, citing pupil work that evaluated (-3)^2 as -9, missing that two negatives multiplied give a positive.
    {
      id: 'psc-mis-negative-squared-negative',
      description:
        'I think (-3)^2 = -9, because the minus sign carries through to the answer.',
      triggerAnswer: 'negative-squared-negative',
      correction:
        'In fact (-3)^2 = (-3) x (-3) = +9. A negative times a negative is a positive, so squaring any negative number gives a positive result.',
      reExplanation:
        'Squaring means multiplying a number by itself. (-3) x (-3): the two negative signs cancel, giving +9. Watch the brackets: (-3)^2 = 9 (with brackets, the minus is part of the base), but -3^2 = -(3^2) = -9 (without brackets, only the 3 is squared and the minus is applied after). Brackets matter; always square the whole quantity inside them.',
    },
    // Authored, no external source: classroom-observed slip where pupils confuse "powers of n" (n^k for varying k) with "multiples of n" (n x k for varying k), so they list 3, 6, 9, 12 as "powers of 3".
    {
      id: 'psc-mis-powers-vs-multiples',
      description:
        'I list "powers of 3" as 3, 6, 9, 12, 15 (the 3 times table) instead of 3, 9, 27, 81, 243.',
      triggerAnswer: 'powers-vs-multiples',
      correction:
        'In fact multiples of 3 are 3, 6, 9, 12, ... (add 3 each time). Powers of 3 are 3, 9, 27, 81 (multiply by 3 each time).',
      reExplanation:
        'A multiple of n adds n; a power of n multiplies by n. So multiples grow linearly (3, 6, 9, 12, ...) while powers grow exponentially (3, 9, 27, 81, 243, ...). The first three terms look alike (3 and 9 appear in both), which is why the muddle happens. Always check the rule: are you adding 3 each step (multiple) or multiplying by 3 each step (power)?',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const primesSquaresCubesZoneNodes = [primesSquaresCubes]
