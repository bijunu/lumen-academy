import type { SkillNode } from '@/types/content'

const DROPPED_BALL_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Dropping a tennis ball off a flat roof in Kent (no air resistance)</text>

    <!-- Roof edge -->
    <line x1="60" y1="80" x2="260" y2="80" />
    <rect x="60" y="80" width="200" height="10" fill="currentColor" />

    <!-- Ball positions -->
    <circle cx="160" cy="100" r="14" fill="currentColor" />
    <text x="200" y="105" font-size="13" stroke="none" fill="currentColor">t = 0 s, v = 0 m/s</text>

    <circle cx="160" cy="170" r="14" fill="currentColor" />
    <text x="200" y="175" font-size="13" stroke="none" fill="currentColor">after 1 s of falling, v = 10 m/s down</text>

    <circle cx="160" cy="250" r="14" fill="currentColor" />
    <text x="200" y="255" font-size="13" stroke="none" fill="currentColor">after 2 s of falling, v = 20 m/s down</text>

    <circle cx="160" cy="340" r="14" fill="currentColor" />
    <text x="200" y="345" font-size="13" stroke="none" fill="currentColor">after 3 s of falling, v = 30 m/s down</text>

    <!-- Gravity arrow -->
    <line x1="500" y1="120" x2="500" y2="320" />
    <polygon points="492,310 500,330 508,310" fill="currentColor" stroke="none" />
    <text x="540" y="220" font-size="14" font-weight="700" stroke="none" fill="currentColor">g pulls the ball</text>
    <text x="540" y="240" font-size="14" stroke="none" fill="currentColor">towards the ground</text>

    <text x="400" y="390" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">In free fall on Earth, v grows by 10 m/s every second the ball falls.</text>
  </g>
`

const G_TWO_HATS_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">g on Earth: one number, two roles</text>

    <!-- Left panel: weight -->
    <rect x="60" y="80" width="320" height="240" />
    <text x="220" y="115" text-anchor="middle" font-size="15" font-weight="700" stroke="none" fill="currentColor">As a field strength</text>
    <text x="220" y="145" text-anchor="middle" font-size="14" stroke="none" fill="currentColor">g = 10 N/kg</text>
    <text x="220" y="175" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Use in W = m x g</text>
    <text x="220" y="205" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Tells you the pull</text>
    <text x="220" y="225" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">on each 1 kg of mass.</text>
    <text x="220" y="270" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Example: a 2 kg melon</text>
    <text x="220" y="290" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">W = 2 x 10 = 20 N</text>

    <!-- Right panel: acceleration -->
    <rect x="420" y="80" width="320" height="240" />
    <text x="580" y="115" text-anchor="middle" font-size="15" font-weight="700" stroke="none" fill="currentColor">As an acceleration</text>
    <text x="580" y="145" text-anchor="middle" font-size="14" stroke="none" fill="currentColor">g = 10 m/s squared</text>
    <text x="580" y="175" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Use in v = u + g x t</text>
    <text x="580" y="205" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Tells you how the velocity</text>
    <text x="580" y="225" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">of a falling object grows.</text>
    <text x="580" y="270" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Example: an apple dropped</text>
    <text x="580" y="290" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">After 2 s of falling, v = 20 m/s.</text>

    <text x="400" y="370" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Same number, 10. The unit you write depends on the job: N/kg for weight, m/s squared for free fall.</text>
  </g>
`

