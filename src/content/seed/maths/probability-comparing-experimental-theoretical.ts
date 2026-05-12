import type { SkillNode } from '@/types/content'

export const probabilityComparingExperimentalTheoretical: SkillNode = {
  id: 'maths-probability-comparing-experimental-theoretical',
  title: 'Comparing Experimental and Theoretical Probability',
  description:
    'Set the experimental relative frequency next to the theoretical probability and judge fairness. Theoretical comes from counting equally likely outcomes; experimental comes from running trials and dividing favourable count by trial total. On small samples the two values rarely match: 7 heads in 10 tosses tells you almost nothing, since random spread for a fair coin can easily produce that. As trial counts grow into the hundreds and thousands the experimental value drifts close to the theoretical value (informal law of large numbers); a stable gap then becomes evidence of bias. Apply this to UK Year 7 contexts: a Sevenoaks dice survey, a school canteen sweet count, a Tunbridge Wells drawing-pin drop. Convert between fractions, decimals, and percentages so the two values can be compared in the same form. Keep the gambler\'s fallacy out: each independent trial has the same probability, regardless of recent runs.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-probability',
  zoneName: 'Probability',
  tier: 'challenge',
  prerequisites: [
    'maths-probability-experimental',
    'maths-probability-equally-likely-events',
  ],
  curriculum: {
    ks3Objective:
      'Understand that the probabilities of all possible outcomes sum to 1; understand that empirical unbiased samples tend towards theoretical probability distributions, with increasing sample size; compare experimental relative frequencies with theoretical probability.',
    awardingBodies: {
      aqa: 'P5 Understand that empirical unbiased samples tend towards theoretical probability distributions, with increasing sample size (GCSE Mathematics 8300)',
      edexcel: 'P5 Understand that empirical unbiased samples tend towards theoretical probability distributions, with increasing sample size (GCSE Mathematics 1MA1)',
      ocr: '11.02d Compare experimental data with theoretical probabilities; recognise that increasing sample size generally leads to better estimates (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'pct-scene-side-by-side',
      title: 'Year 7 Dice Survey: Side by Side',
      type: 'diagram',
      instructions:
        'Read how a Sevenoaks Year 7 class rolls a fair 6-sided die 120 times and records each face. The theoretical probability for any face is 1/6, so the theoretical count is 120 / 6 = 20. The observed table shows 18, 22, 19, 21, 23, 17. Each experimental relative frequency sits within 0.025 of 1/6 ~ 0.167. The two columns line up well: no face is far enough off to suggest the die is biased on a sample of 120.',
      data: {
        totalRolls: 120,
        theoreticalProbability: '1/6 ~ 0.167',
        theoreticalCount: 20,
        rows: [
          { face: 1, observed: 18, relativeFrequency: '18/120 = 0.150', gap: '0.017 below 1/6' },
          { face: 2, observed: 22, relativeFrequency: '22/120 ~ 0.183', gap: '0.017 above 1/6' },
          { face: 3, observed: 19, relativeFrequency: '19/120 ~ 0.158', gap: '0.008 below 1/6' },
          { face: 4, observed: 21, relativeFrequency: '21/120 = 0.175', gap: '0.008 above 1/6' },
          { face: 5, observed: 23, relativeFrequency: '23/120 ~ 0.192', gap: '0.025 above 1/6' },
          { face: 6, observed: 17, relativeFrequency: '17/120 ~ 0.142', gap: '0.025 below 1/6' },
        ],
        callout:
          'Largest gap is 0.025, which is within ordinary random variation for 120 rolls. No evidence of bias.',
      },
    },
    {
      id: 'pct-scene-loaded-die',
      title: 'A Loaded Die: Bias That Persists',
      type: 'fraction-wall',
      instructions:
        'Compare three trial totals for a die that the maker has weighted in favour of 6. After 60 rolls the relative frequency of 6 is 14/60 ~ 0.233. After 600 rolls it is 156/600 = 0.260. After 6 000 rolls it is 1 542/6 000 = 0.257. The theoretical fair value is 1/6 ~ 0.167. As trial counts grow, the experimental value settles near 0.257, well above 1/6. The gap does not shrink, so the die is biased.',
      data: {
        title: 'Relative frequency of 6 for a loaded die as trials grow',
        bars: [
          { label: 'after 60 rolls: 14 sixes', segments: 60, highlightedSegments: 14, value: '0.233' },
          { label: 'after 600 rolls: 156 sixes', segments: 600, highlightedSegments: 156, value: '0.260' },
          { label: 'after 6 000 rolls: 1 542 sixes', segments: 6000, highlightedSegments: 1542, value: '0.257' },
          { label: 'theoretical 1/6 (fair)', segments: 6, highlightedSegments: 1, value: '0.167' },
        ],
        callout:
          'A fair die would settle near 0.167. This die settles near 0.257 instead. The persistent gap is the signal of bias.',
      },
    },
    {
      id: 'pct-scene-spinner-comparison',
      title: 'Spinner: Theoretical 0.20, Experimental 0.19',
      type: 'diagram',
      instructions:
        'Read about a fair 5-sector spinner numbered 1 to 5. The theoretical probability of landing on sector 3 is 1/5 = 0.20 = 20 percent. A class spins it 200 times and lands on 3 a total of 38 times, giving an experimental probability of 38/200 = 0.19 = 19 percent. The two values are within 0.01 of each other. Convert all three forms (fraction, decimal, percentage) before comparing. The gap is tiny on a 200-spin sample, so there is no evidence the spinner is biased.',
      data: {
        spinnerSectors: 5,
        theoretical: { fraction: '1/5', decimal: 0.2, percentage: '20%' },
        experimental: {
          trials: 200,
          favourable: 38,
          fraction: '38/200',
          decimal: 0.19,
          percentage: '19%',
        },
        gap: { absolute: 0.01, judgement: 'within ordinary variation for 200 spins' },
        callout:
          'Always convert to a common form (decimal usually easiest) before comparing experimental and theoretical values.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'pct-worked-1',
      title: 'Compare experimental and theoretical for a fair coin claim',
      steps: [
        {
          explanation:
            'State the theoretical probability. A fair coin has P(heads) = 1/2 = 0.500.',
          maths: 'theoretical P(heads) = 0.500',
        },
        {
          explanation:
            'Read the trial result. A class tosses the coin 400 times and records 184 heads.',
          maths: 'trials = 400, favourable = 184',
        },
        {
          explanation:
            'Compute the experimental probability as relative frequency.',
          maths: 'experimental P(heads) = 184 / 400 = 0.460',
        },
        {
          explanation:
            'Compare the two values. The gap is 0.500 minus 0.460 = 0.040.',
          maths: 'gap = 0.040',
        },
        {
          explanation:
            'Judge the gap against the trial count. On 400 tosses, a gap of 0.040 is within ordinary random variation. There is no strong evidence of bias.',
          maths: 'verdict: no evidence of bias',
        },
      ],
    },
    {
      id: 'pct-worked-2',
      title: 'Decide whether a spinner is biased after 1 000 spins',
      steps: [
        {
          explanation:
            'State the theoretical probability. A fair 4-colour spinner gives P(red) = 1/4 = 0.250.',
          maths: 'theoretical P(red) = 0.250',
        },
        {
          explanation:
            'Read the trial result. The spinner is spun 1 000 times and lands on red 372 times.',
          maths: 'trials = 1 000, favourable = 372',
        },
        {
          explanation:
            'Compute the experimental probability.',
          maths: 'experimental P(red) = 372 / 1 000 = 0.372',
        },
        {
          explanation:
            'Compute the gap between experimental and theoretical.',
          maths: 'gap = 0.372 minus 0.250 = 0.122',
        },
        {
          explanation:
            'Judge the gap against the trial count. On 1 000 spins, a gap of 0.122 is large; a fair spinner would settle much closer to 0.250.',
        },
        {
          explanation:
            'State the verdict. The spinner is most likely biased in favour of red. Use the experimental value 0.372 as the best current estimate of P(red) for this physical spinner.',
          maths: 'verdict: biased; best estimate of P(red) = 0.372',
        },
      ],
    },
  ],
  questions: [
    // Core 1, numeric, compute experimental and quote theoretical
    {
      id: 'pct-q1',
      type: 'numeric-entry',
      stem: 'A fair 6-sided die is rolled 90 times. How many sixes does the theoretical probability predict?',
      tier: 'core',
      correctAnswer: 15,
      xpValue: 10,
      misconceptionId: 'pct-mis-exact-prediction',
      hint: 'Expected count = P(6) x trials = (1/6) x 90 = 15. This is the average expected count, not the exact result of any one trial.',
    },
    // Core 2, MCQ, identify which value is which
    {
      id: 'pct-q2',
      type: 'multiple-choice',
      stem: 'A fair coin is tossed 80 times and lands heads 36 times. Which value is the experimental probability of heads?',
      tier: 'core',
      options: ['36/80', '1/2', '36/44', '80/36'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pct-mis-theoretical-vs-experimental',
      hint: 'Experimental probability = favourable count / trials = 36 / 80. The 1/2 value is theoretical.',
    },
    // Core 3, numeric, compute experimental as decimal
    {
      id: 'pct-q3',
      type: 'numeric-entry',
      stem: 'A fair 4-colour spinner is spun 200 times and lands on red 46 times. What is the experimental probability of red, as a decimal?',
      tier: 'core',
      correctAnswer: 0.23,
      tolerance: 0.005,
      xpValue: 10,
      hint: 'Experimental P(red) = 46 / 200 = 0.23.',
    },
    // Core 4, MCQ, theoretical for a fair spinner
    {
      id: 'pct-q4',
      type: 'multiple-choice',
      stem: 'For the spinner in the previous question (4 equal colour sectors), what is the theoretical probability of red, as a decimal?',
      tier: 'core',
      options: ['0.23', '0.46', '0.25', '0.50'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pct-mis-theoretical-vs-experimental',
      hint: 'A fair 4-sector spinner gives P(any one sector) = 1/4 = 0.25. The 0.23 value is the experimental result, not the theoretical one.',
    },
    // Core 5, numeric, compute the gap
    {
      id: 'pct-q5',
      type: 'numeric-entry',
      stem: 'A fair coin is tossed 500 times and lands heads 245 times. What is the gap between the experimental and theoretical probabilities of heads, as a decimal?',
      tier: 'core',
      correctAnswer: 0.01,
      tolerance: 0.001,
      xpValue: 10,
      hint: 'Experimental P(heads) = 245 / 500 = 0.490. Theoretical = 0.500. Gap = 0.500 minus 0.490 = 0.010.',
    },
    // Core 6, MCQ, conversion to compare
    {
      id: 'pct-q6',
      type: 'multiple-choice',
      stem: 'The theoretical probability of an event is 1/4. The experimental probability after 200 trials is 0.27. Which statement compares them correctly?',
      tier: 'core',
      options: [
        'The experimental probability (0.27) is higher than the theoretical (0.25) by 0.02.',
        'The experimental probability is lower than the theoretical by 0.02.',
        'They cannot be compared because one is a fraction and one is a decimal.',
        'They are exactly equal.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pct-mis-different-forms',
      hint: 'Convert 1/4 = 0.25 first, then compare with 0.27. Experimental sits 0.02 above theoretical.',
    },
    // Core 7, missing-step
    {
      id: 'pct-q7',
      type: 'missing-step',
      stem: 'Fill in the missing step. A fair 5-sector spinner is spun 300 times and lands on sector 2 a total of 54 times. Find the gap between the experimental and theoretical probabilities of sector 2, as a decimal.',
      tier: 'core',
      steps: [
        'Theoretical P(sector 2) = 1/5 = 0.200.',
        'Experimental P(sector 2) = 54 / 300 = 0.180.',
        null,
        'State the verdict: the gap of 0.020 is small for 300 spins. No evidence of bias.',
      ],
      missingStepIndex: 2,
      correctStep: 'Compute the gap: 0.200 minus 0.180 = 0.020.',
      xpValue: 15,
      misconceptionId: 'pct-mis-divide-wrong-way',
    },
    // Confident 1, MCQ, fair vs biased verdict on a small sample
    {
      id: 'pct-q8',
      type: 'multiple-choice',
      stem: 'A coin is tossed 20 times and lands heads 13 times. Theoretical P(heads) = 0.5. Which conclusion is most reasonable?',
      tier: 'confident',
      options: [
        'The coin is biased: experimental 0.65 is far from 0.5.',
        'The coin is fair: 13 out of 20 is exactly the expected result.',
        'There is not enough information to declare bias; 20 tosses is too small a sample.',
        'The next toss must be tails so the count balances.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pct-mis-small-sample-bias',
      hint: 'Twenty tosses is far too few to declare bias. Random spread for a fair coin can easily produce 13 heads. To test for bias, run hundreds or thousands of trials.',
    },
    // Confident 2, numeric, biased die verdict via gap
    {
      id: 'pct-q9',
      type: 'numeric-entry',
      stem: 'A 6-sided die is rolled 600 times. It lands on 6 a total of 156 times. What is the gap between the experimental and theoretical probabilities of rolling a 6, as a decimal? Give your answer to 3 decimal places.',
      tier: 'confident',
      correctAnswer: 0.093,
      tolerance: 0.002,
      xpValue: 15,
      hint: 'Experimental P(6) = 156 / 600 = 0.260. Theoretical P(6) = 1/6 ~ 0.167. Gap = 0.260 minus 0.167 = 0.093.',
    },
    // Confident 3, MCQ, conversion (percentage to decimal to fraction)
    {
      id: 'pct-q10',
      type: 'multiple-choice',
      stem: 'A class records that the experimental probability of an event is 35 percent. The theoretical probability is 3/8. Which conversion lets you compare them?',
      tier: 'confident',
      options: [
        'experimental 0.35, theoretical 0.375; gap 0.025',
        'experimental 35, theoretical 3.8; gap 31.2',
        'experimental 35/100, theoretical 3/8; the forms differ so no comparison',
        'experimental 0.35, theoretical 0.300; gap 0.050',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'pct-mis-different-forms',
      hint: 'Convert each value to a decimal: 35 percent = 0.35, and 3/8 = 0.375. Gap = 0.375 minus 0.35 = 0.025.',
    },
    // Confident 4, MCQ, sample size weighting
    {
      id: 'pct-q11',
      type: 'multiple-choice',
      stem: 'Two classes test the same coin. Class A tosses it 50 times and gets 28 heads. Class B tosses it 5 000 times and gets 2 800 heads. Both record an experimental P(heads) of 0.56. Which result gives stronger evidence of bias?',
      tier: 'confident',
      options: [
        'Class A, because 28 out of 50 looks unusual.',
        'Class B, because 5 000 trials is far more than 50.',
        'Both equally, because the experimental probability is the same.',
        'Neither: the experimental probability matches 0.5 closely.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'pct-mis-sample-size-equal',
      hint: 'A 0.06 gap on 50 trials could easily be chance. A 0.06 gap that persists across 5 000 trials is strong evidence the coin is biased. Bigger samples give more confident verdicts.',
    },
    // Confident 5, spot-misconception, gambler's fallacy
    {
      id: 'pct-q12',
      type: 'spot-misconception',
      stem: 'A fair coin has just landed heads five times in a row. Eli says: "the next toss must be tails because the count needs to balance".',
      tier: 'confident',
      statements: [
        {
          text: 'Eli is right. After five heads, P(tails) on the next toss rises above 0.5.',
          isMisconception: true,
        },
        {
          text: 'In fact each toss of a fair coin is independent. P(heads) on the next toss is still 0.5 and P(tails) is still 0.5, regardless of the run.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pct-mis-gamblers-fallacy',
    },
    // Confident 6, MCQ, biased verdict on a large sample
    {
      id: 'pct-q13',
      type: 'multiple-choice',
      stem: 'A 6-sided die is rolled 6 000 times. It lands on 6 a total of 1 540 times. The theoretical probability of rolling a 6 on a fair die is 1/6 ~ 0.167. Which verdict is most reasonable?',
      tier: 'confident',
      options: [
        'The die is fair: 1 540 is close to the theoretical count of 1 000.',
        'There is not enough information to decide.',
        'The die is biased in favour of 6: the experimental probability 0.257 stays well above 0.167 across a large sample.',
        'The die is biased against 6: the count is below the theoretical value.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pct-mis-small-sample-bias',
      hint: 'Experimental P(6) = 1 540 / 6 000 ~ 0.257. Theoretical P(6) = 1/6 ~ 0.167. The 0.090 gap on 6 000 rolls is too large to attribute to chance.',
    },
    // Confident 7, missing-step
    {
      id: 'pct-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step. A fair 6-sided die is rolled 300 times and lands on 3 a total of 42 times. Decide whether the result is consistent with a fair die.',
      tier: 'confident',
      steps: [
        'Theoretical P(3) = 1/6 ~ 0.167.',
        'Experimental P(3) = 42 / 300 = 0.140.',
        'Compute the gap: 0.167 minus 0.140 = 0.027.',
        null,
      ],
      missingStepIndex: 3,
      correctStep:
        'Judge the verdict: a gap of 0.027 on 300 rolls is within ordinary random variation, so the result is consistent with a fair die.',
      xpValue: 20,
      misconceptionId: 'pct-mis-small-sample-bias',
    },
    // Confident 8, numeric, predict count from experimental rate
    {
      id: 'pct-q15',
      type: 'numeric-entry',
      stem: 'A drawing pin is dropped 400 times and lands point up 268 times. The class plans another 600 drops. Using the experimental probability so far as the best estimate, predict the number of point-up drops in the next 600.',
      tier: 'confident',
      correctAnswer: 402,
      xpValue: 20,
      unit: 'drops',
      hint: 'Experimental P(point up) = 268 / 400 = 0.67. Predicted count for 600 drops = 0.67 x 600 = 402.',
    },
    // Challenge 1, drag-order, weight evidence by trial count
    {
      id: 'pct-q16',
      type: 'drag-order',
      stem: 'Order these coin-toss results from weakest to strongest evidence that the coin is biased. Each result uses a fresh coin and reports experimental P(heads).',
      tier: 'challenge',
      items: [
        '20 tosses, 13 heads (experimental 0.650)',
        '5 000 tosses, 2 530 heads (experimental 0.506)',
        '500 tosses, 295 heads (experimental 0.590)',
        '5 000 tosses, 3 200 heads (experimental 0.640)',
      ],
      correctOrder: [1, 0, 2, 3],
      xpValue: 25,
      misconceptionId: 'pct-mis-sample-size-equal',
      hint: 'A fair coin has P(heads) = 0.500. Weight the gap by the trial count. A 0.006 gap on 5 000 tosses is no evidence at all. A 0.150 gap on 20 tosses is weak. A 0.090 gap that persists across 500 tosses is stronger. A 0.140 gap across 5 000 tosses is the strongest.',
    },
    // Challenge 2, Bond-style multi-step word problem (numeric)
    {
      id: 'pct-q17',
      type: 'numeric-entry',
      stem: 'At a Tunbridge Wells school fair, a stallholder runs a "guess the colour" game with a bag of red, blue, and yellow balls. The stall sign claims the bag has equal numbers of each colour. In 240 picks (with replacement) the bag delivers 109 red, 71 blue, and 60 yellow. How many MORE reds did the bag deliver than the count predicted by the equal-numbers claim?',
      tier: 'challenge',
      correctAnswer: 29,
      xpValue: 25,
      unit: 'picks',
      hint: 'Equal numbers means theoretical P(red) = 1/3, so theoretical count = 240 / 3 = 80. Experimental count = 109. Difference = 109 minus 80 = 29.',
    },
    // Challenge 3, MCQ, judge bias from a settling experimental value
    {
      id: 'pct-q18',
      type: 'multiple-choice',
      stem: 'A Manchester class tests a spinner labelled with 5 equal sectors. After 100 spins, experimental P(sector 1) = 0.30. After 1 000 spins, it is 0.31. After 10 000 spins, it is 0.305. Which conclusion is best?',
      tier: 'challenge',
      options: [
        'The spinner is fair: more trials should bring the value to 0.20.',
        'The spinner is biased in favour of sector 1: the experimental value settles near 0.305, well above the fair value of 0.20.',
        'There is not enough information.',
        'The spinner is biased against sector 1.',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'pct-mis-law-of-large-numbers',
      hint: 'Theoretical P(any one sector) for a fair 5-sector spinner = 1/5 = 0.20. The experimental value settles near 0.305, not 0.20. The 0.105 gap that persists across 10 000 spins is strong evidence of bias.',
    },
    // Challenge 4, MCQ, mixed-form comparison
    {
      id: 'pct-q19',
      type: 'multiple-choice',
      stem: 'For an event, the theoretical probability is 2/5. A class records the experimental probability as 38 percent after 500 trials. Which statement is true?',
      tier: 'challenge',
      options: [
        'The values cannot be compared since they are in different forms.',
        'The experimental value is higher than the theoretical value.',
        'The experimental value is higher than the theoretical value by 0.02.',
        'The experimental value (0.38) is lower than the theoretical value (0.40) by 0.02; this gap is small for 500 trials, so the result is consistent with the theoretical model.',
      ],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'pct-mis-different-forms',
      hint: 'Convert: 2/5 = 0.40, 38 percent = 0.38. Gap = 0.40 minus 0.38 = 0.02. On 500 trials, a 0.02 gap is well within random variation.',
    },
    // Challenge 5, Bond-style multi-step word problem (numeric)
    {
      id: 'pct-q20',
      type: 'numeric-entry',
      stem: 'A Sevenoaks Year 7 class shares a bag of mints. The bag claims an equal mix of three flavours: lemon, mint, and orange. The class draws 360 sweets (replacing each one) and counts 156 lemon. Use the experimental probability to predict the number of lemon sweets in 1 200 draws from the same bag.',
      tier: 'challenge',
      correctAnswer: 520,
      xpValue: 25,
      unit: 'sweets',
      hint: 'Experimental P(lemon) = 156 / 360 ~ 0.4333. Predicted count for 1 200 draws = 0.4333 x 1 200 = 520. (The bag is most likely lemon-heavy, since theoretical fair P(lemon) = 1/3 ~ 0.333.)',
    },
    // Challenge 6, MCQ, fairness verdict using settling behaviour
    {
      id: 'pct-q21',
      type: 'multiple-choice',
      stem: 'A class tests a die for bias. After 60 rolls, experimental P(6) = 4/60 ~ 0.067. After 600 rolls it is 95/600 ~ 0.158. After 6 000 rolls it is 998/6 000 ~ 0.166. The theoretical fair value is 1/6 ~ 0.167. Which statement is most accurate?',
      tier: 'challenge',
      options: [
        'The die is biased against 6: 4 sixes in 60 rolls is far too few.',
        'The die is fair: as the trial count grows the experimental value drifts to 0.166, sitting on top of the theoretical 0.167.',
        'The die is biased in favour of 6 because the experimental value rose.',
        'There is not enough information.',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'pct-mis-law-of-large-numbers',
      hint: 'On 60 rolls the experimental value is noisy (0.067). As trials grow it settles to 0.166, almost exactly the theoretical 0.167. This is the qualitative law of large numbers, not evidence of bias.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a small-sample experimental probability question where pupils declared a coin biased after 8 heads in 10 tosses.
    {
      id: 'pct-mis-small-sample-bias',
      description:
        'I declare a coin, die, or spinner biased after a small run of imbalanced results, such as 13 heads in 20 tosses or 4 sixes in 60 rolls.',
      triggerAnswer: 'small-sample-bias',
      correction:
        'In fact small samples vary a lot from the theoretical value by chance alone. To declare bias you need hundreds or thousands of trials.',
      reExplanation:
        'For a fair coin, getting 13 heads in 20 tosses happens roughly 13 percent of the time, which is common, not rare. Bias verdicts need persistent gaps across large samples. With small samples the safe answer is "not enough trials to conclude". Across 5 000 tosses, an experimental value still 0.05 above 0.5 would give real evidence.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a "compare theoretical and experimental probability" question where pupils swapped the two labels.
    {
      id: 'pct-mis-theoretical-vs-experimental',
      description:
        'I treat the theoretical probability and the experimental probability as the same value, or I swap which is which when reporting them.',
      triggerAnswer: 'theoretical-vs-experimental',
      correction:
        'Actually theoretical comes from counting equally likely outcomes (P(6) = 1/6). Experimental is the relative frequency observed in real trials (such as 36/80).',
      reExplanation:
        'For a fair coin, theoretical P(heads) = 1/2 lives in the maths and never changes. Experimental P(heads) is whatever fraction of actual tosses came up heads. After 80 tosses giving 36 heads, experimental P(heads) = 36/80 = 0.45 while theoretical stays at 0.5. The two values rarely match exactly on small samples but should drift together as trial counts grow.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 2F (Foundation, Calculator), commentary on a "law of large numbers" qualitative question where pupils believed more trials would push the relative frequency further from the theoretical value rather than closer.
    {
      id: 'pct-mis-law-of-large-numbers',
      description:
        'I think more trials make the experimental value drift further from the theoretical value, or that any drift is a sign of bias.',
      triggerAnswer: 'law-of-large-numbers',
      correction:
        'In fact more trials tend to bring the experimental value closer to the theoretical value when the setup is fair.',
      reExplanation:
        'After 60 rolls of a fair die the experimental P(6) might be 0.067 or 0.217. After 6 000 rolls it sits near 0.166, almost exactly 1/6. The estimate sharpens as trials grow. A gap that shrinks toward zero suggests fairness. A gap that stays large across thousands of trials suggests bias. The drift toward the theoretical value is the qualitative law of large numbers.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2022, Paper 01 (Foundation, Non-calculator), commentary on a relative-frequency question where pupils divided total trials by favourable count instead of favourable by total.
    {
      id: 'pct-mis-divide-wrong-way',
      description:
        'I compute the experimental probability by dividing total trials by favourable count, instead of favourable count by total trials.',
      triggerAnswer: 'divide-wrong-way',
      correction:
        'Actually relative frequency is favourable / total. Putting the bigger number on top gives a value above 1, which cannot be a probability.',
      reExplanation:
        'For 54 favourable outcomes in 300 trials, relative frequency = 54 / 300 = 0.180, which sits in [0, 1] as a probability must. Dividing 300 / 54 ~ 5.56 lies outside [0, 1] and so cannot be a probability. The "favourable on top" rule is the same one used for theoretical probability, so the two values stay comparable.',
    },
    // Source: NCETM "Statistics and Probability at KS3" reference, on the "gambler's fallacy" version of small-sample reasoning where pupils believe a streak of heads makes the next toss more likely to be tails.
    {
      id: 'pct-mis-gamblers-fallacy',
      description:
        'I think past trials change future trials, so a run of heads makes the next toss more likely to be tails (the gambler\'s fallacy).',
      triggerAnswer: 'gamblers-fallacy',
      correction:
        'In fact each toss of a fair coin is independent. P(heads) = 0.5 every time, regardless of the run that came before.',
      reExplanation:
        'A fair coin has no memory. After five heads in a row, P(heads) on the next toss is still 0.5 and P(tails) is still 0.5. The long-run experimental value drifts toward 0.5 because chance evens out across many trials, not because a specific past run forces a balancing future run.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 7 Statistics and Probability, "Comparing experimental and theoretical probability" page; "Common mistake" callout that pupils predict an exact experimental count instead of an approximate range.
    {
      id: 'pct-mis-exact-prediction',
      description:
        'I expect the experimental count to match the theoretical count exactly. So if P(6) = 1/6 and there are 90 rolls, I expect exactly 15 sixes every time.',
      triggerAnswer: 'exact-prediction',
      correction:
        'Actually the theoretical count is the average expected count. The experimental count varies around it from trial to trial.',
      reExplanation:
        'For 90 rolls of a fair die, the theoretical count of sixes is 15. Real runs might give 12, 14, 17 or 19 sixes. Each is reasonable. As trial counts grow, the experimental count gets close to the theoretical count in proportion: 9 000 rolls might give a count near 1 500, with a smaller percentage error than the 90-roll spread.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 2F, commentary on a "compare probabilities given as fraction and percentage" question where pupils refused to compare because the forms differed.
    {
      id: 'pct-mis-different-forms',
      description:
        'I cannot compare an experimental probability with a theoretical probability if one is a fraction, one is a decimal, and one is a percentage.',
      triggerAnswer: 'different-forms',
      correction:
        'Actually convert both values to the same form (decimals work well) and then compare. Probabilities are still probabilities regardless of how they are written.',
      reExplanation:
        'For experimental 35 percent and theoretical 3/8, convert each to a decimal: 35 percent = 0.35 and 3/8 = 0.375. The gap is 0.025. Converting always works because every probability sits in [0, 1] and any of the three forms can be rewritten as a decimal. Compare in one form, never across mixed forms.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a "two classes, different sample sizes" question where pupils treated identical experimental probabilities from very different trial totals as equally strong evidence.
    {
      id: 'pct-mis-sample-size-equal',
      description:
        'I treat the same experimental probability from 50 trials and from 5 000 trials as equally strong evidence about the underlying probability.',
      triggerAnswer: 'sample-size-equal',
      correction:
        'In fact a result from 5 000 trials is far stronger evidence than the same result from 50 trials. Sample size weights the verdict.',
      reExplanation:
        'Imagine experimental P(heads) = 0.56 from both 50 and 5 000 tosses. The 50-toss result could easily come from a fair coin by chance. The 5 000-toss result almost never does: random spread shrinks as trials grow. To judge bias, look at the gap between experimental and theoretical AND the trial count together.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const probabilityComparingExperimentalTheoreticalZoneNodes = [
  probabilityComparingExperimentalTheoretical,
]
