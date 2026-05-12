import type { SkillNode } from '@/types/content'

const CELLS_IN_SERIES_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Cells in series: source p.d. adds up</text>

    <!-- One cell -->
    <text x="120" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">One AA cell</text>
    <line x1="60" y1="120" x2="105" y2="120" />
    <line x1="105" y1="100" x2="105" y2="140" />
    <line x1="115" y1="108" x2="115" y2="132" stroke-width="7" />
    <line x1="115" y1="120" x2="180" y2="120" />
    <text x="120" y="170" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">1.5 V across the cell</text>

    <!-- Two cells in series -->
    <text x="400" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Two AA cells in series (a torch)</text>
    <line x1="280" y1="120" x2="320" y2="120" />
    <line x1="320" y1="100" x2="320" y2="140" />
    <line x1="330" y1="108" x2="330" y2="132" stroke-width="7" />
    <line x1="330" y1="120" x2="370" y2="120" />
    <line x1="370" y1="100" x2="370" y2="140" />
    <line x1="380" y1="108" x2="380" y2="132" stroke-width="7" />
    <line x1="380" y1="120" x2="440" y2="120" />
    <text x="400" y="170" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">1.5 V + 1.5 V = 3.0 V total</text>

    <!-- Three cells in series -->
    <text x="660" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Three AA cells in series</text>
    <line x1="520" y1="120" x2="555" y2="120" />
    <line x1="555" y1="100" x2="555" y2="140" />
    <line x1="565" y1="108" x2="565" y2="132" stroke-width="7" />
    <line x1="565" y1="120" x2="605" y2="120" />
    <line x1="605" y1="100" x2="605" y2="140" />
    <line x1="615" y1="108" x2="615" y2="132" stroke-width="7" />
    <line x1="615" y1="120" x2="655" y2="120" />
    <line x1="655" y1="100" x2="655" y2="140" />
    <line x1="665" y1="108" x2="665" y2="132" stroke-width="7" />
    <line x1="665" y1="120" x2="720" y2="120" />
    <text x="660" y="170" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">1.5 V + 1.5 V + 1.5 V = 4.5 V</text>

    <!-- Rule -->
    <text x="400" y="230" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Rule: cells in series, lined up the same way, add their p.d.</text>
    <text x="400" y="260" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">If one cell faces the other way, subtract its p.d. instead.</text>

    <!-- Opposition example -->
    <text x="400" y="310" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Two cells in opposition</text>
    <line x1="280" y1="350" x2="320" y2="350" />
    <line x1="320" y1="330" x2="320" y2="370" />
    <line x1="330" y1="338" x2="330" y2="362" stroke-width="7" />
    <line x1="330" y1="350" x2="370" y2="350" />
    <line x1="370" y1="338" x2="370" y2="362" stroke-width="7" />
    <line x1="380" y1="330" x2="380" y2="370" />
    <line x1="380" y1="350" x2="440" y2="350" />
    <text x="400" y="390" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">1.5 V - 1.5 V = 0 V total: the bulb stays dark.</text>
  </g>
