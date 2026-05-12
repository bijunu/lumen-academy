import type { SkillNode } from '@/types/content'

const LAW_OF_REFLECTION_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">The law of reflection at a flat mirror</text>

    <!-- Mirror surface (horizontal line at y=320) with hatching -->
    <line x1="80" y1="320" x2="720" y2="320" stroke-width="4" />
    <line x1="100" y1="320" x2="90" y2="340" stroke-width="2" />
    <line x1="160" y1="320" x2="150" y2="340" stroke-width="2" />
    <line x1="220" y1="320" x2="210" y2="340" stroke-width="2" />
    <line x1="280" y1="320" x2="270" y2="340" stroke-width="2" />
    <line x1="340" y1="320" x2="330" y2="340" stroke-width="2" />
    <line x1="400" y1="320" x2="390" y2="340" stroke-width="2" />
    <line x1="460" y1="320" x2="450" y2="340" stroke-width="2" />
    <line x1="520" y1="320" x2="510" y2="340" stroke-width="2" />
    <line x1="580" y1="320" x2="570" y2="340" stroke-width="2" />
    <line x1="640" y1="320" x2="630" y2="340" stroke-width="2" />
    <line x1="700" y1="320" x2="690" y2="340" stroke-width="2" />
    <text x="80" y="360" font-size="12" stroke="none" fill="currentColor">flat mirror</text>

    <!-- Normal: dashed vertical line at x=400 from mirror up -->
    <line x1="400" y1="320" x2="400" y2="80" stroke-dasharray="8,6" stroke-width="2" />
    <text x="408" y="100" font-size="13" font-weight="700" stroke="none" fill="currentColor">normal</text>
    <text x="408" y="118" font-size="11" stroke="none" fill="currentColor">(dashed, at 90 to mirror)</text>

    <!-- Incident ray from top-left (200,120) down to point of incidence (400,320) -->
    <line x1="200" y1="120" x2="400" y2="320" stroke-width="3" />
    <polygon points="320,225 335,240 305,250" fill="currentColor" stroke="none" />
    <text x="180" y="115" text-anchor="end" font-size="13" font-weight="700" stroke="none" fill="currentColor">incident ray</text>

    <!-- Reflected ray from point of incidence (400,320) up to top-right (600,120) -->
    <line x1="400" y1="320" x2="600" y2="120" stroke-width="3" />
    <polygon points="480,250 495,240 510,225" fill="currentColor" stroke="none" />
    <text x="620" y="115" font-size="13" font-weight="700" stroke="none" fill="currentColor">reflected ray</text>

    <!-- Angle i: arc between incident ray and normal -->
    <path d="M 380 270 A 50 50 0 0 1 365 280" stroke-width="2" />
    <text x="350" y="270" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">i</text>

    <!-- Angle r: arc between normal and reflected ray -->
    <path d="M 420 270 A 50 50 0 0 0 435 280" stroke-width="2" />
    <text x="450" y="270" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">r</text>

    <!-- Point of incidence -->
    <circle cx="400" cy="320" r="5" fill="currentColor" />
    <text x="400" y="385" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">point of incidence</text>

    <!-- Rule -->
    <text x="400" y="60" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">angle of incidence i = angle of reflection r</text>
  </g>
`

const ANGLE_FROM_NORMAL_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Always measure from the normal, never from the surface</text>

    <!-- Mirror -->
    <line x1="80" y1="280" x2="720" y2="280" stroke-width="4" />
    <text x="80" y="310" font-size="12" stroke="none" fill="currentColor">mirror surface</text>

    <!-- Normal -->
    <line x1="400" y1="280" x2="400" y2="70" stroke-dasharray="8,6" stroke-width="2" />
    <text x="408" y="80" font-size="13" font-weight="700" stroke="none" fill="currentColor">normal</text>

    <!-- Incident ray hitting at 30 from normal (60 from surface) -->
    <line x1="240" y1="120" x2="400" y2="280" stroke-width="3" />
    <text x="225" y="115" text-anchor="end" font-size="12" font-weight="700" stroke="none" fill="currentColor">incident ray</text>

    <!-- Angle from normal (correct): label 30 degrees -->
    <path d="M 380 230 A 60 60 0 0 1 363 235" stroke-width="2" />
    <text x="362" y="225" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">30 deg</text>
    <text x="355" y="245" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">(from normal, correct)</text>

    <!-- Angle from surface (wrong): label 60 degrees -->
    <path d="M 340 280 A 60 60 0 0 0 322 244" stroke-width="2" stroke-dasharray="3,3" />
    <text x="305" y="265" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">60 deg</text>
    <text x="295" y="285" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">(from surface, wrong)</text>

    <!-- Rule box on the right -->
    <text x="560" y="160" font-size="13" font-weight="700" stroke="none" fill="currentColor">Always measure the</text>
    <text x="560" y="180" font-size="13" font-weight="700" stroke="none" fill="currentColor">angle from the normal.</text>
    <text x="560" y="210" font-size="12" stroke="none" fill="currentColor">i + (angle from surface) = 90 deg</text>
    <text x="560" y="230" font-size="12" stroke="none" fill="currentColor">so a 30 deg ray from the</text>
    <text x="560" y="248" font-size="12" stroke="none" fill="currentColor">normal looks like 60 deg</text>
    <text x="560" y="266" font-size="12" stroke="none" fill="currentColor">from the surface.</text>
  </g>
`

