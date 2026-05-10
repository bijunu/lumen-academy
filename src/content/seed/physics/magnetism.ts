import type { SkillNode, Zone } from '@/types/content'

const MAGNET_POLES_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Bar magnets: like poles repel, unlike poles attract</text>

    <!-- Top row: N-N repel -->
    <text x="200" y="80" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">North to North: repel</text>
    <rect x="60" y="100" width="120" height="32" />
    <rect x="60" y="100" width="60" height="32" fill="currentColor" opacity="0.3" />
    <text x="90" y="122" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">N</text>
    <text x="150" y="122" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">S</text>
    <rect x="220" y="100" width="120" height="32" />
    <rect x="220" y="100" width="60" height="32" fill="currentColor" opacity="0.3" />
    <text x="250" y="122" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">N</text>
    <text x="310" y="122" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">S</text>
    <!-- Repel arrows pointing away from each other (between the two N poles at x=180 and x=220) -->
    <line x1="180" y1="116" x2="160" y2="116" stroke-width="2.5" />
    <polygon points="166,110 154,116 166,122" fill="currentColor" stroke="none" />
    <line x1="220" y1="116" x2="240" y2="116" stroke-width="2.5" />
    <polygon points="234,110 246,116 234,122" fill="currentColor" stroke="none" />
    <text x="200" y="160" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">push apart</text>

    <!-- Bottom row: N-S attract -->
    <text x="600" y="80" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">North to South: attract</text>
    <rect x="460" y="100" width="120" height="32" />
    <rect x="460" y="100" width="60" height="32" fill="currentColor" opacity="0.3" />
    <text x="490" y="122" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">N</text>
    <text x="550" y="122" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">S</text>
    <rect x="620" y="100" width="120" height="32" />
    <rect x="680" y="100" width="60" height="32" fill="currentColor" opacity="0.3" />
    <text x="650" y="122" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">N</text>
    <text x="710" y="122" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">S</text>
    <!-- Attract arrows pointing toward each other -->
    <line x1="585" y1="116" x2="605" y2="116" stroke-width="2.5" />
    <polygon points="599,110 611,116 599,122" fill="currentColor" stroke="none" />
    <line x1="615" y1="116" x2="595" y2="116" stroke-width="2.5" />
    <polygon points="601,110 589,116 601,122" fill="currentColor" stroke="none" />
    <text x="600" y="160" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">pull together</text>

    <!-- Materials section -->
    <line x1="60" y1="200" x2="740" y2="200" stroke-dasharray="4,4" stroke-width="1" />
    <text x="400" y="225" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Magnetic vs non-magnetic materials</text>

    <!-- Magnetic column -->
    <text x="200" y="255" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Magnetic</text>
    <text x="200" y="275" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">iron (e.g. paper clip)</text>
    <text x="200" y="290" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">steel (most fridge doors)</text>
    <text x="200" y="305" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">nickel</text>
    <text x="200" y="320" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">cobalt</text>

    <!-- Non-magnetic column -->
    <text x="600" y="255" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Non-magnetic</text>
    <text x="600" y="275" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">aluminium (a metal!)</text>
    <text x="600" y="290" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">copper (a metal!)</text>
    <text x="600" y="305" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">plastic</text>
    <text x="600" y="320" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">wood, glass</text>

    <text x="400" y="365" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Not all metals are magnetic. Aluminium drink cans and copper wires do not stick to fridge magnets.</text>
  </g>
