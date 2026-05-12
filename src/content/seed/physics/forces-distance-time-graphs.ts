import type { SkillNode } from '@/types/content'

// Scene 1: walk to a Sevenoaks bus stop with a pause at a crossing.
// x-axis time 0..50 s (gridlines every 10 s), y-axis distance 0..100 m (every 20 m).
// Journey: A(0,0) -> B(10,50) -> C(20,50) -> D(50,80).
//   Segment 1 (A->B): 50 m in 10 s, speed 5 m/s.
//   Segment 2 (B->C): horizontal, stationary 10 s at the crossing.
//   Segment 3 (C->D): 30 m in 30 s, speed 1 m/s.
const BUS_STOP_WALK_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Walk to a Sevenoaks bus stop, with a pause at a crossing</text>

    <line x1="100" y1="320" x2="700" y2="320" stroke-width="2" />
    <line x1="100" y1="60" x2="100" y2="320" stroke-width="2" />

    <line x1="220" y1="320" x2="220" y2="60" stroke-width="0.5" opacity="0.4" />
    <line x1="340" y1="320" x2="340" y2="60" stroke-width="0.5" opacity="0.4" />
    <line x1="460" y1="320" x2="460" y2="60" stroke-width="0.5" opacity="0.4" />
    <line x1="580" y1="320" x2="580" y2="60" stroke-width="0.5" opacity="0.4" />
    <line x1="700" y1="320" x2="700" y2="60" stroke-width="0.5" opacity="0.4" />

    <line x1="100" y1="268" x2="700" y2="268" stroke-width="0.5" opacity="0.4" />
    <line x1="100" y1="216" x2="700" y2="216" stroke-width="0.5" opacity="0.4" />
    <line x1="100" y1="164" x2="700" y2="164" stroke-width="0.5" opacity="0.4" />
    <line x1="100" y1="112" x2="700" y2="112" stroke-width="0.5" opacity="0.4" />
    <line x1="100" y1="60" x2="700" y2="60" stroke-width="0.5" opacity="0.4" />

    <text x="100" y="340" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">0</text>
    <text x="220" y="340" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">10</text>
    <text x="340" y="340" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">20</text>
    <text x="460" y="340" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">30</text>
    <text x="580" y="340" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">40</text>
    <text x="700" y="340" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">50</text>
    <text x="400" y="365" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Time (seconds)</text>

    <text x="88" y="324" text-anchor="end" font-size="12" stroke="none" fill="currentColor">0</text>
    <text x="88" y="272" text-anchor="end" font-size="12" stroke="none" fill="currentColor">20</text>
    <text x="88" y="220" text-anchor="end" font-size="12" stroke="none" fill="currentColor">40</text>
    <text x="88" y="168" text-anchor="end" font-size="12" stroke="none" fill="currentColor">60</text>
    <text x="88" y="116" text-anchor="end" font-size="12" stroke="none" fill="currentColor">80</text>
    <text x="88" y="64" text-anchor="end" font-size="12" stroke="none" fill="currentColor">100</text>
    <text x="40" y="190" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor" transform="rotate(-90 40 190)">Distance (metres)</text>

    <polyline points="100,320 220,190 340,190 700,112" stroke-width="3" />

    <circle cx="100" cy="320" r="4" fill="currentColor" stroke="none" />
    <circle cx="220" cy="190" r="4" fill="currentColor" stroke="none" />
    <circle cx="340" cy="190" r="4" fill="currentColor" stroke="none" />
    <circle cx="700" cy="112" r="4" fill="currentColor" stroke="none" />

    <text x="160" y="240" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">A to B</text>
    <text x="280" y="180" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">B to C</text>
    <text x="520" y="140" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">C to D</text>
  </g>
