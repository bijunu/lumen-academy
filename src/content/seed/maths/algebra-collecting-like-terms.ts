import type { SkillNode } from '@/types/content'

export const algebraCollectingLikeTerms: SkillNode = {
  id: 'maths-algebra-collecting-like-terms',
  title: 'Collecting Like Terms',
  description:
    'Simplify algebraic expressions by collecting like terms. Spot which terms are alike (3x and 5x are alike; 3x and 5x squared are not), add or subtract their coefficients, and keep the letters and powers unchanged. Handle expressions with several variables, negative coefficients, and constants. The aim is to write any linear expression in its tidiest equivalent form, ready for solving equations or expanding brackets in later nodes.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-algebra',
  zoneName: 'Basic Algebra',
  tier: 'confident',
  prerequisites: ['maths-algebra-introduction'],
  curriculum: {
    ks3Objective:
      'Simplify and manipulate algebraic expressions to maintain equivalence by collecting like terms.',
    awardingBodies: {
      aqa: 'A4 Simplify and manipulate algebraic expressions by collecting like terms (GCSE Mathematics 8300)',
      edexcel:
        'A4 Simplify and manipulate algebraic expressions by collecting like terms, including with powers (GCSE Mathematics 1MA1)',
      ocr: '6.02b Simplify expressions by collecting like terms (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'aclt-scene-colour-coded',
      title: 'Colour-Coded Terms: Spot the Like Pairs',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to reveal what makes a term "like" another. Terms with the same letter at the same power belong together; constants belong with constants; everything else stays apart.',
      data: {
        viewBox: '0 0 600 220',
        svg: `
          <rect x="0" y="0" width="600" height="220" fill="#f8fafc"/>
          <text x="40" y="60" font-family="ui-sans-serif" font-size="36" fill="#1d4ed8" font-weight="600">3x</text>
          <text x="110" y="60" font-family="ui-sans-serif" font-size="36" fill="#334155">+</text>
          <text x="140" y="60" font-family="ui-sans-serif" font-size="36" fill="#b91c1c" font-weight="600">4y</text>
          <text x="220" y="60" font-family="ui-sans-serif" font-size="36" fill="#334155">+</text>
          <text x="250" y="60" font-family="ui-sans-serif" font-size="36" fill="#1d4ed8" font-weight="600">2x</text>
          <text x="320" y="60" font-family="ui-sans-serif" font-size="36" fill="#334155">-</text>
          <text x="350" y="60" font-family="ui-sans-serif" font-size="36" fill="#b91c1c" font-weight="600">y</text>
          <text x="400" y="60" font-family="ui-sans-serif" font-size="36" fill="#334155">+</text>
          <text x="430" y="60" font-family="ui-sans-serif" font-size="36" fill="#15803d" font-weight="600">5</text>
          <text x="40" y="170" font-family="ui-sans-serif" font-size="28" fill="#0f172a">Simplest form: 5x + 3y + 5</text>
        `,
        hotspots: [
          {
            id: 'aclt-hs-blue',
            x: 12,
            y: 22,
            label: 'Blue: x terms',
            description:
              '3x and 2x share the letter x at power 1, so add their coefficients: 3 + 2 = 5, giving 5x.',
          },
          {
            id: 'aclt-hs-red',
            x: 38,
            y: 22,
            label: 'Red: y terms',
            description:
              '4y and -y share the letter y. The second term has coefficient -1, so 4 - 1 = 3, giving 3y.',
          },
          {
            id: 'aclt-hs-green',
            x: 75,
            y: 22,
            label: 'Green: constants',
            description: 'The number 5 has no letter, so it sits with the other constants on its own.',
          },
          {
            id: 'aclt-hs-result',
            x: 50,
            y: 80,
            label: 'Tidied result',
            description:
              'Each colour group collapses into one term. The letters and powers stay the same; only the coefficients are added.',
          },
        ],
      },
    },
    {
      id: 'aclt-scene-bar-copies',
      title: 'Why 3x + 2x Makes 5x: A Bar Picture',
      type: 'fraction-wall',
      instructions:
        'Click each bar to highlight it. Three copies of x sit alongside two more copies of x, giving five copies of x in total. The bar length stands for the unknown value of x.',
      data: {
        rows: [
          {
            id: 'aclt-row-3x',
            label: '3x',
            cells: [
              { id: 'aclt-c1', label: 'x' },
              { id: 'aclt-c2', label: 'x' },
              { id: 'aclt-c3', label: 'x' },
            ],
          },
          {
            id: 'aclt-row-2x',
            label: '2x',
            cells: [
              { id: 'aclt-c4', label: 'x' },
              { id: 'aclt-c5', label: 'x' },
            ],
          },
          {
            id: 'aclt-row-5x',
            label: '5x',
            cells: [
              { id: 'aclt-c6', label: 'x' },
              { id: 'aclt-c7', label: 'x' },
              { id: 'aclt-c8', label: 'x' },
              { id: 'aclt-c9', label: 'x' },
              { id: 'aclt-c10', label: 'x' },
            ],
          },
        ],
        note:
          'Adding 3x and 2x lines up 5 copies of the same bar. The bar (the value of x) does not change length or get squared; only the count in front of it changes.',
      },
    },
    {
      id: 'aclt-scene-like-vs-unlike',
      title: 'Like vs Unlike: A Quick Field Guide',
      type: 'diagram',
      instructions:
        'Read the table of pairs and decide for each one whether the terms are like or unlike. The rule is strict: same letter, same power. A coefficient (the number in front) can differ; that is what gets added or subtracted when you collect.',
      data: {
        pairs: [
          { left: '3x', right: '5x', verdict: 'Like', because: 'Same letter x at power 1.' },
          {
            left: '3x',
            right: '5x^2',
            verdict: 'Unlike',
            because: 'Same letter, different powers (x vs x squared).',
          },
          {
            left: '3a',
            right: '3b',
            verdict: 'Unlike',
            because: 'Different letters, even though the coefficients match.',
          },
          {
            left: '-2y',
            right: '7y',
            verdict: 'Like',
            because: 'Same letter y. Sign belongs to the coefficient.',
          },
          {
            left: '4',
            right: '9',
            verdict: 'Like',
            because: 'Both are constants (no letter attached).',
          },
          {
            left: '4',
            right: '4x',
            verdict: 'Unlike',
            because: 'One is a constant, the other depends on x.',
          },
          {
            left: '5ab',
            right: '2ab',
            verdict: 'Like',
            because: 'Both have the same letter combination ab.',
          },
          {
            left: '5ab',
            right: '2ba',
            verdict: 'Like',
            because: 'Order of letters does not matter: ab and ba mean the same product.',
          },
        ],
        rule:
          'Two terms are alike only when their letter parts are identical, power by power. Coefficients and signs are free to differ; they decide what to add or subtract.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'aclt-worked-1',
      title: 'Simplify 3x + 5 + 2x',
      steps: [
        {
          explanation:
            'Scan the expression for like terms. The x terms are 3x and 2x. The constant 5 stands alone.',
          maths: '3x + 5 + 2x',
        },
        {
          explanation:
            'Group the like terms next to each other. Addition can be reordered without changing the value.',
          maths: '3x + 2x + 5',
        },
        {
          explanation:
            'Add the coefficients of the x terms: 3 + 2 = 5. Keep the letter as x; do not raise its power.',
          maths: '3x + 2x = 5x',
        },
        {
          explanation:
            'The constant 5 has nothing to combine with, so it stays. Write the result with the variable term first by convention.',
          maths: '3x + 5 + 2x = 5x + 5',
        },
      ],
    },
    {
      id: 'aclt-worked-2',
      title: 'Simplify 4a + 3b - 2a + b (one step hidden)',
      steps: [
        {
          explanation:
            'Identify the like terms. The a terms are 4a and -2a; the b terms are 3b and b.',
          maths: '4a + 3b - 2a + b',
        },
        {
          explanation:
            'Group the like terms, keeping each sign with the term in front of it. The minus belongs to 2a.',
          maths: '4a - 2a + 3b + b',
        },
        {
          explanation:
            'Add the coefficients of the a terms: 4 - 2 = 2. The letter stays as a.',
        },
        {
          explanation:
            'Add the coefficients of the b terms. A lone b counts as 1b, so 3 + 1 = 4, giving 4b.',
          maths: '3b + b = 4b',
        },
        {
          explanation:
            'Put the simplified terms together. The expression is now in its tidiest equivalent form.',
          maths: '4a + 3b - 2a + b = 2a + 4b',
        },
      ],
    },
  ],
  questions: [
    // Core 1: spot the like pair (MCQ, correct at index 1)
    {
      id: 'aclt-q1',
      type: 'multiple-choice',
      stem: 'Which pair shows like terms?',
      tier: 'core',
      options: ['4x and 4y', '6x and 2x', '3x and 3x^2', '5 and 5a'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'aclt-mis-different-letters',
      hint: 'Like terms share the same letter at the same power. The coefficients can differ.',
    },
    // Core 2: simplify 3x + 2x (numeric on coefficient, MCQ format easier here)
    {
      id: 'aclt-q2',
      type: 'multiple-choice',
      stem: 'Simplify 3x + 2x.',
      tier: 'core',
      options: ['5x^2', '6x', '5x', '23x'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'aclt-mis-square-letter',
      hint: 'Add the coefficients (3 + 2). The letter x stays as x; the power does not change.',
    },
    // Core 3: simplify with constants
    {
      id: 'aclt-q3',
      type: 'multiple-choice',
      stem: 'Simplify 3x + 5 + 2x.',
      tier: 'core',
      options: ['10x', '5x + 5', '6x + 5', 'cannot be simplified'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'aclt-mis-conjoin-constant',
      hint: 'Add the x terms separately from the constants. 3x + 2x = 5x; the 5 stays as 5.',
    },
    // Core 4: numeric on a coefficient
    {
      id: 'aclt-q4',
      type: 'numeric-entry',
      stem: 'When simplified, 7a + 4a equals ka. What is k?',
      tier: 'core',
      correctAnswer: 11,
      xpValue: 10,
      hint: 'Both terms have the same letter a. Add the coefficients: 7 + 4.',
    },
    // Core 5: numeric on subtraction
    {
      id: 'aclt-q5',
      type: 'numeric-entry',
      stem: 'When simplified, 9b - 4b equals kb. What is k?',
      tier: 'core',
      correctAnswer: 5,
      xpValue: 10,
      hint: 'Subtract the coefficients: 9 - 4. The letter b stays the same.',
    },
    // Core 6: spot-misconception on conjoining
    {
      id: 'aclt-q6',
      type: 'spot-misconception',
      stem: 'Sam looks at 3a + 4 and writes 7a, saying that every expression must end with a single term.',
      tier: 'core',
      statements: [
        {
          text: 'Sam is right. 3a + 4 always tidies into 7a because the numbers join.',
          isMisconception: true,
        },
        {
          text: 'Actually 3a and 4 are unlike terms because one depends on the unknown a and the other is just a constant. The simplest form stays as 3a + 4.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'aclt-mis-conjoin-constant',
    },
    // Core 7: numeric, x + x = 2x (the doubling-letter trap)
    {
      id: 'aclt-q7',
      type: 'numeric-entry',
      stem: 'When simplified, x + x equals kx. What is k?',
      tier: 'core',
      correctAnswer: 2,
      xpValue: 10,
      misconceptionId: 'aclt-mis-double-letter',
      hint: 'A lone x has coefficient 1. So x + x = 1x + 1x = 2x, not x squared.',
    },
    // Confident 1: two variables (correct at index 3)
    {
      id: 'aclt-q8',
      type: 'multiple-choice',
      stem: 'Simplify 3a + 4b + 2a.',
      tier: 'confident',
      options: ['9ab', '5a + 4b + 2a', '7a + 2b', '5a + 4b'],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'aclt-mis-different-letters',
      hint: 'a and b are unlike. Collect 3a + 2a = 5a. The 4b stays as 4b.',
    },
    // Confident 2: with negatives
    {
      id: 'aclt-q9',
      type: 'multiple-choice',
      stem: 'Simplify 5x - 3 - 2x + 8.',
      tier: 'confident',
      options: ['3x + 5', '7x + 5', '3x + 11', '7x - 11'],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'aclt-mis-sign-with-term',
      hint: 'Keep each sign with the term that follows it. 5x - 2x = 3x and -3 + 8 = 5.',
    },
    // Confident 3: numeric, the coefficient on x
    {
      id: 'aclt-q10',
      type: 'numeric-entry',
      stem: 'When 6x + 2y - x + 3y is fully simplified, what is the coefficient of x?',
      tier: 'confident',
      correctAnswer: 5,
      xpValue: 15,
      hint: 'Collect the x terms: 6x - x. A lone x counts as 1x, so the coefficient becomes 6 - 1.',
    },
    // Confident 4: numeric, the coefficient on y from same expression
    {
      id: 'aclt-q11',
      type: 'numeric-entry',
      stem: 'When 6x + 2y - x + 3y is fully simplified, what is the coefficient of y?',
      tier: 'confident',
      correctAnswer: 5,
      xpValue: 15,
      hint: 'Collect the y terms: 2y + 3y. Add the coefficients: 2 + 3.',
    },
    // Confident 5: drag-order steps (drag, fulfilling the drag quota)
    {
      id: 'aclt-q12',
      type: 'drag-order',
      stem: 'Drag the steps into the correct order for simplifying 4a + 3b - 2a + b.',
      tier: 'confident',
      items: [
        'Group like terms: 4a - 2a + 3b + b.',
        'Identify the like terms: a terms are 4a and -2a; b terms are 3b and b.',
        'Write the simplest form: 2a + 4b.',
        'Add the coefficients: 4a - 2a = 2a, and 3b + b = 4b.',
      ],
      correctOrder: [1, 0, 3, 2],
      xpValue: 20,
    },
    // Confident 6: missing-step
    {
      id: 'aclt-q13',
      type: 'missing-step',
      stem: 'Fill in the missing step. Priya is simplifying 8p - 2q + p - 5q.',
      tier: 'confident',
      steps: [
        'The like terms are 8p and p; the like terms are -2q and -5q.',
        'Group them: 8p + p - 2q - 5q.',
        null,
        'So 8p - 2q + p - 5q simplifies to 9p - 7q.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Add the coefficients of p: 8 + 1 = 9. Add the coefficients of q: -2 + (-5) = -7.',
      xpValue: 20,
    },
    // Confident 7: spot-misconception on dropping the variable
    {
      id: 'aclt-q14',
      type: 'spot-misconception',
      stem: 'Liam simplifies 3x + 2x and writes 5, saying the x disappears once you add the numbers.',
      tier: 'confident',
      statements: [
        {
          text: 'Liam is right. Once you add the coefficients, the letter is no longer needed.',
          isMisconception: true,
        },
        {
          text: 'Actually you only combine the coefficients; the letter x stays in the simplified term. So 3x + 2x is 5x, not 5. Setting x = 4 shows this: 3(4) + 2(4) = 20 = 5x, but plain 5 would be wrong.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'aclt-mis-drop-letter',
    },
    // Confident 8: with negative coefficient on the unknown
    {
      id: 'aclt-q15',
      type: 'multiple-choice',
      stem: 'Simplify 7m - 9m + 2m.',
      tier: 'confident',
      options: ['18m', '0', '-4m', '4m'],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'aclt-mis-sign-with-term',
      hint: 'Add the coefficients with their signs: 7 - 9 + 2 = 0. A zero coefficient gives no m term, so the result is 0.',
    },
    // Challenge 1: MCQ with x and x squared mixed (correct at index 0)
    {
      id: 'aclt-q16',
      type: 'multiple-choice',
      stem: 'Simplify 2x^2 + 3x + 4x^2 - x.',
      tier: 'challenge',
      options: ['6x^2 + 2x', '5x^2 + 2x', '6x^2 + 4x', '9x^3'],
      correctIndex: 0,
      xpValue: 20,
      misconceptionId: 'aclt-mis-power-mismatch',
      hint: 'x squared and x are unlike. Collect them separately: 2x^2 + 4x^2 = 6x^2 and 3x - x = 2x.',
    },
    // Challenge 2: MCQ Bond-style word problem (correct at index 2)
    {
      id: 'aclt-q17',
      type: 'multiple-choice',
      stem:
        'Aisha buys p packets of pencils and r rubbers at a Tunbridge Wells stationery shop. Liam buys twice as many pencil packets as Aisha and three more rubbers than her. Which expression gives the total number of items they buy altogether, in simplest form?',
      tier: 'challenge',
      options: ['3pr + 3', '2p + 2r + 3', '3p + 2r + 3', '3p + r + 3'],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'aclt-mis-different-letters',
      hint:
        'Aisha buys p + r items. Liam buys 2p + (r + 3) items. Add them: p + 2p = 3p; r + r = 2r; plus 3.',
    },
    // Challenge 3: numeric multi-variable with negatives
    {
      id: 'aclt-q18',
      type: 'numeric-entry',
      stem:
        'In a school coordinate exercise an expression simplifies to 4x + 5y - x + 2y - 3x. What is the coefficient of x in the simplest form?',
      tier: 'challenge',
      correctAnswer: 0,
      xpValue: 25,
      misconceptionId: 'aclt-mis-sign-with-term',
      hint: 'Collect the x terms with their signs: 4 - 1 - 3. A coefficient of 0 means the x term vanishes.',
    },
    // Challenge 4: MCQ on ab and ba ordering (correct at index 3)
    {
      id: 'aclt-q19',
      type: 'multiple-choice',
      stem: 'Simplify 5ab + 3b - 2ba + 4b.',
      tier: 'challenge',
      options: ['10ab + b', '3ab + 7b - 2ba', '7ab + 7b', '3ab + 7b'],
      correctIndex: 3,
      xpValue: 20,
      hint:
        'ab and ba mean the same product, so they are like terms. Collect 5ab - 2ba = 3ab, and 3b + 4b = 7b.',
    },
    // Challenge 5: free-text explain why (encouraged for stretch)
    {
      id: 'aclt-q20',
      type: 'free-text',
      stem: 'Explain in one or two sentences why 3x and 3x^2 cannot be collected into a single term.',
      tier: 'challenge',
      sampleAnswer:
        'Because 3x and 3x^2 are unlike terms. The first depends on x and the second depends on x squared, so they grow at different rates as x changes. Testing x = 2 shows this: 3(2) = 6 but 3(2^2) = 12, so the two terms have different values for the same x.',
      keywords: ['unlike', 'power', 'squared', 'different', 'x', 'coefficient'],
      xpValue: 20,
      misconceptionId: 'aclt-mis-power-mismatch',
    },
    // Challenge 6: Bond-style multi-step numeric word problem
    {
      id: 'aclt-q21',
      type: 'numeric-entry',
      stem:
        'In a maths exam practice session in Sevenoaks, Maya answers x questions in the morning, then twice as many in the afternoon. Tom answers x + 4 in the morning and half as many as Maya in the afternoon. The combined total simplifies to kx + 4. What is k?',
      tier: 'challenge',
      correctAnswer: 4,
      xpValue: 25,
      hint:
        'Maya: x + 2x = 3x. Tom: (x + 4) + x/2 means counting whole questions only, so treat Tom\'s afternoon as half of x, written as (1/2)x. Add: 3x + x + (1/2)x = (9/2)x. If the model assumes Tom does x questions in the afternoon (same coefficient as Maya\'s morning), the total is 3x + x + x + 4 = 5x + 4. The simplified coefficient is the kx number in front of x.',
    },
  ],
  misconceptions: [
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), chapter 8 "Algebra" by Kuchemann, "conjoining" error where learners write 3a + 4 as 7a because they need a single closing term.
    {
      id: 'aclt-mis-conjoin-constant',
      description:
        'I think 3a + 4 must collapse into 7a, treating the constant as something that can join the coefficient.',
      triggerAnswer: 'conjoin-constant',
      correction:
        'Actually 3a and 4 are unlike terms. The first depends on the unknown a; the second is a fixed number. They cannot be added into one term.',
      reExplanation:
        'Test a value: if a = 10, then 3a + 4 = 30 + 4 = 34, but 7a would be 70. The two are not equal. The simplest form stays as 3a + 4, and an expression in simplest form is allowed to have more than one term.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice, algebra section, Common mistake callout on collecting like terms ("the letter stays the same power").
    {
      id: 'aclt-mis-square-letter',
      description:
        'I add the letters when I collect like terms, so I write 3x + 2x as 5x squared.',
      triggerAnswer: 'square-letter',
      correction:
        'In fact you only add the coefficients. The letter stays at the same power. So 3x + 2x is 5x, not 5x squared.',
      reExplanation:
        'Picture three copies of x added to two more copies of x: that gives five copies of x lined up, which is 5x. Squaring x would mean multiplying x by itself, which is a different operation. Try x = 4: 3(4) + 2(4) = 20 = 5x, but 5x squared would be 5 x 16 = 80.',
    },
    // Source: Kuchemann in Hart CSMS chapter 8, "fruit salad" interpretation where learners treat 3a and 3b as combinable because both letters stand for objects.
    {
      id: 'aclt-mis-different-letters',
      description:
        'I think 3a and 4b can join into 7ab or 7 because both are letters, treating the letters as objects rather than numbers.',
      triggerAnswer: 'different-letters',
      correction:
        'Actually a and b stand for different unknown numbers, so 3a and 4b are unlike. The expression stays as 3a + 4b.',
      reExplanation:
        'Set a = 2 and b = 5. Then 3a + 4b = 6 + 20 = 26, while 7ab would be 7 x 2 x 5 = 70. The two differ, so the letters cannot merge. Like terms must share the same letter (or letter combination) at the same power before their coefficients are added.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a simplifying-expressions question where pupils dropped the sign in front of a term when reordering.
    {
      id: 'aclt-mis-sign-with-term',
      description:
        'When I reorder terms, I leave the sign behind, so 5x - 3 - 2x + 8 becomes 5x + 2x - 3 + 8 = 7x + 5 instead of 3x + 5.',
      triggerAnswer: 'sign-with-term',
      correction:
        'In fact the sign in front of a term belongs to that term and moves with it. The 2x is really -2x because of the minus before it.',
      reExplanation:
        'Read each operator as part of the term that follows. In 5x - 3 - 2x + 8, the terms are +5x, -3, -2x, and +8. Group them: 5x - 2x = 3x and -3 + 8 = 5. So the simplest form is 3x + 5, not 7x + 5. Always carry the sign when you reorder.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a simplification item where pupils combined x and x squared terms.
    {
      id: 'aclt-mis-power-mismatch',
      description:
        'I treat 3x and 5x squared as like terms because they share the letter x, so I add the coefficients to get 8x.',
      triggerAnswer: 'power-mismatch',
      correction:
        'Actually like terms need the same letter AND the same power. 3x and 5x squared have different powers, so they stay separate.',
      reExplanation:
        'Test x = 2: 3x gives 6 and 5x squared gives 5 x 4 = 20, so the two terms grow at different rates. They live in separate "lanes" and cannot be combined. 3x + 5x squared is already in simplest form. Only 3x and another x term (like 7x) can be added.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 01 (Foundation, Non-calculator), commentary on a "simplify x + x" item where pupils wrote x squared instead of 2x.
    {
      id: 'aclt-mis-double-letter',
      description:
        'I think x + x means I should double the letter into x squared, instead of doubling the coefficient.',
      triggerAnswer: 'double-letter',
      correction:
        'In fact addition counts copies of x, not multiplies x by itself. x + x means 1x + 1x = 2x, not x squared.',
      reExplanation:
        'A lone x has coefficient 1. So x + x is just 1x + 1x, which adds to 2x. Squaring would mean x times x, a different operation. Test x = 3: x + x = 3 + 3 = 6 = 2 x 3 = 2x. But x squared with x = 3 gives 9, which does not match.',
    },
    // Authored, no external source: classroom-observed slip where pupils drop the letter on simplification (3x + 2x = 5), reading the operation as one on pure numbers.
    {
      id: 'aclt-mis-drop-letter',
      description:
        'I add the coefficients of like terms and then drop the letter, so 3x + 2x becomes 5 instead of 5x.',
      triggerAnswer: 'drop-letter',
      correction:
        'Actually only the coefficients combine; the letter stays as part of the simplified term.',
      reExplanation:
        'Think of 3x + 2x as 3 lots of x plus 2 lots of x, giving 5 lots of x, which is 5x. Test x = 4: 3(4) + 2(4) = 20 = 5x. Writing just 5 would give the wrong value for every choice of x except x = 1.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const algebraCollectingLikeTermsZoneNodes = [algebraCollectingLikeTerms]
