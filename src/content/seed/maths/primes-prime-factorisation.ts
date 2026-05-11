import type { SkillNode } from '@/types/content'

export const primesPrimeFactorisation: SkillNode = {
  id: 'maths-primes-prime-factorisation',
  title: 'Prime Factorisation and Index Notation',
  description:
    'Express any positive integer above 1 as a product of its prime factors. Use a factor tree to split numbers repeatedly until only primes remain. Write the result in index notation, where repeated primes are combined into powers (24 = 2 cubed x 3). Apply prime factorisation to find HCFs (multiply shared primes) and LCMs (multiply all primes at the highest power present).',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-primes',
  zoneName: 'Primes',
  tier: 'confident',
  prerequisites: ['maths-primes-recognising-primes', 'maths-factors-multiples-hcf-lcm'],
  curriculum: {
    ks3Objective:
      'Use the concepts and vocabulary of prime numbers, factors (divisors), multiples, common factors, common multiples, highest common factor, lowest common multiple, prime factorisation, including using product notation and the unique factorisation property.',
    awardingBodies: {
      aqa: 'N4 Express a number as a product of its prime factors using index notation (GCSE Mathematics 8300)',
      edexcel: 'N4 Prime factorisation, including using product notation and the unique factorisation property (GCSE Mathematics 1MA1)',
      ocr: '2.03b Prime factorisation: factor trees and index notation (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'pfm-scene-factor-tree',
      title: 'Two Factor Trees, Same Result',
      type: 'labelled-diagram',
      instructions:
        'Click each branch to follow a factor tree for 24. Tree A splits 24 into 4 x 6, then 4 into 2 x 2 and 6 into 2 x 3. Tree B starts by splitting 24 into 2 x 12, then 12 into 2 x 6, then 6 into 2 x 3. Different starts, same primes at the bottom: 2, 2, 2, 3. So 24 = 2 x 2 x 2 x 3 = 2^3 x 3 either way. This is the unique factorisation property: every integer above 1 has exactly one prime factorisation.',
      data: {
        viewBox: '0 0 200 120',
        hotspots: [
          { id: 'pfm-h-tree-a-top', x: 20, y: 15, label: 'Tree A starts: 24 = 4 x 6', description: 'Top split of Tree A.' },
          { id: 'pfm-h-tree-a-4', x: 10, y: 50, label: '4 splits: 2 x 2', description: 'Both factors are prime, so the branch stops.' },
          { id: 'pfm-h-tree-a-6', x: 30, y: 50, label: '6 splits: 2 x 3', description: 'Both factors are prime, so the branch stops.' },
          { id: 'pfm-h-tree-b-top', x: 70, y: 15, label: 'Tree B starts: 24 = 2 x 12', description: 'Top split of Tree B.' },
          { id: 'pfm-h-tree-b-12', x: 80, y: 50, label: '12 splits: 2 x 6, then 6 = 2 x 3', description: 'Two more layers before only primes remain.' },
          { id: 'pfm-h-result', x: 50, y: 95, label: 'Both trees: 24 = 2 x 2 x 2 x 3 = 2^3 x 3', description: 'Different routes, same primes. Unique factorisation.' },
        ],
      },
    },
    {
      id: 'pfm-scene-index-notation',
      title: 'Index Notation Compresses Repeated Primes',
      type: 'simulation',
      instructions:
        'See how index notation tidies up a long prime product. 72 = 2 x 2 x 2 x 3 x 3 = 2^3 x 3^2. The exponent counts how many times a prime appears. 2^3 means three 2s multiplied together (2 x 2 x 2 = 8), not 2 multiplied by 3 (which would be 6). Always read 2^3 as "two cubed" or "two to the power of 3".',
      data: {
        examples: [
          { number: 12, longForm: '2 x 2 x 3', indexForm: '2^2 x 3', value: 12 },
          { number: 24, longForm: '2 x 2 x 2 x 3', indexForm: '2^3 x 3', value: 24 },
          { number: 72, longForm: '2 x 2 x 2 x 3 x 3', indexForm: '2^3 x 3^2', value: 72 },
          { number: 180, longForm: '2 x 2 x 3 x 3 x 5', indexForm: '2^2 x 3^2 x 5', value: 180 },
        ],
        rule: 'Group repeated primes into powers. 2^3 = 8 (three 2s), NOT 2 x 3 = 6.',
      },
    },
    {
      id: 'pfm-scene-hcf-lcm-from-primes',
      title: 'HCF and LCM from Prime Factorisations',
      type: 'simulation',
      instructions:
        'See how prime factorisation makes HCF and LCM mechanical. 24 = 2^3 x 3 and 36 = 2^2 x 3^2. The HCF takes the LOWEST power of each shared prime: 2^2 x 3^1 = 4 x 3 = 12. The LCM takes the HIGHEST power of each prime that appears in either: 2^3 x 3^2 = 8 x 9 = 72. The same trick works for three numbers, or for numbers too large for listing.',
      data: {
        numbers: [24, 36],
        factorisations: { '24': '2^3 x 3', '36': '2^2 x 3^2' },
        sharedPrimes: { '2': { min: 2, max: 3 }, '3': { min: 1, max: 2 } },
        hcf: { calc: '2^2 x 3 = 12', value: 12 },
        lcm: { calc: '2^3 x 3^2 = 72', value: 72 },
        rule: 'HCF = lowest power of each SHARED prime. LCM = highest power of each prime appearing in either number.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'pfm-worked-1',
      title: 'Express 60 as a product of prime factors using index notation',
      steps: [
        {
          explanation:
            'Start the factor tree. Pick any pair of factors of 60.',
          maths: '60 = 6 x 10',
        },
        {
          explanation:
            'Split each composite factor further. 6 = 2 x 3 and 10 = 2 x 5.',
          maths: '60 = (2 x 3) x (2 x 5)',
        },
        {
          explanation:
            'All four bottom branches (2, 3, 2, 5) are prime, so the tree stops.',
          maths: '60 = 2 x 2 x 3 x 5',
        },
        {
          explanation:
            'Group repeated primes into index notation. There are two 2s, one 3, and one 5.',
          maths: '60 = 2^2 x 3 x 5',
        },
        {
          explanation:
            'Verify: 2^2 = 4, then 4 x 3 = 12, and 12 x 5 = 60.',
          maths: 'check: 4 x 3 x 5 = 60',
        },
        {
          explanation: 'So 60 expressed in prime-factor index notation is 2^2 x 3 x 5.',
          maths: '60 = 2^2 x 3 x 5',
        },
      ],
    },
    {
      id: 'pfm-worked-2',
      title: 'Find HCF and LCM of 60 and 90 using prime factorisations',
      steps: [
        {
          explanation:
            'Factorise each number into primes with index notation.',
          maths: '60 = 2^2 x 3 x 5; 90 = 2 x 3^2 x 5',
        },
        {
          explanation:
            'Find shared primes: 2, 3, and 5 each appear in both.',
          maths: 'shared primes: 2, 3, 5',
        },
        {
          explanation:
            'For HCF, take the LOWEST power of each shared prime.',
          maths: 'HCF = 2^1 x 3^1 x 5^1 = 2 x 3 x 5 = 30',
        },
        {
          explanation:
            'For LCM, take the HIGHEST power of each prime appearing in either number.',
          maths: 'LCM = 2^2 x 3^2 x 5 = 4 x 9 x 5 = 180',
        },
        {
          explanation:
            'Check: HCF x LCM should equal the product of the two numbers. 30 x 180 = 5400, and 60 x 90 = 5400.',
          maths: 'check: 30 x 180 = 60 x 90 = 5400',
        },
        {
          explanation: 'So HCF(60, 90) = 30 and LCM(60, 90) = 180.',
          maths: 'HCF = 30, LCM = 180',
        },
      ],
    },
  ],
  questions: [
    // Core 1: identify prime factorisation of 12
    {
      id: 'pfm-q1',
      type: 'multiple-choice',
      stem: 'Which is the prime factorisation of 12 in index notation?',
      tier: 'core',
      options: ['2 x 6', '4 x 3', '1 x 2^2 x 3', '2^2 x 3'],
      correctIndex: 3,
      xpValue: 10,
      hint: '12 = 2 x 2 x 3. Group the repeated 2s: 12 = 2^2 x 3. The factorisation must contain only primes and exclude 1.',
    },
    // Core 2: identify prime factorisation
    {
      id: 'pfm-q2',
      type: 'multiple-choice',
      stem: 'Which is the prime factorisation of 30?',
      tier: 'core',
      options: ['2 x 15', '3 x 10', '2 x 3 x 5', '5 x 6'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Break each composite factor down until only primes remain. 30 = 2 x 3 x 5 (no composites left).',
    },
    // Core 3: read index notation
    {
      id: 'pfm-q3',
      type: 'multiple-choice',
      stem: 'What is the value of 2^3 x 3?',
      tier: 'core',
      options: ['12', '24', '18', '6'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pfm-mis-index-notation',
      hint: '2^3 means 2 x 2 x 2 = 8 (NOT 2 x 3 = 6). Then 8 x 3 = 24.',
    },
    // Core 4: factorise via tree
    {
      id: 'pfm-q4',
      type: 'numeric-entry',
      stem: 'Express 18 as a product of prime factors in the form 2^a x 3^b. What is the value of b?',
      tier: 'core',
      correctAnswer: 2,
      xpValue: 10,
      hint: '18 = 2 x 9 = 2 x 3 x 3 = 2 x 3^2. So b = 2.',
    },
    // Core 5: 1 is not prime
    {
      id: 'pfm-q5',
      type: 'multiple-choice',
      stem: 'Which of the following is the correct prime factorisation of 20?',
      tier: 'core',
      options: ['1 x 2 x 2 x 5', '4 x 5', '2 x 2 x 5', '2^2 x 5^2'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pfm-mis-1-is-prime',
      hint: 'A prime factorisation contains only primes, and 1 is NOT a prime. 4 is not prime either. 20 = 2 x 2 x 5 = 2^2 x 5.',
    },
    // Core 6: index notation conversion
    {
      id: 'pfm-q6',
      type: 'multiple-choice',
      stem: 'What is the value of 5^2?',
      tier: 'core',
      options: ['25', '7', '10', '52'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pfm-mis-index-notation',
      hint: '5^2 means 5 x 5 = 25, not 5 + 2 or 5 x 2.',
    },
    // Core 7: spot-misconception on 1 as prime
    {
      id: 'pfm-q7',
      type: 'spot-misconception',
      stem: 'Niharika writes the prime factorisation of 30 as "1 x 2 x 3 x 5".',
      tier: 'core',
      statements: [
        {
          text: 'Niharika is right. The number 1 is always included in a prime factorisation because every number is divisible by 1.',
          isMisconception: true,
        },
        {
          text: 'In fact 1 is not prime, by mathematical convention. A prime factorisation contains only primes (numbers greater than 1 with exactly two divisors). The correct factorisation of 30 is 2 x 3 x 5. Including 1 would not change the value but breaks the definition.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pfm-mis-1-is-prime',
    },
    // Core 8: factorise 28
    {
      id: 'pfm-q8',
      type: 'multiple-choice',
      stem: 'Which is the prime factorisation of 28?',
      tier: 'core',
      options: ['4 x 7', '2 x 2 x 7', '2 x 14', '2^2 x 14'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pfm-mis-not-prime-factor',
      hint: 'Every factor must be prime. 4 and 14 are not prime. 28 = 2 x 2 x 7 = 2^2 x 7.',
    },
    // Confident 1: factor tree result with index notation
    {
      id: 'pfm-q9',
      type: 'numeric-entry',
      stem: 'Express 72 as a product of prime factors in the form 2^a x 3^b. What is the value of a + b?',
      tier: 'confident',
      correctAnswer: 5,
      xpValue: 15,
      hint: '72 = 8 x 9 = 2^3 x 3^2. So a = 3 and b = 2, and a + b = 5.',
    },
    // Confident 2: HCF via prime factorisation
    {
      id: 'pfm-q10',
      type: 'multiple-choice',
      stem: 'The prime factorisations of two numbers are 2^3 x 3 x 5 and 2 x 3^2 x 7. What is their HCF?',
      tier: 'confident',
      options: ['2520', '6', '30', '15'],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'pfm-mis-hcf-from-all-primes',
      hint: 'HCF: take only SHARED primes at the LOWEST power. Shared primes: 2 and 3. HCF = 2^1 x 3^1 = 6.',
    },
    // Confident 3: LCM via prime factorisation
    {
      id: 'pfm-q11',
      type: 'numeric-entry',
      stem: 'Two numbers have prime factorisations 2^2 x 3 and 2 x 3^2. What is their LCM?',
      tier: 'confident',
      correctAnswer: 36,
      xpValue: 15,
      hint: 'LCM: take each prime at the HIGHEST power present. LCM = 2^2 x 3^2 = 4 x 9 = 36.',
    },
    // Confident 4: spot-misconception on index meaning
    {
      id: 'pfm-q12',
      type: 'spot-misconception',
      stem: 'Tom evaluates 3^2 as "3 multiplied by 2, which is 6".',
      tier: 'confident',
      statements: [
        {
          text: 'Tom is right. The 2 in 3^2 tells you what to multiply 3 by.',
          isMisconception: true,
        },
        {
          text: 'In fact the small 2 is an exponent (power), not a factor. 3^2 means 3 multiplied BY ITSELF 2 times: 3 x 3 = 9, not 6. The base (3) gets repeated; the index (2) counts the repetitions.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pfm-mis-index-notation',
    },
    // Confident 5: missing-step prime factorisation
    {
      id: 'pfm-q13',
      type: 'missing-step',
      stem: 'Fill in the missing step. Aisha expresses 90 as a product of primes using a factor tree.',
      tier: 'confident',
      steps: [
        'Pick any factor pair: 90 = 9 x 10.',
        'Break 9 down: 9 = 3 x 3 (both prime, stop).',
        null,
        'Combine: 90 = 3 x 3 x 2 x 5. In index notation: 2 x 3^2 x 5.',
      ],
      missingStepIndex: 2,
      correctStep: 'Break 10 down: 10 = 2 x 5 (both prime, stop).',
      xpValue: 20,
    },
    // Confident 6: HCF and LCM check
    {
      id: 'pfm-q14',
      type: 'multiple-choice',
      stem: 'The HCF of two numbers is 6 and their LCM is 60. If one number is 12, what is the other?',
      tier: 'confident',
      options: ['10', '15', '30', '20'],
      correctIndex: 2,
      xpValue: 15,
      hint: 'Use HCF x LCM = product of the two numbers. 6 x 60 = 360. The other number = 360 / 12 = 30.',
    },
    // Confident 7: drag-order numbers by their prime-factor count
    {
      id: 'pfm-q15',
      type: 'drag-order',
      stem: 'Drag these numbers into order from fewest prime factors (counting multiplicity) to most.',
      tier: 'confident',
      items: ['9', '24', '12', '8'],
      correctOrder: [0, 2, 3, 1],
      xpValue: 20,
      hint: 'Count primes including repeats: 9 = 3^2 (2 primes). 12 = 2^2 x 3 (3 primes). 8 = 2^3 (3 primes). 24 = 2^3 x 3 (4 primes). Order: 9 (2), then 12 (3), then 8 (3), then 24 (4).',
    },
    // Confident 8: factor tree starting differently
    {
      id: 'pfm-q16',
      type: 'numeric-entry',
      stem: 'Express 48 in prime-factor index notation as 2^a x 3. What is the value of a?',
      tier: 'confident',
      correctAnswer: 4,
      xpValue: 15,
      hint: '48 = 16 x 3 = 2^4 x 3. So a = 4. Verify: 2^4 = 16, and 16 x 3 = 48.',
    },
    // Challenge 1: 360 perfect square (the plan stretch)
    {
      id: 'pfm-q17',
      type: 'numeric-entry',
      stem: '360 has prime factorisation 2^3 x 3^2 x 5. What is the smallest positive integer that, when multiplied by 360, gives a perfect square?',
      tier: 'challenge',
      correctAnswer: 10,
      xpValue: 25,
      hint: 'A perfect square has even powers on every prime. 360 = 2^3 x 3^2 x 5^1: the 2 and 5 have odd powers. Multiply by another 2 and another 5 (= 10) to even them out: 360 x 10 = 3600 = 60^2.',
    },
    // Challenge 2: HCF via factorisation chain
    {
      id: 'pfm-q18',
      type: 'multiple-choice',
      stem: 'The prime factorisations of three numbers are 2^2 x 3 x 5, 2 x 3^2 x 7 and 2^3 x 3 x 11. What is their HCF?',
      tier: 'challenge',
      options: ['6', '2', '30', '12'],
      correctIndex: 0,
      xpValue: 25,
      hint: 'HCF: only primes shared by ALL three at lowest power. 2 is in all (min power 1). 3 is in all (min power 1). 5, 7, 11 are each missing from at least one. HCF = 2 x 3 = 6.',
    },
    // Challenge 3: LCM with three terms
    {
      id: 'pfm-q19',
      type: 'numeric-entry',
      stem: 'Find the LCM of 12, 18 and 20 using prime factorisation.',
      tier: 'challenge',
      correctAnswer: 180,
      xpValue: 25,
      hint: '12 = 2^2 x 3; 18 = 2 x 3^2; 20 = 2^2 x 5. Take highest power of each prime: 2^2, 3^2, 5. LCM = 4 x 9 x 5 = 180.',
    },
    // Challenge 4: prime factorisation of large number
    {
      id: 'pfm-q20',
      type: 'multiple-choice',
      stem: 'Which is the prime factorisation of 84 in index notation?',
      tier: 'challenge',
      options: ['2 x 2 x 21', '2^3 x 3 x 7', '2 x 3 x 14', '2^2 x 3 x 7'],
      correctIndex: 3,
      xpValue: 25,
      hint: '84 = 4 x 21 = 2^2 x 3 x 7. Verify: 4 x 3 x 7 = 84.',
    },
    // Challenge 5: factorisation chain with perfect cube
    {
      id: 'pfm-q21',
      type: 'numeric-entry',
      stem: 'A number n has prime factorisation 2^2 x 3 x 5. What is the smallest positive integer to multiply n by so that the result is a perfect cube?',
      tier: 'challenge',
      correctAnswer: 450,
      xpValue: 25,
      hint: 'A perfect cube needs every prime power to be a multiple of 3. Current: 2^2 x 3^1 x 5^1. Need to add 2^1, 3^2, 5^2 to reach 2^3 x 3^3 x 5^3. Multiplier = 2 x 9 x 25 = 450.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a prime-factor question where pupils included 1 in the factorisation.
    {
      id: 'pfm-mis-1-is-prime',
      description:
        'I think 1 is a prime number, so I include 1 in every prime factorisation, writing 30 = 1 x 2 x 3 x 5.',
      triggerAnswer: '1-is-prime',
      correction:
        'Actually 1 is not prime by mathematical convention. A prime has exactly two distinct divisors (1 and itself); 1 has only one divisor (itself).',
      reExplanation:
        'The primes start at 2: 2, 3, 5, 7, 11, 13, ... Excluding 1 keeps the unique factorisation property: every integer above 1 has exactly one prime factorisation. If 1 were prime, we could write 30 = 2 x 3 x 5 or 1 x 2 x 3 x 5 or 1 x 1 x 2 x 3 x 5, and the factorisation would no longer be unique. So 1 is reserved as a special "unit", not a prime.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Prime Factorisation" page, "Common mistake" callout warning that index notation 2^3 means "2 cubed", not 2 x 3.
    {
      id: 'pfm-mis-index-notation',
      description:
        'I read 2^3 as 2 multiplied by 3 (= 6), or read 3^2 as 3 multiplied by 2 (= 6), instead of as repeated multiplication.',
      triggerAnswer: 'index-notation',
      correction:
        'In fact 2^3 means 2 x 2 x 2 = 8 (three twos), and 3^2 means 3 x 3 = 9 (two threes). The small number is an EXPONENT, not a factor.',
      reExplanation:
        '2^3 reads as "two cubed" or "two to the power of three", and equals 2 x 2 x 2 = 8. The base 2 is repeated; the index 3 counts how many times. Be careful: 2 x 3 = 6 (multiplication) is different from 2^3 = 8 (repeated multiplication). Looking at small examples helps: 2^1 = 2, 2^2 = 4, 2^3 = 8, 2^4 = 16. The growth is exponential, not linear.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 1F (Foundation, Non-calculator), commentary on a prime-factor question where pupils stopped before all branches reached a prime.
    {
      id: 'pfm-mis-not-prime-factor',
      description:
        'I stop a factor tree at a composite (non-prime) factor, writing 28 = 4 x 7 as the prime factorisation, or 20 = 4 x 5.',
      triggerAnswer: 'not-prime-factor',
      correction:
        'Actually a prime factorisation contains ONLY primes. Continue splitting composite factors until every branch ends in a prime.',
      reExplanation:
        'For 28, write 28 = 4 x 7. 7 is prime so its branch stops, but 4 = 2 x 2 must be split further. Final: 28 = 2 x 2 x 7 = 2^2 x 7. Similarly 20 = 4 x 5 becomes 20 = 2 x 2 x 5 = 2^2 x 5. The test: every factor must be a prime (2, 3, 5, 7, 11, ...). If any factor is composite, the tree is incomplete.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 01 (Foundation, Non-calculator), commentary on an HCF question via prime factorisation where pupils multiplied ALL primes from both numbers (giving the LCM) instead of just shared ones.
    {
      id: 'pfm-mis-hcf-from-all-primes',
      description:
        'When finding HCF from prime factorisations, I multiply EVERY prime from both numbers, ending up with the LCM instead of the HCF.',
      triggerAnswer: 'hcf-from-all-primes',
      correction:
        'In fact HCF takes only SHARED primes at the lowest power. LCM takes ALL primes at the highest power.',
      reExplanation:
        'For 12 = 2^2 x 3 and 18 = 2 x 3^2: shared primes are 2 and 3. HCF = 2^1 x 3^1 = 6 (lowest powers). LCM = 2^2 x 3^2 = 36 (highest powers). Including primes that appear in only one number would put extra factors in the HCF that one of the numbers does not have. Always check: is this prime in EVERY number? If yes (shared), include for HCF; if no, exclude.',
    },
    // Source: NCETM Secondary Magazine, Issue 120, article on prime factorisation misconceptions, citing pupil work that produced different factorisations from different factor trees, implying non-uniqueness.
    {
      id: 'pfm-mis-tree-branches-unique',
      description:
        'I believe that different starting splits in a factor tree give different prime factorisations, so 24 = 4 x 6 and 24 = 2 x 12 might give different end results.',
      triggerAnswer: 'tree-branches-unique',
      correction:
        'Actually all factor trees for the same number end with the same set of primes, just possibly in a different order. This is the unique factorisation property.',
      reExplanation:
        'For 24: starting with 4 x 6 gives (2 x 2) x (2 x 3) = 2^3 x 3. Starting with 2 x 12 gives 2 x (2 x 2 x 3) = 2^3 x 3. Starting with 3 x 8 gives 3 x (2 x 2 x 2) = 2^3 x 3. Same primes (three 2s and one 3) every time. The starting split does not matter; the destination is the same prime set.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 4 "Number Operations" by Hart, on pupils miscounting the powers when writing repeated primes in index notation.
    {
      id: 'pfm-mis-power-miscount',
      description:
        'I miscount the power in index notation, so 2 x 2 x 2 becomes 2^2 (instead of 2^3) or 3 x 3 becomes 3^3 (instead of 3^2).',
      triggerAnswer: 'power-miscount',
      correction:
        'In fact the power counts how many TIMES the prime appears. Three 2s multiplied together is 2^3, not 2^2.',
      reExplanation:
        'Count carefully: 2 x 2 x 2 has THREE 2s, so it is 2^3 (read "two cubed"). 2 x 2 has two 2s, so it is 2^2 (read "two squared"). 3 x 3 = 9 = 3^2, and 3 x 3 x 3 = 27 = 3^3. The power matches the count of occurrences exactly. Writing out the long form first then counting is the safest method.',
    },
    // Authored, no external source: classroom-observed slip where pupils forget to break a composite factor that "looks prime" (e.g., 9, 15, 21) but isn't.
    {
      id: 'pfm-mis-overlooked-composite',
      description:
        'I treat a composite factor that ends in an odd digit (such as 9, 15, 21, 25) as if it were prime and stop the factor tree.',
      triggerAnswer: 'overlooked-composite',
      correction:
        'In fact 9, 15, 21, 25 are composite (9 = 3 x 3, 15 = 3 x 5, 21 = 3 x 7, 25 = 5 x 5). Test divisibility by small primes first before stopping the factor tree.',
      reExplanation:
        'For 45 = 5 x 9, the branch 5 is prime (stop), but the branch 9 must be split: 9 = 3 x 3. Full factorisation: 45 = 3 x 3 x 5 = 3^2 x 5. A quick divisibility test on each factor catches the trap: if it is divisible by 2, 3, 5 or 7, it is composite; if not (and below 121), it is prime.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const primesPrimeFactorisationZoneNodes = [primesPrimeFactorisation]
