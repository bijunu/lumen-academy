import type { SkillNode } from '@/types/content'

export const stateChanges: SkillNode = {
  id: 'chemistry-particle-model-state-changes',
  title: 'Changes of State',
  description:
    'Name the six state changes (melting, freezing, evaporating, boiling, condensing, sublimation) and use the particle model to explain what happens during each one. Apply conservation of mass through a state change, and tell the difference between a substance changing state and dissolving.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-particle-model',
  zoneName: 'Particle Model',
  tier: 'core',
  prerequisites: ['chemistry-particle-model-states'],
  curriculum: {
    ks3Objective: 'Changes of state in terms of the particle model.',
    awardingBodies: {
      aqa: '4.2.2.1 The three states of matter, including changes of state (8462)',
      edexcel: 'Topic 1.6 States of matter and changes of state (1CH0)',
      ocr: 'C1.1c Changes of state and the particle model (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'scc-scene-cycle',
      title: 'The Six State Changes',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the cycle to name the state change and see what happens to the particles.',
      data: {
        viewBox: '0 0 320 200',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><rect x="0" y="0" width="320" height="200" fill="#FEF3C7"/><g><rect x="20" y="100" width="60" height="60" rx="4" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="1.5"/><text x="50" y="135" text-anchor="middle" font-size="11" font-weight="600" fill="#1E3A8A">SOLID</text></g><g><rect x="130" y="100" width="60" height="60" rx="4" fill="#BBF7D0" stroke="#14532D" stroke-width="1.5"/><text x="160" y="135" text-anchor="middle" font-size="11" font-weight="600" fill="#14532D">LIQUID</text></g><g><rect x="240" y="100" width="60" height="60" rx="4" fill="#E9D5FF" stroke="#581C87" stroke-width="1.5"/><text x="270" y="135" text-anchor="middle" font-size="11" font-weight="600" fill="#581C87">GAS</text></g><g stroke="#475569" stroke-width="1.2" fill="none"><path d="M 80 115 Q 105 95 130 115" marker-end="url(#arrow)"/><path d="M 130 145 Q 105 165 80 145" marker-end="url(#arrow)"/><path d="M 190 115 Q 215 95 240 115" marker-end="url(#arrow)"/><path d="M 240 145 Q 215 165 190 145" marker-end="url(#arrow)"/><path d="M 50 100 Q 50 30 270 30 Q 270 50 270 100" marker-end="url(#arrow)"/><path d="M 270 100 Q 270 70 50 70 Q 50 90 50 100" marker-end="url(#arrow)" opacity="0.5"/></g><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#475569"/></marker></defs></svg>',
        hotspots: [
          {
            id: 'scc-h-cycle-melt',
            x: 105,
            y: 92,
            label: 'Melting',
            description:
              'Solid to liquid. The particles gain energy and break out of their fixed grid, but they still touch.',
          },
          {
            id: 'scc-h-cycle-freeze',
            x: 105,
            y: 168,
            label: 'Freezing',
            description:
              'Liquid to solid. The particles lose energy and lock back into a regular pattern.',
          },
          {
            id: 'scc-h-cycle-boil',
            x: 215,
            y: 92,
            label: 'Boiling or evaporating',
            description:
              'Liquid to gas. The particles gain enough energy to break away from each other and spread out.',
          },
          {
            id: 'scc-h-cycle-condense',
            x: 215,
            y: 168,
            label: 'Condensing',
            description:
              'Gas to liquid. The particles lose energy, slow down and clump back together.',
          },
          {
            id: 'scc-h-cycle-sublime',
            x: 160,
            y: 28,
            label: 'Sublimation',
            description:
              'Solid to gas with no liquid in between, like dry ice in a stage smoke machine.',
          },
          {
            id: 'scc-h-cycle-deposit',
            x: 160,
            y: 68,
            label: 'Deposition',
            description:
              'Gas to solid with no liquid in between, like frost forming on a cold windowpane.',
          },
        ],
      },
    },
    {
      id: 'scc-scene-heating-curve',
      title: 'Heating a Block of Ice from a Freezer',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the heating graph to read what is happening to the water particles at that point.',
      data: {
        viewBox: '0 0 320 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#F8FAFC"/><g stroke="#475569" stroke-width="1" fill="none"><line x1="40" y1="20" x2="40" y2="190"/><line x1="40" y1="190" x2="300" y2="190"/></g><g font-size="9" fill="#475569"><text x="35" y="193" text-anchor="end">-20</text><text x="35" y="155" text-anchor="end">0</text><text x="35" y="65" text-anchor="end">100</text><text x="35" y="38" text-anchor="end">120</text><text x="170" y="208" text-anchor="middle">Time</text><text x="14" y="105" text-anchor="middle" transform="rotate(-90 14 105)">Temperature, C</text></g><g stroke="#94A3B8" stroke-dasharray="2 2" stroke-width="0.6"><line x1="40" y1="155" x2="300" y2="155"/><line x1="40" y1="65" x2="300" y2="65"/></g><polyline points="40,180 75,156 130,155 175,68 235,65 285,50" fill="none" stroke="#DC2626" stroke-width="2"/><g fill="#DC2626"><circle cx="40" cy="180" r="2.5"/><circle cx="75" cy="156" r="2.5"/><circle cx="130" cy="155" r="2.5"/><circle cx="175" cy="68" r="2.5"/><circle cx="235" cy="65" r="2.5"/><circle cx="285" cy="50" r="2.5"/></g></svg>',
        hotspots: [
          {
            id: 'scc-h-curve-solid',
            x: 60,
            y: 170,
            label: 'Solid warming up',
            description:
              'The ice is below 0 C. The particles vibrate harder as energy goes in, and the temperature rises.',
          },
          {
            id: 'scc-h-curve-melt',
            x: 105,
            y: 145,
            label: 'Melting at 0 C',
            description:
              'The temperature stops rising. The energy now goes into breaking the strong forces in the solid, so the ice turns to water.',
          },
          {
            id: 'scc-h-curve-liquid',
            x: 155,
            y: 110,
            label: 'Liquid warming up',
            description:
              'All the ice has melted. The water particles slide past each other faster and faster as the temperature rises again.',
          },
          {
            id: 'scc-h-curve-boil',
            x: 205,
            y: 55,
            label: 'Boiling at 100 C',
            description:
              'The temperature stops rising again. Particles gain enough energy to break away from each other and become steam.',
          },
          {
            id: 'scc-h-curve-gas',
            x: 270,
            y: 35,
            label: 'Gas warming up',
            description:
              'All the water has boiled. The steam particles fly faster as more energy goes in.',
          },
        ],
      },
    },
    {
      id: 'scc-scene-melt-vs-dissolve',
      title: 'Ice in Tea, and Sugar in Tea',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare an ice cube melting in tea with a sugar cube dissolving in tea.',
      data: {
        viewBox: '0 0 320 180',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180"><rect x="0" y="0" width="320" height="180" fill="#FEF3C7"/><g><rect x="30" y="40" width="100" height="120" rx="4" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="1.2"/><rect x="38" y="80" width="84" height="74" fill="#92400E" opacity="0.55"/><rect x="60" y="55" width="40" height="30" rx="2" fill="#E0F2FE" stroke="#1E3A8A"/><text x="80" y="30" text-anchor="middle" font-size="10" font-weight="600" fill="#1E3A8A">ICE IN TEA</text><g fill="#1E3A8A"><circle cx="65" cy="63" r="3"/><circle cx="75" cy="63" r="3"/><circle cx="85" cy="63" r="3"/><circle cx="95" cy="63" r="3"/><circle cx="65" cy="73" r="3"/><circle cx="75" cy="73" r="3"/><circle cx="85" cy="73" r="3"/><circle cx="95" cy="73" r="3"/></g><g fill="#1E3A8A" opacity="0.7"><circle cx="50" cy="100" r="2.5"/><circle cx="70" cy="115" r="2.5"/><circle cx="90" cy="105" r="2.5"/><circle cx="110" cy="120" r="2.5"/><circle cx="55" cy="135" r="2.5"/><circle cx="100" cy="140" r="2.5"/></g></g><g><rect x="190" y="40" width="100" height="120" rx="4" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="1.2"/><rect x="198" y="50" width="84" height="104" fill="#92400E" opacity="0.55"/><rect x="220" y="55" width="40" height="30" rx="2" fill="#FFFFFF" stroke="#475569"/><text x="240" y="30" text-anchor="middle" font-size="10" font-weight="600" fill="#7C2D12">SUGAR IN TEA</text><g fill="#475569"><circle cx="225" cy="63" r="2.5"/><circle cx="235" cy="63" r="2.5"/><circle cx="245" cy="63" r="2.5"/><circle cx="255" cy="63" r="2.5"/><circle cx="225" cy="73" r="2.5"/><circle cx="235" cy="73" r="2.5"/><circle cx="245" cy="73" r="2.5"/><circle cx="255" cy="73" r="2.5"/></g><g><circle cx="210" cy="100" r="2" fill="#475569"/><circle cx="222" cy="120" r="2" fill="#475569"/><circle cx="245" cy="110" r="2" fill="#475569"/><circle cx="270" cy="125" r="2" fill="#475569"/><circle cx="215" cy="140" r="2" fill="#475569"/><circle cx="260" cy="135" r="2" fill="#475569"/><circle cx="200" cy="115" r="2" fill="#1E3A8A" opacity="0.7"/><circle cx="232" cy="100" r="2" fill="#1E3A8A" opacity="0.7"/><circle cx="255" cy="120" r="2" fill="#1E3A8A" opacity="0.7"/><circle cx="278" cy="105" r="2" fill="#1E3A8A" opacity="0.7"/><circle cx="207" cy="138" r="2" fill="#1E3A8A" opacity="0.7"/><circle cx="240" cy="148" r="2" fill="#1E3A8A" opacity="0.7"/></g></g></svg>',
        hotspots: [
          {
            id: 'scc-h-mvd-ice',
            x: 80,
            y: 70,
            label: 'Ice cube: only water particles',
            description:
              'The cube and the tea are made of the same water particles, just in different states. The cube is the solid version.',
          },
          {
            id: 'scc-h-mvd-melt',
            x: 80,
            y: 130,
            label: 'Ice melts: a state change',
            description:
              'The water particles in the cube gain energy from the warm tea and break out of their grid. Same particles, new arrangement.',
          },
          {
            id: 'scc-h-mvd-sugar',
            x: 240,
            y: 70,
            label: 'Sugar cube: different particles',
            description:
              'A sugar cube is made of sugar particles, not water. The tea is mostly water particles. Two kinds of particle, before and after.',
          },
          {
            id: 'scc-h-mvd-dissolve',
            x: 240,
            y: 130,
            label: 'Sugar dissolves: a mixture forms',
            description:
              'The sugar particles spread out and slip between the water particles. They have not melted, the cube has just mixed in.',
          },
        ],
      },
    },
    {
      id: 'scc-scene-uk-everyday',
      title: 'State Changes Around the House',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to spot a state change in a UK home.',
      data: {
        viewBox: '0 0 320 160',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 160"><rect x="0" y="0" width="320" height="160" fill="#FEF3C7"/><g><rect x="10" y="20" width="70" height="120" fill="#DBEAFE" stroke="#1E3A8A"/><g fill="#FFFFFF" stroke="#94A3B8" stroke-width="0.6"><circle cx="25" cy="40" r="3"/><circle cx="40" cy="35" r="3"/><circle cx="55" cy="42" r="3"/><circle cx="70" cy="38" r="3"/><circle cx="20" cy="60" r="3"/><circle cx="35" cy="58" r="3"/><circle cx="50" cy="62" r="3"/><circle cx="65" cy="55" r="3"/><circle cx="30" cy="80" r="3"/><circle cx="55" cy="78" r="3"/><circle cx="20" cy="100" r="3"/><circle cx="60" cy="100" r="3"/></g><text x="45" y="135" text-anchor="middle" font-size="8" fill="#1E3A8A">FROST ON GLASS</text></g><g><rect x="90" y="40" width="60" height="100" fill="#94A3B8" stroke="#475569"/><rect x="135" y="55" width="10" height="5" fill="#475569"/><path d="M 145 50 Q 155 30 145 15 Q 135 5 150 0" stroke="#94A3B8" stroke-width="5" fill="none" opacity="0.6"/><text x="120" y="135" text-anchor="middle" font-size="8" fill="#1E3A8A">KETTLE STEAM</text></g><g><rect x="160" y="80" width="80" height="60" fill="#FBBF24" stroke="#92400E"/><rect x="170" y="70" width="60" height="15" rx="2" fill="#FEF3C7" stroke="#92400E"/><circle cx="200" cy="78" r="3" fill="#FBBF24" opacity="0.7"/><circle cx="190" cy="82" r="2" fill="#FBBF24" opacity="0.5"/><circle cx="210" cy="80" r="2" fill="#FBBF24" opacity="0.5"/><text x="200" y="155" text-anchor="middle" font-size="8" fill="#1E3A8A">BUTTER ON TOAST</text></g><g><line x1="250" y1="35" x2="310" y2="35" stroke="#475569" stroke-width="1.2"/><rect x="255" y="35" width="14" height="20" fill="#3B82F6" opacity="0.5"/><rect x="275" y="35" width="14" height="22" fill="#22C55E" opacity="0.5"/><rect x="295" y="35" width="14" height="18" fill="#A855F7" opacity="0.5"/><g fill="#1E3A8A"><circle cx="262" cy="65" r="1.5"/><circle cx="282" cy="68" r="1.5"/><circle cx="302" cy="62" r="1.5"/></g><text x="280" y="85" text-anchor="middle" font-size="8" fill="#1E3A8A">WET WASHING</text><text x="280" y="95" text-anchor="middle" font-size="8" fill="#1E3A8A">DRYING OUT</text></g></svg>',
        hotspots: [
          {
            id: 'scc-h-ev-frost',
            x: 45,
            y: 80,
            label: 'Frost: deposition',
            description:
              'Water vapour from the warm room turns straight into solid ice on the cold glass.',
          },
          {
            id: 'scc-h-ev-kettle',
            x: 120,
            y: 65,
            label: 'Kettle: boiling and condensing',
            description:
              'The water boils to steam inside the kettle. As the steam meets cooler air it condenses into the visible cloud you see.',
          },
          {
            id: 'scc-h-ev-butter',
            x: 200,
            y: 105,
            label: 'Butter: melting',
            description:
              'Heat from the toast gives the butter particles enough energy to slide past each other, so the solid butter turns into a liquid.',
          },
          {
            id: 'scc-h-ev-washing',
            x: 280,
            y: 50,
            label: 'Washing: evaporating',
            description:
              'Water particles on the surface gain enough energy to break away as a gas, even though the air is well below 100 C.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'scc-worked-1',
      title: 'Why ice melts at 0 C and not at any colder temperature',
      steps: [
        {
          explanation:
            'Take a block of ice straight from the freezer at -18 C and start to warm it up. While it is below 0 C the energy you add makes the water particles vibrate harder, so the temperature climbs.',
          maths: 'temperature rises from -18 C toward 0 C',
        },
        {
          explanation:
            'When the ice reaches 0 C the temperature stops rising, even though you keep heating it. This is the melting point.',
          maths: 'temperature holds at 0 C',
        },
        {
          explanation:
            'At 0 C all the energy you add now goes into breaking the strong forces that hold the particles in their grid. The ice slowly turns into water.',
        },
        {
          explanation:
            'Once every particle has broken free of the grid, the ice has fully melted. Only then does the temperature start to climb again, and the water keeps warming up.',
        },
        {
          explanation:
            'So the temperature pauses at 0 C because the energy is being used to change the state, not to warm anything up.',
        },
      ],
    },
    {
      id: 'scc-worked-2',
      title: 'A sugar cube in a cup of tea: did it melt?',
      steps: [
        {
          explanation:
            'Question: Aisha drops a sugar cube into a cup of warm tea. After stirring, the cube has gone and the tea is sweet. Aisha says the sugar has melted. Is she right?',
        },
        {
          explanation:
            'A cube of sugar is made of sugar particles. The tea is made mostly of water particles. Two different kinds of particle are present.',
        },
        {
          explanation:
            'Melting is a change of state for one substance. A solid melts when its own particles gain enough energy to break out of their grid and turn into a liquid of the same substance.',
        },
        {
          explanation:
            'When the sugar cube goes into the tea, the sugar particles do not break out of a grid because of energy. They are pulled apart by the water particles around them and slip into the gaps.',
        },
        {
          explanation:
            'The sugar particles end up spread between the water particles. The cube is gone, but no state change has happened to the sugar.',
        },
        {
          explanation:
            'So Aisha is mistaken. The sugar has dissolved into the water, not melted.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'scc-q1',
      type: 'multiple-choice',
      stem: 'A solid is heated and turns into a liquid. What is the name of this change?',
      tier: 'core',
      options: ['Boiling', 'Melting', 'Freezing', 'Dissolving'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'scc-mis-melt-dissolve',
    },
    {
      id: 'scc-q2',
      type: 'drag-order',
      stem: 'Order these particle pictures from coldest to hottest, ending with the state that has the most spread out particles.',
      tier: 'core',
      items: [
        'Particles in a tight grid (no flow)',
        'Particles touching but able to slide past each other',
        'Particles far apart and moving fast',
      ],
      correctOrder: [0, 1, 2],
      xpValue: 15,
    },
    {
      id: 'scc-q3',
      type: 'multiple-choice',
      stem: 'Inside a kettle that has just whistled, water turns into steam. What is the name of this change?',
      tier: 'core',
      options: ['Sublimation', 'Condensing', 'Boiling', 'Melting'],
      correctIndex: 2,
      xpValue: 10,
    },
    {
      id: 'scc-q4',
      type: 'numeric-entry',
      stem: 'A 50 g ice cube is placed on a saucer and left to melt fully into a puddle of water. What is the mass of the puddle in grams?',
      tier: 'core',
      correctAnswer: 50,
      unit: 'g',
      xpValue: 10,
      hint: 'Melting does not add or remove any particles.',
      misconceptionId: 'scc-mis-mass-disappears',
    },
    {
      id: 'scc-q5',
      type: 'multiple-choice',
      stem: 'On a cold morning, water droplets form on the inside of a bathroom mirror after a hot shower. What is the name of this change?',
      tier: 'core',
      options: ['Boiling', 'Sublimation', 'Condensing', 'Freezing'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'scc-mis-condensation-glass',
    },
    {
      id: 'scc-q6',
      type: 'slider-explore',
      stem: 'Set the slider to the temperature at which pure water turns from a solid into a liquid at normal pressure.',
      tier: 'core',
      min: -20,
      max: 120,
      step: 5,
      correctRange: [0, 0],
      label: 'Temperature, C',
      xpValue: 10,
      hint: 'Think about the temperature of an ice and water mixture in a glass.',
    },
    {
      id: 'scc-q7',
      type: 'multiple-choice',
      stem: 'A block of dry ice is left in a warm room. It shrinks away as a thick mist, with no liquid left behind. What is the name of this change?',
      tier: 'core',
      options: [
        'Melting, then boiling, very fast',
        'Sublimation',
        'Deposition',
        'Condensing',
      ],
      correctIndex: 1,
      xpValue: 10,
    },
    {
      id: 'scc-q8',
      type: 'numeric-entry',
      stem: 'A sealed glass jar holds 120 g of liquid water. The jar is left in a warm window until all the water inside has turned into water vapour. What is the mass of water vapour in the jar in grams?',
      tier: 'core',
      correctAnswer: 120,
      unit: 'g',
      xpValue: 10,
      hint: 'The jar is sealed, so no particles can leave.',
      misconceptionId: 'scc-mis-mass-disappears',
    },
    {
      id: 'scc-q9',
      type: 'multiple-choice',
      stem: 'When a block of ice melts into water, what happens to the water particles themselves?',
      tier: 'confident',
      options: [
        'The same particles stay, but they break out of their fixed grid and start to slide past each other',
        'The ice particles vanish and brand new water particles appear in the puddle',
        'The particles get smaller, which is why the ice shrinks',
        'The particles split in half, so the water has twice as many particles as the ice',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'scc-mis-different-substance',
    },
    {
      id: 'scc-q10',
      type: 'spot-misconception',
      stem: 'Sophie says: "I dropped a sugar cube into my tea and it melted away."',
      tier: 'confident',
      statements: [
        {
          text: 'Sophie is right. The cube turned into liquid, so it must have melted.',
          isMisconception: true,
        },
        {
          text: 'Sophie is wrong. The sugar particles spread out into the gaps between the water particles, so the sugar dissolved rather than melted.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'scc-mis-melt-dissolve',
    },
    {
      id: 'scc-q11',
      type: 'multiple-choice',
      stem: 'A block of ice at 0 C is heated steadily. While the ice is melting, what does the temperature reading on a thermometer in the ice show?',
      tier: 'confident',
      options: [
        'The temperature climbs steadily as more energy is added',
        'The temperature drops below 0 C while the ice melts',
        'The temperature jumps straight to 100 C, ready for boiling',
        'The temperature stays at 0 C until all the ice has melted',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'scc-mis-plateau',
    },
    {
      id: 'scc-q12',
      type: 'labelled-image',
      stem: 'Drag the right name onto each arrow on the state change cycle.',
      tier: 'confident',
      viewBox: '0 0 320 200',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><rect x="0" y="0" width="320" height="200" fill="#F8FAFC"/><g><rect x="20" y="100" width="60" height="60" rx="4" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="1.2"/><text x="50" y="135" text-anchor="middle" font-size="11" font-weight="600" fill="#1E3A8A">SOLID</text></g><g><rect x="130" y="100" width="60" height="60" rx="4" fill="#BBF7D0" stroke="#14532D" stroke-width="1.2"/><text x="160" y="135" text-anchor="middle" font-size="11" font-weight="600" fill="#14532D">LIQUID</text></g><g><rect x="240" y="100" width="60" height="60" rx="4" fill="#E9D5FF" stroke="#581C87" stroke-width="1.2"/><text x="270" y="135" text-anchor="middle" font-size="11" font-weight="600" fill="#581C87">GAS</text></g><g stroke="#475569" stroke-width="1.2" fill="none"><path d="M 80 115 Q 105 95 130 115" marker-end="url(#a)"/><path d="M 130 145 Q 105 165 80 145" marker-end="url(#a)"/><path d="M 190 115 Q 215 95 240 115" marker-end="url(#a)"/><path d="M 240 145 Q 215 165 190 145" marker-end="url(#a)"/></g><defs><marker id="a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#475569"/></marker></defs></svg>',
      hotspots: [
        { id: 'scc-q12-h1', x: 105, y: 95, correctLabel: 'Melting' },
        { id: 'scc-q12-h2', x: 105, y: 168, correctLabel: 'Freezing' },
        { id: 'scc-q12-h3', x: 215, y: 95, correctLabel: 'Boiling' },
        { id: 'scc-q12-h4', x: 215, y: 168, correctLabel: 'Condensing' },
      ],
      labels: ['Melting', 'Freezing', 'Boiling', 'Condensing', 'Dissolving', 'Sublimation'],
      xpValue: 20,
    },
    {
      id: 'scc-q13',
      type: 'multiple-choice',
      stem: 'A small puddle of rainwater on a sunny patio is gone by tea time, even though the air outside never reached 100 C. What state change has happened?',
      tier: 'confident',
      options: [
        'Boiling, because all changes from liquid to gas are called boiling',
        'Sublimation, because the water went straight into the air',
        'Evaporation, because liquid water turned into water vapour at the surface',
        'Condensing, because the puddle disappeared into the warm air',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'scc-mis-evap-only-boil',
    },
    {
      id: 'scc-q14',
      type: 'multiple-choice',
      stem: 'When a kettle is boiling vigorously, what are the bubbles inside the water made of?',
      tier: 'confident',
      options: [
        'Air that has escaped from inside the kettle',
        'Hydrogen gas, broken off from the water',
        'Oxygen pulled out of the water',
        'Water vapour, which is water itself in the gas state',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'scc-mis-bubbles-air',
    },
    {
      id: 'scc-q15',
      type: 'numeric-entry',
      stem: 'An ice cube tray holds 240 g of water at room temperature. The tray is placed in a freezer until every cube is fully solid. What is the total mass of ice in grams?',
      tier: 'confident',
      correctAnswer: 240,
      unit: 'g',
      xpValue: 15,
      hint: 'Freezing changes the arrangement of the particles, but not how many of them there are.',
      misconceptionId: 'scc-mis-mass-disappears',
    },
    {
      id: 'scc-q16',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: A pupil heats a block of pure ice at a steady rate and plots temperature against time. Between minute 4 and minute 9 the line goes flat at 0 C, even though the heater keeps going. Use the particle model to explain the flat section.',
      tier: 'confident',
      steps: [
        'While the line is flat, the substance in the beaker is changing from solid ice into liquid water.',
        'A change from solid to liquid needs energy to break the strong forces that hold the particles in the grid.',
        null,
        'Only after every particle has broken out of the grid does the temperature start to rise again, because the energy then goes into making the liquid water hotter.',
      ],
      missingStepIndex: 2,
      correctStep:
        'During the flat section, all the energy from the heater goes into breaking those forces, so none of it is left to raise the temperature.',
      xpValue: 20,
      misconceptionId: 'scc-mis-plateau',
    },
    {
      id: 'scc-q17',
      type: 'multiple-choice',
      stem: 'On a frosty November morning, Liam notices a thin film of water on the outside of a milk bottle that has just come out of the doorstep delivery into a warm hallway. The bottle was dry when it was delivered. Where did the water come from?',
      tier: 'challenge',
      options: [
        'Water leaked through the glass from the milk inside',
        'Water vapour in the warm hallway air condensed onto the cold glass and formed liquid water',
        'The milk inside boiled gently and pushed water out through the lid',
        'The cold glass made oxygen from the air turn into water',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'scc-mis-condensation-glass',
    },
    {
      id: 'scc-q18',
      type: 'data-extraction',
      stem: 'Use the table of temperature against time to read off the melting point of substance X.',
      tier: 'challenge',
      dataSource:
        'A pupil heats a solid called substance X at a steady rate. Time and temperature readings: 0 minutes 25 C; 2 minutes 50 C; 4 minutes 80 C; 6 minutes 80 C; 8 minutes 80 C; 10 minutes 80 C; 12 minutes 110 C.',
      correctAnswer: '80',
      xpValue: 25,
      hint: 'The melting point is the temperature where the readings stop rising for a while.',
    },
    {
      id: 'scc-q19',
      type: 'numeric-entry',
      stem: 'A 600 g snowball is brought inside in Sevenoaks and placed in a tray. Within an hour it has fully melted, and a few hours later all of the water has dried out of the tray as water vapour. What total mass of water vapour, in grams, has gone into the kitchen air?',
      tier: 'challenge',
      correctAnswer: 600,
      unit: 'g',
      xpValue: 25,
      hint: 'Track the mass step by step: snow to water, then water to vapour. Each step keeps the mass the same.',
      misconceptionId: 'scc-mis-mass-disappears',
    },
    {
      id: 'scc-q20',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: When 1 g of liquid water boils on a hob, the water turns into a much larger volume of steam that fills the kitchen. Use the particle model to explain the change.',
      tier: 'challenge',
      steps: [
        'In liquid water at the start, the particles are touching each other with only tiny gaps in between.',
        'On the hob, the water reaches its boiling point and the heater keeps adding energy to the particles.',
        null,
        'The freed particles spread out into the kitchen air, with much larger gaps between them, which is why the steam takes up far more space than the original liquid.',
      ],
      missingStepIndex: 2,
      correctStep:
        'At the boiling point the particles gain enough energy to break away from their neighbours and turn into a gas.',
      xpValue: 25,
    },
    {
      id: 'scc-q21',
      type: 'multiple-choice',
      stem: 'Aisha and Liam each pour a hot cup of tea in Manchester. Aisha drops in a 12 g sugar cube and stirs until the cube has gone. Liam drops in a 12 g cube of solid butter and stirs until the cube has gone. Which choice describes both changes correctly?',
      tier: 'challenge',
      options: [
        'Both have melted into the tea, because both cubes have turned into liquid',
        'Both have dissolved into the tea, because both cubes have spread between the water particles',
        'Aisha has dissolved her sugar; Liam has melted his butter into a liquid layer on top',
        'Neither has changed state, because the tea is below 100 C',
      ],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'scc-mis-melt-dissolve',
    },
  ],
  misconceptions: [
    // Source: Driver R., Squires A., Rushworth P., Wood-Robinson V. (1994), "Making Sense of Secondary Science: Research into Children's Ideas", Routledge, pages on dissolving and changes of state. Reinforced by Best Evidence Science Teaching (BEST), STEM Learning / UCL, "Particle theory of matter" diagnostic question set, where Year 7 learners commonly say sugar "melts" rather than "dissolves" in water.
    {
      id: 'scc-mis-melt-dissolve',
      description:
        'When a solid like sugar or salt mixes into water and the lumps disappear, the solid has melted.',
      triggerAnswer: 'melt-dissolve',
      correction:
        'In fact the solid has dissolved, not melted. Melting is a change of state from solid to liquid by gaining energy. Dissolving is the solid mixing into another substance.',
      reExplanation:
        'A sugar cube in tea is a clear test. The tea is below 100 C and the sugar would only melt at over 180 C, far hotter than any drink. The sugar particles are not breaking out of their own grid because of heat. Instead, the water particles surround the cube and pull the sugar particles into the gaps between them. Two kinds of particle end up mixed.',
    },
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education (https://edu.rsc.org/particle-diagrams/students-ideas-about-the-particulate-nature-of-matter-beyond-appearances/4017763.article): "Asked what is in the bubbles in boiling water, students often say air, oxygen or hydrogen rather than water vapour."
    {
      id: 'scc-mis-bubbles-air',
      description:
        'The bubbles inside boiling water are made of air, or of oxygen and hydrogen split off from the water.',
      triggerAnswer: 'bubbles-air',
      correction:
        'In fact the bubbles are water vapour. They are water itself in the gas state, formed as liquid water reaches its boiling point.',
      reExplanation:
        'When water hits its boiling point, particles deep inside the liquid gain enough energy to break away from their neighbours and form a gas right there in the pan. This gas is just more water particles, so it is called water vapour. As each pocket of vapour grows it floats up and you see it as a bubble.',
    },
    // Source: Matthew Parks, "Teaching conservation of mass at 14-16", RSC Education CPD article (2024-12-05). The article frames the canonical demonstration of measuring an ice cube's mass before and after melting as a fix for the misconception that mass is lost when a substance changes state.
    {
      id: 'scc-mis-mass-disappears',
      description:
        'A substance loses mass when it boils or evaporates because the gas weighs less than the liquid.',
      triggerAnswer: 'mass-disappears',
      correction:
        'In fact mass is conserved. The same particles are present before and after a state change, so the total mass stays the same, even when the substance turns into a gas.',
      reExplanation:
        'Place a sealed flask of water on a balance and heat it until every drop has turned to vapour. The reading on the balance does not change. The water particles are still there, just spread out as a gas. A puddle that dries up has the same total mass too, but the vapour has spread into the room rather than staying in one place.',
    },
    // Source: Vanessa Kind, "Students' ideas about changes of state", RSC Education / "Beyond Appearances" study set: students often expect a thermometer reading to keep climbing through a state change, rather than holding steady on the plateau. The same heating-curve plateau misconception is documented in BEST diagnostic question sets at KS3 and early KS4.
    {
      id: 'scc-mis-plateau',
      description:
        'The temperature of a substance keeps rising while it is melting or boiling, just as it does when only the liquid or solid is being heated.',
      triggerAnswer: 'plateau',
      correction:
        'In fact the temperature pauses at the melting point or boiling point. The energy from the heater goes into changing the state of the particles, not into making them faster.',
      reExplanation:
        'On a heating curve for water, you see the temperature climb up to 0 C, hold flat while the ice melts, climb again up to 100 C, then hold flat while the water boils. Each flat section is the energy being used to break the forces between particles. Only when every particle has changed state does the temperature start to rise again.',
    },
    // Source: Bar V (1989), "Children's views about the water cycle", Science Education 73(4): 481-500, summarised in Driver R., Squires A., Rushworth P., Wood-Robinson V. (1994), "Making Sense of Secondary Science", Routledge: many primary and lower-secondary learners think evaporation only happens when a substance reaches its boiling point.
    {
      id: 'scc-mis-evap-only-boil',
      description:
        'Liquid water can only turn into a gas when it is boiling at 100 C. At any cooler temperature it just stays liquid.',
      triggerAnswer: 'evap-only-boil',
      correction:
        'In fact water particles at the surface can break away as a gas at any temperature. This is called evaporation, and it is why a puddle dries up on a warm day.',
      reExplanation:
        'In any liquid, some particles always have more energy than others. The lucky few near the surface have enough energy to break away from their neighbours, even well below 100 C. The hotter the liquid, and the bigger the surface, the faster this happens. Boiling is the special case where every part of the liquid can do this at once.',
    },
    // Source: Bar V (1989), "Children's views about the water cycle", cited in Driver R. et al. (1994), "Making Sense of Secondary Science", Routledge: many learners explain water on the outside of a cold glass by saying it has come through the glass from inside. The same finding is reported in Bar and Galili (1994), "Stages of children's views about evaporation".
    {
      id: 'scc-mis-condensation-glass',
      description:
        'Water that appears on the outside of a cold glass or window has leaked through from the inside.',
      triggerAnswer: 'condensation-glass',
      correction:
        'In fact the water comes from water vapour already in the air around the glass. The vapour cools on the cold surface and condenses there.',
      reExplanation:
        'The air in any room holds invisible water vapour. When the vapour touches a cold surface its particles slow down enough to clump back into liquid water. This is condensation. Glass is a solid barrier, so water cannot move through it from the milk or the cold drink inside. The droplets on the outside have been pulled out of the air around it.',
    },
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education: a recurring finding is that learners view ice, water and water vapour as three different substances rather than one substance in three states.
    {
      id: 'scc-mis-different-substance',
      description:
        'Ice, water and steam are three different substances, not three states of the same substance.',
      triggerAnswer: 'different-substance',
      correction:
        'In fact all three are made of the same water particles. Only the arrangement and the energy of those particles change between them.',
      reExplanation:
        'Picture a single water particle. In ice it sits in a fixed grid. In water it slides past its neighbours. In steam it flies far apart from them. The particle itself is the same in every case. This is why a sealed bottle of ice melts into the same mass of water, and the same particles can later turn back into ice if cooled again.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

