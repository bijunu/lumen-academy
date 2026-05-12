import type { SkillNode } from '@/types/content'

export const factorsMultiplesThreeNumbers: SkillNode = {
  id: 'maths-factors-multiples-three-numbers',
  title: 'HCF and LCM of Three Numbers',
  description:
    'Extend HCF and LCM to three or more whole numbers. For the HCF take the smallest power of each prime that appears in EVERY factorisation. For the LCM take the largest power of each prime that appears in ANY factorisation. Apply this to fraction sums with three denominators and to scheduling word problems where three events must coincide.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-factors-multiples',
  zoneName: 'Factors and Multiples',
  tier: 'confident',
  prerequisites: ['maths-factors-multiples-hcf-lcm'],
  curriculum: {
    ks3Objective:
      'Use the concepts and vocabulary of factors, multiples, common factors, common multiples, highest common factor, lowest common multiple.',
    awardingBodies: {
      aqa: 'N4 Use the concepts and vocabulary of factors, multiples, HCF and LCM, including HCF and LCM of more than two numbers (GCSE Mathematics 8300)',
      edexcel: 'N4 Use the concepts and vocabulary of factors, multiples, HCF and LCM, including for more than two numbers (GCSE Mathematics 1MA1)',
      ocr: '2.03a Highest common factor and lowest common multiple, including for more than two numbers (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'ftn-scene-three-factor-lists',
      title: 'HCF of Three Numbers by Listing Factors',
      type: 'simulation',
      instructions:
        'See how the HCF of 12, 18 and 30 is found by listing every factor of each number and picking the largest factor that appears in all three lists. Factors of 12: 1, 2, 3, 4, 6, 12. Factors of 18: 1, 2, 3, 6, 9, 18. Factors of 30: 1, 2, 3, 5, 6, 10, 15, 30. The factors shared by all three are 1, 2, 3, 6. The largest is 6, so HCF(12, 18, 30) = 6. Listing works for small numbers; for larger numbers the prime-factor method is faster.',
      data: {
        numberA: 12,
        numberB: 18,
        numberC: 30,
        factorsA: [1, 2, 3, 4, 6, 12],
        factorsB: [1, 2, 3, 6, 9, 18],
        factorsC: [1, 2, 3, 5, 6, 10, 15, 30],
        commonFactors: [1, 2, 3, 6],
        hcf: 6,
        rule: 'HCF of three numbers = the largest number that divides all three inputs without remainder.',
      },
    },
    {
      id: 'ftn-scene-three-multiples-strip',
      title: 'LCM of Three Numbers by Listing Multiples',
      type: 'number-line',
      instructions:
        'See how the LCM of 4, 6 and 8 is found by extending three lists of multiples until one number appears in all three. Multiples of 4: 4, 8, 12, 16, 20, 24, 28, ... Multiples of 6: 6, 12, 18, 24, 30, ... Multiples of 8: 8, 16, 24, 32, ... The first number that appears in all three lists is 24. So LCM(4, 6, 8) = 24. Notice that 12 is in the first two lists but not the third, so 12 is NOT the answer.',
      data: {
        min: 0,
        max: 32,
        majorTicks: [0, 4, 6, 8, 12, 16, 18, 20, 24, 28, 30, 32],
        numberA: 4,
        numberB: 6,
        numberC: 8,
        multiplesA: [4, 8, 12, 16, 20, 24, 28],
        multiplesB: [6, 12, 18, 24, 30],
        multiplesC: [8, 16, 24, 32],
        commonMultiples: [24],
        lcm: 24,
        rule: 'LCM of three numbers = the smallest positive number that appears in all three lists of multiples.',
      },
    },
    {
      id: 'ftn-scene-three-circle-venn',
      title: 'HCF and LCM from a Three-Circle Venn of Prime Factors',
      type: 'labelled-diagram',
      instructions:
        'Tap each region of the three-circle Venn diagram to see how prime factors of 12, 18 and 30 split. 12 = 2 x 2 x 3. 18 = 2 x 3 x 3. 30 = 2 x 3 x 5. The very centre holds primes shared by ALL three (one 2 and one 3) and these multiply to give the HCF: 2 x 3 = 6. Multiplying every prime in the whole diagram (each shared one counted only once) gives the LCM: 2 x 2 x 3 x 3 x 5 = 180.',
      data: {
        viewBox: '0 0 200 160',
        hotspots: [
          { id: 'ftn-h-12-only', x: 25, y: 40, label: '12 only: extra 2', description: 'Prime factor in 12 but not in 18 or 30. 12 has TWO factors of 2; the others have only ONE.' },
          { id: 'ftn-h-18-only', x: 50, y: 20, label: '18 only: extra 3', description: 'Prime factor in 18 but not in 12 or 30. 18 has TWO factors of 3; the others have only ONE.' },
          { id: 'ftn-h-30-only', x: 75, y: 40, label: '30 only: 5', description: 'Prime factor in 30 but not in 12 or 18. The 5 is unique to 30.' },
          { id: 'ftn-h-centre', x: 50, y: 50, label: 'Shared by all: 2, 3', description: 'Primes in all three numbers. One 2 and one 3. HCF = 2 x 3 = 6.' },
          { id: 'ftn-h-lcm', x: 50, y: 90, label: 'LCM = 180', description: 'Multiply every prime across the whole diagram once each: 2 x 2 x 3 x 3 x 5 = 180.' },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'ftn-worked-1',
      title: 'Find the HCF of 24, 36 and 60 by listing factors',
      steps: [
        {
          explanation: 'List every factor of the first number.',
          maths: 'factors of 24: 1, 2, 3, 4, 6, 8, 12, 24',
        },
        {
          explanation: 'List every factor of the second number.',
          maths: 'factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36',
        },
        {
          explanation: 'List every factor of the third number.',
          maths: 'factors of 60: 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60',
        },
        {
          explanation: 'Pick out the factors that appear in ALL THREE lists.',
          maths: 'common factors of all three: 1, 2, 3, 4, 6, 12',
        },
        {
          explanation: 'Choose the largest of these common factors.',
          maths: 'HCF = 12',
        },
        {
          explanation: 'So HCF(24, 36, 60) = 12. Check: 24/12 = 2, 36/12 = 3, 60/12 = 5, all whole numbers.',
          maths: 'HCF(24, 36, 60) = 12',
        },
      ],
    },
    {
      id: 'ftn-worked-2',
      title: 'Find the LCM of 8, 12 and 18 using prime factorisation',
      steps: [
        {
          explanation: 'Write each number as a product of primes.',
          maths: '8 = 2 x 2 x 2,  12 = 2 x 2 x 3,  18 = 2 x 3 x 3',
        },
        {
          explanation: 'List every prime that appears in ANY of the three: just 2 and 3.',
          maths: 'primes used: 2, 3',
        },
        {
          explanation: 'For each prime, take the LARGEST power that appears in any one number.',
          maths: 'largest power of 2: 2 x 2 x 2 (from 8). Largest power of 3: 3 x 3 (from 18).',
        },
        {
          explanation: 'Multiply these largest powers together.',
          maths: 'LCM = 2 x 2 x 2 x 3 x 3 = 8 x 9 = 72',
        },
        {
          explanation: 'Check: 72/8 = 9, 72/12 = 6, 72/18 = 4. All three give whole numbers.',
          maths: 'LCM(8, 12, 18) = 72',
        },
      ],
    },
  ],
  questions: [
    // Core 1: HCF of three small numbers, listing
    {
      id: 'ftn-q1',
      type: 'numeric-entry',
      stem: 'What is the HCF of 12, 18 and 30?',
      tier: 'core',
      correctAnswer: 6,
      xpValue: 10,
      hint: 'Factors of 12: 1, 2, 3, 4, 6, 12. Factors of 18: 1, 2, 3, 6, 9, 18. Factors of 30: 1, 2, 3, 5, 6, 10, 15, 30. Largest factor shared by all three: 6.',
    },
    // Core 2: LCM of three small numbers
    {
      id: 'ftn-q2',
      type: 'multiple-choice',
      stem: 'What is the LCM of 4, 6 and 8?',
      tier: 'core',
      options: ['24', '48', '12', '16'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'ftn-mis-lcm-pair-then-third',
      hint: 'Multiples of 8: 8, 16, 24, 32. 24 is divisible by 4 (24/4 = 6) and 6 (24/6 = 4), so 24 is the LCM. 12 fails because it does not divide by 8.',
    },
    // Core 3: HCF when one number divides the others
    {
      id: 'ftn-q3',
      type: 'numeric-entry',
      stem: 'What is the HCF of 6, 12 and 24?',
      tier: 'core',
      correctAnswer: 6,
      xpValue: 10,
      hint: 'Since 6 divides both 12 (12/6 = 2) and 24 (24/6 = 4), the smallest input 6 is itself the HCF.',
    },
    // Core 4: LCM where one number is a multiple of the others
    {
      id: 'ftn-q4',
      type: 'multiple-choice',
      stem: 'What is the LCM of 3, 6 and 12?',
      tier: 'core',
      options: ['36', '24', '6', '12'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Since 12 is already a multiple of both 3 (12/3 = 4) and 6 (12/6 = 2), the largest input 12 is itself the LCM.',
    },
    // Core 5: HCF where the only shared factor is 1
    {
      id: 'ftn-q5',
      type: 'multiple-choice',
      stem: 'What is the HCF of 7, 9 and 10?',
      tier: 'core',
      options: ['7', '1', '630', '70'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'ftn-mis-hcf-must-exceed-one',
      hint: 'Factors of 7: 1, 7. Factors of 9: 1, 3, 9. Factors of 10: 1, 2, 5, 10. The only number in all three lists is 1. So HCF = 1.',
    },
    // Core 6: LCM of three coprime numbers (= product)
    {
      id: 'ftn-q6',
      type: 'numeric-entry',
      stem: 'What is the LCM of 2, 3 and 5?',
      tier: 'core',
      correctAnswer: 30,
      xpValue: 10,
      hint: '2, 3 and 5 share no common factor other than 1 (pairwise coprime). For coprime numbers the LCM is just the product: 2 x 3 x 5 = 30.',
    },
    // Core 7: identify when smaller is the HCF
    {
      id: 'ftn-q7',
      type: 'multiple-choice',
      stem: 'What is the HCF of 5, 10 and 20?',
      tier: 'core',
      options: ['1', '20', '5', '10'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Since 5 divides both 10 (10/5 = 2) and 20 (20/5 = 4), the smallest input 5 is itself the HCF.',
    },
    // Confident 1: HCF using prime factorisation
    {
      id: 'ftn-q8',
      type: 'numeric-entry',
      stem: 'Three numbers have prime factorisations 2 x 2 x 3 x 5, 2 x 3 x 3 x 5, and 2 x 3 x 5 x 7. What is their HCF?',
      tier: 'confident',
      correctAnswer: 30,
      xpValue: 15,
      hint: 'For HCF take the smallest power of each prime that appears in ALL three. Each has at least one 2, one 3, and one 5; no number has 7 in all three. HCF = 2 x 3 x 5 = 30.',
    },
    // Confident 2: spot-misconception on HCF "pair then third"
    {
      id: 'ftn-q9',
      type: 'spot-misconception',
      stem: 'Liam says "to find the LCM of 4, 6 and 8, I just compute LCM(4, 6) = 12 and stop, because 12 is bigger than 8 so 8 must already divide it".',
      tier: 'confident',
      statements: [
        {
          text: 'Liam is right. Once the LCM of two numbers is bigger than the third, you do not need to involve the third.',
          isMisconception: true,
        },
        {
          text: 'In fact you must check the third number too. LCM(4, 6) = 12, but 12 is NOT divisible by 8 (12/8 = 1.5). The true LCM(4, 6, 8) = 24. The third number always has to fit; never assume.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'ftn-mis-lcm-pair-then-third',
    },
    // Confident 3: missing-step LCM by primes
    {
      id: 'ftn-q10',
      type: 'missing-step',
      stem: 'Fill in the missing step. Aisha finds the LCM of 6, 9 and 10.',
      tier: 'confident',
      steps: [
        '6 = 2 x 3,  9 = 3 x 3,  10 = 2 x 5.',
        'Largest power of 2: 2 (from 6 or 10). Largest power of 3: 3 x 3 (from 9). Largest power of 5: 5 (from 10).',
        null,
        'So LCM(6, 9, 10) = 90. Check: 90/6 = 15, 90/9 = 10, 90/10 = 9, all whole numbers.',
      ],
      missingStepIndex: 2,
      correctStep: 'Multiply the largest powers together: 2 x 3 x 3 x 5 = 90.',
      xpValue: 20,
    },
    // Confident 4: HCF for simplifying a sum of three fractions
    {
      id: 'ftn-q11',
      type: 'multiple-choice',
      stem: 'Maya wants to add 1/4 + 1/6 + 1/8. What is the smallest common denominator she should use?',
      tier: 'confident',
      options: ['12', '48', '24', '192'],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'ftn-mis-lcm-product-of-three',
      hint: 'The smallest common denominator is LCM(4, 6, 8). Multiples of 8: 8, 16, 24. 24 divides by 4 (yes) and 6 (yes, 24/6 = 4). So 24 is the LCM. 12 fails the 8-test; 192 over-counts shared factors.',
    },
    // Confident 5: LCM via primes (drag-order three LCMs)
    {
      id: 'ftn-q12',
      type: 'drag-order',
      stem: 'Drag these triples into order from the SMALLEST LCM to the LARGEST LCM.',
      tier: 'confident',
      items: [
        'LCM(2, 3, 4)',
        'LCM(3, 4, 6)',
        'LCM(4, 6, 9)',
        'LCM(5, 6, 8)',
      ],
      correctOrder: [0, 1, 2, 3],
      xpValue: 20,
      hint: 'LCM(2,3,4) = 12. LCM(3,4,6) = 12. Tie broken by alphabetical of the next, but in fact LCM(3,4,6) = 12 and LCM(4,6,9) = 36, LCM(5,6,8) = 120. Order: 12, 12, 36, 120.',
    },
    // Confident 6: HCF from three-circle Venn (centre product)
    {
      id: 'ftn-q13',
      type: 'multiple-choice',
      stem: 'A three-circle Venn diagram of the prime factors of 20, 30 and 50 shows the very centre region containing 2 and 5. What is the HCF of 20, 30 and 50?',
      tier: 'confident',
      options: ['100', '7', '300', '10'],
      correctIndex: 3,
      xpValue: 15,
      hint: 'HCF = product of every prime in the CENTRE region (shared by all three): 2 x 5 = 10. Check: 20/10 = 2, 30/10 = 3, 50/10 = 5, all whole.',
    },
    // Confident 7: Identifies false claim that HCF(a,b,c) = HCF(a,b)
    {
      id: 'ftn-q14',
      type: 'multiple-choice',
      stem: 'HCF(12, 18) = 6. What is HCF(12, 18, 25)?',
      tier: 'confident',
      options: ['1', '6', '25', '150'],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'ftn-mis-hcf-pair-then-third',
      hint: 'Adding 25 to the set may shrink the HCF. Factors of 25: 1, 5, 25. None of 5 or 25 divides 12, so the only common factor of all three is 1. HCF = 1.',
    },
    // Confident 8: spot-misconception on adding the third (HCF)
    {
      id: 'ftn-q15',
      type: 'spot-misconception',
      stem: 'Aisha says "to find the HCF of 12, 18 and 25, take HCF(12, 18) = 6 then say the answer is 6 because the third number 25 does not change anything".',
      tier: 'confident',
      statements: [
        {
          text: 'Aisha is right. Once you have the HCF of any two numbers, the third has no effect.',
          isMisconception: true,
        },
        {
          text: 'In fact the HCF can only stay the same or shrink when more numbers are added. Here 25 has factors 1, 5, 25; none of 5 or 25 divides 12 or 18, so the only common factor of all three is 1. HCF(12, 18, 25) = 1.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'ftn-mis-hcf-pair-then-third',
    },
    // Challenge 1: three buses scheduling word problem (Bond stretch)
    {
      id: 'ftn-q16',
      type: 'numeric-entry',
      stem: 'Three buses leave the Sevenoaks bus stop together at 9:00 a.m. Route A leaves every 12 minutes, route B every 15 minutes, and route C every 18 minutes. After how many minutes do all three buses next leave together?',
      tier: 'challenge',
      correctAnswer: 180,
      unit: 'minutes',
      xpValue: 25,
      hint: 'Find LCM(12, 15, 18). 12 = 2 x 2 x 3, 15 = 3 x 5, 18 = 2 x 3 x 3. LCM = 2 x 2 x 3 x 3 x 5 = 180 minutes (which is 3 hours later, at 12:00 noon).',
    },
    // Challenge 2: three lighthouses (LCM word problem, primes)
    {
      id: 'ftn-q17',
      type: 'numeric-entry',
      stem: 'Three lighthouses on the Dover coast flash at intervals of 10, 12 and 15 seconds respectively. They flash together at midnight. How many seconds pass before they next all flash together?',
      tier: 'challenge',
      correctAnswer: 60,
      unit: 'seconds',
      xpValue: 25,
      hint: 'LCM(10, 12, 15). 10 = 2 x 5, 12 = 2 x 2 x 3, 15 = 3 x 5. LCM = 2 x 2 x 3 x 5 = 60 seconds (one minute).',
    },
    // Challenge 3: HCF rectangle/cube context (largest cube tile)
    {
      id: 'ftn-q18',
      type: 'multiple-choice',
      stem: 'A box has dimensions 60 cm by 36 cm by 24 cm. It is to be packed with identical cubes leaving no gaps. What is the largest cube side length, in centimetres, that fits perfectly?',
      tier: 'challenge',
      options: ['6 cm', '12 cm', '4 cm', '2 cm'],
      correctIndex: 1,
      xpValue: 25,
      hint: 'Largest cube fitting all three sides perfectly = HCF(60, 36, 24). 60 = 2 x 2 x 3 x 5, 36 = 2 x 2 x 3 x 3, 24 = 2 x 2 x 2 x 3. Shared lowest powers: 2 x 2 x 3 = 12 cm.',
    },
    // Challenge 4: fraction sum word problem (LCM denominator)
    {
      id: 'ftn-q19',
      type: 'multiple-choice',
      stem: 'A baker uses 1/4 of her flour for bread, 1/6 for cakes, and 1/9 for biscuits. She wants to add the three fractions to find the total share used. What is the smallest common denominator she should use?',
      tier: 'challenge',
      options: ['72', '54', '24', '36'],
      correctIndex: 3,
      xpValue: 25,
      hint: 'Smallest common denominator = LCM(4, 6, 9). 4 = 2 x 2, 6 = 2 x 3, 9 = 3 x 3. LCM = 2 x 2 x 3 x 3 = 36.',
    },
    // Challenge 5: HCF + LCM combined (two-step Bond)
    {
      id: 'ftn-q20',
      type: 'numeric-entry',
      stem: 'Three numbers are 18, 24 and 30. Calculate their HCF and their LCM, then give the LCM divided by the HCF.',
      tier: 'challenge',
      correctAnswer: 60,
      xpValue: 25,
      hint: 'HCF(18, 24, 30) = 6 (each shares one 2 and one 3). LCM(18, 24, 30): 18 = 2 x 3 x 3, 24 = 2 x 2 x 2 x 3, 30 = 2 x 3 x 5. LCM = 2 x 2 x 2 x 3 x 3 x 5 = 360. Then 360 / 6 = 60.',
    },
    // Challenge 6: prime-factor LCM (no listing feasible)
    {
      id: 'ftn-q21',
      type: 'multiple-choice',
      stem: 'Three numbers have prime factorisations 2 x 2 x 3, 2 x 3 x 3 x 5, and 2 x 2 x 5 x 7. What is their LCM?',
      tier: 'challenge',
      options: ['30', '60', '1260', '420'],
      correctIndex: 2,
      xpValue: 25,
      hint: 'For LCM take the largest power of each prime in ANY of the three. Largest power of 2: 2 x 2. Largest power of 3: 3 x 3. Largest of 5: 5. Largest of 7: 7. LCM = 2 x 2 x 3 x 3 x 5 x 7 = 1260.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a three-number LCM question where pupils computed the LCM of two of the inputs and stopped, ignoring the third number.
    {
      id: 'ftn-mis-lcm-pair-then-third',
      description:
        'I find the LCM of two of the three numbers and stop, assuming the third must already divide the answer.',
      triggerAnswer: 'lcm-pair-then-third',
      correction:
        'Actually the third number has to fit too. Always check that your answer is divisible by ALL three inputs, not just the first pair.',
      reExplanation:
        'For LCM(4, 6, 8): pairing first gives LCM(4, 6) = 12, but 12 is not divisible by 8 (12/8 = 1.5). The true LCM(4, 6, 8) = 24. The safe method is prime factorisation: 4 = 2 x 2, 6 = 2 x 3, 8 = 2 x 2 x 2. Take the largest power of each prime across all three: 2 x 2 x 2 x 3 = 24. Always include every input.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 1F (Foundation, Non-calculator), commentary on a three-number HCF question where pupils gave the HCF of two of the inputs and ignored the third.
    {
      id: 'ftn-mis-hcf-pair-then-third',
      description:
        'I find the HCF of two of the three numbers and assume that adding a third number cannot change the answer.',
      triggerAnswer: 'hcf-pair-then-third',
      correction:
        'In fact adding a number to the set can only keep the HCF the same or shrink it. The third number must share the candidate factor too.',
      reExplanation:
        'HCF(12, 18) = 6, but HCF(12, 18, 25) = 1 because 25 has no factor in common with 12 or 18 except 1. The correct method is to list the factors of all three (or use primes) and take the LARGEST factor that appears in EVERY list. The HCF cannot exceed the smallest input, and any input can shrink it.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2022, Paper 01 (Foundation, Non-calculator), commentary on a multi-number HCF question where pupils ruled out the answer 1, believing every triple must share a common factor greater than 1.
    {
      id: 'ftn-mis-hcf-must-exceed-one',
      description:
        'I think the HCF of three numbers must always be greater than 1, so I rule out the answer 1.',
      triggerAnswer: 'hcf-must-exceed-one',
      correction:
        'Actually 1 is a perfectly valid HCF. Whenever the three numbers share no common factor other than 1, the HCF is 1.',
      reExplanation:
        'HCF(7, 9, 10): factors of 7 are 1, 7. Factors of 9 are 1, 3, 9. Factors of 10 are 1, 2, 5, 10. The only number on all three lists is 1, so HCF = 1. Three numbers like this are called pairwise coprime. The number 1 is always a common factor of every set; it is the answer when nothing larger fits.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "HCF and LCM with prime factors" page, "Common mistake" callout warning pupils to take the HIGHEST power for LCM (and the lowest for HCF), not just one factor of each prime.
    {
      id: 'ftn-mis-prime-power-mixed-up',
      description:
        'When using prime factorisation I take one of each prime instead of the largest power for LCM (or smallest power for HCF), giving 2 x 3 = 6 for LCM(8, 12, 18) instead of 72.',
      triggerAnswer: 'prime-power-mixed-up',
      correction:
        'In fact LCM uses the LARGEST power of each prime that appears in any number, not just one copy. HCF uses the SMALLEST power.',
      reExplanation:
        'LCM(8, 12, 18): 8 = 2 x 2 x 2, 12 = 2 x 2 x 3, 18 = 2 x 3 x 3. Largest power of 2 is 2 x 2 x 2 (from 8); largest power of 3 is 3 x 3 (from 18). LCM = 2 x 2 x 2 x 3 x 3 = 72. For HCF take the SMALLEST power per prime in EVERY number; since 8 has no 3, HCF(8, 12, 18) = 2.',
    },
    // Source: NCETM Secondary Magazine, Issue 124, article on HCF/LCM misconceptions, citing pupils who multiplied all three inputs together to find the LCM regardless of shared factors.
    {
      id: 'ftn-mis-lcm-product-of-three',
      description:
        'I find the LCM of three numbers by multiplying them all together, so LCM(4, 6, 8) = 192.',
      triggerAnswer: 'lcm-product-of-three',
      correction:
        'Actually multiplying all three only gives the LCM when every pair is coprime. Otherwise the LCM is smaller.',
      reExplanation:
        'LCM(4, 6, 8) = 24, not 4 x 6 x 8 = 192. The numbers share factors of 2, so the product over-counts. Multiplying gives the LCM only when all three share no common factor other than 1, like LCM(2, 3, 5) = 30 (which IS 2 x 3 x 5). The safe rule is prime factorisation: largest power of each prime, multiplied together.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 2F (Foundation, Calculator), commentary on a three-number scheduling LCM word problem where pupils gave the HCF instead of the LCM.
    {
      id: 'ftn-mis-scheduling-uses-hcf',
      description:
        'In a scheduling word problem (three events repeat at fixed intervals; when do they next coincide?), I use the HCF of the intervals instead of the LCM.',
      triggerAnswer: 'scheduling-uses-hcf',
      correction:
        'In fact "when do all three next coincide" needs the LCM (the smallest time that is a multiple of every interval), not the HCF.',
      reExplanation:
        'Three buses leave every 12, 15 and 18 minutes. They meet again when the elapsed time is a multiple of all three, so the answer is LCM(12, 15, 18) = 180 minutes. HCF(12, 15, 18) = 3 is not a multiple of any input, so it cannot be a meeting time. Signal phrases: "when do they meet" or "all happen at once" always mean LCM.',
    },
    // Authored, no external source: classroom-observed slip where pupils, asked for HCF of three numbers, give the smallest of the three inputs by reflex.
    {
      id: 'ftn-mis-hcf-is-smallest-of-three',
      description:
        'I think the HCF of three numbers is always the smallest of the three, so HCF(8, 12, 18) = 8.',
      triggerAnswer: 'hcf-is-smallest-of-three',
      correction:
        'Actually the smallest input is the HCF only when it divides all the others. Otherwise the HCF is strictly smaller than the smallest input.',
      reExplanation:
        'HCF(8, 12, 18): does 8 divide 12? 12/8 = 1.5, so no. So 8 cannot be the HCF. Listing factors: 8 has 1, 2, 4, 8; 12 has 1, 2, 3, 4, 6, 12; 18 has 1, 2, 3, 6, 9, 18. The largest factor in all three lists is 2, so HCF = 2. The smallest IS the HCF in cases like HCF(6, 12, 24) = 6, where 6 divides everyone, but never assume.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const factorsMultiplesThreeNumbersZoneNodes = [factorsMultiplesThreeNumbers]
