import type { SkillNode, Zone } from '@/types/content'

const FORCE_GALLERY_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <!-- Apple falling: weight -->
    <text x="100" y="50" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Weight</text>
    <circle cx="100" cy="100" r="20" fill="currentColor" />
    <line x1="100" y1="125" x2="100" y2="180" />
    <polygon points="92,170 100,185 108,170" fill="currentColor" stroke="none" />
    <text x="100" y="210" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">apple falls</text>

    <!-- Book on table: normal contact force -->
    <text x="240" y="50" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Normal</text>
    <rect x="210" y="110" width="60" height="20" fill="currentColor" />
    <line x1="180" y1="135" x2="300" y2="135" />
    <line x1="240" y1="135" x2="240" y2="80" />
    <polygon points="232,90 240,75 248,90" fill="currentColor" stroke="none" />
    <text x="240" y="160" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">book on table</text>

    <!-- Box being pulled with friction backward -->
    <text x="380" y="50" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Friction</text>
    <rect x="360" y="100" width="40" height="40" fill="currentColor" />
    <line x1="320" y1="135" x2="440" y2="135" />
    <line x1="395" y1="120" x2="350" y2="120" />
    <polygon points="358,113 345,120 358,127" fill="currentColor" stroke="none" />
    <text x="380" y="160" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">drag on a box</text>

    <!-- Parachute: air resistance -->
    <text x="520" y="50" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Air resistance</text>
    <path d="M 490 100 Q 520 70 550 100" />
    <line x1="490" y1="100" x2="520" y2="135" />
    <line x1="550" y1="100" x2="520" y2="135" />
    <circle cx="520" cy="143" r="6" fill="currentColor" />
    <line x1="520" y1="180" x2="520" y2="160" />
    <polygon points="512,170 520,155 528,170" fill="currentColor" stroke="none" />
    <text x="520" y="210" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">parachute slows</text>

    <!-- Boat: upthrust -->
    <text x="100" y="240" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Upthrust</text>
    <path d="M 60 290 L 140 290 L 130 310 L 70 310 Z" fill="currentColor" />
    <line x1="40" y1="320" x2="160" y2="320" />
    <line x1="100" y1="290" x2="100" y2="265" />
    <polygon points="92,275 100,260 108,275" fill="currentColor" stroke="none" />
    <text x="100" y="345" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">boat floats</text>

    <!-- Rope pulling: tension -->
    <text x="240" y="240" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Tension</text>
    <line x1="180" y1="295" x2="300" y2="295" />
    <circle cx="280" cy="295" r="12" fill="currentColor" />
    <line x1="200" y1="280" x2="225" y2="280" />
    <polygon points="217,273 230,280 217,287" fill="currentColor" stroke="none" />
    <text x="240" y="320" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">rope pulls load</text>

    <!-- Magnet attracting -->
    <text x="380" y="240" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Magnetic</text>
    <rect x="340" y="280" width="30" height="30" fill="currentColor" />
    <text x="355" y="300" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="white">N</text>
    <rect x="400" y="280" width="30" height="30" fill="currentColor" />
    <text x="415" y="300" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="white">S</text>
    <line x1="372" y1="295" x2="395" y2="295" />
    <polygon points="388,288 400,295 388,302" fill="currentColor" stroke="none" />
    <text x="385" y="335" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">magnets pull</text>

    <!-- Balloon stuck to wall: electrostatic -->
    <text x="520" y="240" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Electrostatic</text>
    <line x1="555" y1="265" x2="555" y2="320" />
    <ellipse cx="520" cy="295" rx="18" ry="22" fill="currentColor" />
    <line x1="540" y1="295" x2="552" y2="295" />
    <polygon points="546,289 555,295 546,301" fill="currentColor" stroke="none" />
    <text x="520" y="345" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">balloon on a wall</text>
  </g>
`

const APPLIED_VS_RESPONSE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <!-- Push a trolley (applied force) -->
    <text x="200" y="50" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Applied push on a trolley</text>
    <line x1="60" y1="200" x2="340" y2="200" />
    <rect x="180" y="140" width="80" height="50" fill="currentColor" />
    <circle cx="195" cy="200" r="8" fill="currentColor" />
    <circle cx="245" cy="200" r="8" fill="currentColor" />
    <line x1="100" y1="165" x2="170" y2="165" />
    <polygon points="162,158 175,165 162,172" fill="currentColor" stroke="none" />
    <text x="135" y="155" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">push (applied)</text>

    <!-- Friction on the same trolley -->
    <text x="600" y="50" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Friction acts back on it</text>
    <line x1="460" y1="200" x2="740" y2="200" />
    <rect x="580" y="140" width="80" height="50" fill="currentColor" />
    <circle cx="595" cy="200" r="8" fill="currentColor" />
    <circle cx="645" cy="200" r="8" fill="currentColor" />
    <line x1="595" y1="220" x2="555" y2="220" />
    <polygon points="563,213 550,220 563,227" fill="currentColor" stroke="none" />
    <text x="575" y="245" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">friction</text>
  </g>
`

const CONTACT_NONCONTACT_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <!-- Contact column: hand pushing a box -->
    <text x="200" y="50" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Contact forces</text>
    <text x="200" y="80" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">objects must touch</text>
    <rect x="160" y="120" width="80" height="60" fill="currentColor" />
    <line x1="100" y1="150" x2="155" y2="150" />
    <polygon points="147,143 160,150 147,157" fill="currentColor" stroke="none" />
    <text x="125" y="140" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">push</text>
    <text x="200" y="210" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">friction, normal,</text>
    <text x="200" y="226" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">tension, upthrust,</text>
    <text x="200" y="242" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">air resistance, push, pull</text>

    <!-- Non-contact column: Earth and Moon at a distance -->
    <text x="600" y="50" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Non-contact forces</text>
    <text x="600" y="80" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">act at a distance</text>
    <circle cx="520" cy="150" r="30" fill="currentColor" />
    <text x="520" y="155" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="white">Earth</text>
    <circle cx="680" cy="150" r="14" fill="currentColor" />
    <text x="680" y="155" text-anchor="middle" font-size="10" font-weight="700" stroke="none" fill="white">Moon</text>
    <line x1="555" y1="150" x2="660" y2="150" stroke-dasharray="4 4" />
    <text x="608" y="140" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">gravity at a distance</text>
    <text x="600" y="210" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">gravity, magnetic,</text>
    <text x="600" y="226" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">electrostatic</text>
  </g>
