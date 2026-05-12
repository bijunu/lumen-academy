import type { SkillNode } from '@/types/content'

const SERIES_PD_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Series loop: p.d.s across components add to source p.d.</text>

    <!-- Left wire with a 6 V battery (three 1.5 V cells side by side, simplified) -->
    <line x1="120" y1="120" x2="120" y2="200" />
    <line x1="98" y1="160" x2="142" y2="160" />
    <line x1="110" y1="178" x2="130" y2="178" stroke-width="7" />
    <text x="80" y="170" font-size="13" font-weight="700" stroke="none" fill="currentColor">6 V</text>
    <line x1="120" y1="200" x2="120" y2="300" />

    <!-- Top wire across to lamp 1 -->
    <line x1="120" y1="120" x2="300" y2="120" />
    <!-- Lamp 1 at (340, 120) -->
    <circle cx="340" cy="120" r="22" />
    <line x1="324" y1="104" x2="356" y2="136" />
    <line x1="324" y1="136" x2="356" y2="104" />
    <!-- Voltmeter across lamp 1 -->
    <line x1="320" y1="80" x2="320" y2="60" />
    <line x1="320" y1="60" x2="400" y2="60" />
    <line x1="400" y1="60" x2="400" y2="80" />
    <circle cx="400" cy="100" r="22" />
    <text x="400" y="108" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">V</text>
    <text x="450" y="98" font-size="13" font-weight="700" stroke="none" fill="currentColor">2 V</text>
    <line x1="400" y1="120" x2="360" y2="120" />

    <!-- Wire to lamp 2 -->
    <line x1="362" y1="120" x2="540" y2="120" />
    <!-- Lamp 2 at (580, 120) -->
    <circle cx="580" cy="120" r="22" />
    <line x1="564" y1="104" x2="596" y2="136" />
    <line x1="564" y1="136" x2="596" y2="104" />
    <!-- Voltmeter across lamp 2 -->
    <line x1="560" y1="80" x2="560" y2="60" />
    <line x1="560" y1="60" x2="640" y2="60" />
    <line x1="640" y1="60" x2="640" y2="80" />
    <circle cx="640" cy="100" r="22" />
    <text x="640" y="108" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">V</text>
    <text x="680" y="98" font-size="13" font-weight="700" stroke="none" fill="currentColor">4 V</text>
    <line x1="640" y1="120" x2="600" y2="120" />

    <!-- Right wire and return path -->
    <line x1="600" y1="120" x2="700" y2="120" />
    <line x1="700" y1="120" x2="700" y2="300" />
    <line x1="120" y1="300" x2="700" y2="300" />

    <!-- Rule text -->
    <text x="400" y="360" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">2 V across lamp 1 + 4 V across lamp 2 = 6 V across the battery</text>
  </g>
