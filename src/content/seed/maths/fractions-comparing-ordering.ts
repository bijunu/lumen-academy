import type { SkillNode } from '@/types/content'

export const fractionsComparingOrdering: SkillNode = {
  id: 'maths-fractions-comparing-ordering',
  title: 'Comparing and Ordering Fractions',
  description:
    'Compare two or more positive fractions and put a list of fractions in order from smallest to largest. Choose between four reliable methods: rewrite to a common denominator using the lowest common multiple, cross-multiply numerators and denominators to compare pairs, convert each fraction to a decimal, or compare to benchmark values such as 0, 1/2, and 1. Works for proper and improper fractions.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-fractions',
  zoneName: 'Fractions',
  tier: 'confident',
  prerequisites: ['maths-fractions-equivalent'],
  curriculum: {
    ks3Objective:
      'Use common multiples to express fractions in the same denomination; order positive and negative integers, decimals and fractions.',
    awardingBodies: {
      aqa: 'N1 Order positive and negative integers, decimals and fractions (GCSE Mathematics 8300)',
      edexcel: 'N1 Order positive and negative integers, decimals and fractions (GCSE Mathematics 1MA1)',
      ocr: '1.01a Order fractions including those with different denominators (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'fco-scene-fraction-wall',
      title: 'Stacking 3/4 Against 5/6',
      type: 'fraction-wall',
      instructions:
        'Click each bar to highlight it. The bar split into quarters shades 3 of 4 parts. The bar split into sixths shades 5 of 6 parts. Both bars share the same whole length. Line them up and the 5/6 bar sits ever so slightly longer, so 5/6 is greater than 3/4. The visual shows what the LCM method proves: rewrite both with denominator 12 and you get 9/12 versus 10/12.',
      data: {
        wholeLabel: 'Unit bar split for 3/4 and 5/6',
        bars: [
          {
            id: 'fco-bar-quarters',
            label: '3/4',
            denominator: 4,
            shadedParts: 3,
            colour: 'blue',
            equivalent: '9/12',
          },
          {
            id: 'fco-bar-sixths',
            label: '5/6',
            denominator: 6,
            shadedParts: 5,
            colour: 'red',
            equivalent: '10/12',
          },
        ],
        lcmDenominator: 12,
        result: '5/6 > 3/4 because 10/12 > 9/12',
        rule: 'Rewrite both fractions with the same denominator, then compare numerators.',
      },
    },
    {
      id: 'fco-scene-benchmarks',
      title: 'Benchmark Fractions on a Bar',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to reveal the benchmark and which fractions sit near it. Benchmarks at 0, 1/2, and 1 give a quick sense of size before any arithmetic. A fraction whose numerator is much smaller than its denominator sits near 0. A fraction whose numerator is roughly half the denominator sits near 1/2. A fraction whose numerator is close to the denominator sits near 1. Improper fractions sit above 1.',
      data: {
        viewBox: '0 0 600 200',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 200"><line x1="50" y1="100" x2="550" y2="100" stroke="#0f172a" stroke-width="2"/><line x1="50" y1="90" x2="50" y2="110" stroke="#0f172a" stroke-width="2"/><line x1="300" y1="90" x2="300" y2="110" stroke="#0f172a" stroke-width="2"/><line x1="550" y1="90" x2="550" y2="110" stroke="#0f172a" stroke-width="2"/><text x="50" y="135" text-anchor="middle" font-family="sans-serif" font-size="14">0</text><text x="300" y="135" text-anchor="middle" font-family="sans-serif" font-size="14">1/2</text><text x="550" y="135" text-anchor="middle" font-family="sans-serif" font-size="14">1</text></svg>',
        hotspots: [
          {
            id: 'fco-hot-near-zero',
            x: 16,
            y: 50,
            label: 'Near 0: 1/10, 2/9, 1/8',
            description: 'Small numerator and large denominator pull the fraction close to 0.',
          },
          {
            id: 'fco-hot-half',
            x: 50,
            y: 50,
            label: 'Near 1/2: 4/9, 5/11, 6/13',
            description: 'When the numerator is about half the denominator, the value sits near 1/2.',
          },
          {
            id: 'fco-hot-near-one',
            x: 84,
            y: 50,
            label: 'Near 1: 7/8, 9/10, 11/12',
            description: 'When the numerator is close to the denominator, the value sits just under 1.',
          },
        ],
      },
    },
    {
      id: 'fco-scene-lcm-method',
      title: 'Same Denominator, Same Yardstick',
      type: 'diagram',
      instructions:
        'Look at how the LCM method lines up the two fractions onto a single yardstick. To compare 2/3 and 3/5, find the lowest common multiple of 3 and 5, which is 15. Rewrite 2/3 as 10/15 by multiplying top and bottom by 5. Rewrite 3/5 as 9/15 by multiplying top and bottom by 3. Now the denominators match, so the numerators tell the story: 10/15 is greater than 9/15, so 2/3 is greater than 3/5. The same recipe works for any two positive fractions.',
      data: {
        leftFraction: { numerator: 2, denominator: 3, rewritten: '10/15' },
        rightFraction: { numerator: 3, denominator: 5, rewritten: '9/15' },
        lcm: 15,
        result: '2/3 > 3/5 because 10/15 > 9/15',
        rule: 'Once the denominators match, the larger numerator wins.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'fco-worked-1',
      title: 'Compare 3/4 and 5/6 by common denominator',
      steps: [
        {
          explanation: 'Identify the denominators of the two fractions to compare.',
          maths: 'denominators: 4 and 6',
        },
        {
          explanation: 'Find the lowest common multiple of 4 and 6 by listing multiples until they meet.',
          maths: 'multiples of 4: 4, 8, 12; multiples of 6: 6, 12; LCM = 12',
        },
        {
          explanation: 'Rewrite 3/4 with denominator 12. Multiply top and bottom by 3 because 4 x 3 = 12.',
          maths: '3/4 = (3 x 3) / (4 x 3) = 9/12',
        },
        {
          explanation: 'Rewrite 5/6 with denominator 12. Multiply top and bottom by 2 because 6 x 2 = 12.',
          maths: '5/6 = (5 x 2) / (6 x 2) = 10/12',
        },
        {
          explanation: 'Compare the numerators of the two new fractions. 10 is greater than 9.',
          maths: '10/12 > 9/12',
        },
        {
          explanation: 'So 5/6 is greater than 3/4.',
          maths: '5/6 > 3/4',
        },
      ],
    },
    {
      id: 'fco-worked-2',
      title: 'Order 2/3, 3/5, 7/10, 1/2 from smallest to largest',
      steps: [
        {
          explanation: 'Identify the denominators in the list of fractions to order.',
          maths: 'denominators: 3, 5, 10, 2',
        },
        {
          explanation: 'Find the lowest common multiple of 3, 5, 10, and 2. The LCM is 30.',
          maths: 'LCM(3, 5, 10, 2) = 30',
        },
        {
          explanation: 'Rewrite 2/3 with denominator 30. Multiply top and bottom by 10.',
          maths: '2/3 = 20/30',
        },
        {
          explanation: 'Rewrite 3/5 with denominator 30. Multiply top and bottom by 6.',
          maths: '3/5 = 18/30',
        },
        {
          explanation: 'Rewrite 7/10 with denominator 30. Multiply top and bottom by 3.',
        },
        {
          explanation: 'Rewrite 1/2 with denominator 30. Multiply top and bottom by 15.',
          maths: '1/2 = 15/30',
        },
        {
          explanation: 'Order the rewritten numerators from smallest to largest: 15, 18, 20, 21.',
          maths: '15/30 < 18/30 < 20/30 < 21/30',
        },
        {
          explanation: 'Translate the ordered list back to the original fractions.',
          maths: '1/2 < 3/5 < 2/3 < 7/10',
        },
      ],
    },
  ],
  questions: [
    // Core 1: same denominator, compare numerators
    {
      id: 'fco-q1',
      type: 'multiple-choice',
      stem: 'Which fraction is greater, 3/8 or 5/8?',
      tier: 'core',
      options: ['5/8', '3/8', 'they are equal', 'cannot tell'],
      correctIndex: 0,
      xpValue: 10,
      hint: 'The denominators are the same, so compare the numerators. 5 is greater than 3.',
    },
    // Core 2: same numerator, compare denominators (common pitfall direction)
    {
      id: 'fco-q2',
      type: 'multiple-choice',
      stem: 'Which fraction is greater, 3/5 or 3/8?',
      tier: 'core',
      options: ['3/8', 'they are equal', '3/5', 'cannot tell'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'fco-mis-bigger-denominator-bigger',
      hint: 'Both fractions have 3 parts. Fifths are bigger pieces than eighths, so 3 fifths is more than 3 eighths.',
    },
    // Core 3: numeric, smaller of two unit fractions
    {
      id: 'fco-q3',
      type: 'numeric-entry',
      stem: 'A pizza is split into 6 equal slices. Another identical pizza is split into 10 equal slices. How many slices of the second pizza match one slice of the first pizza? Give your answer to one decimal place.',
      tier: 'core',
      correctAnswer: 1.7,
      tolerance: 0.05,
      xpValue: 10,
      hint: 'One sixth equals 10/60 of the pizza, and one tenth equals 6/60. So 1/6 is 10/6 of one tenth, which is about 1.7 tenths.',
    },
    // Core 4: rewrite to common denominator (LCM is 12)
    {
      id: 'fco-q4',
      type: 'multiple-choice',
      stem: 'Which fraction is greater, 1/3 or 1/4?',
      tier: 'core',
      options: ['1/4', '1/12', 'they are equal', '1/3'],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'fco-mis-bigger-denominator-bigger',
      hint: 'Rewrite with denominator 12: 1/3 = 4/12 and 1/4 = 3/12. 4/12 is greater than 3/12.',
    },
    // Core 5: numeric, rewrite a fraction at given LCM
    {
      id: 'fco-q5',
      type: 'numeric-entry',
      stem: 'Rewrite 2/5 with denominator 20. Enter just the numerator.',
      tier: 'core',
      correctAnswer: 8,
      xpValue: 10,
      hint: '5 x 4 = 20, so multiply the top by 4 as well. 2 x 4 = 8.',
    },
    // Core 6: compare to benchmark 1/2
    {
      id: 'fco-q6',
      type: 'multiple-choice',
      stem: 'Which of these fractions is less than 1/2?',
      tier: 'core',
      options: ['4/7', '3/8', '5/9', '6/11'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'For 1/2, the numerator must be half the denominator. 8 / 2 = 4, so 4/8 is exactly 1/2. 3/8 is less.',
    },
    // Core 7: spot-misconception (just compare numerators)
    {
      id: 'fco-q7',
      type: 'spot-misconception',
      stem: 'Lila says 3/5 is greater than 3/4 because 5 is greater than 4 and the numerators are equal.',
      tier: 'core',
      statements: [
        {
          text: 'Lila is right. With matching numerators, the fraction with the larger denominator is the larger value.',
          isMisconception: true,
        },
        {
          text: 'Actually a larger denominator means smaller pieces, so 3/5 is less than 3/4. The whole is split into more parts in 3/5, and 3 of those smaller parts make a smaller total.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fco-mis-bigger-denominator-bigger',
    },
    // Confident 1: pick the larger from a "real" pair using LCM
    {
      id: 'fco-q8',
      type: 'multiple-choice',
      stem: 'Which fraction is greater, 5/6 or 7/9?',
      tier: 'confident',
      options: ['they are equal', 'cannot decide without a calculator', '5/6', '7/9'],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'fco-mis-just-compare-numerators',
      hint: 'LCM of 6 and 9 is 18. 5/6 = 15/18 and 7/9 = 14/18. So 5/6 is greater.',
    },
    // Confident 2: numeric, cross-multiplication answer
    {
      id: 'fco-q9',
      type: 'numeric-entry',
      stem: 'Use cross-multiplication on 4/7 and 5/9. Work out 4 x 9. Enter the result.',
      tier: 'confident',
      correctAnswer: 36,
      xpValue: 15,
      hint: 'Cross-multiply: top of the first times bottom of the second. 4 x 9 = 36. Compare with 5 x 7 = 35; since 36 > 35, 4/7 is greater than 5/9.',
    },
    // Confident 3: improper fraction comparison
    {
      id: 'fco-q10',
      type: 'multiple-choice',
      stem: 'Which is greater, 7/4 or 9/5?',
      tier: 'confident',
      options: ['7/4', 'they are equal', 'cannot tell', '9/5'],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'fco-mis-improper-always-larger',
      hint: 'LCM of 4 and 5 is 20. 7/4 = 35/20 and 9/5 = 36/20. So 9/5 is greater, by just 1/20.',
    },
    // Confident 4: missing-step in the LCM ordering procedure
    {
      id: 'fco-q11',
      type: 'missing-step',
      stem: 'Fill in the missing step. Salma is ordering 2/3, 5/6, and 3/4 from smallest to largest.',
      tier: 'confident',
      steps: [
        'Find the LCM of the denominators 3, 6, and 4. The LCM is 12.',
        'Rewrite 2/3 with denominator 12: 2/3 = 8/12.',
        null,
        'Rewrite 3/4 with denominator 12: 3/4 = 9/12. Compare numerators: 8 < 9 < 10. So 2/3 < 3/4 < 5/6.',
      ],
      missingStepIndex: 2,
      correctStep: 'Rewrite 5/6 with denominator 12: 5/6 = 10/12.',
      xpValue: 20,
      misconceptionId: 'fco-mis-rewrite-only-one',
    },
    // Confident 5: drag-order four fractions
    {
      id: 'fco-q12',
      type: 'drag-order',
      stem: 'Drag these fractions into order from smallest to largest.',
      tier: 'confident',
      items: ['2/3', '3/5', '7/10', '1/2'],
      correctOrder: [3, 1, 0, 2],
      xpValue: 20,
      hint: 'Rewrite all four with denominator 30: 2/3 = 20/30, 3/5 = 18/30, 7/10 = 21/30, 1/2 = 15/30. The order is 1/2, 3/5, 2/3, 7/10.',
    },
    // Confident 6: pizza fraction word problem
    {
      id: 'fco-q13',
      type: 'multiple-choice',
      stem: 'In a Year 7 lunch swap, Aisha eats 5/8 of her pizza and Jamie eats 2/3 of his identical pizza. Who has eaten more?',
      tier: 'confident',
      options: ['Jamie', 'they have eaten the same', 'Aisha', 'cannot decide'],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'fco-mis-bigger-numerator-bigger',
      hint: 'LCM of 8 and 3 is 24. 5/8 = 15/24 and 2/3 = 16/24. So Jamie has eaten more.',
    },
    // Confident 7: numeric, decimal-conversion method
    {
      id: 'fco-q14',
      type: 'numeric-entry',
      stem: 'Convert 7/8 to a decimal. Enter the value.',
      tier: 'confident',
      correctAnswer: 0.875,
      tolerance: 0.0005,
      xpValue: 15,
      misconceptionId: 'fco-mis-decimal-truncate',
      hint: '7 divided by 8 by short division gives 0.875. The decimal works as a yardstick for comparing fractions.',
    },
    // Confident 8: spot-misconception on cross-multiplication direction
    {
      id: 'fco-q15',
      type: 'spot-misconception',
      stem: 'Marcus compares 3/7 with 4/9 by cross-multiplying. He writes "3 x 9 = 27 (goes with the fraction on the right) and 4 x 7 = 28 (goes with the fraction on the left), so 4/7 is greater, meaning 4/9 is greater than 3/7".',
      tier: 'confident',
      statements: [
        {
          text: 'Marcus is right because the larger cross-product always sits beside the larger fraction.',
          isMisconception: true,
        },
        {
          text: 'Actually each cross-product belongs to the fraction whose numerator it started from. 3 x 9 = 27 belongs to 3/7, and 4 x 7 = 28 belongs to 4/9. So 4/9 > 3/7 is the right answer, but for the right reason.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fco-mis-cross-multiply-direction',
    },
    // Challenge 1: Bond-style word problem, mixed contexts
    {
      id: 'fco-q16',
      type: 'multiple-choice',
      stem: 'A Sevenoaks school netball team has won 17 of its 24 matches this season. The rival team in Tunbridge Wells has won 13 of its 18 matches. Which team has the better winning fraction?',
      tier: 'challenge',
      options: ['Tunbridge Wells', 'Sevenoaks', 'their records are identical', 'cannot decide without more data'],
      correctIndex: 1,
      xpValue: 25,
      hint: 'LCM of 24 and 18 is 72. 17/24 = 51/72 and 13/18 = 52/72. So Tunbridge Wells leads by 1/72, but check the numerator carefully. 17 x 3 = 51 and 13 x 4 = 52, so Tunbridge Wells edges it.',
    },
    // Challenge 2: numeric, four-fraction order; report the position of a specific fraction (1=smallest)
    {
      id: 'fco-q17',
      type: 'numeric-entry',
      stem: 'Order 5/12, 1/3, 3/8, 7/24 from smallest to largest. In the ordered list (smallest first), what position does 3/8 occupy? Enter a number from 1 to 4.',
      tier: 'challenge',
      correctAnswer: 3,
      xpValue: 25,
      hint: 'LCM of 12, 3, 8, 24 is 24. 5/12 = 10/24, 1/3 = 8/24, 3/8 = 9/24, 7/24 = 7/24. Sorted: 7/24, 8/24, 9/24, 10/24. So 3/8 is in position 3.',
    },
    // Challenge 3: word problem with mixed fractions and decimals
    {
      id: 'fco-q18',
      type: 'multiple-choice',
      stem: 'A recipe for shortbread asks for 0.6 of a 250 g block of butter. A second recipe asks for 3/5 of the same block, and a third asks for 7/12 of the block. Order the recipes from the one that uses the most butter to the one that uses the least.',
      tier: 'challenge',
      options: [
        'second, third, first',
        'third, first, second',
        'first, second, third',
        'first and second tied, then third',
      ],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'fco-mis-decimal-truncate',
      hint: 'Convert to a single form. 0.6 = 6/10 = 3/5, so the first and second recipes are tied. Compare 3/5 with 7/12: LCM 60 gives 36/60 and 35/60. So 3/5 (and 0.6) is greater than 7/12.',
    },
    // Challenge 4: improper fractions with mixed numbers
    {
      id: 'fco-q19',
      type: 'numeric-entry',
      stem: 'On a long-jump training day, Mia jumps 2 3/4 metres, Sam jumps 11/4 metres, and Owen jumps 9/4 metres. Express the longest jump as a decimal in metres.',
      tier: 'challenge',
      correctAnswer: 2.75,
      tolerance: 0.001,
      unit: 'm',
      xpValue: 25,
      misconceptionId: 'fco-mis-improper-always-larger',
      hint: 'Convert each to a common form. 2 3/4 = 11/4, so Mia and Sam tie. 9/4 = 2.25. Mia and Sam share the longest jump at 11/4 = 2.75 metres.',
    },
    // Challenge 5: Bond-style, ratio-shaped framing
    {
      id: 'fco-q20',
      type: 'numeric-entry',
      stem: 'In a Dover Year 7 class survey, 7 of 16 pupils walk to school. In a Manchester Year 7 class, 9 of 20 pupils walk. In which class does a larger fraction of pupils walk to school? Enter 16 for Dover or 20 for Manchester.',
      tier: 'challenge',
      correctAnswer: 20,
      xpValue: 25,
      hint: 'LCM of 16 and 20 is 80. 7/16 = 35/80 and 9/20 = 36/80. So the Manchester class has a larger walking fraction.',
    },
    // Challenge 6: missing-step in a benchmark-and-LCM hybrid
    {
      id: 'fco-q21',
      type: 'missing-step',
      stem: 'Fill in the missing step. Priya is checking whether 5/11 or 6/13 is greater.',
      tier: 'challenge',
      steps: [
        'Both fractions are near 1/2 because each numerator is just under half the denominator.',
        'Cross-multiply to compare. The first cross-product is 5 x 13 = 65, belonging to 5/11.',
        null,
        'Compare the cross-products: 65 is less than 66, so 5/11 is less than 6/13. The fraction 6/13 is greater.',
      ],
      missingStepIndex: 2,
      correctStep: 'The second cross-product is 6 x 11 = 66, belonging to 6/13.',
      xpValue: 25,
      misconceptionId: 'fco-mis-cross-multiply-direction',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2019, Paper 1F (Foundation, Non-calculator), commentary on a fraction-ordering question where pupils chose the fraction with the larger denominator when numerators were equal.
    {
      id: 'fco-mis-bigger-denominator-bigger',
      description:
        'When fractions have the same numerator I pick the one with the bigger denominator as the larger fraction, so I think 3/8 is greater than 3/4.',
      triggerAnswer: 'bigger-denominator-bigger',
      correction:
        'Actually a bigger denominator means more (and smaller) pieces, so the same number of those smaller pieces makes a smaller total.',
      reExplanation:
        'Picture two identical chocolate bars. Cut one into 4 pieces and shade 3 of them. Cut the other into 8 pieces and shade 3 of them. The 3 quarters cover more bar than 3 eighths, so 3/4 > 3/8. The same logic gives 1/3 > 1/4 and 5/9 > 5/12. When numerators match, the smaller denominator wins.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Comparing Fractions" page, "Common mistake" callout warning that pupils compare numerators only and ignore the denominators.
    {
      id: 'fco-mis-just-compare-numerators',
      description:
        'When fractions have different denominators I just compare the numerators, so I think 3/5 is greater than 7/10 because 3 has the bigger numerator on the left.',
      triggerAnswer: 'just-compare-numerators',
      correction:
        'In fact you must rewrite the fractions with the same denominator (or convert to decimals) before comparing.',
      reExplanation:
        'For 3/5 and 7/10, find the LCM of 5 and 10, which is 10. Rewrite 3/5 = 6/10. Compare 6/10 with 7/10: now the denominators match, so 7/10 is greater. Comparing 3 with 7 directly ignores the size of each piece. Always line up the denominators first.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 1F (Foundation, Non-calculator), commentary on a comparison question where pupils set up cross-products but assigned each product to the wrong fraction.
    {
      id: 'fco-mis-cross-multiply-direction',
      description:
        'When I cross-multiply two fractions to compare them I attach each product to the wrong fraction, so I read the result the wrong way round.',
      triggerAnswer: 'cross-multiply-direction',
      correction:
        'Actually each cross-product belongs to the fraction whose numerator it began with. The numerator carries the product up.',
      reExplanation:
        'For 3/7 and 4/9, cross-multiply: 3 x 9 = 27 belongs to 3/7 (the 3 came from there), and 4 x 7 = 28 belongs to 4/9 (the 4 came from there). The larger product flags the larger fraction, so 28 > 27 gives 4/9 > 3/7. Pair each product with its source fraction every time.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 5 "Fractions" by Hart, on pupils converting fractions to decimals by truncating after one or two digits and so missing close comparisons.
    {
      id: 'fco-mis-decimal-truncate',
      description:
        'When I convert fractions to decimals I stop after one or two digits, so I think 7/12 is 0.58 and call it equal to 0.6.',
      triggerAnswer: 'decimal-truncate',
      correction:
        'In fact you need enough decimal places to make the comparison safe. Two close values may differ only in later digits.',
      reExplanation:
        'For 7/12, divide 7 by 12 carefully: 0.5833... Compare with 0.6 (which is 6/10). To three decimal places, 7/12 = 0.583, which is less than 0.600, so 7/12 < 0.6. Truncating to 0.58 makes the result look closer than it really is. When two decimals share early digits, keep dividing until they differ.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2022, Paper 01 (Foundation, Non-calculator), commentary on a fraction-comparison question where pupils assumed any improper fraction must be larger than any proper fraction without checking values.
    {
      id: 'fco-mis-improper-always-larger',
      description:
        'I think any improper fraction must be larger than any proper fraction, so 9/5 must be much greater than 7/4 just because the numerator is bigger.',
      triggerAnswer: 'improper-always-larger',
      correction:
        'In fact both improper fractions sit above 1, but their sizes still depend on the numerator-to-denominator ratio.',
      reExplanation:
        'For 7/4 and 9/5, rewrite with denominator 20: 7/4 = 35/20 and 9/5 = 36/20. They are nearly equal: 9/5 wins by just 1/20. Improper fractions can be close to each other and to whole numbers. Always rewrite or convert to decimals before declaring one larger.',
    },
    // Source: NCETM Secondary Magazine, Issue 137, "From the Library" article on common errors when ordering several fractions, including the slip of rewriting only one fraction with the common denominator and leaving the others in their original form.
    {
      id: 'fco-mis-rewrite-only-one',
      description:
        'When ordering several fractions I rewrite only one of them with the common denominator and leave the others in their original form, so I end up comparing 6/12 with 2/3 directly.',
      triggerAnswer: 'rewrite-only-one',
      correction:
        'Actually every fraction in the list must be rewritten with the common denominator before comparing numerators.',
      reExplanation:
        'For 1/2, 2/3, 5/6 with common denominator 6: 1/2 = 3/6, 2/3 = 4/6, 5/6 stays as 5/6. Now compare the numerators: 3, 4, 5. The order is 1/2 < 2/3 < 5/6. Leaving 2/3 in its original form means the denominators no longer match, so a numerator comparison no longer means anything.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a benchmark-style comparison item where pupils used "bigger numerator" as the only cue rather than checking against 1/2 or 1.
    {
      id: 'fco-mis-bigger-numerator-bigger',
      description:
        'I think the fraction with the larger numerator is always larger, so I pick 5/9 over 3/4 because 5 is bigger than 3.',
      triggerAnswer: 'bigger-numerator-bigger',
      correction:
        'In fact the numerator on its own says nothing without the denominator. Compare the fractions to a benchmark, or rewrite them with a common denominator.',
      reExplanation:
        'For 5/9 and 3/4, use a benchmark of 1/2. 5/9 is just above 1/2 (since 4.5/9 = 1/2). 3/4 sits well above 1/2 because three-quarters is much more than a half. So 3/4 > 5/9. The LCM method confirms: LCM of 9 and 4 is 36, so 5/9 = 20/36 and 3/4 = 27/36.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const fractionsComparingOrderingZoneNodes = [fractionsComparingOrdering]
