import type { SkillNode } from '@/types/content'

export const algebraEquationsWithBrackets: SkillNode = {
  id: 'maths-algebra-equations-with-brackets',
  title: 'Linear Equations with Brackets',
  description:
    'Solve linear equations where the unknown sits inside a bracket. Expand the bracket(s) first using the distributive rule, then solve as a normal linear equation with inverse operations. Cover single-bracket equations like 3(x + 2) = 18, negative multipliers like -2(x - 1) = 8, equations with brackets on both sides like 2(x + 3) = 3(x - 1), and equations with two brackets on the same side like 2(x + 1) + 3(x - 2) = 10. The order matters: expand first, never divide before expanding.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-algebra',
  zoneName: 'Basic Algebra',
  tier: 'challenge',
  prerequisites: ['maths-algebra-simple-equations', 'maths-algebra-expanding-single-brackets'],
  curriculum: {
    ks3Objective:
      'Solve linear equations in one unknown, including those that need to be rearranged or that contain brackets.',
    awardingBodies: {
      aqa: 'A17 Solve linear equations including those with brackets (GCSE Mathematics 8300)',
      edexcel: 'A17 Solve linear equations involving brackets and the unknown on both sides (GCSE Mathematics 1MA1)',
      ocr: '6.04a Solve linear equations involving brackets (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'aewb-scene-expand-then-solve',
      title: 'Expand First, Then Solve: The Step Sequence',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to reveal the order of work for 3(x + 4) = 21. The first move is always to expand the bracket using the distributive rule. Once the bracket is gone, the equation looks like a normal two-step problem. Skipping the expansion and trying to divide first hides the +4 inside the bracket and leads to the wrong answer.',
      data: {
        viewBox: '0 0 100 100',
        hotspots: [
          {
            id: 'aewb-h-equation',
            x: 20,
            y: 18,
            label: 'Step 1: 3(x + 4) = 21',
            description: 'Start with the equation as given. The unknown sits inside the bracket.',
          },
          {
            id: 'aewb-h-expand',
            x: 50,
            y: 35,
            label: 'Step 2: Expand 3 x x and 3 x 4',
            description: 'Multiply the 3 by EVERY term inside the bracket: 3 x x = 3x and 3 x 4 = 12.',
          },
          {
            id: 'aewb-h-expanded',
            x: 50,
            y: 55,
            label: 'Step 3: 3x + 12 = 21',
            description: 'The bracket is gone. The equation now reads like a normal two-step problem.',
          },
          {
            id: 'aewb-h-subtract',
            x: 75,
            y: 70,
            label: 'Step 4: Subtract 12 from both sides',
            description: 'Undo the addition first: 3x = 9.',
          },
          {
            id: 'aewb-h-divide',
            x: 75,
            y: 88,
            label: 'Step 5: Divide both sides by 3',
            description: 'Undo the multiplication to isolate x: x = 3. Check: 3(3 + 4) = 3 x 7 = 21.',
          },
        ],
      },
    },
    {
      id: 'aewb-scene-negative-multiplier',
      title: 'Negative Multipliers: Sign Care on Every Term',
      type: 'diagram',
      instructions:
        'Read how a negative multiplier flips the sign of EVERY term inside the bracket. For -2(x - 1) = 8, the -2 multiplies the x to give -2x, and the -2 multiplies the -1 to give +2 (negative times negative is positive). The equation becomes -2x + 2 = 8. Subtract 2 from both sides: -2x = 6. Divide both sides by -2: x = -3. The most common slip is to write -2x - 2 instead of -2x + 2, forgetting that the inside term was already negative.',
      data: {
        rule: 'When the multiplier is negative, multiply it through with full sign care. A negative times a negative gives a positive.',
        examples: [
          { equation: '-2(x - 1) = 8', expanded: '-2x + 2 = 8', solved: 'x = -3' },
          { equation: '-3(x + 4) = 6', expanded: '-3x - 12 = 6', solved: 'x = -6' },
          { equation: '-(x - 5) = 2', expanded: '-x + 5 = 2', solved: 'x = 3' },
        ],
      },
    },
    {
      id: 'aewb-scene-two-brackets',
      title: 'Brackets on Both Sides: Expand Each, Then Collect',
      type: 'diagram',
      instructions:
        'Read how 2(x + 3) = 3(x - 1) is handled. Expand each side separately first: the left becomes 2x + 6 and the right becomes 3x - 3. Now subtract 2x from both sides to collect the x terms on one side: 6 = x - 3. Add 3 to both sides: x = 9. The rule is the same as for any equation with the unknown on both sides; only the first step (expanding twice) is different. Never try to "match" the brackets without expanding first.',
      data: {
        rule: 'When brackets sit on both sides, expand each bracket separately, then collect like terms.',
        worked: [
          { state: '2(x + 3) = 3(x - 1)', operation: 'expand both sides' },
          { state: '2x + 6 = 3x - 3', operation: 'subtract 2x from both sides' },
          { state: '6 = x - 3', operation: 'add 3 to both sides' },
          { state: '9 = x', operation: 'solved: x = 9' },
        ],
        check: '2(9 + 3) = 2 x 12 = 24 and 3(9 - 1) = 3 x 8 = 24. Both sides equal 24.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'aewb-worked-1',
      title: 'Solve 3(x + 4) = 21 (single bracket)',
      steps: [
        {
          explanation:
            'Identify the structure. The unknown sits inside a bracket multiplied by 3.',
          maths: '3(x + 4) = 21',
        },
        {
          explanation:
            'Expand the bracket: multiply the 3 by every term inside.',
          maths: '3 x x + 3 x 4 = 21',
        },
        {
          explanation:
            'Simplify the left side.',
          maths: '3x + 12 = 21',
        },
        {
          explanation:
            'Subtract 12 from both sides to undo the addition.',
          maths: '3x = 9',
        },
        {
          explanation:
            'Divide both sides by 3 to isolate x.',
          maths: 'x = 3',
        },
        {
          explanation: 'Check by substituting back into the original equation.',
          maths: '3(3 + 4) = 3 x 7 = 21',
        },
      ],
    },
    {
      id: 'aewb-worked-2',
      title: 'Solve 4(x - 1) = 2(x + 5) (brackets on both sides)',
      steps: [
        {
          explanation:
            'Spot brackets on both sides. Expand each side separately before doing anything else.',
          maths: '4(x - 1) = 2(x + 5)',
        },
        {
          explanation:
            'Expand the left bracket.',
          maths: '4x - 4 = 2(x + 5)',
        },
        {
          explanation:
            'Expand the right bracket.',
          maths: '4x - 4 = 2x + 10',
        },
        {
          explanation:
            'Subtract 2x from both sides to collect the x terms on the left.',
          maths: '2x - 4 = 10',
        },
        {
          explanation:
            'Add 4 to both sides.',
          maths: '2x = 14',
        },
        {
          explanation:
            'Divide both sides by 2.',
          maths: 'x = 7',
        },
        {
          explanation: 'Check: 4(7 - 1) = 4 x 6 = 24 and 2(7 + 5) = 2 x 12 = 24. Both sides equal 24.',
          maths: 'x = 7',
        },
      ],
    },
  ],
  questions: [
    // ===== CORE (7) =====
    // Core 1: simplest single bracket
    {
      id: 'aewb-q1',
      type: 'multiple-choice',
      stem: 'Solve 3(x + 2) = 18. What is the value of x?',
      tier: 'core',
      options: ['4', '6', '5', '20'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'aewb-mis-expand-as-addition',
      hint: 'Expand: 3x + 6 = 18. Subtract 6: 3x = 12. Divide by 3: x = 4. The slip "3 + x + 2 = 18" reads the 3 as an addition rather than a multiplier.',
    },
    // Core 2: single bracket with subtraction inside
    {
      id: 'aewb-q2',
      type: 'numeric-entry',
      stem: 'Solve 2(x - 3) = 10. What is the value of x?',
      tier: 'core',
      correctAnswer: 8,
      xpValue: 10,
      hint: 'Expand: 2x - 6 = 10. Add 6: 2x = 16. Divide by 2: x = 8.',
    },
    // Core 3: MCQ that targets the divide-before-expanding misconception
    {
      id: 'aewb-q3',
      type: 'multiple-choice',
      stem: 'Solve 4(x + 1) = 20. What is the value of x?',
      tier: 'core',
      options: ['5', '4', '6', '19'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'aewb-mis-divide-before-expand',
      hint: 'Expand first: 4x + 4 = 20. Subtract 4: 4x = 16. Divide by 4: x = 4. (Dividing by 4 before expanding gives x + 1 = 5, which also gives x = 4 here, but the safer habit is to expand first.)',
    },
    // Core 4: expand-then-solve missing-term distractor
    {
      id: 'aewb-q4',
      type: 'multiple-choice',
      stem: 'Solve 5(x + 2) = 25. What is the value of x?',
      tier: 'core',
      options: ['23', '5', '3', '7'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'aewb-mis-missing-term',
      hint: 'Expand: 5x + 10 = 25. Subtract 10: 5x = 15. Divide by 5: x = 3. The slip "5x + 2 = 25" forgets to multiply the 2 by the 5.',
    },
    // Core 5: MCQ, single bracket
    {
      id: 'aewb-q5',
      type: 'multiple-choice',
      stem: 'Solve 6(x + 1) = 24. What is the value of x?',
      tier: 'core',
      options: ['3', '18', '4', '5'],
      correctIndex: 0,
      xpValue: 10,
      hint: 'Expand: 6x + 6 = 24. Subtract 6: 6x = 18. Divide by 6: x = 3.',
    },
    // Core 6: spot-misconception on dividing before expanding
    {
      id: 'aewb-q6',
      type: 'spot-misconception',
      stem: 'Maya solves 3(x + 4) = 21 by writing "I divide both sides by 3 first, giving 3(x + 4)/3 = 21/3, so x = 7".',
      tier: 'core',
      statements: [
        {
          text: 'Maya is right. Dividing first cancels the 3 outside the bracket, so 3(x + 4) / 3 leaves just x = 7.',
          isMisconception: true,
        },
        {
          text: 'In fact dividing the LEFT by 3 gives x + 4, not x. The +4 is still inside the bracket. So 3(x + 4) / 3 = x + 4, and the equation becomes x + 4 = 7, giving x = 3. Maya forgot that the bracket contains TWO terms, both of which were multiplied by 3.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'aewb-mis-divide-before-expand',
    },
    // Core 7: drag-order steps for solving a single bracket
    {
      id: 'aewb-q7',
      type: 'drag-order',
      stem: 'Drag the steps into the correct order for solving 2(x + 5) = 18.',
      tier: 'core',
      items: [
        'Divide both sides by 2: x = 4.',
        'Expand the bracket: 2x + 10 = 18.',
        'Subtract 10 from both sides: 2x = 8.',
      ],
      correctOrder: [1, 2, 0],
      xpValue: 20,
      hint: 'Always expand FIRST, then undo addition or subtraction, then undo the multiplication.',
    },
    // ===== CONFIDENT (8) =====
    // Confident 1: negative multiplier
    {
      id: 'aewb-q8',
      type: 'numeric-entry',
      stem: 'Solve -2(x - 1) = 8. What is the value of x?',
      tier: 'confident',
      correctAnswer: -3,
      xpValue: 15,
      misconceptionId: 'aewb-mis-negative-sign-error',
      hint: 'Expand carefully: -2 x x = -2x and -2 x (-1) = +2. So -2x + 2 = 8. Subtract 2: -2x = 6. Divide by -2: x = -3.',
    },
    // Confident 2: brackets on both sides (matches worked example 2)
    {
      id: 'aewb-q9',
      type: 'multiple-choice',
      stem: 'Solve 2(x + 3) = 3(x - 1). What is the value of x?',
      tier: 'confident',
      options: ['3', '6', '12', '9'],
      correctIndex: 3,
      xpValue: 15,
      hint: 'Expand each side: 2x + 6 = 3x - 3. Subtract 2x: 6 = x - 3. Add 3: x = 9.',
    },
    // Confident 3: two brackets on the same side
    {
      id: 'aewb-q10',
      type: 'numeric-entry',
      stem: 'Solve 2(x + 1) + 3(x - 2) = 10. What is the value of x?',
      tier: 'confident',
      correctAnswer: 2.8,
      tolerance: 0.05,
      xpValue: 15,
      misconceptionId: 'aewb-mis-two-brackets-as-one',
      hint: 'Expand each bracket separately: 2x + 2 + 3x - 6 = 10. Collect like terms: 5x - 4 = 10. Add 4: 5x = 14. Divide by 5: x = 2.8.',
    },
    // Confident 4: spot the sign-error misconception
    {
      id: 'aewb-q11',
      type: 'spot-misconception',
      stem: 'Liam expands -3(x - 2) and writes "-3x - 6, because -3 times -2 gives -6".',
      tier: 'confident',
      statements: [
        {
          text: 'Liam is right. Multiplying two negatives just keeps the negative sign, so -3 x -2 = -6.',
          isMisconception: true,
        },
        {
          text: 'In fact a negative times a negative gives a POSITIVE. So -3 x (-2) = +6, and -3(x - 2) expands to -3x + 6. Liam kept the sign instead of flipping it.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'aewb-mis-negative-sign-error',
    },
    // Confident 5: missing-step
    {
      id: 'aewb-q12',
      type: 'missing-step',
      stem: 'Fill in the missing step. Aisha solves 5(x - 2) = 3(x + 4).',
      tier: 'confident',
      steps: [
        'Expand both sides: 5x - 10 = 3x + 12.',
        'Subtract 3x from both sides: 2x - 10 = 12.',
        null,
        'Divide both sides by 2: x = 11. Check: 5(11 - 2) = 45 and 3(11 + 4) = 45.',
      ],
      missingStepIndex: 2,
      correctStep: 'Add 10 to both sides: 2x = 22.',
      xpValue: 20,
    },
    // Confident 6: bracket on one side, plain term on the other
    {
      id: 'aewb-q13',
      type: 'multiple-choice',
      stem: 'Solve 4(x + 3) = 2x + 18. What is the value of x?',
      tier: 'confident',
      options: ['3', '6', '5', '15'],
      correctIndex: 0,
      xpValue: 15,
      hint: 'Expand the left: 4x + 12 = 2x + 18. Subtract 2x: 2x + 12 = 18. Subtract 12: 2x = 6. Divide by 2: x = 3.',
    },
    // Confident 7: numeric entry with negative answer
    {
      id: 'aewb-q14',
      type: 'numeric-entry',
      stem: 'Solve 3(x + 5) = 9. What is the value of x?',
      tier: 'confident',
      correctAnswer: -2,
      xpValue: 15,
      misconceptionId: 'aewb-mis-wrong-inverse-after-expand',
      hint: 'Expand: 3x + 15 = 9. Subtract 15 (do NOT add 15): 3x = -6. Divide by 3: x = -2.',
    },
    // Confident 8: equation that LOOKS divisible but isn't cleanly
    {
      id: 'aewb-q15',
      type: 'multiple-choice',
      stem: 'Solve 5(x - 1) = 12. What is the value of x?',
      tier: 'confident',
      options: ['2.4', '3.4', '13/5', '7/5'],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'aewb-mis-divide-before-expand',
      hint: 'Expand: 5x - 5 = 12. Add 5: 5x = 17. Divide by 5: x = 17/5 = 3.4. Dividing first gives x - 1 = 12/5 = 2.4, then x = 3.4 (same answer). Both routes work IF you remember the +1 at the end.',
    },
    // ===== CHALLENGE (6) =====
    // Challenge 1: Bond-style word problem (perimeter with bracketed sides)
    {
      id: 'aewb-q16',
      type: 'numeric-entry',
      stem: 'A rectangle has a length of (x + 3) cm and a width of (x - 1) cm. The perimeter is 24 cm. Find the value of x.',
      tier: 'challenge',
      correctAnswer: 5,
      tolerance: 0.05,
      xpValue: 25,
      misconceptionId: 'aewb-mis-final-answer-mislabel',
      hint: 'Perimeter = 2(length + width) = 2((x + 3) + (x - 1)) = 2(2x + 2) = 4x + 4. So 4x + 4 = 24. Subtract 4: 4x = 20. Divide by 4: x = 5. The question asks for x, not for the length, so the answer is 5 (not 8).',
    },
    // Challenge 2: brackets on both sides with negatives
    {
      id: 'aewb-q17',
      type: 'multiple-choice',
      stem: 'Solve 3(2x - 1) = 2(x + 5). What is the value of x?',
      tier: 'challenge',
      options: ['2', '6.5', '4', '3.25'],
      correctIndex: 3,
      xpValue: 25,
      hint: 'Expand: 6x - 3 = 2x + 10. Subtract 2x: 4x - 3 = 10. Add 3: 4x = 13. Divide by 4: x = 3.25 (also written 13/4).',
    },
    // Challenge 3: two brackets with negative multiplier
    {
      id: 'aewb-q18',
      type: 'numeric-entry',
      stem: 'Solve 4(x + 2) - 3(x - 1) = 15. What is the value of x?',
      tier: 'challenge',
      correctAnswer: 4,
      xpValue: 25,
      misconceptionId: 'aewb-mis-negative-sign-error',
      hint: 'Expand carefully: 4x + 8 - 3x + 3 = 15 (note the -3 times -1 gives +3). Collect: x + 11 = 15. Subtract 11: x = 4.',
    },
    // Challenge 4: Bond-style word problem (age)
    {
      id: 'aewb-q19',
      type: 'numeric-entry',
      stem: 'Niharika is x years old. Her brother is 4 years older. Three times her brother\'s age is the same as 4 times Niharika\'s age. Find Niharika\'s age.',
      tier: 'challenge',
      correctAnswer: 12,
      unit: 'years',
      xpValue: 25,
      hint: 'Brother\'s age = (x + 4). The equation is 3(x + 4) = 4x. Expand: 3x + 12 = 4x. Subtract 3x: 12 = x. So Niharika is 12 years old. (Check: brother is 16, 3 x 16 = 48 and 4 x 12 = 48.)',
    },
    // Challenge 5: free-text explain
    {
      id: 'aewb-q20',
      type: 'free-text',
      stem: 'Tom solves 2(x + 3) = 10 by dividing both sides by 2 first to get x + 3 = 5, then subtracts 3 to get x = 2. Explain in one or two sentences why his method works here, and when it can go wrong.',
      tier: 'challenge',
      sampleAnswer:
        'Tom\'s method works because the right side (10) is exactly divisible by the bracket multiplier (2), so x + 3 = 5 is a clean integer equation. It goes wrong when the right side does not divide cleanly by the multiplier, because the learner is left dividing terms by an awkward fraction. The safer general habit is to expand first, then solve, because that works for every linear equation with brackets, including those with awkward numbers or with brackets on both sides.',
      keywords: ['expand', 'divide', 'multiplier', 'safer', 'general'],
      xpValue: 25,
      misconceptionId: 'aewb-mis-divide-before-expand',
      hint: 'Tom\'s shortcut depends on the right side being divisible by the bracket multiplier. Expanding first works for ALL linear equations with brackets, not just lucky cases.',
    },
    // Challenge 6: equation with awkward fraction in two brackets
    {
      id: 'aewb-q21',
      type: 'multiple-choice',
      stem: 'A school caretaker buys (x + 2) packs of pens at £3 a pack and (x - 1) packs of pencils at £2 a pack. The total cost is £14. How many packs of pens did the caretaker buy?',
      tier: 'challenge',
      options: ['2', '4', '3', '5'],
      correctIndex: 1,
      xpValue: 25,
      hint: 'The equation is 3(x + 2) + 2(x - 1) = 14. Expand: 3x + 6 + 2x - 2 = 14. Collect: 5x + 4 = 14. Subtract 4: 5x = 10. Divide by 5: x = 2. So pens packs = x + 2 = 4.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a "solve an equation with brackets" item where pupils divided both sides by the bracket multiplier before expanding and lost the constant inside the bracket.
    {
      id: 'aewb-mis-divide-before-expand',
      description:
        'I divide both sides by the bracket multiplier before expanding, treating the whole left side as if the constant inside the bracket vanishes. For 3(x + 4) = 21 I write x = 7 instead of x = 3.',
      triggerAnswer: 'divide-before-expand',
      correction:
        'Actually dividing the left by 3 gives x + 4, not x. The +4 was multiplied by the 3 and stays attached.',
      reExplanation:
        'For 3(x + 4) = 21: expand first. 3 x x = 3x and 3 x 4 = 12, giving 3x + 12 = 21. Then 3x = 9 and x = 3. Dividing by 3 works only if you remember the bracket: 3(x + 4)/3 = x + 4, so x + 4 = 7, giving x = 3. The divide-first shortcut hides the +4, so learners often write x = 7 instead.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 1F (Foundation, Non-calculator), commentary on a "negative multiplier into a bracket" item where pupils kept the sign of the inside term instead of flipping it.
    {
      id: 'aewb-mis-negative-sign-error',
      description:
        'When the multiplier is negative, I keep the sign of the inside term instead of flipping it. So -3(x - 2) becomes -3x - 6 instead of -3x + 6.',
      triggerAnswer: 'negative-sign-error',
      correction:
        'In fact a negative times a negative gives a positive. -3 x (-2) = +6, so -3(x - 2) expands to -3x + 6.',
      reExplanation:
        'The negative multiplier sits in front of every term inside the bracket. -3(x - 2) means (-3) x x + (-3) x (-2). The first product is -3x. The second is -3 x -2 = +6 (negative times negative is positive). So the expansion is -3x + 6. The slip -3x - 6 keeps the sign of the inside -2 unchanged, which would only be right if the multiplier were positive.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 01 (Foundation, Non-calculator), commentary on an "expand a single bracket" item where pupils multiplied the first term but not the second.
    {
      id: 'aewb-mis-missing-term',
      description:
        'When I expand a bracket, I multiply the first term but forget the second. So 5(x + 2) becomes 5x + 2 instead of 5x + 10.',
      triggerAnswer: 'missing-term',
      correction:
        'Actually the multiplier applies to EVERY term inside the bracket. 5(x + 2) means 5 x x + 5 x 2 = 5x + 10.',
      reExplanation:
        'For 5(x + 2) = 25: a correct expansion gives 5x + 10 = 25, so 5x = 15 and x = 3. Forgetting the second multiplication gives 5x + 2 = 25, then x = 23/5 = 4.6, which fails the check (5(4.6 + 2) = 5 x 6.6 = 33, not 25). The distributive rule says a(b + c) = ab + ac. Every inside term gets multiplied.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 4 Algebra, "Solving Equations with Brackets" page, "Common mistake" callout on treating two brackets on the same side as if they were one combined bracket.
    {
      id: 'aewb-mis-two-brackets-as-one',
      description:
        'When two brackets sit on the same side, I treat them as one big bracket. So 2(x + 1) + 3(x - 2) becomes 5(x + 1)(x - 2) or 5(2x - 1) instead of expanding each one separately.',
      triggerAnswer: 'two-brackets-as-one',
      correction:
        'In fact each bracket is expanded on its own first, then the resulting expressions are combined.',
      reExplanation:
        'For 2(x + 1) + 3(x - 2) = 10: expand each bracket. 2(x + 1) = 2x + 2. 3(x - 2) = 3x - 6. Combine: 2x + 2 + 3x - 6 = 5x - 4. So 5x - 4 = 10, giving 5x = 14 and x = 2.8. Trying to merge the brackets first ignores that they have different multipliers (2 and 3), so they cannot be combined until each has been expanded.',
    },
    // Source: NCETM Secondary Magazine, Issue 122, "Persistent Misconceptions in Equation Solving" article, citing pupil work that expanded brackets correctly but then used the wrong inverse operation to finish.
    {
      id: 'aewb-mis-wrong-inverse-after-expand',
      description:
        'I expand the bracket correctly but then use the wrong inverse to finish. For 3x + 12 = 21, I divide by 3 first (getting x + 4 = 7) and then subtract 4, which works but is the long way round; or I add 12 to both sides instead of subtracting.',
      triggerAnswer: 'wrong-inverse-after-expand',
      correction:
        'Actually undo the operations in reverse order. After expanding, subtract the constant first, then divide by the coefficient of x.',
      reExplanation:
        'For 3x + 12 = 21: build order is "multiply by 3, then add 12". Undo order is "subtract 12, then divide by 3". So 3x = 9 first, then x = 3. Adding 12 gives 3x + 24 = 33, a valid equation but it does not isolate x. Dividing by 3 first gives x + 4 = 7, which works but the +12 also gets divided.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 4 "Algebra" by Kuchemann, on pupils who reach a correct intermediate line but then equate the final answer to something other than the unknown.
    {
      id: 'aewb-mis-final-answer-mislabel',
      description:
        'I solve correctly but mis-label the final answer. For a perimeter problem where x = 5 makes the length (x + 3) = 8, I write "the length is x = 5" or "the answer is 5 + 3 = 8" without saying what each quantity is.',
      triggerAnswer: 'final-answer-mislabel',
      correction:
        'In fact the value of x is x itself. Any other quantity asked for (a length, an age, a number of items) must be computed from x at the end.',
      reExplanation:
        'For "a rectangle has length (x + 3) cm and width (x - 1) cm with perimeter 24 cm, find x": solving gives x = 5. The question asks for x, so the answer is 5. If it asked for the length, the answer would be x + 3 = 8 cm. Re-read the question after solving and substitute into the right quantity. The slip confuses "value of x" with "value of an expression containing x".',
    },
    // Authored, no external source: classroom-observed slip where pupils expand the bracket using addition instead of multiplication, treating 3(x + 4) as if it were 3 + x + 4.
    {
      id: 'aewb-mis-expand-as-addition',
      description:
        'I read the bracket multiplier as an addition, so 3(x + 4) becomes 3 + x + 4 = x + 7 instead of 3x + 12.',
      triggerAnswer: 'expand-as-addition',
      correction:
        'Actually the number outside a bracket multiplies what is inside. 3(x + 4) means 3 times (x + 4), not 3 plus (x + 4).',
      reExplanation:
        'For 3(x + 4) = 21: the 3 is a multiplier, not an addend. Expand to 3x + 12 (each inside term multiplied by 3). The equation becomes 3x + 12 = 21, so x = 3. Reading the 3 as an addition gives x + 7 = 21 and x = 14, which fails the check (3(14 + 4) = 54, not 21). The notation a(b + c) always means a multiplied by (b + c).',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const algebraEquationsWithBracketsZoneNodes = [algebraEquationsWithBrackets]
