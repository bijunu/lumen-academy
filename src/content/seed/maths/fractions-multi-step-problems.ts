import type { SkillNode } from '@/types/content'

export const fractionsMultiStepProblems: SkillNode = {
  id: 'maths-fractions-multi-step-problems',
  title: 'Multi-step Fraction Word Problems',
  description:
    'Solve word problems that combine two or more fraction operations across addition, subtraction, multiplication, and division. Read the question carefully, plan the order of operations, watch the base of any "fraction of" step, and finish with a simplified answer in the right unit. Mixed numbers may need converting to improper fractions before any multiplication or division.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-fractions',
  zoneName: 'Fractions',
  tier: 'challenge',
  prerequisites: ['maths-fractions-mixed-numbers', 'maths-fractions-of-amount'],
  curriculum: {
    ks3Objective:
      'Solve problems involving the four operations applied to fractions; express one quantity as a fraction of another.',
    awardingBodies: {
      aqa: 'N8 Solve problems combining several operations on fractions, including fractions of amounts (GCSE Mathematics 8300)',
      edexcel: 'N8 Solve multi-step problems involving fractions in real contexts (GCSE Mathematics 1MA1)',
      ocr: '2.01b Solve word problems involving fractions and the four operations (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'fmsp-scene-framework',
      title: 'Read, Plan, Calculate, Check',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to walk through the four stages of a fraction word problem. Read the question and underline what is being asked. Plan the operations and the order they should happen in. Calculate one stage at a time, writing each line clearly. Check the answer is in the right form and units. Skipping the planning stage is the most common reason multi-step problems go wrong.',
      data: {
        viewBox: '0 0 100 100',
        hotspots: [
          {
            id: 'fmsp-h-read',
            x: 15,
            y: 25,
            label: 'Read',
            description: 'Underline the question. Note every fraction, every total, and the base each fraction is taken of.',
          },
          {
            id: 'fmsp-h-plan',
            x: 40,
            y: 25,
            label: 'Plan',
            description: 'List the operations in the order you will do them. Pick out what is multiplied, what is added or subtracted, and what is divided.',
          },
          {
            id: 'fmsp-h-calculate',
            x: 65,
            y: 25,
            label: 'Calculate',
            description: 'Work one stage at a time. Convert mixed numbers to improper fractions before multiplying or dividing.',
          },
          {
            id: 'fmsp-h-check',
            x: 90,
            y: 25,
            label: 'Check',
            description: 'Simplify the final fraction, confirm the units, and ask whether the size of the answer is sensible.',
          },
          {
            id: 'fmsp-h-base',
            x: 30,
            y: 70,
            label: 'Watch the base',
            description: 'A fraction of a fraction takes its share from the smaller amount, not from the whole. Track which base each step works on.',
          },
          {
            id: 'fmsp-h-units',
            x: 70,
            y: 70,
            label: 'Right unit',
            description: 'A question asking for litres needs litres. A question asking for the fraction left needs a fraction. Match the form to the wording.',
          },
        ],
      },
    },
    {
      id: 'fmsp-scene-bottle-wall',
      title: 'The Bottle Problem on a Fraction Wall',
      type: 'fraction-wall',
      instructions:
        'Click each section to see how the bottle problem decomposes. Start with a bottle that is 2/3 full of juice. Aisha drinks 1/4 of the juice. The juice she drinks is 1/4 of 2/3 of the bottle, which is 2/12 = 1/6 of the bottle. The juice left is 2/3 minus 1/6 of the bottle. With a common denominator of 6, that is 4/6 minus 1/6 = 3/6 = 1/2 of the bottle.',
      data: {
        wholeLabel: 'Bottle (1 whole) split into twelfths',
        rule: 'Step 1 multiply: 1/4 of 2/3 = 2/12 = 1/6 (what Aisha drinks). Step 2 subtract: 2/3 minus 1/6 = 4/6 minus 1/6 = 3/6 = 1/2 (what is left).',
        rows: [
          { denominator: 12, colour: '#3B82F6', shaded: 8, label: '2/3 of the bottle is juice' },
          { denominator: 12, colour: '#EC4899', shaded: 2, label: '1/4 of the juice is drunk = 1/6 of the bottle' },
          { denominator: 12, colour: '#22C55E', shaded: 6, label: 'Juice left = 1/2 of the bottle' },
        ],
        commonDenominator: 6,
        finalAnswer: '1/2 of the original bottle',
      },
    },
    {
      id: 'fmsp-scene-choose-operation',
      title: 'Choose the Operation from the Wording',
      type: 'diagram',
      instructions:
        'Look at how the words in a question signal which operation to use. The phrase "of" almost always means multiply, so 3/4 of 1/2 means 3/4 times 1/2. The phrase "left over" or "remaining" usually means subtract from the total. The phrase "altogether" or "in total" usually means add. The phrase "shared between" or "how many fit" usually means divide. A multi-step question stacks two or three of these cues, so pick them out one at a time and write the order on paper before you begin.',
      data: {
        cues: [
          { phrase: 'of', operation: 'multiply', example: '1/4 of 2/3 = 1/4 x 2/3 = 2/12 = 1/6' },
          { phrase: 'left over / remaining', operation: 'subtract', example: 'Started with 5/6, used 1/3 = 2/6. Left = 5/6 - 2/6 = 3/6 = 1/2' },
          { phrase: 'altogether / in total', operation: 'add', example: '2/5 + 3/10 = 4/10 + 3/10 = 7/10' },
          { phrase: 'shared between / how many fit', operation: 'divide', example: '3/4 divided into 1/8 pieces = 3/4 / 1/8 = 3/4 x 8/1 = 6 pieces' },
        ],
        warning: 'A question may use a word from one cue while really asking for a different operation. Read the whole sentence before deciding.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'fmsp-worked-1',
      title: 'The Bottle Problem: 2/3 full, Aisha drinks 1/4 of the juice',
      steps: [
        {
          explanation:
            'Read the question. A bottle is 2/3 full of juice. Aisha drinks 1/4 of the juice. We want the fraction of the original bottle that is left.',
          maths: 'Bottle = 1. Juice = 2/3. Aisha drinks = 1/4 of the juice.',
        },
        {
          explanation:
            'Plan. Step 1 multiply 1/4 by 2/3 to find what Aisha drinks as a fraction of the bottle. Step 2 subtract that from 2/3 to find what is left.',
          maths: 'Step 1: 1/4 x 2/3. Step 2: 2/3 - (answer from step 1).',
        },
        {
          explanation:
            'Calculate step 1. Multiply numerators and denominators.',
          maths: '1/4 x 2/3 = 2/12 = 1/6 of the bottle.',
        },
        {
          explanation:
            'Calculate step 2. Rewrite 2/3 with denominator 6, then subtract.',
          maths: '2/3 = 4/6. So 4/6 - 1/6 = 3/6.',
        },
        {
          explanation:
            'Check. Simplify 3/6 and confirm the unit. The question asked for a fraction of the bottle, so the answer is a fraction.',
          maths: '3/6 = 1/2 of the original bottle.',
        },
        {
          explanation: 'So the bottle is half full of juice after Aisha drinks.',
          maths: 'Answer: 1/2 of the original bottle.',
        },
      ],
    },
    {
      id: 'fmsp-worked-2',
      title: 'Mixed numbers: 2 1/2 metres of ribbon, cut pieces of 3/4 metre, then how much left (missing step revealed by the engine)',
      steps: [
        {
          explanation:
            'Read the question. A craft shop in Tunbridge Wells starts with 2 1/2 metres of ribbon and cuts 3 pieces of 3/4 of a metre each. We want the length left.',
          maths: 'Start = 2 1/2 m. Cut = 3 pieces of 3/4 m.',
        },
        {
          explanation:
            'Plan. Step 1 multiply 3 by 3/4 to find the total length cut. Step 2 subtract that from 2 1/2.',
          maths: 'Step 1: 3 x 3/4. Step 2: 2 1/2 - (answer from step 1).',
        },
        {
          explanation:
            'Convert the mixed number 2 1/2 to an improper fraction so subtraction is cleaner.',
        },
        {
          explanation:
            'Calculate step 1. Multiply.',
          maths: '3 x 3/4 = 9/4 m.',
        },
        {
          explanation:
            'Calculate step 2. Subtract 9/4 from 5/2. The common denominator is 4.',
          maths: '5/2 = 10/4. So 10/4 - 9/4 = 1/4 m.',
        },
        {
          explanation:
            'Check. The answer is in metres, and 1/4 m is smaller than 2 1/2 m, which is sensible.',
          maths: 'Answer: 1/4 m of ribbon left.',
        },
        {
          explanation: 'So 1/4 of a metre of ribbon remains after the three cuts.',
          maths: '2 1/2 - 9/4 = 1/4 m.',
        },
      ],
    },
  ],
  questions: [
    // Core 1: simple two-step add-then-subtract
    {
      id: 'fmsp-q1',
      type: 'multiple-choice',
      stem: 'A jug holds 5/6 of a litre of squash. Aisha pours in 1/6 of a litre more, then drinks 1/2 of a litre. How much squash is left in the jug, in litres?',
      tier: 'core',
      options: ['1/3', '1/2', '5/6', '1'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Step 1 add: 5/6 + 1/6 = 6/6 = 1 litre. Step 2 subtract: 1 - 1/2 = 1/2 litre.',
    },
    // Core 2: numeric, two-step add and subtract
    {
      id: 'fmsp-q2',
      type: 'numeric-entry',
      stem: 'A baker uses 1/4 kg of sugar in a sponge and 1/8 kg of sugar in icing. He started with 1 kg of sugar. How much sugar is left, in kilograms? Enter your answer as a decimal.',
      tier: 'core',
      correctAnswer: 0.625,
      tolerance: 0.001,
      unit: 'kg',
      xpValue: 10,
      hint: 'Used: 1/4 + 1/8 = 2/8 + 1/8 = 3/8 kg. Left: 1 - 3/8 = 5/8 = 0.625 kg.',
    },
    // Core 3: "of" then subtract from total
    {
      id: 'fmsp-q3',
      type: 'multiple-choice',
      stem: 'A Dover charity shop has 24 books on a shelf. The owner gives 1/3 of the books away on Saturday. How many books are still on the shelf?',
      tier: 'core',
      options: ['8', '16', '12', '24'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Given away: 1/3 of 24 = 8. Left: 24 - 8 = 16.',
      misconceptionId: 'fmsp-mis-wrong-base',
    },
    // Core 4: "of" applied twice over a whole
    {
      id: 'fmsp-q4',
      type: 'multiple-choice',
      stem: 'A Sevenoaks farm has a 60 metre row of fence. 3/4 of the row is painted blue. Of the painted section, 1/3 also has a white stripe. How long is the white-striped section, in metres?',
      tier: 'core',
      options: ['45 m', '20 m', '5 m', '15 m'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Painted: 3/4 of 60 = 45 m. Striped: 1/3 of 45 = 15 m.',
      misconceptionId: 'fmsp-mis-wrong-base',
    },
    // Core 5: numeric simple multi-step
    {
      id: 'fmsp-q5',
      type: 'numeric-entry',
      stem: 'A Year 7 class has 30 pupils. 2/5 of the pupils choose hockey at lunch and 1/3 of the pupils choose chess. The rest sit in the library. How many pupils sit in the library?',
      tier: 'core',
      correctAnswer: 8,
      unit: 'pupils',
      xpValue: 10,
      hint: 'Hockey: 2/5 of 30 = 12. Chess: 1/3 of 30 = 10. Library: 30 - 12 - 10 = 8.',
    },
    // Core 6: spot-misconception on missing a step
    {
      id: 'fmsp-q6',
      type: 'spot-misconception',
      stem: 'A bottle is 2/3 full of juice. Aisha drinks 1/4 of the juice. Liam says the bottle is now 1/4 less than 2/3 full, so the answer is 2/3 - 1/4.',
      tier: 'core',
      statements: [
        {
          text: 'Liam is right. You just subtract 1/4 from 2/3 to find what is left.',
          isMisconception: true,
        },
        {
          text: 'In fact 1/4 is the share of the juice Aisha drinks, not a share of the bottle. The amount she drinks is 1/4 of 2/3 = 1/6 of the bottle. Subtract 1/6 from 2/3 to get 1/2 of the bottle left.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fmsp-mis-wrong-base',
    },
    // Core 7: two-step add + simplify
    {
      id: 'fmsp-q7',
      type: 'multiple-choice',
      stem: 'A Manchester florist has 1/4 of a roll of green ribbon and 3/8 of a roll of green ribbon on the same spool. She buys another 1/8 of a roll. How much green ribbon does she have in total, in simplest form?',
      tier: 'core',
      options: ['3/4', '5/8', '4/8', '1/2'],
      correctIndex: 0,
      xpValue: 10,
      hint: 'Add: 1/4 + 3/8 + 1/8 = 2/8 + 3/8 + 1/8 = 6/8. Simplify: 6/8 = 3/4.',
      misconceptionId: 'fmsp-mis-skip-simplify-final',
    },
    // Confident 1: bottle-style two-step (multiply then subtract)
    {
      id: 'fmsp-q8',
      type: 'multiple-choice',
      stem: 'A water butt in Tunbridge Wells is 3/4 full at sunrise. Maya empties 1/3 of the water in the butt onto her vegetable beds. What fraction of the full butt is left at noon, in simplest form?',
      tier: 'confident',
      options: ['5/12', '1/2', '1/4', '7/12'],
      correctIndex: 1,
      xpValue: 15,
      hint: 'Emptied: 1/3 of 3/4 = 3/12 = 1/4 of the butt. Left: 3/4 - 1/4 = 2/4 = 1/2 of the butt.',
      misconceptionId: 'fmsp-mis-wrong-base',
    },
    // Confident 2: numeric mixed-number subtraction with borrow inside a context
    {
      id: 'fmsp-q9',
      type: 'numeric-entry',
      stem: 'A 4 1/4 metre roll of wire is on a Manchester workbench. Tom uses 1 3/4 metres for a project. How much wire is left, in metres? Enter your answer as a decimal.',
      tier: 'confident',
      correctAnswer: 2.5,
      tolerance: 0.001,
      unit: 'metres',
      xpValue: 15,
      hint: 'Borrow: 4 1/4 = 3 5/4. Then 3 5/4 - 1 3/4 = 2 2/4 = 2 1/2 = 2.5 m.',
      misconceptionId: 'fmsp-mis-mixed-borrow',
    },
    // Confident 3: multi-step divide then subtract
    {
      id: 'fmsp-q10',
      type: 'numeric-entry',
      stem: 'A Sevenoaks ribbon-maker has 6 metres of ribbon. She cuts pieces 2/3 of a metre long. After making the full pieces, how many metres of ribbon are left over?',
      tier: 'confident',
      correctAnswer: 0,
      unit: 'metres',
      xpValue: 15,
      hint: '6 / (2/3) = 6 x 3/2 = 9 pieces. Total used = 9 x 2/3 = 6 m. Left over = 0 m.',
    },
    // Confident 4: missing-step
    {
      id: 'fmsp-q11',
      type: 'missing-step',
      stem: 'Fill in the missing step. A Dover catering team has 3 1/2 kg of flour and uses 2/5 of it on Friday morning, then 1/4 kg on Friday afternoon. How much flour is left?',
      tier: 'confident',
      steps: [
        'Convert 3 1/2 to an improper fraction: 3 1/2 = 7/2 kg.',
        'Step 1 multiply: Friday morning uses 2/5 of 7/2 = 14/10 = 7/5 kg.',
        null,
        'Step 3 subtract: 7/2 - 7/5 - 1/4. Common denominator 20: 70/20 - 28/20 - 5/20 = 37/20 = 1 17/20 kg.',
        'Check: 1 17/20 kg is less than 3 1/2 kg, which is sensible. Final answer 1 17/20 kg.',
      ],
      missingStepIndex: 2,
      correctStep: 'Step 2 note the afternoon amount is already in kilograms: 1/4 kg, no conversion needed.',
      xpValue: 20,
      misconceptionId: 'fmsp-mis-missing-step',
    },
    // Confident 5: drag-order the steps
    {
      id: 'fmsp-q12',
      type: 'drag-order',
      stem: 'Drag the steps into the order you would use to solve: "A jug is 3/4 full. Aisha pours out 1/3 of the squash in the jug. What fraction of the jug is left?"',
      tier: 'confident',
      items: [
        'Subtract the amount poured out from the original 3/4 of the jug.',
        'Read the question and note that the base of 1/3 is the squash, not the jug.',
        'Multiply 1/3 by 3/4 to find the amount poured out as a fraction of the jug.',
        'Simplify the answer and confirm it is a fraction of the jug.',
      ],
      correctOrder: [1, 2, 0, 3],
      xpValue: 20,
      hint: 'Read first. Then multiply 1/3 x 3/4 = 1/4. Then subtract 3/4 - 1/4 = 1/2. Then simplify.',
    },
    // Confident 6: pure fraction-of-amount with multi-step money
    {
      id: 'fmsp-q13',
      type: 'multiple-choice',
      stem: 'A Manchester family budget for the week is £240. They spend 1/4 on food and 1/3 on transport. How much is left for everything else?',
      tier: 'confident',
      options: ['£60', '£80', '£140', '£100'],
      correctIndex: 3,
      xpValue: 15,
      hint: 'Food: 1/4 of 240 = £60. Transport: 1/3 of 240 = £80. Left: 240 - 60 - 80 = £100.',
    },
    // Confident 7: spot-misconception on choosing the wrong operation
    {
      id: 'fmsp-q14',
      type: 'spot-misconception',
      stem: 'A jug has 3/4 of a litre of squash. Tom pours the squash equally into 3 cups. He writes "3 cups means multiply, so each cup gets 3 x 3/4 = 9/4 of a litre".',
      tier: 'confident',
      statements: [
        {
          text: 'Tom is right. Sharing between 3 cups means multiply by 3.',
          isMisconception: true,
        },
        {
          text: 'In fact sharing between 3 cups means divide by 3. Each cup gets 3/4 / 3 = 3/4 x 1/3 = 3/12 = 1/4 of a litre.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fmsp-mis-wrong-operation',
    },
    // Confident 8: numeric, simplify at the end
    {
      id: 'fmsp-q15',
      type: 'numeric-entry',
      stem: 'A school field is 80 metres long. The groundskeeper marks 5/8 of the length for football and 1/4 of the length for cricket. The rest is bench seating. How many metres are for bench seating?',
      tier: 'confident',
      correctAnswer: 10,
      unit: 'metres',
      xpValue: 15,
      hint: 'Football: 5/8 of 80 = 50. Cricket: 1/4 of 80 = 20. Seating: 80 - 50 - 20 = 10 metres.',
      misconceptionId: 'fmsp-mis-drop-unit',
    },
    // Challenge 1: Bond-style bottle problem variant
    {
      id: 'fmsp-q16',
      type: 'numeric-entry',
      stem: 'A bottle in a Tunbridge Wells fridge is 5/6 full of apple juice. Maya drinks 2/5 of the juice in the bottle, then her brother drinks 1/3 of what is left. What fraction of the original bottle now remains? Enter the numerator of the answer in simplest form.',
      tier: 'challenge',
      correctAnswer: 1,
      xpValue: 25,
      hint: 'After Maya: 5/6 - (2/5 of 5/6) = 5/6 - 2/6 = 3/6 = 1/2. After brother: 1/2 - (1/3 of 1/2) = 1/2 - 1/6 = 3/6 - 1/6 = 2/6 = 1/3. Simplest form has numerator 1.',
      misconceptionId: 'fmsp-mis-wrong-base',
    },
    // Challenge 2: Bond-style money + mixed-number
    {
      id: 'fmsp-q17',
      type: 'multiple-choice',
      stem: 'A Sevenoaks bakery sells flour for £1.20 per kilogram. A customer buys 3 1/4 kg of flour and pays with a £10 note. How much change does the customer receive?',
      tier: 'challenge',
      options: ['£3.20', '£5.20', '£6.10', '£4.80'],
      correctIndex: 2,
      xpValue: 25,
      hint: 'Convert: 3 1/4 = 13/4. Cost: 13/4 x 1.20 = 15.60 / 4 = £3.90. Change: 10 - 3.90 = £6.10.',
      misconceptionId: 'fmsp-mis-final-unit',
    },
    // Challenge 3: Bond-style 2-3 sentence with unstated intermediate
    {
      id: 'fmsp-q18',
      type: 'multiple-choice',
      stem: 'A Manchester running club has 60 members. 2/3 of the members run on Saturdays. Of the Saturday runners, 1/4 also run on Wednesdays. The Wednesday-only runners number 5. How many members in total run on Wednesdays?',
      tier: 'challenge',
      options: ['15', '10', '20', '12'],
      correctIndex: 0,
      xpValue: 25,
      hint: 'Saturday: 2/3 of 60 = 40. Saturday and Wednesday: 1/4 of 40 = 10. Wednesday-only: 5. Total Wednesday = 10 + 5 = 15.',
    },
    // Challenge 4: free-text reasoning on choosing operations
    {
      id: 'fmsp-q19',
      type: 'free-text',
      stem: 'A water butt is 4/5 full at dawn in a Dover allotment. By midday Aisha has used 1/2 of the water in the butt on the vegetables. Explain in two or three sentences how you would find the fraction of the full butt that is left, and give the final simplified fraction.',
      tier: 'challenge',
      sampleAnswer:
        'The 1/2 is a share of the water in the butt, not a share of the full butt. Multiply 1/2 by 4/5 to find what Aisha used as a fraction of the full butt: 1/2 of 4/5 = 4/10 = 2/5. Subtract from 4/5: 4/5 - 2/5 = 2/5 of the full butt is left.',
      keywords: [
        'multiply',
        'subtract',
        '2/5',
        'water in the butt',
        'simplify',
      ],
      xpValue: 25,
      misconceptionId: 'fmsp-mis-wrong-base',
    },
    // Challenge 5: Bond-style mixed-number multi-step
    {
      id: 'fmsp-q20',
      type: 'numeric-entry',
      stem: 'A Tunbridge Wells craft shop starts the morning with 5 1/2 metres of ribbon. The owner cuts 4 pieces of 3/4 of a metre each, and later sells 1/4 of a metre to a customer. How much ribbon is left at the end of the day, in metres? Enter your answer as a decimal.',
      tier: 'challenge',
      correctAnswer: 2.25,
      tolerance: 0.001,
      unit: 'metres',
      xpValue: 25,
      hint: 'Cut: 4 x 3/4 = 3 m. Plus sale: 3 + 1/4 = 13/4 m. Start: 5 1/2 = 11/2 = 22/4 m. Left: 22/4 - 13/4 = 9/4 = 2 1/4 = 2.25 m.',
      misconceptionId: 'fmsp-mis-mixed-borrow',
    },
    // Challenge 6: Bond-style nested fractions in a time context
    {
      id: 'fmsp-q21',
      type: 'multiple-choice',
      stem: 'A Year 7 pupil spends 3/4 of an hour on maths homework on Monday. On Tuesday she spends 2/3 of Monday\'s time on maths. On Wednesday she spends 1/2 of Tuesday\'s time on maths. How many minutes in total has she spent on maths across the three days?',
      tier: 'challenge',
      options: ['75 minutes', '60 minutes', '105 minutes', '90 minutes'],
      correctIndex: 3,
      xpValue: 25,
      hint: 'Monday: 3/4 hr = 45 min. Tuesday: 2/3 of 45 = 30 min. Wednesday: 1/2 of 30 = 15 min. Total: 45 + 30 + 15 = 90 min.',
      misconceptionId: 'fmsp-mis-add-instead-of-multiply',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator); commentary on a multi-step fraction word problem where pupils carried out the first operation and stopped, missing the second stage entirely.
    {
      id: 'fmsp-mis-missing-step',
      description:
        'When a word problem needs two or more fraction operations, I do the first step, write down its answer, and stop without doing the second step.',
      triggerAnswer: 'missing-step',
      correction:
        'Actually a multi-step problem has more than one stage. After step one, read the question again and check whether another operation is still needed.',
      reExplanation:
        'For "a jug is 5/6 full, Aisha pours in 1/6 then drinks 1/2", step one adds 5/6 + 1/6 = 1 litre, but the question asks how much is left after drinking. Stopping at 1 litre answers the wrong question. Step two subtracts 1/2 to give 1/2 litre. Planning the order before any calculation makes the missing-step slip much rarer.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator); commentary on a sharing-fractions problem where pupils multiplied by the number of shares instead of dividing.
    {
      id: 'fmsp-mis-wrong-operation',
      description:
        'I read the word "shared" or "altogether" as a cue for one operation when the context actually needs a different one.',
      triggerAnswer: 'wrong-operation',
      correction:
        'In fact word cues are a guide, not a rule. Sketch the situation or restate it as a single sentence before picking the operation.',
      reExplanation:
        'A jug of 3/4 of a litre shared between 3 cups gives each cup 3/4 divided by 3, not 3/4 multiplied by 3. Sharing equally means dividing the amount by the number of shares. The phrase "3 cups" tempts pupils to multiply, but the cups are containers, not copies. Each cup holds 1/4 of a litre.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Fractions of Amounts" page, "Common mistake" callout warning that a fraction of a fraction is taken from the smaller amount, not the original whole.
    {
      id: 'fmsp-mis-wrong-base',
      description:
        'When a word problem says "X of Y" inside a longer chain, I take X of the original whole rather than X of Y.',
      triggerAnswer: 'wrong-base',
      correction:
        'Actually each "of" works on whatever amount is named just before it. Track what the base is at every step.',
      reExplanation:
        'A bottle is 2/3 full of juice and Aisha drinks 1/4 of the juice. The base of 1/4 is the juice, not the bottle. The amount Aisha drinks is 1/4 of 2/3 = 1/6 of the bottle. Subtract 1/6, not 1/4, from 2/3. Forgetting which base each step works on is the most common source of wrong answers in nested-fraction problems.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 02 (Foundation, Calculator); commentary on a multi-step fractions question where pupils gave 6/8 instead of 3/4 as the final answer.
    {
      id: 'fmsp-mis-skip-simplify-final',
      description:
        'I combine fractions correctly across the whole chain but leave the final answer un-simplified, writing 6/8 instead of 3/4.',
      triggerAnswer: 'skip-simplify-final',
      correction:
        'In fact the final answer should be in simplest form. Check whether the numerator and denominator share a common factor before writing the answer down.',
      reExplanation:
        'For 1/4 + 3/8 + 1/8, the sum is 2/8 + 3/8 + 1/8 = 6/8. Both 6 and 8 share a factor of 2, so divide: 6/8 = 3/4. Always finish with a simplified fraction unless the question explicitly asks for an un-simplified form. The answer 6/8 is correct in value but is not in the expected final form.',
    },
    // Source: NCETM Secondary Magazine, Issue 119, article on mixed-number arithmetic in word problems; pupils tried to subtract mixed numbers without borrowing when the second fractional part was larger than the first.
    {
      id: 'fmsp-mis-mixed-borrow',
      description:
        'When subtracting a mixed number whose fractional part is larger, I subtract the fractions the wrong way round to avoid borrowing.',
      triggerAnswer: 'mixed-borrow',
      correction:
        'Actually you must borrow one whole from the first mixed number and convert it to a fraction with the same denominator, then subtract column by column.',
      reExplanation:
        'For 4 1/4 - 1 3/4, you cannot take 3/4 out of 1/4. Borrow: 4 1/4 = 3 5/4. Then 5/4 - 3/4 = 2/4 = 1/2 and 3 - 1 = 2, giving 2 1/2 m. Swapping to 3/4 - 1/4 = 2/4 ignores the order the question gave and reports a different problem. Always borrow when the second fractional part is bigger.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator); commentary on a multi-step problem where pupils gave the answer as a fraction when the question asked for a decimal or a money amount.
    {
      id: 'fmsp-mis-final-unit',
      description:
        'I get a correct value but leave it in the wrong form, giving a fraction when the question asks for a decimal or a money amount.',
      triggerAnswer: 'final-unit',
      correction:
        'Actually the final answer must match the form asked for. Re-read the last sentence of the question to confirm whether it wants a fraction, a decimal, an integer, or a money amount.',
      reExplanation:
        'A baker sells 3 1/4 kg of flour at £1.20 per kg and pays with £10. The cost in fractions is 39/10 = £3.90 and the change is £6.10. Writing the answer as 61/10 is correct in value but does not match the money form the question asked for. Convert fractions to pence or pounds at the end of a money problem.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Fractions of Amounts" page, "Common mistake" callout on percentages and fractions in chains, where pupils added the percentages or fractions across stages instead of multiplying.
    {
      id: 'fmsp-mis-add-instead-of-multiply',
      description:
        'When a word problem chains two "of" steps, I add the two fractions together instead of multiplying them.',
      triggerAnswer: 'add-instead-of-multiply',
      correction:
        'In fact two "of" steps in a row multiply the fractions together. Adding them treats the two shares as separate amounts rather than nested ones.',
      reExplanation:
        'A row of fence is 3/4 painted blue and 1/3 of the painted section also has a white stripe. The white-striped fraction of the whole row is 1/3 of 3/4 = 3/12 = 1/4, not 1/3 + 3/4 = 13/12. The chain "of ... of" is a multiplication, not an addition, because each share sits inside the previous one. Adding gives an answer over a whole, which should be a warning sign.',
    },
    // Authored, no external source: classroom-observed slip where pupils strip the unit off a multi-step answer and report a bare number, leading to confusion when the original problem asked for litres or kilograms.
    {
      id: 'fmsp-mis-drop-unit',
      description:
        'After working out a correct multi-step fraction value, I strip off the unit and report a bare number.',
      triggerAnswer: 'drop-unit',
      correction:
        'Actually the unit is part of the answer. A multi-step problem usually mixes fractions of a whole with named amounts in litres, kilograms, or metres, so the unit must travel with the value.',
      reExplanation:
        'A baker uses 1/4 kg of sugar and 1/8 kg of icing sugar from a 1 kg bag and is left with 5/8. Reporting "5/8" alone hides the unit; the answer is 5/8 kg, not 5/8 of a bag. When the question names a unit, carry it through every step and write it next to the final value.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const fractionsMultiStepProblemsZoneNodes = [fractionsMultiStepProblems]
