import type { SkillNode } from '@/types/content'

const SPRING_LAB_SETUP_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">School force-extension experiment</text>

    <!-- Clamp stand: base + vertical rod + horizontal arm -->
    <rect x="120" y="350" width="160" height="14" fill="currentColor" />
    <line x1="200" y1="350" x2="200" y2="80" stroke-width="5" />
    <line x1="200" y1="80" x2="320" y2="80" stroke-width="5" />

    <!-- Natural length spring (left) -->
    <text x="320" y="65" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Natural length</text>
    <path d="M 320 90 L 305 105 L 335 115 L 305 125 L 335 135 L 305 145 L 335 155 L 305 165 L 320 175" />
    <line x1="290" y1="175" x2="350" y2="175" stroke-width="2" />
    <line x1="200" y1="90" x2="200" y2="175" stroke-dasharray="3 3" stroke-width="1" />
    <text x="380" y="135" font-size="12" stroke="none" fill="currentColor">L0 (no load)</text>

    <!-- Loaded spring (right) -->
    <line x1="200" y1="80" x2="540" y2="80" stroke-width="5" />
    <text x="540" y="65" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Loaded</text>
    <path d="M 540 90 L 525 105 L 555 115 L 525 125 L 555 135 L 525 145 L 555 155 L 525 165 L 555 175 L 525 185 L 555 195 L 525 205 L 555 215 L 540 225" />
    <!-- Slot weight at the bottom -->
    <rect x="520" y="225" width="40" height="40" fill="currentColor" />
    <text x="540" y="252" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="white">1 N</text>
    <!-- Extension bracket -->
    <line x1="585" y1="175" x2="585" y2="225" />
    <line x1="580" y1="175" x2="590" y2="175" />
    <line x1="580" y1="225" x2="590" y2="225" />
    <text x="635" y="205" font-size="12" font-weight="700" stroke="none" fill="currentColor">extension e</text>
    <!-- Vertical ruler hint -->
    <line x1="470" y1="90" x2="470" y2="280" stroke-width="2" />
    <line x1="465" y1="90" x2="475" y2="90" />
    <line x1="465" y1="140" x2="475" y2="140" />
    <line x1="465" y1="190" x2="475" y2="190" />
    <line x1="465" y1="240" x2="475" y2="240" />
    <text x="445" y="290" font-size="11" stroke="none" fill="currentColor">ruler in cm</text>

    <text x="400" y="385" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Extension = loaded length minus natural length. Not the total length.</text>
  </g>
`

const FORCE_EXTENSION_GRAPH_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Force against extension for a spring</text>

    <!-- Axes -->
    <line x1="120" y1="320" x2="680" y2="320" stroke-width="2" />
    <line x1="120" y1="320" x2="120" y2="60" stroke-width="2" />
    <!-- Axis labels -->
    <text x="400" y="360" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Force F (N)</text>
    <text x="70" y="190" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor" transform="rotate(-90 70 190)">Extension e (m)</text>

    <!-- Tick marks on x-axis (0..5 N) -->
    <line x1="220" y1="316" x2="220" y2="324" />
    <text x="220" y="340" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">1</text>
    <line x1="320" y1="316" x2="320" y2="324" />
    <text x="320" y="340" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">2</text>
    <line x1="420" y1="316" x2="420" y2="324" />
    <text x="420" y="340" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">3</text>
    <line x1="520" y1="316" x2="520" y2="324" />
    <text x="520" y="340" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">4</text>
    <line x1="620" y1="316" x2="620" y2="324" />
    <text x="620" y="340" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">5</text>

    <!-- Linear region: straight line through origin to (4 N, 0.08 m) -->
    <line x1="120" y1="320" x2="520" y2="160" stroke-width="3" />
    <!-- Beyond limit of proportionality: curves up faster -->
    <path d="M 520 160 Q 580 110 640 75" stroke-width="3" />

    <!-- Limit of proportionality marker -->
    <circle cx="520" cy="160" r="6" fill="currentColor" />
    <line x1="520" y1="160" x2="540" y2="120" stroke-dasharray="3 3" stroke-width="1" />
    <text x="610" y="115" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">limit of proportionality</text>

    <!-- Linear region label -->
    <text x="270" y="240" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">linear region</text>
    <text x="270" y="258" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">F = k e (Hooke's Law)</text>

    <!-- Origin label -->
    <text x="110" y="335" text-anchor="end" font-size="11" stroke="none" fill="currentColor">0</text>
  </g>
`

