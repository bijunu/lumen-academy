import type { SkillNode } from '@/types/content'

const PUSH_BOX_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Pushing a box 4 m across a school hall in Bristol</text>

    <!-- Floor line -->
    <line x1="60" y1="270" x2="740" y2="270" />

    <!-- Box start (dashed) -->
    <rect x="200" y="200" width="80" height="70" stroke-dasharray="6,6" />
    <text x="240" y="290" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">start</text>

    <!-- Box end -->
    <rect x="520" y="200" width="80" height="70" />
    <text x="560" y="290" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">end</text>

    <!-- Force arrow on the end box -->
    <line x1="470" y1="235" x2="520" y2="235" />
    <polygon points="510,228 525,235 510,242" fill="currentColor" stroke="none" />
    <text x="450" y="220" text-anchor="end" font-size="13" font-weight="700" stroke="none" fill="currentColor">F = 25 N</text>
    <text x="450" y="240" text-anchor="end" font-size="11" stroke="none" fill="currentColor">push, along the floor</text>

    <!-- Distance arrow under both boxes -->
    <line x1="240" y1="320" x2="560" y2="320" />
    <polygon points="250,314 235,320 250,326" fill="currentColor" stroke="none" />
    <polygon points="550,314 565,320 550,326" fill="currentColor" stroke="none" />
    <text x="400" y="345" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">d = 4 m</text>
    <text x="400" y="362" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">distance moved in the direction of the force</text>

    <!-- Calculation -->
    <text x="400" y="390" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">W = F x d = 25 x 4 = 100 J</text>
  </g>
`

const LIFT_PARCEL_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Lifting a 20 N parcel up 3 m onto a shelf in Norwich</text>

    <!-- Ground -->
    <line x1="60" y1="340" x2="740" y2="340" />

    <!-- Shelf (top) -->
    <line x1="300" y1="90" x2="500" y2="90" />
    <text x="400" y="80" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">shelf</text>

    <!-- Parcel start (dashed) at bottom -->
    <rect x="360" y="290" width="80" height="50" stroke-dasharray="6,6" />
    <text x="400" y="365" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">start, on the floor</text>

    <!-- Parcel end on shelf -->
    <rect x="360" y="90" width="80" height="50" />
    <text x="400" y="80" text-anchor="middle" font-size="11" stroke="none" fill="currentColor"></text>

    <!-- Upward lifting force arrow -->
    <line x1="220" y1="240" x2="220" y2="140" />
    <polygon points="213,150 220,130 227,150" fill="currentColor" stroke="none" />
    <text x="200" y="200" text-anchor="end" font-size="13" font-weight="700" stroke="none" fill="currentColor">F = 20 N</text>
    <text x="200" y="218" text-anchor="end" font-size="11" stroke="none" fill="currentColor">lift, straight up</text>

    <!-- Vertical distance arrow on the right -->
    <line x1="600" y1="115" x2="600" y2="315" />
    <polygon points="594,125 600,108 606,125" fill="currentColor" stroke="none" />
    <polygon points="594,305 600,322 606,305" fill="currentColor" stroke="none" />
    <text x="630" y="220" font-size="13" font-weight="700" stroke="none" fill="currentColor">d = 3 m</text>
    <text x="630" y="238" font-size="11" stroke="none" fill="currentColor">moved up, the same way</text>
    <text x="630" y="252" font-size="11" stroke="none" fill="currentColor">as the force</text>

    <!-- Calculation -->
    <text x="400" y="395" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">W = F x d = 20 x 3 = 60 J</text>
  </g>
`

