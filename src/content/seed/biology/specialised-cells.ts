import type { SkillNode } from '@/types/content'

const specialisedCellsSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="26" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">Six specialised cells</text>
  <circle cx="100" cy="120" r="44" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="3" />
  <circle cx="100" cy="120" r="18" fill="#FECACA" />
  <text x="100" y="200" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">Red blood cell</text>
  <ellipse cx="300" cy="120" rx="22" ry="22" fill="#FDE68A" stroke="#92400E" stroke-width="3" />
  <path d="M 322 120 Q 380 110 430 120 Q 380 130 322 120 Z" fill="#FDE68A" stroke="#92400E" stroke-width="3" />
  <circle cx="300" cy="120" r="10" fill="#A855F7" />
  <text x="370" y="200" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">Sperm cell</text>
  <rect x="500" y="92" width="60" height="56" rx="6" fill="#BBF7D0" stroke="#14532D" stroke-width="3" />
  <line x1="510" y1="148" x2="510" y2="200" stroke="#14532D" stroke-width="3" />
  <line x1="525" y1="148" x2="525" y2="210" stroke="#14532D" stroke-width="3" />
  <line x1="540" y1="148" x2="540" y2="208" stroke="#14532D" stroke-width="3" />
  <line x1="555" y1="148" x2="555" y2="200" stroke="#14532D" stroke-width="3" />
  <text x="530" y="240" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">Root hair cell</text>
  <rect x="60" y="280" width="120" height="60" rx="6" fill="#FECACA" stroke="#7F1D1D" stroke-width="3" />
  <line x1="72" y1="280" x2="72" y2="262" stroke="#7F1D1D" stroke-width="2" />
  <line x1="84" y1="280" x2="84" y2="258" stroke="#7F1D1D" stroke-width="2" />
  <line x1="96" y1="280" x2="96" y2="262" stroke="#7F1D1D" stroke-width="2" />
  <line x1="108" y1="280" x2="108" y2="258" stroke="#7F1D1D" stroke-width="2" />
  <line x1="120" y1="280" x2="120" y2="262" stroke="#7F1D1D" stroke-width="2" />
  <line x1="132" y1="280" x2="132" y2="258" stroke="#7F1D1D" stroke-width="2" />
  <line x1="144" y1="280" x2="144" y2="262" stroke="#7F1D1D" stroke-width="2" />
  <line x1="156" y1="280" x2="156" y2="258" stroke="#7F1D1D" stroke-width="2" />
  <line x1="168" y1="280" x2="168" y2="262" stroke="#7F1D1D" stroke-width="2" />
  <text x="120" y="364" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">Ciliated cell</text>
  <ellipse cx="320" cy="320" rx="14" ry="40" fill="#DDD6FE" stroke="#5B21B6" stroke-width="3" />
  <line x1="306" y1="320" x2="240" y2="320" stroke="#5B21B6" stroke-width="3" />
  <circle cx="320" cy="290" r="6" fill="#5B21B6" />
  <text x="290" y="378" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">Nerve cell</text>
  <rect x="470" y="280" width="40" height="80" rx="6" fill="#BBF7D0" stroke="#14532D" stroke-width="3" />
  <circle cx="479" cy="294" r="5" fill="#15803D" />
  <circle cx="495" cy="298" r="5" fill="#15803D" />
  <circle cx="479" cy="312" r="5" fill="#15803D" />
  <circle cx="495" cy="316" r="5" fill="#15803D" />
  <circle cx="479" cy="330" r="5" fill="#15803D" />
  <circle cx="495" cy="334" r="5" fill="#15803D" />
  <circle cx="479" cy="348" r="5" fill="#15803D" />
  <circle cx="495" cy="352" r="5" fill="#15803D" />
  <text x="490" y="378" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">Palisade cell</text>
