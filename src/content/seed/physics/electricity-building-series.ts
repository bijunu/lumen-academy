import type { SkillNode } from '@/types/content'

const BUILD_STEPS_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Building a series circuit on a Year 7 workbench</text>

    <!-- Step 1: cell on its own -->
    <text x="120" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">1. Cell on its own</text>
    <line x1="80" y1="120" x2="120" y2="120" />
    <line x1="120" y1="100" x2="120" y2="140" />
    <line x1="130" y1="108" x2="130" y2="132" stroke-width="7" />
    <line x1="130" y1="120" x2="170" y2="120" />
    <text x="120" y="170" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">A 1.5 V cell on the bench.</text>
    <text x="120" y="186" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">No loop yet, no current.</text>

    <!-- Step 2: cell + switch + open loop -->
    <text x="400" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">2. Switch added, loop still open</text>
    <line x1="300" y1="120" x2="340" y2="120" />
    <line x1="340" y1="100" x2="340" y2="140" />
    <line x1="350" y1="108" x2="350" y2="132" stroke-width="7" />
    <line x1="350" y1="120" x2="420" y2="120" />
    <circle cx="425" cy="120" r="4" fill="currentColor" />
    <line x1="425" y1="120" x2="465" y2="96" />
    <circle cx="470" cy="120" r="4" fill="currentColor" />
    <line x1="470" y1="120" x2="510" y2="120" />
    <text x="400" y="170" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Switch is open. There is a gap in</text>
    <text x="400" y="186" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">the loop, so still no current.</text>

    <!-- Step 3: lamp added, switch open -->
    <text x="680" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">3. Lamp added, switch still open</text>
    <line x1="580" y1="120" x2="620" y2="120" />
    <line x1="620" y1="100" x2="620" y2="140" />
    <line x1="630" y1="108" x2="630" y2="132" stroke-width="7" />
    <line x1="630" y1="120" x2="680" y2="120" />
    <circle cx="685" cy="120" r="4" fill="currentColor" />
    <line x1="685" y1="120" x2="720" y2="96" />
    <circle cx="725" cy="120" r="4" fill="currentColor" />
    <line x1="725" y1="120" x2="755" y2="120" />
    <line x1="755" y1="120" x2="755" y2="170" />
    <circle cx="755" cy="195" r="22" />
    <line x1="739" y1="179" x2="771" y2="211" />
    <line x1="739" y1="211" x2="771" y2="179" />
    <line x1="755" y1="217" x2="755" y2="260" />
    <line x1="755" y1="260" x2="620" y2="260" />
    <line x1="620" y1="260" x2="620" y2="140" />
    <text x="680" y="295" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Loop drawn, but switch still open.</text>
    <text x="680" y="311" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Lamp will not light yet.</text>

    <!-- Step 4: full series, switch closed -->
    <text x="400" y="340" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">4. Switch closed: current flows, lamp lights</text>
    <line x1="220" y1="370" x2="260" y2="370" />
    <line x1="260" y1="350" x2="260" y2="390" />
    <line x1="270" y1="358" x2="270" y2="382" stroke-width="7" />
    <line x1="270" y1="370" x2="360" y2="370" />
    <circle cx="365" cy="370" r="4" fill="currentColor" />
    <line x1="365" y1="370" x2="395" y2="370" />
    <circle cx="400" cy="370" r="4" fill="currentColor" />
    <line x1="400" y1="370" x2="500" y2="370" />
    <circle cx="525" cy="370" r="20" />
    <line x1="511" y1="356" x2="539" y2="384" />
    <line x1="511" y1="384" x2="539" y2="356" />
    <line x1="545" y1="370" x2="580" y2="370" />
    <line x1="580" y1="370" x2="580" y2="390" />
    <text x="400" y="395" text-anchor="middle" font-size="11" stroke="none" fill="currentColor" font-style="italic">Lever is flat: no gap, charge can move all the way around.</text>
  </g>
