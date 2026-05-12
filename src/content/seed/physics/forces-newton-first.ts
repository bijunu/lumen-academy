import type { SkillNode, Zone } from '@/types/content'

const BOOK_ON_TABLE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="50" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Book on a school library table</text>
    <line x1="100" y1="240" x2="700" y2="240" />
    <rect x="340" y="190" width="120" height="50" fill="currentColor" />
    <!-- Weight arrow down -->
    <line x1="400" y1="215" x2="400" y2="320" />
    <polygon points="392,308 400,325 408,308" fill="currentColor" stroke="none" />
    <text x="420" y="315" font-size="14" font-weight="700" stroke="none" fill="currentColor">Weight 8 N</text>
    <!-- Normal contact arrow up -->
    <line x1="400" y1="215" x2="400" y2="110" />
    <polygon points="392,122 400,105 408,122" fill="currentColor" stroke="none" />
    <text x="420" y="120" font-size="14" font-weight="700" stroke="none" fill="currentColor">Normal contact 8 N</text>
    <text x="400" y="360" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Equal and opposite arrows. Net force = 0 N. Book stays at rest.</text>
  </g>
`

const M25_CAR_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="45" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Car on the M25 at a steady 13 m/s</text>
    <text x="400" y="70" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">constant speed in a straight line</text>
    <!-- Road -->
    <line x1="60" y1="240" x2="740" y2="240" />
    <line x1="80" y1="252" x2="140" y2="252" stroke-dasharray="6 8" />
    <line x1="200" y1="252" x2="260" y2="252" stroke-dasharray="6 8" />
    <line x1="320" y1="252" x2="380" y2="252" stroke-dasharray="6 8" />
    <line x1="440" y1="252" x2="500" y2="252" stroke-dasharray="6 8" />
    <line x1="560" y1="252" x2="620" y2="252" stroke-dasharray="6 8" />
    <!-- Car body -->
    <rect x="320" y="170" width="160" height="50" fill="currentColor" />
    <path d="M 350 170 L 380 140 L 440 140 L 460 170 Z" fill="currentColor" />
    <circle cx="355" cy="240" r="16" fill="currentColor" />
    <circle cx="445" cy="240" r="16" fill="currentColor" />
    <!-- Drive force arrow forwards -->
    <line x1="480" y1="195" x2="600" y2="195" />
    <polygon points="590,187 605,195 590,203" fill="currentColor" stroke="none" />
    <text x="540" y="185" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Drive 600 N</text>
    <!-- Drag arrow backwards, same length -->
    <line x1="320" y1="195" x2="200" y2="195" />
    <polygon points="210,187 195,195 210,203" fill="currentColor" stroke="none" />
    <text x="260" y="185" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Drag 600 N</text>
    <!-- Weight arrow down -->
    <line x1="400" y1="160" x2="400" y2="220" />
    <polygon points="392,210 400,225 408,210" fill="currentColor" stroke="none" />
    <text x="420" y="200" font-size="12" font-weight="700" stroke="none" fill="currentColor">Weight</text>
    <!-- Normal up from road -->
    <line x1="400" y1="240" x2="400" y2="285" />
    <polygon points="392,250 400,235 408,250" fill="currentColor" stroke="none" />
    <text x="420" y="280" font-size="12" font-weight="700" stroke="none" fill="currentColor">Normal contact</text>
    <text x="400" y="355" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">All four arrows balance. Net force = 0 N. The car keeps moving at 13 m/s.</text>
  </g>
`

const ICE_PUCK_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Ice puck on a low-friction rink</text>
    <text x="400" y="62" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">slides a long way with almost no slowing down</text>
    <!-- Ice surface -->
    <rect x="60" y="180" width="680" height="60" fill="currentColor" opacity="0.15" />
    <line x1="60" y1="180" x2="740" y2="180" />
    <!-- Puck -->
    <ellipse cx="200" cy="180" rx="22" ry="8" fill="currentColor" />
    <!-- Motion arrow forwards -->
    <line x1="230" y1="160" x2="380" y2="160" />
    <polygon points="370,152 385,160 370,168" fill="currentColor" stroke="none" />
    <text x="305" y="148" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">moves forwards</text>
    <!-- Tiny friction arrow back -->
    <line x1="170" y1="195" x2="135" y2="195" />
    <polygon points="142,189 130,195 142,201" fill="currentColor" stroke="none" />
    <text x="150" y="215" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">tiny friction</text>
    <!-- Seatbelt callout box -->
    <rect x="420" y="100" width="300" height="170" fill="none" stroke="currentColor" stroke-width="2" />
    <text x="570" y="125" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Why a seatbelt matters</text>
    <text x="570" y="150" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">A bus brakes hard. Your body</text>
    <text x="570" y="168" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">was moving with the bus, and</text>
    <text x="570" y="186" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">no resultant force has yet</text>
    <text x="570" y="204" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">acted on you, so you carry on</text>
    <text x="570" y="222" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">forwards. The seatbelt then</text>
    <text x="570" y="240" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">pulls back on you, providing</text>
    <text x="570" y="258" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">the resultant force that slows</text>
    <text x="570" y="276" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">you with the bus.</text>
    <text x="270" y="310" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">With almost no friction, the puck keeps gliding at the same speed.</text>
    <text x="270" y="330" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Things slow because of friction, not because they "want to" stop.</text>
  </g>