</svg>
`.trim()

const redBloodCellSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="32" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">A red blood cell, side view and top view</text>
  <ellipse cx="180" cy="220" rx="120" ry="50" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="4" />
  <ellipse cx="180" cy="220" rx="40" ry="14" fill="#7F1D1D" opacity="0.4" />
  <text x="180" y="320" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#1F2937">Side view (biconcave dimples)</text>
  <circle cx="440" cy="220" r="80" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="4" />
  <circle cx="440" cy="220" r="32" fill="#FECACA" />
  <text x="440" y="320" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#1F2937">Top view (round, no nucleus)</text>
</svg>
`.trim()

const cellJobsSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="28" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">Three plant and lining cells doing their jobs</text>
  <rect x="40" y="60" width="160" height="280" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="4" />
  <text x="120" y="84" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#14532D">Palisade cell</text>
  <rect x="60" y="100" width="40" height="180" rx="4" fill="#BBF7D0" stroke="#14532D" stroke-width="2" />
  <rect x="110" y="100" width="40" height="180" rx="4" fill="#BBF7D0" stroke="#14532D" stroke-width="2" />
  <rect x="160" y="100" width="32" height="180" rx="4" fill="#BBF7D0" stroke="#14532D" stroke-width="2" />
  <circle cx="68" cy="120" r="5" fill="#15803D" />
  <circle cx="80" cy="138" r="5" fill="#15803D" />
  <circle cx="68" cy="158" r="5" fill="#15803D" />
  <circle cx="92" cy="178" r="5" fill="#15803D" />
  <circle cx="120" cy="118" r="5" fill="#15803D" />
  <circle cx="135" cy="142" r="5" fill="#15803D" />
  <circle cx="120" cy="170" r="5" fill="#15803D" />
  <circle cx="138" cy="200" r="5" fill="#15803D" />
  <circle cx="170" cy="120" r="5" fill="#15803D" />
  <circle cx="180" cy="150" r="5" fill="#15803D" />
  <circle cx="172" cy="190" r="5" fill="#15803D" />
  <line x1="120" y1="40" x2="120" y2="58" stroke="#F59E0B" stroke-width="3" />
  <line x1="100" y1="40" x2="100" y2="58" stroke="#F59E0B" stroke-width="3" />
  <line x1="140" y1="40" x2="140" y2="58" stroke="#F59E0B" stroke-width="3" />
  <text x="120" y="360" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Traps light at top of leaf</text>
  <rect x="220" y="60" width="160" height="280" rx="10" fill="#FEF3C7" stroke="#92400E" stroke-width="4" />
  <text x="300" y="84" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#92400E">Root hair cell</text>
  <rect x="240" y="180" width="120" height="80" rx="6" fill="#FDE68A" stroke="#92400E" stroke-width="2" />
  <ellipse cx="380" cy="220" rx="50" ry="14" fill="#FEF3C7" stroke="#92400E" stroke-width="3" />
  <line x1="386" y1="220" x2="430" y2="220" stroke="#92400E" stroke-width="3" />
  <circle cx="280" cy="220" r="10" fill="#A855F7" />
  <text x="300" y="290" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Hair pushes into soil</text>
  <text x="300" y="320" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">to take in water and minerals</text>
  <rect x="400" y="60" width="160" height="280" rx="10" fill="#FECACA" stroke="#7F1D1D" stroke-width="4" />
  <text x="480" y="84" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#7F1D1D">Ciliated cell</text>
  <rect x="420" y="180" width="120" height="80" rx="6" fill="#FECACA" stroke="#7F1D1D" stroke-width="2" />
  <line x1="430" y1="180" x2="430" y2="160" stroke="#7F1D1D" stroke-width="2" />
  <line x1="446" y1="180" x2="446" y2="156" stroke="#7F1D1D" stroke-width="2" />
  <line x1="462" y1="180" x2="462" y2="160" stroke="#7F1D1D" stroke-width="2" />
  <line x1="478" y1="180" x2="478" y2="156" stroke="#7F1D1D" stroke-width="2" />
  <line x1="494" y1="180" x2="494" y2="160" stroke="#7F1D1D" stroke-width="2" />
  <line x1="510" y1="180" x2="510" y2="156" stroke="#7F1D1D" stroke-width="2" />
  <line x1="526" y1="180" x2="526" y2="160" stroke="#7F1D1D" stroke-width="2" />
  <circle cx="450" cy="220" r="10" fill="#A855F7" />
  <text x="480" y="290" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Cilia waft mucus and dust</text>
  <text x="480" y="320" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">up out of the airways</text>
