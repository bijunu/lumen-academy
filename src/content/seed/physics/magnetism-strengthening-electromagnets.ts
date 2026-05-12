import type { SkillNode } from '@/types/content'

const ELECTROMAGNET_BENCH_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">School-lab electromagnet: coil on a soft iron nail</text>

    <!-- Bench surface -->
    <line x1="40" y1="320" x2="760" y2="320" stroke-width="2" />
    <text x="400" y="345" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">lab bench</text>

    <!-- Iron nail (the core) -->
    <polygon points="220,260 480,260 480,290 220,290 200,275" />
    <text x="350" y="280" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">soft iron nail (core)</text>

    <!-- Coil loops drawn as alternating top arcs over the nail -->
    <path d="M 240 260 A 10 16 0 0 1 240 290" />
    <path d="M 265 260 A 10 16 0 0 1 265 290" />
    <path d="M 290 260 A 10 16 0 0 1 290 290" />
    <path d="M 315 260 A 10 16 0 0 1 315 290" />
    <path d="M 340 260 A 10 16 0 0 1 340 290" />
    <path d="M 365 260 A 10 16 0 0 1 365 290" />
    <path d="M 390 260 A 10 16 0 0 1 390 290" />
    <path d="M 415 260 A 10 16 0 0 1 415 290" />
    <path d="M 440 260 A 10 16 0 0 1 440 290" />
    <path d="M 465 260 A 10 16 0 0 1 465 290" />
    <text x="350" y="240" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">insulated copper wire wound round the nail</text>

    <!-- Wires out to battery + switch -->
    <line x1="240" y1="260" x2="240" y2="180" />
    <line x1="240" y1="180" x2="140" y2="180" />
    <line x1="465" y1="260" x2="465" y2="180" />
    <line x1="465" y1="180" x2="620" y2="180" />

    <!-- Battery (two 1.5 V cells in series) -->
    <line x1="140" y1="160" x2="140" y2="200" stroke-width="3" />
    <line x1="130" y1="165" x2="130" y2="195" />
    <line x1="115" y1="160" x2="115" y2="200" stroke-width="3" />
    <line x1="105" y1="165" x2="105" y2="195" />
    <text x="120" y="220" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">two 1.5 V cells</text>
    <text x="120" y="235" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">(3 V total)</text>
    <line x1="105" y1="180" x2="80" y2="180" />
    <line x1="80" y1="180" x2="80" y2="120" />
    <line x1="80" y1="120" x2="620" y2="120" />
    <line x1="620" y1="120" x2="620" y2="160" />

    <!-- Switch -->
    <circle cx="620" cy="160" r="3" fill="currentColor" />
    <circle cx="620" cy="180" r="3" fill="currentColor" />
    <line x1="620" y1="160" x2="640" y2="140" stroke-width="2.5" />
    <text x="660" y="160" text-anchor="start" font-size="11" stroke="none" fill="currentColor">switch</text>
    <text x="660" y="176" text-anchor="start" font-size="10" stroke="none" fill="currentColor">(close to send current)</text>

    <!-- Paper clips dangling from one end -->
    <line x1="200" y1="290" x2="200" y2="310" />
    <ellipse cx="200" cy="310" rx="8" ry="3" />
    <line x1="200" y1="313" x2="200" y2="318" />

    <text x="400" y="80" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Three things make it stronger: more turns, bigger current, soft iron core.</text>
  </g>
