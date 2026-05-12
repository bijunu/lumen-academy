import type { SkillNode, Zone } from '@/types/content'

const COMPASS_ROSE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <!-- Compass rose centre -->
    <circle cx="300" cy="200" r="120" />
    <circle cx="300" cy="200" r="4" fill="currentColor" />

    <!-- North arrow -->
    <line x1="300" y1="200" x2="300" y2="100" stroke-width="5" />
    <polygon points="290,110 300,85 310,110" fill="currentColor" stroke="none" />
    <text x="300" y="75" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">N</text>

    <!-- East arrow -->
    <line x1="300" y1="200" x2="400" y2="200" stroke-width="5" />
    <polygon points="390,190 415,200 390,210" fill="currentColor" stroke="none" />
    <text x="425" y="205" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">E</text>

    <!-- South arrow -->
    <line x1="300" y1="200" x2="300" y2="300" stroke-width="5" />
    <polygon points="290,290 300,315 310,290" fill="currentColor" stroke="none" />
    <text x="300" y="335" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">S</text>

    <!-- West arrow -->
    <line x1="300" y1="200" x2="200" y2="200" stroke-width="5" />
    <polygon points="210,190 185,200 210,210" fill="currentColor" stroke="none" />
    <text x="175" y="205" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">W</text>

    <!-- Sample vector arrow off to side: 30 N east -->
    <text x="540" y="100" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Vector</text>
    <text x="540" y="120" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">30 N east</text>
    <line x1="490" y1="150" x2="590" y2="150" stroke-width="5" />
    <polygon points="580,140 605,150 580,160" fill="currentColor" stroke="none" />

    <!-- Sample scalar label off to side: 30 N (no direction) -->
    <text x="540" y="250" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Scalar</text>
    <text x="540" y="270" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">30 N (size only)</text>
    <rect x="510" y="290" width="60" height="20" fill="currentColor" />
  </g>
`

const JOURNEY_TWO_LEG_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <!-- Title -->
    <text x="400" y="40" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Walk from Sevenoaks station</text>
    <text x="400" y="62" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">30 m east, then 10 m west</text>

    <!-- Horizontal ground line -->
    <line x1="100" y1="200" x2="700" y2="200" />

    <!-- Start marker -->
    <circle cx="150" cy="200" r="8" fill="currentColor" />
    <text x="150" y="230" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Start</text>

    <!-- East walk 30 m: long arrow from 150 to 600 -->
    <line x1="150" y1="170" x2="600" y2="170" stroke-width="5" />
    <polygon points="590,160 615,170 590,180" fill="currentColor" stroke="none" />
    <text x="375" y="155" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">30 m east</text>

    <!-- End of first leg -->
    <circle cx="600" cy="200" r="6" fill="currentColor" />

    <!-- West walk 10 m: short arrow from 600 back to 450 -->
    <line x1="600" y1="240" x2="450" y2="240" stroke-width="5" />
    <polygon points="460,230 435,240 460,250" fill="currentColor" stroke="none" />
    <text x="525" y="265" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">10 m west</text>

    <!-- Finish marker -->
    <circle cx="450" cy="200" r="8" fill="currentColor" />
    <text x="450" y="195" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Finish</text>

    <!-- Displacement arrow: start to finish, dashed -->
    <line x1="155" y1="320" x2="445" y2="320" stroke-width="4" stroke-dasharray="6 6" />
    <polygon points="435,310 460,320 435,330" fill="currentColor" stroke="none" />
    <text x="300" y="345" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Displacement: 20 m east</text>

    <!-- Distance label -->
    <text x="300" y="100" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Distance walked: 30 + 10 = 40 m</text>
  </g>
`

