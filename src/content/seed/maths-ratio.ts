import type { SkillNode } from '@/types/content'

export const ratioIntroduction: SkillNode = {
  id: 'maths-ratio-introduction',
  title: 'Introducing Ratio',
  description:
    'Read and write ratios in colon notation, understand a ratio as a part-to-part comparison, see how it differs from a fraction, recognise equivalent ratios, and simplify a ratio to its simplest form using the highest common factor.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-ratio',
  zoneName: 'Ratio and Proportion',
  tier: 'core',
  prerequisites: [],
  curriculum: {
    ks3Objective:
      'Use ratio notation, including reduction to simplest form.',
    awardingBodies: {
      aqa: 'R1 Introduction to ratios',
      edexcel: 'R5 Ratio notation',
      ocr: '6.01a Ratio notation and equivalent ratios',
    },
  },
  scenes: [
    {
      id: 'ri-scene-bead-mixer',
      title: 'Mix the Beads',
      type: 'simulation',
      instructions:
        'Drag red and blue beads into the tray, then read off the ratio of red to blue as the count changes.',
      data: {
        bead: { kinds: ['red', 'blue'] },
        startCounts: { red: 2, blue: 3 },
        maxPerKind: 12,
        readouts: [
          { label: 'Ratio red to blue', format: 'r:b' },
          { label: 'Total beads', format: 'r+b' },
          { label: 'Fraction red of total', format: 'r/(r+b)' },
        ],
        notes:
          'A ratio of 2:3 means 2 red beads for every 3 blue beads, so 5 beads in total. The fraction of red beads is 2 out of 5, written 2/5.',
      },
    },
    {
      id: 'ri-scene-stretch-shrink',
      title: 'Stretch and Shrink',
      type: 'simulation',
      instructions:
        'Drag the slider to scale a 2:3 ratio of squares up and down, and watch the colon ratio stay equivalent.',
      data: {
        baseRatio: { left: 2, right: 3 },
        sliderRange: { min: 1, max: 8, step: 1 },
        sliderLabel: 'Multiplier k',
        showAt: [1, 2, 3, 4, 5],
        derived: 'When k = 2, the ratio is 4:6. When k = 3, it is 6:9. All scale to 2:3.',
      },
    },
    {
      id: 'ri-scene-ratio-vs-fraction',
      title: 'Ratio Next to Fraction',
      type: 'diagram',
      instructions:
        'Click each pair to compare a ratio (part to part) with the fraction (part to whole) it implies.',
      data: {
        pairs: [
          {
            ratio: { red: 2, blue: 3 },
            partToPart: '2:3',
            fractionRedOfTotal: '2/5',
            note:
              'The ratio compares red to blue. The fraction compares red to the whole bag of 5 beads.',
          },
          {
            ratio: { red: 1, blue: 4 },
            partToPart: '1:4',
            fractionRedOfTotal: '1/5',
            note:
              'For every 1 red bead there are 4 blue beads, so 1 in 5 beads is red.',
          },
          {
            ratio: { red: 3, blue: 7 },
            partToPart: '3:7',
            fractionRedOfTotal: '3/10',
            note:
              'Ratio 3:7 means 3 red and 7 blue, a total of 10. The fraction of red beads is 3/10.',
          },
        ],
      },
    },
    {
      id: 'ri-scene-simplify-grid',
      title: 'Common Factor Grid',
      type: 'diagram',
      instructions:
        'Click numbers in the two factor lists to find the highest common factor and watch the ratio simplify.',
      data: {
        examples: [
          {
            ratio: '6:9',
            factorsLeft: [1, 2, 3, 6],
            factorsRight: [1, 3, 9],
            commonFactors: [1, 3],
            hcf: 3,
            simplest: '2:3',
          },
          {
            ratio: '12:18',
            factorsLeft: [1, 2, 3, 4, 6, 12],
            factorsRight: [1, 2, 3, 6, 9, 18],
            commonFactors: [1, 2, 3, 6],
            hcf: 6,
            simplest: '2:3',
          },
          {
            ratio: '15:25',
            factorsLeft: [1, 3, 5, 15],
            factorsRight: [1, 5, 25],
            commonFactors: [1, 5],
            hcf: 5,
            simplest: '3:5',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'ri-worked-1',
      title: 'Writing a ratio from a picture',
      steps: [
        {
          explanation:
            'A jar holds 4 red beads and 6 blue beads. We want the ratio of red to blue.',
          maths: 'red : blue',
        },
        {
          explanation:
            'A ratio compares two parts of the same whole. Write the red count first, then a colon, then the blue count.',
          maths: '4 : 6',
        },
        {
          explanation:
            'Check for a common factor. Both 4 and 6 share a factor of 2.',
          maths: 'HCF(4, 6) = 2',
        },
        {
          explanation:
            'Divide both sides of the ratio by 2 to write it in its simplest form.',
          maths: '4 / 2 : 6 / 2 = 2 : 3',
        },
        {
          explanation: 'So the ratio of red to blue is 2:3 in its simplest form.',
          maths: 'red : blue = 2 : 3',
        },
      ],
    },
    {
      id: 'ri-worked-2',
      title: 'Simplifying the ratio 18:24 using the HCF',
      steps: [
        {
          explanation:
            'We have the ratio 18:24 and we want to write it in its simplest form.',
          maths: '18 : 24',
        },
        {
          explanation:
            'List the factors of each number to find the largest one they share.',
          maths: 'Factors of 18: 1, 2, 3, 6, 9, 18\nFactors of 24: 1, 2, 3, 4, 6, 8, 12, 24',
        },
        {
          explanation: 'The largest common factor is 6.',
          maths: 'HCF(18, 24) = 6',
        },
        {
          explanation:
            'Divide both sides of the ratio by 6. Whatever you do to one side you must do to the other.',
          maths: '18 / 6 : 24 / 6',
        },
        {
          explanation: 'So 18:24 simplifies to 3:4.',
          maths: '18 : 24 = 3 : 4',
        },
      ],
    },
  ],
  questions: [
    // Core 1
    {
      id: 'ri-q1',
      type: 'multiple-choice',
      stem: 'A box contains 3 red beads and 5 blue beads. What is the ratio of red beads to blue beads?',
      tier: 'core',
      options: ['5:3', '3:5', '3:8', '8:3'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'ri-mis-order',
    },
    // Core 2
    {
      id: 'ri-q2',
      type: 'multiple-choice',
      stem: 'In the ratio 4:7, what does the 4 stand for?',
      tier: 'core',
      options: [
        'The number of items in the first part of the comparison',
        'The total number of items',
        'The fraction of the whole that is the first part',
        'The difference between the two parts',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'ri-mis-as-fraction',
    },
    // Core 3
    {
      id: 'ri-q3',
      type: 'numeric-entry',
      stem: 'A jug of squash mixes 1 part cordial to 4 parts water. How many parts in total are in the jug?',
      tier: 'core',
      correctAnswer: 5,
      xpValue: 10,
      hint: 'Add the two numbers in the ratio together.',
    },
    // Core 4
    {
      id: 'ri-q4',
      type: 'multiple-choice',
      stem: 'Which ratio is written in its simplest form?',
      tier: 'core',
      options: ['4:6', '3:5', '6:9', '8:12'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'ri-mis-partial',
    },
    // Core 5
    {
      id: 'ri-q5',
      type: 'numeric-entry',
      stem: 'Simplify the ratio 6:8. What number goes on the left of the colon in simplest form?',
      tier: 'core',
      correctAnswer: 3,
      xpValue: 10,
      hint: 'Find the highest common factor of 6 and 8, then divide both sides by it.',
    },
    // Core 6
    {
      id: 'ri-q6',
      type: 'multiple-choice',
      stem: 'A bag has 2 red sweets for every 3 green sweets. What fraction of the sweets in the bag are red?',
      tier: 'core',
      options: ['2/3', '3/5', '2/5', '3/2'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'ri-mis-as-fraction',
    },
    // Core 7
    {
      id: 'ri-q7',
      type: 'numeric-entry',
      stem: 'Simplify the ratio 10:15. What number goes on the right of the colon in simplest form?',
      tier: 'core',
      correctAnswer: 3,
      xpValue: 10,
      hint: 'The HCF of 10 and 15 is 5.',
    },
    // Core 8
    {
      id: 'ri-q8',
      type: 'spot-misconception',
      stem: 'Liam says the ratio 2:3 of red to blue beads means 2/3 of the beads in the jar are red. Is he right?',
      tier: 'core',
      statements: [
        {
          text: 'Liam is right: in a ratio of 2:3, 2 out of 3 beads are red.',
          isMisconception: true,
        },
        {
          text: 'In fact 2:3 means 2 red for every 3 blue, so 2 out of 5 beads are red, not 2 out of 3.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'ri-mis-as-fraction',
    },
    // Confident 1
    {
      id: 'ri-q9',
      type: 'multiple-choice',
      stem: 'Which ratio is equivalent to 2:5?',
      tier: 'confident',
      options: ['4:7', '5:2', '3:6', '6:15'],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'ri-mis-add',
    },
    // Confident 2
    {
      id: 'ri-q10',
      type: 'multiple-choice',
      stem: 'Which of these is NOT equivalent to 3:4?',
      tier: 'confident',
      options: ['6:8', '9:12', '12:16', '5:6'],
      correctIndex: 3,
      xpValue: 15,
    },
    // Confident 3
    {
      id: 'ri-q11',
      type: 'numeric-entry',
      stem: 'A squash recipe mixes 1 part cordial to 5 parts water. If a learner uses 3 parts cordial, how many parts of water are needed to keep the same ratio?',
      tier: 'confident',
      correctAnswer: 15,
      xpValue: 15,
      hint: 'Whatever you multiply the cordial by, you must multiply the water by too.',
    },
    // Confident 4
    {
      id: 'ri-q12',
      type: 'multiple-choice',
      stem: 'A pupil writes 12:18 in simpler form by dividing only the left side by 6. They write 2:18. Why is this wrong?',
      tier: 'confident',
      options: [
        '2:18 is already in simplest form, so they finished too early.',
        '12 should have been divided by 12 instead of 6.',
        'They must divide the right side by 6 as well, giving 2:3.',
        'The ratio should be flipped to 18:12 first.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'ri-mis-divide-only-one',
    },
    // Confident 5
    {
      id: 'ri-q13',
      type: 'numeric-entry',
      stem: 'Complete the equivalent ratio: 3:7 = 12:?',
      tier: 'confident',
      correctAnswer: 28,
      xpValue: 15,
      hint: 'What do you multiply 3 by to get 12? Apply the same multiplier to 7.',
    },
    // Confident 6
    {
      id: 'ri-q14',
      type: 'drag-order',
      stem: 'These ratios all simplify to one of three different simplest forms. Place them in the order 1:2, 1:3, 2:5, 3:4.',
      tier: 'confident',
      items: ['6:8', '5:10', '4:10', '3:9'],
      correctOrder: [1, 3, 2, 0],
      xpValue: 20,
    },
    // Confident 7
    {
      id: 'ri-q15',
      type: 'missing-step',
      stem: 'Fill in the missing step in this worked solution. Simplify the ratio 24:36 to its simplest form.',
      tier: 'confident',
      steps: [
        'Start with the ratio 24:36 and look for a common factor of 24 and 36.',
        'List the factors. Factors of 24 include 1, 2, 3, 4, 6, 8, 12, 24. Factors of 36 include 1, 2, 3, 4, 6, 9, 12, 18, 36. The largest factor in both lists is 12.',
        null,
        'So 24:36 simplifies to 2:3.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Divide both sides of the ratio by 12. 24 divided by 12 is 2, and 36 divided by 12 is 3.',
      xpValue: 20,
    },
    // Confident 8
    {
      id: 'ri-q16',
      type: 'multiple-choice',
      stem: 'A pupil tries to simplify 9:15 by subtracting 3 from each side. They write 6:12. What has gone wrong?',
      tier: 'confident',
      options: [
        'You simplify a ratio by dividing both sides by a common factor, not by subtracting the same number.',
        'Nothing. 6:12 is the simplest form of 9:15.',
        'They should have subtracted 3 only from the larger side.',
        'They should have added 3 to each side instead.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'ri-mis-add',
    },
    // Challenge 1
    {
      id: 'ri-q17',
      type: 'numeric-entry',
      stem: 'A Year 7 form has 28 pupils. The ratio of pupils who walk to school to those who come by bus is 3:4. The pupils who walk include both girls and boys, with 3 girls for every boy among walkers. How many girls walk to school?',
      tier: 'challenge',
      correctAnswer: 9,
      xpValue: 25,
      hint: 'First find the total number of walkers, then split that group in the ratio 3:1.',
    },
    // Challenge 2
    {
      id: 'ri-q18',
      type: 'multiple-choice',
      stem: 'A drinks stall in Tunbridge Wells mixes cordial and water in the ratio 2:9. The owner buys 22 litres of cordial. How many litres of water does the stall need to use it all?',
      tier: 'challenge',
      options: ['9 litres', '11 litres', '99 litres', '44 litres'],
      correctIndex: 2,
      xpValue: 20,
    },
    // Challenge 3
    {
      id: 'ri-q19',
      type: 'numeric-entry',
      stem: 'In a Sevenoaks book club of 30 members, the ratio of fiction lovers to non-fiction lovers is 7:3. Two non-fiction lovers swap and become fiction lovers. What is the new ratio of fiction to non-fiction in its simplest form? Write the number on the right of the colon.',
      tier: 'challenge',
      correctAnswer: 1,
      xpValue: 25,
      hint: 'First find the original counts. Then move 2 members and simplify the new ratio.',
    },
    // Challenge 4
    {
      id: 'ri-q20',
      type: 'multiple-choice',
      stem: 'Aisha mixes paint in the ratio 5:3 of blue to yellow. Liam mixes 10 ml of blue with 9 ml of yellow. Which statement is correct?',
      tier: 'challenge',
      options: [
        'Liam used more blue than Aisha would for the same amount of yellow.',
        'Liam used too much yellow for Aisha\'s ratio. Aisha would have used 6 ml of yellow with 10 ml of blue.',
        'The two mixes are the same colour because both have more blue than yellow.',
        'The mixes match because 5+3 equals 10 minus 1 plus 9 minus 9.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'ri-mis-different-multipliers',
    },
    // Challenge 5
    {
      id: 'ri-q21',
      type: 'spot-misconception',
      stem: 'A pupil sees the ratio 4:6 and writes "the difference is 2, so the simplest form is 1:1 with a gap of 2". Is the pupil correct?',
      tier: 'challenge',
      statements: [
        {
          text: 'The pupil is correct because both sides go down by the same amount.',
          isMisconception: true,
        },
        {
          text: 'In fact a ratio is simplified by dividing both sides by the same factor, not by tracking the difference. 4:6 simplifies to 2:3, not 1:1.',
          isMisconception: false,
        },
      ],
      xpValue: 25,
      misconceptionId: 'ri-mis-difference',
    },
    {
      id: 'ri-q22',
      type: 'slider-explore',
      stem: 'A squash drink is mixed in the ratio 2 parts squash to 5 parts water. Use the slider to choose how many millilitres of squash to use so that the finished drink fills a 350 ml glass exactly. How much squash do you need?',
      tier: 'challenge',
      min: 0,
      max: 200,
      step: 10,
      correctRange: [100, 100],
      label: 'Squash (ml)',
      xpValue: 25,
      hint: 'The 2 squash and 5 water make 7 parts in total. What value of one part fills 350 ml when multiplied by 7?',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Maths Foundation tier examiner reports, recurring KS3 confusion of ratio with fraction (verify 2022 paper 1, Q9 wording)
    {
      id: 'ri-mis-as-fraction',
      description:
        'A ratio of 2:3 of red to blue beads means 2/3 of the beads are red.',
      triggerAnswer: 'as-fraction',
      correction:
        'In fact a ratio compares two parts to each other. The fraction of red is 2 out of 2 + 3 = 5, so 2/5 of the beads are red.',
      reExplanation:
        'Picture 2 red beads and 3 blue beads in a row. The ratio red to blue is 2:3 because that compares the two groups. The fraction of red beads is 2 out of all 5 beads, written 2/5. The fraction looks at the whole; the ratio looks at the parts.',
    },
    // Source: CGP KS3 Maths Study Guide, Common mistake on ratio order (verify page in ratio chapter)
    {
      id: 'ri-mis-order',
      description:
        'The order of the numbers in a ratio does not matter, so 2:3 and 3:2 mean the same thing.',
      triggerAnswer: 'order',
      correction:
        'Actually the order matches the wording. A ratio of red to blue of 2:3 has red on the left and blue on the right; flipping it gives a different ratio.',
      reExplanation:
        'If a stem says the ratio of red to blue is 2:3, write the red count first, then the blue count: 2:3. The ratio 3:2 would mean 3 red for every 2 blue, which is a completely different mix.',
    },
    // Source: CGP KS3 Maths Study Guide, Common mistake on simplifying ratios (verify page in ratio chapter)
    {
      id: 'ri-mis-add',
      description:
        'I can simplify a ratio by adding or subtracting the same number from both sides.',
      triggerAnswer: 'add',
      correction:
        'In fact you simplify a ratio by dividing both sides by the same common factor. Adding or subtracting changes the ratio.',
      reExplanation:
        'The ratio 4:6 has parts in the relationship 2 to 3. Subtracting 3 from each side gives 1:3, which is a different relationship. Dividing both sides by 2 gives 2:3, which keeps the same relationship and is the simplest form.',
    },
    // Source: CGP KS3 Maths Study Guide, Common mistake on choosing the highest common factor (verify ratio chapter page)
    {
      id: 'ri-mis-partial',
      description:
        'Once I have divided both sides of a ratio by a common factor, the ratio is in its simplest form.',
      triggerAnswer: 'partial',
      correction:
        'Actually you must divide by the highest common factor. If the two sides still share a factor, you can simplify further.',
      reExplanation:
        '12:18 divided by 2 gives 6:9. Both 6 and 9 still share a factor of 3, so 6:9 is not yet the simplest form. Divide by 3 again to reach 2:3, which is fully simplified.',
    },
    // Source: Edexcel GCSE Maths Foundation tier examiner observations on ratio simplification (verify 2023 report, Q4 commentary)
    {
      id: 'ri-mis-divide-only-one',
      description:
        'I can simplify a ratio by dividing only the left side (or only the right side) by a common factor.',
      triggerAnswer: 'divide-only-one',
      correction:
        'Actually whatever you do to one side of a ratio you must do to the other side, just like with equivalent fractions.',
      reExplanation:
        '12:18 with only 12 divided by 6 gives 2:18, which has a much smaller left side compared with the original. Dividing both sides by 6 gives 2:3, which keeps the same relationship between the parts.',
    },
    // Source: OCR GCSE Maths Foundation tier examiner observations on equivalent ratios (verify 2022 report, ratio question)
    {
      id: 'ri-mis-different-multipliers',
      description:
        'I can scale each side of a ratio by a different number, as long as both numbers feel about right.',
      triggerAnswer: 'different-multipliers',
      correction:
        'Actually equivalent ratios use the same multiplier on both sides. Different multipliers give a different ratio.',
      reExplanation:
        'For 5:3 to stay the same shape, multiplying the left by 2 means multiplying the right by 2 as well, giving 10:6. If you multiply the left by 2 and the right by 3, you get 10:9, which is a different ratio.',
    },
    // Authored, no external source
    {
      id: 'ri-mis-difference',
      description:
        'A ratio describes the difference between two parts, so 4:6 is the same shape as 1:3 because both have a gap of 2 or 3.',
      triggerAnswer: 'difference',
      correction:
        'Actually a ratio describes how the two parts compare by multiplication, not by subtraction.',
      reExplanation:
        '4:6 has the right side one and a half times the left side. 1:3 has the right side three times the left side. The two ratios scale differently. To simplify 4:6, divide both sides by the highest common factor of 2, giving 2:3.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const ratioZoneNodes = [ratioIntroduction]
