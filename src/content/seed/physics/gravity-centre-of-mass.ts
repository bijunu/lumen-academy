import type { SkillNode } from '@/types/content'

const COM_OF_SHAPES_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Where is the centre of mass of a uniform shape?</text>

    <!-- Headers -->
    <text x="140" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Square plate</text>
    <text x="400" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Round disc</text>
    <text x="660" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Long rod</text>

    <!-- Square -->
    <rect x="80" y="100" width="120" height="120" fill="none" stroke="currentColor" stroke-width="2" />
    <circle cx="140" cy="160" r="6" fill="currentColor" />
    <text x="140" y="240" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">CoM at the centre</text>

    <!-- Disc -->
    <circle cx="400" cy="160" r="60" fill="none" stroke="currentColor" stroke-width="2" />
    <circle cx="400" cy="160" r="6" fill="currentColor" />
    <text x="400" y="240" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">CoM at the centre</text>

    <!-- Rod -->
    <rect x="580" y="150" width="160" height="20" fill="none" stroke="currentColor" stroke-width="2" />
    <circle cx="660" cy="160" r="6" fill="currentColor" />
    <text x="660" y="240" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">CoM at the midpoint</text>

    <!-- Line of action of weight -->
    <line x1="140" y1="160" x2="140" y2="290" stroke-dasharray="5 5" />
    <line x1="400" y1="160" x2="400" y2="290" stroke-dasharray="5 5" />
    <line x1="660" y1="160" x2="660" y2="290" stroke-dasharray="5 5" />

    <text x="400" y="320" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">For uniform symmetrical objects, the centre of mass is at the geometric centre.</text>
    <text x="400" y="345" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">The line of action of weight is a straight line that drops vertically from the CoM.</text>
    <text x="400" y="370" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">It heads down through the Earth, because gravity always pulls at right angles to the ground.</text>
  </g>
`

const STABLE_VS_TOPPLE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Stable, on the edge, or toppling?</text>

    <!-- Stable: upright box -->
    <rect x="80" y="170" width="120" height="120" fill="none" stroke="currentColor" stroke-width="2" />
    <circle cx="140" cy="230" r="6" fill="currentColor" />
    <line x1="140" y1="230" x2="140" y2="320" stroke-dasharray="5 5" />
    <line x1="80" y1="290" x2="200" y2="290" stroke-width="4" />
    <text x="140" y="155" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Stable</text>
    <text x="140" y="345" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Line of weight</text>
    <text x="140" y="360" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">falls inside base</text>

    <!-- On the edge: tilted box, line of action exits at the corner -->
    <g transform="rotate(25 360 290)">
      <rect x="300" y="170" width="120" height="120" fill="none" stroke="currentColor" stroke-width="2" />
      <circle cx="360" cy="230" r="6" fill="currentColor" />
    </g>
    <line x1="385" y1="217" x2="385" y2="320" stroke-dasharray="5 5" />
    <line x1="300" y1="320" x2="420" y2="320" stroke-width="4" />
    <text x="360" y="155" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">On the edge</text>
    <text x="360" y="345" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Line passes right</text>
    <text x="360" y="360" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">through pivot corner</text>

    <!-- Toppling: line of action outside base -->
    <g transform="rotate(45 580 290)">
      <rect x="520" y="170" width="120" height="120" fill="none" stroke="currentColor" stroke-width="2" />
      <circle cx="580" cy="230" r="6" fill="currentColor" />
    </g>
    <line x1="625" y1="195" x2="625" y2="320" stroke-dasharray="5 5" />
    <line x1="540" y1="320" x2="600" y2="320" stroke-width="4" />
    <text x="580" y="155" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Toppling</text>
    <text x="580" y="345" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Line falls outside</text>
    <text x="580" y="360" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">the base of the box</text>

    <text x="400" y="385" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Stable while the line of weight stays inside the base. Topples when it falls outside.</text>
  </g>
`

