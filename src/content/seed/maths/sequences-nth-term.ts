import type { SkillNode } from '@/types/content'

export const sequencesNthTerm: SkillNode = {
  id: 'maths-sequences-nth-term',
  title: 'Finding the nth Term of an Arithmetic Sequence',
  description:
    'Build the position-to-term rule of a simple arithmetic sequence with positive coefficients. Find the common difference, write down the multiplier of n, and adjust by adding or subtracting a constant so the rule matches the first term. Verify by checking at n = 1 and at one further term.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-sequences',
  zoneName: 'Sequences',
  tier: 'confident',
  prerequisites: ['maths-sequences-rules', 'maths-bidmas-order-of-operations'],
  curriculum: {
    ks3Objective:
      'Recognise arithmetic sequences and find the nth term.',
    awardingBodies: {
      aqa: 'A24 Recognise arithmetic sequences and find the nth term (GCSE Mathematics 8300)',
      edexcel: 'A24 Recognise and use sequences of triangular, square and cube numbers, simple arithmetic progressions, Fibonacci type sequences, quadratic sequences and simple geometric progressions; deduce expressions to calculate the nth term of linear sequences (GCSE Mathematics 1MA1)',
      ocr: '8.02b Recognise arithmetic sequences and find the nth term (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'seqn-scene-difference-strip',
      title: 'Find the Common Difference',
      type: 'diagram',
      instructions:
        'Look at how each strip lays out a sequence with the gaps between terms written above. The sequence 4, 7, 10, 13 has a gap of 3 each time, so the multiplier of n is 3. The sequence 5, 9, 13, 17 has a gap of 4, so the multiplier of n is 4. The common difference always becomes the coefficient of n in the rule an + b.',
      data: {
        strips: [
          {
            sequenceLabel: 'Sequence A: 4, 7, 10, 13, ...',
            terms: [4, 7, 10, 13],
            gaps: [3, 3, 3],
            commonDifference: 3,
            coefficientOfN: 3,
          },
          {
            sequenceLabel: 'Sequence B: 5, 9, 13, 17, ...',
            terms: [5, 9, 13, 17],
            gaps: [4, 4, 4],
            commonDifference: 4,
            coefficientOfN: 4,
          },
          {
            sequenceLabel: 'Sequence C: 11, 16, 21, 26, ...',
            terms: [11, 16, 21, 26],
            gaps: [5, 5, 5],
            commonDifference: 5,
            coefficientOfN: 5,
          },
        ],
        notes: [
          'The common difference is what each new term adds on top of the one before it.',
          'In the rule an + b, the value of a is the common difference.',
          'Once you have a, you still need to find b by checking what term 1 should be.',
        ],
      },
    },
    {
      id: 'seqn-scene-adjust-constant',
      title: 'Adjust the Constant',
      type: 'diagram',
      instructions:
        'Read each row across to see how 3n alone gives the wrong term 1, and adding or subtracting a constant b puts it right. For 4, 7, 10, 13 the rule 3n at n = 1 gives 3, but term 1 is 4, so b = +1 and the rule is 3n + 1. For 5, 8, 11, 14 the rule 3n at n = 1 gives 3, but term 1 is 5, so b = +2 and the rule is 3n + 2.',
      data: {
        rows: [
          {
            sequence: [4, 7, 10, 13],
            commonDifference: 3,
            ruleStart: '3n',
            term1FromRuleStart: 3,
            actualTerm1: 4,
            adjustment: '+1',
            finalRule: '3n + 1',
            checkAtN2: '3 x 2 + 1 = 7',
          },
          {
            sequence: [5, 8, 11, 14],
            commonDifference: 3,
            ruleStart: '3n',
            term1FromRuleStart: 3,
            actualTerm1: 5,
            adjustment: '+2',
            finalRule: '3n + 2',
            checkAtN2: '3 x 2 + 2 = 8',
          },
          {
            sequence: [3, 8, 13, 18],
            commonDifference: 5,
            ruleStart: '5n',
            term1FromRuleStart: 5,
            actualTerm1: 3,
            adjustment: '-2',
            finalRule: '5n - 2',
            checkAtN2: '5 x 2 - 2 = 8',
          },
        ],
        callout:
          'Test the rule at n = 1 and at n = 2 to be sure. If both terms match, the rule is correct.',
      },
    },
    {
      id: 'seqn-scene-rule-builder',
      title: 'Build the Rule Step by Step',
      type: 'simulation',
      instructions:
        'See how the same three-step method finds the nth term of any simple arithmetic sequence. Step 1: find the common difference. Step 2: write down an, where a is that difference. Step 3: adjust by the constant b so the rule matches term 1. The slider chooses which sequence to step through.',
      data: {
        slider: { min: 1, max: 4, step: 1, label: 'sequence number' },
        sequences: [
          {
            id: 1,
            terms: [7, 11, 15, 19],
            commonDifference: 4,
            term1Check: { rule: '4 x 1', value: 4 },
            adjustmentNeeded: '+3',
            finalRule: '4n + 3',
            verify: { atN: 3, computation: '4 x 3 + 3', value: 15 },
          },
          {
            id: 2,
            terms: [2, 7, 12, 17],
            commonDifference: 5,
            term1Check: { rule: '5 x 1', value: 5 },
            adjustmentNeeded: '-3',
            finalRule: '5n - 3',
            verify: { atN: 4, computation: '5 x 4 - 3', value: 17 },
          },
          {
            id: 3,
            terms: [9, 13, 17, 21],
            commonDifference: 4,
            term1Check: { rule: '4 x 1', value: 4 },
            adjustmentNeeded: '+5',
            finalRule: '4n + 5',
            verify: { atN: 2, computation: '4 x 2 + 5', value: 13 },
          },
          {
            id: 4,
            terms: [6, 9, 12, 15],
            commonDifference: 3,
            term1Check: { rule: '3 x 1', value: 3 },
            adjustmentNeeded: '+3',
            finalRule: '3n + 3',
            verify: { atN: 4, computation: '3 x 4 + 3', value: 15 },
          },
        ],
        notes:
          'Always finish by checking at n = 1 and one other term. If both match, you have the right rule.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'seqn-worked-1',
      title: 'Find the nth term rule for 5, 8, 11, 14, ...',
      steps: [
        {
          explanation:
            'Find the common difference between consecutive terms.',
          maths: '8 - 5 = 3, 11 - 8 = 3, 14 - 11 = 3',
        },
        {
          explanation:
            'The common difference is 3, so the rule starts as 3n.',
          maths: 'rule so far: 3n',
        },
        {
          explanation:
            'Test at n = 1. The rule 3n gives 3, but term 1 is 5.',
          maths: '3 x 1 = 3, but term 1 = 5',
        },
        {
          explanation:
            'Add the difference between the actual term 1 and the rule value.',
          maths: 'adjustment: 5 - 3 = +2',
        },
        {
          explanation:
            'Write the full rule with the adjustment.',
          maths: 'nth term = 3n + 2',
        },
        {
          explanation:
            'Verify at n = 2 to be sure: 3 x 2 + 2 = 8, which matches term 2.',
          maths: '3 x 2 + 2 = 8 (matches)',
        },
      ],
    },
    {
      id: 'seqn-worked-2',
      title: 'Find the nth term rule for 3, 8, 13, 18, ...',
      steps: [
        {
          explanation:
            'Find the common difference.',
          maths: '8 - 3 = 5, 13 - 8 = 5, 18 - 13 = 5',
        },
        {
          explanation:
            'The common difference is 5, so the rule starts as 5n.',
          maths: 'rule so far: 5n',
        },
        {
          explanation:
            'Test at n = 1. The rule 5n gives 5, but term 1 is 3.',
          maths: '5 x 1 = 5, but term 1 = 3',
        },
        {
          explanation:
            'The actual term 1 is smaller than the rule value, so the adjustment is negative.',
          maths: 'adjustment: 3 - 5 = -2',
        },
        {
          explanation:
            'Write the full rule.',
          maths: 'nth term = 5n - 2',
        },
        {
          explanation:
            'Verify at n = 4: 5 x 4 - 2 = 18, which matches term 4.',
          maths: '5 x 4 - 2 = 18 (matches)',
        },
      ],
    },
  ],
  questions: [
    // Core 1
    {
      id: 'seqn-q1',
      type: 'numeric-entry',
      stem: 'A sequence has a common difference of 3. What is the coefficient of n in the rule an + b?',
      tier: 'core',
      correctAnswer: 3,
      xpValue: 10,
      hint: 'The coefficient of n in an arithmetic sequence rule is the common difference.',
    },
    // Core 2
    {
      id: 'seqn-q2',
      type: 'numeric-entry',
      stem: 'What is the common difference of the sequence 4, 9, 14, 19, 24, ...?',
      tier: 'core',
      correctAnswer: 5,
      xpValue: 10,
      hint: 'Subtract any term from the next one to find the common difference.',
    },
    // Core 3
    {
      id: 'seqn-q3',
      type: 'multiple-choice',
      stem: 'A sequence has the rule 4n + 1. What is the first term?',
      tier: 'core',
      options: ['1', '4', '5', '9'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Substitute n = 1 into the rule, do the multiplication first, then the addition.',
    },
    // Core 4
    {
      id: 'seqn-q4',
      type: 'numeric-entry',
      stem: 'A sequence has the rule 3n + 7. What is the value of the 5th term?',
      tier: 'core',
      correctAnswer: 22,
      xpValue: 10,
      hint: 'Substitute n = 5 into the rule. Multiply first, then add.',
    },
    // Core 5
    {
      id: 'seqn-q5',
      type: 'multiple-choice',
      stem: 'Which sequence has 4 as its common difference?',
      tier: 'core',
      options: [
        '1, 5, 9, 13, 17, ...',
        '4, 7, 10, 13, 16, ...',
        '2, 6, 10, 16, 20, ...',
        '4, 8, 16, 32, 64, ...',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'The common difference is the gap between every pair of consecutive terms. Check more than one gap.',
    },
    // Core 6
    {
      id: 'seqn-q6',
      type: 'numeric-entry',
      stem: 'A sequence has the rule 5n - 2. What is the 3rd term?',
      tier: 'core',
      correctAnswer: 13,
      xpValue: 10,
      hint: 'Substitute n = 3 into the rule. Multiply first, then subtract.',
    },
    // Core 7
    {
      id: 'seqn-q7',
      type: 'multiple-choice',
      stem: 'A sequence starts 2, 5, 8, 11, ... Which option is the rule that gives this sequence?',
      tier: 'core',
      options: ['n + 3', '2n + 1', '3n - 1', '3n + 2'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'seqn-mis-just-difference',
      hint: 'The common difference is 3, so the rule starts as 3n. Test at n = 1 to find the constant.',
    },
    // Core 8
    {
      id: 'seqn-q8',
      type: 'spot-misconception',
      stem: 'Liam looks at 6, 10, 14, 18, ... He says "the common difference is 4, so the nth term rule is just n + 4." Is his reasoning sound?',
      tier: 'core',
      statements: [
        {
          text: 'Liam is right. If the common difference is 4, the rule is n + 4.',
          isMisconception: true,
        },
        {
          text: 'Actually the common difference becomes the coefficient of n, not a constant added to n. The rule starts as 4n. At n = 1 it gives 4, but term 1 is 6, so the rule is 4n + 2.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'seqn-mis-add-instead-of-multiply',
    },
    // Confident 1
    {
      id: 'seqn-q9',
      type: 'multiple-choice',
      stem: 'Find the nth term rule for the sequence 4, 7, 10, 13, ...',
      tier: 'confident',
      options: ['n + 3', '3n', '3n + 1', '4n - 1'],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'seqn-mis-just-difference',
      hint: 'Common difference = 3, so start with 3n. At n = 1, 3n gives 3, but term 1 is 4. Adjust by +1.',
    },
    // Confident 2
    {
      id: 'seqn-q10',
      type: 'multiple-choice',
      stem: 'For the sequence 5, 9, 13, 17, ..., what is the value of the constant b in the nth term rule 4n + b?',
      tier: 'confident',
      options: ['1', '4', '5', '9'],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'seqn-mis-term-one-as-constant',
      hint: 'At n = 1, the rule should give 5. Work out 4 x 1 first, then find what to add. The constant b is not term 1 itself.',
    },
    // Confident 3
    {
      id: 'seqn-q11',
      type: 'multiple-choice',
      stem: 'Find the nth term rule for the sequence 3, 8, 13, 18, ...',
      tier: 'confident',
      options: ['5n', '5n - 2', '5n + 3', 'n + 5'],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'seqn-mis-positive-only',
      hint: 'Common difference = 5, so start with 5n. At n = 1, 5n gives 5, but term 1 is 3. Term 1 is smaller, so the adjustment is negative.',
    },
    // Confident 4
    {
      id: 'seqn-q12',
      type: 'multiple-choice',
      stem: 'For the sequence 7, 12, 17, 22, ..., the nth term rule is 5n + b. What is the value of b?',
      tier: 'confident',
      options: ['7', '5', '2', '-2'],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'seqn-mis-swap-a-and-b',
      hint: 'Test at n = 1: 5 x 1 = 5. Term 1 is 7, so b = 7 - 5.',
    },
    // Confident 5
    {
      id: 'seqn-q13',
      type: 'multiple-choice',
      stem: 'Find the nth term rule for the sequence 9, 14, 19, 24, ...',
      tier: 'confident',
      options: ['5n + 4', '5n + 9', '4n + 5', 'n + 5'],
      correctIndex: 0,
      xpValue: 15,
      hint: 'Common difference = 5, so start with 5n. At n = 1, 5n gives 5, but term 1 is 9. Adjust by +4.',
    },
    // Confident 6
    {
      id: 'seqn-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step. Aisha is finding the nth term rule of the sequence 6, 11, 16, 21, ...',
      tier: 'confident',
      steps: [
        'The common difference is 11 - 6 = 5, so the rule starts as 5n.',
        'Test at n = 1: 5 x 1 = 5. But term 1 is 6, so the rule needs an adjustment.',
        null,
        'So the nth term rule is 5n + 1. Verify at n = 3: 5 x 3 + 1 = 16, which matches term 3.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Adjustment: 6 - 5 = +1. Add this constant to the rule.',
      xpValue: 20,
      misconceptionId: 'seqn-mis-term-number-as-multiplier',
    },
    // Confident 7
    {
      id: 'seqn-q15',
      type: 'drag-order',
      stem: 'Drag these steps for finding the nth term rule of an arithmetic sequence into the correct order.',
      tier: 'confident',
      items: [
        'Verify the rule at n = 1 and at one other term.',
        'Find the common difference between consecutive terms.',
        'Adjust by adding or subtracting a constant so the rule matches term 1.',
        'Write the rule as an, where a is the common difference.',
      ],
      correctOrder: [1, 3, 2, 0],
      xpValue: 20,
      misconceptionId: 'seqn-mis-skip-verification',
    },
    // Confident 8
    {
      id: 'seqn-q17',
      type: 'multiple-choice',
      stem: 'A pupil is finding the nth term rule for 8, 12, 16, 20, ... They write 4n. Why is this not yet the full rule?',
      tier: 'confident',
      options: [
        '4n is right. The rule is 4n.',
        'At n = 1, 4n gives 4, but term 1 is 8. So an adjustment of +4 is needed: 4n + 4.',
        'They should have used 8n because term 1 is 8.',
        'The rule should always be n + a number, never an + a number.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'seqn-mis-just-difference',
    },
    // Challenge 1
    {
      id: 'seqn-q19',
      type: 'numeric-entry',
      stem: 'A Manchester bus operator parks 5 buses on bay 1, 9 buses on bay 2, 13 on bay 3 and 17 on bay 4. The total grows by the same amount every bay. The dispatcher needs the total parked on bay 12 for the night sheet. How many buses sit on bay 12?',
      tier: 'challenge',
      correctAnswer: 49,
      xpValue: 25,
      hint: 'Common difference = 4. Rule: 4n + 1. At n = 12: 4 x 12 + 1 = 49.',
    },
    // Challenge 2
    {
      id: 'seqn-q20',
      type: 'multiple-choice',
      stem: 'A Sevenoaks scout group lays out chairs for a council meeting. Row 1 has 7 chairs, row 2 has 11, row 3 has 15, row 4 has 19. The pattern continues for many more rows. Which row first reaches at least 40 chairs?',
      tier: 'challenge',
      options: ['Row 8', 'Row 9', 'Row 11', 'Row 10'],
      correctIndex: 3,
      xpValue: 25,
      hint: 'Find the rule first: common difference = 4, rule = 4n + 3. Set 4n + 3 >= 40, then solve for the smallest n.',
    },
    // Challenge 3
    {
      id: 'seqn-q21',
      type: 'numeric-entry',
      stem: 'A Lake District car park starts with 8 cars at 9 am and gains 5 cars every hour. By how many hours after 9 am will the park first hold 38 cars?',
      tier: 'challenge',
      correctAnswer: 6,
      xpValue: 25,
      hint: 'Let term 1 (n = 1) be 9 am with 8 cars. The rule is 5n + 3. Set 5n + 3 = 38: n = 7, which is 6 hours after 9 am.',
    },
    // Challenge 4
    {
      id: 'seqn-q22',
      type: 'numeric-entry',
      stem: 'A Tunbridge Wells library lends books for £0.10 a day plus a £0.30 one-off fee. The total cost in pence after n days is given by an nth term rule of the form an + b. What is the value of a + b?',
      tier: 'challenge',
      correctAnswer: 40,
      xpValue: 25,
      hint: 'Each extra day adds 10p, so a = 10. The fee is 30p, so b = 30. Add: 10 + 30 = 40.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a find-the-nth-term question where pupils gave only the multiplier (3n) without the adjustment.
    {
      id: 'seqn-mis-just-difference',
      description:
        'I find the common difference and write the rule as an alone, without checking what term 1 should be.',
      triggerAnswer: 'just-difference',
      correction:
        'Actually an alone is the rule only when term 1 equals a. Always test at n = 1 and add or subtract a constant b to match.',
      reExplanation:
        'For 4, 7, 10, 13, ... the common difference is 3, so the rule starts as 3n. At n = 1 it gives 3, but term 1 is 4, so b = +1. The full rule is 3n + 1. Check at n = 2: 3 x 2 + 1 = 7, which matches.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on an nth-term question where pupils added the gap to the term number rather than multiplying.
    {
      id: 'seqn-mis-add-instead-of-multiply',
      description:
        'I see a common difference of 4 and write the rule as n + 4 instead of 4n + b.',
      triggerAnswer: 'add-instead-of-multiply',
      correction:
        'In fact the common difference becomes the coefficient of n, not a constant added to n. The rule has shape an + b, with a equal to the common difference.',
      reExplanation:
        'For 6, 10, 14, 18, ... the common difference is 4. The rule is 4n + b. At n = 1, 4 x 1 = 4, but term 1 is 6, so b = 2. The rule is 4n + 2. Check at n = 2: 4 x 2 + 2 = 10, which matches. The rule n + 4 would give 5, 6, 7, 8 instead, which is the wrong sequence.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 01 (Foundation, Non-calculator), commentary on an nth-term question where pupils refused to write a negative constant b in the rule.
    {
      id: 'seqn-mis-positive-only',
      description:
        'I think the constant b in an + b must always be positive, so I write 5n + 3 instead of 5n - 2 for a sequence whose term 1 is smaller than 5.',
      triggerAnswer: 'positive-only',
      correction:
        'Actually b can be positive, negative or zero. Subtract when the actual term 1 is smaller than the value of an at n = 1.',
      reExplanation:
        'For 3, 8, 13, 18, ... the common difference is 5. The rule starts as 5n. At n = 1, 5n gives 5, but term 1 is 3, which is 2 less. So b = -2 and the rule is 5n - 2. Verify at n = 2: 5 x 2 - 2 = 8, which matches.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 6 Algebra, "Finding the nth Term" page; the worked example warning that you must use the same rule check at two terms, not just one.
    {
      id: 'seqn-mis-skip-verification',
      description:
        'I write down a rule that matches term 1 and stop, without checking at any other term.',
      triggerAnswer: 'skip-verification',
      correction:
        'Actually a single matching term is not enough. Always verify the rule at n = 2 or another term to be sure.',
      reExplanation:
        'For 5, 9, 13, 17, ... a pupil might guess the rule 5n - 0 because at n = 1 it gives 5, matching term 1. But at n = 2 it gives 10, while term 2 is 9. The correct rule is 4n + 1. Verifying at one further term catches this slip every time.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 6 "Generalised Arithmetic" by Booth, on pupils confusing the term number n with a multiplier in the rule.
    {
      id: 'seqn-mis-term-number-as-multiplier',
      description:
        'I substitute the term value into the rule instead of the position number, so for 5n + 1 at term 3 = 16 I write 5 x 16 + 1.',
      triggerAnswer: 'term-as-input',
      correction:
        'In fact the input n is the position of the term (1st, 2nd, 3rd, ...), not the value of the term itself.',
      reExplanation:
        'The rule 5n + 1 produces the sequence 6, 11, 16, 21, ... To find the 3rd term, substitute n = 3 (the position), not 16 (the value). 5 x 3 + 1 = 16, which matches the third entry. Substituting the value 16 would give 5 x 16 + 1 = 81, which is not in the sequence at all.',
    },
    // Source: NCETM "Misconceptions with Year 7 Algebra" reference document, on pupils mixing up coefficient and constant in nth-term rules.
    {
      id: 'seqn-mis-swap-a-and-b',
      description:
        'I get confused about which number multiplies n and which is added on, so I write 1n + 3 instead of 3n + 1 for a sequence with common difference 3 and term 1 of 4.',
      triggerAnswer: 'swap-a-and-b',
      correction:
        'Actually a (the multiplier of n) is always the common difference. b (the constant) is the adjustment that makes term 1 come out right.',
      reExplanation:
        'For 4, 7, 10, 13, ... the gap is 3. The rule has shape an + b. The 3 sits in front of n: 3n. The adjustment is +1 (because at n = 1, 3n gives 3, but term 1 is 4). So the full rule is 3n + 1. Swapping gives 1n + 3, which is just n + 3, generating 4, 5, 6, 7 instead.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a find-the-nth-term question where pupils used the value of term 1 as the constant b regardless of the multiplier.
    {
      id: 'seqn-mis-term-one-as-constant',
      description:
        'I take the value of term 1 and use it as the constant b in the rule an + b, so for 4, 7, 10, 13, ... I write 3n + 4 instead of 3n + 1.',
      triggerAnswer: 'term-one-as-constant',
      correction:
        'In fact the constant b is the difference between term 1 and the value of an at n = 1, not the value of term 1 itself.',
      reExplanation:
        'For 4, 7, 10, 13, ... start with 3n. At n = 1, 3n gives 3. Term 1 is 4. So b = 4 - 3 = +1. The rule is 3n + 1. Using b = 4 would give 3 x 1 + 4 = 7 at n = 1, but the actual term 1 is 4, so the rule fails the very first check.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const sequencesNthTermZoneNodes = [sequencesNthTerm]
