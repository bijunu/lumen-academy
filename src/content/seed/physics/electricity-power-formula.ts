import type { SkillNode } from '@/types/content'

const POWER_TRIANGLE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">The P = I V triangle: cover what you want, read what is left</text>

    <!-- Outer triangle -->
    <polygon points="400,80 240,320 560,320" />
    <!-- Horizontal divider -->
    <line x1="280" y1="200" x2="520" y2="200" />
    <!-- Vertical divider in the lower half -->
    <line x1="400" y1="200" x2="400" y2="320" />

    <!-- P in the top half -->
    <text x="400" y="170" text-anchor="middle" font-size="46" font-weight="700" stroke="none" fill="currentColor">P</text>
    <!-- I in the bottom-left -->
    <text x="340" y="280" text-anchor="middle" font-size="36" font-weight="700" stroke="none" fill="currentColor">I</text>
    <!-- V in the bottom-right -->
    <text x="460" y="280" text-anchor="middle" font-size="36" font-weight="700" stroke="none" fill="currentColor">V</text>

    <!-- Side panel left: cover P -->
    <text x="120" y="120" font-size="14" font-weight="700" stroke="none" fill="currentColor">Cover P:</text>
    <text x="120" y="145" font-size="14" stroke="none" fill="currentColor">read I x V</text>
    <text x="120" y="165" font-size="14" stroke="none" fill="currentColor">so P = I V</text>

    <text x="120" y="210" font-size="14" font-weight="700" stroke="none" fill="currentColor">Cover I:</text>
    <text x="120" y="235" font-size="14" stroke="none" fill="currentColor">read P over V</text>
    <text x="120" y="255" font-size="14" stroke="none" fill="currentColor">so I = P / V</text>

    <text x="120" y="300" font-size="14" font-weight="700" stroke="none" fill="currentColor">Cover V:</text>
    <text x="120" y="325" font-size="14" stroke="none" fill="currentColor">read P over I</text>
    <text x="120" y="345" font-size="14" stroke="none" fill="currentColor">so V = P / I</text>

    <!-- Side panel right: units -->
    <text x="640" y="120" font-size="14" font-weight="700" stroke="none" fill="currentColor">Units:</text>
    <text x="640" y="145" font-size="14" stroke="none" fill="currentColor">P in watts (W)</text>
    <text x="640" y="165" font-size="14" stroke="none" fill="currentColor">I in amperes (A)</text>
    <text x="640" y="185" font-size="14" stroke="none" fill="currentColor">V in volts (V)</text>
    <text x="640" y="220" font-size="13" stroke="none" fill="currentColor">1 kW = 1000 W</text>
  </g>
`

const UK_APPLIANCES_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">UK mains appliances at 230 V: P = I V at work</text>

    <!-- Header row -->
    <line x1="60" y1="60" x2="740" y2="60" />
    <text x="180" y="85" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Appliance</text>
    <text x="380" y="85" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Power rating</text>
    <text x="560" y="85" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Current at 230 V</text>
    <text x="690" y="85" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">13 A plug?</text>
    <line x1="60" y1="95" x2="740" y2="95" />

    <!-- Kettle row -->
    <text x="180" y="125" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Kettle</text>
    <text x="380" y="125" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">2.3 kW = 2300 W</text>
    <text x="560" y="125" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">2300 / 230 = 10 A</text>
    <text x="690" y="125" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Yes</text>

    <!-- Microwave row -->
    <text x="180" y="155" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Microwave</text>
    <text x="380" y="155" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">800 W</text>
    <text x="560" y="155" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">800 / 230 = 3.5 A</text>
    <text x="690" y="155" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Yes</text>

    <!-- Lamp row -->
    <text x="180" y="185" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Filament lamp</text>
    <text x="380" y="185" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">60 W</text>
    <text x="560" y="185" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">60 / 230 = 0.26 A</text>
    <text x="690" y="185" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Yes</text>

    <!-- Tumble dryer row -->
    <text x="180" y="215" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Tumble dryer</text>
    <text x="380" y="215" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">2 kW = 2000 W</text>
    <text x="560" y="215" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">2000 / 230 = 8.7 A</text>
    <text x="690" y="215" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Yes</text>

    <!-- Shower row, flagged -->
    <text x="180" y="245" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Electric shower</text>
    <text x="380" y="245" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">9.5 kW = 9500 W</text>
    <text x="560" y="245" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">9500 / 230 = 41 A</text>
    <text x="690" y="245" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">No: hardwired</text>

    <line x1="60" y1="265" x2="740" y2="265" />
    <text x="400" y="295" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">A 13 A plug tops out at 13 amperes. A 9.5 kW shower draws far more.</text>
    <text x="400" y="315" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">It must run on its own thicker cable straight from the consumer unit.</text>
    <text x="400" y="345" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">Sanity check every current: if I is bigger than 13 A, the appliance cannot use a normal plug.</text>
  </g>
`

