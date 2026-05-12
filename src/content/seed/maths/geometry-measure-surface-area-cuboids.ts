import type { SkillNode } from '@/types/content'

export const surfaceAreaCuboids: SkillNode = {
  id: 'maths-geometry-measure-surface-area-cuboids',
  title: 'Surface Area of Cuboids',
  description:
    'Find the surface area of a cuboid by adding the areas of its six faces. The faces come in three identical pairs, so the formula is 2(lw + lh + wh) where l, w and h are the three edge lengths. Apply the rule to closed cuboids, cubes (6 x s squared) and open-top boxes (subtract the missing face). Always state the unit as cm squared or m squared, never cubed; cubed units belong to volume.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-geometry-measure',
  zoneName: 'Geometry and Measure',
  tier: 'challenge',
  prerequisites: [
    'maths-geometry-measure-area-rectangles',
    'maths-geometry-measure-volume-cuboids',
  ],
  curriculum: {
    ks3Objective:
      'Calculate and solve problems involving surface area of cuboids (including cubes) and other right prisms.',
    awardingBodies: {
      aqa: 'G17 Calculate surface area of cuboids and other right prisms (GCSE Mathematics 8300)',
      edexcel: 'G17 Calculate surface area of cuboids and other right prisms (GCSE Mathematics 1MA1)',
      ocr: '10.04b Surface area of cuboids and right prisms (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'gsa-scene-net-cuboid',
      title: 'A Cuboid Unfolded as a Net',
      type: 'labelled-diagram',
      instructions:
        'Use the hotspots to identify each face on the unfolded net of a 5 cm by 3 cm by 2 cm cuboid. Six rectangles fall into three matching pairs: top and bottom (each 5 x 3), front and back (each 5 x 2), left and right (each 3 x 2). Adding all six gives the total surface area.',
      data: {
        viewBox: '0 0 360 240',
        svg:
          '<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg">' +
          '<rect x="80" y="20" width="100" height="60" fill="#cfe7ff" stroke="#1d4ed8" stroke-width="2"/>' +
          '<rect x="80" y="80" width="100" height="40" fill="#bee3f5" stroke="#1d4ed8" stroke-width="2"/>' +
          '<rect x="80" y="120" width="100" height="60" fill="#cfe7ff" stroke="#1d4ed8" stroke-width="2"/>' +
          '<rect x="80" y="180" width="100" height="40" fill="#bee3f5" stroke="#1d4ed8" stroke-width="2"/>' +
          '<rect x="20" y="80" width="60" height="40" fill="#dde9fb" stroke="#1d4ed8" stroke-width="2"/>' +
          '<rect x="180" y="80" width="60" height="40" fill="#dde9fb" stroke="#1d4ed8" stroke-width="2"/>' +
          '<text x="130" y="55" font-family="sans-serif" font-size="11" text-anchor="middle">top 5 x 3</text>' +
          '<text x="130" y="105" font-family="sans-serif" font-size="11" text-anchor="middle">front 5 x 2</text>' +
          '<text x="130" y="155" font-family="sans-serif" font-size="11" text-anchor="middle">bottom 5 x 3</text>' +
          '<text x="130" y="205" font-family="sans-serif" font-size="11" text-anchor="middle">back 5 x 2</text>' +
          '<text x="50" y="105" font-family="sans-serif" font-size="11" text-anchor="middle">left 3 x 2</text>' +
          '<text x="210" y="105" font-family="sans-serif" font-size="11" text-anchor="middle">right 3 x 2</text>' +
          '</svg>',
        hotspots: [
          {
            id: 'gsa-net-top-bottom',
            x: 36,
            y: 20,
            label: 'Top and bottom pair (each 5 x 3 = 15 cm squared)',
            description: 'Two identical 5 cm by 3 cm rectangles. Pair area = 2 x 15 = 30 cm squared.',
          },
          {
            id: 'gsa-net-front-back',
            x: 36,
            y: 50,
            label: 'Front and back pair (each 5 x 2 = 10 cm squared)',
            description: 'Two identical 5 cm by 2 cm rectangles. Pair area = 2 x 10 = 20 cm squared.',
          },
          {
            id: 'gsa-net-left-right',
            x: 14,
            y: 35,
            label: 'Left and right pair (each 3 x 2 = 6 cm squared)',
            description: 'Two identical 3 cm by 2 cm rectangles. Pair area = 2 x 6 = 12 cm squared.',
          },
          {
            id: 'gsa-net-total',
            x: 50,
            y: 90,
            label: 'Total surface area = 62 cm squared',
            description: 'Add the three pair totals: 30 + 20 + 12 = 62 cm squared.',
          },
        ],
      },
    },
    {
      id: 'gsa-scene-three-pairs-faces',
      title: 'Three Pairs of Identical Faces',
      type: 'diagram',
      instructions:
        'Read how a cuboid splits into three pairs of identical faces. The top and bottom each measure length by width, so the pair gives 2 x lw. The front and back each measure length by height, so the pair gives 2 x lh. The left and right each measure width by height, so the pair gives 2 x wh. Adding all three pair totals gives the surface area: 2(lw + lh + wh).',
      data: {
        cuboid: { length: 5, width: 3, height: 2, unit: 'cm' },
        facePairs: [
          { faces: 'top + bottom', formula: '2 x lw', value: '2 x (5 x 3) = 30 cm squared' },
          { faces: 'front + back', formula: '2 x lh', value: '2 x (5 x 2) = 20 cm squared' },
          { faces: 'left + right', formula: '2 x wh', value: '2 x (3 x 2) = 12 cm squared' },
        ],
        total: '30 + 20 + 12 = 62 cm squared',
        callout:
          'Three pairs, three products. The formula 2(lw + lh + wh) is just a shorthand for adding the pair totals together.',
      },
    },
    {
      id: 'gsa-scene-formula-derivation',
      title: 'From Six Faces to the Formula',
      type: 'diagram',
      instructions:
        'See how listing all six face areas leads to the standard formula. For a cuboid with edges l, w, h: face areas are lw, lw, lh, lh, wh, wh. Grouping the matching pairs gives 2lw + 2lh + 2wh, and factorising the 2 gives 2(lw + lh + wh). For a cube with edge s, every face has area s squared, so the surface area is 6 x s squared.',
      data: {
        listing: ['lw', 'lw', 'lh', 'lh', 'wh', 'wh'],
        grouped: '2lw + 2lh + 2wh',
        factorised: '2(lw + lh + wh)',
        cubeSpecial: { edge: 's', faceArea: 's squared', total: '6 x s squared' },
        unitNote:
          'The unit is always squared (cm squared or m squared) because each face area multiplies two lengths. Cubed units belong to volume, not surface area.',
        callout:
          'Use 2(lw + lh + wh) for any cuboid; use 6 x s squared as a quick shortcut when all three edges are equal.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'gsa-worked-1',
      title: 'Surface area of a closed 8 cm by 5 cm by 3 cm cuboid',
      steps: [
        {
          explanation:
            'Read the three edge lengths and assign them as l, w and h. All three are in centimetres, so the surface area will be in cm squared.',
          maths: 'l = 8 cm, w = 5 cm, h = 3 cm',
        },
        {
          explanation:
            'Find the area of one of each pair. Start with the top face: length times width.',
          maths: 'lw = 8 x 5 = 40',
        },
        {
          explanation: 'Find the front face area: length times height.',
          maths: 'lh = 8 x 3 = 24',
        },
        {
          explanation: 'Find the side face area: width times height.',
          maths: 'wh = 5 x 3 = 15',
        },
        {
          explanation:
            'Add the three pair contributions inside brackets, then double for the matching faces.',
          maths: 'SA = 2(40 + 24 + 15) = 2 x 79',
        },
        {
          explanation: 'Carry out the multiplication and state the unit.',
          maths: 'SA = 158 cm squared',
        },
        {
          explanation:
            'So an 8 cm by 5 cm by 3 cm gift box needs 158 cm squared of card to cover all six faces.',
          maths: 'card needed: 158 cm squared',
        },
      ],
    },
    {
      id: 'gsa-worked-2',
      title: 'Surface area of an open-top sandpit liner',
      steps: [
        {
          explanation:
            'A Sevenoaks sandpit is 2 m long, 1.5 m wide and 0.4 m deep, with no lid. Find how many m squared of liner cover the base and the four sides only.',
          maths: 'l = 2 m, w = 1.5 m, h = 0.4 m, no lid',
        },
        {
          explanation:
            'Start by finding the closed-cuboid surface area using 2(lw + lh + wh).',
          maths: 'closed SA = 2(2 x 1.5 + 2 x 0.4 + 1.5 x 0.4)',
        },
        {
          explanation: 'Compute the three products inside the brackets.',
          maths: '2 x 1.5 = 3, 2 x 0.4 = 0.8, 1.5 x 0.4 = 0.6',
        },
        {
          explanation: 'Add the three values, then double.',
        },
        {
          explanation:
            'Finish the closed-cuboid calculation. This counts the missing top, so a correction follows.',
          maths: 'closed SA = 2 x 4.4 = 8.8 m squared',
        },
        {
          explanation:
            'The lid is missing, so subtract the top face area lw = 2 x 1.5 = 3 m squared.',
          maths: 'open-top SA = 8.8 - 3 = 5.8 m squared',
        },
        {
          explanation:
            'So the sandpit needs 5.8 m squared of liner to cover the base and four side walls.',
          maths: 'liner needed: 5.8 m squared',
        },
      ],
    },
  ],
  questions: [
    // Core 1
    {
      id: 'gsa-q1',
      type: 'numeric-entry',
      stem: 'A cube has edge length 4 cm. What is its surface area in cm squared?',
      tier: 'core',
      correctAnswer: 96,
      xpValue: 10,
      unit: 'cm squared',
      hint: 'A cube has 6 identical faces, each of area s x s. Work out 4 x 4 = 16, then 6 x 16.',
    },
    // Core 2 (MCQ correctIndex 0)
    {
      id: 'gsa-q2',
      type: 'multiple-choice',
      stem: 'A cuboid has length 5 cm, width 3 cm and height 2 cm. What is its surface area?',
      tier: 'core',
      options: ['62 cm squared', '30 cm squared', '60 cm squared', '120 cm squared'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'gsa-mis-multiply-three-edges',
      hint: 'Use 2(lw + lh + wh): 2(5 x 3 + 5 x 2 + 3 x 2) = 2(15 + 10 + 6) = 2 x 31. The 30 figure is just one face pair; 30 cm cubed would be the volume.',
    },
    // Core 3
    {
      id: 'gsa-q3',
      type: 'numeric-entry',
      stem: 'A cuboid has length 6 cm, width 4 cm and height 2 cm. What is its surface area in cm squared?',
      tier: 'core',
      correctAnswer: 88,
      xpValue: 10,
      unit: 'cm squared',
      hint: '2(6 x 4 + 6 x 2 + 4 x 2) = 2(24 + 12 + 8) = 2 x 44.',
    },
    // Core 4 (MCQ correctIndex 1)
    {
      id: 'gsa-q4',
      type: 'multiple-choice',
      stem: 'A 7 cm by 4 cm by 3 cm gift box is wrapped in card. Which calculation gives the surface area in cm squared?',
      tier: 'core',
      options: [
        '7 x 4 x 3 = 84',
        '2 x (7 x 4 + 7 x 3 + 4 x 3) = 122',
        '7 + 4 + 3 = 14',
        '6 x (7 x 4 x 3) = 504',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'gsa-mis-multiply-three-edges',
      hint: 'Surface area sums the six face areas. Use 2(lw + lh + wh). The first option gives the volume, not the surface area.',
    },
    // Core 5 (MCQ correctIndex 2)
    {
      id: 'gsa-q5',
      type: 'multiple-choice',
      stem: 'A pupil works out the surface area of a 5 cm by 4 cm by 3 cm cuboid as 94 and labels it 94 cm cubed. Which row corrects the slip?',
      tier: 'core',
      options: [
        'Nothing is wrong: 94 cm cubed is the correct surface area.',
        '94 is correct, but the unit should be cm because lengths are in cm.',
        '94 is correct, but the unit should be cm squared because each face area multiplies two lengths.',
        'Both the number and the unit are wrong: surface area = 5 + 4 + 3 = 12 cm.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'gsa-mis-cubed-unit-for-area',
      hint: 'Each face area is two lengths multiplied, so the unit is squared. Cubed units belong to volume.',
    },
    // Core 6 (MCQ correctIndex 3)
    {
      id: 'gsa-q6',
      type: 'multiple-choice',
      stem: 'A cube has edge length 5 cm. Which expression gives its surface area?',
      tier: 'core',
      options: ['6 x 5 = 30 cm', '5 x 5 x 5 = 125 cm cubed', '5 + 5 + 5 = 15 cm', '6 x (5 x 5) = 150 cm squared'],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'gsa-mis-cube-six-s-not-six-s-squared',
      hint: 'A cube has 6 identical square faces of area s squared. Surface area = 6 x s squared, not 6 x s. The 125 cm cubed answer is the volume.',
    },
    // Core 7
    {
      id: 'gsa-q7',
      type: 'spot-misconception',
      stem: 'For a 5 cm by 4 cm by 3 cm cuboid, Liam works out the surface area as "5 x 4 x 3 = 60 cm squared".',
      tier: 'core',
      statements: [
        {
          text: 'Liam is right. Multiplying the three edge lengths gives the surface area.',
          isMisconception: true,
        },
        {
          text: 'In fact 5 x 4 x 3 = 60 is the volume of the cuboid in cm cubed, not the surface area. The surface area sums the six face areas: 2(5 x 4 + 5 x 3 + 4 x 3) = 2 x 47 = 94 cm squared.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'gsa-mis-multiply-three-edges',
    },
    // Confident 1 (MCQ correctIndex 0)
    {
      id: 'gsa-q8',
      type: 'multiple-choice',
      stem: 'A cuboid book is 24 cm by 18 cm by 4 cm. What is its surface area?',
      tier: 'confident',
      options: ['1 200 cm squared', '864 cm squared', '432 cm squared', '600 cm squared'],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'gsa-mis-forget-pair-double',
      hint: '2(24 x 18 + 24 x 4 + 18 x 4) = 2(432 + 96 + 72) = 2 x 600. The 600 figure forgets to double the pair total.',
    },
    // Confident 2
    {
      id: 'gsa-q9',
      type: 'numeric-entry',
      stem: 'A Manchester removal-firm box measures 50 cm by 40 cm by 30 cm. What is its total surface area in cm squared?',
      tier: 'confident',
      correctAnswer: 9400,
      xpValue: 15,
      unit: 'cm squared',
      hint: '2(50 x 40 + 50 x 30 + 40 x 30) = 2(2 000 + 1 500 + 1 200) = 2 x 4 700.',
    },
    // Confident 3 (MCQ correctIndex 1)
    {
      id: 'gsa-q10',
      type: 'multiple-choice',
      stem: 'An open-top wooden planter is 80 cm long, 40 cm wide and 30 cm deep, with no lid. What is the area of wood used for the base and four sides?',
      tier: 'confident',
      options: ['10 000 cm squared', '10 400 cm squared', '13 600 cm squared', '7 200 cm squared'],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'gsa-mis-open-box-forget-subtract',
      hint: 'Closed cuboid: 2(80 x 40 + 80 x 30 + 40 x 30) = 2(3 200 + 2 400 + 1 200) = 13 600. Subtract the missing top lw = 80 x 40 = 3 200.',
    },
    // Confident 4
    {
      id: 'gsa-q11',
      type: 'numeric-entry',
      stem: 'A cube of edge 6 cm has its surface fully painted. What total area in cm squared receives paint?',
      tier: 'confident',
      correctAnswer: 216,
      xpValue: 15,
      unit: 'cm squared',
      hint: 'A cube has 6 identical square faces. Each face area = 6 x 6 = 36. Total = 6 x 36.',
    },
    // Confident 5 (MCQ correctIndex 2)
    {
      id: 'gsa-q12',
      type: 'multiple-choice',
      stem: 'A pupil works out the surface area of a 10 cm by 6 cm by 4 cm cuboid as 60 + 40 + 24 = 124 cm squared. Which row identifies the slip and gives the correct answer?',
      tier: 'confident',
      options: [
        'No slip: 124 cm squared is correct.',
        'The pupil added the three edges by mistake; the correct answer is 60 cm squared.',
        'The pupil found one of each face pair but forgot to double; the correct answer is 248 cm squared.',
        'The pupil should have multiplied 10 x 6 x 4 = 240 cm squared.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'gsa-mis-forget-pair-double',
      hint: 'The face areas come in three matching pairs. Doubling 124 gives 248, the full surface area.',
    },
    // Confident 6 (MCQ correctIndex 3)
    {
      id: 'gsa-q13',
      type: 'multiple-choice',
      stem: 'A storage crate is 1 m long, 80 cm wide and 50 cm tall. The crate is wrapped on all six faces. Which row gives the surface area in m squared, with consistent units?',
      tier: 'confident',
      options: [
        '4 000 m squared (multiply lengths in cm without converting)',
        '0.4 m squared (use only one face)',
        '17 000 m squared (use cm values directly without converting)',
        '3.4 m squared from 2(1 x 0.8 + 1 x 0.5 + 0.8 x 0.5) with all sides converted to metres first',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'gsa-mis-mixed-units',
      hint: 'Convert 80 cm to 0.8 m and 50 cm to 0.5 m first. Then 2(1 x 0.8 + 1 x 0.5 + 0.8 x 0.5) = 2(0.8 + 0.5 + 0.4) = 2 x 1.7 = 3.4 m squared.',
    },
    // Confident 7 (drag-order)
    {
      id: 'gsa-q14',
      type: 'drag-order',
      stem: 'Order these cuboid surface areas from smallest to largest. Each cuboid is given as length x width x height in cm.',
      tier: 'confident',
      items: [
        '5 x 4 x 3',
        '6 x 4 x 2',
        '8 x 3 x 2',
        '4 x 4 x 4',
      ],
      correctOrder: [1, 2, 0, 3],
      xpValue: 15,
      hint: 'Compute each surface area: 5x4x3 gives 94, 6x4x2 gives 88, 8x3x2 gives 92, 4x4x4 gives 96. Then sort smallest to largest.',
    },
    // Confident 8 (missing-step)
    {
      id: 'gsa-q15',
      type: 'missing-step',
      stem: 'Fill in the missing step. A Tunbridge Wells gift box is a cuboid 12 cm by 8 cm by 5 cm and is wrapped in card on all six faces.',
      tier: 'confident',
      steps: [
        'Use the rule SA = 2(lw + lh + wh) with l = 12, w = 8, h = 5.',
        'Find the three products: lw = 12 x 8 = 96, lh = 12 x 5 = 60, wh = 8 x 5 = 40.',
        null,
        'Double the inside sum: SA = 2 x 196 = 392 cm squared. So the box needs 392 cm squared of card.',
      ],
      missingStepIndex: 2,
      correctStep: 'Add the three pair products: 96 + 60 + 40 = 196.',
      xpValue: 20,
      misconceptionId: 'gsa-mis-skip-one-pair',
    },
    // Challenge 1 (Bond-style multi-step) - numeric
    {
      id: 'gsa-q16',
      type: 'numeric-entry',
      stem: 'A Sevenoaks family wraps a 30 cm by 20 cm by 15 cm Christmas gift box in paper. The paper is sold by the m squared and costs £4 per m squared. Including 10% extra paper for overlap, what is the cost in pence (rounded up to the next whole penny)?',
      tier: 'challenge',
      correctAnswer: 119,
      xpValue: 25,
      hint: 'SA = 2(30x20 + 30x15 + 20x15) = 2(600 + 450 + 300) = 2 700 cm squared = 0.27 m squared. With 10% extra: 0.297 m squared. Cost = 0.297 x 400 = 118.8 pence, rounded up.',
    },
    // Challenge 2 (MCQ correctIndex 1)
    {
      id: 'gsa-q17',
      type: 'multiple-choice',
      stem: 'A Manchester swimming-pool liner has to cover the inside of an open-top pool 25 m long, 10 m wide and 1.5 m deep (no lid). How many m squared of liner are needed (base plus the four side walls)?',
      tier: 'challenge',
      options: ['605 m squared', '355 m squared', '500 m squared', '305 m squared'],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'gsa-mis-open-box-forget-subtract',
      hint: 'Base = 25 x 10 = 250. Two long walls = 2 x (25 x 1.5) = 75. Two short walls = 2 x (10 x 1.5) = 30. Total = 250 + 75 + 30 = 355. The 605 figure includes the missing top.',
    },
    // Challenge 3 (numeric)
    {
      id: 'gsa-q18',
      type: 'numeric-entry',
      stem: 'A Dover school orders perspex sheeting to cover the four glass walls of a closed display cabinet (no top, no bottom). The cabinet is 1.2 m long, 0.6 m wide and 0.8 m tall. How many m squared of sheeting are needed?',
      tier: 'challenge',
      correctAnswer: 2.88,
      xpValue: 25,
      unit: 'm squared',
      hint: 'Two long walls: 2 x (1.2 x 0.8) = 1.92. Two short walls: 2 x (0.6 x 0.8) = 0.96. Total = 1.92 + 0.96.',
    },
    // Challenge 4 (MCQ correctIndex 2)
    {
      id: 'gsa-q19',
      type: 'multiple-choice',
      stem: 'A cube of edge 10 cm has a 4 cm by 4 cm square hole cut straight through one pair of opposite faces. The hole removes a 4 cm by 4 cm square from each of those two faces but adds 4 inside walls of 4 cm by 10 cm. What is the surface area of the holed cube in cm squared?',
      tier: 'challenge',
      options: ['600', '568', '728', '760'],
      correctIndex: 2,
      xpValue: 25,
      hint: 'Original cube: 6 x 100 = 600. Subtract 2 x (4 x 4) = 32 for the two holes. Add 4 x (4 x 10) = 160 for the inside walls. Total = 600 - 32 + 160 = 728.',
    },
    // Challenge 5 (numeric)
    {
      id: 'gsa-q20',
      type: 'numeric-entry',
      stem: 'Two identical 6 cm cubes are joined face-to-face to form a 12 cm by 6 cm by 6 cm cuboid. By how many cm squared does the total surface area decrease compared with the two separate cubes?',
      tier: 'challenge',
      correctAnswer: 72,
      xpValue: 25,
      unit: 'cm squared',
      hint: 'Two separate cubes: 2 x 6 x 36 = 432. Combined cuboid: 2(12 x 6 + 12 x 6 + 6 x 6) = 2(72 + 72 + 36) = 360. Difference = 432 - 360. The two faces glued together (each 36) hide on both sides.',
    },
    // Challenge 6 (spot-misconception)
    {
      id: 'gsa-q21',
      type: 'spot-misconception',
      stem: 'For an open-top fish tank that is 60 cm by 30 cm by 40 cm, Aisha works out the glass needed as 2(60 x 30 + 60 x 40 + 30 x 40) = 2 x (1 800 + 2 400 + 1 200) = 10 800 cm squared.',
      tier: 'challenge',
      statements: [
        {
          text: 'Aisha is right. The tank needs 10 800 cm squared of glass.',
          isMisconception: true,
        },
        {
          text: 'In fact 10 800 cm squared counts a top face that does not exist on an open-top tank. Subtract the missing top: lw = 60 x 30 = 1 800. Glass needed = 10 800 - 1 800 = 9 000 cm squared.',
          isMisconception: false,
        },
      ],
      xpValue: 25,
      misconceptionId: 'gsa-mis-open-box-forget-subtract',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a surface area question where pupils gave the volume answer because they multiplied the three edges instead of summing the six face areas.
    {
      id: 'gsa-mis-multiply-three-edges',
      description:
        'I find the surface area of a cuboid by multiplying the three edge lengths together, instead of adding the six face areas.',
      triggerAnswer: 'multiply-three-edges',
      correction:
        'Actually multiplying the three edges gives the volume in cubed units. Surface area sums the six face areas and uses squared units.',
      reExplanation:
        'For a 5 cm by 4 cm by 3 cm cuboid, multiplying 5 x 4 x 3 = 60 cm cubed gives the volume. The surface area uses 2(lw + lh + wh) = 2(20 + 15 + 12) = 94 cm squared. Volume needs three lengths and gives a cubed unit; surface area pairs two lengths at a time and stays squared.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a cuboid surface area question where pupils labelled the answer in cubed units after a correct numeric calculation.
    {
      id: 'gsa-mis-cubed-unit-for-area',
      description:
        'I write the unit for surface area as cm cubed or m cubed, even though I have summed face areas, not multiplied three lengths.',
      triggerAnswer: 'cubed-unit-for-area',
      correction:
        'In fact each face area multiplies only two lengths, so the unit is squared. Cubed units belong to volume.',
      reExplanation:
        'For a 5 cm by 4 cm by 3 cm cuboid, surface area = 2(20 + 15 + 12) = 94 cm squared. Each pair contribution (lw, lh, wh) is a product of two lengths, so the unit must be squared. A cubed unit only appears when three lengths multiply at once. Always check: how many lengths did the calculation multiply at one go?',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2022, Paper 01 (Foundation, Non-calculator), commentary on a cube surface area question where pupils used 6s rather than 6s squared.
    {
      id: 'gsa-mis-cube-six-s-not-six-s-squared',
      description:
        'For a cube, I find the surface area as 6 x s, treating each face as a length rather than as a square.',
      triggerAnswer: 'cube-six-s-not-six-s-squared',
      correction:
        'Actually each face of a cube is a square of area s squared, so the surface area is 6 x s squared.',
      reExplanation:
        'For a cube of edge 5 cm, each face has area 5 x 5 = 25 cm squared. The cube has 6 such faces, so surface area = 6 x 25 = 150 cm squared. Writing 6 x 5 = 30 gives a length, not an area, and ignores that a face is a square. The squared unit is your check.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 5 Geometry and Measures, "Surface Area" page; the worked example warns that face areas come in pairs and the doubling step is the most common slip.
    {
      id: 'gsa-mis-forget-pair-double',
      description:
        'I add the three different face areas (lw, lh, wh) and call that the surface area, forgetting that each face appears twice on a cuboid.',
      triggerAnswer: 'forget-pair-double',
      correction:
        'In fact a cuboid has three pairs of identical faces. Double the sum: SA = 2(lw + lh + wh).',
      reExplanation:
        'For a 10 cm by 6 cm by 4 cm cuboid, the three different face areas are 60, 40 and 24, summing to 124. That is only half of the surface area, because each face has a matching twin on the opposite side. Doubling gives the correct total: 2 x 124 = 248 cm squared.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 2F (Foundation, Calculator), commentary on an open-top container question where pupils used the closed-cuboid formula and forgot to subtract the missing lid.
    {
      id: 'gsa-mis-open-box-forget-subtract',
      description:
        'For an open-top container, I use the closed-cuboid formula 2(lw + lh + wh) and forget to subtract the missing top face.',
      triggerAnswer: 'open-box-forget-subtract',
      correction:
        'Actually an open-top box has only 5 faces, not 6. Subtract the area of the missing lid (lw) from the closed total.',
      reExplanation:
        'For an 80 cm by 40 cm by 30 cm open-top planter, the closed surface area is 2(3 200 + 2 400 + 1 200) = 13 600 cm squared. The missing top has area lw = 80 x 40 = 3 200. The wood needed is 13 600 - 3 200 = 10 400 cm squared. Always sketch the shape and tick off the faces actually present.',
    },
    // Source: NCETM "Misconceptions and how to overcome them: surface area" reference document, Year 7 to 8 transition pack, on pupils mixing centimetres and metres without converting in surface area calculations.
    {
      id: 'gsa-mis-mixed-units',
      description:
        'I substitute one edge in metres and another in centimetres into 2(lw + lh + wh) without converting first.',
      triggerAnswer: 'mixed-units',
      correction:
        'In fact every edge length must use the same unit before substituting. Convert one side first.',
      reExplanation:
        'For a crate that is 1 m long, 80 cm wide and 50 cm tall, convert 80 cm to 0.8 m and 50 cm to 0.5 m first. Then SA = 2(1 x 0.8 + 1 x 0.5 + 0.8 x 0.5) = 2(0.8 + 0.5 + 0.4) = 2 x 1.7 = 3.4 m squared. Mixing units multiplies the wrong magnitudes and gives a useless answer.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 8 "Measurement" by Hart, on pupils computing two of the three face pairs and calling that the surface area of a cuboid.
    {
      id: 'gsa-mis-skip-one-pair',
      description:
        'I find the area of two of the three face pairs and forget the third pair when adding them up.',
      triggerAnswer: 'skip-one-pair',
      correction:
        'Actually a cuboid has three different pairs of faces. Always include lw, lh and wh before doubling.',
      reExplanation:
        'For a 12 cm by 8 cm by 5 cm box, the three pair products are 96, 60 and 40. Forgetting the wh = 40 pair gives 2(96 + 60) = 312, but the true surface area is 2(96 + 60 + 40) = 392 cm squared. A quick check: name top, front and side, and tick each off as you write its product.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const surfaceAreaCuboidsZoneNodes = [surfaceAreaCuboids]