const VELOCITY_TIME_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Velocity of a dropped coin in free fall</text>

    <!-- Axes -->
    <line x1="120" y1="320" x2="120" y2="80" />
    <line x1="120" y1="320" x2="680" y2="320" />
    <polygon points="115,90 120,75 125,90" fill="currentColor" stroke="none" />
    <polygon points="675,315 690,320 675,325" fill="currentColor" stroke="none" />
    <text x="80" y="200" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">v</text>
    <text x="80" y="220" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">(m/s)</text>
    <text x="690" y="345" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">t (s)</text>

    <!-- Tick marks -->
    <line x1="120" y1="320" x2="115" y2="320" />
    <text x="105" y="324" text-anchor="end" font-size="11" stroke="none" fill="currentColor">0</text>
    <line x1="120" y1="280" x2="115" y2="280" />
    <text x="105" y="284" text-anchor="end" font-size="11" stroke="none" fill="currentColor">10</text>
    <line x1="120" y1="240" x2="115" y2="240" />
    <text x="105" y="244" text-anchor="end" font-size="11" stroke="none" fill="currentColor">20</text>
    <line x1="120" y1="200" x2="115" y2="200" />
    <text x="105" y="204" text-anchor="end" font-size="11" stroke="none" fill="currentColor">30</text>
    <line x1="120" y1="160" x2="115" y2="160" />
    <text x="105" y="164" text-anchor="end" font-size="11" stroke="none" fill="currentColor">40</text>

    <line x1="240" y1="320" x2="240" y2="325" />
    <text x="240" y="340" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">1</text>
    <line x1="360" y1="320" x2="360" y2="325" />
    <text x="360" y="340" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">2</text>
    <line x1="480" y1="320" x2="480" y2="325" />
    <text x="480" y="340" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">3</text>
    <line x1="600" y1="320" x2="600" y2="325" />
    <text x="600" y="340" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">4</text>

    <!-- The line: v = 10 t -->
    <line x1="120" y1="320" x2="600" y2="160" />
    <circle cx="240" cy="280" r="5" fill="currentColor" />
    <circle cx="360" cy="240" r="5" fill="currentColor" />
    <circle cx="480" cy="200" r="5" fill="currentColor" />
    <circle cx="600" cy="160" r="5" fill="currentColor" />

    <!-- Gradient label -->
    <text x="430" y="120" font-size="14" font-weight="700" stroke="none" fill="currentColor">gradient = g = 10 m/s squared</text>
    <text x="430" y="140" font-size="13" stroke="none" fill="currentColor">v rises by 10 m/s every second</text>
  </g>