const BUS_VS_GLASS_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Low CoM, wide base: a London bus vs a wine glass</text>

    <!-- Bus body -->
    <rect x="80" y="150" width="240" height="120" fill="none" stroke="currentColor" stroke-width="2" />
    <rect x="80" y="150" width="240" height="40" fill="currentColor" opacity="0.15" />
    <circle cx="120" cy="285" r="14" fill="currentColor" />
    <circle cx="280" cy="285" r="14" fill="currentColor" />
    <circle cx="200" cy="240" r="6" fill="currentColor" />
    <line x1="200" y1="240" x2="200" y2="310" stroke-dasharray="5 5" />
    <line x1="106" y1="310" x2="294" y2="310" stroke-width="4" />
    <text x="200" y="135" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">London double-decker</text>
    <text x="200" y="340" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Wide wheelbase, low loaded CoM</text>
    <text x="200" y="358" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Stable on a tilted road</text>

    <!-- Wine glass -->
    <path d="M 530 160 L 560 160 L 565 200 Q 565 235 540 235 Q 515 235 515 200 Z" fill="none" stroke="currentColor" stroke-width="2" />
    <line x1="540" y1="235" x2="540" y2="280" stroke-width="2" />
    <line x1="520" y1="285" x2="560" y2="285" stroke-width="3" />
    <circle cx="540" cy="210" r="6" fill="currentColor" />
    <line x1="540" y1="210" x2="540" y2="310" stroke-dasharray="5 5" />
    <text x="540" y="135" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Wine glass</text>
    <text x="540" y="340" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Narrow base, high CoM</text>
    <text x="540" y="358" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Tips over with a small nudge</text>

    <!-- Tumbler for compare -->
    <rect x="680" y="200" width="50" height="80" fill="none" stroke="currentColor" stroke-width="2" />
    <circle cx="705" cy="240" r="5" fill="currentColor" />
    <line x1="705" y1="240" x2="705" y2="305" stroke-dasharray="5 5" />
    <line x1="680" y1="305" x2="730" y2="305" stroke-width="3" />
    <text x="705" y="135" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Tumbler</text>
    <text x="705" y="340" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Wider base, lower CoM</text>
    <text x="705" y="358" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Harder to knock over</text>

    <text x="400" y="385" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Wider base and lower CoM both make an object more stable.</text>
  </g>
