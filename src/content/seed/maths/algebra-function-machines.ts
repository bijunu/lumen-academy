import type { SkillNode } from '@/types/content'

export const algebraFunctionMachines: SkillNode = {
  id: 'maths-algebra-function-machines',
  title: 'Function Machines',
  description:
    'Read a function machine as a chain of operations applied to an input to produce an output. Apply one-step machines such as x then +5, two-step machines such as x then x3 then -2, work back from a known output to find the input using an inverse machine, and derive the operations of a machine from a table of input-output pairs. Function machines lay the groundwork for linear expressions and for solving linear equations, where the variable is the input and the expression is the output.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-algebra',
  zoneName: 'Basic Algebra',
  tier: 'confident',
  prerequisites: ['maths-algebra-introduction'],
  curriculum: {
    ks3Objective:
      'Understand and use function machines to model relationships between inputs and outputs and to introduce inverse operations.',
    awardingBodies: {
      aqa: 'A1 Use function machines to represent algebraic expressions (GCSE Mathematics 8300)',
      edexcel: 'A1 Use function machines including inverse machines (GCSE Mathematics 1MA1)',
      ocr: '6.01b Use function machines to model expressions and inverse operations (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'afm-scene-machine-anatomy',
      title: 'Anatomy of a Two-Step Function Machine',
      type: 'labelled-diagram',
      instructions:
        'Click each part of the function machine to see what it does. An input enters on the left, passes through one or more operation boxes, and an output emerges on the right. In this machine the input is 4, the first box multiplies by 3 (giving 12), the second box adds 2 (giving 14). The output is 14. The arrows show the direction of travel: left to right.',
      data: {
        viewBox: '0 0 100 100',
        hotspots: [
          { id: 'afm-h-input', x: 8, y: 50, label: 'input: 4', description: 'The starting value, sometimes called x.' },
          { id: 'afm-h-op1', x: 32, y: 50, label: 'x3', description: 'First operation box: multiply by 3. After this box the value is 12.' },
          { id: 'afm-h-mid', x: 50, y: 50, label: '12', description: 'Intermediate value between the two operation boxes.' },
          { id: 'afm-h-op2', x: 68, y: 50, label: '+2', description: 'Second operation box: add 2. After this box the value is 14.' },
          { id: 'afm-h-output', x: 92, y: 50, label: 'output: 14', description: 'The final value, the expression 3x + 2 evaluated at x = 4.' },
          { id: 'afm-h-arrow', x: 50, y: 80, label: 'flow: left to right', description: 'Always read a function machine from input to output.' },
        ],
      },
    },
    {
      id: 'afm-scene-input-output-table',
      title: 'Reading a Machine from a Table',
      type: 'simulation',
      instructions:
        'See how a table of input-output pairs reveals the operations inside a machine. The differences between consecutive outputs (16, 19, 22, 25) jump by 3 each time the input rises by 1, so the multiplier must be 3. With input 1 giving output 4, the rule 3x + 1 fits (3 then +1). Check on a second row to confirm: input 2 gives 3 x 2 + 1 = 7, which matches. The pair of operations is x3 then +1.',
      data: {
        pairs: [
          { input: 1, output: 4 },
          { input: 2, output: 7 },
          { input: 5, output: 16 },
          { input: 6, output: 19 },
          { input: 7, output: 22 },
          { input: 8, output: 25 },
        ],
        rule: 'The gap between outputs equals the multiplier. Read off the multiplier from the gap, then work out the constant from any single row.',
        derivedMachine: 'x then x3 then +1',
        check: 'Input 5: 3 x 5 + 1 = 16. Matches.',
      },
    },
    {
      id: 'afm-scene-inverse-machine',
      title: 'Inverse Machine: Travelling Backwards',
      type: 'diagram',
      instructions:
        'Look at how an inverse machine undoes the original to recover the input from the output. The forward machine reads x then x4 then +1 with output 17. The inverse machine reads right to left and swaps each operation for its opposite: undo +1 with -1, then undo x4 with divide by 4. Starting from 17: 17 - 1 = 16, then 16 divided by 4 = 4. The input was 4. Two rules: reverse the direction of travel, and replace every operation with its inverse.',
      data: {
        forward: {
          machine: 'x then x4 then +1',
          input: 4,
          steps: ['4 x 4 = 16', '16 + 1 = 17'],
          output: 17,
        },
        inverse: {
          machine: 'output then -1 then divide by 4',
          start: 17,
          steps: ['17 - 1 = 16', '16 divided by 4 = 4'],
          recoveredInput: 4,
        },
        rules: [
          'Read the inverse machine from right to left.',
          'Replace +n with -n, -n with +n, xn with divide by n, divide by n with xn.',
        ],
        commonSlip: 'Travelling right to left but keeping the same operations gives the wrong answer. Both changes are needed.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'afm-worked-1',
      title: 'Apply the machine x then x3 then +2 to the input 4',
      steps: [
        {
          explanation:
            'Identify the input and the chain of operations the machine performs.',
          maths: 'input: 4, machine: x3 then +2',
        },
        {
          explanation:
            'Apply the first operation, multiply by 3, to the input.',
          maths: '4 x 3 = 12',
        },
        {
          explanation:
            'Pass the result, 12, into the second operation box.',
          maths: '12 + 2',
        },
        {
          explanation:
            'Apply the second operation, add 2, to give the output.',
          maths: '12 + 2 = 14',
        },
        {
          explanation: 'So the input 4 gives output 14. In algebraic form the machine is the expression 3x + 2.',
          maths: 'output = 14',
        },
      ],
    },
    {
      id: 'afm-worked-2',
      title: 'Find the input when the output is 17 and the machine is x then x4 then +1',
      steps: [
        {
          explanation:
            'Write the forward machine and the output, then plan to run it backwards using the inverse machine.',
          maths: 'forward: x then x4 then +1, output: 17',
        },
        {
          explanation:
            'Build the inverse machine: reverse the order and swap each operation for its inverse.',
          maths: 'inverse: output then -1 then divide by 4',
        },
        {
          explanation:
            'Feed the output into the inverse machine and apply the first inverse operation.',
        },
        {
          explanation:
            'Apply the second inverse operation to the result.',
          maths: '16 divided by 4 = 4',
        },
        {
          explanation:
            'Check by running the original machine forward from this input.',
          maths: '4 x 4 + 1 = 17',
        },
        {
          explanation: 'So the input was 4.',
          maths: 'input = 4',
        },
      ],
    },
  ],
  questions: [
    // Core 1: one-step add output
    {
      id: 'afm-q1',
      type: 'multiple-choice',
      stem: 'A function machine is "input then +5". The input is 7. What is the output?',
      tier: 'core',
      options: ['2', '12', '35', '57'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Add 5 to the input. 7 + 5 = 12.',
    },
    // Core 2: one-step multiply output
    {
      id: 'afm-q2',
      type: 'numeric-entry',
      stem: 'A function machine is "input then x6". The input is 4. What is the output?',
      tier: 'core',
      correctAnswer: 24,
      xpValue: 10,
      misconceptionId: 'afm-mis-digits-side-by-side',
      hint: 'Multiply the input by 6. 4 x 6 = 24.',
    },
    // Core 3: two-step output
    {
      id: 'afm-q3',
      type: 'multiple-choice',
      stem: 'A function machine is "input then x3 then -2". The input is 5. What is the output?',
      tier: 'core',
      options: ['15', '11', '13', '9'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'afm-mis-two-step-as-one',
      hint: 'First multiply: 5 x 3 = 15. Then subtract: 15 - 2 = 13.',
    },
    // Core 4: two-step output negative-looking
    {
      id: 'afm-q4',
      type: 'numeric-entry',
      stem: 'A function machine is "input then +4 then x2". The input is 3. What is the output?',
      tier: 'core',
      correctAnswer: 14,
      xpValue: 10,
      misconceptionId: 'afm-mis-left-to-right-bidmas',
      hint: 'Follow the boxes in order. First add: 3 + 4 = 7. Then multiply: 7 x 2 = 14.',
    },
    // Core 5: spot-misconception on left-to-right vs operations as written
    {
      id: 'afm-q5',
      type: 'spot-misconception',
      stem: 'A function machine is "input then +4 then x2". Tom says "I do x2 first because BIDMAS says multiplication beats addition, so for input 3 the output is 3 + 4 x 2 = 11".',
      tier: 'core',
      statements: [
        {
          text: 'Tom is right. BIDMAS always overrules the order of the boxes, so multiply before adding.',
          isMisconception: true,
        },
        {
          text: 'In fact a function machine applies the operations in the order the boxes are drawn, left to right, with no exceptions. For input 3 the +4 box runs first to give 7, and then the x2 box runs to give 14. BIDMAS settles the order inside one expression, not the order of separate boxes.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'afm-mis-left-to-right-bidmas',
    },
    // Core 6: one-step subtract output
    {
      id: 'afm-q6',
      type: 'multiple-choice',
      stem: 'A function machine is "input then -3". The input is 10. What is the output?',
      tier: 'core',
      options: ['13', '30', '7', '3'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Subtract 3 from the input. 10 - 3 = 7.',
    },
    // Core 7: drag-order matching machines to outputs for input 2
    {
      id: 'afm-q7',
      type: 'drag-order',
      stem: 'The input is 2. Drag these one-step function machines into order from the smallest output to the largest output.',
      tier: 'core',
      items: ['input then +3', 'input then x2', 'input then x5', 'input then -1'],
      correctOrder: [3, 1, 0, 2],
      xpValue: 20,
      hint: 'Apply each to input 2. +3 gives 5. x2 gives 4. x5 gives 10. -1 gives 1. Order: 1, 4, 5, 10.',
    },
    // Confident 1: inverse one-step
    {
      id: 'afm-q8',
      type: 'numeric-entry',
      stem: 'A function machine is "input then +9" and the output is 17. What is the input?',
      tier: 'confident',
      correctAnswer: 8,
      xpValue: 15,
      misconceptionId: 'afm-mis-inverse-same-op',
      hint: 'Inverse of +9 is -9. Compute 17 - 9 = 8.',
    },
    // Confident 2: inverse two-step
    {
      id: 'afm-q9',
      type: 'multiple-choice',
      stem: 'A function machine is "input then x4 then +1" and the output is 17. What is the input?',
      tier: 'confident',
      options: ['4', '5', '16', '3'],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'afm-mis-inverse-wrong-direction',
      hint: 'Undo from right to left, swapping each operation. 17 - 1 = 16, then 16 divided by 4 = 4.',
    },
    // Confident 3: missing-step
    {
      id: 'afm-q10',
      type: 'missing-step',
      stem: 'A function machine is "input then x5 then -3" with input 4. Fill in the missing step.',
      tier: 'confident',
      steps: [
        'Apply the first box: 4 x 5 = 20.',
        null,
        'So the output is 17.',
      ],
      missingStepIndex: 1,
      correctStep: 'Apply the second box: 20 - 3 = 17.',
      xpValue: 20,
    },
    // Confident 4: deriving the machine from a table
    {
      id: 'afm-q11',
      type: 'multiple-choice',
      stem: 'A machine maps input 1 to output 6, input 2 to output 11, and input 3 to output 16. Which machine fits?',
      tier: 'confident',
      options: [
        'input then x6',
        'input then x5 then +1',
        'input then +5',
        'input then x4 then +2',
      ],
      correctIndex: 1,
      xpValue: 15,
      hint: 'Outputs rise by 5 each step, so the multiplier is 5. Then 5 x 1 = 5, and the constant must be +1 to land on 6.',
    },
    // Confident 5: inverse two-step
    {
      id: 'afm-q12',
      type: 'numeric-entry',
      stem: 'A function machine is "input then x2 then +7" and the output is 21. What is the input?',
      tier: 'confident',
      correctAnswer: 7,
      xpValue: 15,
      misconceptionId: 'afm-mis-inverse-wrong-direction',
      hint: 'Undo +7 first: 21 - 7 = 14. Then undo x2: 14 divided by 2 = 7.',
    },
    // Confident 6: spot-misconception on computing output but stating as input
    {
      id: 'afm-q13',
      type: 'spot-misconception',
      stem: 'A function machine is "input then x3 then +2" and the output is 14. Maya writes "the answer is 44 because 14 x 3 + 2 = 44".',
      tier: 'confident',
      statements: [
        {
          text: 'Maya is right. To find the input from the output, run the same operations on the output.',
          isMisconception: true,
        },
        {
          text: 'In fact the question asks for the input, so the machine must run backwards from the output. Build the inverse machine: undo +2 with -2, then undo x3 with divide by 3. From 14: 14 - 2 = 12, then 12 divided by 3 = 4. The input is 4. Running the same operations on the output gives a different (incorrect) number.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'afm-mis-output-as-input',
    },
    // Confident 7: MCQ two-step output
    {
      id: 'afm-q14',
      type: 'multiple-choice',
      stem: 'A function machine is "input then x3 then +4" and the input is 6. What is the output?',
      tier: 'confident',
      options: ['18', '24', '22', '30'],
      correctIndex: 2,
      xpValue: 15,
      hint: '6 x 3 = 18. 18 + 4 = 22.',
    },
    // Confident 8: write machine as expression
    {
      id: 'afm-q15',
      type: 'multiple-choice',
      stem: 'A function machine is "input then x5 then -2". Which expression in x represents the output?',
      tier: 'confident',
      options: ['5(x - 2)', '5x - 2', 'x - 10', '2x - 5'],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'afm-mis-no-x-convention',
      hint: 'The input is x, the multiply box gives 5x, and the subtract box gives 5x - 2.',
    },
    // Challenge 1: Bond-style 3-step word problem
    {
      id: 'afm-q16',
      type: 'numeric-entry',
      stem:
        'In a maths-class activity, Niharika builds a three-step function machine: "input then x2 then +3 then x4". She feeds a whole number into the machine and the output is 52. What number did she feed in?',
      tier: 'challenge',
      correctAnswer: 5,
      xpValue: 25,
      hint: 'Build the inverse: divide by 4, then -3, then divide by 2. From 52: 52 / 4 = 13, 13 - 3 = 10, 10 / 2 = 5.',
    },
    // Challenge 2: 3-step machine as algebraic expression (Bond stretch using algebra)
    {
      id: 'afm-q17',
      type: 'multiple-choice',
      stem: 'A function machine is "input then x3 then +1". The input is called x. Which expression equals the output?',
      tier: 'challenge',
      options: ['x + 4', '3(x + 1)', '3x + 1', 'x + 3'],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'afm-mis-no-x-convention',
      hint: 'The x3 box turns x into 3x. The +1 box turns 3x into 3x + 1.',
    },
    // Challenge 3: derive 3-step from pairs and apply
    {
      id: 'afm-q18',
      type: 'numeric-entry',
      stem:
        'A three-step machine "input then x2 then +3 then x4" produces output 28 from a particular input. What is that input?',
      tier: 'challenge',
      correctAnswer: 2,
      xpValue: 25,
      hint: 'Inverse: divide by 4 (gives 7), then -3 (gives 4), then divide by 2 (gives 2). Check: 2 x 2 + 3 = 7 and 7 x 4 = 28.',
    },
    // Challenge 4: derive a two-step machine from two input-output pairs
    {
      id: 'afm-q19',
      type: 'multiple-choice',
      stem:
        'A maths-class machine maps input 0 to output 7 and input 1 to output 10. Which two-step machine fits?',
      tier: 'challenge',
      options: [
        'input then x3 then +7',
        'input then +7 then x3',
        'input then x10 then -3',
        'input then x7 then +3',
      ],
      correctIndex: 0,
      xpValue: 25,
      hint: 'Outputs rise by 3 when the input rises by 1, so the multiplier is 3. Input 0 gives 0 x 3 + c = c, and c must be 7. So x3 then +7.',
    },
    // Challenge 5: inverse 3-step
    {
      id: 'afm-q20',
      type: 'numeric-entry',
      stem:
        'A three-step machine is "input then +5 then x2 then -1". The output is 21. What is the input?',
      tier: 'challenge',
      correctAnswer: 6,
      xpValue: 25,
      misconceptionId: 'afm-mis-inverse-wrong-direction',
      hint: 'Inverse right to left: +1 gives 22, divide by 2 gives 11, -5 gives 6. Check: 6 + 5 = 11, 11 x 2 = 22, 22 - 1 = 21.',
    },
    // Challenge 6: another missing-step at challenge tier
    {
      id: 'afm-q21',
      type: 'missing-step',
      stem:
        'A two-step machine "input then x6 then -5" has output 25. Fill in the missing step in the inverse calculation.',
      tier: 'challenge',
      steps: [
        'Build the inverse machine: output then +5 then divide by 6.',
        'Apply the first inverse step: 25 + 5 = 30.',
        null,
        'So the input is 5.',
      ],
      missingStepIndex: 2,
      correctStep: 'Apply the second inverse step: 30 divided by 6 = 5.',
      xpValue: 25,
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a function-machine question where pupils applied BIDMAS to combine the two boxes into one expression instead of following the boxes left to right.
    {
      id: 'afm-mis-left-to-right-bidmas',
      description:
        'I think BIDMAS overrules the order of the boxes, so for "input then +4 then x2" with input 3 I compute 3 + 4 x 2 = 11.',
      triggerAnswer: 'bidmas-overrules-boxes',
      correction:
        'Actually a function machine runs the boxes strictly left to right. Each box takes the value coming in and produces a new value going out.',
      reExplanation:
        'For "input then +4 then x2" with input 3: the +4 box runs first to give 7, then the x2 box runs to give 14. BIDMAS controls the order of operations inside one expression. The boxes are separate steps, and the order is the order they are drawn.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 1F (Foundation, Non-calculator), commentary on an inverse-machine question where pupils repeated the original operations on the output instead of inverting them.
    {
      id: 'afm-mis-inverse-same-op',
      description:
        'To find the input from the output, I apply the same operations to the output as the original machine.',
      triggerAnswer: 'inverse-same-op',
      correction:
        'In fact the inverse machine swaps each operation for its opposite: +n becomes -n, xn becomes divide by n.',
      reExplanation:
        'For "input then +9" with output 17: the inverse is "output then -9", not "output then +9". So the input is 17 - 9 = 8. Adding 9 to the output instead gives 26, which is the wrong direction. The inverse machine undoes the original; it does not repeat it.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 01 (Foundation, Non-calculator), commentary on an inverse two-step machine where pupils inverted the operations correctly but kept the original left-to-right order.
    {
      id: 'afm-mis-inverse-wrong-direction',
      description:
        'I swap each operation for its inverse but keep the same left-to-right order, so for "input then x4 then +1" with output 17 I compute 17 divided by 4 first, then -1.',
      triggerAnswer: 'inverse-wrong-direction',
      correction:
        'Actually the inverse machine runs right to left. Both changes are needed: swap the operations AND reverse the direction.',
      reExplanation:
        'For "input then x4 then +1" with output 17: read right to left. The last forward operation was +1, so undo it first with -1: 17 - 1 = 16. The earlier forward operation was x4, so undo it next with divide by 4: 16 divided by 4 = 4. Reversing only the operations gives 17 / 4 - 1 = 3.25, which fails the check 3.25 x 4 + 1 = 14.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 4 Algebra, "Function Machines" page, "Common mistake" callout on pupils giving the result of running the machine on the output number when the question asks for the input.
    {
      id: 'afm-mis-output-as-input',
      description:
        'When asked for the input given the output, I run the original machine on the output and write down that value as the input.',
      triggerAnswer: 'output-as-input',
      correction:
        'In fact the question asks what value the machine started with, so run the inverse machine on the output, not the original.',
      reExplanation:
        'For "input then x3 then +2" with output 14: build the inverse, output then -2 then divide by 3. From 14: 14 - 2 = 12, then 12 divided by 3 = 4. The input was 4. Running the original on 14 gives 14 x 3 + 2 = 44, which is the output you would get FROM 14, not the input that produced 14.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 4 "Algebra" by Kuchemann, on pupils failing to use the variable convention when asked to write an expression in x for a function machine.
    {
      id: 'afm-mis-no-x-convention',
      description:
        'When asked to write the output of a machine as an expression, I write the steps as a sentence and forget that the input is called x.',
      triggerAnswer: 'no-x-convention',
      correction:
        'Actually call the input x. Each operation box then changes the expression, and the final expression is the output.',
      reExplanation:
        'For "input then x5 then -2": start with x. After the x5 box the value is 5x. After the -2 box the value is 5x - 2. The output is the expression 5x - 2, with x as the unknown input. Without calling the input x, the algebraic link to expressions and linear equations is lost.',
    },
    // Source: NCETM Secondary Magazine, Issue 122, "Persistent Misconceptions in Equation Solving" article, citing pupil work that reads a two-step machine as if only the first box ran and ignores any later operation.
    {
      id: 'afm-mis-two-step-as-one',
      description:
        'I read a two-step machine as if only the first box ran. For "input then x3 then -2" with input 5 I write the output as 15.',
      triggerAnswer: 'two-step-as-one',
      correction:
        'In fact every box must run. Carry the value from the first box into the second box and apply that operation too.',
      reExplanation:
        'For "input then x3 then -2" with input 5: the x3 box gives 5 x 3 = 15. The -2 box then takes 15 and gives 15 - 2 = 13. The output is 13, not 15. Skipping the second box turns a two-step machine into a one-step machine and gives a different (wrong) answer.',
    },
    // Authored, no external source: classroom-observed slip where pupils press the digits of a multiplication together (3 x 4 written as 34) when reading an early function machine.
    {
      id: 'afm-mis-digits-side-by-side',
      description:
        'I read "input then x6" with input 4 as the digits side by side, writing the output as 46 instead of 24.',
      triggerAnswer: 'digits-side-by-side',
      correction:
        'Actually x6 means multiplied by 6, not the digit 6 written next to the input.',
      reExplanation:
        'For "input then x6" with input 4: multiply, do not concatenate. 4 x 6 = 24. Writing the digits side by side as 46 mixes place value (tens and units) with multiplication and gives a value almost twice as large. The x symbol is always multiplication, even when no space appears between the digits.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const algebraFunctionMachinesZoneNodes = [algebraFunctionMachines]
