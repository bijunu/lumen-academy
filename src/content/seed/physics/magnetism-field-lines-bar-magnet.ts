import type { SkillNode } from '@/types/content'

const FIELD_LINE_DIAGRAM_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Field lines round a single bar magnet (N to S outside)</text>

    <!-- Bar magnet centred -->
    <rect x="280" y="220" width="240" height="50" />
    <rect x="280" y="220" width="120" height="50" fill="currentColor" opacity="0.3" />
    <text x="340" y="252" text-anchor="middle" font-size="20" font-weight="700" stroke="none" fill="currentColor">N</text>
    <text x="460" y="252" text-anchor="middle" font-size="20" font-weight="700" stroke="none" fill="currentColor">S</text>

    <!-- Loop 1: closest to the magnet, above -->
    <path d="M 330 220 C 330 170, 470 170, 470 220" />
    <polygon points="395,165 410,160 405,175" fill="currentColor" stroke="none" />

    <!-- Loop 2: medium loop, above -->
    <path d="M 310 220 C 310 130, 490 130, 490 220" />
    <polygon points="395,128 410,123 405,138" fill="currentColor" stroke="none" />

    <!-- Loop 3: outermost loop, above -->
    <path d="M 290 220 C 290 80, 510 80, 510 220" />
    <polygon points="395,78 410,73 405,88" fill="currentColor" stroke="none" />

    <!-- Loop 1 below -->
    <path d="M 330 270 C 330 320, 470 320, 470 270" />
    <polygon points="395,322 410,317 405,332" fill="currentColor" stroke="none" />

    <!-- Loop 2 below -->
    <path d="M 310 270 C 310 360, 490 360, 490 270" />
    <polygon points="395,362 410,357 405,372" fill="currentColor" stroke="none" />

    <!-- Density label, left of magnet -->
    <text x="130" y="225" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">closest at the poles:</text>
    <text x="130" y="243" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">field is strongest here</text>

    <!-- Spacing label, right of magnet -->
    <text x="670" y="225" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">further apart sideways:</text>
    <text x="670" y="243" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">field is weaker here</text>

    <!-- Three rules summary -->
    <line x1="60" y1="395" x2="740" y2="395" stroke-dasharray="4,4" stroke-width="1" />
    <text x="400" y="418" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Arrows go N to S outside. Lines never cross. Closer lines mean a stronger field.</text>
  </g>
`

const TWO_MAGNETS_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="28" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Two bar magnets side by side: attract (N to S) vs repel (N to N)</text>

    <!-- Left half: attracting pair (N facing S) -->
    <text x="200" y="70" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Attracting: lines join across the gap</text>

    <rect x="60" y="130" width="120" height="40" />
    <rect x="60" y="130" width="60" height="40" fill="currentColor" opacity="0.3" />
    <text x="90" y="156" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">N</text>
    <text x="150" y="156" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">S</text>

    <rect x="220" y="130" width="120" height="40" />
    <rect x="220" y="130" width="60" height="40" fill="currentColor" opacity="0.3" />
    <text x="250" y="156" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">N</text>
    <text x="310" y="156" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">S</text>

    <!-- Field lines that join across the gap, S of left to N of right -->
    <line x1="180" y1="142" x2="220" y2="142" stroke-width="1.8" />
    <polygon points="208,138 220,142 208,146" fill="currentColor" stroke="none" />
    <line x1="180" y1="158" x2="220" y2="158" stroke-width="1.8" />
    <polygon points="208,154 220,158 208,162" fill="currentColor" stroke="none" />
    <path d="M 180 130 C 195 110, 205 110, 220 130" />
    <polygon points="195,113 210,108 205,123" fill="currentColor" stroke="none" />
    <path d="M 180 170 C 195 190, 205 190, 220 170" />
    <polygon points="195,187 210,192 205,177" fill="currentColor" stroke="none" />

    <text x="200" y="240" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Field lines run from the right pole (S of left magnet)</text>
    <text x="200" y="256" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">across to the N of the right magnet.</text>

    <!-- Right half: repelling pair (N facing N) -->
    <text x="600" y="70" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Repelling: lines bulge outward, none join</text>

    <rect x="460" y="130" width="120" height="40" />
    <rect x="520" y="130" width="60" height="40" fill="currentColor" opacity="0.3" />
    <text x="490" y="156" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">S</text>
    <text x="550" y="156" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">N</text>

    <rect x="620" y="130" width="120" height="40" />
    <rect x="620" y="130" width="60" height="40" fill="currentColor" opacity="0.3" />
    <text x="650" y="156" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">N</text>
    <text x="710" y="156" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">S</text>

    <!-- Lines bulge away in the gap -->
    <path d="M 580 142 C 590 115, 610 115, 620 142" />
    <polygon points="595,118 610,113 605,128" fill="currentColor" stroke="none" />
    <path d="M 580 158 C 590 185, 610 185, 620 158" />
    <polygon points="595,182 610,187 605,172" fill="currentColor" stroke="none" />

    <text x="600" y="240" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">N poles push apart. Field lines from each N bend away,</text>
    <text x="600" y="256" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">leaving a weak region between them (a neutral point).</text>

    <line x1="60" y1="290" x2="740" y2="290" stroke-dasharray="4,4" stroke-width="1" />
    <text x="400" y="315" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Lines still never cross. Arrows still leave every N and enter every S.</text>
  </g>
`

