import type { SkillNode } from '@/types/content'

const ISS_FREE_FALL_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">ISS orbit: astronauts in continuous free fall</text>

    <!-- Earth -->
    <circle cx="400" cy="240" r="90" fill="currentColor" />
    <text x="400" y="245" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="white">Earth</text>
    <text x="400" y="265" text-anchor="middle" font-size="12" stroke="none" fill="white">g still ~ 9 N/kg here</text>

    <!-- Orbit path -->
    <ellipse cx="400" cy="240" rx="170" ry="170" stroke-dasharray="6 6" />

    <!-- ISS at top of orbit -->
    <rect x="385" y="55" width="30" height="14" fill="currentColor" />
    <line x1="370" y1="62" x2="430" y2="62" />
    <text x="500" y="65" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">ISS, about 400 km up</text>

    <!-- Velocity arrow tangent to orbit -->
    <line x1="430" y1="62" x2="490" y2="62" />
    <polygon points="482,55 495,62 482,69" fill="currentColor" stroke="none" />
    <text x="465" y="50" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">v sideways</text>

    <!-- Gravity arrow toward Earth -->
    <line x1="400" y1="78" x2="400" y2="135" />
    <polygon points="393,127 400,142 407,127" fill="currentColor" stroke="none" />
    <text x="445" y="115" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">weight W = m x g</text>

    <!-- Bottom label -->
    <text x="400" y="370" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">The ISS and the astronauts fall together; both feel "weightless" but real weight still acts.</text>
    <text x="400" y="390" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">At 400 km up, g is only about 10% smaller than on the surface.</text>
  </g>
`

const LIFT_SCALES_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="35" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Bathroom scales in a lift: apparent weight changes</text>

    <!-- Three lift cars -->
    <!-- Lift A: still or constant velocity -->
    <rect x="80" y="90" width="160" height="230" />
    <text x="160" y="115" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">A: still or steady</text>
    <text x="160" y="135" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">a = 0</text>
    <rect x="135" y="270" width="50" height="20" fill="currentColor" />
    <text x="160" y="305" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Scales: 600 N</text>
    <text x="160" y="170" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">m = 60 kg, g = 10 N/kg</text>
    <text x="160" y="190" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">W = 600 N</text>

    <!-- Lift B: accelerating upwards -->
    <rect x="320" y="90" width="160" height="230" />
    <text x="400" y="115" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">B: speeding up upwards</text>
    <text x="400" y="135" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">a = +2 m/s squared</text>
    <rect x="375" y="270" width="50" height="20" fill="currentColor" />
    <text x="400" y="305" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Scales: 720 N</text>
    <line x1="400" y1="220" x2="400" y2="170" />
    <polygon points="393,178 400,165 407,178" fill="currentColor" stroke="none" />
    <text x="400" y="160" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">a up</text>

    <!-- Lift C: accelerating downwards -->
    <rect x="560" y="90" width="160" height="230" />
    <text x="640" y="115" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">C: speeding up downwards</text>
    <text x="640" y="135" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">a = -2 m/s squared</text>
    <rect x="615" y="270" width="50" height="20" fill="currentColor" />
    <text x="640" y="305" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Scales: 480 N</text>
    <line x1="640" y1="170" x2="640" y2="220" />
    <polygon points="633,212 640,225 647,212" fill="currentColor" stroke="none" />
    <text x="640" y="160" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">a down</text>

    <text x="400" y="370" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Real weight W = 600 N stays the same. The scale reading is apparent weight, which shifts with a.</text>
  </g>
`

