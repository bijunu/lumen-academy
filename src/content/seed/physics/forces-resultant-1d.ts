import type { SkillNode } from '@/types/content'

const TUG_OF_WAR_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Tug of war on a school field</text>
    <!-- Rope -->
    <line x1="120" y1="200" x2="680" y2="200" stroke-width="5" />
    <!-- Left team marker -->
    <circle cx="160" cy="200" r="14" fill="currentColor" />
    <text x="160" y="240" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Reds</text>
    <!-- Right team marker -->
    <circle cx="640" cy="200" r="14" fill="currentColor" />
    <text x="640" y="240" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Blues</text>
    <!-- Left pull arrow (shorter) -->
    <line x1="280" y1="160" x2="170" y2="160" />
    <polygon points="180,153 165,160 180,167" fill="currentColor" stroke="none" />
    <text x="225" y="148" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Reds pull 280 N left</text>
    <!-- Right pull arrow (longer) -->
    <line x1="520" y1="160" x2="650" y2="160" />
    <polygon points="640,153 655,160 640,167" fill="currentColor" stroke="none" />
    <text x="585" y="148" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Blues pull 320 N right</text>
    <!-- Positive direction marker -->
    <line x1="380" y1="290" x2="430" y2="290" stroke-dasharray="4 4" />
    <polygon points="422,283 432,290 422,297" fill="currentColor" stroke="none" />
    <text x="405" y="310" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">positive direction</text>
    <!-- Resultant -->
    <text x="400" y="350" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Resultant = 320 right minus 280 left = 40 N to the right</text>
  </g>
`

const TROLLEY_TWO_PUSHERS_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Two pushers on a supermarket trolley</text>
    <line x1="60" y1="240" x2="740" y2="240" />
    <!-- Trolley body -->
    <rect x="340" y="170" width="120" height="60" fill="currentColor" />
    <circle cx="360" cy="240" r="10" fill="currentColor" />
    <circle cx="440" cy="240" r="10" fill="currentColor" />
    <!-- Left pusher arrow (Ben pushes right with 35 N from the left side) -->
    <line x1="260" y1="200" x2="330" y2="200" />
    <polygon points="320,193 335,200 320,207" fill="currentColor" stroke="none" />
    <text x="290" y="188" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Ben pushes 35 N to the right</text>
    <!-- Right pusher arrow (Aisha on the right pushes left with 50 N) -->
    <line x1="540" y1="200" x2="470" y2="200" />
    <polygon points="480,193 465,200 480,207" fill="currentColor" stroke="none" />
    <text x="600" y="188" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Aisha pushes 50 N to the left</text>
    <!-- Resultant -->
    <text x="400" y="300" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Take right as positive. 35 right minus 50 right = 15 N to the left.</text>
    <text x="400" y="325" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">The trolley speeds up to the left in the direction of the larger push.</text>
  </g>
`

const LIFT_CABLE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="300" y="40" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Lift starting to rise in a Leeds office</text>
    <!-- Cable -->
    <line x1="300" y1="60" x2="300" y2="160" stroke-width="4" />
    <!-- Lift box -->
    <rect x="220" y="160" width="160" height="120" fill="currentColor" />
    <text x="300" y="225" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="white">Lift</text>
    <!-- Tension arrow up (longer) -->
    <line x1="300" y1="160" x2="300" y2="60" />
    <polygon points="292,72 300,55 308,72" fill="currentColor" stroke="none" />
    <text x="380" y="110" font-size="13" font-weight="700" stroke="none" fill="currentColor">Tension 800 N up</text>
    <!-- Weight arrow down (shorter) -->
    <line x1="300" y1="280" x2="300" y2="370" />
    <polygon points="292,358 300,375 308,358" fill="currentColor" stroke="none" />
    <text x="380" y="335" font-size="13" font-weight="700" stroke="none" fill="currentColor">Weight 750 N down</text>
    <!-- Positive direction marker -->
    <line x1="100" y1="200" x2="100" y2="140" stroke-dasharray="4 4" />
    <polygon points="93,150 100,135 107,150" fill="currentColor" stroke="none" />
    <text x="100" y="225" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">positive direction</text>
    <!-- Resultant -->
    <text x="300" y="395" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Resultant = 800 up minus 750 down = 50 N upwards. Lift starts to rise.</text>
  </g>
