import type { SkillNode } from '@/types/content'

// Analogue ammeter dial. Range 0 to 1.0 A with 10 major divisions (each 0.1 A)
// and 5 small ticks per major. Needle points to 0.6 A.
const ANALOGUE_AMMETER_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">An analogue panel ammeter on a school workbench</text>

    <!-- Outer case -->
    <rect x="120" y="60" width="560" height="320" rx="14" />

    <!-- Dial face -->
    <path d="M 200 320 A 200 200 0 0 1 600 320" />

    <!-- Major ticks every 36 degrees from 180 to 360 (0 to 1.0 A) -->
    <line x1="200" y1="320" x2="216" y2="320" />
    <line x1="220" y1="240" x2="234" y2="244" />
    <line x1="260" y1="170" x2="270" y2="180" />
    <line x1="320" y1="125" x2="326" y2="138" />
    <line x1="390" y1="115" x2="392" y2="130" />
    <line x1="460" y1="125" x2="454" y2="138" />
    <line x1="530" y1="170" x2="520" y2="180" />
    <line x1="580" y1="240" x2="566" y2="244" />
    <line x1="600" y1="320" x2="584" y2="320" />

    <!-- Major number labels -->
    <text x="200" y="345" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">0</text>
    <text x="225" y="225" text-anchor="middle" font-size="14" stroke="none" fill="currentColor">0.2</text>
    <text x="280" y="160" text-anchor="middle" font-size="14" stroke="none" fill="currentColor">0.4</text>
    <text x="390" y="100" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">0.6</text>
    <text x="500" y="160" text-anchor="middle" font-size="14" stroke="none" fill="currentColor">0.8</text>
    <text x="600" y="345" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">1.0</text>

    <!-- Small ticks between 0.4 and 0.6 to show 0.02 A intervals -->
    <line x1="300" y1="148" x2="306" y2="158" />
    <line x1="320" y1="130" x2="326" y2="140" />
    <line x1="345" y1="118" x2="350" y2="130" />
    <line x1="370" y1="112" x2="373" y2="125" />

    <!-- Needle pointing to 0.6 A -->
    <line x1="400" y1="320" x2="390" y2="120" stroke-width="4" />
    <circle cx="400" cy="320" r="9" fill="currentColor" />

    <!-- Range and unit label -->
    <text x="400" y="365" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Range: 0 to 1.0 A. Unit: amperes (A).</text>
  </g>
`

// Circuit with ammeter in series, voltmeter in parallel across the lamp.
const METER_PLACEMENT_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Where the meters go in a school lamp circuit</text>

    <!-- Cell on the left -->
    <line x1="160" y1="100" x2="160" y2="200" />
    <line x1="138" y1="210" x2="182" y2="210" />
    <line x1="150" y1="230" x2="170" y2="230" stroke-width="7" />
    <line x1="160" y1="240" x2="160" y2="340" />

    <!-- Top wire to ammeter -->
    <line x1="160" y1="100" x2="280" y2="100" />
    <circle cx="310" cy="100" r="24" />
    <text x="310" y="108" text-anchor="middle" font-size="22" font-weight="700" stroke="none" fill="currentColor">A</text>
    <text x="310" y="65" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Ammeter (in series)</text>
    <line x1="334" y1="100" x2="560" y2="100" />

    <!-- Lamp on the right wire -->
    <line x1="560" y1="100" x2="560" y2="180" />
    <circle cx="560" cy="210" r="26" />
    <line x1="542" y1="192" x2="578" y2="228" />
    <line x1="542" y1="228" x2="578" y2="192" />
    <text x="620" y="215" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Lamp</text>
    <line x1="560" y1="236" x2="560" y2="340" />

    <!-- Bottom wire -->
    <line x1="160" y1="340" x2="560" y2="340" />

    <!-- Voltmeter branch in parallel across the lamp -->
    <line x1="560" y1="180" x2="440" y2="180" />
    <line x1="440" y1="180" x2="440" y2="190" />
    <circle cx="440" cy="210" r="22" />
    <text x="440" y="218" text-anchor="middle" font-size="22" font-weight="700" stroke="none" fill="currentColor">V</text>
    <text x="430" y="265" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Voltmeter (in parallel)</text>
    <line x1="440" y1="232" x2="440" y2="240" />
    <line x1="440" y1="240" x2="560" y2="240" />
  </g>
`

