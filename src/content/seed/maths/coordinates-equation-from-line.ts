import type { SkillNode } from '@/types/content'

export const coordinatesEquationFromLine: SkillNode = {
  id: 'maths-coordinates-equation-from-line',
  title: 'Finding the Equation of a Line from Two Points',
  description:
    'Find the equation y = mx + c of a straight line that passes through two given points. The recipe runs in two steps: compute the gradient m = (y2 - y1) / (x2 - x1), then substitute one point into y = mx + c to find the y-intercept c. Cover positive and negative gradients, integer and fractional gradients, lines through the origin, and lines read from a printed graph.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-coordinates',
  zoneName: 'Coordinates',
  tier: 'challenge',
  prerequisites: ['maths-coordinates-plotting-linear'],
  curriculum: {
    ks3Objective:
      'Identify and interpret gradients and intercepts of linear functions graphically and algebraically; find the equation of a line given two points.',
    awardingBodies: {
      aqa: 'A9 Find the equation of a line given two points (GCSE Mathematics 8300)',
      edexcel:
        'A9 Find the equation of a line given two points or one point and the gradient (GCSE Mathematics 1MA1)',
      ocr: '7.02d Find the equation of a straight line given two points (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'cefl-scene-gradient-triangle',
      title: 'The Gradient Triangle Between Two Points',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to reveal what it shows. The line passes through P(1, 3) and Q(4, 9). Drawing a right-angled triangle under the segment makes the gradient easy to read: the rise (change in y) is 9 - 3 = 6, the run (change in x) is 4 - 1 = 3, so the gradient m = rise / run = 6 / 3 = 2. The rise sits along the y direction, the run along the x direction, and the line is the hypotenuse.',
      data: {
        viewBox: '0 0 100 100',
        hotspots: [
          {
            id: 'cefl-h-p',
            x: 20,
            y: 75,
            label: 'P(1, 3)',
            description: 'The first point. Lower-left corner of the gradient triangle.',
          },
          {
            id: 'cefl-h-q',
            x: 80,
            y: 25,
            label: 'Q(4, 9)',
            description: 'The second point. Top-right corner of the gradient triangle.',
          },
          {
            id: 'cefl-h-rise',
            x: 85,
            y: 50,
            label: 'rise = 9 - 3 = 6',
            description: 'Change in y between the two points. Always y2 - y1.',
          },
          {
            id: 'cefl-h-run',
            x: 50,
            y: 80,
            label: 'run = 4 - 1 = 3',
            description: 'Change in x between the two points. Always x2 - x1.',
          },
          {
            id: 'cefl-h-gradient',
            x: 50,
            y: 50,
            label: 'm = rise / run = 6 / 3 = 2',
            description: 'The gradient is rise divided by run. Same order, top over bottom.',
          },
          {
            id: 'cefl-h-line',
            x: 35,
            y: 60,
            label: 'y = 2x + 1',
            description: 'The full equation after substituting P(1, 3) to find c = 1.',
          },
        ],
      },
    },
    {
      id: 'cefl-scene-substitute-for-c',
      title: 'Substitute One Point to Find c',
      type: 'diagram',
      instructions:
        'Read across to see why substitution works. Once the gradient is known (here m = 2), the line has the shape y = 2x + c, but c is still unknown. Pick either of the two given points and plug its x and y into the shape. Using P(1, 3): 3 = 2 times 1 + c, which gives c = 1. The full equation is y = 2x + 1. A quick check with Q(4, 9): 2 times 4 + 1 = 9. Both points sit on the line, so the equation is right.',
      data: {
        knownGradient: 'm = 2',
        shape: 'y = 2x + c',
        substitutionPoint: { label: 'P', x: 1, y: 3 },
        steps: [
          {
            label: 'Step 1: write the shape',
            example: 'y = 2x + c',
          },
          {
            label: 'Step 2: substitute x and y from P(1, 3)',
            example: '3 = 2 * 1 + c',
          },
          {
            label: 'Step 3: solve for c',
            example: '3 = 2 + c, so c = 1',
          },
          {
            label: 'Step 4: write the full equation',
            example: 'y = 2x + 1',
          },
          {
            label: 'Step 5: check with the other point Q(4, 9)',
            example: '2 * 4 + 1 = 9. Tick.',
          },
        ],
        callout:
          'Either of the two given points works. Use whichever has simpler numbers. Always check by substituting the other point; if both points sit on the line, the equation is correct.',
      },
    },
    {
      id: 'cefl-scene-line-through-origin',
      title: 'A Line Through the Origin',
      type: 'diagram',
      instructions:
        'Look at the special case where the line passes through (0, 0). Here the y-intercept c is zero, so the equation simplifies to y = mx. A line through the points (0, 0) and (3, 6) has gradient m = (6 - 0) / (3 - 0) = 2, so y = 2x. A line through (0, 0) and (4, -8) has gradient m = (-8 - 0) / (4 - 0) = -2, so y = -2x. Always check whether one of the two given points is the origin; if so, c is zero straight away.',
      data: {
        examples: [
          {
            points: [
              { label: 'O', x: 0, y: 0 },
              { label: 'A', x: 3, y: 6 },
            ],
            gradient: 'm = (6 - 0) / (3 - 0) = 2',
            equation: 'y = 2x',
          },
          {
            points: [
              { label: 'O', x: 0, y: 0 },
              { label: 'B', x: 4, y: -8 },
            ],
            gradient: 'm = (-8 - 0) / (4 - 0) = -2',
            equation: 'y = -2x',
          },
          {
            points: [
              { label: 'O', x: 0, y: 0 },
              { label: 'C', x: 2, y: 1 },
            ],
            gradient: 'm = (1 - 0) / (2 - 0) = 1/2',
            equation: 'y = (1/2)x',
          },
        ],
        callout:
          'When a line passes through the origin, c = 0. The equation is just y = mx. This is also the shape used for direct proportion, such as cost against quantity at a fixed unit price.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'cefl-worked-1',
      title: 'Find the equation through (1, 3) and (4, 9)',
      steps: [
        {
          explanation:
            'A line passes through P(1, 3) and Q(4, 9). The aim is to write its equation in the form y = mx + c.',
        },
        {
          explanation:
            'Step 1: compute the gradient m. Use m = (y2 - y1) / (x2 - x1), keeping the same order on top and bottom.',
          maths: 'm = (9 - 3) / (4 - 1) = 6 / 3 = 2',
        },
        {
          explanation:
            'Step 2: the line has the shape y = 2x + c. Substitute one of the two points to find c. Use P(1, 3).',
          maths: '3 = 2 * 1 + c',
        },
        {
          explanation:
            'Step 3: solve for c.',
          maths: '3 = 2 + c, so c = 1',
        },
        {
          explanation:
            'Step 4: write the full equation.',
          maths: 'y = 2x + 1',
        },
        {
          explanation:
            'Check by substituting Q(4, 9). 2 times 4 plus 1 equals 9, which matches. The equation is correct.',
          maths: '2 * 4 + 1 = 9. Tick.',
        },
      ],
    },
    {
      id: 'cefl-worked-2',
      title: 'Find the equation through (2, -1) and (5, 8)',
      steps: [
        {
          explanation:
            'A line passes through R(2, -1) and S(5, 8). The y values include a negative, so take care with signs.',
        },
        {
          explanation:
            'Step 1: compute the gradient. Subtract in the same order on top and bottom.',
          maths: 'm = (8 - (-1)) / (5 - 2) = 9 / 3 = 3',
        },
        {
          explanation:
            'Step 2: the line has the shape y = 3x + c. Substitute R(2, -1) to find c.',
        },
        {
          explanation:
            'Step 3: solve for c.',
          maths: '-1 = 3 * 2 + c, so -1 = 6 + c, so c = -7',
        },
        {
          explanation:
            'Step 4: write the full equation.',
          maths: 'y = 3x - 7',
        },
        {
          explanation:
            'Check by substituting S(5, 8). 3 times 5 minus 7 equals 8, which matches the y value of S. The equation is correct.',
          maths: '3 * 5 - 7 = 8. Tick.',
        },
      ],
    },
  ],
  questions: [
    // Core 1
    {
      id: 'cefl-q1',
      type: 'numeric-entry',
      stem: 'A line passes through (1, 4) and (3, 10). What is its gradient?',
      tier: 'core',
      correctAnswer: 3,
      xpValue: 10,
      hint: 'Use m = (y2 - y1) / (x2 - x1). The rise is 10 - 4 = 6 and the run is 3 - 1 = 2.',
    },
    // Core 2
    {
      id: 'cefl-q2',
      type: 'multiple-choice',
      stem: 'A line has gradient 4 and passes through (1, 6). What is the value of c in y = 4x + c?',
      tier: 'core',
      options: ['c = 2', 'c = 6', 'c = -2', 'c = 10'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'cefl-mis-substitute-before-gradient',
      hint: 'Substitute x = 1 and y = 6 into y = 4x + c. So 6 = 4 + c, giving c = 2.',
    },
    // Core 3
    {
      id: 'cefl-q3',
      type: 'numeric-entry',
      stem: 'A line passes through (2, 5) and (6, 13). What is its gradient?',
      tier: 'core',
      correctAnswer: 2,
      xpValue: 10,
      hint: 'Rise = 13 - 5 = 8. Run = 6 - 2 = 4. Gradient = 8 / 4.',
    },
    // Core 4
    {
      id: 'cefl-q4',
      type: 'multiple-choice',
      stem: 'A line passes through (0, 0) and (5, 15). What is its equation?',
      tier: 'core',
      options: ['y = 5x', 'y = 15x', 'y = 3x', 'y = x + 3'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'cefl-mis-assume-passes-through-origin',
      hint: 'Through the origin, c = 0. Gradient = 15 / 5 = 3. So y = 3x.',
    },
    // Core 5
    {
      id: 'cefl-q5',
      type: 'multiple-choice',
      stem: 'A line passes through (-1, 2) and (3, 10). What is its gradient?',
      tier: 'core',
      options: ['m = 4', 'm = 8', 'm = 1/2', 'm = 2'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Rise = 10 - 2 = 8. Run = 3 - (-1) = 4. Gradient = 8 / 4 = 2.',
    },
    // Core 6
    {
      id: 'cefl-q6',
      type: 'multiple-choice',
      stem: 'A line has gradient 2 and passes through (4, 11). What is its equation?',
      tier: 'core',
      options: ['y = 2x + 11', 'y = 2x - 3', 'y = 2x + 3', 'y = 2x + 7'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Substitute x = 4 and y = 11 into y = 2x + c. So 11 = 8 + c, giving c = 3.',
    },
    // Core 7
    {
      id: 'cefl-q7',
      type: 'spot-misconception',
      stem: 'Maya finds the gradient of a line through (2, 1) and (5, 7). She writes m = (5 - 2) / (7 - 1) = 3 / 6 = 1/2.',
      tier: 'core',
      statements: [
        {
          text: 'Maya is right. The gradient of the line is 1/2.',
          isMisconception: true,
        },
        {
          text: 'Actually the formula is m = (y2 - y1) / (x2 - x1), so the change in y goes on top. The correct gradient is (7 - 1) / (5 - 2) = 6 / 3 = 2.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cefl-mis-delta-x-over-delta-y',
    },
    // Confident 1
    {
      id: 'cefl-q8',
      type: 'numeric-entry',
      stem: 'A line passes through (1, 5) and (4, 14). What is its gradient?',
      tier: 'confident',
      correctAnswer: 3,
      xpValue: 15,
      hint: 'Rise = 14 - 5 = 9. Run = 4 - 1 = 3. Gradient = 9 / 3.',
    },
    // Confident 2
    {
      id: 'cefl-q9',
      type: 'multiple-choice',
      stem: 'A line passes through (1, 7) and (3, 13). What is its equation?',
      tier: 'confident',
      options: ['y = 3x + 4', 'y = 2x + 5', 'y = 3x + 7', 'y = 6x + 1'],
      correctIndex: 0,
      xpValue: 15,
      hint: 'Gradient = (13 - 7) / (3 - 1) = 6 / 2 = 3. Substitute (1, 7): 7 = 3 + c, so c = 4.',
    },
    // Confident 3
    {
      id: 'cefl-q10',
      type: 'numeric-entry',
      stem: 'A line passes through (2, -1) and (5, 8). Find the value of c when the equation is written as y = mx + c.',
      tier: 'confident',
      correctAnswer: -7,
      xpValue: 15,
      misconceptionId: 'cefl-mis-sign-error-in-gradient',
      hint: 'Gradient = (8 - (-1)) / (5 - 2) = 9 / 3 = 3. Substitute (2, -1): -1 = 6 + c, so c = -7.',
    },
    // Confident 4
    {
      id: 'cefl-q11',
      type: 'multiple-choice',
      stem: 'A line passes through (1, 5) and (3, 1). What is its gradient?',
      tier: 'confident',
      options: ['m = 2', 'm = -2', 'm = -1/2', 'm = 1/2'],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'cefl-mis-sign-error-in-gradient',
      hint: 'Rise = 1 - 5 = -4. Run = 3 - 1 = 2. Gradient = -4 / 2 = -2.',
    },
    // Confident 5
    {
      id: 'cefl-q12',
      type: 'missing-step',
      stem: 'Fill in the missing step. A line passes through (1, 4) and (4, 13). Find its equation.',
      tier: 'confident',
      steps: [
        'Compute the gradient. m = (13 - 4) / (4 - 1) = 9 / 3 = 3.',
        'Write the shape y = 3x + c.',
        null,
        'The equation is y = 3x + 1.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Substitute the point (1, 4): 4 = 3 * 1 + c, so c = 1.',
      xpValue: 20,
      misconceptionId: 'cefl-mis-substitute-wrong-coordinate',
    },
    // Confident 6
    {
      id: 'cefl-q13',
      type: 'multiple-choice',
      stem: 'A printed graph shows a straight line passing through (0, 2) and (4, 10) on a grid where the x axis goes up in 1s and the y axis goes up in 2s. What is the equation of the line?',
      tier: 'confident',
      options: ['y = 4x + 2', 'y = 2x + 10', 'y = 2x + 2', 'y = 8x + 2'],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'cefl-mis-read-axes-wrong',
      hint: 'Read the points using the scale on each axis. Gradient = (10 - 2) / (4 - 0) = 8 / 4 = 2. The y-intercept is 2, so y = 2x + 2.',
    },
    // Confident 7
    {
      id: 'cefl-q14',
      type: 'drag-order',
      stem: 'Drag the steps for finding the equation of a line from two points into the correct order.',
      tier: 'confident',
      items: [
        'Substitute one of the two points into y = mx + c to find c.',
        'Compute the gradient using m = (y2 - y1) / (x2 - x1).',
        'Write the line in the shape y = mx + c with the gradient slotted in for m.',
        'Write the full equation with the values of m and c, then check with the other point.',
      ],
      correctOrder: [1, 2, 0, 3],
      xpValue: 20,
      misconceptionId: 'cefl-mis-substitute-before-gradient',
    },
    // Confident 8
    {
      id: 'cefl-q15',
      type: 'numeric-entry',
      stem: 'A line passes through (0, -3) and (2, 5). Find the value of c when the equation is written as y = mx + c.',
      tier: 'confident',
      correctAnswer: -3,
      xpValue: 15,
      misconceptionId: 'cefl-mis-y-intercept-formula-x-and-y-swap',
      hint: 'One of the two points has x = 0, so c is simply the y value at that point. Or use c = y - mx with (2, 5): c = 5 - 4 * 2 = -3.',
    },
    // Challenge 1 (Bond 11+ word problem, phone bill context)
    {
      id: 'cefl-q16',
      type: 'numeric-entry',
      stem: 'A mobile phone tariff charges a fixed monthly fee plus a cost per minute. After 20 minutes one month the bill comes to £8. After 50 minutes another month the bill comes to £14. The cost C in pounds is a straight-line function of minutes m. What is the cost per minute in pence?',
      tier: 'challenge',
      correctAnswer: 20,
      xpValue: 25,
      hint: 'Treat the two readings as points (20, 8) and (50, 14). Gradient = (14 - 8) / (50 - 20) = 6 / 30 = 0.2 pounds per minute, which is 20 pence per minute.',
    },
    // Challenge 2 (Bond 11+ word problem, distance-time graph)
    {
      id: 'cefl-q17',
      type: 'multiple-choice',
      stem: 'A coach leaves Dover at a steady speed on the M20. After 1 hour it has travelled 70 km from Dover. After 3 hours it has travelled 190 km from Dover. Distance d in km is a straight-line function of time t in hours. What is the equation linking d and t?',
      tier: 'challenge',
      options: [
        'd = 70t',
        'd = 60t + 10',
        'd = 60t + 70',
        'd = 120t - 50',
      ],
      correctIndex: 1,
      xpValue: 25,
      hint: 'Use the points (1, 70) and (3, 190). Gradient = (190 - 70) / (3 - 1) = 120 / 2 = 60. Then substitute (1, 70): 70 = 60 + c, so c = 10.',
    },
    // Challenge 3
    {
      id: 'cefl-q18',
      type: 'multiple-choice',
      stem: 'A straight line passes through (-2, 5) and (4, -7). What is its equation?',
      tier: 'challenge',
      options: ['y = -2x + 1', 'y = 2x + 9', 'y = -2x + 9', 'y = -2x - 1'],
      correctIndex: 0,
      xpValue: 25,
      misconceptionId: 'cefl-mis-sign-error-in-gradient',
      hint: 'Gradient = (-7 - 5) / (4 - (-2)) = -12 / 6 = -2. Substitute (-2, 5): 5 = -2 * (-2) + c, so 5 = 4 + c, c = 1.',
    },
    // Challenge 4
    {
      id: 'cefl-q19',
      type: 'numeric-entry',
      stem: 'A straight line passes through (2, 6) and (8, 9). Find the value of c when the equation is written as y = mx + c.',
      tier: 'challenge',
      correctAnswer: 5,
      xpValue: 25,
      hint: 'Gradient = (9 - 6) / (8 - 2) = 3 / 6 = 1/2. Substitute (2, 6): 6 = (1/2) * 2 + c, so 6 = 1 + c, c = 5.',
    },
    // Challenge 5 (Bond 11+ multi-step interpretation)
    {
      id: 'cefl-q20',
      type: 'multiple-choice',
      stem: 'A taxi firm in Tunbridge Wells charges a fixed pickup fee plus a fixed price per kilometre. A 4 km journey costs £10. A 9 km journey costs £17.50. What does a 12 km journey cost?',
      tier: 'challenge',
      options: ['£21.50', '£20.50', '£24.00', '£22.00'],
      correctIndex: 3,
      xpValue: 25,
      hint: 'Points: (4, 10) and (9, 17.50). Gradient = 7.50 / 5 = 1.50. Substitute (4, 10): 10 = 6 + c, c = 4. So C = 1.50 * 12 + 4 = 18 + 4 = 22.',
    },
    // Challenge 6 (spot-misconception 2)
    {
      id: 'cefl-q21',
      type: 'spot-misconception',
      stem: 'A line passes through (0, 0) and (4, 6), and a second line passes through (2, 5) and (6, 13). A pupil claims both lines pass through the origin because the first one does.',
      tier: 'challenge',
      statements: [
        {
          text: 'The pupil is right. Both lines have the same gradient, so both pass through (0, 0).',
          isMisconception: true,
        },
        {
          text: 'In fact you must check each line on its own. The second line through (2, 5) and (6, 13) has gradient 2, and substituting (2, 5) gives c = 1, so its equation is y = 2x + 1. It does not pass through (0, 0).',
          isMisconception: false,
        },
      ],
      xpValue: 25,
      misconceptionId: 'cefl-mis-assume-passes-through-origin',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2019, Paper 1F (Foundation, Non-calculator), commentary on a "find the equation of a line" question where pupils computed change in x divided by change in y rather than change in y divided by change in x.
    {
      id: 'cefl-mis-delta-x-over-delta-y',
      description:
        'I think the gradient is the change in x divided by the change in y, so I work out (x2 - x1) / (y2 - y1).',
      triggerAnswer: 'delta-x-over-delta-y',
      correction:
        'Actually the gradient is the change in y divided by the change in x: m = (y2 - y1) / (x2 - x1). The y values go on top, the x values go on the bottom.',
      reExplanation:
        'Think of a hill on a graph. The gradient measures rise over run, not run over rise. For points (2, 1) and (5, 7), the rise is 7 - 1 = 6 and the run is 5 - 2 = 3, so the gradient is 6 / 3 = 2. Flipping it to 3 / 6 = 0.5 would give a much shallower line than the one drawn.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a gradient question where pupils mishandled the sign of a negative y-difference, giving a positive gradient for a line that fell from left to right.
    {
      id: 'cefl-mis-sign-error-in-gradient',
      description:
        'When the line falls from left to right, I drop the minus sign and write the gradient as a positive number.',
      triggerAnswer: 'sign-error-in-gradient',
      correction:
        'In fact a falling line has a negative gradient. Keep the minus sign on the rise. For (1, 5) and (3, 1), rise = -4, run = 2, gradient = -2.',
      reExplanation:
        'A line that goes down as you read left to right always has a negative gradient. The y2 - y1 step on top will come out negative. Do not flip the order of the subtraction to make it positive; the formula must use the same order on top and bottom, or the sign of the gradient comes out wrong.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2018, Paper 03 (Foundation, Calculator), commentary on a "find the equation from two points" question where pupils substituted a point before computing the gradient and treated the resulting equation as both m and c at once.
    {
      id: 'cefl-mis-substitute-before-gradient',
      description:
        'I substitute one of the points straight into y = mx + c before I have worked out the gradient, then guess what m should be.',
      triggerAnswer: 'substitute-before-gradient',
      correction:
        'Actually the gradient must be found first. Compute m from the two points, then substitute one point into y = mx + c to find c.',
      reExplanation:
        'Substituting one point into y = mx + c gives a single equation with two unknowns, m and c, which cannot be solved on its own. The two points give two pieces of information: one fixes m through the rise-over-run formula, the second fixes c through substitution. Order matters: gradient first, intercept second.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 2H (Higher, Calculator), commentary on a question where pupils substituted the x of one point with the y of the other, treating y = mx + c as if the coordinates could be split across points.
    {
      id: 'cefl-mis-substitute-wrong-coordinate',
      description:
        'When I substitute a point into y = mx + c, I use the x value from one point and the y value from the other point.',
      triggerAnswer: 'substitute-wrong-coordinate',
      correction:
        'In fact both x and y in the substitution must come from the same point. The shape y = mx + c means: when x is this value, y is that value, at one point on the line.',
      reExplanation:
        'For points (1, 3) and (4, 9) with gradient 2, the shape is y = 2x + c. Substituting x = 1 with y = 3 gives 3 = 2 + c, so c = 1. Substituting x = 1 with y = 9 (mixing the points) gives 9 = 2 + c, so c = 7, which is wrong. Both coordinates must come from one and the same point.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2019, Paper 1F (Foundation, Non-calculator), commentary on a "read a straight line graph" question where pupils took the x and y values straight off the gridlines without noticing the y axis ran up in 2s and the x axis in 1s.
    {
      id: 'cefl-mis-read-axes-wrong',
      description:
        'When I read a point off a printed graph, I count the gridlines and ignore the scale labels on each axis.',
      triggerAnswer: 'read-axes-wrong',
      correction:
        'Actually the scale on each axis tells you what each gridline is worth. Read the labels first, then count, multiplying by the step where needed.',
      reExplanation:
        'On a graph where the y axis goes up in 2s and the x axis in 1s, a point three gridlines right and four gridlines up sits at (3, 8), not (3, 4). Always glance at the numbers next to the axis ticks before counting. Treating every gridline as one unit on every axis is the most common reading error in graph questions.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 8 Graphs, "Equations of Straight Lines" page, "Common mistake" callout warning that not every line passes through the origin and that c must be checked rather than assumed.
    {
      id: 'cefl-mis-assume-passes-through-origin',
      description:
        'I assume every straight line passes through the origin, so I jump to y = mx and never work out c.',
      triggerAnswer: 'assume-passes-through-origin',
      correction:
        'In fact only lines through the origin have c = 0. For any other line, find c by substituting one of the given points into y = mx + c.',
      reExplanation:
        'A line through (1, 5) and (3, 13) has gradient (13 - 5) / (3 - 1) = 4, so y = 4x + c. Substituting (1, 5) gives 5 = 4 + c, so c = 1 and the equation is y = 4x + 1. The line crosses the y axis at 1, not 0. Always check the y-intercept rather than assuming it is zero.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2021, Paper 04 (Higher, Calculator), commentary on a "find the equation of a line" question where pupils used the y-intercept formula but plugged the x of one point in place of the y when solving for c.
    {
      id: 'cefl-mis-y-intercept-formula-x-and-y-swap',
      description:
        'When I solve c = y - mx I sometimes put the x value where the y value should be, or the other way round.',
      triggerAnswer: 'y-intercept-x-and-y-swap',
      correction:
        'Actually c = y - mx uses the y of the chosen point on the left and the x of the same point inside the mx term. Label each value before you substitute.',
      reExplanation:
        'For gradient m = 3 and point (2, 6): c = y - mx = 6 - 3 * 2 = 0, so y = 3x. Swapping the coordinates gives c = 2 - 3 * 6 = -16, which is wrong because (2, 6) does not sit on y = 3x - 16. Always label "x = " and "y = " next to the chosen point before plugging in.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const coordinatesEquationFromLineZoneNodes = [coordinatesEquationFromLine]
