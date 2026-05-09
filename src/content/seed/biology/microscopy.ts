import type { SkillNode, Zone } from '@/types/content'

const microscopePartsSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="28" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">A school light microscope</text>
  <rect x="240" y="60" width="80" height="44" rx="6" fill="#374151" stroke="#111827" stroke-width="2" />
  <rect x="276" y="44" width="14" height="20" fill="#374151" stroke="#111827" stroke-width="2" />
  <rect x="220" y="104" width="120" height="60" rx="6" fill="#1F2937" stroke="#0F172A" stroke-width="2" />
  <circle cx="234" cy="170" r="14" fill="#6B7280" stroke="#111827" stroke-width="2" />
  <circle cx="266" cy="170" r="14" fill="#6B7280" stroke="#111827" stroke-width="2" />
  <circle cx="298" cy="170" r="14" fill="#6B7280" stroke="#111827" stroke-width="2" />
  <circle cx="330" cy="170" r="14" fill="#6B7280" stroke="#111827" stroke-width="2" />
  <rect x="222" y="184" width="116" height="14" rx="2" fill="#374151" stroke="#111827" stroke-width="2" />
  <rect x="120" y="200" width="320" height="20" rx="2" fill="#1F2937" stroke="#0F172A" stroke-width="2" />
  <rect x="240" y="206" width="80" height="8" fill="#FCD34D" stroke="#92400E" stroke-width="2" />
  <rect x="180" y="240" width="240" height="80" rx="8" fill="#374151" stroke="#111827" stroke-width="2" />
  <circle cx="220" cy="280" r="14" fill="#6B7280" stroke="#111827" stroke-width="2" />
  <circle cx="220" cy="280" r="6" fill="#9CA3AF" />
  <circle cx="380" cy="280" r="22" fill="#6B7280" stroke="#111827" stroke-width="2" />
  <circle cx="380" cy="280" r="10" fill="#9CA3AF" />
  <rect x="160" y="320" width="280" height="50" rx="8" fill="#1F2937" stroke="#0F172A" stroke-width="2" />
  <rect x="280" y="370" width="40" height="14" fill="#374151" stroke="#111827" stroke-width="2" />
  <rect x="270" y="384" width="60" height="10" fill="#1F2937" stroke="#0F172A" stroke-width="2" />
  <line x1="60" y1="320" x2="160" y2="345" stroke="#111827" stroke-width="2" />
</svg>
`.trim()

const slidePrepSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="30" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">Setting up a slide</text>
  <rect x="40" y="80" width="160" height="100" rx="6" fill="#FEF3C7" stroke="#92400E" stroke-width="2" />
  <text x="120" y="200" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Step 1</text>
  <text x="120" y="220" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Glass slide on the bench</text>
  <rect x="220" y="80" width="160" height="100" rx="6" fill="#FEF3C7" stroke="#92400E" stroke-width="2" />
  <ellipse cx="300" cy="130" rx="22" ry="10" fill="#86EFAC" stroke="#14532D" stroke-width="2" />
  <line x1="296" y1="120" x2="296" y2="100" stroke="#3B82F6" stroke-width="2" />
  <text x="300" y="200" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Step 2</text>
  <text x="300" y="220" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Add specimen and a drop of water</text>
  <rect x="400" y="80" width="160" height="100" rx="6" fill="#FEF3C7" stroke="#92400E" stroke-width="2" />
  <ellipse cx="480" cy="130" rx="22" ry="10" fill="#86EFAC" stroke="#14532D" stroke-width="2" />
  <rect x="450" y="118" width="60" height="22" fill="none" stroke="#1D4ED8" stroke-width="2" />
  <text x="480" y="200" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Step 3</text>
  <text x="480" y="220" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Lower a coverslip on top</text>
  <rect x="40" y="240" width="160" height="100" rx="6" fill="#DCFCE7" stroke="#15803D" stroke-width="2" />
  <text x="120" y="294" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Step 4: clip onto the stage</text>
  <text x="120" y="314" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">under the lowest objective</text>
  <rect x="220" y="240" width="160" height="100" rx="6" fill="#DCFCE7" stroke="#15803D" stroke-width="2" />
  <text x="300" y="294" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Step 5: focus with the</text>
  <text x="300" y="314" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">coarse, then the fine knob</text>
  <rect x="400" y="240" width="160" height="100" rx="6" fill="#DCFCE7" stroke="#15803D" stroke-width="2" />
  <text x="480" y="294" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Step 6: switch to a higher</text>
  <text x="480" y="314" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">objective and refocus</text>
</svg>
`.trim()

const lensCarouselSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="28" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">Three objective lenses on the nosepiece</text>
  <circle cx="300" cy="200" r="100" fill="#374151" stroke="#111827" stroke-width="3" />
  <circle cx="300" cy="200" r="22" fill="#6B7280" stroke="#111827" stroke-width="2" />
  <rect x="200" y="120" width="60" height="80" rx="6" fill="#9CA3AF" stroke="#111827" stroke-width="2" />
  <text x="230" y="170" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#1F2937">x4</text>
  <rect x="270" y="80" width="60" height="80" rx="6" fill="#9CA3AF" stroke="#111827" stroke-width="2" />
  <text x="300" y="130" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#1F2937">x10</text>
  <rect x="340" y="120" width="60" height="80" rx="6" fill="#9CA3AF" stroke="#111827" stroke-width="2" />
  <text x="370" y="170" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#1F2937">x40</text>
  <text x="300" y="340" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">Start with the lowest power lens, then turn the nosepiece to a higher one.</text>