`

const OPEN_VS_CLOSED_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">A gap in the loop stops the current</text>

    <!-- Left: open switch, lamp off -->
    <text x="200" y="70" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Switch open: loop broken</text>
    <line x1="80" y1="100" x2="80" y2="180" />
    <line x1="80" y1="220" x2="80" y2="320" />
    <line x1="58" y1="190" x2="102" y2="190" />
    <line x1="70" y1="208" x2="90" y2="208" stroke-width="7" />
    <line x1="80" y1="100" x2="200" y2="100" />
    <circle cx="205" cy="100" r="4" fill="currentColor" />
    <line x1="205" y1="100" x2="245" y2="76" />
    <circle cx="250" cy="100" r="4" fill="currentColor" />
    <line x1="250" y1="100" x2="320" y2="100" />
    <line x1="320" y1="100" x2="320" y2="170" />
    <circle cx="320" cy="200" r="22" />
    <line x1="304" y1="184" x2="336" y2="216" />
    <line x1="304" y1="216" x2="336" y2="184" />
    <line x1="320" y1="230" x2="320" y2="320" />
    <line x1="320" y1="320" x2="80" y2="320" />
    <text x="200" y="350" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Charge cannot jump the gap.</text>
    <text x="200" y="368" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Current is 0 A. Lamp stays off.</text>

    <!-- Right: closed switch, lamp lit -->
    <text x="600" y="70" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Switch closed: loop complete</text>
    <line x1="480" y1="100" x2="480" y2="180" />
    <line x1="480" y1="220" x2="480" y2="320" />
    <line x1="458" y1="190" x2="502" y2="190" />
    <line x1="470" y1="208" x2="490" y2="208" stroke-width="7" />
    <line x1="480" y1="100" x2="605" y2="100" />
    <circle cx="605" cy="100" r="4" fill="currentColor" />
    <line x1="605" y1="100" x2="650" y2="100" />
    <circle cx="650" cy="100" r="4" fill="currentColor" />
    <line x1="650" y1="100" x2="720" y2="100" />
    <line x1="720" y1="100" x2="720" y2="170" />
    <circle cx="720" cy="200" r="22" fill="currentColor" fill-opacity="0.25" />
    <line x1="704" y1="184" x2="736" y2="216" />
    <line x1="704" y1="216" x2="736" y2="184" />
    <line x1="720" y1="230" x2="720" y2="320" />
    <line x1="720" y1="320" x2="480" y2="320" />
    <!-- Arrows showing current flow -->
    <polygon points="540,93 558,100 540,107" fill="currentColor" stroke="none" />
    <polygon points="660,107 678,100 660,93" fill="currentColor" stroke="none" />
    <polygon points="487,260 480,278 473,260" fill="currentColor" stroke="none" />
    <polygon points="713,260 720,278 727,260" fill="currentColor" stroke="none" />
    <text x="600" y="350" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Lever is flat, no gap.</text>
    <text x="600" y="368" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Current flows. Lamp glows.</text>
  </g>
`

const METER_PLACEMENT_BUILD_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Ammeter in series, voltmeter in parallel</text>

    <!-- Cell on the left -->
    <line x1="100" y1="100" x2="100" y2="190" />
    <line x1="100" y1="230" x2="100" y2="340" />
    <line x1="78" y1="200" x2="122" y2="200" />
    <line x1="90" y1="218" x2="110" y2="218" stroke-width="7" />

    <!-- Top wire with switch and ammeter -->
    <line x1="100" y1="100" x2="180" y2="100" />
    <circle cx="185" cy="100" r="4" fill="currentColor" />
    <line x1="185" y1="100" x2="225" y2="100" />
    <circle cx="230" cy="100" r="4" fill="currentColor" />
    <line x1="230" y1="100" x2="290" y2="100" />
    <circle cx="320" cy="100" r="22" />
    <text x="320" y="108" text-anchor="middle" font-size="22" font-weight="700" stroke="none" fill="currentColor">A</text>
    <line x1="342" y1="100" x2="540" y2="100" />

    <!-- Lamp on the right -->
    <line x1="540" y1="100" x2="540" y2="180" />
    <circle cx="540" cy="210" r="22" />
    <line x1="524" y1="194" x2="556" y2="226" />
    <line x1="524" y1="226" x2="556" y2="194" />
    <line x1="540" y1="232" x2="540" y2="340" />
    <line x1="540" y1="340" x2="100" y2="340" />

    <!-- Voltmeter on a parallel branch across the lamp -->
    <line x1="540" y1="180" x2="420" y2="180" />
    <line x1="420" y1="180" x2="420" y2="190" />
    <circle cx="420" cy="210" r="22" />
    <text x="420" y="218" text-anchor="middle" font-size="22" font-weight="700" stroke="none" fill="currentColor">V</text>
    <line x1="420" y1="230" x2="420" y2="240" />
    <line x1="420" y1="240" x2="540" y2="240" />

    <!-- Labels -->
    <text x="320" y="65" text-anchor="middle" font-size="12" font-weight="600" stroke="none" fill="currentColor">A on the loop, in series</text>
    <text x="420" y="280" text-anchor="middle" font-size="12" font-weight="600" stroke="none" fill="currentColor">V on its own branch,</text>
    <text x="420" y="296" text-anchor="middle" font-size="12" font-weight="600" stroke="none" fill="currentColor">in parallel with the lamp</text>
  </g>