`

export const forcesTypes: SkillNode = {
  id: 'physics-forces-types',
  title: 'Identifying Forces',
  description:
    'Name and pick out the common forces you meet at Year 7: weight, normal contact (also called reaction), friction, air resistance, upthrust, tension, applied push or pull, magnetic, and electrostatic. Match each force to the situation, and tell contact forces from non-contact forces.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-forces',
  zoneName: 'Forces',
  tier: 'core',
  prerequisites: [],
  curriculum: {
    ks3Objective:
      'Forces as pushes or pulls, arising from the interaction between two objects; non-contact forces: gravity forces acting at a distance on Earth and in space, forces between magnets, and forces due to static electricity.',
    awardingBodies: {
      aqa: '4.5.1.1 Forces and their interactions; contact and non-contact forces (GCSE Physics 8463)',
      edexcel: 'Topic 1 Motion and forces, 1.18-1.20 Contact and non-contact forces (GCSE Physics 1PH0)',
      ocr: 'P2.1 Motion and forces, contact and non-contact forces (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'ft-scene-gallery',
      title: 'A Gallery of Everyday Forces',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to name the force shown and read the everyday situation it acts in.',
      data: {
        viewBox: '0 0 600 400',
        svg: FORCE_GALLERY_SVG,
        hotspots: [
          {
            id: 'ft-h-weight',
            x: 17,
            y: 30,
            label: 'Weight',
            description:
              'The pull of gravity downwards on the apple. Its size depends on the mass of the apple and the gravity at that place.',
          },
          {
            id: 'ft-h-normal',
            x: 40,
            y: 30,
            label: 'Normal contact force',
            description:
              'The upward push of the table on the book. Sometimes called the reaction force. It only acts because the two surfaces touch.',
          },
          {
            id: 'ft-h-friction',
            x: 63,
            y: 30,
            label: 'Friction',
            description:
              'The drag of the floor on the box, acting opposite to the way the box moves or is being pulled.',
          },
          {
            id: 'ft-h-air',
            x: 87,
            y: 30,
            label: 'Air resistance (drag)',
            description:
              'The push of the air upwards on the parachute, slowing the falling load. Also called drag.',
          },
          {
            id: 'ft-h-upthrust',
            x: 17,
            y: 60,
            label: 'Upthrust',
            description:
              'The upward push of water on the boat. Whatever you put in a fluid feels an upthrust from the fluid around it.',
          },
          {
            id: 'ft-h-tension',
            x: 40,
            y: 60,
            label: 'Tension',
            description:
              'The pull along a stretched rope or cable. Acts at both ends and along the whole length.',
          },
          {
            id: 'ft-h-magnetic',
            x: 63,
            y: 60,
            label: 'Magnetic force',
            description:
              'The pull (or sometimes push) between two magnets. Acts at a distance, the magnets do not need to touch.',
          },
          {
            id: 'ft-h-electrostatic',
            x: 87,
            y: 60,
            label: 'Electrostatic force',
            description:
              'The pull between a charged balloon and an uncharged wall. Acts at a distance like a magnetic force.',
          },
        ],
      },
    },
    {
      id: 'ft-scene-applied-vs-response',
      title: 'A Push and the Force That Answers It',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how an applied push and the friction it stirs up sit on the same trolley.',
      data: {
        viewBox: '0 0 800 400',
        svg: APPLIED_VS_RESPONSE_SVG,
        hotspots: [
          {
            id: 'ft-ar-applied',
            x: 22,
            y: 40,
            label: 'Applied push',
            description:
              'The hand presses on the trolley with an applied force. Applied forces always need a person, machine, or other object to do the pressing.',
          },
          {
            id: 'ft-ar-friction',
            x: 70,
            y: 55,
            label: 'Friction',
            description:
              'The floor drags back on the wheels and trolley as it moves. Friction acts opposite to the way the trolley is moving.',
          },
          {
            id: 'ft-ar-trolley-1',
            x: 27,
            y: 42,
            label: 'Same trolley',
            description:
              'Both arrows are drawn on the same trolley. A force diagram shows every force acting on the chosen object, not on the things around it.',
          },
        ],
      },
    },
    {
      id: 'ft-scene-contact-noncontact',
      title: 'Contact and Non-Contact Forces',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to sort the forces into the two families.',
      data: {
        viewBox: '0 0 800 400',
        svg: CONTACT_NONCONTACT_SVG,
        hotspots: [
          {
            id: 'ft-cn-contact',
            x: 25,
            y: 38,
            label: 'Contact family',
            description:
              'For a contact force to act, the two objects have to touch. Friction, normal contact, tension, upthrust, air resistance, and a push or pull all need touch.',
          },
          {
            id: 'ft-cn-noncontact',
            x: 75,
            y: 38,
            label: 'Non-contact family',
            description:
              'A non-contact force can act through empty space. Gravity, magnetic, and electrostatic forces all act at a distance.',
          },
          {
            id: 'ft-cn-gravity',
            x: 75,
            y: 60,
            label: 'Gravity at a distance',
            description:
              'The Earth pulls the Moon across hundreds of thousands of kilometres of empty space. Gravity needs no touch.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'ft-worked-1',
      title: 'Naming the forces on a book resting on a table',
      steps: [
        {
          explanation:
            'Pick the object you are studying. The object is the book. Every force on the diagram must act on this book, not on the table or the air.',
        },
        {
          explanation:
            'Look for gravity. The Earth pulls the book straight down. This force is called the weight of the book.',
        },
        {
          explanation:
            'Look for any surface the book is touching. The table touches the bottom of the book and pushes upwards on it. This is the normal contact force, also called the reaction force.',
        },
        {
          explanation:
            'Check for any other contact. Nothing else touches the book, and there is no rope, no magnet, no charged object nearby. So no other forces act on it.',
        },
        {
          explanation:
            'List the forces. Two forces act on the book: weight (downwards) and normal contact (upwards).',
        },
        {
          explanation:
            'State the families. Weight is a non-contact force, because gravity acts at a distance. Normal contact is a contact force, because the table has to touch the book.',
        },
      ],
    },
    {
      id: 'ft-worked-2',
      title: 'Forces on a cyclist coasting on a flat road',
      steps: [
        {
          explanation:
            'Pick the object. The object is the cyclist plus the bike together. Treat them as one object so the diagram has one set of arrows.',
        },
        {
          explanation:
            'Find the pull of gravity. The Earth pulls the cyclist and bike downwards. Call this the weight.',
        },
        {
          explanation:
            'Find the contact between the road and the wheels. The road pushes upwards on the tyres. This is the normal contact force.',
        },
        {
          explanation:
            'Now look for friction. The road also drags backwards on the tyres as they roll. Friction here is small because the tyres roll, but it is still there.',
        },
        {
          explanation:
            'Look for air resistance. Air pushes back against the cyclist as they move forwards. This is the drag, sometimes called air resistance.',
        },
        {
          explanation:
            'List the four forces on the coasting cyclist: weight (downwards), normal contact (upwards), friction (backwards), air resistance (backwards). Two contact, one contact, and weight which is non-contact.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'ft-q1',
      type: 'multiple-choice',
      stem: 'A football is held in the air, then let go. The Earth pulls it downwards. What is the name of this force?',
      tier: 'core',
      options: ['Normal contact', 'Weight', 'Friction', 'Tension'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'ft-mis-weight-vs-mass-name',
      hint: 'Gravity acts on the football. The force that gravity makes on an object has a one-word name.',
    },
    {
      id: 'ft-q2',
      type: 'multiple-choice',
      stem: 'A book sits on a desk. The desk pushes the book upwards. What is the name of this force?',
      tier: 'core',
      options: [
        'The normal contact force, also called the reaction force.',
        'Tension, because the desk holds the book up.',
        'Upthrust, because the desk lifts the book.',
        'Air resistance, because air is between the book and the desk.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'ft-mis-normal-name',
      hint: 'Two surfaces touch and one pushes the other away.',
    },
    {
      id: 'ft-q3',
      type: 'multiple-choice',
      stem: 'A rough box is dragged across a kitchen floor. The floor drags backwards on the box. What is the name of this force?',
      tier: 'core',
      options: ['Tension', 'Weight', 'Friction', 'Air resistance'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Two solid surfaces rub against each other.',
    },
    {
      id: 'ft-q4',
      type: 'numeric-entry',
      stem: 'A skydiver has opened a parachute and is now falling slowly downwards. Two named forces act on the skydiver: weight pulling down and air resistance pushing up. How many forces act in total?',
      tier: 'core',
      correctAnswer: 2,
      xpValue: 10,
      misconceptionId: 'ft-mis-air-resistance-name',
      hint: 'The stem already names the two forces. Count them.',
    },
    {
      id: 'ft-q5',
      type: 'numeric-entry',
      stem: 'A small wooden boat floats still on a lake. Two forces act on the boat: weight pulling down, and the upward push of the water. How many forces act in total?',
      tier: 'core',
      correctAnswer: 2,
      xpValue: 10,
      hint: 'Count the named forces in the stem.',
    },
    {
      id: 'ft-q6',
      type: 'numeric-entry',
      stem: 'A child sits still on a garden rope swing, not yet swinging. The rope pulls them upwards and gravity pulls them downwards. How many forces act on the child?',
      tier: 'core',
      correctAnswer: 2,
      xpValue: 10,
      hint: 'List the upward force and the downward force, then count.',
    },
    {
      id: 'ft-q7',
      type: 'numeric-entry',
      stem: 'A small steel paperclip is held still in the air just below a strong magnet, with no other contact. The magnet pulls the paperclip up and gravity pulls it down. How many forces act on the paperclip?',
      tier: 'core',
      correctAnswer: 2,
      xpValue: 10,
      misconceptionId: 'ft-mis-static-as-magnet',
      hint: 'A non-contact magnetic pull and a non-contact weight. Two named forces act.',
    },
    {
      id: 'ft-q8',
      type: 'labelled-image',
      stem: 'Place the names on this gallery of everyday forces. Each marker takes one label.',
      tier: 'core',
      viewBox: '0 0 600 400',
      svg: FORCE_GALLERY_SVG,
      hotspots: [
        { id: 'ft-q8-h1', x: 17, y: 30, correctLabel: 'Weight' },
        { id: 'ft-q8-h2', x: 40, y: 30, correctLabel: 'Normal contact' },
        { id: 'ft-q8-h3', x: 63, y: 30, correctLabel: 'Friction' },
        { id: 'ft-q8-h4', x: 87, y: 30, correctLabel: 'Air resistance' },
        { id: 'ft-q8-h5', x: 17, y: 60, correctLabel: 'Upthrust' },
        { id: 'ft-q8-h6', x: 40, y: 60, correctLabel: 'Tension' },
        { id: 'ft-q8-h7', x: 63, y: 60, correctLabel: 'Magnetic' },
        { id: 'ft-q8-h8', x: 87, y: 60, correctLabel: 'Electrostatic' },
      ],
      labels: [
        'Weight',
        'Normal contact',
        'Friction',
        'Air resistance',
        'Upthrust',
        'Tension',
        'Magnetic',
        'Electrostatic',
      ],
      xpValue: 15,
      hint: 'Use the everyday situation under each picture as your clue.',
    },
    {
      id: 'ft-q9',
      type: 'multiple-choice',
      stem: 'Which list contains only contact forces?',
      tier: 'confident',
      options: [
        'Friction, normal contact, gravity.',
        'Tension, magnetic, upthrust.',
        'Friction, normal contact, tension.',
        'Weight, electrostatic, air resistance.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'ft-mis-gravity-as-contact',
      hint: 'A contact force needs the two objects to touch each other.',
    },
    {
      id: 'ft-q10',
      type: 'multiple-choice',
      stem: 'Which list contains only non-contact forces?',
      tier: 'confident',
      options: [
        'Gravity, magnetic, electrostatic.',
        'Friction, gravity, air resistance.',
        'Tension, upthrust, magnetic.',
        'Normal contact, gravity, electrostatic.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'ft-mis-gravity-as-contact',
      hint: 'A non-contact force can act through empty space, with no touch needed.',
    },
    {
      id: 'ft-q11',
      type: 'spot-misconception',
      stem: 'Lila says, "Air resistance only acts on objects when they are falling. A car driving along a flat road has no air resistance." Is the method sound?',
      tier: 'confident',
      statements: [
        {
          text: 'Lila is right. Air resistance only matters during falls. On a flat road the air around a car has no effect.',
          isMisconception: true,
        },
        {
          text: 'Lila is not right. Air resistance acts on any object moving through the air, including a car along a flat road. The faster the car goes, the more the air pushes back.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'ft-mis-air-only-falls',
    },
    {
      id: 'ft-q13',
      type: 'drag-order',
      stem: 'A cyclist sets off from rest and rolls to a stop on a flat road in the rain. Place the four forces on the cyclist in the order they appear on a labelled force diagram of the moving cyclist.',
      tier: 'confident',
      items: [
        'Friction (backwards)',
        'Weight (downwards)',
        'Air resistance (backwards)',
        'Normal contact (upwards)',
      ],
      correctOrder: [1, 3, 0, 2],
      xpValue: 15,
      hint: 'Start with the pull of gravity downwards, then the road push upwards, then the two backwards forces.',
    },
    {
      id: 'ft-q14',
      type: 'multiple-choice',
      stem: 'A child rubs a balloon on their jumper, then holds the balloon close to a wall. The balloon sticks to the wall. What is the name of the force that holds it there?',
      tier: 'confident',
      options: [
        'Magnetic, because the balloon has been turned into a magnet.',
        'Electrostatic, because rubbing has charged the balloon.',
        'Upthrust, because the wall pushes the balloon outwards.',
        'Friction, because the balloon rubs the wall.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'ft-mis-static-as-magnet',
      hint: 'Rubbing builds up static charge, not magnetism.',
    },
    {
      id: 'ft-q15',
      type: 'numeric-entry',
      stem: 'A bag of shopping hangs at rest from a hook on a kitchen ceiling. How many forces act on the bag?',
      tier: 'confident',
      correctAnswer: 2,
      xpValue: 15,
      misconceptionId: 'ft-mis-tension-not-counted',
      hint: 'There is the pull of gravity downwards. What is the only other thing touching the bag?',
    },
    {
      id: 'ft-q16',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is listing the forces on a swimmer floating face down in a swimming pool, not yet moving.',
      tier: 'confident',
      steps: [
        'Pick the object. The object is the swimmer.',
        'Find gravity. The Earth pulls the swimmer downwards. The force is called the swimmer’s weight.',
        'Look for any contact with a fluid. The water surrounds the swimmer.',
        null,
        'List the two forces: weight (downwards) and upthrust (upwards). Both act at the same time and the swimmer floats.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Name the force the water puts on the swimmer. A fluid pushes upwards on anything floating in it. This force is called upthrust.',
      xpValue: 15,
    },
    {
      id: 'ft-q17',
      type: 'multiple-choice',
      stem: 'A sledge is pulled across smooth ice by a rope. Which row matches the named force to the right object?',
      tier: 'challenge',
      options: [
        'Tension acts on the rope only; weight acts on the sledge only; friction acts on the ice only.',
        'Tension acts on the sledge from the rope; weight acts on the sledge from gravity; friction acts on the sledge from the ice.',
        'Tension acts on the ice; weight acts on the rope; friction acts on the sledge.',
        'Tension and friction both act on the rope; weight acts on the sledge.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'ft-mis-force-on-wrong-object',
      hint: 'A force always acts on the object you are studying. Pick the sledge as the object, then ask what the rope, the Earth, and the ice each do to it.',
    },
    {
      id: 'ft-q18',
      type: 'multiple-choice',
      stem: 'A small steel paperclip is pulled across a wooden table by a magnet held just above it, without the magnet ever touching the paperclip. Which two forces does the magnet experience from the table and the paperclip below it?',
      tier: 'challenge',
      options: [
        'Friction from the table and weight from the paperclip.',
        'Air resistance and electrostatic force.',
        'No forces, because the magnet does not touch anything.',
        'Magnetic force from the paperclip and weight from the Earth.',
      ],
      correctIndex: 3,
      xpValue: 20,
      misconceptionId: 'ft-mis-static-as-magnet',
      hint: 'A magnetic force acts in pairs. If the magnet pulls the paperclip, the paperclip pulls the magnet. The magnet also has its own weight.',
    },
    {
      id: 'ft-q19',
      type: 'free-text',
      stem: 'On the way to school you take the Tube. As the carriage pulls away from the platform, you feel pulled backwards into your seat. Name two forces that act on you while you are stood holding the rail of the carriage. Say which is a contact force and which is non-contact.',
      tier: 'challenge',
      sampleAnswer:
        'Two forces on me are weight and tension in my arm holding the rail. Weight is the pull of gravity downwards. It is a non-contact force because gravity acts at a distance from the Earth, with no touch needed. Tension is the pull along my arm from the rail as the carriage starts to move. It is a contact force because my hand is gripping the rail. The friction between my shoes and the floor of the carriage is also a contact force, and the floor pushes up on me with a normal contact force as well.',
      keywords: ['weight', 'tension', 'normal', 'friction', 'contact', 'non-contact', 'gravity'],
      xpValue: 20,
      misconceptionId: 'ft-mis-tension-not-counted',
    },
    {
      id: 'ft-q20',
      type: 'multiple-choice',
      stem: 'A toy boat is pushed across the bath by a child’s hand for a moment, then let go. As soon as the hand lets go, which set of forces still acts on the boat?',
      tier: 'challenge',
      options: [
        'Weight, upthrust, friction with the water.',
        'Weight, upthrust, applied push.',
        'Applied push, friction, magnetic force.',
        'Tension, weight, normal contact from the bottom of the bath.',
      ],
      correctIndex: 0,
      xpValue: 20,
      misconceptionId: 'ft-mis-applied-keeps-going',
      hint: 'An applied force only acts while the thing applying it is in contact. Once the hand lets go, list only the forces from the Earth and the water.',
    },
    {
      id: 'ft-q21',
      type: 'multiple-choice',
      stem: 'A football has just left the boot of a player taking a goal kick. Name the forces acting on the ball while it is in the air, before it lands.',
      tier: 'challenge',
      options: [
        'Weight only.',
        'Weight and an applied force from the boot.',
        'Weight and air resistance.',
        'Air resistance only, because the kick gave it the push.',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'ft-mis-applied-keeps-going',
      hint: 'The boot is no longer in contact with the ball, so the applied force is gone. Two forces remain.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics examiner report June 2022, Paper 1F, candidates label gravity as a contact force in tables of contact and non-contact forces
    {
      id: 'ft-mis-gravity-as-contact',
      description:
        'Treating gravity as a contact force, on the grounds that you are stood on the ground when it acts.',
      triggerAnswer: 'gravity-as-contact',
      correction:
        'Gravity is a non-contact force. The Earth pulls on you whether you are stood on the ground, jumping in the air, or in orbit. It acts at a distance and needs no touch.',
      reExplanation:
        'A diver leaps off a 10 metre board and falls into the pool. There is nothing touching them in the air, yet they fall. Gravity has reached across the empty space to pull them down. Touch is not needed for it to act, which is what makes it a non-contact force.',
    },
    // Source: CGP KS3 Physics Study Guide Common Mistake box on the reaction force
    {
      id: 'ft-mis-normal-name',
      description:
        'Calling the upward push of a surface on an object the wrong name, often "force of the table" or "support force", instead of normal contact or reaction.',
      triggerAnswer: 'normal-name',
      correction:
        'The push of a surface at right angles to itself is called the normal contact force, also called the reaction force. Use one of these named forces in your answers.',
      reExplanation:
        'Stand a tin of beans on a worktop. The worktop pushes upwards on the tin, exactly cancelling the weight, which is why the tin sits still. That upward push has a name: the normal contact force. Get into the habit of writing "normal contact" rather than vague phrases such as "the table holding it up".',
    },
    // Source: Edexcel GCSE Physics examiner report June 2019, Paper 1PH0/1F, learners write "wind resistance" or "drag" with no link to air resistance
    {
      id: 'ft-mis-air-resistance-name',
      description:
        'Using vague names such as "wind", "wind resistance" or "force of the air" rather than the standard name "air resistance" (or its alternative, drag).',
      triggerAnswer: 'air-resistance-name',
      correction:
        'The push of the air on a moving object has a fixed name in KS3 Physics: air resistance. The shorter name drag is also accepted; "wind" or "force of the air" is not.',
      reExplanation:
        'A cyclist on a flat road in still air still feels the air push back as they ride. That push is called air resistance, and it gets bigger the faster the cyclist goes. The same force on a falling raindrop is also called air resistance. Stick to the named force; vague words lose marks in exams.',
    },
    // Source: CGP KS3 Physics Study Guide Common Mistake box on air resistance
    {
      id: 'ft-mis-air-only-falls',
      description:
        'Believing air resistance only acts on falling objects, so a car or runner on a flat road has no air resistance.',
      triggerAnswer: 'air-only-falls',
      correction:
        'Air resistance acts on any object moving through air, in any direction. A car driving along a flat road feels air resistance pushing it backwards.',
      reExplanation:
        'Hold your hand out of a moving car window (carefully). The faster the car moves, the harder the air pushes back on your hand. The same push acts on the whole car, on a runner, on a plane in level flight, and on a falling raindrop. Direction does not matter; movement through the air does.',
    },
    // Source: CGP KS3 Physics Workbook Common Mistake box on naming weight
    {
      id: 'ft-mis-weight-vs-mass-name',
      description:
        'Calling the pull of gravity downwards "mass" or "gravity force on the object", rather than its proper name, weight.',
      triggerAnswer: 'weight-vs-mass-name',
      correction:
        'The downward pull of gravity on an object has a fixed name in KS3 Physics: weight. Mass is a separate idea, the amount of matter in the object.',
      reExplanation:
        'A 1 kg bag of sugar has a mass of 1 kg everywhere in the universe. On Earth its weight is about 10 N because Earth’s gravity pulls each kilogram with about 10 N of force. On the Moon the same bag still has a mass of 1 kg, but its weight is less, about 1.6 N. So mass and weight are not the same; the pull of gravity is called weight.',
    },
    // Source: OCR GCSE Physics examiner report June 2022, J259/02, candidates confuse static (electrostatic) effects with magnetism
    {
      id: 'ft-mis-static-as-magnet',
      description:
        'Calling the force between a charged balloon and a wall a magnetic force, because both kinds of force act at a distance.',
      triggerAnswer: 'static-as-magnet',
      correction:
        'The force between a charged object and an uncharged surface is called electrostatic, not magnetic. Magnets only pull on certain metals (mainly iron, steel, nickel, cobalt), not on a painted wall.',
      reExplanation:
        'Both magnetic and electrostatic forces are non-contact, but they come from different things. A magnet works because of the magnetism of iron-rich metals. A rubbed balloon works because of static charge built up by friction. Try the balloon on a metal radiator; it still sticks because of electrostatic force, not because the wall is magnetic.',
    },
    // Source: AQA GCSE Physics examiner report June 2023, Paper 1F, candidates omit tension when listing forces on a hanging object
    {
      id: 'ft-mis-tension-not-counted',
      description:
        'Listing only the weight on a hanging object, forgetting to count the tension in the rope or string that holds it up.',
      triggerAnswer: 'tension-not-counted',
      correction:
        'On a hanging object at rest, the rope or string pulls upwards with a tension force. List both the weight and the tension; the two forces balance.',
      reExplanation:
        'A bag of shopping hangs from a hook. Gravity pulls it down with weight; the rope of the bag pulls up with tension. The two forces are equal in size and opposite in direction, so the bag hangs still. Miss the tension and you cannot explain why the bag does not fall.',
    },
    // Authored, no external source
    {
      id: 'ft-mis-applied-keeps-going',
      description:
        'Believing an applied push or pull keeps acting on an object after the hand or boot has let go, so a thrown ball still has a forwards force.',
      triggerAnswer: 'applied-keeps-going',
      correction:
        'An applied force only acts while the thing applying it is in contact. Once the hand or boot lets go, the applied force stops; the object keeps moving because of its own motion, not because of a force.',
      reExplanation:
        'A tennis ball leaves a racket. While the strings touch the ball, the racket pushes the ball forward. The instant the strings stop touching, that push is gone. The ball then carries on through the air with only weight and air resistance acting on it. The push from the racket is in the past, not still acting on the ball.',
    },
    // Source: Edexcel GCSE Physics examiner report June 2022, Paper 1PH0/1F, force-on-wrong-object errors in free-body diagram questions
    {
      id: 'ft-mis-force-on-wrong-object',
      description:
        'Drawing or naming forces on the wrong object, for example saying that tension acts on the rope rather than on the sledge the rope is pulling.',
      triggerAnswer: 'force-on-wrong-object',
      correction:
        'A force always acts on the object you are studying. Pick the object first, then list only the forces something else puts on that object.',
      reExplanation:
        'Look at a sledge being pulled by a rope. The object is the sledge. The rope pulls the sledge with a tension force (on the sledge). Gravity pulls the sledge down with weight (on the sledge). The ice pushes the sledge up with a normal contact force (on the sledge). The rope feels a force too, but that goes on a separate diagram for the rope.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

const BALANCED_BOOK_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="300" y="50" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Book on a desk: balanced</text>
    <line x1="100" y1="220" x2="500" y2="220" />
    <rect x="240" y="170" width="120" height="50" fill="currentColor" />
    <!-- Weight arrow downwards -->
    <line x1="300" y1="195" x2="300" y2="290" />
    <polygon points="292,278 300,295 308,278" fill="currentColor" stroke="none" />
    <text x="320" y="285" font-size="14" font-weight="700" stroke="none" fill="currentColor">Weight 5 N</text>
    <!-- Normal contact arrow upwards -->
    <line x1="300" y1="195" x2="300" y2="100" />
    <polygon points="292,112 300,95 308,112" fill="currentColor" stroke="none" />
    <text x="320" y="110" font-size="14" font-weight="700" stroke="none" fill="currentColor">Normal contact 5 N</text>
    <text x="300" y="350" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Two equal and opposite arrows. Net force = 0 N. Book stays still.</text>
  </g>
`