`

const SWITCH_SERIES_PARALLEL_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Switch position decides what it controls</text>

    <!-- Left half: series circuit with one switch -->
    <text x="200" y="70" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Series: one switch turns off everything</text>

    <!-- Left vertical wire with a cell -->
    <line x1="80" y1="100" x2="80" y2="180" />
    <line x1="80" y1="220" x2="80" y2="320" />
    <line x1="58" y1="190" x2="102" y2="190" />
    <line x1="70" y1="208" x2="90" y2="208" stroke-width="7" />
    <!-- Top wire with a switch (open) at x=170..210 -->
    <line x1="80" y1="100" x2="160" y2="100" />
    <circle cx="165" cy="100" r="4" fill="currentColor" />
    <line x1="165" y1="100" x2="205" y2="78" />
    <circle cx="210" cy="100" r="4" fill="currentColor" />
    <line x1="210" y1="100" x2="320" y2="100" />
    <!-- Lamp 1 on top wire after switch -->
    <circle cx="260" cy="100" r="18" />
    <line x1="246" y1="86" x2="274" y2="114" />
    <line x1="246" y1="114" x2="274" y2="86" />
    <!-- Right wire down -->
    <line x1="320" y1="100" x2="320" y2="320" />
    <!-- Lamp 2 on right wire -->
    <circle cx="320" cy="220" r="18" />
    <line x1="306" y1="206" x2="334" y2="234" />
    <line x1="306" y1="234" x2="334" y2="206" />
    <!-- Bottom wire -->
    <line x1="80" y1="320" x2="320" y2="320" />
    <text x="200" y="355" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Open switch breaks the only loop.</text>
    <text x="200" y="373" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Both lamps stay dark.</text>

    <!-- Right half: parallel circuit with a branch switch -->
    <text x="620" y="70" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Parallel: a branch switch turns off one branch</text>

    <line x1="480" y1="100" x2="480" y2="180" />
    <line x1="480" y1="220" x2="480" y2="320" />
    <line x1="458" y1="190" x2="502" y2="190" />
    <line x1="470" y1="208" x2="490" y2="208" stroke-width="7" />
    <!-- Top wire -->
    <line x1="480" y1="100" x2="760" y2="100" />
    <!-- Right wire down -->
    <line x1="760" y1="100" x2="760" y2="320" />
    <!-- Bottom wire -->
    <line x1="480" y1="320" x2="760" y2="320" />
    <!-- Branch A: vertical wire from top at x=600 to bottom, with lamp -->
    <line x1="600" y1="100" x2="600" y2="200" />
    <circle cx="600" cy="220" r="18" />
    <line x1="586" y1="206" x2="614" y2="234" />
    <line x1="586" y1="234" x2="614" y2="206" />
    <line x1="600" y1="240" x2="600" y2="320" />
    <!-- Branch B: vertical wire from top at x=700 with switch open + lamp -->
    <line x1="700" y1="100" x2="700" y2="150" />
    <circle cx="700" cy="155" r="4" fill="currentColor" />
    <line x1="700" y1="155" x2="720" y2="180" />
    <circle cx="700" cy="200" r="4" fill="currentColor" />
    <line x1="700" y1="205" x2="700" y2="220" />
    <circle cx="700" cy="240" r="18" />
    <line x1="686" y1="226" x2="714" y2="254" />
    <line x1="686" y1="254" x2="714" y2="226" />
    <line x1="700" y1="260" x2="700" y2="320" />
    <text x="620" y="355" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Switch only breaks Branch B.</text>
    <text x="620" y="373" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Branch A lamp still glows.</text>
  </g>
`

const PP3_VS_AA_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">A battery is a stack of cells</text>

    <!-- Left: AA holder with 4 cells in series -->
    <text x="200" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">4 AA cells in a torch holder</text>
    <rect x="80" y="110" width="240" height="80" stroke-dasharray="6,4" />
    <line x1="100" y1="150" x2="135" y2="150" />
    <line x1="135" y1="130" x2="135" y2="170" />
    <line x1="145" y1="138" x2="145" y2="162" stroke-width="7" />
    <line x1="145" y1="150" x2="180" y2="150" />
    <line x1="180" y1="130" x2="180" y2="170" />
    <line x1="190" y1="138" x2="190" y2="162" stroke-width="7" />
    <line x1="190" y1="150" x2="225" y2="150" />
    <line x1="225" y1="130" x2="225" y2="170" />
    <line x1="235" y1="138" x2="235" y2="162" stroke-width="7" />
    <line x1="235" y1="150" x2="270" y2="150" />
    <line x1="270" y1="130" x2="270" y2="170" />
    <line x1="280" y1="138" x2="280" y2="162" stroke-width="7" />
    <line x1="280" y1="150" x2="300" y2="150" />
    <text x="200" y="215" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">1.5 V x 4 = 6.0 V across the holder</text>
    <text x="200" y="235" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Drawn as one battery symbol on a diagram.</text>

    <!-- Right: PP3 9 V -->
    <text x="600" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">9 V PP3 battery (smoke alarm)</text>
    <rect x="480" y="110" width="240" height="80" stroke-dasharray="6,4" />
    <!-- Six small cell symbols inside -->
    <g>
      <line x1="495" y1="150" x2="510" y2="150" />
      <line x1="510" y1="135" x2="510" y2="165" />
      <line x1="518" y1="142" x2="518" y2="158" stroke-width="5" />
      <line x1="518" y1="150" x2="535" y2="150" />
      <line x1="535" y1="135" x2="535" y2="165" />
      <line x1="543" y1="142" x2="543" y2="158" stroke-width="5" />
      <line x1="543" y1="150" x2="560" y2="150" />
      <line x1="560" y1="135" x2="560" y2="165" />
      <line x1="568" y1="142" x2="568" y2="158" stroke-width="5" />
      <line x1="568" y1="150" x2="585" y2="150" />
      <line x1="585" y1="135" x2="585" y2="165" />
      <line x1="593" y1="142" x2="593" y2="158" stroke-width="5" />
      <line x1="593" y1="150" x2="610" y2="150" />
      <line x1="610" y1="135" x2="610" y2="165" />
      <line x1="618" y1="142" x2="618" y2="158" stroke-width="5" />
      <line x1="618" y1="150" x2="635" y2="150" />
      <line x1="635" y1="135" x2="635" y2="165" />
      <line x1="643" y1="142" x2="643" y2="158" stroke-width="5" />
      <line x1="643" y1="150" x2="660" y2="150" />
    </g>
    <text x="600" y="215" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Six 1.5 V cells inside one case = 9.0 V</text>
    <text x="600" y="235" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">"Battery" means more than one cell joined together.</text>

    <!-- Rule -->
    <text x="400" y="300" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Total source p.d. = sum of the cell p.d. values, when lined up the same way</text>
    <text x="400" y="330" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Two 1.5 V cells: 3.0 V. Four 1.5 V cells: 6.0 V. Six 1.5 V cells: 9.0 V.</text>
    <text x="400" y="360" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">A torch with two cells pushes a bigger current than a torch with one.</text>
  </g>