const FREE_FALL_SCALES_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="35" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">If the lift cable snapped: apparent weight = 0</text>

    <!-- Lift shaft -->
    <line x1="160" y1="70" x2="160" y2="370" />
    <line x1="640" y1="70" x2="640" y2="370" />

    <!-- Falling lift -->
    <rect x="250" y="120" width="300" height="190" />
    <text x="400" y="150" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Lift in free fall, a = g down</text>

    <!-- Person on scales -->
    <circle cx="400" cy="190" r="15" fill="currentColor" />
    <rect x="392" y="205" width="16" height="40" fill="currentColor" />
    <rect x="370" y="248" width="60" height="20" fill="currentColor" />
    <text x="400" y="285" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Scales: 0 N</text>

    <!-- Snapped cable -->
    <line x1="400" y1="70" x2="400" y2="110" stroke-dasharray="4 4" />
    <text x="470" y="90" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">cable snapped</text>

    <!-- Gravity arrow -->
    <line x1="600" y1="170" x2="600" y2="230" />
    <polygon points="593,222 600,235 607,222" fill="currentColor" stroke="none" />
    <text x="650" y="205" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">g still 10 N/kg</text>

    <text x="400" y="355" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Real W = m x g is unchanged. The person and scales fall together, so the scales push with 0 N.</text>
    <text x="400" y="380" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">This is the same feeling astronauts have on the ISS: apparent weightlessness, not true weightlessness.</text>
  </g>
