import type { SkillNode } from '@/types/content'

const KITCHEN_HAZARDS_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">A kitchen in Sheffield: spot the three hazards</text>

    <!-- Worktop -->
    <line x1="40" y1="280" x2="760" y2="280" stroke-width="4" />
    <text x="400" y="305" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Kitchen worktop, 230 V ring main below</text>

    <!-- Kettle with frayed flex (left) -->
    <rect x="80" y="200" width="100" height="60" rx="6" />
    <line x1="130" y1="200" x2="130" y2="190" />
    <circle cx="130" cy="186" r="5" />
    <text x="130" y="280" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Kettle</text>
    <!-- Frayed flex zigzag -->
    <path d="M 180 245 L 210 245 L 215 235 L 222 255 L 230 235 L 238 255 L 246 245 L 290 245" stroke-dasharray="2,3" />
    <text x="235" y="225" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">frayed flex</text>

    <!-- Filled basin with hair-dryer near it (middle) -->
    <path d="M 320 240 Q 320 270 350 270 L 410 270 Q 440 270 440 240 Z" />
    <line x1="320" y1="240" x2="440" y2="240" stroke-dasharray="4,4" />
    <text x="380" y="280" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Basin of water</text>
    <text x="380" y="255" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">water inside</text>
    <!-- Hair-dryer above the basin -->
    <rect x="460" y="200" width="60" height="30" rx="6" />
    <line x1="460" y1="215" x2="440" y2="215" />
    <text x="490" y="190" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">hair-dryer above water</text>

    <!-- Overloaded extension (right) -->
    <rect x="560" y="240" width="160" height="20" rx="3" />
    <circle cx="585" cy="250" r="3" fill="currentColor" />
    <circle cx="615" cy="250" r="3" fill="currentColor" />
    <circle cx="645" cy="250" r="3" fill="currentColor" />
    <circle cx="675" cy="250" r="3" fill="currentColor" />
    <circle cx="705" cy="250" r="3" fill="currentColor" />
    <line x1="585" y1="240" x2="585" y2="210" />
    <line x1="615" y1="240" x2="615" y2="210" />
    <line x1="645" y1="240" x2="645" y2="210" />
    <line x1="675" y1="240" x2="675" y2="210" />
    <line x1="705" y1="240" x2="705" y2="210" />
    <text x="640" y="200" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">5 plugs on one socket</text>
    <text x="640" y="280" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">extension lead</text>
  </g>
`

const PLUG_INTERIOR_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Inside a UK three-pin plug: three wires plus a fuse</text>

    <!-- Plug body outline -->
    <rect x="220" y="80" width="360" height="280" rx="20" />

    <!-- Earth pin top -->
    <rect x="380" y="50" width="40" height="40" />
    <text x="400" y="78" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">earth pin</text>

    <!-- Live pin bottom-left -->
    <rect x="260" y="360" width="40" height="40" />
    <text x="280" y="395" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">live pin</text>
    <!-- Neutral pin bottom-right -->
    <rect x="500" y="360" width="40" height="40" />
    <text x="520" y="395" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">neutral pin</text>

    <!-- Brown live wire to fuse -->
    <line x1="280" y1="360" x2="280" y2="240" stroke="currentColor" stroke-width="4" />
    <text x="240" y="220" font-size="11" font-weight="700" stroke="none" fill="currentColor">brown (live)</text>
    <!-- Fuse box -->
    <rect x="260" y="200" width="50" height="40" />
    <text x="285" y="225" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">FUSE</text>
    <line x1="285" y1="200" x2="285" y2="130" />

    <!-- Blue neutral wire straight up -->
    <line x1="520" y1="360" x2="520" y2="130" stroke="currentColor" stroke-width="4" />
    <text x="540" y="240" font-size="11" font-weight="700" stroke="none" fill="currentColor">blue (neutral)</text>

    <!-- Green-yellow earth wire from earth pin -->
    <line x1="400" y1="90" x2="400" y2="130" stroke="currentColor" stroke-width="4" stroke-dasharray="6,4" />
    <text x="420" y="115" font-size="11" font-weight="700" stroke="none" fill="currentColor">green-yellow (earth)</text>

    <!-- Cable exit -->
    <rect x="270" y="120" width="260" height="20" rx="5" />
    <text x="400" y="160" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">flex into appliance</text>
  </g>
`

