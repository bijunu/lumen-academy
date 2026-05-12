import type { SkillNode } from '@/types/content'

export const geometryMeasureAreaParallelograms: SkillNode = {
  id: 'maths-geometry-measure-area-parallelograms',
  title: 'Area of Parallelograms',
  description:
    'Find the area of a parallelogram as base multiplied by perpendicular height. See why the rule works by cutting a right-triangle off one end of the parallelogram and sliding it to the other end to form a rectangle of the same base and height. The most common slip is to use the slant side in place of the perpendicular height. Apply the rule to UK contexts such as a Sevenoaks garden plot, a Manchester schoolyard banner and a Tunbridge Wells stained-glass panel, and check the height runs at right angles to the base.',
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
      aqa: 'G16 Know and apply formulae to calculate area of triangles, parallelograms, trapezia (GCSE Mathematics 8300)',
      edexcel:
        'G16 Know and apply formulae to calculate area of triangles, parallelograms, trapezia (GCSE Mathematics 1MA1)',
      ocr: '10.03a Area of triangles, parallelograms and trapezia (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'gap-scene-cut-and-rearrange',
      title: 'Cut a Parallelogram into a Rectangle',
      type: 'diagram',
      instructions:
        'Read how a parallelogram becomes a rectangle of the same base and the same perpendicular height. Take the right-angle triangle formed at one end of a parallelogram with base 6 cm and perpendicular height 4 cm. Slide that triangle along to the other end. The new shape has the same base of 6 cm, the same perpendicular height of 4 cm and no slant edges. So the parallelogram has the same area as the rectangle: area = 6 x 4 = 24 cm squared.',
      data: {
        parallelogram: { base: 6, perpendicularHeight: 4, slantSide: 5, areaUnit: 'cm squared', area: 24 },
        rearranged: { length: 6, width: 4, area: 24, unit: 'cm squared' },
        callout:
          'A parallelogram has the same area as a rectangle of equal base and perpendicular height. The slant side of 5 cm plays no part in the area.',
      },
    },
    {
      id: 'gap-scene-formula-on-diagram',
      title: 'Read off the Base and Perpendicular Height',
      type: 'labelled-diagram',
      instructions:
        'Read each label on the parallelogram. The base of 8 cm runs along the bottom edge. The perpendicular height of 5 cm is the dashed line that meets the base at a right angle. The slant side of 6 cm is the sloped edge. Use base x perpendicular height: area = 8 x 5 = 40 cm squared. The 6 cm slant side is a distractor.',
      data: {
        viewBox: '0 0 320 240',
        svg:
          '<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg">' +
          '<polygon points="60,180 220,180 280,60 120,60" fill="#cfe7ff" stroke="#1d4ed8" stroke-width="2"/>' +
          '<line x1="120" y1="60" x2="120" y2="180" stroke="#dc2626" stroke-width="2" stroke-dasharray="6 4"/>' +
          '<text x="140" y="200" font-family="sans-serif" font-size="14">base = 8 cm</text>' +
          '<text x="60" y="125" font-family="sans-serif" font-size="14" fill="#dc2626">h = 5 cm</text>' +
          '<text x="240" y="120" font-family="sans-serif" font-size="14">slant = 6 cm</text>' +
          '<text x="60" y="225" font-family="sans-serif" font-size="12">Area = 8 x 5 = 40 cm squared</text>' +
          '</svg>',
        hotspots: [
          {
            id: 'gap-base-label',
            x: 50,
            y: 80,
            label: 'Base 8 cm',
            description: 'The base is the bottom edge of the parallelogram.',
          },
          {
            id: 'gap-height-label',
            x: 30,
            y: 50,
            label: 'Perpendicular height 5 cm',
            description: 'The dashed red line meets the base at a right angle, so it is the height.',
          },
          {
            id: 'gap-slant-label',
            x: 75,
            y: 50,
            label: 'Slant side 6 cm (not the height)',
            description: 'The slant side is the sloped edge. It does not enter the area formula.',
          },
        ],
      },
    },
    {
      id: 'gap-scene-perp-vs-slant',
      title: 'Perpendicular Height vs Slant Side',
      type: 'diagram',
      instructions:
        'Read how two parallelograms with the same base and the same slant side can have very different areas. Parallelogram A has base 10 cm, perpendicular height 6 cm and slant side 7 cm. Parallelogram B has base 10 cm, perpendicular height 3 cm and slant side 7 cm (more leaning). Both have the same slant side, but their areas are 10 x 6 = 60 cm squared and 10 x 3 = 30 cm squared. The slant side does not fix the area; only the perpendicular height does.',
      data: {
        parallelogramA: { base: 10, perpendicularHeight: 6, slantSide: 7, area: 60, unit: 'cm squared' },
        parallelogramB: { base: 10, perpendicularHeight: 3, slantSide: 7, area: 30, unit: 'cm squared' },
        callout:
          'Two parallelograms can share a base and a slant side yet hold very different areas. Always read the perpendicular height off the diagram, not the slant side.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'gap-worked-1',
      title: 'A Sevenoaks garden parallelogram with base 8 m and perpendicular height 5 m',
      steps: [
        {
          explanation:
            'Read the base and the perpendicular height off the plan. Both are in metres, so no conversion is needed.',
          maths: 'base = 8 m, perpendicular height = 5 m',
        },
        {
          explanation:
            'Apply the parallelogram area rule: area equals base multiplied by perpendicular height.',
          maths: 'area = 8 x 5',
        },
        {
          explanation: 'Carry out the multiplication.',
          maths: '8 x 5 = 40',
        },
        {
          explanation:
            'Write the unit. Both lengths are in metres, so the area is in metres squared.',
          maths: 'area = 40 m squared',
        },
        {
          explanation:
            'So the Sevenoaks gardener needs 40 m squared of turf to cover the parallelogram plot.',
          maths: 'turf needed: 40 m squared',
        },
      ],
    },
    {
      id: 'gap-worked-2',
      title: 'A Manchester banner with base 12 cm, perpendicular height 7 cm and slant side 9 cm',
      steps: [
        {
          explanation:
            'Read the three labels. The base is 12 cm, the perpendicular height is 7 cm and the slant side is 9 cm. The slant side is a distractor for the area.',
          maths: 'base = 12 cm, perpendicular height = 7 cm, slant side = 9 cm',
        },
        {
          explanation:
            'Choose the perpendicular height in the area rule, not the slant side.',
          maths: 'area = base x perpendicular height',
        },
        {
          explanation:
            'Substitute the base and the perpendicular height.',
          maths: 'area = 12 x 7',
        },
        {
          explanation: 'Multiply to get the area.',
          maths: '12 x 7 = 84',
        },
        {
          explanation:
            'State the area in the correct square unit, then check that the slant side was ignored.',
          maths: 'area = 84 cm squared',
        },
      ],
    },
  ],
  questions: [
    // Core 1
    {
      id: 'gap-q1',
      type: 'numeric-entry',
      stem: 'A parallelogram has base 7 cm and perpendicular height 4 cm. What is its area in cm squared?',
      tier: 'core',
      correctAnswer: 28,
      xpValue: 10,
      unit: 'cm squared',
      hint: 'Area of a parallelogram = base x perpendicular height. Multiply 7 by 4.',
    },
    // Core 2
    {
      id: 'gap-q2',
      type: 'numeric-entry',
      stem: 'A parallelogram has base 9 cm and perpendicular height 6 cm. What is its area in cm squared?',
      tier: 'core',
      correctAnswer: 54,
      xpValue: 10,
      unit: 'cm squared',
      hint: 'Multiply the base by the perpendicular height: 9 x 6.',
    },
    // Core 3
    {
      id: 'gap-q3',
      type: 'missing-step',
      stem: 'Fill in the missing step. Find the area of a parallelogram with base 10 m and perpendicular height 8 m.',
      tier: 'core',
      steps: [
        'Identify the base (10 m) and the perpendicular height (8 m).',
        'Apply the rule: area = base x perpendicular height.',
        null,
        'State the area in the correct square unit: area = 80 m squared.',
      ],
      missingStepIndex: 2,
      correctStep: 'Substitute and multiply: area = 10 x 8 = 80.',
      xpValue: 10,
    },
    // Core 4
    {
      id: 'gap-q4',
      type: 'numeric-entry',
      stem: 'A parallelogram has base 5 cm and perpendicular height 12 cm. What is its area in cm squared?',
      tier: 'core',
      correctAnswer: 60,
      xpValue: 10,
      unit: 'cm squared',
      hint: 'Multiply 5 by 12.',
    },
    // Core 5
    {
      id: 'gap-q5',
      type: 'multiple-choice',
      stem: 'A Sevenoaks garden parallelogram has base 8 m, perpendicular height 5 m and slant side 6 m. What is its area?',
      tier: 'core',
      options: ['13 m squared', '40 m squared', '48 m squared', '240 m squared'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'gap-mis-slant-instead-of-perp',
      hint: 'Area = base x perpendicular height = 8 x 5. The slant side of 6 m is a distractor.',
    },
    // Core 6
    {
      id: 'gap-q6',
      type: 'multiple-choice',
      stem: 'A parallelogram banner has base 6 cm and perpendicular height 4 cm. What is its area?',
      tier: 'core',
      options: ['10 cm squared', '20 cm squared', '24 cm', '24 cm squared'],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'gap-mis-square-units-forgotten',
      hint: 'Multiply 6 by 4 = 24, and the unit must be cm squared because two lengths in cm have been multiplied.',
    },
    // Core 7
    {
      id: 'gap-q7',
      type: 'spot-misconception',
      stem: 'For a parallelogram with base 8 cm, perpendicular height 5 cm and slant side 6 cm, Liam says "area = 8 x 6 = 48 cm squared, using the slant side".',
      tier: 'core',
      statements: [
        {
          text: 'Liam is right. The slant side gives the area when multiplied by the base.',
          isMisconception: true,
        },
        {
          text: 'In fact area = base x perpendicular height = 8 x 5 = 40 cm squared. The slant side of 6 cm is not the height because it does not meet the base at a right angle.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'gap-mis-slant-instead-of-perp',
    },
    // Confident 1
    {
      id: 'gap-q8',
      type: 'multiple-choice',
      stem: 'A parallelogram has base 12 cm, perpendicular height 7 cm and slant side 9 cm. What is its area?',
      tier: 'confident',
      options: ['28 cm squared', '63 cm squared', '84 cm squared', '108 cm squared'],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'gap-mis-slant-instead-of-perp',
      hint: 'Use base x perpendicular height: 12 x 7. Ignore the slant side of 9 cm.',
    },
    // Confident 2
    {
      id: 'gap-q9',
      type: 'multiple-choice',
      stem: 'A parallelogram has base 10 cm and perpendicular height 6 cm. Aisha writes that the area is 10 + 6 = 16 cm squared. Which row corrects her?',
      tier: 'confident',
      options: [
        '10 + 6 = 16 cm squared is correct.',
        'Area = 10 x 6 = 60 cm squared. Adding the lengths gives part of the perimeter, not the area.',
        'Area = 10 + 6 + 10 + 6 = 32 cm squared. Adding all four sides gives the area.',
        'Area = 10 x 6 / 2 = 30 cm squared. A parallelogram halves the rectangle area.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'gap-mis-add-base-height',
      hint: 'The rule is base x perpendicular height (multiply, not add). Adding gives a perimeter-style answer.',
    },
    // Confident 3
    {
      id: 'gap-q10',
      type: 'multiple-choice',
      stem: 'A parallelogram has base 14 cm and perpendicular height 5 cm. A pupil writes "area = 14 x 5 / 2 = 35 cm squared, halving as for a triangle". Which row corrects this?',
      tier: 'confident',
      options: [
        'The pupil is right: parallelogram area always halves the base x height product.',
        'Area = 14 + 5 = 19 cm squared. No multiplication is needed.',
        'Area = 14 x 5 = 70 cm squared. The halving rule belongs to triangles, not parallelograms.',
        'Area = 14 x 5 x 2 = 140 cm squared. A parallelogram is two triangles, so double the answer.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'gap-mis-halve-the-answer',
      hint: 'A parallelogram is the same area as a rectangle of equal base and height. Do not halve.',
    },
    // Confident 4
    {
      id: 'gap-q11',
      type: 'multiple-choice',
      stem: 'A rhombus has all four sides of length 7 cm and perpendicular height 5 cm. What is its area?',
      tier: 'confident',
      options: [
        '35 cm squared',
        '12 cm squared',
        '24 cm squared',
        '49 cm squared',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'gap-mis-rhombus-different-rule',
      hint: 'A rhombus is a special parallelogram with all sides equal. The rule is still base x perpendicular height: 7 x 5.',
    },
    // Confident 5
    {
      id: 'gap-q12',
      type: 'numeric-entry',
      stem: 'A parallelogram has area 72 cm squared and base 9 cm. What is its perpendicular height in cm?',
      tier: 'confident',
      correctAnswer: 8,
      xpValue: 15,
      unit: 'cm',
      hint: 'If base x perpendicular height = 72 and base = 9, then perpendicular height = 72 / 9.',
    },
    // Confident 6
    {
      id: 'gap-q13',
      type: 'numeric-entry',
      stem: 'A Tunbridge Wells stained-glass parallelogram has base 15 cm and perpendicular height 9 cm. What is its area in cm squared?',
      tier: 'confident',
      correctAnswer: 135,
      xpValue: 15,
      unit: 'cm squared',
      hint: 'Multiply 15 by 9. Use 15 x 9 = 15 x 10 - 15 = 150 - 15.',
    },
    // Confident 7
    {
      id: 'gap-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step. A Manchester schoolyard banner is a parallelogram with base 12 cm, perpendicular height 7 cm and slant side 9 cm.',
      tier: 'confident',
      steps: [
        'Identify the base (12 cm) and the perpendicular height (7 cm). Note that the slant side of 9 cm is not the height.',
        'Apply the rule: area = base x perpendicular height.',
        null,
        'State the answer in the correct square unit: area = 84 cm squared.',
      ],
      missingStepIndex: 2,
      correctStep: 'Substitute and multiply: area = 12 x 7 = 84.',
      xpValue: 20,
      misconceptionId: 'gap-mis-slant-instead-of-perp',
    },
    // Confident 8
    {
      id: 'gap-q15',
      type: 'drag-order',
      stem: 'Order these parallelogram areas from smallest to largest. Each is given as base x perpendicular height.',
      tier: 'confident',
      items: [
        '8 cm x 5 cm',
        '6 cm x 9 cm',
        '12 cm x 3 cm',
        '7 cm x 7 cm',
      ],
      correctOrder: [2, 0, 3, 1],
      xpValue: 15,
      hint: 'Work out each area: 8 x 5 = 40, 6 x 9 = 54, 12 x 3 = 36, 7 x 7 = 49. Then sort.',
    },
    // Challenge 1 (Bond-style multi-step)
    {
      id: 'gap-q16',
      type: 'numeric-entry',
      stem: 'A Sevenoaks family lays turf on a parallelogram garden plot with base 8 m and perpendicular height 5 m. The turf costs £12 per m squared. The fitter charges a flat fee of £55 on top. What is the total bill in pounds?',
      tier: 'challenge',
      correctAnswer: 535,
      xpValue: 25,
      unit: 'pounds',
      hint: 'First find the area: 8 x 5 = 40 m squared. Then 40 x £12 = £480. Add £55 for the fitter.',
    },
    // Challenge 2
    {
      id: 'gap-q17',
      type: 'multiple-choice',
      stem: 'A Manchester schoolyard banner is a parallelogram with base 1.2 m and perpendicular height 80 cm. What is its area in m squared?',
      tier: 'challenge',
      options: ['9.6 m squared', '96 m squared', '960 m squared', '0.96 m squared'],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'gap-mis-square-units-forgotten',
      hint: 'Convert 80 cm to 0.8 m first. Then area = 1.2 x 0.8 = 0.96 m squared.',
    },
    // Challenge 3
    {
      id: 'gap-q18',
      type: 'multiple-choice',
      stem: 'A Dover stained-glass workshop has two parallelograms. Both have base 10 cm and slant side 7 cm. Panel A has perpendicular height 6 cm; panel B has perpendicular height 4 cm. By how many cm squared does panel A exceed panel B in area?',
      tier: 'challenge',
      options: ['10 cm squared', '20 cm squared', '40 cm squared', '60 cm squared'],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'gap-mis-slant-instead-of-perp',
      hint: 'Panel A area = 10 x 6 = 60. Panel B area = 10 x 4 = 40. Difference = 60 - 40.',
    },
    // Challenge 4
    {
      id: 'gap-q19',
      type: 'multiple-choice',
      stem: 'A Tunbridge Wells parallelogram patio has base 6 m, perpendicular height 4 m and slant side 5 m. A pupil writes the area as 6 x 4 x 5 = 120 m squared. Which row corrects the slip?',
      tier: 'challenge',
      options: [
        'Area = 6 x 4 = 24 m squared. The rule uses two lengths only: base and perpendicular height.',
        '6 x 4 x 5 = 120 m squared is correct.',
        'Area = 6 x 5 = 30 m squared, multiplying base by slant side.',
        'Area = 6 + 4 + 5 = 15 m squared, adding the three given lengths.',
      ],
      correctIndex: 0,
      xpValue: 25,
      misconceptionId: 'gap-mis-multiply-three-sides',
      hint: 'A parallelogram is a flat shape. Area uses only two lengths: base and perpendicular height.',
    },
    // Challenge 5
    {
      id: 'gap-q20',
      type: 'multiple-choice',
      stem: 'A Manchester park has a parallelogram lawn with area 96 m squared and base 12 m. A path is laid along the base. The perpendicular height is then doubled for a new lawn of the same base. What is the new area in m squared?',
      tier: 'challenge',
      options: ['96 m squared', '144 m squared', '192 m squared', '384 m squared'],
      correctIndex: 2,
      xpValue: 25,
      hint: 'Old perpendicular height = 96 / 12 = 8 m. Doubled = 16 m. New area = 12 x 16.',
    },
    // Challenge 6
    {
      id: 'gap-q21',
      type: 'numeric-entry',
      stem: 'A Sevenoaks gardener tiles a parallelogram patio of base 9 m and perpendicular height 4 m with square tiles of side 50 cm. How many tiles are needed to cover the patio exactly?',
      tier: 'challenge',
      correctAnswer: 144,
      xpValue: 25,
      hint: 'Patio area = 9 x 4 = 36 m squared. Each tile is 0.5 x 0.5 = 0.25 m squared. Tiles = 36 / 0.25.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a parallelogram area question where pupils used the slant side in place of the perpendicular height.
    {
      id: 'gap-mis-slant-instead-of-perp',
      description:
        'I work out the area of a parallelogram by multiplying the base by the slant side, instead of by the perpendicular height.',
      triggerAnswer: 'slant-instead-of-perp',
      correction:
        'In fact the area uses the perpendicular height, the dashed line that meets the base at a right angle. The slant side is sloped, not perpendicular.',
      reExplanation:
        'For a parallelogram with base 8 cm, perpendicular height 5 cm and slant side 6 cm, the area is 8 x 5 = 40 cm squared, not 8 x 6 = 48 cm squared. Two parallelograms can share a base and a slant side yet have very different areas; only the perpendicular height fixes the area.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a parallelogram area question where pupils multiplied three labelled lengths together.
    {
      id: 'gap-mis-multiply-three-sides',
      description:
        'I multiply the base by the perpendicular height by the slant side, treating the parallelogram like a 3D shape.',
      triggerAnswer: 'multiply-three-sides',
      correction:
        'Actually a parallelogram is a flat shape. The area rule uses only two lengths: base and perpendicular height.',
      reExplanation:
        'For a parallelogram with base 6 m, perpendicular height 4 m and slant side 5 m, the area is 6 x 4 = 24 m squared. The slant side does not enter the rule at all. Multiplying three lengths gives a volume in m cubed, which makes no sense for a flat patio.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2022, Paper 01 (Foundation, Non-calculator), commentary on a parallelogram question where pupils added the base and the perpendicular height instead of multiplying.
    {
      id: 'gap-mis-add-base-height',
      description:
        'I find the area of a parallelogram by adding the base and the perpendicular height, instead of multiplying them.',
      triggerAnswer: 'add-base-height',
      correction:
        'In fact adding two lengths gives a length, not an area. The rule is base multiplied by perpendicular height.',
      reExplanation:
        'For a parallelogram with base 10 cm and perpendicular height 6 cm, area = 10 x 6 = 60 cm squared. Writing 10 + 6 = 16 cm gives a length in cm, which cannot be the area. The unit cm squared is a check that two lengths have been multiplied together.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 5 Geometry and Measures, "Area of Parallelograms" page; the worked example warns that the parallelogram does not halve like a triangle.
    {
      id: 'gap-mis-halve-the-answer',
      description:
        'I halve the answer for a parallelogram, because I remember that triangles need halving.',
      triggerAnswer: 'halve-the-answer',
      correction:
        'Actually only triangles use the half. A parallelogram has the same area as a rectangle of the same base and the same perpendicular height.',
      reExplanation:
        'For a parallelogram with base 14 cm and perpendicular height 5 cm, area = 14 x 5 = 70 cm squared, not 35 cm squared. The cut-and-slide picture shows the parallelogram becoming a rectangle of 14 x 5; no halving step appears at any point.',
    },
    // Source: NCETM "Misconceptions and how to overcome them: area" reference document, Year 6/7 transition pack, on pupils dropping the squared part of the unit when stating an area answer.
    {
      id: 'gap-mis-square-units-forgotten',
      description:
        'I write the area of a parallelogram in cm or m, instead of cm squared or m squared, after multiplying two lengths.',
      triggerAnswer: 'square-units-forgotten',
      correction:
        'In fact two lengths multiplied together give a square unit. Writing cm or m for an area drops the squared part.',
      reExplanation:
        'For a parallelogram with base 6 cm and perpendicular height 4 cm, the area is 24 cm squared, not 24 cm. The square unit signals that the answer measures surface, not length. A length in cm cannot tell you how much paint or turf the shape needs.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 8 "Measurement" by Hart, on pupils thinking that a rhombus or "diamond" needs a different area rule because the sides are equal.
    {
      id: 'gap-mis-rhombus-different-rule',
      description:
        'I think a rhombus needs a different area rule from a parallelogram, because all four sides are equal.',
      triggerAnswer: 'rhombus-different-rule',
      correction:
        'Actually a rhombus is a special parallelogram, so it uses the same rule: base multiplied by perpendicular height.',
      reExplanation:
        'For a rhombus with all sides 7 cm and perpendicular height 5 cm, the area is 7 x 5 = 35 cm squared. The equal sides do not change the rule. The base is one of those 7 cm sides, and the perpendicular height is still the dashed line meeting that base at a right angle.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const geometryMeasureAreaParallelogramsZoneNodes = [geometryMeasureAreaParallelograms]