const SPECULAR_VS_DIFFUSE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Specular vs diffuse reflection</text>

    <!-- Left: specular reflection (smooth bathroom mirror) -->
    <text x="200" y="70" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Specular: a bathroom mirror</text>
    <line x1="60" y1="260" x2="340" y2="260" stroke-width="4" />
    <text x="60" y="285" font-size="11" stroke="none" fill="currentColor">smooth surface</text>

    <!-- Three parallel incident rays from top-left -->
    <line x1="80" y1="100" x2="140" y2="260" stroke-width="2" />
    <polygon points="115,200 130,215 100,225" fill="currentColor" stroke="none" />
    <line x1="140" y1="100" x2="200" y2="260" stroke-width="2" />
    <polygon points="175,200 190,215 160,225" fill="currentColor" stroke="none" />
    <line x1="200" y1="100" x2="260" y2="260" stroke-width="2" />
    <polygon points="235,200 250,215 220,225" fill="currentColor" stroke="none" />

    <!-- Three parallel reflected rays going to top-right -->
    <line x1="140" y1="260" x2="200" y2="100" stroke-width="2" />
    <line x1="200" y1="260" x2="260" y2="100" stroke-width="2" />
    <line x1="260" y1="260" x2="320" y2="100" stroke-width="2" />

    <text x="200" y="320" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Parallel in, parallel out.</text>
    <text x="200" y="338" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">A clear image forms.</text>

    <!-- Right: diffuse reflection (rough wall) -->
    <text x="600" y="70" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Diffuse: a rough wall</text>
    <!-- Bumpy surface: a series of short slanted lines -->
    <path d="M 460 260 L 475 250 L 490 262 L 505 248 L 520 260 L 535 250 L 550 262 L 565 248 L 580 260 L 595 250 L 610 262 L 625 248 L 640 260 L 655 250 L 670 262 L 685 248 L 700 260 L 715 250 L 730 262" stroke-width="4" />
    <text x="460" y="285" font-size="11" stroke="none" fill="currentColor">rough surface</text>

    <!-- Three parallel incident rays from top-left -->
    <line x1="480" y1="100" x2="540" y2="258" stroke-width="2" />
    <polygon points="515,200 530,215 500,225" fill="currentColor" stroke="none" />
    <line x1="540" y1="100" x2="600" y2="258" stroke-width="2" />
    <polygon points="575,200 590,215 560,225" fill="currentColor" stroke="none" />
    <line x1="600" y1="100" x2="660" y2="258" stroke-width="2" />
    <polygon points="635,200 650,215 620,225" fill="currentColor" stroke="none" />

    <!-- Three reflected rays scattered in different directions -->
    <line x1="540" y1="258" x2="470" y2="150" stroke-width="2" />
    <line x1="600" y1="258" x2="640" y2="120" stroke-width="2" />
    <line x1="660" y1="258" x2="720" y2="180" stroke-width="2" />

    <text x="600" y="320" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Each bump has its own normal,</text>
    <text x="600" y="338" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">so rays scatter. No image forms.</text>

    <text x="400" y="380" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">The law of reflection holds at every single point. The surface decides whether you see an image.</text>
  </g>
