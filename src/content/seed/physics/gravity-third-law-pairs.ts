import type { SkillNode } from '@/types/content'

const PUPIL_EARTH_PAIR_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Pupil standing on Earth: a gravity pair</text>
    <text x="400" y="62" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">two forces, two different objects, both gravity</text>

    <!-- Curved Earth surface -->
    <path d="M 60 350 Q 400 280 740 350" />
    <text x="400" y="378" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Earth (mass approximately 6 x 10^24 kg)</text>

    <!-- Pupil stick figure -->
    <circle cx="400" cy="170" r="16" />
    <line x1="400" y1="186" x2="400" y2="250" />
    <line x1="400" y1="205" x2="375" y2="235" />
    <line x1="400" y1="205" x2="425" y2="235" />
    <line x1="400" y1="250" x2="378" y2="295" />
    <line x1="400" y1="250" x2="422" y2="298" />
    <text x="400" y="155" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">pupil (mass approximately 70 kg)</text>

    <!-- Earth pulls pupil down -->
    <line x1="455" y1="220" x2="455" y2="290" />
    <polygon points="447,280 455,295 463,280" fill="currentColor" stroke="none" />
    <text x="510" y="240" font-size="13" font-weight="700" stroke="none" fill="currentColor">Earth pulls</text>
    <text x="510" y="256" font-size="13" font-weight="700" stroke="none" fill="currentColor">pupil down (700 N)</text>

    <!-- Pupil pulls Earth up -->
    <line x1="345" y1="290" x2="345" y2="220" />
    <polygon points="337,232 345,215 353,232" fill="currentColor" stroke="none" />
    <text x="200" y="240" font-size="13" font-weight="700" stroke="none" fill="currentColor">pupil pulls</text>
    <text x="200" y="256" font-size="13" font-weight="700" stroke="none" fill="currentColor">Earth up (700 N)</text>

    <text x="400" y="405" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Same size, opposite direction, both gravity, acting on TWO different objects.</text>
  </g>
`

const EARTH_MOON_GRAVITY_PAIR_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Earth and Moon: equal-and-opposite gravity pair</text>
    <text x="400" y="62" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">same size pull on each body, no matter the mass difference</text>

    <!-- Earth on the left -->
    <circle cx="200" cy="220" r="68" fill="currentColor" />
    <text x="200" y="225" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="white">Earth</text>
    <text x="200" y="315" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">huge mass</text>

    <!-- Moon on the right -->
    <circle cx="620" cy="220" r="26" fill="currentColor" />
    <text x="620" y="225" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="white">Moon</text>
    <text x="620" y="280" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">smaller mass</text>

    <!-- Earth pulls Moon (arrow to the left, acting on Moon) -->
    <line x1="590" y1="210" x2="510" y2="210" />
    <polygon points="518,203 505,210 518,217" fill="currentColor" stroke="none" />
    <text x="550" y="195" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Earth pulls Moon</text>

    <!-- Moon pulls Earth (arrow to the right, acting on Earth) -->
    <line x1="270" y1="240" x2="345" y2="240" />
    <polygon points="337,233 350,240 337,247" fill="currentColor" stroke="none" />
    <text x="308" y="260" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Moon pulls Earth</text>

    <!-- Same-line marker -->
    <line x1="270" y1="180" x2="592" y2="180" stroke-dasharray="6 6" />
    <text x="430" y="170" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">both forces lie along the same line between centres</text>

    <text x="400" y="375" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Equal in size. Opposite in direction. Acting on two different bodies.</text>
  </g>
`

