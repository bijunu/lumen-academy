import type { SkillNode } from '@/types/content'

export const algebraSimpleEquations: SkillNode = {
  id: 'maths-algebra-simple-equations',
  title: 'Solving Simple Linear Equations',
  description:
    'Solve linear equations in one unknown using inverse operations to peel away each step until the unknown stands alone. Cover one-step (x + 3 = 10), two-step (2x + 5 = 13), three-step with brackets (2(x + 3) = 14), and equations with the unknown on both sides (3x + 4 = x + 10). Apply the rule that whatever you do to one side of the equation, you must do to the other side too.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-algebra',
  zoneName: 'Basic Algebra',
  tier: 'confident',
  prerequisites: ['maths-algebra-introduction', 'maths-bidmas-with-substitution'],
  curriculum: {
    ks3Objective:
      'Solve linear equations in one unknown algebraically (including those with the unknown on both sides of the equation); use inverse operations to undo each step.',
    awardingBodies: {
      aqa: 'A17 Solve linear equations in one unknown algebraically (GCSE Mathematics 8300)',
      edexcel: 'A17 Solve linear equations in one unknown algebraically, including with the unknown on both sides (GCSE Mathematics 1MA1)',
      ocr: '6.04a Solve linear equations in one unknown (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'ase-scene-balance',
      title: 'Balance Scales: What You Do to One Side, Do to the Other',
      type: 'simulation',
      instructions:
        'See how a balance scale models an equation. The scale tips left for the expression with x and right for the constant. To find x, take the same weight off both sides until x sits alone. For x + 3 = 10, take 3 off both sides: x = 7. For 2x = 14, halve both sides: x = 7. The scale stays balanced because the same operation is applied to both sides.',
      data: {
        examples: [
          {
            equation: 'x + 3 = 10',
            step: 'subtract 3 from both sides',
            simplified: 'x = 7',
            inverse: 'subtract',
          },
          {
            equation: '2x = 14',
            step: 'divide both sides by 2',
            simplified: 'x = 7',
            inverse: 'divide',
          },
          {
            equation: 'x / 4 = 3',
            step: 'multiply both sides by 4',
            simplified: 'x = 12',
            inverse: 'multiply',
          },
        ],
        rule: 'Whatever you do to one side of the equation, you must do to the OTHER side too. The equation stays in balance.',
      },
    },
    {
      id: 'ase-scene-two-step-walk',
      title: 'Two-Step Equations: Peel Outwards In',
      type: 'simulation',
      instructions:
        'See how 2x + 5 = 13 is solved by undoing operations in reverse order. The expression was built by first multiplying x by 2 (giving 2x), then adding 5 (giving 2x + 5). To undo, peel from the outside in: first subtract 5 (the LAST operation applied) from both sides to get 2x = 8, then divide both sides by 2 to get x = 4. Always undo addition or subtraction before undoing multiplication or division.',
      data: {
        equation: '2x + 5 = 13',
        buildOrder: ['multiply x by 2', 'add 5'],
        undoOrder: ['subtract 5 (undo the addition)', 'divide by 2 (undo the multiplication)'],
        workings: [
          { state: '2x + 5 = 13', operation: 'subtract 5 from both sides' },
          { state: '2x = 8', operation: 'divide both sides by 2' },
          { state: 'x = 4', operation: 'solved' },
        ],
        rule: 'Undo operations in reverse order: peel the outer layer first.',
      },
    },
    {
      id: 'ase-scene-both-sides',
      title: 'Unknown on Both Sides: Collect First',
      type: 'simulation',
      instructions:
        'See how 3x + 4 = x + 10 is solved by collecting the unknown on one side first. Subtract x from both sides (the smaller coefficient) to get 2x + 4 = 10. Now the unknown only appears on the left, and the equation reads like a normal two-step problem. Subtract 4: 2x = 6. Divide by 2: x = 3. Subtracting the smaller coefficient keeps the leading x term positive, which makes the rest of the working tidier.',
      data: {
        equation: '3x + 4 = x + 10',
        workings: [
          { state: '3x + 4 = x + 10', operation: 'subtract x from both sides' },
          { state: '2x + 4 = 10', operation: 'subtract 4 from both sides' },
          { state: '2x = 6', operation: 'divide both sides by 2' },
          { state: 'x = 3', operation: 'solved' },
        ],
        verification: '3 x 3 + 4 = 9 + 4 = 13 and 3 + 10 = 13: both sides equal 13.',
        rule: 'When the unknown sits on both sides, subtract the smaller coefficient from BOTH sides (do not just delete it from one side).',
      },
    },
  ],
  workedExamples: [
    {
      id: 'ase-worked-1',
      title: 'Solve 2x + 5 = 13',
      steps: [
        {
          explanation:
            'Identify the operations applied to x: multiply by 2, then add 5.',
          maths: 'inverse-of order: subtract 5 first, then divide by 2',
        },
        {
          explanation:
            'Subtract 5 from BOTH sides (whatever you do to one, do to the other).',
          maths: '2x + 5 - 5 = 13 - 5',
        },
        {
          explanation:
            'Simplify.',
          maths: '2x = 8',
        },
        {
          explanation:
            'Divide BOTH sides by 2 to isolate x.',
          maths: '2x / 2 = 8 / 2',
        },
        {
          explanation:
            'Simplify.',
          maths: 'x = 4',
        },
        {
          explanation: 'Check: 2 x 4 + 5 = 8 + 5 = 13, matching the right-hand side.',
          maths: 'x = 4',
        },
      ],
    },
    {
      id: 'ase-worked-2',
      title: 'Solve 3x + 4 = x + 10 (unknown on both sides)',
      steps: [
        {
          explanation:
            'Spot the unknown on both sides. The smaller coefficient is x (on the right), so subtract x from both sides.',
          maths: 'subtract x from both sides',
        },
        {
          explanation:
            'Apply the subtraction.',
          maths: '3x - x + 4 = x - x + 10',
        },
        {
          explanation:
            'Simplify both sides.',
          maths: '2x + 4 = 10',
        },
        {
          explanation:
            'Now it is a two-step equation. Subtract 4 from both sides.',
          maths: '2x = 6',
        },
        {
          explanation:
            'Divide both sides by 2.',
          maths: 'x = 3',
        },
        {
          explanation: 'Check: 3 x 3 + 4 = 13 and 3 + 10 = 13. Both sides agree.',
          maths: 'x = 3',
        },
      ],
    },
  ],
  questions: [
    // Core 1: one-step addition
    {
      id: 'ase-q1',
      type: 'multiple-choice',
      stem: 'Solve x + 3 = 10. What is the value of x?',
      tier: 'core',
      options: ['7', '13', '5', '4'],
      correctIndex: 0,
      xpValue: 10,
      hint: 'Subtract 3 from both sides. x = 10 - 3 = 7.',
    },
    // Core 2: one-step subtraction
    {
      id: 'ase-q2',
      type: 'multiple-choice',
      stem: 'Solve x - 5 = 2. What is the value of x?',
      tier: 'core',
      options: ['-3', '7', '10', '3'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Add 5 to both sides. x = 2 + 5 = 7.',
    },
    // Core 3: one-step multiplication
    {
      id: 'ase-q3',
      type: 'multiple-choice',
      stem: 'Solve 3x = 12. What is the value of x?',
      tier: 'core',
      options: ['1', '36', '4', '9'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'ase-mis-inverse-wrong-direction',
      hint: 'Divide both sides by 3. x = 12 / 3 = 4.',
    },
    // Core 4: one-step division
    {
      id: 'ase-q4',
      type: 'multiple-choice',
      stem: 'Solve x / 4 = 7. What is the value of x?',
      tier: 'core',
      options: ['11', '3', '1.75', '28'],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'ase-mis-inverse-wrong-direction',
      hint: 'Multiply both sides by 4. x = 7 x 4 = 28.',
    },
    // Core 5: two-step
    {
      id: 'ase-q5',
      type: 'multiple-choice',
      stem: 'Solve 2x + 5 = 13. What is the value of x?',
      tier: 'core',
      options: ['9', '5', '6', '4'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Subtract 5 from both sides: 2x = 8. Then divide by 2: x = 4.',
    },
    // Core 6: two-step with subtraction
    {
      id: 'ase-q6',
      type: 'multiple-choice',
      stem: 'Solve 3x - 7 = 8. What is the value of x?',
      tier: 'core',
      options: ['1', '5', '15', '8'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Add 7 to both sides: 3x = 15. Then divide by 3: x = 5.',
    },
    // Core 7: spot-misconception on x = answer
    {
      id: 'ase-q7',
      type: 'spot-misconception',
      stem: 'Aisha sees 2x + 5 = 13 and writes "x is just whatever number balances the equation, so x = 13".',
      tier: 'core',
      statements: [
        {
          text: 'Aisha is right. The unknown x always equals the number on the right-hand side of the equation.',
          isMisconception: true,
        },
        {
          text: 'In fact x is the value that makes the EQUATION true after applying the operations. For 2x + 5 = 13, x must satisfy 2x + 5 = 13, so x = 4 (because 2 x 4 + 5 = 13). x is not the right-hand side; it is the value that, after being doubled and adding 5, gives the right-hand side.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'ase-mis-x-is-rhs',
    },
    // Core 8: two-step with negative
    {
      id: 'ase-q8',
      type: 'numeric-entry',
      stem: 'Solve 4x + 6 = 2. What is the value of x?',
      tier: 'core',
      correctAnswer: -1,
      xpValue: 10,
      hint: 'Subtract 6 from both sides: 4x = -4. Then divide by 4: x = -1.',
    },
    // Confident 1: solve with brackets
    {
      id: 'ase-q9',
      type: 'numeric-entry',
      stem: 'Solve 2(x + 3) = 14. What is the value of x?',
      tier: 'confident',
      correctAnswer: 4,
      xpValue: 15,
      hint: 'Divide both sides by 2 first (or expand): x + 3 = 7. Then subtract 3: x = 4.',
    },
    // Confident 2: unknown on both sides
    {
      id: 'ase-q10',
      type: 'multiple-choice',
      stem: 'Solve 3x + 4 = x + 10. What is the value of x?',
      tier: 'confident',
      options: ['14', '3', '7', '6'],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'ase-mis-both-sides-delete',
      hint: 'Subtract x from both sides: 2x + 4 = 10. Subtract 4: 2x = 6. Divide by 2: x = 3.',
    },
    // Confident 3: equation with fraction
    {
      id: 'ase-q11',
      type: 'numeric-entry',
      stem: 'Solve x / 3 + 4 = 7. What is the value of x?',
      tier: 'confident',
      correctAnswer: 9,
      xpValue: 15,
      hint: 'Subtract 4: x / 3 = 3. Multiply by 3: x = 9.',
    },
    // Confident 4: spot-misconception on both-sides deletion
    {
      id: 'ase-q12',
      type: 'spot-misconception',
      stem: 'Tom solves 5x + 2 = 2x + 14 by writing "5x and 2x are both x terms, so I cancel them: 2 = 14, which is impossible".',
      tier: 'confident',
      statements: [
        {
          text: 'Tom is right. When x appears on both sides, you simply remove the x terms because they cancel.',
          isMisconception: true,
        },
        {
          text: 'In fact you must SUBTRACT 2x from BOTH sides, not delete the x terms entirely. 5x - 2x = 3x, so the equation becomes 3x + 2 = 14. Then 3x = 12 and x = 4. The 5x and 2x are different values; only their difference (3x) is removed.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'ase-mis-both-sides-delete',
    },
    // Confident 5: missing-step
    {
      id: 'ase-q13',
      type: 'missing-step',
      stem: 'Fill in the missing step. Maya solves 5x - 3 = 2x + 9.',
      tier: 'confident',
      steps: [
        'Subtract 2x from both sides: 3x - 3 = 9.',
        'Add 3 to both sides: 3x = 12.',
        null,
        'So x = 4. Check: 5 x 4 - 3 = 17 and 2 x 4 + 9 = 17. Both sides match.',
      ],
      missingStepIndex: 2,
      correctStep: 'Divide both sides by 3: x = 4.',
      xpValue: 20,
    },
    // Confident 6: three-step
    {
      id: 'ase-q14',
      type: 'multiple-choice',
      stem: 'Solve 2(3x - 1) = 16. What is the value of x?',
      tier: 'confident',
      options: ['5', '17/6', '3', '4'],
      correctIndex: 2,
      xpValue: 15,
      hint: 'Divide by 2: 3x - 1 = 8. Add 1: 3x = 9. Divide by 3: x = 3.',
    },
    // Confident 7: drag-order four equations by x value
    {
      id: 'ase-q15',
      type: 'drag-order',
      stem: 'Drag these equations into order from the smallest x to the largest x.',
      tier: 'confident',
      items: ['x + 5 = 8', '2x = 10', 'x / 2 = 1.5', 'x - 1 = 6'],
      correctOrder: [2, 0, 1, 3],
      xpValue: 20,
      hint: 'Solve each: x + 5 = 8 → x = 3. 2x = 10 → x = 5. x / 2 = 1.5 → x = 3 (wait, x = 3). x - 1 = 6 → x = 7. Order: 3, 3, 5, 7. (x / 2 = 1.5 gives x = 3.)',
    },
    // Confident 8: equation with negative coefficient
    {
      id: 'ase-q16',
      type: 'numeric-entry',
      stem: 'Solve 10 - 3x = 1. What is the value of x?',
      tier: 'confident',
      correctAnswer: 3,
      xpValue: 15,
      hint: 'Subtract 10 from both sides: -3x = -9. Divide by -3: x = 3.',
    },
    // Challenge 1: two numbers Bond stretch (the plan's stretch)
    {
      id: 'ase-q17',
      type: 'numeric-entry',
      stem: 'Liam and Niharika each think of a number. Liam doubles his number and adds 3. Niharika triples hers and subtracts 4. They both arrive at the same answer. Liam\'s number is 7 more than Niharika\'s. What is Liam\'s number?',
      tier: 'challenge',
      correctAnswer: 28,
      xpValue: 25,
      hint: 'Let N be Niharika and L = N + 7. Then 2L + 3 = 3N - 4 gives 2(N + 7) + 3 = 3N - 4, so 2N + 17 = 3N - 4, giving N = 21. Then L = 28. Check: 2(28) + 3 = 59 and 3(21) - 4 = 59.',
    },
    // Challenge 2: equation with brackets and unknown on both sides
    {
      id: 'ase-q18',
      type: 'multiple-choice',
      stem: 'Solve 3(x + 2) = 2x + 9. What is the value of x?',
      tier: 'challenge',
      options: ['1', '5', '3', '4'],
      correctIndex: 2,
      xpValue: 25,
      hint: 'Expand the bracket: 3x + 6 = 2x + 9. Subtract 2x: x + 6 = 9. Subtract 6: x = 3.',
    },
    // Challenge 3: real-world word problem
    {
      id: 'ase-q19',
      type: 'numeric-entry',
      stem: 'A school book club charges a £5 joining fee plus £2 per book borrowed. Aisha\'s total spend is £21. How many books did she borrow?',
      tier: 'challenge',
      correctAnswer: 8,
      unit: 'books',
      xpValue: 25,
      hint: 'Let x = number of books. Then 2x + 5 = 21. Subtract 5: 2x = 16. Divide by 2: x = 8.',
    },
    // Challenge 4: fraction-coefficient equation
    {
      id: 'ase-q20',
      type: 'multiple-choice',
      stem: 'Solve (x - 4) / 3 = 2. What is the value of x?',
      tier: 'challenge',
      options: ['10', '2', '6', '14'],
      correctIndex: 0,
      xpValue: 25,
      hint: 'Multiply both sides by 3: x - 4 = 6. Add 4: x = 10.',
    },
    // Challenge 5: equation with negatives and brackets
    {
      id: 'ase-q21',
      type: 'numeric-entry',
      stem: 'Solve 2(x - 3) = 4 - x. What is the value of x?',
      tier: 'challenge',
      correctAnswer: 3.33,
      tolerance: 0.05,
      xpValue: 25,
      hint: 'Expand: 2x - 6 = 4 - x. Add x to both sides: 3x - 6 = 4. Add 6: 3x = 10. Divide by 3: x = 10/3 ≈ 3.33.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a linear-equation question where pupils wrote x = (right-hand side) without performing any inverse operations.
    {
      id: 'ase-mis-x-is-rhs',
      description:
        'I think x always equals the number on the right-hand side of the equation, so for 2x + 5 = 13, x = 13.',
      triggerAnswer: 'x-is-rhs',
      correction:
        'Actually x is the value that MAKES the equation true after the operations on the left are applied. Solve by undoing those operations on both sides.',
      reExplanation:
        'For 2x + 5 = 13, x must satisfy "double me, add 5, get 13". So x = (13 - 5) / 2 = 4. Reading x = 13 ignores the multiplication and addition: it would make 2(13) + 5 = 31, not 13. Always check by substituting your answer back into the original equation.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 4 Algebra, "Solving Equations" page, "Common mistake" callout warning to use the INVERSE operation in the RIGHT ORDER.
    {
      id: 'ase-mis-inverse-wrong-direction',
      description:
        'I use the wrong direction of operation when undoing a step, so for 3x = 12 I add 3 (instead of dividing by 3), or for x + 5 = 8 I multiply by 5.',
      triggerAnswer: 'inverse-wrong-direction',
      correction:
        'In fact each operation has a specific inverse: addition undoes subtraction, multiplication undoes division. Pick the one that cancels the operation already applied.',
      reExplanation:
        'For 3x = 12, the 3 was multiplied with x. The inverse of multiplication is division, so divide both sides by 3 to give x = 4. Adding 3 would give 3x + 3 = 15, which is a different equation. For x + 5 = 8, the 5 was added. The inverse is subtraction, so subtract 5: x = 3. The inverse always undoes the same operation, not a different one.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 1F (Foundation, Non-calculator), commentary on an equation with the unknown on both sides where pupils removed the x from one side without applying the operation to the other side.
    {
      id: 'ase-mis-both-sides-delete',
      description:
        'When the unknown sits on both sides of an equation, I simply delete the x term from one side, ignoring the rule that the same operation must apply to both sides.',
      triggerAnswer: 'both-sides-delete',
      correction:
        'Actually subtract the smaller coefficient of x from BOTH sides, never delete only one side.',
      reExplanation:
        'For 3x + 4 = x + 10, subtract x from BOTH sides: 3x - x = 2x on the left, x - x = 0 on the right. Equation becomes 2x + 4 = 10, giving x = 3. Deleting only one x would give 3x + 4 = 10 and x = 2, which fails the check 2 + 10 = 12.',
    },
    // Source: NCETM Secondary Magazine, Issue 122, "Persistent Misconceptions in Equation Solving" article, citing pupil work that mis-orders the inverse operations when undoing a two-step equation.
    {
      id: 'ase-mis-undo-order',
      description:
        'I undo operations in the wrong order, dividing before subtracting in a two-step equation. So for 2x + 5 = 13, I divide first: 2x + 5 = 13 becomes x + 5 = 13/2 instead of 2x = 8.',
      triggerAnswer: 'undo-order',
      correction:
        'In fact undo operations in reverse of how they were built. Addition or subtraction first (they were applied last), then multiplication or division.',
      reExplanation:
        'For 2x + 5 = 13: the build order was multiply by 2, then add 5. The undo order is reverse: subtract 5 (undoing the addition), giving 2x = 8. Then divide by 2: x = 4. Dividing first would split the 5 along with 2x, which is mathematically valid (giving x + 5/2 = 13/2) but causes messy fractions. Subtracting first keeps the arithmetic cleaner.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 01 (Foundation, Non-calculator), commentary on an equation-with-brackets question where pupils failed to apply the multiplier across both terms in the bracket.
    {
      id: 'ase-mis-bracket-distribute',
      description:
        'When expanding a bracket like 2(x + 3), I multiply only the first term, writing 2x + 3 instead of 2x + 6.',
      triggerAnswer: 'bracket-distribute',
      correction:
        'Actually the multiplier applies to EVERY term inside the bracket. 2(x + 3) = 2x + 6, not 2x + 3.',
      reExplanation:
        'For 2(x + 3) = 14: expand carefully. 2 x x = 2x; 2 x 3 = 6. So 2(x + 3) = 2x + 6. The equation becomes 2x + 6 = 14, leading to x = 4. Skipping the second term gives 2x + 3 = 14 and x = 5.5, a different (wrong) answer. The distributive property: a(b + c) = ab + ac.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 4 "Algebra" by Kuchemann, on pupils dropping or sign-flipping the constant when moving it across the equals sign.
    {
      id: 'ase-mis-sign-flip-across',
      description:
        'When I move a constant across the equals sign, I keep its sign the same instead of flipping it. So x + 5 = 12 becomes x = 12 + 5 = 17.',
      triggerAnswer: 'sign-flip-across',
      correction:
        'In fact moving a term across the equals sign flips its sign. Adding 5 on one side becomes subtracting 5 on the other.',
      reExplanation:
        'For x + 5 = 12: subtract 5 from both sides. On the left: x + 5 - 5 = x. On the right: 12 - 5 = 7. So x = 7. The shortcut "move across and flip" reflects this: the +5 becomes -5 when it crosses the equals sign. Keeping the sign the same (x = 12 + 5 = 17) is the same as adding 5 to both sides instead of subtracting, which does not isolate x.',
    },
    // Authored, no external source: classroom-observed slip where pupils treat a fractional coefficient like x/3 as if the 3 were a coefficient of x (so x/3 + 4 = 7 becomes 3x + 4 = 7).
    {
      id: 'ase-mis-fraction-coefficient',
      description:
        'I treat x / 3 as if it were 3x, so for x / 3 + 4 = 7 I write 3x + 4 = 7 and solve to get x = 1.',
      triggerAnswer: 'fraction-coefficient',
      correction:
        'Actually x / 3 means "x divided by 3", not "3 times x". Use the inverse operation: multiply by 3, not divide.',
      reExplanation:
        'For x / 3 + 4 = 7: subtract 4 to get x / 3 = 3. Now multiply both sides by 3 (the inverse of dividing by 3): x = 9. Reading x / 3 as 3x flips the operation: 3x = 3 gives x = 1, but that does not solve the original (check: 1 / 3 + 4 = 4.33, not 7). The division line means division; the inverse is multiplication.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const algebraSimpleEquationsZoneNodes = [algebraSimpleEquations]
