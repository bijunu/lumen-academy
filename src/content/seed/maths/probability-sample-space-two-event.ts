import type { SkillNode } from '@/types/content'

export const probabilitySampleSpaceTwoEvent: SkillNode = {
  id: 'maths-probability-sample-space-two-event',
  title: 'Sample Space Diagrams for Two Events',
  description:
    'Build a sample space diagram for two events using a grid or two-way table, then count favourable cells to find a probability. Two coins fill a 2 by 2 grid (4 cells: HH, HT, TH, TT). A coin and a die fill a 2 by 6 grid (12 cells). Two dice fill a 6 by 6 grid (36 cells). Use the grid to answer questions like P(sum is 7), P(both even) and P(matching faces).',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-probability',
  zoneName: 'Probability',
  tier: 'confident',
  prerequisites: ['maths-probability-listing-outcomes'],
  curriculum: {
    ks3Objective:
      'Generate theoretical sample spaces for combined events with equally likely, mutually exclusive outcomes using grids and tables.',
    awardingBodies: {
      aqa: 'P7 Construct theoretical possibility spaces for combined experiments and use these to calculate theoretical probabilities (GCSE Mathematics 8300)',
      edexcel: 'P7 Construct sample space diagrams for combined events (GCSE Mathematics 1MA1)',
      ocr: '11.03a Construct sample space diagrams for two-event experiments (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'pss-scene-two-coins-grid',
      title: 'Two Coins: A 2 by 2 Sample Space',
      type: 'diagram',
      instructions:
        'Read the 2 by 2 grid for two fair coins. Coin 1 sits on the rows, coin 2 on the columns. Each cell is one equally likely outcome of the pair: HH, HT, TH, TT. The four cells together form the full sample space, so each cell has probability 1/4. P(at least one head) counts HH, HT and TH, giving 3/4. P(both heads) is one cell, so 1/4.',
      data: {
        rowsLabel: 'Coin 1',
        colsLabel: 'Coin 2',
        rows: ['H', 'T'],
        cols: ['H', 'T'],
        cells: [
          ['HH', 'HT'],
          ['TH', 'TT'],
        ],
        favouredEvents: [
          { name: 'P(both heads)', cells: ['HH'], probability: '1/4' },
          { name: 'P(at least one head)', cells: ['HH', 'HT', 'TH'], probability: '3/4' },
          { name: 'P(matching faces)', cells: ['HH', 'TT'], probability: '2/4 = 1/2' },
        ],
        callout:
          'A 2 by 2 grid has 2 x 2 = 4 cells. Each cell is one ordered pair of outcomes. To count favourable outcomes for an event, shade the matching cells and divide by 4.',
      },
    },
    {
      id: 'pss-scene-two-dice-sum-grid',
      title: 'Two Dice: A 6 by 6 Grid of Sums',
      type: 'diagram',
      instructions:
        'Read the 6 by 6 grid for two fair dice. Each cell holds the sum of die 1 (rows) and die 2 (columns). All 36 cells are equally likely. The sums range from 2 to 12, but they are not equally likely: there is one 2 (1+1), six 7s (the leading diagonal of the grid runs (1,6), (2,5), (3,4), (4,3), (5,2), (6,1)), and one 12 (6+6). So P(sum is 7) = 6/36 = 1/6 and P(sum is 12) = 1/36.',
      data: {
        rowsLabel: 'Die 1',
        colsLabel: 'Die 2',
        rows: ['1', '2', '3', '4', '5', '6'],
        cols: ['1', '2', '3', '4', '5', '6'],
        cells: [
          ['2', '3', '4', '5', '6', '7'],
          ['3', '4', '5', '6', '7', '8'],
          ['4', '5', '6', '7', '8', '9'],
          ['5', '6', '7', '8', '9', '10'],
          ['6', '7', '8', '9', '10', '11'],
          ['7', '8', '9', '10', '11', '12'],
        ],
        sumFrequencies: [
          { sum: 2, count: 1, probability: '1/36' },
          { sum: 3, count: 2, probability: '2/36' },
          { sum: 4, count: 3, probability: '3/36' },
          { sum: 5, count: 4, probability: '4/36' },
          { sum: 6, count: 5, probability: '5/36' },
          { sum: 7, count: 6, probability: '6/36 = 1/6' },
          { sum: 8, count: 5, probability: '5/36' },
          { sum: 9, count: 4, probability: '4/36' },
          { sum: 10, count: 3, probability: '3/36' },
          { sum: 11, count: 2, probability: '2/36' },
          { sum: 12, count: 1, probability: '1/36' },
        ],
        callout:
          'A 6 by 6 grid has 36 cells. Sums are not equally likely, but the cells are. Always count cells, not distinct sums.',
      },
    },
    {
      id: 'pss-scene-coin-and-die-grid',
      title: 'A Coin and a Die: A 2 by 6 Grid',
      type: 'diagram',
      instructions:
        'Read the 2 by 6 grid for a fair coin tossed alongside a fair 6-sided die. The coin (H or T) sits on the rows, the die (1 to 6) on the columns. The grid has 2 x 6 = 12 cells, all equally likely. P(heads and a 6) is one cell, so 1/12. P(heads with any number) is the top row, so 6/12 = 1/2. P(an even number with either coin face) is two columns out of six paired with both rows: 6 cells, so 6/12 = 1/2.',
      data: {
        rowsLabel: 'Coin',
        colsLabel: 'Die',
        rows: ['H', 'T'],
        cols: ['1', '2', '3', '4', '5', '6'],
        cells: [
          ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'],
          ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'],
        ],
        favouredEvents: [
          { name: 'P(H and 6)', cells: ['H6'], probability: '1/12' },
          { name: 'P(heads, any die)', cells: ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'], probability: '6/12 = 1/2' },
          {
            name: 'P(even die, any coin)',
            cells: ['H2', 'H4', 'H6', 'T2', 'T4', 'T6'],
            probability: '6/12 = 1/2',
          },
          { name: 'P(T and odd die)', cells: ['T1', 'T3', 'T5'], probability: '3/12 = 1/4' },
        ],
        callout:
          'For a coin paired with a die, the sample space has 2 x 6 = 12 cells. Build the grid first, then count cells that match the event.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'pss-worked-1',
      title: 'Two dice: find P(sum is greater than 8) using the 6 by 6 grid',
      steps: [
        {
          explanation: 'State the size of the sample space.',
          maths: 'total cells = 6 x 6 = 36',
        },
        {
          explanation: 'List the pairs whose sum is greater than 8 (so 9, 10, 11 or 12).',
          maths: 'sum 9: (3,6), (4,5), (5,4), (6,3)',
        },
        {
          explanation: 'Continue listing the higher sums.',
          maths: 'sum 10: (4,6), (5,5), (6,4); sum 11: (5,6), (6,5); sum 12: (6,6)',
        },
        {
          explanation: 'Add the favourable counts: 4 + 3 + 2 + 1 = 10 cells.',
          maths: 'favourable = 10',
        },
        {
          explanation: 'Apply P = favourable / total.',
          maths: 'P(sum > 8) = 10/36',
        },
        {
          explanation: 'Simplify the fraction by dividing top and bottom by 2.',
          maths: '10/36 = 5/18',
        },
      ],
    },
    {
      id: 'pss-worked-2',
      title: 'Coin and die: find P(heads and an even number) using the 2 by 6 grid',
      steps: [
        {
          explanation: 'State the size of the sample space.',
          maths: 'total cells = 2 x 6 = 12',
        },
        {
          explanation: 'Pick the row that matches "heads".',
          maths: 'row H: H1, H2, H3, H4, H5, H6',
        },
        {
          explanation: 'From that row, keep only the cells with an even die value.',
          maths: 'favourable cells: H2, H4, H6',
        },
        {
          explanation: 'Count the favourable cells.',
          maths: 'favourable = 3',
        },
        {
          explanation: 'Apply P = favourable / total, then simplify.',
          maths: 'P(H and even) = 3/12 = 1/4',
        },
        {
          explanation:
            'Cross-check: P(heads) = 1/2 and P(even die) = 3/6 = 1/2. The two events are independent, so 1/2 x 1/2 = 1/4.',
          maths: 'P(H and even) = 1/2 x 1/2 = 1/4',
        },
      ],
    },
  ],
  questions: [
    // Core 1
    {
      id: 'pss-q1',
      type: 'numeric-entry',
      stem: 'Two fair coins are tossed. The sample space is laid out in a 2 by 2 grid. How many cells does the grid have?',
      tier: 'core',
      correctAnswer: 4,
      xpValue: 10,
      hint: '2 outcomes for coin 1 multiplied by 2 outcomes for coin 2. So 2 x 2 = 4 cells.',
    },
    // Core 2
    {
      id: 'pss-q2',
      type: 'multiple-choice',
      stem: 'Two fair dice are rolled. The sample space is a 6 by 6 grid. How many cells are in the grid?',
      tier: 'core',
      options: ['36', '12', '11', '6'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pss-mis-confuse-sum-vs-pair',
      hint: '6 outcomes on die 1 multiplied by 6 outcomes on die 2 gives 6 x 6 = 36 cells.',
    },
    // Core 3
    {
      id: 'pss-q3',
      type: 'multiple-choice',
      stem: 'A fair coin is tossed and a fair 6-sided die is rolled. How many cells are in the sample space grid?',
      tier: 'core',
      options: ['8', '12', '14', '36'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pss-mis-coin-die-add',
      hint: '2 outcomes for the coin and 6 for the die. The grid has 2 x 6 = 12 cells.',
    },
    // Core 4
    {
      id: 'pss-q4',
      type: 'numeric-entry',
      stem: 'Two fair coins are tossed. Using the grid {HH, HT, TH, TT}, how many cells show at least one head?',
      tier: 'core',
      correctAnswer: 3,
      xpValue: 10,
      hint: 'Mark the cells with an H: HH, HT and TH. That is 3 cells.',
    },
    // Core 5
    {
      id: 'pss-q5',
      type: 'spot-misconception',
      stem: 'Priya tosses two coins. She fills the grid as a 2 by 2 table but only writes three cells: HH, HT, TT. She says HT and TH are the same cell.',
      tier: 'core',
      statements: [
        {
          text: 'Priya is right. HT and TH are the same outcome, so the grid has only three cells.',
          isMisconception: true,
        },
        {
          text: 'In fact the two coins fill different positions in the grid. HT means coin 1 is heads and coin 2 is tails. TH means coin 1 is tails and coin 2 is heads. The 2 by 2 grid has four cells: HH, HT, TH, TT.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pss-mis-ht-th-merge',
    },
    // Core 6
    {
      id: 'pss-q6',
      type: 'multiple-choice',
      stem: 'Two fair coins are tossed. What is P(both heads)?',
      tier: 'core',
      options: ['1/2', '3/4', '1/4', '1/3'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Only the cell HH gives both heads. That is 1 cell out of the 4 in the grid, so 1/4.',
    },
    // Core 7
    {
      id: 'pss-q7',
      type: 'numeric-entry',
      stem: 'A fair coin is tossed and a fair die is rolled. Using the 2 by 6 grid, how many cells show heads paired with an odd die value?',
      tier: 'core',
      correctAnswer: 3,
      xpValue: 10,
      hint: 'Top row of the grid is heads: H1, H2, H3, H4, H5, H6. Keep the odd die values: H1, H3, H5. That is 3 cells.',
    },
    // Confident 1
    {
      id: 'pss-q8',
      type: 'multiple-choice',
      stem: 'Two fair dice are rolled. Using the 6 by 6 grid of sums, what is P(sum is 7)?',
      tier: 'confident',
      options: ['1/11', '1/6', '1/12', '7/36'],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'pss-mis-equally-likely-sums',
      hint: 'Six pairs sum to 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). So P = 6/36 = 1/6.',
    },
    // Confident 2
    {
      id: 'pss-q9',
      type: 'numeric-entry',
      stem: 'Two fair dice are rolled. The sample space is a 6 by 6 grid. How many cells give a sum of 5?',
      tier: 'confident',
      correctAnswer: 4,
      xpValue: 15,
      hint: 'List the pairs that add to 5: (1,4), (2,3), (3,2), (4,1). That is 4 cells.',
    },
    // Confident 3
    {
      id: 'pss-q10',
      type: 'multiple-choice',
      stem: 'A fair coin is tossed and a fair die is rolled. Using the 2 by 6 grid, what is P(tails with an even die)?',
      tier: 'confident',
      options: ['1/2', '1/4', '3/12', '1/6'],
      correctIndex: 1,
      xpValue: 15,
      hint: 'Bottom row is tails: T1 to T6. Keep even die values: T2, T4, T6. That is 3 cells out of 12, so 3/12 = 1/4.',
    },
    // Confident 4
    {
      id: 'pss-q11',
      type: 'multiple-choice',
      stem: 'Two fair dice are rolled. Sam says the sample space has 11 outcomes because the sums range from 2 to 12. Which statement is correct?',
      tier: 'confident',
      options: [
        'Sam is right. The sample space has 11 outcomes.',
        'The sample space has 12 outcomes, one for each die value plus a doubles cell.',
        'The sample space has 36 cells in a 6 by 6 grid. The 11 sums are not equally likely.',
        'The sample space has 21 outcomes after removing duplicate pairs.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pss-mis-dice-sum-outcomes',
      hint: 'Each cell of the 6 by 6 grid is one equally likely outcome. The 11 distinct sums (2 to 12) are not equally likely: 7 has 6 cells, 2 has only 1.',
    },
    // Confident 5
    {
      id: 'pss-q12',
      type: 'spot-misconception',
      stem: 'Mo tosses a fair coin and rolls a fair die. He works out the size of the sample space as 2 + 6 = 8.',
      tier: 'confident',
      statements: [
        {
          text: 'Mo is right. The sample space has 8 outcomes.',
          isMisconception: true,
        },
        {
          text: 'In fact the two events fill a grid, not a list. The grid has 2 rows (the coin) and 6 columns (the die), so 2 x 6 = 12 cells.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pss-mis-coin-die-add',
    },
    // Confident 6
    {
      id: 'pss-q13',
      type: 'drag-order',
      stem: 'Order these steps for finding P(sum is 7) when two fair dice are rolled.',
      tier: 'confident',
      items: [
        'Apply P = favourable / total: P(sum is 7) = 6/36 = 1/6.',
        'Build the 6 by 6 grid with die 1 on the rows and die 2 on the columns.',
        'List the cells where the two values add to 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).',
        'State the size of the sample space: 6 x 6 = 36 cells.',
      ],
      correctOrder: [1, 3, 2, 0],
      xpValue: 15,
      hint: 'Build the grid first, then count its cells, then mark the favourable ones, then divide.',
    },
    // Confident 7
    {
      id: 'pss-q14',
      type: 'numeric-entry',
      stem: 'Two fair dice are rolled. The sample space is a 6 by 6 grid. What is P(both dice show the same value), as a fraction in the form 1/n? Enter the value of n.',
      tier: 'confident',
      correctAnswer: 6,
      xpValue: 15,
      hint: 'The doubles run down the leading diagonal: (1,1), (2,2), (3,3), (4,4), (5,5), (6,6). That is 6 cells out of 36, so 6/36 = 1/6.',
    },
    // Confident 8
    {
      id: 'pss-q15',
      type: 'missing-step',
      stem: 'Fill in the missing step. Two fair dice are rolled. Find P(sum is 4) using the 6 by 6 grid.',
      tier: 'confident',
      steps: [
        'State the size of the sample space: 6 x 6 = 36 cells.',
        'List the pairs that sum to 4: (1,3), (2,2), (3,1). That is 3 cells.',
        null,
        'Simplify the fraction: 3/36 = 1/12.',
      ],
      missingStepIndex: 2,
      correctStep: 'Apply P = favourable / total: P(sum is 4) = 3/36.',
      xpValue: 20,
    },
    // Challenge 1 (Bond-style multi-step)
    {
      id: 'pss-q16',
      type: 'numeric-entry',
      stem: 'A fete in Tunbridge Wells runs a stall where you toss a fair coin and roll a fair 6-sided die. You win the prize if the coin lands heads and the die shows a 5 or a 6. Aisha plays once. What is the probability she wins, as a fraction in the form 1/n? Enter the value of n.',
      tier: 'challenge',
      correctAnswer: 6,
      xpValue: 25,
      hint: 'Build the 2 by 6 grid (12 cells). The winning cells are H5 and H6, so 2 favourable out of 12. That gives 2/12 = 1/6.',
    },
    // Challenge 2
    {
      id: 'pss-q17',
      type: 'multiple-choice',
      stem: 'Two fair dice are rolled. Using the 6 by 6 grid, what is P(both dice show an even number)?',
      tier: 'challenge',
      options: ['9/36', '1/2', '6/36', '3/36'],
      correctIndex: 0,
      xpValue: 25,
      hint: 'Even values on each die: 2, 4, 6 (3 choices each). The favourable cells are 3 x 3 = 9. So 9/36, which simplifies to 1/4.',
    },
    // Challenge 3
    {
      id: 'pss-q18',
      type: 'numeric-entry',
      stem: 'Two fair dice are rolled. Find P(the difference between the two values is exactly 2), as a fraction. Enter the answer as a decimal to 3 decimal places.',
      tier: 'challenge',
      correctAnswer: 0.222,
      tolerance: 0.005,
      xpValue: 25,
      misconceptionId: 'pss-mis-grid-symmetry',
      hint: 'List the pairs with difference 2: (1,3), (2,4), (3,5), (4,6) and their reverses (3,1), (4,2), (5,3), (6,4). That is 8 cells out of 36, so 8/36 = 0.222 (to 3 dp).',
    },
    // Challenge 4
    {
      id: 'pss-q19',
      type: 'multiple-choice',
      stem: 'Two fair dice are rolled. Using the 6 by 6 grid, what is P(sum is at least 10)?',
      tier: 'challenge',
      options: ['1/12', '1/4', '5/36', '1/6'],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'pss-mis-skip-grid',
      hint: 'List pairs with sum at least 10: (4,6), (5,5), (5,6), (6,4), (6,5), (6,6). That is 6 cells out of 36, so 6/36 = 1/6.',
    },
    // Challenge 5
    {
      id: 'pss-q20',
      type: 'missing-step',
      stem: 'Fill in the missing step. Two fair dice are rolled. Find P(sum is a prime number).',
      tier: 'challenge',
      steps: [
        'List the prime sums between 2 and 12: 2, 3, 5, 7, 11.',
        'Count the favourable cells from the 6 by 6 grid: sum 2 has 1 cell, sum 3 has 2 cells, sum 5 has 4 cells, sum 7 has 6 cells, sum 11 has 2 cells.',
        null,
        'Apply P = favourable / total: P(prime sum) = 15/36 = 5/12.',
      ],
      missingStepIndex: 2,
      correctStep: 'Add the favourable cells: 1 + 2 + 4 + 6 + 2 = 15 cells.',
      xpValue: 25,
    },
    // Challenge 6
    {
      id: 'pss-q21',
      type: 'multiple-choice',
      stem: 'A board game in Manchester uses two fair dice. A player wins a bonus square when the two dice land on the same value (a double). Using the 6 by 6 grid, what is P(winning a bonus square on one roll)?',
      tier: 'challenge',
      options: ['1/12', '1/3', '1/36', '1/6'],
      correctIndex: 3,
      xpValue: 25,
      hint: 'The doubles run down the leading diagonal: (1,1), (2,2), (3,3), (4,4), (5,5), (6,6). That is 6 cells out of 36, so 6/36 = 1/6.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a "two coins" sample space question where pupils listed three outcomes (HH, HT, TT) instead of four (HH, HT, TH, TT), treating HT and TH as the same cell in the grid.
    {
      id: 'pss-mis-ht-th-merge',
      description:
        'When I draw the 2 by 2 grid for two coins, I merge HT and TH into one cell because both have one head and one tail.',
      triggerAnswer: 'ht-th-merge',
      correction:
        'Actually the two coins fill different positions in the grid. HT (coin 1 heads, coin 2 tails) is a different cell from TH (coin 1 tails, coin 2 heads).',
      reExplanation:
        'A 2 by 2 grid has four equally likely cells: HH, HT, TH, TT. P(at least one head) = 3/4 because three of the four cells contain an H. If you collapse HT and TH into one cell, the cells are no longer equally likely and the count gives a wrong probability.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 2F (Foundation, Calculator), commentary on a "two dice" question where pupils gave the sample space size as 11 (counting distinct sums) or 12, instead of 36 cells from the 6 by 6 grid.
    {
      id: 'pss-mis-dice-sum-outcomes',
      description:
        'For two dice, I count the sample space as 11 outcomes because the sums run from 2 to 12.',
      triggerAnswer: 'dice-sum-outcomes',
      correction:
        'In fact the equally likely outcomes are the 36 cells of the 6 by 6 grid. The 11 distinct sums are not equally likely.',
      reExplanation:
        'The 6 by 6 grid holds 36 cells, one per ordered pair (die 1, die 2). Sum 2 fills 1 cell ((1,1)), sum 7 fills 6 cells ((1,6), (2,5), (3,4), (4,3), (5,2), (6,1)) and sum 12 fills 1 cell ((6,6)). Always count cells, not sums.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2022, Paper 01 (Foundation, Non-calculator), commentary on a "coin and die" sample space question where pupils added the two event sizes (2 + 6 = 8) instead of multiplying them (2 x 6 = 12).
    {
      id: 'pss-mis-coin-die-add',
      description:
        'For a coin and a die, I add the two event sizes to get the sample space (2 + 6 = 8) instead of multiplying.',
      triggerAnswer: 'coin-die-add',
      correction:
        'Actually the two events fill a grid, not a list. The grid has m rows and n columns, so the sample space has m x n cells.',
      reExplanation:
        'A coin paired with a 6-sided die fills a 2 by 6 grid. Each row is one coin face and each column is one die face. The grid has 2 x 6 = 12 cells, all equally likely. Adding 2 and 6 would be the count for tossing a coin OR rolling a die separately.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 2F (Foundation, Calculator), commentary on a "two dice difference" question where pupils forgot that (3, 4) and (4, 3) are different cells in the grid, halving their favourable count.
    {
      id: 'pss-mis-grid-symmetry',
      description:
        'When I count favourable pairs for two dice, I treat (a, b) and (b, a) as the same cell.',
      triggerAnswer: 'grid-symmetry',
      correction:
        'In fact (a, b) and (b, a) are different cells of the 6 by 6 grid because die 1 and die 2 are kept separate.',
      reExplanation:
        'For two dice, P(difference is 2) needs both (1, 3) and (3, 1). The grid lists ordered pairs: row tells you die 1, column tells you die 2. Eight cells have a difference of 2: (1,3), (2,4), (3,5), (4,6), (3,1), (4,2), (5,3), (6,4).',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 2F (Foundation, Calculator), commentary on a "two-event probability" question where pupils gave an answer without building a sample space and miscounted favourable outcomes.
    {
      id: 'pss-mis-skip-grid',
      description:
        'For a two-event probability, I read the wording and guess the count of favourable outcomes without drawing the grid.',
      triggerAnswer: 'skip-grid',
      correction:
        'Actually a sample space grid makes the count exact. Without it, "at least", "more than" and "either" wording is easy to mishandle.',
      reExplanation:
        'For two dice, P(sum is at least 10) needs the cells with sums 10, 11 and 12. The 6 by 6 grid shows them in the bottom-right corner: (4,6), (5,5), (5,6), (6,4), (6,5), (6,6). That is 6 cells out of 36, so 6/36 = 1/6. Guessing without the grid often misses one or two cells.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, November 2022, Paper 1F (Foundation, Non-calculator), commentary on a "two dice doubles" question where pupils confused the sample space size with the number of distinct sums.
    {
      id: 'pss-mis-confuse-sum-vs-pair',
      description:
        'For two dice, I think the sample space has 12 cells because there are 12 distinct sums (or because I doubled 6).',
      triggerAnswer: 'confuse-sum-vs-pair',
      correction:
        'In fact the grid has 6 x 6 = 36 cells. The 12 figure mixes up the coin-and-die grid with the two-dice grid.',
      reExplanation:
        'A coin-and-die grid has 2 x 6 = 12 cells. A two-dice grid has 6 x 6 = 36 cells. Always check the row and column counts before stating the sample space size. The sums of two dice run from 2 to 12, but that gives 11 values, not 12, and the cells are 36.',
    },
    // Source: NCETM "Probability at KS3" reference materials, on pupils confusing the number of cells in a sample space with the number of distinct events the experiment can produce.
    {
      id: 'pss-mis-equally-likely-sums',
      description:
        'For two dice, I treat each sum from 2 to 12 as equally likely, so I write P(sum is 7) = 1/11.',
      triggerAnswer: 'equally-likely-sums',
      correction:
        'In fact only the 36 cells of the grid are equally likely. The 11 sums each cover a different number of cells.',
      reExplanation:
        'P(sum is 7) is the count of cells with sum 7, divided by 36. Six cells give sum 7, so P = 6/36 = 1/6. P(sum is 2) is one cell, so 1/36. Treating the sums as equally likely would give every sum a probability of 1/11, which is wrong for every sum bar 4 (which is close).',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const probabilitySampleSpaceTwoEventZoneNodes = [probabilitySampleSpaceTwoEvent]
