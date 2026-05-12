import type { SkillNode } from '@/types/content'

export const factorsMultiplesViaPrimeFactorisation: SkillNode = {
  id: 'maths-factors-multiples-via-prime-factorisation',
  title: 'Finding HCF and LCM via Prime Factorisation',
  description:
    'Use prime factorisation to find the HCF and LCM of two or more numbers without listing factors or multiples. For each prime, the HCF takes the LOWEST power that appears in every number, and the LCM takes the HIGHEST power that appears in any number. A Venn diagram of prime factors makes the split visible: shared primes sit in the overlap (multiply for HCF), every prime in the union (multiply for LCM). For two numbers, HCF x LCM = a x b, a useful sanity check.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-factors-multiples',
  zoneName: 'Factors and Multiples',
  tier: 'challenge',
  prerequisites: [
    'maths-factors-multiples-hcf-lcm',
    'maths-primes-prime-factorisation',
  ],
  curriculum: {
    ks3Objective:
      'Use the concepts and vocabulary of prime factorisation, including using product notation and the unique factorisation property; apply this to HCF and LCM.',
    awardingBodies: {
      aqa: 'N4 Use prime factorisation (via Venn diagrams) to find HCF and LCM (GCSE Mathematics 8300)',
      edexcel: 'N4 Use prime factorisation (via Venn diagrams) to find HCF and LCM (GCSE Mathematics 1MA1)',
      ocr: '2.03b Apply prime factorisation to HCF and LCM, including index notation (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'fvp-scene-prime-trees',
      title: 'Two Prime Trees, Side by Side',
      type: 'simulation',
      instructions:
        'See how 60 and 72 break down into primes. 60 splits as 6 x 10, then 6 = 2 x 3 and 10 = 2 x 5, giving 60 = 2 x 2 x 3 x 5 = 2^2 x 3 x 5. 72 splits as 8 x 9, then 8 = 2 x 2 x 2 and 9 = 3 x 3, giving 72 = 2 x 2 x 2 x 3 x 3 = 2^3 x 3^2. The two factorisations share the primes 2 and 3 but have different powers. The prime 5 appears in 60 only.',
      data: {
        numbers: [60, 72],
        trees: {
          '60': ['60 = 6 x 10', '6 = 2 x 3', '10 = 2 x 5', '60 = 2^2 x 3 x 5'],
          '72': ['72 = 8 x 9', '8 = 2 x 2 x 2', '9 = 3 x 3', '72 = 2^3 x 3^2'],
        },
        rule: 'Every integer above 1 has one and only one prime factorisation (unique factorisation property).',
      },
    },
    {
      id: 'fvp-scene-venn-of-primes',
      title: 'Venn Diagram of the Prime Factors',
      type: 'labelled-diagram',
      instructions:
        'A Venn diagram of the prime factors of 60 and 72 places shared primes in the overlap and unshared primes in the outer regions. 60 = 2^2 x 3 x 5 and 72 = 2^3 x 3^2. The overlap (shared) holds two 2s and one 3. The 60-only region holds one 5. The 72-only region holds one extra 2 and one extra 3. Multiplying the overlap gives the HCF; multiplying the whole diagram gives the LCM.',
      data: {
        viewBox: '0 0 200 120',
        hotspots: [
          { id: 'fvp-h-60-only', x: 25, y: 50, label: '60 only: 5', description: 'Prime in 60 but not in 72.' },
          { id: 'fvp-h-shared', x: 50, y: 50, label: 'Shared: 2, 2, 3', description: 'Primes in both numbers, taken at the LOWEST power present in either. Product = 2 x 2 x 3 = 12 = HCF.' },
          { id: 'fvp-h-72-only', x: 75, y: 50, label: '72 only: 2, 3', description: 'Extra primes in 72 needed to top up to its HIGHEST powers (2^3 needs one more 2; 3^2 needs one more 3).' },
          { id: 'fvp-h-hcf', x: 35, y: 100, label: 'HCF = 12', description: 'Multiply the overlap only: 2 x 2 x 3 = 12.' },
          { id: 'fvp-h-lcm', x: 65, y: 100, label: 'LCM = 360', description: 'Multiply the whole diagram (each entry once): 5 x 2 x 2 x 3 x 2 x 3 = 360.' },
        ],
      },
    },
    {
      id: 'fvp-scene-power-table',
      title: 'Power Table for HCF and LCM',
      type: 'simulation',
      instructions:
        'Compare the powers of each prime side by side. For 60 = 2^2 x 3^1 x 5^1 and 72 = 2^3 x 3^2 x 5^0, write the powers in a row for each number. The HCF row takes the MINIMUM in each column; the LCM row takes the MAXIMUM. So HCF = 2^2 x 3^1 x 5^0 = 12 and LCM = 2^3 x 3^2 x 5^1 = 360. Note that 5^0 = 1, so any prime missing from one number contributes 1 to the HCF (no effect) but its full power to the LCM.',
      data: {
        numbers: [60, 72],
        primes: [2, 3, 5],
        powers: { '60': [2, 1, 1], '72': [3, 2, 0] },
        hcfPowers: [2, 1, 0],
        lcmPowers: [3, 2, 1],
        hcf: 12,
        lcm: 360,
        check: { hcfTimesLcm: 4320, productOfInputs: 4320 },
        rule: 'HCF takes MIN power per prime; LCM takes MAX power per prime. For two numbers, HCF x LCM = a x b.',
      },
    },
    {
      id: 'fvp-scene-three-numbers',
      title: 'Same Method for Three Numbers',
      type: 'simulation',
      instructions:
        'See how the power-table method extends to three numbers without changing. For 12 = 2^2 x 3, 18 = 2 x 3^2 and 30 = 2 x 3 x 5, build a row for each. HCF takes the MIN across all three rows in each column. LCM takes the MAX. Result: HCF = 2^1 x 3^1 x 5^0 = 6 and LCM = 2^2 x 3^2 x 5^1 = 180. The check HCF x LCM = a x b only works for TWO numbers; for three or more, use direct division to verify each input divides the LCM.',
      data: {
        numbers: [12, 18, 30],
        primes: [2, 3, 5],
        powers: { '12': [2, 1, 0], '18': [1, 2, 0], '30': [1, 1, 1] },
        hcfPowers: [1, 1, 0],
        lcmPowers: [2, 2, 1],
        hcf: 6,
        lcm: 180,
        rule: 'For three or more numbers, MIN and MAX are taken across every row. HCF x LCM = a x b is a TWO-number rule only.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'fvp-worked-1',
      title: 'Find the HCF of 84 and 120 via prime factorisation',
      steps: [
        {
          explanation: 'Factorise the first number into primes using a factor tree.',
          maths: '84 = 4 x 21 = 2^2 x 3 x 7',
        },
        {
          explanation: 'Factorise the second number into primes.',
          maths: '120 = 8 x 15 = 2^3 x 3 x 5',
        },
        {
          explanation: 'List the primes that appear in BOTH numbers (shared primes).',
          maths: 'shared primes: 2, 3',
        },
        {
          explanation: 'For each shared prime, take the LOWEST power present.',
          maths: '2: min(2, 3) = 2; 3: min(1, 1) = 1',
        },
        {
          explanation: 'Multiply the shared primes at their lowest powers.',
          maths: 'HCF = 2^2 x 3 = 4 x 3 = 12',
        },
        {
          explanation: 'Verify by division: 84 / 12 = 7 (whole) and 120 / 12 = 10 (whole). So HCF(84, 120) = 12.',
          maths: 'HCF(84, 120) = 12',
        },
      ],
    },
    {
      id: 'fvp-worked-2',
      title: 'Find the LCM of 84 and 120 via prime factorisation',
      steps: [
        {
          explanation: 'Reuse the prime factorisations from the previous example.',
          maths: '84 = 2^2 x 3 x 7; 120 = 2^3 x 3 x 5',
        },
        {
          explanation: 'List EVERY prime that appears in EITHER number (the union).',
          maths: 'all primes: 2, 3, 5, 7',
        },
        {
          explanation: 'For each prime, take the HIGHEST power present in either number.',
          maths: '2: max(2, 3) = 3; 3: max(1, 1) = 1; 5: max(0, 1) = 1; 7: max(1, 0) = 1',
        },
        {
          explanation: 'Multiply the primes at their highest powers.',
          maths: 'LCM = 2^3 x 3 x 5 x 7 = 8 x 3 x 5 x 7',
        },
        {
          explanation: 'Work the product step by step.',
          maths: 'LCM = 8 x 105 = 840',
        },
        {
          explanation: 'Sanity check using HCF x LCM = a x b. 12 x 840 = 10080 and 84 x 120 = 10080. So LCM(84, 120) = 840.',
          maths: 'check: 12 x 840 = 84 x 120 = 10080',
        },
      ],
    },
  ],
  questions: [
    // Core 1: HCF directly from given factorisations (smallest powers)
    {
      id: 'fvp-q1',
      type: 'multiple-choice',
      stem: 'Two numbers have prime factorisations 2^2 x 3 x 5 and 2 x 3^2 x 5. What is their HCF?',
      tier: 'core',
      options: ['180', '90', '30', '15'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'fvp-mis-hcf-uses-either',
      hint: 'HCF takes only SHARED primes at the LOWEST power. 2: min(2, 1) = 1. 3: min(1, 2) = 1. 5: min(1, 1) = 1. HCF = 2 x 3 x 5 = 30.',
    },
    // Core 2: LCM directly from given factorisations (highest powers)
    {
      id: 'fvp-q2',
      type: 'numeric-entry',
      stem: 'Two numbers have prime factorisations 2^2 x 3 and 2 x 3^2. What is their LCM?',
      tier: 'core',
      correctAnswer: 36,
      xpValue: 10,
      hint: 'LCM takes the HIGHEST power of each prime. 2: max(2, 1) = 2. 3: max(1, 2) = 2. LCM = 2^2 x 3^2 = 4 x 9 = 36.',
    },
    // Core 3: identify which rule (min/max) belongs to HCF
    {
      id: 'fvp-q3',
      type: 'multiple-choice',
      stem: 'When using prime factorisations to find an HCF, which power of each shared prime do you take?',
      tier: 'core',
      options: [
        'The HIGHEST power that appears in either number.',
        'The LOWEST power that appears in either number.',
        'The sum of the powers from both numbers.',
        'The product of the powers from both numbers.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'fvp-mis-hcf-takes-max',
      hint: 'HCF means the LARGEST factor that divides BOTH. A factor that uses a higher power than one number has cannot divide that number. So take the LOWEST power.',
    },
    // Core 4: LCM rule
    {
      id: 'fvp-q4',
      type: 'multiple-choice',
      stem: 'When using prime factorisations to find an LCM, which power of each prime do you take?',
      tier: 'core',
      options: [
        'The lowest power that appears in either number.',
        'The product of the powers.',
        'The sum of the powers.',
        'The highest power that appears in either number.',
      ],
      correctIndex: 3,
      xpValue: 10,
      hint: 'The LCM must be DIVISIBLE BY both numbers. A multiple needs at least the highest power of each prime; lower powers would leave a number short.',
    },
    // Core 5: HCF when one prime is missing from one number
    {
      id: 'fvp-q5',
      type: 'numeric-entry',
      stem: 'Numbers a and b have prime factorisations a = 2^3 x 3 and b = 2^2 x 5. What is HCF(a, b)?',
      tier: 'core',
      correctAnswer: 4,
      xpValue: 10,
      misconceptionId: 'fvp-mis-include-unshared-in-hcf',
      hint: 'Only primes in BOTH count for HCF. 2 is in both (min power 2). 3 is in a only, 5 is in b only, so neither contributes to HCF. HCF = 2^2 = 4.',
    },
    // Core 6: LCM when one prime is missing from one number (must include it)
    {
      id: 'fvp-q6',
      type: 'multiple-choice',
      stem: 'Numbers a and b have prime factorisations a = 2^3 x 3 and b = 2^2 x 5. What is LCM(a, b)?',
      tier: 'core',
      options: ['12', '120', '24', '60'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'fvp-mis-ignore-unshared-in-lcm',
      hint: 'For LCM, include EVERY prime at its highest power, even if it appears in only one number. 2: max(3, 2) = 3. 3: max(1, 0) = 1. 5: max(0, 1) = 1. LCM = 2^3 x 3 x 5 = 120.',
    },
    // Core 7: spot-misconception on hcf-takes-max
    {
      id: 'fvp-q7',
      type: 'spot-misconception',
      stem: 'Tom finds the HCF of 2^2 x 3 and 2 x 3^2 by taking the HIGHEST power of each shared prime. He writes HCF = 2^2 x 3^2 = 36.',
      tier: 'core',
      statements: [
        {
          text: 'Tom is right. HCF and LCM both use the highest power of each shared prime.',
          isMisconception: true,
        },
        {
          text: 'In fact 36 is the LCM, not the HCF. HCF takes the LOWEST power of each SHARED prime: min(2, 1) = 1 for 2, and min(1, 2) = 1 for 3. So HCF = 2 x 3 = 6. The MIN rule for HCF and the MAX rule for LCM point in opposite directions.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fvp-mis-hcf-takes-max',
    },
    // Confident 1: HCF from raw numbers via factorisation
    {
      id: 'fvp-q8',
      type: 'numeric-entry',
      stem: 'Use prime factorisation to find the HCF of 90 and 126.',
      tier: 'confident',
      correctAnswer: 18,
      xpValue: 15,
      hint: '90 = 2 x 3^2 x 5. 126 = 2 x 3^2 x 7. Shared primes: 2 and 3. HCF = 2 x 3^2 = 2 x 9 = 18.',
    },
    // Confident 2: LCM from raw numbers via factorisation
    {
      id: 'fvp-q9',
      type: 'multiple-choice',
      stem: 'Use prime factorisation to find the LCM of 90 and 126.',
      tier: 'confident',
      options: ['630', '270', '378', '11340'],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'fvp-mis-lcm-is-product',
      hint: '90 = 2 x 3^2 x 5; 126 = 2 x 3^2 x 7. Highest powers: 2^1, 3^2, 5^1, 7^1. LCM = 2 x 9 x 5 x 7 = 630.',
    },
    // Confident 3: missing-step worked example for LCM
    {
      id: 'fvp-q10',
      type: 'missing-step',
      stem: 'Fill in the missing step. Aisha finds the LCM of 24 and 90 via prime factorisation.',
      tier: 'confident',
      steps: [
        '24 = 2^3 x 3.',
        '90 = 2 x 3^2 x 5.',
        null,
        'LCM = 2^3 x 3^2 x 5 = 8 x 9 x 5 = 360.',
      ],
      missingStepIndex: 2,
      correctStep: 'For each prime, take the highest power present: 2 gives max(3, 1) = 3, 3 gives max(1, 2) = 2, 5 gives max(0, 1) = 1.',
      xpValue: 20,
    },
    // Confident 4: drag-order four computations by HCF size
    {
      id: 'fvp-q11',
      type: 'drag-order',
      stem: 'Drag these pairs into order from the smallest HCF to the largest HCF, using prime factorisation.',
      tier: 'confident',
      items: [
        'HCF(2^2 x 3, 2 x 5)',
        'HCF(2^3 x 3, 2^2 x 3^2)',
        'HCF(2^2 x 3^2 x 5, 2^2 x 3 x 5^2)',
        'HCF(2 x 3 x 5, 2^2 x 3 x 7)',
      ],
      correctOrder: [0, 3, 1, 2],
      xpValue: 20,
      hint: 'Compute each: HCF(2^2 x 3, 2 x 5) = 2 (only 2 is shared, min power 1). HCF(2^3 x 3, 2^2 x 3^2) = 4 x 3 = 12. HCF(2^2 x 3^2 x 5, 2^2 x 3 x 5^2) = 4 x 3 x 5 = 60. HCF(2 x 3 x 5, 2^2 x 3 x 7) = 2 x 3 = 6. Order: 2, 6, 12, 60.',
    },
    // Confident 5: spot-misconception on LCM-as-product
    {
      id: 'fvp-q12',
      type: 'spot-misconception',
      stem: 'Niharika finds the LCM of 12 and 18 by writing 12 x 18 = 216.',
      tier: 'confident',
      statements: [
        {
          text: 'Niharika is right. LCM is found by multiplying the two numbers together.',
          isMisconception: true,
        },
        {
          text: 'In fact 216 is a common multiple but not the LOWEST. 12 = 2^2 x 3 and 18 = 2 x 3^2 share primes, so multiplying double-counts them. Highest powers give LCM = 2^2 x 3^2 = 36. The product 216 = HCF x LCM x 2 = 6 x 36, twice the LCM.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fvp-mis-lcm-is-product',
    },
    // Confident 6: HCF x LCM check
    {
      id: 'fvp-q13',
      type: 'numeric-entry',
      stem: 'Two numbers a and b have HCF 8 and LCM 120. If a = 24, what is b?',
      tier: 'confident',
      correctAnswer: 40,
      xpValue: 15,
      misconceptionId: 'fvp-mis-hcf-plus-lcm',
      hint: 'For two numbers, HCF x LCM = a x b. So 8 x 120 = 24 x b, giving 960 = 24b, so b = 40. Check: 24 = 2^3 x 3 and 40 = 2^3 x 5. HCF = 2^3 = 8 and LCM = 2^3 x 3 x 5 = 120, both confirm.',
    },
    // Confident 7: HCF via factorisation, with Venn-region miscount distractors
    {
      id: 'fvp-q14',
      type: 'multiple-choice',
      stem: 'A Venn diagram of the prime factors of 72 and 108 has the overlap holding two 2s and two 3s. What is the HCF, taken from the overlap?',
      tier: 'confident',
      options: ['36', '12', '216', '6'],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'fvp-mis-power-miscount-from-venn',
      hint: 'Multiply EVERY entry in the overlap (count repeats): 2 x 2 x 3 x 3 = 36. (Two 2s give 2^2 = 4, not 2; two 3s give 3^2 = 9, not 3.)',
    },
    // Confident 8: LCM via factorisation for fraction common denominator
    {
      id: 'fvp-q15',
      type: 'multiple-choice',
      stem: 'Aisha adds 1/72 and 1/108. What is the lowest common denominator she should use, found via prime factorisation?',
      tier: 'confident',
      options: ['7776', '180', '36', '216'],
      correctIndex: 3,
      xpValue: 15,
      hint: 'The lowest common denominator is LCM(72, 108). 72 = 2^3 x 3^2 and 108 = 2^2 x 3^3. Highest powers: 2^3 and 3^3. LCM = 8 x 27 = 216.',
    },
    // Challenge 1: Bond-style word problem (lighthouses)
    {
      id: 'fvp-q16',
      type: 'numeric-entry',
      stem: 'Three lighthouses near Dover flash at intervals of 24, 36 and 60 seconds. They flash together at midnight. After how many seconds do they next all flash together, found by prime factorisation?',
      tier: 'challenge',
      correctAnswer: 360,
      unit: 'seconds',
      xpValue: 25,
      hint: '24 = 2^3 x 3; 36 = 2^2 x 3^2; 60 = 2^2 x 3 x 5. Highest powers: 2^3, 3^2, 5. LCM = 8 x 9 x 5 = 360 seconds (= 6 minutes).',
    },
    // Challenge 2: reverse problem
    {
      id: 'fvp-q17',
      type: 'multiple-choice',
      stem: 'Two numbers have HCF 12 and LCM 180. One number is 36. What is the other?',
      tier: 'challenge',
      options: ['54', '60', '15', '90'],
      correctIndex: 1,
      xpValue: 25,
      hint: 'HCF x LCM = a x b for two numbers. 12 x 180 = 36 x b, so 2160 = 36b, giving b = 60. Check: 60 = 2^2 x 3 x 5 and 36 = 2^2 x 3^2. HCF = 2^2 x 3 = 12 and LCM = 2^2 x 3^2 x 5 = 180, both confirm.',
    },
    // Challenge 3: three-number HCF and LCM
    {
      id: 'fvp-q18',
      type: 'numeric-entry',
      stem: 'Three numbers are 60, 84 and 90. Find their LCM via prime factorisation. (Tip: do NOT try the two-number identity HCF x LCM = a x b x c; it does not extend to three numbers.)',
      tier: 'challenge',
      correctAnswer: 1260,
      xpValue: 25,
      misconceptionId: 'fvp-mis-hcf-lcm-identity-extends',
      hint: '60 = 2^2 x 3 x 5; 84 = 2^2 x 3 x 7; 90 = 2 x 3^2 x 5. Highest powers across all three: 2^2, 3^2, 5^1, 7^1. LCM = 4 x 9 x 5 x 7 = 1260.',
    },
    // Challenge 4: spot-misconception about HCF x LCM = a + b
    {
      id: 'fvp-q19',
      type: 'multiple-choice',
      stem: 'Liam claims that HCF(a, b) + LCM(a, b) = a + b for any two numbers. He tries a = 4 and b = 6: HCF = 2, LCM = 12, so HCF + LCM = 14, but a + b = 10. Which statement explains why Liam is mistaken?',
      tier: 'challenge',
      options: [
        'The rule is HCF + LCM = a x b, not a + b. With a = 4 and b = 6, a x b = 24, which still does not match.',
        'The rule HCF x LCM = a x b holds, not addition. With a = 4 and b = 6, HCF x LCM = 2 x 12 = 24 = 4 x 6 = a x b. Liam confused multiplication with addition.',
        'Liam is right; his arithmetic just slipped. HCF + LCM does equal a + b for all two-number pairs.',
        'The rule applies only when a and b are coprime, so it fails for 4 and 6 because they share the factor 2.',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'fvp-mis-hcf-plus-lcm',
      hint: 'The correct sanity check is HCF x LCM = a x b (multiplication, not addition). For 4 and 6: 2 x 12 = 24 = 4 x 6, which works. Addition has no general formula relating HCF, LCM, a and b.',
    },
    // Challenge 5: bus scheduling, real-life Bond style
    {
      id: 'fvp-q20',
      type: 'numeric-entry',
      stem: 'In Tunbridge Wells, three bus services leave the station together at 8 a.m. Service A runs every 18 minutes, B every 24 minutes, and C every 30 minutes. Use prime factorisation to find how many minutes pass before all three next leave together.',
      tier: 'challenge',
      correctAnswer: 360,
      unit: 'minutes',
      xpValue: 25,
      hint: '18 = 2 x 3^2; 24 = 2^3 x 3; 30 = 2 x 3 x 5. Highest powers: 2^3, 3^2, 5. LCM = 8 x 9 x 5 = 360 minutes (= 6 hours, so the next together-departure is at 2 p.m.).',
    },
    // Challenge 6: HCF used to tile a paving slab problem (early KS4)
    {
      id: 'fvp-q21',
      type: 'multiple-choice',
      stem: 'A rectangular school courtyard measures 2^4 x 3 m by 2^2 x 3^2 x 5 m. The largest identical square slabs that pave it without cutting have side equal to the HCF of the two side lengths. What is this side length, in metres?',
      tier: 'challenge',
      options: ['12 m', '180 m', '60 m', '20 m'],
      correctIndex: 0,
      xpValue: 25,
      hint: 'Sides are 48 m and 180 m. From the prime factorisations, HCF = 2^min(4,2) x 3^min(1,2) x 5^min(0,1) = 2^2 x 3 = 12 m. Check: 48 / 12 = 4 and 180 / 12 = 15, both whole, so a 4 by 15 grid of 12 m slabs fits exactly.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 1H (Higher, Non-calculator), commentary on a Venn diagram HCF/LCM question where pupils took the highest power for HCF instead of the lowest.
    {
      id: 'fvp-mis-hcf-takes-max',
      description:
        'I take the HIGHEST power of each shared prime when finding HCF, so HCF(2^2 x 3, 2 x 3^2) = 2^2 x 3^2 = 36 instead of 6.',
      triggerAnswer: 'hcf-takes-max',
      correction:
        'Actually HCF takes the LOWEST power of each shared prime. The HIGHEST power rule belongs to LCM. The two rules point in opposite directions.',
      reExplanation:
        'HCF must DIVIDE both inputs, so it cannot use a higher power of a prime than either input has. For 2^2 x 3 and 2 x 3^2, taking 2^2 x 3^2 = 36 fails because 36 does not divide 2 x 3^2 = 18 (18 / 36 is less than 1). The correct HCF uses min powers: 2^1 x 3^1 = 6, which divides both 12 and 18.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 1H (Higher, Non-calculator), commentary on a prime-factor LCM question where pupils included only shared primes and ignored primes that appeared in just one number.
    {
      id: 'fvp-mis-ignore-unshared-in-lcm',
      description:
        'I think a prime that appears in only one number should be ignored when finding the LCM, so LCM(2^3 x 3, 2^2 x 5) = 2^3 = 8 instead of 120.',
      triggerAnswer: 'ignore-unshared-in-lcm',
      correction:
        'In fact LCM includes EVERY prime at its highest power, even if it appears in only one number. The LCM must be a multiple of both inputs.',
      reExplanation:
        'For 24 = 2^3 x 3 and 20 = 2^2 x 5: a common multiple must be divisible by both, so it needs the 3 from 24 AND the 5 from 20. LCM = 2^3 x 3 x 5 = 120. Treating a missing prime as power 0 makes this clear: max(1, 0) = 1 (still include) and max(0, 1) = 1 (still include). Only the HCF can drop a prime that is missing from one number.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 03 (Higher, Calculator), commentary on a Venn-diagram HCF question where pupils included primes from both circles when only the intersection should be used.
    {
      id: 'fvp-mis-include-unshared-in-hcf',
      description:
        'I include EVERY prime in the Venn diagram when finding HCF, not just the shared (intersection) primes. So HCF(2^3 x 3, 2^2 x 5) becomes 2^2 x 3 x 5 = 60 instead of 4.',
      triggerAnswer: 'include-unshared-in-hcf',
      correction:
        'Actually HCF uses only the SHARED region of the Venn diagram (the intersection). Primes in just one circle do not belong to the HCF.',
      reExplanation:
        'For 24 = 2^3 x 3 and 20 = 2^2 x 5, the Venn intersection holds only 2 (twice). The 3 sits in the 24-only region and the 5 sits in the 20-only region. HCF = 2^2 = 4, which divides both 24 and 20. Any prime in the HCF must divide every input, so primes in only one circle fail this test.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Prime factorisation HCF and LCM" page, "Common mistake" callout swapping the MIN/MAX rules.
    {
      id: 'fvp-mis-hcf-uses-either',
      description:
        'I confuse the HCF rule with the LCM rule, taking primes that appear in EITHER number for the HCF.',
      triggerAnswer: 'hcf-uses-either',
      correction:
        'In fact HCF uses primes shared by ALL the input numbers. The "either" rule belongs to the LCM.',
      reExplanation:
        'A useful test for which rule to use: HCF stands for Highest Common Factor. The word "common" means present in every input, so only shared primes count, and they take the lowest power. LCM stands for Lowest Common Multiple, and a multiple needs at least the highest power of every prime that appears anywhere, so the union and the max apply.',
    },
    // Source: NCETM Secondary Magazine, Issue 121, article on prime-factorisation LCM/HCF errors, citing pupil work that gave the LCM as the simple product of the two inputs even when they shared factors.
    {
      id: 'fvp-mis-lcm-is-product',
      description:
        'I find the LCM by multiplying the two inputs together, so LCM(12, 18) = 12 x 18 = 216.',
      triggerAnswer: 'lcm-is-product',
      correction:
        'Actually the product equals the LCM only when the two numbers share NO primes (coprime). When they share primes, the product double-counts and is too big.',
      reExplanation:
        'For 12 = 2^2 x 3 and 18 = 2 x 3^2, the product 12 x 18 = 216 = 2^3 x 3^3 includes one extra 2 and one extra 3 compared to the LCM. The LCM, taking max powers, is 2^2 x 3^2 = 36. Useful identity for two numbers: HCF x LCM = a x b, so LCM = (a x b) / HCF = 216 / 6 = 36.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1H (Higher, Non-calculator), commentary on a question relating HCF and LCM, where pupils used HCF + LCM = a + b instead of HCF x LCM = a x b.
    {
      id: 'fvp-mis-hcf-plus-lcm',
      description:
        'I think HCF + LCM = a + b for two numbers, so I add HCF and LCM to recover the input sum.',
      triggerAnswer: 'hcf-plus-lcm',
      correction:
        'In fact the correct identity is HCF x LCM = a x b (multiplication, not addition). Addition has no general identity.',
      reExplanation:
        'For 4 and 6: HCF = 2, LCM = 12. HCF + LCM = 14, but 4 + 6 = 10, so addition fails. HCF x LCM = 24 = 4 x 6, which holds. The product identity follows from prime factorisation: each prime contributes its min power (HCF) plus its max power (LCM) on the left, which equals the sum of the two original powers on the right (so the prime appears with the right total power).',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 4 "Number Operations" by Hart, on pupils miscounting powers when reading them off a Venn diagram region.
    {
      id: 'fvp-mis-power-miscount-from-venn',
      description:
        'I miscount the power of a prime when reading it off a Venn diagram region, so two 2s in the overlap become 2^1 instead of 2^2.',
      triggerAnswer: 'power-miscount-from-venn',
      correction:
        'Actually the power equals the number of times the prime appears in the region. Two 2s in the overlap means 2^2 = 4, not 2^1.',
      reExplanation:
        'Each prime in a Venn region is one factor. For HCF, multiply every entry in the overlap (counting repeats). For LCM, multiply every entry across the whole diagram. For 12 = 2^2 x 3 and 18 = 2 x 3^2 the overlap holds one 2 and one 3, so HCF = 6. The 12-only region adds an extra 2 and the 18-only region adds an extra 3 for the LCM.',
    },
    // Authored, no external source: classroom-observed slip where pupils believe the HCF x LCM = a x b identity holds for three or more numbers and use it to short-cut three-number problems.
    {
      id: 'fvp-mis-hcf-lcm-identity-extends',
      description:
        'I assume HCF x LCM = a x b x c for three numbers, generalising the two-number identity.',
      triggerAnswer: 'hcf-lcm-identity-extends',
      correction:
        'In fact HCF x LCM = a x b is a TWO-number identity only. For three or more numbers it generally fails. Verify by direct division instead.',
      reExplanation:
        'Take 4, 6 and 8: HCF = 2 and LCM = 24, so HCF x LCM = 48. But 4 x 6 x 8 = 192, not 48, so the identity does not extend. To check a three-number HCF or LCM, divide each input into the LCM (must be whole) and divide the HCF into each input (must be whole). For three numbers, the safer shortcut is to use prime factorisations directly with min and max across all three columns.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const factorsMultiplesViaPrimeFactorisationZoneNodes = [
  factorsMultiplesViaPrimeFactorisation,
]