// Digital multimeter: display, dial with ranges, two sockets.
const DIGITAL_MULTIMETER_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">A digital multimeter on a science lab bench</text>

    <!-- Case -->
    <rect x="160" y="60" width="480" height="320" rx="14" />

    <!-- Display window -->
    <rect x="200" y="90" width="400" height="80" fill="currentColor" fill-opacity="0.08" />
    <text x="400" y="148" text-anchor="middle" font-size="48" font-weight="700" stroke="none" fill="currentColor">0.45</text>
    <text x="560" y="148" text-anchor="middle" font-size="20" font-weight="700" stroke="none" fill="currentColor">A</text>

    <!-- Range dial -->
    <circle cx="320" cy="270" r="65" />
    <text x="320" y="200" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Range dial</text>
    <text x="240" y="245" font-size="11" stroke="none" fill="currentColor">200mA</text>
    <text x="240" y="285" font-size="11" font-weight="700" stroke="none" fill="currentColor">2 A</text>
    <text x="240" y="305" font-size="11" stroke="none" fill="currentColor">10 A</text>
    <text x="370" y="245" font-size="11" stroke="none" fill="currentColor">200V</text>
    <text x="370" y="285" font-size="11" stroke="none" fill="currentColor">20V</text>
    <text x="370" y="305" font-size="11" stroke="none" fill="currentColor">2V</text>
    <line x1="320" y1="270" x2="280" y2="280" stroke-width="4" />

    <!-- Sockets at the bottom -->
    <circle cx="460" cy="320" r="14" />
    <text x="460" y="355" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">COM</text>
    <circle cx="520" cy="320" r="14" />
    <text x="520" y="355" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">V mA</text>
    <circle cx="580" cy="320" r="14" />
    <text x="580" y="355" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">10A</text>
  </g>
