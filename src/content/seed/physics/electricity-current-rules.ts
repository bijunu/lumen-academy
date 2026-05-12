import type { SkillNode } from '@/types/content'

const SERIES_AMMETERS_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Series loop: the same current at every point</text>

    <!-- Outer rectangular loop -->
    <line x1="120" y1="100" x2="680" y2="100" />
    <line x1="680" y1="100" x2="680" y2="320" />
    <line x1="680" y1="320" x2="120" y2="320" />
    <line x1="120" y1="320" x2="120" y2="100" />

    <!-- Cell on the left wire -->
    <line x1="98" y1="200" x2="142" y2="200" />
    <line x1="110" y1="218" x2="130" y2="218" stroke-width="7" />

    <!-- Lamp 1 on the top wire near the left -->
    <circle cx="260" cy="100" r="22" />
    <line x1="244" y1="84" x2="276" y2="116" />
    <line x1="244" y1="116" x2="276" y2="84" />

    <!-- Lamp 2 on the top wire near the right -->
    <circle cx="540" cy="100" r="22" />
    <line x1="524" y1="84" x2="556" y2="116" />
    <line x1="524" y1="116" x2="556" y2="84" />

    <!-- Ammeter A1 between cell and lamp 1 -->
    <circle cx="180" cy="100" r="20" />
    <text x="180" y="108" text-anchor="middle" font-size="20" font-weight="700" stroke="none" fill="currentColor">A</text>
    <text x="180" y="68" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">A1 = 0.30 A</text>

    <!-- Ammeter A2 between the two lamps -->
    <circle cx="400" cy="100" r="20" />
    <text x="400" y="108" text-anchor="middle" font-size="20" font-weight="700" stroke="none" fill="currentColor">A</text>
    <text x="400" y="68" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">A2 = 0.30 A</text>

    <!-- Ammeter A3 between lamp 2 and the corner -->
    <circle cx="620" cy="100" r="20" />
    <text x="620" y="108" text-anchor="middle" font-size="20" font-weight="700" stroke="none" fill="currentColor">A</text>
    <text x="620" y="68" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">A3 = 0.30 A</text>

    <!-- Ammeter A4 on the return wire at the bottom -->
    <circle cx="400" cy="320" r="20" />
    <text x="400" y="328" text-anchor="middle" font-size="20" font-weight="700" stroke="none" fill="currentColor">A</text>
    <text x="400" y="360" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">A4 = 0.30 A</text>

    <text x="400" y="395" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Rule: in a series loop, every ammeter reads the same current.</text>
  </g>
`

const PARALLEL_JUNCTION_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Parallel junction: branch currents add to the main current</text>

    <!-- Main left wire from cell to junction -->
    <line x1="80" y1="200" x2="200" y2="200" />
    <line x1="92" y1="186" x2="112" y2="186" />
    <line x1="98" y1="170" x2="106" y2="170" stroke-width="7" />

    <!-- Ammeter A_main on the main wire -->
    <circle cx="240" cy="200" r="22" />
    <text x="240" y="208" text-anchor="middle" font-size="20" font-weight="700" stroke="none" fill="currentColor">A</text>
    <text x="240" y="170" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">A_main = 1.0 A</text>

    <!-- Wire continuing to the junction -->
    <line x1="262" y1="200" x2="360" y2="200" />

    <!-- Junction dot -->
    <circle cx="360" cy="200" r="6" fill="currentColor" />

    <!-- Branch 1 goes up -->
    <line x1="360" y1="200" x2="360" y2="120" />
    <line x1="360" y1="120" x2="500" y2="120" />

    <!-- Ammeter A1 on branch 1 -->
    <circle cx="540" cy="120" r="20" />
    <text x="540" y="128" text-anchor="middle" font-size="20" font-weight="700" stroke="none" fill="currentColor">A</text>
    <text x="540" y="92" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">A1 = 0.6 A</text>

    <!-- Lamp on branch 1 -->
    <line x1="560" y1="120" x2="600" y2="120" />
    <circle cx="624" cy="120" r="22" />
    <line x1="608" y1="104" x2="640" y2="136" />
    <line x1="608" y1="136" x2="640" y2="104" />
    <line x1="646" y1="120" x2="700" y2="120" />

    <!-- Branch 2 goes down -->
    <line x1="360" y1="200" x2="360" y2="280" />
    <line x1="360" y1="280" x2="500" y2="280" />

    <!-- Ammeter A2 on branch 2 -->
    <circle cx="540" cy="280" r="20" />
    <text x="540" y="288" text-anchor="middle" font-size="20" font-weight="700" stroke="none" fill="currentColor">A</text>
    <text x="540" y="316" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">A2 = 0.4 A</text>

    <!-- Lamp on branch 2 -->
    <line x1="560" y1="280" x2="600" y2="280" />
    <circle cx="624" cy="280" r="22" />
    <line x1="608" y1="264" x2="640" y2="296" />
    <line x1="608" y1="296" x2="640" y2="264" />
    <line x1="646" y1="280" x2="700" y2="280" />

    <!-- Return wires to the right rail -->
    <line x1="700" y1="120" x2="700" y2="280" />
    <line x1="700" y1="200" x2="760" y2="200" />
    <line x1="760" y1="200" x2="760" y2="360" />
    <line x1="760" y1="360" x2="80" y2="360" />
    <line x1="80" y1="360" x2="80" y2="200" />

    <text x="400" y="395" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">A1 + A2 = 0.6 + 0.4 = 1.0 A, which matches A_main.</text>
  </g>
`

