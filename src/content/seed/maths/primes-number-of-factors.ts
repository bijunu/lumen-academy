import type { SkillNode } from '@/types/content'

export const primesNumberOfFactors: SkillNode = {
  id: 'maths-primes-number-of-factors',
  title: 'Counting Factors via Prime Factorisation',
  description:
    'Use prime factorisation in index form to count the factors of a positive integer without listing them. If n = p1^a1 x p2^a2 x ... x pk^ak, the number of factors of n is (a1 + 1)(a2 + 1)...(ak + 1). Each factor of n is built by choosing an exponent from 0 to ai for each prime, giving (ai + 1) choices per prime; multiplying the choices counts every factor exactly once. Connect the rule to perfect squares (odd factor count) and use it to design numbers with a target number of factors.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-primes',
  zoneName: 'Primes',
  tier: 'challenge',
  prerequisites: ['maths-primes-prime-factorisation'],
  curriculum: {
    ks3Objective:
      'Use prime factorisation, including using product notation and the unique factorisation property, to derive properties of integers (number of factors).',
    awardingBodies: {
      aqa: 'N4 Use prime factorisation to determine the number of factors of an integer (GCSE Mathematics 8300)',
      edexcel: 'N4 Apply systematic listing strategies, including the use of the product rule for counting and prime factorisation to count factors (GCSE Mathematics 1MA1)',
      ocr: '2.03b Use prime factorisation to determine the number of factors of an integer (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'pnf-scene-list-and-count',
      title: 'List the Factors of Small Numbers',
      type: 'labelled-diagram',
      instructions:
        'Hover each number tile to see its full list of factors and the count. Notice the pattern: 12 has six factors (1, 2, 3, 4, 6, 12); 36 has nine; 16 has five. The count grows in odd jumps for some numbers and even jumps for others. By the end of this node, you will be able to predict the count from the prime factorisation alone, no listing required.',
      data: {
        viewBox: '0 0 240 120',
        hotspots: [
          { id: 'pnf-h-12', x: 20, y: 30, label: '12 has 6 factors', description: 'Factors of 12: 1, 2, 3, 4, 6, 12. Six in total.' },
          { id: 'pnf-h-16', x: 50, y: 30, label: '16 has 5 factors', description: 'Factors of 16: 1, 2, 4, 8, 16. Five in total. Odd count, and 16 is a perfect square.' },
          { id: 'pnf-h-18', x: 80, y: 30, label: '18 has 6 factors', description: 'Factors of 18: 1, 2, 3, 6, 9, 18. Six in total.' },
          { id: 'pnf-h-36', x: 20, y: 70, label: '36 has 9 factors', description: 'Factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36. Nine in total. Odd count, and 36 is a perfect square.' },
          { id: 'pnf-h-100', x: 50, y: 70, label: '100 has 9 factors', description: 'Factors of 100: 1, 2, 4, 5, 10, 20, 25, 50, 100. Nine in total. Odd, and 100 is a perfect square.' },
          { id: 'pnf-h-7', x: 80, y: 70, label: '7 has 2 factors', description: 'Factors of 7: 1, 7. Two in total. Every prime has exactly two factors.' },
        ],
      },
    },
    {
      id: 'pnf-scene-rule-emerges',
      title: 'From Prime Factorisation to Factor Count',
      type: 'simulation',
      instructions:
        'Compare the prime factorisation of each number with its factor count. The rule: take each exponent, add one, then multiply. For 12 = 2^2 x 3^1, that gives (2+1)(1+1) = 6. For 36 = 2^2 x 3^2, (2+1)(2+1) = 9. The +1 represents the choice "use this prime zero times". Add one to every exponent (including hidden ones), then multiply.',
      data: {
        examples: [
          { number: 12, factorisation: '2^2 x 3', exponentsPlusOne: '(2+1)(1+1)', count: 6, factors: '1, 2, 3, 4, 6, 12' },
          { number: 36, factorisation: '2^2 x 3^2', exponentsPlusOne: '(2+1)(2+1)', count: 9, factors: '1, 2, 3, 4, 6, 9, 12, 18, 36' },
          { number: 16, factorisation: '2^4', exponentsPlusOne: '(4+1)', count: 5, factors: '1, 2, 4, 8, 16' },
          { number: 100, factorisation: '2^2 x 5^2', exponentsPlusOne: '(2+1)(2+1)', count: 9, factors: '1, 2, 4, 5, 10, 20, 25, 50, 100' },
          { number: 120, factorisation: '2^3 x 3 x 5', exponentsPlusOne: '(3+1)(1+1)(1+1)', count: 16, factors: '1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 24, 30, 40, 60, 120' },
        ],
        rule: 'Number of factors of n = product of (exponent + 1) over every prime in n. Add 1 first, then multiply.',
      },
    },
    {
      id: 'pnf-scene-why-it-works',
      title: 'Why Add One Then Multiply',
      type: 'simulation',
      instructions:
        'See why the rule works. Every factor of 12 = 2^2 x 3 is built by choosing how many 2s (0, 1, or 2) and how many 3s (0 or 1) to include. Three choices for the 2s; two choices for the 3s. By the product rule for counting, that is 3 x 2 = 6 distinct factors. The "+1" is the option to leave a prime out (exponent zero). The product is the total number of unique combinations.',
      data: {
        prime: 12,
        primes: ['2', '3'],
        choices: { '2': ['2^0 = 1', '2^1 = 2', '2^2 = 4'], '3': ['3^0 = 1', '3^1 = 3'] },
        combinations: [
          { exponent2: 0, exponent3: 0, factor: 1 },
          { exponent2: 1, exponent3: 0, factor: 2 },
          { exponent2: 2, exponent3: 0, factor: 4 },
          { exponent2: 0, exponent3: 1, factor: 3 },
          { exponent2: 1, exponent3: 1, factor: 6 },
          { exponent2: 2, exponent3: 1, factor: 12 },
        ],
        total: '3 x 2 = 6 factors',
        rule: 'For each prime pi^ai, you have (ai + 1) choices: take it 0, 1, ... or ai times. Multiply choices to count factors.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'pnf-worked-1',
      title: 'How many factors does 200 have?',
      steps: [
        {
          explanation: 'Express 200 as a product of prime factors in index notation.',
          maths: '200 = 2^3 x 5^2',
        },
        {
          explanation: 'Read off the exponents: a = 3 for the prime 2, and b = 2 for the prime 5.',
          maths: 'exponents: 3 and 2',
        },
        {
          explanation: 'Add 1 to each exponent.',
          maths: '(3 + 1) and (2 + 1) give 4 and 3',
        },
        {
          explanation: 'Multiply the results to count the factors.',
          maths: '4 x 3 = 12',
        },
        {
          explanation: 'So 200 has exactly 12 factors. Spot-check by listing: 1, 2, 4, 5, 8, 10, 20, 25, 40, 50, 100, 200. That is 12 factors.',
          maths: 'number of factors of 200 = 12',
        },
      ],
    },
    {
      id: 'pnf-worked-2',
      title: 'Find the smallest number with exactly 12 factors',
      steps: [
        {
          explanation: 'Apply the rule in reverse: 12 must factor as a product of (exponent + 1) values. List the ways to write 12: 12; 6 x 2; 4 x 3; 3 x 2 x 2.',
          maths: '12 = 12; 6 x 2; 4 x 3; 3 x 2 x 2',
        },
        {
          explanation: 'Convert each way back to exponents by subtracting 1 from each factor.',
          maths: 'exponent sets: {11}; {5, 1}; {3, 2}; {2, 1, 1}',
        },
        {
          explanation: 'Build a number from each set using the smallest primes (2 first, then 3, then 5...) and assigning the largest exponent to 2.',
          maths: '{11}: 2^11 = 2048. {5, 1}: 2^5 x 3 = 96. {3, 2}: 2^3 x 3^2 = 72. {2, 1, 1}: 2^2 x 3 x 5 = 60',
        },
        {
          explanation: 'Compare the candidates: 2048, 96, 72, 60. The smallest is 60.',
          maths: 'smallest = 60',
        },
        {
          explanation: 'Verify: 60 = 2^2 x 3 x 5, factor count = (2+1)(1+1)(1+1) = 3 x 2 x 2 = 12. Correct.',
          maths: '60: (2+1)(1+1)(1+1) = 12',
        },
        {
          explanation: 'So the smallest positive integer with exactly 12 factors is 60.',
          maths: 'answer: 60',
        },
      ],
    },
  ],
  questions: [
    // Core 1: factor count of 18 (simple two-prime case)
    {
      id: 'pnf-q1',
      type: 'multiple-choice',
      stem: 'How many factors does 18 have?',
      tier: 'core',
      options: ['4', '5', '6', '8'],
      correctIndex: 2,
      xpValue: 10,
      hint: '18 = 2 x 3^2, so the factor count is (1+1)(2+1) = 2 x 3 = 6.',
    },
    // Core 2: factor count of 50
    {
      id: 'pnf-q2',
      type: 'numeric-entry',
      stem: '50 has prime factorisation 2 x 5^2. How many factors does 50 have?',
      tier: 'core',
      correctAnswer: 6,
      xpValue: 10,
      hint: 'Add 1 to each exponent: (1+1)(2+1) = 2 x 3 = 6.',
    },
    // Core 3: forgot to add 1 misconception
    {
      id: 'pnf-q3',
      type: 'multiple-choice',
      stem: '24 has prime factorisation 2^3 x 3. How many factors does 24 have?',
      tier: 'core',
      options: ['3', '6', '8', '4'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pnf-mis-multiply-exponents',
      hint: 'Add 1 to each exponent FIRST, then multiply: (3+1)(1+1) = 4 x 2 = 8. List to check: 1, 2, 3, 4, 6, 8, 12, 24.',
    },
    // Core 4: prime power 16
    {
      id: 'pnf-q4',
      type: 'numeric-entry',
      stem: '16 = 2^4. How many factors does 16 have?',
      tier: 'core',
      correctAnswer: 5,
      xpValue: 10,
      hint: 'There is only one prime, so the count is (4+1) = 5. List: 1, 2, 4, 8, 16.',
    },
    // Core 5: factor count of a prime
    {
      id: 'pnf-q5',
      type: 'multiple-choice',
      stem: 'How many factors does the prime number 17 have?',
      tier: 'core',
      options: ['1', '2', '3', '17'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pnf-mis-answer-the-number',
      hint: '17 = 17^1, so the count is (1+1) = 2. Every prime has exactly 2 factors: 1 and itself. The answer is the COUNT, not the number 17 itself.',
    },
    // Core 6: simple three-prime case
    {
      id: 'pnf-q6',
      type: 'multiple-choice',
      stem: '30 has prime factorisation 2 x 3 x 5. How many factors does 30 have?',
      tier: 'core',
      options: ['3', '6', '8', '15'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Three primes, each to the power 1. (1+1)(1+1)(1+1) = 2 x 2 x 2 = 8. Listing confirms: 1, 2, 3, 5, 6, 10, 15, 30.',
    },
    // Core 7: drag-order numbers by factor count
    {
      id: 'pnf-q7',
      type: 'drag-order',
      stem: 'Drag these numbers into order from fewest factors to most.',
      tier: 'core',
      items: ['11', '4', '6', '12'],
      correctOrder: [0, 1, 2, 3],
      xpValue: 15,
      hint: '11 (prime, 2 factors), 4 = 2^2 (3 factors), 6 = 2 x 3 (4 factors), 12 = 2^2 x 3 (6 factors).',
    },
    // Confident 1: 100 = 2^2 x 5^2
    {
      id: 'pnf-q8',
      type: 'numeric-entry',
      stem: '100 has prime factorisation 2^2 x 5^2. How many factors does 100 have?',
      tier: 'confident',
      correctAnswer: 9,
      xpValue: 15,
      hint: '(2+1)(2+1) = 3 x 3 = 9. Note that 100 is a perfect square; perfect squares always have an odd number of factors.',
    },
    // Confident 2: 84 three primes
    {
      id: 'pnf-q9',
      type: 'multiple-choice',
      stem: 'How many factors does 84 have? (Hint: 84 = 2^2 x 3 x 7.)',
      tier: 'confident',
      options: ['12', '7', '6', '14'],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'pnf-mis-add-instead-multiply',
      hint: '(2+1)(1+1)(1+1) = 3 x 2 x 2 = 12. Multiply, do not add the (exponent + 1) values.',
    },
    // Confident 3: spot misconception multiply exponents only
    {
      id: 'pnf-q10',
      type: 'spot-misconception',
      stem: 'Sasha says: "72 = 2^3 x 3^2, so the number of factors is 3 x 2 = 6."',
      tier: 'confident',
      statements: [
        {
          text: 'Sasha is right. The exponents tell you the number of factors directly.',
          isMisconception: true,
        },
        {
          text: 'In fact you must add 1 to each exponent first. 72 = 2^3 x 3^2 has (3+1)(2+1) = 4 x 3 = 12 factors. The +1 represents the choice to take a prime zero times (i.e. include 1 itself as a factor).',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pnf-mis-multiply-exponents',
    },
    // Confident 4: identify perfect square via odd factor count
    {
      id: 'pnf-q11',
      type: 'multiple-choice',
      stem: 'A number has an ODD number of factors. What does that tell you about the number?',
      tier: 'confident',
      options: [
        'It must be prime.',
        'It must be a perfect square.',
        'It must be even.',
        'It must be a perfect cube.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'pnf-mis-perfect-square-even-count',
      hint: 'A perfect square has every prime exponent EVEN, so each (exponent + 1) is odd, and an odd times an odd is odd. Only perfect squares have odd factor counts.',
    },
    // Confident 5: missing-step factor counting
    {
      id: 'pnf-q12',
      type: 'missing-step',
      stem: 'Fill in the missing step. Vikram is counting the factors of 540.',
      tier: 'confident',
      steps: [
        'Prime factorise: 540 = 2^2 x 3^3 x 5.',
        'Read off the exponents: 2, 3 and 1.',
        null,
        'Multiply: 3 x 4 x 2 = 24. So 540 has 24 factors.',
      ],
      missingStepIndex: 2,
      correctStep: 'Add 1 to each exponent: (2+1), (3+1), (1+1) gives 3, 4 and 2.',
      xpValue: 20,
    },
    // Confident 6: identify which has more factors (drag for ordering)
    {
      id: 'pnf-q13',
      type: 'drag-order',
      stem: 'Drag these numbers from fewest factors to most. Use prime factorisation if helpful.',
      tier: 'confident',
      items: ['25', '64', '60', '48'],
      correctOrder: [0, 1, 3, 2],
      xpValue: 20,
      hint: '25 = 5^2 has 3 factors. 64 = 2^6 has 7 factors. 48 = 2^4 x 3 has 5 x 2 = 10 factors. 60 = 2^2 x 3 x 5 has 3 x 2 x 2 = 12 factors. Order: 25, 64, 48, 60.',
    },
    // Confident 7: factor count given factorisation 2^a x 3^b
    {
      id: 'pnf-q14',
      type: 'numeric-entry',
      stem: 'A number n has prime factorisation 2^4 x 3^2. How many factors does n have?',
      tier: 'confident',
      correctAnswer: 15,
      xpValue: 15,
      hint: '(4+1)(2+1) = 5 x 3 = 15.',
    },
    // Confident 8: forgot a +1 (false count)
    {
      id: 'pnf-q15',
      type: 'multiple-choice',
      stem: 'Which calculation gives the number of factors of 96 = 2^5 x 3?',
      tier: 'confident',
      options: [
        '5 x 1 = 5',
        '5 + 1 + 1 = 7',
        '6 + 2 = 8',
        '6 x 2 = 12',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'pnf-mis-forgot-plus-one',
      hint: 'Add 1 to EACH exponent (including the hidden 1 on the 3), then MULTIPLY: (5+1)(1+1) = 6 x 2 = 12. List spot-check ends at 12.',
    },
    // Challenge 1: smallest n with exactly 8 factors
    {
      id: 'pnf-q16',
      type: 'numeric-entry',
      stem: 'What is the smallest positive integer with exactly 8 factors?',
      tier: 'challenge',
      correctAnswer: 24,
      xpValue: 25,
      misconceptionId: 'pnf-mis-target-count-equals-multiple',
      hint: '8 factors as a product: 8; 4 x 2; 2 x 2 x 2. Exponent sets: {7}; {3, 1}; {1, 1, 1}. Smallest builds: 2^7 = 128; 2^3 x 3 = 24; 2 x 3 x 5 = 30. Smallest is 24. Note that 24 happens to be a multiple of 8, but in general the smallest number with k factors need not be a multiple of k.',
    },
    // Challenge 2: factor count of large composite (Bond-style word problem)
    {
      id: 'pnf-q17',
      type: 'multiple-choice',
      stem: 'A factory in Sevenoaks packs marbles into identical bags so every bag holds the same whole number of marbles and the bag total uses every marble. They have 360 marbles. In how many different bag sizes can they pack?',
      tier: 'challenge',
      options: ['18', '24', '20', '12'],
      correctIndex: 1,
      xpValue: 25,
      hint: 'Each bag size is a factor of 360. 360 = 2^3 x 3^2 x 5, so factor count = (3+1)(2+1)(1+1) = 4 x 3 x 2 = 24 different bag sizes.',
    },
    // Challenge 3: identify n given factor count and partial info
    {
      id: 'pnf-q18',
      type: 'multiple-choice',
      stem: 'A number n is of the form 2^a x 3 (one factor of 3, with no other primes besides 2). It has exactly 10 factors. What is n?',
      tier: 'challenge',
      options: ['96', '192', '48', '24'],
      correctIndex: 2,
      xpValue: 25,
      hint: 'Factor count = (a+1)(1+1) = 2(a+1) = 10, so a + 1 = 5 and a = 4. Therefore n = 2^4 x 3 = 16 x 3 = 48. Verify: (4+1)(1+1) = 10. Correct.',
    },
    // Challenge 4: smallest n with 18 factors (Bond-style)
    {
      id: 'pnf-q19',
      type: 'numeric-entry',
      stem: 'What is the smallest positive integer with exactly 18 factors?',
      tier: 'challenge',
      correctAnswer: 180,
      xpValue: 25,
      hint: '18 = 18; 9 x 2; 6 x 3; 3 x 3 x 2. Exponent sets: {17}; {8, 1}; {5, 2}; {2, 2, 1}. Smallest builds (largest exp on 2, etc.): 2^17 huge; 2^8 x 3 = 768; 2^5 x 3^2 = 288; 2^2 x 3^2 x 5 = 180. Smallest = 180.',
    },
    // Challenge 5: spot-misconception perfect-square count
    {
      id: 'pnf-q20',
      type: 'multiple-choice',
      stem: 'Which of these numbers has an ODD number of factors?',
      tier: 'challenge',
      options: ['72', '90', '96', '49'],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'pnf-mis-perfect-square-even-count',
      hint: 'Only perfect squares have an odd factor count. 49 = 7^2 is a perfect square with 3 factors (1, 7, 49). The other three are not perfect squares.',
    },
    // Challenge 6: combine HCF and factor count (multi-step Bond-style)
    {
      id: 'pnf-q21',
      type: 'numeric-entry',
      stem: 'Two numbers a and b satisfy a = 2^3 x 3^2 and b = 2^2 x 3 x 5. How many factors does the HCF of a and b have?',
      tier: 'challenge',
      correctAnswer: 6,
      xpValue: 25,
      hint: 'HCF takes the lowest power of each shared prime: HCF = 2^2 x 3 = 12. Factor count of HCF = (2+1)(1+1) = 3 x 2 = 6.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a "number of factors" question where pupils multiplied the exponents directly instead of adding 1 to each first.
    {
      id: 'pnf-mis-multiply-exponents',
      description:
        'I think the number of factors equals the product of the exponents in the prime factorisation, so 12 = 2^2 x 3 has 2 x 1 = 2 factors.',
      triggerAnswer: 'multiply-exponents',
      correction:
        'Actually you must add 1 to EACH exponent first, then multiply. For 12 = 2^2 x 3^1, the count is (2+1)(1+1) = 6.',
      reExplanation:
        'The +1 represents the choice "use this prime zero times". For 12, the 2 can appear 0, 1 or 2 times (3 choices) and the 3 can appear 0 or 1 times (2 choices). Multiplying choices gives 3 x 2 = 6 factors. Listing confirms: 1, 2, 3, 4, 6, 12. Without the +1 you would miss the factor 1 and miss every factor that uses fewer primes than the maximum.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 1H (Higher, Non-calculator), commentary on a counting-factors item where pupils added the (exponent + 1) values instead of multiplying.
    {
      id: 'pnf-mis-add-instead-multiply',
      description:
        'I add the (exponent + 1) values instead of multiplying them, so 12 = 2^2 x 3 gives 3 + 2 = 5 factors instead of 6.',
      triggerAnswer: 'add-instead-multiply',
      correction:
        'In fact you MULTIPLY the (exponent + 1) values, you do not add. The count is (2+1) x (1+1) = 6, not (2+1) + (1+1) = 5.',
      reExplanation:
        'Counting works by the product rule: independent choices multiply. For 12 = 2^2 x 3, you have 3 choices for the power of 2 and 2 choices for the power of 3, giving 3 x 2 = 6 combinations. Adding would only count 3 + 2 = 5 things, which double-counts nothing and misses the cross combinations. Always multiply when counting independent decisions.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Counting factors" page, "Common mistake" callout warning pupils to add 1 to every exponent (including hidden ones of value 1) before multiplying.
    {
      id: 'pnf-mis-forgot-plus-one',
      description:
        'I forget to add 1 to the exponent on a prime that appears just once, so 96 = 2^5 x 3 gives me (5+1) x 1 = 6 instead of 12.',
      triggerAnswer: 'forgot-plus-one',
      correction:
        'Actually every prime contributes (exponent + 1), even when the exponent is the hidden 1. For 96 = 2^5 x 3^1, the count is (5+1)(1+1) = 12.',
      reExplanation:
        'When a prime is written without a power, its exponent is 1 (since p = p^1). Add 1 to get 2 choices: take the prime 0 times or 1 time. Forgetting the +1 on the 3 in 96 = 2^5 x 3 cuts the count in half. Always rewrite primes with their hidden exponents before applying the rule: 96 = 2^5 x 3^1, count = 6 x 2 = 12.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 04 (Higher, Calculator), commentary on a "find a number with exactly k factors" question where pupils believed the answer must be a multiple of k itself.
    {
      id: 'pnf-mis-target-count-equals-multiple',
      description:
        'I think the smallest number with k factors must be a multiple of k itself, so the smallest number with 12 factors must be a multiple of 12.',
      triggerAnswer: 'target-count-equals-multiple',
      correction:
        'In fact the factor count and the number itself are not directly related that way. The smallest number with 12 factors is 60, which has factor count 12 but is unrelated to "being a multiple of 12".',
      reExplanation:
        'To find the smallest number with k factors, list the ways to write k as a product, subtract 1 from each factor to get exponent sets, then build using the smallest primes (largest exponent on 2). For k = 12, the set {2, 1, 1} gives 2^2 x 3 x 5 = 60, smaller than 72, 96 or 2^11. The minimum sharing factors with k is coincidental.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 4 "Number Operations" by Hart, on pupils confusing the number of factors of n with the value of n itself, especially for primes (answering "17" rather than "2" for the number of factors of 17).
    {
      id: 'pnf-mis-answer-the-number',
      description:
        'I read "how many factors does 17 have?" and answer 17, treating the original number as the count. I do something similar for primes generally.',
      triggerAnswer: 'answer-the-number',
      correction:
        'In fact the question asks how MANY factors there are, not what the number is. For 17, the factors are 1 and 17, so the count is 2.',
      reExplanation:
        'Always pause to read what is being asked. "How many factors" wants a count: 2 for any prime, 6 for 12, 9 for 36. The answer is rarely the original number itself. Use the rule: write the prime factorisation, add 1 to each exponent, multiply. For a prime p = p^1, the count is (1+1) = 2.',
    },
    // Source: NCETM Secondary Magazine, Issue 122, article on factor counting misconceptions, citing pupil work where perfect squares were assumed to have an even number of factors because "factors come in pairs".
    {
      id: 'pnf-mis-perfect-square-even-count',
      description:
        'I think every number has an even number of factors because factors pair up (a x b = n), so I expect 36 and 49 to have an even count.',
      triggerAnswer: 'perfect-square-even-count',
      correction:
        'Actually a perfect square has an ODD number of factors. The square root pairs with itself, breaking the pairing and leaving one unmatched factor.',
      reExplanation:
        'For 36, the pairs are (1, 36), (2, 18), (3, 12), (4, 9), and (6, 6). The pair (6, 6) shares the same number, so 6 only counts once. Total: 9 factors. The rule confirms it: 36 = 2^2 x 3^2 gives (2+1)(2+1) = 9. Every (exponent + 1) factor is odd exactly when every exponent is even, which is the very condition for a perfect square. So perfect squares are the only numbers with an odd factor count.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const primesNumberOfFactorsZoneNodes = [primesNumberOfFactors]