const ENERGY_LINK_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Power, energy, and time: two linked rules</text>

    <!-- Left box: P = I V -->
    <rect x="60" y="70" width="320" height="120" />
    <text x="220" y="115" text-anchor="middle" font-size="28" font-weight="700" stroke="none" fill="currentColor">P = I x V</text>
    <text x="220" y="150" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Power in watts (W),</text>
    <text x="220" y="170" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">current in A, voltage in V.</text>

    <!-- Right box: E = P x t -->
    <rect x="420" y="70" width="320" height="120" />
    <text x="580" y="115" text-anchor="middle" font-size="28" font-weight="700" stroke="none" fill="currentColor">E = P x t</text>
    <text x="580" y="150" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Energy in joules (J),</text>
    <text x="580" y="170" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">power in W, time in s.</text>

    <!-- Worked example strip -->
    <line x1="60" y1="220" x2="740" y2="220" />
    <text x="400" y="248" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Worked example: a 2.3 kW kettle run for 120 s</text>
    <text x="400" y="275" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">P = 2300 W, so I = 2300 / 230 = 10 A.</text>
    <text x="400" y="298" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">E = P x t = 2300 x 120 = 276 000 J</text>
    <text x="400" y="321" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">In kilowatt-hours: E = 2.3 kW x (120 / 3600) h = 0.077 kW h</text>

    <text x="400" y="365" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">Joules suit short jobs in seconds. kW h suit billing over hours, where 1 kW h = 3 600 000 J.</text>
  </g>