const COMPASS_TRACING_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="28" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Plotting a field with a small compass on a desk</text>

    <!-- Bar magnet centred -->
    <rect x="320" y="170" width="160" height="36" />
    <rect x="320" y="170" width="80" height="36" fill="currentColor" opacity="0.3" />
    <text x="360" y="195" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">N</text>
    <text x="440" y="195" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">S</text>

    <!-- Faint background field line (one of the loops) -->
    <path d="M 340 170 C 340 90, 460 90, 460 170" stroke-dasharray="3,3" stroke-width="1" />

    <!-- Three compass positions along that line -->
    <!-- Position 1: above N pole, needle points outward (up and slightly right) -->
    <circle cx="340" cy="130" r="14" stroke-width="2" />
    <line x1="334" y1="138" x2="346" y2="122" stroke-width="2.5" />
    <polygon points="340,118 350,124 344,128" fill="currentColor" stroke="none" />
    <text x="305" y="135" text-anchor="end" font-size="11" stroke="none" fill="currentColor">1</text>

    <!-- Position 2: top of arc, needle points horizontal -->
    <circle cx="400" cy="100" r="14" stroke-width="2" />
    <line x1="388" y1="100" x2="412" y2="100" stroke-width="2.5" />
    <polygon points="408,96 416,100 408,104" fill="currentColor" stroke="none" />
    <text x="400" y="80" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">2</text>

    <!-- Position 3: above S pole, needle points inward (down and slightly right) -->
    <circle cx="460" cy="130" r="14" stroke-width="2" />
    <line x1="454" y1="122" x2="466" y2="138" stroke-width="2.5" />
    <polygon points="465,142 470,132 460,134" fill="currentColor" stroke="none" />
    <text x="495" y="135" text-anchor="start" font-size="11" stroke="none" fill="currentColor">3</text>

    <!-- Notes -->
    <text x="120" y="260" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">Method on a desk:</text>
    <text x="120" y="278" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">- place compass near the pole</text>
    <text x="120" y="294" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">- mark each end of the needle</text>
    <text x="120" y="310" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">- move along, repeat,</text>
    <text x="120" y="326" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">  join the dots into a curve</text>

    <text x="680" y="260" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">Why this works:</text>
    <text x="680" y="278" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">The N end of the needle</text>
    <text x="680" y="294" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">points along the field line,</text>
    <text x="680" y="310" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">in the direction of the</text>
    <text x="680" y="326" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">arrow (N to S outside).</text>

    <text x="400" y="370" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">A compass needle is itself a tiny bar magnet that lines up with the local field.</text>
  </g>