`

const LORRY_FBD_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="45" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Lorry on the A2 at constant 25 m/s</text>
    <!-- Road -->
    <line x1="60" y1="260" x2="740" y2="260" />
    <!-- Lorry body -->
    <rect x="260" y="160" width="220" height="100" fill="currentColor" />
    <rect x="480" y="190" width="60" height="70" fill="currentColor" />
    <circle cx="295" cy="260" r="18" fill="currentColor" />
    <circle cx="365" cy="260" r="18" fill="currentColor" />
    <circle cx="510" cy="260" r="18" fill="currentColor" />
    <!-- Drive arrow forwards -->
    <line x1="540" y1="210" x2="660" y2="210" />
    <polygon points="650,202 665,210 650,218" fill="currentColor" stroke="none" />
    <text x="600" y="200" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">F1 (forwards)</text>
    <!-- Drag arrow backwards -->
    <line x1="260" y1="210" x2="140" y2="210" />
    <polygon points="150,202 135,210 150,218" fill="currentColor" stroke="none" />
    <text x="200" y="200" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">F2 (backwards)</text>
    <!-- Weight -->
    <line x1="400" y1="180" x2="400" y2="240" />
    <polygon points="392,230 400,245 408,230" fill="currentColor" stroke="none" />
    <text x="420" y="225" font-size="12" font-weight="700" stroke="none" fill="currentColor">F3 (down)</text>
    <!-- Normal -->
    <line x1="400" y1="260" x2="400" y2="320" />
    <polygon points="392,272 400,255 408,272" fill="currentColor" stroke="none" />
    <text x="420" y="300" font-size="12" font-weight="700" stroke="none" fill="currentColor">F4 (up)</text>
  </g>
`

