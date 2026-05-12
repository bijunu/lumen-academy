import type { SkillNode } from '@/types/content'

const SERIES_VS_PARALLEL_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">One cell, three lamps: series versus parallel</text>

    <!-- Series box on the left -->
    <text x="180" y="70" text-anchor="middle" font-size="15" font-weight="700" stroke="none" fill="currentColor">Series: 6 V battery, three lamps</text>
    <rect x="60" y="90" width="240" height="220" stroke-dasharray="4,4" />
    <!-- Cell at the bottom of the loop -->
    <line x1="80" y1="290" x2="140" y2="290" />
    <line x1="140" y1="270" x2="140" y2="310" />
    <line x1="150" y1="278" x2="150" y2="302" stroke-width="7" />
    <line x1="150" y1="290" x2="280" y2="290" />
    <text x="160" y="325" font-size="12" stroke="none" fill="currentColor">6 V battery</text>
    <!-- Right wire up -->
    <line x1="280" y1="290" x2="280" y2="120" />
    <!-- Top wire across -->
    <line x1="280" y1="120" x2="80" y2="120" />
    <!-- Three lamps in the top wire -->
    <circle cx="100" cy="120" r="14" />
    <line x1="91" y1="111" x2="109" y2="129" />
    <line x1="91" y1="129" x2="109" y2="111" />
    <text x="100" y="155" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">2 V</text>
    <text x="100" y="170" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">dim</text>
    <circle cx="180" cy="120" r="14" />
    <line x1="171" y1="111" x2="189" y2="129" />
    <line x1="171" y1="129" x2="189" y2="111" />
    <text x="180" y="155" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">2 V</text>
    <text x="180" y="170" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">dim</text>
    <circle cx="260" cy="120" r="14" />
    <line x1="251" y1="111" x2="269" y2="129" />
    <line x1="251" y1="129" x2="269" y2="111" />
    <text x="260" y="155" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">2 V</text>
    <text x="260" y="170" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">dim</text>
    <!-- Left wire down to the cell -->
    <line x1="80" y1="120" x2="80" y2="290" />
    <text x="180" y="220" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">6 V shared between three lamps</text>
    <text x="180" y="238" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">each lamp gets 2 V</text>

    <!-- Parallel box on the right -->
    <text x="600" y="70" text-anchor="middle" font-size="15" font-weight="700" stroke="none" fill="currentColor">Parallel: 6 V battery, three lamps</text>
    <rect x="480" y="90" width="280" height="220" stroke-dasharray="4,4" />
    <!-- Cell -->
    <line x1="500" y1="290" x2="560" y2="290" />
    <line x1="560" y1="270" x2="560" y2="310" />
    <line x1="570" y1="278" x2="570" y2="302" stroke-width="7" />
    <line x1="570" y1="290" x2="740" y2="290" />
    <text x="580" y="325" font-size="12" stroke="none" fill="currentColor">6 V battery</text>
    <!-- Right rising wire -->
    <line x1="740" y1="290" x2="740" y2="120" />
    <!-- Top wire across to the left -->
    <line x1="740" y1="120" x2="500" y2="120" />
    <!-- Left rising wire -->
    <line x1="500" y1="120" x2="500" y2="290" />
    <!-- Three branch lamps hanging from the top wire down to the bottom wire -->
    <line x1="550" y1="120" x2="550" y2="170" />
    <circle cx="550" cy="190" r="14" />
    <line x1="541" y1="181" x2="559" y2="199" />
    <line x1="541" y1="199" x2="559" y2="181" />
    <line x1="550" y1="210" x2="550" y2="290" />
    <text x="550" y="240" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">6 V</text>
    <text x="550" y="255" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">full</text>

    <line x1="620" y1="120" x2="620" y2="170" />
    <circle cx="620" cy="190" r="14" />
    <line x1="611" y1="181" x2="629" y2="199" />
    <line x1="611" y1="199" x2="629" y2="181" />
    <line x1="620" y1="210" x2="620" y2="290" />
    <text x="620" y="240" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">6 V</text>
    <text x="620" y="255" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">full</text>

    <line x1="690" y1="120" x2="690" y2="170" />
    <circle cx="690" cy="190" r="14" />
    <line x1="681" y1="181" x2="699" y2="199" />
    <line x1="681" y1="199" x2="699" y2="181" />
    <line x1="690" y1="210" x2="690" y2="290" />
    <text x="690" y="240" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">6 V</text>
    <text x="690" y="255" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">full</text>
  </g>