const ZERO_WORK_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">When the force does zero work</text>

    <!-- Left panel: horizontal motion, vertical force -->
    <rect x="60" y="80" width="320" height="250" />
    <text x="220" y="110" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Carrying a bag along a flat path</text>

    <!-- Walker holding bag, vertical force, horizontal motion -->
    <circle cx="160" cy="180" r="14" />
    <line x1="160" y1="194" x2="160" y2="240" />
    <line x1="160" y1="240" x2="140" y2="280" />
    <line x1="160" y1="240" x2="180" y2="280" />
    <line x1="160" y1="220" x2="200" y2="220" />
    <rect x="200" y="220" width="30" height="30" />

    <!-- Upward force on bag -->
    <line x1="215" y1="220" x2="215" y2="190" />
    <polygon points="208,200 215,182 222,200" fill="currentColor" stroke="none" />
    <text x="245" y="200" font-size="11" stroke="none" fill="currentColor">F up</text>

    <!-- Horizontal motion arrow -->
    <line x1="260" y1="280" x2="340" y2="280" />
    <polygon points="330,272 345,280 330,288" fill="currentColor" stroke="none" />
    <text x="300" y="300" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">moves sideways</text>

    <text x="220" y="320" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">W = 0 J on the bag</text>

    <!-- Right panel: pushing wall, no motion -->
    <rect x="420" y="80" width="320" height="250" />
    <text x="580" y="110" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Pushing a fixed wall</text>

    <!-- Person pushing wall -->
    <circle cx="520" cy="180" r="14" />
    <line x1="520" y1="194" x2="520" y2="240" />
    <line x1="520" y1="240" x2="510" y2="290" />
    <line x1="520" y1="240" x2="530" y2="290" />
    <line x1="534" y1="200" x2="600" y2="200" />
    <polygon points="590,193 605,200 590,207" fill="currentColor" stroke="none" />
    <text x="567" y="186" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">F push</text>

    <!-- Wall -->
    <rect x="620" y="140" width="20" height="160" fill="currentColor" />
    <text x="630" y="320" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">does not move</text>

    <text x="580" y="265" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">d = 0, so W = 0 J</text>

    <text x="400" y="370" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Work needs a force AND a distance moved in the direction of that force.</text>
  </g>