const EXTENSION_VS_TOTAL_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Extension is not the total length</text>

    <!-- Natural spring (left) -->
    <text x="180" y="60" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Before loading</text>
    <line x1="120" y1="80" x2="240" y2="80" stroke-width="4" />
    <path d="M 180 80 L 165 95 L 195 105 L 165 115 L 195 125 L 165 135 L 195 145 L 180 155" />
    <!-- Bracket showing natural length 10 cm -->
    <line x1="270" y1="80" x2="270" y2="155" />
    <line x1="265" y1="80" x2="275" y2="80" />
    <line x1="265" y1="155" x2="275" y2="155" />
    <text x="300" y="120" font-size="12" font-weight="700" stroke="none" fill="currentColor">L0 = 10 cm</text>
    <text x="180" y="180" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">natural length, no load</text>

    <!-- Loaded spring (right) -->
    <text x="540" y="60" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">After loading 2 N</text>
    <line x1="480" y1="80" x2="600" y2="80" stroke-width="4" />
    <path d="M 540 80 L 525 95 L 555 105 L 525 115 L 555 125 L 525 135 L 555 145 L 525 155 L 555 165 L 525 175 L 555 185 L 540 195" />
    <rect x="525" y="195" width="30" height="25" fill="currentColor" />
    <text x="540" y="213" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="white">2 N</text>
    <!-- Bracket showing loaded length 14 cm -->
    <line x1="630" y1="80" x2="630" y2="195" />
    <line x1="625" y1="80" x2="635" y2="80" />
    <line x1="625" y1="195" x2="635" y2="195" />
    <text x="660" y="140" font-size="12" font-weight="700" stroke="none" fill="currentColor">L = 14 cm</text>
    <text x="540" y="245" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">loaded length, 2 N hanging</text>

    <!-- Calculation strip -->
    <text x="400" y="290" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Extension e = L - L0 = 14 - 10 = 4 cm = 0.04 m</text>
    <text x="400" y="312" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">A pupil who writes "e = 14 cm" is using the total length, not the extension.</text>
    <text x="400" y="332" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Always take the increase in length, not the new length itself.</text>
  </g>