`

export const electricityPowerFormula: SkillNode = {
  id: 'physics-electricity-power-formula',
  title: 'Electrical Power: P = I x V',
  description:
    'Every mains appliance has a power rating that tells you how many joules it transfers each second. The rule that ties it together is P = I x V, where P is the power in watts, I is the current in amperes, and V is the potential difference in volts. Run it forward to find the power from current and voltage; cover I to read I = P / V and find the current a UK appliance draws from the 230 V mains; cover V to read V = P / I. Power ratings are often printed in kilowatts, so convert with 1 kW = 1000 W before substituting. Pair P = I V with E = P x t and you can also find the energy transferred over a time, in joules or in kilowatt-hours for the fuel bill. By the end of this node, you can size the current a kettle, microwave, lamp, tumble dryer, or shower draws and judge whether it can run from a normal 13 A plug.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-electricity-circuits',
  zoneName: 'Electricity and Circuits',
  tier: 'challenge',
  prerequisites: ['physics-electricity-ohms-law-practice'],
  curriculum: {
    ks3Objective:
      'Comparing power ratings of appliances in watts (W, kW); comparing amounts of energy transferred (J, kJ, kW hour); domestic fuel bills.',
    awardingBodies: {
      aqa: '4.2.4.1 Electrical power, P = V I; 4.2.4.2 Energy transfers in appliances (GCSE Physics 8463)',
      edexcel:
        'Topic 2.17 Electrical power, P = I x V; 2.18 Energy transferred by appliances (GCSE Physics 1PH0)',
      ocr: 'P4.3 Power in electric circuits, P = I V; ratings of household appliances (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'pe-pf-scene-triangle',
      title: 'The P = I V Triangle',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see what you read when you cover one letter of the power triangle.',
      data: {
        viewBox: '0 0 800 400',
        svg: POWER_TRIANGLE_SVG,
        hotspots: [
          {
            id: 'pe-pf-tri-p',
            x: 50,
            y: 35,
            label: 'Cover P: P = I x V',
            description:
              'When you cover P, you see I and V sitting side by side. They multiply, so P = I x V. Use this form when you know the current and the voltage and want the power.',
          },
          {
            id: 'pe-pf-tri-i',
            x: 43,
            y: 65,
            label: 'Cover I: I = P / V',
            description:
              'When you cover I, you see P on top and V underneath. So I = P / V. Use this form when you know the rated power and the mains voltage and want the current the appliance pulls.',
          },
          {
            id: 'pe-pf-tri-v',
            x: 58,
            y: 65,
            label: 'Cover V: V = P / I',
            description:
              'When you cover V, you see P on top and I underneath. So V = P / I. Use this form when you know the power and the current and want the voltage across the appliance.',
          },
          {
            id: 'pe-pf-tri-units',
            x: 82,
            y: 35,
            label: 'Units: watts, amperes, volts',
            description:
              'P is in watts (W), I is in amperes (A), V is in volts (V). 1 kW = 1000 W, so convert kilowatts to watts before substituting. Mix the units and the answer will be 1000 times wrong.',
          },
        ],
      },
    },
    {
      id: 'pe-pf-scene-appliances',
      title: 'UK Appliances at 230 V',
      type: 'labelled-diagram',
      instructions:
        'Click each appliance to see how P = I V predicts the current it draws from the UK 230 V mains.',
      data: {
        viewBox: '0 0 800 400',
        svg: UK_APPLIANCES_SVG,
        hotspots: [
          {
            id: 'pe-pf-app-kettle',
            x: 50,
            y: 32,
            label: 'Kettle: 2.3 kW gives 10 A',
            description:
              'A 2.3 kW kettle is rated 2300 W. At 230 V, I = P / V = 2300 / 230 = 10 A. That sits below the 13 A limit of a standard UK plug, so the kettle plugs straight into a wall socket.',
          },
          {
            id: 'pe-pf-app-microwave',
            x: 50,
            y: 40,
            label: 'Microwave: 800 W gives 3.5 A',
            description:
              'An 800 W microwave is rated 800 W. At 230 V, I = 800 / 230 = 3.5 A. Well below 13 A, so the standard plug is fine. Smaller appliances draw smaller currents.',
          },
          {
            id: 'pe-pf-app-lamp',
            x: 50,
            y: 47,
            label: 'Lamp: 60 W gives 0.26 A',
            description:
              'A 60 W filament lamp pulls a small current at the mains. I = 60 / 230 = 0.26 A. Even a whole room of lamps stays well below the plug rating.',
          },
          {
            id: 'pe-pf-app-dryer',
            x: 50,
            y: 55,
            label: 'Tumble dryer: 2 kW gives 8.7 A',
            description:
              'A 2 kW tumble dryer is rated 2000 W. At 230 V, I = 2000 / 230 = 8.7 A. Still under 13 A, so a normal plug works, though the dryer should sit on its own socket.',
          },
          {
            id: 'pe-pf-app-shower',
            x: 50,
            y: 62,
            label: 'Shower: 9.5 kW gives 41 A',
            description:
              'A 9.5 kW shower is rated 9500 W. At 230 V, I = 9500 / 230 = 41 A. That is far above the 13 A plug limit, so showers are wired on their own thicker circuit straight from the consumer unit.',
          },
          {
            id: 'pe-pf-app-rule',
            x: 50,
            y: 85,
            label: 'Sanity-check rule',
            description:
              'Work out I = P / V for every appliance. If the result is bigger than 13 A, a normal plug will not safely carry it. The appliance needs a hardwired circuit.',
          },
        ],
      },
    },
    {
      id: 'pe-pf-scene-energy-link',
      title: 'Power, Energy, and Fuel Bills',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how P = I V pairs with E = P x t to give the energy transferred in joules and in kilowatt-hours.',
      data: {
        viewBox: '0 0 800 400',
        svg: ENERGY_LINK_SVG,
        hotspots: [
          {
            id: 'pe-pf-eng-piv',
            x: 27,
            y: 32,
            label: 'P = I V: rate of energy transfer',
            description:
              'P = I V tells you how many joules an appliance moves each second. A 2300 W kettle moves 2300 J per second the moment it switches on.',
          },
          {
            id: 'pe-pf-eng-ept',
            x: 73,
            y: 32,
            label: 'E = P x t: total energy in joules',
            description:
              'Multiply the power by the running time in seconds and you get the total energy in joules. A 2300 W kettle on for 120 s moves 2300 x 120 = 276 000 J.',
          },
          {
            id: 'pe-pf-eng-kwh',
            x: 50,
            y: 82,
            label: 'kW h: the unit on the fuel bill',
            description:
              'Energy suppliers bill in kilowatt-hours. 1 kW h = 1000 W x 3600 s = 3 600 000 J. To get kW h, leave power in kW and time in hours, then multiply.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'pe-pf-worked-1',
      title: 'Find P: a 230 V hair dryer drawing 4.0 A',
      steps: [
        {
          explanation:
            'Set out the situation. A hair dryer in a Sevenoaks bathroom is plugged into a 230 V socket and an ammeter on its lead reads 4.0 A. We want the power rating of the dryer in watts.',
        },
        {
          explanation: 'Write what you know.',
          maths: 'I = 4.0 A, V = 230 V, P = ?',
        },
        {
          explanation:
            'Pick the right form. We want P, so cover P on the triangle and read I and V side by side.',
          maths: 'P = I x V',
        },
        {
          explanation: 'Substitute the numbers.',
          maths: 'P = 4.0 x 230',
        },
        {
          explanation: 'Evaluate the arithmetic.',
          maths: 'P = 920 W',
        },
        {
          explanation:
            'State the answer with the unit. The hair dryer has a power rating of 920 W, just under 1 kW. A quick sanity check: 4 A is a sensible current for a small heating appliance, and 920 W matches a typical low-setting dryer.',
        },
      ],
    },
    {
      id: 'pe-pf-worked-2',
      title: 'Find I, then E: a 2.3 kW kettle on for 120 s at 230 V',
      steps: [
        {
          explanation:
            'Set out the situation. A 2.3 kW kettle in a Manchester kitchen runs from the UK 230 V mains for 120 s. We want the current it draws and the total energy it transfers, in joules.',
        },
        {
          explanation:
            'Convert the rating to watts first. The power is in kilowatts, so multiply by 1000.',
          maths: 'P = 2.3 kW = 2300 W',
        },
        {
          explanation: 'Write what you know.',
          maths: 'P = 2300 W, V = 230 V, t = 120 s',
        },
        {
          explanation:
            'Cover I on the triangle to pick the right form for the current.',
          maths: 'I = P / V',
        },
        {
          explanation: 'Substitute and evaluate to get the current.',
          maths: 'I = 2300 / 230 = 10 A',
        },
        {
          explanation:
            'Now use E = P x t to find the total energy transferred in joules. Both P and t are already in their base units, so the answer drops out in joules.',
          maths: 'E = P x t = 2300 x 120 = 276 000 J',
        },
        {
          explanation:
            'State the answer. The kettle draws 10 A from the 230 V mains and transfers 276 000 J of energy in those 120 s. A 10 A current sits safely below the 13 A plug limit, so the kettle is fine on a standard socket.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pe-pf-q1',
      type: 'multiple-choice',
      stem: 'Which form of the equation gives the power of an appliance when you know the current and the voltage?',
      tier: 'core',
      options: [
        'P = I + V',
        'P = I / V',
        'P = V / I',
        'P = I x V',
      ],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Cover P on the triangle. The two letters left side by side multiply.',
    },
    {
      id: 'pe-pf-q2',
      type: 'numeric-entry',
      stem: 'A heater on a Dover building site draws 5 A from a 230 V supply. What is its power, in W?',
      tier: 'core',
      correctAnswer: 1150,
      unit: 'W',
      xpValue: 10,
      hint: 'P = I x V = 5 x 230.',
    },
    {
      id: 'pe-pf-q3',
      type: 'multiple-choice',
      stem: 'Which set of units matches P, I, and V in the equation P = I V?',
      tier: 'core',
      options: [
        'P in joules, I in amperes, V in seconds',
        'P in watts, I in amperes, V in volts',
        'P in volts, I in watts, V in amperes',
        'P in ohms, I in volts, V in watts',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pe-pf-mis-watts-joules',
      hint: 'Power is in watts, current is in amperes, potential difference is in volts.',
    },
    {
      id: 'pe-pf-q4',
      type: 'multiple-choice',
      stem: 'A 230 V Sevenoaks kettle is labelled 2.3 kW. What is this rating in watts?',
      tier: 'core',
      options: [
        '23 W',
        '230 W',
        '2300 W',
        '23 000 W',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pe-pf-mis-kw-as-w',
      hint: '1 kW = 1000 W, so multiply by 1000.',
    },
    {
      id: 'pe-pf-q5',
      type: 'multiple-choice',
      stem: 'Which form of the equation should you use to find the current an appliance draws when you know its power and the mains voltage?',
      tier: 'core',
      options: [
        'I = P + V',
        'I = P x V',
        'I = V / P',
        'I = P / V',
      ],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Cover I on the triangle and read P on top, V underneath.',
    },
    {
      id: 'pe-pf-q6',
      type: 'numeric-entry',
      stem: 'A 60 W filament lamp runs from the UK 230 V mains in a Norwich living room. What is the current through it, in A? Give your answer to two decimal places.',
      tier: 'core',
      correctAnswer: 0.26,
      tolerance: 0.01,
      unit: 'A',
      xpValue: 10,
      hint: 'I = P / V = 60 / 230.',
    },
    {
      id: 'pe-pf-q7',
      type: 'multiple-choice',
      stem: 'A pupil writes that a watt is "the same thing as a joule". What is the best correction?',
      tier: 'core',
      options: [
        'Leave it. Watts and joules mean the same.',
        'A watt is the same as a volt, not a joule.',
        'A watt is one joule transferred per second. A joule is a total amount of energy.',
        'A watt is the same as an ampere; both measure energy.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pe-pf-mis-watts-joules',
      hint: 'A watt is a rate (joules per second). A joule is a total quantity of energy.',
    },
    {
      id: 'pe-pf-q8',
      type: 'numeric-entry',
      stem: 'An 800 W microwave runs from the 230 V mains in a Cardiff kitchen. What is the current it draws, in A? Give your answer to one decimal place.',
      tier: 'confident',
      correctAnswer: 3.5,
      tolerance: 0.05,
      unit: 'A',
      xpValue: 15,
      hint: 'I = P / V = 800 / 230.',
    },
    {
      id: 'pe-pf-q9',
      type: 'numeric-entry',
      stem: 'A 2 kW tumble dryer runs on the UK 230 V mains. Convert the power to watts first, then work out the current it draws, in A. Give your answer to one decimal place.',
      tier: 'confident',
      correctAnswer: 8.7,
      tolerance: 0.1,
      unit: 'A',
      xpValue: 15,
      misconceptionId: 'pe-pf-mis-kw-as-w',
      hint: '2 kW = 2000 W. Then I = P / V = 2000 / 230.',
    },
    {
      id: 'pe-pf-q10',
      type: 'multiple-choice',
      stem: 'A 230 V toaster in a Tunbridge Wells kitchen draws 4.0 A from the mains. What is its power rating?',
      tier: 'confident',
      options: [
        '57.5 W (divided V by I the wrong way)',
        '234 W (added V and I)',
        '920 W (4.0 x 230)',
        '0.017 W (divided I by V)',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pe-pf-mis-bad-rearrangement',
      hint: 'P = I x V. Multiply 4.0 A by 230 V.',
    },
    {
      id: 'pe-pf-q11',
      type: 'numeric-entry',
      stem: 'A 9.5 kW electric shower in a Manchester house runs from the UK 230 V mains. Convert the power into watts, then work out the current, in A. Round to the nearest whole number.',
      tier: 'confident',
      correctAnswer: 41,
      tolerance: 1,
      unit: 'A',
      xpValue: 15,
      misconceptionId: 'pe-pf-mis-kw-as-w',
      hint: '9.5 kW = 9500 W. Then I = P / V = 9500 / 230.',
    },
    {
      id: 'pe-pf-q12',
      type: 'multiple-choice',
      stem: 'A 9.5 kW shower draws about 41 A from the UK 230 V mains. A standard UK plug is rated 13 A. What does that tell you about how the shower must be wired?',
      tier: 'confident',
      options: [
        'The shower must be hardwired on its own thicker circuit; a 13 A plug cannot safely carry 41 A.',
        'It can run from a normal 13 A plug because the 230 V is shared with other appliances.',
        'It can run from a normal 13 A plug if you turn the temperature down.',
        'The shower cannot be installed in the UK because its current is too high.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'pe-pf-mis-plug-any-rating',
      hint: 'A 13 A plug fuses out above 13 A. 41 A is far higher, so a normal socket cannot carry it.',
    },
    {
      id: 'pe-pf-q13',
      type: 'spot-misconception',
      stem: 'Priya reads two kettle labels. Kettle A: 2300 W, kettle B: 2.3 kW.',
      tier: 'confident',
      statements: [
        {
          text: 'Priya says kettle A has a much higher power than kettle B because 2300 is a much bigger number than 2.3, so kettle A draws a much bigger current at 230 V.',
          isMisconception: true,
        },
        {
          text: 'Priya says kettle A and kettle B have the same power, because 2300 W = 2.3 kW. They draw the same current at 230 V.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pe-pf-mis-kw-as-w',
    },
    {
      id: 'pe-pf-q14',
      type: 'drag-order',
      stem: 'Put the steps in the right order for working out the current a UK mains appliance draws, when its power is given in kilowatts.',
      tier: 'confident',
      items: [
        'Substitute the numbers into I = P / V and evaluate to get the current in A.',
        'Pick the right form of the equation by covering I on the triangle: I = P / V.',
        'Write the data: P (in kW), V = 230 V for UK mains. Note I is what you want.',
        'Convert the power into watts so the units line up: multiply kW by 1000.',
      ],
      correctOrder: [2, 3, 1, 0],
      xpValue: 15,
      hint: 'List the data first, then convert kW to W, then pick the form, then substitute.',
    },
    {
      id: 'pe-pf-q15',
      type: 'numeric-entry',
      stem: 'A 1.2 kW iron in a Tunbridge Wells utility room runs from the UK 230 V mains for 60 s. Convert the power into watts, then use E = P x t to find the energy it transfers in that time, in J.',
      tier: 'challenge',
      correctAnswer: 72000,
      unit: 'J',
      xpValue: 20,
      misconceptionId: 'pe-pf-mis-kw-as-w',
      hint: '1.2 kW = 1200 W. Then E = P x t = 1200 x 60.',
    },
    {
      id: 'pe-pf-q16',
      type: 'multiple-choice',
      stem: 'A pupil in a Cambridge physics class works out that an electric oven draws 13 A at 230 V on its hottest setting. What is the power rating of the oven on that setting, and what does it say about the plug?',
      tier: 'confident',
      options: [
        '243 W; well within the 13 A plug rating.',
        '2990 W (about 3 kW), at the very top of the 13 A plug rating, so the cable will be warm.',
        '17.7 W, so the oven runs almost cold.',
        '0.057 W, so any plug will do.',
      ],
      correctIndex: 1,
      xpValue: 15,
      hint: 'P = I x V = 13 x 230. Then compare the current to 13 A.',
    },
    {
      id: 'pe-pf-q17',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is working out the current drawn by a 2.3 kW kettle on the UK 230 V mains.',
      tier: 'challenge',
      steps: [
        'Write the data: P = 2.3 kW, V = 230 V, I = ?',
        'Convert the power into watts so the units match: P = 2.3 x 1000 = 2300 W.',
        'Pick the right form of the equation by covering I on the triangle: I = P / V.',
        null,
        'Evaluate the arithmetic: I = 10 A.',
        'State the answer with a unit and sanity-check. The kettle draws 10 A from the 230 V mains, safely below the 13 A plug rating.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Substitute the converted values into I = P / V: I = 2300 / 230.',
      xpValue: 20,
    },
    {
      id: 'pe-pf-q18',
      type: 'numeric-entry',
      stem: 'A 2.3 kW kettle in a Lake District holiday cottage runs from the UK 230 V mains for 180 s to boil a full pot. Convert the power into watts and use E = P x t to find the total energy transferred in that time, in J.',
      tier: 'challenge',
      correctAnswer: 414000,
      unit: 'J',
      xpValue: 20,
      hint: '2.3 kW = 2300 W. Then E = P x t = 2300 x 180.',
    },
    {
      id: 'pe-pf-q19',
      type: 'spot-misconception',
      stem: 'Marcus reads that a UK 13 A plug "is fine for any household appliance" and that "you only need to know the voltage to pick the plug".',
      tier: 'challenge',
      statements: [
        {
          text: 'Marcus is right. As long as the voltage is 230 V, every UK appliance fits a 13 A plug, no matter the power rating.',
          isMisconception: true,
        },
        {
          text: 'Marcus is not right. You also have to check the current using I = P / V. A 9.5 kW shower draws about 41 A, far above 13 A, so it has to be hardwired on its own circuit.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'pe-pf-mis-plug-any-rating',
    },
    {
      id: 'pe-pf-q20',
      type: 'multiple-choice',
      stem: 'A pupil argues, "If you halve the mains voltage from 230 V to 115 V, the current drawn by a 920 W heater must double to keep P = I V at 920 W." Which response is best?',
      tier: 'challenge',
      options: [
        'The pupil is right. P = I V means I rises when V drops, to keep the power constant.',
        'The pupil is wrong. P = I V is only a definition. A real heater has a fixed resistance, so halving V also halves I, and the power drops to a quarter, not stays at 920 W.',
        'The pupil is right because P = I V says V and I are in inverse proportion.',
        'The pupil is wrong because P does not depend on V at all.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'pe-pf-mis-fixed-power-inverse',
      hint: 'P = I V is a definition, not a rule that fixes I when V changes. Use V = I R to see how I responds to V.',
    },
    {
      id: 'pe-pf-q21',
      type: 'multiple-choice',
      stem: 'A family in a Dover flat runs a 2 kW heater for one full hour on the UK 230 V mains. Their energy supplier bills in kilowatt-hours (kW h) at 25 p per kW h. How much energy does the heater transfer, and what does that single hour cost?',
      tier: 'challenge',
      options: [
        '2 J in total, costing 25 p.',
        '2 kW h, costing 50 p.',
        '7 200 000 kW h, costing thousands of pounds.',
        '0.5 kW h, costing 12 p.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'pe-pf-mis-high-power-more-energy',
      hint: 'In kW h, energy is power (in kW) x time (in h). So 2 x 1 = 2 kW h. Then cost = 2 x 25 p.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 1F, candidates labelled answers in joules with units of W, or wrote "watts of energy", treating watts and joules as the same idea.
    {
      id: 'pe-pf-mis-watts-joules',
      description:
        'Using watts and joules as if they were the same, writing "watts of energy" or quoting an energy total in W.',
      triggerAnswer: 'watts-joules',
      correction:
        'A watt is a rate of energy transfer, one joule per second. A joule is a total quantity of energy. P is in watts, E is in joules.',
      reExplanation:
        'A 2300 W kettle moves 2300 J every second. After 10 s, the total energy is 2300 x 10 = 23 000 J, not 23 000 W. The watt tells you the rate; the joule tells you the total. P = I V gives a rate; E = P x t gives a total.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2022, Paper J259/02, candidates substituted a power in kilowatts directly into P = I V and produced currents 1000 times too small.
    {
      id: 'pe-pf-mis-kw-as-w',
      description:
        'Substituting a power in kilowatts straight into P = I V without converting to watts, so the current comes out 1000 times too small.',
      triggerAnswer: 'kw-as-w',
      correction:
        '1 kW = 1000 W. Convert kilowatts to watts before substituting into P = I V, then your current comes out in amperes.',
      reExplanation:
        'A 2.3 kW kettle on 230 V: if you leave P as 2.3 you get I = 2.3 / 230 = 0.01 A, which would not boil anything. Convert to 2300 W first and you get I = 2300 / 230 = 10 A, a sensible kettle current. Always rewrite the data in watts, amperes, and volts before substituting.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2022, Paper 1PH0/1F, candidates rearranged P = I V as I = V / P or P = V / I, missing that I and V sit side by side at the base of the triangle.
    {
      id: 'pe-pf-mis-bad-rearrangement',
      description:
        'Rearranging P = I V by dividing the wrong way, writing P = V / I or I = V / P.',
      triggerAnswer: 'bad-rearrangement',
      correction:
        'I and V are at the base of the power triangle. Cover P and read I x V; cover I and read P / V; cover V and read P / I.',
      reExplanation:
        'A 230 V appliance with 2 A flowing should have a sensible power. P = V / I would give 230 / 2 = 115 W. P = I x V gives 2 x 230 = 460 W, which matches a low-setting heater. The triangle stops the rearrangement mistake: cover the letter you want and read the rest.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, Paper 1F, on UK mains and 13 A plugs, candidates claimed that any household appliance is safe on a standard plug as long as the voltage is correct.
    {
      id: 'pe-pf-mis-plug-any-rating',
      description:
        'Believing that any UK appliance can run from a standard 13 A plug as long as the voltage is 230 V, ignoring the current the appliance draws.',
      triggerAnswer: 'plug-any-rating',
      correction:
        'A 13 A plug can carry up to 13 A. Use I = P / V at the mains voltage to check the current; high-power appliances like showers go over 13 A and must be hardwired.',
      reExplanation:
        'A 9.5 kW shower at 230 V draws I = 9500 / 230 = 41 A. Forcing that through a 13 A plug would melt the fuse and the cable. UK showers are wired straight from the consumer unit on a thicker cable so they can handle the current safely.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2021, Paper J259/02, candidates claimed that increasing the voltage of a fixed appliance must shrink the current, treating V and I as in inverse proportion in P = I V.
    {
      id: 'pe-pf-mis-fixed-power-inverse',
      description:
        'Claiming that for a real appliance, raising the voltage always lowers the current because V and I are inversely linked in P = I V.',
      triggerAnswer: 'fixed-power-inverse',
      correction:
        'P = I V on its own says nothing about how I responds to V. The appliance has a resistance; raising V usually raises I together, and the power goes up too.',
      reExplanation:
        'For a fixed resistor, V = I R, so raising V raises I in step and power rises. P = I V is a definition of power, not a rule that fixes I if V changes. Mains appliances are designed for 230 V; running them at lower voltage drops both the current and the power.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2020, Paper 1PH0/1F, candidates argued that a higher-power appliance always uses more total energy than a lower-power one, regardless of running time.
    {
      id: 'pe-pf-mis-high-power-more-energy',
      description:
        'Claiming that a higher-power appliance always transfers more total energy than a lower-power one, ignoring how long each runs.',
      triggerAnswer: 'high-power-more-energy',
      correction:
        'Total energy is E = P x t. A low-power appliance left on for a long time can transfer more energy than a high-power one used briefly.',
      reExplanation:
        'A 2300 W kettle on for 30 s transfers E = 2300 x 30 = 69 000 J. A 60 W lamp left on for an hour transfers E = 60 x 3600 = 216 000 J, more than three times as much, despite the smaller power. Power sets the rate; time decides the total.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const electricityPowerFormulaZoneNodes = [electricityPowerFormula]
