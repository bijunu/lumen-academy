import type { SkillNode } from '@/types/content'

const FBD_GALLERY_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Three free-body diagrams: one object each</text>

    <!-- Case 1: hanging lamp -->
    <text x="140" y="60" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Hanging lamp</text>
    <line x1="100" y1="80" x2="180" y2="80" />
    <line x1="140" y1="80" x2="140" y2="140" stroke-width="2" />
    <rect x="115" y="140" width="50" height="40" fill="currentColor" />
    <!-- Tension up -->
    <line x1="140" y1="160" x2="140" y2="90" />
    <polygon points="132,102 140,85 148,102" fill="currentColor" stroke="none" />
    <text x="180" y="115" font-size="12" font-weight="700" stroke="none" fill="currentColor">Tension 20 N</text>
    <!-- Weight down -->
    <line x1="140" y1="160" x2="140" y2="240" />
    <polygon points="132,228 140,245 148,228" fill="currentColor" stroke="none" />
    <text x="180" y="220" font-size="12" font-weight="700" stroke="none" fill="currentColor">Weight 20 N</text>
    <text x="140" y="285" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Two arrows on the lamp.</text>

    <!-- Case 2: book on table -->
    <text x="400" y="60" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Book on a table</text>
    <line x1="320" y1="180" x2="480" y2="180" />
    <rect x="370" y="140" width="60" height="40" fill="currentColor" />
    <!-- Normal up -->
    <line x1="400" y1="160" x2="400" y2="90" />
    <polygon points="392,102 400,85 408,102" fill="currentColor" stroke="none" />
    <text x="425" y="115" font-size="12" font-weight="700" stroke="none" fill="currentColor">Normal 6 N</text>
    <!-- Weight down -->
    <line x1="400" y1="160" x2="400" y2="240" />
    <polygon points="392,228 400,245 408,228" fill="currentColor" stroke="none" />
    <text x="425" y="220" font-size="12" font-weight="700" stroke="none" fill="currentColor">Weight 6 N</text>
    <text x="400" y="285" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Two arrows on the book.</text>

    <!-- Case 3: pulled sledge -->
    <text x="660" y="60" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Pulled sledge</text>
    <line x1="560" y1="180" x2="760" y2="180" />
    <rect x="620" y="140" width="80" height="40" fill="currentColor" />
    <!-- Pull right -->
    <line x1="660" y1="160" x2="745" y2="160" />
    <polygon points="735,152 750,160 735,168" fill="currentColor" stroke="none" />
    <text x="700" y="148" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Pull 30 N</text>
    <!-- Friction left -->
    <line x1="660" y1="160" x2="595" y2="160" />
    <polygon points="605,152 590,160 605,168" fill="currentColor" stroke="none" />
    <text x="620" y="148" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Friction 10 N</text>
    <!-- Normal up -->
    <line x1="660" y1="160" x2="660" y2="100" />
    <polygon points="652,112 660,95 668,112" fill="currentColor" stroke="none" />
    <text x="685" y="115" font-size="12" font-weight="700" stroke="none" fill="currentColor">Normal 50 N</text>
    <!-- Weight down -->
    <line x1="660" y1="160" x2="660" y2="240" />
    <polygon points="652,228 660,245 668,228" fill="currentColor" stroke="none" />
    <text x="685" y="220" font-size="12" font-weight="700" stroke="none" fill="currentColor">Weight 50 N</text>
    <text x="660" y="285" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Four arrows on the sledge.</text>

    <text x="400" y="335" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">All arrows start on the chosen object, point in the force direction, and are labelled in newtons.</text>
  </g>
`

const FBD_HOW_TO_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Building a free-body diagram of a book on a desk</text>

    <!-- Step 1: real scene -->
    <text x="160" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">1. Real scene</text>
    <line x1="60" y1="200" x2="260" y2="200" />
    <rect x="130" y="160" width="60" height="40" fill="currentColor" />
    <text x="160" y="240" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">A book sat still on a desk.</text>

    <!-- Step 2: isolate -->
    <text x="400" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">2. Isolate the object</text>
    <rect x="370" y="160" width="60" height="40" fill="currentColor" />
    <text x="400" y="240" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Draw only the book. The desk and</text>
    <text x="400" y="256" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">the room are gone from the picture.</text>

    <!-- Step 3: arrows + labels -->
    <text x="640" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">3. Add labelled arrows</text>
    <rect x="610" y="160" width="60" height="40" fill="currentColor" />
    <!-- Normal up -->
    <line x1="640" y1="180" x2="640" y2="110" />
    <polygon points="632,122 640,105 648,122" fill="currentColor" stroke="none" />
    <text x="665" y="130" font-size="12" font-weight="700" stroke="none" fill="currentColor">Normal 4 N</text>
    <!-- Weight down -->
    <line x1="640" y1="180" x2="640" y2="260" />
    <polygon points="632,248 640,265 648,248" fill="currentColor" stroke="none" />
    <text x="665" y="245" font-size="12" font-weight="700" stroke="none" fill="currentColor">Weight 4 N</text>
    <text x="640" y="295" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Arrows start on the book and</text>
    <text x="640" y="311" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">show what pushes or pulls on it.</text>

    <text x="400" y="370" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Equal length arrows here: weight and normal balance, so the book stays still.</text>
  </g>
`

