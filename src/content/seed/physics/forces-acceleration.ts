import type { SkillNode } from '@/types/content'

const CAR_FROM_REST_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Car at a traffic light: 0 to 13 m/s in 5 s</text>

    <!-- Road -->
    <line x1="60" y1="280" x2="740" y2="280" />

    <!-- Traffic light pole -->
    <rect x="80" y="180" width="6" height="100" fill="currentColor" />
    <rect x="70" y="160" width="26" height="30" fill="currentColor" />
    <circle cx="83" cy="175" r="6" fill="white" stroke="currentColor" />

    <!-- Car at start (t = 0 s, u = 0 m/s) -->
    <rect x="120" y="240" width="80" height="40" fill="currentColor" />
    <circle cx="135" cy="280" r="8" fill="currentColor" />
    <circle cx="185" cy="280" r="8" fill="currentColor" />
    <text x="160" y="310" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">t = 0 s</text>
    <text x="160" y="325" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">u = 0 m/s</text>

    <!-- Car at end (t = 5 s, v = 13 m/s) -->
    <rect x="540" y="240" width="80" height="40" fill="currentColor" />
    <circle cx="555" cy="280" r="8" fill="currentColor" />
    <circle cx="605" cy="280" r="8" fill="currentColor" />
    <line x1="540" y1="260" x2="500" y2="260" />
    <polygon points="508,253 495,260 508,267" fill="currentColor" stroke="none" />
    <text x="510" y="245" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">motion forwards</text>
    <text x="580" y="310" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">t = 5 s</text>
    <text x="580" y="325" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">v = 13 m/s</text>

    <!-- Calculation panel -->
    <text x="400" y="100" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">acceleration = change in velocity / time</text>
    <text x="400" y="120" text-anchor="middle" font-size="14" stroke="none" fill="currentColor">a = (v - u) / t</text>
    <text x="400" y="140" text-anchor="middle" font-size="14" stroke="none" fill="currentColor">a = (13 - 0) / 5 = 2.6 m/s squared</text>

    <text x="400" y="370" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">positive a: car is speeding up in the forwards direction</text>
  </g>
`

const TRAIN_PULLING_AWAY_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">ScotRail train pulling away: 0 to 20 m/s in 40 s</text>

    <!-- Track -->
    <line x1="60" y1="260" x2="740" y2="260" />
    <line x1="60" y1="280" x2="740" y2="280" />

    <!-- Platform on the left -->
    <rect x="60" y="180" width="160" height="60" fill="currentColor" />
    <text x="140" y="220" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="white">Platform</text>

    <!-- Train carriage -->
    <rect x="260" y="200" width="200" height="60" fill="currentColor" />
    <circle cx="290" cy="270" r="10" fill="currentColor" />
    <circle cx="340" cy="270" r="10" fill="currentColor" />
    <circle cx="390" cy="270" r="10" fill="currentColor" />
    <circle cx="440" cy="270" r="10" fill="currentColor" />
    <text x="360" y="235" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="white">ScotRail</text>

    <!-- Motion arrow -->
    <line x1="500" y1="230" x2="600" y2="230" />
    <polygon points="592,223 605,230 592,237" fill="currentColor" stroke="none" />
    <text x="550" y="215" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">speeding up</text>

    <!-- Data block -->
    <text x="400" y="100" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">u = 0 m/s, v = 20 m/s, t = 40 s</text>
    <text x="400" y="120" text-anchor="middle" font-size="14" stroke="none" fill="currentColor">a = (20 - 0) / 40 = 0.5 m/s squared</text>
    <text x="400" y="140" text-anchor="middle" font-size="14" stroke="none" fill="currentColor">gentle, steady pull from the platform</text>

    <text x="400" y="350" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">small a feels smooth, large a feels like a strong push back into the seat</text>
  </g>
`

