import type { SkillNode } from '@/types/content'

export const factorsMultiplesSieveEratosthenes: SkillNode = {
  id: 'maths-factors-multiples-sieve-eratosthenes',
  title: 'The Sieve of Eratosthenes and Divisibility',
  description:
    'Use the Sieve of Eratosthenes, an ancient systematic method, to find every prime number up to 100. Cross out all multiples of 2 (except 2 itself), then all multiples of 3 (except 3), then 5, then 7. Anything left uncrossed is prime. Understand why crossings only need to continue up to the square root of the upper limit, and use the sieve to recognise primes within the first hundred numbers.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-factors-multiples',
  zoneName: 'Factors and Multiples',
  tier: 'confident',
  prerequisites: ['maths-factors-multiples-finding-factors', 'maths-primes-recognising-primes'],
  curriculum: {
    ks3Objective:
      'Use the concepts and vocabulary of prime numbers, factors (or divisors), multiples; identify primes within the first hundred numbers.',
    awardingBodies: {
      aqa: 'N4 Identify prime numbers within the first hundred numbers using systematic methods (GCSE Mathematics 8300)',
      edexcel: 'N4 Identify prime numbers using the Sieve of Eratosthenes (GCSE Mathematics 1MA1)',
      ocr: '2.03a Identify prime numbers using systematic crossing of multiples (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'fse-scene-grid',
      title: 'The Sieve Grid: 1 to 100',
      type: 'labelled-diagram',
      instructions:
        'Click each labelled region of the sieve grid to see how the numbers from 1 to 100 split into primes and composites. Start by removing 1 (not prime, only one factor). Keep 2, then cross out every other multiple of 2. Keep 3, cross out every other multiple of 3. Keep 5, cross out its remaining multiples. Keep 7, cross out its remaining multiples. After 7, every number left uncrossed is prime, since the next prime (11) is larger than the square root of 100.',
      data: {
        viewBox: '0 0 100 100',
        hotspots: [
          { id: 'fse-h-remove-1', x: 10, y: 10, label: '1: not prime', description: 'A prime has exactly two distinct factors. 1 only has itself, so it is removed first.' },
          { id: 'fse-h-keep-2', x: 30, y: 10, label: 'Keep 2', description: '2 is the only even prime. Keep it, then cross out 4, 6, 8, 10, 12, ... up to 100.' },
          { id: 'fse-h-keep-3', x: 50, y: 10, label: 'Keep 3', description: 'Keep 3, then cross out 9, 15, 21, 27, ... (the multiples of 3 not already crossed by 2).' },
          { id: 'fse-h-keep-5', x: 70, y: 10, label: 'Keep 5', description: 'Keep 5, then cross out 25, 35, 55, 65, 85, 95 (multiples of 5 not already crossed).' },
          { id: 'fse-h-keep-7', x: 90, y: 10, label: 'Keep 7', description: 'Keep 7, then cross out 49, 77, 91 (the multiples of 7 not already crossed).' },
          { id: 'fse-h-stop', x: 25, y: 50, label: 'Stop at 7', description: 'sqrt(100) = 10, so any uncrossed number above sqrt(100) is prime. The next prime, 11, is above 10, so we can stop.' },
          { id: 'fse-h-25-primes', x: 75, y: 50, label: '25 primes below 100', description: 'After crossing multiples of 2, 3, 5 and 7, exactly 25 numbers between 2 and 100 remain uncrossed.' },
          { id: 'fse-h-result', x: 50, y: 88, label: 'Primes under 100', description: '2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97.' },
        ],
      },
    },
    {
      id: 'fse-scene-walkthrough',
      title: 'Step by Step: Sieving the First Two Rows',
      type: 'labelled-diagram',
      instructions:
        'Click each step on the diagram to walk through sieving the numbers 2 to 20. Step 1 keeps 2, then crosses 4, 6, 8, 10, 12, 14, 16, 18, 20. Step 2 keeps 3, then crosses 9 and 15 (6, 12, 18 are already crossed). Step 3 keeps 5; the only new crossing is none below 20 (10, 15, 20 are already crossed). Step 4: sqrt(20) is below 5 actually, so we could have stopped after multiples of 3. The numbers left uncrossed are 2, 3, 5, 7, 11, 13, 17, 19, the eight primes below 20.',
      data: {
        viewBox: '0 0 100 100',
        hotspots: [
          { id: 'fse-h-step1', x: 15, y: 20, label: 'Step 1: cross multiples of 2', description: 'Cross 4, 6, 8, 10, 12, 14, 16, 18, 20. Keep 2 itself.' },
          { id: 'fse-h-step2', x: 50, y: 20, label: 'Step 2: cross multiples of 3', description: 'New crossings: 9 and 15. (6, 12, 18 are already crossed.) Keep 3 itself.' },
          { id: 'fse-h-step3', x: 85, y: 20, label: 'Step 3: cross multiples of 5', description: 'No new crossings: 10, 15 and 20 are already crossed. Keep 5 itself.' },
          { id: 'fse-h-stop-rule', x: 25, y: 70, label: 'Stop rule', description: 'sqrt(20) is about 4.47. After multiples of primes up to 4, we can stop.' },
          { id: 'fse-h-uncrossed', x: 75, y: 70, label: 'Uncrossed = primes', description: 'Left over: 2, 3, 5, 7, 11, 13, 17, 19. Eight primes below 20.' },
        ],
      },
    },
    {
      id: 'fse-scene-divisibility',
      title: 'Divisibility Lens: Why Sqrt(N) Is Enough',
      type: 'simulation',
      instructions:
        'See why crossings can stop at the square root of the upper limit. If a number N can be split as a x b with a less than or equal to b, then a must be at most sqrt(N). So if N is composite below 100, it has at least one prime factor at or below 10. Crossing multiples of 2, 3, 5, and 7 (every prime up to 10) catches every composite below 100. Anything still uncrossed has no small prime factor, so it is prime itself.',
      data: {
        upperLimit: 100,
        sqrtUpperLimit: 10,
        primesUpToSqrt: [2, 3, 5, 7],
        nextPrime: 11,
        rule: 'If N is composite and at most 100, then N has a prime factor at most sqrt(N) = 10. So sieving primes 2, 3, 5, 7 is enough.',
        worked: [
          { number: 91, smallestPrimeFactor: 7, factorisation: '7 x 13' },
          { number: 49, smallestPrimeFactor: 7, factorisation: '7 x 7' },
          { number: 77, smallestPrimeFactor: 7, factorisation: '7 x 11' },
          { number: 121, smallestPrimeFactor: 11, factorisation: '11 x 11', note: 'Above 100, so 11 needed for the next sieve up.' },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'fse-worked-1',
      title: 'Use the sieve to find every prime below 30',
      steps: [
        {
          explanation:
            'Write the numbers 2 to 30. Remove 1 first (not prime).',
          maths: '2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30',
        },
        {
          explanation:
            'Keep 2. Cross every other multiple of 2 below 30.',
          maths: 'cross: 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30',
        },
        {
          explanation:
            'Keep 3. Cross multiples of 3 not already crossed.',
          maths: 'cross: 9, 15, 21, 27',
        },
        {
          explanation:
            'Keep 5. Cross multiples of 5 not already crossed.',
          maths: 'cross: 25 (10, 15, 20, 30 are already crossed)',
        },
        {
          explanation:
            'sqrt(30) is about 5.48, so we can stop after the prime 5.',
          maths: 'stop rule: sqrt(30) < 6',
        },
        {
          explanation: 'The numbers left uncrossed are the primes below 30.',
          maths: 'primes: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29',
        },
      ],
    },
    {
      id: 'fse-worked-2',
      title: 'Use the sieve to test whether 89 is prime',
      steps: [
        {
          explanation:
            'Find sqrt(89) to set the stop rule. sqrt(89) is between 9 and 10 (since 9 squared is 81 and 10 squared is 100).',
          maths: 'sqrt(89) approx 9.43',
        },
        {
          explanation:
            'Test primes up to 9: 2, 3, 5, 7.',
          maths: 'primes to test: 2, 3, 5, 7',
        },
        {
          explanation:
            'Test 2: 89 is odd, so 2 does not divide it.',
          maths: '89 / 2 = 44.5 (not whole)',
        },
        {
          explanation:
            'Test 3: digits 8 + 9 = 17, not a multiple of 3.',
          maths: '89 / 3 = 29.67 (not whole)',
        },
        {
          explanation:
            'Test 5: 89 does not end in 0 or 5.',
          maths: '89 / 5 = 17.8 (not whole)',
        },
        {
          explanation:
            'Test 7: 89 / 7 is about 12.71 (since 7 x 12 = 84 and 7 x 13 = 91).',
          maths: '89 / 7 approx 12.71 (not whole)',
        },
        {
          explanation: 'No prime up to sqrt(89) divides 89, so 89 is prime.',
          maths: '89 is prime',
        },
      ],
    },
  ],
  questions: [
    // Core 1: identify the sieve's first removal
    {
      id: 'fse-q1',
      type: 'multiple-choice',
      stem: 'Which number is removed first when starting the Sieve of Eratosthenes?',
      tier: 'core',
      options: ['1', '2', '3', '4'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'fse-mis-1-is-prime',
      hint: '1 is removed first because it is not prime. A prime needs exactly two distinct factors; 1 has only itself.',
    },
    // Core 2: count primes under 20
    {
      id: 'fse-q2',
      type: 'numeric-entry',
      stem: 'After applying the sieve up to 20, how many prime numbers remain uncrossed?',
      tier: 'core',
      correctAnswer: 8,
      xpValue: 10,
      hint: 'The primes below 20 are 2, 3, 5, 7, 11, 13, 17, 19. That is 8 primes.',
    },
    // Core 3: smallest prime
    {
      id: 'fse-q3',
      type: 'multiple-choice',
      stem: 'What is the smallest prime number kept by the sieve?',
      tier: 'core',
      options: ['0', '1', '2', '3'],
      correctIndex: 2,
      xpValue: 10,
      hint: '2 is the smallest prime. It is also the only even prime, since every other even number is a multiple of 2.',
    },
    // Core 4: smallest odd composite below 20
    {
      id: 'fse-q4',
      type: 'numeric-entry',
      stem: 'After the sieve crosses every multiple of 2 below 20 (excluding 2 itself), what is the smallest odd COMPOSITE number still uncrossed?',
      tier: 'core',
      correctAnswer: 9,
      xpValue: 10,
      misconceptionId: 'fse-mis-odd-equals-prime',
      hint: 'The odd numbers below 20 are 3, 5, 7, 9, 11, 13, 15, 17, 19. Of these, the smallest composite is 9 = 3 x 3. Step 3 of the sieve crosses it next.',
    },
    // Core 5: identify a prime
    {
      id: 'fse-q5',
      type: 'multiple-choice',
      stem: 'Which of these numbers is prime?',
      tier: 'core',
      options: ['21', '27', '29', '33'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'fse-mis-odd-equals-prime',
      hint: '21 = 3 x 7. 27 = 3 x 9. 33 = 3 x 11. Only 29 has no factors apart from 1 and itself.',
    },
    // Core 6: spot composite hidden among odds
    {
      id: 'fse-q6',
      type: 'numeric-entry',
      stem: 'After the sieve crosses multiples of 2, 3, 5 and 7 below 100, how many primes are left between 1 and 100?',
      tier: 'core',
      correctAnswer: 25,
      xpValue: 10,
      hint: 'There are exactly 25 primes below 100 (2, 3, 5, 7, 11, ..., 97).',
    },
    // Core 7: identify the next prime to use
    {
      id: 'fse-q7',
      type: 'multiple-choice',
      stem: 'After keeping 2 and crossing its multiples, which number does the sieve keep next?',
      tier: 'core',
      options: ['4', '6', '5', '3'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'The next uncrossed number after 2 is 3. The sieve always keeps the smallest uncrossed number and crosses its multiples.',
    },
    // Confident 1: which numbers crossed at step 3
    {
      id: 'fse-q8',
      type: 'multiple-choice',
      stem: 'When the sieve crosses multiples of 3 below 30, which of these numbers is newly crossed (not already crossed by step 2)?',
      tier: 'confident',
      options: ['12', '15', '18', '24'],
      correctIndex: 1,
      xpValue: 15,
      hint: '12, 18 and 24 are even, so already crossed by step 2 (multiples of 2). 15 is odd and equals 3 x 5, newly crossed at step 3.',
    },
    // Confident 2: largest prime to test below 100
    {
      id: 'fse-q9',
      type: 'multiple-choice',
      stem: 'When sieving up to 100, what is the largest prime whose multiples must be crossed?',
      tier: 'confident',
      options: ['7', '13', '11', '5'],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'fse-mis-keep-going-past-sqrt',
      hint: 'sqrt(100) = 10. Primes up to 10 are 2, 3, 5, 7. The largest is 7. Anything past 7 is unnecessary work for this range.',
    },
    // Confident 3: spot a misconception
    {
      id: 'fse-q10',
      type: 'spot-misconception',
      stem: 'Aisha says "every odd number above 1 is prime, because 2 is the only even prime".',
      tier: 'confident',
      statements: [
        {
          text: 'Aisha is right. Once we cross out the even numbers, everything left is prime.',
          isMisconception: true,
        },
        {
          text: 'In fact many odd numbers are composite. For example 9 = 3 x 3, 15 = 3 x 5, 21 = 3 x 7, 25 = 5 x 5. The sieve still has to cross multiples of 3, 5 and 7 after handling the multiples of 2.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fse-mis-odd-equals-prime',
    },
    // Confident 4: missing-step in worked example
    {
      id: 'fse-q11',
      type: 'missing-step',
      stem: 'Fill in the missing step. Liam uses the sieve to test whether 53 is prime.',
      tier: 'confident',
      steps: [
        'sqrt(53) is between 7 and 8 (since 7 squared is 49 and 8 squared is 64).',
        'So test primes up to 7: that is 2, 3, 5 and 7.',
        null,
        'No prime up to sqrt(53) divides 53, so 53 is prime.',
      ],
      missingStepIndex: 2,
      correctStep: 'Check each: 53 is odd (not 2), digits sum to 8 (not 3), does not end in 0 or 5 (not 5), and 53 / 7 is about 7.57 (not 7). None divide.',
      xpValue: 20,
    },
    // Confident 5: drag-order primes by sieve step crossed
    {
      id: 'fse-q12',
      type: 'drag-order',
      stem: 'Drag these composite numbers into order based on which sieve step first crosses them: multiples of 2, then 3, then 5, then 7.',
      tier: 'confident',
      items: ['25', '14', '49', '15'],
      correctOrder: [1, 3, 0, 2],
      xpValue: 20,
      hint: '14 is even (crossed at step 2). 15 is odd, divisible by 3 (crossed at step 3). 25 is odd, not divisible by 3, divisible by 5 (step 5). 49 = 7 x 7 (step 7).',
    },
    // Confident 6: smallest uncrossed after step k
    {
      id: 'fse-q13',
      type: 'numeric-entry',
      stem: 'After the sieve crosses multiples of 2, 3 and 5 below 50, what is the smallest uncrossed number greater than 5?',
      tier: 'confident',
      correctAnswer: 7,
      xpValue: 15,
      hint: 'After crossing 6 (multiple of 2 and 3), the next number is 7. 7 has no factors of 2, 3 or 5, so it stays.',
    },
    // Confident 7: divisibility test by 3 inside sieve
    {
      id: 'fse-q14',
      type: 'numeric-entry',
      stem: 'A pupil checks whether 87 is prime. They notice 8 + 7 = 15, a multiple of 3. So 87 is composite. What is the smallest prime factor of 87?',
      tier: 'confident',
      correctAnswer: 3,
      xpValue: 15,
      hint: 'A digit sum divisible by 3 means the whole number is divisible by 3. So 87 = 3 x 29, and 3 is the smallest prime factor. The sieve crosses 87 at step 3.',
    },
    // Confident 8: which crossings come from primes
    {
      id: 'fse-q15',
      type: 'multiple-choice',
      stem: 'Why does the sieve only cross multiples of PRIMES (2, 3, 5, 7), and not multiples of every number?',
      tier: 'confident',
      options: [
        'Because primes are easier to count.',
        'Because composite numbers like 4 or 6 already have their multiples crossed when their prime factors were used.',
        'Because the sieve has only four steps.',
        'Because non-prime multiples are too large.',
      ],
      correctIndex: 1,
      xpValue: 15,
      hint: 'Multiples of 4 (4, 8, 12, ...) are already multiples of 2, so step 2 has crossed them. Same for 6, 8, 9, etc. Only primes add new crossings.',
    },
    // Challenge 1: Bond-style word problem
    {
      id: 'fse-q16',
      type: 'numeric-entry',
      stem: 'A teacher in Tunbridge Wells writes the numbers 2 to 50 on the board. Pupils take turns crossing out the multiples of 2, then 3, then 5 (keeping 2, 3 and 5 themselves). After three pupils have taken their turn, how many numbers are left uncrossed?',
      tier: 'challenge',
      correctAnswer: 16,
      xpValue: 25,
      misconceptionId: 'fse-mis-skip-7',
      hint: 'Uncrossed numbers between 2 and 50 are those with no factor of 2, 3 or 5: that is 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 (15 primes), plus 49 = 7 x 7 which is not yet crossed since step 7 has not happened. Total: 16.',
    },
    // Challenge 2: Multi-step prime test
    {
      id: 'fse-q17',
      type: 'multiple-choice',
      stem: 'A pupil claims 91 is prime because it is odd, the digits 9 + 1 = 10 is not a multiple of 3, and it does not end in 0 or 5. Which prime should they test next, and what do they find?',
      tier: 'challenge',
      options: [
        'Test 7: 91 = 7 x 13, so 91 is composite.',
        'Test 11: 91 / 11 is not whole, so 91 is prime.',
        'Test 9: 91 / 9 is not whole, so 91 is prime.',
        'Test 13: 91 / 13 = 7, so 91 is composite, but 13 was an unnecessary test.',
      ],
      correctIndex: 0,
      xpValue: 25,
      misconceptionId: 'fse-mis-skip-7',
      hint: 'sqrt(91) is about 9.54, so test primes up to 9: that is 2, 3, 5, 7. The pupil missed 7. Indeed 91 / 7 = 13, so 91 is composite.',
    },
    // Challenge 3: why 11 not needed for N=100
    {
      id: 'fse-q18',
      type: 'multiple-choice',
      stem: 'When sieving up to 100, why does the sieve NOT need to cross multiples of 11?',
      tier: 'challenge',
      options: [
        'Because 11 is too large to be a factor.',
        'Because 11 has no multiples below 100.',
        'Because every composite below 100 already has a prime factor at or below sqrt(100) = 10, so multiples of 11 below 100 are already crossed.',
        'Because 11 is a prime, so it never appears in factorisations.',
      ],
      correctIndex: 2,
      xpValue: 25,
      hint: 'If n is composite and below 100, then n = a x b with a at most sqrt(100) = 10. So n already has a prime factor below 11; that prime crossed it.',
    },
    // Challenge 4: counting primes word problem
    {
      id: 'fse-q19',
      type: 'numeric-entry',
      stem: 'In the Sevenoaks library, a maths poster shows every prime below 50. How many primes does the poster show?',
      tier: 'challenge',
      correctAnswer: 15,
      xpValue: 25,
      hint: 'Primes below 50: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47. Count them: 15 primes.',
    },
    // Challenge 5: stop rule edge
    {
      id: 'fse-q20',
      type: 'multiple-choice',
      stem: 'A maths club extends the sieve up to 200. What is the largest prime whose multiples must be crossed to find every prime below 200?',
      tier: 'challenge',
      options: ['11', '17', '19', '13'],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'fse-mis-keep-going-past-sqrt',
      hint: 'sqrt(200) is about 14.14. Primes up to 14 are 2, 3, 5, 7, 11, 13. The largest is 13. Multiples of 17 below 200 are already crossed by smaller primes.',
    },
    // Challenge 6: why 1 is excluded, deeper
    {
      id: 'fse-q21',
      type: 'spot-misconception',
      stem: 'Tom argues "1 should count as a prime because it has no proper factors and you cannot break it down further".',
      tier: 'challenge',
      statements: [
        {
          text: 'Tom is right. The sieve removes 1 by mistake; really 1 is prime.',
          isMisconception: true,
        },
        {
          text: 'In fact a prime is defined to have exactly TWO distinct positive factors: 1 and itself. 1 only has one factor (itself), so it fails the definition. Excluding 1 also keeps prime factorisation unique: every integer above 1 has exactly one prime factorisation.',
          isMisconception: false,
        },
      ],
      xpValue: 25,
      misconceptionId: 'fse-mis-1-is-prime',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a prime identification question where pupils included 1 in their list of primes below 20.
    {
      id: 'fse-mis-1-is-prime',
      description:
        'I think 1 is prime, so I leave it uncrossed at the start of the sieve and count it among the primes.',
      triggerAnswer: '1-is-prime',
      correction:
        'Actually 1 is not prime by definition. A prime has exactly two distinct factors (1 and itself); 1 has only one factor.',
      reExplanation:
        'The primes start at 2: 2, 3, 5, 7, 11, 13, ... Excluding 1 keeps prime factorisation unique: 30 = 2 x 3 x 5 in only one way. If 1 counted, we could pad to 1 x 1 x 2 x 3 x 5, breaking uniqueness. So 1 is set aside as a special unit, neither prime nor composite.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Prime Numbers" page, "Common mistake" callout warning that not every odd number is prime.
    {
      id: 'fse-mis-odd-equals-prime',
      description:
        'I think every odd number above 1 is prime, because 2 is the only even prime. So I claim 9, 15, 21, 25, 27 are prime.',
      triggerAnswer: 'odd-equals-prime',
      correction:
        'In fact many odd numbers are composite. The sieve still crosses multiples of 3, 5, 7, ... after handling multiples of 2.',
      reExplanation:
        'Examples: 9 = 3 x 3, 15 = 3 x 5, 21 = 3 x 7, 25 = 5 x 5, 27 = 3 x 9, 33 = 3 x 11. All odd, all composite. Removing even numbers is only the FIRST step of the sieve. After that, multiples of 3 (9, 15, 21, 27, ...), multiples of 5 (25, 35, ...) and multiples of 7 (49, 77, 91) still need to be crossed before only primes remain.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a prime test question where pupils continued testing primes well above sqrt(N), wasting time.
    {
      id: 'fse-mis-keep-going-past-sqrt',
      description:
        'I keep crossing multiples of every prime, including 11, 13, 17, even when sieving only up to 100. I think every prime needs its turn no matter how big.',
      triggerAnswer: 'keep-going-past-sqrt',
      correction:
        'Actually you only need primes up to sqrt(N). Past that, every multiple is already crossed by a smaller prime.',
      reExplanation:
        'For N = 100, sqrt(100) = 10, so primes 2, 3, 5, 7 suffice. If n = a x b is composite with a at most b, then a is at most sqrt(n), so n has a prime factor at or below sqrt(n) that already crossed it. Multiples of 11 below 100 (22, 33, ..., 99) are all even or multiples of 3, so already crossed. 11 itself stays.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2022, Paper 01 (Foundation, Non-calculator), commentary on a prime identification question where pupils crossed 2 itself when starting the multiples-of-2 step (and similarly for 3 and 5).
    {
      id: 'fse-mis-cross-the-prime-itself',
      description:
        'I cross out 2 when I start the multiples-of-2 step (because 2 is a multiple of 2), removing the prime itself.',
      triggerAnswer: 'cross-the-prime-itself',
      correction:
        'In fact the sieve KEEPS the prime and only crosses its OTHER multiples. Keep 2; cross 4, 6, 8, ...',
      reExplanation:
        'Each step of the sieve has the same shape: keep the smallest uncrossed number (it must be prime), then cross its multiples ABOVE itself. Keep 2, cross 4, 6, 8, .... Keep 3, cross 6, 9, 12, ... (skipping 3). Keep 5, cross 10, 15, 20, ... Crossing 2 itself would lose the smallest prime and break the whole sieve.',
    },
    // Source: NCETM Secondary Magazine, Issue 124, article on prime misconceptions, citing pupil work where the divisibility check skipped over 7 because pupils thought "tests for 2, 3 and 5 are the easy ones" and treated 7 as not worth trying.
    {
      id: 'fse-mis-skip-7',
      description:
        'I forget to test divisibility by 7 when checking primes between 50 and 100, because there is no easy digit-rule for 7.',
      triggerAnswer: 'skip-7',
      correction:
        'Actually 7 must be tested up to N = 100 since sqrt(100) = 10 and 7 is the largest prime below 10. Numbers like 49, 77, 91 trip up pupils who skip it.',
      reExplanation:
        'Three composites below 100 are caught only by 7: 49 = 7 x 7, 77 = 7 x 11, 91 = 7 x 13. They are odd, not multiples of 3 (digit sums 13, 14, 10), and not multiples of 5 (do not end in 0 or 5). If 7 is skipped, the sieve declares these prime by mistake. Always include 7 in the sieve up to 100, even without a tidy digit rule.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 4 "Number Operations" by Hart, on pupils crossing multiples of composite numbers (4, 6, 8, 9) inside the sieve, treating composites the same as primes.
    {
      id: 'fse-mis-cross-multiples-of-composites',
      description:
        'I cross multiples of every number, including 4, 6, 8 and 9, not just multiples of primes. So my sieve takes far longer than needed.',
      triggerAnswer: 'cross-multiples-of-composites',
      correction:
        'In fact only multiples of PRIMES need crossing. Multiples of composites are already crossed by their prime factors.',
      reExplanation:
        'Multiples of 4 are 4, 8, 12, 16, ... All are also multiples of 2, so step 2 has already crossed them. Multiples of 6 are 6, 12, 18, ... all multiples of 2 (and of 3). Multiples of 9 are 9, 18, 27, ... all multiples of 3. The sieve only adds new crossings when the lead number is prime, which is why we keep 2, 3, 5, 7 and skip 4, 6, 8, 9.',
    },
    // Authored, no external source: classroom-observed slip where pupils, after running the sieve, miscount the primes below 100 by either missing a prime in the upper twenties (29) or by counting a composite they failed to cross.
    {
      id: 'fse-mis-miscount-primes',
      description:
        'I run the sieve correctly but miscount the surviving primes below 100, often giving 24 or 26 instead of 25.',
      triggerAnswer: 'miscount-primes',
      correction:
        'Actually there are exactly 25 primes below 100. A careful row-by-row count of the sieve gives this.',
      reExplanation:
        'Primes below 100: 2, 3, 5, 7 (4 primes), 11, 13, 17, 19 (4 more, 8 total), 23, 29 (2 more, 10), 31, 37 (2 more, 12), 41, 43, 47 (3 more, 15), 53, 59 (2 more, 17), 61, 67 (2 more, 19), 71, 73, 79 (3 more, 22), 83, 89 (2 more, 24), 97 (1 more, 25). The most common slips are missing 29 (last prime in the 20s) or 53 (first prime in the 50s).',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const factorsMultiplesSieveEratosthenesZoneNodes = [factorsMultiplesSieveEratosthenes]
