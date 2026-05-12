import type { SkillNode } from '@/types/content'

const AC_WAVE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">UK mains: 230 V alternating current at 50 Hz</text>

    <!-- Axes -->
    <line x1="80" y1="220" x2="720" y2="220" />
    <line x1="80" y1="100" x2="80" y2="340" />
    <text x="60" y="110" text-anchor="end" font-size="13" stroke="none" fill="currentColor">+325 V</text>
    <text x="60" y="225" text-anchor="end" font-size="13" stroke="none" fill="currentColor">0 V</text>
    <text x="60" y="340" text-anchor="end" font-size="13" stroke="none" fill="currentColor">-325 V</text>
    <text x="740" y="225" font-size="13" stroke="none" fill="currentColor">time</text>

    <!-- Sine wave: one full cycle from x=120 to x=440, second cycle 440 to 760 -->
    <path d="M 120 220 C 160 100, 200 100, 280 220 S 400 340, 440 220 C 480 100, 520 100, 600 220 S 720 340, 760 220" stroke-width="3" />

    <!-- Markers: peaks and zero crossings -->
    <circle cx="200" cy="115" r="6" fill="currentColor" stroke="none" />
    <text x="200" y="105" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">peak +325 V</text>

    <circle cx="280" cy="220" r="6" fill="currentColor" stroke="none" />
    <text x="280" y="245" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">zero</text>

    <circle cx="360" cy="325" r="6" fill="currentColor" stroke="none" />
    <text x="360" y="350" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">peak -325 V</text>

    <circle cx="440" cy="220" r="6" fill="currentColor" stroke="none" />
    <text x="440" y="245" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">zero</text>

    <!-- Cycle marker -->
    <line x1="120" y1="365" x2="440" y2="365" stroke-dasharray="6,4" />
    <text x="280" y="385" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">one cycle = 0.02 s (so 50 cycles per second)</text>
  </g>
`

const PLUG_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">UK three-pin plug: live, neutral and earth</text>

    <!-- Plug body -->
    <rect x="220" y="80" width="360" height="280" rx="20" />

    <!-- Earth pin (top, longest) -->
    <rect x="380" y="100" width="40" height="90" fill="currentColor" />
    <text x="400" y="215" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">EARTH</text>
    <text x="400" y="232" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">green and yellow</text>

    <!-- Live pin (bottom right) -->
    <rect x="480" y="260" width="40" height="70" fill="currentColor" />
    <text x="500" y="350" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">LIVE</text>
    <text x="500" y="368" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">brown</text>

    <!-- Neutral pin (bottom left) -->
    <rect x="280" y="260" width="40" height="70" fill="currentColor" />
    <text x="300" y="350" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">NEUTRAL</text>
    <text x="300" y="368" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">blue</text>

    <!-- Cable entry at bottom -->
    <line x1="380" y1="360" x2="380" y2="385" />
    <line x1="420" y1="360" x2="420" y2="385" />
    <rect x="370" y="385" width="60" height="14" fill="currentColor" stroke="none" />

    <!-- Hint about top of plug -->
    <text x="400" y="70" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">earth pin is the longest, so it opens the safety shutters first</text>
  </g>
`

const KETTLE_CIRCUIT_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">A working kettle: live carries the supply, neutral completes the loop</text>

    <!-- Mains supply box (left) -->
    <rect x="60" y="120" width="120" height="160" />
    <text x="120" y="155" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">UK mains</text>
    <text x="120" y="175" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">230 V a.c.</text>
    <text x="120" y="192" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">50 Hz</text>

    <!-- Live wire (top): brown -->
    <line x1="180" y1="160" x2="500" y2="160" />
    <text x="340" y="148" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">LIVE (brown): carries the supply in</text>

    <!-- Neutral wire (bottom): blue -->
    <line x1="180" y1="240" x2="500" y2="240" />
    <text x="340" y="262" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">NEUTRAL (blue): completes the loop</text>

    <!-- Earth wire (middle, dashed): green and yellow -->
    <line x1="180" y1="200" x2="320" y2="200" stroke-dasharray="6,4" />
    <line x1="320" y1="200" x2="320" y2="320" stroke-dasharray="6,4" />
    <line x1="320" y1="320" x2="500" y2="320" stroke-dasharray="6,4" />
    <text x="360" y="335" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">EARTH (green and yellow): idle, only used in a fault</text>

    <!-- Kettle box (right) -->
    <rect x="500" y="120" width="200" height="200" />
    <text x="600" y="155" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Kettle</text>
    <text x="600" y="175" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">heating element</text>
    <text x="600" y="192" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">inside</text>

    <!-- Metal case label -->
    <text x="600" y="260" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">metal case is</text>
    <text x="600" y="276" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">bonded to earth</text>
  </g>