`

export const magnetismFieldLinesBarMagnet: SkillNode = {
  id: 'physics-magnetism-field-lines-bar-magnet',
  title: 'Field Lines of a Bar Magnet',
  description:
    'Magnetic field lines are a sketch of the invisible field round a bar magnet. The rules are simple: arrows leave every N pole and enter every S pole outside the magnet; the loops never cross; and the lines crowd at the poles, where the field is strongest. Two magnets close together change the pattern: a N facing a S has lines that join across the gap (attracting), while two like poles facing each other push lines outward and leave a weak region between them (repelling). A small plotting compass placed on a sheet of paper lines up with the field at each point, with the needle pointing in the direction of the arrow. By the end of this node, you can sketch the field of a single bar magnet, predict what changes when a second magnet is added, and explain how the compass method works.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-magnetism',
  zoneName: 'Magnetism',
  tier: 'confident',
  prerequisites: ['physics-magnetism-fields'],
  curriculum: {
    ks3Objective:
      'Magnetic fields by plotting with a compass, representation by field lines. Field lines run from N to S outside the magnet, never cross, and crowd where the field is stronger.',
    awardingBodies: {
      aqa: '4.7.1.2 Magnetic fields; drawing and interpreting field-line diagrams for a bar magnet (GCSE Physics 8463)',
      edexcel: 'Topic 7 Magnetism and the motor effect, 7.3-7.4 magnetic field patterns, direction and strength from line spacing (GCSE Physics 1PH0)',
      ocr: 'P6.1 Magnets and magnetic fields; field-line conventions for permanent magnets (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    // Source: AQA GCSE Physics 8463 specification 4.7.1.2 (drawing and interpreting field-line diagrams for a bar magnet), accessed 2026-05-12; standard KS3 conventions also given in CGP KS3 Physics Complete Revision and Practice (2022), bar-magnet field-line plate.
    {
      id: 'pmfl-single-magnet',
      title: 'A single bar magnet: three rules in one diagram',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read off the three field-line rules from the sketch round one bar magnet.',
      data: {
        viewBox: '0 0 800 440',
        svg: FIELD_LINE_DIAGRAM_SVG,
        hotspots: [
          {
            id: 'pmfl-single-direction',
            x: 50,
            y: 22,
            label: 'Arrows go N to S outside the magnet',
            description:
              'Every field line leaves the magnet at its N pole and curves round to enter at its S pole. The arrow on a field line shows the direction in which the N end of a compass needle would point at that spot.',
          },
          {
            id: 'pmfl-single-no-cross',
            x: 50,
            y: 95,
            label: 'Field lines never cross',
            description:
              'A single field line shows one direction at each point. If two lines crossed, the field would have two directions at once, which it cannot. Smooth curves only; redraw any sketch that has lines crossing.',
          },
          {
            id: 'pmfl-single-density-poles',
            x: 16,
            y: 53,
            label: 'Closer lines mean stronger field',
            description:
              'The lines crowd in close together near the N and S poles. That is where the magnetic field is strongest. Out at the sides (level with the middle of the magnet) the lines spread out, so the field is weaker there.',
          },
          {
            id: 'pmfl-single-density-sides',
            x: 84,
            y: 53,
            label: 'Lines spread out at the sides',
            description:
              'At the same distance from the magnet, the field at the side is much weaker than the field straight off either pole. The same rule applies to a fridge magnet: it sticks best face on, not edge on.',
          },
        ],
      },
    },
    // Source: Edexcel GCSE Physics 1PH0 specification Topic 7 (7.3 to 7.4 magnetic field patterns from two magnets, direction and strength from line spacing), accessed 2026-05-12; qualitative two-magnet patterns are standard at KS3 in CGP KS3 Physics Complete Revision and Practice (2022).
    {
      id: 'pmfl-two-magnets',
      title: 'Two bar magnets: attract vs repel',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare the field pattern when two bar magnets attract or repel.',
      data: {
        viewBox: '0 0 800 330',
        svg: TWO_MAGNETS_SVG,
        hotspots: [
          {
            id: 'pmfl-two-attract',
            x: 25,
            y: 17,
            label: 'N facing S: lines join across the gap',
            description:
              'When a N pole faces a S pole, the field lines run smoothly from the S of one magnet across the gap and into the N of the other. The field between the magnets is strong; iron filings would line up clearly here.',
          },
          {
            id: 'pmfl-two-repel',
            x: 75,
            y: 17,
            label: 'N facing N: lines bulge outward',
            description:
              'Two like poles facing each other repel. The field lines from each N bend away, so almost no lines cross the gap. A small weak region forms between them, called a neutral point.',
          },
          {
            id: 'pmfl-two-rules-hold',
            x: 50,
            y: 95,
            label: 'The same three rules still apply',
            description:
              'Arrows always leave a N and enter a S. The lines still never cross. Where lines are close together, the field is strong; where they are spread out, the field is weak.',
          },
        ],
      },
    },
    // Source: OCR GCSE Physics J259 Gateway specification P6.1 (plotting compass methods for field-line diagrams; needle aligns with the local field), accessed 2026-05-12; the iron-filing and plotting-compass method is described in CGP KS3 Physics Complete Revision and Practice (2022).
    {
      id: 'pmfl-compass-method',
      title: 'Plotting a field with a small compass',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how a plotting compass on a sheet of paper traces a field line round a bar magnet.',
      data: {
        viewBox: '0 0 800 390',
        svg: COMPASS_TRACING_SVG,
        hotspots: [
          {
            id: 'pmfl-compass-1',
            x: 42,
            y: 33,
            label: 'Position 1: just off the N pole',
            description:
              'Place the compass on the paper near the N pole. The N end of the needle points away from the magnet, along the field line. Mark where the needle points to.',
          },
          {
            id: 'pmfl-compass-2',
            x: 50,
            y: 26,
            label: 'Position 2: at the top of the loop',
            description:
              'Move the compass to the next mark and place it again. The needle swings round; here it points along the curve, broadly sideways. Mark the new direction.',
          },
          {
            id: 'pmfl-compass-3',
            x: 58,
            y: 33,
            label: 'Position 3: just off the S pole',
            description:
              'Near the S pole, the N end of the needle now points back toward the magnet, since the field line is heading into the S. Mark the direction; join your three points with a smooth curve.',
          },
          {
            id: 'pmfl-compass-why',
            x: 50,
            y: 95,
            label: 'Why this works',
            description:
              'A compass needle is itself a tiny bar magnet. It rotates until its N end points along the local field, in the direction of the arrow. Walk the compass round and the marks trace out one field line.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    // Source: AQA GCSE Physics 8463 specification 4.7.1.2; standard KS3 wording in CGP KS3 Physics Complete Revision and Practice (2022).
    {
      id: 'pmfl-worked-1',
      title: 'Sketching the field of one bar magnet',
      steps: [
        {
          explanation:
            'Set out the situation. A Year 7 pupil has drawn a bar magnet on a sheet of paper, labelled N on the left and S on the right. They need to add field lines.',
        },
        {
          explanation:
            'Apply rule 1. Every field line starts at the N pole and ends at the S pole outside the magnet. Draw an arrowhead on each line so the direction is clear.',
        },
        {
          explanation:
            'Apply rule 2. The lines never cross each other. Sketch smooth, curving loops; if any two lines look like they want to cross, redraw them further apart.',
        },
        {
          explanation:
            'Apply rule 3. The lines crowd in close at the poles, where the field is strongest, and spread out at the sides, where the field is weaker.',
          maths: 'spacing at poles < spacing at sides',
        },
        {
          explanation:
            'Finish. A good sketch shows three or four full loops above the magnet and three or four below, every line with an arrow pointing N to S, none of them crossing, and a clear pinch at each pole.',
        },
      ],
    },
    // Source: Edexcel GCSE Physics 1PH0 specification Topic 7 (qualitative field patterns when two bar magnets are close); KS3 wording from CGP KS3 Physics Complete Revision and Practice (2022).
    {
      id: 'pmfl-worked-2',
      title: 'Predicting the pattern between two magnets',
      steps: [
        {
          explanation:
            'Set out the situation. A pupil places two bar magnets on a desk, with the N of the left magnet 2 cm from the N of the right magnet. They want to predict the field pattern.',
        },
        {
          explanation:
            'Identify the case. Like poles face each other, so the magnets repel.',
        },
        {
          explanation:
            'Apply the rules. Each N pole still has lines leaving it. Because the other end is also a N (not a S), no lines join across the gap. The lines bend away to the sides instead.',
        },
        {
          explanation:
            'Spot the weak region. Between the two N poles, the fields from the two magnets push in opposite directions and roughly cancel. A small weak region (neutral point) forms in the middle of the gap.',
          maths: 'left field right + right field left = roughly 0 in the middle',
        },
        {
          explanation:
            'State the answer. The sketch shows two sets of curved lines that bulge outward, none crossing the gap, with a small calm region right in the middle. If iron filings were sprinkled here they would not form a clear pattern in the middle of the gap.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pmfl-q1',
      type: 'multiple-choice',
      stem: 'Outside a bar magnet, in which direction do the magnetic field line arrows point?',
      tier: 'core',
      options: [
        'From S pole to N pole.',
        'Always straight up the page.',
        'In random directions, with no rule.',
        'From N pole to S pole.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'pmfl-mis-direction-reversed',
      hint: 'Remember: every field line starts at a N pole and ends at a S pole outside the magnet.',
    },
    {
      id: 'pmfl-q2',
      type: 'multiple-choice',
      stem: 'A pupil draws a field-line diagram where two of the lines cross over each other near the side of the bar magnet. What should they do?',
      tier: 'core',
      options: [
        'Leave it; field lines often cross.',
        'Redraw so the lines do not cross, because a field line shows one direction at each point.',
        'Make the cross thicker so it shows up.',
        'Add a third line at the cross.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pmfl-mis-lines-cross',
      hint: 'A single point can have only one field direction, so two lines cannot cross there.',
    },
    {
      id: 'pmfl-q3',
      type: 'multiple-choice',
      stem: 'On a field-line diagram, the lines are drawn very close together in one region. What does that tell you about the field there?',
      tier: 'core',
      options: [
        'The field is weaker in that region.',
        'The field has reversed direction.',
        'The field is stronger in that region.',
        'There is no field in that region.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pmfl-mis-density-backwards',
      hint: 'Closer lines mean a stronger field; lines that are spread out mean a weaker field.',
    },
    {
      id: 'pmfl-q4',
      type: 'numeric-entry',
      stem: 'Round a single bar magnet, the field lines crowd together where the field is strongest. On a standard sketch, how many such crowded regions does one bar magnet have? Give your answer as a whole number.',
      tier: 'core',
      correctAnswer: 2,
      unit: 'regions',
      xpValue: 10,
      hint: 'Count the poles where the lines pinch together: there are two poles per bar magnet.',
    },
    {
      id: 'pmfl-q5',
      type: 'numeric-entry',
      stem: 'A pupil sketches the field of one bar magnet and draws four field lines above the magnet and four below. How many field lines have they drawn in total?',
      tier: 'core',
      correctAnswer: 8,
      unit: 'lines',
      xpValue: 10,
      hint: 'Just add the lines above and below: 4 + 4.',
    },
    {
      id: 'pmfl-q6',
      type: 'numeric-entry',
      stem: 'In one sketch, a 1 cm square just off a bar magnet pole contains 6 field lines. The same size square out at the side contains 2 field lines. How many times stronger is the field at the pole than at the side, judged by line density? Give your answer as a whole number.',
      tier: 'core',
      correctAnswer: 3,
      unit: 'times',
      xpValue: 10,
      misconceptionId: 'pmfl-mis-density-backwards',
      hint: 'Closer lines mean a stronger field. Divide the number of lines at the pole by the number at the side: 6 / 2.',
    },
    {
      id: 'pmfl-q7',
      type: 'multiple-choice',
      stem: 'A small plotting compass is placed near a bar magnet. The N end of the needle points along a field line. In which direction along the line does the needle point?',
      tier: 'core',
      options: [
        'Against the arrow on the field line.',
        'At right angles to the field line.',
        'In the direction of the arrow on the field line.',
        'Randomly; the compass does not respond to a bar magnet.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pmfl-mis-compass-random',
      hint: 'A compass needle is itself a tiny bar magnet; it lines up with the local field, in the direction of the arrow.',
    },
    {
      id: 'pmfl-q8',
      type: 'multiple-choice',
      stem: 'Two bar magnets are placed end to end so that the N of one points directly at the S of the other, separated by a small gap. What does the field pattern in the gap look like?',
      tier: 'confident',
      options: [
        'No lines anywhere; the field cancels.',
        'Lines join smoothly across the gap, from the S of one magnet to the N of the other (in the direction of the arrows).',
        'Lines bulge outward; no lines cross the gap.',
        'Lines form a perfect circle in the gap.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'pmfl-mis-no-lines-attract',
      hint: 'Attracting poles let the field lines run smoothly from one magnet into the next.',
    },
    {
      id: 'pmfl-q9',
      type: 'multiple-choice',
      stem: 'Two bar magnets face each other with the N pole of each pointing at the other. Which best describes the field between them?',
      tier: 'confident',
      options: [
        'The field lines join smoothly across the gap.',
        'The field is strongest right in the middle of the gap.',
        'A new N pole appears in the middle of the gap.',
        'The lines bend away to the sides, leaving a weak region (a neutral point) between the magnets.',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'pmfl-mis-lines-meet-repel',
      hint: 'Two like poles repel. The fields from each N pole push in opposite directions in the gap, so the two roughly cancel in the middle.',
    },
    {
      id: 'pmfl-q10',
      type: 'multiple-choice',
      stem: 'On a clean sheet of paper, a pupil places a plotting compass next to the N pole of a bar magnet, marks the position of each end of the needle, then moves the compass and repeats. What are they doing?',
      tier: 'confident',
      options: [
        'Plotting a field line by joining the marks into a smooth curve.',
        'Measuring the mass of the compass.',
        'Charging the compass by friction.',
        'Demagnetising the bar magnet.',
      ],
      correctIndex: 0,
      xpValue: 15,
      hint: 'Each mark gives the direction of the field at that point; join them up.',
    },
    {
      id: 'pmfl-q11',
      type: 'multiple-choice',
      stem: 'Iron filings are sprinkled on a sheet of paper over a bar magnet. What pattern is seen?',
      tier: 'confident',
      options: [
        'A perfectly straight line from one end of the magnet to the other.',
        'A random scatter; iron filings do not respond to magnets.',
        'Loops running from the N to the S of the magnet, with the filings pinched in close together at the poles.',
        'A spiral round the centre of the magnet.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pmfl-mis-filings-random',
      hint: 'Each filing becomes a tiny induced magnet that lines up with the local field, sketching out the field lines.',
    },
    {
      id: 'pmfl-q12',
      type: 'numeric-entry',
      stem: 'On a sketch of a bar magnet, a pupil draws 6 field lines crossing a 1 cm square just off a pole. They want the same density at twice the distance from the pole, where the square is the same size but the field has weakened to a quarter. How many lines should they draw through that further-out square? Give your answer as a whole number.',
      tier: 'confident',
      correctAnswer: 2,
      tolerance: 1,
      unit: 'lines',
      xpValue: 15,
      misconceptionId: 'pmfl-mis-density-backwards',
      hint: 'Line density follows the field strength. A quarter of 6 is 1.5; round to the nearest whole line, which is 2 (or use 6 / 4 = 1.5).',
    },
    {
      id: 'pmfl-q13',
      type: 'numeric-entry',
      stem: 'A pupil places a compass on a desk in line with the long axis of a bar magnet, just off the N pole. The N end of the needle points away from the magnet, along that axis. Through how many degrees has the needle turned, compared with a bearing of due north on the same desk (lined up before the magnet was placed)? Assume the magnet was laid down so its N pole points due east. Give your answer as a whole number.',
      tier: 'confident',
      correctAnswer: 90,
      unit: 'degrees',
      xpValue: 15,
      hint: 'The needle was pointing north (0 degrees); it now points east. North to east is a quarter turn.',
    },
    {
      id: 'pmfl-q14',
      type: 'drag-order',
      stem: 'Put these four spots round a single bar magnet in order from strongest field to weakest field, judged by field-line density on a standard sketch.',
      tier: 'confident',
      items: [
        '2 cm out at the side, level with the middle of the magnet',
        '20 cm directly off the N pole',
        '2 cm directly off the N pole',
        '10 cm out at the side, level with the middle of the magnet',
      ],
      correctOrder: [2, 0, 3, 1],
      xpValue: 15,
      hint: 'Two effects: distance (closer is stronger) and direction (off a pole is stronger than out at the side). At the side, lines spread; off a pole, they crowd in.',
    },
    {
      id: 'pmfl-q15',
      type: 'spot-misconception',
      stem: 'Aisha is talking about her field-line sketch of one bar magnet.',
      tier: 'confident',
      statements: [
        {
          text: 'Aisha says: "I drew the lines going from S to N outside the magnet, because the S pole is heavier so the field flows toward N." This is wrong; outside the magnet the arrows run from N to S, and pole weight is not what sets the direction.',
          isMisconception: true,
        },
        {
          text: 'Aisha says: "Each line leaves the N pole, curves round outside the magnet and enters at the S pole. The lines are crowded at the poles where the field is strongest." This is right.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pmfl-mis-direction-reversed',
    },
    {
      id: 'pmfl-q16',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is asked to sketch the field round one bar magnet on a desk. They have set out a clear method.',
      tier: 'challenge',
      steps: [
        'Draw the bar magnet on the paper and label the N and S poles.',
        'Sketch arrowed loops that leave the N pole and curve round to the S pole outside the magnet.',
        null,
        'Crowd the lines together close to each pole, where the field is strongest, and spread them out at the sides.',
        'Check the sketch against the three rules: arrows N to S outside, lines never cross, closer lines mean stronger field.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Make sure no two lines cross by redrawing any pair that get too close, since a field line shows one direction at each point.',
      xpValue: 20,
    },
    {
      id: 'pmfl-q17',
      type: 'numeric-entry',
      stem: 'A pupil draws field lines round one bar magnet. A 2 cm length of paper just off the N pole has 8 field lines crossing it. A 2 cm length out at the side, level with the middle, has 2 field lines crossing it. What is the ratio of field strength at the pole to field strength at the side, given as a single whole number (i.e. how many times stronger is the field at the pole)?',
      tier: 'challenge',
      correctAnswer: 4,
      unit: 'times',
      xpValue: 20,
      misconceptionId: 'pmfl-mis-density-backwards',
      hint: 'Line density is proportional to field strength. Divide: 8 / 2.',
    },
    {
      id: 'pmfl-q18',
      type: 'multiple-choice',
      stem: 'A pupil claims: "If I draw enough field lines, the gap between them disappears, so the field is just as strong far away as it is near the magnet." Why is this wrong?',
      tier: 'challenge',
      options: [
        'Far from the magnet, the lines spread out, so even with many lines you cannot make them as close together as they are near the poles. Field strength drops with distance.',
        'The pupil is right; the field stays the same at any distance.',
        'The lines actually get closer as you move away, so the field is stronger far away.',
        'Field lines do not relate to field strength at all.',
      ],
      correctIndex: 0,
      xpValue: 20,
      misconceptionId: 'pmfl-mis-uniform-field',
      hint: 'Line density tracks field strength. As you move away, the same lines spread out, so the density falls.',
    },
    {
      id: 'pmfl-q19',
      type: 'spot-misconception',
      stem: 'Two pupils are explaining what a compass does when placed between a pair of bar magnets in a repelling arrangement (N facing N).',
      tier: 'challenge',
      statements: [
        {
          text: 'Pupil A says: "There is no field in the middle, so the compass needle just spins freely and never settles." This is wrong; the field is weak there (a neutral point), but the needle still lines up with whatever local field remains, and only fails to settle right at the single point where the field truly cancels.',
          isMisconception: true,
        },
        {
          text: 'Pupil B says: "Between two N poles facing each other, the fields from the two magnets push in opposite directions and roughly cancel. The compass needle lines up with whatever weak field is left, and right at the exact neutral point it points in no clear direction." This is right.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'pmfl-mis-lines-meet-repel',
    },
    {
      id: 'pmfl-q20',
      type: 'multiple-choice',
      stem: 'In a UK school lab the teacher places two strong bar magnets 4 cm apart on a desk, N facing S, and sprinkles iron filings on a sheet of paper laid over them. Which prediction matches what you would expect to see?',
      tier: 'challenge',
      options: [
        'A blank patch in the middle of the gap, with no pattern at all.',
        'Filings line up in clear curves running across the gap from one magnet to the other, sharply defined where the field is strongest.',
        'Filings spin in circles like miniature whirlpools.',
        'Filings line up only at the very far ends of each magnet, never in the gap.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'pmfl-mis-filings-random',
      hint: 'N facing S means attracting; the field lines run smoothly across the gap, so filings line up along them.',
    },
    {
      id: 'pmfl-q21',
      type: 'numeric-entry',
      stem: 'On a sketch of one bar magnet, 12 field lines fit through a 2 cm window placed right at the N pole. The same window placed 4 cm away (further from the pole, along the long axis) holds only 3 lines. By what factor does the field strength drop between those two windows? Give your answer as a whole number.',
      tier: 'challenge',
      correctAnswer: 4,
      unit: 'times',
      xpValue: 20,
      misconceptionId: 'pmfl-mis-uniform-field',
      hint: 'Line density tracks field strength. Drop factor is 12 divided by 3.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, candidates drew arrows pointing from S to N outside the magnet when sketching field-line diagrams.
    {
      id: 'pmfl-mis-direction-reversed',
      description:
        'Drawing or reading field-line arrows as running from S to N outside the magnet.',
      triggerAnswer: 'arrows-s-to-n',
      correction:
        'Outside a bar magnet, every field-line arrow runs from N to S. The rule does not depend on which pole looks heavier or longer.',
      reExplanation:
        'A field line shows the direction in which the N end of a small compass needle would point at that spot. The N of the compass is repelled by the N of the magnet, so it points away from the N pole and toward the S pole. Tag every line in a sketch with an arrow that leaves the N and enters the S.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2023, candidates sketched field-line diagrams in which loops crossed each other.
    {
      id: 'pmfl-mis-lines-cross',
      description:
        'Drawing field-line diagrams in which two lines cross over each other.',
      triggerAnswer: 'lines-cross-ok',
      correction:
        'Field lines never cross. At a crossing point the field would have two directions at once, which it cannot.',
      reExplanation:
        'At every point round a magnet the field has one direction, set by the local pull on a compass needle. One direction means one line through that point, not two. If a sketch has lines that touch or cross, redraw them as separate smooth curves with a clear gap between them.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2022, candidates wrote that lines spread out at the poles show a stronger field, confusing density with distance.
    {
      id: 'pmfl-mis-density-backwards',
      description:
        'Reading wide gaps between field lines as stronger field, and tightly packed lines as weaker field.',
      triggerAnswer: 'density-reversed',
      correction:
        'Line density tracks field strength: lines packed close together mean a strong field; lines spread out mean a weak field.',
      reExplanation:
        'Picture the lines as showing how much magnetic push you would feel per centimetre. Many lines packed into a small space means you would feel a strong pull there, as at the poles. Few lines in the same space means a weak pull, as out at the sides. Density goes with strength, not against it.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2021, candidates wrote that a compass needle responds randomly near a bar magnet, ignoring the field-line link.
    {
      id: 'pmfl-mis-compass-random',
      description:
        'Believing a plotting compass spins randomly near a bar magnet rather than aligning with the local field.',
      triggerAnswer: 'compass-random',
      correction:
        'A compass needle is a tiny bar magnet. It rotates until its N end points along the local field line, in the direction of the arrow.',
      reExplanation:
        'Set a compass on a desk far from any magnet and the needle settles roughly north, lined up with the gentle field of the Earth. Move it next to a bar magnet, and the needle swings to line up with the much stronger field of that magnet. At every spot the N end points along the field line in the direction of the arrow.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2022, candidates wrote that no field lines run across the gap when two magnets attract.
    {
      id: 'pmfl-mis-no-lines-attract',
      description:
        'Believing the field between two attracting bar magnets is empty, with no field lines in the gap.',
      triggerAnswer: 'attract-no-lines',
      correction:
        'When a N pole faces a S pole, the field lines join smoothly across the gap from the S of one magnet into the N of the other.',
      reExplanation:
        'Attraction is the field lines being able to flow from one magnet into the next. Iron filings between the two magnets show this clearly: they line up in crisp curves running across the gap. The field is at its strongest in that small region, which is also why an iron paperclip placed in the gap would jump to either magnet.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2023, candidates wrote that field lines meet head on between two repelling magnets, ignoring the neutral point.
    {
      id: 'pmfl-mis-lines-meet-repel',
      description:
        'Drawing field lines that meet head on, or even cross, between two repelling like poles.',
      triggerAnswer: 'repel-lines-meet',
      correction:
        'Two like poles repel: their field lines bend away from each other, never meeting. A weak region (a neutral point) forms in the gap.',
      reExplanation:
        'Each N pole pushes the field away from itself. The two fields point in opposite directions in the gap, so they roughly cancel rather than meet. The result is a small weak region in the middle where a compass needle barely settles. Sketch the lines bulging outward to either side, with no line cutting across the centre of the gap.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2020, candidates said iron filings just scatter at random near a magnet, ignoring induced alignment.
    {
      id: 'pmfl-mis-filings-random',
      description:
        'Believing iron filings sprinkled near a bar magnet scatter randomly rather than tracing field lines.',
      triggerAnswer: 'filings-random',
      correction:
        'Each iron filing becomes a tiny induced magnet in the field and rotates to line up with it. The filings trace out the field lines as crisp curves.',
      reExplanation:
        'When the filings settle, they form chains that mirror the field-line sketch: tight curves between attracting poles, spread out at the sides, and dense clusters at the poles. Tapping the paper helps each filing rotate until it lines up. The pattern is a snapshot of the field at that moment.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2021, candidates assumed the field round a bar magnet is uniform, drawing parallel evenly spaced straight lines.
    {
      id: 'pmfl-mis-uniform-field',
      description:
        'Believing the field round a bar magnet is uniform everywhere, drawn as parallel evenly spaced straight lines.',
      triggerAnswer: 'uniform-field',
      correction:
        'The field round a bar magnet is not uniform. Field lines curve from N to S, crowd at the poles, and spread out at the sides; the field weakens with distance.',
      reExplanation:
        'Uniform fields, with evenly spaced parallel lines, exist inside a long current-carrying solenoid, but not round a single bar magnet. Sketch the bar-magnet field as a set of loops, tightly packed at the poles and spreading out further away, with the loops getting larger as they bow round outside the magnet.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const magnetismFieldLinesBarMagnetZoneNodes = [magnetismFieldLinesBarMagnet]