export const forcesNewtonFirst: SkillNode = {
  id: 'physics-forces-newton-first',
  title: "Newton's First Law",
  description:
    "Use Newton's First Law to predict the motion of an object from its force arrows. State that an object at rest stays at rest, and an object moving at constant speed in a straight line keeps doing so, unless a resultant force acts on it. Treat balanced forces as the link between still objects and objects moving at constant velocity. Use the idea of inertia to explain everyday cases such as a satchel sliding forwards when a bus brakes.",
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-forces',
  zoneName: 'Forces',
  tier: 'confident',
  prerequisites: ['physics-forces-balanced', 'physics-forces-resultant-1d'],
  curriculum: {
    ks3Objective:
      'Forces being needed to cause objects to stop or start moving, or to change their speed or direction of motion (qualitative only); balanced and unbalanced forces.',
    awardingBodies: {
      aqa: "4.5.6.2.1 Newton's First Law; an object remains at rest or moves at constant velocity unless acted on by a resultant force (GCSE Physics 8463)",
      edexcel:
        "Topic 1 Motion and forces, 1.23 Newton's First Law; the velocity of an object only changes if a resultant force acts on it (GCSE Physics 1PH0)",
      ocr: "P2.2 Newton's laws; first law and the effect of balanced forces on motion (GCSE Physics J259 Gateway)",
    },
  },
  scenes: [
    {
      id: 'fn1-scene-book-on-table',
      title: 'Book at Rest: Forces Balance',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read the two arrows on the book and see why it stays at rest.',
      data: {
        viewBox: '0 0 800 400',
        svg: BOOK_ON_TABLE_SVG,
        hotspots: [
          {
            id: 'fn1-bk-weight',
            x: 53,
            y: 79,
            label: 'Weight 8 N down',
            description:
              'Gravity pulls the book towards the centre of the Earth. The arrow points straight down and has a size of 8 N.',
          },
          {
            id: 'fn1-bk-normal',
            x: 53,
            y: 30,
            label: 'Normal contact 8 N up',
            description:
              'The table pushes back on the book with an equal and opposite force. Equal to the weight in size, opposite in direction.',
          },
          {
            id: 'fn1-bk-net',
            x: 50,
            y: 90,
            label: "Newton's First Law in action",
            description:
              'The two arrows cancel out, so the resultant force is 0 N. By the first law, an object at rest with no resultant force stays at rest. The book does not move.',
          },
        ],
      },
    },
    {
      id: 'fn1-scene-m25-car',
      title: 'Car on the M25: Same Speed, Balanced Forces',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see why a car at constant speed still has balanced forces on it.',
      data: {
        viewBox: '0 0 800 400',
        svg: M25_CAR_SVG,
        hotspots: [
          {
            id: 'fn1-m25-drive',
            x: 68,
            y: 49,
            label: 'Drive 600 N forwards',
            description:
              'The engine pushes the wheels and the wheels push the car forwards with 600 N. Constant speed means this push does not change.',
          },
          {
            id: 'fn1-m25-drag',
            x: 32,
            y: 49,
            label: 'Drag 600 N backwards',
            description:
              'Air resistance and rolling friction together drag the car back with 600 N. At constant speed, drag exactly matches the drive force.',
          },
          {
            id: 'fn1-m25-vertical',
            x: 53,
            y: 64,
            label: 'Weight and normal contact balance',
            description:
              'The road pushes up on the car with a force equal to its weight. The vertical pair already balances.',
          },
          {
            id: 'fn1-m25-rule',
            x: 50,
            y: 90,
            label: "Newton's First Law in action",
            description:
              'All four arrows balance, so the resultant force is 0 N. By the first law, a moving object with no resultant force keeps moving at the same velocity. The car holds 13 m/s in a straight line.',
          },
        ],
      },
    },
    {
      id: 'fn1-scene-ice-puck',
      title: 'Ice Puck and Seatbelt: Why Things Keep Moving',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to explore why the puck glides on, and why a seatbelt matters when a bus brakes.',
      data: {
        viewBox: '0 0 800 400',
        svg: ICE_PUCK_SVG,
        hotspots: [
          {
            id: 'fn1-ip-puck',
            x: 25,
            y: 45,
            label: 'Puck glides forwards',
            description:
              'A push has already given the puck a velocity. The push is no longer acting; only a tiny friction is left.',
          },
          {
            id: 'fn1-ip-friction',
            x: 19,
            y: 49,
            label: 'Tiny friction',
            description:
              'With very low friction, the resultant force is almost zero. By the first law, the puck keeps moving at almost the same speed. Things slow down because of friction, not because they "want to" stop.',
          },
          {
            id: 'fn1-ip-seatbelt',
            x: 71,
            y: 47,
            label: 'Inertia and the seatbelt',
            description:
              'Inertia is the tendency to keep doing what you are already doing. When a bus brakes, your body keeps moving forwards with the bus speed until the seatbelt pulls back on you. The belt provides the resultant force that slows you with the bus.',
          },
          {
            id: 'fn1-ip-mass',
            x: 71,
            y: 67,
            label: 'Mass measures inertia',
            description:
              'A heavier object has more inertia, so it is harder to start moving and harder to stop. A loaded shopping trolley is harder to push from rest and harder to bring back to rest than an empty one.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'fn1-worked-1',
      title: 'A lorry on the A2 holds a steady 25 m/s',
      steps: [
        {
          explanation:
            "Pick the object. The object is the lorry. Every arrow on the diagram goes on the lorry.",
        },
        {
          explanation:
            'List the forces. Drive force forwards from the engine, drag backwards from air resistance and rolling friction, weight downwards, and normal contact upwards from the road.',
          maths: 'Forces on lorry: drive, drag, weight, normal contact',
        },
        {
          explanation:
            'Use the clue in the question. The lorry holds a steady 25 m/s in a straight line. So its velocity is not changing.',
        },
        {
          explanation:
            "Apply Newton's First Law. The first law says velocity only changes if a resultant force acts. The velocity is not changing, so the resultant force must be zero.",
          maths: 'Resultant force = 0 N',
        },
        {
          explanation:
            'Match the arrows in pairs. Weight (down) and normal contact (up) balance, so they cancel. Drive (forwards) and drag (backwards) must therefore also balance.',
          maths: 'Drive = drag',
        },
        {
          explanation:
            'State the result. The four forces on the lorry are balanced. Drive force equals drag force. The lorry keeps moving at 25 m/s in a straight line.',
        },
      ],
    },
    {
      id: 'fn1-worked-2',
      title: 'A satchel slides forwards when a Sevenoaks bus brakes',
      steps: [
        {
          explanation:
            'Set the scene. A satchel sits on a flat seat next to a passenger on a Sevenoaks bus. The bus is moving forwards at 12 m/s. The driver brakes hard.',
        },
        {
          explanation:
            'Pick the object. The object is the satchel. Decide what forces act on the satchel, not on the bus.',
        },
        {
          explanation:
            "Identify the forces on the satchel. Weight pulls it down. The seat pushes up with a normal contact force. Friction with the seat can push it forwards or backwards along the seat, but only up to a limit.",
        },
        {
          explanation:
            "Apply Newton's First Law to the satchel. Just before braking, the satchel was moving at 12 m/s with the bus. With no large horizontal resultant force on it, the satchel keeps moving at 12 m/s.",
          maths: 'Satchel velocity stays at 12 m/s forwards (briefly)',
        },
        {
          explanation:
            'Look at the bus. The brakes provide a backwards resultant force on the bus, so the bus slows down. The satchel sits on a smooth seat, so friction on the satchel is small.',
        },
        {
          explanation:
            'State the result. The bus slows, but the satchel keeps going forwards at near 12 m/s and slides along the seat. The satchel is not "thrown forwards" by anything; it is keeping the velocity it already had, as the first law predicts.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'fn1-q1',
      type: 'multiple-choice',
      stem: "Which sentence best states Newton's First Law?",
      tier: 'core',
      options: [
        'An object at rest stays at rest, and an object moving at constant speed in a straight line keeps moving at the same velocity, unless a resultant force acts on it.',
        'An object only moves when a force pushes it forwards.',
        'A moving object always slows down on its own.',
        'A resultant force makes an object move at constant speed.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'fn1-mis-needs-force-to-keep-moving',
      hint: 'The first law links "no resultant force" with "no change in motion".',
    },
    {
      id: 'fn1-q2',
      type: 'multiple-choice',
      stem: 'A book lies still on a desk. The desk pushes up with the same size of force that gravity pulls down. Which sentence describes the resultant force and the motion?',
      tier: 'core',
      options: [
        'Resultant force is downwards; the book speeds up.',
        'Resultant force is upwards; the book speeds up.',
        'Resultant force is zero; the book stays at rest.',
        'Resultant force is sideways; the book slides.',
      ],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Two equal and opposite arrows cancel to give zero.',
    },
    {
      id: 'fn1-q3',
      type: 'multiple-choice',
      stem: 'A car drives along the M25 at a steady 13 m/s in a straight line. The vertical forces already balance. Which sentence describes the horizontal forces?',
      tier: 'core',
      options: [
        'The forwards drive force is larger than the backwards drag, otherwise the car would not be moving.',
        'The drag is larger than the drive force, so the car is slowing down without the driver noticing.',
        'There is no drag, because the road is smooth.',
        'The drive force equals the drag, so the resultant horizontal force is zero and the car holds its speed.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'fn1-mis-motion-needs-bigger-force',
      hint: 'Constant velocity means zero resultant force on the car.',
    },
    {
      id: 'fn1-q4',
      type: 'multiple-choice',
      stem: 'A driver eases off the accelerator on a flat road. The drive force drops to almost zero, but drag from the air and the road still acts. What happens to the car next?',
      tier: 'confident',
      options: [
        'The car keeps moving at the same speed because the engine was just helping a bit.',
        'The car slows down because the resultant force is now backwards.',
        'The car stops at once because the engine has stopped pushing it.',
        'The car speeds up because there is now less to slow it down.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'fn1-mis-engine-cuts-car-stops',
      hint: 'List only the forces still acting. Drag now has no forwards partner.',
    },
    {
      id: 'fn1-q5',
      type: 'multiple-choice',
      stem: 'A puck slides across a flat ice rink with very low friction. The skater is no longer touching it. Which sentence best describes the motion of the puck?',
      tier: 'confident',
      options: [
        'It keeps moving at almost the same speed in a straight line for a long way, because the resultant force on it is almost zero.',
        'It speeds up because nothing is now holding it back.',
        'It stops as soon as the skater lets go, because the push is gone.',
        'It moves more and more slowly because moving objects want to stop.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'fn1-mis-things-want-to-stop',
      hint: 'Almost no friction means an almost zero resultant force.',
    },
    {
      id: 'fn1-q6',
      type: 'multiple-choice',
      stem: 'A Sevenoaks bus brakes hard at a red light. A satchel sits on the smooth seat next to a passenger. The satchel slides forwards along the seat. Which sentence best explains why?',
      tier: 'confident',
      options: [
        'A forwards force from the brakes pushes the satchel along the seat.',
        'Air inside the bus pushes the satchel forwards as the bus slows.',
        'The satchel was already moving forwards with the bus. With little friction on the seat, no large resultant force acts on the satchel, so it keeps moving forwards while the bus slows.',
        'The satchel speeds up because the bus has slowed down.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'fn1-mis-seatbelt-pushes-back',
      hint: 'List the forces on the satchel, not on the bus. The bus brakes do not touch the satchel.',
    },
    {
      id: 'fn1-q7',
      type: 'multiple-choice',
      stem: 'A loaded shopping trolley and an empty trolley are stood side by side in a Manchester supermarket. A shopper pushes each with the same force from rest. Which sentence describes their inertia?',
      tier: 'confident',
      options: [
        'The loaded trolley has more inertia, so it is harder to start moving and harder to stop.',
        'The loaded trolley has more inertia, so it is harder to start moving but easier to stop.',
        'The empty trolley has more inertia, because it has nothing slowing it down.',
        'Both trolleys have the same inertia, because shape matters more than mass.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'fn1-mis-heavy-only-hard-to-start',
      hint: 'Mass measures inertia. Inertia means "harder to change the motion" in both directions.',
    },
    {
      id: 'fn1-q8',
      type: 'spot-misconception',
      stem: 'Lila says, "If a car is moving at constant speed along a motorway, there must be a resultant force forwards on it, otherwise it would not keep moving."',
      tier: 'confident',
      statements: [
        {
          text: 'Lila is right. A moving car needs a resultant forwards force to keep going.',
          isMisconception: true,
        },
        {
          text: 'Lila is not right. A car at constant speed in a straight line has a resultant force of zero on it. The drive force equals the drag.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fn1-mis-needs-force-to-keep-moving',
    },
    {
      id: 'fn1-q9',
      type: 'spot-misconception',
      stem: 'Theo says, "When the bus brakes, the seatbelt throws you backwards into the seat by pushing you back. Without the belt you would be safe."',
      tier: 'confident',
      statements: [
        {
          text: 'Theo is right. The seatbelt actively pushes passengers backwards as the bus slows.',
          isMisconception: true,
        },
        {
          text: "Theo is not right. The body was moving forwards with the bus. By Newton's First Law, the body keeps moving forwards while the bus slows. The belt then pulls back on the body, providing the resultant force that slows it with the bus. Without the belt, the body would carry on forwards.",
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fn1-mis-seatbelt-pushes-back',
    },
    {
      id: 'fn1-q10',
      type: 'numeric-entry',
      stem: 'A lorry on the A2 holds a steady 25 m/s in a straight line. The drive force from the engine is 1800 N forwards. What is the size, in newtons, of the drag force acting on the lorry?',
      tier: 'core',
      correctAnswer: 1800,
      unit: 'N',
      xpValue: 10,
      misconceptionId: 'fn1-mis-balanced-means-stationary',
      hint: 'Constant velocity means resultant force = 0. So drag matches drive, even on a moving lorry.',
    },
    {
      id: 'fn1-q11',
      type: 'numeric-entry',
      stem: 'A cyclist on a flat ScotRail station forecourt rolls at a steady 6 m/s in a straight line. The pedals provide 40 N forwards. Drag from the air and the road acts backwards. What is the size, in newtons, of the resultant horizontal force on the cyclist?',
      tier: 'core',
      correctAnswer: 0,
      unit: 'N',
      xpValue: 10,
      misconceptionId: 'fn1-mis-motion-needs-bigger-force',
      hint: 'Steady speed in a straight line tells you the resultant force, before you need any numbers for drag.',
    },
    {
      id: 'fn1-q12',
      type: 'numeric-entry',
      stem: 'A box rests still on a flat warehouse floor. Its weight pulls down with 240 N. What is the size, in newtons, of the upward normal contact force from the floor?',
      tier: 'core',
      correctAnswer: 240,
      unit: 'N',
      xpValue: 10,
      hint: 'At rest with no other vertical force, the two arrows must be equal and opposite.',
    },
    {
      id: 'fn1-q13',
      type: 'numeric-entry',
      stem: 'A Channel ferry crosses a calm stretch of sea at a steady 8 m/s in a straight line. The engines push the ferry forwards with 90 000 N. What is the size, in newtons, of the total backwards drag force on the ferry?',
      tier: 'core',
      correctAnswer: 90000,
      unit: 'N',
      xpValue: 10,
      misconceptionId: 'fn1-mis-needs-force-to-keep-moving',
      hint: 'Constant velocity tells you the resultant force, so the drive and drag arrows match in size.',
    },
    {
      id: 'fn1-q14',
      type: 'numeric-entry',
      stem: 'A book is held still by a single string from the ceiling. Its weight pulls down with 6 N. The string is the only other force on the book. What is the size, in newtons, of the tension in the string?',
      tier: 'core',
      correctAnswer: 6,
      unit: 'N',
      xpValue: 10,
      hint: 'At rest with two forces, the two arrows must be equal and opposite.',
    },
    {
      id: 'fn1-q15',
      type: 'drag-order',
      stem: "A pupil meets a tricky case: a lorry going round a long, gentle curve on a flat motorway at a constant speed. Order the four steps they should follow to decide whether Newton's First Law predicts a resultant force on the lorry.",
      tier: 'challenge',
      items: [
        'Add the arrows in pairs and decide whether the resultant force is zero.',
        'Pick the object. The lorry is the object; every arrow goes on the lorry.',
        "Apply the first law. Velocity changes only if the resultant force is not zero. A change of direction is a change of velocity.",
        'List the forces on the lorry. Drive, drag, weight, normal contact, and a sideways friction from the road that points towards the centre of the curve.',
      ],
      correctOrder: [1, 3, 0, 2],
      xpValue: 20,
      hint: 'Pick the object first, then list the arrows, then add them, then apply the first law. Watch out for direction.',
    },
    {
      id: 'fn1-q16',
      type: 'missing-step',
      stem: "Fill in the missing step. A pupil is using Newton's First Law to predict the motion of a parked car.",
      tier: 'confident',
      steps: [
        'Pick the object: the parked car on a flat car park.',
        'List the forces. Weight pulls down 12 000 N. The road pushes up with a normal contact force. There is no horizontal drive or drag.',
        'The car is at rest, so by the first law the resultant force must be zero.',
        null,
        "Apply the first law. With zero resultant force on an object that was at rest, the car stays at rest.",
      ],
      missingStepIndex: 3,
      correctStep:
        'Set the normal contact force at 12 000 N up so it cancels the 12 000 N weight, then add the arrows: 12 000 down and 12 000 up give a resultant force of 0 N.',
      xpValue: 15,
    },
    {
      id: 'fn1-q17',
      type: 'labelled-image',
      stem: "A lorry on the A2 holds a steady 25 m/s in a straight line. Place the names on the four force arrows on the free-body diagram. Each label encodes the force's direction.",
      tier: 'confident',
      viewBox: '0 0 800 400',
      svg: LORRY_FBD_SVG,
      hotspots: [
        { id: 'fn1-q17-h1', x: 78, y: 53, correctLabel: 'Drive force (forwards)' },
        { id: 'fn1-q17-h2', x: 22, y: 53, correctLabel: 'Drag (backwards)' },
        { id: 'fn1-q17-h3', x: 53, y: 57, correctLabel: 'Weight (down)' },
        { id: 'fn1-q17-h4', x: 53, y: 76, correctLabel: 'Normal contact (up)' },
      ],
      labels: [
        'Drive force (forwards)',
        'Drag (backwards)',
        'Weight (down)',
        'Normal contact (up)',
        'Tension (up)',
        'Brake force (backwards)',
      ],
      xpValue: 15,
      hint: 'Match each arrow direction to its named force. Drive points forwards; drag points back.',
    },
    {
      id: 'fn1-q18',
      type: 'data-extraction',
      stem: "A pupil has plotted a velocity-time graph for a coach on a flat stretch of the M1. Use the dataSource below to identify the time range in which Newton's First Law tells you the resultant force on the coach must be zero.",
      tier: 'challenge',
      dataSource:
        'Velocity-time graph for a coach on the M1. Time on the x-axis runs from 0 s to 120 s. Velocity on the y-axis runs from 0 m/s to 30 m/s. From 0 s to 20 s the line climbs from 0 m/s up to 28 m/s. From 20 s to 90 s the line is flat at 28 m/s. From 90 s to 120 s the line falls from 28 m/s back down to 0 m/s.',
      correctAnswer: '20 s to 90 s',
      xpValue: 20,
      hint: 'Look for the flat (horizontal) part of the line. A flat line means constant velocity, which by the first law means zero resultant force.',
    },
    {
      id: 'fn1-q19',
      type: 'multiple-choice',
      stem: 'A passenger stands on a Sevenoaks bus, not holding any rail. The bus drives forwards at a steady 12 m/s. The driver brakes hard, so the bus slows sharply. Which sentence best predicts what the passenger does, and why?',
      tier: 'challenge',
      options: [
        "The passenger falls backwards, because the brakes pull them back through the floor.",
        'The passenger falls forwards, because they were moving at 12 m/s with the bus. With little friction on the bus floor, no large resultant force acts on them, so they keep moving forwards while the bus slows.',
        'The passenger stays still in the middle of the bus, because the bus moving and the passenger moving cancel out.',
        'The passenger floats up off the floor, because braking makes the bus lighter.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'fn1-mis-seatbelt-pushes-back',
      hint: "Apply the first law to the passenger. List only the forces on the passenger, not on the bus.",
    },
    {
      id: 'fn1-q20',
      type: 'multiple-choice',
      stem: 'A Channel ferry holds a steady 8 m/s in a straight line for an hour. The captain then opens the throttle so the engine pushes harder. Which sentence describes what happens next?',
      tier: 'challenge',
      options: [
        "The ferry holds 8 m/s, because Newton's First Law says moving things keep moving at constant velocity.",
        "The ferry slows down, because more drive force makes more drag.",
        'The ferry speeds up, because the resultant force on it is no longer zero, so its velocity changes.',
        'The ferry stops, because adding force confuses the steady motion.',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'fn1-mis-needs-force-to-keep-moving',
      hint: 'A change of force breaks the balance between drive and drag. The first law says the velocity now changes.',
    },
    {
      id: 'fn1-q21',
      type: 'free-text',
      stem: "A passenger on a Sevenoaks bus says, 'When the bus brakes hard, something throws me forwards.' Use Newton's First Law and the idea of inertia to give a fair point in the claim and to correct what is wrong with it. Name the resultant force that eventually slows the passenger and say where it comes from.",
      tier: 'challenge',
      sampleAnswer:
        "A fair point is that the passenger really does move forwards relative to the bus when the driver brakes hard. The wrong part is the idea that something throws the passenger. No new forwards force acts. The passenger was moving forwards at the bus speed before the brakes were used. By Newton's First Law, with no large resultant force on them, they keep moving at that speed in a straight line. This tendency to keep doing what you are already doing is called inertia, and a heavier passenger has more of it. The bus slows because the brakes provide a backwards resultant force on the bus. The passenger only slows once a resultant force acts on the passenger; this comes from the seatbelt (or, for a standing passenger, from a grab rail or the floor friction). The seatbelt does not throw the passenger back; it pulls back on the passenger to bring their velocity in line with the bus.",
      keywords: [
        'inertia',
        'resultant force',
        'seatbelt',
        'first law',
        'velocity',
        'brakes',
        'mass',
      ],
      xpValue: 20,
      misconceptionId: 'fn1-mis-seatbelt-pushes-back',
    },
  ],
  misconceptions: [
    // Source: Edexcel GCSE Physics examiner report June 2019, Paper 1PH0/1F, the Aristotelian "needs a force to keep moving" misconception persists into KS4
    {
      id: 'fn1-mis-needs-force-to-keep-moving',
      description:
        'Believing that a moving object must have a forwards resultant force on it for as long as it keeps moving; that without a push it would stop straight away.',
      triggerAnswer: 'needs-force-to-keep-moving',
      correction:
        "Newton's First Law says a moving object keeps moving at the same velocity unless a resultant force acts on it. Things slow down because of friction or drag, not because forwards motion needs a force.",
      reExplanation:
        'Picture an ice puck sliding on a flat rink. Once the skater lets go, no hand is pushing it forwards. With almost no friction, the puck glides at nearly the same speed for a long way. The motion does not need a force to keep going; the velocity only changes when a resultant force acts.',
    },
    // Source: AQA GCSE Physics examiner report June 2022, Paper 1F, candidates write that a moving car must have a net forwards force on it
    {
      id: 'fn1-mis-motion-needs-bigger-force',
      description:
        "Believing that a car moving forwards at constant speed must have a bigger drive force than drag, on the grounds that 'motion forwards needs a bigger forwards force'.",
      triggerAnswer: 'motion-needs-bigger-force',
      correction:
        'At constant velocity the resultant force is zero, so drive and drag are equal in size. A bigger drive force would speed the car up, not hold its speed.',
      reExplanation:
        'On the M25 at 13 m/s the drive force matches the drag exactly. The arrows are the same length, in opposite directions. The resultant force is zero, so by the first law the velocity is unchanged. Pressing the accelerator only speeds the car up because it briefly makes drive bigger than drag.',
    },
    // Source: OCR GCSE Physics examiner report June 2022, J259/02, candidates say "the engine force disappears" when the accelerator is released, so the car must stop
    {
      id: 'fn1-mis-engine-cuts-car-stops',
      description:
        "Believing that when an engine stops driving (driver eases off the accelerator), the car must stop straight away, because the 'force that was keeping it moving' has gone.",
      triggerAnswer: 'engine-cuts-car-stops',
      correction:
        'Easing off the accelerator drops the drive force, but drag still acts. The resultant force is now backwards, so the first law predicts the car slows down over time, not instantly.',
      reExplanation:
        'A car on a flat road coasts when the driver eases off the accelerator. Drag from the air and the road becomes the only horizontal force. The first law says the velocity now changes in the direction of the resultant force, which is backwards. The car slows gradually rather than stopping at once, because drag is small compared with the inertia of the car.',
    },
    // Source: CGP KS3 Physics Study Guide Common Mistake box on why things slow down
    {
      id: 'fn1-mis-things-want-to-stop',
      description:
        "Believing that moving objects naturally 'want to' come to rest, so they slow down on their own without any force acting on them.",
      triggerAnswer: 'things-want-to-stop',
      correction:
        "Objects do not want anything. Things slow down because friction or drag acts backwards on them. Remove the friction and the first law predicts they will keep moving at the same velocity.",
      reExplanation:
        'An ice puck on a flat rink slides a long way; the same puck on a school hall floor stops much sooner. The puck has no will of its own. What changes is the size of the friction. With low friction, the resultant force is almost zero and the puck keeps gliding. With higher friction, a backwards resultant force acts and the puck slows down.',
    },
    // Source: AQA GCSE Physics examiner report June 2023, Paper 1F, candidates say the seatbelt "pushes you back" when a vehicle brakes
    {
      id: 'fn1-mis-seatbelt-pushes-back',
      description:
        "Believing that when a vehicle brakes, the seatbelt pushes the passenger backwards, or that 'something throws' the passenger forwards.",
      triggerAnswer: 'seatbelt-pushes-back',
      correction:
        "No forwards force throws the passenger. They keep moving forwards by inertia while the bus slows. The seatbelt then pulls back, giving the resultant force that slows them with the bus.",
      reExplanation:
        'A passenger on a Sevenoaks bus is moving forwards at 12 m/s with the bus. The brakes act on the bus, not on the passenger. With no large resultant force on the passenger, the first law predicts they keep moving forwards. The seatbelt then pulls back, slowing the passenger to match the bus. Without the belt, they would carry on forwards until something else stopped them.',
    },
    // Source: CGP KS3 Physics Workbook Common Mistake box on inertia and mass
    {
      id: 'fn1-mis-heavy-only-hard-to-start',
      description:
        "Believing that heavier objects are only harder to start moving, but are just as easy to stop, missing that inertia makes them harder to stop too.",
      triggerAnswer: 'heavy-only-hard-to-start',
      correction:
        'Inertia is the tendency to keep doing what an object is already doing. A heavier object has more inertia, so it is harder to start moving and harder to stop once moving.',
      reExplanation:
        'A loaded shopping trolley in a Manchester supermarket is harder to start pushing than an empty one. Once both are moving at the same speed, the loaded trolley is also harder to stop; it takes a bigger backwards force, or the same force for longer. Mass measures inertia. Inertia works equally for starting and stopping.',
    },
    // Source: Edexcel GCSE Physics examiner report June 2022, Paper 1PH0/1F, candidates claim "balanced forces always mean a still object" when applying the first law
    {
      id: 'fn1-mis-balanced-means-stationary',
      description:
        "Believing that balanced forces only happen on a still object, so a moving object must always have a non-zero resultant force, and Newton's First Law applies only at rest.",
      triggerAnswer: 'balanced-means-stationary',
      correction:
        "Newton's First Law treats rest and constant velocity in a straight line in the same way. Both happen when the resultant force is zero. Balanced forces happen on any object whose velocity is not changing.",
      reExplanation:
        'A book at rest on a desk and a car on the M25 at a steady 13 m/s both have a resultant force of zero. The book stays at rest; the car keeps moving at 13 m/s. Both cases match the first law. Balanced forces leave the velocity unchanged; they do not pick out "still" as a special case.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const forcesNewtonFirstZoneNodes = [forcesNewtonFirst]
