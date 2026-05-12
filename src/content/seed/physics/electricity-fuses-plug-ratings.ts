import type { SkillNode } from '@/types/content'

const FUSE_LADDER_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">UK plug fuses: 3 A, 5 A and 13 A</text>

    <!-- 3 A fuse -->
    <rect x="100" y="100" width="160" height="80" rx="10" />
    <circle cx="120" cy="140" r="10" fill="currentColor" />
    <circle cx="240" cy="140" r="10" fill="currentColor" />
    <text x="180" y="135" text-anchor="middle" font-size="22" font-weight="700" stroke="none" fill="currentColor">3 A</text>
    <text x="180" y="160" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">red body</text>
    <text x="180" y="210" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">For low-power kit:</text>
    <text x="180" y="230" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">lamps, radios, chargers</text>
    <text x="180" y="248" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">up to about 700 W</text>

    <!-- 5 A fuse -->
    <rect x="320" y="100" width="160" height="80" rx="10" />
    <circle cx="340" cy="140" r="10" fill="currentColor" />
    <circle cx="460" cy="140" r="10" fill="currentColor" />
    <text x="400" y="135" text-anchor="middle" font-size="22" font-weight="700" stroke="none" fill="currentColor">5 A</text>
    <text x="400" y="160" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">black body</text>
    <text x="400" y="210" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">For middle-range kit:</text>
    <text x="400" y="230" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">small microwaves, mixers</text>
    <text x="400" y="248" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">about 700 W to 1150 W</text>

    <!-- 13 A fuse -->
    <rect x="540" y="100" width="160" height="80" rx="10" />
    <circle cx="560" cy="140" r="10" fill="currentColor" />
    <circle cx="680" cy="140" r="10" fill="currentColor" />
    <text x="620" y="135" text-anchor="middle" font-size="22" font-weight="700" stroke="none" fill="currentColor">13 A</text>
    <text x="620" y="160" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">brown body</text>
    <text x="620" y="210" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">For heavy-load kit:</text>
    <text x="620" y="230" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">kettles, irons, heaters</text>
    <text x="620" y="248" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">about 1150 W to 3000 W</text>

    <!-- Rule strip across the bottom -->
    <text x="400" y="305" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Rule: pick the fuse rating just above the appliance's normal current.</text>
    <text x="400" y="328" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Use I = P / V, with V = 230 V for UK mains.</text>
    <text x="400" y="350" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">Too high and a fault may not blow the fuse before the cable melts.</text>
  </g>
`

const EARTH_FAULT_CHAIN_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="28" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Earth wire and fuse working together in a fault</text>

    <!-- Step 1: Loose live touches metal case -->
    <rect x="40" y="70" width="180" height="120" rx="10" />
    <text x="130" y="95" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">1. Loose live wire</text>
    <text x="130" y="115" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">touches the metal case</text>
    <text x="130" y="140" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">case briefly</text>
    <text x="130" y="156" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">becomes live</text>

    <line x1="220" y1="130" x2="270" y2="130" stroke-width="2" marker-end="url(#arrow)" />
    <polygon points="265,124 280,130 265,136" fill="currentColor" stroke="none" />

    <!-- Step 2: Earth provides low-resistance path -->
    <rect x="290" y="70" width="180" height="120" rx="10" />
    <text x="380" y="95" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">2. Earth wire kicks in</text>
    <text x="380" y="115" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">low-resistance path</text>
    <text x="380" y="131" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">from case to ground</text>
    <text x="380" y="160" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">huge current flows</text>
    <text x="380" y="176" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">down the earth wire</text>

    <line x1="470" y1="130" x2="520" y2="130" stroke-width="2" />
    <polygon points="515,124 530,130 515,136" fill="currentColor" stroke="none" />

    <!-- Step 3: Fuse blows -->
    <rect x="540" y="70" width="220" height="120" rx="10" />
    <text x="650" y="95" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">3. Fuse blows</text>
    <text x="650" y="115" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">thin wire in the fuse melts</text>
    <text x="650" y="135" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">circuit goes open</text>
    <text x="650" y="160" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">case no longer live</text>
    <text x="650" y="176" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">user is safe</text>

    <!-- Bottom note -->
    <text x="400" y="240" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Earth + fuse together = a safety partnership.</text>
    <text x="400" y="265" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Earth makes the fault current spike. The fuse cuts the supply.</text>
    <text x="400" y="290" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">A double-insulated appliance has a plastic case, no earth, so it uses a fuse alone.</text>
    <text x="400" y="320" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">The whole chain happens in a fraction of a second.</text>
  </g>
`

