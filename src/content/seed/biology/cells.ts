import type { SkillNode, Zone } from '@/types/content'

const animalCellSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <ellipse cx="300" cy="200" rx="240" ry="150" fill="#FCE7F3" stroke="#BE185D" stroke-width="4" />
  <circle cx="300" cy="200" r="55" fill="#A855F7" stroke="#5B21B6" stroke-width="3" />
  <circle cx="300" cy="200" r="20" fill="#7C3AED" />
  <ellipse cx="180" cy="140" rx="38" ry="18" fill="#F59E0B" stroke="#92400E" stroke-width="2" />
  <ellipse cx="430" cy="270" rx="32" ry="16" fill="#F59E0B" stroke="#92400E" stroke-width="2" />
  <circle cx="200" cy="280" r="6" fill="#1F2937" />
  <circle cx="222" cy="292" r="5" fill="#1F2937" />
  <circle cx="246" cy="284" r="5" fill="#1F2937" />
</svg>
`.trim()

const compareSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <ellipse cx="160" cy="200" rx="120" ry="120" fill="#FCE7F3" stroke="#BE185D" stroke-width="4" />
  <circle cx="160" cy="200" r="36" fill="#A855F7" stroke="#5B21B6" stroke-width="3" />
  <ellipse cx="115" cy="155" rx="22" ry="11" fill="#F59E0B" stroke="#92400E" stroke-width="2" />
  <ellipse cx="200" cy="245" rx="20" ry="10" fill="#F59E0B" stroke="#92400E" stroke-width="2" />
  <text x="160" y="350" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#1F2937">Animal cell</text>
  <rect x="320" y="80" width="240" height="240" rx="14" fill="#DCFCE7" stroke="#15803D" stroke-width="4" />
  <rect x="334" y="94" width="212" height="212" rx="6" fill="#BBF7D0" />
  <ellipse cx="440" cy="200" rx="32" ry="32" fill="#A855F7" stroke="#5B21B6" stroke-width="3" />
  <rect x="350" y="110" width="56" height="36" rx="6" fill="#16A34A" stroke="#14532D" stroke-width="2" />
  <rect x="468" y="252" width="56" height="36" rx="6" fill="#16A34A" stroke="#14532D" stroke-width="2" />
  <rect x="372" y="220" width="120" height="60" rx="8" fill="#86EFAC" stroke="#14532D" stroke-width="2" opacity="0.7" />
  <text x="440" y="350" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#1F2937">Plant cell</text>
</svg>
`.trim()

const hierarchySvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <circle cx="60" cy="320" r="22" fill="#A855F7" stroke="#5B21B6" stroke-width="2" />
  <rect x="140" y="290" width="80" height="60" rx="6" fill="#F59E0B" stroke="#92400E" stroke-width="2" />
  <ellipse cx="320" cy="320" rx="50" ry="38" fill="#EF4444" stroke="#7F1D1D" stroke-width="2" />
  <rect x="410" y="260" width="100" height="120" rx="8" fill="#3B82F6" stroke="#1E3A8A" stroke-width="2" />
  <circle cx="555" cy="320" r="32" fill="#22C55E" stroke="#14532D" stroke-width="2" />
  <line x1="82" y1="320" x2="140" y2="320" stroke="#374151" stroke-width="2" />
  <line x1="220" y1="320" x2="270" y2="320" stroke="#374151" stroke-width="2" />
  <line x1="370" y1="320" x2="410" y2="320" stroke="#374151" stroke-width="2" />
  <line x1="510" y1="320" x2="523" y2="320" stroke="#374151" stroke-width="2" />
  <text x="300" y="60" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#1F2937">From cell to organism</text>
