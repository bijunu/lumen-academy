import type { SkillNode } from '@/types/content'

export const probabilityExperimental: SkillNode = {
  id: 'maths-probability-experimental',
  title: 'Experimental Probability and Relative Frequency',
  description:
    'Theoretical probability comes from counting equally likely outcomes (P(rolling a 6) = 1/6). Experimental probability comes from running trials and dividing favourable count by total trials (relative frequency). The two values rarely match exactly on small samples, but as the trial count grows the experimental value drifts towards the theoretical value. Apply this to UK Year 7 contexts: school dice survey, M&M colour count, drawing-pin drop. Treat the Bond 11+ classic "8 heads out of 10 tosses, is the coin biased?" with care: 10 trials is far too few to conclude.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-probability',
  zoneName: 'Probability',
  tier: 'confident',
  prerequisites: ['maths-probability-listing-outcomes'],
  curriculum: {
    ks3Objective:
      'Record, describe and analyse the frequency of outcomes of simple probability experiments involving randomness, fairness, equally and unequally likely outcomes, using appropriate language and the 0-1 probability scale.',
    awardingBodies: {
      aqa: 'P1 Record, describe and analyse the frequency of outcomes of probability experiments using tables and frequency trees; P5 Understand that empirical unbiased samples tend towards theoretical probability distributions, with increasing sample size (GCSE Mathematics 8300)',
      edexcel: 'P5 Understand that empirical unbiased samples tend towards theoretical probability distributions, with increasing sample size (GCSE Mathematics 1MA1)',
    },
  },
  scenes: [
    {
      id: 'pe-scene-die-experiment',
      title: 'School Dice Survey: 60 Rolls',
      type: 'diagram',
      instructions:
        'Read how a Year 7 class shares a fair 6-sided die and rolls it 60 times. The theoretical count for each face is 60 / 6 = 10, since P(any face) = 1/6. The experimental table shows that the observed counts vary: 8 ones, 12 twos, 11 threes, 9 fours, 13 fives, 7 sixes. Each is close to 10 but not exactly 10. The experimental probability of rolling a 6 in this trial is 7/60 ~ 0.117, slightly below the theoretical 1/6 ~ 0.167.',
      data: {
        totalRolls: 60,
        theoreticalCount: 10,
        observed: [
          { face: 1, count: 8, relativeFrequency: '8/60 ~ 0.133' },
          { face: 2, count: 12, relativeFrequency: '12/60 = 0.200' },
          { face: 3, count: 11, relativeFrequency: '11/60 ~ 0.183' },
          { face: 4, count: 9, relativeFrequency: '9/60 = 0.150' },
          { face: 5, count: 13, relativeFrequency: '13/60 ~ 0.217' },
          { face: 6, count: 7, relativeFrequency: '7/60 ~ 0.117' },
        ],
        callout:
          'The relative frequencies bunch around 1/6 ~ 0.167, but with random spread. A small sample never matches the theoretical value exactly.',
      },
    },
    {
      id: 'pe-scene-trials-grow',
      title: 'More Trials Sharpen the Estimate',
      type: 'fraction-wall',
      instructions:
        'Click each bar to highlight the relative frequency of "rolling a 6" after different totals of rolls. After 10 rolls, the count of 6s is 1, so the experimental probability is 1/10 = 0.10. After 60 rolls, it is 9/60 = 0.15. After 600 rolls, it settles at 102/600 = 0.17. The theoretical value is 1/6 ~ 0.167. The bars get closer to a fixed shaded fraction as the trial count grows.',
      data: {
        title: 'Relative frequency of rolling a 6 as trials grow',
        bars: [
          { label: 'after 10 rolls: 1 six', segments: 10, highlightedSegments: 1, value: '0.10' },
          { label: 'after 60 rolls: 9 sixes', segments: 60, highlightedSegments: 9, value: '0.15' },
          { label: 'after 600 rolls: 102 sixes', segments: 600, highlightedSegments: 102, value: '0.17' },
          { label: 'theoretical 1/6', segments: 6, highlightedSegments: 1, value: '0.167' },
        ],
        callout:
          'As the trial count grows, the relative frequency drifts towards the theoretical probability. This is the qualitative law of large numbers.',
      },
    },
    {
      id: 'pe-scene-pin-drop',
      title: 'Drawing-pin Drop: Theoretical Cannot Help',
      type: 'diagram',
      instructions:
        'Read how a class drops a drawing pin 100 times and records "point up" versus "point down". The two outcomes are not equally likely, and the theoretical probability cannot be worked out from symmetry: a drawing pin is not a fair coin. The experimental count must do the work. After 100 drops, 67 land point up and 33 land point down. The estimate of P(point up) is 67/100 = 0.67. With 1000 drops the estimate would be more reliable.',
      data: {
        trials: 100,
        observed: { pointUp: 67, pointDown: 33 },
        relativeFrequency: { pointUp: '67/100 = 0.67', pointDown: '33/100 = 0.33' },
        callout:
          'For an asymmetric object such as a drawing pin, the experimental approach is the only one available. P(point up) is whatever the long-run frequency settles at.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'pe-worked-1',
      title: 'Compute relative frequency from a frequency table',
      steps: [
        {
          explanation:
            'Read the trial total. The class rolled the die 60 times.',
          maths: 'total trials = 60',
        },
        {
          explanation:
            'Read the favourable count. There were 7 sixes.',
          maths: 'favourable count = 7',
        },
        {
          explanation:
            'Divide favourable by total trials.',
          maths: 'relative frequency = 7 / 60',
        },
        {
          explanation:
            'Convert to a decimal.',
          maths: '7 / 60 ~ 0.117',
        },
        {
          explanation:
            'Compare with the theoretical value P(6) = 1/6 ~ 0.167. The experimental value is slightly below. The difference is due to small-sample variation.',
          maths: 'experimental 0.117 vs theoretical 0.167',
        },
      ],
    },
    {
      id: 'pe-worked-2',
      title: 'Predict an experimental count from a theoretical probability',
      steps: [
        {
          explanation:
            'Read the theoretical probability. For a fair die, P(rolling a 6) = 1/6.',
          maths: 'P(6) = 1/6',
        },
        {
          explanation:
            'Read the planned trial count. The class will roll 240 times.',
          maths: 'trials = 240',
        },
        {
          explanation:
            'Multiply probability by trial count to get the expected (theoretical) count.',
          maths: 'expected count = 1/6 x 240',
        },
        {
          explanation:
            'Carry out the multiplication.',
        },
        {
          explanation:
            'State the prediction. After 240 rolls, expect about 40 sixes. The actual experimental count will vary around 40, often by a few in either direction.',
          maths: 'expected count = 240 / 6 = 40',
        },
        {
          explanation:
            'A larger trial count would tighten the spread around 40 in proportion: 2 400 rolls would tend to give close to 400 sixes, with a smaller percentage error.',
        },
      ],
    },
  ],
  questions: [
    // Core 1
    {
      id: 'pe-q1',
      type: 'numeric-entry',
      stem: 'A class rolls a fair 6-sided die 60 times. How many sixes are expected by theoretical probability?',
      tier: 'core',
      correctAnswer: 10,
      xpValue: 10,
      misconceptionId: 'pe-mis-exact-prediction',
      hint: 'P(6) = 1/6. Expected count = (1/6) x 60 = 10. Note this is the average expected count, not the exact count any single trial will produce.',
    },
    // Core 2
    {
      id: 'pe-q2',
      type: 'multiple-choice',
      stem: 'In a Year 7 dice experiment, a die was rolled 50 times and landed on 5 a total of 8 times. What is the experimental probability of rolling a 5 in this trial?',
      tier: 'core',
      options: ['8/50', '5/50', '8/5', '50/8'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pe-mis-divide-wrong-way',
      hint: 'Experimental probability = favourable count / total trials. Here that is 8 / 50.',
    },
    // Core 3
    {
      id: 'pe-q3',
      type: 'multiple-choice',
      stem: 'Which value is theoretical, and which is experimental?',
      tier: 'core',
      options: [
        'P(rolling a 6) = 1/6 is experimental; 7 sixes out of 60 rolls is theoretical.',
        'P(rolling a 6) = 1/6 is theoretical; 7 sixes out of 60 rolls is experimental.',
        'Both are theoretical.',
        'Both are experimental.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pe-mis-theoretical-vs-experimental',
      hint: 'Theoretical comes from counting equally likely outcomes; experimental comes from running trials.',
    },
    // Core 4
    {
      id: 'pe-q4',
      type: 'numeric-entry',
      stem: 'A coin was flipped 200 times and landed heads 95 times. What is the experimental probability of heads, as a decimal?',
      tier: 'core',
      correctAnswer: 0.475,
      tolerance: 0.001,
      xpValue: 10,
      hint: 'Experimental P(heads) = 95 / 200.',
    },
    // Core 5
    {
      id: 'pe-q5',
      type: 'multiple-choice',
      stem: 'A drawing pin is dropped 100 times. It lands point up 67 times. What is the experimental probability that it lands point up?',
      tier: 'core',
      options: ['0.5', '33/100', '67/33', '67/100'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Experimental probability = favourable count / total trials = 67 / 100.',
    },
    // Core 6
    {
      id: 'pe-q6',
      type: 'numeric-entry',
      stem: 'A class rolls a fair 6-sided die 240 times. How many sixes does the theoretical probability predict?',
      tier: 'core',
      correctAnswer: 40,
      xpValue: 10,
      hint: 'Expected count = P(6) x trials = (1/6) x 240 = 40.',
    },
    // Core 7
    {
      id: 'pe-q7',
      type: 'spot-misconception',
      stem: 'After 60 rolls of a fair 6-sided die, the class records exactly 12 sixes. Liam says "the die must be biased because the count is not 10, the theoretical value." Is his reasoning sound?',
      tier: 'core',
      statements: [
        {
          text: 'Liam is right. Any difference from the theoretical count means the die is biased.',
          isMisconception: true,
        },
        {
          text: 'In fact small experimental counts vary around the theoretical value due to chance. 12 out of 60 is well within the spread expected for a fair die.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pe-mis-small-sample-bias',
    },
    // Core 8
    {
      id: 'pe-q8',
      type: 'multiple-choice',
      stem: 'A bag of M&Ms is opened and the colours counted: 7 red, 5 blue, 8 yellow, 4 green. What is the experimental probability of picking a yellow sweet from this bag?',
      tier: 'core',
      options: ['8/4', '8/24', '4/24', '7/24'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Total in the bag = 7 + 5 + 8 + 4 = 24. Yellow count = 8. P(yellow) = 8 / 24.',
    },
    // Confident 1
    {
      id: 'pe-q9',
      type: 'spot-misconception',
      stem: 'Aisha tosses a coin 10 times. It lands heads 8 times. She says "the coin must be biased because P(heads) should be 0.5 and we got 0.8." Is her conclusion sound?',
      tier: 'confident',
      statements: [
        {
          text: 'Aisha is right. 8 out of 10 is far enough from 5 out of 10 to declare bias.',
          isMisconception: true,
        },
        {
          text: 'In fact 10 tosses is far too few to declare bias. The relative frequency on small samples is noisy. To test for bias, do hundreds or thousands of tosses, then compare the relative frequency to 0.5.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pe-mis-small-sample-bias',
    },
    // Confident 2
    {
      id: 'pe-q10',
      type: 'multiple-choice',
      stem: 'A class is going to test a drawing pin by dropping it many times. Which trial total is most likely to give a relative frequency close to the long-run probability?',
      tier: 'confident',
      options: ['10 drops', '50 drops', '500 drops', 'all give the same accuracy'],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pe-mis-law-of-large-numbers',
      hint: 'More trials reduce the random spread. The 500-drop relative frequency tends to sit closer to the long-run probability than the 10-drop or 50-drop value.',
    },
    // Confident 3
    {
      id: 'pe-q11',
      type: 'numeric-entry',
      stem: 'A spinner has 5 equal sectors numbered 1 to 5. The class spins it 200 times and lands on a 3 a total of 38 times. What is the experimental probability of landing on a 3, as a decimal?',
      tier: 'confident',
      correctAnswer: 0.19,
      tolerance: 0.005,
      xpValue: 15,
      hint: 'Experimental P(3) = 38 / 200 = 0.19.',
    },
    // Confident 4
    {
      id: 'pe-q12',
      type: 'multiple-choice',
      stem: 'For the spinner in the previous question, what is the theoretical probability of landing on a 3?',
      tier: 'confident',
      options: ['1/3', '0.19', '0.20', '38/200'],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pe-mis-theoretical-vs-experimental',
      hint: 'A fair spinner with 5 equal sectors gives P(any one sector) = 1/5 = 0.20. The 0.19 value is the experimental result, not the theoretical one.',
    },
    // Confident 5
    {
      id: 'pe-q13',
      type: 'multiple-choice',
      stem: 'A drawing pin is dropped 200 times. The relative frequency of "point up" is 0.65. The class plans to drop it another 1 800 times. Which prediction for the new total of 2 000 drops is most reasonable?',
      tier: 'confident',
      options: [
        'about 1 300 point-up drops, since 2 000 x 0.65 = 1 300',
        'exactly 1 300 point-up drops',
        'about 1 000 point-up drops, since the long-run probability must drift back to 0.5',
        'about 100 point-up drops, since past trials force future trials to balance',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'pe-mis-gamblers-fallacy',
      hint: 'For an asymmetric object the long-run probability is whatever the relative frequency settles at, so use 0.65 as the best estimate so far. Expected count = 2 000 x 0.65 = 1 300. Past trials do not force future trials to balance: that is the gambler\'s fallacy.',
    },
    // Confident 6
    {
      id: 'pe-q14',
      type: 'multiple-choice',
      stem: 'Sam rolls a fair 6-sided die 30 times and gets 7 sixes. Which row gives the experimental and theoretical probabilities?',
      tier: 'confident',
      options: [
        'experimental = 1/6, theoretical = 7/30',
        'experimental = 6/7, theoretical = 1/30',
        'both = 7/30',
        'experimental = 7/30, theoretical = 1/6',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'pe-mis-theoretical-vs-experimental',
      hint: 'Experimental comes from the trial: 7/30. Theoretical comes from counting equally likely outcomes: 1/6.',
    },
    // Confident 7
    {
      id: 'pe-q15',
      type: 'numeric-entry',
      stem: 'A coin is tossed 1 000 times. The relative frequency of heads is 0.503. How many heads did the class observe?',
      tier: 'confident',
      correctAnswer: 503,
      xpValue: 15,
      hint: 'Heads count = relative frequency x trials = 0.503 x 1 000 = 503.',
    },
    // Confident 8
    {
      id: 'pe-q16',
      type: 'missing-step',
      stem: 'Fill in the missing step. A spinner has 4 equal sectors. The class spins it 200 times and lands on red 56 times. Find the experimental probability of red, as a decimal.',
      tier: 'confident',
      steps: [
        'Read the favourable count: 56 reds.',
        'Read the total trials: 200 spins.',
        null,
        'Divide and convert to a decimal: 56 / 200 = 0.28. So the experimental P(red) = 0.28.',
      ],
      missingStepIndex: 2,
      correctStep: 'Apply the rule experimental P(red) = favourable / total = 56 / 200.',
      xpValue: 20,
      misconceptionId: 'pe-mis-frequency-not-relative',
    },
    // Challenge 1 (drag-order, multi-step reasoning across trial counts)
    {
      id: 'pe-q17',
      type: 'drag-order',
      stem: 'Order these relative frequencies of heads from a sequence of coin-toss experiments. Each experiment uses a fresh coin. Order from least likely to be a fair coin to most likely.',
      tier: 'challenge',
      items: [
        '50 tosses, 26 heads (relative frequency 0.520)',
        '5 000 tosses, 4 200 heads (relative frequency 0.840)',
        '500 tosses, 295 heads (relative frequency 0.590)',
        '5 000 tosses, 2 510 heads (relative frequency 0.502)',
      ],
      correctOrder: [1, 2, 0, 3],
      xpValue: 25,
      misconceptionId: 'pe-mis-small-sample-bias',
      hint: 'A fair coin has long-run P(heads) = 0.500. Use the trial count to weight your trust: 5 000 tosses at 0.840 is strong evidence of bias; 50 tosses at 0.520 could easily be a fair coin.',
    },
    // Challenge 1 (Bond-style multi-step)
    {
      id: 'pe-q18',
      type: 'numeric-entry',
      stem: 'A Sevenoaks Year 7 class shares a drawing pin and drops it 600 times. The pin lands point up 396 times. How many more point-up drops than the theoretical 50/50 estimate did the class observe? (Theoretical estimate uses P(point up) = 0.5.)',
      tier: 'challenge',
      correctAnswer: 96,
      xpValue: 25,
      unit: 'drops',
      hint: 'Theoretical 50/50 estimate: 0.5 x 600 = 300. Experimental count: 396. Difference: 396 - 300 = 96. (The drawing pin is asymmetric, so the 50/50 estimate is poor here.)',
    },
    // Challenge 2
    {
      id: 'pe-q19',
      type: 'multiple-choice',
      stem: 'A Tunbridge Wells class tests a die. After 60 rolls, the relative frequency of 6s is 5/60 ~ 0.083. After 600 rolls it is 92/600 ~ 0.153. After 6 000 rolls it is 985/6 000 ~ 0.164. What is the most reasonable conclusion?',
      tier: 'challenge',
      options: [
        'The die is biased: relative frequency rose from 0.083 to 0.164.',
        'The die is fair: the relative frequency is settling near 1/6 ~ 0.167 as trials grow, in line with the law of large numbers.',
        'The die is biased: the relative frequency is still below 1/6.',
        'There is not enough information.',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'pe-mis-law-of-large-numbers',
      hint: 'On small samples the relative frequency is noisy (0.083 from 60 rolls). As trials grow it settles near 1/6 ~ 0.167. The drift towards the theoretical value is the qualitative law of large numbers, not evidence of bias.',
    },
    // Challenge 3
    {
      id: 'pe-q20',
      type: 'numeric-entry',
      stem: 'A Manchester Year 7 class drops a drawing pin 400 times. It lands point up 252 times. The class predicts that across 1 200 drops the count of point-up landings will scale up in the same ratio. What count do they predict?',
      tier: 'challenge',
      correctAnswer: 756,
      xpValue: 25,
      unit: 'drops',
      hint: 'Experimental P(point up) = 252 / 400 = 0.63. Predicted count for 1 200 drops = 0.63 x 1 200 = 756.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a small-sample experimental probability question where pupils declared a coin biased after 8 heads in 10 tosses.
    {
      id: 'pe-mis-small-sample-bias',
      description:
        'I conclude an item (coin, die, spinner) is biased after a small run of imbalanced results, such as 8 heads in 10 tosses or 12 sixes in 60 rolls.',
      triggerAnswer: 'small-sample-bias',
      correction:
        'In fact small samples vary a lot from the theoretical probability by chance alone. To test for bias, you need hundreds or thousands of trials.',
      reExplanation:
        'For a fair coin, getting 8 heads in 10 tosses happens about 4 percent of the time, which is uncommon but not strong evidence of bias. To declare a coin biased you would want the relative frequency to stay far from 0.5 over hundreds or thousands of tosses. With small samples, the safe answer is "not enough trials to conclude".',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a "compare theoretical and experimental probability" question where pupils swapped the two labels.
    {
      id: 'pe-mis-theoretical-vs-experimental',
      description:
        'I treat the theoretical probability and the experimental probability as the same quantity, or I swap which is which.',
      triggerAnswer: 'theoretical-vs-experimental',
      correction:
        'Actually theoretical probability is computed from counting equally likely outcomes (P(6) = 1/6 for a fair die). Experimental probability is the relative frequency observed in actual trials (7/60 in this experiment).',
      reExplanation:
        'For a fair 6-sided die, P(6) = 1/6 is theoretical and lives in the maths, regardless of any rolling. After 60 rolls and 7 sixes, the experimental probability is 7/60. The two values rarely match exactly on small samples, but they should drift together as trial counts grow.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 2F (Foundation, Calculator), commentary on a "law of large numbers" qualitative question where pupils believed more trials would push the relative frequency further from the theoretical value rather than closer.
    {
      id: 'pe-mis-law-of-large-numbers',
      description:
        'I think more trials make the relative frequency drift further from the theoretical value, or that the trial count does not affect how reliable the estimate is.',
      triggerAnswer: 'law-of-large-numbers',
      correction:
        'In fact more trials tend to bring the relative frequency closer to the theoretical probability, on average.',
      reExplanation:
        'After 60 rolls of a fair die, the relative frequency of sixes might be 7/60 ~ 0.117 or 13/60 ~ 0.217. After 6 000 rolls it might be 985/6 000 ~ 0.164. The estimate gets sharper, not noisier, as trials grow. This is the qualitative law of large numbers: average outcomes settle near the theoretical value over the long run.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2022, Paper 01 (Foundation, Non-calculator), commentary on a relative-frequency question where pupils divided total trials by favourable count instead of favourable by total.
    {
      id: 'pe-mis-divide-wrong-way',
      description:
        'I compute relative frequency by dividing total trials by favourable count, instead of favourable count by total trials.',
      triggerAnswer: 'divide-wrong-way',
      correction:
        'Actually relative frequency is favourable / total. Putting the bigger number on top gives a value above 1, which cannot be a probability.',
      reExplanation:
        'For 8 favourable outcomes in 50 trials, relative frequency = 8 / 50 = 0.16, which sits in [0, 1] as a probability must. Dividing 50 / 8 gives 6.25, which is bigger than 1 and so cannot be a probability. The "favourable on top" rule matches the same rule for theoretical probability.',
    },
    // Source: NCETM "Statistics and Probability at KS3" reference, on the "gambler's fallacy" version of small-sample reasoning where pupils believe a streak of heads makes the next toss more likely to be tails.
    {
      id: 'pe-mis-gamblers-fallacy',
      description:
        'I think past trials change future trials, so a run of heads makes the next toss more likely to be tails (the gambler\'s fallacy).',
      triggerAnswer: 'gamblers-fallacy',
      correction:
        'In fact each toss of a fair coin is independent. P(heads) = 0.5 every time, regardless of the run that came before.',
      reExplanation:
        'A fair coin has no memory. After five heads in a row, P(heads) on the next toss is still 0.5 and P(tails) is still 0.5. The long-run relative frequency drifts towards 0.5 because chance evens out across many trials, not because a specific past run forces a balancing future run.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 7 Statistics and Probability, "Experimental Probability" page; the "Common mistake" callout that pupils predict an exact experimental count instead of an approximate range when given a theoretical probability and trial count.
    {
      id: 'pe-mis-exact-prediction',
      description:
        'I expect the experimental count to match the theoretical count exactly. So if P(6) = 1/6 and there are 60 rolls, I expect exactly 10 sixes.',
      triggerAnswer: 'exact-prediction',
      correction:
        'Actually the theoretical count is what you expect on average. The experimental count varies around it from trial to trial.',
      reExplanation:
        'For 60 rolls of a fair die, the theoretical count of sixes is 10. The experimental count might be 7, 9, 12 or 13 in different runs. Each is reasonable. As the trial count grows, the experimental count gets close to the theoretical count in proportion: 600 rolls might give 95 to 105 sixes, sitting close to the theoretical 100.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 2F (Foundation, Calculator), commentary on a "frequency table" question where pupils used the frequency directly as a probability instead of the relative frequency.
    {
      id: 'pe-mis-frequency-not-relative',
      description:
        'I report the raw count from a frequency table as the probability, instead of dividing by the total trials.',
      triggerAnswer: 'frequency-not-relative',
      correction:
        'In fact a probability is the relative frequency: count divided by total trials. The raw count alone is not a probability.',
      reExplanation:
        'For a spinner spun 200 times and landing on red 56 times, the experimental probability of red is 56 / 200 = 0.28, not 56. The "0.28" value sits in [0, 1] as a probability must; "56" does not. Always divide by the trial total before reporting the answer.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const probabilityExperimentalZoneNodes = [probabilityExperimental]
