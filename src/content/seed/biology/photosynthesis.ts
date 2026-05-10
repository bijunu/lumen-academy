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

// =============================================================================
// Node 2: Rate of Photosynthesis (Confident, biology-photosynthesis-rate)
// =============================================================================
//
// Scope guards (Year 7):
//   - Limiting factors stay qualitative. NO numerical rate calculations across
//     the question pool, NO inverse-square law for light intensity, NO
//     compensation point depth.
//   - Light, CO₂, and temperature graphs are read shape-by-shape: rising,
//     plateau, peak, decline. The peak-and-decline at high temperature is
//     framed as "enzymes denature", not via Q10 or activation-energy depth.
//   - Pondweed bubble counting uses Cabomba or Elodea (UK lab classics) in a
//     beaker with a lamp at varying distances. Bubble-count is explicitly the
//     proxy for rate; we do not introduce gas-collection apparatus.

const limitingFactorsConceptSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="28" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">Three things that can limit photosynthesis</text>
  <rect x="40" y="80" width="160" height="120" rx="10" fill="#FEF3C7" stroke="#92400E" stroke-width="3" />
  <text x="120" y="110" text-anchor="middle" font-family="sans-serif" font-size="15" fill="#1F2937">Light intensity</text>
  <text x="120" y="138" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Brighter light</text>
  <text x="120" y="156" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">means more energy</text>
  <text x="120" y="174" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">trapped by chlorophyll.</text>
  <rect x="220" y="80" width="160" height="120" rx="10" fill="#DBEAFE" stroke="#1D4ED8" stroke-width="3" />
  <text x="300" y="110" text-anchor="middle" font-family="sans-serif" font-size="15" fill="#1F2937">CO₂ concentration</text>
  <text x="300" y="138" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">More CO₂ means</text>
  <text x="300" y="156" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">more reactant for</text>
  <text x="300" y="174" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">the reaction.</text>
  <rect x="400" y="80" width="160" height="120" rx="10" fill="#FECACA" stroke="#7F1D1D" stroke-width="3" />
  <text x="480" y="110" text-anchor="middle" font-family="sans-serif" font-size="15" fill="#1F2937">Temperature</text>
  <text x="480" y="138" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Warmer up to a peak</text>
  <text x="480" y="156" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">helps; too hot makes</text>
  <text x="480" y="174" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">enzymes denature.</text>
  <text x="300" y="240" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">A limiting factor is the one running short.</text>
  <text x="300" y="262" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Add more of it and the rate goes up.</text>
  <text x="300" y="284" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Add more of any other factor and the rate stays the same.</text>
  <line x1="80" y1="310" x2="520" y2="310" stroke="#1F2937" stroke-width="1.5" />
  <text x="300" y="332" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">If light is in short supply, light is the limiting factor.</text>
  <text x="300" y="352" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">If CO₂ is in short supply, CO₂ is the limiting factor.</text>
  <text x="300" y="372" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Only one factor is limiting at a time.</text>
</svg>
`.trim()

const threeRateGraphsSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="24" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#1F2937">Rate of photosynthesis vs three factors</text>
  <line x1="40" y1="170" x2="200" y2="170" stroke="#1F2937" stroke-width="1.5" />
  <line x1="40" y1="50" x2="40" y2="170" stroke="#1F2937" stroke-width="1.5" />
  <text x="120" y="186" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">light intensity</text>
  <text x="22" y="110" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937" transform="rotate(-90 22 110)">rate</text>
  <path d="M 40 165 Q 80 130 120 90 L 200 70" fill="none" stroke="#92400E" stroke-width="2.5" />
  <text x="120" y="44" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Rises, then plateaus.</text>
  <text x="120" y="200" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#1F2937">Light is no longer limiting at high values.</text>
  <line x1="220" y1="170" x2="380" y2="170" stroke="#1F2937" stroke-width="1.5" />
  <line x1="220" y1="50" x2="220" y2="170" stroke="#1F2937" stroke-width="1.5" />
  <text x="300" y="186" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">CO₂ concentration</text>
  <text x="202" y="110" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937" transform="rotate(-90 202 110)">rate</text>
  <path d="M 220 165 Q 260 130 300 90 L 380 75" fill="none" stroke="#1D4ED8" stroke-width="2.5" />
  <text x="300" y="44" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Same shape: rises, then plateaus.</text>
  <text x="300" y="200" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#1F2937">CO₂ is no longer limiting at high values.</text>
  <line x1="400" y1="170" x2="560" y2="170" stroke="#1F2937" stroke-width="1.5" />
  <line x1="400" y1="50" x2="400" y2="170" stroke="#1F2937" stroke-width="1.5" />
  <text x="480" y="186" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">temperature (°C)</text>
  <text x="382" y="110" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937" transform="rotate(-90 382 110)">rate</text>
  <path d="M 400 165 Q 430 110 470 70 Q 500 60 510 70 Q 530 90 560 160" fill="none" stroke="#7F1D1D" stroke-width="2.5" />
  <text x="490" y="62" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#1F2937">peak ~40 °C</text>
  <text x="480" y="44" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Rises to a peak, then falls.</text>
  <text x="480" y="200" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#1F2937">Above ~40 °C enzymes denature.</text>
  <text x="300" y="240" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">All three graphs share a common idea:</text>
  <text x="300" y="260" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">add more of the factor, rate rises until something else takes over.</text>
  <text x="300" y="290" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">For light and CO₂ the curve plateaus.</text>
  <text x="300" y="310" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">For temperature it peaks then falls because enzymes break down.</text>
  <text x="300" y="350" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Year 7 reads the shape; numerical rate calculations come later.</text>
</svg>
`.trim()

const pondweedExperimentSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="28" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">Counting bubbles from pondweed</text>
  <rect x="240" y="120" width="160" height="180" rx="6" fill="#DBEAFE" stroke="#1D4ED8" stroke-width="3" />
  <rect x="252" y="135" width="136" height="158" rx="3" fill="#BFDBFE" />
  <path d="M 280 290 Q 310 230 320 200 Q 330 170 360 160" fill="none" stroke="#15803D" stroke-width="3" />
  <path d="M 280 290 Q 280 250 295 230" fill="none" stroke="#15803D" stroke-width="3" />
  <path d="M 320 200 L 314 196 M 320 200 L 326 196 M 360 160 L 354 156 M 360 160 L 366 156" stroke="#15803D" stroke-width="2" />
  <circle cx="305" cy="220" r="3" fill="#FFFFFF" stroke="#1D4ED8" />
  <circle cx="318" cy="200" r="3" fill="#FFFFFF" stroke="#1D4ED8" />
  <circle cx="332" cy="180" r="3" fill="#FFFFFF" stroke="#1D4ED8" />
  <circle cx="346" cy="160" r="3" fill="#FFFFFF" stroke="#1D4ED8" />
  <circle cx="360" cy="146" r="3" fill="#FFFFFF" stroke="#1D4ED8" />
  <text x="320" y="318" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">beaker of water + pondweed (Cabomba)</text>
  <circle cx="100" cy="180" r="38" fill="#FCD34D" stroke="#92400E" stroke-width="2" />
  <line x1="100" y1="120" x2="100" y2="100" stroke="#92400E" stroke-width="2" />
  <line x1="100" y1="240" x2="100" y2="260" stroke="#92400E" stroke-width="2" />
  <line x1="40" y1="180" x2="60" y2="180" stroke="#92400E" stroke-width="2" />
  <line x1="140" y1="180" x2="160" y2="180" stroke="#92400E" stroke-width="2" />
  <line x1="60" y1="135" x2="76" y2="151" stroke="#92400E" stroke-width="2" />
  <line x1="124" y1="151" x2="140" y2="135" stroke="#92400E" stroke-width="2" />
  <line x1="60" y1="225" x2="76" y2="209" stroke="#92400E" stroke-width="2" />
  <line x1="124" y1="209" x2="140" y2="225" stroke="#92400E" stroke-width="2" />
  <text x="100" y="310" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">lamp</text>
  <line x1="160" y1="180" x2="240" y2="180" stroke="#92400E" stroke-width="1.5" stroke-dasharray="4 3" />
  <text x="200" y="172" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">distance d</text>
  <text x="500" y="120" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Method</text>
  <text x="500" y="142" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">1. Set lamp at distance d.</text>
  <text x="500" y="160" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">2. Wait 2 minutes to settle.</text>
  <text x="500" y="178" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">3. Count bubbles per minute.</text>
  <text x="500" y="196" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">4. Move lamp closer; repeat.</text>
  <text x="500" y="222" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">More bubbles per minute</text>
  <text x="500" y="238" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">means a faster rate of</text>
  <text x="500" y="254" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">photosynthesis.</text>
  <text x="500" y="284" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">The bubbles are oxygen,</text>
  <text x="500" y="300" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">a product of the reaction.</text>
