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

const TRANSFERS_GALLERY_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Four ways energy moves between stores</text>

    <!-- Mechanical: hand pushing a box -->
    <text x="100" y="80" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Mechanical</text>
    <text x="100" y="98" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">force x distance</text>
    <rect x="80" y="120" width="60" height="40" fill="currentColor" />
    <line x1="40" y1="140" x2="75" y2="140" />
    <polygon points="67,133 80,140 67,147" fill="currentColor" stroke="none" />
    <text x="100" y="180" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">push a box</text>

    <!-- Electrical: cell driving a bulb -->
    <text x="300" y="80" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Electrical</text>
    <text x="300" y="98" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">current x voltage</text>
    <rect x="260" y="120" width="20" height="35" fill="currentColor" />
    <line x1="260" y1="138" x2="240" y2="138" />
    <line x1="280" y1="138" x2="320" y2="138" />
    <circle cx="335" cy="138" r="14" />
    <line x1="349" y1="138" x2="360" y2="138" />
    <text x="300" y="180" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">torch lights</text>

    <!-- Heating: flame under a kettle -->
    <text x="500" y="80" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Heating</text>
    <text x="500" y="98" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">temp difference</text>
    <rect x="470" y="120" width="60" height="35" fill="currentColor" />
    <path d="M 485 165 Q 490 175 495 165 Q 500 175 505 165 Q 510 175 515 165" />
    <text x="500" y="195" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">flame heats kettle</text>

    <!-- Radiation: sun and panel -->
    <text x="700" y="80" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Radiation</text>
    <text x="700" y="98" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">light, sound, infrared</text>
    <circle cx="680" cy="130" r="14" fill="currentColor" />
    <line x1="694" y1="130" x2="715" y2="130" />
    <line x1="690" y1="120" x2="710" y2="115" />
    <line x1="690" y1="140" x2="710" y2="145" />
    <text x="700" y="180" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">sun warms panel</text>

    <!-- Chains row -->
    <text x="400" y="240" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Each transfer moves energy from one store to another</text>
    <text x="100" y="280" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">chemical (food)</text>
    <text x="100" y="298" text-anchor="middle" font-size="14" stroke="none" fill="currentColor">→</text>
    <text x="100" y="318" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">kinetic (cyclist)</text>
    <text x="300" y="280" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">chemical (cell)</text>
    <text x="300" y="298" text-anchor="middle" font-size="14" stroke="none" fill="currentColor">→</text>
    <text x="300" y="318" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">thermal (bulb)</text>
    <text x="500" y="280" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">thermal (flame)</text>
    <text x="500" y="298" text-anchor="middle" font-size="14" stroke="none" fill="currentColor">→</text>
    <text x="500" y="318" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">thermal (water)</text>
    <text x="700" y="280" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">thermal (sun)</text>
    <text x="700" y="298" text-anchor="middle" font-size="14" stroke="none" fill="currentColor">→</text>
    <text x="700" y="318" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">thermal (panel)</text>
  </g>
`

const FALLING_BRICK_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Falling brick: gravitational store falls, others grow</text>
    <!-- Brick at top -->
    <text x="120" y="80" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Step 1: held high</text>
    <rect x="100" y="100" width="40" height="20" fill="currentColor" />
    <line x1="120" y1="120" x2="120" y2="320" stroke-dasharray="4 4" />
    <text x="160" y="220" font-size="12" stroke="none" fill="currentColor">gravitational store full</text>
    <text x="160" y="238" font-size="12" stroke="none" fill="currentColor">kinetic store small</text>

    <!-- Brick mid-fall -->
    <text x="400" y="80" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Step 2: half-way down</text>
    <rect x="380" y="200" width="40" height="20" fill="currentColor" />
    <line x1="400" y1="120" x2="400" y2="200" stroke-dasharray="4 4" />
    <text x="440" y="180" font-size="12" stroke="none" fill="currentColor">grav store half-full</text>
    <text x="440" y="198" font-size="12" stroke="none" fill="currentColor">kinetic store growing</text>
    <line x1="400" y1="225" x2="400" y2="260" />
    <polygon points="392,250 400,265 408,250" fill="currentColor" stroke="none" />

    <!-- Brick at ground -->
    <text x="660" y="80" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Step 3: just hit the ground</text>
    <rect x="640" y="300" width="40" height="20" fill="currentColor" />
    <line x1="600" y1="320" x2="720" y2="320" />
    <text x="710" y="290" font-size="12" stroke="none" fill="currentColor">kinetic store</text>
    <text x="710" y="308" font-size="12" stroke="none" fill="currentColor">→ thermal store</text>
    <text x="710" y="326" font-size="12" stroke="none" fill="currentColor">+ sound (radiation)</text>
  </g>
`

