import type { SkillNode } from '@/types/content'

const CYCLIST_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">A Yorkshire cyclist gliding along a flat lane</text>

    <!-- Ground line -->
    <line x1="40" y1="300" x2="760" y2="300" />

    <!-- Wheels -->
    <circle cx="260" cy="280" r="28" />
    <circle cx="380" cy="280" r="28" />

    <!-- Frame -->
    <line x1="260" y1="280" x2="320" y2="200" />
    <line x1="380" y1="280" x2="320" y2="200" />
    <line x1="320" y1="200" x2="350" y2="160" />
    <line x1="380" y1="280" x2="360" y2="190" />

    <!-- Rider body -->
    <circle cx="345" cy="140" r="14" fill="currentColor" />
    <line x1="345" y1="155" x2="330" y2="200" />
    <line x1="330" y1="200" x2="370" y2="170" />

    <!-- Velocity arrow -->
    <line x1="430" y1="220" x2="600" y2="220" />
    <polygon points="592,212 610,220 592,228" fill="currentColor" stroke="none" />
    <text x="515" y="208" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">v = 6 m/s</text>

    <!-- Mass label -->
    <line x1="250" y1="120" x2="320" y2="150" />
    <text x="180" y="115" font-size="14" font-weight="700" stroke="none" fill="currentColor">mass m = 70 kg</text>
    <text x="180" y="135" font-size="12" stroke="none" fill="currentColor">(rider plus bike)</text>

    <!-- KE label -->
    <text x="400" y="360" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">KE = 1/2 x m x v squared</text>
    <text x="400" y="380" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">KE = 1/2 x 70 x 6 x 6 = 1260 J</text>
  </g>
`

const TWO_CARS_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Two equal cars, two speeds: KE quadruples when v doubles</text>

    <!-- Left panel: slow car -->
    <rect x="60" y="80" width="320" height="240" />
    <text x="220" y="115" text-anchor="middle" font-size="15" font-weight="700" stroke="none" fill="currentColor">Car A on the A30 in Cornwall</text>
    <line x1="100" y1="200" x2="340" y2="200" />
    <circle cx="150" cy="220" r="16" />
    <circle cx="290" cy="220" r="16" />
    <rect x="130" y="170" width="180" height="30" />
    <line x1="220" y1="240" x2="320" y2="240" />
    <polygon points="312,232 332,240 312,248" fill="currentColor" stroke="none" />
    <text x="220" y="270" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">m = 1000 kg, v = 10 m/s</text>
    <text x="220" y="295" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">KE = 1/2 x 1000 x 100 = 50 000 J</text>

    <!-- Right panel: higher-speed car -->
    <rect x="420" y="80" width="320" height="240" />
    <text x="580" y="115" text-anchor="middle" font-size="15" font-weight="700" stroke="none" fill="currentColor">Car B on the same road</text>
    <line x1="460" y1="200" x2="700" y2="200" />
    <circle cx="510" cy="220" r="16" />
    <circle cx="650" cy="220" r="16" />
    <rect x="490" y="170" width="180" height="30" />
    <line x1="580" y1="240" x2="730" y2="240" />
    <polygon points="722,232 742,240 722,248" fill="currentColor" stroke="none" />
    <text x="580" y="270" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">m = 1000 kg, v = 20 m/s</text>
    <text x="580" y="295" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">KE = 1/2 x 1000 x 400 = 200 000 J</text>

    <text x="400" y="370" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Double the speed, KE x 4. The mass is unchanged; the v squared term does all the work.</text>
  </g>
`

