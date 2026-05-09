import type { SkillNode } from '@/types/content'

export const bidmasOrderOfOperations: SkillNode = {
  id: 'maths-bidmas-order-of-operations',
  title: 'Order of Operations (BIDMAS)',
  description:
    'Apply the BIDMAS convention (Brackets, Indices, Division and Multiplication, Addition and Subtraction) to evaluate arithmetic expressions, recognising that division and multiplication share priority and are worked left to right, that addition and subtraction share priority and are worked left to right, and that one level of brackets and simple powers (squares and cubes) take their proper place in the order.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-bidmas',
  zoneName: 'BIDMAS',
  tier: 'core',
  prerequisites: [],
  curriculum: {
    ks3Objective:
      'Use conventional notation for the priority of operations, including brackets, powers, roots and reciprocals.',
    awardingBodies: {
      aqa: 'N2.1 Apply the four operations, including formal written methods, to integers, decimals and simple fractions; use conventional notation for priority of operations',
      edexcel: 'N2 Apply the four operations to integers, decimals and simple fractions, including order of operations',
      ocr: '2.02a Order of operations including brackets and powers',
    },
  },
  scenes: [
    {
      id: 'bid-scene-operation-queue',
      title: 'Build the Calculation',
      type: 'simulation',
      instructions:
        'See how the running total changes when the operator tiles sit in different orders. Reading 6, then + 4, then x 3, then - 2 strictly left to right gives 28, but BIDMAS does the multiply first and lands on 16. The order in which the operations happen really does change the answer.',
      data: {
        startingNumber: 6,
        operatorTiles: [
          { id: 'plus-4', label: '+ 4', op: 'add', operand: 4 },
          { id: 'times-3', label: 'x 3', op: 'multiply', operand: 3 },
          { id: 'minus-2', label: '- 2', op: 'subtract', operand: 2 },
        ],
        runs: [
          {
            order: ['plus-4', 'times-3', 'minus-2'],
            ifReadStrictlyLeftToRight: 28,
            ifBidmasIsApplied: 16,
            note: 'Reading strictly left to right gives 6 + 4 = 10, then 10 x 3 = 30, then 30 - 2 = 28. BIDMAS does the multiply first: 4 x 3 = 12, then 6 + 12 - 2 = 16.',
          },
          {
            order: ['times-3', 'plus-4', 'minus-2'],
            ifReadStrictlyLeftToRight: 20,
            ifBidmasIsApplied: 20,
            note: 'When the multiply is already at the front the two readings agree, because BIDMAS just makes the multiply happen first either way.',
          },
        ],
        callout:
          'The order in which you do the operations changes the answer. Mathematicians agreed a standard priority so every calculator and every pupil reaches the same number.',
      },
    },
    {
      id: 'bid-scene-precedence-ladder',
      title: 'The BIDMAS Ladder',
      type: 'diagram',
      instructions:
        'Read down the rungs of the BIDMAS ladder to see which operations belong on each level. Brackets sit at the top, then indices, then division and multiplication share a rung, and addition and subtraction share the bottom rung. Operations on the same rung are worked left to right in the order they appear.',
      data: {
        rungs: [
          {
            level: 1,
            label: 'Brackets',
            symbols: ['( )'],
            note: 'Anything inside brackets is evaluated first as if it were its own little calculation.',
          },
          {
            level: 2,
            label: 'Indices',
            symbols: ['squared', 'cubed', 'powers'],
            note: 'Powers such as 4 squared (4 to the power of 2) come next.',
          },
          {
            level: 3,
            label: 'Division and Multiplication',
            symbols: ['÷', 'x'],
            note: 'Division and multiplication share this rung. Work them left to right in the order they appear.',
          },
          {
            level: 4,
            label: 'Addition and Subtraction',
            symbols: ['+', '-'],
            note: 'Addition and subtraction share this rung. Work them left to right in the order they appear.',
          },
        ],
        warning:
          'D and M sit on the same rung, and so do A and S. The acronym BIDMAS is a memory aid, not a strict order between division and multiplication, or between addition and subtraction.',
      },
    },
    {
      id: 'bid-scene-bracket-spotlight',
      title: 'Spotlight on the Brackets',
      type: 'simulation',
      instructions:
        'Slide the brackets along the expression and watch the answer change as different parts get done first.',
      data: {
        baseExpression: '8 - 2 x 3',
        slidingBrackets: [
          {
            placement: 'no brackets: 8 - 2 x 3',
            value: 2,
            reason: 'Multiplication first by BIDMAS: 2 x 3 = 6, then 8 - 6 = 2.',
          },
          {
            placement: 'around the start: (8 - 2) x 3',
            value: 18,
            reason: 'The brackets force the subtraction first: 8 - 2 = 6, then 6 x 3 = 18.',
          },
          {
            placement: 'around the end: 8 - (2 x 3)',
            value: 2,
            reason: 'The brackets here make no difference because BIDMAS would do 2 x 3 first anyway.',
          },
        ],
        callout:
          'Brackets let you change the order of operations on purpose. They tell BIDMAS, "do me first, before any other rung".',
      },
    },
  ],
  workedExamples: [
    {
      id: 'bid-worked-1',
      title: 'Evaluate 6 + 4 x 3 using BIDMAS',
      steps: [
        {
          explanation:
            'Write the expression and identify which operations appear: an addition and a multiplication.',
          maths: '6 + 4 x 3',
        },
        {
          explanation:
            'Multiplication sits on a higher rung than addition, so do the multiply first.',
          maths: '4 x 3 = 12',
        },
        {
          explanation:
            'Replace 4 x 3 with its value of 12 in the original expression.',
          maths: '6 + 12',
        },
        {
          explanation: 'Add the remaining numbers to get the final result.',
          maths: '6 + 12 = 18',
        },
        {
          explanation:
            'So 6 + 4 x 3 evaluates to 18. A strict left-to-right reading would have given 30, which is wrong.',
          maths: '6 + 4 x 3 = 18',
        },
      ],
    },
    {
      id: 'bid-worked-2',
      title: 'Evaluate 2 x (5 + 3) squared ÷ 4',
      steps: [
        {
          explanation:
            'Write the expression and look for the highest priority. The brackets are top of the ladder.',
          maths: '2 x (5 + 3) squared ÷ 4',
        },
        {
          explanation:
            'Evaluate inside the brackets first.',
          maths: '5 + 3 = 8',
        },
        {
          explanation:
            'Replace the bracketed part with its value, keeping the rest of the expression intact.',
          maths: '2 x 8 squared ÷ 4',
        },
        {
          explanation:
            'Indices are next on the ladder, so square the 8 before any multiplying or dividing.',
          maths: '8 squared = 64',
        },
        {
          explanation:
            'Now only multiplication and division remain. They share a rung, so work them left to right.',
          maths: '2 x 64 ÷ 4',
        },
        {
          explanation:
            'Multiply first because it appears first in the expression.',
          maths: '2 x 64 = 128',
        },
        {
          explanation: 'Then divide by 4 to finish the calculation.',
          maths: '128 ÷ 4 = 32',
        },
        {
          explanation:
            'So 2 x (5 + 3) squared ÷ 4 evaluates to 32.',
          maths: '2 x (5 + 3) squared ÷ 4 = 32',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'bid-q1',
      type: 'multiple-choice',
      stem: 'What is the value of 6 + 4 x 3?',
      tier: 'core',
      options: ['30', '18', '12', '24'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'bid-mis-strict-left-to-right',
      hint: 'Multiplication sits on a higher rung than addition.',
    },
    {
      id: 'bid-q3',
      type: 'multiple-choice',
      stem: 'What is the value of (4 + 2) x 5?',
      tier: 'core',
      options: ['14', '24', '30', '40'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Brackets are top of the BIDMAS ladder.',
    },
    {
      id: 'bid-q2',
      type: 'numeric-entry',
      stem: 'Work out 20 - 3 x 4.',
      tier: 'core',
      correctAnswer: 8,
      xpValue: 10,
      misconceptionId: 'bid-mis-strict-left-to-right',
      hint: 'Do the multiplication before the subtraction.',
    },
    {
      id: 'bid-q4',
      type: 'numeric-entry',
      stem: 'Work out 12 ÷ 3 + 5.',
      tier: 'core',
      correctAnswer: 9,
      xpValue: 10,
      hint: 'Divide first, then add.',
    },
    {
      id: 'bid-q5',
      type: 'multiple-choice',
      stem: 'What is the value of 3 squared + 4?',
      tier: 'core',
      options: ['10', '13', '14', '49'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'bid-mis-index-as-multiply',
      hint: 'Squared means multiplied by itself, not multiplied by 2.',
    },
    {
      id: 'bid-q6',
      type: 'numeric-entry',
      stem: 'Work out 2 + 6 ÷ 2.',
      tier: 'core',
      correctAnswer: 5,
      xpValue: 10,
      hint: 'Division comes before addition.',
    },
    {
      id: 'bid-q7',
      type: 'multiple-choice',
      stem: 'A pupil writes 10 - 2 x 4 = 32. What has gone wrong?',
      tier: 'core',
      options: [
        'Nothing. The answer 32 is correct.',
        'They subtracted before multiplying. They should multiply 2 x 4 first to get 8, then 10 - 8 = 2.',
        'They should have added 2 and 4 first to get 6, then 10 - 6 = 4.',
        'They should have multiplied 10 by 2 first to get 20, then subtracted 4 to get 16.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'bid-mis-strict-left-to-right',
    },
    {
      id: 'bid-q8',
      type: 'spot-misconception',
      stem: 'Liam evaluates 12 ÷ 3 x 2. He says, "BIDMAS means division comes before multiplication, so I do 3 x 2 first to get 6, then 12 ÷ 6 = 2." Is his method sound?',
      tier: 'core',
      statements: [
        {
          text: 'His method is sound, because the D in BIDMAS comes before the M.',
          isMisconception: true,
        },
        {
          text: 'His method is not sound. Division and multiplication share the same rung. They are worked left to right, so 12 ÷ 3 = 4 and then 4 x 2 = 8.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'bid-mis-d-before-m',
    },
    {
      id: 'bid-q9',
      type: 'multiple-choice',
      stem: 'What is the value of 24 ÷ 4 x 3?',
      tier: 'confident',
      options: ['18', '2', '6', '12'],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'bid-mis-d-before-m',
      hint: 'Division and multiplication share priority. Work them left to right.',
    },
    {
      id: 'bid-q10',
      type: 'numeric-entry',
      stem: 'Work out 18 - 5 + 4.',
      tier: 'confident',
      correctAnswer: 17,
      xpValue: 15,
      misconceptionId: 'bid-mis-a-before-s',
      hint: 'Addition and subtraction share priority. Work them left to right.',
    },
    {
      id: 'bid-q11',
      type: 'multiple-choice',
      stem: 'What is the value of 2 x 3 squared?',
      tier: 'confident',
      options: ['36', '12', '18', '13'],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'bid-mis-power-wrong-base',
      hint: 'The square only applies to the 3, not to the whole 2 x 3.',
    },
    {
      id: 'bid-q13',
      type: 'spot-misconception',
      stem: 'Aisha evaluates 18 - 5 + 4. She says, "BIDMAS means addition comes before subtraction, so I do 5 + 4 = 9 first, then 18 - 9 = 9." Is her method sound?',
      tier: 'confident',
      statements: [
        {
          text: 'Her method is sound, because the A in BIDMAS comes before the S.',
          isMisconception: true,
        },
        {
          text: 'Her method is not sound. Addition and subtraction share the same rung. Working left to right gives 18 - 5 = 13, then 13 + 4 = 17.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'bid-mis-a-before-s',
    },
    {
      id: 'bid-q14',
      type: 'multiple-choice',
      stem: 'What is the value of 4 + 3 x (6 - 2)?',
      tier: 'confident',
      options: ['14', '28', '20', '16'],
      correctIndex: 3,
      xpValue: 15,
      hint: 'Start inside the brackets, then handle the multiplication, then the addition.',
    },
    {
      id: 'bid-q15',
      type: 'drag-order',
      stem: 'Place these BIDMAS steps for evaluating 5 + (4 + 2) x 3 squared in the correct order.',
      tier: 'confident',
      items: [
        'Add the result to 5: 5 + 54 = 59.',
        'Evaluate the brackets: 4 + 2 = 6.',
        'Square the 3 (indices): 3 squared = 9.',
        'Multiply 6 by 9: 6 x 9 = 54.',
      ],
      correctOrder: [1, 2, 3, 0],
      xpValue: 20,
      hint: 'Work down the BIDMAS ladder one rung at a time.',
    },
    {
      id: 'bid-q17',
      type: 'multiple-choice',
      stem: 'A canteen receipt shows the total as 4 + 6 x 3 squared - 2. What is the correct total in pence?',
      tier: 'confident',
      options: ['56', '92', '52', '24'],
      correctIndex: 0,
      xpValue: 15,
      hint: 'Square first, then multiply, then handle the addition and subtraction left to right.',
    },
    {
      id: 'bid-q18',
      type: 'missing-step',
      stem: 'Fill in the missing step in this worked solution. Evaluate 24 ÷ (5 - 1) + 2 squared.',
      tier: 'confident',
      steps: [
        'Brackets first: 5 - 1 = 4.',
        'Substitute back into the expression: 24 ÷ 4 + 2 squared.',
        null,
        'Now division: 24 ÷ 4 = 6.',
        'Finally addition: 6 + 4 = 10.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Indices next: 2 squared = 4. The expression becomes 24 ÷ 4 + 4.',
      xpValue: 20,
    },
    {
      id: 'bid-q19',
      type: 'numeric-entry',
      stem: 'Work out 100 ÷ (4 + 1) squared.',
      tier: 'challenge',
      correctAnswer: 4,
      xpValue: 25,
      misconceptionId: 'bid-mis-bracket-ignored',
      hint: 'The brackets are inside the indices, so do the bracket first, then square the result, then divide.',
    },
    {
      id: 'bid-q20',
      type: 'multiple-choice',
      stem: 'A pupil claims that 6 + 2 x 5 squared and (6 + 2) x 5 squared give the same answer because the brackets do not change anything. Which statement is correct?',
      tier: 'challenge',
      options: [
        'They give the same answer because brackets only matter when they sit at the start.',
        'They give different answers. The first is 6 + 2 x 25 = 56. The second is 8 x 25 = 200.',
        'They give different answers. The first is 8 x 5 squared = 200. The second is 6 + 10 squared = 106.',
        'They give the same answer of 200, because squaring removes the need for brackets.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'bid-mis-bracket-ignored',
    },
    {
      id: 'bid-q21',
      type: 'numeric-entry',
      stem: 'A school tuck shop sells 4 muffins at 60p each and 3 cans of squash at 80p each. A 50p pasty was added to the order. Use one BIDMAS expression to work out the total cost in pence: 4 x 60 + 3 x 80 + 50.',
      tier: 'challenge',
      correctAnswer: 530,
      xpValue: 25,
      hint: 'Do both multiplications first, then add the three results in any order.',
    },
    {
      id: 'bid-q22',
      type: 'multiple-choice',
      stem: 'A bus from Sevenoaks to Tunbridge Wells costs £4 single. A return for an adult is twice the single fare minus a £1 loyalty discount. Which BIDMAS expression gives the correct return fare in pounds, and what is its value?',
      tier: 'challenge',
      options: [
        '2 x 4 - 1 = 7',
        '2 x (4 - 1) = 6',
        '4 x 2 - 1 squared = 7',
        '(2 x 4 - 1) squared = 49',
      ],
      correctIndex: 0,
      xpValue: 25,
      hint: 'Twice the single fare means 2 x 4. Then subtract the £1 discount.',
    },
    {
      id: 'bid-q23',
      type: 'numeric-entry',
      stem: 'A Year 7 cricket club has 5 squads of 4 batters and 2 squads of 3 bowlers. Three players from each batting squad are away on Saturday. How many players turn up, using the expression 5 x 4 - 5 x 3 + 2 x 3?',
      tier: 'challenge',
      correctAnswer: 11,
      xpValue: 25,
      hint: 'Do all three multiplications first, then add and subtract from left to right.',
    },
    {
      id: 'bid-q24',
      type: 'missing-step',
      stem: 'Fill in the missing step in this worked solution. Evaluate (3 + 2) squared - 4 x 3.',
      tier: 'challenge',
      steps: [
        'Brackets first: 3 + 2 = 5.',
        'Substitute back: 5 squared - 4 x 3.',
        'Indices next: 5 squared = 25.',
        null,
        'Subtract: 25 - 12 = 13.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Multiplication next: 4 x 3 = 12. The expression becomes 25 - 12.',
      xpValue: 25,
    },
  ],
  misconceptions: [
    // Source: CGP KS3 Maths Study Guide p.16 Common mistake box on BIDMAS
    {
      id: 'bid-mis-strict-left-to-right',
      description:
        'I work expressions strictly left to right because that is how I read them, so 6 + 4 x 3 must be 30.',
      triggerAnswer: 'strict-left-to-right',
      correction:
        'Reading order is not the same as calculation order. In fact, BIDMAS sets a priority: brackets first, then indices, then division and multiplication, then addition and subtraction.',
      reExplanation:
        '6 + 4 x 3 has an addition and a multiplication. Multiplication is on a higher rung, so do 4 x 3 = 12 first, then 6 + 12 = 18. A calculator that follows BIDMAS will agree.',
    },
    // Source: AQA GCSE Maths Foundation tier examiner report November 2021, Paper 1F Q2 commentary on order of operations
    {
      id: 'bid-mis-d-before-m',
      description:
        'I treat BIDMAS as a strict order, so I think division always comes before multiplication.',
      triggerAnswer: 'd-before-m',
      correction:
        'In fact, division and multiplication share the same rung. When both appear in an expression, work them left to right in the order they are written.',
      reExplanation:
        '12 ÷ 3 x 2 reads left to right as 12 ÷ 3 first, which is 4, and then 4 x 2 = 8. Doing the multiplication first would give 12 ÷ 6 = 2, which contradicts what every scientific calculator returns.',
    },
    // Source: Edexcel GCSE Maths examiner report June 2019, Paper 1F Q3, on misuse of BIDMAS for addition and subtraction
    {
      id: 'bid-mis-a-before-s',
      description:
        'I treat BIDMAS as a strict order, so I think addition always comes before subtraction.',
      triggerAnswer: 'a-before-s',
      correction:
        'In fact, addition and subtraction share the same rung. When both appear, work them left to right.',
      reExplanation:
        '18 - 5 + 4 reads left to right as 18 - 5 = 13, and then 13 + 4 = 17. Adding 5 + 4 first would give 18 - 9 = 9, which is wrong because the minus sign belongs to the 5.',
    },
    // Source: CGP KS3 Maths Study Guide p.17 Common mistake box on indices and bases
    {
      id: 'bid-mis-power-wrong-base',
      description:
        'I square the wrong base, so for 2 x 3 squared I treat the 2 x 3 together as 6 squared.',
      triggerAnswer: 'power-wrong-base',
      correction:
        'In fact, the index only applies to the number it is written next to. The square in 2 x 3 squared belongs to the 3 only, not to 2 x 3.',
      reExplanation:
        '2 x 3 squared means 2 x (3 x 3) = 2 x 9 = 18. If the question wanted the whole 2 x 3 to be squared, it would have written (2 x 3) squared, which is 6 squared = 36. Brackets are how the writer tells you what the index applies to.',
    },
    // Source: Bond 11+ Maths Assessment Papers 10-11 Years Book 1 Paper 5 Q9, recurring "ignore brackets in the middle" trap
    {
      id: 'bid-mis-bracket-ignored',
      description:
        'I ignore brackets when they appear in the middle or end of an expression, because I think only brackets at the start matter.',
      triggerAnswer: 'bracket-ignored',
      correction:
        'In fact, brackets always go first, wherever they appear. Their job is to override the usual BIDMAS order for whatever sits inside them.',
      reExplanation:
        '100 ÷ (4 + 1) squared has brackets in the middle. Inside first: 4 + 1 = 5. Then the index: 5 squared = 25. Then divide: 100 ÷ 25 = 4. Skipping the brackets and doing 4 + 1 squared as 4 + 1 = 5 gives 100 ÷ 5 = 20, which is wrong.',
    },
    // Authored, no external source
    {
      id: 'bid-mis-index-as-multiply',
      description:
        'I read 3 squared as 3 multiplied by 2, so I treat the index as a hidden multiplication and write 3 squared as 6.',
      triggerAnswer: 'index-as-multiply',
      correction:
        'In fact, 3 squared means 3 multiplied by itself: 3 x 3, not 3 x 2. The little 2 tells you how many times the base appears in the multiplication.',
      reExplanation:
        '3 squared is 3 x 3 = 9. 4 cubed is 4 x 4 x 4 = 64, where the little 3 means three lots of 4 multiplied together. The index never multiplies the base by itself; it counts how many copies are multiplied.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const bidmasZoneNodes = [bidmasOrderOfOperations]
