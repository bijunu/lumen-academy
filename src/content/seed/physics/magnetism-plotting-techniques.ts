import type { SkillNode } from '@/types/content'

const IRON_FILINGS_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Iron filings: sprinkle, tap, reveal the field pattern</text>

    <!-- A4 paper on a desk -->
    <rect x="100" y="80" width="600" height="280" stroke-width="1.5" />
    <text x="400" y="100" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">A4 paper laid over a bar magnet taped to the desk</text>

    <!-- Bar magnet underneath (shown dashed because it sits below the paper) -->
    <rect x="280" y="200" width="240" height="40" stroke-dasharray="6,4" />
    <text x="320" y="226" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">N</text>
    <text x="480" y="226" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">S</text>

    <!-- Filings: short dashes along curved field lines -->
    <!-- Upper loops -->
    <path d="M 320 200 C 320 150, 480 150, 480 200" stroke-dasharray="4,3" />
    <path d="M 310 200 C 310 120, 490 120, 490 200" stroke-dasharray="4,3" />
    <path d="M 300 200 C 300 90, 500 90, 500 200" stroke-dasharray="4,3" />

    <!-- Lower loops -->
    <path d="M 320 240 C 320 290, 480 290, 480 240" stroke-dasharray="4,3" />
    <path d="M 310 240 C 310 320, 490 320, 490 240" stroke-dasharray="4,3" />
    <path d="M 300 240 C 300 350, 500 350, 500 240" stroke-dasharray="4,3" />

    <!-- Extra filings: scattered dots at the poles (densest area) -->
    <circle cx="285" cy="210" r="1.5" fill="currentColor" />
    <circle cx="290" cy="220" r="1.5" fill="currentColor" />
    <circle cx="295" cy="230" r="1.5" fill="currentColor" />
    <circle cx="278" cy="218" r="1.5" fill="currentColor" />
    <circle cx="515" cy="210" r="1.5" fill="currentColor" />
    <circle cx="520" cy="220" r="1.5" fill="currentColor" />
    <circle cx="525" cy="230" r="1.5" fill="currentColor" />
    <circle cx="522" cy="218" r="1.5" fill="currentColor" />

    <!-- Labels -->
    <text x="170" y="200" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">filings cluster</text>
    <text x="170" y="218" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">densely at poles</text>
    <line x1="220" y1="215" x2="270" y2="218" stroke-width="1.5" />

    <text x="630" y="200" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">no arrowheads</text>
    <text x="630" y="218" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">on filings</text>
    <text x="630" y="236" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">shape only, not direction</text>

    <text x="400" y="395" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Each iron filing becomes a tiny induced magnet and lines up along the field.</text>
  </g>
`

const PLOTTING_COMPASS_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Plotting compass: mark N tip, move, repeat, join the dots</text>

    <!-- Paper outline -->
    <rect x="100" y="70" width="600" height="320" stroke-width="1.5" />

    <!-- Bar magnet on the paper -->
    <rect x="280" y="200" width="240" height="40" />
    <text x="320" y="226" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">N</text>
    <text x="480" y="226" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">S</text>

    <!-- Step 1: compass placed just off the N pole -->
    <circle cx="240" cy="170" r="14" stroke-width="2" />
    <line x1="240" y1="158" x2="240" y2="182" stroke-width="1.5" />
    <polygon points="236,164 240,154 244,164" fill="currentColor" stroke="none" />
    <text x="240" y="143" text-anchor="middle" font-size="10" font-weight="700" stroke="none" fill="currentColor">1</text>

    <!-- Step 2: move compass so S end sits where N tip was -->
    <circle cx="220" cy="140" r="14" stroke-width="2" />
    <line x1="220" y1="128" x2="220" y2="152" stroke-width="1.5" />
    <polygon points="216,134 220,124 224,134" fill="currentColor" stroke="none" />
    <text x="220" y="113" text-anchor="middle" font-size="10" font-weight="700" stroke="none" fill="currentColor">2</text>

    <!-- Step 3: third position -->
    <circle cx="220" cy="110" r="14" stroke-width="2" />
    <line x1="220" y1="98" x2="220" y2="122" stroke-width="1.5" />
    <polygon points="216,104 220,94 224,104" fill="currentColor" stroke="none" />
    <text x="220" y="83" text-anchor="middle" font-size="10" font-weight="700" stroke="none" fill="currentColor">3</text>

    <!-- Pencil dots at each N tip plus a fitted curve through them -->
    <circle cx="240" cy="156" r="2" fill="currentColor" />
    <circle cx="220" cy="126" r="2" fill="currentColor" />
    <circle cx="220" cy="96" r="2" fill="currentColor" />
    <path d="M 320 200 C 300 175, 250 145, 220 95" stroke-width="1.5" />
    <polygon points="217,103 220,90 226,100" fill="currentColor" stroke="none" />

    <!-- Same on the right (mirrored) -->
    <circle cx="560" cy="170" r="14" stroke-width="2" />
    <line x1="560" y1="158" x2="560" y2="182" stroke-width="1.5" />
    <polygon points="556,164 560,154 564,164" fill="currentColor" stroke="none" />
    <circle cx="580" cy="140" r="14" stroke-width="2" />
    <line x1="580" y1="128" x2="580" y2="152" stroke-width="1.5" />
    <polygon points="576,134 580,124 584,134" fill="currentColor" stroke="none" />
    <circle cx="580" cy="110" r="14" stroke-width="2" />
    <line x1="580" y1="98" x2="580" y2="122" stroke-width="1.5" />
    <polygon points="576,104 580,94 584,104" fill="currentColor" stroke="none" />
    <path d="M 480 200 C 500 175, 550 145, 580 95" stroke-width="1.5" />
    <polygon points="583,103 580,90 574,100" fill="currentColor" stroke="none" />

    <!-- Labels -->
    <text x="160" y="285" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">slow but accurate</text>
    <text x="160" y="303" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">one line at a time</text>

    <text x="640" y="285" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">arrowheads from</text>
    <text x="640" y="303" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">N to S outside the magnet</text>

    <text x="400" y="345" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Mark the N tip in pencil; shift the compass so its S end sits on that mark; repeat.</text>
    <text x="400" y="365" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">Join the dots to plot one full field line with direction.</text>
  </g>
`