const FBD_ARROW_RULES_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Arrow rules for force diagrams</text>

    <!-- Rule A: length = magnitude -->
    <text x="200" y="90" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Length means magnitude</text>
    <rect x="170" y="120" width="60" height="40" fill="currentColor" />
    <line x1="200" y1="140" x2="320" y2="140" />
    <polygon points="310,132 325,140 310,148" fill="currentColor" stroke="none" />
    <text x="260" y="130" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Push 20 N</text>
    <line x1="200" y1="180" x2="260" y2="180" />
    <polygon points="250,172 265,180 250,188" fill="currentColor" stroke="none" />
    <text x="230" y="170" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Push 10 N</text>
    <text x="200" y="215" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">A longer arrow is a bigger force.</text>

    <!-- Rule B: arrow starts on the body -->
    <text x="600" y="90" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Arrows start on the body</text>
    <rect x="570" y="120" width="60" height="40" fill="currentColor" />
    <line x1="600" y1="140" x2="600" y2="80" />
    <polygon points="592,92 600,75 608,92" fill="currentColor" stroke="none" />
    <text x="625" y="100" font-size="12" font-weight="700" stroke="none" fill="currentColor">Normal 5 N</text>
    <line x1="600" y1="140" x2="600" y2="220" />
    <polygon points="592,208 600,225 608,208" fill="currentColor" stroke="none" />
    <text x="625" y="200" font-size="12" font-weight="700" stroke="none" fill="currentColor">Weight 5 N</text>
    <text x="600" y="255" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Both arrows leave the body.</text>

    <!-- Rule C: direction matters -->
    <text x="200" y="290" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Direction shows where the force acts</text>
    <line x1="100" y1="320" x2="300" y2="320" />
    <polygon points="290,312 305,320 290,328" fill="currentColor" stroke="none" />
    <text x="195" y="310" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Right means the pull is to the right.</text>

    <!-- Rule D: forces only, not velocity -->
    <text x="600" y="290" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Forces only, not velocity</text>
    <text x="600" y="320" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">The arrows show forces in newtons.</text>
    <text x="600" y="338" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Speed and velocity are shown separately.</text>
  </g>