`

export const gravityCentreOfMass: SkillNode = {
  id: 'physics-gravity-centre-of-mass',
  title: 'Centre of Mass and Stability',
  description:
    'The centre of mass (CoM) of an object is the single point where its weight effectively acts. For a uniform symmetrical object the CoM is at the geometric centre. The line of action of weight is a vertical line straight down from the CoM. An object stays stable while this line falls inside its base and topples when it falls outside. Lowering the CoM and widening the base both increase stability, which is why a London double-decker bus has its heavy chassis low and wide wheels, while a tall wine glass tips with a small nudge.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-gravity',
  zoneName: 'Gravity, Weight, Mass',
  tier: 'challenge',
  prerequisites: ['physics-gravity-mass-vs-weight'],
  curriculum: {
    ks3Objective:
      'Forces being needed to cause objects to stop or start moving, or to change their speed or direction of motion (qualitative only); using force arrows in diagrams; gravity force; the centre of gravity of an object and its effect on stability.',
    awardingBodies: {
      aqa: '4.5.1.2 Mass and weight; 4.5.3 Moments, centre of mass and stability (GCSE Physics 8463)',
      edexcel:
        'Topic 1 Motion and forces, 1.16-1.17 Weight; 1.50-1.52 Moments, centre of mass and stability (GCSE Physics 1PH0)',
      ocr: 'P2.3 Forces in action; centre of mass, line of action of weight and toppling (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'gcm-scene-shapes',
      title: 'Centre of Mass of Uniform Shapes',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see where the centre of mass sits on a uniform square plate, a uniform round disc and a uniform long rod.',
      data: {
        viewBox: '0 0 800 400',
        svg: COM_OF_SHAPES_SVG,
        hotspots: [
          {
            id: 'gcm-shapes-square',
            x: 18,
            y: 40,
            label: 'Square plate: CoM at the centre',
            description:
              'A uniform square metal plate has its CoM right at the centre of the square. The mass is spread out evenly, so the balance point is the geometric centre.',
          },
          {
            id: 'gcm-shapes-disc',
            x: 50,
            y: 40,
            label: 'Round disc: CoM at the centre',
            description:
              'A uniform round disc, like a 2p coin, has its CoM at its geometric centre. You could balance it on the tip of a pencil placed at the centre.',
          },
          {
            id: 'gcm-shapes-rod',
            x: 82,
            y: 40,
            label: 'Long rod: CoM at the midpoint',
            description:
              'A uniform metre stick or a long rod has its CoM at its midpoint. Suspend the rod from the middle and it will balance horizontally.',
          },
          {
            id: 'gcm-shapes-line',
            x: 50,
            y: 75,
            label: 'Line of action of weight',
            description:
              'A dashed vertical line drops from the CoM straight down. This is the line of action of the weight force, set by gravity pulling each kilogram towards the Earth.',
          },
        ],
      },
    },
    {
      id: 'gcm-scene-stable-vs-topple',
      title: 'Stable, On the Edge, Toppling',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare an upright box, a box tilted right to the edge, and a box that has gone past and is toppling.',
      data: {
        viewBox: '0 0 800 400',
        svg: STABLE_VS_TOPPLE_SVG,
        hotspots: [
          {
            id: 'gcm-stable-upright',
            x: 18,
            y: 60,
            label: 'Stable: line falls inside the base',
            description:
              'The upright box has its CoM directly above the middle of its base. The line of action of weight passes through the base, so the box stays put.',
          },
          {
            id: 'gcm-stable-edge',
            x: 45,
            y: 60,
            label: 'On the edge: line passes through the pivot corner',
            description:
              'Tilt the box until the line of action of weight passes exactly through the bottom corner it is balancing on. Any more tilt and it will topple; any less and it will rock back.',
          },
          {
            id: 'gcm-stable-topple',
            x: 73,
            y: 60,
            label: 'Toppling: line falls outside the base',
            description:
              'Tilt further. The line of action of weight now falls outside the base. Gravity produces a turning effect that tips the box over.',
          },
          {
            id: 'gcm-stable-rule',
            x: 50,
            y: 95,
            label: 'The stability rule',
            description:
              'Stable while the vertical line of action of weight stays inside the base. Topples once that line leaves the base. The base is the bit of the object actually in contact with the ground.',
          },
        ],
      },
    },
    {
      id: 'gcm-scene-bus-vs-glass',
      title: 'A Bus vs a Wine Glass',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare a London double-decker bus with a tall wine glass and a short tumbler.',
      data: {
        viewBox: '0 0 800 400',
        svg: BUS_VS_GLASS_SVG,
        hotspots: [
          {
            id: 'gcm-bus',
            x: 25,
            y: 60,
            label: 'Double-decker: heavy chassis low, wheels wide',
            description:
              'A London double-decker keeps its engine and chassis low and sits on a wide wheelbase. The CoM is low and the base is wide, so the bus stays stable even on a banked road.',
          },
          {
            id: 'gcm-glass',
            x: 67,
            y: 60,
            label: 'Wine glass: tall stem, narrow base',
            description:
              'A tall wine glass has most of its mass in the bowl, high up the stem. The base is narrow, so a small nudge is enough to push the line of action of weight outside the base, and over it goes.',
          },
          {
            id: 'gcm-tumbler',
            x: 88,
            y: 60,
            label: 'Tumbler: wider base, lower CoM',
            description:
              'A short tumbler holds the same water lower down, and its base is wider than the wine glass. Both changes raise stability, which is why pubs use sturdy tumblers for busy tables.',
          },
          {
            id: 'gcm-rule',
            x: 50,
            y: 95,
            label: 'Two ways to be more stable',
            description:
              'Lower the centre of mass, or widen the base, or both. Engineers do both on buses, lorries and tractors. The wine glass has neither change going for it.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'gcm-worked-1',
      title: 'Will an upright box topple when tilted?',
      steps: [
        {
          explanation:
            'Read the question. A uniform wooden box stands on a flat table. It is tilted slightly so it balances on one bottom edge. Decide if it will topple back to flat or fall over.',
        },
        {
          explanation:
            'Identify the centre of mass. The box is uniform, so its CoM is at the geometric centre of the box.',
        },
        {
          explanation:
            'Imagine the line of action of weight. Draw a vertical line straight down from the CoM towards the floor.',
        },
        {
          explanation:
            'Look at the base of the box. The base is the bottom edge it is balancing on, and the small patch of floor between the two bottom corners on the tilted side.',
        },
        {
          explanation:
            'Apply the stability rule. If the vertical line drops inside the base, the box rocks back to flat. If it drops outside the base, the box topples over.',
        },
        {
          explanation:
            'State the answer with the why. While the tilt is small, the line of weight is still over the base, so the box rocks back and stays put. Tilt past the point where the line passes through the bottom edge, and gravity tips it over.',
        },
      ],
    },
    {
      id: 'gcm-worked-2',
      title: 'Comparing a wine glass and a tumbler',
      steps: [
        {
          explanation:
            'Read the question. A wine glass and a tumbler hold the same volume of water, but the wine glass is tall and thin while the tumbler is short and wide. Explain which is more stable on a tilting tray.',
        },
        {
          explanation:
            'State what makes an object stable. An object is more stable when its CoM is low and its base is wide. Both changes push the line of action of weight back inside the base when the object tilts.',
        },
        {
          explanation:
            'Compare the centre of mass. The wine glass holds water high up the stem, so its CoM is high. The tumbler holds the same water near the floor of the glass, so its CoM is lower.',
        },
        {
          explanation:
            'Compare the base. The wine glass has a narrow stand at the bottom. The tumbler has a wider, flat base.',
        },
        {
          explanation:
            'Apply the stability rule. As the tray tilts, the line of action of weight has further to travel before it leaves the wine glass base, and the tumbler base is wider still. The wine glass tips first; the tumbler tips later, or not at all.',
        },
        {
          explanation:
            'State the answer. The tumbler is more stable than the wine glass because of its lower CoM and its wider base. Pubs choose tumblers for busy tables for exactly this reason.',
        },
      ],
    },
  ],
  questions: [
    // Core 1
    {
      id: 'gcm-q1',
      type: 'multiple-choice',
      stem: 'What is the centre of mass of an object?',
      tier: 'core',
      options: [
        'The heaviest single part of the object, like a metal core inside a toy.',
        'The single point where the weight of the object effectively acts.',
        'The point on the surface where you should pick the object up.',
        'A point that only exists inside hollow objects.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'gcm-mis-com-is-heaviest-bit',
      hint: 'Think of the CoM as a balance point where you can treat all the object`s weight as acting at one spot.',
    },
    // Core 2
    {
      id: 'gcm-q2',
      type: 'multiple-choice',
      stem: 'Where is the centre of mass of a uniform symmetrical object such as a square plate or a round disc?',
      tier: 'core',
      options: [
        'At the bottom of the object, because gravity pulls it down.',
        'At one of the corners.',
        'At the geometric centre.',
        'At the heaviest looking side.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'gcm-mis-com-at-bottom',
      hint: 'For a uniform symmetrical shape, the mass is spread evenly. The balance point is the centre.',
    },
    // Core 3
    {
      id: 'gcm-q3',
      type: 'numeric-entry',
      stem: 'A uniform metre stick is 100 cm long. At what distance from one end, in cm, is its centre of mass?',
      tier: 'core',
      correctAnswer: 50,
      unit: 'cm',
      xpValue: 10,
      hint: 'The CoM of a uniform rod is at its midpoint. Half the length from either end.',
    },
    // Core 4
    {
      id: 'gcm-q4',
      type: 'multiple-choice',
      stem: 'A pupil compares a tall, narrow vase with a short, wide one of the same mass. Which is more stable on a tilting tray?',
      tier: 'core',
      options: [
        'The short, wide vase, because its CoM is lower and its base is wider.',
        'The tall, narrow vase, because being tall makes things stronger.',
        'They are equally stable, because they have the same mass.',
        'The tall vase, because gravity pulls equally on every object.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'gcm-mis-mass-decides-stability',
      hint: 'Stability is set by where the CoM sits and how wide the base is, not just by how heavy the object is.',
    },
    // Core 5
    {
      id: 'gcm-q5',
      type: 'multiple-choice',
      stem: 'Which design choice would make a stack of school chairs more stable when stacked five high?',
      tier: 'core',
      options: [
        'Add a heavy plate to the top of the stack.',
        'Make every chair narrower.',
        'Slide the stack closer to the edge of the room.',
        'Use a wider, heavier seat base on each chair.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'gcm-mis-heavy-top-helps',
      hint: 'A wider base lowers the chance the line of action of weight leaves the bottom of the stack. Heavy weight at the top raises the CoM.',
    },
    // Core 6
    {
      id: 'gcm-q6',
      type: 'numeric-entry',
      stem: 'A uniform square metal plate has sides of 20 cm. The centre of mass sits at the geometric centre. How far, in cm, is the CoM from any one side of the plate?',
      tier: 'core',
      correctAnswer: 10,
      unit: 'cm',
      xpValue: 10,
      hint: 'The geometric centre is half the side length from any side.',
    },
    // Core 7
    {
      id: 'gcm-q7',
      type: 'multiple-choice',
      stem: 'In which direction does the line of action of weight always point from the centre of mass?',
      tier: 'core',
      options: [
        'Along the longest side of the object.',
        'Vertically downwards, towards the centre of the Earth.',
        'In whatever direction the object is leaning.',
        'Horizontally, parallel to the ground.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'gcm-mis-line-follows-tilt',
      hint: 'Gravity pulls every kilogram straight down. The line of action of weight is always vertical, no matter how the object is tilted.',
    },
    // Confident 1
    {
      id: 'gcm-q8',
      type: 'multiple-choice',
      stem: 'A London double-decker bus is loaded with passengers, most of whom sit on the lower deck. Why does this help the bus stay stable on a banked road?',
      tier: 'confident',
      options: [
        'Passengers on the lower deck make the bus lighter overall.',
        'The lower deck adds weight to the wheels, which grip the road better.',
        'Loading the lower deck keeps the centre of mass low, so the line of action of weight stays inside the wide wheelbase.',
        'It does not help; passenger position cannot change the stability of a bus.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'gcm-mis-low-com-irrelevant',
      hint: 'Where the passengers sit shifts the bus`s overall CoM up or down. A lower CoM is more stable.',
    },
    // Confident 2
    {
      id: 'gcm-q9',
      type: 'spot-misconception',
      stem: 'Theo says, "Heavier objects are always more stable than lighter ones, because more weight pulls them harder onto the ground."',
      tier: 'confident',
      statements: [
        {
          text: 'Theo is right. Doubling the weight of an object doubles its stability.',
          isMisconception: true,
        },
        {
          text: 'Theo is not right. Stability is set by where the CoM sits and how wide the base is, not by the total weight. A heavy wine glass is no more stable than a light one of the same shape.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'gcm-mis-mass-decides-stability',
    },
    // Confident 3
    {
      id: 'gcm-q10',
      type: 'numeric-entry',
      stem: 'A uniform book is 20 cm wide. It rests on the edge of a shelf so that part of the book hangs over. The book is just about to topple. How far, in cm, does the centre of mass sit from the side that is hanging over the edge?',
      tier: 'confident',
      correctAnswer: 10,
      unit: 'cm',
      xpValue: 15,
      misconceptionId: 'gcm-mis-base-is-whole-object',
      hint: 'The book topples when the CoM sits right above the edge of the shelf. For a uniform 20 cm book the CoM is at the midpoint.',
    },
    // Confident 4
    {
      id: 'gcm-q11',
      type: 'multiple-choice',
      stem: 'A cyclist leans into a sharp turn at a roundabout. Why does this not make them topple?',
      tier: 'confident',
      options: [
        'The lean keeps the line of action of weight inside the line between the cyclist`s contact patches and balances the turning force.',
        'Leaning lowers the cyclist`s weight, so gravity stops acting on them.',
        'The lean changes the cyclist`s mass, which changes their stability.',
        'Bicycle wheels stop gravity from acting at sharp turns.',
      ],
      correctIndex: 0,
      xpValue: 15,
      hint: 'The cyclist`s base is the line between their tyre contact patches. Leaning shifts the CoM so the weight line stays over this base while turning.',
    },
    // Confident 5
    {
      id: 'gcm-q12',
      type: 'drag-order',
      stem: 'Place the steps in the right order to decide whether a tilted object will topple.',
      tier: 'confident',
      items: [
        'Decide. If the vertical line falls inside the base, the object is stable; if outside, it topples.',
        'Locate the centre of mass of the object.',
        'Identify the base of the object: the bit in contact with the ground.',
        'Draw the line of action of weight: a vertical line straight down from the CoM.',
      ],
      correctOrder: [1, 3, 2, 0],
      xpValue: 15,
      hint: 'Find the CoM, draw the weight line, mark the base, then compare.',
    },
    // Confident 6
    {
      id: 'gcm-q13',
      type: 'numeric-entry',
      stem: 'A toy crane has a tall mast 1.2 m high. Its base is 0.4 m wide. The CoM of the loaded crane sits on the vertical axis, halfway up the mast at 0.6 m. The crane tips when the CoM moves sideways by half the base width. By how many cm, sideways, can the CoM move before the crane just topples?',
      tier: 'confident',
      correctAnswer: 20,
      unit: 'cm',
      xpValue: 15,
      hint: 'Half the base width is 0.4 / 2 = 0.2 m, which is 20 cm.',
    },
    // Confident 7
    {
      id: 'gcm-q14',
      type: 'multiple-choice',
      stem: 'A pub stocks tall wine glasses for a wine tasting and short, wide tumblers for water. The tumblers very rarely tip over on the busy bar. Which sentence best explains the difference?',
      tier: 'confident',
      options: [
        'Wine is heavier than water, so the wine glasses are easier to tip.',
        'Tumblers are sealed at the top, so air pressure holds them down.',
        'Glasses on a bar are not affected by their shape, only by the bar staff.',
        'The tumblers have a lower centre of mass and a wider base, so the line of action of weight stays inside the base even when nudged.',
      ],
      correctIndex: 3,
      xpValue: 15,
      hint: 'Stability rises when the CoM is lower and the base is wider. Tumblers have both compared with tall wine glasses.',
    },
    // Confident 8
    {
      id: 'gcm-q15',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is working out whether a tilted box will topple over.',
      tier: 'confident',
      steps: [
        'Locate the centre of mass of the box (the geometric centre for a uniform box).',
        'Draw the line of action of weight: a vertical line straight down from the CoM.',
        'Mark the base of the box: the bit in contact with the floor after the tilt.',
        null,
        'State the result. If the line falls inside the base, the box rocks back; if outside, the box topples over.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Check whether the vertical line of action of weight passes inside or outside the base of the box.',
      xpValue: 15,
    },
    // Challenge 1
    {
      id: 'gcm-q16',
      type: 'multiple-choice',
      stem: 'A step ladder is opened up on a flat floor. It is rated stable while the painter`s weight stays above the rectangle between the four leg ends. Why does the rating fail when the painter leans far out to one side to reach a high wall?',
      tier: 'challenge',
      options: [
        'The painter`s mass increases when they lean sideways.',
        'Leaning out shifts the combined CoM of painter plus ladder sideways, and once it passes outside the base of the ladder, the line of action of weight is no longer inside the base.',
        'The ladder cannot bear weight at all when tilted.',
        'Gravity stops acting on the painter once they leave the centre of the ladder.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'gcm-mis-base-is-whole-object',
      hint: 'The base of the ladder is the rectangle joining the four leg ends. The painter is part of the system, so their lean moves the combined CoM.',
    },
    // Challenge 2
    {
      id: 'gcm-q17',
      type: 'numeric-entry',
      stem: 'A uniform wooden block is 30 cm wide and 40 cm tall, sitting on a flat tray. The tray is slowly tilted to one side. The block topples when the line of action of weight just passes the bottom edge it is balancing on. At that moment, how far, in cm, is the CoM from the centre line of the original upright base?',
      tier: 'challenge',
      correctAnswer: 15,
      unit: 'cm',
      xpValue: 20,
      hint: 'The block topples when the CoM sits directly above the bottom edge. That edge is half the base width from the centre, which is 30 / 2 = 15 cm.',
    },
    // Challenge 3
    {
      id: 'gcm-q18',
      type: 'numeric-entry',
      stem: 'A uniform book is 24 cm wide and 2 cm thick. It is slid sideways off the edge of a shelf. How far, in cm, can the book overhang the shelf before it just topples? The book topples when the CoM moves past the shelf edge.',
      tier: 'challenge',
      correctAnswer: 12,
      unit: 'cm',
      xpValue: 20,
      hint: 'For a uniform book the CoM is at the midpoint of its width. The book just topples when the midpoint sits over the edge: half of 24 cm.',
    },
    // Challenge 4
    {
      id: 'gcm-q19',
      type: 'spot-misconception',
      stem: 'Aisha writes, "When I tilt a box, the line of action of weight tilts with it, so it always points along the side of the box."',
      tier: 'challenge',
      statements: [
        {
          text: 'Aisha is right. The line of action of weight follows the tilt of the object.',
          isMisconception: true,
        },
        {
          text: 'Aisha is not right. The line of action of weight is set by gravity, which pulls vertically. It always points straight down from the CoM, no matter how the object is tilted.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'gcm-mis-line-follows-tilt',
    },
    // Challenge 5
    {
      id: 'gcm-q20',
      type: 'multiple-choice',
      stem: 'A double-decker bus rated to safely tilt up to 28 degrees has its lower deck packed but its upper deck empty. The same bus, now empty downstairs and packed upstairs, is rated to safely tilt only up to 18 degrees. What is the best physics reason?',
      tier: 'challenge',
      options: [
        'Loading the upper deck raises the bus`s CoM, so a smaller tilt is enough to push the line of action of weight outside the bus`s wheelbase.',
        'Upper-deck passengers add wind resistance, which tips the bus over.',
        'Empty buses are always more stable than full ones, so the rating drops with any passengers.',
        'The lower deck is closer to the wheels, so passengers there add weight to the engine.',
      ],
      correctIndex: 0,
      xpValue: 20,
      misconceptionId: 'gcm-mis-low-com-irrelevant',
      hint: 'Higher load means higher combined CoM. Higher CoM tips over at a smaller tilt angle, because the weight line leaves the wheelbase sooner.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 1F, where candidates described the centre of mass as the densest or heaviest visible part of an object rather than as a balance point.
    {
      id: 'gcm-mis-com-is-heaviest-bit',
      description:
        'Treating the centre of mass as the heaviest single chunk inside an object (like a metal core) rather than as the single point where the whole weight effectively acts.',
      triggerAnswer: 'com-is-heaviest-bit',
      correction:
        'The centre of mass is a single balance point. All the weight of the object can be treated as acting at this point, even if no part of the object is heavier there.',
      reExplanation:
        'For a uniform square plate, the CoM sits at the geometric centre even though the plate is the same thickness everywhere. No bit is heavier than another. The CoM is a calculated balance point, not a heavy lump. Treat the entire weight as acting at this point when you draw the line of action of weight.',
    },
    // Source: CGP KS3 Physics Study Guide Common Mistake box on where the centre of mass sits in a uniform object.
    {
      id: 'gcm-mis-com-at-bottom',
      description:
        'Placing the centre of mass of a uniform object at the bottom because "gravity pulls things down", so the CoM must sit at the bottom too.',
      triggerAnswer: 'com-at-bottom',
      correction:
        'For a uniform symmetrical object the CoM is at the geometric centre, not at the bottom. Gravity acts at the CoM; it does not move the CoM downwards.',
      reExplanation:
        'A uniform round disc, like a 2p coin, has its CoM right in the middle of the disc. You can balance it on the tip of a pencil at that point. Gravity pulls every kilogram in the disc downwards, but their pulls sum to act at the geometric centre. The CoM is fixed by the shape, not by which way gravity points.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2022, Paper J259/02, where candidates said heavier objects are inherently more stable than lighter ones of the same shape.
    {
      id: 'gcm-mis-mass-decides-stability',
      description:
        'Believing that a heavier object is always more stable than a lighter one of the same shape, so weight alone sets stability.',
      triggerAnswer: 'mass-decides-stability',
      correction:
        'Stability is set by where the CoM sits and how wide the base is, not by total weight. Two glasses of the same shape are equally stable whether full or half full.',
      reExplanation:
        'Take two identical wine glasses, one full of water and one empty. They have very different weights but the same shape, the same base width and almost the same CoM height. They tip over at the same angle of tilt. Doubling the weight of an object does not double its stability; only changes to base width or CoM height do.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2019, Paper 1PH0/1F, where candidates claimed that putting a heavy weight on top of a tower makes it more stable, missing that a high CoM is destabilising.
    {
      id: 'gcm-mis-heavy-top-helps',
      description:
        'Believing that adding a heavy weight to the top of a stack or tower always makes it more stable, missing that a high CoM raises the chance of toppling.',
      triggerAnswer: 'heavy-top-helps',
      correction:
        'Adding mass high up raises the centre of mass, which makes the line of action of weight leave the base at a smaller tilt. Lower added mass is the safer choice.',
      reExplanation:
        'Stack a tower of bricks. Glue a heavy slab on top and the CoM jumps upwards. Now nudge the tower: the weight line passes outside the base after a smaller tilt, and the tower goes over more easily. Heavy at the bottom keeps the CoM low and the tower stable. London buses use the same idea by keeping engines low.',
    },
    // Source: CGP KS3 Physics Workbook Common Mistake box on the line of action of weight, where pupils drew the weight line along the tilted side of an object.
    {
      id: 'gcm-mis-line-follows-tilt',
      description:
        'Drawing the line of action of weight along the tilt of the object, as if gravity rotated with the object, rather than as a vertical line.',
      triggerAnswer: 'line-follows-tilt',
      correction:
        'Gravity always pulls straight down. The line of action of weight is a vertical line from the CoM to the floor, no matter how the object is tilted.',
      reExplanation:
        'Hold a book upright, then tilt it 30 degrees to the right. The book has rotated, but the pull of gravity on every page still points straight down. Draw the weight line as a vertical dashed line dropping from the CoM. The tilt of the book changes where this line hits the floor, but never the direction of the line itself.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, Paper 1F, where candidates treated the base of a stepladder or table as the whole bottom face, missing that the base is the polygon joining its actual contact points.
    {
      id: 'gcm-mis-base-is-whole-object',
      description:
        'Taking the base of a tilted object or ladder to be the whole bottom face, missing that the base is only the bit actually in contact with the ground after the tilt.',
      triggerAnswer: 'base-is-whole-object',
      correction:
        'The base is the area in contact with the floor. For a tilted box this can be a single edge; for a stepladder it is the rectangle between the four leg ends.',
      reExplanation:
        'Tilt a shoebox onto one bottom edge: the base is now that edge plus the tiny patch of carpet under it, not the entire underside. A stepladder`s base is the rectangle joining the four leg-end contact patches, not the whole floor area underneath the ladder. The line of action of weight is checked against this real contact base, not the whole object.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2022, Paper 1PH0/1F, where candidates said the height of the centre of mass on a vehicle does not affect its stability.
    {
      id: 'gcm-mis-low-com-irrelevant',
      description:
        'Believing that the height of the centre of mass on a vehicle does not change its stability, so loading the upper deck of a bus is no different from loading the lower deck.',
      triggerAnswer: 'low-com-irrelevant',
      correction:
        'A higher CoM tips over at a smaller tilt angle, because the line of action of weight leaves the wheelbase sooner. Loading the upper deck makes a bus less stable.',
      reExplanation:
        'A double-decker with a packed lower deck has its combined CoM low and over the wide wheelbase, so the bus can tilt a long way before the weight line leaves the wheels. Move the same passengers to the upper deck and the combined CoM rises. The bus topples at a much smaller tilt. Hauliers load heavy cargo low for the same reason.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const gravityCentreOfMassZoneNodes = [gravityCentreOfMass]