`

const FIELD_LINES_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Magnetic field lines round a bar magnet (N to S outside the magnet)</text>

    <!-- Bar magnet centred -->
    <rect x="280" y="170" width="240" height="60" />
    <rect x="280" y="170" width="120" height="60" fill="currentColor" opacity="0.3" />
    <text x="340" y="208" text-anchor="middle" font-size="22" font-weight="700" stroke="none" fill="currentColor">N</text>
    <text x="460" y="208" text-anchor="middle" font-size="22" font-weight="700" stroke="none" fill="currentColor">S</text>

    <!-- Field lines: loops from N around to S -->
    <!-- Loop 1: just above the magnet -->
    <path d="M 320 170 C 320 110, 480 110, 480 170" />
    <polygon points="395,113 410,108 405,123" fill="currentColor" stroke="none" />

    <!-- Loop 2: a bit further out -->
    <path d="M 310 170 C 310 80, 490 80, 490 170" />
    <polygon points="395,80 410,75 405,90" fill="currentColor" stroke="none" />

    <!-- Loop 3: largest -->
    <path d="M 300 170 C 300 50, 500 50, 500 170" />
    <polygon points="395,49 410,44 405,59" fill="currentColor" stroke="none" />

    <!-- Loop -1: just below -->
    <path d="M 320 230 C 320 290, 480 290, 480 230" />
    <polygon points="395,293 410,288 405,303" fill="currentColor" stroke="none" />

    <!-- Loop -2: further below -->
    <path d="M 310 230 C 310 320, 490 320, 490 230" />
    <polygon points="395,323 410,318 405,333" fill="currentColor" stroke="none" />

    <!-- Labels -->
    <text x="120" y="200" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">field is strongest</text>
    <text x="120" y="218" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">at the poles</text>
    <text x="120" y="240" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">(lines closest together)</text>

    <text x="680" y="200" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">arrows point from</text>
    <text x="680" y="218" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">N to S outside</text>
    <text x="680" y="240" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">the magnet</text>
  </g>
`

const EARTH_COMPASS_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Earth as a magnet: a compass needle points roughly north</text>

    <!-- Earth circle -->
    <circle cx="400" cy="220" r="100" />
    <text x="400" y="115" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">geographic N</text>
    <text x="400" y="345" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">geographic S</text>

    <!-- Internal bar magnet (slightly tilted to suggest the offset) -->
    <line x1="395" y1="135" x2="405" y2="305" stroke-width="3" stroke-dasharray="6,4" />
    <text x="380" y="150" text-anchor="end" font-size="12" font-weight="700" stroke="none" fill="currentColor">magnetic S</text>
    <text x="385" y="153" text-anchor="end" font-size="10" stroke="none" fill="currentColor">(inside Earth)</text>
    <text x="420" y="298" text-anchor="start" font-size="12" font-weight="700" stroke="none" fill="currentColor">magnetic N</text>
    <text x="425" y="312" text-anchor="start" font-size="10" stroke="none" fill="currentColor">(inside Earth)</text>

    <!-- Compass needle on Earth's surface -->
    <circle cx="500" cy="170" r="22" stroke-width="2.5" />
    <line x1="500" y1="152" x2="500" y2="188" stroke-width="2.5" />
    <polygon points="494,160 500,148 506,160" fill="currentColor" stroke="none" />
    <text x="500" y="146" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">N</text>
    <text x="500" y="200" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">S</text>
    <text x="555" y="170" text-anchor="start" font-size="11" stroke="none" fill="currentColor">compass</text>

    <!-- Note -->
    <text x="120" y="200" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">Compass arrow N points</text>
    <text x="120" y="218" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">to geographic North</text>
    <text x="120" y="240" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">because Earth has a magnetic</text>
    <text x="120" y="256" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">S pole near geographic N.</text>
  </g>
