import type { SkillNode } from '@/types/content'

const FLEMING_LEFT_HAND_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="28" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Fleming's left-hand rule: three fingers at right angles</text>

    <!-- Stylised left hand outline -->
    <path d="M 250 320 L 250 220 C 250 210, 260 200, 270 200 L 270 130 C 270 122, 278 116, 286 116 C 294 116, 302 122, 302 130 L 302 200 L 318 200 L 318 90 C 318 82, 326 76, 334 76 C 342 76, 350 82, 350 90 L 350 200 L 366 200 L 366 110 C 366 102, 374 96, 382 96 C 390 96, 398 102, 398 110 L 398 220 L 410 220 C 420 220, 430 230, 430 240 L 430 320 Z" stroke-width="2" />

    <!-- Thumb pointing up: Motion / Force -->
    <line x1="286" y1="130" x2="286" y2="60" stroke-width="3" />
    <polygon points="280,64 292,64 286,48" fill="currentColor" stroke="none" />
    <text x="220" y="60" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">thuMb</text>
    <text x="220" y="78" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Motion</text>
    <text x="220" y="94" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">(force on wire)</text>

    <!-- First finger pointing forward (up-left): Field -->
    <line x1="334" y1="90" x2="430" y2="40" stroke-width="3" />
    <polygon points="426,34 444,32 432,48" fill="currentColor" stroke="none" />
    <text x="500" y="38" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">First finger</text>
    <text x="500" y="56" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Field (N to S)</text>

    <!-- Second finger pointing right: Current -->
    <line x1="382" y1="110" x2="500" y2="160" stroke-width="3" />
    <polygon points="496,154 514,162 498,170" fill="currentColor" stroke="none" />
    <text x="580" y="158" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">seCond finger</text>
    <text x="580" y="176" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Current (conventional)</text>

    <!-- Right angle indicator near base -->
    <path d="M 320 200 L 320 215 L 335 215" stroke-width="1" />

    <text x="400" y="380" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Hold the LEFT hand with thumb, first finger and second finger all at right angles.</text>
    <text x="400" y="400" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Point First finger along the field, seCond finger along the current; the thuMb gives the motion.</text>
  </g>
`

const SIMPLE_MOTOR_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="28" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Why a coil spins: forces on opposite sides of the loop</text>

    <!-- Permanent magnets on left and right -->
    <rect x="80" y="160" width="60" height="120" />
    <rect x="80" y="160" width="60" height="60" fill="currentColor" opacity="0.3" />
    <text x="110" y="195" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">N</text>
    <text x="110" y="255" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">S</text>

    <rect x="660" y="160" width="60" height="120" />
    <rect x="660" y="220" width="60" height="60" fill="currentColor" opacity="0.3" />
    <text x="690" y="195" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">S</text>
    <text x="690" y="255" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">N</text>

    <!-- Field arrows across the gap, left to right (N on left to S on right) -->
    <line x1="150" y1="200" x2="640" y2="200" stroke-width="1.5" stroke-dasharray="6,4" />
    <polygon points="630,196 644,200 630,204" fill="currentColor" stroke="none" />
    <line x1="150" y1="240" x2="640" y2="240" stroke-width="1.5" stroke-dasharray="6,4" />
    <polygon points="630,236 644,240 630,244" fill="currentColor" stroke="none" />
    <text x="400" y="135" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">field across the gap: left to right</text>

    <!-- Rectangular coil in the middle, viewed edge-on -->
    <rect x="300" y="180" width="200" height="80" stroke-width="2.5" />

    <!-- Current direction markers on the two long sides -->
    <!-- Top side: current flowing right (out arrow head on the right) -->
    <polygon points="490,176 500,180 490,184" fill="currentColor" stroke="none" />
    <text x="400" y="172" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">current: right along this side</text>

    <!-- Bottom side: current flowing left -->
    <polygon points="310,256 300,260 310,264" fill="currentColor" stroke="none" />
    <text x="400" y="278" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">current: left along this side</text>

    <!-- Force arrows: top side pushed up, bottom side pushed down (opposite directions: a couple) -->
    <line x1="400" y1="180" x2="400" y2="140" stroke-width="3" />
    <polygon points="394,144 406,144 400,128" fill="currentColor" stroke="none" />
    <text x="430" y="150" text-anchor="start" font-size="11" font-weight="700" stroke="none" fill="currentColor">force up</text>

    <line x1="400" y1="260" x2="400" y2="300" stroke-width="3" />
    <polygon points="394,296 406,296 400,312" fill="currentColor" stroke="none" />
    <text x="430" y="305" text-anchor="start" font-size="11" font-weight="700" stroke="none" fill="currentColor">force down</text>

    <!-- Axle through the middle -->
    <circle cx="400" cy="220" r="5" fill="currentColor" stroke="none" />
    <text x="400" y="235" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">axle</text>

    <text x="400" y="365" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Two opposite forces on the two sides of the loop turn the coil round the axle.</text>
    <text x="400" y="385" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">This is why a loudspeaker cone or a Tube-train wheel can be driven by a simple coil.</text>
  </g>
`