`

// Scene 2: two Sevenoaks cyclists ride from rest along the same flat road for 60 s.
// x-axis time 0..60 s (every 10 s), y-axis distance 0..240 m (every 40 m).
// Cyclist A line: (0,0) -> (60, 240). Speed 240/60 = 4 m/s.
// Cyclist B line: (0,0) -> (60, 120). Speed 120/60 = 2 m/s.
// The steeper line (A) is the faster cyclist.
const TWO_CYCLISTS_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Two Sevenoaks cyclists on the same flat road</text>

    <line x1="100" y1="320" x2="700" y2="320" stroke-width="2" />
    <line x1="100" y1="60" x2="100" y2="320" stroke-width="2" />

    <line x1="200" y1="320" x2="200" y2="60" stroke-width="0.5" opacity="0.4" />
    <line x1="300" y1="320" x2="300" y2="60" stroke-width="0.5" opacity="0.4" />
    <line x1="400" y1="320" x2="400" y2="60" stroke-width="0.5" opacity="0.4" />
    <line x1="500" y1="320" x2="500" y2="60" stroke-width="0.5" opacity="0.4" />
    <line x1="600" y1="320" x2="600" y2="60" stroke-width="0.5" opacity="0.4" />
    <line x1="700" y1="320" x2="700" y2="60" stroke-width="0.5" opacity="0.4" />

    <line x1="100" y1="277" x2="700" y2="277" stroke-width="0.5" opacity="0.4" />
    <line x1="100" y1="234" x2="700" y2="234" stroke-width="0.5" opacity="0.4" />
    <line x1="100" y1="190" x2="700" y2="190" stroke-width="0.5" opacity="0.4" />
    <line x1="100" y1="147" x2="700" y2="147" stroke-width="0.5" opacity="0.4" />
    <line x1="100" y1="104" x2="700" y2="104" stroke-width="0.5" opacity="0.4" />
    <line x1="100" y1="60" x2="700" y2="60" stroke-width="0.5" opacity="0.4" />

    <text x="100" y="340" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">0</text>
    <text x="200" y="340" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">10</text>
    <text x="300" y="340" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">20</text>
    <text x="400" y="340" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">30</text>
    <text x="500" y="340" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">40</text>
    <text x="600" y="340" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">50</text>
    <text x="700" y="340" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">60</text>
    <text x="400" y="365" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Time (seconds)</text>

    <text x="88" y="324" text-anchor="end" font-size="12" stroke="none" fill="currentColor">0</text>
    <text x="88" y="281" text-anchor="end" font-size="12" stroke="none" fill="currentColor">40</text>
    <text x="88" y="238" text-anchor="end" font-size="12" stroke="none" fill="currentColor">80</text>
    <text x="88" y="194" text-anchor="end" font-size="12" stroke="none" fill="currentColor">120</text>
    <text x="88" y="151" text-anchor="end" font-size="12" stroke="none" fill="currentColor">160</text>
    <text x="88" y="108" text-anchor="end" font-size="12" stroke="none" fill="currentColor">200</text>
    <text x="88" y="64" text-anchor="end" font-size="12" stroke="none" fill="currentColor">240</text>
    <text x="40" y="190" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor" transform="rotate(-90 40 190)">Distance (metres)</text>

    <polyline points="100,320 700,60" stroke-width="3" />
    <polyline points="100,320 700,190" stroke-width="3" stroke-dasharray="6 4" />

    <text x="640" y="80" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Cyclist A</text>
    <text x="640" y="210" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Cyclist B</text>
  </g>
`

// Scene 3: walk from a Dover home to a corner shop and back again.
// x-axis time 0..30 min (every 5 min), y-axis distance 0..600 m (every 100 m).
// Journey: A(0,0) -> B(10, 600) -> C(20, 600) -> D(30, 0).
//   A->B: 600 m out in 10 min, speed 60 m/min.
//   B->C: in the shop, stationary 10 min.
//   C->D: returns to 0 in 10 min, walking back at 60 m/min.
const SHOP_AND_BACK_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Walk to a Dover corner shop and back home</text>

    <line x1="100" y1="320" x2="700" y2="320" stroke-width="2" />
    <line x1="100" y1="60" x2="100" y2="320" stroke-width="2" />

    <line x1="200" y1="320" x2="200" y2="60" stroke-width="0.5" opacity="0.4" />
    <line x1="300" y1="320" x2="300" y2="60" stroke-width="0.5" opacity="0.4" />
    <line x1="400" y1="320" x2="400" y2="60" stroke-width="0.5" opacity="0.4" />
    <line x1="500" y1="320" x2="500" y2="60" stroke-width="0.5" opacity="0.4" />
    <line x1="600" y1="320" x2="600" y2="60" stroke-width="0.5" opacity="0.4" />
    <line x1="700" y1="320" x2="700" y2="60" stroke-width="0.5" opacity="0.4" />

    <line x1="100" y1="277" x2="700" y2="277" stroke-width="0.5" opacity="0.4" />
    <line x1="100" y1="233" x2="700" y2="233" stroke-width="0.5" opacity="0.4" />
    <line x1="100" y1="190" x2="700" y2="190" stroke-width="0.5" opacity="0.4" />
    <line x1="100" y1="147" x2="700" y2="147" stroke-width="0.5" opacity="0.4" />
    <line x1="100" y1="103" x2="700" y2="103" stroke-width="0.5" opacity="0.4" />
    <line x1="100" y1="60" x2="700" y2="60" stroke-width="0.5" opacity="0.4" />

    <text x="100" y="340" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">0</text>
    <text x="200" y="340" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">5</text>
    <text x="300" y="340" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">10</text>
    <text x="400" y="340" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">15</text>
    <text x="500" y="340" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">20</text>
    <text x="600" y="340" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">25</text>
    <text x="700" y="340" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">30</text>
    <text x="400" y="365" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Time (minutes)</text>

    <text x="88" y="324" text-anchor="end" font-size="12" stroke="none" fill="currentColor">0</text>
    <text x="88" y="281" text-anchor="end" font-size="12" stroke="none" fill="currentColor">100</text>
    <text x="88" y="237" text-anchor="end" font-size="12" stroke="none" fill="currentColor">200</text>
    <text x="88" y="194" text-anchor="end" font-size="12" stroke="none" fill="currentColor">300</text>
    <text x="88" y="151" text-anchor="end" font-size="12" stroke="none" fill="currentColor">400</text>
    <text x="88" y="107" text-anchor="end" font-size="12" stroke="none" fill="currentColor">500</text>
    <text x="88" y="64" text-anchor="end" font-size="12" stroke="none" fill="currentColor">600</text>
    <text x="40" y="190" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor" transform="rotate(-90 40 190)">Distance from home (metres)</text>

    <polyline points="100,320 300,60 500,60 700,320" stroke-width="3" />

    <circle cx="100" cy="320" r="4" fill="currentColor" stroke="none" />
    <circle cx="300" cy="60" r="4" fill="currentColor" stroke="none" />
    <circle cx="500" cy="60" r="4" fill="currentColor" stroke="none" />
    <circle cx="700" cy="320" r="4" fill="currentColor" stroke="none" />

    <text x="200" y="170" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Walking out</text>
    <text x="400" y="50" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">In the shop</text>
    <text x="600" y="170" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Walking back</text>
  </g>