</svg>
`.trim()

export const photosynthesisRate: SkillNode = {
  id: 'biology-photosynthesis-rate',
  title: 'Rate of Photosynthesis',
  description:
    'Find out what speeds up and what slows down photosynthesis. Read qualitative graphs of rate against light intensity, CO₂ concentration, and temperature, and run a Year 7 pondweed bubble-counting experiment to test the effect of light.',
  subject: 'biology',
  realm: 'vitalia',
  zoneId: 'biology-photosynthesis',
  zoneName: 'Photosynthesis',
  tier: 'confident',
  prerequisites: ['biology-photosynthesis-overview'],
  curriculum: {
    ks3Objective:
      'The reactants in, and products of, photosynthesis, and a word summary for photosynthesis; the adaptations of leaves for photosynthesis.',
    awardingBodies: {
      aqa: '4.4.1.2 Rate of photosynthesis; limiting factors (GCSE Biology 8461). Light intensity, CO₂ concentration, temperature; required practical 6.',
      edexcel: 'SB6b Limiting factors and the rate of photosynthesis (GCSE Biology 1BI0, Topic 6). Light, CO₂, and temperature; pondweed core practical.',
      ocr: 'B4.1.2 Rate of photosynthesis (GCSE Biology A J247). Limiting factors and qualitative graphs.',
    },
  },
  scenes: [
    {
      id: 'pr-scene-concept',
      title: 'What Limits Photosynthesis?',
      type: 'labelled-diagram',
      instructions:
        'Click each card to read what makes that factor speed up or slow down photosynthesis.',
      data: {
        svg: limitingFactorsConceptSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'pr-hs-light',
            x: 20,
            y: 35,
            label: 'Light intensity',
            description:
              'Brighter light gives chlorophyll more energy to trap. With no light, photosynthesis stops. With more light, the rate goes up until something else takes over.',
          },
          {
            id: 'pr-hs-co2',
            x: 50,
            y: 35,
            label: 'CO₂ concentration',
            description:
              'CO₂ is one of the reactants. With more CO₂ in the air around a leaf, the rate goes up until something else (like light) is in short supply.',
          },
          {
            id: 'pr-hs-temp',
            x: 80,
            y: 35,
            label: 'Temperature',
            description:
              'Warmer makes the reaction go faster up to a peak around 40 °C. Above the peak, enzymes inside the chloroplast denature and the rate falls.',
          },
          {
            id: 'pr-hs-meaning',
            x: 50,
            y: 65,
            label: 'A limiting factor is the one running short',
            description:
              'Add more of the limiting factor and the rate goes up. Add more of anything else and the rate stays the same. Only one factor is limiting at a time.',
          },
        ],
      },
    },
    {
      id: 'pr-scene-graphs',
      title: 'Three Qualitative Graphs',
      type: 'labelled-diagram',
      instructions:
        'Click each graph or shared idea to read what its shape tells you about the limiting factor.',
      data: {
        svg: threeRateGraphsSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'pr-hs-graph-light',
            x: 20,
            y: 30,
            label: 'Rate vs light intensity',
            description:
              'The line rises at first as light is the limiting factor. At higher light values the line plateaus, because something else (often CO₂ or temperature) becomes limiting.',
          },
          {
            id: 'pr-hs-graph-co2',
            x: 50,
            y: 30,
            label: 'Rate vs CO₂ concentration',
            description:
              'Same shape as the light graph. Rate rises as CO₂ becomes the limiting factor, then plateaus when something else takes over.',
          },
          {
            id: 'pr-hs-graph-temp',
            x: 80,
            y: 30,
            label: 'Rate vs temperature',
            description:
              'The shape is different. The line rises to a peak around 40 °C, then falls. Above the peak the chloroplast enzymes denature, so the reaction slows even though it is hotter.',
          },
          {
            id: 'pr-hs-shared',
            x: 50,
            y: 75,
            label: 'Shared idea',
            description:
              'Add more of the limiting factor, rate rises. Once that factor stops being limiting, the curve flattens (light, CO₂) or falls because of damage (high temperature).',
          },
        ],
      },
    },
    {
      id: 'pr-scene-pondweed',
      title: 'Counting Pondweed Bubbles',
      type: 'labelled-diagram',
      instructions:
        'Click each part of the pondweed setup to read what it does and what bubble counts tell you.',
      data: {
        svg: pondweedExperimentSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'pr-hs-pw-pondweed',
            x: 53,
            y: 60,
            label: 'Pondweed (Cabomba or Elodea)',
            description:
              'A green water plant kept in a beaker of water. As it photosynthesises, oxygen comes off as bubbles from the cut stem.',
          },
          {
            id: 'pr-hs-pw-bubbles',
            x: 56,
            y: 45,
            label: 'Oxygen bubbles',
            description:
              'Each bubble is oxygen, a product of photosynthesis. Bubbles per minute is the proxy for the rate of photosynthesis.',
          },
          {
            id: 'pr-hs-pw-lamp',
            x: 17,
            y: 45,
            label: 'Lamp',
            description:
              'The light source. Move it closer for higher light intensity, further away for lower intensity. Use the same bulb so the colour and brightness type stay the same.',
          },
          {
            id: 'pr-hs-pw-distance',
            x: 33,
            y: 43,
            label: 'Distance d',
            description:
              'The independent variable. We change the distance and measure how the bubble count responds. Other variables (water temperature, CO₂ from sodium hydrogen carbonate, plant size) are kept the same.',
          },
          {
            id: 'pr-hs-pw-method',
            x: 84,
            y: 45,
            label: 'Method',
            description:
              'Set distance, wait 2 minutes for the rate to settle, count bubbles for 1 minute. Repeat at smaller distances. The closer the lamp, the brighter the light, the more bubbles per minute.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'pr-worked-1',
      title: 'Reading the rate-vs-light-intensity graph',
      steps: [
        {
          explanation:
            'A class plots bubbles per minute (rate) against the lamp distance turned into a light intensity value. The graph rises at first, then flattens out.',
        },
        {
          explanation:
            'In the rising part, light is the limiting factor. More light, more energy, more rate.',
        },
        {
          explanation:
            'Where the line flattens, light is no longer limiting. Adding more light does not push the rate up, so something else has taken over (the CO₂ in the water, or the temperature of the beaker).',
        },
        {
          explanation:
            'To check, the class adds extra CO₂ to the beaker (a few crystals of sodium hydrogen carbonate). The rate rises again at high light values. So CO₂ was the new limiting factor in the flat part of the original graph.',
        },
        {
          explanation:
            'Conclusion: only one factor is limiting at a time. The shape of the graph tells you when the limiting factor has changed.',
        },
      ],
    },
    {
      id: 'pr-worked-2',
      title: 'Why the temperature graph peaks and falls (with a missing step)',
      steps: [
        {
          explanation:
            'A pondweed beaker is warmed slowly from 10 °C to 50 °C. The class records bubble count every 5 °C.',
        },
        {
          explanation:
            'From 10 °C to about 40 °C the bubble count rises. Warmer particles move faster, so reactions go faster. Temperature is acting as a useful supply.',
        },
        {
          explanation:
            'Around 40 °C the bubble count peaks. The reaction is now running as fast as the chloroplast can handle.',
        },
        // Missing step (filled in by the worked example)
        {
          explanation:
            'Above 40 °C the bubble count falls fast. The high temperature has changed the shape of the enzymes inside the chloroplast. We say the enzymes have denatured, so they no longer work.',
        },
        {
          explanation:
            'So the temperature graph rises, peaks near 40 °C, then falls. This is why a real plant in a Sevenoaks heatwave will not photosynthesise faster; if the leaves get too hot, the rate drops.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pr-q1',
      type: 'multiple-choice',
      stem: 'Which of these is a limiting factor for the rate of photosynthesis?',
      tier: 'core',
      options: ['Air pressure', 'Light intensity', 'The colour of the pot', 'The age of the soil'],
      correctIndex: 1,
      xpValue: 10,
    },
    {
      id: 'pr-q2',
      type: 'multiple-choice',
      stem: 'Which gas, when added to the air around a leaf, will usually increase the rate of photosynthesis?',
      tier: 'core',
      options: ['Nitrogen', 'Oxygen', 'Carbon dioxide', 'Argon'],
      correctIndex: 2,
      xpValue: 10,
    },
    {
      id: 'pr-q3',
      type: 'multiple-choice',
      stem: 'In a Year 7 pondweed experiment, what does each oxygen bubble released from the cut stem tell you?',
      tier: 'core',
      options: [
        'The plant is respiring.',
        'The water is too hot.',
        'Photosynthesis is taking place.',
        'The plant has used up its glucose.',
      ],
      correctIndex: 2,
      xpValue: 10,
    },
    {
      id: 'pr-q4',
      type: 'multiple-choice',
      stem: 'A class moves the lamp from 30 cm to 10 cm away from the beaker of pondweed. What should happen to the bubble count per minute?',
      tier: 'core',
      options: [
        'It should rise, because closer light is brighter.',
        'It should fall, because closer light is dimmer.',
        'It should stay the same.',
        'It should fall to zero.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pr-mis-distance-direct',
    },
    {
      id: 'pr-q5',
      type: 'multiple-choice',
      stem: 'On a graph of rate of photosynthesis against light intensity, the line rises and then plateaus. What does the plateau mean?',
      tier: 'core',
      options: [
        'Light is no longer the limiting factor; something else has taken over.',
        'Light has become the only limiting factor.',
        'The plant has died.',
        'The plant is now respiring instead.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pr-mis-plateau-means-stopped',
    },
    {
      id: 'pr-q6',
      type: 'multiple-choice',
      stem: 'On a graph of rate of photosynthesis against temperature, the line rises to a peak around 40 °C and then falls. Why does the rate fall above the peak?',
      tier: 'core',
      options: [
        'The plant runs out of water.',
        'The chloroplast enzymes denature.',
        'The CO₂ becomes a gas.',
        'The light bulb has switched off.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pr-mis-warmer-always-faster',
    },
    {
      id: 'pr-q7',
      type: 'numeric-entry',
      stem: 'A class counts 18 pondweed bubbles over half a minute. What is the rate in bubbles per minute?',
      tier: 'core',
      correctAnswer: 36,
      unit: 'bubbles/min',
      xpValue: 10,
      hint: 'There are two 30-second halves in a minute.',
    },
    {
      id: 'pr-q8',
      type: 'numeric-entry',
      stem: 'A class lists the named limiting factors covered in this lesson: light intensity, CO₂ concentration, and temperature. How many limiting factors is that?',
      tier: 'core',
      correctAnswer: 3,
      xpValue: 10,
    },
    {
      id: 'pr-q9',
      type: 'spot-misconception',
      stem: 'A pupil writes that "warmer water always speeds up photosynthesis, so 50 °C is better than 40 °C." Is this method sound?',
      tier: 'confident',
      statements: [
        {
          text: 'The method is sound. More heat means more energy.',
          isMisconception: true,
        },
        {
          text: 'The method is not sound. Above the peak around 40 °C the chloroplast enzymes denature, so the rate falls. Warmer is only better up to the peak.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pr-mis-warmer-always-faster',
    },
    {
      id: 'pr-q10',
      type: 'data-extraction',
      stem: 'A Year 7 class runs the pondweed experiment at five lamp distances. Which distance gives the highest rate of photosynthesis?',
      tier: 'confident',
      dataSource:
        'Bubble counts per minute from a Sevenoaks Y7 pondweed experiment. Distance 50 cm: 4 bubbles/min. Distance 40 cm: 7 bubbles/min. Distance 30 cm: 12 bubbles/min. Distance 20 cm: 22 bubbles/min. Distance 10 cm: 30 bubbles/min.',
      correctAnswer: '10 cm',
      xpValue: 15,
      hint: 'Smaller distance means brighter light.',
    },
    {
      id: 'pr-q11',
      type: 'numeric-entry',
      stem: 'In the same Sevenoaks Y7 pondweed experiment (50 cm gave 4, 40 cm gave 7, 30 cm gave 12, 20 cm gave 22, 10 cm gave 30 bubbles per minute), how many extra bubbles per minute came from moving the lamp from 30 cm to 10 cm?',
      tier: 'confident',
      correctAnswer: 18,
      unit: 'bubbles/min',
      xpValue: 15,
      hint: 'Subtract the 30 cm rate from the 10 cm rate.',
    },
    {
      id: 'pr-q12',
      type: 'spot-misconception',
      stem: 'A class plots rate of photosynthesis against CO₂ concentration. The line rises and then flattens. A pupil writes "the flat part means CO₂ has become the only limiting factor." Is this method sound?',
      tier: 'confident',
      statements: [
        {
          text: 'The method is sound. A flat line means the named factor is now the limiting one.',
          isMisconception: true,
        },
        {
          text: 'The method is not sound. The flat part means CO₂ is no longer the limiting factor; something else (light or temperature) has taken over.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pr-mis-plateau-means-stopped',
    },
    {
      id: 'pr-q13',
      type: 'drag-order',
      stem: 'Place these stages of the pondweed bubble-counting experiment in the correct order.',
      tier: 'confident',
      items: [
        'Move the lamp closer and repeat the count.',
        'Set up a beaker of water with a piece of pondweed.',
        'Count the bubbles per minute coming from the cut stem.',
        'Place the lamp at a measured distance from the beaker.',
        'Wait two minutes for the rate to settle.',
      ],
      correctOrder: [1, 3, 4, 2, 0],
      xpValue: 15,
    },
    {
      id: 'pr-q14',
      type: 'multiple-choice',
      stem: 'Which statement about limiting factors is correct?',
      tier: 'challenge',
      options: [
        'Light, CO₂, and temperature all limit the rate at the same time.',
        'Only one factor is limiting at a time, whichever is in shortest supply.',
        'Once a factor has been limiting, it stays limiting forever.',
        'Limiting factors only matter for plants growing outside.',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'pr-mis-many-limiting-at-once',
    },
    {
      id: 'pr-q15',
      type: 'data-extraction',
      stem: 'A pupil shines a torch on a Cabomba beaker. The steady bubble count is 8 per minute. After adding a few crystals of sodium hydrogen carbonate to raise CO₂, the rate jumps to 14 per minute. Which factor was most likely limiting before the crystals were added: light, CO₂, or temperature?',
      tier: 'confident',
      dataSource:
        'Pondweed bubble counts in a Sevenoaks Y7 lab. Setup: Cabomba pondweed under a steady torch. Before adding sodium hydrogen carbonate: 8 bubbles/min. After adding sodium hydrogen carbonate: 14 bubbles/min.',
      correctAnswer: 'co2',
      xpValue: 15,
      hint: 'The change that pushed the rate up tells you which factor was running short before.',
    },
    {
      id: 'pr-q16',
      type: 'drag-drop-builder',
      stem: 'Build a list of the variables a Year 7 class should keep the same in the pondweed experiment when changing the lamp distance. Drag in only the variables to keep constant; leave the changed variable behind.',
      tier: 'confident',
      parts: [
        'Water temperature',
        'CO₂ supply',
        'Size of pondweed',
        'Lamp bulb',
        'Lamp distance',
      ],
      correctArrangement: [
        'Water temperature',
        'CO₂ supply',
        'Size of pondweed',
        'Lamp bulb',
      ],
      xpValue: 20,
      misconceptionId: 'pr-mis-vary-everything',
    },
    {
      id: 'pr-q17',
      type: 'numeric-entry',
      stem: 'A pupil counts 12 pondweed bubbles over a 20-second sample. What is the rate in bubbles per minute?',
      tier: 'confident',
      correctAnswer: 36,
      unit: 'bubbles/min',
      xpValue: 15,
      hint: 'There are three 20-second blocks in a minute.',
    },
    {
      id: 'pr-q18',
      type: 'missing-step',
      stem: 'Fill in the missing step in this account of why the temperature graph peaks and then falls.',
      tier: 'challenge',
      steps: [
        'From 10 °C to 40 °C the rate of photosynthesis rises. Warmer particles move faster, so reactions speed up.',
        'Around 40 °C the rate peaks. The chloroplast is now running as fast as it can.',
        null,
        'So the temperature graph for photosynthesis rises, peaks near 40 °C, then falls. This is why a leaf in a heatwave does not just keep speeding up.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Above 40 °C the high temperature changes the shape of the enzymes inside the chloroplast. They denature, so they no longer work, and the rate of photosynthesis falls.',
      xpValue: 25,
    },
    {
      id: 'pr-q19',
      type: 'free-text',
      stem: 'Explain in one or two sentences why a graph of rate of photosynthesis against light intensity rises at first but then plateaus.',
      tier: 'challenge',
      sampleAnswer:
        'In the rising part, light is the limiting factor, so adding more light gives the chloroplast more energy and the rate goes up. In the plateau part, light is no longer limiting; something else (often CO₂ or temperature) has taken over, so adding more light makes no difference.',
      keywords: ['limiting factor', 'plateau', 'CO₂', 'rate'],
      xpValue: 25,
    },
    {
      id: 'pr-q20',
      type: 'multiple-choice',
      stem: 'A Sevenoaks Y7 class runs a Cabomba experiment in a cool laboratory at 10 °C. They double the lamp brightness, but the bubble count barely changes. Which factor is most likely limiting the rate?',
      tier: 'challenge',
      options: [
        'Light, because the bulb is the brightest variable.',
        'CO₂, because the water in a beaker holds none.',
        'Temperature, because at 10 °C the chloroplast enzymes work very slowly.',
        'Nothing, because plants do not need warmth.',
      ],
      correctIndex: 2,
      xpValue: 25,
    },
    {
      id: 'pr-q21',
      type: 'multiple-choice',
      stem: 'Which set of conditions would give the FASTEST rate of photosynthesis for a Cabomba pondweed plant?',
      tier: 'challenge',
      options: [
        'Bright light, plenty of CO₂, water at 5 °C.',
        'Bright light, plenty of CO₂, water at about 30 °C.',
        'Bright light, no CO₂, water at 30 °C.',
        'Dim light, plenty of CO₂, water at 60 °C.',
      ],
      correctIndex: 1,
      xpValue: 25,
    },
    {
      id: 'pr-q22',
      type: 'multiple-choice',
      stem: 'A pupil claims that "if I keep adding more and more light, photosynthesis will go faster and faster, with no limit." Which response best corrects this?',
      tier: 'challenge',
      options: [
        'Correct, light is the only thing that matters.',
        'Wrong, because plants cannot photosynthesise at all in bright light.',
        'Wrong, because plants only photosynthesise at night.',
        'Wrong, because once light is no longer limiting, the rate plateaus until another factor (CO₂ or temperature) is also raised.',
      ],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'pr-mis-light-no-ceiling',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Biology Foundation tier (8461/2F) Report on the Examination, June 2019, Question 7 (rate of photosynthesis): "Many candidates assumed that warmer was always better, missing that enzymes denature above an optimum near 40 °C." https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2019/june/AQA-84612F-WRE-2019.PDF
    {
      id: 'pr-mis-warmer-always-faster',
      description:
        'Higher temperature always means faster photosynthesis.',
      triggerAnswer: 'warmer-faster',
      correction:
        'Actually, warmer is only faster up to about 40 °C. Above the peak the chloroplast enzymes denature, so the rate falls.',
      reExplanation:
        'Picture the temperature graph: rise, peak, fall. Up to roughly 40 °C particles move faster and the rate climbs. Above the peak the heat changes the shape of the enzymes that run the reaction, and they no longer work. The leaf does not "try harder" with more heat; it shuts down.',
    },
    // Source: BBC Bitesize KS3 Biology, "Photosynthesis" topic page (Bioenergetics sub-section), Common Misconception block: "Pupils sometimes treat the plateau as the rate stopping; in fact the rate is steady but no longer rising." https://www.bbc.co.uk/bitesize/topics/zpxnyrd
    {
      id: 'pr-mis-plateau-means-stopped',
      description:
        'When the rate-vs-light-intensity graph plateaus, the plant has stopped photosynthesising.',
      triggerAnswer: 'plateau-stopped',
      correction:
        'In fact, the plant is still photosynthesising at a steady rate. The plateau means adding more light no longer helps, because something else has become the limiting factor.',
      reExplanation:
        'A flat line on a rate graph is a high steady rate, not zero. The line is at its highest point on the y-axis, just no longer climbing. To push it higher, you would need to raise the new limiting factor (CO₂ or temperature) instead.',
    },
    // Source: Edexcel GCSE Biology (1BI0) Topic 6 (SB6) Foundation tier examiner report 2018, comments on Question 4 (limiting factors): "Several students wrote that all three factors limited the rate at the same time, missing that only one factor is limiting at any given moment." https://qualifications.pearson.com/en/qualifications/edexcel-gcses/sciences-2016.html
    {
      id: 'pr-mis-many-limiting-at-once',
      description:
        'All three factors (light, CO₂, temperature) limit the rate at the same time.',
      triggerAnswer: 'many-limiting',
      correction:
        'Actually, only one factor is limiting at a time. The limiting factor is the one in shortest supply. Add more of it and the rate rises until something else takes over.',
      reExplanation:
        'Picture a line of pupils filing through three doorways. They can only move as fast as the slowest door allows, no matter how wide the other two are. Only one door is "the slow one" at a time. Photosynthesis works the same way: only one factor is the bottleneck.',
    },
    // Source: CGP KS3 Science Complete Study and Practice (Higher), 2014 edition, p.146 Common mistake: "Pupils confuse 'lamp closer' with 'less light' because they think distance is helpful, missing that closer means brighter." https://www.cgpbooks.co.uk/secondary-books/ks3/science/sht43-ks3-science-complete-study-practice
    {
      id: 'pr-mis-distance-direct',
      description:
        'Moving the lamp closer to the pondweed gives less light.',
      triggerAnswer: 'closer-less-light',
      correction:
        'In fact, moving the lamp closer gives more light, not less. Bring a torch close to a page and the page is brighter; the same is true for a beaker of pondweed.',
      reExplanation:
        'Light spreads out from a lamp. A beaker close to the bulb sees a strong patch of light. A beaker far from the bulb sees only a weak patch. So smaller distance means brighter light, and a faster rate of photosynthesis (until light stops being the limiting factor).',
    },
    // Source: AQA GCSE Biology specification 8461, section 4.4.1.2 Rate of photosynthesis: classroom examiner notes flag pupils who "fail to control variables when investigating limiting factors, changing more than one factor at a time." https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/specification
    {
      id: 'pr-mis-vary-everything',
      description:
        'In the pondweed experiment, you can change the lamp distance, water temperature, and CO₂ supply all at once to save time.',
      triggerAnswer: 'vary-everything',
      correction:
        'Actually, only the lamp distance should change. The water temperature, CO₂ supply, lamp bulb, and pondweed must stay the same so that the bubble count change can be linked to the light alone.',
      reExplanation:
        'A fair test changes one variable at a time. Change two and you cannot tell which one caused the change in rate. Lamp distance is the independent variable; bubbles per minute is the dependent variable; everything else is a control variable that stays fixed.',
    },
    // Source: BBC Bitesize KS3 Biology, "Photosynthesis" topic page, Common Misconception block: "Some learners assume photosynthesis can rise without limit if more light is added." https://www.bbc.co.uk/bitesize/topics/zpxnyrd
    {
      id: 'pr-mis-light-no-ceiling',
      description:
        'There is no ceiling to how fast photosynthesis can go; just keep adding light and the rate will keep climbing.',
      triggerAnswer: 'light-no-ceiling',
      correction:
        'In fact, the rate plateaus once light is no longer the limiting factor. To raise the ceiling, you have to raise CO₂ or temperature too.',
      reExplanation:
        'Think back to the graph shape. Rate vs light intensity rises, then flattens. The flat part is the ceiling, set by whatever new factor is now in shortest supply. The plant has switched bottleneck. More light, on its own, will not push past the ceiling.',
    },
    // Source: OCR GCSE Biology A (J247) Foundation tier specimen mark scheme 2018, Q5 commentary: "Pupils sometimes describe oxygen bubbles from pondweed as a sign that the plant is respiring, missing that respiration takes oxygen in." https://www.ocr.org.uk/qualifications/gcse/gateway-science-suite-biology-a-j247-from-2016/
    {
      id: 'pr-mis-bubbles-are-respiration',
      description:
        'The bubbles given off by Cabomba pondweed in a beaker are a sign that the plant is respiring.',
      triggerAnswer: 'bubbles-respiration',
      correction:
        'Actually, the bubbles are oxygen, a product of photosynthesis. Respiration takes oxygen in, not out, so it cannot be the source of the bubbles.',
      reExplanation:
        'Match the gas to the process. Photosynthesis: CO₂ in, O₂ out. Respiration: O₂ in, CO₂ out. Bubbles of oxygen rising from a green plant in light tell you photosynthesis is running, not respiration. Both processes happen in the plant cell, but only one gives off oxygen.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const photosynthesisZoneNodes: SkillNode[] = [
  photosynthesisOverview,
  photosynthesisRate,
]

export const photosynthesisZone: Zone = {
  id: 'biology-photosynthesis',
  name: 'Photosynthesis',
  realm: 'vitalia',
  nodeIds: [photosynthesisOverview.id, photosynthesisRate.id],
}
