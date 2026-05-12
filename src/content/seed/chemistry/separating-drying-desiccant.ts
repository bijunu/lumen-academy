import type { SkillNode } from '@/types/content'

export const dryingDesiccant: SkillNode = {
  id: 'chemistry-separating-drying-desiccant',
  title: 'Drying Separated Solids',
  description:
    'After filtering or crystallising a solid, the residue is often still wet. Choose between gentle heating, open air drying or a desiccant such as silica gel or anhydrous calcium chloride to remove the remaining water without spoiling the solid.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-separating-mixtures',
  zoneName: 'Separating Mixtures',
  tier: 'confident',
  prerequisites: ['chemistry-separating-filtration-evaporation'],
  curriculum: {
    ks3Objective:
      'After separation, a solid may be wet; drying methods include heating (for thermally stable solids), air drying, or using a desiccant to absorb moisture without heating.',
    awardingBodies: {
      aqa: '4.10.1 Separating mixtures; drying techniques after separation (8462)',
      edexcel: 'Topic 1.43 Post-separation processes; drying crystalline solids (1CH0)',
      ocr: 'C2.1 Separating and drying solids after separation; choice of desiccant (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'csm-dd-scene-methods',
      title: 'Three Ways to Dry a Damp Solid',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare the three common drying methods used after filtration or crystallisation in a school lab.',
      data: {
        viewBox: '0 0 320 200',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><rect x="0" y="0" width="320" height="200" fill="#FEF3C7"/><g><rect x="10" y="20" width="95" height="160" rx="4" fill="#FECACA" stroke="#7C2D12" stroke-width="1.2"/><text x="57" y="40" text-anchor="middle" font-size="9" font-weight="700" fill="#7C2D12">GENTLE HEATING</text><text x="57" y="58" text-anchor="middle" font-size="7" fill="#7C2D12">drying oven or</text><text x="57" y="68" text-anchor="middle" font-size="7" fill="#7C2D12">warm basin</text><circle cx="57" cy="105" r="22" fill="none" stroke="#7C2D12" stroke-width="1"/><path d="M 45 110 Q 57 95 69 110" stroke="#FB923C" stroke-width="2" fill="none"/><text x="57" y="155" text-anchor="middle" font-size="7" fill="#7C2D12">best for stable</text><text x="57" y="165" text-anchor="middle" font-size="7" fill="#7C2D12">solids (salt)</text></g><g><rect x="115" y="20" width="95" height="160" rx="4" fill="#BBF7D0" stroke="#14532D" stroke-width="1.2"/><text x="162" y="40" text-anchor="middle" font-size="9" font-weight="700" fill="#14532D">AIR DRYING</text><text x="162" y="58" text-anchor="middle" font-size="7" fill="#14532D">leave open on</text><text x="162" y="68" text-anchor="middle" font-size="7" fill="#14532D">a clean tile</text><rect x="135" y="90" width="55" height="35" fill="#FFFFFF" stroke="#14532D" stroke-width="0.8"/><g fill="#475569"><circle cx="148" cy="115" r="2"/><circle cx="158" cy="115" r="2"/><circle cx="168" cy="115" r="2"/><circle cx="178" cy="115" r="2"/></g><text x="162" y="155" text-anchor="middle" font-size="7" fill="#14532D">best for fragile</text><text x="162" y="165" text-anchor="middle" font-size="7" fill="#14532D">crystals</text></g><g><rect x="220" y="20" width="90" height="160" rx="4" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="1.2"/><text x="265" y="40" text-anchor="middle" font-size="9" font-weight="700" fill="#1E3A8A">DESICCANT</text><text x="265" y="58" text-anchor="middle" font-size="7" fill="#1E3A8A">silica gel or</text><text x="265" y="68" text-anchor="middle" font-size="7" fill="#1E3A8A">anhydrous CaCl2</text><rect x="240" y="85" width="50" height="45" rx="3" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="0.8"/><g fill="#1E3A8A"><circle cx="250" cy="100" r="2"/><circle cx="260" cy="102" r="2"/><circle cx="270" cy="100" r="2"/><circle cx="280" cy="102" r="2"/><circle cx="255" cy="115" r="2"/><circle cx="265" cy="115" r="2"/><circle cx="275" cy="115" r="2"/></g><text x="265" y="155" text-anchor="middle" font-size="7" fill="#1E3A8A">best when heat</text><text x="265" y="165" text-anchor="middle" font-size="7" fill="#1E3A8A">would damage solid</text></g></svg>',
        hotspots: [
          {
            id: 'csm-dd-h-heat',
            x: 18,
            y: 50,
            label: 'Gentle heating in a drying oven',
            description:
              'Spread the damp solid on a watch glass and place it in a drying oven at around 80 to 110 C. Water vapour leaves and the solid is left dry. Suitable for salts and sand that do not decompose.',
          },
          {
            id: 'csm-dd-h-air',
            x: 50,
            y: 50,
            label: 'Air drying on a tile',
            description:
              'Spread the solid in a thin layer on filter paper or a clean tile. Leave it covered to keep dust off. Water evaporates slowly into the room over several hours. Best for crystals that lose their shape if heated.',
          },
          {
            id: 'csm-dd-h-desic',
            x: 82,
            y: 50,
            label: 'Drying with a desiccant',
            description:
              'Place the solid in a sealed container next to silica gel or anhydrous calcium chloride. The desiccant absorbs water vapour from the air around the solid, keeping the solid dry without any heat.',
          },
        ],
      },
    },
    {
      id: 'csm-dd-scene-desiccator',
      title: 'Inside a Lab Desiccator',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the desiccator to see how a desiccant traps moisture from the air around a wet solid.',
      data: {
        viewBox: '0 0 320 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#FEF3C7"/><rect x="0" y="200" width="320" height="20" fill="#D6D3D1"/><path d="M 60 60 Q 160 30 260 60 L 260 180 L 60 180 Z" fill="#E0F2FE" stroke="#1E3A8A" stroke-width="1.5" opacity="0.7"/><path d="M 60 60 Q 160 30 260 60" fill="none" stroke="#1E3A8A" stroke-width="1.5"/><line x1="60" y1="125" x2="260" y2="125" stroke="#475569" stroke-width="1.2" stroke-dasharray="3 2"/><text x="270" y="128" font-size="7" fill="#475569">perforated</text><text x="270" y="136" font-size="7" fill="#475569">shelf</text><g><rect x="115" y="105" width="90" height="20" rx="2" fill="#FFFFFF" stroke="#475569" stroke-width="0.8"/><g fill="#92400E"><circle cx="125" cy="115" r="2"/><circle cx="135" cy="117" r="2"/><circle cx="145" cy="115" r="2"/><circle cx="155" cy="117" r="2"/><circle cx="165" cy="115" r="2"/><circle cx="175" cy="117" r="2"/><circle cx="185" cy="115" r="2"/><circle cx="195" cy="117" r="2"/></g><text x="160" y="100" text-anchor="middle" font-size="7" fill="#7C2D12">wet solid on watch glass</text></g><g><rect x="80" y="140" width="160" height="40" rx="2" fill="#DBEAFE" stroke="#1E3A8A" stroke-width="0.8"/><g fill="#1E3A8A"><circle cx="95" cy="155" r="3"/><circle cx="110" cy="158" r="3"/><circle cx="125" cy="155" r="3"/><circle cx="140" cy="158" r="3"/><circle cx="155" cy="155" r="3"/><circle cx="170" cy="158" r="3"/><circle cx="185" cy="155" r="3"/><circle cx="200" cy="158" r="3"/><circle cx="215" cy="155" r="3"/><circle cx="230" cy="158" r="3"/><circle cx="103" cy="170" r="3"/><circle cx="118" cy="172" r="3"/><circle cx="133" cy="170" r="3"/><circle cx="148" cy="172" r="3"/><circle cx="163" cy="170" r="3"/><circle cx="178" cy="172" r="3"/><circle cx="193" cy="170" r="3"/><circle cx="208" cy="172" r="3"/><circle cx="223" cy="170" r="3"/></g><text x="160" y="195" text-anchor="middle" font-size="8" fill="#1E3A8A">self-indicating silica gel (blue beads)</text></g><g stroke="#3B82F6" stroke-width="0.8" fill="none" opacity="0.6"><path d="M 140 125 Q 135 132 130 140"/><path d="M 160 125 Q 160 132 160 140"/><path d="M 180 125 Q 185 132 190 140"/></g><text x="220" y="80" font-size="7" fill="#1E3A8A">water vapour</text><text x="220" y="90" font-size="7" fill="#1E3A8A">moves down</text></svg>',
        hotspots: [
          {
            id: 'csm-dd-h-lid',
            x: 50,
            y: 22,
            label: 'Sealed glass lid',
            description:
              'A ground-glass lid sealed with grease keeps room air out, so the only water vapour the desiccant has to deal with is what came in with the wet solid.',
          },
          {
            id: 'csm-dd-h-shelf',
            x: 50,
            y: 58,
            label: 'Perforated shelf',
            description:
              'Holes in the shelf let water vapour from the solid sink down to the desiccant in the chamber below.',
          },
          {
            id: 'csm-dd-h-solid',
            x: 50,
            y: 50,
            label: 'Wet solid on watch glass',
            description:
              'A thin layer gives the solid a large surface area, so water vapour escapes from it easily and is captured by the desiccant.',
          },
          {
            id: 'csm-dd-h-gel',
            x: 50,
            y: 75,
            label: 'Self-indicating silica gel',
            description:
              'Silica gel beads are blue when dry and turn pink as they absorb water. The colour change tells you when the desiccant is full and needs regenerating.',
          },
          {
            id: 'csm-dd-h-vapour',
            x: 80,
            y: 38,
            label: 'Water vapour path',
            description:
              'Water particles leave the wet solid, drift down through the shelf and stick to the desiccant. The solid is left dry without any heat.',
          },
        ],
      },
    },
    {
      id: 'csm-dd-scene-cuso4',
      title: 'Anhydrous Copper Sulfate as a Moisture Test',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how anhydrous copper sulfate reveals water and how it can be regenerated.',
      data: {
        viewBox: '0 0 320 200',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><rect x="0" y="0" width="320" height="200" fill="#FEF3C7"/><g><rect x="20" y="50" width="80" height="100" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1.2"/><g fill="#F1F5F9" stroke="#94A3B8" stroke-width="0.4"><circle cx="35" cy="120" r="3"/><circle cx="50" cy="125" r="3"/><circle cx="65" cy="120" r="3"/><circle cx="80" cy="125" r="3"/><circle cx="42" cy="135" r="3"/><circle cx="58" cy="138" r="3"/><circle cx="75" cy="135" r="3"/><circle cx="35" cy="100" r="3"/><circle cx="55" cy="105" r="3"/><circle cx="75" cy="100" r="3"/></g><text x="60" y="40" text-anchor="middle" font-size="9" font-weight="700" fill="#475569">ANHYDROUS</text><text x="60" y="170" text-anchor="middle" font-size="8" fill="#475569">white powder (dry)</text></g><g><path d="M 115 100 L 200 100" stroke="#1E3A8A" stroke-width="1.5" marker-end="url(#a)"/><text x="157" y="92" text-anchor="middle" font-size="8" fill="#1E3A8A">add a drop of water</text></g><g><rect x="215" y="50" width="80" height="100" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1.2"/><g fill="#3B82F6" stroke="#1E3A8A" stroke-width="0.4"><circle cx="230" cy="120" r="3"/><circle cx="245" cy="125" r="3"/><circle cx="260" cy="120" r="3"/><circle cx="275" cy="125" r="3"/><circle cx="237" cy="135" r="3"/><circle cx="253" cy="138" r="3"/><circle cx="270" cy="135" r="3"/><circle cx="230" cy="100" r="3"/><circle cx="250" cy="105" r="3"/><circle cx="270" cy="100" r="3"/></g><text x="255" y="40" text-anchor="middle" font-size="9" font-weight="700" fill="#1E3A8A">HYDRATED</text><text x="255" y="170" text-anchor="middle" font-size="8" fill="#1E3A8A">blue crystals (wet)</text></g><g><path d="M 200 180 L 115 180" stroke="#FB923C" stroke-width="1.5"/><text x="157" y="195" text-anchor="middle" font-size="8" fill="#7C2D12">heat to about 250 C to regenerate</text></g></svg>',
        hotspots: [
          {
            id: 'csm-dd-h-anhydrous',
            x: 20,
            y: 50,
            label: 'Anhydrous copper sulfate is white',
            description:
              'When dry, copper sulfate is a pale white powder. It has no water inside its crystal structure and is ready to absorb moisture from its surroundings.',
          },
          {
            id: 'csm-dd-h-hydrated',
            x: 78,
            y: 50,
            label: 'Hydrated copper sulfate is blue',
            description:
              'As soon as water reaches the white powder it joins the crystal as water of crystallisation. The result is bright blue crystals of CuSO4 with five water molecules.',
          },
          {
            id: 'csm-dd-h-test',
            x: 50,
            y: 22,
            label: 'A sensitive test for water',
            description:
              'Even a tiny amount of water turns the powder blue, so chemists use it as a moisture test. White to blue means water is present.',
          },
          {
            id: 'csm-dd-h-regen',
            x: 50,
            y: 92,
            label: 'Regenerate by heating',
            description:
              'Heat the blue crystals gently to drive off the water as vapour. The solid turns back to white anhydrous powder and can be reused as an indicator.',
          },
        ],
      },
    },
    {
      id: 'csm-dd-scene-uk',
      title: 'Desiccants in Everyday UK Settings',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see where you meet desiccants outside the lab, and why each one is chosen.',
      data: {
        viewBox: '0 0 320 200',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><rect x="0" y="0" width="320" height="200" fill="#FEF3C7"/><g><rect x="10" y="20" width="90" height="80" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1"/><text x="55" y="38" text-anchor="middle" font-size="8" font-weight="700" fill="#1E3A8A">SHOEBOX</text><rect x="25" y="50" width="60" height="35" fill="#92400E" opacity="0.4"/><rect x="35" y="60" width="20" height="18" fill="#FFFFFF" stroke="#475569" stroke-width="0.6"/><text x="45" y="73" text-anchor="middle" font-size="5" fill="#475569">silica</text></g><g><rect x="115" y="20" width="90" height="80" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1"/><text x="160" y="38" text-anchor="middle" font-size="8" font-weight="700" fill="#1E3A8A">SALT CELLAR</text><circle cx="160" cy="70" r="22" fill="#DBEAFE" stroke="#475569" stroke-width="0.6"/><g fill="#FFFFFF" stroke="#475569" stroke-width="0.3"><circle cx="150" cy="68" r="1.5"/><circle cx="158" cy="65" r="1.5"/><circle cx="168" cy="70" r="1.5"/><circle cx="155" cy="75" r="1.5"/><circle cx="165" cy="78" r="1.5"/></g><g fill="#FBBF24" stroke="#7C2D12" stroke-width="0.3"><ellipse cx="160" cy="68" rx="3" ry="1.5"/></g><text x="160" y="95" text-anchor="middle" font-size="6" fill="#475569">rice grain inside</text></g><g><rect x="220" y="20" width="90" height="80" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1"/><text x="265" y="38" text-anchor="middle" font-size="8" font-weight="700" fill="#1E3A8A">DAMP LOFT</text><rect x="240" y="50" width="50" height="30" fill="#FFFFFF" stroke="#475569" stroke-width="0.6"/><g fill="#94A3B8"><circle cx="250" cy="62" r="2.5"/><circle cx="260" cy="65" r="2.5"/><circle cx="270" cy="62" r="2.5"/><circle cx="280" cy="65" r="2.5"/><circle cx="255" cy="73" r="2.5"/><circle cx="275" cy="73" r="2.5"/></g><text x="265" y="95" text-anchor="middle" font-size="6" fill="#475569">CaCl2 flakes</text></g><g><rect x="10" y="115" width="300" height="75" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1"/><text x="160" y="135" text-anchor="middle" font-size="9" font-weight="700" fill="#1E3A8A">PHONE-IN-RICE RESCUE</text><text x="160" y="155" text-anchor="middle" font-size="8" fill="#475569">Bury a wet phone in a sealed tub of dry rice. The rice grains</text><text x="160" y="167" text-anchor="middle" font-size="8" fill="#475569">absorb water vapour from the air around the phone over 24 to 48 hours.</text><text x="160" y="180" text-anchor="middle" font-size="7" fill="#7C2D12">(silica gel does this better, but rice is what you usually have at home)</text></g></svg>',
        hotspots: [
          {
            id: 'csm-dd-h-uk-shoe',
            x: 17,
            y: 30,
            label: 'Silica gel sachets in a shoebox',
            description:
              'Sachets you find in shoeboxes and electronics boxes from Argos or John Lewis hold silica gel. The gel absorbs damp air during shipping so leather and metal parts stay dry.',
          },
          {
            id: 'csm-dd-h-uk-salt',
            x: 50,
            y: 30,
            label: 'Rice grains in a salt cellar',
            description:
              'A few grains of dry rice sit in the salt to absorb stray water vapour from the kitchen air. Without them the salt clumps together and refuses to pour.',
          },
          {
            id: 'csm-dd-h-uk-loft',
            x: 83,
            y: 30,
            label: 'Calcium chloride flakes in a damp loft',
            description:
              'Anhydrous calcium chloride is a strong desiccant. A tub of CaCl2 flakes pulls water vapour out of damp loft air and collects it as a brine in the tub.',
          },
          {
            id: 'csm-dd-h-uk-phone',
            x: 50,
            y: 75,
            label: 'Phone-in-rice rescue',
            description:
              'Rice is a low-tech desiccant. Sealed in a tub with a damp phone, the rice grains absorb water vapour from the air space around the phone and help dry the inside.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'csm-dd-worked-1',
      title: 'Choosing a drying method for hydrated copper sulfate crystals',
      steps: [
        {
          explanation:
            'Sophie has grown a batch of hydrated copper sulfate crystals (CuSO4.5H2O) by evaporating a saturated solution. She filters them out and the crystals on the paper are still damp with solution. She wants the crystals to be dry to weigh, but she must not lose the blue colour.',
        },
        {
          explanation:
            'Step 1: think about what the heat would do. The blue colour comes from water of crystallisation locked into the crystal structure. Heating the crystals strongly drives that water out and turns them back to a white anhydrous powder, ruining the sample.',
        },
        {
          explanation:
            'Step 2: rule out the drying oven at 110 C. Even a gentle oven will start to drive water of crystallisation out of hydrated copper sulfate, so this would damage Sophie\'s crystals.',
        },
        {
          explanation:
            'Step 3: choose air drying or a desiccator. Both work without heat. Sophie spreads the crystals in a thin layer between two pieces of filter paper and dabs them gently to soak up the loose solution, then leaves them on a clean tile in a covered tray for 24 hours.',
        },
        {
          explanation:
            'Step 4: for a faster result she could put the watch glass in a desiccator next to a tray of self-indicating silica gel. The silica gel absorbs water vapour from the air around the crystals and the crystals dry overnight without losing their blue colour.',
          maths: 'no heat used: crystal water stays in the solid',
        },
        {
          explanation:
            'So for any solid that holds water of crystallisation, the right drying method is air drying or a desiccant, never a hot oven.',
        },
      ],
    },
    {
      id: 'csm-dd-worked-2',
      title: 'Calculating water lost from a wet salt sample',
      steps: [
        {
          explanation:
            'Question: Liam filters salt that he has grown from a hot solution. The damp residue masses 12.4 g on a watch glass. He places it in a drying oven at 100 C for 30 minutes. After cooling, the dry salt masses 10.0 g. How much water has the oven removed, in grams?',
        },
        {
          explanation:
            'Step 1: identify what changed. The mass went from 12.4 g (wet) to 10.0 g (dry). Salt does not turn to gas at 100 C, so the lost mass must be water that has evaporated into the oven air.',
        },
        {
          explanation:
            'Step 2: subtract dry mass from wet mass. Water removed = 12.4 g - 10.0 g = 2.4 g.',
          maths: '12.4 - 10.0 = 2.4 g',
        },
        {
          explanation:
            'Step 3: check the answer is sensible. The salt was damp, not soaked, so a few grams of water is reasonable. If Liam had got a negative number or a value bigger than the starting mass he would know something had gone wrong with the balance.',
        },
        {
          explanation:
            'So 2.4 g of water was removed by the drying step. The remaining 10.0 g is the dry mass of salt, which is what Liam needs for any concentration calculation.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'csm-dd-q1',
      type: 'multiple-choice',
      stem: 'A Year 7 pupil has filtered sand out of a beaker of muddy water. The sand on the filter paper still feels damp. Why does the sand need a further drying step?',
      tier: 'core',
      options: [
        'Because filtration adds extra water to the residue',
        'Because the residue holds water in the spaces between its particles, and filtration only removes free liquid',
        'Because the filter paper turns water into a new substance',
        'Because sand is soluble and needs to crystallise',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'csm-dd-mis-filter-removes-all-water',
    },
    {
      id: 'csm-dd-q2',
      type: 'multiple-choice',
      stem: 'Which of these solids is safe to dry in a hot oven at 110 C?',
      tier: 'core',
      options: [
        'Hydrated copper sulfate crystals',
        'Sugar crystals',
        'Sodium chloride (table salt)',
        'A vitamin C tablet',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'csm-dd-mis-oven-dry-everything',
    },
    {
      id: 'csm-dd-q3',
      type: 'multiple-choice',
      stem: 'How does silica gel inside a shoebox sachet keep new leather shoes dry during shipping from a UK warehouse?',
      tier: 'core',
      options: [
        'It reacts chemically with the leather to make a new dry substance',
        'It releases heat that evaporates the water',
        'It absorbs water vapour from the air space inside the box',
        'It melts and soaks up the moisture as a liquid',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'csm-dd-mis-desiccant-reacts',
    },
    {
      id: 'csm-dd-q4',
      type: 'multiple-choice',
      stem: 'A pupil drops a few drops of water onto a small heap of white anhydrous copper sulfate. What does she see, and what does it tell her?',
      tier: 'core',
      options: [
        'It turns blue, which shows that water is present',
        'It turns black, which shows that water is present',
        'It stays white, which shows that copper sulfate does not react with water',
        'It dissolves completely with no colour change',
      ],
      correctIndex: 0,
      xpValue: 15,
    },
    {
      id: 'csm-dd-q5',
      type: 'multiple-choice',
      stem: 'A school technician finds that the self-indicating silica gel in the desiccator has turned from blue to pink. What should she do next?',
      tier: 'core',
      options: [
        'Throw it away because it can no longer absorb water',
        'Heat it in an oven at around 120 C to drive off the water, then reuse it once it has turned blue again',
        'Wash it in tap water to refresh it',
        'Mix it with new beads so the colour averages out',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'csm-dd-mis-desiccant-used-up',
    },
    {
      id: 'csm-dd-q6',
      type: 'numeric-entry',
      stem: 'Liam filters a damp salt sample. On the watch glass the wet residue masses 12.4 g. After 30 minutes in a 100 C drying oven, the cooled salt masses 10.0 g. How much water, in grams, has the drying step removed?',
      tier: 'confident',
      correctAnswer: 2.4,
      tolerance: 0.05,
      unit: 'g',
      xpValue: 15,
      hint: 'Subtract the dry mass from the wet mass. Salt does not boil at 100 C, so any mass lost is water.',
    },
    {
      id: 'csm-dd-q7',
      type: 'numeric-entry',
      stem: 'A silica gel sachet from a UK shoebox can absorb up to 40% of its own mass in water. A fresh sachet has a mass of 25 g. What is the largest mass of water, in grams, the sachet can hold?',
      tier: 'confident',
      correctAnswer: 10,
      unit: 'g',
      xpValue: 15,
      hint: 'Find 40% of 25 g. Convert the percentage to a decimal (0.40) and multiply.',
    },
    {
      id: 'csm-dd-q8',
      type: 'spot-misconception',
      stem: 'Aisha says: "I will dry these blue hydrated copper sulfate crystals in the drying oven at 110 C, because heat always speeds drying up."',
      tier: 'confident',
      statements: [
        {
          text: 'Aisha is right. The hotter the oven, the faster every solid will dry, and the colour will not change.',
          isMisconception: true,
        },
        {
          text: 'Aisha is wrong. Heat will drive the water of crystallisation out of the blue crystals and turn them back to a white anhydrous powder. She should air dry or use a desiccator instead.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'csm-dd-mis-heat-always-best',
    },
    {
      id: 'csm-dd-q9',
      type: 'drag-order',
      stem: 'Place these steps in the correct order for drying a damp filtered salt residue ready for weighing.',
      tier: 'confident',
      items: [
        'Reweigh after cooling and record the dry mass',
        'Lift the wet residue off the filter paper onto a clean watch glass',
        'Place the watch glass in a drying oven at 100 C for a set time',
        'Remove the watch glass, allow it to cool in a desiccator',
      ],
      correctOrder: [1, 2, 3, 0],
      xpValue: 15,
    },
    {
      id: 'csm-dd-q10',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: A pupil weighs out 25 g of blue hydrated copper sulfate crystals and heats them strongly in a crucible until the powder is fully white. The final mass is 16 g. Use the particle model to explain why the mass has dropped.',
      tier: 'confident',
      steps: [
        'The blue crystals contain water of crystallisation locked into the crystal structure as separate water molecules.',
        'Heating the crucible gives those water molecules enough energy to escape from the solid as water vapour.',
        null,
        'So the missing 9 g of mass is water vapour now in the air. The solid that remains is the dry anhydrous copper sulfate, 16 g of it.',
      ],
      missingStepIndex: 2,
      correctStep:
        'The water vapour leaves the open crucible and spreads into the air, while the copper sulfate particles themselves stay behind in the crucible as a white powder.',
      xpValue: 20,
    },
    {
      id: 'csm-dd-q11',
      type: 'data-extraction',
      stem: 'A pupil air dries a 50 g sample of damp salt on a tile in a covered tray. He weighs it each day. Day 0: 50.0 g. Day 1: 48.5 g. Day 2: 48.2 g. Day 3: 48.2 g. What is the total mass of water lost, in grams, by Day 3?',
      tier: 'core',
      dataSource:
        'Air drying log. Day 0: 50.0 g. Day 1: 48.5 g. Day 2: 48.2 g. Day 3: 48.2 g.',
      correctAnswer: '1.8',
      xpValue: 15,
      hint: 'Subtract the final stable mass from the starting mass. Day 3 matches Day 2, so the sample has finished drying.',
    },
    {
      id: 'csm-dd-q12',
      type: 'multiple-choice',
      stem: 'Why is it useful that self-indicating silica gel beads change from blue to pink as they absorb water?',
      tier: 'core',
      options: [
        'The colour change kills any bacteria in the desiccator',
        'The colour change adds extra mass to the beads so they trap more water',
        'The colour change makes the beads taste different',
        'The colour gives a visible signal that the desiccant is full and needs regenerating',
      ],
      correctIndex: 3,
      xpValue: 15,
    },
    {
      id: 'csm-dd-q13',
      type: 'labelled-image',
      stem: 'Drag each label onto the correct part of the desiccator set-up.',
      tier: 'confident',
      viewBox: '0 0 320 220',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#F8FAFC"/><rect x="0" y="200" width="320" height="20" fill="#D6D3D1"/><path d="M 60 60 Q 160 30 260 60 L 260 180 L 60 180 Z" fill="#E0F2FE" stroke="#1E3A8A" stroke-width="1.5" opacity="0.7"/><path d="M 60 60 Q 160 30 260 60" fill="none" stroke="#1E3A8A" stroke-width="1.5"/><line x1="60" y1="125" x2="260" y2="125" stroke="#475569" stroke-width="1.2" stroke-dasharray="3 2"/><rect x="115" y="105" width="90" height="20" rx="2" fill="#FFFFFF" stroke="#475569" stroke-width="0.8"/><rect x="80" y="140" width="160" height="40" rx="2" fill="#DBEAFE" stroke="#1E3A8A" stroke-width="0.8"/></svg>',
      hotspots: [
        { id: 'csm-dd-q13-h1', x: 50, y: 22, correctLabel: 'Sealed glass lid' },
        { id: 'csm-dd-q13-h2', x: 50, y: 50, correctLabel: 'Wet solid on watch glass' },
        { id: 'csm-dd-q13-h3', x: 50, y: 58, correctLabel: 'Perforated shelf' },
        { id: 'csm-dd-q13-h4', x: 50, y: 75, correctLabel: 'Self-indicating silica gel' },
      ],
      labels: [
        'Sealed glass lid',
        'Wet solid on watch glass',
        'Perforated shelf',
        'Self-indicating silica gel',
        'Bunsen burner',
        'Filter funnel',
      ],
      xpValue: 20,
    },
    {
      id: 'csm-dd-q14',
      type: 'free-text',
      stem: 'A pupil asks: "If I press my damp filter cake hard between two pieces of dry filter paper, is the solid then fully dry and ready to weigh?" Use ideas about water held by a solid to give your answer.',
      tier: 'confident',
      sampleAnswer:
        'Pressing only removes the free liquid that is sitting in the gaps between the lumps. Water is also absorbed into the solid and stuck to the surfaces of the particles. To remove that water you need to heat the solid in a drying oven, leave it to air dry on a tile, or place it in a desiccator with silica gel. So pressing alone is not enough for a true dry mass.',
      keywords: ['absorbed', 'desiccant', 'oven', 'free', 'surface'],
      xpValue: 15,
      misconceptionId: 'csm-dd-mis-press-removes-all',
    },
    {
      id: 'csm-dd-q15',
      type: 'numeric-entry',
      stem: 'A chemist heats a 25 g sample of blue hydrated copper sulfate crystals in a crucible until they are fully white. The final mass is 16 g. What percentage of the original mass was water of crystallisation? Give your answer as a whole number.',
      tier: 'challenge',
      correctAnswer: 36,
      unit: '%',
      xpValue: 25,
      hint: 'Find the mass of water lost (25 - 16). Divide by the starting mass (25) and multiply by 100.',
    },
    {
      id: 'csm-dd-q16',
      type: 'multiple-choice',
      stem: 'A pupil leaves an open tub of anhydrous calcium chloride flakes on a shelf in a damp basement in Bristol. After a week the flakes have turned into a clear liquid pool at the bottom of the tub. Which conclusion best fits the particle model?',
      tier: 'challenge',
      options: [
        'The flakes have melted because the basement is warm',
        'The flakes have absorbed so much water vapour from the damp air that they have dissolved in the water they collected; this is called deliquescence',
        'The flakes have reacted with the plastic of the tub to make a new liquid',
        'The flakes are only absorbing water from inside themselves, so the liquid must have come from a leak',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'csm-dd-mis-cacl2-self-only',
    },
    {
      id: 'csm-dd-q17',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: A school technician notices a tub of self-indicating silica gel beads that is fully pink. She places the tub in a drying oven at 120 C overnight. The next morning the beads are blue again. Explain the cycle in terms of water particles.',
      tier: 'challenge',
      steps: [
        'Pink beads are saturated with water that has been absorbed from the air over many uses.',
        'In the 120 C oven, the absorbed water molecules gain enough energy to leave the bead surfaces as water vapour.',
        null,
        'So the silica gel is not consumed when used. It can be regenerated many times by driving the absorbed water back out as vapour.',
      ],
      missingStepIndex: 2,
      correctStep:
        'The water vapour leaves the open tub and spreads into the oven air, leaving the silica gel beads dry again. As they dry, the indicator dye returns to blue.',
      xpValue: 25,
      misconceptionId: 'csm-dd-mis-desiccant-used-up',
    },
    {
      id: 'csm-dd-q18',
      type: 'multiple-choice',
      stem: 'A chef in Manchester keeps a few grains of dry rice in her salt cellar. After a damp week the salt still pours easily, while a friend\'s salt cellar without rice has clumped into a single lump. Which is the best explanation?',
      tier: 'challenge',
      options: [
        'The rice grains chemically react with the salt to keep the crystals apart',
        'The rice grains add flavour that stops the salt clumping',
        'The salt only clumps in cold kitchens, never in damp ones',
        'The rice grains act as a low-tech desiccant, absorbing water vapour from the air inside the cellar before it can reach the salt',
      ],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'csm-dd-mis-desiccant-reacts',
    },
    {
      id: 'csm-dd-q19',
      type: 'free-text',
      stem: 'A pupil filters a batch of vitamin C powder from solution and needs it bone-dry for a mass measurement. Vitamin C decomposes if heated above about 60 C. Suggest two safe drying methods and explain in one or two sentences why each one preserves the vitamin C.',
      tier: 'challenge',
      sampleAnswer:
        'First, leave the vitamin C in a thin layer on a tile in a covered tray to air dry at room temperature. The water evaporates slowly without the temperature going anywhere near 60 C, so the vitamin C does not decompose. Second, place the watch glass inside a desiccator with self-indicating silica gel. The silica gel absorbs water vapour from the air around the powder without any heat at all, so the vitamin C structure is preserved.',
      keywords: ['air', 'desiccator', 'silica', 'room temperature', 'decompose'],
      xpValue: 25,
    },
    {
      id: 'csm-dd-q20',
      type: 'numeric-entry',
      stem: 'A school technician weighs a fresh silica gel sachet at 25 g. After a week in a damp store cupboard the same sachet masses 32 g. What mass of water, in grams, has the sachet absorbed?',
      tier: 'confident',
      correctAnswer: 7,
      unit: 'g',
      xpValue: 15,
      hint: 'Subtract the starting mass from the current mass. The extra mass is water taken from the air.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Chemistry examiner report June 2021 (8462/1F), Q05 on practical drying of crystals: candidates often suggested a hot oven for hydrated copper sulfate or sugar, ignoring that those solids decompose or lose water of crystallisation. Reinforced by RSC Education "Required practical: making salts" notes.
    {
      id: 'csm-dd-mis-oven-dry-everything',
      description:
        'Every wet solid can be dried in a hot oven, since heat will always evaporate water.',
      triggerAnswer: 'oven-dry-everything',
      correction:
        'In fact thermally sensitive solids such as sugar, vitamin C and hydrated copper sulfate decompose or change structure when heated. They need air drying or a desiccant instead.',
      reExplanation:
        'A drying oven is fine for salt and sand because those solids are stable well above 100 C. Hydrated copper sulfate, by contrast, loses its water of crystallisation around 110 C and turns from blue to white. Sugar caramelises above about 160 C and vitamin C breaks down by 60 C. For these you choose a method that removes water without heating the solid: open air drying, or a sealed desiccator with silica gel.',
    },
    // Source: Best Evidence Science Teaching (BEST), STEM Learning / UCL, KS3 diagnostic question set on filtration and washing solids: pupils often say the residue left on filter paper is "already dry" because they no longer see liquid pouring through. Reinforced by CGP KS3 Chemistry common-mistake callouts on practical work.
    {
      id: 'csm-dd-mis-filter-removes-all-water',
      description:
        'Filtration removes all of the water from a mixture, so the residue on the paper is already dry.',
      triggerAnswer: 'filter-removes-all-water',
      correction:
        'In fact the residue is only freshly drained; water still clings between the particles and on the surfaces of the solid. A further drying step is needed before any "dry mass" reading.',
      reExplanation:
        'Weigh wet sand off the filter paper, then weigh it again after a session in a drying oven and the mass drops. Filtration only removes the free liquid that can pass through the paper. Water held between particles, soaked into the surface and trapped in tiny pores stays with the solid until heat or a desiccant takes it away.',
    },
    // Source: David Paterson, RSC Education CPD article on drying solids in school practicals (2021): a long-standing pupil error is to picture silica gel "reacting" with moisture rather than physically adsorbing it. Reinforced by AQA examiner reports on the "test for water" practical with anhydrous copper sulfate.
    {
      id: 'csm-dd-mis-desiccant-reacts',
      description:
        'Desiccants such as silica gel work by reacting chemically with the solid they are drying.',
      triggerAnswer: 'desiccant-reacts',
      correction:
        'In fact most desiccants do not touch the solid at all. They absorb water vapour from the air space around the solid, so the solid dries indirectly.',
      reExplanation:
        'Put a wet watch glass in a sealed desiccator with silica gel beads on the shelf below. The beads never come into contact with the solid; they just lower the humidity of the air inside the desiccator. Water leaves the wet solid as vapour, drifts down to the beads and is trapped there. Anhydrous calcium chloride works the same way, absorbing water vapour without reacting with most lab solids.',
    },
    // Source: OCR Gateway Chemistry examiner report June 2020 (J248/01), Q04 on self-indicating silica gel: candidates often described used silica gel as "ruined" rather than recognising that heating drives the water back off and restores the dry state. Reinforced by RSC Education technician notes on desiccator maintenance.
    {
      id: 'csm-dd-mis-desiccant-used-up',
      description:
        'Once silica gel beads have turned pink, the desiccant is used up and must be thrown away.',
      triggerAnswer: 'desiccant-used-up',
      correction:
        'In fact most desiccants can be regenerated by heating. Silica gel returns to blue and dry when warmed to around 120 C, and anhydrous copper sulfate can be heated back to white.',
      reExplanation:
        'The pink colour just shows the beads now hold absorbed water. Place them in a drying oven overnight at about 120 C and the water leaves as vapour, the indicator dye flips back to blue and the beads are ready to absorb again. The same idea works for blue hydrated copper sulfate: heat it gently and the water of crystallisation drives off, leaving the white anhydrous form ready to test the next sample.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2019 (1CH0/1F), Q06 on recovering crystals: candidates often justified strong heating with "faster is always better", missing that hydrated crystals lose water of crystallisation and that delicate crystal habits are destroyed. Reinforced by CGP KS3 callouts on copper sulfate practicals.
    {
      id: 'csm-dd-mis-heat-always-best',
      description:
        'Hot drying is always best, because higher temperatures get the solid dry faster.',
      triggerAnswer: 'heat-always-best',
      correction:
        'In fact strong heat can ruin hydrated crystals such as CuSO4.5H2O by driving out their water of crystallisation and turning blue crystals back to a white powder.',
      reExplanation:
        'Hydrated copper sulfate holds water inside its crystal structure. Mild heat starts to drive that water out around 110 C, so a drying oven turns the blue crystals back to anhydrous white powder. Strong heat can also crack large crystals or melt sugars. For any sample where the crystal form matters, slower air drying or a desiccator preserves both colour and shape.',
    },
    // Source: BEST KS3 diagnostic question set on filtration and washing solids; pupils often think that blotting between filter papers is sufficient to give a "dry mass". Reinforced by RSC Education practical notes on preparing salts.
    {
      id: 'csm-dd-mis-press-removes-all',
      description:
        'Pressing a damp solid between filter papers removes all of the moisture, so no further drying is needed.',
      triggerAnswer: 'press-removes-all',
      correction:
        'In fact pressing only squeezes out free liquid sitting in the gaps. Water absorbed into the solid and stuck on particle surfaces stays until heat or a desiccant takes it.',
      reExplanation:
        'A pressed sample looks dry but still loses mass when put in a drying oven or desiccator, which proves there was hidden water. The free liquid in the bulk space leaves easily under pressure, but absorbed and surface water binds to the particles and needs energy or low surrounding humidity to escape. So pressing is useful as a first step, but it is never a substitute for proper drying before a mass reading.',
    },
    // Source: RSC Education classroom article on calcium chloride and deliquescence (2022): pupils often suggest that anhydrous CaCl2 can only "dry itself" and miss that it pulls water vapour out of the surrounding air, eventually deliquescing. Reinforced by OCR Gateway technician notes on calcium chloride storage.
    {
      id: 'csm-dd-mis-cacl2-self-only',
      description:
        'Anhydrous calcium chloride only absorbs moisture from itself, not from the surrounding air.',
      triggerAnswer: 'cacl2-self-only',
      correction:
        'In fact anhydrous calcium chloride is deliquescent. It pulls water vapour out of the air around it and can take in so much that it dissolves in the water it has collected.',
      reExplanation:
        'Leave a fresh tub of CaCl2 flakes open in a damp loft. Within a week the flakes shrink and a clear pool of liquid forms at the bottom. That liquid is calcium chloride solution. The flakes have absorbed water vapour from the loft air, and once they hold enough water they dissolve in it. This is why CaCl2 is used in damp-trap pots and why it must be stored in a tightly sealed bottle when not in use.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
