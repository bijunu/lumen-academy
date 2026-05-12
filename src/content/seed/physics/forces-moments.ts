import type { SkillNode, Zone } from '@/types/content'

const SEESAW_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">See-saw in a Sevenoaks park</text>
    <!-- Pivot triangle -->
    <polygon points="380,260 420,260 400,220" fill="currentColor" stroke="none" />
    <!-- Plank, tilted slightly so geometry is visible but balanced -->
    <line x1="120" y1="220" x2="680" y2="220" stroke-width="6" />
    <!-- Lighter child on the long side (left) -->
    <circle cx="180" cy="200" r="14" fill="currentColor" />
    <line x1="180" y1="214" x2="180" y2="250" />
    <text x="180" y="275" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">200 N</text>
    <text x="180" y="293" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">3 m from pivot</text>
    <line x1="180" y1="220" x2="180" y2="300" stroke-dasharray="4 4" />
    <!-- Heavier child on the short side (right) -->
    <circle cx="600" cy="200" r="18" fill="currentColor" />
    <line x1="600" y1="218" x2="600" y2="250" />
    <text x="600" y="275" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">300 N</text>
    <text x="600" y="293" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">2 m from pivot</text>
    <line x1="600" y1="220" x2="600" y2="300" stroke-dasharray="4 4" />
    <!-- Distance markers -->
    <line x1="180" y1="320" x2="400" y2="320" />
    <text x="290" y="335" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">3 m</text>
    <line x1="400" y1="320" x2="600" y2="320" />
    <text x="500" y="335" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">2 m</text>
    <text x="400" y="370" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">200 N x 3 m = 600 N m anticlockwise; 300 N x 2 m = 600 N m clockwise. Balanced.</text>
  </g>
`

const SPANNER_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Spanner on a stiff nut</text>
    <!-- Nut at pivot -->
    <circle cx="160" cy="220" r="22" fill="currentColor" />
    <text x="160" y="225" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="white">nut</text>
    <!-- Spanner arm long -->
    <rect x="160" y="210" width="420" height="22" fill="currentColor" />
    <!-- Force arrow on the long handle -->
    <line x1="540" y1="232" x2="540" y2="310" />
    <polygon points="532,298 540,315 548,298" fill="currentColor" stroke="none" />
    <text x="555" y="285" font-size="13" font-weight="700" stroke="none" fill="currentColor">F = 25 N</text>
    <!-- Distance marker -->
    <line x1="160" y1="170" x2="540" y2="170" stroke-dasharray="4 4" />
    <text x="350" y="160" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">d = 0.40 m</text>
    <!-- Comparison: short spanner -->
    <text x="400" y="380" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">M = F x d = 25 N x 0.40 m = 10 N m turning effect on the nut.</text>
  </g>
`

const DOOR_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Push a door at the hinge or at the handle</text>
    <!-- Hinge column (pivot) -->
    <rect x="120" y="80" width="14" height="240" fill="currentColor" />
    <text x="127" y="350" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">hinge (pivot)</text>
    <!-- Door panel -->
    <rect x="134" y="100" width="400" height="200" fill="none" stroke="currentColor" stroke-width="2" />
    <!-- Near-hinge push -->
    <line x1="100" y1="160" x2="190" y2="160" />
    <polygon points="182,153 195,160 182,167" fill="currentColor" stroke="none" />
    <text x="220" y="155" font-size="12" stroke="none" fill="currentColor">push 20 N near hinge</text>
    <line x1="134" y1="180" x2="190" y2="180" stroke-dasharray="4 4" />
    <text x="162" y="195" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">d = 0.05 m</text>
    <text x="220" y="218" font-size="11" stroke="none" fill="currentColor">M = 20 x 0.05 = 1 N m</text>
    <!-- At-handle push -->
    <line x1="450" y1="260" x2="540" y2="260" />
    <polygon points="532,253 545,260 532,267" fill="currentColor" stroke="none" />
    <text x="490" y="278" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">same push at the handle</text>
    <line x1="134" y1="280" x2="540" y2="280" stroke-dasharray="4 4" />
    <text x="340" y="295" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">d = 0.80 m</text>
    <text x="490" y="318" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">M = 20 x 0.80 = 16 N m</text>
  </g>