`

export const forcesResultant1D: SkillNode = {
  id: 'physics-forces-resultant-1d',
  title: 'Resultant Force in One Dimension',
  description:
    'Add force arrows that act along the same line to find the resultant force, the single force with the same effect as all of them together. Pick a positive direction, treat forces with the chosen direction as positive and those against it as negative, then add. A resultant of zero gives balanced forces; a non-zero resultant gives unbalanced forces that change the motion in the direction of the resultant.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-forces',
  zoneName: 'Forces',
  tier: 'confident',
  prerequisites: ['physics-forces-balanced', 'physics-forces-free-body'],
  curriculum: {
    ks3Objective:
      'Using force arrows in diagrams, adding forces in one dimension, balanced and unbalanced forces.',
    awardingBodies: {
      aqa: '4.5.1.4 Resultant forces; calculating the resultant of two forces acting in a straight line (GCSE Physics 8463)',
      edexcel: 'Topic 1 Motion and forces, 1.21 Resultant of forces that act along a line (GCSE Physics 1PH0)',
      ocr: 'P2.2 Newton’s laws; resultant force as the single force with the same effect (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'fr1-scene-tug',
      title: 'Tug of War: Resultant Along the Rope',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read the two pulls on the rope and work out the resultant force.',
      data: {
        viewBox: '0 0 800 400',
        svg: TUG_OF_WAR_SVG,
        hotspots: [
          {
            id: 'fr1-tug-reds',
            x: 28,
            y: 37,
            label: 'Reds pull 280 N to the left',
            description:
              'The Reds drag the rope to the left with a 280 N pull. The arrow length stands for the size of the pull.',
          },
          {
            id: 'fr1-tug-blues',
            x: 72,
            y: 37,
            label: 'Blues pull 320 N to the right',
            description:
              'The Blues drag the rope to the right with a 320 N pull. The arrow is drawn longer to show the bigger force.',
          },
          {
            id: 'fr1-tug-direction',
            x: 50,
            y: 75,
            label: 'Pick a positive direction',
            description:
              'Take right as positive. Forces to the right count as positive, forces to the left count as negative.',
          },
          {
            id: 'fr1-tug-resultant',
            x: 50,
            y: 88,
            label: 'Resultant force',
            description:
              'Add the two forces along the line: positive 320 N plus minus 280 N gives positive 40 N. The resultant is 40 N to the right, and the rope creeps that way.',
          },
        ],
      },
    },
    {
      id: 'fr1-scene-trolley',
      title: 'Two Pushers on a Trolley: Same Effect as One Push',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to add the two pushes and find the single force with the same effect.',
      data: {
        viewBox: '0 0 800 400',
        svg: TROLLEY_TWO_PUSHERS_SVG,
        hotspots: [
          {
            id: 'fr1-tr-ben',
            x: 36,
            y: 47,
            label: 'Ben pushes 35 N to the right',
            description:
              'Ben stands on the left of the trolley and pushes it to the right with 35 N. His force arrow points the same way as the positive direction.',
          },
          {
            id: 'fr1-tr-aisha',
            x: 75,
            y: 47,
            label: 'Aisha pushes 50 N to the left',
            description:
              'Aisha stands on the right of the trolley and pushes it to the left with 50 N. Her force arrow points against the chosen positive direction.',
          },
          {
            id: 'fr1-tr-resultant',
            x: 50,
            y: 75,
            label: 'Resultant force',
            description:
              'Take right as positive. Ben contributes positive 35 N. Aisha contributes negative 50 N. Add: 35 plus minus 50 is minus 15. The resultant is 15 N to the left.',
          },
          {
            id: 'fr1-tr-effect',
            x: 50,
            y: 82,
            label: 'Same effect as one force',
            description:
              'Replace the two pushes with a single 15 N push to the left. The trolley behaves exactly the same as with the two real pushes on it.',
          },
        ],
      },
    },
    {
      id: 'fr1-scene-lift',
      title: 'A Lift Starting to Rise: Tension Beats Weight',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read the two vertical forces on the lift and find the resultant.',
      data: {
        viewBox: '0 0 600 400',
        svg: LIFT_CABLE_SVG,
        hotspots: [
          {
            id: 'fr1-li-tension',
            x: 65,
            y: 28,
            label: 'Cable tension 800 N up',
            description:
              'The cable pulls the lift upwards with 800 N. The arrow is drawn long to show the bigger force.',
          },
          {
            id: 'fr1-li-weight',
            x: 65,
            y: 82,
            label: 'Weight 750 N down',
            description:
              'Gravity pulls the lift downwards with 750 N. The arrow is drawn shorter to show the smaller force.',
          },
          {
            id: 'fr1-li-direction',
            x: 17,
            y: 45,
            label: 'Take upwards as positive',
            description:
              'Upwards is the chosen positive direction. The tension is positive 800 N. The weight is negative 750 N.',
          },
          {
            id: 'fr1-li-resultant',
            x: 50,
            y: 96,
            label: 'Resultant 50 N up',
            description:
              'Add along the line: positive 800 plus minus 750 is positive 50. The resultant is 50 N upwards, so the lift starts to rise from rest.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'fr1-worked-1',
      title: 'A 750 N lift on an 800 N cable',
      steps: [
        {
          explanation:
            'Pick the object you are studying. The object is the lift car alone. Every force on the diagram must act on this lift.',
        },
        {
          explanation:
            'List the forces along the line of motion. The cable pulls the lift upwards with 800 N (tension). Gravity pulls it downwards with 750 N (weight).',
          maths: 'Tension = 800 N up, Weight = 750 N down',
        },
        {
          explanation:
            'Pick a positive direction. Take upwards as positive. Forces pointing up count as positive numbers, forces pointing down count as negative numbers.',
        },
        {
          explanation:
            'Write each force with the right sign. The tension is positive 800 N. The weight is negative 750 N.',
          maths: 'F1 = +800 N, F2 = -750 N',
        },
        {
          explanation:
            'Add the two forces along the line. Positive 800 plus negative 750 gives positive 50.',
          maths: 'Resultant = 800 + (-750) = +50 N',
        },
        {
          explanation:
            'Read the answer back as a force in a direction. The resultant is 50 N upwards. The forces are unbalanced, the lift starts to rise from rest in the positive (upwards) direction.',
        },
      ],
    },
    {
      id: 'fr1-worked-2',
      title: 'A sledge with a forwards pull and friction',
      steps: [
        {
          explanation:
            'Set the scene. A child pulls a sledge along a grassy school field with a forwards pull of 60 N along the rope. The grass drags backwards with 22 N of friction.',
        },
        {
          explanation:
            'Pick the object. The object is the sledge. The two horizontal forces in the diagram are the rope pull (forwards) and the friction (backwards).',
        },
        {
          explanation:
            'Pick a positive direction. Take forwards as positive. The rope pull is then positive 60 N, and the friction is negative 22 N.',
          maths: 'F_pull = +60 N, F_friction = -22 N',
        },
        {
          explanation:
            'Add the two forces along the line of motion. Positive 60 plus negative 22 gives positive 38.',
          maths: 'Resultant = 60 + (-22) = +38 N',
        },
        {
          explanation:
            'Read the sign of the answer. The resultant is positive, so it points the same way as forwards. The resultant force on the sledge is 38 N forwards.',
        },
        {
          explanation:
            'Predict the motion. The forces are unbalanced. The sledge speeds up in the forwards direction, the direction of the resultant.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'fr1-q1',
      type: 'multiple-choice',
      stem: 'Two forces act on a box along the same line. A 40 N force pushes it to the right, and a 25 N force pushes it to the left. What is the resultant force on the box?',
      tier: 'core',
      options: [
        '65 N to the right.',
        '15 N to the left.',
        '15 N to the right.',
        '0 N.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'fr1-mis-add-instead-of-subtract',
      hint: 'Take right as positive. Add positive 40 and negative 25.',
    },
    {
      id: 'fr1-q2',
      type: 'multiple-choice',
      stem: 'A school caretaker pushes a wheelie bin with a 60 N force forwards. The wind pushes back on the bin with a 60 N force from in front. What is the resultant force on the bin?',
      tier: 'core',
      options: [
        '120 N forwards.',
        '60 N forwards.',
        '0 N.',
        '60 N backwards.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'fr1-mis-add-instead-of-subtract',
      hint: 'Two equal and opposite forces sum to zero.',
    },
    {
      id: 'fr1-q3',
      type: 'numeric-entry',
      stem: 'A trolley has a 90 N forwards push and a 30 N backwards friction acting on it along the same line. Take forwards as positive. What is the resultant force, in newtons, in the forwards direction?',
      tier: 'core',
      correctAnswer: 60,
      unit: 'N',
      xpValue: 10,
      hint: 'Add positive 90 and negative 30.',
    },
    {
      id: 'fr1-q4',
      type: 'numeric-entry',
      stem: 'Two children pull a rope at Sevenoaks School in a tug of war. Each side pulls with 220 N along the rope. What is the resultant force on the rope, in newtons?',
      tier: 'core',
      correctAnswer: 0,
      unit: 'N',
      xpValue: 10,
      misconceptionId: 'fr1-mis-balanced-not-zero',
      hint: 'Equal and opposite pulls add to zero.',
    },
    {
      id: 'fr1-q5',
      type: 'multiple-choice',
      stem: 'A lift cable pulls upwards on a lift car with 1200 N. The weight of the car pulls down with 1000 N. Taking up as positive, what is the resultant force on the car?',
      tier: 'core',
      options: [
        '2200 N up.',
        '200 N down.',
        '0 N.',
        '200 N up.',
      ],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Add positive 1200 and negative 1000.',
    },
    {
      id: 'fr1-q6',
      type: 'numeric-entry',
      stem: 'A sledge is pulled along the snow with a 45 N forwards pull. Friction with the snow drags backwards on the sledge with 18 N. What is the resultant force on the sledge, in newtons, forwards?',
      tier: 'core',
      correctAnswer: 27,
      unit: 'N',
      xpValue: 10,
      hint: 'Forwards positive. 45 minus 18.',
    },
    {
      id: 'fr1-q7',
      type: 'multiple-choice',
      stem: 'Two forces act on the same object along the same line. The resultant force is zero. What can you say about the object’s motion?',
      tier: 'core',
      options: [
        'The object must be stood still.',
        'The object’s motion is not changing: still if it was still, moving at the same speed in a straight line if it was already moving.',
        'The object speeds up in the direction of the larger arrow.',
        'The object slows to a stop straight away.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'fr1-mis-zero-resultant-means-still',
      hint: 'Zero resultant means balanced forces. Motion does not have to be zero.',
    },
    {
      id: 'fr1-q8',
      type: 'multiple-choice',
      stem: 'A box has a 50 N force to the right and a 30 N force to the left along the same line. The resultant force is 20 N to the right. Which sentence best describes the single-force replacement?',
      tier: 'confident',
      options: [
        'A 20 N force to the right has the same effect on the box as the two real forces.',
        'A 20 N force to the left would have the same effect as the two real forces.',
        'An 80 N force to the right would replace the two forces with the same effect.',
        'A 50 N force to the right would replace the two forces because it is the largest.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'fr1-mis-resultant-extra-force',
      hint: 'The resultant force is the one force that has the same effect as the whole set.',
    },
    {
      id: 'fr1-q9',
      type: 'numeric-entry',
      stem: 'A Channel ferry is being towed in calm dock water. The tug pulls forwards on the ferry with 1200 N along the tow line. Water drag acts backwards on the ferry with 1700 N. Take forwards as positive. What is the resultant force on the ferry, in newtons, forwards?',
      tier: 'confident',
      correctAnswer: -500,
      unit: 'N',
      xpValue: 15,
      misconceptionId: 'fr1-mis-sign-of-result',
      hint: 'Forwards positive: 1200 minus 1700.',
    },
    {
      id: 'fr1-q10',
      type: 'numeric-entry',
      stem: 'Three forces act on a trolley along the same line. To the right: a 60 N push and a 20 N push. To the left: a 70 N friction force. Take right as positive. What is the resultant force on the trolley, in newtons, to the right?',
      tier: 'confident',
      correctAnswer: 10,
      unit: 'N',
      xpValue: 15,
      misconceptionId: 'fr1-mis-only-two-forces',
      hint: 'Add the two right-pointing forces, then subtract the left-pointing one.',
    },
    {
      id: 'fr1-q11',
      type: 'multiple-choice',
      stem: 'A lift in a Leeds office is descending at a steady speed. The cable tension is 600 N upwards and the weight is 600 N downwards. What is the resultant force on the lift, and what does its motion do next?',
      tier: 'challenge',
      options: [
        '1200 N upwards, and the lift will speed up upwards.',
        '0 N, and the lift will keep descending at the same steady speed.',
        '0 N, and the lift will stop straight away because the forces balance.',
        '600 N downwards, and the lift will speed up downwards.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'fr1-mis-zero-resultant-means-still',
      hint: 'A resultant of zero leaves the motion as it was. The lift was already moving.',
    },
    {
      id: 'fr1-q12',
      type: 'multiple-choice',
      stem: 'A small boat on a Dover-bound crossing has a 320 N forwards thrust from the motor. Water drag acts backwards on the boat with 320 N along the same line. Taking forwards as positive, what is the resultant force on the boat?',
      tier: 'confident',
      options: [
        '640 N forwards, because both forces act on the boat together.',
        '0 N, so the boat keeps moving at the same speed in a straight line.',
        '320 N forwards, because the motor must beat the drag.',
        '320 N backwards, because drag stops the boat.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'fr1-mis-balanced-not-zero',
      hint: 'Equal and opposite forces along the same line give zero.',
    },
    {
      id: 'fr1-q13',
      type: 'spot-misconception',
      stem: 'Priya is finding the resultant of a 40 N push to the right and a 25 N push to the left. She writes: "Both are pushes, so I add them: 40 plus 25 = 65 N. The resultant is 65 N." Which response is correct?',
      tier: 'confident',
      statements: [
        {
          text: 'Priya is right. Push forces always add up, no matter which way they point.',
          isMisconception: true,
        },
        {
          text: 'Priya is not right. The two pushes point in opposite directions along the same line. Take one direction as positive: positive 40 plus minus 25 gives a resultant of 15 N in the positive direction.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fr1-mis-add-instead-of-subtract',
    },
    {
      id: 'fr1-q14',
      type: 'spot-misconception',
      stem: 'Owen says, "If the resultant force on a moving cyclist is zero, the cyclist must come to a stop, because zero force means no motion." Which response is correct?',
      tier: 'confident',
      statements: [
        {
          text: 'Owen is right. A zero resultant means the moving object will stop straight away.',
          isMisconception: true,
        },
        {
          text: 'Owen is not right. A zero resultant means the motion is not changing. A cyclist already moving will keep moving at the same speed in a straight line.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fr1-mis-zero-resultant-means-still',
    },
    {
      id: 'fr1-q15',
      type: 'drag-order',
      stem: 'Place the four steps in the right order for finding the resultant force on an object pulled along a flat path with friction acting back on it.',
      tier: 'confident',
      items: [
        'Add the forces along the line: positive forwards plus negative backwards.',
        'Pick a positive direction along the line of motion.',
        'List the forces on the object that act along that line, with their sizes.',
        'State the resultant as a number and a direction.',
      ],
      correctOrder: [2, 1, 0, 3],
      xpValue: 15,
      hint: 'List, then choose a direction, then add, then state the answer.',
    },
    {
      id: 'fr1-q16',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is finding the resultant on a sledge with a 70 N forwards pull and 25 N friction acting backwards.',
      tier: 'confident',
      steps: [
        'Pick the object: the sledge.',
        'List the forces along the line: 70 N forwards (pull) and 25 N backwards (friction).',
        'Take forwards as positive. The pull is positive 70 N and the friction is negative 25 N.',
        null,
        'Read the answer in words: the resultant force on the sledge is 45 N forwards.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Add the forces along the line: positive 70 plus negative 25 gives positive 45, so the resultant is positive 45 N.',
      xpValue: 15,
    },
    {
      id: 'fr1-q17',
      type: 'numeric-entry',
      stem: 'A delivery lorry on a flat stretch of the M25 has a forwards engine force of 1800 N along the road. Drag on the lorry (air and friction together) acts backwards along the road with 1500 N. Take forwards as positive. What is the resultant force on the lorry, in newtons, forwards?',
      tier: 'challenge',
      correctAnswer: 300,
      unit: 'N',
      xpValue: 20,
      hint: 'Forwards positive. 1800 minus 1500.',
    },
    {
      id: 'fr1-q18',
      type: 'numeric-entry',
      stem: 'A Channel ferry is towed out of a harbour by two tugs in a line. Tug A pulls forwards with 1200 N along the tow line. Tug B, behind Tug A on the same line, pulls forwards with 900 N along the tow line. Water drag on the ferry acts backwards along the line with 1700 N. Taking forwards as positive, what is the resultant force on the ferry, in newtons, forwards?',
      tier: 'challenge',
      correctAnswer: 400,
      unit: 'N',
      xpValue: 20,
      misconceptionId: 'fr1-mis-only-two-forces',
      hint: 'Three forces. Sum the two forwards pulls, then subtract the backwards drag.',
    },
    {
      id: 'fr1-q19',
      type: 'multiple-choice',
      stem: 'A ScotRail train sets off from a platform. The forwards engine force on the train along the track is 12 000 N. Drag from the air and friction on the rails act backwards along the track with 4500 N. Taking forwards as positive, what is the resultant force on the train, and what does its motion do?',
      tier: 'challenge',
      options: [
        '16 500 N forwards; the train speeds up because both forces add together.',
        '4500 N backwards; the train slows down at once.',
        '7500 N forwards; the train speeds up in the forwards direction.',
        '0 N; the engine force and drag cancel out.',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'fr1-mis-add-instead-of-subtract',
      hint: 'Subtract the backwards drag from the forwards engine force.',
    },
    {
      id: 'fr1-q20',
      type: 'multiple-choice',
      stem: 'A 700 N skydiver in mid-fall has air resistance acting upwards on her along the vertical line. At one moment, the upwards air resistance is 700 N. Take upwards as positive. What is the resultant force on the skydiver, and what does her motion do?',
      tier: 'challenge',
      options: [
        '0 N; she stops in mid-air.',
        '1400 N down; she speeds up downwards.',
        '700 N down; she speeds up downwards.',
        '0 N; she falls at a steady speed in a straight line.',
      ],
      correctIndex: 3,
      xpValue: 20,
      misconceptionId: 'fr1-mis-zero-resultant-means-still',
      hint: 'Resultant zero leaves the motion as it was. She was already falling.',
    },
    {
      id: 'fr1-q21',
      type: 'multiple-choice',
      stem: 'A Snowdon walker drags a 50 N sledge of camping gear up a gentle path. Friction with the path acts backwards along the path with 32 N. Drag from the wind acts backwards along the same line with 6 N. Taking forwards (along the path) as positive, what is the resultant force along the path?',
      tier: 'challenge',
      options: [
        '12 N forwards.',
        '88 N forwards.',
        '38 N backwards.',
        '12 N backwards.',
      ],
      correctIndex: 0,
      xpValue: 20,
      misconceptionId: 'fr1-mis-only-two-forces',
      hint: 'Forwards positive. 50 minus 32 minus 6.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics examiner report June 2022, Paper 1F (8463), on items asking for the resultant of two opposite forces; many learners summed the magnitudes regardless of direction.
    {
      id: 'fr1-mis-add-instead-of-subtract',
      description:
        'Adding the sizes of two opposite forces along the same line to find the resultant, instead of treating one direction as negative and adding with signs.',
      triggerAnswer: 'add-instead-of-subtract',
      correction:
        'When two forces act in opposite directions along the same line, take one direction as positive and add with signs. The resultant is the difference, in the direction of the larger force.',
      reExplanation:
        'For a 40 N push to the right and a 25 N push to the left, take right as positive. The forces are positive 40 N and negative 25 N. Adding them gives positive 15 N, so the resultant is 15 N to the right. Adding the sizes (40 plus 25) gives 65 N, which would only be right if both arrows pointed the same way.',
    },
    // Source: Edexcel GCSE Physics examiner report June 2019, Paper 1PH0/1F, item on a lift moving at constant speed; learners thought a zero resultant force meant the lift was stood still.
    {
      id: 'fr1-mis-zero-resultant-means-still',
      description:
        'Believing a resultant force of zero means the object must be stood still, so any moving object must have a non-zero resultant on it.',
      triggerAnswer: 'zero-resultant-means-still',
      correction:
        'A zero resultant means the motion is not changing. A still object stays still, and an object moving in a straight line keeps moving at the same speed.',
      reExplanation:
        'A lift descending at a steady speed has its cable tension equal to its weight, so the resultant is zero. The lift carries on at the same speed because nothing is changing its motion. A still book on a desk also has a zero resultant. The same rule covers both.',
    },
    // Source: OCR GCSE Physics examiner report June 2022, J259/02, learners gave the resultant in newtons but did not state the direction, scoring half marks.
    {
      id: 'fr1-mis-sign-of-result',
      description:
        'Reporting the size of the resultant force along a line without giving its direction, or giving the wrong direction because the sign of the answer was ignored.',
      triggerAnswer: 'sign-of-result',
      correction:
        'State the resultant as both a size and a direction. A negative sign on your answer means the resultant points in the opposite direction to the one you chose as positive.',
      reExplanation:
        'A ferry has a 1200 N forwards tow and a 1700 N backwards drag. Taking forwards as positive, the resultant is 1200 minus 1700, which is minus 500. The minus sign means the resultant is 500 N backwards. Answering "500 N" loses the direction; answering "500 N forwards" gets the direction wrong.',
    },
    // Source: CGP KS3 Physics Workbook (Years 7-9), Forces chapter, Common mistake callout on resultant forces in tug of war and similar setups, where learners report "balanced" as a number when asked for the resultant.
    {
      id: 'fr1-mis-balanced-not-zero',
      description:
        'Writing "balanced" as the resultant force when two equal and opposite forces act, rather than the number zero in newtons.',
      triggerAnswer: 'balanced-not-zero',
      correction:
        'In fact, balanced is a description of the forces, not a number. The resultant force of two equal and opposite forces is 0 N.',
      reExplanation:
        'Two tug of war teams each pulling at 220 N give a resultant of positive 220 plus negative 220, which is zero. So the resultant force on the rope is 0 N. "Balanced" is the right word for the situation, but the question asks for the number.',
    },
    // Source: AQA GCSE Physics examiner report June 2023, Paper 1F (8463), on a three-force problem along a line; many learners summed only the first two forces and ignored the third.
    {
      id: 'fr1-mis-only-two-forces',
      description:
        'When three forces act along the same line, adding only two of them and ignoring the third, instead of adding all of them with signs.',
      triggerAnswer: 'only-two-forces',
      correction:
        'Every force on the line of motion goes into the sum. List them all, set the sign of each from its direction, then add along the line.',
      reExplanation:
        'On a trolley, a 60 N push to the right, a 20 N push to the right, and a 70 N friction to the left give a resultant of positive 60 plus positive 20 plus negative 70, which is positive 10. So the resultant is 10 N to the right. Missing the second push would have given minus 10, the wrong sign and the wrong direction.',
    },
    // Source: Edexcel GCSE Physics examiner report June 2022, Paper 1PH0/1F, item on resultant force as the single force with the same effect; learners named the resultant as a separate extra force on the diagram.
    {
      id: 'fr1-mis-resultant-extra-force',
      description:
        'Treating the resultant force as an extra force to draw on the free-body diagram, on top of the real forces, instead of as the single force with the same effect as them all.',
      triggerAnswer: 'resultant-extra-force',
      correction:
        'The resultant is not a new force. It is the single force that would have the same effect on the object as all the real forces together.',
      reExplanation:
        'A box has a 50 N push to the right and a 30 N push to the left. The resultant is 20 N to the right. Either show the two real forces, or replace them with one 20 N arrow to the right. Drawing all three on the same diagram double-counts the same effect.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const forcesResultant1DZoneNodes = [forcesResultant1D]
