import type { SkillNode } from '@/types/content'

export const bidmasNestedBrackets: SkillNode = {
  id: 'maths-bidmas-nested-brackets',
  title: 'BIDMAS with Nested Brackets',
  description:
    'Evaluate expressions that contain more than one set of brackets, including nested brackets such as [3 + (5 - 2 x 1)]. Work the innermost bracket first, then move outwards. Recognise that square brackets and round brackets do the same job; mathematicians alternate the shapes only to keep the pairs visible. Spot implicit brackets too: the fraction bar and the square root symbol each act as invisible brackets that group everything underneath them.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-bidmas',
  zoneName: 'BIDMAS',
  tier: 'confident',
  prerequisites: ['maths-bidmas-order-of-operations'],
  curriculum: {
    ks3Objective:
      'Use conventional notation for the priority of operations, including multiple and nested brackets.',
    awardingBodies: {
      aqa: 'N3 Apply the priority of operations to expressions with nested brackets (GCSE Mathematics 8300)',
      edexcel: 'N4 Apply the priority of operations to expressions with nested brackets (GCSE Mathematics 1MA1)',
      ocr: '2.05b Apply BIDMAS to expressions with nested brackets (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'bnb-scene-bracket-layers',
      title: 'Layers of a Nested Bracket',
      type: 'labelled-diagram',
      instructions:
        'Click each coloured hotspot to see how the layers of 2 x [3 + (5 - 2 x 1)] stack inside each other. The innermost layer is the round bracket (5 - 2 x 1). The middle layer is the square bracket [3 + ...]. The outermost layer is the whole product 2 x [...]. Always start with the innermost bracket and unwrap one layer at a time.',
      data: {
        viewBox: '0 0 100 100',
        hotspots: [
          {
            id: 'bnb-h-inner',
            x: 50,
            y: 50,
            label: 'Innermost: (5 - 2 x 1)',
            description: 'The round bracket. Resolve this first using BIDMAS inside: 2 x 1 = 2, then 5 - 2 = 3.',
          },
          {
            id: 'bnb-h-middle',
            x: 50,
            y: 30,
            label: 'Middle: [3 + (5 - 2 x 1)]',
            description: 'The square bracket. Once the inner bracket gives 3, this layer becomes [3 + 3] = 6.',
          },
          {
            id: 'bnb-h-outer',
            x: 50,
            y: 10,
            label: 'Outermost: 2 x [...]',
            description: 'The full expression. With the square bracket worth 6, the answer is 2 x 6 = 12.',
          },
          {
            id: 'bnb-h-key',
            x: 15,
            y: 85,
            label: 'Square and round brackets do the same job',
            description: 'The two shapes are alternated only so the matching pairs stay visible to the eye.',
          },
        ],
      },
    },
    {
      id: 'bnb-scene-inner-then-outer',
      title: 'Inner Then Outer: The Order That Always Works',
      type: 'diagram',
      instructions:
        'Look at how the answer is built one layer at a time for [(4 + 6) x 2] - 7. The round bracket (4 + 6) resolves to 10. The square bracket then becomes [10 x 2] = 20. Finally, subtract the 7 outside the brackets: 20 - 7 = 13. Reading the expression strictly left to right would give 4 + 6 = 10, then 10 x 2 = 20, then 20 - 7 = 13 by coincidence, but in (2 + 3) x [4 - (1 + 2)] the same left-to-right slip gives 5 x 4 = 20, then 20 - 3 = 17, instead of the correct 5 x 1 = 5. Always start with the innermost bracket, even when the answer feels obvious.',
      data: {
        expression: '[(4 + 6) x 2] - 7',
        layers: [
          {
            level: 'innermost',
            symbol: '( )',
            content: '4 + 6',
            result: 10,
            note: 'A pure round bracket on the inside; resolve it first.',
          },
          {
            level: 'middle',
            symbol: '[ ]',
            content: '10 x 2',
            result: 20,
            note: 'The square bracket uses the result of the inner bracket as its first value.',
          },
          {
            level: 'outermost',
            symbol: 'no bracket',
            content: '20 - 7',
            result: 13,
            note: 'Whatever sits outside the brackets is the last step.',
          },
        ],
        rule: 'Innermost bracket first. Work outwards, one layer at a time, applying BIDMAS inside every layer.',
      },
    },
    {
      id: 'bnb-scene-implicit-brackets',
      title: 'Hidden Brackets: Fraction Bars and Roots',
      type: 'diagram',
      instructions:
        'Read how some brackets are invisible. The fraction bar in (8 + 4) / 3 acts like an invisible bracket round the top: it groups 8 + 4 together before the division. Writing 8 + 4 / 3 without brackets gives a different answer because the division would happen first under BIDMAS: 4 / 3 = 1.33, then 8 + 1.33 = 9.33. The square root symbol works the same way: the square root of (16 + 9) means the root of the whole sum (root of 25 = 5), not the root of 16 added to 9. Whenever the notation visually groups a chunk of the expression, treat that chunk as if it had brackets around it.',
      data: {
        examples: [
          {
            written: '(8 + 4) / 3',
            withImplicitBracket: '(8 + 4) / 3 = 12 / 3 = 4',
            withoutGrouping: '8 + 4 / 3 = 8 + 1.33 = 9.33',
            note: 'The fraction bar visually groups the numerator. Treat it as a bracket.',
          },
          {
            written: 'square root of (16 + 9)',
            withImplicitBracket: 'root of 25 = 5',
            withoutGrouping: 'root of 16 + 9 = 4 + 9 = 13',
            note: 'The horizontal line of the root symbol groups whatever sits underneath it.',
          },
        ],
        rule: 'Fraction bars and root symbols carry implicit brackets. Resolve the grouped chunk first.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'bnb-worked-1',
      title: 'Evaluate 2 x [3 + (5 - 2)]',
      steps: [
        {
          explanation:
            'Spot the layers. The round bracket is inside the square bracket, so the round bracket is innermost.',
          maths: '2 x [3 + (5 - 2)]',
        },
        {
          explanation:
            'Resolve the innermost bracket first: 5 - 2 = 3.',
          maths: '(5 - 2) = 3',
        },
        {
          explanation:
            'Substitute back. The expression now has just one bracket left.',
          maths: '2 x [3 + 3]',
        },
        {
          explanation:
            'Resolve the square bracket: 3 + 3 = 6.',
          maths: '[3 + 3] = 6',
        },
        {
          explanation:
            'Substitute back. Only the outermost operation remains.',
          maths: '2 x 6',
        },
        {
          explanation:
            'Multiply to finish.',
          maths: '2 x 6 = 12',
        },
        {
          explanation: 'So 2 x [3 + (5 - 2)] = 12.',
          maths: '2 x [3 + (5 - 2)] = 12',
        },
      ],
    },
    {
      id: 'bnb-worked-2',
      title: 'Evaluate [(4 + 6) x 2] - 7 (one missing step revealed by the engine)',
      steps: [
        {
          explanation:
            'Spot the layers. The round bracket is innermost; the square bracket wraps a product; the subtraction sits outside.',
          maths: '[(4 + 6) x 2] - 7',
        },
        {
          explanation:
            'Resolve the innermost bracket first.',
          maths: '(4 + 6) = 10',
        },
        {
          explanation:
            'Substitute back. The expression now has just one bracket left.',
          maths: '[10 x 2] - 7',
        },
        {
          explanation:
            'Resolve the square bracket. Inside it, BIDMAS says multiplication takes priority, and there is only one operation here.',
        },
        {
          explanation:
            'Substitute back. Only the outer subtraction remains.',
          maths: '20 - 7',
        },
        {
          explanation:
            'Subtract to finish.',
          maths: '20 - 7 = 13',
        },
        {
          explanation: 'So [(4 + 6) x 2] - 7 = 13.',
          maths: '[(4 + 6) x 2] - 7 = 13',
        },
      ],
    },
  ],
  questions: [
    // Core 1: single bracket warm-up
    {
      id: 'bnb-q1',
      type: 'multiple-choice',
      stem: 'Evaluate (3 + 4) x 2.',
      tier: 'core',
      options: ['11', '14', '24', '9'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Brackets first: 3 + 4 = 7. Then 7 x 2 = 14.',
    },
    // Core 2: single bracket with subtraction inside
    {
      id: 'bnb-q2',
      type: 'numeric-entry',
      stem: 'Evaluate 5 + (8 - 3).',
      tier: 'core',
      correctAnswer: 10,
      xpValue: 10,
      hint: 'Brackets first: 8 - 3 = 5. Then 5 + 5 = 10.',
    },
    // Core 3: first nested bracket, inner round then outer square
    {
      id: 'bnb-q3',
      type: 'multiple-choice',
      stem: 'Evaluate [3 + (5 - 2)] x 2.',
      tier: 'core',
      options: ['8', '11', '12', '16'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'bnb-mis-outer-first',
      hint: 'Innermost bracket first: 5 - 2 = 3. Then [3 + 3] = 6. Finally 6 x 2 = 12.',
    },
    // Core 4: matches worked example 2 numbers
    {
      id: 'bnb-q4',
      type: 'numeric-entry',
      stem: 'Evaluate [(4 + 6) x 2] - 7.',
      tier: 'core',
      correctAnswer: 13,
      xpValue: 10,
      hint: 'Innermost bracket first: 4 + 6 = 10. Then [10 x 2] = 20. Finally 20 - 7 = 13.',
    },
    // Core 5: bracket-counting
    {
      id: 'bnb-q5',
      type: 'multiple-choice',
      stem: 'Which expression has its brackets balanced, with every open bracket closed exactly once?',
      tier: 'core',
      options: [
        '[2 + (3 x 4)] - 5',
        '[2 + (3 x 4] - 5)',
        '2 + (3 x 4)] - 5',
        '[2 + 3 x 4)] - 5',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'bnb-mis-bracket-mismatch',
      hint: 'Count opens and closes for each shape. Option A has one open round and one close round, one open square and one close square. The others mix the pairs up.',
    },
    // Core 6: identify the innermost layer
    {
      id: 'bnb-q6',
      type: 'multiple-choice',
      stem: 'In the expression 2 x [3 + (5 - 2 x 1)], which part is the innermost layer that must be resolved first?',
      tier: 'core',
      options: [
        '2 x [...]',
        '3 + (5 - 2 x 1)',
        '2 x 1',
        '(5 - 2 x 1)',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'bnb-mis-same-level-confusion',
      hint: 'The innermost bracket is the round bracket (5 - 2 x 1). BIDMAS still runs inside it, but the layer to start with is the whole round bracket.',
    },
    // Core 7: spot-misconception on outer-first slip
    {
      id: 'bnb-q7',
      type: 'spot-misconception',
      stem: 'Sam evaluates 2 x [3 + (5 - 2)] by writing "I do the square bracket first because it is bigger: 3 + 5 - 2 = 6, then 2 x 6 = 12".',
      tier: 'core',
      statements: [
        {
          text: 'Sam is right. The square bracket is the larger shape, so it has priority over the round bracket inside it.',
          isMisconception: true,
        },
        {
          text: 'In fact the shape of the bracket does not set the order. The innermost bracket is resolved first. Sam reached 12 by accident because dropping the inner bracket happened to leave the arithmetic unchanged here. On 2 x [3 - (5 - 2)], dropping the inner bracket gives 3 - 5 - 2 = -4, so 2 x (-4) = -8, but the correct method gives inner = 3, [3 - 3] = 0, and 2 x 0 = 0. Use the correct method every time: innermost bracket first.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'bnb-mis-outer-first',
    },
    // Confident 1: standard nested with multiplication outside
    {
      id: 'bnb-q8',
      type: 'numeric-entry',
      stem: 'Evaluate [2 x (3 + 4)] - 5.',
      tier: 'confident',
      correctAnswer: 9,
      xpValue: 15,
      hint: 'Innermost bracket first: 3 + 4 = 7. Then [2 x 7] = 14. Finally 14 - 5 = 9.',
    },
    // Confident 2: nested with multiplication inside the outer bracket
    {
      id: 'bnb-q9',
      type: 'multiple-choice',
      stem: 'Evaluate 3 + [4 x (8 - 5)].',
      tier: 'confident',
      options: ['7', '21', '15', '9'],
      correctIndex: 2,
      xpValue: 15,
      hint: 'Innermost bracket first: 8 - 5 = 3. Then [4 x 3] = 12. Finally 3 + 12 = 15.',
    },
    // Confident 3: combination inside inner bracket
    {
      id: 'bnb-q10',
      type: 'numeric-entry',
      stem: 'Evaluate [10 - (4 + 1)] x 3.',
      tier: 'confident',
      correctAnswer: 15,
      xpValue: 15,
      hint: 'Innermost bracket first: 4 + 1 = 5. Then [10 - 5] = 5. Finally 5 x 3 = 15.',
    },
    // Confident 4: drag-order steps to evaluate
    {
      id: 'bnb-q11',
      type: 'drag-order',
      stem: 'Drag the steps for evaluating 2 x [3 + (5 - 2)] into the correct order.',
      tier: 'confident',
      items: [
        'Resolve the innermost bracket: (5 - 2) = 3.',
        'Multiply to finish: 2 x 6 = 12.',
        'Substitute back: 2 x [3 + 3].',
        'Resolve the square bracket: [3 + 3] = 6.',
      ],
      correctOrder: [0, 2, 3, 1],
      xpValue: 20,
      misconceptionId: 'bnb-mis-outer-first',
      hint: 'Always work from the innermost layer outwards. Resolve, substitute back, resolve, then finish with whatever sits outside.',
    },
    // Confident 5: missing-step worked example
    {
      id: 'bnb-q12',
      type: 'missing-step',
      stem: 'Fill in the missing step. Priya evaluates [(4 + 6) x 2] - 7, copying the expression carefully so no bracket is dropped.',
      tier: 'confident',
      steps: [
        'Innermost bracket first: 4 + 6 = 10.',
        'Substitute back: [10 x 2] - 7.',
        null,
        'Subtract to finish: 20 - 7 = 13.',
      ],
      missingStepIndex: 2,
      correctStep: 'Resolve the square bracket: [10 x 2] = 20.',
      xpValue: 20,
      misconceptionId: 'bnb-mis-dropped-bracket',
    },
    // Confident 6: implicit bracket of a fraction bar
    {
      id: 'bnb-q13',
      type: 'multiple-choice',
      stem: 'A pupil writes the fraction (8 + 4) divided by 3 on one line as 8 + 4 / 3. What is the value of the original fraction (8 + 4) / 3?',
      tier: 'confident',
      options: ['9.33', '3.33', '8.33', '4'],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'bnb-mis-fraction-bar-implicit',
      hint: 'The fraction bar acts as an invisible bracket round the top. So (8 + 4) / 3 = 12 / 3 = 4. The line 8 + 4 / 3 without brackets would compute 4 / 3 first by BIDMAS, but that is not the original fraction.',
    },
    // Confident 7: spot-misconception on root bar implicit bracket
    {
      id: 'bnb-q14',
      type: 'spot-misconception',
      stem: 'Hari evaluates the square root of (16 + 9) by typing "root of 16, plus 9" into his calculator and writes "root of 16 + 9 = 4 + 9 = 13".',
      tier: 'confident',
      statements: [
        {
          text: 'Hari is right. The square root symbol applies only to the first number, and the second number is added on after.',
          isMisconception: true,
        },
        {
          text: 'In fact the horizontal line of the root symbol acts as an invisible bracket round everything underneath it. So the expression means the root of the whole sum 16 + 9 = 25, and the answer is the root of 25 = 5, not 13.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'bnb-mis-root-implicit',
    },
    // Confident 8: two-pair expression at the same depth (also tests that [] and () behave the same)
    {
      id: 'bnb-q15',
      type: 'multiple-choice',
      stem: 'Evaluate (2 + 3) x [4 - (1 + 2)]. The round and square brackets do the same job here.',
      tier: 'confident',
      options: ['20', '17', '5', '3'],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'bnb-mis-square-bracket-different',
      hint: 'Resolve each innermost bracket first: 2 + 3 = 5 and 1 + 2 = 3. Then [4 - 3] = 1. Finally 5 x 1 = 5.',
    },
    // Challenge 1: triple-nested expression with curly outermost
    {
      id: 'bnb-q16',
      type: 'numeric-entry',
      stem: 'Evaluate {2 + [3 x (4 - 1)]}. The curly brace, square bracket, and round bracket are all brackets, alternated only to keep the pairs visible.',
      tier: 'challenge',
      correctAnswer: 11,
      xpValue: 25,
      hint: 'Innermost: 4 - 1 = 3. Middle: [3 x 3] = 9. Outermost: {2 + 9} = 11.',
    },
    // Challenge 2: calculator-key sequence
    {
      id: 'bnb-q17',
      type: 'multiple-choice',
      stem: 'A pupil wants the calculator to evaluate [2 + (5 - 1)] x 3. Their calculator only has round bracket keys. Which key sequence gives the correct answer?',
      tier: 'challenge',
      options: [
        '( 2 + ( 5 - 1 ) ) x 3 =',
        '2 + 5 - 1 x 3 =',
        '( 2 + 5 - 1 ) x 3 =',
        '2 + ( 5 - 1 ) x 3 =',
      ],
      correctIndex: 0,
      xpValue: 25,
      misconceptionId: 'bnb-mis-bracket-mismatch',
      hint: 'The square bracket has to be replaced with a second pair of round brackets, otherwise the multiplication binds only to the inner result. Correct answer: 2 + 4 = 6, then 6 x 3 = 18.',
    },
    // Challenge 3: Bond-style word problem (multi-step with unstated intermediate)
    {
      id: 'bnb-q18',
      type: 'numeric-entry',
      stem: 'A bakery in Sevenoaks sells boxes of cupcakes. Each box holds 6 cakes. On Saturday they bake 8 trays of plain cupcakes and 4 trays of iced cupcakes, with 6 cakes per tray. They send out 9 full boxes to a school fair. How many cupcakes remain at the bakery?',
      tier: 'challenge',
      correctAnswer: 18,
      xpValue: 25,
      hint: 'Total cupcakes baked: [(8 + 4) x 6] = 72. Cupcakes sent out: 9 x 6 = 54. Remaining: 72 - 54 = 18.',
    },
    // Challenge 4: two-pair expression with multiplication outside
    {
      id: 'bnb-q19',
      type: 'multiple-choice',
      stem: 'Evaluate [3 + (2 x 4)] x [10 - (3 + 5)].',
      tier: 'challenge',
      options: ['18', '22', '11', '44'],
      correctIndex: 1,
      xpValue: 25,
      hint: 'Left square bracket: 2 x 4 = 8, then 3 + 8 = 11. Right square bracket: 3 + 5 = 8, then 10 - 8 = 2. Multiply: 11 x 2 = 22.',
    },
    // Challenge 5: fraction-bar word problem with implicit bracket
    {
      id: 'bnb-q20',
      type: 'numeric-entry',
      stem: 'Three pupils at a school in Manchester share the total cost of three items priced £14, £9, and £7. The total cost is split equally between them. How many pounds does each pupil pay?',
      tier: 'challenge',
      correctAnswer: 10,
      unit: 'pounds',
      xpValue: 25,
      hint: 'The fraction bar carries an implicit bracket: cost per pupil = (14 + 9 + 7) / 3 = 30 / 3 = 10. Treat the whole sum on top as if it were bracketed.',
    },
    // Challenge 6: triple-nested with subtraction outside
    {
      id: 'bnb-q21',
      type: 'multiple-choice',
      stem: 'Evaluate 20 - {3 x [2 + (6 - 2)]}.',
      tier: 'challenge',
      options: ['2', '14', '8', '2 (and a remainder)'],
      correctIndex: 0,
      xpValue: 25,
      hint: 'Innermost: 6 - 2 = 4. Middle: [2 + 4] = 6. Outer: {3 x 6} = 18. Finally 20 - 18 = 2.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a nested-bracket question where pupils resolved the outer square bracket before the inner round bracket and reached the right answer by accident on simple cases.
    {
      id: 'bnb-mis-outer-first',
      description:
        'I evaluate the outer (larger) bracket first because it looks more important, and only deal with the inner bracket after.',
      triggerAnswer: 'outer-first',
      correction:
        'Actually the innermost bracket is resolved first. Brackets are unwrapped from the inside out, one layer at a time.',
      reExplanation:
        'Think of nested brackets as Russian dolls: the smallest doll comes out first. For 2 x [3 + (5 - 2)], the inner bracket gives 3, the square bracket gives 6, then the multiply gives 12. The slip sometimes lands on the right answer by accident on simple sums, but it fails on 2 x [3 - (5 - 2)] where dropping the inner bracket changes the subtraction step.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 1F (Foundation, Non-calculator), commentary on pupils who treated square brackets as a different operator (such as a modulus or a floor function) rather than a normal bracket.
    {
      id: 'bnb-mis-square-bracket-different',
      description:
        'I think square brackets mean something different from round brackets, perhaps a modulus or a special function.',
      triggerAnswer: 'square-bracket-different',
      correction:
        'In fact square brackets do the same job as round brackets at this stage of maths. The two shapes are alternated only so the matching pairs stay visible.',
      reExplanation:
        'At KS3 and GCSE Foundation, [ ] and ( ) carry the same priority: group the contents, resolve first. Authors alternate the shapes so the eye can track which open pairs with which close in a long expression. The shapes only take on a different meaning at A level, where [ ] can mean a closed interval and { } can mean a set, but those uses come with extra context. In ordinary arithmetic, treat all three shapes as brackets.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 01 (Foundation, Non-calculator), commentary on bracket-counting errors where pupils missed a close bracket and ran the implied bracket all the way to the end of the line.
    {
      id: 'bnb-mis-bracket-mismatch',
      description:
        'I do not check that every open bracket has a matching close bracket. If the expression looks roughly right, I trust the layout and start computing.',
      triggerAnswer: 'bracket-mismatch',
      correction:
        'Actually the matching count has to be exact. An unmatched bracket changes which part of the expression is grouped.',
      reExplanation:
        'Walk through once and tally opens and closes for each shape. For [2 + (3 x 4)] - 5 the tally is one round open, one round close, one square open, one square close. If a close is missing, the implied bracket extends to the end of the line and the wrong part of the expression gets grouped. On a calculator with only round brackets, replace every square bracket with a second pair of rounds so the nesting is preserved.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Order of Operations" page, "Common mistake" callout on pupils treating the fraction bar as an ordinary division and losing the implicit bracket around the numerator and denominator.
    {
      id: 'bnb-mis-fraction-bar-implicit',
      description:
        'I treat a fraction bar as if it were the division sign on one line, so (8 + 4) / 3 written as the fraction with 8 + 4 on top and 3 on the bottom means the same as 8 + 4 / 3 in a row.',
      triggerAnswer: 'fraction-bar-implicit',
      correction:
        'Actually the fraction bar carries an invisible bracket round the numerator and an invisible bracket round the denominator.',
      reExplanation:
        'When a fraction is stacked, the top row 8 + 4 is grouped by the horizontal bar; the bottom row is grouped the same way. So the stacked fraction equals (8 + 4) / 3 = 12 / 3 = 4. Writing it on one line as 8 + 4 / 3 strips the implicit bracket, and BIDMAS then does 4 / 3 first, giving 9.33. When rewriting a stacked fraction in line, always bracket the top and the bottom.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 8 "Algebraic Operations" by Booth, on pupils who applied the root symbol to only the first number when the radicand contained an addition.
    {
      id: 'bnb-mis-root-implicit',
      description:
        'I think the square root symbol only applies to the number directly under the tick mark, so the root of (16 + 9) means root of 16 plus 9.',
      triggerAnswer: 'root-implicit',
      correction:
        'In fact the horizontal line of the root symbol acts as a bracket round everything underneath it.',
      reExplanation:
        'The root symbol has a tick and a horizontal line. The line shows where the root applies; whatever sits under the line is the radicand. So the root of (16 + 9) is the root of the whole sum 25, which is 5. If only the 16 sat under the line, the expression would read as the root of 16, then + 9, giving 4 + 9 = 13. The two layouts look similar in print but mean different things.',
    },
    // Source: NCETM Secondary Magazine, Issue 132, "Persistent Misconceptions in Order of Operations" article, citing pupil work that resolved brackets at the same nesting depth in the wrong order when they were separated by an operator.
    {
      id: 'bnb-mis-same-level-confusion',
      description:
        'When two brackets sit at the same nesting depth, separated by an operator, I am not sure which one to resolve first, so I pick one at random.',
      triggerAnswer: 'same-level-confusion',
      correction:
        'Actually two brackets at the same depth are independent. Resolve each one fully, then combine the two results using the operator between them.',
      reExplanation:
        'For (2 + 3) x [4 - (1 + 2)], both outer brackets sit at the same depth. The left bracket gives 5. The right bracket [4 - (1 + 2)] is itself nested; its inner bracket gives 3, then the square bracket gives 4 - 3 = 1. The expression now reads 5 x 1 = 5. The order of resolving two independent brackets does not matter; each must be fully resolved before they are combined.',
    },
    // Authored, no external source: classroom-observed slip where pupils running short of working space write one expression on top of another and accidentally drop a bracket pair, leading to off-by-one operations.
    {
      id: 'bnb-mis-dropped-bracket',
      description:
        'When I copy a long expression onto a new line, I sometimes drop one of the brackets and just continue with the rest of the calculation.',
      triggerAnswer: 'dropped-bracket',
      correction:
        'In fact a missing bracket changes the meaning of the expression. Copy carefully, then count the opens and closes before computing.',
      reExplanation:
        'A nested expression like [2 + (3 x 4)] - 5 has four bracket symbols. Drop one and the expression becomes meaningless or computes a different value. Pause after copying and tally the bracket symbols on the new line against the original. The tally takes two seconds and catches the slip. On a calculator with only round brackets, write a second pair of rounds where the original used squares, then tally again before pressing equals.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const bidmasNestedBracketsZoneNodes = [bidmasNestedBrackets]