`

export const forcesMoments: SkillNode = {
  id: 'physics-forces-moments',
  title: 'Moments and the Turning Effect of a Force',
  description:
    'Use the equation M = F x d to find the moment of a force about a pivot. Apply the principle of moments (clockwise moments equal anticlockwise moments in balance) to see-saws, spanners, and door pushes. Keep all forces perpendicular to the lever arm.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-forces',
  zoneName: 'Forces',
  tier: 'challenge',
  prerequisites: ['physics-forces-types', 'physics-forces-balanced'],
  curriculum: {
    ks3Objective:
      'Forces measured in newtons; opposing forces and equilibrium; moment as the turning effect of a force.',
    awardingBodies: {
      aqa: '4.5.4 Moments, levers and gears; moment of a force M = F x d (GCSE Physics 8463)',
      edexcel:
        'Topic 14 Forces and motion (turning forces); the moment of a force = force x perpendicular distance from pivot (GCSE Physics 1PH0)',
      ocr: 'P3.1 Motion; moments, levers and the principle of moments (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'fmo-scene-seesaw',
      title: 'A See-Saw in Balance',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read the weight of each child and the distance from the pivot, then check the two moments match.',
      data: {
        viewBox: '0 0 800 400',
        svg: SEESAW_SVG,
        hotspots: [
          {
            id: 'fmo-ss-left',
            x: 22,
            y: 60,
            label: 'Lighter child, 200 N, 3 m from pivot',
            description:
              'Eliza weighs 200 N and sits 3 m from the pivot on the left. Her anticlockwise moment is 200 x 3 = 600 N m.',
          },
          {
            id: 'fmo-ss-right',
            x: 75,
            y: 60,
            label: 'Heavier child, 300 N, 2 m from pivot',
            description:
              'Theo weighs 300 N and sits 2 m from the pivot on the right. His clockwise moment is 300 x 2 = 600 N m.',
          },
          {
            id: 'fmo-ss-pivot',
            x: 50,
            y: 60,
            label: 'Pivot in the middle',
            description:
              'The triangle under the bar marks the pivot. Distances are always measured from this pivot, never from the end of the bar.',
          },
          {
            id: 'fmo-ss-rule',
            x: 50,
            y: 90,
            label: 'Principle of moments',
            description:
              'When clockwise moments equal anticlockwise moments, the see-saw is in balance. Here 600 N m on each side cancel.',
          },
        ],
      },
    },
    {
      id: 'fmo-scene-spanner',
      title: 'A Long Spanner on a Stiff Nut',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how a longer handle turns a stiff nut with the same hand force.',
      data: {
        viewBox: '0 0 800 400',
        svg: SPANNER_SVG,
        hotspots: [
          {
            id: 'fmo-sp-force',
            x: 70,
            y: 75,
            label: 'Hand force, 25 N down',
            description:
              'The hand presses down at the end of the handle with a force of 25 N. The force arrow is at right angles to the handle.',
          },
          {
            id: 'fmo-sp-distance',
            x: 45,
            y: 40,
            label: 'Distance from pivot, 0.40 m',
            description:
              'The perpendicular distance from the nut (pivot) to the line of the hand force is 0.40 m. Length of the handle from the nut to the hand.',
          },
          {
            id: 'fmo-sp-pivot',
            x: 22,
            y: 55,
            label: 'Pivot at the nut',
            description:
              'The nut is the pivot. The handle turns about the nut, so the nut is the point we measure distance from.',
          },
          {
            id: 'fmo-sp-moment',
            x: 50,
            y: 92,
            label: 'Turning effect, 10 N m',
            description:
              'M = F x d = 25 x 0.40 = 10 N m. Use a longer handle to get a bigger moment with the same hand force.',
          },
        ],
      },
    },
    {
      id: 'fmo-scene-door',
      title: 'Push a Door at the Hinge or at the Handle',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare a 20 N push very close to the hinge with the same 20 N push at the handle.',
      data: {
        viewBox: '0 0 800 400',
        svg: DOOR_SVG,
        hotspots: [
          {
            id: 'fmo-dr-near',
            x: 30,
            y: 45,
            label: 'Push near the hinge',
            description:
              'A push of 20 N close to the hinge has a perpendicular distance of only 0.05 m. The turning effect is 20 x 0.05 = 1 N m. Hard to open the door this way.',
          },
          {
            id: 'fmo-dr-handle',
            x: 70,
            y: 65,
            label: 'Same push at the handle',
            description:
              'The same 20 N push at the handle has a perpendicular distance of 0.80 m. The turning effect is 20 x 0.80 = 16 N m. The door swings open easily.',
          },
          {
            id: 'fmo-dr-rule',
            x: 50,
            y: 85,
            label: 'Same force, different moment',
            description:
              'The force is the same in both pushes. The distance from the hinge is what changes the moment. Distance from the pivot decides how much turning you get.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'fmo-worked-1',
      title: 'Moment of a hand force on a long spanner',
      steps: [
        {
          explanation:
            'Read the question. A pupil presses down on a spanner with a force of 30 N. The handle is 0.50 m long from the nut to the hand. Find the moment about the nut.',
        },
        {
          explanation:
            'Identify the pivot. The nut is the pivot. The handle turns about the nut.',
        },
        {
          explanation:
            'Identify the force. The hand pushes down with 30 N. The force is at right angles to the handle, so the full 30 N counts.',
          maths: 'F = 30 N',
        },
        {
          explanation:
            'Identify the perpendicular distance from the pivot to the line of the force.',
          maths: 'd = 0.50 m',
        },
        {
          explanation: 'Apply the equation M = F x d.',
          maths: 'M = 30 x 0.50 = 15 N m',
        },
        {
          explanation:
            'State the answer with units. The moment of the hand force about the nut is 15 N m. Units are newton metres (N m), not newtons.',
        },
      ],
    },
    {
      id: 'fmo-worked-2',
      title: 'Balance a see-saw: find the unknown distance',
      steps: [
        {
          explanation:
            'Read the question. Aisha (weight 250 N) sits 1.2 m from the pivot of a see-saw. Ben weighs 400 N. Find the distance from the pivot at which Ben must sit on the other side to balance the see-saw.',
        },
        {
          explanation:
            'State the principle of moments. In balance, clockwise moments equal anticlockwise moments about the pivot.',
        },
        {
          explanation:
            'Write the anticlockwise moment from Aisha on the left.',
          maths: 'Anticlockwise = 250 N x 1.2 m = 300 N m',
        },
        {
          explanation:
            'Write the clockwise moment from Ben on the right with the unknown distance d.',
          maths: 'Clockwise = 400 N x d',
        },
        {
          explanation: 'Set the two moments equal and solve for d.',
          maths: '400 x d = 300, so d = 300 / 400 = 0.75 m',
        },
        {
          explanation:
            'State the answer. Ben must sit 0.75 m from the pivot to balance the see-saw. Heavier child sits closer to the pivot; the lighter child sits further away.',
        },
      ],
    },
  ],
  questions: [
    // Core 1
    {
      id: 'fmo-q1',
      type: 'multiple-choice',
      stem: 'Which equation links the moment of a force to the force and the perpendicular distance from the pivot?',
      tier: 'core',
      options: [
        'M = F + d',
        'M = F x d',
        'M = F / d',
        'M = d / F',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'fmo-mis-formula-add-not-multiply',
      hint: 'A bigger force or a bigger distance both give a bigger turning effect. The equation is a product, not a sum.',
    },
    // Core 2
    {
      id: 'fmo-q2',
      type: 'multiple-choice',
      stem: 'What are the units of the moment of a force?',
      tier: 'core',
      options: [
        'Newtons (N).',
        'Newton metres (N m).',
        'Metres per second (m/s).',
        'Joules (J).',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'fmo-mis-moment-as-force',
      hint: 'A moment is force x distance, so its units are the units of force times the units of length.',
    },
    // Core 3
    {
      id: 'fmo-q3',
      type: 'numeric-entry',
      stem: 'A child pushes the end of a spanner with a force of 20 N. The perpendicular distance from the nut to the line of the push is 0.30 m. What is the moment of the push about the nut, in newton metres?',
      tier: 'core',
      correctAnswer: 6,
      unit: 'N m',
      xpValue: 10,
      hint: 'Use M = F x d with F = 20 N and d = 0.30 m.',
    },
    // Core 4
    {
      id: 'fmo-q4',
      type: 'numeric-entry',
      stem: 'A worker pushes a long lever with a force of 50 N at a perpendicular distance of 0.80 m from the pivot. What is the moment, in newton metres?',
      tier: 'core',
      correctAnswer: 40,
      unit: 'N m',
      xpValue: 10,
      hint: '50 x 0.80 in your head: 50 x 8 tenths.',
    },
    // Core 5
    {
      id: 'fmo-q5',
      type: 'multiple-choice',
      stem: 'A door is hardest to open when you push on it where?',
      tier: 'core',
      options: [
        'Right next to the hinge.',
        'At the handle, on the side furthest from the hinge.',
        'In the middle of the door.',
        'Anywhere on the door, since the same force gives the same moment.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'fmo-mis-distance-does-not-matter',
      hint: 'Distance from the hinge changes the moment. A push close to the pivot gives a small moment.',
    },
    // Core 6
    {
      id: 'fmo-q6',
      type: 'multiple-choice',
      stem: 'Two children of the same weight sit on opposite sides of a see-saw. The see-saw balances. What must be true about their distances from the pivot?',
      tier: 'core',
      options: [
        'The lighter side has to sit further from the pivot.',
        'They must sit the same distance from the pivot.',
        'Whichever child sits further out has the smaller moment.',
        'Distance does not matter when the weights are equal.',
      ],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Equal weights give equal moments only if the perpendicular distances are equal as well.',
    },
    // Core 7
    {
      id: 'fmo-q7',
      type: 'multiple-choice',
      stem: 'A wheelbarrow load creates a downwards force of 80 N at a perpendicular distance of 0.50 m from the wheel (the pivot). What is the moment of the load about the wheel?',
      tier: 'core',
      options: [
        '0.16 N m, dividing 0.50 by 80 in error.',
        '80 N m, copying the force.',
        '40 N m, from 80 x 0.50.',
        '80.5 N m, adding force and distance.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'fmo-mis-formula-add-not-multiply',
      hint: 'Apply M = F x d with F = 80 N and d = 0.50 m.',
    },
    // Confident 1
    {
      id: 'fmo-q8',
      type: 'multiple-choice',
      stem: 'Two pupils push a stuck door. Mia pushes with 10 N at the handle, 0.90 m from the hinge. Sam pushes with 30 N very close to the hinge, only 0.10 m away. Whose push has the larger turning effect?',
      tier: 'confident',
      options: [
        'Sam, because his force is three times bigger.',
        'They are the same, because force and distance trade off equally.',
        'Mia, because her moment is 9 N m and Sam\'s is 3 N m.',
        'Mia, because the distance from the hinge is what matters; force does not count.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'fmo-mis-heavier-always-wins',
      hint: 'Work out F x d for each pupil and compare. Bigger product wins.',
    },
    // Confident 2
    {
      id: 'fmo-q9',
      type: 'numeric-entry',
      stem: 'A see-saw pivots in the middle of a 4 m plank. Eliza (200 N) sits at the very end of the left side, 2 m from the pivot. What is her anticlockwise moment about the pivot, in newton metres?',
      tier: 'confident',
      correctAnswer: 400,
      unit: 'N m',
      xpValue: 15,
      misconceptionId: 'fmo-mis-bar-length-not-pivot-distance',
      hint: 'Only the distance from the pivot matters, not the length of the plank. d = 2 m here.',
    },
    // Confident 3
    {
      id: 'fmo-q10',
      type: 'numeric-entry',
      stem: 'A spanner has a handle of length 0.25 m from the nut to the hand. A pupil pushes the end of the handle at right angles with a force of 16 N. What is the moment about the nut, in newton metres?',
      tier: 'confident',
      correctAnswer: 4,
      unit: 'N m',
      xpValue: 15,
      hint: 'M = 16 x 0.25. A quarter of 16.',
    },
    // Confident 4
    {
      id: 'fmo-q11',
      type: 'multiple-choice',
      stem: 'A force of 20 N acts at 0.50 m from a pivot. If the force is doubled to 40 N (with the distance unchanged), what happens to the moment?',
      tier: 'confident',
      options: [
        'The moment doubles, from 10 N m to 20 N m.',
        'The moment stays the same, because distance is unchanged.',
        'The moment goes up by 20, from 10 N m to 30 N m.',
        'The moment quadruples, from 10 N m to 40 N m.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'fmo-mis-double-means-add',
      hint: 'M = F x d. If F doubles and d is the same, M also doubles. The factor multiplies, it does not add.',
    },
    // Confident 5
    {
      id: 'fmo-q12',
      type: 'spot-misconception',
      stem: 'Theo says, "A moment is a kind of force, so it must be measured in newtons just like weight or friction."',
      tier: 'confident',
      statements: [
        {
          text: 'Theo is right. The moment is one of the forces in the diagram, so its units are newtons.',
          isMisconception: true,
        },
        {
          text: 'Theo is not right. A moment is the turning effect of a force, not a force itself. Its units are newton metres (N m), because it is force times distance.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fmo-mis-moment-as-force',
    },
    // Confident 6
    {
      id: 'fmo-q13',
      type: 'drag-order',
      stem: 'Place the steps in the right order to find the moment of a force on a spanner.',
      tier: 'confident',
      items: [
        'Multiply the force by the distance to find the moment.',
        'Identify the pivot (the point the object turns about).',
        'State the answer with units of newton metres.',
        'Measure the perpendicular distance from the pivot to the line of the force.',
      ],
      correctOrder: [1, 3, 0, 2],
      xpValue: 15,
      hint: 'Pick the pivot first, then the distance, then the multiplication, then the answer with units.',
    },
    // Confident 7
    {
      id: 'fmo-q14',
      type: 'spot-misconception',
      stem: 'Aisha says, "The pivot is always in the middle of the bar. So on a see-saw I always measure distance from the middle of the plank."',
      tier: 'confident',
      statements: [
        {
          text: 'Aisha is right. The pivot is always at the middle of a bar; that is what the word pivot means.',
          isMisconception: true,
        },
        {
          text: 'Aisha is not right. The pivot is wherever the object turns; it could be at one end, at the middle, or off-centre. Always measure distance from the actual pivot, not from the middle of the bar.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fmo-mis-pivot-always-middle',
    },
    // Challenge 1: Bond-style multi-step word problem
    {
      id: 'fmo-q15',
      type: 'numeric-entry',
      stem: 'On a see-saw in a Sevenoaks park, Eliza (weight 240 N) sits 1.5 m from the pivot on the left. Her younger brother sits on the right and balances the see-saw at a distance of 1.8 m from the pivot. What is the weight of her brother, in newtons?',
      tier: 'challenge',
      correctAnswer: 200,
      unit: 'N',
      xpValue: 20,
      hint: 'Set anticlockwise (Eliza\'s side) equal to clockwise (brother\'s side). 240 x 1.5 = W x 1.8.',
    },
    // Challenge 2
    {
      id: 'fmo-q16',
      type: 'numeric-entry',
      stem: 'A pupil presses on a spanner with a force of 25 N at right angles to the handle. The handle is 0.40 m long from the nut to the hand. The nut needs a moment of at least 12 N m to turn. By how many newton metres does the pupil\'s moment exceed the minimum needed?',
      tier: 'challenge',
      correctAnswer: -2,
      unit: 'N m',
      xpValue: 20,
      hint: '25 x 0.40 = 10 N m. Compare with the 12 N m minimum. A negative answer means the moment is too small.',
    },
    // Challenge 3
    {
      id: 'fmo-q17',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is checking whether a see-saw balances. A 150 N child sits 1.6 m from the pivot on the left. A 200 N child sits 1.2 m from the pivot on the right.',
      tier: 'challenge',
      steps: [
        'Identify the pivot in the middle of the see-saw and label the two sides as clockwise and anticlockwise.',
        'Write the anticlockwise moment from the left side: 150 N x 1.6 m = 240 N m.',
        'Write the clockwise moment from the right side: 200 N x 1.2 m = 240 N m.',
        null,
        'State the result. The two moments are equal, so the see-saw balances. The net turning effect about the pivot is zero.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Apply the principle of moments: in balance, clockwise moments equal anticlockwise moments. Compare 240 N m on each side.',
      xpValue: 20,
    },
    // Challenge 4
    {
      id: 'fmo-q18',
      type: 'multiple-choice',
      stem: 'Two children sit on a see-saw. The heavier child weighs 350 N and sits 1.0 m from the pivot. The lighter child weighs 200 N and sits 1.8 m from the pivot, on the other side. Which way does the see-saw turn?',
      tier: 'challenge',
      options: [
        'Towards the heavier child, because heavier always wins on a see-saw.',
        'Towards the lighter child, because their moment of 360 N m is larger than 350 N m on the other side.',
        'Neither way; the see-saw balances because the heavier child cancels the longer distance.',
        'Towards the heavier child, because they sit closer to the pivot.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'fmo-mis-heavier-always-wins',
      hint: 'Work out F x d for each child. 200 x 1.8 versus 350 x 1.0. The larger moment turns the see-saw to its own side.',
    },
    // Challenge 5
    {
      id: 'fmo-q19',
      type: 'numeric-entry',
      stem: 'A long spanner has a handle of length 0.30 m from the nut to the hand. To free a rusted nut, the pupil needs a moment of 18 N m. What is the smallest force, in newtons, the pupil must apply at right angles to the end of the handle?',
      tier: 'challenge',
      correctAnswer: 60,
      unit: 'N',
      xpValue: 20,
      hint: 'Rearrange M = F x d to F = M / d. Use M = 18 N m and d = 0.30 m.',
    },
    // Challenge 6: Bond-style word problem with unstated intermediate step
    {
      id: 'fmo-q20',
      type: 'multiple-choice',
      stem: 'A wheelbarrow has a load placed 0.40 m from the wheel and a handle held 1.20 m from the same wheel. The load weighs 240 N and pulls the barrow down. The gardener lifts the handle at right angles. What is the smallest lift force, in newtons, that will just balance the load?',
      tier: 'challenge',
      options: [
        '240 N, because the lift must equal the weight of the load.',
        '720 N, because the lift must equal load x distance.',
        '40 N, because the lift is one-sixth of the load.',
        '80 N, because the handle is three times further from the wheel than the load.',
      ],
      correctIndex: 3,
      xpValue: 20,
      misconceptionId: 'fmo-mis-lift-equals-load',
      hint: 'Balance moments about the wheel: load x 0.40 = lift x 1.20. Solve for lift.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics examiner report June 2022, Paper 1F, candidates write moments in newtons rather than newton metres
    {
      id: 'fmo-mis-moment-as-force',
      description:
        'Treating the moment of a force as a force itself, so writing the answer in newtons rather than in newton metres.',
      triggerAnswer: 'moment-as-force',
      correction:
        'A moment is the turning effect of a force, not a force itself. Its units are newton metres (N m) because it is force times perpendicular distance.',
      reExplanation:
        'Push a door at the handle with 20 N and the door swings open. The push is a force of 20 N. The turning effect about the hinge is 20 x 0.80 = 16 N m, not 16 N. A force has units of newtons; a moment has units of newton metres. Keep the two ideas separate.',
    },
    // Source: CGP KS3 Physics Study Guide Common Mistake box on the equation for moments
    {
      id: 'fmo-mis-formula-add-not-multiply',
      description:
        'Adding force and distance together to find the moment, rather than multiplying them.',
      triggerAnswer: 'formula-add-not-multiply',
      correction:
        'The equation is M = F x d, not M = F + d. Force times perpendicular distance gives the moment.',
      reExplanation:
        'A 20 N push at 0.5 m from a pivot gives a moment of 20 x 0.5 = 10 N m, not 20.5 N m. If you doubled the force, the moment would also double; if you added 1 N to the force, the moment would only go up by 0.5 N m. The pattern is a product, not a sum.',
    },
    // Source: OCR GCSE Physics examiner report June 2022, J259/02, candidates measure distance from the end of the bar rather than from the pivot
    {
      id: 'fmo-mis-bar-length-not-pivot-distance',
      description:
        'Using the length of the whole bar or plank as the distance, rather than the perpendicular distance from the pivot to the line of the force.',
      triggerAnswer: 'bar-length-not-pivot-distance',
      correction:
        'Only the perpendicular distance from the pivot to the line of the force counts in M = F x d. The full length of the bar is not the distance.',
      reExplanation:
        'Picture a see-saw with the pivot in the middle of a 4 m plank. A child sat at the end of the plank is 2 m from the pivot, not 4 m. Always start at the pivot and measure outward to where the force is being applied. The plank can be any length; what matters is how far the force is from the turn point.',
    },
    // Source: Edexcel GCSE Physics examiner report June 2019, Paper 1PH0/1F, candidates assume the pivot is at the centre of any bar
    {
      id: 'fmo-mis-pivot-always-middle',
      description:
        'Believing the pivot is always at the middle of the bar, so on a see-saw or lever the pivot must be at the centre.',
      triggerAnswer: 'pivot-always-middle',
      correction:
        'The pivot is wherever the object actually turns. It can be at the centre, at one end (like a hinge), or off-centre. Locate the pivot in the picture before you measure distances.',
      reExplanation:
        'A door turns about a hinge at one edge, not at the middle. A wheelbarrow turns about the wheel near the front, not at the middle of the handles. A see-saw usually has a central pivot, but a beam balance might not. Find the pivot in the diagram and measure from there.',
    },
    // Source: CGP KS3 Physics Workbook Common Mistake box on heavier wins on a see-saw
    {
      id: 'fmo-mis-heavier-always-wins',
      description:
        'Believing the heavier child always tips the see-saw down on their own side, regardless of how far each child sits from the pivot.',
      triggerAnswer: 'heavier-always-wins',
      correction:
        'A see-saw tips towards the side with the larger moment, which is F x d. A lighter child far from the pivot can outweigh a heavier child close to the pivot.',
      reExplanation:
        'A 200 N child sat 1.8 m from the pivot has a moment of 360 N m. A 300 N child sat just 1.0 m from the pivot has a moment of 300 N m. The lighter child has the larger moment, so the see-saw turns to their side. Distance can beat weight when the lever arm is long enough.',
    },
    // Authored, no external source
    {
      id: 'fmo-mis-distance-does-not-matter',
      description:
        'Believing the position of a push on a door does not matter, so a push near the hinge has the same turning effect as a push at the handle.',
      triggerAnswer: 'distance-does-not-matter',
      correction:
        'The same force gives a much bigger moment when applied far from the pivot. A push at the handle has a far larger turning effect than the same push near the hinge.',
      reExplanation:
        'Push the edge of a classroom door with 20 N right next to the hinge: M = 20 x 0.05 = 1 N m, hardly anything. Push with the same 20 N at the handle, 0.80 m from the hinge: M = 20 x 0.80 = 16 N m, the door swings open easily. The push has not changed; the distance has, and that is what changed the moment.',
    },
    // Source: AQA GCSE Physics examiner report June 2023, Paper 1F, candidates write that doubling force adds rather than multiplies the moment
    {
      id: 'fmo-mis-double-means-add',
      description:
        'Believing that doubling the force adds to the moment in a fixed way, rather than doubling the moment as well.',
      triggerAnswer: 'double-means-add',
      correction:
        'Because M = F x d, doubling F doubles M. Doubling d also doubles M. The factor multiplies the answer, not adds to it.',
      reExplanation:
        'Start with F = 20 N and d = 0.50 m, so M = 10 N m. Double F to 40 N: M = 40 x 0.50 = 20 N m, twice the original. Double d to 1.00 m instead: M = 20 x 1.00 = 20 N m, also twice. Do both and M = 40 x 1.00 = 40 N m, four times. Multiplication scales the moment.',
    },
    // Source: Edexcel GCSE Physics examiner report June 2022, Paper 1PH0/1F, candidates equate lift force with load weight in wheelbarrow-style lever problems
    {
      id: 'fmo-mis-lift-equals-load',
      description:
        'Believing the lift force on a lever must equal the load force, missing that different distances from the pivot let a small lift balance a large load.',
      triggerAnswer: 'lift-equals-load',
      correction:
        'In balance, the moments must match, not the forces. A small lift far from the pivot can balance a larger load close to the pivot.',
      reExplanation:
        'A wheelbarrow load of 240 N sits 0.40 m from the wheel. The gardener lifts the handles 1.20 m from the same wheel. For balance, load x its distance = lift x its distance: 240 x 0.40 = lift x 1.20, so lift = 80 N. The gardener does not need to lift 240 N; the long handle does the rest of the work by giving a larger distance.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const forcesMomentsZoneNodes = [forcesMoments]

export const forcesMomentsZone: Zone = {
  id: 'physics-forces',
  name: 'Forces',
  realm: 'mechanica',
  nodeIds: forcesMomentsZoneNodes.map((n) => n.id),
}
