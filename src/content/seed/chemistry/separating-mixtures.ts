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
      stem: 'Sophie says: "I will use filter paper to take the salt out of saltwater. The paper will catch the salt and let the water through."',
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

export const distillation: SkillNode = {
  id: 'chemistry-separating-distillation',
  title: 'Distillation',
  description:
    'Use simple distillation to recover a pure liquid from a solution by boiling and then condensing the vapour. Identify each piece of the distillation apparatus and explain its job. Recognise that fractional distillation extends the same idea to two miscible liquids with different boiling points.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-separating-mixtures',
  zoneName: 'Separating Mixtures',
  tier: 'confident',
  prerequisites: ['chemistry-separating-filtration-evaporation'],
  curriculum: {
    ks3Objective:
      'The concept of a pure substance; mixtures, including dissolving; simple techniques for separating mixtures: filtration, evaporation, distillation and chromatography.',
    awardingBodies: {
      aqa: '4.10.1.3 Distillation, including fractional distillation (8462)',
      edexcel: 'Topic 1.45 Simple and fractional distillation (1CH0)',
      ocr: 'C2.1d Recover a solvent by simple distillation; C2.1e Separate miscible liquids by fractional distillation (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'di-scene-apparatus',
      title: 'Simple Distillation: Following the Particles',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the distillation set-up to name the piece of apparatus and read what it does to the particles.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><rect x="0" y="200" width="360" height="20" fill="#D6D3D1"/><g><circle cx="60" cy="120" r="32" fill="none" stroke="#475569" stroke-width="1.5"/><path d="M 60 88 L 60 70 L 50 60 L 70 60 z" fill="none" stroke="#475569" stroke-width="1.5"/><circle cx="60" cy="125" r="22" fill="#DBEAFE"/></g><g><line x1="60" y1="60" x2="120" y2="40" stroke="#475569" stroke-width="1.2"/><circle cx="120" cy="40" r="8" fill="#FFFFFF" stroke="#475569" stroke-width="1.2"/><line x1="118" y1="40" x2="122" y2="40" stroke="#DC2626" stroke-width="1"/></g><g><rect x="120" y="55" width="160" height="18" fill="none" stroke="#475569" stroke-width="1.5"/><rect x="125" y="58" width="150" height="12" fill="none" stroke="#94A3B8" stroke-width="0.6" stroke-dasharray="2 2"/><rect x="115" y="48" width="170" height="32" fill="none" stroke="#94A3B8" stroke-width="0.6"/><line x1="115" y1="48" x2="115" y2="80" stroke="#94A3B8" stroke-width="0.6"/><line x1="285" y1="48" x2="285" y2="80" stroke="#94A3B8" stroke-width="0.6"/><line x1="115" y1="48" x2="100" y2="40" stroke="#3B82F6" stroke-width="1.5" marker-end="url(#a3)"/><line x1="285" y1="80" x2="305" y2="90" stroke="#3B82F6" stroke-width="1.5" marker-end="url(#a3)"/><text x="100" y="35" font-size="7" fill="#1E3A8A">cold water in</text><text x="295" y="100" font-size="7" fill="#1E3A8A">warm water out</text></g><g><rect x="285" y="100" width="50" height="90" rx="3" fill="none" stroke="#475569" stroke-width="1.5"/><rect x="290" y="160" width="40" height="28" fill="#DBEAFE" opacity="0.85"/><text x="310" y="200" text-anchor="middle" font-size="7" fill="#1E3A8A">distillate</text></g><g><path d="M 50 175 Q 55 170 50 165 Q 45 160 50 155" stroke="#FB923C" stroke-width="2" fill="none"/><path d="M 60 175 Q 65 170 60 165 Q 55 160 60 155" stroke="#FB923C" stroke-width="2" fill="none"/><path d="M 70 175 Q 75 170 70 165 Q 65 160 70 155" stroke="#FB923C" stroke-width="2" fill="none"/></g><defs><marker id="a3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#3B82F6"/></marker></defs></svg>',
        hotspots: [
          {
            id: 'di-h-app-flask',
            x: 18,
            y: 60,
            label: 'Round-bottom flask',
            description:
              'Holds the salt solution. The round shape lets the heat spread evenly, so the solution boils smoothly.',
          },
          {
            id: 'di-h-app-bunsen',
            x: 18,
            y: 85,
            label: 'Bunsen burner',
            description:
              'Heats the flask until the water in the solution boils. Salt boils far hotter than the Bunsen flame, so it stays as a solid.',
          },
          {
            id: 'di-h-app-thermometer',
            x: 35,
            y: 22,
            label: 'Thermometer at the side-arm',
            description:
              'Reads the temperature of the vapour going into the condenser. For pure water, the reading should hold at 100 C.',
          },
          {
            id: 'di-h-app-condenser',
            x: 56,
            y: 33,
            label: 'Condenser with cold water in and out',
            description:
              'A glass tube with a cold water jacket around it. The cold walls cool the water vapour back to liquid water.',
          },
          {
            id: 'di-h-app-water-flow',
            x: 85,
            y: 50,
            label: 'Cold water flows in at the bottom',
            description:
              'Cold water enters at the bottom of the jacket and warms up as it travels along, leaving warm at the top.',
          },
          {
            id: 'di-h-app-collect',
            x: 86,
            y: 80,
            label: 'Beaker collects the distillate',
            description:
              'The condensed liquid drips out into a clean beaker. With a salt solution the distillate is pure water.',
          },
        ],
      },
    },
    {
      id: 'di-scene-particle-story',
      title: 'A Particle Journey Through Distillation',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to follow a single water particle from the salt solution through to the collecting beaker.',
      data: {
        viewBox: '0 0 360 200',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 200"><rect x="0" y="0" width="360" height="200" fill="#FEF3C7"/><g><rect x="20" y="100" width="80" height="80" rx="4" fill="#BFDBFE" stroke="#1E3A8A"/><text x="60" y="92" text-anchor="middle" font-size="8" font-weight="600" fill="#1E3A8A">SALT SOLUTION</text><g fill="#1E3A8A"><circle cx="35" cy="125" r="2.5"/><circle cx="50" cy="130" r="2.5"/><circle cx="65" cy="125" r="2.5"/><circle cx="80" cy="135" r="2.5"/><circle cx="40" cy="155" r="2.5"/><circle cx="60" cy="160" r="2.5"/><circle cx="80" cy="155" r="2.5"/><circle cx="50" cy="170" r="2.5"/><circle cx="70" cy="170" r="2.5"/></g><g fill="#475569"><circle cx="45" cy="140" r="2"/><circle cx="70" cy="145" r="2"/><circle cx="55" cy="165" r="2"/><circle cx="78" cy="170" r="2"/></g></g><g><rect x="135" y="40" width="80" height="80" rx="4" fill="#FECACA" stroke="#7C2D12"/><text x="175" y="32" text-anchor="middle" font-size="8" font-weight="600" fill="#7C2D12">VAPOUR (hot)</text><g fill="#1E3A8A" opacity="0.85"><circle cx="150" cy="55" r="2"/><circle cx="170" cy="65" r="2"/><circle cx="195" cy="60" r="2"/><circle cx="160" cy="80" r="2"/><circle cx="185" cy="85" r="2"/><circle cx="205" cy="100" r="2"/></g></g><g><rect x="250" y="40" width="80" height="40" rx="3" fill="#BBF7D0" stroke="#14532D"/><text x="290" y="32" text-anchor="middle" font-size="8" font-weight="600" fill="#14532D">CONDENSER (cold)</text><g fill="#1E3A8A"><circle cx="262" cy="58" r="2.5"/><circle cx="278" cy="65" r="2.5"/><circle cx="296" cy="60" r="2.5"/><circle cx="312" cy="68" r="2.5"/><circle cx="270" cy="72" r="2.5"/><circle cx="295" cy="75" r="2.5"/></g></g><g><rect x="265" y="120" width="50" height="60" rx="3" fill="#BFDBFE" stroke="#1E3A8A"/><text x="290" y="112" text-anchor="middle" font-size="8" font-weight="600" fill="#1E3A8A">PURE WATER</text><rect x="270" y="145" width="40" height="30" fill="#DBEAFE"/></g><g stroke="#475569" stroke-width="1" fill="none"><path d="M 100 140 Q 117 100 135 80" marker-end="url(#a4)"/><path d="M 215 80 L 250 70" marker-end="url(#a4)"/><path d="M 290 90 L 290 120" marker-end="url(#a4)"/></g><defs><marker id="a4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#475569"/></marker></defs></svg>',
        hotspots: [
          {
            id: 'di-h-pj-start',
            x: 17,
            y: 75,
            label: 'Start: dissolved in the flask',
            description:
              'A water particle starts mixed in among the salt particles in the round-bottom flask.',
          },
          {
            id: 'di-h-pj-boil',
            x: 50,
            y: 50,
            label: 'Boil: breaks away as vapour',
            description:
              'When the flask reaches 100 C, the water particles gain enough energy to break away from each other and become a gas.',
          },
          {
            id: 'di-h-pj-saltleft',
            x: 17,
            y: 90,
            label: 'Salt particles stay behind',
            description:
              'Salt boils above 1400 C, far hotter than a Bunsen flame, so the salt particles stay at the bottom of the flask.',
          },
          {
            id: 'di-h-pj-condense',
            x: 80,
            y: 30,
            label: 'Condense: back to liquid',
            description:
              'Inside the condenser the cold walls slow the vapour particles, which clump together and form liquid water again.',
          },
          {
            id: 'di-h-pj-collect',
            x: 80,
            y: 80,
            label: 'Collect: pure water in the beaker',
            description:
              'The liquid drips into the beaker. Only water particles made the trip, so the distillate is pure water.',
          },
        ],
      },
    },
    {
      id: 'di-scene-fractional',
      title: 'Fractional Distillation: Two Liquids, Two Boiling Points',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the fractional distillation set-up to see how the column lets a liquid with a lower boiling point come over first.',
      data: {
        viewBox: '0 0 360 240',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 240"><rect x="0" y="0" width="360" height="240" fill="#FEF3C7"/><rect x="0" y="220" width="360" height="20" fill="#D6D3D1"/><g><circle cx="60" cy="170" r="28" fill="none" stroke="#475569" stroke-width="1.5"/><circle cx="60" cy="175" r="20" fill="#FEF3C7"/></g><g><rect x="50" y="80" width="20" height="60" fill="none" stroke="#475569" stroke-width="1.5"/><g fill="#94A3B8"><circle cx="58" cy="92" r="2"/><circle cx="65" cy="100" r="2"/><circle cx="55" cy="108" r="2"/><circle cx="62" cy="116" r="2"/><circle cx="58" cy="124" r="2"/><circle cx="65" cy="130" r="2"/></g><text x="105" y="110" font-size="7" fill="#1E3A8A">fractionating column</text><text x="105" y="120" font-size="7" fill="#1E3A8A">(glass beads inside)</text></g><g><line x1="60" y1="80" x2="120" y2="60" stroke="#475569" stroke-width="1.2"/><circle cx="120" cy="60" r="8" fill="#FFFFFF" stroke="#475569" stroke-width="1.2"/><line x1="118" y1="60" x2="122" y2="60" stroke="#DC2626" stroke-width="1"/></g><g><rect x="120" y="75" width="160" height="18" fill="none" stroke="#475569" stroke-width="1.5"/><rect x="125" y="78" width="150" height="12" fill="none" stroke="#94A3B8" stroke-width="0.6" stroke-dasharray="2 2"/></g><g><rect x="285" y="120" width="50" height="90" rx="3" fill="none" stroke="#475569" stroke-width="1.5"/><rect x="290" y="170" width="40" height="35" fill="#DBEAFE" opacity="0.85"/></g><g><path d="M 50 220 Q 55 215 50 210 Q 45 205 50 200" stroke="#FB923C" stroke-width="2" fill="none"/><path d="M 60 220 Q 65 215 60 210 Q 55 205 60 200" stroke="#FB923C" stroke-width="2" fill="none"/><path d="M 70 220 Q 75 215 70 210 Q 65 205 70 200" stroke="#FB923C" stroke-width="2" fill="none"/></g></svg>',
        hotspots: [
          {
            id: 'di-h-fr-mix',
            x: 17,
            y: 78,
            label: 'A mixture of two liquids',
            description:
              'Two miscible liquids with different boiling points, for example ethanol (78 C) and water (100 C), sit in the flask.',
          },
          {
            id: 'di-h-fr-column',
            x: 17,
            y: 50,
            label: 'Fractionating column',
            description:
              'A tall glass column packed with beads. Hot vapour rising through the column meets cooler glass and partly condenses.',
          },
          {
            id: 'di-h-fr-thermo',
            x: 35,
            y: 20,
            label: 'Thermometer holds at 78 C',
            description:
              'When ethanol comes over, the reading sits at 78 C. Once the ethanol has finished, the temperature climbs toward 100 C.',
          },
          {
            id: 'di-h-fr-collect-1',
            x: 86,
            y: 75,
            label: 'First collection: pure ethanol',
            description:
              'Because ethanol has the lower boiling point, it leaves the flask first and is collected as the first fraction.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'di-worked-1',
      title: 'Why pure water comes out of the condenser, but not the salt',
      steps: [
        {
          explanation:
            'Aisha sets up a simple distillation with a round-bottom flask of salt solution, a thermometer at the side-arm, a condenser with cold water in and out, and a beaker to catch the distillate.',
        },
        {
          explanation:
            'Step 1: heat the flask gently with a Bunsen burner. The water in the solution starts to boil at 100 C and the temperature reading at the side-arm holds steady there.',
          maths: 'thermometer holds at 100 C',
        },
        {
          explanation:
            'Step 2: water particles gain enough energy to break away from each other and become water vapour. They rise out of the flask and into the condenser.',
        },
        {
          explanation:
            'Step 3: salt particles need to reach over 1400 C to boil. The Bunsen flame only takes the flask to 100 C, so salt particles stay at the bottom of the flask.',
        },
        {
          explanation:
            'Step 4: inside the condenser the cold water jacket cools the water vapour. The vapour particles slow down, clump back together and form liquid water again.',
          maths: 'water vapour at 100 C condenses to liquid water',
        },
        {
          explanation:
            'Step 5: drops of liquid water flow out of the bottom of the condenser and collect in the beaker.',
        },
        {
          explanation:
            'So only water made the round trip from the flask to the beaker. The distillate is pure water, while the salt is left behind in the flask.',
        },
      ],
    },
    {
      id: 'di-worked-2',
      title: 'Choosing simple or fractional distillation',
      steps: [
        {
          explanation:
            'Question: Liam has two mixtures. Mixture 1 is salt dissolved in water; mixture 2 is a clear liquid that holds 50 ml of ethanol mixed with 50 ml of water. Which kind of distillation should he use for each, and why?',
        },
        {
          explanation:
            'Mixture 1: salt is a solid that does not turn into a gas at lab temperatures. Only the water boils and rises into the condenser, so a single side-arm condenser is enough.',
        },
        {
          explanation:
            'For mixture 1, simple distillation is the right choice. The thermometer holds at 100 C while pure water comes over, and the salt is left behind in the flask.',
        },
        {
          explanation:
            'Mixture 2: ethanol boils at 78 C and water boils at 100 C. If Liam used simple distillation, vapour from both liquids would rise together and condense together, so the distillate would still be a mixture.',
        },
        {
          explanation:
            'For mixture 2, fractional distillation is needed. Adding a fractionating column gives the vapour many chances to condense and re-evaporate. Only ethanol vapour reaches the top first, so ethanol is collected first while the thermometer holds at 78 C.',
          maths: 'thermometer holds at 78 C while ethanol distils',
        },
        {
          explanation:
            'Once the ethanol has finished, the temperature climbs and water can be collected separately, or left in the flask.',
        },
        {
          explanation:
            'So the rule of thumb: simple distillation for a solid dissolved in a liquid; fractional distillation for two miscible liquids with different boiling points.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'di-q1',
      type: 'multiple-choice',
      stem: 'Which method should you use to recover pure water from a beaker of salt solution, in a way that lets you collect the water rather than letting it escape into the air?',
      tier: 'core',
      options: [
        'Filtration',
        'Stirring',
        'Crushing',
        'Simple distillation',
      ],
      correctIndex: 3,
      xpValue: 10,
    },
    {
      id: 'di-q2',
      type: 'multiple-choice',
      stem: 'During simple distillation of a salt solution, what happens to the salt?',
      tier: 'core',
      options: [
        'The salt evaporates with the water and is collected in the beaker',
        'The salt is destroyed by the heat',
        'The salt stays in the round-bottom flask, because it does not boil at this temperature',
        'The salt passes through the condenser as a fine powder',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'di-mis-salt-evaporates',
    },
    {
      id: 'di-q3',
      type: 'multiple-choice',
      stem: 'In a simple distillation set-up, where on the apparatus should the thermometer bulb sit?',
      tier: 'core',
      options: [
        'At the bottom of the round-bottom flask, in the salt solution',
        'Inside the collecting beaker',
        'Halfway down the cold water jacket of the condenser',
        'Right at the side-arm where the vapour leaves the flask',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'di-mis-thermometer-position',
    },
    {
      id: 'di-q4',
      type: 'multiple-choice',
      stem: 'Why does cold water flow into the condenser at the bottom and out at the top, instead of the other way round?',
      tier: 'core',
      options: [
        'So the cold water flows against the vapour, keeping the whole condenser cold and the cooling efficient',
        'So the warm water can be drunk afterwards',
        'So the cold water can be filtered',
        'It does not matter; the condenser works the same in both directions',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'di-mis-condenser-warms',
    },
    {
      id: 'di-q5',
      type: 'labelled-image',
      stem: 'Drag each label onto the correct part of the simple distillation set-up.',
      tier: 'core',
      viewBox: '0 0 360 220',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#F8FAFC"/><rect x="0" y="200" width="360" height="20" fill="#D6D3D1"/><g><circle cx="60" cy="120" r="32" fill="none" stroke="#475569" stroke-width="1.5"/><path d="M 60 88 L 60 70 L 50 60 L 70 60 z" fill="none" stroke="#475569" stroke-width="1.5"/></g><g><line x1="60" y1="60" x2="120" y2="40" stroke="#475569" stroke-width="1.2"/><circle cx="120" cy="40" r="8" fill="#FFFFFF" stroke="#475569" stroke-width="1.2"/></g><g><rect x="120" y="55" width="160" height="18" fill="none" stroke="#475569" stroke-width="1.5"/><rect x="115" y="48" width="170" height="32" fill="none" stroke="#94A3B8" stroke-width="0.6"/></g><g><rect x="285" y="100" width="50" height="90" rx="3" fill="none" stroke="#475569" stroke-width="1.5"/></g></svg>',
      hotspots: [
        { id: 'di-q5-h1', x: 18, y: 60, correctLabel: 'Round-bottom flask' },
        { id: 'di-q5-h2', x: 35, y: 22, correctLabel: 'Thermometer' },
        { id: 'di-q5-h3', x: 56, y: 33, correctLabel: 'Condenser' },
        { id: 'di-q5-h4', x: 86, y: 80, correctLabel: 'Collecting beaker' },
      ],
      labels: [
        'Round-bottom flask',
        'Thermometer',
        'Condenser',
        'Collecting beaker',
        'Filter funnel',
        'Evaporating basin',
      ],
      xpValue: 20,
    },
    {
      id: 'di-q6',
      type: 'numeric-entry',
      stem: 'Aisha distils 100 ml of pure water from a round-bottom flask of salt solution. The thermometer at the side-arm holds steady throughout. What temperature reading, in C, should she record while the water distils?',
      tier: 'core',
      correctAnswer: 100,
      unit: 'C',
      xpValue: 10,
      hint: 'Pure water boils at the same temperature in any flask. The reading does not change during a state change.',
    },
    {
      id: 'di-q7',
      type: 'drag-order',
      stem: 'Place the journey of a single water particle through a simple distillation in the correct order.',
      tier: 'core',
      items: [
        'Cools on the inside walls of the condenser and clumps with other water particles to become liquid again',
        'Sits dissolved in the salt solution in the round-bottom flask',
        'Drips out of the bottom of the condenser into the collecting beaker as pure water',
        'Gains energy from the Bunsen flame and breaks away from its neighbours as water vapour',
      ],
      correctOrder: [1, 3, 0, 2],
      xpValue: 15,
    },
    {
      id: 'di-q8',
      type: 'spot-misconception',
      stem: 'Sophie says: "When you distil a salt solution, the salt evaporates with the water. The condenser then catches the salt and the water together, so the distillate has salt in it."',
      tier: 'confident',
      statements: [
        {
          text: 'Sophie is right. Both the water and the salt turn into a gas, so both end up in the beaker.',
          isMisconception: true,
        },
        {
          text: 'Sophie is wrong. Salt boils above 1400 C, far hotter than a Bunsen flame, so the salt does not turn into a gas. Only the water reaches the condenser and the distillate is pure water.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'di-mis-salt-evaporates',
    },
    {
      id: 'di-q9',
      type: 'multiple-choice',
      stem: 'A pupil distils a salt solution but uses a thermometer that is sitting in the salt solution at the bottom of the flask, not at the side-arm. Why is this a problem?',
      tier: 'confident',
      options: [
        'The thermometer cannot read above 100 C in any liquid',
        'The thermometer reads the temperature of the boiling liquid, not the temperature of the vapour leaving the flask, so it cannot tell the pupil whether pure water is coming over',
        'The thermometer would melt at the bottom of the flask',
        'The thermometer would change the colour of the salt solution',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'di-mis-thermometer-position',
    },
    {
      id: 'di-q10',
      type: 'multiple-choice',
      stem: 'A pupil tries to distil a 50 ml ethanol and 50 ml water mixture using a simple distillation set-up with no fractionating column. The thermometer reading climbs steadily from 78 C up to 100 C while the distillate is being collected. What does this tell the pupil about the distillate in the beaker?',
      tier: 'confident',
      options: [
        'The distillate is pure ethanol, because ethanol has the lower boiling point',
        'The distillate is pure water, because water boils at 100 C',
        'The distillate is a mixture of ethanol and water, because both have boiled and come over together',
        'The distillate is a new compound formed when ethanol and water boil at the same time',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'di-mis-simple-separates-liquids',
    },
    {
      id: 'di-q11',
      type: 'multiple-choice',
      stem: 'What is the main job of the fractionating column in a fractional distillation?',
      tier: 'confident',
      options: [
        'To filter the liquid before it reaches the condenser',
        'To give the rising vapour many chances to condense and re-evaporate, so only the liquid with the lowest boiling point reaches the top',
        'To slow down the speed of the cold water in the jacket',
        'To stop the salt from rising up out of the round-bottom flask',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'di-mis-column-redundant',
    },
    {
      id: 'di-q12',
      type: 'numeric-entry',
      stem: 'A pupil distils a 200 ml mixture made of 60 ml of ethanol and 140 ml of water using a fractional distillation set-up. The thermometer first holds at 78 C while the lower boiling point liquid distils over fully. What volume of distillate, in millilitres, should the pupil collect during the 78 C plateau?',
      tier: 'confident',
      correctAnswer: 60,
      unit: 'ml',
      xpValue: 15,
      hint: 'The 78 C reading marks the boiling point of ethanol. Only ethanol distils over while the temperature holds there.',
    },
    {
      id: 'di-q13',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: A pupil distils a salt solution. The thermometer at the side-arm holds at 100 C while liquid drips into the beaker. After 10 minutes the flask runs dry, the temperature climbs and the dripping stops. The beaker now contains only pure water. Use the particle model to explain why the distillate is pure water and the salt has stayed behind.',
      tier: 'confident',
      steps: [
        'Inside the round-bottom flask, the salt particles and the water particles are mixed evenly because the salt has dissolved.',
        'When the flask is heated to 100 C, the water particles gain enough energy to break away from each other and become a gas.',
        null,
        'The water vapour rises through the side-arm into the condenser, where the cold walls cool the particles back into liquid water that drips into the beaker.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Salt particles need to be heated above 1400 C before they can break away as a gas, so at 100 C they stay where they are at the bottom of the flask.',
      xpValue: 20,
    },
    {
      id: 'di-q14',
      type: 'data-extraction',
      stem: 'A pupil records the thermometer reading every minute as a fractional distillation of an ethanol and water mixture proceeds. The readings are: 0 minutes 22 C; 4 minutes 78 C; 8 minutes 78 C; 12 minutes 78 C; 16 minutes 95 C; 20 minutes 100 C; 24 minutes 100 C. What temperature, in C, marks the boiling point of the lower boiling point liquid in the mixture?',
      tier: 'confident',
      dataSource:
        'Thermometer readings during a fractional distillation of an ethanol and water mixture: 0 minutes 22 C; 4 minutes 78 C; 8 minutes 78 C; 12 minutes 78 C; 16 minutes 95 C; 20 minutes 100 C; 24 minutes 100 C.',
      correctAnswer: '78',
      xpValue: 15,
      hint: 'Find the first plateau, where the reading stops rising for several minutes.',
    },
    {
      id: 'di-q15',
      type: 'multiple-choice',
      stem: 'Liam runs a simple distillation of muddy salt water. He pours the mixture straight into the round-bottom flask without filtering it first. After distilling for 15 minutes, the beaker holds clear liquid. Which best describes the contents of the beaker?',
      tier: 'confident',
      options: [
        'A clear mixture of salt, mud and water',
        'Pure water; both the salt and the mud are left behind in the flask',
        'Pure salt water, because the mud has been removed',
        'A clear sample of mud particles too small to see',
      ],
      correctIndex: 1,
      xpValue: 15,
    },
    {
      id: 'di-q16',
      type: 'numeric-entry',
      stem: 'Aisha distils 250 g of clear salt solution that she made by stirring 25 g of salt into 225 g of water. After the distillation has finished, the round-bottom flask still holds all of the salt and a small puddle of water that did not get a chance to boil off, with a total mass of 35 g. What mass, in grams, of pure water has she collected in the beaker?',
      tier: 'challenge',
      correctAnswer: 215,
      unit: 'g',
      xpValue: 25,
      hint: 'Mass is conserved overall. Total starting mass equals what is left in the flask plus what is in the beaker.',
      misconceptionId: 'di-mis-mass-lost',
    },
    {
      id: 'di-q17',
      type: 'multiple-choice',
      stem: 'A pupil sets up a simple distillation but forgets to turn on the cold water flow through the condenser. The Bunsen flame stays lit and the salt solution still boils. What is the most likely result?',
      tier: 'challenge',
      options: [
        'Pure salt is collected in the beaker instead of pure water',
        'No water vapour is produced, because the condenser is not cold',
        'The water vapour escapes from the end of the condenser as a gas, instead of condensing into liquid in the beaker',
        'The condenser explodes from the heat',
      ],
      correctIndex: 2,
      xpValue: 25,
    },
    {
      id: 'di-q18',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: A school in Tunbridge Wells runs a fractional distillation in a Year 7 demo. The mixture is 80 ml of ethanol and 80 ml of water. The thermometer holds at 78 C while liquid is collected in beaker A, then climbs and holds at 100 C while liquid is collected in beaker B. Use the particle model to explain why the two beakers hold different liquids.',
      tier: 'challenge',
      steps: [
        'In the round-bottom flask, ethanol particles and water particles are mixed evenly.',
        'Ethanol boils at 78 C, the lower of the two boiling points, so when the flask reaches 78 C the ethanol particles break away as vapour while the water particles stay liquid.',
        null,
        'Once all the ethanol has gone, the temperature climbs again. When it reaches 100 C, the water particles break away as vapour and condense into beaker B as pure water.',
      ],
      missingStepIndex: 2,
      correctStep:
        'The fractionating column lets only the ethanol vapour reach the top, where it travels into the condenser, cools and drips into beaker A as pure ethanol while the temperature holds at 78 C.',
      xpValue: 25,
      misconceptionId: 'di-mis-simple-separates-liquids',
    },
    {
      id: 'di-q19',
      type: 'multiple-choice',
      stem: 'A water company in Kent uses a giant version of distillation to make drinking water from a mixture of borehole water and dissolved minerals. The mixture is heated, the vapour rises into a long cooled section, and pure water drips out at the end. Which best describes the chemistry that the company is using?',
      tier: 'challenge',
      options: [
        'A new compound is made when the vapour cools',
        'The same simple distillation idea used in school labs, just on a much bigger scale',
        'A chemical reaction destroys the dissolved minerals',
        'A filter under pressure removes the dissolved minerals',
      ],
      correctIndex: 1,
      xpValue: 25,
    },
    {
      id: 'di-q20',
      type: 'spot-misconception',
      stem: 'Tom says: "If I just use simple distillation on a 50:50 ethanol and water mixture, I will get pure ethanol in the beaker, because ethanol has a lower boiling point and boils first."',
      tier: 'challenge',
      statements: [
        {
          text: 'Tom is right. Whichever liquid boils first will come over alone, so the beaker will hold pure ethanol.',
          isMisconception: true,
        },
        {
          text: 'Tom is wrong. Without a fractionating column the water vapour rises and condenses too, so the beaker holds a mixture, not pure ethanol. Fractional distillation is needed for this.',
          isMisconception: false,
        },
      ],
      xpValue: 25,
      misconceptionId: 'di-mis-simple-separates-liquids',
    },
    {
      id: 'di-q21',
      type: 'numeric-entry',
      stem: 'A pupil distils 600 g of clear salt solution. The flask starts with 600 g and ends with 80 g of solid salt and unboiled solution at the bottom. The connecting glassware adds no mass to either side. What total mass, in grams, of liquid has the pupil collected in the beaker?',
      tier: 'challenge',
      correctAnswer: 520,
      unit: 'g',
      xpValue: 25,
      hint: 'Mass is conserved overall. Total starting mass equals what is left in the flask plus what is collected in the beaker.',
      misconceptionId: 'di-mis-mass-lost',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Chemistry examiner report June 2018 (8462/1F), Q07 on simple distillation: a recurring candidate response was that "the salt boils with the water and is caught in the condenser", showing that learners assume both components of a solution evaporate together. Reinforced by Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question sets on separating mixtures.
    {
      id: 'di-mis-salt-evaporates',
      description:
        'During simple distillation of a salt solution, the salt evaporates along with the water and ends up in the distillate.',
      triggerAnswer: 'salt-evaporates',
      correction:
        'In fact only the water turns into a gas at lab temperatures. Salt boils above 1400 C, far hotter than a Bunsen flame, so the salt particles stay in the flask.',
      reExplanation:
        'Picture a single salt particle and a single water particle side by side at the bottom of the flask. To turn into a gas, each particle has to gain enough energy to break away from its neighbours. A Bunsen flame can take a flask to about 100 C, plenty for water but nowhere near enough for salt. So when the flask boils, only water vapour rises and is caught by the condenser. The salt is left as solid crystals.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2019 (1CH0/1F), Q08 on distillation apparatus: candidates often placed the thermometer bulb in the boiling liquid rather than at the side-arm, missing that the reading must report the vapour temperature. Reinforced by RSC Education CPD article "Practical work in school chemistry" (David Paterson, 2020).
    {
      id: 'di-mis-thermometer-position',
      description:
        'The thermometer in a distillation should sit in the boiling liquid in the round-bottom flask.',
      triggerAnswer: 'thermometer-position',
      correction:
        'In fact the thermometer bulb sits at the side-arm where the vapour leaves the flask, so it reads the temperature of the gas going into the condenser.',
      reExplanation:
        'The reason for the thermometer is to tell the pupil whether the vapour is the right substance. For a salt solution that is pure water, the bulb at the side-arm reads 100 C while pure water vapour goes over. If the bulb sat in the liquid, it would just tell us the temperature of the boiling solution, not whether the gas leaving really is pure water.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2020 (8462/1F), Q09 on fractional distillation: candidates often wrote that "simple distillation can separate two liquids if they have different boiling points", missing that without a column both vapours rise together. The same trigger is documented in OCR Gateway Chemistry examiner reports (J248, 2019 and 2022).
    {
      id: 'di-mis-simple-separates-liquids',
      description:
        'Simple distillation alone is enough to separate two miscible liquids with different boiling points; the one with the lower boiling point will come over pure.',
      triggerAnswer: 'simple-separates-liquids',
      correction:
        'In fact without a fractionating column both vapours rise and condense together, so the distillate is still a mixture. Fractional distillation is needed to separate the two liquids.',
      reExplanation:
        'In a 50:50 ethanol and water mixture, ethanol boils at 78 C and water at 100 C, but plenty of water particles also have enough energy to break away well below 100 C, especially as the flask warms past 78 C. So in a simple set-up both liquids reach the condenser and condense together. The fractionating column gives the rising vapour many chances to condense and re-evaporate, so only the liquid with the lower boiling point reaches the top.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2018 (1CH0/1F), Q07 on distillation: candidates often wrote that "the mass goes down because the water has gone". The same conservation-of-mass slip is documented in Best Evidence Science Teaching (BEST) KS3 separating-mixtures diagnostics. Reinforced by Matthew Parks, "Teaching conservation of mass at 14-16", RSC Education CPD article (2024-12-05).
    {
      id: 'di-mis-mass-lost',
      description:
        'Mass is lost during distillation because some of the substance disappears between the flask and the beaker.',
      triggerAnswer: 'mass-lost',
      correction:
        'In fact mass is conserved. Every particle that started in the flask is still there at the end, either left in the flask, collected in the beaker, or escaping as a gas if the condenser leaks.',
      reExplanation:
        'Place the whole apparatus, flask, condenser and collecting beaker on a balance before and after a distillation that is properly sealed. The total mass reading does not change. The water has not been destroyed; it has only moved from the flask, through the side-arm, into the beaker. If the apparatus has a gap and the vapour escapes, the missing mass is in the air, not gone forever.',
    },
    // Source: David Paterson, "Teaching pupils to separate mixtures", RSC Education CPD article (2020-09-21): a recurring Year 7 expectation is that the condenser warms the vapour rather than cools it, because water and pipes are being moved through it. Reinforced by CGP KS3 Chemistry common-mistake callouts on distillation apparatus.
    {
      id: 'di-mis-condenser-warms',
      description:
        'The condenser in a distillation set-up warms the vapour to keep it as a gas all the way to the beaker.',
      triggerAnswer: 'condenser-warms',
      correction:
        'In fact the condenser cools the vapour. A jacket of cold water around the glass tube takes heat away, so the gas particles slow down and clump back into a liquid.',
      reExplanation:
        'The whole point of a distillation is to turn the boiled gas back into a liquid you can catch in a beaker. To do that, the vapour particles have to lose energy. Cold water flowing around the outside of the glass tube absorbs that energy, so the vapour cools below its boiling point and condenses into liquid drops on the inside of the tube. Without the cold water, the gas would just escape into the air.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2020 (8462/1F), Q09 on fractional distillation: a common candidate confusion was to label fractional distillation as "the same as simple distillation" with no role for the column, missing that the column is what makes the separation of two liquids possible. Reinforced by CGP KS3 Chemistry on fractional distillation in the petrochemicals chapter.
    {
      id: 'di-mis-column-redundant',
      description:
        'The fractionating column in a fractional distillation is just decorative, and the apparatus would work the same without it.',
      triggerAnswer: 'column-redundant',
      correction:
        'In fact the fractionating column is the part that makes the separation work. Without it the two liquids would condense together in the condenser as a mixture.',
      reExplanation:
        'Inside the column, hot vapour from the flask meets cooler glass and beads. Vapour with a higher boiling point condenses on the column and runs back down into the flask, while vapour with a lower boiling point keeps rising. After many such cycles, only the lower boiling point liquid reaches the top. Take the column away and both vapours travel straight into the condenser together, so the distillate is still a mixture.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const chromatography: SkillNode = {
  id: 'chemistry-separating-chromatography',
  title: 'Chromatography',
  description:
    'Use paper chromatography to separate the coloured dyes inside an ink, a food colouring, or a leaf pigment. Spot the baseline, watch the solvent front travel up the paper, and explain why each colour stops at a different height because of how strongly it sticks to the paper or to the solvent. Qualitative only at this stage; no Rf calculations.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-separating-mixtures',
  zoneName: 'Separating Mixtures',
  tier: 'confident',
  prerequisites: ['chemistry-separating-filtration-evaporation'],
  curriculum: {
    ks3Objective:
      'The concept of a pure substance; mixtures, including dissolving; simple techniques for separating mixtures: filtration, evaporation, distillation and chromatography.',
    awardingBodies: {
      aqa: '4.10.1.4 Chromatography (8462)',
      edexcel: 'Topic 1.44 Paper chromatography (1CH0)',
      ocr: 'C2.1f Separate substances by paper chromatography (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'ch-scene-setup',
      title: 'Paper Chromatography: How the Apparatus Fits Together',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the chromatography set-up to name the part and read what it does.',
      data: {
        viewBox: '0 0 320 240',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240"><rect x="0" y="0" width="320" height="240" fill="#FEF3C7"/><rect x="0" y="220" width="320" height="20" fill="#D6D3D1"/><g><path d="M 60 110 L 60 215 L 260 215 L 260 110 z" fill="none" stroke="#475569" stroke-width="1.5"/><rect x="63" y="180" width="194" height="35" fill="#BFDBFE" opacity="0.6"/><text x="280" y="200" font-size="8" fill="#1E3A8A">solvent (water</text><text x="280" y="210" font-size="8" fill="#1E3A8A">or ethanol)</text></g><g><rect x="120" y="40" width="80" height="160" fill="#FFFFFF" stroke="#94A3B8" stroke-width="0.8"/><line x1="125" y1="170" x2="195" y2="170" stroke="#475569" stroke-width="0.6" stroke-dasharray="2 1"/><text x="100" y="174" text-anchor="end" font-size="7" fill="#475569">baseline</text><circle cx="140" cy="170" r="3" fill="#7C2D12"/><circle cx="160" cy="170" r="3" fill="#1E3A8A"/><circle cx="180" cy="170" r="3" fill="#14532D"/><line x1="125" y1="80" x2="195" y2="80" stroke="#475569" stroke-width="0.6" stroke-dasharray="2 1"/><text x="100" y="84" text-anchor="end" font-size="7" fill="#475569">solvent front</text><circle cx="140" cy="105" r="3" fill="#FB923C" opacity="0.85"/><circle cx="160" cy="120" r="3" fill="#3B82F6" opacity="0.85"/><circle cx="180" cy="135" r="3" fill="#22C55E" opacity="0.85"/></g><g><line x1="100" y1="35" x2="220" y2="35" stroke="#475569" stroke-width="2"/><line x1="160" y1="35" x2="160" y2="40" stroke="#475569" stroke-width="0.8"/><text x="280" y="40" font-size="8" fill="#1E3A8A">pencil line</text><text x="280" y="50" font-size="8" fill="#1E3A8A">(supports paper)</text></g><text x="160" y="20" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">PAPER CHROMATOGRAPHY</text></svg>',
        hotspots: [
          {
            id: 'ch-h-baseline',
            x: 50,
            y: 70,
            label: 'Baseline',
            description:
              'A pencil line drawn near the bottom of the paper. The ink spots are placed on this line. Pencil is used (not pen) so the line itself does not dissolve and travel up.',
          },
          {
            id: 'ch-h-spots',
            x: 50,
            y: 78,
            label: 'Sample spots',
            description:
              'Tiny dots of the inks or colourings being tested, placed on the baseline. Each spot stays small so that the colours do not run into each other on the way up.',
          },
          {
            id: 'ch-h-solvent',
            x: 50,
            y: 90,
            label: 'Solvent',
            description:
              'A shallow layer of liquid (water for water-based dyes, or ethanol for some food colourings) at the bottom of the beaker. The liquid level is below the baseline so the spots are not washed off.',
          },
          {
            id: 'ch-h-front',
            x: 50,
            y: 35,
            label: 'Solvent front',
            description:
              'The wet edge of the solvent as it travels up the paper. Mark this line in pencil as soon as the paper is taken out, before the solvent dries.',
          },
          {
            id: 'ch-h-suspend',
            x: 75,
            y: 18,
            label: 'Pencil line / lid',
            description:
              'A pencil rod or beaker lid holds the paper so that it dips into the solvent without bending or touching the side of the beaker.',
          },
          {
            id: 'ch-h-spread',
            x: 50,
            y: 50,
            label: 'Separated colours',
            description:
              'After 10 to 20 minutes, each dye in the original spot has travelled a different distance up the paper. The colours are now spread out, showing that the original ink was a mixture.',
          },
        ],
      },
    },
    {
      id: 'ch-scene-why',
      title: 'Why Each Colour Stops at a Different Height',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see why some dyes climb high up the paper and others stay low down.',
      data: {
        viewBox: '0 0 320 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#FEF3C7"/><g><rect x="60" y="40" width="60" height="160" fill="#FFFFFF" stroke="#94A3B8" stroke-width="0.8"/><line x1="60" y1="180" x2="120" y2="180" stroke="#475569" stroke-width="0.6" stroke-dasharray="2 1"/><circle cx="90" cy="180" r="4" fill="#1E3A8A"/><line x1="60" y1="60" x2="120" y2="60" stroke="#475569" stroke-width="0.6" stroke-dasharray="2 1"/><circle cx="90" cy="80" r="3.5" fill="#FB923C"/><circle cx="90" cy="120" r="3.5" fill="#3B82F6"/><circle cx="90" cy="160" r="3.5" fill="#7C2D12"/><text x="90" y="32" text-anchor="middle" font-size="8" fill="#1E3A8A">solvent front</text><text x="90" y="195" text-anchor="middle" font-size="8" fill="#1E3A8A">baseline</text></g><g><rect x="170" y="40" width="135" height="160" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="0.8"/><text x="237" y="58" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">High climbers</text><text x="237" y="72" text-anchor="middle" font-size="8" fill="#1E3A8A">dissolve well in the solvent,</text><text x="237" y="83" text-anchor="middle" font-size="8" fill="#1E3A8A">stick weakly to the paper</text><text x="237" y="105" text-anchor="middle" font-size="9" font-weight="600" fill="#7C2D12">Low stayers</text><text x="237" y="119" text-anchor="middle" font-size="8" fill="#7C2D12">dissolve poorly in the solvent,</text><text x="237" y="130" text-anchor="middle" font-size="8" fill="#7C2D12">stick strongly to the paper</text><text x="237" y="155" text-anchor="middle" font-size="8" fill="#1E3A8A">Two forces tug on each dye:</text><text x="237" y="167" text-anchor="middle" font-size="8" fill="#1E3A8A">paper pulls down,</text><text x="237" y="178" text-anchor="middle" font-size="8" fill="#1E3A8A">solvent pulls up.</text></g></svg>',
        hotspots: [
          {
            id: 'ch-h-high',
            x: 28,
            y: 38,
            label: 'High climber: orange dye',
            description:
              'The orange dye dissolves easily in the solvent and barely sticks to the paper, so it is carried high up the paper. The solvent has pulled it nearly to the front.',
          },
          {
            id: 'ch-h-mid',
            x: 28,
            y: 55,
            label: 'Middle dye: blue',
            description:
              'The blue dye dissolves in the solvent fairly well, but it also sticks a little to the paper. It ends up halfway between the baseline and the solvent front.',
          },
          {
            id: 'ch-h-low',
            x: 28,
            y: 75,
            label: 'Low stayer: brown dye',
            description:
              'The brown dye dissolves only a little in the solvent and sticks strongly to the paper, so it has barely moved up from the baseline.',
          },
          {
            id: 'ch-h-rule',
            x: 75,
            y: 50,
            label: 'The tug of war',
            description:
              'Two pulls compete for every dye: how well it dissolves in the solvent, and how strongly it grips the paper. Stronger solvent pull wins, the dye climbs high. Stronger paper grip wins, the dye stays low.',
          },
        ],
      },
    },
    {
      id: 'ch-scene-uses',
      title: 'Three UK Uses of Chromatography',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how chromatography is used in real UK forensics, food checking, and biology.',
      data: {
        viewBox: '0 0 320 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#FEF3C7"/><g><rect x="15" y="20" width="95" height="180" rx="4" fill="#E0E7FF" stroke="#1E3A8A" stroke-width="1"/><text x="62" y="40" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">FORENSIC INK</text><rect x="30" y="55" width="65" height="120" fill="#FFFFFF" stroke="#94A3B8" stroke-width="0.6"/><line x1="30" y1="160" x2="95" y2="160" stroke="#475569" stroke-width="0.4" stroke-dasharray="2 1"/><circle cx="50" cy="160" r="2.5" fill="#1E3A8A"/><circle cx="75" cy="160" r="2.5" fill="#1E3A8A"/><circle cx="50" cy="100" r="2.5" fill="#3B82F6"/><circle cx="50" cy="120" r="2.5" fill="#7C2D12"/><circle cx="75" cy="105" r="2.5" fill="#3B82F6"/><circle cx="75" cy="80" r="2.5" fill="#FB923C"/><text x="62" y="190" text-anchor="middle" font-size="7" fill="#1E3A8A">match suspect ink</text></g><g><rect x="115" y="20" width="95" height="180" rx="4" fill="#FECACA" stroke="#7C2D12" stroke-width="1"/><text x="162" y="40" text-anchor="middle" font-size="9" font-weight="600" fill="#7C2D12">FOOD COLOURS</text><rect x="130" y="55" width="65" height="120" fill="#FFFFFF" stroke="#94A3B8" stroke-width="0.6"/><line x1="130" y1="160" x2="195" y2="160" stroke="#475569" stroke-width="0.4" stroke-dasharray="2 1"/><circle cx="162" cy="160" r="3" fill="#DC2626"/><circle cx="162" cy="120" r="2.5" fill="#FB923C"/><circle cx="162" cy="100" r="2.5" fill="#DC2626"/><circle cx="162" cy="80" r="2.5" fill="#A78BFA"/><text x="162" y="190" text-anchor="middle" font-size="7" fill="#7C2D12">red sweet shell</text></g><g><rect x="215" y="20" width="95" height="180" rx="4" fill="#BBF7D0" stroke="#14532D" stroke-width="1"/><text x="262" y="40" text-anchor="middle" font-size="9" font-weight="600" fill="#14532D">LEAF PIGMENTS</text><rect x="230" y="55" width="65" height="120" fill="#FFFFFF" stroke="#94A3B8" stroke-width="0.6"/><line x1="230" y1="160" x2="295" y2="160" stroke="#475569" stroke-width="0.4" stroke-dasharray="2 1"/><circle cx="262" cy="160" r="3" fill="#14532D"/><circle cx="262" cy="105" r="2.5" fill="#22C55E"/><circle cx="262" cy="80" r="2.5" fill="#FACC15"/><text x="262" y="190" text-anchor="middle" font-size="7" fill="#14532D">green leaf extract</text></g></svg>',
        hotspots: [
          {
            id: 'ch-h-forensic',
            x: 20,
            y: 50,
            label: 'Forensic ink check',
            description:
              'Police compare ink on a forged note with inks from a list of suspect pens. Two inks that match a suspect pen produce the same pattern of spots. Two that do not match show different spots at different heights.',
          },
          {
            id: 'ch-h-sweets',
            x: 51,
            y: 50,
            label: 'Food colouring check',
            description:
              'Food labs run the red shell colour from a sweet up a paper. A label that says "red colouring" can split into two or three different food dyes, each of which has to appear on the ingredients list.',
          },
          {
            id: 'ch-h-leaves',
            x: 82,
            y: 50,
            label: 'Leaf pigment separation',
            description:
              'A green leaf extract spotted on paper splits into the green chlorophyll and a yellow xanthophyll behind it. The leaf was never just one colour; the green hid a yellow pigment all along.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'ch-worked-1',
      title: 'Setting up a paper chromatogram of black ink',
      steps: [
        {
          explanation:
            'Question: A pupil wants to find out how many dyes make up the black ink in their pen. Describe the steps to set up a chromatogram and what to look for.',
        },
        {
          explanation:
            'Step 1: take a strip of filter paper. Draw a faint baseline in pencil about 2 cm from the bottom edge. Pencil is used because pencil graphite does not dissolve in the solvent, so the line itself will not move up the paper.',
        },
        {
          explanation:
            'Step 2: place a small spot of the black ink on the baseline. Keep the spot small so the colours do not run into each other.',
        },
        {
          explanation:
            'Step 3: pour about 1 cm of water into a beaker. Hang the paper from a pencil resting across the beaker so the bottom of the paper dips in but the water level stays below the baseline.',
        },
        {
          explanation:
            'Step 4: leave the apparatus alone for 10 to 20 minutes. The water travels up the paper and carries the dyes with it. Each dye stops at a different height.',
          maths: 'water front rises; dyes ride at different heights',
        },
        {
          explanation:
            'Step 5: take the paper out before the water reaches the top. Mark the solvent front in pencil. The pupil counts the spots above the baseline. If they see three coloured spots, the original black ink was a mixture of three dyes.',
        },
      ],
    },
    {
      id: 'ch-worked-2',
      title: 'Forensic ink match with a missing step',
      steps: [
        {
          explanation:
            'Question: Police find a forged shopping receipt and want to know which of three suspect pens (A, B, C) wrote it. Describe what they would do.',
        },
        {
          explanation:
            'Step 1: cut a strip of paper. Draw a baseline in pencil and place four spots on it: one from the receipt, and one from each of the suspect pens.',
        },
        {
          explanation:
            'Step 2: stand the paper in a shallow layer of solvent (water or ethanol depending on the ink type) and let the solvent travel up.',
          maths: 'solvent rises past the baseline and on up the paper',
        },
        {
          explanation:
            'Step 3: wait while the solvent rises up the paper. Each ink spot stretches up the strip and splits into a pattern of coloured spots above the baseline. That pattern is unique to each pen.',
        },
        {
          explanation:
            'Step 4: lift the paper out before the solvent reaches the top, mark the front, and read off which pen pattern matches the receipt. The matching pen is the one used to forge the receipt.',
        },
      ],
    },
  ],
  questions: [
    // 9 multiple-choice (mix of core/confident/challenge)
    {
      id: 'ch-q1',
      type: 'multiple-choice',
      stem: 'Which separating method would you use to find out how many different dyes are mixed together in a black felt-tip pen ink?',
      tier: 'core',
      options: ['Filtration', 'Distillation', 'Chromatography', 'Evaporation'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'ch-mis-no-mixtures-needed',
    },
    {
      id: 'ch-q2',
      type: 'multiple-choice',
      stem: 'Why must the baseline on a chromatography paper be drawn in pencil and not in pen?',
      tier: 'core',
      options: [
        'Pencil is easier to rub out if the experiment goes wrong',
        'Pencil graphite does not dissolve in the solvent, so the line stays put while the dyes move',
        'Pencil is sharper than pen and gives a thinner line',
        'Pencil shows up better against the wet paper',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'ch-mis-pen-baseline',
    },
    {
      id: 'ch-q3',
      type: 'multiple-choice',
      stem: 'In a paper chromatogram, the level of solvent in the beaker should be:',
      tier: 'core',
      options: [
        'Above the baseline so that the dye spots dissolve straight into the bulk solvent',
        'Exactly at the baseline so the dyes start to move at once',
        'Right at the top of the paper so the spots can travel further',
        'Below the baseline so that the spots are not washed straight off the paper',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'ch-mis-solvent-too-high',
    },
    {
      id: 'ch-q4',
      type: 'multiple-choice',
      stem: 'A pupil runs a chromatogram of green leaf extract. After 15 minutes the paper shows a green spot lower down and a yellow spot higher up. What does this tell you about the leaf extract?',
      tier: 'confident',
      options: [
        'The leaf was a single pure substance and the yellow is a mistake',
        'The leaf extract was a mixture; it contains green chlorophyll and a yellow pigment',
        'The yellow spot has nothing to do with the leaf and came from the paper',
        'The leaf had run out of green colour and turned yellow during the test',
      ],
      correctIndex: 1,
      xpValue: 15,
    },
    {
      id: 'ch-q5',
      type: 'multiple-choice',
      stem: 'A red dye climbs nearly to the top of the paper. A blue dye stops only a quarter of the way up. Which statement best explains the difference?',
      tier: 'core',
      options: [
        'The red dye is lighter, so it floats up further than the heavier blue dye',
        'The blue dye dissolves more strongly in the solvent than the red dye',
        'The red dye dissolves more strongly in the solvent (or sticks less to the paper) than the blue dye',
        'The blue dye is older than the red dye, so it has run out of energy',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'ch-mis-by-mass',
    },
    {
      id: 'ch-q6',
      type: 'multiple-choice',
      stem: 'Police compare an ink stain from a forged note against four suspect pens (A, B, C, D). After running the chromatogram, the note ink shows the same pattern of spots, at the same heights, as suspect pen C. What can the police conclude?',
      tier: 'confident',
      options: [
        'Suspect C’s pen and the note ink contain the same set of dyes; the note was likely written with this pen',
        'Suspect C definitely did not write the note, because the patterns match',
        'Suspect C’s pen ink is pure and the note ink is a mixture, so they cannot be the same',
        'The match means nothing because all inks behave the same way on paper',
      ],
      correctIndex: 0,
      xpValue: 15,
    },
    {
      id: 'ch-q7',
      type: 'multiple-choice',
      stem: 'Which of these original substances would NOT be separated by paper chromatography?',
      tier: 'confident',
      options: [
        'A black felt-tip ink made of three coloured dyes',
        'A red food colouring made of two coloured dyes',
        'A pure single-colour dye that has not been mixed with any other dye',
        'A green plant pigment extract holding green and yellow pigments',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'ch-mis-pure-shows-spots',
    },
    {
      id: 'ch-q8',
      type: 'multiple-choice',
      stem: 'A pupil leaves the chromatogram in the beaker so long that the solvent reaches the top of the paper. What is the main problem with this?',
      tier: 'challenge',
      options: [
        'The dyes will turn back into one colour at the top',
        'There is no problem; the longer the better',
        'You cannot mark the solvent front any more, so you cannot tell where it stopped, and the highest dye may have run off the paper',
        'The paper will dissolve into the solvent',
      ],
      correctIndex: 2,
      xpValue: 25,
    },
    {
      id: 'ch-q9',
      type: 'multiple-choice',
      stem: 'A Year 7 pupil from York runs Smarties red shell colour up filter paper using water as the solvent. They see two clear spots: one orange-red and one pink-red. What does this tell them about the labelled "red shell colour"?',
      tier: 'challenge',
      options: [
        'The shell colour is a mixture of two food dyes; the label "red" is the colour you see, not the number of dyes used',
        'The label is wrong; only one dye is present',
        'Both spots are the same dye that has split in half by accident',
        'Water has reacted with the sugar in the shell to make new colours',
      ],
      correctIndex: 0,
      xpValue: 25,
    },
    // 4 numeric-entry
    {
      id: 'ch-q10',
      type: 'numeric-entry',
      stem: 'A pupil runs a chromatogram of black ink. After 15 minutes they count three coloured spots above the baseline. How many different dyes were mixed together to make the original black ink?',
      tier: 'core',
      correctAnswer: 3,
      xpValue: 10,
      hint: 'Each spot above the baseline came from a different dye.',
    },
    {
      id: 'ch-q11',
      type: 'numeric-entry',
      stem: 'A green leaf extract is run on chromatography paper. The chromatogram shows one green spot and one yellow spot. How many different pigments are in the extract?',
      tier: 'core',
      correctAnswer: 2,
      xpValue: 10,
    },
    {
      id: 'ch-q12',
      type: 'numeric-entry',
      stem: 'A pupil starts the chromatogram with 0.30 g of mixed dye on the baseline. After the run is complete, they cut out and weigh the spots: 0.12 g of orange dye, 0.10 g of blue dye, and 0.05 g of brown dye. By how many grams is the total mass on the paper less than the starting 0.30 g?',
      tier: 'challenge',
      correctAnswer: 0.03,
      tolerance: 0.005,
      unit: 'g',
      xpValue: 25,
      hint: 'Add up the dye masses; subtract from 0.30 g. The missing mass has either soaked into the paper or spread along it with the solvent front.',
    },
    {
      id: 'ch-q13',
      type: 'numeric-entry',
      stem: 'A police forensic lab runs four ink samples (note ink + suspect pens A, B, C). Suspect A makes 3 spots, suspect B makes 2, suspect C makes 4, and the note ink makes 4 spots in the same pattern as one of the pens. How many spots in total appear on the paper across all four samples?',
      tier: 'confident',
      correctAnswer: 13,
      xpValue: 15,
    },
    // 1 drag-order
    {
      id: 'ch-q14',
      type: 'drag-order',
      stem: 'Place these steps of a paper chromatogram in the correct order, from start to finish.',
      tier: 'core',
      items: [
        'Stand the paper in a shallow layer of solvent so the bottom dips in but the solvent stays below the baseline',
        'Wait 10 to 20 minutes while the solvent travels up the paper, carrying the dyes',
        'Draw a baseline in pencil near the bottom of the paper and place small spots of each ink on it',
        'Lift the paper out, mark the solvent front in pencil, and let the paper dry',
      ],
      correctOrder: [2, 0, 1, 3],
      xpValue: 15,
    },
    // 2 spot-misconception
    {
      id: 'ch-q15',
      type: 'spot-misconception',
      stem: 'Riya says: "I am going to mark the baseline on my chromatography paper in red biro so I can see it more clearly while I work."',
      tier: 'core',
      statements: [
        {
          text: 'Riya is right. A bright pen makes the baseline easier to see and the rest of the experiment will work the same.',
          isMisconception: true,
        },
        {
          text: 'Riya is wrong. Pen ink is itself a mixture of dyes that will dissolve and travel up the paper, so the baseline would smudge into the experiment. She should use pencil.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'ch-mis-pen-baseline',
    },
    {
      id: 'ch-q16',
      type: 'spot-misconception',
      stem: 'Tom runs a chromatogram of a pure single-dye food colouring. After the run, his paper shows just one coloured spot above the baseline. He says: "The chromatography did not work, because there was only one spot."',
      tier: 'confident',
      statements: [
        {
          text: 'Tom is right. A single spot means the chromatography failed; the dye should have separated into more spots.',
          isMisconception: true,
        },
        {
          text: 'Tom is wrong. A single spot is exactly what you should see for a pure substance. Chromatography only splits a sample into more spots if the sample was a mixture to start with.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'ch-mis-pure-shows-spots',
    },
    // 1 free-text
    {
      id: 'ch-q17',
      type: 'free-text',
      stem: 'Explain in 2 to 3 sentences why a green leaf extract often shows a yellow spot above the green spot on a chromatogram, even though the leaf looked only green to begin with.',
      tier: 'confident',
      sampleAnswer:
        'The green leaf extract is a mixture of pigments. The green chlorophyll is the strongest colour, so it hides the yellow pigment in the leaf. Chromatography spreads the pigments out by how well they dissolve in the solvent and how strongly they stick to the paper, so the yellow pigment shows up at a different height once they are separated.',
      keywords: ['mixture', 'chlorophyll', 'pigment', 'separate'],
      xpValue: 20,
    },
    // 1 missing-step
    {
      id: 'ch-q18',
      type: 'missing-step',
      stem: 'Fill in the missing step in this account of a forensic ink check.',
      tier: 'confident',
      steps: [
        'A forensic chemist cuts a strip of filter paper, draws a baseline in pencil and places one spot of the note ink and one spot of each suspect pen on the baseline',
        'They stand the paper in a shallow layer of solvent so it dips in below the baseline',
        null,
        'They lift the paper out, mark the solvent front in pencil and let the paper dry',
        'They compare the patterns: the suspect pen with the same set of spots at the same heights as the note ink is the likely match',
      ],
      missingStepIndex: 2,
      correctStep:
        'They wait 10 to 20 minutes while the solvent travels up the paper, carrying each dye in each ink to a different height',
      xpValue: 20,
    },
    // 1 labelled-image
    {
      id: 'ch-q19',
      type: 'labelled-image',
      stem: 'Drag each label onto the correct part of the chromatography set-up.',
      tier: 'confident',
      viewBox: '0 0 320 240',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240"><rect x="0" y="0" width="320" height="240" fill="#F8FAFC"/><g><path d="M 60 110 L 60 215 L 260 215 L 260 110 z" fill="none" stroke="#475569" stroke-width="1.5"/><rect x="63" y="180" width="194" height="35" fill="#BFDBFE" opacity="0.6"/></g><g><rect x="120" y="40" width="80" height="160" fill="#FFFFFF" stroke="#94A3B8" stroke-width="0.8"/><line x1="125" y1="170" x2="195" y2="170" stroke="#475569" stroke-width="0.6" stroke-dasharray="2 1"/><circle cx="140" cy="170" r="3" fill="#7C2D12"/><circle cx="160" cy="170" r="3" fill="#1E3A8A"/><circle cx="180" cy="170" r="3" fill="#14532D"/><line x1="125" y1="80" x2="195" y2="80" stroke="#475569" stroke-width="0.6" stroke-dasharray="2 1"/><circle cx="140" cy="105" r="3" fill="#FB923C" opacity="0.85"/><circle cx="160" cy="120" r="3" fill="#3B82F6" opacity="0.85"/><circle cx="180" cy="135" r="3" fill="#22C55E" opacity="0.85"/></g><g><line x1="100" y1="35" x2="220" y2="35" stroke="#475569" stroke-width="2"/></g></svg>',
      hotspots: [
        { id: 'ch-q19-h1', x: 50, y: 70, correctLabel: 'Baseline' },
        { id: 'ch-q19-h2', x: 50, y: 35, correctLabel: 'Solvent front' },
        { id: 'ch-q19-h3', x: 50, y: 90, correctLabel: 'Solvent' },
        { id: 'ch-q19-h4', x: 75, y: 18, correctLabel: 'Pencil line' },
      ],
      labels: [
        'Baseline',
        'Solvent front',
        'Solvent',
        'Pencil line',
        'Filter paper',
        'Filtrate',
      ],
      xpValue: 20,
    },
    // 4 challenge MCQs (already have q8 + q9; one more would help)
    {
      id: 'ch-q20',
      type: 'multiple-choice',
      stem: 'A school technician in Sevenoaks must check whether a green felt-tip ink is a single dye or a mixture. They run a chromatogram in water and see only one green spot at the top. They run the same ink in ethanol and see one yellow spot and one blue spot at different heights. What does this tell them?',
      tier: 'challenge',
      options: [
        'The ink is a single pure dye and the ethanol caused a chemical reaction',
        'Water cancels chromatography; only ethanol works',
        'Ethanol is wrong for chromatography and the result must be ignored',
        'The ink is a mixture of two dyes; water did not separate them but ethanol did, because the dyes dissolve very differently in the two solvents',
      ],
      correctIndex: 3,
      xpValue: 25,
    },
    {
      id: 'ch-q21',
      type: 'free-text',
      stem: 'A pupil places their chromatography paper into the beaker upside down (with the baseline near the top of the beaker, just below the rim). What would happen, and why? Answer in 2 to 3 sentences.',
      tier: 'challenge',
      sampleAnswer:
        'The dye spots would not travel anywhere, because the paper is not in contact with the solvent. The solvent only carries the dyes once the paper has soaked it up from the bottom, so the direction is decided by the solvent and not by which way up the paper is placed. With the baseline at the top, the bottom of the paper is dry and the experiment cannot start.',
      keywords: ['solvent', 'direction', 'soak', 'baseline'],
      xpValue: 25,
      misconceptionId: 'ch-mis-direction',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Chemistry examiner report June 2018 (8462/1F), Q08 on chromatography: candidates "drew the baseline in pen rather than pencil" and lost the mark. Reinforced by CGP KS3 Chemistry Study Book p.55 Common Mistake box on chromatography apparatus.
    {
      id: 'ch-mis-pen-baseline',
      description:
        'You can use any kind of pen to draw the baseline on chromatography paper, as long as the line is clear.',
      triggerAnswer: 'pen-baseline',
      correction:
        'In fact the baseline must be drawn in pencil. Pen ink is itself a mixture of dyes that would dissolve in the solvent and run up the paper, smudging the experiment.',
      reExplanation:
        'Pencil graphite is a solid that does not dissolve in water or ethanol. The pencil line stays exactly where it was drawn while the dyes move up. A pen baseline would itself separate into colours and travel up the paper, mixing into the test spots and ruining the chromatogram.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2019 (1CH0/1F), Q07 on paper chromatography: candidates "set the solvent level above the baseline" and reported all the dye washing off into the beaker. Reinforced by RSC Education article "Teaching paper chromatography in 11 to 14" (rsc.org/education, accessed 2026-05-10).
    {
      id: 'ch-mis-solvent-too-high',
      description:
        'The solvent in a chromatography beaker should start at or above the baseline so the dyes start to dissolve straight away.',
      triggerAnswer: 'solvent-too-high',
      correction:
        'In fact the solvent must stay below the baseline. If it covers the baseline, the dye spots dissolve straight into the bulk solvent in the beaker rather than rising up the paper.',
      reExplanation:
        'Chromatography works by the solvent slowly soaking up the paper from below. The dye sits on the baseline and the solvent reaches it from below, lifting it gradually. If the solvent starts above the baseline, the dyes dissolve into the puddle in the beaker and never travel up the paper. The trick is to keep the level low and let the paper carry the solvent up.',
    },
    // Source: Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question sets on separating mixtures: a recurring Year 7 expectation is that "a chromatogram with one spot is a failed test", missing that a single spot is the right outcome for a pure substance. Reinforced by CGP KS3 Chemistry Study Book p.55 chapter on chromatography.
    {
      id: 'ch-mis-pure-shows-spots',
      description:
        'A pure single-colour dye will still split into several spots on a chromatogram if the experiment is done correctly.',
      triggerAnswer: 'pure-shows-spots',
      correction:
        'In fact a pure substance only ever produces a single spot on a chromatogram. Multiple spots above one baseline mean the original sample was a mixture.',
      reExplanation:
        'Chromatography separates a sample into its parts. If the sample only has one part to begin with (a pure dye), then there is nothing to separate and only one spot appears. The single spot is itself useful evidence that the substance is pure. More than one spot means the sample is a mixture.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2020 (8462/1F), Q07 on chromatography of food colourings: candidates "wrote that the solvent decides which dye is heaviest", treating chromatography as a sorting by mass. Reinforced by RSC Education article "Common student misconceptions about chromatography" (rsc.org/education, accessed 2026-05-10).
    {
      id: 'ch-mis-by-mass',
      description:
        'Dyes that climb high up the paper are lighter; dyes that stay low are heavier.',
      triggerAnswer: 'by-mass',
      correction:
        'In fact the height has nothing to do with the mass of the dye. It depends on how well the dye dissolves in the solvent and how strongly it sticks to the paper.',
      reExplanation:
        'A dye that dissolves easily in the solvent and grips the paper only weakly is carried up to a high level. A dye that grips the paper strongly and dissolves only a little is barely lifted off the baseline. Two dyes can have similar masses and end up at very different heights, because the deciding question is "how strongly does this dye stick to the paper compared to how well it dissolves in the solvent?".',
    },
    // Source: David Paterson, "Teaching pupils to separate mixtures", RSC Education CPD article (2020-09-21): a recurring Year 7 idea is that the solvent only carries the dye in one direction "because the paper was placed that way up", missing that the solvent travels up because the paper soaks it up. Reinforced by CGP KS3 Chemistry Study Book p.55 chapter on chromatography.
    {
      id: 'ch-mis-direction',
      description:
        'The dyes only travel up the paper because the paper has been placed with the dyed end at the bottom; if you flipped it, they would go the other way.',
      triggerAnswer: 'direction',
      correction:
        'In fact the dyes always travel in the direction the solvent travels. The solvent soaks up the paper from where it dips into the liquid, so the dyes are carried away from that wet end towards the dry end.',
      reExplanation:
        'The paper acts like a stack of tiny straws. Where the paper dips into the solvent, the liquid is drawn into the paper and pulled along it by tiny forces between the paper fibres and the solvent. The dye spot is carried with the solvent front. Flip the paper round and put the dyed end into the solvent and the dye would just dissolve straight into the beaker, not travel anywhere.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2018 (1CH0/1F), Q08 on chromatography of inks: candidates "claimed that paper chromatography only works on coloured substances" without realising that uncoloured substances can be detected with a developing agent. KEY HONEST POINT for Year 7: at our level we DO restrict chromatography to coloured mixtures. Reinforced by CGP KS3 Chemistry Study Book p.55 chapter on chromatography.
    {
      id: 'ch-mis-no-mixtures-needed',
      description:
        'You can use chromatography to separate any mixture, even ones where the parts have no colour at all, just as easily as coloured inks.',
      triggerAnswer: 'no-mixtures-needed',
      correction:
        'In fact at Year 7 level paper chromatography only shows up coloured substances. Dyes leave coloured spots; colourless mixtures (like sugar in water) need a different technique.',
      reExplanation:
        'A chromatogram works because each dye leaves a coloured spot at a different height on the paper. If the parts of the mixture are colourless, there is nothing to see at the end. Chemists at higher levels use sprays and UV light to make colourless spots show up, but that is not what we use in Year 7. For now, paper chromatography is the right choice for inks, food colourings, and leaf pigments.',
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
  nodeIds: [
    'chemistry-separating-filtration-evaporation',
    'chemistry-separating-distillation',
    'chemistry-separating-chromatography',
    'chemistry-separating-pure-substance',
    'chemistry-separating-solubility-curves',
    'chemistry-separating-saturated-solutions',
    'chemistry-separating-crystallisation-cooling',
    'chemistry-separating-crystallisation-evaporation',
    'chemistry-separating-immiscible-funnel',
    'chemistry-separating-magnetic',
    'chemistry-separating-drying-desiccant',
    'chemistry-separating-rf-value',
    'chemistry-separating-decanting',
  ],
}
