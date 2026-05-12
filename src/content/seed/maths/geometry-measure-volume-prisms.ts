import type { SkillNode } from '@/types/content'

export const volumePrisms: SkillNode = {
  id: 'maths-geometry-measure-volume-prisms',
  title: 'Volume of Triangular and Other Right Prisms',
  description:
    'Find the volume of a right prism as the area of its uniform cross-section multiplied by its perpendicular length. A cuboid is a special case with a rectangular cross-section. For a triangular prism the cross-section area is 1/2 x base x height, then multiply by the prism length. Apply the same idea to trapezoidal and L-shape prisms used in UK contexts such as Toblerone packaging, ramp wedges, gutter sections and kerbstones.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-geometry-measure',
  zoneName: 'Geometry and Measure',
  tier: 'challenge',
  prerequisites: ['maths-geometry-measure-volume-cuboids'],
  curriculum: {
    ks3Objective:
      'Derive and apply formulae to calculate and solve problems involving: perimeter and area of triangles, parallelograms, trapezia, volume of cuboids (including cubes) and other prisms (including cylinders).',
    awardingBodies: {
      aqa: 'G16 Know and apply formulae to calculate volume of cuboids and other right prisms (GCSE Mathematics 8300)',
      edexcel: 'G16 Know and apply formulae to calculate volume of cuboids and other right prisms (GCSE Mathematics 1MA1)',
      ocr: '10.04a Volume of right prisms including triangular prisms (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'gvp-scene-cuboid-as-prism',
      title: 'A Cuboid is Just a Special Prism',
      type: 'diagram',
      instructions:
        'Look at a 4 cm by 3 cm by 5 cm cuboid drawn on a centimetre grid. The 4 cm by 3 cm rectangular face is the uniform cross-section: it stays the same shape all the way from front to back. The 5 cm side is the perpendicular length of the prism. Cross-section area = 4 x 3 = 12 cm squared. Volume = 12 x 5 = 60 cm cubed. The cuboid rule length x width x height is just a special case of the prism rule cross-section area x length.',
      data: {
        cuboid: { length: 4, width: 3, depth: 5, unit: 'cm' },
        crossSectionArea: 12,
        prismLength: 5,
        volume: 60,
        formula: 'V = (cross-section area) x (length)',
        callout:
          'A right prism has the same cross-section all the way along, and the length runs perpendicular to that cross-section.',
      },
    },
    {
      id: 'gvp-scene-uniform-cross-section',
      title: 'Spotting the Uniform Cross-section',
      type: 'labelled-diagram',
      instructions:
        'Each hotspot points to the uniform cross-section of a different right prism. The cross-section is the face whose shape stays the same all the way along the prism. For a triangular prism the cross-section is the triangle on the end. For an L-shape prism the cross-section is the L-face on the end. For a kerbstone the cross-section is the trapezium on the end. The other faces are rectangles whose sides depend on the prism length.',
      data: {
        viewBox: '0 0 320 240',
        svg:
          '<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg">' +
          '<polygon points="20,160 80,160 50,100" fill="#cfe7ff" stroke="#1d4ed8" stroke-width="2"/>' +
          '<polygon points="80,160 160,140 130,80 50,100" fill="#e0f2fe" stroke="#1d4ed8" stroke-width="2"/>' +
          '<polygon points="20,160 80,160 130,80 50,100" fill="none" stroke="#1d4ed8" stroke-width="2"/>' +
          '<text x="50" y="190" font-family="sans-serif" font-size="11" text-anchor="middle">Triangular prism</text>' +
          '<rect x="180" y="100" width="60" height="60" fill="#cfe7ff" stroke="#1d4ed8" stroke-width="2"/>' +
          '<rect x="180" y="160" width="100" height="40" fill="#cfe7ff" stroke="#1d4ed8" stroke-width="2"/>' +
          '<rect x="240" y="100" width="40" height="60" fill="#ffffff" stroke="#1d4ed8" stroke-width="2" stroke-dasharray="3 3"/>' +
          '<text x="220" y="220" font-family="sans-serif" font-size="11" text-anchor="middle">L-shape prism</text>' +
          '</svg>',
        hotspots: [
          {
            id: 'gvp-hot-triangle-face',
            x: 16,
            y: 50,
            label: 'Triangle cross-section',
            description:
              'The triangle on the end is the uniform cross-section. Its area is 1/2 x base x height.',
          },
          {
            id: 'gvp-hot-l-face',
            x: 65,
            y: 65,
            label: 'L-shape cross-section',
            description:
              'The L-face on the end is the uniform cross-section. Split it into two rectangles to find its area.',
          },
          {
            id: 'gvp-hot-prism-length',
            x: 40,
            y: 80,
            label: 'Length is perpendicular to the cross-section',
            description:
              'The prism length runs at right angles to the cross-section face, not along a slant.',
          },
        ],
      },
    },
    {
      id: 'gvp-scene-cross-section-times-length',
      title: 'Volume = Cross-section Area x Length',
      type: 'diagram',
      instructions:
        'Read how the prism rule works for a triangular prism that is a Toblerone-style chocolate bar. The triangular cross-section has base 6 cm and perpendicular height 4 cm, so its area is 1/2 x 6 x 4 = 12 cm squared. The bar is 20 cm long. Volume = 12 x 20 = 240 cm cubed. Two checks worth doing: the cross-section area uses cm squared and the prism length uses cm, so the volume comes out in cm cubed. The 1/2 in the triangle area must not be dropped, otherwise the answer doubles.',
      data: {
        prismType: 'triangular',
        crossSection: {
          shape: 'triangle',
          base: 6,
          perpendicularHeight: 4,
          area: 12,
          areaUnit: 'cm squared',
        },
        prismLength: 20,
        prismLengthUnit: 'cm',
        volume: 240,
        volumeUnit: 'cm cubed',
        callout:
          'Two-step check: first the cross-section area, then multiply by the perpendicular length. If you forget the 1/2 in the triangle area, the volume doubles.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'gvp-worked-1',
      title: 'Volume of a triangular prism Toblerone bar',
      steps: [
        {
          explanation:
            'A chocolate bar has a triangular cross-section with base 6 cm and perpendicular height 4 cm. The bar is 20 cm long. All three measurements are in cm, so the volume will be in cm cubed.',
          maths: 'base = 6 cm, height = 4 cm, length = 20 cm',
        },
        {
          explanation:
            'Apply the prism rule: volume equals the area of the cross-section multiplied by the perpendicular length.',
          maths: 'V = (cross-section area) x (length)',
        },
        {
          explanation:
            'Find the cross-section area using the triangle rule: half base times perpendicular height.',
          maths: 'cross-section area = 1/2 x 6 x 4',
        },
        {
          explanation:
            'Carry out the multiplication for the cross-section.',
          maths: '1/2 x 6 x 4 = 12 cm squared',
        },
        {
          explanation:
            'Multiply the cross-section area by the prism length to find the volume.',
          maths: 'V = 12 x 20',
        },
        {
          explanation: 'State the volume in the correct unit.',
          maths: 'V = 240 cm cubed',
        },
        {
          explanation:
            'So a 20 cm long Toblerone-style bar with a 6 cm by 4 cm triangular cross-section takes up 240 cm cubed of space.',
          maths: 'volume: 240 cm cubed',
        },
      ],
    },
    {
      id: 'gvp-worked-2',
      title: 'Volume of an L-shape kerbstone prism',
      steps: [
        {
          explanation:
            'A Sevenoaks pavement kerbstone has an L-shaped cross-section. The L splits into a 20 cm by 8 cm rectangle and a 12 cm by 6 cm rectangle joined along an edge. The kerbstone is 50 cm long.',
          maths: 'L-face: 20 cm x 8 cm and 12 cm x 6 cm; length = 50 cm',
        },
        {
          explanation:
            'Find the area of the first rectangle in the cross-section.',
          maths: '20 x 8 = 160 cm squared',
        },
        {
          explanation:
            'Find the area of the second rectangle in the cross-section.',
          maths: '12 x 6 = 72 cm squared',
        },
        {
          explanation:
            'Add the two rectangle areas to find the total cross-section area.',
          maths: 'cross-section area = 160 + 72 = 232 cm squared',
        },
        {
          explanation:
            'Apply the prism rule: multiply the cross-section area by the perpendicular length.',
        },
        {
          explanation: 'Compute the volume.',
          maths: 'V = 232 x 50 = 11 600 cm cubed',
        },
        {
          explanation:
            'So one L-shape kerbstone takes up 11 600 cm cubed of concrete, which the supplier can convert to a kg mass using the concrete density.',
          maths: 'volume: 11 600 cm cubed',
        },
      ],
    },
  ],
  questions: [
    // Core 1
    {
      id: 'gvp-q1',
      type: 'numeric-entry',
      stem: 'A right prism has a cross-section area of 8 cm squared and a perpendicular length of 5 cm. What is its volume in cm cubed?',
      tier: 'core',
      correctAnswer: 40,
      xpValue: 10,
      unit: 'cm cubed',
      hint: 'Volume of any right prism = cross-section area x length. Multiply 8 by 5.',
    },
    // Core 2
    {
      id: 'gvp-q2',
      type: 'numeric-entry',
      stem: 'A triangular prism has a triangular cross-section with base 6 cm and perpendicular height 4 cm. What is the area of the cross-section in cm squared?',
      tier: 'core',
      correctAnswer: 12,
      xpValue: 10,
      unit: 'cm squared',
      hint: 'Triangle area = 1/2 x base x perpendicular height. Work out 1/2 x 6 x 4.',
    },
    // Core 3 (MCQ correctIndex 0)
    {
      id: 'gvp-q3',
      type: 'multiple-choice',
      stem: 'Which face of a right triangular prism is its uniform cross-section?',
      tier: 'core',
      options: [
        'The triangular face on the end of the prism.',
        'The longest rectangular side face.',
        'The shortest rectangular side face.',
        'The middle rectangular side face.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'gvp-mis-wrong-face-cross-section',
      hint: 'The cross-section is the face whose shape stays the same all the way along the prism. For a triangular prism, that is the triangle on the end.',
    },
    // Core 4 (MCQ correctIndex 2)
    {
      id: 'gvp-q4',
      type: 'multiple-choice',
      stem: 'A triangular prism has triangular cross-section area 15 cm squared and length 10 cm. What is its volume?',
      tier: 'core',
      options: [
        '25 cm cubed',
        '75 cm cubed',
        '150 cm cubed',
        '1500 cm cubed',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'gvp-mis-add-area-and-length',
      hint: 'Multiply the cross-section area by the length: 15 x 10. The value 25 comes from adding 15 + 10, which is wrong for volume.',
    },
    // Core 5 (numeric)
    {
      id: 'gvp-q5',
      type: 'numeric-entry',
      stem: 'A triangular prism has a triangular cross-section with base 5 cm and perpendicular height 4 cm. The prism is 12 cm long. What is its volume in cm cubed?',
      tier: 'core',
      correctAnswer: 120,
      xpValue: 10,
      unit: 'cm cubed',
      hint: 'Cross-section area = 1/2 x 5 x 4 = 10 cm squared. Then volume = 10 x 12.',
    },
    // Core 6 (MCQ correctIndex 1)
    {
      id: 'gvp-q6',
      type: 'multiple-choice',
      stem: 'A pupil works out the volume of a triangular prism with a 6 cm by 4 cm triangular cross-section and a 10 cm length as 6 x 4 x 10 = 240 cm cubed. Which row spots the slip?',
      tier: 'core',
      options: [
        'Nothing is wrong: 240 cm cubed is the correct volume.',
        'The 1/2 in the triangle cross-section was forgotten. Correct cross-section area is 1/2 x 6 x 4 = 12, so volume = 12 x 10 = 120 cm cubed.',
        'The unit should be cm squared because two side lengths were multiplied first.',
        'The length and the base were multiplied in the wrong order, so the answer is too small.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'gvp-mis-forget-half-in-triangle',
      hint: 'Multiplying all three numbers gives twice the right answer. The triangle area rule has a 1/2 that the cuboid rule does not have.',
    },
    // Core 7 (spot-misconception)
    {
      id: 'gvp-q7',
      type: 'spot-misconception',
      stem: 'For a triangular prism with cross-section area 12 cm squared and length 10 cm, Liam writes "volume = 12 + 10 = 22 cm cubed".',
      tier: 'core',
      statements: [
        {
          text: 'Liam is right. Adding the cross-section area and the length gives the volume.',
          isMisconception: true,
        },
        {
          text: 'In fact volume of a prism = cross-section area x length, not added. The correct answer is 12 x 10 = 120 cm cubed. Adding gives a number with mixed units that does not measure 3D space.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'gvp-mis-add-area-and-length',
    },
    // Confident 1 (numeric)
    {
      id: 'gvp-q8',
      type: 'numeric-entry',
      stem: 'A wooden ramp wedge for a Manchester skate park is a right triangular prism. Its triangular cross-section has base 80 cm and perpendicular height 30 cm. The wedge is 1.2 m wide. What is its volume in cm cubed?',
      tier: 'confident',
      correctAnswer: 144000,
      xpValue: 15,
      unit: 'cm cubed',
      hint: 'Convert 1.2 m to 120 cm so all sides are in cm. Cross-section area = 1/2 x 80 x 30 = 1 200 cm squared. Volume = 1 200 x 120.',
    },
    // Confident 2 (MCQ correctIndex 3)
    {
      id: 'gvp-q9',
      type: 'multiple-choice',
      stem: 'A trapezoidal kerbstone prism has a trapezium cross-section with parallel sides 12 cm and 8 cm and perpendicular height 6 cm. The kerbstone is 50 cm long. What is its volume?',
      tier: 'confident',
      options: [
        '60 cm cubed',
        '600 cm cubed',
        '900 cm cubed',
        '3 000 cm cubed',
      ],
      correctIndex: 3,
      xpValue: 15,
      hint: 'Trapezium area = 1/2 x (a + b) x h = 1/2 x (12 + 8) x 6 = 60 cm squared. Then volume = 60 x 50.',
    },
    // Confident 3 (MCQ correctIndex 0)
    {
      id: 'gvp-q10',
      type: 'multiple-choice',
      stem: 'A pupil writes the volume of a triangular prism (cross-section area 12 cm squared, length 10 cm) as 120 cm squared. Which row corrects the slip?',
      tier: 'confident',
      options: [
        '120 is correct, but the unit should be cm cubed because area in cm squared was multiplied by a length in cm.',
        'Nothing is wrong: 120 cm squared is the correct volume.',
        '120 is correct, but the unit should be cm because volume is a length around the prism.',
        'Both the number and the unit are wrong: volume = 12 + 10 = 22 cm cubed.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'gvp-mis-volume-unit-square',
      hint: 'Multiplying cm squared by cm gives cm cubed because the squared unit and the linear unit each contribute their cm.',
    },
    // Confident 4 (MCQ correctIndex 3)
    {
      id: 'gvp-q11',
      type: 'multiple-choice',
      stem: 'A pupil applies pi x r squared x h to a triangular prism with base 6 cm, perpendicular height 4 cm and length 10 cm, treating "r" as 6 and "h" as 10. Which row spots the slip?',
      tier: 'confident',
      options: [
        'The pupil should use 1/2 x base x height for the cross-section, so volume = 1/2 x 6 x 4 x 10 = 120 cm cubed.',
        'The pupil should use base x height for the cross-section, so volume = 6 x 4 x 10 = 240 cm cubed.',
        'The pupil should swap r and h, then pi x r squared x h works for any prism.',
        'The pupil applied pi x r squared x h, but pi x r squared x h is only the prism rule with a circular cross-section. For a triangle the cross-section area is 1/2 x base x perpendicular height, giving volume 120 cm cubed.',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'gvp-mis-cylinder-rule-on-prism',
      hint: 'The general prism rule is cross-section area x length. The cylinder formula pi x r squared x h is just that rule with a circle as the cross-section. For a triangle, use 1/2 x base x perpendicular height instead.',
    },
    // Confident 5 (MCQ correctIndex 2)
    {
      id: 'gvp-q12',
      type: 'multiple-choice',
      stem: 'An L-shape prism kerbstone has a cross-section made of a 20 cm by 8 cm rectangle joined to a 12 cm by 6 cm rectangle along an edge (no overlap). The kerbstone is 50 cm long. What is its volume?',
      tier: 'confident',
      options: [
        '8 000 cm cubed',
        '9 600 cm cubed',
        '11 600 cm cubed',
        '20 000 cm cubed',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'gvp-mis-l-shape-bounding',
      hint: 'L-face area = 20 x 8 + 12 x 6 = 160 + 72 = 232 cm squared. Then volume = 232 x 50.',
    },
    // Confident 6 (missing-step)
    {
      id: 'gvp-q13',
      type: 'missing-step',
      stem: 'Fill in the missing step. A Tunbridge Wells gutter section is a right triangular prism. Its triangular cross-section has base 10 cm and perpendicular height 6 cm. The gutter is 200 cm long.',
      tier: 'confident',
      steps: [
        'Apply the prism rule: V = cross-section area x length.',
        'Find the cross-section area using the triangle rule: 1/2 x 10 x 6 = 30 cm squared.',
        null,
        'State the volume with cubed units: V = 6 000 cm cubed.',
      ],
      missingStepIndex: 2,
      correctStep: 'Multiply the cross-section area by the perpendicular length: 30 x 200 = 6 000.',
      xpValue: 20,
      misconceptionId: 'gvp-mis-add-area-and-length',
    },
    // Confident 7 (drag-order)
    {
      id: 'gvp-q14',
      type: 'drag-order',
      stem: 'Order these triangular prism volumes from smallest to largest. Each entry gives base x perpendicular height x prism length, and the cross-section area uses the triangle rule.',
      tier: 'confident',
      items: [
        '4 cm x 3 cm x 10 cm',
        '6 cm x 4 cm x 10 cm',
        '5 cm x 4 cm x 8 cm',
        '8 cm x 5 cm x 10 cm',
      ],
      correctOrder: [0, 2, 1, 3],
      xpValue: 15,
      hint: 'Volume each time = 1/2 x base x height x length. Work them out: 1/2 x 4 x 3 x 10 = 60, 1/2 x 6 x 4 x 10 = 120, 1/2 x 5 x 4 x 8 = 80, 1/2 x 8 x 5 x 10 = 200. Then sort.',
    },
    // Confident 8 (spot-misconception)
    {
      id: 'gvp-q15',
      type: 'spot-misconception',
      stem: 'For an oblique-looking triangular prism whose perpendicular length is 12 cm but whose slant edge is 13 cm, Aisha uses 13 cm as the prism length when finding the volume.',
      tier: 'confident',
      statements: [
        {
          text: 'Aisha is right. The slant edge is the longest edge, so it must be the prism length to use in the rule.',
          isMisconception: true,
        },
        {
          text: 'In fact the prism length used in V = cross-section area x length is the perpendicular distance between the two cross-section faces, which is 12 cm here. Using 13 cm overcounts the volume.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'gvp-mis-slant-instead-of-perpendicular',
    },
    // Challenge 1 (Bond-style multi-step, numeric)
    {
      id: 'gvp-q16',
      type: 'numeric-entry',
      stem: 'A Sevenoaks bakery sells Toblerone-style chocolate bars shaped as right triangular prisms. Each bar has a triangular cross-section with base 4 cm and perpendicular height 3 cm, and is 18 cm long. The bars are packed into rectangular boxes that hold exactly 20 bars. What is the total volume of chocolate in cm cubed in one full box?',
      tier: 'challenge',
      correctAnswer: 2160,
      xpValue: 25,
      unit: 'cm cubed',
      hint: 'Cross-section area = 1/2 x 4 x 3 = 6 cm squared. Volume per bar = 6 x 18 = 108 cm cubed. Then 108 x 20.',
    },
    // Challenge 2 (MCQ correctIndex 1)
    {
      id: 'gvp-q17',
      type: 'multiple-choice',
      stem: 'A Dover school greenhouse roof is a right triangular prism. Its triangular cross-section has base 4 m and perpendicular height 1.5 m. The greenhouse is 6 m long. The school estimates the air volume in cubic metres and the air capacity in litres. Which row gives both numbers correctly?',
      tier: 'challenge',
      options: [
        '36 m cubed and 36 000 litres',
        '18 m cubed and 18 000 litres',
        '18 m cubed and 1 800 litres',
        '36 m cubed and 360 litres',
      ],
      correctIndex: 1,
      xpValue: 25,
      hint: 'Cross-section area = 1/2 x 4 x 1.5 = 3 m squared. Volume = 3 x 6 = 18 m cubed. Use 1 m cubed = 1 000 litres.',
    },
    // Challenge 3 (numeric)
    {
      id: 'gvp-q18',
      type: 'numeric-entry',
      stem: 'A Manchester roads team casts L-shape prism kerbstones. Each cross-section is a 20 cm by 8 cm rectangle joined to a 12 cm by 6 cm rectangle (no overlap). Each kerbstone is 60 cm long. Concrete costs £180 per cubic metre. What is the cost in pounds of concrete for one kerbstone? Use 1 m cubed = 1 000 000 cm cubed and round to the nearest pence then to the nearest pound.',
      tier: 'challenge',
      correctAnswer: 3,
      xpValue: 25,
      unit: 'pounds',
      hint: 'Cross-section area = 20 x 8 + 12 x 6 = 232 cm squared. Volume = 232 x 60 = 13 920 cm cubed = 0.013 92 m cubed. Cost = 0.013 92 x 180 = £2.5056, which rounds to £3 to the nearest pound.',
    },
    // Challenge 4 (drag-order)
    {
      id: 'gvp-q19',
      type: 'drag-order',
      stem: 'Order these prisms from smallest to largest volume. Each prism has the cross-section area and prism length given.',
      tier: 'challenge',
      items: [
        'Cross-section 25 cm squared, length 4 cm',
        'Cross-section 30 cm squared, length 5 cm',
        'Cross-section 12 cm squared, length 20 cm',
        'Cross-section 40 cm squared, length 8 cm',
      ],
      correctOrder: [0, 2, 1, 3],
      xpValue: 20,
      hint: 'Multiply across: 25 x 4 = 100, 30 x 5 = 150, 12 x 20 = 240, 40 x 8 = 320. Then sort.',
    },
    // Challenge 5 (numeric, Bond-style)
    {
      id: 'gvp-q20',
      type: 'numeric-entry',
      stem: 'A Tunbridge Wells garden centre sells trapezoidal-prism planters. Each cross-section is a trapezium with parallel sides 50 cm and 30 cm and perpendicular height 40 cm. Each planter is 80 cm long. A gardener fills one planter completely with topsoil sold at £18 per 50 litres. What is the bill in pounds for one planter? Round up to the next whole 50-litre bag, and use 1 cm cubed = 1 ml.',
      tier: 'challenge',
      correctAnswer: 54,
      xpValue: 25,
      unit: 'pounds',
      hint: 'Cross-section area = 1/2 x (50 + 30) x 40 = 1 600 cm squared. Volume = 1 600 x 80 = 128 000 cm cubed = 128 000 ml = 128 litres. 128 / 50 = 2.56, round up to 3 bags. Cost = 3 x £18.',
    },
    // Challenge 6 (drag-order)
    {
      id: 'gvp-q21',
      type: 'drag-order',
      stem: 'A pupil is writing out the four steps to find the volume of a Manchester pavement gutter prism with a triangular cross-section. The triangle has base 8 cm and perpendicular height 5 cm and the gutter is 150 cm long. Order the steps to apply the prism rule correctly.',
      tier: 'challenge',
      items: [
        'State the prism rule: volume = cross-section area x perpendicular length.',
        'Find the triangular cross-section area: 1/2 x 8 x 5 = 20 cm squared.',
        'Multiply the cross-section area by the prism length: 20 x 150 = 3 000.',
        'State the volume with cubed units: 3 000 cm cubed.',
      ],
      correctOrder: [0, 1, 2, 3],
      xpValue: 20,
      hint: 'Start with the rule, then the cross-section, then multiply by the length, then state the cubed-unit answer.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a triangular prism volume question where pupils multiplied all three labelled dimensions and forgot the 1/2 in the triangle area.
    {
      id: 'gvp-mis-forget-half-in-triangle',
      description:
        'For a triangular prism I multiply base x height x length together, just like a cuboid, and forget the 1/2 in the triangle area rule.',
      triggerAnswer: 'forget-half-in-triangle',
      correction:
        'Actually the triangular cross-section area is 1/2 x base x perpendicular height, not base x height. Forgetting the 1/2 doubles the answer.',
      reExplanation:
        'For a triangular prism with base 6 cm, perpendicular height 4 cm and length 10 cm, the cross-section area is 1/2 x 6 x 4 = 12 cm squared, not 24. Volume is then 12 x 10 = 120 cm cubed. Multiplying 6 x 4 x 10 = 240 gives twice the right answer because the missing 1/2 was never applied to the triangle.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a prism volume question where pupils added the cross-section area and the prism length instead of multiplying.
    {
      id: 'gvp-mis-add-area-and-length',
      description:
        'I find the volume of a prism by adding the cross-section area and the perpendicular length, instead of multiplying them.',
      triggerAnswer: 'add-area-and-length',
      correction:
        'In fact volume of any right prism is the cross-section area multiplied by the perpendicular length. Adding gives a number with mixed units.',
      reExplanation:
        'For a prism with cross-section area 12 cm squared and length 10 cm, volume = 12 x 10 = 120 cm cubed. Adding 12 + 10 = 22 mixes cm squared with cm and cannot measure 3D space at all. The cubed unit is the check that you multiplied an area by a length.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2022, Paper 03 (Higher), commentary on a composite-prism question where pupils picked the wrong face as the uniform cross-section.
    {
      id: 'gvp-mis-wrong-face-cross-section',
      description:
        'I pick whichever face looks largest as the cross-section, instead of the face whose shape stays the same all the way along the prism.',
      triggerAnswer: 'wrong-face-cross-section',
      correction:
        'Actually the cross-section is the uniform face, not the largest. For an L-shape prism the L-face on the end is the cross-section, not a rectangular side.',
      reExplanation:
        'For an L-shape prism kerbstone, the L-face on each end is the cross-section because slicing the prism anywhere gives the same L. The long rectangular sides change shape as you walk around the prism, so they cannot be the cross-section. Always look for the face that repeats from one end to the other.',
    },
    // Source: NCETM "Misconceptions and how to overcome them: 3D shapes" reference document, KS3 secondary mastery pack, on pupils using the slant edge of a prism rather than the perpendicular distance between cross-section faces.
    {
      id: 'gvp-mis-slant-instead-of-perpendicular',
      description:
        'I use the longest visible edge of a prism as its length in the volume rule, instead of the perpendicular distance between the two cross-section faces.',
      triggerAnswer: 'slant-instead-of-perpendicular',
      correction:
        'In fact the length in V = cross-section area x length is the perpendicular distance between the cross-section faces, not a slant edge.',
      reExplanation:
        'For a right prism the perpendicular length is the right-angled distance between the two cross-section faces. If a labelled edge slants across the prism, that edge is longer than the perpendicular length and using it gives a volume that is too big. Year 7 prisms are right prisms, so the perpendicular length is also a face-to-face edge.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 2F (Foundation, Calculator), commentary on a composite L-shape question where pupils gave the bounding rectangle area instead of the L-face area.
    {
      id: 'gvp-mis-l-shape-bounding',
      description:
        'For an L-shape prism I take the cross-section area as the area of the bounding rectangle that surrounds the L, instead of splitting the L into two rectangles.',
      triggerAnswer: 'l-shape-bounding',
      correction:
        'Actually the L-face has a corner cut out, so its area is less than the bounding rectangle. Split the L into two non-overlapping rectangles and add their areas.',
      reExplanation:
        'For an L-face made of a 20 cm by 8 cm rectangle and a 12 cm by 6 cm rectangle joined along an edge, the L-area is 20 x 8 + 12 x 6 = 232 cm squared. The bounding rectangle is at least 20 cm by 14 cm = 280 cm squared, which overcounts the missing corner. Always split before you multiply by the prism length.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 5 Geometry and Measures, "Volume of Prisms" page; the worked example warns that the unit for a prism volume is cubed, even when only an area and a length were multiplied.
    {
      id: 'gvp-mis-volume-unit-square',
      description:
        'I label a prism volume in cm squared instead of cm cubed, because I only multiplied an area in cm squared by one extra length.',
      triggerAnswer: 'volume-unit-square',
      correction:
        'In fact the unit for volume is cm cubed because the cm squared area already carries two cm and the prism length adds a third cm.',
      reExplanation:
        'For a triangular prism with cross-section area 12 cm squared and length 10 cm, the volume is 12 x 10 = 120 cm cubed. The cross-section area cm squared is itself two cm multiplied together, so multiplying by another cm length gives three cm multiplied: cm cubed. Labelling 120 cm squared is the right number with the wrong unit, and a marker would treat it as area, not volume.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2022, Paper 2H (Higher, Calculator), commentary on a cylinder-and-prism mix question where pupils used cross-section area x length for a cylinder but used pi r squared h for a triangular prism.
    {
      id: 'gvp-mis-cylinder-rule-on-prism',
      description:
        'I use the cylinder rule pi x r squared x h for any prism, even when the cross-section is not a circle.',
      triggerAnswer: 'cylinder-rule-on-prism',
      correction:
        'Actually pi x r squared x h is just cross-section area x length where the cross-section is a circle. For other prisms, find the correct cross-section area first.',
      reExplanation:
        'For a triangular prism the cross-section area is 1/2 x base x perpendicular height, not pi x r squared. So a triangular prism with base 6 cm, height 4 cm and length 10 cm has cross-section area 12 cm squared and volume 120 cm cubed. The general prism rule is cross-section area x length, and the cylinder formula is just a special case of it for a circular cross-section.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const volumePrismsZoneNodes = [volumePrisms]