</svg>
`.trim()

export const lightMicroscope: SkillNode = {
  id: 'biology-microscopy-light-microscope',
  title: 'The Light Microscope',
  description:
    'Learn the parts of a school light microscope, what each part does, and the steps for setting up a slide so a specimen comes into focus first time. The microscope is the doorway to seeing real cells, so the routine matters as much as the labels.',
  subject: 'biology',
  realm: 'vitalia',
  zoneId: 'biology-microscopy',
  zoneName: 'Microscopy',
  tier: 'core',
  prerequisites: ['biology-cells-animal-cell'],
  curriculum: {
    ks3Objective:
      'Cells as the fundamental unit of living organisms, including how to observe, interpret and record cell structure using a light microscope.',
    awardingBodies: {
      aqa: 'Required practical 1: Microscopy (GCSE Biology 8461). Use a light microscope to observe, draw and label a selection of plant and animal cells.',
      edexcel: 'CB1d Microscopy (GCSE Biology 1BI0, Topic 1). Use a light microscope to observe and record plant and animal cells.',
      ocr: 'PAG B1 Microscopy (GCSE Biology A J247, B1.1.3). Use a light microscope to observe biological specimens and produce labelled scientific drawings.',
    },
  },
  scenes: [
    {
      id: 'lm-scene-parts',
      title: 'Parts of the Light Microscope',
      type: 'labelled-diagram',
      instructions:
        'Click each part of the microscope to read its name and the job it does.',
      data: {
        svg: microscopePartsSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'lm-hs-eyepiece',
            x: 47,
            y: 13,
            label: 'Eyepiece lens',
            description:
              'The lens at the top, where you look in. School eyepieces are usually x10.',
          },
          {
            id: 'lm-hs-body',
            x: 47,
            y: 33,
            label: 'Body tube',
            description:
              'The tube that holds the lenses in line with the slide.',
          },
          {
            id: 'lm-hs-objectives',
            x: 47,
            y: 44,
            label: 'Objective lenses',
            description:
              'Three or four lenses on a turning nosepiece. Choose one by clicking it into place above the slide. Common school lenses are x4, x10, and x40.',
          },
          {
            id: 'lm-hs-stage',
            x: 47,
            y: 53,
            label: 'Stage',
            description:
              'The flat shelf where the slide rests. Two clips hold the slide in place.',
          },
          {
            id: 'lm-hs-coarse',
            x: 38,
            y: 70,
            label: 'Coarse focus knob',
            description:
              'Large knob that moves the stage up or down a lot. Use it first, with the lowest power objective.',
          },
          {
            id: 'lm-hs-fine',
            x: 63,
            y: 70,
            label: 'Fine focus knob',
            description:
              'Smaller knob that makes tiny changes to focus. Use it last, once the image is roughly clear.',
          },
          {
            id: 'lm-hs-mirror',
            x: 50,
            y: 92,
            label: 'Mirror or built-in light',
            description:
              'Reflects daylight up through the slide, or shines an electric bulb up through it.',
          },
        ],
      },
    },
    {
      id: 'lm-scene-slide-prep',
      title: 'Setting Up a Slide',
      type: 'labelled-diagram',
      instructions:
        'Click each step to read what to do, in order from glass slide to focused view.',
      data: {
        svg: slidePrepSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'lm-prep-1',
            x: 20,
            y: 32,
            label: 'Step 1',
            description:
              'Place a clean glass slide flat on the bench in front of you.',
          },
          {
            id: 'lm-prep-2',
            x: 50,
            y: 32,
            label: 'Step 2',
            description:
              'Add the specimen and a drop of water with a pipette. The water keeps the cells from drying out.',
          },
          {
            id: 'lm-prep-3',
            x: 80,
            y: 32,
            label: 'Step 3',
            description:
              'Lower a coverslip from one edge so no air bubbles are trapped under the glass.',
          },
          {
            id: 'lm-prep-4',
            x: 20,
            y: 72,
            label: 'Step 4',
            description:
              'Set the slide on the stage. Hold it under the clips with the lowest power objective in place.',
          },
          {
            id: 'lm-prep-5',
            x: 50,
            y: 72,
            label: 'Step 5',
            description:
              'Look in the eyepiece and turn the coarse knob until the cells come into rough focus. Then use the fine knob.',
          },
          {
            id: 'lm-prep-6',
            x: 80,
            y: 72,
            label: 'Step 6',
            description:
              'Turn the nosepiece to a higher objective and refocus with only the fine knob.',
          },
        ],
      },
    },
    {
      id: 'lm-scene-lenses',
      title: 'Choosing an Objective',
      type: 'labelled-diagram',
      instructions:
        'Click each objective to read when to choose it.',
      data: {
        svg: lensCarouselSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'lm-lens-x4',
            x: 38,
            y: 40,
            label: 'x4 objective',
            description:
              'Lowest power. Choose this first to find the specimen and centre it under the lens.',
          },
          {
            id: 'lm-lens-x10',
            x: 50,
            y: 28,
            label: 'x10 objective',
            description:
              'Medium power. Use after the specimen is centred for a closer look at groups of cells.',
          },
          {
            id: 'lm-lens-x40',
            x: 62,
            y: 40,
            label: 'x40 objective',
            description:
              'Highest school power. Use last, to look at one cell in detail. Adjust focus with the fine knob only.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'lm-worked-1',
      title: 'Setting up a slide of onion cells from start to focus',
      steps: [
        {
          explanation:
            'A pupil is given a small piece of onion epidermis and asked to focus on it under a school light microscope.',
        },
        {
          explanation:
            'Step 1: place a clean glass slide flat on the bench. Add one drop of water in the centre with a pipette.',
        },
        {
          explanation:
            'Step 2: peel a thin layer of onion epidermis with tweezers and lay it on the water drop.',
        },
        {
          explanation:
            'Step 3: lower a coverslip from one edge using a mounted needle, so no air bubbles are trapped underneath.',
        },
        {
          explanation:
            'Step 4: set the slide on the stage. Hold it under the two clips with the x4 objective swung into place.',
        },
        {
          explanation:
            'Step 5: look down the eyepiece and turn the coarse focus knob until the rows of onion cells come into rough focus. Use the fine knob to sharpen.',
        },
        {
          explanation:
            'Step 6: turn the nosepiece to the x10 objective and refocus with the fine knob alone. The cells now fill more of the field of view.',
        },
      ],
    },
    {
      id: 'lm-worked-2',
      title: 'Diagnosing a fuzzy image',
      steps: [
        {
          explanation:
            'A pupil sees a blurry blob through the eyepiece on the x40 objective. They cannot get the cells into focus by turning the fine knob.',
        },
        {
          explanation:
            'First check: is there enough light? Look in the eyepiece while turning the mirror or built-in light. If the field of view is dark, no image will sharpen.',
        },
        {
          explanation:
            'Second check: is the slide on the stage the right way up? The cells must sit on top of the glass, with the coverslip facing the lens.',
        },
        {
          explanation:
            'Third check: did the pupil start on the highest objective? They should swing back to x4, find the specimen, then move up to x10 and only then to x40.',
        },
        {
          explanation:
            'Once the image is rough at x4 and centred, swap to x40 and use the fine focus knob only. Turning the coarse knob at x40 risks pushing the lens through the slide.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'lm-q1',
      type: 'multiple-choice',
      stem: 'Which part of a school light microscope holds the slide in place over the light?',
      tier: 'core',
      options: ['Eyepiece lens', 'Body tube', 'Stage', 'Nosepiece'],
      correctIndex: 2,
      xpValue: 10,
    },
    {
      id: 'lm-q2',
      type: 'multiple-choice',
      stem: 'Which lens does a pupil look into at the top of the microscope?',
      tier: 'core',
      options: ['Objective lens', 'Mirror', 'Coarse focus knob', 'Eyepiece lens'],
      correctIndex: 3,
      xpValue: 10,
    },
    {
      id: 'lm-q3',
      type: 'multiple-choice',
      stem: 'Which knob should be used first, on the lowest power objective, to bring a slide into rough focus?',
      tier: 'core',
      options: [
        'The fine focus knob.',
        'The coarse focus knob.',
        'The nosepiece.',
        'The condenser.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'lm-mis-fine-first',
    },
    {
      id: 'lm-q4',
      type: 'multiple-choice',
      stem: 'Which objective lens should a pupil use first when starting to look at a new slide?',
      tier: 'core',
      options: ['x4 (lowest power)', 'x10 (medium power)', 'x40 (highest power)', 'It does not matter.'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'lm-mis-start-high',
    },
    {
      id: 'lm-q5',
      type: 'multiple-choice',
      stem: 'What is the job of the mirror or built-in light at the base of a school microscope?',
      tier: 'core',
      options: [
        'To magnify the image of the cell.',
        'To shine light up through the slide so the pupil can see the cells.',
        'To hold the slide in place on the stage.',
        'To focus the image sharply.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'lm-mis-mirror-magnifies',
    },
    {
      id: 'lm-q6',
      type: 'numeric-entry',
      stem: 'A school microscope has objective lenses of x4, x10, and x40. How many objective lenses are on its nosepiece?',
      tier: 'core',
      correctAnswer: 3,
      xpValue: 10,
      hint: 'Count the powers listed.',
    },
    {
      id: 'lm-q7',
      type: 'spot-misconception',
      stem: 'A pupil writes that "the eyepiece is the lens that magnifies the slide on its own." Is this method sound?',
      tier: 'core',
      statements: [
        {
          text: 'The method is sound. Only the eyepiece magnifies the image.',
          isMisconception: true,
        },
        {
          text: 'The method is not sound. The image is magnified twice, by the objective lens and again by the eyepiece. Both share the work.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'lm-mis-eyepiece-only',
    },
    {
      id: 'lm-q8',
      type: 'drag-order',
      stem: 'Place these steps for setting up a slide in the right order, from first to last.',
      tier: 'confident',
      items: [
        'Lower a coverslip onto the specimen.',
        'Place a clean slide on the bench and add a drop of water.',
        'Look down the eyepiece and turn the coarse focus knob to bring the cells into rough focus.',
        'Set the slide on the stage with the lowest power objective in place.',
        'Add the specimen on top of the water drop.',
      ],
      correctOrder: [1, 4, 0, 3, 2],
      xpValue: 20,
      misconceptionId: 'lm-mis-coverslip-first',
    },
    {
      id: 'lm-q9',
      type: 'multiple-choice',
      stem: 'Why should a pupil only use the fine focus knob, not the coarse one, when looking through the x40 objective?',
      tier: 'confident',
      options: [
        'The fine knob makes the image larger.',
        'The coarse knob is broken on most school microscopes at x40.',
        'The coarse knob can drive the lens through the slide and damage both.',
        'The fine knob is the only one that works in bright light.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'lm-mis-coarse-at-x40',
    },
    {
      id: 'lm-q10',
      type: 'multiple-choice',
      stem: 'A pupil looks down the eyepiece and sees a circular dark patch with rings around it. Which problem fits best?',
      tier: 'confident',
      options: [
        'The mirror is angled away from the light, so the field of view is dark.',
        'The cells are too small to see at any power.',
        'The eyepiece lens has fallen out.',
        'The slide is placed under the wrong end of the microscope.',
      ],
      correctIndex: 0,
      xpValue: 15,
    },
    {
      id: 'lm-q11',
      type: 'numeric-entry',
      stem: 'A school slide measures 76 millimetres long and 26 millimetres wide. What is its area in square millimetres?',
      tier: 'confident',
      correctAnswer: 1976,
      xpValue: 15,
      hint: 'Multiply length by width.',
    },
    {
      id: 'lm-q12',
      type: 'labelled-image',
      stem: 'Drag each label onto the correct part of the school light microscope. Some labels in the pool do not match a part shown.',
      tier: 'confident',
      svg: microscopePartsSvg,
      viewBox: '0 0 600 400',
      hotspots: [
        { id: 'lm-q12-eyepiece', x: 47, y: 13, correctLabel: 'Eyepiece lens' },
        { id: 'lm-q12-objectives', x: 47, y: 44, correctLabel: 'Objective lenses' },
        { id: 'lm-q12-stage', x: 47, y: 53, correctLabel: 'Stage' },
        { id: 'lm-q12-coarse', x: 38, y: 70, correctLabel: 'Coarse focus knob' },
        { id: 'lm-q12-fine', x: 63, y: 70, correctLabel: 'Fine focus knob' },
        { id: 'lm-q12-mirror', x: 50, y: 92, correctLabel: 'Mirror or built-in light' },
      ],
      labels: [
        'Eyepiece lens',
        'Objective lenses',
        'Stage',
        'Coarse focus knob',
        'Fine focus knob',
        'Mirror or built-in light',
        'Cell wall',
        'Chloroplast',
        'Nosepiece motor',
      ],
      xpValue: 20,
    },
    {
      id: 'lm-q13',
      type: 'drag-drop-builder',
      stem: 'Build a working slide ready for the microscope. Drag in only the items that should be on the slide.',
      tier: 'confident',
      parts: [
        'Glass slide',
        'A drop of water',
        'A thin specimen, such as onion epidermis',
        'A coverslip',
        'A microscope mirror',
        'An objective lens',
        'A pencil',
      ],
      correctArrangement: [
        'Glass slide',
        'A drop of water',
        'A thin specimen, such as onion epidermis',
        'A coverslip',
      ],
      xpValue: 20,
      misconceptionId: 'lm-mis-slide-includes-lens',
    },
    {
      id: 'lm-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step in this routine for moving from low power to high power.',
      tier: 'confident',
      steps: [
        'Find the specimen at x4 using the coarse focus knob.',
        'Move the slide so the part you want is in the centre of the field of view.',
        null,
        'At x40, sharpen the focus with the fine focus knob only. Do not turn the coarse knob.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Turn the nosepiece to the x10 objective, then to the x40 objective, refocusing with the fine knob each time.',
      xpValue: 20,
    },
    {
      id: 'lm-q15',
      type: 'spot-misconception',
      stem: 'A pupil claims that "the bigger the magnification, the wider the slide area you can see at once." Is this method sound?',
      tier: 'confident',
      statements: [
        {
          text: 'The method is sound. Higher magnification shows more of the slide.',
          isMisconception: true,
        },
        {
          text: 'The method is not sound. Higher magnification shows a smaller patch of the slide in greater detail. The wider view is at low power.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'lm-mis-high-power-wider',
    },
    {
      id: 'lm-q16',
      type: 'numeric-entry',
      stem: 'A pupil counts 25 cells across the field of view at the x10 objective. When they swap to x40, the field of view shrinks to one quarter as wide. About how many of the same cells now fit across the field of view?',
      tier: 'challenge',
      correctAnswer: 6,
      tolerance: 1,
      xpValue: 20,
      hint: 'A quarter as wide means a quarter as many cells across.',
    },
    {
      id: 'lm-q17',
      type: 'multiple-choice',
      stem: 'In a Year 7 lesson at a Sevenoaks grammar school, a pupil sees lots of dark round circles in the field of view. The teacher checks and says they are air bubbles. Which step in the slide setup most likely went wrong?',
      tier: 'challenge',
      options: [
        'The pupil added too little water before placing the specimen.',
        'The pupil dropped the coverslip flat onto the specimen instead of lowering it from one edge.',
        'The pupil started on the x40 objective rather than the x4.',
        'The pupil forgot to turn on the mirror.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'lm-mis-coverslip-first',
    },
    {
      id: 'lm-q18',
      type: 'data-extraction',
      stem: 'Which microscope error best fits this report?',
      tier: 'challenge',
      dataSource:
        'A class records four observation reports under the school microscope: A. The image is too dark to see. B. The lens has scraped a line into the slide. C. There are dark circles around the field of view. D. The cells are blurry but the field of view is bright.',
      correctAnswer: 'B',
      xpValue: 20,
      hint: 'Match each report to a likely cause: dark image, broken slide, air bubbles, or out of focus.',
      misconceptionId: 'lm-mis-coarse-at-x40',
    },
    {
      id: 'lm-q19',
      type: 'multiple-choice',
      stem: 'A pupil sets up a slide and finds the specimen at x4 in the top right of the field of view. They want it in the centre. Which way should they move the slide?',
      tier: 'challenge',
      options: [
        'Up and to the right, so the slide moves the same way as the image.',
        'Down and to the left, so the image appears to move down and to the left into the centre.',
        'They should swap to a higher power objective so the image moves automatically.',
        'They should rotate the slide 180 degrees.',
      ],
      correctIndex: 1,
      xpValue: 20,
      hint: 'A microscope image is upside down and back to front. Moving the slide one way makes the image appear to move the opposite way.',
    },
    {
      id: 'lm-q20',
      type: 'numeric-entry',
      stem: 'A school class has 14 microscopes and 56 pupils. If each pupil works on a microscope in turn for 8 minutes, how many minutes does it take for the whole class to have one go each?',
      tier: 'challenge',
      correctAnswer: 32,
      xpValue: 20,
      hint: 'How many pupils share each microscope, and how long does each take?',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Biology Required Practical 1 (Microscopy) handbook, which warns that students should "always start at the lowest power objective lens" and only move to higher power once focused. https://filestore.aqa.org.uk/resources/biology/AQA-8461-PRACTICALS.PDF
    {
      id: 'lm-mis-start-high',
      description: 'You can start on the highest power objective and still find the specimen.',
      triggerAnswer: 'start-high',
      correction:
        'Actually, always start on the lowest power objective. You need a wide view to find the specimen and centre it before moving to a stronger lens.',
      reExplanation:
        'A high power lens shows only a tiny patch of the slide at once. If the specimen is not already centred, you will see nothing. Start at x4, find the cells, then turn the nosepiece to x10 and only then to x40, refocusing each time.',
    },
    // Source: AQA GCSE Biology Required Practical 1 (Microscopy) handbook, which restricts the coarse knob to low power objectives because it moves the stage too far at high power. https://filestore.aqa.org.uk/resources/biology/AQA-8461-PRACTICALS.PDF
    {
      id: 'lm-mis-coarse-at-x40',
      description:
        'You can use the coarse focus knob on the highest power objective.',
      triggerAnswer: 'coarse-at-x40',
      correction:
        'In fact, only use the fine focus knob at x40. The coarse knob moves the stage too far and can push the lens through the slide.',
      reExplanation:
        'At x40 the lens sits very close to the slide. A small turn of the coarse knob can crash the lens into the glass, scratch the lens, and crack the slide. Use only the fine knob at this power; it makes tiny movements that are safe.',
    },
    // Source: Edexcel GCSE Biology specification 1BI0, Topic 1, microscopy practical guidance, which lists eyepiece and objective lenses as separate magnifying parts of a compound light microscope. https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/Specification/gcse-biology-spec.pdf
    {
      id: 'lm-mis-eyepiece-only',
      description: 'Only the eyepiece lens magnifies the image.',
      triggerAnswer: 'eyepiece-only',
      correction:
        'Actually, the image is magnified twice. The objective lens magnifies first, then the eyepiece magnifies that image again. Total magnification is the two multiplied together.',
      reExplanation:
        'A compound light microscope has two stages of magnification. The objective lens above the slide makes the first enlarged image. The eyepiece lens at the top enlarges that image again. So an x10 eyepiece with an x40 objective gives x400 total, not just x10.',
    },
    // Source: Oak National Academy KS3 Biology lesson, "Using a light microscope", which sequences slide preparation as glass slide, water drop, specimen, then coverslip. https://www.thenational.academy/teachers/programmes/science-secondary-ks3/units/cells
    {
      id: 'lm-mis-coverslip-first',
      description:
        'You should drop the coverslip flat onto the specimen, or place it before adding the water drop.',
      triggerAnswer: 'coverslip-first',
      correction:
        'Actually, lower the coverslip from one edge after the specimen and water drop are in place. Dropping it flat traps air bubbles that look like dark circles in the field of view.',
      reExplanation:
        'Air bubbles get in the way of light and confuse the image. To avoid them, hold the coverslip at an angle on one edge of the water drop and lower the other edge slowly with a mounted needle, so any air pushes out as the slip lays down. Place the coverslip last, never first.',
    },
    // Source: AQA GCSE Biology Foundation tier (8461/1F) Report on the Examination, June 2022, comments on responses to the question on the role of the focus knob versus the lens, where students often confuse focus and magnification. https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-84611F-WRE-%202022.PDF
    {
      id: 'lm-mis-fine-first',
      description: 'You should use the fine focus knob first, before the coarse knob.',
      triggerAnswer: 'fine-first',
      correction:
        'In fact, use the coarse focus knob first on the lowest power lens to find rough focus. Then sharpen with the fine knob, and use only the fine knob at higher powers.',
      reExplanation:
        'The coarse knob moves the stage a lot for each turn, the fine knob only a tiny amount. To go from far out of focus to a clear image you need the coarse knob first; the fine knob would take hundreds of turns. Once the image is roughly clear, the fine knob does the polishing.',
    },
    // Source: AQA GCSE Biology Foundation tier (8461/1F) Report on the Examination, June 2022, on Question 2 students confused the role of the mirror with that of the lens system. https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-84611F-WRE-%202022.PDF
    {
      id: 'lm-mis-mirror-magnifies',
      description: 'The mirror at the base of the microscope magnifies the cell.',
      triggerAnswer: 'mirror-magnifies',
      correction:
        'Actually, the mirror only reflects light up through the slide. Magnifying is done by the objective lens and then the eyepiece lens.',
      reExplanation:
        'Without light, the lens system has nothing to enlarge. The mirror or built-in lamp shines light from below up through the thin specimen so the cells stand out as shapes. The lenses then enlarge that lit image. Curving the mirror does not change the magnification at all.',
    },
    // Source: Oak National Academy KS3 Biology lesson, "Using a light microscope", clarifies that magnification trades width of view for detail. https://www.thenational.academy/teachers/programmes/science-secondary-ks3/units/cells
    {
      id: 'lm-mis-high-power-wider',
      description:
        'A higher magnification shows you a wider area of the slide.',
      triggerAnswer: 'high-wider',
      correction:
        'Actually, higher magnification shows a smaller patch of the slide in greater detail. The wider view is at low power.',
      reExplanation:
        'Think of zooming in on a phone photo. The closer you zoom, the less of the picture you see at once, but each part appears larger. A microscope at x40 fills the whole field of view with a few cells. At x4 the same field of view holds many more cells, but each one looks small.',
    },
    // Authored, no external source: classroom-observed Year 7 slip of including a microscope part on the slide itself
    {
      id: 'lm-mis-slide-includes-lens',
      description:
        'A working slide should include an objective lens or part of the microscope on top of the specimen.',
      triggerAnswer: 'slide-with-lens',
      correction:
        'In fact, a slide is just glass, water, specimen, and coverslip. The lenses live inside the microscope, never on the slide itself.',
      reExplanation:
        'Picture the slide as a sandwich of glass, water, specimen, and a glass coverslip on top. Once the slide is built, you set it on the stage. The objective lens swings down above the slide; it never sits on it. Putting a lens on the slide would only mean dropping a piece of glass and probably breaking it.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

const magnificationFormulaSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="40" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#1F2937">The magnification triangle</text>
  <polygon points="300,80 80,330 520,330" fill="#FCE7F3" stroke="#BE185D" stroke-width="4" />
  <line x1="180" y1="240" x2="420" y2="240" stroke="#BE185D" stroke-width="3" />
  <line x1="300" y1="80" x2="300" y2="240" stroke="#BE185D" stroke-width="3" />
  <text x="300" y="180" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#1F2937">I</text>
  <text x="300" y="200" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Image size</text>
  <text x="220" y="290" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#1F2937">M</text>
  <text x="220" y="310" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Magnification</text>
  <text x="380" y="290" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#1F2937">A</text>
  <text x="380" y="310" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Actual size</text>
  <text x="60" y="390" font-family="sans-serif" font-size="14" fill="#1F2937">M = I / A</text>
  <text x="240" y="390" font-family="sans-serif" font-size="14" fill="#1F2937">A = I / M</text>
  <text x="420" y="390" font-family="sans-serif" font-size="14" fill="#1F2937">I = M x A</text>
</svg>
`.trim()

const totalMagSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="34" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">Total magnification on a school microscope</text>
  <rect x="60" y="80" width="160" height="100" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="3" />
  <text x="140" y="120" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#1F2937">Eyepiece</text>
  <text x="140" y="150" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#1F2937">x10</text>
  <text x="270" y="140" text-anchor="middle" font-family="sans-serif" font-size="36" fill="#BE185D">x</text>
  <rect x="320" y="80" width="160" height="100" rx="8" fill="#FEF3C7" stroke="#92400E" stroke-width="3" />
  <text x="400" y="120" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#1F2937">Objective</text>
  <text x="400" y="150" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#1F2937">x40</text>
  <text x="300" y="240" text-anchor="middle" font-family="sans-serif" font-size="36" fill="#BE185D">=</text>
  <rect x="200" y="260" width="200" height="100" rx="8" fill="#FCE7F3" stroke="#BE185D" stroke-width="3" />
  <text x="300" y="300" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#1F2937">Total magnification</text>
  <text x="300" y="335" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#1F2937">x400</text>
</svg>
`.trim()

const unitsLadderSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="34" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">Going between millimetres and micrometres</text>
  <rect x="80" y="80" width="180" height="80" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="3" />
  <text x="170" y="115" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#1F2937">1 mm</text>
  <text x="170" y="145" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">millimetre</text>
  <text x="300" y="125" text-anchor="middle" font-family="sans-serif" font-size="32" fill="#BE185D">=</text>
  <rect x="340" y="80" width="180" height="80" rx="8" fill="#FEF3C7" stroke="#92400E" stroke-width="3" />
  <text x="430" y="115" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#1F2937">1000 µm</text>
  <text x="430" y="145" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">micrometres</text>
  <text x="80" y="220" font-family="sans-serif" font-size="16" fill="#1F2937">From mm to µm: multiply by 1000</text>
  <text x="80" y="260" font-family="sans-serif" font-size="16" fill="#1F2937">From µm to mm: divide by 1000</text>
  <rect x="80" y="290" width="440" height="80" rx="8" fill="#BFDBFE" stroke="#1D4ED8" stroke-width="3" />
  <text x="300" y="320" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#1F2937">Always match the units before dividing.</text>
  <text x="300" y="350" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">Image and actual size must be in the same unit. Magnification has no unit.</text>
</svg>
`.trim()