const FUSE_CHOICE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Choosing a fuse: pick the next size above the working current</text>

    <!-- Appliance box -->
    <rect x="60" y="100" width="220" height="200" rx="10" />
    <text x="170" y="135" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Toaster</text>
    <text x="170" y="170" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">working current</text>
    <text x="170" y="200" text-anchor="middle" font-size="22" font-weight="700" stroke="none" fill="currentColor">4 A</text>
    <text x="170" y="240" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">normal operation</text>

    <!-- Fuse choices -->
    <text x="540" y="100" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Available fuses</text>

    <!-- 3 A fuse -->
    <rect x="440" y="120" width="200" height="50" rx="6" />
    <text x="540" y="150" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">3 A fuse: blows at 3 A</text>
    <text x="540" y="180" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Too low: trips during normal use.</text>

    <!-- 5 A fuse (correct) -->
    <rect x="440" y="200" width="200" height="50" rx="6" stroke-width="5" />
    <text x="540" y="230" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">5 A fuse: blows at 5 A</text>
    <text x="540" y="260" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">Right: just above 4 A.</text>

    <!-- 13 A fuse -->
    <rect x="440" y="280" width="200" height="50" rx="6" />
    <text x="540" y="310" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">13 A fuse: blows at 13 A</text>
    <text x="540" y="340" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Too high: lets a fault current burn the flex.</text>
  </g>
