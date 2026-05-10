import type { SkillNode, Zone } from '@/types/content'

// =============================================================================
// Node 1: Photosynthesis Overview (Core, biology-photosynthesis-overview)
// =============================================================================
//
// Carbon dioxide and oxygen are written with Unicode subscripts (CO₂, O₂, H₂O)
// throughout this file. ASCII forms (CO2, H2O) are reserved for chemistry-side
// notation lessons later in Year 7. The Vitalia voice keeps the focus on the
// biology: leaf cells, chloroplasts, sunlight, the word equation. Symbol
// equations are explicitly out of scope at KS3.

const wordEquationSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="32" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">The word equation for photosynthesis</text>
  <rect x="20" y="100" width="140" height="80" rx="10" fill="#DBEAFE" stroke="#1D4ED8" stroke-width="2" />
  <text x="90" y="138" text-anchor="middle" font-family="sans-serif" font-size="15" fill="#1F2937">Carbon dioxide</text>
  <text x="90" y="160" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">(CO₂ from the air)</text>
  <text x="180" y="146" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#1F2937">+</text>
  <rect x="200" y="100" width="120" height="80" rx="10" fill="#DBEAFE" stroke="#1D4ED8" stroke-width="2" />
  <text x="260" y="138" text-anchor="middle" font-family="sans-serif" font-size="15" fill="#1F2937">Water</text>
  <text x="260" y="160" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">(H₂O from soil)</text>
  <text x="350" y="146" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#1F2937">→</text>
  <rect x="380" y="100" width="120" height="80" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="2" />
  <text x="440" y="138" text-anchor="middle" font-family="sans-serif" font-size="15" fill="#1F2937">Glucose</text>
  <text x="440" y="160" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">(stored as sugar)</text>
  <text x="530" y="146" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#1F2937">+</text>
  <rect x="500" y="200" width="80" height="60" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="2" />
  <text x="540" y="232" text-anchor="middle" font-family="sans-serif" font-size="15" fill="#1F2937">Oxygen</text>
  <text x="540" y="250" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">(O₂)</text>
  <line x1="510" y1="200" x2="510" y2="180" stroke="#374151" stroke-width="1" />
  <line x1="510" y1="200" x2="445" y2="180" stroke="#374151" stroke-width="1" />
  <text x="180" y="220" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Reactants</text>
  <text x="180" y="236" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">(what goes in)</text>
  <text x="430" y="280" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Products</text>
  <text x="430" y="296" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">(what comes out)</text>
  <ellipse cx="300" cy="320" rx="170" ry="40" fill="#FEF3C7" stroke="#92400E" stroke-width="2" />
  <text x="300" y="324" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">In the presence of light</text>
  <text x="300" y="346" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">trapped by chlorophyll in chloroplasts</text>
</svg>
`.trim()

const leafCellSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="28" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">Where photosynthesis happens: a leaf cell</text>
  <rect x="80" y="60" width="440" height="320" rx="14" fill="#DCFCE7" stroke="#15803D" stroke-width="4" />
  <rect x="94" y="74" width="412" height="292" rx="6" fill="#BBF7D0" />
  <ellipse cx="300" cy="220" rx="32" ry="32" fill="#A855F7" stroke="#5B21B6" stroke-width="3" />
  <rect x="120" y="100" width="60" height="40" rx="6" fill="#16A34A" stroke="#14532D" stroke-width="2" />
  <rect x="420" y="100" width="60" height="40" rx="6" fill="#16A34A" stroke="#14532D" stroke-width="2" />
  <rect x="120" y="270" width="60" height="40" rx="6" fill="#16A34A" stroke="#14532D" stroke-width="2" />
  <rect x="420" y="270" width="60" height="40" rx="6" fill="#16A34A" stroke="#14532D" stroke-width="2" />
  <rect x="240" y="120" width="60" height="40" rx="6" fill="#16A34A" stroke="#14532D" stroke-width="2" />
  <rect x="320" y="290" width="60" height="40" rx="6" fill="#16A34A" stroke="#14532D" stroke-width="2" />
  <rect x="200" y="320" width="160" height="40" rx="8" fill="#86EFAC" stroke="#14532D" stroke-width="2" opacity="0.7" />
  <text x="300" y="346" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Large permanent vacuole</text>
  <text x="150" y="126" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Chloroplast</text>
  <text x="450" y="126" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Chloroplast</text>
  <text x="300" y="218" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#FEF3C7">Nucleus</text>
</svg>
`.trim()

const leafLabelledBlankSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="28" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">Identify the leaf cell parts</text>
  <rect x="80" y="60" width="440" height="320" rx="14" fill="#DCFCE7" stroke="#15803D" stroke-width="4" />
  <rect x="94" y="74" width="412" height="292" rx="6" fill="#BBF7D0" />
  <ellipse cx="300" cy="220" rx="32" ry="32" fill="#A855F7" stroke="#5B21B6" stroke-width="3" />
  <rect x="120" y="100" width="60" height="40" rx="6" fill="#16A34A" stroke="#14532D" stroke-width="2" />
  <rect x="420" y="100" width="60" height="40" rx="6" fill="#16A34A" stroke="#14532D" stroke-width="2" />
  <rect x="200" y="320" width="160" height="40" rx="8" fill="#86EFAC" stroke="#14532D" stroke-width="2" opacity="0.7" />
</svg>
`.trim()

const compareRespirationSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="32" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">Photosynthesis is not the same as respiration</text>
  <rect x="20" y="60" width="270" height="310" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="3" />
  <text x="155" y="90" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#1F2937">Photosynthesis</text>
  <text x="155" y="120" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Plants only.</text>
  <text x="155" y="150" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">In: CO₂ + water + light</text>
  <text x="155" y="172" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Out: glucose + O₂</text>
  <text x="155" y="210" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Stores energy from</text>
  <text x="155" y="226" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">light into glucose.</text>
  <text x="155" y="260" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Place: chloroplasts</text>
  <text x="155" y="276" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">in green plant cells.</text>
  <text x="155" y="320" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">When: only in light.</text>
  <text x="155" y="350" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">(daytime for most plants)</text>
  <rect x="310" y="60" width="270" height="310" rx="10" fill="#FEE2E2" stroke="#7F1D1D" stroke-width="3" />
  <text x="445" y="90" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#1F2937">Respiration</text>
  <text x="445" y="120" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">All living cells (plants too).</text>
  <text x="445" y="150" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">In: glucose + O₂</text>
  <text x="445" y="172" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Out: CO₂ + water</text>
  <text x="445" y="210" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Releases the stored</text>
  <text x="445" y="226" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">energy from glucose.</text>
  <text x="445" y="260" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Place: mitochondria</text>
  <text x="445" y="276" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">in every cell.</text>
  <text x="445" y="320" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">When: all the time,</text>
  <text x="445" y="350" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">day and night.</text>
</svg>
`.trim()

