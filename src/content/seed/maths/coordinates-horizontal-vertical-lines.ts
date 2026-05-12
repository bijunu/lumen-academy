import type { SkillNode } from '@/types/content'

export const coordinatesHorizontalVerticalLines: SkillNode = {
  id: 'maths-coordinates-horizontal-vertical-lines',
  title: 'Equations of Horizontal and Vertical Lines',
  description:
    'Recognise that every horizontal line has equation y = a (where a is the fixed y value of all points on the line) and every vertical line has equation x = b. Read these equations off a grid, write the equation given a point the line passes through, and identify the y axis as x = 0 and the x axis as y = 0.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-coordinates',
  zoneName: 'Coordinates',
  tier: 'confident',
  prerequisites: ['maths-coordinates-grid'],
  curriculum: {
    ks3Objective:
      'Recognise and identify equations of horizontal and vertical lines (y = a, x = b) and the axes (x = 0, y = 0).',
    awardingBodies: {
      aqa: 'A9 Identify equations of horizontal and vertical lines (GCSE Mathematics 8300)',
      edexcel: 'A9 Identify equations of horizontal and vertical lines (GCSE Mathematics 1MA1)',
      ocr: '7.02c Recognise equations x = a and y = b (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'chvl-scene-grid-of-lines',
      title: 'Horizontal and Vertical Lines on a Grid',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to reveal the equation of the line and the value that stays constant along it.',
      data: {
        viewBox: '0 0 600 400',
        svg: `<g stroke="#cbd5e1" stroke-width="1">
  <line x1="60" y1="40" x2="60" y2="360" />
  <line x1="120" y1="40" x2="120" y2="360" />
  <line x1="180" y1="40" x2="180" y2="360" />
  <line x1="240" y1="40" x2="240" y2="360" />
  <line x1="300" y1="40" x2="300" y2="360" />
  <line x1="360" y1="40" x2="360" y2="360" />
  <line x1="420" y1="40" x2="420" y2="360" />
  <line x1="480" y1="40" x2="480" y2="360" />
  <line x1="540" y1="40" x2="540" y2="360" />
  <line x1="60" y1="40" x2="540" y2="40" />
  <line x1="60" y1="80" x2="540" y2="80" />
  <line x1="60" y1="120" x2="540" y2="120" />
  <line x1="60" y1="160" x2="540" y2="160" />
  <line x1="60" y1="200" x2="540" y2="200" />
  <line x1="60" y1="240" x2="540" y2="240" />
  <line x1="60" y1="280" x2="540" y2="280" />
  <line x1="60" y1="320" x2="540" y2="320" />
  <line x1="60" y1="360" x2="540" y2="360" />
</g>
<g stroke="#475569" stroke-width="2">
  <line x1="60" y1="200" x2="540" y2="200" />
  <line x1="300" y1="40" x2="300" y2="360" />
</g>
<g stroke="#dc2626" stroke-width="3">
  <line x1="60" y1="80" x2="540" y2="80" />
</g>
<g stroke="#2563eb" stroke-width="3">
  <line x1="180" y1="40" x2="180" y2="360" />
</g>
<g font-family="ui-sans-serif, system-ui" font-size="14" fill="#475569">
  <text x="546" y="204">x</text>
  <text x="296" y="32">y</text>
  <text x="290" y="216">0</text>
  <text x="546" y="84" fill="#dc2626">y = 3</text>
  <text x="186" y="34" fill="#2563eb">x = -2</text>
</g>`,
        hotspots: [
          {
            id: 'chvl-hs-horizontal',
            x: 75,
            y: 20,
            label: 'y = 3',
            description:
              'A horizontal line. Every point on it has y value 3, no matter what x is. So the equation is y = 3.',
          },
          {
            id: 'chvl-hs-vertical',
            x: 30,
            y: 12,
            label: 'x = -2',
            description:
              'A vertical line. Every point on it has x value -2, no matter what y is. So the equation is x = -2.',
          },
          {
            id: 'chvl-hs-x-axis',
            x: 85,
            y: 52,
            label: 'x axis is y = 0',
            description:
              'The x axis is a horizontal line. Every point on it has y value 0, so its equation is y = 0.',
          },
          {
            id: 'chvl-hs-y-axis',
            x: 52,
            y: 10,
            label: 'y axis is x = 0',
            description:
              'The y axis is a vertical line. Every point on it has x value 0, so its equation is x = 0.',
          },
        ],
      },
    },
    {
      id: 'chvl-scene-letter-is-constant',
      title: 'The Letter Tells You What Stays Constant',
      type: 'diagram',
      instructions:
        'Read the rule once and apply it to the two example lines: the letter on the left of the equation names the coordinate that never changes along the line.',
      data: {
        rule:
          'For any line parallel to an axis, the equation has the form letter = number. The letter names the coordinate that stays the same for every point on the line. The number is that fixed value.',
        examples: [
          {
            label: 'A horizontal line through (1, 4), (5, 4), (-2, 4)',
            constantLetter: 'y',
            constantValue: 4,
            equation: 'y = 4',
            note: 'Each point has y = 4. The x value changes; the y value is fixed.',
          },
          {
            label: 'A vertical line through (3, 1) and (3, 7)',
            constantLetter: 'x',
            constantValue: 3,
            equation: 'x = 3',
            note: 'Each point has x = 3. The y value changes; the x value is fixed.',
          },
        ],
        sanityCheck:
          'A horizontal line runs left to right, so the y value cannot change along it. That means the equation must fix y. A vertical line runs up and down, so the x value cannot change. That means the equation must fix x. If you find yourself writing x = 4 for a line that runs left to right, swap the letter.',
      },
    },
    {
      id: 'chvl-scene-axes-as-equations',
      title: 'The Two Axes Have Equations Too',
      type: 'diagram',
      instructions:
        'Read across the table to see why the x axis is the line y = 0 and the y axis is the line x = 0.',
      data: {
        rows: [
          {
            axis: 'x axis',
            points: '(-3, 0), (0, 0), (2, 0), (5, 0)',
            constant: 'y is always 0',
            equation: 'y = 0',
          },
          {
            axis: 'y axis',
            points: '(0, -3), (0, 0), (0, 2), (0, 5)',
            constant: 'x is always 0',
            equation: 'x = 0',
          },
        ],
        callout:
          'It feels strange that the x axis has equation y = 0 and the y axis has equation x = 0. The trick is to ask which coordinate is fixed. On the x axis, every point sits on the floor at height 0, so y = 0. On the y axis, every point sits on the centre line where x = 0.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'chvl-worked-1',
      title: 'Write the equation of a horizontal line from three points',
      steps: [
        {
          explanation:
            'A line passes through (1, 4), (5, 4) and (-2, 4). Plot the three points on a grid to check they all lie on one line.',
        },
        {
          explanation:
            'Compare the coordinates. The x values are 1, 5 and -2, all different. The y values are 4, 4 and 4, all the same.',
          maths: 'x values: 1, 5, -2. y values: 4, 4, 4.',
        },
        {
          explanation:
            'Because the y value is the same for every point, the line is horizontal. The fixed value is 4.',
        },
        {
          explanation:
            'The equation has the form y = (fixed value), so the equation is y = 4.',
          maths: 'y = 4',
        },
        {
          explanation:
            'Sanity check: any point with y = 4, such as (0, 4) or (100, 4), should sit on this line. Both do, so the equation is right.',
        },
      ],
    },
    {
      id: 'chvl-worked-2',
      title: 'Write the equation of a vertical line and check it',
      steps: [
        {
          explanation:
            'A line passes through the two points (3, 1) and (3, 7). Plot the points on a grid.',
        },
        {
          explanation:
            'Compare the coordinates. The y values are 1 and 7, which are different. The x values are both 3.',
          maths: 'x values: 3, 3. y values: 1, 7.',
        },
        {
          explanation:
            'Because the x value is the same for both points, the line is vertical. The fixed value is 3.',
        },
        {
          explanation:
            'The equation has the form x = (fixed value).',
        },
        {
          explanation:
            'Test the answer by trying another point with x = 3, such as (3, 0). It should sit on the same vertical line. It does.',
          maths: 'x = 3',
        },
      ],
    },
  ],
  questions: [
    // Core 1
    {
      id: 'chvl-q1',
      type: 'multiple-choice',
      stem: 'A line passes through (2, 5), (4, 5) and (-1, 5). What is its equation?',
      tier: 'core',
      options: ['y = 5', 'x = 5', 'y = 2', 'x + y = 5'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'chvl-mis-letter-swap',
      hint: 'Which coordinate is the same for every point? That coordinate sits on the left of the equation.',
    },
    // Core 2
    {
      id: 'chvl-q2',
      type: 'multiple-choice',
      stem: 'A line passes through (-3, 0), (-3, 2) and (-3, -4). What is its equation?',
      tier: 'core',
      options: ['y = -3', 'x = -3', 'x = 0', 'y = 0'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'chvl-mis-letter-swap',
      hint: 'The x value of every point is -3. The y value changes.',
    },
    // Core 3
    {
      id: 'chvl-q3',
      type: 'numeric-entry',
      stem: 'A horizontal line passes through the point (7, -2). What is the value of a in its equation y = a?',
      tier: 'core',
      correctAnswer: -2,
      xpValue: 10,
      hint: 'A horizontal line has fixed y value. Read the y coordinate of the given point.',
    },
    // Core 4
    {
      id: 'chvl-q4',
      type: 'multiple-choice',
      stem: 'Which of these is the equation of the x axis?',
      tier: 'core',
      options: ['x = 0', 'y = 0', 'x = y', 'y = x'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'chvl-mis-axis-equations-confused',
      hint: 'Every point on the x axis has y value 0. The x value varies along the axis.',
    },
    // Core 5
    {
      id: 'chvl-q5',
      type: 'numeric-entry',
      stem: 'A vertical line passes through the point (6, 3). What is the value of b in its equation x = b?',
      tier: 'core',
      correctAnswer: 6,
      xpValue: 10,
      hint: 'A vertical line has fixed x value. Read the x coordinate of the given point.',
    },
    // Core 6
    {
      id: 'chvl-q6',
      type: 'sketch',
      stem: 'Plot the point (4, 0), which lies on the line y = 0 (the x axis), on the grid.',
      tier: 'core',
      gridConfig: { xMin: -5, xMax: 5, yMin: -5, yMax: 5 },
      correctPoints: [[4, 0]],
      xpValue: 15,
      hint: 'Start at the origin. Move 4 squares right and stay on the x axis (y = 0).',
    },
    // Core 7
    {
      id: 'chvl-q7',
      type: 'multiple-choice',
      stem: 'Which line is horizontal?',
      tier: 'core',
      options: ['x = 4', 'x = -1', 'y = 2', 'x = 0'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'chvl-mis-orientation-swap',
      hint: 'A horizontal line runs left to right, so the y value is fixed. The equation starts with y =.',
    },
    // Confident 1
    {
      id: 'chvl-q8',
      type: 'multiple-choice',
      stem: 'A school map grid shows a corridor running straight from west to east. Two display boards on the corridor are at (1, 6) and (9, 6). What is the equation of the corridor?',
      tier: 'confident',
      options: ['x = 6', 'y = 6', 'y = 1', 'x + y = 6'],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'chvl-mis-letter-swap',
      hint: 'Both boards share the same y coordinate. A horizontal line has equation y = (fixed value).',
    },
    // Confident 2
    {
      id: 'chvl-q9',
      type: 'multiple-choice',
      stem: 'Which equation describes the y axis?',
      tier: 'confident',
      options: ['y = 0', 'y = x', 'There is no equation for an axis.', 'x = 0'],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'chvl-mis-axis-equations-confused',
      hint: 'Every point on the y axis has x value 0. The y value varies.',
    },
    // Confident 3
    {
      id: 'chvl-q10',
      type: 'numeric-entry',
      stem: 'A vertical line passes through (-4, 1) and (-4, 8). What is the value of b in its equation x = b?',
      tier: 'confident',
      correctAnswer: -4,
      xpValue: 15,
      misconceptionId: 'chvl-mis-positive-constants-only',
      hint: 'A vertical line has fixed x value. The shared x coordinate is -4, and negative constants are allowed.',
    },
    // Confident 4
    {
      id: 'chvl-q11',
      type: 'numeric-entry',
      stem: 'In a classroom seating chart, three pupils sit at desks with coordinates (2, 3), (5, 3) and (8, 3). The teacher draws the line that runs along this row. What is the value of a in its equation y = a?',
      tier: 'confident',
      correctAnswer: 3,
      xpValue: 15,
      hint: 'All three desks share the same y coordinate. That shared y value is a.',
    },
    // Confident 5
    {
      id: 'chvl-q12',
      type: 'spot-misconception',
      stem: 'Priya is asked for the equation of the line through (1, 4), (5, 4) and (-2, 4). She writes x = 4.',
      tier: 'confident',
      statements: [
        {
          text: 'Priya is right. The fixed value is 4, so the equation is x = 4.',
          isMisconception: true,
        },
        {
          text: 'Actually the y values are all 4 while the x values change, so the line is horizontal and the equation is y = 4.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'chvl-mis-letter-swap',
    },
    // Confident 6
    {
      id: 'chvl-q13',
      type: 'drag-order',
      stem: 'Drag the steps for writing the equation of a horizontal or vertical line into the correct order.',
      tier: 'confident',
      items: [
        'Write the equation in the form letter = number.',
        'List the x values and the y values of the given points.',
        'Decide which set is identical: the x values or the y values.',
        'Use the letter for the identical set on the left, and the shared value on the right.',
      ],
      correctOrder: [1, 2, 3, 0],
      xpValue: 20,
      misconceptionId: 'chvl-mis-two-points-non-axis-aligned',
    },
    // Confident 7
    {
      id: 'chvl-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step. A line passes through (2, -5) and (2, 1). Find its equation.',
      tier: 'confident',
      steps: [
        'List the coordinates. The x values are 2 and 2. The y values are -5 and 1.',
        'Compare the two sets. The x values are the same; the y values are different.',
        null,
        'So the equation is x = 2.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Because the x value is constant, the line is vertical. Its equation has the form x = (the shared x value), which is 2.',
      xpValue: 20,
    },
    // Confident 8
    {
      id: 'chvl-q15',
      type: 'multiple-choice',
      stem: 'A point sits on the line y = -3. Which of these points could it be?',
      tier: 'confident',
      options: ['(0, -3)', '(-3, 0)', '(-3, -3) only', '(3, 3)'],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'chvl-mis-line-is-a-point',
      hint: 'The line y = -3 contains every point with y value -3, no matter what x is.',
    },
    // Challenge 1
    {
      id: 'chvl-q16',
      type: 'numeric-entry',
      stem: 'The line x = 7 and the line y = -2 cross at a single point on a grid. What is the x value of that point?',
      tier: 'challenge',
      correctAnswer: 7,
      xpValue: 25,
      hint: 'On the line x = 7, every point has x value 7. On y = -2, every point has y value -2. The crossing point must satisfy both.',
    },
    // Challenge 2
    {
      id: 'chvl-q17',
      type: 'numeric-entry',
      stem: 'A rectangle in a Manchester park map has its four sides on the lines x = 1, x = 6, y = 2 and y = 5. What is the length of the longer side of the rectangle?',
      tier: 'challenge',
      correctAnswer: 5,
      xpValue: 25,
      hint: 'The horizontal sides run between x = 1 and x = 6 (length 5). The vertical sides run between y = 2 and y = 5 (length 3). Pick the larger.',
    },
    // Challenge 3
    {
      id: 'chvl-q18',
      type: 'multiple-choice',
      stem: 'A horizontal line passes through (-4, 6). A vertical line passes through (3, -1). Where do the two lines cross?',
      tier: 'challenge',
      options: ['(-4, -1)', '(6, 3)', '(3, 6)', '(-1, -4)'],
      correctIndex: 2,
      xpValue: 25,
      hint: 'The horizontal line has equation y = 6 (the fixed y of (-4, 6)). The vertical line has equation x = 3 (the fixed x of (3, -1)). The crossing has x = 3 and y = 6.',
    },
    // Challenge 4
    {
      id: 'chvl-q19',
      type: 'numeric-entry',
      stem: 'A right-angled triangle has vertices A(-2, 1), B(5, 1) and C(5, 4). Side AB lies on a horizontal line. What is the value of a in the equation y = a of side AB?',
      tier: 'challenge',
      correctAnswer: 1,
      xpValue: 25,
      hint: 'Side AB joins A(-2, 1) to B(5, 1). The two ends share a y value of 1, so the line through them is y = 1.',
    },
    // Challenge 5
    {
      id: 'chvl-q20',
      type: 'spot-misconception',
      stem: 'A line passes through (1, 4) and (5, 6). Tom writes its equation as y = 5 because the average of 4 and 6 is 5.',
      tier: 'challenge',
      statements: [
        {
          text: 'Tom is right. Averaging the y values gives the equation of the line.',
          isMisconception: true,
        },
        {
          text: 'In fact (1, 4) and (5, 6) have different x values and different y values, so the line through them is not parallel to either axis. It cannot be written as y = a or x = b.',
          isMisconception: false,
        },
      ],
      xpValue: 25,
      misconceptionId: 'chvl-mis-two-points-non-axis-aligned',
    },
    // Challenge 6
    {
      id: 'chvl-q21',
      type: 'sketch',
      stem: 'On the grid, plot the point where the line x = -3 crosses the line y = 2.',
      tier: 'challenge',
      gridConfig: { xMin: -5, xMax: 5, yMin: -5, yMax: 5 },
      correctPoints: [[-3, 2]],
      xpValue: 25,
      hint: 'A point on x = -3 has x value -3. A point on y = 2 has y value 2. The crossing point is (-3, 2).',
    },
  ],
  misconceptions: [
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 9 "Graphs" by Kerslake, on pupils swapping the variable when writing the equation of a horizontal or vertical line (writing x = 4 for a line where every y value is 4).
    {
      id: 'chvl-mis-letter-swap',
      description:
        'I think a horizontal line has equation x = (number) and a vertical line has equation y = (number) because the line "points along" that letter.',
      triggerAnswer: 'letter-swap',
      correction:
        'Actually the letter on the left of the equation names the coordinate that stays the same along the line, not the direction the line runs.',
      reExplanation:
        'For the line through (1, 4), (5, 4) and (-2, 4), the y value is 4 for every point and the x value changes. The equation is y = 4. A horizontal line fixes y; a vertical line fixes x. Ask "which coordinate is the same?" before you write the equation.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on Q9 (lines parallel to the axes), where many candidates labelled the x axis as x = 0 and the y axis as y = 0.
    {
      id: 'chvl-mis-axis-equations-confused',
      description:
        'I think the x axis has equation x = 0 and the y axis has equation y = 0, matching the letter of the axis to the letter on the left.',
      triggerAnswer: 'axis-equations-confused',
      correction:
        'Actually the x axis is the horizontal line y = 0 (every point on it has y = 0), and the y axis is the vertical line x = 0 (every point on it has x = 0).',
      reExplanation:
        'Every point on the x axis has the form (x, 0): the y value is 0. So the equation is y = 0. Every point on the y axis has the form (0, y): the x value is 0. So the equation is x = 0. The letter on the left names the coordinate that is fixed at 0, not the name of the axis itself.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a coordinate geometry question where pupils refused to write an equation with a negative constant on the right, defaulting to a positive value.
    {
      id: 'chvl-mis-positive-constants-only',
      description:
        'I think the equation of a horizontal or vertical line can only have a positive number on the right.',
      triggerAnswer: 'positive-constants-only',
      correction:
        'In fact the constant on the right can be any number, positive, negative or zero, because it is just the fixed coordinate value of every point on the line.',
      reExplanation:
        'The line through (-4, 1) and (-4, 8) has x = -4 at every point, so its equation is x = -4. A negative constant is fine; it just means the line sits to the left of the y axis. The same is true for y = -2 or x = 0; the sign and size of the constant follow the position of the line.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 01 (Foundation, Non-calculator), commentary on candidates who labelled a clearly horizontal line as "x = something" by reading the direction of the line rather than the constant coordinate.
    {
      id: 'chvl-mis-orientation-swap',
      description:
        'I match the equation x = (number) to a line that runs left to right because the x axis runs left to right.',
      triggerAnswer: 'orientation-swap',
      correction:
        'Actually a line of the form x = (number) is vertical, not horizontal. A horizontal line is y = (number).',
      reExplanation:
        'Picture the line x = 4. Every point on it must have x value 4. So (4, 0), (4, 1), (4, -3) and (4, 100) are all on it. Joining these gives a vertical line. The letter on the left names the coordinate that does not change along the line, so x = 4 is vertical and y = 4 is horizontal.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a question where pupils were given two points with different x and y values and forced an equation of the form y = a or x = b, missing that the line was neither horizontal nor vertical.
    {
      id: 'chvl-mis-two-points-non-axis-aligned',
      description:
        'I think any line through two given points can be written as y = (number) or x = (number).',
      triggerAnswer: 'two-points-non-axis-aligned',
      correction:
        'In fact only lines parallel to an axis can be written as y = a or x = b. If the two points have different x values and different y values, the line tilts and needs a different form.',
      reExplanation:
        'The points (1, 4) and (5, 6) have x values 1 and 5 (different) and y values 4 and 6 (different). No single x or y value is shared, so the line through them is not parallel to either axis. Equations like y = a or x = b only work when one coordinate is the same for every point on the line.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 8 Graphs, "Horizontal and Vertical Lines" page; the worked-example "common mistake" callout warning that y = 4 names a whole line, not the single point (0, 4) on the y axis.
    {
      id: 'chvl-mis-line-is-a-point',
      description:
        'I read y = 4 as a single point on the y axis, not as a horizontal line through every point with y value 4.',
      triggerAnswer: 'line-is-a-point',
      correction:
        'Actually y = 4 names the whole horizontal line. Every point with y value 4, such as (0, 4), (3, 4) and (-7, 4), sits on the line.',
      reExplanation:
        'An equation in two variables describes a set of points, not just one. y = 4 places no condition on x, so x can be any number while y stays at 4. That gives the infinite collection of points (..., -2, 4), (-1, 4), (0, 4), (1, 4), (2, 4), ... which joined together form a horizontal line.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const coordinatesHorizontalVerticalLinesZoneNodes = [
  coordinatesHorizontalVerticalLines,
]
