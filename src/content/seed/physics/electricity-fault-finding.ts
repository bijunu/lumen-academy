import type { SkillNode } from '@/types/content'

const SERIES_OPEN_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Series chain with one broken lamp: ammeter reads 0 A</text>

    <!-- Battery on the left -->
    <line x1="80" y1="180" x2="80" y2="220" stroke-width="5" />
    <line x1="95" y1="160" x2="95" y2="240" />
    <text x="60" y="270" font-size="14" stroke="none" fill="currentColor">6.0 V</text>

    <!-- Wire top from battery to lamp 1 -->
    <line x1="80" y1="180" x2="200" y2="180" />
    <line x1="200" y1="180" x2="200" y2="140" />
    <line x1="200" y1="140" x2="300" y2="140" />

    <!-- Lamp 1 (working) -->
    <circle cx="340" cy="140" r="30" />
    <line x1="318" y1="118" x2="362" y2="162" />
    <line x1="318" y1="162" x2="362" y2="118" />
    <text x="340" y="105" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">L1 (lit)</text>

    <line x1="380" y1="140" x2="480" y2="140" />

    <!-- Lamp 2 (broken) with X -->
    <circle cx="520" cy="140" r="30" stroke-dasharray="4,4" />
    <line x1="498" y1="118" x2="542" y2="162" stroke="red" stroke-width="4" />
    <line x1="498" y1="162" x2="542" y2="118" stroke="red" stroke-width="4" />
    <text x="520" y="105" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">L2 (broken)</text>
    <text x="520" y="190" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">filament snapped</text>

    <line x1="560" y1="140" x2="640" y2="140" />
    <line x1="640" y1="140" x2="640" y2="220" />

    <!-- Ammeter at the bottom -->
    <circle cx="400" cy="220" r="30" />
    <text x="400" y="225" text-anchor="middle" font-size="20" font-weight="700" stroke="none" fill="currentColor">A</text>
    <text x="400" y="280" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">reads 0.00 A</text>

    <line x1="640" y1="220" x2="430" y2="220" />
    <line x1="370" y1="220" x2="80" y2="220" />

    <!-- Voltmeter across L2 -->
    <circle cx="520" cy="320" r="30" />
    <text x="520" y="325" text-anchor="middle" font-size="20" font-weight="700" stroke="none" fill="currentColor">V</text>
    <text x="520" y="370" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">reads 6.0 V</text>
    <line x1="490" y1="320" x2="430" y2="320" stroke-dasharray="3,3" />
    <line x1="430" y1="320" x2="430" y2="170" stroke-dasharray="3,3" />
    <line x1="550" y1="320" x2="610" y2="320" stroke-dasharray="3,3" />
    <line x1="610" y1="320" x2="610" y2="170" stroke-dasharray="3,3" />

    <!-- Caption -->
    <text x="400" y="395" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">A break anywhere in a series chain stops the current and drops all the supply p.d. across the gap.</text>
  </g>
`

const SHORT_CIRCUIT_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Short circuit across a lamp: that lamp goes dark, main current rises</text>

    <!-- Battery on the left -->
    <line x1="80" y1="180" x2="80" y2="220" stroke-width="5" />
    <line x1="95" y1="160" x2="95" y2="240" />
    <text x="60" y="270" font-size="14" stroke="none" fill="currentColor">6.0 V</text>

    <!-- Wire top -->
    <line x1="80" y1="180" x2="200" y2="180" />
    <line x1="200" y1="180" x2="200" y2="140" />
    <line x1="200" y1="140" x2="300" y2="140" />

    <!-- Lamp 1 (lit, brighter) -->
    <circle cx="340" cy="140" r="30" />
    <line x1="318" y1="118" x2="362" y2="162" />
    <line x1="318" y1="162" x2="362" y2="118" />
    <text x="340" y="105" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">L1 (bright)</text>

    <line x1="380" y1="140" x2="480" y2="140" />

    <!-- Lamp 2 (dark, bypassed) -->
    <circle cx="520" cy="140" r="30" />
    <line x1="498" y1="118" x2="542" y2="162" />
    <line x1="498" y1="162" x2="542" y2="118" />
    <text x="520" y="105" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">L2 (dark)</text>

    <!-- Short circuit wire across L2 -->
    <line x1="490" y1="140" x2="490" y2="80" stroke="red" stroke-width="4" />
    <line x1="490" y1="80" x2="550" y2="80" stroke="red" stroke-width="4" />
    <line x1="550" y1="80" x2="550" y2="140" stroke="red" stroke-width="4" />
    <text x="520" y="70" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="red">short wire</text>

    <line x1="560" y1="140" x2="640" y2="140" />
    <line x1="640" y1="140" x2="640" y2="220" />

    <!-- Ammeter -->
    <circle cx="400" cy="220" r="30" />
    <text x="400" y="225" text-anchor="middle" font-size="20" font-weight="700" stroke="none" fill="currentColor">A</text>
    <text x="400" y="280" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">reads 0.50 A (high)</text>

    <line x1="640" y1="220" x2="430" y2="220" />
    <line x1="370" y1="220" x2="80" y2="220" />

    <!-- Voltmeter across L2 -->
    <circle cx="520" cy="320" r="30" />
    <text x="520" y="325" text-anchor="middle" font-size="20" font-weight="700" stroke="none" fill="currentColor">V</text>
    <text x="520" y="370" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">reads 0.0 V</text>
    <line x1="490" y1="320" x2="430" y2="320" stroke-dasharray="3,3" />
    <line x1="430" y1="320" x2="430" y2="170" stroke-dasharray="3,3" />
    <line x1="550" y1="320" x2="610" y2="320" stroke-dasharray="3,3" />
    <line x1="610" y1="320" x2="610" y2="170" stroke-dasharray="3,3" />

    <!-- Caption -->
    <text x="400" y="395" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">A short circuit gives current an easy path around a component; that component drops 0 V and goes dark.</text>
  </g>
`