`

const PARALLEL_PD_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Parallel branches: p.d. across each branch equals source p.d.</text>

    <!-- Left wire with cell -->
    <line x1="100" y1="80" x2="100" y2="160" />
    <line x1="78" y1="170" x2="122" y2="170" />
    <line x1="90" y1="188" x2="110" y2="188" stroke-width="7" />
    <text x="60" y="180" font-size="13" font-weight="700" stroke="none" fill="currentColor">6 V</text>
    <line x1="100" y1="198" x2="100" y2="320" />

    <!-- Top wire to junction -->
    <line x1="100" y1="80" x2="500" y2="80" />
    <!-- Junction at top -->
    <circle cx="300" cy="80" r="4" fill="currentColor" />
    <circle cx="500" cy="80" r="4" fill="currentColor" />

    <!-- Branch 1: lamp at (300, 180) -->
    <line x1="300" y1="80" x2="300" y2="158" />
    <circle cx="300" cy="180" r="22" />
    <line x1="284" y1="164" x2="316" y2="196" />
    <line x1="284" y1="196" x2="316" y2="164" />
    <line x1="300" y1="202" x2="300" y2="320" />

    <!-- Voltmeter across branch 1 lamp -->
    <line x1="280" y1="180" x2="220" y2="180" />
    <line x1="220" y1="180" x2="220" y2="200" />
    <circle cx="220" cy="220" r="22" />
    <text x="220" y="228" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">V</text>
    <text x="160" y="225" font-size="13" font-weight="700" stroke="none" fill="currentColor">6 V</text>
    <line x1="220" y1="242" x2="220" y2="260" />
    <line x1="220" y1="260" x2="280" y2="260" />
    <line x1="280" y1="260" x2="280" y2="240" />

    <!-- Branch 2: lamp at (500, 180) -->
    <line x1="500" y1="80" x2="500" y2="158" />
    <circle cx="500" cy="180" r="22" />
    <line x1="484" y1="164" x2="516" y2="196" />
    <line x1="484" y1="196" x2="516" y2="164" />
    <line x1="500" y1="202" x2="500" y2="320" />

    <!-- Voltmeter across branch 2 lamp -->
    <line x1="520" y1="180" x2="580" y2="180" />
    <line x1="580" y1="180" x2="580" y2="200" />
    <circle cx="580" cy="220" r="22" />
    <text x="580" y="228" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">V</text>
    <text x="610" y="225" font-size="13" font-weight="700" stroke="none" fill="currentColor">6 V</text>
    <line x1="580" y1="242" x2="580" y2="260" />
    <line x1="580" y1="260" x2="520" y2="260" />
    <line x1="520" y1="260" x2="520" y2="240" />

    <!-- Bottom return wire -->
    <line x1="100" y1="320" x2="500" y2="320" />

    <!-- Rule text -->
    <text x="400" y="370" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Branch 1: 6 V. Branch 2: 6 V. Source: 6 V. Each branch sees the full p.d.</text>
  </g>
`

const VOLTMETER_PLACEMENT_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">A voltmeter goes in parallel, across the component</text>

    <!-- Good placement on the left -->
    <text x="200" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Correct: across the lamp</text>
    <!-- Left cell -->
    <line x1="120" y1="120" x2="120" y2="200" />
    <line x1="98" y1="160" x2="142" y2="160" />
    <line x1="110" y1="178" x2="130" y2="178" stroke-width="7" />
    <line x1="120" y1="200" x2="120" y2="300" />
    <!-- Top wire -->
    <line x1="120" y1="120" x2="280" y2="120" />
    <!-- Lamp -->
    <circle cx="280" cy="160" r="22" />
    <line x1="264" y1="144" x2="296" y2="176" />
    <line x1="264" y1="176" x2="296" y2="144" />
    <line x1="280" y1="120" x2="280" y2="138" />
    <line x1="280" y1="182" x2="280" y2="300" />
    <!-- Voltmeter across the lamp -->
    <line x1="260" y1="160" x2="220" y2="160" />
    <line x1="220" y1="160" x2="220" y2="180" />
    <circle cx="220" cy="200" r="22" />
    <text x="220" y="208" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">V</text>
    <line x1="220" y1="222" x2="220" y2="240" />
    <line x1="220" y1="240" x2="260" y2="240" />
    <line x1="260" y1="240" x2="260" y2="225" />
    <!-- Bottom -->
    <line x1="120" y1="300" x2="280" y2="300" />

    <!-- Wrong placement on the right (in series) -->
    <text x="600" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Not correct: in the loop</text>
    <line x1="500" y1="120" x2="500" y2="200" />
    <line x1="478" y1="160" x2="522" y2="160" />
    <line x1="490" y1="178" x2="510" y2="178" stroke-width="7" />
    <line x1="500" y1="200" x2="500" y2="300" />
    <line x1="500" y1="120" x2="600" y2="120" />
    <!-- Voltmeter in series (wrong) -->
    <circle cx="640" cy="120" r="22" />
    <text x="640" y="128" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">V</text>
    <line x1="662" y1="120" x2="700" y2="120" />
    <!-- Lamp -->
    <circle cx="700" cy="160" r="22" />
    <line x1="684" y1="144" x2="716" y2="176" />
    <line x1="684" y1="176" x2="716" y2="144" />
    <line x1="700" y1="120" x2="700" y2="138" />
    <line x1="700" y1="182" x2="700" y2="300" />
    <line x1="500" y1="300" x2="700" y2="300" />

    <text x="400" y="370" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">The voltmeter on the right is in series, which breaks the loop. Always put it on a side branch.</text>
  </g>