const JUNCTION_BALANCE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Charge in equals charge out at a junction</text>

    <!-- Central junction -->
    <circle cx="400" cy="200" r="10" fill="currentColor" />

    <!-- Wire 1 coming in from the left -->
    <line x1="80" y1="200" x2="390" y2="200" />
    <polygon points="240,192 256,200 240,208" fill="currentColor" stroke="none" />
    <text x="180" y="180" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">In: 1.2 A</text>

    <!-- Wire 2 going out up -->
    <line x1="400" y1="190" x2="400" y2="80" />
    <polygon points="392,120 400,104 408,120" fill="currentColor" stroke="none" />
    <text x="450" y="110" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Out: 0.5 A</text>

    <!-- Wire 3 going out to the right -->
    <line x1="410" y1="200" x2="720" y2="200" />
    <polygon points="560,192 576,200 560,208" fill="currentColor" stroke="none" />
    <text x="620" y="180" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Out: 0.7 A</text>

    <text x="400" y="280" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Total in = 1.2 A</text>
    <text x="400" y="304" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Total out = 0.5 + 0.7 = 1.2 A</text>
    <text x="400" y="340" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Charge is not used up at the junction. It splits between the branches.</text>
    <text x="400" y="365" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Whatever flows in must flow out somewhere.</text>
  </g>
