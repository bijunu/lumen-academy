import type { SkillNode } from '@/types/content'

export const sequencesQuadraticRecognition: SkillNode = {
  id: 'maths-sequences-quadratic-recognition',
  title: 'Recognising Quadratic Sequences',
  description:
    'Recognise a quadratic sequence by computing its second differences. Work out the first differences between consecutive terms. If those first differences are not constant, write a second row of differences underneath. When the SECOND differences are constant, the sequence is quadratic, and the leading coefficient of n squared in the nth term rule is half that constant. Contrast with arithmetic (first differences already constant) and geometric (each term equals the previous one multiplied by a fixed ratio).',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-sequences',
  zoneName: 'Sequences',
  tier: 'challenge',
  prerequisites: ['maths-sequences-special-types'],
  curriculum: {
    ks3Objective:
      'Recognise quadratic sequences using second differences (introductory enrichment).',
    awardingBodies: {
      aqa: 'A25 Recognise quadratic sequences using second differences (GCSE Mathematics 8300)',
      edexcel: 'A25 Recognise quadratic sequences and use second differences to identify them (GCSE Mathematics 1MA1)',
      ocr: '8.02c Recognise quadratic sequences from second differences (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'sqr-scene-differences-table',
      title: 'Building the Differences Table',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the differences table to see how the second-row constant of 2 reveals the sequence 1, 4, 9, 16, 25 as quadratic.',
      data: {
        viewBox: '0 0 600 360',
        hotspots: [
          { id: 'sqr-h-term-row', x: 50, y: 18, label: 'Term row: 1, 4, 9, 16, 25', description: 'The first five square numbers, the sequence under inspection.' },
          { id: 'sqr-h-first-diffs', x: 50, y: 42, label: 'First differences: 3, 5, 7, 9', description: 'Each gap between consecutive terms. They grow, so they are not constant.' },
          { id: 'sqr-h-not-arithmetic', x: 90, y: 42, label: 'Not arithmetic', description: 'First differences are not constant, so the rule cannot be an + b alone.' },
          { id: 'sqr-h-second-diffs', x: 50, y: 70, label: 'Second differences: 2, 2, 2', description: 'Gaps between consecutive first differences. They ARE constant, so the sequence is quadratic.' },
          { id: 'sqr-h-leading', x: 50, y: 90, label: 'Leading coefficient = 2 / 2 = 1', description: 'For a constant second difference of d, the n squared term has coefficient d / 2. Here d = 2, so the rule contains 1 n squared, matching the n squared sequence.' },
        ],
      },
    },
    {
      id: 'sqr-scene-three-shapes',
      title: 'Arithmetic, Geometric, or Quadratic',
      type: 'diagram',
      instructions:
        'Read across each row to see the recognition signal for one family of sequence. Arithmetic has constant FIRST differences. Geometric has a constant RATIO between consecutive terms. Quadratic has constant SECOND differences (the first differences themselves grow by a fixed amount). The recognition signal is always the FIRST place in the table where a row of differences (or a row of ratios) settles to a constant value.',
      data: {
        rows: [
          {
            family: 'Arithmetic',
            example: '4, 7, 10, 13, 16',
            firstDifferences: [3, 3, 3, 3],
            secondDifferences: [0, 0, 0],
            ratios: '7 / 4 = 1.75, 10 / 7 ~= 1.43 (not constant)',
            signal: 'First differences are constant (3).',
          },
          {
            family: 'Geometric',
            example: '2, 6, 18, 54, 162',
            firstDifferences: [4, 12, 36, 108],
            secondDifferences: [8, 24, 72],
            ratios: '6 / 2 = 3, 18 / 6 = 3, 54 / 18 = 3 (constant)',
            signal: 'Constant RATIO of 3 between consecutive terms.',
          },
          {
            family: 'Quadratic',
            example: '1, 4, 9, 16, 25',
            firstDifferences: [3, 5, 7, 9],
            secondDifferences: [2, 2, 2],
            ratios: '4 / 1 = 4, 9 / 4 = 2.25 (not constant)',
            signal: 'Second differences are constant (2).',
          },
        ],
        callout:
          'Quadratic sequences fail the arithmetic test (first differences vary) AND fail the geometric test (ratios vary). The second-differences row is what catches them.',
      },
    },
    {
      id: 'sqr-scene-leading-coefficient',
      title: 'From the Constant Second Difference to the Leading Coefficient',
      type: 'simulation',
      instructions:
        'See how the constant second difference d sets the leading coefficient of the n squared term. The rule is leading coefficient = d / 2. Step through three sequences to see this in action. You will NOT derive the full nth term rule on this node; the recognition signal alone is the focus.',
      data: {
        slider: { min: 1, max: 3, step: 1, label: 'sequence number' },
        sequences: [
          {
            id: 1,
            terms: [1, 4, 9, 16, 25],
            firstDifferences: [3, 5, 7, 9],
            secondDifferences: [2, 2, 2],
            constantSecondDifference: 2,
            leadingCoefficient: 1,
            verdict: 'Quadratic. The n squared coefficient is 2 / 2 = 1.',
          },
          {
            id: 2,
            terms: [2, 8, 18, 32, 50],
            firstDifferences: [6, 10, 14, 18],
            secondDifferences: [4, 4, 4],
            constantSecondDifference: 4,
            leadingCoefficient: 2,
            verdict: 'Quadratic. The n squared coefficient is 4 / 2 = 2.',
          },
          {
            id: 3,
            terms: [3, 9, 19, 33, 51],
            firstDifferences: [6, 10, 14, 18],
            secondDifferences: [4, 4, 4],
            constantSecondDifference: 4,
            leadingCoefficient: 2,
            verdict: 'Quadratic. The n squared coefficient is 4 / 2 = 2. Same leading term as sequence 2, with a different constant adjustment.',
          },
        ],
        notes:
          'A constant second difference of d ALWAYS gives a leading coefficient of d / 2 in the nth term rule. Year 7 stretch only needs the recognition; deriving the full rule comes later.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'sqr-worked-1',
      title: 'Identify whether 1, 4, 9, 16, 25 is quadratic',
      steps: [
        {
          explanation:
            'Write down the term row.',
          maths: '1, 4, 9, 16, 25',
        },
        {
          explanation:
            'Compute the first differences by subtracting each term from the next.',
          maths: '4 - 1 = 3, 9 - 4 = 5, 16 - 9 = 7, 25 - 16 = 9',
        },
        {
          explanation:
            'The first differences are 3, 5, 7, 9. They are NOT constant, so the sequence is not arithmetic.',
          maths: 'first differences: 3, 5, 7, 9 (not constant)',
        },
        {
          explanation:
            'Compute the second differences by subtracting each first difference from the next.',
          maths: '5 - 3 = 2, 7 - 5 = 2, 9 - 7 = 2',
        },
        {
          explanation:
            'The second differences are 2, 2, 2. They ARE constant, so the sequence is quadratic.',
          maths: 'second differences: 2, 2, 2 (constant)',
        },
        {
          explanation:
            'Find the leading coefficient of n squared by halving the constant second difference.',
          maths: 'leading coefficient = 2 / 2 = 1',
        },
        {
          explanation:
            'So 1, 4, 9, 16, 25 is a quadratic sequence with n squared coefficient 1. (This is the squares sequence, rule n squared.)',
          maths: 'verdict: quadratic, leading term 1 x n squared',
        },
      ],
    },
    {
      id: 'sqr-worked-2',
      title: 'Identify whether 2, 6, 12, 20, 30 is quadratic',
      steps: [
        {
          explanation:
            'Write down the term row.',
          maths: '2, 6, 12, 20, 30',
        },
        {
          explanation:
            'Compute the first differences.',
          maths: '6 - 2 = 4, 12 - 6 = 6, 20 - 12 = 8, 30 - 20 = 10',
        },
        {
          explanation:
            'The first differences are 4, 6, 8, 10. They are not constant, so the sequence is not arithmetic.',
        },
        {
          explanation:
            'Compute the second differences.',
        },
        {
          explanation:
            'The second differences are 2, 2, 2. They are constant, so the sequence is quadratic.',
          maths: 'second differences: 2, 2, 2 (constant)',
        },
        {
          explanation:
            'Find the leading coefficient by halving the constant second difference.',
          maths: 'leading coefficient = 2 / 2 = 1',
        },
        {
          explanation:
            'So 2, 6, 12, 20, 30 is quadratic with n squared coefficient 1. (This is the pronic sequence, rule n squared + n.)',
          maths: 'verdict: quadratic, leading term 1 x n squared',
        },
      ],
    },
  ],
  questions: [
    // ===== CORE (7) =====
    // Core 1: definition recall
    {
      id: 'sqr-q1',
      type: 'multiple-choice',
      stem: 'Which row of differences tells you a sequence is quadratic?',
      tier: 'core',
      options: [
        'The term row.',
        'The first differences row.',
        'The second differences row.',
        'The ratio row.',
      ],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Arithmetic settles at the first differences. Quadratic needs one more row of subtraction underneath.',
    },
    // Core 2: compute first differences (basic)
    {
      id: 'sqr-q2',
      type: 'multiple-choice',
      stem: 'The sequence is 3, 7, 13, 21, 31. What is the FOURTH first difference (the gap between term 4 and term 5)?',
      tier: 'core',
      options: ['8', '10', '12', '15'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'First difference = next term minus current term. 31 - 21 = 10.',
    },
    // Core 3: second differences from a given first-difference row
    {
      id: 'sqr-q3',
      type: 'numeric-entry',
      stem: 'A sequence has first differences 4, 7, 10, 13. What is the constant value of the second differences?',
      tier: 'core',
      correctAnswer: 3,
      xpValue: 10,
      misconceptionId: 'sqr-mis-stop-at-first-row',
      hint: 'Subtract consecutive first differences: 7 - 4 = 3, 10 - 7 = 3, 13 - 10 = 3. The constant is 3.',
    },
    // Core 4: recognise quadratic from a small term list
    {
      id: 'sqr-q4',
      type: 'multiple-choice',
      stem: 'Look at the sequence 1, 4, 9, 16, 25. Which family does it belong to?',
      tier: 'core',
      options: [
        'Arithmetic, because the differences look like a pattern.',
        'Quadratic, because the second differences are constant.',
        'Geometric, because each gap is larger than the last.',
        'None of the three; it does not match any family.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'sqr-mis-not-arithmetic-equals-geometric',
      hint: 'First differences 3, 5, 7, 9 are not constant. Second differences are 2, 2, 2 (constant), so the sequence is quadratic.',
    },
    // Core 5: distinguish quadratic vs geometric on a side-by-side pair
    {
      id: 'sqr-q5',
      type: 'multiple-choice',
      stem: 'Which sequence is quadratic?',
      tier: 'core',
      options: [
        '2, 4, 8, 16, 32 (each term doubles)',
        '5, 10, 15, 20, 25 (each gap is 5)',
        '10, 100, 1000, 10000 (each term times 10)',
        '3, 6, 11, 18, 27 (second differences are 2)',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'sqr-mis-quadratic-as-exponential',
      hint: 'Doubling is geometric (constant ratio). Constant gaps are arithmetic. Only the option with constant SECOND differences is quadratic.',
    },
    // Core 6: count differences (off-by-one safety check)
    {
      id: 'sqr-q6',
      type: 'numeric-entry',
      stem: 'A sequence has five terms: 2, 5, 10, 17, 26. How many first differences can you write down between these terms?',
      tier: 'core',
      correctAnswer: 4,
      xpValue: 10,
      misconceptionId: 'sqr-mis-difference-count-off-by-one',
      hint: 'With five terms there are four gaps between consecutive terms, so four first differences.',
    },
    // Core 7: spot the misconception about giving up at non-constant first row
    {
      id: 'sqr-q7',
      type: 'spot-misconception',
      stem: 'Aisha looks at 2, 5, 10, 17, 26. She works out the first differences 3, 5, 7, 9, sees that they are not constant, and writes "not arithmetic, so no pattern". What is the better next step?',
      tier: 'core',
      statements: [
        {
          text: 'Aisha is right to stop. If the first differences are not constant, the sequence has no rule.',
          isMisconception: true,
        },
        {
          text: 'In fact non-constant first differences only rule out arithmetic. Write a second row underneath by subtracting consecutive first differences: 5 - 3 = 2, 7 - 5 = 2, 9 - 7 = 2. The second differences are constant, so the sequence is quadratic.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'sqr-mis-stop-at-first-row',
    },
    // ===== CONFIDENT (8) =====
    // Confident 1: compute second differences and give verdict
    {
      id: 'sqr-q8',
      type: 'numeric-entry',
      stem: 'A sequence has terms 4, 9, 16, 25, 36. What is the constant value of its second differences?',
      tier: 'confident',
      correctAnswer: 2,
      xpValue: 15,
      hint: 'First differences: 5, 7, 9, 11. Second differences: 2, 2, 2. The constant is 2.',
    },
    // Confident 2: leading coefficient from second difference
    {
      id: 'sqr-q9',
      type: 'multiple-choice',
      stem: 'A quadratic sequence has a constant second difference of 6. What is the leading coefficient of n squared in its nth term rule?',
      tier: 'confident',
      options: ['3', '6', '12', '1.5'],
      correctIndex: 0,
      xpValue: 15,
      hint: 'Leading coefficient = constant second difference divided by 2. 6 / 2 = 3.',
    },
    // Confident 3: identify the correct family across four options
    {
      id: 'sqr-q10',
      type: 'multiple-choice',
      stem: 'Which sequence has constant second differences of 4?',
      tier: 'confident',
      options: [
        '1, 5, 9, 13, 17 (gaps of 4)',
        '2, 8, 32, 128 (each term times 4)',
        '3, 5, 11, 21, 35 (first differences 2, 6, 10, 14)',
        '0, 1, 3, 7, 15 (differences are doubling)',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'sqr-mis-geometric-as-quadratic',
      hint: 'Check the second differences of option C: 6 - 2 = 4, 10 - 6 = 4, 14 - 10 = 4. Constant 4, so quadratic.',
    },
    // Confident 4: missing-step
    {
      id: 'sqr-q11',
      type: 'missing-step',
      stem: 'Fill in the missing step. Liam classifies the sequence 5, 8, 13, 20, 29.',
      tier: 'confident',
      steps: [
        'Write the term row: 5, 8, 13, 20, 29.',
        'Compute the first differences: 8 - 5 = 3, 13 - 8 = 5, 20 - 13 = 7, 29 - 20 = 9.',
        'The first differences are 3, 5, 7, 9 (not constant), so the sequence is not arithmetic.',
        null,
        'The second differences are 2, 2, 2 (constant), so the sequence is quadratic. The leading coefficient is 2 / 2 = 1.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Compute the second differences by subtracting consecutive first differences: 5 - 3 = 2, 7 - 5 = 2, 9 - 7 = 2.',
      xpValue: 20,
      misconceptionId: 'sqr-mis-stop-at-first-row',
    },
    // Confident 5: spot misconception (geometric vs quadratic)
    {
      id: 'sqr-q12',
      type: 'spot-misconception',
      stem: 'Priya sees the sequence 3, 6, 12, 24, 48 and writes "the first differences grow, so it must be quadratic". What is wrong with her reasoning?',
      tier: 'confident',
      statements: [
        {
          text: 'She is right. Growing first differences always mean a quadratic sequence.',
          isMisconception: true,
        },
        {
          text: 'In fact growing first differences are NOT enough on their own. For 3, 6, 12, 24, 48 the ratio of each term to the previous is 2 (geometric), and the second differences are 3, 6, 12 (also growing, not constant). So the sequence is geometric, not quadratic.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'sqr-mis-geometric-as-quadratic',
    },
    // Confident 6: drag-order the recognition steps
    {
      id: 'sqr-q13',
      type: 'drag-order',
      stem: 'Drag these steps for testing a sequence for the quadratic family into the correct order.',
      tier: 'confident',
      items: [
        'If the second differences are constant, declare the sequence quadratic.',
        'Compute the first differences between consecutive terms.',
        'If the first differences are constant, the sequence is arithmetic; stop.',
        'Compute the second differences by subtracting consecutive first differences.',
      ],
      correctOrder: [1, 2, 3, 0],
      xpValue: 20,
      misconceptionId: 'sqr-mis-stop-at-first-row',
    },
    // Confident 7: contrast quadratic and arithmetic
    {
      id: 'sqr-q14',
      type: 'multiple-choice',
      stem: 'A sequence has first differences 7, 7, 7, 7. Which family is it, and what are its second differences?',
      tier: 'confident',
      options: [
        'Arithmetic, second differences are 0, 0, 0.',
        'Quadratic, second differences are 7, 7, 7.',
        'Quadratic, second differences are 0, 0, 0.',
        'Geometric, second differences cannot be computed.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'sqr-mis-stop-at-first-row',
      hint: 'Constant first differences make it arithmetic. The second differences exist and are all 7 - 7 = 0.',
    },
    // Confident 8: compute differences in correct direction
    {
      id: 'sqr-q15',
      type: 'numeric-entry',
      stem: 'A sequence has terms 30, 24, 16, 6 (left to right, in order). What is the FIRST first difference (the gap from term 1 to term 2)?',
      tier: 'confident',
      correctAnswer: -6,
      xpValue: 15,
      misconceptionId: 'sqr-mis-wrong-direction',
      hint: 'First difference = next term minus current term. 24 - 30 = -6. Subtract in the order the terms appear; the sign matters.',
    },
    // ===== CHALLENGE (6) =====
    // Challenge 1: Bond-style tile pattern, multi-step
    {
      id: 'sqr-q16',
      type: 'numeric-entry',
      stem: 'A pupil at a Sevenoaks primary school lays out coloured tiles in a growing square pattern. Picture 1 uses 1 tile, picture 2 uses 4 tiles, picture 3 uses 9, and picture 4 uses 16. She wonders whether the tile counts form a quadratic sequence. To check, what is the constant second difference of the sequence of tile counts?',
      tier: 'challenge',
      correctAnswer: 2,
      xpValue: 25,
      misconceptionId: 'sqr-mis-stop-at-first-row',
      hint: 'Sequence: 1, 4, 9, 16. First differences 3, 5, 7. Second differences 2, 2. The constant is 2, so the tile counts are quadratic.',
    },
    // Challenge 2: balls stacked in a triangular pyramid (Bond multi-step)
    {
      id: 'sqr-q17',
      type: 'multiple-choice',
      stem: 'A Manchester sports shop stacks footballs into triangular layers. Layer 1 holds 1 ball, layer 2 holds 3, layer 3 holds 6, layer 4 holds 10, and layer 5 holds 15. Is the layer-count sequence quadratic, and what is the constant second difference?',
      tier: 'challenge',
      options: [
        'No, it is arithmetic with a constant of 2.',
        'No, it is geometric with a constant ratio.',
        'Yes, constant second difference of 2.',
        'Yes, constant second difference of 1.',
      ],
      correctIndex: 3,
      xpValue: 25,
      hint: 'First differences: 2, 3, 4, 5. Second differences: 1, 1, 1. Constant 1, so quadratic with leading coefficient 1 / 2.',
    },
    // Challenge 3: school formation rows (Bond multi-step, leading-coefficient inference)
    {
      id: 'sqr-q18',
      type: 'numeric-entry',
      stem: 'At a Dover school sports day, a teacher organises pupils into rows for a formation routine. Row 1 has 3 pupils, row 2 has 8, row 3 has 15, row 4 has 24, and row 5 has 35. The pupils-per-row sequence is quadratic. What is the leading coefficient of n squared in its nth term rule?',
      tier: 'challenge',
      correctAnswer: 1,
      xpValue: 25,
      hint: 'First differences: 5, 7, 9, 11. Second differences: 2, 2, 2. Leading coefficient = 2 / 2 = 1.',
    },
    // Challenge 4: distinguish geometric from quadratic (multi-step)
    {
      id: 'sqr-q19',
      type: 'multiple-choice',
      stem: 'A Lake District ranger counts deer sightings each year. Year 1: 2 sightings. Year 2: 6. Year 3: 18. Year 4: 54. Year 5: 162. A trainee says the sequence is quadratic because the gaps grow each year. What is the correct verdict?',
      tier: 'challenge',
      options: [
        'Quadratic with constant second difference 8.',
        'Geometric with a constant ratio of 3, not quadratic.',
        'Arithmetic with a constant first difference.',
        'Neither family applies; the data is random.',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'sqr-mis-geometric-as-quadratic',
      hint: 'Test the ratio: 6 / 2 = 3, 18 / 6 = 3, 54 / 18 = 3, 162 / 54 = 3. Constant ratio of 3, so geometric. The second differences (8, 24, 72) are not constant, so it is not quadratic.',
    },
    // Challenge 5: tile pattern with non-trivial leading coefficient
    {
      id: 'sqr-q20',
      type: 'numeric-entry',
      stem: 'A Tunbridge Wells decorator builds picture frames from L-shaped tile blocks. Frame 1 uses 2 tiles, frame 2 uses 8, frame 3 uses 18, frame 4 uses 32, and frame 5 uses 50. The tile-count sequence is quadratic. What is the leading coefficient of n squared in its nth term rule?',
      tier: 'challenge',
      correctAnswer: 2,
      xpValue: 25,
      hint: 'First differences: 6, 10, 14, 18. Second differences: 4, 4, 4. Leading coefficient = 4 / 2 = 2.',
    },
    // Challenge 6: pyramid stack stretch, mixed reasoning
    {
      id: 'sqr-q21',
      type: 'multiple-choice',
      stem: 'A scout troop in Tunbridge Wells stacks tinned beans for a food bank in growing square layers. Stack 1 holds 1 tin, stack 2 holds 5, stack 3 holds 14, stack 4 holds 30. They claim the sequence is quadratic. Which row of differences proves them right?',
      tier: 'challenge',
      options: [
        'First differences 4, 9, 16 (not constant), so quadratic.',
        'Second differences 5, 7 (not constant), so not quadratic.',
        'Third differences 2, 2 (constant), so the sequence is cubic, not quadratic.',
        'Constant ratio of about 2.1, so quadratic.',
      ],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'sqr-mis-any-deeper-row-quadratic',
      hint: 'First differences: 4, 9, 16. Second differences: 5, 7 (not constant). Third differences: 2, 2 (constant). When the THIRD differences first become constant, the sequence is cubic, not quadratic. The troop is wrong.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 2H (Higher, Calculator), commentary on a quadratic-sequence question where pupils stopped after finding non-constant first differences and concluded "no rule".
    {
      id: 'sqr-mis-stop-at-first-row',
      description:
        'I compute the first differences, see they are not constant, and stop, deciding the sequence has no rule.',
      triggerAnswer: 'stop-at-first-row',
      correction:
        'Actually non-constant first differences only rule out arithmetic. Write a second row of differences underneath to test for quadratic.',
      reExplanation:
        'For 2, 5, 10, 17, 26 the first differences are 3, 5, 7, 9, which are not constant. That only means the sequence is not arithmetic. Subtract consecutive first differences to get the second row: 5 - 3 = 2, 7 - 5 = 2, 9 - 7 = 2. Constant 2, so the sequence is quadratic. Always write the second row before giving up.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1H (Higher, Non-calculator), commentary on a sequence-classification question where pupils declared a sequence geometric the moment its first differences were not constant.
    {
      id: 'sqr-mis-not-arithmetic-equals-geometric',
      description:
        'I assume that any sequence whose first differences are not constant must be geometric.',
      triggerAnswer: 'not-arithmetic-equals-geometric',
      correction:
        'In fact non-constant first differences only rule out arithmetic. Geometric requires a constant RATIO; quadratic requires a constant SECOND difference. Test both separately.',
      reExplanation:
        'For 1, 4, 9, 16, 25 the first differences 3, 5, 7, 9 are not constant, so it is not arithmetic. The ratios 4 / 1 = 4 and 9 / 4 = 2.25 are also not constant, so it is not geometric. The second differences 2, 2, 2 are constant, so it is quadratic. Each family has its OWN test; failing one does not pass another.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 6 Algebra, "Sequences" page, "Common mistake" callout warning that for n terms there are n - 1 first differences.
    {
      id: 'sqr-mis-difference-count-off-by-one',
      description:
        'I think the number of first differences equals the number of terms, so for a five-term sequence I expect five first differences.',
      triggerAnswer: 'difference-count-off-by-one',
      correction:
        'Actually for n terms there are n - 1 first differences and n - 2 second differences.',
      reExplanation:
        'A gap sits BETWEEN two terms. With five terms you have four gaps, so four first differences. Then the second row has one fewer entry again: three second differences. Count the gaps, not the terms. Writing a missing fifth first difference (or forcing one) is a common slip when the second row looks too short.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 03 (Higher, Calculator), commentary on a sequence question where pupils subtracted in the wrong order, producing positive differences for a decreasing sequence.
    {
      id: 'sqr-mis-wrong-direction',
      description:
        'I subtract the bigger term from the smaller one, or always the right term from the left, so I get positive first differences even when the sequence is decreasing.',
      triggerAnswer: 'wrong-direction',
      correction:
        'In fact first difference = next term MINUS current term. Subtract in left-to-right order; the sign tells you whether the sequence rises or falls.',
      reExplanation:
        'For 30, 24, 16, 6 the first first difference is 24 - 30 = -6, not 30 - 24 = 6. The negatives matter: a quadratic sequence can have negative first differences early on then positive ones later, and the sign change is the signal. Always go next term minus current term, in the order the terms appear.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 6 "Generalised Arithmetic" by Booth, on pupils conflating sequences with growing first differences with the doubling family (exponential).
    {
      id: 'sqr-mis-quadratic-as-exponential',
      description:
        'I see a sequence growing fast (1, 4, 9, 16, 25) and call it "exponential" because exponential means "grows fast".',
      triggerAnswer: 'quadratic-as-exponential',
      correction:
        'Actually exponential (geometric) growth doubles, triples, or multiplies by a fixed ratio each step. Quadratic growth has constant SECOND differences. They are different families.',
      reExplanation:
        'For 1, 4, 9, 16, 25 the ratios are 4, 2.25, 1.78, 1.56, which are not constant, so it is not geometric. The second differences are 2, 2, 2 (constant), so it is quadratic. By contrast 2, 4, 8, 16, 32 has constant ratio 2 and is geometric. Growth speed alone does not classify a sequence; the structure of its differences (or ratios) does.',
    },
    // Source: NCETM "Misconceptions with Year 7 Algebra" reference document, on pupils treating any sequence with a constant ratio as quadratic because both feel "non-linear".
    {
      id: 'sqr-mis-geometric-as-quadratic',
      description:
        'I see a sequence with a constant ratio (like 3, 6, 12, 24) and call it quadratic, because both quadratic and geometric "grow more than arithmetic".',
      triggerAnswer: 'geometric-as-quadratic',
      correction:
        'In fact a constant RATIO means geometric, not quadratic. Quadratic needs a constant SECOND DIFFERENCE, which a doubling sequence will never have.',
      reExplanation:
        'For 3, 6, 12, 24, 48 the ratio is 2 each time, so it is geometric. The first differences are 3, 6, 12, 24 (also doubling, not constant). The second differences are 3, 6, 12 (still doubling, not constant). No row of differences will ever settle to a constant value for a doubling sequence. Quadratic and geometric are different families and use different tests.',
    },
    // Authored, no external source: classroom-observed slip where pupils confuse quadratic with cubic because BOTH need a non-first-row test, and any constant deeper in the table is read as "quadratic" regardless of which row it sits in.
    {
      id: 'sqr-mis-any-deeper-row-quadratic',
      description:
        'I think any sequence with a constant difference deeper than the first row must be quadratic, even if the constant appears at the third or fourth row.',
      triggerAnswer: 'any-deeper-row-quadratic',
      correction:
        'Actually quadratic means the SECOND differences are constant. If the constant only appears at the third row, the sequence is cubic.',
      reExplanation:
        'For 1, 5, 14, 30, 55 the first differences are 4, 9, 16, 25; the second differences are 5, 7, 9 (not constant); the third differences are 2, 2 (constant). The constant only appears in the THIRD row, so the sequence is cubic, not quadratic. Always check the exact row where the constant first appears: row 1 means arithmetic, row 2 means quadratic, row 3 means cubic.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const sequencesQuadraticRecognitionZoneNodes = [sequencesQuadraticRecognition]
