import type { SkillNode } from '@/types/content'

export const probabilityScale: SkillNode = {
  id: 'maths-probability-scale',
  title: 'The Probability Scale from 0 to 1',
  description:
    'Probability is a number between 0 and 1 that says how likely an event is to happen. 0 means impossible, 1 means certain, and 1/2 means equally likely. Place everyday events such as a Manchester rainy day, a coin landing heads, or a Tuesday lunch ticket on a 0 to 1 scale, and translate between fractions, decimals and percentages on the same scale. Use words such as impossible, unlikely, even chance, likely and certain as a check that the number is sensible.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-probability',
  zoneName: 'Probability',
  tier: 'core',
  prerequisites: [],
  curriculum: {
    ks3Objective:
      'Record, describe and analyse the frequency of outcomes of simple probability experiments involving randomness, fairness, equally and unequally likely outcomes, using appropriate language and the 0-1 probability scale.',
    awardingBodies: {
      aqa: 'P1 Record, describe and analyse the frequency of outcomes of probability experiments using tables and frequency trees; P3 Relate relative expected frequencies to theoretical probability, using appropriate language and the 0 to 1 probability scale (GCSE Mathematics 8300)',
      edexcel: 'P1 Record, describe and analyse the frequency of outcomes of simple probability experiments involving randomness, fairness, equally and unequally likely outcomes, using appropriate language and the 0-1 probability scale (GCSE Mathematics 1MA1)',
    },
  },
  scenes: [
    {
      id: 'ps-scene-scale-line',
      title: 'A Probability Line from 0 to 1',
      type: 'diagram',
      instructions:
        'Look at the probability line drawn from 0 to 1. The left end is 0 (impossible) and the right end is 1 (certain). The middle, 1/2 or 0.5, is even chance. Words sit along the line: impossible, unlikely, even chance, likely, certain. The number always lies between 0 and 1, and never goes outside that range.',
      data: {
        scaleStart: 0,
        scaleEnd: 1,
        labelledPoints: [
          { value: 0, label: 'impossible', example: 'rolling a 7 on a 6-sided die' },
          { value: 0.25, label: 'unlikely', example: 'pulling a heart-shaped card from a UK pack on first try' },
          { value: 0.5, label: 'even chance', example: 'a fair coin landing heads' },
          { value: 0.75, label: 'likely', example: 'a December morning in Manchester being cloudy' },
          { value: 1, label: 'certain', example: 'today being Tuesday, given that today is Tuesday' },
        ],
        callout:
          'Probability is bounded: 0 at the left, 1 at the right. Anything outside that range is not a probability.',
      },
    },
    {
      id: 'ps-scene-three-forms',
      title: 'Fraction, Decimal and Percentage Forms',
      type: 'diagram',
      instructions:
        'See how the same probability can be written three ways. A coin landing heads is 1/2, or 0.5, or 50 percent. A rainy December day in Manchester is roughly 7/10, or 0.7, or 70 percent. The denominator of the fraction never grows past the numerator, so the value stays at or below 1.',
      data: {
        examples: [
          { event: 'fair coin lands heads', fraction: '1/2', decimal: 0.5, percent: 50 },
          { event: 'rolling a 6 on a fair 6-sided die', fraction: '1/6', decimal: 0.17, percent: 17 },
          { event: 'a Manchester December day is rainy (Met Office climate average)', fraction: '7/10', decimal: 0.7, percent: 70 },
          { event: 'rolling an even number on a fair 6-sided die', fraction: '1/2', decimal: 0.5, percent: 50 },
        ],
        callout:
          'Fraction, decimal and percentage are three names for the same number. They all sit between 0 and 1 (or 0 percent and 100 percent).',
      },
    },
    {
      id: 'ps-scene-place-events',
      title: 'Place School Events on the Scale',
      type: 'fraction-wall',
      instructions:
        'Click each bar to highlight where the event sits on the 0 to 1 line. The school raffle has 1 winning ticket out of 50, so the probability is 1/50, very near 0. Buying any ticket and getting either the winner or a runner-up sits a little higher. The Tuesday school assembly happening on a Tuesday is certain (1).',
      data: {
        title: 'School events on the 0 to 1 scale',
        bars: [
          { label: 'School raffle: 1 winning ticket out of 50', segments: 50, highlightedSegments: 1, value: '1/50' },
          { label: 'Pulling a red counter from a bag of 10 (4 red, 6 blue)', segments: 10, highlightedSegments: 4, value: '4/10' },
          { label: 'Fair coin landing heads', segments: 2, highlightedSegments: 1, value: '1/2' },
          { label: 'Tuesday school assembly happening on a Tuesday', segments: 1, highlightedSegments: 1, value: '1' },
        ],
        callout:
          'The shaded portion of each bar is the probability. The same picture works for any event: count how much of the whole the event covers.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'ps-worked-1',
      title: 'Convert 3/4 to decimal and percentage',
      steps: [
        {
          explanation:
            'Read the probability as a fraction first.',
          maths: 'P(event) = 3/4',
        },
        {
          explanation:
            'Divide the numerator by the denominator to get the decimal.',
          maths: '3 / 4 = 0.75',
        },
        {
          explanation:
            'Multiply the decimal by 100 to get the percentage.',
          maths: '0.75 x 100 = 75',
        },
        {
          explanation:
            'Write the three matching forms together.',
          maths: '3/4 = 0.75 = 75 percent',
        },
        {
          explanation:
            'Check the value sits between 0 and 1, so it really is a probability.',
          maths: '0 <= 0.75 <= 1, so this is a valid probability',
        },
      ],
    },
    {
      id: 'ps-worked-2',
      title: 'Place a 1 in 5 raffle on the 0 to 1 line',
      steps: [
        {
          explanation:
            'Write the probability as a fraction. One winning ticket out of five gives 1 over 5.',
          maths: 'P(win) = 1/5',
        },
        {
          explanation:
            'Convert to a decimal so the value can be placed on the 0 to 1 line.',
          maths: '1 / 5 = 0.2',
        },
        {
          explanation:
            'Find 0.2 on the line. It sits one fifth of the way from 0 to 1, between impossible and even chance.',
        },
        {
          explanation:
            'Match the position to the closest word: 0.2 is unlikely, but not impossible.',
          maths: 'word: unlikely',
        },
        {
          explanation:
            'So a 1 in 5 raffle ticket has probability 0.2 of winning, which sits in the unlikely region of the scale.',
          maths: 'P(win) = 1/5 = 0.2 = 20 percent',
        },
      ],
    },
  ],
  questions: [
    // Core 1
    {
      id: 'ps-q1',
      type: 'multiple-choice',
      stem: 'Which value cannot be a probability?',
      tier: 'core',
      options: ['0', '0.4', '1', '1.2'],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'ps-mis-bounded-0-1',
      hint: 'A probability must sit between 0 and 1 inclusive. Which value is outside that range?',
    },
    // Core 2
    {
      id: 'ps-q2',
      type: 'multiple-choice',
      stem: 'A coin is fair. What is the probability it lands heads?',
      tier: 'core',
      options: ['0', '1/4', '1/2', '1'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'A fair coin has two equally likely outcomes: heads or tails. So P(heads) = 1 out of 2.',
    },
    // Core 3
    {
      id: 'ps-q3',
      type: 'multiple-choice',
      stem: 'On a probability line from 0 to 1, where does the word "certain" sit?',
      tier: 'core',
      options: ['at 0', 'at 1/2', 'at 1', 'past 1'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'ps-mis-bounded-0-1',
      hint: 'Certain means the event will definitely happen. The right end of the scale is the maximum, which is 1.',
    },
    // Core 4
    {
      id: 'ps-q4',
      type: 'multiple-choice',
      stem: 'Which event has probability 0?',
      tier: 'core',
      options: [
        'rolling a 7 on a fair 6-sided die',
        'rolling an even number on a fair 6-sided die',
        'rolling a number less than 7 on a fair 6-sided die',
        'rolling a 1 on a fair 6-sided die',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'A 6-sided die has faces 1, 2, 3, 4, 5, 6. Which option lists an outcome that is not on any face?',
    },
    // Core 5
    {
      id: 'ps-q5',
      type: 'numeric-entry',
      stem: 'A bag has 5 counters. 2 are red and 3 are blue. What is the probability of drawing a red counter, as a decimal?',
      tier: 'core',
      correctAnswer: 0.4,
      tolerance: 0.01,
      xpValue: 10,
      hint: 'P(red) = number of red / total = 2 / 5. Now write 2 / 5 as a decimal.',
    },
    // Core 6
    {
      id: 'ps-q6',
      type: 'multiple-choice',
      stem: 'A school raffle sells 50 tickets and there is 1 winning ticket. Which word best describes the probability of holding the winning ticket?',
      tier: 'core',
      options: ['impossible', 'unlikely', 'even chance', 'likely'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'P(win) = 1 / 50 = 0.02. That is small but not zero.',
    },
    // Core 7
    {
      id: 'ps-q7',
      type: 'spot-misconception',
      stem: 'Aisha says "I rolled a fair 6-sided die five times in a row and got a 6 every time. The probability of the next roll being a 6 must be bigger than 1, because the run will keep going." Is her reasoning sound?',
      tier: 'core',
      statements: [
        {
          text: 'Aisha is right. A long run of 6s pushes the next probability past 1.',
          isMisconception: true,
        },
        {
          text: 'In fact a probability cannot be bigger than 1. For a fair die, P(6) is always 1/6 on every roll, regardless of past rolls.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'ps-mis-bounded-0-1',
    },
    // Core 8
    {
      id: 'ps-q8',
      type: 'numeric-entry',
      stem: 'Write 1/2 as a percentage. (Enter the number, no percent sign.)',
      tier: 'core',
      correctAnswer: 50,
      xpValue: 10,
      unit: 'percent',
      hint: '1/2 = 0.5, and 0.5 x 100 = 50.',
    },
    // Confident 1
    {
      id: 'ps-q9',
      type: 'multiple-choice',
      stem: 'Which list of probabilities is in order from least likely to most likely?',
      tier: 'confident',
      options: [
        '0.1, 0.5, 0.7, 0.9',
        '0.9, 0.7, 0.5, 0.1',
        '0.5, 0.1, 0.9, 0.7',
        '0.1, 0.9, 0.5, 0.7',
      ],
      correctIndex: 0,
      xpValue: 15,
      hint: 'Least likely is closest to 0; most likely is closest to 1. Read the values left to right and check they grow.',
    },
    // Confident 2
    {
      id: 'ps-q10',
      type: 'drag-order',
      stem: 'Order these events from least likely to most likely.',
      tier: 'confident',
      items: [
        'a fair coin lands heads (probability 1/2)',
        'a fair die rolls a 6 (probability 1/6)',
        'a school raffle ticket wins, 1 ticket out of 50 (probability 1/50)',
        'a fair die rolls a number less than 7 (probability 1)',
      ],
      correctOrder: [2, 1, 0, 3],
      xpValue: 15,
      hint: 'Convert each probability to a decimal: 1/50 = 0.02, 1/6 = 0.17, 1/2 = 0.5, 1 = 1. Then sort smallest to largest.',
    },
    // Confident 3
    {
      id: 'ps-q11',
      type: 'numeric-entry',
      stem: 'A jar has 4 yellow sweets and 6 green sweets. What is the probability of picking a green sweet, as a decimal?',
      tier: 'confident',
      correctAnswer: 0.6,
      tolerance: 0.01,
      xpValue: 15,
      hint: 'P(green) = number of green / total = 6 / (4 + 6) = 6 / 10.',
    },
    // Confident 4
    {
      id: 'ps-q12',
      type: 'multiple-choice',
      stem: 'A bag has 8 counters: 3 red, 4 blue, 1 green. Liam says "P(red) is 3/4 because there are 3 red and the others are not red, so 3 out of 4 colours." Which row corrects the slip?',
      tier: 'confident',
      options: [
        'Nothing is wrong: P(red) = 3/4.',
        'P(red) = 3/8 (count counters, not colour types).',
        'P(red) = 3 (just the count of red counters).',
        'P(red) = 4/8 (the not-red counters).',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'ps-mis-count-categories-not-items',
      hint: 'Probability uses counts of equally likely items, not counts of categories. There are 8 counters in total, so the denominator is 8.',
    },
    // Confident 5
    {
      id: 'ps-q13',
      type: 'spot-misconception',
      stem: 'Sam says "120 percent of pupils in our class brought a packed lunch on Monday, so the probability is 1.2." Is the reasoning sound?',
      tier: 'confident',
      statements: [
        {
          text: 'Sam is right. The probability can be 1.2 if more than the whole class did the action.',
          isMisconception: true,
        },
        {
          text: 'In fact percentages used as a probability sit between 0 and 100. A class total cannot exceed 100 percent of itself, so 120 percent is a slip in the original counting, not a real probability.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'ps-mis-percent-over-100',
    },
    // Confident 6
    {
      id: 'ps-q14',
      type: 'multiple-choice',
      stem: 'A bag holds 20 counters: 5 red, 8 blue, 7 green. Which probability is closest to "even chance"?',
      tier: 'confident',
      options: [
        'P(red) = 5/20',
        'P(green) = 7/20',
        'P(blue) = 8/20',
        'P(not red) = 15/20',
      ],
      correctIndex: 2,
      xpValue: 15,
      hint: 'Even chance is 1/2 = 0.5. Convert each option to a decimal and find the one closest to 0.5.',
    },
    // Confident 7
    {
      id: 'ps-q15',
      type: 'numeric-entry',
      stem: 'A weather app says there is a 30 percent chance of rain in Manchester tomorrow. Write this as a decimal probability.',
      tier: 'confident',
      correctAnswer: 0.3,
      tolerance: 0.001,
      xpValue: 15,
      hint: 'Divide the percentage by 100. 30 / 100 = ?',
    },
    // Confident 8
    {
      id: 'ps-q16',
      type: 'missing-step',
      stem: 'Fill in the missing step. A bag has 4 red counters, 5 blue counters and 1 yellow counter. Find P(blue) as a decimal.',
      tier: 'confident',
      steps: [
        'Count the total number of counters: 4 + 5 + 1 = 10.',
        'Count the number of blue counters: 5.',
        null,
        'Convert to a decimal: 5 / 10 = 0.5, so P(blue) = 0.5.',
      ],
      missingStepIndex: 2,
      correctStep: 'Write the probability as a fraction: P(blue) = 5/10.',
      xpValue: 20,
    },
    // Challenge 1 (Bond-style multi-step word problem)
    {
      id: 'ps-q17',
      type: 'numeric-entry',
      stem: 'A Sevenoaks school tombola has 200 tickets. Aisha buys 8 tickets. What is the probability that one of her tickets wins the single grand prize, as a decimal?',
      tier: 'challenge',
      correctAnswer: 0.04,
      tolerance: 0.001,
      xpValue: 25,
      hint: 'Aisha has 8 of the 200 tickets. P(her ticket is the grand prize ticket) = 8 / 200.',
    },
    // Challenge 2
    {
      id: 'ps-q18',
      type: 'multiple-choice',
      stem: 'A spinner has 8 equal sectors numbered 1 to 8. The probability of landing on a number greater than 5 is reported as 30 percent. Which row is correct?',
      tier: 'challenge',
      options: [
        '30 percent is right: the numbers greater than 5 are 6, 7, 8 and that gives 3/10.',
        '30 percent is wrong. The numbers greater than 5 are 6, 7, 8, so P = 3/8 = 0.375 = 37.5 percent.',
        '30 percent is wrong. The numbers greater than 5 are 5, 6, 7, 8, so P = 4/8 = 50 percent.',
        '30 percent is wrong. The numbers greater than 5 are 6, 7, 8, but the denominator should be 100.',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'ps-mis-count-categories-not-items',
      hint: 'List the favourable outcomes (numbers greater than 5) and the total outcomes (numbers on the spinner). Then divide.',
    },
    // Challenge 3
    {
      id: 'ps-q19',
      type: 'multiple-choice',
      stem: 'A Tunbridge Wells lunch club records that 7 out of every 10 lunches sold last week were cheese sandwiches. The chef writes that the probability of cheese is 70 percent and the probability of "not cheese" is 40 percent. Which row corrects the second figure?',
      tier: 'challenge',
      options: [
        'Both are right.',
        'P(not cheese) = 30 percent, because P(cheese) + P(not cheese) must add to 100 percent.',
        'P(not cheese) = 70 percent, the same as P(cheese).',
        'P(not cheese) = 140 percent, because both probabilities double up.',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'ps-mis-complement-sum',
      hint: 'For a single event with two possible categories, P(event) + P(not event) = 1 (or 100 percent). Find what 100 - 70 gives.',
    },
    // Challenge 4
    {
      id: 'ps-q20',
      type: 'numeric-entry',
      stem: 'A Dover after-school club has 25 pupils. The probability that a pupil chosen at random walks home is 0.6. How many pupils walk home?',
      tier: 'challenge',
      correctAnswer: 15,
      xpValue: 25,
      unit: 'pupils',
      hint: 'If P(walks) = 0.6 in a group of 25, then the count of walkers is 0.6 x 25.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a probability scale question where pupils gave values such as 1.5 or 2 as a probability, treating the scale as unbounded.
    {
      id: 'ps-mis-bounded-0-1',
      description:
        'I think a probability can be bigger than 1 (or smaller than 0) when an event feels very likely or impossible.',
      triggerAnswer: 'bounded-0-1',
      correction:
        'Actually a probability is always a number between 0 and 1 inclusive. Anything outside that range is not a probability.',
      reExplanation:
        'The 0 to 1 scale fixes the limits: 0 is impossible, 1 is certain. A probability of 1.2 would mean "more than certain", which has no meaning. If a calculation gives a value above 1 or below 0, the slip is usually in the count of favourable outcomes or in the unit (using percent without dividing by 100).',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a "bag of counters" probability question where pupils gave the denominator as the number of colours rather than the number of counters.
    {
      id: 'ps-mis-count-categories-not-items',
      description:
        'I find a probability by counting categories, not items. So in a bag with 3 red, 4 blue and 1 green, I write P(red) = 1/3 because there are 3 colour groups.',
      triggerAnswer: 'count-categories-not-items',
      correction:
        'In fact probability uses counts of equally likely items, not counts of category labels. The denominator is the total number of items in the bag.',
      reExplanation:
        'For a bag with 3 red, 4 blue and 1 green counter, the total is 3 + 4 + 1 = 8 counters. P(red) = 3/8, not 1/3. The 1/3 answer would only be right if you picked a colour group at random, which is a different experiment.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2022, Paper 01 (Foundation, Non-calculator), commentary on a percentage-as-probability question where pupils wrote answers such as 120 percent or did not divide by 100 when converting to a decimal.
    {
      id: 'ps-mis-percent-over-100',
      description:
        'I think a percentage probability can go above 100 percent if more than the whole group did the action.',
      triggerAnswer: 'percent-over-100',
      correction:
        'Actually a percentage probability sits between 0 percent and 100 percent. A figure above 100 percent means the original count is wrong.',
      reExplanation:
        'A probability written as a percentage maps to the 0 to 1 scale by dividing by 100. So 70 percent = 0.7 and 100 percent = 1. A claim such as "120 percent of pupils brought a packed lunch" must be a counting slip, since no class can have more pupils than itself.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 2F (Foundation, Calculator), commentary on the "complement" question where pupils calculated P(not A) without using P(A) + P(not A) = 1.
    {
      id: 'ps-mis-complement-sum',
      description:
        'I do not use the rule P(event) + P(not event) = 1, so I work P(not A) from scratch instead of subtracting P(A) from 1.',
      triggerAnswer: 'complement-sum',
      correction:
        'In fact for any single event, P(event) and P(not event) cover every outcome, so they must add to 1.',
      reExplanation:
        'If P(cheese) = 0.7 then P(not cheese) = 1 - 0.7 = 0.3. The two probabilities cover all the lunches sold (cheese versus not cheese), so they must total 1. As a percentage, 70 percent + 30 percent = 100 percent.',
    },
    // Source: NCETM "Misconceptions and how to overcome them: probability" Year 7 transition pack, on pupils confusing the words "impossible" (probability 0) and "unlikely" (small but positive probability).
    {
      id: 'ps-mis-impossible-vs-unlikely',
      description:
        'I treat "unlikely" and "impossible" as the same word, so I label small probabilities such as 1/50 as 0.',
      triggerAnswer: 'impossible-vs-unlikely',
      correction:
        'Actually impossible means the event cannot happen at all (probability 0). Unlikely means it can happen but rarely (a small positive probability).',
      reExplanation:
        'A school raffle with 1 winning ticket out of 50 has P(win) = 1/50 = 0.02. That is small, so the word is unlikely. If the prize were already drawn before the raffle, P(win) would be 0 (impossible). The two events are different and the words must match.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 7 Statistics and Probability, "Probability Basics" page; the "Common mistake" callout that pupils confuse 1/2 (a single event probability) with 1 in 2 odds and write it as 1/3.
    {
      id: 'ps-mis-fraction-form',
      description:
        'I write a "1 in 2" chance as the fraction 1/3 (counting both options as a third entry) instead of 1/2.',
      triggerAnswer: 'fraction-form',
      correction:
        'In fact "1 in 2" means 1 favourable outcome out of 2 equally likely outcomes, so the fraction is 1/2.',
      reExplanation:
        'For a fair coin, the two outcomes are heads and tails. The probability of heads is 1 favourable / 2 total = 1/2 = 0.5 = 50 percent. Writing 1/3 puts a third outcome into the count that does not exist on a coin.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 2F (Foundation, Calculator), commentary on a "place this event on the scale" question where pupils placed a 25 percent value at the centre of the line by treating "unlikely" as the same as "even chance".
    {
      id: 'ps-mis-place-on-line',
      description:
        'I place every probability that is "less than half" at the same point on the 0 to 1 line, ignoring the actual value.',
      triggerAnswer: 'place-on-line',
      correction:
        'Actually each value sits at its own point on the line. 0.1 and 0.4 are both unlikely, but 0.4 is much closer to the middle than 0.1.',
      reExplanation:
        'A 0 to 1 line maps each probability to a unique point. 0.1 sits one tenth of the way from 0 (very near impossible). 0.4 sits four tenths of the way (closer to even chance, but still under it). Words such as "unlikely" describe a region, not a single point.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const probabilityScaleZoneNodes = [probabilityScale]
