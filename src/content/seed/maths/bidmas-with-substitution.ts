import type { SkillNode } from '@/types/content'

export const bidmasWithSubstitution: SkillNode = {
  id: 'maths-bidmas-with-substitution',
  title: 'BIDMAS with Substitution into Expressions and Formulae',
  description:
    'Substitute numeric values (positive and negative) into algebraic expressions and formulae, then apply BIDMAS to evaluate. Read 3x as "3 multiplied by x" (so 3x with x = 4 means 3 x 4 = 12, never the digits 3 and 4 written side by side). Wrap negative substitutions in brackets before applying any power or product. Apply the same rules to scientific formulae like v = u + a t and the area of a trapezium.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-bidmas',
  zoneName: 'BIDMAS',
  tier: 'challenge',
  prerequisites: ['maths-bidmas-with-negatives', 'maths-algebra-introduction'],
  curriculum: {
    ks3Objective:
      'Substitute numerical values into formulae and expressions, including scientific formulae; use conventional notation for the priority of operations.',
    awardingBodies: {
      aqa: 'A2 Substitute numerical values into formulae and expressions (GCSE Mathematics 8300)',
      edexcel: 'A2 Substitute numerical values into formulae and expressions, including scientific formulae (GCSE Mathematics 1MA1)',
      ocr: '6.02a Substitute numerical values into formulae and expressions, including scientific formulae (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'bws-scene-3x-meaning',
      title: 'What 3x Really Means',
      type: 'simulation',
      instructions:
        'See how 3x is shorthand for 3 multiplied by x, not the digits 3 and x written side by side. If x = 4, then 3x means 3 x 4 = 12. Writing 3x as the two-digit number "34" gives the wrong place value (tens and units) and the wrong answer. The same is true for 5y, 2a, or any letter pressed against a number: the letter is a hidden multiplication.',
      data: {
        examples: [
          { expression: '3x', xValue: 4, correct: 12, slip: 34, slipReason: 'digits side by side' },
          { expression: '5y', yValue: 6, correct: 30, slip: 56, slipReason: 'digits side by side' },
          { expression: '2a', aValue: 7, correct: 14, slip: 27, slipReason: 'digits side by side' },
          { expression: '4x', xValue: -3, correct: -12, slip: 4 * -3 + 4, slipReason: 'forgot the negative' },
        ],
        rule: 'A letter pressed against a number is always a hidden multiplication. Substitute the value with brackets when it is negative.',
      },
    },
    {
      id: 'bws-scene-negative-brackets',
      title: 'Brackets Around a Negative Substitution',
      type: 'simulation',
      instructions:
        'See why a negative substitution needs brackets. To evaluate x squared with x = -3, write (-3)^2 = (-3) x (-3) = 9. Without brackets, the expression reads -3^2 = -(3 x 3) = -9, which loses the sign because indices have higher priority than the unary minus. Always wrap a negative value in brackets when it sits before a power or alongside a number.',
      data: {
        comparisons: [
          { expression: 'x^2 with x = -3', withBrackets: '(-3)^2 = 9', withoutBrackets: '-3^2 = -9', correct: 9 },
          { expression: '2x with x = -5', withBrackets: '2 x (-5) = -10', withoutBrackets: '2 - 5 = -3', correct: -10 },
          { expression: '3 - x with x = -2', withBrackets: '3 - (-2) = 5', withoutBrackets: '3 - -2 = 5', correct: 5 },
        ],
        rule: 'Always bracket a negative substitution. Negatives lose their sign without brackets when indices or products follow.',
      },
    },
    {
      id: 'bws-scene-trapezium-formula',
      title: 'A Formula in Action: Area of a Trapezium',
      type: 'labelled-diagram',
      instructions:
        'Click each part of the formula to see what it represents. The area of a trapezium is A = (a + b) / 2 x h, where a and b are the two parallel sides and h is the perpendicular height. For a = 5 cm, b = 9 cm, h = 4 cm, substitute and apply BIDMAS: first the bracket (a + b = 14), then the division (14 / 2 = 7), then the multiplication (7 x 4 = 28). So A = 28 cm squared.',
      data: {
        viewBox: '0 0 100 100',
        hotspots: [
          { id: 'bws-h-trap-a', x: 25, y: 25, label: 'a = 5 cm (top)', description: 'The top parallel side.' },
          { id: 'bws-h-trap-b', x: 25, y: 65, label: 'b = 9 cm (bottom)', description: 'The bottom parallel side, parallel to a.' },
          { id: 'bws-h-trap-h', x: 50, y: 45, label: 'h = 4 cm (height)', description: 'Perpendicular distance between a and b.' },
          { id: 'bws-h-trap-formula', x: 75, y: 35, label: 'A = (a + b) / 2 x h', description: 'Substitute, then apply BIDMAS: brackets first, then divide, then multiply.' },
          { id: 'bws-h-trap-result', x: 75, y: 75, label: 'A = 14 / 2 x 4 = 28 cm squared', description: 'The trapezium has an area of 28 square centimetres.' },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'bws-worked-1',
      title: 'Evaluate 3x + 4 when x = 5',
      steps: [
        {
          explanation:
            'Identify the expression and the value to substitute.',
          maths: 'expression: 3x + 4, x = 5',
        },
        {
          explanation:
            'Replace x with 5, writing 3 multiplied by 5 explicitly to avoid the digits-side-by-side slip.',
          maths: '3 x 5 + 4',
        },
        {
          explanation:
            'Apply BIDMAS. Multiplication beats addition, so compute the product first.',
          maths: '3 x 5 = 15',
        },
        {
          explanation:
            'Substitute the product back into the expression.',
          maths: '15 + 4',
        },
        {
          explanation:
            'Add to finish.',
          maths: '15 + 4 = 19',
        },
        {
          explanation: 'So 3x + 4 with x = 5 evaluates to 19.',
          maths: '3x + 4 = 19',
        },
      ],
    },
    {
      id: 'bws-worked-2',
      title: 'Evaluate x^2 - 5 when x = -3 (with brackets for the negative)',
      steps: [
        {
          explanation:
            'Identify the expression and the value to substitute. The value is negative, so it needs brackets.',
          maths: 'expression: x^2 - 5, x = -3',
        },
        {
          explanation:
            'Replace x with (-3). Brackets around the negative are essential because the next step is a power.',
          maths: '(-3)^2 - 5',
        },
        {
          explanation:
            'Apply BIDMAS. Indices come before subtraction. Square the bracketed negative.',
          maths: '(-3)^2 = (-3) x (-3) = 9',
        },
        {
          explanation:
            'Substitute the squared value back into the expression.',
          maths: '9 - 5',
        },
        {
          explanation:
            'Subtract to finish.',
          maths: '9 - 5 = 4',
        },
        {
          explanation: 'So x^2 - 5 with x = -3 evaluates to 4. Without brackets, x^2 would read -3^2 = -9 and the answer would be -14, which is wrong.',
          maths: 'x^2 - 5 = 4',
        },
      ],
    },
  ],
  questions: [
    // Core 1: 3x with x = 4
    {
      id: 'bws-q1',
      type: 'numeric-entry',
      stem: 'Evaluate 3x when x = 4.',
      tier: 'core',
      correctAnswer: 12,
      xpValue: 10,
      misconceptionId: 'bws-mis-digits-side-by-side',
      hint: '3x means 3 multiplied by x. So 3 x 4 = 12 (not 34).',
    },
    // Core 2: 2y + 1 with y = 3
    {
      id: 'bws-q2',
      type: 'multiple-choice',
      stem: 'What is 2y + 1 when y = 3?',
      tier: 'core',
      options: ['23', '6', '7', '8'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'bws-mis-digits-side-by-side',
      hint: '2y means 2 x 3 = 6. Then 6 + 1 = 7. The digits-side-by-side slip would give 23.',
    },
    // Core 3: 4x - 2 with x = 5
    {
      id: 'bws-q3',
      type: 'multiple-choice',
      stem: 'What is 4x - 2 when x = 5?',
      tier: 'core',
      options: ['10', '20', '22', '18'],
      correctIndex: 3,
      xpValue: 10,
      hint: '4x = 4 x 5 = 20. Then 20 - 2 = 18.',
    },
    // Core 4: identify 3x meaning
    {
      id: 'bws-q4',
      type: 'multiple-choice',
      stem: 'Which calculation correctly evaluates 5a when a = 6?',
      tier: 'core',
      options: ['5 + 6 = 11', '5 x 6 = 30', '56', '6 / 5 = 1.2'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'bws-mis-digits-side-by-side',
      hint: 'A letter sitting next to a number is shorthand for multiplication. 5a = 5 x a = 30 when a = 6.',
    },
    // Core 5: x squared with positive x
    {
      id: 'bws-q5',
      type: 'multiple-choice',
      stem: 'What is x^2 when x = 4?',
      tier: 'core',
      options: ['8', '12', '20', '16'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'x^2 means x multiplied by itself. 4 x 4 = 16.',
    },
    // Core 6: x^2 with x = -3 (uses brackets implicitly)
    {
      id: 'bws-q6',
      type: 'multiple-choice',
      stem: 'Evaluate x^2 when x = -3.',
      tier: 'core',
      options: ['-9', '9', '-6', '6'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'bws-mis-negative-loses-sign',
      hint: 'Substitute with brackets: (-3)^2 = (-3) x (-3) = 9. A negative squared is positive.',
    },
    // Core 7: spot-misconception on 3x = 34
    {
      id: 'bws-q7',
      type: 'spot-misconception',
      stem: 'Aisha evaluates 3x with x = 4 and writes "3 and 4 side by side gives 34, so 3x = 34".',
      tier: 'core',
      statements: [
        {
          text: 'Aisha is right. 3x is shorthand for the two-digit number with 3 in the tens column and x in the units column.',
          isMisconception: true,
        },
        {
          text: 'In fact 3x means 3 multiplied by x. With x = 4, 3x = 3 x 4 = 12, not 34. The same rule applies to 4y, 5a, or any letter pressed against a number: it is always a hidden multiplication, never digit-stacking.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'bws-mis-digits-side-by-side',
    },
    // Core 8: substitute into 2x + 3y
    {
      id: 'bws-q8',
      type: 'multiple-choice',
      stem: 'What is 2x + 3y when x = 5 and y = 2?',
      tier: 'core',
      options: ['16', '52', '12', '20'],
      correctIndex: 0,
      xpValue: 10,
      hint: '2x = 2 x 5 = 10. 3y = 3 x 2 = 6. Sum: 10 + 6 = 16.',
    },
    // Confident 1: 2x^2 with x = 3 (BIDMAS: index before multiply)
    {
      id: 'bws-q9',
      type: 'numeric-entry',
      stem: 'Evaluate 2x^2 when x = 3.',
      tier: 'confident',
      correctAnswer: 18,
      xpValue: 15,
      misconceptionId: 'bws-mis-bidmas-with-letter',
      hint: 'Indices before multiplication: square x first. x^2 = 9, then 2 x 9 = 18 (not (2x)^2 = 36).',
    },
    // Confident 2: substitute negative into linear expression
    {
      id: 'bws-q10',
      type: 'multiple-choice',
      stem: 'Evaluate 3x + 4 when x = -2.',
      tier: 'confident',
      options: ['-2', '10', '34', '-10'],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'bws-mis-negative-loses-sign',
      hint: '3 x (-2) = -6. Then -6 + 4 = -2.',
    },
    // Confident 3: formula v = u + at
    {
      id: 'bws-q11',
      type: 'numeric-entry',
      stem: 'Use the formula v = u + at. Find v in metres per second when u = 5 m/s, a = 3 m/s squared, and t = 4 s.',
      tier: 'confident',
      correctAnswer: 17,
      unit: 'metres per second',
      xpValue: 15,
      hint: 'Substitute: v = 5 + 3 x 4. BIDMAS: multiplication first, 3 x 4 = 12. Then add: 5 + 12 = 17.',
    },
    // Confident 4: spot-misconception on BIDMAS abandonment with letters
    {
      id: 'bws-q12',
      type: 'spot-misconception',
      stem: 'Liam evaluates 5 + 2x when x = 3 and writes "I add first: 5 + 2 = 7, then multiply by x: 7 x 3 = 21".',
      tier: 'confident',
      statements: [
        {
          text: 'Liam is right. When there is a letter in the expression, BIDMAS rules pause and you work left to right.',
          isMisconception: true,
        },
        {
          text: 'In fact BIDMAS still applies. 2x is a product (2 multiplied by x), which has higher priority than the addition. So 2x = 6, then 5 + 6 = 11. Letters do not change the order of operations.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'bws-mis-bidmas-with-letter',
    },
    // Confident 5: missing-step formula substitution
    {
      id: 'bws-q13',
      type: 'missing-step',
      stem: 'Fill in the missing step. Aisha evaluates A = l x w to find the area of a rectangle with l = 7.5 cm and w = 4 cm.',
      tier: 'confident',
      steps: [
        'Identify the formula: A = l x w.',
        'Substitute the values: A = 7.5 x 4.',
        null,
        'So the area is A = 30 cm squared. Always include the unit when reporting a final area or length.',
      ],
      missingStepIndex: 2,
      correctStep: 'Multiply: 7.5 x 4 = 30.',
      xpValue: 20,
    },
    // Confident 6: substitute into quadratic-like expression
    {
      id: 'bws-q14',
      type: 'multiple-choice',
      stem: 'Evaluate x^2 + 2x + 1 when x = 3.',
      tier: 'confident',
      options: ['10', '16', '13', '20'],
      correctIndex: 1,
      xpValue: 15,
      hint: 'x^2 = 9. 2x = 6. Sum: 9 + 6 + 1 = 16. (As a check, this expression factors as (x + 1)^2, and (3 + 1)^2 = 16.)',
    },
    // Confident 7: drag-order four expressions by their values
    {
      id: 'bws-q15',
      type: 'drag-order',
      stem: 'For x = 4, drag these expressions into order from the smallest value to the largest value.',
      tier: 'confident',
      items: ['x + 5', '2x', 'x^2', '3x - 2'],
      correctOrder: [1, 0, 3, 2],
      xpValue: 20,
      hint: 'Substitute x = 4: x + 5 = 9. 2x = 8. x^2 = 16. 3x - 2 = 10. Order smallest to largest: 8, 9, 10, 16.',
    },
    // Confident 8: rectangle area formula
    {
      id: 'bws-q16',
      type: 'numeric-entry',
      stem: 'Use the formula P = 2(l + w) for the perimeter of a rectangle. Find P, in centimetres, when l = 8 cm and w = 5 cm.',
      tier: 'confident',
      correctAnswer: 26,
      unit: 'centimetres',
      xpValue: 15,
      hint: 'Brackets first: l + w = 8 + 5 = 13. Then 2 x 13 = 26.',
    },
    // Challenge 1: trapezium area (the plan's stretch, numeric part)
    {
      id: 'bws-q17',
      type: 'numeric-entry',
      stem: 'The area of a trapezium is given by A = (a + b) / 2 x h, where a and b are the two parallel sides and h is the perpendicular height. Find A, in square centimetres, when a = 5 cm, b = 9 cm, and h = 4 cm.',
      tier: 'challenge',
      correctAnswer: 28,
      unit: 'square centimetres',
      xpValue: 25,
      hint: 'Brackets first: a + b = 14. Then 14 / 2 = 7. Multiply by h: 7 x 4 = 28 cm squared.',
    },
    // Challenge 2: chain expression with squares and negatives
    {
      id: 'bws-q18',
      type: 'multiple-choice',
      stem: 'Evaluate x^2 - 4y + 1 when x = -3 and y = -2.',
      tier: 'challenge',
      options: ['0', '12', '18', '-12'],
      correctIndex: 2,
      xpValue: 25,
      hint: 'Substitute with brackets: (-3)^2 - 4 x (-2) + 1. BIDMAS: 9 - (-8) + 1 = 9 + 8 + 1 = 18.',
    },
    // Challenge 3: scientific formula (force = mass x acceleration)
    {
      id: 'bws-q19',
      type: 'numeric-entry',
      stem: 'Newton\'s second law gives F = m x a. A car of mass 800 kg accelerates at 2.5 m/s squared. Find the force in newtons.',
      tier: 'challenge',
      correctAnswer: 2000,
      unit: 'newtons',
      xpValue: 25,
      hint: 'Substitute: F = 800 x 2.5 = 2000 N.',
    },
    // Challenge 4: spot the right calculation for compound substitution
    {
      id: 'bws-q20',
      type: 'multiple-choice',
      stem: 'Evaluate 3(2x - 1) when x = 5.',
      tier: 'challenge',
      options: ['29', '30', '27', '7'],
      correctIndex: 2,
      xpValue: 25,
      hint: 'Brackets first: 2x - 1 = 2 x 5 - 1 = 9. Then 3 x 9 = 27.',
    },
    // Challenge 5: formula with division
    {
      id: 'bws-q21',
      type: 'numeric-entry',
      stem: 'The formula for the mean of two values is M = (a + b) / 2. If a = -4 and b = 10, find M.',
      tier: 'challenge',
      correctAnswer: 3,
      xpValue: 25,
      hint: 'Brackets first: a + b = -4 + 10 = 6. Then 6 / 2 = 3.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a substitution question where pupils wrote the digits side by side instead of multiplying.
    {
      id: 'bws-mis-digits-side-by-side',
      description:
        'I read 3x as the two-digit number with 3 in the tens column and x in the units column, so 3x with x = 4 becomes 34.',
      triggerAnswer: 'digits-side-by-side',
      correction:
        'Actually 3x is shorthand for 3 multiplied by x. With x = 4, 3x = 12, not 34. A letter pressed against a number is always a hidden multiplication.',
      reExplanation:
        'In algebra, 3x always means 3 x x. With x = 4 the value is 3 x 4 = 12. The two-digit reading would only work if the question wrote "34", which has 3 in the tens place. Algebraic notation never uses positional shorthand: 3a, 4b, 5c, and 10z all denote multiplication. Substitute by replacing the letter with its value AND keeping the implicit multiplication.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 1F (Foundation, Non-calculator), commentary on a substitution question where pupils worked strictly left to right when the expression contained a letter.
    {
      id: 'bws-mis-bidmas-with-letter',
      description:
        'I work strictly left to right when a letter appears in an expression, abandoning BIDMAS. So 5 + 2x with x = 3 becomes (5 + 2) x 3 = 21 instead of 5 + 6 = 11.',
      triggerAnswer: 'bidmas-with-letter',
      correction:
        'In fact BIDMAS still applies after substitution. 2x is a product (multiplication), which has higher priority than addition.',
      reExplanation:
        'Substitute first, then apply BIDMAS as normal. For 5 + 2x with x = 3: substitute gives 5 + 2 x 3. Multiplication beats addition, so 2 x 3 = 6 first, then 5 + 6 = 11. Treating 2x as if it were a separate single number ignores that 2x is itself a product. Letters do not pause the order of operations.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 4 Algebra, "Substitution" page, "Common mistake" callout warning to use brackets around negative substitutions.
    {
      id: 'bws-mis-negative-loses-sign',
      description:
        'When I substitute a negative value, I forget to write brackets, so x^2 with x = -3 becomes -3^2 = -9 instead of (-3)^2 = 9.',
      triggerAnswer: 'negative-loses-sign',
      correction:
        'Actually wrap every negative substitution in brackets. -3^2 means "the negative of 3 squared" and gives -9; (-3)^2 means "negative three squared" and gives 9.',
      reExplanation:
        'For x^2 with x = -3, the correct substitution is (-3)^2 = (-3) x (-3) = 9. Without brackets, the expression -3^2 has the index sit above the unary minus in priority, so it becomes -(3^2) = -9. The same trap appears in products: 2x with x = -5 should read 2 x (-5) = -10. Brackets are not optional with negatives.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 01 (Foundation, Non-calculator), commentary on a formula-substitution question where pupils substituted twice instead of once or computed using the wrong formula.
    {
      id: 'bws-mis-letter-as-position',
      description:
        'I think the letter in an expression has a fixed value tied to its alphabet position, so n always means 14 (the 14th letter), or a means 1.',
      triggerAnswer: 'letter-as-position',
      correction:
        'In fact a letter in algebra is a placeholder. Its value comes from the question, not from the alphabet.',
      reExplanation:
        'For "evaluate 3n + 2 when n = 7", n = 7 in this question. It would be 11 if the question said n = 11, or 0 if the question said n = 0. The choice of letter (n, x, a, p) is just convention and does not carry a numeric meaning. Always read the substitution value FROM THE QUESTION, never from the alphabet.',
    },
    // Source: NCETM Secondary Magazine, Issue 121, "Persistent Misconceptions in Substitution" article, citing pupil work that combined a coefficient and an indexed letter incorrectly, reading 3x^2 as (3x)^2.
    {
      id: 'bws-mis-coefficient-in-power',
      description:
        'I read 3x^2 as (3x)^2, so with x = 4 I compute (3 x 4)^2 = 144 instead of 3 x 16 = 48.',
      triggerAnswer: 'coefficient-in-power',
      correction:
        'Actually 3x^2 means 3 x (x^2). The power binds only to x, not to the 3, because indices have higher priority than multiplication.',
      reExplanation:
        'For 3x^2 with x = 4: the 3 sits outside the power, so substitute first into x^2 = 16, then multiply: 3 x 16 = 48. Reading as (3x)^2 would give (12)^2 = 144, which is the answer to a different question. If the question wanted the whole 3x squared, it would write (3x)^2 explicitly. The default is that indices act on the nearest letter or bracketed expression only.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 4 "Algebra" by Kuchemann, on pupils ignoring the brackets in substitutions like 2(x + 3) and distributing in the wrong order.
    {
      id: 'bws-mis-bracket-skip',
      description:
        'I ignore the brackets in expressions like 2(x + 3) and substitute as if there were no brackets, computing 2 x x + 3 = 2x + 3 instead of 2(x + 3) = 2x + 6.',
      triggerAnswer: 'bracket-skip',
      correction:
        'In fact brackets in algebra group a sum to be multiplied as a whole. 2(x + 3) means 2 x (x + 3), not 2 x x + 3.',
      reExplanation:
        'For 2(x + 3) with x = 5: the brackets group x + 3, which evaluates to 8 first. Then 2 x 8 = 16. Skipping the brackets and computing 2 x 5 + 3 gives 13, which is wrong. The bracket is part of the structure: it tells you what gets multiplied by the 2. Always evaluate inside the brackets first when substituting.',
    },
    // Authored, no external source: classroom-observed slip where pupils substitute a value but write the entire expression on one line and lose the BIDMAS ordering due to the visual clutter.
    {
      id: 'bws-mis-substitute-and-evaluate-mixed',
      description:
        'I substitute a value into an expression but then evaluate left-to-right because the line looks crowded, so 3x + 2 with x = 4 becomes 3 + 4 + 2 = 9 (treating x as +).',
      triggerAnswer: 'substitute-and-evaluate-mixed',
      correction:
        'Actually substitute one letter at a time, write the multiplication sign explicitly, then evaluate using BIDMAS.',
      reExplanation:
        'For 3x + 2 with x = 4: substitute as 3 x 4 + 2. Apply BIDMAS: 3 x 4 = 12, then 12 + 2 = 14. Writing the substitution as 3 + 4 + 2 loses the implicit multiplication and gives 9, far from the right answer. Always make the multiplication explicit when substituting: replace 3x with "3 multiplied by 4", not "3 next to 4".',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const bidmasWithSubstitutionZoneNodes = [bidmasWithSubstitution]
