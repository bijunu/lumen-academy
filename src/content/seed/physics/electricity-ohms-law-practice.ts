import type { SkillNode } from '@/types/content'

const FORMULA_TRIANGLE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">The V = I R triangle: cover what you want, read what is left</text>

    <!-- Outer triangle -->
    <polygon points="400,80 240,320 560,320" />
    <!-- Horizontal divider -->
    <line x1="280" y1="200" x2="520" y2="200" />
    <!-- Vertical divider in the lower half -->
    <line x1="400" y1="200" x2="400" y2="320" />

    <!-- V in the top half -->
    <text x="400" y="170" text-anchor="middle" font-size="46" font-weight="700" stroke="none" fill="currentColor">V</text>
    <!-- I in the bottom-left -->
    <text x="340" y="280" text-anchor="middle" font-size="36" font-weight="700" stroke="none" fill="currentColor">I</text>
    <!-- R in the bottom-right -->
    <text x="460" y="280" text-anchor="middle" font-size="36" font-weight="700" stroke="none" fill="currentColor">R</text>

    <!-- Side panel: cover V -->
    <text x="120" y="120" font-size="14" font-weight="700" stroke="none" fill="currentColor">Cover V:</text>
    <text x="120" y="145" font-size="14" stroke="none" fill="currentColor">read I x R</text>
    <text x="120" y="165" font-size="14" stroke="none" fill="currentColor">so V = I R</text>

    <text x="120" y="210" font-size="14" font-weight="700" stroke="none" fill="currentColor">Cover I:</text>
    <text x="120" y="235" font-size="14" stroke="none" fill="currentColor">read V over R</text>
    <text x="120" y="255" font-size="14" stroke="none" fill="currentColor">so I = V / R</text>

    <text x="120" y="300" font-size="14" font-weight="700" stroke="none" fill="currentColor">Cover R:</text>
    <text x="120" y="325" font-size="14" stroke="none" fill="currentColor">read V over I</text>
    <text x="120" y="345" font-size="14" stroke="none" fill="currentColor">so R = V / I</text>

    <!-- Side panel right: units -->
    <text x="640" y="120" font-size="14" font-weight="700" stroke="none" fill="currentColor">Units:</text>
    <text x="640" y="145" font-size="14" stroke="none" fill="currentColor">V in volts (V)</text>
    <text x="640" y="165" font-size="14" stroke="none" fill="currentColor">I in amperes (A)</text>
    <text x="640" y="185" font-size="14" stroke="none" fill="currentColor">R in ohms (Ohm)</text>
  </g>
