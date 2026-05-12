import type { SkillNode } from '@/types/content'

export const fourOperationsCalculatorSkills: SkillNode = {
  id: 'maths-four-operations-calculator-skills',
  title: 'Efficient Calculator Use',
  description:
    'Use a scientific calculator accurately for the four operations on integers, decimals, fractions, powers and roots. Recognise that the calculator obeys BIDMAS by default, use brackets to force a different order, enter negative values with the dedicated negation key, and interpret outputs in standard form, fraction or decimal form.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-four-operations',
  zoneName: 'Four Operations',
  tier: 'confident',
  prerequisites: ['maths-four-operations-multiply-divide-negatives'],
  curriculum: {
    ks3Objective:
      'Use a calculator and other technologies to calculate results accurately and then interpret them appropriately.',
    awardingBodies: {
      aqa: 'N3 Use conventional notation for the priority of operations, including brackets, powers, roots and reciprocals',
      edexcel: 'N3 Use conventional notation for priority of operations, including brackets, powers, roots and reciprocals',
      ocr: '1.02b Apply the four operations to fractions, decimals, surds and indices using a calculator',
    },
  },
  scenes: [
    {
      id: 'fcs-scene-bidmas-by-default',
      title: 'The Calculator Already Knows BIDMAS',
      type: 'diagram',
      instructions:
        'Look at how a scientific calculator returns the BIDMAS answer for each calculation, even when the keys are pressed in left-to-right order. The display reads 11 for 5 + 3 × 2 because multiplication runs before addition; 14 for 2 + 3 × 4; and 25 for 100 ÷ 4 because division runs before any later digits would change it.',
      data: {
        rows: [
          {
            keyedExpression: '5 + 3 × 2',
            expectedDisplay: '11',
            note: 'Multiplication is resolved before addition. A non-scientific calculator that ignores BIDMAS would return 16.',
          },
          {
            keyedExpression: '2 + 3 × 4',
            expectedDisplay: '14',
            note: 'Three lots of four is twelve; add the leading two to reach fourteen.',
          },
          {
            keyedExpression: '20 - 6 ÷ 2',
            expectedDisplay: '17',
            note: 'Six divided by two is three; subtract from twenty to reach seventeen.',
          },
          {
            keyedExpression: '4 + 5 × 2 - 1',
            expectedDisplay: '13',
            note: 'Five times two is ten; the addition and subtraction then run left to right.',
          },
        ],
        notes:
          'A scientific calculator sorts the operations before computing. The order in which the keys are pressed does not change the order in which the calculator works through them.',
      },
    },
    {
      id: 'fcs-scene-brackets-force-order',
      title: 'Brackets Override the Default',
      type: 'diagram',
      instructions:
        'Read each pair of calculations below. The version with brackets and the version without brackets are not the same. Brackets force the calculator to compute the inside first, which is exactly the rule BIDMAS already follows.',
      data: {
        comparisons: [
          {
            withoutBrackets: { keyedExpression: '2 + 3 × 4', display: '14' },
            withBrackets: { keyedExpression: '(2 + 3) × 4', display: '20' },
            note: 'Without brackets the calculator runs the multiplication first; with brackets the addition runs first.',
          },
          {
            withoutBrackets: { keyedExpression: '20 - 4 × 2', display: '12' },
            withBrackets: { keyedExpression: '(20 - 4) × 2', display: '32' },
            note: 'The bracketed version subtracts first, then doubles the result.',
          },
          {
            withoutBrackets: { keyedExpression: '12 ÷ 2 + 4', display: '10' },
            withBrackets: { keyedExpression: '12 ÷ (2 + 4)', display: '2' },
            note: 'Putting the addition inside brackets changes what the divisor is.',
          },
        ],
        notes:
          'Whenever a calculation needs an addition or subtraction to happen before a multiplication, division, power or root, use brackets to make that order explicit.',
      },
    },
    {
      id: 'fcs-scene-key-tour',
      title: 'A Tour of the Useful Keys',
      type: 'labelled-diagram',
      instructions:
        'Hover each label to read what the key does. The negation key, fraction key, power and root keys are the four most often confused on a Year 7 calculator. The S to D toggle swaps the display between an exact fraction or surd and its decimal form.',
      data: {
        viewBox: '0 0 400 320',
        hotspots: [
          {
            id: 'fcs-key-negation',
            x: 80,
            y: 90,
            label: '(-) negation key',
            description:
              'Press to enter a negative value. To enter -3, press (-) then 3. The subtraction key is for the operation, not for sign.',
          },
          {
            id: 'fcs-key-fraction',
            x: 200,
            y: 90,
            label: 'fraction key',
            description:
              'Press to type a fraction such as 2/3. The numerator slot fills first, then the cursor moves to the denominator. Wrap the whole fraction in brackets when it sits inside a larger calculation.',
          },
          {
            id: 'fcs-key-square',
            x: 320,
            y: 90,
            label: 'x squared key',
            description:
              'Press to square the value just typed. To square -4, type (-) 4 first, then press x squared.',
          },
          {
            id: 'fcs-key-power',
            x: 80,
            y: 210,
            label: 'power-of key',
            description:
              'Press to raise the previous value to any power. The exponent slot opens for the next entry.',
          },
          {
            id: 'fcs-key-sqrt',
            x: 200,
            y: 210,
            label: 'square root key',
            description:
              'Press, type the value inside the root, then press right arrow or equals to close the root and continue.',
          },
          {
            id: 'fcs-key-sd',
            x: 320,
            y: 210,
            label: 'S to D toggle',
            description:
              'Switches the display between an exact fraction or surd and the decimal that matches it. Use it when a problem asks for a decimal answer.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'fcs-worked-1',
      title: 'Computing (12 + 6) ÷ 3 - 2 with the right key sequence',
      steps: [
        {
          explanation:
            'We want the calculator to compute (12 + 6) ÷ 3 - 2. The brackets must be entered, otherwise BIDMAS will run the division before the addition.',
          maths: '(12 + 6) ÷ 3 - 2',
        },
        {
          explanation: 'Press the open-bracket key, then 1, 2, +, 6, then close-bracket.',
          maths: '( 1 2 + 6 )',
        },
        {
          explanation: 'Continue with division by 3, then subtract 2, then equals.',
          maths: '÷ 3 - 2 =',
        },
        {
          explanation: 'Inside the brackets, 12 + 6 = 18.',
          maths: '12 + 6 = 18',
        },
        {
          explanation: 'Then 18 ÷ 3 = 6, and 6 - 2 = 4.',
          maths: '18 ÷ 3 - 2 = 4',
        },
        {
          explanation: 'The display reads 4, which is the answer.',
          maths: '(12 + 6) ÷ 3 - 2 = 4',
        },
      ],
    },
    {
      id: 'fcs-worked-2',
      title: 'Computing (-3) squared + √49 with the right keys',
      steps: [
        {
          explanation:
            'We want to compute (-3) squared plus the square root of 49. The negation key matters; without brackets the calculator squares 3 then attaches a minus sign at the end.',
          maths: '(-3) squared + √49',
        },
        {
          explanation: 'Open a bracket, press the (-) key, then 3, then close the bracket. This locks the negative sign inside.',
          maths: '( (-) 3 )',
        },
        {
          explanation: 'Press the x squared key to square the bracketed -3.',
          maths: '(-3) squared',
        },
        {
          explanation: 'Squaring a negative gives a positive, so the first part is +9.',
          maths: '(-3) squared = 9',
        },
        {
          explanation: 'Press +, then the square root key, then 49, then close the root and press equals.',
          maths: '+ √ 49 =',
        },
        {
          explanation: 'The square root of 49 is 7, and 9 + 7 = 16. The display reads 16.',
          maths: '(-3) squared + √49 = 16',
        },
      ],
    },
    {
      id: 'fcs-worked-3',
      title: 'Reading 1.5 × 10 to the negative 3 from the calculator display',
      steps: [
        {
          explanation:
            'We want to compute 0.003 ÷ 2 and interpret the answer. After pressing 0.003 ÷ 2 =, the display reads 1.5 followed by an exponent symbol and -3.',
          maths: '0.003 ÷ 2',
        },
        {
          explanation:
            'The exponent symbol is short for "times ten to the power of". The display 1.5 with exponent -3 means 1.5 × 10 to the power -3.',
          maths: '1.5 × 10 to the -3',
        },
        {
          explanation:
            '10 to the -3 is one thousandth, so 1.5 × one thousandth is 0.0015.',
          maths: '1.5 × 0.001 = 0.0015',
        },
        {
          explanation:
            'Reading the display as "1.5 minus 3" would give -1.5, which is the misconception to avoid.',
          maths: 'display ≠ subtraction',
        },
        {
          explanation: 'So 0.003 ÷ 2 = 0.0015. Press the S to D toggle if a plain decimal is preferred on screen.',
          maths: '0.003 ÷ 2 = 0.0015',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'fcs-q1',
      type: 'multiple-choice',
      stem: 'A scientific calculator is used to compute 5 + 3 × 2. What does the display show?',
      tier: 'core',
      options: ['16', '11', '13', '10'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'BIDMAS runs multiplication before addition. The calculator does this for you.',
      misconceptionId: 'fcs-mis-left-to-right',
    },
    {
      id: 'fcs-q2',
      type: 'multiple-choice',
      stem: 'Which key sequence enters the value -7 into a scientific calculator?',
      tier: 'core',
      options: [
        'press the subtraction key, then 7',
        'press 7, then the subtraction key',
        'press the negation key (-) , then 7',
        'press 7, then the negation key (-)',
      ],
      correctIndex: 2,
      xpValue: 10,
      hint: 'A scientific calculator separates the negation key from the subtraction key. The negation key acts on the number that follows.',
      misconceptionId: 'fcs-mis-minus-for-negative',
    },
    {
      id: 'fcs-q3',
      type: 'multiple-choice',
      stem: 'A learner types (2 + 3) × 4 into a calculator. What does the display show?',
      tier: 'core',
      options: ['9', '14', '24', '20'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Brackets force the inside calculation first. 2 + 3 = 5, then multiply by 4.',
    },
    {
      id: 'fcs-q4',
      type: 'numeric-entry',
      stem: 'Use a calculator to evaluate 84 ÷ 7 + 9. Enter your answer.',
      tier: 'core',
      correctAnswer: 21,
      xpValue: 10,
      hint: 'BIDMAS runs the division before the addition. 84 ÷ 7 = 12, then add 9.',
    },
    {
      id: 'fcs-q5',
      type: 'numeric-entry',
      stem: 'Use a calculator to evaluate (15 - 3) × 4. Enter your answer.',
      tier: 'core',
      correctAnswer: 48,
      xpValue: 10,
      hint: 'Brackets first. 15 - 3 = 12, then multiply by 4.',
    },
    {
      id: 'fcs-q6',
      type: 'multiple-choice',
      stem: 'Which key sequence computes the square of -5 correctly on a scientific calculator?',
      tier: 'core',
      options: [
        'press 5, then x squared, then press the negation key',
        'open bracket, negation key, 5, close bracket, then x squared',
        'press the subtraction key, 5, then x squared',
        'press 5, then x squared, then the subtraction key',
      ],
      correctIndex: 1,
      xpValue: 10,
      hint: 'To square -5, the negative must be inside the brackets that the squaring acts on. Otherwise the calculator squares 5 first and attaches the minus sign at the end.',
      misconceptionId: 'fcs-mis-negative-squared',
    },
    {
      id: 'fcs-q7',
      type: 'numeric-entry',
      stem: 'Use a calculator to evaluate 6 squared + 7. Enter your answer.',
      tier: 'core',
      correctAnswer: 43,
      xpValue: 10,
      hint: 'Press 6, then the x squared key, then add 7. BIDMAS resolves the power before the addition.',
    },
    {
      id: 'fcs-q8',
      type: 'multiple-choice',
      stem: 'A calculator display shows 2.5 followed by the exponent symbol and -2. What number is on the display?',
      tier: 'confident',
      options: ['-2.5', '0.025', '250', '0.5'],
      correctIndex: 1,
      xpValue: 15,
      hint: 'The exponent symbol means "times ten to the power of". So the value is 2.5 × 10 to the power -2.',
      misconceptionId: 'fcs-mis-display-as-subtraction',
    },
    {
      id: 'fcs-q9',
      type: 'numeric-entry',
      stem: 'Use a calculator to evaluate 100 - 6 squared. Enter your answer.',
      tier: 'confident',
      correctAnswer: 64,
      xpValue: 15,
      hint: 'BIDMAS runs the power before the subtraction. 6 squared is 36; 100 - 36 = 64.',
    },
    {
      id: 'fcs-q10',
      type: 'multiple-choice',
      stem: 'Sam types 10 ÷ 2 + 3 then presses equals. The display shows 8. Sam expected 2. Which key sequence would have given 2?',
      tier: 'confident',
      options: [
        '10 ÷ 2 - 3 then equals',
        '10 ÷ (2 + 3) then equals',
        '10 ÷ 2 × 3 then equals',
        '(10 ÷ 2) + 3 then equals',
      ],
      correctIndex: 1,
      xpValue: 15,
      hint: 'For the addition to run before the division, the addition has to sit inside brackets.',
      misconceptionId: 'fcs-mis-no-brackets-needed',
    },
    {
      id: 'fcs-q11',
      type: 'numeric-entry',
      stem: 'Use a calculator to evaluate 5 ÷ (2 + 3). Enter your answer as a decimal.',
      tier: 'confident',
      correctAnswer: 1,
      xpValue: 15,
      hint: 'Brackets first. 2 + 3 = 5, then 5 ÷ 5 = 1.',
    },
    {
      id: 'fcs-q12',
      type: 'multiple-choice',
      stem: 'A learner types (-3) squared + (-2) cubed using the negation key inside brackets each time. What does the display show?',
      tier: 'confident',
      options: ['1', '17', '-17', '13'],
      correctIndex: 0,
      xpValue: 15,
      hint: 'Squaring a negative gives a positive. Cubing a negative stays negative. So this is 9 + (-8).',
      misconceptionId: 'fcs-mis-negative-squared',
    },
    {
      id: 'fcs-q13',
      type: 'spot-misconception',
      stem: 'Aisha types 4 + 6 × 2 then equals. The display reads 16. She tells the class her calculator is broken because the answer should be 20.',
      tier: 'confident',
      statements: [
        {
          text: 'Aisha is right. The calculator should add first because that is the order the keys were pressed.',
          isMisconception: true,
        },
        {
          text: 'Aisha is wrong. The calculator obeys BIDMAS, so 6 × 2 = 12 is computed first, then 4 + 12 = 16. The display is correct.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fcs-mis-left-to-right',
    },
    {
      id: 'fcs-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step in this calculator key plan for (8 + 4) ÷ 3.',
      tier: 'confident',
      steps: [
        'Open a bracket, then type 8 + 4, then close the bracket.',
        'The calculator now holds (12) ready to use.',
        null,
        'The display shows 4.',
        'So (8 + 4) ÷ 3 = 4.',
      ],
      missingStepIndex: 2,
      correctStep: 'Type ÷ 3, then equals. The calculator divides 12 by 3.',
      xpValue: 20,
    },
    {
      id: 'fcs-q15',
      type: 'drag-order',
      stem: 'A learner wants the calculator to compute (-2) cubed + 5. Drag the key presses into the correct order.',
      tier: 'confident',
      items: ['(-) ', '2', '( ', ' )', 'power-of, 3', '+ 5 ='],
      correctOrder: [2, 0, 1, 3, 4, 5],
      xpValue: 15,
      hint: 'The negation must sit inside the brackets that the power acts on. Open the bracket, press (-), 2, close the bracket, then the power-of key, then 3, then + 5 =.',
      misconceptionId: 'fcs-mis-negative-squared',
    },
    {
      id: 'fcs-q16',
      type: 'multiple-choice',
      stem: 'A class buys 24 wraps for GBP 3.45 each plus a delivery fee of GBP 4.50 for a Sevenoaks bake sale. Which calculator entry returns the total cost in pounds?',
      tier: 'challenge',
      options: [
        '24 × 3.45 + 4.50 =',
        '24 × (3.45 + 4.50) =',
        '24 + 3.45 × 4.50 =',
        '(24 × 3.45) + 4.50 ÷ 24 =',
      ],
      correctIndex: 0,
      xpValue: 25,
      hint: 'Each wrap costs 3.45, so multiply that by 24 first. Then add the single delivery fee of 4.50. BIDMAS runs the multiplication before the addition without brackets.',
      misconceptionId: 'fcs-mis-no-brackets-needed',
    },
    {
      id: 'fcs-q17',
      type: 'numeric-entry',
      stem: 'A water tank in a Manchester allotment loses 0.06 litres per hour through a slow leak. Use a calculator to find the total loss across 8 hours, then halve it. Enter the final value in litres.',
      tier: 'challenge',
      correctAnswer: 0.24,
      xpValue: 25,
      unit: 'litres',
      tolerance: 0.005,
      hint: 'Two calculator steps. First 0.06 × 8 to find the eight-hour loss. Then divide by 2.',
    },
    {
      id: 'fcs-q18',
      type: 'numeric-entry',
      stem: 'Use a calculator to evaluate ((-4) squared + √81) ÷ 5. Enter your answer as a decimal.',
      tier: 'challenge',
      correctAnswer: 5,
      xpValue: 25,
      hint: 'Square -4 inside brackets to get 16. Square root of 81 is 9. Then 16 + 9 = 25, divided by 5 is 5.',
      misconceptionId: 'fcs-mis-negative-squared',
    },
    {
      id: 'fcs-q19',
      type: 'spot-misconception',
      stem: 'Liam types 0.0008 ÷ 2 into his calculator. The display shows 4 followed by the exponent symbol and -4. He writes the answer down as -4.',
      tier: 'challenge',
      statements: [
        {
          text: 'Liam is right. The calculator showed 4 then -4, so the answer is -4.',
          isMisconception: true,
        },
        {
          text: 'Liam is wrong. The exponent symbol means times ten to the power of. The display reads 4 × 10 to the -4, which is 0.0004.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'fcs-mis-display-as-subtraction',
    },
    {
      id: 'fcs-q20',
      type: 'missing-step',
      stem: 'Fill in the missing step in this calculator plan to compute 7 ÷ (2/5) without converting the fraction by hand.',
      tier: 'challenge',
      steps: [
        'Type 7, then the division key.',
        'Open a bracket, then use the fraction key to enter 2 over 5, then close the bracket.',
        null,
        'The calculator divides 7 by the value 0.4.',
        'The display shows 17.5.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Press equals. Without the brackets the calculator would treat the entry as 7 ÷ 2 then ÷ 5, giving 0.7 instead of 17.5.',
      xpValue: 25,
      misconceptionId: 'fcs-mis-fraction-without-brackets',
    },
    {
      id: 'fcs-q21',
      type: 'multiple-choice',
      stem: 'A Tunbridge Wells gardener buys 6 trays of seedlings at GBP 2.40 each, then a 25 percent discount is applied to the seedling subtotal. Which calculator entry returns the discounted total in pounds?',
      tier: 'challenge',
      options: [
        '6 × 2.40 - 25 =',
        '6 × 2.40 × 0.25 =',
        '6 × 2.40 × 0.75 =',
        '(6 + 2.40) × 0.75 =',
      ],
      correctIndex: 2,
      xpValue: 25,
      hint: 'Find the subtotal first as 6 × 2.40, then multiply by 0.75 to keep the 75 percent that survives the 25 percent discount.',
    },
  ],
  misconceptions: [
    // Source: CGP KS3 Maths Study Guide (Years 7-9), Calculator chapter, "Common mistake" callout on left-to-right key entry. Reinforced by AQA GCSE Mathematics 8300 Foundation tier examiner reports across the 2017-2023 series, on items where pupils blamed the calculator for a BIDMAS-correct display.
    {
      id: 'fcs-mis-left-to-right',
      description:
        'Believing that a scientific calculator computes in the order the keys are pressed, so reading 5 + 3 × 2 as eight times two and expecting 16.',
      triggerAnswer: 'left-to-right',
      correction:
        'In fact a scientific calculator obeys BIDMAS. It sorts the operations first, then computes them, no matter the typing order.',
      reExplanation:
        '5 + 3 × 2 has both addition and multiplication. BIDMAS runs the multiplication first, so the calculator computes 3 × 2 = 6, then adds 5 to reach 11. To force the addition first, type (5 + 3) × 2 instead, which gives 16.',
    },
    // Source: OCR GCSE Mathematics J560 Foundation tier examiner reports across the 2017-2023 series, on items where pupils typed the subtraction key in place of the negation key. Reinforced by Casio fx-83GT user guide, key-distinction notes.
    {
      id: 'fcs-mis-minus-for-negative',
      description:
        'Believing that the subtraction key on a scientific calculator can be used to enter a negative value, so typing - 3 to mean negative three.',
      triggerAnswer: 'minus-for-negative',
      correction:
        'In fact the subtraction key is for the operation of subtracting. The (-) key is the one that turns a value negative.',
      reExplanation:
        'A scientific calculator separates the operation key from the sign key. To enter -3, press the (-) key first, then 3. Pressing the subtraction key on its own gives a syntax error or treats the value as a calculation continuation, not as a negative number.',
    },
    // Source: Edexcel GCSE Mathematics 1MA1 Foundation tier (Paper 2F) examiner reports across the 2017-2023 series, on items mixing negation and squaring. Reinforced by CGP KS3 Maths Study Guide (Years 7-9), Powers and Roots chapter.
    {
      id: 'fcs-mis-negative-squared',
      description:
        'Believing that pressing 5, x squared, then negation gives the square of -5, when in fact the calculator squares 5 first and then attaches the minus sign.',
      triggerAnswer: 'negative-squared',
      correction:
        'In fact the negation has to sit inside the brackets that the power acts on. Without them the calculator squares the digits, then negates the result.',
      reExplanation:
        'To compute (-5) squared, type an open bracket, the (-) key, 5, then close the bracket, then the x squared key. The display reads 25. Without the brackets the calculator computes 5 squared = 25, then attaches the minus sign to give -25, which is a different value.',
    },
    // Source: AQA GCSE Mathematics 8300 Foundation tier examiner reports across the 2017-2023 series, recurring on items where pupils interpreted the exponent display as subtraction. Reinforced by CGP KS3 Maths Study Guide (Years 7-9), Standard Form chapter, "Common mistake" callout on reading the display.
    {
      id: 'fcs-mis-display-as-subtraction',
      description:
        'Reading a calculator display such as 1.5 followed by an exponent symbol and -3 as the subtraction 1.5 minus 3 instead of standard form.',
      triggerAnswer: 'display-as-subtraction',
      correction:
        'In fact the exponent symbol on the display means "times ten to the power of". The number after it is the power, not a value to subtract.',
      reExplanation:
        '1.5 with exponent -3 is 1.5 × 10 to the -3, which is 0.0015. Reading it as 1.5 minus 3 would give -1.5, a value with a different sign and a different magnitude. Press the S to D toggle to switch the display to a plain decimal if the standard form view is unhelpful.',
    },
    // Source: CGP KS3 Maths Study Guide (Years 7-9), Calculator chapter, on bracket use for forced precedence. Reinforced by Sparx Maths Year 7 calculator skills sequence, common-error notes on forgotten brackets.
    {
      id: 'fcs-mis-no-brackets-needed',
      description:
        'Believing that brackets are optional on a calculator because BIDMAS will sort it out, so typing 10 ÷ 2 + 3 when the intent was 10 ÷ (2 + 3).',
      triggerAnswer: 'no-brackets-needed',
      correction:
        'In fact BIDMAS only enforces the standard order. To override it, brackets are needed; the calculator cannot guess intent.',
      reExplanation:
        '10 ÷ 2 + 3 is computed as (10 ÷ 2) + 3 = 8 by BIDMAS. To divide 10 by the sum 2 + 3, the addition must sit inside brackets: 10 ÷ (2 + 3) = 2. Two different calculator entries, two different answers.',
    },
    // Source: Edexcel GCSE Mathematics 1MA1 Foundation tier (Paper 2F) examiner reports across the 2017-2023 series, on items where pupils divided by a fraction without enclosing it. Reinforced by CGP KS3 Maths Study Guide (Years 7-9), Calculator chapter, "Common mistake" callout on fraction-key precedence.
    {
      id: 'fcs-mis-fraction-without-brackets',
      description:
        'Dividing by a fraction on a calculator by typing the digits in line, so entering 7 ÷ 2 ÷ 5 instead of 7 ÷ (2/5).',
      triggerAnswer: 'fraction-without-brackets',
      correction:
        'In fact 7 ÷ 2 ÷ 5 divides twice and gives 0.7. To divide by the value of the fraction, wrap the fraction in brackets.',
      reExplanation:
        '7 ÷ (2/5) means 7 divided by 0.4, which is 17.5. Entering 7 ÷ 2 ÷ 5 reads as a sequence of two divisions: 7 ÷ 2 = 3.5, then 3.5 ÷ 5 = 0.7. Brackets around the fraction key entry tell the calculator to treat the fraction as one value before dividing.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const fourOperationsCalculatorSkillsZoneNodes = [
  fourOperationsCalculatorSkills,
]
