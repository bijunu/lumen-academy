import type { SkillNode } from '@/types/content'

const PLANE_MIRROR_IMAGE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Image in a plane mirror: same distance behind, same size, upright, virtual</text>

    <!-- Mirror line down the centre, with shading on the back side -->
    <line x1="400" y1="70" x2="400" y2="370" stroke-width="5" />
    <text x="400" y="60" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">plane mirror</text>

    <!-- Short hatch marks on the back side of the mirror -->
    <line x1="400" y1="90" x2="420" y2="80" stroke-width="2" />
    <line x1="400" y1="120" x2="420" y2="110" stroke-width="2" />
    <line x1="400" y1="150" x2="420" y2="140" stroke-width="2" />
    <line x1="400" y1="180" x2="420" y2="170" stroke-width="2" />
    <line x1="400" y1="210" x2="420" y2="200" stroke-width="2" />
    <line x1="400" y1="240" x2="420" y2="230" stroke-width="2" />
    <line x1="400" y1="270" x2="420" y2="260" stroke-width="2" />
    <line x1="400" y1="300" x2="420" y2="290" stroke-width="2" />
    <line x1="400" y1="330" x2="420" y2="320" stroke-width="2" />

    <!-- Object: upright arrow on the left, 100 mm tall, 150 mm in front of the mirror -->
    <line x1="250" y1="320" x2="250" y2="200" stroke-width="3" />
    <polygon points="244,210 250,194 256,210" fill="currentColor" stroke="none" />
    <text x="250" y="345" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">object</text>
    <text x="250" y="360" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">0.30 m from mirror</text>

    <!-- Image: dashed upright arrow on the right, 150 mm behind the mirror -->
    <line x1="550" y1="320" x2="550" y2="200" stroke-width="3" stroke-dasharray="6,4" />
    <polygon points="544,210 550,194 556,210" fill="currentColor" stroke="none" fill-opacity="0.6" />
    <text x="550" y="345" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">virtual image</text>
    <text x="550" y="360" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">0.30 m behind mirror</text>

    <!-- Distance markers from object to mirror, and mirror to image -->
    <line x1="250" y1="380" x2="400" y2="380" stroke-width="2" />
    <polygon points="258,374 246,380 258,386" fill="currentColor" stroke="none" />
    <polygon points="392,374 404,380 392,386" fill="currentColor" stroke="none" />
    <text x="325" y="395" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">0.30 m</text>

    <line x1="400" y1="380" x2="550" y2="380" stroke-width="2" />
    <polygon points="408,374 396,380 408,386" fill="currentColor" stroke="none" />
    <polygon points="542,374 554,380 542,386" fill="currentColor" stroke="none" />
    <text x="475" y="395" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">0.30 m</text>

    <!-- Construction line from top of object across the mirror -->
    <line x1="250" y1="194" x2="550" y2="194" stroke-dasharray="3,3" stroke-width="2" />

    <!-- Notes panel on top -->
    <text x="120" y="100" font-size="13" font-weight="700" stroke="none" fill="currentColor">Image rules:</text>
    <text x="120" y="120" font-size="12" stroke="none" fill="currentColor">same size as the object</text>
    <text x="120" y="138" font-size="12" stroke="none" fill="currentColor">upright (not flipped top to bottom)</text>
    <text x="120" y="156" font-size="12" stroke="none" fill="currentColor">same distance behind</text>
    <text x="120" y="174" font-size="12" stroke="none" fill="currentColor">virtual (no light is really there)</text>

    <text x="650" y="100" font-size="13" font-weight="700" stroke="none" fill="currentColor">Virtual means:</text>
    <text x="650" y="120" font-size="12" stroke="none" fill="currentColor">light appears to come</text>
    <text x="650" y="138" font-size="12" stroke="none" fill="currentColor">from behind the mirror,</text>
    <text x="650" y="156" font-size="12" stroke="none" fill="currentColor">but no light actually</text>
    <text x="650" y="174" font-size="12" stroke="none" fill="currentColor">reaches that point.</text>
  </g>