const CAR_TRANSFER_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">A car moving on the M25</text>
    <!-- Tank label -->
    <text x="120" y="100" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Petrol tank</text>
    <rect x="80" y="120" width="80" height="60" fill="currentColor" />
    <text x="120" y="200" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">chemical store</text>
    <!-- Arrow to engine -->
    <line x1="170" y1="150" x2="240" y2="150" />
    <polygon points="232,143 245,150 232,157" fill="currentColor" stroke="none" />
    <text x="205" y="140" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">mechanical</text>
    <!-- Wheels -->
    <text x="320" y="100" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Wheels and car</text>
    <rect x="270" y="120" width="100" height="60" fill="currentColor" />
    <text x="320" y="200" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">kinetic store grows</text>
    <!-- Arrow out to surroundings -->
    <line x1="380" y1="150" x2="450" y2="150" />
    <polygon points="442,143 455,150 442,157" fill="currentColor" stroke="none" />
    <text x="415" y="140" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">heating</text>
    <!-- Surroundings -->
    <text x="520" y="100" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Tyres and road</text>
    <rect x="475" y="120" width="90" height="60" />
    <text x="520" y="200" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">thermal store of</text>
    <text x="520" y="218" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">surroundings grows</text>
    <text x="400" y="290" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Total energy is the same; it has just shifted between stores</text>
  </g>