export const magnificationCalculations: SkillNode = {
  id: 'biology-microscopy-magnification',
  title: 'Magnification Calculations',
  description:
    'Work out the total magnification of a microscope, then use it to find the actual size of a cell from its image. Practise the magnification formula in both directions, in millimetres and micrometres, with the unit conversion that always trips Year 7 up.',
  subject: 'biology',
  realm: 'vitalia',
  zoneId: 'biology-microscopy',
  zoneName: 'Microscopy',
  tier: 'confident',
  prerequisites: ['biology-microscopy-light-microscope'],
  curriculum: {
    ks3Objective:
      'Cells as the fundamental unit of living organisms, including how to observe, interpret and record cell structure using a light microscope.',
    awardingBodies: {
      aqa: '4.1.1.5 Size and scale of cells (GCSE Biology 8461). Apply the magnification formula M = I / A and rearrange it to find I or A. Convert between mm and micrometres.',
      edexcel: 'CB1e Magnification (GCSE Biology 1BI0, Topic 1). Use the magnification formula and convert between units.',
      ocr: 'B1.1.4 Calculating magnification and size (GCSE Biology A J247). Apply M = I / A and convert between mm and micrometres.',
    },
  },
  scenes: [
    {
      id: 'mc-scene-formula',
      title: 'The Magnification Formula',
      type: 'labelled-diagram',
      instructions:
        'Click each label on the triangle to read the rule.',
      data: {
        svg: magnificationFormulaSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'mc-hs-image',
            x: 50,
            y: 45,
            label: 'Image size',
            description:
              'How big the image looks. Read it off the picture in mm.',
          },
          {
            id: 'mc-hs-mag',
            x: 35,
            y: 75,
            label: 'Magnification',
            description:
              'A number with no units. Tells you how many times bigger the image is than the real cell.',
          },
          {
            id: 'mc-hs-actual',
            x: 65,
            y: 75,
            label: 'Actual size',
            description:
              'How big the real cell is. Often given in micrometres because real cells are tiny.',
          },
        ],
      },
    },
    {
      id: 'mc-scene-total-mag',
      title: 'Two Lenses, One Total',
      type: 'labelled-diagram',
      instructions:
        'Click each lens box to read how the two magnifications combine.',
      data: {
        svg: totalMagSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'mc-tm-eyepiece',
            x: 23,
            y: 32,
            label: 'Eyepiece magnification',
            description:
              'School eyepieces are usually x10. This is the first stage of magnification.',
          },
          {
            id: 'mc-tm-objective',
            x: 67,
            y: 32,
            label: 'Objective magnification',
            description:
              'Choose one objective from the nosepiece (x4, x10, or x40). This is the second stage.',
          },
          {
            id: 'mc-tm-total',
            x: 50,
            y: 80,
            label: 'Total magnification',
            description:
              'Total magnification = eyepiece x objective. So x10 eyepiece with x40 objective gives x400.',
          },
        ],
      },
    },
    {
      id: 'mc-scene-units',
      title: 'Millimetres and Micrometres',
      type: 'labelled-diagram',
      instructions:
        'Click the boxes to read how the two units link, and the rule for using them in the formula.',
      data: {
        svg: unitsLadderSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'mc-units-mm',
            x: 28,
            y: 30,
            label: '1 mm',
            description:
              'A millimetre is one thousandth of a metre. You can see this size with the naked eye.',
          },
          {
            id: 'mc-units-um',
            x: 72,
            y: 30,
            label: '1000 µm',
            description:
              'A micrometre, written µm, is one thousandth of a millimetre. So 1 mm equals 1000 µm.',
          },
          {
            id: 'mc-units-rule',
            x: 50,
            y: 80,
            label: 'Same unit rule',
            description:
              'Image size and actual size must be in the same unit before you divide. Magnification has no unit.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'mc-worked-1',
      title: 'Finding the actual size of a plant cell',
      steps: [
        {
          explanation:
            'A pupil sees a plant cell that measures 30 mm across in the picture, taken at a total magnification of x500.',
        },
        {
          explanation:
            'Choose the right form of the formula. We know image size and magnification, so use actual size = image size divided by magnification.',
        },
        {
          explanation:
            'Substitute the numbers in the same unit. Actual size = 30 mm divided by 500.',
          maths: 'A = 30 mm / 500',
        },
        {
          explanation:
            'Work out the division. 30 divided by 500 equals 0.06 mm.',
          maths: 'A = 0.06 mm',
        },
        {
          explanation:
            'Convert to micrometres because the cell is small. Multiply by 1000. So 0.06 mm equals 60 micrometres.',
          maths: 'A = 0.06 x 1000 = 60 micrometres',
        },
      ],
    },
    {
      id: 'mc-worked-2',
      title: 'Finding the magnification when both sizes are known',
      steps: [
        {
          explanation:
            'A pupil knows that a real onion cell is 0.2 mm across. In the picture it measures 80 mm across. What magnification was used?',
        },
        {
          explanation:
            'Use the formula in the form magnification = image size divided by actual size.',
          maths: 'M = I / A',
        },
        {
          explanation:
            'Check the units. Both image size and actual size are already in millimetres, so no conversion is needed.',
        },
        {
          explanation:
            'Substitute the numbers. Magnification = 80 mm divided by 0.2 mm.',
          maths: 'M = 80 / 0.2',
        },
        {
          explanation:
            'Work out the division. 80 divided by 0.2 equals 400.',
          maths: 'M = 400',
        },
        {
          explanation:
            'Magnification has no unit. The answer is x400. This is what a school microscope gives with a x10 eyepiece and a x40 objective.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'mc-q1',
      type: 'multiple-choice',
      stem: 'A school microscope has an eyepiece of x10 and an objective of x4. What is the total magnification?',
      tier: 'core',
      options: ['x14', 'x40', 'x4', 'x10'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Total magnification = eyepiece x objective.',
    },
    {
      id: 'mc-q2',
      type: 'numeric-entry',
      stem: 'A school microscope has an eyepiece of x10 and an objective of x40. What is the total magnification?',
      tier: 'core',
      correctAnswer: 400,
      xpValue: 10,
      hint: 'Total magnification = eyepiece x objective.',
    },
    {
      id: 'mc-q3',
      type: 'multiple-choice',
      stem: 'Which version of the magnification formula gives the actual size of a cell?',
      tier: 'core',
      options: [
        'Magnification = image size x actual size.',
        'Image size = magnification + actual size.',
        'Actual size = image size divided by magnification.',
        'Actual size = magnification x image size.',
      ],
      correctIndex: 2,
      xpValue: 10,
    },
    {
      id: 'mc-q4',
      type: 'multiple-choice',
      stem: 'A pupil writes a magnification answer as "x400 mm." What has gone wrong?',
      tier: 'core',
      options: [
        'Magnification has no unit. Write only x400.',
        'Magnification is always given in millimetres, so the answer is fine.',
        'Magnification should always be in micrometres, not millimetres.',
        'Magnification should be written as a fraction, not a multiple.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'mc-mis-mag-has-units',
    },
    {
      id: 'mc-q5',
      type: 'multiple-choice',
      stem: 'Which statement about millimetres and micrometres is correct?',
      tier: 'core',
      options: [
        'A millimetre and a micrometre are the same size.',
        'A micrometre is bigger than a millimetre.',
        'There are 100 micrometres in a millimetre.',
        'There are 1000 micrometres in a millimetre.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'mc-mis-mm-same-as-um',
    },
    {
      id: 'mc-q6',
      type: 'numeric-entry',
      stem: 'A cell measures 0.05 mm across. How many micrometres is this?',
      tier: 'core',
      correctAnswer: 50,
      unit: 'µm',
      xpValue: 10,
      hint: 'Multiply by 1000 to go from mm to µm.',
    },
    {
      id: 'mc-q7',
      type: 'numeric-entry',
      stem: 'A drawing of a cell measures 50 mm across. The total magnification is x100. What is the actual size of the cell in mm?',
      tier: 'core',
      correctAnswer: 0.5,
      unit: 'mm',
      xpValue: 15,
      hint: 'Actual size = image size divided by magnification.',
    },
    {
      id: 'mc-q8',
      type: 'spot-misconception',
      stem: 'A pupil writes that "the magnification of a microscope is just whatever the objective lens says." Is this method sound?',
      tier: 'core',
      statements: [
        {
          text: 'The method is sound. Whatever the objective says is the total magnification.',
          isMisconception: true,
        },
        {
          text: 'The method is not sound. Total magnification is the eyepiece magnification multiplied by the objective magnification, never just one of them.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'mc-mis-objective-only',
    },
    {
      id: 'mc-q9',
      type: 'numeric-entry',
      stem: 'A drawing of a cell measures 30 mm across, taken under a microscope set to eyepiece x15 and objective x40. What is the actual size of the cell, in micrometres?',
      tier: 'confident',
      correctAnswer: 50,
      tolerance: 0.5,
      unit: 'µm',
      xpValue: 15,
      hint: 'First find the total magnification by multiplying eyepiece by objective. Then actual size = image divided by magnification. The answer comes out in mm, so multiply by 1000 to get micrometres.',
      misconceptionId: 'mc-mis-mismatched-units',
    },
    {
      id: 'mc-q10',
      type: 'multiple-choice',
      stem: 'A real onion cell is 0.2 mm across. In a picture it measures 80 mm across. What total magnification did the picture use?',
      tier: 'confident',
      options: ['x16', 'x40', 'x400', 'x4000'],
      correctIndex: 2,
      xpValue: 15,
      hint: 'Magnification = image size divided by actual size. Both already in mm.',
    },
    {
      id: 'mc-q11',
      type: 'multiple-choice',
      stem: 'A pupil draws a red blood cell that measures 35 mm across in their book. The actual cell is 7 micrometres across. What total magnification did the drawing use?',
      tier: 'confident',
      options: ['x5', 'x500', 'x50 000', 'x5000'],
      correctIndex: 3,
      xpValue: 20,
      hint: 'Convert 35 mm to micrometres first, so both sizes use the same unit.',
      misconceptionId: 'mc-mis-mismatched-units',
    },
    {
      id: 'mc-q13',
      type: 'multiple-choice',
      stem: 'A pupil writes that "to find the real size of a cell, you multiply the image size by the magnification." What has gone wrong?',
      tier: 'confident',
      options: [
        'Nothing. Image size times magnification gives the real size.',
        'Real size = image size divided by magnification, not multiplied. Multiplying would make the cell even bigger.',
        'You should add image size and magnification to get the real size.',
        'Magnification has units, so this would not work.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'mc-mis-multiply-not-divide',
    },
    {
      id: 'mc-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step in this calculation of an actual cell size.',
      tier: 'confident',
      steps: [
        'A cell drawing measures 60 mm across at a total magnification of x300.',
        'Use actual size = image size divided by magnification, with both sizes in mm.',
        null,
        'Convert to micrometres by multiplying by 1000. So the actual cell size is 200 micrometres.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Substitute the numbers: actual size = 60 divided by 300, which equals 0.2 mm.',
      xpValue: 20,
    },
    {
      id: 'mc-q15',
      type: 'drag-order',
      stem: 'Place these steps in the right order for finding the actual size of a cell from its image.',
      tier: 'confident',
      items: [
        'Convert the result to micrometres if the answer is small.',
        'Read the image size off the picture in millimetres.',
        'Find the total magnification by multiplying eyepiece by objective.',
        'Divide the image size by the total magnification.',
      ],
      correctOrder: [1, 2, 3, 0],
      xpValue: 20,
    },
    {
      id: 'mc-q16',
      type: 'multiple-choice',
      stem: 'A pupil notices that on the same school microscope, the field of view at x40 holds about a quarter as many cells across as at x10. Which sentence best explains this?',
      tier: 'confident',
      options: [
        'A higher magnification shows a wider area, so each cell looks smaller.',
        'The cells shrink at x40, so you can see fewer of them.',
        'The objective lens stops working at x40.',
        'A higher magnification shows a narrower area, so the same cells fill more of the view and fewer fit across.',
      ],
      correctIndex: 3,
      misconceptionId: 'mc-mis-bigger-is-more',
      xpValue: 15,
    },
    {
      id: 'mc-q17',
      type: 'data-extraction',
      stem: 'Which slide setting in the table gives the highest total magnification?',
      tier: 'confident',
      dataSource:
        'A class records four microscope settings: A. x10 eyepiece with x4 objective. B. x10 eyepiece with x10 objective. C. x10 eyepiece with x40 objective. D. x15 eyepiece with x10 objective.',
      correctAnswer: 'C',
      xpValue: 15,
      hint: 'Multiply each pair and pick the largest.',
    },
    {
      id: 'mc-q18',
      type: 'numeric-entry',
      stem: 'A Year 7 pupil in a Tunbridge Wells school draws a single onion cell at total magnification x100. The drawing is 25 mm across. The teacher then asks the pupil to redraw it to fit in a notebook column 10 mm wide. What total magnification should the new drawing use, to keep the same actual cell size?',
      tier: 'challenge',
      correctAnswer: 40,
      xpValue: 25,
      hint: 'First find the actual cell size from the first drawing, then use it with the new image size.',
      misconceptionId: 'mc-mis-multiply-not-divide',
    },
    {
      id: 'mc-q19',
      type: 'numeric-entry',
      stem: 'A scientist photographs a cheek cell at a total magnification of x800. The cell in the picture is 48 mm across. A separate measurement shows that the actual cheek cell is 60 micrometres across. Has the magnification been recorded correctly? Enter the correct magnification.',
      tier: 'challenge',
      correctAnswer: 800,
      xpValue: 25,
      hint: 'Convert 48 mm to micrometres, then divide by the actual size in the same unit.',
    },
    {
      id: 'mc-q20',
      type: 'multiple-choice',
      stem: 'In a Sevenoaks classroom, a pupil sees a cell that the textbook lists as 50 micrometres across, but their drawing at x200 only measures 8 mm across. Which step most likely went wrong?',
      tier: 'challenge',
      options: [
        'They used the wrong magnification formula.',
        'They drew the cell smaller than the formula gives. The image should be 10 mm at x200, since 50 micrometres x 200 = 10 000 micrometres = 10 mm.',
        'The textbook value must be wrong.',
        'The microscope was set to a different objective during the drawing.',
      ],
      correctIndex: 1,
      xpValue: 25,
      hint: 'Use image size = magnification x actual size, with units that match.',
    },
    {
      id: 'mc-q21',
      type: 'numeric-entry',
      stem: 'A teacher prints a scale bar 20 mm long beside a cell drawing. The label says the bar represents 50 micrometres of real distance. What total magnification does this drawing use?',
      tier: 'challenge',
      correctAnswer: 400,
      xpValue: 25,
      hint: 'The scale bar is just a small image of a known real distance. Use M = image / actual, with both in the same units.',
      misconceptionId: 'mc-mis-scale-bar-magnification',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Biology specification 8461, section 4.1.1.5 "Size and scale of cells", which states magnification has no unit and is the ratio of image size to actual size. https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/specification/subject-content/cell-biology
    {
      id: 'mc-mis-mag-has-units',
      description: 'Magnification has units like millimetres or micrometres.',
      triggerAnswer: 'mag-units',
      correction:
        'Actually, magnification is a ratio of two sizes that share the same unit. The units cancel out, so magnification itself has no unit. Write x400, not x400 mm.',
      reExplanation:
        'When you divide image size by actual size, both should be in the same unit. The unit on the top and the unit on the bottom cancel, leaving just a number. That number is the magnification, and it gets written with an x in front, like x10 or x400. Adding mm or micrometres on the end is always wrong.',
    },
    // Source: AQA GCSE Biology specification 8461, which gives the total magnification of a compound light microscope as the eyepiece magnification multiplied by the objective magnification. https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/specification/subject-content/cell-biology
    {
      id: 'mc-mis-objective-only',
      description:
        'The total magnification of a microscope is whatever number the objective lens says.',
      triggerAnswer: 'objective-only',
      correction:
        'In fact, total magnification is the eyepiece multiplied by the objective. A x10 eyepiece with a x40 objective gives x400, not x40.',
      reExplanation:
        'A compound light microscope magnifies in two stages. First the objective lens above the slide makes an enlarged image. Then the eyepiece lens at the top enlarges that image again. To get the total, multiply the two together. So always read both numbers, then multiply.',
    },
    // Source: AQA GCSE Biology Foundation tier (8461/1F) Report on the Examination, June 2022, on cell-size questions where students often forget the unit conversion between mm and micrometres before dividing. https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-84611F-WRE-%202022.PDF
    {
      id: 'mc-mis-mismatched-units',
      description:
        'You can divide an image size in millimetres by an actual size in micrometres without converting first.',
      triggerAnswer: 'mismatched-units',
      correction:
        'Actually, image size and actual size must be in the same unit before you divide. Convert one of them first.',
      reExplanation:
        'A drawing of a cell might be 35 mm across, while the real cell is 7 micrometres across. Dividing 35 by 7 gives the wrong answer because the units differ. First convert 35 mm to micrometres: 35 mm equals 35 000 micrometres. Now divide 35 000 by 7 to get the magnification of x5000.',
    },
    // Source: AQA GCSE Biology specification 8461, section 4.1.1.5, which states the formula M = I / A and rearrangements. https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/specification/subject-content/cell-biology
    {
      id: 'mc-mis-multiply-not-divide',
      description:
        'To find the actual size of a cell, multiply the image size by the magnification.',
      triggerAnswer: 'multiply-not-divide',
      correction:
        'Actually, divide the image size by the magnification. Multiplying would make the result even bigger than the picture, when the real cell is smaller.',
      reExplanation:
        'A microscope makes the image larger than the real cell, so the real cell must be smaller than the image. Smaller comes from dividing, not multiplying. Use the magnification triangle: I sits on top, M and A sit underneath. Cover A and you see I divided by M. Cover I and you see M times A.',
    },
    // Source: Oak National Academy KS3 Biology lesson, "Using a light microscope", on the trade-off between magnification and field of view. https://www.thenational.academy/teachers/programmes/science-secondary-ks3/units/cells
    {
      id: 'mc-mis-bigger-is-more',
      description:
        'A higher magnification always shows you more cells than a lower one.',
      triggerAnswer: 'bigger-more-cells',
      correction:
        'In fact, a higher magnification shows fewer cells at once, but each looks larger. The wider view of many cells is at low magnification.',
      reExplanation:
        'Magnification trades width of view for detail. At x4 you might see 50 cells across the field of view, each tiny. At x40 only a handful of cells fit across the same field, but each looks ten times bigger. To count cells, choose low power. To see one cell in detail, choose high power.',
    },
    // Source: AQA GCSE Biology Required Practical 1 (Microscopy) handbook, on writing the scale bar correctly with units that match the magnification work. https://filestore.aqa.org.uk/resources/biology/AQA-8461-PRACTICALS.PDF
    {
      id: 'mc-mis-scale-bar-magnification',
      description:
        'A scale bar on a microscope drawing is the same as the magnification.',
      triggerAnswer: 'scale-bar-mag',
      correction:
        'Actually, a scale bar shows a real distance on the slide, in micrometres or millimetres. The magnification is then worked out from the bar length and the labelled real distance.',
      reExplanation:
        'A scale bar is a tiny image of a known real distance. If a 20 mm bar on the page represents 50 micrometres on the slide, the magnification is 20 mm divided by 50 micrometres. Convert to the same unit: 20 mm = 20 000 micrometres, so magnification = 20 000 / 50 = 400. The bar itself is not the magnification; it is the data you use to work it out.',
    },
    // Authored, no external source: classroom-observed Year 7 slip of treating mm and µm as the same when both look small
    {
      id: 'mc-mis-mm-same-as-um',
      description: 'A millimetre and a micrometre are the same thing because both are small.',
      triggerAnswer: 'mm-equals-um',
      correction:
        'In fact, 1 millimetre is 1000 times bigger than 1 micrometre. Mixing them up changes any answer by a factor of 1000.',
      reExplanation:
        'A millimetre is one of the small marks on a school ruler; you can see it with the naked eye. A micrometre is one thousandth of that; you only see it under a microscope. Always check the unit on every number before you divide. A wrong unit guess turns 60 micrometres into 60 millimetres, which is bigger than your hand.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const microscopyZoneNodes: SkillNode[] = [lightMicroscope, magnificationCalculations]

export const microscopyZone: Zone = {
  id: 'biology-microscopy',
  name: 'Microscopy',
  realm: 'vitalia',
  nodeIds: [lightMicroscope.id, magnificationCalculations.id],
}
