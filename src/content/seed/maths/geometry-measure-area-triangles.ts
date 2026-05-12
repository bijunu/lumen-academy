import type { SkillNode } from '@/types/content'

export const areaTriangles: SkillNode = {
  id: 'maths-geometry-measure-area-triangles',
  title: 'Area of Triangles',
  description:
    'Find the area of a triangle as one half of the base multiplied by the perpendicular height. The perpendicular height is the shortest distance from the chosen base to the opposite vertex, and it can sit inside or outside the triangle. Apply the rule to right, acute, and obtuse triangles in UK contexts such as a Sevenoaks bunting flag, a Manchester garden border, and a Tunbridge Wells gable end, taking care never to use a slant side as the height.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-geometry-measure',
  zoneName: 'Geometry and Measure',
  tier: 'confident',
  prerequisites: ['maths-geometry-measure-area-rectangles'],
  curriculum: {
    ks3Objective:
      'Derive and apply formulae to calculate and solve problems involving: perimeter and area of triangles, parallelograms, trapezia.',
    awardingBodies: {
      aqa: 'G16 Know and apply the formula area = 1/2 x base x perpendicular height for triangles (GCSE Mathematics 8300)',
      edexcel: 'G16 Apply the formula for area of triangles (GCSE Mathematics 1MA1)',
      ocr: '10.03a Area of triangles (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'gat-scene-half-rectangle',
      title: 'A Triangle is Half a Rectangle',
      type: 'diagram',
      instructions:
        'Look at the 6 cm by 4 cm rectangle. Its area is 6 x 4 = 24 cm squared. The diagonal cuts the rectangle into two identical right-triangles, so each triangle covers exactly half the rectangle. That gives a triangle area of 24 / 2 = 12 cm squared. Writing this as a formula, area = 1/2 x base x perpendicular height = 1/2 x 6 x 4 = 12 cm squared. The base and the perpendicular height are the two sides at right angles.',
      data: {
        rectangle: { length: 6, width: 4, areaUnit: 'cm squared', area: 24 },
        triangleArea: 12,
        formulaLine: 'area = 1/2 x 6 x 4 = 12 cm squared',
        callout:
          'Every right-triangle is half of a rectangle whose sides match the two perpendicular legs. Those legs are the base and the perpendicular height.',
      },
    },
    {
      id: 'gat-scene-formula-general',
      title: 'The Same Formula Works for Any Triangle',
      type: 'diagram',
      instructions:
        'Read how the half-rectangle idea generalises. A perpendicular line from the top vertex straight down to the base splits any triangle into two right-triangles. Each right-triangle is half of its bounding rectangle, so the whole triangle is half of a rectangle with sides base and perpendicular height. The formula area = 1/2 x base x perpendicular height therefore works for every triangle: right, acute, and even obtuse, as long as the height meets the base at a right angle.',
      data: {
        baseLength: 8,
        perpendicularHeight: 5,
        formulaLine: 'area = 1/2 x 8 x 5 = 20 cm squared',
        callout:
          'The perpendicular height is the shortest distance from the opposite vertex to the line of the base. It is never measured along a slant side.',
      },
    },
    {
      id: 'gat-scene-perpendicular-height',
      title: 'Spot the Perpendicular Height (Including Obtuse Triangles)',
      type: 'labelled-diagram',
      instructions:
        'Click each labelled segment of the obtuse triangle to see whether it is a base, a perpendicular height, or just a slant side. The triangle has a base of 10 cm along the bottom, but the highest vertex sits to the left of the base, so the perpendicular height of 4 cm is drawn from that vertex straight down to the extension of the base, outside the triangle. The slant side measures 6 cm, but you must not use it as the height.',
      data: {
        viewBox: '0 0 320 200',
        svg:
          '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">' +
          '<polygon points="60,40 120,160 280,160" fill="#cfe7ff" stroke="#1d4ed8" stroke-width="2"/>' +
          '<line x1="60" y1="40" x2="60" y2="160" stroke="#16a34a" stroke-width="2" stroke-dasharray="4 3"/>' +
          '<line x1="60" y1="160" x2="120" y2="160" stroke="#16a34a" stroke-width="1"/>' +
          '<text x="200" y="180" font-family="sans-serif" font-size="14" text-anchor="middle">base 10 cm</text>' +
          '<text x="40" y="105" font-family="sans-serif" font-size="14" text-anchor="end">height 4 cm</text>' +
          '<text x="80" y="95" font-family="sans-serif" font-size="12" fill="#b45309">slant 6 cm</text>' +
          '</svg>',
        hotspots: [
          {
            id: 'gat-base',
            x: 60,
            y: 85,
            label: 'Base 10 cm',
            description: 'The base runs along the bottom of the triangle from one vertex to another.',
          },
          {
            id: 'gat-perp-height',
            x: 12,
            y: 50,
            label: 'Perpendicular height 4 cm',
            description: 'A right-angle line from the top vertex down to the line of the base. It sits outside the triangle here.',
          },
          {
            id: 'gat-slant',
            x: 24,
            y: 40,
            label: 'Slant side 6 cm (not the height)',
            description: 'A side of the triangle. Using this as the height would give the wrong area.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'gat-worked-1',
      title: 'Right-triangle bunting flag with legs 8 cm and 5 cm',
      steps: [
        {
          explanation:
            'Identify the base and perpendicular height. In a right-triangle, the two legs that meet at the right angle play these roles.',
          maths: 'base = 8 cm, perpendicular height = 5 cm',
        },
        {
          explanation:
            'Write the area rule for a triangle.',
          maths: 'area = 1/2 x base x perpendicular height',
        },
        {
          explanation:
            'Substitute the two values in.',
          maths: 'area = 1/2 x 8 x 5',
        },
        {
          explanation:
            'Multiply the base by the perpendicular height first.',
          maths: '8 x 5 = 40',
        },
        {
          explanation:
            'Now halve the result.',
          maths: '40 / 2 = 20',
        },
        {
          explanation:
            'Both side lengths are in centimetres, so the area is in centimetres squared. The Sevenoaks bunting flag covers 20 cm squared of fabric.',
          maths: 'area = 20 cm squared',
        },
      ],
    },
    {
      id: 'gat-worked-2',
      title: 'Acute triangle with base 12 m and perpendicular height 7 m',
      steps: [
        {
          explanation:
            'Read the base and the perpendicular height from the diagram. The 9 m slant side is given, but it is not the height.',
          maths: 'base = 12 m, perpendicular height = 7 m',
        },
        {
          explanation:
            'Write the area rule for a triangle.',
          maths: 'area = 1/2 x base x perpendicular height',
        },
        {
          explanation:
            'Substitute the base and the perpendicular height.',
          maths: 'area = 1/2 x 12 x 7',
        },
        {
          explanation:
            'Halve the base first to keep the numbers easy.',
          maths: '12 / 2 = 6',
        },
        {
          explanation:
            'Multiply the half-base by the perpendicular height.',
          maths: '6 x 7 = 42',
        },
        {
          explanation:
            'Both lengths are in metres, so the area is in metres squared. The Manchester garden border covers 42 m squared.',
          maths: 'area = 42 m squared',
        },
      ],
    },
  ],
  questions: [
    // Core 1
    {
      id: 'gat-q1',
      type: 'numeric-entry',
      stem: 'A triangle has base 8 cm and perpendicular height 5 cm. What is its area in cm squared?',
      tier: 'core',
      correctAnswer: 20,
      xpValue: 10,
      unit: 'cm squared',
      hint: 'area = 1/2 x base x perpendicular height. Work out 1/2 x 8 x 5.',
    },
    // Core 2
    {
      id: 'gat-q2',
      type: 'numeric-entry',
      stem: 'A right-triangle has legs of 6 cm and 4 cm meeting at a right angle. What is its area in cm squared?',
      tier: 'core',
      correctAnswer: 12,
      xpValue: 10,
      unit: 'cm squared',
      hint: 'In a right-triangle, the two legs are the base and the perpendicular height. Compute 1/2 x 6 x 4.',
    },
    // Core 3
    {
      id: 'gat-q3',
      type: 'multiple-choice',
      stem: 'A triangle has base 10 cm and perpendicular height 6 cm. What is its area?',
      tier: 'core',
      options: ['16 cm squared', '60 cm squared', '30 cm squared', '32 cm squared'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'gat-mis-forget-half',
      hint: 'area = 1/2 x base x perpendicular height = 1/2 x 10 x 6. The answer 60 cm squared forgets the half.',
    },
    // Core 4
    {
      id: 'gat-q4',
      type: 'multiple-choice',
      stem: 'A triangle has base 7 cm and perpendicular height 4 cm. What is its area?',
      tier: 'core',
      options: ['14 cm squared', '11 cm squared', '28 cm squared', '7 cm squared'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'gat-mis-add-base-height',
      hint: '1/2 x 7 x 4 = 14. The option 11 cm squared adds 7 + 4 instead of multiplying.',
    },
    // Core 5
    {
      id: 'gat-q5',
      type: 'multiple-choice',
      stem: 'A right-triangle has legs of 12 cm and 5 cm. The slant side is 13 cm. What is the area of the triangle?',
      tier: 'core',
      options: ['60 cm squared', '78 cm squared', '32.5 cm squared', '30 cm squared'],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'gat-mis-use-slant-as-height',
      hint: 'Use the two perpendicular legs, not the slant 13 cm side. area = 1/2 x 12 x 5.',
    },
    // Core 6
    {
      id: 'gat-q6',
      type: 'drag-order',
      stem: 'Order these steps to work out the area of a triangle with base 20 cm and perpendicular height 15 cm.',
      tier: 'core',
      items: [
        'Write the rule: area = 1/2 x base x perpendicular height.',
        'Substitute: area = 1/2 x 20 x 15.',
        'Halve the base first: 1/2 x 20 = 10.',
        'Multiply: 10 x 15 = 150, so area = 150 cm squared.',
      ],
      correctOrder: [0, 1, 2, 3],
      xpValue: 10,
      hint: 'Start with the rule, then substitute, then evaluate.',
    },
    // Core 7
    {
      id: 'gat-q7',
      type: 'spot-misconception',
      stem: 'Asha works out the area of a triangle with base 8 cm and perpendicular height 5 cm as "8 x 5 = 40 cm squared".',
      tier: 'core',
      statements: [
        {
          text: 'Asha is right. Multiplying the base by the perpendicular height gives the area.',
          isMisconception: true,
        },
        {
          text: 'In fact base x perpendicular height gives the area of the surrounding rectangle. A triangle is only half of that, so the answer is 1/2 x 8 x 5 = 20 cm squared.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'gat-mis-forget-half',
    },
    // Confident 1
    {
      id: 'gat-q8',
      type: 'numeric-entry',
      stem: 'A Sevenoaks bunting flag is a right-triangle with legs 24 cm and 18 cm. What is its area in cm squared?',
      tier: 'confident',
      correctAnswer: 216,
      xpValue: 15,
      unit: 'cm squared',
      hint: 'The two legs are the base and the perpendicular height. area = 1/2 x 24 x 18.',
    },
    // Confident 2
    {
      id: 'gat-q9',
      type: 'multiple-choice',
      stem: 'An obtuse triangle has base 10 cm. Its perpendicular height of 4 cm is drawn from the top vertex down to the line of the base, falling outside the triangle. The slant side is 6 cm. What is the area of the triangle?',
      tier: 'confident',
      options: ['60 cm squared', '20 cm squared', '30 cm squared', '24 cm squared'],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'gat-mis-use-slant-as-height',
      hint: 'Use the perpendicular height of 4 cm, not the 6 cm slant side. area = 1/2 x 10 x 4 = 20.',
    },
    // Confident 3
    {
      id: 'gat-q10',
      type: 'numeric-entry',
      stem: 'A triangular Manchester garden border has base 12 m and perpendicular height 7 m. What is its area in m squared?',
      tier: 'confident',
      correctAnswer: 42,
      xpValue: 15,
      unit: 'm squared',
      hint: 'area = 1/2 x 12 x 7. Halve 12 to get 6, then 6 x 7 = 42.',
    },
    // Confident 4
    {
      id: 'gat-q11',
      type: 'multiple-choice',
      stem: 'A triangle has base 9 cm and perpendicular height 6 cm. What is its area?',
      tier: 'confident',
      options: ['54 cm squared', '13.5 cm squared', '27 cm squared', '15 cm squared'],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'gat-mis-double-half',
      hint: '1/2 x 9 x 6 = 27. Halving the answer again would give 13.5, which is the area divided by two extra times.',
    },
    // Confident 5
    {
      id: 'gat-q12',
      type: 'multiple-choice',
      stem: 'A triangle has area 36 cm squared and base 9 cm. What is its perpendicular height in cm?',
      tier: 'confident',
      options: ['4 cm', '2 cm', '8 cm', '18 cm'],
      correctIndex: 2,
      xpValue: 15,
      hint: 'Rearrange area = 1/2 x base x height. So height = 2 x area / base = 2 x 36 / 9.',
    },
    // Confident 6
    {
      id: 'gat-q13',
      type: 'multiple-choice',
      stem: 'A triangle has base 5 cm and perpendicular height 8 cm. A pupil writes the area as "1/2 x 5 x 8 = 20 cm". Which row corrects the answer?',
      tier: 'confident',
      options: [
        'Nothing is wrong: the area is 20 cm.',
        'The number is right but the unit must be cm squared, since two lengths in cm were multiplied. Area = 20 cm squared.',
        'The number should be 40 cm squared, with no half.',
        'The number should be 13 cm squared, since 5 + 8 = 13.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'gat-mis-units-not-squared',
      hint: 'Multiplying two lengths gives a unit of length squared. The arithmetic 1/2 x 5 x 8 = 20 is correct.',
    },
    // Confident 7
    {
      id: 'gat-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step. A triangle has base 16 cm and perpendicular height 9 cm.',
      tier: 'confident',
      steps: [
        'Write the rule: area = 1/2 x base x perpendicular height.',
        'Substitute the values: area = 1/2 x 16 x 9.',
        null,
        'Multiply: 8 x 9 = 72, so area = 72 cm squared.',
      ],
      missingStepIndex: 2,
      correctStep: 'Halve the base first: 1/2 x 16 = 8.',
      xpValue: 20,
      misconceptionId: 'gat-mis-double-half',
    },
    // Confident 8
    {
      id: 'gat-q15',
      type: 'drag-order',
      stem: 'Order these triangle areas from smallest to largest. Each triangle is given as base x perpendicular height.',
      tier: 'confident',
      items: [
        '8 cm x 6 cm',
        '5 cm x 10 cm',
        '4 cm x 9 cm',
        '12 cm x 5 cm',
      ],
      correctOrder: [2, 1, 3, 0],
      xpValue: 15,
      hint: 'Find each area: 1/2 x 8 x 6 = 24, 1/2 x 5 x 10 = 25, 1/2 x 4 x 9 = 18, 1/2 x 12 x 5 = 30. Then sort.',
    },
    // Challenge 1 (Bond-style multi-step)
    {
      id: 'gat-q16',
      type: 'numeric-entry',
      stem: 'A Sevenoaks school orders triangular bunting flags. Each flag is a right-triangle with legs 24 cm and 15 cm. The fabric costs £0.04 per cm squared. What is the cost in pounds of fabric for 20 flags?',
      tier: 'challenge',
      correctAnswer: 144,
      xpValue: 25,
      unit: 'pounds',
      hint: 'Area of one flag = 1/2 x 24 x 15 = 180 cm squared. For 20 flags, 20 x 180 = 3600 cm squared. Cost = 3600 x 0.04.',
    },
    // Challenge 2
    {
      id: 'gat-q17',
      type: 'multiple-choice',
      stem: 'A triangular gable end on a Tunbridge Wells house has base 8 m and perpendicular height 3 m. The owner paints the gable, but a 2 m by 1 m rectangular vent must not be painted. How many m squared of paint are needed?',
      tier: 'challenge',
      options: ['10 m squared', '12 m squared', '22 m squared', '24 m squared'],
      correctIndex: 0,
      xpValue: 25,
      misconceptionId: 'gat-mis-forget-subtract-cutout',
      hint: 'Triangle area = 1/2 x 8 x 3 = 12 m squared. Vent area = 2 x 1 = 2 m squared. Painted area = 12 - 2.',
    },
    // Challenge 3
    {
      id: 'gat-q18',
      type: 'numeric-entry',
      stem: 'A Manchester park has a triangular flower bed with base 9 m and perpendicular height 6 m. A gardener orders compost at £5 per m squared and adds a £12 delivery charge. What is the total cost in pounds?',
      tier: 'challenge',
      correctAnswer: 147,
      xpValue: 25,
      unit: 'pounds',
      hint: 'Bed area = 1/2 x 9 x 6 = 27 m squared. Compost cost = 27 x 5 = 135. Add the £12 delivery.',
    },
    // Challenge 4
    {
      id: 'gat-q19',
      type: 'multiple-choice',
      stem: 'A triangular sail has base 250 cm and perpendicular height 180 cm. Sailcloth is sold in m squared, rounded up to the next whole m squared. How many m squared of sailcloth must be bought?',
      tier: 'challenge',
      options: ['2 m squared', '3 m squared', '23 m squared', '225 m squared'],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'gat-mis-cm-to-m-squared',
      hint: 'Convert sides first: 250 cm = 2.5 m, 180 cm = 1.8 m. Area = 1/2 x 2.5 x 1.8 = 2.25 m squared. Round up.',
    },
    // Challenge 5
    {
      id: 'gat-q20',
      type: 'numeric-entry',
      stem: 'A square Dover school playground has side 12 m. A triangular sandpit with base 6 m and perpendicular height 4 m sits in one corner. After the sandpit is removed, how many m squared of playable surface remain?',
      tier: 'challenge',
      correctAnswer: 132,
      xpValue: 25,
      unit: 'm squared',
      hint: 'Square area = 12 x 12 = 144 m squared. Sandpit area = 1/2 x 6 x 4 = 12 m squared. Remaining = 144 - 12.',
    },
    // Challenge 6
    {
      id: 'gat-q21',
      type: 'multiple-choice',
      stem: 'A triangle has area 84 cm squared and base 14 cm. What is its perpendicular height?',
      tier: 'challenge',
      options: ['6 cm', '24 cm', '5 cm', '12 cm'],
      correctIndex: 3,
      xpValue: 25,
      hint: 'Rearrange: height = 2 x area / base = 2 x 84 / 14 = 168 / 14.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a triangle area question where pupils gave base x perpendicular height without halving.
    {
      id: 'gat-mis-forget-half',
      description:
        'I find the area of a triangle by multiplying base by perpendicular height, without halving.',
      triggerAnswer: 'forget-half',
      correction:
        'Actually that gives the area of the surrounding rectangle. A triangle covers only half of that rectangle, so you must halve the result.',
      reExplanation:
        'For base 10 cm and height 6 cm, base x height = 60 cm squared, but that is the rectangle made by the base and the height. The triangle is the diagonal half of that rectangle, so its area is 1/2 x 10 x 6 = 30 cm squared. The half is what makes the formula a triangle rule and not a rectangle rule.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a triangle area question where pupils used a slant side instead of the perpendicular height.
    {
      id: 'gat-mis-use-slant-as-height',
      description:
        'I use a slant side of the triangle as the height, instead of the perpendicular distance from the base to the opposite vertex.',
      triggerAnswer: 'use-slant-as-height',
      correction:
        'In fact the height must meet the base at a right angle. A slant side meets the base at the vertex, not at a right angle, so it is not the height.',
      reExplanation:
        'For a right-triangle with legs 12 cm and 5 cm, the slant side is 13 cm. Using 13 cm as the height gives 1/2 x 12 x 13 = 78 cm squared, which is wrong. The correct area is 1/2 x 12 x 5 = 30 cm squared, using the two legs that meet at the right angle as base and height.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2022, Paper 01 (Foundation, Non-calculator), commentary on a unit-conversion question where pupils treated 1 m squared as 100 cm squared instead of 10 000 cm squared.
    {
      id: 'gat-mis-cm-to-m-squared',
      description:
        'I convert cm squared to m squared by dividing by 100, instead of dividing by 10 000.',
      triggerAnswer: 'cm-to-m-squared',
      correction:
        'Actually 1 m = 100 cm, so 1 m squared = 100 x 100 = 10 000 cm squared. Areas use the conversion factor squared.',
      reExplanation:
        'A triangle with base 250 cm and height 180 cm has area 1/2 x 250 x 180 = 22 500 cm squared. In metres squared this is 22 500 / 10 000 = 2.25 m squared. Dividing by 100 instead would give 225 m squared, which is far too big for a triangle that fits inside a 2.5 m by 1.8 m rectangle.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 2F (Foundation, Calculator), commentary on a "find the missing piece" question where pupils computed the outer area but forgot to subtract the cut-out.
    {
      id: 'gat-mis-forget-subtract-cutout',
      description:
        'When a smaller shape is cut out of a triangle, I give the area of the whole triangle and forget to subtract the cut-out.',
      triggerAnswer: 'forget-subtract-cutout',
      correction:
        'Actually the painted, planted, or covered area is what remains after the cut-out has been removed.',
      reExplanation:
        'For a triangular gable with base 8 m and perpendicular height 3 m, area = 1/2 x 8 x 3 = 12 m squared. If a 2 m by 1 m vent inside it is not painted, that 2 m squared is removed, so the painted area is 12 - 2 = 10 m squared. The vent area is exactly the part the painter does not cover.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 5 Geometry and Measures, "Area of Triangles" page common-mistake callout on units of area.
    {
      id: 'gat-mis-units-not-squared',
      description:
        'I write the area of a triangle in cm or m, instead of in cm squared or m squared.',
      triggerAnswer: 'units-not-squared',
      correction:
        'In fact multiplying two lengths together gives a unit of length squared. An area is always in cm squared or m squared, never in cm or m.',
      reExplanation:
        'For base 5 cm and height 8 cm, area = 1/2 x 5 x 8 = 20. Both side lengths are in cm, so the answer is 20 cm squared, not 20 cm. The label cm squared tells you that the answer counts unit squares of area, not a single distance along the edge of the triangle.',
    },
    // Source: NCETM "Misconceptions and how to overcome them: area" reference document, Year 6/7 transition pack, on pupils confusing area with perimeter by adding side lengths.
    {
      id: 'gat-mis-add-base-height',
      description:
        'I add the base and the perpendicular height to find the area of a triangle.',
      triggerAnswer: 'add-base-height',
      correction:
        'Actually adding lengths gives a distance, not an area. Area always comes from multiplying two perpendicular lengths and then halving.',
      reExplanation:
        'For base 7 cm and height 4 cm, adding gives 7 + 4 = 11 cm, which is a length. The area is 1/2 x 7 x 4 = 14 cm squared, which counts unit squares of surface inside the triangle. The check: an area must be in cm squared or m squared, not in cm or m.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 8 "Measurement" by Hart, on pupils halving twice when applying the triangle area formula.
    {
      id: 'gat-mis-double-half',
      description:
        'I work out 1/2 x base x perpendicular height and then halve the answer again at the end.',
      triggerAnswer: 'double-half',
      correction:
        'In fact the half is already inside the formula. Halving a second time would give a quarter of the rectangle area, not a half.',
      reExplanation:
        'For base 9 cm and height 6 cm, the rule gives 1/2 x 9 x 6 = 27 cm squared, which is the correct triangle area. Halving 27 again gives 13.5, which is half a triangle, not a triangle. Either halve the base first, or halve the product at the end, but only do it once.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const areaTrianglesZoneNodes = [areaTriangles]