`

const Q_LABELLED_CIRCUIT_SVG = METER_PLACEMENT_SVG

export const electricityReadingMeters: SkillNode = {
  id: 'physics-electricity-reading-meters',
  title: 'Reading Ammeters and Voltmeters',
  description:
    'Read analogue and digital meters in a school lab. Pick the correct range, work out the value of each small division, and place the meters correctly in the loop. An ammeter sits in series with the component (in line with the lamp). A voltmeter sits in parallel (on its own branch across the lamp). Wiring an ammeter in parallel acts like a short circuit and damages the meter. Watch the unit too: 250 mA is 0.25 A, not 250 A.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-electricity-circuits',
  zoneName: 'Electricity and Circuits',
  tier: 'confident',
  prerequisites: ['physics-electricity-circuit-symbols'],
  curriculum: {
    ks3Objective:
      'Electric current, measured in amperes, in circuits; potential difference, measured in volts; battery and bulb ratings; using ammeters and voltmeters to measure circuit quantities.',
    awardingBodies: {
      aqa: '4.2.1.3 Measuring current and potential difference; required practical use of ammeters and voltmeters (GCSE Physics 8463)',
      edexcel:
        'Topic 2.4 Using ammeters and voltmeters; reading analogue scales (GCSE Physics 1PH0)',
      ocr: 'P4.2 Measuring current and potential difference; reading ammeter and voltmeter scales (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'pe-rm-scene-analogue-dial',
      title: 'Reading an Analogue Ammeter Dial',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how to read the dial of a school panel ammeter.',
      data: {
        viewBox: '0 0 800 400',
        svg: ANALOGUE_AMMETER_SVG,
        hotspots: [
          {
            id: 'pe-rm-dial-range',
            x: 50,
            y: 92,
            label: 'Range: 0 to 1.0 A',
            description:
              'The label at the bottom tells you the full scale of this dial: 0 at the left edge, 1.0 A at the right. Pick a meter whose range is just bigger than the current you expect.',
          },
          {
            id: 'pe-rm-dial-major',
            x: 25,
            y: 60,
            label: 'Major divisions',
            description:
              'Each numbered tick is 0.2 A apart. Count the gap between two numbers, then divide by the small ticks inside to get the value of one small step.',
          },
          {
            id: 'pe-rm-dial-small',
            x: 42,
            y: 35,
            label: 'Small divisions',
            description:
              'Between 0.4 and 0.6 there are five small ticks. The gap of 0.2 A divided by 10 small steps gives 0.02 A per small tick. Always work out one small division before reading a value.',
          },
          {
            id: 'pe-rm-dial-needle',
            x: 50,
            y: 50,
            label: 'Needle: reads 0.6 A',
            description:
              'Read the value the needle points to, in line with your eye to avoid parallax. Here the needle sits on the 0.6 mark. Write the answer with its unit: 0.6 A.',
          },
        ],
      },
    },
    {
      id: 'pe-rm-scene-placement',
      title: 'Where the Meters Go in the Loop',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see why an ammeter sits in series and a voltmeter sits in parallel.',
      data: {
        viewBox: '0 0 800 400',
        svg: METER_PLACEMENT_SVG,
        hotspots: [
          {
            id: 'pe-rm-place-ammeter',
            x: 39,
            y: 25,
            label: 'Ammeter in series',
            description:
              'The ammeter sits in line with the lamp on the main loop. Every coulomb of charge that passes the lamp must also pass the ammeter, so the reading is the current in the lamp.',
          },
          {
            id: 'pe-rm-place-voltmeter',
            x: 55,
            y: 52,
            label: 'Voltmeter in parallel',
            description:
              'The voltmeter sits on its own branch alongside the lamp, with one wire on each side. It compares the energy per charge between the two ends of the lamp and shows the potential difference in volts.',
          },
          {
            id: 'pe-rm-place-lamp',
            x: 80,
            y: 53,
            label: 'The component under test',
            description:
              'The lamp is the component you want to measure. The ammeter joins its main wire; the voltmeter spans both of its connections.',
          },
          {
            id: 'pe-rm-place-warning',
            x: 50,
            y: 90,
            label: 'Watch out: wrong placement breaks things',
            description:
              'Wiring an ammeter in parallel across a lamp acts like a near short circuit, because an ammeter has very low resistance. The result is a very large current that can blow the fuse or damage the meter. Wiring a voltmeter in series gives a reading of almost zero current, so the lamp barely lights.',
          },
        ],
      },
    },
    {
      id: 'pe-rm-scene-digital',
      title: 'A Digital Multimeter on the Bench',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to learn the parts of a school digital multimeter.',
      data: {
        viewBox: '0 0 800 400',
        svg: DIGITAL_MULTIMETER_SVG,
        hotspots: [
          {
            id: 'pe-rm-dm-display',
            x: 50,
            y: 30,
            label: 'Digital display: 0.45 A',
            description:
              'A digital meter shows the value as a number with its unit. Read every figure including the decimal point. The display here reads 0.45 A. Forty-five hundredths of an amp.',
          },
          {
            id: 'pe-rm-dm-dial',
            x: 40,
            y: 67,
            label: 'Range dial',
            description:
              'The dial sets what the meter measures and how big a reading it expects. Pick a range just bigger than the value you expect. The dial here is set to 2 A, which suits a torch bulb current of about 0.45 A.',
          },
          {
            id: 'pe-rm-dm-sockets',
            x: 65,
            y: 82,
            label: 'Three sockets: COM, V mA, 10A',
            description:
              'Plug the black lead into COM and the red lead into V mA for volts or small currents. Move the red lead to the 10A socket only when you expect a current above about 200 mA, or the meter fuse may blow.',
          },
          {
            id: 'pe-rm-dm-units',
            x: 75,
            y: 33,
            label: 'Units: A, mA, V, mV',
            description:
              'A reading of 250 mA is 0.25 A, not 250 A. Always check whether the display shows A or mA, V or mV, before writing the value into your lab book.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'pe-rm-worked-1',
      title: 'Reading an analogue ammeter on the 0 to 1.0 A range',
      steps: [
        {
          explanation:
            'Set out what you can see. A school panel ammeter has a range of 0 to 1.0 A. The numbered ticks sit at 0, 0.2, 0.4, 0.6, 0.8 and 1.0. The needle rests on the third numbered tick from the left.',
        },
        {
          explanation:
            'Work out the value of one major division. Between 0 and 1.0 there are five major gaps, so each is 1.0 divided by 5.',
          maths: 'one major division = 1.0 A / 5 = 0.2 A',
        },
        {
          explanation:
            'Identify which numbered tick the needle is on. Counting from 0, the third tick is 0 plus 0.2 plus 0.2, which is 0.4 A.',
        },
        {
          explanation:
            'Line up your eye with the needle to avoid parallax. The needle sits dead on the tick, so no interpolation is needed.',
        },
        {
          explanation: 'State the reading with the correct unit.',
          maths: 'I = 0.4 A',
        },
        {
          explanation:
            'Final check. The ammeter sits in series with the lamp, so 0.4 A is the current flowing through the lamp.',
        },
      ],
    },
    {
      id: 'pe-rm-worked-2',
      title: 'Choosing the right range on a digital multimeter for a torch bulb',
      steps: [
        {
          explanation:
            'Set out the situation. You want to read the current through a torch bulb that you expect to be about 0.45 A. The digital multimeter offers three current ranges: 200 mA, 2 A and 10 A.',
        },
        {
          explanation:
            'Convert ranges into the same unit. 200 mA is 0.2 A. The three ranges in amps are 0.2, 2 and 10.',
          maths: '200 mA = 0.2 A',
        },
        {
          explanation:
            'Compare the expected reading to each range. 0.45 A is bigger than 0.2 A, so the 200 mA range is too small and the meter will show OL (overload).',
        },
        {
          explanation:
            'Rule for picking a range. Choose the smallest range that is still larger than the expected reading. Both 2 A and 10 A are big enough, but 2 A is closer.',
        },
        {
          explanation:
            'Pick the 2 A range. A smaller range gives more decimal places on the display, so the reading is more precise.',
          maths: 'range chosen: 2 A',
        },
        {
          explanation:
            'Connect the leads. Black to COM, red to V mA. The 10A socket is only for currents above about 200 mA when you have set the dial to 10 A. With the 2 A dial setting the V mA socket is correct.',
        },
        {
          explanation:
            'Read the display. It now shows 0.45 A, which matches the expected current in the bulb.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pe-rm-q1',
      type: 'multiple-choice',
      stem: 'Where should an ammeter be placed in a circuit to read the current in a lamp?',
      tier: 'core',
      options: [
        'In series with the lamp, on the main loop wire so charge passes through both.',
        'In parallel with the lamp, on its own branch across the lamp.',
        'On its own loop next to the cell, not touching the lamp.',
        'In any spare gap in the circuit, position does not matter.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pe-rm-mis-meter-swap-placement',
      hint: 'The ammeter must read the same charge that flows through the lamp.',
    },
    {
      id: 'pe-rm-q2',
      type: 'multiple-choice',
      stem: 'Where should a voltmeter be placed to read the potential difference across a lamp?',
      tier: 'core',
      options: [
        'In series with the lamp on the main loop.',
        'Between the lamp and the cell on the same wire.',
        'On its own branch in parallel, with one wire on each side of the lamp.',
        'On a spare branch with no connection to the lamp.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pe-rm-mis-meter-swap-placement',
      hint: 'A voltmeter compares the two sides of the component, so it needs one wire on each side.',
    },
    {
      id: 'pe-rm-q3',
      type: 'multiple-choice',
      stem: 'An analogue ammeter has a scale from 0 to 1.0 A with five major gaps. What is the value of one major division?',
      tier: 'core',
      options: ['0.1 A', '0.5 A', '1.0 A', '0.2 A'],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'pe-rm-mis-half-divisions',
      hint: 'Divide the full scale by the number of gaps, not the number of ticks.',
    },
    {
      id: 'pe-rm-q4',
      type: 'numeric-entry',
      stem: 'A digital multimeter shows a current of 250 mA. Write this current in amperes (A).',
      tier: 'core',
      correctAnswer: 0.25,
      unit: 'A',
      xpValue: 10,
      misconceptionId: 'pe-rm-mis-units-ma-vs-a',
      hint: '1000 mA = 1 A, so divide by 1000.',
    },
    {
      id: 'pe-rm-q5',
      type: 'multiple-choice',
      stem: 'A digital voltmeter display shows the number 4.5 with a V next to it. What is the reading?',
      tier: 'core',
      options: [
        '0.45 V, because the decimal point should sit one place to the left.',
        '4.5 V, the value shown by the display.',
        '45 V, because there is a hidden zero.',
        '4500 mV is wrong; the answer must be in amperes.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pe-rm-mis-digital-decimals',
      hint: 'Read the digits as written, then add the unit shown beside them.',
    },
    {
      id: 'pe-rm-q6',
      type: 'numeric-entry',
      stem: 'A school analogue ammeter has a range of 0 to 1.0 A. Each major division is 0.2 A and there are 10 small ticks between two adjacent numbered ticks. What is the value of one small tick, in A?',
      tier: 'core',
      correctAnswer: 0.02,
      unit: 'A',
      xpValue: 10,
      misconceptionId: 'pe-rm-mis-half-divisions',
      hint: 'One major division is 0.2 A; divide by the 10 small ticks inside it.',
    },
    {
      id: 'pe-rm-q7',
      type: 'multiple-choice',
      stem: 'A pupil reads a digital ammeter set on the 2 A range, with the leads in COM and V mA. The display shows 0.45 A. What is the current in the circuit?',
      tier: 'confident',
      options: [
        '0.045 A, because the range divides the display.',
        '0.45 A, the value shown on the display in amperes.',
        '2.45 A, because the range adds to the display.',
        '45 A, because the small numbers should be ignored.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'pe-rm-mis-digital-decimals',
      hint: 'A digital meter shows the answer directly. The range only tells you the largest value it can show.',
    },
    {
      id: 'pe-rm-q8',
      type: 'numeric-entry',
      stem: 'A torch bulb is expected to carry a current of about 0.45 A. A school multimeter offers ranges 200 mA, 2 A and 10 A. Which is the smallest range that can still read 0.45 A without overloading? Give the range in amperes (A).',
      tier: 'confident',
      correctAnswer: 2,
      unit: 'A',
      xpValue: 15,
      misconceptionId: 'pe-rm-mis-range-not-chosen',
      hint: '200 mA = 0.2 A. Pick the smallest range bigger than 0.45 A.',
    },
    {
      id: 'pe-rm-q9',
      type: 'numeric-entry',
      stem: 'An analogue voltmeter has a range of 0 to 5 V. The dial has 10 major divisions. The needle rests three divisions to the right of the 0 mark. What does the voltmeter read, in V?',
      tier: 'confident',
      correctAnswer: 1.5,
      unit: 'V',
      xpValue: 15,
      misconceptionId: 'pe-rm-mis-half-divisions',
      hint: 'One major division equals 5 V divided by 10. Multiply by the number of divisions the needle has moved.',
    },
    {
      id: 'pe-rm-q10',
      type: 'multiple-choice',
      stem: 'A pupil wires an ammeter in parallel across a lamp by mistake. What is the likely outcome?',
      tier: 'confident',
      options: [
        'The lamp glows more brightly than before.',
        'Nothing changes; meters can go anywhere in the loop.',
        'A very large current flows through the ammeter, like a short circuit, which can blow the fuse or damage the meter.',
        'The ammeter reads zero because the lamp uses up all the current.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pe-rm-mis-meter-swap-placement',
      hint: 'An ammeter has very low resistance. Putting low resistance in parallel with a lamp creates a near short.',
    },
    {
      id: 'pe-rm-q11',
      type: 'labelled-image',
      stem: 'Place each name in the right spot on this lamp circuit so an ammeter reads the lamp current and a voltmeter reads the potential difference across the lamp.',
      tier: 'confident',
      viewBox: '0 0 800 400',
      svg: Q_LABELLED_CIRCUIT_SVG,
      hotspots: [
        { id: 'pe-rm-q11-h1', x: 39, y: 25, correctLabel: 'Ammeter' },
        { id: 'pe-rm-q11-h2', x: 55, y: 52, correctLabel: 'Voltmeter' },
        { id: 'pe-rm-q11-h3', x: 80, y: 53, correctLabel: 'Lamp' },
      ],
      labels: ['Ammeter', 'Voltmeter', 'Lamp', 'Cell', 'Switch', 'Resistor'],
      xpValue: 15,
      misconceptionId: 'pe-rm-mis-meter-swap-placement',
      hint: 'The ammeter is on the main loop wire. The voltmeter sits on its own branch across the lamp.',
    },
    {
      id: 'pe-rm-q12',
      type: 'drag-order',
      stem: 'Order the steps to read a current with a digital multimeter you have just picked up at the bench.',
      tier: 'confident',
      items: [
        'Read the value on the display and write it down with its unit.',
        'Plug the black lead into COM and the red lead into the correct current socket.',
        'Estimate the size of the current you expect.',
        'Wire the multimeter in series with the component.',
        'Set the range dial to the smallest setting bigger than your estimate.',
      ],
      correctOrder: [2, 4, 1, 3, 0],
      xpValue: 15,
      hint: 'Estimate first, then set range, then plug in the leads, then wire in series, then read.',
    },
    {
      id: 'pe-rm-q13',
      type: 'spot-misconception',
      stem: 'Aisha says, "It does not matter which way round I put the meters. An ammeter or a voltmeter both just sit on a wire and show a number."',
      tier: 'confident',
      statements: [
        {
          text: 'Aisha is right. Both meters sit on a wire and read whatever passes by.',
          isMisconception: true,
        },
        {
          text: 'Aisha is not right. The ammeter must sit in series so charge flows through it. The voltmeter must sit in parallel so it can compare both sides of the component. Swap them and the readings make no sense; an ammeter in parallel can act like a short circuit.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pe-rm-mis-meter-swap-placement',
    },
    {
      id: 'pe-rm-q14',
      type: 'numeric-entry',
      stem: 'An analogue ammeter on the 0 to 1.0 A range has 10 major divisions, each split into 5 small ticks. The needle rests halfway between the 0.4 A tick and the 0.5 A tick. What is the current, in A?',
      tier: 'confident',
      correctAnswer: 0.45,
      unit: 'A',
      xpValue: 15,
      misconceptionId: 'pe-rm-mis-half-divisions',
      hint: 'One major division here is 0.1 A. Halfway between 0.4 and 0.5 means add half of 0.1 to 0.4.',
    },
    {
      id: 'pe-rm-q15',
      type: 'multiple-choice',
      stem: 'A digital ammeter shows the value 1.20 with mA next to the digits. What current is flowing in amperes (A)?',
      tier: 'challenge',
      options: ['0.00120 A', '0.120 A', '1.20 A', '120 A'],
      correctIndex: 0,
      xpValue: 20,
      misconceptionId: 'pe-rm-mis-units-ma-vs-a',
      hint: '1 mA = 0.001 A, so divide by 1000.',
    },
    {
      id: 'pe-rm-q16',
      type: 'numeric-entry',
      stem: 'A school analogue ammeter has a zero error: with no current flowing the needle sits at 0.02 A instead of 0. In a test the same meter reads 0.62 A. Once the zero error is corrected, what is the true current, in A?',
      tier: 'challenge',
      correctAnswer: 0.6,
      unit: 'A',
      xpValue: 20,
      misconceptionId: 'pe-rm-mis-zero-error',
      hint: 'Subtract the offset from the reading: 0.62 - 0.02.',
    },
    {
      id: 'pe-rm-q17',
      type: 'numeric-entry',
      stem: 'A pupil in Sevenoaks measures the current through a resistor with a digital multimeter set to the 200 mA range. The display reads 125. The leads are in COM and V mA. What is the current in amperes (A)?',
      tier: 'challenge',
      correctAnswer: 0.125,
      unit: 'A',
      xpValue: 20,
      misconceptionId: 'pe-rm-mis-units-ma-vs-a',
      hint: 'On the 200 mA range the display value is in mA. 125 mA = 125 / 1000 A.',
    },
    {
      id: 'pe-rm-q18',
      type: 'spot-misconception',
      stem: 'Tom reads a digital voltmeter that shows 0.30 with V next to the digits. He writes the reading as 30 V because, he says, "the zero before the decimal point does not count."',
      tier: 'challenge',
      statements: [
        {
          text: 'Tom is right. A zero in front of the decimal point can be removed without changing the value.',
          isMisconception: true,
        },
        {
          text: 'Tom is not right. The zero in front of the decimal point keeps the place value. 0.30 V is just under a third of a volt; 30 V is 100 times larger. Always read every digit and the unit on the display.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'pe-rm-mis-digital-decimals',
    },
    {
      id: 'pe-rm-q19',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil reads an analogue ammeter on the 0 to 2 A range. The dial has 10 major divisions. The needle sits on the third major mark to the right of zero.',
      tier: 'challenge',
      steps: [
        'Note the range of the meter: 0 to 2 A across 10 major divisions.',
        'Work out one major division: 2 A divided by 10 equals 0.2 A.',
        null,
        'Add up the divisions: 3 multiplied by 0.2 A equals 0.6 A.',
        'State the reading with the unit: I = 0.6 A.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Count how many major divisions the needle has moved past zero: three divisions.',
      xpValue: 20,
    },
    {
      id: 'pe-rm-q20',
      type: 'data-extraction',
      stem: 'A pupil at a Tunbridge Wells school records meter readings during a lamp test. The table shows: Reading 1, ammeter 0.30 A, voltmeter 1.5 V. Reading 2, ammeter 250 mA, voltmeter 1200 mV. Reading 3, ammeter 0.45 A, voltmeter 2.25 V. Which reading has the largest current?',
      tier: 'challenge',
      dataSource:
        'Table: Reading 1, I = 0.30 A, V = 1.5 V. Reading 2, I = 250 mA, V = 1200 mV. Reading 3, I = 0.45 A, V = 2.25 V.',
      correctAnswer: 'Reading 3',
      xpValue: 20,
      misconceptionId: 'pe-rm-mis-units-ma-vs-a',
      hint: 'Convert every current to amperes first. 250 mA = 0.25 A. Then compare.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 1F, candidates connected ammeters in parallel across components, and voltmeters in series with them.
    {
      id: 'pe-rm-mis-meter-swap-placement',
      description:
        'Wiring an ammeter in parallel across a component, or a voltmeter in series with it, treating the two meters as if they go in the same place in a loop.',
      triggerAnswer: 'meter-swap-placement',
      correction:
        'An ammeter goes in series with the component, on the main loop, so the same charge passes through both. A voltmeter goes in parallel, across the component, with one wire on each side.',
      reExplanation:
        'Picture a torch lamp on a wire. To count the charge passing through the lamp, the ammeter must sit on the same wire, in line with the lamp. To compare the energy on each side of the lamp, the voltmeter needs a wire touching each side, which makes a parallel branch. An ammeter wired in parallel acts like a short circuit and can damage the meter.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2021, Paper 1PH0/1F, candidates read analogue dials by counting only the numbered ticks, ignoring the small divisions in between.
    {
      id: 'pe-rm-mis-half-divisions',
      description:
        'Reading an analogue dial by counting only the numbered ticks, missing the small divisions that sit between them.',
      triggerAnswer: 'half-divisions',
      correction:
        'Always work out one small division before reading the dial. Take the full scale, divide by the major gaps, then divide again by the small ticks inside one major gap.',
      reExplanation:
        'On a 0 to 1.0 A scale with 5 major gaps and 10 small ticks per gap, one major division is 1.0 divided by 5, which is 0.2 A. One small tick is 0.2 divided by 10, which is 0.02 A. A needle that sits 3 small ticks past 0.4 reads 0.4 + 0.06 = 0.46 A. Skip the small ticks and the reading can be out by a lot.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2022, J259/02, candidates confused milliamps and amps when reading multimeter values.
    {
      id: 'pe-rm-mis-units-ma-vs-a',
      description:
        'Treating milliamps and amps as the same unit, so 250 mA gets written as 250 A or as 25 A.',
      triggerAnswer: 'units-ma-vs-a',
      correction:
        'A milliamp (mA) is a thousandth of an amp. 1000 mA equals 1 A, so 250 mA equals 0.25 A. Always check the unit on the display before writing the value down.',
      reExplanation:
        'Think of mA as small change and A as pound coins. 1000 mA make 1 A, the same way 100 pence make a pound. A current of 250 mA fits in a torch bulb; 250 A would melt the wire. Convert by dividing by 1000 when going from mA to A, and multiply by 1000 when going from A to mA.',
    },
    // Source: CGP KS3 Physics Workbook Common Mistake box on reading digital meters
    {
      id: 'pe-rm-mis-digital-decimals',
      description:
        'Misreading a digital display by ignoring the zero before the decimal point, or by shifting the decimal point against the unit shown.',
      triggerAnswer: 'digital-decimals',
      correction:
        'Read every digit on the display, including any zero before the decimal point, then write the unit shown next to the digits.',
      reExplanation:
        'A display that shows 0.30 with V next to it means 0.30 V, which is just under a third of a volt. Removing the leading zero gives 30 V, which is 100 times bigger. The same care matters with 0.45 on a 2 A range: the meter shows 0.45 A directly, not 4.5 A. The range tells you the largest value the display can show, not where to put the decimal point.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, Paper 1F, candidates failed to subtract a non-zero starting reading on analogue meters (zero error / parallax).
    {
      id: 'pe-rm-mis-zero-error',
      description:
        'Trusting an analogue meter reading without checking the needle starts at zero when no current flows, missing any built-in zero error.',
      triggerAnswer: 'zero-error',
      correction:
        'Check the needle with no current first. If it sits off zero, subtract that offset from every later reading. Line up your eye with the needle to avoid parallax error.',
      reExplanation:
        'If a meter shows 0.02 A with no current, every later reading is 0.02 A too high. A reading of 0.62 A in the test really means 0.62 minus 0.02, which is 0.60 A. The same rule applies if the needle starts below zero: add the offset back. Parallax matters too, so view the needle straight on, not from the side.',
    },
    // Source: CGP KS3 Physics Study Guide Common Mistake box on choosing a multimeter range
    {
      id: 'pe-rm-mis-range-not-chosen',
      description:
        'Leaving a digital multimeter on whatever range it was set to last, instead of choosing a range just bigger than the expected reading.',
      triggerAnswer: 'range-not-chosen',
      correction:
        'Estimate the size of the reading first, then set the dial to the smallest range still bigger than your estimate. That gives the most decimal places on the display.',
      reExplanation:
        'For a torch bulb expected to draw about 0.45 A, the 200 mA range overloads (it caps at 0.2 A) and the 10 A range shows fewer decimal places. The 2 A range is just right: it can show 0.45 A and gives two decimal places. Picking the wrong range either crashes the reading or loses precision.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const electricityReadingMetersZoneNodes = [electricityReadingMeters]
