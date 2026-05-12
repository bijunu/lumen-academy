import type { SkillNode } from '@/types/content'

export const probabilityEquallyLikelyEvents: SkillNode = {
  id: 'maths-probability-equally-likely-events',
  title: 'Equally Likely Outcomes: Theoretical Probability',
  description:
    'When every outcome of an experiment is equally likely, the theoretical probability of an event is P(event) = number of favourable outcomes / total number of equally likely outcomes. Equally likely means each outcome has the same chance: a fair coin (heads or tails 1/2 each), a fair 6-sided die (each face 1/6), a well-shuffled UK 52-card deck. Apply the rule to single experiments and to combined experiments, and write answers as a fraction, a decimal or a percentage.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-probability',
  zoneName: 'Probability',
  tier: 'confident',
  prerequisites: ['maths-probability-scale', 'maths-probability-listing-outcomes'],
  curriculum: {
    ks3Objective:
      'Construct theoretical possibility spaces for single and combined experiments with equally likely, mutually exclusive outcomes and use these to calculate theoretical probabilities.',
    awardingBodies: {
      aqa: 'P7 Construct theoretical possibility spaces for single and combined experiments with equally likely outcomes and use these to calculate theoretical probabilities (GCSE Mathematics 8300)',
      edexcel: 'P7 Construct theoretical possibility spaces for single and combined experiments with equally likely outcomes and use these to calculate theoretical probabilities (GCSE Mathematics 1MA1)',
      ocr: '11.02a Apply ideas of randomness, fairness and equally likely events to calculate expected outcomes of multiple future experiments (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'pel-scene-formula',
      title: 'The Formula: Favourable over Total',
      type: 'diagram',
      instructions:
        'See the formula written out. P(event) is the number of favourable outcomes (the ones that match what you want) divided by the total number of equally likely outcomes. The word equally likely is the gate: each outcome must have the same chance, otherwise the formula does not apply.',
      data: {
        formula: 'P(event) = (number of favourable outcomes) / (total number of equally likely outcomes)',
        examples: [
          { event: 'fair coin lands heads', favourable: 1, total: 2, probability: '1/2' },
          { event: 'fair 6-sided die rolls a 4', favourable: 1, total: 6, probability: '1/6' },
          { event: 'fair 6-sided die rolls an even number', favourable: 3, total: 6, probability: '3/6 = 1/2' },
        ],
        callout:
          'The denominator is always the count of equally likely outcomes, not the count of categories. Equally likely is the assumption that makes the formula work.',
      },
    },
    {
      id: 'pel-scene-coin-die',
      title: 'A Fair Coin and a Fair Die',
      type: 'fraction-wall',
      instructions:
        'Each bar shows the favourable share of the total outcomes for a single experiment. The fair coin has 2 equally likely outcomes; the fair die has 6. Reading P(event) off the bar is the same as reading favourable / total.',
      data: {
        title: 'Single fair experiments',
        bars: [
          { label: 'fair coin: P(heads)', segments: 2, highlightedSegments: 1, value: '1/2' },
          { label: 'fair die: P(rolling a 6)', segments: 6, highlightedSegments: 1, value: '1/6' },
          { label: 'fair die: P(even number {2, 4, 6})', segments: 6, highlightedSegments: 3, value: '3/6 = 1/2' },
          { label: 'fair die: P(prime number {2, 3, 5})', segments: 6, highlightedSegments: 3, value: '3/6 = 1/2' },
        ],
        callout:
          'On a fair die the primes are 2, 3 and 5. The number 1 is not prime, so the count is 3, not 4.',
      },
    },
    {
      id: 'pel-scene-marbles',
      title: 'A Bag of Marbles',
      type: 'fraction-wall',
      instructions:
        'A well-mixed bag is the equally likely model for "pick one item at random". Each marble has the same chance of being chosen. The favourable count is the number of marbles that match the event; the total is every marble in the bag.',
      data: {
        title: 'A bag of 10 marbles: 4 red, 3 blue, 2 green, 1 yellow',
        bars: [
          { label: 'P(red)', segments: 10, highlightedSegments: 4, value: '4/10 = 2/5' },
          { label: 'P(blue)', segments: 10, highlightedSegments: 3, value: '3/10' },
          { label: 'P(green)', segments: 10, highlightedSegments: 2, value: '2/10 = 1/5' },
          { label: 'P(yellow)', segments: 10, highlightedSegments: 1, value: '1/10' },
        ],
        callout:
          'The four probabilities sum to 4/10 + 3/10 + 2/10 + 1/10 = 10/10 = 1, because the four colours cover every marble in the bag.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'pel-worked-1',
      title: 'P(rolling a prime number) on a fair 6-sided die',
      steps: [
        {
          explanation:
            'Write down the sample space for a fair 6-sided die.',
          maths: 'sample space = {1, 2, 3, 4, 5, 6}, total = 6',
        },
        {
          explanation:
            'List the prime numbers on the die. A prime has exactly two factors, 1 and itself. The number 1 is not prime.',
          maths: 'primes on die = {2, 3, 5}',
        },
        {
          explanation:
            'Count the favourable outcomes.',
          maths: 'favourable = 3',
        },
        {
          explanation:
            'Apply the rule probability = favourable / total.',
          maths: 'P(prime) = 3/6',
        },
        {
          explanation:
            'Simplify the fraction by dividing the top and bottom by 3.',
          maths: '3/6 = 1/2',
        },
        {
          explanation:
            'State the answer in three matching forms so the value is easy to recognise.',
          maths: 'P(prime) = 1/2 = 0.5 = 50 percent',
        },
      ],
    },
    {
      id: 'pel-worked-2',
      title: 'P(red marble) from a bag of 4 red, 3 blue, 2 green, 1 yellow',
      steps: [
        {
          explanation:
            'Find the total number of marbles by adding every colour.',
          maths: 'total = 4 + 3 + 2 + 1 = 10',
        },
        {
          explanation:
            'The favourable outcome is "red". Count the red marbles.',
          maths: 'favourable = 4',
        },
        {
          explanation:
            'Each marble is equally likely to be picked from a well-mixed bag, so the formula applies.',
          maths: 'P(red) = favourable / total',
        },
        {
          explanation:
            'Substitute the numbers into the formula.',
          maths: 'P(red) = 4/10',
        },
        {
          explanation:
            'Simplify the fraction by dividing the top and bottom by 2.',
          maths: '4/10 = 2/5',
        },
        {
          explanation:
            'Convert to a decimal as a check.',
          maths: '2/5 = 0.4 = 40 percent',
        },
      ],
    },
  ],
  questions: [
    // Core 1
    {
      id: 'pel-q1',
      type: 'multiple-choice',
      stem: 'A fair 6-sided die is rolled. What is P(rolling a 4)?',
      tier: 'core',
      options: ['1/6', '1/3', '1/2', '4/6'],
      correctIndex: 0,
      xpValue: 10,
      hint: 'There is 1 favourable face (the 4) out of 6 equally likely faces.',
    },
    // Core 2
    {
      id: 'pel-q2',
      type: 'numeric-entry',
      stem: 'A fair coin is tossed. What is the probability it lands tails, as a decimal?',
      tier: 'core',
      correctAnswer: 0.5,
      tolerance: 0.001,
      xpValue: 10,
      hint: 'A fair coin has 2 equally likely outcomes: heads or tails. P(tails) = 1/2.',
    },
    // Core 3
    {
      id: 'pel-q3',
      type: 'multiple-choice',
      stem: 'A bag holds 5 counters: 2 red and 3 blue. Each counter is equally likely to be picked. What is P(red)?',
      tier: 'core',
      options: ['1/2', '3/5', '2/5', '2/3'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Favourable = number of red counters = 2. Total = number of counters = 5.',
    },
    // Core 4
    {
      id: 'pel-q4',
      type: 'multiple-choice',
      stem: 'Which of these formulae gives the theoretical probability of an event when all outcomes are equally likely?',
      tier: 'core',
      options: [
        'P(event) = total outcomes / favourable outcomes',
        'P(event) = favourable outcomes / unfavourable outcomes',
        'P(event) = favourable outcomes / total outcomes',
        'P(event) = favourable outcomes - total outcomes',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pel-mis-equally-likely-ignored',
      hint: 'The denominator is always the total count of equally likely outcomes, not the count of unfavourable ones.',
    },
    // Core 5
    {
      id: 'pel-q5',
      type: 'numeric-entry',
      stem: 'A fair 6-sided die is rolled. What is P(rolling an even number)? Give your answer as a decimal.',
      tier: 'core',
      correctAnswer: 0.5,
      tolerance: 0.001,
      xpValue: 10,
      hint: 'Even faces: 2, 4, 6. That is 3 favourable out of 6 total. 3/6 = 0.5.',
    },
    // Core 6
    {
      id: 'pel-q6',
      type: 'multiple-choice',
      stem: 'A spinner is split into 4 equal sectors coloured red, blue, green, yellow. What is P(spinner lands on green)?',
      tier: 'core',
      options: ['1/2', '1/3', '1/8', '1/4'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Equal sectors means each colour is equally likely. 1 favourable sector out of 4 total.',
    },
    // Core 7
    {
      id: 'pel-q7',
      type: 'multiple-choice',
      stem: 'Aisha says "P(rolling a 6 on a fair die) is 1/2 because either I roll a 6 or I do not." Which row is correct?',
      tier: 'core',
      options: [
        'P(6) = 1/2, because there are two cases.',
        'P(6) = 1/6, because there are 6 equally likely faces and 1 of them is the 6.',
        'P(6) = 2/6, because there are 6 faces and 2 cases.',
        'P(6) = 1, because the roll always gives a face.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pel-mis-do-or-dont',
      hint: 'The formula needs equally likely outcomes. The 6 faces are equally likely; the two cases "6" and "not 6" are not.',
    },
    // Confident 1
    {
      id: 'pel-q8',
      type: 'numeric-entry',
      stem: 'A bag has 4 red, 3 blue, 2 green and 1 yellow marble. One marble is taken at random. What is P(green) as a decimal?',
      tier: 'confident',
      correctAnswer: 0.2,
      tolerance: 0.001,
      xpValue: 15,
      hint: 'Total = 4 + 3 + 2 + 1 = 10. Favourable = 2. So P(green) = 2/10 = 0.2.',
    },
    // Confident 2
    {
      id: 'pel-q9',
      type: 'multiple-choice',
      stem: 'A fair 6-sided die is rolled. What is P(rolling a prime number)?',
      tier: 'confident',
      options: ['4/6', '3/6', '2/6', '5/6'],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'pel-mis-prime-includes-1',
      hint: 'The primes on the die are 2, 3 and 5. The number 1 is not prime, so it is not counted.',
    },
    // Confident 3
    {
      id: 'pel-q10',
      type: 'numeric-entry',
      stem: 'Two fair coins are tossed at the same time. The sample space is {HH, HT, TH, TT}. What is P(both heads) as a decimal?',
      tier: 'confident',
      correctAnswer: 0.25,
      tolerance: 0.001,
      xpValue: 15,
      hint: 'Only one cell (HH) gives both heads. Total cells = 4. P = 1/4 = 0.25.',
    },
    // Confident 4
    {
      id: 'pel-q11',
      type: 'multiple-choice',
      stem: 'A bag has 8 counters: 3 red, 4 blue, 1 green. Liam writes "P(red) = 3/3 because there are 3 colours and red is one of them, so 1/3, but I count colours." Which row is correct?',
      tier: 'confident',
      options: [
        'P(red) = 3/3 = 1, because red is one of the three colours.',
        'P(red) = 1/3 = 0.33, because red is one of the three colours.',
        'P(red) = 3/8, because the denominator counts the equally likely items, not the colours.',
        'P(red) = 5/8, because the other counters are not red.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pel-mis-categories-not-items',
      hint: 'Equally likely items in this bag are individual counters (8 of them), not colour groups.',
    },
    // Confident 5
    {
      id: 'pel-q12',
      type: 'multiple-choice',
      stem: 'A spinner has 5 equal sectors numbered 1 to 5. What is P(landing on a number greater than 2)?',
      tier: 'confident',
      options: ['2/5', '4/5', '3/5', '1/5'],
      correctIndex: 2,
      xpValue: 15,
      hint: 'Numbers greater than 2 are 3, 4, 5. That is 3 favourable out of 5 total.',
    },
    // Confident 6
    {
      id: 'pel-q13',
      type: 'spot-misconception',
      stem: 'Sam tosses a fair coin and writes "P(heads) = 1/3 because the coin can land heads, tails, or on its edge."',
      tier: 'confident',
      statements: [
        {
          text: 'Sam is right. The coin has three possible outcomes, so each has probability 1/3.',
          isMisconception: true,
        },
        {
          text: 'In fact a fair coin model has two equally likely outcomes: heads and tails. The chance of an edge landing is treated as zero, so P(heads) = 1/2.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pel-mis-extra-outcomes',
    },
    // Confident 7
    {
      id: 'pel-q14',
      type: 'drag-order',
      stem: 'Order these steps for finding P(rolling a 1 or 2) on a fair 6-sided die.',
      tier: 'confident',
      items: [
        'Apply the formula: P(1 or 2) = 2/6 = 1/3.',
        'List the sample space: {1, 2, 3, 4, 5, 6}, so total = 6.',
        'Confirm each face is equally likely (the die is fair).',
        'List the favourable outcomes: {1, 2}, so favourable = 2.',
      ],
      correctOrder: [2, 1, 3, 0],
      xpValue: 15,
      hint: 'Check the equally likely assumption first, list the sample space, then count favourable outcomes, then divide.',
    },
    // Confident 8
    {
      id: 'pel-q15',
      type: 'missing-step',
      stem: 'Fill in the missing step. A bag has 12 sweets: 5 lemon, 4 lime, 3 cherry. One sweet is taken at random. Find P(lime) as a decimal.',
      tier: 'confident',
      steps: [
        'Total number of sweets: 5 + 4 + 3 = 12.',
        'Favourable count for lime: 4.',
        null,
        'Convert to a decimal: 4/12 = 1/3 = 0.33 (to 2 dp).',
      ],
      missingStepIndex: 2,
      correctStep: 'Apply the formula: P(lime) = favourable / total = 4/12.',
      xpValue: 20,
    },
    // Challenge 1 (Bond-style multi-step word problem)
    {
      id: 'pel-q16',
      type: 'numeric-entry',
      stem: 'A Sevenoaks tuck shop has a tin of 30 chocolates: 12 milk, 10 dark and the rest are white. One chocolate is taken at random. What is P(white) as a decimal?',
      tier: 'challenge',
      correctAnswer: 0.27,
      tolerance: 0.01,
      xpValue: 25,
      hint: 'First find the number of white chocolates: 30 - 12 - 10 = 8. Then P(white) = 8/30.',
    },
    // Challenge 2
    {
      id: 'pel-q17',
      type: 'multiple-choice',
      stem: 'A fair 8-sided die has faces numbered 1 to 8. Which row is correct for P(rolling a prime number)?',
      tier: 'challenge',
      options: [
        'Primes are 1, 2, 3, 5, 7, so P = 5/8.',
        'Primes are 2, 3, 5, 7, so P = 4/8 = 1/2.',
        'Primes are 2, 3, 5, so P = 3/8.',
        'Primes are 2, 3, 5, 7, but the denominator is 7, so P = 4/7.',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'pel-mis-prime-includes-1',
      hint: 'List the primes from 1 to 8 (1 is not prime). The denominator is the total faces, which is 8.',
    },
    // Challenge 3
    {
      id: 'pel-q18',
      type: 'numeric-entry',
      stem: 'A Tunbridge Wells school raffle has 200 tickets and 8 prize tickets. Each ticket is equally likely to be drawn. What is the probability that one ticket drawn at random is a prize ticket, as a decimal?',
      tier: 'challenge',
      correctAnswer: 0.04,
      tolerance: 0.001,
      xpValue: 25,
      hint: 'Favourable = 8 prize tickets. Total = 200 tickets. P = 8/200.',
    },
    // Challenge 4
    {
      id: 'pel-q19',
      type: 'multiple-choice',
      stem: 'Two fair 6-sided dice are rolled and the scores are added. The sample space is a 6 by 6 grid of 36 cells. What is P(sum is exactly 5)?',
      tier: 'challenge',
      options: ['5/36', '4/36', '3/36', '6/36'],
      correctIndex: 1,
      xpValue: 25,
      hint: 'Pairs that sum to 5: (1,4), (2,3), (3,2), (4,1). That is 4 cells out of 36.',
    },
    // Challenge 5
    {
      id: 'pel-q20',
      type: 'numeric-entry',
      stem: 'A Manchester sports club has 40 members: 18 play hockey, 14 play netball and the rest only play tennis. One member is chosen at random. What is the probability they only play tennis, as a decimal?',
      tier: 'challenge',
      correctAnswer: 0.2,
      tolerance: 0.001,
      xpValue: 25,
      hint: 'Tennis only = 40 - 18 - 14 = 8 members. P(tennis only) = 8/40 = 0.2.',
    },
    // Challenge 6
    {
      id: 'pel-q21',
      type: 'spot-misconception',
      stem: 'A bag has 20 counters: 6 red, 9 blue, 5 green. Sam writes "P(red) = 6/14, since there are 14 counters that are not red."',
      tier: 'challenge',
      statements: [
        {
          text: 'Sam is right. The denominator is the count of unfavourable counters, which is 14.',
          isMisconception: true,
        },
        {
          text: 'In fact the denominator is the total number of equally likely items in the bag (6 + 9 + 5 = 20). So P(red) = 6/20 = 3/10 = 0.3.',
          isMisconception: false,
        },
      ],
      xpValue: 25,
      misconceptionId: 'pel-mis-fav-over-unfav',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a "rolling a 6" probability question where pupils answered 1/2 by reasoning that there were two cases ("a 6" and "not a 6") and treating them as equally likely.
    {
      id: 'pel-mis-do-or-dont',
      description:
        'I think P(an event) is 1/2 whenever there are two cases ("it happens" or "it does not"), so I write P(rolling a 6) = 1/2 on a fair die.',
      triggerAnswer: 'do-or-dont',
      correction:
        'Actually the formula needs equally likely outcomes. On a fair die the 6 faces are equally likely, so P(any one face) = 1/6.',
      reExplanation:
        'A fair die has 6 equally likely faces: 1, 2, 3, 4, 5, 6. P(rolling a 6) = 1 favourable / 6 total = 1/6. The cases "a 6" and "not a 6" are not equally likely: "not a 6" covers 5 of the 6 faces and so has probability 5/6. Counting outcomes, not cases, fixes this.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a "bag of counters" probability question where pupils gave the denominator as the number of colours rather than the number of counters.
    {
      id: 'pel-mis-categories-not-items',
      description:
        'I find a probability by counting categories, not items. So in a bag with 3 red, 4 blue and 1 green counter, I write P(red) = 1/3 because there are 3 colour groups.',
      triggerAnswer: 'categories-not-items',
      correction:
        'In fact probability uses counts of equally likely items, not counts of category labels. The denominator is the total number of items in the bag.',
      reExplanation:
        'For a bag with 3 red, 4 blue and 1 green counter, the equally likely items are individual counters: 3 + 4 + 1 = 8 in total. P(red) = 3/8. The 1/3 answer would only fit if you picked a colour group at random, which is a different experiment.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2022, Paper 01 (Foundation, Non-calculator), commentary on a "prime numbers on a die" question where pupils included 1 as a prime and answered 4/6 instead of 3/6.
    {
      id: 'pel-mis-prime-includes-1',
      description:
        'When counting primes on a die or spinner, I include 1 in the prime list, so I write P(prime on a fair die) = 4/6.',
      triggerAnswer: 'prime-includes-1',
      correction:
        'Actually 1 is not prime. A prime has exactly two factors: 1 and itself. So 1 has only one factor.',
      reExplanation:
        'On a fair 6-sided die, the primes are 2, 3 and 5. P(prime) = 3/6 = 1/2. Including 1 as a prime gives the wrong count of 4. The definition is the gate: a prime number must have exactly two distinct positive factors, so 1 fails the test.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 2F (Foundation, Calculator), commentary on a "favourable over unfavourable" slip where pupils used the count of items not matching the event as the denominator.
    {
      id: 'pel-mis-fav-over-unfav',
      description:
        'I write P(event) as favourable / unfavourable, so for a bag of 6 red and 14 blue I write P(red) = 6/14.',
      triggerAnswer: 'fav-over-unfav',
      correction:
        'In fact the denominator is the total number of equally likely outcomes (6 + 14 = 20), not the unfavourable count.',
      reExplanation:
        'For a bag of 6 red and 14 blue counters, the total is 20. P(red) = 6/20 = 3/10. The favourable / unfavourable form would always give a number bigger than 1 when red is in the majority, which is not a valid probability. The correct denominator is everything in the bag.',
    },
    // Source: NCETM "Misconceptions and how to overcome them: probability" Year 7 transition pack, on pupils inventing extra outcomes (a coin landing on its edge, a die landing on a corner) and so dividing 1 by 3 instead of 2.
    {
      id: 'pel-mis-extra-outcomes',
      description:
        'I add extra outcomes to a fair coin or die (such as a coin landing on its edge), so I divide by 3 instead of 2.',
      triggerAnswer: 'extra-outcomes',
      correction:
        'Actually the fair coin model has 2 equally likely outcomes: heads and tails. The edge case has probability 0 in this model.',
      reExplanation:
        'A fair coin has 2 equally likely outcomes, so P(heads) = 1/2 and P(tails) = 1/2. They sum to 1, which means every outcome is covered. Adding a third outcome breaks the model, since the new probabilities no longer add to 1 with a sensible value.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 2F (Foundation, Calculator), commentary on the "fair versus biased" slip where pupils applied the equally likely formula to a biased coin or weighted spinner.
    {
      id: 'pel-mis-equally-likely-ignored',
      description:
        'I apply the favourable / total formula even when the outcomes are not equally likely, such as a weighted spinner or a biased coin.',
      triggerAnswer: 'equally-likely-ignored',
      correction:
        'Actually the formula only works when every outcome has the same chance. For a biased experiment, use experimental data instead.',
      reExplanation:
        'On a fair 6-sided die, P(any face) = 1/6, because the 6 faces are equally likely. On a weighted spinner where one sector is twice as wide, the wider sector has twice the chance, so the simple count formula fails. Always check the equally likely word before reaching for favourable / total.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const probabilityEquallyLikelyEventsZoneNodes = [probabilityEquallyLikelyEvents]