const DIAGNOSTIC_TABLE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Reading meter values to locate a fault</text>

    <!-- Table outline -->
    <rect x="60" y="60" width="680" height="280" stroke="currentColor" fill="none" />

    <!-- Vertical lines -->
    <line x1="220" y1="60" x2="220" y2="340" />
    <line x1="380" y1="60" x2="380" y2="340" />
    <line x1="540" y1="60" x2="540" y2="340" />

    <!-- Horizontal lines (header + rows) -->
    <line x1="60" y1="100" x2="740" y2="100" />
    <line x1="60" y1="160" x2="740" y2="160" />
    <line x1="60" y1="220" x2="740" y2="220" />
    <line x1="60" y1="280" x2="740" y2="280" />

    <!-- Header -->
    <text x="140" y="85" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Fault</text>
    <text x="300" y="85" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Ammeter</text>
    <text x="460" y="85" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Voltmeter (across)</text>
    <text x="640" y="85" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Visible clue</text>

    <!-- Row 1: open switch / broken bulb in series -->
    <text x="140" y="135" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Open switch or</text>
    <text x="140" y="150" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">broken bulb (series)</text>
    <text x="300" y="135" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">0 A</text>
    <text x="460" y="130" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Full supply p.d.</text>
    <text x="460" y="148" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">across the gap</text>
    <text x="640" y="135" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">All lamps dark</text>
    <text x="640" y="150" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">on that loop</text>

    <!-- Row 2: short circuit across one lamp -->
    <text x="140" y="195" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Short circuit</text>
    <text x="140" y="210" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">across one lamp</text>
    <text x="300" y="195" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Higher than normal</text>
    <text x="300" y="210" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">(low R loop)</text>
    <text x="460" y="195" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">0 V across the</text>
    <text x="460" y="210" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">shorted lamp</text>
    <text x="640" y="195" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">That lamp dark,</text>
    <text x="640" y="210" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">others brighter</text>

    <!-- Row 3: open branch in parallel -->
    <text x="140" y="255" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Open branch</text>
    <text x="140" y="270" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">(parallel)</text>
    <text x="300" y="255" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">0 A in that branch,</text>
    <text x="300" y="270" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">other branches OK</text>
    <text x="460" y="255" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Full supply p.d.</text>
    <text x="460" y="270" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">across the gap</text>
    <text x="640" y="255" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Only one branch</text>
    <text x="640" y="270" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">dark</text>

    <!-- Row 4: short across battery -->
    <text x="140" y="315" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Short across</text>
    <text x="140" y="330" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">whole battery</text>
    <text x="300" y="315" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Very high; wires</text>
    <text x="300" y="330" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">heat up sharply</text>
    <text x="460" y="315" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">0 V across each</text>
    <text x="460" y="330" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">lamp</text>
    <text x="640" y="315" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">All lamps dark;</text>
    <text x="640" y="330" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">unsafe, switch off</text>

    <text x="400" y="378" text-anchor="middle" font-size="13" font-style="italic" stroke="none" fill="currentColor">Rule of thumb: voltmeter reading the full supply p.d. across a component means the current cannot pass that point.</text>
  </g>
