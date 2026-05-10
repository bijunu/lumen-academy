import type { SkillNode } from '@/types/content'

export const volumeCuboids: SkillNode = {
  id: 'maths-geometry-measure-volume-cuboids',
  title: 'Volume of Cuboids',
  description:
    'Find the volume of a cuboid as length x width x height, in cm cubed or m cubed. Add or subtract cuboids for composite shapes (no other prisms at Year 7). Link volume to capacity using 1 cm cubed = 1 ml and 1 m cubed = 1 000 litres, the workhorse capacity facts UK pupils meet through fish tanks, removal-firm boxes and school swimming-pool estimation.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-geometry-measure',
  zoneName: 'Geometry and Measure',
  tier: 'confident',
  prerequisites: ['maths-geometry-measure-area-rectangles'],
  curriculum: {
    ks3Objective:
      'Derive and apply formulae to calculate and solve problems involving: perimeter and area of triangles, parallelograms, trapezia, volume of cuboids (including cubes) and other prisms (including cylinders).',
    awardingBodies: {
      aqa: 'G16 Know and apply formulae to calculate volume of cuboids and other right prisms (GCSE Mathematics 8300)',
      edexcel: 'G16 Know and apply formulae to calculate volume of cuboids and other right prisms (GCSE Mathematics 1MA1)',
      ocr: '10.04a Volume of cuboids and prisms (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'vc-scene-cube-stack',
      title: 'Stack of Unit Cubes',
      type: 'diagram',
      instructions:
        'Look at the cuboid built from 1 cm cubes, 4 cubes long, 3 cubes wide, 2 cubes high. The base layer is 4 x 3 = 12 cubes. There are 2 layers, so the cuboid holds 12 x 2 = 24 cubes in total. Multiplying the three side lengths gives the same answer: 4 x 3 x 2 = 24. So the volume is 24 cm cubed. The unit cm cubed appears whenever all three side lengths are in centimetres.',
      data: {
        cuboid: { length: 4, width: 3, height: 2, unit: 'cm' },
        baseLayerCount: 12,
        layers: 2,
        totalCubes: 24,
        formula: 'V = length x width x height',
        callout:
          'Volume measures how much 3D space a cuboid takes up. Each 1 cm cube contributes 1 cm cubed.',
      },
    },
    {
      id: 'vc-scene-fish-tank-capacity',
      title: 'Fish Tank Volume to Capacity',
      type: 'simulation',
      instructions:
        'See how a 60 cm by 30 cm by 40 cm fish tank links its volume in cm cubed to its capacity in litres. Volume = 60 x 30 x 40 = 72 000 cm cubed. The capacity rule is 1 cm cubed = 1 ml, so 72 000 cm cubed = 72 000 ml. Convert to litres at 1 000 ml per litre: 72 000 / 1 000 = 72 litres of water fill the tank to the brim.',
      data: {
        tank: { length: 60, width: 30, height: 40, unit: 'cm' },
        volumeCmCubed: 72000,
        volumeMl: 72000,
        volumeLitres: 72,
        conversion: { '1 cm cubed': '1 ml', '1 litre': '1 000 ml' },
        callout:
          'The 1:1 link between cm cubed and ml is the workhorse Year 7 capacity rule. Litres come from dividing ml by 1 000.',
      },
    },
    {
      id: 'vc-scene-composite-cuboid',
      title: 'Composite Cuboid by Add or Subtract',
      type: 'labelled-diagram',
      instructions:
        'Click each cuboid of the L-shaped storage block to highlight it. The block is two cuboids joined: a 5 m by 3 m by 2 m main cuboid and a 2 m by 3 m by 2 m extension stuck on one side. Volumes add: 5 x 3 x 2 + 2 x 3 x 2 = 30 + 12 = 42 m cubed. Click each cuboid to confirm you have not double-counted the joint face.',
      data: {
        viewBox: '0 0 320 220',
        svg:
          '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg">' +
          '<rect x="40" y="60" width="160" height="120" fill="#cfe7ff" stroke="#1d4ed8" stroke-width="2"/>' +
          '<rect x="200" y="100" width="80" height="80" fill="#bee3f5" stroke="#1d4ed8" stroke-width="2"/>' +
          '<text x="120" y="125" font-family="sans-serif" font-size="13" text-anchor="middle">5 m x 3 m x 2 m</text>' +
          '<text x="240" y="145" font-family="sans-serif" font-size="11" text-anchor="middle">2 m x 3 m x 2 m</text>' +
          '<text x="40" y="200" font-family="sans-serif" font-size="12">Total volume = 30 + 12 = 42 m cubed</text>' +
          '</svg>',
        hotspots: [
          {
            id: 'cc-main',
            x: 38,
            y: 55,
            label: 'Main cuboid 5 m x 3 m x 2 m',
            description: 'Volume of main = 5 x 3 x 2 = 30 m cubed.',
          },
          {
            id: 'cc-extension',
            x: 75,
            y: 75,
            label: 'Extension 2 m x 3 m x 2 m',
            description: 'Volume of extension = 2 x 3 x 2 = 12 m cubed.',
          },
          {
            id: 'cc-total',
            x: 18,
            y: 90,
            label: 'Total volume 42 m cubed',
            description: 'Add the two cuboid volumes: 30 + 12 = 42 m cubed.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'vc-worked-1',
      title: 'Volume of a 30 cm by 20 cm by 10 cm removal-firm box',
      steps: [
        {
          explanation:
            'Read the three side lengths from the box label. All three are in centimetres, so the volume will be in cm cubed.',
          maths: 'length = 30 cm, width = 20 cm, height = 10 cm',
        },
        {
          explanation:
            'Apply the cuboid volume rule: volume equals length multiplied by width multiplied by height.',
          maths: 'V = length x width x height',
        },
        {
          explanation:
            'Multiply the first two side lengths to find the base area.',
          maths: '30 x 20 = 600',
        },
        {
          explanation:
            'Multiply the base area by the height to find the volume.',
          maths: '600 x 10 = 6 000',
        },
        {
          explanation: 'State the volume in cm cubed.',
          maths: 'V = 6 000 cm cubed',
        },
        {
          explanation:
            'So a removal-firm box that is 30 cm by 20 cm by 10 cm holds 6 000 cm cubed of items, which is the same as 6 000 ml or 6 litres of water.',
          maths: 'capacity: 6 litres',
        },
      ],
    },
    {
      id: 'vc-worked-2',
      title: 'Capacity of a fish tank in litres',
      steps: [
        {
          explanation:
            'A Sevenoaks family buys a glass fish tank measuring 80 cm by 35 cm by 40 cm. Find the volume of water the tank holds when full.',
          maths: 'sides: 80 cm, 35 cm, 40 cm',
        },
        {
          explanation:
            'Multiply the three side lengths to find the volume in cm cubed.',
          maths: '80 x 35 x 40',
        },
        {
          explanation:
            'Compute step by step. First multiply 80 by 35.',
          maths: '80 x 35 = 2 800',
        },
        {
          explanation:
            'Then multiply 2 800 by 40.',
        },
        {
          explanation: 'State the volume in cm cubed.',
          maths: 'V = 112 000 cm cubed',
        },
        {
          explanation:
            'Convert to capacity. The rule 1 cm cubed = 1 ml gives 112 000 ml. Divide by 1 000 to get litres.',
          maths: '112 000 / 1 000 = 112 litres',
        },
        {
          explanation:
            'So the tank holds 112 litres of water when full.',
          maths: 'capacity: 112 litres',
        },
      ],
    },
  ],
  questions: [
    // Core 1
    {
      id: 'vc-q1',
      type: 'numeric-entry',
      stem: 'A cuboid has length 5 cm, width 4 cm and height 3 cm. What is its volume in cm cubed?',
      tier: 'core',
      correctAnswer: 60,
      xpValue: 10,
      unit: 'cm cubed',
      hint: 'Volume = length x width x height. Multiply 5 x 4 first, then by 3.',
    },
    // Core 2
    {
      id: 'vc-q2',
      type: 'numeric-entry',
      stem: 'A cube has side length 4 cm. What is its volume in cm cubed?',
      tier: 'core',
      correctAnswer: 64,
      xpValue: 10,
      unit: 'cm cubed',
      hint: 'A cube is a cuboid with all three sides the same. Volume = 4 x 4 x 4.',
    },
    // Core 3
    {
      id: 'vc-q3',
      type: 'multiple-choice',
      stem: 'A removal-firm box measures 30 cm by 20 cm by 10 cm. What is its volume?',
      tier: 'core',
      options: ['60 cm cubed', '600 cm cubed', '60 000 cm cubed', '6 000 cm cubed'],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'vc-mis-add-instead-of-multiply',
      hint: 'Volume = 30 x 20 x 10. The value 60 cm cubed comes from 30 + 20 + 10, which is wrong for volume.',
    },
    // Core 4
    {
      id: 'vc-q4',
      type: 'multiple-choice',
      stem: 'A cuboid has dimensions 8 cm by 5 cm by 2 cm. Which of these gives the volume?',
      tier: 'core',
      options: [
        '15 cm cubed (= 8 + 5 + 2)',
        '80 cm cubed (= 8 x 5 x 2)',
        '40 cm cubed (= 8 x 5)',
        '160 cm cubed (= 8 x 5 x 2 x 2)',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'vc-mis-volume-vs-surface-area',
      hint: 'Use all three side lengths and multiply once. The "40" option only multiplies two sides, giving the area of one face, which is a surface-area calculation, not a volume.',
    },
    // Core 5
    {
      id: 'vc-q5',
      type: 'multiple-choice',
      stem: 'A pupil works out the volume of a 5 cm by 4 cm by 3 cm cuboid as 60 and labels it 60 cm squared. Which row corrects the slip?',
      tier: 'core',
      options: [
        'Nothing is wrong: 60 cm squared is the correct volume.',
        '60 is correct, but the unit should be cm cubed because three lengths were multiplied. Volume = 60 cm cubed.',
        '60 is correct, but the unit should be cm because the cuboid sides are in cm.',
        'Both the number and the unit are wrong: volume = 5 + 4 + 3 = 12 cm.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'vc-mis-volume-unit-square',
      hint: 'When you multiply three lengths in cm together, the unit of the answer is cm cubed, because three lengths multiply.',
    },
    // Core 6
    {
      id: 'vc-q6',
      type: 'numeric-entry',
      stem: 'A cuboid is 6 cm long, 5 cm wide and 4 cm high. What is its volume in cm cubed?',
      tier: 'core',
      correctAnswer: 120,
      xpValue: 10,
      unit: 'cm cubed',
      hint: 'Multiply: 6 x 5 = 30, then 30 x 4 = 120.',
    },
    // Core 7
    {
      id: 'vc-q7',
      type: 'spot-misconception',
      stem: 'For a cuboid that is 5 cm by 4 cm by 3 cm, Liam works out the volume as "5 x 4 = 20 cm cubed". Is his method sound?',
      tier: 'core',
      statements: [
        {
          text: 'Liam is right. Multiplying length by width gives the volume.',
          isMisconception: true,
        },
        {
          text: 'In fact 5 x 4 = 20 is the area of one face of the cuboid in cm squared, not the volume. The volume needs all three side lengths multiplied: 5 x 4 x 3 = 60 cm cubed.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'vc-mis-only-two-dimensions',
    },
    // Core 8
    {
      id: 'vc-q8',
      type: 'multiple-choice',
      stem: 'A juice carton is 6 cm by 5 cm by 10 cm. The carton is full and the rule 1 cm cubed = 1 ml applies. How many ml of juice does it hold?',
      tier: 'core',
      options: ['30 ml', '60 ml', '300 ml', '3 000 ml'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'vc-mis-cm-cubed-to-ml',
      hint: 'Volume = 6 x 5 x 10 = 300 cm cubed. Then 300 cm cubed = 300 ml directly.',
    },
    // Confident 1
    {
      id: 'vc-q9',
      type: 'numeric-entry',
      stem: 'A Sevenoaks family fish tank measures 60 cm by 30 cm by 40 cm. The tank is filled to the brim. How many litres of water does it hold?',
      tier: 'confident',
      correctAnswer: 72,
      xpValue: 15,
      unit: 'litres',
      hint: 'Volume = 60 x 30 x 40 = 72 000 cm cubed = 72 000 ml. Divide by 1 000 to get litres.',
    },
    // Confident 2
    {
      id: 'vc-q10',
      type: 'multiple-choice',
      stem: 'A removal-firm box is 1 m by 0.6 m by 0.5 m. What is its volume?',
      tier: 'confident',
      options: ['0.3 m cubed', '0.6 m cubed', '1.5 m cubed', '3 m cubed'],
      correctIndex: 0,
      xpValue: 15,
      hint: 'Multiply the three side lengths: 1 x 0.6 x 0.5. First 1 x 0.6 = 0.6, then 0.6 x 0.5 = 0.3.',
    },
    // Confident 3
    {
      id: 'vc-q11',
      type: 'multiple-choice',
      stem: 'A cuboid has volume 5 000 cm cubed. A pupil writes that the volume is the same as 50 m cubed. Which row corrects the slip?',
      tier: 'confident',
      options: [
        'Nothing is wrong: 5 000 cm cubed = 50 m cubed.',
        '5 000 cm cubed = 5 m cubed (1 m cubed = 1 000 cm cubed).',
        '5 000 cm cubed = 0.005 m cubed (1 m cubed = 1 000 000 cm cubed).',
        '5 000 cm cubed = 0.5 m cubed (1 m cubed = 10 000 cm cubed).',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'vc-mis-cm-cubed-to-m-cubed',
      hint: '1 m = 100 cm, so 1 m cubed = 100 x 100 x 100 = 1 000 000 cm cubed. Divide 5 000 by 1 000 000.',
    },
    // Confident 4
    {
      id: 'vc-q12',
      type: 'multiple-choice',
      stem: 'A composite storage block is made of two cuboids joined along a face. The first cuboid is 5 m by 3 m by 2 m and the second is 2 m by 3 m by 2 m. What is the total volume?',
      tier: 'confident',
      options: ['18 m cubed', '30 m cubed', '42 m cubed', '60 m cubed'],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'vc-mis-skip-second-cuboid',
      hint: 'Each cuboid volume is length x width x height. First: 5 x 3 x 2 = 30. Second: 2 x 3 x 2 = 12. Add.',
    },
    // Confident 5
    {
      id: 'vc-q13',
      type: 'spot-misconception',
      stem: 'For a cuboid that is 5 cm by 4 cm by 3 cm, Aisha says "the volume is 5 + 4 + 3 = 12 cm cubed". Is her method sound?',
      tier: 'confident',
      statements: [
        {
          text: 'Aisha is right. Adding the three side lengths gives the volume.',
          isMisconception: true,
        },
        {
          text: 'In fact volume measures how much 3D space the cuboid takes up. You multiply the three side lengths: 5 x 4 x 3 = 60 cm cubed. Adding gives a length, not a volume, and the unit is cm cubed only because three lengths were multiplied together.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'vc-mis-add-instead-of-multiply',
    },
    // Confident 6
    {
      id: 'vc-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step. A Tunbridge Wells aquarium measures 80 cm by 35 cm by 40 cm and is filled to the brim with water.',
      tier: 'confident',
      steps: [
        'Volume = 80 x 35 x 40. First multiply 80 by 35: 80 x 35 = 2 800.',
        'Then multiply 2 800 by 40: 2 800 x 40 = 112 000. So the volume is 112 000 cm cubed.',
        null,
        'Divide by 1 000 to convert to litres: 112 000 / 1 000 = 112. So the tank holds 112 litres.',
      ],
      missingStepIndex: 2,
      correctStep: 'Apply the rule 1 cm cubed = 1 ml: 112 000 cm cubed = 112 000 ml.',
      xpValue: 20,
      misconceptionId: 'vc-mis-cm-cubed-to-ml',
    },
    // Confident 7
    {
      id: 'vc-q15',
      type: 'drag-order',
      stem: 'Order these cuboid volumes from smallest to largest. Each cuboid is given as length x width x height.',
      tier: 'confident',
      items: [
        '6 cm x 5 cm x 3 cm',
        '4 cm x 3 cm x 2 cm',
        '10 cm x 4 cm x 3 cm',
        '5 cm x 4 cm x 2 cm',
      ],
      correctOrder: [1, 3, 0, 2],
      xpValue: 15,
      hint: 'Multiply the three sides each time: 4 x 3 x 2 gives 24, 5 x 4 x 2 gives 40, 6 x 5 x 3 gives 90, 10 x 4 x 3 gives 120.',
    },
    // Challenge 1 (Bond-style multi-step)
    {
      id: 'vc-q16',
      type: 'numeric-entry',
      stem: 'A Manchester removal firm has a 1.2 m by 1 m by 0.5 m van compartment. The driver loads identical 30 cm by 25 cm by 20 cm boxes that pack with no gaps. How many boxes fit in the compartment?',
      tier: 'challenge',
      correctAnswer: 40,
      xpValue: 25,
      hint: 'Compartment volume: 1.2 x 1 x 0.5 = 0.6 m cubed = 600 000 cm cubed. Each box: 30 x 25 x 20 = 15 000 cm cubed. Divide.',
    },
    // Challenge 2
    {
      id: 'vc-q17',
      type: 'multiple-choice',
      stem: 'A Tunbridge Wells school has a swimming pool that is 25 m long, 10 m wide and 1.5 m deep. The school estimates the volume in cubic metres and the capacity in litres. Which row gives both numbers correctly?',
      tier: 'challenge',
      options: [
        '375 m cubed and 375 000 litres',
        '375 m cubed and 3 750 litres',
        '37.5 m cubed and 37 500 litres',
        '375 m cubed and 375 litres',
      ],
      correctIndex: 0,
      xpValue: 25,
      hint: 'Volume = 25 x 10 x 1.5 = 375 m cubed. The rule 1 m cubed = 1 000 litres gives 375 000 litres.',
    },
    // Challenge 3
    {
      id: 'vc-q18',
      type: 'numeric-entry',
      stem: 'A Sevenoaks family has a 40 cm by 25 cm by 30 cm fish tank. They fill it from a tap that runs at 5 litres per minute. How many minutes does it take to fill the tank to the brim?',
      tier: 'challenge',
      correctAnswer: 6,
      xpValue: 25,
      unit: 'minutes',
      hint: 'Volume = 40 x 25 x 30 = 30 000 cm cubed = 30 000 ml = 30 litres. Then 30 / 5.',
    },
    // Challenge 4
    {
      id: 'vc-q19',
      type: 'multiple-choice',
      stem: 'A storage block is shaped from two cuboids: a 6 m by 4 m by 3 m main and a 2 m by 4 m by 1 m roof slab fitted on top, covering only one half of the main cuboid. What is the total volume of the block?',
      tier: 'challenge',
      options: ['68 m cubed', '72 m cubed', '76 m cubed', '80 m cubed'],
      correctIndex: 3,
      xpValue: 25,
      hint: 'Main cuboid: 6 x 4 x 3 = 72 m cubed. Roof slab: 2 x 4 x 1 = 8 m cubed. Total = 72 + 8.',
    },
    // Challenge 5
    {
      id: 'vc-q20',
      type: 'numeric-entry',
      stem: 'A Dover hardware shop sells sand by the cubic metre. A landscaper orders enough sand to fill a 1.5 m by 2 m by 0.8 m sandpit. The shop charges £45 per m cubed plus a £30 delivery fee. What is the total bill in pounds?',
      tier: 'challenge',
      correctAnswer: 138,
      xpValue: 25,
      hint: 'Sandpit volume = 1.5 x 2 x 0.8 = 2.4 m cubed. Cost = 2.4 x 45 + 30 = 108 + 30.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a basic cuboid volume question where pupils added the three side lengths instead of multiplying them.
    {
      id: 'vc-mis-add-instead-of-multiply',
      description:
        'I find the volume of a cuboid by adding the three side lengths together, instead of multiplying them.',
      triggerAnswer: 'add-instead-of-multiply',
      correction:
        'Actually adding the sides gives a length, not a volume. Volume comes from multiplying the three side lengths together.',
      reExplanation:
        'For a 5 cm by 4 cm by 3 cm cuboid, volume = 5 x 4 x 3 = 60 cm cubed, which counts the unit cubes that fit inside. Adding 5 + 4 + 3 = 12 cm gives the length around three edges and the unit is cm, not cm cubed. The unit cm cubed or m cubed is your check that you have multiplied three lengths together.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a cuboid volume question where pupils multiplied only two of the three side lengths.
    {
      id: 'vc-mis-only-two-dimensions',
      description:
        'I find the volume of a cuboid by multiplying only two of the three side lengths, treating it like a rectangle and giving an answer in cm cubed.',
      triggerAnswer: 'only-two-dimensions',
      correction:
        'In fact a cuboid has three side lengths: length, width, and height. All three must be multiplied for the volume.',
      reExplanation:
        'For a cuboid that is 8 cm by 5 cm by 2 cm, multiplying only 8 x 5 = 40 gives the area of the largest face in cm squared, not the volume. The volume is 8 x 5 x 2 = 80 cm cubed. The unit cm cubed needs three lengths multiplied; cm squared only needs two.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2022, Paper 01 (Foundation, Non-calculator), commentary on a unit-conversion question where pupils treated 1 m cubed as 1 000 cm cubed instead of 1 000 000 cm cubed.
    {
      id: 'vc-mis-cm-cubed-to-m-cubed',
      description:
        'I convert cm cubed to m cubed by dividing by 100 (or 1 000), instead of dividing by 1 000 000.',
      triggerAnswer: 'cm-cubed-to-m-cubed',
      correction:
        'Actually 1 m = 100 cm, so 1 m cubed = 100 x 100 x 100 = 1 000 000 cm cubed. Volumes cube the conversion factor.',
      reExplanation:
        'A 5 000 cm cubed cuboid in m cubed is 5 000 / 1 000 000 = 0.005 m cubed. To convert the other way, 2.4 m cubed = 2.4 x 1 000 000 = 2 400 000 cm cubed. The cubed unit always uses the conversion factor cubed, because all three sides of the unit cube are converted at once.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 5 Geometry and Measures, "Volume and Capacity" page; the worked example warns that the cm-cubed-to-millilitre rule is the workhorse Year 7 capacity link.
    {
      id: 'vc-mis-cm-cubed-to-ml',
      description:
        'I think capacity in ml and volume in cm cubed are different things, so I convert by an unrelated factor instead of using the 1:1 rule.',
      triggerAnswer: 'cm-cubed-to-ml',
      correction:
        'In fact 1 cm cubed of space holds exactly 1 ml of liquid by definition. The conversion is direct.',
      reExplanation:
        'A juice carton with volume 300 cm cubed holds 300 ml of juice, no further calculation needed. To go from ml to litres, divide by 1 000. So 112 000 cm cubed = 112 000 ml = 112 litres. The 1 cm cubed = 1 ml link is fixed and one of the most useful Year 7 facts.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 2F (Foundation, Calculator), commentary on a composite-shape volume question where pupils computed only the larger cuboid and forgot the smaller piece.
    {
      id: 'vc-mis-skip-second-cuboid',
      description:
        'When a composite shape is made of two cuboids, I find the volume of the bigger cuboid and forget to add (or subtract) the smaller one.',
      triggerAnswer: 'skip-second-cuboid',
      correction:
        'Actually each cuboid contributes to the total volume. Find both, then add or subtract.',
      reExplanation:
        'For a 5 m by 3 m by 2 m main cuboid joined to a 2 m by 3 m by 2 m extension along one face, the answer 30 m cubed misses the 12 m cubed from the extension. The full volume is 30 + 12 = 42 m cubed. A quick sanity check is to ask whether your answer feels too small for the shape on the diagram.',
    },
    // Source: NCETM "Misconceptions and how to overcome them: volume" reference document, Year 6/7 transition pack, on pupils labelling the volume of a cuboid in cm squared rather than cm cubed.
    {
      id: 'vc-mis-volume-unit-square',
      description:
        'I label a cuboid volume in cm squared instead of cm cubed, even though I multiplied all three side lengths.',
      triggerAnswer: 'volume-unit-square',
      correction:
        'In fact the unit for volume is cm cubed or m cubed because three lengths were multiplied. cm squared is a unit for area, where only two lengths were multiplied.',
      reExplanation:
        'For a 5 cm by 4 cm by 3 cm cuboid, volume = 5 x 4 x 3 = 60. The unit must be cm cubed because the calculation multiplied three lengths each in cm. The label 60 cm squared is the right number with the wrong unit, and a marker would treat it as area, not volume. Always count how many lengths you multiplied.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 8 "Measurement" by Hart, on pupils confusing volume and surface area when both come from the same three side lengths.
    {
      id: 'vc-mis-volume-vs-surface-area',
      description:
        'I treat "volume" and "surface area" as the same calculation, so I give 2 x (length x width + width x height + length x height) when asked for volume.',
      triggerAnswer: 'volume-vs-surface-area',
      correction:
        'Actually volume measures the inside space and surface area measures the outside skin. Volume = length x width x height; surface area sums the six face areas.',
      reExplanation:
        'For a 5 cm by 4 cm by 3 cm cuboid, volume = 5 x 4 x 3 = 60 cm cubed (units cubed because three lengths multiplied). Surface area = 2 x (5 x 4 + 4 x 3 + 5 x 3) = 2 x (20 + 12 + 15) = 94 cm squared (units squared because two lengths multiplied at a time, then summed). Different question, different rule, different unit.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const volumeCuboidsZoneNodes = [volumeCuboids]