`

export const forcesFreeBody: SkillNode = {
  id: 'physics-forces-free-body',
  title: 'Force Diagrams and Free-Body Diagrams',
  description:
    'Draw a free-body diagram by isolating one object and showing every force acting on it as a labelled arrow from the body. Use arrow length for size and arrow direction for direction. Label each arrow with its name and its value in newtons. Stay in one dimension where possible and use perpendicular pairs (weight with normal contact) for the simplest two-dimensional cases.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-forces',
  zoneName: 'Forces',
  tier: 'confident',
  prerequisites: ['physics-forces-types', 'physics-forces-balanced'],
  curriculum: {
    ks3Objective:
      'Using force arrows in diagrams, adding forces in one dimension, balanced and unbalanced forces; forces measured in newtons, measurements of stretch or compression as force is changed.',
    awardingBodies: {
      aqa: '4.5.1.4 Resultant forces; free-body diagrams (GCSE Physics 8463)',
      edexcel: 'Topic 1 Motion and forces, 1.21-1.22 Vector diagrams of forces acting on a body (GCSE Physics 1PH0)',
      ocr: 'P2.1 Motion and forces; representing forces as vectors on free-body diagrams (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'ffb-scene-gallery',
      title: 'Three Free-Body Diagrams Side by Side',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read the labelled arrows on three objects: a hanging lamp, a book on a table, and a pulled sledge.',
      data: {
        viewBox: '0 0 800 400',
        svg: FBD_GALLERY_SVG,
        hotspots: [
          {
            id: 'ffb-gal-lamp-tension',
            x: 25,
            y: 28,
            label: 'Lamp: tension 20 N up',
            description:
              'The cord pulls the lamp upwards with 20 N. Tension acts on the lamp (not on the ceiling), pointing along the cord toward whatever holds it.',
          },
          {
            id: 'ffb-gal-lamp-weight',
            x: 25,
            y: 55,
            label: 'Lamp: weight 20 N down',
            description:
              'Gravity pulls the lamp downwards with 20 N. Weight always points straight down on a free-body diagram.',
          },
          {
            id: 'ffb-gal-book-normal',
            x: 53,
            y: 28,
            label: 'Book: normal contact 6 N up',
            description:
              'The table pushes back on the book with 6 N. Normal contact is perpendicular to the surface, so here it points straight up.',
          },
          {
            id: 'ffb-gal-book-weight',
            x: 53,
            y: 55,
            label: 'Book: weight 6 N down',
            description:
              'Gravity pulls the book down with 6 N. Weight and normal are equal and opposite, so the book stays still.',
          },
          {
            id: 'ffb-gal-sledge-pull',
            x: 90,
            y: 37,
            label: 'Sledge: pull 30 N right',
            description:
              'A rope pulls the sledge to the right with 30 N. The arrow starts on the sledge and points along the rope away from the sledge.',
          },
          {
            id: 'ffb-gal-sledge-friction',
            x: 78,
            y: 37,
            label: 'Sledge: friction 10 N left',
            description:
              'Sliding friction with the snow drags backwards on the sledge with 10 N. It opposes the motion, so it points to the left.',
          },
          {
            id: 'ffb-gal-sledge-vertical',
            x: 84,
            y: 22,
            label: 'Sledge: weight 50 N and normal 50 N',
            description:
              'The sledge also has a 50 N weight downwards and a 50 N normal contact upwards from the snow. These two balance each other.',
          },
        ],
      },
    },
    {
      id: 'ffb-scene-how-to',
      title: 'How to Build a Free-Body Diagram',
      type: 'labelled-diagram',
      instructions:
        'Click each step to follow how a real scene becomes a free-body diagram.',
      data: {
        viewBox: '0 0 800 400',
        svg: FBD_HOW_TO_SVG,
        hotspots: [
          {
            id: 'ffb-howto-scene',
            x: 20,
            y: 22,
            label: 'Step 1: spot the object',
            description:
              'Pick the one object you want to study. Here it is the book. The desk, the room, and the air are not your object.',
          },
          {
            id: 'ffb-howto-isolate',
            x: 50,
            y: 22,
            label: 'Step 2: isolate the object',
            description:
              'Redraw only the book. Wipe away the desk and the surroundings. A free-body diagram shows just the body you are studying.',
          },
          {
            id: 'ffb-howto-arrows',
            x: 80,
            y: 22,
            label: 'Step 3: add labelled arrows',
            description:
              'Draw one arrow from the body for each force acting on the body. Label each arrow with its name (weight, normal contact) and its size in newtons.',
          },
          {
            id: 'ffb-howto-result',
            x: 50,
            y: 92,
            label: 'Result: two equal arrows balance',
            description:
              'The book weighs 4 N and the desk pushes back with 4 N normal contact. Two equal and opposite arrows means net force zero. The book stays still.',
          },
        ],
      },
    },
    {
      id: 'ffb-scene-arrow-rules',
      title: 'Arrow Rules: Length, Direction, Tail',
      type: 'labelled-diagram',
      instructions:
        'Click each rule to read how the arrows in a free-body diagram are drawn.',
      data: {
        viewBox: '0 0 800 400',
        svg: FBD_ARROW_RULES_SVG,
        hotspots: [
          {
            id: 'ffb-rules-length',
            x: 25,
            y: 24,
            label: 'Length means magnitude',
            description:
              'A longer arrow shows a bigger force. A 20 N push has an arrow about twice as long as a 10 N push on the same diagram.',
          },
          {
            id: 'ffb-rules-tail',
            x: 75,
            y: 24,
            label: 'Tail of the arrow sits on the body',
            description:
              'Every arrow starts on the body you are studying and points away. The arrow shows what acts on the body, not what the body does to other things.',
          },
          {
            id: 'ffb-rules-direction',
            x: 25,
            y: 72,
            label: 'Direction shows where the force points',
            description:
              'An arrow pointing right means the force pushes or pulls to the right. An arrow pointing down means it acts downwards on the body.',
          },
          {
            id: 'ffb-rules-forces-only',
            x: 75,
            y: 72,
            label: 'Forces only, never velocity',
            description:
              'A free-body diagram shows forces in newtons, nothing else. Speed and velocity are shown on a separate motion arrow if needed.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'ffb-worked-1',
      title: 'A 6 N book sat still on a school library desk',
      steps: [
        {
          explanation:
            'Pick the object. Choose the book. The desk, the room, and the floor are not part of the body you are studying.',
        },
        {
          explanation:
            'Isolate the book. Redraw just the book as a small rectangle. Wipe the desk away in your diagram, even though it is still there in real life.',
        },
        {
          explanation:
            'List the forces that act on the book. Gravity pulls the book down. The desk pushes the book up. There are no other pushes or pulls.',
        },
        {
          explanation:
            'Add the weight arrow. Draw an arrow from the book pointing straight down. Label it Weight 6 N because the book weighs 6 N.',
          maths: 'Weight = 6 N down',
        },
        {
          explanation:
            'Add the normal contact arrow. Draw an arrow from the book pointing straight up, the same length as the weight arrow. Label it Normal 6 N.',
          maths: 'Normal contact = 6 N up',
        },
        {
          explanation:
            'Check the result. Two equal and opposite arrows mean the net force is zero. The book was still and stays still, which matches the scene.',
        },
      ],
    },
    {
      id: 'ffb-worked-2',
      title: 'A 50 N sledge pulled along flat snow with a 30 N rope',
      steps: [
        {
          explanation:
            'Pick the object. Choose the sledge. The rope, the child holding the rope, and the snow are not part of the body.',
        },
        {
          explanation:
            'Isolate the sledge. Redraw it as a small rectangle. The rope ends at the sledge in your diagram; do not draw the child.',
        },
        {
          explanation:
            'List the forces that act on the sledge. Four forces: weight down, normal contact up, rope pull to the right, sliding friction to the left.',
        },
        {
          explanation:
            'Add the vertical pair. Weight arrow 50 N down from the sledge. Normal arrow 50 N up from the sledge. They are equal and opposite.',
          maths: 'Weight = 50 N down; Normal = 50 N up',
        },
        {
          explanation:
            'Add the horizontal pair. Pull arrow 30 N to the right from the sledge (along the rope). Friction arrow 10 N to the left from the sledge.',
          maths: 'Pull = 30 N right; Friction = 10 N left',
        },
        {
          explanation:
            'Check the result. Vertical arrows balance. Horizontally, the pull beats friction by 20 N, so the net force is 20 N to the right and the sledge speeds up to the right.',
          maths: 'Net horizontal force = 30 - 10 = 20 N right',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'ffb-q1',
      type: 'multiple-choice',
      stem: 'A free-body diagram shows arrows for which set of forces?',
      tier: 'core',
      options: [
        'Forces the object exerts on other things around it.',
        'Forces acting on the chosen object only.',
        'The weight of the object plus the weight of the room.',
        'The motion arrow plus the speed of the object.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'ffb-mis-forces-on-other-object',
      hint: 'Free-body means "just this one body". Which forces affect that body?',
    },
    {
      id: 'ffb-q2',
      type: 'multiple-choice',
      stem: 'On a free-body diagram of a book lying still on a table, which two arrows must appear?',
      tier: 'core',
      options: [
        'Weight downwards and air resistance upwards.',
        'Tension downwards and normal contact upwards.',
        'Weight downwards and normal contact upwards.',
        'Friction downwards and normal contact upwards.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'ffb-mis-skip-normal',
      hint: 'Gravity always pulls the book down. The table pushes back perpendicular to its surface.',
    },
    {
      id: 'ffb-q3',
      type: 'multiple-choice',
      stem: 'On a free-body diagram of a lamp hanging from a ceiling cord, which two arrows must appear?',
      tier: 'core',
      options: [
        'Tension upwards along the cord and weight downwards.',
        'Weight upwards and normal contact downwards.',
        'Tension downwards along the cord and weight upwards.',
        'Friction upwards and weight downwards.',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'The cord pulls the lamp toward whatever holds it. Gravity does its usual job.',
    },
    {
      id: 'ffb-q4',
      type: 'multiple-choice',
      stem: 'You draw a free-body diagram of a sledge being pulled along flat snow. Where does the tail of the tension arrow sit?',
      tier: 'core',
      options: [
        'On the rope itself, because that is what is pulling.',
        'On the hand of the child, where the rope is held.',
        'On the sledge, with the arrow pointing along the rope away from the sledge.',
        'On the snow, where the sledge sits.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'ffb-mis-tension-on-rope',
      hint: 'The diagram is for the sledge. Forces on the sledge start on the sledge.',
    },
    {
      id: 'ffb-q5',
      type: 'multiple-choice',
      stem: 'On a free-body diagram, what does the length of an arrow show?',
      tier: 'core',
      options: [
        'The mass of the object in kilograms.',
        'The size (magnitude) of the force in newtons.',
        'The speed of the object in metres per second.',
        'The time the force has been acting.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'ffb-mis-arrow-length-arbitrary',
      hint: 'Bigger arrow means bigger something. Forces are measured in newtons.',
    },
    {
      id: 'ffb-q6',
      type: 'multiple-choice',
      stem: 'On a free-body diagram of a box held still in the air by a single rope, what is the weight arrow?',
      tier: 'core',
      options: [
        'There is no weight, because the rope holds the box up.',
        'An arrow pointing straight down, equal in length to the tension arrow.',
        'An arrow pointing along the rope, away from the box.',
        'An arrow pointing sideways, equal in length to friction.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'ffb-mis-no-weight-when-supported',
      hint: 'Gravity still acts on the box even when something holds it up.',
    },
    {
      id: 'ffb-q7',
      type: 'numeric-entry',
      stem: 'A book on a desk has a weight of 4 N. The forces on the book balance and it stays still. What is the size, in newtons, of the normal contact force from the desk on the book?',
      tier: 'core',
      correctAnswer: 4,
      unit: 'N',
      xpValue: 10,
      hint: 'Balanced forces means the up arrow has the same length as the down arrow.',
    },
    {
      id: 'ffb-q8',
      type: 'numeric-entry',
      stem: 'A hanging plant pot in a Sevenoaks kitchen has a weight of 12 N. The cord holds it still. What is the size, in newtons, of the tension in the cord on the pot?',
      tier: 'core',
      correctAnswer: 12,
      unit: 'N',
      xpValue: 10,
      misconceptionId: 'ffb-mis-no-weight-when-supported',
      hint: 'The pot is still, so the up arrow and the down arrow must be the same size.',
    },
    {
      id: 'ffb-q9',
      type: 'spot-misconception',
      stem: 'Aisha is drawing a free-body diagram of a sledge on flat snow. She says, "The rope pulls the child, so I will draw the tension arrow on the rope, not on the sledge."',
      tier: 'confident',
      statements: [
        {
          text: 'Aisha is right. Tension is a property of the rope, so its arrow goes on the rope.',
          isMisconception: true,
        },
        {
          text: 'Aisha is not right. A free-body diagram of the sledge shows forces on the sledge. The tension arrow starts on the sledge and points along the rope away from the sledge.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'ffb-mis-tension-on-rope',
    },
    {
      id: 'ffb-q10',
      type: 'spot-misconception',
      stem: 'Ben is drawing a free-body diagram of a parcel held still in the air by a single rope. He says, "The rope is holding it up, so there is no weight arrow on the parcel."',
      tier: 'confident',
      statements: [
        {
          text: 'Ben is right. When something is held up, gravity does not act on it any more.',
          isMisconception: true,
        },
        {
          text: 'Ben is not right. Gravity still pulls the parcel down. The diagram needs a weight arrow down and a tension arrow up, equal in size because the parcel is still.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'ffb-mis-no-weight-when-supported',
    },
    {
      id: 'ffb-q11',
      type: 'multiple-choice',
      stem: 'A coasting cyclist on a flat road is moving forwards at a steady speed. Air resistance equals the forward push from the pedals. Which forward arrow should appear on the cyclist on a correct free-body diagram?',
      tier: 'confident',
      options: [
        'A long "motion force" arrow forwards, because the cyclist is moving.',
        'A forward push arrow from the pedals, the same length as the air resistance arrow.',
        'Both a motion force arrow and the forward push arrow, added together.',
        'No forward arrow, because the cyclist is at constant speed.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'ffb-mis-include-self-force',
      hint: 'There is no "motion force". Only real pushes or pulls go on a free-body diagram.',
    },
    {
      id: 'ffb-q12',
      type: 'multiple-choice',
      stem: 'A toy car rolls along a smooth floor at 2 m/s. Your friend draws a free-body diagram and adds a long arrow forwards labelled "2 m/s". What is wrong?',
      tier: 'confident',
      options: [
        'Nothing is wrong: 2 m/s is the size of the forward force.',
        'The arrow should be labelled in kilograms instead of metres per second.',
        'A free-body diagram shows forces only. 2 m/s is a velocity, not a force, so the arrow does not belong on the diagram.',
        'The arrow should point backwards instead of forwards.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'ffb-mis-include-velocity-arrow',
      hint: 'Look at the units. Newtons go on a free-body diagram; metres per second do not.',
    },
    {
      id: 'ffb-q13',
      type: 'drag-order',
      stem: 'Order the steps for drawing a free-body diagram of a book on a school desk.',
      tier: 'confident',
      items: [
        'Add a labelled arrow for each force acting on the book.',
        'Pick the object you want to study: the book.',
        'List the forces that act on the book: weight down, normal contact up.',
        'Redraw just the book, with the desk wiped away.',
      ],
      correctOrder: [1, 3, 2, 0],
      xpValue: 15,
      hint: 'Choose the body, then strip away the rest, then list the forces, then draw them.',
    },
    {
      id: 'ffb-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is explaining how to draw a free-body diagram of a 50 N sledge being pulled along flat snow with a 30 N rope.',
      tier: 'challenge',
      steps: [
        'Pick the object you want to study: the sledge.',
        'Redraw only the sledge as a small rectangle. The rope ends at the sledge; the child is not drawn.',
        null,
        'Add a weight arrow 50 N down and a normal contact arrow 50 N up. They are equal and opposite.',
        'Add a pull arrow 30 N to the right along the rope, and a friction arrow 10 N to the left. The pull beats friction, so the sledge speeds up to the right.',
      ],
      missingStepIndex: 2,
      correctStep:
        'List the four forces acting on the sledge: weight downwards, normal contact upwards, rope pull along the rope, and sliding friction opposing the motion.',
      xpValue: 20,
    },
    {
      id: 'ffb-q15',
      type: 'labelled-image',
      stem: 'Place the names on the free-body diagram of the book on the table (the middle diagram). Each marker takes one label.',
      tier: 'confident',
      viewBox: '0 0 800 400',
      svg: FBD_GALLERY_SVG,
      hotspots: [
        { id: 'ffb-q15-h1', x: 53, y: 28, correctLabel: 'Normal 6 N' },
        { id: 'ffb-q15-h2', x: 53, y: 55, correctLabel: 'Weight 6 N' },
      ],
      labels: [
        'Normal 6 N',
        'Weight 6 N',
        'Tension 6 N',
        'Friction 6 N',
      ],
      xpValue: 15,
      misconceptionId: 'ffb-mis-skip-normal',
      hint: 'The desk pushes the book perpendicular to its surface. Gravity always points down.',
    },
    {
      id: 'ffb-q16',
      type: 'numeric-entry',
      stem: 'A sledge has a weight of 80 N. It sits still on flat snow, so the forces on it balance vertically. What is the size, in newtons, of the normal contact force from the snow on the sledge?',
      tier: 'confident',
      correctAnswer: 80,
      unit: 'N',
      xpValue: 15,
      misconceptionId: 'ffb-mis-skip-normal',
      hint: 'Vertical arrows balance, so the up arrow matches the weight in size.',
    },
    {
      id: 'ffb-q17',
      type: 'numeric-entry',
      stem: 'A pulled box has a pull of 25 N to the right and friction of 15 N to the left on a free-body diagram. The vertical arrows balance. What is the size, in newtons, of the net horizontal force on the box?',
      tier: 'confident',
      correctAnswer: 10,
      unit: 'N',
      xpValue: 15,
      hint: 'The two horizontal arrows point in opposite directions. Subtract the shorter from the longer.',
    },
    {
      id: 'ffb-q18',
      type: 'drag-drop-builder',
      stem: 'Build the list of arrows that appear on a free-body diagram of a sledge being pulled along flat snow. Drag the four correct forces into the build area, in any order.',
      tier: 'challenge',
      parts: [
        'Weight (down)',
        'Normal contact (up)',
        'Rope pull (right, along the rope)',
        'Friction (left, opposing motion)',
      ],
      correctArrangement: [
        'Weight (down)',
        'Normal contact (up)',
        'Rope pull (right, along the rope)',
        'Friction (left, opposing motion)',
      ],
      xpValue: 20,
      hint: 'Two vertical and two horizontal arrows for a sledge being pulled along flat snow.',
    },
    {
      id: 'ffb-q19',
      type: 'multiple-choice',
      stem: 'A 30 N box hangs from a single rope in a Sevenoaks school art room. The rope holds the box still. What does a correct free-body diagram of the box show?',
      tier: 'challenge',
      options: [
        'One arrow: weight 30 N downwards from the box.',
        'One arrow: tension 30 N upwards from the box.',
        'Two arrows: weight 30 N down and tension 30 N up, both from the box and equal in length.',
        'Three arrows: weight 30 N down, tension 30 N up, and normal contact 30 N up.',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'ffb-mis-no-weight-when-supported',
      hint: 'The box is still and not touching any surface. How many forces act, and how big are they?',
    },
    {
      id: 'ffb-q20',
      type: 'multiple-choice',
      stem: 'A book of weight 5 N rests on a school library desk. A pupil leans on the book with a downwards push of 3 N. The book stays still. What is the size of the normal contact force from the desk on the book on the correct free-body diagram?',
      tier: 'challenge',
      options: [
        '5 N up, because the book itself weighs 5 N.',
        '3 N up, because the pupil only pushed 3 N.',
        '2 N up, because 5 minus 3 equals 2.',
        '8 N up, because the desk supports the weight plus the push.',
      ],
      correctIndex: 3,
      xpValue: 20,
      misconceptionId: 'ffb-mis-skip-normal',
      hint: 'Add the two downward arrows. The upward arrow must match their total because the book is still.',
    },
    {
      id: 'ffb-q21',
      type: 'free-text',
      stem: 'Theo draws a free-body diagram of a parcel held still in mid-air by a rope. He writes "Weight 40 N down" only and says there is nothing else, because the rope is part of the room. Give one fair point in his answer and one thing he should add or change. Use the rules of free-body diagrams in your reply.',
      tier: 'challenge',
      sampleAnswer:
        'A fair point in the answer is that Theo correctly drew the weight arrow on the parcel, pointing down, and labelled it in newtons. Gravity does pull the parcel down with 40 N, and that arrow belongs on the parcel. The change he should make is to add a tension arrow on the parcel. The rope pulls the parcel upwards along the rope, away from the parcel. Because the parcel is still in mid-air, the two arrows must be equal in size, so tension is 40 N upwards. Without that second arrow the diagram is wrong, because two forces are acting on the parcel, not one. The rope is not part of the room; the rope acts on the parcel and so its pull (tension) must be drawn.',
      keywords: ['weight', 'tension', 'parcel', 'upwards', 'equal', '40'],
      xpValue: 20,
      misconceptionId: 'ffb-mis-arrows-from-floor',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics examiner report June 2022, Paper 1F, candidates draw forces the object exerts on others rather than forces on the object
    {
      id: 'ffb-mis-forces-on-other-object',
      description:
        'Drawing the forces an object exerts on other things, rather than the forces other things exert on the object, on a free-body diagram.',
      triggerAnswer: 'forces-on-other-object',
      correction:
        'A free-body diagram shows the forces acting on the chosen object only. Each arrow starts on the body and points in the direction of that force on the body.',
      reExplanation:
        'For a book on a desk, draw only forces that act on the book. The book pushes down on the desk too, but that arrow goes on a diagram of the desk, not the book. Pick the body, then ask: what pushes or pulls on it? Draw each of those forces as an arrow starting on the body.',
    },
    // Source: CGP KS3 Physics Study Guide Common Mistake box on weight and supported objects
    {
      id: 'ffb-mis-no-weight-when-supported',
      description:
        'Believing that when an object is held up by a rope or sat on a surface, gravity no longer acts on it, so the free-body diagram has no weight arrow.',
      triggerAnswer: 'no-weight-when-supported',
      correction:
        'Gravity always pulls an object down while it is near the Earth. A held or supported object still has a weight arrow; the support force balances it.',
      reExplanation:
        'A 40 N parcel held still by a rope has weight 40 N down and tension 40 N up. Both arrows belong on the parcel. The parcel is still because the two arrows are equal and opposite, not because gravity has switched off. Holding something up does not remove its weight; it adds an upward arrow to balance the weight.',
    },
    // Source: Edexcel GCSE Physics examiner report June 2019, Paper 1PH0/1F, candidates draw all arrows the same length regardless of force size
    {
      id: 'ffb-mis-arrow-length-arbitrary',
      description:
        'Believing arrow length on a free-body diagram does not matter, so drawing every force as the same length even when the values differ.',
      triggerAnswer: 'arrow-length-arbitrary',
      correction:
        'Arrow length stands for the size of the force in newtons. A 20 N force is drawn about twice as long as a 10 N force on the same diagram.',
      reExplanation:
        'When a 30 N pull and a 10 N friction act on a sledge, the pull arrow must be about three times as long as the friction arrow. Equal length arrows would say the forces are equal, which is the opposite of what the scene shows. Length is the picture of magnitude.',
    },
    // Source: OCR GCSE Physics examiner report June 2022, J259/02, candidates add a "motion force" forwards on a moving object
    {
      id: 'ffb-mis-include-self-force',
      description:
        'Drawing a separate forwards arrow on a moving object to stand for its motion, on top of any real pushes or pulls.',
      triggerAnswer: 'include-self-force',
      correction:
        'There is no "force of motion" on a free-body diagram. Only real pushes or pulls from outside the body are drawn. Movement at constant speed is shown by balanced arrows.',
      reExplanation:
        'A coasting cyclist on a flat road moves forwards, but the diagram shows a forwards push from the pedals balanced by a backwards drag from the air. No extra arrow is added for "the motion". Movement itself is not a force. If you cannot say what pushes or pulls the body, do not draw the arrow.',
    },
    // Source: AQA GCSE Physics examiner report June 2023, Paper 1F, candidates label tension on the rope rather than on the body
    {
      id: 'ffb-mis-tension-on-rope',
      description:
        'Placing the tension arrow on the rope rather than on the body the rope pulls, on a free-body diagram of the body.',
      triggerAnswer: 'tension-on-rope',
      correction:
        'A free-body diagram of an object shows forces on that object. The tension arrow starts on the body and points along the rope, away from the body.',
      reExplanation:
        'A sledge pulled by a rope has a tension arrow on the sledge, with the arrow tail on the sledge and the head pointing along the rope toward the child. The rope is the route the pull travels along; the force itself acts on the sledge. If your diagram is the sledge, every arrow starts on the sledge.',
    },
    // Source: CGP KS3 Physics Workbook Common Mistake box on mixing motion and force arrows
    {
      id: 'ffb-mis-include-velocity-arrow',
      description:
        'Drawing a velocity or speed arrow (in metres per second) on a free-body diagram, alongside the force arrows.',
      triggerAnswer: 'include-velocity-arrow',
      correction:
        'Free-body diagrams show forces in newtons only. Velocity belongs on a separate motion arrow or speed-time graph, not mixed in with the force arrows.',
      reExplanation:
        'On a free-body diagram of a toy car rolling at 2 m/s, you do not draw a "2 m/s arrow". You draw the real pushes or pulls: a weight 6 N down, a normal contact 6 N up, and any friction or push along the floor. Speed is a useful piece of information about motion, but a force diagram is the wrong place for it.',
    },
    // Source: Edexcel GCSE Physics examiner report June 2022, Paper 1PH0/1F, candidates omit normal contact on objects sat on surfaces
    {
      id: 'ffb-mis-skip-normal',
      description:
        'Forgetting the normal contact arrow on a free-body diagram of an object sat on a surface, so only the weight arrow appears.',
      triggerAnswer: 'skip-normal',
      correction:
        'When an object touches a surface, the surface pushes back on it perpendicular to the surface. That push is called normal contact and must appear as an upward arrow.',
      reExplanation:
        'For a 4 N book on a desk, the desk pushes back on the book with 4 N upwards. The diagram has two arrows: weight 4 N down and normal contact 4 N up. Without the normal arrow, the diagram says the book has only weight on it, which would mean it should fall through the desk. Always add the normal arrow when an object sits on something.',
    },
    // Source: OCR GCSE Physics examiner report June 2023, J259/01, candidates draw arrows starting at the floor or rope rather than on the body
    {
      id: 'ffb-mis-arrows-from-floor',
      description:
        'Drawing force arrows starting at the floor, rope, or ceiling rather than at the chosen body, on a free-body diagram.',
      triggerAnswer: 'arrows-from-floor',
      correction:
        'Every arrow on a free-body diagram starts on the body you are studying. The tail of the arrow sits on the body; the head points in the direction of that force on the body.',
      reExplanation:
        'A normal contact arrow on a book starts on the book and points up, even though the push comes from the desk below. A tension arrow on a sledge starts on the sledge and points along the rope, even though the rope reaches the child holding it. The diagram is about the body; the arrows belong to the body.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const forcesFreeBodyZoneNodes = [forcesFreeBody]
