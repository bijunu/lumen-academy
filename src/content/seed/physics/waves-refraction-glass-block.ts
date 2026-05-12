import type { SkillNode } from '@/types/content'

const REFRACTION_BLOCK_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Light bending through a parallel-sided glass block</text>

    <!-- Glass block: a rectangle in the middle -->
    <rect x="260" y="120" width="280" height="160" fill="currentColor" fill-opacity="0.08" />
    <text x="400" y="210" text-anchor="middle" font-size="13" font-style="italic" stroke="none" fill="currentColor">glass block</text>

    <!-- Top boundary: air to glass. Normal at entry point (340, 120) -->
    <line x1="340" y1="60" x2="340" y2="180" stroke-dasharray="5,5" stroke-width="2" />
    <text x="350" y="80" font-size="12" stroke="none" fill="currentColor">normal</text>

    <!-- Incident ray from upper-left to entry point (340, 120) -->
    <line x1="200" y1="60" x2="340" y2="120" stroke-width="3" />
    <polygon points="333,113 343,123 333,123" fill="currentColor" stroke="none" />
    <text x="220" y="55" font-size="12" font-weight="700" stroke="none" fill="currentColor">incident ray (in air)</text>

    <!-- Angle of incidence i, between incident ray and normal at entry -->
    <path d="M 340 100 A 22 22 0 0 0 322 110" stroke-width="2" />
    <text x="318" y="105" text-anchor="end" font-size="13" font-weight="700" stroke="none" fill="currentColor">i</text>

    <!-- Refracted ray inside glass: bends towards the normal. Exits at (460, 280) -->
    <line x1="340" y1="120" x2="460" y2="280" stroke-width="3" />
    <text x="370" y="200" font-size="12" font-weight="700" stroke="none" fill="currentColor">refracted ray</text>
    <text x="370" y="218" font-size="11" stroke="none" fill="currentColor">(slower in glass)</text>

    <!-- Angle of refraction r at entry, between refracted ray and normal. r < i -->
    <path d="M 340 145 A 25 25 0 0 0 354 158" stroke-width="2" />
    <text x="362" y="150" font-size="13" font-weight="700" stroke="none" fill="currentColor">r</text>

    <!-- Bottom boundary normal at exit point (460, 280) -->
    <line x1="460" y1="220" x2="460" y2="340" stroke-dasharray="5,5" stroke-width="2" />
    <text x="470" y="335" font-size="12" stroke="none" fill="currentColor">normal</text>

    <!-- Emergent ray out of bottom: bends away from normal -->
    <line x1="460" y1="280" x2="620" y2="350" stroke-width="3" />
    <polygon points="612,343 622,353 612,353" fill="currentColor" stroke="none" />
    <text x="560" y="375" font-size="12" font-weight="700" stroke="none" fill="currentColor">emergent ray (in air)</text>

    <!-- Lateral shift: a dashed line continuing the incident ray straight through -->
    <line x1="340" y1="120" x2="540" y2="320" stroke-dasharray="3,4" stroke-width="2" />
    <text x="640" y="320" font-size="11" font-style="italic" stroke="none" fill="currentColor">undeviated path</text>

    <!-- Lateral shift marker between emergent ray and the undeviated path -->
    <line x1="540" y1="320" x2="620" y2="350" stroke-width="2" />
    <text x="600" y="305" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">lateral shift</text>
  </g>
