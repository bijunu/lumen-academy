import type { SkillNode } from '@/types/content'

const TRIANGLE_TOOL_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">The F = m a triangle cover up tool</text>
    <text x="400" y="62" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Cover the letter you want; what is left is the calculation.</text>
    <!-- Triangle -->
    <polygon points="400,100 250,330 550,330" stroke-width="3" fill="none" />
    <!-- Inner labels -->
    <text x="400" y="180" text-anchor="middle" font-size="36" font-weight="700" stroke="none" fill="currentColor">F</text>
    <line x1="280" y1="240" x2="520" y2="240" stroke-width="3" />
    <text x="340" y="305" text-anchor="middle" font-size="32" font-weight="700" stroke="none" fill="currentColor">m</text>
    <text x="460" y="305" text-anchor="middle" font-size="32" font-weight="700" stroke="none" fill="currentColor">a</text>
    <!-- F units -->
    <text x="400" y="210" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">force in N</text>
    <text x="340" y="325" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">mass in kg</text>
    <text x="460" y="325" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">a in m/s squared</text>
    <!-- Side panel: three forms -->
    <text x="650" y="120" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Three forms</text>
    <text x="650" y="150" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">cover F: F = m a</text>
    <text x="650" y="175" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">cover m: m = F / a</text>
    <text x="650" y="200" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">cover a: a = F / m</text>
    <text x="650" y="240" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">F means the</text>
    <text x="650" y="258" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">resultant force</text>
    <text x="650" y="276" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">on the object.</text>
  </g>
`

const CAR_VARIED_RESULTANT_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Same car, three different resultant forces</text>
    <text x="400" y="62" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">mass stays at 1000 kg; bigger resultant gives bigger acceleration</text>
    <!-- Row 1: small resultant -->
    <line x1="60" y1="130" x2="740" y2="130" stroke-dasharray="3 4" />
    <rect x="120" y="95" width="80" height="30" fill="currentColor" />
    <text x="160" y="115" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="white">1000 kg</text>
    <line x1="200" y1="110" x2="260" y2="110" />
    <polygon points="252,103 265,110 252,117" fill="currentColor" stroke="none" />
    <text x="350" y="105" font-size="13" stroke="none" fill="currentColor">resultant 500 N forwards</text>
    <text x="350" y="123" font-size="13" font-weight="700" stroke="none" fill="currentColor">a = 500 / 1000 = 0.5 m/s squared</text>
    <!-- Row 2: medium resultant -->
    <line x1="60" y1="220" x2="740" y2="220" stroke-dasharray="3 4" />
    <rect x="120" y="185" width="80" height="30" fill="currentColor" />
    <text x="160" y="205" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="white">1000 kg</text>
    <line x1="200" y1="200" x2="320" y2="200" />
    <polygon points="312,193 325,200 312,207" fill="currentColor" stroke="none" />
    <text x="380" y="195" font-size="13" stroke="none" fill="currentColor">resultant 1000 N forwards</text>
    <text x="380" y="213" font-size="13" font-weight="700" stroke="none" fill="currentColor">a = 1000 / 1000 = 1 m/s squared</text>
    <!-- Row 3: large resultant -->
    <line x1="60" y1="310" x2="740" y2="310" stroke-dasharray="3 4" />
    <rect x="120" y="275" width="80" height="30" fill="currentColor" />
    <text x="160" y="295" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="white">1000 kg</text>
    <line x1="200" y1="290" x2="380" y2="290" />
    <polygon points="372,283 385,290 372,297" fill="currentColor" stroke="none" />
    <text x="430" y="285" font-size="13" stroke="none" fill="currentColor">resultant 2000 N forwards</text>
    <text x="430" y="303" font-size="13" font-weight="700" stroke="none" fill="currentColor">a = 2000 / 1000 = 2 m/s squared</text>
    <text x="400" y="370" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Double the resultant force, double the acceleration, as long as the mass stays the same.</text>
  </g>
`