`

const ADD_LAMP_SERIES_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Add a lamp in series: every lamp gets dimmer</text>

    <!-- One lamp loop -->
    <text x="160" y="70" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">1 lamp</text>
    <line x1="80" y1="280" x2="140" y2="280" />
    <line x1="140" y1="262" x2="140" y2="298" />
    <line x1="150" y1="270" x2="150" y2="290" stroke-width="7" />
    <line x1="150" y1="280" x2="240" y2="280" />
    <line x1="240" y1="280" x2="240" y2="130" />
    <line x1="240" y1="130" x2="80" y2="130" />
    <circle cx="160" cy="130" r="16" />
    <line x1="149" y1="119" x2="171" y2="141" />
    <line x1="149" y1="141" x2="171" y2="119" />
    <line x1="80" y1="130" x2="80" y2="280" />
    <text x="160" y="180" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">p.d. = 6 V</text>
    <text x="160" y="200" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">bright</text>

    <!-- Two lamp loop -->
    <text x="400" y="70" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">2 lamps</text>
    <line x1="310" y1="280" x2="370" y2="280" />
    <line x1="370" y1="262" x2="370" y2="298" />
    <line x1="380" y1="270" x2="380" y2="290" stroke-width="7" />
    <line x1="380" y1="280" x2="490" y2="280" />
    <line x1="490" y1="280" x2="490" y2="130" />
    <line x1="490" y1="130" x2="310" y2="130" />
    <circle cx="360" cy="130" r="14" />
    <line x1="350" y1="120" x2="370" y2="140" />
    <line x1="350" y1="140" x2="370" y2="120" />
    <circle cx="440" cy="130" r="14" />
    <line x1="430" y1="120" x2="450" y2="140" />
    <line x1="430" y1="140" x2="450" y2="120" />
    <line x1="310" y1="130" x2="310" y2="280" />
    <text x="400" y="180" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">p.d. = 3 V each</text>
    <text x="400" y="200" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">dimmer</text>

    <!-- Three lamp loop -->
    <text x="640" y="70" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">3 lamps</text>
    <line x1="550" y1="280" x2="610" y2="280" />
    <line x1="610" y1="262" x2="610" y2="298" />
    <line x1="620" y1="270" x2="620" y2="290" stroke-width="7" />
    <line x1="620" y1="280" x2="740" y2="280" />
    <line x1="740" y1="280" x2="740" y2="130" />
    <line x1="740" y1="130" x2="550" y2="130" />
    <circle cx="580" cy="130" r="12" />
    <line x1="572" y1="122" x2="588" y2="138" />
    <line x1="572" y1="138" x2="588" y2="122" />
    <circle cx="645" cy="130" r="12" />
    <line x1="637" y1="122" x2="653" y2="138" />
    <line x1="637" y1="138" x2="653" y2="122" />
    <circle cx="710" cy="130" r="12" />
    <line x1="702" y1="122" x2="718" y2="138" />
    <line x1="702" y1="138" x2="718" y2="122" />
    <line x1="550" y1="130" x2="550" y2="280" />
    <text x="640" y="180" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">p.d. = 2 V each</text>
    <text x="640" y="200" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">dimmest</text>

    <text x="400" y="345" text-anchor="middle" font-size="14" font-style="italic" stroke="none" fill="currentColor">More lamps in series: 6 V is shared between more lamps, so each lamp is dimmer.</text>
  </g>
`

