import type { SkillNode } from '@/types/content'

export const coordinatesMidpoints: SkillNode = {
  id: 'maths-coordinates-midpoints',
  title: 'Midpoint of a Line Segment',
  description:
    'Find the coordinates of the midpoint of a line segment given its two endpoints, in any of the four quadrants. The recipe is to average the x values and average the y values separately. Also work backwards to recover an unknown endpoint when the midpoint and one endpoint are given.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-coordinates',
  zoneName: 'Coordinates',
  tier: 'confident',
  prerequisites: ['maths-coordinates-grid'],
  curriculum: {
    ks3Objective:
      'Find the coordinates of the midpoint of a line segment given two endpoints in all four quadrants.',
    awardingBodies: {
      aqa: 'G11 Find the coordinates of the midpoint of a line segment (GCSE Mathematics 8300)',
      edexcel:
        'G11 Find the midpoint of a line segment from coordinates of its endpoints (GCSE Mathematics 1MA1)',
      ocr: '7.02b Find the midpoint of a line segment in all four quadrants (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'cm-scene-grid-midpoint',
      title: 'A Midpoint on a Four Quadrant Grid',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to reveal what it shows. The line segment joins A(-2, -1) and B(6, 5). The midpoint M sits exactly halfway along the segment. To find it, average the x values: (-2 + 6) divided by 2 = 2. Average the y values: (-1 + 5) divided by 2 = 2. So M = (2, 2). Notice how M is the same distance from A as it is from B, measured along the segment.',
      data: {
        viewBox: '0 0 100 100',
        hotspots: [
          {
            id: 'cm-h-a',
            x: 20,
            y: 70,
            label: 'A(-2, -1)',
            description: 'The first endpoint of the segment.',
          },
          {
            id: 'cm-h-b',
            x: 80,
            y: 25,
            label: 'B(6, 5)',
            description: 'The second endpoint of the segment.',
          },
          {
            id: 'cm-h-m',
            x: 50,
            y: 47,
            label: 'M(2, 2)',
            description:
              'The midpoint. Its x is the average of -2 and 6; its y is the average of -1 and 5.',
          },
          {
            id: 'cm-h-x-average',
            x: 50,
            y: 92,
            label: 'x average: (-2 + 6) / 2 = 2',
            description: 'The midpoint x is the mean of the two endpoint x values.',
          },
          {
            id: 'cm-h-y-average',
            x: 8,
            y: 47,
            label: 'y average: (-1 + 5) / 2 = 2',
            description: 'The midpoint y is the mean of the two endpoint y values.',
          },
          {
            id: 'cm-h-equal-halves',
            x: 35,
            y: 58,
            label: 'AM = MB',
            description:
              'The midpoint splits the segment into two equal halves. A to M is the same length as M to B.',
          },
        ],
      },
    },
    {
      id: 'cm-scene-recipe',
      title: 'The Recipe: Average Each Coordinate',
      type: 'diagram',
      instructions:
        'Read the recipe in three steps. For endpoints (x1, y1) and (x2, y2): step one is to add x1 and x2 and halve the total; step two is to add y1 and y2 and halve the total; step three is to write the answer as the pair (midpoint x, midpoint y). The two halvings happen separately. The x of the midpoint never depends on the y values, and the y of the midpoint never depends on the x values.',
      data: {
        formula: 'midpoint = ((x1 + x2) / 2, (y1 + y2) / 2)',
        steps: [
          {
            label: 'Step 1: average the x values',
            example: '(2 + 8) / 2 = 5',
          },
          {
            label: 'Step 2: average the y values',
            example: '(3 + 7) / 2 = 5',
          },
          {
            label: 'Step 3: write the pair',
            example: 'midpoint = (5, 5)',
          },
        ],
        callout:
          'Halve only once on each line. A common slip is to halve the sum and then halve again, which is the same as dividing by four. Always divide by two, not by four.',
      },
    },
    {
      id: 'cm-scene-working-backwards',
      title: 'Working Backwards: Find a Missing Endpoint',
      type: 'diagram',
      instructions:
        'Look at how the same recipe runs in reverse. Suppose M(5, 4) is the midpoint of segment AB and A is (3, 1). To find B, double the midpoint and subtract the known endpoint. The x of B is 2 times 5 minus 3, giving 7. The y of B is 2 times 4 minus 1, giving 7. So B = (7, 7). Check by averaging A and B: (3 + 7) / 2 = 5 and (1 + 7) / 2 = 4. The midpoint matches.',
      data: {
        rule: 'B = (2 * midpoint_x - A_x, 2 * midpoint_y - A_y)',
        worked: {
          midpoint: { x: 5, y: 4 },
          knownEndpoint: { label: 'A', x: 3, y: 1 },
          missingEndpoint: { label: 'B', x: 7, y: 7 },
          check: '(3 + 7) / 2 = 5 and (1 + 7) / 2 = 4. Matches the given midpoint.',
        },
        commonSlip:
          'A common slip is to subtract the wrong way around: A minus 2 times midpoint, giving the negative answer. Always double the midpoint first, then subtract the known endpoint.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'cm-worked-1',
      title: 'Find the midpoint of (2, 3) and (8, 7)',
      steps: [
        {
          explanation: 'Identify the two endpoints and label them clearly.',
          maths: 'A = (2, 3), B = (8, 7)',
        },
        {
          explanation: 'Average the x values: add the two x values and halve the total.',
          maths: '(2 + 8) / 2 = 10 / 2 = 5',
        },
        {
          explanation: 'Average the y values: add the two y values and halve the total.',
          maths: '(3 + 7) / 2 = 10 / 2 = 5',
        },
        {
          explanation: 'Write the midpoint as an ordered pair, x first.',
          maths: 'midpoint = (5, 5)',
        },
        {
          explanation:
            'Check by sketching. The midpoint sits halfway between (2, 3) and (8, 7), at the same distance from each.',
        },
      ],
    },
    {
      id: 'cm-worked-2',
      title: 'Find endpoint B given midpoint (5, 4) and endpoint A(3, 1)',
      steps: [
        {
          explanation:
            'Write what you know. The midpoint M is (5, 4) and one endpoint A is (3, 1). The other endpoint B has unknown coordinates.',
          maths: 'M = (5, 4), A = (3, 1)',
        },
        {
          explanation:
            'Use the midpoint rule in reverse. Since M_x is the average of A_x and B_x, doubling M_x and subtracting A_x gives B_x.',
          maths: 'B_x = 2 * 5 - 3',
        },
        {
          explanation: 'Work out B_x.',
        },
        {
          explanation: 'Do the same for B_y: double M_y and subtract A_y.',
          maths: 'B_y = 2 * 4 - 1 = 7',
        },
        {
          explanation: 'Combine into a coordinate pair.',
          maths: 'B = (7, 7)',
        },
        {
          explanation:
            'Check by averaging A and B: (3 + 7) / 2 = 5 and (1 + 7) / 2 = 4. The midpoint matches, so B = (7, 7) is correct.',
        },
      ],
    },
  ],
  questions: [
    // Core 1
    {
      id: 'cm-q1',
      type: 'multiple-choice',
      stem: 'A line segment has endpoints (0, 0) and (4, 6). What are the coordinates of its midpoint?',
      tier: 'core',
      options: ['(4, 6)', '(0, 3)', '(2, 3)', '(2, 6)'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Average the x values: (0 + 4) / 2. Average the y values: (0 + 6) / 2.',
    },
    // Core 2
    {
      id: 'cm-q2',
      type: 'numeric-entry',
      stem: 'A line segment joins (2, 4) and (8, 10). What is the x value of its midpoint?',
      tier: 'core',
      correctAnswer: 5,
      xpValue: 10,
      hint: 'Add the two x values and halve the total: (2 + 8) / 2.',
    },
    // Core 3
    {
      id: 'cm-q3',
      type: 'multiple-choice',
      stem: 'To find the midpoint of two endpoints, which calculation do you do for each coordinate?',
      tier: 'core',
      options: [
        'Add the two values and divide by 2',
        'Subtract the smaller value from the larger',
        'Add the two values and divide by 4',
        'Multiply the two values and divide by 2',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'cm-mis-divide-by-four',
      hint: 'The midpoint is the average. To average two numbers, add them and halve the total.',
    },
    // Core 4
    {
      id: 'cm-q4',
      type: 'multiple-choice',
      stem: 'A line segment has endpoints (1, 3) and (5, 7). What are the coordinates of its midpoint?',
      tier: 'core',
      options: ['(3, 5)', '(6, 10)', '(4, 4)', '(2, 5)'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'cm-mis-skip-halving',
      hint: 'Halve the sum (1 + 5) for the x and halve the sum (3 + 7) for the y.',
    },
    // Core 5
    {
      id: 'cm-q5',
      type: 'multiple-choice',
      stem: 'A line segment joins (2, 2) and (6, 8). What is its midpoint?',
      tier: 'core',
      options: ['(8, 10)', '(2, 3)', '(4, 6)', '(4, 5)'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Average the x values: (2 + 6) / 2 = 4. Average the y values: (2 + 8) / 2 = 5.',
    },
    // Core 6
    {
      id: 'cm-q6',
      type: 'spot-misconception',
      stem: 'Liam wants the midpoint of (4, 6) and (10, 2). He writes the midpoint as ((10 - 4) / 2, (6 - 2) / 2) = (3, 2).',
      tier: 'core',
      statements: [
        {
          text: 'Liam is right. The midpoint formula uses the differences of the coordinates.',
          isMisconception: true,
        },
        {
          text: 'In fact the midpoint formula adds the coordinates and halves the total. (4 + 10) / 2 = 7 and (6 + 2) / 2 = 4, so the midpoint is (7, 4).',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cm-mis-subtract-instead-of-add',
    },
    // Core 7
    {
      id: 'cm-q7',
      type: 'numeric-entry',
      stem: 'A line segment joins (3, 5) and (7, 9). What is the x value of its midpoint?',
      tier: 'core',
      correctAnswer: 5,
      xpValue: 10,
      hint: '(3 + 7) / 2 gives the x of the midpoint.',
    },
    // Confident 1
    {
      id: 'cm-q8',
      type: 'multiple-choice',
      stem: 'A line segment has endpoints (-4, 2) and (6, -4). What are the coordinates of its midpoint?',
      tier: 'confident',
      options: ['(-1, 1)', '(1, -1)', '(2, -1)', '(5, -3)'],
      correctIndex: 1,
      xpValue: 15,
      hint: 'For the x: (-4 + 6) / 2. For the y: (2 + (-4)) / 2. Mind the signs.',
    },
    // Confident 2
    {
      id: 'cm-q9',
      type: 'numeric-entry',
      stem: 'A line segment joins (-3, -5) and (5, 1). What is the y value of its midpoint?',
      tier: 'confident',
      correctAnswer: -2,
      xpValue: 15,
      hint: 'Add the two y values: -5 + 1 = -4. Then halve.',
    },
    // Confident 3
    {
      id: 'cm-q10',
      type: 'multiple-choice',
      stem: 'A segment runs from P(-6, 4) in quadrant 2 to Q(2, -8) in quadrant 4. What is the midpoint of PQ?',
      tier: 'confident',
      options: ['(-4, -2)', '(-2, 2)', '(-2, -2)', '(2, -2)'],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'cm-mis-only-one-axis',
      hint: 'Average both coordinates separately. (-6 + 2) / 2 = -2 and (4 + (-8)) / 2 = -2.',
    },
    // Confident 4
    {
      id: 'cm-q11',
      type: 'drag-order',
      stem: 'Drag the steps for finding the midpoint of two endpoints into the correct order.',
      tier: 'confident',
      items: [
        'Write the result as an ordered pair, x value first.',
        'Identify the two endpoint coordinates as (x1, y1) and (x2, y2).',
        'Add the two x values and divide the total by 2 to get the midpoint x.',
        'Add the two y values and divide the total by 2 to get the midpoint y.',
      ],
      correctOrder: [1, 2, 3, 0],
      xpValue: 20,
      hint: 'Sort out which coordinate is which before doing any arithmetic, then handle x and y separately.',
    },
    // Confident 5
    {
      id: 'cm-q12',
      type: 'missing-step',
      stem: 'Fill in the missing step. Aisha is finding the midpoint of A(-2, 3) and B(4, 7).',
      tier: 'confident',
      steps: [
        'Identify the endpoints: A = (-2, 3) and B = (4, 7).',
        'Average the x values: (-2 + 4) / 2 = 2 / 2 = 1.',
        null,
        'Write the midpoint as the pair (1, 5).',
      ],
      missingStepIndex: 2,
      correctStep: 'Average the y values: (3 + 7) / 2 = 10 / 2 = 5.',
      xpValue: 20,
    },
    // Confident 6
    {
      id: 'cm-q13',
      type: 'numeric-entry',
      stem: 'A line segment joins (1, 4) and (4, 7). What is the x value of its midpoint?',
      tier: 'confident',
      correctAnswer: 2.5,
      tolerance: 0.01,
      xpValue: 15,
      hint: 'Add the two x values: 1 + 4 = 5. Halve to get the midpoint x. The answer is a decimal.',
      misconceptionId: 'cm-mis-decimal-off-by-one',
    },
    // Confident 7
    {
      id: 'cm-q14',
      type: 'multiple-choice',
      stem: 'A line segment has endpoints (3, 2) and (6, 5). What is its midpoint?',
      tier: 'confident',
      options: ['(4, 3)', '(3, 3)', '(4.5, 4)', '(4.5, 3.5)'],
      correctIndex: 3,
      xpValue: 15,
      hint: '(3 + 6) / 2 = 4.5 and (2 + 5) / 2 = 3.5. Both coordinates have a half in them.',
      misconceptionId: 'cm-mis-decimal-off-by-one',
    },
    // Confident 8
    {
      id: 'cm-q15',
      type: 'spot-misconception',
      stem: 'Maya wants the midpoint of (2, 8) and (10, 8). She averages only the x values and writes the midpoint as (6, 8). She says the y is already the same in both endpoints, so she only needs to halve the x.',
      tier: 'confident',
      statements: [
        {
          text: 'Maya is right by accident here, but her method is wrong: she should always average both coordinates separately, even when they happen to match.',
          isMisconception: false,
        },
        {
          text: 'Maya is right and her shortcut works in general: when one coordinate is the same in both endpoints, you only need to average the other.',
          isMisconception: true,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cm-mis-only-one-axis',
    },
    // Challenge 1
    {
      id: 'cm-q16',
      type: 'numeric-entry',
      stem: 'The midpoint of segment AB is M(5, 4) and endpoint A is (3, 1). What is the x value of endpoint B?',
      tier: 'challenge',
      correctAnswer: 7,
      xpValue: 25,
      hint: 'Double the midpoint x and subtract the known endpoint x: 2 * 5 - 3.',
      misconceptionId: 'cm-mis-reverse-wrong-sign',
    },
    // Challenge 2
    {
      id: 'cm-q17',
      type: 'multiple-choice',
      stem: 'The midpoint of segment AB is M(-1, 2) and endpoint A is (3, -4). Where is endpoint B?',
      tier: 'challenge',
      options: ['(-5, 8)', '(5, -8)', '(2, -1)', '(-4, 6)'],
      correctIndex: 0,
      xpValue: 25,
      hint: 'B_x = 2 * (-1) - 3 = -5. B_y = 2 * 2 - (-4) = 8. Mind the double negative on the y.',
      misconceptionId: 'cm-mis-reverse-wrong-sign',
    },
    // Challenge 3 (Bond-style word problem)
    {
      id: 'cm-q18',
      type: 'multiple-choice',
      stem: 'A treasure-hunt map of a park in Sevenoaks marks the oak tree at (-3, 4) and the fountain at (7, -2). The clue says the treasure is buried at the midpoint of the line from the oak to the fountain. The map also marks a bin at (2, 1). Is the bin sitting on the treasure spot?',
      tier: 'challenge',
      options: [
        'No, the treasure is at (5, 3).',
        'Yes, the treasure is at the bin.',
        'No, the treasure is at (2, 1) but the bin is at (5, 1).',
        'No, the treasure is at (-3, 1).',
      ],
      correctIndex: 1,
      xpValue: 25,
      hint: 'Find the midpoint of (-3, 4) and (7, -2), then compare the result to the bin at (2, 1).',
    },
    // Challenge 4 (Bond-style word problem with intermediate step)
    {
      id: 'cm-q19',
      type: 'numeric-entry',
      stem: 'On a school playground grid, the goalpost stands at (-4, -2) and the netball hoop stands at (8, 6). A cone sits at the midpoint of the line joining them. A second cone is then placed at the midpoint of the line from the goalpost to the first cone. What is the x value of the second cone?',
      tier: 'challenge',
      correctAnswer: -1,
      xpValue: 25,
      hint: 'First midpoint x: (-4 + 8) / 2 = 2. Second midpoint x: (-4 + 2) / 2 = -1.',
    },
    // Challenge 5
    {
      id: 'cm-q20',
      type: 'multiple-choice',
      stem: 'A line segment has endpoints (-2, 5) and (6, -3). A pupil reads the midpoint off the grid as (2, 1) instead of computing it. What is the correct midpoint?',
      tier: 'challenge',
      options: ['(2, 1.5)', '(2, 1)', '(4, 2)', '(-4, 8)'],
      correctIndex: 0,
      xpValue: 25,
      hint: '(-2 + 6) / 2 = 2 and (5 + (-3)) / 2 = 1. Watch out: the y value here is 1, not 1.5. Compute carefully and double-check the sign.',
      misconceptionId: 'cm-mis-read-from-grid',
    },
    // Challenge 6 (Bond multi-step)
    {
      id: 'cm-q21',
      type: 'numeric-entry',
      stem: 'A UK road map shows a road junction at (-2, -6) and a service station at (10, 2). A petrol pump sits at the midpoint of the road between them. What is the y value of the petrol pump?',
      tier: 'challenge',
      correctAnswer: -2,
      xpValue: 25,
      hint: 'Average the two y values: (-6 + 2) / 2.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a midpoint question where pupils subtracted the coordinates instead of adding them before halving.
    {
      id: 'cm-mis-subtract-instead-of-add',
      description:
        'I think the midpoint formula uses the difference of the two coordinates, so I subtracted x1 from x2 and halved.',
      triggerAnswer: 'subtract-instead-of-add',
      correction:
        'In fact the midpoint averages the two coordinates: add them and halve. Subtracting gives the gap between the points, not the midpoint.',
      reExplanation:
        'For (4, 6) and (10, 2) the midpoint x is (4 + 10) / 2 = 7, not (10 - 4) / 2 = 3. Adding then halving gives the average of the two values. Subtracting then halving gives half the gap between them, which has nothing to do with the midpoint.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a midpoint question where pupils averaged only one coordinate and copied the other across from one of the endpoints.
    {
      id: 'cm-mis-only-one-axis',
      description:
        'I averaged the x values but copied the y value straight across from one endpoint, treating the formula as a one-coordinate rule.',
      triggerAnswer: 'only-one-axis',
      correction:
        'In fact the midpoint averages both coordinates separately. Even when the y values look similar, work through the formula for the y too.',
      reExplanation:
        'For (-6, 4) and (2, -8) the midpoint x is (-6 + 2) / 2 = -2, and the midpoint y is (4 + (-8)) / 2 = -2. Skipping the y average and writing 4 or -8 instead of -2 puts the point on the wrong horizontal line. Always average both coordinates, every time.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2022, Paper 01 (Foundation, Non-calculator), commentary on a midpoint question where pupils divided the sum of the coordinates by 4 instead of by 2.
    {
      id: 'cm-mis-divide-by-four',
      description:
        'I think you divide the sum of the two coordinates by 4 because there are two numbers in each pair.',
      triggerAnswer: 'divide-by-four',
      correction:
        'Actually the midpoint divides each sum by 2, not by 4. You are averaging two numbers, so halve once.',
      reExplanation:
        'For (2, 4) and (6, 8) the sum of the x values is 8. Halving gives 4 (the midpoint x). Dividing by 4 would give 2, which sits at the same place as the smaller endpoint, not halfway along. The two in "average of two numbers" tells you to divide by two, not by four.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Coordinates section, "Common mistake" callout on midpoints with odd sums, warning that the midpoint coordinate is a decimal and pupils often round to the nearest whole number.
    {
      id: 'cm-mis-decimal-off-by-one',
      description:
        'When the sum of two coordinates is odd I round the midpoint to a whole number rather than writing it as a decimal.',
      triggerAnswer: 'decimal-off-by-one',
      correction:
        'In fact the midpoint can be a decimal (like 2.5 or 3.5), and that is the right answer. Do not round to a whole number.',
      reExplanation:
        'For (1, 4) and (4, 7) the midpoint x is (1 + 4) / 2 = 2.5 and the midpoint y is (4 + 7) / 2 = 5.5. The point (2.5, 5.5) sits between gridlines on the grid, which is fine. Rounding it to (2, 5) or (3, 6) shifts the point off the segment.',
    },
    // Source: NCETM Secondary Magazine, Issue 158, "From the Library" article on coordinate geometry, citing pupil work that read midpoints by eye off a sketched grid rather than computing them, leading to systematic errors when the segment did not align with gridlines.
    {
      id: 'cm-mis-read-from-grid',
      description:
        'I read the midpoint off the grid by eye instead of computing it, so my answer is the nearest gridline rather than the true midpoint.',
      triggerAnswer: 'read-from-grid',
      correction:
        'In fact the midpoint must be computed from the two endpoints. Reading by eye drifts to the nearest gridline and misses any fractional part.',
      reExplanation:
        'For (-2, 5) and (6, -3) the midpoint is ((-2 + 6) / 2, (5 + (-3)) / 2) = (2, 1). On a sketched grid the segment may pass close to (2, 1.5) or (1, 1), and a glance by eye can land on the wrong gridline. Always do the two averages on paper, even when the grid looks easy.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a "find the other endpoint" question where pupils reversed the subtraction and produced answers with the wrong sign.
    {
      id: 'cm-mis-reverse-wrong-sign',
      description:
        'When I worked backwards from a midpoint to find a missing endpoint, I subtracted the doubled midpoint from the known endpoint, instead of subtracting the known endpoint from the doubled midpoint.',
      triggerAnswer: 'reverse-wrong-sign',
      correction:
        'Actually the rule is: missing endpoint = 2 times midpoint minus known endpoint. The known endpoint is subtracted at the end, not at the start.',
      reExplanation:
        'For midpoint (5, 4) and known endpoint A(3, 1), endpoint B has B_x = 2 * 5 - 3 = 7 and B_y = 2 * 4 - 1 = 7. Reversing to 3 - 2 * 5 = -7 produces the wrong sign and puts B on the wrong side of A. Check by averaging: (3 + 7) / 2 = 5 matches the midpoint.',
    },
    // Authored, no external source
    {
      id: 'cm-mis-skip-halving',
      description:
        'I added the two x values and the two y values and wrote that pair as the midpoint, forgetting to halve.',
      triggerAnswer: 'skip-halving',
      correction:
        'In fact the midpoint averages each pair: add then halve. The sum alone is not the midpoint.',
      reExplanation:
        'For (1, 3) and (5, 7) the sum is (6, 10). The midpoint is half of each: (3, 5). The pair (6, 10) sits far past the second endpoint, not between the two. Always halve after adding, on both x and y.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const coordinatesMidpointsZoneNodes = [coordinatesMidpoints]
