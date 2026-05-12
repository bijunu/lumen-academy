import type { SkillNode, Zone } from '@/types/content'

const BOOK_TABLE_PAIRS_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Book on a school library table</text>
    <text x="400" y="62" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">two separate Newton's Third Law pairs in one situation</text>

    <!-- Left half: the contact pair, both on the table-book contact patch -->
    <text x="200" y="100" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Pair 1: contact pair</text>
    <text x="200" y="118" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">two forces, two different objects</text>
    <line x1="60" y1="240" x2="340" y2="240" />
    <rect x="160" y="190" width="80" height="40" fill="currentColor" />
    <!-- Book pushes table down -->
    <line x1="200" y1="235" x2="200" y2="285" />
    <polygon points="192,275 200,290 208,275" fill="currentColor" stroke="none" />
    <text x="270" y="280" font-size="11" font-weight="700" stroke="none" fill="currentColor">book pushes</text>
    <text x="270" y="295" font-size="11" font-weight="700" stroke="none" fill="currentColor">table down</text>
    <!-- Table pushes book up -->
    <line x1="200" y1="195" x2="200" y2="145" />
    <polygon points="192,158 200,140 208,158" fill="currentColor" stroke="none" />
    <text x="270" y="150" font-size="11" font-weight="700" stroke="none" fill="currentColor">table pushes</text>
    <text x="270" y="165" font-size="11" font-weight="700" stroke="none" fill="currentColor">book up</text>
    <text x="200" y="335" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Both forces are contact pushes.</text>
    <text x="200" y="350" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Equal in size, opposite direction.</text>

    <!-- Right half: the gravity pair, book and the Earth -->
    <text x="600" y="100" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Pair 2: gravity pair</text>
    <text x="600" y="118" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">two forces, two different objects</text>
    <!-- Book in the air over Earth, only for clarity of the pair -->
    <rect x="560" y="170" width="80" height="40" fill="currentColor" />
    <text x="600" y="160" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">book</text>
    <!-- Earth pulls book down -->
    <line x1="600" y1="215" x2="600" y2="265" />
    <polygon points="592,255 600,270 608,255" fill="currentColor" stroke="none" />
    <text x="670" y="245" font-size="11" font-weight="700" stroke="none" fill="currentColor">Earth pulls</text>
    <text x="670" y="260" font-size="11" font-weight="700" stroke="none" fill="currentColor">book down</text>
    <!-- Earth (circle) -->
    <circle cx="600" cy="320" r="22" fill="currentColor" />
    <text x="600" y="325" text-anchor="middle" font-size="10" font-weight="700" stroke="none" fill="white">Earth</text>
    <!-- Book pulls Earth up -->
    <line x1="600" y1="298" x2="600" y2="345" stroke-dasharray="3 3" />
    <line x1="635" y1="320" x2="690" y2="320" />
    <polygon points="680,313 695,320 680,327" fill="currentColor" stroke="none" />
    <text x="715" y="318" font-size="11" font-weight="700" stroke="none" fill="currentColor">book pulls</text>
    <text x="715" y="333" font-size="11" font-weight="700" stroke="none" fill="currentColor">Earth up</text>
    <text x="600" y="380" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Both forces are gravity pulls.</text>

    <!-- Bottom note -->
    <line x1="400" y1="395" x2="400" y2="395" />
  </g>
`

const WALKING_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Walking on a Sevenoaks pavement</text>
    <text x="400" y="62" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">your shoe and the ground push on each other</text>

    <!-- Pavement -->
    <line x1="60" y1="320" x2="740" y2="320" />
    <line x1="80" y1="335" x2="140" y2="335" stroke-dasharray="6 8" />
    <line x1="200" y1="335" x2="260" y2="335" stroke-dasharray="6 8" />
    <line x1="320" y1="335" x2="380" y2="335" stroke-dasharray="6 8" />
    <line x1="440" y1="335" x2="500" y2="335" stroke-dasharray="6 8" />
    <line x1="560" y1="335" x2="620" y2="335" stroke-dasharray="6 8" />

    <!-- Stick walker -->
    <circle cx="400" cy="130" r="18" />
    <line x1="400" y1="148" x2="400" y2="240" />
    <line x1="400" y1="180" x2="370" y2="220" />
    <line x1="400" y1="180" x2="430" y2="210" />
    <line x1="400" y1="240" x2="370" y2="310" />
    <line x1="400" y1="240" x2="430" y2="320" />
    <!-- Shoe blocks -->
    <rect x="355" y="310" width="25" height="10" fill="currentColor" />
    <rect x="425" y="318" width="25" height="6" fill="currentColor" />

    <!-- Shoe pushes ground backwards -->
    <line x1="370" y1="345" x2="280" y2="345" />
    <polygon points="290,338 275,345 290,352" fill="currentColor" stroke="none" />
    <text x="325" y="370" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">shoe pushes ground backwards</text>

    <!-- Ground pushes shoe forwards -->
    <line x1="430" y1="305" x2="530" y2="305" />
    <polygon points="520,298 535,305 520,312" fill="currentColor" stroke="none" />
    <text x="490" y="290" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">ground pushes shoe forwards</text>

    <!-- Note on equality -->
    <text x="400" y="395" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">The two arrows are equal in size and opposite in direction.</text>
  </g>
`

