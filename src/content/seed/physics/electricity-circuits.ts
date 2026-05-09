import type { SkillNode } from '@/types/content'

const SYMBOL_WALL_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <!-- Cell at (100, 120). Vertical plates on a horizontal wire. -->
    <line x1="40" y1="120" x2="95" y2="120" />
    <line x1="95" y1="95" x2="95" y2="145" />
    <line x1="108" y1="108" x2="108" y2="132" stroke-width="7" />
    <line x1="108" y1="120" x2="160" y2="120" />

    <!-- Battery at (300, 120). Three cells in a row on a horizontal wire. -->
    <line x1="220" y1="120" x2="252" y2="120" />
    <line x1="252" y1="100" x2="252" y2="140" />
    <line x1="262" y1="108" x2="262" y2="132" stroke-width="7" />
    <line x1="262" y1="120" x2="282" y2="120" />
    <line x1="282" y1="100" x2="282" y2="140" />
    <line x1="292" y1="108" x2="292" y2="132" stroke-width="7" />
    <line x1="292" y1="120" x2="312" y2="120" />
    <line x1="312" y1="100" x2="312" y2="140" />
    <line x1="322" y1="108" x2="322" y2="132" stroke-width="7" />
    <line x1="322" y1="120" x2="380" y2="120" />

    <!-- Switch (open) at (500, 120). Two contacts and an angled lever. -->
    <line x1="420" y1="120" x2="463" y2="120" />
    <circle cx="468" cy="120" r="4" fill="currentColor" />
    <line x1="468" y1="120" x2="510" y2="93" />
    <circle cx="515" cy="120" r="4" fill="currentColor" />
    <line x1="515" y1="120" x2="560" y2="120" />

    <!-- Lamp at (120, 300). Circle with crossed lines. -->
    <line x1="40" y1="300" x2="90" y2="300" />
    <circle cx="120" cy="300" r="30" />
    <line x1="100" y1="280" x2="140" y2="320" />
    <line x1="100" y1="320" x2="140" y2="280" />
    <line x1="150" y1="300" x2="200" y2="300" />

    <!-- Ammeter at (300, 300). Circle with letter A. -->
    <line x1="220" y1="300" x2="270" y2="300" />
    <circle cx="300" cy="300" r="30" />
    <text x="300" y="310" text-anchor="middle" font-size="30" font-weight="700" stroke="none" fill="currentColor">A</text>
    <line x1="330" y1="300" x2="380" y2="300" />

    <!-- Voltmeter at (480, 300). Circle with letter V. -->
    <line x1="400" y1="300" x2="450" y2="300" />
    <circle cx="480" cy="300" r="30" />
    <text x="480" y="310" text-anchor="middle" font-size="30" font-weight="700" stroke="none" fill="currentColor">V</text>
    <line x1="510" y1="300" x2="560" y2="300" />
  </g>
`

const SIMPLE_CIRCUIT_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <!-- Left vertical wire with a cell at y=200 -->
    <line x1="100" y1="100" x2="100" y2="180" />
    <line x1="100" y1="220" x2="100" y2="300" />
    <!-- Cell plates (horizontal) -->
    <line x1="78" y1="190" x2="122" y2="190" />
    <line x1="90" y1="208" x2="110" y2="208" stroke-width="7" />
    <!-- Top wire with a switch (open) between x=270 and x=330 -->
    <line x1="100" y1="100" x2="270" y2="100" />
    <circle cx="275" cy="100" r="4" fill="currentColor" />
    <line x1="275" y1="100" x2="320" y2="76" />
    <circle cx="325" cy="100" r="4" fill="currentColor" />
    <line x1="330" y1="100" x2="500" y2="100" />
    <!-- Right vertical wire with a lamp at y=200 -->
    <line x1="500" y1="100" x2="500" y2="170" />
    <circle cx="500" cy="200" r="30" />
    <line x1="480" y1="180" x2="520" y2="220" />
    <line x1="480" y1="220" x2="520" y2="180" />
    <line x1="500" y1="230" x2="500" y2="300" />
    <!-- Bottom wire -->
    <line x1="100" y1="300" x2="500" y2="300" />
  </g>
`

const METER_PLACEMENT_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <!-- Left wire with a cell -->
    <line x1="100" y1="100" x2="100" y2="200" />
    <line x1="100" y1="240" x2="100" y2="320" />
    <line x1="78" y1="210" x2="122" y2="210" />
    <line x1="90" y1="230" x2="110" y2="230" stroke-width="7" />
    <!-- Top wire with an ammeter at x=220 -->
    <line x1="100" y1="100" x2="190" y2="100" />
    <circle cx="220" cy="100" r="22" />
    <text x="220" y="108" text-anchor="middle" font-size="22" font-weight="700" stroke="none" fill="currentColor">A</text>
    <line x1="242" y1="100" x2="500" y2="100" />
    <!-- Right wire with a lamp -->
    <line x1="500" y1="100" x2="500" y2="170" />
    <circle cx="500" cy="200" r="22" />
    <line x1="486" y1="186" x2="514" y2="214" />
    <line x1="486" y1="214" x2="514" y2="186" />
    <line x1="500" y1="230" x2="500" y2="320" />
    <!-- Bottom wire -->
    <line x1="100" y1="320" x2="500" y2="320" />
    <!-- Voltmeter branch in parallel with the lamp -->
    <line x1="500" y1="170" x2="380" y2="170" />
    <line x1="380" y1="170" x2="380" y2="180" />
    <circle cx="380" cy="200" r="22" />
    <text x="380" y="208" text-anchor="middle" font-size="22" font-weight="700" stroke="none" fill="currentColor">V</text>
    <line x1="380" y1="222" x2="380" y2="232" />
    <line x1="380" y1="232" x2="500" y2="232" />
  </g>
