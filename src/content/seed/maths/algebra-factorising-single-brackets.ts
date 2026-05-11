import type { SkillNode } from '@/types/content'

export const algebraFactorisingSingleBrackets: SkillNode = {
  id: 'maths-algebra-factorising-single-brackets',
  title: 'Factorising Single Brackets',
  description:
    'Factorise an algebraic expression by taking out the highest common factor (HCF) of every term and writing the rest inside a single bracket. Cover numeric HCFs (3x + 6 = 3(x + 2)), variable HCFs (x^2 + 5x = x(x + 5)), combined numeric and variable HCFs (6x^2 + 9x = 3x(2x + 3)), and negative HCFs (-2x - 4 = -2(x + 2)). Factorising is the reverse of expanding, so every answer can be checked by multiplying the bracket back out.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-algebra',
  zoneName: 'Basic Algebra',
  tier: 'confident',
  prerequisites: ['maths-algebra-expanding-single-brackets'],
  curriculum: {
    ks3Objective:
      'Simplify and manipulate algebraic expressions by taking out common factors.',
    awardingBodies: {
      aqa: 'A4 Factorise expressions by taking out a single common factor (GCSE Mathematics 8300)',
      edexcel: 'A4 Factorise single-bracket expressions, including with a single common factor (GCSE Mathematics 1MA1)',
      ocr: '6.02d Factorise into a single bracket (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'afsb-scene-recipe',
      title: 'The Factorising Recipe: HCF Out, Rest Inside',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the worked layout to reveal one stage of the factorising recipe for 6x + 9.',
      data: {
        viewBox: '0 0 600 320',
        hotspots: [
          {
            id: 'afsb-h-find-hcf',
            x: 18,
            y: 22,
            label: 'Step 1: find the HCF of every term',
            description:
              'List the factors of each coefficient. Factors of 6: 1, 2, 3, 6. Factors of 9: 1, 3, 9. The highest shared factor is 3.',
          },
          {
            id: 'afsb-h-divide-each',
            x: 50,
            y: 22,
            label: 'Step 2: divide each term by the HCF',
            description:
              '6x divided by 3 is 2x. 9 divided by 3 is 3. Those answers go inside the bracket.',
          },
          {
            id: 'afsb-h-write-bracket',
            x: 82,
            y: 22,
            label: 'Step 3: write HCF outside, results inside',
            description:
              'Place the HCF in front of a single bracket: 6x + 9 = 3(2x + 3).',
          },
          {
            id: 'afsb-h-check',
            x: 50,
            y: 75,
            label: 'Check: expand the bracket back out',
            description:
              '3 times 2x is 6x. 3 times 3 is 9. Adding gives 6x + 9, the original expression. The factorisation is correct.',
          },
        ],
      },
    },
    {
      id: 'afsb-scene-reverse-arrows',
      title: 'Factorising is Expanding in Reverse',
      type: 'diagram',
      instructions:
        'Read each pair of expressions side by side. Expanding 3(x + 2) gives 3x + 6 by multiplying the 3 onto each term in the bracket. Factorising 3x + 6 sends the same 3 back outside the bracket. The two operations run in opposite directions along the same row, so factorising can always be checked by expanding the answer.',
      data: {
        rows: [
          {
            factorised: '3(x + 2)',
            expanded: '3x + 6',
            note:
              'Expand: 3 onto x gives 3x, 3 onto 2 gives 6. Factorise: HCF of 3x and 6 is 3, pull it out.',
          },
          {
            factorised: 'x(x + 5)',
            expanded: 'x^2 + 5x',
            note:
              'Expand: x onto x gives x squared, x onto 5 gives 5x. Factorise: HCF of x squared and 5x is x.',
          },
          {
            factorised: '4(2y - 3)',
            expanded: '8y - 12',
            note:
              'Expand: 4 onto 2y gives 8y, 4 onto -3 gives -12. Factorise: HCF of 8y and 12 is 4.',
          },
          {
            factorised: '3x(2x + 3)',
            expanded: '6x^2 + 9x',
            note:
              'Expand: 3x onto 2x gives 6x squared, 3x onto 3 gives 9x. Factorise: numeric HCF of 6 and 9 is 3, variable HCF of x squared and x is x, combined HCF is 3x.',
          },
        ],
        rule:
          'Every factorisation can be checked. Multiply the term outside the bracket onto each term inside. If the result matches the original expression, the factorisation is correct.',
      },
    },
    {
      id: 'afsb-scene-combined-hcf',
      title: 'Picking a Combined HCF When Numbers and Letters Both Share Factors',
      type: 'diagram',
      instructions:
        'Read the worked layout for 6x^2 + 9x. The numeric HCF of the coefficients 6 and 9 is 3. The variable HCF of x squared and x is x (the lowest power of x present in every term). Multiplying those gives the combined HCF, 3x. Dividing each term by 3x gives 2x and 3, so 6x^2 + 9x = 3x(2x + 3). Always pull out BOTH the numeric and the variable parts of the HCF in one step, never just one of them.',
      data: {
        expression: '6x^2 + 9x',
        numericFactors: {
          coeffA: 6,
          coeffB: 9,
          hcf: 3,
        },
        variableFactors: {
          termA: 'x^2',
          termB: 'x',
          hcf: 'x',
          reason: 'x squared has two factors of x, x has one factor of x. The shared count is one factor of x.',
        },
        combinedHcf: '3x',
        result: '3x(2x + 3)',
        verification:
          '3x times 2x is 6x squared. 3x times 3 is 9x. Sum is 6x squared plus 9x, matching the original.',
        rule:
          'Combined HCF = numeric HCF times variable HCF. Both parts come out together in a single step.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'afsb-worked-1',
      title: 'Factorise 6x + 9',
      steps: [
        {
          explanation:
            'Identify the coefficients of each term. The first term is 6x with coefficient 6. The second term is the constant 9.',
          maths: 'terms: 6x and 9',
        },
        {
          explanation:
            'Find the highest common factor of the two coefficients.',
          maths: 'HCF(6, 9) = 3',
        },
        {
          explanation:
            'Check the variable part. Only the first term contains x, so x is NOT a common factor.',
          maths: 'variable HCF = 1 (no shared letter)',
        },
        {
          explanation:
            'Divide each term by the HCF, which is 3, to find what goes inside the bracket.',
          maths: '6x / 3 = 2x; 9 / 3 = 3',
        },
        {
          explanation:
            'Write the HCF outside a single bracket and the divided terms inside.',
          maths: '6x + 9 = 3(2x + 3)',
        },
        {
          explanation:
            'Check by expanding the bracket back: 3 times 2x is 6x, 3 times 3 is 9, giving 6x + 9, the original expression.',
          maths: '3(2x + 3) = 6x + 9',
        },
      ],
    },
    {
      id: 'afsb-worked-2',
      title: 'Factorise 4x^2 + 8x (one step has the maths line missing for you to work out)',
      steps: [
        {
          explanation:
            'Look at the coefficients: 4 and 8. Find their highest common factor.',
          maths: 'HCF(4, 8) = 4',
        },
        {
          explanation:
            'Look at the variable parts: x squared (two factors of x) and x (one factor of x). The shared variable factor is one x.',
          maths: 'variable HCF = x',
        },
        {
          explanation:
            'Multiply the numeric HCF and the variable HCF to get the combined HCF that comes out of the bracket.',
        },
        {
          explanation:
            'Divide each term in the original expression by the combined HCF 4x to find what stays inside.',
          maths: '4x^2 / 4x = x; 8x / 4x = 2',
        },
        {
          explanation:
            'Write the combined HCF outside and the results inside a single bracket.',
          maths: '4x^2 + 8x = 4x(x + 2)',
        },
        {
          explanation:
            'Check by expanding: 4x times x is 4x squared, 4x times 2 is 8x, giving the original expression.',
          maths: '4x(x + 2) = 4x^2 + 8x',
        },
      ],
    },
  ],
  questions: [
    // Core 1: simplest numeric HCF
    {
      id: 'afsb-q1',
      type: 'multiple-choice',
      stem: 'Factorise 3x + 6.',
      tier: 'core',
      options: ['3(x + 6)', '3(x + 2)', '3(x)', '3x(1 + 2)'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'afsb-mis-drop-number',
      hint: 'HCF of 3 and 6 is 3. Divide each term by 3 to find what goes inside the bracket.',
    },
    // Core 2: numeric HCF where the constant has a small coefficient
    {
      id: 'afsb-q2',
      type: 'multiple-choice',
      stem: 'Factorise 5x + 10.',
      tier: 'core',
      options: ['5(x + 5)', '5(x + 10)', '5(x + 2)', 'x(5 + 10)'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'afsb-mis-divide-first-term-only',
      hint: 'Divide BOTH terms by 5: 5x divides to x and 10 divides to 2.',
    },
    // Core 3: variable-only HCF
    {
      id: 'afsb-q3',
      type: 'multiple-choice',
      stem: 'Factorise x^2 + 5x.',
      tier: 'core',
      options: ['x(x + 5)', '5(x^2 + x)', 'x^2(1 + 5)', 'x(x^2 + 5)'],
      correctIndex: 0,
      xpValue: 10,
      hint: 'Both terms share one factor of x. Pull it out: x squared divided by x is x, and 5x divided by x is 5.',
    },
    // Core 4: numeric HCF only, larger numbers
    {
      id: 'afsb-q4',
      type: 'numeric-entry',
      stem: 'Factorise 12x + 18 as k(2x + 3). What is the value of k?',
      tier: 'core',
      correctAnswer: 6,
      xpValue: 10,
      hint: 'Find the HCF of 12 and 18. The largest number that divides both is 6.',
    },
    // Core 5: variable HCF, numeric coefficient
    {
      id: 'afsb-q5',
      type: 'multiple-choice',
      stem: 'Factorise 4x^2 + 2x.',
      tier: 'core',
      options: ['2(2x^2 + x)', 'x(4x + 2)', '2x(2x + 1)', '2x(2x + 2)'],
      correctIndex: 2,
      misconceptionId: 'afsb-mis-variable-only',
      xpValue: 10,
      hint: 'Numeric HCF of 4 and 2 is 2. Variable HCF of x squared and x is x. Combined HCF is 2x.',
    },
    // Core 6: spot-misconception about not factorising fully
    {
      id: 'afsb-q6',
      type: 'spot-misconception',
      stem: 'Ben factorises 6x + 12 by writing "2(3x + 6)" and says he is finished.',
      tier: 'core',
      statements: [
        {
          text: 'Ben is right. Pulling any common factor out counts as factorising, so 2(3x + 6) is the final answer.',
          isMisconception: true,
        },
        {
          text: 'Actually 2 is a common factor of 6x and 12 but not the HIGHEST common factor. HCF(6, 12) = 6, so the fully factorised form is 6(x + 2). The bracket inside 2(3x + 6) still has 3x and 6 sharing a factor of 3, so the job is not finished.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'afsb-mis-not-highest',
    },
    // Core 7: numeric HCF, three terms (still pulled by HCF of coefficients)
    {
      id: 'afsb-q7',
      type: 'numeric-entry',
      stem: 'Factorise 9x + 15 as k(3x + 5). What is the value of k?',
      tier: 'core',
      correctAnswer: 3,
      xpValue: 10,
      hint: 'HCF of 9 and 15 is 3. Check by expanding 3(3x + 5) = 9x + 15.',
    },
    // Confident 1: combined HCF, simple
    {
      id: 'afsb-q8',
      type: 'multiple-choice',
      stem: 'Factorise 6x^2 + 9x.',
      tier: 'confident',
      options: ['3(2x^2 + 3x)', '3x(2x + 3)', '3x(2x + 9)', 'x(6x + 9)'],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'afsb-mis-numeric-only',
      hint: 'Numeric HCF of 6 and 9 is 3. Variable HCF of x squared and x is x. Combined HCF is 3x.',
    },
    // Confident 2: negative HCF
    {
      id: 'afsb-q9',
      type: 'multiple-choice',
      stem: 'Factorise -2x - 4 by taking out a negative HCF.',
      tier: 'confident',
      options: ['-2(x + 2)', '-2(x - 2)', '2(-x - 2)', '-2(x + 4)'],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'afsb-mis-negative-sign',
      hint: 'HCF is -2. Divide each term by -2: -2x divides to x, and -4 divides to 2. Both signs become positive inside.',
    },
    // Confident 3: numeric-entry, variable-only HCF with squared term
    {
      id: 'afsb-q10',
      type: 'numeric-entry',
      stem: 'Factorise x^2 + 7x as x(x + c). What is the value of c?',
      tier: 'confident',
      correctAnswer: 7,
      xpValue: 15,
      hint: 'Divide each term by x: x squared divides to x, and 7x divides to 7. So x^2 + 7x = x(x + 7).',
    },
    // Confident 4: spot-misconception on dropping numbers
    {
      id: 'afsb-q11',
      type: 'spot-misconception',
      stem: 'Tom factorises 6x + 9 by writing "3x + 3", reasoning that he just divides each term by 3.',
      tier: 'confident',
      statements: [
        {
          text: 'Tom is right. Factorising means dividing every term by the HCF, so 6x + 9 becomes 3x + 3.',
          isMisconception: true,
        },
        {
          text: 'In fact factorising puts the HCF OUTSIDE a single bracket. 6x + 9 = 3(2x + 3), not 3x + 3. Tom kept the division results but threw away the bracket and the HCF, so his answer is no longer equal to the original. Check: 3x + 3 at x = 1 gives 6, but 6x + 9 at x = 1 gives 15.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'afsb-mis-drop-bracket',
    },
    // Confident 5: drag-order for the steps of the factorising recipe
    {
      id: 'afsb-q12',
      type: 'drag-order',
      stem: 'Drag the steps into the correct order for factorising 10x + 15.',
      tier: 'confident',
      items: [
        'Divide each term by the HCF: 10x / 5 = 2x and 15 / 5 = 3.',
        'List the factors of each coefficient: 10 has 1, 2, 5, 10; 15 has 1, 3, 5, 15.',
        'Write the HCF outside a bracket with the results inside: 5(2x + 3).',
        'Identify the highest common factor: HCF(10, 15) = 5.',
      ],
      correctOrder: [1, 3, 0, 2],
      xpValue: 20,
      hint: 'First list the factors, then pick the HCF, then divide each term, then write the bracket.',
    },
    // Confident 6: missing-step
    {
      id: 'afsb-q13',
      type: 'missing-step',
      stem: 'Fill in the missing step. Maya is factorising 8x^2 + 12x.',
      tier: 'confident',
      steps: [
        'Numeric HCF of 8 and 12 is 4. Variable HCF of x squared and x is x.',
        'Combined HCF is 4 times x = 4x.',
        null,
        'So 8x^2 + 12x = 4x(2x + 3). Check: 4x times 2x is 8x squared, 4x times 3 is 12x.',
      ],
      missingStepIndex: 2,
      correctStep: 'Divide each term by 4x: 8x squared divided by 4x is 2x, and 12x divided by 4x is 3.',
      xpValue: 20,
    },
    // Confident 7: numeric-entry with combined HCF
    {
      id: 'afsb-q14',
      type: 'numeric-entry',
      stem: 'Factorise 15x^2 + 10x as 5x(ax + b). What is the value of a?',
      tier: 'confident',
      correctAnswer: 3,
      xpValue: 15,
      hint: 'Combined HCF is 5x. Divide 15x squared by 5x to get 3x. So a = 3 and b = 2.',
    },
    // Confident 8: negative HCF with mixed signs
    {
      id: 'afsb-q15',
      type: 'multiple-choice',
      stem: 'Factorise -3x + 12 by taking out a negative HCF.',
      tier: 'confident',
      options: ['-3(x + 4)', '3(-x + 4)', '-3(-x - 4)', '-3(x - 4)'],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'afsb-mis-negative-sign',
      hint: 'HCF is -3. -3x divided by -3 is +x; 12 divided by -3 is -4. So -3x + 12 = -3(x - 4).',
    },
    // Challenge 1: GBP word problem (Bond 11+ style)
    {
      id: 'afsb-q16',
      type: 'numeric-entry',
      stem: 'A school sells x raffle tickets at three pounds each and adds a six-pound printing fee to the total. The total income, in pounds, can be written as 3x + 6. Factorise the expression and enter the value that appears OUTSIDE the bracket.',
      tier: 'challenge',
      correctAnswer: 3,
      xpValue: 25,
      hint: '3x + 6 = 3(x + 2). The number outside the bracket is 3, which represents the three-pound price per ticket factored out.',
    },
    // Challenge 2: drag-drop-builder for combined HCF
    {
      id: 'afsb-q17',
      type: 'drag-drop-builder',
      stem: 'Build the fully factorised form of 12x^2 + 18x.',
      tier: 'challenge',
      parts: ['6x', '6', '3x', '(2x + 3)', '(2x + 6)', '(4x + 6)', 'x', '2x'],
      correctArrangement: ['6x', '(2x + 3)'],
      xpValue: 25,
      hint: 'Numeric HCF(12, 18) = 6, variable HCF(x squared, x) = x, combined HCF = 6x. Divide each term by 6x to fill the bracket.',
    },
    // Challenge 3: multi-variable HCF, Bond stretch
    {
      id: 'afsb-q18',
      type: 'multiple-choice',
      stem: 'Factorise 6xy + 9x as fully as possible.',
      tier: 'challenge',
      options: ['3(2xy + 3x)', '3xy(2 + 3)', 'x(6y + 9)', '3x(2y + 3)'],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'afsb-mis-not-highest',
      hint: 'Numeric HCF of 6 and 9 is 3. Variable HCF: x appears in both terms (y appears only in the first). Combined HCF is 3x.',
    },
    // Challenge 4: missing-step on a combined-HCF problem with three terms
    {
      id: 'afsb-q19',
      type: 'missing-step',
      stem: 'Fill in the missing step. Niharika is factorising 8x^3 + 12x^2 + 4x.',
      tier: 'challenge',
      steps: [
        'Numeric HCF of 8, 12 and 4 is 4. Variable HCF of x cubed, x squared and x is x.',
        'Combined HCF is 4x.',
        null,
        'So 8x cubed + 12x squared + 4x = 4x(2x squared + 3x + 1). Check by expanding each term back.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Divide each term by 4x: 8x cubed divided by 4x is 2x squared, 12x squared divided by 4x is 3x, and 4x divided by 4x is 1.',
      xpValue: 25,
    },
    // Challenge 5: numeric-entry with negative HCF on a longer expression
    {
      id: 'afsb-q20',
      type: 'numeric-entry',
      stem: 'Factorise -5x^2 - 15x as kx(x + 3). What is the value of k?',
      tier: 'challenge',
      correctAnswer: -5,
      xpValue: 25,
      hint: 'Numeric HCF of 5 and 15 is 5. Taking out the negative gives -5. Variable HCF of x squared and x is x. Combined HCF is -5x.',
    },
    // Challenge 6: GBP word problem with combined HCF
    {
      id: 'afsb-q21',
      type: 'multiple-choice',
      stem: 'A craft stall sells 4x identical bracelets at x pounds each and gives away 6x pounds of vouchers on the same day. The day\'s net income, in pounds, is 4x^2 - 6x. Which is the fully factorised form?',
      tier: 'challenge',
      options: ['2(2x^2 - 3x)', 'x(4x - 6)', '2x(2x - 6)', '2x(2x - 3)'],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'afsb-mis-numeric-only',
      hint: 'Numeric HCF of 4 and 6 is 2. Variable HCF of x squared and x is x. Combined HCF is 2x. Always check by expanding: 2x times 2x is 4x squared, 2x times -3 is -6x.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a single-bracket factorising question where pupils took out the numeric factor but left the variable behind in only one term.
    {
      id: 'afsb-mis-numeric-only',
      description:
        'I take the numeric HCF out of the bracket but leave the variable inside, so for 6x^2 + 9x I write 3(2x^2 + 3x) and stop.',
      triggerAnswer: 'numeric-only',
      correction:
        'In fact the HCF includes EVERY shared factor, numeric and variable. If both terms contain x, the x must come out too.',
      reExplanation:
        'For 6x^2 + 9x: numeric HCF of 6 and 9 is 3; variable HCF of x squared and x is x. Combined HCF is 3x. Divide each term by 3x: 6x squared divides to 2x, 9x divides to 3. The fully factorised form is 3x(2x + 3). Stopping at 3(2x squared + 3x) leaves a common x inside, so the job is half done.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 1F (Foundation, Non-calculator), commentary on a factorising question where pupils took out the variable but kept a numeric common factor inside the bracket.
    {
      id: 'afsb-mis-variable-only',
      description:
        'I take the variable HCF out of the bracket but leave a numeric common factor inside, so for 4x^2 + 2x I write x(4x + 2) and stop.',
      triggerAnswer: 'variable-only',
      correction:
        'Actually the HCF includes every shared factor. If the coefficients inside the bracket still share a number, the factorisation is not fully done.',
      reExplanation:
        'For 4x^2 + 2x: variable HCF is x, but the numeric HCF of 4 and 2 is 2, not 1. Combined HCF is 2x. Divide each term by 2x: 4x squared divides to 2x, 2x divides to 1. Fully factorised: 2x(2x + 1). The bracket inside x(4x + 2) still has 4 and 2 sharing a factor of 2, so it is not yet in simplest form.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 4 Algebra, "Factorising" page, "Common mistake" callout warning to use the HIGHEST common factor and not just any common factor.
    {
      id: 'afsb-mis-not-highest',
      description:
        'I take any common factor out of the bracket rather than the HIGHEST one, so for 12x + 18 I write 2(6x + 9) instead of 6(2x + 3).',
      triggerAnswer: 'not-highest',
      correction:
        'In fact factorising means taking out the HIGHEST common factor. If the terms inside the bracket still share a factor, the job is not finished.',
      reExplanation:
        'For 12x + 18: 2 is a common factor of 12 and 18, but it is not the highest. List factors. Factors of 12: 1, 2, 3, 4, 6, 12. Factors of 18: 1, 2, 3, 6, 9, 18. The largest shared factor is 6. So 12x + 18 = 6(2x + 3). Writing 2(6x + 9) is correct but unfinished, because 6x and 9 still share a factor of 3.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 01 (Foundation, Non-calculator), commentary on a factorising question where pupils took out a negative factor but left both signs inside the bracket unchanged.
    {
      id: 'afsb-mis-negative-sign',
      description:
        'When I take out a negative HCF I keep the signs inside the bracket the same, so for -2x - 4 I write -2(x - 4) instead of -2(x + 2).',
      triggerAnswer: 'negative-sign',
      correction:
        'Actually dividing a negative term by a negative HCF flips its sign. -2x divided by -2 is +x; -4 divided by -2 is +2.',
      reExplanation:
        'For -2x - 4 with HCF -2: -2x divided by -2 is +x (negative over negative is positive). -4 divided by -2 is +2. So -2x - 4 = -2(x + 2). Check by expanding: -2 times x is -2x, -2 times 2 is -4, giving the original. Always divide each term by the FULL HCF, sign and all.',
    },
    // Source: NCETM Secondary Magazine, Issue 122, "Persistent Misconceptions in Algebra" article, citing pupil work that divided every term by the HCF but failed to write the bracket, leaving a sum rather than a factorised product.
    {
      id: 'afsb-mis-drop-bracket',
      description:
        'I divide each term by the HCF but forget to write the bracket, so for 6x + 9 I write 3x + 3 (or 2x + 3) as my answer.',
      triggerAnswer: 'drop-bracket',
      correction:
        'In fact factorising puts the HCF OUTSIDE a single bracket. Dropping the bracket changes the value of the expression and is no longer factorising.',
      reExplanation:
        'For 6x + 9 the correct factorisation is 3(2x + 3). Writing 2x + 3 throws away the multiplier and gives a different expression. Check at x = 1: original 6 + 9 = 15; 3(2 + 3) = 3 times 5 = 15 (matches); 2x + 3 = 5 (does not match). The bracket and the HCF outside it are both essential.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 4 "Algebra" by Kuchemann, on pupils performing only the numeric step in a multi-factor expression while ignoring the constant term.
    {
      id: 'afsb-mis-drop-number',
      description:
        'I divide only the term with the variable by the HCF and drop the constant entirely, so for 6x + 9 I write 3(2x) instead of 3(2x + 3).',
      triggerAnswer: 'drop-number',
      correction:
        'Actually every term inside the bracket has to be divided by the HCF, not just the term with the letter.',
      reExplanation:
        'For 6x + 9: HCF is 3. Both 6x and 9 must be divided by 3. 6x divided by 3 is 2x. 9 divided by 3 is 3. So 6x + 9 = 3(2x + 3). Dropping the 9 changes the expression. Check at x = 1: original is 15; 3(2 times 1) = 6, which is wrong. The constant inside the bracket carries the rest of the value.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 4 Algebra, "Factorising" page, "Common mistake" callout on pupils who divide the first term correctly but copy the second term unchanged into the bracket.
    {
      id: 'afsb-mis-divide-first-term-only',
      description:
        'I divide the first term by the HCF but copy the second term unchanged, so for 5x + 10 I write 5(x + 10) instead of 5(x + 2).',
      triggerAnswer: 'divide-first-term-only',
      correction:
        'In fact every term inside the bracket must be the original term divided by the HCF, not the original term itself.',
      reExplanation:
        'For 5x + 10: HCF is 5. Divide each term by 5: 5x divides to x, 10 divides to 2. So 5x + 10 = 5(x + 2). Copying the 10 unchanged gives 5(x + 10), which expands to 5x + 50, not the original 5x + 10. Always divide BOTH terms.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const algebraFactorisingSingleBracketsZoneNodes = [algebraFactorisingSingleBrackets]