const BROKEN_LAMP_CONTRAST_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">One lamp broken: series goes dark, parallel keeps the rest lit</text>

    <!-- Series chain with one broken lamp -->
    <text x="200" y="70" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Series: one breaks, all go dark</text>
    <line x1="80" y1="280" x2="160" y2="280" />
    <line x1="160" y1="262" x2="160" y2="298" />
    <line x1="170" y1="270" x2="170" y2="290" stroke-width="7" />
    <line x1="170" y1="280" x2="320" y2="280" />
    <line x1="320" y1="280" x2="320" y2="130" />
    <line x1="320" y1="130" x2="80" y2="130" />
    <!-- Lamp 1 dark -->
    <circle cx="130" cy="130" r="14" />
    <line x1="120" y1="120" x2="140" y2="140" />
    <line x1="120" y1="140" x2="140" y2="120" />
    <text x="130" y="105" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">dark</text>
    <!-- Lamp 2 broken (shown with a snapped X and a gap) -->
    <circle cx="210" cy="130" r="14" stroke-dasharray="4,3" />
    <line x1="200" y1="120" x2="220" y2="140" stroke-dasharray="3,3" />
    <line x1="200" y1="140" x2="220" y2="120" stroke-dasharray="3,3" />
    <text x="210" y="105" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">broken</text>
    <!-- Lamp 3 dark -->
    <circle cx="290" cy="130" r="14" />
    <line x1="280" y1="120" x2="300" y2="140" />
    <line x1="280" y1="140" x2="300" y2="120" />
    <text x="290" y="105" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">dark</text>
    <line x1="80" y1="130" x2="80" y2="280" />
    <text x="200" y="180" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">No closed loop, so no current anywhere.</text>

    <!-- Parallel with one broken branch -->
    <text x="600" y="70" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Parallel: one breaks, the rest stay lit</text>
    <line x1="430" y1="280" x2="490" y2="280" />
    <line x1="490" y1="262" x2="490" y2="298" />
    <line x1="500" y1="270" x2="500" y2="290" stroke-width="7" />
    <line x1="500" y1="280" x2="760" y2="280" />
    <line x1="760" y1="280" x2="760" y2="130" />
    <line x1="760" y1="130" x2="430" y2="130" />
    <line x1="430" y1="130" x2="430" y2="280" />

    <!-- Branch 1 lit -->
    <line x1="480" y1="130" x2="480" y2="170" />
    <circle cx="480" cy="190" r="14" />
    <line x1="470" y1="180" x2="490" y2="200" />
    <line x1="470" y1="200" x2="490" y2="180" />
    <line x1="480" y1="210" x2="480" y2="280" />
    <text x="480" y="235" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">lit</text>

    <!-- Branch 2 broken -->
    <line x1="600" y1="130" x2="600" y2="170" />
    <circle cx="600" cy="190" r="14" stroke-dasharray="4,3" />
    <line x1="590" y1="180" x2="610" y2="200" stroke-dasharray="3,3" />
    <line x1="590" y1="200" x2="610" y2="180" stroke-dasharray="3,3" />
    <line x1="600" y1="210" x2="600" y2="280" />
    <text x="600" y="235" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">broken</text>

    <!-- Branch 3 lit -->
    <line x1="710" y1="130" x2="710" y2="170" />
    <circle cx="710" cy="190" r="14" />
    <line x1="700" y1="180" x2="720" y2="200" />
    <line x1="700" y1="200" x2="720" y2="180" />
    <line x1="710" y1="210" x2="710" y2="280" />
    <text x="710" y="235" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">lit</text>

    <text x="600" y="335" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">Each branch is its own loop, so the other two keep working.</text>
  </g>