const BASKETBALL_DECELERATING_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Basketball rising: 8 m/s up to 0 m/s in 0.8 s</text>

    <!-- Ground -->
    <line x1="60" y1="360" x2="740" y2="360" />

    <!-- Ball at launch -->
    <circle cx="200" cy="320" r="20" fill="currentColor" />
    <line x1="200" y1="300" x2="200" y2="240" />
    <polygon points="192,250 200,235 208,250" fill="currentColor" stroke="none" />
    <text x="200" y="200" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">u = 8 m/s up</text>

    <!-- Ball at peak -->
    <circle cx="500" cy="160" r="20" fill="currentColor" />
    <text x="500" y="130" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">v = 0 m/s</text>
    <text x="500" y="115" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">(just for an instant)</text>

    <!-- Curved path -->
    <path d="M 200 320 Q 350 160 500 160" stroke-dasharray="6 6" />

    <!-- Calc -->
    <text x="400" y="240" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Take up as positive.</text>
    <text x="400" y="260" text-anchor="middle" font-size="14" stroke="none" fill="currentColor">a = (v - u) / t = (0 - 8) / 0.8 = -10 m/s squared</text>
    <text x="400" y="280" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">negative a means slowing while still moving up</text>
    <text x="400" y="395" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">the ball keeps moving up until v reaches zero; only then does it start to fall</text>
  </g>