const KE_VS_V_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">KE against v for a 1 kg ball: a curve, not a line</text>

    <!-- Axes -->
    <line x1="120" y1="320" x2="120" y2="80" />
    <line x1="120" y1="320" x2="680" y2="320" />
    <polygon points="115,90 120,75 125,90" fill="currentColor" stroke="none" />
    <polygon points="675,315 690,320 675,325" fill="currentColor" stroke="none" />
    <text x="80" y="200" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">KE</text>
    <text x="80" y="220" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">(J)</text>
    <text x="690" y="345" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">v (m/s)</text>

    <!-- Tick marks on x -->
    <line x1="240" y1="320" x2="240" y2="325" />
    <text x="240" y="340" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">2</text>
    <line x1="360" y1="320" x2="360" y2="325" />
    <text x="360" y="340" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">4</text>
    <line x1="480" y1="320" x2="480" y2="325" />
    <text x="480" y="340" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">6</text>
    <line x1="600" y1="320" x2="600" y2="325" />
    <text x="600" y="340" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">8</text>

    <!-- Tick marks on y -->
    <line x1="120" y1="312" x2="115" y2="312" />
    <text x="105" y="316" text-anchor="end" font-size="11" stroke="none" fill="currentColor">2</text>
    <line x1="120" y1="290" x2="115" y2="290" />
    <text x="105" y="294" text-anchor="end" font-size="11" stroke="none" fill="currentColor">8</text>
    <line x1="120" y1="240" x2="115" y2="240" />
    <text x="105" y="244" text-anchor="end" font-size="11" stroke="none" fill="currentColor">18</text>
    <line x1="120" y1="160" x2="115" y2="160" />
    <text x="105" y="164" text-anchor="end" font-size="11" stroke="none" fill="currentColor">32</text>

    <!-- KE = 0.5 v squared curve sampled -->
    <path d="M 120 320 Q 300 318 360 290 T 600 160" />
    <circle cx="240" cy="312" r="5" fill="currentColor" />
    <circle cx="360" cy="290" r="5" fill="currentColor" />
    <circle cx="480" cy="240" r="5" fill="currentColor" />
    <circle cx="600" cy="160" r="5" fill="currentColor" />

    <!-- Annotation -->
    <text x="430" y="120" font-size="14" font-weight="700" stroke="none" fill="currentColor">KE grows as v squared</text>
    <text x="430" y="140" font-size="13" stroke="none" fill="currentColor">v doubles 4 to 8: KE goes 8 to 32, x 4.</text>
  </g>
