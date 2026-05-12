import type { SkillNode } from '@/types/content'

export const coordinatesPlottingLinear: SkillNode = {
  id: 'maths-coordinates-plotting-linear',
  title: 'Plotting Linear Graphs y = mx + c',
  description:
    'Plot a straight-line graph from an equation of the form y = mx + c. Build a short table of values from the equation, plot the (x, y) pairs on a four-quadrant grid, and join them with a single ruled line. Read the gradient m and the y-intercept c straight from the equation, and sketch the line directly from those two numbers using a rise-over-run step from the y axis.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-coordinates',
  zoneName: 'Coordinates',
  tier: 'confident',
  prerequisites: ['maths-coordinates-grid', 'maths-algebra-introduction'],
  curriculum: {
    ks3Objective:
      'Plot graphs of equations that correspond to straight-line graphs in the coordinate plane.',
    awardingBodies: {
      aqa: 'A9 Plot graphs of straight lines of the form y = mx + c (GCSE Mathematics 8300)',
      edexcel:
        'A9 Plot graphs of straight lines, including y = mx + c (GCSE Mathematics 1MA1)',
      ocr: '7.02c Plot straight line graphs from y = mx + c (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'cpl-scene-anatomy-of-a-line',
      title: 'Anatomy of y = 2x + 1',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to reveal a part of the line y = 2x + 1: the y-intercept where the line crosses the y axis, the gradient triangle showing rise over run, and two plotted points the line passes through.',
      data: {
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'cpl-hs-y-intercept',
            x: 50,
            y: 55,
            label: 'y-intercept c = 1',
            description:
              'The line crosses the y axis at (0, 1). This is the value of c in y = 2x + 1.',
          },
          {
            id: 'cpl-hs-gradient-triangle',
            x: 62,
            y: 40,
            label: 'Gradient m = 2',
            description:
              'A right-angled step from one point to the next: 1 across, 2 up. The gradient m = 2 means y goes up by 2 for every 1 across.',
          },
          {
            id: 'cpl-hs-point-one',
            x: 70,
            y: 30,
            label: 'Plotted point (1, 3)',
            description:
              'When x = 1, y = 2(1) + 1 = 3. So (1, 3) sits on the line.',
          },
          {
            id: 'cpl-hs-point-two',
            x: 82,
            y: 16,
            label: 'Plotted point (2, 5)',
            description:
              'When x = 2, y = 2(2) + 1 = 5. So (2, 5) sits on the line. Three points all lining up confirms a straight-line graph.',
          },
        ],
      },
    },
    {
      id: 'cpl-scene-table-of-values',
      title: 'Build a Table of Values',
      type: 'diagram',
      instructions:
        'Read across each row of the table for y = x + 3. Pick a small set of x values, work out y for each, and pair them as (x, y) coordinates. The table holds five points, all of which lie on a single straight line.',
      data: {
        equation: 'y = x + 3',
        table: [
          { x: -2, calculation: 'y = -2 + 3', y: 1, point: '(-2, 1)' },
          { x: -1, calculation: 'y = -1 + 3', y: 2, point: '(-1, 2)' },
          { x: 0, calculation: 'y = 0 + 3', y: 3, point: '(0, 3)' },
          { x: 1, calculation: 'y = 1 + 3', y: 4, point: '(1, 4)' },
          { x: 2, calculation: 'y = 2 + 3', y: 5, point: '(2, 5)' },
        ],
        callout:
          'Three points are enough to confirm a straight line, but plotting five gives a safety check. If one point sits off the line, recheck that row of the table. The point (0, 3) is the y-intercept: it matches the constant c = 3.',
      },
    },
    {
      id: 'cpl-scene-reading-m-and-c',
      title: 'Reading m and c Straight Off the Equation',
      type: 'diagram',
      instructions:
        'Look at each row to see how the gradient m and the y-intercept c jump straight off the equation, without needing a table. Positive m tilts the line up from left to right; negative m tilts it down. The constant c on its own tells you where the line cuts the y axis.',
      data: {
        examples: [
          {
            equation: 'y = 2x + 1',
            gradient: 2,
            yIntercept: 1,
            direction: 'tilts up',
            note: 'Up 2 for every 1 right. Crosses the y axis at (0, 1).',
          },
          {
            equation: 'y = -2x + 5',
            gradient: -2,
            yIntercept: 5,
            direction: 'tilts down',
            note: 'Down 2 for every 1 right. Crosses the y axis at (0, 5).',
          },
          {
            equation: 'y = x - 3',
            gradient: 1,
            yIntercept: -3,
            direction: 'tilts up',
            note: 'Up 1 for every 1 right. Crosses the y axis at (0, -3).',
          },
          {
            equation: 'y = -x',
            gradient: -1,
            yIntercept: 0,
            direction: 'tilts down',
            note: 'Down 1 for every 1 right. Crosses the y axis at (0, 0), the origin.',
          },
        ],
        callout:
          'The number in front of x is the gradient m. The standalone number is the y-intercept c. If x stands on its own with no number in front, m = 1; if it has a minus sign with no number, m = -1.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'cpl-worked-1',
      title: 'Plot y = x + 3 from a table of values',
      steps: [
        {
          explanation:
            'Pick five x values that fit the grid, say x = -2, -1, 0, 1, 2. The grid runs from -3 to 3 along both axes.',
        },
        {
          explanation:
            'Work out y for each x by substituting into y = x + 3. Start with x = -2.',
          maths: 'y = -2 + 3 = 1, so the point is (-2, 1)',
        },
        {
          explanation: 'Do the same for x = -1, x = 0, x = 1 and x = 2.',
          maths: '(-1, 2), (0, 3), (1, 4), (2, 5)',
        },
        {
          explanation:
            'Plot the five points on the grid. Mark each with a small cross or a clear dot.',
        },
        {
          explanation:
            'Check that all five points line up. If one looks out of place, recheck that row of the table.',
        },
        {
          explanation:
            'Join the points with a single ruled line that runs past the outer two points. Label the line y = x + 3.',
          maths: 'Line passes through (0, 3) and has gradient 1',
        },
      ],
    },
    {
      id: 'cpl-worked-2',
      title: 'Sketch y = -2x + 5 by reading m and c',
      steps: [
        {
          explanation:
            'Read the equation. The number in front of x is the gradient m, and the standalone number is the y-intercept c.',
          maths: 'm = -2, c = 5',
        },
        {
          explanation:
            'Plot the y-intercept first. The line crosses the y axis at (0, c) = (0, 5).',
        },
        {
          explanation:
            'Use the gradient to find a second point. m = -2 means y falls by 2 for every 1 right. Step 1 right and 2 down from (0, 5).',
        },
        {
          explanation: 'Work out where that step lands.',
        },
        {
          explanation:
            'Repeat the step once more for a third point: another 1 right and 2 down.',
          maths: '(2, 1)',
        },
        {
          explanation:
            'Join the three points with a single ruled line. The line tilts down from left to right because m is negative.',
        },
      ],
    },
  ],
  questions: [
    // Core 1 - MCQ, correctIndex 0
    {
      id: 'cpl-q1',
      type: 'multiple-choice',
      stem: 'In the equation y = 3x + 4, what is the gradient?',
      tier: 'core',
      options: ['3', '4', '7', '12'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'cpl-mis-swap-m-and-c',
      hint: 'The gradient m is the number in front of x.',
    },
    // Core 2 - Numeric
    {
      id: 'cpl-q2',
      type: 'numeric-entry',
      stem: 'In the equation y = 3x + 4, what is the y-intercept?',
      tier: 'core',
      correctAnswer: 4,
      xpValue: 10,
      misconceptionId: 'cpl-mis-swap-m-and-c',
      hint: 'The y-intercept c is the standalone number.',
    },
    // Core 3 - Numeric (table-of-values single value)
    {
      id: 'cpl-q3',
      type: 'numeric-entry',
      stem: 'A pupil is building a table for y = 2x + 1. When x = 3, what is y?',
      tier: 'core',
      correctAnswer: 7,
      xpValue: 10,
      hint: 'Substitute x = 3 into y = 2x + 1: y = 2(3) + 1.',
    },
    // Core 4 - MCQ, correctIndex 2
    {
      id: 'cpl-q4',
      type: 'multiple-choice',
      stem: 'Which point lies on the line y = x + 2?',
      tier: 'core',
      options: ['(1, 1)', '(3, 4)', '(2, 4)', '(0, 0)'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Substitute the x value into y = x + 2 and check the y matches.',
    },
    // Core 5 - Numeric
    {
      id: 'cpl-q5',
      type: 'numeric-entry',
      stem: 'A pupil is plotting y = 4x. When x = 0, what is y?',
      tier: 'core',
      correctAnswer: 0,
      xpValue: 10,
      hint: 'The constant term is 0, so y = 4(0) + 0.',
    },
    // Core 6 - MCQ, correctIndex 1
    {
      id: 'cpl-q6',
      type: 'multiple-choice',
      stem: 'A line has equation y = x + 5. Where does it cross the y axis?',
      tier: 'core',
      options: ['(5, 0)', '(0, 5)', '(0, 1)', '(1, 5)'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'cpl-mis-cross-wrong-axis',
      hint: 'A line crosses the y axis where x = 0. So the point is (0, c).',
    },
    // Core 7 - Spot-misconception (links to swap-m-and-c)
    {
      id: 'cpl-q7',
      type: 'spot-misconception',
      stem: 'Aisha is asked to give the gradient of y = 5x + 2. She writes "the gradient is 2".',
      tier: 'core',
      statements: [
        {
          text: 'Aisha is right. The gradient is the number on its own at the end.',
          isMisconception: true,
        },
        {
          text: 'Actually the gradient is the number in front of x. The gradient is 5, and 2 is the y-intercept.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cpl-mis-swap-m-and-c',
    },
    // Confident 1 - MCQ, correctIndex 3
    {
      id: 'cpl-q8',
      type: 'multiple-choice',
      stem: 'A pupil is plotting y = 2x - 1. Which row of the table is wrong?',
      tier: 'confident',
      options: [
        'x = -1 gives y = -3',
        'x = 0 gives y = -1',
        'x = 1 gives y = 1',
        'x = 2 gives y = 5',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'cpl-mis-table-x-only',
      hint: 'Recheck each row by substituting x into y = 2x - 1. One row has the wrong y value.',
    },
    // Confident 2 - Numeric (gradient from equation)
    {
      id: 'cpl-q9',
      type: 'numeric-entry',
      stem: 'A line has equation y = -3x + 7. What is its gradient?',
      tier: 'confident',
      correctAnswer: -3,
      xpValue: 15,
      hint: 'The number in front of x is the gradient, including its sign.',
    },
    // Confident 3 - MCQ, correctIndex 0 (negative gradient direction)
    {
      id: 'cpl-q10',
      type: 'multiple-choice',
      stem: 'A line has equation y = -4x + 1. Which way does the line tilt as x increases?',
      tier: 'confident',
      options: [
        'Down from left to right',
        'Up from left to right',
        'Flat, parallel to the x axis',
        'Vertical, parallel to the y axis',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'cpl-mis-negative-gradient-direction',
      hint: 'A negative gradient means y falls as x rises. A positive gradient means y rises as x rises.',
    },
    // Confident 4 - MCQ, correctIndex 1
    {
      id: 'cpl-q11',
      type: 'multiple-choice',
      stem: 'A point on the line y = 2x + 3 has y = 11. What is its x value?',
      tier: 'confident',
      options: ['7', '4', '8', '14'],
      correctIndex: 1,
      xpValue: 15,
      hint: 'Set 2x + 3 = 11 and solve for x: 2x = 8, so x = 4.',
    },
    // Confident 5 - Numeric
    {
      id: 'cpl-q12',
      type: 'numeric-entry',
      stem: 'A pupil reads off (0, c) for the line y = 6x - 9. What is the y value at this point?',
      tier: 'confident',
      correctAnswer: -9,
      xpValue: 15,
      hint: 'When x = 0, y = 6(0) - 9 = -9. The y-intercept is c.',
    },
    // Confident 6 - Drag-order
    {
      id: 'cpl-q13',
      type: 'drag-order',
      stem: 'Drag the steps for plotting a straight-line graph from an equation into the correct order.',
      tier: 'confident',
      items: [
        'Plot each (x, y) pair on the grid as a small cross or clear dot.',
        'Pick a small set of x values that fit the grid, say from -2 to 2.',
        'Join the points with a single ruled line and label it with the equation.',
        'Work out y for each x by substituting into the equation.',
      ],
      correctOrder: [1, 3, 0, 2],
      xpValue: 20,
      misconceptionId: 'cpl-mis-no-ruler-or-no-label',
    },
    // Confident 7 - Missing-step
    {
      id: 'cpl-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil sketches y = -2x + 5 from m and c.',
      tier: 'confident',
      steps: [
        'Read m = -2 and c = 5 from the equation y = -2x + 5.',
        'Plot the y-intercept first: the point (0, 5) on the y axis.',
        null,
        'Step 1 right and 2 down from (0, 5) to land at (1, 3). Plot (1, 3).',
        'Join (0, 5) and (1, 3) with a ruled line and label it y = -2x + 5.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Read the gradient as rise over run: m = -2 means y falls by 2 for every 1 right.',
      xpValue: 20,
    },
    // Confident 8 - MCQ, correctIndex 2 (height-vs-age context)
    {
      id: 'cpl-q15',
      type: 'multiple-choice',
      stem: 'A Year 7 class plots the rule "height in cm = 5 (age in years) + 90" as a straight line, with age along the x axis. What is the y-intercept of the line?',
      tier: 'confident',
      options: ['5', '85', '90', '95'],
      correctIndex: 2,
      xpValue: 15,
      hint: 'The rule is in the form y = mx + c with m = 5 and c = 90. The y-intercept is c.',
    },
    // Challenge 1 - MCQ, correctIndex 0
    {
      id: 'cpl-q16',
      type: 'multiple-choice',
      stem: 'A train fare in pounds is given by F = 3d + 2, where d is the distance in kilometres. The line is plotted with d along the x axis and F along the y axis. What is the gradient of the line, and what does it represent?',
      tier: 'challenge',
      options: [
        '3, the cost in pounds per extra kilometre',
        '2, the cost in pounds per extra kilometre',
        '3, the cost in pounds for a 0 km journey',
        '2, the cost in pounds for a 0 km journey',
      ],
      correctIndex: 0,
      xpValue: 25,
      misconceptionId: 'cpl-mis-swap-m-and-c',
      hint: 'The number in front of d is the gradient. It tells you how much F rises per 1 unit rise in d.',
    },
    // Challenge 2 - Numeric (Bond-style multi-step word problem)
    {
      id: 'cpl-q17',
      type: 'numeric-entry',
      stem: 'A graph in a Tunbridge Wells school workbook shows the line y = 4x - 3 on graph paper from x = -2 to x = 5. A pupil reads off two of the plotted points and works out the gap in y values between x = 1 and x = 4. What is that gap?',
      tier: 'challenge',
      correctAnswer: 12,
      xpValue: 25,
      hint: 'At x = 1, y = 4(1) - 3 = 1. At x = 4, y = 4(4) - 3 = 13. The gap is 13 - 1 = 12. Notice the gap equals the gradient times the change in x.',
    },
    // Challenge 3 - Sketch (challenge, sketching y = x + 1 through three points)
    {
      id: 'cpl-q18',
      type: 'sketch',
      stem: 'Plot three points that lie on the line y = x + 1: the y-intercept and the two points where x = 1 and x = 2.',
      tier: 'challenge',
      gridConfig: { xMin: -3, xMax: 5, yMin: -3, yMax: 5 },
      correctPoints: [
        [0, 1],
        [1, 2],
        [2, 3],
      ],
      xpValue: 25,
      misconceptionId: 'cpl-mis-plot-yx-order',
      hint: 'Substitute x = 0, 1 and 2 into y = x + 1 to get the three points. Plot each as (x across, y up), not the other way round.',
    },
    // Challenge 4 - MCQ, correctIndex 3 (passes through origin trap)
    {
      id: 'cpl-q19',
      type: 'multiple-choice',
      stem: 'A pupil is told that a line passes through (0, 4). They write the equation as y = 4x. What is wrong with this?',
      tier: 'challenge',
      options: [
        'Nothing. The line y = 4x does pass through (0, 4).',
        'The gradient should be 0 because the line passes through (0, 4).',
        'The line y = 4x passes through (4, 0), not (0, 4).',
        'The line y = 4x passes through the origin, not (0, 4). The pupil has confused passing through (0, c) with passing through the origin.',
      ],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'cpl-mis-line-through-origin',
      hint: 'Substitute x = 0 into y = 4x. You get y = 0, so the line passes through (0, 0), not (0, 4).',
    },
    // Challenge 5 - MCQ, correctIndex 1 (multi-step plotting interpretation)
    {
      id: 'cpl-q20',
      type: 'multiple-choice',
      stem: 'Two lines are plotted on the same Dover school graph paper: y = 2x + 1 and y = 2x - 3. What can the pupil say about the two lines?',
      tier: 'challenge',
      options: [
        'They cross at the origin because they both have x in them.',
        'They are parallel because they share the same gradient, m = 2.',
        'They are perpendicular because their y-intercepts have opposite signs.',
        'They are the same line written in two ways.',
      ],
      correctIndex: 1,
      xpValue: 25,
      hint: 'The gradient m is the same for both lines, so they have the same tilt. Different y-intercepts means they cross the y axis at different heights, so they never meet.',
    },
    // Challenge 6 - Numeric (read-from-graph style)
    {
      id: 'cpl-q21',
      type: 'numeric-entry',
      stem: 'A Manchester sports club records height in centimetres against age in years for a sample of Year 7 pupils. The line of best fit has equation h = 4a + 110, with age a along the x axis. What is the predicted height in centimetres at age 12?',
      tier: 'challenge',
      correctAnswer: 158,
      unit: 'cm',
      xpValue: 25,
      hint: 'Substitute a = 12 into h = 4a + 110: h = 4(12) + 110 = 48 + 110 = 158.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a "state the gradient of y = mx + c" question where pupils gave the constant c as the gradient instead of the coefficient m.
    {
      id: 'cpl-mis-swap-m-and-c',
      description:
        'I think the gradient is the standalone number at the end of the equation, and the y-intercept is the number in front of x.',
      triggerAnswer: 'swap-m-and-c',
      correction:
        'Actually the gradient m is the number in front of x. The y-intercept c is the standalone number. In y = 5x + 2, the gradient is 5, not 2.',
      reExplanation:
        'In y = mx + c, m is fixed to the coefficient of x and c to the constant term. For y = 3x + 4, m = 3 means y rises by 3 for every 1 across, and c = 4 means the line crosses the y axis at (0, 4). Swapping the two gives a line with the wrong tilt and the wrong intercept.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a plot-the-line question where pupils wrote only the x values into the table and forgot to work out the y values.
    {
      id: 'cpl-mis-table-x-only',
      description:
        'I fill in only the x values in the table and skip working out the y values, then try to plot the line.',
      triggerAnswer: 'table-x-only',
      correction:
        'In fact every plotted point needs both an x and a y. Use the equation to work out y for each x before plotting.',
      reExplanation:
        'For y = 2x - 1 with x values -1, 0, 1, 2, the y values are -3, -1, 1, 3. Without those, you have no points to plot. Substitute each x into the equation, write the y next to it, then pair them up as (-1, -3), (0, -1), (1, 1) and (2, 3).',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2022, Paper 01 (Foundation, Non-calculator), commentary on a plot-a-point question where pupils plotted the coordinate pair in (y, x) order rather than (x, y).
    {
      id: 'cpl-mis-plot-yx-order',
      description:
        'When I plot a point from a table, I count up the y axis first and then across the x axis, treating the pair as (y, x) instead of (x, y).',
      triggerAnswer: 'plot-yx-order',
      correction:
        'Actually a coordinate pair is always (x, y): the first number is across, the second is up.',
      reExplanation:
        'To plot (2, 5) on a grid, count 2 across the x axis first, then 5 up the y axis. Plotting it as 5 across and 2 up lands at (5, 2), a different point. The order x first, y second never changes.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a plot-the-line question where pupils with a negative gradient drew the line tilting up from left to right instead of down.
    {
      id: 'cpl-mis-negative-gradient-direction',
      description:
        'I think a negative gradient still tilts the line up from left to right, just by a smaller amount.',
      triggerAnswer: 'negative-gradient-direction',
      correction:
        'In fact a negative gradient tilts the line down from left to right. As x rises, y falls.',
      reExplanation:
        'For y = -2x + 5, two points are (0, 5) and (1, 3). As x rises from 0 to 1, y falls from 5 to 3. Ruled in, the line slopes downhill. A positive gradient slopes uphill; a negative gradient slopes downhill. The sign of m sets the direction.',
    },
    // Source: NCETM Secondary Magazine, Issue 138, "From the Library" article on linear graphs, citing pupil work that confused a line crossing the y axis at (0, c) with a line passing through the origin (0, 0).
    {
      id: 'cpl-mis-line-through-origin',
      description:
        'I think every straight-line graph passes through the origin, so y = 4x and y = 4x + 0 both go through (0, 4).',
      triggerAnswer: 'line-through-origin',
      correction:
        'Actually y = 4x passes through (0, 0), the origin. A line passes through (0, c), not the origin, unless c = 0.',
      reExplanation:
        'Substitute x = 0 into y = 4x: y = 0, so the line passes through (0, 0). For y = 4x + 3, x = 0 gives y = 3, so the line passes through (0, 3). Only when c = 0 does the line pass through the origin. Read c from the equation to see where the line cuts the y axis.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 6 Algebra, "Straight-Line Graphs" page; the common-mistake callout warning that pupils read the gradient by counting squares on the wrong axis.
    {
      id: 'cpl-mis-cross-wrong-axis',
      description:
        'I think the y-intercept is where the line crosses the x axis, not the y axis.',
      triggerAnswer: 'cross-wrong-axis',
      correction:
        'Actually the y-intercept is where the line crosses the y axis, at x = 0. The x-intercept is where it crosses the x axis.',
      reExplanation:
        'For y = x + 5, set x = 0 to find the y-intercept: y = 5, so the line crosses the y axis at (0, 5). Setting y = 0 instead gives the x-intercept: 0 = x + 5, so x = -5, at (-5, 0). The y-intercept is the value of c in y = mx + c, read straight off the equation.',
    },
    // Authored, no external source
    {
      id: 'cpl-mis-no-ruler-or-no-label',
      description:
        'I plot the points but join them freehand without a ruler, or I draw the line and forget to label it with the equation.',
      triggerAnswer: 'no-ruler-or-no-label',
      correction:
        'In fact a straight-line graph needs a ruled line and a clear label. Examiners mark off both a wobbly line and an unlabelled line.',
      reExplanation:
        'After plotting (0, 1), (1, 3) and (2, 5) for y = 2x + 1, place a ruler so it touches all three points, then draw a single straight line that runs past the outer two. Write y = 2x + 1 along the line, near the top. A graph without a ruled line or a label is hard for a marker to read and easy to lose marks on.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const coordinatesPlottingLinearZoneNodes = [coordinatesPlottingLinear]
