import type { SkillNode } from '@/types/content'

export const probabilitySumToOne: SkillNode = {
  id: 'maths-probability-sum-to-one',
  title: 'Probabilities Sum to One',
  description:
    'Every possible outcome of a single experiment has a probability, and when those outcomes are mutually exclusive (only one can happen at a time) the probabilities add to 1. This rule lets you find a missing probability when the others are given, and gives the complement P(not A) = 1 minus P(A). Mix forms (fractions, decimals, percentages) only after converting them to one form first, and check the total really is 1.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-probability',
  zoneName: 'Probability',
  tier: 'confident',
  prerequisites: ['maths-probability-scale'],
  curriculum: {
    ks3Objective:
      'Understand that the probabilities of all possible outcomes sum to 1; apply this to find the probability of an event not occurring.',
    awardingBodies: {
      aqa: 'P4 Apply the property that probabilities of all mutually exclusive outcomes sum to 1 (GCSE Mathematics 8300)',
      edexcel: 'P4 Apply the property that probabilities sum to 1, including for the complement of an event (GCSE Mathematics 1MA1)',
      ocr: '11.02b Use that probabilities of mutually exclusive outcomes sum to 1 (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'pso-scene-die-sum',
      title: 'A Fair Die: Six Outcomes That Add to One',
      type: 'diagram',
      instructions:
        'Look at the six faces of a fair die laid out side by side. Each face shows the same probability of landing up: 1/6. Adding them together gives 6 lots of 1/6, which is 6/6, which is 1. The total is 1 because the six outcomes are mutually exclusive (only one face can land up) and together they cover every possible outcome.',
      data: {
        title: 'P(1) + P(2) + P(3) + P(4) + P(5) + P(6) = 1',
        rows: [
          { face: '1', probability: '1/6', decimal: 0.17 },
          { face: '2', probability: '1/6', decimal: 0.17 },
          { face: '3', probability: '1/6', decimal: 0.17 },
          { face: '4', probability: '1/6', decimal: 0.17 },
          { face: '5', probability: '1/6', decimal: 0.17 },
          { face: '6', probability: '1/6', decimal: 0.17 },
        ],
        runningTotal: '6 x (1/6) = 6/6 = 1',
        callout:
          'When every outcome of the experiment is in the list and only one can happen, the probabilities must sum to 1.',
      },
    },
    {
      id: 'pso-scene-complement',
      title: 'The Complement Rule: P(not A) = 1 minus P(A)',
      type: 'diagram',
      instructions:
        'See how a single event splits the world in two: it either happens (A) or it does not (not A). Together those two cases cover everything, so they must add to 1. That gives the rule P(not A) = 1 minus P(A). The diagram shows P(rain) = 0.3 in Manchester tomorrow on the left, and P(no rain) = 0.7 on the right; the bar fills the whole length, so the total is 1.',
      data: {
        title: 'P(rain) + P(no rain) = 1 in Manchester tomorrow',
        bar: [
          { label: 'P(rain)', value: 0.3, colour: 'blue' },
          { label: 'P(no rain)', value: 0.7, colour: 'amber' },
        ],
        rule: 'P(not A) = 1 - P(A)',
        worked: [
          { eventA: 'P(rain) = 0.3', complement: 'P(no rain) = 1 - 0.3 = 0.7' },
          { eventA: 'P(late bus) = 1/4', complement: 'P(bus on time) = 1 - 1/4 = 3/4' },
          { eventA: 'P(packed lunch) = 60 percent', complement: 'P(school dinner) = 100 percent - 60 percent = 40 percent' },
        ],
        callout:
          'The complement of an event covers every outcome that is not the event itself. Together they fill the whole probability space.',
      },
    },
    {
      id: 'pso-scene-missing-spinner',
      title: 'Find the Missing Probability on a Spinner',
      type: 'diagram',
      instructions:
        'Picture a spinner with four colours: red, blue, green and yellow. Three probabilities are given: P(red) = 0.4, P(blue) = 0.25, P(green) = 0.2. The fourth one, P(yellow), is hidden. Because the four colours cover every possible outcome, the four probabilities must add to 1. Subtract the three known probabilities from 1 to find the fourth: 1 minus 0.4 minus 0.25 minus 0.2 leaves 0.15, so P(yellow) = 0.15.',
      data: {
        title: 'A four-colour spinner with one missing probability',
        sectors: [
          { colour: 'red', probability: 0.4 },
          { colour: 'blue', probability: 0.25 },
          { colour: 'green', probability: 0.2 },
          { colour: 'yellow', probability: '?' },
        ],
        working: [
          'Sum of the three known probabilities: 0.4 + 0.25 + 0.2 = 0.85',
          'Missing probability: 1 - 0.85 = 0.15',
          'Check: 0.4 + 0.25 + 0.2 + 0.15 = 1',
        ],
        callout:
          'When all but one probability is given for a complete set of outcomes, subtract the known ones from 1 to find the last.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'pso-worked-1',
      title: 'Find P(not A) given P(A) = 0.7',
      steps: [
        {
          explanation: 'Write down the rule that connects an event and its complement.',
          maths: 'P(A) + P(not A) = 1',
        },
        {
          explanation: 'Substitute the given probability for the event.',
          maths: '0.7 + P(not A) = 1',
        },
        {
          explanation: 'Subtract 0.7 from both sides to make P(not A) the subject.',
          maths: 'P(not A) = 1 - 0.7',
        },
        {
          explanation: 'Work out the subtraction.',
          maths: 'P(not A) = 0.3',
        },
        {
          explanation: 'Check the total really is 1: 0.7 + 0.3 = 1, so the answer is sensible.',
          maths: 'P(A) + P(not A) = 0.7 + 0.3 = 1',
        },
      ],
    },
    {
      id: 'pso-worked-2',
      title: 'Find a missing spinner probability when others are given',
      steps: [
        {
          explanation: 'List the probabilities given. A spinner has sectors red, blue, green and yellow with P(red) = 0.5, P(blue) = 0.2, P(green) = 0.1.',
          maths: 'P(red) = 0.5, P(blue) = 0.2, P(green) = 0.1',
        },
        {
          explanation: 'The four colours cover every outcome, so the four probabilities must add to 1.',
          maths: 'P(red) + P(blue) + P(green) + P(yellow) = 1',
        },
        {
          explanation: 'Add the three known probabilities first.',
          maths: '0.5 + 0.2 + 0.1 = 0.8',
        },
        {
          explanation: 'Subtract that total from 1 to find the missing probability.',
          maths: 'P(yellow) = 1 - 0.8 = 0.2',
        },
        {
          explanation: 'Check: 0.5 + 0.2 + 0.1 + 0.2 = 1, so P(yellow) = 0.2 is the answer.',
          maths: 'P(yellow) = 0.2',
        },
      ],
    },
  ],
  questions: [
    // Core 1 - MCQ - position 0
    {
      id: 'pso-q1',
      type: 'multiple-choice',
      stem: 'For any complete set of mutually exclusive outcomes, what must the probabilities add up to?',
      tier: 'core',
      options: ['1', '0', '100', '50 percent of the total'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pso-mis-sum-not-1',
      hint: 'Probability is bounded by the 0 to 1 scale. The total of all possible outcomes fills the whole scale.',
    },
    // Core 2 - MCQ - position 2
    {
      id: 'pso-q2',
      type: 'multiple-choice',
      stem: 'P(A) = 0.6. What is P(not A)?',
      tier: 'core',
      options: ['0.6', '-0.6', '0.4', '1.6'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pso-mis-negative-complement',
      hint: 'Use the complement rule: P(not A) = 1 - P(A).',
    },
    // Core 3 - MCQ - position 1
    {
      id: 'pso-q3',
      type: 'multiple-choice',
      stem: 'A bag has only red and blue counters. P(red) = 1/4. What is P(blue)?',
      tier: 'core',
      options: ['1/4', '3/4', '4/4', '1/2'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pso-mis-sum-not-1',
      hint: 'There are only two colours, so P(red) + P(blue) = 1. Find P(blue) = 1 - 1/4.',
    },
    // Core 4 - MCQ - position 3
    {
      id: 'pso-q4',
      type: 'multiple-choice',
      stem: 'A weather report says P(snow tomorrow) = 0.15. What is P(no snow tomorrow)?',
      tier: 'core',
      options: ['0.15', '1.15', '0.5', '0.85'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Snow and no snow are the only two cases, so the two probabilities add to 1.',
    },
    // Core 5 - numeric
    {
      id: 'pso-q5',
      type: 'numeric-entry',
      stem: 'P(event A) = 0.2. Write P(not A) as a decimal.',
      tier: 'core',
      correctAnswer: 0.8,
      tolerance: 0.001,
      xpValue: 10,
      hint: 'Subtract: 1 - 0.2.',
    },
    // Core 6 - numeric
    {
      id: 'pso-q6',
      type: 'numeric-entry',
      stem: 'A fair die is rolled. P(landing on 1) = 1/6. What is the sum P(1) + P(2) + P(3) + P(4) + P(5) + P(6)?',
      tier: 'core',
      correctAnswer: 1,
      xpValue: 10,
      hint: 'Each face has probability 1/6 and there are six faces, so the total is 6 lots of 1/6.',
    },
    // Core 7 - spot-misconception
    {
      id: 'pso-q7',
      type: 'spot-misconception',
      stem: 'Liam says "P(rain) = 0.7, so P(no rain) = -0.7, because not means the opposite sign."',
      tier: 'core',
      statements: [
        {
          text: 'Liam is right. The minus sign flips the sign of the probability.',
          isMisconception: true,
        },
        {
          text: 'In fact a probability cannot be negative. P(not rain) = 1 - 0.7 = 0.3, using the complement rule.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pso-mis-negative-complement',
    },
    // Confident 1 - MCQ - position 2
    {
      id: 'pso-q8',
      type: 'multiple-choice',
      stem: 'A spinner has four colours: red, blue, green, yellow. P(red) = 0.4, P(blue) = 0.25, P(green) = 0.2. What is P(yellow)?',
      tier: 'confident',
      options: ['0.85', '0.2', '0.15', '1.85'],
      correctIndex: 2,
      xpValue: 15,
      hint: 'The four colours cover every outcome, so the four probabilities add to 1. Subtract the three known values from 1.',
    },
    // Confident 2 - MCQ - position 0
    {
      id: 'pso-q9',
      type: 'multiple-choice',
      stem: 'A bag has red, blue and green counters. P(red) = 1/3 and P(blue) = 1/4. What is P(green)?',
      tier: 'confident',
      options: ['5/12', '7/12', '1/12', '1/7'],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'pso-mis-mixed-forms',
      hint: 'Convert the fractions to a common denominator (12), then subtract from 1: 1 - 4/12 - 3/12.',
    },
    // Confident 3 - MCQ - position 1
    {
      id: 'pso-q10',
      type: 'multiple-choice',
      stem: 'A school survey records that pupils travel by bus, by bicycle or by car. P(bus) = 45 percent and P(bicycle) = 30 percent. What is P(car)?',
      tier: 'confident',
      options: ['75 percent', '25 percent', '15 percent', '0.25 percent'],
      correctIndex: 1,
      xpValue: 15,
      hint: 'Bus, walk and car cover every pupil, so the percentages add to 100 percent. Find 100 - 45 - 30.',
    },
    // Confident 4 - numeric
    {
      id: 'pso-q11',
      type: 'numeric-entry',
      stem: 'A spinner has three sectors. P(A) = 0.35 and P(B) = 0.45. Find P(C) as a decimal.',
      tier: 'confident',
      correctAnswer: 0.2,
      tolerance: 0.001,
      xpValue: 15,
      misconceptionId: 'pso-mis-missing-outcome',
      hint: 'A, B and C are the only outcomes, so they add to 1. Subtract the two known values from 1.',
    },
    // Confident 5 - numeric
    {
      id: 'pso-q12',
      type: 'numeric-entry',
      stem: 'A jar holds red, blue, green and white counters only. P(red) = 1/5, P(blue) = 1/5, P(green) = 1/4. What is P(white) as a decimal? Round to 2 decimal places.',
      tier: 'confident',
      correctAnswer: 0.35,
      tolerance: 0.01,
      xpValue: 15,
      misconceptionId: 'pso-mis-mixed-forms',
      hint: 'Convert each fraction to a decimal first: 1/5 = 0.2 and 1/4 = 0.25. Then subtract from 1.',
    },
    // Confident 6 - numeric
    {
      id: 'pso-q13',
      type: 'numeric-entry',
      stem: 'P(A) = 23 percent. What is P(not A) as a percentage? (Enter the number, no percent sign.)',
      tier: 'confident',
      correctAnswer: 77,
      xpValue: 15,
      unit: 'percent',
      hint: 'P(A) and P(not A) cover everything, so they add to 100 percent. Find 100 - 23.',
    },
    // Confident 7 - missing-step
    {
      id: 'pso-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step. A spinner has sectors A, B, C and D. P(A) = 0.3, P(B) = 0.1, P(C) = 0.45. Find P(D).',
      tier: 'confident',
      steps: [
        'Write the rule: the four probabilities add to 1, so P(A) + P(B) + P(C) + P(D) = 1.',
        'Add the three known probabilities: 0.3 + 0.1 + 0.45 = 0.85.',
        null,
        'So P(D) = 0.15. Check: 0.3 + 0.1 + 0.45 + 0.15 = 1.',
      ],
      missingStepIndex: 2,
      correctStep: 'Subtract the known total from 1 to find the missing probability: P(D) = 1 - 0.85.',
      xpValue: 20,
    },
    // Confident 8 - drag-order
    {
      id: 'pso-q15',
      type: 'drag-order',
      stem: 'Order the steps to find a missing probability when the others are given.',
      tier: 'confident',
      items: [
        'State the rule that all probabilities of mutually exclusive outcomes add to 1.',
        'Add the probabilities you already know.',
        'Subtract the total from 1 to find the missing probability.',
        'Check that all the probabilities now add to 1.',
      ],
      correctOrder: [0, 1, 2, 3],
      xpValue: 20,
      hint: 'Start with the rule, then use the known values, then find the missing one, then check.',
    },
    // Challenge 1 - MCQ - position 3
    {
      id: 'pso-q16',
      type: 'multiple-choice',
      stem: 'Aisha lists three probabilities for the only outcomes of a game: P(win) = 0.4, P(draw) = 0.5, P(lose) = 0.2. Why must one value be wrong?',
      tier: 'challenge',
      options: [
        'No value is wrong; the three add to 1.1.',
        'P(draw) cannot be exactly 0.5.',
        'The values cannot be probabilities because P(lose) is not a fraction.',
        'The total is 1.1, but the three outcomes cover the game so they must add to exactly 1.',
      ],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'pso-mis-sum-greater-1',
      hint: 'Add the three probabilities and compare the total with 1.',
    },
    // Challenge 2 - MCQ - position 2
    {
      id: 'pso-q17',
      type: 'multiple-choice',
      stem: 'A Tunbridge Wells canteen serves only three meals on Friday: pasta, jacket potato, fish. P(pasta) = 1/2 and P(jacket potato) = 30 percent. What is P(fish), as a decimal?',
      tier: 'challenge',
      options: [
        '0.8',
        '0.5',
        '0.2',
        '20',
      ],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'pso-mis-mixed-forms',
      hint: 'Convert all probabilities to decimals first: 1/2 = 0.5 and 30 percent = 0.3. Then subtract from 1.',
    },
    // Challenge 3 - MCQ - position 1
    {
      id: 'pso-q18',
      type: 'multiple-choice',
      stem: 'A Sevenoaks tombola has 4 prize types only: book, voucher, sweets, plant. The stallholder writes P(book) = 0.1, P(voucher) = 0.25, P(sweets) = 0.4 and forgets P(plant). A pupil claims P(plant) = 0.75 because that is the largest gap. Which row is correct?',
      tier: 'challenge',
      options: [
        'P(plant) = 0.75. The pupil is right.',
        'P(plant) = 0.25, because 1 - 0.1 - 0.25 - 0.4 = 0.25.',
        'P(plant) = 1, because plant is the missing prize.',
        'P(plant) = 0.4, because that matches P(sweets).',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'pso-mis-wrong-direction',
      hint: 'The four prize types cover every ticket, so the four probabilities add to 1. Subtract the three known values from 1.',
    },
    // Challenge 4 - numeric (Bond-style multi-step word problem)
    {
      id: 'pso-q19',
      type: 'numeric-entry',
      stem: 'A Dover after-school club records that 25 pupils chose an activity from craft, sport, music or coding. P(craft) = 0.2, P(sport) = 0.4 and P(music) = 0.16. How many pupils chose coding?',
      tier: 'challenge',
      correctAnswer: 6,
      xpValue: 25,
      unit: 'pupils',
      hint: 'First find P(coding) = 1 - 0.2 - 0.4 - 0.16. Then multiply that probability by the 25 pupils.',
    },
    // Challenge 5 - numeric
    {
      id: 'pso-q20',
      type: 'numeric-entry',
      stem: 'A four-sector spinner shows P(red) = 1/4, P(blue) = 1/3 and P(green) = 1/6. Find P(yellow) as a fraction with denominator 12, then enter the numerator.',
      tier: 'challenge',
      correctAnswer: 3,
      xpValue: 25,
      unit: '/12',
      hint: 'Rewrite each fraction over 12: 1/4 = 3/12, 1/3 = 4/12, 1/6 = 2/12. Subtract their sum from 12/12.',
    },
    // Challenge 6 - spot-misconception
    {
      id: 'pso-q21',
      type: 'spot-misconception',
      stem: 'Sam reasons "A spinner has red, blue and green sectors. P(red) = 0.5 and P(blue) = 0.6, so P(green) = 1 - 0.5 - 0.6 = -0.1. The minus answer is fine because the spinner is unfair."',
      tier: 'challenge',
      statements: [
        {
          text: 'Sam is right. An unfair spinner can produce a negative probability.',
          isMisconception: true,
        },
        {
          text: 'In fact the slip is earlier: P(red) + P(blue) = 1.1 already exceeds 1, which is impossible for two mutually exclusive outcomes. One of the given probabilities must be wrong.',
          isMisconception: false,
        },
      ],
      xpValue: 25,
      misconceptionId: 'pso-mis-sum-greater-1',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a "find the missing probability" question where pupils gave a sum that did not equal 1 and accepted the result as a valid probability.
    {
      id: 'pso-mis-sum-not-1',
      description:
        'I think probabilities of a complete set of mutually exclusive outcomes can add up to a number other than 1.',
      triggerAnswer: 'sum-not-1',
      correction:
        'Actually a complete set of mutually exclusive outcomes always has probabilities that add to exactly 1.',
      reExplanation:
        'A fair die has six faces, each with probability 1/6. Adding them gives 6/6, which is 1. Any complete set of outcomes works the same way: the probabilities cover every possible result, so they fill the whole 0 to 1 scale.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 2F (Foundation, Calculator), commentary on a complement question where pupils wrote P(not A) = -P(A) instead of 1 - P(A).
    {
      id: 'pso-mis-negative-complement',
      description:
        'I write P(not A) by putting a minus sign in front of P(A), so I get a negative probability.',
      triggerAnswer: 'negative-complement',
      correction:
        'In fact P(not A) is found by 1 minus P(A), not by changing the sign of P(A). A probability is never negative.',
      reExplanation:
        'The complement rule comes from the fact that an event and its complement together cover every outcome, so they add to 1. If P(rain) = 0.3, then P(no rain) = 1 - 0.3 = 0.7. The 0.7 is positive and sits on the 0 to 1 scale.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2022, Paper 01 (Foundation, Non-calculator), commentary on a missing-probability question that mixed fractions and percentages where pupils added them without converting and produced a total greater than 1.
    {
      id: 'pso-mis-mixed-forms',
      description:
        'I add probabilities written in different forms (fractions and percentages) without converting them to one form first.',
      triggerAnswer: 'mixed-forms',
      correction:
        'Actually fractions, decimals and percentages must be in the same form before they can be added or subtracted.',
      reExplanation:
        'A spinner with P(red) = 1/2 and P(blue) = 30 percent looks tricky. Convert: 1/2 = 0.5 and 30 percent = 0.3. Now subtract from 1 to find the third probability: 1 - 0.5 - 0.3 = 0.2. Always pick one form and convert before adding.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 2F (Foundation, Calculator), commentary on a "spot the wrong probability" question where pupils accepted a list whose probabilities summed to more than 1 as still valid for mutually exclusive outcomes.
    {
      id: 'pso-mis-sum-greater-1',
      description:
        'I think it is fine for mutually exclusive outcomes to have probabilities that add to more than 1.',
      triggerAnswer: 'sum-greater-1',
      correction:
        'In fact mutually exclusive outcomes can never give a total above 1; if the sum is bigger than 1, one of the listed values is wrong.',
      reExplanation:
        'Outcomes are mutually exclusive when only one of them can happen at a time. A spinner cannot land on red and blue at once. So P(red) and P(blue) sit in separate parts of the 0 to 1 scale and cannot overlap. If their sum is greater than 1, the listed counts or probabilities have a slip.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 7 Statistics and Probability, "Probability of an event not happening" page; the "Common mistake" callout that pupils sometimes write P(A) = 1 - P(not A) and then forget which side they are subtracting from, leading to sign errors.
    {
      id: 'pso-mis-wrong-direction',
      description:
        'I subtract in the wrong direction when finding a missing probability, so I take the known value from itself or use the wrong total.',
      triggerAnswer: 'wrong-direction',
      correction:
        'Actually start from 1 and subtract the known probabilities, in that order. The missing probability is what is left of 1.',
      reExplanation:
        'For a four-sector spinner with P(red) = 0.1, P(blue) = 0.25 and P(green) = 0.4, the missing P(yellow) = 1 - 0.1 - 0.25 - 0.4 = 0.25. Reading the rule as "missing = 1 minus known sum" stops the sign muddle. Always check the four values then add to exactly 1.',
    },
    // Source: NCETM "Misconceptions and how to overcome them: probability" Year 7 transition pack, on pupils forgetting to include a "no event" outcome in a partial list, so they assume the listed probabilities already sum to 1 and miss the hidden case.
    {
      id: 'pso-mis-missing-outcome',
      description:
        'I assume the probabilities I am given already cover every outcome, so I do not check what else could happen.',
      triggerAnswer: 'missing-outcome',
      correction:
        'In fact a list of probabilities only sums to 1 when every possible outcome is included. Always check whether a "none of these" case has been left out.',
      reExplanation:
        'A bag holds red, blue and green counters only. If P(red) = 0.4 and P(blue) = 0.5 are given but green is left off the list, the listed values add to 0.9, not 1. The missing probability for green is 1 - 0.9 = 0.1. Always list all the outcomes first.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const probabilitySumToOneZoneNodes = [probabilitySumToOne]