const COASTING_CYCLIST_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="50" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Cyclist coasting at constant speed</text>
    <line x1="60" y1="240" x2="740" y2="240" />
    <!-- Bike body -->
    <circle cx="320" cy="220" r="22" />
    <circle cx="480" cy="220" r="22" />
    <line x1="320" y1="220" x2="400" y2="160" />
    <line x1="480" y1="220" x2="400" y2="160" />
    <line x1="400" y1="160" x2="380" y2="120" />
    <line x1="380" y1="120" x2="420" y2="120" />
    <!-- Cyclist body (stick) -->
    <circle cx="400" cy="100" r="14" />
    <line x1="400" y1="114" x2="400" y2="155" />
    <!-- Forward push from pedals (long arrow) -->
    <line x1="500" y1="180" x2="610" y2="180" />
    <polygon points="600,172 615,180 600,188" fill="currentColor" stroke="none" />
    <text x="555" y="170" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Forward push 30 N</text>
    <!-- Backward drag (same length) -->
    <line x1="290" y1="180" x2="180" y2="180" />
    <polygon points="190,172 175,180 190,188" fill="currentColor" stroke="none" />
    <text x="235" y="170" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Drag 30 N</text>
    <!-- Weight downwards -->
    <line x1="400" y1="125" x2="400" y2="190" />
    <polygon points="392,180 400,195 408,180" fill="currentColor" stroke="none" />
    <text x="425" y="200" font-size="13" font-weight="700" stroke="none" fill="currentColor">Weight</text>
    <!-- Normal contact upwards -->
    <line x1="400" y1="240" x2="400" y2="290" />
    <polygon points="392,250 400,235 408,250" fill="currentColor" stroke="none" />
    <text x="425" y="270" font-size="13" font-weight="700" stroke="none" fill="currentColor">Normal contact</text>
    <text x="400" y="345" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Forward and backward forces are equal. Net force = 0 N. Cyclist coasts at the same speed.</text>
  </g>