const FAKE_VS_REAL_PAIR_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Real third-law pair or a first-law balance?</text>
    <text x="400" y="62" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">a pupil stands still on the school hall floor</text>

    <!-- Left panel: the fake "pair" (both on the pupil) -->
    <text x="200" y="92" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Fake pair: both forces on the pupil</text>
    <line x1="80" y1="290" x2="320" y2="290" />
    <!-- Pupil block -->
    <rect x="170" y="220" width="60" height="70" fill="currentColor" />
    <text x="200" y="262" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="white">pupil</text>
    <!-- Weight down (on pupil) -->
    <line x1="200" y1="220" x2="200" y2="175" />
    <polygon points="192,188 200,170 208,188" fill="currentColor" stroke="none" />
    <text x="200" y="160" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">weight 700 N (gravity, on pupil)</text>
    <!-- Normal contact up (on pupil) -->
    <line x1="200" y1="290" x2="200" y2="335" />
    <polygon points="192,322 200,340 208,322" fill="currentColor" stroke="none" />
    <text x="200" y="358" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">normal contact 700 N (push, on pupil)</text>

    <!-- Divider -->
    <line x1="400" y1="80" x2="400" y2="380" stroke-dasharray="6 6" />

    <!-- Right panel: the REAL third-law pair (gravity, two bodies) -->
    <text x="600" y="92" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Real pair: gravity on pupil AND on Earth</text>
    <!-- Earth curve -->
    <path d="M 480 320 Q 600 280 720 320" />
    <text x="600" y="345" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Earth</text>
    <!-- Pupil block -->
    <rect x="575" y="200" width="50" height="60" fill="currentColor" />
    <text x="600" y="234" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="white">pupil</text>
    <!-- Earth pulls pupil down -->
    <line x1="640" y1="225" x2="640" y2="265" />
    <polygon points="632,255 640,270 648,255" fill="currentColor" stroke="none" />
    <text x="710" y="240" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">Earth pulls</text>
    <text x="710" y="255" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">pupil down</text>
    <!-- Pupil pulls Earth up -->
    <line x1="560" y1="265" x2="560" y2="225" />
    <polygon points="552,238 560,220 568,238" fill="currentColor" stroke="none" />
    <text x="490" y="240" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">pupil pulls</text>
    <text x="490" y="255" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">Earth up</text>
  </g>
