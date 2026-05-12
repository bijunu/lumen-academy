import type { SkillNode } from '@/types/content'

export const writingIonicFormulae: SkillNode = {
  id: 'chemistry-atoms-ionic-formulae',
  title: 'Writing Simple Ionic Formulae',
  description:
    'Use the criss-cross rule to write the formula of a simple ionic compound from the charges on its ions. Place the cation first, write each ion with its charge, then make the size of one charge become the subscript on the OTHER ion. Simplify the ratio if both subscripts share a factor, and drop any subscript of 1. Practise on the staples of the UK chemistry lab: table salt NaCl, magnesium oxide MgO, calcium chloride CaCl₂, quicklime CaO, and the alumina used in saucepans Al₂O₃.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-atoms-elements-compounds',
  zoneName: 'Atoms, Elements, Compounds',
  tier: 'challenge',
  prerequisites: ['chemistry-atoms-ionic-bonding-intro'],
  curriculum: {
    ks3Objective:
      'Determining the formula of an ionic compound from the charges on the ions; examples such as NaCl, MgO, CaCl2; the criss-cross rule applied simply, including simplifying the ratio and dropping subscripts of 1.',
    awardingBodies: {
      aqa: '4.1.1.1 Chemical formulae of compounds (8462)',
      edexcel: 'Topic 1.2 Chemical formulae; simple ionic compounds (1CH0)',
      ocr: 'C1.1a Writing formulae of ionic compounds; balancing charge (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'cae-iform-scene-1',
      title: 'The Criss-Cross Rule on NaCl',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how the charges on Na⁺ and Cl⁻ swap across to become the subscripts in the final formula NaCl.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><text x="180" y="30" text-anchor="middle" font-size="10" font-weight="600" fill="#1E3A8A">Sodium chloride (table salt)</text><text x="90" y="90" text-anchor="middle" font-size="32" font-weight="700" fill="#1E3A8A">Na</text><text x="128" y="74" font-size="20" font-weight="700" fill="#B91C1C">+</text><text x="200" y="90" text-anchor="middle" font-size="32" font-weight="700" fill="#1E3A8A">Cl</text><text x="232" y="74" font-size="20" font-weight="700" fill="#B91C1C">-</text><path d="M 128 80 Q 165 110 200 100" stroke="#B45309" stroke-width="1.4" fill="none" marker-end="url(#a1)"/><path d="M 232 80 Q 195 110 160 100" stroke="#B45309" stroke-width="1.4" fill="none" marker-end="url(#a1)"/><defs><marker id="a1" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><polygon points="0 0, 6 3, 0 6" fill="#B45309"/></marker></defs><text x="180" y="140" text-anchor="middle" font-size="11" fill="#B45309">criss-cross: each charge size becomes the subscript on the OTHER ion</text><text x="180" y="170" text-anchor="middle" font-size="22" font-weight="700" fill="#14532D">Na₁Cl₁  →  NaCl</text><text x="180" y="194" text-anchor="middle" font-size="9" fill="#475569">subscripts of 1 are dropped by convention</text></svg>',
        hotspots: [
          {
            id: 'cae-iform-h-cation',
            x: 25,
            y: 38,
            label: 'Cation first: Na⁺',
            description:
              'The metal ion (the cation) is always written first. Sodium loses one electron to become Na⁺, with charge size 1.',
          },
          {
            id: 'cae-iform-h-anion',
            x: 60,
            y: 38,
            label: 'Anion second: Cl⁻',
            description:
              'The non-metal ion (the anion) is written second. Chlorine gains one electron to become Cl⁻, with charge size 1.',
          },
          {
            id: 'cae-iform-h-criss',
            x: 50,
            y: 60,
            label: 'Criss-cross the charge sizes',
            description:
              'The size of each charge (the number, not the sign) crosses over and becomes the subscript on the OTHER ion. The plus and minus signs themselves are not written in the final formula.',
          },
          {
            id: 'cae-iform-h-simplify',
            x: 50,
            y: 80,
            label: 'Simplify and drop 1s',
            description:
              'Na₁Cl₁ becomes simply NaCl. By convention a subscript of 1 is never written. So the formula of table salt is NaCl, not Na₁Cl₁.',
          },
        ],
      },
    },
    {
      id: 'cae-iform-scene-2',
      title: 'Equal Charges that Cancel: MgO',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on Mg²⁺ + O²⁻ → MgO to see why a 2 and a 2 do NOT give Mg₂O₂. They simplify to MgO.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><text x="180" y="30" text-anchor="middle" font-size="10" font-weight="600" fill="#1E3A8A">Magnesium oxide</text><text x="90" y="90" text-anchor="middle" font-size="32" font-weight="700" fill="#1E3A8A">Mg</text><text x="130" y="74" font-size="18" font-weight="700" fill="#B91C1C">2+</text><text x="220" y="90" text-anchor="middle" font-size="32" font-weight="700" fill="#1E3A8A">O</text><text x="248" y="74" font-size="18" font-weight="700" fill="#B91C1C">2-</text><path d="M 132 80 Q 175 110 220 100" stroke="#B45309" stroke-width="1.4" fill="none" marker-end="url(#a2)"/><path d="M 248 80 Q 200 110 160 100" stroke="#B45309" stroke-width="1.4" fill="none" marker-end="url(#a2)"/><defs><marker id="a2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><polygon points="0 0, 6 3, 0 6" fill="#B45309"/></marker></defs><text x="180" y="140" text-anchor="middle" font-size="20" font-weight="700" fill="#1E3A8A">Mg₂O₂</text><text x="180" y="162" text-anchor="middle" font-size="10" font-weight="600" fill="#B45309">both subscripts share a factor of 2, so simplify</text><text x="180" y="186" text-anchor="middle" font-size="22" font-weight="700" fill="#14532D">→  MgO</text><text x="180" y="206" text-anchor="middle" font-size="9" fill="#475569">smallest whole-number ratio is 1 : 1</text></svg>',
        hotspots: [
          {
            id: 'cae-iform-h-mg2',
            x: 25,
            y: 38,
            label: 'Mg²⁺: charge size 2',
            description:
              'Magnesium loses two electrons to become Mg²⁺. The charge size (just the number) is 2; the sign is plus.',
          },
          {
            id: 'cae-iform-h-o2',
            x: 65,
            y: 38,
            label: 'O²⁻: charge size 2',
            description:
              'Oxygen gains two electrons to become O²⁻. The charge size is 2; the sign is minus.',
          },
          {
            id: 'cae-iform-h-crisscross',
            x: 50,
            y: 60,
            label: 'Criss-cross gives Mg₂O₂',
            description:
              'Cross the 2 from oxygen onto magnesium, and the 2 from magnesium onto oxygen. Both ions end up with subscript 2: Mg₂O₂.',
          },
          {
            id: 'cae-iform-h-simplify',
            x: 50,
            y: 80,
            label: 'Simplify to MgO',
            description:
              'Both subscripts share a common factor of 2. Divide through by 2 to get the smallest whole-number ratio: Mg₁O₁, which is written MgO. Magnesium oxide is the white ash you see when magnesium ribbon burns in air.',
          },
        ],
      },
    },
    {
      id: 'cae-iform-scene-3',
      title: 'Unequal Charges: Ca²⁺ + Cl⁻ → CaCl₂',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see why a calcium ion needs TWO chloride ions to balance, giving the formula CaCl₂.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><text x="180" y="30" text-anchor="middle" font-size="10" font-weight="600" fill="#1E3A8A">Calcium chloride (used to grit UK roads in winter)</text><text x="90" y="90" text-anchor="middle" font-size="32" font-weight="700" fill="#1E3A8A">Ca</text><text x="128" y="74" font-size="18" font-weight="700" fill="#B91C1C">2+</text><text x="220" y="90" text-anchor="middle" font-size="32" font-weight="700" fill="#1E3A8A">Cl</text><text x="252" y="74" font-size="18" font-weight="700" fill="#B91C1C">-</text><path d="M 132 80 Q 175 110 220 100" stroke="#B45309" stroke-width="1.4" fill="none" marker-end="url(#a3)"/><path d="M 252 80 Q 200 110 160 100" stroke="#B45309" stroke-width="1.4" fill="none" marker-end="url(#a3)"/><defs><marker id="a3" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><polygon points="0 0, 6 3, 0 6" fill="#B45309"/></marker></defs><text x="180" y="140" text-anchor="middle" font-size="11" fill="#B45309">size 1 crosses to Ca, size 2 crosses to Cl</text><text x="180" y="170" text-anchor="middle" font-size="22" font-weight="700" fill="#14532D">Ca₁Cl₂  →  CaCl₂</text><text x="180" y="196" text-anchor="middle" font-size="9" fill="#475569">check: 1 × (2+) + 2 × (1-) = 0, charges balance</text></svg>',
        hotspots: [
          {
            id: 'cae-iform-h-ca2',
            x: 22,
            y: 38,
            label: 'Ca²⁺: charge size 2',
            description:
              'Calcium loses two electrons to become Ca²⁺. The charge size on calcium is 2.',
          },
          {
            id: 'cae-iform-h-cl1',
            x: 62,
            y: 38,
            label: 'Cl⁻: charge size 1',
            description:
              'Chloride has charge size 1. Although the 1 is not written, the criss-cross rule still uses it: it becomes the subscript on calcium.',
          },
          {
            id: 'cae-iform-h-cross',
            x: 50,
            y: 60,
            label: 'Cross the sizes over',
            description:
              'The 2 from calcium becomes the subscript on chloride; the 1 from chloride becomes the subscript on calcium. So we get Ca₁Cl₂.',
          },
          {
            id: 'cae-iform-h-check',
            x: 50,
            y: 86,
            label: 'Drop the 1 and check charges balance',
            description:
              'Drop the subscript of 1 on calcium to get CaCl₂. Check: total positive = 1 × 2 = 2 and total negative = 2 × 1 = 2, so the charges balance. UK councils spread calcium chloride on roads when frost is forecast.',
          },
        ],
      },
    },
    {
      id: 'cae-iform-scene-4',
      title: 'Aluminium Oxide Al₂O₃ in a Saucepan',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how Al³⁺ and O²⁻ produce Al₂O₃, the protective coating on every aluminium saucepan in a UK kitchen.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><text x="180" y="30" text-anchor="middle" font-size="10" font-weight="600" fill="#1E3A8A">Aluminium oxide (alumina): the protective coat on a UK saucepan</text><text x="90" y="90" text-anchor="middle" font-size="32" font-weight="700" fill="#1E3A8A">Al</text><text x="124" y="74" font-size="18" font-weight="700" fill="#B91C1C">3+</text><text x="220" y="90" text-anchor="middle" font-size="32" font-weight="700" fill="#1E3A8A">O</text><text x="248" y="74" font-size="18" font-weight="700" fill="#B91C1C">2-</text><path d="M 126 80 Q 175 110 222 100" stroke="#B45309" stroke-width="1.4" fill="none" marker-end="url(#a4)"/><path d="M 248 80 Q 200 110 156 100" stroke="#B45309" stroke-width="1.4" fill="none" marker-end="url(#a4)"/><defs><marker id="a4" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><polygon points="0 0, 6 3, 0 6" fill="#B45309"/></marker></defs><text x="180" y="140" text-anchor="middle" font-size="11" fill="#B45309">3 crosses to O, 2 crosses to Al</text><text x="180" y="170" text-anchor="middle" font-size="22" font-weight="700" fill="#14532D">Al₂O₃</text><text x="180" y="196" text-anchor="middle" font-size="9" fill="#475569">check: 2 × (3+) + 3 × (2-) = +6 - 6 = 0, charges balance</text></svg>',
        hotspots: [
          {
            id: 'cae-iform-h-al3',
            x: 22,
            y: 38,
            label: 'Al³⁺: charge size 3',
            description:
              'Aluminium loses three electrons to become Al³⁺. The charge size is 3.',
          },
          {
            id: 'cae-iform-h-o22',
            x: 62,
            y: 38,
            label: 'O²⁻: charge size 2',
            description:
              'Oxygen gains two electrons to become O²⁻. The charge size is 2.',
          },
          {
            id: 'cae-iform-h-cross-al',
            x: 50,
            y: 60,
            label: 'Cross 3 and 2 over',
            description:
              'The 3 from aluminium becomes the subscript on oxygen; the 2 from oxygen becomes the subscript on aluminium. So we get Al₂O₃.',
          },
          {
            id: 'cae-iform-h-no-simplify',
            x: 50,
            y: 84,
            label: 'No common factor: keep Al₂O₃',
            description:
              '2 and 3 share no factor other than 1, so Al₂O₃ is already in its smallest whole-number ratio. The total charge balances: 2 × (3+) + 3 × (2−) = 0.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'cae-iform-worked-1',
      title: 'Writing the formula of magnesium chloride MgCl₂ step by step',
      steps: [
        {
          explanation:
            'Question: write the chemical formula of the ionic compound formed between magnesium and chlorine. Magnesium forms Mg²⁺ and chlorine forms Cl⁻.',
        },
        {
          explanation:
            'Step 1: write the two ions side by side, cation first. Place the metal Mg²⁺ on the left and the non-metal Cl⁻ on the right.',
          maths: 'Mg²⁺  Cl⁻',
        },
        {
          explanation:
            'Step 2: note the charge sizes (just the numbers, ignore the signs for now). Magnesium has size 2; chloride has size 1. The size of chloride is 1 even though the 1 is never written.',
          maths: 'sizes: Mg = 2, Cl = 1',
        },
        {
          explanation:
            'Step 3: criss-cross. The 2 from magnesium becomes the subscript on chloride; the 1 from chloride becomes the subscript on magnesium. So we get Mg₁Cl₂.',
          maths: 'Mg₁Cl₂',
        },
        {
          explanation:
            'Step 4: simplify the ratio if possible. 1 and 2 share no common factor other than 1, so Mg₁Cl₂ is already in lowest terms.',
        },
        {
          explanation:
            'Step 5: drop any subscript of 1. The 1 on magnesium is never written, so the final formula is MgCl₂.',
          maths: 'final formula: MgCl₂',
        },
        {
          explanation:
            'Step 6: check the charges balance. 1 × (2+) for the magnesium ion = +2. 2 × (1−) for the two chloride ions = −2. The total charge is zero, so the formula is correct.',
        },
      ],
    },
    {
      id: 'cae-iform-worked-2',
      title: 'Why MgO is the right answer, not Mg₂O₂',
      steps: [
        {
          explanation:
            'Question: write the formula of the ionic compound formed between magnesium and oxygen. Magnesium forms Mg²⁺ and oxygen forms O²⁻.',
        },
        {
          explanation:
            'Step 1: write the ions side by side. Cation first: Mg²⁺ then O²⁻.',
          maths: 'Mg²⁺  O²⁻',
        },
        {
          explanation:
            'Step 2: read the charge sizes. Both ions have size 2.',
          maths: 'sizes: Mg = 2, O = 2',
        },
        {
          explanation:
            'Step 3: criss-cross. The 2 from oxygen becomes the subscript on magnesium, and the 2 from magnesium becomes the subscript on oxygen. We get Mg₂O₂.',
          maths: 'Mg₂O₂',
        },
        {
          explanation:
            'Step 4: simplify. Both subscripts share a common factor of 2. Divide each subscript by 2 to get the smallest whole-number ratio: Mg₁O₁.',
          maths: 'Mg₂O₂ ÷ 2 → Mg₁O₁',
        },
        {
          explanation:
            'Step 5: drop subscripts of 1. The final formula is MgO. Magnesium oxide is the white ash produced when magnesium ribbon burns in air.',
          maths: 'final formula: MgO',
        },
        {
          explanation:
            'Common slip: a pupil who writes Mg₂O₂ is not WRONG about the charges balancing, but chemical formulae are always given in the simplest whole-number ratio. Always check for a common factor before stopping.',
        },
      ],
    },
  ],
  questions: [
    // ===== CORE (7) =====
    {
      id: 'cae-iform-q1',
      type: 'multiple-choice',
      stem: 'Which formula represents the ionic compound formed between Na⁺ and Cl⁻?',
      tier: 'core',
      options: ['NaCl', 'Na₂Cl', 'NaCl₂', 'Na₂Cl₂'],
      correctIndex: 0,
      xpValue: 10,
      hint: 'Both charge sizes are 1, so the criss-cross gives Na₁Cl₁, then drop the 1s.',
      misconceptionId: 'cae-iform-mis-keep-equal-subscripts',
    },
    {
      id: 'cae-iform-q2',
      type: 'multiple-choice',
      stem: 'Magnesium forms Mg²⁺ and oxygen forms O²⁻. What is the correct formula of magnesium oxide?',
      tier: 'core',
      options: ['Mg₂O₂', 'Mg₂O', 'MgO₂', 'MgO'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'The criss-cross gives Mg₂O₂, but both subscripts share a factor of 2.',
      misconceptionId: 'cae-iform-mis-keep-equal-subscripts',
    },
    {
      id: 'cae-iform-q3',
      type: 'multiple-choice',
      stem: 'Calcium forms Ca²⁺ and chlorine forms Cl⁻. What is the correct formula of calcium chloride?',
      tier: 'core',
      options: ['CaCl', 'Ca₂Cl', 'CaCl₂', 'Ca₂Cl₂'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Cross the 2 onto Cl and the 1 onto Ca; then drop the 1 on Ca.',
    },
    {
      id: 'cae-iform-q4',
      type: 'numeric-entry',
      stem: 'In the formula CaCl₂, how many chloride ions balance the charge on one calcium ion?',
      tier: 'core',
      correctAnswer: 2,
      xpValue: 10,
      hint: 'Each Cl⁻ has charge size 1, so it takes two of them to balance the 2+ on calcium.',
    },
    {
      id: 'cae-iform-q5',
      type: 'multiple-choice',
      stem: 'In the criss-cross rule, what crosses over from one ion to the other to become the subscript?',
      tier: 'core',
      options: [
        'The size of the charge (just the number)',
        'The full charge including the plus or minus sign',
        'The atomic number of the element',
        'The mass number of the element',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'cae-iform-mis-charge-with-sign',
    },
    {
      id: 'cae-iform-q6',
      type: 'multiple-choice',
      stem: 'A pupil writes the formula of sodium chloride as Na⁺Cl⁻. What should they correct?',
      tier: 'core',
      options: [
        'They should write the chloride first: Cl⁻Na⁺',
        'They should drop the charges in the final formula and write NaCl',
        'They should add brackets to give (NaCl)',
        'Nothing; Na⁺Cl⁻ is the correct final formula',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'cae-iform-mis-keep-charges-in-formula',
    },
    {
      id: 'cae-iform-q7',
      type: 'spot-misconception',
      stem: 'Ravi looks at Mg²⁺ and O²⁻ and says: "The charges are 2+ and 2−, so they add together to give 4, and the formula is Mg₄O₄."',
      tier: 'core',
      statements: [
        {
          text: 'Ravi is right. Adding the charge sizes gives the subscript on each ion.',
          isMisconception: true,
        },
        {
          text: 'Ravi is wrong. Charges balance (they are equal and opposite), they do not add up. The criss-cross gives Mg₂O₂, which simplifies to MgO.',
          isMisconception: false,
        },
      ],
      xpValue: 10,
      misconceptionId: 'cae-iform-mis-add-charges',
    },
    // ===== CONFIDENT (8) =====
    {
      id: 'cae-iform-q8',
      type: 'multiple-choice',
      stem: 'Aluminium forms Al³⁺ and oxygen forms O²⁻. What is the correct formula of aluminium oxide?',
      tier: 'confident',
      options: ['AlO', 'Al₃O₂', 'Al₂O₃', 'AlO₂'],
      correctIndex: 2,
      xpValue: 15,
      hint: 'Cross the 3 onto O and the 2 onto Al. 2 and 3 share no factor.',
    },
    {
      id: 'cae-iform-q9',
      type: 'multiple-choice',
      stem: 'Sodium forms Na⁺ and oxygen forms O²⁻. What is the correct formula of sodium oxide?',
      tier: 'confident',
      options: ['NaO', 'NaO₂', 'Na₂O₂', 'Na₂O'],
      correctIndex: 3,
      xpValue: 15,
      hint: 'Cross the 2 onto Na and the 1 onto O. Drop the 1.',
      misconceptionId: 'cae-iform-mis-forget-invisible-one',
    },
    {
      id: 'cae-iform-q10',
      type: 'multiple-choice',
      stem: 'Potassium forms K⁺ and bromine forms Br⁻. What is the correct formula of potassium bromide?',
      tier: 'confident',
      options: ['KBr', 'K₂Br', 'KBr₂', 'K₂Br₂'],
      correctIndex: 0,
      xpValue: 15,
      hint: 'Both charge sizes are 1, so the criss-cross gives K₁Br₁.',
    },
    {
      id: 'cae-iform-q11',
      type: 'numeric-entry',
      stem: 'In the formula Al₂O₃, what is the subscript on the oxygen (the small number to the right of the O)?',
      tier: 'confident',
      correctAnswer: 3,
      xpValue: 15,
      hint: 'The 3+ on aluminium crosses over and becomes the subscript on oxygen.',
    },
    {
      id: 'cae-iform-q12',
      type: 'numeric-entry',
      stem: 'In the formula Al₂O₃, what is the subscript on the aluminium (the small number to the right of the Al)?',
      tier: 'confident',
      correctAnswer: 2,
      xpValue: 15,
      hint: 'The 2− on oxygen crosses over and becomes the subscript on aluminium.',
    },
    {
      id: 'cae-iform-q13',
      type: 'missing-step',
      stem: 'A pupil is writing the formula of magnesium oxide from Mg²⁺ and O²⁻. Fill in the missing step.',
      tier: 'confident',
      steps: [
        'Write the two ions side by side with the cation first: Mg²⁺ O²⁻',
        'Read the charge sizes (ignore the plus and minus signs): Mg has size 2 and O has size 2',
        'Criss-cross the sizes: the 2 from O becomes the subscript on Mg, the 2 from Mg becomes the subscript on O, giving Mg₂O₂',
        null,
        'Drop any subscripts of 1 and write the final formula: MgO',
      ],
      missingStepIndex: 3,
      correctStep:
        'Simplify the ratio if both subscripts share a common factor: 2 and 2 share a factor of 2, so divide each by 2 to give Mg₁O₁',
      xpValue: 15,
    },
    {
      id: 'cae-iform-q14',
      type: 'drag-order',
      stem: 'Place the steps for writing the formula of calcium chloride from Ca²⁺ and Cl⁻ in the correct order.',
      tier: 'confident',
      items: [
        'Drop any subscripts of 1 to give the final formula CaCl₂',
        'Write the ions side by side with the cation first: Ca²⁺ Cl⁻',
        'Criss-cross the charge sizes: the 1 from Cl goes onto Ca and the 2 from Ca goes onto Cl, giving Ca₁Cl₂',
        'Read the charge sizes: Ca has size 2 and Cl has size 1',
      ],
      correctOrder: [1, 3, 2, 0],
      xpValue: 15,
    },
    {
      id: 'cae-iform-q15',
      type: 'drag-order',
      stem: 'Place the steps for writing the formula of aluminium oxide from Al³⁺ and O²⁻ in the correct order.',
      tier: 'confident',
      items: [
        'Check that 2 and 3 share no common factor, so Al₂O₃ is already in its smallest whole-number ratio',
        'Write the ions side by side with the cation first: Al³⁺ O²⁻',
        'Read the charge sizes: Al has size 3 and O has size 2',
        'Criss-cross the sizes: the 2 from O goes onto Al and the 3 from Al goes onto O, giving Al₂O₃',
      ],
      correctOrder: [1, 2, 3, 0],
      xpValue: 15,
      misconceptionId: 'cae-iform-mis-skip-simplify',
    },
    // ===== CHALLENGE (5) =====
    {
      id: 'cae-iform-q16',
      type: 'multiple-choice',
      stem: 'Calcium forms Ca²⁺ and oxygen forms O²⁻. The chemical called quicklime is used in UK building mortar. What is its correct formula?',
      tier: 'challenge',
      options: ['Ca₂O₂', 'Ca₂O', 'CaO₂', 'CaO'],
      correctIndex: 3,
      xpValue: 20,
      hint: 'Criss-cross gives Ca₂O₂. Simplify by dividing through by 2.',
      misconceptionId: 'cae-iform-mis-skip-simplify',
    },
    {
      id: 'cae-iform-q17',
      type: 'numeric-entry',
      stem: 'In the formula Al₂O₃, how many atoms (in total) are present in one formula unit? Count both the aluminium atoms and the oxygen atoms.',
      tier: 'challenge',
      correctAnswer: 5,
      xpValue: 20,
      hint: '2 Al + 3 O = 5 atoms in total.',
    },
    {
      id: 'cae-iform-q18',
      type: 'multiple-choice',
      stem: 'Lithium forms Li⁺ and nitrogen forms N³⁻. What is the correct formula of lithium nitride?',
      tier: 'challenge',
      options: ['LiN', 'Li₃N', 'LiN₃', 'Li₂N₃'],
      correctIndex: 1,
      xpValue: 20,
      hint: 'Cross 3 onto Li and 1 onto N. Drop the 1 on N.',
      misconceptionId: 'cae-iform-mis-forget-invisible-one',
    },
    {
      id: 'cae-iform-q19',
      type: 'numeric-entry',
      stem: 'You combine Mg²⁺ ions with Cl⁻ ions. How many chloride ions are needed in the formula unit to balance the charge on one magnesium ion?',
      tier: 'challenge',
      correctAnswer: 2,
      xpValue: 20,
      hint: 'Each Cl⁻ provides one unit of negative charge; Mg²⁺ has two units of positive charge.',
    },
    {
      id: 'cae-iform-q20',
      type: 'spot-misconception',
      stem: 'Sara writes the formula of aluminium chloride as Al³⁺Cl⁻ and stops there, saying: "I have written both ions with their charges, so the formula is finished."',
      tier: 'challenge',
      statements: [
        {
          text: 'Sara is right. Writing each ion with its charge gives the complete formula.',
          isMisconception: true,
        },
        {
          text: 'Sara is wrong. In a chemical formula the charges are not written. She needs to criss-cross to get Al₁Cl₃ and drop the 1 to give AlCl₃.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'cae-iform-mis-keep-charges-in-formula',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Chemistry examiner report June 2019 (8462/1F), Q04 on ionic formulae: candidates "wrote Mg2O2 for magnesium oxide because they applied the criss-cross rule but did not simplify the ratio". Reinforced by CGP KS3 Chemistry Study Book p.32 Common Mistake box.
    {
      id: 'cae-iform-mis-keep-equal-subscripts',
      description:
        'When two ions have the same charge size, the formula keeps both subscripts equal to that size (so Mg²⁺ + O²⁻ gives Mg₂O₂, not MgO).',
      triggerAnswer: 'keep-equal-subscripts',
      correction:
        'In fact a chemical formula is always given in the smallest whole-number ratio. Mg₂O₂ simplifies to MgO.',
      reExplanation:
        'The criss-cross rule gives a working subscript pair, but the final formula must be in lowest terms. When both subscripts share a common factor, divide them through by that factor. So Mg²⁺ + O²⁻ gives Mg₂O₂ on the criss-cross, but the 2s share a factor of 2 and the formula simplifies to MgO. Always look for a common factor before you stop.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2020 (1CH0/1F), Q06 on writing ionic formulae: candidates "kept the plus and minus signs in the final formula", writing Na+Cl- rather than NaCl. Reinforced by RSC Education article "Common errors in writing chemical formulae" (rsc.org/education, accessed 2026-05-12).
    {
      id: 'cae-iform-mis-keep-charges-in-formula',
      description:
        'The plus and minus signs on the ions stay in the final chemical formula.',
      triggerAnswer: 'keep-charges-in-formula',
      correction:
        'In fact the signs are dropped once the formula is balanced. The ions still carry charge, but the formula shows only the symbols and subscripts.',
      reExplanation:
        'Charges only matter while you balance the formula. Once the subscripts make the positive total equal to the negative total, the formula is electrically neutral and the signs are dropped by convention. So sodium chloride is written NaCl, not Na⁺Cl⁻; the ions still have charges inside the crystal, but the written formula only shows symbols and subscripts.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2021 (8462/1F), Q05: candidates "added the positive and negative charge sizes together to give a subscript" rather than treating equal-and-opposite charges as balancing. Reinforced by Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question sets on ionic compounds.
    {
      id: 'cae-iform-mis-add-charges',
      description:
        'The subscript on each ion is found by adding the charge sizes of the two ions together.',
      triggerAnswer: 'add-charges',
      correction:
        'In fact the charges balance, they do not add up. Each ion takes the charge size of the OTHER ion as its subscript, then you simplify.',
      reExplanation:
        'An ionic compound must be electrically neutral overall, so total positive charge equals total negative charge. The criss-cross rule does this in one step: the size of the cation charge becomes the subscript on the anion, and vice versa. Adding 2 and 2 to get Mg₄O₄ is the wrong action; the right action is to cross over and then simplify, giving MgO.',
    },
    // Source: OCR GCSE Gateway Chemistry examiner report June 2019 (J248/02): candidates "carried the plus or minus sign into the subscript", writing Na^+Cl^- or treating the sign as part of the number to cross over. Reinforced by CGP KS3 Chemistry Study Book p.32.
    {
      id: 'cae-iform-mis-charge-with-sign',
      description:
        'In the criss-cross rule, the whole charge (including the plus or minus sign) crosses over to become the subscript.',
      triggerAnswer: 'charge-with-sign',
      correction:
        'In fact only the size of the charge (the number) crosses over. The plus and minus signs are not part of the subscript.',
      reExplanation:
        'A subscript is a count of atoms; it must be a positive whole number. The criss-cross rule only uses the magnitude of each charge. So in Mg²⁺ + O²⁻, the 2 from each ion crosses over, but the + and the − stay with the original ions while you balance. Once balanced, the signs are dropped from the written formula altogether.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2019 (1CH0/1H), Q06 on simple ionic formulae: candidates "ignored the invisible subscript of 1 on the chloride in CaCl2" and so wrote CaCl instead. Reinforced by RSC Education article "The criss-cross method for ionic formulae" (rsc.org/education, accessed 2026-05-12).
    {
      id: 'cae-iform-mis-forget-invisible-one',
      description:
        'When an ion has charge size 1, you do not include it in the criss-cross because the 1 is not written.',
      triggerAnswer: 'forget-invisible-one',
      correction:
        'In fact the 1 still crosses over, even though it is not written. So Ca²⁺ + Cl⁻ gives Ca₁Cl₂, and you drop the 1 on Ca to give CaCl₂.',
      reExplanation:
        'A missing subscript means 1, not 0. When chloride has charge size 1, the 1 crosses over onto calcium just like any other size, giving Ca₁Cl₂. The 1 is then dropped from the final formula by convention, but only AFTER the criss-cross is done. Skipping it altogether gives CaCl, which has unbalanced charges (+2 against −1) and is wrong.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2018 (8462/2F), Q05: candidates "applied the criss-cross rule correctly but did not check whether the resulting subscripts shared a common factor", leaving formulae like Mg2O2 or Ca2O2 in the final answer. Reinforced by Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic on chemical formulae.
    {
      id: 'cae-iform-mis-skip-simplify',
      description:
        'The criss-cross result is always the final formula. There is no need to look for a common factor.',
      triggerAnswer: 'skip-simplify',
      correction:
        'In fact a chemical formula is always in the smallest whole-number ratio. If both subscripts share a common factor, divide them through.',
      reExplanation:
        'After the criss-cross, look at the two subscripts. If they share a common factor greater than 1, divide each by that factor. So Ca²⁺ + O²⁻ gives Ca₂O₂ on the criss-cross, but both 2s share a factor of 2, so divide through to get CaO. Al³⁺ + O²⁻ gives Al₂O₃; 2 and 3 share no common factor, so Al₂O₃ is already final.',
    },
    // Source: RSC Education article "Writing simple ionic formulae" (rsc.org/education, accessed 2026-05-12): pupils "confuse the coefficient (a large number in front of the formula) with the subscript inside the formula", thinking 2NaCl and Na2Cl2 mean the same thing.
    {
      id: 'cae-iform-mis-coefficient-vs-subscript',
      description:
        'A coefficient in front of the formula (like 2NaCl) means the same as a subscript inside it (like Na₂Cl₂).',
      triggerAnswer: 'coefficient-vs-subscript',
      correction:
        'In fact a coefficient multiplies the WHOLE formula; a subscript only counts the atom it follows. They are not interchangeable.',
      reExplanation:
        'In Na₂Cl₂ the small 2s sit inside one particle of the compound and tell you the ratio of atoms within that particle. In 2NaCl the large 2 sits in front and means you have 2 separate particles of NaCl, each with the simplest ratio 1:1. The first describes the formula of the compound; the second describes how many copies you have. They are different ideas, do not confuse them when writing ionic formulae.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