`

const PERISCOPE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">A periscope on a Channel-class submarine: two 45 deg mirrors</text>

    <!-- Periscope tube as a vertical rectangle -->
    <rect x="350" y="80" width="100" height="280" stroke-width="3" />

    <!-- Top mirror: angled at 45 deg, drawn from top-left to bottom-right inside the top of the tube -->
    <line x1="360" y1="100" x2="440" y2="180" stroke-width="4" />
    <text x="470" y="120" font-size="12" font-weight="700" stroke="none" fill="currentColor">top mirror (45 deg)</text>

    <!-- Bottom mirror: angled at 45 deg, drawn from top-right to bottom-left inside the bottom of the tube -->
    <line x1="440" y1="270" x2="360" y2="350" stroke-width="4" />
    <text x="470" y="320" font-size="12" font-weight="700" stroke="none" fill="currentColor">bottom mirror (45 deg)</text>

    <!-- Horizontal ray coming in from the right at the top -->
    <line x1="600" y1="140" x2="420" y2="140" stroke-width="3" />
    <polygon points="430,134 415,140 430,146" fill="currentColor" stroke="none" />
    <text x="610" y="135" font-size="11" stroke="none" fill="currentColor">light from</text>
    <text x="610" y="150" font-size="11" stroke="none" fill="currentColor">above water</text>

    <!-- Vertical ray going down inside the tube -->
    <line x1="400" y1="160" x2="400" y2="290" stroke-width="3" />
    <polygon points="394,280 400,295 406,280" fill="currentColor" stroke="none" />

    <!-- Horizontal ray going out to the right at the bottom (to the observer's eye) -->
    <line x1="420" y1="310" x2="600" y2="310" stroke-width="3" />
    <polygon points="590,304 605,310 590,316" fill="currentColor" stroke="none" />
    <text x="610" y="305" font-size="11" stroke="none" fill="currentColor">to observer</text>
    <text x="610" y="320" font-size="11" stroke="none" fill="currentColor">in the sub</text>

    <!-- Note: each mirror turns light by 90 deg because i = r = 45 deg -->
    <text x="400" y="60" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Each mirror turns light by 90 deg because i = r = 45 deg.</text>
  </g>
`

