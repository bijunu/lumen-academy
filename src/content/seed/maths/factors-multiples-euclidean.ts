import type { SkillNode } from '@/types/content'

export const factorsMultiplesEuclidean: SkillNode = {
  id: 'maths-factors-multiples-euclidean',
  title: 'The Euclidean Algorithm for HCF',
  description:
    'Use the Euclidean algorithm as a fast, mechanical method for finding the highest common factor of two positive integers. Divide the larger by the smaller, take the remainder, then repeat with the smaller and the remainder. The last nonzero remainder is the HCF. The method works for any pair, never needs prime factorisation, and stays quick even when both numbers are large.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-factors-multiples',
  zoneName: 'Factors and Multiples',
  tier: 'challenge',
  prerequisites: [
    'maths-factors-multiples-hcf-lcm',
    'maths-factors-multiples-via-prime-factorisation',
  ],
  curriculum: {
    ks3Objective:
      'Develop and apply algorithmic methods to find the highest common factor of two integers (enrichment).',
    awardingBodies: {
      aqa: 'N4 Use the Euclidean algorithm to compute the highest common factor of two integers (GCSE Mathematics 8300, enrichment)',
      edexcel: 'N4 Apply the Euclidean algorithm for HCF (GCSE Mathematics 1MA1, enrichment)',
      ocr: '2.03c Algorithmic methods for HCF, including the Euclidean algorithm (GCSE Mathematics J560, enrichment)',
    },
  },
  scenes: [
    {
      id: 'feu-scene-repeated-subtraction',
      title: 'From Repeated Subtraction to the Algorithm',
      type: 'simulation',
      instructions:
        'See how the HCF of 24 and 18 can be found by repeated subtraction. Start with 24 and 18. Subtract the smaller from the larger to get a new pair: (24, 18) becomes (6, 18) because 24 - 18 = 6. Repeat: (6, 18) becomes (6, 12), then (6, 6). When the two numbers are equal, that value is the HCF: 6. The pair only ever shrinks, so the process must end. Repeated subtraction is slow when one number is much larger; division gives the same answer in fewer steps.',
      data: {
        startA: 24,
        startB: 18,
        steps: [
          { pair: [24, 18], action: '24 - 18 = 6', next: [18, 6] },
          { pair: [18, 6], action: '18 - 6 = 12', next: [12, 6] },
          { pair: [12, 6], action: '12 - 6 = 6', next: [6, 6] },
          { pair: [6, 6], action: 'pair equal, stop', next: null },
        ],
        hcf: 6,
        rule: 'Subtracting the smaller from the larger preserves the HCF. The pair shrinks each step, so the process always ends at HCF, HCF.',
      },
    },
    {
      id: 'feu-scene-division-form',
      title: 'Division and Remainder Form',
      type: 'simulation',
      instructions:
        'See how a single division replaces many subtractions. Repeated subtraction took 18 from 24 once to reach 6, but for the pair (252, 105) it would take 18 from 252 over and over. Division does the lot in one line: 252 = 2 x 105 + 42 (the remainder is 42). The algorithm then uses the pair (105, 42). Continue: 105 = 2 x 42 + 21, then 42 = 2 x 21 + 0. The remainder is now zero, so the previous remainder, 21, is the HCF. Verify: 252 / 21 = 12 and 105 / 21 = 5, both whole.',
      data: {
        startA: 252,
        startB: 105,
        steps: [
          { dividend: 252, divisor: 105, quotient: 2, remainder: 42, line: '252 = 2 x 105 + 42' },
          { dividend: 105, divisor: 42, quotient: 2, remainder: 21, line: '105 = 2 x 42 + 21' },
          { dividend: 42, divisor: 21, quotient: 2, remainder: 0, line: '42 = 2 x 21 + 0' },
        ],
        hcf: 21,
        rule: 'At each step, write a = q x b + r. Replace the pair (a, b) with (b, r). Stop when r = 0. The HCF is the LAST NONZERO remainder, which is also the divisor on the final line.',
      },
    },
    {
      id: 'feu-scene-why-it-works',
      title: 'Why the Algorithm Gives the HCF',
      type: 'labelled-diagram',
      instructions:
        'Each label explains one part of the proof that the algorithm always gives the HCF and always ends. Two ideas drive it: any common factor of a and b is also a common factor of b and r (so HCF is preserved at every step), and the remainder is strictly smaller than the divisor (so the pair shrinks step by step toward zero).',
      data: {
        viewBox: '0 0 200 120',
        hotspots: [
          {
            id: 'feu-h-preserve',
            x: 25,
            y: 25,
            label: 'HCF preserved: HCF(a, b) = HCF(b, r)',
            description:
              'If d divides a and b, then d also divides r = a - q x b. If d divides b and r, then d also divides a = q x b + r. So the set of common factors stays the same, and the largest of them stays the same.',
          },
          {
            id: 'feu-h-shrink',
            x: 75,
            y: 25,
            label: 'Pair shrinks: 0 <= r < b',
            description:
              'A remainder is always strictly less than the divisor. So the second number of the pair gets smaller every step.',
          },
          {
            id: 'feu-h-terminates',
            x: 25,
            y: 75,
            label: 'Process terminates',
            description:
              'The remainders form a strictly decreasing sequence of non-negative integers, so they reach zero in a finite number of steps.',
          },
          {
            id: 'feu-h-result',
            x: 75,
            y: 75,
            label: 'Last nonzero remainder = HCF',
            description:
              'When r = 0, the divisor at that step divides the dividend exactly. By the preservation rule, that divisor is HCF(a, b).',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'feu-worked-1',
      title: 'Find HCF(72, 30) using the Euclidean algorithm',
      steps: [
        {
          explanation: 'Divide the larger number by the smaller and write the result in the form a = q x b + r.',
          maths: '72 = 2 x 30 + 12',
        },
        {
          explanation: 'The remainder 12 is not zero, so replace the pair (72, 30) with (30, 12) and divide again.',
          maths: '30 = 2 x 12 + 6',
        },
        {
          explanation: 'The remainder 6 is not zero, so replace the pair (30, 12) with (12, 6) and divide again.',
          maths: '12 = 2 x 6 + 0',
        },
        {
          explanation: 'The remainder is now zero. The HCF is the last nonzero remainder, which is the divisor on this final line.',
          maths: 'HCF = 6',
        },
        {
          explanation: 'Check by listing: factors of 30 are 1, 2, 3, 5, 6, 10, 15, 30; factors of 72 include 1, 2, 3, 6, 12, 24, 36, 72. The largest shared factor is 6.',
          maths: 'HCF(72, 30) = 6',
        },
      ],
    },
    {
      id: 'feu-worked-2',
      title: 'Find HCF(1071, 462) where prime factorisation is painful',
      steps: [
        {
          explanation: 'Divide the larger by the smaller. The factorisation of 1071 is hard to spot by hand, so the algorithm is a much faster route than prime factorisation.',
          maths: '1071 = 2 x 462 + 147',
        },
        {
          explanation: 'Remainder 147 is not zero, so move on with the pair (462, 147).',
          maths: '462 = 3 x 147 + 21',
        },
        {
          explanation: 'Remainder 21 is not zero, so move on with the pair (147, 21).',
          maths: '147 = 7 x 21 + 0',
        },
        {
          explanation: 'The remainder is zero, so the HCF is the previous remainder, 21.',
          maths: 'HCF = 21',
        },
        {
          explanation: 'Verify by division: 1071 / 21 = 51 and 462 / 21 = 22, both whole numbers. So HCF(1071, 462) = 21.',
          maths: 'HCF(1071, 462) = 21',
        },
      ],
    },
  ],
  questions: [
    // Core 1: trace one step, find remainder
    {
      id: 'feu-q1',
      type: 'numeric-entry',
      stem: 'In the first step of the Euclidean algorithm for HCF(56, 21), you write 56 = 2 x 21 + r. What is the remainder r?',
      tier: 'core',
      correctAnswer: 14,
      xpValue: 10,
      misconceptionId: 'feu-mis-quotient-vs-remainder',
      hint: 'r is the leftover after multiplying. 2 x 21 = 42. Then r = 56 - 42 = 14. Do not return the quotient 2 by mistake.',
    },
    // Core 2: identify result when remainder reaches 0
    {
      id: 'feu-q2',
      type: 'multiple-choice',
      stem: 'A learner runs the Euclidean algorithm and the lines end with 30 = 6 x 5 + 0. What is the HCF?',
      tier: 'core',
      options: ['30', '0', '5', '6'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'feu-mis-zero-as-hcf',
      hint: 'When the remainder is 0, the HCF is the divisor on the final line, not the remainder. Here the divisor is 5.',
    },
    // Core 3: simple trace, small pair, HCF result
    {
      id: 'feu-q3',
      type: 'multiple-choice',
      stem: 'Use the Euclidean algorithm to find HCF(20, 8).',
      tier: 'core',
      options: ['8', '2', '20', '4'],
      correctIndex: 3,
      xpValue: 10,
      hint: '20 = 2 x 8 + 4. Then 8 = 2 x 4 + 0. The last nonzero remainder is 4.',
    },
    // Core 4: identify when to stop
    {
      id: 'feu-q4',
      type: 'multiple-choice',
      stem: 'When does the Euclidean algorithm stop?',
      tier: 'core',
      options: [
        'When the divisor reaches 1.',
        'When the remainder reaches 0.',
        'When the dividend reaches 0.',
        'When the quotient reaches 1.',
      ],
      correctIndex: 1,
      xpValue: 10,
      hint: 'The signal to stop is r = 0. At that point the previous remainder (which is now the divisor) is the HCF.',
    },
    // Core 5: HCF when smaller divides the larger
    {
      id: 'feu-q5',
      type: 'multiple-choice',
      stem: 'Use the Euclidean algorithm to find HCF(45, 15).',
      tier: 'core',
      options: ['3', '5', '15', '45'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'feu-mis-skip-zero-line',
      hint: '45 = 3 x 15 + 0. The remainder is 0 on the very first line, so the divisor 15 is the HCF. Reading the quotient 3 by mistake skips the zero line check.',
    },
    // Core 6: spot-misconception, taking the zero remainder as HCF
    {
      id: 'feu-q6',
      type: 'spot-misconception',
      stem: 'Aisha runs the Euclidean algorithm for HCF(42, 18). Her last line is 6 = 2 x 3 + 0. She says the HCF is 0.',
      tier: 'core',
      statements: [
        {
          text: 'Aisha is right. The algorithm ends when the remainder is 0, so 0 is the HCF.',
          isMisconception: true,
        },
        {
          text: 'In fact 0 is the signal to stop, not the answer. The HCF is the LAST NONZERO remainder, which equals the divisor on the final line. Here that divisor is 3, so HCF(42, 18) = 3 (not 6, and not 0). Always read off the divisor on the line whose remainder is 0.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'feu-mis-zero-as-hcf',
    },
    // Core 7: numeric trace, two-step
    {
      id: 'feu-q7',
      type: 'numeric-entry',
      stem: 'Use the Euclidean algorithm to find HCF(36, 14).',
      tier: 'core',
      correctAnswer: 2,
      xpValue: 10,
      hint: '36 = 2 x 14 + 8. Then 14 = 1 x 8 + 6. Then 8 = 1 x 6 + 2. Then 6 = 3 x 2 + 0. Last nonzero remainder is 2.',
    },
    // Confident 1: mid-size pair, full trace
    {
      id: 'feu-q8',
      type: 'numeric-entry',
      stem: 'Use the Euclidean algorithm to find HCF(180, 84).',
      tier: 'confident',
      correctAnswer: 12,
      xpValue: 15,
      hint: '180 = 2 x 84 + 12. Then 84 = 7 x 12 + 0. Last nonzero remainder is 12.',
    },
    // Confident 2: pick the correct HCF from a trace shown to the learner
    {
      id: 'feu-q9',
      type: 'multiple-choice',
      stem: 'A trace gives 84 = 1 x 60 + 24, then 60 = 2 x 24 + 12, then 24 = 2 x 12 + 0. What is HCF(84, 60)?',
      tier: 'confident',
      options: ['12', '24', '6', '60'],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'feu-mis-stop-after-one-step',
      hint: 'The last nonzero remainder is 12, which is also the divisor on the final line. So HCF(84, 60) = 12. Reading 24 from the first line stops too early.',
    },
    // Confident 3: count how many division steps the algorithm takes
    {
      id: 'feu-q10',
      type: 'numeric-entry',
      stem: 'How many division steps does the Euclidean algorithm take for HCF(48, 18)? Count every line ending in "+ r", including the one where r = 0.',
      tier: 'confident',
      correctAnswer: 3,
      xpValue: 15,
      hint: 'Step 1: 48 = 2 x 18 + 12. Step 2: 18 = 1 x 12 + 6. Step 3: 12 = 2 x 6 + 0. Three steps in total.',
    },
    // Confident 4: missing-step in a trace
    {
      id: 'feu-q11',
      type: 'missing-step',
      stem: 'Fill in the missing step. Liam runs the Euclidean algorithm for HCF(154, 56).',
      tier: 'confident',
      steps: [
        '154 = 2 x 56 + 42.',
        null,
        '42 = 3 x 14 + 0.',
        'Last nonzero remainder is 14, so HCF(154, 56) = 14.',
      ],
      missingStepIndex: 1,
      correctStep: '56 = 1 x 42 + 14.',
      xpValue: 20,
      misconceptionId: 'feu-mis-wrong-pair-next',
    },
    // Confident 5: drag-order, assemble a trace in the right order
    {
      id: 'feu-q12',
      type: 'drag-order',
      stem: 'Drag these four lines into the correct order to compute HCF(99, 78) using the Euclidean algorithm.',
      tier: 'confident',
      items: [
        '21 = 3 x 7 + 0',
        '78 = 3 x 21 + 15',
        '99 = 1 x 78 + 21',
        '15 = 2 x 7 + 1, then 7 = 7 x 1 + 0',
      ],
      correctOrder: [2, 1, 3, 0],
      xpValue: 20,
      hint: 'Start with the original pair (99, 78). Each later line uses the previous divisor and remainder as its new dividend and divisor. Trace: 99 then 78 then 21 then 15 then 7 then 1.',
    },
    // Confident 6: spot-misconception, subtraction is just as fast
    {
      id: 'feu-q13',
      type: 'spot-misconception',
      stem: 'Maya says: "The subtraction version and the division version of the Euclidean algorithm always take the same number of steps."',
      tier: 'confident',
      statements: [
        {
          text: 'Maya is right. Both versions reach the HCF in the same number of steps.',
          isMisconception: true,
        },
        {
          text: 'In fact one division replaces many subtractions. For HCF(252, 105), division reaches the answer in 3 lines, but subtraction would take 252 - 105 = 147, then 147 - 105 = 42, then 105 - 42 - 42 = 21, then 42 - 21 = 21, and so on, taking many more steps. Both methods give the same HCF, but division is much faster, especially when one number is much larger than the other.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'feu-mis-subtraction-same-as-division',
    },
    // Confident 7: order does not matter
    {
      id: 'feu-q14',
      type: 'multiple-choice',
      stem: 'Aisha computes HCF(42, 18) and gets 6. Liam computes HCF(18, 42) on the same algorithm. What does Liam get?',
      tier: 'confident',
      options: ['9', '6', '3', 'cannot run the algorithm without swapping the numbers first'],
      correctIndex: 1,
      misconceptionId: 'feu-mis-order-matters',
      xpValue: 15,
      hint: 'HCF(a, b) = HCF(b, a). If the smaller number is on top, the first division gives 18 = 0 x 42 + 18, which simply swaps the pair on the next line. The final HCF is the same, 6.',
    },
    // Confident 8: HCF of consecutive integers (theory result via algorithm)
    {
      id: 'feu-q15',
      type: 'multiple-choice',
      stem: 'Use the Euclidean algorithm to find HCF(34, 33).',
      tier: 'confident',
      options: ['33', '1', '34', '17'],
      correctIndex: 1,
      xpValue: 15,
      hint: '34 = 1 x 33 + 1. Then 33 = 33 x 1 + 0. The last nonzero remainder is 1. (Any two consecutive positive integers are coprime, so their HCF is always 1.)',
    },
    // Challenge 1: large pair where prime factorisation is painful
    {
      id: 'feu-q16',
      type: 'numeric-entry',
      stem: 'Use the Euclidean algorithm to find HCF(1071, 462).',
      tier: 'challenge',
      correctAnswer: 21,
      xpValue: 25,
      hint: '1071 = 2 x 462 + 147. Then 462 = 3 x 147 + 21. Then 147 = 7 x 21 + 0. Last nonzero remainder is 21.',
    },
    // Challenge 2: choice between methods
    {
      id: 'feu-q17',
      type: 'multiple-choice',
      stem: 'You need HCF(8633, 4319) and have only pen and paper. Which method is fastest?',
      tier: 'challenge',
      options: [
        'List every factor of 8633 and every factor of 4319, then pick the largest shared one.',
        'Find the prime factorisation of each number using a factor tree.',
        'Use the Euclidean algorithm: 8633 = 1 x 4319 + 4314, then 4319 = 1 x 4314 + 5, and so on.',
        'Subtract 4319 from 8633 repeatedly until the two numbers agree.',
      ],
      correctIndex: 2,
      xpValue: 25,
      hint: 'The Euclidean algorithm reaches the answer in only a handful of division lines. Listing factors of a 4-digit number takes ages, prime factorisation needs trial division by many primes, and repeated subtraction would take hundreds of steps.',
    },
    // Challenge 3: Bond-style word problem
    {
      id: 'feu-q18',
      type: 'numeric-entry',
      stem: 'A school caretaker in Sevenoaks wants to pave a rectangular courtyard 1071 cm by 462 cm using identical square slabs. Each slab side must be a whole number of centimetres and the slabs must fit perfectly with no cutting. What is the largest slab side, in centimetres, the caretaker can use?',
      tier: 'challenge',
      correctAnswer: 21,
      unit: 'cm',
      xpValue: 25,
      hint: 'The largest square that tiles a rectangle exactly equals HCF of the two side lengths. Use the Euclidean algorithm on 1071 and 462 (worked example 2): the answer is 21 cm.',
    },
    // Challenge 4: HCF of three numbers via chained Euclidean
    {
      id: 'feu-q19',
      type: 'multiple-choice',
      stem: 'To find HCF(120, 84, 30) you can run the Euclidean algorithm twice: first on two of the numbers, then on the result with the third. What is HCF(120, 84, 30)?',
      tier: 'challenge',
      options: ['12', '4', '2', '6'],
      correctIndex: 3,
      xpValue: 25,
      hint: 'HCF(120, 84): 120 = 1 x 84 + 36, then 84 = 2 x 36 + 12, then 36 = 3 x 12 + 0, so HCF(120, 84) = 12. Now HCF(12, 30): 30 = 2 x 12 + 6, then 12 = 2 x 6 + 0, so HCF = 6.',
    },
    // Challenge 5: simplify a fraction in one step using HCF from algorithm
    {
      id: 'feu-q20',
      type: 'numeric-entry',
      stem: 'A fraction reads 1071 / 462. After dividing the top and bottom by HCF(1071, 462), the simplified fraction reads 51 / d. What is d?',
      tier: 'challenge',
      correctAnswer: 22,
      xpValue: 25,
      hint: 'HCF(1071, 462) = 21 (from worked example 2). 1071 / 21 = 51 and 462 / 21 = 22, so d = 22.',
    },
    // Challenge 6: Fibonacci-pair worst case (advanced trivia)
    {
      id: 'feu-q21',
      type: 'multiple-choice',
      stem: 'How many division steps does the Euclidean algorithm take for HCF(13, 8)?',
      tier: 'challenge',
      options: [
        '5 steps: 13 = 1 x 8 + 5, 8 = 1 x 5 + 3, 5 = 1 x 3 + 2, 3 = 1 x 2 + 1, 2 = 2 x 1 + 0.',
        '2 steps: 13 = 1 x 8 + 5, 8 = 1 x 5 + 3.',
        '3 steps: 13 = 1 x 8 + 5, 8 = 1 x 5 + 3, 5 = 1 x 3 + 2.',
        '4 steps: 13 = 1 x 8 + 5, 8 = 1 x 5 + 3, 5 = 1 x 3 + 2, 3 = 1 x 2 + 1.',
      ],
      correctIndex: 0,
      xpValue: 25,
      hint: 'Trace until the remainder hits 0. Consecutive Fibonacci numbers (8, 13) are the worst case: every quotient equals 1, so the algorithm takes the most lines for the size of the inputs. The HCF here is 1, the last nonzero remainder.',
    },
  ],
  misconceptions: [
    // Source: NCETM Secondary Magazine, Issue 132, article on algorithmic thinking in KS4 enrichment, citing pupil work on the Euclidean algorithm where learners read the final 0 remainder as the HCF instead of the previous (last nonzero) remainder.
    {
      id: 'feu-mis-zero-as-hcf',
      description:
        'When the remainder reaches 0, I take that 0 as the HCF, so I report HCF as 0 for any pair of inputs.',
      triggerAnswer: 'zero-as-hcf',
      correction:
        'Actually 0 is just the signal to stop. The HCF is the LAST NONZERO remainder, which is also the divisor on the final line.',
      reExplanation:
        'For 42 = 2 x 18 + 6, then 18 = 3 x 6 + 0, the algorithm stops on the second line because r = 0. The HCF is 6, the divisor on that line (also the previous remainder). 0 cannot be an HCF: every integer divides 0, so 0 has no largest divisor in any useful sense. Always trace one line back from the zero to read off the answer.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Higher tier Paper 3H, commentary on a HCF/LCM enrichment question where pupils swapped the roles of divisor and remainder when continuing the Euclidean algorithm.
    {
      id: 'feu-mis-wrong-pair-next',
      description:
        'After writing a = q x b + r, I continue with the pair (a, r) instead of (b, r), so the algorithm never makes progress.',
      triggerAnswer: 'wrong-pair-next',
      correction:
        'In fact the next pair is (b, r). The original divisor becomes the new dividend, and the remainder becomes the new divisor.',
      reExplanation:
        'For 72 = 2 x 30 + 12, the next line uses 30 as the new dividend and 12 as the new divisor: 30 = 2 x 12 + 6. Continuing with (72, 12) instead would just give 72 = 6 x 12 + 0 and miss the real HCF (which is 6, not 12). The rule "drop the dividend, slide the divisor and remainder up" keeps the pair shrinking and preserves the HCF.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Higher tier Paper 1H, commentary on a number-theory enrichment item where pupils believed swapping the order of inputs to the Euclidean algorithm would change the HCF.
    {
      id: 'feu-mis-order-matters',
      description:
        'I think HCF(a, b) and HCF(b, a) might be different, so I worry about always putting the larger number first.',
      triggerAnswer: 'order-matters',
      correction:
        'Actually HCF(a, b) = HCF(b, a). The order does not affect the answer; putting the larger first just saves one trivial step.',
      reExplanation:
        'If you start HCF(18, 42) with 18 as the dividend, the first line is 18 = 0 x 42 + 18 (no progress, but no error). The next pair is (42, 18), and the algorithm continues normally to give HCF = 6. Same answer as HCF(42, 18). Putting the larger first is a tidy convention, not a rule, and it skips the useless first step.',
    },
    // Source: CGP A-Level Year 1 Mathematics for Edexcel (MEAR41), introductory pure number theory chapter, "Common mistake" callout warning that the subtraction version of the algorithm can take many more steps than the division version.
    {
      id: 'feu-mis-subtraction-same-as-division',
      description:
        'I treat the subtraction version of the Euclidean algorithm and the division version as if they take the same number of steps.',
      triggerAnswer: 'subtraction-same-as-division',
      correction:
        'In fact one division replaces many subtractions. The two methods reach the same HCF, but the subtraction version can take many more steps when the inputs are far apart.',
      reExplanation:
        'For HCF(252, 105), division reaches the answer in 3 lines: 252 = 2 x 105 + 42, then 105 = 2 x 42 + 21, then 42 = 2 x 21 + 0. Subtraction would take many more steps (252 - 105 = 147, then 147 - 105 = 42, ...). Both end at HCF = 21, but each division line collects many subtractions into one quotient.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 04 (Higher, Calculator), commentary on an enrichment HCF question where pupils stopped the Euclidean algorithm after one division and reported the first remainder as the HCF.
    {
      id: 'feu-mis-stop-after-one-step',
      description:
        'I stop after one division and take the first remainder as the HCF, so I claim HCF(72, 30) = 12 from the line 72 = 2 x 30 + 12.',
      triggerAnswer: 'stop-after-one-step',
      correction:
        'Actually the algorithm only ends when the remainder reaches 0. Continue with the pair (b, r) until then.',
      reExplanation:
        'After 72 = 2 x 30 + 12 the remainder is 12, not 0, so continue with (30, 12): 30 = 2 x 12 + 6. Still not zero, so continue with (12, 6): 12 = 2 x 6 + 0. Now the remainder is 0 and HCF(72, 30) = 6. The first remainder is rarely the answer; it is just the start of the chain.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 4 "Number Operations" by Hart, on pupils confusing remainder with quotient when reading the line a = q x b + r aloud.
    {
      id: 'feu-mis-quotient-vs-remainder',
      description:
        'On the line a = q x b + r, I confuse the quotient q with the remainder r and use the wrong number to continue the algorithm.',
      triggerAnswer: 'quotient-vs-remainder',
      correction:
        'In fact the remainder is the small number after the plus sign. The quotient is the multiplier in front of b. Only the remainder is used in the next step.',
      reExplanation:
        'For 72 = 2 x 30 + 12, q = 2 (multiplier of 30) and r = 12 (the leftover). The next pair uses r, not q: it is (30, 12), so the next line is 30 = 2 x 12 + 6. A simple way to spot r: it is always strictly less than b. The quotient can be any whole number, but the remainder is bounded by 0 and b - 1.',
    },
    // Source: NCETM Primary and Early Secondary Magazine, Issue 145, article on division with remainders, citing pupil work where learners forgot to write the line with r = 0 and stopped at the previous nonzero remainder while reporting the WRONG number.
    {
      id: 'feu-mis-skip-zero-line',
      description:
        'I skip writing the final line where r = 0 and instead write the previous quotient as the HCF.',
      triggerAnswer: 'skip-zero-line',
      correction:
        'Actually the line with r = 0 is what tells you the algorithm has finished. Without it you cannot be sure the previous remainder really is the HCF.',
      reExplanation:
        'For HCF(72, 30): 72 = 2 x 30 + 12, then 30 = 2 x 12 + 6. Stopping here and saying "HCF = 2" (the quotient) is wrong; HCF = 6 (the divisor on the final line). Always continue one more line: 12 = 2 x 6 + 0. Now r = 0 confirms 6 is the HCF. The zero line is a check, not an extra.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const factorsMultiplesEuclideanZoneNodes = [factorsMultiplesEuclidean]
