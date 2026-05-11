import type { SkillNode } from '@/types/content'

export const algebraExpandingSingleBrackets: SkillNode = {
  id: 'maths-algebra-expanding-single-brackets',
  title: 'Expanding Single Brackets',
  description:
    'Multiply a single term over a bracket using the distributive law: a(b + c) = ab + ac. Cover positive multipliers (3(x + 2) = 3x + 6), negative multipliers (-2(x - 4) = -2x + 8), variable multipliers (x(x + 5) = x^2 + 5x), and expanding then collecting like terms (3(x + 2) + 4x = 7x + 6). This is the foundation for later factorising and for solving equations with brackets.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-algebra',
  zoneName: 'Basic Algebra',
  tier: 'confident',
  prerequisites: ['maths-algebra-collecting-like-terms'],
  curriculum: {
    ks3Objective:
      'Simplify and manipulate algebraic expressions by multiplying a single term over a bracket.',
    awardingBodies: {
      aqa: 'A4 Multiply a single term over a bracket (GCSE Mathematics 8300)',
      edexcel: 'A4 Expand products of one bracket (GCSE Mathematics 1MA1)',
      ocr: '6.02c Expand a single bracket (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'aesb-scene-distributive-grid',
      title: 'The Distributive Law as an Area Grid',
      type: 'labelled-diagram',
      instructions:
        'Click each region of the grid to reveal how 3(x + 2) splits into two products. The outer height is 3. The base splits into two parts: x and 2. The left rectangle has area 3 times x, which is 3x. The right rectangle has area 3 times 2, which is 6. Add the two areas together and you get 3x + 6. The multiplier 3 reaches every term inside the bracket.',
      data: {
        viewBox: '0 0 600 360',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" role="img" aria-label="Area grid showing 3(x + 2) split into a 3 by x rectangle and a 3 by 2 rectangle"><rect x="80" y="60" width="320" height="180" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2" /><rect x="400" y="60" width="120" height="180" fill="#fde68a" stroke="#92400e" stroke-width="2" /><text x="240" y="160" text-anchor="middle" font-family="sans-serif" font-size="40" font-weight="bold" fill="#1e3a8a">3x</text><text x="460" y="160" text-anchor="middle" font-family="sans-serif" font-size="40" font-weight="bold" fill="#92400e">6</text><text x="240" y="280" text-anchor="middle" font-family="sans-serif" font-size="24" fill="#111827">x</text><text x="460" y="280" text-anchor="middle" font-family="sans-serif" font-size="24" fill="#111827">2</text><text x="40" y="160" text-anchor="middle" font-family="sans-serif" font-size="24" fill="#111827">3</text><text x="300" y="330" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#111827">3(x + 2) = 3x + 6</text></svg>`,
        hotspots: [
          {
            id: 'aesb-hotspot-left',
            x: 40,
            y: 40,
            label: '3 times x = 3x',
            description: 'The left rectangle has height 3 and base x, so its area is 3x.',
          },
          {
            id: 'aesb-hotspot-right',
            x: 77,
            y: 40,
            label: '3 times 2 = 6',
            description: 'The right rectangle has height 3 and base 2, so its area is 6.',
          },
          {
            id: 'aesb-hotspot-total',
            x: 50,
            y: 90,
            label: 'Total area: 3x + 6',
            description: 'Adding the two rectangle areas gives the expansion of 3(x + 2).',
          },
        ],
      },
    },
    {
      id: 'aesb-scene-arrows',
      title: 'Multiplier Arrows: Reach Every Term',
      type: 'diagram',
      instructions:
        'Look at how the outside term sweeps an arrow to each term inside the bracket. For 3(x + 2), one arrow goes from 3 to x giving 3x, and a second arrow goes from 3 to 2 giving 6. For -2(x - 4), the multiplier is the whole of -2, so the first product is -2 times x = -2x and the second is -2 times -4 = +8. Reading the sign with the multiplier is the step pupils most often miss.',
      data: {
        examples: [
          {
            bracket: '3(x + 2)',
            arrows: [
              { from: '3', to: 'x', product: '3x' },
              { from: '3', to: '+2', product: '+6' },
            ],
            result: '3x + 6',
          },
          {
            bracket: '-2(x - 4)',
            arrows: [
              { from: '-2', to: 'x', product: '-2x' },
              { from: '-2', to: '-4', product: '+8' },
            ],
            result: '-2x + 8',
            note: 'A negative times a negative is positive, so -2 times -4 = +8.',
          },
          {
            bracket: 'x(x + 5)',
            arrows: [
              { from: 'x', to: 'x', product: 'x^2' },
              { from: 'x', to: '+5', product: '+5x' },
            ],
            result: 'x^2 + 5x',
            note: 'x times x is x^2, not 2x. Multiplying a letter by itself raises the power.',
          },
        ],
        rule: 'The multiplier (with its sign) reaches every term inside the bracket. Two terms inside means two products outside.',
      },
    },
    {
      id: 'aesb-scene-collect-after',
      title: 'Expand, Then Tidy',
      type: 'diagram',
      instructions:
        'See how 3(x + 2) + 4x is finished. First expand the bracket to 3x + 6. Then look for like terms in the whole expression. The 3x and the 4x are both x terms, so add their coefficients: 3 + 4 = 7, giving 7x. The 6 has no like term, so it stays. The simplified answer is 7x + 6. Always expand first, then collect.',
      data: {
        workings: [
          {
            line: '3(x + 2) + 4x',
            note: 'Start expression. Brackets first.',
          },
          {
            line: '3x + 6 + 4x',
            note: 'Distribute the 3 across x and 2.',
          },
          {
            line: '(3x + 4x) + 6',
            note: 'Group the like terms. The constant 6 has no partner.',
          },
          {
            line: '7x + 6',
            note: 'Add coefficients of x: 3 + 4 = 7. Final answer.',
          },
        ],
        rule: 'Two-step routine: expand the brackets, then collect like terms across the whole expression.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'aesb-worked-1',
      title: 'Expand 3(x + 2)',
      steps: [
        {
          explanation:
            'Identify the multiplier outside the bracket and the two terms inside it.',
          maths: 'multiplier: 3   terms inside: x and 2',
        },
        {
          explanation:
            'Multiply the first term inside by the outside multiplier.',
          maths: '3 x x = 3x',
        },
        {
          explanation:
            'Multiply the second term inside by the same outside multiplier.',
          maths: '3 x 2 = 6',
        },
        {
          explanation:
            'Write the two products as a sum. The sign between them comes from the original bracket.',
          maths: '3(x + 2) = 3x + 6',
        },
        {
          explanation:
            'Check by trying x = 5. Original: 3(5 + 2) = 3 x 7 = 21. Expanded: 3(5) + 6 = 15 + 6 = 21. Both match.',
          maths: 'verified at x = 5',
        },
      ],
    },
    {
      id: 'aesb-worked-2',
      title: 'Expand -4(2x - 3) (with a missing step)',
      steps: [
        {
          explanation:
            'Keep the negative sign attached to the multiplier. The outside term is -4, not just 4.',
          maths: 'multiplier: -4   terms inside: 2x and -3',
        },
        {
          explanation:
            'Multiply -4 by 2x. A negative times a positive gives a negative.',
          maths: '-4 x 2x = -8x',
        },
        {
          explanation:
            'Multiply -4 by -3. A negative times a negative gives a positive.',
        },
        {
          explanation:
            'Write the two products as a sum.',
          maths: '-4(2x - 3) = -8x + 12',
        },
        {
          explanation:
            'Check by trying x = 1. Original: -4(2 - 3) = -4 x (-1) = 4. Expanded: -8(1) + 12 = -8 + 12 = 4. Both match.',
          maths: 'verified at x = 1',
        },
      ],
    },
  ],
  questions: [
    // Core 1: basic positive multiplier MCQ
    {
      id: 'aesb-q1',
      type: 'multiple-choice',
      stem: 'Expand 3(x + 2).',
      tier: 'core',
      options: ['3x + 6', '3x + 2', '5x', '6x'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'aesb-mis-first-term-only',
      hint: 'Multiply the 3 by each term inside: 3 times x is 3x and 3 times 2 is 6.',
    },
    // Core 2: positive multiplier with subtraction MCQ
    {
      id: 'aesb-q2',
      type: 'multiple-choice',
      stem: 'Expand 5(y - 1).',
      tier: 'core',
      options: ['5y + 1', '5y - 1', '5y - 5', '4y'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'aesb-mis-inside-sign-flip',
      hint: 'The 5 multiplies the -1 as well as the y. So 5 times -1 = -5.',
    },
    // Core 3: positive multiplier MCQ rotation
    {
      id: 'aesb-q3',
      type: 'multiple-choice',
      stem: 'Expand 2(a + 4).',
      tier: 'core',
      options: ['2a + 4', '6a', '2a + 8', '8a'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'aesb-mis-coefficient-conjoining',
      hint: '2 times a = 2a, and 2 times 4 = 8. The plus sign stays between them.',
    },
    // Core 4: numeric, constant term
    {
      id: 'aesb-q4',
      type: 'numeric-entry',
      stem: 'After expanding 4(x + 3), what is the constant term?',
      tier: 'core',
      correctAnswer: 12,
      xpValue: 10,
      misconceptionId: 'aesb-mis-not-multiply',
      hint: 'The constant term comes from 4 multiplied by 3.',
    },
    // Core 5: numeric with negative inside
    {
      id: 'aesb-q5',
      type: 'numeric-entry',
      stem: 'After expanding 7(x - 2), what is the constant term? Include the sign as a positive or negative number.',
      tier: 'core',
      correctAnswer: -14,
      xpValue: 10,
      misconceptionId: 'aesb-mis-sign-drop',
      hint: 'The 7 multiplies the -2, giving -14. Keep the minus sign with the second term.',
    },
    // Core 6: positive multiplier with 2x inside
    {
      id: 'aesb-q6',
      type: 'multiple-choice',
      stem: 'Expand 4(2x + 1).',
      tier: 'core',
      options: ['6x + 1', '8x + 4', '8x + 1', '6x + 4'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'aesb-mis-merge-after-expand',
      hint: '4 times 2x = 8x, and 4 times 1 = 4.',
    },
    // Core 7: spot-misconception on first-term-only
    {
      id: 'aesb-q7',
      type: 'spot-misconception',
      stem: 'Aisha expands 3(x + 2) and writes "3x + 2", saying the 3 only needs to multiply the first term.',
      tier: 'core',
      statements: [
        {
          text: 'Aisha is right. The multiplier only sits next to the first term, so it only multiplies that term.',
          isMisconception: true,
        },
        {
          text: 'In fact the 3 reaches every term inside the bracket, not just the first one. 3 times x gives 3x and 3 times 2 gives 6, so 3(x + 2) = 3x + 6. Check at x = 4: original is 3(6) = 18 and 3x + 6 gives 12 + 6 = 18, but 3x + 2 would give 14. The 2 must be multiplied too.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'aesb-mis-first-term-only',
    },
    // Confident 1: numeric, coefficient of x with 2x inside
    {
      id: 'aesb-q8',
      type: 'numeric-entry',
      stem: 'After expanding 3(2x + 5), what is the coefficient of x?',
      tier: 'confident',
      correctAnswer: 6,
      xpValue: 15,
      hint: '3 times 2x gives the x term. The coefficient is 3 x 2.',
    },
    // Confident 2: negative multiplier MCQ
    {
      id: 'aesb-q9',
      type: 'multiple-choice',
      stem: 'Expand -2(x - 4).',
      tier: 'confident',
      options: ['-2x - 8', '-2x - 4', '2x + 8', '-2x + 8'],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'aesb-mis-sign-drop',
      hint: 'The multiplier is -2. -2 times x = -2x. -2 times -4 = +8 (negative times negative).',
    },
    // Confident 3: negative multiplier with 2x inside
    {
      id: 'aesb-q10',
      type: 'multiple-choice',
      stem: 'Expand -3(2x + 1).',
      tier: 'confident',
      options: ['-6x - 3', '-6x + 3', '-5x - 3', '6x + 3'],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'aesb-mis-sign-drop',
      hint: '-3 times 2x = -6x. -3 times +1 = -3.',
    },
    // Confident 4: numeric, negative multiplier
    {
      id: 'aesb-q11',
      type: 'numeric-entry',
      stem: 'After expanding -5(x - 3), what is the constant term? Include the sign as a positive or negative number.',
      tier: 'confident',
      correctAnswer: 15,
      xpValue: 15,
      misconceptionId: 'aesb-mis-sign-drop',
      hint: '-5 times -3 gives a positive answer. Negative times negative is positive.',
    },
    // Confident 5: variable multiplier MCQ
    {
      id: 'aesb-q12',
      type: 'multiple-choice',
      stem: 'Expand x(x + 5).',
      tier: 'confident',
      options: ['2x + 5', 'x^2 + 5x', 'x + 5x', 'x^2 + 5'],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'aesb-mis-x-times-x',
      hint: 'x times x is x squared, not 2x. Then x times 5 is 5x.',
    },
    // Confident 6: drag-order steps for -4(2x - 3)
    {
      id: 'aesb-q13',
      type: 'drag-order',
      stem: 'Drag these steps into the correct order to expand -4(2x - 3).',
      tier: 'confident',
      items: [
        'The result is -8x + 12.',
        'Multiply -4 by -3: -4 x -3 = +12.',
        'Identify the multiplier as -4 (keep the minus sign attached).',
        'Multiply -4 by 2x: -4 x 2x = -8x.',
      ],
      correctOrder: [2, 3, 1, 0],
      xpValue: 20,
      hint: 'Start by spotting the multiplier (with its sign), then do each multiplication, then write the answer.',
    },
    // Confident 7: missing-step for expand and collect
    {
      id: 'aesb-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step. Liam is simplifying 3(x + 2) + 4x.',
      tier: 'confident',
      steps: [
        'Expand the bracket: 3 x x = 3x and 3 x 2 = 6, giving 3x + 6.',
        'Rewrite the whole expression: 3x + 6 + 4x.',
        null,
        'So 3(x + 2) + 4x simplifies to 7x + 6.',
      ],
      missingStepIndex: 2,
      correctStep: 'Collect the like x terms: 3x + 4x = 7x. The 6 has no partner, so it stays.',
      xpValue: 20,
    },
    // Confident 8: spot-misconception on x times x
    {
      id: 'aesb-q15',
      type: 'spot-misconception',
      stem: 'Tom expands x(x + 5) and writes "x + 5x", saying the x outside just sits next to each term unchanged.',
      tier: 'confident',
      statements: [
        {
          text: 'Tom is right. The x outside the bracket only adds to each term inside.',
          isMisconception: true,
        },
        {
          text: 'In fact the x outside MULTIPLIES each term inside. x times x is x^2, not 2x and not just x. Then x times 5 is 5x. So x(x + 5) = x^2 + 5x. Check at x = 3: original is 3(8) = 24 and x^2 + 5x gives 9 + 15 = 24, matching.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'aesb-mis-x-times-x',
    },
    // Challenge 1: Bond-style word problem on area of rectangle
    {
      id: 'aesb-q16',
      type: 'multiple-choice',
      stem: 'A rectangular allotment in Sevenoaks has width 4 metres and length (x + 7) metres. The owner doubles the width and keeps the length the same. Which expression gives the new area in square metres in fully expanded form?',
      tier: 'challenge',
      options: ['4x + 14', '8x + 7', '8 + 2x + 14', '8x + 56'],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'aesb-mis-imagine-second-bracket',
      hint: 'New width is 8 metres. New area is 8(x + 7). Expand by multiplying both terms inside by 8.',
    },
    // Challenge 2: Bond-style numeric, expand-and-collect with two brackets
    {
      id: 'aesb-q17',
      type: 'numeric-entry',
      stem: 'A maths club has two trays of pencils. Tray A holds 5(x + 3) pencils and tray B holds 2(x - 1) pencils that are removed for repair. The number of usable pencils is 5(x + 3) - 2(x - 1). When x = 6, how many usable pencils are there?',
      tier: 'challenge',
      correctAnswer: 35,
      unit: 'pencils',
      xpValue: 25,
      hint: 'Expand: 5(x + 3) = 5x + 15 and -2(x - 1) = -2x + 2. Combine: 3x + 17. Substitute x = 6: 3(6) + 17 = 18 + 17 = 35.',
    },
    // Challenge 3: expand a variable bracket and collect with another bracket
    {
      id: 'aesb-q18',
      type: 'numeric-entry',
      stem: 'Expand and simplify x(x + 3) + 2(x + 1). What is the coefficient of x in the simplified expression?',
      tier: 'challenge',
      correctAnswer: 5,
      xpValue: 25,
      hint: 'x(x + 3) = x^2 + 3x. 2(x + 1) = 2x + 2. Total: x^2 + 3x + 2x + 2 = x^2 + 5x + 2. The coefficient of x is 3 + 2.',
    },
    // Challenge 4: expand-and-collect MCQ with two positive multipliers
    {
      id: 'aesb-q19',
      type: 'multiple-choice',
      stem: 'Expand and simplify 3(x + 4) + 2(x - 1).',
      tier: 'challenge',
      options: ['5x + 13', '5x + 3', '5x + 10', '6x + 10'],
      correctIndex: 2,
      xpValue: 25,
      hint: '3(x + 4) = 3x + 12. 2(x - 1) = 2x - 2. Collect: (3x + 2x) + (12 - 2) = 5x + 10.',
    },
    // Challenge 5: Bond-style numeric word problem on garden border
    {
      id: 'aesb-q20',
      type: 'numeric-entry',
      stem: 'A rectangular flower bed has width 3 metres and length (x + 4) metres. A gardener removes a strip of width 3 metres and length 2 metres from one end. Write a simplified expression for the remaining area, then find its value when x = 5. Enter the area in square metres as a number.',
      tier: 'challenge',
      correctAnswer: 21,
      unit: 'square metres',
      xpValue: 25,
      hint: 'Original area: 3(x + 4) = 3x + 12. Strip: 3 x 2 = 6. Remaining: 3x + 12 - 6 = 3x + 6. At x = 5: 15 + 6 = 21.',
    },
    // Challenge 6: MCQ on negative multiplier with 2x inside
    {
      id: 'aesb-q21',
      type: 'multiple-choice',
      stem: 'Expand -4(2x - 3).',
      tier: 'challenge',
      options: ['-8x - 12', '-8x + 12', '8x - 12', '-8x - 7'],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'aesb-mis-sign-drop',
      hint: '-4 times 2x = -8x. -4 times -3 = +12 (negative times negative is positive).',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a single-bracket expansion question where pupils multiplied only the first term inside the bracket and left the second untouched.
    {
      id: 'aesb-mis-first-term-only',
      description:
        'I think the multiplier outside the bracket only multiplies the first term inside, so for 3(x + 2) I write 3x + 2.',
      triggerAnswer: 'first-term-only',
      correction:
        'Actually the multiplier reaches EVERY term inside the bracket. 3(x + 2) = 3x + 6, not 3x + 2.',
      reExplanation:
        'Picture a rectangle with height 3 and a base split into x and 2. The left piece has area 3 times x = 3x. The right piece has area 3 times 2 = 6. The total area, which is 3(x + 2), must equal 3x + 6. Check at x = 4: original 3(6) = 18 and 3x + 6 gives 12 + 6 = 18. Stopping at 3x + 2 gives 14 and fails the check.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 1F (Foundation, Non-calculator), commentary on -2(x - 4) where pupils dropped or mishandled the sign of the multiplier.
    {
      id: 'aesb-mis-sign-drop',
      description:
        'When the multiplier outside the bracket is negative, I drop the minus sign or apply it to only one term. So -2(x - 4) becomes -2x - 8 or 2x + 8.',
      triggerAnswer: 'sign-drop',
      correction:
        'In fact the negative sign belongs with the multiplier and reaches every term. -2 times x = -2x and -2 times -4 = +8, giving -2x + 8.',
      reExplanation:
        'Keep the sign glued to the multiplier as you read across. For -2(x - 4): -2 times x is -2x; -2 times -4 is +8 because a negative times a negative is positive. The full expansion is -2x + 8. Check at x = 3: original -2(3 - 4) = -2(-1) = 2 and -2x + 8 gives -6 + 8 = 2. Both match.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 01 (Foundation, Non-calculator), commentary on x(x + 5) where pupils wrote x + 5x and lost the x squared term, treating the outside x as if it added instead of multiplied.
    {
      id: 'aesb-mis-x-times-x',
      description:
        'When the outside multiplier is a letter, I forget that letter times itself gives a square. So for x(x + 5) I write x + 5x or 2x + 5x.',
      triggerAnswer: 'x-times-x',
      correction:
        'Actually x times x is x squared, not x and not 2x. So x(x + 5) = x^2 + 5x.',
      reExplanation:
        'Treat the outside x like any other multiplier and apply it to each term inside. x times x raises the power by one, giving x^2. Then x times 5 = 5x. Add the products: x^2 + 5x. Check at x = 4: original 4(9) = 36 and x^2 + 5x gives 16 + 20 = 36, matching.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 4 Algebra, "Expanding Brackets" page, "Common mistake" callout warning that 3a + 2a = 5a stays linear, while a x a = a squared raises the power.
    {
      id: 'aesb-mis-coefficient-conjoining',
      description:
        'When expanding 3(x + 2) I add the 3 and the x to get 3 + x or 3x + 5 (combining the 3 with the 2 as well).',
      triggerAnswer: 'coefficient-conjoining',
      correction:
        'In fact the 3 outside the bracket MULTIPLIES each term inside, it does not add to them. So 3(x + 2) = 3x + 6.',
      reExplanation:
        '3(x + 2) means 3 lots of (x + 2). Three lots of x gives 3x. Three lots of 2 gives 6. The 3 and the x do not combine into 3 + x. Check at x = 5: 3(7) = 21 and 3x + 6 gives 15 + 6 = 21. The expression "3 + x + 5" gives 13, which is wrong.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 8 "Algebra" by Kuchemann, on the persistence of the "conjoining" error and the related habit of treating algebraic letters as if they were units rather than numbers when brackets are involved.
    {
      id: 'aesb-mis-not-multiply',
      description:
        'I treat a(b + c) as if the a just labels the bracket, leaving the answer as a(b + c) or as b + c, not realising the a multiplies in.',
      triggerAnswer: 'not-multiply',
      correction:
        'Actually writing a outside a bracket means a multiplied by everything inside. a(b + c) becomes ab + ac, not just b + c.',
      reExplanation:
        'In algebra, a number or letter pressed against a bracket means multiplication. Just as 4n means 4 times n, the form a(b + c) means a times the whole sum, which expands to ab + ac. Try numbers: 4(2 + 3) = 4 x 5 = 20 and 4 x 2 + 4 x 3 = 8 + 12 = 20. The two routes agree because the multiplier reaches every term.',
    },
    // Source: NCETM Secondary Magazine, Issue 124, "Expanding Brackets and the Distributive Law" article, citing pupil work that mishandles the sign of the second term inside a bracket when the multiplier is positive (e.g. writing 5(x - 1) = 5x + 5).
    {
      id: 'aesb-mis-inside-sign-flip',
      description:
        'When a positive multiplier sits outside a bracket with a subtraction inside, I flip the sign of the second term unnecessarily. So 5(x - 1) becomes 5x + 5.',
      triggerAnswer: 'inside-sign-flip',
      correction:
        'In fact only the multiplier changes the size of each term; the sign inside the bracket stays the same when the multiplier is positive. 5(x - 1) = 5x - 5.',
      reExplanation:
        'Apply the multiplier to each term, keeping each sign in place. 5 times x = 5x. 5 times -1 = -5. So 5(x - 1) = 5x - 5. The flip only happens when the multiplier itself is negative, because a negative times a negative gives a positive. Check at x = 2: 5(1) = 5 and 5x - 5 gives 10 - 5 = 5. Writing 5x + 5 would give 15, which is wrong.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 2F (Foundation, Calculator), commentary on simplified expressions where pupils expanded a single bracket and then mistakenly added the constant onto the coefficient of x instead of leaving it as a separate term.
    {
      id: 'aesb-mis-merge-after-expand',
      description:
        'After expanding I merge the unlike terms, so 3x + 6 becomes 9x or 9.',
      triggerAnswer: 'merge-after-expand',
      correction:
        'Actually 3x and 6 are unlike terms (one has the letter x, one does not), so 3x + 6 stays as 3x + 6 in simplest form.',
      reExplanation:
        'You can only add coefficients of terms that share the same letter part. 3x has the letter x; 6 has no letter, so they cannot be combined. Try x = 4: 3(4) + 6 = 18, but 9x would give 36 and 9 would give 9. Neither matches, which shows the merge is wrong. 3x + 6 is already in simplest form.',
    },
    // Authored, no external source: classroom-observed slip where pupils, after expanding a single bracket correctly, then try to expand a non-existent second bracket because they associate the topic with FOIL-style two-bracket work.
    {
      id: 'aesb-mis-imagine-second-bracket',
      description:
        'I see a single bracket and imagine a second one is hidden, so I expand 3(x + 2) as if it were 3(x + 2)(1) and produce extra terms.',
      triggerAnswer: 'imagine-second-bracket',
      correction:
        'In fact there is only one bracket here. Multiply the outside term across the two terms inside and stop. 3(x + 2) = 3x + 6, no more.',
      reExplanation:
        'A single bracket expansion gives one product per term inside, so two terms inside gives two terms outside. Adding a phantom (1) would not change the answer anyway, since multiplying by 1 leaves a value unchanged, but writing it can lead to bookkeeping slips. Stick to the rule: a(b + c) = ab + ac, full stop.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const algebraExpandingSingleBracketsZoneNodes = [algebraExpandingSingleBrackets]