export const wavesLawOfReflection: SkillNode = {
  id: 'physics-waves-law-of-reflection',
  title: 'Law of Reflection',
  description:
    'When a ray of light hits a flat surface it bounces off in a predictable way. Draw the normal, which is a dashed line at right angles to the surface at the point of contact, and measure both the incident and the reflected angle from that normal. The law of reflection then says the angle of incidence equals the angle of reflection. A bathroom mirror gives specular reflection: parallel rays stay parallel and you see a clear image. A rough wall gives diffuse reflection: each bump has its own normal so rays scatter and no image forms. The law still holds at every single point on either surface.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-waves',
  zoneName: 'Waves',
  tier: 'confident',
  prerequisites: ['physics-waves-anatomy'],
  curriculum: {
    ks3Objective:
      'Light waves; reflection at a surface; the transmission of light through materials, specular reflection at a surface.',
    awardingBodies: {
      aqa: '4.6.2.2 Reflection of waves; angle of incidence equals angle of reflection, normal line (GCSE Physics 8463)',
      edexcel: 'Topic 5.1 Reflection of light; law of reflection, plane mirrors (GCSE Physics 1PH0)',
      ocr: 'P5.3 Light; reflection at plane surfaces, angle of incidence and angle of reflection (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'lr-scene-law',
      title: 'Reading a Ray Diagram',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the ray diagram to name the incident ray, reflected ray, normal and the two angles.',
      data: {
        viewBox: '0 0 800 400',
        svg: LAW_OF_REFLECTION_SVG,
        hotspots: [
          {
            id: 'lr-law-incident',
            x: 25,
            y: 30,
            label: 'Incident ray: the ray coming in',
            description:
              'The incident ray is the ray of light arriving at the mirror. Draw it as a straight line with a single arrowhead pointing towards the point of incidence. It tells us where the light is coming from.',
          },
          {
            id: 'lr-law-normal',
            x: 53,
            y: 28,
            label: 'Normal: the dashed line at 90 deg to the mirror',
            description:
              'The normal is a construction line drawn at right angles to the mirror at the point of incidence. It is always shown dashed so it is not mistaken for a real ray. Every angle in this diagram is measured from this dashed line.',
          },
          {
            id: 'lr-law-reflected',
            x: 78,
            y: 30,
            label: 'Reflected ray: the ray going out',
            description:
              'The reflected ray leaves the mirror on the other side of the normal. Its arrow points away from the point of incidence. The law of reflection sets the angle this ray comes off at.',
          },
          {
            id: 'lr-law-i',
            x: 43,
            y: 68,
            label: 'Angle of incidence i',
            description:
              'The angle of incidence i is measured between the incident ray and the normal, not between the incident ray and the mirror. Putting your protractor on the normal is the safest method.',
          },
          {
            id: 'lr-law-r',
            x: 57,
            y: 68,
            label: 'Angle of reflection r',
            description:
              'The angle of reflection r is measured between the reflected ray and the normal. The law of reflection states i = r at every flat surface, so r matches i exactly.',
          },
        ],
      },
    },
    {
      id: 'lr-scene-angle',
      title: 'Measure from the Normal',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see why measuring the angle from the normal is right and measuring from the surface is wrong.',
      data: {
        viewBox: '0 0 800 400',
        svg: ANGLE_FROM_NORMAL_SVG,
        hotspots: [
          {
            id: 'lr-angle-normal',
            x: 45,
            y: 60,
            label: 'From the normal: 30 deg',
            description:
              'The angle of incidence is measured between the ray and the dashed normal. Here that angle is 30 deg, which is the value you must write down.',
          },
          {
            id: 'lr-angle-surface',
            x: 38,
            y: 78,
            label: 'From the surface: 60 deg (wrong)',
            description:
              'If you put your protractor on the mirror, you would read 60 deg, the complement. This is a common mistake. The two angles add to 90 deg because the normal is at 90 deg to the mirror.',
          },
          {
            id: 'lr-angle-rule',
            x: 75,
            y: 50,
            label: 'Why from the normal',
            description:
              'Every standard ray-diagram convention measures from the normal. It keeps the rule i = r tidy: at 30 deg, the reflected ray also makes 30 deg with the normal on the other side. Measure from the surface and the bookkeeping falls apart.',
          },
        ],
      },
    },
    {
      id: 'lr-scene-specular-diffuse',
      title: 'Specular vs Diffuse Reflection',
      type: 'labelled-diagram',
      instructions:
        'Click each side to compare a smooth bathroom mirror with a rough wall.',
      data: {
        viewBox: '0 0 800 400',
        svg: SPECULAR_VS_DIFFUSE_SVG,
        hotspots: [
          {
            id: 'lr-sd-specular',
            x: 25,
            y: 25,
            label: 'Specular: parallel in, parallel out',
            description:
              'A smooth bathroom mirror is flat at every point, so every part of the surface shares the same normal. Parallel incident rays reflect as parallel rays, so a clear image of your face forms.',
          },
          {
            id: 'lr-sd-diffuse',
            x: 75,
            y: 25,
            label: 'Diffuse: bumpy surface, scattered rays',
            description:
              'A rough kitchen wall has tiny bumps. Each bump faces a slightly different direction, so each one has its own normal. Parallel rays go in but reflected rays scatter in every direction. You can see the wall is lit, but no image of your face forms.',
          },
          {
            id: 'lr-sd-rule',
            x: 50,
            y: 95,
            label: 'The law still holds at every point',
            description:
              'On a rough wall the law i = r is still obeyed at every single bump. The reason there is no image is that the bumps point different ways, not that the law has broken down. Even a polished Volvo lorry side mirror would give a fuzzy image if you scratched it.',
          },
        ],
      },
    },
    {
      id: 'lr-scene-periscope',
      title: 'A Periscope in a Submarine',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to trace light through a periscope on a Channel-class submarine.',
      data: {
        viewBox: '0 0 800 400',
        svg: PERISCOPE_SVG,
        hotspots: [
          {
            id: 'lr-peri-top',
            x: 53,
            y: 35,
            label: 'Top mirror at 45 deg',
            description:
              'Light from above the water arrives horizontally and hits the top mirror, which is tilted at 45 deg. The angle of incidence from the normal is 45 deg, so by the law of reflection the angle of reflection is also 45 deg. The ray is turned through 90 deg and travels straight down the tube.',
          },
          {
            id: 'lr-peri-bottom',
            x: 53,
            y: 80,
            label: 'Bottom mirror at 45 deg',
            description:
              'The vertical ray inside the tube hits the bottom mirror, also at 45 deg. The same law turns the light through 90 deg again, sending it horizontally out of the tube to the observer.',
          },
          {
            id: 'lr-peri-result',
            x: 75,
            y: 78,
            label: 'Observer in the submarine',
            description:
              'After two reflections, light from above the water reaches the observer below. Each reflection follows i = r at 45 deg, so the design always works whatever the height of the submarine.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'lr-worked-1',
      title: 'Find r when i is 35 deg',
      steps: [
        {
          explanation:
            'Set out the situation. A ray of light from a torch in a Bristol classroom hits a flat mirror. The angle of incidence, measured from the normal, is 35 deg. We want the angle of reflection r.',
        },
        {
          explanation:
            'Write the law of reflection. The angle of incidence and the angle of reflection are equal.',
          maths: 'i = r',
        },
        {
          explanation: 'Substitute the value of i.',
          maths: 'r = 35 deg',
        },
        {
          explanation:
            'State the answer with the unit. The angle of reflection is 35 deg, measured from the normal on the other side of the dashed line. The total angle between the incident and reflected ray is therefore 35 + 35 = 70 deg.',
        },
      ],
    },
    {
      id: 'lr-worked-2',
      title: 'Find the angle between the incident and reflected ray',
      steps: [
        {
          explanation:
            'Set out the situation. A laser beam in a Cardiff school strikes a flat mirror at an angle of incidence of 20 deg from the normal. We want the angle between the incident ray and the reflected ray.',
        },
        {
          explanation: 'Use the law of reflection to find r.',
          maths: 'r = i = 20 deg',
        },
        {
          explanation:
            'The incident ray sits 20 deg one side of the normal, the reflected ray 20 deg the other side. The full angle between them spans both.',
          maths: 'angle between rays = i + r',
        },
        {
          explanation: 'Substitute the values.',
          maths: 'angle between rays = 20 + 20 = 40 deg',
        },
        {
          explanation:
            'State the answer. The angle between the incident ray and the reflected ray is 40 deg. A quick sanity check: a steeper ray (closer to the normal) gives a smaller total angle, which matches.',
        },
      ],
    },
    {
      id: 'lr-worked-3',
      title: 'Specular or diffuse: a polished tile vs a brick wall',
      steps: [
        {
          explanation:
            'Set out the situation. A pupil shines a torch beam first onto a polished kitchen tile, then onto a red brick wall. They notice the tile shows a clear bright spot of light and the wall lights up evenly with no spot. Identify each surface as specular or diffuse.',
        },
        {
          explanation:
            'Think about the surface. The polished tile is smooth on the scale of the light, so every bit of its surface shares the same normal. Parallel rays from the torch reflect as a parallel beam, giving a single clear bright spot.',
        },
        {
          explanation:
            'Identify the tile. The tile shows specular reflection. The law i = r holds at every point and all the points line up, so the beam stays intact.',
        },
        {
          explanation:
            'Think about the brick. The brick is rough on the scale of the light, so each bump faces a different direction. Parallel rays scatter in many directions because each tiny normal points its own way.',
        },
        {
          explanation:
            'Identify the brick. The brick shows diffuse reflection. The law i = r is still obeyed at every single bump, but because the bumps face different ways the overall light scatters and no clear spot forms.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'lr-q1',
      type: 'multiple-choice',
      stem: 'A ray of light hits a flat bathroom mirror. From where should the angle of incidence be measured?',
      tier: 'core',
      options: [
        'From the normal, the dashed line drawn at right angles to the mirror at the point of incidence.',
        'From the surface of the mirror.',
        'From the edge of the mirror.',
        'From the reflected ray.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'lr-mis-angle-from-surface',
      hint: 'The standard rule is to measure every ray-diagram angle from the dashed normal.',
    },
    {
      id: 'lr-q2',
      type: 'numeric-entry',
      stem: 'A torch beam in a Bristol classroom hits a flat mirror with an angle of incidence of 35 deg. What is the angle of reflection, in degrees, measured from the normal?',
      tier: 'core',
      correctAnswer: 35,
      unit: 'deg',
      xpValue: 10,
      hint: 'The law of reflection says i = r.',
    },
    {
      id: 'lr-q3',
      type: 'multiple-choice',
      stem: 'Which sentence states the law of reflection?',
      tier: 'core',
      options: [
        'The angle of incidence is twice the angle of reflection.',
        'The angle of incidence plus the angle of reflection always equals 90 deg.',
        'The angle of incidence equals the angle of reflection, both measured from the normal.',
        'The angle of reflection is always 45 deg, whatever the incident ray.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'lr-mis-i-plus-r-equals-90',
      hint: 'Both angles match, and both are measured from the dashed normal.',
    },
    {
      id: 'lr-q4',
      type: 'numeric-entry',
      stem: 'A laser strikes a plane mirror with an angle of incidence of 0 deg, hitting it straight on. What is the angle of reflection, in degrees?',
      tier: 'core',
      correctAnswer: 0,
      unit: 'deg',
      xpValue: 10,
      hint: 'If i = 0 deg, then r = 0 deg. The ray retraces its path back along the normal.',
    },
    {
      id: 'lr-q5',
      type: 'multiple-choice',
      stem: 'A bathroom mirror gives a clear image of your face, but a rough brick wall does not. Which sentence best explains the difference?',
      tier: 'core',
      options: [
        'The law of reflection only applies to mirrors, not to walls.',
        'The wall absorbs all the light, so no reflection happens.',
        'Both surfaces obey the law of reflection at every point; the mirror is smooth so rays stay parallel, the wall is bumpy so rays scatter.',
        'The mirror has special atoms that always bounce light straight back.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'lr-mis-only-mirrors-reflect',
      hint: 'Both surfaces reflect light at every point. The shape of the surface decides whether you see an image.',
    },
    {
      id: 'lr-q6',
      type: 'multiple-choice',
      stem: 'In a ray diagram, how should the normal be drawn?',
      tier: 'core',
      options: [
        'A solid line along the mirror.',
        'A solid line in the same direction as the incident ray.',
        'A dashed line at 45 deg to the mirror.',
        'A dashed line at right angles to the mirror at the point of incidence.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'lr-mis-normal-not-perpendicular',
      hint: 'The normal is a construction line, drawn dashed, perpendicular to the surface.',
    },
    {
      id: 'lr-q7',
      type: 'multiple-choice',
      stem: 'A snooker shot sends the cue ball sliding sharply into the cushion at an angle of 40 deg from the normal. Treat the cushion like a flat mirror. What is the angle of reflection?',
      tier: 'core',
      options: [
        '50 deg (the complement)',
        '40 deg (by the law of reflection, r = i)',
        '80 deg (twice the angle)',
        '20 deg (half the angle)',
      ],
      correctIndex: 1,
      xpValue: 10,
      hint: 'A cushion follows the same rule: i = r.',
    },
    {
      id: 'lr-q8',
      type: 'multiple-choice',
      stem: 'A pupil shines a torch beam at a polished kitchen tile and sees a single bright spot. They then shine it at a red brick wall and the whole wall glows evenly. Which type of reflection is happening on the brick wall?',
      tier: 'confident',
      options: [
        'Specular reflection, because the brick is still reflecting light.',
        'No reflection, because no image of the torch is visible.',
        'Refraction, because the light has changed direction.',
        'Diffuse reflection, because the rough surface scatters the rays in many directions.',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'lr-mis-rough-no-reflection',
      hint: 'A glow with no image means the rays have scattered. That is diffuse reflection.',
    },
    {
      id: 'lr-q9',
      type: 'numeric-entry',
      stem: 'A ray of light hits a flat mirror in a Leeds physics lab. The angle between the incident ray and the surface of the mirror is 60 deg. What is the angle of incidence, in degrees, measured from the normal?',
      tier: 'confident',
      correctAnswer: 30,
      unit: 'deg',
      xpValue: 15,
      misconceptionId: 'lr-mis-angle-from-surface',
      hint: 'The angle from the normal and the angle from the surface always add to 90 deg.',
    },
    {
      id: 'lr-q10',
      type: 'numeric-entry',
      stem: 'A ray strikes a plane mirror with an angle of incidence of 25 deg. What is the angle between the incident ray and the reflected ray, in degrees?',
      tier: 'confident',
      correctAnswer: 50,
      unit: 'deg',
      xpValue: 15,
      hint: 'The two angles sit on either side of the normal, so add them: i + r = 25 + 25.',
    },
    {
      id: 'lr-q11',
      type: 'multiple-choice',
      stem: 'A periscope on a Channel-class submarine uses two flat mirrors, each set at 45 deg to the horizontal. Why does the design always work?',
      tier: 'confident',
      options: [
        'Because each mirror reflects light so that i = r = 45 deg, turning the ray through 90 deg at each mirror.',
        'Because submarines bend light using thick glass.',
        'Because curved mirrors gather the light at the top.',
        'Because the water above the periscope refracts the light into the tube.',
      ],
      correctIndex: 0,
      xpValue: 15,
      hint: 'A 45 deg incidence gives a 45 deg reflection, and 45 + 45 = 90 deg.',
    },
    {
      id: 'lr-q12',
      type: 'multiple-choice',
      stem: 'A Volvo lorry driver checks the side mirror. A reflected ray leaves the mirror at 22 deg from the normal. By the law of reflection, what was the angle of incidence?',
      tier: 'confident',
      options: [
        '44 deg (twice 22)',
        '68 deg (the complement of 22)',
        '22 deg (because i = r works both ways)',
        '0 deg (the ray must enter along the normal)',
      ],
      correctIndex: 2,
      xpValue: 15,
      hint: 'The law works both ways: r = i, so i = r.',
    },
    {
      id: 'lr-q13',
      type: 'multiple-choice',
      stem: 'A torch beam hits a polished kitchen tile. The reflected ray makes a clear bright spot on the wall opposite. Which type of reflection is this?',
      tier: 'confident',
      options: [
        'Diffuse reflection, because the wall glows.',
        'Specular reflection, because the tile is smooth and parallel rays stay parallel.',
        'Refraction, because the tile bends the light.',
        'Absorption, because the tile is hot.',
      ],
      correctIndex: 1,
      xpValue: 15,
      hint: 'A clear bright spot is a sign of a smooth surface and a parallel reflected beam.',
    },
    {
      id: 'lr-q14',
      type: 'spot-misconception',
      stem: 'Priya measures angles for a ray hitting a flat mirror at 30 deg from the surface.',
      tier: 'confident',
      statements: [
        {
          text: 'Priya says: "The angle of incidence is 30 deg, because that is what I read with my protractor placed on the mirror. The reflected ray will come off at 30 deg too." She is writing down the angle from the surface as the angle of incidence.',
          isMisconception: true,
        },
        {
          text: 'Priya says: "The 30 deg I read from the mirror is the angle from the surface, not from the normal. The angle of incidence is 90 - 30 = 60 deg, so the angle of reflection is 60 deg too." She is converting to the normal-based value.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'lr-mis-angle-from-surface',
    },
    {
      id: 'lr-q15',
      type: 'drag-order',
      stem: 'Put the steps in the right order for drawing a ray diagram for a single reflection at a plane mirror.',
      tier: 'confident',
      items: [
        'Mark the point of incidence where the ray meets the mirror, then draw the dashed normal at right angles to the mirror through that point.',
        'Draw the incident ray as a solid line with an arrowhead pointing towards the mirror.',
        'Draw the reflected ray on the other side of the normal, with an arrowhead pointing away from the mirror.',
        'Measure the angle of incidence from the normal, then make the angle of reflection the same.',
      ],
      correctOrder: [1, 0, 3, 2],
      xpValue: 15,
      misconceptionId: 'lr-mis-reflected-from-different-point',
      hint: 'Incident ray first, then point of incidence and normal, then measure i, then draw the reflected ray with r = i.',
    },
    {
      id: 'lr-q16',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is finding the angle between the incident and reflected rays for a ray hitting a plane mirror with i = 55 deg from the normal.',
      tier: 'challenge',
      steps: [
        'Write down the angle of incidence: i = 55 deg, measured from the normal.',
        'Apply the law of reflection: r = i.',
        'Substitute to get the angle of reflection: r = 55 deg.',
        null,
        'Evaluate the sum: 55 + 55 = 110 deg.',
        'State the answer: the angle between the incident ray and the reflected ray is 110 deg.',
      ],
      missingStepIndex: 3,
      correctStep:
        'The two rays sit on opposite sides of the normal, so the angle between them is i + r. Write the sum: angle between rays = i + r = 55 + 55.',
      xpValue: 20,
    },
    {
      id: 'lr-q17',
      type: 'numeric-entry',
      stem: 'A flat mirror is rotated sharply by 10 deg about the point of incidence while the incident ray stays fixed. By how many degrees does the reflected ray turn? Use the rule that a flat mirror rotated by an angle theta deflects the reflected ray by 2 theta.',
      tier: 'challenge',
      correctAnswer: 20,
      unit: 'deg',
      xpValue: 20,
      hint: 'Rotating a mirror by theta turns the reflected ray by 2 theta, so 2 x 10 = 20 deg.',
    },
    {
      id: 'lr-q18',
      type: 'numeric-entry',
      stem: 'A ray hits a plane mirror with an angle of incidence of 28 deg. The reflected ray leaves the mirror. What is the angle between the reflected ray and the surface of the mirror, in degrees?',
      tier: 'challenge',
      correctAnswer: 62,
      unit: 'deg',
      xpValue: 20,
      misconceptionId: 'lr-mis-angle-from-surface',
      hint: 'r = i = 28 deg from the normal, so the angle from the surface is 90 - 28.',
    },
    {
      id: 'lr-q19',
      type: 'spot-misconception',
      stem: 'Marcus is told a torch beam lights up the whole of a rough brick wall in a Newcastle alleyway with no clear spot.',
      tier: 'challenge',
      statements: [
        {
          text: 'Marcus says: "Reflection cannot be happening on the brick wall because there is no image. The law of reflection has broken down for rough surfaces." This is wrong; rough surfaces do reflect light.',
          isMisconception: true,
        },
        {
          text: 'Marcus says: "Reflection is still happening at every point. The wall is rough so each bump has its own normal, and the rays scatter in many directions. The law i = r still holds at every single bump." This is right.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'lr-mis-rough-no-reflection',
    },
    {
      id: 'lr-q20',
      type: 'multiple-choice',
      stem: 'Two flat mirrors are placed at right angles to each other, like the corner of a Cambridge laser-tag arena. A ray enters and reflects off the first mirror, then the second. Compared to its original direction, the final ray is travelling:',
      tier: 'challenge',
      options: [
        'In the same direction as the original ray.',
        'At 45 deg to the original ray.',
        'In exactly the opposite direction to the original ray.',
        'Stopped, because two reflections cancel the ray out.',
      ],
      correctIndex: 2,
      xpValue: 20,
      hint: 'Each mirror obeys i = r. After two reflections at right-angled mirrors the ray reverses, like a corner reflector.',
    },
    {
      id: 'lr-q21',
      type: 'numeric-entry',
      stem: 'A periscope mirror is set at 45 deg to the horizontal. A horizontal ray enters the mirror. What is the angle of incidence, in degrees, measured from the normal to the mirror?',
      tier: 'challenge',
      correctAnswer: 45,
      unit: 'deg',
      xpValue: 20,
      hint: 'If the mirror is at 45 deg to the horizontal, the normal is at 45 deg to the horizontal too (on the other side), so a horizontal ray makes 45 deg with the normal.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2019, Paper 1F, candidates measured the angle of incidence from the mirror surface rather than from the normal, leading to systematic 90 - x errors.
    {
      id: 'lr-mis-angle-from-surface',
      description:
        'Measuring the angle of incidence or reflection from the mirror surface instead of from the normal, giving the complement (90 - x) of the correct value.',
      triggerAnswer: 'angle-from-surface',
      correction:
        'Ray-diagram angles in reflection are measured from the dashed normal, not the surface. The normal is at 90 deg to the mirror, so angle from surface plus angle from normal always equals 90 deg.',
      reExplanation:
        'A ray hits a flat mirror at 30 deg from the surface. Place the protractor on the dashed normal instead, and the angle from the normal is 90 - 30 = 60 deg. So the angle of incidence is 60 deg, and the angle of reflection is also 60 deg by i = r. If you had used 30 deg as the angle of incidence, every later calculation would be wrong by 90 - x. Always measure from the normal.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2021, Paper 1PH0/1F, candidates wrote that reflection only happens at mirrors, missing that walls and rough surfaces also reflect.
    {
      id: 'lr-mis-only-mirrors-reflect',
      description:
        'Believing that reflection only happens at mirrors, missing that walls, paper, and other rough surfaces also reflect light.',
      triggerAnswer: 'only-mirrors-reflect',
      correction:
        'Reflection happens at every surface that does not fully absorb or transmit the light. Mirrors give specular reflection because they are smooth; rough surfaces give diffuse reflection. Both obey the law i = r at every point.',
      reExplanation:
        'You can see a red brick wall in a Newcastle alleyway only because light from the sun reflects off it into your eye. The wall is rough, so the reflected rays scatter and no image forms, but reflection still happens at every bump. A mirror is different only because its surface is smooth on the scale of the light, so parallel rays stay parallel and an image forms. The law of reflection is universal, not just a mirror rule.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2022, J259/02, candidates wrote that rough surfaces do not reflect light, confusing absence of an image with absence of reflection.
    {
      id: 'lr-mis-rough-no-reflection',
      description:
        'Claiming that rough surfaces do not reflect light at all, confusing the lack of a visible image with the lack of reflection.',
      triggerAnswer: 'rough-no-reflection',
      correction:
        'Rough surfaces do reflect light. The law i = r still holds at every single bump. Because the bumps face different ways, the reflected rays scatter and no image forms; the reflection is called diffuse.',
      reExplanation:
        'Shine a torch on a polished kitchen tile and you see a single bright spot: specular reflection. Shine the same torch on a rough red brick wall and the whole wall lights up evenly with no clear spot: diffuse reflection. Both surfaces reflect the same total amount of light, and at every single point the angle of incidence still equals the angle of reflection. The wall has tiny bumps whose normals point different ways, so the rays scatter.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2020, Paper 1F, candidates drew the normal as a solid line continuing the path of the incident ray rather than at 90 deg to the mirror.
    {
      id: 'lr-mis-normal-not-perpendicular',
      description:
        'Drawing the normal as anything other than a dashed line at 90 deg to the mirror at the point of incidence, for example along the incident ray itself.',
      triggerAnswer: 'normal-not-perpendicular',
      correction:
        'The normal is at right angles (90 deg) to the surface at the exact point where the ray meets the mirror. Draw it as a dashed line so it is not mistaken for a real ray of light.',
      reExplanation:
        'The law of reflection depends on the normal being perpendicular to the surface. Tilt it any other way and the angles on each side stop matching, so i = r breaks. The dashed style tells the reader the normal is a construction line, not a ray. Put your protractor base on the mirror, mark a 90 deg corner, and draw the normal dashed through the point of incidence.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2018, Paper 1PH0/1F, candidates wrote i + r = 90 deg as the law of reflection, mistaking the complement rule for the equal-angles rule.
    {
      id: 'lr-mis-i-plus-r-equals-90',
      description:
        'Writing the law of reflection as i + r = 90 deg, instead of i = r.',
      triggerAnswer: 'i-plus-r-90',
      correction:
        'The law of reflection is i = r, both measured from the normal. There is no rule that says i + r = 90 deg.',
      reExplanation:
        'A ray hits a mirror with i = 30 deg from the normal. The law says r = 30 deg, not r = 60 deg. The total angle between incident and reflected rays is i + r = 60 deg. The 90 deg figure sits between the normal and the surface, not between i and r. Keep these ideas apart and i = r works every time.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2021, J259/02, candidates ignored the point of incidence and drew the reflected ray from a different spot on the mirror.
    {
      id: 'lr-mis-reflected-from-different-point',
      description:
        'Drawing the reflected ray starting from a different point on the mirror, not from the point of incidence where the incident ray meets the surface.',
      triggerAnswer: 'reflected-wrong-point',
      correction:
        'The reflected ray must start at the same point on the mirror where the incident ray hits. Mark that point with a small dot before drawing either angle.',
      reExplanation:
        'Light reflects at the exact point of contact. Start the reflected ray from a different spot on the mirror and the geometry breaks: the angles will not match i = r. The standard method is to mark the point of incidence with a small dot, draw the dashed normal through that dot, then draw both rays meeting there. Any other order leads to messy diagrams.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const wavesLawOfReflectionZoneNodes = [wavesLawOfReflection]
