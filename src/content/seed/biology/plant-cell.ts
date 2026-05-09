import type { SkillNode } from '@/types/content'

const plantCellSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <rect x="40" y="40" width="520" height="320" rx="22" fill="#DCFCE7" stroke="#15803D" stroke-width="6" />
  <rect x="58" y="58" width="484" height="284" rx="14" fill="#BBF7D0" stroke="#16A34A" stroke-width="2" />
  <ellipse cx="320" cy="220" rx="170" ry="100" fill="#BFDBFE" stroke="#1D4ED8" stroke-width="3" opacity="0.8" />
  <circle cx="170" cy="200" r="46" fill="#A855F7" stroke="#5B21B6" stroke-width="3" />
  <circle cx="170" cy="200" r="16" fill="#7C3AED" />
  <rect x="100" y="100" width="44" height="28" rx="6" fill="#16A34A" stroke="#14532D" stroke-width="2" />
  <rect x="170" y="92" width="44" height="28" rx="6" fill="#16A34A" stroke="#14532D" stroke-width="2" />
  <rect x="240" y="108" width="44" height="28" rx="6" fill="#16A34A" stroke="#14532D" stroke-width="2" />
  <rect x="430" y="118" width="44" height="28" rx="6" fill="#16A34A" stroke="#14532D" stroke-width="2" />
  <rect x="450" y="290" width="44" height="28" rx="6" fill="#16A34A" stroke="#14532D" stroke-width="2" />
  <ellipse cx="120" cy="300" rx="22" ry="11" fill="#F59E0B" stroke="#92400E" stroke-width="2" />
  <ellipse cx="240" cy="310" rx="22" ry="11" fill="#F59E0B" stroke="#92400E" stroke-width="2" />
</svg>
`.trim()

const leafVsRootSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <rect x="40" y="60" width="240" height="280" rx="16" fill="#DCFCE7" stroke="#15803D" stroke-width="5" />
  <rect x="54" y="74" width="212" height="252" rx="8" fill="#BBF7D0" />
  <ellipse cx="160" cy="220" rx="80" ry="60" fill="#BFDBFE" stroke="#1D4ED8" stroke-width="2" opacity="0.7" />
  <circle cx="100" cy="120" r="24" fill="#A855F7" stroke="#5B21B6" stroke-width="2" />
  <rect x="60" y="160" width="30" height="20" rx="4" fill="#16A34A" stroke="#14532D" stroke-width="2" />
  <rect x="100" y="180" width="30" height="20" rx="4" fill="#16A34A" stroke="#14532D" stroke-width="2" />
  <rect x="60" y="220" width="30" height="20" rx="4" fill="#16A34A" stroke="#14532D" stroke-width="2" />
  <rect x="100" y="250" width="30" height="20" rx="4" fill="#16A34A" stroke="#14532D" stroke-width="2" />
  <rect x="200" y="160" width="30" height="20" rx="4" fill="#16A34A" stroke="#14532D" stroke-width="2" />
  <rect x="200" y="220" width="30" height="20" rx="4" fill="#16A34A" stroke="#14532D" stroke-width="2" />
  <rect x="200" y="280" width="30" height="20" rx="4" fill="#16A34A" stroke="#14532D" stroke-width="2" />
  <text x="160" y="370" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#1F2937">Leaf cell</text>
  <rect x="320" y="60" width="240" height="280" rx="16" fill="#FEF3C7" stroke="#92400E" stroke-width="5" />
  <rect x="334" y="74" width="212" height="252" rx="8" fill="#FDE68A" />
  <ellipse cx="440" cy="220" rx="80" ry="60" fill="#BFDBFE" stroke="#1D4ED8" stroke-width="2" opacity="0.7" />
  <circle cx="380" cy="120" r="24" fill="#A855F7" stroke="#5B21B6" stroke-width="2" />
  <ellipse cx="540" cy="200" rx="38" ry="14" fill="#FEF3C7" stroke="#92400E" stroke-width="3" />
  <line x1="546" y1="200" x2="586" y2="200" stroke="#92400E" stroke-width="3" />
  <text x="440" y="370" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#1F2937">Root cell</text>
</svg>
`.trim()

const turgidFlaccidSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <rect x="40" y="80" width="220" height="240" rx="16" fill="#DCFCE7" stroke="#15803D" stroke-width="6" />
  <rect x="56" y="96" width="188" height="208" rx="8" fill="#BBF7D0" />
  <ellipse cx="150" cy="200" rx="86" ry="86" fill="#60A5FA" stroke="#1D4ED8" stroke-width="3" opacity="0.85" />
  <circle cx="80" cy="120" r="14" fill="#A855F7" stroke="#5B21B6" stroke-width="2" />
  <text x="150" y="360" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#14532D">Vacuole full: cell is firm</text>
  <rect x="340" y="100" width="220" height="220" rx="16" fill="#DCFCE7" stroke="#15803D" stroke-width="6" stroke-dasharray="6 4" />
  <path d="M 354 116 Q 470 230 546 304 L 354 304 Z" fill="#BBF7D0" />
  <ellipse cx="450" cy="240" rx="50" ry="30" fill="#60A5FA" stroke="#1D4ED8" stroke-width="3" opacity="0.5" />
  <circle cx="392" cy="140" r="14" fill="#A855F7" stroke="#5B21B6" stroke-width="2" />
  <text x="450" y="360" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#7F1D1D">Vacuole low: cell wilts</text>