const COMPARE_METHODS_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Iron filings vs plotting compass: pick the right tool for the job</text>

    <!-- Two columns -->
    <line x1="400" y1="60" x2="400" y2="380" stroke-dasharray="4,4" stroke-width="1" />

    <!-- Left column: filings -->
    <text x="200" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Iron filings</text>

    <text x="50" y="120" text-anchor="start" font-size="12" font-weight="700" stroke="none" fill="currentColor">Strengths</text>
    <text x="50" y="142" text-anchor="start" font-size="11" stroke="none" fill="currentColor">+ shows the whole pattern at once</text>
    <text x="50" y="160" text-anchor="start" font-size="11" stroke="none" fill="currentColor">+ dramatic clustering at the poles</text>
    <text x="50" y="178" text-anchor="start" font-size="11" stroke="none" fill="currentColor">+ rapid to set up</text>

    <text x="50" y="215" text-anchor="start" font-size="12" font-weight="700" stroke="none" fill="currentColor">Limits</text>
    <text x="50" y="237" text-anchor="start" font-size="11" stroke="none" fill="currentColor">- no direction (no arrowheads)</text>
    <text x="50" y="255" text-anchor="start" font-size="11" stroke="none" fill="currentColor">- cannot follow one line cleanly</text>
    <text x="50" y="273" text-anchor="start" font-size="11" stroke="none" fill="currentColor">- filings stick to compasses</text>

    <!-- Right column: compass -->
    <text x="600" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Plotting compass</text>

    <text x="430" y="120" text-anchor="start" font-size="12" font-weight="700" stroke="none" fill="currentColor">Strengths</text>
    <text x="430" y="142" text-anchor="start" font-size="11" stroke="none" fill="currentColor">+ gives direction (arrowheads)</text>
    <text x="430" y="160" text-anchor="start" font-size="11" stroke="none" fill="currentColor">+ plots one line clearly</text>
    <text x="430" y="178" text-anchor="start" font-size="11" stroke="none" fill="currentColor">+ low mess, reusable</text>

    <text x="430" y="215" text-anchor="start" font-size="12" font-weight="700" stroke="none" fill="currentColor">Limits</text>
    <text x="430" y="237" text-anchor="start" font-size="11" stroke="none" fill="currentColor">- slow, one line at a time</text>
    <text x="430" y="255" text-anchor="start" font-size="11" stroke="none" fill="currentColor">- easy to slip and lose the line</text>
    <text x="430" y="273" text-anchor="start" font-size="11" stroke="none" fill="currentColor">- needs a small low-friction compass</text>

    <!-- Best practice strip -->
    <line x1="50" y1="305" x2="750" y2="305" stroke-dasharray="4,4" stroke-width="1" />
    <text x="400" y="330" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Best practice: use both. Filings for the overall shape, compass for direction.</text>
    <text x="400" y="352" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">In a Year 7 lab: tape down the bar magnet on A4 paper, sprinkle filings, tap sharply, then check direction with a compass.</text>
    <text x="400" y="370" text-anchor="middle" font-size="11" font-style="italic" stroke="none" fill="currentColor">Keep iron filings well away from the compass case; they stick to the needle and spoil it.</text>
  </g>