`

export const forcesHookesLaw: SkillNode = {
  id: 'physics-forces-hookes-law',
  title: "Hooke's Law and Springs",
  description:
    "Hang a spring, add weights with known forces in newtons, and measure how far it stretches. The increase in length is the extension, not the new total length. Plot force on the x-axis and extension on the y-axis: a straight line through the origin while the spring is elastic. That straight line is Hooke's Law, F = k e, where k is the spring constant in newtons per metre. Beyond the limit of proportionality the line curves and the spring no longer obeys Hooke's Law.",
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-forces',
  zoneName: 'Forces',
  tier: 'confident',
  prerequisites: ['physics-forces-types'],
  curriculum: {
    ks3Objective:
      'Forces measured in newtons, measurements of stretch or compression as force is changed; force-extension linear relation; Hooke\'s Law as a special case.',
    awardingBodies: {
      aqa: '4.5.3 Forces and elasticity; extension of an elastic object directly proportional to the force applied, F = k e (GCSE Physics 8463)',
      edexcel: 'Topic 15 Forces and matter, 15.1-15.4 Hooke\'s Law and elastic objects; force = spring constant x extension (GCSE Physics 1PH0)',
      ocr: 'P3.2 Forces and matter; linear and non-linear relationships between force and extension, F = k x (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'fhl-scene-lab-setup',
      title: 'Force-Extension Experiment on a Clamp Stand',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to follow the lab setup: a spring on a clamp stand, a slot mass, a ruler, and the extension you measure.',
      data: {
        viewBox: '0 0 800 400',
        svg: SPRING_LAB_SETUP_SVG,
        hotspots: [
          {
            id: 'fhl-lab-natural',
            x: 40,
            y: 35,
            label: 'Natural length L0',
            description:
              'The length of the spring with no load on it. Measure this first with a ruler so you can subtract it later.',
          },
          {
            id: 'fhl-lab-loaded',
            x: 68,
            y: 60,
            label: 'Loaded length L',
            description:
              'The length of the same spring after a known weight is hung on it. The spring has stretched, so L is bigger than L0.',
          },
          {
            id: 'fhl-lab-mass',
            x: 67,
            y: 78,
            label: 'Slot mass: 1 N of weight',
            description:
              'A 100 g slot mass has a weight of about 1 N near the Earth. Add masses one at a time so each step adds a known force.',
          },
          {
            id: 'fhl-lab-extension',
            x: 80,
            y: 65,
            label: 'Extension e = L - L0',
            description:
              'The extension is the increase in length, not the new total length. Subtract the natural length from the loaded length, in metres.',
          },
          {
            id: 'fhl-lab-ruler',
            x: 59,
            y: 73,
            label: 'Ruler reads centimetres',
            description:
              'Record lengths in centimetres, then convert to metres before using F = k e. A reading of 4 cm is 0.04 m.',
          },
        ],
      },
    },
    {
      id: 'fhl-scene-graph',
      title: 'Force-Extension Graph: Linear Region and Beyond',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read the parts of a force-extension graph: the linear region, the gradient, and the limit of proportionality.',
      data: {
        viewBox: '0 0 800 400',
        svg: FORCE_EXTENSION_GRAPH_SVG,
        hotspots: [
          {
            id: 'fhl-gr-axes',
            x: 50,
            y: 90,
            label: 'Force on x, extension on y',
            description:
              'Force in newtons goes along the x-axis. Extension in metres goes up the y-axis. Read the axis labels first, every time.',
          },
          {
            id: 'fhl-gr-linear',
            x: 34,
            y: 60,
            label: 'Linear region',
            description:
              'A straight line through the origin shows extension is directly proportional to force. This is the region where F = k e holds.',
          },
          {
            id: 'fhl-gr-origin',
            x: 16,
            y: 84,
            label: 'Line passes through the origin',
            description:
              'No force means no extension, so the line must start at zero, zero. A line that does not pass through the origin is not a Hooke\'s Law spring.',
          },
          {
            id: 'fhl-gr-limit',
            x: 65,
            y: 40,
            label: 'Limit of proportionality',
            description:
              'Past this point the spring no longer obeys Hooke\'s Law. The line curves, so doubling the force no longer doubles the extension.',
          },
          {
            id: 'fhl-gr-curve',
            x: 80,
            y: 28,
            label: 'Beyond the limit',
            description:
              'The spring stretches more per newton than before. The relation is no longer linear, so F = k e cannot be used here.',
          },
        ],
      },
    },
    {
      id: 'fhl-scene-extension-vs-total',
      title: 'Extension Is Not the Total Length',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to spot the common confusion: extension is the increase in length, not the new total length.',
      data: {
        viewBox: '0 0 800 400',
        svg: EXTENSION_VS_TOTAL_SVG,
        hotspots: [
          {
            id: 'fhl-ev-natural',
            x: 23,
            y: 30,
            label: 'Natural length L0 = 10 cm',
            description:
              'Measure the spring with nothing on it. Write down L0 = 10 cm. You will need this number to find the extension later.',
          },
          {
            id: 'fhl-ev-loaded',
            x: 68,
            y: 35,
            label: 'Loaded length L = 14 cm',
            description:
              'Hang a 2 N weight on the spring and measure again. The spring is now 14 cm long from top to bottom.',
          },
          {
            id: 'fhl-ev-extension',
            x: 50,
            y: 72,
            label: 'Extension e = 4 cm = 0.04 m',
            description:
              'Subtract the natural length from the loaded length: 14 minus 10 is 4 cm. Convert to metres before using F = k e.',
          },
          {
            id: 'fhl-ev-trap',
            x: 50,
            y: 83,
            label: 'Common mistake',
            description:
              'Writing 14 cm as the extension uses the total length, not the increase. The number that goes into F = k e is the increase only.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'fhl-worked-1',
      title: 'Finding the spring constant from one measurement',
      steps: [
        {
          explanation:
            'Set the scene. A pupil hangs a 2 N slot mass on a spring on a clamp stand. The natural length L0 is 10 cm. The loaded length L is 14 cm.',
        },
        {
          explanation:
            'Find the extension, not the total length. Take the loaded length and subtract the natural length to get the increase in length.',
          maths: 'e = L - L0 = 14 - 10 = 4 cm',
        },
        {
          explanation:
            'Convert the extension to metres. The formula F = k e takes extension in metres, so 4 cm becomes 0.04 m.',
          maths: 'e = 4 cm = 0.04 m',
        },
        {
          explanation:
            'Write Hooke\'s Law and rearrange for the spring constant. The force is 2 N and the extension is 0.04 m.',
          maths: 'F = k e, so k = F / e',
        },
        {
          explanation:
            'Put the numbers in and work out k. Divide the force in newtons by the extension in metres.',
          maths: 'k = 2 / 0.04 = 50 N/m',
        },
        {
          explanation:
            'State the answer with units. The spring constant is 50 newtons per metre. This means every 1 N of force adds 0.02 m of extension while the spring obeys Hooke\'s Law.',
          maths: 'k = 50 N/m',
        },
      ],
    },
    {
      id: 'fhl-worked-2',
      title: 'Predicting the extension from a known spring constant',
      steps: [
        {
          explanation:
            'Set the scene. A garage spring scale has a spring constant of k = 25 N/m. A bag of garden soil weighs 5 N. Find the extension while the spring obeys Hooke\'s Law.',
        },
        {
          explanation:
            'Write Hooke\'s Law. The force is what stretches the spring; the extension is what the spring does in reply.',
          maths: 'F = k e',
        },
        {
          explanation:
            'Rearrange for the extension. Divide both sides by k to make e the subject.',
          maths: 'e = F / k',
        },
        {
          explanation:
            'Put the numbers in. The force is 5 N and the spring constant is 25 N/m. The answer comes out in metres because k is in N/m.',
          maths: 'e = 5 / 25 = 0.2 m',
        },
        {
          explanation:
            'Convert the answer to centimetres if a ruler reading is wanted. There are 100 cm in 1 m, so 0.2 m is 20 cm.',
          maths: '0.2 m = 20 cm',
        },
        {
          explanation:
            'State the answer in words. The spring stretches by 20 cm under the 5 N bag, as long as the load is below the limit of proportionality.',
          maths: 'e = 0.2 m = 20 cm',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'fhl-q1',
      type: 'multiple-choice',
      stem: "Which statement is Hooke's Law for a spring within its linear region?",
      tier: 'core',
      options: [
        'The extension is the same as the natural length of the spring.',
        'The extension is the loaded length of the spring.',
        'The extension is directly proportional to the force applied.',
        'The extension stays the same whatever the force.',
      ],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Direct proportion gives a straight line through the origin.',
    },
    {
      id: 'fhl-q2',
      type: 'multiple-choice',
      stem: 'On a school force-extension experiment, what does the word extension mean?',
      tier: 'core',
      options: [
        'The new total length of the spring with the load on it.',
        'The increase in length, found by loaded length minus natural length.',
        'The natural length of the spring with no load on it.',
        'The mass of the slot weight hanging on the spring.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'fhl-mis-extension-is-total-length',
      hint: 'The clue is in the word: ex-tension, an increase in length.',
    },
    {
      id: 'fhl-q3',
      type: 'multiple-choice',
      stem: 'A pupil plots force on the x-axis and extension on the y-axis for a spring that obeys Hooke\'s Law. What shape is the graph?',
      tier: 'core',
      options: [
        'A straight line that starts at the origin and goes up to the right.',
        'A straight line that starts above the origin on the y-axis.',
        'A curve that gets steeper at first and then flattens out.',
        'A flat horizontal line at the natural length value.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'fhl-mis-graph-not-through-origin',
      hint: 'No force means no extension. Where must the line start?',
    },
    {
      id: 'fhl-q4',
      type: 'numeric-entry',
      stem: 'A spring on a clamp stand has a natural length of 10 cm. With a 2 N load it stretches to 14 cm. What is the extension, in centimetres?',
      tier: 'core',
      correctAnswer: 4,
      unit: 'cm',
      xpValue: 10,
      misconceptionId: 'fhl-mis-extension-is-total-length',
      hint: 'Take the loaded length and subtract the natural length.',
    },
    {
      id: 'fhl-q5',
      type: 'multiple-choice',
      stem: 'What are the units of the spring constant k?',
      tier: 'core',
      options: [
        'Newtons per metre (N/m).',
        'Newtons (N) on their own.',
        'Metres (m) on their own.',
        'Kilograms (kg).',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'fhl-mis-k-units',
      hint: 'F = k e, so k has the units of force divided by length.',
    },
    {
      id: 'fhl-q6',
      type: 'numeric-entry',
      stem: 'A school newton meter spring extends by 0.10 m when a 4 N force pulls on it. What is the spring constant, in newtons per metre?',
      tier: 'core',
      correctAnswer: 40,
      unit: 'N/m',
      xpValue: 10,
      hint: 'k = F / e. Divide 4 by 0.10.',
    },
    {
      id: 'fhl-q7',
      type: 'numeric-entry',
      stem: 'A spring has a spring constant of 50 N/m. Within Hooke\'s Law, what force, in newtons, is needed to extend it by 0.08 m?',
      tier: 'core',
      correctAnswer: 4,
      unit: 'N',
      xpValue: 10,
      hint: 'F = k e. Multiply 50 by 0.08.',
    },
    {
      id: 'fhl-q8',
      type: 'multiple-choice',
      stem: "Aisha says, \"The spring constant is just another name for the force on the spring.\" What is wrong with what Aisha said?",
      tier: 'confident',
      options: [
        'Nothing is wrong. The spring constant and the force are the same thing.',
        'The spring constant is a property of the spring itself, with units of N/m. The force is a separate quantity in newtons that you apply to the spring.',
        'The spring constant is the same as the extension in metres.',
        'The spring constant is the weight of the spring in newtons.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'fhl-mis-k-is-force',
      hint: 'Look at the units of each quantity. Different units, different things.',
    },
    {
      id: 'fhl-q9',
      type: 'multiple-choice',
      stem: 'A spring stretches by 4 cm under a 2 N load. A pupil writes F = k e with F = 2 and e = 4, and gets k = 0.5. What has the pupil done wrong?',
      tier: 'confident',
      options: [
        'Nothing is wrong: k = 0.5 N/m is the right answer.',
        'The pupil should have multiplied 2 by 4 instead of dividing.',
        'The pupil used 4 N instead of 2 N for the force.',
        'The pupil left the extension in centimetres. Convert 4 cm to 0.04 m before dividing, giving k = 2 / 0.04 = 50 N/m.',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'fhl-mis-forget-cm-to-m',
      hint: 'The formula F = k e takes extension in metres, not centimetres.',
    },
    {
      id: 'fhl-q10',
      type: 'numeric-entry',
      stem: 'A garage spring scale has a spring constant of 20 N/m. A box of tools pulls down on the spring with 6 N. Within Hooke\'s Law, what is the extension, in metres?',
      tier: 'core',
      correctAnswer: 0.3,
      tolerance: 0.001,
      unit: 'm',
      xpValue: 10,
      hint: 'Rearrange F = k e to e = F / k. Divide 6 by 20.',
    },
    {
      id: 'fhl-q11',
      type: 'multiple-choice',
      stem: 'A pupil looks at a force-extension graph and reads extension off the x-axis. The axis labels show Force F (N) along x and Extension e (m) up y. What should the pupil do?',
      tier: 'confident',
      options: [
        'Carry on reading: extension is always on the x-axis.',
        'Swap to the y-axis. Force F is on x, so extension must be read up the y-axis on this graph.',
        'Multiply the two axis values together for the extension.',
        'Use the natural length of the spring instead.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'fhl-mis-wrong-axis',
      hint: 'Always check axis labels first. The label tells you what is plotted where.',
    },
    {
      id: 'fhl-q12',
      type: 'multiple-choice',
      stem: "A spring is stretched well past the limit of proportionality. A pupil says, \"Doubling the force will still double the extension, because that is what F = k e tells me.\" What is the best response?",
      tier: 'confident',
      options: [
        'The pupil is right. F = k e always works for any spring.',
        'The pupil is right, as long as the spring stays the same shape.',
        'The pupil is wrong. F = k e only holds while the spring is in its linear region. Past the limit of proportionality the line curves, so doubling the force does not double the extension.',
        'The pupil is wrong because the spring constant gets bigger as the force gets bigger.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'fhl-mis-doubling-beyond-limit',
      hint: 'Look at the shape of the graph past the limit of proportionality.',
    },
    {
      id: 'fhl-q13',
      type: 'numeric-entry',
      stem: 'A school spring has a natural length of 12 cm. With a 5 N load it has a loaded length of 17 cm. What is the spring constant, in newtons per metre?',
      tier: 'confident',
      correctAnswer: 100,
      unit: 'N/m',
      xpValue: 15,
      misconceptionId: 'fhl-mis-include-natural-length',
      hint: 'First find e = 17 - 12 = 5 cm = 0.05 m. Then k = 5 / 0.05.',
    },
    {
      id: 'fhl-q14',
      type: 'spot-misconception',
      stem: 'Ben measures a spring on a clamp stand. The natural length is 8 cm. With a 1 N load the loaded length is 11 cm. He writes, "The extension is 11 cm, so e = 0.11 m."',
      tier: 'confident',
      statements: [
        {
          text: 'Ben is right. The extension is the new length of the spring with the load on it, so 11 cm is correct.',
          isMisconception: true,
        },
        {
          text: 'Ben is not right. The extension is the increase in length, not the new total length. e = 11 - 8 = 3 cm = 0.03 m.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fhl-mis-extension-is-total-length',
    },
    {
      id: 'fhl-q15',
      type: 'spot-misconception',
      stem: 'Priya says, "If a spring constant is 25 N/m, then 25 is the force that has to act on the spring before it stretches."',
      tier: 'confident',
      statements: [
        {
          text: 'Priya is right. The spring constant is the minimum force needed to stretch the spring.',
          isMisconception: true,
        },
        {
          text: 'Priya is not right. The spring constant is a property of the spring, in newtons per metre. It tells you how stiff the spring is: a 25 N/m spring stretches by 0.04 m for each 1 N of force, not 25 N before anything happens.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fhl-mis-k-is-force',
    },
    {
      id: 'fhl-q16',
      type: 'drag-order',
      stem: 'Place the four steps in the right order for finding the spring constant from a single measurement in a school experiment.',
      tier: 'confident',
      items: [
        'Convert the extension to metres, so 4 cm becomes 0.04 m.',
        'Measure the natural length L0 of the spring with no load on it.',
        'Divide the force in newtons by the extension in metres to get k.',
        'Hang a known weight on the spring and measure the loaded length L. Find the extension e = L - L0.',
      ],
      correctOrder: [1, 3, 0, 2],
      xpValue: 15,
      hint: 'Measure with no load, then with the load, then convert units, then divide.',
    },
    {
      id: 'fhl-q17',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is finding the spring constant for a spring with natural length 10 cm. With a 3 N load, the loaded length is 16 cm.',
      tier: 'challenge',
      steps: [
        'Write down what is known: F = 3 N, L0 = 10 cm, L = 16 cm.',
        'Find the extension in centimetres: e = L - L0 = 16 - 10 = 6 cm.',
        null,
        'Write Hooke\'s Law and rearrange for k: F = k e, so k = F / e.',
        'Put the numbers in: k = 3 / 0.06 = 50 N/m.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Convert the extension to metres before using F = k e: e = 6 cm = 0.06 m.',
      xpValue: 20,
    },
    {
      id: 'fhl-q18',
      type: 'numeric-entry',
      stem: 'A school physics spring has a spring constant of 40 N/m. A pupil hangs a 1 N slot mass on it, then adds 3 N of slot masses one at a time. Within Hooke\'s Law, what is the total extension, in metres, with all the masses on the spring?',
      tier: 'challenge',
      correctAnswer: 0.1,
      tolerance: 0.001,
      unit: 'm',
      xpValue: 20,
      hint: 'Total force on the spring is 1 + 3 = 4 N. Then e = F / k.',
    },
    {
      id: 'fhl-q19',
      type: 'multiple-choice',
      stem: 'A pupil in a Tunbridge Wells school records the readings in a force-extension table. At 1 N the extension is 0.02 m; at 2 N it is 0.04 m; at 3 N it is 0.06 m; at 4 N it is 0.10 m. Which point first lies beyond the limit of proportionality?',
      tier: 'challenge',
      options: [
        'The 1 N point, because every spring starts non-linear.',
        '(2 N, 0.04 m), because the extension is more than 2 cm.',
        '(4 N, 0.10 m), because each previous 1 N added 0.02 m of extension but the last 1 N added 0.04 m, so the linear pattern has broken.',
        '(3 N, 0.06 m), because 0.06 m is more than 5 cm.',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'fhl-mis-doubling-beyond-limit',
      hint: 'Find where the equal-step pattern in the extensions breaks.',
    },
    {
      id: 'fhl-q20',
      type: 'numeric-entry',
      stem: 'A kitchen scale uses a spring with a spring constant of 200 N/m. A 100 g bag of flour has a weight of 1 N near the Earth. Within Hooke\'s Law, what is the extension of the spring, in centimetres, with the bag of flour on it?',
      tier: 'challenge',
      correctAnswer: 0.5,
      tolerance: 0.01,
      unit: 'cm',
      xpValue: 20,
      hint: 'First e = F / k in metres, then convert to cm by multiplying by 100.',
    },
    {
      id: 'fhl-q21',
      type: 'multiple-choice',
      stem: 'A Sevenoaks pupil tests two springs A and B in the same lab. Spring A stretches by 4 cm under 2 N. Spring B stretches by 4 cm under 8 N. Both readings are well below the limit of proportionality. Which sentence is correct?',
      tier: 'challenge',
      options: [
        'Spring A is stiffer because it stretched less for the load.',
        'Spring B is stiffer because it takes 8 N to give the same 4 cm extension, so its spring constant is bigger (200 N/m, against 50 N/m for A).',
        'The two springs are the same stiffness because they stretched the same amount.',
        'Spring A is stiffer because 2 is smaller than 8.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'fhl-mis-k-is-force',
      hint: 'Work out k = F / e for each spring with extension in metres, then compare.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics examiner report June 2022, Paper 1F (8463), Q3 on Hooke's Law springs; many candidates used the new total length as the extension rather than the increase in length.
    {
      id: 'fhl-mis-extension-is-total-length',
      description:
        'Believing the extension of a spring is the loaded length itself, rather than the increase in length from the natural length.',
      triggerAnswer: 'extension-is-total-length',
      correction:
        'In fact, the extension is the increase in length: loaded length minus natural length. The total length of the spring is a different number.',
      reExplanation:
        'A spring with natural length 10 cm that reaches 14 cm under a 2 N load has extension 14 minus 10, which is 4 cm. Convert to 0.04 m before using F = k e. Using 14 cm as the extension would give k = 2 divided by 0.14, about 14 N/m, far too small. Always subtract before substituting.',
    },
    // Source: Edexcel GCSE Physics examiner report June 2022, Paper 1PH0/1F, item on F = k e; candidates conflated the spring constant k with the applied force F.
    {
      id: 'fhl-mis-k-is-force',
      description:
        'Believing the spring constant k is just another name for the force on the spring, or for the load the spring can hold.',
      triggerAnswer: 'k-is-force',
      correction:
        'In fact, the spring constant is a property of the spring, with units of N/m. The force is a separate quantity in newtons that acts on the spring.',
      reExplanation:
        'A spring with k = 25 N/m stretches by 0.04 m for each 1 N. So 25 N/m is the stiffness of the spring, not a force. A second spring needing 8 N to give the same extension is stiffer: its k is bigger. Compare two springs by their spring constants, not by the force used in one test.',
    },
    // Source: OCR GCSE Physics examiner report June 2023, J259/01, item on plotting force-extension data; candidates mixed up which quantity went on which axis when reading off values.
    {
      id: 'fhl-mis-wrong-axis',
      description:
        'Reading the wrong quantity off the wrong axis of a force-extension graph, so the answer is the force when the extension was wanted, or the other way round.',
      triggerAnswer: 'wrong-axis',
      correction:
        'Always check the axis labels first. Whichever axis carries the label you want, read that one. Do not assume an axis order from another graph.',
      reExplanation:
        'On a graph with Force F (N) on the x-axis and Extension e (m) on the y-axis, the extension is read up the y-axis. A pupil who reads e off the x-axis would get a number in newtons by mistake. The axis label, not the position, tells you what is plotted there.',
    },
    // Source: AQA GCSE Physics examiner report June 2023, Paper 1F (8463), Q on the limit of proportionality; candidates kept applying F = k e past the linear region and assumed direct proportion still held.
    {
      id: 'fhl-mis-doubling-beyond-limit',
      description:
        'Assuming doubling the force on a spring always doubles the extension, even beyond the limit of proportionality where the relation is no longer linear.',
      triggerAnswer: 'doubling-beyond-limit',
      correction:
        'In fact, F = k e only holds in the linear region. Past the limit of proportionality the line curves, so doubling the force gives a bigger than double extension.',
      reExplanation:
        'A spring extends 0.02 m per 1 N up to 3 N, so 1, 2, and 3 N give 0.02, 0.04, and 0.06 m. If 4 N gives 0.10 m, the equal-step pattern has broken: the last 1 N added 0.04 m, not 0.02 m. The limit of proportionality lies between 3 N and 4 N. F = k e cannot be used past that point.',
    },
    // Source: CGP KS3 Physics Workbook (Years 7-9), Forces chapter, Common mistake callout on units in Hooke's Law; learners forget to convert centimetres to metres before substituting into F = k e.
    {
      id: 'fhl-mis-forget-cm-to-m',
      description:
        'Substituting the extension into F = k e in centimetres rather than metres, giving a spring constant that is 100 times too small or too big.',
      triggerAnswer: 'forget-cm-to-m',
      correction:
        'Convert the extension to metres before using F = k e. Divide a centimetre reading by 100, so 4 cm becomes 0.04 m.',
      reExplanation:
        'A 2 N load stretches a spring by 4 cm. Using 4 in the formula gives k = 2 divided by 4, or 0.5. Far too small for a school spring. Converting 4 cm to 0.04 m first gives k = 2 divided by 0.04, which is 50 N/m. The units of k are N/m, so the extension must be in metres for the answer to make sense.',
    },
    // Source: Edexcel GCSE Physics examiner report June 2023, Paper 1PH0/1F, item on the spring constant; candidates wrote the answer in N rather than N/m or gave the units as cm.
    {
      id: 'fhl-mis-k-units',
      description:
        'Writing the spring constant in newtons or metres alone, rather than newtons per metre, after a calculation.',
      triggerAnswer: 'k-units',
      correction:
        'In fact, the units of the spring constant are newtons per metre, written N/m. Force divided by length gives force per length.',
      reExplanation:
        'In F = k e, F is in newtons and e is in metres, so k is in newtons per metre. A spring with k = 50 N/m stretches 0.02 m per 1 N. Writing k = 50 N misses the per-metre part; writing k = 50 m has the wrong quantity altogether. Always finish a spring constant answer with N/m.',
    },
    // Source: OCR GCSE Physics examiner report June 2022, J259/02, item on plotting force-extension data; candidates drew the line away from the origin, missing the zero-force zero-extension intercept.
    {
      id: 'fhl-mis-graph-not-through-origin',
      description:
        'Drawing a force-extension straight line that does not pass through the origin, so the spring appears to be extended even with no force on it.',
      triggerAnswer: 'graph-not-through-origin',
      correction:
        'A Hooke\'s Law spring has zero extension when there is no force on it. The straight line must pass through the origin (0, 0).',
      reExplanation:
        'No load on the spring means no stretch, so the extension is zero. The first point on the graph is at (0 N, 0 m). A line that cuts the y-axis above zero would say the spring is stretched while sat on the bench with nothing on it, which is wrong. The line of best fit starts at the origin and rises with a steady gradient.',
    },
    // Source: CGP KS3 Physics Study Guide (Years 7-9), Forces and Springs section, Common mistake box on Hooke's Law experiments; learners count the natural length itself as the extension at the first reading.
    {
      id: 'fhl-mis-include-natural-length',
      description:
        'Including the natural length of the spring as part of the extension at the first non-zero load, instead of subtracting it.',
      triggerAnswer: 'include-natural-length',
      correction:
        'The natural length is the start, not part of the extension. Take it off every loaded length to find the increase the load has produced.',
      reExplanation:
        'A spring with natural length 8 cm and loaded length 11 cm has extension 11 minus 8, which is 3 cm. Adding 8 to 3 to get 11 cm uses the total length, not the increase. The extension is always the change from the no-load reading, never the loaded reading itself.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const forcesHookesLawZoneNodes = [forcesHookesLaw]