const LORRY_VS_CAR_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Same engine force, different mass</text>
    <text x="400" y="62" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Each gets a 4000 N forwards engine force on a flat M25 stretch</text>
    <!-- Road -->
    <line x1="60" y1="170" x2="740" y2="170" stroke-dasharray="3 4" />
    <!-- Car -->
    <rect x="160" y="130" width="100" height="35" fill="currentColor" />
    <path d="M 180 130 L 200 105 L 240 105 L 260 130 Z" fill="currentColor" />
    <circle cx="180" cy="170" r="10" fill="currentColor" />
    <circle cx="240" cy="170" r="10" fill="currentColor" />
    <text x="210" y="150" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="white">1000 kg</text>
    <line x1="260" y1="150" x2="360" y2="150" />
    <polygon points="352,143 365,150 352,157" fill="currentColor" stroke="none" />
    <text x="310" y="140" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">4000 N</text>
    <text x="430" y="155" font-size="13" font-weight="700" stroke="none" fill="currentColor">a = 4000 / 1000 = 4 m/s squared</text>
    <!-- Road row 2 -->
    <line x1="60" y1="320" x2="740" y2="320" stroke-dasharray="3 4" />
    <!-- Lorry -->
    <rect x="120" y="240" width="200" height="80" fill="currentColor" />
    <rect x="320" y="270" width="60" height="50" fill="currentColor" />
    <circle cx="150" cy="320" r="14" fill="currentColor" />
    <circle cx="220" cy="320" r="14" fill="currentColor" />
    <circle cx="350" cy="320" r="14" fill="currentColor" />
    <text x="220" y="285" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="white">8000 kg</text>
    <line x1="380" y1="280" x2="480" y2="280" />
    <polygon points="472,273 485,280 472,287" fill="currentColor" stroke="none" />
    <text x="430" y="270" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">4000 N</text>
    <text x="550" y="285" font-size="13" font-weight="700" stroke="none" fill="currentColor">a = 4000 / 8000 = 0.5 m/s squared</text>
    <text x="400" y="370" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Same resultant force on a bigger mass gives a smaller acceleration.</text>
  </g>