`

export const magnetismPlottingTechniques: SkillNode = {
  id: 'physics-magnetism-plotting-techniques',
  title: 'Plotting Fields: Iron Filings vs Plotting Compass',
  description:
    'There are two standard ways to reveal the magnetic field round a bar magnet, and they show different things. Iron filings sprinkled over A4 paper laid on top of a bar magnet line up along the field, giving the overall pattern at a glance, with filings clustering densely at the poles where the field is strongest. Filings show shape but not direction; there are no arrowheads. A plotting compass placed near the magnet shows direction at one point. Mark the N tip in pencil, shift the compass so its S end sits where the N tip was, repeat, and join the dots to plot one full field line with arrows from N to S outside the magnet. By the end of this node, you can describe and compare both methods, choose the right tool for the job, and explain why combining the two gives the best field map.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-magnetism',
  zoneName: 'Magnetism',
  tier: 'confident',
  prerequisites: ['physics-magnetism-fields'],
  curriculum: {
    ks3Objective:
      'Magnetic fields by plotting with compass; practical techniques for revealing the field pattern around a bar magnet.',
    awardingBodies: {
      aqa: '4.7.1.2 Magnetic fields; required practical-style comparison of iron filings and plotting compass methods (GCSE Physics 8463)',
      edexcel: 'Topic 7 Magnetism and the motor effect, 7.3 investigating magnetic field patterns using a plotting compass and iron filings (GCSE Physics 1PH0)',
      ocr: 'P6.1 Magnets and magnetic fields; practical methods for plotting the field around a magnet (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    // Source: AQA GCSE Physics 8463 specification 4.7.1.2 (Magnetic fields), accessed 2026-05-12; method matches CGP KS3 Physics Complete Revision and Practice (2022) iron-filings practical and the AQA required-practical-style write-up.
    {
      id: 'pmpt-iron-filings',
      title: 'Iron filings: sprinkle, tap, reveal',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how iron filings reveal the field pattern round a bar magnet.',
      data: {
        viewBox: '0 0 800 420',
        svg: IRON_FILINGS_SVG,
        hotspots: [
          {
            id: 'pmpt-filings-set-up',
            x: 50,
            y: 22,
            label: 'Set-up: magnet under A4 paper',
            description:
              'Tape a bar magnet firmly to the desk, lay a sheet of A4 paper over the top, then sprinkle iron filings evenly from a filings shaker. The paper stops the filings sticking to the magnet, so you can reuse the kit.',
          },
          {
            id: 'pmpt-filings-tap',
            x: 50,
            y: 92,
            label: 'Tap the paper sharply',
            description:
              'Tap the paper sharply with a fingertip. Each filing becomes a tiny induced magnet and rotates to line up along the field. After a few taps the pattern of curves between N and S shows clearly.',
          },
          {
            id: 'pmpt-filings-poles',
            x: 22,
            y: 52,
            label: 'Densest at the poles',
            description:
              'Filings cluster most densely at the poles, where the field is strongest. The closer the lines or clusters, the stronger the field at that point on the paper.',
          },
          {
            id: 'pmpt-filings-no-arrows',
            x: 78,
            y: 52,
            label: 'No arrowheads',
            description:
              'Filings only show the shape of the field. They do not point N to S; flipping the magnet over swaps the field direction but leaves the filings pattern looking identical. To find direction, use a plotting compass.',
          },
        ],
      },
    },
    // Source: Edexcel GCSE Physics 1PH0 specification Topic 7.3 (investigating magnetic field patterns using a plotting compass), accessed 2026-05-12; mark-and-move method as in the AQA required-practical guide and CGP KS3 Physics CGP 2022.
    {
      id: 'pmpt-compass-method',
      title: 'Plotting compass: mark, move, repeat',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how to plot one full field line with a plotting compass.',
      data: {
        viewBox: '0 0 800 400',
        svg: PLOTTING_COMPASS_SVG,
        hotspots: [
          {
            id: 'pmpt-compass-start',
            x: 30,
            y: 38,
            label: 'Place the compass off the N pole',
            description:
              'Lay the bar magnet on A4 paper and tape it down. Place a small plotting compass just off the N pole. The needle settles, with its N tip pointing along the field.',
          },
          {
            id: 'pmpt-compass-mark',
            x: 30,
            y: 22,
            label: 'Mark the N tip in pencil',
            description:
              'Make a small pencil dot exactly where the N (red) tip of the needle is pointing. Then slide the compass forwards so that its S end sits on that dot. The N tip now points to a new place; mark it too.',
          },
          {
            id: 'pmpt-compass-join',
            x: 30,
            y: 90,
            label: 'Join the dots, add an arrow',
            description:
              'Repeat the step until the compass reaches the S pole. Lift it off and draw a smooth curve through the dots. Add one arrowhead pointing from N to S (outside the magnet). You have plotted one full field line.',
          },
          {
            id: 'pmpt-compass-many-lines',
            x: 75,
            y: 22,
            label: 'Plot more lines from new starts',
            description:
              'Start again at a fresh point near the N pole (above or below the magnet) to plot a second line. Four to six lines in total give a full field map with direction.',
          },
        ],
      },
    },
    // Source: AQA GCSE Physics 8463 required practical guidance "Investigating magnetic fields" (https://aqa.org.uk), accessed 2026-05-12; comparison wording follows AQA examiner-report June 2022 expected answers for iron-filings vs plotting-compass methods.
    {
      id: 'pmpt-compare',
      title: 'Strengths, limits, and best practice',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare the two methods and read the best-practice rule.',
      data: {
        viewBox: '0 0 800 400',
        svg: COMPARE_METHODS_SVG,
        hotspots: [
          {
            id: 'pmpt-compare-filings-strengths',
            x: 25,
            y: 38,
            label: 'Filings: whole pattern, rapid',
            description:
              'Iron filings reveal the whole field pattern in one go and show clearly where the field is strongest (the densest clumps at the poles). The set-up is quick: paper, magnet, shaker, sharp tap.',
          },
          {
            id: 'pmpt-compare-filings-limits',
            x: 25,
            y: 65,
            label: 'Filings: no direction',
            description:
              'Filings cannot tell you which way the field points. They form the same curved pattern whether N is on the left or the right. Filings also stick stubbornly to a compass needle, so keep the two methods apart.',
          },
          {
            id: 'pmpt-compare-compass-strengths',
            x: 75,
            y: 38,
            label: 'Compass: gives direction',
            description:
              'A plotting compass adds the arrowheads that filings cannot. Mark, move, repeat: you build up one field line at a time with a clear N-to-S direction outside the magnet.',
          },
          {
            id: 'pmpt-compare-compass-limits',
            x: 75,
            y: 65,
            label: 'Compass: slow, easy to slip',
            description:
              'Plotting takes longer than sprinkling filings, and a single slip (moving the compass between marks) can lose the line. A small, low-friction compass on a flat desk gives the cleanest result.',
          },
          {
            id: 'pmpt-compare-best',
            x: 50,
            y: 90,
            label: 'Best practice: use both',
            description:
              'In a Year 7 lab, sprinkle filings first to see the overall shape, then use a plotting compass at a few points to add direction arrows. The combined map is more useful than either method alone.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    // Source: AQA GCSE Physics 8463 required practical "Investigating magnetic fields" examiner guidance June 2022; CGP KS3 Physics Complete Revision and Practice (2022) plotting-compass walkthrough.
    {
      id: 'pmpt-worked-1',
      title: 'Plotting one full field line with a compass, step by step',
      steps: [
        {
          explanation:
            'Set out the equipment. A pupil has a bar magnet, a sheet of A4 paper, sticky tape, a small plotting compass, and a sharp pencil. The desk is flat and clear of other magnets.',
        },
        {
          explanation:
            'Place the magnet on the paper with N on the left and S on the right. Tape it down so it cannot drift while plotting. Mark round the magnet in pencil so you can put it back if it is knocked.',
        },
        {
          explanation:
            'Place the compass just off the N pole, near the top edge of the magnet. Wait for the needle to settle. The N (red) end of the needle points along the local field direction.',
        },
        {
          explanation:
            'Make a small pencil dot exactly where the N tip is pointing. Lift the compass and shift it forwards so its S end sits on that new dot.',
          maths: 'dot at the N tip; move compass so S end sits on the dot',
        },
        {
          explanation:
            'Repeat the mark-and-move step. Each iteration adds one more dot, working round the side of the magnet towards the S pole. Six to eight dots is usually enough for one line.',
        },
        {
          explanation:
            'Lift the compass off and draw a smooth curve through the dots with the pencil. Add one arrowhead pointing along the curve from N to S, since field lines run from N to S outside the magnet.',
        },
        {
          explanation:
            'You have plotted one full field line with direction. Start again at a new point near N (further from the magnet, or below it) to plot the next line.',
        },
      ],
    },
    // Source: Edexcel GCSE Physics 1PH0 specification Topic 7.3; CGP KS3 Physics Complete Revision and Practice (2022) iron-filings practical method.
    {
      id: 'pmpt-worked-2',
      title: 'Choosing the right method for a question',
      steps: [
        {
          explanation:
            'Read the question. A pupil is asked: "Sketch the shape of the field round a bar magnet and mark the direction at three points." They must decide which method (or mix) to use.',
        },
        {
          explanation:
            'The first half (shape of the field) is best done with iron filings, since filings show the whole pattern at once. The second half (direction at three points) is best done with a plotting compass, since filings do not show direction.',
        },
        {
          explanation:
            'Plan the order. Filings first while the paper is clean, then brush them off carefully into a tray; only then bring out the compass. Filings stick to the compass needle and ruin it.',
          maths: 'order: filings, then clear, then compass',
        },
        {
          explanation:
            'State the answer. The pupil sprinkles filings to capture the curved pattern, sketches it on the paper, then uses a plotting compass at three points (one near N, one to the side, one near S) to add arrows pointing N to S outside the magnet.',
        },
      ],
    },
  ],
  questions: [
    // CORE TIER
    {
      id: 'pmpt-q1',
      type: 'multiple-choice',
      stem: 'Which best describes what iron filings show when sprinkled on paper over a bar magnet?',
      tier: 'core',
      options: [
        'The strength of gravity round the magnet.',
        'Nothing at all.',
        'The shape of the field pattern, with no direction information.',
        'The direction of the magnetic field at every point.',
      ],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Filings line up along the field lines, but they do not have arrowheads. Think about whether they look any different if you flip the magnet.',
    },
    {
      id: 'pmpt-q2',
      type: 'multiple-choice',
      stem: 'Which best describes the role of a plotting compass when mapping the field round a bar magnet?',
      tier: 'core',
      options: [
        'It shows direction at the point where it sits.',
        'It shows the whole field pattern in one go.',
        'It measures the temperature of the magnet.',
        'It cancels the field out.',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'A compass needle is itself a tiny pivoted magnet; its N tip points along the field at one place.',
    },
    {
      id: 'pmpt-q3',
      type: 'multiple-choice',
      stem: 'Where do iron filings cluster most densely round a bar magnet?',
      tier: 'core',
      options: [
        'Along the centre of the magnet.',
        'Far away from the magnet.',
        'They sit evenly across the paper.',
        'At the poles, where the field is strongest.',
      ],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Field lines are closest together where the field is strongest.',
    },
    {
      id: 'pmpt-q4',
      type: 'multiple-choice',
      stem: 'A pupil sprinkles iron filings over A4 paper laid above a bar magnet. The filings do not form a pattern. What is the most likely fix?',
      tier: 'core',
      options: [
        'Tap the paper sharply.',
        'Wait longer without doing anything.',
        'Use larger filings.',
        'Heat the magnet.',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'A tap lets each filing rotate freely against friction with the paper.',
    },
    {
      id: 'pmpt-q5',
      type: 'numeric-entry',
      stem: 'A pupil plots a field line by moving the plotting compass forwards in steps. Each step adds one new pencil dot. How many dots are needed to mark out a curve that uses 6 steps from N pole to S pole?',
      tier: 'core',
      correctAnswer: 7,
      unit: 'dots',
      xpValue: 10,
      hint: 'Each step ends with one new dot; the start position adds one more.',
    },
    {
      id: 'pmpt-q6',
      type: 'numeric-entry',
      stem: 'A pupil wants to plot 4 field lines round a bar magnet. Each line takes 6 mark-and-move steps. How many steps in total? Give your answer as a whole number.',
      tier: 'core',
      correctAnswer: 24,
      unit: 'steps',
      xpValue: 10,
      hint: 'Multiply lines by steps per line.',
    },
    {
      id: 'pmpt-q7',
      type: 'drag-order',
      stem: 'Put these iron-filings practical steps in the correct order, from first to last.',
      tier: 'core',
      items: [
        'Lay an A4 sheet of paper over the magnet.',
        'Sprinkle iron filings evenly over the paper.',
        'Tape the bar magnet to the desk.',
        'Tap the paper sharply to settle the pattern.',
      ],
      correctOrder: [2, 0, 1, 3],
      xpValue: 10,
      hint: 'The magnet must be fixed before anything else goes on top of it; tapping comes last once the filings are in place.',
    },
    // CONFIDENT TIER
    {
      id: 'pmpt-q8',
      type: 'multiple-choice',
      stem: 'A pupil writes: "Iron filings show the direction of the magnetic field with arrowheads." Which response is the best correction?',
      tier: 'confident',
      options: [
        'Right; filings clearly show N-to-S arrows.',
        'Wrong; filings show only direction, not shape.',
        'Right, but only if you sprinkle more filings.',
        'Wrong; filings show the shape of the field but not the direction. Use a plotting compass for direction.',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'pmpt-mis-filings-show-direction',
      hint: 'A filing is a tiny bar magnet without a painted N or S end, so it can sit either way along a field line.',
    },
    {
      id: 'pmpt-q9',
      type: 'numeric-entry',
      stem: 'A plotting compass diameter is 20 mm. A pupil wants to fit 8 compass positions between the N and S poles of a 100 mm bar magnet, along a curved field line of about 160 mm total length. What spacing in millimetres should they aim for between the centres of successive marks?',
      tier: 'confident',
      correctAnswer: 20,
      tolerance: 2,
      unit: 'mm',
      xpValue: 15,
      hint: 'Total length divided by (number of positions minus 1).',
    },
    {
      id: 'pmpt-q10',
      type: 'numeric-entry',
      stem: 'A pupil reports that filings near the poles look about 4 times denser than filings half-way along the side of a bar magnet. If the field strength is roughly proportional to the filing density, by what factor is the field stronger at the poles than at that side point? Give your answer as a whole number.',
      tier: 'confident',
      correctAnswer: 4,
      unit: 'times',
      xpValue: 15,
      hint: 'If density doubles, field roughly doubles. Read the proportional rule literally.',
    },
    {
      id: 'pmpt-q11',
      type: 'spot-misconception',
      stem: 'Anya is describing the plotting-compass method to her partner.',
      tier: 'confident',
      statements: [
        {
          text: 'Anya says: "I can plot the field even without a magnet, because the compass works on its own." This is wrong; on its own the compass would just point to Earth\'s magnetic north, so you need the bar magnet on the paper to give the local field.',
          isMisconception: true,
        },
        {
          text: 'Anya says: "I tape the bar magnet down on A4 paper, place the compass off the N pole, mark the N tip, then move the compass so its S end sits on that mark." This is right.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pmpt-mis-compass-without-magnet',
    },
    {
      id: 'pmpt-q12',
      type: 'multiple-choice',
      stem: 'Why is it important to tape the bar magnet to the desk before starting either practical?',
      tier: 'confident',
      options: [
        'So the magnet looks tidy.',
        'To make the magnet stronger.',
        'To stop the magnet drifting; if it moves, the field shifts under the paper and the pattern blurs.',
        'To stop the filings from working.',
      ],
      correctIndex: 2,
      xpValue: 15,
      hint: 'If the source of the field moves, the field map you build no longer matches what is under the paper.',
    },
    {
      id: 'pmpt-q13',
      type: 'multiple-choice',
      stem: 'Which is the best description of how to combine the two methods in a Year 7 lab?',
      tier: 'confident',
      options: [
        'Use a compass first, then sprinkle filings on top of it.',
        'Only ever use one method; mixing them is forbidden.',
        'Sprinkle filings on the compass needle.',
        'Sprinkle filings to see the shape, brush them off, then use a plotting compass to add direction at chosen points.',
      ],
      correctIndex: 3,
      xpValue: 15,
      hint: 'Filings stick to a compass needle, so do filings first and clear the paper before bringing the compass out.',
    },
    {
      id: 'pmpt-q14',
      type: 'drag-order',
      stem: 'Order these plotting-compass steps to plot one full field line, from first to last.',
      tier: 'confident',
      items: [
        'Join the pencil dots into a smooth curve and add one arrowhead from N to S outside the magnet.',
        'Place the compass just off the N pole and wait for the needle to settle.',
        'Mark the N tip of the needle with a small pencil dot.',
        'Shift the compass so its S end sits on the new dot, then repeat the marking until you reach the S pole.',
      ],
      correctOrder: [1, 2, 3, 0],
      xpValue: 15,
      hint: 'Place, mark, move-and-repeat, then join the dots.',
    },
    {
      id: 'pmpt-q15',
      type: 'drag-order',
      stem: 'A pupil wants to use both methods on the same A4 sheet. Order these lab-safety steps from first to last to keep both the kit and the data clean.',
      tier: 'confident',
      items: [
        'Tape the bar magnet down (under the paper) so it cannot drift.',
        'Sprinkle iron filings, tap to reveal the field shape, and sketch it on a fresh sheet.',
        'Brush the filings carefully into a tray, well away from the plotting compass.',
        'Bring out the plotting compass and add direction arrows at a few points.',
      ],
      correctOrder: [0, 1, 2, 3],
      xpValue: 15,
      misconceptionId: 'pmpt-mis-filings-on-compass-fine',
      hint: 'Filings stick to a compass needle, so do all the filing work, clear up, then bring the compass out.',
    },
    // CHALLENGE TIER
    {
      id: 'pmpt-q16',
      type: 'missing-step',
      stem: 'Fill in the missing step in this plotting-compass procedure for one field line.',
      tier: 'challenge',
      steps: [
        'Tape the bar magnet down on A4 paper with N on the left, then draw round its outline in pencil.',
        'Place the plotting compass just off the N pole and wait for the needle to settle.',
        'Mark a small pencil dot exactly where the N tip of the needle is pointing.',
        null,
        'Repeat the mark-and-move step until the compass reaches the S pole.',
        'Lift the compass off and draw a smooth curve through the dots, then add one arrowhead from N to S.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Shift the compass forwards so that its S end sits on the new pencil dot, then mark the next N tip with another dot.',
      xpValue: 20,
    },
    {
      id: 'pmpt-q17',
      type: 'multiple-choice',
      stem: 'A pupil uses a strong neodymium bar magnet for the filings practical. The pattern looks rough and the compass goes wild even when held some way off. What is the best explanation?',
      tier: 'challenge',
      options: [
        'Stronger fields saturate the iron filings and twist the compass needle so far it cannot settle; a weaker bar magnet gives cleaner readings.',
        'The compass is broken.',
        'Iron filings only work in cold rooms.',
        'Stronger magnets do not have field lines.',
      ],
      correctIndex: 0,
      xpValue: 20,
      hint: 'Year 7 kits use mild bar magnets for a reason; very strong fields drive both filings and compass needles off scale.',
    },
    {
      id: 'pmpt-q18',
      type: 'numeric-entry',
      stem: 'A pupil plots 6 full field lines round a bar magnet. Each line needs 7 dots. They lose count once and have to start one line over from scratch. How many dots do they place in total? Give your answer as a whole number.',
      tier: 'challenge',
      correctAnswer: 49,
      unit: 'dots',
      xpValue: 20,
      hint: '6 lines completed plus 1 extra restarted line, each 7 dots.',
    },
    {
      id: 'pmpt-q19',
      type: 'spot-misconception',
      stem: 'Jamie is comparing the two methods after the lesson.',
      tier: 'challenge',
      statements: [
        {
          text: 'Jamie says: "Iron filings are better than a plotting compass because they sprinkle on more filings, which proves the magnet is stronger." This is wrong; the amount of filings depends on how much you shook the shaker, not on the magnet strength.',
          isMisconception: true,
        },
        {
          text: 'Jamie says: "Filings cluster more densely near the poles than along the sides of the same magnet, which suggests the field is stronger at the poles." This is right.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'pmpt-mis-more-filings-stronger',
    },
    {
      id: 'pmpt-q20',
      type: 'multiple-choice',
      stem: 'A pupil insists they can plot the field by placing a normal navigation compass (the kind used on a Lake District walk) directly on top of the bar magnet. Which response is best?',
      tier: 'challenge',
      options: [
        'Great idea; any compass works for plotting.',
        'Stick to a small low-friction plotting compass on the paper; a walking compass is too damped and too large, and putting it on the magnet drives the needle off scale.',
        'Use a walking compass, but with two bar magnets stacked.',
        'Use no compass at all; estimate by eye.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'pmpt-mis-any-compass-works',
      hint: 'Plotting compasses are deliberately small and light, with low pivot friction.',
    },
    {
      id: 'pmpt-q21',
      type: 'multiple-choice',
      stem: 'In the AQA-style required practical, why do schools recommend placing the bar magnet under the paper for the filings step but on top of the paper for the compass step?',
      tier: 'challenge',
      options: [
        'Pure tradition; either way works equally well.',
        'The paper amplifies the magnetic field.',
        'Filings should not stick to the magnet, so the paper acts as a barrier; the compass sits on the paper next to (or just off) the magnet, so the magnet does not need to be hidden.',
        'The magnet only works through paper.',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'pmpt-mis-paper-blocks-field',
      hint: 'Think about what would happen to filings dropped straight onto the magnet.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, candidates wrote that iron filings show field direction with arrowheads; confused with plotting-compass output.
    {
      id: 'pmpt-mis-filings-show-direction',
      description:
        'Believing iron filings show the direction of the magnetic field (with arrowheads), not just its shape.',
      triggerAnswer: 'filings-show-direction',
      correction:
        'Filings show the shape of the field only. Each filing is a tiny induced magnet with no painted N or S end, so it can sit either way along a line.',
      reExplanation:
        'Flip a bar magnet over and the filings pattern looks identical; the field has reversed but the filings cannot show it. To add arrows pointing N to S outside the magnet, use a plotting compass: its painted N tip points along the field at one place, and the mark-and-move method builds up a line with direction.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2021, candidates described using a plotting compass with no bar magnet present.
    {
      id: 'pmpt-mis-compass-without-magnet',
      description:
        'Thinking a plotting compass alone can map the field of a bar magnet, with no magnet on the paper.',
      triggerAnswer: 'compass-without-magnet',
      correction:
        'On its own a compass aligns with Earth\'s field and just points to magnetic north. To plot the bar magnet\'s field you must have the magnet on the paper so it dominates the local field.',
      reExplanation:
        'A plotting compass reads the total field at its location. With no nearby bar magnet, Earth\'s field dominates and the needle simply points north. To map a bar magnet you place the magnet on the paper close to the compass so its field is far stronger than Earth\'s, then mark and move as usual.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, candidates wrote that more filings means a stronger magnet, confusing filing quantity with field strength.
    {
      id: 'pmpt-mis-more-filings-stronger',
      description:
        'Believing that "more iron filings on the paper" proves the bar magnet is stronger.',
      triggerAnswer: 'more-filings-stronger',
      correction:
        'The total amount of filings on the paper depends on how much you sprinkled, not on the magnet. Compare densities at different points round the same magnet instead.',
      reExplanation:
        'If you shake a bigger pinch out of the filings shaker, there will be more filings on the paper, whatever magnet is under it. The useful comparison is the density at different points round the same magnet. Filings packed close at the poles and thin along the sides shows the field is strongest at the poles.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2022, candidates suggested using a walking compass for the plotting practical.
    {
      id: 'pmpt-mis-any-compass-works',
      description:
        'Assuming any compass (including a walking compass) is suitable for plotting the field round a bar magnet.',
      triggerAnswer: 'any-compass-works',
      correction:
        'Plotting needs a small low-friction compass, about 20 mm across. Walking compasses are heavily damped and too large for tight mark-and-move steps.',
      reExplanation:
        'Plotting compasses are about 20 mm across with a needle on a sharp pivot, so they swing freely as you mark and move. A walking compass is engineered for stability on the move, with a damped fluid-filled capsule and a much larger body. It settles slowly and cannot be packed tightly along a field line; field plotting fails.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2022, candidates wrote that a bar magnet must directly touch the paper for filings to work; paper layer was misunderstood as blocking the field.
    {
      id: 'pmpt-mis-paper-blocks-field',
      description:
        'Believing the paper between magnet and filings blocks the magnetic field, so the magnet must touch the filings.',
      triggerAnswer: 'paper-blocks-field',
      correction:
        'Paper is non-magnetic and barely affects the field at all. Filings on a sheet of paper sitting on top of a bar magnet line up exactly as if the paper were not there.',
      reExplanation:
        'Magnetic fields pass through non-magnetic materials such as paper, plastic, wood and glass with almost no change. The paper is there to stop filings sticking to the magnet itself, not because the field needs it. The field at the surface of the paper is essentially the same as the field at the surface of the magnet a paper thickness below.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2023, candidates described stray filings on a compass needle as a normal part of the practical; lab technique guidance disagrees.
    {
      id: 'pmpt-mis-filings-on-compass-fine',
      description:
        'Believing it is fine for iron filings to land on the plotting compass needle during the practical.',
      triggerAnswer: 'filings-on-compass-ok',
      correction:
        'Filings stick to a compass needle through magnetic attraction. They unbalance the needle and stop it pointing freely. Keep the two methods separate.',
      reExplanation:
        'A plotting compass contains a small magnet, and any loose iron filings are attracted to it. Once filings cling to the needle they cannot be brushed off cleanly; they unbalance the needle, raise friction at the pivot, and ruin later plotting. Always finish the filings step and brush the paper clear into a tray before bringing the compass out.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const magnetismPlottingTechniquesZoneNodes = [magnetismPlottingTechniques]
