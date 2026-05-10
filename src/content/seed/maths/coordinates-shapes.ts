import type { SkillNode } from '@/types/content'

export const coordinatesShapes: SkillNode = {
  id: 'maths-coordinates-four-quadrants-shapes',
  title: 'Shapes and Transformations Across Four Quadrants',
  description:
    'Plot a shape from a list of vertices that span all four quadrants, name the shape from its corners, and apply a translation by a column vector or a reflection in the x or y axis. Use the four-quadrant grid to track how each vertex moves under the transformation.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-coordinates',
  zoneName: 'Coordinates',
  tier: 'confident',
  prerequisites: ['maths-coordinates-grid'],
  curriculum: {
    ks3Objective:
      'Identify, describe and construct congruent and similar shapes, including on coordinate axes, by considering rotation, reflection, translation and enlargement (including fractional scale factors).',
    awardingBodies: {
      aqa: 'G7 Identify, describe and construct congruent and similar shapes by considering rotation, reflection, translation and enlargement (GCSE Mathematics 8300)',
      edexcel: 'G7 Identify, describe and construct congruent and similar shapes, including on coordinate axes, by considering rotation, reflection, translation and enlargement (GCSE Mathematics 1MA1)',
      ocr: '7.05a Identify, describe and construct congruent shapes, including on coordinate axes, using translation and reflection (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'cs-scene-square-across-quadrants',
      title: 'A Square Across the Four Quadrants',
      type: 'diagram',
      instructions:
        'Look at the square with vertices A(-2, -2), B(2, -2), C(2, 2) and D(-2, 2). The four corners sit one in each quadrant of a grid that runs from -3 to 3 along both axes. The sides of the square lie parallel to the x and y axes, so each side has length 4.',
      data: {
        gridConfig: { xMin: -3, xMax: 3, yMin: -3, yMax: 3, step: 1 },
        vertices: [
          { label: 'A', x: -2, y: -2, quadrant: 'Q3' },
          { label: 'B', x: 2, y: -2, quadrant: 'Q4' },
          { label: 'C', x: 2, y: 2, quadrant: 'Q1' },
          { label: 'D', x: -2, y: 2, quadrant: 'Q2' },
        ],
        sides: [
          { from: 'A', to: 'B', length: 4 },
          { from: 'B', to: 'C', length: 4 },
          { from: 'C', to: 'D', length: 4 },
          { from: 'D', to: 'A', length: 4 },
        ],
        callout:
          'Watch the vertex order. The list ABCD here goes anticlockwise around the square, so joining A to B to C to D to A traces the perimeter cleanly. If a question listed the same four points in the order A(-2,-2), C(2,2), B(2,-2), D(-2,2) and you joined them in that listed order, you would draw a bow-tie with two crossing lines, not a square. Always plot every point first, then join them in perimeter order. Side lengths come from the gap between the x or y values of the two endpoints.',
      },
    },
    {
      id: 'cs-scene-translation-vector',
      title: 'Translate by a Column Vector',
      type: 'simulation',
      instructions:
        'See how every vertex of the triangle shifts by the same column vector. The original triangle has vertices P(-1, 1), Q(2, 1) and R(2, 4). Translating by 3 right and 2 down (vector (3, -2)) sends each vertex to a new place: P(-1, 1) becomes P(2, -1), Q(2, 1) becomes Q(5, -1), R(2, 4) becomes R(5, 2). The shape stays the same, just shifted.',
      data: {
        gridConfig: { xMin: -3, xMax: 6, yMin: -3, yMax: 5, step: 1 },
        translationVector: { dx: 3, dy: -2, label: '3 right, 2 down' },
        original: {
          label: 'Triangle PQR',
          vertices: [
            { label: 'P', x: -1, y: 1 },
            { label: 'Q', x: 2, y: 1 },
            { label: 'R', x: 2, y: 4 },
          ],
        },
        image: {
          label: 'Triangle PQR after translation',
          vertices: [
            { label: "P'", x: 2, y: -1 },
            { label: "Q'", x: 5, y: -1 },
            { label: "R'", x: 5, y: 2 },
          ],
        },
        callout:
          'Every vertex moves by the same vector. To translate by (a, b), add a to each x value and add b to each y value.',
      },
    },
    {
      id: 'cs-scene-reflection-axes',
      title: 'Reflect in the Axes',
      type: 'diagram',
      instructions:
        'Read each row across to see how reflecting a point in the x axis or in the y axis flips one of its coordinates. Reflecting (3, 2) in the x axis gives (3, -2): the y value flips sign. Reflecting (3, 2) in the y axis gives (-3, 2): the x value flips sign. The reflected point sits the same distance from the axis as the original, but on the opposite side.',
      data: {
        gridConfig: { xMin: -4, xMax: 4, yMin: -4, yMax: 4, step: 1 },
        examples: [
          {
            original: { x: 3, y: 2 },
            reflectInXAxis: { x: 3, y: -2, ruleSummary: 'y -> -y' },
            reflectInYAxis: { x: -3, y: 2, ruleSummary: 'x -> -x' },
          },
          {
            original: { x: -2, y: 3 },
            reflectInXAxis: { x: -2, y: -3, ruleSummary: 'y -> -y' },
            reflectInYAxis: { x: 2, y: 3, ruleSummary: 'x -> -x' },
          },
          {
            original: { x: 4, y: -1 },
            reflectInXAxis: { x: 4, y: 1, ruleSummary: 'y -> -y' },
            reflectInYAxis: { x: -4, y: -1, ruleSummary: 'x -> -x' },
          },
        ],
        callout:
          'Reflection in the x axis flips the y value. Reflection in the y axis flips the x value. The other coordinate stays the same.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'cs-worked-1',
      title: 'Plot a square across all four quadrants and name it',
      steps: [
        {
          explanation:
            'A shape has vertices A(-3, -2), B(3, -2), C(3, 4) and D(-3, 4). Plot each vertex on a grid that runs from -4 to 5 along both axes.',
        },
        {
          explanation:
            'Find the side lengths. Side AB lies along the line y = -2 and has length 3 - (-3) = 6.',
          maths: 'AB = 6',
        },
        {
          explanation:
            'Side BC lies along the line x = 3 and has length 4 - (-2) = 6.',
          maths: 'BC = 6',
        },
        {
          explanation:
            'Sides CD and DA also have length 6 by the same method.',
          maths: 'CD = DA = 6',
        },
        {
          explanation:
            'All four sides are equal and meet at right angles, so the shape is a square.',
        },
        {
          explanation:
            'The shape spans all four quadrants because A is in Q3, B in Q4, C in Q1 and D in Q2.',
        },
      ],
    },
    {
      id: 'cs-worked-2',
      title: 'Translate triangle PQR by (4, -3)',
      steps: [
        {
          explanation:
            'Triangle PQR has vertices P(-2, 3), Q(0, 3) and R(-2, 5). The translation vector is (4, -3): 4 right and 3 down.',
        },
        {
          explanation:
            'Add 4 to each x value and -3 to each y value, vertex by vertex. Start with P.',
          maths: "P(-2, 3) -> P'(-2 + 4, 3 - 3) = P'(2, 0)",
        },
        {
          explanation:
            'Now Q.',
          maths: "Q(0, 3) -> Q'(0 + 4, 3 - 3) = Q'(4, 0)",
        },
        {
          explanation:
            'Now R.',
          maths: "R(-2, 5) -> R'(-2 + 4, 5 - 3) = R'(2, 2)",
        },
        {
          explanation:
            'Plot the new vertices and join them. The image triangle has the same shape and size as the original, just shifted by (4, -3).',
          maths: "P'Q'R' has vertices (2, 0), (4, 0), (2, 2)",
        },
      ],
    },
  ],
  questions: [
    // Core 1
    {
      id: 'cs-q1',
      type: 'multiple-choice',
      stem: 'In which quadrant does the point (-3, 4) lie?',
      tier: 'core',
      options: ['Q1 (top right)', 'Q2 (top left)', 'Q3 (bottom left)', 'Q4 (bottom right)'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Negative x means left of the y axis. Positive y means above the x axis.',
    },
    // Core 2
    {
      id: 'cs-q2',
      type: 'sketch',
      stem: 'Plot the point (-3, 2) on the grid.',
      tier: 'core',
      gridConfig: { xMin: -5, xMax: 5, yMin: -5, yMax: 5 },
      correctPoints: [[-3, 2]],
      xpValue: 15,
      hint: 'Start at the origin. Move 3 squares left, then 2 squares up.',
    },
    // Core 3
    {
      id: 'cs-q3',
      type: 'multiple-choice',
      stem: 'A point P sits at (4, -1). Reflect P in the x axis. What are the new coordinates?',
      tier: 'core',
      options: ['(-4, -1)', '(-4, 1)', '(4, 1)', '(1, 4)'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'cs-mis-reflect-wrong-axis',
      hint: 'Reflection in the x axis flips the y value. The x value stays the same.',
    },
    // Core 4
    {
      id: 'cs-q4',
      type: 'numeric-entry',
      stem: 'A point Q sits at (-2, 5). Reflect Q in the y axis. What is the x value of the new point?',
      tier: 'core',
      correctAnswer: 2,
      xpValue: 10,
      hint: 'Reflection in the y axis flips the x value. The y value stays the same.',
    },
    // Core 5
    {
      id: 'cs-q5',
      type: 'multiple-choice',
      stem: 'Translate the point (1, 2) by 3 right and 1 down. Where does it end up?',
      tier: 'core',
      options: ['(4, 3)', '(-2, 3)', '(-2, 1)', '(4, 1)'],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'cs-mis-translation-direction-flip',
      hint: 'Add 3 to the x value and -1 to the y value.',
    },
    // Core 6
    {
      id: 'cs-q6',
      type: 'numeric-entry',
      stem: 'A point R sits at (-2, -3). Translate R by 4 right and 0 up. What is the new x value?',
      tier: 'core',
      correctAnswer: 2,
      xpValue: 10,
      hint: 'Add 4 to the x value of (-2, -3). The y value stays the same.',
    },
    // Core 7
    {
      id: 'cs-q7',
      type: 'multiple-choice',
      stem: 'A square has vertices at (-2, -2), (2, -2), (2, 2) and (-2, 2). What is the length of one side?',
      tier: 'core',
      options: ['2', '6', '4', '8'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Pick two corners that share a y value. The gap between their x values is the side length.',
    },
    // Core 8
    {
      id: 'cs-q8',
      type: 'spot-misconception',
      stem: 'Liam reflects the point (3, 2) in the x axis. He writes the new point as (-3, 2). Is his method sound?',
      tier: 'core',
      statements: [
        {
          text: 'Liam is right. Reflection in the x axis flips the x value.',
          isMisconception: true,
        },
        {
          text: 'Actually reflection in the x axis flips the y value, not the x value. So (3, 2) becomes (3, -2).',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cs-mis-reflect-wrong-axis',
    },
    // Confident 1
    {
      id: 'cs-q9',
      type: 'multiple-choice',
      stem: 'A shape has vertices at (-2, -1), (3, -1), (3, 4) and (-2, 4). What kind of shape is it?',
      tier: 'confident',
      options: ['Square', 'Right-angled triangle', 'Parallelogram (not a rectangle)', 'Rectangle'],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'cs-mis-square-vs-rectangle',
      hint: 'Find the lengths of all four sides. A square has four equal sides; a rectangle has two pairs of equal sides.',
    },
    // Confident 2
    {
      id: 'cs-q10',
      type: 'numeric-entry',
      stem: 'A rectangle has vertices A(-3, -2), B(2, -2), C(2, 1) and D(-3, 1). What is the length of side AB?',
      tier: 'confident',
      correctAnswer: 5,
      xpValue: 15,
      hint: 'Side AB lies along y = -2. Subtract the smaller x value from the larger one.',
    },
    // Confident 3
    {
      id: 'cs-q11',
      type: 'multiple-choice',
      stem: 'A triangle has vertices T1(-2, 1), T2(2, 1) and T3(0, 4). Translate the triangle by 3 right and 2 down. Where does T3 end up?',
      tier: 'confident',
      options: ['(3, 6)', '(3, 2)', '(-3, 6)', '(2, 0)'],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'cs-mis-vector-component-swap',
      hint: 'Add 3 to the x value and -2 to the y value of (0, 4). The x component changes the x value, the y component changes the y value.',
    },
    // Confident 4
    {
      id: 'cs-q12',
      type: 'numeric-entry',
      stem: 'A point sits at (4, -3). Translate by -2 right and 5 up. What is the y value of the new point?',
      tier: 'confident',
      correctAnswer: 2,
      xpValue: 15,
      hint: 'Add 5 to the y value of (4, -3).',
    },
    // Confident 5
    {
      id: 'cs-q13',
      type: 'missing-step',
      stem: 'Fill in the missing step. Aisha reflects the point (-2, 3) in the y axis.',
      tier: 'confident',
      steps: [
        'Reflection in the y axis flips the x value of the point and leaves the y value alone.',
        'The point is (-2, 3). The y value 3 stays the same.',
        null,
        "So the reflected point is (2, 3). It sits the same distance from the y axis as (-2, 3), but on the other side.",
      ],
      missingStepIndex: 2,
      correctStep:
        'Flip the sign of the x value: -2 becomes 2.',
      xpValue: 20,
    },
    // Confident 6
    {
      id: 'cs-q14',
      type: 'multiple-choice',
      stem: 'Reflect the triangle with vertices A(1, 2), B(4, 2) and C(4, 5) in the x axis. What are the coordinates of the image of vertex C?',
      tier: 'confident',
      options: ['(-4, 5)', '(-4, -5)', '(4, -5)', '(4, 5)'],
      correctIndex: 2,
      xpValue: 15,
      hint: 'Reflection in the x axis flips only the y value of each vertex.',
    },
    // Confident 7
    {
      id: 'cs-q15',
      type: 'drag-order',
      stem: 'Drag the steps for translating a shape by a column vector into the correct order.',
      tier: 'confident',
      items: [
        'Plot the new vertices and join them in the same order as the original.',
        'Read the column vector to find how many to move along x and along y.',
        'Add the x part of the vector to each x value of the original vertices.',
        'Add the y part of the vector to each y value of the original vertices.',
      ],
      correctOrder: [1, 2, 3, 0],
      xpValue: 20,
      misconceptionId: 'cs-mis-translate-only-one-vertex',
    },
    // Confident 8
    {
      id: 'cs-q17',
      type: 'numeric-entry',
      stem: 'A square has vertices A(-3, -2), B(2, -2), C(2, 3) and D(-3, 3). What is the length of one side of the square?',
      tier: 'confident',
      correctAnswer: 5,
      xpValue: 15,
      hint: 'Pick two corners that share a y value, like A and B. Subtract the smaller x from the larger.',
    },
    // Challenge 1
    {
      id: 'cs-q18',
      type: 'multiple-choice',
      stem: 'A rectangle has three corners at (-1, -2), (4, -2) and (4, 1). Where is the fourth corner?',
      tier: 'challenge',
      options: ['(-1, 1)', '(1, -1)', '(-1, -1)', '(4, -1)'],
      correctIndex: 0,
      xpValue: 25,
      hint: 'A rectangle has two pairs of equal sides. The fourth corner shares its x with one given corner and its y with another.',
    },
    // Challenge 2
    {
      id: 'cs-q19',
      type: 'numeric-entry',
      stem: 'A triangle has vertices at (-2, -1), (2, -1) and (0, 3). The triangle is translated by 5 right and 4 down. What is the y value of the image of the top vertex (0, 3)?',
      tier: 'challenge',
      correctAnswer: -1,
      xpValue: 25,
      hint: 'Add -4 to the y value of the top vertex (0, 3): 3 + (-4) = -1.',
    },
    // Challenge 3
    {
      id: 'cs-q20',
      type: 'multiple-choice',
      stem: 'A square in a Sevenoaks playground has vertices at (-3, -3), (3, -3), (3, 3) and (-3, 3). The square is reflected in the y axis. Which row gives the four image vertices correctly?',
      tier: 'challenge',
      options: [
        '(3, -3), (-3, -3), (-3, 3) and (3, 3)',
        '(-3, 3), (3, 3), (3, -3) and (-3, -3)',
        '(3, 3), (-3, 3), (-3, -3) and (3, -3)',
        '(-3, -3), (3, -3), (3, 3) and (-3, 3)',
      ],
      correctIndex: 0,
      xpValue: 25,
      hint: 'Reflection in the y axis flips the sign of the x value of each vertex. (3, -3) maps to (-3, -3), and so on.',
    },
    // Challenge 4
    {
      id: 'cs-q21',
      type: 'multiple-choice',
      stem: 'A triangle has vertices A(-1, 0), B(2, 0) and C(2, 4). The triangle is translated by 1 left and 3 down, then the resulting triangle is reflected in the x axis. What are the final coordinates of the image of A?',
      tier: 'challenge',
      options: ['(-2, 3)', '(0, 3)', '(-2, -3)', '(2, 3)'],
      correctIndex: 0,
      hint: 'First translation: A(-1, 0) becomes (-2, -3). Then reflect in x axis: y flips sign. (-2, -3) becomes (-2, 3).',
      xpValue: 25,
    },
    // Challenge 5
    {
      id: 'cs-q22',
      type: 'spot-misconception',
      stem: 'A pupil is asked to reflect (4, 3) in the x axis. They write the new point as (-4, -3). Is the reasoning sound?',
      tier: 'challenge',
      statements: [
        {
          text: 'The pupil is correct. Reflecting in the x axis flips both signs.',
          isMisconception: true,
        },
        {
          text: 'In fact reflection in the x axis flips only the y value, giving (4, -3). Flipping both signs would be a 180-degree rotation about the origin, which is a different transformation.',
          isMisconception: false,
        },
      ],
      xpValue: 25,
      misconceptionId: 'cs-mis-reflect-flips-both',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a reflection question where pupils flipped the wrong coordinate when reflecting in the x axis.
    {
      id: 'cs-mis-reflect-wrong-axis',
      description:
        'I think reflection in the x axis flips the x value, and reflection in the y axis flips the y value.',
      triggerAnswer: 'reflect-wrong-axis',
      correction:
        'Actually reflection in the x axis flips the y value. Reflection in the y axis flips the x value. The axis you reflect in stays fixed; the perpendicular value flips.',
      reExplanation:
        'Picture the x axis as a horizontal mirror. Points above it map to points the same distance below. So (3, 2) maps to (3, -2): the x value 3 stays, the y value flips. The y axis is the vertical mirror, so reflecting (3, 2) in it gives (-3, 2): the y stays, the x flips.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a reflection question where pupils flipped both signs of a point reflected in the x axis.
    {
      id: 'cs-mis-reflect-flips-both',
      description:
        'I think reflecting a point in either axis flips the signs of both coordinates.',
      triggerAnswer: 'reflect-flips-both',
      correction:
        'In fact reflection in a single axis flips one coordinate only. Flipping both signs is a 180-degree rotation about the origin, which is a different transformation.',
      reExplanation:
        'For (4, 3) reflected in the x axis, only y flips: image is (4, -3). Reflected in the y axis, only x flips: image is (-4, 3). Flipping both signs to get (-4, -3) would put the image diagonally opposite the origin, which is a 180-degree rotation, not a reflection in either axis.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2022, Paper 01 (Foundation, Non-calculator), commentary on a translation question where pupils confused "down" with "up" when applying a column vector with a negative second component.
    {
      id: 'cs-mis-translation-direction-flip',
      description:
        'I think "3 right and 2 down" means add 3 to x and add 2 to y, missing the sign change for "down".',
      triggerAnswer: 'translation-direction-flip',
      correction:
        'Actually "down" means the y value goes down, so the change in y is negative. Add -2 to the y value, not +2.',
      reExplanation:
        'For (1, 2) translated by 3 right and 2 down, add 3 to the x value: 1 + 3 = 4. The y value goes down by 2, so subtract 2: 2 - 2 = 0. The image is (4, 0). "Right" or "up" adds; "left" or "down" subtracts. Get the sign right before you add.',
    },
    // Source: NCETM Secondary Magazine, Issue 142, "From the Library" article on transformations, citing pupil work that translated only the labelled vertex of a shape and left the others where they were.
    {
      id: 'cs-mis-translate-only-one-vertex',
      description:
        'I translate a shape by moving only one vertex by the column vector and leaving the other vertices where they are.',
      triggerAnswer: 'translate-only-one-vertex',
      correction:
        'In fact a translation moves every vertex by the same column vector. The whole shape slides; nothing stays still.',
      reExplanation:
        'For triangle (1, 2), (4, 2), (4, 5) translated by 2 right and 3 down, every vertex shifts. (1, 2) becomes (3, -1), (4, 2) becomes (6, -1) and (4, 5) becomes (6, 2). The image triangle has the same shape and size as the original; if you only moved one vertex, the new shape would be a different triangle.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 7 Geometry, "Naming Shapes" page; the worked example warning that a quadrilateral with two distinct side lengths is a rectangle, not a square.
    {
      id: 'cs-mis-square-vs-rectangle',
      description:
        'I name any quadrilateral with four right angles a square, even when the side lengths come in two different sizes.',
      triggerAnswer: 'square-vs-rectangle',
      correction:
        'Actually a square has all four sides the same length. A rectangle has two pairs of equal sides; a square is a special kind of rectangle.',
      reExplanation:
        'A shape with vertices (-2, -1), (3, -1), (3, 4), (-2, 4) has horizontal sides of length 5 and vertical sides of length 5. So it is a square. A shape with horizontal sides of length 5 and vertical sides of length 3 is a rectangle, not a square. Always work out the four side lengths before naming the shape.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a translation question where pupils swapped the x and y components of the column vector.
    {
      id: 'cs-mis-vector-component-swap',
      description:
        'I think the column vector (3, -2) means "move 3 up and 2 left" instead of "3 right and 2 down".',
      triggerAnswer: 'vector-component-swap',
      correction:
        'Actually the first number of the vector is the change in x and the second number is the change in y. (3, -2) means add 3 to x and -2 to y.',
      reExplanation:
        'A column vector (a, b) tells you to add a to the x value and b to the y value of every point in the shape. So (3, -2) means 3 right (because positive x is right) and 2 down (because negative y is down). Reading the vector as 3 up and 2 left would be applying it to the wrong axis pair.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 9 "Graphs" by Kerslake, on pupils joining vertices in the wrong order when plotting a shape, leading to a self-crossing figure rather than a simple polygon.
    {
      id: 'cs-mis-vertex-order-self-crossing',
      description:
        'When I plot a shape from a list of vertices, I join them in the order they appear on the page rather than in the order around the perimeter, so the lines cross.',
      triggerAnswer: 'vertex-order-self-crossing',
      correction:
        'In fact you join the vertices in order around the perimeter (clockwise or anticlockwise), not in the order they happen to be listed.',
      reExplanation:
        'For a square with vertices listed as A(-2, -2), B(2, 2), C(2, -2), D(-2, 2), joining them in the listed order ABCD gives a bow-tie shape with crossing diagonals. Plot all four points first, then trace the perimeter: ACBD goes anticlockwise around a true square. Always pick an order that lets you walk the perimeter without lifting your pencil or crossing your path.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const coordinatesShapesZoneNodes = [coordinatesShapes]
