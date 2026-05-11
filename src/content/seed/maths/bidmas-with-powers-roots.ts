import type { SkillNode } from '@/types/content'

export const bidmasWithPowersRoots: SkillNode = {
  id: 'maths-bidmas-with-powers-roots',
  title: 'BIDMAS with Powers and Roots',
  description:
    'Apply the priority of operations (BIDMAS) to expressions that include powers (squares, cubes) and roots (square roots, cube roots). Powers and roots both sit on the Indices rung of BIDMAS, between Brackets above and Division and Multiplication below. Anything inside a bracket or inside a root is settled before the index step touches it, and powers and roots on the same level are worked left to right.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-bidmas',
  zoneName: 'BIDMAS',
  tier: 'confident',
  prerequisites: ['maths-bidmas-order-of-operations'],
  curriculum: {
    ks3Objective:
      'Use conventional notation for the priority of operations, including brackets, powers, roots and reciprocals.',
    awardingBodies: {
      aqa: 'N3 Use the priority of operations, including brackets, powers, roots and reciprocals (GCSE Mathematics 8300)',
      edexcel: 'N4 Apply the priority of operations to expressions involving powers and roots (GCSE Mathematics 1MA1)',
      ocr: '2.05b Apply BIDMAS to expressions with powers and roots (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'bpr-scene-bidmas-layers',
      title: 'Where Powers and Roots Sit in BIDMAS',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the expression 2 + 4 x 3^2 to reveal which BIDMAS layer handles it. The 3^2 sits on the Indices rung, just below Brackets and above the multiplication. The 4 x ... sits on the Division and Multiplication rung. The 2 + ... waits its turn at the bottom on the Addition and Subtraction rung. Roots live on the same rung as powers because a square root is just a power of one half in disguise.',
      data: {
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'hs-power',
            x: 70,
            y: 30,
            label: 'Indices: 3^2',
            description: 'Square the 3 first because Indices outrank Multiplication. 3^2 = 9.',
          },
          {
            id: 'hs-multiply',
            x: 45,
            y: 50,
            label: 'Multiplication: 4 x 9',
            description: 'Once 3^2 = 9 is in place, multiply: 4 x 9 = 36.',
          },
          {
            id: 'hs-add',
            x: 15,
            y: 70,
            label: 'Addition: 2 + 36',
            description: 'Addition is the lowest rung. Add last: 2 + 36 = 38.',
          },
          {
            id: 'hs-root-note',
            x: 80,
            y: 80,
            label: 'Where roots fit',
            description: 'A square root or cube root sits on the same Indices rung as a power. Roots and powers share priority and read left to right.',
          },
        ],
      },
    },
    {
      id: 'bpr-scene-bracket-versus-power',
      title: 'Brackets Beat Powers: (5+3)^2 versus 5 + 3^2',
      type: 'diagram',
      instructions:
        'Look at how the brackets change the order. In 5 + 3^2, the Indices rung fires first: 3^2 = 9, then 5 + 9 = 14. In (5+3)^2, the bracket fires first: 5 + 3 = 8, then 8^2 = 64. Same digits, very different answers. The bracket overrides the natural BIDMAS rung order by forcing its contents to settle before the power gets near them. A common slip is to think (a+b)^2 equals a^2 + b^2. It does not. (5+3)^2 = 64, but 5^2 + 3^2 = 25 + 9 = 34.',
      data: {
        comparisons: [
          {
            expression: '5 + 3^2',
            order: 'Indices first, then Addition',
            step1: '3^2 = 9',
            step2: '5 + 9',
            answer: 14,
          },
          {
            expression: '(5 + 3)^2',
            order: 'Brackets first, then Indices',
            step1: '(5 + 3) = 8',
            step2: '8^2',
            answer: 64,
          },
          {
            expression: '5^2 + 3^2',
            order: 'Two separate indices, then Addition',
            step1: '5^2 = 25 and 3^2 = 9',
            step2: '25 + 9',
            answer: 34,
          },
        ],
        rule: 'The bracket reaches up the BIDMAS ladder and pulls its contents in first, ahead of any power. (a+b)^2 is NOT the same as a^2 + b^2.',
      },
    },
    {
      id: 'bpr-scene-root-as-bracket',
      title: 'A Root Sign Acts Like a Bracket',
      type: 'diagram',
      instructions:
        'Look at sqrt(9 + 16). The bar over the 9 + 16 acts like a bracket: it tells you the whole 9 + 16 must be settled before the root gets near it. Inside first: 9 + 16 = 25. Then root: sqrt(25) = 5. A common slip is to split the root across the addition and write sqrt(9) + sqrt(16) = 3 + 4 = 7. That answer is wrong. The root is not distributive over addition. Treat the contents of a root sign as if they sat inside invisible brackets.',
      data: {
        worked: [
          { step: 'See the expression', maths: 'sqrt(9 + 16)' },
          { step: 'The bar of the root acts as a bracket', maths: 'sqrt((9 + 16))' },
          { step: 'Brackets settle first', maths: 'sqrt(25)' },
          { step: 'Apply the root', maths: '5' },
        ],
        wrongPath: {
          slip: 'sqrt(9) + sqrt(16) = 3 + 4 = 7',
          why: 'The root does not split across addition. The bar over the whole sum is part of the notation.',
        },
        rule: 'sqrt(a + b) is NOT sqrt(a) + sqrt(b). Settle the inside of the root first, then take the root.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'bpr-worked-1',
      title: 'Evaluate 2 + 4 x 3^2',
      steps: [
        {
          explanation:
            'Identify the highest-priority operation. There are no brackets, but there is an index: 3^2.',
          maths: '2 + 4 x 3^2',
        },
        {
          explanation:
            'Indices come next on the BIDMAS ladder. Work out 3^2 before any multiplication or addition.',
          maths: '3^2 = 3 x 3 = 9',
        },
        {
          explanation:
            'Substitute the squared value back into the expression.',
          maths: '2 + 4 x 9',
        },
        {
          explanation:
            'Multiplication and Division come next. Work out 4 x 9.',
          maths: '4 x 9 = 36',
        },
        {
          explanation:
            'Substitute the product back into the expression.',
          maths: '2 + 36',
        },
        {
          explanation:
            'Finally, apply Addition.',
          maths: '2 + 36 = 38',
        },
        {
          explanation: 'So 2 + 4 x 3^2 = 38.',
          maths: '2 + 4 x 3^2 = 38',
        },
      ],
    },
    {
      id: 'bpr-worked-2',
      title: 'Evaluate sqrt(16) + (5 - 1)^2 (missing step revealed by the engine)',
      steps: [
        {
          explanation:
            'Spot the two index-level items: the square root sqrt(16) and the squared bracket (5 - 1)^2. The bracket must be settled before its power can act.',
          maths: 'sqrt(16) + (5 - 1)^2',
        },
        {
          explanation:
            'Brackets first. Evaluate the inside of (5 - 1).',
          maths: '(5 - 1) = 4',
        },
        {
          explanation:
            'Substitute the bracket value back into the expression.',
          maths: 'sqrt(16) + 4^2',
        },
        {
          explanation:
            'Indices: take the square root of 16.',
        },
        {
          explanation:
            'Indices: square the 4. Both index-level operations sit on the same rung and are evaluated left to right, but neither one needs to wait on the other here.',
          maths: '4^2 = 16',
        },
        {
          explanation:
            'Substitute both index results back into the expression.',
          maths: '4 + 16',
        },
        {
          explanation:
            'Apply Addition.',
          maths: '4 + 16 = 20',
        },
        {
          explanation: 'So sqrt(16) + (5 - 1)^2 = 20.',
          maths: 'sqrt(16) + (5 - 1)^2 = 20',
        },
      ],
    },
  ],
  questions: [
    // Core 1: simple square
    {
      id: 'bpr-q1',
      type: 'multiple-choice',
      stem: 'What is 5^2?',
      tier: 'core',
      options: ['10', '20', '25', '7'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'bpr-mis-power-as-multiplication',
      hint: '5^2 means 5 multiplied by itself, not 5 times 2. So 5 x 5 = 25.',
    },
    // Core 2: simple cube
    {
      id: 'bpr-q2',
      type: 'numeric-entry',
      stem: 'Work out 2^3.',
      tier: 'core',
      correctAnswer: 8,
      xpValue: 10,
      hint: '2^3 means 2 x 2 x 2. So 2 x 2 = 4, then 4 x 2 = 8.',
    },
    // Core 3: simple square root
    {
      id: 'bpr-q3',
      type: 'multiple-choice',
      stem: 'What is sqrt(49)?',
      tier: 'core',
      options: ['24.5', '7', '14', '49'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Ask which number multiplied by itself gives 49. Since 7 x 7 = 49, sqrt(49) = 7.',
    },
    // Core 4: power before addition
    {
      id: 'bpr-q4',
      type: 'numeric-entry',
      stem: 'Evaluate 5 + 3^2.',
      tier: 'core',
      correctAnswer: 14,
      xpValue: 10,
      misconceptionId: 'bpr-mis-power-after-addition',
      hint: 'Indices come before Addition. Square the 3 first: 3^2 = 9. Then 5 + 9 = 14.',
    },
    // Core 5: bracket before power
    {
      id: 'bpr-q5',
      type: 'multiple-choice',
      stem: 'Evaluate (5 + 3)^2.',
      tier: 'core',
      options: ['16', '34', '64', '11'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'bpr-mis-distribute-power-over-bracket',
      hint: 'Brackets sit above Indices. Work out 5 + 3 = 8 first, then 8^2 = 64.',
    },
    // Core 6: root with the contents already settled
    {
      id: 'bpr-q6',
      type: 'numeric-entry',
      stem: 'Work out sqrt(9 + 16). Remember the bar of the root acts like a bracket.',
      tier: 'core',
      correctAnswer: 5,
      xpValue: 10,
      misconceptionId: 'bpr-mis-root-distributes-over-addition',
      hint: 'Inside the root first: 9 + 16 = 25. Then sqrt(25) = 5. The root does NOT split across the plus sign.',
    },
    // Core 7: indices before multiplication, spot the misconception
    {
      id: 'bpr-q7',
      type: 'spot-misconception',
      stem: 'Sara reads 2 + 4 x 3^2 strictly left to right and writes: "2 + 4 = 6, then 6 x 3 = 18, then 18 squared = 324".',
      tier: 'core',
      statements: [
        {
          text: 'Sara is right. Just read each operation in the order it appears on the page.',
          isMisconception: true,
        },
        {
          text: 'BIDMAS sets priority, not left-to-right reading. The Indices step fires first: 3^2 = 9. Then Multiplication: 4 x 9 = 36. Then Addition: 2 + 36 = 38. The correct answer is 38, not 324.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'bpr-mis-power-after-addition',
    },
    // Confident 1: BIDMAS with power and multiplication
    {
      id: 'bpr-q8',
      type: 'multiple-choice',
      stem: 'Evaluate 2 + 4 x 3^2.',
      tier: 'confident',
      options: ['54', '324', '38', '22'],
      correctIndex: 2,
      xpValue: 15,
      hint: 'Indices first: 3^2 = 9. Then Multiplication: 4 x 9 = 36. Then Addition: 2 + 36 = 38.',
    },
    // Confident 2: bracket with root inside
    {
      id: 'bpr-q9',
      type: 'numeric-entry',
      stem: 'Evaluate 24 / (2 + sqrt(4)).',
      tier: 'confident',
      correctAnswer: 6,
      xpValue: 15,
      hint: 'Work the bracket first. Inside the bracket: sqrt(4) = 2 (Indices step), then 2 + 2 = 4. Outside: 24 / 4 = 6.',
    },
    // Confident 3: drag-order the BIDMAS layers for an expression
    {
      id: 'bpr-q10',
      type: 'drag-order',
      stem: 'Drag these four BIDMAS steps into the order you would use them to evaluate (3 + 2)^2 - sqrt(36) / 2.',
      tier: 'confident',
      items: [
        'Indices: square the bracket value, and take the square root.',
        'Brackets: settle the (3 + 2) into a single number.',
        'Addition and Subtraction: subtract the second result from the first.',
        'Division and Multiplication: divide the root value by 2.',
      ],
      correctOrder: [1, 0, 3, 2],
      xpValue: 20,
      misconceptionId: 'bpr-mis-root-outside-bidmas',
      hint: 'BIDMAS order is Brackets, then Indices, then Division and Multiplication, then Addition and Subtraction.',
    },
    // Confident 4: missing-step
    {
      id: 'bpr-q11',
      type: 'missing-step',
      stem: 'Fill in the missing step. Aisha evaluates 3 x 2^3 - 4.',
      tier: 'confident',
      steps: [
        'Indices: 2^3 = 2 x 2 x 2 = 8.',
        'Substitute the cubed value back in: 3 x 8 - 4.',
        null,
        'Subtract: 24 - 4 = 20.',
      ],
      missingStepIndex: 2,
      correctStep: 'Multiplication: 3 x 8 = 24.',
      xpValue: 20,
    },
    // Confident 5: power and root same expression
    {
      id: 'bpr-q12',
      type: 'numeric-entry',
      stem: 'Evaluate sqrt(25) + 2^3.',
      tier: 'confident',
      correctAnswer: 13,
      xpValue: 15,
      misconceptionId: 'bpr-mis-power-beats-root',
      hint: 'Both items are on the Indices rung. sqrt(25) = 5. 2^3 = 8. Then add: 5 + 8 = 13.',
    },
    // Confident 6: power and bracket misconception
    {
      id: 'bpr-q13',
      type: 'spot-misconception',
      stem: 'Ravi writes "(4 + 1)^2 = 4^2 + 1^2 = 16 + 1 = 17, because squaring distributes over addition".',
      tier: 'confident',
      statements: [
        {
          text: 'Ravi is right. Powers split across addition the same way multiplication does.',
          isMisconception: true,
        },
        {
          text: 'In fact (a + b)^2 is NOT the same as a^2 + b^2. Brackets must be settled first. (4 + 1)^2 = 5^2 = 25, not 17.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'bpr-mis-distribute-power-over-bracket',
    },
    // Confident 7: BIDMAS with cube and division
    {
      id: 'bpr-q14',
      type: 'multiple-choice',
      stem: 'Evaluate 40 - 2^3 x 3.',
      tier: 'confident',
      options: ['114', '16', '8', '96'],
      correctIndex: 1,
      xpValue: 15,
      hint: 'Indices: 2^3 = 8. Multiplication: 8 x 3 = 24. Subtraction: 40 - 24 = 16.',
    },
    // Confident 8: calculator-key sequence in Tunbridge Wells classroom
    {
      id: 'bpr-q15',
      type: 'multiple-choice',
      stem: 'In a Tunbridge Wells maths quiz, Ben types 6 + 2^2 x 5 into his calculator. Which value should appear on the display?',
      tier: 'confident',
      options: ['26', '160', '40', '14'],
      correctIndex: 0,
      xpValue: 15,
      hint: 'Indices first: 2^2 = 4. Multiplication: 4 x 5 = 20. Addition: 6 + 20 = 26.',
    },
    // Challenge 1: Bond-style multi-step with bracket, power, root
    {
      id: 'bpr-q16',
      type: 'numeric-entry',
      stem: 'Evaluate (2 + 1)^3 - sqrt(49) + 4.',
      tier: 'challenge',
      correctAnswer: 24,
      xpValue: 25,
      misconceptionId: 'bpr-mis-power-before-bracket',
      hint: 'Brackets: 2 + 1 = 3. Indices: 3^3 = 27 and sqrt(49) = 7. Substitute: 27 - 7 + 4. Addition and Subtraction left to right: 27 - 7 = 20, then 20 + 4 = 24.',
    },
    // Challenge 2: Bond-style with multiple powers
    {
      id: 'bpr-q17',
      type: 'numeric-entry',
      stem: 'Evaluate 5^2 - 3^2 + 2 x sqrt(16).',
      tier: 'challenge',
      correctAnswer: 24,
      xpValue: 25,
      hint: 'Indices: 5^2 = 25, 3^2 = 9, sqrt(16) = 4. Multiplication: 2 x 4 = 8. Substitute: 25 - 9 + 8. Left to right: 25 - 9 = 16, then 16 + 8 = 24.',
    },
    // Challenge 3: Sevenoaks word problem (school maths quiz)
    {
      id: 'bpr-q18',
      type: 'multiple-choice',
      stem: 'In a Sevenoaks school maths quiz the question reads: "Work out 100 - 6^2 x 2 + sqrt(81)". What is the correct answer?',
      tier: 'challenge',
      options: ['137', '37', '163', '9'],
      correctIndex: 1,
      xpValue: 25,
      hint: 'Indices: 6^2 = 36, sqrt(81) = 9. Multiplication: 36 x 2 = 72. Substitute: 100 - 72 + 9. Left to right: 100 - 72 = 28, then 28 + 9 = 37.',
    },
    // Challenge 4: free-text reasoning
    {
      id: 'bpr-q19',
      type: 'free-text',
      stem: 'Explain in one or two sentences why sqrt(9 + 16) does NOT equal sqrt(9) + sqrt(16). Mention what the bar of the root sign acts like in BIDMAS.',
      tier: 'challenge',
      sampleAnswer:
        'The bar over the contents of the root acts like a bracket, so 9 + 16 must be settled to 25 before the root is taken, giving sqrt(25) = 5. Splitting the root across the addition (sqrt(9) + sqrt(16) = 3 + 4 = 7) ignores that bracket and gives a different answer.',
      keywords: ['bracket', 'inside', '25', '5', 'addition'],
      xpValue: 25,
      misconceptionId: 'bpr-mis-root-distributes-over-addition',
    },
    // Challenge 5: nested bracket and power with Manchester context
    {
      id: 'bpr-q20',
      type: 'multiple-choice',
      stem: 'A Manchester exam question reads: "Evaluate (10 - 2 x 3)^2 / sqrt(4)." What value should the student write down?',
      tier: 'challenge',
      options: ['32', '4', '16', '8'],
      correctIndex: 3,
      xpValue: 25,
      hint: 'Work the bracket first using BIDMAS inside it: 2 x 3 = 6, then 10 - 6 = 4. Indices: 4^2 = 16 and sqrt(4) = 2. Division: 16 / 2 = 8.',
    },
    // Challenge 6: Dover lighthouse stretch with cube and root
    {
      id: 'bpr-q21',
      type: 'multiple-choice',
      stem: 'A Dover stretch question asks for the value of 2^3 + sqrt(25 + 11) - 3 x 2. Which answer is correct?',
      tier: 'challenge',
      options: ['14', '20', '2', '8'],
      correctIndex: 3,
      xpValue: 25,
      hint: 'Inside the root: 25 + 11 = 36, then sqrt(36) = 6. Indices: 2^3 = 8. Multiplication: 3 x 2 = 6. Substitute: 8 + 6 - 6. Left to right: 8 + 6 = 14, then 14 - 6 = 8.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on order-of-operations questions where pupils added before squaring in expressions of the form a + b^2.
    {
      id: 'bpr-mis-power-after-addition',
      description:
        'I read expressions strictly left to right, so 5 + 3^2 becomes (5 + 3)^2 = 64 in my head, or 2 + 4 x 3^2 becomes ((2 + 4) x 3)^2.',
      triggerAnswer: 'power-after-addition',
      correction:
        'Actually Indices outrank Addition and Multiplication. The power fires before the additions and multiplications around it.',
      reExplanation:
        'BIDMAS puts Indices on the second rung, above Multiplication, Division, Addition and Subtraction. In 5 + 3^2, the 3^2 = 9 is calculated first, then 5 + 9 = 14. In 2 + 4 x 3^2, the 3^2 fires first, then 4 x 9 = 36, then 2 + 36 = 38. Powers stay close to the digit they label, not the whole expression.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 1F (Foundation, Non-calculator), commentary on pupils interpreting 3^2 as 3 multiplied by 2.
    {
      id: 'bpr-mis-power-as-multiplication',
      description:
        'I read 3^2 as 3 times 2, so I write 3^2 = 6. I think the small 2 is just another factor.',
      triggerAnswer: 'power-as-multiplication',
      correction:
        'In fact the small raised number tells you how many copies of the base to multiply together, not what to multiply the base by.',
      reExplanation:
        '3^2 means 3 x 3 = 9, not 3 x 2 = 6. The raised 2 is the index, sometimes called the power or exponent. It says "use two copies of 3 in the multiplication". Similarly 2^3 means 2 x 2 x 2 = 8, not 2 x 3 = 6. The base is the big number; the small raised number is how many copies of the base get multiplied.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Powers and Brackets" page, "Common mistake" callout warning that (a + b)^2 does NOT equal a^2 + b^2.
    {
      id: 'bpr-mis-distribute-power-over-bracket',
      description:
        'I think squaring distributes over addition, so (a + b)^2 = a^2 + b^2. For example (5 + 3)^2 = 5^2 + 3^2 = 25 + 9 = 34.',
      triggerAnswer: 'distribute-power-over-bracket',
      correction:
        'Actually (a + b)^2 means (a + b) x (a + b), which is not the same as a^2 + b^2. The bracket must be settled before the power acts.',
      reExplanation:
        'Brackets sit above Indices in BIDMAS. (5 + 3)^2 means: settle the bracket first to 8, then square: 8^2 = 64. Compare with 5^2 + 3^2 = 25 + 9 = 34. They differ by 30. Multiplication does distribute over addition (a x (b + c) = ab + ac), but powers do not.',
    },
    // Source: NCETM Secondary Magazine, Issue 127, "Persistent Misconceptions in Order of Operations" article, citing pupil work that splits a square root across a sum inside the root.
    {
      id: 'bpr-mis-root-distributes-over-addition',
      description:
        'I think the square root splits across addition, so sqrt(9 + 16) = sqrt(9) + sqrt(16) = 3 + 4 = 7.',
      triggerAnswer: 'root-distributes-over-addition',
      correction:
        'In fact the bar of the root acts like a bracket. Settle the inside of the root first, then take the root.',
      reExplanation:
        'For sqrt(9 + 16), the addition under the bar is part of the contents of the root. Treat it as sqrt((9 + 16)) = sqrt(25) = 5. The split form sqrt(9) + sqrt(16) gives 3 + 4 = 7, which is a different answer. Roots, like powers, do not distribute over addition. The notation looks compact, but the bar is doing the job of a bracket.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 5 "Operations and their Inverses", on pupils treating roots and powers as separate stages that fall outside BIDMAS rather than as the Indices step.
    {
      id: 'bpr-mis-root-outside-bidmas',
      description:
        'I treat square roots as a separate operation that I do AFTER everything else. So in sqrt(36) / 2 + 1, I work out 36 / 2 + 1 = 19 first and then take the root at the end.',
      triggerAnswer: 'root-outside-bidmas',
      correction:
        'Actually a square root is part of the Indices step in BIDMAS. It sits alongside powers, not after Addition and Subtraction.',
      reExplanation:
        'Roots live on the Indices rung, the same level as powers. In sqrt(36) / 2 + 1, the root is settled first: sqrt(36) = 6. Then Division: 6 / 2 = 3. Then Addition: 3 + 1 = 4. Treating the root as a final wrap-up gives the wrong answer. A useful way to see it: sqrt(x) is the same as x^(1/2), so it is plainly an index.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 01 (Foundation, Non-calculator), commentary on pupils swapping the priority of powers and roots when both appear in one expression, treating one as higher priority than the other.
    {
      id: 'bpr-mis-power-beats-root',
      description:
        'When a power and a root both appear, I think the power must come first because P sits above R in my head. So in sqrt(16) + 2^3, I treat 2^3 as a "must do first" step and ignore the root until later.',
      triggerAnswer: 'power-beats-root',
      correction:
        'In fact powers and roots share the Indices rung. They have equal priority and are worked left to right.',
      reExplanation:
        'BIDMAS does not separate powers from roots. Both belong to Indices. In sqrt(16) + 2^3, you can settle them in either order because they sit on different parts of the expression: sqrt(16) = 4 and 2^3 = 8, then add to get 12. The same idea applies inside a single chain: at the Indices rung, work left to right and treat powers and roots as one step of the calculation.',
    },
    // Authored, no external source: classroom-observed slip where Year 7 pupils apply a power before settling the bracket beneath it, especially with negative-looking inside expressions.
    {
      id: 'bpr-mis-power-before-bracket',
      description:
        'When I see (5 - 1)^2, I square first because the index looks more important than the small subtraction inside the bracket. So I write 5 - 1^2 = 5 - 1 = 4 instead of evaluating the bracket first.',
      triggerAnswer: 'power-before-bracket',
      correction:
        'Actually Brackets sit above Indices on the BIDMAS ladder. Settle the inside of the bracket before the power acts.',
      reExplanation:
        'For (5 - 1)^2, the bracket must be evaluated first: 5 - 1 = 4. Then the power: 4^2 = 16. Skipping straight to the index, as in 5 - 1^2 = 4, ignores the bracket entirely and gives the wrong answer. A bracket reaches above the Indices rung and forces its contents to settle before any power or root touches them.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const bidmasWithPowersRootsZoneNodes = [bidmasWithPowersRoots]