const ROCKET_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Rocket and exhaust gas</text>
    <text x="400" y="62" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">push pair acts on two different objects</text>

    <!-- Rocket body pointing up -->
    <path d="M 380 100 L 420 100 L 420 240 L 440 270 L 360 270 L 380 240 Z" fill="currentColor" />
    <path d="M 380 90 L 400 60 L 420 90 Z" fill="currentColor" />
    <!-- Exhaust gas cloud below -->
    <ellipse cx="400" cy="320" rx="50" ry="22" fill="currentColor" opacity="0.4" />
    <ellipse cx="400" cy="340" rx="35" ry="14" fill="currentColor" opacity="0.3" />

    <!-- Rocket pushes gas down -->
    <line x1="400" y1="270" x2="400" y2="380" />
    <polygon points="392,368 400,385 408,368" fill="currentColor" stroke="none" />
    <text x="490" y="350" font-size="12" font-weight="700" stroke="none" fill="currentColor">rocket pushes gas down</text>

    <!-- Gas pushes rocket up -->
    <line x1="500" y1="200" x2="500" y2="100" />
    <polygon points="492,112 500,95 508,112" fill="currentColor" stroke="none" />
    <text x="560" y="150" font-size="12" font-weight="700" stroke="none" fill="currentColor">gas pushes rocket up</text>

    <!-- Note -->
    <text x="400" y="405" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Equal sizes, opposite directions, two different objects.</text>
  </g>