`

const LATERAL_INVERSION_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Lateral inversion: left and right swap, top and bottom do not</text>

    <!-- Mirror line down the centre -->
    <line x1="400" y1="60" x2="400" y2="370" stroke-width="5" />
    <text x="400" y="50" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">mirror</text>

    <!-- Object word "AMBULANCE" on the left, normal orientation -->
    <text x="200" y="150" text-anchor="middle" font-size="22" font-weight="700" stroke="none" fill="currentColor">AMBULANCE</text>
    <text x="200" y="175" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">on the front of the van</text>

    <!-- Mirror image of the word: reflected (laterally inverted) on the right -->
    <text x="600" y="150" text-anchor="middle" font-size="22" font-weight="700" stroke="none" fill="currentColor" transform="scale(-1,1) translate(-1200,0)">AMBULANCE</text>
    <text x="600" y="175" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">what the driver in front reads in their rear-view mirror</text>

    <!-- Left hand on object side, right hand in mirror -->
    <text x="200" y="240" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">raise your LEFT hand</text>
    <circle cx="200" cy="280" r="22" stroke-width="2" />
    <text x="200" y="285" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">L</text>

    <text x="600" y="240" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">image raises its RIGHT hand</text>
    <circle cx="600" cy="280" r="22" stroke-width="2" />
    <text x="600" y="285" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">R</text>

    <!-- Note panel -->
    <text x="400" y="345" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Top and bottom stay the same; left and right swap.</text>
    <text x="400" y="362" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">That is why "AMBULANCE" is written reversed on the front of the van.</text>
  </g>
`

const STEP_BACK_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Step back from a mirror: the gap between you and your image doubles</text>

    <!-- Mirror in the middle -->
    <line x1="400" y1="60" x2="400" y2="360" stroke-width="5" />
    <text x="400" y="50" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">bathroom mirror</text>

    <!-- Position A: object 0.5 m in front of mirror -->
    <circle cx="320" cy="160" r="14" fill="currentColor" />
    <text x="320" y="135" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">you (start)</text>
    <text x="320" y="190" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">0.5 m from mirror</text>

    <!-- Image at A: 0.5 m behind -->
    <circle cx="480" cy="160" r="14" fill="currentColor" fill-opacity="0.4" />
    <text x="480" y="135" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">image (start)</text>
    <text x="480" y="190" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">0.5 m behind</text>

    <line x1="320" y1="210" x2="480" y2="210" stroke-width="2" />
    <polygon points="328,204 316,210 328,216" fill="currentColor" stroke="none" />
    <polygon points="472,204 484,210 472,216" fill="currentColor" stroke="none" />
    <text x="400" y="225" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">total gap 1.0 m</text>

    <!-- Position B: step back 0.5 m, now 1.0 m in front -->
    <circle cx="240" cy="290" r="14" fill="currentColor" />
    <text x="240" y="265" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">you (after stepping back 0.5 m)</text>
    <text x="240" y="320" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">1.0 m from mirror</text>

    <!-- Image at B: 1.0 m behind -->
    <circle cx="560" cy="290" r="14" fill="currentColor" fill-opacity="0.4" />
    <text x="560" y="265" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">image (after)</text>
    <text x="560" y="320" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">1.0 m behind</text>

    <line x1="240" y1="340" x2="560" y2="340" stroke-width="2" />
    <polygon points="248,334 236,340 248,346" fill="currentColor" stroke="none" />
    <polygon points="552,334 564,340 552,346" fill="currentColor" stroke="none" />
    <text x="400" y="355" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">total gap 2.0 m</text>

    <!-- Note panel -->
    <text x="80" y="80" font-size="12" font-weight="700" stroke="none" fill="currentColor">Rule:</text>
    <text x="80" y="98" font-size="12" stroke="none" fill="currentColor">image distance behind</text>
    <text x="80" y="113" font-size="12" stroke="none" fill="currentColor">equals object distance</text>
    <text x="80" y="128" font-size="12" stroke="none" fill="currentColor">in front. Step back 0.5 m</text>
    <text x="80" y="143" font-size="12" stroke="none" fill="currentColor">and the image also moves</text>
    <text x="80" y="158" font-size="12" stroke="none" fill="currentColor">0.5 m further back, so the</text>
    <text x="80" y="173" font-size="12" stroke="none" fill="currentColor">gap grows by 1.0 m.</text>
  </g>
