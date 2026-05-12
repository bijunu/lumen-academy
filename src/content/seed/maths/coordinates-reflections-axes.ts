import type { SkillNode } from '@/types/content'

export const coordinatesReflectionsAxes: SkillNode = {
  id: 'maths-coordinates-reflections-axes',
  title: 'Reflections in y = x and y = -x',
  description:
    'Reflect points and shapes in the oblique mirror lines y = x and y = -x. The rule for y = x is "swap the coordinates": (a, b) becomes (b, a). The rule for y = -x is "swap and negate both": (a, b) becomes (-b, -a). Apply each rule vertex by vertex when reflecting a triangle, square, or any polygon, and use a before-and-after picture to identify which oblique mirror line was used.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-coordinates',
  zoneName: 'Coordinates',
  tier: 'challenge',
  prerequisites: ['maths-coordinates-four-quadrants-shapes'],
  curriculum: {
    ks3Objective:
      'Identify, describe and construct congruent shapes including on coordinate axes by considering reflection, with mirror lines y = x and y = -x.',
    awardingBodies: {
      aqa: 'G7 Reflect shapes in the lines y = x and y = -x (GCSE Mathematics 8300)',
      edexcel: 'G7 Reflect shapes in y = x and y = -x (GCSE Mathematics 1MA1)',
      ocr: '7.05a Reflect shapes in oblique mirror lines y = x and y = -x (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'cra-scene-y-equals-x',
      title: 'The Mirror Line y = x',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read what it is. The line y = x runs at 45 degrees through the origin, passing through (0, 0), (1, 1), (2, 2), and so on. Reflecting a point P(3, 1) in this line gives the image P prime at (1, 3). The line itself sits exactly halfway between the two points, perpendicular to the segment that joins them.',
      data: {
        viewBox: '0 0 100 100',
        hotspots: [
          {
            id: 'cra-h-yx-line',
            x: 50,
            y: 50,
            label: 'Mirror line y = x',
            description:
              'A 45 degree line through the origin. Every point on it has equal x and y values.',
          },
          {
            id: 'cra-h-yx-original',
            x: 70,
            y: 70,
            label: 'P(3, 1)',
            description:
              'The original point. Its x value is 3, its y value is 1.',
          },
          {
            id: 'cra-h-yx-image',
            x: 35,
            y: 30,
            label: "P'(1, 3)",
            description:
              'The reflected point. The coordinates of P have swapped: 3 and 1 are still here, just in the other slots.',
          },
          {
            id: 'cra-h-yx-rule',
            x: 80,
            y: 15,
            label: 'Rule: (a, b) -> (b, a)',
            description:
              'For reflection in y = x, swap the x and y values. Nothing gets negated.',
          },
          {
            id: 'cra-h-yx-midpoint',
            x: 52,
            y: 50,
            label: 'Midpoint sits on the line',
            description:
              'The midpoint of P and its image lies on y = x. The mirror line is the perpendicular bisector of the segment PP prime.',
          },
        ],
      },
    },
    {
      id: 'cra-scene-y-equals-minus-x',
      title: 'The Mirror Line y = -x',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read what it is. The line y = -x also runs through the origin at 45 degrees, but it slopes downwards from top left to bottom right. Reflecting Q(2, 3) in this line gives Q prime at (-3, -2). Both coordinates have swapped places AND both have changed sign, which is the key difference from y = x.',
      data: {
        viewBox: '0 0 100 100',
        hotspots: [
          {
            id: 'cra-h-ymx-line',
            x: 50,
            y: 50,
            label: 'Mirror line y = -x',
            description:
              'A 45 degree line through the origin that slopes downwards. Every point on it has x and y values that are negatives of each other.',
          },
          {
            id: 'cra-h-ymx-original',
            x: 65,
            y: 30,
            label: 'Q(2, 3)',
            description: 'The original point. Its x value is 2, its y value is 3.',
          },
          {
            id: 'cra-h-ymx-image',
            x: 25,
            y: 70,
            label: "Q'(-3, -2)",
            description:
              'The reflected point. Swap 2 and 3, then change both signs.',
          },
          {
            id: 'cra-h-ymx-rule',
            x: 80,
            y: 15,
            label: 'Rule: (a, b) -> (-b, -a)',
            description:
              'For reflection in y = -x, swap and then negate both coordinates.',
          },
          {
            id: 'cra-h-ymx-trap',
            x: 20,
            y: 85,
            label: 'Common slip: swap only',
            description:
              'Swapping without negating is the y = x rule, not y = -x. Always change the signs as well.',
          },
        ],
      },
    },
    {
      id: 'cra-scene-rule-summary',
      title: 'Swap, and Sometimes Negate',
      type: 'diagram',
      instructions:
        'Read each row to compare the two oblique mirror lines side by side. For y = x, swap the coordinates and stop. For y = -x, swap the coordinates AND flip both signs. The axis-line rules (y = 0 flips y only, x = 0 flips x only) do not apply here: the oblique mirrors always move both numbers.',
      data: {
        comparisons: [
          {
            original: '(3, 1)',
            reflectInYx: '(1, 3)',
            reflectInYmx: '(-1, -3)',
            note: 'For y = x: swap. For y = -x: swap then change both signs.',
          },
          {
            original: '(-4, 2)',
            reflectInYx: '(2, -4)',
            reflectInYmx: '(-2, 4)',
            note: 'For y = -x, -(-4) is 4 and -(2) is -2 after the swap.',
          },
          {
            original: '(0, 5)',
            reflectInYx: '(5, 0)',
            reflectInYmx: '(-5, 0)',
            note: 'A point on the y axis lands on the x axis under either oblique mirror, but in opposite directions.',
          },
        ],
        axisVersusOblique: {
          xAxis: '(a, b) -> (a, -b)',
          yAxis: '(a, b) -> (-a, b)',
          yEqualsX: '(a, b) -> (b, a)',
          yEqualsMinusX: '(a, b) -> (-b, -a)',
          callout:
            'Axis mirrors flip one coordinate. Oblique mirrors swap both, and y = -x flips signs on top of the swap.',
        },
      },
    },
  ],
  workedExamples: [
    {
      id: 'cra-worked-1',
      title: 'Reflect the point (3, 1) in the line y = x',
      steps: [
        {
          explanation:
            'Identify the point and the mirror line. The point is (3, 1), and the mirror line is y = x.',
          maths: 'point: (3, 1), mirror: y = x',
        },
        {
          explanation:
            'Recall the rule for y = x. Swap the x value and the y value. No sign changes.',
          maths: '(a, b) -> (b, a)',
        },
        {
          explanation:
            'Apply the rule to (3, 1). The x value 3 moves into the y slot, and the y value 1 moves into the x slot.',
          maths: '(3, 1) -> (1, 3)',
        },
        {
          explanation:
            'Check by sketching. The original sits below and to the right of y = x, and the image sits above and to the left, at the same perpendicular distance.',
        },
        {
          explanation:
            'So the reflection of (3, 1) in y = x is (1, 3).',
          maths: "P'(1, 3)",
        },
      ],
    },
    {
      id: 'cra-worked-2',
      title: 'Reflect triangle A(1, 2), B(4, 2), C(4, 5) in y = -x',
      steps: [
        {
          explanation:
            'Identify the three vertices and the mirror line. The mirror line is y = -x, so the rule is (a, b) goes to (-b, -a): swap and negate both.',
          maths: 'rule: (a, b) -> (-b, -a)',
        },
        {
          explanation:
            'Apply the rule to vertex A(1, 2). Swap to get (2, 1), then negate both to get (-2, -1).',
          maths: "A(1, 2) -> A'(-2, -1)",
        },
        {
          explanation:
            'Apply the rule to vertex B(4, 2). Swap to get (2, 4), then negate both.',
        },
        {
          explanation:
            'Apply the rule to vertex C(4, 5). Swap to get (5, 4), then negate both.',
          maths: "C(4, 5) -> C'(-5, -4)",
        },
        {
          explanation:
            'List the three image vertices together, joined in the same order as the original. The image triangle has the same shape and size; only its position and orientation have changed.',
          maths: "A'(-2, -1), B'(-2, -4), C'(-5, -4)",
        },
        {
          explanation:
            'So the reflection of triangle ABC in y = -x is the triangle with vertices (-2, -1), (-2, -4), (-5, -4).',
        },
      ],
    },
  ],
  questions: [
    // Core 1: MCQ — reflect single point in y = x
    {
      id: 'cra-q1',
      type: 'multiple-choice',
      stem: 'Reflect the point (3, 1) in the line y = x. What are the coordinates of the image?',
      tier: 'core',
      options: ['(3, 1)', '(1, 3)', '(-3, -1)', '(-1, -3)'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Reflection in y = x swaps the x and y values. (3, 1) becomes (1, 3).',
    },
    // Core 2: Numeric — x value after y = x reflection
    {
      id: 'cra-q2',
      type: 'numeric-entry',
      stem: 'The point (5, -2) is reflected in the line y = x. What is the x value of the image?',
      tier: 'core',
      correctAnswer: -2,
      xpValue: 10,
      hint: 'For y = x, swap the coordinates. The image is (-2, 5), so the x value is -2.',
    },
    // Core 3: MCQ — reflect single point in y = -x
    {
      id: 'cra-q3',
      type: 'multiple-choice',
      stem: 'Reflect the point (2, 5) in the line y = -x. What are the coordinates of the image?',
      tier: 'core',
      options: ['(5, 2)', '(2, 5)', '(-5, -2)', '(-2, -5)'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'cra-mis-forgot-negation-in-y-minus-x',
      hint: 'For y = -x, swap then change both signs. (2, 5) swaps to (5, 2), then negates to (-5, -2).',
    },
    // Core 4: Numeric — x value after y = -x reflection
    {
      id: 'cra-q4',
      type: 'numeric-entry',
      stem: 'The point (4, 3) is reflected in the line y = -x. What is the x value of the image?',
      tier: 'core',
      correctAnswer: -3,
      xpValue: 10,
      hint: 'Swap (4, 3) to (3, 4), then negate both to (-3, -4). The x value is -3.',
    },
    // Core 5: MCQ — identify the rule for y = x
    {
      id: 'cra-q5',
      type: 'multiple-choice',
      stem: 'Which rule describes reflection in the line y = x?',
      tier: 'core',
      options: [
        '(a, b) -> (b, a) (swap only)',
        '(a, b) -> (a, -b) (flip the y value)',
        '(a, b) -> (-a, b) (flip the x value)',
        '(a, b) -> (-b, -a) (swap and negate both)',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'cra-mis-y-equals-x-as-axis',
      hint: 'Reflection in y = x swaps the coordinates. No sign changes.',
    },
    // Core 6: Spot-misconception — confusing y = x with horizontal axis
    {
      id: 'cra-q6',
      type: 'spot-misconception',
      stem: 'Maya is asked to reflect (2, 5) in y = x. She writes the image as (2, -5).',
      tier: 'core',
      statements: [
        {
          text: 'Maya is right. y = x is a horizontal mirror, so the y value flips sign and the x value stays.',
          isMisconception: true,
        },
        {
          text: 'Actually y = x is a 45 degree line, not a horizontal one. Reflection in y = x swaps the coordinates, so (2, 5) becomes (5, 2). Maya is using the x axis rule on a different mirror line.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cra-mis-y-equals-x-as-axis',
    },
    // Core 7: Drag-order — steps to reflect in y = -x
    {
      id: 'cra-q7',
      type: 'drag-order',
      stem: 'Drag the steps for reflecting a point (a, b) in the line y = -x into the correct order.',
      tier: 'core',
      items: [
        'Write the image as (-b, -a).',
        'Swap the x value and the y value, giving (b, a).',
        'Read the original point as (a, b).',
        'Change the sign of both the new x value and the new y value.',
      ],
      correctOrder: [2, 1, 3, 0],
      xpValue: 20,
      misconceptionId: 'cra-mis-swap-only-in-y-minus-x',
    },
    // Confident 1: MCQ — reflect single point with one negative in y = x
    {
      id: 'cra-q8',
      type: 'multiple-choice',
      stem: 'Reflect the point (-4, 1) in the line y = x. What are the coordinates of the image?',
      tier: 'confident',
      options: ['(4, -1)', '(-1, -4)', '(-1, 4)', '(1, -4)'],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'cra-mis-swap-sign-not-order',
      hint: 'Swap the coordinates: (-4, 1) becomes (1, -4). Do not flip signs; that is the y = -x rule.',
    },
    // Confident 2: Numeric — reflect point with negatives in y = -x
    {
      id: 'cra-q9',
      type: 'numeric-entry',
      stem: 'The point (-3, -2) is reflected in the line y = -x. What is the y value of the image?',
      tier: 'confident',
      correctAnswer: 3,
      xpValue: 15,
      hint: 'Swap (-3, -2) to (-2, -3), then negate both: (2, 3). The y value of the image is 3.',
    },
    // Confident 3: MCQ — reflect triangle vertex in y = x
    {
      id: 'cra-q10',
      type: 'multiple-choice',
      stem: 'A triangle has vertices A(1, 2), B(4, 2), C(4, 5). The triangle is reflected in y = x. What are the coordinates of the image of vertex C?',
      tier: 'confident',
      options: ['(-4, -5)', '(4, -5)', '(5, 4)', '(-5, -4)'],
      correctIndex: 2,
      xpValue: 15,
      hint: 'Reflection in y = x swaps the coordinates of each vertex. (4, 5) becomes (5, 4).',
    },
    // Confident 4: Numeric — reflect triangle vertex in y = -x
    {
      id: 'cra-q11',
      type: 'numeric-entry',
      stem: 'The square has vertices (1, 1), (3, 1), (3, 3), (1, 3). The square is reflected in y = -x. What is the y value of the image of vertex (3, 1)?',
      tier: 'confident',
      correctAnswer: -3,
      xpValue: 15,
      misconceptionId: 'cra-mis-reflect-only-one-vertex',
      hint: 'Swap (3, 1) to (1, 3), then negate both to (-1, -3). The y value of the image is -3.',
    },
    // Confident 5: Missing-step — fill in the gap when reflecting in y = -x
    {
      id: 'cra-q12',
      type: 'missing-step',
      stem: 'Fill in the missing step. Sam reflects the point (-2, 3) in y = -x.',
      tier: 'confident',
      steps: [
        'Recall the rule for y = -x: swap the x and y values, then change the sign of both.',
        'The point is (-2, 3). Swap the values to get (3, -2).',
        null,
        'So the image is (-3, 2). The point sits on the opposite side of y = -x, the same perpendicular distance away.',
      ],
      missingStepIndex: 2,
      correctStep: 'Change the sign of both coordinates of (3, -2): the 3 becomes -3 and the -2 becomes 2.',
      xpValue: 20,
    },
    // Confident 6: MCQ — identify the mirror line from before-and-after
    {
      id: 'cra-q13',
      type: 'multiple-choice',
      stem: 'A pattern designer in Sevenoaks reflects the point (5, 2) and gets the image (2, 5). Which mirror line did she use?',
      tier: 'confident',
      options: ['y = x', 'The x axis', 'The y axis', 'y = -x'],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'cra-mis-mirror-line-misread',
      hint: 'The coordinates have swapped but no signs have changed. That is the rule for y = x.',
    },
    // Confident 7: Drag-order — steps to identify the mirror line
    {
      id: 'cra-q14',
      type: 'drag-order',
      stem: 'A point P maps to its image P prime under one of the four mirror lines. Drag the checks into a sensible order for working out which mirror was used.',
      tier: 'confident',
      items: [
        'If exactly one coordinate has flipped sign, the mirror was the x axis (y flipped) or the y axis (x flipped).',
        'Read the coordinates of P and P prime side by side.',
        'If the coordinates have swapped, decide whether the signs have also changed.',
        'If they have swapped without sign changes, it is y = x; if they have swapped AND both flipped sign, it is y = -x.',
      ],
      correctOrder: [1, 0, 2, 3],
      xpValue: 20,
    },
    // Confident 8: Numeric — composite check
    {
      id: 'cra-q15',
      type: 'numeric-entry',
      stem: 'The point (6, 0) is reflected in the line y = -x. What is the x value of the image?',
      tier: 'confident',
      correctAnswer: 0,
      xpValue: 15,
      hint: 'Swap (6, 0) to (0, 6), then negate both to (0, -6). The x value of the image is 0.',
    },
    // Challenge 1: MCQ — Bond 11+ multi-step word problem with pattern context
    {
      id: 'cra-q16',
      type: 'multiple-choice',
      stem: 'A textile designer in Tunbridge Wells lays a triangular motif on a coordinate grid with vertices at P(2, 1), Q(5, 1), R(5, 4). To finish a symmetric border, she reflects the motif in the line y = x and then reads off the new corner that is furthest from the origin. What are its coordinates?',
      tier: 'challenge',
      options: ['(5, 4)', '(4, 5)', '(-4, -5)', '(1, 2)'],
      correctIndex: 1,
      xpValue: 25,
      hint: 'Reflect each vertex by swapping coordinates. P(2,1) goes to (1, 2), Q(5, 1) goes to (1, 5), R(5, 4) goes to (4, 5). The image of R is furthest from the origin.',
    },
    // Challenge 2: Numeric — Bond-style problem with a square
    {
      id: 'cra-q17',
      type: 'numeric-entry',
      stem: 'A square has vertices A(1, 2), B(4, 2), C(4, 5), D(1, 5). The square is reflected in y = -x. Find the sum of the four x values of the image vertices.',
      tier: 'challenge',
      correctAnswer: -14,
      xpValue: 25,
      hint: 'Image vertices: A goes to (-2, -1), B goes to (-2, -4), C goes to (-5, -4), D goes to (-5, -1). Sum of x values: -2 + -2 + -5 + -5 = -14.',
    },
    // Challenge 3: MCQ — composition of two reflections
    {
      id: 'cra-q18',
      type: 'multiple-choice',
      stem: 'The point (3, 5) is first reflected in y = x and then the image is reflected in y = -x. What are the final coordinates?',
      tier: 'challenge',
      options: ['(3, -5)', '(-3, -5)', '(5, 3)', '(-5, -3)'],
      correctIndex: 1,
      xpValue: 25,
      hint: 'First reflection: (3, 5) goes to (5, 3). Second reflection in y = -x: swap to (3, 5), then negate both to (-3, -5).',
    },
    // Challenge 4: Numeric — identify the mirror line numerically
    {
      id: 'cra-q19',
      type: 'numeric-entry',
      stem: 'A point P(a, b) is reflected in one of y = x or y = -x. The image is (4, -2). The original P was (-2, 4). The pupil records the mirror line as y = kx, where k is either 1 or -1. What is the value of k?',
      tier: 'challenge',
      correctAnswer: -1,
      xpValue: 25,
      hint: 'Swap (-2, 4) to (4, -2). The signs did not change. Wait, check: swapping (-2, 4) gives (4, -2) directly under y = x, but the signs of the original were (-, +) and the image is (+, -). The signs have flipped, so this is y = -x and k = -1.',
    },
    // Challenge 5: Spot-misconception — Bond-style with confused rule
    {
      id: 'cra-q20',
      type: 'spot-misconception',
      stem: 'A pupil reflects (4, 1) in y = -x and writes the image as (1, 4). They explain that y = -x always swaps coordinates the same way y = x does.',
      tier: 'challenge',
      statements: [
        {
          text: 'The pupil is right. y = -x and y = x are both oblique 45 degree lines, so the rule for each is to swap the coordinates.',
          isMisconception: true,
        },
        {
          text: 'In fact y = x swaps only, but y = -x swaps AND flips the sign of both new coordinates. So (4, 1) reflects in y = -x to (-1, -4), not (1, 4). The minus sign in y = -x is doing extra work.',
          isMisconception: false,
        },
      ],
      xpValue: 25,
      misconceptionId: 'cra-mis-oblique-as-same-rule',
    },
    // Challenge 6: MCQ — Bond 11+ symmetry puzzle, full vertex set
    {
      id: 'cra-q21',
      type: 'multiple-choice',
      stem: 'A triangle has vertices L(-2, 1), M(0, 4), N(3, 1). The triangle is reflected in y = -x to form a new triangle L prime M prime N prime. Which row gives the three image vertices in the correct order?',
      tier: 'challenge',
      options: [
        '(-1, 2), (-4, 0), (-1, -3)',
        '(1, -2), (4, 0), (1, 3)',
        '(2, 1), (0, -4), (-3, 1)',
        '(-2, -1), (-4, 0), (-3, 1)',
      ],
      correctIndex: 0,
      xpValue: 25,
      misconceptionId: 'cra-mis-reflect-only-one-vertex',
      hint: 'Apply the rule (a, b) goes to (-b, -a) to each vertex. L(-2, 1) goes to (-1, 2). M(0, 4) goes to (-4, 0). N(3, 1) goes to (-1, -3).',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 2H (Higher, Calculator), commentary on a reflection question where pupils swapped coordinates correctly for y = x but did not change signs when the mirror line was y = -x.
    {
      id: 'cra-mis-forgot-negation-in-y-minus-x',
      description:
        'I think reflection in y = -x just swaps the coordinates, the same way y = x does, so (2, 5) becomes (5, 2) instead of (-5, -2).',
      triggerAnswer: 'forgot-negation-in-y-minus-x',
      correction:
        'Actually y = -x swaps the coordinates AND changes the sign of both new values. The minus sign in the equation tells you to negate.',
      reExplanation:
        'For (2, 5) reflected in y = -x, first swap to get (5, 2), then change the sign of each: (-5, -2). The y = x rule stops at the swap; y = -x adds a sign flip on both numbers. A quick check is to sketch: y = -x slopes down through the origin, and the reflected point should sit on the opposite side of it.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 2H (Higher, Calculator), commentary on a reflection question where pupils changed the sign of one coordinate but did not swap the order, mixing the y = -x rule with an axis-line rule.
    {
      id: 'cra-mis-swap-sign-not-order',
      description:
        'I think reflection in y = x flips the sign of one coordinate, not swap the order, so (-4, 1) becomes (4, 1) instead of (1, -4).',
      triggerAnswer: 'swap-sign-not-order',
      correction:
        'In fact reflection in y = x swaps the order of the coordinates. No sign changes. Flipping the sign of one coordinate is an axis-line reflection, which is a different mirror.',
      reExplanation:
        'For (-4, 1) reflected in y = x, the rule is (a, b) goes to (b, a). So (-4, 1) becomes (1, -4): the 1 moves into the x slot, and the -4 moves into the y slot, keeping its sign. Reflecting in the y axis would flip the x sign to give (4, 1), but that is a different mirror line. Always check which mirror the question asks for before applying any rule.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 7 Geometry, "Reflections" page, "Common mistake" callout warning that y = x is a 45 degree line through the origin, not a horizontal one.
    {
      id: 'cra-mis-y-equals-x-as-axis',
      description:
        'I treat y = x as the same thing as the x axis (a horizontal line), so I reflect a point (2, 5) in y = x by flipping the y value to give (2, -5).',
      triggerAnswer: 'y-equals-x-as-axis',
      correction:
        'Actually y = x is a 45 degree line through the origin. It passes through (0, 0), (1, 1), (2, 2). It is not horizontal.',
      reExplanation:
        'The x axis is the line y = 0 (a horizontal line where y is always 0). The line y = x is different: it has slope 1, so it climbs as you move right. Reflecting (2, 5) in y = x swaps the coordinates to (5, 2). Reflecting in the x axis flips the y value to (2, -5). The two mirrors give different images. The name of the line tells you the rule.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 04 (Higher, Calculator), commentary on a reflection question where pupils correctly negated the image coordinates but failed to swap the order, treating y = -x as a single sign flip.
    {
      id: 'cra-mis-swap-only-in-y-minus-x',
      description:
        'I think reflection in y = -x just negates both coordinates without swapping, so (4, 1) becomes (-4, -1) instead of (-1, -4).',
      triggerAnswer: 'swap-only-in-y-minus-x',
      correction:
        'In fact y = -x does both: swap the coordinates AND negate both new values. Negating without swapping is a 180 degree rotation about the origin, which is a different transformation.',
      reExplanation:
        'For (4, 1) reflected in y = -x, first swap to (1, 4), then negate both to (-1, -4). Negating only, with no swap, sends (4, 1) to (-4, -1), which is the image under a 180 degree rotation about the origin. The two transformations are easy to mix up because both change both signs, but only one also swaps the order. Always apply both steps for y = -x.',
    },
    // Source: NCETM Secondary Magazine, Issue 132, "Transformations of Shapes" article, citing pupil work that reflected only the labelled vertex of a shape in y = x and left the other vertices in their original positions.
    {
      id: 'cra-mis-reflect-only-one-vertex',
      description:
        'I reflect a shape by moving only one vertex under the rule and leaving the other vertices where they are.',
      triggerAnswer: 'reflect-only-one-vertex',
      correction:
        'Actually a reflection moves every vertex under the same rule. The whole shape lands on the far side of the mirror line; no vertex stays still unless it sits on the mirror.',
      reExplanation:
        'For a triangle with vertices (1, 2), (4, 2), (4, 5) reflected in y = x, every vertex must be swapped: the image vertices are (2, 1), (2, 4), (5, 4). If you only swap the labelled vertex, the result is not a triangle congruent to the original. Apply the rule to each vertex in turn, write the image triangle, then join the vertices in the same order.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 2H (Higher, Calculator), commentary on a reflection question where pupils selected the wrong mirror line from the four options (x axis, y axis, y = x, y = -x) when reading from an image.
    {
      id: 'cra-mis-mirror-line-misread',
      description:
        'When I read a before-and-after picture, I pick the wrong mirror line: I see swapped coordinates and assume y = x even when the signs have also flipped (which is y = -x).',
      triggerAnswer: 'mirror-line-misread',
      correction:
        'In fact you have to check both the order AND the signs. Swap-only means y = x. Swap-and-flip-both-signs means y = -x.',
      reExplanation:
        'For (5, 2) mapping to (2, 5), the coordinates swap and no signs change. That is y = x. For (5, 2) mapping to (-2, -5), the coordinates swap AND both signs flip. That is y = -x. A quick checklist: have the values swapped? have the signs changed? Match that to the table of four mirror lines.',
    },
    // Authored, no external source: classroom-observed slip where pupils confuse y = x reflection with the y = -x rule because they read the equations as both meaning "the line at 45 degrees" without distinguishing the slope direction.
    {
      id: 'cra-mis-oblique-as-same-rule',
      description:
        'I think y = x and y = -x are different names for the same 45 degree line, so the reflection rule must be the same for both.',
      triggerAnswer: 'oblique-as-same-rule',
      correction:
        'Actually the two lines have opposite slopes. y = x slopes up from bottom left to top right; y = -x slopes down from top left to bottom right. The reflection rule differs by a sign flip on both coordinates.',
      reExplanation:
        'Sketch the two lines. y = x passes through (1, 1), (2, 2), (3, 3); y = -x passes through (1, -1), (2, -2), (3, -3). They cross only at the origin, at right angles. Reflecting (2, 5) in y = x gives (5, 2); reflecting (2, 5) in y = -x gives (-5, -2). The two images differ by the sign flip, which is the only rule difference.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const coordinatesReflectionsAxesZoneNodes = [coordinatesReflectionsAxes]
