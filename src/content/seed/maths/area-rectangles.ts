import type { SkillNode } from '@/types/content'

export const areaRectangles: SkillNode = {
  id: 'maths-geometry-measure-area-rectangles',
  title: 'Area of Rectangles and Composite Rectangles',
  description:
    'Find the area of a rectangle as length times width, in cm squared or m squared. Break a composite rectilinear shape (L-shape, T-shape) into rectangles, work out each area, then add or subtract to give the total area. Apply this to UK contexts such as carpet, school mural and allotment plot problems, and check that the side lengths used really run along the parts being measured.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-geometry-measure',
  zoneName: 'Geometry and Measure',
  tier: 'core',
  prerequisites: ['maths-four-operations-multiply-divide-negatives'],
  curriculum: {
    ks3Objective:
      'Derive and apply formulae to calculate and solve problems involving: perimeter and area of triangles, parallelograms, trapezia; calculate and solve problems involving: perimeters of 2-D shapes (including circles), areas of circles and composite shapes.',
    awardingBodies: {
      aqa: 'G16 Know and apply formulae to calculate area of triangles, parallelograms, trapezia (GCSE Mathematics 8300); G17 Calculate areas of composite shapes (GCSE Mathematics 8300)',
      edexcel: 'G16 Know and apply formulae to calculate area of triangles, parallelograms, trapezia (GCSE Mathematics 1MA1); G17 Calculate areas of composite shapes (GCSE Mathematics 1MA1)',
      ocr: '10.03a Area of triangles, parallelograms and trapezia; 10.03b Area of composite shapes (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'ar-scene-rectangle-grid',
      title: 'A Rectangle as a Grid of Unit Squares',
      type: 'diagram',
      instructions:
        'Look at the 5 cm by 3 cm rectangle drawn on a centimetre grid. Counting the unit squares row by row gives 5 + 5 + 5 = 15 squares, and each square covers 1 cm squared. Multiplying the length by the width gives the same result: 5 x 3 = 15. So the area of the rectangle is 15 cm squared. The unit cm squared appears whenever both side lengths are measured in centimetres.',
      data: {
        gridUnit: 'cm',
        rectangle: { length: 5, width: 3, areaUnit: 'cm squared', area: 15 },
        rowsByCount: [5, 5, 5],
        callout:
          'Area = length x width is just a shortcut for counting all the unit squares inside. The two side lengths must use the same unit before you multiply.',
      },
    },
    {
      id: 'ar-scene-l-shape-split',
      title: 'Split an L-shape into Two Rectangles',
      type: 'labelled-diagram',
      instructions:
        'Click each rectangle of the L-shape to highlight it. The Sevenoaks living room has a 6 m by 4 m main rectangle and a 2 m by 3 m extension. Total area = 6 x 4 + 2 x 3 = 24 + 6 = 30 m squared. Click the bottom-left rectangle, then the top-right rectangle, to see how the L-shape splits cleanly.',
      data: {
        viewBox: '0 0 320 240',
        svg:
          '<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg">' +
          '<rect x="20" y="80" width="180" height="120" fill="#cfe7ff" stroke="#1d4ed8" stroke-width="2"/>' +
          '<rect x="200" y="140" width="60" height="60" fill="#cfe7ff" stroke="#1d4ed8" stroke-width="2"/>' +
          '<text x="100" y="145" font-family="sans-serif" font-size="14" text-anchor="middle">6 m x 4 m</text>' +
          '<text x="230" y="175" font-family="sans-serif" font-size="12" text-anchor="middle">2 m x 3 m</text>' +
          '<text x="20" y="220" font-family="sans-serif" font-size="12">Total area = 24 + 6 = 30 m squared</text>' +
          '</svg>',
        hotspots: [
          {
            id: 'l-rect-main',
            x: 35,
            y: 50,
            label: 'Main rectangle 6 m x 4 m',
            description: 'Area of the main part: 6 x 4 = 24 m squared.',
          },
          {
            id: 'l-rect-extension',
            x: 72,
            y: 70,
            label: 'Extension 2 m x 3 m',
            description: 'Area of the extension: 2 x 3 = 6 m squared.',
          },
          {
            id: 'l-total',
            x: 18,
            y: 90,
            label: 'Total area 30 m squared',
            description: 'Add the two parts: 24 + 6 = 30 m squared.',
          },
        ],
      },
    },
    {
      id: 'ar-scene-t-shape-subtract',
      title: 'Find a T-shape Area by Subtraction',
      type: 'diagram',
      instructions:
        'Read how a T-shape can be drawn inside a larger rectangle and worked out by subtracting two corners. The Manchester schoolyard mural has an outer 8 m by 5 m rectangle. Two corner notches sit at the bottom: each notch is 2 m by 3 m. Outer area = 8 x 5 = 40 m squared. Total notch area = 2 x (2 x 3) = 12 m squared. Mural area = 40 - 12 = 28 m squared. Always check the notches are where you think they are before subtracting.',
      data: {
        outerRectangle: { length: 8, width: 5, area: 40, unit: 'm squared' },
        notches: [
          { length: 2, width: 3, area: 6 },
          { length: 2, width: 3, area: 6 },
        ],
        totalNotchArea: 12,
        muralArea: 28,
        callout:
          'Subtraction works when the missing pieces are full rectangles you can see, and the outer rectangle is easy to read off.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'ar-worked-1',
      title: 'Carpet area for a 4 m by 3 m living room',
      steps: [
        {
          explanation:
            'Read the side lengths from the plan. Make sure both lengths use the same unit.',
          maths: 'length = 4 m, width = 3 m',
        },
        {
          explanation:
            'Apply the rectangle area rule: area equals length multiplied by width.',
          maths: 'area = 4 x 3',
        },
        {
          explanation: 'Carry out the multiplication.',
          maths: '4 x 3 = 12',
        },
        {
          explanation:
            'Write the unit. Both side lengths are in metres, so the area is in metres squared.',
          maths: 'area = 12 m squared',
        },
        {
          explanation:
            'So a Sevenoaks family ordering carpet for a 4 m by 3 m living room needs at least 12 m squared of carpet.',
          maths: 'carpet needed: 12 m squared',
        },
      ],
    },
    {
      id: 'ar-worked-2',
      title: 'L-shaped allotment plot in Tunbridge Wells',
      steps: [
        {
          explanation:
            'The plot is an L-shape. Split it into two non-overlapping rectangles. The main rectangle is 7 m by 4 m and the smaller rectangle is 3 m by 2 m.',
          maths: 'rectangle 1: 7 m x 4 m, rectangle 2: 3 m x 2 m',
        },
        {
          explanation:
            'Find the area of the first rectangle.',
          maths: '7 x 4 = 28 m squared',
        },
        {
          explanation:
            'Find the area of the second rectangle.',
          maths: '3 x 2 = 6 m squared',
        },
        {
          explanation:
            'Add the two areas to get the total area of the L-shape.',
        },
        {
          explanation:
            'State the total area in the correct unit.',
          maths: 'total area = 28 + 6 = 34 m squared',
        },
        {
          explanation:
            'So the allotment plot covers 34 m squared, which sets how much topsoil the gardener needs.',
          maths: 'plot area: 34 m squared',
        },
      ],
    },
  ],
  questions: [
    // Core 1
    {
      id: 'ar-q1',
      type: 'numeric-entry',
      stem: 'A rectangle has length 6 cm and width 4 cm. What is its area in cm squared?',
      tier: 'core',
      correctAnswer: 24,
      xpValue: 10,
      unit: 'cm squared',
      hint: 'Area of a rectangle = length x width. Multiply 6 by 4.',
    },
    // Core 2
    {
      id: 'ar-q2',
      type: 'numeric-entry',
      stem: 'A square tile has side length 5 cm. What is its area in cm squared?',
      tier: 'core',
      correctAnswer: 25,
      xpValue: 10,
      unit: 'cm squared',
      hint: 'A square is a rectangle with both sides the same length. Multiply 5 by 5.',
    },
    // Core 3
    {
      id: 'ar-q3',
      type: 'multiple-choice',
      stem: 'A Sevenoaks living-room rug measures 3 m by 2 m. What is its area?',
      tier: 'core',
      options: ['5 m squared', '6 m squared', '6 m', '10 m squared'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'ar-mis-area-vs-perimeter',
      hint: 'Area = length x width. Multiply 3 by 2, and the answer should be in m squared, not m. The value 10 m would be the perimeter.',
    },
    // Core 4
    {
      id: 'ar-q4',
      type: 'multiple-choice',
      stem: 'A page of A5 paper measures 21 cm by 15 cm. What is its area?',
      tier: 'core',
      options: ['36 cm squared', '72 cm squared', '210 cm squared', '315 cm squared'],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'ar-mis-add-instead-of-multiply',
      hint: 'Multiply 21 by 15. 21 x 15 = 21 x 10 + 21 x 5 = 210 + 105.',
    },
    // Core 5
    {
      id: 'ar-q5',
      type: 'multiple-choice',
      stem: 'A rectangle has area 24 cm squared and length 8 cm. What is its width?',
      tier: 'core',
      options: ['2 cm', '4 cm', '3 cm', '16 cm'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'If length x width = 24 and length = 8, then width = 24 / 8.',
    },
    // Core 6
    {
      id: 'ar-q6',
      type: 'multiple-choice',
      stem: 'A noticeboard measures 120 cm by 80 cm. What is its area in cm squared?',
      tier: 'core',
      options: ['200 cm squared', '400 cm squared', '960 cm squared', '9600 cm squared'],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'ar-mis-add-instead-of-multiply',
      hint: '120 x 80 = 12 x 8 x 100 = 96 x 100.',
    },
    // Core 7
    {
      id: 'ar-q7',
      type: 'spot-misconception',
      stem: 'Liam works out the area of a 6 m by 4 m rug as "6 + 4 = 10 m squared". Is his method sound?',
      tier: 'core',
      statements: [
        {
          text: 'Liam is right. Adding the side lengths gives the area.',
          isMisconception: true,
        },
        {
          text: 'In fact area is length multiplied by width, not added. The area of a 6 m by 4 m rug is 6 x 4 = 24 m squared. Adding the sides 6 + 4 = 10 m gives the half-perimeter, not the area.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'ar-mis-add-instead-of-multiply',
    },
    // Core 8
    {
      id: 'ar-q8',
      type: 'numeric-entry',
      stem: 'A 4 cm by 5 cm rectangle is drawn on a centimetre grid. How many full unit squares fit inside the rectangle?',
      tier: 'core',
      correctAnswer: 20,
      xpValue: 10,
      hint: 'Each unit square is 1 cm squared. The total number of squares equals the area: 4 x 5 = 20.',
    },
    // Confident 1
    {
      id: 'ar-q9',
      type: 'numeric-entry',
      stem: 'An L-shaped Sevenoaks living room is made of a 6 m by 4 m main rectangle and a 2 m by 3 m extension. What is the total area in m squared?',
      tier: 'confident',
      correctAnswer: 30,
      xpValue: 15,
      unit: 'm squared',
      hint: 'Find each rectangle area and add: 6 x 4 + 2 x 3 = 24 + 6.',
    },
    // Confident 2
    {
      id: 'ar-q10',
      type: 'multiple-choice',
      stem: 'A Manchester schoolyard mural has an outer 8 m by 5 m rectangle, with two 2 m by 3 m notches cut from its bottom corners. What area of paint covers the mural?',
      tier: 'confident',
      options: ['28 m squared', '34 m squared', '40 m squared', '52 m squared'],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'ar-mis-forget-subtract-cutout',
      hint: 'Outer area = 8 x 5 = 40. Each notch = 2 x 3 = 6, so the total notch area is 12. Painted area = 40 - 12.',
    },
    // Confident 3
    {
      id: 'ar-q11',
      type: 'numeric-entry',
      stem: 'A T-shape allotment plot has a 5 m by 2 m horizontal top stuck on the long side of a 2 m by 4 m vertical stem (no overlap). What is the total area of the plot in m squared?',
      tier: 'confident',
      correctAnswer: 18,
      xpValue: 15,
      unit: 'm squared',
      hint: 'The two rectangles do not overlap. Area = 5 x 2 + 2 x 4 = 10 + 8.',
    },
    // Confident 4
    {
      id: 'ar-q12',
      type: 'multiple-choice',
      stem: 'A floor area is 200 cm long and 150 cm wide. A pupil writes that the area is 200 x 150 = 30 000 cm squared, which is the same as 3 m squared. Which row corrects the mistake?',
      tier: 'confident',
      options: [
        'Nothing is wrong: 30 000 cm squared = 3 m squared.',
        '30 000 cm squared = 30 m squared, not 3 m squared (1 m squared = 100 cm squared).',
        '30 000 cm squared = 300 m squared (1 m squared = 100 cm squared).',
        '30 000 cm squared = 3 m squared (1 m squared = 10 000 cm squared, but the floor is bigger).',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'ar-mis-cm-to-m-squared',
      hint: '1 m = 100 cm, so 1 m squared = 100 cm x 100 cm = 10 000 cm squared. Divide 30 000 by 10 000.',
    },
    // Confident 5
    {
      id: 'ar-q13',
      type: 'spot-misconception',
      stem: 'For an L-shaped patio, Aisha measures the bottom edge as 8 m, the right edge as 5 m, then says "the area is 8 x 5 = 40 m squared" without splitting the shape. Is her method sound?',
      tier: 'confident',
      statements: [
        {
          text: 'Aisha is right. You can multiply the longest two sides together to get the area of any rectilinear shape.',
          isMisconception: true,
        },
        {
          text: 'In fact 8 x 5 = 40 m squared is the area of the bounding rectangle, not of the L-shape itself. The L-shape has a corner cut out, so the real area is less than 40 m squared. You must split the shape into rectangles, find each area, then add.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'ar-mis-bounding-rectangle',
    },
    // Confident 6
    {
      id: 'ar-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step. A Tunbridge Wells allotment plot is L-shaped: a 7 m by 4 m main rectangle and a 3 m by 2 m smaller rectangle joined along a side, with no overlap.',
      tier: 'confident',
      steps: [
        'Split the L-shape into two non-overlapping rectangles: 7 m by 4 m, and 3 m by 2 m.',
        'Find the first area: 7 x 4 = 28 m squared.',
        null,
        'Add the two areas: 28 + 6 = 34 m squared, which is the total area of the L-shape.',
      ],
      missingStepIndex: 2,
      correctStep: 'Find the second area: 3 x 2 = 6 m squared.',
      xpValue: 20,
      misconceptionId: 'ar-mis-skip-second-rectangle',
    },
    // Confident 7
    {
      id: 'ar-q15',
      type: 'multiple-choice',
      stem: 'A noticeboard is 2 m long and 80 cm wide. Which row gives the area of the noticeboard correctly, with the right unit?',
      tier: 'confident',
      options: [
        '160 m squared',
        '160 cm squared',
        '1.6 m squared',
        '1.6 cm squared',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'ar-mis-mixed-units',
      hint: 'Convert 80 cm to 0.8 m first. Then 2 x 0.8 = 1.6 m squared. Both side lengths must use the same unit before you multiply.',
    },
    // Confident 8
    {
      id: 'ar-q16',
      type: 'drag-order',
      stem: 'Order these rectangle areas from smallest to largest. Each is given as length x width.',
      tier: 'confident',
      items: [
        '5 m x 4 m',
        '3 m x 6 m',
        '7 m x 2 m',
        '4 m x 4 m',
      ],
      correctOrder: [3, 2, 1, 0],
      xpValue: 15,
      hint: 'Work out each area: 5 x 4 = 20, 3 x 6 = 18, 7 x 2 = 14, 4 x 4 = 16. Then sort.',
    },
    // Challenge 1 (Bond-style multi-step)
    {
      id: 'ar-q17',
      type: 'numeric-entry',
      stem: 'A Sevenoaks family carpets a 4 m by 3 m living room. The carpet costs £18 per m squared. The fitter charges a flat fee of £40 on top. What is the total bill in pounds?',
      tier: 'challenge',
      correctAnswer: 256,
      xpValue: 25,
      unit: 'pounds',
      hint: 'First find the area: 4 x 3 = 12 m squared. Then 12 x £18 = £216. Add £40 for the fitter.',
    },
    // Challenge 2
    {
      id: 'ar-q18',
      type: 'multiple-choice',
      stem: 'A Manchester schoolyard has a rectangular play area of 20 m by 15 m. A square sandpit of side 4 m is removed from one corner, and a 6 m by 2 m planter is removed from the opposite edge. How many square metres of play surface remain?',
      tier: 'challenge',
      options: ['250 m squared', '272 m squared', '290 m squared', '296 m squared'],
      correctIndex: 1,
      xpValue: 25,
      hint: 'Outer area = 20 x 15 = 300. Sandpit = 4 x 4 = 16. Planter = 6 x 2 = 12. Remaining = 300 - 16 - 12.',
    },
    // Challenge 3
    {
      id: 'ar-q19',
      type: 'numeric-entry',
      stem: 'A Tunbridge Wells allotment plot is an L-shape made of a 9 m by 5 m main rectangle joined to a 4 m by 3 m smaller rectangle along a side, with no overlap. The gardener orders topsoil at 0.05 m squared per bag. How many bags are needed to cover the whole plot exactly?',
      tier: 'challenge',
      correctAnswer: 1140,
      xpValue: 25,
      hint: 'Plot area = 9 x 5 + 4 x 3 = 45 + 12 = 57 m squared. Each bag covers 0.05 m squared, so bags needed = 57 / 0.05.',
    },
    // Challenge 4
    {
      id: 'ar-q20',
      type: 'multiple-choice',
      stem: 'A Dover school orders a rectangular protective mat for a 250 cm by 180 cm gym apparatus base. The mat is sold in m squared and rounded up to the next whole m squared. How many m squared does the school pay for?',
      tier: 'challenge',
      options: ['4 m squared', '5 m squared', '45 m squared', '450 m squared'],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'ar-mis-cm-to-m-squared',
      hint: 'Convert sides to metres first: 250 cm = 2.5 m, 180 cm = 1.8 m. Area = 2.5 x 1.8 = 4.5 m squared. Round up.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a basic area question where pupils added the side lengths instead of multiplying them.
    {
      id: 'ar-mis-add-instead-of-multiply',
      description:
        'I find the area of a rectangle by adding the length and the width together (or by adding all four sides), instead of multiplying length by width.',
      triggerAnswer: 'add-instead-of-multiply',
      correction:
        'Actually adding the sides gives the perimeter, not the area. Area is the surface inside the shape and comes from length multiplied by width.',
      reExplanation:
        'For a 6 m by 4 m rug, area = 6 x 4 = 24 m squared, which counts the unit squares of carpet that fit inside. Adding 6 + 4 = 10 m only gives half of the perimeter and is in metres, not metres squared. The unit cm squared or m squared is your check that you have multiplied two lengths together.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a composite shape question where pupils used the bounding rectangle area instead of splitting the L-shape.
    {
      id: 'ar-mis-bounding-rectangle',
      description:
        'For an L-shape, I multiply the two longest outer sides to get the area, treating the L as a full rectangle.',
      triggerAnswer: 'bounding-rectangle',
      correction:
        'In fact this gives the area of the bounding rectangle, not the L-shape. An L-shape has a corner cut out, so its area is less.',
      reExplanation:
        'For an L-shape with overall outer sides of 8 m and 5 m, the bounding rectangle area is 8 x 5 = 40 m squared. The L-shape itself splits into a 6 m by 4 m main rectangle (24 m squared) and a 2 m by 3 m extension (6 m squared), giving 30 m squared. The 10 m squared difference is the missing corner.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2022, Paper 01 (Foundation, Non-calculator), commentary on a unit-conversion question where pupils treated 1 m squared as 100 cm squared instead of 10 000 cm squared.
    {
      id: 'ar-mis-cm-to-m-squared',
      description:
        'I convert cm squared to m squared by dividing by 100 (or convert m squared to cm squared by multiplying by 100), instead of dividing or multiplying by 10 000.',
      triggerAnswer: 'cm-to-m-squared',
      correction:
        'Actually 1 m = 100 cm, so 1 m squared = 100 x 100 = 10 000 cm squared. Areas square the conversion factor.',
      reExplanation:
        'A 30 000 cm squared floor in metres squared is 30 000 / 10 000 = 3 m squared. To convert the other way, 4.5 m squared = 4.5 x 10 000 = 45 000 cm squared. The square unit always uses the conversion factor squared, because both sides of the unit square are converted.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 5 Geometry and Measures, "Area of Rectangles" page; the worked example warns that splitting a composite shape into rectangles requires finding both areas before adding.
    {
      id: 'ar-mis-skip-second-rectangle',
      description:
        'When I split a composite shape into two rectangles, I find the area of the bigger rectangle and forget to add (or subtract) the smaller one.',
      triggerAnswer: 'skip-second-rectangle',
      correction:
        'In fact every part of the composite shape contributes to the total area. Always find both rectangle areas, then add or subtract.',
      reExplanation:
        'For a 7 m by 4 m main rectangle joined to a 3 m by 2 m smaller rectangle, the answer 28 m squared misses the 6 m squared from the smaller part. The full area is 28 + 6 = 34 m squared. A quick sanity check is to ask whether your answer feels too small for the shape you can see on the plan.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 2F (Foundation, Calculator), commentary on a "find the missing piece" question where pupils computed the outer rectangle but forgot to subtract the cut-out.
    {
      id: 'ar-mis-forget-subtract-cutout',
      description:
        'When a smaller rectangle is cut out of a larger rectangle, I give the area of the larger rectangle and forget to subtract the cut-out.',
      triggerAnswer: 'forget-subtract-cutout',
      correction:
        'Actually the painted (or planted, or carpeted) area is what is left after the cut-out has been taken away.',
      reExplanation:
        'For an 8 m by 5 m mural with two 2 m by 3 m notches removed, outer area = 40 m squared and total notch area = 12 m squared. The mural itself covers 40 - 12 = 28 m squared. The 12 m squared you remove is exactly the part the painter does not paint.',
    },
    // Source: NCETM "Misconceptions and how to overcome them: area" reference document, Year 6/7 transition pack, on pupils using inconsistent units when one side is in cm and the other in m.
    {
      id: 'ar-mis-mixed-units',
      description:
        'I multiply a length given in metres by a width given in centimetres, then label the answer as "m squared" without converting either side.',
      triggerAnswer: 'mixed-units',
      correction:
        'In fact both side lengths must use the same unit before you multiply. Convert one side first.',
      reExplanation:
        'For a board that is 2 m long and 80 cm wide, convert 80 cm to 0.8 m first. Then area = 2 x 0.8 = 1.6 m squared. Multiplying 2 x 80 = 160 with no conversion gives the wrong magnitude entirely. The check: if the unit is m squared, both sides must be in metres before multiplying.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 8 "Measurement" by Hart, on pupils confusing area with perimeter when both come from the same pair of side lengths.
    {
      id: 'ar-mis-area-vs-perimeter',
      description:
        'I treat "area" and "perimeter" as the same calculation, so I work out 2 x (length + width) and call that the area.',
      triggerAnswer: 'area-vs-perimeter',
      correction:
        'Actually perimeter is the distance around the edge of the shape and area is the surface inside. They use different rules and different units.',
      reExplanation:
        'For a 6 m by 4 m rectangle, perimeter = 2 x (6 + 4) = 20 m and area = 6 x 4 = 24 m squared. The perimeter is in metres because you walked along the edge. The area is in metres squared because you multiplied two lengths together.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const areaRectanglesZoneNodes = [areaRectangles]