`

export const forcesNewtonSecond: SkillNode = {
  id: 'physics-forces-newton-second',
  title: "Newton's Second Law",
  description:
    "Use Newton's Second Law to link the resultant force on an object to its mass and acceleration. Apply the rule F = m a, where F is the resultant force in newtons, m is the mass in kilograms, and a is the acceleration in metres per second squared. Rearrange to a = F / m and m = F / a, picking the right form for the question. Read the law as: a bigger resultant force gives a bigger acceleration for the same mass; a bigger mass gives a smaller acceleration for the same resultant.",
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-forces',
  zoneName: 'Forces',
  tier: 'challenge',
  prerequisites: ['physics-forces-newton-first', 'physics-forces-acceleration'],
  curriculum: {
    ks3Objective:
      'Forces being needed to cause objects to stop or start moving, or to change their speed or direction of motion; resultant force and change in motion.',
    awardingBodies: {
      aqa: "4.5.6.2.2 Newton's Second Law; resultant force equals mass times acceleration, F = m a (GCSE Physics 8463)",
      edexcel:
        "Topic 1 Motion and forces, 1.24 to 1.26 Newton's Second Law; force equals mass times acceleration (GCSE Physics 1PH0)",
      ocr: "P2.2 Newton's laws; second law, F = m a, and inertial mass (GCSE Physics J259 Gateway)",
    },
  },
  scenes: [
    {
      id: 'fn2-scene-varied-resultant',
      title: 'Same Car, Bigger Resultant: Bigger Acceleration',
      type: 'labelled-diagram',
      instructions:
        'Click each row to read the resultant force on the car and work out its acceleration.',
      data: {
        viewBox: '0 0 800 400',
        svg: CAR_VARIED_RESULTANT_SVG,
        hotspots: [
          {
            id: 'fn2-vr-small',
            x: 50,
            y: 28,
            label: 'Small resultant gives small acceleration',
            description:
              'A 1000 kg car with a 500 N resultant force on it. Using a = F / m, the acceleration is 500 divided by 1000, which is 0.5 m/s squared.',
          },
          {
            id: 'fn2-vr-medium',
            x: 50,
            y: 51,
            label: 'Double the resultant, double the acceleration',
            description:
              'Same 1000 kg car with a 1000 N resultant force. The acceleration is 1000 divided by 1000, which is 1 m/s squared. The resultant has doubled and so has the acceleration.',
          },
          {
            id: 'fn2-vr-large',
            x: 50,
            y: 74,
            label: 'Four times the resultant, four times the acceleration',
            description:
              'Same 1000 kg car with a 2000 N resultant force. The acceleration is 2000 divided by 1000, which is 2 m/s squared. Mass held fixed, acceleration scales with the resultant.',
          },
          {
            id: 'fn2-vr-rule',
            x: 50,
            y: 92,
            label: 'The rule: a is proportional to F when m is fixed',
            description:
              "Newton's Second Law links the three. With mass held fixed, doubling the resultant force doubles the acceleration. With force fixed, a bigger mass means a smaller acceleration.",
          },
        ],
      },
    },
    {
      id: 'fn2-scene-lorry-vs-car',
      title: 'Same Engine Force, Different Mass',
      type: 'labelled-diagram',
      instructions:
        'Click each vehicle to compare its acceleration when the engine force is the same.',
      data: {
        viewBox: '0 0 800 400',
        svg: LORRY_VS_CAR_SVG,
        hotspots: [
          {
            id: 'fn2-lv-car',
            x: 32,
            y: 37,
            label: 'Car: 4000 N on 1000 kg',
            description:
              'A 1000 kg car with a 4000 N forwards resultant has acceleration a = 4000 / 1000 = 4 m/s squared. The light mass picks up speed sharply.',
          },
          {
            id: 'fn2-lv-lorry',
            x: 28,
            y: 70,
            label: 'Lorry: 4000 N on 8000 kg',
            description:
              'An 8000 kg lorry with the same 4000 N forwards resultant has acceleration a = 4000 / 8000 = 0.5 m/s squared. The heavy mass picks up speed slowly.',
          },
          {
            id: 'fn2-lv-compare',
            x: 50,
            y: 92,
            label: 'Inertial mass: bigger mass, smaller acceleration',
            description:
              "Both vehicles get the same engine force, but the car accelerates eight times more. Mass measures inertia, so a heavier object resists changes in motion more. This is what F = m a tells us when force is held fixed.",
          },
        ],
      },
    },
    {
      id: 'fn2-scene-triangle',
      title: 'The F = m a Triangle: Three Forms, One Rule',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to learn the cover up trick that turns one rule into three forms.',
      data: {
        viewBox: '0 0 800 400',
        svg: TRIANGLE_TOOL_SVG,
        hotspots: [
          {
            id: 'fn2-tr-cover-f',
            x: 50,
            y: 45,
            label: 'Cover F to find force',
            description:
              'Cover the F at the top. The two letters left are m and a side by side. So F = m times a. Use this form when you know the mass and the acceleration.',
          },
          {
            id: 'fn2-tr-cover-a',
            x: 58,
            y: 76,
            label: 'Cover a to find acceleration',
            description:
              'Cover the a in the bottom right. The two letters left are F over m. So a = F / m. Use this form when you know the resultant force and the mass.',
          },
          {
            id: 'fn2-tr-cover-m',
            x: 42,
            y: 76,
            label: 'Cover m to find mass',
            description:
              'Cover the m in the bottom left. The two letters left are F over a. So m = F / a. Use this form when you know the resultant force and the acceleration.',
          },
          {
            id: 'fn2-tr-units',
            x: 81,
            y: 66,
            label: 'Units to use every time',
            description:
              'F must be in newtons, m in kilograms, a in metres per second squared. Mass in grams must be divided by 1000 first. F means the resultant force on the object, not just one force.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'fn2-worked-1',
      title: 'Compute the acceleration: 1500 N on 600 kg',
      steps: [
        {
          explanation:
            'Pick the object. The object is a small Mini Cooper on a flat car park. Every force in the question acts on this car.',
        },
        {
          explanation:
            'Read the question for the resultant force and the mass. The resultant force on the car is 1500 N forwards. The mass of the car is 600 kg.',
          maths: 'F = 1500 N, m = 600 kg',
        },
        {
          explanation:
            'Decide which form of the rule to use. We want acceleration and we know F and m. So we use a = F / m.',
          maths: 'a = F / m',
        },
        {
          explanation:
            'Substitute the numbers. Put 1500 in for F and 600 in for m.',
          maths: 'a = 1500 / 600',
        },
        {
          explanation:
            'Work out the value. 1500 divided by 600 is 2.5.',
          maths: 'a = 2.5',
        },
        {
          explanation:
            'State the answer with units and direction. The acceleration of the Mini is 2.5 m/s squared forwards, in the direction of the resultant force.',
        },
      ],
    },
    {
      id: 'fn2-worked-2',
      title: 'Find the mass: a Tesco trolley pushed at 0.5 m/s squared',
      steps: [
        {
          explanation:
            'Set the scene. A shopper pushes a Tesco trolley along a flat aisle. The resultant force on the trolley along the aisle is 8 N forwards. The trolley speeds up at 0.5 m/s squared.',
        },
        {
          explanation:
            'Pick the object. The object is the loaded trolley. Both numbers in the question describe this trolley.',
          maths: 'F = 8 N, a = 0.5 m/s squared',
        },
        {
          explanation:
            'Decide which form of the rule to use. We want the mass and we know F and a. So we use m = F / a.',
          maths: 'm = F / a',
        },
        {
          explanation:
            'Substitute the numbers. Put 8 in for F and 0.5 in for a.',
          maths: 'm = 8 / 0.5',
        },
        {
          explanation:
            'Work out the value. 8 divided by 0.5 is 16.',
          maths: 'm = 16',
        },
        {
          explanation:
            'State the answer with units. The loaded trolley has a mass of 16 kg. A heavier load would need more force for the same acceleration.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'fn2-q1',
      type: 'multiple-choice',
      stem: "Which equation states Newton's Second Law for an object with mass m and resultant force F?",
      tier: 'core',
      options: [
        'F = m + a',
        'F = m a',
        'F = a / m',
        'F = m / a',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'fn2-mis-additive-m-and-a',
      hint: 'The rule multiplies mass by acceleration, it does not add them.',
    },
    {
      id: 'fn2-q2',
      type: 'multiple-choice',
      stem: 'A box of mass 2 kg has a resultant force of 6 N acting on it along a flat floor. What is the acceleration of the box?',
      tier: 'core',
      options: [
        '12 m/s squared.',
        '8 m/s squared.',
        '3 m/s squared.',
        '0.33 m/s squared.',
      ],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Use a = F / m. Divide 6 by 2.',
    },
    {
      id: 'fn2-q3',
      type: 'numeric-entry',
      stem: 'A trolley of mass 5 kg accelerates at 4 m/s squared along a flat aisle. What is the size, in newtons, of the resultant force on the trolley?',
      tier: 'core',
      correctAnswer: 20,
      unit: 'N',
      xpValue: 10,
      hint: 'Use F = m a. Multiply 5 by 4.',
    },
    {
      id: 'fn2-q4',
      type: 'multiple-choice',
      stem: 'A bike of mass 10 kg has a resultant force of 30 N acting forwards. What is its acceleration?',
      tier: 'core',
      options: [
        '3 m/s squared.',
        '300 m/s squared.',
        '0.33 m/s squared.',
        '40 m/s squared.',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'a = F / m. Divide 30 by 10.',
    },
    {
      id: 'fn2-q5',
      type: 'numeric-entry',
      stem: 'A 8 kg crate slides along a warehouse floor with a resultant force of 24 N forwards. What is its acceleration, in m/s squared?',
      tier: 'core',
      correctAnswer: 3,
      unit: 'm/s squared',
      xpValue: 10,
      hint: 'a = F / m. Work out 24 divided by 8.',
    },
    {
      id: 'fn2-q6',
      type: 'multiple-choice',
      stem: 'A skateboard rolls along a flat path with a resultant force of 80 N forwards. The acceleration of the skateboard is 4 m/s squared. What is the mass of the skateboard and rider?',
      tier: 'core',
      options: [
        '320 kg.',
        '40 kg.',
        '76 kg.',
        '20 kg.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'fn2-mis-additive-m-and-a',
      hint: 'Use m = F / a. Divide 80 by 4.',
    },
    {
      id: 'fn2-q7',
      type: 'numeric-entry',
      stem: 'A trolley has a weight of 40 N. Its mass is therefore 4 kg (using g = 10 N/kg). A resultant force makes it accelerate at 5 m/s squared along a flat aisle. What is the size, in newtons, of the resultant force on the trolley?',
      tier: 'core',
      correctAnswer: 20,
      unit: 'N',
      xpValue: 10,
      misconceptionId: 'fn2-mis-mass-weight-confusion',
      hint: 'F = m a uses the mass in kg, not the weight in N. Multiply 4 by 5.',
    },
    {
      id: 'fn2-q8',
      type: 'numeric-entry',
      stem: 'A shopper pushes a Tesco trolley along a flat aisle. The resultant force on the trolley is 12 N forwards. The trolley speeds up at 3 m/s squared. What is the mass of the trolley, in kilograms?',
      tier: 'confident',
      correctAnswer: 4,
      unit: 'kg',
      xpValue: 15,
      hint: 'm = F / a. Divide 12 by 3.',
    },
    {
      id: 'fn2-q9',
      type: 'multiple-choice',
      stem: 'A car and a lorry sit on a flat stretch of the M25. Each is given the same 4000 N forwards engine force. The car has a mass of 1000 kg; the lorry has a mass of 8000 kg. Which vehicle has the bigger acceleration?',
      tier: 'confident',
      options: [
        'The lorry, because heavier objects always speed up more once they get going.',
        'The car, because for the same resultant force a smaller mass gives a larger acceleration.',
        'Both have the same acceleration, because they have the same engine force.',
        'The lorry, because more mass means more force can act on it.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'fn2-mis-heavier-always-slower',
      hint: 'a = F / m. With F fixed, a smaller m gives a larger a.',
    },
    {
      id: 'fn2-q10',
      type: 'numeric-entry',
      stem: 'A small motorbike has a mass of 200 kg, including the rider. The resultant force on it along a flat road is 600 N forwards. What is its acceleration, in m/s squared?',
      tier: 'confident',
      correctAnswer: 3,
      unit: 'm/s squared',
      xpValue: 15,
      hint: 'a = F / m. Divide 600 by 200.',
    },
    {
      id: 'fn2-q11',
      type: 'multiple-choice',
      stem: 'A car of mass 1000 kg has a resultant force of 500 N on it and accelerates at 0.5 m/s squared. The driver then doubles the resultant force to 1000 N, with no change in mass. What is the new acceleration?',
      tier: 'confident',
      options: [
        '0.25 m/s squared.',
        '0.5 m/s squared (unchanged).',
        '1 m/s squared.',
        '2 m/s squared.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'fn2-mis-double-force-double-a-always',
      hint: 'a = F / m. With mass fixed, doubling F doubles a.',
    },
    {
      id: 'fn2-q12',
      type: 'spot-misconception',
      stem: 'Maya is finding the acceleration of a car on the M25. The car has a 3000 N forwards engine force and a 1200 N backwards drag, with a mass of 1200 kg. She writes: "Use F = m a. The engine force is 3000 N, so a = 3000 / 1200 = 2.5 m/s squared." Which response is correct?',
      tier: 'confident',
      statements: [
        {
          text: 'Maya is right. F = m a uses any single forwards force, so the engine force is fine to use directly.',
          isMisconception: true,
        },
        {
          text: 'Maya is not right. The F in F = m a is the resultant force on the car. The resultant is 3000 minus 1200, which is 1800 N. So a = 1800 / 1200 = 1.5 m/s squared.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fn2-mis-any-force-not-resultant',
    },
    {
      id: 'fn2-q13',
      type: 'drag-order',
      stem: "Place the four steps in the right order for using Newton's Second Law to find the acceleration of an object from the forces on it.",
      tier: 'confident',
      items: [
        'Substitute the numbers into a = F / m and work out the value of the acceleration.',
        'Pick the object and list the forces along the line of motion, with their directions.',
        'Add the forces along the line, with signs, to find the resultant force on the object.',
        'Check the units: force in N, mass in kg, so the acceleration comes out in m/s squared.',
      ],
      correctOrder: [1, 2, 0, 3],
      xpValue: 15,
      hint: 'List the forces first, then find the resultant, then divide by the mass, then check the units.',
    },
    {
      id: 'fn2-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is finding the acceleration of a 600 kg Mini Cooper with a 1500 N forwards resultant force on it.',
      tier: 'confident',
      steps: [
        'Pick the object: the Mini Cooper on a flat car park.',
        'Read the values: F = 1500 N (resultant force) and m = 600 kg.',
        'Pick the form of the rule: a is unknown, so use a = F / m.',
        null,
        'State the answer: the acceleration of the Mini is 2.5 m/s squared forwards.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Substitute the numbers into a = F / m, so a = 1500 / 600, which gives a = 2.5 m/s squared.',
      xpValue: 15,
    },
    {
      id: 'fn2-q15',
      type: 'multiple-choice',
      stem: 'A go-kart at a fairground has a mass of 20 kg, including the driver. The resultant force on it is 40 N forwards. What is its acceleration?',
      tier: 'confident',
      options: [
        '0.5 m/s squared.',
        '2 m/s squared.',
        '20 m/s squared.',
        '800 m/s squared.',
      ],
      correctIndex: 1,
      xpValue: 15,
      hint: 'a = F / m. Divide 40 by 20.',
    },
    {
      id: 'fn2-q16',
      type: 'numeric-entry',
      stem: 'A delivery lorry on the M25 has a mass of 1200 kg. The forwards engine force on the lorry is 4000 N. Drag from the air and the road acts backwards along the road with 1600 N. Taking forwards as positive, what is the acceleration of the lorry, in m/s squared?',
      tier: 'challenge',
      correctAnswer: 2,
      unit: 'm/s squared',
      xpValue: 20,
      misconceptionId: 'fn2-mis-any-force-not-resultant',
      hint: 'Find the resultant force first: 4000 minus 1600. Then use a = F / m.',
    },
    {
      id: 'fn2-q17',
      type: 'numeric-entry',
      stem: 'A tennis ball has a mass of 50 g. A racket strikes the ball with a resultant force of 25 N along the line of the serve. What is the acceleration of the ball, in m/s squared? Convert the mass to kilograms before using F = m a.',
      tier: 'challenge',
      correctAnswer: 500,
      unit: 'm/s squared',
      xpValue: 20,
      misconceptionId: 'fn2-mis-grams-not-kg',
      hint: '50 g is 0.05 kg. Then use a = F / m with 25 divided by 0.05.',
    },
    {
      id: 'fn2-q18',
      type: 'multiple-choice',
      stem: 'A trolley accelerates at 4 m/s squared with a certain resultant force on it. A second load is then added, doubling the mass of the trolley, but the resultant force stays the same. What is the new acceleration?',
      tier: 'challenge',
      options: [
        '2 m/s squared.',
        '4 m/s squared (unchanged).',
        '8 m/s squared.',
        '0 m/s squared, because the heavier trolley will not move.',
      ],
      correctIndex: 0,
      xpValue: 20,
      misconceptionId: 'fn2-mis-double-force-double-a-always',
      hint: 'a = F / m. With F fixed, doubling m halves a.',
    },
    {
      id: 'fn2-q19',
      type: 'spot-misconception',
      stem: 'Ben says, "If I double the resultant force on a Tesco trolley, the acceleration must double, no matter what." Which response is correct?',
      tier: 'challenge',
      statements: [
        {
          text: 'Ben is right. Doubling the resultant force always doubles the acceleration, even if the load on the trolley changes.',
          isMisconception: true,
        },
        {
          text: 'Ben is not right. Doubling the resultant force doubles the acceleration only when the mass stays the same. If a shopper adds more shopping, the bigger mass means the new acceleration would be smaller, even with double the force.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'fn2-mis-double-force-double-a-always',
    },
    {
      id: 'fn2-q20',
      type: 'multiple-choice',
      stem: 'On a flat M25 slip road, a car of mass 1000 kg has a 2000 N forwards engine force and a 500 N backwards drag force. The driver wants the acceleration in m/s squared. Which calculation gives the right value?',
      tier: 'challenge',
      options: [
        'a = 2000 / 1000 = 2 m/s squared, ignoring drag because it is small.',
        'a = (2000 + 500) / 1000 = 2.5 m/s squared, because both forces act on the car.',
        'a = 500 / 1000 = 0.5 m/s squared, because drag is the only force that matters.',
        'a = (2000 - 500) / 1000 = 1.5 m/s squared, because the resultant force is 1500 N forwards.',
      ],
      correctIndex: 3,
      xpValue: 20,
      misconceptionId: 'fn2-mis-any-force-not-resultant',
      hint: 'The F in F = m a is the resultant force. Subtract drag from the engine force first.',
    },
    {
      id: 'fn2-q21',
      type: 'free-text',
      stem: "A pupil claims, 'Heavier objects always accelerate less than lighter ones, full stop.' Use Newton's Second Law to give a fair point in the claim and to correct what is wrong with it. Include the rule F = m a and a clear example.",
      tier: 'challenge',
      sampleAnswer:
        "A fair point is that for the same resultant force, a heavier object does accelerate less. From a = F / m, holding F fixed, a bigger m gives a smaller a. For example, a 4000 N forwards engine force on a 1000 kg car gives an acceleration of 4 m/s squared, but the same 4000 N on an 8000 kg lorry only gives 0.5 m/s squared. The wrong part is the phrase 'full stop'. If the resultant force on the heavier object is bigger in proportion, the heavier object can accelerate just as much, or even more. A loaded lorry with a 16 000 N engine force on it would have a = 16000 / 8000 = 2 m/s squared, more than the car with 4000 N. So the rule is: a heavier object accelerates less than a lighter one only when the resultant force on each is the same.",
      keywords: [
        'F = m a',
        'resultant force',
        'mass',
        'acceleration',
        'inertia',
        'same force',
      ],
      xpValue: 20,
      misconceptionId: 'fn2-mis-heavier-always-slower',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics examiner report June 2022, Paper 1F (8463), on F = m a items where candidates plug a single named force (engine force, applied push) into F instead of the resultant force on the object.
    {
      id: 'fn2-mis-any-force-not-resultant',
      description:
        'Plugging any single named force on the object into F in F = m a (such as the engine force or the applied push), instead of using the resultant force on the object.',
      triggerAnswer: 'any-force-not-resultant',
      correction:
        'The F in F = m a is the resultant force on the object. Find the resultant first by adding the forces along the line of motion with signs, then divide by the mass.',
      reExplanation:
        'A 1200 kg car has a 3000 N engine force and a 1200 N backwards drag. The resultant force is 3000 minus 1200, which is 1800 N. Using a = F / m, the acceleration is 1800 divided by 1200, which is 1.5 m/s squared. Plugging in 3000 N would give 2.5 m/s squared, the wrong answer.',
    },
    // Source: Edexcel GCSE Physics examiner report June 2022, Paper 1PH0/1F, on F = m a items where candidates substitute weight in newtons in place of mass in kilograms, treating the two numbers as interchangeable.
    {
      id: 'fn2-mis-mass-weight-confusion',
      description:
        "Plugging the weight of an object in newtons into m in F = m a, on the grounds that 'weight is the mass'.",
      triggerAnswer: 'mass-weight-confusion',
      correction:
        'Mass in F = m a goes in kilograms; weight is a force in newtons. Convert weight to mass with m = W / g (use g = 10 N/kg at KS3) before substituting.',
      reExplanation:
        "A box has a weight of 80 N. Its mass is 80 divided by 10, which is 8 kg. If a resultant force of 16 N acts on the box, the acceleration is 16 divided by 8, which is 2 m/s squared. Plugging the weight (80 N) into m in place of 8 kg would give an acceleration of 0.2 m/s squared, ten times too small.",
    },
    // Source: AQA GCSE Physics examiner report June 2023, Paper 1F, on items asking how the acceleration of a vehicle changes when the resultant force is doubled but the load (mass) has also changed; candidates state the acceleration doubles, ignoring the mass change.
    {
      id: 'fn2-mis-double-force-double-a-always',
      description:
        'Believing that doubling the resultant force on an object always doubles its acceleration, even when the mass of the object has also changed.',
      triggerAnswer: 'double-force-double-a-always',
      correction:
        'Doubling the resultant force doubles the acceleration only when the mass stays the same. If the mass also changes, work out the new acceleration from a = F / m directly with the new numbers.',
      reExplanation:
        'A 1000 kg car with a 1000 N resultant force has acceleration 1 m/s squared. Double the resultant to 2000 N with the same 1000 kg, and acceleration doubles to 2 m/s squared. But if the mass also doubles to 2000 kg, then a = 2000 / 2000 = 1 m/s squared. The acceleration is unchanged, not doubled.',
    },
    // Source: CGP KS3 Physics Workbook Common Mistake box on F = m a; learners write F = m + a, treating mass and acceleration as quantities that add rather than multiply.
    {
      id: 'fn2-mis-additive-m-and-a',
      description:
        "Treating mass and acceleration as additive in Newton's Second Law, writing F = m + a or 'more m and more a give more F' without scaling.",
      triggerAnswer: 'additive-m-and-a',
      correction:
        'In F = m a, mass and acceleration are multiplied, not added. Doubling the mass with the same acceleration doubles the force; the same answer cannot be reached by adding.',
      reExplanation:
        'For a 5 kg trolley accelerating at 4 m/s squared, the resultant force is 5 times 4, which is 20 N. Adding gives 5 plus 4, which is 9 N, a different and wrong answer. Multiplying scales the force with both quantities; adding does not.',
    },
    // Source: OCR GCSE Physics examiner report June 2022, J259/02, on items comparing the acceleration of a heavy object with a large force on it and a lighter object with a smaller force; candidates state the heavier object must always accelerate less, regardless of the resultant force on each.
    {
      id: 'fn2-mis-heavier-always-slower',
      description:
        'Believing that heavier objects always accelerate less than lighter ones, regardless of the resultant force acting on each.',
      triggerAnswer: 'heavier-always-slower',
      correction:
        'A heavier object accelerates less only when the resultant force on each is the same. With a bigger resultant in proportion, it can accelerate as much or more.',
      reExplanation:
        "A 1000 kg car with 4000 N accelerates at 4 m/s squared. An 8000 kg lorry with the same 4000 N only accelerates at 0.5 m/s squared. Same resultant, heavier mass, smaller a. But give the lorry 16 000 N and a = 16000 / 8000 = 2 m/s squared, more than a 1000 kg car with 1500 N (a = 1.5). The rule depends on the resultant on each.",
    },
    // Source: Edexcel GCSE Physics examiner report June 2019, Paper 1PH0/1F, candidates substitute a mass given in grams directly into F = m a in place of kilograms, giving an acceleration 1000 times too small.
    {
      id: 'fn2-mis-grams-not-kg',
      description:
        'Plugging a mass given in grams straight into F = m a without converting to kilograms first.',
      triggerAnswer: 'grams-not-kg',
      correction:
        'F = m a uses mass in kilograms. Divide any mass given in grams by 1000 before substituting it, or the acceleration will be 1000 times too small.',
      reExplanation:
        'A 50 g tennis ball with a 25 N resultant force on it has a mass of 0.05 kg, after converting from grams. The acceleration is 25 divided by 0.05, which is 500 m/s squared. Plugging 50 in for the mass would give 0.5 m/s squared, a thousand times too small.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const forcesNewtonSecondZoneNodes = [forcesNewtonSecond]