`

export const energyKinetic: SkillNode = {
  id: 'physics-energy-kinetic',
  title: 'Kinetic Energy',
  description:
    'Kinetic energy is the energy a moving object has because it is moving. The kinetic energy store fills as an object speeds up and empties as it slows down. The size of the store depends on the mass and the speed, with the rule KE = 1/2 x m x v squared, in joules when m is in kg and v is in m/s. Double the mass and KE doubles. Double the speed and KE quadruples, because the v squared term sets the pace. Use the rule to compare a Yorkshire cyclist, a Newcastle bus and a Manchester tennis ball, and to spot why even small changes in speed make a big change in stored energy.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-energy-stores-transfers',
  zoneName: 'Energy Stores and Transfers',
  tier: 'confident',
  prerequisites: ['physics-energy-stores'],
  curriculum: {
    ks3Objective:
      'Energy stored in moving objects; qualitative dependence on mass and speed; introduction to KE = 1/2 m v squared with simple substitution.',
    awardingBodies: {
      aqa: '4.1.1.2 Changes in energy; kinetic energy E_k = 1/2 m v squared (GCSE Physics 8463)',
      edexcel:
        'Topic 4 Energy, 4.11 Kinetic energy KE = 1/2 x mass x speed squared (GCSE Physics 1PH0)',
      ocr: 'P1.1 Kinetic energy store and its calculation (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'pek-scene-cyclist',
      title: 'A Yorkshire Cyclist',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read off the mass, the velocity and the kinetic energy of a cyclist gliding along a flat Yorkshire lane.',
      data: {
        viewBox: '0 0 800 400',
        svg: CYCLIST_SVG,
        hotspots: [
          {
            id: 'pek-cyc-mass',
            x: 25,
            y: 30,
            label: 'Mass: m = 70 kg',
            description:
              'The mass is the rider plus the bike together, because both are moving. Here m = 70 kg. Mass is in kilograms, not grams, so the kinetic energy will come out in joules.',
          },
          {
            id: 'pek-cyc-velocity',
            x: 64,
            y: 55,
            label: 'Velocity: v = 6 m/s',
            description:
              'The cyclist is moving steadily along the lane at v = 6 m/s. Speed must be in metres per second for the formula to give kinetic energy in joules.',
          },
          {
            id: 'pek-cyc-formula',
            x: 50,
            y: 88,
            label: 'The rule: KE = 1/2 x m x v squared',
            description:
              'Kinetic energy depends on mass and the square of the velocity. We multiply m by v squared, then halve. The 1/2 is part of the rule; do not forget it.',
          },
          {
            id: 'pek-cyc-result',
            x: 50,
            y: 96,
            label: 'Result: KE = 1260 J',
            description:
              'Substitute the numbers: KE = 1/2 x 70 x 6 x 6 = 1/2 x 70 x 36 = 1260 J. That is the size of the kinetic energy store for this rider at this speed.',
          },
        ],
      },
    },
    {
      id: 'pek-scene-two-cars',
      title: 'Two Cars, Same Mass, Different Speeds',
      type: 'labelled-diagram',
      instructions:
        'Click each panel to compare the kinetic energy of two cars with the same mass but different speeds along the A30 in Cornwall.',
      data: {
        viewBox: '0 0 800 400',
        svg: TWO_CARS_SVG,
        hotspots: [
          {
            id: 'pek-cars-slow',
            x: 28,
            y: 55,
            label: 'Car A: 10 m/s gives 50 000 J',
            description:
              'Car A has mass 1000 kg and is moving at v = 10 m/s. KE = 1/2 x 1000 x 10 x 10 = 1/2 x 1000 x 100 = 50 000 J. That is the kinetic energy store of Car A.',
          },
          {
            id: 'pek-cars-highspeed',
            x: 72,
            y: 55,
            label: 'Car B: 20 m/s gives 200 000 J',
            description:
              'Car B has the same mass of 1000 kg but is moving at v = 20 m/s. KE = 1/2 x 1000 x 20 x 20 = 1/2 x 1000 x 400 = 200 000 J. Four times the store of Car A.',
          },
          {
            id: 'pek-cars-ratio',
            x: 50,
            y: 78,
            label: 'Speed doubles, KE quadruples',
            description:
              '20 m/s is twice 10 m/s. KE depends on v squared, and 2 squared is 4. So Car B holds four times as much kinetic energy as Car A, even though the masses match.',
          },
          {
            id: 'pek-cars-why',
            x: 50,
            y: 92,
            label: 'Why v squared matters',
            description:
              'The v squared term means small jumps in speed cause big jumps in stored energy. That is why braking distance grows so sharply with speed: more KE must be transferred away before the car stops.',
          },
        ],
      },
    },
    {
      id: 'pek-scene-ke-vs-v',
      title: 'A KE Against v Graph',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read a KE against v graph for a 1 kg ball and see why the curve bends upwards.',
      data: {
        viewBox: '0 0 800 400',
        svg: KE_VS_V_SVG,
        hotspots: [
          {
            id: 'pek-graph-axes',
            x: 18,
            y: 60,
            label: 'Axes: speed across, KE up',
            description:
              'Speed v goes along the horizontal axis in m/s. Kinetic energy KE goes up the vertical axis in joules. Both must be in those units for the rule to work.',
          },
          {
            id: 'pek-graph-point-2',
            x: 30,
            y: 85,
            label: 'At v = 2 m/s, KE = 2 J',
            description:
              'For a 1 kg ball moving at 2 m/s, KE = 1/2 x 1 x 2 x 2 = 2 J. The first dot sits low because v is small.',
          },
          {
            id: 'pek-graph-point-4',
            x: 45,
            y: 75,
            label: 'At v = 4 m/s, KE = 8 J',
            description:
              'Double the speed to 4 m/s and KE = 1/2 x 1 x 4 x 4 = 8 J. KE has gone from 2 J to 8 J, a factor of four, exactly as v squared predicts.',
          },
          {
            id: 'pek-graph-shape',
            x: 65,
            y: 30,
            label: 'A curve, not a straight line',
            description:
              'Because KE depends on v squared, the graph bends upwards. Equal steps along v give bigger and bigger steps up in KE. That shape is the v squared rule made visible.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'pek-worked-1',
      title: 'A Yorkshire cyclist: mass 70 kg, v = 6 m/s',
      steps: [
        {
          explanation:
            'Pick out the two quantities. A rider plus bike has a combined mass m = 70 kg and is moving along a flat lane at v = 6 m/s. We want the kinetic energy KE.',
        },
        {
          explanation:
            'Check the units. Mass is in kg and speed is in m/s, so KE will come out in joules. No conversion needed.',
        },
        {
          explanation: 'Write the rule.',
          maths: 'KE = 1/2 x m x v squared',
        },
        {
          explanation: 'Substitute the two numbers, keeping the 1/2 and the squaring on the speed.',
          maths: 'KE = 1/2 x 70 x 6 x 6',
        },
        {
          explanation: 'Square the speed first, then multiply by the mass, then halve.',
          maths: 'KE = 1/2 x 70 x 36 = 1260 J',
        },
        {
          explanation:
            'State the answer. The kinetic energy store of the cyclist is 1260 J at this speed. If the rider slowed to a stop, that much energy would have to be transferred away by the brakes and the tyres.',
        },
      ],
    },
    {
      id: 'pek-worked-2',
      title: 'A car at 10 m/s versus the same car at 20 m/s',
      steps: [
        {
          explanation:
            'Pick out the two scenarios. A car of mass 1000 kg drives down the A30 in Cornwall first at v_1 = 10 m/s, then on a second run at v_2 = 20 m/s. We want both kinetic energies and the ratio.',
        },
        {
          explanation: 'Write the rule.',
          maths: 'KE = 1/2 x m x v squared',
        },
        {
          explanation: 'Work out KE at 10 m/s. Square the speed, then multiply by m, then halve.',
          maths: 'KE_1 = 1/2 x 1000 x 100 = 50 000 J',
        },
        {
          explanation: 'Now work out KE at 20 m/s in the same way.',
          maths: 'KE_2 = 1/2 x 1000 x 400 = 200 000 J',
        },
        {
          explanation: 'Compare the two stores by dividing.',
          maths: 'KE_2 / KE_1 = 200 000 / 50 000 = 4',
        },
        {
          explanation:
            'State the answer. Doubling the speed from 10 m/s to 20 m/s quadruples the kinetic energy, because KE depends on v squared and 2 squared is 4. The mass cancels out of the ratio.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pek-q1',
      type: 'multiple-choice',
      stem: 'Which sentence best describes the kinetic energy store of a moving object?',
      tier: 'core',
      options: [
        'It is the energy an object has because it is moving.',
        'It is the energy an object has because of its position above the ground.',
        'It is the energy an object has because it is hot.',
        'It is the energy stored in a stretched spring.',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'Kinetic means motion.',
    },
    {
      id: 'pek-q2',
      type: 'multiple-choice',
      stem: 'Which is the correct rule for kinetic energy?',
      tier: 'core',
      options: [
        'KE = m x v',
        'KE = 1/2 x m x v squared',
        'KE = m x g x h',
        'KE = v squared / m',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pek-mis-forget-half',
      hint: 'You need the 1/2, the mass, and the square of the speed.',
    },
    {
      id: 'pek-q3',
      type: 'multiple-choice',
      stem: 'A Manchester tennis ball is sitting on the grass, not moving. What is its kinetic energy?',
      tier: 'core',
      options: [
        '10 J, because every object has kinetic energy.',
        'The same as its weight.',
        '0 J, because it is not moving.',
        'Half its mass in joules.',
      ],
      correctIndex: 2,
      xpValue: 10,
      hint: 'KE = 1/2 x m x v squared, and here v = 0 m/s.',
    },
    {
      id: 'pek-q4',
      type: 'multiple-choice',
      stem: 'In the rule KE = 1/2 x m x v squared, what are the correct units for m and v if we want KE in joules?',
      tier: 'core',
      options: [
        'm in grams, v in km/h.',
        'm in newtons, v in m/s.',
        'm in kg, v in m/s squared.',
        'm in kg, v in m/s.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'pek-mis-units-of-ke',
      hint: 'Joules come out only when mass is in kg and speed is in metres per second.',
    },
    {
      id: 'pek-q5',
      type: 'numeric-entry',
      stem: 'A Yorkshire cyclist (rider plus bike) has a total mass of 70 kg and is moving at 6 m/s. What is the cyclist\'s kinetic energy, in joules?',
      tier: 'core',
      correctAnswer: 1260,
      unit: 'J',
      xpValue: 10,
      hint: 'KE = 1/2 x 70 x 6 x 6.',
    },
    {
      id: 'pek-q6',
      type: 'numeric-entry',
      stem: 'A Manchester tennis ball has mass 0.06 kg and is travelling at 30 m/s after a serve. What is its kinetic energy, in joules?',
      tier: 'core',
      correctAnswer: 27,
      unit: 'J',
      xpValue: 10,
      hint: 'KE = 1/2 x 0.06 x 30 x 30 = 1/2 x 0.06 x 900.',
    },
    {
      id: 'pek-q7',
      type: 'numeric-entry',
      stem: 'A 2 kg sandbag is dragged along the floor of a Cornwall surf hut at 1 m/s. What is its kinetic energy, in joules?',
      tier: 'core',
      correctAnswer: 1,
      unit: 'J',
      xpValue: 10,
      hint: 'KE = 1/2 x 2 x 1 x 1.',
    },
    {
      id: 'pek-q8',
      type: 'multiple-choice',
      stem: 'A Newcastle bus is travelling at 15 m/s. On a later stretch of road the bus speeds up to 30 m/s. By what factor has the kinetic energy of the bus changed?',
      tier: 'confident',
      options: [
        'It has stayed the same, because the mass has not changed.',
        'It has quadrupled, because KE depends on v squared and 2 squared is 4.',
        'It has doubled, because the speed has doubled.',
        'It has halved, because the bus is moving in one motion.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'pek-mis-doubles-not-quadruples',
      hint: 'KE depends on v squared, so doubling v multiplies KE by 2 squared.',
    },
    {
      id: 'pek-q9',
      type: 'multiple-choice',
      stem: 'Two trams in Edinburgh have the same speed of 10 m/s. Tram P has mass 8000 kg. Tram Q has mass 16 000 kg. How does the kinetic energy of Q compare to that of P?',
      tier: 'confident',
      options: [
        'KE of Q is the same as KE of P.',
        'KE of Q is twice KE of P, because the mass has doubled and KE is proportional to m.',
        'KE of Q is four times KE of P, because mass squared has doubled.',
        'KE of Q is half KE of P.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'pek-mis-mass-doesnt-matter',
      hint: 'KE = 1/2 x m x v squared. Double the m, double the KE, if v is unchanged.',
    },
    {
      id: 'pek-q10',
      type: 'numeric-entry',
      stem: 'A Newcastle bus has mass 12 000 kg and is moving at 15 m/s. What is its kinetic energy, in joules?',
      tier: 'confident',
      correctAnswer: 1350000,
      unit: 'J',
      xpValue: 15,
      hint: 'KE = 1/2 x 12 000 x 15 x 15 = 1/2 x 12 000 x 225.',
    },
    {
      id: 'pek-q11',
      type: 'numeric-entry',
      stem: 'An Edinburgh tram of mass 40 000 kg is gliding through Princes Street at 10 m/s. What is its kinetic energy, in joules?',
      tier: 'confident',
      correctAnswer: 2000000,
      unit: 'J',
      xpValue: 15,
      hint: 'KE = 1/2 x 40 000 x 10 x 10 = 1/2 x 40 000 x 100.',
    },
    {
      id: 'pek-q12',
      type: 'numeric-entry',
      stem: 'A Cornwall surfer of mass 60 kg rides a board at 4 m/s along the wave. What is the combined kinetic energy of the surfer, in joules? Ignore the mass of the board.',
      tier: 'confident',
      correctAnswer: 480,
      unit: 'J',
      xpValue: 15,
      hint: 'KE = 1/2 x 60 x 4 x 4.',
    },
    {
      id: 'pek-q13',
      type: 'multiple-choice',
      stem: 'A pupil writes that for a 5 kg bag moving at 4 m/s, KE = 1/2 x 5 x 4 = 10 J. What is the mistake?',
      tier: 'confident',
      options: [
        'They forgot to halve the answer.',
        'They used the wrong units for mass.',
        'They should have multiplied by 4 squared but divided by mass.',
        'They forgot to square the speed. KE = 1/2 x 5 x 4 x 4 = 40 J.',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'pek-mis-v-not-squared',
      hint: 'The rule is 1/2 x m x v x v, not 1/2 x m x v.',
    },
    {
      id: 'pek-q14',
      type: 'multiple-choice',
      stem: 'Two cars sit at a Cornwall junction. Car A has mass 1000 kg and is moving at 20 m/s. Car B has mass 2000 kg and is parked at 0 m/s. Which has more kinetic energy?',
      tier: 'confident',
      options: [
        'Car B, because it is heavier.',
        'They are the same, because the heavier car cancels the speed of the lighter one.',
        'Car A, because Car B is not moving and so its KE is 0 J.',
        'Neither, because parked cars also store kinetic energy.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pek-mis-heavier-always-more-ke',
      hint: 'If v = 0, then 1/2 x m x v squared = 0 J no matter how big m is.',
    },
    {
      id: 'pek-q15',
      type: 'drag-order',
      stem: 'Put the steps in the right order for working out the kinetic energy of a moving object.',
      tier: 'confident',
      items: [
        'Substitute m and v into KE = 1/2 x m x v squared and evaluate.',
        'Pick out the mass m (in kg) and the speed v (in m/s) from the question.',
        'Square the speed, then multiply by the mass, then halve. State KE in joules.',
        'Write the rule for kinetic energy: KE = 1/2 x m x v squared.',
      ],
      correctOrder: [1, 3, 0, 2],
      xpValue: 15,
      hint: 'List the quantities first, then the rule, then substitute, then evaluate in the right order.',
    },
    {
      id: 'pek-q16',
      type: 'numeric-entry',
      stem: 'A 0.5 kg cricket ball is bowled at 25 m/s in a Yorkshire net. What is its kinetic energy, in joules?',
      tier: 'challenge',
      correctAnswer: 156.25,
      unit: 'J',
      xpValue: 20,
      hint: 'KE = 1/2 x 0.5 x 25 x 25 = 1/2 x 0.5 x 625.',
    },
    {
      id: 'pek-q17',
      type: 'multiple-choice',
      stem: 'A teacher writes "the kinetic energy of a moving lorry is 80 000 m/s". A pupil spots a problem. Which fix is right?',
      tier: 'challenge',
      options: [
        'Change the unit to J, because kinetic energy is an energy and is measured in joules.',
        'Change the number to 40 000, because we always halve speeds.',
        'Change "lorry" to "car", because m/s is only for cars.',
        'Leave it. m/s is fine for kinetic energy.',
      ],
      correctIndex: 0,
      xpValue: 20,
      misconceptionId: 'pek-mis-units-of-ke',
      hint: 'Energy is measured in joules. m/s is for velocity.',
    },
    {
      id: 'pek-q18',
      type: 'spot-misconception',
      stem: 'Sam says, "If a Newcastle bus doubles its speed from 15 m/s to 30 m/s, its kinetic energy must also double, because KE depends on speed."',
      tier: 'challenge',
      statements: [
        {
          text: 'Sam is right. KE doubles when speed doubles, because the speed is in the formula.',
          isMisconception: true,
        },
        {
          text: 'Sam is not right. KE depends on v squared, so doubling v multiplies KE by 2 squared = 4. The KE quadruples, it does not just double.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'pek-mis-doubles-not-quadruples',
    },
    {
      id: 'pek-q19',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is working out the kinetic energy of a 2 kg parcel slid in one motion across a Manchester warehouse floor at 3 m/s.',
      tier: 'challenge',
      steps: [
        'List the two quantities: m = 2 kg, v = 3 m/s. We want KE in joules.',
        'Check the units. Mass in kg and speed in m/s, so KE will come out in J.',
        'Write the rule: KE = 1/2 x m x v squared.',
        null,
        'Evaluate: KE = 1/2 x 2 x 9 = 9 J.',
        'State the answer: the kinetic energy of the parcel is 9 J.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Substitute the numbers and square the speed first: KE = 1/2 x 2 x 3 x 3 = 1/2 x 2 x 9.',
      xpValue: 20,
    },
    {
      id: 'pek-q20',
      type: 'drag-order',
      stem: 'Three Edinburgh trams have the kinetic energy values shown. Put them in order from smallest to largest kinetic energy.',
      tier: 'challenge',
      items: [
        'Tram X: mass 40 000 kg, v = 5 m/s, KE = 500 000 J.',
        'Tram Y: mass 40 000 kg, v = 10 m/s, KE = 2 000 000 J.',
        'Tram Z: mass 40 000 kg, v = 15 m/s, KE = 4 500 000 J.',
      ],
      correctOrder: [0, 1, 2],
      xpValue: 20,
      hint: 'Square each speed, multiply by 40 000, halve, then compare.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2019, Paper 1F, candidates wrote that doubling the speed of a moving object doubled its kinetic energy, missing the v squared term.
    {
      id: 'pek-mis-doubles-not-quadruples',
      description:
        'Believing that doubling the speed of a moving object doubles its kinetic energy, missing that KE depends on v squared.',
      triggerAnswer: 'doubles-not-quadruples',
      correction:
        'KE = 1/2 x m x v squared. If v doubles, v squared multiplies by 4, so KE quadruples. If v triples, KE goes up by a factor of 9.',
      reExplanation:
        'A Newcastle bus at 15 m/s holds a certain kinetic energy. Speed it up to 30 m/s, which is double, and KE goes up by 2 squared = 4. So the new store is four times the old one. The v squared term is why braking distances grow so sharply with speed. Mass is a plain multiplier; speed is squared.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2021, Paper 1PH0/1F, candidates ignored mass when ranking the KE of moving objects, judging only by the speed.
    {
      id: 'pek-mis-mass-doesnt-matter',
      description:
        'Ranking the kinetic energy of moving objects by speed alone, ignoring that KE is also proportional to mass.',
      triggerAnswer: 'mass-doesnt-matter',
      correction:
        'KE = 1/2 x m x v squared. At the same speed, doubling the mass doubles the kinetic energy. Mass matters as well as speed.',
      reExplanation:
        'Two Edinburgh trams glide at 10 m/s. Tram P has mass 8000 kg, Tram Q has mass 16 000 kg. Q has twice the mass and the same speed, so its KE is twice that of P. Mass is a plain multiplier in the formula, so doubling m doubles KE. Speed and mass both matter, but in different ways.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2020, J259/02, candidates wrote that the heavier of two objects always has more KE, missing that a parked heavy object has v = 0 and therefore KE = 0.
    {
      id: 'pek-mis-heavier-always-more-ke',
      description:
        'Claiming the heavier object always has more kinetic energy, missing that KE is 0 J when v = 0 m/s no matter the mass.',
      triggerAnswer: 'heavier-always-more-ke',
      correction:
        'Kinetic energy needs motion. If v = 0 m/s, then 1/2 x m x v squared = 0 J for any mass. Heavier only means more KE when the speeds match.',
      reExplanation:
        'A 2000 kg car parked outside a Cornwall shop has KE = 0 J because it is not moving. A 1000 kg car driving past at 20 m/s holds 200 000 J. The lighter car has all the kinetic energy because the parked car has v = 0. Compare masses only when the speeds are the same, or do the full calculation.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 1F, candidates wrote KE = 1/2 x m x v rather than 1/2 x m x v squared, dropping the square on the speed.
    {
      id: 'pek-mis-v-not-squared',
      description:
        'Writing KE = 1/2 x m x v instead of KE = 1/2 x m x v squared, dropping the square on the speed.',
      triggerAnswer: 'v-not-squared',
      correction:
        'The speed is squared. Multiply v by itself. For a 5 kg bag at 4 m/s, KE = 1/2 x 5 x 4 x 4 = 40 J, not 10 J.',
      reExplanation:
        'The v squared term is what makes kinetic energy grow so sharply with speed. Square the speed first, then multiply by the mass, then halve. For a 5 kg bag moving at 4 m/s, 4 x 4 = 16, then 1/2 x 5 x 16 = 40 J. Dropping the square gives 10 J, four times too small at this speed.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2018, Paper 1PH0/1F, candidates forgot the 1/2 factor in the kinetic energy formula and wrote KE = m x v squared.
    {
      id: 'pek-mis-forget-half',
      description:
        'Forgetting the 1/2 factor in the kinetic energy rule and writing KE = m x v squared.',
      triggerAnswer: 'forget-half',
      correction:
        'The 1/2 is part of the rule. Write KE = 1/2 x m x v squared. Without the 1/2, every answer comes out twice as large as it should be.',
      reExplanation:
        'A Yorkshire cyclist of mass 70 kg at 6 m/s holds KE = 1/2 x 70 x 36 = 1260 J. Forgetting the half gives 2520 J, exactly twice the right answer. The 1/2 is there because of how kinetic energy builds up from rest as a force does work; for KS3 you take it as part of the rule.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2022, J259/02, candidates wrote kinetic energy in m/s or N rather than in joules, mixing the units of speed or force with the unit of energy.
    {
      id: 'pek-mis-units-of-ke',
      description:
        'Writing kinetic energy in m/s or newtons rather than in joules, mixing the units of speed or force with the unit of energy.',
      triggerAnswer: 'units-of-ke',
      correction:
        'Kinetic energy is an energy and is always measured in joules. The unit m/s is for velocity. Newtons are for forces.',
      reExplanation:
        'When you substitute m in kg and v in m/s into KE = 1/2 x m x v squared, the units multiply to kg x (m/s) squared, which is the same as joules. So a moving lorry holds 80 000 J of kinetic energy, not 80 000 m/s. Match the unit to the quantity: J for energy, m/s for speed, N for force.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const energyKineticZoneNodes = [energyKinetic]