`

export const electricitySwitchesCells: SkillNode = {
  id: 'physics-electricity-switches-cells',
  title: 'Switches and Cells in Series',
  description:
    'Cells in series add their potential difference: two 1.5 V cells line up to 3.0 V, three to 4.5 V, and the six cells inside a 9 V PP3 give 9 V. A cell put in the wrong way round subtracts instead of adding. Where you place a switch matters too. A switch on the main loop of a series circuit controls every bulb, while a switch on one branch of a parallel circuit only controls that branch. Open the switch and no current can pass through that path; close it and current flows again. Torches, doorbells and house lighting all sit on this rule.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-electricity-circuits',
  zoneName: 'Electricity and Circuits',
  tier: 'confident',
  prerequisites: ['physics-electricity-series-parallel'],
  curriculum: {
    ks3Objective:
      'Series and parallel circuits; the effect of cells and batteries on potential difference; current as flow of charge; the differences in current and potential difference between series and parallel circuits.',
    awardingBodies: {
      aqa: '4.2.1.1 Circuit symbols including switches and cells; 4.2.1.4 Cells in series, total e.m.f. (GCSE Physics 8463)',
      edexcel:
        'Topic 2.6 Cells in series, total potential difference; switch position in series and parallel (GCSE Physics 1PH0)',
      ocr: 'P4.2 Cells and batteries in series; switch position in series and parallel circuits (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'pe-sc-cells-series',
      title: 'Adding Up Cells in Series',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read the source p.d. when one, two, or three 1.5 V cells are joined in series.',
      data: {
        viewBox: '0 0 800 400',
        svg: CELLS_IN_SERIES_SVG,
        hotspots: [
          {
            id: 'pe-sc-cs-one',
            x: 15,
            y: 30,
            label: 'One cell: 1.5 V',
            description:
              'A single AA cell drives 1.5 V across its terminals. That is the source potential difference for the rest of the circuit.',
          },
          {
            id: 'pe-sc-cs-two',
            x: 50,
            y: 30,
            label: 'Two cells in series: 3.0 V',
            description:
              'Two AA cells lined up the same way add their p.d. values: 1.5 + 1.5 = 3.0 V. A small torch sees 3.0 V across the bulb.',
          },
          {
            id: 'pe-sc-cs-three',
            x: 82,
            y: 30,
            label: 'Three cells in series: 4.5 V',
            description:
              'Three cells in a row add up to 4.5 V. The bulb glows brighter than with two cells because the source p.d. is larger.',
          },
          {
            id: 'pe-sc-cs-rule',
            x: 50,
            y: 60,
            label: 'Rule: same way round, add',
            description:
              'Cells in series, all lined up the same way, add their potential differences. Total p.d. equals the sum of the individual cell p.d. values.',
          },
          {
            id: 'pe-sc-cs-opp',
            x: 50,
            y: 95,
            label: 'Opposition: 1.5 V minus 1.5 V',
            description:
              'If one cell faces the other way, its p.d. is subtracted instead. Two equal cells in opposition give 0 V and the bulb stays dark.',
          },
        ],
      },
    },
    {
      id: 'pe-sc-switch-position',
      title: 'Where the Switch Sits',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare a switch on the main loop of a series circuit with a switch on one branch of a parallel circuit.',
      data: {
        viewBox: '0 0 800 400',
        svg: SWITCH_SERIES_PARALLEL_SVG,
        hotspots: [
          {
            id: 'pe-sc-sp-series',
            x: 25,
            y: 25,
            label: 'Switch on the main series loop',
            description:
              'In a series circuit there is only one loop. A switch anywhere on that loop, opened, breaks the path for every bulb. Both lamps go dark together.',
          },
          {
            id: 'pe-sc-sp-series-open',
            x: 25,
            y: 90,
            label: 'Open series switch: nothing glows',
            description:
              'Opening the switch leaves a gap in the only loop. No charge can pass, so the current is 0 A in every part of the series circuit.',
          },
          {
            id: 'pe-sc-sp-parallel',
            x: 80,
            y: 25,
            label: 'Switch on one parallel branch',
            description:
              'In a parallel circuit each lamp has its own branch. A switch on one branch only breaks that branch, so the other branch still carries current.',
          },
          {
            id: 'pe-sc-sp-parallel-open',
            x: 80,
            y: 90,
            label: 'Open branch switch: one lamp still glows',
            description:
              'The lamp on the broken branch goes dark. The lamp on the other branch carries on as before, because its branch is still a complete loop with the cell.',
          },
        ],
      },
    },
    {
      id: 'pe-sc-battery-vs-cell',
      title: 'A Battery Is a Stack of Cells',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare a torch with four 1.5 V cells and a 9 V PP3 battery used in a smoke alarm.',
      data: {
        viewBox: '0 0 800 400',
        svg: PP3_VS_AA_SVG,
        hotspots: [
          {
            id: 'pe-sc-bvc-four-aa',
            x: 25,
            y: 30,
            label: 'Four AA cells in series',
            description:
              'A larger torch holds four 1.5 V cells joined in series. The total source p.d. is 1.5 V x 4 = 6.0 V, drawn as one battery symbol on a diagram.',
          },
          {
            id: 'pe-sc-bvc-pp3',
            x: 75,
            y: 30,
            label: '9 V PP3 battery: six cells inside one case',
            description:
              'A PP3 battery hides six 1.5 V cells in series inside one rectangular case. Six lots of 1.5 V give 9.0 V, used in smoke alarms and small toys.',
          },
          {
            id: 'pe-sc-bvc-meaning',
            x: 50,
            y: 60,
            label: 'Battery vs cell',
            description:
              'A single cell is one chemical unit. A battery is two or more cells joined together. Most "AA batteries" you buy in shops are really single cells.',
          },
          {
            id: 'pe-sc-bvc-bigger-pd',
            x: 50,
            y: 90,
            label: 'More cells, bigger source p.d.',
            description:
              'More cells in series give a larger source p.d., which pushes a larger current through the same bulb. That is why a two-cell torch shines brighter than a one-cell torch.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'pe-sc-worked-1',
      title: 'Three 1.5 V cells in a torch: what is the source p.d.?',
      steps: [
        {
          explanation:
            'Set out the situation. A torch holds three AA cells joined in series, all lined up the same way. Each cell is rated at 1.5 V. We want the total source p.d. across the bulb.',
        },
        {
          explanation:
            'State the rule. Cells in series, lined up the same way, add their potential differences.',
          maths: 'V_total = V_1 + V_2 + V_3',
        },
        {
          explanation: 'Substitute the cell p.d. values.',
          maths: 'V_total = 1.5 V + 1.5 V + 1.5 V',
        },
        {
          explanation: 'Add the values.',
          maths: 'V_total = 4.5 V',
        },
        {
          explanation:
            'State the answer and check. The torch bulb sees 4.5 V across it. A four-cell torch would give 6.0 V, and the bulb would glow brighter still.',
        },
      ],
    },
    {
      id: 'pe-sc-worked-2',
      title: 'A cell put in the wrong way round: total p.d. of two opposing cells',
      steps: [
        {
          explanation:
            'Set out the situation. A pupil joins two 1.5 V cells in series, but one cell is flipped so the cells push in opposite directions. We want the total source p.d. across the bulb.',
        },
        {
          explanation:
            'State the rule. Cells in series add when lined up the same way. A cell facing the other way subtracts instead.',
          maths: 'V_total = V_1 - V_2 (when cell 2 is reversed)',
        },
        {
          explanation: 'Substitute the cell p.d. values.',
          maths: 'V_total = 1.5 V - 1.5 V',
        },
        {
          explanation: 'Evaluate.',
          maths: 'V_total = 0 V',
        },
        {
          explanation:
            'State the answer. The total source p.d. is 0 V, so no current passes and the bulb stays dark. To fix it, flip one cell so both push the same way; the total becomes 3.0 V.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pe-sc-q1',
      type: 'multiple-choice',
      stem: 'A torch holds two AA cells joined in series, both lined up the same way. Each cell is rated at 1.5 V. What is the source potential difference across the bulb?',
      tier: 'core',
      options: ['0.75 V', '1.5 V', '3.0 V', '4.5 V'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Cells in series, same way round, add: 1.5 + 1.5.',
    },
    {
      id: 'pe-sc-q2',
      type: 'multiple-choice',
      stem: 'What is the difference between a cell and a battery on a circuit diagram?',
      tier: 'core',
      options: [
        'There is no difference; both terms mean the same thing.',
        'A cell is one chemical unit. A battery is two or more cells joined together.',
        'A cell is bigger than a battery.',
        'A battery only works with bulbs; a cell only works with motors.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pe-sc-mis-battery-equals-cell',
      hint: 'Think about what is inside a 9 V PP3 battery: six 1.5 V cells.',
    },
    {
      id: 'pe-sc-q3',
      type: 'numeric-entry',
      stem: 'Three 1.5 V cells are joined in series, all lined up the same way, to power a torch. What is the total source p.d. across the bulb, in V?',
      tier: 'core',
      correctAnswer: 4.5,
      unit: 'V',
      xpValue: 10,
      hint: 'V_total = 1.5 + 1.5 + 1.5.',
    },
    {
      id: 'pe-sc-q4',
      type: 'multiple-choice',
      stem: 'A simple series circuit has a cell, a switch and a bulb on one loop. The switch is open. What is the current in the bulb?',
      tier: 'core',
      options: [
        '0 A, because the open switch breaks the only loop.',
        'The same as when the switch is closed.',
        'Half of what it is when the switch is closed.',
        'Larger than usual, because the open switch boosts the current.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pe-sc-mis-open-still-flows',
      hint: 'An open switch leaves a gap. No charge can cross the gap.',
    },
    {
      id: 'pe-sc-q5',
      type: 'numeric-entry',
      stem: 'A PP3 9 V battery is made from six 1.5 V cells joined in series inside one case. What total p.d. do six 1.5 V cells in series give, in V?',
      tier: 'core',
      correctAnswer: 9,
      unit: 'V',
      xpValue: 10,
      misconceptionId: 'pe-sc-mis-pp3-is-one-cell',
      hint: '6 cells x 1.5 V each.',
    },
    {
      id: 'pe-sc-q6',
      type: 'multiple-choice',
      stem: 'In a parallel circuit two bulbs sit on their own branches. A switch is on Branch A only. The switch on Branch A is opened. What happens?',
      tier: 'core',
      options: [
        'Both bulbs go dark.',
        'Only the Branch A bulb goes dark; the Branch B bulb still glows.',
        'Only the Branch B bulb goes dark.',
        'Both bulbs glow brighter than before.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pe-sc-mis-any-switch-controls-all',
      hint: 'A branch switch only breaks the branch it sits on. The other branch is still a complete loop.',
    },
    {
      id: 'pe-sc-q7',
      type: 'numeric-entry',
      stem: 'A torch holds four 1.5 V cells joined in series. What is the total source p.d. across the bulb, in V?',
      tier: 'core',
      correctAnswer: 6,
      unit: 'V',
      xpValue: 10,
      hint: '4 cells x 1.5 V.',
    },
    {
      id: 'pe-sc-q8',
      type: 'multiple-choice',
      stem: 'A series circuit holds two 1.5 V cells lined up the same way, plus a bulb. A pupil flips one cell so it faces the other way. What is the new source p.d. across the bulb?',
      tier: 'confident',
      options: [
        '3.0 V, because the cells still add up.',
        '1.5 V, because one cell is still there.',
        '0 V, because the cells subtract.',
        '4.5 V, because flipping always boosts the p.d.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pe-sc-mis-direction-ignored',
      hint: 'A cell the wrong way round subtracts, not adds. 1.5 - 1.5 = 0.',
    },
    {
      id: 'pe-sc-q9',
      type: 'numeric-entry',
      stem: 'A circuit has a 1.5 V cell joined in series with a 4.5 V cell, both lined up the same way. What is the total source p.d., in V?',
      tier: 'confident',
      correctAnswer: 6,
      unit: 'V',
      xpValue: 15,
      hint: 'Same way round, so add: 1.5 + 4.5.',
    },
    {
      id: 'pe-sc-q10',
      type: 'multiple-choice',
      stem: 'A school doorbell uses a 6.0 V supply made from AA cells joined in series. Each cell is rated at 1.5 V. How many cells are in the supply?',
      tier: 'confident',
      options: ['2', '3', '4', '6'],
      correctIndex: 2,
      xpValue: 15,
      hint: 'How many lots of 1.5 V add to 6.0 V?',
    },
    {
      id: 'pe-sc-q11',
      type: 'numeric-entry',
      stem: 'A 1.5 V cell is joined in series with a 1.5 V cell that faces the other way. What is the total source p.d., in V?',
      tier: 'confident',
      correctAnswer: 0,
      unit: 'V',
      xpValue: 15,
      misconceptionId: 'pe-sc-mis-direction-ignored',
      hint: 'Opposite directions: subtract. 1.5 - 1.5 = 0.',
    },
    {
      id: 'pe-sc-q12',
      type: 'multiple-choice',
      stem: 'A pupil wires two bulbs in series with one switch on the main loop. They want the bulbs to glow brighter without changing the bulbs. What is the most sensible change?',
      tier: 'confident',
      options: [
        'Flip one of the cells so it faces the other way.',
        'Open the switch.',
        'Take out one of the bulbs.',
        'Add more cells in series, all lined up the same way, to raise the source p.d.',
      ],
      correctIndex: 3,
      xpValue: 15,
      hint: 'More cells in series push a larger current through the bulbs.',
    },
    {
      id: 'pe-sc-q13',
      type: 'numeric-entry',
      stem: 'A torch supply gives 4.5 V from AA cells joined in series. Each cell is rated at 1.5 V. How many cells are in the supply?',
      tier: 'confident',
      correctAnswer: 3,
      unit: 'cells',
      xpValue: 15,
      hint: '4.5 / 1.5.',
    },
    {
      id: 'pe-sc-q14',
      type: 'spot-misconception',
      stem: 'Priya says, "Two cells joined in series always give double the p.d. of one cell, no matter which way round they go."',
      tier: 'confident',
      statements: [
        {
          text: 'Priya is right. Joining two cells always doubles the source p.d.',
          isMisconception: true,
        },
        {
          text: 'Priya is not right. Two cells double the p.d. only when they are lined up the same way. If one faces the other way the cells subtract, and two equal cells in opposition give 0 V.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pe-sc-mis-direction-ignored',
    },
    {
      id: 'pe-sc-q15',
      type: 'drag-order',
      stem: 'Put the steps in order to find the source p.d. when several cells are joined in series.',
      tier: 'confident',
      items: [
        'State the total source p.d. across the load and check the units (V).',
        'Add up the cells that face one way and subtract any that face the other way.',
        'List the p.d. of each cell and note which way each one is lined up.',
        'Draw or read the circuit and mark the positive end of every cell.',
      ],
      correctOrder: [3, 2, 1, 0],
      xpValue: 15,
      hint: 'Read the circuit, list the cells, add with signs, then state the total.',
    },
    {
      id: 'pe-sc-q16',
      type: 'multiple-choice',
      stem: 'A pupil writes, "The bigger battery in my torch creates more energy than the smaller one." What is the best correction?',
      tier: 'challenge',
      options: [
        'The wording is fine.',
        'A bigger battery does not create energy. It has a larger chemical store and a higher source p.d., which pushes more current through the bulb.',
        'Batteries create energy from the air around them.',
        'A bigger battery destroys energy faster, which is why it lasts longer.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'pe-sc-mis-cells-create-energy',
      hint: 'Cells do not create energy. They transfer it from a chemical store. A higher p.d. pushes a larger current.',
    },
    {
      id: 'pe-sc-q17',
      type: 'numeric-entry',
      stem: 'A circuit has three cells in series: a 1.5 V cell, a 1.5 V cell, and a 3.0 V cell. The 3.0 V cell faces the other way to the two 1.5 V cells. What is the total source p.d., in V?',
      tier: 'challenge',
      correctAnswer: 0,
      unit: 'V',
      xpValue: 20,
      misconceptionId: 'pe-sc-mis-direction-ignored',
      hint: 'Add the cells facing one way, subtract the one facing the other way: (1.5 + 1.5) - 3.0.',
    },
    {
      id: 'pe-sc-q18',
      type: 'spot-misconception',
      stem: 'Marcus says, "In a parallel circuit, any switch you open will turn off every bulb, just like in a series circuit."',
      tier: 'challenge',
      statements: [
        {
          text: 'Marcus is right. A switch always controls every bulb in the circuit.',
          isMisconception: true,
        },
        {
          text: 'Marcus is not right. In parallel, a switch on one branch only breaks that branch. A switch on the main wire, before the branches split, controls every branch. The position matters.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'pe-sc-mis-any-switch-controls-all',
    },
    {
      id: 'pe-sc-q19',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is finding the source p.d. for a torch with five 1.5 V cells joined in series, all lined up the same way.',
      tier: 'challenge',
      steps: [
        'Read the circuit: five cells in series, all facing the same way, each rated at 1.5 V.',
        'State the rule: cells in series, same way round, add their p.d. values.',
        'Write the equation: V_total = V_1 + V_2 + V_3 + V_4 + V_5.',
        null,
        'Evaluate the sum: V_total = 7.5 V.',
        'State the answer: the torch bulb sees 7.5 V across it.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Substitute the cell p.d. values: V_total = 1.5 V + 1.5 V + 1.5 V + 1.5 V + 1.5 V.',
      xpValue: 20,
    },
    {
      id: 'pe-sc-q20',
      type: 'drag-order',
      stem: 'A pupil in Sevenoaks plans a parallel lighting circuit with two lamps. Lamp 1 should turn on and off on its own; Lamp 2 should always be on whenever a master switch is closed. Put the design steps in order.',
      tier: 'challenge',
      items: [
        'Add a separate switch on the Lamp 1 branch only, so Lamp 1 can be opened or closed without affecting Lamp 2.',
        'Draw the two lamps on separate parallel branches between the cell terminals.',
        'Place a master switch on the main wire before the branches split, so it controls both lamps.',
        'Check that opening the Lamp 1 branch switch only turns Lamp 1 off, while opening the master switch turns both lamps off.',
      ],
      correctOrder: [1, 2, 0, 3],
      xpValue: 20,
      misconceptionId: 'pe-sc-mis-any-switch-controls-all',
      hint: 'Lay out the branches first, then add the master switch on the main wire, then a branch switch for Lamp 1, then verify.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 1F Q3, candidates added cell p.d. values without considering direction, so two cells in opposition were graded as 3.0 V instead of 0 V.
    {
      id: 'pe-sc-mis-direction-ignored',
      description:
        'Adding cell p.d. values without checking which way each cell faces, so opposing cells are still treated as if they add.',
      triggerAnswer: 'cells-always-add',
      correction:
        'Cells in series add only when lined up the same way. A cell facing the other way subtracts. Two equal cells in opposition give 0 V, not 3.0 V.',
      reExplanation:
        'Picture a tug of war. Two cells pulling the same way add their pulls: 1.5 V + 1.5 V = 3.0 V. Two equal cells pulling opposite ways cancel out: 1.5 V - 1.5 V = 0 V, and the bulb stays dark. Mark the positive end of each cell on your diagram before adding.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2019, Paper 1PH0/1F Q5, candidates wrote that opening any switch in a parallel circuit turns off all branches, missing that a branch switch only affects its own branch.
    {
      id: 'pe-sc-mis-any-switch-controls-all',
      description:
        'Believing that any switch in any circuit controls every bulb, missing that a switch on one parallel branch only affects that branch.',
      triggerAnswer: 'every-switch-controls-everything',
      correction:
        'In parallel, a switch on one branch only breaks that branch. The other branches stay complete loops. Only a switch on the main wire, before the branches split, controls every branch.',
      reExplanation:
        'A house has separate switches for the kitchen light and the bedroom light. Turning off the kitchen switch does not turn off the bedroom light, because each is on its own branch. The fuse box at the front of the house is the master; opening that cuts power to every room. Position matters more than the symbol.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2021, Paper J259/02 Q2, candidates claimed current still flowed through an open switch because "the wire is still there".
    {
      id: 'pe-sc-mis-open-still-flows',
      description:
        'Thinking current still flows when a switch is open because the rest of the wire is still in place, missing that the open switch leaves a gap.',
      triggerAnswer: 'open-switch-still-flows',
      correction:
        'An open switch leaves a gap in the loop. Charge cannot cross that gap, so the current is 0 A everywhere on that loop.',
      reExplanation:
        'A circuit is like a closed running track. Charge can only go round if the track is complete. Open a switch and you cut the track, leaving a gap the charge cannot jump. The current drops to 0 A in every part of that loop. Close the switch and the track is whole again, so charge can flow.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, Paper 1F Q4, candidates used "cell" and "battery" as if they meant the same thing and could not explain why a 9 V PP3 is called a battery rather than a cell.
    {
      id: 'pe-sc-mis-battery-equals-cell',
      description:
        'Treating "cell" and "battery" as the same word, missing that a battery is two or more cells joined together.',
      triggerAnswer: 'cell-equals-battery',
      correction:
        'A cell is one chemical unit. A battery is two or more cells joined together. A 9 V PP3 battery hides six 1.5 V cells inside one case.',
      reExplanation:
        'Most "AA batteries" you buy in shops are really single cells. A torch with two AA cells in a holder is using two cells as one battery, because they are joined in series. A PP3 looks like one block but holds six small cells inside. The word battery only fits when you have more than one cell.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2018, Paper 1PH0/1F Q6, candidates described cells as "creating" electrical energy, rather than transferring energy from a chemical store.
    {
      id: 'pe-sc-mis-cells-create-energy',
      description:
        'Saying that a cell or battery creates energy, missing that it transfers energy from its chemical store to the circuit.',
      triggerAnswer: 'cells-create-energy',
      correction:
        'Cells do not create energy. They transfer energy from a chemical store to the components in the circuit. A larger source p.d. pushes a larger current, so more energy is transferred each second.',
      reExplanation:
        'Picture the chemical store of a cell as a tank. When you switch a torch on, energy flows from that tank into the bulb and wires. Each second the tank holds a little less and the rest of the circuit holds a little more. A bigger battery has a fuller tank, not a different rule. When the tank is empty, the cell is flat.',
    },
    // Source: CGP KS3 Physics Study Guide p.94 Common mistake box, pupils write 9 V PP3 batteries as one cell rather than six 1.5 V cells in series, so they cannot explain how the 9 V is reached.
    {
      id: 'pe-sc-mis-pp3-is-one-cell',
      description:
        'Treating a 9 V PP3 battery as one large cell, missing that it is six 1.5 V cells joined in series inside one case.',
      triggerAnswer: 'pp3-is-one-cell',
      correction:
        'A PP3 9 V battery is six 1.5 V cells joined in series, hidden inside one rectangular case. Six lots of 1.5 V add to 9.0 V.',
      reExplanation:
        'Open a worn-out PP3 carefully and you can see the small cells inside, joined end to end. Each one supplies 1.5 V, the same as an AA. Six in series give 6 x 1.5 V = 9.0 V. That is why a PP3 can power a smoke alarm that an AA cannot: the source p.d. is six times as large.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const electricitySwitchesCellsZoneNodes = [electricitySwitchesCells]
