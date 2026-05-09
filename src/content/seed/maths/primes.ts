import type { SkillNode } from '@/types/content'

export const recognisingPrimes: SkillNode = {
  id: 'maths-primes-recognising-primes',
  title: 'Recognising Prime Numbers',
  description:
    'Recognise prime numbers up to 100, tell primes apart from composite numbers, see why 1 is not prime and why 2 is the only even prime, and test whether a number is prime by checking factors up to its square root.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-primes',
  zoneName: 'Primes',
  tier: 'core',
  prerequisites: ['maths-factors-multiples-finding-factors'],
  curriculum: {
    ks3Objective:
      'Use the concepts and vocabulary of prime numbers, factors (or divisors), multiples, common factors, common multiples, highest common factor, lowest common multiple, prime factorisation, including using product notation and the unique factorisation property.',
    awardingBodies: {
      aqa: 'N1.5 Prime numbers, factors and multiples',
      edexcel: 'N4 Prime numbers, factors and multiples',
      ocr: '2.01c Prime numbers',
    },
  },
  scenes: [
    {
      id: 'rp-scene-sieve',
      title: 'The Sieve of Eratosthenes',
      type: 'simulation',
      instructions:
        'See how the Sieve of Eratosthenes uncovers the primes from 1 to 100. Crossing out 1 first, then the multiples of 2 above 2, then the multiples of 3 above 3, then 5, then 7, leaves exactly the prime numbers behind. Each prime survives because no smaller prime divides it.',
      data: {
        gridSize: { rows: 10, cols: 10 },
        start: 1,
        end: 100,
        crossOutSteps: [
          { prime: 2, removeMultiplesOf: 2 },
          { prime: 3, removeMultiplesOf: 3 },
          { prime: 5, removeMultiplesOf: 5 },
          { prime: 7, removeMultiplesOf: 7 },
        ],
        finalPrimesUpTo100: [
          2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61,
          67, 71, 73, 79, 83, 89, 97,
        ],
        notes: '1 is removed first because it has only one factor, so it is not prime.',
      },
    },
    {
      id: 'rp-scene-array-builder',
      title: 'Build a Rectangle',
      type: 'diagram',
      instructions:
        'Look at how counters can be arranged into rectangles. Seven counters only fit as a 1 by 7 line, so 7 is prime. Twelve counters fit as 1 by 12, 2 by 6, or 3 by 4, so 12 is composite. One counter fits only as 1 by 1, but a prime needs exactly two distinct factors, so 1 is not prime.',
      data: {
        examples: [
          {
            number: 7,
            possibleRectangles: [{ rows: 1, cols: 7 }],
            isPrime: true,
            reason: '7 counters can only line up as 1 row of 7. So 7 is prime.',
          },
          {
            number: 12,
            possibleRectangles: [
              { rows: 1, cols: 12 },
              { rows: 2, cols: 6 },
              { rows: 3, cols: 4 },
            ],
            isPrime: false,
            reason: '12 counters fit into several rectangles. So 12 is composite.',
          },
          {
            number: 1,
            possibleRectangles: [{ rows: 1, cols: 1 }],
            isPrime: false,
            reason: '1 has only one factor, itself. A prime needs exactly two factors.',
          },
        ],
      },
    },
    {
      id: 'rp-scene-square-root-test',
      title: 'Test Up To the Square Root',
      type: 'diagram',
      instructions:
        'See why testing divisors only up to the square root is enough. For 91, the square root is about 9.5, so checking the primes 2, 3, 5 and 7 is enough; 7 divides 91 and gives the partner 13, so 91 is composite. For 53, no prime up to 7 divides it, so 53 is prime.',
      data: {
        examples: [
          {
            number: 91,
            sqrtApprox: 9.5,
            divisorsToTry: [2, 3, 5, 7],
            firstFactorFound: 7,
            verdict: '91 = 7 x 13, so 91 is composite.',
          },
          {
            number: 53,
            sqrtApprox: 7.3,
            divisorsToTry: [2, 3, 5, 7],
            firstFactorFound: null,
            verdict: 'No prime up to 7 divides 53. So 53 is prime.',
          },
        ],
        explanation:
          'If a number n has a factor larger than the square root of n, it must also have a paired factor smaller than the square root. So checking small primes is enough.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'rp-worked-1',
      title: 'Is 29 a prime number?',
      steps: [
        {
          explanation: 'A prime number has exactly two factors: 1 and itself.',
          maths: '29 = ? x ?',
        },
        {
          explanation:
            'Find the square root of 29 to know how far to test. The square root of 29 is just over 5.',
          maths: 'sqrt(29) is about 5.39',
        },
        {
          explanation: 'Test every prime up to 5: that is 2, 3, and 5.',
          maths: 'Primes to test: 2, 3, 5',
        },
        {
          explanation:
            '29 is odd, so 2 does not divide it. The digits add to 11, which is not in the 3 times table, so 3 does not divide 29. 29 does not end in 0 or 5, so 5 does not divide it.',
          maths: '29 / 2, 29 / 3, 29 / 5: none are whole numbers',
        },
        {
          explanation:
            'No prime up to the square root of 29 is a factor. So 29 has only the factors 1 and 29.',
          maths: '29 is prime',
        },
      ],
    },
    {
      id: 'rp-worked-2',
      title: 'Is 91 a prime number?',
      steps: [
        {
          explanation: 'Start by listing the primes to test, up to the square root of 91.',
          maths: 'sqrt(91) is about 9.54',
        },
        {
          explanation: 'Test every prime up to 9: that is 2, 3, 5, and 7.',
          maths: 'Primes to test: 2, 3, 5, 7',
        },
        {
          explanation:
            '91 is odd, so 2 is not a factor. The digits 9 and 1 add to 10, which is not in the 3 times table, so 3 is not a factor. 91 does not end in 0 or 5, so 5 is not a factor.',
          maths: '91 / 2, 91 / 3, 91 / 5: none are whole numbers',
        },
        {
          explanation: 'Now try 7. 7 times 13 is 91, so 7 divides 91 exactly.',
          maths: '91 / 7 = 13',
        },
        {
          explanation:
            '91 has factors other than 1 and itself, so 91 is composite.',
          maths: '91 = 7 x 13, composite',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'rp-q1',
      type: 'multiple-choice',
      stem: 'Which of these numbers is prime?',
      tier: 'core',
      options: ['9', '15', '21', '11'],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'rp-mis-odd-equals-prime',
    },
    {
      id: 'rp-q2',
      type: 'multiple-choice',
      stem: 'How many factors does a prime number have?',
      tier: 'core',
      options: ['Exactly 1', 'Exactly 2', 'Exactly 3', 'More than 3'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'rp-mis-one-is-prime',
    },
    {
      id: 'rp-q3',
      type: 'multiple-choice',
      stem: 'Which of these is the only even prime number?',
      tier: 'core',
      options: ['2', '4', '6', 'There is no even prime'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'rp-mis-no-even-prime',
    },
    {
      id: 'rp-q4',
      type: 'multiple-choice',
      stem: 'Which of these numbers is composite (not prime)?',
      tier: 'core',
      options: ['7', '13', '21', '23'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'rp-mis-prime-vs-multiple',
    },
    {
      id: 'rp-q5',
      type: 'numeric-entry',
      stem: 'How many prime numbers are there between 1 and 10 (including 10)?',
      tier: 'core',
      correctAnswer: 4,
      xpValue: 10,
      hint: 'List the primes: 2, 3, 5, 7. Count them.',
    },
    {
      id: 'rp-q6',
      type: 'numeric-entry',
      stem: 'What is the smallest prime number?',
      tier: 'core',
      correctAnswer: 2,
      xpValue: 10,
      hint: '1 is not prime. The next number to check is 2.',
    },
    {
      id: 'rp-q7',
      type: 'spot-misconception',
      stem: 'Tom says: "1 must be prime because it has no other factors apart from itself." Is Tom right?',
      tier: 'core',
      statements: [
        {
          text: '1 is prime, since you cannot divide it by anything else and get a whole number.',
          isMisconception: true,
        },
        {
          text: '1 is not prime. A prime must have exactly two different factors, and 1 has only one factor (itself).',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'rp-mis-one-is-prime',
    },
    {
      id: 'rp-q8',
      type: 'multiple-choice',
      stem: 'Which list contains only prime numbers?',
      tier: 'confident',
      options: [
        '2, 3, 5, 9, 11',
        '3, 5, 7, 11, 13',
        '1, 2, 3, 5, 7',
        '2, 5, 11, 15, 17',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'rp-mis-one-is-prime',
    },
    {
      id: 'rp-q9',
      type: 'multiple-choice',
      stem: 'To test whether 71 is prime, what is the largest prime you need to try as a divisor?',
      tier: 'confident',
      options: ['3', '11', '71', '7'],
      correctIndex: 3,
      xpValue: 15,
      hint: 'The square root of 71 is just under 8.5. List the primes up to 8.',
      misconceptionId: 'rp-mis-test-all-divisors',
    },
    {
      id: 'rp-q10',
      type: 'numeric-entry',
      stem: 'How many prime numbers are there between 20 and 30 (not including 20 or 30)?',
      tier: 'confident',
      correctAnswer: 2,
      xpValue: 15,
      hint: 'Test each odd number from 21 to 29 against 2, 3, and 5.',
    },
    {
      id: 'rp-q11',
      type: 'numeric-entry',
      stem: 'What is the next prime number after 23?',
      tier: 'confident',
      correctAnswer: 29,
      xpValue: 15,
      hint: '24 is even. 25 ends in 5. 27 is in the 3 times table. Try 29.',
    },
    {
      id: 'rp-q12',
      type: 'spot-misconception',
      stem: 'Aisha says: "57 must be prime because it is odd and is not in the 5 times table." Is her reasoning sound?',
      tier: 'confident',
      statements: [
        {
          text: 'Aisha is right. Odd numbers that do not end in 5 are always prime.',
          isMisconception: true,
        },
        {
          text: 'Aisha has missed a divisor. 57 = 3 x 19, so 57 is composite.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'rp-mis-odd-equals-prime',
    },
    {
      id: 'rp-q13',
      type: 'missing-step',
      stem: 'Fill in the missing step in this worked solution. Decide whether 47 is prime.',
      tier: 'confident',
      steps: [
        'Find the square root of 47. The square root of 47 is about 6.86.',
        'List the primes up to 6: that is 2, 3, and 5.',
        null,
        'No prime up to the square root of 47 divides it, so 47 is prime.',
      ],
      missingStepIndex: 2,
      correctStep:
        '47 is odd, so 2 is not a factor. The digits 4 and 7 add to 11, which is not in the 3 times table, so 3 is not a factor. 47 does not end in 0 or 5, so 5 is not a factor.',
      xpValue: 20,
    },
    {
      id: 'rp-q14',
      type: 'drag-order',
      stem: 'Place these numbers in order from smallest to largest, using only the prime numbers in the list.',
      tier: 'confident',
      items: ['13', '7', '23', '17'],
      correctOrder: [1, 0, 3, 2],
      xpValue: 15,
    },
    {
      id: 'rp-q15',
      type: 'multiple-choice',
      stem: 'A pupil claims 51 is prime because it is odd. Which statement best explains why this is wrong?',
      tier: 'challenge',
      options: [
        '51 has only 1 and itself as factors, so it is prime after all.',
        '51 = 3 x 17, so 51 has factors other than 1 and itself.',
        '51 ends in 1, so by the digit rule it must be prime.',
        'No odd number above 50 can be prime.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'rp-mis-odd-equals-prime',
    },
    {
      id: 'rp-q16',
      type: 'numeric-entry',
      stem: 'A school librarian in Sevenoaks arranges 47 maths puzzle books on display. She wants to lay them out in a rectangle of equal rows and columns, with more than one row. What is the smallest number of books she would need to add to make this possible using a 6 by something rectangle?',
      tier: 'challenge',
      correctAnswer: 1,
      xpValue: 25,
      hint: '47 itself is prime, so it does not split into a non-trivial rectangle. What is the next multiple of 6 above 47?',
    },
    {
      id: 'rp-q17',
      type: 'multiple-choice',
      stem: 'Two pupils, Maya and Liam, each pick a number between 30 and 50. Maya says her number is the largest prime in that range. Liam says his number is the smallest. What numbers did they pick?',
      tier: 'challenge',
      options: [
        'Maya 49, Liam 31',
        'Maya 47, Liam 31',
        'Maya 47, Liam 33',
        'Maya 43, Liam 37',
      ],
      correctIndex: 1,
      xpValue: 20,
      hint: '49 = 7 x 7, so it is not prime. 33 = 3 x 11, so it is not prime.',
      misconceptionId: 'rp-mis-ends-in-1-or-7',
    },
    {
      id: 'rp-q18',
      type: 'numeric-entry',
      stem: 'A Year 7 maths club at a Manchester grammar school has 41 pupils. The teacher tries to split them into equal teams of more than one pupil with no one left over. After failing, she explains why it cannot be done. How many pupils need to leave the club for the smallest possible split into equal teams of 2 or more?',
      tier: 'challenge',
      correctAnswer: 1,
      xpValue: 25,
      hint: '41 is prime, so it cannot be split. The next number below 41 that splits is 40.',
    },
    {
      id: 'rp-q19',
      type: 'drag-order',
      stem: 'These four numbers are all prime. Place them in order from smallest to largest.',
      tier: 'challenge',
      items: ['41', '37', '53', '47'],
      correctOrder: [1, 0, 3, 2],
      xpValue: 20,
      hint: 'Compare the digits in the tens place first. 37 is in the thirties; 41 and 47 are in the forties; 53 is in the fifties.',
    },
    {
      id: 'rp-q20',
      type: 'missing-step',
      stem: 'Fill in the missing step in this worked solution. Decide whether 143 is prime.',
      tier: 'challenge',
      steps: [
        'Find the square root of 143. The square root of 143 is about 11.96.',
        'List the primes up to 11: that is 2, 3, 5, 7, and 11.',
        '143 is odd, so 2 is not a factor. The digits add to 8, which is not in the 3 times table, so 3 is not a factor. 143 does not end in 0 or 5, so 5 is not a factor. 143 / 7 = 20.43, so 7 is not a factor.',
        null,
        '11 is a factor of 143, so 143 has factors other than 1 and itself. 143 is composite.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Try 11. 11 times 13 is 143, so 11 divides 143 exactly.',
      xpValue: 25,
      misconceptionId: 'rp-mis-square-root-misread',
    },
  ],
  misconceptions: [
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Prime Numbers" page; the callout that 1 is excluded from the primes because it has only one factor.
    {
      id: 'rp-mis-one-is-prime',
      description: '1 is a prime number because it cannot be divided by anything else.',
      triggerAnswer: 'one-is-prime',
      correction:
        'Actually, 1 is not prime. A prime number has exactly two different factors. 1 has only one factor (itself), so it does not qualify.',
      reExplanation:
        'The smallest prime is 2. The list of primes starts 2, 3, 5, 7, 11, 13. Excluding 1 makes prime factorisation work neatly: every whole number above 1 has one unique way of being written as a product of primes.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a "list the prime numbers" question where pupils included 9, 15 and 21 because they were odd.
    {
      id: 'rp-mis-odd-equals-prime',
      description: 'All odd numbers are prime.',
      triggerAnswer: 'odd-prime',
      correction:
        'Odd numbers are not always prime. Many odd numbers, such as 9, 15, 21, 25, 27 and 33, are composite.',
      reExplanation:
        '9 is odd, but 9 = 3 x 3, so 9 has factors 1, 3 and 9. That is three factors, not two, so 9 is composite. To test whether an odd number is prime, you still need to check divisibility by 3, 5, 7 and so on.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Prime Numbers" page; the highlighted note that 2 is the unique even prime because every other even number has 2 as an extra factor.
    {
      id: 'rp-mis-no-even-prime',
      description: 'No even number can ever be prime.',
      triggerAnswer: 'no-even',
      correction:
        'In fact, 2 is prime. It is the only even prime, because every other even number has 2 as a factor and so has at least three factors.',
      reExplanation:
        '2 has factors 1 and 2 only, which is exactly the two factors a prime needs. Every other even number, such as 4, 6 or 8, has 1, 2 and itself as factors at the least, so it is composite.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a primality-test question where pupils tried every divisor below the candidate instead of stopping at the square root.
    {
      id: 'rp-mis-test-all-divisors',
      description:
        'To check if a number is prime, you must test every number below it as a divisor.',
      triggerAnswer: 'test-all',
      correction:
        'You only need to test prime divisors up to the square root of the number. Anything above gives a paired factor below it.',
      reExplanation:
        'For 71, the square root is just under 8.5. You only need to try 2, 3, 5 and 7. None divide 71, so 71 is prime. Testing 11 or 13 is wasted effort, since any factor above the square root pairs with one below.',
    },
    // Source: Hart, K. M. (ed.) (1981) Children's Understanding of Mathematics: 11-16 (CSMS), John Murray; chapter on Number Operations reports children labelling times-table numbers as "prime" because the times table feels like a privileged list.
    {
      id: 'rp-mis-prime-vs-multiple',
      description:
        'Numbers in the times tables (multiples) are prime; numbers outside the times tables are composite.',
      triggerAnswer: 'multiple-confusion',
      correction:
        'Multiples and primes are different ideas. A prime has exactly two factors. A multiple of n is just n times a whole number.',
      reExplanation:
        '15 is a multiple of 3 and a multiple of 5, so 15 has factors 1, 3, 5 and 15. That makes 15 composite, not prime. The primes are the numbers you cannot reach as a non-trivial multiple of any smaller number.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 01 (Foundation, Non-calculator), commentary on a primes question where pupils trusted last-digit shortcuts and labelled 21, 33 and 49 as prime.
    {
      id: 'rp-mis-ends-in-1-or-7',
      description: 'Any number that ends in 1, 3, 7 or 9 must be prime.',
      triggerAnswer: 'ends-in',
      correction:
        'The last digit alone does not decide. 21, 33, 49, 51, 57, 63, 77, 81, 91 and 93 all end in 1, 3, 7 or 9 yet are composite.',
      reExplanation:
        '21 ends in 1 but 21 = 3 x 7, so 21 is composite. 49 ends in 9 but 49 = 7 x 7. The last digit only rules out divisibility by 2 and 5; you still need to test 3, 7, and the next primes up to the square root.',
    },
    // Authored, no external source, classroom-observed Year 7 reading slip when learners first meet the square-root test
    {
      id: 'rp-mis-square-root-misread',
      description:
        'You only need to check divisibility by the integer square root, not by every prime up to it.',
      triggerAnswer: 'sqrt-only',
      correction:
        'You must test every prime up to and including the square root, not just the integer part of the square root itself.',
      reExplanation:
        'For 91, the square root is about 9.54. The primes up to 9 are 2, 3, 5 and 7. You must test all four. Checking only 9 (or only one of the primes) misses 7, which is the factor that shows 91 = 7 x 13 and is therefore composite.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const primesZoneNodes = [recognisingPrimes]