`

const VI_GRAPH_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">V against I for an ohmic resistor and a filament lamp</text>

    <!-- Axes -->
    <line x1="120" y1="340" x2="680" y2="340" />
    <line x1="120" y1="340" x2="120" y2="60" />
    <!-- X-axis label -->
    <text x="400" y="380" text-anchor="middle" font-size="14" stroke="none" fill="currentColor">Current I (A)</text>
    <!-- Y-axis label -->
    <text x="60" y="200" text-anchor="middle" font-size="14" transform="rotate(-90 60 200)" stroke="none" fill="currentColor">Potential difference V (V)</text>

    <!-- Tick marks and labels on x -->
    <line x1="240" y1="335" x2="240" y2="345" />
    <text x="240" y="360" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">0.1</text>
    <line x1="360" y1="335" x2="360" y2="345" />
    <text x="360" y="360" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">0.2</text>
    <line x1="480" y1="335" x2="480" y2="345" />
    <text x="480" y="360" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">0.3</text>
    <line x1="600" y1="335" x2="600" y2="345" />
    <text x="600" y="360" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">0.4</text>

    <!-- Tick marks and labels on y -->
    <line x1="115" y1="270" x2="125" y2="270" />
    <text x="100" y="275" text-anchor="end" font-size="12" stroke="none" fill="currentColor">2</text>
    <line x1="115" y1="200" x2="125" y2="200" />
    <text x="100" y="205" text-anchor="end" font-size="12" stroke="none" fill="currentColor">4</text>
    <line x1="115" y1="130" x2="125" y2="130" />
    <text x="100" y="135" text-anchor="end" font-size="12" stroke="none" fill="currentColor">6</text>
    <line x1="115" y1="60" x2="125" y2="60" />
    <text x="100" y="65" text-anchor="end" font-size="12" stroke="none" fill="currentColor">8</text>

    <!-- Ohmic resistor line: straight through origin, R = 20 Ohm so V/I = 20 -->
    <!-- At I = 0, V = 0 (120, 340). At I = 0.4, V = 8 (600, 60). -->
    <line x1="120" y1="340" x2="600" y2="60" stroke-width="4" />
    <text x="610" y="70" font-size="13" font-weight="700" stroke="none" fill="currentColor">Resistor (ohmic): R = 20 Ohm</text>

    <!-- Filament lamp curve: passes near origin, bends over (V rises slower as I rises) -->
    <!-- Sample points (approx): (0,0) -> (240,295) -> (360,225) -> (480,165) -> (600,130) -->
    <path d="M 120 340 Q 200 330, 240 295 T 360 225 T 480 165 T 600 130" stroke-dasharray="6,6" stroke-width="4" />
    <text x="500" y="290" font-size="13" font-weight="700" stroke="none" fill="currentColor">Filament lamp</text>
    <text x="500" y="310" font-size="12" stroke="none" fill="currentColor">(non-ohmic, curves)</text>

    <!-- Origin label -->
    <text x="115" y="358" text-anchor="end" font-size="12" stroke="none" fill="currentColor">0</text>

    <!-- Note -->
    <text x="400" y="55" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">A straight line through the origin means V and I are in direct proportion: R is constant.</text>
  </g>
`

const UNITS_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Sub-units of resistance: 1 kilo-ohm = 1000 ohms</text>

    <!-- Left bar: 1 Ohm -->
    <text x="180" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">1 ohm</text>
    <rect x="160" y="100" width="40" height="40" fill="currentColor" />
    <text x="180" y="170" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Small unit.</text>
    <text x="180" y="190" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">A short copper wire.</text>

    <!-- Middle bar: 1 kilo-ohm -->
    <text x="400" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">1 kilo-ohm</text>
    <text x="400" y="98" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">(1 k-ohm)</text>
    <rect x="320" y="105" width="160" height="40" fill="currentColor" fill-opacity="0.5" stroke="currentColor" />
    <text x="400" y="170" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Bigger unit.</text>
    <text x="400" y="190" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">A typical school resistor.</text>

    <!-- Right: conversion -->
    <text x="620" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Conversion</text>
    <text x="620" y="115" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">1 k-ohm = 1000 ohms</text>
    <text x="620" y="145" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">2.2 k-ohm = 2200 ohms</text>
    <text x="620" y="170" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">0.5 k-ohm = 500 ohms</text>

    <!-- Bottom note -->
    <text x="400" y="260" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Always work in base units before using V = I R.</text>
    <text x="400" y="290" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Convert kilo-ohms to ohms (multiply by 1000).</text>
    <text x="400" y="310" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Convert milliamperes to amperes (divide by 1000).</text>
    <text x="400" y="340" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">Mix the units and your answer will be out by a factor of 1000.</text>
  </g>