const FUSE_VS_BREAKER_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="28" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Fuse versus circuit breaker</text>

    <!-- Fuse panel -->
    <rect x="60" y="70" width="320" height="280" rx="10" />
    <text x="220" y="95" text-anchor="middle" font-size="15" font-weight="700" stroke="none" fill="currentColor">Fuse (cartridge in the plug)</text>

    <!-- Fuse drawing -->
    <rect x="120" y="115" width="200" height="50" rx="6" />
    <line x1="120" y1="140" x2="320" y2="140" />
    <text x="220" y="180" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">thin wire inside</text>

    <text x="80" y="215" font-size="13" stroke="none" fill="currentColor">- A short, thin wire that melts</text>
    <text x="80" y="235" font-size="13" stroke="none" fill="currentColor">  when the current is too high.</text>
    <text x="80" y="260" font-size="13" stroke="none" fill="currentColor">- One-shot: blown fuses are</text>
    <text x="80" y="280" font-size="13" stroke="none" fill="currentColor">  replaced, not reset.</text>
    <text x="80" y="305" font-size="13" stroke="none" fill="currentColor">- Sized to the appliance</text>
    <text x="80" y="325" font-size="13" stroke="none" fill="currentColor">  (3 A, 5 A or 13 A).</text>

    <!-- Breaker panel -->
    <rect x="420" y="70" width="320" height="280" rx="10" />
    <text x="580" y="95" text-anchor="middle" font-size="15" font-weight="700" stroke="none" fill="currentColor">Circuit breaker (RCD or MCB)</text>

    <!-- Switch drawing -->
    <rect x="490" y="115" width="180" height="60" rx="6" />
    <line x1="510" y1="155" x2="560" y2="125" />
    <circle cx="510" cy="155" r="5" fill="currentColor" stroke="none" />
    <text x="580" y="195" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">switch trips open</text>

    <text x="440" y="215" font-size="13" stroke="none" fill="currentColor">- A switch that trips open when</text>
    <text x="440" y="235" font-size="13" stroke="none" fill="currentColor">  it senses a current spike.</text>
    <text x="440" y="260" font-size="13" stroke="none" fill="currentColor">- Reusable: press to reset</text>
    <text x="440" y="280" font-size="13" stroke="none" fill="currentColor">  once the fault is fixed.</text>
    <text x="440" y="305" font-size="13" stroke="none" fill="currentColor">- Lives in the consumer unit</text>
    <text x="440" y="325" font-size="13" stroke="none" fill="currentColor">  (fuse box) under the stairs.</text>

    <!-- Shared rule -->
    <text x="400" y="385" text-anchor="middle" font-size="13" font-style="italic" stroke="none" fill="currentColor">Both cut the circuit when current is too high. A breaker trips in less time and is reusable.</text>
  </g>