`

export const electricityVoltageRules: SkillNode = {
  id: 'physics-electricity-voltage-rules',
  title: 'Voltage Rules in Series and Parallel',
  description:
    'Use the two voltage rules that govern simple circuits. In a series loop, the p.d.s across the components add up to the p.d. of the source: a 6 V battery sharing a loop between two lamps might give 2 V across one and 4 V across the other. In parallel branches, the p.d. across each branch equals the p.d. of the source: two lamps wired side by side across a 6 V battery each have 6 V across them. A voltmeter sits in parallel, across the component being measured. The same rules let you read or predict a missing voltmeter reading, and explain why a 1.5 V torch cell, a 6 V battery and the 230 V mains push very different amounts of energy per coulomb through their components.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-electricity-circuits',
  zoneName: 'Electricity and Circuits',
  tier: 'confident',
  prerequisites: [
    'physics-electricity-circuit-symbols',
    'physics-electricity-series-parallel',
    'physics-electricity-current-voltage',
  ],
  curriculum: {
    ks3Objective:
      'Potential difference, measured in volts, battery and bulb ratings; resistance, measured in ohms.',
    awardingBodies: {
      aqa: '4.2.1.4 Series and parallel circuits; p.d.s in series sum to source p.d., p.d. across parallel branches equal (GCSE Physics 8463)',
      edexcel:
        'Topic 2.6 Potential difference in series and parallel circuits (GCSE Physics 1PH0)',
      ocr: 'P4.2 Potential difference rules in series and parallel (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'pe-vr-scene-series',
      title: 'A 6 V Battery Sharing Two Lamps in Series',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read the two voltmeters and check that their readings add up to the battery p.d.',
      data: {
        viewBox: '0 0 800 400',
        svg: SERIES_PD_SVG,
        hotspots: [
          {
            id: 'pe-vr-series-battery',
            x: 15,
            y: 40,
            label: 'Battery: 6 V source',
            description:
              'The battery is four 1.5 V cells joined together, giving 6 V in total. This is the energy per coulomb that the battery hands to the loop.',
          },
          {
            id: 'pe-vr-series-lamp1',
            x: 42,
            y: 25,
            label: 'Voltmeter across lamp 1: 2 V',
            description:
              'The voltmeter sits in parallel across the first lamp. It reads 2 V, meaning each coulomb of charge gives 2 J of energy to lamp 1.',
          },
          {
            id: 'pe-vr-series-lamp2',
            x: 78,
            y: 25,
            label: 'Voltmeter across lamp 2: 4 V',
            description:
              'The second voltmeter reads 4 V. Each coulomb of charge gives 4 J of energy to lamp 2. Lamp 2 drops a bigger share because its resistance is bigger.',
          },
          {
            id: 'pe-vr-series-rule',
            x: 50,
            y: 90,
            label: 'Rule: 2 V + 4 V = 6 V',
            description:
              'The p.d.s across the components in a series loop add up to the source p.d. 2 V + 4 V matches the 6 V of the battery, every time.',
          },
        ],
      },
    },
    {
      id: 'pe-vr-scene-parallel',
      title: 'A 6 V Battery Across Two Parallel Lamps',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read the voltmeters and see why each branch matches the source p.d.',
      data: {
        viewBox: '0 0 800 400',
        svg: PARALLEL_PD_SVG,
        hotspots: [
          {
            id: 'pe-vr-parallel-cell',
            x: 13,
            y: 45,
            label: 'Source: 6 V',
            description:
              'The cell holds the two ends of the parallel branches at a steady 6 V difference. Both branches start and finish at the same two points.',
          },
          {
            id: 'pe-vr-parallel-branch1',
            x: 28,
            y: 55,
            label: 'Branch 1 voltmeter: 6 V',
            description:
              'The voltmeter across the first lamp reads 6 V. Each coulomb passing through this branch hands 6 J to the lamp.',
          },
          {
            id: 'pe-vr-parallel-branch2',
            x: 76,
            y: 55,
            label: 'Branch 2 voltmeter: 6 V',
            description:
              'The voltmeter across the second lamp also reads 6 V. The two branches are independent paths, but both see the full source p.d.',
          },
          {
            id: 'pe-vr-parallel-rule',
            x: 50,
            y: 92,
            label: 'Rule: each branch sees the source p.d.',
            description:
              'In parallel, the p.d. across every branch equals the p.d. of the source. Nothing is shared out; each branch gets the full push.',
          },
        ],
      },
    },
    {
      id: 'pe-vr-scene-voltmeter-placement',
      title: 'Where the Voltmeter Goes',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare a voltmeter placed correctly in parallel with one placed by mistake in series.',
      data: {
        viewBox: '0 0 800 400',
        svg: VOLTMETER_PLACEMENT_SVG,
        hotspots: [
          {
            id: 'pe-vr-place-good',
            x: 28,
            y: 50,
            label: 'Voltmeter in parallel (correct)',
            description:
              'The voltmeter sits on its own side branch across the lamp. Almost no current flows through it, so it does not disturb the circuit and it reads the p.d. across the lamp.',
          },
          {
            id: 'pe-vr-place-bad',
            x: 80,
            y: 30,
            label: 'Voltmeter in series (not correct)',
            description:
              'Here the voltmeter has been wired into the loop in series. Its very high resistance blocks the current, so the lamp does not light. A voltmeter must never be placed in series with the component.',
          },
          {
            id: 'pe-vr-place-rule',
            x: 50,
            y: 90,
            label: 'Rule of thumb',
            description:
              'An ammeter goes in series, in line with the component, to read current. A voltmeter goes in parallel, across the component, to read p.d. Mixing them up is a common error.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'pe-vr-worked-1',
      title: 'Finding a missing p.d. in a series loop',
      steps: [
        {
          explanation:
            'Read the set-up. A 6 V battery is in a single loop with two lamps. A voltmeter across lamp 1 reads 2 V. We want the p.d. across lamp 2.',
        },
        {
          explanation:
            'State the series voltage rule. The p.d.s across the components in a series loop add up to the source p.d.',
          maths: 'V_source = V_1 + V_2',
        },
        {
          explanation: 'Rearrange to find the unknown p.d. across lamp 2.',
          maths: 'V_2 = V_source - V_1',
        },
        {
          explanation: 'Substitute the numbers.',
          maths: 'V_2 = 6 V - 2 V',
        },
        {
          explanation: 'Evaluate.',
          maths: 'V_2 = 4 V',
        },
        {
          explanation:
            'State the answer and check. The voltmeter across lamp 2 reads 4 V. Adding back: 2 V + 4 V = 6 V, which matches the battery, so the bookkeeping balances.',
        },
      ],
    },
    {
      id: 'pe-vr-worked-2',
      title: 'Reading a parallel branch voltmeter',
      steps: [
        {
          explanation:
            'Read the set-up. A 6 V battery has two lamps wired in parallel, each on its own branch. A voltmeter across branch 1 reads 6 V. We want the voltmeter reading on branch 2.',
        },
        {
          explanation:
            'State the parallel voltage rule. The p.d. across each branch in a parallel network equals the p.d. of the source.',
          maths: 'V_branch = V_source',
        },
        {
          explanation:
            'Apply the rule to branch 2 directly. The source p.d. is 6 V, so the p.d. across branch 2 is also 6 V.',
          maths: 'V_2 = 6 V',
        },
        {
          explanation:
            'State the answer and check. The voltmeter on branch 2 also reads 6 V. Each branch is its own complete loop back to the battery, so each branch picks up the full 6 V of push.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pe-vr-q1',
      type: 'multiple-choice',
      stem: 'A 6 V battery sits in a series loop with two lamps. A voltmeter across lamp 1 reads 2.5 V. What does a voltmeter across lamp 2 read?',
      tier: 'core',
      options: ['2.5 V', '3.5 V', '6 V', '8.5 V'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pe-vr-mis-series-pd-equal',
      hint: 'Series rule: V_source = V_1 + V_2. So V_2 = 6 - 2.5.',
    },
    {
      id: 'pe-vr-q2',
      type: 'numeric-entry',
      stem: 'A 4.5 V battery is in a series loop with two resistors. The voltmeter across resistor A reads 1.2 V. What is the p.d. across resistor B, in V?',
      tier: 'core',
      correctAnswer: 3.3,
      tolerance: 0.05,
      unit: 'V',
      xpValue: 10,
      misconceptionId: 'pe-vr-mis-series-pd-equal',
      hint: 'In a series loop, the two p.d.s add to the source: V_B = 4.5 - 1.2.',
    },
    {
      id: 'pe-vr-q3',
      type: 'numeric-entry',
      stem: 'Two identical lamps are wired in parallel across a 6 V battery. The voltmeter across lamp 1 reads 6 V. What does the voltmeter across lamp 2 read, in V?',
      tier: 'core',
      correctAnswer: 6,
      tolerance: 0.05,
      unit: 'V',
      xpValue: 10,
      misconceptionId: 'pe-vr-mis-parallel-pd-shared',
      hint: 'In parallel, each branch has the same p.d. across it as the source.',
    },
    {
      id: 'pe-vr-q4',
      type: 'numeric-entry',
      stem: 'A torch uses three 1.5 V cells joined into a single battery, with one bulb in series. The voltmeter across the bulb reads the same as the battery. What does the voltmeter read, in V?',
      tier: 'confident',
      correctAnswer: 4.5,
      tolerance: 0.05,
      unit: 'V',
      xpValue: 15,
      hint: 'Three 1.5 V cells in series give 1.5 + 1.5 + 1.5. With only one component, that p.d. sits across it.',
    },
    {
      id: 'pe-vr-q5',
      type: 'numeric-entry',
      stem: 'A 12 V battery is wired in series with three identical resistors. By symmetry the p.d. is shared equally. What is the p.d. across one resistor, in V?',
      tier: 'confident',
      correctAnswer: 4,
      tolerance: 0.05,
      unit: 'V',
      xpValue: 15,
      misconceptionId: 'pe-vr-mis-series-pd-equal',
      hint: 'V_1 + V_2 + V_3 = 12 V. Identical resistors share the p.d. evenly, so each holds 12 ÷ 3.',
    },
    {
      id: 'pe-vr-q6',
      type: 'spot-misconception',
      stem: 'Priya says, "When two bulbs are in parallel across a 6 V battery, the 6 V splits in half, so each bulb sees 3 V."',
      tier: 'confident',
      statements: [
        {
          text: 'Priya is right. The 6 V is shared evenly, so each parallel bulb gets 3 V.',
          isMisconception: true,
        },
        {
          text: 'Priya is not right. Each branch in parallel sees the full source p.d., so each bulb has 6 V across it.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pe-vr-mis-parallel-pd-shared',
    },
    {
      id: 'pe-vr-q7',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is finding the p.d. across a third resistor in a series loop with a 9 V battery, where the first two voltmeters read 2 V and 3 V.',
      tier: 'challenge',
      steps: [
        'Set out the readings: V_source = 9 V, V_1 = 2 V, V_2 = 3 V, V_3 = ?',
        'State the series voltage rule: V_source = V_1 + V_2 + V_3.',
        'Rearrange for V_3 by subtracting the known p.d.s from the source p.d.',
        null,
        'Evaluate: V_3 = 4 V.',
        'State the answer and check: 2 V + 3 V + 4 V = 9 V, which matches the battery, so the rule holds.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Substitute the numbers into the rearranged equation: V_3 = V_source - V_1 - V_2 = 9 - 2 - 3.',
      xpValue: 20,
    },
    {
      id: 'pe-vr-q8',
      type: 'drag-order',
      stem: 'Put the steps in the right order for finding a missing voltmeter reading in a series loop.',
      tier: 'challenge',
      items: [
        'State the answer and check that the p.d.s add back up to the source p.d.',
        'Write the series voltage rule: V_source = V_1 + V_2 + ... for every component in the loop.',
        'Read the known voltmeter readings and the battery p.d. from the diagram.',
        'Rearrange the rule for the unknown p.d. and substitute the known numbers.',
      ],
      correctOrder: [2, 1, 3, 0],
      xpValue: 20,
      hint: 'First gather the readings, then state the rule, then rearrange and substitute, then check.',
    },
    {
      id: 'pe-vr-q9',
      type: 'multiple-choice',
      stem: 'Where does a voltmeter sit when measuring the p.d. across a lamp on the school bench?',
      tier: 'core',
      options: [
        'In parallel with the lamp, on its own short branch across it.',
        'In series with the lamp, on the same wire.',
        'Inside the lamp, behind the cross.',
        'On a separate loop with its own cell.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pe-vr-mis-voltmeter-in-series',
      hint: 'A voltmeter reads across a component, so its two wires touch the lamp on opposite sides.',
    },
    {
      id: 'pe-vr-q10',
      type: 'multiple-choice',
      stem: 'A torch holds three 1.5 V cells stacked nose to tail in series. What is the p.d. of the battery, in V?',
      tier: 'core',
      options: ['1.5 V, the largest single cell.', '3.0 V, two of the cells.', '4.5 V, the three cells added together.', '0 V, because the cells cancel each other.'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pe-vr-mis-cells-not-additive',
      hint: 'Cells joined positive to negative in series add their p.d.s together.',
    },
    {
      id: 'pe-vr-q11',
      type: 'multiple-choice',
      stem: 'Two identical lamps are wired in parallel across a 4.5 V battery. What is the p.d. across each lamp, in V?',
      tier: 'core',
      options: ['2.25 V, half of the source.', '9 V, double the source.', '0 V, because the lamps cancel.', '4.5 V, the full source p.d.'],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'pe-vr-mis-parallel-pd-shared',
      hint: 'In parallel, every branch sees the full source p.d.',
    },
    {
      id: 'pe-vr-q12',
      type: 'multiple-choice',
      stem: 'In a series loop, which of these statements about p.d.s is correct?',
      tier: 'core',
      options: [
        'The p.d. across each component equals the source p.d.',
        'The p.d.s across the components add up to the source p.d.',
        'The p.d.s across the components are always equal to each other.',
        'The p.d.s across the components add up to zero.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pe-vr-mis-series-pd-equal',
      hint: 'Series rule for p.d.: the separate readings add up to the source p.d.',
    },
    {
      id: 'pe-vr-q13',
      type: 'numeric-entry',
      stem: 'A 9 V battery is in a series loop with three identical lamps. The lamps share the p.d. equally. What is the p.d. across one lamp, in V?',
      tier: 'core',
      correctAnswer: 3,
      tolerance: 0.05,
      unit: 'V',
      xpValue: 10,
      hint: 'Three identical lamps split 9 V into three equal shares.',
    },
    {
      id: 'pe-vr-q14',
      type: 'multiple-choice',
      stem: 'A pupil wires a voltmeter directly into the main loop in series with a lamp. What happens?',
      tier: 'confident',
      options: [
        'The lamp glows more brightly because the voltmeter helps.',
        'The lamp behaves normally and the voltmeter reads the current.',
        'The lamp does not light, because the voltmeter has a very high resistance and blocks the loop.',
        'The voltmeter still reads the lamp p.d. correctly.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pe-vr-mis-voltmeter-in-series',
      hint: 'A voltmeter belongs on a side branch in parallel. Put it in series and its very high resistance blocks the current.',
    },
    {
      id: 'pe-vr-q15',
      type: 'multiple-choice',
      stem: 'In a parallel circuit, two branches each have a lamp. A pupil writes: "The branches add their p.d.s to give the source p.d." What is the best response?',
      tier: 'confident',
      options: [
        'They are right. Branch p.d.s add to give the source p.d.',
        'They are right, because parallel works the same as series.',
        'They are not right. Branch p.d.s do not add. Each branch sees the full source p.d. on its own. Branch currents add, not branch p.d.s.',
        'They are not right, but only when the lamps differ.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pe-vr-mis-mixing-current-voltage-rules',
      hint: 'Current adds at parallel junctions; p.d. is the same across each parallel branch.',
    },
    {
      id: 'pe-vr-q16',
      type: 'numeric-entry',
      stem: 'A 6 V battery is in a series loop with two resistors. Resistor A has 2 Ω of resistance and resistor B has 4 Ω. The bigger resistance takes the bigger share of the p.d. and the smaller resistance takes the smaller share, in proportion. What is the p.d. across resistor B, in V?',
      tier: 'confident',
      correctAnswer: 4,
      tolerance: 0.05,
      unit: 'V',
      xpValue: 15,
      misconceptionId: 'pe-vr-mis-equal-split-different-resistors',
      hint: 'The total p.d. is 6 V and the resistances are in the ratio 1 : 2. So the p.d.s are also in the ratio 1 : 2, meaning 2 V and 4 V.',
    },
    {
      id: 'pe-vr-q17',
      type: 'numeric-entry',
      stem: 'A pupil joins two 1.5 V cells in series, but accidentally has the second cell facing the wrong way (positive to positive). The cells now partly cancel. What is the total battery p.d., in V?',
      tier: 'challenge',
      correctAnswer: 0,
      tolerance: 0.05,
      unit: 'V',
      xpValue: 20,
      misconceptionId: 'pe-vr-mis-cells-not-additive',
      hint: 'When the cells face the same way, they add: 1.5 + 1.5. When one is flipped, they subtract: 1.5 - 1.5.',
    },
    {
      id: 'pe-vr-q18',
      type: 'spot-misconception',
      stem: 'Tom says, "In a series loop with two lamps, the current splits between the two lamps, just like the p.d. does."',
      tier: 'challenge',
      statements: [
        {
          text: 'Tom is right. Current splits in series, in the same way p.d. is shared.',
          isMisconception: true,
        },
        {
          text: 'Tom is not right. In series, current is the same at every point in the loop; only the p.d. is shared between the components.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'pe-vr-mis-mixing-current-voltage-rules',
    },
    {
      id: 'pe-vr-q19',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is finding the p.d. across one branch lamp in a parallel circuit with a 9 V battery and three identical lamps wired in parallel.',
      tier: 'challenge',
      steps: [
        'Set out the readings: V_source = 9 V, three identical lamps on three branches in parallel.',
        'State the parallel voltage rule: V_branch = V_source for every branch.',
        null,
        'State the answer: each branch has 9 V across its lamp.',
        'Check: each branch is a separate loop back to the battery, so each branch sees the full source p.d. The number of branches does not change the branch p.d.',
      ],
      missingStepIndex: 2,
      correctStep: 'Apply the rule to each branch directly: V_branch = 9 V, regardless of how many branches there are.',
      xpValue: 20,
      misconceptionId: 'pe-vr-mis-parallel-pd-shared',
    },
    {
      id: 'pe-vr-q20',
      type: 'drag-order',
      stem: 'Put the steps in the right order for finding the p.d. across each lamp in a series loop with four identical lamps and a 6 V battery.',
      tier: 'challenge',
      items: [
        'State the answer: each lamp has 1.5 V across it.',
        'Read off the source p.d. (6 V) and count the identical lamps (4).',
        'State the series rule and the symmetry: identical lamps share the source p.d. equally.',
        'Divide the source p.d. by the number of lamps: V_per_lamp = 6 V / 4 = 1.5 V.',
      ],
      correctOrder: [1, 2, 3, 0],
      xpValue: 20,
      hint: 'Gather the numbers, state the rule, do the arithmetic, then state the answer.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 1F Q3, candidates wrote that the p.d. across each component in a series loop is the same as the source p.d.
    {
      id: 'pe-vr-mis-series-pd-equal',
      description:
        'Believing that every component in a series loop has the same p.d. across it as the source, missing that the source p.d. is shared between the components.',
      triggerAnswer: 'series-pd-equal',
      correction:
        'In a series loop the source p.d. is shared between the components. The separate p.d.s add up to the source p.d., not each one matches it.',
      reExplanation:
        'A 6 V battery in series with two lamps might read 2 V across lamp 1 and 4 V across lamp 2. Add those: 2 + 4 = 6 V, the battery p.d. If both lamps were identical, by symmetry each would read 3 V. The bigger resistance always picks up the bigger share, but the two readings always add back to the source.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2021, Paper 1PH0/1F, candidates wrote that the p.d. across parallel branches is split between them rather than each equalling the source.
    {
      id: 'pe-vr-mis-parallel-pd-shared',
      description:
        'Thinking the source p.d. is shared between parallel branches, missing that each branch sees the full source p.d.',
      triggerAnswer: 'parallel-pd-shared',
      correction:
        'In parallel, every branch sees the full source p.d. The branches share the current, not the p.d.',
      reExplanation:
        'Two lamps wired in parallel across a 6 V battery each have a voltmeter reading of 6 V. That is because both ends of every branch are at the same two points as the battery terminals. The current splits between the branches, but the energy per coulomb pushed across each branch is the same 6 V every time.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2022, J259/02, candidates confused current and voltage rules, applying the current sum-of-branches rule to p.d.s.
    {
      id: 'pe-vr-mis-mixing-current-voltage-rules',
      description:
        'Mixing up the current and voltage rules, for example claiming that the p.d.s in parallel branches add to the source p.d., or that current splits in series.',
      triggerAnswer: 'mixing-current-voltage-rules',
      correction:
        'Current splits at parallel junctions; p.d. is the same across each parallel branch. In series, current is the same everywhere; the p.d.s add to the source.',
      reExplanation:
        'Series rule for p.d.: 2 V + 4 V = 6 V. Parallel rule for p.d.: 6 V on each branch equals 6 V at the source. The pattern flips for current: in series the current is the same in every part, in parallel the branch currents add at the junction. Keep the two rules separate and decide which one fits the circuit type before doing arithmetic.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, Paper 1F, candidates placed a voltmeter in series with a component instead of in parallel across it.
    {
      id: 'pe-vr-mis-voltmeter-in-series',
      description:
        'Drawing or wiring a voltmeter in series with a component, missing that a voltmeter sits on a side branch in parallel.',
      triggerAnswer: 'voltmeter-in-series',
      correction:
        'A voltmeter goes in parallel, across the component being measured. Wiring it in series blocks the current because its resistance is very high.',
      reExplanation:
        'An ammeter goes in line with the component, in series, because it needs the current to flow through it. A voltmeter sits on its own loop across the component, in parallel, because it needs the two ends of the component as its terminals. Put a voltmeter in the main loop by mistake and the lamp simply stops lighting.',
    },
    // Source: CGP KS3 Physics Study Guide p.84 Common mistake box, learners assume cells join in any direction give a battery equal to the largest cell rather than the sum of the cells.
    {
      id: 'pe-vr-mis-cells-not-additive',
      description:
        'Believing the battery p.d. equals the largest cell p.d., missing that cells joined positive to negative in series add their p.d.s together.',
      triggerAnswer: 'cells-not-additive',
      correction:
        'Cells joined positive to negative in series add their p.d.s. Three 1.5 V cells give a 4.5 V battery, not a 1.5 V battery.',
      reExplanation:
        'A torch with three 1.5 V cells in a row gives a battery p.d. of 1.5 + 1.5 + 1.5 = 4.5 V. The cells are stacked nose to tail, so each one adds its push to the next. A 6 V battery is the same idea with four cells. The 230 V mains is much bigger because the source pushes far more energy per coulomb than a few cells can.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 1F Q5, candidates split the source p.d. equally across non-identical series resistors instead of in proportion to resistance.
    {
      id: 'pe-vr-mis-equal-split-different-resistors',
      description:
        'Splitting the source p.d. equally between every series component, even when their resistances differ, missing that the larger resistance takes the larger share in proportion.',
      triggerAnswer: 'equal-split-different-resistors',
      correction:
        'In a series loop the p.d.s still add to the source p.d., but the share is in proportion to resistance. A larger resistor takes a larger share; only identical components split equally.',
      reExplanation:
        'A 6 V battery in series with a 2 Ω resistor and a 4 Ω resistor has the same current through both, but the larger resistor needs the larger p.d. to push that same current through. So the readings are 2 V and 4 V, not 3 V and 3 V. They still add to 6 V. If the two resistors were equal, the share would be equal at 3 V each.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const electricityVoltageRulesZoneNodes = [electricityVoltageRules]
