import type { SkillNode } from '@/types/content'

export const areaTrapezia: SkillNode = {
  id: 'maths-geometry-measure-area-trapezia',
  title: 'Area of Trapezia',
  description:
    'Find the area of a trapezium using the formula area = 1/2 x (a + b) x h, where a and b are the two parallel sides and h is the perpendicular height between them. Read this as the average of the two parallel sides multiplied by the height. Apply it to UK contexts such as garden beds, picnic table tops, and stage backdrops, and always check that h runs at right angles to a and b, not along the slant.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-geometry-measure',
  zoneName: 'Geometry and Measure',
  tier: 'confident',
  prerequisites: ['maths-geometry-measure-area-rectangles'],
  curriculum: {
    ks3Objective:
      'Derive and apply formulae to calculate and solve problems involving: perimeter and area of triangles, parallelograms, trapezia.',
    awardingBodies: {
      aqa: 'G16 Know and apply formulae to calculate area of triangles, parallelograms, trapezia (GCSE Mathematics 8300)',
      edexcel: 'G16 Know and apply formulae to calculate area of triangles, parallelograms, trapezia (GCSE Mathematics 1MA1)',
      ocr: '10.03a Area of triangles, parallelograms and trapezia (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'gtz-scene-average-parallel-sides',
      title: 'A Trapezium as Average Side x Height',
      type: 'diagram',
      instructions:
        'Read how a trapezium with parallel sides a = 6 cm and b = 10 cm and perpendicular height h = 4 cm has area equal to the average of the parallel sides multiplied by the height. The average of 6 and 10 is (6 + 10) / 2 = 8 cm. Multiplying by the height gives 8 x 4 = 32 cm squared. The full formula area = 1/2 x (a + b) x h says the same thing in one line. The key check is that h is the perpendicular distance between a and b, not the slant edge.',
      data: {
        unit: 'cm',
        trapezium: { a: 6, b: 10, h: 4, areaUnit: 'cm squared', area: 32 },
        averageParallelSide: 8,
        callout:
          'Average parallel side x perpendicular height = area. Both parallel sides matter, and the height is always at right angles to them.',
      },
    },
    {
      id: 'gtz-scene-rectangle-plus-triangle',
      title: 'Split a Trapezium into a Rectangle plus a Triangle',
      type: 'labelled-diagram',
      instructions:
        'Hover the labels to see how a trapezium with parallel sides a = 10 m at the top and b = 6 m at the bottom and height h = 4 m splits into a 6 m by 4 m rectangle plus a triangle with base 10 - 6 = 4 m and height 4 m. Rectangle area = 6 x 4 = 24 m squared. Triangle area = 1/2 x 4 x 4 = 8 m squared. Total = 24 + 8 = 32 m squared. The formula 1/2 x (a + b) x h = 1/2 x 16 x 4 = 32 m squared gives the same answer.',
      data: {
        viewBox: '0 0 320 240',
        svg:
          '<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg">' +
          '<polygon points="40,180 280,180 240,60 80,60" fill="#cfe7ff" stroke="#1d4ed8" stroke-width="2"/>' +
          '<line x1="80" y1="60" x2="80" y2="180" stroke="#1d4ed8" stroke-dasharray="4 4" stroke-width="1.5"/>' +
          '<line x1="240" y1="60" x2="240" y2="180" stroke="#1d4ed8" stroke-dasharray="4 4" stroke-width="1.5"/>' +
          '<text x="160" y="50" font-family="sans-serif" font-size="14" text-anchor="middle">a = 10 m</text>' +
          '<text x="160" y="200" font-family="sans-serif" font-size="14" text-anchor="middle">b = 6 m (rectangle base)</text>' +
          '<text x="295" y="125" font-family="sans-serif" font-size="12" text-anchor="middle">h = 4 m</text>' +
          '<text x="40" y="220" font-family="sans-serif" font-size="12">Total area = 24 + 8 = 32 m squared</text>' +
          '</svg>',
        hotspots: [
          {
            id: 'tz-rect',
            x: 38,
            y: 50,
            label: 'Rectangle 6 m by 4 m',
            description: 'The middle rectangle covers 6 x 4 = 24 m squared.',
          },
          {
            id: 'tz-triangle',
            x: 80,
            y: 50,
            label: 'Triangle base 4 m height 4 m',
            description:
              'The two slant ends combine into a single triangle with base 10 - 6 = 4 m and height 4 m, area 1/2 x 4 x 4 = 8 m squared.',
          },
          {
            id: 'tz-total',
            x: 12,
            y: 92,
            label: 'Total area 32 m squared',
            description:
              'Add the rectangle and the triangle: 24 + 8 = 32 m squared, the same as 1/2 x (10 + 6) x 4 from the formula.',
          },
        ],
      },
    },
    {
      id: 'gtz-scene-two-trapezia-parallelogram',
      title: 'Why the Half is There: Two Trapezia Make a Parallelogram',
      type: 'diagram',
      instructions:
        'Read how a trapezium with parallel sides a and b and height h, when joined with a copy of itself rotated 180 degrees, forms a parallelogram with base (a + b) and height h. The parallelogram has area (a + b) x h, so one trapezium has half of that, which is 1/2 x (a + b) x h. For a = 5 cm, b = 9 cm, h = 4 cm, the parallelogram area is (5 + 9) x 4 = 56 cm squared, and the trapezium area is 56 / 2 = 28 cm squared. The half in the formula is the half of that doubled-up parallelogram.',
      data: {
        trapezium: { a: 5, b: 9, h: 4, area: 28, unit: 'cm squared' },
        parallelogram: { base: 14, height: 4, area: 56 },
        callout:
          'Two copies of any trapezium rotate together into a parallelogram of base (a + b) and height h. The 1/2 in the formula comes from undoing that doubling.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'gtz-worked-1',
      title: 'Garden bed with parallel sides 5 m and 7 m, height 4 m',
      steps: [
        {
          explanation:
            'Read the parallel sides and the perpendicular height from the plan. The two parallel sides are a = 5 m and b = 7 m, and h = 4 m.',
          maths: 'a = 5 m, b = 7 m, h = 4 m',
        },
        {
          explanation:
            'Write the trapezium area formula.',
          maths: 'area = 1/2 x (a + b) x h',
        },
        {
          explanation:
            'Substitute the three values into the formula.',
          maths: 'area = 1/2 x (5 + 7) x 4',
        },
        {
          explanation:
            'Add the two parallel sides first.',
          maths: '5 + 7 = 12',
        },
        {
          explanation:
            'Multiply the sum by the height, then take the half.',
          maths: '1/2 x 12 x 4 = 24',
        },
        {
          explanation:
            'Write the unit. Both lengths are in metres, so the area is in metres squared. The Sevenoaks garden bed covers 24 m squared.',
          maths: 'area = 24 m squared',
        },
      ],
    },
    {
      id: 'gtz-worked-2',
      title: 'Picnic table top with parallel sides 80 cm and 120 cm, height 60 cm',
      steps: [
        {
          explanation:
            'Read the two parallel sides and the perpendicular height. Here a = 80 cm, b = 120 cm and h = 60 cm.',
          maths: 'a = 80 cm, b = 120 cm, h = 60 cm',
        },
        {
          explanation:
            'Use the average-side reading of the formula: average of the parallel sides, then multiply by the height.',
          maths: 'average = (80 + 120) / 2',
        },
        {
          explanation:
            'Work out the average of the two parallel sides.',
          maths: '(80 + 120) / 2 = 100 cm',
        },
        {
          explanation:
            'Multiply the average parallel side by the perpendicular height.',
          maths: '100 x 60 = 6000',
        },
        {
          explanation:
            'Write the unit. Both lengths are in centimetres, so the area is in centimetres squared. The picnic table top covers 6000 cm squared.',
          maths: 'area = 6000 cm squared',
        },
        {
          explanation:
            'Sanity check by using the formula directly: 1/2 x (80 + 120) x 60 = 1/2 x 200 x 60 = 6000 cm squared. Both readings give the same answer.',
          maths: 'check: 1/2 x (80 + 120) x 60 = 6000 cm squared',
        },
      ],
    },
  ],
  questions: [
    // Core 1
    {
      id: 'gtz-q1',
      type: 'numeric-entry',
      stem: 'A trapezium has parallel sides 4 cm and 6 cm and perpendicular height 3 cm. What is its area in cm squared?',
      tier: 'core',
      correctAnswer: 15,
      xpValue: 10,
      unit: 'cm squared',
      hint: 'Area = 1/2 x (a + b) x h. Add 4 + 6, multiply by 3, then halve.',
    },
    // Core 2
    {
      id: 'gtz-q2',
      type: 'numeric-entry',
      stem: 'A trapezium has parallel sides 5 m and 9 m and perpendicular height 4 m. What is its area in m squared?',
      tier: 'core',
      correctAnswer: 28,
      xpValue: 10,
      unit: 'm squared',
      hint: 'Average parallel side = (5 + 9) / 2 = 7 m. Then 7 x 4 gives the area.',
    },
    // Core 3 (MCQ correctIndex 0)
    {
      id: 'gtz-q3',
      type: 'multiple-choice',
      stem: 'A trapezium has parallel sides 8 cm and 12 cm and perpendicular height 5 cm. What is its area?',
      tier: 'core',
      options: ['50 cm squared', '60 cm squared', '100 cm squared', '480 cm squared'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'gtz-mis-forget-half',
      hint: 'Add 8 + 12 = 20. Multiply by 5 to get 100. Then take half: 100 / 2 = 50 cm squared.',
    },
    // Core 4 (MCQ correctIndex 1)
    {
      id: 'gtz-q4',
      type: 'multiple-choice',
      stem: 'A Sevenoaks garden bed is shaped like a trapezium. The two parallel sides are 6 m and 10 m, and the perpendicular height is 4 m. What is the area of the bed?',
      tier: 'core',
      options: ['24 m squared', '32 m squared', '40 m squared', '64 m squared'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'gtz-mis-one-parallel-side',
      hint: 'Both parallel sides count: average = (6 + 10) / 2 = 8 m, then 8 x 4 = 32 m squared.',
    },
    // Core 5 (MCQ correctIndex 2)
    {
      id: 'gtz-q5',
      type: 'multiple-choice',
      stem: 'Which formula gives the area of a trapezium with parallel sides a and b and perpendicular height h?',
      tier: 'core',
      options: [
        'area = a x b x h',
        'area = (a + b) x h',
        'area = 1/2 x (a + b) x h',
        'area = 1/2 x a x b x h',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'gtz-mis-multiply-instead-of-add',
      hint: 'The two parallel sides are added (not multiplied). The whole thing is then halved, like averaging.',
    },
    // Core 6 (drag-order)
    {
      id: 'gtz-q6',
      type: 'drag-order',
      stem: 'Order these trapezium areas from smallest to largest. Each is given as parallel sides a and b with perpendicular height h.',
      tier: 'core',
      items: [
        'a = 4 cm, b = 6 cm, h = 4 cm',
        'a = 3 cm, b = 5 cm, h = 4 cm',
        'a = 5 cm, b = 9 cm, h = 4 cm',
        'a = 6 cm, b = 10 cm, h = 5 cm',
      ],
      correctOrder: [1, 0, 2, 3],
      xpValue: 15,
      hint: 'Work each area in turn. Item 0: 1/2 x 10 x 4 = 20. Item 1: 1/2 x 8 x 4 = 16. Item 2: 1/2 x 14 x 4 = 28. Item 3: 1/2 x 16 x 5 = 40. Then sort smallest to largest.',
    },
    // Core 7 (spot-misconception)
    {
      id: 'gtz-q7',
      type: 'spot-misconception',
      stem: 'Maya works out the area of a trapezium with parallel sides 8 cm and 12 cm and height 5 cm as "(8 + 12) x 5 = 100 cm squared".',
      tier: 'core',
      statements: [
        {
          text: 'Maya is right. Add the parallel sides, then multiply by the height.',
          isMisconception: true,
        },
        {
          text: 'In fact Maya forgot the half. The full formula is area = 1/2 x (a + b) x h, so area = 1/2 x (8 + 12) x 5 = 1/2 x 20 x 5 = 50 cm squared. Her answer 100 cm squared is exactly twice the real area.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'gtz-mis-forget-half',
    },
    // Confident 1 (numeric)
    {
      id: 'gtz-q8',
      type: 'numeric-entry',
      stem: 'A trapezium has parallel sides 7 cm and 11 cm and perpendicular height 6 cm. What is its area in cm squared?',
      tier: 'confident',
      correctAnswer: 54,
      xpValue: 15,
      unit: 'cm squared',
      hint: 'Average parallel side = (7 + 11) / 2 = 9 cm. Then 9 x 6 = 54 cm squared.',
    },
    // Confident 2 (numeric)
    {
      id: 'gtz-q9',
      type: 'numeric-entry',
      stem: 'A trapezium has parallel sides 12 m and 18 m and perpendicular height 7 m. What is its area in m squared?',
      tier: 'confident',
      correctAnswer: 105,
      xpValue: 15,
      unit: 'm squared',
      hint: 'Add 12 + 18 = 30. Multiply by 7 to get 210. Halve to get 105 m squared.',
    },
    // Confident 3 (MCQ correctIndex 3)
    {
      id: 'gtz-q10',
      type: 'multiple-choice',
      stem: 'A Manchester stage backdrop is a trapezium with parallel sides 4 m at the top and 9 m at the bottom and a perpendicular height of 3 m. The slant side measures 3.4 m. Which value is the correct area to use?',
      tier: 'confident',
      options: [
        '13.5 m squared, using the slant 3.4 m as the height does not change the answer.',
        '11.05 m squared, using the slant 3.4 m as the height.',
        '22.1 m squared, using the slant 3.4 m and forgetting the half.',
        '19.5 m squared, using the perpendicular height 3 m and the formula 1/2 x (4 + 9) x 3.',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'gtz-mis-slant-as-height',
      hint: 'h must be the perpendicular height between the two parallel sides, never the slant edge. 1/2 x (4 + 9) x 3 = 1/2 x 13 x 3 = 19.5 m squared.',
    },
    // Confident 4 (MCQ correctIndex 0)
    {
      id: 'gtz-q11',
      type: 'multiple-choice',
      stem: 'A trapezium has parallel sides 9 cm and 13 cm and perpendicular height 6 cm. Its four sides are 9 cm, 13 cm, 6.5 cm and 7.2 cm. What is its area?',
      tier: 'confident',
      options: [
        '66 cm squared',
        '78 cm squared',
        '35.7 cm squared',
        '70.2 cm squared',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'gtz-mis-add-all-four-sides',
      hint: 'Use only the two parallel sides 9 and 13, plus the perpendicular height 6. Area = 1/2 x (9 + 13) x 6 = 1/2 x 22 x 6 = 66 cm squared.',
    },
    // Confident 5 (MCQ correctIndex 1)
    {
      id: 'gtz-q12',
      type: 'multiple-choice',
      stem: 'A Tunbridge Wells allotment trapezium has parallel sides of 80 cm and 120 cm and a perpendicular height of 0.5 m. What is its area in m squared?',
      tier: 'confident',
      options: [
        '0.05 m squared',
        '0.5 m squared',
        '50 m squared',
        '5 m squared',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'gtz-mis-mixed-units',
      hint: 'Convert the cm values to metres first: 80 cm = 0.8 m and 120 cm = 1.2 m. Then 1/2 x (0.8 + 1.2) x 0.5 = 1/2 x 2 x 0.5 = 0.5 m squared.',
    },
    // Confident 6 (spot-misconception)
    {
      id: 'gtz-q13',
      type: 'spot-misconception',
      stem: 'Liam looks at a trapezium with parallel sides 10 cm and 14 cm and perpendicular height 6 cm and says "it is just a parallelogram, so area = base x height = 14 x 6 = 84 cm squared".',
      tier: 'confident',
      statements: [
        {
          text: 'Liam is right. A trapezium uses the same formula as a parallelogram, area = base x height.',
          isMisconception: true,
        },
        {
          text: 'In fact a trapezium has only one pair of parallel sides, so the two parallel sides have different lengths and you must average them. Area = 1/2 x (10 + 14) x 6 = 1/2 x 24 x 6 = 72 cm squared, not 84.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'gtz-mis-trapezium-vs-parallelogram',
    },
    // Confident 7 (drag-order)
    {
      id: 'gtz-q14',
      type: 'drag-order',
      stem: 'Order these steps for finding the area of a trapezium with a = 5 m, b = 11 m and h = 4 m, from first to last.',
      tier: 'confident',
      items: [
        'Add the two parallel sides: 5 + 11 = 16.',
        'Multiply by the perpendicular height: 16 x 4 = 64.',
        'Take the half: 64 / 2 = 32.',
        'Write the unit: area = 32 m squared.',
      ],
      correctOrder: [0, 1, 2, 3],
      xpValue: 15,
      hint: 'Follow the formula 1/2 x (a + b) x h step by step: add, multiply by h, halve, then state the unit.',
    },
    // Confident 8 (missing-step)
    {
      id: 'gtz-q15',
      type: 'missing-step',
      stem: 'Fill in the missing step. A trapezium has parallel sides 6 cm and 14 cm and perpendicular height 5 cm.',
      tier: 'confident',
      steps: [
        'Write the formula: area = 1/2 x (a + b) x h.',
        'Substitute the values: area = 1/2 x (6 + 14) x 5.',
        null,
        'Multiply by the height and take the half: 1/2 x 20 x 5 = 50 cm squared.',
      ],
      missingStepIndex: 2,
      correctStep: 'Add the two parallel sides: 6 + 14 = 20.',
      xpValue: 20,
      misconceptionId: 'gtz-mis-one-parallel-side',
    },
    // Challenge 1 (Bond-style word problem, numeric)
    {
      id: 'gtz-q16',
      type: 'numeric-entry',
      stem: 'A Dover school orders turf for a trapezium-shaped lawn with parallel sides 8 m and 14 m and perpendicular height 6 m. Turf costs £9 per m squared. The supplier adds a £30 delivery charge. What is the total bill in pounds?',
      tier: 'challenge',
      correctAnswer: 624,
      xpValue: 25,
      unit: 'pounds',
      hint: 'Lawn area = 1/2 x (8 + 14) x 6 = 1/2 x 22 x 6 = 66 m squared. Turf cost = 66 x £9 = £594. Add £30 delivery for a total of £624.',
    },
    // Challenge 2 (MCQ correctIndex 2, multi-step)
    {
      id: 'gtz-q17',
      type: 'multiple-choice',
      stem: 'A Lake District holiday cabin has a trapezium-shaped front window. The parallel sides are 1.5 m at the top and 2.5 m at the bottom, and the perpendicular height is 1.2 m. Glass costs £85 per m squared, rounded up to the nearest pound on the final bill. What is the cost of the glass?',
      tier: 'challenge',
      options: ['£102', '£153', '£204', '£408'],
      correctIndex: 2,
      xpValue: 25,
      hint: 'Window area = 1/2 x (1.5 + 2.5) x 1.2 = 1/2 x 4 x 1.2 = 2.4 m squared. Cost = 2.4 x £85 = £204.',
    },
    // Challenge 3 (numeric, reverse problem)
    {
      id: 'gtz-q18',
      type: 'numeric-entry',
      stem: 'A trapezium has area 90 cm squared and perpendicular height 6 cm. The shorter parallel side is 8 cm. What is the longer parallel side in cm?',
      tier: 'challenge',
      correctAnswer: 22,
      xpValue: 25,
      unit: 'cm',
      hint: 'From 90 = 1/2 x (8 + b) x 6, multiply both sides by 2 to get 180 = (8 + b) x 6. Divide by 6: 8 + b = 30. So b = 22 cm.',
    },
    // Challenge 4 (MCQ correctIndex 3, composite shape)
    {
      id: 'gtz-q19',
      type: 'multiple-choice',
      stem: 'A Sevenoaks community noticeboard is shaped like a trapezium on top of a rectangle. The trapezium has parallel sides 1 m and 1.6 m and perpendicular height 0.4 m, sitting on a 1.6 m by 0.6 m rectangle. The board needs paint applied to the whole front. How many m squared of paint is needed?',
      tier: 'challenge',
      options: ['0.96 m squared', '1.04 m squared', '1.20 m squared', '1.48 m squared'],
      correctIndex: 3,
      xpValue: 25,
      hint: 'Trapezium area = 1/2 x (1 + 1.6) x 0.4 = 1/2 x 2.6 x 0.4 = 0.52 m squared. Rectangle area = 1.6 x 0.6 = 0.96 m squared. Total = 0.52 + 0.96 = 1.48 m squared.',
    },
    // Challenge 5 (missing-step)
    {
      id: 'gtz-q20',
      type: 'missing-step',
      stem: 'Fill in the missing step. A trapezium-shaped flower bed has parallel sides 3.5 m and 6.5 m and perpendicular height 4 m, and the gardener wants the area in m squared.',
      tier: 'challenge',
      steps: [
        'Write the formula: area = 1/2 x (a + b) x h.',
        'Substitute the values: area = 1/2 x (3.5 + 6.5) x 4.',
        'Add the two parallel sides: 3.5 + 6.5 = 10.',
        null,
        'Take the half: 40 / 2 = 20 m squared.',
      ],
      missingStepIndex: 3,
      correctStep: 'Multiply the sum by the perpendicular height: 10 x 4 = 40.',
      xpValue: 25,
      misconceptionId: 'gtz-mis-forget-half',
    },
    // Challenge 6 (numeric, multi-step problem with units)
    {
      id: 'gtz-q21',
      type: 'numeric-entry',
      stem: 'A Manchester park has a trapezium-shaped path section with parallel sides 5 m and 11 m and perpendicular height 2 m. Gravel covers the path at a rate of 0.05 m squared per bag. How many bags are needed to cover the section exactly?',
      tier: 'challenge',
      correctAnswer: 320,
      xpValue: 25,
      hint: 'Path area = 1/2 x (5 + 11) x 2 = 1/2 x 16 x 2 = 16 m squared. Each bag covers 0.05 m squared, so bags needed = 16 / 0.05 = 320.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a trapezium area question where many candidates substituted only one parallel side instead of summing both.
    {
      id: 'gtz-mis-one-parallel-side',
      description:
        'I find the area of a trapezium by multiplying just one parallel side by the height (often the longer one), instead of using both parallel sides.',
      triggerAnswer: 'one-parallel-side',
      correction:
        'Actually both parallel sides matter. The formula is area = 1/2 x (a + b) x h, which uses the average of the two parallel sides, not either one alone.',
      reExplanation:
        'For a trapezium with parallel sides 6 m and 10 m and height 4 m, multiplying only the longer side gives 10 x 4 = 40, which is too big. The correct area is 1/2 x (6 + 10) x 4 = 1/2 x 16 x 4 = 32 m squared. Reading the formula as average parallel side x height makes the both-sides step obvious.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary noting that some pupils added all four sides of the trapezium and treated it like a perimeter input to the area formula.
    {
      id: 'gtz-mis-add-all-four-sides',
      description:
        'I add all four side lengths of the trapezium, then multiply by the height and halve, instead of adding only the two parallel sides.',
      triggerAnswer: 'add-all-four-sides',
      correction:
        'In fact only the two parallel sides go into the formula. The other two sides are slants and play no part in the area.',
      reExplanation:
        'For a trapezium with parallel sides 9 cm and 13 cm, slants 6.5 cm and 7.2 cm, and height 6 cm, adding all four sides gives 35.7 cm, and 1/2 x 35.7 x 6 = 107.1 cm squared, far too large. The correct area uses only the parallel sides: 1/2 x (9 + 13) x 6 = 66 cm squared.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2022, Paper 01 (Foundation, Non-calculator), commentary on a trapezium question where weaker candidates used the slant side as the height instead of the perpendicular distance.
    {
      id: 'gtz-mis-slant-as-height',
      description:
        'I use the slant (non-parallel) side of a trapezium as the height in the formula, instead of the perpendicular distance between the parallel sides.',
      triggerAnswer: 'slant-as-height',
      correction:
        'Actually h must be the perpendicular height, measured at right angles to the parallel sides. The slant edge is longer and gives the wrong area.',
      reExplanation:
        'For a trapezium with parallel sides 4 m and 9 m, perpendicular height 3 m and slant 3.4 m, using the slant gives 1/2 x 13 x 3.4 = 22.1 m squared. The correct area uses h = 3: 1/2 x 13 x 3 = 19.5 m squared. The dashed perpendicular line on a trapezium plan shows you which length to use.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 2F (Foundation, Calculator), commentary on a basic area-of-trapezium question where roughly a third of candidates produced exactly twice the correct answer by omitting the 1/2.
    {
      id: 'gtz-mis-forget-half',
      description:
        'I add the parallel sides and multiply by the height but forget the half, so my answer is twice the real area.',
      triggerAnswer: 'forget-half',
      correction:
        'In fact the formula is area = 1/2 x (a + b) x h. Without the half, you have the area of two trapezia joined into a parallelogram, not one trapezium.',
      reExplanation:
        'For parallel sides 8 cm and 12 cm and height 5 cm, (8 + 12) x 5 = 100 cm squared, but that is the doubled-up parallelogram. One trapezium covers half of it: 100 / 2 = 50 cm squared. The half is what turns the doubled-up parallelogram back into a single trapezium.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 5 Geometry and Measures, "Area of Trapezia" page Common Mistake box on pupils writing a x b instead of a + b in the formula.
    {
      id: 'gtz-mis-multiply-instead-of-add',
      description:
        'I write the trapezium area formula as 1/2 x a x b x h, multiplying the two parallel sides instead of adding them.',
      triggerAnswer: 'multiply-instead-of-add',
      correction:
        'Actually the parallel sides are added, not multiplied. The formula is area = 1/2 x (a + b) x h.',
      reExplanation:
        'For parallel sides 5 cm and 9 cm and height 4 cm, multiplying gives 1/2 x 5 x 9 x 4 = 90, which has no real meaning here. Adding gives 1/2 x (5 + 9) x 4 = 1/2 x 14 x 4 = 28 cm squared. Reading the formula as average parallel side x height keeps the plus sign in the right place.',
    },
    // Source: NCETM "Misconceptions and how to overcome them: area" reference document, Year 7 transition pack, section on confusing the trapezium and parallelogram area formulae because both have a base and a height.
    {
      id: 'gtz-mis-trapezium-vs-parallelogram',
      description:
        'I treat a trapezium as a parallelogram and use area = base x height with just one of the parallel sides as the base.',
      triggerAnswer: 'trapezium-vs-parallelogram',
      correction:
        'In fact a trapezium has only one pair of parallel sides, and they have different lengths. You must average them, then multiply by the perpendicular height.',
      reExplanation:
        'For a trapezium with parallel sides 10 cm and 14 cm and height 6 cm, base x height with the longer side gives 14 x 6 = 84 cm squared, which is too big. The correct area is 1/2 x (10 + 14) x 6 = 1/2 x 24 x 6 = 72 cm squared. A parallelogram has both opposite sides equal, so no averaging is needed.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 02 (Foundation, Calculator), commentary on a trapezium area question that mixed cm and m units; many candidates substituted directly without converting.
    {
      id: 'gtz-mis-mixed-units',
      description:
        'I substitute lengths in different units (some in cm, some in m) directly into the trapezium formula without converting them all to the same unit first.',
      triggerAnswer: 'mixed-units',
      correction:
        'Actually all three lengths must use the same unit before you substitute. Convert to one unit first, then apply the formula.',
      reExplanation:
        'For parallel sides 80 cm and 120 cm and height 0.5 m, mixing units gives 1/2 x (80 + 120) x 0.5 = 50, with an unclear unit. Converting first to metres gives 1/2 x (0.8 + 1.2) x 0.5 = 0.5 m squared, the right answer. Pick the unit that suits the question and convert every length to it before substituting.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const areaTrapeziaZoneNodes = [areaTrapezia]