`

const UNBALANCED_BOX_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="50" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Pushed box: unbalanced</text>
    <line x1="60" y1="220" x2="740" y2="220" />
    <rect x="320" y="160" width="120" height="60" fill="currentColor" />
    <!-- Push arrow long -->
    <line x1="450" y1="190" x2="610" y2="190" />
    <polygon points="600,182 615,190 600,198" fill="currentColor" stroke="none" />
    <text x="530" y="180" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Push 40 N</text>
    <!-- Friction arrow shorter -->
    <line x1="310" y1="190" x2="240" y2="190" />
    <polygon points="250,182 235,190 250,198" fill="currentColor" stroke="none" />
    <text x="275" y="180" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Friction 15 N</text>
    <!-- Net force result -->
    <text x="400" y="280" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Net force = 40 N forward minus 15 N back = 25 N forward</text>
    <text x="400" y="305" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Box speeds up in the forward direction.</text>
  </g>
`

const STATIONARY_FBD_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <line x1="100" y1="280" x2="700" y2="280" />
    <rect x="320" y="200" width="160" height="80" fill="currentColor" />
    <!-- Weight down -->
    <line x1="400" y1="240" x2="400" y2="350" />
    <polygon points="392,338 400,355 408,338" fill="currentColor" stroke="none" />
    <text x="420" y="350" font-size="14" font-weight="700" stroke="none" fill="currentColor">F1 = 80 N</text>
    <!-- Normal up -->
    <line x1="400" y1="240" x2="400" y2="130" />
    <polygon points="392,142 400,125 408,142" fill="currentColor" stroke="none" />
    <text x="420" y="140" font-size="14" font-weight="700" stroke="none" fill="currentColor">F2 = 80 N</text>
  </g>
