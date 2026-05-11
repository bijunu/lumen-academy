import type { SkillNode } from '@/types/content'

export const algebraIntroduction: SkillNode = {
  id: 'maths-algebra-introduction',
  title: 'Introduction to Algebra',
  description:
    'Use letters to stand for unknown numbers. Read and write simple expressions, collect like terms, and substitute given values into expressions. The aim is fluent reading of algebraic notation, not solving equations yet.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-algebra',
  zoneName: 'Basic Algebra',
  tier: 'core',
  prerequisites: ['maths-bidmas-order-of-operations'],
  curriculum: {
    ks3Objective:
      'Use and interpret algebraic notation, including: ab in place of a x b; 3y in place of y + y + y and 3 x y; a^2 in place of a x a, a^3 in place of a x a x a; a/b in place of a divided by b; coefficients written as fractions rather than as decimals; brackets. Substitute numerical values into formulae and expressions, including scientific formulae. Simplify and manipulate algebraic expressions to maintain equivalence by collecting like terms.',
    awardingBodies: {
      aqa: 'A1 The basics of algebra; A4 Simplifying expressions and collecting like terms',
      edexcel: 'A1 Use and interpret algebraic notation; A4 Simplify and manipulate algebraic expressions',
      ocr: '6.01a Algebraic notation; 6.02a Collecting like terms and substitution',
    },
  },
  scenes: [
    {
      id: 'alg-scene-tile-grouping',
      title: 'Tile Groups',
      type: 'diagram',
      instructions:
        'Look at how like tiles gather into the same tray. Three a-tiles and two more a-tiles sit together as 5a, while a-tiles and b-tiles stay in their own groups because they stand for different unknowns.',
      data: {
        tiles: [
          { kind: 'a', count: 3, colour: 'blue' },
          { kind: 'b', count: 2, colour: 'red' },
          { kind: 'a', count: 2, colour: 'blue' },
        ],
        trays: ['a', 'b'],
        readouts: [
          { input: '3a + 2a', collected: '5a' },
          { input: '3a + 2b', collected: '3a + 2b' },
          { input: '4a + 2b + a', collected: '5a + 2b' },
        ],
        note:
          'Letters do not stand for objects. They stand for numbers. The tray colours just help us match tiles whose letter is the same.',
      },
    },
    {
      id: 'alg-scene-substitution-slider',
      title: 'Substitution Slider',
      type: 'simulation',
      instructions:
        'See how the expression 2x + 3 changes as x takes different values. When x is 0 the value is 3, when x is 4 the value is 11, and when x is -2 the value is -1, because each time we double x first and then add 3.',
      data: {
        slider: { min: -5, max: 10, step: 1, default: 4, label: 'x' },
        expression: '2x + 3',
        readouts: [
          { x: 0, working: '2 x 0 + 3', value: 3 },
          { x: 1, working: '2 x 1 + 3', value: 5 },
          { x: 4, working: '2 x 4 + 3', value: 11 },
          { x: 7, working: '2 x 7 + 3', value: 17 },
          { x: -2, working: '2 x (-2) + 3', value: -1 },
        ],
        note:
          '2x means 2 times x. The 2 is a coefficient, not a digit beside x. Replacing x with a number is called substitution.',
      },
    },
    {
      id: 'alg-scene-write-an-expression',
      title: 'Write an Expression',
      type: 'diagram',
      instructions:
        'Read each worded phrase alongside its matching algebraic expression in compact form. Notice how the times sign disappears between a number and a letter, so 4 times n becomes 4n, and how brackets keep a sum together when it is multiplied as a whole.',
      data: {
        cards: [
          { phrase: 'a number n added to 5', expression: 'n + 5' },
          { phrase: 'a number n times 4', expression: '4n' },
          { phrase: '7 less than a number m', expression: 'm - 7' },
          { phrase: 'a number p divided by 3', expression: 'p / 3' },
          { phrase: 'twice a number x, then add 1', expression: '2x + 1' },
          { phrase: 'a number y multiplied by itself', expression: 'y^2' },
          { phrase: 'three times the sum of a and b', expression: '3(a + b)' },
        ],
        note:
          'In algebra we drop the times sign between a number and a letter. So 4 times n is written 4n, not 4 x n. The number is the coefficient.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'alg-worked-1',
      title: 'Collect like terms in 5a + 2b + 3a',
      steps: [
        {
          explanation:
            'Look at the expression and underline terms with the same letter. The a terms are 5a and 3a. The b term is 2b on its own.',
          maths: '5a + 2b + 3a',
        },
        {
          explanation:
            'Group the like terms next to each other. The order of addition does not change the answer.',
          maths: '5a + 3a + 2b',
        },
        {
          explanation:
            'Add the coefficients of the a terms: 5 + 3 = 8. The letter stays as a. Do not turn it into a squared.',
          maths: '5a + 3a = 8a',
        },
        {
          explanation:
            'There is only one b term, so 2b stays as 2b. The expression in simplest form is 8a + 2b.',
          maths: '5a + 2b + 3a = 8a + 2b',
        },
      ],
    },
    {
      id: 'alg-worked-2',
      title: 'Substitute x = 4 into 2x + 3 with one step missing',
      steps: [
        {
          explanation:
            'Write the expression and replace each x with brackets to leave a clear gap.',
          maths: '2x + 3 becomes 2( ) + 3',
        },
        {
          explanation: 'Put the value of x, which is 4, into the brackets.',
          maths: '2(4) + 3',
        },
        {
          explanation:
            'Apply BIDMAS. Multiplication comes before addition, so work out 2 times 4 first.',
          maths: '2 x 4 = 8',
        },
        {
          explanation: 'Now add the 3.',
          maths: '8 + 3 = 11',
        },
        {
          explanation: 'When x = 4, the expression 2x + 3 has the value 11.',
          maths: '2x + 3 = 11 when x = 4',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'alg-q1',
      type: 'multiple-choice',
      stem: 'In the expression 4n, what does the 4 mean?',
      tier: 'core',
      options: [
        'The digit 4 written next to the letter n.',
        '4 multiplied by n.',
        '4 added to n.',
        'The fourth letter of the word n.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'alg-mis-missing-mult-sign',
    },
    {
      id: 'alg-q2',
      type: 'multiple-choice',
      stem: 'Which expression is the same as y + y + y?',
      tier: 'core',
      options: ['y3', '3y', 'y + 3', 'y^3'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Repeated addition of the same letter is written as a coefficient times that letter.',
    },
    {
      id: 'alg-q3',
      type: 'multiple-choice',
      stem: 'Simplify 3a + 2a.',
      tier: 'core',
      options: ['5a^2', '6a', '5a', '3a + 2a cannot be simplified'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'alg-mis-square-on-collect',
    },
    {
      id: 'alg-q4',
      type: 'multiple-choice',
      stem: 'What is the simplest form of 3a + 4?',
      tier: 'core',
      options: ['7a', '12a', '7', '3a + 4 cannot be simplified'],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'alg-mis-conjoining',
    },
    {
      id: 'alg-q5',
      type: 'numeric-entry',
      stem: 'When n = 6, work out the value of 3n.',
      tier: 'core',
      correctAnswer: 18,
      xpValue: 10,
      hint: '3n means 3 multiplied by n. Replace n with 6.',
    },
    {
      id: 'alg-q6',
      type: 'spot-misconception',
      stem: 'Priya simplifies 3a + 2b as "5ab" because she says letters and numbers must combine.',
      tier: 'core',
      statements: [
        {
          text: 'Priya is right. Once you add two terms you have to combine the letters too.',
          isMisconception: true,
        },
        {
          text: 'Actually 3a and 2b are not like terms because the letters are different. The simplest form is just 3a + 2b.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'alg-mis-letter-as-object',
    },
    {
      id: 'alg-q7',
      type: 'numeric-entry',
      stem: 'When x = 5, work out the value of x + 7.',
      tier: 'core',
      correctAnswer: 12,
      xpValue: 10,
    },
    {
      id: 'alg-q8',
      type: 'drag-order',
      stem: 'Drag the steps into the correct order for collecting like terms in 6a + 5b + 2a + b.',
      tier: 'core',
      items: [
        'Group like terms: 6a + 2a + 5b + b.',
        'Identify the like terms: the a terms are 6a and 2a; the b terms are 5b and b.',
        'Write the simplest form: 8a + 6b.',
        'Add the coefficients: 6a + 2a = 8a, and 5b + b = 6b.',
      ],
      correctOrder: [1, 0, 3, 2],
      xpValue: 15,
    },
    {
      id: 'alg-q9',
      type: 'multiple-choice',
      stem: 'Simplify 7p + 3q - 2p + q.',
      tier: 'confident',
      options: ['5p + 4q', '9p + 4q', '5p + 3q', '5pq + 4'],
      correctIndex: 0,
      xpValue: 15,
      hint: 'Collect the p terms separately from the q terms. Subtraction with the 2p needs care.',
    },
    {
      id: 'alg-q10',
      type: 'numeric-entry',
      stem: 'When x = 4, work out the value of 2x + 3.',
      tier: 'confident',
      correctAnswer: 11,
      xpValue: 15,
      hint: 'Multiply x by 2 first, then add 3. BIDMAS still applies.',
    },
    {
      id: 'alg-q11',
      type: 'multiple-choice',
      stem: 'Which expression matches the phrase "a number m, multiplied by 5, then 4 subtracted"?',
      tier: 'confident',
      options: ['5m - 4', '5(m - 4)', 'm - 4 x 5', '4 - 5m'],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'alg-mis-letter-as-specific',
    },
    {
      id: 'alg-q12',
      type: 'numeric-entry',
      stem: 'When a = 5 and b = 2, work out the value of 3a - 4b.',
      tier: 'confident',
      correctAnswer: 7,
      xpValue: 15,
      hint: 'Replace a with 5 and b with 2, then evaluate using BIDMAS.',
    },
    {
      id: 'alg-q13',
      type: 'missing-step',
      stem: 'Fill in the missing step. Aisha is simplifying 4y + 3 + 2y - 1.',
      tier: 'confident',
      steps: [
        'The like terms are 4y and 2y. The number terms are 3 and -1.',
        'Group them: 4y + 2y + 3 - 1.',
        null,
        'So 4y + 3 + 2y - 1 simplifies to 6y + 2.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Add the coefficients of y: 4 + 2 = 6, giving 6y. Then work out the numbers: 3 - 1 = 2.',
      xpValue: 20,
    },
    {
      id: 'alg-q14',
      type: 'spot-misconception',
      stem: 'Tom substitutes x = 3 into the expression 4x and writes the answer 43, treating 4x as the digits 4 and x sitting side by side.',
      tier: 'confident',
      statements: [
        {
          text: 'Tom is right. 4x with x = 3 means you read 4 then 3, giving 43.',
          isMisconception: true,
        },
        {
          text: 'Actually 4x means 4 multiplied by x. With x = 3, the value is 4 x 3 = 12, not 43.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'alg-mis-missing-mult-sign',
    },
    {
      id: 'alg-q15',
      type: 'numeric-entry',
      stem: 'When x = -3, work out the value of 2x.',
      tier: 'challenge',
      correctAnswer: -6,
      xpValue: 20,
      misconceptionId: 'alg-mis-substitution-sign',
      hint: 'Replace x with -3, then multiply by 2. The sign of x stays with it.',
    },
    {
      id: 'alg-q16',
      type: 'free-text',
      stem: 'Explain in one or two sentences why 3a + 2b cannot be written as 5ab.',
      tier: 'confident',
      sampleAnswer:
        'Because 3a and 2b are unlike terms. The letter a stands for one unknown number and the letter b stands for a different unknown number, so the coefficients 3 and 2 cannot be added together. The expression stays as 3a + 2b.',
      keywords: ['unlike', 'different', 'letters', 'coefficient', 'a', 'b'],
      xpValue: 20,
      misconceptionId: 'alg-mis-letter-as-object',
    },
    {
      id: 'alg-q17',
      type: 'drag-drop-builder',
      stem: 'Build the expression for "double a number n, then add 5".',
      tier: 'confident',
      parts: ['2n', 'n', '+', '+ 5', '5n', '5'],
      correctArrangement: ['2n', '+ 5'],
      xpValue: 15,
    },
    {
      id: 'alg-q18',
      type: 'numeric-entry',
      stem: 'A school trip to the Lake District costs c pounds per pupil for the coach plus 12 pounds per pupil for entry. Write the total cost per pupil as an expression in c, then find the total when c = 9. Enter the total in pounds as a number.',
      tier: 'challenge',
      correctAnswer: 21,
      xpValue: 25,
      hint: 'Write the cost as coach plus entry per pupil. Then put c = 9 into your expression.',
    },
    {
      id: 'alg-q19',
      type: 'multiple-choice',
      stem: 'A maths club in Sevenoaks has b boys and g girls. Each boy brings 2 calculators and each girl brings 3. Which expression gives the total number of calculators in the room?',
      tier: 'challenge',
      options: [
        '5bg',
        'b + g + 5',
        '2b + 3g',
        '6bg',
      ],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'alg-mis-fruit-salad',
    },
    {
      id: 'alg-q20',
      type: 'multiple-choice',
      stem: 'A bus fare is f pence per stop. Aisha travels 7 stops and Liam travels 4 stops. They share a discount of 30 pence between them on the total. Which expression gives the amount they pay altogether, in pence?',
      tier: 'challenge',
      options: [
        '11f + 30',
        '7f + 4f - 60',
        '28f - 30',
        '11f - 30',
      ],
      correctIndex: 3,
      xpValue: 25,
      hint: 'Add the two journey costs first, then subtract the single shared discount.',
    },
    {
      id: 'alg-q21',
      type: 'free-text',
      stem: 'Mia thinks the letter n in the expression 2n + 1 must always equal 14, because n is the 14th letter of the alphabet. Explain in one or two sentences why she is wrong.',
      tier: 'challenge',
      sampleAnswer:
        'In algebra a letter stands for any number, not a fixed value tied to its place in the alphabet. The letter n is just a label for an unknown number, so 2n + 1 can take any value depending on what n is set to. For example, when n = 5 it gives 11, and when n = 0 it gives 1.',
      keywords: ['any', 'unknown', 'number', 'alphabet', 'depends', 'value'],
      xpValue: 25,
      misconceptionId: 'alg-mis-letter-as-specific',
    },
    {
      id: 'alg-q22',
      type: 'numeric-entry',
      stem: 'When p = 7 and q = -2, work out the value of 3p + 5q.',
      tier: 'challenge',
      correctAnswer: 11,
      xpValue: 25,
      hint: 'Substitute carefully and keep the sign with q. Then apply BIDMAS.',
    },
  ],
  misconceptions: [
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), chapter 8 "Algebra" by Kuchemann, "letter as object" interpretation level
    {
      id: 'alg-mis-letter-as-object',
      description:
        'I treat the letter a as standing for an object like an apple, so 3a + 2b feels like 5 things put together.',
      triggerAnswer: 'letter-as-object',
      correction:
        'In fact letters in algebra stand for numbers, not objects. 3a means 3 times the number a, and 2b means 2 times the number b. You can only add the coefficients when the letters match.',
      reExplanation:
        'Picture two trays. The first tray holds 3 copies of the number a. The second tray holds 2 copies of the number b. You cannot pour them together because a and b may stand for different numbers. The simplest form stays as 3a + 2b.',
    },
    // Source: Kuchemann in Hart CSMS chapter 8, "conjoining" error where learners write a + 2 as 2a or 3a + 4 as 7a
    {
      id: 'alg-mis-conjoining',
      description:
        'I think 3a + 4 must combine into 7a because every line has to end with one term.',
      triggerAnswer: 'conjoining',
      correction:
        'In fact 3a and 4 are unlike terms. 3a depends on the unknown a, while 4 is a fixed number. They cannot be added into a single term, so the simplest form stays as 3a + 4.',
      reExplanation:
        'Try a value: if a = 10, then 3a + 4 means 30 + 4 = 34. But 7a would be 70. The two answers differ, so 3a + 4 is not the same as 7a. An expression can have more than one term and still be in simplest form.',
    },
    // Source: CGP KS3 Maths Study Guide, algebra section, Common mistake callout on collecting like terms ("the letter does not change power")
    {
      id: 'alg-mis-square-on-collect',
      description:
        'I add the letters when I collect like terms, so I write 3a + 2a as 5a squared.',
      triggerAnswer: 'square-on-collect',
      correction:
        'In fact you only add the coefficients when collecting like terms. The letter stays as it is. So 3a + 2a is 5a, not 5a squared.',
      reExplanation:
        'Think of 3a + 2a as 3 lots of a plus 2 lots of a, giving 5 lots of a. The power on a does not change. Only multiplying a by itself, like a x a, gives a squared.',
    },
    // Source: Hart CSMS chapter 8 by Kuchemann, "fruit salad" notation discussion (using a to mean apple rather than number of apples)
    {
      id: 'alg-mis-fruit-salad',
      description:
        'I read 2b + 3g as 2 boys plus 3 girls, treating each letter as a single object rather than a number for each.',
      triggerAnswer: 'fruit-salad',
      correction:
        'In fact b stands for the number of boys and g stands for the number of girls. The 2 and 3 are how many items each one brings, so the expression already counts everything correctly.',
      reExplanation:
        'If there are 4 boys and each brings 2 calculators, that is 2 x 4 = 8 calculators from the boys. The expression 2b uses b as the number of boys, then multiplies by 2. Add 3g for the girls in the same way to get the total.',
    },
    // Source: Kuchemann in Hart CSMS chapter 8, "letter as specific unknown" vs "letter as generalised number" interpretation levels
    {
      id: 'alg-mis-letter-as-specific',
      description:
        'I think the letter n always stands for one fixed number, often its place in the alphabet, rather than any unknown number.',
      triggerAnswer: 'letter-as-specific',
      correction:
        'In fact a letter in an expression stands for any number we choose to substitute. Until a value is given, n could be any number, not a fixed one tied to the alphabet.',
      reExplanation:
        'Set n = 1 and 2n + 1 gives 3. Set n = 5 and the same expression gives 11. The letter n is a placeholder, and the expression has a different value for each choice of n. Algebra is the language for talking about all those values at once.',
    },
    // Source: AQA GCSE Maths Foundation tier examiner report 2022, Q3 commentary on substitution of negative values into linear expressions
    {
      id: 'alg-mis-substitution-sign',
      description:
        'When I substitute x = -3 into 2x I drop the minus sign and write 6 instead of -6.',
      triggerAnswer: 'substitution-sign',
      correction:
        'In fact the sign belongs with the number you substitute. 2x with x = -3 means 2 multiplied by -3, which is -6.',
      reExplanation:
        'Replace x with -3 inside brackets to keep the sign visible: 2x becomes 2 x (-3). A positive times a negative gives a negative, so 2 x (-3) = -6. Always put a negative substitution inside brackets first.',
    },
    // Source: CGP KS3 Maths Study Guide, algebra section, Common mistake callout on coefficients ("4n means 4 times n, not the number 4 next to n")
    {
      id: 'alg-mis-missing-mult-sign',
      description:
        'I read 4n as the digits 4 and n stuck together, so when n = 3 I write 43.',
      triggerAnswer: 'missing-mult-sign',
      correction:
        'In fact 4n is short for 4 multiplied by n. The number is the coefficient. When n = 3, 4n is 4 x 3 = 12, not 43.',
      reExplanation:
        'Algebra drops the times sign between a coefficient and a letter to keep expressions short. When you substitute, put the value inside brackets: 4n with n = 3 becomes 4(3), which means 4 x 3 = 12.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const algebraZoneNodes = [algebraIntroduction]

export const algebraZone = {
  id: 'maths-algebra',
  name: 'Basic Algebra',
  realm: 'numerica' as const,
  nodeIds: [algebraIntroduction.id],
}