`

export const magnetismFields: SkillNode = {
  id: 'physics-magnetism-fields',
  title: 'Magnets and Magnetic Fields',
  description:
    'Magnets have a north (N) pole and a south (S) pole. Like poles repel and unlike poles attract. Magnetic materials are iron, steel, nickel, and cobalt. Most metals (aluminium, copper) and all non-metals (plastic, wood, glass) are not magnetic. The space round a magnet where it pushes or pulls magnetic objects is called its magnetic field. Field lines drawn from N to S outside the magnet are a useful sketch: they are closer together where the field is stronger (at the poles). Earth itself behaves like a giant bar magnet, which is why a compass needle lines up roughly north-south. UK contexts include fridge magnets, the bar magnets in a school lab tray, iron-filing patterns from a Year 7 practical, and a compass on a Lake District walk. Year 7 keeps it qualitative; magnetic flux density (B) in tesla and field strength formulas are GCSE+.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-magnetism',
  zoneName: 'Magnetism',
  tier: 'core',
  prerequisites: [],
  curriculum: {
    ks3Objective:
      'Magnetic poles, attraction and repulsion. Magnetic fields by plotting with compass, representation by field lines. Earth\'s magnetism, compass and navigation.',
    awardingBodies: {
      aqa: '4.7.1 Permanent and induced magnetism, magnetic forces and fields (GCSE Physics 8463)',
      edexcel: 'Topic 7 Magnetism and the motor effect, 7.1-7.4 permanent and induced magnets, magnetic fields (GCSE Physics 1PH0)',
      ocr: 'P6.1 Magnets and magnetic fields (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'mag-scene-poles',
      title: 'Magnet Poles and Magnetic Materials',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare like-pole repulsion with unlike-pole attraction, and to see which materials are magnetic.',
      data: {
        viewBox: '0 0 800 400',
        svg: MAGNET_POLES_SVG,
        hotspots: [
          {
            id: 'mag-p-repel',
            x: 25,
            y: 30,
            label: 'Like poles repel',
            description:
              'Two N poles facing each other push apart. Two S poles facing each other do the same. The rule is simple: like poles repel, no matter how strong the magnets are.',
          },
          {
            id: 'mag-p-attract',
            x: 75,
            y: 30,
            label: 'Unlike poles attract',
            description:
              'An N pole and an S pole pull toward each other. Most fridge magnets work this way: the back of the magnet is one pole, and a bit of magnetic steel in the fridge door becomes the opposite pole when the magnet is near it.',
          },
          {
            id: 'mag-p-magnetic',
            x: 25,
            y: 75,
            label: 'Magnetic: iron, steel, nickel, cobalt',
            description:
              'Only a few materials are magnetic. The main one is iron. Steel is mostly iron, so it is magnetic too. Nickel and cobalt are also magnetic. A magnet sticks to a paper clip (steel), to most fridge doors (steel), and to iron filings.',
          },
          {
            id: 'mag-p-non-magnetic',
            x: 75,
            y: 75,
            label: 'Non-magnetic: aluminium, copper, plastic, wood',
            description:
              'Aluminium and copper are metals but they are not magnetic. A magnet does not stick to a Coke can or a stripped copper wire. Plastic, wood, glass, and rubber are also not magnetic. The trap "all metals are magnetic" is one to spot.',
          },
        ],
      },
    },
    {
      id: 'mag-scene-field-lines',
      title: 'The Magnetic Field Round a Bar Magnet',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how field lines run from N to S outside the magnet, and where the field is strongest.',
      data: {
        viewBox: '0 0 800 400',
        svg: FIELD_LINES_SVG,
        hotspots: [
          {
            id: 'mag-f-direction',
            x: 50,
            y: 22,
            label: 'Field lines go from N to S outside the magnet',
            description:
              'A magnetic field line shows the direction the N pole of a small test compass would point. Outside the magnet, the lines come out of the N pole, curve round, and go back into the S pole.',
          },
          {
            id: 'mag-f-poles-strong',
            x: 15,
            y: 55,
            label: 'Strongest near the poles',
            description:
              'Where the field lines are closest together, the magnetic force is strongest. That is at the poles. A paper clip placed near the middle of a bar magnet feels less pull than one placed at the end.',
          },
          {
            id: 'mag-f-iron-filings',
            x: 85,
            y: 55,
            label: 'Iron filings show the pattern',
            description:
              'In a school practical, iron filings sprinkled on paper round a bar magnet line up along the field. The pattern is the same shape as the lines you draw: loops from N to S, closest together at the ends.',
          },
        ],
      },
    },
    {
      id: 'mag-scene-earth',
      title: 'Earth as a Giant Magnet: How a Compass Works',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see why a compass needle points roughly north and where Earth\'s magnetic poles sit.',
      data: {
        viewBox: '0 0 800 400',
        svg: EARTH_COMPASS_SVG,
        hotspots: [
          {
            id: 'mag-e-bar',
            x: 50,
            y: 55,
            label: 'Earth behaves like a bar magnet',
            description:
              'The molten iron in Earth\'s core makes Earth into a giant magnet, with a magnetic field that fills the space round the planet. A small bar-magnet picture is a useful Year 7 model.',
          },
          {
            id: 'mag-e-compass',
            x: 64,
            y: 42,
            label: 'A compass needle lines up with Earth\'s field',
            description:
              'A compass is a tiny bar magnet on a pivot. It rotates until its N end points along the local field. On a Lake District walk, the N end always swings round to point roughly north.',
          },
          {
            id: 'mag-e-surprise',
            x: 15,
            y: 55,
            label: 'A surprise: magnetic S near geographic N',
            description:
              'A compass N points to geographic North because there is a magnetic S pole there inside Earth (unlike poles attract). The labels swap, but the picture is consistent. Year 7 just needs the rule "compass N points roughly north" and that Earth itself is a magnet.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'mag-worked-1',
      title: 'Predicting attract or repel for two bar magnets',
      steps: [
        {
          explanation:
            'Set the scene. A pupil in Tunbridge Wells lays two bar magnets on a desk, end to end. The left magnet has its N pole facing right, and the right magnet has its N pole facing left.',
        },
        {
          explanation:
            'Identify the two facing poles. Left magnet: N facing right. Right magnet: N facing left. So the two poles meeting in the middle are N and N.',
          maths: 'facing poles: N and N (like poles)',
        },
        {
          explanation:
            'Recall the rule. Like poles repel, unlike poles attract. Two N poles facing each other are like poles.',
        },
        {
          explanation:
            'State the result. The two magnets push apart. If the pupil lets go of one, it slides away. If they flip the right magnet round (so its S pole faces left), the magnets would attract and snap together.',
          maths: 'N to N: repel (push apart)',
        },
      ],
    },
    {
      id: 'mag-worked-2',
      title: 'Sorting a tray of objects into magnetic and non-magnetic',
      steps: [
        {
          explanation:
            'Set the scene. A Year 7 in a Sevenoaks lab tests a tray of objects with a bar magnet: a steel paper clip, an aluminium drink-can ring-pull, a copper coin, a plastic ruler, an iron nail, and a wooden pencil.',
        },
        {
          explanation:
            'Recall the rule. Magnetic materials are iron, steel, nickel, and cobalt. Most other things, including most metals, are not magnetic.',
        },
        {
          explanation:
            'Test each object with the magnet, in turn, and group it. Steel paper clip: sticks. Iron nail: sticks. Aluminium ring-pull: does NOT stick. Copper coin: does NOT stick. Plastic ruler: does NOT stick. Wooden pencil: does NOT stick.',
          maths: 'magnetic: paper clip, iron nail; non-magnetic: aluminium, copper, plastic, wood',
        },
        {
          explanation:
            'Spot the trap. Aluminium and copper are metals, but neither sticks. The rule is not "all metals are magnetic"; it is "iron, steel, nickel, cobalt".',
        },
        {
          explanation:
            'State the result. Two of the six objects are magnetic (paper clip, iron nail). Four are not (aluminium ring-pull, copper coin, plastic ruler, wooden pencil).',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'mag-q1',
      type: 'multiple-choice',
      stem: 'Two bar magnets are placed end to end so that an N pole faces an N pole. What happens?',
      tier: 'core',
      options: [
        'They attract.',
        'They repel.',
        'Nothing happens.',
        'They attract slowly, then repel.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'mag-mis-pole-rule',
      hint: 'Like poles repel; unlike poles attract.',
    },
    {
      id: 'mag-q2',
      type: 'multiple-choice',
      stem: 'A pupil holds a magnet near an aluminium drink can. What happens?',
      tier: 'core',
      options: [
        'The magnet sticks to the can, because aluminium is a metal.',
        'The magnet repels the can strongly.',
        'The magnet does not stick. Aluminium is not magnetic, even though it is a metal.',
        'The can rolls away from the magnet under a magnetic push.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'mag-mis-all-metals',
      hint: 'Not all metals are magnetic. Aluminium and copper are common ones that are not.',
    },
    {
      id: 'mag-q3',
      type: 'multiple-choice',
      stem: 'Which of these is a magnetic material?',
      tier: 'core',
      options: [
        'Copper',
        'Aluminium',
        'Plastic',
        'Iron',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'mag-mis-all-metals',
      hint: 'Steel paper clips, iron nails, and most fridge doors are made of this metal (or its alloys).',
    },
    {
      id: 'mag-q4',
      type: 'multiple-choice',
      stem: 'Which sentence about magnetic field lines round a bar magnet is correct?',
      tier: 'core',
      options: [
        'The lines point from S to N outside the magnet.',
        'The lines point from N to S outside the magnet.',
        'The lines go in straight rays from the magnet, like sunlight.',
        'There are no field lines; the field is invisible and has no shape.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'mag-mis-line-direction',
      hint: 'Use the direction a small test compass N pole would point.',
    },
    {
      id: 'mag-q5',
      type: 'multiple-choice',
      stem: 'Where on a bar magnet is the magnetic field strongest?',
      tier: 'core',
      options: [
        'At the poles (N and S ends).',
        'In the middle, away from the poles.',
        'Equally strong everywhere round the magnet.',
        'Only on the painted side.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'mag-mis-field-uniform',
      hint: 'Look for where the field lines crowd closest together.',
    },
    {
      id: 'mag-q6',
      type: 'multiple-choice',
      stem: 'Why does a compass needle point roughly north when you set it on a desk in the UK?',
      tier: 'core',
      options: [
        'Earth is a giant magnet, and the compass needle (a tiny magnet) lines up with Earth\'s magnetic field.',
        'The Sun pulls the needle north.',
        'Compass needles are heavier on the north end, so they tip that way.',
        'Static electricity in the air pushes the needle north.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'mag-mis-compass-cause',
      hint: 'A compass is a tiny bar magnet that can spin freely.',
    },
    {
      id: 'mag-q7',
      type: 'spot-misconception',
      stem: 'Aisha writes, "Anything made of metal will stick to a fridge magnet, because all metals are magnetic." Is the method sound?',
      tier: 'confident',
      statements: [
        {
          text: 'Aisha is right. Metals are magnetic; non-metals are not.',
          isMisconception: true,
        },
        {
          text: 'Aisha is not right. Only iron, steel, nickel, and cobalt are magnetic. Aluminium drink cans and copper wires are metals, but they do not stick to a fridge magnet.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'mag-mis-all-metals',
    },
    {
      id: 'mag-q8',
      type: 'spot-misconception',
      stem: 'Theo writes, "If I push two N poles toward each other, they should snap together, because they are both strong." Is the method sound?',
      tier: 'confident',
      statements: [
        {
          text: 'Theo is right. Two strong poles will pull together no matter what.',
          isMisconception: true,
        },
        {
          text: 'Theo is not right. The rule is "like poles repel, unlike poles attract". Two N poles push apart, however strong they are. To get them to attract, one of them has to be flipped so an S pole faces an N pole.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'mag-mis-pole-rule',
    },
    {
      id: 'mag-q9',
      type: 'labelled-image',
      stem: 'A pupil in a Manchester lab pours iron filings round a bar magnet. Drag each label onto the right marker on the diagram.',
      tier: 'confident',
      viewBox: '0 0 800 400',
      svg: FIELD_LINES_SVG,
      hotspots: [
        { id: 'mag-q9-h1', x: 41, y: 52, correctLabel: 'N pole' },
        { id: 'mag-q9-h2', x: 59, y: 52, correctLabel: 'S pole' },
        { id: 'mag-q9-h3', x: 50, y: 18, correctLabel: 'Field line N to S' },
        { id: 'mag-q9-h4', x: 15, y: 55, correctLabel: 'Field strongest at poles' },
      ],
      labels: [
        'N pole',
        'S pole',
        'Field line N to S',
        'Field strongest at poles',
        'Centre of mass',
        'Electric current',
        'Gravity arrow',
      ],
      xpValue: 15,
      hint: 'Field lines come out of N and curve into S outside the magnet.',
    },
    {
      id: 'mag-q10',
      type: 'labelled-image',
      stem: 'Drag each material name onto the right column of the magnetic vs non-magnetic chart.',
      tier: 'confident',
      viewBox: '0 0 800 400',
      svg: MAGNET_POLES_SVG,
      hotspots: [
        { id: 'mag-q10-h1', x: 25, y: 70, correctLabel: 'Iron' },
        { id: 'mag-q10-h2', x: 25, y: 78, correctLabel: 'Steel' },
        { id: 'mag-q10-h3', x: 75, y: 70, correctLabel: 'Aluminium' },
        { id: 'mag-q10-h4', x: 75, y: 78, correctLabel: 'Copper' },
      ],
      labels: [
        'Iron',
        'Steel',
        'Aluminium',
        'Copper',
        'Plastic',
        'Wood',
        'Gold',
      ],
      xpValue: 15,
      misconceptionId: 'mag-mis-all-metals',
      hint: 'Iron and steel go on the left (magnetic). Aluminium and copper are metals but go on the right.',
    },
    {
      id: 'mag-q11',
      type: 'drag-order',
      stem: 'A pupil holds a magnet 5 cm away from a paper clip resting on a desk. (Gravity is pulling the clip down onto the desk all along.) They slowly slide the magnet closer. Order what happens, from earliest to latest.',
      tier: 'confident',
      items: [
        'The paper clip jumps and sticks to the magnet.',
        'The pupil notices a small pull on the paper clip; it twitches.',
        'The pupil holds the magnet at 5 cm; the paper clip is still.',
        'The paper clip starts to slide along the desk toward the magnet.',
      ],
      correctOrder: [2, 1, 3, 0],
      xpValue: 15,
      misconceptionId: 'mag-mis-magnetic-vs-gravity',
      hint: 'The pull grows as the magnet gets closer; sticking is the last step. Gravity acts the same way throughout.',
    },
    {
      id: 'mag-q12',
      type: 'multiple-choice',
      stem: 'What does a magnetic field line tell you?',
      tier: 'confident',
      options: [
        'The temperature of the magnet at that point.',
        'The mass of the magnet at that point.',
        'The direction the N pole of a small test compass would point at that point.',
        'The colour of the magnet.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'mag-mis-line-direction',
      hint: 'Field lines point the way a compass N pole would settle.',
    },
    {
      id: 'mag-q13',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is explaining why a compass needle points roughly north on a Lake District walk.',
      tier: 'confident',
      steps: [
        'Recall that Earth itself behaves like a giant bar magnet.',
        'A compass is a tiny bar magnet on a pivot, free to rotate.',
        null,
        'Note that an N pole is attracted to a S pole, so the compass arrow N points to wherever Earth\'s magnetic S pole is.',
        'State the result: the compass arrow N points roughly toward geographic North (where Earth\'s magnetic S pole sits).',
      ],
      missingStepIndex: 2,
      correctStep:
        'The compass needle lines up with Earth\'s magnetic field, so its N pole points along the local field direction.',
      xpValue: 15,
      misconceptionId: 'mag-mis-compass-cause',
    },
    {
      id: 'mag-q14',
      type: 'numeric-entry',
      stem: 'A pupil tests 10 objects from a school tray with a bar magnet. They find 4 objects stick to the magnet (an iron nail, a steel paper clip, a steel screw, and a small steel washer). The other 6 do not. How many objects are non-magnetic?',
      tier: 'core',
      correctAnswer: 6,
      unit: 'objects',
      xpValue: 10,
      hint: '10 in total, 4 stick. Subtract.',
    },
    {
      id: 'mag-q15',
      type: 'data-extraction',
      stem: 'A Year 7 lab table is headed "Object: sticks to magnet?" and lists eight rows: "iron nail: yes; steel paper clip: yes; aluminium ring-pull: no; copper coin: no; plastic ruler: no; nickel coin: yes; steel washer: yes; gold ring: no." How many of the eight objects are magnetic?',
      tier: 'challenge',
      dataSource:
        'iron nail: yes. steel paper clip: yes. aluminium ring-pull: no. copper coin: no. plastic ruler: no. nickel coin: yes. steel washer: yes. gold ring: no.',
      correctAnswer: '4',
      xpValue: 20,
      misconceptionId: 'mag-mis-all-metals',
      hint: 'Count the rows where the second column says "yes".',
    },
    {
      id: 'mag-q16',
      type: 'multiple-choice',
      stem: 'A Year 7 in Edinburgh tries to use a fridge magnet to pick up a 2p coin (made of copper-plated steel) and a 1p coin (also copper-plated steel). What happens?',
      tier: 'challenge',
      options: [
        'Neither sticks, because copper is not magnetic.',
        'Only the 2p sticks, because larger coins are more magnetic.',
        'Both repel the magnet, because coins push magnets away.',
        'Both stick, because the steel core is magnetic; the copper coating is too thin to block the magnet.',
      ],
      correctIndex: 3,
      xpValue: 20,
      misconceptionId: 'mag-mis-all-metals',
      hint: 'What is the inside of the coin made of?',
    },
    {
      id: 'mag-q17',
      type: 'multiple-choice',
      stem: 'A pupil sketches the field lines round a bar magnet. Which sketch is wrong, and why?',
      tier: 'challenge',
      options: [
        'Loops from N round to S, closer together near the poles. (Correct picture.)',
        'Straight rays out of both ends, like sunlight from a star. (Wrong: field lines round a bar magnet are loops, not straight rays.)',
        'Loops from S round to N, closer together near the poles. (Wrong direction: field lines outside the magnet go N to S, not S to N.)',
        'Both 2 and 3 are wrong sketches.',
      ],
      correctIndex: 3,
      xpValue: 20,
      misconceptionId: 'mag-mis-line-direction',
      hint: 'Field lines round a bar magnet are loops, and they go N to S outside.',
    },
    {
      id: 'mag-q18',
      type: 'numeric-entry',
      stem: 'A teacher has 8 bar magnets in a tray and a small N-pole sticker on the right end of each. The pupil lays them in a row, all with the sticker on the right. As they push them together end to end, how many of the 7 gaps between adjacent magnets will repel?',
      tier: 'challenge',
      correctAnswer: 7,
      unit: 'gaps',
      xpValue: 20,
      hint: 'Each gap has a left magnet\'s N end facing the next magnet\'s S end? Or N facing N? Draw it out.',
    },
    {
      id: 'mag-q19',
      type: 'free-text',
      stem: 'A Year 7 in a Sheffield lab is asked to plot the magnetic field round a bar magnet using a small plotting compass. In two or three sentences, describe what they should do and what shape they expect the field lines to make.',
      tier: 'challenge',
      sampleAnswer:
        'They should put the bar magnet flat on a sheet of paper, place the compass near one end, and draw a small arrow on the paper showing which way the compass N points. They move the compass to a new spot just past the arrow, and repeat, so the arrows join up into a smooth line. The expected shape is a set of loops that come out of the N pole, curve round, and go back into the S pole, with the lines closer together near the poles.',
      keywords: ['compass', 'arrow', 'loops', 'N pole', 'S pole', 'closer'],
      xpValue: 20,
      hint: 'Compass + arrow + loops from N to S; mention that lines crowd at the poles.',
    },
    {
      id: 'mag-q20',
      type: 'multiple-choice',
      stem: 'Which two facts must a Year 7 explanation of "why a compass works on a Lake District walk" include?',
      tier: 'challenge',
      options: [
        'Compass needles are heavy on the N end; the Sun lines them up.',
        'Earth behaves like a giant magnet; a compass is a tiny bar magnet that lines up with Earth\'s magnetic field.',
        'Compass needles are made of plastic; gravity points north.',
        'Static electricity in the air pulls the needle; the wind helps.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'mag-mis-compass-cause',
      hint: 'Pick the option that uses both "Earth as a magnet" and "compass as a tiny magnet".',
    },
    {
      id: 'mag-q21',
      type: 'numeric-entry',
      stem: 'A bar magnet has 2 poles. A Year 7 lays out 6 identical bar magnets on a tray. How many magnetic poles are on the tray in total?',
      tier: 'core',
      correctAnswer: 12,
      unit: 'poles',
      xpValue: 10,
      hint: 'Every bar magnet has 1 N pole and 1 S pole, so 2 poles per magnet.',
    },
    {
      id: 'mag-q22',
      type: 'numeric-entry',
      stem: 'A pupil sketches the magnetic field round a bar magnet. They draw 3 loops above the magnet and 3 loops below, all going from N to S outside the magnet. To the nearest whole number, how many field-line arrowheads should they add (one arrowhead per loop)?',
      tier: 'confident',
      correctAnswer: 6,
      unit: 'arrowheads',
      xpValue: 15,
      misconceptionId: 'mag-mis-line-direction',
      hint: '3 loops above + 3 loops below = total loops. One arrowhead per loop.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics examiner report June 2022, Paper 2F, candidates believing all metals are magnetic
    {
      id: 'mag-mis-all-metals',
      description:
        'Believing every metal is magnetic, often because magnets stick to "metal" fridge doors and tools.',
      triggerAnswer: 'all-metals-magnetic',
      correction:
        'Only iron, steel, nickel, and cobalt are magnetic. Most other metals (aluminium, copper, gold, silver, lead) are not.',
      reExplanation:
        'A useful test: a magnet sticks to an iron nail and a steel paper clip; it does not stick to an aluminium drink can or a copper wire. The "metal" door of most fridges is steel, which is mostly iron, which is why fridge magnets stick.',
    },
    // Source: CGP KS3 Physics Study Guide Common Mistake box on the like-poles rule
    {
      id: 'mag-mis-pole-rule',
      description:
        'Mixing up the rule for poles, often saying "stronger poles always attract" or that two N poles snap together.',
      triggerAnswer: 'pole-rule',
      correction:
        'Like poles repel and unlike poles attract. Two N poles push apart, however strong they are. To get attraction you need an N facing an S.',
      reExplanation:
        'A simple lab check: hold one magnet still and push another toward it slowly. If the gap pushes back, the facing poles are alike (both N or both S). Flip one magnet round and the gap pulls together: now the poles are unlike.',
    },
    // Source: Edexcel GCSE Physics examiner report June 2019, Paper 1PH0/1F, candidates drawing field lines from S to N outside the magnet
    {
      id: 'mag-mis-line-direction',
      description:
        'Drawing magnetic field lines pointing from S to N outside the magnet, or drawing them as straight rays rather than as loops from N round to S.',
      triggerAnswer: 'line-direction',
      correction:
        'Outside a bar magnet, field lines point from N to S. The lines are loops, not straight rays. Inside the magnet they continue from S back to N to close the loop.',
      reExplanation:
        'A useful rule: a field line shows the direction the N pole of a tiny test compass would point. A test compass placed near the N end of a bar magnet has its own N pushed away, so it points along the line outward from N. Following the compass round the magnet traces a loop that ends at S.',
    },
    // Source: IOPSpark "Magnetism" guidance on uniform-field misreading
    {
      id: 'mag-mis-field-uniform',
      description:
        'Believing the magnetic field round a bar magnet is the same strength everywhere, or that it is strongest at the centre.',
      triggerAnswer: 'field-uniform',
      correction:
        'The field round a bar magnet is strongest at the poles, where field lines are closest together, and weaker further out. Inside the magnet the field is also strong, but Year 7 focuses on the field outside.',
      reExplanation:
        'A practical check: a paper clip held near the end of a bar magnet feels a strong pull; the same paper clip held near the middle of the same magnet feels almost nothing. The crowding of field lines near each pole shows the same picture.',
    },
    // Source: AQA GCSE Physics examiner report June 2023, Paper 2F, candidates explaining the compass with non-magnetic causes
    {
      id: 'mag-mis-compass-cause',
      description:
        'Believing the compass needle points north because of gravity, the Sun, the wind, or a heavier N end, rather than because Earth\'s magnetic field acts on the magnetised needle.',
      triggerAnswer: 'compass-cause',
      correction:
        'Earth behaves like a giant bar magnet. A compass needle is a small bar magnet on a pivot, so it rotates until it lines up with Earth\'s magnetic field. Gravity, sunlight, and wind do not pick a compass direction.',
      reExplanation:
        'A quick check: place a compass next to a strong bar magnet. The compass swings to line up with the bar magnet\'s field, ignoring gravity, the Sun, and the wind. The same effect, just much weaker, happens with Earth\'s field.',
    },
    // Source: CGP KS3 Physics Workbook Common Mistake box on magnetic vs gravitational force
    {
      id: 'mag-mis-magnetic-vs-gravity',
      description:
        'Confusing magnetic attraction with gravity, so saying things like "a magnet pulls a paper clip because of gravity" or "all heavy objects are magnetic".',
      triggerAnswer: 'magnetic-vs-gravity',
      correction:
        'Magnetic forces only act on magnetic materials (iron, steel, nickel, cobalt). Gravity acts on everything that has mass, but it pulls toward the centre of Earth, not toward a small magnet.',
      reExplanation:
        'A test: hold a paper clip and a plastic clip side by side. Both fall under gravity at the same rate when dropped. Bring a magnet near and only the paper clip jumps sideways toward the magnet. Magnetic and gravitational forces are different things, with different rules.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const magnetismZoneNodes = [magnetismFields]

export const magnetismZone: Zone = {
  id: 'physics-magnetism',
  name: 'Magnetism',
  realm: 'mechanica',
  nodeIds: magnetismZoneNodes.map(n => n.id),
}
