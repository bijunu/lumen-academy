import type { SkillNode } from '@/types/content'

export const ratioSharing: SkillNode = {
  id: 'maths-ratio-sharing',
  title: 'Sharing in a Given Ratio',
  description:
    'Split a quantity into parts in a given ratio. Add the ratio numbers to find the total parts, divide the quantity by that total to find the value of one part, then multiply each share. Apply the same method to recipe scaling and money splits in 2-part and 3-part ratios.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-ratio',
  zoneName: 'Ratio and Proportion',
  tier: 'confident',
  prerequisites: ['maths-ratio-introduction'],
  curriculum: {
    ks3Objective:
      'Divide a given quantity into two parts in a given part:part or part:whole ratio; express the division of a quantity into two parts as a ratio.',
    awardingBodies: {
      aqa: 'R5 Divide a given quantity into two parts in a given part:part or part:whole ratio (GCSE Mathematics 8300)',
      edexcel: 'R5 Divide a given quantity into two parts in a given part:part or part:whole ratio (GCSE Mathematics 1MA1)',
      ocr: '6.01b Share a quantity in a given ratio including three-part ratios (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'rs-scene-bar-share',
      title: 'Bar Share with Equal Parts',
      type: 'fraction-wall',
      instructions:
        'Click each part of the bar to highlight it. The £45 bar is split into 5 equal parts because 2 + 3 = 5. Each part is worth £9. The 2-part share is £18 and the 3-part share is £27.',
      data: {
        wholeLabel: '£45 split in ratio 2:3',
        parts: [
          { id: 'r2-1', share: 'left', value: 9, colour: 'blue' },
          { id: 'r2-2', share: 'left', value: 9, colour: 'blue' },
          { id: 'r2-3', share: 'right', value: 9, colour: 'orange' },
          { id: 'r2-4', share: 'right', value: 9, colour: 'orange' },
          { id: 'r2-5', share: 'right', value: 9, colour: 'orange' },
        ],
        totalParts: 5,
        valuePerPart: 9,
        leftShare: { parts: 2, value: 18 },
        rightShare: { parts: 3, value: 27 },
        check: '£18 + £27 = £45.',
      },
    },
    {
      id: 'rs-scene-recipe-scaler',
      title: 'Recipe Scaler',
      type: 'simulation',
      instructions:
        'See how a 3:1 flour to butter shortbread recipe scales. With 600 g of total dough you have 4 parts in the ratio, so each part is 150 g. The flour share is 3 parts (450 g) and the butter share is 1 part (150 g). Doubling the dough to 1200 g doubles each share to 900 g flour and 300 g butter.',
      data: {
        baseRatio: { flour: 3, butter: 1 },
        slider: { min: 200, max: 1600, step: 200, label: 'total dough (g)' },
        examples: [
          { totalDough: 400, valuePerPart: 100, flour: 300, butter: 100 },
          { totalDough: 600, valuePerPart: 150, flour: 450, butter: 150 },
          { totalDough: 800, valuePerPart: 200, flour: 600, butter: 200 },
          { totalDough: 1200, valuePerPart: 300, flour: 900, butter: 300 },
        ],
        readouts: ['totalParts', 'valuePerPart', 'flourShare', 'butterShare'],
        notes:
          'Add the ratio numbers (3 + 1 = 4 parts), divide the total by 4 to find the value of one part, then multiply by 3 for flour and by 1 for butter.',
      },
    },
    {
      id: 'rs-scene-three-part-split',
      title: 'Three-Part Split',
      type: 'fraction-wall',
      instructions:
        'Click each part to highlight it. £100 split in the ratio 2:3:5 has 10 equal parts (2 + 3 + 5 = 10), each worth £10. The shares are £20, £30 and £50. Always check the three shares add back to the original total.',
      data: {
        wholeLabel: '£100 split in ratio 2:3:5',
        parts: [
          { id: 'r3-1', share: 'a', value: 10 },
          { id: 'r3-2', share: 'a', value: 10 },
          { id: 'r3-3', share: 'b', value: 10 },
          { id: 'r3-4', share: 'b', value: 10 },
          { id: 'r3-5', share: 'b', value: 10 },
          { id: 'r3-6', share: 'c', value: 10 },
          { id: 'r3-7', share: 'c', value: 10 },
          { id: 'r3-8', share: 'c', value: 10 },
          { id: 'r3-9', share: 'c', value: 10 },
          { id: 'r3-10', share: 'c', value: 10 },
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
  ],
  workedExamples: [
    {
      id: 'rs-worked-1',
      title: 'Share £45 in the ratio 2:3',
      steps: [
        {
          explanation:
            'Add the ratio numbers to find the total number of equal parts.',
          maths: '2 + 3 = 5 parts',
        },
        {
          explanation:
            'Divide the total amount by the number of parts to find the value of one part.',
          maths: '£45 / 5 = £9 per part',
        },
        {
          explanation:
            'Multiply the value of one part by the first ratio number to find the first share.',
          maths: '2 x £9 = £18',
        },
        {
          explanation:
            'Multiply the value of one part by the second ratio number to find the second share.',
          maths: '3 x £9 = £27',
        },
        {
          explanation:
            'Check the two shares add back to the original total.',
          maths: '£18 + £27 = £45',
        },
        {
          explanation: 'So £45 in the ratio 2:3 splits into £18 and £27.',
          maths: 'shares: £18, £27',
        },
      ],
    },
    {
      id: 'rs-worked-2',
      title: 'Split 600 g of flour and butter in the ratio 3:1',
      steps: [
        {
          explanation:
            'Add the ratio numbers to find the total parts.',
          maths: '3 + 1 = 4 parts',
        },
        {
          explanation:
            'Divide the total mass by 4 to find the value of one part.',
          maths: '600 / 4 = 150 g per part',
        },
        {
          explanation:
            'Multiply by 3 for the flour share.',
          maths: '3 x 150 = 450 g flour',
        },
        {
          explanation:
            'Multiply by 1 for the butter share.',
          maths: '1 x 150 = 150 g butter',
        },
        {
          explanation:
            'Check the shares add to the original total.',
          maths: '450 + 150 = 600 g',
        },
        {
          explanation: 'So the recipe needs 450 g of flour and 150 g of butter.',
          maths: 'flour : butter = 450 g : 150 g',
        },
      ],
    },
  ],
  questions: [
    // Core 1
    {
      id: 'rs-q1',
      type: 'numeric-entry',
      stem: 'A ratio of 2:3 has how many equal parts in total?',
      tier: 'core',
      correctAnswer: 5,
      xpValue: 10,
      hint: 'Add the two ratio numbers together.',
    },
    // Core 2
    {
      id: 'rs-q2',
      type: 'numeric-entry',
      stem: 'A ratio of 2:3:5 has how many equal parts in total?',
      tier: 'core',
      correctAnswer: 10,
      xpValue: 10,
      hint: 'Add all three ratio numbers together.',
    },
    // Core 3
    {
      id: 'rs-q3',
      type: 'multiple-choice',
      stem: 'You want to share £40 in the ratio 1:3. What is the value of one part?',
      tier: 'core',
      options: ['£8', '£10', '£13', '£20'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'rs-mis-divide-by-larger-number',
      hint: 'There are 1 + 3 = 4 parts in total. Divide £40 by 4.',
    },
    // Core 4
    {
      id: 'rs-q4',
      type: 'multiple-choice',
      stem: 'Share £45 in the ratio 2:3. How much is the smaller share?',
      tier: 'core',
      options: ['£9', '£18', '£22.50', '£27'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'There are 5 parts in total, so one part is £9. The smaller share has 2 parts.',
    },
    // Core 5
    {
      id: 'rs-q5',
      type: 'numeric-entry',
      stem: 'Share 24 sweets between two friends in the ratio 1:2. How many sweets does the friend with the larger share get?',
      tier: 'core',
      correctAnswer: 16,
      xpValue: 10,
      hint: 'There are 3 parts in total, so one part is 8 sweets. The larger share has 2 parts.',
    },
    // Core 6
    {
      id: 'rs-q6',
      type: 'multiple-choice',
      stem: 'Aisha and Liam share 30 marbles in the ratio 2:3. Which row gives both shares correctly?',
      tier: 'core',
      options: [
        'Aisha 10, Liam 20',
        'Aisha 12, Liam 18',
        'Aisha 15, Liam 15',
        'Aisha 20, Liam 10',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'rs-mis-multiply-by-ratio-number',
      hint: 'Total parts = 2 + 3 = 5. One part = 30 / 5 = 6 marbles.',
    },
    // Core 7
    {
      id: 'rs-q7',
      type: 'multiple-choice',
      stem: 'A canteen mixes 600 g of muesli and raisins in the ratio 5:1. How many grams of raisins are in the mix?',
      tier: 'core',
      options: ['100 g', '120 g', '500 g', '600 g'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'rs-mis-one-part-ignored',
      hint: 'There are 6 parts in total, so one part is 100 g. Raisins are 1 part, not the whole packet.',
    },
    // Core 8
    {
      id: 'rs-q8',
      type: 'spot-misconception',
      stem: 'To share £40 in the ratio 1:3, Liam writes 40 / 3 = £13.33 for each part. Is his method sound?',
      tier: 'core',
      statements: [
        {
          text: 'Liam is right. To find the value of one part you divide by the larger number in the ratio.',
          isMisconception: true,
        },
        {
          text: 'In fact you divide by the total number of parts, which is 1 + 3 = 4. So one part is £40 / 4 = £10, not £13.33.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'rs-mis-divide-by-larger-number',
    },
    // Confident 1
    {
      id: 'rs-q9',
      type: 'multiple-choice',
      stem: 'Share £100 in the ratio 2:3:5. Which row gives all three shares correctly?',
      tier: 'confident',
      options: [
        '£20, £30, £50',
        '£10, £20, £70',
        '£25, £35, £40',
        '£33, £33, £34',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'rs-mis-equal-shares',
      hint: 'Total parts = 2 + 3 + 5 = 10. One part = £100 / 10 = £10. Multiply by 2, 3 and 5.',
    },
    // Confident 2
    {
      id: 'rs-q10',
      type: 'multiple-choice',
      stem: 'A shortbread recipe mixes flour and butter in the ratio 3:1. The cook uses 600 g of dough in total. How much flour does the recipe need?',
      tier: 'confident',
      options: ['150 g', '200 g', '300 g', '450 g'],
      correctIndex: 3,
      xpValue: 15,
      hint: 'Total parts = 4. Value of one part = 600 / 4 = 150 g. Flour share = 3 parts.',
    },
    // Confident 3
    {
      id: 'rs-q11',
      type: 'numeric-entry',
      stem: 'A Sevenoaks bakery bakes 480 biscuits in the day, splitting them between shortbread and ginger biscuits in the ratio 5:3. How many ginger biscuits do they bake?',
      tier: 'confident',
      correctAnswer: 180,
      xpValue: 15,
      hint: 'Total parts = 5 + 3 = 8. One part = 480 / 8 = 60 biscuits. Ginger has 3 parts.',
    },
    // Confident 4
    {
      id: 'rs-q12',
      type: 'multiple-choice',
      stem: '£72 is shared between three pupils in the ratio 1:2:3. Which row gives all three shares correctly?',
      tier: 'confident',
      options: [
        '£12, £24, £36',
        '£24, £24, £24',
        '£12, £18, £42',
        '£18, £24, £30',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'rs-mis-equal-shares',
      hint: 'Total parts = 1 + 2 + 3 = 6. One part = £72 / 6 = £12.',
    },
    // Confident 5
    {
      id: 'rs-q13',
      type: 'numeric-entry',
      stem: '450 g of muesli is mixed from oats, nuts and raisins in the ratio 6:2:1. How many grams of nuts are in the mix?',
      tier: 'confident',
      correctAnswer: 100,
      xpValue: 15,
      unit: 'g',
      hint: 'Total parts = 9. One part = 50 g. Nuts share = 2 parts.',
    },
    // Confident 6
    {
      id: 'rs-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step. Aisha shares £84 between two charities in the ratio 3:4.',
      tier: 'confident',
      steps: [
        'Add the ratio numbers: 3 + 4 = 7 parts in total.',
        'Divide the total amount by 7 to find the value of one part.',
        null,
        'Multiply by 3 for the first share: 3 x £12 = £36, and by 4 for the second share: 4 x £12 = £48. Check: £36 + £48 = £84.',
      ],
      missingStepIndex: 2,
      correctStep: '£84 / 7 = £12 per part.',
      xpValue: 20,
      misconceptionId: 'rs-mis-skip-final-check',
    },
    // Challenge 6 (Bond-style stretch using 4-part ordering)
    {
      id: 'rs-q15',
      type: 'drag-order',
      stem: 'A Tunbridge Wells choir splits 240 song books between four sections in the ratio 1:2:3:6. Drag these section sizes into order from smallest to largest.',
      tier: 'challenge',
      items: ['80 books', '40 books', '60 books', '20 books'],
      correctOrder: [3, 1, 2, 0],
      xpValue: 25,
      hint: 'Total parts = 1 + 2 + 3 + 6 = 12. One part = 240 / 12 = 20. Multiply by each ratio number.',
    },
    // Confident 8
    {
      id: 'rs-q16',
      type: 'spot-misconception',
      stem: 'Maya shares £30 in the ratio 1:4. She writes "1 x £30 = £30 for the first share and 4 x £30 = £120 for the second share". Is her method sound?',
      tier: 'confident',
      statements: [
        {
          text: 'Maya is correct. To find each share you multiply the original amount by the ratio number.',
          isMisconception: true,
        },
        {
          text: 'In fact the ratio numbers tell you how many parts each person gets, not what to multiply the total by. Total parts = 5, so one part = £6. Shares are £6 and £24.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'rs-mis-multiply-by-ratio-number',
    },
    // Confident 9
    {
      id: 'rs-q17',
      type: 'slider-explore',
      stem: 'A jug holds squash and water mixed in the ratio 1:4. Slide to choose the total volume in millilitres so that the jug contains exactly 60 ml of squash. What total volume do you need?',
      tier: 'confident',
      min: 0,
      max: 500,
      step: 50,
      correctRange: [300, 300],
      label: 'Total volume (ml)',
      xpValue: 15,
      hint: 'There are 5 parts in total. If 1 part is 60 ml, find 5 parts.',
    },
    // Challenge 1
    {
      id: 'rs-q18',
      type: 'numeric-entry',
      stem: 'A Tunbridge Wells maths club has 28 members. The ratio of pupils to staff helpers is 5:2. How many pupils are in the club?',
      tier: 'challenge',
      correctAnswer: 20,
      xpValue: 25,
      hint: 'Total parts = 7. One part = 28 / 7 = 4. Pupils share = 5 parts.',
    },
    // Challenge 2
    {
      id: 'rs-q19',
      type: 'multiple-choice',
      stem: 'A Manchester takeaway sells 144 portions of fish and chips on a Friday. The ratio of large portions to small portions is 5:7. The chef sells one extra large portion at the end of the night. What is the new ratio of large to small portions in its simplest form?',
      tier: 'challenge',
      options: [
        '5:7',
        '6:7',
        '61:84',
        '7:12',
      ],
      correctIndex: 2,
      xpValue: 25,
      hint: 'First find the original counts: 144 / 12 = 12 per part, so 60 large and 84 small. Then add 1 to the large count.',
    },
    // Challenge 3
    {
      id: 'rs-q20',
      type: 'numeric-entry',
      stem: 'A Lake District youth hostel splits a 90-litre tank of squash into bottles for three age groups in the ratio 4:3:2. The youngest group gets the smallest share. How many litres does the youngest group get?',
      tier: 'challenge',
      correctAnswer: 20,
      xpValue: 25,
      unit: 'litres',
      misconceptionId: 'rs-mis-share-order-mismatch',
      hint: 'Total parts = 4 + 3 + 2 = 9. One part = 90 / 9 = 10 litres. The youngest (smallest) share is 2 parts.',
    },
    // Challenge 4
    {
      id: 'rs-q21',
      type: 'multiple-choice',
      stem: 'A Dover newsagent shares 240 newspapers between three rounds in the ratio 5:4:3. The first round delivers to flats, the second to houses, and the third to shops. The newsagent finds 12 unsold papers from the third round. How many papers did the third round actually deliver?',
      tier: 'challenge',
      options: ['48', '60', '68', '72'],
      correctIndex: 0,
      xpValue: 25,
      hint: 'Total parts = 12. One part = 240 / 12 = 20. Third-round share = 3 x 20 = 60 papers, then subtract the 12 unsold.',
    },
    // Challenge 5
    {
      id: 'rs-q22',
      type: 'multiple-choice',
      stem: 'A pupil shares £80 in the ratio 3:5. They write "3/5 of £80 = £48 for the first share, and 2/5 of £80 = £32 for the second share". Which row corrects the slip?',
      tier: 'challenge',
      options: [
        'Nothing is wrong. The pupil has the right shares.',
        'The pupil should have used 3/8 and 5/8 (the denominator is the sum of the parts), giving £30 and £50.',
        'The pupil should swap the two shares, giving £32 and £48.',
        'The pupil should divide by 8 only, giving £10 for each share.',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'rs-mis-ratio-as-direct-fraction',
      hint: 'In a ratio 3:5, total parts = 8, so each share is a fraction with 8 in the denominator: 3/8 and 5/8.',
    },
  ],
  misconceptions: [
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a sharing-in-a-ratio question where pupils divided the total by the larger ratio number alone.
    {
      id: 'rs-mis-divide-by-larger-number',
      description:
        'I share an amount in a ratio by dividing by the larger of the two ratio numbers, instead of by the total number of parts.',
      triggerAnswer: 'divide-by-larger',
      correction:
        'Actually you divide by the total number of parts, which is the sum of the ratio numbers. For 1:3 the total is 4, not 3.',
      reExplanation:
        'To share £40 in the ratio 1:3, add 1 + 3 = 4 to find the total parts. Then £40 / 4 = £10 per part. The shares are 1 x £10 = £10 and 3 x £10 = £30. Check that £10 + £30 = £40 to confirm the split is correct.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a sharing question where pupils multiplied the total amount by each ratio number.
    {
      id: 'rs-mis-multiply-by-ratio-number',
      description:
        'I find each share by multiplying the original total by the ratio number, so for £30 in the ratio 1:4 I write £30 and £120 as the two shares.',
      triggerAnswer: 'multiply-by-ratio',
      correction:
        'Actually the ratio numbers tell you how many parts each share gets, not what to multiply the total by. Find the value of one part first.',
      reExplanation:
        'For £30 in the ratio 1:4, total parts = 5, so one part = £30 / 5 = £6. Shares are 1 x £6 = £6 and 4 x £6 = £24. Notice £6 + £24 = £30, the original total. Multiplying £30 by 4 gives £120, which is way more than the whole amount.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2022, Paper 01 (Foundation, Non-calculator), commentary on a 3-part sharing question where pupils gave each person an equal share, ignoring the ratio.
    {
      id: 'rs-mis-equal-shares',
      description:
        'I share an amount between three people in a ratio by giving each person an equal share, ignoring the ratio numbers.',
      triggerAnswer: 'equal-shares',
      correction:
        'In fact a ratio tells you the relative sizes of the shares. Equal shares only happen when the ratio is 1:1 or 1:1:1.',
      reExplanation:
        'To share £72 in the ratio 1:2:3, add 1 + 2 + 3 = 6 parts. £72 / 6 = £12 per part. The three shares are £12, £24 and £36, not three equal £24 lots. Check: £12 + £24 + £36 = £72.',
    },
    // Source: NCETM Secondary Magazine, Issue 117, "From the Library" article on ratio and proportion, citing pupil work that read 3:5 as fractions 3/5 and 2/5 of the total instead of 3/8 and 5/8.
    {
      id: 'rs-mis-ratio-as-direct-fraction',
      description:
        'I read the ratio 3:5 as the fractions 3/5 and 2/5 of the total, not as 3/8 and 5/8 of the total.',
      triggerAnswer: 'ratio-as-direct-fraction',
      correction:
        'Actually each share is a fraction of the total parts, not of one of the two ratio numbers. The denominator is the sum of the ratio numbers.',
      reExplanation:
        'For £80 in the ratio 3:5, total parts = 8. Each share is a fraction with 8 as the denominator: 3/8 of £80 = £30 and 5/8 of £80 = £50. Check: £30 + £50 = £80. Reading the ratio as 3/5 and 2/5 would only work if the ratio was 3:2.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 2 Ratio, Proportion and Rates of Change, "Sharing in a Ratio" page; the worked example that warns to check the shares add back to the original total.
    {
      id: 'rs-mis-skip-final-check',
      description:
        'I find each share by computing parts but I do not check that the shares add back to the original total.',
      triggerAnswer: 'skip-final-check',
      correction:
        'Actually a quick check that the shares add back to the total catches arithmetic slips, especially in 3-part ratios.',
      reExplanation:
        'For £100 in the ratio 2:3:5, the shares are £20, £30 and £50. Adding gives £20 + £30 + £50 = £100, which matches the original. If your three shares add to £90 or £110, you have made a slip and need to recheck the value of one part.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 5 "Ratio and Proportion" by Hart, on pupils mixing up which ratio number belongs to which share when shares are listed in different orders.
    {
      id: 'rs-mis-share-order-mismatch',
      description:
        'I match the shares to the people in the wrong order, so for "Aisha and Liam share in the ratio 2:3" I give Aisha the 3-part share.',
      triggerAnswer: 'share-order-mismatch',
      correction:
        'In fact the ratio numbers list the shares in the same order as the people are named in the question.',
      reExplanation:
        'When the question says "Aisha and Liam share in the ratio 2:3", Aisha gets the 2-part share and Liam gets the 3-part share. The order of the names matches the order of the ratio numbers. Reading the ratio as 3:2 instead would give Aisha the larger share, which the question does not ask for.',
    },
    // Authored, no external source: classroom-observed Year 7 confusion when reading a ratio with a one-part component (1:4 or 5:1) and ignoring the value-of-one-part step.
    {
      id: 'rs-mis-one-part-ignored',
      description:
        'When the ratio includes a 1, I treat the 1 as meaning "one whole" of the original total instead of one part out of the sum.',
      triggerAnswer: 'one-part-ignored',
      correction:
        'Actually a 1 in a ratio means one part, the same way a 2 or a 3 means two or three parts. The value of one part still comes from dividing the total by the sum of the ratio numbers.',
      reExplanation:
        'For 600 g of muesli mixed with raisins in the ratio 5:1, total parts = 6, so one part = 100 g. The raisins share is 1 x 100 g = 100 g, not 600 g. The 1 means one part of 100 g, not the whole 600 g packet.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const ratioSharingZoneNodes = [ratioSharing]
