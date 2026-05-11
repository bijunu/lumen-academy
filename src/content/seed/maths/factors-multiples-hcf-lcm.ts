import type { SkillNode } from '@/types/content'

export const factorsMultiplesHcfLcm: SkillNode = {
  id: 'maths-factors-multiples-hcf-lcm',
  title: 'Highest Common Factor and Lowest Common Multiple',
  description:
    'Find the highest common factor (HCF) of two or more whole numbers as the largest number that divides them all. Find the lowest common multiple (LCM) as the smallest positive whole number that is a multiple of each. Use the HCF to simplify fractions in one step, and the LCM to find common denominators for adding and subtracting fractions.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-factors-multiples',
  zoneName: 'Factors and Multiples',
  tier: 'confident',
  prerequisites: ['maths-factors-multiples-finding-factors', 'maths-primes-recognising-primes'],
  curriculum: {
    ks3Objective:
      'Use the concepts and vocabulary of prime numbers, factors (divisors), multiples, common factors, common multiples, highest common factor, lowest common multiple, prime factorisation, including using product notation and the unique factorisation property.',
    awardingBodies: {
      aqa: 'N4 Use the concepts and vocabulary of factors, multiples, HCF and LCM (GCSE Mathematics 8300)',
      edexcel: 'N4 Use the concepts and vocabulary of factors, multiples, HCF and LCM (GCSE Mathematics 1MA1)',
      ocr: '2.03a Highest common factor and lowest common multiple (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'fml-scene-listing-pairs',
      title: 'Listing Pairs to Find the HCF',
      type: 'simulation',
      instructions:
        'See how the HCF of 12 and 18 is found by listing every factor of each number and picking the largest shared one. Factors of 12: 1, 2, 3, 4, 6, 12. Factors of 18: 1, 2, 3, 6, 9, 18. The shared factors are 1, 2, 3, 6. The largest shared factor is 6, so HCF(12, 18) = 6. Listing works for small numbers; for larger numbers the prime-factor method (next node) is faster.',
      data: {
        numberA: 12,
        numberB: 18,
        factorsA: [1, 2, 3, 4, 6, 12],
        factorsB: [1, 2, 3, 6, 9, 18],
        commonFactors: [1, 2, 3, 6],
        hcf: 6,
        rule: 'HCF = the largest number that divides both inputs without remainder.',
      },
    },
    {
      id: 'fml-scene-multiples-strip',
      title: 'Listing Multiples to Find the LCM',
      type: 'number-line',
      instructions:
        'See how the LCM of 4 and 6 is found by listing the multiples of each. Multiples of 4: 4, 8, 12, 16, 20, 24, ... Multiples of 6: 6, 12, 18, 24, 30, ... The first time the two lists meet is at 12. So LCM(4, 6) = 12. Continue further and 24 also appears in both lists, but 12 came first, so 12 is the LOWEST common multiple.',
      data: {
        min: 0,
        max: 30,
        majorTicks: [0, 4, 6, 8, 12, 16, 18, 20, 24, 30],
        numberA: 4,
        numberB: 6,
        multiplesA: [4, 8, 12, 16, 20, 24, 28],
        multiplesB: [6, 12, 18, 24, 30],
        commonMultiples: [12, 24],
        lcm: 12,
        rule: 'LCM = the smallest positive number that appears in both lists of multiples.',
      },
    },
    {
      id: 'fml-scene-venn',
      title: 'HCF and LCM from a Venn Diagram of Prime Factors',
      type: 'labelled-diagram',
      instructions:
        'Click each region of the Venn diagram to see how prime factors split between two numbers. 12 = 2 x 2 x 3, so its factors are placed in the 12-circle. 18 = 2 x 3 x 3, so its factors go in the 18-circle. The shared prime factors (one 2, one 3) sit in the overlap and multiply to give the HCF: 2 x 3 = 6. Multiplying every factor in the diagram (each shared one only once) gives the LCM: 2 x 2 x 3 x 3 = 36.',
      data: {
        viewBox: '0 0 200 120',
        hotspots: [
          { id: 'fml-h-12-only', x: 25, y: 50, label: '12 only: 2', description: 'Factor in 12 but not in 18 (one extra factor of 2).' },
          { id: 'fml-h-shared', x: 50, y: 50, label: 'Shared: 2, 3', description: 'Factors in both 12 and 18 (one 2 and one 3). HCF = 2 x 3 = 6.' },
          { id: 'fml-h-18-only', x: 75, y: 50, label: '18 only: 3', description: 'Factor in 18 but not in 12 (one extra factor of 3).' },
          { id: 'fml-h-lcm', x: 50, y: 95, label: 'LCM = 36', description: 'Multiply every factor across the whole diagram: 2 x (2 x 3) x 3 = 36.' },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'fml-worked-1',
      title: 'Find the HCF of 24 and 36 by listing',
      steps: [
        {
          explanation:
            'List every factor of the first number.',
          maths: 'factors of 24: 1, 2, 3, 4, 6, 8, 12, 24',
        },
        {
          explanation:
            'List every factor of the second number.',
          maths: 'factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36',
        },
        {
          explanation:
            'Pick out the factors that appear in both lists.',
          maths: 'common factors: 1, 2, 3, 4, 6, 12',
        },
        {
          explanation:
            'Choose the largest of the common factors.',
          maths: 'HCF = 12',
        },
        {
          explanation: 'So HCF(24, 36) = 12. Check: 24 / 12 = 2 and 36 / 12 = 3, both whole numbers.',
          maths: 'HCF(24, 36) = 12',
        },
      ],
    },
    {
      id: 'fml-worked-2',
      title: 'Find the LCM of 8 and 12 by listing multiples',
      steps: [
        {
          explanation:
            'List the first few multiples of the first number.',
          maths: 'multiples of 8: 8, 16, 24, 32, 40, 48',
        },
        {
          explanation:
            'List the first few multiples of the second number.',
          maths: 'multiples of 12: 12, 24, 36, 48',
        },
        {
          explanation:
            'Find the smallest number that appears in both lists.',
          maths: 'first common multiple: 24',
        },
        {
          explanation:
            'Confirm: 24 is divisible by both 8 (24/8 = 3) and 12 (24/12 = 2).',
          maths: 'LCM = 24',
        },
        {
          explanation: 'So LCM(8, 12) = 24. Note that 48 is also a common multiple but is not the LOWEST common multiple.',
          maths: 'LCM(8, 12) = 24',
        },
      ],
    },
  ],
  questions: [
    // Core 1: HCF of two small numbers
    {
      id: 'fml-q1',
      type: 'numeric-entry',
      stem: 'What is the HCF of 12 and 18?',
      tier: 'core',
      correctAnswer: 6,
      xpValue: 10,
      hint: 'Factors of 12: 1, 2, 3, 4, 6, 12. Factors of 18: 1, 2, 3, 6, 9, 18. Largest shared factor: 6.',
    },
    // Core 2: LCM of two small numbers
    {
      id: 'fml-q2',
      type: 'multiple-choice',
      stem: 'What is the LCM of 4 and 6?',
      tier: 'core',
      options: ['2', '24', '10', '12'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Multiples of 4: 4, 8, 12, 16, ... Multiples of 6: 6, 12, 18, ... First match: 12.',
    },
    // Core 3: identify HCF vs LCM language
    {
      id: 'fml-q3',
      type: 'multiple-choice',
      stem: 'Which calculation finds the smallest number that both 6 and 8 divide into?',
      tier: 'core',
      options: ['HCF(6, 8)', 'LCM(6, 8)', '6 + 8', '6 x 8'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'fml-mis-hcf-lcm-swap',
      hint: 'A number that 6 and 8 both go INTO is a common multiple. The smallest such is the LCM.',
    },
    // Core 4: HCF when one number divides the other
    {
      id: 'fml-q4',
      type: 'multiple-choice',
      stem: 'What is the HCF of 9 and 27?',
      tier: 'core',
      options: ['3', '27', '36', '9'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Because 9 divides 27 (27 = 3 x 9), 9 itself is the largest shared factor.',
    },
    // Core 5: LCM of coprime numbers (= product)
    {
      id: 'fml-q5',
      type: 'numeric-entry',
      stem: 'What is the LCM of 5 and 7?',
      tier: 'core',
      correctAnswer: 35,
      xpValue: 10,
      misconceptionId: 'fml-mis-lcm-always-product',
      hint: '5 and 7 share no factors other than 1 (coprime), so their LCM is just the product: 5 x 7 = 35.',
    },
    // Core 6: HCF distractor patterns
    {
      id: 'fml-q6',
      type: 'multiple-choice',
      stem: 'Which is the HCF of 16 and 24?',
      tier: 'core',
      options: ['16', '4', '8', '48'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'fml-mis-hcf-is-smaller',
      hint: 'Factors of 16: 1, 2, 4, 8, 16. Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24. Largest shared: 8.',
    },
    // Core 7: spot-misconception on hcf-lcm swap
    {
      id: 'fml-q7',
      type: 'spot-misconception',
      stem: 'Maya says "the HCF of 4 and 6 is 12 because 12 is the highest number that both 4 and 6 can go into".',
      tier: 'core',
      statements: [
        {
          text: 'Maya is right. The highest common factor is the highest number that both inputs go into.',
          isMisconception: true,
        },
        {
          text: 'In fact 12 is the LCM (Lowest Common Multiple) of 4 and 6, not the HCF. The HCF is the largest number that goes INTO both 4 and 6, which is 2. "HCF" and "LCM" describe opposite directions: divides into vs is divisible by.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fml-mis-hcf-lcm-swap',
    },
    // Core 8: LCM not just smaller of two
    {
      id: 'fml-q8',
      type: 'multiple-choice',
      stem: 'What is the LCM of 6 and 10?',
      tier: 'core',
      options: ['30', '2', '60', '16'],
      correctIndex: 0,
      xpValue: 10,
      hint: 'Multiples of 6: 6, 12, 18, 24, 30. Multiples of 10: 10, 20, 30. First match: 30.',
    },
    // Confident 1: HCF with three numbers
    {
      id: 'fml-q9',
      type: 'numeric-entry',
      stem: 'What is the HCF of 12, 18 and 30?',
      tier: 'confident',
      correctAnswer: 6,
      xpValue: 15,
      hint: 'Factors of 12: 1, 2, 3, 4, 6, 12. Factors of 18: 1, 2, 3, 6, 9, 18. Factors of 30: 1, 2, 3, 5, 6, 10, 15, 30. Largest shared by all three: 6.',
    },
    // Confident 2: LCM of three small numbers
    {
      id: 'fml-q10',
      type: 'multiple-choice',
      stem: 'What is the LCM of 4, 6 and 8?',
      tier: 'confident',
      options: ['12', '48', '16', '24'],
      correctIndex: 3,
      xpValue: 15,
      hint: 'Multiples of 8: 8, 16, 24, 32. Of these, which is divisible by 4 (yes, all) AND by 6? 24 is, since 24/6 = 4.',
    },
    // Confident 3: HCF for fraction simplification context
    {
      id: 'fml-q11',
      type: 'numeric-entry',
      stem: 'A fraction reads 24/36. What is the HCF of 24 and 36, which you would divide by to simplify the fraction in one step?',
      tier: 'confident',
      correctAnswer: 12,
      xpValue: 15,
      hint: 'Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24. Factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36. Largest shared: 12. So 24/36 simplifies to 2/3 in one step.',
    },
    // Confident 4: spot-misconception on LCM-as-product
    {
      id: 'fml-q12',
      type: 'spot-misconception',
      stem: 'Liam says "to find the LCM of two numbers, just multiply them together. So LCM(6, 8) = 48".',
      tier: 'confident',
      statements: [
        {
          text: 'Liam is right. The LCM of any two numbers is found by multiplying them.',
          isMisconception: true,
        },
        {
          text: 'In fact multiplying only gives the LCM when the two numbers share no common factor (coprime, like 5 and 7). LCM(6, 8) = 24, not 48, because 6 and 8 share the factor 2. The product 48 is a common multiple but not the LOWEST.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fml-mis-lcm-always-product',
    },
    // Confident 5: missing-step LCM via listing
    {
      id: 'fml-q13',
      type: 'missing-step',
      stem: 'Fill in the missing step. Aisha finds the LCM of 9 and 12.',
      tier: 'confident',
      steps: [
        'Multiples of 9: 9, 18, 27, 36, 45.',
        'Multiples of 12: 12, 24, 36, 48.',
        null,
        'So LCM(9, 12) = 36. Check: 36 / 9 = 4 (whole) and 36 / 12 = 3 (whole), both confirming 36 is a multiple of each.',
      ],
      missingStepIndex: 2,
      correctStep: 'The first number that appears in both lists is 36.',
      xpValue: 20,
    },
    // Confident 6: LCM for common denominators
    {
      id: 'fml-q14',
      type: 'multiple-choice',
      stem: 'Aisha wants to add 1/6 and 1/8. What is the smallest common denominator she should use?',
      tier: 'confident',
      options: ['14', '48', '24', '12'],
      correctIndex: 2,
      xpValue: 15,
      hint: 'The smallest common denominator is LCM(6, 8). Multiples of 6: 6, 12, 18, 24. Multiples of 8: 8, 16, 24. First match: 24.',
    },
    // Confident 7: drag-order pairs by LCM
    {
      id: 'fml-q15',
      type: 'drag-order',
      stem: 'Drag these pairs into order from the smallest LCM to the largest LCM.',
      tier: 'confident',
      items: [
        'LCM(4, 6)',
        'LCM(5, 6)',
        'LCM(4, 9)',
        'LCM(6, 8)',
      ],
      correctOrder: [0, 3, 1, 2],
      xpValue: 20,
      hint: 'Compute each: LCM(4,6) = 12. LCM(5,6) = 30 (coprime). LCM(4,9) = 36 (coprime). LCM(6,8) = 24. Order: 12, 24, 30, 36.',
    },
    // Confident 8: HCF as Venn overlap product
    {
      id: 'fml-q16',
      type: 'multiple-choice',
      stem: 'A Venn diagram of the prime factors of 20 and 30 shows a shared region containing 2 and 5. What is the HCF of 20 and 30?',
      tier: 'confident',
      options: ['10', '60', '5', '2'],
      correctIndex: 0,
      xpValue: 15,
      hint: 'HCF = product of every factor in the SHARED region: 2 x 5 = 10. Check: 20 / 10 = 2 and 30 / 10 = 3, both whole.',
    },
    // Challenge 1: bell ringing word problem (Bond stretch)
    {
      id: 'fml-q17',
      type: 'numeric-entry',
      stem: 'Two clock bells ring at intervals of 18 minutes and 24 minutes respectively. They ring together at 8 a.m. How many minutes will pass before they next ring together?',
      tier: 'challenge',
      correctAnswer: 72,
      unit: 'minutes',
      xpValue: 25,
      hint: 'Find LCM(18, 24). Multiples of 18: 18, 36, 54, 72. Multiples of 24: 24, 48, 72. First match: 72 minutes (which is 1 hour 12 minutes later, so the next ring is at 9:12 a.m).',
    },
    // Challenge 2: HCF and rectangle word problem
    {
      id: 'fml-q18',
      type: 'multiple-choice',
      stem: 'A rectangular garden 36 m by 24 m is to be paved with identical square slabs. What is the largest square slab side length, in metres, that fits perfectly with no cutting?',
      tier: 'challenge',
      options: ['4 m', '12 m', '6 m', '24 m'],
      correctIndex: 1,
      xpValue: 25,
      hint: 'Largest square that fits both dimensions = HCF(36, 24). Factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36. Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24. HCF = 12 m.',
    },
    // Challenge 3: scheduling word problem
    {
      id: 'fml-q19',
      type: 'numeric-entry',
      stem: 'Buses on route A leave the Sevenoaks bus stop every 15 minutes. Buses on route B leave every 20 minutes. Both routes leave together at 9:00 a.m. At what minute past the hour do they next leave together, after 9:00 a.m.?',
      tier: 'challenge',
      correctAnswer: 0,
      unit: 'minutes past the hour',
      xpValue: 25,
      hint: 'LCM(15, 20) = 60 minutes. They next leave together at 10:00 a.m, which is 0 minutes past the hour.',
    },
    // Challenge 4: prime-factor HCF
    {
      id: 'fml-q20',
      type: 'multiple-choice',
      stem: 'Two numbers have prime factorisations 2 x 2 x 3 x 5 and 2 x 3 x 3 x 5. What is their HCF?',
      tier: 'challenge',
      options: ['180', '30', '60', '15'],
      correctIndex: 1,
      xpValue: 25,
      hint: 'HCF = product of shared prime factors taking the lowest power of each. Shared: 2, 3, 5. HCF = 2 x 3 x 5 = 30.',
    },
    // Challenge 5: LCM for chained schedules
    {
      id: 'fml-q21',
      type: 'numeric-entry',
      stem: 'Three pupils run round a school track. Aisha laps in 4 minutes, Liam in 6 minutes, and Maya in 8 minutes. They all start together. How many minutes pass before they next cross the start line at the same time?',
      tier: 'challenge',
      correctAnswer: 24,
      unit: 'minutes',
      xpValue: 25,
      hint: 'LCM(4, 6, 8). Multiples of 8 are 8, 16, 24, 32. 24 is divisible by 4 (yes) and 6 (yes, 24/6=4). So LCM = 24 minutes.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on an HCF/LCM question where pupils returned the LCM when asked for the HCF (and vice versa).
    {
      id: 'fml-mis-hcf-lcm-swap',
      description:
        'I swap HCF and LCM, returning the LCM when asked for the HCF or vice versa. "Highest" and "Lowest" sound similar enough that I pick the wrong direction.',
      triggerAnswer: 'hcf-lcm-swap',
      correction:
        'Actually HCF means largest factor that DIVIDES INTO both numbers. LCM means smallest multiple that both numbers DIVIDE INTO. They point in opposite directions.',
      reExplanation:
        'For 4 and 6, the HCF is 2 (the biggest number that divides into both). The LCM is 12 (the smallest number that both 4 and 6 divide into). HCF and LCM are always related but never equal unless one number is a multiple of the other. Always check: am I looking for something that divides into the inputs (HCF) or something the inputs divide into (LCM)?',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "HCF and LCM" page, "Common mistake" callout warning that LCM equals the product only when the numbers are coprime.
    {
      id: 'fml-mis-lcm-always-product',
      description:
        'I always find the LCM by multiplying the two numbers together, so LCM(6, 8) = 48.',
      triggerAnswer: 'lcm-always-product',
      correction:
        'In fact the product is only the LCM when the two numbers share no factors (coprime). When they share factors, the LCM is smaller.',
      reExplanation:
        'LCM(6, 8): 6 = 2 x 3 and 8 = 2 x 2 x 2. They share a factor of 2. LCM = 2 x 2 x 2 x 3 = 24, not 48. The product 48 is a common multiple of 6 and 8, but not the LOWEST. Multiplying gives the LCM when one of the numbers is prime to the other, like LCM(5, 7) = 35 (5 and 7 are coprime).',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 1F (Foundation, Non-calculator), commentary on an HCF question where pupils chose the smaller of the two input numbers as the HCF.
    {
      id: 'fml-mis-hcf-is-smaller',
      description:
        'I think the HCF of two numbers is just the smaller of the two, so HCF(16, 24) = 16.',
      triggerAnswer: 'hcf-is-smaller',
      correction:
        'Actually the smaller number is the HCF only when the smaller number divides the larger. Otherwise the HCF is strictly less than the smaller number.',
      reExplanation:
        'HCF(16, 24): 16 does not divide 24 (24 / 16 = 1.5, not whole), so 16 is not the HCF. List factors: 16 has 1, 2, 4, 8, 16; 24 has 1, 2, 3, 4, 6, 8, 12, 24. The largest shared factor is 8. HCF(9, 27) = 9 because 9 divides 27, but that is a special case where the smaller IS the HCF.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2022, Paper 01 (Foundation, Non-calculator), commentary on an LCM question where pupils returned a common multiple but not the LOWEST one.
    {
      id: 'fml-mis-lcm-not-lowest',
      description:
        'I find a common multiple of two numbers but not the lowest, so I might give LCM(4, 6) as 24 or 36 when the answer is 12.',
      triggerAnswer: 'lcm-not-lowest',
      correction:
        'In fact LCM is the LOWEST common multiple. Larger common multiples exist but are not the answer.',
      reExplanation:
        'For LCM(4, 6), list multiples and stop at the first match: 4, 8, 12 and 6, 12, ... The first match is 12. 24 is also a common multiple (24 / 4 = 6 and 24 / 6 = 4), but 12 came first, so 12 is the lowest. The word "lowest" is the key signal in LCM.',
    },
    // Source: NCETM Secondary Magazine, Issue 124, article on HCF/LCM misconceptions citing pupil work that confused "common factor" with "common multiple", writing answers like "the highest common multiple" when no such thing meaningfully exists.
    {
      id: 'fml-mis-highest-common-multiple',
      description:
        'I write "highest common multiple" instead of "lowest", thinking the highest of every shared number is wanted.',
      triggerAnswer: 'highest-common-multiple',
      correction:
        'Actually multiples go on forever, so there is no highest common multiple. The standard terms are HCF (highest common factor) and LCM (lowest common multiple).',
      reExplanation:
        'Factors of a number are finite (limited and bounded by the number itself), so a HIGHEST common factor exists. Multiples of a number are infinite (you can keep doubling forever), so a LOWEST common multiple exists but a highest does not. The pairing is HCF ↔ LCM: highest goes with factors, lowest with multiples.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 4 "Number Operations" by Hart, on pupils confusing "factor" with "multiple", listing multiples of a number when asked for its factors.
    {
      id: 'fml-mis-factor-vs-multiple',
      description:
        'I confuse "factor" with "multiple", listing multiples of a number (4, 8, 12, ...) when asked for its factors, or factors (1, 2, 4) when asked for multiples.',
      triggerAnswer: 'factor-vs-multiple',
      correction:
        'In fact factors go INTO a number (smaller or equal). Multiples are what the number GOES INTO (larger or equal). They point in opposite directions.',
      reExplanation:
        'For 12: the factors are 1, 2, 3, 4, 6, 12 (numbers that divide 12 without remainder, all at most 12). The multiples of 12 are 12, 24, 36, 48, ... (numbers that 12 divides, all at least 12). Confusing the two flips the entire calculation: HCF needs factors, LCM needs multiples.',
    },
    // Authored, no external source: classroom-observed slip where pupils, asked to compare HCF and LCM, claim they should always be equal (because both involve "common" factors and multiples).
    {
      id: 'fml-mis-hcf-equals-lcm',
      description:
        'I think the HCF and LCM of two numbers should be the same value because both are "common", so HCF(4, 6) and LCM(4, 6) are both 12 (or both 2).',
      triggerAnswer: 'hcf-equals-lcm',
      correction:
        'Actually HCF and LCM are nearly always different. HCF is at most the smaller input; LCM is at least the larger input.',
      reExplanation:
        'For 4 and 6, the HCF is 2 (smaller than both inputs) and the LCM is 12 (larger than both inputs). These differ. The only case HCF and LCM agree is when the two inputs are equal: HCF(8, 8) = LCM(8, 8) = 8. In general HCF x LCM = product of the two inputs (so for 4 and 6, HCF x LCM = 24 = 4 x 6, a useful sanity check).',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const factorsMultiplesHcfLcmZoneNodes = [factorsMultiplesHcfLcm]