export const photosynthesisOverview: SkillNode = {
  id: 'biology-photosynthesis-overview',
  title: 'Photosynthesis Overview',
  description:
    'Learn the word equation for photosynthesis and where it happens in a leaf cell. Sort photosynthesis from respiration so you do not swap them, and read why almost every food chain on Earth depends on plants trapping sunlight in their chloroplasts.',
  subject: 'biology',
  realm: 'vitalia',
  zoneId: 'biology-photosynthesis',
  zoneName: 'Photosynthesis',
  tier: 'core',
  prerequisites: ['biology-cells-plant-cell'],
  curriculum: {
    ks3Objective:
      'The reactants in, and products of, photosynthesis, and a word summary for photosynthesis; the dependence of almost all life on Earth on the ability of photosynthetic organisms, such as plants and algae, to use sunlight in photosynthesis to build organic molecules that are an essential energy store and to maintain levels of oxygen and carbon dioxide in the atmosphere.',
    awardingBodies: {
      aqa: '4.4.1.1 Photosynthesis: reaction and word equation (GCSE Biology 8461). Reactants, products, role of chlorophyll, location in chloroplasts.',
      edexcel: 'SB6a Photosynthesis (GCSE Biology 1BI0, Topic 6). Word equation, role of chlorophyll, location in chloroplasts.',
      ocr: 'B4.1.1 Photosynthesis (GCSE Biology A J247). Reactants, products, role of chlorophyll, location in chloroplasts.',
    },
  },
  scenes: [
    {
      id: 'po-scene-equation',
      title: 'The Word Equation',
      type: 'labelled-diagram',
      instructions:
        'Click each box of the word equation to read what it stands for and where it comes from.',
      data: {
        svg: wordEquationSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'po-eq-co2',
            x: 15,
            y: 35,
            label: 'Carbon dioxide (CO₂)',
            description:
              'A reactant. Plants take it in from the air through tiny holes called stomata in the leaf.',
          },
          {
            id: 'po-eq-water',
            x: 43,
            y: 35,
            label: 'Water (H₂O)',
            description:
              'A reactant. The roots draw water up from the soil and the stem carries it to the leaves.',
          },
          {
            id: 'po-eq-glucose',
            x: 73,
            y: 35,
            label: 'Glucose',
            description:
              'A product. A sugar that stores the energy first trapped from sunlight. The plant uses it later for growth and respiration.',
          },
          {
            id: 'po-eq-oxygen',
            x: 90,
            y: 60,
            label: 'Oxygen (O₂)',
            description:
              'A product. The plant releases it back to the air through the same stomata. Almost all the oxygen we breathe comes from photosynthesis.',
          },
          {
            id: 'po-eq-light',
            x: 50,
            y: 80,
            label: 'Light + chlorophyll',
            description:
              'Light is the energy source. Chlorophyll is the green pigment inside chloroplasts that traps the light. Without either, the reaction does not happen.',
          },
        ],
      },
    },
    {
      id: 'po-scene-leaf-cell',
      title: 'Where Photosynthesis Happens',
      type: 'labelled-diagram',
      instructions:
        'Click each part of the plant leaf cell to read what it does in photosynthesis.',
      data: {
        svg: leafCellSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'po-leaf-chloroplast',
            x: 25,
            y: 30,
            label: 'Chloroplast',
            description:
              'The green oval where photosynthesis happens. It holds chlorophyll. Animal cells never contain chloroplasts.',
          },
          {
            id: 'po-leaf-nucleus',
            x: 50,
            y: 55,
            label: 'Nucleus',
            description:
              'Holds the genetic information that controls the cell. Present in plant and animal cells.',
          },
          {
            id: 'po-leaf-vacuole',
            x: 50,
            y: 85,
            label: 'Large permanent vacuole',
            description:
              'A sap-filled store that helps keep the cell firm. Plant cells only.',
          },
          {
            id: 'po-leaf-cell-wall',
            x: 50,
            y: 12,
            label: 'Cell wall',
            description:
              'A stiff outer layer that supports the plant against gravity. Plant cells only.',
          },
        ],
      },
    },
    {
      id: 'po-scene-vs-respiration',
      title: 'Photosynthesis Versus Respiration',
      type: 'labelled-diagram',
      instructions:
        'Click each side to compare what photosynthesis and respiration take in, give out, and where they happen.',
      data: {
        svg: compareRespirationSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'po-vs-photo-where',
            x: 26,
            y: 70,
            label: 'Photosynthesis happens in chloroplasts',
            description:
              'Only in plant cells that contain chloroplasts. Most leaf cells do; root cells do not.',
          },
          {
            id: 'po-vs-photo-when',
            x: 26,
            y: 85,
            label: 'Photosynthesis only in light',
            description:
              'Chlorophyll needs light to trap the energy. With no light, the reaction stops.',
          },
          {
            id: 'po-vs-resp-where',
            x: 74,
            y: 70,
            label: 'Respiration happens in mitochondria',
            description:
              'In every living cell, including plant cells. Animals respire too, of course.',
          },
          {
            id: 'po-vs-resp-when',
            x: 74,
            y: 85,
            label: 'Respiration all the time',
            description:
              'Day and night, light or dark. Cells always need to release energy from glucose.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'po-worked-1',
      title: 'Building the word equation step by step',
      steps: [
        {
          explanation:
            'Photosynthesis is a chemical change inside the chloroplasts of green plant cells. Two things go in (the reactants) and two things come out (the products).',
        },
        {
          explanation:
            'The reactants are carbon dioxide (CO₂) and water (H₂O). Carbon dioxide comes from the air; water comes up from the soil through the roots.',
        },
        {
          explanation:
            'The products are glucose and oxygen (O₂). Glucose is a sugar the plant stores; oxygen is released back into the air.',
        },
        {
          explanation:
            'The reaction needs light energy, which is trapped by chlorophyll, the green pigment in chloroplasts. Without light or chlorophyll, photosynthesis cannot happen.',
        },
        {
          explanation:
            'Putting it together: carbon dioxide + water → glucose + oxygen, in the presence of light and chlorophyll.',
          maths: 'carbon dioxide + water → glucose + oxygen',
        },
      ],
    },
    {
      id: 'po-worked-2',
      title: 'Why a plant cell still respires, even though it photosynthesises',
      steps: [
        {
          explanation:
            'A plant cell has chloroplasts (for photosynthesis) AND mitochondria (for respiration). Both processes happen in the same cell.',
        },
        {
          explanation:
            'In light, photosynthesis stores energy from sunlight inside glucose. The plant builds up a sugar store.',
        },
        {
          explanation:
            'To use that stored energy later, the plant cell breaks the glucose back down using oxygen. This release of energy is respiration.',
        },
        {
          explanation:
            'At night, photosynthesis stops because there is no light. Respiration carries on, so the plant uses up oxygen and gives out CO₂, just like an animal.',
        },
        {
          explanation:
            'So the answer to "do plants only photosynthesise?" is no. They photosynthesise in light and they respire all the time.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'po-q1',
      type: 'multiple-choice',
      stem: 'Which two substances are the reactants of photosynthesis?',
      tier: 'core',
      options: [
        'Glucose and oxygen',
        'Carbon dioxide and water',
        'Glucose and water',
        'Oxygen and water',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'po-mis-equation-reversed',
    },
    {
      id: 'po-q2',
      type: 'multiple-choice',
      stem: 'Which two substances are the products of photosynthesis?',
      tier: 'core',
      options: [
        'Carbon dioxide and water',
        'Glucose and water',
        'Glucose and oxygen',
        'Oxygen and carbon dioxide',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'po-mis-equation-reversed',
    },
    {
      id: 'po-q3',
      type: 'multiple-choice',
      stem: 'In which part of a plant cell does photosynthesis happen?',
      tier: 'core',
      options: ['Mitochondrion', 'Nucleus', 'Cell wall', 'Chloroplast'],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'po-mis-photo-in-mitochondria',
    },
    {
      id: 'po-q4',
      type: 'multiple-choice',
      stem: 'What is the role of chlorophyll in photosynthesis?',
      tier: 'core',
      options: [
        'It traps the energy from light.',
        'It releases the oxygen into the air.',
        'It stores the glucose for later use.',
        'It pulls water up from the roots.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'po-mis-chlorophyll-makes-glucose',
    },
    {
      id: 'po-q5',
      type: 'multiple-choice',
      stem: 'Where does a plant get its carbon dioxide from?',
      tier: 'core',
      options: ['From the soil', 'From the air', 'From the sunlight', 'From the water in the stem'],
      correctIndex: 1,
      xpValue: 10,
    },
    {
      id: 'po-q6',
      type: 'multiple-choice',
      stem: 'Where does a plant get its water from?',
      tier: 'core',
      options: ['From the soil, taken up by the roots', 'From the air, breathed in by the leaves', 'From the chlorophyll', 'From the glucose store'],
      correctIndex: 0,
      xpValue: 10,
    },
    {
      id: 'po-q7',
      type: 'numeric-entry',
      stem: 'Photosynthesis has two reactants and two products. How many substances appear in the word equation in total?',
      tier: 'core',
      correctAnswer: 4,
      xpValue: 10,
      hint: 'Add the number of reactants to the number of products.',
    },
    {
      id: 'po-q8',
      type: 'spot-misconception',
      stem: 'A pupil writes that "plants only photosynthesise; they do not respire." Is this method sound?',
      tier: 'core',
      statements: [
        {
          text: 'The method is sound. Photosynthesis is the plant version of respiration.',
          isMisconception: true,
        },
        {
          text: 'The method is not sound. Plants both photosynthesise (in light) and respire (all the time). They are two different processes that share some chemicals.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'po-mis-plants-only-photosynthesise',
    },
    {
      id: 'po-q9',
      type: 'drag-order',
      stem: 'Place these stages in the order they happen for one molecule of CO₂ entering a leaf and ending up as part of stored glucose.',
      tier: 'confident',
      items: [
        'CO₂ enters the leaf through stomata.',
        'Glucose is stored.',
        'CO₂ reaches a chloroplast.',
        'Chlorophyll traps light energy.',
        'CO₂ joins with water to form glucose.',
      ],
      correctOrder: [0, 2, 3, 4, 1],
      xpValue: 15,
    },
    {
      id: 'po-q10',
      type: 'labelled-image',
      stem: 'Drag each label onto the correct part of the leaf cell. Two labels in the pool do not belong on this diagram.',
      tier: 'confident',
      svg: leafLabelledBlankSvg,
      viewBox: '0 0 600 400',
      hotspots: [
        { id: 'po-q10-hs-chloroplast', x: 25, y: 30, correctLabel: 'Chloroplast' },
        { id: 'po-q10-hs-nucleus', x: 50, y: 55, correctLabel: 'Nucleus' },
        { id: 'po-q10-hs-vacuole', x: 50, y: 85, correctLabel: 'Large permanent vacuole' },
      ],
      labels: [
        'Chloroplast',
        'Nucleus',
        'Large permanent vacuole',
        'Mitochondrion',
        'Cell membrane',
      ],
      xpValue: 20,
    },
    {
      id: 'po-q11',
      type: 'numeric-entry',
      stem: 'A pupil writes the word equation for photosynthesis but forgets oxygen. How many of the four substances has she written down?',
      tier: 'confident',
      correctAnswer: 3,
      xpValue: 15,
      hint: 'There are 4 substances in total. Subtract the missing one.',
    },
    {
      id: 'po-q12',
      type: 'multiple-choice',
      stem: 'Which gas does a plant give out during photosynthesis?',
      tier: 'confident',
      options: ['Carbon dioxide', 'Nitrogen', 'Water vapour', 'Oxygen'],
      correctIndex: 3,
      xpValue: 15,
    },
    {
      id: 'po-q13',
      type: 'multiple-choice',
      stem: 'Why is photosynthesis the foundation of almost every food chain on Earth?',
      tier: 'confident',
      options: [
        'It is the only source of water for animals.',
        'It traps energy from sunlight into glucose, which animals get when they eat plants.',
        'It removes all the oxygen from the atmosphere.',
        'It produces the salt that animals need.',
      ],
      correctIndex: 1,
      xpValue: 15,
    },
    {
      id: 'po-q14',
      type: 'spot-misconception',
      stem: 'A pupil says: "Photosynthesis happens in the mitochondria of a plant cell." Is this method sound?',
      tier: 'confident',
      statements: [
        {
          text: 'The method is sound. Mitochondria are the plant cell\'s energy maker.',
          isMisconception: true,
        },
        {
          text: 'The method is not sound. Photosynthesis happens in chloroplasts, not mitochondria. Mitochondria are where respiration happens.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'po-mis-photo-in-mitochondria',
    },
    {
      id: 'po-q15',
      type: 'drag-drop-builder',
      stem: 'Build the word equation for photosynthesis. Drag in only the four substances that appear, and place them in the correct order: reactants on the left, products on the right.',
      tier: 'confident',
      parts: [
        'Carbon dioxide',
        'Water',
        'Glucose',
        'Oxygen',
        'Nitrogen',
        'Chlorophyll',
        'Salt',
      ],
      correctArrangement: ['Carbon dioxide', 'Water', 'Glucose', 'Oxygen'],
      xpValue: 20,
      misconceptionId: 'po-mis-chlorophyll-is-product',
    },
    {
      id: 'po-q16',
      type: 'data-extraction',
      stem: 'Which jar is the one with the green plant?',
      tier: 'confident',
      dataSource:
        'Three sealed glass jars sit on a sunny windowsill in a Sevenoaks classroom. Each is sampled after 4 hours of sunlight. Oxygen reading inside each jar: A. Empty jar 21%. B. Jar with green plant 24%. C. Jar with dead twig 21%.',
      correctAnswer: 'b',
      xpValue: 15,
      hint: 'Look for the jar where oxygen has gone up.',
    },
    {
      id: 'po-q17',
      type: 'missing-step',
      stem: 'Fill in the missing step in this account of photosynthesis.',
      tier: 'challenge',
      steps: [
        'A leaf takes in carbon dioxide from the air through tiny holes called stomata.',
        'Water travels up from the roots, through the stem, and into the leaf.',
        null,
        'Glucose is stored in the leaf or sent to other parts of the plant. Oxygen is released back into the air through the stomata.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Inside chloroplasts, chlorophyll traps the energy from sunlight. The energy joins carbon dioxide with water to make glucose, and oxygen is given off as a product.',
      xpValue: 20,
    },
    {
      id: 'po-q18',
      type: 'free-text',
      stem: 'Explain in one or two sentences why a plant kept in the dark for a week loses mass even though it is watered each day.',
      tier: 'challenge',
      sampleAnswer:
        'In the dark there is no light, so photosynthesis stops, and the plant cannot build new glucose. Respiration carries on though, so the plant uses up its glucose store and loses mass.',
      keywords: ['dark', 'photosynthesis', 'respiration', 'glucose'],
      xpValue: 25,
      misconceptionId: 'po-mis-light-not-needed',
    },
    {
      id: 'po-q19',
      type: 'multiple-choice',
      stem: 'A pupil takes a leaf from a plant kept in the dark for 48 hours and tests it for starch. The test is negative (no starch). Which conclusion is best supported?',
      tier: 'challenge',
      options: [
        'Starch is no longer a product of photosynthesis in any plant.',
        'Starch only forms in roots, never in leaves.',
        'The leaf was already too old to make starch.',
        'Without light, photosynthesis cannot run, so no new glucose was made and no starch was stored.',
      ],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'po-mis-light-not-needed',
    },
    {
      id: 'po-q20',
      type: 'numeric-entry',
      stem: 'A Lake District oak leaf takes in 60 mg of CO₂ in one hour of bright sunlight. At the same rate, how many mg of CO₂ would the leaf take in across 4 hours of bright sunlight?',
      tier: 'challenge',
      correctAnswer: 240,
      unit: 'mg',
      xpValue: 25,
      hint: 'Multiply the hourly rate by the number of hours.',
    },
    {
      id: 'po-q21',
      type: 'multiple-choice',
      stem: 'A Sevenoaks pupil notices the air bubbles given off by Canadian pondweed in a beaker of water rise faster when she shines a torch on the beaker. Which conclusion is best supported?',
      tier: 'challenge',
      options: [
        'More light means the plant respires faster.',
        'More light means the plant photosynthesises faster, so it gives off more oxygen.',
        'The torch heats the water and makes it lose oxygen.',
        'The bubbles are made of carbon dioxide.',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'po-mis-photo-and-resp-swap',
    },
    {
      id: 'po-q22',
      type: 'numeric-entry',
      stem: 'In a Year 7 lesson, six pondweed beakers are tested. The total oxygen released across the six is 480 cm³ in 20 minutes. Each beaker gave off the same amount. What is the rate of oxygen given off, in cm³ per minute, for one beaker?',
      tier: 'challenge',
      correctAnswer: 4,
      unit: 'cm³/min',
      xpValue: 25,
      hint: 'First divide the total by 6 to get the per-beaker volume, then divide by 20 minutes.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Biology Foundation tier (8461/2F) Report on the Examination, June 2018, Q3 (photosynthesis): "Many candidates wrote that plants only respire at night and only photosynthesise during the day, missing that respiration happens continuously." https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2018/june/AQA-84612F-WRE-2018.PDF
    {
      id: 'po-mis-plants-only-photosynthesise',
      description:
        'Plants only photosynthesise; they do not respire.',
      triggerAnswer: 'plants-only-photosynthesise',
      correction:
        'In fact, plants both photosynthesise and respire. Photosynthesis happens only in light, in chloroplasts. Respiration happens all the time, in mitochondria, just as it does in animal cells.',
      reExplanation:
        'A plant cell has chloroplasts (for photosynthesis) and mitochondria (for respiration). In light, the plant builds glucose; at night, it uses up that store, taking in oxygen and giving out CO₂. Plants need to respire to release energy for growth, just like animals.',
    },
    // Source: CGP KS3 Science Complete Study and Practice (Higher), 2014 edition, p.140 "Common mistake" callout: pupils swap the inputs and outputs of photosynthesis with those of respiration. https://www.cgpbooks.co.uk/secondary-books/ks3/science/sht43-ks3-science-complete-study-practice
    {
      id: 'po-mis-equation-reversed',
      description:
        'Glucose and oxygen are the reactants of photosynthesis.',
      triggerAnswer: 'equation-reversed',
      correction:
        'Actually, that is the equation for respiration, not photosynthesis. In photosynthesis the plant takes in CO₂ and water, and gives out glucose and oxygen.',
      reExplanation:
        'Picture the two equations side by side. Photosynthesis: CO₂ + water → glucose + O₂. Respiration: glucose + O₂ → CO₂ + water. They are opposites. The reactants of one are the products of the other.',
    },
    // Source: Edexcel GCSE Biology (1BI0) Topic 6 examiner report 2019 (Photosynthesis): "A common error placed photosynthesis in the mitochondria, mixing it up with respiration." https://qualifications.pearson.com/en/qualifications/edexcel-gcses/sciences-2016.html
    {
      id: 'po-mis-photo-in-mitochondria',
      description:
        'Photosynthesis happens in the mitochondria of a plant cell.',
      triggerAnswer: 'photo-in-mitochondria',
      correction:
        'In fact, photosynthesis happens in chloroplasts, not mitochondria. Mitochondria are where respiration happens.',
      reExplanation:
        'Two organelles, two jobs. Chloroplasts contain chlorophyll and trap light to build glucose; only plant cells have them. Mitochondria release energy from glucose using oxygen; every living cell has them. The cells-slice misconception about animal cells lacking chloroplasts is the same idea seen from the other side.',
    },
    // Source: BBC Bitesize KS3 Biology, "Photosynthesis" topic page: explicit Common Misconception block on chlorophyll being treated as a reactant or product. https://www.bbc.co.uk/bitesize/topics/zpxnyrd
    {
      id: 'po-mis-chlorophyll-is-product',
      description:
        'Chlorophyll appears in the word equation for photosynthesis.',
      triggerAnswer: 'chlorophyll-in-equation',
      correction:
        'Actually, chlorophyll does not appear in the equation. It traps the light energy that drives the reaction, but it is not used up and not made.',
      reExplanation:
        'Chlorophyll is like a solar panel: it catches the sunlight, but the panel itself is not consumed. The four substances in the equation are CO₂, water, glucose, and oxygen. Light and chlorophyll sit above the arrow as the conditions, not in the list of reactants or products.',
    },
    // Source: AQA GCSE Biology specification 8461, section 4.4.1.1 "Photosynthesis": "the role of chlorophyll is to absorb light energy". Pupils often think chlorophyll itself "makes" the glucose. https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/specification/subject-content/bioenergetics
    {
      id: 'po-mis-chlorophyll-makes-glucose',
      description:
        'Chlorophyll makes the glucose during photosynthesis.',
      triggerAnswer: 'chlorophyll-makes-glucose',
      correction:
        'In fact, chlorophyll only traps the light energy. The reaction that joins CO₂ and water into glucose uses that energy, but chlorophyll is not the substance that becomes glucose.',
      reExplanation:
        'Think of chlorophyll as the cook\'s lighter, not the food. The lighter starts the cooker; the food itself is built from the ingredients (CO₂ and water). Glucose is the cooked product. Chlorophyll never becomes part of the glucose.',
    },
    // Source: DfE National Curriculum Science Programme of Study Key Stage 3 (2014), "Material cycles and energy" sub-content: explicitly requires pupils to grasp the dependence of light on photosynthesis. CGP KS3 Common Mistakes flag this as a frequent slip. https://www.gov.uk/government/publications/national-curriculum-in-england-science-programmes-of-study/national-curriculum-in-england-science-programmes-of-study
    {
      id: 'po-mis-light-not-needed',
      description:
        'Plants can photosynthesise in the dark.',
      triggerAnswer: 'light-not-needed',
      correction:
        'Actually, light is needed for photosynthesis to run. Without light there is no energy for chlorophyll to trap, and the reaction stops.',
      reExplanation:
        'A plant in the dark stops making glucose, but its cells still respire and use up the existing glucose store. After a few days the plant looks limp and pale; left long enough, it dies. Light is the energy input the equation depends on.',
    },
    // Source: AQA GCSE Biology Foundation tier (8461/2F) Report on the Examination, June 2019, Q4 (gas exchange): "Students often inverted the gas exchange of photosynthesis and respiration in plants, claiming plants take in oxygen during photosynthesis." https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2019/june/AQA-84612F-WRE-2019.PDF
    {
      id: 'po-mis-photo-and-resp-swap',
      description:
        'During photosynthesis, plants take in oxygen and give out carbon dioxide.',
      triggerAnswer: 'photo-resp-swap',
      correction:
        'In fact, during photosynthesis plants take in CO₂ and give out oxygen. The opposite is true for respiration. Mixing the two up is a very common slip.',
      reExplanation:
        'Two opposing gas swaps run in plants. Photosynthesis: CO₂ in, O₂ out (light only). Respiration: O₂ in, CO₂ out (all the time). In bright daylight a green plant gives off more O₂ than it uses, so the net effect is O₂ out. In the dark only respiration is running, so the net effect flips to CO₂ out.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const photosynthesisZoneNodes: SkillNode[] = [photosynthesisOverview]

export const photosynthesisZone: Zone = {
  id: 'biology-photosynthesis',
  name: 'Photosynthesis',
  realm: 'vitalia',
  nodeIds: [photosynthesisOverview.id],
}
