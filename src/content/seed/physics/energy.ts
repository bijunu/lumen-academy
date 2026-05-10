import type { SkillNode, Zone } from '@/types/content'

const STORES_GALLERY_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">The eight energy stores</text>

    <!-- Kinetic: moving cyclist -->
    <text x="100" y="70" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Kinetic</text>
    <circle cx="80" cy="120" r="14" />
    <circle cx="120" cy="120" r="14" />
    <line x1="80" y1="120" x2="100" y2="90" />
    <line x1="120" y1="120" x2="100" y2="90" />
    <circle cx="100" cy="80" r="8" fill="currentColor" />
    <line x1="135" y1="100" x2="160" y2="100" />
    <polygon points="153,93 168,100 153,107" fill="currentColor" stroke="none" />
    <text x="100" y="150" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">moving cyclist</text>

    <!-- Gravitational: book on a high shelf -->
    <text x="240" y="70" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Gravitational</text>
    <line x1="200" y1="100" x2="280" y2="100" />
    <rect x="220" y="80" width="40" height="20" fill="currentColor" />
    <line x1="200" y1="160" x2="280" y2="160" />
    <text x="240" y="150" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">book on a shelf</text>

    <!-- Elastic: stretched band -->
    <text x="380" y="70" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Elastic</text>
    <path d="M 340 110 Q 360 90 380 110 T 420 110" />
    <line x1="340" y1="110" x2="320" y2="110" />
    <line x1="420" y1="110" x2="440" y2="110" />
    <text x="380" y="150" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">stretched elastic</text>

    <!-- Thermal: kettle -->
    <text x="520" y="70" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Thermal</text>
    <rect x="500" y="90" width="40" height="40" fill="currentColor" />
    <line x1="540" y1="100" x2="560" y2="90" />
    <line x1="540" y1="115" x2="560" y2="115" />
    <text x="520" y="150" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">hot kettle</text>

    <!-- Chemical: battery -->
    <text x="100" y="200" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Chemical</text>
    <rect x="80" y="220" width="40" height="50" fill="currentColor" />
    <line x1="100" y1="220" x2="100" y2="210" />
    <text x="100" y="250" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="white">+</text>
    <text x="100" y="290" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">torch battery</text>

    <!-- Nuclear: atom symbol -->
    <text x="240" y="200" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Nuclear</text>
    <circle cx="240" cy="245" r="6" fill="currentColor" />
    <ellipse cx="240" cy="245" rx="35" ry="14" />
    <ellipse cx="240" cy="245" rx="35" ry="14" transform="rotate(60 240 245)" />
    <ellipse cx="240" cy="245" rx="35" ry="14" transform="rotate(120 240 245)" />
    <text x="240" y="290" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">uranium nucleus</text>

    <!-- Magnetic: bar magnet -->
    <text x="380" y="200" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Magnetic</text>
    <rect x="345" y="225" width="35" height="35" fill="currentColor" />
    <text x="362" y="248" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="white">N</text>
    <rect x="380" y="225" width="35" height="35" fill="currentColor" />
    <text x="397" y="248" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="white">S</text>
    <text x="380" y="290" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">bar magnet pair</text>

    <!-- Electrostatic: balloon and hair -->
    <text x="520" y="200" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Electrostatic</text>
    <ellipse cx="510" cy="245" rx="16" ry="20" fill="currentColor" />
    <line x1="540" y1="225" x2="555" y2="220" />
    <line x1="540" y1="240" x2="558" y2="238" />
    <line x1="540" y1="255" x2="555" y2="258" />
    <text x="520" y="290" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">charged balloon</text>
  </g>
`

const ROLLER_COASTER_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">The same energy, in two stores</text>
    <!-- Track -->
    <path d="M 60 100 Q 200 100 300 280 Q 400 100 700 280" />
    <!-- Cart at top -->
    <rect x="80" y="80" width="40" height="20" fill="currentColor" />
    <text x="100" y="65" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Top</text>
    <text x="200" y="160" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Mostly gravitational</text>
    <text x="200" y="178" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">store: lifted up high.</text>
    <!-- Cart at bottom -->
    <rect x="280" y="270" width="40" height="20" fill="currentColor" />
    <text x="300" y="320" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Bottom</text>
    <text x="500" y="180" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Mostly kinetic store:</text>
    <text x="500" y="198" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">moving fast at the dip.</text>
  </g>
`

