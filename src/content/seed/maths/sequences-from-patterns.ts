import type { SkillNode } from '@/types/content'

export const sequencesFromPatterns: SkillNode = {
  id: 'maths-sequences-from-patterns',
  title: 'Sequences from Diagrams and Patterns',
  description:
    'Read a growing pictorial pattern, count the pieces at each stage to write the sequence of totals, find the common difference, and translate the picture into the position-to-term rule an + b. Use the matchstick or dot structure to explain why the rule has that shape, then verify at pattern 1 and one further pattern.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-sequences',
  zoneName: 'Sequences',
  tier: 'confident',
  prerequisites: ['maths-sequences-rules'],
  curriculum: {
    ks3Objective:
      'Generate terms of a sequence from either a term-to-term or a position-to-term rule, including in pictorial contexts (matchstick and dot patterns).',
    awardingBodies: {
      aqa: 'A23 Generate sequences from pictorial patterns and derive a rule (GCSE Mathematics 8300)',
      edexcel: 'A23 Generate sequences from diagrams and find the rule (GCSE Mathematics 1MA1)',
      ocr: '8.02a Use pictorial pattern sequences to derive position-to-term rules (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'sfp-scene-matchstick-T',
      title: 'A Matchstick T-shape that Grows by 4',
      type: 'labelled-diagram',
      instructions:
        'Click each hotspot to read off how the matchstick T-shape grows from pattern to pattern. Pattern 1 uses 5 matchsticks. Each new pattern adds 4 more matchsticks (one square of three new sticks for the stem, plus one fresh stick on the cap). So the totals run 5, 9, 13, 17, ... with a common difference of 4. The rule that gives this pattern is 4n + 1.',
      data: {
        viewBox: '0 0 600 240',
        svg:
          '<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">' +
          // Pattern 1: T shape, 5 sticks
          '<g stroke="#1d4ed8" stroke-width="4" stroke-linecap="round">' +
          '<line x1="40" y1="60" x2="120" y2="60"/>' +
          '<line x1="80" y1="60" x2="80" y2="200"/>' +
          '<line x1="40" y1="60" x2="40" y2="90"/>' +
          '<line x1="120" y1="60" x2="120" y2="90"/>' +
          '<line x1="40" y1="90" x2="120" y2="90"/>' +
          '</g>' +
          '<text x="80" y="225" font-family="sans-serif" font-size="13" text-anchor="middle">Pattern 1: 5 sticks</text>' +
          // Pattern 2: T plus one extension square + cap stick, 9 sticks total
          '<g stroke="#1d4ed8" stroke-width="4" stroke-linecap="round">' +
          '<line x1="220" y1="40" x2="300" y2="40"/>' +
          '<line x1="220" y1="60" x2="300" y2="60"/>' +
          '<line x1="260" y1="40" x2="260" y2="200"/>' +
          '<line x1="220" y1="60" x2="220" y2="90"/>' +
          '<line x1="300" y1="60" x2="300" y2="90"/>' +
          '<line x1="220" y1="90" x2="300" y2="90"/>' +
          '<line x1="240" y1="40" x2="240" y2="60"/>' +
          '<line x1="280" y1="40" x2="280" y2="60"/>' +
          '</g>' +
          '<text x="260" y="225" font-family="sans-serif" font-size="13" text-anchor="middle">Pattern 2: 9 sticks</text>' +
          // Pattern 3: 13 sticks
          '<g stroke="#1d4ed8" stroke-width="4" stroke-linecap="round">' +
          '<line x1="420" y1="20" x2="500" y2="20"/>' +
          '<line x1="420" y1="40" x2="500" y2="40"/>' +
          '<line x1="420" y1="60" x2="500" y2="60"/>' +
          '<line x1="460" y1="20" x2="460" y2="200"/>' +
          '<line x1="420" y1="60" x2="420" y2="90"/>' +
          '<line x1="500" y1="60" x2="500" y2="90"/>' +
          '<line x1="420" y1="90" x2="500" y2="90"/>' +
          '<line x1="440" y1="20" x2="440" y2="40"/>' +
          '<line x1="480" y1="20" x2="480" y2="40"/>' +
          '<line x1="440" y1="40" x2="440" y2="60"/>' +
          '<line x1="480" y1="40" x2="480" y2="60"/>' +
          '</g>' +
          '<text x="460" y="225" font-family="sans-serif" font-size="13" text-anchor="middle">Pattern 3: 13 sticks</text>' +
          '</svg>',
        hotspots: [
          {
            id: 'sfp-t-p1',
            x: 14,
            y: 30,
            label: 'Pattern 1: 5 matchsticks',
            description: 'The starting T-shape uses 1 cap stick and a square of 4 sticks on the stem.',
          },
          {
            id: 'sfp-t-p2',
            x: 44,
            y: 18,
            label: 'Pattern 2: 9 matchsticks',
            description: 'One extra cap stick plus a 3-stick extension to the stem add 4 sticks in total.',
          },
          {
            id: 'sfp-t-p3',
            x: 78,
            y: 18,
            label: 'Pattern 3: 13 matchsticks',
            description: 'Each new pattern always adds 4, so the totals run 5, 9, 13, ...',
          },
          {
            id: 'sfp-t-rule',
            x: 50,
            y: 92,
            label: 'Rule: 4n + 1',
            description: 'Common difference 4 sets the coefficient of n. At n = 1 the rule gives 5, matching the picture.',
          },
        ],
      },
    },
    {
      id: 'sfp-scene-dots-table',
      title: 'Dot Patterns Laid Out in a Table',
      type: 'diagram',
      instructions:
        'Read across the table to see how the square dot pattern grows. Pattern n has n rows of n dots, so the totals are 1, 4, 9, 16, 25 (square numbers). The triangular dot pattern adds one extra row each time and gives 1, 3, 6, 10, 15. The simpler row pattern (1 row of 3 dots, 2 rows of 3 dots, 3 rows of 3 dots) gives 3, 6, 9, 12, which has a constant difference of 3 and rule 3n.',
      data: {
        rows: [
          {
            patternName: 'Square dots',
            description: 'Pattern n is an n by n grid of dots.',
            totals: [1, 4, 9, 16, 25],
            differences: [3, 5, 7, 9],
            ruleType: 'quadratic',
            ruleNote: 'Differences are not constant, so the rule is not an + b. This is a square-number pattern.',
          },
          {
            patternName: 'Triangular dots',
            description: 'Pattern n has rows of 1, 2, 3, ..., n dots stacked.',
            totals: [1, 3, 6, 10, 15],
            differences: [2, 3, 4, 5],
            ruleType: 'quadratic',
            ruleNote: 'Differences grow by 1 each step, so the rule is not an + b. This is the triangular-number pattern.',
          },
          {
            patternName: 'Rows of 3 dots',
            description: 'Pattern n is n stacked rows, each row has 3 dots.',
            totals: [3, 6, 9, 12, 15],
            differences: [3, 3, 3, 3],
            ruleType: 'arithmetic',
            ruleNote: 'Constant difference 3, and the rule passes through 0, so the position-to-term rule is 3n.',
          },
        ],
        callout:
          'A constant difference is the green light for an + b. If the differences themselves change, the rule is not arithmetic and a simple an + b will not work.',
      },
    },
    {
      id: 'sfp-scene-recipe',
      title: 'Find-what-changes Recipe',
      type: 'diagram',
      instructions:
        'Read the four-step recipe and the worked Lego example. Step 1: count the pieces in pattern 1, pattern 2, pattern 3 to write the sequence of totals. Step 2: find the common difference; if it is constant, the rule has shape an + b with a equal to that difference. Step 3: test at n = 1 to find the constant b. Step 4: verify at one further pattern. Following the same recipe on every problem stops careless slips.',
      data: {
        steps: [
          {
            number: 1,
            title: 'Count the totals',
            detail: 'Look at pattern 1, pattern 2, pattern 3. Write down the number of pieces at each stage.',
          },
          {
            number: 2,
            title: 'Find the common difference',
            detail: 'Subtract pair by pair. If the difference is constant, the rule has shape an + b with a equal to that difference.',
          },
          {
            number: 3,
            title: 'Test at pattern 1 for the constant b',
            detail: 'Substitute n = 1 into an. Compare with the actual total. The difference between them is b.',
          },
          {
            number: 4,
            title: 'Verify at one further pattern',
            detail: 'Substitute another value of n and check the rule matches the picture. If it does, you are done.',
          },
        ],
        workedLegoExample: {
          context: 'A Lego stack at a Sevenoaks primary school grows by 3 bricks per stage. Stage 1 has 5 bricks, stage 2 has 8, stage 3 has 11.',
          totals: [5, 8, 11],
          commonDifference: 3,
          ruleStart: '3n',
          term1FromRuleStart: 3,
          actualTerm1: 5,
          adjustment: '+2',
          finalRule: '3n + 2',
          verifyAtN: 3,
          verifyComputation: '3 x 3 + 2 = 11',
        },
      },
    },
  ],
  workedExamples: [
    {
      id: 'sfp-worked-1',
      title: 'T-shape matchstick pattern: 4, 7, 10, 13, ... → 3n + 1',
      steps: [
        {
          explanation:
            'A school craft activity uses matchsticks to build T-shapes. Pattern 1 has 4 sticks, pattern 2 has 7, pattern 3 has 10, pattern 4 has 13. Write the totals as a sequence.',
          maths: 'totals: 4, 7, 10, 13',
        },
        {
          explanation:
            'Find the common difference between consecutive totals.',
          maths: '7 - 4 = 3, 10 - 7 = 3, 13 - 10 = 3',
        },
        {
          explanation:
            'The common difference is 3, so the rule has shape 3n + b.',
          maths: 'rule so far: 3n',
        },
        {
          explanation:
            'Test at n = 1. The rule 3n gives 3, but pattern 1 has 4 sticks.',
          maths: '3 x 1 = 3, actual = 4',
        },
        {
          explanation:
            'Work out the adjustment. Add the difference between actual term 1 and the rule value.',
          maths: 'b = 4 - 3 = +1',
        },
        {
          explanation:
            'Write the full position-to-term rule. The 3n counts the 3 new sticks added at each step, and the +1 is the single starting stick on the cap.',
          maths: 'nth pattern uses 3n + 1 sticks',
        },
        {
          explanation:
            'Verify at n = 4. The rule gives 13, which matches the picture.',
          maths: '3 x 4 + 1 = 13 (matches)',
        },
      ],
    },
    {
      id: 'sfp-worked-2',
      title: 'Triangular brick pattern: 5, 9, 13, 17, ... → fill in the multiplier',
      steps: [
        {
          explanation:
            'A Manchester bricklayer lays a row pattern where row 1 has 5 bricks, row 2 has 9, row 3 has 13, row 4 has 17. Write the totals.',
          maths: 'totals: 5, 9, 13, 17',
        },
        {
          explanation:
            'Find the common difference.',
          maths: '9 - 5 = 4, 13 - 9 = 4, 17 - 13 = 4',
        },
        {
          // Missing 'maths' line to mirror the partial-reveal convention.
          explanation:
            'The common difference is 4, so the coefficient of n in the position-to-term rule is 4.',
        },
        {
          explanation:
            'Test at n = 1. The rule 4n gives 4, but row 1 has 5 bricks. The actual is 1 larger, so b = +1.',
          maths: '4 x 1 = 4, actual = 5, so b = +1',
        },
        {
          explanation:
            'Write the full rule. Each row adds 4 new bricks (the new diagonal), and the +1 is the starting brick.',
          maths: 'nth row uses 4n + 1 bricks',
        },
        {
          explanation:
            'Verify at n = 3. The rule gives 13, which matches the picture.',
          maths: '4 x 3 + 1 = 13 (matches)',
        },
      ],
    },
  ],
  questions: [
    // Core 1 (MCQ)
    {
      id: 'sfp-q1',
      type: 'multiple-choice',
      stem: 'A matchstick pattern starts with 6 sticks at pattern 1 and adds 3 sticks at every step. What is the common difference of the sequence of totals?',
      tier: 'core',
      options: ['6', '3', '9', '1'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'The common difference is what each new pattern adds on top of the previous total.',
    },
    // Core 2 (numeric)
    {
      id: 'sfp-q2',
      type: 'numeric-entry',
      stem: 'A dot pattern has totals 4, 7, 10, 13 at patterns 1, 2, 3, 4. What is the common difference?',
      tier: 'core',
      correctAnswer: 3,
      xpValue: 10,
      hint: 'Subtract any total from the next to find the common difference.',
    },
    // Core 3 (numeric)
    {
      id: 'sfp-q3',
      type: 'numeric-entry',
      stem: 'A matchstick pattern follows the rule 4n + 1. How many sticks are in pattern 3?',
      tier: 'core',
      correctAnswer: 13,
      xpValue: 10,
      hint: 'Substitute n = 3 into 4n + 1. Multiply first, then add.',
    },
    // Core 4 (MCQ)
    {
      id: 'sfp-q4',
      type: 'multiple-choice',
      stem: 'A Lego stack has 5 bricks at stage 1, 8 at stage 2, 11 at stage 3. What is the coefficient of n in the position-to-term rule?',
      tier: 'core',
      options: ['2', '5', '3', '8'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'The coefficient of n is the common difference. 8 - 5 = 3.',
    },
    // Core 5 (numeric)
    {
      id: 'sfp-q5',
      type: 'numeric-entry',
      stem: 'A pattern starts with 7 dots at pattern 1 and adds 5 dots at each step. How many dots are in pattern 4?',
      tier: 'core',
      correctAnswer: 22,
      xpValue: 10,
      hint: 'Patterns 1 to 4: 7, 12, 17, 22. Or use the rule 5n + 2 and substitute n = 4.',
    },
    // Core 6 (MCQ)
    {
      id: 'sfp-q6',
      type: 'multiple-choice',
      stem: 'A craft pattern has totals 3, 6, 9, 12, ... A pupil writes the position-to-term rule as 3n + 0. Why is this a valid rule for this pattern?',
      tier: 'core',
      options: [
        'It is not valid. The rule must have a non-zero constant.',
        'The common difference is 3 so the rule starts as 3n. At n = 1, 3n gives 3, which already matches pattern 1, so the constant b is 0.',
        'It is valid only because 3 is an odd number.',
        '3n + 0 is the same as 3 + n.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'sfp-mis-constant-required',
    },
    // Core 7 (spot-misc) -- maps to pattern-zero misconception
    {
      id: 'sfp-q7',
      type: 'spot-misconception',
      stem: 'Mei looks at a matchstick T-pattern with totals 5, 9, 13, 17, ... She says "I will treat the starting picture as pattern 0, so the first total goes with n = 0, the second with n = 1, and so on."',
      tier: 'core',
      statements: [
        {
          text: 'Mei is right. Pattern 1 should match n = 0 because that gives the starting state.',
          isMisconception: true,
        },
        {
          text: 'Actually pattern 1 corresponds to n = 1 in the position-to-term rule. Pictures are normally counted from pattern 1, not pattern 0, so 5 lines up with n = 1 and the rule is 4n + 1.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'sfp-mis-pattern-zero',
    },
    // Confident 1 (MCQ)
    {
      id: 'sfp-q8',
      type: 'multiple-choice',
      stem: 'A matchstick T-pattern has totals 5, 9, 13, 17, ... Which position-to-term rule fits?',
      tier: 'confident',
      options: ['5n', '4n + 5', '4n + 1', 'n + 4'],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'sfp-mis-term-one-as-constant',
      hint: 'Common difference 4 sets the coefficient of n. At n = 1, 4n gives 4, but pattern 1 has 5 sticks, so b = +1.',
    },
    // Confident 2 (MCQ)
    {
      id: 'sfp-q9',
      type: 'multiple-choice',
      stem: 'A Lego stack at a Sevenoaks classroom has 4 bricks in stage 1, 7 in stage 2, 10 in stage 3. Which rule gives the number of bricks in stage n?',
      tier: 'confident',
      options: ['n + 3', '3n + 1', '4n - 1', '3n + 4'],
      correctIndex: 1,
      xpValue: 15,
      hint: 'Common difference 3. At n = 1, 3n gives 3, but stage 1 has 4 bricks, so b = +1.',
    },
    // Confident 3 (numeric)
    {
      id: 'sfp-q10',
      type: 'numeric-entry',
      stem: 'A school craft pattern uses 8, 13, 18, 23, ... matchsticks. How many matchsticks are in pattern 7? Use the rule 5n + 3.',
      tier: 'confident',
      correctAnswer: 38,
      xpValue: 15,
      misconceptionId: 'sfp-mis-double-not-multiply',
      hint: 'Substitute n = 7 into 5n + 3. 5 x 7 = 35, then + 3 = 38. Multiply n by the common difference 5, not by 2.',
    },
    // Confident 4 (MCQ)
    {
      id: 'sfp-q11',
      type: 'multiple-choice',
      stem: 'A dot pattern follows the rule 2n + 3. Which option lists the first four totals?',
      tier: 'confident',
      options: [
        '3, 5, 7, 9',
        '2, 5, 8, 11',
        '5, 8, 11, 14',
        '5, 7, 9, 11',
      ],
      correctIndex: 3,
      xpValue: 15,
      hint: 'Substitute n = 1, 2, 3, 4 into 2n + 3 in turn.',
    },
    // Confident 5 (numeric)
    {
      id: 'sfp-q12',
      type: 'numeric-entry',
      stem: 'A brick wall has 9 bricks in row 1, 13 in row 2, 17 in row 3. What is the value of the constant b in the rule 4n + b?',
      tier: 'confident',
      correctAnswer: 5,
      xpValue: 15,
      misconceptionId: 'sfp-mis-term-one-as-constant',
      hint: 'At n = 1, 4n gives 4. Row 1 has 9. So b = 9 - 4 = +5.',
    },
    // Confident 6 (missing-step)
    {
      id: 'sfp-q13',
      type: 'missing-step',
      stem: 'Fill in the missing step. Aisha is finding the position-to-term rule for a Lake District dry stone wall pattern with 6, 10, 14, 18, ... stones per row.',
      tier: 'confident',
      steps: [
        'The common difference is 10 - 6 = 4, so the rule starts as 4n.',
        'Test at n = 1: 4 x 1 = 4. But row 1 has 6 stones, so the rule needs an adjustment.',
        null,
        'So the rule is 4n + 2. Verify at n = 3: 4 x 3 + 2 = 14, which matches row 3.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Adjustment: 6 - 4 = +2. Add this constant to the rule.',
      xpValue: 20,
      misconceptionId: 'sfp-mis-add-difference-to-position',
    },
    // Confident 7 (drag-order)
    {
      id: 'sfp-q14',
      type: 'drag-order',
      stem: 'Drag these steps into the correct order for finding the position-to-term rule of a pictorial pattern.',
      tier: 'confident',
      items: [
        'Verify the rule at one further pattern to make sure it matches.',
        'Count the pieces in pattern 1, pattern 2, pattern 3 to write the totals.',
        'Find the common difference between consecutive totals.',
        'Test at n = 1 to find the constant b in the rule an + b.',
      ],
      correctOrder: [1, 2, 3, 0],
      xpValue: 20,
      misconceptionId: 'sfp-mis-skip-verification',
    },
    // Confident 8 (MCQ)
    {
      id: 'sfp-q15',
      type: 'multiple-choice',
      stem: 'A pupil looks at a matchstick T-pattern with totals 5, 9, 13, 17. They write the rule as the previous total plus 4. Why is this not a position-to-term rule?',
      tier: 'confident',
      options: [
        'It is a position-to-term rule.',
        'The common difference is wrong; it should be 5.',
        'They should have used 5n + 4.',
        'It is a term-to-term rule, written in terms of the previous total rather than the position n. A position-to-term rule must give the total directly from n, such as 4n + 1.',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'sfp-mis-term-to-term-not-position',
    },
    // Challenge 1 (MCQ)
    {
      id: 'sfp-q16',
      type: 'multiple-choice',
      stem: 'A Tunbridge Wells nursery glues stickers along the edge of growing square frames. Frame 1 has 4 stickers, frame 2 has 8, frame 3 has 12. The teacher needs the number of stickers on frame 25 for an order. How many stickers are needed?',
      tier: 'challenge',
      options: ['100', '96', '104', '50'],
      correctIndex: 0,
      xpValue: 25,
      hint: 'Common difference 4. At n = 1, 4n gives 4 which matches frame 1, so b = 0. Rule = 4n. At n = 25: 4 x 25 = 100.',
    },
    // Challenge 2 (numeric)
    {
      id: 'sfp-q17',
      type: 'numeric-entry',
      stem: 'A Dover seafront wall pattern uses 7 bricks in row 1, 11 in row 2, 15 in row 3. The builder has 95 bricks left in the lorry. What is the highest row number they can finish with what they have?',
      tier: 'challenge',
      correctAnswer: 23,
      xpValue: 25,
      hint: 'Rule: 4n + 3. Set 4n + 3 <= 95, so 4n <= 92, n <= 23. Row 23 needs 4 x 23 + 3 = 95 bricks exactly.',
    },
    // Challenge 3 (MCQ) -- Bond-style multi-step word problem
    {
      id: 'sfp-q18',
      type: 'multiple-choice',
      stem: 'A Sevenoaks Lego club builds a tower in stages. Stage 1 uses 8 bricks. Each new stage adds the same number of bricks. By stage 5 the tower uses 28 bricks in total at that stage. How many bricks does stage 10 use?',
      tier: 'challenge',
      options: ['53', '58', '50', '48'],
      correctIndex: 0,
      xpValue: 25,
      hint: 'Stage 1 = 8, stage 5 = 28. Difference over 4 steps is 20, so common difference = 5. Rule: 5n + 3. At n = 10: 5 x 10 + 3 = 53.',
    },
    // Challenge 4 (numeric)
    {
      id: 'sfp-q19',
      type: 'numeric-entry',
      stem: 'A matchstick pattern has totals 6, 10, 14, 18, ... A pupil notices the first total above 100 will run out their box of 105 matches. What is the pattern number whose total first exceeds 100?',
      tier: 'challenge',
      correctAnswer: 25,
      xpValue: 25,
      hint: 'Rule: 4n + 2. Set 4n + 2 > 100, so 4n > 98, n > 24.5. Smallest whole n is 25; 4 x 25 + 2 = 102.',
    },
    // Challenge 5 (spot-misc) -- interior vs perimeter counting
    {
      id: 'sfp-q20',
      type: 'spot-misconception',
      stem: 'A pattern is made of square tiles glued in a row. The teacher asks for the number of glued joins between tiles, not the number of tiles. Pattern 1 has 2 tiles and 1 join. Pattern 2 has 3 tiles and 2 joins. Pattern 3 has 4 tiles and 3 joins. Sam writes the rule as 2n + 1.',
      tier: 'challenge',
      statements: [
        {
          text: 'Sam is right. The rule 2n + 1 gives the number of joins because each new pattern adds 2 joins.',
          isMisconception: true,
        },
        {
          text: 'Actually the joins go 1, 2, 3, 4, ... with common difference 1, so the rule is n. Sam has counted tiles or some other piece, not the joins the teacher asked about.',
          isMisconception: false,
        },
      ],
      xpValue: 25,
      misconceptionId: 'sfp-mis-wrong-piece',
    },
    // Challenge 6 (MCQ)
    {
      id: 'sfp-q21',
      type: 'multiple-choice',
      stem: 'A Manchester school librarian shelves new picture books in growing displays. Display 1 holds 9 books. Each new display holds 6 more books than the one before. The school has 75 books on order. Which is the largest single display the librarian can fill, assuming each book is used in only one display?',
      tier: 'challenge',
      options: ['Display 11', 'Display 12', 'Display 13', 'Display 14'],
      correctIndex: 1,
      xpValue: 25,
      hint: 'Rule: 6n + 3. Set 6n + 3 <= 75, so 6n <= 72, n <= 12. Display 12 uses 6 x 12 + 3 = 75 books exactly.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a pictorial sequence question where pupils added the common difference to n rather than treating it as the coefficient of n.
    {
      id: 'sfp-mis-add-difference-to-position',
      description:
        'I see a pictorial pattern with common difference 4 and write the rule as n + 4, instead of 4n + b.',
      triggerAnswer: 'add-difference-to-position',
      correction:
        'Actually the common difference is the coefficient of n, not a constant added to n. The rule has shape an + b with a equal to the common difference.',
      reExplanation:
        'For a matchstick T-pattern with totals 5, 9, 13, 17, ... the common difference is 4. The rule is 4n + b. At n = 1, 4n gives 4, but pattern 1 has 5 sticks, so b = +1. The full rule is 4n + 1. The rule n + 4 would give 5, 6, 7, 8 instead, which fits only pattern 1 and then fails.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a pictorial sequence question where pupils labelled the starting picture as pattern 0 rather than pattern 1.
    {
      id: 'sfp-mis-pattern-zero',
      description:
        'I treat the first picture as pattern 0 instead of pattern 1, so I line up the first total with n = 0 in the rule.',
      triggerAnswer: 'pattern-zero',
      correction:
        'In fact pattern 1 corresponds to n = 1 in the position-to-term rule. Pictures are counted from 1, so the first total goes with n = 1.',
      reExplanation:
        'A T-pattern shows totals 5, 9, 13, 17, ... with the first picture labelled pattern 1. Setting n = 1 gives the first total, n = 2 gives the second, and so on. The rule that fits is 4n + 1, which at n = 1 returns 5. Using n = 0 for the first picture shifts every value of n and breaks the rule.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2022, Paper 01 (Foundation, Non-calculator), commentary on a pictorial sequence question where candidates miscounted the pieces being asked about (counted tiles instead of joins, or counted dots on the perimeter instead of inside).
    {
      id: 'sfp-mis-wrong-piece',
      description:
        'I count the wrong feature of the picture (for example the tiles when the question asks for the joins between them, or the perimeter dots when it asks for the interior ones).',
      triggerAnswer: 'wrong-piece',
      correction:
        'Actually re-read the question and the picture together. Mark the feature being counted on pattern 1 before moving on; everything else flows from getting that first count right.',
      reExplanation:
        'In a row-of-tiles pattern, the joins go 1, 2, 3, 4, ... so the rule is just n. The tiles themselves go 2, 3, 4, 5, ... so their rule is n + 1. Both rules are right, but only one answers the question that was asked. Marking the feature on pattern 1 before counting catches this every time.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 6 Algebra, "Sequences from Patterns" double page; the Common Mistake callout warning that a term-to-term description like 'add 4' is not a position-to-term rule.
    {
      id: 'sfp-mis-term-to-term-not-position',
      description:
        'I write the rule in terms of the previous total ("add 4") rather than in terms of the position n.',
      triggerAnswer: 'term-to-term-not-position',
      correction:
        'Actually a term-to-term description tells you how to get from one total to the next, but a position-to-term rule gives the total directly from n.',
      reExplanation:
        'For totals 5, 9, 13, 17, ... the term-to-term rule is "add 4 to the previous total". That is true but it does not let you jump straight to the 100th total. The position-to-term rule 4n + 1 does: 4 x 100 + 1 = 401. The question always asks for the position-to-term rule.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a pictorial sequence question where pupils used the value of the first total as the constant b.
    {
      id: 'sfp-mis-term-one-as-constant',
      description:
        'I take the value of pattern 1 and use it as the constant b in the rule an + b, so for 5, 9, 13, 17 I write 4n + 5 instead of 4n + 1.',
      triggerAnswer: 'term-one-as-constant',
      correction:
        'In fact b is the gap between pattern 1 and the value of an at n = 1, not the value of pattern 1 itself.',
      reExplanation:
        'For totals 5, 9, 13, 17, ... start with 4n. At n = 1, 4n gives 4. Pattern 1 has 5 sticks, so b = 5 - 4 = +1. The rule is 4n + 1. Using b = 5 would give 4 x 1 + 5 = 9 at n = 1, but pattern 1 has 5 sticks, so the rule fails the very first check.',
    },
    // Source: NCETM "Misconceptions with Key Objectives Year 7-8: Sequences and Patterns" guidance note, on pupils ignoring the +1 offset when reading a matchstick pattern and writing the bare an rule.
    {
      id: 'sfp-mis-constant-required',
      description:
        'I find the common difference, write the rule as an alone, and skip the check at pattern 1. So I write 4n for the totals 5, 9, 13, 17 and miss the +1 offset.',
      triggerAnswer: 'constant-required',
      correction:
        'Actually an on its own is the rule only when pattern 1 equals a. Otherwise add or subtract a constant b so the rule matches pattern 1.',
      reExplanation:
        'For 5, 9, 13, 17, ... the common difference is 4, so the rule starts as 4n. At n = 1, 4n gives 4, but pattern 1 has 5 sticks, so b = +1. The rule is 4n + 1. For totals 3, 6, 9, 12 the rule does end up as 3n alone because at n = 1, 3n gives 3 which already matches. The test at n = 1 tells you which case you are in.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 6 "Generalised Arithmetic" by Booth, on pupils doubling the position number rather than multiplying it by the common difference when reading a pictorial pattern.
    {
      id: 'sfp-mis-double-not-multiply',
      description:
        'I double the position number instead of multiplying it by the common difference, so for a pattern with common difference 3 at position 5 I write 2 x 5 = 10 instead of 3 x 5 = 15.',
      triggerAnswer: 'double-not-multiply',
      correction:
        'Actually the multiplier of n is the common difference, found by subtracting consecutive totals. Doubling is the special case where the common difference happens to be 2.',
      reExplanation:
        'For totals 3, 6, 9, 12, ... the common difference is 3, so position 5 should give 3 x 5 = 15 (and the rule is 3n). Doubling would give 10, which only matches if the common difference were 2. Always work out the difference first; do not assume it is 2.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a pictorial sequence question where candidates wrote down a rule that matched pattern 1 and stopped, missing slips at later patterns.
    {
      id: 'sfp-mis-skip-verification',
      description:
        'I write down a rule that matches pattern 1 and stop, without checking at any other pattern.',
      triggerAnswer: 'skip-verification',
      correction:
        'Actually a single matching pattern is not enough. Always verify the rule at pattern 2 or pattern 3 to be sure.',
      reExplanation:
        'For 5, 9, 13, 17, ... a pupil might guess the rule 5n - 0 because at n = 1 it gives 5, matching pattern 1. But at n = 2 the rule gives 10, while pattern 2 has 9 sticks. The correct rule is 4n + 1. Verifying at one further pattern catches this slip every time.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const sequencesFromPatternsZoneNodes = [sequencesFromPatterns]
