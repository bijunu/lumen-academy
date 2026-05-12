import type { SkillNode } from '@/types/content'

const PENDULUM_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">A grandfather-clock pendulum at three positions</text>

    <!-- Pivot -->
    <circle cx="400" cy="90" r="6" fill="currentColor" stroke="none" />
    <text x="400" y="80" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">pivot</text>

    <!-- Left swing (top, max GPE) -->
    <line x1="400" y1="90" x2="240" y2="220" />
    <circle cx="240" cy="220" r="16" fill="currentColor" stroke="none" />
    <text x="200" y="200" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">A: top of swing</text>
    <text x="200" y="245" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">v = 0 m/s</text>
    <text x="200" y="262" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">GPE = maximum</text>
    <text x="200" y="279" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">KE = 0 J</text>

    <!-- Bottom of swing (max KE) -->
    <line x1="400" y1="90" x2="400" y2="290" stroke-dasharray="6,6" />
    <circle cx="400" cy="290" r="16" fill="currentColor" stroke="none" />
    <text x="400" y="330" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">B: bottom of swing</text>
    <text x="400" y="350" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">v = maximum</text>
    <text x="400" y="367" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">GPE = 0 (lowest point)</text>
    <text x="400" y="384" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">KE = maximum</text>

    <!-- Right swing (top again) -->
    <line x1="400" y1="90" x2="560" y2="220" stroke-dasharray="6,6" />
    <circle cx="560" cy="220" r="16" fill="none" stroke="currentColor" stroke-width="2" />
    <text x="600" y="200" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">C: other top</text>
    <text x="600" y="245" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">v = 0 m/s</text>
    <text x="600" y="262" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">GPE = maximum again</text>
    <text x="600" y="279" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">KE = 0 J</text>
  </g>
`

const ROLLERCOASTER_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Carriage on an Alton Towers-style track (illustrative)</text>

    <!-- Track path: high point on the left, low point in the middle, mid-height on the right -->
    <path d="M 80 110 Q 200 110 280 300 Q 400 360 520 220 Q 620 160 720 230" />

    <!-- Ground line -->
    <line x1="60" y1="360" x2="740" y2="360" />

    <!-- Point 1: top -->
    <circle cx="100" cy="110" r="10" fill="currentColor" stroke="none" />
    <text x="100" y="90" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">1: top of lift hill</text>
    <text x="100" y="135" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">v small (just over the top)</text>
    <text x="100" y="150" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">GPE = 120 kJ</text>
    <text x="100" y="165" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">KE near 0 kJ</text>

    <!-- Point 2: bottom -->
    <circle cx="300" cy="330" r="10" fill="currentColor" stroke="none" />
    <text x="300" y="320" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">2: lowest dip</text>
    <text x="300" y="395" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">GPE near 0 kJ</text>
    <text x="300" y="412" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">KE near 120 kJ</text>

    <!-- Point 3: rises again -->
    <circle cx="540" cy="225" r="10" fill="currentColor" stroke="none" />
    <text x="600" y="205" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">3: next rise</text>
    <text x="610" y="250" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">GPE growing again</text>
    <text x="610" y="267" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">KE falling, sum still 120 kJ</text>

    <text x="400" y="395" text-anchor="middle" font-size="13" font-style="italic" stroke="none" fill="currentColor">Ignoring friction, KE + GPE stays at 120 kJ all the way.</text>
  </g>
`

const ENERGY_BAR_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Energy bars at three positions on a Lake District toboggan run</text>

    <!-- Position A: top -->
    <text x="160" y="90" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">A: top of slope</text>
    <rect x="100" y="110" width="50" height="180" fill="currentColor" stroke="none" />
    <rect x="170" y="290" width="50" height="0" fill="currentColor" stroke="none" />
    <line x1="170" y1="290" x2="220" y2="290" />
    <text x="125" y="305" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">GPE</text>
    <text x="195" y="305" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">KE</text>
    <text x="160" y="325" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">GPE = 600 J, KE = 0 J</text>

    <!-- Position B: half-way -->
    <text x="400" y="90" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">B: half-way down</text>
    <rect x="340" y="200" width="50" height="90" fill="currentColor" stroke="none" />
    <rect x="410" y="200" width="50" height="90" fill="currentColor" stroke="none" />
    <text x="365" y="305" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">GPE</text>
    <text x="435" y="305" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">KE</text>
    <text x="400" y="325" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">GPE = 300 J, KE = 300 J</text>

    <!-- Position C: bottom -->
    <text x="640" y="90" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">C: bottom of slope</text>
    <rect x="580" y="290" width="50" height="0" fill="currentColor" stroke="none" />
    <line x1="580" y1="290" x2="630" y2="290" />
    <rect x="650" y="110" width="50" height="180" fill="currentColor" stroke="none" />
    <text x="605" y="305" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">GPE</text>
    <text x="675" y="305" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">KE</text>
    <text x="640" y="325" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">GPE = 0 J, KE = 600 J</text>

    <text x="400" y="370" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Total GPE + KE stays at 600 J. The two stores swap, the sum holds.</text>
  </g>
