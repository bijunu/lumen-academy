import type { SkillNode } from '@/types/content'

export const coordinatesGrid: SkillNode = {
  id: 'maths-coordinates-grid',
  title: 'Coordinates on a Grid',
  description:
    'Read and write coordinates as ordered pairs (x, y), starting in the first quadrant and extending to all four quadrants. Plot points from given coordinates, read off the coordinates of marked points, and recognise that the x value is always named first and the y value second.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-coordinates',
  zoneName: 'Coordinates',
  tier: 'core',
  prerequisites: [],
  curriculum: {
    ks3Objective: 'Work with coordinates in all four quadrants.',
    awardingBodies: {
      aqa: 'G11 Coordinates in all four quadrants',
      edexcel: 'A8 Work with coordinates in all four quadrants',
      ocr: '7.02a Coordinates in all four quadrants',
    },
  },
  scenes: [
    {
      id: 'coord-scene-first-quadrant',
      title: 'The First Quadrant Grid',
      type: 'diagram',
      instructions:
        'Read each marked point as an (x, y) pair, with x measured along the bottom and y measured up the side. The origin sits at (0, 0), point B at (3, 0) lies on the x axis, and point C at (0, 4) lies on the y axis. Always count from the origin and write x first.',
      data: {
        gridConfig: { xMin: 0, xMax: 6, yMin: 0, yMax: 6, step: 1 },
        markedPoints: [
          { label: 'A', x: 0, y: 0, note: 'The origin. Both x and y are zero.' },
          { label: 'B', x: 3, y: 0, note: '3 across, 0 up. On the x axis.' },
          { label: 'C', x: 0, y: 4, note: '0 across, 4 up. On the y axis.' },
          { label: 'D', x: 2, y: 5, note: '2 across, 5 up.' },
          { label: 'E', x: 5, y: 3, note: '5 across, 3 up.' },
        ],
        callout:
          'Read the x value first, then the y value. Always count from the origin (0, 0). The two numbers are written in brackets, separated by a comma.',
      },
    },
    {
      id: 'coord-scene-slider-plotter',
      title: 'Plot a Point with Sliders',
      type: 'simulation',
      instructions:
        'See how the marker sits on the grid as the x and y values change. A negative x value places the marker left of the y axis, and a negative y value places it below the x axis. The point (3, 2) sits in the top-right quadrant, while (-3, -1) sits in the bottom-left.',
      data: {
        gridConfig: { xMin: -5, xMax: 5, yMin: -5, yMax: 5, step: 1 },
        sliders: [
          { axis: 'x', min: -5, max: 5, step: 1, default: 0 },
          { axis: 'y', min: -5, max: 5, step: 1, default: 0 },
        ],
        readouts: ['coordinatePair', 'quadrantName'],
        targetPositions: [
          { label: 'Reach (3, 2)', x: 3, y: 2 },
          { label: 'Reach (-2, 4)', x: -2, y: 4 },
          { label: 'Reach (-3, -1)', x: -3, y: -1 },
          { label: 'Reach (4, -2)', x: 4, y: -2 },
        ],
        callout:
          'A negative x value moves the marker left of the y axis. A negative y value moves it below the x axis. The origin (0, 0) is where both axes meet.',
      },
    },
    {
      id: 'coord-scene-four-quadrants',
      title: 'The Four Quadrants',
      type: 'diagram',
      instructions:
        'Look at how the four quadrants are arranged around the origin. Quadrant 1 sits top right with both x and y positive, then the numbering goes anticlockwise: Quadrant 2 top left, Quadrant 3 bottom left, Quadrant 4 bottom right. The signs of x and y flip as you cross each axis.',
      data: {
        gridConfig: { xMin: -5, xMax: 5, yMin: -5, yMax: 5, step: 1 },
        quadrants: [
          { id: 'Q1', label: 'Quadrant 1', xSign: '+', ySign: '+', sample: [3, 2] },
          { id: 'Q2', label: 'Quadrant 2', xSign: '-', ySign: '+', sample: [-3, 2] },
          { id: 'Q3', label: 'Quadrant 3', xSign: '-', ySign: '-', sample: [-3, -2] },
          { id: 'Q4', label: 'Quadrant 4', xSign: '+', ySign: '-', sample: [3, -2] },
        ],
        markedPoints: [
          { label: 'P', x: -3, y: 2, quadrant: 'Q2' },
          { label: 'Q', x: 4, y: -1, quadrant: 'Q4' },
          { label: 'R', x: -2, y: -4, quadrant: 'Q3' },
          { label: 'S', x: 2, y: 3, quadrant: 'Q1' },
        ],
        callout:
          'Quadrants are numbered anticlockwise starting from the top right. The signs of x and y change as you move from one quadrant to the next.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'coord-worked-1',
      title: 'Read the coordinates of point P',
      steps: [
        {
          explanation:
            'A grid has two axes. The x axis runs left to right along the bottom, and the y axis runs up and down on the left.',
        },
        {
          explanation:
            'Start at the origin (0, 0), where the two axes cross. Count across to the right to find the x value of point P.',
          maths: 'x = 4',
        },
        {
          explanation:
            'From the same origin, count up to find the y value of point P.',
          maths: 'y = 3',
        },
        {
          explanation:
            'Write the pair in brackets, x first and y second, separated by a comma.',
          maths: 'P = (4, 3)',
        },
        {
          explanation: 'So point P is at (4, 3). The order of the two numbers matters.',
        },
      ],
    },
    {
      id: 'coord-worked-2',
      title: 'Plot the point (-2, 3) on a four quadrant grid',
      steps: [
        {
          explanation:
            'The first number is the x value. Negative means left of the y axis.',
          maths: 'x = -2, so move 2 to the left of the origin.',
        },
        {
          explanation:
            'The second number is the y value. Positive means above the x axis.',
          maths: 'y = 3, so move 3 up from the x axis.',
        },
        {
          explanation:
            'Mark the point where the two movements meet, with a small cross or a clear dot.',
        },
        {
          explanation:
            'Check the quadrant. Negative x and positive y put the point in quadrant 2, the top left region.',
        },
        {
          explanation:
            'Label the point clearly. (-2, 3) sits 2 squares left of the y axis and 3 squares above the x axis.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'coord-q1',
      type: 'multiple-choice',
      stem: 'What are the coordinates of the origin?',
      tier: 'core',
      options: ['(0, 0)', '(1, 1)', '(1, 0)', '(0, 1)'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'coord-mis-origin-wrong',
    },
    {
      id: 'coord-q2',
      type: 'numeric-entry',
      stem: 'A point has coordinates (3, 5). What is its x value?',
      tier: 'core',
      correctAnswer: 3,
      xpValue: 10,
      hint: 'The x value is always written first inside the brackets.',
    },
    {
      id: 'coord-q3',
      type: 'sketch',
      stem: 'Plot the point (4, 3) on the grid.',
      tier: 'core',
      gridConfig: { xMin: 0, xMax: 6, yMin: 0, yMax: 6 },
      correctPoints: [[4, 3]],
      xpValue: 15,
      hint: 'Start at the origin. Move 4 to the right, then 3 up.',
    },
    {
      id: 'coord-q4',
      type: 'multiple-choice',
      stem: 'A point sits 3 squares to the right of the y axis and 2 squares above the x axis. What are its coordinates?',
      tier: 'core',
      options: ['(2, 3)', '(3, 3)', '(3, 2)', '(2, 2)'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'coord-mis-swap-xy',
    },
    {
      id: 'coord-q5',
      type: 'numeric-entry',
      stem: 'A point has coordinates (4, 7). What is its y value?',
      tier: 'core',
      correctAnswer: 7,
      xpValue: 10,
      hint: 'The y value is the second number in the pair.',
    },
    {
      id: 'coord-q6',
      type: 'spot-misconception',
      stem: 'Liam is reading a point on a grid. He says, "I count up first, then across, so (3, 5) means 3 up and 5 across." Is his method sound?',
      tier: 'core',
      statements: [
        {
          text: 'Liam is right. The order of the two numbers does not matter on a grid.',
          isMisconception: true,
        },
        {
          text: 'Actually you must count across first (the x value), then up (the y value). So (3, 5) means 3 across and 5 up.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'coord-mis-swap-xy',
    },
    {
      id: 'coord-q7',
      type: 'drag-order',
      stem: 'Drag these points into order from smallest to largest x value.',
      tier: 'core',
      items: ['(4, 1)', '(0, 2)', '(2, 6)', '(5, 3)'],
      correctOrder: [1, 2, 0, 3],
      xpValue: 15,
      hint: 'The x value is the first number in each pair.',
    },
    {
      id: 'coord-q8',
      type: 'numeric-entry',
      stem: 'What is the y value of the origin?',
      tier: 'core',
      correctAnswer: 0,
      xpValue: 10,
      hint: 'The origin sits where the two axes meet. Both values are the same number.',
    },
    {
      id: 'coord-q9',
      type: 'multiple-choice',
      stem: 'Which set of coordinates names a point that is 2 squares to the left of the y axis and 3 squares above the x axis?',
      tier: 'confident',
      options: ['(2, 3)', '(-2, 3)', '(2, -3)', '(-3, 2)'],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'coord-mis-negative-direction',
    },
    {
      id: 'coord-q10',
      type: 'numeric-entry',
      stem: 'A point has coordinates (-2, 5). What is its y value?',
      tier: 'confident',
      correctAnswer: 5,
      xpValue: 15,
      hint: 'The minus sign sits with the x value. The y value is the second number.',
    },
    {
      id: 'coord-q11',
      type: 'multiple-choice',
      stem: 'Which of these is NOT a correct way to write the coordinates of a point that is 3 across and 5 up?',
      tier: 'confident',
      options: ['(3, 5)', '(x = 3, y = 5)', 'x = 3 and y = 5', '(3.5)'],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'coord-mis-comma-decimal',
    },
    {
      id: 'coord-q12',
      type: 'missing-step',
      stem: 'Fill in the missing step. Aisha is plotting the point (-3, 2) on a four quadrant grid.',
      tier: 'confident',
      steps: [
        'Start at the origin (0, 0), where the x and y axes meet.',
        'The x value is -3, so move 3 squares to the left of the origin along the x axis.',
        null,
        'Mark the point with a small cross. (-3, 2) sits in quadrant 2.',
      ],
      missingStepIndex: 2,
      correctStep:
        'The y value is 2, so move 2 squares up from the point on the x axis.',
      xpValue: 20,
    },
    {
      id: 'coord-q13',
      type: 'multiple-choice',
      stem: 'In which quadrant does the point (-3, 4) lie?',
      tier: 'confident',
      options: ['Quadrant 1 (top right)', 'Quadrant 2 (top left)', 'Quadrant 3 (bottom left)', 'Quadrant 4 (bottom right)'],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'coord-mis-quadrant-2-defaults-positive',
    },
    {
      id: 'coord-q14',
      type: 'numeric-entry',
      stem: 'A point P sits directly above the point (4, 0), and is 6 squares above the x axis. What is the y value of point P?',
      tier: 'confident',
      correctAnswer: 6,
      xpValue: 15,
      hint: 'Point P shares the x value of (4, 0). Count from the origin (0, 0), not from 1.',
      misconceptionId: 'coord-mis-origin-as-one',
    },
    {
      id: 'coord-q15',
      type: 'spot-misconception',
      stem: 'Maya wants to plot (-2, 3). She says, "Negative just means I count from the right hand end, so I go 2 squares to the right of the y axis." Is her method sound?',
      tier: 'confident',
      statements: [
        {
          text: 'Maya is correct. The minus sign tells you to count from the far right.',
          isMisconception: true,
        },
        {
          text: 'In fact a negative x value tells you to move to the left of the y axis. So (-2, 3) is 2 squares to the left of the origin and 3 squares up.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'coord-mis-negative-direction',
    },
    {
      id: 'coord-q16',
      type: 'free-text',
      stem: 'Describe, step by step, how you would plot the point (-2, 4) on a four quadrant grid.',
      tier: 'confident',
      sampleAnswer:
        'Start at the origin (0, 0). The x value is -2, so move 2 squares to the left along the x axis. The y value is 4, so from there move 4 squares up. Mark the point with a small cross. The point sits in quadrant 2, in the top left region.',
      keywords: ['origin', 'left', 'up', 'x', 'y', 'quadrant'],
      xpValue: 20,
    },
    {
      id: 'coord-q17',
      type: 'multiple-choice',
      stem: 'A grid has axes labelled in steps of 2: 0, 2, 4, 6, 8 along the x axis and 0, 2, 4, 6, 8 up the y axis. A point sits at the third gridline along the x axis and the second gridline up the y axis. What are its coordinates?',
      tier: 'challenge',
      options: ['(3, 2)', '(2, 3)', '(6, 4)', '(4, 6)'],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'coord-mis-axis-labels-vs-squares',
    },
    {
      id: 'coord-q18',
      type: 'multiple-choice',
      stem: 'Three corners of a rectangle are at (1, 2), (5, 2) and (5, 6). The fourth corner completes the rectangle. What are its coordinates?',
      tier: 'challenge',
      options: ['(1, 6)', '(6, 1)', '(1, 5)', '(5, 1)'],
      correctIndex: 0,
      xpValue: 25,
      hint: 'A rectangle has two pairs of equal sides. The fourth corner shares its x value with one corner and its y value with another.',
    },
    {
      id: 'coord-q19',
      type: 'numeric-entry',
      stem: 'Two opposite corners of a square are at (-1, -1) and (3, 3). What is the y value of the corner that sits in the bottom right of the square?',
      tier: 'challenge',
      correctAnswer: -1,
      xpValue: 25,
      hint: 'The four corners of a square share their x and y values in pairs. The bottom right corner has the larger x and the smaller y.',
    },
    {
      id: 'coord-q20',
      type: 'slider-explore',
      stem: 'Slide the marker along the x axis until it sits on the point with x value -3.',
      tier: 'challenge',
      min: -5,
      max: 5,
      step: 1,
      correctRange: [-3, -3],
      label: 'x value on a number line from -5 to 5',
      xpValue: 20,
      hint: 'A negative x value sits to the left of the origin. Count 3 squares left from 0.',
    },
    {
      id: 'coord-q21',
      type: 'multiple-choice',
      stem: 'Liam stands at the point (4, 3) on a coordinate grid laid out in a Sevenoaks schoolyard. He walks 2 squares to the left and 5 squares up. Where does he end up?',
      tier: 'challenge',
      options: ['(6, 8)', '(2, 3)', '(4, 8)', '(2, 8)'],
      correctIndex: 3,
      xpValue: 25,
      hint: 'Walking left changes only the x value. Walking up changes only the y value.',
    },
    {
      id: 'coord-q22',
      type: 'multiple-choice',
      stem: 'Four points are marked on a four quadrant grid: A at (3, -2), B at (-4, 1), C at (-2, -3) and D at (2, 4). Which point sits in the same quadrant as the point (-1, 2)?',
      tier: 'challenge',
      options: ['Point A', 'Point B', 'Point C', 'Point D'],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'coord-mis-quadrant-2-defaults-positive',
    },
  ],
  misconceptions: [
    // Source: Hart (Editor), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 9 "Graphs" by Kerslake, on the persistent learner error of reading the y value before the x value when naming a marked point
    {
      id: 'coord-mis-swap-xy',
      description:
        'I read a point as up first then across, so I gave the y value before the x value when writing the pair.',
      triggerAnswer: 'swap-xy',
      correction:
        'In fact the x value always comes first. Read across (x) first, then up (y). So a point 3 across and 5 up is (3, 5), not (5, 3).',
      reExplanation:
        'Picture starting at the origin. The x value tells you how far to walk along the bottom, and the y value tells you how far to climb. The order matches the alphabet: x then y. Swapping them lands you on a different point on the grid.',
    },
    // Source: CGP KS3 Maths Study Guide, coordinates section, Common mistake callout on negative coordinates
    {
      id: 'coord-mis-negative-direction',
      description:
        'I think a negative x value means count from the right hand end, so I went right instead of left.',
      triggerAnswer: 'negative-direction',
      correction:
        'In fact a negative x value tells you to move to the left of the origin. A negative y value tells you to move down from the x axis.',
      reExplanation:
        'Think of the x axis as a number line. To the right of zero the numbers are positive (1, 2, 3, 4). To the left of zero the numbers are negative (-1, -2, -3, -4). So (-2, 3) is 2 squares to the left of the y axis and 3 squares up. The minus sign always means the opposite of positive on the same axis.',
    },
    // Source: Hart (Editor), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 9 "Graphs" by Kerslake, on off-by-one errors where learners count the origin as the first square
    {
      id: 'coord-mis-origin-as-one',
      description:
        'I counted the origin as 1, so my point came out shifted by one square along each axis.',
      triggerAnswer: 'origin-as-one',
      correction:
        'In fact the origin is (0, 0), not (1, 1). Start counting from zero at the origin and the first gridline along is at 1, not 2.',
      reExplanation:
        'On a number line zero comes before one. The same is true on a grid axis. The origin sits at the corner where both axes read zero. Counting starts from there: the next gridline along the x axis is x = 1, the one after that is x = 2, and so on. Treating the origin as one shifts every coordinate by one square.',
    },
    // Source: AQA GCSE Maths Foundation tier examiner report 2023, recurring error reported on coordinate-reading questions where the axis is labelled in steps of 2 and learners count squares rather than reading the printed values
    {
      id: 'coord-mis-axis-labels-vs-squares',
      description:
        'I counted the squares from the origin instead of reading the numbers on the axis.',
      triggerAnswer: 'axis-labels-vs-squares',
      correction:
        'In fact the coordinates come from the printed numbers on each axis, not from the count of squares. Read the value labelled on the axis at that gridline.',
      reExplanation:
        'When an axis is labelled in steps of 2, the first gridline after the origin reads 2, the next reads 4, and so on. So a point on the third gridline along sits at x = 6, not x = 3. Always read the printed numbers on the axis before writing a coordinate.',
    },
    // Source: Edexcel GCSE Maths Foundation tier examiner report 2022, comments on quadrant 2 errors where learners drop the minus sign from the x value when the point is in the top left
    {
      id: 'coord-mis-quadrant-2-defaults-positive',
      description:
        'When a point is in the top left of the grid I wrote both numbers as positive, even though the x value was on the negative side.',
      triggerAnswer: 'quadrant-2-positive',
      correction:
        'In fact a point in quadrant 2 has a negative x value and a positive y value. The minus sign on the x is part of the coordinate.',
      reExplanation:
        'Quadrant 2 is the top left region of a four quadrant grid. Points there sit to the left of the y axis (negative x) and above the x axis (positive y). So a point at (-3, 4) sits in quadrant 2 and the minus sign on the 3 must be kept. Dropping it moves the point across to quadrant 1.',
    },
    // Source: CGP KS3 Maths Study Guide, coordinates section, Common mistake callout on the comma between the two values
    {
      id: 'coord-mis-comma-decimal',
      description:
        'I wrote the pair as (3.5) because I forgot the comma between the two numbers.',
      triggerAnswer: 'comma-as-decimal',
      correction:
        'In fact the bracket pair always contains two numbers separated by a comma. (3.5) is one number with a decimal point, not a coordinate pair.',
      reExplanation:
        'A coordinate names two values: an x value and a y value. The standard notation is (x, y) with a comma between them. Replacing the comma with a decimal point turns the pair into a single decimal number, which is a different thing entirely. Always keep the comma when writing a coordinate.',
    },
    // Authored, no external source
    {
      id: 'coord-mis-origin-wrong',
      description:
        'I think the origin has coordinates (1, 1) because I count from one rather than zero.',
      triggerAnswer: 'origin-wrong',
      correction:
        'In fact the origin sits at (0, 0). Both x and y read zero at the point where the two axes meet.',
      reExplanation:
        'The axes are labelled like number lines, and number lines start at zero. The origin is the corner of the grid where both number lines read zero, so its coordinates are (0, 0). Counting from one would shift every coordinate on the grid by one square along each axis.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const coordinatesZoneNodes = [coordinatesGrid]