const CATAPULT_DEMO_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="28" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">School-lab catapult demo: a wire flips out of a horseshoe magnet</text>

    <!-- Horseshoe magnet as a U on its side, opening to the right -->
    <path d="M 180 120 L 320 120 L 320 160 L 220 160 L 220 240 L 320 240 L 320 280 L 180 280 Z" stroke-width="2" />
    <rect x="180" y="120" width="40" height="40" fill="currentColor" opacity="0.3" />
    <rect x="180" y="240" width="40" height="40" fill="currentColor" opacity="0.3" />
    <text x="200" y="146" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">N</text>
    <text x="200" y="266" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">S</text>

    <!-- Field lines crossing the gap from N (top) to S (bottom), inside the U -->
    <line x1="270" y1="170" x2="270" y2="230" stroke-width="1.5" />
    <polygon points="266,222 274,222 270,236" fill="currentColor" stroke="none" />
    <line x1="290" y1="170" x2="290" y2="230" stroke-width="1.5" />
    <polygon points="286,222 294,222 290,236" fill="currentColor" stroke="none" />
    <text x="370" y="205" text-anchor="start" font-size="11" stroke="none" fill="currentColor">field: N to S</text>

    <!-- Horizontal wire across the gap, current flowing right to left (into the page on the right side could vary; here in-plane right to left) -->
    <line x1="160" y1="200" x2="420" y2="200" stroke-width="3" />
    <polygon points="170,196 156,200 170,204" fill="currentColor" stroke="none" />
    <text x="450" y="196" text-anchor="start" font-size="11" stroke="none" fill="currentColor">current in wire</text>
    <text x="450" y="212" text-anchor="start" font-size="11" stroke="none" fill="currentColor">(right to left)</text>

    <!-- Force arrow: out of the page, drawn as a circle with a dot -->
    <circle cx="270" cy="200" r="14" stroke-width="2" />
    <circle cx="270" cy="200" r="3" fill="currentColor" stroke="none" />
    <text x="270" y="335" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">force on wire: out of page</text>
    <text x="270" y="350" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">(wire flips toward you)</text>

    <!-- Battery + switch as a simple loop sketch on the right -->
    <line x1="420" y1="200" x2="560" y2="200" stroke-width="2" />
    <line x1="560" y1="200" x2="560" y2="320" stroke-width="2" />
    <line x1="560" y1="320" x2="160" y2="320" stroke-width="2" />
    <line x1="160" y1="320" x2="160" y2="200" stroke-width="2" />
    <line x1="520" y1="320" x2="540" y2="320" stroke-width="2" />
    <line x1="525" y1="310" x2="525" y2="330" stroke-width="2.5" />
    <line x1="535" y1="304" x2="535" y2="336" stroke-width="2.5" />
    <text x="530" y="350" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">cell</text>
    <line x1="350" y1="310" x2="370" y2="330" stroke-width="2" />
    <line x1="350" y1="320" x2="375" y2="320" stroke-width="2" />
    <text x="360" y="350" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">switch</text>

    <text x="400" y="385" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Field, current and force are all at right angles. Reverse the cell and the wire flips the other way.</text>
  </g>