</svg>
`.trim()

export const plantCell: SkillNode = {
  id: 'biology-cells-plant-cell',
  title: 'The Plant Cell',
  description:
    'Recognise the parts of a plant cell, learn what each part does, and see why a leaf cell, a root cell, and a flower petal cell can all be plant cells but look very different. Build on the animal cell node by spotting which features are plant only.',
  subject: 'biology',
  realm: 'vitalia',
  zoneId: 'biology-cells',
  zoneName: 'Cells',
  tier: 'core',
  prerequisites: ['biology-cells-animal-cell'],
  curriculum: {
    ks3Objective:
      'The functions of the cell wall, cell membrane, cytoplasm, nucleus, vacuole, mitochondria and chloroplasts; the similarities and differences between plant and animal cells.',
    awardingBodies: {
      aqa: '4.1.1.2 Animal and plant cells (GCSE Biology 8461)',
      edexcel: 'CB1b Plant and animal cells (GCSE Biology 1BI0, Topic 1)',
      ocr: 'B1.1b Sub-cellular structures of eukaryotic cells (GCSE Biology A J247)',
    },
  },
  scenes: [
    {
      id: 'pc-scene-plant-cell',
      title: 'Inside a Plant Cell',
      type: 'labelled-diagram',
      instructions:
        'Click each part of this leaf cell to read what it is and what it does.',
      data: {
        svg: plantCellSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'pc-hs-cell-wall',
            x: 8,
            y: 12,
            label: 'Cell wall',
            description:
              'Stiff outer layer made of cellulose. Holds the cell shape and strengthens the plant.',
          },
          {
            id: 'pc-hs-cell-membrane',
            x: 12,
            y: 18,
            label: 'Cell membrane',
            description:
              'Thin layer just inside the cell wall. Controls what enters and leaves the cell.',
          },
          {
            id: 'pc-hs-cytoplasm',
            x: 80,
            y: 70,
            label: 'Cytoplasm',
            description:
              'Jelly-like fluid around the vacuole where most cell reactions happen.',
          },
          {
            id: 'pc-hs-nucleus',
            x: 28,
            y: 50,
            label: 'Nucleus',
            description:
              'Holds the genetic information that controls the cell.',
          },
          {
            id: 'pc-hs-vacuole',
            x: 53,
            y: 55,
            label: 'Large permanent vacuole',
            description:
              'Sap-filled store at the centre of the cell. The pressure of the sap helps the plant stay firm.',
          },
          {
            id: 'pc-hs-chloroplast',
            x: 42,
            y: 28,
            label: 'Chloroplast',
            description:
              'Green disc holding chlorophyll. Traps light energy for photosynthesis.',
          },
          {
            id: 'pc-hs-mitochondrion',
            x: 40,
            y: 78,
            label: 'Mitochondrion',
            description:
              'Releases energy from glucose during respiration. Plant cells respire too.',
          },
        ],
      },
    },
    {
      id: 'pc-scene-leaf-vs-root',
      title: 'Leaf Cell and Root Cell',
      type: 'labelled-diagram',
      instructions:
        'Click each label to see why a leaf cell looks green but a root cell does not.',
      data: {
        svg: leafVsRootSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'pc-cmp-leaf-chloroplasts',
            x: 25,
            y: 50,
            label: 'Many chloroplasts',
            description:
              'A leaf cell is packed with chloroplasts so it can trap as much light as possible for photosynthesis.',
          },
          {
            id: 'pc-cmp-root-no-chloroplasts',
            x: 70,
            y: 55,
            label: 'No chloroplasts',
            description:
              'A root cell sits in dark soil where no light reaches, so chloroplasts there would be useless.',
          },
          {
            id: 'pc-cmp-root-hair',
            x: 95,
            y: 50,
            label: 'Root hair',
            description:
              'A long thin extension on a root cell, used to take in water and dissolved minerals from the soil.',
          },
          {
            id: 'pc-cmp-shared-vacuole',
            x: 50,
            y: 60,
            label: 'Vacuole in both',
            description:
              'Leaf cells and root cells both have a large permanent vacuole. The vacuole is filled with cell sap.',
          },
          {
            id: 'pc-cmp-shared-nucleus',
            x: 17,
            y: 30,
            label: 'Nucleus in both',
            description:
              'Both cells have a nucleus that holds the genetic information.',
          },
        ],
      },
    },
    {
      id: 'pc-scene-turgor',
      title: 'Why a Thirsty Plant Wilts',
      type: 'labelled-diagram',
      instructions:
        'Click the two cells to read why one is firm and the other is wilted.',
      data: {
        svg: turgidFlaccidSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'pc-tg-firm',
            x: 25,
            y: 50,
            label: 'Firm cell',
            description:
              'The vacuole is full of cell sap. Sap pushes the cytoplasm out against the cell wall, so the cell holds its shape and the leaf stands up.',
          },
          {
            id: 'pc-tg-wilted',
            x: 75,
            y: 60,
            label: 'Wilted cell',
            description:
              'Without enough water the vacuole shrinks. The cell stops pushing on the wall, so the leaf droops.',
          },
          {
            id: 'pc-tg-water',
            x: 50,
            y: 90,
            label: 'Water in the vacuole',
            description:
              'Watering the soil refills the vacuoles in the leaf cells. Within a few hours the plant should stand back up.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'pc-worked-1',
      title: 'Labelling a typical leaf cell',
      steps: [
        {
          explanation:
            'A typical plant cell from a leaf has seven parts a Year 7 learner is expected to know: cell wall, cell membrane, cytoplasm, nucleus, large permanent vacuole, chloroplasts, and mitochondria.',
        },
        {
          explanation:
            'The cell wall is the stiff outer layer made of cellulose. It holds the cell in shape.',
        },
        {
          explanation:
            'Just inside the wall is the cell membrane. The membrane is the layer that controls what passes in and out.',
        },
        {
          explanation:
            'The cytoplasm is the jelly-like fluid around the central vacuole. Most chemical reactions happen there.',
        },
        {
          explanation:
            'The nucleus is the dark blob, often pushed to the side by the vacuole. It holds the genetic information.',
        },
        {
          explanation:
            'The large permanent vacuole sits in the middle, filled with cell sap. It helps the cell stay firm.',
        },
        {
          explanation:
            'Chloroplasts are the green discs around the edges. They trap light for photosynthesis.',
        },
        {
          explanation:
            'Mitochondria are bean shaped and release energy from glucose during respiration. A finished label set names all seven parts in any order.',
        },
      ],
    },
    {
      id: 'pc-worked-2',
      title: 'Comparing a leaf cell with an animal cell',
      steps: [
        {
          explanation:
            'Both leaf cells and animal cells contain a nucleus, cytoplasm, cell membrane, mitochondria, and ribosomes.',
        },
        {
          explanation:
            'Leaf cells also have a stiff cell wall on the outside of the cell membrane. Animal cells have no cell wall.',
        },
        {
          explanation:
            'Leaf cells contain chloroplasts, where photosynthesis happens. Animal cells never contain chloroplasts.',
        },
        {
          explanation:
            'Leaf cells have a large permanent vacuole filled with sap. Animal cells do not have a large permanent vacuole.',
        },
        {
          explanation:
            'So a leaf cell has three structures that an animal cell does not: cell wall, chloroplasts, and a large permanent vacuole.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pc-q1',
      type: 'multiple-choice',
      stem: 'Which of these structures is found in a leaf cell but never in an animal cell?',
      tier: 'core',
      options: ['Mitochondrion', 'Chloroplast', 'Cell membrane', 'Nucleus'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'plant-mis-all-cells-have-chloroplasts',
    },
    {
      id: 'pc-q2',
      type: 'multiple-choice',
      stem: 'Which part of a plant cell controls what enters and leaves the cell?',
      tier: 'core',
      options: ['Cell wall', 'Cell membrane', 'Vacuole', 'Cytoplasm'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'plant-mis-wall-controls-entry',
    },
    {
      id: 'pc-q3',
      type: 'multiple-choice',
      stem: 'Which type of plant cell would you expect to contain no chloroplasts?',
      tier: 'core',
      options: [
        'A leaf cell from a sycamore tree',
        'A cell from a green stem tip',
        'A root cell from a carrot growing in soil',
        'A cell from the green skin of a cucumber',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'plant-mis-all-cells-have-chloroplasts',
    },
    {
      id: 'pc-q4',
      type: 'numeric-entry',
      stem: 'How many of these seven parts are found in a typical leaf cell: cell wall, cell membrane, cytoplasm, nucleus, vacuole, chloroplasts, mitochondria?',
      tier: 'core',
      correctAnswer: 7,
      xpValue: 10,
      hint: 'A typical leaf cell has all seven of these parts.',
    },
    {
      id: 'pc-q5',
      type: 'spot-misconception',
      stem: 'A pupil writes that "plant cells do not need to respire because they get energy from photosynthesis." Is this method sound?',
      tier: 'core',
      statements: [
        {
          text: 'The method is sound. Photosynthesis gives plants their energy, so plant cells do not respire.',
          isMisconception: true,
        },
        {
          text: 'The method is not sound. Every living plant cell respires all the time. Photosynthesis is an extra job that only happens in the green parts when light is shining.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'plant-mis-no-respiration',
    },
    {
      id: 'pc-q6',
      type: 'drag-order',
      stem: 'A plant scientist takes cells from four parts of an oak tree. Place these cells in order from the part most likely to contain chloroplasts to the part least likely.',
      tier: 'core',
      items: ['Root cell from below the soil', 'Cell from the brown bark', 'Cell from a young green shoot', 'Cell from the middle of a sunlit leaf'],
      correctOrder: [3, 2, 1, 0],
      xpValue: 15,
      misconceptionId: 'plant-mis-all-cells-have-chloroplasts',
    },
    {
      id: 'pc-q7',
      type: 'multiple-choice',
      stem: 'A pupil claims that "every plant cell must be green because every plant is green." Which sentence corrects this best?',
      tier: 'core',
      options: [
        'Plant cells only look green if they hold chloroplasts. Carrot root cells, daffodil petal cells, and tree bark cells are not green.',
        'All plants are green because all their cells contain chlorophyll.',
        'Plant cells get their colour from the cell wall, which is always green.',
        'Plant cells are always green because plants make their own food.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'plant-mis-all-plants-green',
    },
    {
      id: 'pc-q8',
      type: 'multiple-choice',
      stem: 'A pupil writes that mitochondria "make new energy from nothing" inside plant cells. What has gone wrong?',
      tier: 'confident',
      options: [
        'Nothing. Plant mitochondria do create new energy.',
        'Mitochondria release energy that is already stored in glucose; they do not create it.',
        'Plant cells do not have mitochondria, so the question makes no sense.',
        'Mitochondria only release energy in animal cells, not plant cells.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'plant-mis-mitochondria-make-energy',
    },
    {
      id: 'pc-q9',
      type: 'numeric-entry',
      stem: 'A plant cell has a vacuole that holds 0.6 nanolitres of cell sap. After three days without water, only one quarter of that sap is left. How many nanolitres of sap remain?',
      tier: 'confident',
      correctAnswer: 0.15,
      tolerance: 0.005,
      unit: 'nL',
      xpValue: 15,
      hint: 'A quarter of 0.6 means 0.6 divided by 4.',
      misconceptionId: 'plant-mis-vacuole-empty',
    },
    {
      id: 'pc-q10',
      type: 'missing-step',
      stem: 'Fill in the missing step in this comparison of an oak leaf cell and a human cheek cell.',
      tier: 'confident',
      steps: [
        'Both the oak leaf cell and the cheek cell contain a nucleus, cytoplasm, cell membrane, and mitochondria.',
        'The oak leaf cell also has a stiff cell wall on the outside of the cell membrane.',
        null,
        'So the oak leaf cell has three structures that the cheek cell does not.',
      ],
      missingStepIndex: 2,
      correctStep:
        'The oak leaf cell also contains chloroplasts, where photosynthesis happens, and a large permanent vacuole filled with cell sap.',
      xpValue: 20,
    },
    {
      id: 'pc-q11',
      type: 'labelled-image',
      stem: 'Drag each label onto the correct part of the leaf cell.',
      tier: 'confident',
      svg: plantCellSvg,
      viewBox: '0 0 600 400',
      hotspots: [
        { id: 'pc-q11-hs-wall', x: 8, y: 12, correctLabel: 'Cell wall' },
        { id: 'pc-q11-hs-vacuole', x: 53, y: 55, correctLabel: 'Large permanent vacuole' },
        { id: 'pc-q11-hs-nucleus', x: 28, y: 50, correctLabel: 'Nucleus' },
        { id: 'pc-q11-hs-chloroplast', x: 42, y: 28, correctLabel: 'Chloroplast' },
      ],
      labels: [
        'Cell wall',
        'Large permanent vacuole',
        'Nucleus',
        'Chloroplast',
        'Cell membrane',
        'Mitochondrion',
        'Cytoplasm',
        'Ribosome',
      ],
      xpValue: 20,
    },
    {
      id: 'pc-q12',
      type: 'drag-drop-builder',
      stem: 'Build a typical leaf cell. Drag in only the parts that belong inside one.',
      tier: 'confident',
      parts: [
        'Cell wall',
        'Cell membrane',
        'Cytoplasm',
        'Nucleus',
        'Large permanent vacuole',
        'Chloroplast',
        'Mitochondrion',
        'Root hair extension',
      ],
      correctArrangement: [
        'Cell wall',
        'Cell membrane',
        'Cytoplasm',
        'Nucleus',
        'Large permanent vacuole',
        'Chloroplast',
        'Mitochondrion',
      ],
      xpValue: 20,
      misconceptionId: 'plant-mis-all-cells-have-chloroplasts',
    },
    {
      id: 'pc-q13',
      type: 'spot-misconception',
      stem: 'A pupil writes that "plants only respire at night, when they cannot do photosynthesis." Is this method sound?',
      tier: 'confident',
      statements: [
        {
          text: 'The method is sound. Plants photosynthesise during the day and respire only at night.',
          isMisconception: true,
        },
        {
          text: 'The method is not sound. Plant cells respire by day and by night. Photosynthesis is an extra process that runs only when light reaches the chloroplasts.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'plant-mis-respire-only-night',
    },
    {
      id: 'pc-q14',
      type: 'numeric-entry',
      stem: 'In a school greenhouse in Sevenoaks, a slide of palisade leaf tissue shows 40 cells in a row that is 0.8 mm long. What is the mean cell length in micrometres? Note that 1 mm equals 1000 micrometres.',
      tier: 'confident',
      correctAnswer: 20,
      unit: 'µm',
      xpValue: 15,
      hint: 'Divide the total length by the number of cells, then convert millimetres to micrometres.',
    },
    {
      id: 'pc-q15',
      type: 'multiple-choice',
      stem: 'Which sentence best matches the cell wall to its job?',
      tier: 'confident',
      options: [
        'The cell wall controls what enters and leaves the cell.',
        'The cell wall stores genetic information for the cell.',
        'The cell wall is a stiff outer layer that holds the cell in shape.',
        'The cell wall traps light energy for photosynthesis.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'plant-mis-wall-controls-entry',
    },
    {
      id: 'pc-q16',
      type: 'multiple-choice',
      stem: 'A potted basil plant on a kitchen windowsill in Tunbridge Wells goes a week without water. Its leaves droop. Which best explains why?',
      tier: 'challenge',
      options: [
        'The chloroplasts have died, so the leaves cannot stand up.',
        'The cell walls have become softer without water.',
        'The vacuoles have shrunk, so each cell stops pushing on its wall and the leaf droops.',
        'The mitochondria stop respiring without water, so the cells cannot stand up.',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'plant-mis-vacuole-empty',
    },
    {
      id: 'pc-q17',
      type: 'numeric-entry',
      stem: 'A Year 7 class examines 600 cells in a slide from an oak leaf. Three quarters of them are palisade cells; the rest are spongy cells. The teacher counts 30 chloroplasts in each palisade cell on average. How many chloroplasts in total are inside the palisade cells in this sample?',
      tier: 'challenge',
      correctAnswer: 13500,
      xpValue: 25,
      hint: 'First find how many of the 600 cells are palisade cells, then multiply by the chloroplast count.',
    },
    {
      id: 'pc-q18',
      type: 'numeric-entry',
      stem: 'A leaf is 4 cm long and 2 cm wide. A scientist estimates that there are 25 leaf cells per square millimetre on its top surface. How many leaf cells are on the top surface in total?',
      tier: 'challenge',
      correctAnswer: 20000,
      xpValue: 25,
      hint: 'Convert the leaf size into millimetres, find the area in square millimetres, then multiply by 25.',
    },
    {
      id: 'pc-q19',
      type: 'labelled-image',
      stem: 'Drag each label onto the correct part of the leaf cell. Some labels in the pool do not belong on a plant cell at all.',
      tier: 'challenge',
      svg: plantCellSvg,
      viewBox: '0 0 600 400',
      hotspots: [
        { id: 'pc-q19-hs-wall', x: 8, y: 12, correctLabel: 'Cell wall' },
        { id: 'pc-q19-hs-membrane', x: 12, y: 18, correctLabel: 'Cell membrane' },
        { id: 'pc-q19-hs-vacuole', x: 53, y: 55, correctLabel: 'Large permanent vacuole' },
        { id: 'pc-q19-hs-nucleus', x: 28, y: 50, correctLabel: 'Nucleus' },
        { id: 'pc-q19-hs-chloroplast', x: 42, y: 28, correctLabel: 'Chloroplast' },
        { id: 'pc-q19-hs-mitochondrion', x: 40, y: 78, correctLabel: 'Mitochondrion' },
      ],
      labels: [
        'Cell wall',
        'Cell membrane',
        'Large permanent vacuole',
        'Nucleus',
        'Chloroplast',
        'Mitochondrion',
        'Root hair extension',
        'Bone tissue',
        'Red blood cell',
        'Air sac',
      ],
      xpValue: 25,
    },
    {
      id: 'pc-q20',
      type: 'data-extraction',
      stem: 'Which cell type would be the best fit for a leaf that needs to trap as much light as possible at the top surface?',
      tier: 'challenge',
      dataSource:
        'A class counts the average number of chloroplasts in three plant cell types from a UK garden sample: palisade leaf cell 60, spongy leaf cell 18, root hair cell 0.',
      correctAnswer: 'palisade leaf cell',
      xpValue: 20,
      hint: 'A higher chloroplast count means the cell can trap more light. Pick the highest count.',
      misconceptionId: 'plant-mis-all-cells-have-chloroplasts',
    },
    {
      id: 'pc-q21',
      type: 'multiple-choice',
      stem: 'A scientist places a healthy pondweed shoot in a sealed dark box at 20 degrees Celsius and measures the gases over one hour. Which result fits a plant cell that respires but cannot photosynthesise in the dark?',
      tier: 'challenge',
      options: [
        'Oxygen rises and carbon dioxide falls inside the box.',
        'Oxygen falls and carbon dioxide rises inside the box.',
        'Both gases stay exactly the same because the plant has stopped working.',
        'Both gases rise because the plant respires twice as fast in the dark.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'plant-mis-no-respiration',
    },
  ],
  misconceptions: [
    // Source: SAPS (Science & Plants for Schools), Misconceptions in Biology, "Plant cells: Don't respire, they only carry out photosynthesis." https://www.saps.org.uk/growth-hub/misconceptions-in-biology/
    {
      id: 'plant-mis-no-respiration',
      description:
        'Plant cells do not respire because photosynthesis gives them their energy.',
      triggerAnswer: 'no-respiration',
      correction:
        'In fact, every living plant cell respires all the time, by day and by night. Photosynthesis is an extra job that only the green parts of a plant can do.',
      reExplanation:
        'Respiration releases energy from glucose for the cell. All living cells, plant or animal, need this energy to grow, repair, and stay alive. A potato in the dark store room is still alive and its cells are still respiring. Photosynthesis sits on top of respiration in green plant cells: it makes the glucose that respiration then uses, and only happens when light shines on the chloroplasts.',
    },
    // Source: SAPS, How can I model a plant cell at KS3? — chloroplasts framed as features of the green parts only. https://www.saps.org.uk/teaching-resources/resources/165/how-can-i-model-a-plant-cell-at-ks3/
    {
      id: 'plant-mis-all-cells-have-chloroplasts',
      description: 'Every plant cell contains chloroplasts.',
      triggerAnswer: 'all-have-chloroplasts',
      correction:
        'Actually, only cells in the green parts of a plant, mostly leaves and young stems, contain chloroplasts. Root cells live in the dark soil and have none.',
      reExplanation:
        'Chloroplasts trap light energy. A root cell is buried in dark soil where no light reaches, so a chloroplast there would be useless. Roots get their food from sugars carried down from the leaves, where the chloroplasts do the work. When you draw a typical plant cell from a leaf, fill it with chloroplasts; when you draw a root cell, leave them out.',
    },
    // Source: AQA GCSE Biology specification 8461, section 4.1.1.2 "Animal and plant cells" — distinguishes the cell membrane (controls movement of substances) from the cell wall (strengthens the cell). https://www.aqa.org.uk/subjects/science/gcse/biology-8461/specification/subject-content/cell-biology
    {
      id: 'plant-mis-wall-controls-entry',
      description:
        'The cell wall decides what enters and leaves a plant cell.',
      triggerAnswer: 'wall-controls',
      correction:
        'Actually, the cell membrane, which sits just inside the wall, controls what passes in and out. The cell wall is a stiff outer layer that gives the cell shape, not a doorway.',
      reExplanation:
        'Picture the plant cell as a soft jelly bag inside a cardboard box. The box is the cell wall: it holds the shape and lets water and dissolved sugars pass through. The bag is the cell membrane, just inside the wall, and it is the bag that decides which substances are allowed in or out. Both layers are needed, but they do different jobs.',
    },
    // Source: SAPS, How can I model a plant cell at KS3? — vacuole modelled as a "water-filled poly bag". https://www.saps.org.uk/teaching-resources/resources/165/how-can-i-model-a-plant-cell-at-ks3/
    {
      id: 'plant-mis-vacuole-empty',
      description: 'The large vacuole inside a plant cell is empty space.',
      triggerAnswer: 'vacuole-empty',
      correction:
        'In fact, the vacuole is filled with cell sap, a watery solution of sugars and salts. The pressure of this sap pushing outwards is what helps a plant stay firm and upright.',
      reExplanation:
        'Think of the vacuole as a water balloon at the centre of the cell. When the balloon is full, it pushes the rest of the cell outwards against the wall, and the plant feels firm. When the plant has too little water, the balloons empty, the cells stop pushing, and the leaves droop. That is why a thirsty house plant wilts. Animal cells have no large permanent vacuole at all.',
    },
    // Source: SAPS, Misconceptions in Biology — "Aerobic respiration: Uses carbon dioxide and water and produces glucose and oxygen" reframes the energy transfer. https://www.saps.org.uk/growth-hub/misconceptions-in-biology/
    {
      id: 'plant-mis-mitochondria-make-energy',
      description: 'Mitochondria make new energy for the cell.',
      triggerAnswer: 'make-energy',
      correction:
        'Actually, energy cannot be made or destroyed. Mitochondria release energy that is already stored in glucose, by joining it with oxygen during respiration.',
      reExplanation:
        'Glucose holds chemical energy. Inside a mitochondrion, glucose reacts with oxygen and the stored energy is transferred so the cell can use it. The mitochondrion is the place where this transfer happens, not a tiny battery factory making fresh energy. Plant cells contain mitochondria too, because plants respire just like animals do.',
    },
    // Source: SAPS, Misconceptions in Biology — "Plant cells: Respire in the dark but not in the light." https://www.saps.org.uk/growth-hub/misconceptions-in-biology/
    {
      id: 'plant-mis-respire-only-night',
      description:
        'Plants respire only at night, when they cannot photosynthesise.',
      triggerAnswer: 'respire-only-night',
      correction:
        'Actually, plant cells respire at all times, day and night. Photosynthesis is an extra process that runs in the green parts of the plant whenever light reaches the chloroplasts.',
      reExplanation:
        'Daytime confuses people because the plant takes in carbon dioxide for photosynthesis at the same time as releasing it from respiration. The respiration carbon dioxide gets used up before it can leave. So you do not see it, but the cells are still respiring. At night photosynthesis stops, only respiration carries on, and now the carbon dioxide does leak out of the leaves.',
    },
    // Authored, no external source: Year 7 classroom-observed muddle on plant pigments and the colour of plants
    {
      id: 'plant-mis-all-plants-green',
      description:
        'Every part of a plant is green because every plant cell is green.',
      triggerAnswer: 'all-plants-green',
      correction:
        'Actually, only the cells with chloroplasts look green. Roots, tree bark, and pale stems are made of plant cells that contain no chloroplasts and so are not green.',
      reExplanation:
        'Chloroplasts hold the green pigment chlorophyll. A leaf cell is packed with chloroplasts, so the whole leaf looks green. A carrot root cell holds bright orange pigments instead. A daffodil petal cell holds yellow pigments. A tree bark cell is made of dead corky tissue with no pigment at all. Plant colour comes from the pigment a cell happens to hold.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