`

const Q5_LABELLED_SVG = SIMPLE_CIRCUIT_SVG

const Q18_LABELLED_SVG = METER_PLACEMENT_SVG

export const electricityCircuitSymbols: SkillNode = {
  id: 'physics-electricity-circuit-symbols',
  title: 'Circuit Symbols',
  description:
    'Recognise and name the standard KS3 circuit symbols (cell, battery, switch, lamp, wire, ammeter, voltmeter), read a simple circuit diagram, and place ammeters and voltmeters correctly.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-electricity-circuits',
  zoneName: 'Electricity and Circuits',
  tier: 'core',
  prerequisites: [],
  curriculum: {
    ks3Objective:
      'Electric current, measured in amperes, in circuits, series and parallel circuits, currents add where branches meet and current as flow of charge.',
    awardingBodies: {
      aqa: '4.2.1.1 Standard circuit diagram symbols (GCSE Physics 8463)',
      edexcel: 'Topic 2.2 Electrical circuits, circuit diagrams (GCSE Physics 1PH0)',
      ocr: 'P4.1 Static and charge / P4.2 Circuit symbols (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'cs-scene-symbol-wall',
      title: 'The Symbol Wall',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to reveal the name and use of that circuit symbol.',
      data: {
        viewBox: '0 0 600 400',
        svg: SYMBOL_WALL_SVG,
        hotspots: [
          {
            id: 'sw-cell',
            x: 17,
            y: 30,
            label: 'Cell',
            description:
              'A single power source. The long line is the positive terminal; the short, thick line is the negative terminal.',
          },
          {
            id: 'sw-battery',
            x: 50,
            y: 30,
            label: 'Battery',
            description:
              'Two or more cells joined together. A torch with three 1.5 V cells has a 4.5 V battery.',
          },
          {
            id: 'sw-switch',
            x: 82,
            y: 30,
            label: 'Switch (open)',
            description:
              'A break in the circuit. With the lever lifted, no current can flow.',
          },
          {
            id: 'sw-lamp',
            x: 20,
            y: 75,
            label: 'Lamp',
            description:
              'A circle with a cross. Lights up when current flows through it.',
          },
          {
            id: 'sw-ammeter',
            x: 50,
            y: 75,
            label: 'Ammeter',
            description:
              'A circle with the letter A. Goes in series in the circuit, in line with the component it measures, and reads current in amperes.',
          },
          {
            id: 'sw-voltmeter',
            x: 80,
            y: 75,
            label: 'Voltmeter',
            description:
              'A circle with the letter V. Goes in parallel, across a component, and reads potential difference in volts.',
          },
        ],
      },
    },
    {
      id: 'cs-scene-simple-circuit',
      title: 'A Simple Series Circuit',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the loop to name the part and see what it does.',
      data: {
        viewBox: '0 0 600 400',
        svg: SIMPLE_CIRCUIT_SVG,
        hotspots: [
          {
            id: 'sc-cell',
            x: 17,
            y: 50,
            label: 'Cell',
            description:
              'The energy source. Pushes charge around the loop from the long plate, around the wires, and back to the short plate.',
          },
          {
            id: 'sc-switch',
            x: 50,
            y: 25,
            label: 'Switch (open)',
            description:
              'With the switch open, the loop is broken and the lamp stays off.',
          },
          {
            id: 'sc-lamp',
            x: 83,
            y: 50,
            label: 'Lamp',
            description:
              'When the switch closes, charge flows around the whole loop and the lamp lights up.',
          },
          {
            id: 'sc-wire',
            x: 50,
            y: 75,
            label: 'Wire',
            description:
              'A plain line. Wires connect components but are not components themselves.',
          },
        ],
      },
    },
    {
      id: 'cs-scene-meter-placement',
      title: 'Where the Meters Go',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see why an ammeter sits in line with the lamp and a voltmeter sits across it.',
      data: {
        viewBox: '0 0 600 400',
        svg: METER_PLACEMENT_SVG,
        hotspots: [
          {
            id: 'mp-cell',
            x: 17,
            y: 55,
            label: 'Cell',
            description:
              'The energy source for the loop.',
          },
          {
            id: 'mp-ammeter',
            x: 37,
            y: 25,
            label: 'Ammeter (in series)',
            description:
              'Sits in line with the lamp. Every charge that passes the lamp must pass the ammeter, so the ammeter reads the current in the lamp.',
          },
          {
            id: 'mp-lamp',
            x: 83,
            y: 50,
            label: 'Lamp',
            description:
              'The component being measured. Glows when current flows.',
          },
          {
            id: 'mp-voltmeter',
            x: 63,
            y: 50,
            label: 'Voltmeter (in parallel)',
            description:
              'Sits on its own branch alongside the lamp, with one wire on each side. It reads the potential difference across the lamp.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'cs-worked-1',
      title: 'Reading a simple torch circuit',
      steps: [
        {
          explanation:
            'Find the cell on the diagram. The cell has a long line and a short, thick line side by side.',
        },
        {
          explanation:
            'Trace the wire from the long plate of the cell out into the loop. The wire is just a plain line.',
        },
        {
          explanation:
            'Follow the wire to the next part. Here the wire reaches a circle with a cross inside, which is the lamp symbol.',
        },
        {
          explanation:
            'Carry on around the loop. The wire passes through a switch, which is shown as two dots with an angled lever.',
        },
        {
          explanation:
            'Follow the wire back to the short plate of the cell. The loop is now complete: cell, wire, lamp, wire, switch, wire, cell.',
        },
        {
          explanation:
            'Close the switch in your head. With the lever down the loop has no break, charge flows, and the lamp lights up.',
        },
      ],
    },
    {
      id: 'cs-worked-2',
      title: 'Adding an ammeter and a voltmeter to a lamp circuit',
      steps: [
        {
          explanation:
            'Start with a simple loop of cell, switch and lamp. You want to read the current in the lamp and the potential difference across it.',
        },
        {
          explanation:
            'Pick the right meters. The ammeter has the letter A and is for current. The voltmeter has the letter V and is for potential difference.',
        },
        {
          explanation:
            'Place the ammeter in series, in line with the lamp on the same wire, so the same charge flows through both.',
          maths: 'A in line with lamp',
        },
        {
          explanation:
            'Place the voltmeter in parallel, on its own branch next to the lamp, with one wire on each side of the lamp.',
          maths: 'V across lamp',
        },
        {
          explanation:
            'Check the symbols. A circle with the letter A inside is the ammeter; a circle with the letter V inside is the voltmeter. They look the same shape, so the letter is what tells them apart.',
        },
        {
          explanation:
            'Close the switch. The ammeter now reads the current in amperes; the voltmeter reads the potential difference across the lamp in volts.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'cs-q1',
      type: 'multiple-choice',
      stem: 'Which description matches the standard symbol for a single cell?',
      tier: 'core',
      options: [
        'A long line and a short, thick line, side by side.',
        'Two long lines of equal length, side by side.',
        'A circle with a cross drawn inside it.',
        'A circle with the letter V inside.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'cs-mis-cell-vs-battery',
      hint: 'A cell has one positive plate and one negative plate. They are drawn as lines of different lengths.',
    },
    {
      id: 'cs-q2',
      type: 'multiple-choice',
      stem: 'Which symbol shows a switch that is open?',
      tier: 'core',
      options: [
        'Two dots joined by a flat line on the wire.',
        'Two dots with an angled lever lifted off one of them.',
        'A rectangle drawn on the wire.',
        'A small circle on the wire with no marks inside.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'cs-mis-switch-open-closed',
    },
    {
      id: 'cs-q3',
      type: 'multiple-choice',
      stem: 'A circle with a cross drawn inside it represents which component?',
      tier: 'core',
      options: ['Voltmeter', 'Ammeter', 'Cell', 'Lamp'],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'cs-mis-lamp-symbol',
      hint: 'The cross marks the filament inside a lamp.',
    },
    {
      id: 'cs-q4',
      type: 'numeric-entry',
      stem: 'A battery in a circuit diagram is drawn with three cell symbols in a row. How many cells are in the battery?',
      tier: 'core',
      correctAnswer: 3,
      xpValue: 10,
      misconceptionId: 'cs-mis-cell-vs-battery',
    },
    {
      id: 'cs-q5',
      type: 'labelled-image',
      stem: 'Place the names on this simple series circuit. Each marker takes one label.',
      tier: 'core',
      viewBox: '0 0 600 400',
      svg: Q5_LABELLED_SVG,
      hotspots: [
        { id: 'q5-h1', x: 17, y: 50, correctLabel: 'Cell' },
        { id: 'q5-h2', x: 50, y: 25, correctLabel: 'Switch' },
        { id: 'q5-h3', x: 83, y: 50, correctLabel: 'Lamp' },
      ],
      labels: ['Cell', 'Switch', 'Lamp', 'Battery', 'Wire', 'Ammeter'],
      xpValue: 15,
      misconceptionId: 'cs-mis-lamp-symbol',
      hint: 'A circle with a cross is the lamp. The cell has long and short plates.',
    },
    {
      id: 'cs-q6',
      type: 'multiple-choice',
      stem: 'Where should an ammeter be placed in a circuit so that it reads the current in a lamp?',
      tier: 'core',
      options: [
        'In series, in line with the lamp.',
        'On its own branch alongside the lamp.',
        'In a separate loop with its own cell.',
        'Inside the cell, behind the long plate.',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'Every charge that passes the lamp should also pass the ammeter.',
    },
    {
      id: 'cs-q7',
      type: 'multiple-choice',
      stem: 'Where should a voltmeter be placed to read the potential difference across a lamp?',
      tier: 'core',
      options: [
        'In series with the lamp on the same wire.',
        'In parallel, on its own branch across the lamp.',
        'Inside the switch.',
        'Anywhere on the wire as long as it is in the loop.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'cs-mis-voltmeter-series',
      hint: 'A voltmeter measures across a component, not along the same wire.',
    },
    {
      id: 'cs-q8',
      type: 'numeric-entry',
      stem: 'A simple circuit diagram shows one cell, one switch, one lamp and one ammeter, joined by wires. How many components are drawn, not counting the wires?',
      tier: 'core',
      correctAnswer: 4,
      xpValue: 10,
      misconceptionId: 'cs-mis-wire-vs-component',
      hint: 'Wires are plain lines and are not counted as components.',
    },
    {
      id: 'cs-q9',
      type: 'multiple-choice',
      stem: 'A diagram shows two circles. The left one has the letter A inside; the right one has the letter V inside. Which statement is correct?',
      tier: 'confident',
      options: [
        'Both circles are voltmeters; the letter only labels the wire.',
        'The left circle is a voltmeter and the right circle is an ammeter.',
        'Both circles are lamps drawn without crosses.',
        'The left circle is an ammeter and the right circle is a voltmeter.',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'cs-mis-ammeter-vs-voltmeter',
      hint: 'A is for amperes, V is for volts.',
    },
    {
      id: 'cs-q10',
      type: 'multiple-choice',
      stem: 'In a circuit diagram, the switch lever is drawn flat between its two contacts. What does the diagram tell you?',
      tier: 'confident',
      options: [
        'The switch is open and the lamp will not light.',
        'The switch is closed and the lamp can light when the rest of the loop is complete.',
        'The switch is broken and the circuit cannot work at all.',
        'The lever has no effect on whether the lamp lights.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'cs-mis-switch-open-closed',
    },
    {
      id: 'cs-q11',
      type: 'numeric-entry',
      stem: 'A battery symbol shows four cells in a row. Each cell is 1.5 V. What is the total voltage of the battery in volts?',
      tier: 'confident',
      correctAnswer: 6,
      unit: 'V',
      xpValue: 15,
      misconceptionId: 'cs-mis-cell-vs-battery',
      hint: 'Add the voltage of each cell, or multiply the cell voltage by the number of cells.',
    },
    {
      id: 'cs-q13',
      type: 'drag-order',
      stem: 'A pupil thinks current leaves the cell from both ends and meets at the lamp. To show the loop has only one direction, place the labels in the order you meet them as you trace the wire clockwise from the long plate of the cell.',
      tier: 'confident',
      items: ['Lamp', 'Switch', 'Cell (long plate)', 'Cell (short plate)'],
      correctOrder: [2, 1, 0, 3],
      xpValue: 15,
      misconceptionId: 'cs-mis-meeting-current',
      hint: 'Start at the long plate (positive), go around the outside of the loop, and finish at the short plate.',
    },
    {
      id: 'cs-q12',
      type: 'numeric-entry',
      stem: 'A bedside torch uses two AA cells, each 1.5 V. What is the battery voltage in volts?',
      tier: 'confident',
      correctAnswer: 3,
      unit: 'V',
      xpValue: 15,
    },
    {
      id: 'cs-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is adding an ammeter to a circuit so it reads the current in the lamp.',
      tier: 'confident',
      steps: [
        'Start with a loop containing a cell, a switch and a lamp.',
        'Choose the ammeter symbol, which is a circle with the letter A inside.',
        null,
        'Redraw the wire so the ammeter sits in line with the lamp on the same wire.',
        'Close the switch and read the current in amperes.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Break the wire next to the lamp at one place to make a gap for the ammeter to sit in.',
      xpValue: 15,
    },
    {
      id: 'cs-q15',
      type: 'spot-misconception',
      stem: 'Theo says, "I will draw the voltmeter in series with the lamp, on the same wire, because then the voltage flows through it the way current does." Is his method sound?',
      tier: 'confident',
      statements: [
        {
          text: 'His method is sound. Voltage flows through a voltmeter, so it must sit in line with the lamp.',
          isMisconception: true,
        },
        {
          text: 'His method is not sound. A voltmeter measures the potential difference across a component, so it must sit on its own branch in parallel with the lamp, not in series.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cs-mis-voltmeter-series',
    },
    {
      id: 'cs-q16',
      type: 'multiple-choice',
      stem: 'A diagram of a kettle plug circuit shows a long line and a short, thick line side by side, then a switch, then a circle with a cross. Which list names the components in the order they appear?',
      tier: 'challenge',
      options: [
        'Battery, switch, lamp.',
        'Cell, switch, ammeter.',
        'Cell, switch, lamp.',
        'Voltmeter, ammeter, lamp.',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'cs-mis-lamp-symbol',
      hint: 'Two plates make a single cell, not a battery. A circle with a cross is the lamp.',
    },
    {
      id: 'cs-q17',
      type: 'numeric-entry',
      stem: 'A 9 V smoke alarm battery is drawn from cells of 1.5 V each. How many cells appear in the battery symbol?',
      tier: 'challenge',
      correctAnswer: 6,
      xpValue: 20,
      misconceptionId: 'cs-mis-cell-vs-battery',
      hint: 'Divide the battery voltage by the voltage of one cell.',
    },
    {
      id: 'cs-q18',
      type: 'labelled-image',
      stem: 'Place the names on this circuit. The branch on the right hand side carries one component; the branch alongside it carries another.',
      tier: 'challenge',
      viewBox: '0 0 600 400',
      svg: Q18_LABELLED_SVG,
      hotspots: [
        { id: 'q18-h1', x: 17, y: 55, correctLabel: 'Cell' },
        { id: 'q18-h2', x: 37, y: 25, correctLabel: 'Ammeter' },
        { id: 'q18-h3', x: 83, y: 50, correctLabel: 'Lamp' },
        { id: 'q18-h4', x: 63, y: 50, correctLabel: 'Voltmeter' },
      ],
      labels: ['Cell', 'Ammeter', 'Voltmeter', 'Lamp', 'Battery', 'Switch', 'Resistor', 'Wire'],
      xpValue: 25,
      misconceptionId: 'cs-mis-ammeter-vs-voltmeter',
      hint: 'The ammeter sits on the main loop in line with the lamp. The voltmeter sits on its own branch alongside the lamp.',
    },
    {
      id: 'cs-q19',
      type: 'spot-misconception',
      stem: 'Maya says, "An ammeter and a voltmeter are both circles, so it does not matter which letter I write inside on my diagram." Is her method sound?',
      tier: 'challenge',
      statements: [
        {
          text: 'Her method is sound. The two symbols are circles, so the letter inside is just decoration.',
          isMisconception: true,
        },
        {
          text: 'Her method is not sound. The letter is what tells the symbols apart. A inside means ammeter (current); V inside means voltmeter (potential difference). They go in different places in the circuit.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'cs-mis-ammeter-vs-voltmeter',
    },
    {
      id: 'cs-q20',
      type: 'multiple-choice',
      stem: 'Maya is sketching the circuit for a cycling helmet light. The light needs a 4.5 V battery, made from cells of 1.5 V each, plus a switch, a lamp, and a voltmeter to read the potential difference across the lamp. Which description matches a correct diagram?',
      tier: 'challenge',
      options: [
        'A battery drawn as three cells in a row, a switch, a lamp, and a circle with the letter V drawn in series with the lamp.',
        'A battery drawn as three cells in a row, a switch, a lamp, and a circle with the letter V drawn on its own branch across the lamp.',
        'A single cell, a switch, a lamp, and a circle with the letter V drawn across the lamp.',
        'A battery drawn as three cells in a row, a switch, a lamp, and a circle with the letter A drawn across the lamp.',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'cs-mis-voltmeter-series',
      hint: 'Work out the cell count first (4.5 divided by 1.5), then check the V symbol and where it sits.',
    },
    {
      id: 'cs-q21',
      type: 'multiple-choice',
      stem: 'A diagram shows two cells side by side, then a plain straight line, then a circle with a cross. What does the diagram show?',
      tier: 'confident',
      options: [
        'A battery, a wire and a lamp.',
        'A battery, a resistor and a lamp.',
        'A battery, a switch and a lamp.',
        'A cell, a wire and an ammeter.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'cs-mis-wire-vs-component',
      hint: 'A plain line with no extra marks on it is just a wire, not a component.',
    },
    {
      id: 'cs-q22',
      type: 'free-text',
      stem: 'Explain in your own words why a voltmeter is drawn on its own branch in parallel with a lamp, rather than on the same wire as the lamp.',
      tier: 'challenge',
      sampleAnswer:
        'A voltmeter measures the potential difference across a component, which is the change in energy per unit charge from one side of the lamp to the other. To compare those two sides, the voltmeter needs one wire on each side of the lamp, which makes its own branch in parallel. If the voltmeter sat in series on the same wire, it would only touch one side of the lamp and could not compare the two ends.',
      keywords: ['parallel', 'across', 'potential difference', 'both sides', 'lamp'],
      xpValue: 20,
      misconceptionId: 'cs-mis-current-flow-symbols',
    },
  ],
  misconceptions: [
    // Source: CGP KS3 Physics Study Guide Common Mistake box on voltmeter placement
    {
      id: 'cs-mis-voltmeter-series',
      description:
        'Believing the voltmeter sits in series in the loop because voltage "flows through" it the same way current flows through an ammeter.',
      triggerAnswer: 'voltmeter-series',
      correction:
        'A voltmeter does not have current flowing through it the way an ammeter does. It measures the potential difference across a component, so it sits on its own branch in parallel.',
      reExplanation:
        'Picture a lamp on a wire. To compare the energy on each side of the lamp, you need one voltmeter wire touching each side. That makes a parallel branch alongside the lamp. An ammeter does the opposite: it goes in line with the lamp so the same charge passes through both.',
    },
    // Source: AQA GCSE Physics examiner report June 2022, Paper 1F, common circuit-symbol confusions
    {
      id: 'cs-mis-ammeter-vs-voltmeter',
      description:
        'Confusing the ammeter and voltmeter symbols because both are drawn as a circle on a wire, and reading the letter inside as decoration.',
      triggerAnswer: 'ammeter-vs-voltmeter',
      correction:
        'The shape is the same, but the letter is what tells them apart. A inside means ammeter, for current. V inside means voltmeter, for potential difference. The two meters also sit in different places in the circuit.',
      reExplanation:
        'Think of A for amperes and V for volts. The ammeter sits in line with the component it measures, so charge flows through it. The voltmeter sits on its own branch across the component, so it can compare both sides. Mix the letters up and the diagram tells the wrong story.',
    },
    // Source: CGP KS3 Physics Study Guide page on cells and batteries
    {
      id: 'cs-mis-cell-vs-battery',
      description:
        'Using the words "cell" and "battery" as if they mean the same thing, and drawing a single cell symbol to mean a 6 V battery.',
      triggerAnswer: 'cell-vs-battery',
      correction:
        'A cell is one power source. A battery is two or more cells joined together. The diagram should show as many cell symbols in a row as there are cells in the battery.',
      reExplanation:
        'Each AA cell on its own is 1.5 V. A 4.5 V torch battery needs three of those cells, so the diagram shows three cell symbols in a row. A 9 V battery needs six. If you only draw one cell, the diagram says the power source is 1.5 V, which is not what you meant.',
    },
    // Source: CGP KS3 Physics Workbook Common Mistake on switch states
    {
      id: 'cs-mis-switch-open-closed',
      description:
        'Reading any switch symbol as "the lamp will light", without checking whether the lever is up (open) or down (closed).',
      triggerAnswer: 'switch-open-closed',
      correction:
        'An open switch breaks the loop so no current flows. Look for the lever before deciding if the lamp can light. Lever up means open; lever flat means closed.',
      reExplanation:
        'A switch is a planned break in the wire. With the lever lifted off one contact, the wire is broken and no charge can flow, so the lamp stays off. With the lever flat between both contacts, the wire is joined again and the loop is whole, so the lamp can light. Always check the lever first.',
    },
    // Source: Edexcel GCSE Physics examiner report June 2019, Paper 1PH0/1F, lamp-symbol confusions
    {
      id: 'cs-mis-lamp-symbol',
      description:
        'Drawing the lamp as a plain circle with no cross, which makes it look like an ammeter or a voltmeter on the diagram.',
      triggerAnswer: 'lamp-symbol',
      correction:
        'The standard lamp symbol is a circle with a cross drawn through it. Without the cross, the symbol can be read as a meter, which changes the meaning of the diagram.',
      reExplanation:
        'The cross stands for the filament inside a lamp. Without it, your circle looks the same as the meter symbols. If a marker asks what your symbol is, a plain circle could mean nothing in particular, so the cross is the key feature that makes the lamp clear.',
    },
    // Source: CGP KS3 Physics Study Guide Common Mistake box on conventional current direction
    {
      id: 'cs-mis-meeting-current',
      description:
        'Believing that current leaves the cell from both terminals at once and meets at the lamp, where the two streams combine to make it light.',
      triggerAnswer: 'meeting-current',
      correction:
        'Current flows around the whole loop in one direction, from the positive terminal of the cell, through the wires and components, and back to the negative terminal.',
      reExplanation:
        'Trace the wire with your finger. Start at the long plate of the cell, go right around the outside of the loop through every component, and return to the short plate. The same charge passes every part of the loop, so the lamp is on the path, not a meeting point.',
    },
    // Source: CGP KS3 Physics Study Guide Common Mistake box on what voltage means
    {
      id: 'cs-mis-current-flow-symbols',
      description:
        'Believing that voltage flows around the circuit the same way current does, and so any meter "in the wire" can read voltage.',
      triggerAnswer: 'current-flow-symbols',
      correction:
        'Current flows around the loop. Potential difference, or voltage, is a difference between two points, not a thing that flows. That is why a voltmeter needs to touch both sides of a component.',
      reExplanation:
        'Charge flows in a loop, so an ammeter in line with the lamp reads the current. Voltage is a difference between two points, like the height drop down a step. To measure a drop you need a marker on each side, which is why a voltmeter sits in parallel across the component.',
    },
    // Authored, no external source
    {
      id: 'cs-mis-wire-vs-component',
      description:
        'Treating every line in a circuit diagram as a component, so a plain wire is counted as a "resistor" or "conductor".',
      triggerAnswer: 'wire-vs-component',
      correction:
        'A plain straight line is a wire, not a component. Wires connect components but are not counted when listing what is in the circuit.',
      reExplanation:
        'Look for an extra mark on the line. A circle, a cross, two plates, a rectangle, or a switch lever each turn the line into a component. A plain line with no extra mark is only a wire. So a circuit with one cell, one switch and one lamp has three components, even though the diagram has many wire lines.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

const TWO_CIRCUITS_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <!-- Series circuit (left) -->
    <text x="180" y="60" text-anchor="middle" font-size="20" font-weight="700" stroke="none" fill="currentColor">Series</text>
    <!-- Cell on left side, plates at y=180 and y=195 -->
    <line x1="60" y1="100" x2="60" y2="170" />
    <line x1="60" y1="210" x2="60" y2="280" />
    <line x1="40" y1="180" x2="80" y2="180" />
    <line x1="50" y1="195" x2="70" y2="195" stroke-width="7" />
    <!-- Top wire from cell to bulb 1 -->
    <line x1="60" y1="100" x2="125" y2="100" />
    <!-- Bulb 1 at x=155 -->
    <circle cx="155" cy="100" r="22" />
    <line x1="139" y1="84" x2="171" y2="116" />
    <line x1="139" y1="116" x2="171" y2="84" />
    <!-- Wire between bulbs -->
    <line x1="185" y1="100" x2="225" y2="100" />
    <!-- Bulb 2 at x=255 -->
    <circle cx="255" cy="100" r="22" />
    <line x1="239" y1="84" x2="271" y2="116" />
    <line x1="239" y1="116" x2="271" y2="84" />
    <!-- Right wire and bottom -->
    <line x1="285" y1="100" x2="300" y2="100" />
    <line x1="300" y1="100" x2="300" y2="280" />
    <line x1="300" y1="280" x2="60" y2="280" />

    <!-- Parallel circuit (right) -->
    <text x="600" y="60" text-anchor="middle" font-size="20" font-weight="700" stroke="none" fill="currentColor">Parallel</text>
    <!-- Cell on left side -->
    <line x1="450" y1="100" x2="450" y2="170" />
    <line x1="450" y1="210" x2="450" y2="280" />
    <line x1="430" y1="180" x2="470" y2="180" />
    <line x1="440" y1="195" x2="460" y2="195" stroke-width="7" />
    <!-- Top main wire -->
    <line x1="450" y1="100" x2="750" y2="100" />
    <!-- Right vertical wire -->
    <line x1="750" y1="100" x2="750" y2="280" />
    <!-- Bottom main wire -->
    <line x1="750" y1="280" x2="450" y2="280" />
    <!-- Branch 1 with bulb at x=550 -->
    <line x1="550" y1="100" x2="550" y2="160" />
    <circle cx="550" cy="190" r="22" />
    <line x1="534" y1="174" x2="566" y2="206" />
    <line x1="534" y1="206" x2="566" y2="174" />
    <line x1="550" y1="220" x2="550" y2="280" />
    <!-- Branch 2 with bulb at x=680 -->
    <line x1="680" y1="100" x2="680" y2="160" />
    <circle cx="680" cy="190" r="22" />
    <line x1="664" y1="174" x2="696" y2="206" />
    <line x1="664" y1="206" x2="696" y2="174" />
    <line x1="680" y1="220" x2="680" y2="280" />
  </g>
`