`

export const electricityCurrentRules: SkillNode = {
  id: 'physics-electricity-current-rules',
  title: 'Current Rules in Series and Parallel',
  description:
    'Read ammeters around a circuit and apply the two current rules: in a series loop the current is the same at every point, and at a parallel junction the branch currents add up to the main current. Current is the flow of charge, measured in amperes. Charge is conserved at any junction, so what flows in must flow out. A lamp does not "use up" the current; only the energy carried by the charges is transferred. Practise reading A1, A2 and main-line ammeters in torch and bedroom-light circuits, and check that the branch totals balance.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-electricity-circuits',
  zoneName: 'Electricity and Circuits',
  tier: 'confident',
  prerequisites: ['physics-electricity-series-parallel'],
  curriculum: {
    ks3Objective:
      'Electric current, measured in amperes, in circuits, series and parallel circuits, currents add where branches meet and current as flow of charge.',
    awardingBodies: {
      aqa: '4.2.1.4 Series and parallel circuits; current is the same at every point in a series circuit and the total current is the sum of the currents through separate parallel branches (GCSE Physics 8463)',
      edexcel:
        'Topic 2.5 Currents in series and parallel circuits; sum of currents at a junction (GCSE Physics 1PH0)',
      ocr: 'P4.2 Current rules in series and parallel circuits; conservation of charge at a junction (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'pe-cr-scene-series-ammeters',
      title: 'Four Ammeters Around a Series Loop',
      type: 'labelled-diagram',
      instructions:
        'Click each ammeter in turn to read its current and see that the series rule holds everywhere on the loop.',
      data: {
        viewBox: '0 0 800 400',
        svg: SERIES_AMMETERS_SVG,
        hotspots: [
          {
            id: 'pe-cr-series-a1',
            x: 22,
            y: 17,
            label: 'A1 = 0.30 A (just after the cell)',
            description:
              'The first ammeter, between the cell and the first lamp, reads 0.30 A. This is the current leaving the cell on its way round the loop.',
          },
          {
            id: 'pe-cr-series-a2',
            x: 50,
            y: 17,
            label: 'A2 = 0.30 A (between the two lamps)',
            description:
              'The second ammeter sits between the two lamps. There is still only one path round, so it reads exactly the same current as A1.',
          },
          {
            id: 'pe-cr-series-a3',
            x: 77,
            y: 17,
            label: 'A3 = 0.30 A (after the second lamp)',
            description:
              'The third ammeter sits just after the second lamp. The lamps do not use up the current; they only transfer energy. So A3 still reads 0.30 A.',
          },
          {
            id: 'pe-cr-series-a4',
            x: 50,
            y: 80,
            label: 'A4 = 0.30 A (return wire)',
            description:
              'The fourth ammeter sits on the return wire, heading back to the cell. The current returning to the cell equals the current that left it. Charge is not lost on the way round.',
          },
          {
            id: 'pe-cr-series-rule',
            x: 50,
            y: 95,
            label: 'Series rule: same current everywhere',
            description:
              'In any series loop, every ammeter reads the same current. A series ammeter is just a probe; it does not matter where on the loop you place it.',
          },
        ],
      },
    },
    {
      id: 'pe-cr-scene-parallel-junction',
      title: 'A Parallel Junction with Two Branches',
      type: 'labelled-diagram',
      instructions:
        'Click each ammeter to read the main current and the two branch currents, and check that the branches add to the main.',
      data: {
        viewBox: '0 0 800 400',
        svg: PARALLEL_JUNCTION_SVG,
        hotspots: [
          {
            id: 'pe-cr-parallel-main',
            x: 30,
            y: 50,
            label: 'A_main = 1.0 A (main wire)',
            description:
              'The ammeter on the main wire, between the cell and the junction, reads 1.0 A. This is the total current leaving the cell.',
          },
          {
            id: 'pe-cr-parallel-junction',
            x: 45,
            y: 50,
            label: 'Junction',
            description:
              'A junction is a point where the wire splits or rejoins. Here the main wire splits into two branches that each run to a lamp.',
          },
          {
            id: 'pe-cr-parallel-a1',
            x: 67,
            y: 30,
            label: 'A1 = 0.6 A (branch 1)',
            description:
              'The ammeter on branch 1 reads 0.6 A. This is the part of the main current that takes the upper path.',
          },
          {
            id: 'pe-cr-parallel-a2',
            x: 67,
            y: 70,
            label: 'A2 = 0.4 A (branch 2)',
            description:
              'The ammeter on branch 2 reads 0.4 A. Branch 1 plus branch 2 is 0.6 + 0.4 = 1.0 A, which matches A_main.',
          },
          {
            id: 'pe-cr-parallel-rule',
            x: 50,
            y: 95,
            label: 'Junction rule: branches add to the main',
            description:
              'At any parallel junction, the branch currents add up to the main current. The main current splits between the branches in whatever shares the branches need.',
          },
        ],
      },
    },
    {
      id: 'pe-cr-scene-junction-balance',
      title: 'Charge In Equals Charge Out',
      type: 'labelled-diagram',
      instructions:
        'Click each wire to see how the charges flowing in and out of one junction must balance.',
      data: {
        viewBox: '0 0 800 400',
        svg: JUNCTION_BALANCE_SVG,
        hotspots: [
          {
            id: 'pe-cr-balance-in',
            x: 23,
            y: 45,
            label: '1.2 A flowing in',
            description:
              'A wire on the left brings 1.2 A of current into the junction. Current is the flow of charge, so 1.2 coulombs of charge arrive every second.',
          },
          {
            id: 'pe-cr-balance-out-up',
            x: 56,
            y: 28,
            label: '0.5 A flowing out',
            description:
              'One branch carries 0.5 A out of the junction, heading upwards in this diagram.',
          },
          {
            id: 'pe-cr-balance-out-right',
            x: 78,
            y: 45,
            label: '0.7 A flowing out',
            description:
              'The other branch carries 0.7 A out of the junction, heading to the right.',
          },
          {
            id: 'pe-cr-balance-totals',
            x: 50,
            y: 75,
            label: 'Total in = total out',
            description:
              'Total flowing in is 1.2 A. Total flowing out is 0.5 + 0.7 = 1.2 A. Charge is not stored or destroyed at the junction. Every charge that arrives leaves down one of the branches.',
          },
          {
            id: 'pe-cr-balance-rule',
            x: 50,
            y: 92,
            label: 'Junction rule, written cleanly',
            description:
              'For any junction: sum of branch currents in equals sum of branch currents out. This is the conservation of charge in action.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'pe-cr-worked-1',
      title: 'A series loop with three ammeters',
      steps: [
        {
          explanation:
            'Set out the situation. A torch circuit has one cell, two lamps and three ammeters: A1 just after the cell, A2 between the two lamps, and A3 on the return wire. Ammeter A1 reads 0.25 A. We want the readings on A2 and A3.',
        },
        {
          explanation:
            'Identify the type of circuit. There is one loop and no junction, so this is a series circuit.',
        },
        {
          explanation:
            'Recall the series rule. In a series loop, the current is the same at every point.',
          maths: 'A1 = A2 = A3',
        },
        {
          explanation:
            'Substitute the known value. A1 reads 0.25 A, so the other two ammeters must read the same.',
          maths: 'A2 = 0.25 A, A3 = 0.25 A',
        },
        {
          explanation:
            'State the answer. A2 reads 0.25 A and A3 reads 0.25 A. The lamps do not use up the current; they transfer energy from the charges, but the charges themselves keep flowing round the loop.',
        },
      ],
    },
    {
      id: 'pe-cr-worked-2',
      title: 'A parallel junction with one missing branch reading',
      steps: [
        {
          explanation:
            'Set out the situation. A bedroom light circuit has a main wire that splits at a junction into two branches. Ammeter A_main on the main wire reads 1.2 A. Ammeter A1 on branch 1 reads 0.8 A. We want the reading on A2 on branch 2.',
        },
        {
          explanation:
            'Identify the type of circuit at this point. The wire splits into two branches, so this is a parallel junction.',
        },
        {
          explanation:
            'Recall the junction rule. The branch currents add up to the main current.',
          maths: 'A_main = A1 + A2',
        },
        {
          explanation: 'Rearrange the equation to find A2 on its own.',
          maths: 'A2 = A_main - A1',
        },
        {
          explanation: 'Substitute the numbers.',
          maths: 'A2 = 1.2 A - 0.8 A',
        },
        {
          explanation: 'Evaluate the subtraction.',
          maths: 'A2 = 0.4 A',
        },
        {
          explanation:
            'State the answer and check. Branch 2 carries 0.4 A. Branch 1 plus branch 2 is 0.8 + 0.4 = 1.2 A, which matches the main current. The branches must always add to the main.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pe-cr-q1',
      type: 'multiple-choice',
      stem: 'Which sentence states the rule for current in a series circuit?',
      tier: 'core',
      options: [
        'The current is largest near the cell and smaller near the far end of the loop.',
        'The current splits equally between every component in the loop.',
        'The current is the same at every point in the loop.',
        'The current is zero anywhere away from a lamp.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pe-cr-mis-current-used-up',
      hint: 'In a single loop, there is only one path for the charges to take.',
    },
    {
      id: 'pe-cr-q2',
      type: 'multiple-choice',
      stem: 'Which sentence states the rule for current at a junction in a parallel circuit?',
      tier: 'core',
      options: [
        'The main current is split equally between every branch.',
        'The branch currents add up to the main current at the junction.',
        'The main current is the largest branch current only.',
        'The branches each carry the same current as the main wire.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pe-cr-mis-junction-equal-split',
      hint: 'Charge does not vanish at the junction. What flows in must flow out.',
    },
    {
      id: 'pe-cr-q3',
      type: 'numeric-entry',
      stem: 'A torch has one cell and two lamps wired in series on a single loop. An ammeter A1 just after the cell reads 0.30 A. What does ammeter A2, placed between the two lamps on the same loop, read in amperes?',
      tier: 'core',
      correctAnswer: 0.3,
      tolerance: 0.001,
      unit: 'A',
      xpValue: 10,
      misconceptionId: 'pe-cr-mis-current-used-up',
      hint: 'There is only one path round a series loop, so the ammeters all read the same.',
    },
    {
      id: 'pe-cr-q4',
      type: 'numeric-entry',
      stem: 'A parallel circuit has a main wire that splits into two branches. The main ammeter reads 1.2 A. Branch 1 reads 0.8 A. What does branch 2 read in amperes?',
      tier: 'core',
      correctAnswer: 0.4,
      tolerance: 0.001,
      unit: 'A',
      xpValue: 10,
      misconceptionId: 'pe-cr-mis-junction-equal-split',
      hint: 'Branch 1 plus branch 2 must add to the main current. Subtract branch 1 from the main.',
    },
    {
      id: 'pe-cr-q5',
      type: 'multiple-choice',
      stem: 'A pupil writes, "When a lamp in a series circuit shines, it uses up some of the current." Which response is correct?',
      tier: 'core',
      options: [
        'Correct, the lamp uses up current and the next ammeter shows less.',
        'Correct, but only for the first lamp on the loop.',
        'Not correct. The lamp transfers energy from the charges, but the charges keep flowing. The current is the same on both sides of the lamp.',
        'Not correct, because a lamp does not change the current or the energy.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pe-cr-mis-current-used-up',
      hint: 'Charge is conserved. The lamp transfers energy, not charge.',
    },
    {
      id: 'pe-cr-q6',
      type: 'numeric-entry',
      stem: 'A series loop has three lamps and an ammeter on the return wire reading 0.45 A. What does an ammeter placed between the second and third lamp on the same loop read in amperes?',
      tier: 'core',
      correctAnswer: 0.45,
      tolerance: 0.001,
      unit: 'A',
      xpValue: 10,
      hint: 'Series rule: every ammeter on the loop reads the same.',
    },
    {
      id: 'pe-cr-q7',
      type: 'multiple-choice',
      stem: 'A junction in a circuit has 0.9 A flowing in along one wire. Two branches carry the charge away. Branch 1 has 0.3 A flowing out. What flows out along branch 2?',
      tier: 'core',
      options: ['0.6 A', '0.3 A', '0.9 A', '1.2 A'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pe-cr-mis-junction-equal-split',
      hint: 'Total in equals total out. 0.9 - 0.3 = ?',
    },
    {
      id: 'pe-cr-q8',
      type: 'numeric-entry',
      stem: 'In a parallel circuit, the main ammeter reads 0.75 A. The two branches carry equal currents. What does each branch carry in amperes?',
      tier: 'confident',
      correctAnswer: 0.375,
      tolerance: 0.001,
      unit: 'A',
      xpValue: 15,
      hint: 'Equal branches share the main current evenly. 0.75 / 2 = ?',
    },
    {
      id: 'pe-cr-q9',
      type: 'multiple-choice',
      stem: 'Three identical lamps sit in series with one cell. The ammeter near the cell reads 0.20 A. A pupil says the ammeter on the return wire should read 0.60 A because there are three lamps. What is the best reply?',
      tier: 'confident',
      options: [
        'The pupil is right. Each lamp gives extra current to the return wire.',
        'The pupil is right. Three lamps mean three lots of current.',
        'The pupil is not right. The series rule says the current is the same at every point in the loop, so the return wire also reads 0.20 A.',
        'The pupil is not right, because the return wire reads zero.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pe-cr-mis-current-counts-components',
      hint: 'Number of lamps does not add to the current. The current is set by the cell and the resistance of the loop.',
    },
    {
      id: 'pe-cr-q10',
      type: 'numeric-entry',
      stem: 'A parallel circuit has three branches at one junction. Branch 1 carries 0.20 A, branch 2 carries 0.35 A, and branch 3 carries 0.15 A. What does an ammeter on the main wire just before the junction read in amperes?',
      tier: 'confident',
      correctAnswer: 0.7,
      tolerance: 0.001,
      unit: 'A',
      xpValue: 15,
      misconceptionId: 'pe-cr-mis-charge-created-junction',
      hint: 'Charge is conserved at the junction. Add the branch currents together to get the main current.',
    },
    {
      id: 'pe-cr-q11',
      type: 'multiple-choice',
      stem: 'In a parallel circuit, branch 1 has a lamp and branch 2 has a buzzer. A pupil thinks the main current must be the same as the lamp branch current, because the lamp is the brightest part. Which response is best?',
      tier: 'confident',
      options: [
        'The pupil is right; the brightest branch sets the main current.',
        'The pupil is not right. The main current is the sum of all branch currents, not just one of them.',
        'The pupil is right, because the lamp uses more charge.',
        'The pupil is not right, because the main current is always smaller than any branch.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'pe-cr-mis-main-equals-largest-branch',
      hint: 'Apply the junction rule: A_main = A1 + A2.',
    },
    {
      id: 'pe-cr-q12',
      type: 'spot-misconception',
      stem: 'Asha says, "In a series circuit with two lamps, the lamp closest to the cell gets the most current, and the second lamp gets less because the first one has used some up."',
      tier: 'confident',
      statements: [
        {
          text: 'Asha is right. The first lamp uses some current, leaving less for the second.',
          isMisconception: true,
        },
        {
          text: 'Asha is not right. The current is the same at every point in a series loop. The lamps share the energy carried by the charges, but the charges themselves are not used up.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pe-cr-mis-current-used-up',
    },
    {
      id: 'pe-cr-q13',
      type: 'numeric-entry',
      stem: 'A bedroom lighting circuit has a main current of 0.84 A. The current splits at a junction into two branches. Branch 1 carries 0.52 A. How much does branch 2 carry, in amperes?',
      tier: 'confident',
      correctAnswer: 0.32,
      tolerance: 0.001,
      unit: 'A',
      xpValue: 15,
      hint: 'A_main = A1 + A2. So A2 = 0.84 - 0.52.',
    },
    {
      id: 'pe-cr-q14',
      type: 'multiple-choice',
      stem: 'A series circuit has an ammeter A1 reading 0.50 A, between the cell and a lamp. The lamp is now removed and a second identical lamp is added so two lamps sit in series in the same loop. A new reading is taken at A1. Which sentence is most accurate?',
      tier: 'confident',
      options: [
        'A1 still reads 0.50 A because the cell does not change.',
        'A1 may read less than 0.50 A because the second lamp adds resistance, but A1 still equals the current at every other point in the loop.',
        'A1 reads exactly 0.25 A because the two lamps share the current equally.',
        'A1 reads 1.00 A because two lamps need twice the current.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'pe-cr-mis-current-counts-components',
      hint: 'Adding a lamp adds resistance, so the current drops. But the series rule still holds: every point on the loop reads the same.',
    },
    {
      id: 'pe-cr-q15',
      type: 'multiple-choice',
      stem: 'A pupil writes, "Current and energy are the same thing in a circuit, so if a lamp uses energy then the current after the lamp must be smaller." Which response is most accurate?',
      tier: 'confident',
      options: [
        'The pupil is right. Energy and current are the same quantity, both measured in amperes.',
        'The pupil is right, but only for series circuits.',
        'The pupil is not right. Current is the flow of charge in amperes, and energy is what the charges carry. A lamp can transfer energy from the charges while the current stays the same.',
        'The pupil is not right, because a lamp does not transfer any energy.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pe-cr-mis-current-is-energy',
      hint: 'Current and energy are different quantities with different units. Charges carry energy, but they keep flowing.',
    },
    {
      id: 'pe-cr-q16',
      type: 'drag-order',
      stem: 'Put the steps in the right order for finding a missing branch current at a parallel junction.',
      tier: 'challenge',
      items: [
        'State the answer in amperes and check that the branch currents add to the main current.',
        'Read the main current and the known branch current from the ammeters.',
        'Write the junction rule, A_main = A1 + A2.',
        'Rearrange for the unknown branch and substitute the known values.',
      ],
      correctOrder: [1, 2, 3, 0],
      xpValue: 20,
      hint: 'Read the meters first, write the rule, rearrange for the unknown, then state and check.',
    },
    {
      id: 'pe-cr-q17',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is finding the third branch current at a junction where the main current is 1.20 A, branch 1 is 0.45 A, and branch 2 is 0.30 A.',
      tier: 'challenge',
      steps: [
        'Set out the readings: A_main = 1.20 A, A1 = 0.45 A, A2 = 0.30 A, A3 = ?',
        'State the junction rule: branch currents add to the main, so A_main = A1 + A2 + A3.',
        'Rearrange to find the unknown branch: A3 = A_main - A1 - A2.',
        null,
        'Evaluate: A3 = 1.20 - 0.75 = 0.45 A.',
        'State the answer: branch 3 carries 0.45 A. Check: 0.45 + 0.30 + 0.45 = 1.20 A, which matches A_main.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Substitute the numbers into the rearranged equation: A3 = 1.20 - 0.45 - 0.30.',
      xpValue: 20,
    },
    {
      id: 'pe-cr-q18',
      type: 'numeric-entry',
      stem: 'A lighting board in a London flat has a main wire splitting into three branches at the consumer unit. The kitchen branch carries 1.6 A, the lounge branch carries 0.9 A, and the bedroom branch carries 0.5 A. What is the main current, in amperes?',
      tier: 'challenge',
      correctAnswer: 3.0,
      tolerance: 0.01,
      unit: 'A',
      xpValue: 20,
      hint: 'Add the three branch currents together. A_main = A1 + A2 + A3.',
    },
    {
      id: 'pe-cr-q19',
      type: 'multiple-choice',
      stem: 'Two pupils set up a circuit with one cell and two identical lamps in parallel. Each lamp branch has its own ammeter; both read 0.30 A. A third ammeter sits on the main wire near the cell. They then add a third identical lamp on a new branch in parallel. Which sentence is most accurate about the main ammeter reading?',
      tier: 'challenge',
      options: [
        'The main ammeter still reads 0.30 A because the cell has not changed.',
        'The main ammeter reads 0.10 A because adding a branch divides the current by three.',
        'The main ammeter reads zero because the cell cannot supply three lamps.',
        'The main ammeter reads more than before; each lamp branch carries roughly 0.30 A, so the main current is roughly 0.90 A.',
      ],
      correctIndex: 3,
      xpValue: 20,
      misconceptionId: 'pe-cr-mis-main-equals-largest-branch',
      hint: 'Each branch with an identical lamp draws about the same current. The main current is the sum of all branches.',
    },
    {
      id: 'pe-cr-q20',
      type: 'spot-misconception',
      stem: 'Ben says, "When a wire splits into two branches at a junction, the current always splits in half, because there are two ways for the charges to go."',
      tier: 'challenge',
      statements: [
        {
          text: 'Ben is right. A junction always splits the current evenly.',
          isMisconception: true,
        },
        {
          text: 'Ben is not right. The branches add up to the main current, but they do not always carry equal currents. A branch with less resistance takes a larger share.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'pe-cr-mis-junction-equal-split',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 1F Q03, candidates often wrote that a bulb in a series circuit "uses up" some of the current, leaving less for the next component.
    {
      id: 'pe-cr-mis-current-used-up',
      description:
        'Believing that a lamp or other component in a series circuit uses up some of the current, so the current is smaller after the component than before.',
      triggerAnswer: 'current-used-up',
      correction:
        'Actually, the current is the same at every point in a series loop. A lamp transfers energy from the charges, but the charges keep flowing; they are not used up.',
      reExplanation:
        'Picture the loop as a chain of cyclists pedalling round a track. The cyclists are the charges. A lamp is a hill; the cyclists slow as they climb and transfer energy, but the same number of cyclists per second pass every point on the track. An ammeter counts how many cyclists per second pass it, so every ammeter on a single loop reads the same. Take out a lamp and the loop breaks; nothing flows at all.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2019, Paper 1PH0/1F Q06, candidates split the main current equally between branches regardless of resistance.
    {
      id: 'pe-cr-mis-junction-equal-split',
      description:
        'Assuming that at a parallel junction the main current always splits equally between the branches, no matter what is on each branch.',
      triggerAnswer: 'junction-equal-split',
      correction:
        'In fact, the branch currents only have to add up to the main current. The split depends on the resistance of each branch, so a branch with less resistance takes a larger share.',
      reExplanation:
        'Imagine the main current as 1.0 A of water flowing into a Y-shaped pipe. If one branch is wide and the other narrow, more water flows down the wide branch. In a circuit, "wide" means lower resistance. Two identical lamps split the current evenly, but a thick lamp on branch 1 with a thin lamp on branch 2 might give 0.7 A on branch 1 and 0.3 A on branch 2. The two always sum to 1.0 A.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2021, Paper J259/02 Q05, candidates wrote that adding more lamps to a series loop adds to the current at later points.
    {
      id: 'pe-cr-mis-current-counts-components',
      description:
        'Treating the current as something that grows or shrinks with the number of components in a series loop, as if each lamp adds or removes its own current.',
      triggerAnswer: 'current-counts-components',
      correction:
        'Actually, the current in a series loop is set by the cell and the total resistance of the loop, not by counting the lamps. Every ammeter on the loop reads the same value.',
      reExplanation:
        'Adding a lamp to a series loop adds resistance, so the cell pushes a smaller current round the whole loop. The new current is smaller than before, but the series rule still holds: every ammeter on the loop reads the same new value. The number of lamps does not add to the current; it changes the single shared current that flows everywhere in the loop.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, Paper 1F Q08, candidates picked the largest branch current as the main current, missing that the main current is the sum of all branch currents.
    {
      id: 'pe-cr-mis-main-equals-largest-branch',
      description:
        'Saying that the main current at a parallel junction equals the largest of the branch currents, not the sum of all the branches.',
      triggerAnswer: 'main-equals-largest-branch',
      correction:
        'Actually, the main current is the sum of every branch current at the junction. Even small branches add their share to the main.',
      reExplanation:
        'Think of a busy crossroads. Three roads feed in 40, 30 and 15 cars per minute. The single outgoing road must carry 40 + 30 + 15 = 85 cars per minute. Picking the biggest feeder of 40 misses the cars from the other two. The junction rule for current works the same way: every branch contributes, and the main current is the total of all of them.',
    },
    // Source: CGP KS3 Science Study Guide (Year 7 to 9), Electricity chapter, "Common mistake" box on confusing current and energy in lamps.
    {
      id: 'pe-cr-mis-current-is-energy',
      description:
        'Treating the current and the energy in a circuit as the same thing, so that when a lamp uses energy, current is also lost.',
      triggerAnswer: 'current-is-energy',
      correction:
        'In fact, current is the flow of charge in amperes, and energy is what the charges carry to the components. A lamp can transfer a lot of energy without changing the current at all.',
      reExplanation:
        'Imagine the charges as delivery vans carrying parcels round a one-way road. The current is the number of vans per second passing a point; the energy is the parcels inside the vans. A lamp unloads parcels from each van, but the vans keep going round, so the count of vans per second stays the same. After the lamp, the vans are empty of energy, but the current is the same value as before.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2018, Paper 1PH0/2F Q04, candidates treated charge as being created or destroyed at a parallel junction.
    {
      id: 'pe-cr-mis-charge-created-junction',
      description:
        'Believing that charge can be created or stored at a junction, so the branch currents do not have to add up to the main current.',
      triggerAnswer: 'charge-created-junction',
      correction:
        'Actually, charge is conserved at every junction. Whatever charge flows in must flow out, so the branch currents always sum to the main current.',
      reExplanation:
        'A junction is just a place where wires meet. It cannot hold extra charges, and it cannot make new ones. If 1.0 A flows into a junction and one branch takes 0.6 A out, the other branch must take exactly 0.4 A out, so the total leaving equals 1.0 A. This balance is what we call the junction rule, and it is a direct result of conservation of charge.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const electricityCurrentRulesZoneNodes = [electricityCurrentRules]
