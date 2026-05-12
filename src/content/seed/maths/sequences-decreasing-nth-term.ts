import type { SkillNode } from '@/types/content'

export const sequencesDecreasingNthTerm: SkillNode = {
  id: 'maths-sequences-decreasing-nth-term',
  title: 'nth Term of a Decreasing Arithmetic Sequence',
  description:
    'Find the nth term rule of an arithmetic sequence whose terms decrease. Identify the negative common difference, write the rule as dn + c with d < 0, and adjust c so the rule matches term 1. For example, 20, 17, 14, 11 has d = -3 and the rule is -3n + 23. Verify at n = 1 and at one further term. Assumes the positive-difference nth term is mastered.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-sequences',
  zoneName: 'Sequences',
  tier: 'challenge',
  prerequisites: ['maths-sequences-nth-term'],
  curriculum: {
    ks3Objective:
      'Recognise arithmetic sequences and find the nth term, including those with a negative common difference.',
    awardingBodies: {
      aqa: 'A24 Find the nth term of arithmetic sequences with negative common differences (GCSE Mathematics 8300)',
      edexcel: 'A24 Deduce expressions for the nth term of linear sequences including decreasing sequences (GCSE Mathematics 1MA1)',
      ocr: '8.02b Find the nth term of decreasing arithmetic sequences (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'sdnt-scene-formula-anatomy',
      title: 'Anatomy of dn + c When d is Negative',
      type: 'labelled-diagram',
      instructions:
        'Click each part of the formula to see what it means when the sequence decreases. The rule has shape dn + c. The letter d is the common difference. When the sequence falls, d is negative, so the rule starts with a minus. The letter c is a positive constant that pulls term 1 back up to its actual value. For 20, 17, 14, 11 the rule is -3n + 23.',
      data: {
        viewBox: '0 0 100 100',
        hotspots: [
          {
            id: 'sdnt-h-d',
            x: 20,
            y: 30,
            label: 'd = -3 (common difference)',
            description: 'Each term sits 3 below the one before, so d is -3.',
          },
          {
            id: 'sdnt-h-n',
            x: 35,
            y: 30,
            label: 'n (position)',
            description: 'The term number: 1 for term 1, 2 for term 2, and so on.',
          },
          {
            id: 'sdnt-h-c',
            x: 60,
            y: 30,
            label: 'c = 23 (constant)',
            description: 'The value that makes the rule match term 1 of the sequence.',
          },
          {
            id: 'sdnt-h-rule',
            x: 40,
            y: 55,
            label: 'rule: -3n + 23',
            description: 'Put d, n and c together to get the nth term rule.',
          },
          {
            id: 'sdnt-h-check-n1',
            x: 25,
            y: 80,
            label: 'check at n = 1: -3 + 23 = 20',
            description: 'Matches term 1, so the rule is right so far.',
          },
          {
            id: 'sdnt-h-check-n4',
            x: 70,
            y: 80,
            label: 'check at n = 4: -12 + 23 = 11',
            description: 'Matches term 4, so the rule is confirmed.',
          },
        ],
      },
    },
    {
      id: 'sdnt-scene-negative-slope',
      title: 'The Slope of a Falling Sequence',
      type: 'diagram',
      instructions:
        'Look at how the terms of 20, 17, 14, 11 step down by 3 each time. Read across to see that each gap is -3, never +3. The rule must therefore start with -3n, not +3n. Reading down the same sequence, 50, 45, 40, 35 steps down by 5, so its rule starts with -5n.',
      data: {
        sequences: [
          {
            label: 'Sequence A: 20, 17, 14, 11, 8, ...',
            terms: [20, 17, 14, 11, 8],
            gaps: [-3, -3, -3, -3],
            commonDifference: -3,
            coefficientOfN: -3,
            ruleStart: '-3n',
          },
          {
            label: 'Sequence B: 50, 45, 40, 35, 30, ...',
            terms: [50, 45, 40, 35, 30],
            gaps: [-5, -5, -5, -5],
            commonDifference: -5,
            coefficientOfN: -5,
            ruleStart: '-5n',
          },
          {
            label: 'Sequence C: 18, 14, 10, 6, 2, ...',
            terms: [18, 14, 10, 6, 2],
            gaps: [-4, -4, -4, -4],
            commonDifference: -4,
            coefficientOfN: -4,
            ruleStart: '-4n',
          },
        ],
        notes: [
          'A falling sequence has a negative common difference d, so the rule starts with dn where d is negative.',
          'The constant c is found in the same way as before: c = term 1 minus d.',
          'A rule of the form -3n + 23 is correct; a rule of the form 3n + 23 is the rising version of the same numbers.',
        ],
      },
    },
    {
      id: 'sdnt-scene-sign-rules',
      title: 'Sign Rules: Where the Minus Sits',
      type: 'diagram',
      instructions:
        'Read each row to see the same idea three ways. If the sequence falls, the coefficient of n is negative and the constant c is positive. To find c, work out term 1 minus d. For 20, 17, 14, 11 with d = -3, c = 20 - (-3) = 23. For 50, 45, 40 with d = -5, c = 50 - (-5) = 55. The minus signs inside the subtraction become a plus, so c grows above term 1.',
      data: {
        rows: [
          {
            sequence: [20, 17, 14, 11],
            commonDifference: -3,
            term1: 20,
            cWorking: 'c = term 1 - d = 20 - (-3) = 23',
            finalRule: '-3n + 23',
            verifyAtN3: '-3 x 3 + 23 = -9 + 23 = 14',
          },
          {
            sequence: [50, 45, 40, 35],
            commonDifference: -5,
            term1: 50,
            cWorking: 'c = term 1 - d = 50 - (-5) = 55',
            finalRule: '-5n + 55',
            verifyAtN3: '-5 x 3 + 55 = -15 + 55 = 40',
          },
          {
            sequence: [30, 26, 22, 18],
            commonDifference: -4,
            term1: 30,
            cWorking: 'c = term 1 - d = 30 - (-4) = 34',
            finalRule: '-4n + 34',
            verifyAtN3: '-4 x 3 + 34 = -12 + 34 = 22',
          },
        ],
        signSummary: [
          'd negative, c positive: typical falling sequence (e.g. -3n + 23).',
          'd negative, c also negative: only when term 1 is itself below zero (rare at Year 7).',
          'A rule like -3n - 5 would mean every term is below zero, which never matches a sequence starting at 20.',
        ],
        callout:
          'When the sequence falls, c is term 1 minus a negative number, which always makes c larger than term 1.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'sdnt-worked-1',
      title: 'Find the nth term rule for 20, 17, 14, 11, ...',
      steps: [
        {
          explanation:
            'Find the common difference between consecutive terms.',
          maths: '17 - 20 = -3, 14 - 17 = -3, 11 - 14 = -3',
        },
        {
          explanation:
            'The common difference is -3, so the rule starts as -3n.',
          maths: 'rule so far: -3n',
        },
        {
          explanation:
            'Test at n = 1. The rule -3n gives -3, but term 1 is 20.',
          maths: '-3 x 1 = -3, but term 1 = 20',
        },
        {
          explanation:
            'Find c by subtracting d from term 1. Subtracting a negative number adds.',
          maths: 'c = 20 - (-3) = 23',
        },
        {
          explanation:
            'Write the full rule with the adjustment.',
          maths: 'nth term = -3n + 23',
        },
        {
          explanation:
            'Verify at n = 4 to be sure: -3 x 4 + 23 = -12 + 23 = 11, which matches term 4.',
          maths: '-3 x 4 + 23 = 11 (matches)',
        },
      ],
    },
    {
      id: 'sdnt-worked-2',
      title: 'Find the nth term rule for 50, 45, 40, ...',
      steps: [
        {
          explanation:
            'Find the common difference. Each pair of consecutive terms drops by 5.',
          maths: '45 - 50 = -5, 40 - 45 = -5',
        },
        {
          explanation:
            'The common difference is -5, so the rule starts as -5n.',
          maths: 'rule so far: -5n',
        },
        {
          explanation:
            'Test at n = 1. The rule -5n gives -5, but term 1 is 50.',
        },
        {
          explanation:
            'Find c using c = term 1 - d. Take care with the double minus.',
          maths: 'c = 50 - (-5) = 55',
        },
        {
          explanation:
            'Write the full rule.',
          maths: 'nth term = -5n + 55',
        },
        {
          explanation:
            'Verify at n = 3: -5 x 3 + 55 = -15 + 55 = 40, which matches term 3.',
          maths: '-5 x 3 + 55 = 40 (matches)',
        },
      ],
    },
  ],
  questions: [
    // Core 1
    {
      id: 'sdnt-q1',
      type: 'numeric-entry',
      stem: 'What is the common difference of the sequence 20, 17, 14, 11, 8, ...?',
      tier: 'core',
      correctAnswer: -3,
      xpValue: 10,
      hint: 'Take any term and subtract the one before it. The sequence falls, so the result is negative.',
    },
    // Core 2
    {
      id: 'sdnt-q2',
      type: 'numeric-entry',
      stem: 'A sequence has the rule -4n + 30. What is the value of the 1st term?',
      tier: 'core',
      correctAnswer: 26,
      xpValue: 10,
      hint: 'Substitute n = 1. Work out -4 x 1 first, then add 30.',
    },
    // Core 3
    {
      id: 'sdnt-q3',
      type: 'multiple-choice',
      stem: 'Which sequence is decreasing with common difference -5?',
      tier: 'core',
      options: [
        '50, 45, 40, 35, 30, ...',
        '5, 10, 15, 20, 25, ...',
        '50, 55, 60, 65, 70, ...',
        '45, 40, 36, 33, 31, ...',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'The gap between every pair of consecutive terms must be the same and equal to -5. Check at least two gaps.',
    },
    // Core 4
    {
      id: 'sdnt-q4',
      type: 'numeric-entry',
      stem: 'A sequence has the rule -3n + 23. What is the value of the 4th term?',
      tier: 'core',
      correctAnswer: 11,
      xpValue: 10,
      hint: 'Substitute n = 4. Work out -3 x 4 first, then add 23.',
    },
    // Core 5
    {
      id: 'sdnt-q5',
      type: 'multiple-choice',
      stem: 'A sequence falls by 4 each step. What does the rule start with?',
      tier: 'core',
      options: ['4n', 'n + 4', 'n - 4', '-4n'],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'sdnt-mis-sign-of-d',
      hint: 'A falling sequence has a negative common difference. The coefficient of n carries that minus sign.',
    },
    // Core 6
    {
      id: 'sdnt-q6',
      type: 'numeric-entry',
      stem: 'A sequence has the rule -2n + 15. What is the 5th term?',
      tier: 'core',
      correctAnswer: 5,
      xpValue: 10,
      hint: 'Substitute n = 5: -2 x 5 = -10, then add 15.',
    },
    // Core 7
    {
      id: 'sdnt-q7',
      type: 'multiple-choice',
      stem: 'The sequence 18, 14, 10, 6, ... has common difference -4. What does its nth term rule start with?',
      tier: 'core',
      options: ['18n', '4n', '-4n', '-18n'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'The coefficient of n is the common difference. The rule starts with that value times n.',
    },
    // Confident 1
    {
      id: 'sdnt-q8',
      type: 'multiple-choice',
      stem: 'Find the nth term rule for the sequence 20, 17, 14, 11, ...',
      tier: 'confident',
      options: ['3n + 20', '-3n + 23', '-3n + 20', '-3n - 23'],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'sdnt-mis-c-equals-term-one',
      hint: 'Common difference = -3, so start with -3n. At n = 1, -3n gives -3. Term 1 is 20, so c = 20 - (-3).',
    },
    // Confident 2
    {
      id: 'sdnt-q9',
      type: 'numeric-entry',
      stem: 'For the sequence 50, 45, 40, 35, ..., the nth term rule has the form -5n + c. What is the value of c?',
      tier: 'confident',
      correctAnswer: 55,
      xpValue: 15,
      misconceptionId: 'sdnt-mis-c-equals-term-one',
      hint: 'At n = 1, -5n gives -5. Term 1 is 50, so c is the value that makes -5 + c = 50.',
    },
    // Confident 3
    {
      id: 'sdnt-q10',
      type: 'multiple-choice',
      stem: 'Find the nth term rule for 30, 26, 22, 18, ...',
      tier: 'confident',
      options: ['-4n + 34', '4n + 30', '-4n + 30', '-4n + 26'],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'sdnt-mis-apply-ascending',
      hint: 'Common difference = -4, so the rule starts -4n. At n = 1, -4n gives -4. Term 1 is 30, so c = 30 - (-4) = 34.',
    },
    // Confident 4
    {
      id: 'sdnt-q11',
      type: 'missing-step',
      stem: 'Fill in the missing step. Aisha is finding the nth term rule for 40, 36, 32, 28, ...',
      tier: 'confident',
      steps: [
        'Common difference = 36 - 40 = -4, so the rule starts as -4n.',
        'Test at n = 1: -4 x 1 = -4. Term 1 is 40, so the rule needs an adjustment.',
        null,
        'So the nth term rule is -4n + 44. Verify at n = 3: -4 x 3 + 44 = 32, which matches term 3.',
      ],
      missingStepIndex: 2,
      correctStep:
        'c = term 1 - d = 40 - (-4) = 44. Add this constant to the rule.',
      xpValue: 20,
      misconceptionId: 'sdnt-mis-subtract-d-wrong',
    },
    // Confident 5
    {
      id: 'sdnt-q12',
      type: 'spot-misconception',
      stem: 'Liam looks at 20, 17, 14, 11, ... and writes the rule 3n + 23. He says "the gap is 3, so the rule starts with 3n."',
      tier: 'confident',
      statements: [
        {
          text: 'Liam is right. The rule 3n + 23 works for this sequence.',
          isMisconception: true,
        },
        {
          text: 'Actually 3n + 23 rises rather than falls. At n = 1 it gives 26, not 20, and at n = 2 it gives 29, not 17. The sequence drops by 3 each step, so the coefficient of n is -3 and the rule is -3n + 23.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'sdnt-mis-sign-of-d',
    },
    // Confident 6
    {
      id: 'sdnt-q13',
      type: 'multiple-choice',
      stem: 'For the sequence 60, 52, 44, 36, ..., the nth term rule is -8n + c. What is c?',
      tier: 'confident',
      options: ['52', '60', '68', '8'],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'sdnt-mis-c-equals-term-one',
      hint: 'At n = 1, -8n gives -8. Term 1 is 60, so c must satisfy -8 + c = 60.',
    },
    // Confident 7
    {
      id: 'sdnt-q14',
      type: 'drag-order',
      stem: 'Drag these steps for finding the nth term rule of a decreasing arithmetic sequence into the correct order.',
      tier: 'confident',
      items: [
        'Verify the rule at n = 1 and at one further term.',
        'Find the common difference between consecutive terms. It will be negative.',
        'Compute c = term 1 - d. Subtracting a negative number adds.',
        'Write the rule as dn, where d is the negative common difference.',
      ],
      correctOrder: [1, 3, 2, 0],
      xpValue: 20,
      misconceptionId: 'sdnt-mis-skip-substitution-check',
    },
    // Confident 8
    {
      id: 'sdnt-q15',
      type: 'multiple-choice',
      stem: 'A pupil writes the rule -5n + 50 for the sequence 50, 45, 40, 35, ... Why does this rule fail at n = 1?',
      tier: 'confident',
      options: [
        'It does not fail; -5n + 50 is correct.',
        'At n = 1, -5n + 50 = 45, but term 1 is 50. The pupil used term 1 as c instead of c = term 1 - d = 55.',
        'The rule should be 5n + 50 because term 1 is 50.',
        'The rule should be -5n + 45 because that is term 2.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'sdnt-mis-c-equals-term-one',
    },
    // Challenge 1: Bond 11+ shape (multi-sentence with unstated step)
    {
      id: 'sdnt-q16',
      type: 'numeric-entry',
      stem: 'A Sevenoaks weather station logs the daytime high. On Monday it reads 22 degrees Celsius, then drops by the same amount each day to 19 on Tuesday, 16 on Wednesday and 13 on Thursday. If the pattern holds, what reading is logged on the following Tuesday?',
      tier: 'challenge',
      correctAnswer: 1,
      xpValue: 25,
      hint: 'Common difference = -3. Rule: -3n + 25. The following Tuesday is day 8 of the log, so substitute n = 8.',
    },
    // Challenge 2: Bond 11+ shape
    {
      id: 'sdnt-q17',
      type: 'multiple-choice',
      stem: 'A Manchester firm tracks the share price of a falling stock. On day 1 it closes at 80 pence, on day 2 at 76, on day 3 at 72 and on day 4 at 68. The same daily fall continues. Which is the first day the close drops below 50 pence?',
      tier: 'challenge',
      options: ['Day 8', 'Day 9', 'Day 10', 'Day 11'],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'sdnt-mis-last-positive-as-zero',
      hint: 'Rule: -4n + 84. Solve -4n + 84 < 50 for the smallest whole n.',
    },
    // Challenge 3: Bond 11+ shape
    {
      id: 'sdnt-q18',
      type: 'numeric-entry',
      stem: 'A Lake District marathon runner has 42 km left at the first checkpoint, 36 km at the second, 30 km at the third and 24 km at the fourth. The gap between checkpoints is constant. How many kilometres remain at the seventh checkpoint?',
      tier: 'challenge',
      correctAnswer: 6,
      xpValue: 25,
      hint: 'Common difference = -6. Rule: -6n + 48. Substitute n = 7.',
    },
    // Challenge 4: Bond 11+ shape
    {
      id: 'sdnt-q19',
      type: 'multiple-choice',
      stem: 'A Tunbridge Wells library has 90 unsold tickets for a concert on the day they go on sale. The tally drops by the same number each hour: 83 after one hour, 76 after two hours, 69 after three hours. After how many full hours since sales opened does the tally first reach zero or go below?',
      tier: 'challenge',
      options: ['11 hours', '12 hours', '13 hours', '14 hours'],
      correctIndex: 2,
      xpValue: 25,
      hint: 'Treat hour 1 (sales open) as n = 1, with 90 tickets. The rule is -7n + 97. Solve -7n + 97 less than or equal to 0 for the smallest whole n, then subtract 1 to express it as hours since opening.',
    },
    // Challenge 5: free-text reasoning
    {
      id: 'sdnt-q20',
      type: 'free-text',
      stem: 'A pupil claims that the sequence 20, 17, 14, 11, ... has nth term rule 3n + 17 because "term 2 is 3 + 17 = 20 and term 1 is 17." Explain why this rule is wrong and write the correct rule.',
      tier: 'challenge',
      sampleAnswer:
        'The pupil has lined up term 1 with n = 0, which is not how the nth term works (n starts at 1). The sequence also falls, so the coefficient of n must be negative. Common difference d = -3. At n = 1, -3n gives -3. Term 1 is 20, so c = 20 - (-3) = 23. The correct rule is -3n + 23. Check: at n = 1, -3 + 23 = 20; at n = 4, -12 + 23 = 11.',
      keywords: ['-3n + 23', 'negative', 'term 1', 'n = 1', 'falls'],
      xpValue: 25,
      misconceptionId: 'sdnt-mis-apply-ascending',
    },
    // Challenge 6: missing-step on a multi-step word problem
    {
      id: 'sdnt-q21',
      type: 'missing-step',
      stem: 'Fill in the missing step. A car park starts the morning with 48 cars. Every quarter of an hour, 6 cars leave and none arrive. The park manager asks how many cars are left after one and a half hours.',
      tier: 'challenge',
      steps: [
        'Let n = 1 be the start (0 minutes), with 48 cars. Each step of n is a quarter of an hour. The cars drop by 6 each step, so d = -6.',
        'At n = 1, -6n gives -6. Term 1 is 48, so c = 48 - (-6) = 54. The rule is -6n + 54.',
        null,
        'Substitute n = 7 into -6n + 54: -42 + 54 = 12. There are 12 cars left after one and a half hours.',
      ],
      missingStepIndex: 2,
      correctStep:
        'One and a half hours is 6 quarter-hours after the start, so it is the 7th log point. Use n = 7.',
      xpValue: 30,
      misconceptionId: 'sdnt-mis-check-at-n1',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a decreasing-sequence nth-term question where pupils wrote a positive coefficient of n despite the sequence falling.
    {
      id: 'sdnt-mis-sign-of-d',
      description:
        'I see the gaps as size 3 and write the rule as 3n + something, ignoring that the sequence falls.',
      triggerAnswer: 'positive-coefficient',
      correction:
        'Actually a falling sequence has a negative common difference, so the coefficient of n must carry the minus sign.',
      reExplanation:
        'For 20, 17, 14, 11 the gaps are -3, not 3, so the rule starts -3n. At n = 1, -3n gives -3 and term 1 is 20, so c = 23. The rule is -3n + 23. The rule 3n + something would generate a rising sequence instead, which never matches.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on an nth-term question where pupils set the constant equal to term 1 rather than working out term 1 minus d.
    {
      id: 'sdnt-mis-c-equals-term-one',
      description:
        'I take the value of term 1 and use it as c in the rule dn + c, so for 20, 17, 14, 11 I write -3n + 20.',
      triggerAnswer: 'c-as-term-one',
      correction:
        'In fact c is term 1 minus d, not term 1 itself. When d is negative, subtracting d adds, so c sits above term 1.',
      reExplanation:
        'For 20, 17, 14, 11 with d = -3, c = 20 - (-3) = 23, not 20. Test the slip: -3 x 1 + 20 = 17, but term 1 is 20, so the rule -3n + 20 fails the very first check. The correct rule -3n + 23 gives 20 at n = 1 and 17 at n = 2.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 01 (Foundation, Non-calculator), commentary on an nth-term question where pupils applied the ascending procedure unchanged to a decreasing sequence.
    {
      id: 'sdnt-mis-apply-ascending',
      description:
        'I apply the same procedure as for a rising sequence, ignoring that this one falls, so I write 3n + 17 instead of -3n + 23.',
      triggerAnswer: 'ascending-formula',
      correction:
        'Actually the procedure is the same, but the common difference d carries the sign of the slope. For a falling sequence d is negative; substitute that negative d into c = term 1 - d.',
      reExplanation:
        'For 20, 17, 14, 11 a learner who keeps d positive writes 3n + b. At n = 1, 3n gives 3, so b = 17, giving 3n + 17. But at n = 2, 3 x 2 + 17 = 23, not 17. The slip uses term 1 as if n = 0. Using d = -3 gives -3n + 23, which checks out at n = 1 and n = 2.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 6 Algebra, "Finding the nth Term" page, Common Mistake callout warning that a sequence reaching zero does not mean the term number equals the term value.
    {
      id: 'sdnt-mis-last-positive-as-zero',
      description:
        'I treat the last positive term of a decreasing sequence as zero, so I solve dn + c = 0 instead of comparing the rule to the target value.',
      triggerAnswer: 'zero-instead-of-target',
      correction:
        'Actually zero is just another value in the sequence. To find when terms drop below a target, set dn + c less than the target and solve for the smallest n.',
      reExplanation:
        'For 80, 76, 72, 68, ... with rule -4n + 84, the question "when does the close drop below 50?" needs -4n + 84 less than 50, giving 4n greater than 34 and n greater than 8.5, so n = 9. Setting -4n + 84 = 0 instead solves for when the close hits zero, not when it drops below 50, and gives n = 21, the wrong day.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 6 "Generalised Arithmetic" by Booth, on pupils skipping the n = 1 check when working with negative coefficients.
    {
      id: 'sdnt-mis-check-at-n1',
      description:
        'I write down -3n + 23 by feel and move on without checking at n = 1, so a slip in c slips through.',
      triggerAnswer: 'no-check-at-n1',
      correction:
        'In fact substituting n = 1 is the cheapest check there is. Any wrong c shows up immediately.',
      reExplanation:
        'For 20, 17, 14, 11 with d = -3, the rule -3n + 23 gives 20 at n = 1, which matches term 1. A slip like -3n + 20 gives 17 at n = 1, missing term 1 by 3. Verifying at n = 1 and one further term catches both the wrong-sign and wrong-c slips together.',
    },
    // Source: NCETM "Misconceptions with Year 7 Algebra" reference document, on pupils mishandling the double-negative when computing c = term 1 - d for a decreasing sequence.
    {
      id: 'sdnt-mis-subtract-d-wrong',
      description:
        'I compute c = term 1 - d but forget that subtracting a negative adds, so for 20 - (-3) I write 17 instead of 23.',
      triggerAnswer: 'double-negative-slip',
      correction:
        'Actually 20 - (-3) becomes 20 + 3 = 23. Two negatives in a row turn into a plus.',
      reExplanation:
        'For 20, 17, 14, 11 with d = -3, the c value is 20 - (-3) = 20 + 3 = 23, not 17. Treating the minus signs as a single minus gives c = 17, leading to the wrong rule -3n + 17, which at n = 1 gives 14, missing term 1 by 6. The correct rule -3n + 23 matches every term.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on an nth-term question where pupils confirmed the rule at one term and stopped, missing a sign slip elsewhere in the sequence.
    {
      id: 'sdnt-mis-skip-substitution-check',
      description:
        'I check the rule at one term only and stop. If that one term happens to match, I miss any sign slip in d or c.',
      triggerAnswer: 'single-check',
      correction:
        'Actually verifying at one term is not enough for a decreasing rule. Always check at n = 1 and at one further term.',
      reExplanation:
        'For 20, 17, 14, 11 a pupil might write 3n + 17 and check at n = 1: 3 + 17 = 20, matching term 1. But at n = 2 the rule gives 23, while term 2 is 17. The correct rule -3n + 23 passes both checks: 20 at n = 1 and 17 at n = 2. Two checks catch wrong-sign slips that a single check misses.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const sequencesDecreasingNthTermZoneNodes = [sequencesDecreasingNthTerm]