</svg>
`.trim()

export const animalCell: SkillNode = {
  id: 'biology-cells-animal-cell',
  title: 'The Animal Cell',
  description:
    'Recognise the parts of an animal cell, learn what each part does, and see how animal cells differ from plant cells. Place animal cells in the wider hierarchy that runs from a single cell up to a whole organism.',
  subject: 'biology',
  realm: 'vitalia',
  zoneId: 'biology-cells',
  zoneName: 'Cells',
  tier: 'core',
  prerequisites: [],
  curriculum: {
    ks3Objective:
      'The functions of the cell wall, cell membrane, cytoplasm, nucleus, vacuole, mitochondria and chloroplasts; the similarities and differences between plant and animal cells.',
    awardingBodies: {
      aqa: '4.1.1.2 Animal and plant cells (GCSE Biology 8461)',
      edexcel: 'CB1a Plant and animal cells (GCSE Biology 1BI0, Topic 1)',
      ocr: 'B1.1.1 Cell structures (GCSE Biology A J247)',
    },
  },
  scenes: [
    {
      id: 'ac-scene-animal-cell',
      title: 'Inside an Animal Cell',
      type: 'labelled-diagram',
      instructions:
        'Click each part of the animal cell to reveal its name and what it does.',
      data: {
        svg: animalCellSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'ac-hs-membrane',
            x: 92,
            y: 22,
            label: 'Cell membrane',
            description:
              'Controls what enters and leaves the cell.',
          },
          {
            id: 'ac-hs-cytoplasm',
            x: 18,
            y: 65,
            label: 'Cytoplasm',
            description:
              'Jelly-like fluid where most cell reactions happen.',
          },
          {
            id: 'ac-hs-nucleus',
            x: 50,
            y: 50,
            label: 'Nucleus',
            description:
              'Holds the genetic information that controls the cell.',
          },
          {
            id: 'ac-hs-mitochondrion',
            x: 30,
            y: 35,
            label: 'Mitochondrion',
            description:
              'Releases energy from food during respiration.',
          },
          {
            id: 'ac-hs-ribosome',
            x: 37,
            y: 72,
            label: 'Ribosome',
            description:
              'Tiny dot where the cell builds proteins.',
          },
        ],
      },
    },
    {
      id: 'ac-scene-compare',
      title: 'Animal Cell and Plant Cell Side by Side',
      type: 'labelled-diagram',
      instructions:
        'Click the parts on the plant cell that the animal cell on the left does not have.',
      data: {
        svg: compareSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'ac-cmp-cell-wall',
            x: 87,
            y: 23,
            label: 'Cell wall',
            description:
              'Stiff outer layer in plant cells. Animal cells do not have one.',
          },
          {
            id: 'ac-cmp-chloroplast-1',
            x: 63,
            y: 32,
            label: 'Chloroplast',
            description:
              'Plant cell part where photosynthesis happens. Animal cells never contain chloroplasts.',
          },
          {
            id: 'ac-cmp-vacuole',
            x: 76,
            y: 63,
            label: 'Large permanent vacuole',
            description:
              'Sap-filled store inside plant cells. Animal cells do not have one.',
          },
          {
            id: 'ac-cmp-shared-nucleus',
            x: 73,
            y: 50,
            label: 'Nucleus',
            description:
              'Animal and plant cells both contain a nucleus.',
          },
          {
            id: 'ac-cmp-animal',
            x: 27,
            y: 50,
            label: 'Animal cell',
            description:
              'Has a cell membrane, cytoplasm, nucleus, and mitochondria.',
          },
        ],
      },
    },
    {
      id: 'ac-scene-hierarchy',
      title: 'From Cell to Organism',
      type: 'labelled-diagram',
      instructions:
        'Click each step in the row to read what level of organisation it shows.',
      data: {
        svg: hierarchySvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'ac-hier-cell',
            x: 10,
            y: 80,
            label: 'Cell',
            description:
              'A single muscle cell, the smallest living unit.',
          },
          {
            id: 'ac-hier-tissue',
            x: 30,
            y: 80,
            label: 'Tissue',
            description:
              'A group of similar cells working together, such as muscle tissue.',
          },
          {
            id: 'ac-hier-organ',
            x: 53,
            y: 80,
            label: 'Organ',
            description:
              'Different tissues working together to do one job, such as the heart.',
          },
          {
            id: 'ac-hier-system',
            x: 77,
            y: 80,
            label: 'Organ system',
            description:
              'Several organs working together, such as the circulatory system.',
          },
          {
            id: 'ac-hier-organism',
            x: 92,
            y: 80,
            label: 'Organism',
            description:
              'A complete living thing, such as a person.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'ac-worked-1',
      title: 'Reading the labels on an animal cell',
      steps: [
        {
          explanation:
            'An animal cell has four main parts a Year 7 learner is expected to recognise: cell membrane, cytoplasm, nucleus, and mitochondria.',
        },
        {
          explanation:
            'The cell membrane is the thin outer layer. It controls what passes into and out of the cell.',
        },
        {
          explanation:
            'The cytoplasm is the jelly-like fluid that fills most of the cell. Most chemical reactions happen here.',
        },
        {
          explanation:
            'The nucleus is the dark blob near the centre. It holds the genetic information that controls the cell.',
        },
        {
          explanation:
            'Mitochondria are bean-shaped parts. They release energy from glucose during respiration.',
        },
        {
          explanation:
            'A finished label set names cell membrane, cytoplasm, nucleus, and mitochondria, in any order.',
        },
      ],
    },
    {
      id: 'ac-worked-2',
      title: 'Spotting the differences between an animal and a plant cell',
      steps: [
        {
          explanation:
            'Both animal and plant cells contain a nucleus, cytoplasm, cell membrane, and mitochondria.',
        },
        {
          explanation:
            'Plant cells also have a stiff cell wall on the outside of the cell membrane. Animal cells do not.',
        },
        {
          explanation:
            'Plant cells contain chloroplasts, where photosynthesis happens. Animal cells never contain chloroplasts.',
        },
        {
          explanation:
            'Plant cells have a large permanent vacuole filled with cell sap. Animal cells do not have a large permanent vacuole.',
        },
        {
          explanation:
            'So a plant cell shows three structures that an animal cell does not: cell wall, chloroplasts, and a large permanent vacuole.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'ac-q1',
      type: 'multiple-choice',
      stem: 'Which of these structures is found in an animal cell?',
      tier: 'core',
      options: ['Chloroplast', 'Cell wall', 'Mitochondrion', 'Large permanent vacuole'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'ac-mis-chloroplasts',
    },
    {
      id: 'ac-q2',
      type: 'multiple-choice',
      stem: 'Which part of an animal cell controls what enters and leaves the cell?',
      tier: 'core',
      options: ['Nucleus', 'Cell membrane', 'Cytoplasm', 'Mitochondrion'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'ac-mis-nucleus-controls',
    },
    {
      id: 'ac-q3',
      type: 'multiple-choice',
      stem: 'Where is the genetic information of an animal cell stored?',
      tier: 'core',
      options: ['Cytoplasm', 'Mitochondrion', 'Nucleus', 'Cell membrane'],
      correctIndex: 2,
      xpValue: 10,
    },
    {
      id: 'ac-q4',
      type: 'numeric-entry',
      stem: 'How many of these five structures are found in animal cells: nucleus, cytoplasm, chloroplast, mitochondrion, cell membrane?',
      tier: 'core',
      correctAnswer: 4,
      xpValue: 10,
      hint: 'One of the five is a plant-only structure. Count the rest.',
    },
    {
      id: 'ac-q5',
      type: 'numeric-entry',
      stem: 'An animal cell is roughly 0.02 mm across. How many such cells, placed in a row, would fit across 1 mm?',
      tier: 'core',
      correctAnswer: 50,
      xpValue: 10,
      hint: 'How many lots of 0.02 mm fit into 1 mm?',
    },
    {
      id: 'ac-q6',
      type: 'spot-misconception',
      stem: 'A pupil writes that mitochondria "make energy" for the cell. Is this method sound?',
      tier: 'core',
      statements: [
        {
          text: 'The method is sound. Mitochondria create new energy from nothing.',
          isMisconception: true,
        },
        {
          text: 'The method is not sound. Mitochondria release energy from glucose during respiration; they do not create it.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'ac-mis-mitochondria-make-energy',
    },
    {
      id: 'ac-q7',
      type: 'drag-order',
      stem: 'Place these levels of organisation in order from smallest to largest.',
      tier: 'core',
      items: ['Tissue', 'Cell', 'Organ system', 'Organ', 'Organism'],
      correctOrder: [1, 0, 3, 2, 4],
      xpValue: 15,
      misconceptionId: 'ac-mis-scale-organism',
    },
    {
      id: 'ac-q8',
      type: 'multiple-choice',
      stem: 'A pupil draws a thick outer border around an animal cell and labels it "cell wall." What has gone wrong?',
      tier: 'confident',
      options: [
        'Nothing. Animal cells have a cell wall just like plant cells.',
        'The cell wall holds the cell shape, so animal cells must have one.',
        'Animal cells do not have a cell wall. The cell membrane is the outer layer.',
        'The cell wall and the cell membrane are two names for the same structure.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'ac-mis-cell-wall',
    },
    {
      id: 'ac-q9',
      type: 'labelled-image',
      stem: 'Drag each label onto the correct part of the animal cell.',
      tier: 'confident',
      svg: animalCellSvg,
      viewBox: '0 0 600 400',
      hotspots: [
        { id: 'ac-q9-hs-membrane', x: 92, y: 22, correctLabel: 'Cell membrane' },
        { id: 'ac-q9-hs-cytoplasm', x: 18, y: 65, correctLabel: 'Cytoplasm' },
        { id: 'ac-q9-hs-nucleus', x: 50, y: 50, correctLabel: 'Nucleus' },
        { id: 'ac-q9-hs-mitochondrion', x: 30, y: 35, correctLabel: 'Mitochondrion' },
      ],
      labels: [
        'Cell membrane',
        'Cytoplasm',
        'Nucleus',
        'Mitochondrion',
        'Chloroplast',
        'Cell wall',
        'Large permanent vacuole',
        'Ribosome',
      ],
      xpValue: 20,
    },
    {
      id: 'ac-q10',
      type: 'numeric-entry',
      stem: 'A muscle tissue contains 1500 cells. The school nurse measures that 4% are inflamed after a sports injury. How many cells are inflamed?',
      tier: 'confident',
      correctAnswer: 60,
      xpValue: 15,
      hint: 'Find 1% of 1500 first, then multiply by 4.',
    },
    {
      id: 'ac-q11',
      type: 'numeric-entry',
      stem: 'A microscope shows 8 cells along 0.16 mm of slide. What is the mean cell length in micrometres? Note that 1 mm equals 1000 micrometres.',
      tier: 'confident',
      correctAnswer: 20,
      unit: 'µm',
      xpValue: 15,
      hint: 'Divide the total length by the number of cells, then convert to micrometres.',
    },
    {
      id: 'ac-q12',
      type: 'drag-drop-builder',
      stem: 'Build an animal cell. Drag in only the parts that belong inside an animal cell.',
      tier: 'confident',
      parts: [
        'Cell membrane',
        'Cytoplasm',
        'Nucleus',
        'Mitochondrion',
        'Chloroplast',
        'Cell wall',
        'Large permanent vacuole',
      ],
      correctArrangement: ['Cell membrane', 'Cytoplasm', 'Nucleus', 'Mitochondrion'],
      xpValue: 20,
      misconceptionId: 'ac-mis-large-vacuole',
    },
    {
      id: 'ac-q13',
      type: 'spot-misconception',
      stem: 'A pupil says: "Skin cells, muscle cells, and nerve cells are all about the same size." Is this method sound?',
      tier: 'confident',
      statements: [
        {
          text: 'The method is sound. All cells in the body are roughly the same size.',
          isMisconception: true,
        },
        {
          text: 'The method is not sound. Cell sizes vary widely. Nerve cells can be many centimetres long, while red blood cells are only a few micrometres across.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'ac-mis-cells-equal-size',
    },
    {
      id: 'ac-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step in this comparison of an animal cell and a plant cell.',
      tier: 'confident',
      steps: [
        'Both animal and plant cells contain a nucleus, cytoplasm, cell membrane, and mitochondria.',
        'Plant cells also have a cell wall on the outside of the cell membrane.',
        null,
        'So a plant cell has three extra structures that an animal cell does not.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Plant cells also contain chloroplasts, where photosynthesis happens, and a large permanent vacuole filled with cell sap.',
      xpValue: 20,
    },
    {
      id: 'ac-q15',
      type: 'data-extraction',
      stem: 'Which cell is roughly four times the diameter of a red blood cell?',
      tier: 'confident',
      dataSource:
        'A scientist measures the diameter of three cell types on a slide: red blood cell 7 micrometres, skin cell 30 micrometres, muscle cell 60 micrometres.',
      correctAnswer: 'skin cell',
      xpValue: 15,
      hint: 'Divide each diameter by 7 and look for the result closest to 4.',
    },
    {
      id: 'ac-q16',
      type: 'labelled-image',
      stem: 'Drag each label onto the correct part of the animal cell. Some labels in the pool do not belong on this diagram.',
      tier: 'challenge',
      svg: animalCellSvg,
      viewBox: '0 0 600 400',
      hotspots: [
        { id: 'ac-q16-hs-membrane', x: 92, y: 22, correctLabel: 'Cell membrane' },
        { id: 'ac-q16-hs-cytoplasm', x: 18, y: 65, correctLabel: 'Cytoplasm' },
        { id: 'ac-q16-hs-nucleus', x: 50, y: 50, correctLabel: 'Nucleus' },
        { id: 'ac-q16-hs-mitochondrion', x: 30, y: 35, correctLabel: 'Mitochondrion' },
        { id: 'ac-q16-hs-ribosome', x: 37, y: 72, correctLabel: 'Ribosome' },
      ],
      labels: [
        'Cell membrane',
        'Cytoplasm',
        'Nucleus',
        'Mitochondrion',
        'Ribosome',
        'Chloroplast',
        'Cell wall',
        'Large permanent vacuole',
        'Palisade tissue',
        'Leaf',
      ],
      xpValue: 25,
    },
    {
      id: 'ac-q17',
      type: 'numeric-entry',
      stem: 'A school sample shows 240 cells in a 0.6 mm row of a slide. How many cells per millimetre is this?',
      tier: 'challenge',
      correctAnswer: 400,
      xpValue: 25,
      hint: 'Divide the number of cells by the length, then read the units.',
    },
    {
      id: 'ac-q18',
      type: 'multiple-choice',
      stem: 'A scientist sees that plant cells from a leaf contain green disc-shaped structures, but skin cells from a finger do not. Which conclusion is best supported?',
      tier: 'challenge',
      options: [
        'Skin cells have lost their chloroplasts because of damage.',
        'Animal cells do not need chloroplasts because they take in food rather than making it by photosynthesis.',
        'The microscope used for the skin cells must be broken.',
        'Skin cells are too small to fit chloroplasts inside.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'ac-mis-chloroplasts',
    },
    {
      id: 'ac-q19',
      type: 'numeric-entry',
      stem: 'Aisha studies 250 cells under a school microscope in Sevenoaks. Three fifths of them are skin cells; the rest are mixed tissue cells. Of the skin cells, 60 are damaged. How many skin cells are healthy in her sample?',
      tier: 'challenge',
      correctAnswer: 90,
      xpValue: 25,
      hint: 'First find how many of the 250 cells are skin cells, then subtract the damaged ones.',
    },
    {
      id: 'ac-q20',
      type: 'multiple-choice',
      stem: 'A muscle cell and a sperm cell both contain mitochondria, but a sperm cell has many more packed into its midpiece. What does this best suggest?',
      tier: 'challenge',
      options: [
        'Sperm cells need to release lots of energy in order to swim.',
        'Sperm cells must be larger than muscle cells, so more mitochondria fit.',
        'Mitochondria in sperm cells are smaller and easier to fit.',
        'Sperm cells are made only of mitochondria, with no other parts.',
      ],
      correctIndex: 0,
      xpValue: 20,
    },
  ],
  misconceptions: [
    // Source: CGP KS3 Biology Study Guide, "Common mistake" callout on plant vs animal cells (verify page)
    {
      id: 'ac-mis-cell-wall',
      description: 'Animal cells have a cell wall like plant cells.',
      triggerAnswer: 'cell-wall',
      correction:
        'Actually, the stiff cell wall is a plant-cell-only feature. Animal cells are held in shape by their cell membrane and cytoplasm, not a wall.',
      reExplanation:
        'Picture an animal cell as a soft jelly bag. The bag is the cell membrane. Plant cells need an extra rigid outer layer, the cell wall, because they have to support the plant against gravity. Animal bodies use bones and muscles for support, so animal cells do not need a wall.',
    },
    // Source: AQA GCSE Biology Foundation tier examiner reports, recurring confusion of plant and animal organelles (verify report year and Q reference)
    {
      id: 'ac-mis-chloroplasts',
      description: 'Animal cells contain chloroplasts.',
      triggerAnswer: 'chloroplasts',
      correction:
        'In fact, chloroplasts are found only in plant cells and some algae. Animal cells never contain chloroplasts.',
      reExplanation:
        'Chloroplasts hold the green pigment chlorophyll, which traps light energy for photosynthesis. Animals do not make their own food; they take it in by eating. So animal cells have no chloroplasts and no chlorophyll, which is why animal tissue is not green.',
    },
    // Source: CGP KS3 Biology Study Guide, "Common mistake" on respiration and the role of mitochondria (verify page)
    {
      id: 'ac-mis-mitochondria-make-energy',
      description: 'Mitochondria make or create energy for the cell.',
      triggerAnswer: 'make-energy',
      correction:
        'Actually, energy cannot be made or destroyed. Mitochondria release energy that is already stored in glucose, by joining it with oxygen during respiration.',
      reExplanation:
        'Glucose holds chemical energy. Inside a mitochondrion, glucose reacts with oxygen and the stored energy is transferred so the cell can use it. The mitochondrion is the place where this transfer happens, not a tiny battery factory making fresh energy.',
    },
    // Source: CGP KS3 Biology Study Guide, structure-and-function callout for nucleus and cell membrane (verify page)
    {
      id: 'ac-mis-nucleus-controls',
      description:
        'The nucleus controls what enters and leaves the cell.',
      triggerAnswer: 'nucleus-controls',
      correction:
        'Actually, the cell membrane controls what passes in and out. The nucleus controls the cell as a whole by storing the genetic instructions.',
      reExplanation:
        'Think of the cell membrane as the doorway and the nucleus as the head office. The doorway decides which substances are allowed in or out. The head office sets the rules for how the cell works overall.',
    },
    // Source: DfE KS3 Science exemplar materials on hierarchical organisation of multicellular organisms (verify exemplar)
    {
      id: 'ac-mis-scale-organism',
      description:
        'A single cell is the same as a tiny whole organism, so cells, tissues, organs, and organisms can be used interchangeably.',
      triggerAnswer: 'scale-organism',
      correction:
        'In fact, multicellular organisms are built in layers. Cells join to form tissues, tissues form organs, organs form organ systems, and these together form the whole organism.',
      reExplanation:
        'Look at the heart. A heart muscle cell is a single building block. Many of those cells make heart muscle tissue. Different tissues join to form the heart, which is one organ. The heart works with blood vessels in the circulatory system. The whole person is the organism.',
    },
    // Authored, no external source: classroom-observed Year 7 procedural slip on plant vs animal vacuoles
    {
      id: 'ac-mis-large-vacuole',
      description: 'Animal cells have a large permanent vacuole like plant cells.',
      triggerAnswer: 'large-vacuole',
      correction:
        'Actually, only plant cells have a large permanent vacuole. Animal cells may form small temporary vacuoles, but never a single large one.',
      reExplanation:
        'When you draw an animal cell, leave the inside as cytoplasm with the nucleus and a few mitochondria. Save the big sap-filled vacuole for the plant cell drawing, where it helps keep the plant firm.',
    },
    // Source: Edexcel GCSE Biology Foundation tier examiner reports, recurring observations on specialised cell sizes (verify report year and Q reference)
    {
      id: 'ac-mis-cells-equal-size',
      description: 'All cells in the body are about the same size.',
      triggerAnswer: 'equal-size',
      correction:
        'In fact, cell sizes vary widely. Red blood cells are only a few micrometres across, while some nerve cells stretch many centimetres from one part of the body to another.',
      reExplanation:
        'Cells are sized for the job they do. Red blood cells are small so they can squeeze through narrow blood vessels. Nerve cells need to be long so signals can travel between distant parts of the body without a break. Knowing one cell size does not let you guess any other.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

import { plantCell } from './plant-cell'

export const cellsZoneNodes: SkillNode[] = [animalCell, plantCell]

export const cellsZone: Zone = {
  id: 'biology-cells',
  name: 'Cells',
  realm: 'vitalia',
  nodeIds: [animalCell.id, plantCell.id],
}