`

export const gravityWeightlessness: SkillNode = {
  id: 'physics-gravity-weightlessness',
  title: 'Weightlessness and Apparent Weight',
  description:
    'A floating astronaut on the International Space Station looks weightless, but gravity is still pulling on them. At about 400 km up, g is only roughly 10% smaller than on the ground, so their real weight W = m x g is nearly the same as on Earth. They feel weightless because the station and everyone in it are in continuous free fall around the planet; nothing pushes back on them. The same trick happens in a falling lift or on a parabolic flight. True weightlessness needs g near zero, only far from any large mass. Learn to separate real weight from apparent weight (the scales reading).',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-gravity',
  zoneName: 'Gravity, Weight, Mass',
  tier: 'confident',
  prerequisites: ['physics-gravity-mass-vs-weight'],
  curriculum: {
    ks3Objective:
      'Gravity force, weight = mass x gravitational field strength (g); non-contact forces; gravity forces between Earth and Moon, and between Earth and Sun (qualitative only).',
    awardingBodies: {
      aqa: '4.5.1.2 Mass and weight; 4.8.1.1 Our solar system, conditions in orbit (GCSE Physics 8463)',
      edexcel:
        'Topic 1 Motion and forces, 1.16-1.17 Weight; Topic 8 Astronomy, conditions for astronauts in orbit (GCSE Physics 1PH0)',
      ocr: 'P2.1 Mass and weight; P8.1 The Earth in space; apparent weightlessness in free fall (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'gwl-scene-iss-free-fall',
      title: 'Astronauts on the ISS',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see why an astronaut on the ISS looks weightless even though gravity is still strong.',
      data: {
        viewBox: '0 0 800 400',
        svg: ISS_FREE_FALL_SVG,
        hotspots: [
          {
            id: 'gwl-iss-height',
            x: 70,
            y: 18,
            label: 'About 400 km up',
            description:
              'The International Space Station orbits roughly 400 km above the surface. That sounds high, but Earth has a radius of about 6400 km, so the ISS is only a little way out. The pull of gravity is still strong here.',
          },
          {
            id: 'gwl-iss-gravity',
            x: 56,
            y: 30,
            label: 'g is still about 9 N/kg',
            description:
              'At 400 km up, the gravitational field strength is roughly 9 N/kg, only about 10% smaller than the 9.8 N/kg at sea level in the UK. So an astronaut with a mass of 70 kg has a real weight of about 630 N, almost the same as on the ground.',
          },
          {
            id: 'gwl-iss-velocity',
            x: 58,
            y: 13,
            label: 'Sideways speed ~ 7.7 km/s',
            description:
              'The ISS moves sideways at about 7.7 km per second. As gravity pulls it down, its sideways motion carries it over the curve of the Earth. It keeps missing the ground, which is what we call an orbit.',
          },
          {
            id: 'gwl-iss-feeling',
            x: 50,
            y: 93,
            label: 'Apparent, not real, weightlessness',
            description:
              'The station and the astronaut fall together at the same rate, so the floor does not push up on them at all. With no contact force pushing back, they feel weightless. The real weight from gravity has not gone; only the push from the floor has.',
          },
        ],
      },
    },
    {
      id: 'gwl-scene-lift-scales',
      title: 'Bathroom Scales in a Stannah Lift',
      type: 'labelled-diagram',
      instructions:
        'Click each lift to compare the real weight (m x g) with the apparent weight the scales read.',
      data: {
        viewBox: '0 0 800 400',
        svg: LIFT_SCALES_SVG,
        hotspots: [
          {
            id: 'gwl-lift-a',
            x: 20,
            y: 55,
            label: 'A: lift still or constant velocity',
            description:
              'A 60 kg passenger stands on bathroom scales. With g = 10 N/kg, the real weight W = m x g = 600 N. The lift is still or moving at a steady speed (a = 0), so the scales push up with 600 N to balance gravity, and read 600 N.',
          },
          {
            id: 'gwl-lift-b',
            x: 50,
            y: 55,
            label: 'B: lift speeding up upwards',
            description:
              'The lift accelerates upwards at 2 m/s squared. The scales need to push up by more than 600 N to give the passenger a net upwards force. They push 720 N, and the scales read 720 N. The real weight W is still 600 N.',
          },
          {
            id: 'gwl-lift-c',
            x: 80,
            y: 55,
            label: 'C: lift speeding up downwards',
            description:
              'The lift accelerates downwards at 2 m/s squared. Now the scales need to push less than gravity pulls. They push 480 N, and the scales read 480 N. The passenger feels lighter, but their real weight has not changed.',
          },
          {
            id: 'gwl-lift-summary',
            x: 50,
            y: 92,
            label: 'Real weight vs apparent weight',
            description:
              'Real weight W = m x g depends on mass and the field strength only. The scales reading is the apparent weight, which depends on the contact force from the floor. They match only when a = 0.',
          },
        ],
      },
    },
    {
      id: 'gwl-scene-free-fall-lift',
      title: 'A Lift in Free Fall',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see why the scales read zero when the lift falls freely, the same effect ISS astronauts feel.',
      data: {
        viewBox: '0 0 800 400',
        svg: FREE_FALL_SCALES_SVG,
        hotspots: [
          {
            id: 'gwl-ff-cable',
            x: 50,
            y: 22,
            label: 'Cable snapped, a = g down',
            description:
              'Imagine the cable snaps (this would never happen on a real Stannah lift, which has multiple safety brakes). With nothing holding it up, the lift accelerates downwards at g, about 10 m/s squared in the UK.',
          },
          {
            id: 'gwl-ff-scales',
            x: 50,
            y: 72,
            label: 'Scales read 0 N',
            description:
              'The passenger and the scales both accelerate at g. The scales no longer need to push up at all to keep pace with the passenger, so the contact force drops to zero. The reading on the scales is 0 N: apparent weightlessness.',
          },
          {
            id: 'gwl-ff-gravity',
            x: 80,
            y: 55,
            label: 'Real weight is unchanged',
            description:
              'Gravity is still pulling. m x g for a 60 kg passenger is still 600 N. That is what causes the acceleration. Apparent weight is zero only because nothing is pushing back; real weight is not zero.',
          },
          {
            id: 'gwl-ff-link',
            x: 50,
            y: 95,
            label: 'Same physics as the ISS',
            description:
              'On the ISS, the station and astronauts fall together around the Earth. No contact force pushes the astronaut up, so the apparent weight is zero. Real weight is still there, just like in the falling lift.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'gwl-worked-1',
      title: 'Real weight of a 70 kg astronaut on the ISS',
      steps: [
        {
          explanation:
            'List what we know. Mass m = 70 kg. The ISS orbits about 400 km up, where g is about 9 N/kg, only slightly less than the 9.8 N/kg at sea level in the UK.',
        },
        {
          explanation: 'Write the rule for weight.',
          maths: 'W = m x g',
        },
        {
          explanation: 'Substitute, with g at the ISS altitude.',
          maths: 'W = 70 x 9 = 630 N',
        },
        {
          explanation:
            'Compare with the ground. On the surface, W = 70 x 9.8 = 686 N. The astronauts real weight on the ISS is about 92% of their weight on the ground. Gravity has barely changed; they are not in true weightlessness.',
        },
        {
          explanation:
            'So why do they float? Because the ISS and the astronaut are in free fall together around the Earth. No floor pushes up on them, so the apparent weight (scales reading) is zero. The real weight from gravity is still about 630 N.',
        },
      ],
    },
    {
      id: 'gwl-worked-2',
      title: 'Apparent weight in a lift speeding up at 2 m/s squared',
      steps: [
        {
          explanation:
            'List what we know. A 60 kg passenger stands on bathroom scales in a Stannah lift. With g = 10 N/kg, the real weight W = m x g = 60 x 10 = 600 N.',
        },
        {
          explanation:
            'The lift accelerates upwards at 2 m/s squared. The contact force from the scales (let R stand for the reading) must give a net upwards force of m x a.',
          maths: 'R - W = m x a',
        },
        {
          explanation: 'Rearrange for R.',
          maths: 'R = W + m x a',
        },
        {
          explanation: 'Substitute.',
          maths: 'R = 600 + 60 x 2 = 720 N',
        },
        {
          explanation:
            'State the answer. The scales read 720 N, the apparent weight. The passenger feels heavier in the rising lift, but their real weight W is still 600 N. If the lift instead accelerated downwards at 2 m/s squared, the scales would read 600 - 60 x 2 = 480 N.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'gwl-q1',
      type: 'multiple-choice',
      stem: 'An astronaut floats in the cabin of the ISS. Which sentence is the best description?',
      tier: 'core',
      options: [
        'They have real weight (gravity still pulls) but feel weightless because they are in continuous free fall with the station.',
        'They are at zero gravity. There is no gravity that far out.',
        'They have lost all their mass, so weight is zero.',
        'They are upside down compared to people on the ground, so their weight cancels.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'gwl-mis-zero-gravity-iss',
      hint: 'g is only about 10% smaller at 400 km up than at sea level. So gravity is still strong.',
    },
    {
      id: 'gwl-q2',
      type: 'multiple-choice',
      stem: 'On the ISS, about 400 km above the surface, the gravitational field strength is roughly:',
      tier: 'core',
      options: [
        'about 9 N/kg, only about 10% smaller than on the ground',
        '0 N/kg',
        'about 1.6 N/kg, like the Moon',
        'about 25 N/kg, much higher than at sea level',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'gwl-mis-zero-gravity-iss',
      hint: 'Earth has a radius of about 6400 km. 400 km up is only a small fraction of that, so g barely drops.',
    },
    {
      id: 'gwl-q3',
      type: 'multiple-choice',
      stem: 'A 60 kg passenger stands on bathroom scales in a Stannah lift. The lift is at rest, and g = 10 N/kg. What do the scales read?',
      tier: 'core',
      options: [
        '6 N',
        '60 N',
        '600 N',
        '6000 N',
      ],
      correctIndex: 2,
      xpValue: 10,
      hint: 'At rest, the scales push back to balance gravity. Use W = m x g = 60 x 10.',
    },
    {
      id: 'gwl-q4',
      type: 'multiple-choice',
      stem: 'Which one would give a person true (not apparent) weightlessness?',
      tier: 'core',
      options: [
        'Standing in a lift that accelerates downwards.',
        'Riding in a parabolic flight at the top of the arc.',
        'Floating inside the ISS, which orbits 400 km up.',
        'Drifting through deep space, far from any large mass, where g is near zero.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'gwl-mis-true-vs-apparent',
      hint: 'True weightlessness needs g near zero. The first three are all examples of free fall, which is apparent.',
    },
    {
      id: 'gwl-q5',
      type: 'numeric-entry',
      stem: 'Find the real weight, in newtons, of a 50 kg pupil at sea level in the UK. Use g = 9.8 N/kg.',
      tier: 'core',
      correctAnswer: 490,
      unit: 'N',
      xpValue: 10,
      hint: 'W = m x g. Multiply 50 by 9.8.',
    },
    {
      id: 'gwl-q6',
      type: 'multiple-choice',
      stem: 'A pupil writes "Astronauts are weightless because there is no gravity that far from Earth." What is the fix?',
      tier: 'core',
      options: [
        'Leave it as is. The sentence is correct.',
        'Change "weightless" to "massless"; they have lost their mass.',
        'Change to: "Astronauts feel weightless because they and the ISS are in continuous free fall. Gravity is still pulling them; that is what keeps them in orbit."',
        'Change to: "Astronauts are weightless because the Earth spins under them."',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'gwl-mis-zero-gravity-iss',
      hint: 'g at the ISS is only slightly less than at the surface. Free fall, not "no gravity", is the right idea.',
    },
    {
      id: 'gwl-q7',
      type: 'numeric-entry',
      stem: 'A 60 kg passenger stands on bathroom scales in a lift. The lift accelerates upwards at 2 m/s squared. With g = 10 N/kg, what is the apparent weight on the scales, in N?',
      tier: 'confident',
      correctAnswer: 720,
      unit: 'N',
      xpValue: 15,
      hint: 'Real W = m x g = 600 N. The contact force must push extra to give net upwards force m x a, so R = W + m x a.',
    },
    {
      id: 'gwl-q8',
      type: 'numeric-entry',
      stem: 'The same 60 kg passenger is in the lift, but the lift now accelerates downwards at 2 m/s squared. With g = 10 N/kg, what does the scales read, in N?',
      tier: 'confident',
      correctAnswer: 480,
      unit: 'N',
      xpValue: 15,
      hint: 'When the lift speeds up downwards, the scales push less than gravity. R = W - m x a.',
    },
    {
      id: 'gwl-q9',
      type: 'numeric-entry',
      stem: 'A skydiver of mass 80 kg has just stepped out of a plane and is in free fall, before air resistance has built up. Use g = 10 N/kg. What is the real weight (the pull of gravity), in N?',
      tier: 'confident',
      correctAnswer: 800,
      unit: 'N',
      xpValue: 15,
      misconceptionId: 'gwl-mis-true-vs-apparent',
      hint: 'Real weight is W = m x g. Free fall does not switch gravity off.',
    },
    {
      id: 'gwl-q10',
      type: 'multiple-choice',
      stem: 'On a "vomit comet" parabolic flight over Europe, passengers float inside the plane near the top of each arc. The best reason is:',
      tier: 'core',
      options: [
        'The plane has flown above the atmosphere, where there is no gravity.',
        'The plane is in free fall along the arc, so plane and passengers fall together; nothing pushes back on the passengers at all.',
        'The pilot turns gravity off for a brief while.',
        'The passengers mass drops to zero at the top of the arc.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'gwl-mis-true-vs-apparent',
      hint: 'Same idea as the ISS or a falling lift. Gravity is still pulling; the contact force from the floor disappears.',
    },
    {
      id: 'gwl-q11',
      type: 'multiple-choice',
      stem: 'An astronaut has a mass of 70 kg on Earth. On the ISS (g approx 9 N/kg), which set of values is right?',
      tier: 'confident',
      options: [
        'Mass 70 kg, real weight about 630 N. Mass does not change with location; only weight shifts slightly with g.',
        'Mass 0 kg, real weight 0 N. Both mass and weight vanish in orbit.',
        'Mass 7 kg, real weight 70 N. Mass shrinks because gravity is weaker.',
        'Mass 70 kg, real weight 0 N. Mass stays the same, but weight is zero in space.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'gwl-mis-mass-changes-in-space',
      hint: 'Mass measures the amount of matter (kg) and does not change. Weight is W = m x g, which shifts only by about 10% on the ISS.',
    },
    {
      id: 'gwl-q12',
      type: 'numeric-entry',
      stem: 'A 50 kg pupil rides a Stannah lift that accelerates upwards at 1.5 m/s squared at the start of its journey. With g = 10 N/kg, what do a set of bathroom scales they stand on read, in N?',
      tier: 'confident',
      correctAnswer: 575,
      unit: 'N',
      xpValue: 15,
      hint: 'R = m x g + m x a = 50 x 10 + 50 x 1.5.',
    },
    {
      id: 'gwl-q13',
      type: 'multiple-choice',
      stem: 'A pupil says: "Bathroom scales always read your real weight." Which of these is the correct fix?',
      tier: 'core',
      options: [
        'Leave it as is. Scales read real weight.',
        'Scales read mass, not weight.',
        'Scales always show double the real weight on the Moon.',
        'Scales read the contact force from the floor. That equals real weight only when the lift is at rest or moving at a steady speed. When the lift accelerates, the reading shifts.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'gwl-mis-scales-always-real-weight',
      hint: 'Think about a falling lift: scales read 0 N, even though real weight is unchanged.',
    },
    {
      id: 'gwl-q14',
      type: 'spot-misconception',
      stem: 'Riya writes, "The ISS is in space, so there is no gravity acting on the astronauts. That is why they float."',
      tier: 'confident',
      statements: [
        {
          text: 'Riya is right. There is no gravity that far from Earth, so astronauts float.',
          isMisconception: true,
        },
        {
          text: 'Riya is not right. At 400 km up, g is still about 9 N/kg, only a little less than at sea level. Astronauts float because they and the ISS are in continuous free fall, not because gravity has vanished.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'gwl-mis-zero-gravity-iss',
    },
    {
      id: 'gwl-q15',
      type: 'spot-misconception',
      stem: 'Tom writes, "When you stand on scales in a lift that is speeding up upwards, the lift gives you extra weight. Your real weight has gone up."',
      tier: 'confident',
      statements: [
        {
          text: 'Tom is right. The lift makes the passengers weigh more for real.',
          isMisconception: true,
        },
        {
          text: 'Tom is not right. Real weight W = m x g has not changed; the scales reading has. The scales must push harder to give the passenger an upwards net force, so the apparent weight is bigger, not the real weight.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'gwl-mis-scales-always-real-weight',
    },
    {
      id: 'gwl-q16',
      type: 'multiple-choice',
      stem: 'The ISS orbits Earth about every 90 minutes. Which statement about the forces on it is the best fit?',
      tier: 'challenge',
      options: [
        'The ISS moves in a straight line; gravity does nothing to it.',
        'Gravity acts as a non-contact force pulling the ISS towards Earth (the unbalanced net force), bending its straight-line motion into an orbit. The sideways speed (about 7.7 km/s) makes it "keep missing" the ground.',
        'The ISS is held up by the Earths magnetic field.',
        'There is no net force on the ISS because gravity is balanced by an equal outward force in orbit.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'gwl-mis-orbit-no-net-force',
      hint: 'An orbit is a balance of sideways motion and continuous pull towards Earth. Gravity is the only force on the ISS.',
    },
    {
      id: 'gwl-q17',
      type: 'numeric-entry',
      stem: 'A 50 kg pupil stands on bathroom scales in a lift. The cable hypothetically snaps, and the lift is now in free fall, with a = 10 m/s squared downwards and g = 10 N/kg. What do the scales read, in N?',
      tier: 'challenge',
      correctAnswer: 0,
      unit: 'N',
      xpValue: 20,
      misconceptionId: 'gwl-mis-free-fall-no-gravity',
      hint: 'R = m x g - m x a. With a = g, the two terms cancel.',
    },
    {
      id: 'gwl-q18',
      type: 'multiple-choice',
      stem: 'During a parabolic flight near Bordeaux, a 70 kg passenger floats at the top of the arc. Use g = 9.8 N/kg. Which set of values fits?',
      tier: 'challenge',
      options: [
        'Real weight 0 N, apparent weight 0 N.',
        'Real weight 686 N, apparent weight 686 N.',
        'Real weight 686 N, apparent weight 0 N. The plane and passenger fall together, so the seat exerts no contact force.',
        'Real weight 0 N, apparent weight 686 N.',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'gwl-mis-true-vs-apparent',
      hint: 'Real weight uses W = m x g. Apparent weight is the contact force from the seat or floor.',
    },
    {
      id: 'gwl-q19',
      type: 'drag-order',
      stem: 'Put the steps in the right order to explain why an astronaut on the ISS feels weightless, using a Tim Peake style example.',
      tier: 'confident',
      items: [
        'Both fall at the same rate, so the floor and walls do not push on the astronaut.',
        'At about 400 km up, g is still around 9 N/kg, only slightly less than on the ground.',
        'So the astronaut has real weight from gravity, but the contact force is zero, and they feel apparent weightlessness.',
        'The ISS is in continuous free fall around the Earth. The astronaut inside is in free fall too.',
      ],
      correctOrder: [1, 3, 0, 2],
      xpValue: 15,
      hint: 'Start with how strong gravity actually is at the ISS, then explain free fall, then the contact force, then the feeling.',
    },
    {
      id: 'gwl-q20',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is working out the apparent weight of a 75 kg adult on bathroom scales in a lift accelerating upwards at 1.6 m/s squared, with g = 10 N/kg.',
      tier: 'challenge',
      steps: [
        'Pick out the values: m = 75 kg, a = 1.6 m/s squared upwards, g = 10 N/kg.',
        'Find the real weight: W = m x g = 75 x 10 = 750 N.',
        'Set up the contact force rule with up as positive: R - W = m x a, so R = W + m x a.',
        null,
        'State the answer: the scales read 870 N (apparent), the real weight is still 750 N.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Substitute and evaluate: R = 750 + 75 x 1.6 = 750 + 120 = 870 N.',
      xpValue: 20,
    },
    {
      id: 'gwl-q21',
      type: 'numeric-entry',
      stem: 'A 65 kg lift passenger stands on scales. The lift accelerates downwards at 3 m/s squared while still moving upwards (it is slowing on the way up). With g = 10 N/kg, what do the scales read, in N?',
      tier: 'challenge',
      correctAnswer: 455,
      unit: 'N',
      xpValue: 20,
      misconceptionId: 'gwl-mis-scales-always-real-weight',
      hint: 'Acceleration is downwards, so R = m x g - m x a = 65 x 10 - 65 x 3.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 1H, on "explain why an astronaut on the ISS feels weightless"; many candidates stated there is no gravity at that altitude.
    {
      id: 'gwl-mis-zero-gravity-iss',
      description:
        'Believing there is no gravity on the ISS, so astronauts float because gravity is gone, rather than because they are in free fall.',
      triggerAnswer: 'zero-gravity-iss',
      correction:
        'At 400 km up, g is still about 9 N/kg, only ~10% less than on the surface. Astronauts float because they and the station are in continuous free fall, not because gravity has vanished.',
      reExplanation:
        'A 70 kg astronaut has a real weight of about 70 x 9 = 630 N on the ISS, compared with 70 x 9.8 = 686 N on the ground. Gravity is what curves their motion into an orbit. They feel weightless because the ISS and they themselves fall at the same rate, so the floor and walls do not push on them. The pull is still there.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2021, P8, on free-fall / weightlessness items; candidates conflated apparent weightlessness with true weightlessness in deep space.
    {
      id: 'gwl-mis-true-vs-apparent',
      description:
        'Treating any case of floating (skydiver, parabolic flight, ISS) as true weightlessness, missing that it is the contact force, not gravity, that has gone to zero.',
      triggerAnswer: 'true-vs-apparent',
      correction:
        'True weightlessness needs g near zero, only far from any large mass. Floating in free fall is apparent weightlessness: real weight is unchanged; only the contact force from the floor is zero.',
      reExplanation:
        'On the ISS, in a falling lift, on a parabolic flight, or for a skydiver before air resistance kicks in, gravity is still pulling. The reason the person feels nothing under them is that the surface around them is falling alongside them. The scales read 0 N because they cannot push back, not because the real weight has dropped to zero.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2019, Paper 1PH0/1H, lift-and-scales question; candidates assumed scales always show the same value because "weight does not change in a lift".
    {
      id: 'gwl-mis-scales-always-real-weight',
      description:
        'Believing bathroom scales always read real weight, so the reading should not change inside a moving lift.',
      triggerAnswer: 'scales-always-real-weight',
      correction:
        'Scales measure the contact force from the floor, the apparent weight. That equals m x g only when a = 0. When the lift accelerates, R = m x g plus or minus m x a, and the reading shifts.',
      reExplanation:
        'A 60 kg passenger has a real weight of 600 N at all times. Lift still: scales read 600 N. Lift speeding up upwards at 2 m/s squared: 600 + 60 x 2 = 720 N. Lift speeding up downwards at 2 m/s squared: 600 - 60 x 2 = 480 N. The body is unchanged; the floor just pushes by different amounts to give the right net force.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, Paper 2H, on skydivers and free fall; candidates wrote "gravity is zero in free fall" to explain the lack of "felt" weight.
    {
      id: 'gwl-mis-free-fall-no-gravity',
      description:
        'Stating that an object in free fall has no gravity acting on it, missing that gravity is the very force causing the fall.',
      triggerAnswer: 'free-fall-no-gravity',
      correction:
        'In free fall, gravity is the only force acting. It is what accelerates the object at g. Apparent weight is zero because nothing pushes back, not because gravity has switched off.',
      reExplanation:
        'A skydiver of mass 80 kg has real weight W = 80 x 10 = 800 N just after stepping out. That 800 N is what speeds them up at g. Once air resistance grows, the contact force from air starts to push back, and they no longer feel weightless. Free fall means "gravity only", not "gravity off".',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2022, P2.1, on mass and weight; candidates lost marks for swapping the words "mass" and "weight" when explaining astronaut floating.
    {
      id: 'gwl-mis-mass-changes-in-space',
      description:
        'Saying astronauts lose mass in orbit, or that mass and weight are the same and both go to zero on the ISS.',
      triggerAnswer: 'mass-changes-in-space',
      correction:
        'Mass is the amount of matter (kg) and does not change with location. Weight is the gravity force in newtons. On the ISS, mass is the same; real weight is only slightly less than on the ground.',
      reExplanation:
        'A 70 kg pupil is 70 kg in Sheffield, on the ISS, on the Moon, and in deep space. On the ground W = 686 N; on the ISS W is about 630 N; on the Moon W is about 112 N. Mass stays at 70 kg throughout. The "weightless" feeling on the ISS is about apparent weight, not mass.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2018, Paper 1PH0/2F, on orbital motion; candidates wrote that the ISS "balances" gravity with another outward force, missing that gravity is the unbalanced force keeping it in orbit.
    {
      id: 'gwl-mis-orbit-no-net-force',
      description:
        'Believing an orbiting object has no net force on it because it stays "in place" relative to the Earth, missing that gravity is what bends its motion into a curve.',
      triggerAnswer: 'orbit-no-net-force',
      correction:
        'Gravity is the unbalanced net force on the ISS, pulling it towards Earth. Combined with its sideways speed, this curves its path into an orbit. No outward force balances gravity.',
      reExplanation:
        'The ISS moves sideways at about 7.7 km/s. Each second, gravity pulls it a little towards Earth, just enough to keep it the same height above the curving surface. The net force is not zero; it points towards Earth at all times. The ISS does not stay still; it keeps falling, and keeps missing the ground.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const gravityWeightlessnessZoneNodes = [gravityWeightlessness]