`

export const gravityFreeFall: SkillNode = {
  id: 'physics-gravity-free-fall',
  title: 'Free Fall and Acceleration Due to Gravity',
  description:
    'In free fall, an object is falling under gravity alone, with air resistance small enough to ignore. Near the surface of the Earth, the acceleration of a freely falling object is about 10 m/s squared, the same number as the gravitational field strength of 10 N/kg but used in a different role. Drop something from rest and its downward velocity grows by 10 m/s every second of falling. Use v = u + g x t with u = 0 m/s to find how fast a dropped tennis ball, apple or coin is moving after a chosen time, and read v-t graphs whose gradient is g.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-gravity',
  zoneName: 'Gravity, Weight, Mass',
  tier: 'confident',
  prerequisites: ['physics-gravity-weight-calculation'],
  curriculum: {
    ks3Objective:
      'Gravity force, weight = mass x gravitational field strength (g), on Earth g = 10 N/kg; non-contact forces acting at a distance.',
    awardingBodies: {
      aqa: '4.5.1.2 Mass and weight; 4.5.6.2.3 Acceleration of objects in free fall (GCSE Physics 8463)',
      edexcel:
        'Topic 1 Motion and forces, 1.16-1.17 Weight and free fall; acceleration due to gravity (GCSE Physics 1PH0)',
      ocr: 'P2.1 Motion and forces; free fall and acceleration due to gravity near the Earth (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'gff-scene-dropped-ball',
      title: 'Tennis Ball Off a Kent Roof',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to follow a tennis ball dropped from rest, taking each whole second of falling in turn.',
      data: {
        viewBox: '0 0 800 400',
        svg: DROPPED_BALL_SVG,
        hotspots: [
          {
            id: 'gff-drop-start',
            x: 32,
            y: 25,
            label: 'Released from rest: u = 0 m/s',
            description:
              'A pupil leans off a flat roof in Kent and lets a tennis ball go. No push, no throw. So the starting velocity u is 0 m/s. The clock starts the moment the ball leaves the hand.',
          },
          {
            id: 'gff-drop-1s',
            x: 38,
            y: 44,
            label: 'After 1 s of falling: v = 10 m/s',
            description:
              'Gravity pulls steadily on the ball. After 1 s, the downward velocity is 10 m/s. The ball has gained 10 m/s of speed because g acts as an acceleration of 10 m/s squared.',
          },
          {
            id: 'gff-drop-2s',
            x: 38,
            y: 64,
            label: 'After 2 s of falling: v = 20 m/s',
            description:
              'Every extra second the ball falls, its velocity grows by another 10 m/s. So at 2 s it is moving at 20 m/s, and at 3 s it is moving at 30 m/s. Air resistance is small for a tennis ball over short drops, so we ignore it.',
          },
          {
            id: 'gff-drop-rule',
            x: 50,
            y: 95,
            label: 'The rule: v = u + g x t',
            description:
              'For a dropped object on Earth, u = 0 m/s and g = 10 m/s squared. So v = 10 x t. Multiply t by 10 to get the velocity at that moment.',
          },
        ],
      },
    },
    {
      id: 'gff-scene-two-hats',
      title: 'g Wears Two Hats',
      type: 'labelled-diagram',
      instructions:
        'Click each panel to see the two roles of g: a field strength in N/kg, and an acceleration in m/s squared.',
      data: {
        viewBox: '0 0 800 400',
        svg: G_TWO_HATS_SVG,
        hotspots: [
          {
            id: 'gff-hat-weight',
            x: 28,
            y: 50,
            label: 'g = 10 N/kg, the field strength',
            description:
              'When you find a weight using W = m x g, g is the gravitational field strength of 10 N/kg. It says: every 1 kg of mass on Earth is pulled with 10 N of force.',
          },
          {
            id: 'gff-hat-accel',
            x: 72,
            y: 50,
            label: 'g = 10 m/s squared, the free-fall acceleration',
            description:
              'When an object is falling on Earth with no air resistance, its velocity grows by 10 m/s every second. So g acts as an acceleration of 10 m/s squared. We use this g inside v = u + g x t.',
          },
          {
            id: 'gff-hat-same-number',
            x: 50,
            y: 92,
            label: 'Same number 10, different unit',
            description:
              'The number 10 is the same on both sides. The unit tells you which role g is playing. N/kg for the weight rule, m/s squared for the velocity rule.',
          },
        ],
      },
    },
    {
      id: 'gff-scene-vt-graph',
      title: 'A Velocity-Time Graph for Free Fall',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read the v-t graph for a coin dropped off a pier, taking each whole second in turn.',
      data: {
        viewBox: '0 0 800 400',
        svg: VELOCITY_TIME_SVG,
        hotspots: [
          {
            id: 'gff-vt-axes',
            x: 18,
            y: 60,
            label: 'Axes: time across, velocity up',
            description:
              'Time t goes along the horizontal axis in seconds. The downward velocity v goes up the vertical axis in m/s. We treat downwards as the positive direction here.',
          },
          {
            id: 'gff-vt-point-1',
            x: 30,
            y: 70,
            label: 'At t = 1 s, v = 10 m/s',
            description:
              'A coin dropped off a Brighton pier reaches 10 m/s after 1 s of falling. The dot sits on the line. v = u + g x t = 0 + 10 x 1 = 10 m/s.',
          },
          {
            id: 'gff-vt-point-3',
            x: 60,
            y: 50,
            label: 'At t = 3 s, v = 30 m/s',
            description:
              'After 3 s of falling, v = 0 + 10 x 3 = 30 m/s. Each extra second adds 10 m/s, so the dots step up evenly. This is what a constant acceleration looks like.',
          },
          {
            id: 'gff-vt-gradient',
            x: 55,
            y: 30,
            label: 'Gradient of the line = g',
            description:
              'The line rises by 10 m/s for every 1 s across. That gradient, change in v over change in t, is the acceleration. Here it is 10 m/s squared, which is g on Earth.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'gff-worked-1',
      title: 'A coin dropped off a Brighton pier: v after 2.5 s of falling',
      steps: [
        {
          explanation:
            'Pick out the three quantities. A coin is released from rest off a Brighton pier and falls freely. u = 0 m/s, g = 10 m/s squared on Earth, and the time the coin has been falling is t = 2.5 s. We want the velocity v at that moment.',
        },
        {
          explanation:
            'Check the units. u is in m/s, g is in m/s squared, t is in seconds, so v will come out in m/s. No conversion is needed.',
        },
        {
          explanation:
            'Write the rule. For free fall on Earth, v = u + g x t.',
          maths: 'v = u + g x t',
        },
        {
          explanation: 'Substitute the three numbers.',
          maths: 'v = 0 + 10 x 2.5',
        },
        {
          explanation: 'Evaluate.',
          maths: 'v = 25 m/s',
        },
        {
          explanation:
            'State the answer. After 2.5 s of falling, the coin is moving downwards at 25 m/s. The velocity grew by 10 m/s every second of falling.',
        },
      ],
    },
    {
      id: 'gff-worked-2',
      title: 'A tennis ball off a roof: how long to reach 35 m/s',
      steps: [
        {
          explanation:
            'Pick out the three quantities. A tennis ball is dropped from rest off a flat roof in Kent. u = 0 m/s and g = 10 m/s squared. We want the time t for the downward velocity to reach v = 35 m/s, assuming free fall.',
        },
        {
          explanation:
            'Write the rule. Start from v = u + g x t.',
          maths: 'v = u + g x t',
        },
        {
          explanation:
            'Rearrange for t. Subtract u from both sides, then divide both sides by g.',
          maths: 't = (v - u) / g',
        },
        {
          explanation: 'Substitute the numbers.',
          maths: 't = (35 - 0) / 10',
        },
        {
          explanation: 'Evaluate.',
          maths: 't = 3.5 s',
        },
        {
          explanation:
            'State the answer. The ball reaches 35 m/s after 3.5 s of falling. That works as long as we ignore air resistance, which is a fair assumption for a tennis ball over a short drop.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'gff-q1',
      type: 'multiple-choice',
      stem: 'Which sentence best describes what "free fall" means?',
      tier: 'core',
      options: [
        'An object falling under gravity alone, with air resistance small enough to ignore.',
        'An object falling so steadily that it cannot be tracked by eye.',
        'An object being lowered slowly on a rope.',
        'Any object that is at rest on the ground.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'gff-mis-free-fall-means-any-fall',
      hint: 'Free fall is the special case where gravity is the only force worth counting.',
    },
    {
      id: 'gff-q2',
      type: 'multiple-choice',
      stem: 'On Earth, what is the value and unit of the acceleration of a freely falling object?',
      tier: 'core',
      options: [
        '10 N/kg.',
        '10 m/s.',
        '10 m/s squared.',
        '10 newtons.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'gff-mis-mix-up-g-units',
      hint: 'When g acts as an acceleration, its unit is metres per second per second, written m/s squared.',
    },
    {
      id: 'gff-q3',
      type: 'multiple-choice',
      stem: 'A pupil writes that on Earth "g = 10 N/kg AND g = 10 m/s squared". Which sentence best explains what is going on?',
      tier: 'core',
      options: [
        'The two values are the same number with different units, because g plays two roles: a field strength in W = m x g and an acceleration in v = u + g x t.',
        'The pupil has made a mistake; only one of the two can be right.',
        'g changes from one to the other depending on the weather.',
        'The 10 N/kg is for Earth, the 10 m/s squared is for the Moon.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'gff-mis-mix-up-g-units',
      hint: 'Same number, two units, two jobs. Pick the unit that matches the formula you are using.',
    },
    {
      id: 'gff-q4',
      type: 'numeric-entry',
      stem: 'A tennis ball is dropped from rest off a flat roof in Kent. Ignoring air resistance, what is its downward velocity after 2 s of falling, in m/s? Use g = 10 m/s squared.',
      tier: 'core',
      correctAnswer: 20,
      unit: 'm/s',
      xpValue: 10,
      hint: 'Use v = u + g x t with u = 0, g = 10 and t = 2.',
    },
    {
      id: 'gff-q5',
      type: 'numeric-entry',
      stem: 'An apple drops from a Kent orchard tree. Take u = 0 m/s and g = 10 m/s squared. What is its downward velocity after 0.5 s of falling, in m/s?',
      tier: 'core',
      correctAnswer: 5,
      unit: 'm/s',
      xpValue: 10,
      hint: 'v = u + g x t = 0 + 10 x 0.5.',
    },
    {
      id: 'gff-q6',
      type: 'multiple-choice',
      stem: 'Two pupils argue about a dropped object. Aysha says "When something is dropped, it is moving at 10 m/s the moment you let go." Ben says "It starts at 0 m/s and speeds up by 10 m/s for each second of falling." Who is right?',
      tier: 'core',
      options: [
        'Aysha, because g is 10.',
        'Ben, because u = 0 m/s for a dropped object and the velocity grows by 10 m/s each second.',
        'Both, because both end at 10 m/s.',
        'Neither, the velocity starts at 5 m/s.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'gff-mis-g-is-the-starting-speed',
      hint: 'g is an acceleration, the rate at which v grows. A dropped object starts at u = 0 m/s.',
    },
    {
      id: 'gff-q7',
      type: 'numeric-entry',
      stem: 'A coin is dropped off a Brighton pier and falls freely. Use u = 0 m/s and g = 10 m/s squared. What is its downward velocity after 3 s of falling, in m/s?',
      tier: 'confident',
      correctAnswer: 30,
      unit: 'm/s',
      xpValue: 15,
      hint: 'v = u + g x t with u = 0, g = 10 and t = 3.',
    },
    {
      id: 'gff-q8',
      type: 'numeric-entry',
      stem: 'A small stone is dropped off a low bridge into a stream. Ignoring air resistance, after how many seconds of falling is it moving at 25 m/s? Use g = 10 m/s squared. Give your answer in seconds.',
      tier: 'confident',
      correctAnswer: 2.5,
      unit: 's',
      xpValue: 15,
      hint: 'Rearrange v = u + g x t to t = (v - u) / g. Then t = 25 / 10.',
    },
    {
      id: 'gff-q9',
      type: 'numeric-entry',
      stem: 'A heavy bag and a light bag are both dropped from rest off the same flat roof at the same time. Ignoring air resistance, what is the downward velocity of the lighter bag after 1.5 s of falling, in m/s? Use g = 10 m/s squared.',
      tier: 'confident',
      correctAnswer: 15,
      unit: 'm/s',
      xpValue: 15,
      misconceptionId: 'gff-mis-heavier-falls-faster',
      hint: 'Mass does not appear in v = u + g x t. The lighter bag falls with the same g.',
    },
    {
      id: 'gff-q10',
      type: 'multiple-choice',
      stem: 'In a school lab, a feather and a small lead ball are dropped from the same height in a tall tube with all the air pumped out. What happens?',
      tier: 'confident',
      options: [
        'The lead ball lands well before the feather, because it is heavier.',
        'The feather lands first, because it is lighter and slower.',
        'They land at the same moment, because with no air both fall freely with g = 10 m/s squared.',
        'Neither moves, because there is no air to pull them down.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'gff-mis-heavier-falls-faster',
      hint: 'With air resistance removed, every object falls with the same acceleration g.',
    },
    {
      id: 'gff-q11',
      type: 'multiple-choice',
      stem: 'A pupil is using v = u + g x t for a tennis ball dropped from rest, with g = 10 m/s squared. They write "v = 10 + 10 x 2 = 30 m/s after 2 s". What is the mistake?',
      tier: 'confident',
      options: [
        'They forgot the units.',
        'They used g = 10 instead of g = 9.8.',
        'They should have multiplied by t squared.',
        'They put u = 10 instead of u = 0. A dropped object starts from rest, so u = 0 m/s.',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'gff-mis-g-is-the-starting-speed',
      hint: 'Dropped from rest means the starting velocity u is zero.',
    },
    {
      id: 'gff-q12',
      type: 'multiple-choice',
      stem: 'A v-t graph for a freely falling coin is a straight line through the origin. What does the gradient of that line tell you?',
      tier: 'confident',
      options: [
        'The starting velocity of the coin.',
        'The distance the coin has fallen.',
        'The mass of the coin.',
        'The acceleration of the coin, which here is g = 10 m/s squared.',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'gff-mis-gradient-is-velocity',
      hint: 'Gradient on a v-t graph is change in v over change in t, which is acceleration.',
    },
    {
      id: 'gff-q13',
      type: 'multiple-choice',
      stem: 'On a v-t graph for a falling stone, the line rises by 10 m/s for every 1 s across. Which statement is the best reading of this graph?',
      tier: 'confident',
      options: [
        'The stone is moving at a steady 10 m/s.',
        'The velocity grows by 10 m/s every second, so the acceleration is 10 m/s squared.',
        'The stone covers 10 m every second.',
        'The mass of the stone is 10 kg.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'gff-mis-gradient-is-velocity',
      hint: 'Read change in v divided by change in t. That is the acceleration.',
    },
    {
      id: 'gff-q14',
      type: 'spot-misconception',
      stem: 'Priya says, "A 5 kg rock and a 1 kg rock are dropped at the same time off a roof. The 5 kg rock must hit the ground first, because heavier things fall faster."',
      tier: 'confident',
      statements: [
        {
          text: 'Priya is right. Heavier objects always fall faster than lighter ones.',
          isMisconception: true,
        },
        {
          text: 'Priya is not right. Ignoring air resistance, both rocks fall with the same g = 10 m/s squared, so they land at the same moment.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'gff-mis-heavier-falls-faster',
    },
    {
      id: 'gff-q15',
      type: 'numeric-entry',
      stem: 'A pupil drops a small ball off a balcony at a Sheffield flat. Ignoring air resistance, what is its downward velocity after 4 s of falling, in m/s? Use g = 10 m/s squared.',
      tier: 'challenge',
      correctAnswer: 40,
      unit: 'm/s',
      xpValue: 20,
      misconceptionId: 'gff-mis-terminal-from-start',
      hint: 'v = u + g x t with u = 0, g = 10 and t = 4. The velocity is still growing, so free fall still applies.',
    },
    {
      id: 'gff-q16',
      type: 'multiple-choice',
      stem: 'A teacher writes that a freely falling ball has reached a downward velocity of "20 m/s squared after 2 s of falling". A pupil spots a problem. Which fix is right?',
      tier: 'challenge',
      options: [
        'Change the unit to m/s, because m/s squared is for acceleration, not velocity.',
        'Change the number to 10, because g = 10.',
        'Change "2 s" to "2 m/s", because the time should be in m/s.',
        'Leave it. m/s squared is the right unit for velocity.',
      ],
      correctIndex: 0,
      xpValue: 20,
      misconceptionId: 'gff-mis-mix-up-g-units',
      hint: 'Velocity is in m/s. Acceleration is in m/s squared. Match the unit to the quantity.',
    },
    {
      id: 'gff-q17',
      type: 'multiple-choice',
      stem: 'A pupil drops a sheet of paper and a small stone off the same flat roof in Kent. The stone lands well before the paper. Which sentence is the best explanation?',
      tier: 'challenge',
      options: [
        'The stone is heavier, so it has a larger g.',
        'The paper has a much larger area, so air resistance is not small for the paper. It is not in free fall in the everyday sense; the stone almost is.',
        'The paper is repelled by gravity.',
        'g is smaller on light objects.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'gff-mis-free-fall-means-any-fall',
      hint: 'Free fall ignores air resistance. A flat sheet of paper has too much air drag to ignore.',
    },
    {
      id: 'gff-q18',
      type: 'spot-misconception',
      stem: 'Marcus says, "On a v-t graph for a freely falling coin, the gradient of the line is the velocity of the coin."',
      tier: 'challenge',
      statements: [
        {
          text: 'Marcus is right. Gradient on a v-t graph always means velocity.',
          isMisconception: true,
        },
        {
          text: 'Marcus is not right. The gradient of a v-t graph is the acceleration, which for free fall on Earth is g = 10 m/s squared. The height of the line is the velocity.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'gff-mis-gradient-is-velocity',
    },
    {
      id: 'gff-q19',
      type: 'drag-order',
      stem: 'Put the steps in the right order for working out the downward velocity of a dropped object using free fall.',
      tier: 'challenge',
      items: [
        'Substitute u, g and t into v = u + g x t, evaluate, and state the answer in m/s.',
        'Pick out u, g and t from the question, with their units (and set u = 0 m/s for a dropped object).',
        'Check that air resistance is small enough to ignore, so we are dealing with free fall.',
        'Write the rule for free fall: v = u + g x t.',
      ],
      correctOrder: [2, 1, 3, 0],
      xpValue: 20,
      hint: 'Check the free-fall assumption first, then list the quantities, then write the rule, then do the arithmetic.',
    },
    {
      id: 'gff-q20',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is working out how long a dropped pebble takes to reach a downward velocity of 18 m/s in free fall on Earth.',
      tier: 'challenge',
      steps: [
        'List the three quantities: u = 0 m/s, g = 10 m/s squared, v = 18 m/s. We want t.',
        'Check the assumption. The pebble is small and dense, the drop is short, so air resistance is small. Free fall is a fair model.',
        'Write the rule: v = u + g x t.',
        null,
        'Substitute and evaluate: t = (18 - 0) / 10 = 1.8 s.',
        'State the answer: after 1.8 s of falling, the pebble is moving at 18 m/s downwards.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Rearrange for t. Subtract u from both sides, then divide both sides by g, giving t = (v - u) / g.',
      xpValue: 20,
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 1F, candidates wrote that any falling object is in "free fall" without flagging air resistance, then used g = 10 m/s squared for a sheet of paper.
    {
      id: 'gff-mis-free-fall-means-any-fall',
      description:
        'Treating "free fall" as any fall, missing that the term assumes air resistance is small enough to ignore.',
      triggerAnswer: 'free-fall-means-any-fall',
      correction:
        'Free fall means falling under gravity alone, with air resistance small enough to ignore. A flat sheet of paper has too much air drag to count as free fall.',
      reExplanation:
        'A stone and a flat sheet of paper dropped off the same Kent roof do not land together. The stone almost is in free fall; the paper is not, because its shape catches air. Free fall fits dense, small objects over short drops, or any object in a tube with the air pumped out. The label tells you g = 10 m/s squared is safe to use.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2021, Paper J259/02, candidates lost marks by quoting g with the wrong unit, writing 10 N/kg as the acceleration or 10 m/s squared as the field strength.
    {
      id: 'gff-mis-mix-up-g-units',
      description:
        'Quoting g with the wrong unit for the job, writing 10 N/kg as an acceleration or 10 m/s squared as a field strength.',
      triggerAnswer: 'mix-up-g-units',
      correction:
        'Use g = 10 N/kg as a field strength in W = m x g. Use g = 10 m/s squared as an acceleration in v = u + g x t.',
      reExplanation:
        'A 2 kg melon on Earth has weight W = 2 x 10 = 20 N, using g as 10 N/kg. The same melon in free fall gains 10 m/s of downward velocity each second, using g as 10 m/s squared. The number is the same at the same place. The unit you write tells the reader which role g is playing.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2019, Paper 1PH0/1F, candidates wrote v = g + g x t for dropped objects, confusing the value of g with the starting velocity u.
    {
      id: 'gff-mis-g-is-the-starting-speed',
      description:
        'Setting the starting velocity u of a dropped object to 10 m/s rather than 0 m/s, confusing the value of g with u.',
      triggerAnswer: 'g-is-the-starting-speed',
      correction:
        'A dropped object starts from rest, so u = 0 m/s. The value of g sets how fast the velocity grows each second, not the velocity at the moment of release.',
      reExplanation:
        'When you let a tennis ball go off a roof, you do not push it. At the moment of release, v is 0 m/s. After 1 s of falling, v = 0 + 10 x 1 = 10 m/s. The 10 in g is an acceleration, not a starting speed. Writing u = 10 m/s would give 20 m/s after 1 s, which is wrong.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, Paper 1F, on free-fall questions; many candidates wrote that heavier objects fall faster, missing the result that all objects in free fall share the same g.
    {
      id: 'gff-mis-heavier-falls-faster',
      description:
        'Claiming that a heavier object falls faster than a lighter one in free fall, missing that mass does not appear in v = u + g x t.',
      triggerAnswer: 'heavier-falls-faster',
      correction:
        'In free fall, the acceleration is g for every mass, so a 5 kg rock and a 1 kg rock dropped together reach the ground at the same moment.',
      reExplanation:
        'The rule v = u + g x t has no m in it. Mass cancels out of free-fall maths. A heavier rock has more weight, but also more mass to shift, and the two effects cancel. In a tube with the air pumped out, a feather and a lead ball reach the bottom together. In everyday life the lighter object loses to air resistance, not to gravity.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2022, J259/02, candidates read the gradient of a v-t graph as a velocity rather than an acceleration, treating "rising line" as "speed".
    {
      id: 'gff-mis-gradient-is-velocity',
      description:
        'Reading the gradient of a v-t graph as the velocity of the object, missing that the gradient is the acceleration.',
      triggerAnswer: 'gradient-is-velocity',
      correction:
        'On a v-t graph, the height of the line is the velocity, but the gradient is the acceleration. For free fall on Earth that gradient is g = 10 m/s squared.',
      reExplanation:
        'Pick two points on the line for a falling coin: at t = 1 s the height is 10 m/s, at t = 3 s the height is 30 m/s. The change in height is 30 - 10 = 20; the change in time is 3 - 1 = 2; gradient is 20 / 2 = 10. That is m/s per s, written m/s squared, the unit of acceleration.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2018, Paper 1PH0/1F, candidates assumed terminal velocity ideas applied from the moment of release, missing that a small dense object dropped over a short distance can be modelled as free fall.
    {
      id: 'gff-mis-terminal-from-start',
      description:
        'Assuming a dropped object reaches a steady terminal velocity straight away, missing that for short drops of small dense objects the model is free fall with v = u + g x t.',
      triggerAnswer: 'terminal-from-start',
      correction:
        'Terminal velocity needs time for air resistance to grow as the object speeds up. For short drops of small dense objects, free fall with constant g is a fair model.',
      reExplanation:
        'A coin dropped off a pier reaches 10 m/s after 1 s and 30 m/s after 3 s. Its velocity is still growing, so it is not at terminal velocity. Terminal velocity only kicks in once air drag matches the weight, which needs a much longer drop. For most school examples, free fall is the right model.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const gravityFreeFallZoneNodes = [gravityFreeFall]
