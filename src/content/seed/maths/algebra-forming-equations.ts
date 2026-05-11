import type { SkillNode } from '@/types/content'

export const algebraFormingEquations: SkillNode = {
  id: 'maths-algebra-forming-equations',
  title: 'Forming Equations from Word Problems',
  description:
    'Translate a word problem into a linear equation in one unknown, then solve it. Cover "I think of a number" puzzles, perimeter problems where one side is x, age problems, money problems, and sharing problems with a constraint. The focus is the translation step: define what x represents, read the cue words for each operation, and write a balanced equation. Solving the equation is the prerequisite skill; the work here is reading the problem precisely and writing it as algebra.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-algebra',
  zoneName: 'Basic Algebra',
  tier: 'challenge',
  prerequisites: ['maths-algebra-simple-equations'],
  curriculum: {
    ks3Objective:
      'Translate simple situations or procedures into algebraic expressions or formulae; derive equations and solve them.',
    awardingBodies: {
      aqa: 'A18 Form linear equations from word problems and solve (GCSE Mathematics 8300)',
      edexcel: 'A18 Derive an equation from a problem and solve it (GCSE Mathematics 1MA1)',
      ocr: '6.04b Form and solve linear equations from word problems (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'afe-scene-translate-solve',
      title: 'The Translate then Solve Workflow',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see one stage in the workflow. The puzzle reads "I think of a number, multiply by 3, then add 4, and the result is 19". Stage 1: define the unknown. Stage 2: read each cue word and turn it into algebra. Stage 3: write the equation. Stage 4: solve using the inverse operations from the prerequisite node. Stage 5: read the value back into the original wording to check it makes sense.',
      data: {
        viewBox: '0 0 100 100',
        hotspots: [
          {
            id: 'afe-h-define',
            x: 12,
            y: 30,
            label: 'Define x',
            description: 'Let x be the number I thought of. Always start by naming what x stands for.',
          },
          {
            id: 'afe-h-translate',
            x: 32,
            y: 30,
            label: 'Translate the cues',
            description: '"Multiply by 3" gives 3x. "Then add 4" gives 3x + 4. "Result is 19" gives = 19.',
          },
          {
            id: 'afe-h-equation',
            x: 52,
            y: 30,
            label: 'Equation: 3x + 4 = 19',
            description: 'One unknown, one equation, balanced on both sides.',
          },
          {
            id: 'afe-h-solve',
            x: 72,
            y: 30,
            label: 'Solve: x = 5',
            description: 'Subtract 4 from both sides: 3x = 15. Divide by 3: x = 5.',
          },
          {
            id: 'afe-h-check',
            x: 88,
            y: 30,
            label: 'Check in words',
            description: 'Read x = 5 back: "I think of 5, multiply by 3 to get 15, add 4 to get 19". Matches the problem.',
          },
          {
            id: 'afe-h-rule',
            x: 50,
            y: 75,
            label: 'Five-step workflow',
            description: 'Define, translate, write, solve, check. Skip any step and the translation usually fails.',
          },
        ],
      },
    },
    {
      id: 'afe-scene-cue-words',
      title: 'Cue Words and Which Operation They Hint At',
      type: 'simulation',
      instructions:
        'Read each cue word and the operation it usually triggers, with a tiny example. The same English phrase can hide more than one operation, so always read the FULL sentence before committing. "More than" almost always means add; "less than" reverses the order so be careful with subtraction; "twice as many" multiplies by 2; "shared equally between" divides; "altogether" or "in total" combines (usually adds, but can sum two products).',
      data: {
        cues: [
          { phrase: 'sum of', operation: 'add', example: 'sum of x and 5 → x + 5' },
          { phrase: 'more than', operation: 'add', example: '6 more than x → x + 6' },
          { phrase: 'less than', operation: 'subtract (reverse order)', example: '4 less than x → x - 4 (not 4 - x)' },
          { phrase: 'twice as many', operation: 'multiply by 2', example: 'twice as many as y → 2y' },
          { phrase: 'product of', operation: 'multiply', example: 'product of x and 7 → 7x' },
          { phrase: 'shared equally between', operation: 'divide', example: '£24 shared between x people → 24 / x' },
          { phrase: 'altogether', operation: 'add (often two unknowns)', example: 'Aisha has x, Ben has x + 3, altogether → x + (x + 3)' },
          { phrase: 'is, equals, gives', operation: 'equals sign', example: '"the result is 19" → = 19' },
        ],
        warning: 'Read the WHOLE sentence. "4 less than x" is x - 4, not 4 - x: the subtracted quantity comes second.',
      },
    },
    {
      id: 'afe-scene-perimeter-strip',
      title: 'A Perimeter with x on More Than One Side',
      type: 'diagram',
      instructions:
        'Look at how a rectangle with width x and length x + 4 turns into an equation. The perimeter adds every side: x + (x + 4) + x + (x + 4). Collecting like terms gives 4x + 8. If the question says the perimeter is 36 cm, the equation reads 4x + 8 = 36. The point is to write one expression for the total BEFORE setting it equal to the given value, not to write four separate sums and panic. One unknown, one equation, then solve.',
      data: {
        shape: 'rectangle',
        sides: {
          width: 'x',
          length: 'x + 4',
        },
        perimeterExpression: 'x + (x + 4) + x + (x + 4)',
        collected: '4x + 8',
        givenPerimeter: 36,
        equation: '4x + 8 = 36',
        solved: 'x = 7, so width is 7 cm and length is 11 cm',
        rule: 'When x appears on more than one side, collect like terms FIRST, then set equal to the given total.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'afe-worked-1',
      title: 'I think of a number, multiply by 3, add 4. Result is 19. Find the number.',
      steps: [
        {
          explanation:
            'Define the unknown. The number that is being thought of is what we want, so call it x.',
          maths: 'let x be the number',
        },
        {
          explanation:
            'Translate "multiply by 3". The result so far is 3x.',
          maths: '3x',
        },
        {
          explanation:
            'Translate "add 4". The result so far is 3x + 4.',
          maths: '3x + 4',
        },
        {
          explanation:
            'Translate "result is 19". The phrase "is" gives the equals sign.',
          maths: '3x + 4 = 19',
        },
        {
          explanation:
            'Solve. Subtract 4 from both sides.',
          maths: '3x = 15',
        },
        {
          explanation:
            'Divide both sides by 3.',
          maths: 'x = 5',
        },
        {
          explanation: 'Check in words: think of 5, multiply by 3 to get 15, add 4 to get 19. Matches the problem, so x = 5.',
          maths: 'x = 5',
        },
      ],
    },
    {
      id: 'afe-worked-2',
      title: 'A rectangular school noticeboard in Sevenoaks has length 5 cm more than its width. Its perimeter is 50 cm. Find the width.',
      steps: [
        {
          explanation:
            'Define the unknown. The width is what we want, so let x be the width in centimetres.',
          maths: 'let x = width in cm',
        },
        {
          explanation:
            'Express the length in terms of x. "5 cm more than its width" means length = x + 5.',
          maths: 'length = x + 5',
        },
        {
          explanation:
            'Write the perimeter expression. A rectangle has two widths and two lengths.',
          maths: 'perimeter = x + (x + 5) + x + (x + 5)',
        },
        {
          explanation:
            'Collect like terms.',
        },
        {
          explanation:
            'Set the collected expression equal to the given perimeter.',
          maths: '4x + 10 = 50',
        },
        {
          explanation:
            'Subtract 10 from both sides, then divide by 4.',
          maths: 'x = 10',
        },
        {
          explanation: 'Check. Width 10 cm, length 15 cm. Perimeter = 10 + 15 + 10 + 15 = 50 cm. So the width is 10 cm. Always include the unit.',
          maths: 'width = 10 cm',
        },
      ],
    },
  ],
  questions: [
    // Core 1: simple "I think of a number" translation, MCQ
    {
      id: 'afe-q1',
      type: 'multiple-choice',
      stem: 'Aisha thinks of a number, multiplies it by 2, then adds 7. The result is 19. Which equation matches her puzzle?',
      tier: 'core',
      options: ['2x + 7 = 19', '2x - 7 = 19', '7x + 2 = 19', 'x + 27 = 19'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'afe-mis-wrong-operation',
      hint: '"Multiplies it by 2" gives 2x. "Adds 7" gives 2x + 7. "The result is 19" gives = 19.',
    },
    // Core 2: solve the "I think of a number" puzzle, numeric
    {
      id: 'afe-q2',
      type: 'numeric-entry',
      stem: 'Aisha thinks of a number, multiplies it by 2, then adds 7. The result is 19. What is her number?',
      tier: 'core',
      correctAnswer: 6,
      xpValue: 10,
      hint: 'Form the equation 2x + 7 = 19. Subtract 7: 2x = 12. Divide by 2: x = 6.',
    },
    // Core 3: cue-word translation MCQ
    {
      id: 'afe-q3',
      type: 'multiple-choice',
      stem: 'Ben has x stickers. Charu has 4 more stickers than Ben. Which expression gives the number of stickers Charu has?',
      tier: 'core',
      options: ['4 - x', 'x / 4', 'x + 4', '4x'],
      correctIndex: 2,
      xpValue: 10,
      hint: '"4 more than Ben" means add 4 to whatever Ben has. So Charu has x + 4.',
    },
    // Core 4: "less than" reverse-order trap
    {
      id: 'afe-q4',
      type: 'multiple-choice',
      stem: 'In a Tunbridge Wells music club, Mei is x years old. Her cousin Jon is 3 years younger than Mei. Which expression gives Jon\'s age?',
      tier: 'core',
      options: ['3 - x', 'x - 3', 'x + 3', '3x'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'afe-mis-less-than-order',
      hint: '"3 years younger than Mei" means start from Mei and subtract 3. So Jon is x - 3 (not 3 - x).',
    },
    // Core 5: numeric, "altogether" sharing
    {
      id: 'afe-q5',
      type: 'numeric-entry',
      stem: 'Liam has x marbles. His sister has twice as many. Altogether they have 24 marbles. How many does Liam have?',
      tier: 'core',
      correctAnswer: 8,
      xpValue: 10,
      hint: 'Sister has 2x. Altogether: x + 2x = 3x. Equation: 3x = 24, so x = 8.',
    },
    // Core 6: spot-misconception on x = the final result
    {
      id: 'afe-q6',
      type: 'spot-misconception',
      stem: 'Maya reads "I think of a number, double it, add 5, result is 17" and writes "x = 17 because that is the result".',
      tier: 'core',
      statements: [
        {
          text: 'Maya is right. The letter x always stands for the final result of the sentence.',
          isMisconception: true,
        },
        {
          text: 'In fact x stands for the UNKNOWN being thought of, not the result. Form the equation 2x + 5 = 17 and solve: 2x = 12, so x = 6. The 17 is what x becomes after being doubled and adding 5, not x itself.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'afe-mis-x-is-result',
    },
    // Core 7: MCQ define x then read off equation
    {
      id: 'afe-q7',
      type: 'multiple-choice',
      stem: 'A book costs £p. A pen costs £3 less than the book. The total cost of one book and one pen is £15. Which equation gives p?',
      tier: 'core',
      options: ['p + 3 = 15', 'p - 3 = 15', '2p = 15', 'p + (p - 3) = 15'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Pen cost is p - 3 ("£3 less than the book"). Total is book + pen = p + (p - 3) = 15.',
    },
    // Confident 1: missing-step on age problem
    {
      id: 'afe-q8',
      type: 'missing-step',
      stem: 'Fill in the missing step. Aisha is x years old. Her brother Sam is 3 years older. Together they are 25. Find Aisha\'s age.',
      tier: 'confident',
      steps: [
        'Let x be Aisha\'s age. Sam is x + 3.',
        'Together: x + (x + 3) = 25.',
        null,
        'Subtract 3: 2x = 22. Divide by 2: x = 11. So Aisha is 11. Sam is 14. Check: 11 + 14 = 25.',
      ],
      missingStepIndex: 2,
      correctStep: 'Collect like terms: 2x + 3 = 25.',
      xpValue: 20,
    },
    // Confident 2: perimeter problem, numeric
    {
      id: 'afe-q9',
      type: 'numeric-entry',
      stem: 'A rectangular plot in a Dover allotment has a length 6 m more than its width. The perimeter is 40 m. What is the width in metres?',
      tier: 'confident',
      correctAnswer: 7,
      unit: 'metres',
      xpValue: 15,
      misconceptionId: 'afe-mis-perimeter-missing-side',
      hint: 'Width x, length x + 6. A rectangle has two widths AND two lengths. Perimeter: 2x + 2(x + 6) = 4x + 12 = 40. So 4x = 28 and x = 7.',
    },
    // Confident 3: money problem with two items, MCQ
    {
      id: 'afe-q10',
      type: 'multiple-choice',
      stem: 'A pencil case costs £x. A school planner costs £4 more than the pencil case. Mei buys 1 pencil case and 2 planners for £23 in total. Which equation should she form?',
      tier: 'confident',
      options: ['x + 2(x + 4) = 23', 'x + (x + 4) = 23', '3x + 4 = 23', '2x + (x + 4) = 23'],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'afe-mis-one-unknown-for-two',
      hint: 'Pencil case x, planner x + 4. Two planners cost 2(x + 4). Total: x + 2(x + 4) = 23.',
    },
    // Confident 4: solve the money problem from q10
    {
      id: 'afe-q11',
      type: 'numeric-entry',
      stem: 'Using the equation x + 2(x + 4) = 23 from the previous question, find the price of the pencil case in pounds.',
      tier: 'confident',
      correctAnswer: 5,
      unit: 'pounds',
      xpValue: 15,
      hint: 'Expand: x + 2x + 8 = 23. Collect: 3x + 8 = 23. So 3x = 15 and x = 5.',
    },
    // Confident 5: spot-misconception on representing two unknowns with x
    {
      id: 'afe-q12',
      type: 'spot-misconception',
      stem: 'Liam reads "Two numbers add to 20. One is 4 more than the other. Find them." and writes "let x be both numbers, so x + x = 20 and x = 10".',
      tier: 'confident',
      statements: [
        {
          text: 'Liam is right. When two numbers add to a total, both can share the same letter x.',
          isMisconception: true,
        },
        {
          text: 'In fact the two numbers are DIFFERENT, so they cannot both be x. Let x be the smaller. The larger is x + 4. Then x + (x + 4) = 20 gives 2x + 4 = 20, so x = 8 and the other is 12. Check: 8 + 12 = 20.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'afe-mis-one-unknown-for-two',
    },
    // Confident 6: drag-order the steps
    {
      id: 'afe-q13',
      type: 'drag-order',
      stem: 'Drag these steps into the order Maya should follow when forming and solving "I think of a number, treble it, subtract 2, get 19".',
      tier: 'confident',
      items: [
        'Solve: 3x = 21, so x = 7.',
        'Translate the cues: 3x - 2 = 19.',
        'Define x as the number being thought of.',
        'Check in words: treble 7 is 21, subtract 2 is 19.',
      ],
      correctOrder: [2, 1, 0, 3],
      xpValue: 20,
      hint: 'The workflow is: define, translate, solve, check. Each step depends on the one before.',
    },
    // Confident 7: numeric, sharing with constraint
    {
      id: 'afe-q14',
      type: 'numeric-entry',
      stem: 'Mr Patel shares £36 between his two children in a Manchester pocket money scheme so that the older child gets £4 more than the younger. How much does the younger child get in pounds?',
      tier: 'confident',
      correctAnswer: 16,
      unit: 'pounds',
      xpValue: 15,
      misconceptionId: 'afe-mis-no-units',
      hint: 'Younger x, older x + 4. Total: x + (x + 4) = 36. So 2x + 4 = 36, 2x = 32, x = 16. The unit is pounds.',
    },
    // Confident 8: MCQ "twice as many" plus constraint
    {
      id: 'afe-q15',
      type: 'multiple-choice',
      stem: 'A Sevenoaks bakery sells x scones in the morning. In the afternoon it sells twice as many as the morning, plus 8 extra. Altogether it sells 80 scones. Which equation gives the morning total?',
      tier: 'confident',
      options: ['3x = 80', 'x + 2(x + 8) = 80', '2x + 8 = 80', 'x + 2x + 8 = 80'],
      correctIndex: 3,
      xpValue: 15,
      hint: 'Morning x. Afternoon 2x + 8 ("twice the morning, plus 8 extra"). Altogether: x + 2x + 8 = 80.',
    },
    // Challenge 1: Bond age problem (the plan's flagship)
    {
      id: 'afe-q16',
      type: 'numeric-entry',
      stem: 'Aisha is 3 years older than Ben. Together they are 25 years old. What is Ben\'s age in years?',
      tier: 'challenge',
      correctAnswer: 11,
      unit: 'years',
      xpValue: 25,
      hint: 'Let Ben be x. Aisha is x + 3. Together: x + (x + 3) = 25, so 2x + 3 = 25, giving 2x = 22 and x = 11.',
    },
    // Challenge 2: multi-step money problem with free-text translation
    {
      id: 'afe-q17',
      type: 'free-text',
      stem: 'A Tunbridge Wells theatre charges £x for an adult ticket. A child ticket costs £4 less than an adult ticket. A family of 2 adults and 3 children pays £43 in total. Write the equation you would form, then state the value of x. Explain how you defined x.',
      tier: 'challenge',
      sampleAnswer:
        'Let x be the price of an adult ticket in pounds. A child ticket is x - 4. Two adults cost 2x and three children cost 3(x - 4). Total: 2x + 3(x - 4) = 43. Expand: 2x + 3x - 12 = 43, so 5x - 12 = 43. Add 12: 5x = 55. Divide by 5: x = 11. So an adult ticket costs £11.',
      keywords: ['adult', 'child', '2x', '3(x - 4)', '43', '11'],
      xpValue: 25,
      hint: 'Adult x. Child x - 4. Two adults plus three children = 2x + 3(x - 4) = 43.',
    },
    // Challenge 3: MCQ perimeter with x on three sides (isoceles triangle)
    {
      id: 'afe-q18',
      type: 'multiple-choice',
      stem: 'An isosceles triangle has two equal sides of length x cm and a third side of length x + 2 cm. The perimeter is 32 cm. What is the length of the equal sides in cm?',
      tier: 'challenge',
      options: ['8 cm', '10 cm', '12 cm', '14 cm'],
      correctIndex: 1,
      xpValue: 25,
      hint: 'Perimeter: x + x + (x + 2) = 3x + 2 = 32. So 3x = 30 and x = 10. The equal sides are each 10 cm.',
    },
    // Challenge 4: free-text Bond-style age + future-tense
    {
      id: 'afe-q19',
      type: 'free-text',
      stem: 'A father is currently 4 times as old as his daughter. In 12 years\' time he will be twice her age. State what x represents, write the equation, and find the daughter\'s present age in years.',
      tier: 'challenge',
      sampleAnswer:
        'Let x be the daughter\'s present age in years. The father is currently 4x. In 12 years, the daughter will be x + 12 and the father will be 4x + 12. Then 4x + 12 = 2(x + 12). Expand: 4x + 12 = 2x + 24. Subtract 2x: 2x + 12 = 24. Subtract 12: 2x = 12. Divide by 2: x = 6. The daughter is 6 years old today.',
      keywords: ['x + 12', '4x + 12', '2(x + 12)', '6'],
      xpValue: 25,
      hint: 'Today: daughter x, father 4x. In 12 years: daughter x + 12, father 4x + 12. Then 4x + 12 = 2(x + 12).',
    },
    // Challenge 5: numeric, sharing with two constraints
    {
      id: 'afe-q20',
      type: 'numeric-entry',
      stem: 'Three friends share £60 raised at a Dover charity bake sale. Niharika gets twice as much as Joe. Sam gets £5 more than Joe. How much does Joe get in pounds?',
      tier: 'challenge',
      correctAnswer: 13.75,
      tolerance: 0.05,
      unit: 'pounds',
      xpValue: 25,
      hint: 'Joe x. Niharika 2x. Sam x + 5. Total: x + 2x + (x + 5) = 60, so 4x + 5 = 60 and 4x = 55, giving x = 13.75.',
    },
    // Challenge 6: MCQ rate / consecutive integers
    {
      id: 'afe-q21',
      type: 'multiple-choice',
      stem: 'Three consecutive whole numbers add to 78. Which equation should you form to find the smallest of the three?',
      tier: 'challenge',
      options: ['x + (x + 1) + (x + 2) = 78', '3x = 78', 'x + 2x + 3x = 78', 'x + (x + 1) + (x + 3) = 78'],
      correctIndex: 0,
      xpValue: 25,
      misconceptionId: 'afe-mis-x-without-defining',
      hint: 'Let x be the smallest. Consecutive whole numbers go up by 1, so the next two are x + 1 and x + 2. Sum: x + (x + 1) + (x + 2) = 78.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a worded equation question where pupils chose the wrong operation, subtracting where the wording implied addition.
    {
      id: 'afe-mis-wrong-operation',
      description:
        'I pick the wrong operation when translating a cue word, so "more than" is treated as subtraction or "less than" is treated as addition.',
      triggerAnswer: 'wrong-operation',
      correction:
        'Actually each cue word maps to a specific operation. "More than" adds, "less than" subtracts, "twice as many" multiplies by 2, "shared between" divides.',
      reExplanation:
        'For "Charu has 4 more stickers than Ben", the cue "more than" means add. Start with Ben\'s x and add 4: Charu has x + 4. Reading the cue as subtraction would give x - 4, which says Charu has fewer than Ben and contradicts the sentence. Always check the answer against the words: if the sentence says "more", the resulting expression should produce a larger value.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a worded subtraction question where pupils wrote 4 - x instead of x - 4 for "4 less than x".
    {
      id: 'afe-mis-less-than-order',
      description:
        'I write subtraction in the order the words appear, so "4 less than x" becomes 4 - x instead of x - 4.',
      triggerAnswer: 'less-than-order',
      correction:
        'In fact "4 less than x" starts from x and takes 4 away, so the answer is x - 4. The subtracted amount comes second.',
      reExplanation:
        'For "Jon is 3 years younger than Mei", picture Mei\'s age first, then take 3 off: Mei x, Jon x - 3. Writing 3 - x would make Jon\'s age negative when x is bigger than 3, which is nonsense for an age. The "less than" phrase always means the FIRST number named (Mei) gets the subtraction applied; the SECOND number (the 3) is what is subtracted.',
    },
    // Source: NCETM Secondary Magazine, Issue 122, "Persistent Misconceptions in Equation Solving" article, citing pupil work that set x equal to the final result of the sentence rather than the unknown being thought of.
    {
      id: 'afe-mis-x-is-result',
      description:
        'I let x equal the final result of the sentence, so for "I think of a number, double it, add 5, get 17" I write x = 17.',
      triggerAnswer: 'x-is-result',
      correction:
        'Actually x stands for the unknown being THOUGHT OF, not the result. The result is on the right-hand side of the equation.',
      reExplanation:
        'For "I think of a number, double it, add 5, get 17": x is the starting number. The sentence builds 2x + 5 and equates that to 17. So 2x + 5 = 17, giving x = 6. The 17 is the OUTPUT of the operations on x, not x itself. Reading x as 17 ignores the doubling and the adding and breaks the equation.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2022, Paper 02 (Foundation, Calculator), commentary on a worded equation question where pupils used the same letter for two different quantities.
    {
      id: 'afe-mis-one-unknown-for-two',
      description:
        'I use x for both quantities in a problem with two related unknowns, so "two numbers add to 20, one is 4 more than the other" becomes x + x = 20.',
      triggerAnswer: 'one-unknown-for-two',
      correction:
        'In fact the two quantities are different. Name one as x and write the other in terms of x using the relationship given.',
      reExplanation:
        'For "two numbers add to 20, one is 4 more than the other": let x be the smaller. The larger is x + 4. The equation is x + (x + 4) = 20, giving 2x + 4 = 20, so x = 8 and the other is 12. Setting both to x assumes they are equal, contradicting the "one is 4 more than the other" clause. Two related unknowns always need two expressions, both built from the same x.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 4 Algebra, "Forming and Solving Equations" page, "Common mistake" callout reminding pupils to state the unit when the question asks for a real-world quantity.
    {
      id: 'afe-mis-no-units',
      description:
        'I give the numeric value of x as my final answer but forget to include the unit, so "the width is 7" with no centimetres lands as the answer to a perimeter question.',
      triggerAnswer: 'no-units',
      correction:
        'Actually a word-problem answer must state the unit. A length is in centimetres or metres, a price is in pounds, an age is in years.',
      reExplanation:
        'For a perimeter problem giving x = 7: the answer is 7 cm, 7 m, or whatever unit the question uses. Just writing "7" loses information and is marked down on most papers. Read the original question and find the unit it asks for. A useful habit is to write the unit alongside x when you define it: "let x be the width in centimetres".',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 4 "Algebra" by Kuchemann, on pupils writing equations using x without first stating what x represents, leading to ambiguity and miscalculation.
    {
      id: 'afe-mis-x-without-defining',
      description:
        'I jump straight to an equation using x without first saying what x stands for, so my working has 3x = 78 without ever defining whether x is the smallest, the middle, or some other quantity.',
      triggerAnswer: 'x-without-defining',
      correction:
        'In fact always define x first in plain English. "Let x be the smallest number." Without a definition, the equation cannot be checked.',
      reExplanation:
        'For "three consecutive whole numbers add to 78": writing 3x = 78 is only correct if x is the MIDDLE number (giving x = 26 and the trio 25, 26, 27). If x is the smallest, the equation is x + (x + 1) + (x + 2) = 78, which gives x = 25. The definition fixes which value the answer represents. Without it, x could mean different things to different readers and the working cannot be marked.',
    },
    // Authored, no external source: classroom-observed slip where pupils flip the order of additions or subtractions inside a perimeter expression and lose one of the equal sides.
    {
      id: 'afe-mis-perimeter-missing-side',
      description:
        'When forming a perimeter equation for a rectangle, I add the width and the length once instead of twice, so for width x and length x + 4 my equation is x + (x + 4) = 36 instead of 2x + 2(x + 4) = 36.',
      triggerAnswer: 'perimeter-missing-side',
      correction:
        'Actually a rectangle has FOUR sides. Add both widths and both lengths, then simplify.',
      reExplanation:
        'For a rectangle with width x and length x + 4: perimeter is x + (x + 4) + x + (x + 4) = 4x + 8. Setting that equal to 36 gives 4x = 28 and x = 7. Adding only one width and one length gives the SEMI-PERIMETER (half of the total), which would equal 18 here, not 36. Sketching the rectangle and labelling each side before writing the sum prevents this slip.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const algebraFormingEquationsZoneNodes = [algebraFormingEquations]
