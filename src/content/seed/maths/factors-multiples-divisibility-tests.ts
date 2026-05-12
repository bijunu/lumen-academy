import type { SkillNode } from '@/types/content'

export const factorsMultiplesDivisibilityTests: SkillNode = {
  id: 'maths-factors-multiples-divisibility-tests',
  title: 'Divisibility Tests',
  description:
    'Use quick rules to decide whether one whole number divides into another without doing a full division. Apply the digit, digit-sum, last-two-digits, last-three-digits, and alternating-digit-sum tests for 2, 3, 4, 5, 6, 8, 9, 10 and 11.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-factors-multiples',
  zoneName: 'Factors and Multiples',
  tier: 'confident',
  prerequisites: ['maths-factors-multiples-finding-factors'],
  curriculum: {
    ks3Objective:
      'Use the concepts and vocabulary of prime numbers, factors (divisors), multiples, common factors, common multiples, highest common factor, lowest common multiple, prime factorisation, including using product notation and the unique factorisation property.',
    awardingBodies: {
      aqa: 'N4 Use divisibility tests for 2, 3, 4, 5, 6, 8, 9, 10 and 11 (GCSE Mathematics 8300)',
      edexcel: 'N4 Apply divisibility tests for whole numbers (GCSE Mathematics 1MA1)',
      ocr: '2.02b Apply divisibility tests for 2, 3, 4, 5, 6, 8, 9, 10 and 11 (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'fdt-scene-easy-tests',
      title: 'The Easy Tests: 2, 5 and 10',
      type: 'simulation',
      instructions:
        'See how the simplest divisibility tests look only at the LAST digit of a whole number. A number is divisible by 2 if its last digit is 0, 2, 4, 6 or 8 (these are the even digits). A number is divisible by 5 if its last digit is 0 or 5. A number is divisible by 10 if its last digit is 0. So 736 ends in 6, an even digit, so 736 is divisible by 2 (but not 5 or 10). 945 ends in 5, so 945 is divisible by 5 (but not 2 or 10). 1280 ends in 0, so 1280 is divisible by 2, 5 AND 10 all at once.',
      data: {
        examples: [
          { number: 736, divisibleBy: [2], lastDigit: 6, reason: 'last digit 6 is even, so divisible by 2 only' },
          { number: 945, divisibleBy: [5], lastDigit: 5, reason: 'last digit 5, so divisible by 5 only' },
          { number: 1280, divisibleBy: [2, 5, 10], lastDigit: 0, reason: 'last digit 0, so divisible by 2, 5 and 10' },
          { number: 333, divisibleBy: [], lastDigit: 3, reason: 'last digit 3 is odd and not 0 or 5, so divisible by none of 2, 5, 10' },
        ],
        rule: 'Tests for 2, 5 and 10 only look at the last digit. Ignore the rest of the number.',
      },
    },
    {
      id: 'fdt-scene-digit-sum',
      title: 'Digit-Sum Tests for 3 and 9',
      type: 'simulation',
      instructions:
        'See how a number is divisible by 3 if the sum of its digits is divisible by 3, and divisible by 9 if the sum of its digits is divisible by 9. For 4716, add the digits: 4 + 7 + 1 + 6 = 18. Since 18 is divisible by 3 (18 = 3 x 6), 4716 is divisible by 3. Since 18 is also divisible by 9 (18 = 9 x 2), 4716 is divisible by 9 too. For 521, the digit sum is 5 + 2 + 1 = 8, which is divisible by neither 3 nor 9, so 521 is divisible by neither. The test works because 10, 100, 1000 all leave remainder 1 when divided by 3 or 9.',
      data: {
        examples: [
          { number: 4716, digitSum: 18, divisibleBy3: true, divisibleBy9: true, reason: 'digit sum 18 is divisible by both 3 and 9' },
          { number: 521, digitSum: 8, divisibleBy3: false, divisibleBy9: false, reason: 'digit sum 8 is divisible by neither 3 nor 9' },
          { number: 132, digitSum: 6, divisibleBy3: true, divisibleBy9: false, reason: 'digit sum 6 is divisible by 3 but not 9' },
          { number: 81, digitSum: 9, divisibleBy3: true, divisibleBy9: true, reason: 'digit sum 9, so divisible by 3 and 9' },
        ],
        rule: 'Test for 3: digit sum divisible by 3. Test for 9: digit sum divisible by 9. Every multiple of 9 is also a multiple of 3.',
      },
    },
    {
      id: 'fdt-scene-harder-tests',
      title: 'Harder Tests: 4, 6, 8 and 11',
      type: 'simulation',
      instructions:
        'See how 4, 6, 8 and 11 each have their own quick test. Test for 4: the last TWO digits form a number divisible by 4. So 1316 ends in 16, and 16 is divisible by 4, so 1316 is divisible by 4. Test for 6: divisible by BOTH 2 AND 3. So 132 ends in 2 (passes 2) and has digit sum 6 (passes 3), so 132 is divisible by 6. Test for 8: the last THREE digits form a number divisible by 8. So 17240 ends in 240, and 240 / 8 = 30, so 17240 is divisible by 8. Test for 11: take the alternating sum of digits (a - b + c - d ...). For 70499, that is 7 - 0 + 4 - 9 + 9 = 11, divisible by 11, so 70499 is divisible by 11.',
      data: {
        examples: [
          { number: 1316, test: '4', evidence: 'last two digits 16 divisible by 4', divisible: true },
          { number: 132, test: '6', evidence: 'last digit 2 (even) and digit sum 6 (divisible by 3)', divisible: true },
          { number: 17240, test: '8', evidence: 'last three digits 240 divisible by 8 (240 / 8 = 30)', divisible: true },
          { number: 70499, test: '11', evidence: 'alternating sum 7 - 0 + 4 - 9 + 9 = 11, divisible by 11', divisible: true },
          { number: 230, test: '4', evidence: 'last two digits 30 not divisible by 4 (30 / 4 = 7.5)', divisible: false },
        ],
        rule: 'Test for 4: last 2 digits / 4 is whole. Test for 6: passes both 2 AND 3. Test for 8: last 3 digits / 8 is whole. Test for 11: alternating digit sum is divisible by 11.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'fdt-worked-1',
      title: 'Check whether 4716 is divisible by 3, 6 and 9',
      steps: [
        {
          explanation: 'Add the digits to get the digit sum.',
          maths: '4 + 7 + 1 + 6 = 18',
        },
        {
          explanation: 'Test for 3: is the digit sum divisible by 3? 18 / 3 = 6, whole number, so yes.',
          maths: '18 / 3 = 6, so 4716 is divisible by 3',
        },
        {
          explanation: 'Test for 9: is the digit sum divisible by 9? 18 / 9 = 2, whole number, so yes.',
          maths: '18 / 9 = 2, so 4716 is divisible by 9',
        },
        {
          explanation: 'Test for 6: passes the 2-test AND the 3-test? Last digit is 6 (even), so the 2-test passes. Digit sum 18 passes the 3-test. Both pass.',
          maths: 'last digit 6 is even, and 18 / 3 = 6, so 4716 is divisible by 6',
        },
        {
          explanation: 'So 4716 is divisible by 3, 6 and 9. Check: 4716 / 6 = 786, a whole number.',
          maths: '4716 = 6 x 786 (and 4716 = 9 x 524)',
        },
      ],
    },
    {
      id: 'fdt-worked-2',
      title: 'Check whether 17240 is divisible by 4 and 8',
      steps: [
        {
          explanation: 'Test for 4: look at the last TWO digits.',
          maths: 'last two digits of 17240 are 40',
        },
        {
          explanation: 'Is 40 divisible by 4? Yes, 40 / 4 = 10 (whole), so 17240 passes the 4-test.',
          maths: '40 / 4 = 10, so 17240 is divisible by 4',
        },
        {
          explanation: 'Test for 8: look at the last THREE digits.',
          maths: 'last three digits of 17240 are 240',
        },
        {
          explanation: 'Is 240 divisible by 8? 240 / 8 = 30 (whole), so 17240 passes the 8-test too.',
          maths: '240 / 8 = 30, so 17240 is divisible by 8',
        },
        {
          explanation: 'So 17240 is divisible by both 4 and 8. Note that passing the 4-test does NOT guarantee passing the 8-test (e.g. 12 passes 4 but not 8).',
          maths: '17240 = 4 x 4310 = 8 x 2155',
        },
      ],
    },
  ],
  questions: [
    // Core 1: simple test for 2 (MCQ, correctIndex 0)
    {
      id: 'fdt-q1',
      type: 'multiple-choice',
      stem: 'Which one of these numbers is divisible by 2?',
      tier: 'core',
      options: ['4376', '4377', '4379', '4381'],
      correctIndex: 0,
      xpValue: 10,
      hint: 'A number is divisible by 2 if its last digit is 0, 2, 4, 6 or 8 (even).',
    },
    // Core 2: test for 5 (MCQ, correctIndex 2)
    {
      id: 'fdt-q2',
      type: 'multiple-choice',
      stem: 'Which one of these numbers is divisible by 5?',
      tier: 'core',
      options: ['832', '947', '6240', '1003'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'A number is divisible by 5 if its last digit is 0 or 5. Check the final digit only.',
    },
    // Core 3: test for 10 (MCQ, correctIndex 3)
    {
      id: 'fdt-q3',
      type: 'multiple-choice',
      stem: 'Which one of these numbers is divisible by 10?',
      tier: 'core',
      options: ['275', '348', '195', '4720'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'A number is divisible by 10 if its last digit is 0. Nothing else qualifies.',
    },
    // Core 4: digit sum test for 3 (numeric)
    {
      id: 'fdt-q4',
      type: 'numeric-entry',
      stem: 'What is the sum of the digits of 4716?',
      tier: 'core',
      correctAnswer: 18,
      xpValue: 10,
      hint: 'Add each digit: 4 + 7 + 1 + 6.',
    },
    // Core 5: apply digit-sum test for 3 (MCQ, correctIndex 1)
    {
      id: 'fdt-q5',
      type: 'multiple-choice',
      stem: 'Which one of these numbers is divisible by 3?',
      tier: 'core',
      options: ['521', '132', '518', '725'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Add the digits of each. 132 has digit sum 1 + 3 + 2 = 6, which is divisible by 3.',
    },
    // Core 6: test for 9 numeric
    {
      id: 'fdt-q6',
      type: 'numeric-entry',
      stem: 'What is the digit sum of 81, used in the test for divisibility by 9?',
      tier: 'core',
      correctAnswer: 9,
      xpValue: 10,
      hint: 'Add the digits: 8 + 1 = 9. Since 9 is divisible by 9, so is 81.',
    },
    // Core 7: spot-misconception (test for 4 = digit sum)
    {
      id: 'fdt-q7',
      type: 'spot-misconception',
      stem: 'Maya says "to test if a number is divisible by 4, add its digits and see if the sum is divisible by 4. So 13 is divisible by 4 because 1 + 3 = 4".',
      tier: 'core',
      statements: [
        {
          text: 'Maya is right. The digit-sum test works for any divisor, including 4.',
          isMisconception: true,
        },
        {
          text: 'Actually the digit-sum test only works for 3 and 9. The test for 4 looks at the LAST TWO digits: 13 / 4 = 3.25, so 13 is not divisible by 4 even though 1 + 3 = 4.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fdt-mis-digit-sum-for-4',
    },
    // Confident 1: test for 4 last-two-digits (MCQ, correctIndex 2)
    {
      id: 'fdt-q8',
      type: 'multiple-choice',
      stem: 'Which one of these numbers is divisible by 4?',
      tier: 'confident',
      options: ['9314', '8526', '7132', '5018'],
      correctIndex: 2,
      xpValue: 15,
      hint: 'Check the last two digits of each. 32 / 4 = 8, so 7132 ends in 32 which is divisible by 4.',
    },
    // Confident 2: test for 6 (MCQ, correctIndex 3)
    {
      id: 'fdt-q9',
      type: 'multiple-choice',
      stem: 'Which one of these numbers is divisible by 6?',
      tier: 'confident',
      options: ['215', '422', '519', '534'],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'fdt-mis-six-equals-three',
      hint: 'A number is divisible by 6 if it passes BOTH the 2-test (even last digit) AND the 3-test (digit sum divisible by 3). 534 ends in 4 (even) and 5 + 3 + 4 = 12 is divisible by 3.',
    },
    // Confident 3: test for 8 last-three-digits (numeric)
    {
      id: 'fdt-q10',
      type: 'numeric-entry',
      stem: 'To test whether 17240 is divisible by 8, you check the last three digits as a separate number. What number do you check?',
      tier: 'confident',
      correctAnswer: 240,
      xpValue: 15,
      hint: 'The last three digits of 17240 are 2, 4, 0, forming the number 240. Then check 240 / 8.',
    },
    // Confident 4: missing digit for 9-test (numeric)
    {
      id: 'fdt-q11',
      type: 'numeric-entry',
      stem: 'Find the missing digit so that the four-digit number ▢2345 is divisible by 9. (▢ is the thousands digit and is between 1 and 9.)',
      tier: 'confident',
      correctAnswer: 4,
      xpValue: 15,
      hint: 'Digit sum so far: 2 + 3 + 4 + 5 = 14. Add ▢: total = 14 + ▢. The next multiple of 9 above 14 is 18, so ▢ = 18 - 14 = 4.',
    },
    // Confident 5: spot-misconception (4-and-8 confusion)
    {
      id: 'fdt-q12',
      type: 'spot-misconception',
      stem: 'Liam says "if a number is divisible by 2 and by 4, then it must be divisible by 8. For example, 12 is divisible by both 2 and 4, so 12 is divisible by 8".',
      tier: 'confident',
      statements: [
        {
          text: 'Liam is right. Combining 2 and 4 always gives 8.',
          isMisconception: true,
        },
        {
          text: 'In fact 12 / 8 = 1.5, so 12 is not divisible by 8 even though 12 is divisible by 2 and by 4. The 8-test needs the last three digits divisible by 8, not just the last two.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fdt-mis-two-times-four-is-eight',
    },
    // Confident 6: missing-step worked example (test for 11)
    {
      id: 'fdt-q13',
      type: 'missing-step',
      stem: 'Fill in the missing step. Aisha checks whether 70499 is divisible by 11 using the alternating digit-sum test.',
      tier: 'confident',
      steps: [
        'Write out the digits left to right with alternating signs: +7, -0, +4, -9, +9.',
        'Compute the alternating sum: 7 - 0 + 4 - 9 + 9.',
        null,
        'Since 11 is divisible by 11, the alternating sum passes the 11-test, so 70499 is divisible by 11.',
      ],
      missingStepIndex: 2,
      correctStep: 'Work the arithmetic out: 7 - 0 + 4 - 9 + 9 = 11.',
      xpValue: 20,
    },
    // Confident 7: drag-order divisibility tests by lookup window
    {
      id: 'fdt-q14',
      type: 'drag-order',
      stem: 'Drag these divisibility tests into order, from the test that needs the FEWEST digits of the number to the test that needs the MOST.',
      tier: 'confident',
      items: [
        'Test for 2 (last digit even)',
        'Test for 4 (last two digits divisible by 4)',
        'Test for 8 (last three digits divisible by 8)',
        'Test for 9 (sum of all digits divisible by 9)',
      ],
      correctOrder: [0, 1, 2, 3],
      xpValue: 20,
      hint: 'Test for 2 needs only 1 digit (the last). Test for 4 needs 2. Test for 8 needs 3. Test for 9 looks at the full number (every digit).',
    },
    // Confident 8: pick all that apply via MCQ wording (MCQ, correctIndex 0)
    {
      id: 'fdt-q15',
      type: 'multiple-choice',
      stem: 'Which list correctly states ALL the numbers from {2, 3, 4, 5, 6, 9, 10} that 4716 is divisible by?',
      tier: 'confident',
      options: ['2, 3, 4, 6, 9', '2, 3, 6, 9', '2, 3, 4, 6', '2, 4, 6, 9'],
      correctIndex: 0,
      xpValue: 15,
      hint: 'Last digit 6 (passes 2, fails 5 and 10). Last two digits 16 (passes 4). Digit sum 18 (passes 3 and 9). Passes 6 (since passes 2 and 3). So {2, 3, 4, 6, 9}.',
    },
    // Challenge 1: Bond-style word problem (MCQ, correctIndex 1)
    {
      id: 'fdt-q16',
      type: 'multiple-choice',
      stem: 'A bakery in Sevenoaks bakes 1404 sourdough loaves and packs them into boxes of equal size. Using divisibility tests, which box size below is the LARGEST that divides 1404 exactly with no loaves left over?',
      tier: 'challenge',
      options: ['9', '12', '5', '8'],
      correctIndex: 1,
      xpValue: 25,
      hint: 'Test each. 1404 ends in 4 (passes 2, fails 5). Last two digits 04 (passes 4). Last three digits 404 / 8 = 50.5 (fails 8). Digit sum 1+4+0+4 = 9 (passes 3 and 9). For 12 = 4 x 3: passes both 4 and 3, so passes 12. So 12 is the largest valid divisor in the list.',
    },
    // Challenge 2: missing digit for 11-test (numeric)
    {
      id: 'fdt-q17',
      type: 'numeric-entry',
      stem: 'Find the digit ▢ (between 0 and 9) so that the five-digit number 5▢328 is divisible by 11. Use the alternating digit-sum test.',
      tier: 'challenge',
      correctAnswer: 3,
      xpValue: 25,
      hint: 'Alternating sum from the left: +5 - ▢ + 3 - 2 + 8 = 14 - ▢. For divisibility by 11, set 14 - ▢ = 11, giving ▢ = 3. Check: 53328 / 11 = 4848 (whole), so the answer is 3.',
    },
    // Challenge 3: largest 3-digit multiple of 9 (numeric)
    {
      id: 'fdt-q18',
      type: 'numeric-entry',
      stem: 'Using the digit-sum test for 9, what is the LARGEST three-digit number that is divisible by 9?',
      tier: 'challenge',
      correctAnswer: 999,
      xpValue: 25,
      hint: 'The largest three-digit number is 999. Digit sum: 9 + 9 + 9 = 27, and 27 / 9 = 3 (whole). So 999 is divisible by 9.',
    },
    // Challenge 4: combined-test word problem (MCQ, correctIndex 0)
    {
      id: 'fdt-q19',
      type: 'multiple-choice',
      stem: 'A school in Tunbridge Wells lines up 1432 pupils for a photograph. Using divisibility tests, which one of the following row sizes will fit ALL 1432 pupils into equal full rows with NONE left over?',
      tier: 'challenge',
      options: ['8', '5', '11', '9'],
      correctIndex: 0,
      xpValue: 25,
      hint: 'Test each. Last three digits 432; 432 / 8 = 54 (whole), so 8 divides 1432. Last digit 2 (fails 5). Alternating sum 1 - 4 + 3 - 2 = -2 (not divisible by 11). Digit sum 1 + 4 + 3 + 2 = 10 (fails 9).',
    },
    // Challenge 5: divisibility by 6 word problem (numeric)
    {
      id: 'fdt-q20',
      type: 'numeric-entry',
      stem: 'A coach company runs day trips from Dover with 132 passengers per coach. The coach manager claims the 132-seat coach can be split into equal groups of 6 with none left over. Using divisibility tests, what is 132 divided by 6, in passengers per group?',
      tier: 'challenge',
      correctAnswer: 22,
      unit: 'passengers per group',
      xpValue: 25,
      hint: 'First confirm 132 is divisible by 6. Last digit 2 (passes 2). Digit sum 1 + 3 + 2 = 6 (passes 3). So 132 passes the 6-test. Then 132 / 6 = 22 passengers per group.',
    },
    // Challenge 6: which number passes most tests (MCQ, correctIndex 2)
    {
      id: 'fdt-q21',
      type: 'multiple-choice',
      stem: 'Which one of these numbers is divisible by 2, 3, 4, 6 AND 9 all at once?',
      tier: 'challenge',
      options: ['132', '198', '936', '513'],
      correctIndex: 2,
      xpValue: 25,
      hint: 'Need a number passing all five tests. 936: last digit 6 (even, passes 2). Last two digits 36; 36 / 4 = 9 (passes 4). Digit sum 9 + 3 + 6 = 18, divisible by 3 and by 9 (passes 3 and 9). Passes 2 and 3, so passes 6. All five tests pass.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 1F (Foundation), commentary on a divisibility item where pupils applied the digit-sum rule to the divisor 4.
    {
      id: 'fdt-mis-digit-sum-for-4',
      description:
        'I think the digit-sum test works for every divisor, so I add the digits and check if that sum is divisible by 4 to test divisibility by 4.',
      triggerAnswer: 'digit-sum-for-4',
      correction:
        'Actually the digit-sum test only works for divisors 3 and 9. For 4 you check the last TWO digits.',
      reExplanation:
        'For 13, the digit sum is 1 + 3 = 4, but 13 / 4 = 3.25 so 13 is NOT divisible by 4. The reason the digit-sum trick works for 3 and 9 is special: 10 leaves remainder 1 when divided by 3 or 9. For 4, every power of 10 from 100 upward is already a multiple of 4, so only the last two digits matter.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 1F, commentary on a divisibility item where pupils assumed passing the 2-test and 4-test was enough to pass the 8-test.
    {
      id: 'fdt-mis-two-times-four-is-eight',
      description:
        'I think any number divisible by both 2 and 4 must be divisible by 8, because 2 x 4 = 8.',
      triggerAnswer: 'two-times-four-is-eight',
      correction:
        'In fact 12 is divisible by 2 and by 4 but not by 8 (12 / 8 = 1.5). The 8-test needs the LAST THREE DIGITS divisible by 8.',
      reExplanation:
        'Divisibility does not multiply like the divisors do. 12 = 4 x 3, with the factor of 4 contributing only one 2 from the prime factorisation (4 = 2 x 2, but the test for 4 only confirms two 2s in the number). For 8 you need three factors of 2 in the prime factorisation. 12 = 2 x 2 x 3, only two factors of 2, so 8 fails.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Divisibility Rules" page, "Common mistake" callout warning that the test for 6 is not the same as the test for 3.
    {
      id: 'fdt-mis-six-equals-three',
      description:
        'I think the test for 6 is the same as the test for 3, because 6 is in the 3-times table. So if the digit sum is divisible by 3, the number is divisible by 6.',
      triggerAnswer: 'six-equals-three',
      correction:
        'Actually the test for 6 needs BOTH the 2-test (even) AND the 3-test (digit sum divisible by 3). The 3-test alone is not enough.',
      reExplanation:
        'For 519: digit sum 5 + 1 + 9 = 15, divisible by 3. So 519 is divisible by 3, and 519 / 3 = 173. But last digit 9 is odd, so 519 fails the 2-test. So 519 is NOT divisible by 6 (519 / 6 = 86.5). For 6 you need both: even AND digit sum divisible by 3, like 132 (last digit 2, digit sum 6).',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2022, Paper 01 (Foundation), commentary on an item where pupils confused the test for 5 (last digit 0 or 5) with a digit-sum test.
    {
      id: 'fdt-mis-five-by-digit-sum',
      description:
        'I add the digits of a number and check if that sum is divisible by 5 to test for divisibility by 5. So I think 14 is divisible by 5 because 1 + 4 = 5.',
      triggerAnswer: 'five-by-digit-sum',
      correction:
        'In fact the test for 5 looks only at the LAST DIGIT: it must be 0 or 5. The digit sum is irrelevant for 5.',
      reExplanation:
        'For 14: digit sum 1 + 4 = 5, but 14 / 5 = 2.8, so 14 is not divisible by 5. The 5-test is one of the simplest: just check whether the units digit is 0 or 5. Examples that pass: 25, 130, 1405. Examples that fail: 14, 38, 99.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 4 "Number Operations", on pupils incorrectly extending the last-digit shortcut from 2, 5, 10 to other divisors like 3 or 7.
    {
      id: 'fdt-mis-last-digit-for-3',
      description:
        'I think the test for 3 only looks at the last digit, so I think a number is divisible by 3 if it ends in 3, 6 or 9.',
      triggerAnswer: 'last-digit-for-3',
      correction:
        'Actually the test for 3 needs the SUM of ALL the digits to be divisible by 3, not just the last digit on its own.',
      reExplanation:
        'For 23: last digit 3, but 23 / 3 = 7.67, not whole. The last-digit shortcut only works for 2, 5 and 10. For 3, add the digits: 2 + 3 = 5, which is not divisible by 3, so 23 fails. For 27: digit sum 2 + 7 = 9, divisible by 3, so 27 passes (27 / 3 = 9).',
    },
    // Source: NCETM Secondary Magazine, Issue 142, article on divisibility-test misconceptions citing pupil work that confused the 11-test (alternating sum) with a simple digit sum.
    {
      id: 'fdt-mis-11-by-digit-sum',
      description:
        'I think the test for 11 is the same as the test for 3 or 9: just add the digits and check if that sum is divisible by 11.',
      triggerAnswer: 'eleven-by-digit-sum',
      correction:
        'In fact the test for 11 uses the ALTERNATING digit sum (a - b + c - d ...), not the plain digit sum.',
      reExplanation:
        'A clear fail case: 38 has plain digit sum 3 + 8 = 11, but 38 / 11 = 3.45, so 38 is NOT divisible by 11. The alternating sum is 3 - 8 = -5, also not divisible by 11, agreeing with the true result. Plain digit sums sometimes match by coincidence, but the proper test for 11 is the alternating sum (a - b + c - d ...).',
    },
    // Authored, no external source: classroom-observed slip where pupils, asked to confirm divisibility by both 4 and 8, check only the units digit and assume "even is enough".
    {
      id: 'fdt-mis-even-means-divisible-by-4',
      description:
        'I think every even number is divisible by 4, because 2 divides into 4. So 14 must be divisible by 4 because 14 is even.',
      triggerAnswer: 'even-means-divisible-by-4',
      correction:
        'Actually being even (passing the 2-test) only confirms ONE factor of 2. For 4 you need two factors of 2, which the last-two-digits test confirms.',
      reExplanation:
        'For 14: last two digits 14, and 14 / 4 = 3.5, so 14 is NOT divisible by 4 even though it is even. Even numbers split into two groups: those divisible by 4 (12, 16, 20, 24, ...) and those that are only divisible by 2 (14, 18, 22, 26, ...). The 4-test using the last two digits is what distinguishes them.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const factorsMultiplesDivisibilityTestsZoneNodes = [factorsMultiplesDivisibilityTests]