const PARALLEL_AMMETERS_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <!-- Cell on left -->
    <line x1="80" y1="80" x2="80" y2="160" />
    <line x1="80" y1="200" x2="80" y2="320" />
    <line x1="60" y1="170" x2="100" y2="170" />
    <line x1="70" y1="185" x2="90" y2="185" stroke-width="7" />
    <!-- Top wire with ammeter A1 (main) -->
    <line x1="80" y1="80" x2="200" y2="80" />
    <circle cx="230" cy="80" r="22" />
    <text x="230" y="88" text-anchor="middle" font-size="22" font-weight="700" stroke="none" fill="currentColor">A</text>
    <text x="230" y="44" text-anchor="middle" font-size="16" font-weight="600" stroke="none" fill="currentColor">0.40 A</text>
    <line x1="252" y1="80" x2="600" y2="80" />
    <!-- Right vertical wire -->
    <line x1="600" y1="80" x2="600" y2="320" />
    <!-- Bottom wire -->
    <line x1="600" y1="320" x2="80" y2="320" />
    <!-- Branch 1 with ammeter A2 -->
    <line x1="350" y1="80" x2="350" y2="140" />
    <circle cx="350" cy="170" r="22" />
    <text x="350" y="178" text-anchor="middle" font-size="22" font-weight="700" stroke="none" fill="currentColor">A</text>
    <text x="395" y="175" text-anchor="middle" font-size="16" font-weight="600" stroke="none" fill="currentColor">0.25 A</text>
    <line x1="350" y1="192" x2="350" y2="220" />
    <circle cx="350" cy="250" r="22" />
    <line x1="334" y1="234" x2="366" y2="266" />
    <line x1="334" y1="266" x2="366" y2="234" />
    <line x1="350" y1="272" x2="350" y2="320" />
    <!-- Branch 2 with ammeter A3 -->
    <line x1="500" y1="80" x2="500" y2="140" />
    <circle cx="500" cy="170" r="22" />
    <text x="500" y="178" text-anchor="middle" font-size="22" font-weight="700" stroke="none" fill="currentColor">A</text>
    <text x="545" y="175" text-anchor="middle" font-size="16" font-weight="600" stroke="none" fill="currentColor">0.15 A</text>
    <line x1="500" y1="192" x2="500" y2="220" />
    <circle cx="500" cy="250" r="22" />
    <line x1="484" y1="234" x2="516" y2="266" />
    <line x1="484" y1="266" x2="516" y2="234" />
    <line x1="500" y1="272" x2="500" y2="320" />
  </g>
