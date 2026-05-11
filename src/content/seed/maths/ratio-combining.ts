import type { SkillNode } from '@/types/content'

export const ratioCombining: SkillNode = {
  id: 'maths-ratio-combining',
  title: 'Combining Two Ratios',
  description:
    'Combine two ratios that share a common quantity into a single three-part ratio. Identify the shared term, find the lowest common multiple of its two values, scale each ratio so the shared term matches the LCM, then write the combined three-part ratio. Apply to UK contexts: mixing paint colours, layering recipes, year-group cohort splits, and multi-leg journey distances.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-ratio',
  zoneName: 'Ratio and Proportion',
  tier: 'confident',
  prerequisites: ['maths-ratio-sharing'],
  curriculum: {
    ks3Objective:
      'Use ratio notation, including reduction to simplest form; relate ratios.',
    awardingBodies: {
      aqa: 'R6 Combine two related ratios to find a third ratio (GCSE Mathematics 8300)',
      edexcel: 'R6 Express ratios in 1:n form and combine ratios (GCSE Mathematics 1MA1)',
      ocr: '6.01c Combine ratios where a common quantity is given (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'rc-scene-two-strips',
      title: 'Two Ratio Strips Lined Up',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to reveal a share. The top strip shows A:B = 2:3. The middle strip shows B:C = 4:5. The shared quantity is B, but the two strips disagree on how many parts B is worth. The bottom strip shows the combined three-part ratio A:B:C = 8:12:15 once both ratios have been scaled so B matches.',
      data: {
        viewBox: '0 0 600 400',
        svg: '<g><rect x="40" y="40" width="120" height="50" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/><rect x="160" y="40" width="180" height="50" fill="#fde68a" stroke="#92400e" stroke-width="2"/><text x="100" y="72" text-anchor="middle" font-size="18" fill="#1e3a8a">A=2</text><text x="250" y="72" text-anchor="middle" font-size="18" fill="#92400e">B=3</text><rect x="40" y="160" width="120" height="50" fill="#fde68a" stroke="#92400e" stroke-width="2"/><rect x="160" y="160" width="150" height="50" fill="#bbf7d0" stroke="#166534" stroke-width="2"/><text x="100" y="192" text-anchor="middle" font-size="18" fill="#92400e">B=4</text><text x="235" y="192" text-anchor="middle" font-size="18" fill="#166534">C=5</text><rect x="40" y="280" width="80" height="60" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/><rect x="120" y="280" width="120" height="60" fill="#fde68a" stroke="#92400e" stroke-width="2"/><rect x="240" y="280" width="150" height="60" fill="#bbf7d0" stroke="#166534" stroke-width="2"/><text x="80" y="316" text-anchor="middle" font-size="18" fill="#1e3a8a">A=8</text><text x="180" y="316" text-anchor="middle" font-size="18" fill="#92400e">B=12</text><text x="315" y="316" text-anchor="middle" font-size="18" fill="#166534">C=15</text></g>',
        hotspots: [
          {
            id: 'rc-hot-top-a',
            x: 17,
            y: 16,
            label: 'A:B = 2:3 (top strip)',
            description:
              'B in the first ratio is worth 3 parts.',
          },
          {
            id: 'rc-hot-top-b',
            x: 42,
            y: 16,
            label: 'B in the top strip',
            description:
              'Same quantity B, but worth 3 parts here.',
          },
          {
            id: 'rc-hot-mid-b',
            x: 17,
            y: 46,
            label: 'B in the middle strip',
            description:
              'Same quantity B, but worth 4 parts here.',
          },
          {
            id: 'rc-hot-mid-c',
            x: 39,
            y: 46,
            label: 'B:C = 4:5 (middle strip)',
            description:
              'C is worth 5 parts when B is worth 4.',
          },
          {
            id: 'rc-hot-combined-a',
            x: 13,
            y: 78,
            label: 'A = 8 (combined)',
            description:
              'A scaled up so B matches the LCM of 3 and 4, which is 12.',
          },
          {
            id: 'rc-hot-combined-b',
            x: 30,
            y: 78,
            label: 'B = 12 (combined)',
            description:
              'B is now 12 in both ratios; the shared term matches.',
          },
          {
            id: 'rc-hot-combined-c',
            x: 52,
            y: 78,
            label: 'C = 15 (combined)',
            description:
              'C scaled up by the same factor as B in its ratio.',
          },
        ],
      },
    },
    {
      id: 'rc-scene-lcm-wall',
      title: 'Scaling Up to the Shared LCM',
      type: 'fraction-wall',
      instructions:
        'Click each bar to highlight it. The top bar shows the first ratio A:B = 2:3, scaled by 4 so B becomes 12. The bottom bar shows the second ratio B:C = 4:5, scaled by 3 so B also becomes 12. The lowest common multiple of 3 and 4 is 12, which is the smallest number that lets both bars share the same B-block size.',
      data: {
        wholeLabel: 'A:B = 2:3 and B:C = 4:5 scaled to a shared B = 12',
        topLeftValues: { sharedTerm: 'B', firstRatio: '2:3', scaleFactor: 4 },
        bottomLeftValues: { sharedTerm: 'B', secondRatio: '4:5', scaleFactor: 3 },
        sharedB: 12,
        lcmOfSharedTerms: 12,
        parts: [
          { id: 'rc-w1', share: 'A-block', value: 1, colour: 'blue' },
          { id: 'rc-w2', share: 'A-block', value: 1, colour: 'blue' },
          { id: 'rc-w3', share: 'A-block', value: 1, colour: 'blue' },
          { id: 'rc-w4', share: 'A-block', value: 1, colour: 'blue' },
          { id: 'rc-w5', share: 'A-block', value: 1, colour: 'blue' },
          { id: 'rc-w6', share: 'A-block', value: 1, colour: 'blue' },
          { id: 'rc-w7', share: 'A-block', value: 1, colour: 'blue' },
          { id: 'rc-w8', share: 'A-block', value: 1, colour: 'blue' },
          { id: 'rc-w9', share: 'B-block', value: 1, colour: 'orange' },
          { id: 'rc-w10', share: 'B-block', value: 1, colour: 'orange' },
          { id: 'rc-w11', share: 'B-block', value: 1, colour: 'orange' },
          { id: 'rc-w12', share: 'B-block', value: 1, colour: 'orange' },
          { id: 'rc-w13', share: 'C-block', value: 1, colour: 'green' },
          { id: 'rc-w14', share: 'C-block', value: 1, colour: 'green' },
          { id: 'rc-w15', share: 'C-block', value: 1, colour: 'green' },
        ],
        combinedRatio: 'A:B:C = 8:12:15',
        check: 'B is 12 in both scaled ratios, so the two ratios now line up.',
      },
    },
    {
      id: 'rc-scene-four-step-recipe',
      title: 'The Four-Step Recipe',
      type: 'diagram',
      instructions:
        'Four steps turn two related ratios into one combined ratio. The first step is the shared term that appears in both ratios. The second step is the lowest common multiple of the two values the shared term takes. The third step is each ratio scaled so the shared term lands on that LCM. The fourth step is the combined three-part ratio, with the shared term written once in the middle.',
      data: {
        worked: {
          firstRatio: 'A:B = 2:3',
          secondRatio: 'B:C = 4:5',
          sharedTerm: 'B',
          sharedValues: [3, 4],
          lcm: 12,
          scaleFirstBy: 4,
          scaleSecondBy: 3,
          firstScaled: 'A:B = 8:12',
          secondScaled: 'B:C = 12:15',
          combined: 'A:B:C = 8:12:15',
        },
        steps: [
          { id: 'rc-step-1', title: 'Spot the shared term', detail: 'B appears in both ratios.' },
          { id: 'rc-step-2', title: 'Find the LCM', detail: 'LCM of 3 and 4 is 12.' },
          { id: 'rc-step-3', title: 'Scale each ratio', detail: 'Multiply the first by 4, the second by 3.' },
          { id: 'rc-step-4', title: 'Combine', detail: 'Write A:B:C with the shared term in the middle.' },
        ],
        rule: 'The shared term appears once in the middle of the combined ratio, not twice.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'rc-worked-1',
      title: 'Combine A:B = 2:3 and B:C = 4:5 into one ratio A:B:C',
      steps: [
        {
          explanation:
            'Spot the shared term. B is in both ratios. B is 3 in the first ratio and 4 in the second.',
          maths: 'shared term: B (values 3 and 4)',
        },
        {
          explanation:
            'Find the lowest common multiple of the two values the shared term takes.',
          maths: 'LCM(3, 4) = 12',
        },
        {
          explanation:
            'Scale the first ratio so B becomes 12. Multiply both numbers by 4.',
          maths: 'A:B = 2:3 becomes 8:12',
        },
        {
          explanation:
            'Scale the second ratio so B also becomes 12. Multiply both numbers by 3.',
          maths: 'B:C = 4:5 becomes 12:15',
        },
        {
          explanation:
            'Combine the two scaled ratios, writing the shared term once in the middle.',
          maths: 'A:B:C = 8:12:15',
        },
        {
          explanation: 'So combining 2:3 with 4:5 through the shared term B gives the three-part ratio 8:12:15.',
          maths: 'final: A:B:C = 8:12:15',
        },
      ],
    },
    {
      id: 'rc-worked-2',
      title: 'Combine red:white = 3:2 with white:blue = 4:5 for a paint mix (missing step revealed)',
      steps: [
        {
          explanation:
            'Spot the shared term. White is in both ratios, with values 2 and 4.',
          maths: 'shared term: white (values 2 and 4)',
        },
        {
          explanation:
            'Find the lowest common multiple of the two shared values.',
          maths: 'LCM(2, 4) = 4',
        },
        {
          explanation:
            'Scale the first ratio so white becomes 4. Multiply both numbers by 2.',
        },
        {
          explanation:
            'The second ratio already has white = 4, so no scaling is needed.',
          maths: 'white:blue = 4:5 stays as 4:5',
        },
        {
          explanation:
            'Combine, writing white once in the middle.',
          maths: 'red:white:blue = 6:4:5',
        },
        {
          explanation: 'So the three-colour paint mix uses red, white, and blue in the ratio 6:4:5.',
          maths: 'final: red:white:blue = 6:4:5',
        },
      ],
    },
  ],
  questions: [
    // Core 1: spot the shared term
    {
      id: 'rc-q1',
      type: 'multiple-choice',
      stem: 'A:B = 2:5 and B:C = 3:4. Which quantity is the shared term between the two ratios?',
      tier: 'core',
      options: ['A', 'B', 'C', 'None of the quantities is shared'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'rc-mis-shared-outside-ratio',
      hint: 'Look for the letter that appears in both ratios. B is in A:B and in B:C.',
    },
    // Core 2: numeric LCM
    {
      id: 'rc-q2',
      type: 'numeric-entry',
      stem: 'The shared term takes the values 3 and 4 in two ratios. What is the lowest common multiple of 3 and 4?',
      tier: 'core',
      correctAnswer: 12,
      xpValue: 10,
      hint: 'Multiples of 3: 3, 6, 9, 12. Multiples of 4: 4, 8, 12. The first match is 12.',
    },
    // Core 3: numeric LCM with simple pair
    {
      id: 'rc-q3',
      type: 'numeric-entry',
      stem: 'The shared term takes the values 2 and 6 in two ratios. What is the lowest common multiple of 2 and 6?',
      tier: 'core',
      correctAnswer: 6,
      xpValue: 10,
      misconceptionId: 'rc-mis-use-smaller-of-shared',
      hint: 'Multiples of 2: 2, 4, 6. Multiples of 6: 6, 12. The first match is 6.',
    },
    // Core 4: scale the first ratio
    {
      id: 'rc-q4',
      type: 'multiple-choice',
      stem: 'A:B = 1:2. You want to scale this so B becomes 6. What is the scaled ratio?',
      tier: 'core',
      options: ['1:6', '3:6', '3:12', '6:6'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'B goes from 2 to 6, so multiply both numbers by 3. A:B = 3:6.',
    },
    // Core 5: scale the second ratio
    {
      id: 'rc-q5',
      type: 'multiple-choice',
      stem: 'B:C = 3:7. You want to scale this so B becomes 12. What is the scaled ratio?',
      tier: 'core',
      options: ['12:7', '12:21', '12:28', '4:7'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'B goes from 3 to 12, so multiply both numbers by 4. B:C = 12:28.',
    },
    // Core 6: combine when one ratio already matches
    {
      id: 'rc-q6',
      type: 'multiple-choice',
      stem: 'After scaling, A:B = 6:4 and B:C = 4:5. Write the combined three-part ratio A:B:C.',
      tier: 'core',
      options: ['6:4:4:5', '6:8:5', '6:4:5', '10:4:5'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'rc-mis-shared-term-twice',
      hint: 'Write the shared term B once in the middle. A is 6, B is 4, C is 5.',
    },
    // Core 7: identify the C value when no scaling is needed
    {
      id: 'rc-q7',
      type: 'multiple-choice',
      stem: 'A:B = 2:3 and B:C = 3:5. Both ratios already have B = 3. What is the combined ratio A:B:C?',
      tier: 'core',
      options: ['2:3:5', '2:6:5', '5:3:2', '6:3:5'],
      correctIndex: 0,
      xpValue: 10,
      hint: 'B already matches at 3 in both, so no scaling is needed. Combine: A:B:C = 2:3:5.',
    },
    // Core 8: spot-misconception, adding ratios directly
    {
      id: 'rc-q8',
      type: 'spot-misconception',
      stem: 'Liam has A:B = 2:3 and B:C = 4:5. He writes the combined ratio as A:B:C = 6:8:5 by adding the first two ratio numbers.',
      tier: 'core',
      statements: [
        {
          text: 'Liam is right. To combine 2:3 and 4:5 you add the two ratios together.',
          isMisconception: true,
        },
        {
          text: 'In fact you scale each ratio so the shared term B matches, then write the combined ratio. LCM of 3 and 4 is 12. Scaled: 8:12 and 12:15. Combined: 8:12:15.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'rc-mis-add-ratios-directly',
    },
    // Confident 1: full combine, classic example
    {
      id: 'rc-q9',
      type: 'multiple-choice',
      stem: 'A:B = 2:3 and B:C = 4:5. What is the combined ratio A:B:C in its simplest form?',
      tier: 'confident',
      options: ['6:7:5', '8:12:15', '2:3:5', '2:7:5'],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'rc-mis-add-ratios-directly',
      hint: 'Shared term B has values 3 and 4. LCM = 12. Scale first by 4: 8:12. Scale second by 3: 12:15. Combine: 8:12:15.',
    },
    // Confident 2: paint mix
    {
      id: 'rc-q10',
      type: 'multiple-choice',
      stem: 'A paint mix uses red:white = 3:2 and white:blue = 4:5. What is the combined ratio red:white:blue?',
      tier: 'confident',
      options: ['3:2:5', '3:4:5', '6:4:5', '6:8:5'],
      correctIndex: 2,
      xpValue: 15,
      hint: 'Shared term white has values 2 and 4. LCM = 4. Scale first by 2: red:white = 6:4. Second stays at 4:5. Combine: 6:4:5.',
    },
    // Confident 3: numeric, scale factor of one ratio
    {
      id: 'rc-q11',
      type: 'numeric-entry',
      stem: 'A:B = 5:6 and B:C = 4:7. To combine these, what is the smallest value you should scale B up to?',
      tier: 'confident',
      correctAnswer: 12,
      xpValue: 15,
      misconceptionId: 'rc-mis-use-smaller-of-shared',
      hint: 'B currently takes the values 6 and 4. LCM of 6 and 4 is 12.',
    },
    // Confident 4: scale the second ratio only
    {
      id: 'rc-q12',
      type: 'multiple-choice',
      stem: 'A:B = 1:4 and B:C = 2:3. The first ratio already has B = 4. What is the combined ratio A:B:C?',
      tier: 'confident',
      options: ['1:4:3', '1:4:6', '2:4:3', '2:8:6'],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'rc-mis-scale-only-one-ratio',
      hint: 'Keep the first ratio as A:B = 1:4. Scale the second by 2 so B = 4: B:C = 4:6. Combined: 1:4:6.',
    },
    // Confident 5: drag-order the four steps
    {
      id: 'rc-q13',
      type: 'drag-order',
      stem: 'Drag the four steps into the right order to combine two related ratios into one three-part ratio.',
      tier: 'confident',
      items: [
        'Scale each ratio so the shared term equals the LCM.',
        'Spot the shared term that appears in both ratios.',
        'Write the combined three-part ratio with the shared term in the middle.',
        'Find the lowest common multiple of the two shared values.',
      ],
      correctOrder: [1, 3, 0, 2],
      xpValue: 20,
      hint: 'First spot, then find LCM, then scale, then combine. The shared term appears once, in the middle of the combined ratio.',
    },
    // Confident 6: cohort split with three year groups
    {
      id: 'rc-q14',
      type: 'numeric-entry',
      stem: 'In a Sevenoaks school, the ratio of Year 7 to Year 8 pupils is 3:4 and the ratio of Year 8 to Year 9 pupils is 2:3. In the combined ratio Year 7:Year 8:Year 9, what is the value of Year 9?',
      tier: 'confident',
      correctAnswer: 6,
      xpValue: 15,
      hint: 'Shared term Year 8 takes values 4 and 2. LCM = 4. Second ratio scales by 2: Year 8:Year 9 = 4:6. Combined: 3:4:6, so Year 9 is 6.',
    },
    // Confident 7: missing-step in a worked combine
    {
      id: 'rc-q15',
      type: 'missing-step',
      stem: 'Fill in the missing step. Combine cordial:water = 1:4 and water:lemonade = 3:1 into one three-part ratio cordial:water:lemonade.',
      tier: 'confident',
      steps: [
        'Shared term: water, with values 4 (first ratio) and 3 (second ratio).',
        'LCM(4, 3) = 12. Scale each ratio so water becomes 12.',
        null,
        'Write the combined ratio with water once in the middle: cordial:water:lemonade = 3:12:4.',
      ],
      missingStepIndex: 2,
      correctStep: 'Scale the first by 3: cordial:water = 3:12. Scale the second by 4: water:lemonade = 12:4.',
      xpValue: 20,
      misconceptionId: 'rc-mis-scale-only-one-ratio',
    },
    // Confident 8: slider-explore on the scale factor
    {
      id: 'rc-q16',
      type: 'slider-explore',
      stem: 'A:B = 2:5 and B:C = 6:7. Slide to choose a scale factor for the first ratio so that B in the first ratio matches B in the second. What scale factor is needed?',
      tier: 'confident',
      min: 1,
      max: 10,
      step: 1,
      correctRange: [6, 6],
      label: 'Scale factor for the first ratio',
      xpValue: 15,
      hint: 'B in the first ratio is 5; you want it to reach 6 (to match) but a single integer step is needed. The integer scale factor that makes B match the LCM of 5 and 6, which is 30, is 6.',
    },
    // Challenge 1: Bond-style cordial / water / fizz word problem
    {
      id: 'rc-q17',
      type: 'numeric-entry',
      stem: 'Two recipes call for cordial:water in the ratio 1:4 and water:fizz in the ratio 3:1. To make a single combined recipe, the chef writes cordial:water:fizz. If she uses 12 ml of fizz, how many millilitres of cordial does she need?',
      tier: 'challenge',
      correctAnswer: 9,
      unit: 'millilitres',
      xpValue: 25,
      hint: 'Combine first: LCM of 4 and 3 is 12. Scaled ratios: cordial:water = 3:12 and water:fizz = 12:4. So cordial:water:fizz = 3:12:4. Fizz of 12 ml means each part = 12 / 4 = 3 ml. Cordial = 3 x 3 = 9 ml.',
    },
    // Challenge 2: three-leg journey
    {
      id: 'rc-q18',
      type: 'multiple-choice',
      stem: 'A three-leg journey runs Sevenoaks to London and then London to Manchester. The ratio of Sevenoaks-to-London distance to London-to-Manchester distance is 1:6. A separate map gives London-to-Manchester to Manchester-to-Glasgow as 3:2. The total journey from Sevenoaks to Glasgow is 396 km. How many kilometres is the London-to-Manchester leg?',
      tier: 'challenge',
      options: ['216 km', '198 km', '66 km', '264 km'],
      correctIndex: 0,
      xpValue: 25,
      hint: 'Shared term is London-to-Manchester, with values 6 and 3. LCM = 6. Second ratio scales by 2: 6:4. Combined ratio S-L : L-M : M-G = 1:6:4, so 11 parts. 396 / 11 = 36 km per part. L-M = 6 x 36 = 216 km.',
    },
    // Challenge 3: GBP money split with a combined ratio
    {
      id: 'rc-q19',
      type: 'numeric-entry',
      stem: 'A Dover charity divides a £180 donation between three projects. The ratio of A to B is 2:3, and the ratio of B to C is 6:5. How many pounds does project C receive?',
      tier: 'challenge',
      correctAnswer: 60,
      unit: 'pounds',
      xpValue: 25,
      misconceptionId: 'rc-mis-shared-different-values',
      hint: 'Shared term B has values 3 and 6. LCM = 6. First ratio scales by 2: A:B = 4:6. Combined A:B:C = 4:6:5, total parts = 15. £180 / 15 = £12 per part. C = 5 x £12 = £60.',
    },
    // Challenge 4: three-ingredient baking
    {
      id: 'rc-q20',
      type: 'multiple-choice',
      stem: 'A Tunbridge Wells bakery uses flour:butter = 5:2 and butter:sugar = 4:3 for shortbread. The combined recipe for flour:butter:sugar is written as a single three-part ratio. The bakery makes a batch using 30 grams of sugar. How many grams of flour does the batch use?',
      tier: 'challenge',
      options: ['40 g', '80 g', '120 g', '100 g'],
      correctIndex: 3,
      xpValue: 25,
      hint: 'Shared term butter has values 2 and 4. LCM = 4. First ratio scales by 2: flour:butter = 10:4. Combined flour:butter:sugar = 10:4:3. Sugar at 30 g means each part = 10 g. Flour = 10 x 10 = 100 g.',
    },
    // Challenge 5: wrong-order trap
    {
      id: 'rc-q21',
      type: 'spot-misconception',
      stem: 'Maya combines A:B = 2:3 and B:C = 4:5 into the single ratio A:B:C. She writes A:B:C = 15:12:8.',
      tier: 'challenge',
      statements: [
        {
          text: 'Maya is right. She found the LCM 12 for B and listed the three values 15, 12 and 8, which are the scaled ratio numbers.',
          isMisconception: true,
        },
        {
          text: 'In fact her three numbers come from the scaling work but she has written them in the wrong order. A = 8 (from A:B = 2:3 scaled by 4), B = 12, C = 15 (from B:C = 4:5 scaled by 3). The combined ratio is A:B:C = 8:12:15, not 15:12:8.',
          isMisconception: false,
        },
      ],
      xpValue: 25,
      misconceptionId: 'rc-mis-wrong-order',
    },
    // Challenge 6: a Bond-style multi-step with unstated step
    {
      id: 'rc-q22',
      type: 'numeric-entry',
      stem: 'A Lake District youth choir splits members by age. The ratio of juniors to seniors is 4:5, and the ratio of seniors to leaders is 10:1. The choir has 38 leaders. How many juniors are there?',
      tier: 'challenge',
      correctAnswer: 304,
      unit: 'juniors',
      xpValue: 25,
      hint: 'Shared term is seniors, with values 5 and 10. LCM = 10. First ratio scales by 2: juniors:seniors = 8:10. Combined j:s:l = 8:10:1. Leaders 38 means each part = 38. Juniors = 8 x 38 = 304.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a "combine two ratios" question where pupils added the corresponding numbers in each ratio rather than scaling them to share a common middle term.
    {
      id: 'rc-mis-add-ratios-directly',
      description:
        'I combine two ratios like A:B = 2:3 and B:C = 4:5 by adding the matching numbers, giving A:B:C = 6:8:5 (or similar), instead of scaling each ratio so the shared term matches.',
      triggerAnswer: 'add-ratios-directly',
      correction:
        'Actually combining ratios needs the shared term to match in both ratios first. You scale each ratio, then write the combined three-part ratio.',
      reExplanation:
        'For A:B = 2:3 and B:C = 4:5, the shared term B is 3 in the first ratio and 4 in the second. LCM of 3 and 4 is 12. Scale the first by 4 to get A:B = 8:12. Scale the second by 3 to get B:C = 12:15. Now B matches at 12 in both, so the combined ratio is A:B:C = 8:12:15, not 6:8:5.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 1F (Foundation, Non-calculator), commentary on a ratio-combination question where pupils left the shared term with two different values, e.g. wrote A:B:C as 2:3:4:5.
    {
      id: 'rc-mis-shared-different-values',
      description:
        'When combining A:B and B:C I leave the shared term B at two different values, writing the combined "ratio" as 2:3:4:5 (four numbers) instead of three.',
      triggerAnswer: 'shared-different-values',
      correction:
        'In fact a combined ratio has three numbers, not four. The shared term must match in both ratios before you write the combined ratio.',
      reExplanation:
        'For A:B = 2:3 and B:C = 4:5, you cannot just stick the four numbers together as 2:3:4:5; that ratio has B equal to two different values (3 and 4) at the same time, which is impossible. Scale until B agrees: 8:12 and 12:15. The combined ratio A:B:C = 8:12:15 has exactly three numbers, with B in the middle.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 02 (Foundation, Calculator), commentary on a "combine ratios" question where pupils treated the shared term as a separate quantity outside the ratio rather than as one of the three parts of the combined ratio.
    {
      id: 'rc-mis-shared-outside-ratio',
      description:
        'I treat the shared term as something outside the ratio (a context word) rather than as one of the three parts in the combined three-part ratio.',
      triggerAnswer: 'shared-outside-ratio',
      correction:
        'Actually the shared term is the linking quantity AND one of the three parts of the combined ratio; it sits in the middle of A:B:C.',
      reExplanation:
        'For A:B = 2:3 and B:C = 4:5, the shared term B is what lets the two ratios link, but B is also a real quantity in the combined ratio. After scaling, the combined ratio A:B:C = 8:12:15 has B = 12 in the middle. Dropping B and writing A:C = 8:15 (or just 2:5) ignores the quantity B entirely, which is not what the question is asking.',
    },
    // Source: NCETM Secondary Magazine, Issue 124, "From the Library" article on ratio reasoning, citing pupil work where only one of two ratios was scaled when combining, leaving a mismatch on the shared term.
    {
      id: 'rc-mis-scale-only-one-ratio',
      description:
        'I scale only one of the two ratios (often the first) so the shared term takes a target value, but I forget to scale the other ratio as well.',
      triggerAnswer: 'scale-only-one-ratio',
      correction:
        'In fact BOTH ratios usually need scaling so the shared term agrees in each. Otherwise the shared term still takes two different values.',
      reExplanation:
        'For A:B = 1:4 and B:C = 2:3, the shared term B is 4 in the first ratio and 2 in the second. LCM of 4 and 2 is 4. The first ratio already has B = 4, so it stays. The second ratio needs scaling by 2 to get B:C = 4:6. Combined: A:B:C = 1:4:6. Scaling only one ratio and not the other leaves B at two different values, which breaks the link.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 2 Ratio, Proportion and Rates of Change, "Linking Ratios" page, "Common mistake" callout warning pupils to use the LCM and not the smaller of the two shared values.
    {
      id: 'rc-mis-use-smaller-of-shared',
      description:
        'I bring the shared term down to the smaller of the two values it takes, instead of up to their lowest common multiple, so I cannot scale without using fractions.',
      triggerAnswer: 'use-smaller-of-shared',
      correction:
        'Actually you scale the shared term UP to the LCM of the two values, not down. Scaling down often needs fractions and gives messy answers.',
      reExplanation:
        'For B values of 3 and 4, the LCM is 12. Both ratios scale up by whole numbers (4 and 3) to reach B = 12. If you tried to scale down to B = 3, the second ratio B:C = 4:5 would need multiplying by 3/4, which gives 3:3.75 with fractional parts. Whole-number scaling is cleaner and matches the way GCSE mark schemes expect combined ratios to be written.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 5 "Ratio and Proportion" by Hart, on pupils muddling the order of the three parts in a combined ratio, especially when the second ratio mentions the shared term first.
    {
      id: 'rc-mis-wrong-order',
      description:
        'I write the combined ratio in the wrong order, so for A:B = 2:3 and B:C = 4:5 I write A:B:C = 15:12:8 instead of 8:12:15.',
      triggerAnswer: 'wrong-order',
      correction:
        'In fact the combined ratio reads in the same order as the labels A:B:C, with A first, the shared term in the middle, and C last.',
      reExplanation:
        'For A:B = 2:3 and B:C = 4:5, A scales to 8, B scales to 12, and C scales to 15. The combined ratio A:B:C = 8:12:15 reads left to right in the order of the letters. Writing 15:12:8 puts C first and A last, which would mean the ratio is now C:B:A. Always check that the first number of the combined ratio belongs to the first letter of the label.',
    },
    // Authored, no external source: classroom-observed Year 7 slip where pupils write the shared term twice in the combined ratio, giving four numbers instead of three.
    {
      id: 'rc-mis-shared-term-twice',
      description:
        'I write the shared term twice in the combined ratio, so after scaling A:B = 6:4 and B:C = 4:5 I write A:B:C = 6:4:4:5 (four numbers).',
      triggerAnswer: 'shared-term-twice',
      correction:
        'Actually the shared term appears once in the middle of the combined ratio. The combined ratio has three numbers, not four.',
      reExplanation:
        'For A:B = 6:4 and B:C = 4:5, after scaling so B agrees at 4, the combined ratio is A:B:C = 6:4:5. The shared term B is 4 in both source ratios, so it goes in the middle exactly once. Writing 6:4:4:5 would make B appear twice and double-count the linking quantity. The combined ratio always has one number per labelled letter.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const ratioCombiningZoneNodes = [ratioCombining]