`

export const forcesBalanced: SkillNode = {
  id: 'physics-forces-balanced',
  title: 'Balanced and Unbalanced Forces',
  description:
    'Use force arrows on a free-body diagram to decide whether the forces on an object are balanced or unbalanced. Predict that balanced forces leave the motion unchanged (still or moving at the same speed in a straight line) and unbalanced forces change the motion (speeding up, slowing down, or changing direction).',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-forces',
  zoneName: 'Forces',
  tier: 'core',
  prerequisites: ['physics-forces-types'],
  curriculum: {
    ks3Objective:
      'Forces being needed to cause objects to stop or start moving, or to change their speed or direction of motion (qualitative only); using force arrows in diagrams, adding forces in one dimension, balanced and unbalanced forces.',
    awardingBodies: {
      aqa: '4.5.1.4 Resultant forces; 4.5.6.1 Newton’s First Law (GCSE Physics 8463)',
      edexcel: 'Topic 1 Motion and forces, 1.21-1.23 Resultant forces and Newton’s First Law (GCSE Physics 1PH0)',
      ocr: 'P2.2 Newton’s laws, balanced and unbalanced forces (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'fb-scene-balanced-book',
      title: 'A Book at Rest: Balanced Forces',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read the two arrows on the book and check that they balance.',
      data: {
        viewBox: '0 0 600 400',
        svg: BALANCED_BOOK_SVG,
        hotspots: [
          {
            id: 'fb-bb-weight',
            x: 53,
            y: 73,
            label: 'Weight 5 N down',
            description:
              'Gravity pulls the book down with a force of 5 N. The arrow points straight down to show the direction.',
          },
          {
            id: 'fb-bb-normal',
            x: 53,
            y: 28,
            label: 'Normal contact 5 N up',
            description:
              'The desk pushes back on the book with a force of 5 N upwards. Equal in size and opposite in direction to the weight.',
          },
          {
            id: 'fb-bb-net',
            x: 50,
            y: 88,
            label: 'Net force 0 N',
            description:
              'The two arrows are equal and opposite, so they balance out. The net force is 0 N and the book stays still.',
          },
        ],
      },
    },
    {
      id: 'fb-scene-coasting',
      title: 'Coasting at Constant Speed: Still Balanced',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see why a cyclist moving at the same speed has balanced forces too.',
      data: {
        viewBox: '0 0 800 400',
        svg: COASTING_CYCLIST_SVG,
        hotspots: [
          {
            id: 'fb-cc-forward',
            x: 70,
            y: 45,
            label: 'Forward push 30 N',
            description:
              'The pedals drive the bike forward with a force of 30 N. The arrow length shows the size of the force.',
          },
          {
            id: 'fb-cc-drag',
            x: 30,
            y: 45,
            label: 'Drag 30 N',
            description:
              'Friction and air resistance together drag back with the same 30 N. Equal and opposite to the forward push.',
          },
          {
            id: 'fb-cc-vertical',
            x: 53,
            y: 67,
            label: 'Weight and normal contact balance',
            description:
              'The two vertical arrows are also equal and opposite. So all four arrows balance, the net force is 0 N, and the cyclist coasts at the same speed in a straight line.',
          },
          {
            id: 'fb-cc-rule',
            x: 50,
            y: 86,
            label: 'Rule for balanced forces',
            description:
              'Balanced forces do not stop a moving object. They keep its motion the same: still if it was still, or moving at the same speed in a straight line if it was already moving.',
          },
        ],
      },
    },
    {
      id: 'fb-scene-unbalanced',
      title: 'Unbalanced Forces Change Motion',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read the arrows and work out what the box does next.',
      data: {
        viewBox: '0 0 800 400',
        svg: UNBALANCED_BOX_SVG,
        hotspots: [
          {
            id: 'fb-ub-push',
            x: 66,
            y: 45,
            label: 'Push 40 N forward',
            description:
              'A person pushes the box to the right with a force of 40 N. The arrow is drawn long.',
          },
          {
            id: 'fb-ub-friction',
            x: 34,
            y: 45,
            label: 'Friction 15 N back',
            description:
              'Friction drags back on the box with a force of 15 N. The arrow is drawn shorter to show a smaller force.',
          },
          {
            id: 'fb-ub-net',
            x: 50,
            y: 70,
            label: 'Net force 25 N forward',
            description:
              'Subtract the smaller arrow from the larger one: 40 minus 15 is 25. The net force is 25 N to the right. The forces are unbalanced.',
          },
          {
            id: 'fb-ub-result',
            x: 50,
            y: 78,
            label: 'Result',
            description:
              'A non-zero net force changes the motion. The box speeds up in the direction of the net force, which here is to the right.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'fb-worked-1',
      title: 'A 60 kg child stood still on the kitchen floor',
      steps: [
        {
          explanation:
            'Pick the object. The object is the child stood on the floor. Every arrow goes on the child.',
        },
        {
          explanation:
            'Find the pull of gravity. The Earth pulls the child downwards. Call this the weight, 600 N (rounded so each kilogram weighs about 10 N at the Earth’s surface).',
          maths: 'Weight = 600 N down',
        },
        {
          explanation:
            'Find the push of the floor. The floor pushes upwards on the bottom of the child’s shoes. Call this the normal contact force.',
        },
        {
          explanation:
            'The child is stood still. So the upward push of the floor must exactly cancel the downward pull of gravity, otherwise the child would not be still.',
          maths: 'Normal contact = 600 N up',
        },
        {
          explanation:
            'Add the forces. 600 N down and 600 N up cancel out. The net force is 0 N. The forces are balanced.',
          maths: 'Net force = 600 - 600 = 0 N',
        },
        {
          explanation:
            'Predict the motion. With balanced forces, a still object stays still. The child stays at rest. Easy check: this matches what we said in the stem.',
        },
      ],
    },
    {
      id: 'fb-worked-2',
      title: 'A toy car pushed across the floor with friction in the way',
      steps: [
        {
          explanation:
            'Set the scene. A child pushes a toy car along a smooth floor with a forward force of 8 N. Friction drags back on the car with 3 N.',
        },
        {
          explanation:
            'Draw the two horizontal arrows. The forward push is the longer arrow (8 N), the friction is the shorter arrow (3 N), in the opposite direction.',
        },
        {
          explanation:
            'Add the forces in one dimension. Take forwards as positive: 8 forward minus 3 back gives 5 N forward.',
          maths: 'Net force = 8 - 3 = 5 N forward',
        },
        {
          explanation:
            'Decide if the forces are balanced or unbalanced. The two horizontal arrows are not equal, so the forces are unbalanced.',
        },
        {
          explanation:
            'Predict the motion. A non-zero net force changes the motion. The car was moving forwards already, so it speeds up in the forwards direction.',
        },
        {
          explanation:
            'Check the vertical arrows too. Weight (down) and normal contact (up) balance out, so they do not change the motion. The horizontal pair is what makes the car speed up.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'fb-q1',
      type: 'multiple-choice',
      stem: 'A book sits still on a desk. Which sentence describes the forces on the book?',
      tier: 'core',
      options: [
        'Only weight acts on the book; the desk does nothing.',
        'A push acts forwards on the book; everything else is zero.',
        'Friction pulls the book back along the desk.',
        'Weight pulls the book down and the desk pushes up with the same size of force; the forces are balanced.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'fb-mis-only-weight-on-still',
      hint: 'A still object on a flat surface has two main vertical forces.',
    },
    {
      id: 'fb-q2',
      type: 'multiple-choice',
      stem: 'Two force arrows are drawn on an object. They are the same length and point in opposite directions. What is the net force on the object?',
      tier: 'core',
      options: [
        'Twice the size of one arrow.',
        'The size of one arrow.',
        'Zero.',
        'Half the size of one arrow.',
      ],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Equal and opposite arrows cancel out.',
    },
    {
      id: 'fb-q3',
      type: 'multiple-choice',
      stem: 'Two force arrows are drawn on an object. The forwards arrow is 30 N. The backwards arrow is 30 N. The object was already moving forwards. What happens next?',
      tier: 'core',
      options: [
        'The object stops, because balanced forces always stop motion.',
        'The object keeps moving forwards at the same speed, because the net force is zero.',
        'The object speeds up forwards, because the forwards arrow is shown first.',
        'The object slows down, because the backwards arrow stops it.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'fb-mis-balanced-means-stopped',
      hint: 'Balanced forces leave the motion as it was. The object was already moving forwards.',
    },
    {
      id: 'fb-q4',
      type: 'numeric-entry',
      stem: 'A box is pushed forwards with a force of 50 N. Friction drags back on the box with a force of 30 N. What is the net force on the box, in newtons, in the forwards direction?',
      tier: 'core',
      correctAnswer: 20,
      unit: 'N',
      xpValue: 10,
      hint: 'Subtract the backward arrow from the forward arrow.',
    },
    {
      id: 'fb-q5',
      type: 'numeric-entry',
      stem: 'A child pulls a sledge across smooth ice with a 25 N pull along the rope. Friction with the ice is so small it can be ignored. What is the net force on the sledge, in newtons, in the direction of the pull?',
      tier: 'core',
      correctAnswer: 25,
      unit: 'N',
      xpValue: 10,
      hint: 'With friction zero, only the pull along the rope counts in the horizontal direction.',
    },
    {
      id: 'fb-q6',
      type: 'numeric-entry',
      stem: 'Two children pull on the same rope in a tug of war. Anya pulls to her side with 200 N. Theo pulls to his side with 200 N. What is the net force on the rope, in newtons?',
      tier: 'core',
      correctAnswer: 0,
      unit: 'N',
      xpValue: 10,
      hint: 'Equal and opposite pulls cancel out.',
    },
    {
      id: 'fb-q7',
      type: 'multiple-choice',
      stem: 'A diagram shows a sledge on snow with a 12 N forwards pull and a 4 N backwards friction. What does the diagram tell you about the motion of the sledge?',
      tier: 'core',
      options: [
        'The sledge stays still, because there is friction.',
        'The forces are unbalanced. The sledge will speed up in the forwards direction.',
        'The forces are balanced. The sledge will keep moving at the same speed.',
        'The sledge will stop, because friction always wins.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'fb-mis-friction-always-wins',
      hint: 'Compare the forwards arrow length with the backwards arrow length.',
    },
    {
      id: 'fb-q8',
      type: 'labelled-image',
      stem: 'A 80 N box rests still on a flat floor. Place the names on the two force arrows shown on the free-body diagram.',
      tier: 'core',
      viewBox: '0 0 800 400',
      svg: STATIONARY_FBD_SVG,
      hotspots: [
        { id: 'fb-q8-h1', x: 55, y: 87, correctLabel: 'Weight' },
        { id: 'fb-q8-h2', x: 55, y: 35, correctLabel: 'Normal contact' },
      ],
      labels: ['Weight', 'Normal contact', 'Friction', 'Tension'],
      xpValue: 15,
      hint: 'F1 points down from the bottom of the box; F2 points up from the top.',
    },
    {
      id: 'fb-q9',
      type: 'multiple-choice',
      stem: 'A car drives along a flat motorway at a steady 70 mph (constant speed in a straight line). Which sentence is correct? Note that weight pulls the car down and the road pushes up with the same size of force, so the vertical pair already balances.',
      tier: 'confident',
      options: [
        'The forwards engine force is bigger than the drag, otherwise the car would not move.',
        'The forwards engine force equals the drag, so the net force is zero and the car keeps moving at the same speed.',
        'The drag is bigger than the engine force, so the car is slowing down.',
        'There is no friction or drag, because the car is on a smooth motorway.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'fb-mis-skip-vertical-on-moving',
      hint: 'Constant speed in a straight line means a net force of zero. The vertical arrows already balance, so look at the horizontal pair.',
    },
    {
      id: 'fb-q10',
      type: 'multiple-choice',
      stem: 'A toy boat is pushed across a bath. The hand lets go and the boat now coasts forward. Friction with the water is small but not zero. What does the boat do next?',
      tier: 'confident',
      options: [
        'It speeds up, because there is no hand pushing back on it.',
        'It keeps moving at exactly the same speed forever.',
        'It slows down, because friction with the water is now the only horizontal force, and it acts backwards.',
        'It stops at once, because the applied push has gone.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'fb-mis-balanced-means-stopped',
      hint: 'List only the forces still acting once the hand has let go. Friction is unbalanced now.',
    },
    {
      id: 'fb-q11',
      type: 'numeric-entry',
      stem: 'Two forces act horizontally on a trolley. A 65 N forwards push and a 25 N backwards friction. What is the net force on the trolley, in newtons, in the forwards direction?',
      tier: 'confident',
      correctAnswer: 40,
      unit: 'N',
      xpValue: 15,
      misconceptionId: 'fb-mis-add-not-subtract',
      hint: 'Take forwards as positive. Forwards minus backwards.',
    },
    {
      id: 'fb-q12',
      type: 'numeric-entry',
      stem: 'A skydiver in mid-fall has a weight of 700 N pulling down and an air resistance of 700 N pushing up. The skydiver is falling. What is the net force on the skydiver, in newtons?',
      tier: 'confident',
      correctAnswer: 0,
      unit: 'N',
      xpValue: 15,
      misconceptionId: 'fb-mis-balanced-means-stopped',
      hint: 'Equal and opposite arrows cancel out, even on a moving object.',
    },
    {
      id: 'fb-q13',
      type: 'spot-misconception',
      stem: 'Theo says, "If two forces on a box are balanced, the box must be stood still. So a moving box always has unbalanced forces." Is the method sound?',
      tier: 'confident',
      statements: [
        {
          text: 'Theo is right. Balanced forces only happen on a still object. A moving object must have a net force on it.',
          isMisconception: true,
        },
        {
          text: 'Theo is not right. Balanced forces happen on any object whose motion is not changing. A box moving in a straight line at constant speed has balanced forces, with a net force of zero.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fb-mis-balanced-means-stopped',
    },
    {
      id: 'fb-q14',
      type: 'spot-misconception',
      stem: 'Lila says, "An object only keeps moving if a force keeps pushing it. So a coasting bicycle must have a forwards force on it as long as it keeps moving." Is the method sound?',
      tier: 'confident',
      statements: [
        {
          text: 'Lila is right. Without a forwards push, a moving object would stop straight away.',
          isMisconception: true,
        },
        {
          text: 'Lila is not right. A moving object keeps going if no net force acts on it. A coasting bicycle slows down only because friction and air resistance act backwards; the rider is not still pushing it.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fb-mis-needs-force-to-keep-moving',
    },
    {
      id: 'fb-q15',
      type: 'drag-order',
      stem: 'A pupil is asked to decide whether the forces on a moving cycle are balanced. Place the four steps in the right order.',
      tier: 'confident',
      items: [
        'Compare the forwards arrow with the backwards arrow on the cycle.',
        'Add the forces in one dimension to find the net force.',
        'Identify the object as the cycle (with the rider treated as part of it).',
        'Decide whether the forces are balanced (net force zero) or unbalanced (net force not zero).',
      ],
      correctOrder: [2, 0, 1, 3],
      xpValue: 15,
      hint: 'Pick the object first, then look at the arrows, then add them, then decide.',
    },
    {
      id: 'fb-q16',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is working out whether a parked car has balanced or unbalanced forces.',
      tier: 'confident',
      steps: [
        'Pick the object: the parked car.',
        'List the forces on the car. Weight pulls down 12 000 N. The road pushes up with the normal contact force.',
        'Note that the car is at rest, so the road must exactly cancel the weight.',
        null,
        'State the result. The forces on the parked car are balanced. The net force is 0 N and the car stays still.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Set the normal contact force at 12 000 N up so it cancels the 12 000 N weight, then add: 12 000 down and 12 000 up give a net force of 0 N.',
      xpValue: 15,
    },
    {
      id: 'fb-q17',
      type: 'numeric-entry',
      stem: 'A trolley in a warehouse has a 90 N forwards push and a 50 N backwards friction. What is the net force on the trolley, in newtons, in the forwards direction?',
      tier: 'challenge',
      correctAnswer: 40,
      unit: 'N',
      xpValue: 20,
      hint: 'Take forwards as positive and add the two arrows in one dimension.',
    },
    {
      id: 'fb-q18',
      type: 'multiple-choice',
      stem: 'A South Downs cyclist used to ride a flat road at a steady 8 m/s with the wind behind her. The wind drops to nothing and she keeps pedalling at the same effort. Drag now exceeds her forwards force by 5 N. Which sentence is correct?',
      tier: 'challenge',
      options: [
        'The cyclist speeds up, because she is still pedalling.',
        'The cyclist keeps coasting at 8 m/s, because pedalling and drag balance.',
        'The cyclist slows down, because the net force is now backwards.',
        'The cyclist stops at once, because the wind no longer helps her.',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'fb-mis-needs-force-to-keep-moving',
      hint: 'A net force of 5 N backwards on a forwards-moving cyclist gives a slow-down.',
    },
    {
      id: 'fb-q19',
      type: 'multiple-choice',
      stem: 'A double-decker bus pulling out of a Manchester stop accelerates from rest. The driver presses the accelerator. Which row matches the forces and the result?',
      tier: 'challenge',
      options: [
        'Forwards engine force is bigger than backwards drag; net force forwards; the bus speeds up.',
        'Forwards engine force equals backwards drag; net force zero; the bus speeds up.',
        'Backwards drag is bigger than forwards engine force; net force backwards; the bus speeds up.',
        'There is no drag at low speeds, so the engine alone moves the bus at constant speed.',
      ],
      correctIndex: 0,
      xpValue: 20,
      misconceptionId: 'fb-mis-applied-equals-motion',
      hint: 'A net force in the same direction as the motion makes the object speed up.',
    },
    {
      id: 'fb-q20',
      type: 'multiple-choice',
      stem: 'A football is kicked along a flat school field. Once it is rolling, the kicker no longer touches it. Friction with the grass acts on the football. What does the ball do next, and what does its free-body diagram in the horizontal direction show?',
      tier: 'challenge',
      options: [
        'The ball speeds up; only a forwards force from the kick acts on it.',
        'The ball moves at the same speed forever; the diagram shows a forwards force from the kick balancing friction.',
        'The ball slows down; the diagram shows only a backwards friction arrow, with no forwards arrow because the kick has ended.',
        'The ball stops at once; the diagram shows a forwards friction arrow.',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'fb-mis-applied-equals-motion',
      hint: 'After the kick, the boot is no longer in contact with the ball. List only the forces still acting on the ball.',
    },
    {
      id: 'fb-q21',
      type: 'free-text',
      stem: 'A cycling helmet light hangs from a hook in a hallway, not swinging. Explain whether the forces on the light are balanced or unbalanced. Name each force, give its direction, and say what the net force is.',
      tier: 'challenge',
      sampleAnswer:
        'Two forces act on the hanging light. Weight pulls it downwards because of gravity. Tension in the hook string pulls it upwards. The light is not swinging and is staying still, so its motion is not changing. By the rule for balanced forces, the two arrows must be equal in size and opposite in direction. So the upward tension equals the downward weight, and the net force on the light is zero. The forces are balanced.',
      keywords: ['weight', 'tension', 'balanced', 'equal', 'opposite', 'zero', 'net force'],
      xpValue: 20,
      misconceptionId: 'fb-mis-balanced-means-stopped',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics examiner report June 2022, Paper 1F, learners think balanced forces always mean a stationary object
    {
      id: 'fb-mis-balanced-means-stopped',
      description:
        'Believing that balanced forces only happen on a still object, so a moving object must always have unbalanced forces.',
      triggerAnswer: 'balanced-means-stopped',
      correction:
        'Balanced forces happen on any object whose motion is not changing. A still object has balanced forces; an object moving in a straight line at constant speed also has balanced forces.',
      reExplanation:
        'Picture a hockey puck sliding on ice with no friction. Weight (down) and the ice pushing up (normal contact) cancel. There is no horizontal arrow at all, so the horizontal forces also balance. The puck keeps gliding at the same speed in a straight line. Balanced forces leave the motion as it was, whether that motion is "stood still" or "moving along".',
    },
    // Source: Edexcel GCSE Physics examiner report June 2019, Paper 1PH0/1F, the "needs a force to keep moving" Aristotelian misconception
    {
      id: 'fb-mis-needs-force-to-keep-moving',
      description:
        'Believing that a moving object must have a forwards force on it for as long as it keeps moving; without a push, it would stop straight away.',
      triggerAnswer: 'needs-force-to-keep-moving',
      correction:
        'A moving object keeps going if there is no net force on it. Things slow down because friction or air resistance act backwards, not because forwards motion needs a force to last.',
      reExplanation:
        'Imagine a curling stone sliding on ice. Once the player has let go, no hand is pushing it forwards. With almost no friction, the stone slides for a very long way at almost the same speed. The motion does not need a force to keep it going; it only changes when a net force appears.',
    },
    // Source: CGP KS3 Physics Study Guide Common Mistake box on free-body diagrams
    {
      id: 'fb-mis-only-weight-on-still',
      description:
        'Drawing only the weight arrow on a still object on a surface, forgetting the normal contact force pushing back from the surface.',
      triggerAnswer: 'only-weight-on-still',
      correction:
        'A still object on a surface has at least two forces: weight downwards from gravity, and normal contact upwards from the surface. Both arrows go on the diagram.',
      reExplanation:
        'A book sat on a desk has weight pulling it down and the desk pushing it back up. The two arrows are equal and opposite, so they balance, and the book stays still. Miss the normal contact arrow and the diagram says the book should be falling, which it clearly is not.',
    },
    // Source: OCR GCSE Physics examiner report June 2022, J259/02, learners say friction always wins
    {
      id: 'fb-mis-friction-always-wins',
      description:
        'Believing friction always wins, so a sledge with a forwards pull bigger than friction will still stop or stay still.',
      triggerAnswer: 'friction-always-wins',
      correction:
        'Friction is one force on the diagram. If the forwards pull is bigger than friction, the net force is forwards, so the sledge speeds up forwards.',
      reExplanation:
        'Compare arrow lengths on the diagram. A 12 N forwards pull and a 4 N backwards friction give a net force of 12 minus 4, which is 8 N forwards. Friction does not win; it just reduces the net force. Only when friction equals or exceeds the forwards pull does the motion stop changing forwards.',
    },
    // Source: AQA GCSE Physics examiner report June 2023, Paper 1F, applied-force-equals-motion confusion
    {
      id: 'fb-mis-applied-equals-motion',
      description:
        'Believing the applied push on an object stays on the diagram for as long as the object keeps moving, so a kicked ball still has a forwards force from the boot.',
      triggerAnswer: 'applied-equals-motion',
      correction:
        'An applied force only acts while the thing applying it is in contact. Once the boot has left the ball, only the forces still acting (weight, air resistance, friction) belong on the diagram.',
      reExplanation:
        'A football leaves the boot. While the boot is touching, the boot pushes the ball forwards. The instant the boot loses contact, that arrow comes off the diagram. The ball carries on through the air with weight (down) and air resistance (backwards) only. The push is in the past; it is not still acting on the ball.',
    },
    // Source: CGP KS3 Physics Workbook Common Mistake box on adding force arrows
    {
      id: 'fb-mis-add-not-subtract',
      description:
        'Adding the sizes of two opposite force arrows together to get the net force, instead of subtracting the smaller from the larger.',
      triggerAnswer: 'add-not-subtract',
      correction:
        'When two forces act in opposite directions, take one direction as positive and subtract the smaller from the larger. The net force points in the direction of the larger arrow.',
      reExplanation:
        'A 50 N forwards push and a 30 N backwards friction do not give 80 N. They give 50 minus 30, which is 20 N, in the forwards direction. The 80 N answer would only be right if both arrows pointed the same way. Direction matters when adding forces in one dimension.',
    },
    // Source: Edexcel GCSE Physics examiner report June 2022, Paper 1PH0/1F, learners forget to balance vertical forces on a moving horizontal object
    {
      id: 'fb-mis-skip-vertical-on-moving',
      description:
        'On a horizontally moving object (cycle, car, trolley), drawing only the horizontal force arrows and skipping the vertical pair, then claiming the diagram shows balanced forces because "weight and normal aren’t important here".',
      triggerAnswer: 'skip-vertical-on-moving',
      correction:
        'Every object on a flat surface has weight downwards and a normal contact force upwards. Draw both pairs of arrows; only then can you say whether the overall forces are balanced.',
      reExplanation:
        'A coasting trolley has weight down and normal contact up, even though it is moving sideways. Those two arrows are equal and balance. The trolley speeds up or slows down only because of an unbalanced horizontal pair (push or friction). Skip the vertical arrows and you cannot prove the diagram is right.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const forcesZoneNodes = [forcesTypes, forcesBalanced]

export const forcesZone: Zone = {
  id: 'physics-forces',
  name: 'Forces',
  realm: 'mechanica',
  nodeIds: forcesZoneNodes.map(n => n.id),
}
