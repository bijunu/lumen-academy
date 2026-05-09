import type { SkillNode } from '@/types/content'

export const sequencesRules: SkillNode = {
  id: 'maths-sequences-rules',
  title: 'Term-to-Term and Position-to-Term Rules',
  description:
    'Spot the rule that links one term in a sequence to the next, find missing terms, and use a position-to-term rule to jump to any term you like without listing every step.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-sequences',
  zoneName: 'Sequences',
  tier: 'core',
  prerequisites: ['maths-bidmas-order-of-operations'],
  curriculum: {
    ks3Objective:
      'Generate terms of a sequence from either a term-to-term or a position-to-term rule, recognise arithmetic sequences and find the nth term, and recognise geometric sequences and appreciate other sequences that arise.',
    awardingBodies: {
      aqa: 'A23 Generate terms of a sequence from a term-to-term or position-to-term rule',
      edexcel: 'A23 Generate terms of a sequence from either a term-to-term or a position-to-term rule',
      ocr: '6.01a Sequences: term-to-term and position-to-term rules',
    },
  },
  scenes: [
    {
      id: 'seq-scene-dot-stacks',
      title: 'Growing Dot Stacks',
      type: 'diagram',
      instructions:
        'Look at how each sequence builds from one pile to the next. Sequence A goes 1, 3, 5, 7 by adding 2 each time. Sequence B goes 2, 4, 8, 16 by multiplying by 2. Sequence C goes 20, 17, 14, 11 by subtracting 3. The pattern of change between piles is the term-to-term rule.',
      data: {
        rows: [
          {
            sequenceLabel: 'Sequence A: 1, 3, 5, 7, ...',
            piles: [
              { position: 1, dots: 1 },
              { position: 2, dots: 3 },
              { position: 3, dots: 5 },
              { position: 4, dots: 7 },
            ],
            termToTermRule: 'add 2',
          },
          {
            sequenceLabel: 'Sequence B: 2, 4, 8, 16, ...',
            piles: [
              { position: 1, dots: 2 },
              { position: 2, dots: 4 },
              { position: 3, dots: 8 },
              { position: 4, dots: 16 },
            ],
            termToTermRule: 'multiply by 2',
          },
          {
            sequenceLabel: 'Sequence C: 20, 17, 14, 11, ...',
            piles: [
              { position: 1, dots: 20 },
              { position: 2, dots: 17 },
              { position: 3, dots: 14 },
              { position: 4, dots: 11 },
            ],
            termToTermRule: 'subtract 3',
          },
        ],
        readouts: ['position', 'termValue', 'gapToNext'],
      },
    },
    {
      id: 'seq-scene-position-slider',
      title: 'The Position Slider',
      type: 'simulation',
      instructions:
        'See how the rule term = 3n + 2 turns each position number n into the matching term value. Position 1 gives 3 x 1 + 2 = 5, position 2 gives 3 x 2 + 2 = 8, position 10 gives 3 x 10 + 2 = 32, and position 12 gives 3 x 12 + 2 = 38. The same rule jumps you straight to any term you want.',
      data: {
        slider: { min: 1, max: 12, step: 1, label: 'position n' },
        rule: 'term = 3n + 2',
        readouts: ['position', 'computation', 'term'],
        examples: [
          { position: 1, computation: '3 x 1 + 2', term: 5 },
          { position: 2, computation: '3 x 2 + 2', term: 8 },
          { position: 3, computation: '3 x 3 + 2', term: 11 },
          { position: 4, computation: '3 x 4 + 2', term: 14 },
          { position: 10, computation: '3 x 10 + 2', term: 32 },
          { position: 12, computation: '3 x 12 + 2', term: 38 },
        ],
      },
    },
    {
      id: 'seq-scene-two-rules-side-by-side',
      title: 'Two Rules, Same Sequence',
      type: 'diagram',
      instructions:
        'Look at the same sequence 5, 8, 11, 14, 17, 20 written two different ways. The term-to-term rule says start at 5 and add 3 each time. The position-to-term rule says term = 3n + 2, which lets you jump straight to any term given its position. Both rules describe the same sequence and answer different questions.',
      data: {
        sequence: [5, 8, 11, 14, 17, 20],
        termToTerm: { startValue: 5, step: 'add 3' },
        positionToTerm: { rule: 'term = 3n + 2', verifyAt: [1, 2, 5] },
        notes: [
          'The term-to-term rule tells you how to get from one term to the next.',
          'The position-to-term rule lets you jump straight to any term, given its position.',
          'Both rules describe the same sequence; they just answer different questions.',
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'seq-worked-1',
      title: 'Find the next two terms of 4, 7, 10, 13, ...',
      steps: [
        {
          explanation:
            'First check the gaps between terms to spot the term-to-term rule.',
          maths: '7 - 4 = 3, 10 - 7 = 3, 13 - 10 = 3',
        },
        {
          explanation:
            'Each gap is 3, so the term-to-term rule is "add 3".',
          maths: 'rule: add 3',
        },
        {
          explanation: 'Apply the rule to the last known term to find the next one.',
          maths: '13 + 3 = 16',
        },
        {
          explanation: 'Apply the rule again to find the term after that.',
          maths: '16 + 3 = 19',
        },
        {
          explanation: 'So the next two terms are 16 and 19.',
          maths: '..., 13, 16, 19',
        },
      ],
    },
    {
      id: 'seq-worked-2',
      title: 'Use the rule term = 4n + 1 to find the 8th term',
      steps: [
        {
          explanation:
            'The position-to-term rule gives any term directly, given its position. Here the position is 8.',
          maths: 'n = 8',
        },
        {
          explanation: 'Substitute n = 8 into the rule.',
          maths: 'term = 4 x 8 + 1',
        },
        {
          explanation:
            'Apply BIDMAS: do the multiplication before the addition.',
          maths: '4 x 8 = 32',
        },
        {
          explanation: 'Now add 1 to finish.',
          maths: '32 + 1 = 33',
        },
        {
          explanation: 'So the 8th term of the sequence is 33.',
          maths: 'term 8 = 33',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'seq-q1',
      type: 'multiple-choice',
      stem: 'What is the term-to-term rule for the sequence 6, 10, 14, 18, 22, ...?',
      tier: 'core',
      options: ['add 6', 'add 4', 'multiply by 2', 'subtract 4'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Look at the gap between two terms next to each other, then check the next pair.',
    },
    {
      id: 'seq-q2',
      type: 'numeric-entry',
      stem: 'A sequence starts 5, 9, 13, 17, ... What is the next term?',
      tier: 'core',
      correctAnswer: 21,
      xpValue: 10,
      hint: 'Find the gap between terms first.',
    },
    {
      id: 'seq-q3',
      type: 'multiple-choice',
      stem: 'Which sequence below has the term-to-term rule "multiply by 2"?',
      tier: 'core',
      options: [
        '1, 3, 5, 7, 9, ...',
        '3, 6, 9, 12, 15, ...',
        '4, 6, 8, 10, 12, ...',
        '3, 6, 12, 24, 48, ...',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'seq-mis-constant-difference',
    },
    {
      id: 'seq-q4',
      type: 'numeric-entry',
      stem: 'A sequence starts 20, 17, 14, 11, ... What is the next term?',
      tier: 'core',
      correctAnswer: 8,
      xpValue: 10,
      misconceptionId: 'seq-mis-decreasing-sign',
    },
    {
      id: 'seq-q5',
      type: 'multiple-choice',
      stem: 'Which row correctly names the term-to-term rule for 24, 20, 16, 12, ...?',
      tier: 'core',
      options: [
        'add 4',
        'subtract 2',
        'subtract 4',
        'multiply by one half',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'seq-mis-decreasing-sign',
    },
    {
      id: 'seq-q6',
      type: 'multiple-choice',
      stem: 'Which option fills the gap in the sequence 7, 10, ?, 16, 19?',
      tier: 'core',
      options: ['12', '13', '14', '15'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Find the term-to-term rule first by checking the known gaps.',
    },
    {
      id: 'seq-q7',
      type: 'drag-order',
      stem: 'Drag these terms into order so they form the sequence with rule "start at 2, add 5".',
      tier: 'core',
      items: ['12', '2', '17', '7'],
      correctOrder: [1, 3, 0, 2],
      xpValue: 15,
    },
    {
      id: 'seq-q8',
      type: 'numeric-entry',
      stem: 'A sequence has rule "start at 4, add 5". What is the third term?',
      tier: 'core',
      correctAnswer: 14,
      xpValue: 10,
      hint: 'List them: term 1 is 4, then add 5 to get term 2, then add 5 again.',
    },
    {
      id: 'seq-q9',
      type: 'multiple-choice',
      stem: 'A position-to-term rule says "term = 2n + 1". What is the 3rd term?',
      tier: 'confident',
      options: ['7', '5', '9', '11'],
      correctIndex: 0,
      xpValue: 15,
      hint: 'Substitute n = 3 into the rule, then apply BIDMAS.',
    },
    {
      id: 'seq-q10',
      type: 'numeric-entry',
      stem: 'The position-to-term rule for a sequence is term = 5n - 2. What is the 6th term?',
      tier: 'confident',
      correctAnswer: 28,
      xpValue: 15,
      hint: 'Replace n with 6, multiply first, then subtract.',
    },
    {
      id: 'seq-q11',
      type: 'multiple-choice',
      stem: 'A sequence is 5, 8, 11, 14, 17, ... Which position-to-term rule fits?',
      tier: 'confident',
      options: [
        'term = 3n',
        'term = n + 3',
        'term = 3n + 2',
        'term = 5n',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'seq-mis-double-difference-rule',
    },
    {
      id: 'seq-q12',
      type: 'spot-misconception',
      stem: 'Priya says: "The sequence is 5, 8, 11, 14, ... and the rule adds 3 each time, so the 10th term must be 5 + 3 = 8." Is her thinking sound?',
      tier: 'confident',
      statements: [
        {
          text: 'Priya is right. The 10th term is 8 because the rule is add 3.',
          isMisconception: true,
        },
        {
          text: 'Actually you only add 3 nine times to reach term 10 from term 1, so the 10th term is 5 + 9 x 3 = 32.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'seq-mis-term-to-term-vs-position-to-term',
    },
    {
      id: 'seq-q13',
      type: 'numeric-entry',
      stem: 'A sequence starts 1, 2, 4, 8, 16, ... What is the next term?',
      tier: 'confident',
      correctAnswer: 32,
      xpValue: 15,
      misconceptionId: 'seq-mis-non-arithmetic-arithmetically',
      hint: 'Compare each pair as a multiplication, not as a difference.',
    },
    {
      id: 'seq-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step. Aisha is using the rule term = 4n + 3 to find the 7th term.',
      tier: 'confident',
      steps: [
        'The position-to-term rule gives the term value directly. Substitute n = 7 into term = 4n + 3.',
        'term = 4 x 7 + 3',
        null,
        'So the 7th term is 31.',
      ],
      missingStepIndex: 2,
      correctStep: 'Apply BIDMAS: 4 x 7 = 28, then 28 + 3 = 31.',
      xpValue: 20,
    },
    {
      id: 'seq-q15',
      type: 'slider-explore',
      stem: 'The rule is term = 2n + 5. Slide the position marker to the value of n that gives a term of 17.',
      tier: 'confident',
      min: 1,
      max: 12,
      step: 1,
      correctRange: [6, 6],
      label: 'position n on a 1 to 12 axis',
      xpValue: 15,
      hint: 'Try n = 5 first; the term comes out as 15. Now nudge n up by one.',
    },
    {
      id: 'seq-q16',
      type: 'drag-order',
      stem: 'Drag these terms of the sequence with rule term = n squared into order from 1st to 4th.',
      tier: 'confident',
      items: ['9', '1', '16', '4'],
      correctOrder: [1, 3, 0, 2],
      xpValue: 20,
      hint: 'Substitute n = 1, 2, 3, 4 in turn.',
    },
    {
      id: 'seq-q17',
      type: 'numeric-entry',
      stem: 'A sequence has the position-to-term rule term = 3n + 4. A Manchester train guard reads off the 12th term as a station code. What is the 12th term?',
      tier: 'challenge',
      correctAnswer: 40,
      xpValue: 25,
      hint: 'Substitute n = 12, multiply first, then add. Expect a two-digit answer.',
    },
    {
      id: 'seq-q18',
      type: 'multiple-choice',
      stem: 'Tom hires a stand-up paddleboard at a Lake District boathouse. The cost in pounds is given by the rule cost = 4 + 2n, where n is the number of hours. What is the cost of a 6-hour hire?',
      tier: 'challenge',
      options: ['£12', '£14', '£18', '£16'],
      correctIndex: 3,
      xpValue: 25,
      hint: 'Substitute n = 6 into the rule, multiply first, then add.',
    },
    {
      id: 'seq-q19',
      type: 'numeric-entry',
      stem: 'A sequence has the rule term = 4n + 1. The first term is 5, the second is 9, the third is 13. After how many terms does the sequence first reach 41?',
      tier: 'challenge',
      correctAnswer: 10,
      xpValue: 25,
      hint: 'Set 4n + 1 = 41, then work out n by reversing BIDMAS: subtract 1 first, then divide by 4.',
    },
    {
      id: 'seq-q20',
      type: 'multiple-choice',
      stem: 'A Sevenoaks library lends books for £0.20 a day plus a 50p one-off fee. The total cost in pence after n days is given by total = 20n + 50. Which sequence shows the total cost in pence for 1, 2, 3, and 4 days of lending?',
      tier: 'challenge',
      options: [
        '70, 90, 110, 130',
        '20, 40, 60, 80',
        '50, 70, 90, 110',
        '70, 140, 210, 280',
      ],
      correctIndex: 0,
      xpValue: 25,
      misconceptionId: 'seq-mis-input-as-term-value',
    },
    {
      id: 'seq-q21',
      type: 'spot-misconception',
      stem: 'Liam looks at the sequence 4, 8, 12, 16, ... He says "the rule is add 4 each time, so the position-to-term rule must be n + 4." Is his reasoning sound?',
      tier: 'challenge',
      statements: [
        {
          text: 'Liam is right. The term-to-term rule is add 4, so the position-to-term rule is n + 4.',
          isMisconception: true,
        },
        {
          text: 'Actually if the gap is 4 then the position rule is 4n, not n + 4. Check at n = 1: 4 x 1 = 4, which matches.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'seq-mis-double-difference-rule',
    },
    {
      id: 'seq-q22',
      type: 'missing-step',
      stem: 'Fill in the missing step. The sequence 7, 12, 17, 22, ... has term-to-term rule "add 5". Aisha works out the 20th term.',
      tier: 'challenge',
      steps: [
        'From term 1 to term 20 the rule is applied 19 times, not 20.',
        'Each application adds 5, so the total added is 19 x 5.',
        null,
        'Add this onto the first term: 7 + 95 = 102, so the 20th term is 102.',
      ],
      missingStepIndex: 2,
      correctStep: 'Work out 19 x 5 = 95.',
      xpValue: 25,
      misconceptionId: 'seq-mis-position-vs-term',
    },
  ],
  misconceptions: [
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 6 "Generalised Arithmetic" by Booth, on the constant-difference default for unfamiliar sequences
    {
      id: 'seq-mis-constant-difference',
      description:
        'I think every sequence rule must add the same number each time, so I work out the first gap and use it for all the others.',
      triggerAnswer: 'always-add-constant',
      correction:
        'In fact a sequence rule can multiply, square, or follow another pattern. Always test the rule on at least two gaps before you commit.',
      reExplanation:
        'Take 2, 4, 8, 16, ... The first gap is 2, but the next is 4 and the next is 8, so "add the same" does not work. Try multiplying instead: 2 x 2 is 4, 4 x 2 is 8, 8 x 2 is 16. The rule is multiply by 2.',
    },
    // Source: CGP KS3 Maths Study Guide, sequences section, Common mistake callout on confusing position number with term value
    {
      id: 'seq-mis-position-vs-term',
      description:
        'I mix up the position of a term with its value, so for 5, 8, 11, 14, ... I say position 3 has value 3, not 11.',
      triggerAnswer: 'position-equals-term',
      correction:
        'In fact the position counts which term it is (1st, 2nd, 3rd, ...) and the term value is the number you read off the sequence at that spot.',
      reExplanation:
        'Make a small two-row table. Top row: position 1, 2, 3, 4. Bottom row: term value 5, 8, 11, 14. Position 3 sits above the value 11, not 3. Always read the value from the bottom row.',
    },
    // Source: AQA GCSE Maths Foundation tier examiner report 2022, sequences question commentary on learners adding the gap once instead of (n - 1) times
    {
      id: 'seq-mis-term-to-term-vs-position-to-term',
      description:
        'I treat a "+3 each time" rule as if I add 3 once to get any term, instead of adding 3 the right number of steps from term 1.',
      triggerAnswer: 'term-to-term-applied-once',
      correction:
        'In fact to reach term n from term 1 you apply the rule n minus 1 times, not once and not n times.',
      reExplanation:
        'For 5, 8, 11, 14, ... with rule add 3, the 10th term is 5 + 9 x 3 = 32. You add 3 nine times because there are nine gaps between term 1 and term 10. A position-to-term rule does this in one step.',
    },
    // Source: CGP KS3 Maths Study Guide, sequences section, Common mistake callout on writing 3n instead of 3n + 2 when the gap is 3
    {
      id: 'seq-mis-double-difference-rule',
      description:
        'I read the term-to-term rule "add 3" and write the position-to-term rule as 3n, without checking what term 1 should be.',
      triggerAnswer: 'gap-only-rule',
      correction:
        'In fact 3n is only the rule when term 1 is 3. Always test your rule at n = 1 and adjust by adding or subtracting a constant.',
      reExplanation:
        'For 5, 8, 11, 14, ... the gap is 3, so the rule starts as 3n. At n = 1 that gives 3, but term 1 is 5, so the rule needs +2. Final rule: 3n + 2. Check at n = 2: 3 x 2 + 2 = 8, which matches.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 6 "Generalised Arithmetic" by Booth, on continuing non-arithmetic patterns by adding the previous gap
    {
      id: 'seq-mis-non-arithmetic-arithmetically',
      description:
        'For 1, 2, 4, 8, ... I see the gaps 1, 2, 4 and guess the next gap is 8, so the next term is 16, even though the rule was multiply.',
      triggerAnswer: 'extend-gap-pattern',
      correction:
        'In fact 1, 2, 4, 8, ... doubles each time. The next term is 16. You happened to get the same answer this time, but extending the gap pattern is not safe.',
      reExplanation:
        'Try the rule out before extending. 1 x 2 = 2, 2 x 2 = 4, 4 x 2 = 8, 8 x 2 = 16. The rule is multiply by 2, applied to the term, not to the gap. For 1, 2, 4, 7, 11, ... the gap pattern method does work, but only because the gaps themselves form a sequence.',
    },
    // Source: AQA GCSE Maths Foundation tier examiner report 2023, sequences question commentary on sign errors in decreasing sequences
    {
      id: 'seq-mis-decreasing-sign',
      description:
        'I look at the sequence 20, 17, 14, 11, ... and write the rule as "add 3" because I ignore the fact that the terms get smaller.',
      triggerAnswer: 'sign-flipped-rule',
      correction:
        'In fact the terms shrink by 3 each step, so the rule is subtract 3, not add 3.',
      reExplanation:
        'Compute one gap as later term minus earlier term. 17 minus 20 is negative 3, not positive 3. The negative sign tells you the sequence is going down. Read off the rule as subtract 3, then test it on the next pair: 14 minus 17 is also negative 3.',
    },
    // Source: CGP KS3 Maths Study Guide, sequences section, Common mistake callout on substituting the term value for n
    {
      id: 'seq-mis-input-as-term-value',
      description:
        'I plug the term value into the rule instead of the position, so for term = 20n + 50 at position 1, I work out 20 x 50 + 50 instead of 20 x 1 + 50.',
      triggerAnswer: 'term-as-input',
      correction:
        'In fact the input n is the position number, not the term value. Position 1 means n = 1.',
      reExplanation:
        'Label the slots before you substitute. The rule term = 20n + 50 means the term at position n. To find term 1, set n = 1 and compute 20 x 1 + 50 = 70. To find term 2, set n = 2 and compute 20 x 2 + 50 = 90. The output of the rule is the term, not the input.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const sequencesZoneNodes = [sequencesRules]