const STORES_VS_TYPES_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="200" y="40" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Old framing (avoid)</text>
    <text x="200" y="80" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">"Kinds of energy":</text>
    <text x="200" y="110" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">heat energy, light energy,</text>
    <text x="200" y="130" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">sound energy, motion energy,</text>
    <text x="200" y="150" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">electrical energy ...</text>
    <text x="200" y="200" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">treats every effect as a</text>
    <text x="200" y="218" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">separate type. Confusing.</text>

    <text x="600" y="40" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">New framing (use)</text>
    <text x="600" y="80" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Eight energy stores:</text>
    <text x="600" y="110" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">kinetic, gravitational, elastic,</text>
    <text x="600" y="130" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">thermal, chemical, nuclear,</text>
    <text x="600" y="150" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">magnetic, electrostatic.</text>
    <text x="600" y="200" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">light, sound, heat are not</text>
    <text x="600" y="218" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">stores; they are transfers.</text>
  </g>
`

export const energyStores: SkillNode = {
  id: 'physics-energy-stores',
  title: 'Energy Stores',
  description:
    'Name the eight energy stores at Year 7: kinetic, gravitational, elastic, thermal, chemical, nuclear, magnetic, and electrostatic. Match each store to an everyday object (a moving cyclist, a book on a shelf, a stretched elastic band, a hot kettle, a torch battery, a uranium nucleus, a bar magnet pair, a charged balloon). Use the modern "stores not types" framing: light, sound, and heat are not stores in their own right; they are ways energy moves from one store to another.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-energy-stores-transfers',
  zoneName: 'Energy Stores and Transfers',
  tier: 'core',
  prerequisites: ['physics-forces-types'],
  curriculum: {
    ks3Objective:
      'Energy as a quantity that can be stored in various ways or transferred between different forms; comparing the starting with the final conditions of a system and describing increases and decreases in the amounts of energy associated with movements, temperatures, chemical and nuclear reactions, by which a system is raised through a height or by which it is stretched.',
    awardingBodies: {
      aqa: '4.1.1.1 Energy stores and systems (GCSE Physics 8463)',
      edexcel: 'Topic 4 Energy, 4.1-4.3 Energy stores and energy transfers (GCSE Physics 1PH0)',
      ocr: 'P1.1 Energy stores and systems; conservation of energy (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'es-scene-gallery',
      title: 'A Gallery of the Eight Energy Stores',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read the name of the store and the everyday object that holds energy in that store.',
      data: {
        viewBox: '0 0 600 400',
        svg: STORES_GALLERY_SVG,
        hotspots: [
          {
            id: 'es-h-kinetic',
            x: 17,
            y: 25,
            label: 'Kinetic store',
            description:
              'Anything that is moving holds energy in its kinetic store. The faster the cyclist moves, and the more mass they have, the bigger this store.',
          },
          {
            id: 'es-h-grav',
            x: 40,
            y: 25,
            label: 'Gravitational store',
            description:
              'Anything that is lifted up against gravity (a book on a high shelf, a child on a climbing frame) holds energy in its gravitational store. Higher up means a bigger store.',
          },
          {
            id: 'es-h-elastic',
            x: 63,
            y: 25,
            label: 'Elastic store',
            description:
              'Anything stretched or squashed (a rubber band, a spring, a drawn bowstring) holds energy in its elastic store. Stretched further means a bigger store.',
          },
          {
            id: 'es-h-thermal',
            x: 87,
            y: 25,
            label: 'Thermal store',
            description:
              'Anything hot (a kettle of just-boiled water, a baked potato) holds energy in its thermal store. Hotter and more mass means a bigger store.',
          },
          {
            id: 'es-h-chemical',
            x: 17,
            y: 60,
            label: 'Chemical store',
            description:
              'Food, fuel, and batteries hold energy in their chemical store. The store is in the bonds between atoms, ready to be released by a reaction.',
          },
          {
            id: 'es-h-nuclear',
            x: 40,
            y: 60,
            label: 'Nuclear store',
            description:
              'The nucleus of an atom holds energy in its nuclear store. A uranium nucleus in a reactor releases this when it splits.',
          },
          {
            id: 'es-h-magnetic',
            x: 63,
            y: 60,
            label: 'Magnetic store',
            description:
              'Two magnets held apart (or held together against their pull) hold energy in their magnetic store. Let go and the magnets snap together, transferring the energy.',
          },
          {
            id: 'es-h-electrostatic',
            x: 87,
            y: 60,
            label: 'Electrostatic store',
            description:
              'Two charged objects held apart (a rubbed balloon and your hair) hold energy in their electrostatic store. Let one move and the energy transfers.',
          },
        ],
      },
    },
    {
      id: 'es-scene-coaster',
      title: 'One Cart, Two Stores',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare the energy stores of the same roller-coaster cart at the top and at the bottom of the dip.',
      data: {
        viewBox: '0 0 800 400',
        svg: ROLLER_COASTER_SVG,
        hotspots: [
          {
            id: 'es-c-top',
            x: 25,
            y: 35,
            label: 'Top: gravitational store full',
            description:
              'At the top of the rise, the cart is lifted high above the ground but moving slowly. Most of the cart’s energy sits in the gravitational store. The kinetic store is small.',
          },
          {
            id: 'es-c-bottom',
            x: 62,
            y: 50,
            label: 'Bottom: kinetic store full',
            description:
              'At the bottom of the dip, the cart is low to the ground but moving fast. Most of the energy now sits in the kinetic store. The gravitational store is small. Energy has shifted from one store to the other.',
          },
        ],
      },
    },
    {
      id: 'es-scene-stores-vs-types',
      title: 'Stores Not Types',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare the old "kinds of energy" framing with the modern "stores" framing used in Year 7 physics.',
      data: {
        viewBox: '0 0 800 400',
        svg: STORES_VS_TYPES_SVG,
        hotspots: [
          {
            id: 'es-svt-old',
            x: 25,
            y: 50,
            label: 'Old framing: "kinds of energy"',
            description:
              'You may have heard about heat energy, light energy, sound energy, motion energy, and electrical energy as different kinds. This framing makes every effect look like a new type, and tangles up where energy is with how it moves.',
          },
          {
            id: 'es-svt-new',
            x: 75,
            y: 50,
            label: 'New framing: eight stores',
            description:
              'In Year 7 physics, energy is held in one of eight stores. Light, sound, and heat are not stores; they are ways energy moves from one store to another. This is the framing you will use at GCSE too.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'es-worked-1',
      title: 'Naming the main store of three everyday UK objects',
      steps: [
        {
          explanation:
            'Pick the first object: a 1.5 V AA cell from a school torch. The cell is at room temperature, sitting still on a table.',
        },
        {
          explanation:
            'The cell is not moving (kinetic store small) and not hot (thermal store small). Inside the cell, atoms are bonded together in a way that can react and release energy. So the main store is the chemical store.',
          maths: 'main store of an AA cell = chemical',
        },
        {
          explanation:
            'Pick the second object: a 2 kg book held still on the top shelf of a Sevenoaks library, 2 m above the floor.',
        },
        {
          explanation:
            'The book is not moving (kinetic store small) and not stretched (elastic store small). It is high above the floor, lifted against gravity. So the main store is the gravitational store.',
          maths: 'main store of a high book = gravitational',
        },
        {
          explanation:
            'Pick the third object: a freshly boiled kettle of water in a Manchester kitchen, sat still on the counter.',
        },
        {
          explanation:
            'The water is not moving as a whole (kinetic store small for the kettle) and is not lifted high (gravitational store small). It is hot. So the main store is the thermal store.',
          maths: 'main store of just-boiled water = thermal',
        },
      ],
    },
    {
      id: 'es-worked-2',
      title: 'A drawn bowstring before the arrow is released',
      steps: [
        {
          explanation:
            'Set the scene. An archer at a club in Tunbridge Wells holds a bow. They draw the bowstring back and hold it still, ready to fire.',
        },
        {
          explanation:
            'List which stores might hold energy. The arrow is not moving (kinetic store small, for now). The arrow is not high above the ground (gravitational store small). The bowstring is stretched (elastic store grows). The bow and arrow are not hot (thermal store small).',
        },
        {
          explanation:
            'Decide the main store. The biggest change since the bow was relaxed is the stretching of the bowstring. So the main store at this moment is the elastic store of the drawn bow.',
          maths: 'main store of a drawn bow = elastic',
        },
        {
          explanation:
            'Predict what happens after release, in store language. Once the archer lets go, the elastic store falls. The arrow speeds up, so the kinetic store grows. The arrow rises a little, so the gravitational store also grows by a small amount.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'es-q1',
      type: 'multiple-choice',
      stem: 'Which of these is one of the eight Year 7 energy stores?',
      tier: 'core',
      options: [
        'Light energy.',
        'Sound energy.',
        'Kinetic store.',
        'Heat energy.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'es-mis-kinds-not-stores',
      hint: 'Light, sound, and heat are ways energy moves between stores; they are not stores themselves.',
    },
    {
      id: 'es-q2',
      type: 'multiple-choice',
      stem: 'A 1.5 V AA cell sits on a table at room temperature. Which store holds most of its energy?',
      tier: 'core',
      options: [
        'Kinetic store, because the electrons are moving inside the cell.',
        'Thermal store, because every object holds thermal energy.',
        'Chemical store, in the bonds between the atoms inside the cell.',
        'Gravitational store, because the cell is sitting on the table.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'es-mis-battery-electrical',
      hint: 'Cells and batteries hold energy in the bonds between atoms, ready for a reaction.',
    },
    {
      id: 'es-q3',
      type: 'multiple-choice',
      stem: 'A book is lifted from the floor and placed on a high shelf. Which store of the book has grown?',
      tier: 'core',
      options: [
        'Kinetic store, because the book had to be moved.',
        'Gravitational store, because the book is now higher up.',
        'Elastic store, because the shelf bends a little under the book.',
        'Thermal store, because lifting heated the book.',
      ],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Lifted up against gravity. Which store grows when an object is raised?',
    },
    {
      id: 'es-q4',
      type: 'numeric-entry',
      stem: 'How many energy stores are named in the modern Year 7 framing (kinetic, gravitational, elastic, thermal, chemical, nuclear, magnetic, and electrostatic)?',
      tier: 'core',
      correctAnswer: 8,
      xpValue: 10,
      hint: 'Count the stores listed in the question stem.',
    },
    {
      id: 'es-q5',
      type: 'multiple-choice',
      stem: 'A wind-up torch is wound up tightly. The torch is sat still in the dark. Which store of the torch has grown most?',
      tier: 'core',
      options: [
        'Kinetic store, because the handle was moving.',
        'Elastic store of the wound-up spring inside.',
        'Chemical store of the cell inside the torch.',
        'Thermal store, because winding made the torch hot.',
      ],
      correctIndex: 1,
      xpValue: 10,
      hint: 'A wind-up torch has no battery. The energy is held in a spring inside.',
    },
    {
      id: 'es-q6',
      type: 'multiple-choice',
      stem: 'A pupil pours just-boiled water from a kettle into a cup. The cup of water sits still on the counter. Which store of the cup of water is the largest?',
      tier: 'core',
      options: [
        'Kinetic store.',
        'Thermal store.',
        'Chemical store.',
        'Magnetic store.',
      ],
      correctIndex: 1,
      xpValue: 10,
      hint: 'The water is hot. Which store grows when something is hot?',
    },
    {
      id: 'es-q7',
      type: 'multiple-choice',
      stem: 'A pupil pulls back the elastic of a catapult and holds it still. Which store has grown the most?',
      tier: 'core',
      options: [
        'Kinetic store, because the elastic was being pulled.',
        'Thermal store, because pulling makes the elastic warm.',
        'Elastic store of the stretched elastic band.',
        'Gravitational store of the stone in the cup.',
      ],
      correctIndex: 2,
      xpValue: 10,
      hint: 'The elastic is now stretched. Which store grows when something is stretched?',
    },
    {
      id: 'es-q8',
      type: 'numeric-entry',
      stem: 'A 200 g banana sits in a Sevenoaks lunchbox. A pupil names two stores that hold a meaningful amount of energy in the banana: the chemical store (sugars in the fruit) and the gravitational store (the banana is on a shelf 1 m above the floor). How many stores did the pupil name?',
      tier: 'core',
      correctAnswer: 2,
      xpValue: 10,
      misconceptionId: 'es-mis-food-no-store',
      hint: 'Count the named stores in the question stem.',
    },
    {
      id: 'es-q9',
      type: 'labelled-image',
      stem: 'Place the names of the eight energy stores onto the gallery diagram. Each marker takes one label.',
      tier: 'confident',
      viewBox: '0 0 600 400',
      svg: STORES_GALLERY_SVG,
      hotspots: [
        { id: 'es-q9-h1', x: 17, y: 25, correctLabel: 'Kinetic store' },
        { id: 'es-q9-h2', x: 40, y: 25, correctLabel: 'Gravitational store' },
        { id: 'es-q9-h3', x: 63, y: 25, correctLabel: 'Elastic store' },
        { id: 'es-q9-h4', x: 87, y: 25, correctLabel: 'Thermal store' },
        { id: 'es-q9-h5', x: 17, y: 60, correctLabel: 'Chemical store' },
        { id: 'es-q9-h6', x: 40, y: 60, correctLabel: 'Nuclear store' },
        { id: 'es-q9-h7', x: 63, y: 60, correctLabel: 'Magnetic store' },
        { id: 'es-q9-h8', x: 87, y: 60, correctLabel: 'Electrostatic store' },
      ],
      labels: [
        'Kinetic store',
        'Gravitational store',
        'Elastic store',
        'Thermal store',
        'Chemical store',
        'Nuclear store',
        'Magnetic store',
        'Electrostatic store',
        'Light energy',
        'Sound energy',
        'Heat energy',
      ],
      xpValue: 15,
      hint: 'Light, sound, and heat are not stores; they are ways energy moves. Skip those labels.',
    },
    {
      id: 'es-q10',
      type: 'spot-misconception',
      stem: 'Aisha says, "Heat energy and light energy are two of the main types of energy a candle holds. The wax holds heat and light." Is the method sound?',
      tier: 'confident',
      statements: [
        {
          text: 'Aisha is right. Heat energy and light energy are kinds of energy a candle holds, in among the others.',
          isMisconception: true,
        },
        {
          text: 'Aisha is not right. The wax holds energy in its chemical store. Heat and light are not stores; they are ways the wax transfers energy out as it burns.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'es-mis-kinds-not-stores',
    },
    {
      id: 'es-q11',
      type: 'multiple-choice',
      stem: 'A pupil holds a bar magnet near a steel paperclip but does not let them touch. Which store grows in the magnet-and-paperclip system as the gap is held open?',
      tier: 'confident',
      options: [
        'Kinetic store, because the paperclip wants to move.',
        'Magnetic store, between the magnet and the paperclip held apart.',
        'Electrostatic store, because the magnet is charged.',
        'Thermal store, because magnets are warm.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'es-mis-magnetic-vs-electrostatic',
      hint: 'Magnets work because of magnetism, not because of charge. Which store sits between two magnets held apart?',
    },
    {
      id: 'es-q12',
      type: 'multiple-choice',
      stem: 'A nuclear power station in Sizewell uses uranium fuel rods. A coal power station in Yorkshire burns coal. Which sentence best matches the main store falling in each case?',
      tier: 'challenge',
      options: [
        'Both stations use the chemical store; only the fuel name changes.',
        'The nuclear station uses the chemical store of uranium; the coal station uses the chemical store of coal.',
        'The nuclear station uses the nuclear store (the nuclei of uranium atoms); the coal station uses the chemical store (bonds between atoms in the coal).',
        'Both stations use the nuclear store, because all power stations use nuclear reactions.',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'es-mis-nuclear-as-chemical',
      hint: 'A nuclear change happens inside the nucleus. A chemical change happens between atoms in the bonds. Which fits which fuel?',
    },
    {
      id: 'es-q13',
      type: 'drag-order',
      stem: 'A pupil is asked to find the main store of a moving cyclist on a flat road. Place the four steps in the right order.',
      tier: 'confident',
      items: [
        'Pick the object: the moving cyclist on a flat road.',
        'List what has changed since the cyclist was at rest.',
        'Match each change to one of the eight stores.',
        'Name the main store: the kinetic store has grown most.',
      ],
      correctOrder: [0, 1, 2, 3],
      xpValue: 15,
      hint: 'Pick the object, then list what changed, then match changes to stores, then name the main one.',
    },
    {
      id: 'es-q14',
      type: 'numeric-entry',
      stem: 'A drawn bow holds 12 J in its elastic store. The archer lets go and the arrow leaves. By how many joules does the elastic store of the bow fall, if the bow returns to its relaxed shape?',
      tier: 'confident',
      correctAnswer: 12,
      unit: 'J',
      xpValue: 15,
      hint: 'Once the bow is back to its relaxed shape, its elastic store is back to zero.',
    },
    {
      id: 'es-q15',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is naming the energy store of a stretched spring in a school lab.',
      tier: 'confident',
      steps: [
        'Pick the object: the spring on the bench, stretched between two clamps.',
        'List what has changed since the spring was relaxed: it is now longer.',
        null,
        'Match this change to one of the eight stores.',
        'Name the main store of the stretched spring: the elastic store.',
      ],
      missingStepIndex: 2,
      correctStep:
        'A stretched spring is squashed or pulled out of shape, the same as a rubber band or a drawn bow.',
      xpValue: 15,
    },
    {
      id: 'es-q16',
      type: 'multiple-choice',
      stem: 'Two pupils argue about a mug of just-boiled tea sitting on a tray on a high kitchen shelf. Which sentence is the most accurate?',
      tier: 'confident',
      options: [
        'It only has a thermal store, because it is hot.',
        'It only has a gravitational store, because it is high up.',
        'It has both a thermal store (hot) and a gravitational store (lifted up). The tea also still has a small chemical store.',
        'It only has a kinetic store, because the steam is moving.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'es-mis-only-one-store',
      hint: 'An object can hold energy in more than one store at the same time.',
    },
    {
      id: 'es-q17',
      type: 'spot-misconception',
      stem: 'Theo says, "Sound energy is one of the main stores; that is why a loudspeaker holds it." What is the most accurate way to describe sound in the stores framing?',
      tier: 'confident',
      statements: [
        {
          text: 'Theo is right. Sound energy is one of the eight stores; loudspeakers store it ready to release.',
          isMisconception: true,
        },
        {
          text: 'Theo is not right. Sound is not a store; it is one of the four ways energy is transferred (by radiation). A loudspeaker is fed by an electrical transfer, not a sound store.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'es-mis-kinds-not-stores',
    },
    {
      id: 'es-q18',
      type: 'numeric-entry',
      stem: 'A pupil compares two cups of water in a Manchester kitchen. Cup A holds 200 g of water at 80 °C and contains a thermal store of 50 400 J. Cup B holds 200 g of water at 20 °C and contains a thermal store of 0 J above the same baseline. How many more joules does Cup A hold in its thermal store than Cup B?',
      tier: 'challenge',
      correctAnswer: 50400,
      unit: 'J',
      xpValue: 20,
      misconceptionId: 'es-mis-thermal-needs-fire',
      hint: 'Subtract Cup B from Cup A.',
    },
    {
      id: 'es-q19',
      type: 'numeric-entry',
      stem: 'Anya stretches a long elastic band by 5 cm. Her band now holds an elastic store of 2 J. Theo stretches the same band by 10 cm and his band now holds 8 J in its elastic store. How many more joules does Theo hold in his elastic store than Anya?',
      tier: 'challenge',
      correctAnswer: 6,
      unit: 'J',
      xpValue: 20,
      hint: 'Subtract Anya from Theo.',
    },
    {
      id: 'es-q20',
      type: 'free-text',
      stem: 'A wind-up torch is wound up by a pupil in a tent in the Lake District. The torch sits still on the tent floor with the spring fully wound and the switch off. In two or three sentences, name the energy store that has grown most in the torch and explain in store language what would happen to that store if the switch was then turned on.',
      tier: 'challenge',
      sampleAnswer:
        'The store that has grown most is the elastic store of the wound-up spring inside the torch. When the switch is turned on, the elastic store of the spring would fall as the spring unwinds. Energy would transfer to the thermal store of the bulb (the bulb gets warm) and the surroundings would receive a radiation transfer of light from the bulb.',
      keywords: ['elastic store', 'spring', 'thermal store', 'radiation', 'transfer'],
      xpValue: 20,
    },
    {
      id: 'es-q21',
      type: 'multiple-choice',
      stem: 'A pupil holds a 0.5 kg apple still, 1.5 m above the kitchen floor in Sevenoaks. The apple is at room temperature. Which list of stores best matches the apple at this moment?',
      tier: 'challenge',
      options: [
        'Only kinetic store.',
        'Gravitational store (lifted up) plus a small chemical store of the sugars in the apple. Other stores are very small.',
        'Only chemical store.',
        'Only thermal store, because the apple is at room temperature.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'es-mis-only-one-store',
      hint: 'List every store the apple holds. Include the chemical store of the food.',
    },
  ],
  misconceptions: [
    // Source: IOPSpark "Energy: stores and pathways" guidance, used by AQA/Edexcel/OCR for KS3 Energy. Pupils carry forward primary-school "kinds of energy" labels (heat, light, sound, electrical, motion) and treat them as stores.
    {
      id: 'es-mis-kinds-not-stores',
      description:
        'Treating "heat energy", "light energy", "sound energy", or "electrical energy" as stores in their own right, alongside the eight true stores.',
      triggerAnswer: 'kinds-not-stores',
      correction:
        'Heat, light, sound, and electrical are not stores. They are ways energy moves between stores: heating, radiation (light and sound), and electrical transfer. The eight Year 7 stores are kinetic, gravitational, elastic, thermal, chemical, nuclear, magnetic, and electrostatic.',
      reExplanation:
        'Think of a candle. The wax holds energy in its chemical store. As the candle burns, energy leaves that store: some goes to the thermal store of the air around it (a heating transfer), and some leaves as light (a radiation transfer). The candle does not "store" heat or light. It stores chemical energy and lets it leave through those pathways.',
    },
    // Source: CGP KS3 Physics Study Guide, Energy stores section, common misunderstandings list. Pupils call a battery's store "electrical" rather than chemical.
    {
      id: 'es-mis-battery-electrical',
      description:
        'Calling the energy held in a cell or battery the "electrical store", because the cell drives a current.',
      triggerAnswer: 'battery-electrical',
      correction:
        'A cell or battery holds energy in its chemical store, in the bonds between atoms inside it. Connecting it to a circuit transfers that energy electrically; the store itself is chemical.',
      reExplanation:
        'Open up an AA cell and you would find chemicals inside, not a pool of "electricity". When the cell is connected to a torch bulb, a chemical reaction inside the cell pushes electrons through the wire. The chemical store falls; the thermal store of the bulb grows. There is an electrical transfer between the two, but no "electrical store" anywhere.',
    },
    // Source: OCR GCSE Physics examiner report June 2022, J259/02, candidates confuse magnetic and electrostatic stores in non-contact-force questions.
    {
      id: 'es-mis-magnetic-vs-electrostatic',
      description:
        'Confusing the magnetic store of two magnets held apart with the electrostatic store of two charged objects held apart.',
      triggerAnswer: 'magnetic-vs-electrostatic',
      correction:
        'Magnets work because of magnetism, which only acts on certain metals like iron and steel. Charged objects (a rubbed balloon) work because of static charge. They are different stores.',
      reExplanation:
        'Hold a bar magnet near a steel paperclip without touching: the magnetic store between them grows. Now rub a balloon on your hair and hold it near a tap of running water: the electrostatic store between the balloon and the water grows. Try the balloon on a steel paperclip; it will not lift it because the balloon is not magnetic.',
    },
    // Source: AQA GCSE Physics examiner report June 2023, Paper 1F, candidates label "nuclear energy" as if it were the chemical store of uranium.
    {
      id: 'es-mis-nuclear-as-chemical',
      description:
        'Labelling the energy store of nuclear fuel (uranium rods, the Sun) as a chemical store, because both involve atoms.',
      triggerAnswer: 'nuclear-as-chemical',
      correction:
        'A chemical store is held in the bonds between atoms. A nuclear store is held inside the nucleus of one atom. Nuclear fuel uses changes to the nucleus, not chemistry between atoms.',
      reExplanation:
        'Burning coal is a chemical change: bonds between atoms re-arrange and the chemical store falls. Splitting uranium in a reactor is a nuclear change: the nucleus itself splits and the nuclear store falls. The nuclear store of even a tiny piece of uranium is far larger than the chemical store of an equal mass of coal.',
    },
    // Source: CGP KS3 Physics Study Guide, Energy stores common-mistake box. Pupils insist an object holds energy in only one store at a time.
    {
      id: 'es-mis-only-one-store',
      description:
        'Believing an object can only have one energy store at a time, so a hot mug on a high shelf has either thermal or gravitational, not both.',
      triggerAnswer: 'only-one-store',
      correction:
        'Many objects hold energy in two or more stores at the same time. List all of them, then say which one is the largest if asked.',
      reExplanation:
        'A mug of just-boiled tea on a high shelf has a thermal store (it is hot), a gravitational store (it is high up), and a small chemical store (sugars in the tea). A roller-coaster cart at the top of a slow rise has both a gravitational store and a small kinetic store. Splitting the world into single-store objects gives the wrong answer about what changes when the cart speeds up or the tea cools.',
    },
    // Source: IOPSpark "Energy in stores" classroom guidance. Pupils believe a thermal store only exists if there is a flame or heater present.
    {
      id: 'es-mis-thermal-needs-fire',
      description:
        'Believing only hot things like fires and heaters have a thermal store, so a cup of room-temperature water has none.',
      triggerAnswer: 'thermal-needs-fire',
      correction:
        'Every object above absolute zero has a thermal store. The hotter the object, and the more mass it has, the larger the store. Room-temperature water still holds a thermal store; an ice cube does too.',
      reExplanation:
        'Pour cold water onto an even colder ice tray and the ice melts: energy moved out of the thermal store of the water into the thermal store of the ice. If room-temperature water had no thermal store, the ice could not melt without a flame nearby. A larger thermal store does not need a flame; it just needs to be warmer than the surroundings.',
    },
    // Source: AQA GCSE Physics examiner report June 2022, Paper 1F, candidates omit the chemical store of food in dietary energy questions.
    {
      id: 'es-mis-food-no-store',
      description:
        'Forgetting that food holds a chemical store, so saying that food gives the body "energy" without naming the store it sits in.',
      triggerAnswer: 'food-no-store',
      correction:
        'Food holds energy in its chemical store, in the bonds between atoms in the sugars, fats, and proteins. The body uses this store to power movement and to keep warm.',
      reExplanation:
        'A 100 g banana holds energy in its chemical store. Eating it lets the body break the bonds and transfer that energy. Some goes to the thermal store of the body (keeping warm). Some goes to the kinetic store when the body moves. The chemical store of the banana falls; other stores grow.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const energyZoneNodes = [energyStores]

export const energyZone: Zone = {
  id: 'physics-energy-stores-transfers',
  name: 'Energy Stores and Transfers',
  realm: 'mechanica',
  nodeIds: energyZoneNodes.map(n => n.id),
}
