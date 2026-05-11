import type { SkillNode } from '@/types/content'

export const ratioThreePart: SkillNode = {
  id: 'maths-ratio-three-part',
  title: 'Three-Part Ratios',
  description:
    'Write, simplify and use three-part ratios. Read a 3-part ratio from a context with three groups (recipe, money split, classroom mix), simplify by dividing every part by a common factor, and share a quantity by adding the parts, finding the value of one part, then multiplying each share. Stay with small integer parts.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-ratio',
  zoneName: 'Ratio and Proportion',
  tier: 'confident',
  prerequisites: ['maths-ratio-sharing'],
  curriculum: {
    ks3Objective:
      'Divide a given quantity into two parts in a given part:part or part:whole ratio; extend to three-part ratios.',
    awardingBodies: {
      aqa: 'R5 Divide a given quantity into more than two parts in a given ratio (GCSE Mathematics 8300)',
      edexcel: 'R5 Share a quantity in a given three-part ratio (GCSE Mathematics 1MA1)',
      ocr: '6.01b Share a quantity in a given three-part ratio (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'rtp-scene-bar-235',
      title: 'Three-Part Bar at 2:3:5',
      type: 'fraction-wall',
      instructions:
        'Click each part of the bar to highlight it. The £100 total is split into 10 equal parts because 2 + 3 + 5 = 10. Each part is worth £10. The three shares are £20, £30 and £50, and they add back to £100.',
      data: {
        wholeLabel: '£100 split in ratio 2:3:5',
        parts: [
          { id: 'rtp-1', share: 'a', value: 10, colour: 'blue' },
          { id: 'rtp-2', share: 'a', value: 10, colour: 'blue' },
          { id: 'rtp-3', share: 'b', value: 10, colour: 'orange' },
          { id: 'rtp-4', share: 'b', value: 10, colour: 'orange' },
          { id: 'rtp-5', share: 'b', value: 10, colour: 'orange' },
          { id: 'rtp-6', share: 'c', value: 10, colour: 'green' },
          { id: 'rtp-7', share: 'c', value: 10, colour: 'green' },
          { id: 'rtp-8', share: 'c', value: 10, colour: 'green' },
          { id: 'rtp-9', share: 'c', value: 10, colour: 'green' },
          { id: 'rtp-10', share: 'c', value: 10, colour: 'green' },
        ],
        totalParts: 10,
        valuePerPart: 10,
        shares: [
          { label: 'a (2 parts)', value: 20 },
          { label: 'b (3 parts)', value: 30 },
          { label: 'c (5 parts)', value: 50 },
        ],
        check: '£20 + £30 + £50 = £100.',
      },
    },
    {
      id: 'rtp-scene-cordial-recipe',
      title: 'Cordial, Water and Lemonade Recipe',
      type: 'labelled-diagram',
      instructions:
        'Click each jug to reveal the part. A Sevenoaks party punch mixes cordial, water and lemonade in the ratio 1:4:3. Total parts = 8, so for an 800 ml jug each part is 100 ml: 100 ml cordial, 400 ml water, 300 ml lemonade.',
      data: {
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'rtp-jug-cordial',
            x: 18,
            y: 50,
            label: 'Cordial: 1 part = 100 ml',
            description: 'The smallest share. One part of the eight equal parts.',
          },
          {
            id: 'rtp-jug-water',
            x: 50,
            y: 50,
            label: 'Water: 4 parts = 400 ml',
            description: 'The largest share. Four parts of the eight equal parts.',
          },
          {
            id: 'rtp-jug-lemonade',
            x: 82,
            y: 50,
            label: 'Lemonade: 3 parts = 300 ml',
            description: 'The middle share. Three parts of the eight equal parts.',
          },
        ],
      },
    },
    {
      id: 'rtp-scene-find-one-part',
      title: 'Find One Part First',
      type: 'diagram',
      instructions:
        'A pupil shares £180 in the ratio 2:3:4. The total parts are 2 + 3 + 4 = 9, so one part is £180 / 9 = £20. The three shares are 2 x £20 = £40, 3 x £20 = £60 and 4 x £20 = £80, and £40 + £60 + £80 = £180 confirms the split.',
      data: {
        totalAmount: 180,
        unit: 'GBP',
        ratio: [2, 3, 4],
        sumOfParts: 9,
        valuePerPart: 20,
        shares: [
          { ratioNumber: 2, value: 40 },
          { ratioNumber: 3, value: 60 },
          { ratioNumber: 4, value: 80 },
        ],
        method: [
          'Add the ratio numbers: 2 + 3 + 4 = 9 parts.',
          'Divide the total amount by 9 to find the value of one part: £180 / 9 = £20.',
          'Multiply by 2, 3 and 4 for the three shares: £40, £60 and £80.',
          'Check: £40 + £60 + £80 = £180.',
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'rtp-worked-1',
      title: 'Share £180 in the ratio 2:3:4',
      steps: [
        {
          explanation:
            'Add the ratio numbers to find the total number of equal parts.',
          maths: '2 + 3 + 4 = 9 parts',
        },
        {
          explanation:
            'Divide the total amount by the number of parts to find the value of one part.',
          maths: '£180 / 9 = £20 per part',
        },
        {
          explanation:
            'Multiply the value of one part by the first ratio number to find the first share.',
          maths: '2 x £20 = £40',
        },
        {
          explanation:
            'Multiply the value of one part by the second ratio number to find the second share.',
          maths: '3 x £20 = £60',
        },
        {
          explanation:
            'Multiply the value of one part by the third ratio number to find the third share.',
          maths: '4 x £20 = £80',
        },
        {
          explanation:
            'Check the three shares add back to the original total.',
          maths: '£40 + £60 + £80 = £180',
        },
        {
          explanation: 'So £180 in the ratio 2:3:4 splits into £40, £60 and £80.',
          maths: 'shares: £40, £60, £80',
        },
      ],
    },
    {
      id: 'rtp-worked-2',
      title: 'Scale a 1:2:5 punch recipe to fill a 1.6 litre jug',
      steps: [
        {
          explanation:
            'A Tunbridge Wells party punch mixes cordial, water and lemonade in the ratio 1:2:5. Start by adding the ratio numbers to find the total parts.',
          maths: '1 + 2 + 5 = 8 parts',
        },
        {
          explanation:
            'Convert the jug volume into millilitres so the units match.',
          maths: '1.6 litres = 1600 ml',
        },
        {
          explanation:
            'Divide the total volume by the number of parts to find the value of one part.',
          // Engine hides this step as the missing-step prompt for this example.
          maths: '1600 / 8 = 200 ml per part',
        },
        {
          explanation:
            'Multiply by 1 for the cordial share.',
          maths: '1 x 200 = 200 ml cordial',
        },
        {
          explanation:
            'Multiply by 2 for the water share.',
          maths: '2 x 200 = 400 ml water',
        },
        {
          explanation:
            'Multiply by 5 for the lemonade share.',
          maths: '5 x 200 = 1000 ml lemonade',
        },
        {
          explanation:
            'Check the three shares add back to the total volume.',
          maths: '200 + 400 + 1000 = 1600 ml',
        },
        {
          explanation:
            'So the recipe needs 200 ml of cordial, 400 ml of water and 1000 ml of lemonade.',
          maths: 'cordial : water : lemonade = 200 ml : 400 ml : 1000 ml',
        },
      ],
    },
  ],
  questions: [
    // Core 1
    {
      id: 'rtp-q1',
      type: 'numeric-entry',
      stem: 'A ratio of 1:2:3 has how many equal parts in total?',
      tier: 'core',
      correctAnswer: 6,
      xpValue: 10,
      hint: 'Add the three ratio numbers together.',
    },
    // Core 2
    {
      id: 'rtp-q2',
      type: 'numeric-entry',
      stem: 'A ratio of 2:3:5 has how many equal parts in total?',
      tier: 'core',
      correctAnswer: 10,
      xpValue: 10,
      hint: 'Add all three ratio numbers together.',
    },
    // Core 3
    {
      id: 'rtp-q3',
      type: 'multiple-choice',
      stem: 'Share £60 in the ratio 1:2:3. What is the value of one part?',
      tier: 'core',
      options: ['£6', '£10', '£12', '£20'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'rtp-mis-divide-by-count-of-parts',
      hint: 'Total parts = 1 + 2 + 3 = 6. Divide £60 by 6.',
    },
    // Core 4
    {
      id: 'rtp-q4',
      type: 'multiple-choice',
      stem: 'Share £90 in the ratio 1:3:5. How much is the smallest share?',
      tier: 'core',
      options: ['£9', '£10', '£18', '£30'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Total parts = 9, so one part = £90 / 9 = £10. The smallest share has 1 part.',
    },
    // Core 5
    {
      id: 'rtp-q5',
      type: 'numeric-entry',
      stem: 'A Manchester family shares 24 sweets between three siblings in the ratio 1:2:3. How many sweets does the sibling with the largest share get?',
      tier: 'core',
      correctAnswer: 12,
      xpValue: 10,
      hint: 'Total parts = 6, so one part = 4 sweets. The largest share has 3 parts.',
    },
    // Core 6
    {
      id: 'rtp-q6',
      type: 'multiple-choice',
      stem: 'A Year 7 form has 30 pupils split between three colour houses in the ratio 2:3:5 (red:blue:green). Which row gives the three house sizes correctly?',
      tier: 'core',
      options: [
        'red 6, blue 9, green 15',
        'red 10, blue 10, green 10',
        'red 5, blue 10, green 15',
        'red 3, blue 5, green 22',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'rtp-mis-equal-shares-three',
      hint: 'Total parts = 2 + 3 + 5 = 10. One part = 30 / 10 = 3 pupils.',
    },
    // Core 7
    {
      id: 'rtp-q7',
      type: 'multiple-choice',
      stem: 'A canteen mixes 480 g of oats, nuts and raisins in the ratio 6:1:1. How many grams of nuts are in the mix?',
      tier: 'core',
      options: ['60 g', '80 g', '160 g', '360 g'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'rtp-mis-two-of-three-parts',
      hint: 'Total parts = 8, so one part = 60 g. Nuts have 1 part.',
    },
    // Core 8
    {
      id: 'rtp-q8',
      type: 'spot-misconception',
      stem: 'To share £60 in the ratio 1:2:3, Liam writes 60 / 3 = £20 per part, because there are three numbers in the ratio.',
      tier: 'core',
      statements: [
        {
          text: 'Liam is right. To find the value of one part you divide by the count of numbers in the ratio.',
          isMisconception: true,
        },
        {
          text: 'In fact you divide by the total number of parts, which is 1 + 2 + 3 = 6. So one part is £60 / 6 = £10, not £20.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'rtp-mis-divide-by-count-of-parts',
    },
    // Confident 1
    {
      id: 'rtp-q9',
      type: 'multiple-choice',
      stem: 'Share £180 in the ratio 2:3:4. Which row gives all three shares correctly?',
      tier: 'confident',
      options: [
        '£20, £60, £100',
        '£36, £54, £90',
        '£40, £60, £80',
        '£60, £60, £60',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'rtp-mis-equal-shares-three',
      hint: 'Total parts = 2 + 3 + 4 = 9. One part = £180 / 9 = £20. Multiply by 2, 3 and 4.',
    },
    // Confident 2
    {
      id: 'rtp-q10',
      type: 'multiple-choice',
      stem: 'A Dover paint shop mixes white, blue and red paint in the ratio 5:3:2 to make 2 litres of total mix. How much red paint does the mix need?',
      tier: 'confident',
      options: ['200 ml', '300 ml', '400 ml', '600 ml'],
      correctIndex: 2,
      xpValue: 15,
      hint: 'Total parts = 10. One part = 2000 / 10 = 200 ml. Red share = 2 parts.',
    },
    // Confident 3
    {
      id: 'rtp-q11',
      type: 'numeric-entry',
      stem: 'A Tunbridge Wells bakery mixes flour, butter and sugar in the ratio 5:3:2 for shortbread. The total weight of dough is 800 g. How many grams of butter does the recipe need?',
      tier: 'confident',
      correctAnswer: 240,
      xpValue: 15,
      unit: 'g',
      hint: 'Total parts = 10. One part = 80 g. Butter share = 3 parts.',
    },
    // Confident 4
    {
      id: 'rtp-q12',
      type: 'multiple-choice',
      stem: '£84 is shared between three pupils in the ratio 2:3:7. Which row gives all three shares correctly?',
      tier: 'confident',
      options: [
        '£12, £24, £48',
        '£14, £21, £49',
        '£21, £21, £42',
        '£24, £24, £36',
      ],
      correctIndex: 1,
      xpValue: 15,
      hint: 'Total parts = 2 + 3 + 7 = 12. One part = £84 / 12 = £7.',
    },
    // Confident 5
    {
      id: 'rtp-q13',
      type: 'numeric-entry',
      stem: 'A 540 ml jug of party punch is mixed from cordial, water and lemonade in the ratio 1:4:4. How many millilitres of water are in the jug?',
      tier: 'confident',
      correctAnswer: 240,
      xpValue: 15,
      unit: 'ml',
      hint: 'Total parts = 9. One part = 60 ml. Water share = 4 parts.',
    },
    // Confident 6 (missing-step, anchors worked example 2)
    {
      id: 'rtp-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step. A Sevenoaks bakery shares 360 g of dough between bread, biscuits and cake in the ratio 4:3:2.',
      tier: 'confident',
      steps: [
        'Add the ratio numbers: 4 + 3 + 2 = 9 parts in total.',
        'Divide the total mass by 9 to find the value of one part.',
        null,
        'Multiply by 4, 3 and 2 for the three shares: 160 g, 120 g and 80 g. Check: 160 + 120 + 80 = 360 g.',
      ],
      missingStepIndex: 2,
      correctStep: '360 / 9 = 40 g per part.',
      xpValue: 20,
      misconceptionId: 'rtp-mis-skip-final-check-three',
    },
    // Challenge 1 (drag-order, simplifying a 3-part ratio with HCF, multi-step)
    {
      id: 'rtp-q15',
      type: 'drag-order',
      stem: 'A Lake District youth hostel records pupils, staff and volunteers as 24:36:12 at a weekend trip. Drag these steps into the order needed to write the ratio in its simplest form.',
      tier: 'challenge',
      items: [
        'Write the simplified ratio: 2:3:1.',
        'Find a common factor of 24, 36 and 12. The highest common factor is 12.',
        'Write down the original ratio 24:36:12.',
        'Divide each part by 12: 24 / 12 = 2, 36 / 12 = 3, 12 / 12 = 1.',
      ],
      correctOrder: [2, 1, 3, 0],
      xpValue: 20,
      misconceptionId: 'rtp-mis-divide-only-some-parts',
      hint: 'Start by writing the original ratio, then find the highest common factor, divide each part by it, and finally write the result.',
    },
    // Challenge 2 (drag-drop-builder, build a simplified 3-part ratio from raw counts)
    {
      id: 'rtp-q16',
      type: 'drag-drop-builder',
      stem: 'A Year 7 class has 8 red-house pupils, 12 blue-house pupils and 4 green-house pupils. Drag the parts to build the ratio red:blue:green in its simplest form.',
      tier: 'challenge',
      parts: ['2', '3', '1', '4', '6'],
      correctArrangement: ['2', '3', '1'],
      xpValue: 20,
      misconceptionId: 'rtp-mis-wrong-order',
      hint: 'Find the highest common factor of 8, 12 and 4 (it is 4) and divide each count by it. Keep the order red, then blue, then green.',
    },
    // Confident 7 (slider-explore)
    {
      id: 'rtp-q17',
      type: 'slider-explore',
      stem: 'A punch is mixed in the ratio 1:2:5 (cordial:water:lemonade). Slide to choose the total volume in millilitres so that the jug contains exactly 100 ml of cordial. What total volume do you need?',
      tier: 'confident',
      min: 0,
      max: 1200,
      step: 100,
      correctRange: [800, 800],
      label: 'Total volume (ml)',
      xpValue: 15,
      hint: 'There are 8 parts in total. If 1 part is 100 ml, find 8 parts.',
    },
    // Confident 8 (spot-misconception, reading order)
    {
      id: 'rtp-q18',
      type: 'spot-misconception',
      stem: 'A Manchester newsagent shares 60 papers between morning, afternoon and evening rounds in the ratio 2:3:5. A trainee writes the morning round as 30 papers because the ratio numbers are 2, 3, 5.',
      tier: 'confident',
      statements: [
        {
          text: 'The trainee is right. The largest ratio number always belongs to the morning round.',
          isMisconception: true,
        },
        {
          text: 'In fact the ratio numbers list the shares in the same order as the rounds. Morning is 2 parts, so morning = 2 x 6 = 12 papers, not 30.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'rtp-mis-wrong-order',
    },
    // Challenge 3 (Bond-style multi-step word problem)
    {
      id: 'rtp-q19',
      type: 'numeric-entry',
      stem: 'A Sevenoaks bakery makes scones, biscuits and cakes in the ratio 5:3:2. On Saturday it sold 50 cakes. A scone costs £1.20. How much money in pounds did the bakery take from scone sales that day?',
      tier: 'challenge',
      correctAnswer: 150,
      xpValue: 25,
      unit: 'GBP',
      hint: 'Cakes are 2 parts, so one part = 50 / 2 = 25 items. Scones are 5 parts = 125 scones. Then multiply by £1.20.',
    },
    // Challenge 4 (Bond-style multi-step)
    {
      id: 'rtp-q20',
      type: 'multiple-choice',
      stem: 'A Dover school orders 270 lunches a day. The ratio of vegetarian to meat to vegan meals is 4:5:1. After lunch, 9 vegetarian and 6 meat meals are left unsold. How many of each kind were actually eaten?',
      tier: 'challenge',
      options: [
        'Vegetarian 99, meat 129, vegan 27',
        'Vegetarian 108, meat 135, vegan 27',
        'Vegetarian 90, meat 120, vegan 27',
        'Vegetarian 99, meat 135, vegan 18',
      ],
      correctIndex: 0,
      xpValue: 25,
      hint: 'Total parts = 10, one part = 27. Shares: 108 vegetarian, 135 meat, 27 vegan. Subtract 9 and 6 from the first two.',
    },
    // Challenge 5 (Bond-style, simplify then share)
    {
      id: 'rtp-q21',
      type: 'numeric-entry',
      stem: 'A Tunbridge Wells choir has 60 sopranos, 36 altos and 24 tenors. The choir manager wants to write this as a ratio in its simplest form and then split a £120 prize between the three sections in that same ratio. How many pounds does the alto section receive?',
      tier: 'challenge',
      correctAnswer: 36,
      xpValue: 25,
      unit: 'GBP',
      misconceptionId: 'rtp-mis-divide-only-some-parts',
      hint: 'Highest common factor of 60, 36 and 24 is 12, so the ratio is 5:3:2. Share £120 in 5:3:2: one part = £12, alto = 3 parts.',
    },
    // Challenge 6 (Bond-style, find one share from another)
    {
      id: 'rtp-q22',
      type: 'multiple-choice',
      stem: 'A Lake District youth hostel splits a 90 litre tank of squash between three age groups in the ratio 4:3:2. The youngest age group, who get the smallest share, drink 8 litres less than their full ration. How many litres of their share is left in the tank?',
      tier: 'challenge',
      options: ['8 litres', '12 litres', '20 litres', '28 litres'],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'rtp-mis-wrong-order',
      hint: 'Total parts = 9, one part = 10 litres. Smallest share = 2 parts = 20 litres. Subtract the 8 litres drunk.',
    },
  ],
  misconceptions: [
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2022, Paper 01 (Foundation, Non-calculator), commentary on a 3-part sharing question where pupils divided the total by 3 (the number of ratio terms) instead of by the sum of the parts.
    {
      id: 'rtp-mis-divide-by-count-of-parts',
      description:
        'In a 3-part ratio I find the value of one part by dividing the total by 3, because there are three numbers in the ratio.',
      triggerAnswer: 'divide-by-three-terms',
      correction:
        'Actually you divide by the total number of parts, which is the sum of the three ratio numbers, not by the count of numbers.',
      reExplanation:
        'For £60 in the ratio 1:2:3, the total parts are 1 + 2 + 3 = 6, so one part is £60 / 6 = £10. The shares are 1 x £10 = £10, 2 x £10 = £20 and 3 x £10 = £30, which add to £60. Dividing by 3 gives £20 per part, which would make the shares total £120, twice the original.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, November 2022, Paper 1F (Foundation, Non-calculator), commentary on a 3-part sharing question where pupils gave each person an equal share, ignoring the ratio numbers.
    {
      id: 'rtp-mis-equal-shares-three',
      description:
        'I share an amount between three people in a 3-part ratio by giving each person an equal third, ignoring the ratio numbers.',
      triggerAnswer: 'equal-thirds',
      correction:
        'In fact a ratio tells you the relative sizes of the three shares. Equal thirds only happen when the ratio is 1:1:1.',
      reExplanation:
        'To share 30 pupils between three houses in the ratio 2:3:5, add 2 + 3 + 5 = 10 parts. 30 / 10 = 3 pupils per part. The three houses then have 6, 9 and 15 pupils, not three equal groups of 10. Check: 6 + 9 + 15 = 30.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a three-part ratio sharing item where pupils used only two of the three ratio terms when computing one share.
    {
      id: 'rtp-mis-two-of-three-parts',
      description:
        'I work out a 3-part ratio by using only two of the three ratio numbers, so for 6:1:1 I treat the total parts as 7 instead of 8.',
      triggerAnswer: 'two-of-three-parts',
      correction:
        'Actually every part in the ratio counts, including any that look small or repeat. The total parts is the sum of all three numbers.',
      reExplanation:
        'For 480 g of muesli mixed with nuts and raisins in the ratio 6:1:1, the total parts are 6 + 1 + 1 = 8, so one part is 60 g. Nuts and raisins are 1 part each, so each is 60 g and oats are 360 g. Adding gives 360 + 60 + 60 = 480 g, the full mix.',
    },
    // Source: NCETM Secondary Mastery Professional Development Materials, "Ratio and Proportion", core concept 2 commentary on pupils treating a 3-part ratio as a single fraction with the count of ratio terms as the denominator.
    {
      id: 'rtp-mis-ratio-as-third',
      description:
        'I read the 3-part ratio 2:3:4 as fractions like 2/3 and 3/3 of the total, using 3 (the number of ratio terms) as the denominator.',
      triggerAnswer: 'ratio-as-third',
      correction:
        'Actually each share is a fraction of the total parts, not of the count of terms. The denominator is the sum of the ratio numbers.',
      reExplanation:
        'For £180 in the ratio 2:3:4, the total parts are 9, so each share is a fraction with 9 as the denominator: 2/9 of £180 = £40, 3/9 = £60 and 4/9 = £80. Adding gives £40 + £60 + £80 = £180. Using thirds would force two shares to be more than the total.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 2 Ratio, Proportion and Rates of Change, "Sharing in a Ratio" page; the worked example that warns to check the three shares add back to the original total.
    {
      id: 'rtp-mis-skip-final-check-three',
      description:
        'I find each share in a 3-part ratio but do not check that the three shares add back to the original total.',
      triggerAnswer: 'skip-final-check-three',
      correction:
        'Actually a quick check that the three shares add back to the total catches arithmetic slips, which are more common with three parts than two.',
      reExplanation:
        'For 360 g of dough split in the ratio 4:3:2, the shares are 160 g, 120 g and 80 g. Adding gives 160 + 120 + 80 = 360 g, which matches the original total. If the three shares come to 350 g or 370 g, you have made a slip in the value of one part and need to recheck.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 5 "Ratio and Proportion" by Hart, on pupils matching the ratio numbers to the named groups in the wrong order, especially when the largest number is named last.
    {
      id: 'rtp-mis-wrong-order',
      description:
        'I match the ratio numbers to the groups in the wrong order, so for "red:blue:green in the ratio 2:3:5" I give the green group 2 parts.',
      triggerAnswer: 'wrong-order',
      correction:
        'In fact the ratio numbers list the shares in the same order as the groups are named in the question.',
      reExplanation:
        'When the question says "red:blue:green in the ratio 2:3:5", red gets 2 parts, blue gets 3 parts and green gets 5 parts. The order of the ratio numbers matches the order of the colour names. Reading the ratio as 5:3:2 would swap red and green, giving the wrong house sizes.',
    },
    // Source: Hodder Education KS3 Maths Now Year 7 Pupil Book, Chapter 6 Ratio and Proportion, "Simplifying ratios with three parts" worked example, warning against dividing only two of the three parts by the common factor.
    {
      id: 'rtp-mis-divide-only-some-parts',
      description:
        'I simplify a 3-part ratio by dividing some of the parts by a common factor but forgetting to divide every part, so 24:36:12 becomes 2:3:12.',
      triggerAnswer: 'divide-only-some-parts',
      correction:
        'Actually when you simplify a ratio, every part has to be divided by the same factor. If one part is missed, the ratio is no longer equivalent to the original.',
      reExplanation:
        'For 24:36:12, the highest common factor of all three numbers is 12. Dividing every part by 12 gives 24 / 12 : 36 / 12 : 12 / 12 = 2:3:1. Forgetting to divide the third part gives 2:3:12, which is not equivalent because the relative sizes have changed.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const ratioThreePartZoneNodes = [ratioThreePart]