`

export const wavesPlaneMirrorImages: SkillNode = {
  id: 'physics-waves-plane-mirror-images',
  title: 'Plane Mirror Images',
  description:
    'Work out where the image of an object sits in a flat (plane) mirror, such as a bathroom mirror or a wing mirror on a Mini. The image is virtual, which means light only appears to come from behind the mirror; no light actually reaches that point. The image is upright (the right way up), the same size as the object, and laterally inverted, so left and right swap over. That is why the word "AMBULANCE" is painted reversed on the front of an emergency vehicle, so a driver in front can read it the right way round in their rear-view mirror. The image sits the same distance behind the mirror as the object sits in front, so if you stand 0.5 m from a mirror your reflection is 0.5 m behind the glass and the total gap is 1.0 m. By the end of this node, you can state the four image properties, work out distances, and decide which orientation a mirrored word will show.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-waves',
  zoneName: 'Waves',
  tier: 'confident',
  prerequisites: ['physics-waves-law-of-reflection'],
  curriculum: {
    ks3Objective:
      'Specular reflection at a surface; image formation by reflection.',
    awardingBodies: {
      aqa: '4.6.2.2 Reflection; properties of images in a plane mirror, virtual, upright, same size, laterally inverted (GCSE Physics 8463)',
      edexcel:
        'Topic 5.1 Reflection; ray diagrams for plane mirrors; image properties (GCSE Physics 1PH0)',
      ocr: 'P5.3 Light; image formation in a plane mirror, virtual image behind the mirror (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'pm-scene-image-rules',
      title: 'Where the Image Sits in a Plane Mirror',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see the four properties of an image in a plane mirror: virtual, upright, same size, and the same distance behind the mirror.',
      data: {
        viewBox: '0 0 800 400',
        svg: PLANE_MIRROR_IMAGE_SVG,
        hotspots: [
          {
            id: 'pm-s1-object',
            x: 31,
            y: 70,
            label: 'Object in front of the mirror',
            description:
              'The upright solid arrow is the object, sitting 0.30 m in front of the mirror line. In the lab you might use a small lit candle, a pin, or a printed letter as the object.',
          },
          {
            id: 'pm-s1-mirror',
            x: 50,
            y: 18,
            label: 'The mirror line',
            description:
              'The thick vertical line is the plane (flat) mirror, seen from above. The short hatch marks on the right show the silvered back; only the left-hand surface reflects light.',
          },
          {
            id: 'pm-s1-image',
            x: 69,
            y: 70,
            label: 'Virtual image behind the mirror',
            description:
              'The dashed arrow on the right is the image. It is drawn dashed because it is virtual: light appears to come from this point, but no light actually travels behind the mirror. Your eyes are tricked into seeing the image there.',
          },
          {
            id: 'pm-s1-distances',
            x: 50,
            y: 95,
            label: 'Same distance, in front and behind',
            description:
              'The object is 0.30 m in front of the mirror, and the image is 0.30 m behind. The total separation between an object and its image in a plane mirror is twice the object-to-mirror distance, so here it is 0.60 m.',
          },
          {
            id: 'pm-s1-properties',
            x: 15,
            y: 25,
            label: 'Four image properties',
            description:
              'The image in a plane mirror is virtual (not real light), upright (the right way up), the same size as the object, and laterally inverted (left and right swap). It is never magnified or shrunk by a flat mirror.',
          },
        ],
      },
    },
    {
      id: 'pm-scene-lateral-inversion',
      title: 'AMBULANCE Lettering and Lateral Inversion',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how left and right swap in a plane mirror, and why "AMBULANCE" is painted in reverse on the front of the van.',
      data: {
        viewBox: '0 0 800 400',
        svg: LATERAL_INVERSION_SVG,
        hotspots: [
          {
            id: 'pm-s2-word',
            x: 25,
            y: 40,
            label: 'The painted word',
            description:
              'On the front of a UK ambulance the word AMBULANCE is painted as a mirror image. Reading it directly looks odd, but that is the whole point.',
          },
          {
            id: 'pm-s2-mirrored',
            x: 75,
            y: 40,
            label: 'How a driver sees it',
            description:
              'A driver looking in their rear-view mirror sees the painted word reflected. The lateral inversion of the mirror reverses the already-reversed letters, so the word reads as AMBULANCE the right way round.',
          },
          {
            id: 'pm-s2-hand',
            x: 25,
            y: 72,
            label: 'Raise your left hand',
            description:
              'Stand in front of a bathroom mirror and raise your left hand. The image facing you appears to raise its right hand. Left and right swap, but top and bottom do not.',
          },
          {
            id: 'pm-s2-mirror-hand',
            x: 75,
            y: 72,
            label: 'The image raises its right',
            description:
              'The L marker on you becomes an R on the image side. The vertical direction stays the same, so a hat on the top of your head still appears as a hat on the top of the image, not at the bottom.',
          },
          {
            id: 'pm-s2-rule',
            x: 50,
            y: 88,
            label: 'Top and bottom do not flip',
            description:
              'Lateral inversion only swaps left and right. The image is still upright, so a letter like X or T (which look the same after a left-right flip) will look unchanged in a plane mirror.',
          },
        ],
      },
    },
    {
      id: 'pm-scene-step-back',
      title: 'Stepping Back: How the Image Moves',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to follow how the image moves when you step away from a bathroom mirror.',
      data: {
        viewBox: '0 0 800 400',
        svg: STEP_BACK_SVG,
        hotspots: [
          {
            id: 'pm-s3-start',
            x: 40,
            y: 40,
            label: 'Start: 0.5 m from the mirror',
            description:
              'You stand 0.5 m from a bathroom mirror. Your image sits 0.5 m behind the glass, and the gap between you and your image is 0.5 m plus 0.5 m, which is 1.0 m.',
          },
          {
            id: 'pm-s3-image-start',
            x: 60,
            y: 40,
            label: 'Image at the start',
            description:
              'The image is the same height as you, upright, and laterally inverted. It always sits along the line at right angles to the mirror that runs from you to your reflection.',
          },
          {
            id: 'pm-s3-step',
            x: 30,
            y: 73,
            label: 'Step back 0.5 m',
            description:
              'Now you are 1.0 m from the mirror. The object-to-mirror distance has grown by 0.5 m, so the image-to-mirror distance also grows by 0.5 m. The image is now 1.0 m behind the mirror.',
          },
          {
            id: 'pm-s3-image-end',
            x: 70,
            y: 73,
            label: 'New image distance',
            description:
              'The image moves back 0.5 m as well. The total gap between you and the image is now 1.0 m plus 1.0 m, which is 2.0 m. The gap has doubled even though you only moved 0.5 m.',
          },
          {
            id: 'pm-s3-rule',
            x: 12,
            y: 30,
            label: 'Rule: gap = 2 x object distance',
            description:
              'The total separation between an object and its image in a plane mirror is always twice the object-to-mirror distance. Move x metres back and the gap grows by 2x metres.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'pm-worked-1',
      title: 'Where is the image of a candle 0.5 m from a bathroom mirror?',
      steps: [
        {
          explanation:
            'Set out the situation. A lit candle sits 0.5 m in front of a plane bathroom mirror. We want to say where the image is and what it looks like.',
        },
        {
          explanation: 'Write what you know.',
          maths: 'object distance from mirror = 0.5 m',
        },
        {
          explanation:
            'Apply the plane-mirror rule. The image of an object in a plane mirror sits the same distance behind the mirror as the object sits in front.',
          maths: 'image distance behind mirror = object distance in front = 0.5 m',
        },
        {
          explanation:
            'Work out the total separation between the candle and its image.',
          maths: 'total separation = 0.5 + 0.5 = 1.0 m',
        },
        {
          explanation:
            'State the image properties. The image is virtual (no light is really behind the mirror), upright, the same size as the candle, and laterally inverted, so a flame leaning to the left in front of the mirror appears to lean to the right in the image.',
        },
        {
          explanation:
            'Final answer. The image sits 0.5 m behind the mirror, 1.0 m from the candle, upright, the same size, virtual, and laterally inverted.',
        },
      ],
    },
    {
      id: 'pm-worked-2',
      title: 'What does "AMBULANCE" look like in a rear-view mirror?',
      steps: [
        {
          explanation:
            'Set out the situation. The front of a UK ambulance has the word AMBULANCE painted on it. The painters paint the letters as a mirror image, so direct viewing reads as ECNALUBMA. We want what the driver in front sees in the rear-view mirror.',
        },
        {
          explanation:
            'Identify the property in play. Plane mirrors produce lateral inversion: left and right swap, top and bottom stay the same.',
        },
        {
          explanation:
            'The painted word on the van is already reversed left to right (so it looks like ECNALUBMA when read directly).',
        },
        {
          explanation:
            'The rear-view mirror reflects the painted word, swapping left and right a second time. Two swaps put the letters back where they started.',
        },
        {
          explanation:
            'Final answer. The driver in front reads AMBULANCE the right way round. The image is virtual, upright, and the same size as the painted word.',
        },
      ],
    },
    {
      id: 'pm-worked-3',
      title: 'Step back 20 cm from a wing mirror: how far does the image move?',
      steps: [
        {
          explanation:
            'Set out the situation. You start 30 cm from a plane wing mirror on a Mini, then step back by 20 cm. We want to know how the image moves.',
        },
        {
          explanation: 'Convert to metres so the units match.',
          maths: 'start: object 0.30 m from mirror; step back 0.20 m',
        },
        {
          explanation:
            'Image distance at the start. The image is the same distance behind as the object is in front.',
          maths: 'start image distance behind = 0.30 m; total gap = 0.60 m',
        },
        {
          explanation:
            'After stepping back, the object is 0.30 + 0.20 = 0.50 m from the mirror.',
          maths: 'new object distance = 0.50 m',
        },
        {
          explanation:
            'The image distance behind matches the new object distance.',
          maths: 'new image distance behind = 0.50 m; new total gap = 1.00 m',
        },
        {
          explanation:
            'Final answer. The image moves back by 0.20 m (the same as your step). The total gap between you and the image grows by 0.40 m, which is twice the step. You moved 0.20 m; the gap grew by 0.40 m.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pm-q1',
      type: 'multiple-choice',
      stem: 'A pupil stands 0.8 m in front of a plane bathroom mirror. How far behind the mirror does the image appear to be?',
      tier: 'core',
      options: [
        '0.4 m',
        '0.8 m',
        '1.6 m',
        '0 m, the image sits on the mirror surface',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pm-mis-image-inside-glass',
      hint: 'The image of an object in a plane mirror sits the same distance behind the mirror as the object sits in front.',
    },
    {
      id: 'pm-q2',
      type: 'multiple-choice',
      stem: 'Which set of words best describes the image of an object in a plane mirror?',
      tier: 'core',
      options: [
        'Virtual, upright, same size, behind the mirror.',
        'Real, upside down, magnified, on the mirror.',
        'Real, upright, smaller, in front of the mirror.',
        'Virtual, upside down, smaller, behind the mirror.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pm-mis-on-surface',
      hint: 'Four words: virtual, upright, same size, same distance behind.',
    },
    {
      id: 'pm-q3',
      type: 'numeric-entry',
      stem: 'A candle stands 0.4 m in front of a plane mirror. What is the total separation, in metres, between the candle and its image?',
      tier: 'core',
      correctAnswer: 0.8,
      unit: 'm',
      xpValue: 10,
      hint: 'The image is the same distance behind as the object is in front, so the total gap is 0.4 + 0.4.',
    },
    {
      id: 'pm-q4',
      type: 'multiple-choice',
      stem: 'A pupil raises their left hand in front of a plane bathroom mirror. What does the image appear to do?',
      tier: 'core',
      options: [
        'Raise its left hand on the same side as the pupil.',
        'Raise its right hand (left and right swap).',
        'Stand upside down with its left hand raised.',
        'Stay still, because mirrors do not move.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pm-mis-vertical-flip',
      hint: 'A plane mirror swaps left and right, not top and bottom.',
    },
    {
      id: 'pm-q5',
      type: 'multiple-choice',
      stem: 'Why is the word "AMBULANCE" painted in mirror writing on the front of a UK emergency vehicle?',
      tier: 'core',
      options: [
        'So pedestrians cannot read it.',
        'Because mirrors flip writing upside down.',
        'Because mirrors make text bigger.',
        'So a driver in front reads it the right way round in their rear-view mirror, because the mirror reverses left and right.',
      ],
      correctIndex: 3,
      xpValue: 10,
      hint: 'The rear-view mirror laterally inverts what it shows, so a pre-reversed word becomes readable.',
    },
    {
      id: 'pm-q6',
      type: 'numeric-entry',
      stem: 'A pupil stands 1.2 m in front of a plane mirror. How far, in metres, is their image from the surface of the mirror?',
      tier: 'core',
      correctAnswer: 1.2,
      unit: 'm',
      xpValue: 10,
      hint: 'Image distance behind = object distance in front.',
    },
    {
      id: 'pm-q7',
      type: 'multiple-choice',
      stem: 'Which statement about the size of an image in a plane mirror is correct?',
      tier: 'confident',
      options: [
        'The image is always smaller than the object.',
        'The image grows as you walk towards the mirror.',
        'The image is always the same size as the object.',
        'The image shrinks as you walk away from the mirror.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pm-mis-size-with-distance',
      hint: 'A plane mirror never magnifies or shrinks. The image only appears smaller because it is further from your eyes.',
    },
    {
      id: 'pm-q8',
      type: 'numeric-entry',
      stem: 'A pupil stands 0.5 m in front of a bathroom mirror, then steps back another 0.5 m. How far, in metres, is their image now from the surface of the mirror?',
      tier: 'confident',
      correctAnswer: 1.0,
      unit: 'm',
      xpValue: 15,
      misconceptionId: 'pm-mis-image-step-doubled',
      hint: 'After stepping back, the new object distance is 0.5 + 0.5 = 1.0 m. The image sits the same distance behind.',
    },
    {
      id: 'pm-q9',
      type: 'numeric-entry',
      stem: 'A driver sits 0.6 m from a flat wing mirror on a Mini. What is the total separation, in metres, between the driver and their image in the mirror?',
      tier: 'confident',
      correctAnswer: 1.2,
      unit: 'm',
      xpValue: 15,
      hint: 'Total separation = object distance in front + image distance behind = 0.6 + 0.6.',
    },
    {
      id: 'pm-q10',
      type: 'multiple-choice',
      stem: 'Why is the image in a plane mirror called "virtual"?',
      tier: 'confident',
      options: [
        'Because light only appears to come from behind the mirror; no light actually reaches that point.',
        'Because the mirror creates the image inside its glass.',
        'Because the image is digital, like on a screen.',
        'Because the image is too small to see clearly.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'pm-mis-real-vs-virtual',
      hint: 'Virtual means the light is not really there. You cannot catch the image on a piece of card placed behind the mirror.',
    },
    {
      id: 'pm-q11',
      type: 'multiple-choice',
      stem: 'A pupil stands 0.30 m from a plane mirror, then steps back 0.20 m. By how many metres does the total separation between the pupil and their image increase?',
      tier: 'confident',
      options: [
        '0.20 m, the same as the step back',
        '0.40 m, because both the object and the image move back 0.20 m',
        '0.10 m, half of the step back',
        '0.50 m, the new object distance',
      ],
      correctIndex: 1,
      xpValue: 15,
      hint: 'Both the object and the image move back by 0.20 m, so the gap grows by 2 x 0.20.',
    },
    {
      id: 'pm-q12',
      type: 'drag-order',
      stem: 'Put the steps in order for working out the total separation between an object and its image in a plane mirror.',
      tier: 'confident',
      items: [
        'State the total separation: in metres, with the unit.',
        'Apply the rule: image distance behind the mirror equals object distance in front.',
        'Measure or read off the distance from the object to the surface of the mirror.',
        'Add the object distance and the image distance to get the total gap.',
      ],
      correctOrder: [2, 1, 3, 0],
      xpValue: 15,
      hint: 'First read the object distance, then apply the rule, then add, then state the answer.',
    },
    {
      id: 'pm-q13',
      type: 'spot-misconception',
      stem: 'Sam stands 1.0 m from a bathroom mirror and looks at the image.',
      tier: 'confident',
      statements: [
        {
          text: 'Sam says the image sits right at the surface of the mirror, because that is where the silvered glass is and that is where the light bounces off.',
          isMisconception: true,
        },
        {
          text: 'Sam says the image sits 1.0 m behind the surface of the mirror, because the brain locates the image where the reflected rays appear to come from.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pm-mis-on-surface',
    },
    {
      id: 'pm-q14',
      type: 'multiple-choice',
      stem: 'Which property of a plane mirror image stays the same as you move further away from the mirror?',
      tier: 'confident',
      options: [
        'The distance of the image from the mirror.',
        'The distance from the image to your eyes.',
        'The actual size of the image: it stays the same as the object.',
        'The brightness of the image, as seen by your eyes.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pm-mis-size-with-distance',
      hint: 'The image is always the same size as the object in a plane mirror. The distances change, but the size does not.',
    },
    {
      id: 'pm-q15',
      type: 'numeric-entry',
      stem: 'A pin is held 8.0 cm in front of a small plane mirror in a lab tray. How far, in cm, is the pin from its image?',
      tier: 'challenge',
      correctAnswer: 16,
      unit: 'cm',
      xpValue: 20,
      hint: 'The image is 8.0 cm behind, so the total separation is 8.0 + 8.0.',
    },
    {
      id: 'pm-q16',
      type: 'multiple-choice',
      stem: 'A pupil writes the capital letter "B" on a card and holds it up to a plane mirror. Which of these best describes the image?',
      tier: 'challenge',
      options: [
        'A "B" the right way round, because plane mirrors do not change letters.',
        'A "B" rotated upside down, because the mirror flips top to bottom.',
        'No image is formed; the card blocks the light.',
        'A "B" reversed left to right, so the curved bumps face the other way (it looks like a backwards B).',
      ],
      correctIndex: 3,
      xpValue: 20,
      misconceptionId: 'pm-mis-vertical-flip',
      hint: 'Lateral inversion swaps left and right. The bumps of the B move to the other side.',
    },
    {
      id: 'pm-q17',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil stands 0.4 m in front of a bathroom mirror, then walks back 0.3 m. They want the new total separation between themselves and their image.',
      tier: 'challenge',
      steps: [
        'Write the data: starting object distance = 0.4 m; pupil steps back 0.3 m.',
        'Find the new object distance from the mirror: 0.4 + 0.3 = 0.7 m.',
        'Apply the plane-mirror rule: image distance behind the mirror equals object distance in front. New image distance = 0.7 m.',
        null,
        'State the answer with a unit: the new total separation is 1.4 m, which is double the new object distance.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Add the object and image distances to get the total separation: 0.7 + 0.7 = 1.4 m.',
      xpValue: 20,
    },
    {
      id: 'pm-q18',
      type: 'numeric-entry',
      stem: 'A pupil stands 0.50 m from a plane mirror, then steps back so the new total gap between them and their image is 1.80 m. How far, in metres, is the pupil from the mirror after stepping back?',
      tier: 'challenge',
      correctAnswer: 0.9,
      unit: 'm',
      xpValue: 20,
      hint: 'The total gap equals twice the object-to-mirror distance, so the new object distance is 1.80 / 2.',
    },
    {
      id: 'pm-q19',
      type: 'multiple-choice',
      stem: 'Why does a plane mirror appear to swap left and right but not top and bottom?',
      tier: 'challenge',
      options: [
        'Because gravity stops the image flipping upside down.',
        'Because the mirror surface is vertical, so it reverses the direction perpendicular to itself (front to back), and our brains interpret that as a left-right swap when we face it.',
        'Because mirrors only work on horizontal directions.',
        'Because the silver coating is only on the left half of the glass.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'pm-mis-vertical-flip',
      hint: 'The mirror really reverses the direction that points away from its surface. When you face the mirror, that is the front-to-back axis, which the brain reads as a left-right swap.',
    },
    {
      id: 'pm-q20',
      type: 'numeric-entry',
      stem: 'A driver in a Mini sits 0.40 m from their plane wing mirror. By how many metres does the total separation between the driver and their image change if the driver moves their head 0.10 m closer to the mirror?',
      tier: 'challenge',
      correctAnswer: 0.2,
      unit: 'm',
      xpValue: 20,
      hint: 'Both the object and the image move 0.10 m closer to the mirror, so the gap shrinks by 2 x 0.10 m.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2018, Paper 1, candidates placed the image of an object on the mirror surface rather than behind it.
    {
      id: 'pm-mis-on-surface',
      description:
        'Believing the image in a plane mirror sits at the surface of the mirror, where the silvered glass is, rather than behind it.',
      triggerAnswer: 'image-on-surface',
      correction:
        'The image sits the same distance behind the mirror as the object sits in front. The silvered surface is where light reflects, but the brain locates the image where the reflected rays appear to come from.',
      reExplanation:
        'Stand 1.0 m from a bathroom mirror and look at the image of a clock on the wall behind you. Your brain places the image of the clock 1.0 m + (clock distance behind you) behind the glass, not at the glass. The image is virtual: light only appears to come from that point, so you cannot catch it on a screen placed behind the mirror.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2021, Paper 1, candidates claimed plane mirror images were upside down (vertical flip) rather than laterally inverted.
    {
      id: 'pm-mis-vertical-flip',
      description:
        'Claiming the image in a plane mirror is upside down (vertical flip), confusing lateral inversion with a top-to-bottom flip.',
      triggerAnswer: 'vertical-flip',
      correction:
        'A plane mirror swaps left and right, not top and bottom. The image is upright. A hat on your head still appears on the head of the image.',
      reExplanation:
        'Hold up your right hand in front of a bathroom mirror. The image appears to raise its left hand, so left and right have swapped. Your head still appears at the top of the image and your shoes at the bottom, so top and bottom have not swapped. This is lateral inversion, and it is the only swap a plane mirror makes.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2020, J259/02, candidates wrote that an image in a plane mirror shrinks as the object moves further from the mirror.
    {
      id: 'pm-mis-size-with-distance',
      description:
        'Believing the image in a plane mirror gets smaller (or larger) as the object moves further from (or closer to) the mirror.',
      triggerAnswer: 'image-size-changes',
      correction:
        'A plane mirror never changes the size of the image. The image is always the same size as the object. It only appears smaller to your eyes because it is now further away from them.',
      reExplanation:
        'Walk back from a bathroom mirror and the reflection of your face still has the same width as your real face: the image is the same size. What changes is how big the image looks in your eye, because it is now further from your eye. Curved mirrors (the shaving mirror or the inside of a spoon) do change size, but a flat, plane mirror does not.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2020, Paper 1F Q5, candidates described the plane mirror image as a "real image", confusing real and virtual.
    {
      id: 'pm-mis-real-vs-virtual',
      description:
        'Calling the image in a plane mirror a "real" image, missing that it cannot be projected onto a screen because no light actually arrives at the image point.',
      triggerAnswer: 'real-not-virtual',
      correction:
        'The image in a plane mirror is virtual, not real. Real images can be caught on a screen because light rays actually meet there; virtual images cannot, because the rays only appear to come from behind the mirror.',
      reExplanation:
        'Put a piece of white card behind the bathroom mirror, in the position where the image looks like it sits. Nothing appears on the card, because no light reaches that point. Now compare with the image of a torch on a lens, projected on a screen in a darkened room: that one is real and shows up because the rays meet on the screen. Plane mirror images always fail the screen test, which is the definition of virtual.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2019, Paper 1, candidates miscounted how the image moves when an object steps back from a plane mirror, doubling the step rather than matching it.
    {
      id: 'pm-mis-image-step-doubled',
      description:
        'Believing that when an object steps back x metres from a plane mirror, its image moves back 2x metres, instead of the same x metres.',
      triggerAnswer: 'image-step-doubled',
      correction:
        'When the object moves back x metres, the image also moves back x metres. It is the total gap between object and image that grows by 2x.',
      reExplanation:
        'Start 0.5 m from a mirror, with the image 0.5 m behind: total gap is 1.0 m. Step back 0.3 m. The new object distance is 0.8 m, so the new image distance is also 0.8 m. The image has moved 0.3 m, the same as your step. The total gap is now 1.6 m, which is 0.6 m more, exactly twice your step. Do not double the image movement; double the gap change.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2017, Paper 1F, candidates explained the image of a plane mirror as sitting "inside the glass" rather than behind the silvered back.
    {
      id: 'pm-mis-image-inside-glass',
      description:
        'Believing the image in a plane mirror is created inside the glass, rather than appearing to come from a point behind the silvered surface.',
      triggerAnswer: 'image-inside-glass',
      correction:
        'The image is not inside the glass. It appears to come from behind the mirror, the same distance behind as the object is in front.',
      reExplanation:
        'A bathroom mirror is thin (a few millimetres). If the image really was inside the glass, your reflection would always be a few millimetres behind the surface, no matter how far back you stand. Try it: stand 1.0 m from the mirror and your image is 1.0 m behind. Stand 2.0 m back and it is 2.0 m behind. The image position depends on object distance, not on the thickness of the glass.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const wavesPlaneMirrorImagesZoneNodes = [wavesPlaneMirrorImages]