`

export const electricityBuildingSeries: SkillNode = {
  id: 'physics-electricity-building-series',
  title: 'Building a Series Circuit',
  description:
    'Build a working series circuit step by step on a Year 7 workbench, starting from a 1.5 V cell and adding wires, a switch and a lamp until the loop is complete. A gap anywhere in the loop, such as a missing wire or an open switch, stops the current and the lamp stays off. Close the switch and charge flows all the way round the single loop. Add an ammeter in series with the lamp to read the current in amperes; add a voltmeter on its own branch in parallel across the lamp to read the potential difference in volts. The same current flows through every component in a series loop, because charge has no other path to take.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-electricity-circuits',
  zoneName: 'Electricity and Circuits',
  tier: 'confident',
  prerequisites: ['physics-electricity-circuit-symbols'],
  curriculum: {
    ks3Objective:
      'Electric current, measured in amperes, in circuits, series and parallel circuits, currents add where branches meet and current as flow of charge.',
    awardingBodies: {
      aqa: '4.2.1.1 Standard circuit diagram symbols / 4.2.1.4 Series and parallel circuits (GCSE Physics 8463)',
      edexcel:
        'Topic 2.2 Circuit diagrams / 2.4 Series circuits, ammeter and voltmeter placement (GCSE Physics 1PH0)',
      ocr: 'P4.2 Circuit symbols, ammeter in series and voltmeter in parallel (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'pe-bs-scene-build-steps',
      title: 'Building the Loop, One Part at a Time',
      type: 'labelled-diagram',
      instructions:
        'Click each step to see what changes when the next part is added to the loop.',
      data: {
        viewBox: '0 0 800 420',
        svg: BUILD_STEPS_SVG,
        hotspots: [
          {
            id: 'pe-bs-step1',
            x: 15,
            y: 30,
            label: 'Step 1: cell on its own',
            description:
              'You start with a 1.5 V cell sitting on the bench. There is no loop yet, so no current. The cell is the energy source, but on its own it does nothing.',
          },
          {
            id: 'pe-bs-step2',
            x: 50,
            y: 30,
            label: 'Step 2: add a switch, loop still open',
            description:
              'A wire and an open switch are added next to the cell. The angled lever sits above one contact, so there is still a gap in the loop. Charge has nowhere to flow.',
          },
          {
            id: 'pe-bs-step3',
            x: 85,
            y: 30,
            label: 'Step 3: lamp added, switch still open',
            description:
              'A lamp and the return wire join the loop. The loop now has a path on paper, but the switch is open, so the gap remains. The lamp does not light.',
          },
          {
            id: 'pe-bs-step4',
            x: 50,
            y: 85,
            label: 'Step 4: close the switch, lamp lights',
            description:
              'The switch lever drops flat. Now there is no gap, so charge moves around the single loop, through the lamp, and back to the cell. The lamp glows.',
          },
        ],
      },
    },
    {
      id: 'pe-bs-scene-open-vs-closed',
      title: 'Open Loop vs Closed Loop',
      type: 'labelled-diagram',
      instructions:
        'Click each diagram to see why a gap in the loop stops the current.',
      data: {
        viewBox: '0 0 800 400',
        svg: OPEN_VS_CLOSED_SVG,
        hotspots: [
          {
            id: 'pe-bs-open-gap',
            x: 28,
            y: 25,
            label: 'Open switch makes a gap',
            description:
              'The lever is angled up off one contact. That is a gap in the wire. Charge cannot jump the gap, so no current flows and the lamp stays off.',
          },
          {
            id: 'pe-bs-open-reading',
            x: 28,
            y: 90,
            label: 'Ammeter would read 0 A',
            description:
              'If you put an ammeter anywhere on this open loop, it would read 0 A. The reading depends on whether the loop is complete, not on which side of the gap the ammeter sits.',
          },
          {
            id: 'pe-bs-closed-loop',
            x: 73,
            y: 25,
            label: 'Closed switch completes the loop',
            description:
              'The lever drops flat between the two contacts. There is no gap. Charge moves all the way round and the lamp lights up.',
          },
          {
            id: 'pe-bs-closed-flow',
            x: 73,
            y: 90,
            label: 'Same current at every point',
            description:
              'In a single series loop, the current is the same everywhere. The arrows are the same size on each wire, because charge has no other path to take.',
          },
        ],
      },
    },
    {
      id: 'pe-bs-scene-meter-placement',
      title: 'Adding an Ammeter and a Voltmeter',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see where the ammeter and voltmeter sit on a working series loop.',
      data: {
        viewBox: '0 0 800 360',
        svg: METER_PLACEMENT_BUILD_SVG,
        hotspots: [
          {
            id: 'pe-bs-meter-cell',
            x: 12,
            y: 60,
            label: 'Cell: the energy source',
            description:
              'A 1.5 V cell on the workbench. Long plate is the positive terminal, short thick plate is the negative terminal.',
          },
          {
            id: 'pe-bs-meter-switch',
            x: 26,
            y: 28,
            label: 'Switch in series',
            description:
              'The switch sits on the main loop with the lever flat between its contacts. Closed, so the rest of the loop can work.',
          },
          {
            id: 'pe-bs-meter-ammeter',
            x: 40,
            y: 28,
            label: 'Ammeter in series with the lamp',
            description:
              'The A circle sits on the same wire as the lamp, in line with it. Every charge through the lamp also passes the ammeter, so it reads the current in the lamp in amperes.',
          },
          {
            id: 'pe-bs-meter-lamp',
            x: 68,
            y: 58,
            label: 'Lamp: the component being read',
            description:
              'The circle with a cross is the lamp. The ammeter sits in line with it; the voltmeter sits across it.',
          },
          {
            id: 'pe-bs-meter-voltmeter',
            x: 52,
            y: 60,
            label: 'Voltmeter in parallel across the lamp',
            description:
              'The V circle sits on its own short branch beside the lamp, with one wire on each side. It reads the potential difference across the lamp in volts.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'pe-bs-worked-1',
      title: 'Closing the loop on a workbench: cell, switch, lamp',
      steps: [
        {
          explanation:
            'Set out the kit on the bench. You have a 1.5 V cell, two short wires, an open switch and a 1.5 V lamp. The cell has a long plate (positive) and a short, thick plate (negative).',
        },
        {
          explanation:
            'Connect the first wire from the long plate of the cell to one contact of the switch. The switch is still open, so the loop is not complete yet.',
        },
        {
          explanation:
            'Connect the other contact of the switch to one side of the lamp. Now you have a chain: cell, wire, switch, wire, lamp. There is still no path back to the cell.',
        },
        {
          explanation:
            'Connect the second wire from the other side of the lamp back to the short plate of the cell. The loop is now drawn on the bench: cell, wire, switch, wire, lamp, wire, cell.',
        },
        {
          explanation:
            'Check for gaps. The switch lever is still up, so there is one gap in the loop. The lamp will not light because charge cannot move across that gap.',
        },
        {
          explanation:
            'Close the switch by pressing the lever flat. There are now no gaps. Charge flows from the long plate, round the loop, through the lamp, and back to the short plate. The lamp glows.',
          maths: 'loop complete, I > 0 A',
        },
      ],
    },
    {
      id: 'pe-bs-worked-2',
      title: 'Adding an ammeter and a voltmeter to the lamp',
      steps: [
        {
          explanation:
            'You have the same working loop: cell, closed switch, lamp. You want to read the current through the lamp and the potential difference across it.',
        },
        {
          explanation:
            'Pick the right meter for each job. An ammeter measures current in amperes; a voltmeter measures potential difference in volts.',
          maths: 'A reads current; V reads potential difference',
        },
        {
          explanation:
            'Place the ammeter in series with the lamp. Break the wire next to the lamp and reconnect it through the ammeter, so every charge through the lamp also passes the ammeter.',
          maths: 'A in line with lamp',
        },
        {
          explanation:
            'Place the voltmeter in parallel across the lamp. Run a short pair of wires from one side of the lamp, through the voltmeter, and back to the other side of the lamp.',
          maths: 'V across lamp',
        },
        {
          explanation:
            'Check the loop. The ammeter is now part of the main loop. The voltmeter sits on its own short branch alongside the lamp and does not break the main loop.',
        },
        {
          explanation:
            'Close the switch. The ammeter reads the current in the lamp, for example 0.30 A. The voltmeter reads the potential difference across the lamp, for example 1.5 V. Both readings match the cell and lamp on the bench.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pe-bs-q1',
      type: 'multiple-choice',
      stem: 'You set a 1.5 V cell on the bench and connect nothing else. What happens?',
      tier: 'core',
      options: [
        'The cell glows a little because it is on.',
        'Nothing happens, because there is no loop for charge to flow round.',
        'Current still flows through the cell to nowhere.',
        'The cell empties straight away.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pe-bs-mis-cell-alone-flows',
      hint: 'A cell needs a complete loop before any charge can move.',
    },
    {
      id: 'pe-bs-q2',
      type: 'multiple-choice',
      stem: 'In a simple series loop with a cell, switch and lamp, the switch is open. What does the lamp do?',
      tier: 'core',
      options: [
        'It glows dimly because the cell is in the loop.',
        'It glows brightly until the switch closes.',
        'It flickers on and off.',
        'It stays off because the open switch makes a gap in the loop.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'pe-bs-mis-gap-still-flows',
      hint: 'A gap anywhere in the loop stops the current. An open switch is a gap.',
    },
    {
      id: 'pe-bs-q3',
      type: 'multiple-choice',
      stem: 'Which order of parts on the bench gives a working series loop?',
      tier: 'core',
      options: [
        'Cell, wire, switch, wire, lamp, wire, back to cell.',
        'Two wires only, no cell.',
        'Cell, lamp, lamp, lamp, no wires.',
        'Switch, switch, switch, cell, no return path.',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'A loop must start and end at the cell, with every part joined by a wire.',
    },
    {
      id: 'pe-bs-q4',
      type: 'multiple-choice',
      stem: 'You want to read the current in the lamp of a series loop. Where do you put the ammeter?',
      tier: 'core',
      options: [
        'In series, on the same wire as the lamp.',
        'On its own branch next to the lamp.',
        'Inside the cell, behind the long plate.',
        'Anywhere off the loop, beside the bench.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pe-bs-mis-ammeter-in-parallel',
      hint: 'Every charge that passes the lamp should also pass the ammeter.',
    },
    {
      id: 'pe-bs-q5',
      type: 'multiple-choice',
      stem: 'A pupil joins a cell to a switch and then to a lamp on the bench, in that order. They do not add a wire from the far side of the lamp back to the cell. What is missing for the lamp to light?',
      tier: 'core',
      options: [
        'A return wire from the lamp back to the second plate of the cell, to close the loop.',
        'A second cell, because one cell is too weak.',
        'A voltmeter across the lamp, to push the charge along.',
        'Nothing, the lamp should already be lighting.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pe-bs-mis-no-return-path',
      hint: 'A chain of parts is not yet a loop. Charge needs a path back to the cell.',
    },
    {
      id: 'pe-bs-q6',
      type: 'numeric-entry',
      stem: 'A school workbench cell is labelled 1.5 V. The lamp in the same series loop is rated 1.5 V. What potential difference does a voltmeter across the lamp read, in V, when the loop is closed?',
      tier: 'core',
      correctAnswer: 1.5,
      unit: 'V',
      xpValue: 10,
      hint: 'In a single-lamp series loop, the cell shares all its potential difference across the lamp.',
    },
    {
      id: 'pe-bs-q7',
      type: 'multiple-choice',
      stem: 'A pupil builds a loop on the bench and gets no light from the lamp. They check and the switch lever is angled up. What is the most likely fix?',
      tier: 'core',
      options: [
        'Use a bigger cell.',
        'Press the switch lever flat so the loop has no gap.',
        'Replace the lamp.',
        'Move the ammeter to the other side of the lamp.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pe-bs-mis-gap-still-flows',
      hint: 'A lever angled up means an open switch. That is a gap in the loop.',
    },
    {
      id: 'pe-bs-q8',
      type: 'numeric-entry',
      stem: 'A series loop with a closed switch has a current of 0.30 A through the lamp. An ammeter is added on the wire on the far side of the lamp, away from the cell. What reading does this ammeter show, in A?',
      tier: 'core',
      correctAnswer: 0.3,
      unit: 'A',
      xpValue: 10,
      misconceptionId: 'pe-bs-mis-current-used-up',
      hint: 'In a series loop, the current is the same at every point.',
    },
    {
      id: 'pe-bs-q9',
      type: 'multiple-choice',
      stem: 'Which sentence best describes where a voltmeter sits when measuring across a lamp?',
      tier: 'confident',
      options: [
        'On the same wire as the lamp, in series with it.',
        'Inside the lamp, behind the cross.',
        'On its own branch, in parallel across the lamp.',
        'On a separate loop with its own cell.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pe-bs-mis-voltmeter-in-series',
      hint: 'A voltmeter reads across a component, so its wires sit one on each side of the lamp.',
    },
    {
      id: 'pe-bs-q10',
      type: 'multiple-choice',
      stem: 'You add an ammeter on a parallel branch beside the lamp, not in line with it. What happens?',
      tier: 'confident',
      options: [
        'The ammeter reads the current in the lamp correctly.',
        'The ammeter still works because all meters work the same way.',
        'The voltmeter reads the lamp current instead.',
        'The ammeter reads zero, because it is not in series with the lamp.',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'pe-bs-mis-ammeter-in-parallel',
      hint: 'An ammeter must sit in series so the same charge passes through both it and the lamp.',
    },
    {
      id: 'pe-bs-q11',
      type: 'numeric-entry',
      stem: 'A school workbench uses a PP3 battery instead of a single cell. A PP3 holds 6 cells of 1.5 V each, joined in series. What is the total potential difference of the PP3, in V?',
      tier: 'confident',
      correctAnswer: 9,
      unit: 'V',
      xpValue: 15,
      hint: 'Add the potential difference of each cell, or multiply 6 by 1.5.',
    },
    {
      id: 'pe-bs-q12',
      type: 'numeric-entry',
      stem: 'A series loop has a current of 0.20 A in the lamp. A second ammeter is added on the wire between the switch and the cell. What does the second ammeter read, in A?',
      tier: 'confident',
      correctAnswer: 0.2,
      unit: 'A',
      xpValue: 15,
      misconceptionId: 'pe-bs-mis-current-used-up',
      hint: 'In one single loop, current is the same all the way round.',
    },
    {
      id: 'pe-bs-q13',
      type: 'multiple-choice',
      stem: 'A pupil writes, "The lamp uses up the current, so the wire after the lamp carries less." What is the best correction?',
      tier: 'confident',
      options: [
        'They are right; current always drops after a lamp.',
        'They are right, because lamps store charge.',
        'They are not right. Current is the same at every point in a single series loop. The lamp transfers energy, not current.',
        'They are not right, but only for very small lamps.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pe-bs-mis-current-used-up',
      hint: 'Current is not consumed by a lamp. The lamp takes energy from the charge, not the charge itself.',
    },
    {
      id: 'pe-bs-q14',
      type: 'spot-misconception',
      stem: 'Aisha is wiring a lamp on the bench. She says, "I will put the ammeter on its own branch beside the lamp, like the voltmeter, so I can read the current."',
      tier: 'confident',
      statements: [
        {
          text: 'Aisha is right. Both meters sit on their own branch beside the component.',
          isMisconception: true,
        },
        {
          text: 'Aisha is not right. The ammeter must sit in series with the lamp, on the same wire, so the same charge passes through both. Only the voltmeter sits on a parallel branch.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pe-bs-mis-ammeter-in-parallel',
    },
    {
      id: 'pe-bs-q15',
      type: 'numeric-entry',
      stem: 'A series loop draws a current of 0.40 A through a lamp connected to a 1.5 V cell. A pupil opens the switch. What current does the ammeter on the loop now read, in A?',
      tier: 'confident',
      correctAnswer: 0,
      unit: 'A',
      xpValue: 15,
      misconceptionId: 'pe-bs-mis-gap-still-flows',
      hint: 'An open switch is a gap in the loop. No loop means no current.',
    },
    {
      id: 'pe-bs-q16',
      type: 'drag-order',
      stem: 'Put the steps in order for building a working series loop with a cell, switch and lamp on the bench.',
      tier: 'challenge',
      items: [
        'Press the switch lever flat to close the loop, and check the lamp lights.',
        'Connect one wire from the long plate of the cell to one contact of the switch.',
        'Place the cell, switch, lamp and wires on the bench, with the switch open.',
        'Connect the second wire from the other side of the lamp back to the short plate of the cell.',
        'Connect a wire from the other contact of the switch to one side of the lamp.',
      ],
      correctOrder: [2, 1, 4, 3, 0],
      xpValue: 20,
      hint: 'Lay out the kit, then wire from one plate of the cell around the loop and back to the other plate, then close the switch.',
    },
    {
      id: 'pe-bs-q17',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is building a series loop and wants to read the current in the lamp.',
      tier: 'challenge',
      steps: [
        'Lay out the cell, switch and lamp on the bench, joined by wires into a single loop.',
        'Decide which component you want the current reading for. Here it is the lamp.',
        null,
        'Reconnect the wire through the ammeter, so the ammeter is in series on the same wire as the lamp.',
        'Close the switch, and read the current in amperes from the ammeter.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Break the wire next to the lamp on the main loop, so you can drop the ammeter into that gap.',
      xpValue: 20,
      misconceptionId: 'pe-bs-mis-ammeter-in-parallel',
    },
    {
      id: 'pe-bs-q18',
      type: 'numeric-entry',
      stem: 'A pupil builds a series loop with a 9 V PP3 battery and a single lamp rated 9 V. They place a voltmeter in parallel across the lamp and an ammeter in series with it. The ammeter reads 0.50 A. What does the voltmeter read across the lamp, in V?',
      tier: 'challenge',
      correctAnswer: 9,
      unit: 'V',
      xpValue: 20,
      hint: 'With one lamp on the loop, the lamp takes all of the battery potential difference.',
    },
    {
      id: 'pe-bs-q19',
      type: 'multiple-choice',
      stem: 'A pupil sets up a single-loop series circuit with a cell, switch, lamp and ammeter. The lamp does not light. The ammeter reads 0 A. They check that the cell is fresh and the lamp is not broken. What is the most likely cause?',
      tier: 'challenge',
      options: [
        'The ammeter has been wired in parallel with the lamp.',
        'There is a gap somewhere on the loop, such as an open switch or a loose wire.',
        'The lamp filament uses up the current before it can reach the ammeter.',
        'The voltmeter is reading volts and so the ammeter cannot read amps.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'pe-bs-mis-gap-still-flows',
      hint: 'A 0 A reading anywhere on a single loop means the loop is broken. Trace round and find the gap.',
    },
    {
      id: 'pe-bs-q20',
      type: 'numeric-entry',
      stem: 'A school series loop is built with two 1.5 V cells in series (so 3.0 V in total), one switch and one lamp. When the switch is closed, the ammeter on the loop reads 0.60 A. The pupil now opens the switch. What does the same ammeter read, in A?',
      tier: 'challenge',
      correctAnswer: 0,
      unit: 'A',
      xpValue: 20,
      misconceptionId: 'pe-bs-mis-gap-still-flows',
      hint: 'Opening the switch makes a gap in the loop. With no complete loop, the current is 0 A everywhere.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 1F, candidates wrote that a battery on its own delivers current even with no loop, missing that a complete circuit is needed for charge to flow.
    {
      id: 'pe-bs-mis-cell-alone-flows',
      description:
        'Thinking that a cell on its own delivers current, even when nothing else is connected, missing that charge needs a complete loop to flow.',
      triggerAnswer: 'cell-alone-flows',
      correction:
        'A cell on its own does nothing. Charge needs a complete loop, from one plate of the cell, round the wires and components, and back to the other plate, before any current can flow.',
      reExplanation:
        'Picture a 1.5 V cell sitting on the bench. Until you join its two plates with a wire and a working component, charge has no path to move along. As soon as you complete the loop with a switch closed, a current of a few hundred milliamps can flow through a lamp. The cell is the source, not the whole circuit.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2022, Paper J259/02, candidates described current as still flowing across an open switch, missing that an open switch is a gap.
    {
      id: 'pe-bs-mis-gap-still-flows',
      description:
        'Believing that a small current still flows when a switch is open, missing that an open switch is a gap in the loop and the current is 0 A.',
      triggerAnswer: 'gap-still-flows',
      correction:
        'An open switch is a gap in the loop. Charge cannot jump that gap, so the current everywhere on the loop is 0 A. Close the switch and the loop is whole again.',
      reExplanation:
        'On a workbench, open the switch on a lamp circuit and an ammeter anywhere on the loop reads 0 A. The lamp stays off. Press the lever flat and the loop is whole. The ammeter then jumps to, say, 0.30 A and the lamp glows. The gap, not the cell, decides whether any current flows.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2019, Paper 1PH0/1F, candidates described current as being "used up" by a lamp, with less current in the wire on the far side, missing that current is the same at every point of a single loop.
    {
      id: 'pe-bs-mis-current-used-up',
      description:
        'Saying that a lamp "uses up" current, so the wire on the far side carries less current than the wire on the cell side, missing that current is conserved round a single loop.',
      triggerAnswer: 'current-used-up',
      correction:
        'Current is the same at every point in a single series loop. The lamp takes energy from the charge moving through it, but it does not use up the charge itself.',
      reExplanation:
        'Imagine two ammeters on the same series loop, one before the lamp and one after. Both read the same value, for example 0.20 A. The lamp glows because energy from the cell is being transferred at the filament, but the rate at which charge passes is the same at every point in the loop. Charge is not consumed.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, Paper 1F, candidates connected ammeters in parallel with components, misapplying the voltmeter rule and missing that ammeters must sit in series.
    {
      id: 'pe-bs-mis-ammeter-in-parallel',
      description:
        'Putting an ammeter on its own parallel branch beside a component, like a voltmeter, missing that an ammeter must sit in series so the same charge passes through both.',
      triggerAnswer: 'ammeter-in-parallel',
      correction:
        'An ammeter sits in series with the component it measures. Break the wire next to the lamp and drop the ammeter into that gap, so every charge through the lamp also passes through the ammeter.',
      reExplanation:
        'A useful check: the letter A goes in line with the component, the letter V goes across it. On the bench, you can spot an ammeter wired wrongly when you have to add extra wires to get round it on the same side as the lamp. The ammeter should be ON the lamp wire, not next to it.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2018, Paper 1PH0/1F, candidates wired voltmeters in series like ammeters, missing that a voltmeter sits in parallel across the component.
    {
      id: 'pe-bs-mis-voltmeter-in-series',
      description:
        'Wiring a voltmeter in series on the main loop like an ammeter, missing that a voltmeter sits in parallel on its own branch across the component.',
      triggerAnswer: 'voltmeter-in-series',
      correction:
        'A voltmeter sits in parallel, on its own short branch with one wire on each side of the component. It reads the potential difference across that component in volts.',
      reExplanation:
        'On the bench, the voltmeter has two wires that touch the lamp on opposite sides, not in line with it. If you put it in series on the main loop, almost no current flows and your readings go wrong. The pair "A in line, V across" is worth memorising.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2021, Paper J259/02, candidates drew "broken" loops with no return path to the cell and still expected the lamp to light, missing the need for a complete return wire to the second plate.
    {
      id: 'pe-bs-mis-no-return-path',
      description:
        'Drawing a chain of cell, switch and lamp but forgetting the return wire to the second plate of the cell, missing that the loop must close back to the cell.',
      triggerAnswer: 'no-return-path',
      correction:
        'Every working circuit needs a wire that brings charge back to the second plate of the cell. Without a return wire, you have a chain, not a loop, and no current flows.',
      reExplanation:
        'On the bench, lay out cell, wire, switch, wire, lamp. The lamp will not light yet. Add one more wire from the far side of the lamp back to the second plate of the cell, and the loop is complete. The two plates of the cell are both ends of the same loop, not two separate things.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const electricityBuildingSeriesZoneNodes = [electricityBuildingSeries]