`

const THREE_FACTORS_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Three ways to strengthen an electromagnet</text>

    <!-- Row 1: more turns -->
    <text x="60" y="100" text-anchor="start" font-size="13" font-weight="700" stroke="none" fill="currentColor">1. More turns of wire</text>
    <rect x="290" y="86" width="140" height="22" />
    <path d="M 300 86 A 6 11 0 0 1 300 108" />
    <path d="M 320 86 A 6 11 0 0 1 320 108" />
    <path d="M 340 86 A 6 11 0 0 1 340 108" />
    <text x="395" y="103" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">few turns: weaker</text>
    <text x="290" y="130" text-anchor="start" font-size="11" stroke="none" fill="currentColor">arrow: rewind with more turns</text>
    <rect x="470" y="86" width="240" height="22" />
    <path d="M 478 86 A 5 11 0 0 1 478 108" />
    <path d="M 493 86 A 5 11 0 0 1 493 108" />
    <path d="M 508 86 A 5 11 0 0 1 508 108" />
    <path d="M 523 86 A 5 11 0 0 1 523 108" />
    <path d="M 538 86 A 5 11 0 0 1 538 108" />
    <path d="M 553 86 A 5 11 0 0 1 553 108" />
    <path d="M 568 86 A 5 11 0 0 1 568 108" />
    <path d="M 583 86 A 5 11 0 0 1 583 108" />
    <path d="M 598 86 A 5 11 0 0 1 598 108" />
    <path d="M 613 86 A 5 11 0 0 1 613 108" />
    <text x="650" y="103" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">more turns: stronger</text>

    <!-- Row 2: bigger current -->
    <text x="60" y="180" text-anchor="start" font-size="13" font-weight="700" stroke="none" fill="currentColor">2. Bigger current</text>
    <text x="290" y="180" text-anchor="start" font-size="11" stroke="none" fill="currentColor">0.5 A through coil</text>
    <line x1="450" y1="175" x2="490" y2="175" stroke-width="2" />
    <polygon points="484,168 496,175 484,182" fill="currentColor" stroke="none" />
    <text x="510" y="180" text-anchor="start" font-size="11" font-weight="700" stroke="none" fill="currentColor">1.0 A through coil: stronger</text>
    <text x="290" y="200" text-anchor="start" font-size="10" font-style="italic" stroke="none" fill="currentColor">watch the wire: too much current heats it sharply</text>

    <!-- Row 3: soft iron core -->
    <text x="60" y="250" text-anchor="start" font-size="13" font-weight="700" stroke="none" fill="currentColor">3. Soft iron core</text>
    <text x="290" y="250" text-anchor="start" font-size="11" stroke="none" fill="currentColor">air-cored: weak</text>
    <line x1="450" y1="245" x2="490" y2="245" stroke-width="2" />
    <polygon points="484,238 496,245 484,252" fill="currentColor" stroke="none" />
    <text x="510" y="250" text-anchor="start" font-size="11" font-weight="700" stroke="none" fill="currentColor">slide in a soft iron nail: hundreds of times stronger</text>
    <text x="290" y="270" text-anchor="start" font-size="10" font-style="italic" stroke="none" fill="currentColor">soft iron, not steel, so it switches off cleanly</text>

    <!-- Divider + summary -->
    <line x1="60" y1="310" x2="740" y2="310" stroke-dasharray="4,4" stroke-width="1" />
    <text x="400" y="340" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Each factor works on its own; together they multiply.</text>
    <text x="400" y="360" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">UK contexts: scrap-yard crane (all three at maximum), car relay (modest coil with iron core), school lab kit (coil on a nail).</text>
  </g>
`

const RESULTS_TABLE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Investigation: paper clips picked up vs number of turns</text>
    <text x="400" y="55" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Current held at 1.0 A, soft iron core, same wire, same paper clips.</text>

    <!-- Table outline -->
    <rect x="160" y="80" width="480" height="240" />
    <line x1="160" y1="120" x2="640" y2="120" stroke-width="2.5" />
    <line x1="400" y1="80" x2="400" y2="320" />
    <line x1="160" y1="160" x2="640" y2="160" />
    <line x1="160" y1="200" x2="640" y2="200" />
    <line x1="160" y1="240" x2="640" y2="240" />
    <line x1="160" y1="280" x2="640" y2="280" />

    <!-- Headers -->
    <text x="280" y="105" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Number of turns</text>
    <text x="520" y="105" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Paper clips lifted</text>

    <!-- Rows -->
    <text x="280" y="145" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">10</text>
    <text x="520" y="145" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">2</text>

    <text x="280" y="185" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">20</text>
    <text x="520" y="185" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">4</text>

    <text x="280" y="225" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">40</text>
    <text x="520" y="225" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">8</text>

    <text x="280" y="265" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">60</text>
    <text x="520" y="265" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">12</text>

    <text x="280" y="305" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">80</text>
    <text x="520" y="305" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">16</text>

    <!-- Pattern call-out -->
    <text x="400" y="360" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Doubling the turns roughly doubles the paper clips lifted.</text>
    <text x="400" y="380" text-anchor="middle" font-size="11" font-style="italic" stroke="none" fill="currentColor">Variable controlled: only the number of turns changes. Current is fixed at 1.0 A.</text>
  </g>