const SORT_CARDS_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <!-- Title -->
    <text x="400" y="30" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Scalar or vector?</text>

    <!-- Scalar column heading -->
    <text x="200" y="70" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Scalars: size only</text>

    <!-- Vector column heading -->
    <text x="600" y="70" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Vectors: size and direction</text>

    <!-- Scalar cards -->
    <rect x="120" y="95" width="160" height="40" />
    <text x="200" y="120" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Mass: 2 kg</text>

    <rect x="120" y="145" width="160" height="40" />
    <text x="200" y="170" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Distance: 40 m</text>

    <rect x="120" y="195" width="160" height="40" />
    <text x="200" y="220" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Speed: 5 m/s</text>

    <rect x="120" y="245" width="160" height="40" />
    <text x="200" y="270" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Time: 8 s</text>

    <rect x="120" y="295" width="160" height="40" />
    <text x="200" y="320" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Energy: 200 J</text>

    <!-- Vector cards (with little arrows on the right) -->
    <rect x="520" y="95" width="160" height="40" />
    <text x="600" y="120" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Force: 30 N right</text>

    <rect x="520" y="145" width="160" height="40" />
    <text x="600" y="170" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Displacement: 20 m east</text>

    <rect x="520" y="195" width="160" height="40" />
    <text x="600" y="220" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Velocity: 5 m/s north</text>

    <rect x="520" y="245" width="160" height="40" />
    <text x="600" y="270" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Acceleration: 2 m/s² down</text>

    <rect x="520" y="295" width="160" height="40" />
    <text x="600" y="320" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Momentum: 6 kg m/s east</text>
  </g>
