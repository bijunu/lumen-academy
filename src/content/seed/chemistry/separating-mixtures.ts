import type { SkillNode, Zone } from '@/types/content'

export const filtrationEvaporation: SkillNode = {
  id: 'chemistry-separating-filtration-evaporation',
  title: 'Filtration and Evaporation',
  description:
    'Choose the right method to separate a mixture: filtration to take an insoluble solid out of a liquid, and evaporation to recover a dissolved solute from its solution. Identify the apparatus used and explain why each piece of kit is needed.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-separating-mixtures',
  zoneName: 'Separating Mixtures',
  tier: 'core',
  prerequisites: ['chemistry-particle-model-states'],
  curriculum: {
    ks3Objective:
      'The concept of a pure substance; mixtures, including dissolving; simple techniques for separating mixtures: filtration, evaporation, distillation and chromatography.',
    awardingBodies: {
      aqa: '4.10.1.1 Pure substances and mixtures; 4.10.1.2 Filtration, crystallisation (8462)',
      edexcel: 'Topic 1.43 Filtration and crystallisation; 1.42 Mixtures (1CH0)',
      ocr: 'C2.1a-c Pure and impure substances, separating insoluble solids by filtration, recovering soluble solids by evaporation (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'fe-scene-mixtures',
      title: 'Two Mixtures, Two Different Methods',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare a mixture of sand in water with a mixture of salt in water, and see why each one needs a different separating method.',
      data: {
        viewBox: '0 0 320 180',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180"><rect x="0" y="0" width="320" height="180" fill="#FEF3C7"/><g><rect x="20" y="40" width="100" height="120" rx="4" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="1.2"/><rect x="25" y="60" width="90" height="95" fill="#DBEAFE"/><g fill="#92400E" stroke="#7C2D12" stroke-width="0.4"><circle cx="40" cy="135" r="3"/><circle cx="55" cy="140" r="3"/><circle cx="70" cy="135" r="3"/><circle cx="85" cy="142" r="3"/><circle cx="100" cy="138" r="3"/><circle cx="48" cy="148" r="3"/><circle cx="65" cy="150" r="3"/><circle cx="82" cy="150" r="3"/><circle cx="95" cy="148" r="3"/><circle cx="35" cy="148" r="3"/><circle cx="55" cy="125" r="3"/><circle cx="78" cy="125" r="3"/></g><text x="70" y="30" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">SAND IN WATER</text></g><g><rect x="200" y="40" width="100" height="120" rx="4" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="1.2"/><rect x="205" y="60" width="90" height="95" fill="#DBEAFE" opacity="0.85"/><text x="250" y="30" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">SALT IN WATER</text><text x="250" y="115" text-anchor="middle" font-size="8" fill="#1E3A8A">(salt has dissolved,</text><text x="250" y="125" text-anchor="middle" font-size="8" fill="#1E3A8A">no lumps to see)</text></g></svg>',
        hotspots: [
          {
            id: 'fe-h-mix-sand',
            x: 22,
            y: 80,
            label: 'Sand: insoluble in water',
            description:
              'Sand grains stay as solid lumps. They sink to the bottom and never dissolve, so the mixture has two clear parts.',
          },
          {
            id: 'fe-h-mix-sand-method',
            x: 22,
            y: 50,
            label: 'Use filtration to remove the sand',
            description:
              'Pour the mixture through filter paper. The sand grains are too big to pass through, but the water flows through.',
          },
          {
            id: 'fe-h-mix-salt',
            x: 78,
            y: 80,
            label: 'Salt: soluble in water',
            description:
              'Salt particles are too small to see and have spread evenly between the water particles, so the mixture looks clear.',
          },
          {
            id: 'fe-h-mix-salt-method',
            x: 78,
            y: 50,
            label: 'Use evaporation to recover the salt',
            description:
              'Heat the solution gently. The water turns to vapour and leaves the room as a gas, but the salt stays behind on the dish.',
          },
        ],
      },
    },
    {
      id: 'fe-scene-filtration',
      title: 'Filtration: How the Apparatus Fits Together',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the filtration set-up to name the piece of apparatus and read what it does.',
      data: {
        viewBox: '0 0 320 240',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240"><rect x="0" y="0" width="320" height="240" fill="#FEF3C7"/><rect x="0" y="220" width="320" height="20" fill="#D6D3D1"/><g><rect x="40" y="20" width="100" height="55" rx="4" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="1.2"/><rect x="45" y="35" width="90" height="35" fill="#DBEAFE"/><g fill="#92400E"><circle cx="55" cy="60" r="2"/><circle cx="75" cy="62" r="2"/><circle cx="95" cy="60" r="2"/><circle cx="115" cy="62" r="2"/><circle cx="65" cy="68" r="2"/><circle cx="85" cy="65" r="2"/><circle cx="105" cy="68" r="2"/><circle cx="125" cy="65" r="2"/></g><text x="90" y="14" text-anchor="middle" font-size="8" fill="#1E3A8A">SAND IN WATER</text></g><g><path d="M 130 90 L 200 90 L 175 145 L 155 145 z" fill="#FFFFFF" stroke="#475569" stroke-width="1.2"/><path d="M 138 95 L 192 95 L 168 138 L 162 138 z" fill="#F1F5F9" stroke="#94A3B8" stroke-width="0.6"/><text x="225" y="100" font-size="8" fill="#1E3A8A">filter paper</text><text x="225" y="115" font-size="8" fill="#1E3A8A">filter funnel</text></g><g><path d="M 130 145 L 200 145 L 195 220 L 135 220 z" fill="none" stroke="#475569" stroke-width="1.2"/><path d="M 138 165 L 192 165 L 188 215 L 142 215 z" fill="#DBEAFE" opacity="0.7"/><text x="225" y="180" font-size="8" fill="#1E3A8A">conical flask</text><text x="225" y="195" font-size="8" fill="#1E3A8A">(filtrate collects)</text></g><g><rect x="55" y="100" width="60" height="50" rx="4" fill="none" stroke="#475569" stroke-width="0.6" stroke-dasharray="2 2"/><circle cx="65" cy="115" r="3" fill="#92400E"/><circle cx="80" cy="120" r="3" fill="#92400E"/><circle cx="100" cy="115" r="3" fill="#92400E"/><circle cx="75" cy="135" r="3" fill="#92400E"/><circle cx="105" cy="135" r="3" fill="#92400E"/><text x="50" y="170" font-size="8" fill="#7C2D12">residue: sand</text></g></svg>',
        hotspots: [
          {
            id: 'fe-h-filt-funnel',
            x: 52,
            y: 50,
            label: 'Filter funnel',
            description:
              'A glass funnel that holds the filter paper and channels the mixture down into the flask below.',
          },
          {
            id: 'fe-h-filt-paper',
            x: 52,
            y: 36,
            label: 'Filter paper',
            description:
              'A circle of paper folded into a cone. It has tiny holes that let water through but trap larger solid particles.',
          },
          {
            id: 'fe-h-filt-residue',
            x: 28,
            y: 60,
            label: 'Residue',
            description:
              'The solid that the paper catches and holds back. With sand and water, the residue is the wet sand.',
          },
          {
            id: 'fe-h-filt-flask',
            x: 52,
            y: 80,
            label: 'Conical flask',
            description:
              'A glass flask that catches the liquid that passes through the paper.',
          },
          {
            id: 'fe-h-filt-filtrate',
            x: 80,
            y: 80,
            label: 'Filtrate',
            description:
              'The liquid that has passed through the paper. With sand and water, the filtrate is clear water.',
          },
        ],
      },
    },
    {
      id: 'fe-scene-evaporation',
      title: 'Evaporation: How the Apparatus Fits Together',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the evaporation set-up to name the piece of apparatus and read what it does.',
      data: {
        viewBox: '0 0 320 240',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240"><rect x="0" y="0" width="320" height="240" fill="#FEF3C7"/><rect x="0" y="220" width="320" height="20" fill="#D6D3D1"/><g><rect x="120" y="190" width="80" height="20" fill="#475569"/><line x1="130" y1="210" x2="130" y2="220" stroke="#475569" stroke-width="2"/><line x1="190" y1="210" x2="190" y2="220" stroke="#475569" stroke-width="2"/><text x="160" y="232" text-anchor="middle" font-size="8" fill="#1E3A8A">tripod</text></g><g><rect x="115" y="180" width="90" height="10" fill="#94A3B8" stroke="#475569"/><text x="245" y="187" font-size="8" fill="#1E3A8A">gauze</text></g><g><path d="M 130 130 L 190 130 L 195 175 L 125 175 z" fill="none" stroke="#475569" stroke-width="1.5"/><path d="M 137 145 L 183 145 L 188 172 L 132 172 z" fill="#DBEAFE" opacity="0.85"/><text x="245" y="155" font-size="8" fill="#1E3A8A">evaporating</text><text x="245" y="166" font-size="8" fill="#1E3A8A">basin</text></g><g><path d="M 145 220 Q 150 215 145 210 Q 140 205 145 200" stroke="#FB923C" stroke-width="2" fill="none"/><path d="M 160 220 Q 165 215 160 210 Q 155 205 160 200" stroke="#FB923C" stroke-width="2" fill="none"/><path d="M 175 220 Q 180 215 175 210 Q 170 205 175 200" stroke="#FB923C" stroke-width="2" fill="none"/><text x="80" y="225" text-anchor="middle" font-size="8" fill="#7C2D12">Bunsen flame</text></g><g stroke="#94A3B8" stroke-width="1.2" fill="none" opacity="0.6"><path d="M 145 130 Q 150 110 145 90"/><path d="M 160 130 Q 165 110 160 90"/><path d="M 175 130 Q 180 110 175 90"/></g><text x="245" y="105" font-size="8" fill="#1E3A8A">water vapour</text><text x="245" y="115" font-size="8" fill="#1E3A8A">leaves the basin</text><g fill="#FFFFFF" stroke="#475569" stroke-width="0.4"><circle cx="145" cy="160" r="1.5"/><circle cx="155" cy="158" r="1.5"/><circle cx="165" cy="160" r="1.5"/><circle cx="175" cy="158" r="1.5"/><circle cx="150" cy="166" r="1.5"/><circle cx="170" cy="166" r="1.5"/></g><text x="245" y="200" font-size="8" fill="#1E3A8A">(salt crystals form)</text></g></svg>',
        hotspots: [
          {
            id: 'fe-h-ev-basin',
            x: 50,
            y: 65,
            label: 'Evaporating basin',
            description:
              'A shallow ceramic dish that holds the salt solution. Its wide top lets the water vapour escape easily.',
          },
          {
            id: 'fe-h-ev-gauze',
            x: 50,
            y: 80,
            label: 'Gauze',
            description:
              'A wire mesh that spreads the heat of the flame evenly under the basin so the basin does not crack.',
          },
          {
            id: 'fe-h-ev-tripod',
            x: 50,
            y: 90,
            label: 'Tripod',
            description:
              'A three-legged metal stand that holds the gauze and basin above the Bunsen burner.',
          },
          {
            id: 'fe-h-ev-bunsen',
            x: 25,
            y: 92,
            label: 'Bunsen burner',
            description:
              'A gas burner that heats the basin from below. The flame is set to a gentle blue colour for a steady heat.',
          },
          {
            id: 'fe-h-ev-vapour',
            x: 78,
            y: 50,
            label: 'Water vapour leaves the basin',
            description:
              'The water particles gain energy from the flame and turn into water vapour, which spreads into the room.',
          },
          {
            id: 'fe-h-ev-crystals',
            x: 78,
            y: 80,
            label: 'Salt crystals stay in the basin',
            description:
              'The salt particles do not turn into a gas at this temperature, so they are left behind as a layer of crystals.',
          },
        ],
      },
    },
    {
      id: 'fe-scene-choice',
      title: 'Which Method Recovers Which Part of the Mixture?',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to match the right method to a real Year 7 lab task.',
      data: {
        viewBox: '0 0 320 200',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><rect x="0" y="0" width="320" height="200" fill="#FEF3C7"/><g><rect x="15" y="20" width="135" height="80" rx="4" fill="#BBF7D0" stroke="#14532D" stroke-width="1.2"/><text x="82" y="40" text-anchor="middle" font-size="10" font-weight="600" fill="#14532D">FILTRATION</text><text x="82" y="60" text-anchor="middle" font-size="8" fill="#14532D">recover an insoluble</text><text x="82" y="72" text-anchor="middle" font-size="8" fill="#14532D">solid from a liquid</text><text x="82" y="90" text-anchor="middle" font-size="8" fill="#14532D">e.g. sand from water</text></g><g><rect x="170" y="20" width="135" height="80" rx="4" fill="#FECACA" stroke="#7C2D12" stroke-width="1.2"/><text x="237" y="40" text-anchor="middle" font-size="10" font-weight="600" fill="#7C2D12">EVAPORATION</text><text x="237" y="60" text-anchor="middle" font-size="8" fill="#7C2D12">recover a dissolved</text><text x="237" y="72" text-anchor="middle" font-size="8" fill="#7C2D12">solute from a solution</text><text x="237" y="90" text-anchor="middle" font-size="8" fill="#7C2D12">e.g. salt from saltwater</text></g><g><rect x="15" y="120" width="290" height="70" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1"/><text x="160" y="138" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">Try this rule of thumb</text><text x="160" y="155" text-anchor="middle" font-size="8" fill="#1E3A8A">Insoluble lumps you can see? Filter them out.</text><text x="160" y="170" text-anchor="middle" font-size="8" fill="#1E3A8A">Solid hidden in solution? Evaporate the water and the solid stays behind.</text></g></svg>',
        hotspots: [
          {
            id: 'fe-h-ch-filt',
            x: 26,
            y: 30,
            label: 'Filtration',
            description:
              'The right choice when the solid does not dissolve and you can see lumps in the liquid.',
          },
          {
            id: 'fe-h-ch-evap',
            x: 74,
            y: 30,
            label: 'Evaporation',
            description:
              'The right choice when the solid has dissolved and the liquid looks clear, even though it tastes salty or sweet.',
          },
          {
            id: 'fe-h-ch-rule',
            x: 50,
            y: 78,
            label: 'Quick rule of thumb',
            description:
              'Visible lumps mean filtration; clear solution means evaporation. Always check whether the solid dissolves first.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'fe-worked-1',
      title: 'Recovering clean water from a sand and water mixture',
      steps: [
        {
          explanation:
            'Aisha has a beaker of dirty river water from a school field trip. Sand and small bits of leaf are mixed in with the water. She wants to collect the water without the lumps.',
        },
        {
          explanation:
            'Step 1: set up a filter funnel in a conical flask. Fold a circle of filter paper into a cone and place it inside the funnel.',
        },
        {
          explanation:
            'Step 2: pour the mixture slowly into the funnel. The water passes through the tiny holes in the paper, but the sand and leaf bits are too big and stay on top.',
          maths: 'water passes through; lumps stay on the paper',
        },
        {
          explanation:
            'Step 3: lift the paper out. The wet sand and leaves on the paper are the residue. The clear water in the flask below is the filtrate.',
        },
        {
          explanation:
            'So filtration has separated the insoluble lumps from the water. Aisha now has clear water in the flask, ready for the next step.',
        },
      ],
    },
    {
      id: 'fe-worked-2',
      title: 'Recovering pure salt from a salt solution',
      steps: [
        {
          explanation:
            'Question: Liam has a beaker of clear salt solution made by stirring 5 g of salt into 50 ml of water. He wants to recover the salt as a dry solid. Which method should he use, and what should he see at the end?',
        },
        {
          explanation:
            'The salt has dissolved, so the solution looks clear. Filtration would not work; the salt particles are too small to be caught by the paper.',
        },
        {
          explanation:
            'Step 1: pour the salt solution into an evaporating basin. Place the basin on a gauze on a tripod over a Bunsen burner with a gentle blue flame.',
        },
        {
          explanation:
            'Step 2: heat the basin gently. The water particles gain energy and turn into water vapour, which leaves the basin as a gas and spreads into the air.',
        },
        {
          explanation:
            'Step 3: keep heating until the basin is dry. The salt particles do not turn into a gas at this temperature, so they are left behind as white crystals on the basin.',
          maths: 'water leaves as vapour; salt stays as solid',
        },
        {
          explanation:
            'So evaporation has recovered the salt from the solution. Liam should see a layer of dry salt crystals coating the inside of the basin.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'fe-q1',
      type: 'multiple-choice',
      stem: 'Which method should you use to remove sand from a beaker of muddy water?',
      tier: 'core',
      options: ['Evaporation', 'Boiling', 'Filtration', 'Stirring'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'fe-mis-evap-for-insoluble',
    },
    {
      id: 'fe-q2',
      type: 'multiple-choice',
      stem: 'Which method should you use to recover salt from a beaker of salt solution?',
      tier: 'core',
      options: [
        'Evaporation',
        'Filtration',
        'Stirring it more',
        'Pouring it into a colder beaker',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'fe-mis-filter-for-soluble',
    },
    {
      id: 'fe-q3',
      type: 'multiple-choice',
      stem: 'After filtering a mixture of sand and water, what do we call the wet sand left on the filter paper?',
      tier: 'core',
      options: ['The solute', 'The filtrate', 'The residue', 'The solvent'],
      correctIndex: 2,
      xpValue: 10,
    },
    {
      id: 'fe-q4',
      type: 'multiple-choice',
      stem: 'After filtering a mixture of sand and water, what do we call the clear liquid that has passed through the filter paper into the flask?',
      tier: 'core',
      options: ['The residue', 'The solute', 'The crystals', 'The filtrate'],
      correctIndex: 3,
      xpValue: 10,
    },
    {
      id: 'fe-q5',
      type: 'labelled-image',
      stem: 'Drag each label onto the correct part of the evaporation set-up.',
      tier: 'core',
      viewBox: '0 0 320 240',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240"><rect x="0" y="0" width="320" height="240" fill="#F8FAFC"/><rect x="0" y="220" width="320" height="20" fill="#D6D3D1"/><g><rect x="120" y="190" width="80" height="20" fill="#475569"/><line x1="130" y1="210" x2="130" y2="220" stroke="#475569" stroke-width="2"/><line x1="190" y1="210" x2="190" y2="220" stroke="#475569" stroke-width="2"/></g><g><rect x="115" y="180" width="90" height="10" fill="#94A3B8" stroke="#475569"/></g><g><path d="M 130 130 L 190 130 L 195 175 L 125 175 z" fill="none" stroke="#475569" stroke-width="1.5"/><path d="M 137 145 L 183 145 L 188 172 L 132 172 z" fill="#DBEAFE" opacity="0.85"/></g><g><path d="M 145 220 Q 150 215 145 210 Q 140 205 145 200" stroke="#FB923C" stroke-width="2" fill="none"/><path d="M 160 220 Q 165 215 160 210 Q 155 205 160 200" stroke="#FB923C" stroke-width="2" fill="none"/><path d="M 175 220 Q 180 215 175 210 Q 170 205 175 200" stroke="#FB923C" stroke-width="2" fill="none"/></g></svg>',
      hotspots: [
        { id: 'fe-q5-h1', x: 50, y: 65, correctLabel: 'Evaporating basin' },
        { id: 'fe-q5-h2', x: 50, y: 80, correctLabel: 'Gauze' },
        { id: 'fe-q5-h3', x: 50, y: 90, correctLabel: 'Tripod' },
        { id: 'fe-q5-h4', x: 50, y: 95, correctLabel: 'Bunsen burner' },
      ],
      labels: [
        'Evaporating basin',
        'Gauze',
        'Tripod',
        'Bunsen burner',
        'Filter funnel',
        'Conical flask',
      ],
      xpValue: 20,
    },
    {
      id: 'fe-q6',
      type: 'numeric-entry',
      stem: 'Aisha pours a mixture into a filter funnel. The mixture has a total mass of 80 g. After filtering, the wet sand on the paper has a mass of 18 g. What is the mass of the filtrate in the flask, in grams?',
      tier: 'core',
      correctAnswer: 62,
      unit: 'g',
      xpValue: 10,
      hint: 'Mass is conserved. The filtrate plus the residue must equal the total mass of the original mixture.',
      misconceptionId: 'fe-mis-mass-lost',
    },
    {
      id: 'fe-q7',
      type: 'spot-misconception',
      stem: 'Sophie says: "I will use filter paper to take the salt out of saltwater. The paper will catch the salt and let the water through." Is she right?',
      tier: 'core',
      statements: [
        {
          text: 'Sophie is right. Salt is a solid, so the filter paper will trap it and let only the water through.',
          isMisconception: true,
        },
        {
          text: 'Sophie is wrong. The salt has dissolved, so its particles are far too small to be caught by the holes in the filter paper. They pass straight through with the water.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fe-mis-filter-for-soluble',
    },
    {
      id: 'fe-q8',
      type: 'drag-order',
      stem: 'Place these steps of a filtration in the correct order, from start to finish.',
      tier: 'core',
      items: [
        'Fold a piece of filter paper into a cone and place it inside the filter funnel',
        'Pour the mixture slowly into the funnel and let the liquid pass through',
        'Lift out the wet residue on the paper and collect the clear filtrate from the flask',
        'Set up the filter funnel above an empty conical flask',
      ],
      correctOrder: [3, 0, 1, 2],
      xpValue: 15,
    },
    {
      id: 'fe-q9',
      type: 'multiple-choice',
      stem: 'During evaporation of a salt solution, what happens to the water particles?',
      tier: 'confident',
      options: [
        'They join with the salt particles to form a new substance',
        'They gain energy from the heat, turn into water vapour and leave the basin as a gas',
        'They sink to the bottom of the basin and form a layer beneath the salt',
        'They stay liquid and slowly cool down on top of the salt',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'fe-mis-water-stays',
    },
    {
      id: 'fe-q10',
      type: 'multiple-choice',
      stem: 'Why is gauze placed between the tripod and the evaporating basin?',
      tier: 'confident',
      options: [
        'To spread the heat of the Bunsen flame evenly under the basin so the basin does not crack',
        'To stop the water vapour escaping into the air',
        'To filter the salt out of the water as it heats',
        'To soak up any spills if the basin tips over',
      ],
      correctIndex: 0,
      xpValue: 15,
    },
    {
      id: 'fe-q11',
      type: 'multiple-choice',
      stem: 'A pupil has a clear cup of homemade lemonade with a slice of lemon, ice cubes and dissolved sugar. She wants to take out only the lemon slice and the ice. Which method should she use?',
      tier: 'confident',
      options: [
        'Evaporation, because the sugar has dissolved',
        'Filtration, because the lemon slice and the ice are insoluble lumps',
        'Stir the cup more vigorously and the lumps will go away',
        'Pour the lemonade into a fridge',
      ],
      correctIndex: 1,
      xpValue: 15,
    },
    {
      id: 'fe-q12',
      type: 'numeric-entry',
      stem: 'Liam dissolves 8 g of salt in 92 g of water and stirs until the solution is clear. He pours the solution into an evaporating basin and heats it gently until the basin is fully dry. What is the mass of the dry crystals left in the basin, in grams?',
      tier: 'confident',
      correctAnswer: 8,
      unit: 'g',
      xpValue: 15,
      hint: 'Only the water turns to vapour and leaves. The salt particles stay behind in the basin.',
      misconceptionId: 'fe-mis-mass-lost',
    },
    {
      id: 'fe-q13',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: A pupil pours muddy pond water through a filter paper held in a funnel above an empty flask. Most of the cloudiness goes, but the water is still slightly tinted because some dissolved colour passed through. Use the particle model to explain why the filter caught the mud but not the colour.',
      tier: 'confident',
      steps: [
        'Filter paper has tiny holes that act like a sieve. Particles smaller than the holes pass through; larger particles are caught.',
        'Mud is made of small lumps of insoluble solid. The lumps are far bigger than the holes in the paper.',
        null,
        'So the paper catches the mud as a residue but lets the dissolved colour pass through with the water.',
      ],
      missingStepIndex: 2,
      correctStep:
        'The dissolved colour is made of separate particles that have spread through the gaps between the water particles. These particles are far smaller than the holes in the paper, so they slip through with the water.',
      xpValue: 20,
    },
    {
      id: 'fe-q14',
      type: 'free-text',
      stem: 'A pupil pours fresh tap water into one beaker and a freshly made salt solution into another beaker. Both look exactly the same: a clear liquid with no lumps. Why is it wrong to call them both pure water? Use evaporation in your answer.',
      tier: 'confident',
      sampleAnswer:
        'A clear liquid can still hold dissolved particles you cannot see. The salt solution looks clear because the salt particles have spread between the water particles, but they are still there. If you evaporated the water from each beaker, the tap water beaker would leave only a tiny amount of mineral residue while the salt beaker would leave a layer of dry salt crystals. So the second one is not pure water.',
      keywords: ['dissolved', 'salt', 'evaporation', 'crystals', 'pure'],
      xpValue: 15,
      misconceptionId: 'fe-mis-clear-means-pure',
    },
    {
      id: 'fe-q15',
      type: 'data-extraction',
      stem: 'A pupil filters four mixtures and weighs the residue and the filtrate from each. Use the table to read off the mass of the filtrate from mixture C, in grams. Mixture A: residue 12 g, filtrate 88 g. Mixture B: residue 25 g, filtrate 75 g. Mixture C: residue 9 g, filtrate 41 g. Mixture D: residue 30 g, filtrate 70 g.',
      tier: 'confident',
      dataSource:
        'Filtration results table. Mixture A: residue 12 g, filtrate 88 g. Mixture B: residue 25 g, filtrate 75 g. Mixture C: residue 9 g, filtrate 41 g. Mixture D: residue 30 g, filtrate 70 g.',
      correctAnswer: '41',
      xpValue: 15,
      hint: 'Find the row labelled Mixture C and read the filtrate column.',
    },
    {
      id: 'fe-q16',
      type: 'numeric-entry',
      stem: 'Aisha pours a 200 g mixture of chalk and water through a filter funnel into an empty flask. The wet residue on the filter paper has a mass of 35 g once it has been left to drip. What is the mass of the filtrate in the flask, in grams?',
      tier: 'challenge',
      correctAnswer: 165,
      unit: 'g',
      xpValue: 25,
      hint: 'Mass is conserved through filtration. Total mass equals filtrate plus residue.',
      misconceptionId: 'fe-mis-mass-lost',
    },
    {
      id: 'fe-q17',
      type: 'multiple-choice',
      stem: 'A school technician in Manchester recovers garden lime that has been mixed by mistake with sand for a Year 7 demo. Lime is insoluble in cold water, sand is also insoluble in water, and the two solid lumps are about the same size. Why would simple filtration not separate the lime from the sand?',
      tier: 'challenge',
      options: [
        'Both lumps are too small for the filter paper to catch',
        'Both solids are insoluble, so both stay on the filter paper as one mixed residue',
        'The sand reacts with the water in the funnel and turns into a liquid',
        'The lime dissolves in the water, so only the sand is left',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'fe-mis-filter-separates-solids',
    },
    {
      id: 'fe-q18',
      type: 'multiple-choice',
      stem: 'A pupil mixes 4 g of sand and 6 g of salt with 90 g of water in a beaker. He wants to recover both the dry salt and the dry sand from the mixture. Which sequence of methods should he use?',
      tier: 'challenge',
      options: [
        'Evaporate first to recover the salt and sand together, then filter the dry mixture to separate them',
        'Filter the mixture to catch the sand and salt together, then dry the paper',
        'Filter the mixture first to catch the sand. Then evaporate the filtrate to recover the salt as crystals',
        'Pour the mixture through a piece of cloth to separate the two solids in one step',
      ],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'fe-mis-filter-for-soluble',
    },
    {
      id: 'fe-q19',
      type: 'numeric-entry',
      stem: 'A school chef in Sevenoaks dissolves 25 g of salt into 475 g of water for a soup base. She accidentally evaporates all of the water from a small 100 g sample of this fully mixed salt solution while heating it on the hob. What is the mass, in grams, of dry salt left at the bottom of the pan?',
      tier: 'challenge',
      correctAnswer: 5,
      unit: 'g',
      xpValue: 25,
      hint: 'First find the fraction of the whole solution that is salt: 25 g out of 500 g total. Then take that fraction of the 100 g sample.',
    },
    {
      id: 'fe-q20',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: A pupil heats 100 g of clear sugar solution in an evaporating basin until the basin looks dry. The crystals that remain in the basin have a mass of only 12 g. Use the particle model and conservation of mass to explain where the rest of the mass has gone.',
      tier: 'challenge',
      steps: [
        'Sugar dissolves in water, so the 100 g of solution contains both sugar particles and water particles.',
        'The water particles gain energy from the heat and turn into water vapour, which leaves the basin as a gas and spreads into the air.',
        null,
        'So the missing 88 g is water vapour now in the air, not destroyed mass. Mass is still conserved overall.',
      ],
      missingStepIndex: 2,
      correctStep:
        'The sugar particles do not turn into a gas at this temperature, so they stay in the basin and form the 12 g of crystals. The 88 g difference is the mass of water that has evaporated.',
      xpValue: 25,
      misconceptionId: 'fe-mis-mass-lost',
    },
    {
      id: 'fe-q21',
      type: 'multiple-choice',
      stem: 'A teacher pours filtered seawater into an evaporating basin and heats it gently until the basin is dry. White crystals are left behind. A pupil tastes a tiny amount of the seawater straight after filtering and gets a strong salty taste; the same pupil tastes the dry crystals and gets the same taste. Which conclusion is best supported by these observations?',
      tier: 'challenge',
      options: [
        'Filtration removes the salt, so the filtrate must be pure water',
        'Evaporation creates salt out of the water by chemical reaction',
        'The crystals must be sand because they are visible solid lumps',
        'The salt in seawater is dissolved, so it passes straight through filter paper but is left behind when the water evaporates',
      ],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'fe-mis-filter-for-soluble',
    },
  ],
  misconceptions: [
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education (https://edu.rsc.org/particle-diagrams/students-ideas-about-the-particulate-nature-of-matter-beyond-appearances/4017763.article): a recurring Year 7 belief is that filter paper "catches dissolved salt the same way it catches sand". Reinforced by Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question sets on dissolving and separating mixtures, where pupils predict that filter paper will trap dissolved sugar.
    {
      id: 'fe-mis-filter-for-soluble',
      description:
        'Filter paper can be used to take a dissolved solid such as salt or sugar out of its solution.',
      triggerAnswer: 'filter-for-soluble',
      correction:
        'In fact dissolved particles are far too small for the holes in the filter paper. They slip straight through with the liquid, so filtration cannot recover a soluble solid.',
      reExplanation:
        'When salt dissolves, the salt particles spread evenly into the gaps between the water particles. They are tiny on their own, much smaller than the holes in filter paper. To recover salt from a solution you have to remove the water by evaporation, not filtration. Filtration only works for insoluble lumps that are large enough to be caught by the paper.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2019 (8462/1F), Q08 on separating mixtures: candidates often suggested evaporating sand from water to "recover" the sand, rather than using filtration. The same trigger appears in OCR Gateway Chemistry examiner reports for the practical separating-mixtures activity.
    {
      id: 'fe-mis-evap-for-insoluble',
      description:
        'Evaporation is the right method to remove an insoluble solid such as sand from water.',
      triggerAnswer: 'evap-for-insoluble',
      correction:
        'In fact filtration is the right method for an insoluble lump. Evaporation only helps when the solid is dissolved in the liquid.',
      reExplanation:
        'A sand and water mixture has visible lumps. Pour it through filter paper and the lumps stay on the paper as a residue while the water passes through. Evaporation would also remove the water, but it would waste energy and leave the sand together with anything else that is in the water. For lumps you can see, filtration is the simpler and faster choice.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2018 (1CH0/1F), Q07 on filtration mass balance: candidates often wrote that "the mass goes down because the water has gone". The same conservation-of-mass slip is documented in Best Evidence Science Teaching (BEST) KS3 separating-mixtures diagnostics.
    {
      id: 'fe-mis-mass-lost',
      description:
        'Mass is lost when a mixture is filtered or evaporated, because part of the substance disappears in the process.',
      triggerAnswer: 'mass-lost',
      correction:
        'In fact mass is conserved. Every particle that started in the mixture is still there afterwards, either in the residue, in the filtrate, or as vapour in the air.',
      reExplanation:
        'Place the funnel, paper and flask on a balance before filtering, and again afterwards. The total reading does not change. After evaporation, the water has not been destroyed; it is now spread out as vapour in the room around the basin. If you trapped that vapour in a sealed dome, it would still weigh the same as it did when it was a liquid.',
    },
    // Source: David Paterson, "Teaching pupils to separate mixtures", RSC Education CPD article (2020-09-21): a long-standing Year 7 misunderstanding is that the water itself "stays in the basin" and the salt is what evaporates, because the salt is the part being recovered. The misconception is also reported in CGP KS3 Chemistry common-mistake callouts on evaporation.
    {
      id: 'fe-mis-water-stays',
      description:
        'During evaporation, the salt particles turn into a gas and the water particles stay in the basin.',
      triggerAnswer: 'water-stays',
      correction:
        'In fact the opposite is true. The water particles gain energy from the heat and leave as water vapour, while the salt particles stay behind in the basin.',
      reExplanation:
        'Salt boils at over 1400 C, far above any school Bunsen flame. Water boils at 100 C, well within the heat of a gentle blue flame. So at lab temperatures only the water turns into a gas and leaves the basin. The salt particles are left clumped together as crystals on the bottom of the basin, which is exactly the way we recover them.',
    },
    // Source: OCR Gateway Chemistry examiner report June 2022 (J248/01), Q06 on separating a salt and sand mixture from water: candidates often described filtration as a way to separate two different solids from each other in a single step, rather than the dissolve-filter-evaporate sequence. Reinforced by CGP KS3 Chemistry on multi-stage separations.
    {
      id: 'fe-mis-filter-separates-solids',
      description:
        'A single filtration can separate two insoluble solids that have been mixed together.',
      triggerAnswer: 'filter-separates-solids',
      correction:
        'In fact a single filtration just catches all of the insoluble solids together as one combined residue. To separate two insoluble solids from each other you need a different approach.',
      reExplanation:
        'Imagine a mixture of sand and chalk in water. Pour it through filter paper and the paper holds back both the sand and the chalk together. They are mixed up in one residue. To separate them you have to use another property such as solubility in a different liquid, particle size, or magnetism. Filtration only sorts insoluble solids from the liquid, not insoluble solids from each other.',
    },
    // Source: Best Evidence Science Teaching (BEST), STEM Learning / UCL, "Pure and impure substances" diagnostic question set (KS3): a recurring confusion is that "pure water" is the same as "water that looks clear", so pupils call any clear liquid pure even if it is a salt solution.
    {
      id: 'fe-mis-clear-means-pure',
      description:
        'A liquid is pure water as long as it looks clear. If you cannot see anything dissolved in it, there is nothing in it.',
      triggerAnswer: 'clear-means-pure',
      correction:
        'In fact a clear liquid can still hold dissolved particles that you cannot see. Salt solution, sugar solution and tap water are all clear, but none of them are pure water.',
      reExplanation:
        'Stir a teaspoon of salt into a glass of water. Once the salt has dissolved the glass looks completely clear, just like before, but the salt particles are still there. Taste it and the salty flavour gives them away. Evaporation in the lab confirms it: heat the clear solution and a layer of dry salt is left in the basin, even though the liquid looked pure.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const separatingMixturesZone: Zone = {
  id: 'chemistry-separating-mixtures',
  name: 'Separating Mixtures',
  realm: 'elementia',
  nodeIds: ['chemistry-separating-filtration-evaporation'],
}