`

const BROKEN_BULB_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <!-- Series with broken bulb (left) -->
    <text x="180" y="60" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Series: one bulb breaks</text>
    <line x1="60" y1="100" x2="60" y2="170" />
    <line x1="60" y1="210" x2="60" y2="280" />
    <line x1="40" y1="180" x2="80" y2="180" />
    <line x1="50" y1="195" x2="70" y2="195" stroke-width="7" />
    <line x1="60" y1="100" x2="125" y2="100" />
    <circle cx="155" cy="100" r="22" />
    <line x1="139" y1="84" x2="171" y2="116" />
    <line x1="139" y1="116" x2="171" y2="84" />
    <line x1="185" y1="100" x2="225" y2="100" />
    <!-- Bulb 2: filament with a gap to show broken -->
    <circle cx="255" cy="100" r="22" />
    <line x1="239" y1="84" x2="247" y2="92" />
    <line x1="263" y1="108" x2="271" y2="116" />
    <line x1="239" y1="116" x2="271" y2="84" />
    <text x="255" y="155" text-anchor="middle" font-size="14" font-weight="600" stroke="none" fill="currentColor">broken</text>
    <line x1="285" y1="100" x2="300" y2="100" />
    <line x1="300" y1="100" x2="300" y2="280" />
    <line x1="300" y1="280" x2="60" y2="280" />
    <!-- Parallel with broken bulb (right) -->
    <text x="600" y="60" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Parallel: one bulb breaks</text>
    <line x1="450" y1="100" x2="450" y2="170" />
    <line x1="450" y1="210" x2="450" y2="280" />
    <line x1="430" y1="180" x2="470" y2="180" />
    <line x1="440" y1="195" x2="460" y2="195" stroke-width="7" />
    <line x1="450" y1="100" x2="750" y2="100" />
    <line x1="750" y1="100" x2="750" y2="280" />
    <line x1="750" y1="280" x2="450" y2="280" />
    <!-- Branch 1 (intact, lit) -->
    <line x1="550" y1="100" x2="550" y2="160" />
    <circle cx="550" cy="190" r="22" />
    <line x1="534" y1="174" x2="566" y2="206" />
    <line x1="534" y1="206" x2="566" y2="174" />
    <line x1="550" y1="220" x2="550" y2="280" />
    <!-- Branch 2 (broken filament) -->
    <line x1="680" y1="100" x2="680" y2="160" />
    <circle cx="680" cy="190" r="22" />
    <line x1="664" y1="174" x2="672" y2="182" />
    <line x1="688" y1="198" x2="696" y2="206" />
    <line x1="664" y1="206" x2="696" y2="174" />
    <line x1="680" y1="220" x2="680" y2="280" />
    <text x="680" y="245" text-anchor="middle" font-size="14" font-weight="600" stroke="none" fill="currentColor">broken</text>
  </g>
`