`

export const energyKeGpeInterchange: SkillNode = {
  id: 'physics-energy-ke-gpe-interchange',
  title: 'Energy in Pendulums and Roller Coasters',
  description:
    'When friction and air drag are small, the total mechanical energy of a swinging pendulum or a carriage on a slope stays the same. As the bob falls or the carriage rolls downhill, gravitational potential energy (GPE) is transferred into kinetic energy (KE). At the top of a swing the bob is at rest, so KE is zero and GPE is at its largest. At the lowest point GPE has fallen to zero (relative to that level) and KE is at its largest. In between, the two stores share the total. Use this to compare top and bottom: GPE lost from the top equals KE gained at the bottom. Mass cancels in the conservation step, so a heavy carriage and a light carriage reach the same speed at the bottom of the same slope when friction is small. In the real world some energy is dissipated to thermal stores in the rails and the air, which is why a Greenwich grandfather-clock pendulum is given a gentle push by the escapement each swing.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-energy-stores-transfers',
  zoneName: 'Energy Stores and Transfers',
  tier: 'confident',
  prerequisites: ['physics-energy-kinetic', 'physics-energy-gravitational-potential'],
  curriculum: {
    ks3Objective:
      'Comparing the starting with the final conditions of a system; describing how energy moves between gravitational and kinetic stores in pendulums and on slopes; qualitative and simple numerical examples.',
    awardingBodies: {
      aqa: '4.1.2.1 Energy transfers in a system; interchange between kinetic and gravitational potential stores (GCSE Physics 8463)',
      edexcel:
        'Topic 4 Energy, 4.11-4.12 Transfers between kinetic and gravitational potential stores (GCSE Physics 1PH0)',
      ocr: 'P1.1 Energy transfers between kinetic and gravitational stores; pendulum and slope examples (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'peki-scene-pendulum',
      title: 'Grandfather-Clock Pendulum',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to follow the bob of a Greenwich grandfather-clock pendulum at the top, the bottom and the other top.',
      data: {
        viewBox: '0 0 800 400',
        svg: PENDULUM_SVG,
        hotspots: [
          {
            id: 'peki-pend-top',
            x: 25,
            y: 60,
            label: 'A: top of swing, v = 0 m/s',
            description:
              'At the top of the swing, the bob has stopped moving for a moment before it heads back. v = 0 m/s, so KE = 0 J. The bob is at its highest, so GPE is at its largest for this swing.',
          },
          {
            id: 'peki-pend-bottom',
            x: 50,
            y: 80,
            label: 'B: bottom of swing, KE largest',
            description:
              'At the lowest point of the swing, the bob is moving fastest. Compared with this level, GPE is 0 J. With friction small, the GPE lost from A has become KE here, so KE is at its largest.',
          },
          {
            id: 'peki-pend-other-top',
            x: 75,
            y: 60,
            label: 'C: other top, v = 0 m/s again',
            description:
              'On the far side the bob stops again. KE is 0 J and GPE is back to its largest value. The total stays the same all swing if friction and air drag are small.',
          },
        ],
      },
    },
    {
      id: 'peki-scene-rollercoaster',
      title: 'Roller-Coaster Carriage',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on this Alton Towers-style track to follow how GPE and KE swap as the carriage rolls.',
      data: {
        viewBox: '0 0 800 400',
        svg: ROLLERCOASTER_SVG,
        hotspots: [
          {
            id: 'peki-rc-top',
            x: 13,
            y: 30,
            label: '1: top of lift hill, GPE = 120 kJ',
            description:
              'At the top, the carriage has just crested the lift hill. KE is near 0 kJ. GPE is at its largest for this ride, 120 kJ relative to the lowest dip.',
          },
          {
            id: 'peki-rc-bottom',
            x: 38,
            y: 85,
            label: '2: lowest dip, KE near 120 kJ',
            description:
              'At the lowest dip, GPE has fallen to near 0 kJ relative to this level. With friction small, the lost GPE has become KE, so KE is near 120 kJ. This is the fastest point on the ride.',
          },
          {
            id: 'peki-rc-rise',
            x: 68,
            y: 56,
            label: '3: next rise, sum still 120 kJ',
            description:
              'Climbing the next hill, KE shrinks and GPE grows. The sum KE + GPE stays at about 120 kJ all the way, as long as friction and air drag are small.',
          },
        ],
      },
    },
    {
      id: 'peki-scene-energy-bars',
      title: 'Energy Bars on a Toboggan Run',
      type: 'labelled-diagram',
      instructions:
        'Click each pair of bars to see GPE and KE swap roles down a Lake District toboggan slope.',
      data: {
        viewBox: '0 0 800 400',
        svg: ENERGY_BAR_SVG,
        hotspots: [
          {
            id: 'peki-bar-top',
            x: 20,
            y: 50,
            label: 'A: top, all GPE',
            description:
              'At the top of the slope the toboggan is at rest. GPE is 600 J relative to the bottom, KE is 0 J. The bars say: all the energy is in the gravitational store.',
          },
          {
            id: 'peki-bar-middle',
            x: 50,
            y: 50,
            label: 'B: half-way, energy shared',
            description:
              'Half-way down, the toboggan has lost half its height and gained speed. GPE is 300 J and KE is 300 J. The two stores share the total 600 J.',
          },
          {
            id: 'peki-bar-bottom',
            x: 80,
            y: 50,
            label: 'C: bottom, all KE',
            description:
              'At the bottom GPE is 0 J relative to this level. With friction small, all 600 J is now in the kinetic store, so KE = 600 J. The sum stayed the same, the stores swapped.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'peki-worked-1',
      title: 'A pendulum bob: 20 J of GPE at the top becomes KE at the bottom',
      steps: [
        {
          explanation:
            'Read the set-up. A grandfather-clock pendulum bob is held at the top of its swing with 20 J of GPE relative to the lowest point. It is released from rest and friction and air drag are small.',
        },
        {
          explanation:
            'Pick the two positions to compare. Position A is the top: v = 0 m/s, so KE_A = 0 J, and GPE_A = 20 J. Position B is the bottom of the swing: GPE_B = 0 J relative to this level.',
        },
        {
          explanation:
            'Use conservation of mechanical energy. With friction small, KE + GPE stays the same.',
          maths: 'KE_A + GPE_A = KE_B + GPE_B',
        },
        {
          explanation: 'Substitute the values.',
          maths: '0 + 20 = KE_B + 0',
        },
        {
          explanation: 'Evaluate.',
          maths: 'KE_B = 20 J',
        },
        {
          explanation:
            'State the answer. At the bottom of the swing the bob has 20 J of KE, the same value as the GPE it started with. The GPE has been transferred into the kinetic store of the bob.',
        },
      ],
    },
    {
      id: 'peki-worked-2',
      title: 'A 600 kg carriage drops 120 kJ of GPE: speed at the lowest dip',
      steps: [
        {
          explanation:
            'Read the set-up. A roller-coaster carriage of mass 600 kg sits at the top of a lift hill with GPE = 120 kJ relative to the lowest dip. It rolls down with friction small. Find its speed v at the lowest dip.',
        },
        {
          explanation:
            'Apply conservation. With friction small, all the GPE lost becomes KE. So KE at the dip equals 120 kJ, which is 120 000 J.',
          maths: 'KE = 120 000 J',
        },
        {
          explanation:
            'Write the KE rule from the prerequisite node, and rearrange for v.',
          maths: 'KE = (1/2) x m x v squared, so v = sqrt(2 x KE / m)',
        },
        {
          explanation: 'Substitute the numbers. Mass m = 600 kg.',
          maths: 'v = sqrt(2 x 120 000 / 600)',
        },
        {
          explanation: 'Evaluate inside the square root.',
          maths: 'v = sqrt(400)',
        },
        {
          explanation:
            'Take the square root and state the answer.',
          maths: 'v = 20 m/s',
        },
        {
          explanation:
            'Check the units. KE is in joules, mass in kilograms, so 2 x KE / m has units of m squared / s squared, and the square root gives m/s. The carriage passes the lowest dip at about 20 m/s, as long as friction is small.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'peki-q1',
      type: 'multiple-choice',
      stem: 'A pendulum bob is held at the top of its swing and released from rest. Where is its kinetic energy largest?',
      tier: 'core',
      options: [
        'At the top of the swing, before it is released.',
        'At the lowest point of the swing.',
        'At the second top of the swing, on the far side.',
        'It is the same at every point of the swing.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'peki-mis-ke-only-at-bottom',
      hint: 'KE grows as GPE falls. The lowest point is where GPE has dropped the most.',
    },
    {
      id: 'peki-q2',
      type: 'multiple-choice',
      stem: 'A carriage at the top of a lift hill has 120 kJ of GPE relative to the lowest dip. Friction is small. What is its KE at the lowest dip?',
      tier: 'core',
      options: [
        'About 120 kJ.',
        '0 kJ, because all the energy is used up.',
        '240 kJ, because GPE plus KE doubles.',
        '60 kJ, half of the GPE.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'peki-mis-total-energy-grows',
      hint: 'KE + GPE stays the same. At the dip GPE is near 0 kJ, so KE takes the full 120 kJ.',
    },
    {
      id: 'peki-q3',
      type: 'multiple-choice',
      stem: 'At the top of a swing the pendulum bob has GPE = 8 J and KE = 0 J. Friction is small. What is the GPE at the lowest point of the swing, relative to the lowest level?',
      tier: 'core',
      options: [
        '8 J.',
        '16 J.',
        '4 J.',
        '0 J.',
      ],
      correctIndex: 3,
      xpValue: 10,
      hint: 'GPE is measured from the lowest level. At the lowest point the height is zero.',
    },
    {
      id: 'peki-q4',
      type: 'numeric-entry',
      stem: 'A toboggan starts at rest at the top of a Lake District slope with GPE = 600 J relative to the bottom. Friction is small. What is the KE of the toboggan at the bottom of the slope, in joules?',
      tier: 'core',
      correctAnswer: 600,
      unit: 'J',
      xpValue: 10,
      hint: 'All the GPE lost becomes KE. KE at the bottom equals the GPE at the top.',
    },
    {
      id: 'peki-q5',
      type: 'numeric-entry',
      stem: 'A pendulum bob has GPE = 12 J at the top of its swing and KE = 0 J. Friction is small. What is the KE in joules at the lowest point of the swing?',
      tier: 'core',
      correctAnswer: 12,
      unit: 'J',
      xpValue: 10,
      hint: 'KE_bottom = GPE_top when friction is small.',
    },
    {
      id: 'peki-q6',
      type: 'multiple-choice',
      stem: 'Halfway down a slope a sledge has GPE = 200 J and KE = 200 J relative to the bottom. Friction is small. What was the GPE at the top, before the sledge started?',
      tier: 'core',
      options: [
        '100 J.',
        '200 J.',
        '400 J.',
        '0 J.',
      ],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Total energy stays the same. KE + GPE halfway = GPE at the top, since KE at the top was 0 J.',
    },
    {
      id: 'peki-q7',
      type: 'numeric-entry',
      stem: 'A carriage on a Blackpool pier swing reaches its lowest point with KE = 450 J relative to that level. Friction is small. What was the GPE of the carriage at the top of its swing, in joules? Do not add the top GPE to the bottom KE; they are the same energy at two moments.',
      tier: 'core',
      correctAnswer: 450,
      unit: 'J',
      xpValue: 10,
      misconceptionId: 'peki-mis-add-top-gpe-to-bottom-ke',
      hint: 'GPE at the top equals KE at the bottom when friction is small.',
    },
    {
      id: 'peki-q8',
      type: 'multiple-choice',
      stem: 'Two roller-coaster carriages are released from rest at the top of the same lift hill on the same track. One has 300 kg of passengers, the other has 600 kg. Friction is small. Which carriage reaches the lowest dip with the greater speed?',
      tier: 'confident',
      options: [
        'The 600 kg carriage, because it has more weight.',
        'The 300 kg carriage, because it is lighter.',
        'Both reach the dip with the same speed, because mass cancels in the conservation step.',
        'Neither moves, because the track is friction-free.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'peki-mis-heavier-faster-at-bottom',
      hint: 'Set m x g x h = (1/2) x m x v squared. The m cancels, leaving v squared = 2 x g x h.',
    },
    {
      id: 'peki-q9',
      type: 'numeric-entry',
      stem: 'A pendulum bob with mass 0.20 kg is held at a height of 0.45 m above its lowest point. Use g = 10 N/kg. Friction is small. What is its KE at the lowest point of the swing, in joules?',
      tier: 'confident',
      correctAnswer: 0.9,
      unit: 'J',
      xpValue: 15,
      hint: 'GPE_top = m x g x h, then KE_bottom = GPE_top.',
    },
    {
      id: 'peki-q10',
      type: 'numeric-entry',
      stem: 'A 600 kg roller-coaster carriage starts at rest at the top of a lift hill with GPE = 120 000 J relative to the lowest dip. Friction is small. What is its speed at the lowest dip in m/s? Use KE = (1/2) x m x v squared.',
      tier: 'confident',
      correctAnswer: 20,
      unit: 'm/s',
      xpValue: 15,
      hint: 'KE at the dip = 120 000 J. Rearrange to v = sqrt(2 x KE / m) = sqrt(2 x 120 000 / 600).',
    },
    {
      id: 'peki-q11',
      type: 'multiple-choice',
      stem: 'A pupil writes: "At the lowest point of the pendulum swing, the total energy has grown, because the bob is moving fastest there." What is wrong with this statement?',
      tier: 'confident',
      options: [
        'Nothing, the statement is correct.',
        'The total energy KE + GPE stays the same when friction is small. KE has grown, but GPE has fallen by the same amount.',
        'The bob is slowest at the lowest point, not fastest.',
        'Pendulums do not have GPE.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'peki-mis-total-energy-grows',
      hint: 'Look at the sum KE + GPE, not just KE.',
    },
    {
      id: 'peki-q12',
      type: 'multiple-choice',
      stem: 'A real grandfather-clock pendulum slowly loses amplitude (its swings get smaller) unless the clock weight gives it a gentle push each swing. Where does the lost mechanical energy go?',
      tier: 'confident',
      options: [
        'It is destroyed by friction.',
        'It is dissipated to the thermal store of the pivot bearing and the surrounding air.',
        'It turns into extra GPE at the top of the next swing.',
        'It is stored in the wooden case.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'peki-mis-friction-destroys-energy',
      hint: 'Energy is conserved overall. Friction dissipates it to thermal stores, it does not destroy it.',
    },
    {
      id: 'peki-q13',
      type: 'multiple-choice',
      stem: 'A carriage on a slope has GPE = 800 J at the top relative to the bottom and KE = 0 J. Halfway down it has KE = 400 J. Friction is small. What is its GPE halfway down, in joules?',
      tier: 'confident',
      options: [
        '0 J.',
        '200 J.',
        '400 J.',
        '800 J.',
      ],
      correctIndex: 2,
      xpValue: 15,
      hint: 'KE + GPE stays at 800 J. So GPE halfway = 800 - 400.',
    },
    {
      id: 'peki-q14',
      type: 'numeric-entry',
      stem: 'A bike free-rolls down a Cornish coastal path. At the top it has GPE = 1 500 J relative to the bottom, and KE = 0 J. Halfway down, KE = 700 J. Friction is small. What is the GPE halfway down, in joules?',
      tier: 'confident',
      correctAnswer: 800,
      unit: 'J',
      xpValue: 15,
      hint: 'GPE_half = (KE_top + GPE_top) - KE_half = 1 500 - 700.',
    },
    {
      id: 'peki-q15',
      type: 'spot-misconception',
      stem: 'Marcus says, "A pendulum bob has kinetic energy only at the lowest point. Higher up, it has none, because it is rising not falling."',
      tier: 'confident',
      statements: [
        {
          text: 'Marcus is right. KE is only at the lowest point of the swing.',
          isMisconception: true,
        },
        {
          text: 'Marcus is not right. KE grows from 0 J at the top to a maximum at the lowest point. In between, KE and GPE share the total energy.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'peki-mis-ke-only-at-bottom',
    },
    {
      id: 'peki-q16',
      type: 'spot-misconception',
      stem: 'Priya says, "On the way down a slope the sum of GPE and KE is bigger than on the way back up, because the carriage is faster going down."',
      tier: 'challenge',
      statements: [
        {
          text: 'Priya is right. The sum is bigger on the way down.',
          isMisconception: true,
        },
        {
          text: 'Priya is not right. The sum KE + GPE is the same on the way down and on the way up at the same height, when friction is small.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'peki-mis-down-vs-up-different-totals',
    },
    {
      id: 'peki-q17',
      type: 'multiple-choice',
      stem: 'A 400 kg carriage reaches the lowest dip of a track at 10 m/s. The next hill is the same height as the lift hill. Friction is small. What happens?',
      tier: 'challenge',
      options: [
        'The carriage stops just before the top, because some KE is needed to keep moving.',
        'The carriage just reaches the top of the next hill with v near 0 m/s, because its KE at the dip equals the GPE it needs to climb.',
        'The carriage easily clears the next hill with the same 10 m/s, because energy is unlimited.',
        'The carriage speeds up going uphill.',
      ],
      correctIndex: 1,
      xpValue: 20,
      hint: 'Conservation. KE at the dip is fully transferred back to GPE at the same height.',
    },
    {
      id: 'peki-q18',
      type: 'numeric-entry',
      stem: 'A 0.50 kg pendulum bob in a Greenwich clock case has GPE = 0.40 J at the top of its swing. Friction is small. What is its speed at the lowest point of the swing, in m/s? Use KE = (1/2) x m x v squared.',
      tier: 'challenge',
      correctAnswer: 1.265,
      unit: 'm/s',
      xpValue: 20,
      hint: 'KE_bottom = 0.40 J. v = sqrt(2 x KE / m) = sqrt(2 x 0.40 / 0.50) = sqrt(1.6).',
    },
    {
      id: 'peki-q19',
      type: 'drag-order',
      stem: 'Put the steps in the right order for finding the speed at the bottom of a slope from the GPE at the top, using conservation of energy with friction small.',
      tier: 'challenge',
      items: [
        'Take the square root: v = sqrt(2 x KE / m), and state the answer in m/s.',
        'Read out the data: mass m and GPE at the top relative to the bottom.',
        'Set KE at the bottom equal to GPE at the top, because friction is small.',
        'Write KE = (1/2) x m x v squared and rearrange for v squared.',
      ],
      correctOrder: [1, 2, 3, 0],
      xpValue: 20,
      hint: 'Data first, then the conservation step, then the KE rearrangement, then take the square root.',
    },
    {
      id: 'peki-q20',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is finding the speed at the bottom of a slope. A 200 kg toboggan starts at rest with GPE = 9 000 J relative to the bottom. Friction is small.',
      tier: 'challenge',
      steps: [
        'List the data: m = 200 kg, GPE_top = 9 000 J, KE_top = 0 J.',
        'Friction is small, so total mechanical energy is conserved: KE_top + GPE_top = KE_bottom + GPE_bottom.',
        'At the bottom GPE_bottom = 0 J. So KE_bottom = GPE_top = 9 000 J.',
        null,
        'Substitute: v = sqrt(2 x 9 000 / 200) = sqrt(90).',
        'Evaluate and state the answer: v = 9.49 m/s, to 3 significant figures.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Write the KE rule and rearrange for v: KE = (1/2) x m x v squared, so v = sqrt(2 x KE / m).',
      xpValue: 20,
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 1F, on energy transfer questions; many candidates wrote that a pendulum bob has kinetic energy only at the lowest point of the swing, missing that KE grows steadily as GPE falls.
    {
      id: 'peki-mis-ke-only-at-bottom',
      description:
        'Treating KE as something that only exists at the lowest point of a swing or slope, missing that KE grows as soon as the object starts moving.',
      triggerAnswer: 'ke-only-at-bottom',
      correction:
        'KE grows from 0 J at the top to its largest at the lowest point. In between, the object has some KE and some GPE; the sum stays the same when friction is small.',
      reExplanation:
        'Picture the bob halfway down its swing. It is moving, so it has KE. It is still above the lowest point, so it still has some GPE. The two stores share the total. Only at the very top is KE = 0 J, and only at the lowest point is GPE = 0 J relative to that level. The bars trade height as the bob moves.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2021, Paper 1PH0/1F, on conservation questions; candidates wrote that total energy grew when the carriage sped up at the bottom of a dip, missing that KE rose because GPE fell by the same amount.
    {
      id: 'peki-mis-total-energy-grows',
      description:
        'Reading a rise in speed as a rise in total mechanical energy, missing that KE grows only because GPE falls by the same amount.',
      triggerAnswer: 'total-energy-grows',
      correction:
        'When friction is small, KE + GPE stays the same. A rise in KE is matched by an equal fall in GPE, so the total holds steady.',
      reExplanation:
        'Take a 120 kJ ride. At the top, GPE = 120 kJ and KE = near 0 kJ, sum 120 kJ. At the dip, GPE = near 0 kJ and KE = near 120 kJ, sum still 120 kJ. The carriage is faster, but the total is unchanged. The two stores swap roles. The total only changes if friction or air drag dissipate some of it to a thermal store.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2023, Paper J259/02, on roller-coaster questions; many candidates picked the heavier carriage as faster at the bottom, missing that mass cancels in m x g x h = (1/2) x m x v squared.
    {
      id: 'peki-mis-heavier-faster-at-bottom',
      description:
        'Claiming the heavier carriage reaches the lowest dip with a greater speed, missing that mass cancels in the conservation step.',
      triggerAnswer: 'heavier-faster-at-bottom',
      correction:
        'Set m x g x h = (1/2) x m x v squared. The mass m cancels, leaving v squared = 2 x g x h. So speed at the dip depends on the height drop, not the mass.',
      reExplanation:
        'A 300 kg and a 600 kg carriage start at the same height h with friction small. Both have GPE = m x g x h. Each transfers all of it into KE, then v squared = 2 x g x h. The heavier carriage has more KE in joules, but more mass to shift, so the speeds match. Height sets v, not mass.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, Paper 1F, on energy dissipation; candidates wrote that friction "destroys" energy or "uses it up", missing that mechanical energy is dissipated to thermal stores.
    {
      id: 'peki-mis-friction-destroys-energy',
      description:
        'Saying that friction destroys energy or uses it up, missing that the energy is dissipated to thermal stores of the rails, surfaces and surrounding air.',
      triggerAnswer: 'friction-destroys-energy',
      correction:
        'Energy is conserved overall. Friction does not destroy energy. It transfers some mechanical energy into the thermal store of the rails, the bearing and the air.',
      reExplanation:
        'A real pendulum loses amplitude swing after swing. The mechanical energy KE + GPE shrinks. But the same number of joules is gained by the bearing and the air as thermal energy, warming them by a tiny amount. The total energy stays the same, the carriage just has less of it as KE or GPE. The escapement in a grandfather clock tops the bob up to keep going.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2019, Paper 1PH0/1F, on pendulum and slope questions; candidates compared KE + GPE on the way down with KE + GPE on the way up and reported different totals, missing that conservation gives the same sum at the same height.
    {
      id: 'peki-mis-down-vs-up-different-totals',
      description:
        'Comparing the total KE + GPE on the way down and the way up and reporting different totals, missing that the sum is the same at the same height when friction is small.',
      triggerAnswer: 'down-vs-up-different-totals',
      correction:
        'When friction is small, KE + GPE at any height is the same whether the object is moving down or moving back up through that height.',
      reExplanation:
        'A bob passes a marker halfway up its swing with KE = 4 J and GPE = 4 J on the way down, sum 8 J. Back up through the same marker it has KE = 4 J and GPE = 4 J again, sum still 8 J. The speed and height match, so the stores match. Conservation does not care about direction.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2022, Paper J259/02, on conservation questions; candidates added GPE at the top to KE at the bottom to get a new "total", missing that the two values are the same number for the same object when friction is small.
    {
      id: 'peki-mis-add-top-gpe-to-bottom-ke',
      description:
        'Adding the GPE at the top to the KE at the bottom to get a larger total, missing that GPE_top has been transferred into KE_bottom, not stacked on top of it.',
      triggerAnswer: 'add-top-gpe-to-bottom-ke',
      correction:
        'Compare the totals at the top and at the bottom separately. At the top: KE + GPE = GPE_top. At the bottom: KE + GPE = KE_bottom. With friction small, the two totals are equal.',
      reExplanation:
        'Take a 600 J slope. At the top, KE = 0 J and GPE = 600 J, sum 600 J. At the bottom, GPE = 0 J and KE = 600 J, sum still 600 J. Adding GPE_top to KE_bottom would give 1 200 J, double-counting. The 600 J at the top has been transferred into the 600 J at the bottom; they describe the same energy.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const energyKeGpeInterchangeZoneNodes = [energyKeGpeInterchange]