`

export const magnetismStrengtheningElectromagnets: SkillNode = {
  id: 'physics-magnetism-strengthening-electromagnets',
  title: 'Strengthening an Electromagnet',
  description:
    'An electromagnet is a coil of insulated wire that becomes magnetic only when current flows. Three factors make it stronger: more turns of wire in the coil, a larger current through the coil, and a soft iron core inside the coil. Each works on its own; together they multiply. Doubling the number of turns roughly doubles the field at a given current. Doubling the current roughly doubles the field too, though pushing the current too high heats the wire and can melt the insulation. A soft iron core (a steel-shop nail in a school lab kit) is the biggest single change: an iron-cored coil can be hundreds of times stronger than an air-cored coil of the same turns and current. Soft iron is used, not steel, because soft iron loses its magnetism almost instantly when the current stops; that is essential for relays, scrap-yard cranes, and other devices that need to switch off. Year 7 keeps the reasoning qualitative or simply proportional, with paper clips picked up as the home-made meter. UK contexts include the school electromagnet kit, the relay in a car starter circuit, and the giant electromagnet on a scrap-yard crane that sorts steel from aluminium.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-magnetism',
  zoneName: 'Magnetism',
  tier: 'confident',
  prerequisites: ['physics-magnetism-electromagnets'],
  curriculum: {
    ks3Objective:
      'The magnetic effect of a current, electromagnets; factors that change electromagnet strength, including number of turns, current and the use of a soft iron core.',
    awardingBodies: {
      aqa: '4.7.2.1 Electromagnetism; factors affecting solenoid field strength (GCSE Physics 8463)',
      edexcel: 'Topic 7 Magnetism and the motor effect, 7.10 to 7.12 solenoid field strength, effect of current, turns and core (GCSE Physics 1PH0)',
      ocr: 'P6.2 The motor effect; designing a stronger electromagnet, role of the iron core (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    // Source: AQA GCSE Physics 8463 specification 4.7.2.1 (Electromagnetism; factors affecting solenoid field strength), accessed 2026-05-12; CGP KS3 Physics Complete Revision and Practice (2022) electromagnet practical diagram.
    {
      id: 'pmse-bench-circuit',
      title: 'A school-lab electromagnet, wired up',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see what each part of a school electromagnet does.',
      data: {
        viewBox: '0 0 800 360',
        svg: ELECTROMAGNET_BENCH_SVG,
        hotspots: [
          {
            id: 'pmse-bench-core',
            x: 44,
            y: 78,
            label: 'Soft iron nail: the core',
            description:
              'A steel-shop nail made of soft iron sits inside the coil. The coil magnetises the iron while current flows, which makes the whole electromagnet hundreds of times stronger than an air-cored coil. Soft iron is used (not steel) because it loses its magnetism almost instantly when the current stops.',
          },
          {
            id: 'pmse-bench-coil',
            x: 44,
            y: 66,
            label: 'Insulated copper wire coil',
            description:
              'The wire is wound in turns round the nail. More turns means a stronger field at a given current. The insulation is essential so that current goes round the loop, not straight across between neighbouring turns.',
          },
          {
            id: 'pmse-bench-battery',
            x: 16,
            y: 60,
            label: 'Two 1.5 V cells (3 V total)',
            description:
              'The battery drives current round the coil. A bigger battery (more cells, or a higher-rated supply) usually means a larger current and so a stronger field, until the wire heats up too much.',
          },
          {
            id: 'pmse-bench-switch',
            x: 80,
            y: 48,
            label: 'Switch: the on or off control',
            description:
              'Close the switch and current flows; the nail becomes a magnet and lifts paper clips. Open the switch and the current stops; the nail loses its magnetism almost instantly and the clips drop. That switchable behaviour is the headline feature of an electromagnet.',
          },
          {
            id: 'pmse-bench-clips',
            x: 25,
            y: 85,
            label: 'Paper clips: the home-made meter',
            description:
              'Counting how many paper clips the nail picks up is a simple Year 7 way to measure field strength. Use the same paper clips and the same nail each time so the only thing changing is the factor under test.',
          },
        ],
      },
    },
    // Source: OCR GCSE Physics J259 specification P6.2 (designing a stronger electromagnet, role of the iron core), accessed 2026-05-12; CGP KS3 Physics Complete Revision and Practice (2022).
    {
      id: 'pmse-three-factors',
      title: 'Three factors that strengthen an electromagnet',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read how each factor changes the field, and the trade-off that comes with it.',
      data: {
        viewBox: '0 0 800 380',
        svg: THREE_FACTORS_SVG,
        hotspots: [
          {
            id: 'pmse-factor-turns',
            x: 22,
            y: 26,
            label: 'Factor 1: more turns of wire',
            description:
              'With current and core fixed, the field of the coil is roughly proportional to the number of turns. Doubling the turns roughly doubles the field. The same wire works; you do not need to swap to thicker wire.',
          },
          {
            id: 'pmse-factor-current',
            x: 22,
            y: 48,
            label: 'Factor 2: bigger current',
            description:
              'With turns and core fixed, the field is roughly proportional to the current. Going from 0.5 A to 1.0 A roughly doubles the field. The limit is heating: push the current too high and the wire warms sharply, the insulation can char, and the wire can melt.',
          },
          {
            id: 'pmse-factor-core',
            x: 22,
            y: 66,
            label: 'Factor 3: soft iron core',
            description:
              'A soft iron nail inside the coil amplifies the field hugely; often by hundreds of times compared with an air-cored coil. Soft iron is used (not steel) because it loses its magnetism the moment the current stops, so the device switches off cleanly.',
          },
          {
            id: 'pmse-factor-combine',
            x: 50,
            y: 89,
            label: 'How the three combine',
            description:
              'The factors multiply. Doubling the turns and doubling the current at the same time gives roughly four times the field, before you even add the iron core. A scrap-yard crane uses all three at maximum; a school lab kit uses modest values of each.',
          },
        ],
      },
    },
    // Source: Edexcel GCSE Physics 1PH0 specification Topic 7 (factors affecting solenoid field strength), accessed 2026-05-12; CLEAPSS guide GL193 Electromagnet practical (Year 7 to 9), accessed 2026-05-12.
    {
      id: 'pmse-results-table',
      title: 'Investigation results: turns vs paper clips lifted',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read the variable-control plan and the pattern in the data.',
      data: {
        viewBox: '0 0 800 400',
        svg: RESULTS_TABLE_SVG,
        hotspots: [
          {
            id: 'pmse-results-control',
            x: 50,
            y: 14,
            label: 'Variable control: change only the turns',
            description:
              'A fair test changes one factor at a time. Here, the current is held at 1.0 A, the same iron nail is used, the same wire is reused, and the same paper clips are picked up. Only the number of turns changes from row to row.',
          },
          {
            id: 'pmse-results-pattern',
            x: 50,
            y: 90,
            label: 'Pattern: doubling turns roughly doubles clips',
            description:
              'Going from 20 turns to 40 turns doubles the clips lifted (4 to 8). Going from 40 to 80 doubles them again (8 to 16). At KS3 we treat the relationship as roughly proportional: double the turns, double the field, double the clips.',
          },
          {
            id: 'pmse-results-row-10',
            x: 35,
            y: 38,
            label: '10 turns: 2 paper clips',
            description:
              'A short coil round the nail is enough to magnetise it weakly. 10 turns at 1.0 A picks up 2 paper clips in this set-up.',
          },
          {
            id: 'pmse-results-row-80',
            x: 65,
            y: 78,
            label: '80 turns: 16 paper clips',
            description:
              'Eight times as many turns as the 10-turn coil. The clips lifted rises from 2 to 16 (eight times). That is what proportional means in practice.',
          },
          {
            id: 'pmse-results-not-quite',
            x: 50,
            y: 96,
            label: 'Why "roughly" and not "exactly"?',
            description:
              'In a real lab the wire heats up a little, the nail saturates at high field, and paper clips are not all identical. KS3 calls the link proportional, which is good enough for prediction but not perfect to the last clip.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    // Source: AQA GCSE Physics 8463 specification 4.7.2.1; standard KS3 proportional-reasoning wording from CGP KS3 Physics Complete Revision and Practice (2022).
    {
      id: 'pmse-worked-1',
      title: 'Predicting clips lifted at a new number of turns',
      steps: [
        {
          explanation:
            'Set out the situation. A pupil in a Bristol school lab tests an electromagnet at 1.0 A. With 20 turns it lifts 4 paper clips. They rewind the coil with 80 turns at the same current and ask how many clips it should lift.',
        },
        {
          explanation:
            'Recall the rule. At KS3 the field of an electromagnet is roughly proportional to the number of turns, with current held constant. So if the turns multiply by N, the clips lifted multiply by roughly N too.',
        },
        {
          explanation: 'Work out the factor. 80 turns divided by 20 turns is 4. The new coil has 4 times as many turns.',
          maths: '80 / 20 = 4',
        },
        {
          explanation: 'Multiply the baseline result by the same factor.',
          maths: '4 paper clips x 4 = 16 paper clips',
        },
        {
          explanation:
            'State the prediction. The 80-turn coil should lift about 16 paper clips at 1.0 A. The real value will be close to that but a little lower if the wire heats up.',
        },
      ],
    },
    // Source: Edexcel GCSE Physics 1PH0 specification Topic 7 (effect of current on solenoid field strength); KS3 wording from BBC Bitesize KS3 Physics, accessed 2026-05-12.
    {
      id: 'pmse-worked-2',
      title: 'Predicting the effect of doubling the current',
      steps: [
        {
          explanation:
            'Set out the situation. A school electromagnet with 50 turns and a soft iron core lifts 5 paper clips at 0.5 A. The pupil swaps to a fresh battery and the current rises to 1.0 A. How many clips should it now lift?',
        },
        {
          explanation:
            'Recall the rule. With turns and core held constant, the field of an electromagnet is roughly proportional to the current. Doubling the current roughly doubles the field, and so roughly doubles the clips lifted.',
        },
        {
          explanation: 'Work out the factor. 1.0 A divided by 0.5 A is 2. The current has doubled.',
          maths: '1.0 / 0.5 = 2',
        },
        {
          explanation: 'Multiply the baseline result by the same factor.',
          maths: '5 paper clips x 2 = 10 paper clips',
        },
        {
          explanation:
            'State the prediction and the safety note. The coil should lift about 10 paper clips. The pupil should watch for the wire warming up; if the insulation chars or the wire smells hot, switch off straight away.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pmse-q1',
      type: 'multiple-choice',
      stem: 'Which three factors make an electromagnet stronger?',
      tier: 'core',
      options: [
        'More turns of wire, a bigger current, and a soft iron core.',
        'Fewer turns of wire, a smaller current, and a plastic core.',
        'A longer wire, a colder room, and a copper core.',
        'A heavier nail, a smaller battery, and a wooden core.',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'Think about a scrap-yard crane: lots of turns of wire, a hefty current, and an iron core inside. Then: Two of the three are about the coil and its current. The third is the material at the centre. Worked: Three factors make an electromagnet stronger: (1) more turns of wire in the coil, (2) a bigger current through the coil, (3) a soft iron core inside the coil. Plastic, wood, and copper are not magnetic, so they do not help.',
    },
    {
      id: 'pmse-q2',
      type: 'multiple-choice',
      stem: 'Why is soft iron used for the core of an electromagnet, not steel?',
      tier: 'core',
      options: [
        'Soft iron is cheaper, but steel would work just as well.',
        'Steel is not magnetic at all.',
        'Soft iron loses its magnetism almost instantly when the current stops, so the electromagnet can switch off.',
        'Soft iron is lighter than steel.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pmse-mis-steel-better',
      hint: 'A scrap-yard crane has to drop the car when the operator releases the switch. Then: It is not about cost or weight. It is about what the core does after the current stops. Worked: A scrap-yard crane has to drop the car when the switch is released. Steel would stay magnetised and the car would not drop. Soft iron loses its magnetism almost as soon as the current stops, so the electromagnet behaves as a switchable magnet.',
    },
    {
      id: 'pmse-q3',
      type: 'multiple-choice',
      stem: 'A pupil winds the same length of wire round a wooden dowel instead of a soft iron nail, with the same current and the same number of turns. What happens to the magnetic field strength?',
      tier: 'core',
      options: [
        'It stays exactly the same.',
        'It gets much stronger, because wood is a better core.',
        'The coil stops working entirely; no field at all.',
        'It gets much weaker, because there is no iron core to amplify the field.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'pmse-mis-air-equals-iron',
      hint: 'A coil on its own still makes some field, but the iron core multiplies it hugely. Then: Wood is not magnetic. The coil still works; it just is not amplified. Worked: A coil with no iron core (air-cored or wood-cored) still makes some field, but it can be hundreds of times weaker than the same coil with a soft iron nail inside. Without the iron, there is nothing to magnetise and amplify the field.',
    },
    {
      id: 'pmse-q4',
      type: 'numeric-entry',
      stem: 'A 20-turn coil at 1.0 A picks up 4 paper clips. The pupil rewinds the same wire as 40 turns and runs 1.0 A again. About how many paper clips should it lift? Treat the link as proportional.',
      tier: 'core',
      correctAnswer: 8,
      tolerance: 1,
      unit: 'paper clips',
      xpValue: 10,
      hint: 'Doubling the turns roughly doubles the clips lifted. Then: New turns divided by old turns is the factor. Multiply 4 clips by that factor. Worked: 40 turns divided by 20 turns is 2. Multiply 4 paper clips by 2 to get 8 paper clips.',
    },
    {
      id: 'pmse-q5',
      type: 'numeric-entry',
      stem: 'An electromagnet at 0.5 A lifts 3 paper clips. The pupil doubles the current to 1.0 A, keeping turns and core the same. About how many paper clips should it lift? Treat the link as proportional.',
      tier: 'core',
      correctAnswer: 6,
      tolerance: 1,
      unit: 'paper clips',
      xpValue: 10,
      hint: 'With turns and core fixed, the field is roughly proportional to the current. Then: New current divided by old current is the factor. Multiply 3 clips by that factor. Worked: 1.0 A divided by 0.5 A is 2. Multiply 3 paper clips by 2 to get 6 paper clips.',
    },
    {
      id: 'pmse-q6',
      type: 'multiple-choice',
      stem: 'A pupil wires up an electromagnet and pushes the current well above the rated value. Which of these is the main safety risk?',
      tier: 'core',
      options: [
        'The iron core will explode.',
        'The paper clips will fly off and break the windows.',
        'The Earth\'s magnetic field will flip.',
        'The wire heats up sharply; the insulation can char and the wire can melt.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'pmse-mis-current-unlimited',
      hint: 'Think about what happens when too much current goes through a thin wire. Then: A thin wire turns electrical energy into a lot of heat at high currents. Worked: A bigger current does mean a stronger field, but only up to a point. The wire heats up because of resistance; push the current too high and the insulation chars or the wire melts. Drop the current back or use thicker wire.',
    },
    {
      id: 'pmse-q7',
      type: 'numeric-entry',
      stem: 'A 10-turn air-cored coil at 1.0 A picks up 0 paper clips (too weak to lift one). The pupil slides a soft iron nail inside and the coil now lifts 2 paper clips. By what factor has the field strength jumped, at the very least, compared with the air-cored coil? Give the multiplier as a whole number; use 2 to mean "at least doubled".',
      tier: 'core',
      correctAnswer: 2,
      unit: 'times',
      xpValue: 10,
      misconceptionId: 'pmse-mis-air-equals-iron',
      hint: 'If the air-cored coil lifted 0 clips and the iron-cored one lifts 2, the field has clearly jumped. Then: New clips divided by old clips would be 2 / 0, which is huge. The question asks for the floor multiplier of 2. Worked: Going from 0 clips to 2 clips means the field has at least doubled (the multiplier is at least 2). In real labs the iron core can boost the field by hundreds of times, but this question only asks for the floor value.',
    },
    {
      id: 'pmse-q8',
      type: 'multiple-choice',
      stem: 'In a fair test of "more turns means more clips lifted", which set of variables should the pupil hold constant?',
      tier: 'confident',
      options: [
        'Current, type of core, wire used, paper clips.',
        'Only the time of day.',
        'Only the temperature of the lab.',
        'Number of turns and the current.',
      ],
      correctIndex: 0,
      xpValue: 15,
      hint: 'A fair test changes one factor and holds the rest constant. Then: The independent variable is the number of turns. Everything else should stay the same. Worked: A fair test changes one variable, here the number of turns, and keeps the rest constant. So the pupil holds current, core material, wire, and paper clips constant. Time of day and lab temperature have no real effect at this level.',
    },
    {
      id: 'pmse-q9',
      type: 'numeric-entry',
      stem: 'A coil with 30 turns at 0.4 A lifts 6 paper clips. The pupil doubles both the turns (to 60) and the current (to 0.8 A). About how many paper clips should it now lift? Treat both links as proportional.',
      tier: 'confident',
      correctAnswer: 24,
      tolerance: 2,
      unit: 'paper clips',
      xpValue: 15,
      hint: 'Doubling one factor doubles the field; doubling another factor doubles it again. Then: Multiply the starting clips by 2 for the turns, then by 2 again for the current. Worked: Turns factor: 60 / 30 = 2. Current factor: 0.8 / 0.4 = 2. Combined factor: 2 x 2 = 4. So 6 paper clips x 4 = 24 paper clips.',
    },
    {
      id: 'pmse-q10',
      type: 'multiple-choice',
      stem: 'Which UK device relies on a soft iron core inside a coil that can switch off cleanly?',
      tier: 'confident',
      options: [
        'A fridge magnet stuck on the kitchen door.',
        'A compass on a Lake District walk.',
        'The relay in a car\'s starter circuit, which uses a small switch to control a much bigger current.',
        'A bar magnet in a school lab tray.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pmse-mis-permanent-electromagnet',
      hint: 'A relay needs to click on and off as the driver turns the key. Then: Fridge magnets, compass needles, and bar magnets are permanent. They cannot be switched off. Worked: A car relay uses a small current through a coil with a soft iron core. The coil magnetises and pulls a contact closed; releasing the switch demagnetises the core and the contact springs open. Fridge magnets, compasses, and bar magnets are permanent and cannot do this.',
    },
    {
      id: 'pmse-q11',
      type: 'drag-order',
      stem: 'Put these four set-ups in order from weakest field to strongest field. All use the same wire and the same current.',
      tier: 'confident',
      items: [
        '40-turn coil with a soft iron core',
        '10-turn coil with no core (air-cored)',
        '40-turn coil with no core (air-cored)',
        '10-turn coil with a soft iron core',
      ],
      correctOrder: [1, 2, 3, 0],
      xpValue: 15,
      hint: 'Adding an iron core is a much bigger jump than going from 10 turns to 40 turns. Then: No-core beats fewer turns. Then turns matter; iron core dominates. Worked: Weakest: 10 turns no core. Then 40 turns no core (more turns helps). Then 10 turns with iron core (the core is a huge boost). Strongest: 40 turns with iron core (both factors working together).',
    },
    {
      id: 'pmse-q12',
      type: 'spot-misconception',
      stem: 'Niamh is talking about how to make an electromagnet stronger.',
      tier: 'confident',
      statements: [
        {
          text: 'Niamh says: "Putting any iron core in turns the coil into a permanent magnet, so it stays magnetic after the current stops." This is wrong; soft iron loses its magnetism almost instantly when the current stops.',
          isMisconception: true,
        },
        {
          text: 'Niamh says: "Adding a soft iron core makes the electromagnet much stronger while the current flows, but the core loses its magnetism when the current stops." This is right.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pmse-mis-permanent-electromagnet',
    },
    {
      id: 'pmse-q13',
      type: 'multiple-choice',
      stem: 'A pupil writes: "More turns of wire only helps if you use thicker wire too." Which response is the best correction?',
      tier: 'confident',
      options: [
        'The pupil is right; thinner wire cannot make a stronger field.',
        'More turns of the same wire helps on its own; the field rises roughly in proportion to the turns at a given current. Thicker wire is only needed if you also push the current higher.',
        'More turns has no effect at all on the field.',
        'Only the thickness of the wire matters; turns make no difference.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'pmse-mis-turns-needs-thicker-wire',
      hint: 'At a fixed current, what does adding turns to the same wire do? Then: Wire thickness matters for heating at high current, not for the turns rule. Worked: At a given current, more turns of the same wire gives a stronger field, roughly in proportion to the turns. Thicker wire only becomes necessary if you also raise the current enough to heat the wire dangerously.',
    },
    {
      id: 'pmse-q14',
      type: 'numeric-entry',
      stem: 'A 25-turn coil at 0.6 A picks up 5 paper clips. The pupil keeps the current at 0.6 A but rewinds the wire to 100 turns. About how many paper clips should the new coil lift? Treat the link as proportional.',
      tier: 'confident',
      correctAnswer: 20,
      tolerance: 2,
      unit: 'paper clips',
      xpValue: 15,
      hint: 'New turns divided by old turns is the factor. Multiply the clips by that. Then: 100 turns is 4 times 25 turns, so the field is roughly 4 times stronger. Worked: 100 / 25 = 4. Multiply 5 paper clips by 4 to get 20 paper clips.',
    },
    {
      id: 'pmse-q15',
      type: 'drag-order',
      stem: 'Order these steps for a fair test of "more current means more paper clips lifted".',
      tier: 'confident',
      items: [
        'Predict: more current should lift more clips, with turns and core fixed.',
        'Record the clips lifted; repeat for currents 0.5 A, 1.0 A and 1.5 A.',
        'Plot or tabulate clips lifted against current. Look for a pattern.',
        'Wind a coil with a fixed number of turns round a soft iron nail. Connect to an ammeter and a variable supply.',
      ],
      correctOrder: [0, 3, 1, 2],
      xpValue: 15,
      hint: 'Plan, build, measure, then analyse. Then: Predict first, then build the kit, then collect the data, then interpret it. Worked: Order: (1) predict the link, (2) build the coil and connect it up, (3) record clips lifted at 0.5 A, 1.0 A, 1.5 A, (4) tabulate or plot the data and check the prediction.',
    },
    {
      id: 'pmse-q16',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil has a 50-turn coil at 0.5 A lifting 4 paper clips and rewinds it to 100 turns at 1.0 A. They want to predict the clips lifted, treating both links as proportional.',
      tier: 'challenge',
      steps: [
        'Spot the rule: with everything else constant, more turns or more current each roughly multiply the field by the same factor.',
        'Work out the turns factor: 100 turns divided by 50 turns is 2.',
        null,
        'Combine the factors: 2 (turns) multiplied by 2 (current) is 4.',
        'Multiply the starting clips: 4 paper clips times 4 is 16 paper clips.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Work out the current factor: 1.0 A divided by 0.5 A is 2.',
      xpValue: 20,
    },
    {
      id: 'pmse-q17',
      type: 'multiple-choice',
      stem: 'A scrap-yard crane uses a giant electromagnet to sort metal. Which design choices match the job?',
      tier: 'challenge',
      options: [
        'Few turns of thin wire, tiny current, plastic core.',
        'Many turns of thick wire, large current, soft iron core.',
        'Many turns of thin wire, large current, steel core.',
        'Few turns of thin wire, large current, soft iron core.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'pmse-mis-steel-better',
      hint: 'The crane must lift cars and then drop them on demand. Then: Many turns and a large current both raise the field. The core must be soft iron so it can switch off. Worked: Lifting cars needs a huge field, so the design uses many turns and a large current. The wire has to be thick to carry the current without melting. The core must be soft iron so the load drops the moment the operator releases the switch.',
    },
    {
      id: 'pmse-q18',
      type: 'numeric-entry',
      stem: 'An air-cored coil lifts 0.5 paper clips on average. Sliding a soft iron nail inside lifts the same coil to 150 paper clips. By roughly what factor has the field strength multiplied? Give your answer as a whole number.',
      tier: 'challenge',
      correctAnswer: 300,
      tolerance: 30,
      unit: 'times',
      xpValue: 20,
      misconceptionId: 'pmse-mis-air-equals-iron',
      hint: 'Divide the new clips lifted by the old clips lifted. Then: 150 divided by 0.5 gives a big number. Worked: 150 paper clips divided by 0.5 paper clips is 300. The soft iron core has multiplied the field by roughly 300 times.',
    },
    {
      id: 'pmse-q19',
      type: 'spot-misconception',
      stem: 'Owen is wiring an electromagnet at home and writes two sentences about voltage and current.',
      tier: 'challenge',
      statements: [
        {
          text: 'Owen says: "The voltage of the battery is the only thing that matters for the field. A 9 V battery beats a 6 V battery, no matter what current actually flows." This is wrong; the current through the coil is what sets the field, not the voltage label.',
          isMisconception: true,
        },
        {
          text: 'Owen says: "A higher voltage often gives a larger current in the same coil, and the current is what sets the field. So the 9 V cell beats the 6 V cell only if the current it pushes through is larger." This is right.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'pmse-mis-voltage-not-current',
    },
    {
      id: 'pmse-q20',
      type: 'numeric-entry',
      stem: 'The graph of paper clips lifted against current is a straight line through the origin. At 0.4 A the coil lifts 6 paper clips. About how many clips will it lift at 1.2 A, with turns and core unchanged? Give your answer as a whole number.',
      tier: 'challenge',
      correctAnswer: 18,
      tolerance: 1,
      unit: 'paper clips',
      xpValue: 20,
      hint: 'A straight line through the origin means clips are proportional to current. Then: 1.2 A divided by 0.4 A is the factor. Multiply 6 clips by that. Worked: 1.2 / 0.4 = 3. Multiply 6 paper clips by 3 to get 18 paper clips.',
    },
    {
      id: 'pmse-q21',
      type: 'multiple-choice',
      stem: 'Which best explains why a coil with a soft iron core is so much stronger than the same coil with no core?',
      tier: 'challenge',
      options: [
        'The iron blocks the coil\'s field so it has to push harder.',
        'The iron heats up and the heat makes a stronger field.',
        'The iron pulls the current through the wire with less resistance.',
        'The coil\'s field magnetises the iron, and the magnetised iron adds its own field, so the total is far larger than the coil alone.',
      ],
      correctIndex: 3,
      xpValue: 20,
      misconceptionId: 'pmse-mis-air-equals-iron',
      hint: 'Iron is a magnetic material. The coil\'s field affects it. Then: Think of the iron as becoming an induced magnet inside the coil. Worked: The coil\'s field magnetises (induces magnetism in) the iron core. The magnetised iron then adds its own field to the coil\'s field, so the total field is far larger than the coil could make on its own. Switch the current off; the iron loses its induced magnetism and the field collapses.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, candidates wrote that electromagnets are permanent magnets after the current is switched on.
    {
      id: 'pmse-mis-permanent-electromagnet',
      description:
        'Believing that an iron-cored electromagnet becomes a permanent magnet once the current has flowed.',
      triggerAnswer: 'electromagnet-stays-on',
      correction:
        'Soft iron loses its magnetism almost as soon as the current stops. The electromagnet switches off cleanly. That is exactly why soft iron is used.',
      reExplanation:
        'A scrap-yard crane has to drop the car when the operator releases the switch. If soft iron stayed magnetised, the car would not drop. The induced magnetism in the iron lasts only while the coil current creates the field; cut the current and the field collapses.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2021, candidates over-extrapolated proportional current rule and ignored heating effects.
    {
      id: 'pmse-mis-current-unlimited',
      description:
        'Believing that more current always means a proportionally stronger electromagnet, with no upper limit.',
      triggerAnswer: 'current-no-limit',
      correction:
        'More current does give a stronger field, but only up to a point. Thin wire heats up sharply at high current; the insulation chars and the wire can melt.',
      reExplanation:
        'A school coil at 0.5 A is happy; at 5 A through the same thin wire, the wire glows and the insulation smokes. The proportional rule is a good predictor in the safe range, but a real electromagnet is limited by the wire it is made from. Thicker wire or a cooling system pushes that limit higher.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2022, candidates wrote that more turns only helps if the wire is also thicker.
    {
      id: 'pmse-mis-turns-needs-thicker-wire',
      description:
        'Believing that adding more turns to a coil only helps if the wire is also thicker.',
      triggerAnswer: 'turns-needs-thicker',
      correction:
        'More turns of the same wire helps on its own. The field rises roughly in proportion to the turns at a given current.',
      reExplanation:
        'A 40-turn coil of the same wire at the same current makes a stronger field than a 10-turn coil. Wire thickness only matters when the current rises enough to heat the wire. The two factors (turns and current) are independent in the qualitative picture used at KS3.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2020, candidates assumed an air-cored coil is similar in strength to an iron-cored coil.
    {
      id: 'pmse-mis-air-equals-iron',
      description:
        'Believing that an air-cored coil is about as strong as an iron-cored coil of the same turns and current.',
      triggerAnswer: 'air-equals-iron',
      correction:
        'An iron-cored coil is far stronger than an air-cored coil with the same turns and current; often hundreds of times stronger.',
      reExplanation:
        'The coil\'s field magnetises the iron core. The magnetised iron then adds its own field to the coil\'s, so the total can be hundreds of times larger than the coil alone. Slide the nail out and the same coil drops back to a much weaker air-cored field.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2022, candidates wrote that steel makes a better core because it stays magnetised.
    {
      id: 'pmse-mis-steel-better',
      description:
        'Believing that steel makes a better core for an electromagnet than soft iron.',
      triggerAnswer: 'steel-better-core',
      correction:
        'Soft iron is the better core because it loses its magnetism almost instantly when the current stops. Steel would stay magnetised.',
      reExplanation:
        'A relay or a crane has to switch off cleanly. Soft iron does this; steel does not. Steel keeps a chunk of its magnetism after the current stops, which is the opposite of what an electromagnet needs. Steel is used for permanent magnets, not for electromagnet cores.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2021, candidates wrote that the battery voltage sets the field, ignoring that current is the key quantity.
    {
      id: 'pmse-mis-voltage-not-current',
      description:
        'Believing the battery voltage is what sets the electromagnet field, rather than the current through the coil.',
      triggerAnswer: 'voltage-sets-field',
      correction:
        'The current through the coil sets the field. Voltage matters only because it helps push current through the coil\'s resistance.',
      reExplanation:
        'Two batteries with the same voltage can give very different currents in two different coils with different resistances. The field of the electromagnet tracks the current. Use the ammeter reading, not the battery label, to predict the strength.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const magnetismStrengtheningElectromagnetsZoneNodes = [magnetismStrengtheningElectromagnets]