`

export const energyWorkDone: SkillNode = {
  id: 'physics-energy-work-done',
  title: 'Work Done',
  description:
    'Work is the energy transferred when a force moves an object through a distance in the direction of the force. The rule is W = F x d, with W in joules when F is in newtons and d is in metres. Push a box 4 m with a 25 N force and you do 100 J of work on it. Lift a 20 N parcel 3 m up onto a shelf and you do 60 J of work on it. If the object does not move, or if it moves at right angles to the force, no work is done on it even when pushing or holding feels tough.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-energy-stores-transfers',
  zoneName: 'Energy Stores and Transfers',
  tier: 'challenge',
  prerequisites: ['physics-energy-transfers'],
  curriculum: {
    ks3Objective:
      'Energy as a quantity transferred by mechanical work; work done when a force moves through a distance; W = F x d, measured in joules.',
    awardingBodies: {
      aqa: '4.5.2 Work done and energy transfer; W = F s (GCSE Physics 8463)',
      edexcel:
        'Topic 4 Energy, 4.14 Work done = force x distance moved in the direction of the force (GCSE Physics 1PH0)',
      ocr: 'P2.2 Work done; mechanical work as a force moving through a distance (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'pewd-scene-push-box',
      title: 'Pushing a Box 4 m Across a Bristol Hall',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to follow the force, the distance and the work done as a box slides across the floor.',
      data: {
        viewBox: '0 0 800 400',
        svg: PUSH_BOX_SVG,
        hotspots: [
          {
            id: 'pewd-push-force',
            x: 48,
            y: 55,
            label: 'F = 25 N, the push along the floor',
            description:
              'A pupil in Bristol pushes a stage box across a flat school hall. The push is 25 N and points along the floor, in the same direction as the box slides. That is the force F we put into W = F x d.',
          },
          {
            id: 'pewd-push-distance',
            x: 50,
            y: 80,
            label: 'd = 4 m, the distance moved in the same direction',
            description:
              'The box ends up 4 m further along the floor than it started, moved in the same direction as the push. That is the distance d we put into W = F x d. The unit of d is metres.',
          },
          {
            id: 'pewd-push-calc',
            x: 50,
            y: 96,
            label: 'W = F x d = 100 J of work',
            description:
              'Multiply F and d: 25 x 4 = 100. With F in newtons and d in metres, the work W comes out in joules. So the pupil does 100 J of work on the box. That is 100 J of energy transferred from the pupil to the box and floor.',
          },
        ],
      },
    },
    {
      id: 'pewd-scene-lift-parcel',
      title: 'Lifting a 20 N Parcel 3 m onto a Shelf',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to follow the lifting force and the vertical distance as the parcel goes onto a shelf.',
      data: {
        viewBox: '0 0 800 400',
        svg: LIFT_PARCEL_SVG,
        hotspots: [
          {
            id: 'pewd-lift-force',
            x: 25,
            y: 50,
            label: 'F = 20 N, the lifting force upwards',
            description:
              'A worker in Norwich lifts a parcel onto a shelf. The parcel weighs 20 N, so the lift must be at least 20 N upwards to raise it steadily. That upward 20 N is the force F we put into W = F x d.',
          },
          {
            id: 'pewd-lift-distance',
            x: 78,
            y: 55,
            label: 'd = 3 m, moved up, the same way as the force',
            description:
              'The parcel ends up 3 m higher than where it started. The lift points up, and the parcel moves up. So d = 3 m is the distance moved in the direction of the force. Only the vertical distance counts here.',
          },
          {
            id: 'pewd-lift-calc',
            x: 50,
            y: 98,
            label: 'W = F x d = 60 J of work',
            description:
              'Multiply F and d: 20 x 3 = 60. With F in newtons and d in metres, W comes out in joules. So the worker does 60 J of work on the parcel. That 60 J is transferred to the parcel as gravitational potential energy.',
          },
        ],
      },
    },
    {
      id: 'pewd-scene-zero-work',
      title: 'When the Force Does No Work',
      type: 'labelled-diagram',
      instructions:
        'Click each panel to see two cases where a force is being applied but no work is done on the object.',
      data: {
        viewBox: '0 0 800 400',
        svg: ZERO_WORK_SVG,
        hotspots: [
          {
            id: 'pewd-zero-sideways',
            x: 28,
            y: 50,
            label: 'Carrying a bag along a flat path',
            description:
              'A shopper in Leeds carries a basket along a flat path. The upward force on the basket holds it up against gravity. The motion is sideways. The force and the motion are at right angles, so no work is done on the basket by the carrying force.',
          },
          {
            id: 'pewd-zero-wall',
            x: 72,
            y: 50,
            label: 'Pushing a wall that does not move',
            description:
              'A pupil shoves a brick wall with both hands. They feel tired, but the wall does not move. The distance d is 0 m, so W = F x 0 = 0 J. Feeling tired is not the same as doing work in physics.',
          },
          {
            id: 'pewd-zero-rule',
            x: 50,
            y: 92,
            label: 'Work needs a force AND motion in that direction',
            description:
              'Both panels show a real force. Neither does work on the object, because the object either does not move at all (d = 0) or moves at right angles to the force. In W = F x d, d must be the distance moved in the direction of F.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'pewd-worked-1',
      title: 'A Cardiff removal worker pushes a 30 N box 5 m across a floor',
      steps: [
        {
          explanation:
            'Pick out the two quantities. A removal worker in Cardiff pushes a stage box across a flat floor with a steady 30 N push along the floor. The box slides 5 m in the same direction as the push. So F = 30 N and d = 5 m, and we want the work done W.',
        },
        {
          explanation:
            'Check the units. F is in newtons (N) and d is in metres (m). When F is in N and d is in m, W will come out in joules (J). No conversion is needed.',
        },
        {
          explanation:
            'Check the directions. The push is along the floor and the box moves along the floor in the same direction. So the full 30 N counts. Good.',
        },
        {
          explanation: 'Write the rule.',
          maths: 'W = F x d',
        },
        {
          explanation: 'Substitute the numbers.',
          maths: 'W = 30 x 5',
        },
        {
          explanation: 'Evaluate.',
          maths: 'W = 150 J',
        },
        {
          explanation:
            'State the answer. The worker does 150 J of work on the box. That is 150 J of energy transferred from the worker to the box and the floor it slides over.',
        },
      ],
    },
    {
      id: 'pewd-worked-2',
      title: 'A Glasgow porter lifts an 80 N suitcase 1.5 m onto a luggage rack',
      steps: [
        {
          explanation:
            'Pick out the two quantities. A porter at Glasgow Central lifts a suitcase steadily up onto a luggage rack. The suitcase weighs 80 N, so the lift is 80 N upwards. The rack is 1.5 m above where the suitcase started. So F = 80 N and d = 1.5 m, and we want the work done W.',
        },
        {
          explanation:
            'Check the units. F is in newtons and d is in metres, so W will be in joules.',
        },
        {
          explanation:
            'Check the directions. The lift points up and the suitcase moves up. Force and motion are in the same direction, so the full 80 N counts.',
        },
        {
          explanation: 'Write the rule.',
          maths: 'W = F x d',
        },
        {
          explanation: 'Substitute the numbers.',
          maths: 'W = 80 x 1.5',
        },
        {
          explanation: 'Evaluate.',
          maths: 'W = 120 J',
        },
        {
          explanation:
            'State the answer. The porter does 120 J of work on the suitcase. That 120 J is transferred to the suitcase as gravitational potential energy as it gains height.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pewd-q1',
      type: 'multiple-choice',
      stem: 'Which sentence best describes what "work done" means in physics?',
      tier: 'core',
      options: [
        'The energy transferred when a force moves an object through a distance in the direction of the force.',
        'How tired you feel after pushing or lifting something.',
        'The size of the force you apply, in newtons.',
        'The time you spend pushing or lifting an object.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pewd-mis-tired-means-work',
      hint: 'Work in physics is about energy transferred when a force makes something move.',
    },
    {
      id: 'pewd-q2',
      type: 'multiple-choice',
      stem: 'What is the unit of work done?',
      tier: 'core',
      options: [
        'Newtons (N).',
        'Joules (J).',
        'Metres (m).',
        'Watts (W).',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pewd-mis-work-in-newtons',
      hint: 'Work is a form of energy. Energy is measured in joules.',
    },
    {
      id: 'pewd-q3',
      type: 'multiple-choice',
      stem: 'Which equation gives the work done by a steady force F that moves an object through a distance d in the direction of the force?',
      tier: 'core',
      options: [
        'W = F + d.',
        'W = F / d.',
        'W = F x d.',
        'W = d / F.',
      ],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Work done is force times distance moved in the direction of the force.',
    },
    {
      id: 'pewd-q4',
      type: 'numeric-entry',
      stem: 'A pupil in Bristol pushes a stage box across a flat hall with a steady 25 N force, in the same direction as the box moves. The box slides 4 m. How much work is done on the box, in joules?',
      tier: 'core',
      correctAnswer: 100,
      unit: 'J',
      xpValue: 10,
      hint: 'W = F x d = 25 x 4.',
    },
    {
      id: 'pewd-q5',
      type: 'numeric-entry',
      stem: 'A worker in Norwich lifts a 20 N parcel steadily 3 m straight up onto a shelf. How much work does the worker do on the parcel, in joules?',
      tier: 'core',
      correctAnswer: 60,
      unit: 'J',
      xpValue: 10,
      hint: 'The lifting force is 20 N upwards and the parcel moves 3 m up. W = F x d.',
    },
    {
      id: 'pewd-q6',
      type: 'multiple-choice',
      stem: 'A shopper in Leeds holds a heavy basket and stands still for two minutes. The basket does not move. How much work does the shopper do on the basket in physics terms?',
      tier: 'core',
      options: [
        'A lot, because the basket feels heavy.',
        '0 J, because the basket does not move, so d = 0 m.',
        'It depends on how tired the shopper feels.',
        '20 J per minute.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pewd-mis-tired-means-work',
      hint: 'Use W = F x d. If d = 0, then W = 0 no matter how big F is.',
    },
    {
      id: 'pewd-q7',
      type: 'multiple-choice',
      stem: 'A pupil writes "Work is measured in newtons, because force is measured in newtons." Which fix is right?',
      tier: 'core',
      options: [
        'Leave it. Work is measured in newtons.',
        'Change "newtons" to "metres".',
        'Change "newtons" to "joules". Work is a form of energy, so it is measured in joules.',
        'Change "work" to "weight".',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pewd-mis-work-in-newtons',
      hint: 'Force is in newtons, distance is in metres, work is the product and is measured in joules.',
    },
    {
      id: 'pewd-q8',
      type: 'numeric-entry',
      stem: 'A removal worker in Cardiff pushes a 30 N box 5 m across a flat floor in the direction of the push. How much work is done on the box, in joules?',
      tier: 'confident',
      correctAnswer: 150,
      unit: 'J',
      xpValue: 15,
      hint: 'W = F x d = 30 x 5.',
    },
    {
      id: 'pewd-q9',
      type: 'numeric-entry',
      stem: 'A porter at Glasgow Central lifts an 80 N suitcase 1.5 m straight up onto a luggage rack. How much work does the porter do on the suitcase, in joules?',
      tier: 'confident',
      correctAnswer: 120,
      unit: 'J',
      xpValue: 15,
      hint: 'W = F x d with F = 80 N and d = 1.5 m.',
    },
    {
      id: 'pewd-q10',
      type: 'numeric-entry',
      stem: 'A Manchester piano-mover slides a 200 N piano 2.5 m across a hall, pushing in the direction the piano moves. How much work is done on the piano, in joules?',
      tier: 'confident',
      correctAnswer: 500,
      unit: 'J',
      xpValue: 15,
      hint: 'W = F x d = 200 x 2.5.',
    },
    {
      id: 'pewd-q11',
      type: 'multiple-choice',
      stem: 'Two pupils each lift the same 20 N parcel 3 m straight up onto a shelf. Pupil A lifts it in 2 s; pupil B lifts it in 10 s. Which sentence is correct?',
      tier: 'confident',
      options: [
        'Pupil A does 5 times as much work, because A is faster.',
        'Pupil B does 5 times as much work, because B takes longer.',
        'Both do the same work, 60 J. The work done is W = F x d and does not depend on the time taken.',
        'Neither does any work, because the parcel is at rest at the start and end.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pewd-mis-work-as-power',
      hint: 'W = F x d does not have time in it. Time matters for power, not for work.',
    },
    {
      id: 'pewd-q12',
      type: 'multiple-choice',
      stem: 'A shopper in Leeds carries a 30 N basket along a flat path for 12 m. The carrying force on the basket points straight up; the basket moves sideways. How much work does the carrying force do on the basket?',
      tier: 'confident',
      options: [
        '0 J, because the force is at right angles to the motion. The basket does not move in the direction of the force.',
        '360 J, because W = 30 x 12.',
        '12 J, because the basket moves 12 m.',
        '30 J, because the basket weighs 30 N.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'pewd-mis-distance-in-direction',
      hint: 'In W = F x d, d must be the distance moved in the direction of F. Sideways motion does not count for an upward force.',
    },
    {
      id: 'pewd-q13',
      type: 'multiple-choice',
      stem: 'A 40 N box is pushed 6 m across a floor with a steady 40 N push in the direction of motion. A 40 N box is also pushed 12 m with the same 40 N push. Which sentence is correct?',
      tier: 'confident',
      options: [
        'The work done is the same in both cases, because the pushes are equal.',
        'Twice as much work is done on the 12 m push, because the distance is twice as big.',
        'No work is done on either box.',
        'The 6 m push does more work, because the box is closer.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'pewd-mis-only-force-matters',
      hint: 'W = F x d. Same F, double the d means double the W.',
    },
    {
      id: 'pewd-q14',
      type: 'spot-misconception',
      stem: 'Priya says, "I held a heavy bag of shopping in the same spot for ten minutes. My arms were shaking, so I must have done a lot of work on the bag."',
      tier: 'confident',
      statements: [
        {
          text: 'Priya is right. Holding something heavy means a lot of work is done on it.',
          isMisconception: true,
        },
        {
          text: 'Priya is not right. The bag did not move, so d = 0 m. W = F x 0 = 0 J. Her muscles work hard inside her body, but no work is done on the bag.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pewd-mis-tired-means-work',
    },
    {
      id: 'pewd-q15',
      type: 'spot-misconception',
      stem: 'Marcus says, "Whenever a force acts on an object, work is done on the object."',
      tier: 'confident',
      statements: [
        {
          text: 'Marcus is right. Any force, any time, does work.',
          isMisconception: true,
        },
        {
          text: 'Marcus is not right. Work is only done if the object moves, and only the distance moved in the direction of the force counts in W = F x d.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pewd-mis-any-force-does-work',
    },
    {
      id: 'pewd-q16',
      type: 'numeric-entry',
      stem: 'A Plymouth fisher hauls a 50 N net 6 m up the side of a boat, pulling straight up while the net moves straight up. How much work is done on the net, in joules?',
      tier: 'challenge',
      correctAnswer: 300,
      unit: 'J',
      xpValue: 20,
      hint: 'Force and motion point the same way. W = F x d = 50 x 6.',
    },
    {
      id: 'pewd-q17',
      type: 'numeric-entry',
      stem: 'A 90 N box is pushed steadily across a flat warehouse floor in Hull. The push is in the direction of motion and the worker does 720 J of work on the box. How far does the box move, in metres?',
      tier: 'challenge',
      correctAnswer: 8,
      unit: 'm',
      xpValue: 20,
      hint: 'Rearrange W = F x d to d = W / F. So d = 720 / 90.',
    },
    {
      id: 'pewd-q18',
      type: 'multiple-choice',
      stem: 'A pupil says, "Pushing twice as hard always means doing twice as much work." Which sentence is the best reply?',
      tier: 'challenge',
      options: [
        'They are right. Force is all that matters for work done.',
        'They are right, because W only depends on force.',
        'They are right, because doubling F always doubles W.',
        'They are not quite right. Work doubles only if the distance moved in the direction of the force stays the same. If the bigger push only moves the object the same distance, then yes; but a bigger push that moves a shorter distance can do less work.',
      ],
      correctIndex: 3,
      xpValue: 20,
      misconceptionId: 'pewd-mis-only-force-matters',
      hint: 'W = F x d. Both F and d matter. A bigger F over a smaller d can give less work.',
    },
    {
      id: 'pewd-q19',
      type: 'drag-order',
      stem: 'Put the steps in the right order for working out the work done by a steady force that moves an object in the direction of the force.',
      tier: 'challenge',
      items: [
        'Substitute F and d into W = F x d, evaluate, and state W in joules.',
        'Read F (in newtons) and d (in metres) from the question.',
        'Check that the force and the motion point in the same direction, so the full F counts.',
        'Write the rule: W = F x d.',
      ],
      correctOrder: [1, 2, 3, 0],
      xpValue: 20,
      hint: 'Read the quantities, check the directions match, write the rule, then do the arithmetic.',
    },
    {
      id: 'pewd-q20',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is working out how far a 40 N box has moved across a flat floor, given that 320 J of work has been done on it by a 40 N push in the direction of motion.',
      tier: 'challenge',
      steps: [
        'List the quantities: F = 40 N, W = 320 J. We want d in metres.',
        'Check the directions. The push is along the floor and the box moves along the floor in the same direction, so the full 40 N counts.',
        'Write the rule: W = F x d.',
        null,
        'Substitute and evaluate: d = 320 / 40 = 8 m.',
        'State the answer: the box has moved 8 m in the direction of the push.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Rearrange for d by dividing both sides by F, giving d = W / F.',
      xpValue: 20,
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 1F, on work and energy, candidates wrote that holding a heavy object in one place was "doing work" on it, missing that d = 0 means W = 0.
    {
      id: 'pewd-mis-tired-means-work',
      description:
        'Treating "feeling tired" as proof that work is done, missing that no work is done on an object that does not move.',
      triggerAnswer: 'tired-means-work',
      correction:
        'Work done in physics needs the object to move in the direction of the force. If d = 0 m, then W = F x 0 = 0 J, even when holding the object feels hard.',
      reExplanation:
        'A shopper holds a 30 N basket still. The basket does not move, so d = 0 m and W = 0 J on the basket. Her muscles twitch and use chemical energy, but that is not work done on the basket. In W = F x d, only motion of the object in the direction of the force counts.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2021, Paper J259/01, on work done, candidates quoted the unit of work as newtons rather than joules.
    {
      id: 'pewd-mis-work-in-newtons',
      description:
        'Quoting the unit of work as newtons, missing that work is a form of energy and is measured in joules.',
      triggerAnswer: 'work-in-newtons',
      correction:
        'Force is measured in newtons. Work is force times distance, and is measured in joules. 1 joule equals 1 newton times 1 metre.',
      reExplanation:
        'Newtons are the unit of force, not work. Multiply a force in newtons by a distance in metres and the answer is in joules. So a 25 N push over 4 m gives W = 100 J. Writing the answer as 100 N would treat work as a force, which it is not. Work is the energy transferred when a force makes something move.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2019, Paper 1PH0/1F, on work done, candidates wrote that any force acting on an object always does work, missing the "moves through a distance" condition.
    {
      id: 'pewd-mis-any-force-does-work',
      description:
        'Claiming that any force does work on the object it acts on, missing that the object must move in the direction of the force.',
      triggerAnswer: 'any-force-does-work',
      correction:
        'A force only does work on an object if the object moves, and only the part of the motion in the direction of the force counts in W = F x d.',
      reExplanation:
        'A shopper carries a basket along a flat path. The carrying force points up; the basket moves sideways. So no work is done on the basket by that force, because the motion is at right angles to it. Push a wall that does not move and again no work is done, because d = 0. The object must move in the direction of the force.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, Paper 1F, on work calculations, candidates focused only on the force and ignored the distance, claiming pushing harder always means more work.
    {
      id: 'pewd-mis-only-force-matters',
      description:
        'Assuming a bigger force always means more work done, missing that work depends equally on the distance moved.',
      triggerAnswer: 'only-force-matters',
      correction:
        'W = F x d depends on both F and d. Doubling F at the same d doubles W. Halving d at the same F halves W.',
      reExplanation:
        'A 25 N push over 4 m gives 100 J. A 50 N push over only 1 m gives 50 J, even though the push is twice as large. Both numbers matter. To compare work fairly, hold one of F and d steady and change the other. Saying "pushing harder always does more work" only fits if the distance is at least as big as before.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2022, Paper J259/02, on work and power, candidates confused W = F x d with P = W / t and quoted work in watts.
    {
      id: 'pewd-mis-work-as-power',
      description:
        'Confusing work and power, quoting work in watts or claiming the equation W = F x d depends on how long the force is applied.',
      triggerAnswer: 'work-as-power',
      correction:
        'Work in joules is W = F x d and does not depend on time. Power in watts is the rate of doing work, P = W / t.',
      reExplanation:
        'A worker who lifts a 20 N parcel 3 m up does 60 J of work whether it takes 2 s or 20 s. The work done on the parcel is the same. What changes with time is the power: 60 J in 2 s is 30 W, 60 J in 20 s is 3 W. Joules measure energy. Watts measure the rate at which that energy is transferred.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2018, Paper 1PH0/1F, on work and motion, candidates used the total path length rather than the distance moved in the direction of the force, especially for vertical lifts.
    {
      id: 'pewd-mis-distance-in-direction',
      description:
        'Using the total path length in W = F x d, missing that only the distance moved in the direction of the force should be used.',
      triggerAnswer: 'distance-in-direction',
      correction:
        'In W = F x d, d is the distance the object moves in the direction of F, not the full path length. Motion at right angles to F does not count.',
      reExplanation:
        'Lift a 20 N parcel 3 m straight up: F and d point the same way, so W = 20 x 3 = 60 J. Carry the same parcel sideways for 10 m: the lifting force is up but the motion is sideways. The distance in the direction of F is 0 m, so W = 20 x 0 = 0 J from the carrying force. Match d to F.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const energyWorkDoneZoneNodes = [energyWorkDone]