`

export const electricityFaultFinding: SkillNode = {
  id: 'physics-electricity-fault-finding',
  title: 'Fault Finding in a Circuit',
  description:
    'Use ammeter and voltmeter readings to locate a fault. In a series chain, a broken bulb, a snapped wire, or an open switch stops the current and drops the full battery p.d. across the gap, so the ammeter reads 0 A and the voltmeter pinned across the broken part reads the supply voltage. A short circuit puts a near zero resistance path around a component, so that component goes dark and reads 0 V while the main current rises sharply. In a parallel circuit, an open branch leaves the other branches working but reads 0 A and full p.d. across the break. By the end of this node, you can pick the right meter, predict what it should read, and pinpoint which part of a school circuit is at fault.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-electricity-circuits',
  zoneName: 'Electricity and Circuits',
  tier: 'challenge',
  prerequisites: ['physics-electricity-reading-meters'],
  curriculum: {
    ks3Objective:
      'Series and parallel circuits, currents and voltages, and using meters to investigate circuits.',
    awardingBodies: {
      aqa:
        '4.2.1.4 Series and parallel circuits; effect of a broken component or open switch on current and p.d. (GCSE Physics 8463)',
      edexcel:
        'Topic 2.4 to 2.6 Circuit diagnosis; effect of open circuits and short circuits on current and p.d. (GCSE Physics 1PH0)',
      ocr:
        'P4.2 Circuit faults; using meter readings to locate breaks and short circuits (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'pe-ff-scene-open',
      title: 'Open Circuit: Broken Bulb in a Series Chain',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see what the ammeter and voltmeter read when one lamp in a series chain is broken.',
      data: {
        viewBox: '0 0 800 420',
        svg: SERIES_OPEN_SVG,
        hotspots: [
          {
            id: 'pe-ff-open-l2',
            x: 65,
            y: 33,
            label: 'L2 is broken: filament snapped',
            description:
              'The filament inside L2 has snapped. There is now a gap in the series chain. No charge can flow round the loop, so both lamps are dark, not just L2.',
          },
          {
            id: 'pe-ff-open-ammeter',
            x: 50,
            y: 66,
            label: 'Ammeter reads 0.00 A',
            description:
              'A series chain has only one path. If that path is broken anywhere, the current is 0 A everywhere in the loop. The ammeter confirms the break exists without telling you yet where it is.',
          },
          {
            id: 'pe-ff-open-voltmeter',
            x: 65,
            y: 80,
            label: 'Voltmeter reads 6.0 V (full supply)',
            description:
              'The voltmeter is connected in parallel across L2. Because no current flows, all of the battery p.d. is dropped across the only gap in the loop. A reading equal to the supply tells you L2 is the broken part.',
          },
          {
            id: 'pe-ff-open-rule',
            x: 50,
            y: 95,
            label: 'Diagnostic rule',
            description:
              'Move the voltmeter along the chain. The component reading the full supply p.d. is the open one. Every working component should read its normal share of the supply.',
          },
        ],
      },
    },
    {
      id: 'pe-ff-scene-short',
      title: 'Short Circuit: One Lamp Bypassed by a Wire',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how a short circuit changes ammeter and voltmeter readings.',
      data: {
        viewBox: '0 0 800 420',
        svg: SHORT_CIRCUIT_SVG,
        hotspots: [
          {
            id: 'pe-ff-short-wire',
            x: 65,
            y: 18,
            label: 'Short wire bypasses L2',
            description:
              'A bare wire links the two terminals of L2. The wire has almost no resistance, so the current prefers it over the lamp filament. Charge flows round the wire and skips L2.',
          },
          {
            id: 'pe-ff-short-l2',
            x: 65,
            y: 33,
            label: 'L2 goes dark',
            description:
              'No current flows through the L2 filament, because the easier path is the short wire. With no current and no p.d. across it, L2 does not light, even though it is not broken.',
          },
          {
            id: 'pe-ff-short-ammeter',
            x: 50,
            y: 66,
            label: 'Main ammeter reading rises sharply',
            description:
              'Total circuit resistance has dropped because one lamp is bypassed. With more p.d. left for L1 and less R overall, the current through the main loop is higher than before. L1 burns brighter and may even blow.',
          },
          {
            id: 'pe-ff-short-voltmeter',
            x: 65,
            y: 80,
            label: 'Voltmeter across L2 reads 0.0 V',
            description:
              'A zero-resistance wire has the same voltage at both ends. The voltmeter across L2 reads 0 V. That zero reading on a component you expected to be lit is the signature of a short circuit across it.',
          },
        ],
      },
    },
    {
      id: 'pe-ff-scene-diagnose',
      title: 'Diagnostic Table: Matching Readings to Faults',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read off the ammeter, voltmeter, and visual clues for four common faults.',
      data: {
        viewBox: '0 0 800 400',
        svg: DIAGNOSTIC_TABLE_SVG,
        hotspots: [
          {
            id: 'pe-ff-diag-open',
            x: 18,
            y: 35,
            label: 'Open switch or broken bulb in series',
            description:
              'Ammeter 0 A everywhere, voltmeter reads the full supply across the gap, every component on the loop dark. Slide the voltmeter along the chain and the gap is the one with the big reading.',
          },
          {
            id: 'pe-ff-diag-short',
            x: 18,
            y: 50,
            label: 'Short circuit across one lamp',
            description:
              'Ammeter reads higher than normal, voltmeter reads 0 V across the shorted lamp, that lamp is dark while the rest may glow brighter. The 0 V across a still-good lamp is the giveaway.',
          },
          {
            id: 'pe-ff-diag-parallel',
            x: 18,
            y: 65,
            label: 'Open branch in a parallel circuit',
            description:
              'One branch reads 0 A, others stay near normal. A voltmeter across the broken branch reads the full supply because no charge can flow there. Only one branch is dark; the others stay lit.',
          },
          {
            id: 'pe-ff-diag-rule',
            x: 50,
            y: 95,
            label: 'Rule of thumb',
            description:
              'Voltmeter reading the supply across a single component while everything is dark on that loop means current cannot pass that point. Either an open switch, a broken filament, or a snapped wire is the fault.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'pe-ff-worked-open',
      title: 'Diagnose an open circuit: two lamps in series, one dark',
      steps: [
        {
          explanation:
            'Set out the situation. A pupil at a Manchester workbench has two identical lamps in series with a 6.0 V battery and an ammeter. Both lamps are dark and the ammeter reads 0.00 A. The pupil moves a voltmeter along the chain.',
        },
        {
          explanation:
            'List what 0 A tells you. A series chain has only one path. If the ammeter reads 0 A, the path is broken somewhere. The pupil now needs to find where.',
          maths: 'I = 0 A everywhere in series means an open break in the loop.',
        },
        {
          explanation:
            'Put the voltmeter across L1 first. The reading is 0.0 V. That means there is no p.d. dropped across L1, so L1 is not the gap.',
        },
        {
          explanation:
            'Put the voltmeter across L2. The reading is 6.0 V, equal to the battery p.d.',
        },
        {
          explanation:
            'Apply the rule. With no current flowing, all of the supply p.d. falls across the one gap in the loop. The full 6.0 V across L2 means L2 is the open component.',
          maths: 'V across gap = supply p.d. = 6.0 V',
        },
        {
          explanation:
            'State the conclusion. L2 is broken: the filament has snapped. Replace L2 and the ammeter should rise from 0 A to its usual reading. A quick sanity check: V across L1 (0 V) plus V across L2 (6.0 V) equals 6.0 V, matching the battery, as series p.d.s must.',
        },
      ],
    },
    {
      id: 'pe-ff-worked-short',
      title: 'Diagnose a short circuit: one dark lamp, other lamp brighter',
      steps: [
        {
          explanation:
            'Set out the situation. Two identical 6 ohm lamps sit in series with a 6.0 V battery. The ammeter normally reads 0.50 A. A pupil notices L2 is dark but L1 burns brighter than usual, and the ammeter has jumped to 1.00 A.',
        },
        {
          explanation:
            'List the symptoms. A dark lamp with no break in the wires plus a higher than usual current suggests a low-resistance bypass. The next step is to put a voltmeter across L2.',
        },
        {
          explanation: 'Put the voltmeter across L2. The reading is 0.0 V.',
        },
        {
          explanation:
            'Apply the rule. If a component reads 0 V while it is dark and the main current is high, a short wire is in parallel with it. The short wire has near zero resistance, so the same point on each side has the same potential.',
          maths: 'V_L2 = 0 V means a short across L2.',
        },
        {
          explanation:
            'Check the numbers tie together. Total R has dropped from 12 ohm (two lamps) to 6 ohm (one lamp, L2 bypassed). I rose from 6.0 / 12 = 0.50 A to 6.0 / 6 = 1.00 A. L1 now drops the full 6.0 V across itself and burns brighter.',
          maths: 'I = V / R = 6.0 / 6 = 1.00 A',
        },
        {
          explanation:
            'State the conclusion. There is a short circuit across L2. Find and remove the bare wire touching the L2 terminals. Switch off first because the higher current can overheat the remaining lamp and the wires.',
        },
      ],
    },
  ],
  questions: [
    // Core tier: 7 questions
    {
      id: 'pe-ff-q1',
      type: 'multiple-choice',
      stem: 'Two lamps are in series with a 6.0 V battery and a single ammeter. The ammeter reads 0.00 A and both lamps are dark. What does the 0 A reading tell you?',
      tier: 'core',
      options: [
        'The battery is the wrong way round.',
        'The current is too small to see, but the lamps will light soon.',
        'There is a break somewhere in the loop, so no charge can flow.',
        'The ammeter is faulty and should always read at least 0.1 A.',
      ],
      correctIndex: 2,
      xpValue: 10,
      hint: 'A series chain has one path. If the ammeter is 0 A, that single path is broken.',
    },
    {
      id: 'pe-ff-q2',
      type: 'multiple-choice',
      stem: 'A voltmeter is placed across a single lamp in a series chain. The lamp is dark and the voltmeter reads the full battery p.d. What is the most likely fault?',
      tier: 'core',
      options: [
        'The lamp is working normally.',
        'The voltmeter is connected the wrong way round.',
        'The wire to the battery has fallen off the negative terminal.',
        'The lamp is broken or the switch on it is open.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'pe-ff-mis-broken-vs-working',
      hint: 'With no current flowing, all of the supply p.d. lands on the one gap in the loop.',
    },
    {
      id: 'pe-ff-q3',
      type: 'multiple-choice',
      stem: 'In a series circuit, where does the current stop flowing when one lamp is broken?',
      tier: 'core',
      options: [
        'Only in the broken lamp; the rest of the loop still has current.',
        'Only between the broken lamp and the battery.',
        'Everywhere in the loop; current is zero at every point.',
        'Only in the wire on the right side of the broken lamp.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pe-ff-mis-current-still-flows',
      hint: 'A series chain has one path. A break in any single place stops charge in the whole loop.',
    },
    {
      id: 'pe-ff-q4',
      type: 'multiple-choice',
      stem: 'A lamp is shorted out by a bare wire touching its terminals. What does a voltmeter read across that lamp?',
      tier: 'core',
      options: [
        '0 V, because a near-zero-resistance wire holds both terminals at the same potential.',
        'The full battery p.d., because the lamp is now broken.',
        'Half the battery p.d., because the lamp shares with the wire.',
        'A negative voltage, because the current reverses.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pe-ff-mis-short-vs-open',
      hint: 'Both ends of a short wire sit at the same potential, so the p.d. across it is zero.',
    },
    {
      id: 'pe-ff-q5',
      type: 'numeric-entry',
      stem: 'A series chain has two lamps and a 9.0 V battery. The pupil places a voltmeter across lamp A and reads 0.0 V, then places it across lamp B and reads 9.0 V. What does the voltmeter across lamp B read, in V?',
      tier: 'core',
      correctAnswer: 9,
      unit: 'V',
      xpValue: 10,
      hint: 'The reading is given in the stem. The full supply p.d. lands on the open component.',
    },
    {
      id: 'pe-ff-q6',
      type: 'multiple-choice',
      stem: 'A pupil tests a series chain with a 4.5 V battery. The ammeter reads 0.00 A and the voltmeter across the open switch reads 4.5 V. What does the voltmeter read across each closed (working) component on the same loop?',
      tier: 'core',
      options: [
        '4.5 V across each, because every component shares the full supply.',
        '0 V across each, because no current flows so no p.d. is dropped across them.',
        'Half of 4.5 V across each, because they split the supply evenly.',
        'A value that depends only on the colour of the wire used.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pe-ff-mis-pd-without-current',
      hint: 'If I = 0, then V = I x R = 0 across any working resistor. The whole supply lands on the gap.',
    },
    {
      id: 'pe-ff-q7',
      type: 'multiple-choice',
      stem: 'Which symptom would you expect from a short circuit across one lamp in a two-lamp series chain?',
      tier: 'core',
      options: [
        'Both lamps go dark and the ammeter reads 0 A.',
        'The shorted lamp goes dark, the other burns brighter, and the ammeter reading rises.',
        'Both lamps glow at the same brightness as before; nothing changes.',
        'The shorted lamp burns brighter while the other goes dark.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pe-ff-mis-short-vs-open',
      hint: 'A short bypasses one lamp, lowering total resistance, so I rises and the bypassed lamp goes dark.',
    },
    // Confident tier: 7 questions
    {
      id: 'pe-ff-q8',
      type: 'numeric-entry',
      stem: 'Two identical 6 ohm lamps are in series with a 6.0 V battery. A short wire is placed across one of the lamps. What current flows in the main loop, in A?',
      tier: 'confident',
      correctAnswer: 1,
      unit: 'A',
      xpValue: 15,
      hint: 'Total R drops from 12 ohm to 6 ohm because one lamp is bypassed. Use I = V / R.',
    },
    {
      id: 'pe-ff-q9',
      type: 'multiple-choice',
      stem: 'A parallel circuit has three lamps, each on its own branch from a 6.0 V battery. Lamp X is dark but lamps Y and Z still glow normally. Which fault best fits?',
      tier: 'confident',
      options: [
        'A break in the X branch only, so no current flows through X but the others are unaffected.',
        'The battery has lost half of its charge.',
        'A short circuit across the whole battery.',
        'A broken wire in the main loop before it splits into branches.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'pe-ff-mis-parallel-spreads',
      hint: 'Parallel branches are independent. If only one is dark, the break is on that branch alone.',
    },
    {
      id: 'pe-ff-q10',
      type: 'numeric-entry',
      stem: 'A pupil has three lamps in series with a 9.0 V battery. The middle lamp is broken. The voltmeter is placed across the middle lamp. What is its reading, in V?',
      tier: 'confident',
      correctAnswer: 9,
      unit: 'V',
      xpValue: 15,
      misconceptionId: 'pe-ff-mis-pd-without-current',
      hint: 'No current flows, so all of the supply p.d. lands on the single gap, which is the middle lamp.',
    },
    {
      id: 'pe-ff-q11',
      type: 'multiple-choice',
      stem: 'A series chain has a 12 V battery, three identical lamps, and an ammeter. The ammeter reads 0.00 A. The voltmeter reads 0 V across lamp 1, 12 V across lamp 2, and 0 V across lamp 3. Which lamp is faulty?',
      tier: 'confident',
      options: [
        'Lamp 1, because its voltmeter reads 0 V.',
        'Lamp 2, because the voltmeter across it reads the full supply.',
        'Lamp 3, because its voltmeter reads 0 V.',
        'No lamp; the battery is flat.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'pe-ff-mis-zero-volts-broken',
      hint: 'The component reading the full supply p.d. while I = 0 is the open one.',
    },
    {
      id: 'pe-ff-q12',
      type: 'spot-misconception',
      stem: 'A pupil in a Norwich classroom has two lamps in series. Lamp A is broken. The pupil writes down what they expect a voltmeter to read across lamp B (the working lamp).',
      tier: 'confident',
      statements: [
        {
          text: 'The pupil writes: "Lamp B still has the full battery p.d. across it, because lamp A is broken and so it cannot use any voltage."',
          isMisconception: true,
        },
        {
          text: 'The pupil writes: "Lamp B has 0 V across it. With no current flowing, V = I x R is zero across any working resistor, and all of the supply p.d. lands on the broken lamp."',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pe-ff-mis-pd-without-current',
    },
    {
      id: 'pe-ff-q13',
      type: 'drag-order',
      stem: 'Put the steps in the right order for using a voltmeter to find which lamp in a series chain is broken.',
      tier: 'confident',
      items: [
        'Identify the component reading the full supply p.d.; that is the broken one.',
        'Confirm the ammeter reads 0 A so you know the chain has an open break.',
        'Move the voltmeter to the next component in the chain and read its value.',
        'Connect the voltmeter in parallel across the first lamp and note the reading.',
      ],
      correctOrder: [1, 3, 2, 0],
      xpValue: 15,
      hint: 'First confirm the break exists, then walk the voltmeter along the chain reading each component.',
    },
    {
      id: 'pe-ff-q14',
      type: 'multiple-choice',
      stem: 'A pupil in a Sheffield lab finds that all three lamps in a series loop are dark and the wires near the battery feel warm. The ammeter reads a very high value. Which fault best fits?',
      tier: 'confident',
      options: [
        'A short circuit across the whole battery, which draws a large current through near-zero resistance.',
        'A broken bulb in lamp 2; that breaks the loop and the wires should stay cool.',
        'An open switch, which would give 0 A not a high reading.',
        'A flat battery, which gives a low reading not a high one.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'pe-ff-mis-short-vs-open',
      hint: 'High current plus warm wires plus everything dark is the signature of a short across the supply.',
    },
    // Challenge tier: 6 questions
    {
      id: 'pe-ff-q15',
      type: 'numeric-entry',
      stem: 'A 12 V battery drives three identical 8 ohm lamps in series. Normally the ammeter reads 0.50 A. A short wire is placed across one lamp. What is the new main-loop current, in A?',
      tier: 'challenge',
      correctAnswer: 0.75,
      unit: 'A',
      xpValue: 20,
      hint: 'Total R drops from 24 ohm (three lamps) to 16 ohm (two lamps) when one is bypassed. Use I = V / R.',
    },
    {
      id: 'pe-ff-q16',
      type: 'multiple-choice',
      stem: 'A pupil in a Tunbridge Wells school tests a series chain of four identical lamps with a 6.0 V battery. The ammeter reads 0.00 A. The pupil walks a voltmeter along the chain and reads 0 V across lamps 1, 2, and 4, but 6.0 V across lamp 3. The pupil then replaces lamp 3 and the ammeter rises to 0.20 A. What was the original fault, and why does the new ammeter reading make sense?',
      tier: 'challenge',
      options: [
        'Lamp 3 was broken. With it replaced, the loop is whole and the supply p.d. drops 1.5 V across each lamp, giving a sensible 0.20 A through the four resistors.',
        'Lamp 1 was broken; the voltmeter was reading the wrong end of the chain.',
        'The battery was flat; replacing lamp 3 also charged the battery.',
        'The ammeter was reading the wrong way round; the actual current was always 0.20 A.',
      ],
      correctIndex: 0,
      xpValue: 20,
      misconceptionId: 'pe-ff-mis-zero-volts-broken',
      hint: 'The lamp that reads the full supply while I = 0 is the open one. Once replaced, the chain shares the supply.',
    },
    {
      id: 'pe-ff-q17',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is diagnosing a parallel circuit with three branches and a 6.0 V battery. Branch A is dark, branches B and C still glow normally.',
      tier: 'challenge',
      steps: [
        'Write what is seen: A is dark, B and C glow normally, supply is 6.0 V.',
        'Place an ammeter in branch A. Reading: 0.00 A in that branch only.',
        'Place a voltmeter across the components in branch A. Reading: 6.0 V across the gap.',
        null,
        'Inspect branch A for a snapped wire, a loose connector, or a broken lamp filament.',
        'State the diagnosis: branch A has an open break; the other branches are unaffected because parallel branches are independent.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Conclude that branch A is open: I = 0 in that branch and V across the gap equals the full supply, which only happens when the path is broken.',
      xpValue: 20,
    },
    {
      id: 'pe-ff-q18',
      type: 'numeric-entry',
      stem: 'A series chain has a 9.0 V battery and two lamps. Lamp X has resistance 6 ohm and lamp Y has resistance 12 ohm. Lamp Y is shorted out by a bare wire. What is the new p.d. across lamp X, in V?',
      tier: 'challenge',
      correctAnswer: 9,
      unit: 'V',
      xpValue: 20,
      misconceptionId: 'pe-ff-mis-short-vs-open',
      hint: 'With Y bypassed (0 V across it), all of the supply p.d. lands on X. The numbers must still add to 9.0 V.',
    },
    {
      id: 'pe-ff-q19',
      type: 'spot-misconception',
      stem: 'Marcus has a series chain of two identical lamps with a 6.0 V battery. The ammeter reads 0.00 A. He writes two statements about where the supply p.d. is dropped.',
      tier: 'challenge',
      statements: [
        {
          text: 'Marcus says: "Because the ammeter reads 0 A, no p.d. is dropped anywhere; every voltmeter on the loop must read 0 V, including across any broken lamp."',
          isMisconception: true,
        },
        {
          text: 'Marcus says: "Because the ammeter reads 0 A, no p.d. is dropped across the working lamp, but the full 6.0 V is dropped across the broken lamp. The two voltages still sum to the supply p.d."',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'pe-ff-mis-pd-without-current',
    },
    {
      id: 'pe-ff-q20',
      type: 'numeric-entry',
      stem: 'A pupil in a Dover school sets up a series chain: 12 V battery, four identical lamps, one ammeter. Normally the ammeter reads 0.30 A. The pupil finds the ammeter now reads 0.00 A, and the voltmeter reads 0 V across three of the lamps. What does the voltmeter read across the remaining lamp, in V?',
      tier: 'challenge',
      correctAnswer: 12,
      unit: 'V',
      xpValue: 20,
      misconceptionId: 'pe-ff-mis-pd-without-current',
      hint: 'No current means no p.d. across the working lamps. The full supply lands on the single broken one.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 1F Q5, candidates wrote that only the broken lamp loses current while the other lamps in a series chain still glow.
    {
      id: 'pe-ff-mis-current-still-flows',
      description:
        'Believing that a broken lamp in a series chain only stops the current in itself, while the other lamps in the same loop keep glowing.',
      triggerAnswer: 'series-break-isolated',
      correction:
        'In a series chain there is only one path. A break anywhere makes the current zero everywhere in the loop, so every lamp on that loop goes dark.',
      reExplanation:
        'Imagine a single track of marbles being pushed by a hand. If one marble is removed in the middle, no marble after it can move either. The same is true for charge in a series circuit. A snapped filament or open switch breaks the only path, so I = 0 A at every ammeter reading on that loop. All the lamps go dark, not just the broken one.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2021, Paper 1PH0/1F, candidates confused a short circuit with an open circuit when describing meter readings.
    {
      id: 'pe-ff-mis-short-vs-open',
      description:
        'Mixing up short circuits and open circuits: thinking a short means the lamp gets brighter or that an open circuit raises the current.',
      triggerAnswer: 'short-vs-open',
      correction:
        'A short circuit puts a near-zero resistance wire across a component, so it goes dark and current rises. An open circuit breaks the loop, so current is zero and the broken part drops the full supply p.d.',
      reExplanation:
        'A short across one lamp gives the charge an easier path that skips that lamp. The lamp drops 0 V and is dark, while the lower total resistance means a bigger main-loop current and brighter remaining lamps. An open circuit, by contrast, gives a 0 A reading on every ammeter and pins the full supply p.d. across the gap. Same component dark, very different ammeter behaviour.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2020, Paper J259/02 Q3, candidates claimed that a voltmeter across a working lamp in a chain with an open break still reads a non-zero p.d.
    {
      id: 'pe-ff-mis-pd-without-current',
      description:
        'Thinking that working lamps in an open series chain still drop some of the supply p.d. across them, sharing with the broken component.',
      triggerAnswer: 'pd-without-current',
      correction:
        'When the current is zero, V = I x R is zero across any working resistor. All of the supply p.d. is dropped across the single open break.',
      reExplanation:
        'Take a 6.0 V chain with one working 6 ohm lamp and one broken lamp. I = 0 A, so V across the working lamp is 0 x 6 = 0 V. The voltmeter on the broken lamp must read 6.0 V because Kirchhoff loop sums require the loop p.d.s to equal the supply. Two voltages sum to 6.0 V: 0 + 6.0 = 6.0. The working lamp keeps its resistance, but it does not share the supply.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, Paper 1F, candidates marked the lamp reading 0 V on a voltmeter as the broken one, mistaking the symptom for the cause.
    {
      id: 'pe-ff-mis-zero-volts-broken',
      description:
        'Reading the lamp with 0 V across it on a voltmeter as the broken lamp, instead of the lamp with the full supply p.d. across it.',
      triggerAnswer: 'zero-volts-broken',
      correction:
        'A broken component in a series chain reads the full supply p.d. on a voltmeter, not 0 V. The 0 V reading is a healthy lamp in a chain with no current.',
      reExplanation:
        'In a series loop with a single open break and 12 V supply, the broken part reads 12 V on a voltmeter while every working part reads 0 V. That is because V = I x R is 0 for the working parts (I = 0) and the loop sum must equal 12 V, so the open break carries the full 12 V. Always pick the component reading the supply p.d. as the faulty one.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2022, Paper 1PH0/1F, candidates claimed that a broken lamp in one branch of a parallel circuit affects all the other branches.
    {
      id: 'pe-ff-mis-parallel-spreads',
      description:
        'Thinking that an open break in one branch of a parallel circuit also stops the current in the other branches.',
      triggerAnswer: 'parallel-spreads',
      correction:
        'Parallel branches are independent paths. A break in one branch sets that branch to 0 A, but the other branches keep working as normal.',
      reExplanation:
        'A 6.0 V battery feeds three lamps on three separate branches. If the wire to lamp X is snapped, charge cannot enter branch X, so I in branch X is 0 A. Branches Y and Z still have their own complete loops from the battery to the lamp and back, so they keep their normal current and brightness. Only the one dark branch needs fixing.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2023, J259/02, candidates marked a dim or off lamp as broken when the actual fault was a short across it.
    {
      id: 'pe-ff-mis-broken-vs-working',
      description:
        'Calling a dark lamp broken when it is actually intact but bypassed by a short, so it carries no current and is unlit.',
      triggerAnswer: 'broken-vs-working',
      correction:
        'A lamp can be dark without being broken. If a voltmeter across it reads 0 V and the main current is higher than normal, the lamp is being bypassed by a short.',
      reExplanation:
        'A school bulb with intact filament still goes dark if a bare wire crosses its terminals; the wire shorts it out. The voltmeter reads 0 V across the lamp because both ends are at the same potential, and the ammeter in the main loop reads a higher than normal value because total resistance has dropped. Replace nothing in the lamp; find and remove the short wire first.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const electricityFaultFindingZoneNodes = [electricityFaultFinding]