`

export const electricityUkMains: SkillNode = {
  id: 'physics-electricity-uk-mains',
  title: 'Mains Electricity in the UK',
  description:
    'UK mains electricity is 230 V alternating current at 50 Hz. Cells and batteries give direct current, where the flow goes one way. Mains current swings back and forth 50 times every second. A UK three-pin plug has three wires with set colours: live is brown and carries the supply in, neutral is blue and completes the loop, and earth is green and yellow and stays idle unless a fault sends current to the metal case. The longer earth pin opens the socket shutters first, so the plug can only be pushed in the right way round.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-electricity-circuits',
  zoneName: 'Electricity and Circuits',
  tier: 'confident',
  prerequisites: ['physics-electricity-circuit-symbols'],
  curriculum: {
    ks3Objective:
      'Domestic electrical appliances; the differences between, and uses of, direct and alternating current.',
    awardingBodies: {
      aqa: '4.2.3.1 Mains electricity: alternating current, 230 V, 50 Hz in the UK; 4.2.3.2 The three-pin plug, live, neutral and earth wires (GCSE Physics 8463)',
      edexcel:
        'Topic 2.13 UK mains electricity: 230 V, 50 Hz, a.c.; 2.14 Three-pin plugs and the role of live, neutral and earth wires (GCSE Physics 1PH0)',
      ocr: 'P4.3 Mains electricity; UK mains supply 230 V, 50 Hz; three-pin plug wiring (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'pe-um-scene-ac-wave',
      title: 'UK Mains: A 50 Hz Sine Wave',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the wave to see how UK mains voltage swings between a positive peak and a negative peak, fifty times a second.',
      data: {
        viewBox: '0 0 800 400',
        svg: AC_WAVE_SVG,
        hotspots: [
          {
            id: 'pe-um-h-wave-peak-pos',
            x: 25,
            y: 30,
            label: 'Positive peak: about +325 V',
            description:
              'A quarter of the way through each cycle, the voltage reaches its highest value, around +325 V. We still call this "230 V" because 230 V is the working value once you average the swinging wave properly.',
          },
          {
            id: 'pe-um-h-wave-zero',
            x: 35,
            y: 56,
            label: 'Zero crossing',
            description:
              'Twice every cycle the voltage passes through zero. The current also reverses direction at these points, so the flow keeps swapping which way it goes.',
          },
          {
            id: 'pe-um-h-wave-peak-neg',
            x: 45,
            y: 80,
            label: 'Negative peak: about -325 V',
            description:
              'Three quarters of the way through the cycle, the voltage reaches its lowest value at around -325 V. The current is now flowing the opposite way to the positive peak.',
          },
          {
            id: 'pe-um-h-wave-cycle',
            x: 35,
            y: 96,
            label: 'One full cycle takes 0.02 s',
            description:
              'A frequency of 50 Hz means 50 full cycles each second. One cycle therefore lasts 1 over 50, which is 0.02 s. The UK mains repeats this same pattern over and over.',
          },
        ],
      },
    },
    {
      id: 'pe-um-scene-plug-anatomy',
      title: 'The UK Three-Pin Plug',
      type: 'labelled-diagram',
      instructions:
        'Click each pin to read its name, its colour code and what it does inside a working appliance.',
      data: {
        viewBox: '0 0 800 400',
        svg: PLUG_SVG,
        hotspots: [
          {
            id: 'pe-um-h-plug-live',
            x: 63,
            y: 78,
            label: 'Live: brown, 230 V from the mains',
            description:
              'The live pin connects to the brown wire. It carries the 230 V supply from the mains in to the appliance. The live wire is the dangerous one, because it is always at mains voltage when the socket is on.',
          },
          {
            id: 'pe-um-h-plug-neutral',
            x: 38,
            y: 78,
            label: 'Neutral: blue, completes the loop',
            description:
              'The neutral pin connects to the blue wire. It carries the current back out of the appliance to the substation, completing the circuit. The neutral wire is held close to 0 V by the supply.',
          },
          {
            id: 'pe-um-h-plug-earth',
            x: 50,
            y: 36,
            label: 'Earth: green and yellow, safety only',
            description:
              'The earth pin connects to the green and yellow wire. It bonds the metal case of the appliance to the ground. In normal use it carries no current. If a loose live wire touches the case, the fault current flows down the earth wire and blows the fuse.',
          },
          {
            id: 'pe-um-h-plug-longest',
            x: 50,
            y: 15,
            label: 'Earth pin is the longest',
            description:
              'The earth pin is taller than the other two. It opens the safety shutters in the socket first, so the live and neutral pins can then slide in. That is why a UK plug only goes in one way round.',
          },
        ],
      },
    },
    {
      id: 'pe-um-scene-kettle-loop',
      title: 'A Working Kettle: Where the Current Flows',
      type: 'labelled-diagram',
      instructions:
        'Click each wire to follow the current as a kettle boils. Live brings power in, neutral takes it out, and earth stays idle.',
      data: {
        viewBox: '0 0 800 400',
        svg: KETTLE_CIRCUIT_SVG,
        hotspots: [
          {
            id: 'pe-um-h-loop-live',
            x: 42,
            y: 37,
            label: 'Live brings the supply in',
            description:
              'The brown live wire delivers the 230 V supply to the heating element inside the kettle. This is the route by which energy from the substation reaches the water.',
          },
          {
            id: 'pe-um-h-loop-neutral',
            x: 42,
            y: 63,
            label: 'Neutral completes the loop',
            description:
              'The blue neutral wire carries the current back out of the kettle to the substation. Without this return path the current would have nowhere to go and the kettle would not boil.',
          },
          {
            id: 'pe-um-h-loop-earth',
            x: 45,
            y: 85,
            label: 'Earth stays idle in normal use',
            description:
              'The green and yellow earth wire is bonded to the metal case. In a healthy kettle no current flows along it. It is a backup route, ready to take fault current away if a wire ever comes loose inside.',
          },
          {
            id: 'pe-um-h-loop-ac',
            x: 50,
            y: 12,
            label: 'And the flow keeps swapping direction',
            description:
              'Because mains is a.c. at 50 Hz, the "in" and "out" labels keep swapping fifty times every second. The kettle does not mind: its heating element warms up whichever way the current runs.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'pe-um-worked-1',
      title: 'How long is one cycle of UK mains at 50 Hz?',
      steps: [
        {
          explanation:
            'Set out what we know. UK mains has a frequency of 50 Hz, which means 50 full cycles each second.',
          maths: 'f = 50 Hz',
        },
        {
          explanation:
            'State the link between frequency and the time for one cycle (the period).',
          maths: 'T = 1 / f',
        },
        {
          explanation: 'Substitute the numbers.',
          maths: 'T = 1 / 50',
        },
        {
          explanation: 'Evaluate the arithmetic.',
          maths: 'T = 0.02 s',
        },
        {
          explanation:
            'State the answer in context. One full cycle of UK mains takes 0.02 s, which is 20 milliseconds. In every second of cooking on the hob, the current changes direction 100 times.',
        },
      ],
    },
    {
      id: 'pe-um-worked-2',
      title: 'A new toaster cable: which colour goes to which pin?',
      steps: [
        {
          explanation:
            'Set out the situation. A pupil wires a new plug onto a toaster. The cable holds three wires: brown, blue, and green and yellow. They need to decide which goes to live, which to neutral, and which to earth.',
        },
        {
          explanation:
            'State the UK colour code. Brown is live, blue is neutral, and green and yellow is earth. The same three colours are used on every UK appliance cable.',
        },
        {
          explanation:
            'Match each colour to its pin. The brown wire goes to the live pin on the bottom right of the plug.',
          maths: 'brown -> live',
        },
        {
          explanation: 'Match the next wire.',
          maths: 'blue -> neutral',
        },
        {
          explanation: 'Match the final wire.',
          maths: 'green and yellow -> earth',
        },
        {
          explanation:
            'State the answer and check. Brown to live, blue to neutral, green and yellow to earth. The earth pin is the longest. If a loose live wire ever touched the metal case, the earth would carry the fault current away and blow the fuse, keeping the user safe.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pe-um-q1',
      type: 'multiple-choice',
      stem: 'What is the voltage of the UK mains supply?',
      tier: 'core',
      options: ['230 V', '12 V', '120 V', '400 V'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pe-um-mis-wrong-mains-voltage',
      hint: 'It is the same value listed on UK kettle and hairdryer labels.',
    },
    {
      id: 'pe-um-q2',
      type: 'multiple-choice',
      stem: 'What is the frequency of the UK mains supply?',
      tier: 'core',
      options: ['1 Hz', '50 Hz', '60 Hz', '230 Hz'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pe-um-mis-50-vs-60-hz',
      hint: 'The UK uses 50 cycles per second. North America uses 60.',
    },
    {
      id: 'pe-um-q3',
      type: 'multiple-choice',
      stem: 'Which kind of current does a UK wall socket supply?',
      tier: 'core',
      options: [
        'Direct current, like a torch battery',
        'Static charge that sits still',
        'Alternating current that swings back and forth',
        'Magnetic current that flows sideways',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pe-um-mis-mains-is-dc',
      hint: 'Mains current keeps changing direction many times a second.',
    },
    {
      id: 'pe-um-q4',
      type: 'multiple-choice',
      stem: 'Which colour is the live wire in a UK appliance cable?',
      tier: 'core',
      options: ['Blue', 'Green and yellow', 'Red', 'Brown'],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'pe-um-mis-live-wrong-colour',
      hint: 'Brown for live. Blue for neutral. Green and yellow for earth.',
    },
    {
      id: 'pe-um-q5',
      type: 'numeric-entry',
      stem: 'A UK plug has three pins for the live, neutral and earth wires. How many of the three wires carry current in a healthy, working appliance?',
      tier: 'core',
      correctAnswer: 2,
      unit: 'wires',
      xpValue: 10,
      hint: 'Live brings current in. Neutral takes it back out. Earth only acts in a fault.',
      misconceptionId: 'pe-um-mis-earth-always-carries',
    },
    {
      id: 'pe-um-q6',
      type: 'multiple-choice',
      stem: 'Which colour is the earth wire in a UK appliance cable?',
      tier: 'core',
      options: [
        'Brown',
        'Blue',
        'Green and yellow stripes',
        'Plain white',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pe-um-mis-live-wrong-colour',
    },
    {
      id: 'pe-um-q7',
      type: 'numeric-entry',
      stem: 'UK mains has a frequency of 50 Hz. How long does one full cycle take, in seconds?',
      tier: 'core',
      correctAnswer: 0.02,
      unit: 's',
      xpValue: 10,
      hint: 'Period T = 1 / f. Work out 1 divided by 50.',
    },
    {
      id: 'pe-um-q8',
      type: 'numeric-entry',
      stem: 'A bedside lamp is plugged into a UK socket and switched on. How many full cycles of mains current pass through the lamp in 1 second?',
      tier: 'core',
      correctAnswer: 50,
      unit: 'cycles',
      xpValue: 10,
      hint: 'The frequency of UK mains is 50 Hz. That is the cycles per second.',
    },
    {
      id: 'pe-um-q9',
      type: 'multiple-choice',
      stem: 'Liam says, "A torch battery and the UK mains both give the same kind of current." Which response is right?',
      tier: 'confident',
      options: [
        'Liam is right. Both are direct current.',
        'Liam is wrong. A torch battery gives direct current that flows one way. UK mains gives alternating current that swings back and forth fifty times a second.',
        'Liam is right. Both are alternating current.',
        'Liam is wrong. A torch battery gives no current at all unless it is plugged into a socket.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'pe-um-mis-mains-is-dc',
      hint: 'Cells give d.c. (one way). Mains gives a.c. (back and forth).',
    },
    {
      id: 'pe-um-q10',
      type: 'multiple-choice',
      stem: 'In a healthy UK kettle that is boiling, which wire carries no current?',
      tier: 'confident',
      options: [
        'The earth wire',
        'The neutral wire',
        'The live wire',
        'All three carry the same current',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'pe-um-mis-earth-always-carries',
      hint: 'Earth is a safety route. It only carries current if a fault sends some down it.',
    },
    {
      id: 'pe-um-q11',
      type: 'multiple-choice',
      stem: 'Why is the earth pin on a UK plug longer than the live and neutral pins?',
      tier: 'confident',
      options: [
        'So that it opens the safety shutters in the socket first, letting the live and neutral pins slide in afterwards',
        'So it can carry more current than the others',
        'So that the plug looks neat from the front',
        'So that it can store extra charge for emergencies',
      ],
      correctIndex: 0,
      xpValue: 15,
      hint: 'It pushes the shutters open before the live pin can touch anything.',
    },
    {
      id: 'pe-um-q12',
      type: 'numeric-entry',
      stem: 'A pupil wants to know how many times the UK mains current changes direction each second. Use the fact that one cycle has two direction changes and the frequency is 50 Hz. How many direction changes happen in 1 second?',
      tier: 'confident',
      correctAnswer: 100,
      unit: 'changes',
      xpValue: 15,
      hint: 'Each cycle reverses twice (positive to negative, then back). 50 cycles times 2.',
    },
    {
      id: 'pe-um-q13',
      type: 'numeric-entry',
      stem: 'UK mains has a frequency of 50 Hz. How many full cycles pass through a hairdryer during a 10 s burst of drying?',
      tier: 'confident',
      correctAnswer: 500,
      unit: 'cycles',
      xpValue: 15,
      hint: 'Cycles = frequency x time. 50 x 10.',
    },
    {
      id: 'pe-um-q14',
      type: 'spot-misconception',
      stem: 'Priya says, "The UK mains is 120 V at 60 Hz, the same as in the films I watch."',
      tier: 'confident',
      statements: [
        {
          text: 'Priya is right. UK mains and the mains in those films use the same numbers.',
          isMisconception: true,
        },
        {
          text: 'Priya is wrong. UK mains is 230 V at 50 Hz. The 120 V at 60 Hz numbers are used in North America.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pe-um-mis-50-vs-60-hz',
    },
    {
      id: 'pe-um-q15',
      type: 'drag-order',
      stem: 'Put the steps in order for safely fitting a new UK plug onto a hairdryer cable.',
      tier: 'confident',
      items: [
        'Screw the back of the plug shut, with the cable grip holding the outer sheath tight.',
        'Strip the outer sheath of the cable to reveal the three coloured wires.',
        'Connect each wire to the matching pin: brown to live, blue to neutral, green and yellow to earth.',
        'Check that the fuse fitted to the live side matches the rating printed on the hairdryer.',
      ],
      correctOrder: [1, 2, 3, 0],
      xpValue: 20,
      hint: 'Strip the cable first, then match the colours, then check the fuse, then screw it shut.',
    },
    {
      id: 'pe-um-q16',
      type: 'multiple-choice',
      stem: 'A new pupil cookbook has a kettle rated "230 V, 50 Hz, 3 kW". What does the "50 Hz" tell us?',
      tier: 'challenge',
      options: [
        'The kettle uses 50 J of energy every second',
        'The supply current changes direction 50 times each second',
        'The kettle weighs 50 grams',
        'The supply completes 50 full back-and-forth cycles each second',
      ],
      correctIndex: 3,
      xpValue: 20,
      misconceptionId: 'pe-um-mis-hz-means-direction-changes',
      hint: 'Hertz means full cycles per second. Each cycle has two direction reversals.',
    },
    {
      id: 'pe-um-q17',
      type: 'multiple-choice',
      stem: 'A toaster on the kitchen counter develops a fault: a loose live wire touches the metal case. The toaster is wired correctly. What is the role of the earth wire at this moment?',
      tier: 'challenge',
      options: [
        'It does nothing, because the fuse handles everything',
        'It blocks the current from flowing, so the toaster keeps working as normal',
        'It steps the voltage down to 12 V to make the case safe to touch',
        'It carries the fault current safely down to the ground, which makes a large current flow and blows the fuse so the toaster is cut off',
      ],
      correctIndex: 3,
      xpValue: 20,
      misconceptionId: 'pe-um-mis-earth-always-carries',
      hint: 'Earth is a safety route. In a fault it makes the current spike, which is what blows the fuse.',
    },
    {
      id: 'pe-um-q18',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil works out how many full cycles of UK mains pass through a kettle while it boils a cup of water in 60 s.',
      tier: 'challenge',
      steps: [
        'Write down what we know: the frequency of UK mains is f = 50 Hz, and the kettle runs for t = 60 s.',
        'Recall what frequency means: 50 Hz is 50 full cycles every second.',
        'State the relationship: number of cycles = frequency x time.',
        null,
        'Evaluate the arithmetic: number of cycles = 3000.',
        'State the answer: 3000 full cycles of mains current pass through the kettle while it boils the water.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Substitute the numbers: number of cycles = 50 x 60.',
      xpValue: 20,
    },
    {
      id: 'pe-um-q19',
      type: 'numeric-entry',
      stem: 'A washing machine in Manchester is plugged into a 230 V mains socket and the cycle lasts 20 minutes. UK mains runs at 50 Hz. How many full cycles of current pass through the machine during the wash? Hint: convert the time to seconds first.',
      tier: 'challenge',
      correctAnswer: 60000,
      unit: 'cycles',
      xpValue: 20,
      hint: '20 minutes is 1200 s. Cycles = 50 x 1200.',
    },
    {
      id: 'pe-um-q20',
      type: 'spot-misconception',
      stem: 'Marcus says, "Earth and neutral do the same job in a UK plug, so you only really need one of them."',
      tier: 'challenge',
      statements: [
        {
          text: 'Marcus is right. They both go to roughly 0 V, so they are the same.',
          isMisconception: true,
        },
        {
          text: 'Marcus is wrong. Neutral completes the working loop and carries the current back to the substation in normal use. Earth is a safety route bonded to the metal case and only carries current when there is a fault.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'pe-um-mis-earth-equals-neutral',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2019, Paper 1F, candidates wrote "120 V" or "240 V" for UK mains voltage rather than 230 V; the report flags that the agreed UK value is 230 V at 50 Hz.
    {
      id: 'pe-um-mis-wrong-mains-voltage',
      description:
        'Believing that the UK mains voltage is 120 V (like the United States) or 240 V (an older British figure).',
      triggerAnswer: 'wrong-mains-voltage',
      correction:
        'In fact UK mains is 230 V. The figure of 240 V is the older British value, and 120 V is the supply used in North America, not in the UK.',
      reExplanation:
        'Look at the label on the back of any UK kettle or hairdryer. It reads "230 V, 50 Hz". The supply harmonised to 230 V across most of Europe in the 1990s, with a small allowed range. Older UK appliances were rated at 240 V, and the actual voltage from your wall is still close to that, but for KS3 and GCSE work the agreed UK value is 230 V.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2022, J259/02, candidates confused 50 Hz UK mains with 60 Hz US mains, often having learnt the US figure from films and games.
    {
      id: 'pe-um-mis-50-vs-60-hz',
      description:
        'Believing that the UK mains frequency is 60 Hz, like in the United States, rather than 50 Hz.',
      triggerAnswer: '50-vs-60-hz',
      correction:
        'In fact UK mains runs at 50 Hz. The 60 Hz value is used in North America and parts of South America, but not in the UK or most of Europe.',
      reExplanation:
        'Frequency means how many full cycles of voltage happen each second. UK mains gives 50 of these cycles every second, written 50 Hz. American films and games use a 60 Hz supply, so devices designed there sometimes hum at a different pitch when plugged into UK mains through a travel adaptor. Always read the label: a UK socket gives 230 V at 50 Hz.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2018, Paper 1PH0/1F, candidates wrote that "the mains gives direct current like a battery"; the report notes a.c. versus d.c. is a common boundary point.
    {
      id: 'pe-um-mis-mains-is-dc',
      description:
        'Believing that the UK mains supply is direct current, just like a cell or a torch battery.',
      triggerAnswer: 'mains-is-dc',
      correction:
        'In fact UK mains is alternating current. The voltage swings between positive and negative fifty times each second, while a cell or battery gives a steady one-way flow called direct current.',
      reExplanation:
        'A torch battery pushes current the same way around its circuit at all times. That is direct current, or d.c. A wall socket is fed from a generator at the power station. The generator spins, swapping which terminal is positive fifty times a second. So the voltage in your socket is constantly swinging from positive to negative and back. A graph of mains voltage against time is a sine wave, not a straight line.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2021, Paper 1F, candidates mixed up live, neutral and earth colours; brown for live and blue for neutral are repeatedly listed as the high-frequency confusion in the report.
    {
      id: 'pe-um-mis-live-wrong-colour',
      description:
        'Mixing up the UK appliance wire colours, often saying live is red or blue rather than brown.',
      triggerAnswer: 'live-wrong-colour',
      correction:
        'In fact UK appliance wires are colour coded: brown for live, blue for neutral, and green and yellow stripes for earth.',
      reExplanation:
        'Old British appliances used red for live, black for neutral and green for earth. The colour scheme changed many years ago to brown, blue and green and yellow, in line with the rest of Europe. Every plug a Year 7 pupil opens at home today should use the new colours. If they ever see the old ones, they belong to an antique appliance that should not be used.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2020, Paper 1PH0/1F, candidates wrote that the earth wire "carries current in normal use" or "carries the same current as live and neutral"; report stresses earth is idle unless a fault occurs.
    {
      id: 'pe-um-mis-earth-always-carries',
      description:
        'Believing that the earth wire carries the same current as live and neutral all the time a UK appliance is running.',
      triggerAnswer: 'earth-always-carries',
      correction:
        'In fact the earth wire carries no current in normal use. It only carries current if a fault sends some down it, and that fault current is what blows the fuse.',
      reExplanation:
        'Picture a healthy kettle. Current flows in along the live wire, through the heating element, and back out along the neutral wire. The earth wire is bonded to the metal case but no current flows along it. If a wire ever came loose and touched the metal case, the case would briefly become live. The earth wire would carry that fault current to ground, the current would spike, and the fuse would blow.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2023, J259/02, candidates conflated earth and neutral wires, writing that they did the same job. Report stresses earth is a safety route and neutral is part of the working loop.
    {
      id: 'pe-um-mis-earth-equals-neutral',
      description:
        'Believing that the earth and neutral wires do the same job, so a UK plug only really needs two pins.',
      triggerAnswer: 'earth-equals-neutral',
      correction:
        'In fact neutral and earth do different jobs. Neutral completes the working loop and carries the current back to the substation. Earth is bonded to the metal case and only carries current during a fault.',
      reExplanation:
        'In normal use, current flows through live and back through neutral. The neutral wire is part of the working circuit. The earth wire is a separate safety route bonded to the metal case of the appliance. If a fault makes the metal case live, the earth wire gives the current a path to ground and the fuse blows. If you fitted only two pins, that safety route would be missing, and a faulty appliance could shock anyone who touched it.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, Paper 1F, candidates wrote "50 Hz means the current changes direction 50 times a second" rather than 50 full cycles a second; report flags the cycles-versus-reversals confusion.
    {
      id: 'pe-um-mis-hz-means-direction-changes',
      description:
        'Believing that 50 Hz means the current changes direction 50 times a second, rather than 50 full cycles per second.',
      triggerAnswer: 'hz-means-direction-changes',
      correction:
        'In fact 50 Hz means 50 full back-and-forth cycles every second. Each cycle has two direction changes, so the current actually reverses 100 times per second.',
      reExplanation:
        'One full cycle of UK mains starts at zero, swings up to a positive peak, falls back through zero to a negative peak, and returns to zero. That is one cycle, with two direction reversals inside it. A frequency of 50 Hz tells you there are 50 of these full cycles each second, which means 100 direction reversals. The sine wave graph of mains voltage makes this clear: each cycle is one full wave shape.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const electricityUkMainsZoneNodes = [electricityUkMains]