`

const BENT_STRAW_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">A straw in a glass of water looks bent at the surface</text>

    <!-- Glass tumbler outline -->
    <line x1="180" y1="100" x2="180" y2="340" stroke-width="3" />
    <line x1="420" y1="100" x2="420" y2="340" stroke-width="3" />
    <line x1="180" y1="340" x2="420" y2="340" stroke-width="3" />

    <!-- Water surface -->
    <line x1="180" y1="200" x2="420" y2="200" stroke-width="2" />
    <text x="430" y="205" font-size="12" stroke="none" fill="currentColor">water surface</text>
    <text x="430" y="222" font-size="11" stroke="none" fill="currentColor">(air above, water below)</text>

    <!-- Straw above water: a single straight segment -->
    <line x1="220" y1="80" x2="290" y2="200" stroke-width="4" />
    <text x="200" y="75" font-size="12" stroke="none" fill="currentColor">straw (in air)</text>

    <!-- Straw below water as it actually is: continues the same line down to the base -->
    <line x1="290" y1="200" x2="330" y2="340" stroke-dasharray="3,4" stroke-width="2" />
    <text x="340" y="290" font-size="11" font-style="italic" stroke="none" fill="currentColor">actual straw</text>

    <!-- Apparent straw below the surface: bent towards normal at surface, ends up closer to vertical -->
    <line x1="290" y1="200" x2="310" y2="340" stroke-width="4" />
    <text x="245" y="330" font-size="12" font-weight="700" stroke="none" fill="currentColor">apparent straw</text>

    <!-- Eye on the right -->
    <circle cx="600" cy="160" r="22" />
    <circle cx="600" cy="160" r="6" fill="currentColor" />
    <text x="600" y="125" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">observer's eye</text>

    <!-- Light path from the bottom of the actual straw, bending up to the eye -->
    <line x1="330" y1="340" x2="290" y2="200" stroke-dasharray="4,4" stroke-width="2" />
    <line x1="290" y1="200" x2="600" y2="160" stroke-dasharray="4,4" stroke-width="2" />
    <polygon points="592,154 605,160 592,166" fill="currentColor" stroke="none" />

    <!-- Caption -->
    <text x="400" y="380" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Light from the straw bends away from the normal when it leaves the water, so the eye sees the lower part raised.</text>
  </g>
`

const DENSER_MEDIUM_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Air to glass: light slows down and bends towards the normal</text>

    <!-- Left panel: entering glass -->
    <text x="200" y="60" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Air to glass (denser)</text>
    <rect x="60" y="80" width="280" height="240" fill="currentColor" fill-opacity="0.04" />
    <line x1="60" y1="200" x2="340" y2="200" stroke-width="2" />
    <text x="80" y="170" font-size="11" stroke="none" fill="currentColor">air</text>
    <text x="80" y="225" font-size="11" stroke="none" fill="currentColor">glass</text>

    <!-- Normal at boundary -->
    <line x1="200" y1="130" x2="200" y2="270" stroke-dasharray="5,5" stroke-width="2" />
    <text x="208" y="140" font-size="11" stroke="none" fill="currentColor">normal</text>

    <!-- Incident ray, steep angle -->
    <line x1="120" y1="120" x2="200" y2="200" stroke-width="3" />
    <polygon points="194,194 204,204 194,204" fill="currentColor" stroke="none" />
    <text x="120" y="115" font-size="11" stroke="none" fill="currentColor">incident</text>

    <!-- Refracted ray inside glass: closer to normal than incident -->
    <line x1="200" y1="200" x2="240" y2="300" stroke-width="3" />
    <text x="250" y="290" font-size="11" stroke="none" fill="currentColor">refracted</text>
    <text x="250" y="308" font-size="11" stroke="none" fill="currentColor">(bends towards normal)</text>

    <!-- Right panel: leaving glass -->
    <text x="600" y="60" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Glass to air (less dense)</text>
    <rect x="460" y="80" width="280" height="240" fill="currentColor" fill-opacity="0.04" />
    <line x1="460" y1="200" x2="740" y2="200" stroke-width="2" />
    <text x="480" y="170" font-size="11" stroke="none" fill="currentColor">glass</text>
    <text x="480" y="225" font-size="11" stroke="none" fill="currentColor">air</text>

    <!-- Normal at boundary -->
    <line x1="600" y1="130" x2="600" y2="270" stroke-dasharray="5,5" stroke-width="2" />
    <text x="608" y="140" font-size="11" stroke="none" fill="currentColor">normal</text>

    <!-- Incident ray inside glass, close to normal -->
    <line x1="560" y1="100" x2="600" y2="200" stroke-width="3" />
    <text x="510" y="100" font-size="11" stroke="none" fill="currentColor">in glass</text>

    <!-- Refracted ray in air: further from normal -->
    <line x1="600" y1="200" x2="700" y2="290" stroke-width="3" />
    <polygon points="694,283 705,294 694,294" fill="currentColor" stroke="none" />
    <text x="650" y="310" font-size="11" stroke="none" fill="currentColor">in air</text>
    <text x="650" y="328" font-size="11" stroke="none" fill="currentColor">(bends away from normal)</text>

    <!-- Caption -->
    <text x="400" y="370" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Denser = slower for light. Entering glass: bends towards the normal. Leaving glass: bends away.</text>
  </g>