`

export const gravityThirdLawPairs: SkillNode = {
  id: 'physics-gravity-third-law-pairs',
  title: "Newton's Third Law and Gravity",
  description:
    "Every gravitational pull comes with an equal-and-opposite partner pull on the other body. When the Earth pulls a pupil down with 700 N, the pupil pulls the Earth up with 700 N. The same is true for any pair of masses: the Earth pulls the Moon, and the Moon pulls the Earth with the same size of force in the opposite direction. The pair rules are simple: same line of action, same size, opposite direction, acting on two DIFFERENT bodies, both of the same type (gravity with gravity). The weight of a book and the normal contact from a desk are not a third-law pair, because both forces act on the same book; they balance by the first law instead. Treat gravity forces between Earth, Moon and Sun qualitatively at KS3.",
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-gravity',
  zoneName: 'Gravity, Weight, Mass',
  tier: 'challenge',
  prerequisites: ['physics-gravity-mass-vs-weight'],
  curriculum: {
    ks3Objective:
      'Gravity force; using force arrows in diagrams; gravity forces between Earth and Moon, and between Earth and Sun (qualitative only); forces always occurring in pairs.',
    awardingBodies: {
      aqa: "4.5.1.2 Mass and weight; 4.5.6.3 Newton's Third Law applied to gravitational pairs (GCSE Physics 8463)",
      edexcel:
        "Topic 1 Motion and forces, 1.16-1.17 Weight; 1.42-1.43 Newton's Third Law force pairs (GCSE Physics 1PH0)",
      ocr: "P2.2 Newton's laws; Newton's Third Law and gravitational interaction pairs (GCSE Physics J259 Gateway)",
    },
  },
  scenes: [
    {
      id: 'gtl-scene-pupil-earth',
      title: 'Pupil and Earth: the Gravity Pair Under Your Shoes',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see the two equal-and-opposite gravity forces in this everyday setup.',
      data: {
        viewBox: '0 0 800 400',
        svg: PUPIL_EARTH_PAIR_SVG,
        hotspots: [
          {
            id: 'gtl-pe-earth-on-pupil',
            x: 64,
            y: 65,
            label: 'Earth pulls pupil down (700 N)',
            description:
              'The Earth pulls the pupil downwards with its gravity. This force is the pupil\'s weight. It acts on the pupil, not on the Earth.',
          },
          {
            id: 'gtl-pe-pupil-on-earth',
            x: 28,
            y: 65,
            label: 'Pupil pulls Earth up (700 N)',
            description:
              "By Newton's Third Law, the pupil pulls the Earth upwards with the same 700 N. This force acts on the Earth, not on the pupil. The Earth's huge mass means this pull barely changes its motion, but the partner force is real.",
          },
          {
            id: 'gtl-pe-same-line',
            x: 50,
            y: 50,
            label: 'Same line, same size, opposite direction',
            description:
              'Both arrows run up and down along the same straight line through the pupil and the Earth\'s centre. They are equal in size and point in opposite directions.',
          },
          {
            id: 'gtl-pe-different-objects',
            x: 50,
            y: 88,
            label: 'Two different objects',
            description:
              'The Earth-on-pupil force acts on the pupil; the pupil-on-Earth force acts on the Earth. A Newton\'s Third Law pair always splits across two different bodies.',
          },
        ],
      },
    },
    {
      id: 'gtl-scene-earth-moon',
      title: 'Earth and Moon: a Two-Body Gravity Pair',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see the equal-and-opposite gravity pair between Earth and Moon.',
      data: {
        viewBox: '0 0 800 400',
        svg: EARTH_MOON_GRAVITY_PAIR_SVG,
        hotspots: [
          {
            id: 'gtl-em-earth-on-moon',
            x: 70,
            y: 50,
            label: 'Earth pulls Moon',
            description:
              'The Earth\'s gravity reaches out and pulls the Moon towards it. This force acts on the Moon. It is what keeps the Moon in orbit.',
          },
          {
            id: 'gtl-em-moon-on-earth',
            x: 38,
            y: 60,
            label: 'Moon pulls Earth',
            description:
              "By Newton's Third Law the Moon pulls the Earth back with a force the SAME size as the Earth pulls the Moon, in the opposite direction. The two forces along the line between their centres are equal partners.",
          },
          {
            id: 'gtl-em-same-size',
            x: 50,
            y: 42,
            label: 'Same size, despite the mass difference',
            description:
              'Even though the Earth is far more massive than the Moon, the gravity pair between them is equal in size. Mass does not change which body pulls harder; it changes how much each body moves under the same pull.',
          },
          {
            id: 'gtl-em-line',
            x: 50,
            y: 90,
            label: 'Both forces along the same line',
            description:
              'Both arrows act along the straight line joining the centres of the Earth and the Moon. Same line of action is part of the third-law pair rule.',
          },
        ],
      },
    },
    {
      id: 'gtl-scene-fake-vs-real',
      title: 'Fake Pair Versus Real Pair',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to tell a first-law balance apart from a real third-law gravity pair.',
      data: {
        viewBox: '0 0 800 400',
        svg: FAKE_VS_REAL_PAIR_SVG,
        hotspots: [
          {
            id: 'gtl-fr-fake-weight',
            x: 25,
            y: 40,
            label: 'Weight (gravity, on pupil)',
            description:
              'The Earth pulls the pupil down with their weight, 700 N. This force acts on the pupil. It is a gravity force.',
          },
          {
            id: 'gtl-fr-fake-normal',
            x: 25,
            y: 90,
            label: 'Normal contact (push, on pupil)',
            description:
              'The floor pushes the pupil up with a contact force, 700 N. This force also acts on the pupil. It is a contact push, not a gravity force.',
          },
          {
            id: 'gtl-fr-not-a-pair',
            x: 25,
            y: 60,
            label: 'NOT a Newton\'s Third Law pair',
            description:
              "Both arrows act on the SAME object (the pupil), and they are different types (gravity and contact). A third-law pair needs two different objects and the same type. These two balance by Newton's First Law and that is why the pupil stays at rest.",
          },
          {
            id: 'gtl-fr-real-pair',
            x: 80,
            y: 60,
            label: 'Real third-law gravity pair',
            description:
              "Here is the real partner of the pupil's weight: the pupil pulls the Earth upwards with 700 N, by gravity. Two bodies, same type, same size, opposite direction. This is the proper third-law pair.",
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'gtl-worked-1',
      title: 'Find the third-law partner of a pupil\'s weight',
      steps: [
        {
          explanation:
            'Set the scene. A Year 7 pupil of mass 70 kg stands still on a Sevenoaks pavement. On Earth the gravitational field strength is 10 N/kg, so the pupil\'s weight is 700 N downwards.',
          maths: 'W = m g = 70 x 10 = 700 N',
        },
        {
          explanation:
            'Name the stated force in full. The Earth pulls the pupil downwards with a gravity force of 700 N. The two objects are the Earth and the pupil; the type is gravity.',
          maths: 'Stated force: Earth on pupil, 700 N down, gravity',
        },
        {
          explanation:
            "Apply Newton's Third Law. If A pulls B with a force, then B pulls A with an equal and opposite force of the same type.",
          maths: 'Force on B by A = equal and opposite force on A by B',
        },
        {
          explanation:
            'Swap the two objects and reverse the direction. The pupil now acts on the Earth. The arrow flips from downwards to upwards. Keep the size the same: 700 N.',
          maths: 'Partner: pupil on Earth, 700 N up',
        },
        {
          explanation:
            'Match the type. The original force is gravity (Earth on pupil). The partner must also be gravity (pupil on Earth). Both are gravity pulls, not contact pushes.',
        },
        {
          explanation:
            'State the result. The third-law partner of the pupil\'s 700 N weight is "the pupil pulls the Earth upwards with 700 N of gravity". The Earth barely moves because its mass is huge, but the partner force is real.',
        },
      ],
    },
    {
      id: 'gtl-worked-2',
      title: 'Spot the fake pair: weight and normal contact on a book',
      steps: [
        {
          explanation:
            'Set the scene. A library book sits at rest on a desk. The Earth pulls the book down with weight, 8 N. The desk pushes the book up with a normal contact force, 8 N. A pupil claims these are a Newton\'s Third Law pair.',
        },
        {
          explanation:
            "Recall the pair rule. A third-law pair acts on two DIFFERENT objects and uses the SAME type of force on both sides.",
          maths: 'Pair rule: two objects, same type, same size, opposite direction',
        },
        {
          explanation:
            'List which object each force acts on. Weight acts on the book (from the Earth). Normal contact also acts on the book (from the desk). Both forces act on the SAME object.',
          maths: 'Weight on book; normal contact on book (same object)',
        },
        {
          explanation:
            'Check the type. Weight is a gravity pull. Normal contact is a contact push. The two forces are different types as well, so neither rule of the pair is met.',
        },
        {
          explanation:
            "Conclude. The two forces are not a third-law pair. They balance by Newton's First Law on the one object (the book), which is why the book stays at rest on the desk.",
        },
        {
          explanation:
            "Find the real partners. The partner of weight (Earth on book) is the book on the Earth, by gravity, 8 N upwards. The partner of normal contact (desk on book) is the book on the desk, by contact, 8 N downwards. Two separate third-law pairs, each acting on two different bodies.",
          maths: 'Two real pairs: book-Earth gravity AND book-desk contact',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'gtl-q1',
      type: 'multiple-choice',
      stem: 'A Year 7 pupil stands on Earth. The Earth pulls the pupil downwards with their weight. Which sentence states the third-law partner correctly?',
      tier: 'core',
      options: [
        'The floor pushes the pupil upwards with an equal force.',
        'The pupil pulls the Earth upwards with an equal gravity force.',
        'The pupil pushes the floor downwards with an equal force.',
        'Air resistance pushes the pupil upwards with an equal force.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'gtl-mis-floor-is-partner',
      hint: 'Swap the two objects (Earth and pupil), reverse the direction, keep gravity as the type.',
    },
    {
      id: 'gtl-q2',
      type: 'numeric-entry',
      stem: 'The Earth pulls a pupil downwards with a weight of 700 N. By Newton\'s Third Law, what size, in newtons, does the pupil pull the Earth upwards?',
      tier: 'core',
      correctAnswer: 700,
      unit: 'N',
      xpValue: 10,
      misconceptionId: 'gtl-mis-bigger-mass-pulls-harder',
      hint: 'Equal in size. The Earth\'s much larger mass does not change the force; it changes how much the Earth moves.',
    },
    {
      id: 'gtl-q3',
      type: 'numeric-entry',
      stem: 'A 2 kg textbook rests on a Sevenoaks classroom desk. On Earth, the gravitational field strength is 10 N/kg. What size, in newtons, of upward gravity force does the textbook exert on the Earth?',
      tier: 'core',
      correctAnswer: 20,
      unit: 'N',
      xpValue: 10,
      misconceptionId: 'gtl-mis-bigger-mass-pulls-harder',
      hint: 'First work out the textbook\'s weight (W = m g). The partner gravity force on the Earth is the same size, upwards.',
    },
    {
      id: 'gtl-q4',
      type: 'multiple-choice',
      stem: 'A pupil writes: "The Earth pulls the Moon with a huge force, but the Moon pulls back on the Earth with a much smaller force because the Moon is so much lighter." Which sentence reads their work correctly?',
      tier: 'core',
      options: [
        'The pupil is right; the bigger body always pulls harder.',
        'The pupil is right, because the heavier Earth wins the tug-of-war.',
        'The pupil is not right; the Earth-Moon gravity pair is equal in size, with opposite directions.',
        'The pupil is not right; the Earth and Moon do not pull on each other at all.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'gtl-mis-bigger-mass-pulls-harder',
      hint: 'Newton\'s Third Law pairs are always equal in size, no matter the masses.',
    },
    {
      id: 'gtl-q5',
      type: 'multiple-choice',
      stem: 'Which set of features describes a Newton\'s Third Law pair?',
      tier: 'core',
      options: [
        'Same size, opposite direction, two different objects, same type of force.',
        'Same size, same direction, one object, different types of force.',
        'Different sizes, opposite directions, two objects, different types of force.',
        'Same size, opposite direction, one object, same type of force.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'gtl-mis-weight-and-normal-are-pair',
      hint: 'Two DIFFERENT objects is the rule that tells a third-law pair apart from a first-law balance.',
    },
    {
      id: 'gtl-q6',
      type: 'numeric-entry',
      stem: 'A 0.5 kg apple is held above a garden in Tunbridge Wells. The Earth pulls the apple down with gravity (g = 10 N/kg). What size, in newtons, does the apple pull the Earth upwards?',
      tier: 'core',
      correctAnswer: 5,
      unit: 'N',
      xpValue: 10,
      misconceptionId: 'gtl-mis-no-partner-for-small-object',
      hint: 'Weight of apple = m g = 0.5 x 10. The partner gravity force on the Earth is the same size, upwards.',
    },
    {
      id: 'gtl-q7',
      type: 'multiple-choice',
      stem: 'A pupil says: "When I jump up off the ground, the Earth must not move at all, because gravity only acts one way." Which statement reads this correctly?',
      tier: 'core',
      options: [
        'The pupil is right; gravity only acts from the Earth on us, not from us on the Earth.',
        'The pupil is right; the Earth cannot be pulled because it is too heavy.',
        'The pupil is right; only the Earth has gravity, smaller objects do not.',
        'The pupil is not right; the pupil pulls the Earth with an equal gravity force, so the Earth moves by an unfeelable amount.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'gtl-mis-earth-does-not-move',
      hint: 'Gravity acts both ways. The same force on a huge mass makes a tiny change in motion.',
    },
    {
      id: 'gtl-q8',
      type: 'multiple-choice',
      stem: 'A 700 N pupil stands still on the school hall floor. The Earth pulls them down with 700 N (weight). The floor pushes up on them with 700 N (normal contact). Which sentence describes these two forces correctly?',
      tier: 'confident',
      options: [
        'They are a Newton\'s Third Law pair, because they are equal and opposite.',
        'They are not a Newton\'s Third Law pair, because they act on the same object and are different types.',
        'They are not forces, because the pupil is at rest.',
        'They are a Newton\'s Third Law pair, but the floor force is slightly smaller.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'gtl-mis-first-law-and-third-law',
      hint: 'Same object plus different types of force means they cannot be a third-law pair. They balance by the first law.',
    },
    {
      id: 'gtl-q9',
      type: 'numeric-entry',
      stem: 'The Sun pulls the Earth with a gravity force of about 3.5 x 10^22 N along the line between their centres. By Newton\'s Third Law, what size, in newtons, does the Earth pull the Sun? Give your answer as a coefficient (we will assume the same 10^22 factor in the unit).',
      tier: 'confident',
      correctAnswer: 3.5,
      unit: 'x 10^22 N',
      xpValue: 15,
      misconceptionId: 'gtl-mis-bigger-mass-pulls-harder',
      hint: 'Newton\'s Third Law: equal in size, opposite in direction. The coefficient stays the same.',
    },
    {
      id: 'gtl-q10',
      type: 'multiple-choice',
      stem: 'A pupil is holding a 1 kg bag of sugar still in their hand. Which of these is the third-law partner of the Earth\'s gravity pull on the bag?',
      tier: 'confident',
      options: [
        'The hand pushes up on the bag with about 10 N.',
        'The bag\'s mass acts upwards with 10 N.',
        'The bag pulls the Earth upwards with about 10 N of gravity.',
        'The air pushes up on the bag with about 10 N.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'gtl-mis-floor-is-partner',
      hint: 'A third-law partner is on the OTHER body of the same gravity pair. Swap Earth and bag, flip the direction.',
    },
    {
      id: 'gtl-q11',
      type: 'spot-misconception',
      stem: 'Hina writes: "The Earth pulls a 60 kg pupil down with a weight of 600 N. The pupil pulls the Earth up with a much smaller force because the pupil is much smaller than the Earth." Which statement reads her work correctly?',
      tier: 'confident',
      statements: [
        {
          text: 'Hina is right. The bigger body always pulls harder, so the Earth pull is much larger than the pupil pull.',
          isMisconception: true,
        },
        {
          text: 'Hina is not right. By Newton\'s Third Law the pupil pulls the Earth up with exactly 600 N. The Earth barely moves because its mass is huge, not because the force is smaller.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'gtl-mis-bigger-mass-pulls-harder',
    },
    {
      id: 'gtl-q12',
      type: 'drag-order',
      stem: 'Order the steps to find the third-law partner of a stated gravity force. The stated force is "the Earth pulls a 5 kg rock down with 50 N of gravity".',
      tier: 'confident',
      items: [
        'Swap the two objects: the rock now acts on the Earth.',
        'Name the two objects in the stated force: the Earth and the rock.',
        'Reverse the direction: the partner force on the Earth points upwards.',
        'Keep the size and type the same: 50 N of gravity.',
      ],
      correctOrder: [1, 0, 2, 3],
      xpValue: 15,
      hint: 'Name the two objects first, then swap them, then reverse the direction, then keep the size and the type the same.',
    },
    {
      id: 'gtl-q13',
      type: 'multiple-choice',
      stem: 'A pupil says: "The Earth pulls the Moon, but the Moon does not pull the Earth, because we never see the Earth wobble." Which sentence corrects this best?',
      tier: 'confident',
      options: [
        'The Moon DOES pull the Earth with an equal gravity force; the Earth wobbles by a tiny, unfeelable amount because its mass is so large.',
        'The Moon does not have gravity, only the Earth does.',
        'The Moon only pulls the oceans, not the solid Earth.',
        'The Moon pulls the Earth but only when there is a full Moon.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'gtl-mis-earth-does-not-move',
      hint: 'Gravity always works both ways. A huge mass shifts very little under a given force.',
    },
    {
      id: 'gtl-q14',
      type: 'numeric-entry',
      stem: 'A 100 kg lump of rock sits on the school playing field. On Earth g = 10 N/kg. What size, in newtons, of upward gravity force does the rock exert on the Earth?',
      tier: 'confident',
      correctAnswer: 1000,
      unit: 'N',
      xpValue: 15,
      misconceptionId: 'gtl-mis-no-partner-for-small-object',
      hint: 'Weight of rock = m g. The third-law partner is the same size, on the Earth, pointing upwards.',
    },
    {
      id: 'gtl-q15',
      type: 'multiple-choice',
      stem: 'A 70 kg astronaut is in deep space, far from any planet. They float still next to a 1000 kg space probe. By Newton\'s Third Law, how do their two tiny gravity pulls compare?',
      tier: 'confident',
      options: [
        'The probe pulls the astronaut with a larger force, because the probe has more mass.',
        'The astronaut pulls the probe with a larger force, because they are smaller.',
        'Neither object pulls the other; there is no Earth nearby, so no gravity.',
        'The two pulls are equal in size and opposite in direction, even though both are tiny.',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'gtl-mis-pair-needs-contact',
      hint: 'Equal in size, opposite in direction. Mass does not change the size of the pair; only how much each body moves.',
    },
    {
      id: 'gtl-q16',
      type: 'spot-misconception',
      stem: 'Tom claims: "The weight of a book on a desk and the desk\'s normal contact on the book ARE a Newton\'s Third Law pair, because they are equal and opposite." Which statement reads his reasoning correctly?',
      tier: 'challenge',
      statements: [
        {
          text: 'Tom is right. Any equal and opposite forces are a third-law pair.',
          isMisconception: true,
        },
        {
          text: 'Tom is not right. Both forces act on the same object (the book) and are of different types (gravity and contact). A third-law pair acts on two different objects and is the same type. These forces balance by Newton\'s First Law instead.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'gtl-mis-weight-and-normal-are-pair',
    },
    {
      id: 'gtl-q17',
      type: 'multiple-choice',
      stem: 'A 1 kg cricket ball is dropped over a Kent pitch. While falling, the Earth pulls the ball down with 10 N of gravity. Which sentence names the third-law partner correctly?',
      tier: 'challenge',
      options: [
        'Air resistance pushes the ball upwards with 10 N.',
        'The ground later pushes the ball upwards with 10 N when it lands.',
        'The ball pulls the Earth upwards with 10 N of gravity, along the line between their centres.',
        'The ball pulls itself upwards with 10 N.',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'gtl-mis-floor-is-partner',
      hint: 'The pair acts on the two bodies in the gravity interaction (ball and Earth). Air resistance and the ground are not part of that pair.',
    },
    {
      id: 'gtl-q18',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is finding the third-law partner of "the Sun pulls the Earth with 3.5 x 10^22 N of gravity, along the line between their centres".',
      tier: 'challenge',
      steps: [
        'State the stated force: the Sun pulls the Earth with gravity, 3.5 x 10^22 N, towards the Sun.',
        'Name the two objects: the Sun and the Earth. The type is gravity.',
        "Apply Newton's Third Law: if A pulls B with a force, then B pulls A with an equal and opposite force of the same type.",
        null,
        'State the partner: the Earth pulls the Sun with gravity, 3.5 x 10^22 N, along the same line but away from the Earth (towards the Earth-Sun line in the opposite direction).',
      ],
      missingStepIndex: 3,
      correctStep:
        'Swap the two objects and reverse the direction. The Earth now acts on the Sun, along the same line, but pointing the opposite way. Keep the size (3.5 x 10^22 N) and the type (gravity) unchanged.',
      xpValue: 20,
    },
    {
      id: 'gtl-q19',
      type: 'drag-order',
      stem: 'Order the four force arrows in this Earth and Moon setup so they match the two third-law gravity pairs and the line of action. Use this order: A: Earth on Moon, B: Moon on Earth, C: along the line between centres, D: equal in size, opposite in direction.',
      tier: 'challenge',
      items: [
        'D: equal in size, opposite in direction',
        'B: Moon on Earth (towards the Moon)',
        'A: Earth on Moon (towards the Earth)',
        'C: along the line between centres',
      ],
      correctOrder: [2, 1, 3, 0],
      xpValue: 20,
      hint: 'Read the letters in the stem (A, B, C, D) and place each item in that order.',
    },
    {
      id: 'gtl-q20',
      type: 'multiple-choice',
      stem: 'A pupil argues: "Tiny things like a pencil cannot pull the Earth, because they have almost no gravity." Which response is correct?',
      tier: 'challenge',
      options: [
        'The pencil DOES pull the Earth, with a force equal in size to the Earth\'s pull on the pencil; both forces are tiny because the pencil\'s weight is tiny, but the pair is still equal.',
        'The pupil is right; objects below about 1 kg have no gravity at all.',
        'The pupil is right; only planets and stars take part in third-law gravity pairs.',
        'The pencil pulls the Earth, but with a much smaller force than the Earth pulls the pencil.',
      ],
      correctIndex: 0,
      xpValue: 20,
      misconceptionId: 'gtl-mis-no-partner-for-small-object',
      hint: 'Newton\'s Third Law applies to every gravity interaction, no matter how small the object.',
    },
    {
      id: 'gtl-q21',
      type: 'free-text',
      stem: 'A friend claims: "The Earth pulls a 70 kg pupil down with 700 N, but the pupil cannot pull the Earth up, because the Earth never moves when we jump." Explain why this is not right. State the size and direction of the force the pupil exerts on the Earth, name the type of force, and explain why we never see the Earth shift when a pupil jumps.',
      tier: 'challenge',
      sampleAnswer:
        "The friend is not right. By Newton’s Third Law the pupil pulls the Earth upwards with exactly 700 N of gravity, equal in size to the Earth’s 700 N pull on the pupil and opposite in direction. The two forces lie along the line between the pupil and the Earth’s centre and act on two different bodies. The Earth does shift under this pull, but its mass is about 6 x 10^24 kg, so 700 N causes an utterly unfeelable change in its motion. The pupil, with a much smaller mass, accelerates upwards a lot under the same 700 N. Mass changes how much an object moves, not the size of the third-law pair.",
      keywords: ['equal', 'opposite', '700', 'gravity', 'Earth', 'pupil', 'mass', 'third'],
      xpValue: 20,
      misconceptionId: 'gtl-mis-earth-does-not-move',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics examiner report June 2022, Paper 1F, candidates state the bigger body pulls the smaller one with a larger gravity force
    {
      id: 'gtl-mis-bigger-mass-pulls-harder',
      description:
        'Believing the heavier body in a gravity pair pulls the lighter body with a larger force than the lighter body pulls back (for example, that the Earth pulls the Moon harder than the Moon pulls the Earth).',
      triggerAnswer: 'bigger-mass-pulls-harder',
      correction:
        "Third-law gravity pairs are always equal in size, no matter the masses. The Earth pulls the Moon with the same size of force as the Moon pulls the Earth.",
      reExplanation:
        "Mass changes how much an object moves under a force, not the size of the pair. The Earth pulls a 60 kg pupil with 600 N, and the pupil pulls the Earth with 600 N back. Both are gravity, equal in size, opposite in direction. The Earth barely moves because its mass is huge; the pupil moves a lot because their mass is small.",
    },
    // Source: Edexcel GCSE Physics examiner report June 2023, Paper 1PH0/1F, candidates pair weight on the book with the normal contact from the desk as a Newton\'s Third Law pair
    {
      id: 'gtl-mis-weight-and-normal-are-pair',
      description:
        "Believing the weight of an object and the normal contact on it from a surface are a Newton's Third Law pair, because they are equal in size and opposite in direction.",
      triggerAnswer: 'weight-and-normal-are-pair',
      correction:
        "Both forces act on the same object and are different types (gravity and contact). A third-law pair acts on two different objects and is the same type.",
      reExplanation:
        "Look at a book on a desk. Weight (gravity) acts on the book from the Earth. Normal contact (push) also acts on the book from the desk. Two forces on the same object cannot be a third-law pair. The real partner of weight is the book pulling the Earth upwards; the real partner of normal contact is the book pushing the desk downwards.",
    },
    // Source: OCR GCSE Physics examiner report June 2022, J259/02, candidates name the partner of weight as the normal contact from the floor
    {
      id: 'gtl-mis-floor-is-partner',
      description:
        "Naming the third-law partner of an object's weight as the upward push from the floor, not the object's own gravity pull on the Earth.",
      triggerAnswer: 'floor-is-partner',
      correction:
        "The partner of weight (Earth on object, gravity) is the object on Earth (gravity, opposite direction). The floor push is a different force on a different pair.",
      reExplanation:
        "Take a pupil standing on a floor. The Earth pulls the pupil down with 700 N of gravity. The third-law partner is the pupil pulling the Earth up with 700 N of gravity. The floor push on the pupil is a separate pair (pupil pushes floor, floor pushes pupil, both by contact). Match the type and swap the bodies to find the right partner.",
    },
    // Source: AQA GCSE Physics examiner report June 2021, Paper 1F, candidates state the Earth does not shift when a pupil jumps because gravity acts only one way
    {
      id: 'gtl-mis-earth-does-not-move',
      description:
        'Believing the Earth feels no gravity from a person or small object, because the Earth never appears to move when they jump or fall.',
      triggerAnswer: 'earth-does-not-move',
      correction:
        "The Earth does feel the gravity force from any object, equal in size to the Earth's pull on that object. The Earth's huge mass makes the resulting motion unfeelably small.",
      reExplanation:
        "Newton's Third Law gives every gravity pull a partner of equal size. A 70 kg pupil pulls the Earth with 700 N upwards. The Earth, with mass about 6 x 10^24 kg, accelerates upwards by 700/6e24 m/s/s, which is far too small to notice. The motion happens; we just never feel it. Force size in the pair does not change with mass; only the resulting acceleration does.",
    },
    // Source: CGP KS3 Physics Study Guide Common Mistake box on small objects and gravity
    {
      id: 'gtl-mis-no-partner-for-small-object',
      description:
        'Believing very small objects (a pencil, an apple, a bag of sugar) have no gravity, and so cannot have a third-law gravity partner pulling on the Earth.',
      triggerAnswer: 'no-partner-for-small-object',
      correction:
        "Every mass pulls every other mass by gravity. The pair on a small object and the Earth is always equal in size, even though both forces may be tiny.",
      reExplanation:
        "Hold a 0.5 kg apple. The Earth pulls the apple down with 5 N of gravity. By Newton's Third Law the apple pulls the Earth upwards with 5 N of gravity. The forces are equal in size, opposite in direction, acting on two different bodies. Small objects do have gravity; it is just very weak compared with planetary gravity, but the pair always balances.",
    },
    // Source: Edexcel GCSE Physics examiner report June 2019, Paper 1PH0/1F, candidates blur the first-law balance on one object with the third-law pair across two objects
    {
      id: 'gtl-mis-first-law-and-third-law',
      description:
        "Treating Newton's First Law (balanced forces on one object) and Newton's Third Law (paired gravity forces on two different objects) as the same idea.",
      triggerAnswer: 'first-law-and-third-law',
      correction:
        "The first law looks at one object: its forces balance, so it stays at rest. The third law links two objects: a force on A from B has an equal partner on B from A.",
      reExplanation:
        "A pupil at rest on the floor shows both laws. By the first law, the weight (down) and the normal contact (up) on the pupil balance, so the pupil stays still. By the third law, the pupil pulls the Earth up with 700 N of gravity, and pushes the floor down with 700 N. One law balances forces on one body; the other pairs forces across two bodies.",
    },
    // Authored, no external source
    {
      id: 'gtl-mis-pair-needs-contact',
      description:
        "Believing Newton's Third Law only applies to contact pushes (like a shoe on the ground or a hand on a wall), and not to action-at-a-distance gravity forces between two masses.",
      triggerAnswer: 'pair-needs-contact',
      correction:
        "Newton's Third Law applies to every interaction, including gravity. The Earth pulls the Moon and the Moon pulls the Earth, with no contact at all, by an equal and opposite gravity pair.",
      reExplanation:
        "Gravity acts across empty space. The Earth and the Moon never touch, yet they pull on each other with equal and opposite gravity forces along the line between their centres. The same is true for the Earth and Sun and for any pair of masses. Pushes, pulls, gravity, magnetism, all share the third law. Contact is not required.",
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const gravityThirdLawPairsZoneNodes = [gravityThirdLawPairs]
