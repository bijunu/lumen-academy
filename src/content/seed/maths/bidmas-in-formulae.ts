import type { SkillNode } from '@/types/content'

export const bidmasInFormulae: SkillNode = {
  id: 'maths-bidmas-in-formulae',
  title: 'BIDMAS in Scientific Formulae',
  description:
    'Apply BIDMAS to evaluate scientific and mathematical formulae after substituting values. Cover speed and distance (S = D / T), area of a triangle (A = 1/2 x b x h), circumference (C = 2 x pi x r), Pythagoras (c^2 = a^2 + b^2), volume of a cuboid (V = l x w x h), and Newton\'s second law (F = m x a). Always substitute first, then resolve indices, multiplication, and addition in BIDMAS order. Check units agree before you compute and report.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-bidmas',
  zoneName: 'BIDMAS',
  tier: 'challenge',
  prerequisites: ['maths-bidmas-with-substitution'],
  curriculum: {
    ks3Objective:
      'Substitute numerical values into scientific formulae and apply the priority of operations to evaluate them.',
    awardingBodies: {
      aqa: 'A2 Substitute numerical values into scientific formulae and evaluate (GCSE Mathematics 8300)',
      edexcel: 'A2 Substitute numerical values into formulae and expressions, including scientific formulae (GCSE Mathematics 1MA1)',
      ocr: '6.02a Substitute numerical values into formulae and evaluate, applying BIDMAS (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'bif-scene-formula-triangles',
      title: 'Three Workhorse Formula Triangles',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read what every part of the formula stands for. Speed, distance, and time travel together. The triangle area uses one half, a base, and a height. The circumference of a circle uses 2, pi, and a radius.',
      data: {
        viewBox: '0 0 100 100',
        hotspots: [
          { id: 'bif-h-sdt-formula', x: 20, y: 20, label: 'S = D / T', description: 'Speed equals distance divided by time. With D = 60 km and T = 2 h, S = 30 km/h.' },
          { id: 'bif-h-sdt-units', x: 20, y: 40, label: 'Units must agree', description: 'Use km with hours for km/h; use metres with seconds for m/s. Never mix.' },
          { id: 'bif-h-triangle-formula', x: 50, y: 20, label: 'A = 1/2 x b x h', description: 'Area of a triangle. b is the base; h is the perpendicular height.' },
          { id: 'bif-h-triangle-result', x: 50, y: 40, label: 'b = 8 cm, h = 5 cm', description: 'A = 1/2 x 8 x 5 = 20 cm squared.' },
          { id: 'bif-h-circle-formula', x: 80, y: 20, label: 'C = 2 x pi x r', description: 'Circumference of a circle. pi is about 3.14, r is the radius.' },
          { id: 'bif-h-circle-result', x: 80, y: 40, label: 'r = 5 cm', description: 'C = 2 x 3.14 x 5 = 31.4 cm.' },
        ],
      },
    },
    {
      id: 'bif-scene-substitute-then-bidmas',
      title: 'The Order: Substitute First, Then BIDMAS',
      type: 'diagram',
      instructions:
        'Every formula evaluation in this node follows the same two-stage routine. Stage one is substitution: replace every letter with its value, writing every implicit multiplication explicitly. Stage two is BIDMAS: brackets, indices, then division or multiplication, then addition or subtraction. Skipping either stage is the single most common slip on substitution questions. For F = m x a with m = 800 kg and a = 2.5 m/s squared, substitute to get 800 x 2.5, then multiply to get 2000 N. For c^2 = a^2 + b^2 with a = 3 and b = 4, substitute to get c^2 = 9 + 16 = 25, then take the square root once at the end to get c = 5.',
      data: {
        stages: [
          { step: 1, label: 'Substitute', detail: 'Replace each letter with its value. Write 3a as 3 x a (not 34). Wrap negatives in brackets.' },
          { step: 2, label: 'Apply BIDMAS', detail: 'Brackets, Indices, Divide and Multiply, Add and Subtract. Work from left to right within each rank.' },
          { step: 3, label: 'Report with units', detail: 'A circumference is cm. An area is cm squared. A volume is cm cubed. A speed is km/h or m/s.' },
        ],
        rule: 'A formula is just a recipe. Substitute, BIDMAS, units. In that order, every time.',
      },
    },
    {
      id: 'bif-scene-pythagoras-triangle',
      title: 'Pythagoras: The Square Root Comes Last',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the right-angled triangle to see how Pythagoras builds c from a and b. The formula gives c squared first. The final step is the square root, taken once after the addition.',
      data: {
        viewBox: '0 0 100 100',
        hotspots: [
          { id: 'bif-h-pyth-a', x: 20, y: 75, label: 'a = 3 (one short side)', description: 'The shorter of the two sides next to the right angle.' },
          { id: 'bif-h-pyth-b', x: 60, y: 90, label: 'b = 4 (the other short side)', description: 'The other side next to the right angle. The angle between a and b is 90 degrees.' },
          { id: 'bif-h-pyth-c', x: 45, y: 50, label: 'c = ? (hypotenuse)', description: 'The longest side, opposite the right angle. This is what the formula finds.' },
          { id: 'bif-h-pyth-formula', x: 80, y: 30, label: 'c^2 = a^2 + b^2', description: 'Indices first, then add. So c^2 = 9 + 16 = 25.' },
          { id: 'bif-h-pyth-result', x: 80, y: 60, label: 'c = square root of 25 = 5', description: 'Take the square root only at the end. Reporting 25 instead of 5 is the most common slip.' },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'bif-worked-1',
      title: 'Area of a triangle with b = 8 cm and h = 5 cm',
      steps: [
        {
          explanation:
            'Identify the formula and the values to substitute.',
          maths: 'A = 1/2 x b x h, b = 8 cm, h = 5 cm',
        },
        {
          explanation:
            'Substitute the values into the formula, writing each multiplication explicitly.',
          maths: 'A = 1/2 x 8 x 5',
        },
        {
          explanation:
            'Apply BIDMAS. Division and multiplication have equal priority, so work left to right.',
          maths: '1/2 x 8 = 4',
        },
        {
          explanation:
            'Continue the multiplication from left to right.',
          maths: '4 x 5 = 20',
        },
        {
          explanation:
            'Report the area with the correct unit. An area is always in square units.',
          maths: 'A = 20 cm squared',
        },
      ],
    },
    {
      id: 'bif-worked-2',
      title: 'Pythagoras with a = 3 and b = 4 (find c)',
      steps: [
        {
          explanation:
            'Identify the formula and the values to substitute. The formula gives c squared, not c.',
          maths: 'c^2 = a^2 + b^2, a = 3, b = 4',
        },
        {
          explanation:
            'Substitute the values for a and b.',
          maths: 'c^2 = 3^2 + 4^2',
        },
        {
          explanation:
            'Apply BIDMAS. Indices come before addition, so square each value first.',
          maths: '3^2 = 9 and 4^2 = 16',
        },
        {
          explanation:
            'Add the squared values to find c squared.',
          maths: 'c^2 = 9 + 16 = 25',
        },
        {
          explanation:
            'Take the square root of c squared. This step turns c squared into c, the actual side length.',
          maths: 'c = square root of 25 = 5',
        },
        {
          explanation:
            'So the hypotenuse c is 5. Reporting 25 as the final answer is the classic Pythagoras slip: it skips the square root at the end.',
          maths: 'c = 5',
        },
      ],
    },
  ],
  questions: [
    // Core 1: numeric -> MCQ rectangle area (warm up substituting into a x b)
    {
      id: 'bif-q1',
      type: 'multiple-choice',
      stem: 'A rectangle has area A = l x w. Find A in square centimetres when l = 6 cm and w = 4 cm.',
      tier: 'core',
      options: ['10', '14', '24', '64'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Substitute: A = 6 x 4 = 24. Area is in square centimetres.',
    },
    // Core 2: MCQ F = m x a
    {
      id: 'bif-q2',
      type: 'multiple-choice',
      stem: 'Newton\'s second law gives F = m x a. Find F in newtons when m = 4 kg and a = 3 m/s squared.',
      tier: 'core',
      options: ['7', '12', '1.3', '43'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'bif-mis-skip-bidmas-after-sub',
      hint: 'Substitute: F = 4 x 3 = 12 N. Adding the values would give 7, which is the slip.',
    },
    // Core 3: numeric S = D / T
    {
      id: 'bif-q3',
      type: 'numeric-entry',
      stem: 'A coach travels D = 60 km in T = 2 hours. Use S = D / T to find the average speed in km/h.',
      tier: 'core',
      correctAnswer: 30,
      unit: 'km/h',
      xpValue: 10,
      hint: 'Substitute: S = 60 / 2 = 30 km/h.',
    },
    // Core 4: MCQ C = 2 x pi x r with pi = 3
    {
      id: 'bif-q4',
      type: 'multiple-choice',
      stem: 'A circle has radius r = 5 cm. Use C = 2 x pi x r with pi taken as 3 to estimate the circumference in centimetres.',
      tier: 'core',
      options: ['30', '15', '25', '60'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'bif-mis-two-pi-as-power',
      hint: 'BIDMAS: multiplication only. C = 2 x 3 x 5 = 30 cm. The 2 multiplies, it is not an index.',
    },
    // Core 5: MCQ A = 1/2 x b x h with b = 10, h = 4
    {
      id: 'bif-q5',
      type: 'multiple-choice',
      stem: 'A triangle has base b = 10 cm and perpendicular height h = 4 cm. Use A = 1/2 x b x h to find the area in square centimetres.',
      tier: 'core',
      options: ['15', '20', '24', '12'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'bif-mis-half-base-height-small-b',
      hint: 'Work left to right: 1/2 x 10 = 5, then 5 x 4 = 20 cm squared.',
    },
    // Core 6: numeric V = l x w x h (cuboid volume)
    {
      id: 'bif-q6',
      type: 'numeric-entry',
      stem: 'A cuboid has length l = 2 cm, width w = 3 cm, and height h = 4 cm. Use V = l x w x h to find the volume in cubic centimetres.',
      tier: 'core',
      correctAnswer: 24,
      unit: 'cubic centimetres',
      xpValue: 10,
      hint: 'Substitute: V = 2 x 3 x 4 = 24 cm cubed.',
    },
    // Core 7: MCQ P = 2(l + w) (perimeter, brackets first)
    {
      id: 'bif-q7',
      type: 'multiple-choice',
      stem: 'A rectangle has l = 9 cm and w = 4 cm. Use P = 2(l + w) to find the perimeter in centimetres.',
      tier: 'core',
      options: ['13', '22', '36', '26'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Brackets first: l + w = 13. Then 2 x 13 = 26 cm.',
    },
    // Confident 1: numeric A = 1/2 x b x h with b = 7, h = 6
    {
      id: 'bif-q8',
      type: 'numeric-entry',
      stem: 'A triangle has base b = 7 cm and perpendicular height h = 6 cm. Use A = 1/2 x b x h to find the area in square centimetres.',
      tier: 'confident',
      correctAnswer: 21,
      unit: 'square centimetres',
      xpValue: 15,
      hint: 'Left to right: 1/2 x 7 = 3.5, then 3.5 x 6 = 21 cm squared.',
    },
    // Confident 2: MCQ Pythagoras c^2 step (intermediate, NOT c itself)
    {
      id: 'bif-q9',
      type: 'multiple-choice',
      stem: 'For c^2 = a^2 + b^2 with a = 6 and b = 8, what is the value of c squared?',
      tier: 'confident',
      options: ['14', '64', '98', '100'],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'bif-mis-pyth-report-c-squared',
      hint: 'Indices first: 6^2 = 36, 8^2 = 64. Add: 36 + 64 = 100. This is c squared, not c.',
    },
    // Confident 3: numeric D = S x T using UK speed units
    {
      id: 'bif-q10',
      type: 'numeric-entry',
      stem: 'A car drives at a steady S = 80 km/h for T = 2.5 hours. Use D = S x T to find the distance in kilometres.',
      tier: 'confident',
      correctAnswer: 200,
      unit: 'kilometres',
      xpValue: 15,
      hint: 'Substitute: D = 80 x 2.5 = 200 km.',
    },
    // Confident 4: spot-misconception on Pythagoras c^2 reported as c
    {
      id: 'bif-q11',
      type: 'spot-misconception',
      stem: 'Priya uses c^2 = a^2 + b^2 with a = 5 and b = 12. She writes "5^2 + 12^2 = 25 + 144 = 169, so c = 169".',
      tier: 'confident',
      statements: [
        {
          text: 'Priya is right. The formula gives c directly once you add the squared values.',
          isMisconception: true,
        },
        {
          text: 'In fact the formula gives c squared, not c. After adding to get 169, take the square root: c = square root of 169 = 13. The square root is the closing step on every Pythagoras problem.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'bif-mis-pyth-report-c-squared',
    },
    // Confident 5: missing-step using V = l x w x h
    {
      id: 'bif-q12',
      type: 'missing-step',
      stem: 'Fill in the missing step. Tom evaluates V = l x w x h for a cuboid with l = 5 cm, w = 4 cm, and h = 3 cm.',
      tier: 'confident',
      steps: [
        'Identify the formula: V = l x w x h.',
        'Substitute the values: V = 5 x 4 x 3.',
        null,
        'So the volume is V = 60 cm cubed. Always report a volume in cubic units.',
      ],
      missingStepIndex: 2,
      correctStep: 'Multiply left to right: 5 x 4 = 20, then 20 x 3 = 60.',
      xpValue: 20,
      misconceptionId: 'bif-mis-volume-unit-dropped',
    },
    // Confident 6: numeric C = 2 x pi x r with pi = 3.14
    {
      id: 'bif-q13',
      type: 'numeric-entry',
      stem: 'A circular pond in a Sevenoaks garden has radius r = 7 m. Use C = 2 x pi x r with pi = 3.14 to find the circumference in metres.',
      tier: 'confident',
      correctAnswer: 43.96,
      tolerance: 0.05,
      unit: 'metres',
      xpValue: 15,
      misconceptionId: 'bif-mis-two-pi-as-power',
      hint: 'Multiply left to right: 2 x 3.14 = 6.28, then 6.28 x 7 = 43.96 m. The 2 is a factor, never an index.',
    },
    // Confident 7: drag-order four formula results
    {
      id: 'bif-q14',
      type: 'drag-order',
      stem: 'For each formula, substitute the values then evaluate. Drag the results into order from smallest to largest.',
      tier: 'confident',
      items: [
        'A = 1/2 x b x h with b = 4, h = 5 (area)',
        'F = m x a with m = 3, a = 4 (force in newtons)',
        'V = l x w x h with l = 2, w = 2, h = 2 (volume)',
        'C = 2 x pi x r with r = 5, pi = 3 (circumference)',
      ],
      correctOrder: [0, 2, 3, 1],
      xpValue: 20,
      hint: 'A = 10, F = 12, V = 8, C = 30. Order smallest to largest: 8, 10, 12, 30.',
    },
    // Confident 8: MCQ A = 1/2 x b x h with non-integer result (small base trap)
    {
      id: 'bif-q15',
      type: 'multiple-choice',
      stem: 'A triangle has base b = 5 cm and perpendicular height h = 9 cm. Use A = 1/2 x b x h to find the area in square centimetres.',
      tier: 'confident',
      options: ['20', '45', '22.5', '11.25'],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'bif-mis-half-base-height-small-b',
      hint: 'Left to right: 1/2 x 5 = 2.5, then 2.5 x 9 = 22.5 cm squared. Forgetting the half gives 45.',
    },
    // Challenge 1: numeric Bond-style speed word problem
    {
      id: 'bif-q16',
      type: 'numeric-entry',
      stem: 'A train from Manchester to Sevenoaks covers 320 km. The journey takes 4 hours of moving time at a steady average speed. Use S = D / T to find the average speed in km/h.',
      tier: 'challenge',
      correctAnswer: 80,
      unit: 'km/h',
      xpValue: 25,
      hint: 'Substitute: S = 320 / 4 = 80 km/h.',
    },
    // Challenge 2: MCQ Pythagoras word problem (Bond shape, 2-3 sentence)
    {
      id: 'bif-q17',
      type: 'multiple-choice',
      stem: 'A school flagpole in Dover is held upright by a guy wire. The wire is fixed to the ground 9 m from the base of the pole and reaches up to the top, which is 12 m above the ground. Use c^2 = a^2 + b^2 to find the length of the wire in metres.',
      tier: 'challenge',
      options: ['15', '21', '108', '225'],
      correctIndex: 0,
      xpValue: 25,
      misconceptionId: 'bif-mis-pyth-report-c-squared',
      hint: 'c^2 = 9^2 + 12^2 = 81 + 144 = 225. Then c = square root of 225 = 15 m. Stop one step early and you report 225, the c-squared slip.',
    },
    // Challenge 3: numeric Bond-style triangle with mixed units (unit consistency)
    {
      id: 'bif-q18',
      type: 'numeric-entry',
      stem: 'A triangular garden plot in Tunbridge Wells has base b = 8 m and perpendicular height h = 250 cm. Convert h to metres, then use A = 1/2 x b x h to find the area in square metres.',
      tier: 'challenge',
      correctAnswer: 10,
      unit: 'square metres',
      xpValue: 25,
      misconceptionId: 'bif-mis-unit-consistency',
      hint: 'Convert first: 250 cm = 2.5 m. Then A = 1/2 x 8 x 2.5 = 10 m squared. Mixing metres with centimetres gives 1000, which is wrong.',
    },
    // Challenge 4: spot-misconception on 2 x pi as a power
    {
      id: 'bif-q19',
      type: 'spot-misconception',
      stem: 'Leo evaluates C = 2 x pi x r for a circle with r = 4 cm and pi = 3.14. He writes "C = 2 to the pi to the r = an index tower, so I will work right to left from the radius".',
      tier: 'challenge',
      statements: [
        {
          text: 'Leo is right. When pi sits between two numbers in the formula, it acts like an index that turns the expression into a power tower.',
          isMisconception: true,
        },
        {
          text: 'In fact 2 x pi x r is three numbers multiplied together. Multiplication is left associative, so C = 2 x 3.14 x 4 = 25.12 cm. There are no indices in C = 2 x pi x r, just three factors.',
          isMisconception: false,
        },
      ],
      xpValue: 25,
      misconceptionId: 'bif-mis-two-pi-as-power',
    },
    // Challenge 5: free-text (REQUIRED at challenge) explain the substitute-then-BIDMAS order
    {
      id: 'bif-q20',
      type: 'free-text',
      stem: 'Aisha is solving c^2 = a^2 + b^2 with a = -3 and b = 4. Explain in two or three sentences how she should substitute the negative value, what BIDMAS step to apply first, and why c will still be positive.',
      tier: 'challenge',
      sampleAnswer:
        'Aisha should substitute with brackets: c^2 = (-3)^2 + 4^2. BIDMAS says indices first, so (-3)^2 = 9 and 4^2 = 16. Adding gives c^2 = 25, so c = square root of 25 = 5. A side length cannot be negative, so the square root is taken as positive.',
      keywords: ['brackets', 'indices', 'square', 'BIDMAS', 'positive'],
      xpValue: 30,
      misconceptionId: 'bif-mis-negative-square-sign',
    },
    // Challenge 6: MCQ Bond-style cuboid volume word problem
    {
      id: 'bif-q21',
      type: 'multiple-choice',
      stem: 'A laboratory tank in a Manchester school has length 50 cm, width 30 cm, and depth 20 cm. Use V = l x w x h to find the volume of water it can hold in cubic centimetres when full.',
      tier: 'challenge',
      options: ['100', '1500', '30000', '300000'],
      correctIndex: 2,
      xpValue: 25,
      hint: 'V = 50 x 30 x 20. Left to right: 50 x 30 = 1500, then 1500 x 20 = 30000 cm cubed.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, November 2022, Paper 2F (Foundation, Calculator), commentary on a formula-substitution question where candidates added two factors instead of multiplying because the question used a letter for one of the values.
    {
      id: 'bif-mis-skip-bidmas-after-sub',
      description:
        'Once I substitute values into a formula, I add the numbers together because addition feels safer than multiplication.',
      triggerAnswer: 'add-instead-of-multiply',
      correction:
        'In fact a formula like F = m x a is a product. After substituting, multiply the values; do not add them.',
      reExplanation:
        'For F = m x a with m = 4 and a = 3, the formula sign between the letters is a multiplication, so F = 4 x 3 = 12 N, not 4 + 3 = 7 N. After substituting any formula, look at the operator written between the values and apply that operation. BIDMAS keeps working: substitution does not switch multiplication to addition.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a circumference question where candidates raised 2 to the power of pi instead of multiplying 2 by pi.
    {
      id: 'bif-mis-two-pi-as-power',
      description:
        'I read 2 x pi x r as a tower with indices, so I treat the pi as an exponent on the 2 or on the radius.',
      triggerAnswer: 'two-pi-as-power',
      correction:
        'Actually 2 x pi x r is three numbers multiplied together. There are no indices in this formula.',
      reExplanation:
        'The circumference C = 2 x pi x r is a chain of three factors. With r = 5 and pi taken as 3.14, C = 2 x 3.14 x 5 = 31.4 cm. Multiplication is the only operation here, so work left to right. Treating the 2 as a base and pi as an index would give roughly 8.8 to start, which is a very different (and wrong) calculation.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2022, Paper 03 (Higher, Calculator), commentary on a Pythagoras question where many candidates reported c squared as the final answer instead of c.
    {
      id: 'bif-mis-pyth-report-c-squared',
      description:
        'I stop one step early in Pythagoras and report c squared as the side length, forgetting the closing square root.',
      triggerAnswer: 'pyth-report-c-squared',
      correction:
        'In fact c^2 = a^2 + b^2 gives the square of c, not c itself. Take the square root at the end to recover c.',
      reExplanation:
        'For a = 3 and b = 4, c^2 = 9 + 16 = 25 is the value of c squared. The hypotenuse itself is c = square root of 25 = 5. Reporting 25 would mean the side is 25 long, which is far bigger than either 3 or 4 next to it. Always finish with the root: c squared first, c second.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 7 Geometry and Measure, "Area of a Triangle" page, "Common mistake" callout warning to halve carefully when the base is small or odd.
    {
      id: 'bif-mis-half-base-height-small-b',
      description:
        'When the base in A = 1/2 x b x h is small or odd, I drop the half and just multiply the base by the height.',
      triggerAnswer: 'half-base-height-small-b',
      correction:
        'Actually the half is always part of the formula. The result is half of the rectangle that surrounds the triangle.',
      reExplanation:
        'For b = 5 cm and h = 9 cm, A = 1/2 x 5 x 9. Work left to right: 1/2 x 5 = 2.5, then 2.5 x 9 = 22.5 cm squared. Dropping the half gives 45, the area of the full rectangle. A triangle is half of that rectangle, so the half is never optional, even when the answer is a decimal.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 1H (Higher, Non-calculator), commentary on an indices question where candidates wrote -3 squared as -9 because they omitted brackets around the negative value.
    {
      id: 'bif-mis-negative-square-sign',
      description:
        'I square a negative value without brackets, so I read -3 squared as -9 instead of (-3) squared, which is 9.',
      triggerAnswer: 'negative-square-sign',
      correction:
        'In fact a negative value must sit in brackets before any power. Without brackets the minus sits outside the square.',
      reExplanation:
        'For c^2 = a^2 + b^2 with a = -3, substitute as (-3)^2 = (-3) x (-3) = 9. Without brackets, -3^2 reads as the negative of 3 squared and gives -9, which would make c squared negative and break the formula. Brackets pin the minus inside the square so the result stays positive.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2023, Paper 2F (Foundation, Calculator), commentary on an area question where candidates mixed centimetres and metres in the same substitution and reported an answer hundreds of times too large.
    {
      id: 'bif-mis-unit-consistency',
      description:
        'I substitute values straight into a formula without checking that the units agree, so I mix metres and centimetres in the same calculation.',
      triggerAnswer: 'unit-consistency',
      correction:
        'Actually convert every value to the same unit before substituting. Mixing units scales the answer by 100 or 1000.',
      reExplanation:
        'For A = 1/2 x b x h with b = 8 m and h = 250 cm, convert h to 2.5 m first. Then A = 1/2 x 8 x 2.5 = 10 m squared. Substituting 250 with 8 gives 1000, an area a hundred times too large because 1 m = 100 cm. The same trap appears in speed: km/h needs km and hours, never km and minutes.',
    },
    // Authored, no external source: classroom-observed slip where pupils substitute correctly but forget the closing unit on volumes, leaving the answer as a bare number.
    {
      id: 'bif-mis-volume-unit-dropped',
      description:
        'I substitute correctly into V = l x w x h but leave the answer as a bare number, so a volume of 60 is reported with no unit.',
      triggerAnswer: 'volume-unit-dropped',
      correction:
        'In fact a volume is always reported in cubic units. Use cm cubed for centimetres, m cubed for metres.',
      reExplanation:
        'For V = l x w x h with l = 5 cm, w = 4 cm, h = 3 cm, the calculation gives 60. The full answer is V = 60 cm cubed. Reporting 60 alone hides whether it is a length, an area, or a volume. The exponent on the unit matches the dimension: length is to the first, area squared, volume cubed.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const bidmasInFormulaeZoneNodes = [bidmasInFormulae]