`

export const wavesRefractionGlassBlock: SkillNode = {
  id: 'physics-waves-refraction-glass-block',
  title: 'Refraction at a Glass Block',
  description:
    'Light changes direction when it crosses the boundary between two materials, because it travels at different speeds in each. Going from air into glass, light slows down and bends towards the normal (the dashed line drawn at right angles to the surface). Going from glass back into air, it speeds up and bends away from the normal. When a ray passes through a parallel-sided rectangular glass block, the emergent ray comes out parallel to the incident ray, just shifted sideways. This is why a drinking straw in a glass of water looks bent at the surface, and why a coin in a teacup can appear closer to the surface than it really is. Year 7 keeps this qualitative; the numerical Snell\'s law comes at GCSE.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-waves',
  zoneName: 'Waves',
  tier: 'confident',
  prerequisites: ['physics-waves-anatomy'],
  curriculum: {
    ks3Objective:
      'The transmission of light through materials; light changes direction when entering a denser medium.',
    awardingBodies: {
      aqa: '4.6.2.4 Refraction of light; bending towards or away from the normal when changing medium (GCSE Physics 8463)',
      edexcel:
        'Topic 5.2 Refraction; refraction at boundaries between media, ray diagrams through rectangular glass blocks (GCSE Physics 1PH0)',
      ocr: 'P5.3 Light; refraction at material boundaries, qualitative ray diagrams (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'rg-scene-block',
      title: 'A Ray Through a Glass Block',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to label the parts of a ray passing through a parallel-sided glass block: the normal, angle of incidence, angle of refraction, lateral shift, and the emergent ray.',
      data: {
        viewBox: '0 0 800 400',
        svg: REFRACTION_BLOCK_SVG,
        hotspots: [
          {
            id: 'rg-block-normal',
            x: 42,
            y: 20,
            label: 'Normal',
            description:
              'The normal is the dashed line drawn at right angles to the boundary at the point where the ray hits. Angles are always measured from the normal, never from the surface.',
          },
          {
            id: 'rg-block-i',
            x: 38,
            y: 28,
            label: 'Angle of incidence i',
            description:
              'The angle of incidence i is the angle between the incoming ray and the normal, measured in air before the ray hits the glass.',
          },
          {
            id: 'rg-block-r',
            x: 46,
            y: 38,
            label: 'Angle of refraction r',
            description:
              'The angle of refraction r is the angle between the bent ray and the normal, measured inside the glass. Because the ray bends towards the normal, r is smaller than i.',
          },
          {
            id: 'rg-block-emerge',
            x: 70,
            y: 86,
            label: 'Emergent ray',
            description:
              'The emergent ray leaves the bottom face of the block back into air. It bends away from the normal as it speeds up, ending up parallel to the original incident ray.',
          },
          {
            id: 'rg-block-shift',
            x: 72,
            y: 76,
            label: 'Lateral shift',
            description:
              'The emergent ray is parallel to the incident ray but offset sideways. This sideways offset is the lateral shift. A thicker block gives a larger lateral shift at the same angle.',
          },
        ],
      },
    },
    {
      id: 'rg-scene-denser',
      title: 'Bending Towards or Away from the Normal',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare a ray going from air into glass (denser) with a ray going from glass back into air (less dense).',
      data: {
        viewBox: '0 0 800 400',
        svg: DENSER_MEDIUM_SVG,
        hotspots: [
          {
            id: 'rg-denser-entering',
            x: 25,
            y: 50,
            label: 'Air to glass: bends towards normal',
            description:
              'When light enters a denser material like glass, it slows down. The ray bends towards the normal, so the angle of refraction is smaller than the angle of incidence.',
          },
          {
            id: 'rg-denser-leaving',
            x: 75,
            y: 50,
            label: 'Glass to air: bends away from normal',
            description:
              'When light leaves the glass and re-enters air, it speeds up. The ray bends away from the normal, so the angle in air is larger than the angle in glass.',
          },
          {
            id: 'rg-denser-rule',
            x: 50,
            y: 92,
            label: 'Denser means slower for light',
            description:
              'A denser, more optically dense material slows light down. Slowing down at the boundary is what makes the ray bend. The bigger the change in speed, the bigger the bend.',
          },
        ],
      },
    },
    {
      id: 'rg-scene-straw',
      title: 'The Bent Straw Illusion',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see why a straw in a glass of water looks bent and slightly raised at the surface.',
      data: {
        viewBox: '0 0 800 400',
        svg: BENT_STRAW_SVG,
        hotspots: [
          {
            id: 'rg-straw-actual',
            x: 42,
            y: 75,
            label: 'Where the straw actually is',
            description:
              'The straw is a single straight rod. Below the water surface it continues in a straight line down to the base of the glass.',
          },
          {
            id: 'rg-straw-apparent',
            x: 32,
            y: 80,
            label: 'Where the straw appears to be',
            description:
              'Light from the bottom of the straw bends away from the normal as it leaves the water and enters the air. Your brain assumes the light came in a straight line, so it draws the bottom of the straw closer to the surface than it really is.',
          },
          {
            id: 'rg-straw-eye',
            x: 75,
            y: 35,
            label: 'Observer\'s eye',
            description:
              'The eye traces the light back along its final straight-line path in air, ignoring the bend at the surface. The result is a single straw that looks broken at the water line.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'rg-worked-1',
      title: 'Predict where a ray bends at a glass block',
      steps: [
        {
          explanation:
            'Set out the situation. A pupil in a Leeds physics lab shines a ray box at a rectangular glass block sitting on a sheet of paper. The ray hits the top face at an angle of incidence of 40 degrees.',
        },
        {
          explanation:
            'Draw the normal at the entry point. The normal is the dashed line at right angles to the top face, drawn through the point where the ray enters.',
        },
        {
          explanation:
            'Decide which way the ray bends as it enters. Air to glass is a step from a less dense medium to a denser one, so the ray slows down and bends towards the normal.',
          maths: 'air to glass: r is smaller than i, so r is less than 40 degrees',
        },
        {
          explanation:
            'Decide which way the ray bends as it leaves the bottom face. Glass to air is a step from a denser to a less dense medium, so the ray speeds up and bends away from the normal.',
          maths: 'glass to air: angle in air is larger than angle in glass',
        },
        {
          explanation:
            'Compare the emergent ray to the incident ray. The two boundaries are parallel, so the bend at the exit exactly cancels the bend at the entry. The emergent ray is parallel to the incident ray.',
          maths: 'emergent angle in air = 40 degrees (same as incident)',
        },
        {
          explanation:
            'State the answer. The emergent ray leaves the block at 40 degrees to the normal, parallel to the incident ray, and laterally shifted sideways. The thicker the block, the larger the shift.',
        },
      ],
    },
    {
      id: 'rg-worked-2',
      title: 'Order the angles for a ray entering a glass block',
      steps: [
        {
          explanation:
            'Set out the situation. A ray hits the top of a glass block. The angle of incidence in air is i, the angle of refraction in glass is r, and the angle the emergent ray makes with the normal back in air is e.',
        },
        {
          explanation:
            'Apply the air-to-glass rule. Light slows in glass, so it bends towards the normal at the first boundary, which means r is smaller than i.',
          maths: 'r < i',
        },
        {
          explanation:
            'Apply the glass-to-air rule at the bottom face. Light speeds up, so it bends away from the normal, which means e is larger than r.',
          maths: 'e > r',
        },
        {
          explanation:
            'Use the parallel-sided block result. The two boundaries are parallel, so the bends are equal and opposite. The emergent angle in air matches the incident angle.',
          maths: 'e = i',
        },
        {
          explanation:
            'State the order from smallest to largest: the angle inside the glass (r) is the smallest, while i and e are equal and both larger.',
          maths: 'r < i = e',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'rg-q1',
      type: 'multiple-choice',
      stem: 'When a ray of light passes from air into a glass block, which way does it bend at the boundary?',
      tier: 'core',
      options: [
        'It bends towards the normal because glass is denser and light slows down.',
        'It bends away from the normal because glass is denser and light slows down.',
        'It does not bend at all because the surfaces are parallel.',
        'It bends towards the surface because glass attracts light.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'rg-mis-bends-away-entering-denser',
      hint: 'Denser medium slows light down. A slower ray bends towards the normal.',
    },
    {
      id: 'rg-q2',
      type: 'numeric-entry',
      stem: 'A ray hits the top of a glass block at an angle of incidence of 30 degrees. Inside the glass the ray bends towards the normal. Which of these is a sensible angle of refraction inside the glass, in degrees? Type the smaller value below.',
      tier: 'core',
      correctAnswer: 19,
      unit: 'degrees',
      xpValue: 10,
      hint: 'Bending towards the normal means the angle inside the glass is smaller than 30 degrees. About two thirds is typical for window glass.',
    },
    {
      id: 'rg-q3',
      type: 'multiple-choice',
      stem: 'Angles in refraction are always measured from which reference line at the boundary?',
      tier: 'core',
      options: [
        'The surface of the boundary itself.',
        'The horizontal floor of the room.',
        'The normal, drawn at right angles to the boundary.',
        'The direction of the original light source.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'rg-mis-angle-from-surface',
      hint: 'The normal is the dashed line at 90 degrees to the boundary at the point of contact.',
    },
    {
      id: 'rg-q4',
      type: 'multiple-choice',
      stem: 'A ray inside a glass block hits the bottom face at an angle of refraction in glass of 22 degrees. As it leaves the glass and enters the air, which sentence best describes the emergent angle in air?',
      tier: 'core',
      options: [
        'Smaller than 22 degrees, because the ray bends towards the normal on leaving the glass.',
        'Larger than 22 degrees, because the ray bends away from the normal on leaving the glass.',
        'Exactly 22 degrees, because the ray does not bend at the second boundary.',
        '0 degrees, because the ray emerges along the normal.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'rg-mis-bends-away-entering-denser',
      hint: 'Leaving the glass means re-entering a less dense medium. Light speeds up and bends away from the normal.',
    },
    {
      id: 'rg-q5',
      type: 'multiple-choice',
      stem: 'Why does light bend when it crosses from air into glass?',
      tier: 'core',
      options: [
        'Because gravity pulls light downwards inside the glass.',
        'Because the glass surface is rough at the microscopic scale.',
        'Because light travels at a different speed in glass than in air.',
        'Because the glass is coloured.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'rg-mis-gravity-bends-light',
      hint: 'It is the change in speed at the boundary that causes the bend.',
    },
    {
      id: 'rg-q6',
      type: 'numeric-entry',
      stem: 'A ray enters a glass block at an angle of incidence of 0 degrees, meaning it travels straight along the normal. What is the angle of refraction inside the glass, in degrees?',
      tier: 'core',
      correctAnswer: 0,
      unit: 'degrees',
      xpValue: 10,
      hint: 'A ray along the normal does not bend at the boundary. There is nothing for refraction to act on.',
    },
    {
      id: 'rg-q7',
      type: 'multiple-choice',
      stem: 'A straw stands in a tall glass of water on a Norwich kitchen table. Why does the straw look bent at the water surface when seen from the side?',
      tier: 'core',
      options: [
        'Because the straw really is bent inside the water.',
        'Because light from the lower part of the straw bends as it leaves the water and enters the air.',
        'Because water dissolves part of the straw, making it shorter.',
        'Because the glass walls magnify only the top of the straw.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'rg-mis-straw-actually-bent',
      hint: 'The straw is still straight. It is the light path that changes direction at the surface.',
    },
    {
      id: 'rg-q8',
      type: 'multiple-choice',
      stem: 'A ray of light passes through a parallel-sided rectangular glass block at an angle of incidence of 50 degrees. What is the emergent angle of the ray in the air after it leaves the block?',
      tier: 'confident',
      options: [
        '0 degrees: the ray emerges along the normal.',
        'Less than 50 degrees because the ray slowed down inside.',
        '90 degrees: the ray emerges along the surface.',
        '50 degrees: the emergent ray is parallel to the incident ray.',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'rg-mis-block-changes-angle',
      hint: 'The two boundaries are parallel, so the bends cancel. The emergent ray ends up parallel to the incident ray.',
    },
    {
      id: 'rg-q9',
      type: 'numeric-entry',
      stem: 'A ray inside a glass block hits the lower face at an angle of refraction in glass of 18 degrees. The emergent angle in air is measured at 28 degrees. By how many degrees does the ray bend at this boundary?',
      tier: 'confident',
      correctAnswer: 10,
      unit: 'degrees',
      xpValue: 15,
      hint: 'The bend at the boundary is the difference between the angle in air and the angle in glass: 28 - 18.',
    },
    {
      id: 'rg-q10',
      type: 'multiple-choice',
      stem: 'Two parallel-sided glass blocks are placed on a desk in a Cardiff school lab. Block X is 4 cm thick and Block Y is 8 cm thick. The same ray hits each block at the same angle of incidence. Which block produces a larger lateral shift of the emergent ray?',
      tier: 'confident',
      options: [
        'Block Y, because the ray spends a longer path inside the glass before exiting.',
        'Block X, because the ray bends more in a thinner block.',
        'They produce equal lateral shifts because the angles are the same.',
        'Neither: a parallel-sided block produces no lateral shift.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'rg-mis-block-no-shift',
      hint: 'A thicker block lets the bent ray travel further sideways before reaching the exit face.',
    },
    {
      id: 'rg-q11',
      type: 'numeric-entry',
      stem: 'A pupil in a Sheffield class shines a ray at a glass block at an angle of incidence of 60 degrees. The block is parallel-sided. What is the angle the emergent ray makes with the normal as it leaves the bottom of the block, in degrees?',
      tier: 'confident',
      correctAnswer: 60,
      unit: 'degrees',
      xpValue: 15,
      misconceptionId: 'rg-mis-block-changes-angle',
      hint: 'For a parallel-sided block, the emergent angle equals the incident angle. The ray is just shifted sideways.',
    },
    {
      id: 'rg-q12',
      type: 'multiple-choice',
      stem: 'A swimmer at the Crystal Palace pool looks down at the tiled floor. The floor appears closer than it really is. Which sentence best explains this?',
      tier: 'confident',
      options: [
        'Water has a slight magnifying effect, which makes everything look closer.',
        'The eye is shorter under water, so depths look smaller.',
        'Water absorbs the lower part of the light, so only the top is seen.',
        'Light from the floor bends away from the normal when it leaves the water, so the eye traces the rays back to a shallower position.',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'rg-mis-straw-actually-bent',
      hint: 'The brain assumes light travels in a straight line. When the ray bends at the surface, the eye misjudges where the object really sits.',
    },
    {
      id: 'rg-q13',
      type: 'drag-order',
      stem: 'Put the steps in order for tracing a ray through a parallel-sided glass block, from the moment it leaves the ray box to the moment it leaves the bottom of the block.',
      tier: 'confident',
      items: [
        'The ray enters the top face and bends towards the normal because it slows down in the glass.',
        'The ray meets the bottom face of the block at an angle of refraction in glass.',
        'A ray box shines a beam at the top face of the block, making an angle of incidence with the normal.',
        'The ray leaves the bottom face and bends away from the normal, emerging parallel to the original ray but shifted sideways.',
      ],
      correctOrder: [2, 0, 1, 3],
      xpValue: 15,
      hint: 'First the ray reaches the top boundary, then it bends going in, then it reaches the bottom boundary, then it bends going out.',
    },
    {
      id: 'rg-q14',
      type: 'spot-misconception',
      stem: 'Anya is drawing a ray diagram for light passing from air into a glass block. She has drawn the normal as a dashed line and labelled the angle of incidence at 40 degrees.',
      tier: 'confident',
      statements: [
        {
          text: 'Anya says: "Because the ray is going into a denser medium, it must bend away from the normal, so the angle of refraction is larger than 40 degrees." This sentence is correct.',
          isMisconception: true,
        },
        {
          text: 'Anya says: "Because the ray is going into a denser medium it slows down, so it bends towards the normal. The angle of refraction is smaller than 40 degrees." This sentence is correct.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'rg-mis-bends-away-entering-denser',
    },
    {
      id: 'rg-q15',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is reasoning about a ray passing through a parallel-sided glass block at an angle of incidence of 45 degrees.',
      tier: 'confident',
      steps: [
        'Note the angle of incidence in air: i = 45 degrees, measured from the normal.',
        'Going from air into glass the ray slows down, so it bends towards the normal.',
        'The angle of refraction r inside the glass is therefore smaller than 45 degrees.',
        null,
        'Leaving the bottom face, the ray speeds up in air and bends away from the normal by the same amount it bent on entry.',
        'The emergent ray comes out at 45 degrees to the normal, parallel to the incident ray but laterally shifted.',
      ],
      missingStepIndex: 3,
      correctStep:
        'The ray then travels in a straight line through the glass and meets the parallel lower boundary at the same angle r.',
      xpValue: 15,
    },
    {
      id: 'rg-q16',
      type: 'numeric-entry',
      stem: 'A 6 cm thick glass block is placed across a desk. A ray enters at an angle of incidence of 50 degrees and produces a measured lateral shift of 18 mm. The block is then replaced with a 12 cm thick block of the same glass, with the same angle of incidence. Predict the lateral shift, in mm.',
      tier: 'challenge',
      correctAnswer: 36,
      unit: 'mm',
      xpValue: 20,
      hint: 'Lateral shift grows in proportion to the thickness of the block at the same angle. Doubling the thickness doubles the shift.',
    },
    {
      id: 'rg-q17',
      type: 'multiple-choice',
      stem: 'A pupil in a Manchester lab shines a ray straight down on the top of a parallel-sided glass block, along the normal at the surface. Which sentence best describes what happens to the ray as it crosses both boundaries?',
      tier: 'challenge',
      options: [
        'The ray slows down inside the glass but does not change direction at either boundary, because i is 0 at both faces.',
        'The ray bends sharply at each boundary and emerges sideways.',
        'The ray bends only at the bottom boundary, because that is where the glass ends.',
        'The ray is totally reflected back into the air at the top boundary.',
      ],
      correctIndex: 0,
      xpValue: 20,
      misconceptionId: 'rg-mis-always-bends',
      hint: 'Refraction needs a non-zero angle of incidence. A ray along the normal slows in the glass but stays on the same straight line.',
    },
    {
      id: 'rg-q18',
      type: 'numeric-entry',
      stem: 'A ray hits a glass block at an angle of incidence of 35 degrees. Inside the glass it travels at an angle of refraction r. It is replaced with a denser block and the same ray now travels at 18 degrees inside the glass. Compared with the original block, by how many degrees has the angle of refraction decreased? Give a positive number.',
      tier: 'challenge',
      correctAnswer: 5,
      unit: 'degrees',
      xpValue: 20,
      hint: 'Typical window glass gives about 23 degrees inside at i = 35 degrees. A denser block bends light more, so r drops to 18 degrees. Compute the decrease: 23 - 18.',
    },
    {
      id: 'rg-q19',
      type: 'spot-misconception',
      stem: 'Liam is summarising what happens to a ray passing straight through a parallel-sided rectangular glass block.',
      tier: 'challenge',
      statements: [
        {
          text: 'Liam says: "The block is denser than air, so the emergent ray must come out at a different angle to the incident ray. The bigger the block, the bigger the change in angle." This sentence is correct.',
          isMisconception: true,
        },
        {
          text: 'Liam says: "The emergent ray comes out parallel to the incident ray for a parallel-sided block. The block size changes the lateral shift, not the angle of emergence." This sentence is correct.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'rg-mis-block-changes-angle',
    },
    {
      id: 'rg-q20',
      type: 'numeric-entry',
      stem: 'A pond at a Lake District nature reserve has a real depth of 60 cm. A pupil looks down at a stone resting on the bottom. Light from the stone bends away from the normal as it leaves the water, so the stone appears about three quarters of its real depth below the surface. What is the apparent depth of the stone, in cm?',
      tier: 'challenge',
      correctAnswer: 45,
      unit: 'cm',
      xpValue: 20,
      hint: 'Three quarters of 60 cm. Multiply 60 by 3, then divide by 4.',
    },
    {
      id: 'rg-q21',
      type: 'multiple-choice',
      stem: 'A pupil writes: "When light enters a denser medium it bends because the denser medium pulls it down by gravity, like a rolling ball on a slope." Which sentence is the best correction?',
      tier: 'challenge',
      options: [
        'Gravity does pull light down, but only a tiny amount, so the rolling ball model is roughly right.',
        'Light bends because it travels at a slower speed in the denser medium. The change in speed at the boundary, not gravity, is what causes the bend.',
        'Light bends because the denser medium has a stronger magnetic field at its surface.',
        'Light bends because the glass is heavier than the air above it.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'rg-mis-gravity-bends-light',
      hint: 'Gravity is far too weak on Earth to make a visible difference to a ray of light. The cause is the change in speed.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2021, Paper 1F, candidates drew the refracted ray bending away from the normal at an air to glass boundary.
    {
      id: 'rg-mis-bends-away-entering-denser',
      description:
        'Drawing the refracted ray bending away from the normal when light enters a denser medium like glass, rather than towards it.',
      triggerAnswer: 'bends-away-entering-denser',
      correction:
        'Going into a denser medium, light slows down and bends towards the normal. The angle of refraction inside the glass is smaller than the angle of incidence in air.',
      reExplanation:
        'A simple check: if the ray bent away from the normal on entering glass, the entry and exit bends would add up, not cancel, and a parallel-sided block would tilt the emergent ray sharply away. In a real lab a parallel-sided block emerges parallel to the incident ray, which only works if entry bends towards the normal and exit bends away. The rule is "denser equals slower equals bends towards the normal".',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2020, Paper 1PH0/1F, candidates measured the angle of incidence from the glass surface rather than from the normal.
    {
      id: 'rg-mis-angle-from-surface',
      description:
        'Measuring the angle of incidence and refraction from the surface of the boundary instead of from the normal.',
      triggerAnswer: 'angle-from-surface',
      correction:
        'Angles in refraction are always measured from the normal, which is the dashed line at right angles to the boundary at the point where the ray hits.',
      reExplanation:
        'If you measured from the surface, an angle of incidence of 30 degrees in the textbook would look like 60 degrees in your diagram, and "bending towards the normal" would look like "bending towards the surface". Drawing the normal first, then measuring with a protractor from that line, gives the right value every time. The KS3 convention matches the GCSE one.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2022, J259/02, candidates wrote that gravity bends light through glass and water rather than the change in speed.
    {
      id: 'rg-mis-gravity-bends-light',
      description:
        'Believing that gravity causes light to bend when entering glass or water, rather than the change in speed at the boundary.',
      triggerAnswer: 'gravity-bends-light',
      correction:
        'Light bends at a boundary because its speed changes. Gravity is far too weak on Earth to deflect light through a glass block by any measurable amount.',
      reExplanation:
        'If gravity caused the bend, a horizontal beam through a vertical block would bend downwards regardless of the angle of incidence, and a beam along the normal would also bend. In real labs a normal beam does not bend at all and the bend always lines up with the normal, not with the direction of gravity. The cause is the speed change: slower in glass, faster in air.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, Paper 2F, candidates said the straw in a glass of water is actually bent or broken at the surface, not that the image is shifted by refraction.
    {
      id: 'rg-mis-straw-actually-bent',
      description:
        'Thinking that a straw in a glass of water is actually bent at the surface, rather than that refraction shifts the apparent position of the lower part.',
      triggerAnswer: 'straw-actually-bent',
      correction:
        'The straw is straight. Light from the lower part of the straw bends as it leaves the water, so your eye sees the lower part raised compared with where it really is.',
      reExplanation:
        'You can lift the straw out and the bend disappears. The same effect happens with a coin in a teacup that just peeps over the edge when seen low, but lifts into view when the cup is filled with water. The coin has not moved; refraction at the new air to water boundary has shifted its apparent position. KS3 keeps this qualitative; GCSE puts numbers on it with Snell\'s law.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2022, Paper 1PH0/1F, candidates wrote that a parallel-sided glass block changes the direction of the emergent ray rather than just shifting it sideways.
    {
      id: 'rg-mis-block-changes-angle',
      description:
        'Believing that a parallel-sided rectangular glass block emerges the ray at a different angle from the incident ray, rather than parallel with a lateral shift.',
      triggerAnswer: 'block-changes-angle',
      correction:
        'For a parallel-sided block, the emergent ray is parallel to the incident ray. The bend on entry is cancelled by the bend on exit. The two rays differ only by a sideways (lateral) shift.',
      reExplanation:
        'The argument from symmetry: the top and bottom faces are parallel, so the angles either side of the block are mirror images. Bending in cancels bending out. Increase the thickness of the block and the lateral shift grows, but the emergent angle stays the same. This is exactly what you see in a ray-box lab with a glass block on a sheet of paper.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2020, J259/02, candidates said a parallel-sided block produces no lateral shift at all.
    {
      id: 'rg-mis-block-no-shift',
      description:
        'Claiming that a parallel-sided glass block produces no lateral shift, because the emergent ray is parallel to the incident ray.',
      triggerAnswer: 'block-no-shift',
      correction:
        'Parallel emergent ray, yes, but the ray is shifted sideways. A thicker block or a larger angle of incidence gives a larger lateral shift.',
      reExplanation:
        'Trace the ray on graph paper: the path inside the block runs at a different angle from the path in air, so by the time the ray reaches the bottom face it has moved sideways. When it emerges parallel to the original, it continues from that shifted position. The shift is small for thin blocks at small angles and becomes obvious for thick blocks or steep angles.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2019, Paper 1F, candidates wrote that all light always bends at a glass boundary, even at zero angle of incidence.
    {
      id: 'rg-mis-always-bends',
      description:
        'Believing that light always bends when it crosses into a glass block, even when the ray travels along the normal.',
      triggerAnswer: 'always-bends',
      correction:
        'A ray that hits a boundary along the normal (angle of incidence 0 degrees) keeps going in a straight line. It slows down in the glass, but there is no sideways direction for it to bend into.',
      reExplanation:
        'Refraction is about the part of the ray that is parallel to the surface. If the ray is along the normal, that parallel part is zero, so nothing bends. Try it with a ray box pointing straight down on a glass block: the spot on the bottom face sits directly under the ray box. Tilt the ray box slightly and the ray bends towards the normal, and the spot shifts.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const wavesRefractionGlassBlockZoneNodes = [wavesRefractionGlassBlock]
