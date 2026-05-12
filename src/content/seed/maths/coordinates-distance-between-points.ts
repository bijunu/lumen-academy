import type { SkillNode } from '@/types/content'

export const coordinatesDistanceBetweenPoints: SkillNode = {
  id: 'maths-coordinates-distance-between-points',
  title: 'Distance Between Two Points',
  description:
    'Find the distance between two points on a coordinate grid. For points on the same horizontal or vertical line, count along the axis or subtract the matching coordinate. For two points that differ in both x and y, drop a right triangle, find the horizontal and vertical legs, then apply Pythagoras: distance = sqrt((change in x) squared + (change in y) squared). Keep clean 3-4-5 and 6-8-10 triangles, and read diagonal-of-a-unit-square distances as sqrt(2).',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-coordinates',
  zoneName: 'Coordinates',
  tier: 'confident',
  prerequisites: ['maths-coordinates-grid'],
  curriculum: {
    ks3Objective:
      "Find the distance between two points on a coordinate grid, including by applying Pythagoras' theorem.",
    awardingBodies: {
      aqa: 'G11 Calculate the distance between two points on a coordinate grid (GCSE Mathematics 8300)',
      edexcel: 'G11 Find the distance between two points on a coordinate grid (GCSE Mathematics 1MA1)',
      ocr: '7.02b Find the distance between two points on a coordinate grid (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'cdbp-scene-pythag-triangle',
      title: 'Drop a Right Triangle Between (1, 1) and (4, 5)',
      type: 'labelled-diagram',
      instructions:
        'Click each hotspot to read about the triangle formed between the points A(1, 1) and B(4, 5). The horizontal leg sits along y = 1 and runs from x = 1 to x = 4, so it has length 3. The vertical leg sits along x = 4 and runs from y = 1 to y = 5, so it has length 4. The hypotenuse runs straight from A to B and has length 5, because 3 squared plus 4 squared is 9 plus 16 = 25, and sqrt(25) = 5. This is the classic 3-4-5 right triangle laid over a coordinate grid.',
      data: {
        viewBox: '0 0 100 100',
        gridConfig: { xMin: 0, xMax: 6, yMin: 0, yMax: 6, step: 1 },
        points: [
          { label: 'A', x: 1, y: 1 },
          { label: 'B', x: 4, y: 5 },
          { label: 'C', x: 4, y: 1, note: 'right-angle corner' },
        ],
        legs: [
          { from: 'A', to: 'C', length: 3, orientation: 'horizontal' },
          { from: 'C', to: 'B', length: 4, orientation: 'vertical' },
        ],
        hypotenuse: { from: 'A', to: 'B', length: 5 },
        hotspots: [
          {
            id: 'cdbp-h-horizontal-leg',
            x: 32,
            y: 78,
            label: 'Horizontal leg = 3',
            description: 'Count along y = 1 from x = 1 to x = 4. The gap is 4 - 1 = 3 units.',
          },
          {
            id: 'cdbp-h-vertical-leg',
            x: 70,
            y: 50,
            label: 'Vertical leg = 4',
            description: 'Count up x = 4 from y = 1 to y = 5. The gap is 5 - 1 = 4 units.',
          },
          {
            id: 'cdbp-h-hypotenuse',
            x: 45,
            y: 45,
            label: 'Hypotenuse = 5',
            description: 'The straight line from A to B has length sqrt(3 squared + 4 squared) = sqrt(25) = 5.',
          },
          {
            id: 'cdbp-h-pythag-rule',
            x: 18,
            y: 22,
            label: "Pythagoras' rule",
            description: 'For a right triangle: hypotenuse squared = (horizontal leg) squared + (vertical leg) squared.',
          },
        ],
      },
    },
    {
      id: 'cdbp-scene-axis-aligned',
      title: 'Same Row or Same Column: Just Subtract',
      type: 'diagram',
      instructions:
        'When two points share an x value or a y value, the distance is a simple subtraction. P(-2, 3) and Q(4, 3) share the y value 3, so the segment PQ is horizontal. The distance is 4 - (-2) = 6 units. R(5, -1) and S(5, 7) share the x value 5, so RS is vertical. The distance is 7 - (-1) = 8 units. No squaring, no square roots, no triangle needed. Always take the larger value minus the smaller value so the answer comes out positive.',
      data: {
        gridConfig: { xMin: -3, xMax: 6, yMin: -2, yMax: 8, step: 1 },
        horizontalPair: {
          from: { label: 'P', x: -2, y: 3 },
          to: { label: 'Q', x: 4, y: 3 },
          axis: 'y = 3',
          distance: 6,
          method: 'subtract x values: 4 - (-2) = 6',
        },
        verticalPair: {
          from: { label: 'R', x: 5, y: -1 },
          to: { label: 'S', x: 5, y: 7 },
          axis: 'x = 5',
          distance: 8,
          method: 'subtract y values: 7 - (-1) = 8',
        },
        callout:
          'Subtract larger minus smaller. For negative values, treat the minus signs carefully: 4 - (-2) is 4 + 2 = 6, not 4 - 2 = 2.',
      },
    },
    {
      id: 'cdbp-scene-count-then-pythag',
      title: 'The Count-Then-Pythagoras Workflow',
      type: 'diagram',
      instructions:
        'Read across the four steps. Step 1: plot the two points and check whether they share an x or a y value. Step 2: if they share one, subtract larger minus smaller and stop. Step 3: if they differ in both, draw the right triangle by counting horizontally and vertically. Step 4: square each leg, add, then take the square root. This routine works for every Year 7 distance question on a grid, from a treasure-hunt map to a school campus walk.',
      data: {
        steps: [
          {
            n: 1,
            title: 'Plot and inspect',
            body: 'Mark both points on the grid. Ask: do they share x, share y, or differ in both?',
          },
          {
            n: 2,
            title: 'Shared coordinate? Subtract',
            body: 'Same x or same y means an axis-aligned segment. Distance = larger value minus smaller value.',
          },
          {
            n: 3,
            title: 'Differ in both? Build the triangle',
            body: 'Horizontal leg = difference in x values. Vertical leg = difference in y values. Both as positive lengths.',
          },
          {
            n: 4,
            title: 'Square, add, root',
            body: 'Distance = sqrt((horizontal leg) squared + (vertical leg) squared). For (1, 1) to (4, 5), sqrt(9 + 16) = sqrt(25) = 5.',
          },
        ],
        cleanTriangles: ['3-4-5', '6-8-10', '5-12-13', '1-1-sqrt(2)', '2-2-sqrt(8) = 2 sqrt(2)'],
        callout:
          'Keep both legs positive. The squaring step would erase a sign anyway, but writing positive lengths from the start avoids slips later.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'cdbp-worked-1',
      title: 'Distance from A(1, 1) to B(4, 5) using Pythagoras',
      steps: [
        {
          explanation:
            'Plot the points A(1, 1) and B(4, 5). They differ in both x and y, so a right triangle is needed.',
        },
        {
          explanation:
            'Find the horizontal leg: the difference in x values is 4 - 1 = 3.',
          maths: 'horizontal leg = 3',
        },
        {
          explanation:
            'Find the vertical leg: the difference in y values is 5 - 1 = 4.',
          maths: 'vertical leg = 4',
        },
        {
          explanation:
            "Apply Pythagoras' theorem: the distance squared equals the sum of the leg squares.",
          maths: 'distance squared = 3 squared + 4 squared = 9 + 16 = 25',
        },
        {
          explanation:
            'Take the positive square root.',
          maths: 'distance = sqrt(25) = 5',
        },
        {
          explanation:
            'So the distance from A to B is 5 units. This is the classic 3-4-5 right triangle.',
          maths: 'AB = 5',
        },
      ],
    },
    {
      id: 'cdbp-worked-2',
      title: 'Distance from P(-2, 3) to Q(4, 3) by counting (missing step revealed)',
      steps: [
        {
          explanation:
            'Plot P(-2, 3) and Q(4, 3). They share the y value 3, so the segment is horizontal along y = 3.',
        },
        {
          explanation:
            'Because the segment is axis-aligned, no triangle is needed. Just subtract the x values, larger minus smaller.',
        },
        {
          explanation:
            'Compute the gap between x = -2 and x = 4. Be careful with the negative: 4 - (-2) = 4 + 2.',
        },
        {
          explanation:
            'The distance is the gap between the x values.',
          maths: 'PQ = 4 - (-2) = 6',
        },
        {
          explanation:
            'So the distance from P to Q is 6 units. Pythagoras was not needed because the points lie on the same horizontal line.',
          maths: 'PQ = 6',
        },
      ],
    },
  ],
  questions: [
    // Core 1: axis-aligned horizontal (MCQ correctIndex = 2)
    {
      id: 'cdbp-q1',
      type: 'multiple-choice',
      stem: 'Find the distance between A(1, 4) and B(7, 4).',
      tier: 'core',
      options: ['11 units', '3 units', '6 units', '8 units'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'A and B share the y value 4. Subtract the x values: 7 - 1 = 6.',
    },
    // Core 2: axis-aligned vertical (numeric)
    {
      id: 'cdbp-q2',
      type: 'numeric-entry',
      stem: 'Find the distance, in units, between C(3, -2) and D(3, 5).',
      tier: 'core',
      correctAnswer: 7,
      unit: 'units',
      xpValue: 10,
      misconceptionId: 'cdbp-mis-negative-subtraction',
      hint: 'C and D share the x value 3. Subtract the y values: 5 - (-2) = 5 + 2 = 7.',
    },
    // Core 3: classic 3-4-5 (MCQ correctIndex = 1)
    {
      id: 'cdbp-q3',
      type: 'multiple-choice',
      stem: 'Find the distance between E(2, 1) and F(5, 5).',
      tier: 'core',
      options: ['7 units', '5 units', '4 units', 'sqrt(7) units'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'cdbp-mis-add-no-square',
      hint: 'Horizontal leg = 5 - 2 = 3. Vertical leg = 5 - 1 = 4. Distance = sqrt(9 + 16) = sqrt(25) = 5.',
    },
    // Core 4: diagonal of unit square = sqrt(2) (MCQ correctIndex = 3)
    {
      id: 'cdbp-q4',
      type: 'multiple-choice',
      stem: 'Find the distance between G(2, 3) and H(3, 4). Leave the answer as a surd.',
      tier: 'core',
      options: ['2 units', 'sqrt(3) units', '1 unit', 'sqrt(2) units'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Horizontal leg = 1, vertical leg = 1. Distance = sqrt(1 + 1) = sqrt(2). This is the diagonal of a unit square.',
    },
    // Core 5: axis-aligned with negatives (numeric)
    {
      id: 'cdbp-q5',
      type: 'numeric-entry',
      stem: 'On a Sevenoaks campus map, the canteen is at K(-3, 2) and the library is at L(4, 2). Both lie on the path y = 2. How many units long is the walk from canteen to library?',
      tier: 'core',
      correctAnswer: 7,
      unit: 'units',
      xpValue: 10,
      hint: 'Same y value, so subtract x: 4 - (-3) = 4 + 3 = 7.',
    },
    // Challenge 6: 6-8-10 triangle in a treasure-hunt context (numeric)
    {
      id: 'cdbp-q6',
      type: 'numeric-entry',
      stem: 'On a treasure-hunt map, the well is at W(1, 2) and the buried chest is at X(7, 10). What is the straight-line distance, in metres, between them? (Each grid square is 1 metre.)',
      tier: 'challenge',
      correctAnswer: 10,
      unit: 'metres',
      xpValue: 25,
      hint: 'Horizontal leg = 7 - 1 = 6. Vertical leg = 10 - 2 = 8. Distance = sqrt(36 + 64) = sqrt(100) = 10 metres.',
    },
    // Core 7: spot-misconception on midpoint vs distance
    {
      id: 'cdbp-q7',
      type: 'spot-misconception',
      stem: 'Asked to find the distance between A(2, 0) and B(8, 0), Theo writes "distance = (2 + 8) / 2 = 5".',
      tier: 'core',
      statements: [
        {
          text: 'Theo is right. To find the distance between two points, take the mean of the x values.',
          isMisconception: true,
        },
        {
          text: 'In fact (2 + 8) / 2 = 5 is the midpoint x value, not the distance. The distance is the gap: 8 - 2 = 6 units.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cdbp-mis-midpoint-not-distance',
    },
    // Core 8: drag-order the workflow
    {
      id: 'cdbp-q8',
      type: 'drag-order',
      stem: 'Drag the steps into the right order for finding the distance between two points that differ in both x and y.',
      tier: 'core',
      items: [
        'Take the square root of the sum to find the distance.',
        'Plot the two points and join them with a straight line.',
        'Square each leg and add the two squares.',
        'Form a right triangle: a horizontal leg and a vertical leg from the differences in x and y.',
      ],
      correctOrder: [1, 3, 2, 0],
      xpValue: 20,
    },
    // Confident 1: 6-8-10 with negative coordinates (numeric)
    {
      id: 'cdbp-q9',
      type: 'numeric-entry',
      stem: 'In a Tunbridge Wells garden plot, a rose bed is at R(-2, -1) and an apple tree is at T(4, 7). What is the straight-line distance, in metres, between them? (Each grid square is 1 metre.)',
      tier: 'confident',
      correctAnswer: 10,
      unit: 'metres',
      xpValue: 15,
      misconceptionId: 'cdbp-mis-negative-subtraction',
      hint: 'Horizontal leg = 4 - (-2) = 6. Vertical leg = 7 - (-1) = 8. Distance = sqrt(36 + 64) = sqrt(100) = 10 metres.',
    },
    // Confident 2: surd answer 2 sqrt(2) (MCQ correctIndex = 0)
    {
      id: 'cdbp-q10',
      type: 'multiple-choice',
      stem: 'Find the distance between M(1, 1) and N(3, 3). Leave the answer as a simplified surd.',
      tier: 'confident',
      options: ['2 sqrt(2) units', '4 units', 'sqrt(8) units, not simplified', 'sqrt(4) units'],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'cdbp-mis-surd-not-simplified',
      hint: 'Legs = 2 and 2. Distance = sqrt(4 + 4) = sqrt(8) = sqrt(4 x 2) = 2 sqrt(2). Simplify by pulling sqrt(4) = 2 outside the surd.',
    },
    // Confident 3: subtracting before squaring (sign slip) - MCQ
    {
      id: 'cdbp-q11',
      type: 'multiple-choice',
      stem: 'Find the distance from A(-3, 2) to B(1, 5).',
      tier: 'confident',
      options: [
        '25 units',
        '5 units',
        'sqrt(13) units',
        '7 units',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'cdbp-mis-sign-slip',
      hint: 'Horizontal leg = 1 - (-3) = 4 (not 1 - 3 = -2). Vertical leg = 5 - 2 = 3. Distance = sqrt(16 + 9) = sqrt(25) = 5 units. Always write legs as positive lengths.',
    },
    // Confident 4: 5-12-13 (MCQ correctIndex = 2)
    {
      id: 'cdbp-q12',
      type: 'multiple-choice',
      stem: 'Find the distance between P(0, 0) and Q(5, 12).',
      tier: 'confident',
      options: ['17 units', '7 units', '13 units', '15 units'],
      correctIndex: 2,
      xpValue: 15,
      hint: 'Legs = 5 and 12. Distance = sqrt(25 + 144) = sqrt(169) = 13. This is the classic 5-12-13 right triangle.',
    },
    // Confident 5: missing step in a Pythagoras-style worked example
    {
      id: 'cdbp-q13',
      type: 'missing-step',
      stem: 'Fill in the missing step. Find the distance between A(2, -1) and B(8, 7).',
      tier: 'confident',
      steps: [
        'Horizontal leg = 8 - 2 = 6.',
        'Vertical leg = 7 - (-1) = 7 + 1 = 8.',
        null,
        'Distance = sqrt(100) = 10 units.',
      ],
      missingStepIndex: 2,
      correctStep: 'Square each leg and add: 6 squared + 8 squared = 36 + 64 = 100.',
      xpValue: 20,
    },
    // Confident 6: spot-misconception on midpoint formula misuse
    {
      id: 'cdbp-q14',
      type: 'spot-misconception',
      stem: 'Asked for the distance from A(2, 1) to B(6, 4), Jas writes "the distance is ((2 + 6) / 2, (1 + 4) / 2) = (4, 2.5)".',
      tier: 'confident',
      statements: [
        {
          text: 'Jas is right. The distance between two points is a coordinate pair found by averaging the x and y values.',
          isMisconception: true,
        },
        {
          text: 'In fact (4, 2.5) is the midpoint of the segment AB, a single point on the grid, not a distance. The distance is a single positive number: legs 4 and 3, so sqrt(16 + 9) = sqrt(25) = 5 units.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'cdbp-mis-midpoint-not-distance',
    },
    // Confident 7: campus walk with surd (numeric, tolerance)
    {
      id: 'cdbp-q15',
      type: 'numeric-entry',
      stem: 'A learner walks from the school gate at G(0, 0) to the science block at S(6, 6) in a straight line across an open quad. Each grid square is 1 metre. To 2 decimal places, how many metres is the walk?',
      tier: 'confident',
      correctAnswer: 8.49,
      tolerance: 0.02,
      unit: 'metres',
      xpValue: 20,
      hint: 'Legs = 6 and 6. Distance = sqrt(36 + 36) = sqrt(72) = 6 sqrt(2). As a decimal, 6 x 1.4142 = 8.49 metres.',
    },
    // Confident 8: reading a non-uniform grid trap (MCQ correctIndex = 1)
    {
      id: 'cdbp-q16',
      type: 'multiple-choice',
      stem: 'A printed map shows points A(0, 0) and B(3, 4). The x axis is labelled in steps of 1 unit, but the y axis is labelled in steps of 2 units (so the gridline marked "4" is really at y = 4). Working in true units, what is the distance from A to B?',
      tier: 'confident',
      options: ['7 units', '5 units', 'sqrt(13) units', 'sqrt(7) units'],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'cdbp-mis-non-uniform-grid',
      hint: 'Read the axis labels, not the grid squares. True coordinates are (0, 0) and (3, 4). Legs = 3 and 4, distance = 5. The non-uniform axis labels do not change the coordinate values.',
    },
    // Challenge 1: Bond-style distance + midpoint multi-step (numeric)
    {
      id: 'cdbp-q17',
      type: 'numeric-entry',
      stem: 'A garden plot in Hastings has two corner posts at C(-3, -4) and D(9, 12). The owner wants to put a third post exactly at the midpoint of CD, then measure the straight-line distance from C to the midpoint. What is that distance, in metres? (Each grid square is 1 metre.)',
      tier: 'challenge',
      correctAnswer: 10,
      unit: 'metres',
      xpValue: 25,
      hint: 'Midpoint M = ((-3 + 9)/2, (-4 + 12)/2) = (3, 4). Distance C to M: legs 3 - (-3) = 6 and 4 - (-4) = 8. sqrt(36 + 64) = sqrt(100) = 10 m.',
    },
    // Challenge 2: Bond-style distance to find area of square (MCQ correctIndex = 3)
    {
      id: 'cdbp-q18',
      type: 'multiple-choice',
      stem: 'A square has one side joining the corners A(1, 2) and B(4, 6). All sides have the same length. What is the area of the square, in square units?',
      tier: 'challenge',
      options: ['7 square units', '12 square units', '49 square units', '25 square units'],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'cdbp-mis-add-no-square',
      hint: 'Side AB: legs 3 and 4, so length = sqrt(9 + 16) = 5. Area of square = 5 squared = 25 square units.',
    },
    // Challenge 3: Bond-style perimeter of a triangle (numeric)
    {
      id: 'cdbp-q19',
      type: 'numeric-entry',
      stem: 'A triangle has vertices at A(0, 0), B(6, 0) and C(6, 8). What is the perimeter of the triangle, in units?',
      tier: 'challenge',
      correctAnswer: 24,
      unit: 'units',
      xpValue: 25,
      hint: 'AB = 6 (axis-aligned). BC = 8 (axis-aligned). CA: legs 6 and 8, so sqrt(36 + 64) = 10. Perimeter = 6 + 8 + 10 = 24 units.',
    },
    // Challenge 4: surd simplification - MCQ
    {
      id: 'cdbp-q20',
      type: 'multiple-choice',
      stem: 'Find the distance from A(0, 0) to B(2, 4). Leave the answer as a simplified surd.',
      tier: 'challenge',
      options: [
        'sqrt(20) units',
        '20 units',
        'sqrt(4) + sqrt(5) units',
        '2 sqrt(5) units',
      ],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'cdbp-mis-surd-not-simplified',
      hint: 'Legs = 2 and 4. Distance = sqrt(4 + 16) = sqrt(20). Simplify: 20 = 4 x 5, so sqrt(20) = sqrt(4) x sqrt(5) = 2 sqrt(5). The square root does not distribute over a sum, so sqrt(4) + sqrt(5) is not the same as sqrt(20).',
    },
    // Challenge 5: Bond-style closest of three points (MCQ correctIndex = 0)
    {
      id: 'cdbp-q21',
      type: 'multiple-choice',
      stem: 'A learner stands at the origin O(0, 0) on a campus map. Three friends stand at P(3, 4), Q(5, 5) and R(6, 1). Which friend is closest to the learner, and what is that distance?',
      tier: 'challenge',
      options: [
        'P, at a distance of 5 units',
        'R, at a distance of sqrt(37) units',
        'Q, at a distance of sqrt(50) units',
        'P, at a distance of 7 units',
      ],
      correctIndex: 0,
      xpValue: 25,
      hint: 'OP = sqrt(9 + 16) = 5. OQ = sqrt(25 + 25) = sqrt(50), about 7.07. OR = sqrt(36 + 1) = sqrt(37), about 6.08. The smallest is OP = 5.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 2F (Foundation, Calculator), commentary on a Pythagoras question where pupils added the legs directly instead of squaring them first.
    {
      id: 'cdbp-mis-add-no-square',
      description:
        'I add the horizontal and vertical legs directly, so I say the distance from (1, 1) to (4, 5) is 3 + 4 = 7, not sqrt(9 + 16) = 5.',
      triggerAnswer: 'add-no-square',
      correction:
        "Actually Pythagoras' theorem says square each leg, add, then take the root. Adding the legs straight skips the squaring and gives the wrong answer.",
      reExplanation:
        'For A(1, 1) to B(4, 5), horizontal leg = 3 and vertical leg = 4. Square each: 3 squared = 9 and 4 squared = 16. Add: 9 + 16 = 25. Root: sqrt(25) = 5 units. The straight 3 + 4 = 7 would be the path that walks along the grid lines, not the diagonal. The diagonal is always shorter than the sum of the legs.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a coordinates question where pupils confused the midpoint of two points with the distance between them.
    {
      id: 'cdbp-mis-midpoint-not-distance',
      description:
        'I use the midpoint formula by accident, writing the distance as a coordinate pair like (4, 2.5) instead of a single positive length.',
      triggerAnswer: 'midpoint-not-distance',
      correction:
        'In fact the midpoint is a point on the grid, but the distance is a single number. The two ideas use different formulas.',
      reExplanation:
        'For A(2, 1) and B(6, 4), the midpoint is ((2 + 6) / 2, (1 + 4) / 2) = (4, 2.5), a point. The distance is sqrt((6 - 2) squared + (4 - 1) squared) = sqrt(16 + 9) = sqrt(25) = 5, a length. Distance is always a single positive number, never a coordinate pair.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2022, Paper 02 (Foundation, Calculator), commentary on a Pythagoras question where pupils mishandled negative coordinates when finding the side lengths of a right triangle.
    {
      id: 'cdbp-mis-sign-slip',
      description:
        'I subtract before squaring and slip on the signs of negative coordinates, so I get the wrong leg length, especially when one coordinate is negative.',
      triggerAnswer: 'sign-slip',
      correction:
        'Actually the leg length is always positive: it is the absolute gap between the two coordinate values. Take larger minus smaller, or take the modulus of the difference.',
      reExplanation:
        'For A(-3, 2) and B(1, 5), the horizontal leg is 1 - (-3) = 4, not 1 - 3 = -2. Treat 1 - (-3) as 1 + 3 = 4. The squaring step would hide a wrong sign here, but if a learner wrote the leg as -2 by mistake, the answer of sqrt(4 + 9) = sqrt(13) would be far smaller than the correct sqrt(16 + 9) = 5. Always write legs as positive lengths from the start.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a coordinates question where pupils muddled a subtraction involving a negative number, e.g. writing 4 - (-2) as 2 rather than 6.
    {
      id: 'cdbp-mis-negative-subtraction',
      description:
        'I subtract a negative coordinate as if the minus signs cancel into a single subtraction, so 4 - (-2) becomes 4 - 2 = 2 rather than 4 + 2 = 6.',
      triggerAnswer: 'negative-subtraction',
      correction:
        'In fact subtracting a negative is the same as adding its positive. 4 - (-2) = 4 + 2 = 6, not 4 - 2 = 2.',
      reExplanation:
        'For the horizontal distance between P(-2, 3) and Q(4, 3), the gap is 4 - (-2). The double minus turns into a plus: 4 + 2 = 6. A number-line check confirms it: from -2 to 0 is 2 steps, and from 0 to 4 is 4 more steps, so 2 + 4 = 6 steps in total. The same care applies to vertical gaps with negative y values.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 9 "Graphs" by Kerslake, on pupils reading grid square counts directly off a printed graph rather than reading the axis labels, which fails on non-uniform or compressed axes.
    {
      id: 'cdbp-mis-non-uniform-grid',
      description:
        'I count grid squares to find a distance instead of reading the axis labels, so I get the wrong leg length when the axis steps are not 1 unit per square.',
      triggerAnswer: 'non-uniform-grid',
      correction:
        'Actually the coordinate values come from the axis labels, not the grid squares. One square does not always mean one unit; check the scale before counting.',
      reExplanation:
        'On a map with x labelled in 1s and y in 2s, the gridline at y = 4 is one square above the gridline at y = 2, but the gap is 2 units, not 1. For A(0, 0) and B(3, 4), the true legs are 3 and 4 from the labels, giving a distance of 5 units. Counting "3 squares right and 2 squares up" gives the wrong vertical leg and wrecks the answer.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 1F (Foundation, Non-calculator), commentary on a Pythagoras question where pupils left an answer as sqrt(20) instead of simplifying to 2 sqrt(5).
    {
      id: 'cdbp-mis-surd-not-simplified',
      description:
        'I leave a distance as sqrt(20) or sqrt(8) without simplifying, missing the square factor that would pull a whole number outside the surd.',
      triggerAnswer: 'surd-not-simplified',
      correction:
        'In fact a surd is simplified when no square factor sits inside. sqrt(20) = sqrt(4 x 5) = 2 sqrt(5). sqrt(8) = sqrt(4 x 2) = 2 sqrt(2).',
      reExplanation:
        'For A(0, 0) and B(2, 4), distance = sqrt(4 + 16) = sqrt(20). To simplify, find the biggest square factor of 20: that is 4. Then sqrt(20) = sqrt(4) x sqrt(5) = 2 sqrt(5). The same trick gives sqrt(8) = 2 sqrt(2) and sqrt(72) = 6 sqrt(2). Always check whether the number under the root has a square factor before stopping.',
    },
    // Authored, no external source: classroom-observed slip where Year 7 pupils, applying Pythagoras correctly, forget to take the square root and report the squared distance.
    {
      id: 'cdbp-mis-forget-sqrt',
      description:
        'I square the legs and add them, then stop and report 25 as the distance instead of taking the square root to get 5.',
      triggerAnswer: 'forget-sqrt',
      correction:
        'Actually the sum of the leg squares is the square of the distance, not the distance itself. Take the square root at the end.',
      reExplanation:
        'For A(1, 1) and B(4, 5), legs 3 and 4 give 3 squared + 4 squared = 9 + 16 = 25. That 25 is the SQUARE of the distance. The distance itself is sqrt(25) = 5 units. The triangle in the diagram has hypotenuse 5, not 25. A sanity check: a 3 by 4 grid box clearly fits a diagonal under 7 units long, so 25 is far too large.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const coordinatesDistanceBetweenPointsZoneNodes = [coordinatesDistanceBetweenPoints]