const PARALLEL_LABELLED_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <!-- Cell on left -->
    <line x1="100" y1="100" x2="100" y2="170" />
    <line x1="100" y1="210" x2="100" y2="320" />
    <line x1="78" y1="180" x2="122" y2="180" />
    <line x1="90" y1="195" x2="110" y2="195" stroke-width="7" />
    <!-- Top main wire -->
    <line x1="100" y1="100" x2="500" y2="100" />
    <!-- Right vertical wire -->
    <line x1="500" y1="100" x2="500" y2="320" />
    <!-- Bottom main wire -->
    <line x1="500" y1="320" x2="100" y2="320" />
    <!-- Branch 1 with bulb at x=220 -->
    <line x1="220" y1="100" x2="220" y2="180" />
    <circle cx="220" cy="210" r="22" />
    <line x1="204" y1="194" x2="236" y2="226" />
    <line x1="204" y1="226" x2="236" y2="194" />
    <line x1="220" y1="240" x2="220" y2="320" />
    <!-- Branch 2 with bulb at x=380 -->
    <line x1="380" y1="100" x2="380" y2="180" />
    <circle cx="380" cy="210" r="22" />
    <line x1="364" y1="194" x2="396" y2="226" />
    <line x1="364" y1="226" x2="396" y2="194" />
    <line x1="380" y1="240" x2="380" y2="320" />
  </g>