`

export const electricityOhmsLawPractice: SkillNode = {
  id: 'physics-electricity-ohms-law-practice',
  title: "Ohm's Law Practice: V = I x R",
  description:
    'Practise V = I R in all three directions. Substitute to find V when current and resistance are given; rearrange to I = V / R to find current; rearrange to R = V / I to find resistance. Convert kilo-ohms to ohms before substituting. Read a V against I graph: a straight line through the origin is an ohmic conductor and the gradient gives the resistance, while a filament lamp curves because the wire gets hot and its resistance rises. By the end of this node, you can pick the right form of the equation, swap the values in, and write a sensible numerical answer with the correct unit.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-electricity-circuits',
  zoneName: 'Electricity and Circuits',
  tier: 'confident',
  prerequisites: ['physics-electricity-current-voltage'],
  curriculum: {
    ks3Objective:
      'Resistance, measured in ohms, as the ratio of potential difference (p.d.) to current.',
    awardingBodies: {
      aqa: '4.2.1.3 Current, potential difference and resistance; V = I R (GCSE Physics 8463)',
      edexcel:
        'Topic 2.10 V = I x R; rearrangement and substitution; ohmic conductors (GCSE Physics 1PH0)',
      ocr: 'P4.2 Ohm\'s law; V = I R calculations (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'pe-ol-scene-triangle',
      title: 'The V = I R Formula Triangle',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see what you read when you cover one letter of the triangle.',
      data: {
        viewBox: '0 0 800 400',
        svg: FORMULA_TRIANGLE_SVG,
        hotspots: [
          {
            id: 'pe-ol-tri-v',
            x: 50,
            y: 35,
            label: 'Cover V: V = I x R',
            description:
              'When you cover V, you see I and R sitting side by side. They multiply, so V = I x R. Use this form when you know the current and the resistance and want the potential difference.',
          },
          {
            id: 'pe-ol-tri-i',
            x: 43,
            y: 65,
            label: 'Cover I: I = V / R',
            description:
              'When you cover I, you see V on top and R underneath. So I = V / R. Use this form when you know the potential difference and the resistance and want the current.',
          },
          {
            id: 'pe-ol-tri-r',
            x: 58,
            y: 65,
            label: 'Cover R: R = V / I',
            description:
              'When you cover R, you see V on top and I underneath. So R = V / I. Use this form when you know the potential difference and the current and want the resistance.',
          },
          {
            id: 'pe-ol-tri-units',
            x: 82,
            y: 35,
            label: 'Units: volts, amperes, ohms',
            description:
              'V is in volts (V), I is in amperes (A), and R is in ohms. Working in these base units keeps the calculation tidy. If a value is in kilo-ohms or milliamperes, convert it first.',
          },
        ],
      },
    },
    {
      id: 'pe-ol-scene-graph',
      title: 'V against I: Ohmic and Non-ohmic',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the graph to compare an ohmic resistor with a filament lamp.',
      data: {
        viewBox: '0 0 800 400',
        svg: VI_GRAPH_SVG,
        hotspots: [
          {
            id: 'pe-ol-graph-line',
            x: 50,
            y: 35,
            label: 'Straight line through origin: ohmic',
            description:
              'The solid line goes straight through (0, 0) and rises at a steady rate. V and I are in direct proportion. The component is ohmic and its resistance is constant.',
          },
          {
            id: 'pe-ol-graph-slope',
            x: 35,
            y: 60,
            label: 'Gradient gives resistance',
            description:
              'Pick two points on the straight line, for example (0.2 A, 4 V). R = V / I = 4 / 0.2 = 20 ohms. The steeper the line, the higher the resistance.',
          },
          {
            id: 'pe-ol-graph-lamp',
            x: 70,
            y: 70,
            label: 'Filament lamp: curve, non-ohmic',
            description:
              'The dashed line bends as I rises. The wire heats up, so its resistance grows. The same current does not always need the same voltage; the component is not ohmic.',
          },
          {
            id: 'pe-ol-graph-rule',
            x: 50,
            y: 88,
            label: 'Ohmic test: straight line through (0, 0)',
            description:
              'A component obeys Ohm\'s law (the resistor case) only if its V against I graph is a straight line through the origin at constant temperature. Anything that curves is non-ohmic.',
          },
        ],
      },
    },
    {
      id: 'pe-ol-scene-units',
      title: 'Kilo-ohms, Ohms, and Milliamperes',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how to switch between kilo-ohms and ohms before you substitute.',
      data: {
        viewBox: '0 0 800 400',
        svg: UNITS_SVG,
        hotspots: [
          {
            id: 'pe-ol-units-ohm',
            x: 22,
            y: 30,
            label: '1 ohm: the base unit',
            description:
              'One ohm is the resistance that lets one ampere flow when one volt is applied. It is a small unit, used for short pieces of wire and ammeter leads.',
          },
          {
            id: 'pe-ol-units-kilo',
            x: 50,
            y: 30,
            label: '1 kilo-ohm = 1000 ohms',
            description:
              'A typical school resistor is in the kilo-ohm range. 1 k-ohm = 1000 ohms, 2.2 k-ohm = 2200 ohms, 0.5 k-ohm = 500 ohms. Multiply by 1000 to convert.',
          },
          {
            id: 'pe-ol-units-rule',
            x: 50,
            y: 75,
            label: 'Always work in base units',
            description:
              'Convert every value to volts, amperes, and ohms before using V = I R. Mixing kilo-ohms with amperes will leave your answer wrong by a factor of 1000.',
          },
          {
            id: 'pe-ol-units-ma',
            x: 78,
            y: 30,
            label: 'milliamperes: divide by 1000',
            description:
              'A milliampere is one thousandth of an ampere. 250 mA = 0.250 A; 30 mA = 0.030 A. Divide by 1000 to put a current in amperes.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'pe-ol-worked-1',
      title: 'Find V: a resistor with 0.30 A and 20 ohms',
      steps: [
        {
          explanation:
            'Set out the situation. A 20 ohm resistor in a school circuit has a current of 0.30 A passing through it. We want the potential difference across the resistor.',
        },
        {
          explanation: 'Write what you know.',
          maths: 'I = 0.30 A, R = 20 ohm, V = ?',
        },
        {
          explanation:
            'Pick the right form. We want V, so use V = I R from the formula triangle.',
          maths: 'V = I x R',
        },
        {
          explanation: 'Substitute the numbers.',
          maths: 'V = 0.30 x 20',
        },
        {
          explanation: 'Evaluate the arithmetic.',
          maths: 'V = 6.0 V',
        },
        {
          explanation:
            'State the answer with the unit. The potential difference across the resistor is 6.0 V. A quick sanity check: 0.30 amperes through 20 ohms should be a small but sensible voltage, and 6 V matches a typical battery pack.',
        },
      ],
    },
    {
      id: 'pe-ol-worked-2',
      title: 'Find I: a 9.0 V battery driving a 1.5 k-ohm resistor',
      steps: [
        {
          explanation:
            'Set out the situation. A 9.0 V battery is connected to a 1.5 k-ohm resistor. We want the current that flows in the circuit.',
        },
        {
          explanation:
            'Convert to base units first. The resistance is in kilo-ohms, so multiply by 1000 to get ohms. Mixing units would give an answer 1000 times too big.',
          maths: 'R = 1.5 k-ohm = 1500 ohm',
        },
        {
          explanation: 'Write what you know.',
          maths: 'V = 9.0 V, R = 1500 ohm, I = ?',
        },
        {
          explanation:
            'Pick the right form. We want I, so cover I on the triangle and read V over R.',
          maths: 'I = V / R',
        },
        {
          explanation: 'Substitute the numbers.',
          maths: 'I = 9.0 / 1500',
        },
        {
          explanation: 'Evaluate the arithmetic.',
          maths: 'I = 0.006 A',
        },
        {
          explanation:
            'State the answer with the unit. The current is 0.006 A, which is the same as 6 mA. Sanity check: a small voltage across a big resistance should give a tiny current, so a few milliamperes is sensible.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pe-ol-q1',
      type: 'multiple-choice',
      stem: 'Which form of the equation gives the potential difference across a resistor when you know the current and the resistance?',
      tier: 'core',
      options: [
        'V = I + R',
        'V = I x R',
        'V = I / R',
        'V = R / I',
      ],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Cover V on the formula triangle. The two letters left side by side multiply.',
    },
    {
      id: 'pe-ol-q2',
      type: 'numeric-entry',
      stem: 'A resistor in a school lab has 0.5 A passing through it. Its resistance is 8 ohms. What is the potential difference across the resistor, in V?',
      tier: 'core',
      correctAnswer: 4,
      unit: 'V',
      xpValue: 10,
      hint: 'V = I x R = 0.5 x 8.',
    },
    {
      id: 'pe-ol-q3',
      type: 'multiple-choice',
      stem: 'Which set of units matches V, I, and R in the equation V = I R?',
      tier: 'core',
      options: [
        'V in amperes, I in ohms, R in volts',
        'V in ohms, I in volts, R in amperes',
        'V in volts, I in amperes, R in ohms',
        'V in coulombs, I in amperes, R in joules',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pe-ol-mis-mixed-units',
      hint: 'Potential difference is in volts, current is in amperes, resistance is in ohms.',
    },
    {
      id: 'pe-ol-q4',
      type: 'multiple-choice',
      stem: 'A bulb in a Manchester desk lamp has a resistance of 12 ohms. The current through it is 0.25 A. What is the potential difference across the bulb?',
      tier: 'core',
      options: [
        '0.02 V (12 divided by 0.25 wrong way)',
        '12.25 V (added instead of multiplied)',
        '48 V (divided wrong way)',
        '3 V (0.25 x 12)',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'pe-ol-mis-wrong-formula',
      hint: 'V = I x R. Multiply the current by the resistance.',
    },
    {
      id: 'pe-ol-q5',
      type: 'multiple-choice',
      stem: 'Which form of the equation should you use to find the current through a resistor when you know the potential difference and the resistance?',
      tier: 'core',
      options: [
        'I = V x R',
        'I = R / V',
        'I = V - R',
        'I = V / R',
      ],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Cover I on the triangle. Read V on top and R underneath.',
    },
    {
      id: 'pe-ol-q6',
      type: 'numeric-entry',
      stem: 'A 1.5 V cell is connected across a 5 ohm resistor. What is the current through the resistor, in A?',
      tier: 'core',
      correctAnswer: 0.3,
      unit: 'A',
      xpValue: 10,
      hint: 'I = V / R = 1.5 / 5.',
    },
    {
      id: 'pe-ol-q7',
      type: 'multiple-choice',
      stem: 'Which shape of V against I graph means a resistor is ohmic at constant temperature?',
      tier: 'core',
      options: [
        'A straight line through the origin.',
        'A curve that bends as the current rises.',
        'A horizontal line at a fixed voltage.',
        'A straight line that does not pass through the origin.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pe-ol-mis-non-ohmic-confusion',
      hint: 'Ohmic means V is in direct proportion to I, so the line is straight and goes through (0, 0).',
    },
    {
      id: 'pe-ol-q8',
      type: 'multiple-choice',
      stem: 'On a V against I graph for an ohmic resistor, what does the gradient (slope) tell you?',
      tier: 'confident',
      options: [
        'The resistance of the component.',
        'The current at zero potential difference.',
        'The total energy in the circuit.',
        'The number of cells in the battery.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'pe-ol-mis-graph-slope',
      hint: 'For a V against I plot, gradient = V / I, which is R.',
    },
    {
      id: 'pe-ol-q9',
      type: 'multiple-choice',
      stem: 'A 6.0 V battery in a Leeds classroom circuit drives a current of 0.20 A through a fixed resistor. What is the resistance of the resistor?',
      tier: 'confident',
      options: [
        '30 ohms (6.0 divided by 0.20)',
        '1.2 ohms (multiplied V by I)',
        '0.033 ohms (divided I by V)',
        '5.8 ohms (subtracted I from V)',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'pe-ol-mis-bad-rearrangement',
      hint: 'R = V / I = 6.0 / 0.20.',
    },
    {
      id: 'pe-ol-q10',
      type: 'numeric-entry',
      stem: 'A 12 V supply is connected across a 2.0 kilo-ohm resistor. Convert the resistance to ohms, then find the current, in A.',
      tier: 'confident',
      correctAnswer: 0.006,
      unit: 'A',
      xpValue: 15,
      misconceptionId: 'pe-ol-mis-mixed-units',
      hint: '2.0 k-ohm = 2000 ohm. Then I = V / R = 12 / 2000.',
    },
    {
      id: 'pe-ol-q11',
      type: 'multiple-choice',
      stem: 'Two ohmic resistors are plotted on the same V against I graph. The line for resistor X is steeper than the line for resistor Y. What does this tell you?',
      tier: 'confident',
      options: [
        'X has a smaller resistance than Y.',
        'X has the same resistance as Y.',
        'X has a larger resistance than Y.',
        'You cannot compare the resistances from a graph.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pe-ol-mis-graph-slope',
      hint: 'Gradient of V against I equals R. A steeper line means a higher R.',
    },
    {
      id: 'pe-ol-q12',
      type: 'numeric-entry',
      stem: 'A heater wire in a Sheffield workshop has a resistance of 15 ohms. A current of 0.4 A is passing through it. What is the potential difference across the wire, in V?',
      tier: 'confident',
      correctAnswer: 6,
      unit: 'V',
      xpValue: 15,
      hint: 'V = I x R = 0.4 x 15.',
    },
    {
      id: 'pe-ol-q13',
      type: 'spot-misconception',
      stem: 'Priya looks at a V against I graph for a filament lamp. The line is a curve, not straight.',
      tier: 'confident',
      statements: [
        {
          text: 'Priya says the graph means V = I R does not apply to the lamp at all, so we cannot work out V from I and R at any single moment.',
          isMisconception: true,
        },
        {
          text: 'Priya says the lamp is non-ohmic: its resistance changes with current. V = I R still gives V at any chosen current, you just have to use the right R for that point.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pe-ol-mis-non-ohmic-confusion',
    },
    {
      id: 'pe-ol-q14',
      type: 'drag-order',
      stem: 'Put the steps in the right order for finding the resistance of a resistor from a V and I reading.',
      tier: 'confident',
      items: [
        'Substitute the values: R = V / I.',
        'State the answer in ohms, with a unit.',
        'Write down V (in volts) and I (in amperes), converting any sub-units.',
        'Pick the right form: cover R on the triangle to get R = V / I.',
      ],
      correctOrder: [2, 3, 0, 1],
      xpValue: 15,
      hint: 'First gather and convert the values, then pick the form, then substitute, then state the answer.',
    },
    {
      id: 'pe-ol-q15',
      type: 'numeric-entry',
      stem: 'A torch in a Norwich school takes 0.20 A from a 3.0 V battery. The torch bulb is the only resistor. What is the resistance of the bulb at this current, in ohms?',
      tier: 'challenge',
      correctAnswer: 15,
      unit: 'ohm',
      xpValue: 20,
      hint: 'R = V / I = 3.0 / 0.20. Treat the bulb as a single resistor at this operating point.',
    },
    {
      id: 'pe-ol-q16',
      type: 'multiple-choice',
      stem: 'A pupil in a Cambridge physics class plots V against I for a filament lamp. As the current rises, the curve bends so that less extra current flows for each extra volt. Which sentence best explains the shape?',
      tier: 'challenge',
      options: [
        'The wire breaks at high currents, so the curve flattens.',
        'The filament heats up as more current flows, which raises its resistance, so the same extra volt brings a smaller extra current.',
        'The voltmeter is reading wrong at high currents.',
        'The battery runs out, so the current must drop.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'pe-ol-mis-non-ohmic-confusion',
      hint: 'A hot filament has a higher resistance than a cold one. Think about why the curve flattens.',
    },
    {
      id: 'pe-ol-q17',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is finding the current through a 4.7 kilo-ohm resistor connected across a 9.4 V battery.',
      tier: 'challenge',
      steps: [
        'Write the data: V = 9.4 V, R = 4.7 k-ohm, I = ?',
        'Convert the resistance to ohms so the units match: R = 4.7 x 1000 = 4700 ohm.',
        'Pick the right form of the equation by covering I on the triangle: I = V / R.',
        null,
        'Evaluate the arithmetic: I = 0.002 A.',
        'State the answer with a unit: the current is 0.002 A, which is also 2 mA. The small current is sensible because the resistance is large compared with the voltage.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Substitute the converted values into I = V / R: I = 9.4 / 4700.',
      xpValue: 20,
    },
    {
      id: 'pe-ol-q18',
      type: 'numeric-entry',
      stem: 'A pupil reads two points off a V against I graph for an ohmic resistor: (0.10 A, 2.5 V) and (0.30 A, 7.5 V). What is the resistance of the resistor, in ohms?',
      tier: 'challenge',
      correctAnswer: 25,
      unit: 'ohm',
      xpValue: 20,
      misconceptionId: 'pe-ol-mis-graph-slope',
      hint: 'For an ohmic resistor, R = V / I at any chosen point. Use either point, or use the change: (7.5 - 2.5) / (0.30 - 0.10).',
    },
    {
      id: 'pe-ol-q19',
      type: 'spot-misconception',
      stem: 'Marcus is told that a circuit has 8 V across a 16 ohm resistor. He works out I = 8 / 16 = 0.5 A.',
      tier: 'challenge',
      statements: [
        {
          text: 'Marcus says: "If I now double the voltage to 16 V across the same resistor, the current must also double to 1.0 A." This sentence is wrong; doubling V does not double I.',
          isMisconception: true,
        },
        {
          text: 'Marcus says: "If I now double the voltage to 16 V across the same 16 ohm resistor, the current must also double to 1.0 A, because V and I are in direct proportion for an ohmic resistor." This sentence is right.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'pe-ol-mis-inverse-thinking',
    },
    {
      id: 'pe-ol-q20',
      type: 'numeric-entry',
      stem: 'A doorbell circuit in a Cardiff house has a single resistor. A pupil measures 4.5 V across the resistor and 0.15 A through it. What is the resistance, in ohms?',
      tier: 'challenge',
      correctAnswer: 30,
      unit: 'ohm',
      xpValue: 20,
      hint: 'R = V / I = 4.5 / 0.15.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2019, Paper 1F Q4, candidates wrote V = I + R or V = I - R, confusing the equation form with addition rather than multiplication.
    {
      id: 'pe-ol-mis-wrong-formula',
      description:
        'Writing V = I + R or V = I - R instead of V = I x R, mixing up the operation in the Ohm\'s law equation.',
      triggerAnswer: 'wrong-formula-operation',
      correction:
        'V, I, and R are linked by multiplication, not addition. V = I x R, so doubling either I or R doubles V.',
      reExplanation:
        'A 2 ohm resistor with 3 A flowing gives V = 3 x 2 = 6 V. If you added the numbers you would get 5 V, which is the wrong answer with the wrong units (you cannot add amperes to ohms). The formula triangle helps: cover V and you read I R side by side, which always means multiply.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2022, Paper 1PH0/1F Q3, candidates used I = V x R rather than I = V / R when rearranging.
    {
      id: 'pe-ol-mis-bad-rearrangement',
      description:
        'Rearranging V = I R by writing I = V x R rather than I = V / R, missing that I sits below the line in the triangle.',
      triggerAnswer: 'bad-rearrangement',
      correction:
        'To find I from V = I R, divide both sides by R, which gives I = V / R. The triangle shows V on top and R underneath when you cover I.',
      reExplanation:
        'A 6 V battery across a 2 ohm resistor should give a sensible current. Using I = V x R gives 6 x 2 = 12 A, huge for a small battery. Using I = V / R gives 6 / 2 = 3 A, far more sensible. The triangle is a quick visual check: V on top, I and R share the bottom row, so I = V / R and R = V / I.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2021, Paper J259/02 Q2, candidates mixed kilo-ohms with amperes, leaving answers a factor of 1000 out.
    {
      id: 'pe-ol-mis-mixed-units',
      description:
        'Substituting kilo-ohms or milliamperes directly into V = I R without converting to ohms and amperes first.',
      triggerAnswer: 'mixed-units',
      correction:
        'Convert every value to base units (volts, amperes, ohms) before substituting. Mixing kilo-ohms with amperes makes the answer 1000 times too big.',
      reExplanation:
        'A 12 V supply across a 2 kilo-ohm resistor: if you leave R as 2 you get I = 12 / 2 = 6 A, which is far too large. Convert R to 2000 ohms first and you get I = 12 / 2000 = 0.006 A, a sensible 6 mA. Always rewrite the data in base units before you substitute, and label every value with its unit.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, Paper 1F, candidates read the gradient of a V against I graph as the current rather than the resistance.
    {
      id: 'pe-ol-mis-graph-slope',
      description:
        'Reading the gradient of a V against I graph as the current or as the voltage rather than as the resistance of an ohmic component.',
      triggerAnswer: 'graph-slope-confusion',
      correction:
        'On a V against I graph, the gradient equals V / I, which is the resistance R. A steeper line means a larger resistance.',
      reExplanation:
        'Pick two points on a straight line through the origin, say (0.2 A, 4 V). The gradient is rise over run = 4 / 0.2 = 20 ohms, which is R. The same line at a different point, say (0.3 A, 6 V), gives 6 / 0.3 = 20 ohms again, because R is constant for an ohmic resistor. The gradient does not give you I or V on their own; it tells you how V scales with I.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2019, candidates claimed V = I R "does not work" for filament lamps and other non-ohmic components.
    {
      id: 'pe-ol-mis-non-ohmic-confusion',
      description:
        'Believing that V = I R cannot be used at all for a filament lamp or other non-ohmic component because its V-I graph is a curve.',
      triggerAnswer: 'non-ohmic-confusion',
      correction:
        'V = I R holds at every single point of the graph; what changes for a filament lamp is R itself, because the wire heats up and its resistance rises.',
      reExplanation:
        'At one point on a filament lamp graph, say (0.2 A, 2 V), R = V / I = 2 / 0.2 = 10 ohms. At a higher point (0.5 A, 7 V), R = 7 / 0.5 = 14 ohms. The lamp is non-ohmic, so R is not the same at every point, but at each point V = I R is still true. Ohm\'s law (R constant) fails; V = I R does not.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2022, J259/02, candidates wrote that doubling the voltage across an ohmic resistor would halve the current rather than double it.
    {
      id: 'pe-ol-mis-inverse-thinking',
      description:
        'Saying that doubling the voltage across an ohmic resistor halves the current, mistaking direct proportion for inverse proportion.',
      triggerAnswer: 'inverse-thinking',
      correction:
        'For an ohmic resistor at constant temperature, V and I are in direct proportion. Doubling V doubles I; halving V halves I.',
      reExplanation:
        'A 16 ohm resistor with 8 V across it carries I = 8 / 16 = 0.5 A. Double the voltage to 16 V and the current rises to I = 16 / 16 = 1.0 A. So doubling V doubles I, not halves it. Inverse proportion would mean V x I is constant, but here V / I is constant (and equals R). Keep the formula in front of you and the direction of change becomes clear.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const electricityOhmsLawPracticeZoneNodes = [electricityOhmsLawPractice]