`

export const forcesNewtonThird: SkillNode = {
  id: 'physics-forces-newton-third',
  title: "Newton's Third Law and Force Pairs",
  description:
    "Use Newton's Third Law to identify the partner of a stated force. State that when one object exerts a force on a second object, the second exerts an equal and opposite force on the first. Pick out the two objects in each pair, and check that both forces in the pair are the same type (push pairs with push, gravity with gravity, magnetic with magnetic). Tell a third-law pair (two objects) apart from a first-law balance (one object).",
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-forces',
  zoneName: 'Forces',
  tier: 'challenge',
  prerequisites: ['physics-forces-types', 'physics-forces-newton-first'],
  curriculum: {
    ks3Objective:
      'Forces as pushes or pulls, arising from the interaction between two objects; opposing forces and equilibrium.',
    awardingBodies: {
      aqa: "4.5.6.2.3 Newton's Third Law; when two objects interact, the forces they exert on each other are equal and opposite (GCSE Physics 8463)",
      edexcel:
        "Topic 1 Motion and forces, Newton's Third Law; equal and opposite forces in an interaction pair (GCSE Physics 1PH0)",
      ocr: "P2.2 Newton's laws; third law and identifying interaction pairs (GCSE Physics J259 Gateway)",
    },
  },
  scenes: [
    {
      id: 'fn3-scene-book-table-pairs',
      title: 'Book on a Table: Two Separate Pairs',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read the two Newton\'s Third Law pairs hidden in this familiar setup.',
      data: {
        viewBox: '0 0 800 400',
        svg: BOOK_TABLE_PAIRS_SVG,
        hotspots: [
          {
            id: 'fn3-bt-contact-down',
            x: 25,
            y: 70,
            label: 'Book pushes table down',
            description:
              'The bottom of the book and the top of the table touch. The book pushes the table down with a contact force. This force acts on the table, not on the book.',
          },
          {
            id: 'fn3-bt-contact-up',
            x: 25,
            y: 40,
            label: 'Table pushes book up',
            description:
              "The table pushes back on the book with an equal and opposite contact force. Same size, opposite direction. This is the third-law partner of the book's push on the table.",
          },
          {
            id: 'fn3-bt-gravity-down',
            x: 75,
            y: 60,
            label: 'Earth pulls book down',
            description:
              'The Earth pulls the book downwards through its gravity. This force acts on the book and is the book\'s weight.',
          },
          {
            id: 'fn3-bt-gravity-up',
            x: 90,
            y: 80,
            label: 'Book pulls Earth up',
            description:
              "The book pulls the Earth upwards by an equal and opposite gravity force. You never notice this because the Earth is huge, but the partner force is real. This is the third-law partner of the book's weight.",
          },
          {
            id: 'fn3-bt-not-pair',
            x: 50,
            y: 95,
            label: 'Weight and normal contact are NOT a pair',
            description:
              "Both arrows on the book (the Earth pulling it down, and the table pushing it up) act on the same object, the book. A Newton's Third Law pair always acts on two different objects. These two forces balance by Newton's First Law instead.",
          },
        ],
      },
    },
    {
      id: 'fn3-scene-walking',
      title: 'Walking: Shoe and Ground Push Each Other',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see why you can only walk because the ground pushes back on your shoe.',
      data: {
        viewBox: '0 0 800 400',
        svg: WALKING_SVG,
        hotspots: [
          {
            id: 'fn3-w-shoe-on-ground',
            x: 40,
            y: 87,
            label: 'Shoe pushes ground backwards',
            description:
              'As you take a step, your shoe scuffs backwards against the pavement. This is a friction push by your shoe on the ground. The force acts on the ground, not on you.',
          },
          {
            id: 'fn3-w-ground-on-shoe',
            x: 62,
            y: 75,
            label: 'Ground pushes shoe forwards',
            description:
              'The pavement pushes back on your shoe with an equal and opposite friction. This force acts on you, and it is what actually moves you forwards. It is the third-law partner of your shoe\'s push on the ground.',
          },
          {
            id: 'fn3-w-equal-opposite',
            x: 50,
            y: 96,
            label: 'Equal and opposite',
            description:
              'The two arrows are the same size and point opposite ways. They act on two different objects (you and the pavement), which is what makes them a Newton\'s Third Law pair.',
          },
          {
            id: 'fn3-w-ice',
            x: 80,
            y: 17,
            label: 'On a slippery surface',
            description:
              'On wet ice, your shoe cannot push back hard against the ground because there is too little friction. The ground then cannot push back hard on you either, so you slip. Walking depends on a strong third-law pair at the shoe.',
          },
        ],
      },
    },
    {
      id: 'fn3-scene-rocket',
      title: 'Rocket and Exhaust Gas',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how a rocket lifts off by pushing on its own exhaust gas.',
      data: {
        viewBox: '0 0 800 450',
        svg: ROCKET_SVG,
        hotspots: [
          {
            id: 'fn3-r-rocket-on-gas',
            x: 60,
            y: 78,
            label: 'Rocket pushes gas down',
            description:
              'Burning fuel inside the rocket throws hot gas out of the nozzle. The rocket exerts a downward push on the gas. This force acts on the gas, not on the rocket.',
          },
          {
            id: 'fn3-r-gas-on-rocket',
            x: 70,
            y: 33,
            label: 'Gas pushes rocket up',
            description:
              "The gas pushes back on the rocket with an equal and opposite upward push. This force acts on the rocket and is what lifts it off the launch pad. It is the third-law partner of the rocket's push on the gas.",
          },
          {
            id: 'fn3-r-no-air-needed',
            x: 22,
            y: 25,
            label: 'No air needed',
            description:
              'The pair is between the rocket and its own exhaust gas. The rocket does not need air around it to push against, which is why rockets work in the vacuum of space.',
          },
          {
            id: 'fn3-r-different-objects',
            x: 50,
            y: 90,
            label: 'Two different objects',
            description:
              'The pair acts on two different objects: the rocket and the gas. Both forces are the same type (a contact push) and the same size, but in opposite directions.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'fn3-worked-1',
      title: "Find the third-law partner of a stated force",
      steps: [
        {
          explanation:
            'Set the scene. A rowing boat on the Thames is pulled along by the rower\'s oar. The stated force is "the oar pushes the water backwards".',
        },
        {
          explanation:
            'Name the two objects. The oar is one object; the water is the other. A third-law pair always involves two different objects, so write them both down.',
          maths: 'Object A = oar, Object B = water',
        },
        {
          explanation:
            "Use Newton's Third Law. The law says if A pushes B with a force, then B pushes A with an equal and opposite force.",
          maths: 'Force on B by A = equal and opposite force on A by B',
        },
        {
          explanation:
            'Write the partner. The water pushes the oar forwards with the same size of force. That is the partner.',
          maths: 'Partner: water pushes oar forwards',
        },
        {
          explanation:
            'Check the type. The first force is a contact push (oar pressing on water). The partner must be the same type: a contact push (water pressing on oar). Both are pushes, both involve a touch.',
        },
        {
          explanation:
            'State the result. The third-law partner of "oar pushes water backwards" is "water pushes oar forwards". It is the same size, the opposite direction, and acts on the oar (not the water).',
        },
      ],
    },
    {
      id: 'fn3-worked-2',
      title: "Spot a fake pair: why the book's weight and the normal contact are not a Newton's Third Law pair",
      steps: [
        {
          explanation:
            'Set the scene. A library book sits at rest on a desk. The Earth pulls the book down with weight. The desk pushes the book up with a normal contact force.',
        },
        {
          explanation:
            "Recall the rule for a third-law pair. The pair acts on two different objects. One force acts on A from B; the partner acts on B from A.",
          maths: 'Third-law pair: one force on each of two objects',
        },
        {
          explanation:
            'List which object each force acts on. The weight acts on the book (from the Earth). The normal contact force also acts on the book (from the desk). Both forces act on the same object.',
          maths: 'Weight on book; normal contact on book (same object)',
        },
        {
          explanation:
            "So this is not a Newton's Third Law pair. Two forces on the same object can never be a third-law pair, no matter how equal and opposite they look.",
        },
        {
          explanation:
            "Find the real partners. The partner of weight (Earth pulls book) is the book pulls the Earth, by gravity. The partner of normal contact (desk pushes book) is the book pushes the desk, by contact.",
          maths: 'Two separate pairs, not one',
        },
        {
          explanation:
            "State the result. Weight and normal contact balance by Newton's First Law (forces on the same object cancel, so the book stays at rest). They are not a third-law pair. The two real third-law partners act on the Earth and on the desk.",
        },
      ],
    },
  ],
  questions: [
    {
      id: 'fn3-q1',
      type: 'multiple-choice',
      stem: "Which sentence best states Newton's Third Law?",
      tier: 'core',
      options: [
        'A heavier object always pulls a lighter object harder than the lighter one pulls back.',
        'When one object exerts a force on a second object, the second exerts an equal and opposite force on the first.',
        'Every force has a balanced force on the same object, so nothing ever moves.',
        'A moving object always pushes back harder on a still object than the still object pushes on it.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'fn3-mis-heavier-pulls-harder',
      hint: 'The law links two objects. If A pushes B, B pushes A by the same size in the opposite direction.',
    },
    {
      id: 'fn3-q2',
      type: 'numeric-entry',
      stem: "A pupil kicks a ball. The boot pushes the ball forwards with a force of 60 N. By Newton's Third Law, what is the size of the force the ball pushes back on the boot, in newtons?",
      tier: 'core',
      correctAnswer: 60,
      unit: 'N',
      xpValue: 10,
      misconceptionId: 'fn3-mis-same-object',
      hint: 'Equal in size, opposite in direction. Swap the two objects; the partner force has the same magnitude.',
    },
    {
      id: 'fn3-q3',
      type: 'numeric-entry',
      stem: 'A magnet pulls a steel paperclip towards itself with a force of 0.2 N. What size of pull does the paperclip exert on the magnet, in newtons?',
      tier: 'core',
      correctAnswer: 0.2,
      unit: 'N',
      xpValue: 10,
      misconceptionId: 'fn3-mis-heavier-pulls-harder',
      hint: 'The two forces are equal in size and opposite in direction. Size of A on B equals size of B on A.',
    },
    {
      id: 'fn3-q4',
      type: 'multiple-choice',
      stem: 'A Year 7 pupil walks across a Sevenoaks pavement. Their shoe pushes the pavement backwards. Which force is the third-law partner?',
      tier: 'core',
      options: [
        'The pavement pushes the shoe forwards.',
        'Gravity pulls the pupil downwards.',
        'The pupil pushes their other shoe forwards.',
        'Air resistance pushes the pupil backwards.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'fn3-mis-same-object',
      hint: "Swap the two objects (shoe and pavement) and reverse the direction. The partner is on a different object.",
    },
    {
      id: 'fn3-q5',
      type: 'multiple-choice',
      stem: 'A rocket on its launch pad burns fuel and pushes hot exhaust gas downwards. What pushes the rocket upwards?',
      tier: 'core',
      options: [
        'The air below the rocket pushes it up.',
        'The launch pad pushes the rocket up while the gas escapes.',
        'The exhaust gas pushes the rocket up by an equal and opposite force.',
        'The rocket pushes itself up using its own engine.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'fn3-mis-rocket-needs-air',
      hint: "The third-law partner of 'rocket pushes gas down' is 'gas pushes rocket up'.",
    },
    {
      id: 'fn3-q6',
      type: 'numeric-entry',
      stem: 'A Year 7 pupil leans on a wall and pushes it with a horizontal force of 25 N. By Newton\'s Third Law, what is the size of the force the wall exerts back on the pupil, in newtons?',
      tier: 'core',
      correctAnswer: 25,
      unit: 'N',
      xpValue: 10,
      misconceptionId: 'fn3-mis-wall-pushes-less',
      hint: 'Equal in size. The two forces are always the same magnitude, no matter which object is bigger or stiffer.',
    },
    {
      id: 'fn3-q7',
      type: 'spot-misconception',
      stem: "A pupil writes: \"The book's weight is 6 N down. The desk pushes the book up with 6 N. These two forces are a Newton's Third Law pair.\" Which statement reads their work correctly?",
      tier: 'core',
      statements: [
        {
          text: "The pupil is right. The two forces are equal and opposite, so they must be a Newton's Third Law pair.",
          isMisconception: true,
        },
        {
          text: "The pupil is not right. Both forces act on the same object (the book), so they cannot be a Newton's Third Law pair. They balance by Newton's First Law instead.",
          isMisconception: false,
        },
      ],
      xpValue: 10,
      misconceptionId: 'fn3-mis-balance-is-pair',
    },
    {
      id: 'fn3-q8',
      type: 'multiple-choice',
      stem: 'A child sits in a rowing boat on the Thames and pushes the water backwards with the oar. Which sentence names the third-law partner correctly?',
      tier: 'confident',
      options: [
        'The water pushes the oar forwards, with a force equal to the oar\'s push on the water.',
        'The Earth pulls the boat down by an equal force.',
        'The boat pushes the oar forwards by an equal force.',
        'The water pushes the boat downwards by an equal force.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'fn3-mis-same-object',
      hint: 'Swap the two objects (oar and water), reverse the direction, keep the size the same.',
    },
    {
      id: 'fn3-q9',
      type: 'multiple-choice',
      stem: "A library book sits on a desk. The Earth pulls the book downwards with its weight, 8 N. Which sentence names the third-law partner of the book's weight?",
      tier: 'confident',
      options: [
        'The desk pushes the book up with 8 N.',
        'The book pulls the Earth upwards with 8 N.',
        'The book\'s mass acts upwards with 8 N.',
        'The air around the book pushes it up with 8 N.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'fn3-mis-first-and-third-same',
      hint: 'The two objects in the pair are the book and the Earth. Swap them and reverse the direction.',
    },
    {
      id: 'fn3-q10',
      type: 'multiple-choice',
      stem: 'Two pupils stand on skateboards on a smooth gym floor. Pupil A pushes Pupil B with a force of 30 N. Which sentence correctly describes the third-law partner?',
      tier: 'confident',
      options: [
        'Pupil B pushes Pupil A back with a force smaller than 30 N, because Pupil B is more reluctant to move.',
        'Pupil B pushes Pupil A back with 30 N in the opposite direction.',
        'The floor pushes Pupil A back with 30 N, balancing the push on Pupil B.',
        'No partner acts, because only one push happened.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'fn3-mis-heavier-pulls-harder',
      hint: 'The two pushes are equal in size, no matter who is heavier.',
    },
    {
      id: 'fn3-q11',
      type: 'multiple-choice',
      stem: 'A Sevenoaks pupil jumps off a stationary skateboard onto the pavement. The pupil pushes back on the skateboard. What does the skateboard do?',
      tier: 'confident',
      options: [
        'It stays put, because only the pupil pushed.',
        'It pushes the pupil forwards with an equal and opposite force, and rolls backwards itself.',
        'It pulls the pupil sideways with an equal force.',
        'It pushes the pavement backwards instead of the pupil.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'fn3-mis-wall-pushes-less',
      hint: 'The skateboard pushes back on the pupil with the same size of force, in the opposite direction.',
    },
    {
      id: 'fn3-q12',
      type: 'drag-order',
      stem: "Order the steps to find the third-law partner of a stated force. The stated force is 'the boot pushes the ball forwards with 60 N'.",
      tier: 'confident',
      items: [
        'Swap the two objects: the ball acts on the boot.',
        'Name the two objects in the stated force: the boot and the ball.',
        'Reverse the direction: the partner force points backwards (relative to the original push).',
        'Keep the size the same: 60 N, by Newton\'s Third Law.',
      ],
      correctOrder: [1, 0, 2, 3],
      xpValue: 15,
      hint: 'Name the two objects first, then swap them, then reverse the direction, then keep the size.',
    },
    {
      id: 'fn3-q13',
      type: 'spot-misconception',
      stem: "Aisha says: \"When I push a brick wall with 20 N, the wall pushes me back with less than 20 N. That is why the wall does not move but I bounce back.\" Which statement reads her reasoning correctly?",
      tier: 'confident',
      statements: [
        {
          text: 'Aisha is right. A stiff wall must push back less than a person, otherwise the wall would move.',
          isMisconception: true,
        },
        {
          text: 'Aisha is not right. The wall pushes back on her with exactly 20 N. The wall does not move because the floor stops it, and Aisha bounces back because the only horizontal force on her is the wall\'s push.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fn3-mis-wall-pushes-less',
    },
    {
      id: 'fn3-q14',
      type: 'numeric-entry',
      stem: 'A person of weight 700 N stands still on a kitchen scale. Nobody moves. By Newton\'s Third Law, the scale pushes up on the person with the same size of force the person pushes down on the scale. What size, in newtons, does the scale push the person upwards?',
      tier: 'confident',
      correctAnswer: 700,
      unit: 'N',
      xpValue: 15,
      misconceptionId: 'fn3-mis-no-pair-if-no-motion',
      hint: 'The third-law pair acts even though nothing moves. Equal in size to the downward push.',
    },
    {
      id: 'fn3-q15',
      type: 'labelled-image',
      stem: "Place the labels on the two Newton's Third Law pairs in this book-on-table setup. Each marker takes one label.",
      tier: 'confident',
      viewBox: '0 0 800 400',
      svg: BOOK_TABLE_PAIRS_SVG,
      hotspots: [
        { id: 'fn3-q15-h1', x: 25, y: 70, correctLabel: 'Book pushes table down' },
        { id: 'fn3-q15-h2', x: 25, y: 40, correctLabel: 'Table pushes book up' },
        { id: 'fn3-q15-h3', x: 75, y: 60, correctLabel: 'Earth pulls book down' },
        { id: 'fn3-q15-h4', x: 90, y: 80, correctLabel: 'Book pulls Earth up' },
      ],
      labels: [
        'Book pushes table down',
        'Table pushes book up',
        'Earth pulls book down',
        'Book pulls Earth up',
        'Air pushes book sideways',
        'Book pushes itself up',
        'Desk pulls book down',
        'Earth pushes table up',
      ],
      xpValue: 15,
      misconceptionId: 'fn3-mis-different-type',
      hint: 'Pair 1 is the contact pair between the book and the table. Pair 2 is the gravity pair between the book and the Earth.',
    },
    {
      id: 'fn3-q16',
      type: 'missing-step',
      stem: "Fill in the missing step. A pupil is finding the third-law partner of 'the Sun pulls the Earth towards it with a gravity force'.",
      tier: 'challenge',
      steps: [
        "State the stated force: the Sun pulls the Earth, by gravity.",
        "Name the two objects: the Sun and the Earth.",
        "Apply Newton's Third Law: if A pulls B with a force, then B pulls A with an equal and opposite force.",
        null,
        "State the partner: the Earth pulls the Sun, by gravity, with the same size of force in the opposite direction.",
      ],
      missingStepIndex: 3,
      correctStep:
        "Swap the two objects and reverse the direction. The Earth now pulls the Sun, in the opposite direction along the same line.",
      xpValue: 20,
    },
    {
      id: 'fn3-q17',
      type: 'multiple-choice',
      stem: "On a flat road a cyclist coasts along at a constant 6 m/s. The road pushes forwards on the rear tyre with a friction force of 20 N. Which force is the third-law partner of this 20 N forwards friction from the road on the tyre?",
      tier: 'challenge',
      options: [
        'Air resistance on the cyclist, 20 N backwards.',
        "The cyclist's weight, 20 N downwards.",
        "The normal contact between road and tyre, 20 N upwards.",
        'The tyre pushes the road backwards with 20 N.',
      ],
      correctIndex: 3,
      xpValue: 20,
      misconceptionId: 'fn3-mis-balance-is-pair',
      hint: 'A third-law partner acts on the OTHER object. Swap road and tyre, reverse the direction. The partner is not the balancing air resistance.',
    },
    {
      id: 'fn3-q18',
      type: 'drag-order',
      stem: "A horse pulls a cart along a country lane. List the four forces involved in the third-law pairs between horse and cart, and between horse and ground. Order them as A: horse on cart (forwards), B: cart on horse (backwards), C: horse pushes ground backwards, D: ground pushes horse forwards.",
      tier: 'challenge',
      items: [
        'D: ground pushes horse forwards',
        'B: cart on horse (backwards)',
        'A: horse on cart (forwards)',
        'C: horse pushes ground backwards',
      ],
      correctOrder: [2, 1, 3, 0],
      xpValue: 20,
      hint: 'Read the letters in the stem (A, B, C, D) and place them in that order. Each pair is on two different objects.',
    },
    {
      id: 'fn3-q19',
      type: 'free-text',
      stem: "A pupil says: 'The Earth pulls a 1 kg bag of sugar down with a weight of 10 N. So the bag must pull the Earth up with much less force, because the bag is so much smaller.' Explain why the pupil is not right. Give the size and direction of the force the bag exerts on the Earth, and say why the Earth barely moves while the bag falls.",
      tier: 'challenge',
      sampleAnswer:
        "The pupil is not right. By Newton's Third Law the bag pulls the Earth upwards with exactly 10 N, the same size as the Earth pulls the bag down. The two forces are equal and opposite and act on different objects. The Earth barely moves because it has a huge mass; the same 10 N produces almost no change in the Earth's motion. The bag has a tiny mass, so 10 N changes its motion a lot and it falls.",
      keywords: ['equal', 'opposite', '10', 'mass', 'Earth', 'bag', 'third', 'gravity'],
      xpValue: 20,
      misconceptionId: 'fn3-mis-heavier-pulls-harder',
    },
    {
      id: 'fn3-q20',
      type: 'free-text',
      stem: "A friend claims: 'A space rocket cannot work in empty space, because there is no air for the exhaust gas to push against.' Explain why this is not right, using Newton's Third Law. Say which two objects form the third-law pair that lifts the rocket.",
      tier: 'challenge',
      sampleAnswer:
        "The friend is not right. The third-law pair is between the rocket and its own exhaust gas, not between the gas and the air. The rocket pushes its hot exhaust gas downwards, and by Newton's Third Law the gas pushes the rocket upwards with an equal and opposite force. No air around the rocket is needed for this push, so rockets work in the vacuum of space. The two objects in the pair are the rocket and the exhaust gas.",
      keywords: ['rocket', 'gas', 'equal', 'opposite', 'space', 'third', 'exhaust'],
      xpValue: 20,
      misconceptionId: 'fn3-mis-rocket-needs-air',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics examiner report June 2023, Paper 1F, candidates pair the weight of a book with the normal contact force from the table as a Newton's Third Law pair
    {
      id: 'fn3-mis-balance-is-pair',
      description:
        "Believing the weight of a book and the normal contact force from the desk on the book are a Newton's Third Law pair, on the grounds that they are equal and opposite.",
      triggerAnswer: 'balance-is-pair',
      correction:
        "A Newton's Third Law pair always acts on two different objects. The weight and the normal contact both act on the book, so they cannot be a pair. They balance by the first law instead.",
      reExplanation:
        "Look at the book on the desk. The weight acts on the book (from the Earth). The normal contact also acts on the book (from the desk). Two forces on the same object cannot be a third-law pair. The real third-law partner of the weight is the bag pulling the Earth upwards; the partner of the normal contact is the book pushing the desk downwards.",
    },
    // Source: Edexcel GCSE Physics examiner report June 2022, Paper 1PH0/1F, candidates list the partner of a stated force as another force on the same object
    {
      id: 'fn3-mis-same-object',
      description:
        "Naming the third-law partner of a force as another force on the same object (for example, calling the partner of 'boot pushes ball' the air resistance on the ball).",
      triggerAnswer: 'same-object',
      correction:
        "A third-law partner always acts on the OTHER object. To find it, swap the two objects in the stated force and reverse the direction.",
      reExplanation:
        "Take 'the boot pushes the ball forwards'. The two objects are the boot and the ball. Swap them: the ball now acts on the boot. Reverse the direction: the ball pushes the boot backwards. That is the partner. It is on the boot, not on the ball.",
    },
    // Source: OCR GCSE Physics examiner report June 2022, J259/02, candidates state that a heavier object pulls a lighter object harder than the lighter one pulls back
    {
      id: 'fn3-mis-heavier-pulls-harder',
      description:
        "Believing a heavier or larger object pulls a smaller one with a larger force than the smaller object pulls back, so the third-law forces are unequal.",
      triggerAnswer: 'heavier-pulls-harder',
      correction:
        "Third-law partners are always equal in size, no matter the masses. The Earth pulls a bag of sugar with the same size of force as the bag pulls the Earth.",
      reExplanation:
        "The Earth pulls a 1 kg bag of sugar with 10 N downwards. The bag pulls the Earth with 10 N upwards. The two forces are equal. The Earth barely moves because its mass is huge, so 10 N changes its motion almost not at all. The bag has a tiny mass, so 10 N speeds it up a lot. Mass changes the motion, not the size of the force.",
    },
    // Source: CGP KS3 Physics Workbook Common Mistake box on pushing a wall
    {
      id: 'fn3-mis-wall-pushes-less',
      description:
        "Believing that when you push a brick wall with a steady force, the wall pushes you back with a smaller force because the wall does not move.",
      triggerAnswer: 'wall-pushes-less',
      correction:
        "The wall pushes back with exactly the same size of force as you push it. The wall does not move because the floor and the building hold it, not because its force is smaller.",
      reExplanation:
        "Push a wall with 20 N. By Newton's Third Law the wall pushes you back with 20 N. You do not accelerate backwards because friction from the floor on your shoes also pushes you forwards, balancing the wall's push. The wall does not move because the bricks behind it and the ground hold it in place. Equal forces; different reasons for not moving.",
    },
    // Source: AQA GCSE Physics examiner report June 2022, Paper 1F, candidates state rockets need air to push against
    {
      id: 'fn3-mis-rocket-needs-air',
      description:
        "Believing a rocket cannot work in empty space because there is no air for the exhaust gas to push against.",
      triggerAnswer: 'rocket-needs-air',
      correction:
        "The third-law pair is between the rocket and its own exhaust gas, not between the gas and the air. The rocket pushes the gas one way; the gas pushes the rocket the other way.",
      reExplanation:
        "A rocket on the launch pad burns fuel and throws hot gas downwards. By Newton's Third Law the gas pushes the rocket upwards with the same size of force. The two objects in the pair are the rocket and its own gas. Take all the air away (as in space), the same pair still works. That is why rockets fly in the vacuum of space.",
    },
    // Source: CGP KS3 Physics Study Guide Common Mistake box on Newton's Third Law force types
    {
      id: 'fn3-mis-different-type',
      description:
        "Pairing a force in a third-law pair with a different type of force (for example, pairing gravity on the book with the contact push from the table).",
      triggerAnswer: 'different-type',
      correction:
        "Both forces in a third-law pair are always the same type. Gravity pairs with gravity, contact push with contact push, magnetic with magnetic.",
      reExplanation:
        "Take the book on the desk. The Earth pulls the book with gravity (the weight). The third-law partner is the book pulling the Earth, also by gravity. The table pushes the book with a contact force. The third-law partner is the book pushing the table, also by contact. Match the type of force, and the pair lines up.",
    },
    // Source: Edexcel GCSE Physics examiner report June 2019, Paper 1PH0/1F, candidates confuse first-law balance with third-law pair when explaining a still object
    {
      id: 'fn3-mis-first-and-third-same',
      description:
        "Treating Newton's First Law (balanced forces on one object) and Newton's Third Law (paired forces on two different objects) as the same idea.",
      triggerAnswer: 'first-and-third-same',
      correction:
        "The first law looks at one object: its forces balance, leaving it at rest. The third law links two objects: a force on A from B has an equal partner on B from A.",
      reExplanation:
        "A book on a desk shows both ideas at once. By the first law, the weight (down) and normal contact (up) on the book balance, so the book stays at rest. By the third law, the book pulls the Earth upwards (partner of its weight) and the book pushes the desk downwards (partner of the desk's push). Two laws, two different jobs.",
    },
    // Authored, no external source
    {
      id: 'fn3-mis-no-pair-if-no-motion',
      description:
        "Believing that if neither object in a pair actually moves, no third-law forces act (for example, claiming a hand resting still on a table feels no push back).",
      triggerAnswer: 'no-pair-if-no-motion',
      correction:
        "Newton's Third Law works whether or not the objects move. As soon as two objects interact, an equal and opposite pair of forces acts.",
      reExplanation:
        "Press a hand gently on a table and hold it still. The hand pushes the table down by a few newtons. By the third law the table pushes the hand up by the same few newtons. Neither object moves, because other forces balance them, but the third-law pair is still there. Motion is not the test; interaction is.",
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const forcesNewtonThirdZoneNodes = [forcesNewtonThird]

export const forcesNewtonThirdZone: Zone = {
  id: 'physics-forces',
  name: 'Forces',
  realm: 'mechanica',
  nodeIds: forcesNewtonThirdZoneNodes.map(n => n.id),
}
