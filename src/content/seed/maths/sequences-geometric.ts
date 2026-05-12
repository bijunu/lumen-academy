import type { SkillNode } from '@/types/content'

export const sequencesGeometric: SkillNode = {
  id: 'maths-sequences-geometric',
  title: 'Recognising Geometric Sequences',
  description:
    'Spot a geometric sequence by checking that each term is the previous term multiplied by a fixed common ratio r. Find r by dividing any term by the one before it, then use r to continue the sequence or to tell geometric apart from arithmetic.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-sequences',
  zoneName: 'Sequences',
  tier: 'confident',
  prerequisites: ['maths-sequences-rules'],
  curriculum: {
    ks3Objective:
      'Recognise geometric sequences and appreciate other sequences that arise.',
    awardingBodies: {
      aqa: 'A25 Recognise geometric progressions and find the common ratio (GCSE Mathematics 8300)',
      edexcel: 'A25 Recognise geometric sequences r^n where n is an integer (GCSE Mathematics 1MA1)',
      ocr: '8.02a Recognise geometric sequences and find the common ratio (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'sg-scene-doubling-chain',
      title: 'A Chain that Doubles',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how the sequence 3, 6, 12, 24, 48 grows. Each term is the one before it multiplied by 2, so the common ratio r is 2. Hover the arrows to read off the multiplication that links each pair.',
      data: {
        viewBox: '0 0 100 100',
        hotspots: [
          { id: 'sg-h-t1', x: 8, y: 50, label: 'term 1: 3', description: 'The starting value of the sequence.' },
          { id: 'sg-h-a1', x: 18, y: 30, label: 'x 2', description: 'Multiply term 1 by 2 to reach term 2: 3 x 2 = 6.' },
          { id: 'sg-h-t2', x: 28, y: 50, label: 'term 2: 6', description: 'Term 1 multiplied by the common ratio 2.' },
          { id: 'sg-h-a2', x: 38, y: 30, label: 'x 2', description: 'Multiply term 2 by 2 to reach term 3: 6 x 2 = 12.' },
          { id: 'sg-h-t3', x: 48, y: 50, label: 'term 3: 12', description: 'Term 2 multiplied by the common ratio 2.' },
          { id: 'sg-h-a3', x: 58, y: 30, label: 'x 2', description: 'Multiply term 3 by 2 to reach term 4: 12 x 2 = 24.' },
          { id: 'sg-h-t4', x: 68, y: 50, label: 'term 4: 24', description: 'Term 3 multiplied by the common ratio 2.' },
          { id: 'sg-h-a4', x: 78, y: 30, label: 'x 2', description: 'Multiply term 4 by 2 to reach term 5: 24 x 2 = 48.' },
          { id: 'sg-h-t5', x: 88, y: 50, label: 'term 5: 48', description: 'Term 4 multiplied by the common ratio 2.' },
          { id: 'sg-h-r', x: 50, y: 80, label: 'common ratio r = 2', description: 'Every pair of next-to-each-other terms shares the same multiplier. That fixed multiplier is r.' },
        ],
      },
    },
    {
      id: 'sg-scene-paper-folding',
      title: 'Folding Paper Doubles the Layers',
      type: 'diagram',
      instructions:
        'Look at how folding a sheet of paper in half doubles the number of layers each time. With no folds you have 1 layer. After 1 fold you have 2 layers, after 2 folds you have 4, after 3 folds you have 8, after 4 folds you have 16. The sequence 1, 2, 4, 8, 16 grows by multiplying, not by adding the same amount. The common ratio is r = 2 and the gaps get larger and larger.',
      data: {
        folds: [
          { folds: 0, layers: 1 },
          { folds: 1, layers: 2 },
          { folds: 2, layers: 4 },
          { folds: 3, layers: 8 },
          { folds: 4, layers: 16 },
          { folds: 5, layers: 32 },
        ],
        commonRatio: 2,
        notes: [
          'Folding once turns each layer into two, so the count doubles each fold.',
          'The gaps between terms grow: 1, 2, 4, 8, 16. A doubling pattern is not arithmetic.',
          'You can compute any term as 1 x 2 x 2 x ... with as many 2s as there are folds.',
        ],
      },
    },
    {
      id: 'sg-scene-geometric-vs-arithmetic',
      title: 'Geometric and Arithmetic Side by Side',
      type: 'diagram',
      instructions:
        'Look at the two sequences side by side. The arithmetic sequence 2, 5, 8, 11, 14 adds 3 each time, so the gap between terms stays the same. The geometric sequence 2, 6, 18, 54, 162 multiplies by 3 each time, so the gap between terms grows. To tell which is which, check whether each term minus the one before it stays the same, or whether each term divided by the one before it stays the same.',
      data: {
        arithmetic: {
          terms: [2, 5, 8, 11, 14],
          commonDifference: 3,
          rule: 'add 3 each time',
          gapsBetweenTerms: [3, 3, 3, 3],
        },
        geometric: {
          terms: [2, 6, 18, 54, 162],
          commonRatio: 3,
          rule: 'multiply by 3 each time',
          ratiosBetweenTerms: [3, 3, 3, 3],
          gapsBetweenTerms: [4, 12, 36, 108],
        },
        checkSteps: [
          'Try subtracting: does the difference stay the same? If yes, the sequence is arithmetic.',
          'Try dividing: does the quotient stay the same? If yes, the sequence is geometric.',
          'If neither stays the same, the sequence is something else, like Fibonacci or squares.',
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'sg-worked-1',
      title: 'Find the next term of 5, 15, 45, ...',
      steps: [
        {
          explanation:
            'Check whether the sequence is geometric by dividing each term by the one before it.',
          maths: '15 divided by 5 = 3, 45 divided by 15 = 3',
        },
        {
          explanation:
            'Both ratios are the same, so the sequence is geometric with common ratio r = 3.',
          maths: 'r = 3',
        },
        {
          explanation:
            'Apply the rule to the last known term to find the next one.',
          maths: '45 x 3 = 135',
        },
        {
          explanation:
            'So the next term is 135. The sequence continues 5, 15, 45, 135.',
          maths: 'term 4 = 135',
        },
      ],
    },
    {
      id: 'sg-worked-2',
      title: 'Find the common ratio of 64, 16, 4, 1, ...',
      steps: [
        {
          explanation:
            'Pick any two next-to-each-other terms and divide the later one by the earlier one.',
          maths: '16 divided by 64 = one quarter',
        },
        {
          explanation:
            'Check on a second pair to be sure the ratio is the same all the way along.',
          maths: '4 divided by 16 = one quarter',
        },
        {
          explanation:
            'Check on a third pair as well.',
        },
        {
          explanation:
            'Every quotient is one quarter, so r = 1/4. The sequence shrinks because r is between 0 and 1.',
          maths: 'r = 1/4',
        },
        {
          explanation:
            'To go further, multiply by r: 1 x 1/4 = 1/4. The next term is 1/4.',
          maths: '1 x 1/4 = 1/4',
        },
      ],
    },
  ],
  questions: [
    // Core 1
    {
      id: 'sg-q1',
      type: 'multiple-choice',
      stem: 'Which option describes a geometric sequence?',
      tier: 'core',
      options: [
        'Each term is the one before it added to the same number.',
        'Each term is the one before it multiplied by the same number.',
        'Each term is the position number squared.',
        'Each term is the sum of the two terms before it.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'sg-mis-geometric-as-arithmetic',
      hint: 'A geometric rule uses a fixed multiplier, not a fixed adder.',
    },
    // Core 2
    {
      id: 'sg-q2',
      type: 'numeric-entry',
      stem: 'A geometric sequence starts 4, 12, 36, ... What is the common ratio r?',
      tier: 'core',
      correctAnswer: 3,
      xpValue: 10,
      hint: 'Divide any term by the term before it. 12 divided by 4 will do.',
    },
    // Core 3
    {
      id: 'sg-q3',
      type: 'multiple-choice',
      stem: 'Which sequence is geometric?',
      tier: 'core',
      options: [
        '5, 10, 15, 20, 25',
        '2, 6, 18, 54, 162',
        '1, 4, 9, 16, 25',
        '20, 17, 14, 11, 8',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'sg-mis-geometric-as-arithmetic',
      hint: 'In a geometric sequence the same multiplier links every pair of next-to-each-other terms.',
    },
    // Core 4
    {
      id: 'sg-q4',
      type: 'numeric-entry',
      stem: 'A geometric sequence starts 2, 6, 18, 54, ... What is the next term?',
      tier: 'core',
      correctAnswer: 162,
      xpValue: 10,
      hint: 'Find r first by dividing 6 by 2. Then multiply 54 by r.',
    },
    // Core 5
    {
      id: 'sg-q5',
      type: 'multiple-choice',
      stem: 'A geometric sequence has first term 5 and common ratio 2. What is the second term?',
      tier: 'core',
      options: ['7', '10', '12', '25'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'sg-mis-geometric-as-arithmetic',
      hint: 'To get from term 1 to term 2, multiply by r. Do not add.',
    },
    // Core 6
    {
      id: 'sg-q6',
      type: 'numeric-entry',
      stem: 'A geometric sequence is 1, 5, 25, 125, ... What is the common ratio?',
      tier: 'core',
      correctAnswer: 5,
      xpValue: 10,
      hint: 'Divide 5 by 1, then check that 25 divided by 5 gives the same value.',
    },
    // Core 7
    {
      id: 'sg-q7',
      type: 'multiple-choice',
      stem: 'Which sequence has common ratio r = 2?',
      tier: 'core',
      options: [
        '2, 4, 6, 8, 10',
        '3, 6, 12, 24, 48',
        '5, 10, 15, 20, 25',
        '2, 4, 8, 12, 16',
      ],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Try dividing every later term by the one before it. They must all equal 2.',
    },
    // Confident 1
    {
      id: 'sg-q8',
      type: 'numeric-entry',
      stem: 'A geometric sequence starts 3, 6, 12, 24, 48, ... What is the next term?',
      tier: 'confident',
      correctAnswer: 96,
      xpValue: 15,
      hint: 'The common ratio is 2. Multiply 48 by 2 to find term 6.',
    },
    // Confident 2
    {
      id: 'sg-q9',
      type: 'multiple-choice',
      stem: 'A bacterial colony in a UK lab doubles every hour. It starts at 80 cells. Which sequence shows the count after 0, 1, 2, 3 hours?',
      tier: 'confident',
      options: [
        '80, 82, 84, 86',
        '80, 160, 320, 640',
        '80, 160, 240, 320',
        '80, 80, 80, 80',
      ],
      correctIndex: 1,
      xpValue: 15,
      hint: 'Doubling means multiplying by 2 every hour. The sequence is geometric with r = 2.',
    },
    // Confident 3
    {
      id: 'sg-q10',
      type: 'multiple-choice',
      stem: 'The sequence 64, 16, 4, 1, ... is geometric. What is the common ratio?',
      tier: 'confident',
      options: ['4', '1/4', '-4', '16'],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'sg-mis-invert-ratio',
      hint: 'Divide the later term by the earlier term. 16 divided by 64 is one quarter, not 4.',
    },
    // Confident 4
    {
      id: 'sg-q11',
      type: 'multiple-choice',
      stem: 'Which sequence is geometric and which is arithmetic?',
      tier: 'confident',
      options: [
        '3, 7, 11, 15 is geometric and 2, 6, 18, 54 is arithmetic.',
        '3, 7, 11, 15 is arithmetic and 2, 6, 18, 54 is geometric.',
        'Both sequences are geometric.',
        'Both sequences are arithmetic.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'sg-mis-geometric-as-arithmetic',
      hint: 'Check the differences for the first sequence. Then check the quotients for the second.',
    },
    // Confident 5
    {
      id: 'sg-q12',
      type: 'numeric-entry',
      stem: 'A geometric sequence has first term 7 and common ratio 3. What is the third term?',
      tier: 'confident',
      correctAnswer: 63,
      xpValue: 15,
      misconceptionId: 'sg-mis-multiply-twice',
      hint: 'To get to term 3 from term 1, multiply by r twice: 7 x 3 = 21, then 21 x 3 = 63.',
    },
    // Confident 6
    {
      id: 'sg-q13',
      type: 'missing-step',
      stem: 'Fill in the missing step. Aisha is finding the common ratio of 81, 27, 9, 3, ...',
      tier: 'confident',
      steps: [
        'Pick two next-to-each-other terms and divide the later one by the earlier one.',
        '27 divided by 81 = 1/3.',
        null,
        'Both quotients are 1/3, so the common ratio is r = 1/3.',
      ],
      missingStepIndex: 2,
      correctStep: 'Check on a second pair: 9 divided by 27 = 1/3.',
      xpValue: 20,
      misconceptionId: 'sg-mis-skip-second-check',
    },
    // Confident 7
    {
      id: 'sg-q14',
      type: 'drag-order',
      stem: 'Drag these steps for testing whether a sequence is geometric into the correct order.',
      tier: 'confident',
      items: [
        'If all quotients are equal, the sequence is geometric with that value as r.',
        'Pick two next-to-each-other terms.',
        'Repeat with a second and third pair of next-to-each-other terms.',
        'Divide the later term by the earlier term.',
      ],
      correctOrder: [1, 3, 2, 0],
      xpValue: 20,
      misconceptionId: 'sg-mis-skip-second-check',
    },
    // Confident 8
    {
      id: 'sg-q15',
      type: 'spot-misconception',
      stem: 'Liam looks at 2, 6, 18, 54, ... He says "the gaps are 4, 12, 36, which keep growing, so the common ratio must be 4."',
      tier: 'confident',
      statements: [
        {
          text: 'Liam is right. The first gap is 4, so r = 4.',
          isMisconception: true,
        },
        {
          text: 'Actually the common ratio comes from dividing, not from a gap. 6 divided by 2 = 3, 18 divided by 6 = 3, so r = 3.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'sg-mis-geometric-as-arithmetic',
    },
    // Challenge 1 (Bond-style multi-step word problem)
    {
      id: 'sg-q16',
      type: 'numeric-entry',
      stem: 'A pupil in Sevenoaks folds a sheet of paper in half over and over. Before any folds the paper is 1 layer thick. Each fold doubles the number of layers. After how many folds does the paper first reach more than 100 layers?',
      tier: 'challenge',
      correctAnswer: 7,
      xpValue: 25,
      hint: 'Write out the layer counts: 1, 2, 4, 8, 16, 32, 64, 128. The count first crosses 100 at the seventh fold.',
    },
    // Challenge 2 (Bond-style multi-step word problem with savings interest)
    {
      id: 'sg-q17',
      type: 'multiple-choice',
      stem: 'A Tunbridge Wells savings demo starts with £80 and grows by a fixed multiplier each year. After year 1 the balance is £120 and after year 2 it is £180. Which option gives the common ratio and the balance after year 3?',
      tier: 'challenge',
      options: [
        'r = 1.5 and £240',
        'r = 1.5 and £270',
        'r = 40 and £220',
        'r = 1.4 and £252',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'sg-mis-difference-as-ratio',
      hint: 'Divide 120 by 80 to find r. Then multiply 180 by r for the year 3 balance.',
    },
    // Challenge 3 (negative ratio)
    {
      id: 'sg-q18',
      type: 'multiple-choice',
      stem: 'A sequence is 3, -6, 12, -24, 48, ... The sign of every term flips, so the common ratio is negative. What is r?',
      tier: 'challenge',
      options: ['-3', '-2', '2', '-6'],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'sg-mis-negative-ratio-sign',
      hint: 'Divide -6 by 3 to find r. Check with 12 divided by -6, which must give the same value.',
    },
    // Challenge 4 (Bond-style multi-step)
    {
      id: 'sg-q19',
      type: 'numeric-entry',
      stem: 'A Manchester lab tracks a bacterial colony that triples every 30 minutes. The count at 9 am is 40 cells. The technician needs the count at 11 am for the log. How many cells are in the dish at 11 am?',
      tier: 'challenge',
      correctAnswer: 3240,
      xpValue: 25,
      misconceptionId: 'sg-mis-multiply-twice',
      hint: 'Two hours is four 30-minute steps, so multiply 40 by 3 four times: 40, 120, 360, 1080, 3240.',
    },
    // Challenge 5 (later-pair vs earlier-pair ratio trap)
    {
      id: 'sg-q20',
      type: 'spot-misconception',
      stem: 'The sequence 5, 15, 45, 135, 405 is geometric. Priya says "I will use the later pair 135 and 405 to find r, because the numbers are bigger and more reliable, so r = 405 divided by 135."',
      tier: 'challenge',
      statements: [
        {
          text: 'Priya is wrong. You must always use the first two terms to find r.',
          isMisconception: true,
        },
        {
          text: 'Actually any pair of next-to-each-other terms gives the same r. 405 divided by 135 = 3, and 15 divided by 5 = 3, so both methods agree.',
          isMisconception: false,
        },
      ],
      xpValue: 25,
      misconceptionId: 'sg-mis-pair-choice',
    },
    // Challenge 6 (missing-step, fractional ratio)
    {
      id: 'sg-q21',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is finding term 4 of a geometric sequence with first term 96 and common ratio 1/2.',
      tier: 'challenge',
      steps: [
        'Multiply term 1 by r to get term 2: 96 x 1/2 = 48.',
        'Multiply term 2 by r to get term 3: 48 x 1/2 = 24.',
        null,
        'So term 4 is 12. The sequence shrinks because r is between 0 and 1.',
      ],
      missingStepIndex: 2,
      correctStep: 'Multiply term 3 by r to get term 4: 24 x 1/2 = 12.',
      xpValue: 25,
      misconceptionId: 'sg-mis-integer-only-ratio',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a geometric sequence question where pupils computed first differences instead of first quotients.
    {
      id: 'sg-mis-geometric-as-arithmetic',
      description:
        'I find the gap between terms in 2, 6, 18, 54 and call that gap the common ratio, instead of dividing.',
      triggerAnswer: 'difference-not-ratio',
      correction:
        'Actually the common ratio comes from dividing each term by the one before it, not from subtracting.',
      reExplanation:
        'For 2, 6, 18, 54 try subtracting: 6 - 2 = 4, 18 - 6 = 12, 54 - 18 = 36. The gaps grow, so the sequence is not arithmetic. Now divide: 6 divided by 2 = 3, 18 divided by 6 = 3, 54 divided by 18 = 3. The quotients are all equal, so r = 3.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a geometric sequence question where pupils wrote r = 4 for the sequence 64, 16, 4, 1.
    {
      id: 'sg-mis-invert-ratio',
      description:
        'For a shrinking sequence like 64, 16, 4, 1, I divide the bigger number by the smaller one and call that r, so I write r = 4 instead of r = 1/4.',
      triggerAnswer: 'inverted-ratio',
      correction:
        'In fact r is always (later term) divided by (earlier term), even when that gives a fraction.',
      reExplanation:
        'For 64, 16, 4, 1 the order matters. 16 divided by 64 = 1/4, not 4. Check on the next pair: 4 divided by 16 = 1/4 as well. So r = 1/4. A ratio less than 1 means the sequence shrinks. Using 64 divided by 16 = 4 would only give the inverse, not the ratio.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 01 (Foundation, Non-calculator), commentary on a geometric sequence question with alternating signs where pupils wrote r = 2 instead of r = -2.
    {
      id: 'sg-mis-negative-ratio-sign',
      description:
        'I see 3, -6, 12, -24 and ignore the alternating signs, writing r = 2 instead of r = -2.',
      triggerAnswer: 'positive-ratio-only',
      correction:
        'Actually r is a signed number. If the signs of the terms flip every step, r must be negative.',
      reExplanation:
        'For 3, -6, 12, -24 compute r = -6 divided by 3 = -2. Check: -2 x -6 = 12 and -2 x 12 = -24. The signs flip because multiplying by a negative number swaps the sign. Writing r = 2 would give 3, 6, 12, 24 instead, which is the wrong sequence.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 6 Algebra, "Geometric Sequences" page, Common mistake callout on assuming r must be a whole number.
    {
      id: 'sg-mis-integer-only-ratio',
      description:
        'I think the common ratio of a geometric sequence must always be a whole number, so I reject 1/2 or 1/4 as a possible value of r.',
      triggerAnswer: 'integer-only',
      correction:
        'In fact r can be any number, including fractions and decimals. A fractional r means the sequence shrinks each step.',
      reExplanation:
        'For 96, 48, 24, 12 the quotient is 48 divided by 96 = 1/2. Check on another pair: 24 divided by 48 = 1/2. So r = 1/2, even though it is not a whole number. The sequence is still geometric because the same multiplier links every pair of next-to-each-other terms.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a problem where pupils multiplied by r once to reach term 3 from term 1 instead of multiplying twice.
    {
      id: 'sg-mis-multiply-twice',
      description:
        'I think one application of r gets me to any term, so for first term 7 and r = 3 I write the third term as 7 x 3 = 21 instead of 63.',
      triggerAnswer: 'multiply-once-only',
      correction:
        'In fact to reach term n from term 1 you multiply by r exactly n minus 1 times, not just once.',
      reExplanation:
        'For first term 7 and r = 3 the path to term 3 is: term 1 = 7, term 2 = 7 x 3 = 21, term 3 = 21 x 3 = 63. Two multiplications, not one. A quick check is to write the sequence out: 7, 21, 63. Term 3 is the third number in the list.',
    },
    // Source: NCETM "Misconceptions with Year 7 Sequences" reference document, on pupils using a non-adjacent pair to compute the common ratio when they should use the earliest available pair.
    {
      id: 'sg-mis-pair-choice',
      description:
        'I ignore the first pair of terms and use a later pair to find r, then I am unsure whether I got the right value.',
      triggerAnswer: 'later-pair-preferred',
      correction:
        'In fact any pair of next-to-each-other terms gives the same r in a geometric sequence. Use whichever pair is easiest, then check on a second pair.',
      reExplanation:
        'For 5, 15, 45, 135, 405 the first pair gives 15 divided by 5 = 3 and the last pair gives 405 divided by 135 = 3. Both agree because the rule is the same all the way along. The safe habit is to compute r from one pair, then verify with a second pair to catch slips.',
    },
    // Source: CGP KS3 Maths Study Guide, sequences section, Common mistake callout on confirming a sequence is geometric only after a second check.
    {
      id: 'sg-mis-skip-second-check',
      description:
        'I divide the first pair of terms, get a number, and call the sequence geometric without checking on another pair.',
      triggerAnswer: 'one-check-only',
      correction:
        'In fact a single quotient is not enough. Always check at least two pairs of next-to-each-other terms before deciding the sequence is geometric.',
      reExplanation:
        'For 4, 8, 12, 16, 20 the first quotient is 8 divided by 4 = 2, which might fool you into writing r = 2. The next quotient is 12 divided by 8 = 1.5, which does not match. The sequence is arithmetic, not geometric. Two checks would catch this every time.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on pupils computing r as (later term minus earlier term) rather than (later term divided by earlier term).
    {
      id: 'sg-mis-difference-as-ratio',
      description:
        'I look at 80, 120, 180 and call the common ratio 40 because the first gap is 40, instead of dividing.',
      triggerAnswer: 'gap-as-ratio',
      correction:
        'Actually r is found by dividing, not subtracting. A gap of 40 does not mean r = 40.',
      reExplanation:
        'For 80, 120, 180 divide: 120 divided by 80 = 1.5 and 180 divided by 120 = 1.5. So r = 1.5. The gaps 40 and 60 grow each step, which is the tell-tale sign of a geometric sequence. Writing r = 40 would give 80, 3200, 128000, which is far too fast.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const sequencesGeometricZoneNodes = [sequencesGeometric]