`

export const magnetismMotorEffect: SkillNode = {
  id: 'physics-magnetism-motor-effect',
  title: 'The Motor Effect',
  description:
    'Put a wire carrying a current into the gap between the poles of a permanent magnet and something striking happens: the wire jumps. The push it feels is called the motor effect, and it is the same idea that runs every electric motor, from the tiny coil that drives a loudspeaker cone to the huge traction motors under a London Underground train. The size of the force grows with a larger current, a stronger field or a longer length of wire sitting in the field, and the direction of the force is always at right angles to both the current and the field. Fleming\'s left-hand rule turns three fingers on the left hand into a way of reading off that direction. By the end of this node you can predict whether the wire flips up, down, left or right, decide what happens when the current or the field is reversed, and reason about which change (current, field strength, wire length) would roughly double the force.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-magnetism',
  zoneName: 'Magnetism',
  tier: 'challenge',
  prerequisites: ['physics-magnetism-electromagnets'],
  curriculum: {
    ks3Objective:
      'D.C. motors, principles only. A current-carrying wire in a magnetic field experiences a force whose direction depends on the directions of the current and the field, and whose size depends on current, field strength and the length of wire in the field.',
    awardingBodies: {
      aqa: "4.7.2.2 Fleming's left-hand rule (qualitative at KS3); force on a current-carrying conductor in a magnetic field (GCSE Physics 8463)",
      edexcel: 'Topic 7 Magnetism and the motor effect, 7.13-7.15 the motor effect, force on a current-carrying conductor (GCSE Physics 1PH0)',
      ocr: 'P6.2 The motor effect; force on a wire carrying a current in a magnetic field (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    // Source: AQA GCSE Physics 8463 specification 4.7.2.2 (Fleming's left-hand rule, qualitative); standard KS3 phrasing in CGP KS3 Physics Complete Revision and Practice (2022).
    {
      id: 'pmme-fleming-rule',
      title: "Fleming's left-hand rule",
      type: 'labelled-diagram',
      instructions:
        "Click each marker to read off how the three fingers of the left hand line up with Field, Current and Motion.",
      data: {
        viewBox: '0 0 800 420',
        svg: FLEMING_LEFT_HAND_SVG,
        hotspots: [
          {
            id: 'pmme-fleming-thumb',
            x: 28,
            y: 18,
            label: 'thuMb = Motion (force on the wire)',
            description:
              'The thumb points along the direction in which the wire is pushed. Note the capital M: thuMb gives the Motion. This is the force that ends up turning a motor coil or flipping the catapult wire.',
          },
          {
            id: 'pmme-fleming-first',
            x: 62,
            y: 10,
            label: 'First finger = Field',
            description:
              'The first (index) finger points along the magnetic field. Field arrows run from N to S outside the magnet, so the first finger points away from the N pole and toward the S pole.',
          },
          {
            id: 'pmme-fleming-second',
            x: 72,
            y: 39,
            label: 'seCond finger = Current',
            description:
              'The second (middle) finger points along the conventional current, which is from + to - in the external circuit. Note the capital C: seCond finger gives the Current.',
          },
          {
            id: 'pmme-fleming-righthand',
            x: 28,
            y: 75,
            label: 'Left hand, not right',
            description:
              "Use the LEFT hand for the motor effect with conventional current. The right hand is reserved for generators (induced current). Picking the wrong hand reverses the direction of the predicted force.",
          },
        ],
      },
    },
    // Source: OCR GCSE Physics J259 Gateway specification P6.2 (qualitative idea that a current-carrying coil in a magnetic field experiences a turning effect, the basis of the DC motor); standard KS3 wording in CGP KS3 Physics Complete Revision and Practice (2022).
    {
      id: 'pmme-simple-motor',
      title: 'Why a coil spins: a simple motor',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how two opposite motor-effect forces on the two long sides of a coil turn it round its axle.',
      data: {
        viewBox: '0 0 800 400',
        svg: SIMPLE_MOTOR_SVG,
        hotspots: [
          {
            id: 'pmme-motor-field',
            x: 50,
            y: 32,
            label: 'Field across the gap',
            description:
              'The two facing magnets set up a roughly steady field that runs across the gap from the left N pole to the right S pole. The coil sits in this field.',
          },
          {
            id: 'pmme-motor-topside',
            x: 50,
            y: 42,
            label: 'Top side: force pushes up',
            description:
              "On the top side of the loop the current flows along one direction round the loop. With the field running left to right across the gap, Fleming's left-hand rule gives a force on this side that points upward, lifting the top side of the coil.",
          },
          {
            id: 'pmme-motor-bottomside',
            x: 50,
            y: 68,
            label: 'Bottom side: force pushes down',
            description:
              'The bottom side of the loop carries current in the opposite direction to the top side, so the motor-effect force on it points the opposite way: downward. Two equal forces in opposite directions form a couple, which turns the coil.',
          },
          {
            id: 'pmme-motor-axle',
            x: 50,
            y: 91,
            label: 'The axle drives the wheel',
            description:
              'The coil spins on its axle. In a Tube-train traction motor or an electric-bike hub motor, the spinning axle drives the wheel. In a loudspeaker, a similar idea drives the cone in and out instead of round.',
          },
        ],
      },
    },
    // Source: Edexcel GCSE Physics 1PH0 specification Topic 7 (7.13 to 7.15 the motor effect, current-carrying conductor in a magnetic field); standard school-lab demo described in CGP KS3 Physics Complete Revision and Practice (2022).
    {
      id: 'pmme-catapult-demo',
      title: 'School-lab catapult demo',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to follow the catapult wire as the cell is switched on and the wire jumps out of the magnet gap.',
      data: {
        viewBox: '0 0 800 400',
        svg: CATAPULT_DEMO_SVG,
        hotspots: [
          {
            id: 'pmme-catapult-magnet',
            x: 25,
            y: 50,
            label: 'Horseshoe magnet sets the field',
            description:
              'The U-shaped magnet has its N pole on top and S pole below in the gap. The field in the gap runs vertically downward, from the N face to the S face, at right angles to the wire.',
          },
          {
            id: 'pmme-catapult-wire',
            x: 50,
            y: 50,
            label: 'Wire carries the current',
            description:
              'The wire runs horizontally across the gap, so the conventional current flows from one end to the other. Field and current are at right angles, which is the condition for the largest force.',
          },
          {
            id: 'pmme-catapult-force',
            x: 50,
            y: 84,
            label: 'Force pushes the wire out',
            description:
              'The circle-with-a-dot symbol means the force comes out of the page toward you. The wire jumps in that direction. Reverse the cell (or flip the magnet) and the wire jumps the other way, into the page.',
          },
          {
            id: 'pmme-catapult-checks',
            x: 50,
            y: 96,
            label: 'Three checks before powering on',
            description:
              'Use the left hand: First finger down the field, seCond finger along the current. The thumb predicts the motion. If your thumb says into the page but the wire jumps out, the current or field is the opposite of what you assumed.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    // Source: AQA GCSE Physics 8463 specification 4.7.2.2; standard KS3 worked example wording in CGP KS3 Physics Complete Revision and Practice (2022).
    {
      id: 'pmme-worked-1',
      title: "Using Fleming's left-hand rule on a horizontal wire",
      steps: [
        {
          explanation:
            "Set out the situation. In a UK school lab, a horizontal wire runs east to west on the bench. The conventional current in the wire flows from west to east. A magnetic field across the bench points from south to north. The pupil wants the direction of the force on the wire.",
        },
        {
          explanation:
            "Step 1. Hold up the LEFT hand, palm flat, then bend the thumb, first finger and second finger so they sit at right angles, like the corner of a box.",
        },
        {
          explanation:
            "Step 2. Point the First finger along the field, that is from south to north (toward the north wall of the lab).",
        },
        {
          explanation:
            "Step 3. Point the seCond finger along the conventional current, that is from west to east (along the wire).",
        },
        {
          explanation:
            "Step 4. Read off the thuMb. With first finger north and second finger east, the thumb points straight up. So the force on the wire is upward.",
          maths: 'thumb up = force up',
        },
        {
          explanation:
            "Step 5. Sanity check. If the pupil now reverses the cell so the current runs east to west, repeating the rule sends the thumb downward. Reversing the current reverses the force, just as expected.",
        },
      ],
    },
    // Source: Edexcel GCSE Physics 1PH0 specification Topic 7 (7.13 to 7.15 qualitative reasoning about the size of the force on a current-carrying conductor); KS3 wording in CGP KS3 Physics Complete Revision and Practice (2022).
    {
      id: 'pmme-worked-2',
      title: 'How big is the force? Doubling the current',
      steps: [
        {
          explanation:
            'Set out the situation. A catapult wire sits in a horseshoe-magnet gap with a 0.5 A current flowing. It jumps gently when the switch is closed. The pupil now changes the cell so the current rises to 1.0 A, leaving everything else the same.',
        },
        {
          explanation:
            'Identify what changes. Only the current changes; the field is the same horseshoe magnet and the same length of wire sits in the gap.',
        },
        {
          explanation:
            'Apply the rule. At KS3, the force on a current-carrying wire grows in step with the current, when the field and the length stay the same.',
          maths: 'F grows with I when B and L are unchanged',
        },
        {
          explanation:
            'Predict. Doubling the current (0.5 A to 1.0 A) roughly doubles the force on the wire.',
        },
        {
          explanation:
            'Predict the demo. The catapult wire will jump about twice as far out of the gap with the larger current, since the push from the magnet on the wire is now roughly twice as big.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pmme-q1',
      type: 'multiple-choice',
      stem: 'What happens to a straight wire when a current is switched on inside the gap between the N and S poles of a horseshoe magnet?',
      tier: 'core',
      options: [
        'Nothing; the wire is unaffected.',
        'The wire heats up but does not move.',
        'The wire melts straight away.',
        'The wire feels a force and is pushed sideways out of the gap.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'pmme-mis-wire-self-force',
      hint: 'A current-carrying wire in an external magnetic field feels a sideways push: the motor effect.',
    },
    {
      id: 'pmme-q2',
      type: 'multiple-choice',
      stem: "Which hand should you use for Fleming's rule when working out the force on a current-carrying wire in a magnetic field (motor effect)?",
      tier: 'core',
      options: [
        'The right hand.',
        'Either hand; it makes no difference.',
        'The left hand.',
        'Both hands, with the fingers interlocked.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pmme-mis-right-hand',
      hint: 'Left hand for the motor effect (conventional current). The right hand is for generators and induced current.',
    },
    {
      id: 'pmme-q3',
      type: 'multiple-choice',
      stem: "In Fleming's left-hand rule, which finger points along the magnetic field?",
      tier: 'core',
      options: [
        'The first finger (index finger).',
        'The thumb.',
        'The second finger (middle finger).',
        'The little finger.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pmme-mis-fingers-swapped',
      hint: 'F-F: First finger is for the Field. The second finger is the Current; the thumb is the Motion.',
    },
    {
      id: 'pmme-q4',
      type: 'multiple-choice',
      stem: 'A straight wire is laid in a magnetic field so that the current runs in exactly the same direction as the field. What force does the wire feel?',
      tier: 'core',
      options: [
        'The largest possible force, at right angles to both.',
        'No force at all; the force is zero when current and field are parallel.',
        'A force along the direction of the wire.',
        'A force that spins the wire round in circles.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pmme-mis-parallel-biggest',
      hint: 'The force is largest when current and field are at right angles, and zero when they line up.',
    },
    {
      id: 'pmme-q5',
      type: 'multiple-choice',
      stem: 'A current-carrying wire in a horseshoe magnet jumps upward. The pupil now reverses the connections to the cell, so the current in the wire flows the other way. The field is unchanged. What happens?',
      tier: 'core',
      options: [
        'The wire jumps upward, but twice as far.',
        'The wire still jumps upward.',
        'The wire jumps downward (the force reverses).',
        'The wire stays still.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pmme-mis-reverse-both-reverses',
      hint: 'Reversing the current alone reverses the force. Fleming\'s left-hand rule swings the thumb to the opposite direction.',
    },
    {
      id: 'pmme-q6',
      type: 'multiple-choice',
      stem: 'A pupil is told the force on the wire depends on three things. Which set lists the three correct factors at KS3?',
      tier: 'core',
      options: [
        'Mass of the wire, colour of the wire, temperature of the room.',
        'Length of the bench, brightness of the lab lights, mass of the magnet.',
        'Type of metal in the wire only.',
        'Size of the current, strength of the magnetic field, length of wire inside the field.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'pmme-mis-material-matters',
      hint: 'Current, field, length-in-field. KS3 ignores wire material.',
    },
    {
      id: 'pmme-q7',
      type: 'numeric-entry',
      stem: 'A catapult wire jumps gently with a current of 0.5 A. The pupil swaps in a fresh cell so the current rises to 1.0 A, leaving the field and length-in-field unchanged. Roughly how many times stronger is the force on the wire now? Give your answer as a whole number.',
      tier: 'core',
      correctAnswer: 2,
      unit: 'times',
      xpValue: 10,
      misconceptionId: 'pmme-mis-material-matters',
      hint: 'Force grows in step with current when B and L are unchanged. Divide 1.0 by 0.5.',
    },
    {
      id: 'pmme-q8',
      type: 'multiple-choice',
      stem: "A horizontal wire runs east to west on a UK school bench. The conventional current flows from west to east. A magnetic field across the bench points from south to north. Using Fleming's left-hand rule, in which direction does the force on the wire act?",
      tier: 'confident',
      options: [
        'Down, into the bench.',
        'Up, out of the bench.',
        'Along the wire, west to east.',
        'No force; current and field cancel.',
      ],
      correctIndex: 1,
      xpValue: 15,
      hint: 'First finger north, seCond finger east, thuMb gives the motion. Try it with your left hand.',
    },
    {
      id: 'pmme-q9',
      type: 'numeric-entry',
      stem: 'For a wire in a horseshoe-magnet gap, the pupil records the direction the wire jumps using a code: 1 = up, 2 = down, 3 = left, 4 = right. With the current flowing left to right and the field pointing from front (N) to back (S) of the bench, the wire jumps up. The pupil now reverses the current only, so it flows right to left. What number now describes the direction the wire jumps?',
      tier: 'confident',
      correctAnswer: 2,
      unit: '(code)',
      xpValue: 15,
      misconceptionId: 'pmme-mis-reverse-both-reverses',
      hint: 'Reversing the current alone reverses the force. Up flips to down, so use code 2.',
    },
    {
      id: 'pmme-q10',
      type: 'numeric-entry',
      stem: 'Same set-up as before, with codes 1 = up, 2 = down, 3 = left, 4 = right. The wire jumps up with the original current and field. The pupil now reverses BOTH the current and the field at the same time. What number describes the direction the wire now jumps?',
      tier: 'confident',
      correctAnswer: 1,
      unit: '(code)',
      xpValue: 15,
      misconceptionId: 'pmme-mis-reverse-both-reverses',
      hint: 'Each reversal flips the force. Two reversals together flip it twice, which is the same as no flip.',
    },
    {
      id: 'pmme-q11',
      type: 'numeric-entry',
      stem: 'A catapult wire jumps a small distance with a current of 0.3 A. The pupil swaps in stronger cells so the current rises to 0.9 A, leaving the field and length-in-field unchanged. Roughly how many times stronger is the force on the wire now? Give your answer as a whole number.',
      tier: 'confident',
      correctAnswer: 3,
      unit: 'times',
      xpValue: 15,
      hint: 'Force grows in step with current. Divide 0.9 by 0.3.',
    },
    {
      id: 'pmme-q12',
      type: 'numeric-entry',
      stem: 'A pupil sets up a wire so that 4 cm of it lies inside the horseshoe-magnet gap, with the rest outside. They then bend a longer wire so that 12 cm now sits in the gap, keeping the current and field the same. Roughly how many times stronger is the force on the wire now, judged by length-in-field alone? Give your answer as a whole number.',
      tier: 'confident',
      correctAnswer: 3,
      unit: 'times',
      xpValue: 15,
      hint: 'Force grows in step with the length of wire sitting in the field. Divide 12 by 4.',
    },
    {
      id: 'pmme-q13',
      type: 'multiple-choice',
      stem: 'A pupil claims: "Reversing both the current AND the field at the same time will reverse the direction of the force on the wire." Why is this wrong?',
      tier: 'confident',
      options: [
        'It is right; both reversals together flip the force.',
        'Reversing only the field has no effect, so just the current reversal matters.',
        'Each reversal flips the force once. Two flips together cancel out, so the force ends up in the same direction as before.',
        'The force always points the same way regardless of current or field.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pmme-mis-reverse-both-reverses',
      hint: 'Try Fleming\'s left-hand rule before and after, or note: flip + flip = no flip.',
    },
    {
      id: 'pmme-q14',
      type: 'multiple-choice',
      stem: 'A teacher demonstrates a small loudspeaker connected to a music player. Which best describes the role of the motor effect inside it?',
      tier: 'challenge',
      options: [
        'It heats the cone so air around it vibrates.',
        'It charges the cone with static electricity, which makes air move.',
        'A coil sitting in the field of a permanent magnet carries a changing current. The motor-effect force pushes the cone in and out, making sound waves in the air.',
        'It uses gravity to pull the cone toward the magnet.',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'pmme-mis-field-pushes-magnet',
      hint: 'A loudspeaker is essentially a small motor: a current-carrying coil in a permanent-magnet field.',
    },
    {
      id: 'pmme-q15',
      type: 'drag-order',
      stem: "Order these steps to use Fleming's left-hand rule on a horizontal wire in a magnetic field, from first action to last action.",
      tier: 'confident',
      items: [
        "Hold up the left hand with thumb, first finger and second finger at right angles.",
        'Read off the direction the thuMb points: that is the force on the wire.',
        'Point the seCond finger along the conventional current in the wire.',
        'Point the First finger along the magnetic field (N to S outside the magnet).',
      ],
      correctOrder: [0, 3, 2, 1],
      xpValue: 15,
      hint: 'Set the hand up first, then field, then current, then read the thumb.',
    },
    {
      id: 'pmme-q16',
      type: 'spot-misconception',
      stem: "Aisha and Ben are talking about a catapult-wire demo in their school lab.",
      tier: 'confident',
      statements: [
        {
          text: 'Aisha says: "The wire is feeling a force from its own current, not from the magnet. The magnet just helps it heat up." This is wrong; the motor-effect force is the force the EXTERNAL magnetic field puts on the moving charges in the wire, not a force the wire puts on itself.',
          isMisconception: true,
        },
        {
          text: 'Ben says: "The wire feels a force because charges flowing along it sit in the field of the horseshoe magnet, and the field pushes them sideways. The wire is dragged along with them." This is right.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pmme-mis-wire-self-force',
    },
    {
      id: 'pmme-q17',
      type: 'missing-step',
      stem: "Fill in the missing step. A pupil is using Fleming's left-hand rule on a vertical wire in a horseshoe magnet, hoping to predict whether the wire jumps left or right.",
      tier: 'challenge',
      steps: [
        'Identify the direction of the magnetic field from N pole to S pole, and the direction of the conventional current in the wire.',
        'Hold up the LEFT hand with thumb, first finger and second finger at right angles, like a corner of a box.',
        null,
        'Read off the direction the thuMb points: that is the force on the wire, and so the direction it jumps.',
        'Sanity check by reversing the current in your mind: the predicted force should flip the other way.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Rotate the hand so the First finger points along the field (N to S) and the seCond finger points along the conventional current in the wire.',
      xpValue: 20,
    },
    {
      id: 'pmme-q18',
      type: 'multiple-choice',
      stem: 'An electric-bike hub motor uses coils of wire spinning in a permanent-magnet field. As the rider pedals harder, the controller pushes more current through the coils. What change does this make to the motor-effect force on each turn of coil?',
      tier: 'challenge',
      options: [
        'No change; the force depends only on the magnets.',
        'The force grows roughly in step with the current, so each turn of coil feels a bigger push and the wheel spins more strongly.',
        'The force drops with extra current.',
        'The force reverses direction.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'pmme-mis-material-matters',
      hint: 'At KS3 the force grows with current (for fixed field and fixed length-in-field). More current means a bigger push per turn.',
    },
    {
      id: 'pmme-q19',
      type: 'numeric-entry',
      stem: 'In a catapult demo, a horizontal wire jumps up out of the gap. The pupil now rotates the horseshoe magnet through 180 degrees about a vertical axis, so what was the N pole now points where the S pole used to point and vice versa. The current direction is unchanged. The wire jumps in a new direction. Using the code 1 = up, 2 = down, 3 = left, 4 = right, what number describes the new direction?',
      tier: 'challenge',
      correctAnswer: 2,
      unit: '(code)',
      xpValue: 20,
      misconceptionId: 'pmme-mis-reverse-both-reverses',
      hint: 'Rotating the magnet by 180 degrees reverses the field direction. Reversing the field alone flips the force from up to down.',
    },
    {
      id: 'pmme-q20',
      type: 'spot-misconception',
      stem: "Charlie and Dipa are arguing about why the catapult wire moves at all.",
      tier: 'challenge',
      statements: [
        {
          text: 'Charlie says: "The current parallel to the field gives the biggest force, because the field and the current help each other along." This is wrong; when current and field are parallel, the motor-effect force is zero. The largest force happens when they are at right angles.',
          isMisconception: true,
        },
        {
          text: 'Dipa says: "The force is biggest when the current crosses the field at right angles, and it falls to zero when the current runs along the field. That is why we set up the wire perpendicular to the magnet gap." This is right.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'pmme-mis-parallel-biggest',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, candidates used the right-hand rule for the motor effect when conventional current was given.
    {
      id: 'pmme-mis-right-hand',
      description:
        "Using the right hand for Fleming's rule with conventional current (motor effect).",
      triggerAnswer: 'right-hand-rule',
      correction:
        'For the motor effect with conventional current, use the LEFT hand. The right hand is reserved for generators and induced current.',
      reExplanation:
        'Memory hook: L for Left and L for Lorentz (motor) force on a current. The right hand is saved for generators, where a moving wire induces a current. Picking the wrong hand reverses every prediction, so the wire seems to jump the opposite way to the demo. Always check: motor effect equals left hand.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2023, candidates swapped the assignments of thumb, first finger and second finger.
    {
      id: 'pmme-mis-fingers-swapped',
      description:
        "Swapping which finger stands for which quantity in Fleming's left-hand rule.",
      triggerAnswer: 'fingers-swapped',
      correction:
        'thuMb = Motion (force), First finger = Field, seCond finger = Current. The capital letters of Motion, Field and Current pick out the right finger.',
      reExplanation:
        'Hold the left hand so all three are at right angles, like the corner of a box. The First finger lines up with the Field (N to S). The seCond finger lines up with the conventional Current. The thuMb then shows the Motion of the wire. Mix up the fingers and the predicted direction goes off by 90 degrees or even reverses.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2022, candidates said the largest force was when current ran parallel to the field.
    {
      id: 'pmme-mis-parallel-biggest',
      description:
        'Believing the force on a current-carrying wire is largest when the current runs parallel to the field.',
      triggerAnswer: 'parallel-biggest',
      correction:
        'The motor-effect force is largest when the current is at right angles to the field, and zero when the current runs along the field.',
      reExplanation:
        'The force comes from the field pushing sideways on charges moving in the wire. If charges already drift along the field, the field cannot push them sideways at all, so the force is zero. Cross them at right angles and the sideways push is at its biggest. Lab demos always set the wire perpendicular to the magnet poles for this reason.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2021, candidates said the wire feels a force put on it by its own current.
    {
      id: 'pmme-mis-wire-self-force',
      description:
        'Believing the wire feels a force from its own current rather than from the external magnetic field.',
      triggerAnswer: 'wire-self-force',
      correction:
        "The motor-effect force comes from the EXTERNAL magnetic field pushing on the moving charges in the wire. Without the external field there is no force on a straight wire.",
      reExplanation:
        "A current-carrying wire makes its own field, but a wire on its own (with no external magnet nearby) does not jump. Bring up a horseshoe magnet and the wire suddenly feels a push, because the moving charges sit in the magnet's field and the field shoves them sideways. The wire is dragged with the charges.",
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2022, candidates said reversing both current and field together reverses the force.
    {
      id: 'pmme-mis-reverse-both-reverses',
      description:
        'Believing that reversing both the current and the field at the same time reverses the direction of the force.',
      triggerAnswer: 'reverse-both-reverses',
      correction:
        'Reversing one (current OR field) flips the force. Reversing BOTH at once flips it twice, which leaves the direction unchanged.',
      reExplanation:
        "Try Fleming's left-hand rule twice over: once with the original directions and once with both flipped. The thumb ends up pointing the same way both times. A neat way to remember: flip + flip = no flip. Only reversing one of the two reverses the force.",
    },
    // Source: OCR GCSE Physics J259 examiner report June 2023, candidates wrote that the force depends on the type of metal in the wire.
    {
      id: 'pmme-mis-material-matters',
      description:
        'Believing the size of the force on the wire depends on what metal the wire is made of.',
      triggerAnswer: 'material-matters',
      correction:
        'At KS3 the force on a current-carrying wire depends on the size of the current, the strength of the field and the length of wire inside the field. Wire material is not a KS3 factor.',
      reExplanation:
        'Swap a copper wire for an aluminium one carrying the same current in the same field and the force is the same. The push depends on how many charges are moving each second (the current) and on the field they sit in, plus how much of the wire lies inside that field. Material does affect resistance, but not the motor-effect force at fixed current.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2020, candidates wrote that the field of the wire pushes the magnet (rather than the magnet pushing the wire).
    {
      id: 'pmme-mis-field-pushes-magnet',
      description:
        "Framing the motor effect as the wire's own field pushing the magnet, rather than the external field pushing the wire.",
      triggerAnswer: 'wire-pushes-magnet',
      correction:
        'At KS3 the motor effect is described as the external field putting a force on the current-carrying wire. The reaction force on the magnet is true but is not the framing used in school.',
      reExplanation:
        'Newton\'s third law means there are equal and opposite forces, so the wire pushes the magnet just as the magnet pushes the wire. School physics points at the wire because the wire is what moves in the catapult demo: it is light and free, while the magnet is held in a clamp. Always state the force as "on the wire".',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const magnetismMotorEffectZoneNodes = [magnetismMotorEffect]