`

export const electricityLampBrightness: SkillNode = {
  id: 'physics-electricity-lamp-brightness',
  title: 'Adding Lamps: Series Versus Parallel Brightness',
  description:
    'Predict what happens to the brightness of each lamp when more lamps are added to a series circuit or to a parallel circuit. Three lamps in series across a 6 V battery share the potential difference, so each lamp gets 2 V and is dim. Three lamps in parallel across the same 6 V battery each sit on their own branch and so each gets the full 6 V and stays bright. The total current from the battery is small in series and large in parallel. When one lamp breaks, the whole chain goes dark in series, but in parallel only the broken branch dies while the others stay lit. This is why modern UK Christmas tree lights are wired in parallel rather than in long series strings.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-electricity-circuits',
  zoneName: 'Electricity and Circuits',
  tier: 'confident',
  prerequisites: [
    'physics-electricity-series-parallel',
    'physics-electricity-current-voltage',
  ],
  curriculum: {
    ks3Objective:
      'Series and parallel circuits; battery and bulb ratings; differences in current and potential difference between series and parallel arrangements of components.',
    awardingBodies: {
      aqa: '4.2.1.4 Series and parallel circuits; effect on current, p.d. and lamp brightness when components are added (GCSE Physics 8463)',
      edexcel:
        'Topic 2.5-2.6 Comparing series and parallel circuits; brightness when more lamps are added (GCSE Physics 1PH0)',
      ocr: 'P4.2 Comparing lamp brightness when lamps are added to each arrangement (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'pe-lb-scene-series-vs-parallel',
      title: 'Three Lamps, Two Layouts, One 6 V Battery',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare three lamps in series and three lamps in parallel across the same 6 V battery.',
      data: {
        viewBox: '0 0 800 400',
        svg: SERIES_VS_PARALLEL_SVG,
        hotspots: [
          {
            id: 'pe-lb-series-share',
            x: 22,
            y: 55,
            label: 'Series: 6 V shared between three lamps',
            description:
              'In series there is one loop, so the 6 V from the battery is shared between every lamp on the loop. With three identical lamps, each lamp gets 2 V and glows dimly.',
          },
          {
            id: 'pe-lb-series-current',
            x: 22,
            y: 80,
            label: 'Series: small current through every lamp',
            description:
              'The same small current passes through every lamp on the series loop. Adding more lamps lowers that current still further, which is another reason the lamps look dim.',
          },
          {
            id: 'pe-lb-parallel-full',
            x: 70,
            y: 55,
            label: 'Parallel: each branch gets the full 6 V',
            description:
              'In parallel each lamp sits on its own branch directly across the 6 V battery. Every branch sees the full 6 V, so each lamp glows at its full normal brightness.',
          },
          {
            id: 'pe-lb-parallel-current',
            x: 70,
            y: 80,
            label: 'Parallel: branch currents add up',
            description:
              'Each branch draws its own current from the battery. The three branch currents add up at the junction, so the battery delivers more total current than in the series case.',
          },
        ],
      },
    },
    {
      id: 'pe-lb-scene-add-lamp-series',
      title: 'Adding a Lamp to a Series Circuit',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see what happens to the brightness as a second and third lamp are added to a 6 V series loop.',
      data: {
        viewBox: '0 0 800 400',
        svg: ADD_LAMP_SERIES_SVG,
        hotspots: [
          {
            id: 'pe-lb-one-lamp',
            x: 20,
            y: 50,
            label: 'One lamp: 6 V, bright',
            description:
              'A single lamp on the 6 V loop takes all of the battery p.d. It glows at its normal full brightness.',
          },
          {
            id: 'pe-lb-two-lamps',
            x: 50,
            y: 50,
            label: 'Two lamps: 3 V each, dimmer',
            description:
              'Two identical lamps on the same loop share the 6 V equally. Each lamp gets 3 V and the current through the loop falls, so both lamps are dimmer than the single lamp was.',
          },
          {
            id: 'pe-lb-three-lamps',
            x: 80,
            y: 50,
            label: 'Three lamps: 2 V each, dimmest',
            description:
              'Three lamps share the 6 V equally. Each lamp now gets 2 V, the loop current is smaller still, and every lamp glows even less brightly.',
          },
          {
            id: 'pe-lb-series-rule',
            x: 50,
            y: 90,
            label: 'Rule for series',
            description:
              'Every extra lamp added in series shares the battery p.d. between more lamps. p.d. per lamp falls, current falls, and every lamp gets dimmer.',
          },
        ],
      },
    },
    {
      id: 'pe-lb-scene-broken-lamp',
      title: 'When One Lamp Breaks',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare what happens to the other lamps when one lamp filament snaps.',
      data: {
        viewBox: '0 0 800 400',
        svg: BROKEN_LAMP_CONTRAST_SVG,
        hotspots: [
          {
            id: 'pe-lb-series-broken-chain',
            x: 25,
            y: 30,
            label: 'Series: the whole chain goes dark',
            description:
              'A broken filament is a gap in the only loop. No current can flow, so every lamp on the chain stops glowing, even the ones that are still working. Older UK Christmas tree light strings did this.',
          },
          {
            id: 'pe-lb-series-no-current',
            x: 25,
            y: 50,
            label: 'No closed loop, no current',
            description:
              'Charge needs a complete loop back to the battery to flow. With one lamp broken, the loop is open and the current is zero everywhere on it.',
          },
          {
            id: 'pe-lb-parallel-lit',
            x: 75,
            y: 30,
            label: 'Parallel: the other lamps stay lit',
            description:
              'Each lamp sits on its own branch back to the battery. When one branch breaks, the other branches still have a complete path, so those lamps stay at full brightness. Modern Christmas tree lights are wired this way.',
          },
          {
            id: 'pe-lb-parallel-branch-dies',
            x: 75,
            y: 90,
            label: 'Only the broken branch goes dark',
            description:
              'The broken branch is now an open gap, so no current flows along it and that one lamp does not glow. The battery still pushes charge through the other branches as before.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'pe-lb-worked-1',
      title: 'Three identical lamps in series across a 6 V battery',
      steps: [
        {
          explanation:
            'Set out the situation. A 6 V battery is wired in a single loop with three identical lamps. The lamps are equally rated, so they share the battery p.d. equally.',
        },
        {
          explanation:
            'State the rule for a series loop. The potential difference of the battery is shared between every component on the loop. For identical lamps, the share is equal.',
          maths: 'V_per_lamp = V_battery / number_of_lamps',
        },
        {
          explanation: 'Substitute the numbers.',
          maths: 'V_per_lamp = 6 V / 3',
        },
        {
          explanation: 'Evaluate.',
          maths: 'V_per_lamp = 2 V',
        },
        {
          explanation:
            'Compare with a single lamp across the same battery. One lamp would have the full 6 V across it. Three lamps in series each have only 2 V across them, so each lamp glows dimly rather than at full brightness.',
        },
        {
          explanation:
            'State the answer. Each of the three lamps has 2 V across it and looks noticeably dimmer than a single lamp on the same battery would.',
        },
      ],
    },
    {
      id: 'pe-lb-worked-2',
      title: 'Three identical lamps in parallel across a 6 V battery',
      steps: [
        {
          explanation:
            'Set out the situation. The same 6 V battery now drives three identical lamps wired in parallel. Each lamp sits on its own branch from one terminal of the battery to the other.',
        },
        {
          explanation:
            'State the rule for a parallel set of branches. Every branch shares the same two end points: the two battery terminals. So every branch has the full battery p.d. across it.',
          maths: 'V_per_branch = V_battery',
        },
        {
          explanation: 'Apply that rule.',
          maths: 'V_per_lamp = 6 V',
        },
        {
          explanation:
            'Compare with the series case. In series each lamp had only 2 V across it; in parallel each lamp has the full 6 V across it. Each parallel lamp therefore glows at full normal brightness.',
        },
        {
          explanation:
            'Think about the total current. Each branch takes its own current from the battery, and those branch currents add at the junctions. So the battery delivers a larger total current in parallel than it would for a single lamp on its own.',
        },
        {
          explanation:
            'State the answer. Every parallel lamp is at 6 V and at full brightness. The battery works harder, delivering more total current, but each lamp shines as if it were on its own loop.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pe-lb-q1',
      type: 'numeric-entry',
      stem: 'Three identical lamps are wired in series across a 6 V battery. What is the potential difference across each lamp, in V?',
      tier: 'core',
      correctAnswer: 2,
      unit: 'V',
      xpValue: 10,
      misconceptionId: 'pe-lb-mis-series-each-gets-full',
      hint: 'In a series loop the battery p.d. is shared between every lamp. Three identical lamps means three equal shares of 6 V.',
    },
    {
      id: 'pe-lb-q2',
      type: 'numeric-entry',
      stem: 'Three identical lamps are wired in parallel across a 6 V battery. What is the potential difference across each lamp, in V?',
      tier: 'core',
      correctAnswer: 6,
      unit: 'V',
      xpValue: 10,
      misconceptionId: 'pe-lb-mis-parallel-share-pd',
      hint: 'Each branch goes straight across the battery, so every branch sees the full battery p.d.',
    },
    {
      id: 'pe-lb-q3',
      type: 'numeric-entry',
      stem: 'A 12 V battery drives four identical lamps wired in series in a single loop. What is the p.d. across each lamp, in V?',
      tier: 'confident',
      correctAnswer: 3,
      unit: 'V',
      xpValue: 15,
      misconceptionId: 'pe-lb-mis-series-each-gets-full',
      hint: 'V_per_lamp = V_battery divided by the number of lamps in the series loop, when the lamps are identical.',
    },
    {
      id: 'pe-lb-q4',
      type: 'numeric-entry',
      stem: 'A torch has two identical lamps wired in parallel across a 3 V battery. What is the p.d. across one of the lamps, in V?',
      tier: 'confident',
      correctAnswer: 3,
      unit: 'V',
      xpValue: 15,
      misconceptionId: 'pe-lb-mis-parallel-share-pd',
      hint: 'Each lamp is on its own branch straight across the battery.',
    },
    {
      id: 'pe-lb-q5',
      type: 'multiple-choice',
      stem: 'A pupil wires a second identical lamp into a series loop with the first lamp and the same battery. What happens to the brightness of the original lamp?',
      tier: 'confident',
      options: [
        'It gets brighter, because there are now two lamps.',
        'It stays exactly the same, because adding lamps does not affect a series circuit.',
        'It gets dimmer, because the battery p.d. is now shared between two lamps and the loop current falls.',
        'It goes out, because the second lamp uses all the energy.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pe-lb-mis-series-each-gets-full',
      hint: 'In series, every extra lamp takes a share of the battery p.d. and the current in the loop falls.',
    },
    {
      id: 'pe-lb-q6',
      type: 'spot-misconception',
      stem: 'A class is given three identical lamps in parallel across a single battery. Priya says, "The three branches share the battery p.d., so each lamp gets only a third of it."',
      tier: 'confident',
      statements: [
        {
          text: 'Priya is right. The battery p.d. is split equally between the parallel branches.',
          isMisconception: true,
        },
        {
          text: 'Priya is not right. Each branch goes from one terminal of the battery to the other, so every branch has the full battery p.d. across it. The branches share the current, not the p.d.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pe-lb-mis-parallel-share-pd',
    },
    {
      id: 'pe-lb-q7',
      type: 'drag-order',
      stem: 'Put these four arrangements in order, from the brightest lamps to the dimmest, when each circuit uses identical lamps on the same 6 V battery.',
      tier: 'challenge',
      items: [
        'Three identical lamps wired in series across the 6 V battery.',
        'One single lamp across the 6 V battery on its own.',
        'Two identical lamps wired in series across the 6 V battery.',
        'Three identical lamps wired in parallel across the 6 V battery.',
      ],
      correctOrder: [1, 3, 2, 0],
      xpValue: 20,
      misconceptionId: 'pe-lb-mis-parallel-dims-as-added',
      hint: 'Parallel branches stay at full battery p.d.; series lamps share the p.d., and more lamps means a smaller share.',
    },
    {
      id: 'pe-lb-q8',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is working out the p.d. across each lamp when three identical lamps are wired in series across a 6 V battery.',
      tier: 'confident',
      steps: [
        'Set out the situation: three identical lamps in a single series loop with a 6 V battery.',
        'State the rule: in a series loop the battery p.d. is shared between every component; for identical lamps the share is equal.',
        'Write the equation for the share per lamp: V_per_lamp = V_battery / number_of_lamps.',
        null,
        'Evaluate the arithmetic: V_per_lamp = 2 V.',
        'State the answer: each lamp has 2 V across it and so glows dimly compared with a single lamp on the same battery.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Substitute the numbers into the equation: V_per_lamp = 6 V / 3.',
      xpValue: 15,
    },
    {
      id: 'pe-lb-q9',
      type: 'multiple-choice',
      stem: 'In a series loop, what happens to the brightness of every lamp when an extra identical lamp is added to the loop?',
      tier: 'core',
      options: [
        'Every lamp gets dimmer, because the battery p.d. is shared between more lamps.',
        'Every lamp gets brighter, because there are more lamps.',
        'The brightness of each lamp stays the same.',
        'Only the new lamp lights; the others go out.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pe-lb-mis-series-each-gets-full',
      hint: 'More lamps in series means a smaller share of the source p.d. per lamp.',
    },
    {
      id: 'pe-lb-q10',
      type: 'multiple-choice',
      stem: 'In a parallel circuit, what happens to the brightness of the existing lamps when an extra identical lamp is added on its own branch?',
      tier: 'core',
      options: [
        'Every lamp gets dimmer.',
        'Every existing lamp stays at the same brightness; only the total current from the battery rises.',
        'Every lamp gets brighter.',
        'Every lamp goes out.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pe-lb-mis-parallel-dims-as-added',
      hint: 'Each parallel branch still sees the full battery p.d., so each lamp keeps the same p.d. across it.',
    },
    {
      id: 'pe-lb-q11',
      type: 'multiple-choice',
      stem: 'One lamp in a string of three lamps in series breaks (the filament snaps). What happens to the other two lamps?',
      tier: 'core',
      options: [
        'They glow more brightly.',
        'They stay the same.',
        'They go dim but stay lit.',
        'They go dark, because the loop is now broken and no current flows anywhere on it.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'pe-lb-mis-broken-parallel-stops-all',
      hint: 'A series loop is a single chain. A gap anywhere stops the current everywhere on it.',
    },
    {
      id: 'pe-lb-q12',
      type: 'multiple-choice',
      stem: 'Modern UK Christmas tree lights are usually wired in parallel rather than in a long series chain. Why?',
      tier: 'core',
      options: [
        'So that when one bulb breaks, the other bulbs stay lit on their own branches.',
        'So that each bulb gets a smaller share of the mains p.d.',
        'So that no current flows when any one bulb fails.',
        'Because parallel wiring uses less wire than series wiring.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pe-lb-mis-broken-parallel-stops-all',
      hint: 'In parallel each lamp is on its own loop. One bulb out does not break the others.',
    },
    {
      id: 'pe-lb-q13',
      type: 'multiple-choice',
      stem: 'In a series loop with one cell and two identical lamps, an ammeter is placed before lamp 1 and reads 0.20 A. A second ammeter is placed after lamp 2. What does the second ammeter read, in A?',
      tier: 'confident',
      options: [
        '0.00 A, because both lamps used the current.',
        '0.10 A, half of the first reading.',
        '0.20 A, the same as before; current is the same everywhere in a series loop.',
        '0.40 A, the sum of both lamps.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pe-lb-mis-current-used-up',
      hint: 'Current is conserved around a single series loop. Lamps transfer energy, not charge.',
    },
    {
      id: 'pe-lb-q14',
      type: 'multiple-choice',
      stem: 'Two identical lamps in parallel across a 6 V battery each draw 0.30 A. A third identical lamp is added on its own parallel branch. What is the new total current from the battery?',
      tier: 'confident',
      options: [
        '0.30 A, the same as a single lamp.',
        '0.60 A, the same as before; the new branch does not add current.',
        '0.90 A, because each branch draws its own 0.30 A and the three branch currents add.',
        '0.10 A, because the current is now shared between three branches.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pe-lb-mis-parallel-current-same',
      hint: 'Branch currents add at the junctions. Three branches at 0.30 A each gives 0.90 A from the battery.',
    },
    {
      id: 'pe-lb-q15',
      type: 'numeric-entry',
      stem: 'Five identical lamps are wired in series across a 230 V mains supply, sharing the p.d. equally. What is the p.d. across each lamp, in V?',
      tier: 'challenge',
      correctAnswer: 46,
      tolerance: 0.5,
      unit: 'V',
      xpValue: 20,
      misconceptionId: 'pe-lb-mis-series-each-gets-full',
      hint: 'Identical lamps split the source p.d. equally: 230 V ÷ 5.',
    },
    {
      id: 'pe-lb-q16',
      type: 'numeric-entry',
      stem: 'Four identical lamps are wired in parallel across a 12 V battery, each on its own branch. What is the p.d. across each lamp, in V?',
      tier: 'challenge',
      correctAnswer: 12,
      tolerance: 0.05,
      unit: 'V',
      xpValue: 20,
      hint: 'Each parallel branch sees the full source p.d., no matter how many other branches there are.',
    },
    {
      id: 'pe-lb-q17',
      type: 'numeric-entry',
      stem: 'A series loop has a single lamp and current 0.40 A. A second identical lamp is added in series with the first. The current now falls because the loop resistance has doubled. The new current is half the old one. What is the new current, in A?',
      tier: 'challenge',
      correctAnswer: 0.2,
      tolerance: 0.005,
      unit: 'A',
      xpValue: 20,
      hint: 'Resistance doubles, p.d. stays the same, so current halves: 0.40 ÷ 2.',
    },
    {
      id: 'pe-lb-q18',
      type: 'spot-misconception',
      stem: 'Liam says, "In a series loop with two identical lamps, the lamp closer to the battery is brighter because the current has not been used up yet."',
      tier: 'challenge',
      statements: [
        {
          text: 'Liam is right. The first lamp gets fresh current and the second lamp gets what is left.',
          isMisconception: true,
        },
        {
          text: 'Liam is not right. Current is the same at every point in a series loop; the two identical lamps each have the same p.d. across them and glow at the same brightness.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'pe-lb-mis-current-used-up',
    },
    {
      id: 'pe-lb-q19',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is finding the total current drawn from the battery when three identical lamps are wired in parallel, each drawing 0.25 A on its own branch.',
      tier: 'challenge',
      steps: [
        'Set out the situation: 6 V battery, three identical lamps wired in parallel, each branch carries 0.25 A.',
        'State the rule for parallel branches: branch currents add up at the junctions to give the total from the battery.',
        'Write the equation: I_total = I_1 + I_2 + I_3.',
        null,
        'Evaluate: I_total = 0.75 A.',
        'State the answer: the battery delivers 0.75 A in total, three times what one lamp would draw on its own.',
      ],
      missingStepIndex: 3,
      correctStep: 'Substitute the branch currents: I_total = 0.25 A + 0.25 A + 0.25 A.',
      xpValue: 20,
      misconceptionId: 'pe-lb-mis-parallel-current-same',
    },
    {
      id: 'pe-lb-q20',
      type: 'drag-order',
      stem: 'Put the steps in the right order for predicting the p.d. across each lamp when n identical lamps are wired in series across a battery of p.d. V_b.',
      tier: 'core',
      items: [
        'State the answer and check by adding the p.d.s: n × V_per_lamp should give V_b.',
        'Identify the number of identical lamps (n) and the battery p.d. (V_b).',
        'State the series rule: identical lamps share the source p.d. equally.',
        'Apply the equation V_per_lamp = V_b / n.',
      ],
      correctOrder: [1, 2, 3, 0],
      xpValue: 10,
      hint: 'Gather the numbers, state the rule, do the arithmetic, then check.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2019, Paper 1F, candidates wrote that each lamp in a series chain still receives the full battery p.d. rather than a share.
    {
      id: 'pe-lb-mis-series-each-gets-full',
      description:
        'Thinking that each lamp in a series circuit gets the full battery p.d., so adding lamps does not change the brightness.',
      triggerAnswer: 'series-each-gets-full',
      correction:
        'In a series loop the battery p.d. is shared between every lamp on the loop. Adding more lamps means a smaller share each, so every lamp gets dimmer.',
      reExplanation:
        'A 6 V battery with one lamp gives that lamp the full 6 V. Add a second identical lamp in series and the 6 V splits equally, so each lamp has 3 V. Add a third lamp and each lamp has 2 V. The numbers tally to 6 V every time. Less p.d. per lamp and less current in the loop together mean each lamp glows less brightly.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2018, Paper 1PH0/1F, candidates claimed branches in a parallel circuit share the battery p.d. equally, missing that each branch is wired directly across the battery.
    {
      id: 'pe-lb-mis-parallel-share-pd',
      description:
        'Believing that branches in a parallel circuit share the battery p.d., so each branch only gets a fraction.',
      triggerAnswer: 'parallel-share-pd',
      correction:
        'Parallel branches do not share the p.d. Each branch is wired across the two battery terminals, so every branch sees the full battery p.d.',
      reExplanation:
        'Picture two lamps in parallel across a 6 V battery. Trace one branch: it leaves the positive terminal, goes through one lamp, and returns to the negative terminal. The lamp sits between the two battery terminals on its own, so 6 V is across it. The second branch does the same, so it also has 6 V. Branches share current at the junctions, not p.d.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2021, J259/02, candidates wrote that adding more lamps in parallel makes every lamp dimmer, mixing up the parallel and series rules.
    {
      id: 'pe-lb-mis-parallel-dims-as-added',
      description:
        'Saying that adding more lamps in parallel makes every lamp dimmer, the same way as in series.',
      triggerAnswer: 'parallel-dims-as-added',
      correction:
        'Adding more lamps in parallel does not change the p.d. across each branch, so each lamp stays at full brightness. The battery just delivers more total current.',
      reExplanation:
        'Each parallel branch is a separate loop from one battery terminal to the other, so adding another branch does not change the p.d. across the others. A 6 V battery with two parallel lamps gives 6 V to each; add a third parallel lamp and every lamp still has 6 V across it. The total current from the battery grows, but the brightness of each lamp stays the same.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 1F, candidates wrote that a broken bulb on one branch of a parallel circuit would stop the whole circuit working, treating parallel as if it were series.
    {
      id: 'pe-lb-mis-broken-parallel-stops-all',
      description:
        'Thinking that one broken lamp in a parallel circuit stops every other lamp working, just like a series chain would.',
      triggerAnswer: 'broken-parallel-stops-all',
      correction:
        'In parallel each branch has its own loop back to the battery. Breaking one branch only kills that branch; the other branches still have a complete path and stay lit.',
      reExplanation:
        'Picture three lamps in parallel across a battery. If branch two breaks, charge still has a complete loop through branch one and through branch three. Those two lamps stay lit at full brightness. Only the broken branch goes dark. That is why modern Christmas tree lights are wired in parallel: one dud bulb does not kill the rest of the string.',
    },
    // Source: CGP KS3 Physics Study Guide Common Mistake box on series chains, p.81 (3rd edition), pupils write that the second lamp in a series chain is dimmer than the first because the current has been "used up" by the time it reaches the second lamp.
    {
      id: 'pe-lb-mis-current-used-up',
      description:
        'Saying that the current is used up as it goes around a series loop, so lamps further from the battery are dimmer than ones nearer to it.',
      triggerAnswer: 'current-used-up',
      correction:
        'Current is not used up around a series loop. The same current passes every component on the loop. Energy is transferred at each lamp, but the current itself is the same everywhere.',
      reExplanation:
        'Put two identical lamps in a series loop and an ammeter in each gap of the loop. Both ammeters read the same value. The current that leaves the battery is the same current that returns to it. Energy is delivered at each lamp from the chemical store of the battery, but no charge is lost in the process. So in a series chain, identical lamps glow at the same brightness as each other, not in a fading pattern.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2022, Paper 1PH0/1F, candidates wrote that the total current from the battery stays the same when extra lamps are added in parallel, missing that each new branch draws its own current.
    {
      id: 'pe-lb-mis-parallel-current-same',
      description:
        'Believing that the total current from the battery stays the same when extra lamps are added in parallel.',
      triggerAnswer: 'parallel-current-same',
      correction:
        'Each new parallel branch draws its own current from the battery. The branch currents add up at the junctions, so the total current from the battery grows when a branch is added.',
      reExplanation:
        'Two parallel lamps each take 0.3 A from a battery, so the battery delivers 0.6 A in total. Add a third identical lamp in parallel and a third branch takes its own 0.3 A, so the battery now delivers 0.9 A. The p.d. across every lamp stays at the battery value, but the total current from the battery is bigger. The battery works harder when more parallel lamps are added.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const electricityLampBrightnessZoneNodes = [electricityLampBrightness]
