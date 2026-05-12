import type { SkillNode } from '@/types/content'

export const sequencesSpecialTypes: SkillNode = {
  id: 'maths-sequences-special-types',
  title: 'Special Sequences: Squares, Cubes, Triangular, Fibonacci',
  description:
    'Recognise the four special sequence families: square numbers (1, 4, 9, 16, ...), cube numbers (1, 8, 27, 64, ...), triangular numbers (1, 3, 6, 10, ...), and Fibonacci-type sequences (1, 1, 2, 3, 5, 8, ...). Spot which family fits a partial list, find the next term, and use the position-to-term rules n squared for squares, n cubed for cubes, and n times (n + 1) divided by 2 for triangular numbers.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-sequences',
  zoneName: 'Sequences',
  tier: 'confident',
  prerequisites: ['maths-sequences-rules'],
  curriculum: {
    ks3Objective:
      'Recognise sequences of triangular, square and cube numbers, simple arithmetic progressions, Fibonacci-type sequences, quadratic sequences, and simple geometric progressions (r^n where n is an integer, and r is a rational number greater than 0 or a surd) and other sequences.',
    awardingBodies: {
      aqa: 'A25 Recognise and use sequences of triangular, square and cube numbers, simple arithmetic progressions, Fibonacci-type sequences, geometric progressions (GCSE Mathematics 8300)',
      edexcel: 'A25 Recognise and use sequences of triangular, square and cube numbers, Fibonacci-type sequences (GCSE Mathematics 1MA1)',
      ocr: '8.02a Recognise sequences of squares, cubes, triangular, Fibonacci (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'sst-scene-dot-patterns',
      title: 'Dot Patterns for the Four Families',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to reveal the rule and the first few terms for that family of sequence.',
      data: {
        viewBox: '0 0 600 400',
        svg:
          '<g font-family="sans-serif" font-size="14" fill="#1f2937">' +
          // Squares row: 1, 4, 9 as filled grids
          '<text x="30" y="40">Squares: 1, 4, 9, 16, 25, ...</text>' +
          '<circle cx="60" cy="80" r="6" fill="#2563eb"/>' +
          '<g fill="#2563eb">' +
          '<circle cx="140" cy="70" r="6"/><circle cx="160" cy="70" r="6"/>' +
          '<circle cx="140" cy="90" r="6"/><circle cx="160" cy="90" r="6"/>' +
          '</g>' +
          '<g fill="#2563eb">' +
          '<circle cx="240" cy="60" r="6"/><circle cx="260" cy="60" r="6"/><circle cx="280" cy="60" r="6"/>' +
          '<circle cx="240" cy="80" r="6"/><circle cx="260" cy="80" r="6"/><circle cx="280" cy="80" r="6"/>' +
          '<circle cx="240" cy="100" r="6"/><circle cx="260" cy="100" r="6"/><circle cx="280" cy="100" r="6"/>' +
          '</g>' +
          // Triangular row: 1, 3, 6 as triangles
          '<text x="30" y="160">Triangular: 1, 3, 6, 10, 15, ...</text>' +
          '<circle cx="60" cy="200" r="6" fill="#16a34a"/>' +
          '<g fill="#16a34a">' +
          '<circle cx="150" cy="190" r="6"/>' +
          '<circle cx="140" cy="210" r="6"/><circle cx="160" cy="210" r="6"/>' +
          '</g>' +
          '<g fill="#16a34a">' +
          '<circle cx="260" cy="180" r="6"/>' +
          '<circle cx="250" cy="200" r="6"/><circle cx="270" cy="200" r="6"/>' +
          '<circle cx="240" cy="220" r="6"/><circle cx="260" cy="220" r="6"/><circle cx="280" cy="220" r="6"/>' +
          '</g>' +
          // Cubes row: 1, 8, 27 as stacked cube illustrations (simplified)
          '<text x="30" y="290">Cubes: 1, 8, 27, 64, 125, ...</text>' +
          '<rect x="54" y="320" width="14" height="14" fill="#9333ea"/>' +
          '<g fill="#9333ea">' +
          '<rect x="134" y="310" width="14" height="14"/><rect x="150" y="310" width="14" height="14"/>' +
          '<rect x="134" y="326" width="14" height="14"/><rect x="150" y="326" width="14" height="14"/>' +
          '</g>' +
          '<g fill="#9333ea">' +
          '<rect x="234" y="300" width="14" height="14"/><rect x="250" y="300" width="14" height="14"/><rect x="266" y="300" width="14" height="14"/>' +
          '<rect x="234" y="316" width="14" height="14"/><rect x="250" y="316" width="14" height="14"/><rect x="266" y="316" width="14" height="14"/>' +
          '<rect x="234" y="332" width="14" height="14"/><rect x="250" y="332" width="14" height="14"/><rect x="266" y="332" width="14" height="14"/>' +
          '</g>' +
          // Fibonacci row label
          '<text x="380" y="40">Fibonacci: 1, 1, 2, 3, 5, 8, 13, ...</text>' +
          '<text x="380" y="80" fill="#ea580c">Each term is the sum of the two before it.</text>' +
          '<text x="380" y="105" fill="#ea580c">1 + 1 = 2,  1 + 2 = 3,  2 + 3 = 5,  3 + 5 = 8.</text>' +
          '</g>',
        hotspots: [
          {
            id: 'sst-hotspot-squares',
            x: 30,
            y: 22,
            label: 'Square numbers: n squared',
            description:
              'Term n is n squared. The 4th square is 4 x 4 = 16. The 5th is 5 x 5 = 25.',
          },
          {
            id: 'sst-hotspot-triangular',
            x: 30,
            y: 52,
            label: 'Triangular numbers: n(n + 1) / 2',
            description:
              'The nth triangular number stacks rows of dots. The 4th is 4 x 5 / 2 = 10.',
          },
          {
            id: 'sst-hotspot-cubes',
            x: 30,
            y: 82,
            label: 'Cube numbers: n cubed',
            description:
              'Term n is n x n x n. The 4th cube is 4 x 4 x 4 = 64.',
          },
          {
            id: 'sst-hotspot-fibonacci',
            x: 70,
            y: 22,
            label: 'Fibonacci: add the previous two',
            description:
              'Start 1, 1, then each term is the sum of the two before. So 1, 1, 2, 3, 5, 8, 13, 21, ...',
          },
        ],
      },
    },
    {
      id: 'sst-scene-identification-cues',
      title: 'How to Spot Each Family',
      type: 'diagram',
      instructions:
        'Read across each row. The gaps between consecutive terms give the family away. Squares have gaps 3, 5, 7, 9 (the odd numbers in order). Triangular numbers have gaps 2, 3, 4, 5 (the counting numbers in order). Cubes grow much faster, with gaps 7, 19, 37, 61. Fibonacci terms each equal the sum of the two before, so the gap pattern is the sequence itself shifted along.',
      data: {
        rows: [
          {
            family: 'Squares',
            firstFive: [1, 4, 9, 16, 25],
            gaps: [3, 5, 7, 9],
            positionRule: 'n squared',
            cue: 'gaps are the odd numbers in order: 3, 5, 7, 9, ...',
          },
          {
            family: 'Triangular',
            firstFive: [1, 3, 6, 10, 15],
            gaps: [2, 3, 4, 5],
            positionRule: 'n(n + 1) / 2',
            cue: 'gaps go up by one each time: 2, 3, 4, 5, ...',
          },
          {
            family: 'Cubes',
            firstFive: [1, 8, 27, 64, 125],
            gaps: [7, 19, 37, 61],
            positionRule: 'n cubed',
            cue: 'gaps grow very quickly, far faster than for squares.',
          },
          {
            family: 'Fibonacci',
            firstFive: [1, 1, 2, 3, 5],
            gaps: [0, 1, 1, 2],
            positionRule: 'add the previous two terms',
            cue: 'each new term is the sum of the two terms just before it.',
          },
        ],
        notes: [
          'A first gap of 3 then 5 is a strong hint that you are looking at squares.',
          'Triangular numbers grow steadily but never with a constant gap.',
          'If the gaps are tiny then suddenly large, think cubes.',
          'If a term equals the sum of the two before, it is Fibonacci-type.',
        ],
      },
    },
    {
      id: 'sst-scene-position-rules',
      title: 'Position Rules for Squares, Cubes, and Triangular Numbers',
      type: 'simulation',
      instructions:
        'See how each position-to-term rule turns a position n into the right term. For squares, position 6 gives 6 x 6 = 36. For cubes, position 5 gives 5 x 5 x 5 = 125. For triangular numbers, position 6 gives 6 x 7 / 2 = 21. Fibonacci has no neat position rule at Year 7 level, so add the two previous terms instead.',
      data: {
        slider: { min: 1, max: 8, step: 1, label: 'position n' },
        squaresExamples: [
          { n: 1, computation: '1 x 1', term: 1 },
          { n: 4, computation: '4 x 4', term: 16 },
          { n: 6, computation: '6 x 6', term: 36 },
          { n: 8, computation: '8 x 8', term: 64 },
        ],
        cubesExamples: [
          { n: 1, computation: '1 x 1 x 1', term: 1 },
          { n: 3, computation: '3 x 3 x 3', term: 27 },
          { n: 5, computation: '5 x 5 x 5', term: 125 },
          { n: 6, computation: '6 x 6 x 6', term: 216 },
        ],
        triangularExamples: [
          { n: 1, computation: '1 x 2 / 2', term: 1 },
          { n: 4, computation: '4 x 5 / 2', term: 10 },
          { n: 6, computation: '6 x 7 / 2', term: 21 },
          { n: 8, computation: '8 x 9 / 2', term: 36 },
        ],
        fibonacciExamples: [
          { n: 5, previousTwo: [2, 3], term: 5 },
          { n: 6, previousTwo: [3, 5], term: 8 },
          { n: 7, previousTwo: [5, 8], term: 13 },
          { n: 8, previousTwo: [8, 13], term: 21 },
        ],
        notes:
          'Always check by computing two terms in a row. If both match the list you were given, the rule is right.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'sst-worked-1',
      title: 'Identify the family of 1, 4, 9, 16, 25, ...',
      steps: [
        {
          explanation:
            'List the gaps between consecutive terms.',
          maths: '4 - 1 = 3, 9 - 4 = 5, 16 - 9 = 7, 25 - 16 = 9',
        },
        {
          explanation:
            'The gaps are 3, 5, 7, 9. These are the odd numbers in order, a strong fingerprint for square numbers.',
          maths: 'gaps: 3, 5, 7, 9 (odd numbers)',
        },
        {
          explanation:
            'Check the position rule. The nth square number is n x n.',
          maths: 'n = 1 gives 1, n = 2 gives 4, n = 3 gives 9',
        },
        {
          explanation:
            'Verify against term 5. The 5th square is 5 x 5 = 25, which matches.',
          maths: '5 x 5 = 25 (matches term 5)',
        },
        {
          explanation:
            'So the family is square numbers, and the rule is n squared.',
          maths: 'nth term = n x n',
        },
      ],
    },
    {
      id: 'sst-worked-2',
      title: 'Find the 7th triangular number',
      steps: [
        {
          explanation:
            'Recall the position rule for triangular numbers.',
          maths: 'nth term = n x (n + 1) / 2',
        },
        {
          explanation:
            'Substitute n = 7 into the rule.',
          maths: 'term 7 = 7 x (7 + 1) / 2',
        },
        {
          explanation:
            'Work out the bracket first. Apply BIDMAS.',
        },
        {
          explanation:
            'Now do the multiplication.',
          maths: '7 x 8 = 56',
        },
        {
          explanation:
            'Finish by dividing by 2.',
          maths: '56 / 2 = 28',
        },
        {
          explanation:
            'So the 7th triangular number is 28. Cross check: the list 1, 3, 6, 10, 15, 21, 28 has 28 in the 7th slot.',
          maths: 'term 7 = 28',
        },
      ],
    },
  ],
  questions: [
    // Core 1
    {
      id: 'sst-q1',
      type: 'multiple-choice',
      stem: 'Which family does the sequence 1, 4, 9, 16, 25, ... belong to?',
      tier: 'core',
      options: ['Cube numbers', 'Triangular numbers', 'Fibonacci-type', 'Square numbers'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Each term is a position number multiplied by itself: 1 x 1, 2 x 2, 3 x 3, and so on.',
    },
    // Core 2
    {
      id: 'sst-q2',
      type: 'numeric-entry',
      stem: 'What is the 6th square number?',
      tier: 'core',
      correctAnswer: 36,
      xpValue: 10,
      hint: 'The nth square is n x n. Substitute n = 6.',
    },
    // Core 3
    {
      id: 'sst-q3',
      type: 'multiple-choice',
      stem: 'A sequence starts 1, 8, 27, 64, ... What is the next term?',
      tier: 'core',
      options: ['81', '125', '100', '128'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'sst-mis-square-vs-cube',
      hint: 'These are cube numbers. The 5th cube is 5 x 5 x 5.',
    },
    // Core 4
    {
      id: 'sst-q4',
      type: 'numeric-entry',
      stem: 'What is the next term in the triangular number sequence 1, 3, 6, 10, 15, ...?',
      tier: 'core',
      correctAnswer: 21,
      xpValue: 10,
      misconceptionId: 'sst-mis-triangular-as-arithmetic',
      hint: 'The gaps between terms go 2, 3, 4, 5. So the next gap is 6.',
    },
    // Core 5
    {
      id: 'sst-q5',
      type: 'multiple-choice',
      stem: 'A Fibonacci-type sequence starts 1, 1, 2, 3, 5, 8, ... What is the next term?',
      tier: 'core',
      options: ['10', '11', '13', '16'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'sst-mis-fibonacci-wrong-pair',
      hint: 'Add the two previous terms: 5 + 8.',
    },
    // Core 6
    {
      id: 'sst-q6',
      type: 'numeric-entry',
      stem: 'What is the 4th cube number?',
      tier: 'core',
      correctAnswer: 64,
      xpValue: 10,
      hint: 'The nth cube is n x n x n. Work out 4 x 4 first, then multiply by 4 again.',
    },
    // Core 7
    {
      id: 'sst-q7',
      type: 'spot-misconception',
      stem: 'Priya looks at 1, 3, 6, 10, ... She says "the first gap is 2, so this is an arithmetic sequence that adds 2 each time, and the next term is 12."',
      tier: 'core',
      statements: [
        {
          text: 'Priya is right. The sequence adds 2 each time, so the next term is 12.',
          isMisconception: true,
        },
        {
          text: 'Actually the gaps are 2, 3, 4, ..., not all 2. These are triangular numbers, so the next gap is 5 and the next term is 15.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'sst-mis-triangular-as-arithmetic',
    },
    // Confident 1
    {
      id: 'sst-q8',
      type: 'multiple-choice',
      stem: 'Which sequence shows the first five cube numbers in order?',
      tier: 'confident',
      options: [
        '1, 4, 9, 16, 25',
        '1, 8, 27, 64, 125',
        '1, 3, 6, 10, 15',
        '2, 4, 8, 16, 32',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'sst-mis-square-vs-cube',
      hint: 'Cube means n x n x n. The 3rd cube is 3 x 3 x 3 = 27, not 9.',
    },
    // Confident 2
    {
      id: 'sst-q9',
      type: 'numeric-entry',
      stem: 'Using the rule term = n x (n + 1) / 2, what is the 8th triangular number?',
      tier: 'confident',
      correctAnswer: 36,
      xpValue: 15,
      hint: 'Substitute n = 8 into the rule: 8 x 9 / 2.',
    },
    // Confident 3
    {
      id: 'sst-q10',
      type: 'multiple-choice',
      stem: 'A Fibonacci-type sequence starts 2, 3, 5, 8, 13, ... What is the 7th term?',
      tier: 'confident',
      options: ['24', '26', '32', '34'],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'sst-mis-fibonacci-wrong-pair',
      hint: 'List one term at a time. Term 6 = 8 + 13 = 21. Term 7 = 13 + 21 = 34.',
    },
    // Confident 4
    {
      id: 'sst-q11',
      type: 'numeric-entry',
      stem: 'What is the 9th square number?',
      tier: 'confident',
      correctAnswer: 81,
      xpValue: 15,
      misconceptionId: 'sst-mis-off-by-one-position',
      hint: 'The 9th square is 9 x 9, not 10 x 10.',
    },
    // Confident 5
    {
      id: 'sst-q12',
      type: 'multiple-choice',
      stem: 'Aisha lists the first four terms of a sequence as 1, 4, 9, 16. Which rule fits and what is the 10th term?',
      tier: 'confident',
      options: [
        'Rule is n squared, 10th term is 100',
        'Rule is n + 3, 10th term is 13',
        'Rule is 3n + 1, 10th term is 31',
        'Rule is n cubed, 10th term is 1000',
      ],
      correctIndex: 0,
      xpValue: 15,
      hint: 'Try n squared at n = 1, 2, 3, 4: it gives 1, 4, 9, 16. Then use n = 10.',
    },
    // Confident 6
    {
      id: 'sst-q13',
      type: 'drag-order',
      stem: 'Drag each sequence start onto the family it belongs to. Order the items so they match Square, Triangular, Cube, Fibonacci in that order.',
      tier: 'confident',
      items: [
        '1, 1, 2, 3, 5, 8 (Fibonacci-type)',
        '1, 3, 6, 10, 15 (Triangular)',
        '1, 4, 9, 16, 25 (Square)',
        '1, 8, 27, 64, 125 (Cube)',
      ],
      correctOrder: [2, 1, 3, 0],
      xpValue: 20,
      hint: 'Match each list to the position rule that produces it. Cubes grow fastest at first.',
    },
    // Confident 7
    {
      id: 'sst-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step. Liam is finding the 6th triangular number.',
      tier: 'confident',
      steps: [
        'Use the rule: nth triangular = n x (n + 1) / 2.',
        'Substitute n = 6: term = 6 x (6 + 1) / 2.',
        null,
        'Divide by 2 to finish: 42 / 2 = 21. So the 6th triangular number is 21.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Work out the bracket first: 6 + 1 = 7. Then multiply: 6 x 7 = 42.',
      xpValue: 20,
    },
    // Confident 8
    {
      id: 'sst-q15',
      type: 'drag-order',
      stem: 'Drag the first four square numbers into the correct order from the 1st to the 4th.',
      tier: 'confident',
      items: ['9', '1', '16', '4'],
      correctOrder: [1, 3, 0, 2],
      xpValue: 15,
      hint: 'Substitute n = 1, 2, 3, 4 into the rule n x n.',
    },
    // Challenge 1
    {
      id: 'sst-q16',
      type: 'numeric-entry',
      stem: 'A Sevenoaks scout group stacks logs in a triangular pile. Row 1 has 1 log on top, row 2 has 2 logs, row 3 has 3 logs, and the pattern continues. How many logs are there in total when the pile has 10 rows?',
      tier: 'challenge',
      correctAnswer: 55,
      xpValue: 25,
      hint: 'The total is the 10th triangular number: 10 x 11 / 2.',
    },
    // Challenge 2
    {
      id: 'sst-q17',
      type: 'multiple-choice',
      stem: 'A Manchester builder stacks bricks into solid cubes. The first stack uses 1 brick, the second uses 8 bricks, the third uses 27, the fourth uses 64. How many bricks does the 6th cube stack need?',
      tier: 'challenge',
      options: ['216', '125', '180', '343'],
      correctIndex: 0,
      xpValue: 25,
      misconceptionId: 'sst-mis-square-vs-cube',
      hint: 'These are cube numbers. The 6th is 6 x 6 x 6.',
    },
    // Challenge 3
    {
      id: 'sst-q18',
      type: 'numeric-entry',
      stem: 'A Lake District youth hostel sets out plates in a Fibonacci-type pattern: 1 plate on table 1, 1 on table 2, 2 on table 3, 3 on table 4, 5 on table 5. How many plates sit on table 9?',
      tier: 'challenge',
      correctAnswer: 34,
      xpValue: 25,
      misconceptionId: 'sst-mis-fibonacci-wrong-pair',
      hint: 'Keep adding the two previous terms: 5, 8, 13, 21, 34. The 9th in the list is 34.',
    },
    // Challenge 4
    {
      id: 'sst-q19',
      type: 'multiple-choice',
      stem: 'A Tunbridge Wells gardener lays paving slabs in square patches. Patch 1 uses 1 slab, patch 2 uses 4, patch 3 uses 9. The gardener has 200 slabs and wants the largest single square patch. How many slabs are in this largest patch?',
      tier: 'challenge',
      options: ['144', '169', '196', '225'],
      correctIndex: 2,
      xpValue: 25,
      hint: 'Find the largest n with n x n at most 200. Try n = 14: 14 x 14 = 196. Try n = 15: 15 x 15 = 225, too many.',
    },
    // Challenge 5
    {
      id: 'sst-q20',
      type: 'multiple-choice',
      stem: 'Tom writes the sequence 0, 1, 4, 9, 16. He says term 1 is 0 because the squares "start at zero." How should he describe the position of 9 in the standard list of square numbers 1, 4, 9, 16, 25, ...?',
      tier: 'challenge',
      options: [
        '9 is the 2nd square number, because squares start at 0.',
        '9 is the 4th square number, because n starts at 1.',
        '9 is the 3rd square number, because the position n starts at 1, not 0.',
        '9 is not a square number at all.',
      ],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'sst-mis-zero-as-first-term',
      hint: 'The standard convention sets position n = 1 for the first square (1 x 1 = 1).',
    },
    // Challenge 6
    {
      id: 'sst-q21',
      type: 'spot-misconception',
      stem: 'Aisha looks at the start of the cubes 1, 8, 27, 64 and the start of the squares 1, 4, 9, 16. She says "both lists start with 1, so the first cube and the first square count as the same term, and 1 should only appear once across both."',
      tier: 'challenge',
      statements: [
        {
          text: 'Aisha is right. 1 should only count once across both families, so the cubes really start at 8.',
          isMisconception: true,
        },
        {
          text: 'Actually each family is its own list. 1 is the 1st square because 1 x 1 = 1, and 1 is also the 1st cube because 1 x 1 x 1 = 1. The two lists overlap at 1, but the cubes still start at 1, not 8.',
          isMisconception: false,
        },
      ],
      xpValue: 25,
      misconceptionId: 'sst-mis-one-shared-across-families',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a special sequences question where pupils gave 16 in place of 64 for the 4th cube, conflating the square and cube rules.
    {
      id: 'sst-mis-square-vs-cube',
      description:
        'I think the nth cube is the same as the nth square, so I work out n x n instead of n x n x n.',
      triggerAnswer: 'cube-as-square',
      correction:
        'Actually n cubed means n multiplied by itself three times. The 4th square is 16, but the 4th cube is 64.',
      reExplanation:
        'For squares, term n is n x n. So 1, 4, 9, 16, 25. For cubes, term n is n x n x n. So 1, 8, 27, 64, 125. The 3rd square is 9, but the 3rd cube is 27. Always write out the rule before you compute. If the family is cubes, multiply by n one extra time.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a sequences question where pupils added a constant gap to extend 1, 3, 6, 10 as if it were arithmetic.
    {
      id: 'sst-mis-triangular-as-arithmetic',
      description:
        'I see 1, 3, 6 and read the first gap as 2, so I add 2 every time and miss that the gaps grow.',
      triggerAnswer: 'triangular-as-arithmetic',
      correction:
        'In fact triangular numbers have growing gaps 2, 3, 4, 5, .... The rule is n x (n + 1) / 2, not "add 2".',
      reExplanation:
        'Check the next two gaps before deciding. For 1, 3, 6, 10: gap 1 is 2, gap 2 is 3, gap 3 is 4. The gaps step up by 1, so this is the triangular family. The 5th term is 10 + 5 = 15, not 10 + 2 = 12.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2022, Paper 01 (Foundation, Non-calculator), commentary on a Fibonacci-type question where pupils added the term before last and the term two places back instead of the two consecutive terms before.
    {
      id: 'sst-mis-fibonacci-wrong-pair',
      description:
        'I add the wrong pair when extending a Fibonacci-type sequence, picking terms two apart instead of the two right before the missing one.',
      triggerAnswer: 'fibonacci-wrong-pair',
      correction:
        'Actually each Fibonacci-type term equals the sum of the two terms immediately before it, not two terms with a gap.',
      reExplanation:
        'For 1, 1, 2, 3, 5, 8, the next term is 5 + 8 = 13, not 3 + 8 = 11. Point to the two boxes just before the gap and add only those two. Write each new term down before computing the one after, so the pair stays correct.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 6 Algebra, "Special Sequences" page; the Common mistake callout on counting position numbers as 0, 1, 2, ... instead of 1, 2, 3, ... when applying n squared or n cubed.
    {
      id: 'sst-mis-off-by-one-position',
      description:
        'I shift the position number by one when I use the rule, so I work out the 10th square as 9 x 9 = 81 or as 11 x 11 = 121.',
      triggerAnswer: 'off-by-one-position',
      correction:
        'In fact the nth term uses the value of n itself. The 10th square is 10 x 10 = 100.',
      reExplanation:
        'Always label the position before substituting. For squares, position 1 gives 1 x 1 = 1, position 2 gives 2 x 2 = 4, and position 10 gives 10 x 10 = 100. Quick check: count the entries you would list before yours. To reach the 10th square, count 9 entries before it. The 9th square is 81, the 10th is 100.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 6 "Generalised Arithmetic" by Booth; case study of pupils omitting 1 from one of two overlapping number families on the grounds that "you only count it once".
    {
      id: 'sst-mis-one-shared-across-families',
      description:
        'I think 1 can only count as the first term of one of the special families, so I drop it from cubes or from squares to avoid repetition.',
      triggerAnswer: 'one-counted-once',
      correction:
        'Actually each family is its own list. 1 is the 1st square and 1 is also the 1st cube, by the standard convention that n starts at 1.',
      reExplanation:
        'The rules act on each family separately. For squares, 1 x 1 = 1, so the list is 1, 4, 9, 16, 25, .... For cubes, 1 x 1 x 1 = 1, so the list is 1, 8, 27, 64, 125, .... It is fine for the lists to share the value 1. Each list still starts at position n = 1.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a special sequences question where pupils began the list of squares with 0 (treating n = 0 as the first position) and then mislabelled every later term.
    {
      id: 'sst-mis-zero-as-first-term',
      description:
        'I start the list at position 0, so I treat 0 as the first square number and shift every label down by one.',
      triggerAnswer: 'zero-first-position',
      correction:
        'In fact the convention is that the first term sits at position n = 1, not n = 0. The 1st square is 1, the 1st cube is 1, and the 1st triangular number is 1.',
      reExplanation:
        'Although 0 x 0 = 0 and 0 x 0 x 0 = 0, the standard lists start with n = 1. So the squares are 1, 4, 9, 16, 25, ... and the 3rd square is 9. If you secretly counted from 0, you would call 4 the 3rd square, which clashes with every textbook and every exam mark scheme.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const sequencesSpecialTypesZoneNodes = [sequencesSpecialTypes]