`

export const forcesScalarsVectors: SkillNode = {
  id: 'physics-forces-scalars-vectors',
  title: 'Scalars and Vectors',
  description:
    'Sort everyday quantities into two families. Scalars (mass, distance, speed, time, energy) have a size only. Vectors (force, displacement, velocity, acceleration, momentum) have a size and a direction. Learn the difference between distance and displacement, and between speed and velocity, using one dimensional UK examples.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-forces',
  zoneName: 'Forces',
  tier: 'confident',
  prerequisites: ['physics-forces-types', 'physics-forces-speed-distance-time'],
  curriculum: {
    ks3Objective:
      'Forces as pushes or pulls, arising from the interaction between two objects; using force arrows in diagrams; speed and the quantitative relationship between average speed, distance and time.',
    awardingBodies: {
      aqa: '4.5.1.1 Scalar and vector quantities; distance and speed as scalars, displacement and velocity as vectors (GCSE Physics 8463)',
      edexcel: 'Topic 1 Motion and forces, 1.4-1.5 Distinguish between vector and scalar quantities (GCSE Physics 1PH0)',
      ocr: 'P2.1 Motion and forces; scalar and vector quantities, examples of each (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'fsv-scene-compass',
      title: 'A Compass Rose and Two Quantities',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read what makes a vector different from a scalar.',
      data: {
        viewBox: '0 0 700 400',
        svg: COMPASS_ROSE_SVG,
        hotspots: [
          {
            id: 'fsv-h-north',
            x: 43,
            y: 25,
            label: 'A direction',
            description:
              'North, south, east, and west are directions. A vector needs one of these (or a plus or minus along a line) to be fully named.',
          },
          {
            id: 'fsv-h-vector-sample',
            x: 77,
            y: 37,
            label: 'Vector: 30 N east',
            description:
              'A force of 30 newtons east. The size is 30 N, and the direction is east. Both pieces of information are needed to draw the arrow.',
          },
          {
            id: 'fsv-h-scalar-sample',
            x: 77,
            y: 75,
            label: 'Scalar: 30 N (size only)',
            description:
              'A scalar quantity has only a size, no direction. The newton symbol N tells you the unit, but the value 30 N alone is missing a direction so it is not a vector force; it is just a number with units.',
          },
        ],
      },
    },
    {
      id: 'fsv-scene-journey',
      title: 'Distance Walked and Displacement',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare the distance you walked with where you ended up.',
      data: {
        viewBox: '0 0 800 400',
        svg: JOURNEY_TWO_LEG_SVG,
        hotspots: [
          {
            id: 'fsv-h-leg-one',
            x: 47,
            y: 39,
            label: 'First leg: 30 m east',
            description:
              'You walk 30 m east from the station. So far the distance walked is 30 m and the displacement is also 30 m east.',
          },
          {
            id: 'fsv-h-leg-two',
            x: 66,
            y: 60,
            label: 'Second leg: 10 m west',
            description:
              'You turn round and walk 10 m back west. The distance walked goes up by 10 m to 40 m total. The displacement gets smaller because you are heading back to the start.',
          },
          {
            id: 'fsv-h-distance',
            x: 38,
            y: 25,
            label: 'Distance (scalar)',
            description:
              'Distance is the total length of the path you covered. Adding the two legs: 30 + 10 = 40 m. No direction is given; it is a scalar.',
          },
          {
            id: 'fsv-h-displacement',
            x: 38,
            y: 85,
            label: 'Displacement (vector)',
            description:
              'Displacement is the straight line from where you started to where you finished, with a direction. 30 m east take away 10 m west gives 20 m east.',
          },
        ],
      },
    },
    {
      id: 'fsv-scene-sort',
      title: 'Sorting Quantities into Two Families',
      type: 'labelled-diagram',
      instructions:
        'Click each card to read why that quantity sits in the scalar or the vector family.',
      data: {
        viewBox: '0 0 800 400',
        svg: SORT_CARDS_SVG,
        hotspots: [
          {
            id: 'fsv-h-mass',
            x: 25,
            y: 30,
            label: 'Mass is a scalar',
            description:
              'A 2 kg bag of flour is 2 kg whichever way up you turn it. No direction needed. Mass is a scalar quantity.',
          },
          {
            id: 'fsv-h-distance-card',
            x: 25,
            y: 42,
            label: 'Distance is a scalar',
            description:
              'A 40 m walk is 40 m of path, regardless of which way you wandered. Distance is a scalar quantity.',
          },
          {
            id: 'fsv-h-speed',
            x: 25,
            y: 55,
            label: 'Speed is a scalar',
            description:
              '5 m/s tells you how fast something moves, but not which way. Speed is a scalar quantity.',
          },
          {
            id: 'fsv-h-force-card',
            x: 75,
            y: 30,
            label: 'Force is a vector',
            description:
              '30 N right and 30 N left both have a size of 30 N, but they push in opposite directions and have opposite effects. Force is a vector quantity.',
          },
          {
            id: 'fsv-h-velocity-card',
            x: 75,
            y: 55,
            label: 'Velocity is a vector',
            description:
              '5 m/s north is not the same as 5 m/s south, even though both have a speed of 5 m/s. Velocity is speed in a stated direction, a vector quantity.',
          },
          {
            id: 'fsv-h-momentum-card',
            x: 75,
            y: 80,
            label: 'Momentum is a vector',
            description:
              'Momentum is mass multiplied by velocity, so it carries the direction with it. Momentum is a vector quantity.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'fsv-worked-1',
      title: 'Displacement after walking out and partway back',
      steps: [
        {
          explanation:
            'Read the journey carefully. A pupil walks 80 m east along the Thames path, then turns round and walks 30 m back west.',
        },
        {
          explanation:
            'Work out the total distance covered. Distance is the sum of every leg, regardless of direction.',
          maths: 'distance = 80 m + 30 m = 110 m',
        },
        {
          explanation:
            'Now find the displacement. Pick east as the positive direction along the line. The east leg is +80 m and the west leg is taken away.',
          maths: 'displacement = 80 m east - 30 m east = 50 m east',
        },
        {
          explanation:
            'State both answers in the right shape. Distance has only a size, so 110 m is the full answer. Displacement is a vector, so it needs the direction too.',
        },
        {
          explanation:
            'Final answer: distance walked is 110 m; displacement from the start is 50 m east. The numbers are different, which is the whole point of the two ideas.',
        },
      ],
    },
    {
      id: 'fsv-worked-2',
      title: 'Telling apart speed and velocity on the M25',
      steps: [
        {
          explanation:
            'A car on the M25 is travelling at 30 m/s heading clockwise (north on the section near Watford). State its speed and its velocity.',
        },
        {
          explanation:
            'Pick out the speed. Speed is a scalar, the size of the motion, with no direction.',
          maths: 'speed = 30 m/s',
        },
        {
          explanation:
            'Pick out the velocity. Velocity is the speed together with the direction it is travelling.',
          maths: 'velocity = 30 m/s north',
        },
        {
          explanation:
            'A second car on the other side of the motorway is going 30 m/s south. Compare the two.',
        },
        {
          explanation:
            'The two cars share the same speed, 30 m/s. Their velocities are different because the directions are opposite, 30 m/s north against 30 m/s south. Same speed, different velocity.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'fsv-q1',
      type: 'multiple-choice',
      stem: 'Which of these is the best definition of a scalar quantity?',
      tier: 'core',
      options: [
        'A quantity that has a size only, with no direction.',
        'A quantity that has a direction only, with no size.',
        'A quantity that always has units of metres.',
        'A quantity that can only be positive.',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'A scalar is one of two families. The other family carries a direction with it.',
    },
    {
      id: 'fsv-q2',
      type: 'multiple-choice',
      stem: 'Which of these is the best definition of a vector quantity?',
      tier: 'core',
      options: [
        'A quantity that is always measured in newtons.',
        'A quantity that has size and direction together.',
        'A quantity that has direction only, no size.',
        'A quantity that is the same in every direction.',
      ],
      correctIndex: 1,
      xpValue: 10,
      hint: 'A vector needs two pieces of information to be fully named.',
    },
    {
      id: 'fsv-q3',
      type: 'multiple-choice',
      stem: 'A bag of sugar on a kitchen scale reads 1 kg. Which family does this quantity belong to?',
      tier: 'core',
      options: [
        'A vector, because it has a unit.',
        'A vector, because gravity pulls it down.',
        'A scalar, because the reading has only a size.',
        'Neither; mass is a third family of its own.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'fsv-mis-units-mean-vector',
      hint: 'Does the reading on the scale carry a direction with it?',
    },
    {
      id: 'fsv-q4',
      type: 'multiple-choice',
      stem: 'Which row lists only scalars?',
      tier: 'core',
      options: [
        'Mass, distance, force, time.',
        'Mass, distance, speed, time.',
        'Velocity, displacement, momentum, force.',
        'Speed, velocity, distance, displacement.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'fsv-mis-speed-as-vector',
      hint: 'Check every item. If any quantity needs a direction, the row is wrong.',
    },
    {
      id: 'fsv-q5',
      type: 'numeric-entry',
      stem: 'A pupil walks 30 m east from Sevenoaks station, then 10 m back west along the same path. What is the total distance walked, in metres?',
      tier: 'core',
      correctAnswer: 40,
      unit: 'm',
      xpValue: 10,
      misconceptionId: 'fsv-mis-distance-equals-displacement',
      hint: 'Distance is the total length of path covered. Add the two legs together; the directions do not matter for distance.',
    },
    {
      id: 'fsv-q6',
      type: 'numeric-entry',
      stem: 'For the same walk (30 m east then 10 m west), what is the size of the displacement, in metres? Give the size only, not the direction.',
      tier: 'core',
      correctAnswer: 20,
      unit: 'm',
      xpValue: 10,
      misconceptionId: 'fsv-mis-distance-equals-displacement',
      hint: 'Take east as positive. Add the east leg, then subtract the west leg. The size of the answer is what you need.',
    },
    {
      id: 'fsv-q7',
      type: 'numeric-entry',
      stem: 'A school bus drives 6 km north along the A21, then turns round and drives 2 km south back along the same road. What is the size of its displacement from the start, in kilometres?',
      tier: 'core',
      correctAnswer: 4,
      unit: 'km',
      xpValue: 10,
      misconceptionId: 'fsv-mis-distance-equals-displacement',
      hint: 'Take north as positive. 6 north then 2 south leaves the bus 4 km north of the start.',
    },
    {
      id: 'fsv-q8',
      type: 'drag-order',
      stem: 'Sort the cards by reading them from top to bottom in this order: scalars first (mass, distance, speed), then vectors (force, displacement, velocity).',
      tier: 'confident',
      items: [
        'Force (30 N right)',
        'Mass (2 kg)',
        'Velocity (5 m/s north)',
        'Speed (5 m/s)',
        'Displacement (20 m east)',
        'Distance (40 m)',
      ],
      correctOrder: [1, 5, 3, 0, 4, 2],
      xpValue: 15,
      hint: 'Group every quantity with no direction first (mass, distance, speed), then group every quantity with a direction.',
    },
    {
      id: 'fsv-q9',
      type: 'multiple-choice',
      stem: 'Two cars on the M25 both have a speed of 30 m/s. The first heads clockwise; the second heads anticlockwise. Which statement is true?',
      tier: 'confident',
      options: [
        'They have the same speed and the same velocity.',
        'They have different speeds because they head different ways.',
        'They have the same speed but different velocities.',
        'They have different speeds and the same velocity.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'fsv-mis-same-speed-same-velocity',
      hint: 'Speed is the size only. Velocity is the size with the direction. The two cars share the size but not the direction.',
    },
    {
      id: 'fsv-q10',
      type: 'multiple-choice',
      stem: 'A pupil writes: "The velocity of the train is 50 m/s." What is wrong with this statement?',
      tier: 'confident',
      options: [
        'The unit is wrong; velocity is measured in newtons.',
        'Velocity is a vector, so it must include a direction (for example, 50 m/s north).',
        'Nothing; that is a complete velocity.',
        'Velocity must be given as a fraction.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'fsv-mis-velocity-as-scalar',
      hint: 'A velocity reading must give two pieces of information for it to be complete.',
    },
    {
      id: 'fsv-q11',
      type: 'multiple-choice',
      stem: 'On a Channel ferry crossing, the captain reports: "We are doing 12 m/s south towards Calais." Which quantity has she described?',
      tier: 'confident',
      options: [
        'Speed only.',
        'Distance.',
        'Mass.',
        'Velocity.',
      ],
      correctIndex: 3,
      xpValue: 15,
      hint: 'She has given a size (12 m/s) and a direction (south). Both pieces are present.',
    },
    {
      id: 'fsv-q12',
      type: 'numeric-entry',
      stem: 'A walker on Snowdon climbs 600 m up a winding path, then climbs 200 m back down the same path. What total distance, in metres, has the walker covered along the path?',
      tier: 'confident',
      correctAnswer: 800,
      unit: 'm',
      xpValue: 15,
      hint: 'Distance adds every leg of the path, regardless of which way along the path you were going.',
    },
    {
      id: 'fsv-q13',
      type: 'numeric-entry',
      stem: 'A ScotRail train leaves Edinburgh and runs 120 km north to a station, then comes 45 km south to a halt at the next stop. What is the size of the train’s displacement from Edinburgh, in kilometres?',
      tier: 'challenge',
      correctAnswer: 75,
      unit: 'km',
      xpValue: 20,
      misconceptionId: 'fsv-mis-distance-equals-displacement',
      hint: 'Take north as positive. 120 north then 45 south leaves the train 75 km north of Edinburgh.',
    },
    {
      id: 'fsv-q14',
      type: 'drag-order',
      stem: 'Put the steps for finding a displacement along a straight road into the right order.',
      tier: 'confident',
      items: [
        'Add the legs that go the positive way; subtract the legs that go the negative way.',
        'Pick one direction along the road as the positive direction.',
        'State the answer as a number with a direction (the vector).',
        'Read each leg of the journey and note its size and direction.',
      ],
      correctOrder: [1, 3, 0, 2],
      xpValue: 15,
      misconceptionId: 'fsv-mis-add-direction-as-number',
      hint: 'Start with picking a positive direction, then read off each leg, then combine, then state with a direction.',
    },
    {
      id: 'fsv-q15',
      type: 'spot-misconception',
      stem: 'Theo says, "Velocity is just another word for speed. They mean the same thing."',
      tier: 'confident',
      statements: [
        {
          text: 'Theo is right. Speed and velocity are two names for the same idea, so 5 m/s and 5 m/s north are exactly the same quantity.',
          isMisconception: true,
        },
        {
          text: 'Theo is not right. Speed is a scalar (5 m/s tells you the size only). Velocity is a vector (5 m/s north tells you the size and the direction). Two motions can share a speed yet have different velocities.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fsv-mis-speed-equals-velocity',
    },
    {
      id: 'fsv-q16',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is working out the displacement of a runner who jogs 500 m east along a Sevenoaks high street, then 200 m back west.',
      tier: 'confident',
      steps: [
        'Pick a positive direction along the street. Take east as positive, so west is negative.',
        'Read the two legs: 500 m east is +500 m, and 200 m west is taken away.',
        null,
        'State the answer as a vector: 300 m east. The direction is part of the answer; size on its own is not enough.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Combine the legs along the chosen direction. 500 m east minus 200 m east gives 300 m east. The size is 300 m and the direction is east.',
      xpValue: 15,
    },
    {
      id: 'fsv-q17',
      type: 'multiple-choice',
      stem: 'A cyclist rides 4 km east along the Thames path from Tower Bridge, then 4 km back west along the same path to the start. Which row of values is correct?',
      tier: 'challenge',
      options: [
        'Distance 8 km; displacement 0 km.',
        'Distance 4 km; displacement 4 km.',
        'Distance 0 km; displacement 8 km east.',
        'Distance 8 km; displacement 8 km east.',
      ],
      correctIndex: 0,
      xpValue: 20,
      misconceptionId: 'fsv-mis-distance-equals-displacement',
      hint: 'The cyclist covers 4 km then 4 km of path, but ends back where she started, so her start to finish straight line is zero.',
    },
    {
      id: 'fsv-q18',
      type: 'multiple-choice',
      stem: 'A drone flies 90 m east, then 30 m west, then 50 m east, all along the same straight school field at Tunbridge Wells. What is its displacement from the start?',
      tier: 'challenge',
      options: [
        '170 m east (the total of every leg).',
        '110 m east (90 plus 50, ignoring west).',
        '110 m east (90 plus 30 minus 10).',
        '110 m east (90 plus 50 minus 30).',
      ],
      correctIndex: 3,
      xpValue: 20,
      misconceptionId: 'fsv-mis-distance-equals-displacement',
      hint: 'Take east as positive: 90 east, then -30 (west), then +50 east. Add them with the signs to get the displacement.',
    },
    {
      id: 'fsv-q19',
      type: 'numeric-entry',
      stem: 'An ant crawls 8 cm north along a school desk, then 3 cm east, then 8 cm south back to the same line it started on (parallel to the start). The ant has not yet stopped, and the journey was in three legs. What total distance, in centimetres, has the ant crawled?',
      tier: 'challenge',
      correctAnswer: 19,
      unit: 'cm',
      xpValue: 20,
      hint: 'Distance does not care about direction. Add 8, 3, and 8 along the path the ant took.',
    },
    {
      id: 'fsv-q20',
      type: 'spot-misconception',
      stem: 'Maya says, "A 5 kg bag has a mass of 5 kg downwards, because gravity always pulls down. So mass must be a vector."',
      tier: 'challenge',
      statements: [
        {
          text: 'Maya is right. Any quantity that lives on Earth feels gravity, so it must have a direction. Mass is therefore a vector.',
          isMisconception: true,
        },
        {
          text: 'Maya is not right. Mass is the amount of matter in the bag and has no direction; it is a scalar. The pull of gravity on the bag is a separate quantity called weight, and weight is the vector.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'fsv-mis-mass-as-vector',
    },
    {
      id: 'fsv-q21',
      type: 'free-text',
      stem: 'A friend on a Channel ferry tells you: "The ferry is doing 10 m/s." You ask whether they have given you a speed or a velocity. Write a short reply (two or three sentences) explaining which one they have given, what is missing if you wanted the other, and giving one example of a complete velocity reading for the same ferry.',
      tier: 'challenge',
      sampleAnswer:
        'They have given a speed, because 10 m/s is a size only with no direction. To turn it into a velocity, you need to add the direction the ferry is heading. For example, a complete velocity might be 10 m/s south towards Calais; this tells you both how fast the ferry is going and which way it is travelling.',
      keywords: ['speed', 'velocity', 'direction', 'scalar', 'vector', 'm/s'],
      xpValue: 20,
      misconceptionId: 'fsv-mis-velocity-as-scalar',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics examiner report June 2022, Paper 1F, candidates label speed as a vector when listing examples of vector quantities
    {
      id: 'fsv-mis-speed-as-vector',
      description:
        'Treating speed as a vector quantity and velocity as a scalar, swapping the two families round.',
      triggerAnswer: 'speed-as-vector',
      correction:
        'Speed is a scalar (size only). Velocity is a vector (size with direction). A car going 30 m/s has a speed; a car going 30 m/s north has a velocity.',
      reExplanation:
        'Think of a speedometer in a car. It only reads 30, not 30 north or 30 south. The reading is a size with no direction, so it shows a speed and not a velocity. To give the velocity you add the direction of travel, for example "30 m/s north along the A21". Same size, extra information, different name.',
    },
    // Source: Edexcel GCSE Physics examiner report June 2023, Paper 1PH0/1F, candidates report a velocity with no direction stated
    {
      id: 'fsv-mis-velocity-as-scalar',
      description:
        'Reporting a velocity as a single number with units only, with no direction given alongside.',
      triggerAnswer: 'velocity-as-scalar',
      correction:
        'A velocity must include a direction. 5 m/s on its own is a speed; to turn it into a velocity you add a direction such as 5 m/s east.',
      reExplanation:
        'Imagine a school PE teacher times two pupils running 5 m/s round a track in opposite directions. The speeds are equal, so the times will be the same. The velocities are different though, because the directions point opposite ways. The direction is half of what a velocity means, so leaving it out gives back a speed, not a velocity.',
    },
    // Source: CGP KS3 Physics Study Guide Common Mistake box on distance and displacement
    {
      id: 'fsv-mis-distance-equals-displacement',
      description:
        'Believing that distance and displacement always give the same number, missing that displacement can shrink (or be zero) when the journey doubles back.',
      triggerAnswer: 'distance-equals-displacement',
      correction:
        'Distance is the total path length. Displacement is the straight line from start to finish, with a direction. The two only match when the path goes one way without doubling back.',
      reExplanation:
        'Walk 30 m east from Sevenoaks station, then 10 m back west. Distance is 30 + 10 = 40 m, every step counts. Displacement is 30 east take away 10 east, leaving 20 m east; the small back-walk cuts your final position closer to the start. If you walked the whole way back, distance would be 60 m but displacement would be 0 m, because you ended where you began.',
    },
    // Source: OCR GCSE Physics examiner report June 2023, J259/02, candidates classify mass as a vector because it has a unit
    {
      id: 'fsv-mis-units-mean-vector',
      description:
        'Treating every quantity that has units (kg, J, m) as a vector, on the grounds that any unit must point somewhere.',
      triggerAnswer: 'units-mean-vector',
      correction:
        'Units do not decide the family. Many scalars carry units (mass in kilograms, energy in joules, distance in metres). What matters is whether the quantity needs a direction.',
      reExplanation:
        'A 1 kg bag of flour reads 1 kg whether it lies flat or stands up. The size is all there is, even though kilograms are a unit. Mass, distance, speed, time, and energy all carry units yet are scalars. Force, displacement, velocity, acceleration, and momentum are the vectors. The test is direction, not units.',
    },
    // Authored, no external source
    {
      id: 'fsv-mis-mass-as-vector',
      description:
        'Confusing mass with weight, then arguing that because weight points downwards, mass must also be a vector.',
      triggerAnswer: 'mass-as-vector',
      correction:
        'Mass is the amount of matter in an object and has no direction; it is a scalar. The downward pull of gravity on the object is called weight, and weight is the vector.',
      reExplanation:
        'A 2 kg laptop has a mass of 2 kg whether it sits on a desk, hangs from a strap, or floats inside the Space Station. The 2 kg never changes direction. The weight of the laptop pulls it down towards the Earth and is reported in newtons with the direction down. Same object, two quantities: mass is the scalar, weight is the vector.',
    },
    // Source: AQA GCSE Physics examiner report June 2024, Paper 1F, candidates equate two velocities of equal size but opposite direction
    {
      id: 'fsv-mis-same-speed-same-velocity',
      description:
        'Believing that two objects going at the same speed must also have the same velocity, even when they head in opposite directions.',
      triggerAnswer: 'same-speed-same-velocity',
      correction:
        'Two objects share a velocity only when they share both the size and the direction of their motion. Same speed plus opposite direction means different velocity.',
      reExplanation:
        'On the M25 a car going 30 m/s clockwise and a car going 30 m/s anticlockwise share the same speed. Their velocities are not equal: one is 30 m/s clockwise, the other 30 m/s anticlockwise. Velocity carries direction with it, so reversing direction reverses the velocity (sometimes written with a minus sign), even when the size stays the same.',
    },
    // Source: Edexcel GCSE Physics examiner report June 2022, Paper 1PH0, candidates state "speed and velocity mean the same thing" in short-answer questions
    {
      id: 'fsv-mis-speed-equals-velocity',
      description:
        'Treating speed and velocity as two names for the same idea, so a speed value alone counts as a velocity.',
      triggerAnswer: 'speed-equals-velocity',
      correction:
        'Speed and velocity share a size but differ in direction. Speed is a scalar; velocity is the same size with a stated direction. You cannot give one and call it the other.',
      reExplanation:
        'A runner does 5 m/s round a school track. Their speed is 5 m/s the whole time. Their velocity points along the track: 5 m/s north on the back straight, 5 m/s south on the front straight. The speed stays the same on every leg, but the velocity changes whenever the runner turns a bend. The two ideas are linked but not the same.',
    },
    // Source: CGP KS3 Physics Workbook Common Mistake box on combining directions
    {
      id: 'fsv-mis-add-direction-as-number',
      description:
        'Trying to add a speed and a direction together as if direction were a number, for example writing "30 m/s + north = 30 north m/s".',
      triggerAnswer: 'add-direction-as-number',
      correction:
        'Direction is not a number to add. To turn a speed into a velocity, you label the speed with a direction (5 m/s north), or use a sign along a chosen line (+5 m/s).',
      reExplanation:
        'A velocity is reported as a value together with a direction, not by combining them with a plus sign. Write 5 m/s north, or pick east as positive along a line and write +5 m/s. To add two velocities along a line, set one direction as positive and add the signed numbers. Never add a compass word to a number; the direction is a label, not a number.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const forcesScalarsVectorsZoneNodes = [forcesScalarsVectors]

export const forcesScalarsVectorsZone: Zone = {
  id: 'physics-forces',
  name: 'Forces',
  realm: 'mechanica',
  nodeIds: forcesScalarsVectorsZoneNodes.map(n => n.id),
}