`

export const electricityFusesPlugRatings: SkillNode = {
  id: 'physics-electricity-fuses-plug-ratings',
  title: 'Fuses and Plug Ratings',
  description:
    'A fuse is a short, thin wire fitted in series with the live wire inside a UK plug. If the current rises above its rating the wire melts, breaking the circuit before the cable can overheat. UK plug fuses come in three sizes: 3 A, 5 A and 13 A. To pick the right one, use P = I x V with V = 230 V to find the appliance current, then choose the fuse rating just above it. A circuit breaker (RCD or MCB) does the same job in the consumer unit, but is a switch that can be reset rather than a wire that has to be replaced. The earth wire and the fuse work as a safety partnership: a fault sends current down the earth wire, the current spikes, the fuse blows, and the user is safe.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-electricity-circuits',
  zoneName: 'Electricity and Circuits',
  tier: 'challenge',
  prerequisites: ['physics-electricity-uk-mains'],
  curriculum: {
    ks3Objective:
      'Domestic electrical appliances; electrical safety; the role of fuses and circuit breakers in protecting wiring.',
    awardingBodies: {
      aqa: '4.2.3.2 The three-pin plug; the role of the fuse; choosing a 3 A, 5 A or 13 A fuse from the appliance power rating (GCSE Physics 8463)',
      edexcel:
        'Topic 2.14 to 2.16 The fuse and earth wire; selecting a fuse rating to match the appliance current (GCSE Physics 1PH0)',
      ocr: 'P4.3 Fuses and circuit breakers; selecting an appropriate fuse for a UK plug (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'pe-fp-scene-fuse-ladder',
      title: 'The Three UK Fuse Ratings',
      type: 'labelled-diagram',
      instructions:
        'Click each fuse to see which appliances it suits and the power range it covers at 230 V.',
      data: {
        viewBox: '0 0 800 400',
        svg: FUSE_LADDER_SVG,
        hotspots: [
          {
            id: 'pe-fp-h-fuse-3a',
            x: 23,
            y: 35,
            label: '3 A fuse: low-power kit',
            description:
              'A 3 A fuse will blow once the current rises above 3 A. It suits anything that draws less than about 700 W on UK mains. Lamps, radios, phone chargers and a small clock all sit here.',
          },
          {
            id: 'pe-fp-h-fuse-5a',
            x: 50,
            y: 35,
            label: '5 A fuse: middle-range kit',
            description:
              'A 5 A fuse blows once the current passes 5 A. It suits appliances rated between roughly 700 W and 1150 W on UK mains, such as a small microwave or a mixer.',
          },
          {
            id: 'pe-fp-h-fuse-13a',
            x: 77,
            y: 35,
            label: '13 A fuse: heavy-load kit',
            description:
              'A 13 A fuse covers everything up to the limit of a UK socket. It suits high-power appliances like kettles, irons and heaters, which often draw 8 A to 12 A in normal use.',
          },
          {
            id: 'pe-fp-h-fuse-rule',
            x: 50,
            y: 80,
            label: 'Rule: just above normal current',
            description:
              'Always pick the smallest fuse whose rating is above the appliance current in normal use. Too small and the fuse blows during normal running; too large and a fault may melt the cable before the fuse blows.',
          },
        ],
      },
    },
    {
      id: 'pe-fp-scene-earth-fuse-chain',
      title: 'How a Fault is Cut Off: Earth Plus Fuse',
      type: 'labelled-diagram',
      instructions:
        'Click each box to follow the steps from a loose wire to a blown fuse and a safe appliance.',
      data: {
        viewBox: '0 0 800 400',
        svg: EARTH_FAULT_CHAIN_SVG,
        hotspots: [
          {
            id: 'pe-fp-h-chain-step-1',
            x: 16,
            y: 32,
            label: 'Step 1: loose live wire touches the case',
            description:
              'Inside a faulty toaster, a live wire works loose and brushes the metal case. The case is now at the same voltage as the live wire. Anyone touching the case would get a shock if nothing else happened.',
          },
          {
            id: 'pe-fp-h-chain-step-2',
            x: 47,
            y: 32,
            label: 'Step 2: earth gives a low-resistance route',
            description:
              'The metal case is bonded to the earth wire. Because the earth wire has very low resistance, a large current rushes from the live wire, through the case, down the earth wire and into the ground.',
          },
          {
            id: 'pe-fp-h-chain-step-3',
            x: 78,
            y: 32,
            label: 'Step 3: the fuse blows',
            description:
              'That large fault current is far above the fuse rating. The thin wire inside the fuse melts in a fraction of a second. The circuit goes open, no more current can flow, and the case is no longer live.',
          },
          {
            id: 'pe-fp-h-chain-partnership',
            x: 50,
            y: 70,
            label: 'A safety partnership',
            description:
              'Earth alone does not stop the appliance. Fuse alone could not detect a leak to the case. Together: earth makes the fault current spike, and the fuse cuts the supply. Both parts are needed for a metal-cased appliance.',
          },
        ],
      },
    },
    {
      id: 'pe-fp-scene-fuse-vs-breaker',
      title: 'Fuse Versus Circuit Breaker',
      type: 'labelled-diagram',
      instructions:
        'Click each side to compare a one-shot plug fuse with a resettable circuit breaker in the consumer unit.',
      data: {
        viewBox: '0 0 800 400',
        svg: FUSE_VS_BREAKER_SVG,
        hotspots: [
          {
            id: 'pe-fp-h-vs-fuse',
            x: 27,
            y: 35,
            label: 'Fuse: a wire that melts, one shot',
            description:
              'A fuse is just a short, thin wire inside a glass or ceramic cartridge. When the current goes above the rating, the wire melts. The fuse must then be replaced with a new one of the same rating.',
          },
          {
            id: 'pe-fp-h-vs-breaker',
            x: 72,
            y: 35,
            label: 'Breaker: a switch that trips, reusable',
            description:
              'A circuit breaker is a switch that springs open when it senses a current spike. After the fault is fixed, you can press the switch to reset it. Most modern UK homes have circuit breakers in the consumer unit and a plug fuse in each appliance.',
          },
          {
            id: 'pe-fp-h-vs-speed',
            x: 50,
            y: 88,
            label: 'Both protect the wiring',
            description:
              'Both cut the supply when too much current flows, so the cable does not overheat and start a fire. A breaker trips in less time than a fuse takes to blow, which is why modern homes use breakers in the consumer unit as well as plug fuses.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'pe-fp-worked-1',
      title: 'Choose the right fuse for an 800 W microwave',
      steps: [
        {
          explanation:
            'Set out the situation. A small kitchen microwave is rated at 800 W on UK mains (230 V). We need to choose between a 3 A, 5 A and 13 A fuse.',
        },
        {
          explanation:
            'Write down what we know and what we want.',
          maths: 'P = 800 W, V = 230 V, I = ?',
        },
        {
          explanation:
            'Pick the right form. We want current, so rearrange P = I x V to I = P / V.',
          maths: 'I = P / V',
        },
        {
          explanation: 'Substitute the values.',
          maths: 'I = 800 / 230',
        },
        {
          explanation:
            'Evaluate the arithmetic to two significant figures.',
          maths: 'I = 3.5 A',
        },
        {
          explanation:
            'Compare the current with the fuse ladder. A 3 A fuse would blow at once because 3.5 A is above the rating. A 13 A fuse is far too high. The smallest fuse that sits above 3.5 A is the 5 A.',
        },
        {
          explanation:
            'State the answer and check. Fit a 5 A fuse. The microwave runs at 3.5 A in normal use, well below the 5 A rating, so the fuse will not blow during cooking. A faulty current much above 5 A will still blow it.',
        },
      ],
    },
    {
      id: 'pe-fp-worked-2',
      title: 'The earth plus fuse safety chain for a faulty kettle',
      steps: [
        {
          explanation:
            'Set out the situation. A 2.3 kW kettle is plugged into a UK socket through a correctly fitted 13 A fuse. A loose wire inside the kettle has worked free and is touching the metal case.',
        },
        {
          explanation:
            'State the normal current. With P = 2300 W and V = 230 V, the normal current is I = P / V = 2300 / 230 = 10 A. The 13 A fuse sits just above this.',
          maths: 'I = 2300 / 230 = 10 A',
        },
        {
          explanation:
            'Describe what the fault does. The loose live wire pushes the metal case up to 230 V. Without an earth wire, anyone touching the kettle could get a serious shock.',
        },
        {
          explanation:
            'Trace the path the fault current takes. The earth wire is bonded to the metal case. It has very low resistance, so a huge current rushes from the live wire, through the case, down the earth wire and into the ground.',
          maths: 'fault current >> 13 A',
        },
        {
          explanation:
            'Show why the fuse blows. The fault current is far larger than 13 A, so it is also far larger than the fuse rating. The thin wire inside the fuse melts almost at once.',
        },
        {
          explanation:
            'State the outcome. With the fuse blown, the circuit is broken. No more current flows along the live wire, the metal case drops back to 0 V, and the user is safe. The kettle must be repaired and the fuse replaced before it can be used again.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pe-fp-q1',
      type: 'multiple-choice',
      stem: 'What is the job of a fuse in a UK plug?',
      tier: 'core',
      options: [
        'To break the circuit if the current rises too high',
        'To boost the voltage when the appliance is switched on',
        'To turn the alternating current into direct current',
        'To store energy so the appliance can run when unplugged',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pe-fp-mis-fuse-purpose',
      hint: 'A fuse is a sacrificial wire. It melts to break the circuit when current is dangerous.',
    },
    {
      id: 'pe-fp-q2',
      type: 'multiple-choice',
      stem: 'Which three fuse ratings are used in UK plugs?',
      tier: 'core',
      options: [
        '1 A, 2 A and 3 A',
        '3 A, 5 A and 13 A',
        '5 A, 10 A and 20 A',
        '10 A, 15 A and 30 A',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pe-fp-mis-wrong-ratings',
      hint: 'There are three standard sizes. Small, middle, and the largest one for kettles.',
    },
    {
      id: 'pe-fp-q3',
      type: 'multiple-choice',
      stem: 'Which formula links power, current and voltage for a UK mains appliance?',
      tier: 'core',
      options: [
        'P = I + V',
        'P = V / I',
        'P = I x V',
        'P = I / V',
      ],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Power equals current multiplied by potential difference.',
    },
    {
      id: 'pe-fp-q4',
      type: 'numeric-entry',
      stem: 'A bedside lamp is rated 60 W on UK mains (230 V). Use I = P / V to find the normal operating current, in A. Give your answer to 2 decimal places.',
      tier: 'core',
      correctAnswer: 0.26,
      tolerance: 0.02,
      unit: 'A',
      xpValue: 10,
      hint: 'I = 60 / 230. The answer is just over a quarter of an amp.',
    },
    {
      id: 'pe-fp-q5',
      type: 'multiple-choice',
      stem: 'On a UK appliance cable, which wire is the fuse fitted in series with inside the plug?',
      tier: 'core',
      options: [
        'The earth wire (green and yellow)',
        'The neutral wire (blue)',
        'The live wire (brown)',
        'The outer plastic sheath',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pe-fp-mis-fuse-on-neutral',
      hint: 'The fuse sits on the wire that carries the supply in. That is the brown one.',
    },
    {
      id: 'pe-fp-q6',
      type: 'multiple-choice',
      stem: 'A pupil wires a new plug onto a 60 W desk lamp. Which fuse should they fit, and why?',
      tier: 'core',
      options: [
        'A 13 A fuse, because a bigger fuse is always safer',
        'A 5 A fuse, because the lamp will never get hot',
        'No fuse at all, because the lamp uses very little power',
        'A 3 A fuse, because the lamp draws about 0.26 A and 3 A sits just above that',
      ],
      correctIndex: 3,
      xpValue: 10,
      hint: 'The lamp draws about 0.26 A. Pick the smallest fuse above that.',
    },
    {
      id: 'pe-fp-q7',
      type: 'numeric-entry',
      stem: 'A 2.3 kW kettle runs on UK mains (230 V). What is its normal operating current, in A?',
      tier: 'core',
      correctAnswer: 10,
      tolerance: 0.2,
      unit: 'A',
      xpValue: 10,
      hint: 'First write 2.3 kW as 2300 W. Then I = P / V = 2300 / 230.',
    },
    {
      id: 'pe-fp-q8',
      type: 'multiple-choice',
      stem: 'A toaster has a faulty live wire that touches the metal case. The toaster is correctly earthed and has a 13 A fuse. What happens next?',
      tier: 'confident',
      options: [
        'The earth wire pushes the fault current to ground, the current spikes, and the 13 A fuse blows so the toaster is cut off',
        'The neutral wire absorbs the fault, so the toaster keeps running as normal',
        'Nothing, because a fuse only protects against low currents',
        'The voltage in the kitchen drops so all the other appliances switch off',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'pe-fp-mis-earth-no-fuse',
      hint: 'Earth makes the current spike. The fuse cuts the supply. Both do a different job.',
    },
    {
      id: 'pe-fp-q9',
      type: 'numeric-entry',
      stem: 'A 1200 W toaster runs on UK mains (230 V). What is its normal current, in A? Give your answer to 1 decimal place.',
      tier: 'confident',
      correctAnswer: 5.2,
      tolerance: 0.2,
      unit: 'A',
      xpValue: 15,
      hint: 'I = P / V = 1200 / 230. The answer is just above 5 A.',
    },
    {
      id: 'pe-fp-q10',
      type: 'multiple-choice',
      stem: 'A 1200 W toaster on UK mains draws about 5.2 A in normal use. Which fuse should be fitted?',
      tier: 'confident',
      options: [
        '3 A (would blow at once)',
        '5 A (would blow during normal toasting)',
        '13 A (above the normal current, sits just above on the ladder)',
        'No fuse needed because the toaster is double insulated',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pe-fp-mis-pick-too-low',
      hint: 'A 5 A fuse would blow at 5.2 A in normal use. The next size up is 13 A.',
    },
    {
      id: 'pe-fp-q11',
      type: 'multiple-choice',
      stem: 'How is a circuit breaker (MCB or RCD) different from a fuse?',
      tier: 'confident',
      options: [
        'A circuit breaker generates extra voltage; a fuse does not',
        'A circuit breaker is a switch that trips and can be reset; a fuse is a wire that melts and must be replaced',
        'A circuit breaker only works on direct current; a fuse only works on alternating current',
        'There is no difference, they are two names for the same thing',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'pe-fp-mis-fuse-equals-breaker',
      hint: 'Think reusable switch versus one-shot wire.',
    },
    {
      id: 'pe-fp-q12',
      type: 'numeric-entry',
      stem: 'A 920 W microwave runs on UK mains (230 V). What is its normal current, in A?',
      tier: 'confident',
      correctAnswer: 4,
      tolerance: 0.2,
      unit: 'A',
      xpValue: 15,
      hint: 'I = P / V = 920 / 230 = 4. Exactly 4 A.',
    },
    {
      id: 'pe-fp-q13',
      type: 'spot-misconception',
      stem: 'Aisha says, "A 13 A fuse is the safest choice, so I will fit one to every appliance in the house, even the bedside lamp."',
      tier: 'confident',
      statements: [
        {
          text: 'Aisha is right. A bigger fuse means more protection, so 13 A is always the safest pick.',
          isMisconception: true,
        },
        {
          text: 'Aisha is wrong. A 13 A fuse would not blow until the current is well above the lamp\'s 0.26 A normal current. In a fault, the thin lamp cable could melt and catch fire before the fuse blew. Pick the rating just above the normal current.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pe-fp-mis-bigger-is-safer',
    },
    {
      id: 'pe-fp-q14',
      type: 'drag-order',
      stem: 'Put the steps of the safety chain in order. A loose wire has touched the metal case of a kettle.',
      tier: 'confident',
      items: [
        'The fuse blows because the current is far above its rating, so the supply is cut.',
        'A loose live wire inside the kettle brushes against the metal case.',
        'A huge fault current rushes through the live wire, the case and the earth wire to ground.',
        'The metal case is bonded to the earth wire, which gives a low-resistance path to ground.',
      ],
      correctOrder: [1, 3, 2, 0],
      xpValue: 15,
      hint: 'Loose wire first, then the earth route, then the spike of current, then the fuse blowing.',
    },
    {
      id: 'pe-fp-q15',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil chooses the fuse for an 800 W microwave on UK mains (230 V).',
      tier: 'challenge',
      steps: [
        'Write down the data: P = 800 W, V = 230 V, I = ?',
        'Pick the right form of the equation by rearranging P = I x V to I = P / V.',
        'Substitute the numbers: I = 800 / 230.',
        null,
        'Compare with the UK fuse ladder. A 3 A fuse would blow at once. The next rating up is 5 A, which sits just above 3.5 A.',
        'State the choice with reason: fit a 5 A fuse. It does not blow in normal use but will blow on a fault.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Evaluate the arithmetic: I = 3.5 A (to two significant figures).',
      xpValue: 20,
    },
    {
      id: 'pe-fp-q16',
      type: 'numeric-entry',
      stem: 'A tumble dryer is rated 2.5 kW on UK mains (230 V). Find the normal operating current, in A. Give your answer to 1 decimal place.',
      tier: 'challenge',
      correctAnswer: 10.9,
      tolerance: 0.3,
      unit: 'A',
      xpValue: 20,
      hint: 'Write 2.5 kW as 2500 W. Then I = 2500 / 230.',
    },
    {
      id: 'pe-fp-q17',
      type: 'multiple-choice',
      stem: 'Marcus moves to a Manchester flat and finds his 750 W toaster came with a 13 A fuse fitted. The toaster draws about 3.3 A in normal use. Which fuse should he fit instead, and why?',
      tier: 'challenge',
      options: [
        'Leave the 13 A in place; bigger fuses are always safer',
        'Fit a 5 A fuse: 3.3 A is below 5 A, so the fuse will not blow in normal use, and a fault current well above 5 A will blow it before the cable can melt',
        'Fit a 3 A fuse: it will keep blowing during toasting, which means the toaster is being protected from itself',
        'Remove the fuse entirely so the toaster works on any current',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'pe-fp-mis-bigger-is-safer',
      hint: 'Pick the smallest fuse that sits just above the normal current. That is the 5 A.',
    },
    {
      id: 'pe-fp-q18',
      type: 'spot-misconception',
      stem: 'Priya says, "Once an appliance has an earth wire, it does not need a fuse, because earth keeps the user safe on its own."',
      tier: 'challenge',
      statements: [
        {
          text: 'Priya is right. The earth wire on its own is enough; a fuse is only a backup.',
          isMisconception: true,
        },
        {
          text: 'Priya is wrong. Without a fuse, the earth wire would carry a huge fault current indefinitely. The cable could overheat and start a fire. The earth provides a path, and the fuse then breaks the circuit so the current stops.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'pe-fp-mis-earth-no-fuse',
    },
    {
      id: 'pe-fp-q19',
      type: 'multiple-choice',
      stem: 'Aisha lives in a Leeds terrace with a new consumer unit. She has just bought a 2200 W iron. Her dad says, "The iron pulls about 9.6 A from the socket. There is already an RCD in the consumer unit, so the plug fuse does not really matter." Which response is right?',
      tier: 'challenge',
      options: [
        'Dad is right. With an RCD on the ring main, the plug fuse can be any rating.',
        'Dad is right. The plug fuse only matters for old wiring.',
        'Dad is wrong. The RCD protects the whole ring, but the 13 A plug fuse protects the iron and its cable. The fuse must still be sized just above 9.6 A, so 13 A is right.',
        'Dad is wrong. The iron does not need a fuse at all because it has a metal sole plate.',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'pe-fp-mis-fuse-equals-breaker',
      hint: 'Plug fuse sizes the appliance; breaker protects the whole ring. Both jobs matter.',
    },
    {
      id: 'pe-fp-q20',
      type: 'numeric-entry',
      stem: 'A family in Cardiff has a 1840 W hairdryer on UK mains (230 V). What is the normal current, in A?',
      tier: 'challenge',
      correctAnswer: 8,
      tolerance: 0.2,
      unit: 'A',
      xpValue: 20,
      hint: 'I = P / V = 1840 / 230 = 8.0.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2019, Paper 1F, candidates wrote that "the fuse boosts the voltage" or "the fuse stores charge" rather than identifying its role as breaking the circuit on overcurrent.
    {
      id: 'pe-fp-mis-fuse-purpose',
      description:
        'Believing the fuse boosts voltage, stores charge, or otherwise acts on the appliance, rather than breaking the circuit when the current is too high.',
      triggerAnswer: 'fuse-purpose-wrong',
      correction:
        'In fact a fuse is a sacrificial wire. It melts and breaks the circuit when the current rises above its rating, so the cable cannot overheat.',
      reExplanation:
        'Picture the fuse as a deliberate weak link in the live wire. In normal use the current is below the rating, so the wire carries it without trouble. In a fault, the current jumps far above the rating. The fuse wire melts in a fraction of a second, the circuit goes open, and no more current can flow. That is why the fuse must always be sized to suit the appliance current.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2021, Paper 1PH0/1F, candidates listed UK plug fuse ratings as "1, 2, 3 A" or "5, 10, 15 A"; the report flagged confusion between domestic UK plug ratings and other contexts.
    {
      id: 'pe-fp-mis-wrong-ratings',
      description:
        'Believing UK plug fuses come in 1 A, 2 A, 5 A or 10 A ratings rather than the standard 3 A, 5 A and 13 A.',
      triggerAnswer: 'wrong-ratings',
      correction:
        'In fact the three UK plug fuse ratings are 3 A, 5 A and 13 A. No 1 A, 2 A or 10 A fuses go in a standard UK plug.',
      reExplanation:
        'Open any UK plug and you will see a small cartridge fuse stamped with 3 A, 5 A or 13 A. A 3 A fuse suits low-power kit like a lamp; 5 A covers middle-range appliances such as a small microwave; 13 A is for high-power kit like a kettle or iron. Other countries use different ratings, but UK plugs stick to these three.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2022, J259/02, candidates believed the fuse sat on the neutral wire or in the appliance itself, not on the live wire inside the plug.
    {
      id: 'pe-fp-mis-fuse-on-neutral',
      description:
        'Believing the fuse is fitted in series with the neutral wire, or sits inside the appliance, rather than on the live wire inside the plug.',
      triggerAnswer: 'fuse-on-neutral',
      correction:
        'In fact the fuse goes in series with the live wire inside the plug. It must cut the supply line, not the return line.',
      reExplanation:
        'If the fuse sat on the neutral wire and blew, the live wire would still be connected to the appliance. The metal parts could stay at 230 V even after the fuse had blown. By placing the fuse on the live wire, blowing the fuse disconnects the dangerous side of the supply, leaving the appliance at 0 V and safe to touch.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 1F, candidates wrote that fitting a higher-rated fuse "makes the appliance safer because more current can flow"; report stresses the higher rating leaves the cable unprotected.
    {
      id: 'pe-fp-mis-bigger-is-safer',
      description:
        'Believing that fitting a higher-rated fuse always makes an appliance safer, so 13 A is the best choice for everything.',
      triggerAnswer: 'bigger-is-safer',
      correction:
        'In fact a too-high fuse is dangerous. The cable can overheat long before a 13 A fuse blows on a small appliance, so the protection is lost.',
      reExplanation:
        'A bedside lamp draws about 0.26 A. A 13 A fuse will not blow until the current is more than 50 times that. The thin lamp cable could melt and catch fire before the fuse blew. By contrast a 3 A fuse blows at any fault well above 0.26 A, cutting the supply long before the cable is in trouble. Pick the smallest fuse that sits above the normal current.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2020, Paper 1PH0/1F, candidates picked a fuse rating below the appliance current ("a 3 A fuse for a kettle") and were marked down for missing that the fuse would blow in normal use.
    {
      id: 'pe-fp-mis-pick-too-low',
      description:
        'Picking a fuse rating below the appliance\'s normal current, so the fuse blows in normal use rather than only on a fault.',
      triggerAnswer: 'pick-too-low',
      correction:
        'In fact the fuse rating must sit just above the normal operating current. A rating below the normal current would blow as soon as the appliance switched on.',
      reExplanation:
        'A 1200 W toaster draws about 5.2 A in normal use. A 3 A fuse would blow the instant the toaster heated up, before any toast was made. A 5 A fuse would also blow because 5.2 A is just above 5 A. The smallest fuse that sits above 5.2 A is the 13 A, so that is the right choice. Work out the normal current first, then step up to the next fuse on the ladder.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2023, J259/02, candidates wrote that the earth wire on its own would keep the user safe and a fuse was not really needed; report stresses that earth and fuse work as a pair.
    {
      id: 'pe-fp-mis-earth-no-fuse',
      description:
        'Believing the earth wire on its own keeps the user safe, so a fuse is not really needed once an appliance is earthed.',
      triggerAnswer: 'earth-no-fuse',
      correction:
        'In fact the earth wire gives a path for the fault current, but the fuse is what stops the current. Without a fuse, the cable could overheat and start a fire.',
      reExplanation:
        'A faulty kettle could send 100 A or more down the earth wire to ground. The earth route makes the user safe at that instant, but the supply is still pushing current through the live wire and through the kettle. If nothing breaks the circuit, the cable heats up and a fire can start. The fuse blows long before that, cutting the supply. Earth gives the path; the fuse cuts the flow.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, Paper 1F, candidates wrote that a circuit breaker and a fuse "are the same thing" or "do exactly the same job"; report flags the lack of the reusable-switch versus melting-wire contrast.
    {
      id: 'pe-fp-mis-fuse-equals-breaker',
      description:
        'Believing a fuse and a circuit breaker (MCB or RCD) are the same device, missing that one melts and is replaced while the other trips and is reset.',
      triggerAnswer: 'fuse-equals-breaker',
      correction:
        'In fact a fuse is a one-shot wire that melts and must be replaced. A circuit breaker is a switch that trips on a current spike and can be reset once the fault is fixed.',
      reExplanation:
        'A fuse and a breaker both cut the supply when the current is too high, so they do the same safety job. Inside, they work differently. A fuse holds a thin wire that melts and ends its life. A breaker holds a switch with a magnet or heat sensor that flips it open; once the fault is fixed, you push the switch back. Modern UK homes use breakers in the consumer unit and plug fuses in each appliance.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const electricityFusesPlugRatingsZoneNodes = [electricityFusesPlugRatings]