`

export const electricitySeriesParallel: SkillNode = {
  id: 'physics-electricity-series-parallel',
  title: 'Series and Parallel Circuits',
  description:
    'Tell apart series and parallel circuits, trace current around each, and apply the rule that branch currents add up to the main current at a junction.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-electricity-circuits',
  zoneName: 'Electricity and Circuits',
  tier: 'core',
  prerequisites: ['physics-electricity-circuit-symbols'],
  curriculum: {
    ks3Objective:
      'Electric current, measured in amperes, in circuits, series and parallel circuits, currents add where branches meet and current as flow of charge.',
    awardingBodies: {
      aqa: '4.2.2 Series and parallel circuits (GCSE Physics 8463)',
      edexcel:
        '10.5 Currents in series and parallel circuits (GCSE Physics 1PH0)',
      ocr: 'P4.3 Series and parallel circuits (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'sp-scene-two-ways',
      title: 'Two Ways to Wire Bulbs',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare the layout of the series and the parallel circuit.',
      data: {
        viewBox: '0 0 800 400',
        svg: TWO_CIRCUITS_SVG,
        hotspots: [
          {
            id: 'tw-series-loop',
            x: 26,
            y: 25,
            label: 'Single loop (series)',
            description:
              'In series, all the bulbs sit on one loop. Charge has only one path round, so the same current passes every bulb.',
          },
          {
            id: 'tw-junction',
            x: 69,
            y: 25,
            label: 'Junction',
            description:
              'A junction is where the wire splits or rejoins. Branch currents add up to the main current here.',
          },
          {
            id: 'tw-two-branches',
            x: 77,
            y: 25,
            label: 'Two branches (parallel)',
            description:
              'In parallel, each bulb sits on its own branch back to the cell, so the bulbs have separate paths.',
          },
          {
            id: 'tw-branch-wire',
            x: 85,
            y: 33,
            label: 'A branch',
            description:
              'A single branch from the cell, through one bulb, and back. Each branch sees the same potential difference as the cell.',
          },
        ],
      },
    },
    {
      id: 'sp-scene-ammeters',
      title: 'Reading the Ammeters in Parallel',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read the ammeter and check that the branch currents add up to the main current.',
      data: {
        viewBox: '0 0 700 400',
        svg: PARALLEL_AMMETERS_SVG,
        hotspots: [
          {
            id: 'pa-main',
            x: 33,
            y: 20,
            label: 'Main current = 0.40 A',
            description:
              'The ammeter on the main wire reads the total current leaving the cell. Here it is 0.40 A.',
          },
          {
            id: 'pa-junction',
            x: 61,
            y: 20,
            label: 'Where branches meet',
            description:
              'At the junction the main current splits into two branches. The branch currents must add back up to 0.40 A.',
          },
          {
            id: 'pa-branch1',
            x: 50,
            y: 43,
            label: 'Branch 1 = 0.25 A',
            description:
              'The ammeter on branch 1 reads 0.25 A. This is part of the main current, not the whole of it.',
          },
          {
            id: 'pa-branch2',
            x: 71,
            y: 43,
            label: 'Branch 2 = 0.15 A',
            description:
              'The ammeter on branch 2 reads 0.15 A. Branch 1 plus branch 2 is 0.25 + 0.15 = 0.40 A, which matches the main current.',
          },
        ],
      },
    },
    {
      id: 'sp-scene-broken-bulb',
      title: 'When a Bulb Breaks',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see what happens to the rest of the circuit when one bulb breaks.',
      data: {
        viewBox: '0 0 800 400',
        svg: BROKEN_BULB_SVG,
        hotspots: [
          {
            id: 'bb-series-broken',
            x: 32,
            y: 25,
            label: 'Broken bulb (series)',
            description:
              'The filament has snapped, leaving a gap in the loop. Charge has nowhere else to go, so no current flows.',
          },
          {
            id: 'bb-series-intact',
            x: 19,
            y: 25,
            label: 'Intact bulb (still dark)',
            description:
              'This bulb is fine, but it sits on the same broken loop. With no current anywhere, it stays dark until the broken bulb is replaced.',
          },
          {
            id: 'bb-parallel-intact',
            x: 69,
            y: 48,
            label: 'Intact bulb (still lit)',
            description:
              'This bulb has its own complete branch back to the cell, so a break on the other branch does not affect it. It stays at full brightness.',
          },
          {
            id: 'bb-parallel-broken',
            x: 85,
            y: 48,
            label: 'Broken bulb (parallel)',
            description:
              'The filament has snapped on this branch only. The branch is open, but the rest of the circuit still has a closed path through the other branch.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'sp-worked-1',
      title: 'Reading the current at every point in a series loop',
      steps: [
        {
          explanation:
            'Look at the diagram. There is one cell, two identical bulbs, and a single loop of wire with no branches.',
        },
        {
          explanation:
            'Recall the rule for a series loop. Charge has only one path, so the same current flows through every part of the loop.',
        },
        {
          explanation:
            'An ammeter is placed between the cell and the first bulb. It reads 0.30 A.',
          maths: 'A1 = 0.30 A',
        },
        {
          explanation:
            'Move the ammeter, in your head, to a point between the two bulbs. There is still only one path, so the current is the same.',
        },
        {
          explanation:
            'The new ammeter reading is 0.30 A. Every bulb on the loop also carries 0.30 A of current.',
          maths: 'A2 = 0.30 A',
        },
      ],
    },
    {
      id: 'sp-worked-2',
      title: 'Branch currents add up at a junction',
      steps: [
        {
          explanation:
            'Draw a parallel circuit with one cell, two branches, and one identical bulb on each branch.',
        },
        {
          explanation:
            'Place ammeter A1 on the main wire near the cell. Place ammeter A2 on branch 1, just below the junction.',
        },
        {
          explanation: 'Read A1. It shows 0.40 A, the total current leaving the cell.',
          maths: 'A1 = 0.40 A',
        },
        {
          explanation: 'Read A2. It shows 0.25 A, the current going down branch 1.',
          maths: 'A2 = 0.25 A',
        },
        {
          explanation:
            'Apply the junction rule. The two branch currents must add up to the main current, so A2 plus A3 equals A1.',
          maths: 'A2 + A3 = A1',
        },
        {
          explanation:
            'Rearrange to find A3. A3 equals A1 minus A2, which is 0.40 minus 0.25, so 0.15 A. Branch 2 carries 0.15 A.',
          maths: 'A3 = 0.40 − 0.25 = 0.15 A',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'sp-q1',
      type: 'multiple-choice',
      stem: 'Which description fits a series circuit?',
      tier: 'core',
      options: [
        'All the components sit on a single loop with one path for the current.',
        'Each component sits on its own branch back to the cell.',
        'The components sit on two or more loops sharing wires.',
        'The cell is replaced by a battery to make the circuit work.',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'Think about how many paths the current has to choose from.',
    },
    {
      id: 'sp-q2',
      type: 'multiple-choice',
      stem: 'Which description fits a parallel circuit?',
      tier: 'core',
      options: [
        'All the components sit on a single loop with one path for the current.',
        'Two or more components each sit on their own branch back to the cell.',
        'There is a switch placed between every two components.',
        'The cell is drawn upside down to give it more energy.',
      ],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Look for branches that meet at a junction and split apart.',
    },
    {
      id: 'sp-q3',
      type: 'numeric-entry',
      stem: 'A torch has a single loop containing one cell and three identical bulbs in series. An ammeter near the cell reads 0.30 A. What does an ammeter placed between the second and third bulb read, in amperes?',
      tier: 'core',
      correctAnswer: 0.3,
      tolerance: 0.001,
      unit: 'A',
      xpValue: 10,
      misconceptionId: 'sp-mis-current-used-up',
      hint: 'There is only one path round a series loop, so the current is the same at every point.',
    },
    {
      id: 'sp-q4',
      type: 'numeric-entry',
      stem: 'In a parallel circuit, the main wire near the cell carries 0.40 A. One branch carries 0.15 A. What does the other branch carry, in amperes?',
      tier: 'core',
      correctAnswer: 0.25,
      tolerance: 0.001,
      unit: 'A',
      xpValue: 10,
      misconceptionId: 'sp-mis-junction-equal-split',
      hint: 'Branch currents add up to the main current, so subtract one branch from the main.',
    },
    {
      id: 'sp-q5',
      type: 'multiple-choice',
      stem: 'A torch holds two AA cells in series and one bulb. The torch bulb breaks. What happens?',
      tier: 'core',
      options: [
        'The cell glows dimly to take the bulb’s place.',
        'The current keeps flowing through the wires anyway.',
        'The other cell takes over the bulb’s job.',
        'No current flows because the loop is broken.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'sp-mis-broken-bulb-series',
      hint: 'A bulb on the loop is part of the path. Without it, the loop has a gap.',
    },
    {
      id: 'sp-q6',
      type: 'numeric-entry',
      stem: 'A parallel circuit has one cell and two branches, each with one identical bulb. An ammeter on each branch reads 0.20 A. What does the ammeter on the main wire near the cell read, in amperes?',
      tier: 'core',
      correctAnswer: 0.4,
      tolerance: 0.001,
      unit: 'A',
      xpValue: 10,
      hint: 'The two branch currents add up to the main current.',
    },
    {
      id: 'sp-q7',
      type: 'labelled-image',
      stem: 'Place the labels on this parallel circuit. Each marker takes one label.',
      tier: 'core',
      viewBox: '0 0 600 400',
      svg: PARALLEL_LABELLED_SVG,
      hotspots: [
        { id: 'sp-q7-h1', x: 17, y: 49, correctLabel: 'Cell' },
        { id: 'sp-q7-h2', x: 37, y: 25, correctLabel: 'Junction' },
        { id: 'sp-q7-h3', x: 63, y: 52, correctLabel: 'Lamp' },
        { id: 'sp-q7-h4', x: 63, y: 70, correctLabel: 'Branch' },
      ],
      labels: ['Cell', 'Junction', 'Lamp', 'Branch', 'Switch', 'Battery', 'Wire'],
      xpValue: 15,
      hint: 'A junction is where the wire splits. A branch is a single path from junction back to the loop. A lamp is a circle with a cross.',
    },
    {
      id: 'sp-q8',
      type: 'multiple-choice',
      stem: 'Two identical bulbs are wired in series with a single cell. An ammeter near the cell reads 0.20 A. What is the current through each bulb?',
      tier: 'confident',
      options: [
        '0.05 A through each bulb, because the current is split four ways round the loop.',
        '0.10 A through each bulb, because the two bulbs share the current evenly.',
        '0.20 A through each bulb, because the same current flows everywhere on a series loop.',
        '0.40 A through each bulb, because the bulbs double the current as it passes.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'sp-mis-series-shares-current',
      hint: 'In series there is only one path, so the ammeter reading is the current at every point.',
    },
    {
      id: 'sp-q9',
      type: 'multiple-choice',
      stem: 'In a UK home the kitchen lights and the lounge lights work independently. You can turn one off without turning the other off. How are the lights wired to the household supply?',
      tier: 'confident',
      options: [
        'In series, so the same current must pass through every light.',
        'In parallel, so each light sits on its own branch back to the supply.',
        'In a single straight line, so the current never has a junction.',
        'In a circle of cells, so each light has its own cell.',
      ],
      correctIndex: 1,
      xpValue: 15,
      hint: 'For one light to switch off without affecting the other, each must have its own path.',
    },
    {
      id: 'sp-q10',
      type: 'numeric-entry',
      stem: 'A parallel circuit has one cell and two branches. The main wire near the cell carries 0.60 A and branch 1 carries 0.40 A. What does branch 2 carry, in amperes?',
      tier: 'confident',
      correctAnswer: 0.2,
      tolerance: 0.001,
      unit: 'A',
      xpValue: 15,
      misconceptionId: 'sp-mis-junction-equal-split',
      hint: 'Branch 1 plus branch 2 equals the main current, so subtract.',
    },
    {
      id: 'sp-q11',
      type: 'drag-order',
      stem: 'Trace the loop in this series circuit. Place the labels in the order you meet them as you walk clockwise from the long plate of the cell.',
      tier: 'confident',
      items: ['Bulb 1', 'Wires', 'Bulb 2', 'Cell long plate', 'Cell short plate'],
      correctOrder: [3, 1, 0, 2, 4],
      xpValue: 15,
      hint: 'Start at the long plate, go through one bulb, then the next, and finish at the short plate. The wires connect each step.',
    },
    {
      id: 'sp-q12',
      type: 'spot-misconception',
      stem: 'Mia says, "When I added a second bulb in parallel to my torch circuit, both bulbs got dimmer because they have to share the cell’s energy." Is her reasoning sound?',
      tier: 'confident',
      statements: [
        {
          text: 'Her reasoning is sound. The cell has a fixed amount of energy, so two bulbs in parallel must share it.',
          isMisconception: true,
        },
        {
          text: 'Her reasoning is not sound. Each bulb in parallel sits on its own branch back to the cell, so each gets the full cell voltage and lights at about the same brightness as one alone. The cell does run flat sooner.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'sp-mis-parallel-share-dim',
    },
    {
      id: 'sp-q13',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is wiring a cell, two identical bulbs in parallel, and a switch on the main wire.',
      tier: 'confident',
      steps: [
        'Start with a cell on the left and a wire from the long plate going right along the top of the loop.',
        'Add a switch on the top wire, in line with the cell, so the switch can break the whole circuit at once.',
        null,
        'Run a short wire from each junction down through one bulb and join the two paths again at the bottom.',
        'Close the wire from the bottom join back to the short plate of the cell to complete the circuit.',
      ],
      missingStepIndex: 2,
      correctStep:
        'After the switch, split the wire at a junction so two short wires lead off side by side, making the start of two parallel branches.',
      xpValue: 15,
      hint: 'Before two branches can sit side by side, the wire has to split at a junction.',
    },
    {
      id: 'sp-q14',
      type: 'data-extraction',
      stem: 'Read the ammeter readings and decide whether the circuit is wired in series or in parallel.',
      tier: 'confident',
      dataSource:
        'Three ammeters were placed at different points around a circuit with one cell and two identical bulbs. Ammeter X (on the main wire next to the cell) reads 0.40 A. Ammeter Y (on a branch with one bulb) reads 0.20 A. Ammeter Z (on the other branch with one bulb) reads 0.20 A.',
      correctAnswer: 'parallel',
      xpValue: 15,
      hint: 'In a series loop the same current would appear at every ammeter. Compare X to Y and Z.',
    },
    {
      id: 'sp-q15',
      type: 'multiple-choice',
      stem: 'Some old Christmas tree lights are wired so that if any one bulb breaks, the whole string goes dark. What kind of circuit is this?',
      tier: 'confident',
      options: [
        'A series circuit, because every bulb is on the same loop, so a break stops all of them.',
        'A parallel circuit, because each bulb is on its own branch.',
        'A two-branch fork that splits and rejoins between every pair of bulbs.',
        'A pair of separate sub-loops, each with its own cell.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'sp-mis-broken-bulb-series',
      hint: 'If one break kills every bulb, the bulbs must share the same loop.',
    },
    {
      id: 'sp-q16',
      type: 'multiple-choice',
      stem: 'Sam is wiring a cycling helmet light. He wants two identical LEDs from a 4.5 V battery, set up so that each LED lights at full brightness and so that one LED can fail without taking the other one out. How should the LEDs be wired?',
      tier: 'challenge',
      options: [
        'In series, because series wiring keeps each LED at full brightness.',
        'In series, so the same current flows through both and they both fail together if one breaks.',
        'In parallel, so each LED sees the full 4.5 V and the working LED stays on if the other fails.',
        'In parallel, but a failed LED would still stop the whole circuit, just as it would in series.',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'sp-mis-broken-bulb-series',
      hint: 'Two needs at once: full brightness on each LED, and one LED can fail alone. Which layout gives both?',
    },
    {
      id: 'sp-q17',
      type: 'numeric-entry',
      stem: 'A parallel circuit has three branches. The main wire near the cell carries 0.90 A. Branch 1 carries 0.30 A and branch 2 carries 0.40 A. What does branch 3 carry, in amperes?',
      tier: 'challenge',
      correctAnswer: 0.2,
      tolerance: 0.001,
      unit: 'A',
      xpValue: 20,
      hint: 'All three branch currents add up to the main current. Subtract the two known branches.',
    },
    {
      id: 'sp-q18',
      type: 'spot-misconception',
      stem: 'Aisha says, "In my parallel circuit each branch has its own potential difference, so the voltages across the two branches add up to the battery voltage." Is her reasoning sound?',
      tier: 'challenge',
      statements: [
        {
          text: 'Her reasoning is sound. Voltages always add when you go round a circuit, no matter how the components are wired.',
          isMisconception: true,
        },
        {
          text: 'Her reasoning is not sound. In parallel, each branch has the same potential difference as the cell. Voltages only add for components that sit one after the other in series.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'sp-mis-parallel-voltage-adds',
    },
    {
      id: 'sp-q19',
      type: 'free-text',
      stem: 'Explain why the same current flows through every bulb in a series circuit, but the potential difference across each bulb is smaller than the cell voltage.',
      tier: 'challenge',
      sampleAnswer:
        'In a series circuit there is only one path round the loop, so every bit of charge must move at the same rate everywhere. That is why an ammeter reads the same value at every point on the loop. The cell’s energy is shared between the bulbs as the charge passes each one, so each bulb gets only part of the cell voltage. The bulb potential differences add up to the cell voltage.',
      keywords: ['one path', 'same current', 'shared', 'add', 'potential difference'],
      xpValue: 20,
      misconceptionId: 'sp-mis-current-equals-voltage',
      hint: 'Two ideas: how many paths the charge has, and how the cell’s energy is shared as the charge passes each bulb.',
    },
    {
      id: 'sp-q20',
      type: 'multiple-choice',
      stem: 'A school hall has 8 identical fairy lights wired in parallel from one cell. With all 8 lit, the main wire carries 1.6 A. One bulb then breaks. What does the main wire carry now, and how do the other 7 bulbs change?',
      tier: 'challenge',
      options: [
        'Main wire still 1.6 A; the other 7 bulbs are brighter because they now share the saved current.',
        'Main wire 0 A; every bulb goes dark, just as in a series string.',
        'Main wire 0.20 A; the other 7 bulbs each carry 0.029 A and look much dimmer.',
        'Main wire 1.4 A; each of the other 7 bulbs still carries 0.20 A and stays at the same brightness.',
      ],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'sp-mis-parallel-share-dim',
      hint: 'First find the per-branch current with all 8 lit. Then think about whether each remaining branch still has its own loop back to the cell.',
    },
  ],
  misconceptions: [
    // Source: IOPSpark "Current decreases around a circuit" diagnostic question (Institute of Physics, spark.iop.org) plus CGP KS3 Physics Study Guide Common Mistake box on series current
    {
      id: 'sp-mis-current-used-up',
      description:
        'Believing each bulb in a series circuit uses up some of the current, so the bulb after the first one is dimmer because there is less current left.',
      triggerAnswer: 'current-used-up',
      correction:
        'In a series loop the same current flows through every component. Charge is not used up by a bulb. Each bulb takes some of the energy carried by the charge, but the charge itself keeps moving around the loop.',
      reExplanation:
        'Picture a single loop with two identical bulbs. An ammeter at any point reads the same value, because every bit of charge goes once round the whole loop and back. Energy is what gets transferred at each bulb, not charge. Swap the bulbs over and both still light to the same brightness, because the same current passes through each.',
    },
    // Source: AQA GCSE Physics examiner report June 2018, paper 8463/1F, common errors on series current behaviour
    {
      id: 'sp-mis-series-shares-current',
      description:
        'Believing two bulbs in series share the current between them, so each bulb sees half of what the cell delivers.',
      triggerAnswer: 'series-shares-current',
      correction:
        'Bulbs in series do not share the current. The same current flows through every bulb and the cell, because the loop has only one path.',
      reExplanation:
        'Charge has only one route round a series loop, so it must move at the same rate everywhere. An ammeter placed before the first bulb, between the two bulbs, or after the second bulb all show the same reading. What does change in series is the potential difference across each bulb, which adds up to the cell voltage.',
    },
    // Source: IOPSpark "Two bulbs in parallel are still bright" demo notes (spark.iop.org) plus Edexcel GCSE Physics examiner report June 2019, paper 1PH0/1F
    {
      id: 'sp-mis-parallel-share-dim',
      description:
        'Believing that adding a second bulb in parallel makes both bulbs dimmer, because the bulbs must share the energy from the cell.',
      triggerAnswer: 'parallel-share-dim',
      correction:
        'Each parallel branch gets the full cell voltage, so each bulb in parallel lights at about the same brightness as one bulb on its own. The cell does run flat sooner, because it pushes more total current.',
      reExplanation:
        'Imagine plugging a second bedside lamp into a different socket on the same wall. Each lamp still sees the full mains voltage and lights at the same brightness, because the sockets sit on parallel branches. A bulb only goes dim when its share of voltage drops, which happens in series, not in parallel.',
    },
    // Source: CGP KS3 Physics Study Guide Common Mistake box on broken series bulbs plus IOPSpark "Why do my Christmas tree lights all go out?" demo notes
    {
      id: 'sp-mis-broken-bulb-series',
      description:
        'Believing that if one bulb breaks in a series circuit, only that bulb goes out, while the others stay lit.',
      triggerAnswer: 'broken-series-only-one',
      correction:
        'A break anywhere in a series loop opens the whole circuit, so every bulb on that loop goes dark. There is no other path for the charge to flow.',
      reExplanation:
        'Picture old Christmas tree lights wired in series. If one bulb’s filament snaps, the loop has a gap, no charge can flow, and every bulb on the string goes dark. Modern fairy lights are usually wired so each bulb has a tiny bypass, which is why one bad bulb does not kill the whole string anymore.',
    },
    // Source: AQA GCSE Physics examiner report June 2022, paper 8463/1F, on the junction rule for current
    {
      id: 'sp-mis-junction-equal-split',
      description:
        'Believing that current always splits equally at a parallel junction, even when one branch has different bulbs from the other.',
      triggerAnswer: 'junction-equal-split',
      correction:
        'Currents add where branches meet, but the split depends on the components. With two identical bulbs the split is equal; with different bulbs more current flows through the easier branch.',
      reExplanation:
        'Think of charge as water in pipes. At a fork, more water flows down the wider, smoother pipe. In a circuit, more current flows down the branch with less resistance. Two identical bulbs split the main current evenly. The KS3 rule worth remembering is: branch currents always add up to the main current.',
    },
    // Source: AQA GCSE Physics examiner report June 2021, paper 8463/1F, on series and parallel voltage rules
    {
      id: 'sp-mis-parallel-voltage-adds',
      description:
        'Believing that potential differences across parallel branches add up to the cell voltage, the way they do across components in series.',
      triggerAnswer: 'parallel-voltage-adds',
      correction:
        'In parallel, each branch has the same potential difference as the cell. Voltages do not add across parallel branches; they only add across components that sit one after the other in series.',
      reExplanation:
        'Two identical lamps wired in parallel to a 6 V cell each sit between the same two points of the circuit, so each lamp gets the full 6 V. In series the lamps sit at different points along the loop, so their potential differences add up to 6 V. The rule depends on whether the components share end points or sit one after the other.',
    },
    // Source: CGP KS3 Physics Study Guide Common Mistake box on current versus potential difference
    {
      id: 'sp-mis-current-equals-voltage',
      description:
        'Treating current and potential difference as the same quantity, saying things like the cell sends six amps of voltage round the loop.',
      triggerAnswer: 'current-equals-voltage',
      correction:
        'Current and potential difference are different ideas. Current, in amperes, is the flow of charge round the loop. Potential difference, in volts, is the energy each bit of charge carries between two points.',
      reExplanation:
        'An ammeter reads current in amperes, where the same charge passes per second. A voltmeter reads potential difference in volts between two points. A 1.5 V cell pushes charge with 1.5 J of energy per coulomb. The current that follows depends on what is in the circuit. So a cell does not send amps; it pushes a current.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const electricityCircuitsZoneNodes = [
  electricityCircuitSymbols,
  electricitySeriesParallel,
]