`

export const electricityHazards: SkillNode = {
  id: 'physics-electricity-hazards',
  title: 'Electrical Hazards and Safety',
  description:
    'Mains electricity in a UK home runs at 230 V and can injure or kill if it reaches a person. The three workhorse hazards are water near sockets, damaged flexes (frayed or split insulation), and overloaded extension leads. UK plugs handle each one. Damaged insulation exposes the live wire, so the wire should be replaced before use. Water near a socket gives mains a path through the user, so sockets sit away from sinks and basins. Overloaded extensions push too much current through one cable: the fuse or breaker should trip to break the loop. The earth wire and the fuse work together: under a fault, current runs to earth through the green-yellow wire, the spike of current melts the fuse, and the circuit breaks before the user is hurt. Pick a fuse just above the appliance current: a 4 A toaster takes a 5 A fuse, not a 13 A one.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-electricity-circuits',
  zoneName: 'Electricity and Circuits',
  tier: 'confident',
  prerequisites: ['physics-electricity-current-voltage'],
  curriculum: {
    ks3Objective:
      'Domestic electrical appliances and electrical safety; the dangers of mains electricity, particularly water and damaged cables.',
    awardingBodies: {
      aqa: '4.2.3.2 Electrical safety; live wire hazards; damaged insulation and overheating cables (GCSE Physics 8463)',
      edexcel:
        'Topic 2.15 Electrical hazards; dangers of damaged cables, overheating and water near sockets (GCSE Physics 1PH0)',
      ocr: 'P4.3 Hazards of mains electricity; safe practice in the home (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'pe-hz-scene-kitchen',
      title: 'A Kitchen in Sheffield: Spot the Hazards',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see why this kitchen item is unsafe and what to do about it.',
      data: {
        viewBox: '0 0 800 400',
        svg: KITCHEN_HAZARDS_SVG,
        hotspots: [
          {
            id: 'pe-hz-frayed-flex',
            x: 28,
            y: 60,
            label: 'Frayed kettle flex: damaged insulation',
            description:
              'The plastic coat on the flex has split and the copper wire is showing. If a hand touches the bare live wire, mains at 230 V flows through the body. Unplug the kettle and replace the flex before next use.',
          },
          {
            id: 'pe-hz-water-basin',
            x: 55,
            y: 60,
            label: 'Hair-dryer above a filled basin',
            description:
              'Water gives mains a path through any person who touches it. If the hair-dryer drops into the basin, the live wire makes contact with the water and the next person to touch the basin or the tap takes a 230 V shock. Keep all mains appliances away from sinks and basins.',
          },
          {
            id: 'pe-hz-overloaded',
            x: 80,
            y: 60,
            label: 'Five plugs on one extension lead',
            description:
              'In parallel sockets, branch currents add together at the junction. Five appliances drawing 4 A each push 20 A through the extension flex, which is rated for 13 A. The flex heats up and could catch fire. Use one appliance at a time, or fit a multi-way unit with a built-in cut-out.',
          },
          {
            id: 'pe-hz-rule',
            x: 50,
            y: 95,
            label: 'Rule of thumb: water, damaged cable, overload',
            description:
              'Most UK home electrical incidents trace back to one of three causes: water near a live part, damaged insulation, or too much current through one cable. Spot any of the three and switch the supply off at the wall before touching the appliance.',
          },
        ],
      },
    },
    {
      id: 'pe-hz-scene-plug',
      title: 'Inside a UK Three-Pin Plug',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how the three wires and the fuse keep the user safe.',
      data: {
        viewBox: '0 0 800 450',
        svg: PLUG_INTERIOR_SVG,
        hotspots: [
          {
            id: 'pe-hz-live-pin',
            x: 35,
            y: 85,
            label: 'Live pin: carries the 230 V supply',
            description:
              'The brown wire carries mains current from the wall socket to the appliance. Touching the live wire while the supply is on gives a shock. The fuse sits on this wire so that a fault current trips it.',
          },
          {
            id: 'pe-hz-neutral-pin',
            x: 65,
            y: 85,
            label: 'Neutral pin: completes the loop',
            description:
              'The blue wire returns current to the supply. In normal use it sits near 0 V, so it cannot drive a shock on its own. Both wires are still needed for current to flow.',
          },
          {
            id: 'pe-hz-earth-pin',
            x: 50,
            y: 18,
            label: 'Earth pin: the safety route',
            description:
              'The green-yellow earth wire connects the metal casing of the appliance to the ground. Under a fault, current would rather take this low-resistance route than pass through a user. The earth wire keeps the casing at 0 V.',
          },
          {
            id: 'pe-hz-fuse',
            x: 35,
            y: 50,
            label: 'Fuse: the cut-off switch',
            description:
              'A thin wire inside the fuse melts when the current rises above its rating. That breaks the loop, stops the supply and protects the flex from overheating. Pick a fuse just above the appliance current: 3 A, 5 A or 13 A are the common UK sizes.',
          },
        ],
      },
    },
    {
      id: 'pe-hz-scene-fuse-choice',
      title: 'Choosing the Right Fuse for a 4 A Toaster',
      type: 'labelled-diagram',
      instructions:
        'Click each fuse marker to see what happens if you fit it to a 4 A toaster.',
      data: {
        viewBox: '0 0 800 400',
        svg: FUSE_CHOICE_SVG,
        hotspots: [
          {
            id: 'pe-hz-fuse-3a',
            x: 65,
            y: 35,
            label: '3 A fuse: too low',
            description:
              'The toaster pulls 4 A in normal use. A 3 A fuse blows the first time you press the lever, so the toast never browns. Match the fuse to just above the appliance current, not below.',
          },
          {
            id: 'pe-hz-fuse-5a',
            x: 65,
            y: 55,
            label: '5 A fuse: right size',
            description:
              'A 5 A fuse lets the normal 4 A through and blows if the current spikes above 5 A. That is the safe choice: just above the working current.',
          },
          {
            id: 'pe-hz-fuse-13a',
            x: 65,
            y: 80,
            label: '13 A fuse: too high',
            description:
              'A 13 A fuse lets a 12 A fault current through without tripping. The flex, rated for only 6 A, heats up and could melt or set fire. A fuse that is too high gives a false sense of safety.',
          },
          {
            id: 'pe-hz-fuse-rule',
            x: 25,
            y: 90,
            label: 'Rule: pick the next size above the working current',
            description:
              'For a 4 A appliance, the right UK fuse is 5 A. For an 11 A kettle, fit a 13 A fuse. The fuse should let normal current flow and trip on any fault that pushes the current higher.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'pe-hz-worked-1',
      title: 'Picking a fuse for a 9 A iron',
      steps: [
        {
          explanation:
            'Set out the situation. A steam iron in a Manchester home draws a working current of 9 A from the 230 V mains. The standard UK fuse sizes for a three-pin plug are 3 A, 5 A and 13 A. Which fuse should sit in the plug?',
        },
        {
          explanation:
            'State the rule. The fuse must let normal current pass without melting, and must blow as soon as the current rises above the working value.',
          maths: 'fuse rating > working current',
        },
        {
          explanation:
            'Try the smallest fuse first. A 3 A fuse would blow at 3 A, well below the 9 A working current. The iron would not heat up.',
          maths: '3 A < 9 A: blows during normal use',
        },
        {
          explanation:
            'Try the middle size. A 5 A fuse would still blow during normal use because 9 A is above 5 A.',
          maths: '5 A < 9 A: also blows during normal use',
        },
        {
          explanation:
            'Try the largest size. A 13 A fuse lets the working 9 A through and breaks the loop if the current rises above 13 A.',
          maths: '13 A > 9 A: passes normal current, blows on fault',
        },
        {
          explanation:
            'State the answer. Fit a 13 A fuse. It is the next standard size above the 9 A working current, so it allows normal use and still trips on a fault.',
        },
      ],
    },
    {
      id: 'pe-hz-worked-2',
      title: 'Overloading an extension lead',
      steps: [
        {
          explanation:
            'Set out the situation. A 13 A extension lead in a London flat has four sockets. The user plugs in a 9 A kettle, a 7 A iron and a 4 A toaster, and switches all three on at once.',
        },
        {
          explanation:
            'State the rule. At a junction in a parallel set of sockets, branch currents add together to give the total in the shared flex.',
          maths: 'I_total = I_1 + I_2 + I_3',
        },
        {
          explanation: 'List the branch currents from the three appliances.',
          maths: 'I_1 = 9 A, I_2 = 7 A, I_3 = 4 A',
        },
        {
          explanation: 'Add them to get the total current in the extension flex.',
          maths: 'I_total = 9 + 7 + 4 = 20 A',
        },
        {
          explanation:
            'Compare with the rating of the flex. The extension is rated for 13 A, so 20 A is well above the safe limit.',
          maths: '20 A > 13 A: overload',
        },
        {
          explanation:
            'State the answer. The total current is 20 A, which is 7 A above the 13 A rating. The flex will heat up and the fuse or breaker should trip. The user should run only one heavy appliance at a time.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pe-hz-q1',
      type: 'multiple-choice',
      stem: 'Which list names the three most common mains electrical hazards in a UK home?',
      tier: 'core',
      options: [
        'Bright sunlight, loud music and warm air.',
        'Water near sockets, damaged cable insulation and overloaded sockets.',
        'Low voltage batteries, dry hands and short flexes.',
        'Cold rooms, plastic plugs and copper wires.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pe-hz-mis-mains-is-low-risk',
      hint: 'Think of the three things adults tell you to check before plugging in: cable, water, and how many plugs are sharing.',
    },
    {
      id: 'pe-hz-q2',
      type: 'multiple-choice',
      stem: 'A pupil notices the plastic coat on the kitchen kettle flex has split and a strand of copper is showing. What is the safest action?',
      tier: 'core',
      options: [
        'Switch off at the wall, unplug the kettle and have the flex replaced before next use.',
        'Wrap a tea towel around the bare wire and carry on boiling water.',
        'Use the kettle but only with dry hands.',
        'Push the copper back inside and tape the split shut with sticky tape.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pe-hz-mis-tape-is-safe',
      hint: 'The risk is the live wire reaching a person. Any quick patch leaves the live wire exposed under the cover.',
    },
    {
      id: 'pe-hz-q3',
      type: 'multiple-choice',
      stem: 'Why is a hair-dryer above a basin of water a serious hazard?',
      tier: 'core',
      options: [
        'Water makes the motor spin slower than usual.',
        'The water might rust the hair-dryer over time.',
        'If the hair-dryer drops in, the live wire makes contact with the water, and a person touching the basin or the tap takes a 230 V shock.',
        'Hair-dryers only work in dry air.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pe-hz-mis-water-is-fine-if-careful',
      hint: 'Water lets mains find a route to anyone touching the basin or the metal tap.',
    },
    {
      id: 'pe-hz-q4',
      type: 'multiple-choice',
      stem: 'What is the role of the earth wire (green and yellow) in a UK three-pin plug?',
      tier: 'core',
      options: [
        'It carries the working current of the appliance.',
        'It connects the metal casing of the appliance to the ground, so a fault current runs to earth and the fuse blows before a person is hurt.',
        'It boosts the voltage so the appliance runs better.',
        'It joins the live and neutral wires together inside the plug.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pe-hz-mis-earth-is-extra-power',
      hint: 'The earth wire is for safety, not for running the appliance. It works alongside the fuse.',
    },
    {
      id: 'pe-hz-q5',
      type: 'multiple-choice',
      stem: 'What happens when a fuse "blows"?',
      tier: 'core',
      options: [
        'The fuse adds extra voltage to the circuit.',
        'The fuse explodes and pushes more current around the loop.',
        'The fuse changes colour but keeps the current flowing.',
        'A thin wire inside the fuse melts when the current rises above its rating, breaking the loop and stopping the supply.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'pe-hz-mis-earth-is-extra-power',
      hint: 'The fuse is a cut-off. A thin wire inside melts to break the loop.',
    },
    {
      id: 'pe-hz-q6',
      type: 'numeric-entry',
      stem: 'A toaster has a working current of 4 A. From the standard UK fuses (3 A, 5 A or 13 A), the right fuse is the next size above the working current. Give the fuse rating, in A.',
      tier: 'core',
      correctAnswer: 5,
      unit: 'A',
      xpValue: 10,
      misconceptionId: 'pe-hz-mis-always-fit-13a',
      hint: 'Pick the smallest standard fuse that still sits above 4 A.',
    },
    {
      id: 'pe-hz-q7',
      type: 'numeric-entry',
      stem: 'An extension lead in a Leeds flat has three sockets on one flex. A kettle drawing 9 A, an iron drawing 7 A and a toaster drawing 4 A are all switched on at once. What is the total current flowing in the shared flex, in A?',
      tier: 'core',
      correctAnswer: 20,
      unit: 'A',
      xpValue: 10,
      misconceptionId: 'pe-hz-mis-overload-not-real',
      hint: 'Branch currents add at a parallel junction. Add 9 + 7 + 4.',
    },
    {
      id: 'pe-hz-q8',
      type: 'multiple-choice',
      stem: 'A pupil in Bristol says "Mains electricity is safe to touch if your hands are dry." Which sentence is the best reply?',
      tier: 'confident',
      options: [
        'They are right; dry skin always blocks mains current.',
        'They are not right. Dry skin has higher resistance than wet skin, but 230 V mains can still drive a dangerous current through the body. Treat all mains as live until the wall switch is off.',
        'They are right, but only for adults.',
        'They are right, because 230 V is a low voltage.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'pe-hz-mis-mains-is-low-risk',
      hint: 'Dry skin gives some resistance, but 230 V is plenty to push a harmful current.',
    },
    {
      id: 'pe-hz-q9',
      type: 'numeric-entry',
      stem: 'An iron has a working current of 9 A in a Manchester home. The standard UK fuses are 3 A, 5 A and 13 A. What fuse should be fitted in the plug, in A?',
      tier: 'confident',
      correctAnswer: 13,
      unit: 'A',
      xpValue: 15,
      misconceptionId: 'pe-hz-mis-always-fit-13a',
      hint: 'The fuse must sit just above 9 A. 5 A would blow at once; 13 A is the next size up.',
    },
    {
      id: 'pe-hz-q10',
      type: 'numeric-entry',
      stem: 'A lamp in a bedroom in Oxford has a working current of 0.2 A and is fitted with a 13 A fuse. A fault inside the lamp lets a current of 8 A flow. Will the fuse blow? Answer 1 for yes and 0 for no.',
      tier: 'confident',
      correctAnswer: 0,
      xpValue: 15,
      misconceptionId: 'pe-hz-mis-always-fit-13a',
      hint: 'A 13 A fuse only blows above 13 A. 8 A is below that, so the fuse stays whole and the fault current keeps flowing.',
    },
    {
      id: 'pe-hz-q11',
      type: 'numeric-entry',
      stem: 'A 230 V mains supply makes contact with a person whose body resistance from one hand to the other is 1000 ohms (slightly damp skin). Using V = I x R rearranged as I = V / R, what current would pass through them, in amperes? Give your answer to the nearest tenth.',
      tier: 'confident',
      correctAnswer: 0.2,
      unit: 'A',
      tolerance: 0.05,
      xpValue: 15,
      hint: 'I = V / R = 230 / 1000.',
    },
    {
      id: 'pe-hz-q12',
      type: 'multiple-choice',
      stem: 'A four-way extension lead is rated for 13 A. A pupil wants to run a 9 A kettle and a 7 A iron at the same time. Which sentence is the safest reply?',
      tier: 'confident',
      options: [
        'Plug both in. 9 + 7 = 16 A is below 13 A.',
        'Plug both in. Extension leads share the current out evenly.',
        'Plug only one in at a time. 9 + 7 = 16 A is above the 13 A rating, so the flex would overheat.',
        'Plug both in, but only for short bursts.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pe-hz-mis-overload-not-real',
      hint: 'Branch currents add. 9 + 7 = 16 A, which sits above 13 A.',
    },
    {
      id: 'pe-hz-q13',
      type: 'spot-misconception',
      stem: 'Priya says "If I always fit a 13 A fuse, my appliances are extra safe because the biggest fuse must give the best protection."',
      tier: 'confident',
      statements: [
        {
          text: 'Priya is right. A bigger fuse gives more protection because it can carry more current.',
          isMisconception: true,
        },
        {
          text: 'Priya is not right. A 13 A fuse only blows above 13 A. On a low-current appliance, the flex melts before the fuse trips. Pick the smallest standard fuse just above the working current.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pe-hz-mis-always-fit-13a',
    },
    {
      id: 'pe-hz-q14',
      type: 'multiple-choice',
      stem: 'A pupil sees a frayed phone-charger flex and tape over the split. Which sentence is the best reply?',
      tier: 'confident',
      options: [
        'Tape is a safe fix because plastic blocks current.',
        'Tape is fine for a week or two while you save up for a new one.',
        'Tape leaves the live wire under a thin layer that can peel back. Replace the flex; never tape a damaged mains cable.',
        'Tape adds extra resistance, which lowers the current to a safe level.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pe-hz-mis-tape-is-safe',
      hint: 'The risk is direct contact with the live wire. Sticky tape peels back and offers no real cover.',
    },
    {
      id: 'pe-hz-q15',
      type: 'drag-order',
      stem: 'Put the steps in order for choosing the right UK fuse for an appliance.',
      tier: 'confident',
      items: [
        'Fit the chosen fuse in the plug and test the appliance.',
        'Find the working current of the appliance, in amperes.',
        'Pick the smallest standard fuse (3 A, 5 A or 13 A) that sits above the working current.',
        'List the available UK fuse sizes: 3 A, 5 A and 13 A.',
      ],
      correctOrder: [1, 3, 2, 0],
      xpValue: 15,
      hint: 'Working current first, then list the fuse sizes, then pick the next size up, then fit it.',
    },
    {
      id: 'pe-hz-q16',
      type: 'numeric-entry',
      stem: 'A 230 V toaster develops a fault that makes its outer metal casing live. The casing is connected to the earth pin by a wire of resistance 0.5 ohms. Using I = V / R, what current flows along the earth wire under the fault, in amperes? Give your answer to the nearest whole number.',
      tier: 'challenge',
      correctAnswer: 460,
      unit: 'A',
      tolerance: 5,
      xpValue: 20,
      hint: 'I = V / R = 230 / 0.5. The huge current melts the fuse at once and breaks the loop.',
    },
    {
      id: 'pe-hz-q17',
      type: 'numeric-entry',
      stem: 'A four-way extension lead is rated for 13 A. A 5 A games console and a 2 A lamp are already plugged in. What is the largest extra current, in A, that another appliance could draw before the total reached the 13 A limit?',
      tier: 'challenge',
      correctAnswer: 6,
      unit: 'A',
      xpValue: 20,
      misconceptionId: 'pe-hz-mis-overload-not-real',
      hint: 'Total so far is 5 + 2 = 7 A. Headroom = 13 - 7.',
    },
    {
      id: 'pe-hz-q18',
      type: 'spot-misconception',
      stem: 'Marcus says "The earth wire feeds extra current to the appliance, so a kettle with three wires boils water more sharply than one with only two."',
      tier: 'challenge',
      statements: [
        {
          text: 'Marcus is right. The earth wire is a third route for current to flow during normal use.',
          isMisconception: true,
        },
        {
          text: 'Marcus is not right. In normal use no current flows in the earth wire; it is a safety route. Current only flows in it during a fault, when it pulls the live wire to earth and melts the fuse.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'pe-hz-mis-earth-is-extra-power',
    },
    {
      id: 'pe-hz-q19',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is checking whether a 13 A extension flex will overheat when a 9 A kettle, a 3 A radio and a 4 A printer are all switched on at once.',
      tier: 'challenge',
      steps: [
        'Set out the situation: rated current of the flex = 13 A; branch currents = 9 A, 3 A, 4 A.',
        'State the junction rule: branch currents at a parallel junction add to give the total in the shared flex.',
        'Write the sum: total current = 9 + 3 + 4.',
        null,
        'Compare with the rating: 16 A is 3 A above the 13 A limit.',
        'State the answer: the flex will overheat; the fuse or breaker should trip and one appliance should be unplugged before resetting.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Evaluate the sum: total current = 16 A.',
      xpValue: 20,
    },
    {
      id: 'pe-hz-q20',
      type: 'multiple-choice',
      stem: 'A toaster in a Cardiff home develops a fault and its metal casing becomes live. The earth wire and the fuse work together to keep the user safe. Which sentence best describes what happens in the right order?',
      tier: 'challenge',
      options: [
        'The fuse heats the casing; the earth wire then cools it back down.',
        'A large fault current runs from the live wire, through the casing, down the low-resistance earth wire to ground. The spike of current melts the fuse in the plug, which breaks the loop and cuts the supply.',
        'The earth wire stores the fault current until the user notices.',
        'The fuse holds the casing at 230 V so a person feels no shock.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'pe-hz-mis-earth-is-extra-power',
      hint: 'Earth wire offers a low-resistance path; the resulting current spike melts the fuse and breaks the loop.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 1F, candidates wrote that 230 V mains was safe to touch with dry hands, missing that 230 V is plenty to drive a harmful current through the body.
    {
      id: 'pe-hz-mis-mains-is-low-risk',
      description:
        'Believing that UK 230 V mains is safe to touch as long as the user has dry hands or stands still.',
      triggerAnswer: 'mains-is-low-risk',
      correction:
        'In fact 230 V mains is high enough to drive a harmful current through the body even when skin is dry. Treat all mains as live until the wall switch is off.',
      reExplanation:
        'Dry skin has higher resistance than wet skin, but only by a factor of about ten. With a body resistance of 1000 ohms, 230 V drives 0.23 A through the body, which is well above the level that stops the heart. Wet hands or a bath can drop body resistance to about 100 ohms, giving 2.3 A. Both are dangerous.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2019, Paper 1PH0/1F, candidates wrote that wrapping tape around a frayed flex was an acceptable repair, missing that the live wire stays exposed under the tape.
    {
      id: 'pe-hz-mis-tape-is-safe',
      description:
        'Treating sticky tape over a damaged flex as a safe fix, missing that the live wire remains exposed under the tape.',
      triggerAnswer: 'tape-is-safe',
      correction:
        'In fact tape is not a safe repair for mains flex. The tape peels back over time and the live wire stays exposed. The whole flex must be replaced by an adult or an electrician.',
      reExplanation:
        'A mains flex has thick rubber or PVC moulded around each conductor for a reason: that layer must take 230 V without breaking down. Sticky tape is a thin plastic sheet with weak glue. Heat from the flex softens it; daily handling peels it back. The bare copper underneath is still live whenever the plug is in. Replace the flex; never patch it.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2021, J259/02, candidates argued that water near a socket was only a risk if the user was clumsy, missing that water is a conducting path to anyone touching the basin or tap.
    {
      id: 'pe-hz-mis-water-is-fine-if-careful',
      description:
        'Believing that water near a socket or mains appliance is only a risk if the user is clumsy.',
      triggerAnswer: 'water-is-fine-if-careful',
      correction:
        'Actually any path of water joining a live part to a person can carry mains current. Carefulness does not change the physics. Keep sockets and mains appliances away from sinks and basins.',
      reExplanation:
        'If a hair-dryer drops into a basin, the live wire contacts the water and the water becomes a 230 V conductor. The next person to touch the tap, the basin, or even a damp floor near it takes the shock. UK wiring rules ban sockets within reach of a bath or basin for this reason. The risk is about the path, not about how careful the user is.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, Paper 1F, candidates wrote that the earth wire supplies extra current to the appliance, missing that it is a safety route that carries no current in normal use.
    {
      id: 'pe-hz-mis-earth-is-extra-power',
      description:
        'Believing that the earth wire supplies extra current to the appliance, missing that it is a safety route that normally carries no current.',
      triggerAnswer: 'earth-is-extra-power',
      correction:
        'In fact the earth wire carries no current in normal use. It is a low-resistance route to ground that only carries current during a fault, so the fuse blows and the user is protected.',
      reExplanation:
        'In normal operation, current flows in through the brown live wire and back out through the blue neutral wire. The green-yellow earth wire sits at 0 V and carries nothing. When a fault makes the metal casing live, the earth wire offers a near-zero resistance path to ground. The resulting current spike (often hundreds of amperes) melts the fuse at once and breaks the loop.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2022, J259/02, candidates wrote that a 13 A fuse was always the safest choice because it could carry more current, missing that the fuse must sit just above the working current to trip on a fault.
    {
      id: 'pe-hz-mis-always-fit-13a',
      description:
        'Treating a 13 A fuse as always the safest, missing that a fuse must sit just above the working current so it trips on a fault.',
      triggerAnswer: 'always-fit-13a',
      correction:
        'Actually a 13 A fuse only trips above 13 A. On a low-current appliance the flex can melt before the fuse trips. Match the fuse to the next standard size above the working current.',
      reExplanation:
        'A phone charger drawing 0.2 A behind a 13 A fuse is unprotected: a fault current of 10 A would melt the thin charger flex long before the fuse blows. Fit a 3 A fuse instead. The right rule is: list the standard sizes (3 A, 5 A, 13 A) and pick the smallest one that still sits above the working current.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2018, Paper 1PH0/1F, candidates wrote that branches in a parallel socket "share" the current so an extension lead cannot overload, missing that branch currents add at the junction.
    {
      id: 'pe-hz-mis-overload-not-real',
      description:
        'Believing that an extension lead "shares" the current evenly so it cannot overload, missing that branch currents add at the junction.',
      triggerAnswer: 'overload-not-real',
      correction:
        'In fact branch currents add at a parallel junction. A 5 A appliance plus an 8 A appliance pushes 13 A through the shared flex, which is the full rating of a UK extension.',
      reExplanation:
        'Each socket on a four-way extension is a parallel branch. The current through the shared flex equals the sum of the branch currents: I_total = I_1 + I_2 + I_3. A 9 A kettle and a 7 A iron together pull 16 A through a 13 A flex, well above its safe limit. The flex heats up; the built-in fuse or the wall breaker should trip before a fire starts.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const electricityHazardsZoneNodes = [electricityHazards]
