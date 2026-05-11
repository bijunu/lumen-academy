import type { SkillNode } from '@/types/content'

export const probabilityListingOutcomes: SkillNode = {
  id: 'maths-probability-listing-outcomes',
  title: 'Listing Outcomes and Sample Spaces',
  description:
    'List every possible outcome of a single event (rolling a fair 6-sided die: 1, 2, 3, 4, 5, 6) and of a two-event experiment (tossing two coins: HH, HT, TH, TT). Build a sample space using a list, a grid or a two-way table, then count favourable outcomes to get a probability such as P(at least one head) = 3/4. Apply this to UK contexts: a school tombola, a fair die, a UK 52-card deck.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-probability',
  zoneName: 'Probability',
  tier: 'core',
  prerequisites: ['maths-probability-scale'],
  curriculum: {
    ks3Objective:
      'Generate theoretical sample spaces for single and combined events with equally likely, mutually exclusive outcomes and use these to calculate theoretical probabilities.',
    awardingBodies: {
      aqa: 'P6 Enumerate sets and combinations of sets systematically, using tables, grids, Venn diagrams; P7 Construct theoretical possibility spaces for single and combined experiments with equally likely outcomes and use these to calculate theoretical probabilities (GCSE Mathematics 8300)',
      edexcel: 'P6 Enumerate sets and unions/intersections of sets systematically, using tables, grids and Venn diagrams; P7 Construct theoretical possibility spaces for single and combined experiments with equally likely outcomes and use these to calculate theoretical probabilities (GCSE Mathematics 1MA1)',
    },
  },
  scenes: [
    {
      id: 'pl-scene-die-outcomes',
      title: 'Single Event: Outcomes of a Fair Die',
      type: 'fraction-wall',
      instructions:
        'Click each bar to highlight one of the six equally likely faces of a fair 6-sided die. Each face has probability 1/6. The full sample space is {1, 2, 3, 4, 5, 6}, and the favourable count for any event is the number of faces that match.',
      data: {
        title: 'Sample space for a fair 6-sided die',
        bars: [
          { label: 'rolling a 1', segments: 6, highlightedSegments: 1, value: '1/6' },
          { label: 'rolling a 2', segments: 6, highlightedSegments: 1, value: '1/6' },
          { label: 'rolling an even number {2, 4, 6}', segments: 6, highlightedSegments: 3, value: '3/6' },
          { label: 'rolling a number greater than 4 {5, 6}', segments: 6, highlightedSegments: 2, value: '2/6' },
        ],
        callout:
          'For an event made of several outcomes, add up the favourable faces: P(even) = P(2) + P(4) + P(6) = 3/6 = 1/2.',
      },
    },
    {
      id: 'pl-scene-two-coins-table',
      title: 'Two Coins: A Sample Space Table',
      type: 'diagram',
      instructions:
        'Read how the two coins lay out in a table. The first coin can be H or T. The second coin can also be H or T. So the four equally likely outcomes are HH, HT, TH, TT. HT and TH are different rows because the coins are kept apart: the first coin landed differently in each. P(at least one head) counts HH, HT and TH (3 outcomes) out of 4 total, so the probability is 3/4.',
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
          { name: 'P(no heads)', cells: ['TT'], probability: '1/4' },
        ],
        callout:
          'A sample space table makes it easy to count favourable outcomes without missing any. For two coins, the four cells cover every possibility once.',
      },
    },
    {
      id: 'pl-scene-card-deck',
      title: 'A UK 52-card Deck',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to reveal a region of a UK 52-card deck. There are 4 suits (hearts, diamonds, clubs, spades), each with 13 cards (Ace, 2 to 10, Jack, Queen, King). So P(heart) = 13/52 = 1/4 and P(Ace) = 4/52 = 1/13. Hearts and diamonds are red; clubs and spades are black.',
      data: {
        viewBox: '0 0 320 240',
        svg:
          '<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg">' +
          '<rect x="20" y="20" width="280" height="200" fill="#fafafa" stroke="#444" stroke-width="2"/>' +
          '<text x="160" y="50" font-family="sans-serif" font-size="14" text-anchor="middle">UK 52-card deck</text>' +
          '<rect x="40" y="70" width="120" height="60" fill="#fee2e2" stroke="#b91c1c" stroke-width="2"/>' +
          '<text x="100" y="105" font-family="sans-serif" font-size="13" text-anchor="middle">13 hearts (red)</text>' +
          '<rect x="160" y="70" width="120" height="60" fill="#fee2e2" stroke="#b91c1c" stroke-width="2"/>' +
          '<text x="220" y="105" font-family="sans-serif" font-size="13" text-anchor="middle">13 diamonds (red)</text>' +
          '<rect x="40" y="130" width="120" height="60" fill="#e5e7eb" stroke="#111827" stroke-width="2"/>' +
          '<text x="100" y="165" font-family="sans-serif" font-size="13" text-anchor="middle">13 clubs (black)</text>' +
          '<rect x="160" y="130" width="120" height="60" fill="#e5e7eb" stroke="#111827" stroke-width="2"/>' +
          '<text x="220" y="165" font-family="sans-serif" font-size="13" text-anchor="middle">13 spades (black)</text>' +
          '<text x="160" y="210" font-family="sans-serif" font-size="11" text-anchor="middle">52 cards total: 4 suits x 13 cards</text>' +
          '</svg>',
        hotspots: [
          {
            id: 'card-hearts',
            x: 30,
            y: 40,
            label: 'Hearts: 13 cards (red)',
            description: 'P(heart) = 13/52 = 1/4.',
          },
          {
            id: 'card-diamonds',
            x: 70,
            y: 40,
            label: 'Diamonds: 13 cards (red)',
            description: 'P(diamond) = 13/52 = 1/4.',
          },
          {
            id: 'card-aces',
            x: 50,
            y: 75,
            label: '4 Aces (one per suit)',
            description: 'P(Ace) = 4/52 = 1/13.',
          },
          {
            id: 'card-red',
            x: 50,
            y: 30,
            label: '26 red cards (hearts + diamonds)',
            description: 'P(red) = 26/52 = 1/2.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'pl-worked-1',
      title: 'List the sample space for a fair die, then find P(rolling at least 5)',
      steps: [
        {
          explanation:
            'List every face of the die.',
          maths: 'sample space = {1, 2, 3, 4, 5, 6}',
        },
        {
          explanation:
            'Count the total number of equally likely outcomes.',
          maths: 'total = 6',
        },
        {
          explanation:
            'List the outcomes that match the event "at least 5".',
          maths: 'favourable = {5, 6}, count = 2',
        },
        {
          explanation:
            'Probability = favourable / total.',
          maths: 'P(at least 5) = 2/6',
        },
        {
          explanation:
            'Simplify and write as a decimal too.',
          maths: '2/6 = 1/3 = 0.33 (to 2 dp)',
        },
      ],
    },
    {
      id: 'pl-worked-2',
      title: 'Two coins: P(at least one head) using a sample space table',
      steps: [
        {
          explanation:
            'Build a 2 by 2 table with coin 1 on the rows and coin 2 on the columns.',
          maths: 'rows: H, T   cols: H, T',
        },
        {
          explanation:
            'Fill the table with the four ordered outcomes.',
          maths: 'cells: HH, HT, TH, TT (total 4)',
        },
        {
          explanation:
            'Mark the cells where at least one coin shows heads.',
        },
        {
          explanation:
            'Count the marked cells: HH, HT, TH. That is 3 cells.',
          maths: 'favourable = 3',
        },
        {
          explanation:
            'Apply the rule probability = favourable / total.',
          maths: 'P(at least one head) = 3/4',
        },
        {
          explanation:
            'Cross-check using the complement rule: P(no heads) = P(TT) = 1/4, and 1 - 1/4 = 3/4.',
          maths: 'P(at least one head) = 1 - 1/4 = 3/4',
        },
      ],
    },
  ],
  questions: [
    // Core 1
    {
      id: 'pl-q1',
      type: 'numeric-entry',
      stem: 'A fair 6-sided die has faces 1 to 6. How many possible outcomes are there in one roll?',
      tier: 'core',
      correctAnswer: 6,
      xpValue: 10,
      hint: 'List the faces: 1, 2, 3, 4, 5, 6. Then count.',
    },
    // Core 2
    {
      id: 'pl-q2',
      type: 'multiple-choice',
      stem: 'A fair 6-sided die is rolled. What is P(rolling a 6)?',
      tier: 'core',
      options: ['1', '1/2', '1/3', '1/6'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'There is 1 favourable face (6) out of 6 total faces. So P = 1/6.',
    },
    // Core 3
    {
      id: 'pl-q3',
      type: 'multiple-choice',
      stem: 'A fair 6-sided die is rolled. What is P(rolling an even number)?',
      tier: 'core',
      options: ['3/6', '1/6', '2/6', '5/6'],
      correctIndex: 0,
      xpValue: 10,
      hint: 'List the even faces: 2, 4, 6. That is 3 favourable outcomes out of 6 total.',
    },
    // Core 4
    {
      id: 'pl-q4',
      type: 'numeric-entry',
      stem: 'Two fair coins are tossed at the same time. How many equally likely outcomes are in the full sample space?',
      tier: 'core',
      correctAnswer: 4,
      xpValue: 10,
      hint: 'List them: HH, HT, TH, TT. Count the rows.',
    },
    // Core 5
    {
      id: 'pl-q5',
      type: 'multiple-choice',
      stem: 'Two fair coins are tossed. Which list shows the full sample space?',
      tier: 'core',
      options: [
        'HH, HT, TT (3 outcomes)',
        'HH, HT, TH, TT (4 outcomes)',
        'H, T (2 outcomes)',
        'HH, TT (2 outcomes)',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pl-mis-ht-th-same',
      hint: 'The two coins are kept apart. HT (coin 1 = H, coin 2 = T) is different from TH (coin 1 = T, coin 2 = H).',
    },
    // Core 6
    {
      id: 'pl-q6',
      type: 'multiple-choice',
      stem: 'A card is drawn from a UK 52-card deck. What is P(heart)?',
      tier: 'core',
      options: ['1/13', '1/4', '1/2', '13/13'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pl-mis-deck-suit-count',
      hint: 'There are 13 hearts in a deck of 52 cards. P(heart) = 13/52 = 1/4.',
    },
    // Core 7
    {
      id: 'pl-q7',
      type: 'numeric-entry',
      stem: 'A card is drawn from a UK 52-card deck. What is P(Ace), as a fraction in the form 1/n? Enter the value of n.',
      tier: 'core',
      correctAnswer: 13,
      xpValue: 10,
      hint: 'There are 4 Aces in 52 cards. P(Ace) = 4/52. Simplify by dividing top and bottom by 4 to get 1/n.',
    },
    // Core 8
    {
      id: 'pl-q8',
      type: 'spot-misconception',
      stem: 'Liam tosses two coins and lists the sample space as {HH, HT, TT}. He says HT and TH are the same outcome because both have one head and one tail.',
      tier: 'core',
      statements: [
        {
          text: 'Liam is right. Order does not matter, so HT and TH are the same.',
          isMisconception: true,
        },
        {
          text: 'In fact the two coins are kept apart. HT means coin 1 is heads and coin 2 is tails. TH means coin 1 is tails and coin 2 is heads. These are two different outcomes, so the sample space is {HH, HT, TH, TT}.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pl-mis-ht-th-same',
    },
    // Confident 1
    {
      id: 'pl-q9',
      type: 'multiple-choice',
      stem: 'Two fair coins are tossed. Using the sample space {HH, HT, TH, TT}, what is P(at least one head)?',
      tier: 'confident',
      options: ['1/4', '1/2', '3/4', '1'],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pl-mis-ht-th-same',
      hint: 'Count the cells with at least one H: HH, HT, TH. That is 3 favourable out of 4 total.',
    },
    // Confident 2
    {
      id: 'pl-q10',
      type: 'numeric-entry',
      stem: 'Two fair coins are tossed. What is P(both tails), as a decimal?',
      tier: 'confident',
      correctAnswer: 0.25,
      tolerance: 0.001,
      xpValue: 15,
      hint: 'Sample space: HH, HT, TH, TT. Only TT has both tails. So P = 1/4 = 0.25.',
    },
    // Confident 3
    {
      id: 'pl-q11',
      type: 'drag-order',
      stem: 'Order these steps for finding P(at least one head) when two coins are tossed.',
      tier: 'confident',
      items: [
        'Apply P = favourable / total: P(at least one head) = 3/4.',
        'Build the sample space table for two coins (coin 1 on rows, coin 2 on columns).',
        'Count the favourable cells: HH, HT, TH. That is 3 cells.',
        'List all four cells: HH, HT, TH, TT. The total is 4.',
      ],
      correctOrder: [1, 3, 2, 0],
      xpValue: 15,
      hint: 'Build the table first, then list all four outcomes, then mark the favourable ones, then divide.',
    },
    // Confident 4
    {
      id: 'pl-q12',
      type: 'multiple-choice',
      stem: 'A school tombola sells 50 tickets. There are 10 prizes. Aisha buys 1 ticket. What is the probability she wins a prize?',
      tier: 'confident',
      options: ['10/50', '1/50', '40/50', '1/10'],
      correctIndex: 0,
      xpValue: 15,
      hint: '10 prize tickets out of 50 total tickets. P(prize) = 10/50 (which simplifies to 1/5).',
    },
    // Confident 5
    {
      id: 'pl-q13',
      type: 'multiple-choice',
      stem: 'A coin is tossed and a fair 6-sided die is rolled. How many outcomes are in the full sample space?',
      tier: 'confident',
      options: ['8', '12', '36', '6'],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'pl-mis-product-rule',
      hint: '2 outcomes for the coin (H, T) and 6 outcomes for the die (1 to 6). The two-event sample space has 2 x 6 = 12 cells.',
    },
    // Confident 6
    {
      id: 'pl-q14',
      type: 'spot-misconception',
      stem: 'Sam draws a card from a UK 52-card deck and says "P(heart) = 1/13 because there are 13 hearts in the deck."',
      tier: 'confident',
      statements: [
        {
          text: 'Sam is right. There are 13 hearts, so the probability is 1/13.',
          isMisconception: true,
        },
        {
          text: 'In fact P(heart) is the count of favourable cards over the total. 13 hearts out of 52 cards gives 13/52 = 1/4. The 1/13 answer would be P(Ace) instead, since 4 Aces in 52 cards gives 4/52 = 1/13.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pl-mis-deck-suit-count',
    },
    // Confident 7
    {
      id: 'pl-q15',
      type: 'multiple-choice',
      stem: 'A fair 6-sided die is rolled twice. The sample space is laid out in a 6 by 6 grid. How many cells are in the grid?',
      tier: 'confident',
      options: ['64', '12', '36', '24'],
      correctIndex: 2,
      xpValue: 15,
      hint: '6 outcomes on the first roll x 6 outcomes on the second roll. So 6 x 6 = 36 cells.',
    },
    // Confident 8
    {
      id: 'pl-q16',
      type: 'missing-step',
      stem: 'Fill in the missing step. A bag has 12 sweets: 4 cherry, 5 lemon, 3 lime. One sweet is taken at random. Find P(lemon) as a fraction.',
      tier: 'confident',
      steps: [
        'List the total count of sweets in the bag: 4 + 5 + 3 = 12.',
        'List the favourable count for lemon: 5.',
        null,
        'Simplify if possible. 5/12 has no common factor, so the answer is 5/12.',
      ],
      missingStepIndex: 2,
      correctStep: 'Apply P = favourable / total: P(lemon) = 5/12.',
      xpValue: 20,
    },
    // Challenge 1 (Bond-style multi-step)
    {
      id: 'pl-q17',
      type: 'numeric-entry',
      stem: 'A Tunbridge Wells school tombola has 200 tickets. There are 25 prize tickets. Aisha buys 4 tickets at random. What is the probability that her first ticket she opens is a prize ticket, as a decimal?',
      tier: 'challenge',
      correctAnswer: 0.125,
      tolerance: 0.001,
      xpValue: 25,
      hint: 'Aisha is opening one ticket at a time. The first ticket has the same chance of being a prize as any single ticket: 25 prize tickets out of 200 = 25/200 = 1/8.',
    },
    // Challenge 2
    {
      id: 'pl-q18',
      type: 'multiple-choice',
      stem: 'Two fair 6-sided dice are rolled and the scores are added. The sample space is a 6 by 6 grid. How many cells in the grid give a total of 7?',
      tier: 'challenge',
      options: ['5', '6', '7', '4'],
      correctIndex: 1,
      xpValue: 25,
      hint: 'List the pairs that sum to 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). Each is a different cell.',
    },
    // Challenge 3
    {
      id: 'pl-q19',
      type: 'numeric-entry',
      stem: 'Two fair 6-sided dice are rolled and the scores are added. There are 36 cells in the sample space grid. How many cells give a total of 7? Use this to find P(sum is 7), and enter your answer as a decimal to 3 decimal places.',
      tier: 'challenge',
      correctAnswer: 0.167,
      tolerance: 0.005,
      xpValue: 25,
      hint: 'Six pairs sum to 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). So P = 6/36 = 1/6 = 0.167 (to 3 dp).',
    },
    // Challenge 4
    {
      id: 'pl-q20',
      type: 'multiple-choice',
      stem: 'Two fair 6-sided dice are rolled and the scores are added. Using the 36-cell sample space, what is P(sum is bigger than 9)?',
      tier: 'challenge',
      options: ['1/9', '5/36', '6/36', '1/6'],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'pl-mis-skip-sample-space',
      hint: 'List pairs with sum bigger than 9: (4,6), (5,5), (5,6), (6,4), (6,5), (6,6). That is 6 cells out of 36.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a "two coins" sample space question where pupils listed three outcomes (HH, HT, TT) instead of four (HH, HT, TH, TT), treating HT and TH as the same.
    {
      id: 'pl-mis-ht-th-same',
      description:
        'When two coins are tossed, I treat HT and TH as the same outcome, so I list only three outcomes (HH, HT, TT) instead of four.',
      triggerAnswer: 'ht-th-same',
      correction:
        'Actually the two coins are kept separate. HT (coin 1 heads, coin 2 tails) is a different cell in the sample space from TH (coin 1 tails, coin 2 heads).',
      reExplanation:
        'A 2 by 2 sample space table for two coins has four equally likely cells: HH, HT, TH and TT. P(at least one head) = 3/4 because three of the four cells have an H. If you collapse HT and TH into one cell, the four cells become three unequal cells and the calculation falls apart.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a "card from a deck" question where pupils gave 1/13 for P(heart) instead of 1/4.
    {
      id: 'pl-mis-deck-suit-count',
      description:
        'For a UK 52-card deck, I write P(heart) as 1/13 because there are 13 hearts.',
      triggerAnswer: 'deck-suit-count',
      correction:
        'In fact P(heart) is the count of hearts over the total cards. 13 hearts in 52 cards gives 13/52 = 1/4. The 1/13 answer is P(Ace), because 4 Aces in 52 cards give 4/52 = 1/13.',
      reExplanation:
        'A UK 52-card deck splits into 4 suits of 13 cards each. P(any one suit) = 13/52 = 1/4. P(any one rank, e.g. Ace) = 4/52 = 1/13. Always check the denominator is the total cards in the deck (52), not the size of one suit (13) or one rank (4).',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 2F (Foundation, Calculator), commentary on a "two-event probability" question where pupils answered without listing the sample space first and ended up double-counting favourable outcomes.
    {
      id: 'pl-mis-skip-sample-space',
      description:
        'For a two-event probability, I guess the answer from the wording without listing the full sample space, so I miss outcomes or count the same one twice.',
      triggerAnswer: 'skip-sample-space',
      correction:
        'Actually a sample space list (or table) makes the count exact. Without it, "at least" and "either" wording is easy to mishandle.',
      reExplanation:
        'For two coins, P(at least one head) is easy to over- or under-count in your head. Listing the four cells HH, HT, TH, TT and ticking three of them (HH, HT, TH) makes 3/4 obvious. The list never lies if you build it once and use it.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2022, Paper 01 (Foundation, Non-calculator), commentary on a "favourable outcomes" question where pupils counted the same outcome twice when describing P(at least one).
    {
      id: 'pl-mis-double-count',
      description:
        'When I count favourable outcomes for events such as "at least one head", I count HH twice (once for the first head and once for the second).',
      triggerAnswer: 'double-count',
      correction:
        'In fact each outcome in the sample space is counted only once, no matter how many of its features satisfy the event.',
      reExplanation:
        'For two coins, the cell HH satisfies "at least one head" once. It does not get a second tally for the second head. The favourable count for "at least one head" is 3 (HH, HT, TH), not 4. Each cell is a possible outcome and contributes 1 to the count when it matches.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 2F (Foundation, Calculator), commentary on a "die rolled twice" question where pupils gave the sample space size as 12 instead of 36, treating the second roll as having only 6 - 1 = 5 fresh outcomes.
    {
      id: 'pl-mis-product-rule',
      description:
        'For a two-event experiment (a die rolled twice, or a coin then a die), I add the two sample space sizes instead of multiplying them.',
      triggerAnswer: 'product-rule',
      correction:
        'Actually the two-event sample space has size m x n, not m + n.',
      reExplanation:
        'A coin (2 outcomes) and a die (6 outcomes) give a 2 by 6 grid: 2 x 6 = 12 cells. A die rolled twice gives a 6 by 6 grid: 6 x 6 = 36 cells. The grid layout is the visual reminder that you multiply the row count by the column count to get the total cells.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 7 Statistics and Probability, "Listing Outcomes" page; the "Common mistake" callout that pupils write outcomes such as 1, 2, 3, 4, 5 for a die instead of 1, 2, 3, 4, 5, 6.
    {
      id: 'pl-mis-incomplete-list',
      description:
        'I leave one outcome out of a sample space when I list it, especially the highest or lowest value (rolling a die: 1, 2, 3, 4, 5).',
      triggerAnswer: 'incomplete-list',
      correction:
        'In fact a sample space must contain every possible outcome, with nothing missed and nothing duplicated.',
      reExplanation:
        'For a fair 6-sided die, the sample space is {1, 2, 3, 4, 5, 6}. Six outcomes, all equally likely, total 1 (since 6 x 1/6 = 1). If you list only five, the probabilities for the remaining five no longer sum to 1, and any answer you compute is wrong by a factor.',
    },
    // Source: NCETM "Probability at KS3" reference materials, on pupils confusing "and" with "or" in a two-event probability and so picking the wrong cells from the sample space.
    {
      id: 'pl-mis-and-vs-or',
      description:
        'I treat "and" and "or" as the same word in a two-event probability, so I count cells for "both" when the question asks for "at least one".',
      triggerAnswer: 'and-vs-or',
      correction:
        'Actually "both" picks out one cell (HH for two heads); "at least one" picks out the cells where the event happens at least once.',
      reExplanation:
        'For two coins, P(both heads) = P(HH) = 1/4. P(at least one head) = P(HH or HT or TH) = 3/4. The first event needs both coins to land H. The second only needs one of them to. Reading the question word for word, then circling the cells in the table, removes the ambiguity.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const probabilityListingOutcomesZoneNodes = [probabilityListingOutcomes]
