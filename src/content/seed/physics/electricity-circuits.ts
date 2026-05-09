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

export const electricityCircuitsZoneNodes = [electricityCircuitSymbols]
