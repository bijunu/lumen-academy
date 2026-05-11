import type { SkillNode } from '@/types/content'

export const perimeter: SkillNode = {
  id: 'maths-geometry-measure-perimeter',
  title: 'Perimeter of Rectangles and Composite Shapes',
  description:
    'Find the perimeter of a rectangle as 2 x (length + width), and the perimeter of an L-shape or T-shape composite by walking the outline edge by edge. Distinguish perimeter (distance around the edge, in cm or m) from area (surface inside, in cm squared or m squared). Solve "missing-side" Bond classics where one side has to be deduced from the others before adding.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-geometry-measure',
  zoneName: 'Geometry and Measure',
  tier: 'core',
  prerequisites: ['maths-geometry-measure-area-rectangles'],
  curriculum: {
    ks3Objective:
      'Derive and apply formulae to calculate and solve problems involving: perimeter and area of triangles, parallelograms, trapezia; calculate and solve problems involving: perimeters of 2-D shapes (including circles), areas of circles and composite shapes.',
    awardingBodies: {
      aqa: 'G17 Calculate perimeters of 2D shapes, including circles (GCSE Mathematics 8300)',
      edexcel: 'G17 Calculate perimeters of 2D shapes, including circles (GCSE Mathematics 1MA1)',
      ocr: '10.02a Perimeter of rectilinear shapes (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'pe-scene-rectangle-walk',
      title: 'Walk the Edge of a Rectangle',
      type: 'diagram',
      instructions:
        'Trace the edge of the 5 m by 3 m rectangle starting at the bottom-left corner. Walk 5 m right, 3 m up, 5 m left, 3 m down, back to the start. Total distance walked = 5 + 3 + 5 + 3 = 16 m. The shortcut is 2 x (5 + 3) = 16 m, because each pair of opposite sides has the same length. The unit is metres, not metres squared, because perimeter is a length.',
      data: {
        rectangle: { length: 5, width: 3, lengthUnit: 'm' },
        edges: [
          { from: 'A', to: 'B', length: 5, direction: 'right' },
          { from: 'B', to: 'C', length: 3, direction: 'up' },
          { from: 'C', to: 'D', length: 5, direction: 'left' },
          { from: 'D', to: 'A', length: 3, direction: 'down' },
        ],
        formulaShortcut: 'P = 2 x (length + width) = 2 x (5 + 3) = 16 m',
        callout:
          'Always check whether you have included both pairs of opposite sides. The half-perimeter (length + width = 8 m) is a common slip.',
      },
    },
    {
      id: 'pe-scene-l-shape-missing-side',
      title: 'Find a Missing Side on an L-shape',
      type: 'labelled-diagram',
      instructions:
        'Click each side of the L-shape garden in turn. The labelled sides reading clockwise from the top-left are 6 m, 3 m, 4 m, 5 m, then two unlabelled sides at the bottom-left. Click each unlabelled side to see how the missing lengths come from the labelled ones. The bottom side measures 6 + 4 = 10 m and the left side measures 3 + 5 = 8 m. Total perimeter = 6 + 3 + 4 + 5 + 10 + 8 = 36 m of fencing.',
      data: {
        viewBox: '0 0 320 240',
        svg:
          '<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg">' +
          '<polyline points="40,40 220,40 220,100 280,100 280,200 40,200 40,40" fill="#cfe7ff" stroke="#1d4ed8" stroke-width="2"/>' +
          '<text x="130" y="32" font-family="sans-serif" font-size="12" text-anchor="middle">6 m</text>' +
          '<text x="232" y="74" font-family="sans-serif" font-size="12">3 m</text>' +
          '<text x="250" y="92" font-family="sans-serif" font-size="12" text-anchor="middle">4 m</text>' +
          '<text x="290" y="155" font-family="sans-serif" font-size="12">5 m</text>' +
          '<text x="160" y="218" font-family="sans-serif" font-size="12" text-anchor="middle">? m (= 6 + 4 = 10 m)</text>' +
          '<text x="14" y="125" font-family="sans-serif" font-size="12">? m (= 3 + 5 = 8 m)</text>' +
          '</svg>',
        hotspots: [
          {
            id: 'l-side-top',
            x: 41,
            y: 16,
            label: 'Top side: 6 m (labelled)',
            description: 'Read straight from the diagram.',
          },
          {
            id: 'l-side-step-down',
            x: 70,
            y: 30,
            label: 'Step-down: 3 m (labelled)',
            description: 'A short vertical drop on the right.',
          },
          {
            id: 'l-side-step-right',
            x: 78,
            y: 38,
            label: 'Step-right: 4 m (labelled)',
            description: 'A short horizontal step before the long right edge.',
          },
          {
            id: 'l-side-right',
            x: 90,
            y: 60,
            label: 'Right edge: 5 m (labelled)',
            description: 'The full right side.',
          },
          {
            id: 'l-side-bottom',
            x: 50,
            y: 90,
            label: 'Bottom side: 10 m (deduced)',
            description: 'Bottom = 6 + 4 = 10 m, the sum of the two top horizontals.',
          },
          {
            id: 'l-side-left',
            x: 5,
            y: 50,
            label: 'Left side: 8 m (deduced)',
            description: 'Left = 3 + 5 = 8 m, the sum of the two right verticals.',
          },
        ],
      },
    },
    {
      id: 'pe-scene-area-vs-perimeter-pair',
      title: 'Area and Perimeter Side by Side',
      type: 'diagram',
      instructions:
        'Compare two shapes that share the same length and width. A 6 m by 4 m rectangle has perimeter 2 x (6 + 4) = 20 m and area 6 x 4 = 24 m squared. A 5 m by 5 m square has perimeter 4 x 5 = 20 m and area 5 x 5 = 25 m squared. Same perimeter, different area: this happens because perimeter and area measure different things. Perimeter is a length (metres). Area is a surface (metres squared).',
      data: {
        comparison: [
          {
            shape: 'Rectangle 6 m x 4 m',
            perimeter: { value: 20, unit: 'm', working: '2 x (6 + 4)' },
            area: { value: 24, unit: 'm squared', working: '6 x 4' },
          },
          {
            shape: 'Square 5 m x 5 m',
            perimeter: { value: 20, unit: 'm', working: '4 x 5' },
            area: { value: 25, unit: 'm squared', working: '5 x 5' },
          },
        ],
        callout:
          'When the unit is metres, you walked along the edge. When the unit is metres squared, you covered the inside.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'pe-worked-1',
      title: 'Perimeter of a 7 m by 3 m garden lawn',
      steps: [
        {
          explanation:
            'Read the side lengths from the plan. Both lengths are in metres, so the perimeter will be in metres too.',
          maths: 'length = 7 m, width = 3 m',
        },
        {
          explanation:
            'A rectangle has two lengths and two widths. The perimeter rule is 2 x (length + width).',
          maths: 'P = 2 x (length + width)',
        },
        {
          explanation:
            'Add the length and width inside the brackets first.',
          maths: '7 + 3 = 10',
        },
        {
          explanation:
            'Multiply by 2 to count both pairs of opposite sides.',
          maths: '2 x 10 = 20',
        },
        {
          explanation:
            'State the final answer in metres.',
          maths: 'P = 20 m',
        },
        {
          explanation:
            'So a Sevenoaks gardener putting fence panels around a 7 m by 3 m lawn needs 20 m of fence panels.',
          maths: 'fencing needed: 20 m',
        },
      ],
    },
    {
      id: 'pe-worked-2',
      title: 'Perimeter of an L-shape paving area',
      steps: [
        {
          explanation:
            'The L-shape has six sides. Four are labelled: 6 m across the top, 3 m down, 4 m across, 5 m down. Two are not labelled.',
          maths: 'labelled: 6, 3, 4, 5; missing: bottom and left',
        },
        {
          explanation:
            'The bottom side runs the full width of the L-shape, which equals the two top horizontals added together.',
          maths: 'bottom = 6 + 4 = 10 m',
        },
        {
          explanation:
            'The left side runs the full height of the L-shape, which equals the two right verticals added together.',
          maths: 'left = 3 + 5 = 8 m',
        },
        {
          explanation:
            'Add all six sides to get the perimeter.',
          maths: 'P = 6 + 3 + 4 + 5 + 10 + 8',
        },
        {
          explanation:
            'Carry out the addition.',
          maths: '6 + 3 + 4 + 5 + 10 + 8 = 36',
        },
        {
          explanation:
            'So the L-shape paving needs 36 m of edging trim.',
          maths: 'P = 36 m',
        },
      ],
    },
  ],
  questions: [
    // Core 1
    {
      id: 'pe-q1',
      type: 'numeric-entry',
      stem: 'A rectangle has length 8 cm and width 5 cm. What is its perimeter in cm?',
      tier: 'core',
      correctAnswer: 26,
      xpValue: 10,
      unit: 'cm',
      hint: 'Perimeter = 2 x (length + width). Add 8 and 5 first, then double.',
    },
    // Core 2
    {
      id: 'pe-q2',
      type: 'numeric-entry',
      stem: 'A square picture frame has side length 9 cm. What is its perimeter in cm?',
      tier: 'core',
      correctAnswer: 36,
      xpValue: 10,
      unit: 'cm',
      hint: 'A square has four equal sides. Perimeter = 4 x side length.',
    },
    // Core 3
    {
      id: 'pe-q3',
      type: 'multiple-choice',
      stem: 'A garden fence runs around a 6 m by 4 m lawn. How many metres of fence panels are needed?',
      tier: 'core',
      options: ['10 m', '20 m', '24 m', '40 m'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pe-mis-half-perimeter',
      hint: 'Perimeter = 2 x (6 + 4). Both pairs of sides count, not just one length and one width.',
    },
    // Core 4
    {
      id: 'pe-q4',
      type: 'multiple-choice',
      stem: 'Which of these is the correct unit for the perimeter of a 6 m by 4 m playground?',
      tier: 'core',
      options: ['metres', 'metres squared', 'metres cubed', 'centimetres'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pe-mis-perimeter-unit-square',
      hint: 'Perimeter is a length, just like the distance you walk around the edge. Metres squared is a unit for area.',
    },
    // Core 5
    {
      id: 'pe-q5',
      type: 'multiple-choice',
      stem: 'A picture frame is 30 cm by 20 cm. What length of moulding is needed to go all the way around the frame?',
      tier: 'core',
      options: ['50 cm', '60 cm', '100 cm', '600 cm'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pe-mis-perimeter-as-area',
      hint: 'Perimeter = 2 x (30 + 20). The value 600 cm comes from multiplying 30 x 20, which gives the area in cm squared.',
    },
    // Core 6
    {
      id: 'pe-q6',
      type: 'numeric-entry',
      stem: 'A school athletics track has a straight 100 m section, then turns at 90 degrees through 60 m, then 100 m, then 60 m back to the start, forming a rectangle. What is the total perimeter of the track in metres?',
      tier: 'core',
      correctAnswer: 320,
      xpValue: 10,
      unit: 'm',
      hint: 'Add all four sides: 100 + 60 + 100 + 60.',
    },
    // Core 7
    {
      id: 'pe-q7',
      type: 'multiple-choice',
      stem: 'A rectangle has perimeter 30 cm. The length is 10 cm. What is the width?',
      tier: 'core',
      options: ['3 cm', '5 cm', '15 cm', '20 cm'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Half the perimeter is length + width: 30 / 2 = 15. Then 15 - 10 = width.',
    },
    // Core 8
    {
      id: 'pe-q8',
      type: 'spot-misconception',
      stem: 'For a 6 m by 4 m garden, Liam writes the perimeter as 6 + 4 = 10 m.',
      tier: 'core',
      statements: [
        {
          text: 'Liam is right: adding the two given sides gives the perimeter.',
          isMisconception: true,
        },
        {
          text: 'In fact a rectangle has four sides, two of length 6 m and two of width 4 m. Perimeter = 2 x (6 + 4) = 20 m. Liam has only counted half of it.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pe-mis-half-perimeter',
    },
    // Confident 1
    {
      id: 'pe-q9',
      type: 'numeric-entry',
      stem: 'An L-shape garden has labelled sides (clockwise from top-left): 6 m, 3 m, 4 m, 5 m. The bottom and left sides are not labelled. Find the perimeter of the garden in metres.',
      tier: 'confident',
      correctAnswer: 36,
      xpValue: 15,
      unit: 'm',
      misconceptionId: 'pe-mis-missing-side-skipped',
      hint: 'Bottom = 6 + 4 = 10 m. Left = 3 + 5 = 8 m. Add all six sides.',
    },
    // Confident 2
    {
      id: 'pe-q10',
      type: 'multiple-choice',
      stem: 'A T-shape sports area has a 10 m wide top stuck on a 4 m wide stem. The top is 2 m tall, the stem is 5 m tall, and the stem sits centrally on the top. What is the perimeter of the T-shape in metres?',
      tier: 'confident',
      options: ['34 m', '28 m', '40 m', '50 m'],
      correctIndex: 0,
      xpValue: 15,
      hint: 'Walk the outline. Top: 10 m. Two short drops on either side of the stem each measure (10 - 4) / 2 = 3 m. Two stem sides each measure 5 m. Stem bottom is 4 m. Two top sides each measure 2 m. Total = 10 + 3 + 5 + 4 + 5 + 3 + 2 + 2.',
    },
    // Confident 3
    {
      id: 'pe-q11',
      type: 'multiple-choice',
      stem: 'A Tunbridge Wells allotment plot is rectangular, 12 m by 8 m. The gardener wants a wire fence around the whole plot, with a 2 m gate that does not need wire. How many metres of wire are needed?',
      tier: 'confident',
      options: ['20 m', '38 m', '40 m', '42 m'],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'pe-mis-forget-gate-subtract',
      hint: 'Full perimeter = 2 x (12 + 8) = 40 m. Subtract the 2 m gate.',
    },
    // Confident 4
    {
      id: 'pe-q12',
      type: 'multiple-choice',
      stem: 'A pupil writes the perimeter of a 5 m by 4 m rectangle as 5 x 4 = 20 m. Which row corrects the slip?',
      tier: 'confident',
      options: [
        'Nothing is wrong: 20 m is the correct perimeter.',
        '20 is correct as a number, but the unit should be m squared, not m.',
        '20 is correct as a number, but it is the area of the rectangle, not the perimeter. The perimeter is 2 x (5 + 4) = 18 m.',
        'Both the calculation and the unit are wrong: the perimeter is 5 + 4 = 9 m.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pe-mis-perimeter-vs-area',
      hint: 'Multiplying length by width gives the area, not the perimeter. The perimeter rule for a rectangle adds the four sides.',
    },
    // Confident 5
    {
      id: 'pe-q13',
      type: 'missing-step',
      stem: 'Fill in the missing step. An L-shape paving area has labelled sides (clockwise from top-left): 7 m, 2 m, 3 m, 4 m. The bottom and left sides are not labelled.',
      tier: 'confident',
      steps: [
        'List the labelled sides: 7 m across the top, 2 m down, 3 m across, 4 m down on the right.',
        'Bottom side = 7 + 3 = 10 m, because the bottom runs the full width of the L-shape.',
        null,
        'Add all six sides: 7 + 2 + 3 + 4 + 10 + 6 = 32 m. So the perimeter is 32 m.',
      ],
      missingStepIndex: 2,
      correctStep: 'Left side = 2 + 4 = 6 m, because the left runs the full height of the L-shape.',
      xpValue: 20,
      misconceptionId: 'pe-mis-missing-side-skipped',
    },
    // Confident 6
    {
      id: 'pe-q14',
      type: 'spot-misconception',
      stem: 'For an L-shape garden with labelled sides 6 m, 3 m, 4 m, 5 m clockwise from the top-left, Maya adds only the four labelled sides and writes the perimeter as 6 + 3 + 4 + 5 = 18 m.',
      tier: 'confident',
      statements: [
        {
          text: 'Maya is right. The labelled sides are the perimeter.',
          isMisconception: true,
        },
        {
          text: 'In fact an L-shape has six sides. Maya has missed the bottom and left sides, which are 10 m and 8 m. Perimeter = 6 + 3 + 4 + 5 + 10 + 8 = 36 m.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pe-mis-only-labelled-sides',
    },
    // Confident 7
    {
      id: 'pe-q15',
      type: 'drag-order',
      stem: 'Order these rectangles from smallest perimeter to largest perimeter. Each is given as length x width.',
      tier: 'confident',
      items: [
        '12 m x 5 m',
        '7 m x 4 m',
        '10 m x 9 m',
        '8 m x 5 m',
      ],
      correctOrder: [1, 3, 0, 2],
      xpValue: 15,
      hint: 'Work out 2 x (length + width) for each: 7 x 4 gives 22, 8 x 5 gives 26, 12 x 5 gives 34, 10 x 9 gives 38. Then sort.',
    },
    // Challenge 1 (Bond-style multi-step)
    {
      id: 'pe-q16',
      type: 'numeric-entry',
      stem: 'A Sevenoaks family fences three sides of a rectangular allotment that is 12 m by 5 m. The fourth side runs along an existing brick wall and needs no fence. The fence costs £8 per metre. What is the total fence cost in pounds?',
      tier: 'challenge',
      correctAnswer: 176,
      xpValue: 25,
      unit: 'pounds',
      hint: 'Three sides only: 12 + 5 + 5 = 22 m (the wall replaces one 12 m side). Cost = 22 x £8.',
    },
    // Challenge 2
    {
      id: 'pe-q17',
      type: 'multiple-choice',
      stem: 'A Manchester schoolyard has an L-shaped basketball area. Walking clockwise from the top-left corner the labelled sides read 12 m, 4 m, 5 m, 6 m. The other two sides are not labelled. The school caretaker plans to paint the white edging line around the whole outline. What is the total length of edging line in metres?',
      tier: 'challenge',
      options: ['27 m', '34 m', '44 m', '54 m'],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'pe-mis-missing-side-skipped',
      hint: 'Bottom = 12 + 5 = 17 m. Left = 4 + 6 = 10 m. Total = 12 + 4 + 5 + 6 + 17 + 10.',
    },
    // Challenge 3
    {
      id: 'pe-q18',
      type: 'numeric-entry',
      stem: 'A Tunbridge Wells picture framer cuts a moulding strip to fit around a 45 cm by 30 cm photo. He cuts two long pieces and two short pieces with a 1 cm overlap allowance at each of the four corners. How many cm of moulding does he use in total?',
      tier: 'challenge',
      correctAnswer: 154,
      xpValue: 25,
      unit: 'cm',
      hint: 'Bare perimeter = 2 x (45 + 30) = 150 cm. Add 1 cm at each of the 4 corners: 150 + 4.',
    },
    // Challenge 4
    {
      id: 'pe-q19',
      type: 'multiple-choice',
      stem: 'A square garden has the same perimeter as a rectangle that is 12 m by 6 m. What is the side length of the square?',
      tier: 'challenge',
      options: ['6 m', '9 m', '12 m', '36 m'],
      correctIndex: 1,
      xpValue: 25,
      hint: 'Rectangle perimeter = 2 x (12 + 6) = 36 m. A square has 4 equal sides, so each side = 36 / 4.',
    },
    // Challenge 5
    {
      id: 'pe-q20',
      type: 'numeric-entry',
      stem: 'A Lake District car park is L-shaped. Walking clockwise from the top-left the labelled sides read 20 m, 6 m, 8 m, 9 m. The remaining two sides are not labelled. The owner orders kerb stones at £15 per metre to edge the whole outline, and adds £40 for delivery. What is the total bill in pounds?',
      tier: 'challenge',
      correctAnswer: 1330,
      xpValue: 25,
      hint: 'Bottom = 20 + 8 = 28 m. Left = 6 + 9 = 15 m. Total perimeter = 20 + 6 + 8 + 9 + 28 + 15 = 86 m. Bill = 86 x 15 + 40.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a perimeter question where pupils added one length and one width and stopped.
    {
      id: 'pe-mis-half-perimeter',
      description:
        'I find the perimeter of a rectangle by adding only one length and one width, instead of doubling the answer.',
      triggerAnswer: 'half-perimeter',
      correction:
        'Actually a rectangle has two lengths and two widths. The shortcut is 2 x (length + width). Adding just length plus width gives the half-perimeter.',
      reExplanation:
        'For a 6 m by 4 m garden, perimeter = 2 x (6 + 4) = 20 m, the total distance you walk around all four sides. Adding 6 + 4 = 10 m only counts half the trip. A quick check is to walk the edge in your head and notice that you cover the length twice and the width twice.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a perimeter question where pupils multiplied length by width and labelled the result as perimeter.
    {
      id: 'pe-mis-perimeter-as-area',
      description:
        'I find the perimeter of a rectangle by multiplying length and width together, instead of adding the four sides.',
      triggerAnswer: 'perimeter-as-area',
      correction:
        'In fact multiplying length by width gives the area, not the perimeter. Perimeter is the distance around the edge and comes from adding the sides.',
      reExplanation:
        'For a 30 cm by 20 cm picture frame, area = 30 x 20 = 600 cm squared and perimeter = 2 x (30 + 20) = 100 cm. Notice the units: area is in cm squared because two lengths were multiplied; perimeter is in cm because lengths were added. If your answer ends in cm squared, you have computed area, not perimeter.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 5 Geometry and Measures, "Perimeter and Area" page; the worked example warns about labelling perimeter answers in the wrong unit.
    {
      id: 'pe-mis-perimeter-unit-square',
      description:
        'I label a perimeter answer in cm squared or m squared instead of cm or m, even though I added the sides correctly.',
      triggerAnswer: 'perimeter-unit-square',
      correction:
        'Actually perimeter is a length, in cm or m. The unit cm squared or m squared is reserved for area, where two lengths are multiplied.',
      reExplanation:
        'For a 6 m by 4 m garden, perimeter = 2 x (6 + 4) = 20 m. The answer "20 m squared" is the right number with the wrong unit, and a marker would treat it as area, not perimeter. A quick check is to ask whether you added two lengths together (gives length, in m) or multiplied them (gives surface, in m squared).',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 2F (Foundation, Calculator), commentary on a missing-side composite shape question where pupils added only the labelled sides.
    {
      id: 'pe-mis-missing-side-skipped',
      description:
        'For a composite shape, I add the labelled sides and forget that the unlabelled sides also need a length deduced from the others.',
      triggerAnswer: 'missing-side-skipped',
      correction:
        'In fact every side of the outline counts, including the ones the diagram leaves blank. Use the labelled sides to deduce each missing length first.',
      reExplanation:
        'For an L-shape with labelled sides 6 m, 3 m, 4 m, 5 m (clockwise from the top-left), the bottom side equals 6 + 4 = 10 m and the left side equals 3 + 5 = 8 m. The full perimeter is 6 + 3 + 4 + 5 + 10 + 8 = 36 m. Skipping the deduced sides gives 18 m, which only counts half of the outline.',
    },
    // Source: NCETM "Misconceptions and how to overcome them: perimeter and area" reference document, Year 6/7 transition pack, on pupils joining only the labelled sides and treating the diagram as already complete.
    {
      id: 'pe-mis-only-labelled-sides',
      description:
        'I think a composite shape diagram only has as many sides as it has labels, so I add the labelled lengths and stop.',
      triggerAnswer: 'only-labelled-sides',
      correction:
        'Actually every corner where the outline turns starts a new side. Count corners first, then sides. An L-shape has six sides, even if only four are labelled.',
      reExplanation:
        'An L-shape garden with labelled top 6 m, right-step-down 3 m, right-step-across 4 m, full right 5 m has two more sides at the bottom and left that you have to deduce. Counting around the outline: top, right-step-down, right-step-across, full-right, bottom, left, back to start. That is six sides, every one of which adds to the perimeter.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 8 "Measurement" by Hart, on pupils confusing perimeter and area when both come from the same pair of side lengths.
    {
      id: 'pe-mis-perimeter-vs-area',
      description:
        'I treat "perimeter" and "area" as the same calculation, so for a rectangle I write the same answer for both.',
      triggerAnswer: 'perimeter-vs-area',
      correction:
        'Actually perimeter is the distance around the edge and area is the surface inside. Different rules, different units, even on the same shape.',
      reExplanation:
        'For a 5 m by 5 m square, perimeter = 4 x 5 = 20 m and area = 5 x 5 = 25 m squared. The unit is the giveaway: m for perimeter, m squared for area. A 6 m by 4 m rectangle has perimeter 20 m and area 24 m squared. Notice the same perimeter as the square but a different area, because area depends on both side lengths multiplied, not added.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2022, Paper 01 (Foundation, Non-calculator), commentary on a missing-fence-section question where pupils gave the full perimeter rather than subtracting the gate.
    {
      id: 'pe-mis-forget-gate-subtract',
      description:
        'When a problem asks how much fencing is needed around a garden with a gate, I give the full perimeter and forget that the gate does not need fencing.',
      triggerAnswer: 'forget-gate-subtract',
      correction:
        'In fact the gate is a part of the outline that does not need wire or wood. Subtract the gate length from the full perimeter.',
      reExplanation:
        'For a 12 m by 8 m allotment with a 2 m gate, full perimeter = 2 x (12 + 8) = 40 m. The gate replaces 2 m of fencing, so the wire needed is 40 - 2 = 38 m. The check is to walk the edge: at the gate, you stop putting up wire and step through.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const perimeterZoneNodes = [perimeter]