`

export const energyTransfers: SkillNode = {
  id: 'physics-energy-transfers',
  title: 'Energy Transfers',
  description:
    'Name the four pathways energy uses to move between stores: mechanically (force times distance, like a hand pushing a box), electrically (current times voltage, like a cell driving a torch bulb), heating (a temperature difference between two objects in contact), and radiation (light, sound, and infrared travelling out from a source). Pair each transfer with a store-to-store change: chemical (in food) to kinetic (in a moving cyclist), gravitational (in a high brick) to kinetic and thermal (in the brick and the ground after the fall).',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-energy-stores-transfers',
  zoneName: 'Energy Stores and Transfers',
  tier: 'confident',
  prerequisites: ['physics-energy-stores'],
  curriculum: {
    ks3Objective:
      'Energy as a quantity that can be transferred between objects or between stores by mechanical work, electrical work, heating, or radiation; using physical processes and mechanisms, rather than energy itself, to explain the intermediate steps that bring about such changes.',
    awardingBodies: {
      aqa: '4.1.1.2 Changes in energy; 4.1.2 Conservation and dissipation of energy (GCSE Physics 8463)',
      edexcel: 'Topic 4 Energy, 4.4-4.6 Energy transfers and pathways (GCSE Physics 1PH0)',
      ocr: 'P1.1 Conservation of energy; pathways for energy transfer (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'et-scene-pathways',
      title: 'The Four Transfer Pathways',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read the name of one pathway and the everyday situation in which it moves energy between stores.',
      data: {
        viewBox: '0 0 800 400',
        svg: TRANSFERS_GALLERY_SVG,
        hotspots: [
          {
            id: 'et-h-mech',
            x: 13,
            y: 25,
            label: 'Mechanical (force x distance)',
            description:
              'A hand or a rope pushes or pulls an object through a distance. Each metre the object moves under the force, more energy is transferred mechanically.',
          },
          {
            id: 'et-h-elec',
            x: 38,
            y: 25,
            label: 'Electrical (current x voltage)',
            description:
              'A cell drives electrons through a wire. Each second a current flows, more energy is transferred electrically into a bulb, motor, or heater.',
          },
          {
            id: 'et-h-heat',
            x: 63,
            y: 25,
            label: 'Heating (temperature difference)',
            description:
              'Two objects in contact at different temperatures: energy moves from the hotter one to the cooler one until they are at the same temperature. A flame heats a kettle this way.',
          },
          {
            id: 'et-h-rad',
            x: 87,
            y: 25,
            label: 'Radiation (light, sound, infrared)',
            description:
              'A source sends out light, sound, or invisible infrared. The energy travels through the gap and is absorbed by something else, growing its store. The Sun warms a solar panel by radiation.',
          },
          {
            id: 'et-h-chain1',
            x: 13,
            y: 75,
            label: 'chemical → kinetic',
            description:
              'A cyclist eats a banana (chemical store full), then pedals (mechanical transfer through the legs), and the bicycle speeds up (kinetic store grows).',
          },
          {
            id: 'et-h-chain2',
            x: 38,
            y: 75,
            label: 'chemical → thermal',
            description:
              'A torch cell drives the bulb (electrical transfer through the wires), and the bulb gets warm (thermal store grows). Light leaves the bulb as a radiation transfer.',
          },
        ],
      },
    },
    {
      id: 'et-scene-brick',
      title: 'A Falling Brick: Stores and Pathways',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to follow how a falling brick shifts energy from its gravitational store to its kinetic store and then to the thermal store of the ground.',
      data: {
        viewBox: '0 0 800 400',
        svg: FALLING_BRICK_SVG,
        hotspots: [
          {
            id: 'et-b-1',
            x: 22,
            y: 60,
            label: 'Step 1: brick held high',
            description:
              'Gravitational store full (because the brick is high above the ground). Kinetic store small (because the brick is not moving yet).',
          },
          {
            id: 'et-b-2',
            x: 55,
            y: 60,
            label: 'Step 2: brick half-way down',
            description:
              'Gravitational store has fallen by about half. Kinetic store has grown by about the same amount (energy has shifted from one store to the other). The pathway is mechanical, through the force of gravity over the distance fallen.',
          },
          {
            id: 'et-b-3',
            x: 85,
            y: 60,
            label: 'Step 3: brick hits the ground',
            description:
              'Kinetic store falls suddenly to zero. The thermal store of the ground (and the brick) grows, by heating, and a small radiation transfer leaves as sound. Energy has gone from gravitational to kinetic to thermal in three steps.',
          },
        ],
      },
    },
    {
      id: 'et-scene-car',
      title: 'A Moving Car: Chemical to Kinetic, with Heat as Waste',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read how a car moves energy from the chemical store of its petrol to the kinetic store of the wheels, and to the thermal store of the surroundings.',
      data: {
        viewBox: '0 0 800 400',
        svg: CAR_TRANSFER_SVG,
        hotspots: [
          {
            id: 'et-c-tank',
            x: 15,
            y: 50,
            label: 'Chemical store of the petrol',
            description:
              'The petrol in the tank holds a large chemical store. The engine breaks bonds in the petrol when it burns, and the chemical store falls.',
          },
          {
            id: 'et-c-mech',
            x: 26,
            y: 38,
            label: 'Mechanical transfer to the wheels',
            description:
              'The engine pushes the wheels through a force over a distance. This is a mechanical transfer. The kinetic store of the car grows.',
          },
          {
            id: 'et-c-wheels',
            x: 40,
            y: 50,
            label: 'Kinetic store of the car',
            description:
              'The whole car moves faster. Its kinetic store grows. This is what the driver wants.',
          },
          {
            id: 'et-c-heat',
            x: 52,
            y: 38,
            label: 'Heating transfer to the surroundings',
            description:
              'Friction in the engine and tyres is hotter than the air. Energy moves out by heating. This is wasted from the car’s point of view, but the total is conserved.',
          },
          {
            id: 'et-c-surroundings',
            x: 65,
            y: 50,
            label: 'Thermal store of the road and air',
            description:
              'The road, tyres, and air gain a thermal store. Total energy is the same as before; it has just shifted between stores.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'et-worked-1',
      title: 'A torch bulb lit by a battery: chemical to thermal, with radiation',
      steps: [
        {
          explanation:
            'Pick the system. A 1.5 V AA cell sits inside a torch in a Sevenoaks shed. The switch is on. The bulb is glowing.',
        },
        {
          explanation:
            'Name the starting store. The cell holds energy in its chemical store, in the bonds inside it.',
          maths: 'starting store = chemical (in the cell)',
        },
        {
          explanation:
            'Name the pathway. Inside the wires, electrons flow as a current driven by the cell’s voltage. This is an electrical transfer.',
          maths: 'pathway 1 = electrical',
        },
        {
          explanation:
            'Name the second store. The bulb’s filament gets hot. The thermal store of the bulb grows.',
          maths: 'second store = thermal (in the bulb)',
        },
        {
          explanation:
            'Name the second pathway. Light leaves the bulb in all directions, travelling out through the gap to anything around. This is a radiation transfer.',
          maths: 'pathway 2 = radiation (light)',
        },
        {
          explanation:
            'State the change. The chemical store of the cell falls. The thermal store of the bulb grows, and a radiation transfer takes some energy out as light. The total energy is the same; it has just shifted to other stores or moved to the surroundings.',
        },
      ],
    },
    {
      id: 'et-worked-2',
      title: 'A cyclist on a flat A-road: chemical to kinetic, with friction as heating',
      steps: [
        {
          explanation:
            'Pick the system. A cyclist on a flat A-road in the Lake District has just eaten a banana. They start to pedal from rest and speed up.',
        },
        {
          explanation:
            'Name the starting store. The chemical store of the food (and of the body’s reserves) is full.',
          maths: 'starting store = chemical (in the body)',
        },
        {
          explanation:
            'Name the pathway from food to kinetic. Each push of the pedals is a force times distance. This is a mechanical transfer.',
          maths: 'pathway 1 = mechanical',
        },
        {
          explanation:
            'Name the second store. The bike and rider speed up. Their kinetic store grows.',
          maths: 'second store = kinetic (of bike and rider)',
        },
        {
          explanation:
            'Name the wasted pathway. Friction in the chain and tyres makes them hotter than the air. Energy leaves to the air by heating. The cyclist’s body also warms up.',
          maths: 'wasted pathway = heating (to the surroundings)',
        },
        {
          explanation:
            'State the change. The chemical store falls. The kinetic store grows. A smaller share leaves as a heating transfer to the surroundings. Total energy is conserved.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'et-q1',
      type: 'multiple-choice',
      stem: 'Which list names the four pathways through which energy moves between stores in Year 7 physics?',
      tier: 'core',
      options: [
        'Mechanical, electrical, heating, radiation.',
        'Heat, light, sound, electricity.',
        'Push, pull, fire, light.',
        'Kinetic, gravitational, chemical, thermal.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'et-mis-only-two-pathways',
      hint: 'Stores are where energy is held. Pathways are how it moves. Pick the four ways energy moves.',
    },
    {
      id: 'et-q2',
      type: 'multiple-choice',
      stem: 'A pupil pushes a trolley across the floor of a Manchester supermarket. Which pathway moves energy from the pupil to the trolley?',
      tier: 'core',
      options: [
        'Heating, because pushing makes the trolley hot.',
        'Electrical, because the pupil is charged.',
        'Mechanical (force over a distance).',
        'Radiation, because light reflects off the trolley.',
      ],
      correctIndex: 2,
      xpValue: 10,
      hint: 'A force acts on the trolley, and the trolley moves through a distance. Which pathway is that?',
    },
    {
      id: 'et-q3',
      type: 'multiple-choice',
      stem: 'A torch is switched on. Energy moves from the chemical store of the cell to the thermal store of the bulb. Which pathway carries it?',
      tier: 'confident',
      options: [
        'Mechanical, because the wires bend a little.',
        'Electrical (current driven by voltage).',
        'Heating, because the cell is warm.',
        'Radiation, because the cell glows.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'et-mis-store-vs-transfer',
      hint: 'A current flows through the wires, driven by the voltage of the cell. Which pathway is that?',
    },
    {
      id: 'et-q4',
      type: 'multiple-choice',
      stem: 'A radiator under a window heats the air in a chilly Sevenoaks bedroom. Which pathway moves energy from the radiator to the air?',
      tier: 'core',
      options: [
        'Heating (the radiator is hotter than the air).',
        'Electrical, because radiators are wired up.',
        'Mechanical, because the air pushes back on the radiator.',
        'Radiation, because the radiator gives off light.',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'Two objects in contact at different temperatures: which pathway is that?',
    },
    {
      id: 'et-q5',
      type: 'multiple-choice',
      stem: 'On a sunny morning in Brighton, a solar panel on a roof gets warm. The Sun is far above the panel; nothing in between is warmer than the panel. Which pathway moves the energy from the Sun to the panel?',
      tier: 'core',
      options: [
        'Heating, because the air in between is warm.',
        'Mechanical, because the Sun pushes light at the panel.',
        'Electrical, because solar panels make electricity.',
        'Radiation (the Sun sends out light and infrared).',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'et-mis-light-as-store',
      hint: 'Light from the Sun is a transfer, not a store. Which of the four pathways is light part of?',
    },
    {
      id: 'et-q6',
      type: 'numeric-entry',
      stem: 'How many transfer pathways are named in the Year 7 framing (mechanical, electrical, heating, radiation)?',
      tier: 'core',
      correctAnswer: 4,
      xpValue: 10,
      misconceptionId: 'et-mis-only-two-pathways',
      hint: 'Count the pathways listed in the question stem.',
    },
    {
      id: 'et-q7',
      type: 'numeric-entry',
      stem: 'A toaster takes 60 000 J of energy from the mains by an electrical transfer over one minute. By how many joules does the chemical store of the bread that is toasting change in that minute, if all the energy goes into the bread by heating? Note: at Year 7 this is a thought experiment to show conservation.',
      tier: 'core',
      correctAnswer: 0,
      unit: 'J',
      xpValue: 10,
      hint: 'Toasting is a heating transfer to the bread. The chemical store of the bread is not what is growing; the thermal store is. So the chemical store change is zero.',
    },
    {
      id: 'et-q8',
      type: 'multiple-choice',
      stem: 'A pupil drops a 1 kg brick onto a soft mat from a height of 2 m. As the brick falls, which two stores change first?',
      tier: 'core',
      options: [
        'Gravitational store falls; kinetic store grows.',
        'Chemical store falls; thermal store grows.',
        'Elastic store falls; magnetic store grows.',
        'Nuclear store falls; electrical store grows.',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'The brick was high; now it is moving. Which store fell, and which grew?',
    },
    {
      id: 'et-q9',
      type: 'labelled-image',
      stem: 'Place the four transfer pathway names onto the gallery diagram. Each marker takes one label.',
      tier: 'confident',
      viewBox: '0 0 800 400',
      svg: TRANSFERS_GALLERY_SVG,
      hotspots: [
        {
          id: 'et-q9-h1',
          x: 13,
          y: 25,
          correctLabel: 'Mechanical (force x distance)',
        },
        {
          id: 'et-q9-h2',
          x: 38,
          y: 25,
          correctLabel: 'Electrical (current x voltage)',
        },
        {
          id: 'et-q9-h3',
          x: 63,
          y: 25,
          correctLabel: 'Heating (temperature difference)',
        },
        {
          id: 'et-q9-h4',
          x: 87,
          y: 25,
          correctLabel: 'Radiation (light, sound, infrared)',
        },
      ],
      labels: [
        'Mechanical (force x distance)',
        'Electrical (current x voltage)',
        'Heating (temperature difference)',
        'Radiation (light, sound, infrared)',
        'Kinetic store',
        'Chemical store',
      ],
      xpValue: 15,
      hint: 'Match each picture to the correct pathway. Stores are not pathways; skip those labels.',
    },
    {
      id: 'et-q10',
      type: 'spot-misconception',
      stem: 'Lila says, "When the kettle boils, the chemical store of the water grows because the water is being filled with heat energy." What is the most accurate way to describe what is happening?',
      tier: 'confident',
      statements: [
        {
          text: 'Lila is right. The water gains a chemical store and heat energy is one of the stores that grows.',
          isMisconception: true,
        },
        {
          text: 'Lila is not right. The thermal store of the water grows, by a heating transfer from the kettle’s element. "Heat energy" is not a store; heating is the pathway.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'et-mis-store-vs-transfer',
    },
    {
      id: 'et-q11',
      type: 'spot-misconception',
      stem: 'Aisha says, "A loudspeaker holds sound energy inside it; that is one of the stores it carries, alongside the chemical store of its battery." What is the most accurate way to describe the sound from a speaker?',
      tier: 'challenge',
      statements: [
        {
          text: 'Aisha is right. Sound energy is one of the eight stores; the speaker holds it inside.',
          isMisconception: true,
        },
        {
          text: 'Aisha is not right. Sound is not a store; it is a radiation transfer leaving the speaker. The speaker is fed by an electrical transfer; the cone’s mechanical movement pushes the air, sending sound out as radiation. The thermal store of the air around the speaker also grows a little.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'et-mis-sound-as-store',
    },
    {
      id: 'et-q12',
      type: 'drag-order',
      stem: 'A pupil is asked to follow the energy in a moving car from the petrol tank to the surroundings. Place the four steps in the right order.',
      tier: 'confident',
      items: [
        'Chemical store of the petrol falls as the engine burns it.',
        'Mechanical transfer turns the wheels.',
        'Kinetic store of the car grows.',
        'Heating transfer warms the tyres, road, and air.',
      ],
      correctOrder: [0, 1, 2, 3],
      xpValue: 15,
      hint: 'Start with the store that falls, then name the pathway out, then the store that grows, then the wasted pathway.',
    },
    {
      id: 'et-q13',
      type: 'multiple-choice',
      stem: 'A pupil dips a cold spoon into a hot mug of tea and waits one minute. Which sentence describes the heating transfer best?',
      tier: 'confident',
      options: [
        'Energy moves from the cold spoon to the hot tea, because the spoon needs warming.',
        'Energy moves from the hot tea to the cold spoon, because heating goes from hotter to cooler.',
        'No energy moves, because they are in contact.',
        'Energy moves both ways equally, so neither object changes.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'et-mis-heating-direction',
      hint: 'Heating moves energy from the hotter object to the cooler one, never the other way.',
    },
    {
      id: 'et-q14',
      type: 'numeric-entry',
      stem: 'A wind-up torch holds 30 J in its elastic store. The torch is switched on and runs until the spring is relaxed. After it has run, the elastic store of the spring holds 0 J. By how many joules has the elastic store fallen?',
      tier: 'core',
      correctAnswer: 30,
      unit: 'J',
      xpValue: 10,
      hint: 'Subtract the final value from the starting value.',
    },
    {
      id: 'et-q15',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is following the energy from a sunbeam onto a Brighton garden bench in summer.',
      tier: 'confident',
      steps: [
        'Pick the system: the Sun and a wooden garden bench in Brighton on a sunny day.',
        'Name the starting store: the thermal store of the Sun is huge.',
        'Name the pathway out of the Sun: light and infrared travel through space.',
        null,
        'Name the second store: the thermal store of the wooden bench grows; the bench warms up.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Name the pathway in this step as radiation (light and infrared); the air in between is not warmer than the bench, so heating is not the route.',
      xpValue: 15,
    },
    {
      id: 'et-q16',
      type: 'multiple-choice',
      stem: 'A cyclist eats a 100 g banana, then pedals off down a flat road. Which sentence best names the two main store changes and the pathway?',
      tier: 'confident',
      options: [
        'The kinetic store of the banana falls; mechanical transfer to the cyclist.',
        'The chemical store of the food (and the body) falls; mechanical transfer through the legs and pedals; kinetic store of the cyclist grows.',
        'The thermal store of the banana grows; heating transfer to the cyclist.',
        'The electrical store of the body falls; electrical transfer to the wheels.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'et-mis-food-no-pathway',
      hint: 'Where is the energy held in the banana, and how does the cyclist push it through the bike?',
    },
    {
      id: 'et-q17',
      type: 'numeric-entry',
      stem: 'A small electric kettle takes 90 000 J from the mains by an electrical transfer. The thermal store of the water grows by 84 000 J. The rest leaves by heating to the surroundings. How many joules leave the kettle to the surroundings?',
      tier: 'confident',
      correctAnswer: 6000,
      unit: 'J',
      xpValue: 15,
      misconceptionId: 'et-mis-energy-can-be-lost',
      hint: 'Total in equals total out, by conservation. Subtract what stayed in the water from what came in.',
    },
    {
      id: 'et-q18',
      type: 'multiple-choice',
      stem: 'A pupil in a Lake District tent uses a wind-up torch in the dark. Which list names the stores and pathways correctly, in order?',
      tier: 'challenge',
      options: [
        'Elastic store falls; electrical transfer; chemical store of the bulb grows; sound transfer.',
        'Elastic store of the spring falls; mechanical transfer to the small generator; electrical transfer through the wires; thermal store of the bulb grows; radiation transfer of light to the tent.',
        'Chemical store falls; heating transfer to the bulb; nuclear store grows.',
        'Magnetic store falls; mechanical transfer; gravitational store of the tent grows; sound transfer.',
      ],
      correctIndex: 1,
      xpValue: 20,
      hint: 'Start with the wound spring, follow it through the tiny generator, the wires, the bulb, then out as light.',
    },
    {
      id: 'et-q19',
      type: 'numeric-entry',
      stem: 'A car burns enough petrol to release 4000 J from its chemical store. The kinetic store of the car grows by 1200 J. The rest leaves by heating to the engine, the tyres, and the air. How many joules leave to the surroundings as a heating transfer?',
      tier: 'challenge',
      correctAnswer: 2800,
      unit: 'J',
      xpValue: 20,
      misconceptionId: 'et-mis-energy-can-be-lost',
      hint: 'Total in equals total out. Subtract the kinetic share from the chemical share.',
    },
    {
      id: 'et-q20',
      type: 'free-text',
      stem: 'A 50 kg pupil walks up two flights of stairs from the ground floor to the science lab on a winter morning. In two or three sentences, name the starting store, the pathway used, and the second store that grows. Mention one wasted transfer to the surroundings.',
      tier: 'challenge',
      sampleAnswer:
        'The starting store is the chemical store of the pupil’s breakfast and body. The pathway is mechanical, through the legs pushing on each step. The gravitational store of the pupil grows because they are now higher up. A heating transfer also goes to the surroundings, because the pupil’s muscles warm up while they climb.',
      keywords: ['chemical store', 'mechanical', 'gravitational store', 'heating', 'surroundings'],
      xpValue: 20,
    },
    {
      id: 'et-q21',
      type: 'multiple-choice',
      stem: 'A toaster takes 60 000 J from the mains by an electrical transfer. After the slice has popped up, all 60 000 J have gone somewhere. Which sentence is correct?',
      tier: 'challenge',
      options: [
        'Some of the 60 000 J was lost; only the rest went to the bread.',
        'The full 60 000 J was destroyed in the toaster.',
        'All 60 000 J went somewhere: most to the thermal store of the bread, the rest by heating to the kitchen air. Total energy is conserved.',
        'The 60 000 J became sound energy and disappeared.',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'et-mis-energy-can-be-lost',
      hint: 'Energy is never destroyed. Trace where it all ended up: the bread, plus the kitchen air.',
    },
  ],
  misconceptions: [
    // Source: IOPSpark "Energy: stores and pathways" classroom guidance, used by AQA/Edexcel/OCR for KS3 Energy. Pupils learn only "kinetic to electrical" or "fuel to motion" pairings and miss heating and radiation.
    {
      id: 'et-mis-only-two-pathways',
      description:
        'Naming only mechanical and electrical as transfer pathways, missing heating (temperature difference) and radiation (light, sound, infrared).',
      triggerAnswer: 'only-two-pathways',
      correction:
        'There are four pathways: mechanical (force x distance), electrical (current x voltage), heating (a temperature difference), and radiation (light, sound, infrared). All four show up in everyday situations.',
      reExplanation:
        'Think of a kettle on a hob. The flame heats the kettle (heating, because the flame is hotter than the kettle). The kettle then heats the water (heating again). At the same time the flame gives out light and the kettle whistles when boiling (both radiation). The mains-powered kettle uses electrical instead of the flame. So in one breakfast you may use all four pathways.',
    },
    // Source: CGP KS3 Physics Study Guide, "stores not types" pages. Pupils use "store" and "transfer" as if they were the same thing.
    {
      id: 'et-mis-store-vs-transfer',
      description:
        'Using "stored" and "transferred" as if they meant the same thing, so saying that the kettle "stores heat energy in the water".',
      triggerAnswer: 'store-vs-transfer',
      correction:
        'Energy sits in a store (kinetic, gravitational, elastic, thermal, chemical, nuclear, magnetic, electrostatic). It moves between stores along a pathway (mechanical, electrical, heating, radiation). The two words name different things.',
      reExplanation:
        'A kettle of just-boiled water has a thermal store (it is hot). The kettle did not "store heat energy"; it transferred energy from its element to the water by heating, and the thermal store of the water grew. Naming the store and the pathway separately keeps the picture clear and lines up with how GCSE later treats energy.',
    },
    // Source: IOPSpark guidance and AQA GCSE Physics examiner report June 2023, candidates label the light from a torch as "light energy" being held inside the bulb.
    {
      id: 'et-mis-light-as-store',
      description:
        'Treating light as a store inside an object (light energy in the bulb) rather than as a radiation transfer leaving the object.',
      triggerAnswer: 'light-as-store',
      correction:
        'Light is not a store. Light is part of the radiation pathway: it carries energy from the source to whatever absorbs it. The thermal store of the source falls; the radiation transfer moves energy out.',
      reExplanation:
        'A torch bulb has a thermal store while it glows. Light leaves the bulb as a radiation transfer in all directions. Anything the light hits (your eye, a wall, the floor) gains energy in its thermal store as the light is absorbed. Once the bulb is off, the bulb has no "light store" left over; only its (slowly cooling) thermal store remains.',
    },
    // Source: OCR GCSE Physics examiner report June 2022, J259/02. Candidates skip the chemical store of food in dietary energy questions, treating food as a transfer rather than a stored quantity.
    {
      id: 'et-mis-food-no-pathway',
      description:
        'Skipping the chemical store of food and the mechanical pathway through the body when explaining how a person gets a kinetic store.',
      triggerAnswer: 'food-no-pathway',
      correction:
        'Food holds energy in its chemical store. Eating it lets the body break the bonds and transfer the energy. The pathway from body to bicycle (or to a flight of stairs) is mechanical, through the legs.',
      reExplanation:
        'A cyclist eats a banana. The chemical store of the banana (and the cyclist’s reserves) is what the legs draw on. Each pedal stroke pushes through a distance: a mechanical transfer. The kinetic store of the bike grows. Heating to the surroundings (warm body, warm tyres) is the wasted pathway. Naming the store and the pathway makes the change traceable.',
    },
    // Source: AQA GCSE Physics examiner report June 2023, Paper 1F. Candidates write that energy is "lost" when an appliance heats the surroundings, missing the conservation rule.
    {
      id: 'et-mis-energy-can-be-lost',
      description:
        'Saying that some of the energy from an appliance is "lost" or "destroyed" when the appliance gets hot, missing that the energy has been transferred to the surroundings.',
      triggerAnswer: 'energy-can-be-lost',
      correction:
        'Energy is never lost or destroyed. It moves between stores or to the surroundings. "Wasted" means it has gone somewhere we did not want it to, but the total is the same.',
      reExplanation:
        'A toaster takes 60 000 J from the mains by an electrical transfer. Most of this grows the thermal store of the bread (the useful share). Some grows the thermal store of the kitchen air (the wasted share). Add the two and you get 60 000 J back. Nothing was destroyed. The same picture works for a car, a kettle, and a phone charger.',
    },
    // Source: CGP KS3 Physics Study Guide, common-mistake box on cooling. Pupils think a hot object can be heated again by a cooler one if you wait long enough.
    {
      id: 'et-mis-heating-direction',
      description:
        'Believing energy can move from a cooler object to a hotter one by heating if you wait long enough.',
      triggerAnswer: 'heating-direction',
      correction:
        'Heating only moves energy from the hotter object to the cooler one. Once they reach the same temperature, the heating transfer stops.',
      reExplanation:
        'Drop an ice cube into a glass of warm squash. Energy moves from the warm squash to the ice (warm to cold), so the ice melts. The squash never gets warmer because of the ice; the ice cools the squash. After both reach the same temperature, no more heating happens. The direction is set by the temperature difference, not by which object you would like to grow.',
    },
    // Source: AQA GCSE Physics examiner report June 2022, Paper 1F. Candidates name "sound energy" as a store coming out of a loudspeaker.
    {
      id: 'et-mis-sound-as-store',
      description:
        'Treating sound as a store inside a speaker, rather than as a radiation transfer leaving the speaker.',
      triggerAnswer: 'sound-as-store',
      correction:
        'Sound is not a store. Sound is part of the radiation pathway: vibrations travel out from the source through the air or another material.',
      reExplanation:
        'A loudspeaker is fed by an electrical transfer from an amplifier. Inside, a coil pushes a cone back and forth (a mechanical transfer). The cone pushes the air, sending out sound waves (a radiation transfer). The thermal store of the air grows a little along the way. None of this needs a "sound store" inside the speaker.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const energyZoneNodes = [energyStores, energyTransfers]

export const energyZone: Zone = {
  id: 'physics-energy-stores-transfers',
  name: 'Energy Stores and Transfers',
  realm: 'mechanica',
  nodeIds: energyZoneNodes.map(n => n.id),
}
