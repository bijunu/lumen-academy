import type { SkillNode } from '@/types/content'

export const ratioProportion: SkillNode = {
  id: 'maths-ratio-proportion',
  title: 'Direct and Inverse Proportion',
  description:
    'Recognise direct proportion (y = kx, where doubling one doubles the other) and inverse proportion (y = k / x, where doubling one halves the other). Find the constant k from a single data point, then apply it. Spot the shape from the context: same speed for longer covers more distance (direct); more workers on the same job take less time (inverse).',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-ratio',
  zoneName: 'Ratio and Proportion',
  tier: 'challenge',
  prerequisites: ['maths-ratio-scaling-recipes'],
  curriculum: {
    ks3Objective:
      'Solve problems involving direct and inverse proportion, including graphical and algebraic representations; use compound units such as speed, unit pricing and density to solve problems.',
    awardingBodies: {
      aqa: 'R10 Direct and inverse proportion (GCSE Mathematics 8300)',
      edexcel: 'R10 Direct and inverse proportion (GCSE Mathematics 1MA1)',
      ocr: '6.03a Direct and inverse proportion, including y = kx and y = k/x (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'rp-scene-direct-bar',
      title: 'Direct Proportion: Constant Ratio',
      type: 'simulation',
      instructions:
        'See how direct proportion locks the ratio between two quantities. A train travels at a steady 60 km per hour. The distance covered is 60 km after 1 hour, 120 km after 2 hours, 180 km after 3 hours. The ratio distance / time is always 60 (the constant k). Doubling the time doubles the distance; halving the time halves the distance. y = kx with k = 60.',
      data: {
        relationship: 'direct',
        formula: 'distance = 60 x time',
        constantK: 60,
        examples: [
          { time: 1, distance: 60 },
          { time: 2, distance: 120 },
          { time: 3, distance: 180 },
          { time: 0.5, distance: 30 },
        ],
        rule: 'Direct proportion: y = kx. The ratio y / x is constant.',
      },
    },
    {
      id: 'rp-scene-inverse-bar',
      title: 'Inverse Proportion: Constant Product',
      type: 'simulation',
      instructions:
        'See how inverse proportion locks the product of two quantities. A wall takes 48 builder-days of work. 1 builder needs 48 days. 2 builders need 24 days. 4 builders need 12 days. 6 builders need 8 days. The product builders x days is always 48 (the constant k). Doubling the workforce halves the time; halving the workforce doubles the time. y = k / x with k = 48.',
      data: {
        relationship: 'inverse',
        formula: 'days = 48 / builders',
        constantK: 48,
        examples: [
          { builders: 1, days: 48 },
          { builders: 2, days: 24 },
          { builders: 4, days: 12 },
          { builders: 6, days: 8 },
          { builders: 8, days: 6 },
        ],
        rule: 'Inverse proportion: y = k / x. The product x y is constant.',
      },
    },
    {
      id: 'rp-scene-find-k',
      title: 'Finding the Constant of Proportionality',
      type: 'simulation',
      instructions:
        'See how a single data point unlocks every other value. Direct: y = kx. If y = 30 when x = 5, then k = 30 / 5 = 6. The rule is y = 6x. Now any x gives a y: x = 8 gives y = 48. Inverse: y = k / x. If y = 4 when x = 12, then k = 4 x 12 = 48. The rule is y = 48 / x. Now any x gives a y: x = 6 gives y = 8. Always find k first, then extrapolate.',
      data: {
        directExample: { x: 5, y: 30, k: 6, formula: 'y = 6x' },
        inverseExample: { x: 12, y: 4, k: 48, formula: 'y = 48 / x' },
        rule: 'Find k from one (x, y) pair. Then apply the rule to find any other value.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'rp-worked-1',
      title: 'Direct proportion: a car uses 4.5 litres of petrol for every 50 km. How far on 18 litres?',
      steps: [
        {
          explanation:
            'Recognise the shape: same car at the same efficiency, so distance is directly proportional to petrol used.',
          maths: 'shape: direct, y = kx where y = distance and x = petrol',
        },
        {
          explanation:
            'Find the constant from the given data point: 50 km uses 4.5 litres.',
          maths: 'k = 50 / 4.5 ≈ 11.11 km per litre',
        },
        {
          explanation:
            'Apply the rule to the new value: distance = k x petrol.',
          maths: 'distance = 11.11 x 18 = 200 km',
        },
        {
          explanation:
            'Check by another method: 18 / 4.5 = 4 lots of 50 km, so 4 x 50 = 200 km. The check confirms the answer.',
          maths: 'verification: 18 / 4.5 x 50 = 200 km',
        },
        {
          explanation: 'So 18 litres takes the car 200 km.',
          maths: 'answer: 200 km',
        },
      ],
    },
    {
      id: 'rp-worked-2',
      title: 'Inverse proportion: 4 painters take 12 days to paint a hall. How long would 6 painters take? (missing step revealed)',
      steps: [
        {
          explanation:
            'Recognise the shape: more painters means less time for the same job, so time is inversely proportional to the number of painters.',
          maths: 'shape: inverse, y = k / x where y = days and x = painters',
        },
        {
          explanation:
            'Find the constant: total work = painters x days.',
          maths: 'k = 4 x 12 = 48 painter-days',
        },
        {
          explanation:
            'Build the inverse rule using the constant.',
          maths: 'days = 48 / painters',
        },
        {
          explanation:
            'Apply the rule to 6 painters: days = k / painters.',
          maths: 'days = 48 / 6 = 8',
        },
        {
          explanation: 'So 6 painters take 8 days to paint the hall.',
          maths: 'answer: 8 days',
        },
      ],
    },
  ],
  questions: [
    // Core 1: identify direct proportion (cost per kg)
    {
      id: 'rp-q1',
      type: 'multiple-choice',
      stem: 'A market stall sells potatoes at a fixed price per kilogram. Three kilograms cost £4.50. How much do 5 kg cost?',
      tier: 'core',
      options: ['£6.00', '£7.50', '£9.00', '£15.00'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Find the cost per kg: 4.50 / 3 = 1.50. Then 5 x 1.50 = £7.50.',
    },
    // Core 2: builder-day product (inverse)
    {
      id: 'rp-q2',
      type: 'numeric-entry',
      stem: 'A job takes 8 builders 5 days to finish. Assuming all builders work at the same rate, how many days would 10 builders take?',
      tier: 'core',
      correctAnswer: 4,
      unit: 'days',
      xpValue: 10,
      misconceptionId: 'rp-mis-all-direct',
      hint: 'Total work = 8 x 5 = 40 builder-days. Days = 40 / 10 = 4 days.',
    },
    // Core 3: speed-time direct
    {
      id: 'rp-q3',
      type: 'multiple-choice',
      stem: 'A train travels at a steady 80 km per hour. How far does the train travel in 2.5 hours?',
      tier: 'core',
      options: ['160 km', '180 km', '240 km', '200 km'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'distance = speed x time = 80 x 2.5 = 200 km.',
    },
    // Core 4: direct y = 1.5x
    {
      id: 'rp-q4',
      type: 'multiple-choice',
      stem: 'A printer uses 1.5 g of ink per page printed. How much ink does the printer use for 24 pages?',
      tier: 'core',
      options: ['36 g', '16 g', '12 g', '60 g'],
      correctIndex: 0,
      xpValue: 10,
      hint: 'Direct proportion: total ink = ink per page x pages = 1.5 x 24 = 36 g.',
    },
    // Core 5: identify direct or inverse
    {
      id: 'rp-q5',
      type: 'multiple-choice',
      stem: 'Which of these is an inverse proportion?',
      tier: 'core',
      options: [
        'Number of workers and time to finish a fixed job',
        'Cost and weight at fixed price-per-kg',
        'Speed and distance at fixed time',
        'Number of pages and ink used at fixed rate',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'rp-mis-flip-direction',
      hint: 'Inverse: as one quantity goes up, the other goes down. More workers means less time for the same job.',
    },
    // Core 6: cost from rate
    {
      id: 'rp-q6',
      type: 'multiple-choice',
      stem: 'A school printer charges 4 p per page. How much do 30 pages cost?',
      tier: 'core',
      options: ['34 p', '90 p', '120 p', '40 p'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Direct: 30 x 4 = 120 pence.',
    },
    // Core 7: spot-misconception on "all proportional = direct"
    {
      id: 'rp-q7',
      type: 'spot-misconception',
      stem: 'Niharika reads "6 builders take 8 days to build a wall" and writes "12 builders take 16 days, because twice as many builders take twice as long".',
      tier: 'core',
      statements: [
        {
          text: 'Niharika is right. Doubling the number of builders doubles the days needed.',
          isMisconception: true,
        },
        {
          text: 'In fact this is inverse proportion: doubling the builders HALVES the days, not doubles them. 12 builders take 4 days because the total work (48 builder-days) is the same and shared between more people.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'rp-mis-all-direct',
    },
    // Core 8: rate comparison
    {
      id: 'rp-q8',
      type: 'multiple-choice',
      stem: 'Aisha types 36 words in 1 minute. At the same rate, how many words does she type in 4 minutes?',
      tier: 'core',
      options: ['40 words', '72 words', '108 words', '144 words'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Direct proportion: 36 x 4 = 144 words.',
    },
    // Confident 1: find k from a pair
    {
      id: 'rp-q9',
      type: 'numeric-entry',
      stem: 'y is directly proportional to x. When x = 5, y = 30. What is the value of y when x = 8?',
      tier: 'confident',
      correctAnswer: 48,
      xpValue: 15,
      hint: 'Find k: k = y / x = 30 / 5 = 6. Then y = kx = 6 x 8 = 48.',
    },
    // Confident 2: inverse speed-distance
    {
      id: 'rp-q10',
      type: 'multiple-choice',
      stem: 'A 240 km journey takes 4 hours at one speed. At a steady speed 25% faster, how long does the same journey take?',
      tier: 'confident',
      options: ['2 hours', '3.2 hours', '3 hours', '5 hours'],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'rp-mis-flip-direction',
      hint: 'Original speed = 60 km/h. New speed = 60 x 1.25 = 75 km/h. Time = 240 / 75 = 3.2 hours.',
    },
    // Confident 3: inverse workers
    {
      id: 'rp-q11',
      type: 'numeric-entry',
      stem: 'It takes 6 painters 14 days to paint a school hall. How many days would 4 painters take to paint the same hall? Round to one decimal place.',
      tier: 'confident',
      correctAnswer: 21,
      tolerance: 0.1,
      unit: 'days',
      xpValue: 15,
      hint: 'Total work = 6 x 14 = 84 painter-days. Days for 4 painters = 84 / 4 = 21.',
    },
    // Confident 4: spot-misconception on "in proportion = the same"
    {
      id: 'rp-q12',
      type: 'spot-misconception',
      stem: 'Maya reads "the values 4, 6, 8 are in proportion to 12, 18, 24" and writes "this means the two lists are the same".',
      tier: 'confident',
      statements: [
        {
          text: 'Maya is right. "In proportion" means the two lists have equal values.',
          isMisconception: true,
        },
        {
          text: 'In fact "in proportion" means corresponding pairs share the same ratio: 4/12 = 6/18 = 8/24 = 1/3. The lists are not equal; the SECOND list is three times the first. "In proportion" means same ratio, not same value.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'rp-mis-in-proportion-as-equal',
    },
    // Confident 5: missing-step find k
    {
      id: 'rp-q13',
      type: 'missing-step',
      stem: 'Fill in the missing step. y is inversely proportional to x. When x = 12, y = 4. Find y when x = 6.',
      tier: 'confident',
      steps: [
        'Recognise the shape: inverse proportion, y = k / x. The product xy is constant.',
        'Use the given pair to find k: k = x y = 12 x 4 = 48.',
        null,
        'So when x = 6, y = 8. Check: 6 x 8 = 48, matching the constant k.',
      ],
      missingStepIndex: 2,
      correctStep: 'Apply the rule y = k / x with x = 6: y = 48 / 6 = 8.',
      xpValue: 20,
      misconceptionId: 'rp-mis-no-k',
    },
    // Confident 6: identify shape from context (direct)
    {
      id: 'rp-q14',
      type: 'multiple-choice',
      stem: 'Which of these is a direct proportion?',
      tier: 'confident',
      options: [
        'Number of pipes filling a tank and the time taken to fill it',
        'Number of car passengers and the time to drive 100 km at the same speed',
        'Speed of a car and the time to cover a fixed distance',
        'Number of tickets bought and the total cost at a fixed price per ticket',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'rp-mis-flip-direction',
      hint: 'Direct: more tickets at a fixed unit price means proportionally more cost. The other three are either unrelated or inverse.',
    },
    // Confident 7: drag-order by rate (per-unit prices)
    {
      id: 'rp-q15',
      type: 'drag-order',
      stem: 'Drag these rates into order from the slowest to the fastest (fewest items per minute first).',
      tier: 'confident',
      items: [
        '120 items in 5 minutes',
        '90 items in 3 minutes',
        '80 items in 4 minutes',
        '150 items in 5 minutes',
      ],
      correctOrder: [2, 0, 3, 1],
      xpValue: 20,
      hint: 'Compute items per minute: 120/5 = 24. 90/3 = 30. 80/4 = 20. 150/5 = 30. Order slowest to fastest: 20, 24, 30, 30.',
    },
    // Confident 8: machine output direct
    {
      id: 'rp-q16',
      type: 'numeric-entry',
      stem: 'A factory machine produces 480 jars in 6 hours. At the same rate, how many jars does the machine produce in 9 hours?',
      tier: 'confident',
      correctAnswer: 720,
      unit: 'jars',
      xpValue: 15,
      hint: 'Direct: rate = 480 / 6 = 80 jars/hour. 9 x 80 = 720 jars.',
    },
    // Challenge 1: Bond-style builders with mid-job change (the plan's stretch)
    {
      id: 'rp-q17',
      type: 'numeric-entry',
      stem: 'Six builders start a wall that they would normally finish in 8 days. After 3 days of work, two more builders join the team. Assuming all builders work at the same rate, how many further days, from when the extra builders join, are needed to finish the wall? Give your answer as a decimal.',
      tier: 'challenge',
      correctAnswer: 3.75,
      tolerance: 0.05,
      unit: 'days',
      xpValue: 25,
      hint: 'Total work = 6 x 8 = 48 builder-days. After 3 days: 6 x 3 = 18 done, 30 left. With 8 builders: 30 / 8 = 3.75 days.',
    },
    // Challenge 2: inverse with non-round
    {
      id: 'rp-q18',
      type: 'multiple-choice',
      stem: 'Five pipes filling a tank at the same rate take 12 minutes to fill it. How long, in minutes, would 3 pipes (each at the same rate) take to fill the same tank?',
      tier: 'challenge',
      options: ['7.2 minutes', '20 minutes', '15 minutes', '36 minutes'],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'rp-mis-flip-direction',
      hint: 'Inverse proportion: total work = 5 x 12 = 60 pipe-minutes. Time = 60 / 3 = 20 minutes.',
    },
    // Challenge 3: combined work word problem
    {
      id: 'rp-q19',
      type: 'numeric-entry',
      stem: 'A printer can print a leaflet run in 8 hours on its own. A second printer (identical model and rate) joins it. How many hours do the two printers, working together, take to finish the same leaflet run? Give your answer as a decimal.',
      tier: 'challenge',
      correctAnswer: 4,
      unit: 'hours',
      xpValue: 25,
      hint: 'Total work = 1 printer-job in 8 hours = 8 printer-hours. With 2 printers: 8 / 2 = 4 hours.',
    },
    // Challenge 4: identify shape and apply
    {
      id: 'rp-q20',
      type: 'multiple-choice',
      stem: 'A school trip costs £600 in total. Eight pupils share the cost. If 4 more pupils join the trip, how much does each pupil pay, in pounds?',
      tier: 'challenge',
      options: ['£40', '£45', '£50', '£75'],
      correctIndex: 2,
      xpValue: 25,
      hint: 'Total = £600. New count = 8 + 4 = 12 pupils. Cost per pupil = 600 / 12 = £50. Inverse proportion: more pupils, less per pupil.',
    },
    // Challenge 5: speed-distance-time multi-step
    {
      id: 'rp-q21',
      type: 'numeric-entry',
      stem: 'A driver covers 90 km in 1 hour 30 minutes. The next leg of the trip is 165 km at the same steady speed. How many hours does the next leg take? Give your answer as a decimal.',
      tier: 'challenge',
      correctAnswer: 2.75,
      tolerance: 0.05,
      unit: 'hours',
      xpValue: 25,
      hint: 'Speed = 90 / 1.5 = 60 km/h. Time for 165 km = 165 / 60 = 2.75 hours.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 2F (Foundation, Calculator), commentary on an inverse-proportion question where pupils treated more workers as needing more time, applying direct proportion to a context that demanded inverse.
    {
      id: 'rp-mis-all-direct',
      description:
        'I treat every proportional relationship as direct, so I think doubling workers doubles the days needed, or doubling speed doubles the time taken.',
      triggerAnswer: 'all-direct',
      correction:
        'Actually some relationships are inverse: more workers means less time, faster speed means less time. Check the context before applying direct proportion.',
      reExplanation:
        'For "6 builders take 8 days, how long for 12 builders?", the total work is fixed at 48 builder-days. With 12 builders sharing the same job, time = 48 / 12 = 4 days, not 16 days. The test for inverse proportion: does one quantity going up cause the other to go DOWN for the same outcome? More builders, less time. Faster speed, less time. More pipes, less time. These are inverse, not direct.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 2F (Foundation, Calculator), commentary on a proportion question where pupils confused the phrase "in proportion" with "equal".
    {
      id: 'rp-mis-in-proportion-as-equal',
      description:
        'I read "in proportion" as "the same value" or "equal", so two lists in proportion must have matching numbers.',
      triggerAnswer: 'in-proportion-as-equal',
      correction:
        'In fact "in proportion" means corresponding pairs share the same RATIO, not the same value.',
      reExplanation:
        'The lists 4, 6, 8 and 12, 18, 24 are in proportion because 4/12 = 6/18 = 8/24 = 1/3. Each pair has the same ratio. The numbers themselves are not equal; the second list is three times the first throughout. "In proportion" describes the consistency of the multiplicative relationship, not equality of the values. Two lists are in the SAME proportion to a third when their ratios with the third match.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 6 Ratio, Proportion and Rates of Change, "Direct and Inverse Proportion" page, "Common mistake" callout warning that you must find k before substituting new values.
    {
      id: 'rp-mis-no-k',
      description:
        'I try to find a new y from a new x without first finding the constant of proportionality k, so I just multiply or divide by the change in x without checking the rule.',
      triggerAnswer: 'no-k',
      correction:
        'Actually the unitary route is to find k first from the given pair, then apply y = kx (direct) or y = k/x (inverse) with the new x.',
      reExplanation:
        'For "y directly proportional to x; y = 30 when x = 5; find y at x = 8", the steps are: k = 30 / 5 = 6, then y = 6 x 8 = 48. Jumping to "y grows by 8/5: y = 30 x 1.6 = 48" works for direct but breaks for inverse and hides the structure. Identify the shape first, find k explicitly, then apply.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2022, Paper 02 (Foundation, Calculator), commentary on a speed-time-distance question where pupils selected the wrong proportion type because the words in the question were misleading.
    {
      id: 'rp-mis-flip-direction',
      description:
        'I identify the wrong type of proportion (direct vs inverse) because I focus on which numbers grow rather than on what is held constant.',
      triggerAnswer: 'flip-direction',
      correction:
        'In fact the test is: what is held CONSTANT in the question? Total cost / fixed price per item → direct (cost proportional to count). Fixed total job / variable workers → inverse (time inversely proportional to workers).',
      reExplanation:
        'For "4 painters take 12 days; how long for 6 painters?", the FIXED quantity is the size of the job (4 x 12 = 48 painter-days). The number of painters and the days are inverse: 6 painters take 8 days. Compare with "1 kg potatoes costs £1.50; how much for 4 kg?": fixed price per kg means direct: 4 x £1.50 = £6. Same surface "more of X" but opposite proportionality because what is held constant differs.',
    },
    // Source: NCETM Secondary Magazine, Issue 123, "Persistent Misconceptions in Proportion" article, citing pupil work that uses additive change to predict the new value (subtract 4, add 4) rather than multiplicative scaling.
    {
      id: 'rp-mis-additive-not-multiplicative',
      description:
        'I predict the new y from a new x by adding or subtracting the change in x, instead of scaling multiplicatively. So if x grows by 3, I add 3 to y.',
      triggerAnswer: 'additive-not-multiplicative',
      correction:
        'Actually proportional relationships scale multiplicatively. If x doubles, y doubles (direct) or halves (inverse). Additions do not preserve ratios.',
      reExplanation:
        'For "y proportional to x; y = 20 when x = 4; find y when x = 6", additive thinking says "x grew by 2, so y grows by 2: y = 22". This is wrong. Multiplicative thinking says k = 20 / 4 = 5, so y = 5 x 6 = 30. The ratio y / x = 5 is preserved (20/4 = 30/6 = 5). Adding 2 to y breaks the ratio (22/6 ≠ 5).',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 6 "Ratio and Percentages" by Hart, on pupils failing to keep track of which quantity is the dependent variable (y) and which is the independent (x).
    {
      id: 'rp-mis-x-y-mixup',
      description:
        'I lose track of which quantity is x (independent) and which is y (dependent), so when computing k from y = kx I might pick the wrong ratio (x / y instead of y / x).',
      triggerAnswer: 'x-y-mixup',
      correction:
        'In fact for direct proportion y = kx, k is always the y value divided by the x value. Label the quantities and write them down before dividing.',
      reExplanation:
        'For "cost is directly proportional to weight; 3 kg costs £4.50", let y = cost (the unknown to be found later) and x = weight (the input). k = y / x = 4.50 / 3 = 1.50 (cost per kg). The constant has units that make sense: £/kg. Computing 3 / 4.50 = 0.67 would give kg per £, the wrong direction for "how much for 5 kg?". Always double-check the units of k against the question.',
    },
    // Authored, no external source: classroom-observed slip where Year 7 pupils stop after computing the constant k and report k as the answer, instead of substituting the new x value to find the new y.
    {
      id: 'rp-mis-k-as-answer',
      description:
        'I compute the constant of proportionality k and stop there, reporting k as the answer to the question instead of using it to find the requested value.',
      triggerAnswer: 'k-as-answer',
      correction:
        'Actually k is an intermediate value, not the final answer. After finding k, substitute the new x into y = kx (direct) or y = k/x (inverse).',
      reExplanation:
        'For "y proportional to x; y = 30 when x = 5; find y when x = 8", the steps are: k = 30 / 5 = 6, then y = 6 x 8 = 48. Reporting "6" as the answer to the question stops one step early. Re-read the question after finding k to confirm whether the constant or the new y is being asked. The new y is almost always what is wanted.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const ratioProportionZoneNodes = [ratioProportion]