</svg>
`.trim()

export const specialisedCells: SkillNode = {
  id: 'biology-cells-specialised-cells',
  title: 'Specialised Cells',
  description:
    'Meet six specialised cells that show the structure-function rule in action: red blood cell, sperm cell, root hair cell, ciliated epithelial cell, nerve cell, and palisade leaf cell. For each one, work out which adaptation matches which job, then practise picking the right cell for the right task.',
  subject: 'biology',
  realm: 'vitalia',
  zoneId: 'biology-cells',
  zoneName: 'Cells',
  tier: 'confident',
  prerequisites: ['biology-cells-animal-cell', 'biology-cells-plant-cell'],
  curriculum: {
    ks3Objective:
      'Cells as the fundamental unit of living organisms, including how to observe, interpret and record cell structure using a light microscope; the structural adaptations of some unicellular organisms; the hierarchical organisation of multicellular organisms: from cells to tissues to organs to systems to organisms.',
    awardingBodies: {
      aqa: '4.1.2.1 Cell specialisation (GCSE Biology 8461)',
      edexcel: 'CB1c Specialised cells (GCSE Biology 1BI0, Topic 1)',
      ocr: 'B1.1.2 Cell differentiation and specialisation (GCSE Biology A J247)',
    },
  },
  scenes: [
    {
      id: 'sc-scene-six-cells',
      title: 'Six Specialised Cells',
      type: 'labelled-diagram',
      instructions:
        'Click each cell to read its main job and the one feature that helps it do that job.',
      data: {
        svg: specialisedCellsSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'sc-hs-red-blood',
            x: 17,
            y: 30,
            label: 'Red blood cell',
            description:
              'Carries oxygen around the body. Has no nucleus, leaving more room for the red pigment haemoglobin that holds oxygen.',
          },
          {
            id: 'sc-hs-sperm',
            x: 62,
            y: 30,
            label: 'Sperm cell',
            description:
              'Carries the father\'s genetic information to the egg. Has a long tail to swim and many mitochondria to release energy for swimming.',
          },
          {
            id: 'sc-hs-root-hair',
            x: 88,
            y: 30,
            label: 'Root hair cell',
            description:
              'Takes in water and dissolved minerals from the soil. Has a long thin extension that pushes into the soil for a much larger surface.',
          },
          {
            id: 'sc-hs-ciliated',
            x: 20,
            y: 80,
            label: 'Ciliated epithelial cell',
            description:
              'Lines the airways. Has tiny hairs called cilia on top that waft mucus, dust, and bacteria up away from the lungs.',
          },
          {
            id: 'sc-hs-nerve',
            x: 48,
            y: 80,
            label: 'Nerve cell',
            description:
              'Carries electrical signals between parts of the body. Has a long thin shape so signals can travel far in one cell.',
          },
          {
            id: 'sc-hs-palisade',
            x: 82,
            y: 80,
            label: 'Palisade leaf cell',
            description:
              'Sits near the top of a leaf. Holds many chloroplasts and has a tall box shape so it can pack in plenty of light-trapping units.',
          },
        ],
      },
    },
    {
      id: 'sc-scene-red-blood',
      title: 'Why a Red Blood Cell Looks Like a Doughnut',
      type: 'labelled-diagram',
      instructions:
        'Click both views of the red blood cell to read why it has this unusual shape.',
      data: {
        svg: redBloodCellSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'sc-rbc-side',
            x: 30,
            y: 55,
            label: 'Biconcave shape',
            description:
              'Both faces curve inwards. This gives a much larger surface for oxygen to enter the cell, compared with a sphere of the same volume.',
          },
          {
            id: 'sc-rbc-top',
            x: 73,
            y: 55,
            label: 'No nucleus',
            description:
              'A red blood cell has no nucleus. The empty space leaves more room for haemoglobin, the red pigment that carries oxygen.',
          },
        ],
      },
    },
    {
      id: 'sc-scene-cell-jobs',
      title: 'Three Cells on the Job',
      type: 'labelled-diagram',
      instructions:
        'Click each cell drawing to see how its shape matches its job in the plant or in the body.',
      data: {
        svg: cellJobsSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'sc-job-palisade',
            x: 20,
            y: 50,
            label: 'Tall and packed with chloroplasts',
            description:
              'Tall box-shaped palisade cells line the top of a leaf. Their height lets each cell hold many chloroplasts in the brightest light.',
          },
          {
            id: 'sc-job-root-hair',
            x: 50,
            y: 60,
            label: 'Long hair into the soil',
            description:
              'A long thin extension reaches between soil grains. The extra surface area helps the root hair cell take in water and dissolved minerals.',
          },
          {
            id: 'sc-job-cilia',
            x: 80,
            y: 50,
            label: 'Cilia on top',
            description:
              'Tiny hairs on the upper surface beat together. They sweep mucus carrying dust and bacteria up the airway and out of the lungs.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'sc-worked-1',
      title: 'Reading a red blood cell from its picture',
      steps: [
        {
          explanation:
            'A specialised cell has a shape and parts that match its job. To read one, name the job first, then list the features that help.',
        },
        {
          explanation:
            'The job of a red blood cell is to carry oxygen from the lungs to every other cell in the body.',
        },
        {
          explanation:
            'Feature one: the cell is biconcave, meaning both faces curve inwards. This gives a large surface so oxygen can enter and leave easily.',
        },
        {
          explanation:
            'Feature two: a red blood cell has no nucleus. The empty space holds more haemoglobin, the red pigment that grabs oxygen in the lungs.',
        },
        {
          explanation:
            'Feature three: the cell is small and flexible, around 7 micrometres across. It can squeeze through narrow blood vessels called capillaries.',
        },
        {
          explanation:
            'A finished answer reads: a red blood cell carries oxygen; it is biconcave for surface area, has no nucleus to leave room for haemoglobin, and is small and flexible to fit through capillaries.',
        },
      ],
    },
    {
      id: 'sc-worked-2',
      title: 'Choosing the right cell for the job',
      steps: [
        {
          explanation:
            'A pupil is asked which specialised cell would suit a job listed in a question. The trick is to match the main demand of the job to one matching feature.',
        },
        {
          explanation:
            'Job: take in as much water as possible from the soil around a carrot plant. Demand: large surface area in contact with soil.',
        },
        {
          explanation:
            'Look for a cell whose shape gives a large surface in contact with soil. A root hair cell has a long thin hair that pushes between soil grains.',
        },
        {
          explanation:
            'Confirm by checking the location: root hair cells are found on the outside of plant roots, exactly where soil water is taken in.',
        },
        {
          explanation:
            'Final answer: a root hair cell is the best fit. Its long extension increases the surface area in contact with soil and dissolved minerals.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'sc-q1',
      type: 'multiple-choice',
      stem: 'Which feature of a red blood cell helps it carry as much oxygen as possible?',
      tier: 'core',
      options: [
        'It has a thick cell wall.',
        'It has no nucleus, leaving more room for haemoglobin.',
        'It contains many chloroplasts.',
        'It has a long tail for swimming.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'sc-mis-rbc-has-nucleus',
    },
    {
      id: 'sc-q2',
      type: 'multiple-choice',
      stem: 'A pupil sees a long thin cell with a tail. Which specialised cell is this most likely to be?',
      tier: 'core',
      options: ['Sperm cell', 'Red blood cell', 'Palisade leaf cell', 'Ciliated epithelial cell'],
      correctIndex: 0,
      xpValue: 10,
    },
    {
      id: 'sc-q3',
      type: 'multiple-choice',
      stem: 'Which job belongs to the ciliated epithelial cells that line the airways?',
      tier: 'core',
      options: [
        'Trapping light energy for photosynthesis.',
        'Carrying oxygen around the body.',
        'Wafting mucus and dust up away from the lungs.',
        'Taking in water from the soil.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'sc-mis-cilia-trap',
    },
    {
      id: 'sc-q4',
      type: 'multiple-choice',
      stem: 'Where in a plant would you expect to find palisade cells in greatest number?',
      tier: 'core',
      options: [
        'In the roots, below the soil.',
        'In the bark of an old tree.',
        'In the dead wood at the centre of a trunk.',
        'Near the top surface of a leaf.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'sc-mis-palisade-no-light',
    },
    {
      id: 'sc-q5',
      type: 'multiple-choice',
      stem: 'Which specialised cell carries the genetic information from the father to the egg?',
      tier: 'core',
      options: ['Nerve cell', 'Root hair cell', 'Sperm cell', 'Red blood cell'],
      correctIndex: 2,
      xpValue: 10,
    },
    {
      id: 'sc-q6',
      type: 'numeric-entry',
      stem: 'A red blood cell is roughly 7 micrometres across. How many such cells, placed in a row, would fit across 1 millimetre? Round to the nearest whole number. Note that 1 millimetre equals 1000 micrometres.',
      tier: 'core',
      correctAnswer: 143,
      tolerance: 1,
      xpValue: 15,
      hint: 'Divide 1000 micrometres by 7 micrometres per cell.',
    },
    {
      id: 'sc-q7',
      type: 'numeric-entry',
      stem: 'In a Year 7 class slide of palisade tissue from an oak leaf, 12 cells line up across 0.24 millimetres. What is the mean cell length in micrometres?',
      tier: 'core',
      correctAnswer: 20,
      unit: 'µm',
      xpValue: 15,
      hint: 'Divide the total length in millimetres by the number of cells, then convert to micrometres.',
    },
    {
      id: 'sc-q8',
      type: 'spot-misconception',
      stem: 'A pupil writes that a red blood cell "must have a nucleus, because every cell does."',
      tier: 'core',
      statements: [
        {
          text: 'The method is sound. Every cell, including a red blood cell, contains a nucleus.',
          isMisconception: true,
        },
        {
          text: 'The method is not sound. A mature red blood cell has lost its nucleus, leaving more room for haemoglobin to carry oxygen.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'sc-mis-rbc-has-nucleus',
    },
    {
      id: 'sc-q9',
      type: 'multiple-choice',
      stem: 'Which feature of a sperm cell directly helps it release the energy needed to swim to the egg?',
      tier: 'confident',
      options: [
        'A long tail.',
        'Many mitochondria packed into the midpiece.',
        'A nucleus carrying genetic information.',
        'A streamlined head.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'sc-mis-tail-makes-energy',
    },
    {
      id: 'sc-q10',
      type: 'multiple-choice',
      stem: 'Which feature of a root hair cell most increases the area in contact with soil water?',
      tier: 'confident',
      options: [
        'Its chloroplasts.',
        'Its long thin extension into the soil.',
        'Its cell wall.',
        'Its large permanent vacuole.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'sc-mis-root-hair-chloroplasts',
    },
    {
      id: 'sc-q11',
      type: 'drag-order',
      stem: 'Place these specialised cells in order from shortest to longest along the body, end to end.',
      tier: 'confident',
      items: [
        'Red blood cell, around 7 micrometres',
        'Palisade leaf cell, around 50 micrometres',
        'Ciliated epithelial cell, around 30 micrometres',
        'Nerve cell, up to 1 metre long',
      ],
      correctOrder: [0, 2, 1, 3],
      xpValue: 15,
      misconceptionId: 'sc-mis-cells-equal-size-spec',
    },
    {
      id: 'sc-q12',
      type: 'labelled-image',
      stem: 'Drag each label onto the correct specialised cell. Some labels in the pool do not match any cell shown.',
      tier: 'confident',
      svg: specialisedCellsSvg,
      viewBox: '0 0 600 400',
      hotspots: [
        { id: 'sc-q12-hs-rbc', x: 17, y: 30, correctLabel: 'Red blood cell' },
        { id: 'sc-q12-hs-sperm', x: 62, y: 30, correctLabel: 'Sperm cell' },
        { id: 'sc-q12-hs-root', x: 88, y: 30, correctLabel: 'Root hair cell' },
        { id: 'sc-q12-hs-ciliated', x: 20, y: 80, correctLabel: 'Ciliated epithelial cell' },
        { id: 'sc-q12-hs-nerve', x: 48, y: 80, correctLabel: 'Nerve cell' },
        { id: 'sc-q12-hs-palisade', x: 82, y: 80, correctLabel: 'Palisade leaf cell' },
      ],
      labels: [
        'Red blood cell',
        'Sperm cell',
        'Root hair cell',
        'Ciliated epithelial cell',
        'Nerve cell',
        'Palisade leaf cell',
        'Bacterial cell',
        'Bone tissue',
      ],
      xpValue: 20,
    },
    {
      id: 'sc-q13',
      type: 'drag-drop-builder',
      stem: 'Build a typical sperm cell. Drag in only the parts that belong inside one.',
      tier: 'confident',
      parts: [
        'Tail',
        'Many mitochondria',
        'Nucleus with genetic information',
        'Cell wall',
        'Chloroplasts',
        'Cilia along the side',
        'Streamlined head',
      ],
      correctArrangement: [
        'Tail',
        'Many mitochondria',
        'Nucleus with genetic information',
        'Streamlined head',
      ],
      xpValue: 20,
      misconceptionId: 'sc-mis-sperm-plant-features',
    },
    {
      id: 'sc-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step in this argument about why a palisade cell is shaped the way it is.',
      tier: 'confident',
      steps: [
        'A palisade cell sits near the top surface of a leaf, where light is brightest.',
        'The cell is tall and box shaped, far taller than it is wide.',
        null,
        'So the tall shape lets a palisade cell pack in many chloroplasts in the brightest light.',
      ],
      missingStepIndex: 2,
      correctStep:
        'A taller cell can hold more chloroplasts inside its cytoplasm than a short flat cell of the same width.',
      xpValue: 20,
    },
    {
      id: 'sc-q15',
      type: 'spot-misconception',
      stem: 'A pupil writes that "the long tail on a sperm cell makes the energy that powers the swim."',
      tier: 'confident',
      statements: [
        {
          text: 'The method is sound. The tail is what makes the energy for swimming.',
          isMisconception: true,
        },
        {
          text: 'The method is not sound. The tail provides the swimming motion. Energy is released by the many mitochondria packed into the midpiece.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'sc-mis-tail-makes-energy',
    },
    {
      id: 'sc-q16',
      type: 'multiple-choice',
      stem: 'A pupil draws a root hair cell and adds many green chloroplasts to it. What has gone wrong?',
      tier: 'confident',
      options: [
        'Nothing. Every plant cell contains chloroplasts.',
        'Root cells in dark soil get no light, so chloroplasts there would be useless and are not present.',
        'Chloroplasts are found only in animal cells, never in plant cells.',
        'Chloroplasts are found in roots but only in winter.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'sc-mis-root-hair-chloroplasts',
    },
    {
      id: 'sc-q17',
      type: 'numeric-entry',
      stem: 'A blood sample taken at a school nurse appointment in Sevenoaks holds 5 million red blood cells per cubic millimetre. A finger-prick drop of blood is 0.05 cubic millimetres. How many red blood cells are in that drop?',
      tier: 'challenge',
      correctAnswer: 250000,
      xpValue: 25,
      hint: 'Multiply the cells per cubic millimetre by the volume of the drop.',
    },
    {
      id: 'sc-q18',
      type: 'multiple-choice',
      stem: 'A pupil reads that smoking damages the cilia on the cells lining the airways. Which best explains why this raises the risk of chest infections?',
      tier: 'challenge',
      options: [
        'Without cilia, the cells stop respiring and die from a lack of energy.',
        'Damaged cilia cannot waft mucus, dust, and bacteria up out of the lungs, so they collect and infect the airways.',
        'Cilia carry oxygen, so without them the body cannot breathe at all.',
        'The cells turn into red blood cells instead, which cannot fight infection.',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'sc-mis-cilia-trap',
    },
    {
      id: 'sc-q19',
      type: 'data-extraction',
      stem: 'Which cell type from the table best matches a job that demands a very large surface area for taking in dissolved substances?',
      tier: 'challenge',
      dataSource:
        'A class measures three cells under the school microscope and works out the surface area to volume ratio: red blood cell 1.5, palisade leaf cell 0.6, root hair cell 4.2. Higher numbers mean more surface for the same volume.',
      correctAnswer: 'root hair cell',
      xpValue: 20,
      hint: 'Higher numbers mean more surface for the same volume. Pick the highest.',
    },
    {
      id: 'sc-q20',
      type: 'numeric-entry',
      stem: 'A nerve cell in the leg can run from the base of the spine to a toe, a distance of about 1 metre. A red blood cell is about 7 micrometres across. How many times longer is the nerve cell than the red blood cell? Note that 1 metre equals 1 000 000 micrometres. Round to the nearest whole number.',
      tier: 'challenge',
      correctAnswer: 142857,
      tolerance: 50,
      xpValue: 25,
      hint: 'Convert 1 metre to micrometres, then divide by 7.',
      misconceptionId: 'sc-mis-cells-equal-size-spec',
    },
    {
      id: 'sc-q21',
      type: 'multiple-choice',
      stem: 'A scientist studies cells from the lining of the windpipe and notices that they hold many more mitochondria than a typical skin cell. What does this best suggest?',
      tier: 'challenge',
      options: [
        'The lining cells use a lot of energy to keep their cilia beating to clear the airway.',
        'The lining cells must contain chloroplasts as well.',
        'The lining cells are growing into nerve cells.',
        'Skin cells do not respire at all.',
      ],
      correctIndex: 0,
      xpValue: 25,
    },
  ],
  misconceptions: [
    // Source: Edexcel GCSE Biology specification 1BI0, Topic 1 "Key concepts in biology", which describes mature red blood cells as having "no nucleus" so the cell can carry more haemoglobin. https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/Specification/gcse-biology-spec.pdf
    {
      id: 'sc-mis-rbc-has-nucleus',
      description: 'A red blood cell has a nucleus like every other animal cell.',
      triggerAnswer: 'rbc-nucleus',
      correction:
        'In fact, a mature red blood cell has lost its nucleus. The empty space holds more haemoglobin, the red pigment that carries oxygen.',
      reExplanation:
        'When a red blood cell forms in the bone marrow, it pushes its nucleus out before entering the bloodstream. This makes more room for haemoglobin and gives the cell its biconcave dimples. So one of its key adaptations is the missing nucleus, not an extra one.',
    },
    // Source: AQA GCSE Biology examiner reports flag the recurring confusion that the sperm tail "produces" or "makes" energy; the AQA 8461 specification 4.1.2.1 states a sperm cell "has many mitochondria" to release the energy needed for swimming. https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/specification/subject-content/cell-biology
    {
      id: 'sc-mis-tail-makes-energy',
      description: 'The tail of a sperm cell makes the energy that drives the swim.',
      triggerAnswer: 'tail-energy',
      correction:
        'Actually, the tail is the part that moves the cell through the liquid. The energy for swimming is released by the many mitochondria packed into the midpiece behind the head.',
      reExplanation:
        'A sperm cell is a tiny three-part craft: a head with the genetic information, a midpiece full of mitochondria, and a long tail. Mitochondria release the energy from sugars; the tail uses that energy to flick from side to side. Take away the mitochondria and the tail has nothing to drive it.',
    },
    // Source: Science and Plants for Schools (SAPS), "Misconceptions in Biology", on the recurring Year 7 idea that every plant cell holds chloroplasts; root cells do not, since no light reaches the soil. https://www.saps.org.uk/growth-hub/misconceptions-in-biology/
    {
      id: 'sc-mis-root-hair-chloroplasts',
      description: 'Root hair cells contain chloroplasts because they are plant cells.',
      triggerAnswer: 'root-chloroplasts',
      correction:
        'Actually, root hair cells live in dark soil where no light reaches. Chloroplasts there would be useless, so root cells contain none.',
      reExplanation:
        'Chloroplasts trap light for photosynthesis. The job of a root hair cell is to take in water and dissolved minerals, not to make food. Sugars made in leaf cells travel down to the roots through the plant. So when you draw a root hair cell, leave the chloroplasts out.',
    },
    // Source: Oak National Academy KS3 Biology lesson "Specialised cells are adapted for their functions", which flags the confusion that cilia "trap" particles when they actually waft trapped mucus along the airway. https://www.thenational.academy/teachers/programmes/science-secondary-ks3/units/cells/lessons/specialised-cells-are-adapted-for-their-functions
    {
      id: 'sc-mis-cilia-trap',
      description: 'Cilia on airway cells trap dust and bacteria like a comb.',
      triggerAnswer: 'cilia-trap',
      correction:
        'In fact, cilia do not catch particles themselves. Mucus on the cell surface traps the particles, and the cilia beat together to waft the mucus up out of the lungs.',
      reExplanation:
        'Picture an escalator carrying litter out of a tunnel. The mucus is the litter-catching surface; the cilia are the escalator. Together they keep the airways clear. Smoking damages the cilia, so the escalator stops and the trapped litter stays behind. That is why a cough builds up.',
    },
    // Source: AQA GCSE Biology specification 8461, section 4.1.2.1 "Cell specialisation", which lists nerve cells, sperm cells and red blood cells as examples whose sizes and shapes vary widely. https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/specification/subject-content/cell-biology
    {
      id: 'sc-mis-cells-equal-size-spec',
      description:
        'All specialised cells in the body are about the same size, since cells are too small to vary much.',
      triggerAnswer: 'spec-equal-size',
      correction:
        'Actually, cell sizes range over hundreds of thousands of times. A red blood cell is around 7 micrometres across; a nerve cell can stretch a whole metre.',
      reExplanation:
        'Each specialised cell is sized for its job. Red blood cells are tiny so they squeeze through narrow blood vessels. Nerve cells are long so a single cell can carry a signal from the spine to a toe without a break. Knowing one cell size never lets you guess another.',
    },
    // Source: AQA GCSE Biology Foundation tier (8461/1F) Report on the Examination, June 2022, comments on the Question 1 cell-structure responses, which note that students often add plant features to animal cells they are asked to draw. https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-84611F-WRE-%202022.PDF
    {
      id: 'sc-mis-sperm-plant-features',
      description: 'A sperm cell has plant cell features such as a cell wall or chloroplasts.',
      triggerAnswer: 'sperm-plant',
      correction:
        'In fact, a sperm cell is an animal cell. It has no cell wall, no chloroplasts, and no large permanent vacuole. Its only special features are the head, midpiece, and tail.',
      reExplanation:
        'Plant cell features such as cell walls and chloroplasts only ever appear on plant cells. A sperm cell is highly specialised but still an animal cell. When you build one, drag in only a streamlined head with a nucleus, a midpiece full of mitochondria, and a long tail. Leave the plant features in the plant cell pile.',
    },
    // Authored, no external source: classroom-observed Year 7 muddle on which cells are which animal vs plant under labelling tasks
    {
      id: 'sc-mis-palisade-no-light',
      description:
        'Palisade cells are at the bottom of a leaf, in the shade where photosynthesis works best.',
      triggerAnswer: 'palisade-shade',
      correction:
        'Actually, palisade cells line the top surface of a leaf, where light is brightest. Their tall shape lets each cell hold many chloroplasts in that bright light.',
      reExplanation:
        'A leaf takes in light from above. The palisade tissue forms the upper layer, just under a clear top skin. The cells line up like a row of tall green books standing on a shelf, with chloroplasts at the top of each book where the light shines strongest. The spongier cells underneath catch the leftover light.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