`

export const forcesAcceleration: SkillNode = {
  id: 'physics-forces-acceleration',
  title: 'Acceleration',
  description:
    'Acceleration is the rate of change of velocity. Use a = (v - u) / t in metres per second squared, with u as the starting velocity and v as the final velocity, both in m/s, and t in seconds. Read the sign of a as a direction clue: positive a means the object is speeding up in the chosen positive direction, negative a means it is slowing down (or speeding up in the opposite direction). Work with everyday UK contexts: a car pulling away from a traffic light, a ScotRail commuter train leaving a platform, a basketball thrown straight up.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-forces',
  zoneName: 'Forces',
  tier: 'challenge',
  prerequisites: ['physics-forces-speed-distance-time'],
  curriculum: {
    ks3Objective:
      'Forces being needed to cause objects to stop or start moving, or to change their speed or direction of motion (qualitative only); change in motion as the effect of a resultant force.',
    awardingBodies: {
      aqa: '4.5.6.1.5 Acceleration; a = (v - u) / t, uniform acceleration (GCSE Physics 8463)',
      edexcel:
        'Topic 1 Motion and forces, 1.6-1.8 Use the equation: acceleration = change in velocity / time taken (GCSE Physics 1PH0)',
      ocr: 'P2.1 Motion; acceleration as change of velocity per unit time, a = (v - u) / t (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'fac-scene-car-from-rest',
      title: 'Car at a Traffic Light',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to follow the car from rest up to 13 m/s in 5 s.',
      data: {
        viewBox: '0 0 800 400',
        svg: CAR_FROM_REST_SVG,
        hotspots: [
          {
            id: 'fac-car-u',
            x: 20,
            y: 80,
            label: 'Starting velocity u = 0 m/s',
            description:
              'The car is at rest at a 30 mph junction. u is short for the initial velocity at the start of the timed bit. Both u and v live in m/s.',
          },
          {
            id: 'fac-car-v',
            x: 73,
            y: 80,
            label: 'Final velocity v = 13 m/s',
            description:
              'Five seconds later the speedometer reads about 30 mph, which is roughly 13 m/s. v is the velocity at the end of the timed bit.',
          },
          {
            id: 'fac-car-t',
            x: 50,
            y: 25,
            label: 'Time taken t = 5 s',
            description:
              't is the time the velocity took to change. Read it from a stopwatch or the question. Keep it in seconds so a comes out in m/s squared.',
          },
          {
            id: 'fac-car-result',
            x: 50,
            y: 38,
            label: 'a = (v - u) / t = 2.6 m/s squared',
            description:
              'Each second, the velocity grows by 2.6 m/s. So at t = 1 s the speedometer reads about 2.6 m/s, at t = 2 s about 5.2 m/s, and so on up to 13 m/s at 5 s.',
          },
        ],
      },
    },
    {
      id: 'fac-scene-train-pulling-away',
      title: 'Train Pulling Away',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read the velocities and find a for a ScotRail train leaving a platform.',
      data: {
        viewBox: '0 0 800 400',
        svg: TRAIN_PULLING_AWAY_SVG,
        hotspots: [
          {
            id: 'fac-train-start',
            x: 25,
            y: 60,
            label: 'On the platform: u = 0 m/s',
            description:
              'A commuter ScotRail train is held at a Glasgow platform. It is at rest, so u = 0 m/s. The doors close.',
          },
          {
            id: 'fac-train-end',
            x: 75,
            y: 60,
            label: 'Forty seconds later: v = 20 m/s',
            description:
              'After 40 s of steady pulling away, the train reaches 20 m/s. That is about 72 km/h, a fair line speed once clear of the station.',
          },
          {
            id: 'fac-train-calc',
            x: 50,
            y: 30,
            label: 'a = (20 - 0) / 40 = 0.5 m/s squared',
            description:
              'The gentle 0.5 m/s squared feels smooth in your seat. A bigger a, say 1.5 m/s squared, would push you back firmly the moment the train moved.',
          },
          {
            id: 'fac-train-units',
            x: 50,
            y: 88,
            label: 'Why m/s squared?',
            description:
              'a is in m/s per s, the change in m/s every second. Writing it m/s squared is just shorthand for "m/s, each second". So 0.5 m/s squared means the velocity goes up by 0.5 m/s every second.',
          },
        ],
      },
    },
    {
      id: 'fac-scene-basketball-decelerating',
      title: 'Basketball Slowing as it Rises',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see a negative acceleration on a ball still moving in the positive direction.',
      data: {
        viewBox: '0 0 800 400',
        svg: BASKETBALL_DECELERATING_SVG,
        hotspots: [
          {
            id: 'fac-ball-launch',
            x: 25,
            y: 50,
            label: 'u = 8 m/s upwards',
            description:
              'A pupil throws a basketball straight up at 8 m/s in a Sheffield PE lesson. Take up as the positive direction.',
          },
          {
            id: 'fac-ball-peak',
            x: 63,
            y: 32,
            label: 'v = 0 m/s at the peak',
            description:
              'At the very top of the throw the ball pauses for an instant before falling back. v = 0 m/s. Up to that point the ball is still moving upwards.',
          },
          {
            id: 'fac-ball-sign',
            x: 50,
            y: 65,
            label: 'a = -10 m/s squared',
            description:
              'a = (0 - 8) / 0.8 = -10 m/s squared. The minus sign tells you the change in velocity is downwards, opposite to the chosen positive direction. The ball is slowing while still moving up.',
          },
          {
            id: 'fac-ball-meaning',
            x: 50,
            y: 75,
            label: 'Negative a does not mean moving backwards',
            description:
              'Until the peak, the velocity stays positive (upwards), the ball goes up, but a is negative because the velocity is dropping. Negative a means the velocity is changing in the negative direction; it does not say which way the object is moving right now.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'fac-worked-1',
      title: 'A car from 0 to 13 m/s in 5 s: finding a',
      steps: [
        {
          explanation:
            'Pick out the three quantities. A car pulls away from a traffic light from rest (u = 0 m/s) and reaches 13 m/s after 5 s. We want the acceleration a.',
        },
        {
          explanation:
            'Check the units. u and v are in m/s, t is in seconds, so a will come out in m/s per s, written m/s squared. No conversion is needed.',
        },
        {
          explanation: 'Write the rule. Use a = (v - u) / t.',
          maths: 'a = (v - u) / t',
        },
        {
          explanation: 'Substitute the three numbers.',
          maths: 'a = (13 - 0) / 5',
        },
        {
          explanation: 'Evaluate.',
          maths: 'a = 2.6 m/s squared',
        },
        {
          explanation:
            'State the answer in words. The car gains 2.6 m/s of velocity every second. The sign is positive, so the velocity is changing in the forwards direction; the car is speeding up.',
        },
      ],
    },
    {
      id: 'fac-worked-2',
      title: 'A bus from rest at 1.2 m/s squared for 6 s: finding v',
      steps: [
        {
          explanation:
            'Pick out the three quantities. A London bus pulls away from a bus stop at a steady 1.2 m/s squared from rest (u = 0 m/s) for 6 s. We want the final velocity v.',
        },
        {
          explanation: 'Write the rule and rearrange. Start from a = (v - u) / t and multiply both sides by t.',
          maths: 'a x t = v - u',
        },
        {
          explanation: 'Add u to both sides to get v on its own.',
          maths: 'v = u + a x t',
        },
        {
          explanation: 'Substitute the numbers, all in matching units.',
          maths: 'v = 0 + 1.2 x 6',
        },
        {
          explanation: 'Evaluate.',
          maths: 'v = 7.2 m/s',
        },
        {
          explanation:
            'State the answer. After 6 s, the bus is moving at 7.2 m/s, which is about 26 km/h. That feels right for a bus that has only just left the stop.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'fac-q1',
      type: 'multiple-choice',
      stem: 'Which equation links acceleration with starting velocity, final velocity and time?',
      tier: 'core',
      options: [
        'a = (v + u) / t',
        'a = u - v / t',
        'a = (v - u) / t',
        'a = t / (v - u)',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'fac-mis-sum-instead-of-difference',
      hint: 'Acceleration is the change in velocity each second. Change means final minus initial, shared out over the time.',
    },
    {
      id: 'fac-q2',
      type: 'multiple-choice',
      stem: 'Which unit is the right one for acceleration?',
      tier: 'core',
      options: [
        'm/s',
        'm/s squared',
        'newtons',
        'seconds',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'fac-mis-forget-units',
      hint: 'a is "metres per second, each second". So the unit reads m/s every s, written m/s squared.',
    },
    {
      id: 'fac-q3',
      type: 'multiple-choice',
      stem: 'A car has an acceleration of 0 m/s squared along a flat motorway. What does this tell you about its motion?',
      tier: 'core',
      options: [
        'The car is at rest, since a = 0 means stopped.',
        'The car must be moving backwards.',
        'The car is changing direction once a second.',
        'The car is moving at a constant velocity (either still or moving steadily in a straight line).',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'fac-mis-zero-a-means-rest',
      hint: 'Zero acceleration means velocity is not changing. It could be zero, or it could be steady at any value.',
    },
    {
      id: 'fac-q4',
      type: 'numeric-entry',
      stem: 'A cyclist near Tunbridge Wells speeds up from 4 m/s to 10 m/s along a flat lane, taking 3 s. What is the acceleration, in m/s squared?',
      tier: 'core',
      correctAnswer: 2,
      unit: 'm/s squared',
      xpValue: 10,
      hint: 'Use a = (v - u) / t with u = 4, v = 10, t = 3.',
    },
    {
      id: 'fac-q5',
      type: 'multiple-choice',
      stem: 'A trolley starts from rest and reaches 6 m/s after 4 s of steady push along a corridor. What is the acceleration?',
      tier: 'core',
      options: [
        '1.5 m/s squared, from (6 - 0) / 4.',
        '24 m/s squared, from 6 multiplied by 4.',
        '6 m/s squared, because the trolley reaches 6 m/s.',
        '2 m/s squared, from 6 / 3.',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'Use a = (v - u) / t with u = 0, v = 6, t = 4. Divide, do not multiply.',
    },
    {
      id: 'fac-q6',
      type: 'multiple-choice',
      stem: 'A pupil writes that the acceleration of a sprinter is "8 m/s". A teacher marks this wrong, even though the number is right. What is the fix?',
      tier: 'core',
      options: [
        'Change the unit to m/s squared, because m/s is for velocity, not acceleration.',
        'Change the number to 80, because a is always a tenth of the velocity.',
        'Change the unit to seconds, because acceleration is about how long it takes.',
        'Leave it as is. m/s is fine for acceleration as well as velocity.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'fac-mis-forget-units',
      hint: 'm/s is a velocity unit. Acceleration is a velocity change per second, so its unit is m/s per second.',
    },
    {
      id: 'fac-q7',
      type: 'numeric-entry',
      stem: 'A ScotRail train pulls away from rest at a steady acceleration. After 30 s it is moving at 15 m/s. What is the acceleration, in m/s squared?',
      tier: 'core',
      correctAnswer: 0.5,
      unit: 'm/s squared',
      xpValue: 10,
      hint: 'u = 0, v = 15, t = 30. Use a = (v - u) / t.',
    },
    {
      id: 'fac-q8',
      type: 'numeric-entry',
      stem: 'A car slows down from 20 m/s to 8 m/s in 4 s on a flat road. Take the forwards direction (the direction the car was moving) as positive. What is the acceleration, in m/s squared? (Include the minus sign if needed.)',
      tier: 'confident',
      correctAnswer: -3,
      unit: 'm/s squared',
      xpValue: 15,
      misconceptionId: 'fac-mis-negative-means-backwards',
      hint: 'Use a = (v - u) / t with u = 20, v = 8. The minus sign tells you the velocity is dropping in the forwards direction.',
    },
    {
      id: 'fac-q9',
      type: 'numeric-entry',
      stem: 'A goalkeeper kicks a stationary ball, and it leaves the boot at 18 m/s after the boot has been in contact with the ball for 0.15 s. What is the average acceleration of the ball during the kick, in m/s squared?',
      tier: 'challenge',
      correctAnswer: 120,
      unit: 'm/s squared',
      xpValue: 20,
      hint: 'u = 0, v = 18, t = 0.15. Use a = (v - u) / t.',
    },
    {
      id: 'fac-q10',
      type: 'numeric-entry',
      stem: 'A bus pulls away from rest at 1.2 m/s squared for 6 s. What is the final velocity, in m/s?',
      tier: 'confident',
      correctAnswer: 7.2,
      unit: 'm/s',
      xpValue: 15,
      hint: 'Rearrange a = (v - u) / t to v = u + a x t.',
    },
    {
      id: 'fac-q11',
      type: 'multiple-choice',
      stem: 'A pupil writes, "The car has an acceleration of 5 m/s squared, so it is moving at 5 m/s." What is wrong with this?',
      tier: 'confident',
      options: [
        'Nothing. Acceleration and velocity are the same idea.',
        'Acceleration is the rate of change of velocity, not how fast the car is moving right now. The 5 means the velocity changes by 5 m/s every second.',
        'The velocity should be 5 m/s squared as well, since the units match.',
        'The car would have to start at 5 m/s to have that acceleration.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'fac-mis-a-equals-speed',
      hint: 'a tells you how fast the velocity is changing each second, not the current velocity of the object.',
    },
    {
      id: 'fac-q12',
      type: 'multiple-choice',
      stem: 'A basketball is thrown straight up at 8 m/s in a Sheffield PE lesson. As it rises, its acceleration is about -10 m/s squared (taking upwards as positive). At the moment the ball is halfway up to its peak, which sentence is the best description?',
      tier: 'confident',
      options: [
        'The ball is moving downwards because the acceleration is negative.',
        'The ball is at rest at this point, because negative acceleration means stopped.',
        'The ball has no velocity, since negative acceleration cancels positive velocity straight away.',
        'The ball is moving upwards, but its upwards velocity is dropping. Negative acceleration means slowing, not moving backwards.',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'fac-mis-negative-means-backwards',
      hint: 'Acceleration tells you how the velocity is changing, not the direction of motion right now.',
    },
    {
      id: 'fac-q13',
      type: 'multiple-choice',
      stem: 'A pupil starts with a car at 36 km/h that reaches 90 km/h in 5 s along the M25, and writes "a = (90 - 36) / 5 = 10.8 m/s squared". Which statement best explains the problem?',
      tier: 'challenge',
      options: [
        'The calculation is right; 10.8 m/s squared is the answer.',
        'The pupil should subtract the other way: a = (36 - 90) / 5.',
        'The velocities were left in km/h. Convert each to m/s first (divide by 3.6), then use a = (v - u) / t.',
        'Time should be in km, not seconds, since the velocities were in km/h.',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'fac-mis-mix-kmh-ms',
      hint: 'a = (v - u) / t only gives m/s squared when u and v are in m/s. Convert km/h to m/s before computing.',
    },
    {
      id: 'fac-q14',
      type: 'numeric-entry',
      stem: 'A car enters the slip road of the M25 at 18 m/s and joins the main carriageway at 31 m/s after 10 s of steady acceleration. What is its acceleration, in m/s squared?',
      tier: 'challenge',
      correctAnswer: 1.3,
      unit: 'm/s squared',
      xpValue: 20,
      hint: 'u = 18, v = 31, t = 10. Use a = (v - u) / t.',
    },
    {
      id: 'fac-q15',
      type: 'numeric-entry',
      stem: 'A ScotRail train near Edinburgh travels at a steady 25 m/s. The driver brakes evenly to 5 m/s over the next 16 s before a station. Take the forwards direction as positive. What is the acceleration during the braking, in m/s squared? (Include the minus sign if needed.)',
      tier: 'challenge',
      correctAnswer: -1.25,
      unit: 'm/s squared',
      xpValue: 20,
      misconceptionId: 'fac-mis-negative-means-backwards',
      hint: 'u = 25, v = 5, t = 16. The negative sign tells you the train is slowing, not moving backwards.',
    },
    {
      id: 'fac-q16',
      type: 'multiple-choice',
      stem: 'A learner driver in Sevenoaks reads two figures in the car handbook: "0 to 27 m/s in 9 s" for car A, and "0 to 27 m/s in 6 s" for car B. Which sentence about their accelerations is fair?',
      tier: 'challenge',
      options: [
        'Car B has the larger acceleration. a is (v - u) / t and B has a smaller t for the same change in velocity, so a is bigger.',
        'Both have the same acceleration, since they reach the same final velocity.',
        'Car A has the larger acceleration, because it takes longer to reach 27 m/s.',
        'You cannot compare them without knowing the distance covered.',
      ],
      correctIndex: 0,
      xpValue: 20,
      hint: 'a = (v - u) / t. For a fixed (v - u), a smaller t gives a bigger a.',
    },
    {
      id: 'fac-q17',
      type: 'spot-misconception',
      stem: 'Aaron says, "If the acceleration of a lift is zero, the lift must be stood still. Acceleration is just another word for how fast something is going."',
      tier: 'confident',
      statements: [
        {
          text: 'Aaron is right. Zero acceleration always means stood still.',
          isMisconception: true,
        },
        {
          text: 'Aaron is not right. Zero acceleration means the velocity is not changing. The lift could be at rest, or moving at a steady speed in a straight line.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fac-mis-zero-a-means-rest',
    },
    {
      id: 'fac-q18',
      type: 'spot-misconception',
      stem: 'Mira writes, "The basketball has a negative acceleration as it rises, so it must be moving downwards while still in the air."',
      tier: 'confident',
      statements: [
        {
          text: 'Mira is right. A minus sign on a always means the object is moving in the opposite direction.',
          isMisconception: true,
        },
        {
          text: 'Mira is not right. Negative a means the velocity is changing in the negative direction. The ball is still moving up; its upwards velocity is just dropping.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fac-mis-negative-means-backwards',
    },
    {
      id: 'fac-q19',
      type: 'drag-order',
      stem: 'Put the steps in the right order for working out the acceleration of a vehicle from a worded problem with mixed units.',
      tier: 'confident',
      items: [
        'Substitute u, v and t into a = (v - u) / t, evaluate, and state the answer with units (m/s squared) and a sign.',
        'Write down u, v and t with their units, taken from the question.',
        'Choose a positive direction along the line of motion and set the sign of u and v from it.',
        'Convert any velocities not in m/s (for example km/h) and any times not in seconds, so the units all match.',
      ],
      correctOrder: [1, 3, 2, 0],
      xpValue: 15,
      hint: 'Read and list first, then fix the units, then sort out signs, then do the arithmetic.',
    },
    {
      id: 'fac-q20',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is working out the acceleration of a sprinter who speeds up from rest to 8 m/s in 1.6 s.',
      tier: 'challenge',
      steps: [
        'List the three quantities: u = 0 m/s, v = 8 m/s, t = 1.6 s.',
        'Check the units. u and v are in m/s, t is in seconds, so a will come out in m/s squared. No conversion needed.',
        'Write the rule: a = (v - u) / t.',
        null,
        'State the answer: a = 5 m/s squared in the forwards direction. The sprinter gains 5 m/s every second during the start.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Substitute and evaluate: a = (8 - 0) / 1.6 = 8 / 1.6 = 5 m/s squared.',
      xpValue: 20,
    },
    {
      id: 'fac-q21',
      type: 'multiple-choice',
      stem: 'A bus along a flat Manchester road goes from 5 m/s to 14 m/s in 6 s of steady acceleration along the direction of motion. Which set of working is correct?',
      tier: 'confident',
      options: [
        'a = (5 + 14) / 6 = 3.17 m/s squared.',
        'a = (14 - 5) / 6 = 1.5 m/s squared.',
        'a = (14 - 5) x 6 = 54 m/s squared.',
        'a = 6 / (14 - 5) = 0.67 m/s squared.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'fac-mis-sum-instead-of-difference',
      hint: 'a = (v - u) / t. Subtract u from v, then divide by t.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 1F, on a = (v - u) / t items where many candidates summed v + u rather than subtracting.
    {
      id: 'fac-mis-sum-instead-of-difference',
      description:
        'Computing acceleration as (v + u) / t rather than (v - u) / t, treating "change" as a sum instead of a difference.',
      triggerAnswer: 'sum-instead-of-difference',
      correction:
        'Acceleration is the change in velocity each second. Change means final minus initial. Use a = (v - u) / t, not (v + u) / t.',
      reExplanation:
        'A car goes from 4 m/s to 10 m/s in 3 s. The velocity grew by 10 - 4 = 6 m/s over 3 s. Shared per second, that is 6 / 3 = 2 m/s squared. Adding gives 10 + 4 = 14, then 14 / 3 = 4.67, which is just an average of v and u over time, not the change.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2021, Paper J259/02, candidates stated a = 0 implies an object must be at rest, missing constant-velocity motion.
    {
      id: 'fac-mis-zero-a-means-rest',
      description:
        'Believing that a = 0 m/s squared means the object must be at rest, so any moving object must have a non-zero acceleration.',
      triggerAnswer: 'zero-a-means-rest',
      correction:
        'Zero acceleration means the velocity is not changing. The object could be at rest, or moving at a steady velocity in a straight line.',
      reExplanation:
        'A train cruising at a steady 20 m/s along a straight section of track has a = 0 m/s squared. The velocity is not changing each second, so a is zero. The train is far from at rest. The same a = 0 applies to a book sat still on a table; both are "no change in velocity".',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2019, Paper 1PH0/1F, candidates equated the value of a directly with the speed of the object, confusing rate of change with the quantity itself.
    {
      id: 'fac-mis-a-equals-speed',
      description:
        'Treating acceleration as "how fast the object is going", so reading "a = 5 m/s squared" as "the car is moving at 5 m/s".',
      triggerAnswer: 'a-equals-speed',
      correction:
        'Acceleration is the rate at which velocity changes, not the velocity itself. a = 5 m/s squared means the velocity grows by 5 m/s every second.',
      reExplanation:
        'A car at a = 5 m/s squared from rest reaches 5 m/s after 1 s, 10 m/s after 2 s, 15 m/s after 3 s. The current velocity climbs each second; the acceleration stays at 5 m/s squared. So a is the rule for how the velocity changes, not the velocity itself.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, Paper 1F, candidates lost marks for stating acceleration in m/s rather than m/s squared, even when the arithmetic was right.
    {
      id: 'fac-mis-forget-units',
      description:
        'Writing acceleration with the velocity unit m/s, missing that a is "metres per second, each second", which is m/s squared.',
      triggerAnswer: 'forget-units',
      correction:
        'The unit of acceleration is m/s squared, short for "m/s per s". Writing m/s mixes acceleration up with velocity.',
      reExplanation:
        'A car going from 0 to 12 m/s in 4 s has a = (12 - 0) / 4 = 3. The number 3 means the velocity grows by 3 m/s every second. So the unit reads m/s per s, written m/s squared. Quoting "3 m/s" makes it sound like the car is just moving at 3 m/s, which is different.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2022, J259/02, candidates wrote that a negative acceleration on a rising ball means the ball is moving downwards, conflating sign of a with sign of v.
    {
      id: 'fac-mis-negative-means-backwards',
      description:
        'Reading a negative acceleration as "the object is moving in the negative direction", missing that the sign of a tells you how the velocity is changing, not which way the object is moving right now.',
      triggerAnswer: 'negative-means-backwards',
      correction:
        'A negative sign on a means the velocity is changing in the negative direction. The object may still be moving in the positive direction; its velocity is just dropping.',
      reExplanation:
        'A basketball thrown straight up at 8 m/s slows on its way up at about -10 m/s squared (with up as positive). Halfway up, v is still positive (the ball is still rising), but a is negative because v is dropping. Once v hits zero at the peak, only then does the ball start to fall. Sign of a = how v is changing, not where the object is now.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2018, Paper 1PH0/1F, candidates left mixed km/h and m/s in an acceleration calculation, getting an answer roughly 3.6 times too large.
    {
      id: 'fac-mis-mix-kmh-ms',
      description:
        'Using km/h figures for u and v directly in a = (v - u) / t with t in seconds, without converting velocities to m/s first.',
      triggerAnswer: 'mix-kmh-ms',
      correction:
        'a = (v - u) / t gives m/s squared only when u and v are in m/s and t is in seconds. Convert any km/h figure to m/s (divide by 3.6) before substituting.',
      reExplanation:
        'A car goes from 36 km/h to 90 km/h in 5 s. Plugging the raw figures gives (90 - 36) / 5 = 10.8, but the units are off. Convert first: 36 km/h = 10 m/s and 90 km/h = 25 m/s. Then a = (25 - 10) / 5 = 3 m/s squared, the right answer in the right units.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const forcesAccelerationZoneNodes = [forcesAcceleration]