`

export const forcesDistanceTimeGraphs: SkillNode = {
  id: 'physics-forces-distance-time-graphs',
  title: 'Distance-Time Graphs',
  description:
    'Read a journey from a distance-time graph: time on the x axis and distance on the y axis. A horizontal segment means the object is still, a sloping segment means it is moving at constant speed, and a steeper slope means faster. Calculate the speed of a segment as gradient: change in distance divided by change in time, with matched units. Spot a segment that returns toward the start and read it as a journey back, not a negative speed.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-forces',
  zoneName: 'Forces',
  tier: 'confident',
  prerequisites: ['physics-forces-speed-distance-time'],
  curriculum: {
    ks3Objective: 'The representation of a journey on a distance-time graph.',
    awardingBodies: {
      aqa: '4.5.6.1.4 Distance-time relationship; gradient of a distance-time graph as speed (GCSE Physics 8463)',
      edexcel:
        'Topic 1 Motion and forces, 1.2-1.3 Distance-time graphs; calculate speed from a distance-time graph (GCSE Physics 1PH0)',
      ocr: 'P2.1 Motion; interpreting distance-time graphs, gradient as speed (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'fdtg-scene-bus-stop-walk',
      title: 'Reading a Three-Segment Journey',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read off what the line says about a walk to a Sevenoaks bus stop, including a pause at a crossing.',
      data: {
        viewBox: '0 0 800 400',
        svg: BUS_STOP_WALK_SVG,
        hotspots: [
          {
            id: 'fdtg-bus-axes',
            x: 50,
            y: 92,
            label: 'Axes: time across, distance up',
            description:
              'Time in seconds runs along the x axis, from 0 s to 50 s. Distance walked in metres runs up the y axis, from 0 m to 100 m. Each gridline across is 10 s and each gridline up is 20 m.',
          },
          {
            id: 'fdtg-bus-seg1',
            x: 20,
            y: 60,
            label: 'A to B: walking',
            description:
              'From 0 s to 10 s the line rises from 0 m to 50 m. The walker covers 50 m in 10 s. The gradient is 50 divided by 10, which is 5 m/s.',
          },
          {
            id: 'fdtg-bus-seg2',
            x: 35,
            y: 45,
            label: 'B to C: stationary',
            description:
              'From 10 s to 20 s the line is flat at 50 m. The distance from the start is not changing. The walker has stopped, perhaps waiting at a crossing, for 10 s.',
          },
          {
            id: 'fdtg-bus-seg3',
            x: 65,
            y: 35,
            label: 'C to D: walking more slowly',
            description:
              'From 20 s to 50 s the line rises from 50 m to 80 m. That is 30 m in 30 s, a gradient of 1 m/s. This segment is less steep than A to B, so the walker is moving more slowly.',
          },
          {
            id: 'fdtg-bus-rule',
            x: 50,
            y: 18,
            label: 'Rule: speed equals gradient',
            description:
              'Speed for any straight segment equals the change in distance divided by the change in time over that segment. A flat line means zero speed; a steeper line means a faster speed.',
          },
        ],
      },
    },
    {
      id: 'fdtg-scene-two-cyclists',
      title: 'Steeper Means Faster',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare two lines on the same axes: the steeper line belongs to the faster cyclist.',
      data: {
        viewBox: '0 0 800 400',
        svg: TWO_CYCLISTS_SVG,
        hotspots: [
          {
            id: 'fdtg-two-axes',
            x: 50,
            y: 92,
            label: 'Same axes for both cyclists',
            description:
              'Time in seconds along the x axis, from 0 s to 60 s. Distance in metres up the y axis, from 0 m to 240 m. Both lines start at the origin and both are straight, so each cyclist rides at a steady speed.',
          },
          {
            id: 'fdtg-two-aspeed',
            x: 78,
            y: 22,
            label: 'Cyclist A: gradient 4 m/s',
            description:
              'Cyclist A covers 240 m in 60 s. Speed is 240 divided by 60, which is 4 m/s. This is the steeper of the two lines.',
          },
          {
            id: 'fdtg-two-bspeed',
            x: 78,
            y: 55,
            label: 'Cyclist B: gradient 2 m/s',
            description:
              'Cyclist B covers 120 m in the same 60 s. Speed is 120 divided by 60, which is 2 m/s. This line is less steep.',
          },
          {
            id: 'fdtg-two-compare',
            x: 50,
            y: 75,
            label: 'Compare at 30 s',
            description:
              'At 30 s, cyclist A has reached 120 m while cyclist B has reached 60 m. The steeper line is always further from the time axis at any given moment, so the steeper line is the faster journey.',
          },
        ],
      },
    },
    {
      id: 'fdtg-scene-shop-and-back',
      title: 'Coming Back Toward Home',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read a journey that goes out, stops, and comes back. The y axis shows distance from home, so a line falling back to zero means walking home.',
      data: {
        viewBox: '0 0 800 400',
        svg: SHOP_AND_BACK_SVG,
        hotspots: [
          {
            id: 'fdtg-shop-axes',
            x: 50,
            y: 92,
            label: 'Axes: minutes and metres from home',
            description:
              'Time in minutes runs from 0 to 30 along the x axis. The y axis shows distance from home, from 0 m to 600 m. The walker starts at home, which is why the line begins at the origin.',
          },
          {
            id: 'fdtg-shop-out',
            x: 25,
            y: 42,
            label: 'Walking out: 60 m/min',
            description:
              'From 0 min to 10 min the line rises from 0 m to 600 m. That is a gradient of 600 divided by 10, which is 60 m/min. The walker moves away from home at a steady speed.',
          },
          {
            id: 'fdtg-shop-rest',
            x: 50,
            y: 12,
            label: 'In the shop: flat line',
            description:
              'From 10 min to 20 min the line is flat at 600 m. Distance from home is not changing, so the walker is still. They are inside the shop for 10 min. A flat segment never means the walker is heading back, only that they have stopped.',
          },
          {
            id: 'fdtg-shop-back',
            x: 75,
            y: 42,
            label: 'Walking back home',
            description:
              'From 20 min to 30 min the line falls from 600 m to 0 m. The walker is heading back to the start. The speed back is 600 divided by 10, which is 60 m/min: the same speed as on the way out. The line tilts down because distance from home is dropping, not because the walker has a negative speed.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'fdtg-worked-1',
      title: 'Reading a speed from the gradient of a straight segment',
      steps: [
        {
          explanation:
            'Pick a single straight segment of the line. We will use the first segment of the bus-stop walk, from A at (0 s, 0 m) to B at (10 s, 50 m).',
        },
        {
          explanation:
            'Read off the change in distance. Distance goes from 0 m at A to 50 m at B, a change of 50 m up the y axis.',
          maths: 'Change in distance = 50 - 0 = 50 m',
        },
        {
          explanation:
            'Read off the change in time. Time goes from 0 s at A to 10 s at B, a change of 10 s across the x axis.',
          maths: 'Change in time = 10 - 0 = 10 s',
        },
        {
          explanation:
            'Apply the rule: speed equals change in distance divided by change in time. The order matters: distance on top, time on the bottom.',
          maths: 'Speed = 50 m / 10 s = 5 m/s',
        },
        {
          explanation:
            'Check the units. Distance was in metres and time was in seconds, so the speed comes out in metres per second. No conversion is needed inside this segment.',
        },
        {
          explanation:
            'State the result. The walker covers the first 50 m at a steady 5 m/s.',
        },
      ],
    },
    {
      id: 'fdtg-worked-2',
      title: 'Interpreting a flat segment as a rest, not a return',
      steps: [
        {
          explanation:
            'Pick the second segment of the bus-stop walk. The line goes from B at (10 s, 50 m) to C at (20 s, 50 m). The y value does not change.',
        },
        {
          explanation:
            'Read off the change in distance. Distance stays at 50 m from B to C, so the change is zero metres.',
          maths: 'Change in distance = 50 - 50 = 0 m',
        },
        {
          explanation:
            'Apply the rule. Speed equals change in distance divided by change in time. Zero divided by a positive number is zero.',
          maths: 'Speed = 0 m / 10 s = 0 m/s',
        },
        {
          explanation:
            'Say what this means in plain English. A speed of zero means the walker is not moving. The flat segment is a rest, perhaps a pause at a crossing.',
        },
        {
          explanation:
            'Watch the trap. A flat segment on a distance-time graph means standing still, not walking back to the start. Walking back would tilt the line down toward the x axis, not keep it level.',
        },
        {
          explanation:
            'State the result. From 10 s to 20 s the walker is stationary, with a speed of 0 m/s.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'fdtg-q1',
      type: 'multiple-choice',
      stem: 'A pupil draws a distance-time graph for a Sevenoaks bus journey. Which axis usually shows the time?',
      tier: 'core',
      options: [
        'The y axis (the vertical axis)',
        'The x axis (the horizontal axis)',
        'Neither, time is shown by the colour of the line.',
        'Both axes show time on a distance-time graph.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'fdtg-mis-axes-swapped',
      hint: 'Distance is plotted up; the other quantity goes across.',
    },
    {
      id: 'fdtg-q2',
      type: 'multiple-choice',
      stem: 'On a distance-time graph the line is horizontal (flat) for 30 seconds. What is happening during that segment?',
      tier: 'core',
      options: [
        'The object is moving at a constant speed.',
        'The object is moving back toward the start.',
        'The object is standing still.',
        'The object is speeding up.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'fdtg-mis-flat-means-back',
      hint: 'A flat segment means the distance from the start is not changing. Has the object moved?',
    },
    {
      id: 'fdtg-q3',
      type: 'multiple-choice',
      stem: 'Two cyclists ride along the same flat road and their distance-time graphs are drawn on the same axes. Which line belongs to the faster cyclist?',
      tier: 'core',
      options: [
        'The flatter line.',
        'The steeper line.',
        'The line that starts lower on the y axis.',
        'The line plotted in a darker colour.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'fdtg-mis-flat-is-fast',
      hint: 'Speed equals change in distance divided by change in time. A steeper line covers more distance in the same time.',
    },
    {
      id: 'fdtg-q4',
      type: 'multiple-choice',
      stem: 'Which of these is the correct rule for working out the speed of a straight segment on a distance-time graph?',
      tier: 'core',
      options: [
        'Speed = time divided by distance, read from the segment.',
        'Speed = change in time divided by change in distance, over that segment.',
        'Speed = change in distance divided by change in time, over that segment.',
        'Speed = change in distance multiplied by change in time, over that segment.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'fdtg-mis-gradient-upside-down',
      hint: 'Gradient is rise over run: the rise (distance) goes on top, the run (time) on the bottom.',
    },
    {
      id: 'fdtg-q5',
      type: 'numeric-entry',
      stem: 'On a distance-time graph, a straight segment runs from (0 s, 0 m) to (10 s, 50 m). What is the speed during this segment, in metres per second?',
      tier: 'core',
      correctAnswer: 5,
      unit: 'm/s',
      xpValue: 10,
      hint: 'Speed = change in distance / change in time = 50 m / 10 s.',
    },
    {
      id: 'fdtg-q6',
      type: 'numeric-entry',
      stem: 'A straight segment on a distance-time graph runs from (0 s, 0 m) to (20 s, 80 m). What is the speed of the moving object, in metres per second?',
      tier: 'core',
      correctAnswer: 4,
      unit: 'm/s',
      xpValue: 10,
      hint: 'Read off the change in distance (80 m) and the change in time (20 s), then divide.',
    },
    {
      id: 'fdtg-q7',
      type: 'multiple-choice',
      stem: 'A pupil sees a distance-time graph where the line falls from (20 min, 600 m) back down to (30 min, 0 m). Which statement best describes this segment?',
      tier: 'core',
      options: [
        'The object has a negative speed of 60 m/min.',
        'The object is heading back toward its starting point at 60 m/min.',
        'The object is standing still for 10 min.',
        'The object is speeding up as it moves away.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'fdtg-mis-back-is-negative-speed',
      hint: 'The y axis shows distance from the start. If that distance is dropping, where is the object heading?',
    },
    {
      id: 'fdtg-q8',
      type: 'numeric-entry',
      stem: 'On the same distance-time graph as the previous question, the object covers 600 m on the way back in 10 min. What is its speed on the return segment, in metres per minute?',
      tier: 'confident',
      correctAnswer: 60,
      unit: 'm/min',
      xpValue: 15,
      misconceptionId: 'fdtg-mis-back-is-negative-speed',
      hint: 'Speed has size only. Divide the 600 m covered by the 10 min taken.',
    },
    {
      id: 'fdtg-q9',
      type: 'multiple-choice',
      stem: 'A distance-time graph for a Sevenoaks walker has three segments. The first is steep, the second is flat, and the third is less steep than the first. What is the order of how fast the walker is moving on each segment?',
      tier: 'confident',
      options: [
        'Segment 1 fastest, segment 2 slowest (standing still), segment 3 in between.',
        'Segment 2 fastest, segment 1 in between, segment 3 slowest.',
        'All three segments are at the same speed because they are on the same graph.',
        'Segment 3 fastest, segment 1 in between, segment 2 slowest.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'fdtg-mis-steep-is-fast-everywhere',
      hint: 'Each segment has its own gradient. Compare gradients only between segments, not across the whole graph.',
    },
    {
      id: 'fdtg-q10',
      type: 'numeric-entry',
      stem: 'A walk to a bus stop has a straight segment from (20 s, 50 m) to (50 s, 80 m). What is the speed during this segment, in metres per second?',
      tier: 'confident',
      correctAnswer: 1,
      unit: 'm/s',
      xpValue: 15,
      hint: 'Change in distance is 80 - 50 = 30 m. Change in time is 50 - 20 = 30 s.',
    },
    {
      id: 'fdtg-q11',
      type: 'spot-misconception',
      stem: 'Priya looks at a distance-time graph that is flat at 200 m between 5 s and 15 s. She says, "The line is flat at 200 m, so the object is moving at 200 metres per second during those 10 seconds."',
      tier: 'confident',
      statements: [
        {
          text: 'Priya is right. The 200 on the y axis tells you the speed of the object during the flat segment.',
          isMisconception: true,
        },
        {
          text: 'Priya is not right. The 200 m on the y axis is the distance from the start, not the speed. A flat segment means the speed is 0 m/s.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fdtg-mis-y-value-is-speed',
    },
    {
      id: 'fdtg-q12',
      type: 'spot-misconception',
      stem: 'Tom looks at a distance-time graph with three segments: steep up, then less steep up, then flat. He says, "The first segment is steep, so the whole journey is fast. The walker is moving fast all the way through."',
      tier: 'confident',
      statements: [
        {
          text: 'Tom is right. A steep first segment tells you the whole journey is fast.',
          isMisconception: true,
        },
        {
          text: 'Tom is not right. Each segment has its own gradient. The first is fast, the second is slower, and the flat one is stationary. You read the speed segment by segment.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fdtg-mis-steep-is-fast-everywhere',
    },
    {
      id: 'fdtg-q13',
      type: 'multiple-choice',
      stem: 'A pupil writes "the speed is 10/40" while reading a segment that goes from (0 s, 0 m) to (40 s, 10 m). What error has the pupil made?',
      tier: 'challenge',
      options: [
        'No error. 10/40 = 0.25 m/s is the right answer.',
        'They have used the wrong units; the line is in kilometres, not metres.',
        'They have written time divided by distance instead of distance divided by time. It should be 10 m divided by 40 s, not the other way round, although the digits match.',
        'They have read the gradient as distance divided by time when it should be time divided by distance.',
      ],
      correctIndex: 0,
      xpValue: 20,
      hint: 'Check whether the value 10 is the change in distance or the change in time. The format distance/time gives 10 m / 40 s = 0.25 m/s, which is what the pupil wrote.',
    },
    {
      id: 'fdtg-q14',
      type: 'numeric-entry',
      stem: 'A straight segment runs from (0 min, 0 km) to (4 min, 2 km). What is the speed during this segment, in kilometres per minute?',
      tier: 'confident',
      correctAnswer: 0.5,
      unit: 'km/min',
      tolerance: 0.01,
      xpValue: 15,
      hint: 'Speed = 2 km / 4 min = 0.5 km/min. Keep the units as they appear on the axes.',
    },
    {
      id: 'fdtg-q15',
      type: 'drag-order',
      stem: 'Drag the steps for reading the speed of a straight segment on a distance-time graph into the correct order.',
      tier: 'confident',
      items: [
        'Divide the change in distance by the change in time. The result is the speed.',
        'Pick a single straight segment of the line. Note its start and end coordinates.',
        'Write the units of the answer using the units from the two axes, for example m/s or km/min.',
        'Work out the change in distance (rise) and the change in time (run) between the two coordinates.',
      ],
      correctOrder: [1, 3, 0, 2],
      xpValue: 20,
      misconceptionId: 'fdtg-mis-gradient-upside-down',
      hint: 'Start by picking a segment, then read off the rise and the run, then divide, then label the units.',
    },
    {
      id: 'fdtg-q16',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil reads the speed of a segment that runs from (0 s, 0 m) to (5 s, 30 m).',
      tier: 'confident',
      steps: [
        'Pick the segment. The two end points are at (0 s, 0 m) and (5 s, 30 m).',
        'Change in distance = 30 - 0 = 30 m. Change in time = 5 - 0 = 5 s.',
        null,
        'Speed = 30 m / 5 s = 6 m/s.',
        'Label the answer in m/s, the units that come from metres and seconds on the two axes.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Apply the rule: speed equals change in distance divided by change in time, with distance on top.',
      xpValue: 20,
    },
    {
      id: 'fdtg-q17',
      type: 'multiple-choice',
      stem: 'A ScotRail train journey is drawn on a distance-time graph. The first segment is straight and rises steadily. The second segment is flat for a few minutes while the train sits at a station. The third segment rises again, more steeply than the first. Which sentence is correct?',
      tier: 'challenge',
      options: [
        'The train moves at the same speed during the first and third segments because the line is straight in both.',
        'The train moves backwards during the flat segment because the gradient is zero.',
        'The train is moving fastest during the first segment because steep lines come first on a graph.',
        'The train is moving fastest during the third segment because that line is the steepest on the graph.',
      ],
      correctIndex: 3,
      xpValue: 20,
      misconceptionId: 'fdtg-mis-flat-is-fast',
      hint: 'Compare the gradients of the moving segments only. Steeper means faster.',
    },
    {
      id: 'fdtg-q18',
      type: 'numeric-entry',
      stem: 'A school cyclist rides a Sevenoaks route. Their distance-time graph has two straight segments: from (0 s, 0 m) to (60 s, 240 m), and then from (60 s, 240 m) to (120 s, 480 m). What is their average speed over the full 120 seconds, in metres per second?',
      tier: 'challenge',
      correctAnswer: 4,
      unit: 'm/s',
      xpValue: 25,
      hint: 'Total distance is 480 m, total time is 120 s. Divide.',
    },
    {
      id: 'fdtg-q19',
      type: 'numeric-entry',
      stem: 'A walk from a Dover home goes 600 m to a corner shop in 10 min, the walker stays in the shop for 10 min, then walks the 600 m home in 10 min. What is the average speed over the full 30 minutes, in metres per minute? Use total distance walked (out plus back) divided by total time.',
      tier: 'challenge',
      correctAnswer: 40,
      unit: 'm/min',
      xpValue: 25,
      hint: 'Total distance walked is 600 + 600 = 1200 m. Total time is 30 min. Divide 1200 by 30.',
    },
    {
      id: 'fdtg-q20',
      type: 'multiple-choice',
      stem: 'A pupil claims that on a distance-time graph, the gradient of a segment gives the speed only when the units on the axes are metres and seconds. Is this right?',
      tier: 'challenge',
      options: [
        'Yes, only metres and seconds can be used; other units do not give a speed.',
        'Yes, but only after converting any other units into metres and seconds first.',
        'No, the gradient gives a speed in whatever units are on the axes (for example km/min or km/h), as long as both axes are read off the same segment.',
        'No, the gradient never gives a speed; you need a separate calculation for that.',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'fdtg-mis-mixed-units',
      hint: 'The units of the gradient come from the units of the two axes. As long as the same segment is used for the change in distance and the change in time, the answer is a valid speed.',
    },
    {
      id: 'fdtg-q21',
      type: 'multiple-choice',
      stem: 'A distance-time graph in a Manchester GCSE textbook shows a journey from (0 min, 0 km) to (30 min, 18 km), with a flat segment from (10 min, 6 km) to (15 min, 6 km) for a stop, and a final straight segment from (15 min, 6 km) to (30 min, 18 km). What is the speed of the final segment, in kilometres per minute?',
      tier: 'challenge',
      options: [
        '0.4 km/min, from 6 km divided by 15 min over the final segment.',
        '0.6 km/min, from 12 km divided by 20 min over the final segment.',
        '0.8 km/min, from 12 km divided by 15 min over the final segment.',
        '1.2 km/min, from 18 km divided by 15 min over the final segment.',
      ],
      correctIndex: 2,
      xpValue: 25,
      hint: 'Final segment: change in distance is 18 - 6 = 12 km, change in time is 30 - 15 = 15 min. Speed = 12 / 15 = 0.8 km/min.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 Examiners' Report, June 2022, Paper 1F (Foundation), commentary on a distance-time graph question where candidates labelled the vertical axis as time and the horizontal axis as distance.
    {
      id: 'fdtg-mis-axes-swapped',
      description:
        'Believing that time goes on the y axis (up) and distance goes on the x axis (across) on a distance-time graph.',
      triggerAnswer: 'axes-swapped',
      correction:
        'Actually time goes along the x axis and distance goes up the y axis. The name reads "distance-time" but the convention is the second variable, time, on the across axis.',
      reExplanation:
        'On every distance-time graph in KS3 and GCSE, the horizontal axis is time and the vertical axis is distance. A walker who covers 50 m in 10 s plots as the point (10, 50). Swapping the two axes turns a clear journey into a graph that looks like a different one. Lock in the rule: time across, distance up.',
    },
    // Source: OCR GCSE Physics J259 Examiners' Report, June 2022, Paper J259/02, commentary on candidates who read a flat segment on a distance-time graph as the object travelling back to the start.
    {
      id: 'fdtg-mis-flat-means-back',
      description:
        'Believing that a horizontal (flat) segment on a distance-time graph means the object is moving back toward the start.',
      triggerAnswer: 'flat-means-back',
      correction:
        'Actually a flat segment means the distance from the start is not changing, so the object is standing still. A return toward the start tilts the line down, not flat.',
      reExplanation:
        'Picture a walker who pauses at a pedestrian crossing for 10 s. During the wait their distance from home does not change, so the dot on the graph sits at the same y value across that time. The line is flat. If they had walked back instead, the y value would drop and the line would tilt downwards. Flat means still; falling means heading back.',
    },
    // Source: Edexcel GCSE Physics 1PH0 Examiners' Report, June 2022, Paper 1PH0/1F, commentary on candidates who said the flatter of two distance-time lines belonged to the faster journey.
    {
      id: 'fdtg-mis-flat-is-fast',
      description:
        'Believing that a flatter (less steep) line on a distance-time graph means the object is moving faster, mixing up flat with horizontal speed.',
      triggerAnswer: 'flat-is-fast',
      correction:
        'Actually the steeper line is the faster journey. A steeper segment covers more distance for the same change in time, so its gradient (and the speed) is larger.',
      reExplanation:
        'Compare two cyclists on the same axes. After 60 s, the steeper line has reached 240 m while the flatter line has reached 120 m. Both took 60 s, but the steeper line covered twice the distance. Speed equals distance divided by time, so the steeper line is double the speed of the flatter one. Steeper means faster on a distance-time graph.',
    },
    // Source: AQA GCSE Physics 8463 Examiners' Report, June 2023, Paper 1F, commentary on candidates who calculated the gradient of a distance-time segment as time divided by distance rather than distance divided by time.
    {
      id: 'fdtg-mis-gradient-upside-down',
      description:
        'Working out the gradient of a distance-time segment as change in time divided by change in distance, rather than change in distance divided by change in time.',
      triggerAnswer: 'gradient-upside-down',
      correction:
        'In fact the gradient is rise over run: change in y on top, change in x on the bottom. For distance-time graphs that means distance on top, time on the bottom.',
      reExplanation:
        'A segment from (0 s, 0 m) to (10 s, 50 m) has rise 50 m and run 10 s. The gradient is 50 divided by 10, which is 5 m/s. Doing it the other way gives 10 divided by 50, which is 0.2 s/m. That has the wrong size and the wrong units. Always rise over run: distance over time.',
    },
    // Source: CGP KS3 Physics Complete Revision and Practice (KS3 Year 7-9), Forces and Motion section, Common Mistake callout on returning segments described as "negative speed" rather than "going back".
    {
      id: 'fdtg-mis-back-is-negative-speed',
      description:
        'Reading a segment that returns toward the start on a distance-time graph as "the object has a negative speed", rather than as the object moving back at a positive speed.',
      triggerAnswer: 'back-is-negative-speed',
      correction:
        'Actually speed is always a size, never negative. A falling segment means the object is heading back at a positive speed; the line tilts down because distance from the start is dropping.',
      reExplanation:
        'On a graph that shows distance from a Dover home, a line falling from 600 m back to 0 m over 10 min covers 600 m in 10 min. That is a positive speed of 60 m/min. The direction (back home) is shown by the line tilting down, not by a minus sign on the speed. Direction is read off the graph, not from the speed value.',
    },
    // Source: OCR GCSE Physics J259 Examiners' Report, June 2023, Paper J259/01, commentary on candidates who read the y value at a moment in time as the speed at that moment, rather than the distance from the start.
    {
      id: 'fdtg-mis-y-value-is-speed',
      description:
        'Reading the y value of a distance-time graph at a given time as the speed of the object at that time, rather than as the distance from the start.',
      triggerAnswer: 'y-value-is-speed',
      correction:
        'In fact the y value on a distance-time graph is the distance from the start, not the speed. Speed comes from the gradient of the segment, not from the height of the line.',
      reExplanation:
        'On a graph that is flat at 200 m between 5 s and 15 s, the y value is 200 m but the speed is 0 m/s, because the line is not rising. Reading 200 as a speed mixes up two different things on the same picture: a value (distance) and a rate of change (speed). To get the speed, work out the gradient: rise over run, distance over time.',
    },
    // Source: Edexcel GCSE Physics 1PH0 Examiners' Report, June 2023, Paper 1PH0/1F, commentary on candidates who applied a single gradient to a whole multi-segment distance-time graph rather than reading each segment separately.
    {
      id: 'fdtg-mis-steep-is-fast-everywhere',
      description:
        'Treating one steep segment as the speed of the whole journey, so a graph with a steep first segment is read as "fast all the way through".',
      triggerAnswer: 'steep-is-fast-everywhere',
      correction:
        'Actually each segment of a distance-time graph has its own gradient, so its own speed. Read the speed segment by segment, then compare.',
      reExplanation:
        'A walk that starts at 5 m/s for 10 s, pauses for 10 s, then carries on at 1 m/s for 30 s has three different speeds. The first segment is steep; the third is far less steep; the middle is flat. Saying "fast all the way through" misses that two segments are slow or zero. Read each segment on its own.',
    },
    // Source: AQA GCSE Physics 8463 Examiners' Report, June 2022, Paper 1H (Higher), commentary on candidates who mixed metres on one axis with kilometres in the stem, giving an answer with the wrong size.
    {
      id: 'fdtg-mis-mixed-units',
      description:
        'Mixing the units between the two axes (or between the axes and the stem), for example using metres up and minutes across without saying the speed is in m/min.',
      triggerAnswer: 'mixed-units',
      correction:
        'In fact the units come from the two axes. Metres up and minutes across gives a speed in m/min; kilometres up and hours across gives km/h.',
      reExplanation:
        'A segment from (0 min, 0 km) to (4 min, 2 km) has rise 2 km and run 4 min, so the gradient is 0.5 km/min. The number 0.5 only makes sense with the units km/min attached. Reading 2 m when the label says km, or working in seconds when the label says minutes, gives the wrong size. Read the axis labels first.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const forcesDistanceTimeGraphsZoneNodes = [forcesDistanceTimeGraphs]
