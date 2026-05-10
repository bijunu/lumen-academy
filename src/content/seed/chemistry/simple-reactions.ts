import type { SkillNode, Zone } from '@/types/content'

export const simpleReactionsZone: Zone = {
  id: 'chemistry-simple-reactions',
  name: 'Simple Reactions',
  realm: 'elementia',
  nodeIds: [
    'chemistry-simple-reactions-combustion',
    'chemistry-simple-reactions-acid-metal',
    'chemistry-simple-reactions-rusting',
  ],
}

export const combustion: SkillNode = {
  id: 'chemistry-simple-reactions-combustion',
  title: 'Combustion: The Fire Triangle',
  description:
    'Combustion is a reaction between a fuel and oxygen that releases heat and light (a flame). Three things must be there for a fire to keep going: fuel, oxygen, and heat. This is the fire triangle. Take any one away and the fire goes out. Examples: methane (natural gas) on a hob burns in oxygen to give carbon dioxide and water; magnesium ribbon burns in oxygen to give magnesium oxide. Mass is conserved when you count the gas products too.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-simple-reactions',
  zoneName: 'Simple Reactions',
  tier: 'core',
  prerequisites: ['chemistry-particle-model-states-of-matter'],
  curriculum: {
    ks3Objective:
      'Combustion, thermal decomposition, oxidation and displacement reactions; chemical reactions as the rearrangement of atoms; representing chemical reactions using formulae and using equations.',
    awardingBodies: {
      aqa: '4.5.1.1 Exothermic reactions including combustion; 4.9.1.1 Combustion of hydrocarbons (GCSE Chemistry 8462)',
      edexcel:
        'Topic 8 Acids and alkalis / Topic 4 Extracting metals; CC9 Calculations involving masses; combustion of fuels (GCSE Chemistry 1CH0)',
      ocr: 'C5.2 Energetics; C7.2 Combustion of hydrocarbons (GCSE Chemistry A J248 Gateway)',
    },
  },
  scenes: [
    {
      id: 'comb-scene-triangle',
      title: 'The Fire Triangle: Three Things a Fire Needs',
      type: 'labelled-diagram',
      instructions:
        'Click each side of the triangle to see what role it plays in a fire and what happens if you take it away.',
      data: {
        viewBox: '0 0 320 240',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240"><rect x="0" y="0" width="320" height="240" fill="#FEF3C7"/><polygon points="160,40 60,200 260,200" fill="#FED7AA" stroke="#7C2D12" stroke-width="2"/><text x="160" y="130" text-anchor="middle" font-size="16" font-weight="700" fill="#7C2D12">FIRE</text><text x="160" y="150" text-anchor="middle" font-size="9" fill="#7C2D12">needs all three</text><text x="160" y="30" text-anchor="middle" font-size="11" font-weight="600" fill="#7C2D12">FUEL</text><text x="160" y="220" text-anchor="middle" font-size="9" fill="#7C2D12">e.g. methane, candle wax, wood, magnesium</text><g><text x="40" y="220" text-anchor="middle" font-size="11" font-weight="600" fill="#1E3A8A">OXYGEN</text><text x="40" y="232" text-anchor="middle" font-size="8" fill="#1E3A8A">from the air</text></g><g><text x="280" y="220" text-anchor="middle" font-size="11" font-weight="600" fill="#DC2626">HEAT</text><text x="280" y="232" text-anchor="middle" font-size="8" fill="#DC2626">a spark or flame</text></g><circle cx="160" cy="40" r="4" fill="#7C2D12"/><circle cx="60" cy="200" r="4" fill="#1E3A8A"/><circle cx="260" cy="200" r="4" fill="#DC2626"/></svg>',
        hotspots: [
          {
            id: 'comb-h-fuel',
            x: 50,
            y: 17,
            label: 'Fuel',
            description:
              'The thing that burns. In a UK kitchen the fuel is methane gas from the hob. In a Bonfire Night sparkler the fuel is magnesium powder. Without fuel there is nothing to burn.',
          },
          {
            id: 'comb-h-oxygen',
            x: 13,
            y: 83,
            label: 'Oxygen',
            description:
              'About one fifth of the air is oxygen. Combustion uses up oxygen. Smother a candle with a glass jar and the flame goes out within a few seconds because the oxygen runs out.',
          },
          {
            id: 'comb-h-heat',
            x: 87,
            y: 83,
            label: 'Heat',
            description:
              'A spark, a match flame or a glowing wire is needed to start a fire. Once the fire is going, the reaction itself releases enough heat to keep it going. A blown-out candle has fuel and oxygen, but no heat, so the wax will not light again on its own.',
          },
          {
            id: 'comb-h-fire',
            x: 50,
            y: 56,
            label: 'Take any one away and the fire goes out',
            description:
              'Removing any side of the triangle stops the fire. Fire blankets cut off oxygen, water cools the heat below the flame point, and turning off a gas tap removes the fuel.',
          },
        ],
      },
    },
    {
      id: 'comb-scene-methane',
      title: 'Methane Burning on a UK Gas Hob',
      type: 'labelled-diagram',
      instructions:
        'Click each label to read the word equation for the reaction on a UK gas hob.',
      data: {
        viewBox: '0 0 320 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#FEF3C7"/><rect x="20" y="60" width="50" height="40" rx="3" fill="#DBEAFE" stroke="#1E3A8A" stroke-width="1"/><text x="45" y="80" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">methane</text><text x="45" y="92" text-anchor="middle" font-size="9" fill="#1E3A8A">CH₄</text><text x="80" y="84" text-anchor="middle" font-size="14" font-weight="700" fill="#475569">+</text><rect x="90" y="60" width="50" height="40" rx="3" fill="#DBEAFE" stroke="#1E3A8A" stroke-width="1"/><text x="115" y="80" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">oxygen</text><text x="115" y="92" text-anchor="middle" font-size="9" fill="#1E3A8A">O₂ (from air)</text><text x="155" y="84" text-anchor="middle" font-size="16" font-weight="700" fill="#DC2626">→</text><rect x="170" y="60" width="55" height="40" rx="3" fill="#FECACA" stroke="#7C2D12" stroke-width="1"/><text x="197" y="80" text-anchor="middle" font-size="9" font-weight="600" fill="#7C2D12">carbon</text><text x="197" y="92" text-anchor="middle" font-size="9" fill="#7C2D12">dioxide CO₂</text><text x="235" y="84" text-anchor="middle" font-size="14" font-weight="700" fill="#475569">+</text><rect x="245" y="60" width="55" height="40" rx="3" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="1"/><text x="272" y="80" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">water</text><text x="272" y="92" text-anchor="middle" font-size="9" fill="#1E3A8A">H₂O</text><text x="160" y="135" text-anchor="middle" font-size="10" font-weight="600" fill="#7C2D12">methane + oxygen → carbon dioxide + water</text><text x="160" y="155" text-anchor="middle" font-size="9" fill="#7C2D12">(plus heat and light)</text><g><circle cx="80" cy="190" r="6" fill="#FB923C"/><circle cx="100" cy="190" r="8" fill="#F97316"/><circle cx="120" cy="190" r="6" fill="#FACC15"/><text x="160" y="195" text-anchor="middle" font-size="9" fill="#7C2D12">a blue gas hob flame on a UK kitchen hob</text></g></svg>',
        hotspots: [
          {
            id: 'comb-h-methane',
            x: 14,
            y: 36,
            label: 'Methane (CH₄)',
            description:
              'Methane is the main gas in the natural-gas supply piped into UK homes. The hob nozzle releases methane into the air.',
          },
          {
            id: 'comb-h-oxy-air',
            x: 36,
            y: 36,
            label: 'Oxygen from the air',
            description:
              'About one fifth of the air around the hob is oxygen. The flame draws this oxygen in to react with the methane.',
          },
          {
            id: 'comb-h-co2',
            x: 62,
            y: 36,
            label: 'Carbon dioxide (CO₂)',
            description:
              'Carbon dioxide is one of the two products. It is a colourless gas that rises from the flame.',
          },
          {
            id: 'comb-h-water-vapour',
            x: 85,
            y: 36,
            label: 'Water (H₂O)',
            description:
              'The other product is water, made as steam at hob temperatures. Run a cold spoon through a gas flame and you can see water droplets form.',
          },
          {
            id: 'comb-h-equation',
            x: 50,
            y: 65,
            label: 'Word equation',
            description:
              'methane + oxygen → carbon dioxide + water. Heat and light are released alongside, which is what makes the flame visible.',
          },
        ],
      },
    },
    {
      id: 'comb-scene-mass',
      title: 'Burning Does Not Destroy Mass',
      type: 'labelled-diagram',
      instructions:
        'Click each test tube to compare an open candle with a sealed jar candle on a balance.',
      data: {
        viewBox: '0 0 320 240',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240"><rect x="0" y="0" width="320" height="240" fill="#FEF3C7"/><g><rect x="20" y="40" width="120" height="170" rx="4" fill="#FFFFFF" stroke="#7C2D12" stroke-width="1"/><text x="80" y="60" text-anchor="middle" font-size="10" font-weight="600" fill="#7C2D12">OPEN CANDLE</text><text x="80" y="74" text-anchor="middle" font-size="8" fill="#7C2D12">in fresh air</text><rect x="70" y="100" width="20" height="50" fill="#FDE047" stroke="#7C2D12" stroke-width="0.6"/><polygon points="80,80 70,100 90,100" fill="#FB923C"/><text x="80" y="170" text-anchor="middle" font-size="8" fill="#7C2D12">balance reading drops</text><text x="80" y="184" text-anchor="middle" font-size="8" fill="#7C2D12">CO₂ + water vapour</text><text x="80" y="196" text-anchor="middle" font-size="8" fill="#7C2D12">leave into the room</text></g><g><rect x="180" y="40" width="120" height="170" rx="4" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="1"/><text x="240" y="60" text-anchor="middle" font-size="10" font-weight="600" fill="#1E3A8A">SEALED JAR CANDLE</text><text x="240" y="74" text-anchor="middle" font-size="8" fill="#1E3A8A">closed lid, no escape</text><rect x="210" y="84" width="60" height="80" rx="2" fill="none" stroke="#1E3A8A" stroke-width="1.2"/><rect x="230" y="120" width="20" height="40" fill="#FDE047" stroke="#1E3A8A" stroke-width="0.6"/><polygon points="240,100 230,120 250,120" fill="#FB923C"/><text x="240" y="180" text-anchor="middle" font-size="8" fill="#1E3A8A">balance reading stays</text><text x="240" y="194" text-anchor="middle" font-size="8" fill="#1E3A8A">the same: gas products</text><text x="240" y="206" text-anchor="middle" font-size="8" fill="#1E3A8A">stay inside the jar</text></g><text x="160" y="225" text-anchor="middle" font-size="9" font-weight="600" fill="#7C2D12">Mass is conserved when you count the gas products too.</text></svg>',
        hotspots: [
          {
            id: 'comb-h-open',
            x: 25,
            y: 35,
            label: 'Open candle: balance drops',
            description:
              'A candle on a kitchen balance loses reading as it burns. Carbon dioxide and water vapour rise into the room, so the balance only sees the wax that is left.',
          },
          {
            id: 'comb-h-sealed',
            x: 75,
            y: 35,
            label: 'Sealed jar candle: balance stays',
            description:
              'A small candle sealed inside a jar reads the same mass as it burns. The carbon dioxide and water vapour are trapped inside the jar; nothing has been destroyed.',
          },
          {
            id: 'comb-h-rule',
            x: 50,
            y: 92,
            label: 'Mass is conserved',
            description:
              'Burning never destroys atoms; it only rearranges them. The wax atoms come out as carbon dioxide and water. If you count the gases too, mass before equals mass after.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'comb-worked-1',
      title: 'Writing the word equation for a UK gas hob flame',
      steps: [
        {
          explanation:
            'Question: A UK gas hob burns natural gas (methane) in air. Write the word equation for what happens when the hob is lit.',
        },
        {
          explanation:
            'Step 1: name the fuel. Natural gas is methane (CH₄). The fuel goes on the left of the arrow.',
        },
        {
          explanation:
            'Step 2: name the other reactant. Combustion always uses oxygen from the air. Oxygen also goes on the left.',
          maths: 'methane + oxygen →',
        },
        {
          explanation:
            'Step 3: name the products. When a hydrocarbon fuel burns in plenty of oxygen, the products are carbon dioxide and water.',
        },
        {
          explanation: 'Step 4: write the full word equation.',
          maths: 'methane + oxygen → carbon dioxide + water',
        },
        {
          explanation:
            'So the answer is: methane + oxygen → carbon dioxide + water. The flame also releases heat and light, which is why the hob is hot and visible.',
        },
      ],
    },
    {
      id: 'comb-worked-2',
      title: 'Burning magnesium ribbon at Bonfire Night',
      steps: [
        {
          explanation:
            'Question: A teacher holds a strip of magnesium ribbon (the fuel inside a Bonfire Night sparkler) in tongs and lights it with a Bunsen flame. The ribbon burns with a bright white light. What is the word equation, and is mass conserved?',
        },
        {
          explanation:
            'Step 1: name the fuel and the other reactant. The fuel is magnesium. The other reactant is oxygen in the air.',
        },
        {
          explanation:
            'Step 2: name the product. Magnesium reacts with oxygen to form magnesium oxide, a white powder.',
          maths: 'magnesium + oxygen → magnesium oxide',
        },
        {
          explanation: '',
        },
        {
          explanation:
            'Step 4: state the answer. The word equation is magnesium + oxygen → magnesium oxide. Mass is conserved because every magnesium atom and every oxygen atom is still there in the white powder.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'comb-q1',
      type: 'multiple-choice',
      stem: 'Which three things are needed for a fire to keep going (the fire triangle)?',
      tier: 'core',
      options: [
        'Fuel, water, light',
        'Oxygen, salt, electricity',
        'Wood, paper, paraffin',
        'Fuel, oxygen, heat',
      ],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Look at the labels on the three corners of the fire triangle.',
    },
    {
      id: 'comb-q2',
      type: 'multiple-choice',
      stem: 'What is the word equation for natural gas (methane) burning on a UK kitchen hob in plenty of oxygen?',
      tier: 'core',
      options: [
        'methane + oxygen → carbon dioxide + water',
        'methane → oxygen + heat',
        'methane + water → oxygen + carbon',
        'methane + carbon dioxide → oxygen + water',
      ],
      correctIndex: 0,
      xpValue: 10,
    },
    {
      id: 'comb-q3',
      type: 'multiple-choice',
      stem: 'A pupil holds magnesium ribbon in tongs and burns it in a Bunsen flame. The ribbon burns with a bright white light. What is the product?',
      tier: 'confident',
      options: [
        'Magnesium hydroxide',
        'Magnesium chloride',
        'Magnesium oxide',
        'Magnesium sulfate',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'comb-mis-magnesium-product',
    },
    {
      id: 'comb-q4',
      type: 'multiple-choice',
      stem: 'A small candle on a kitchen balance starts at 30 g. After burning for 10 minutes the balance reads 27 g. Has any mass been destroyed?',
      tier: 'confident',
      options: [
        'Yes, 3 g of wax has been destroyed and is gone forever',
        'No, the 3 g has left as carbon dioxide and water vapour into the air',
        'Yes, all matter is destroyed when it burns',
        'No, the balance is broken',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'comb-mis-burning-destroys-mass',
    },
    {
      id: 'comb-q6',
      type: 'multiple-choice',
      stem: 'A pupil drops a fire blanket over a chip-pan fire in a Manchester kitchen. Which side of the fire triangle is the blanket removing?',
      tier: 'confident',
      options: [
        'Fuel',
        'Heat',
        'Oxygen',
        'It removes all three at the same time',
      ],
      correctIndex: 2,
      xpValue: 15,
      hint: 'A fire blanket sits over the top of the pan and stops fresh air reaching the flame.',
      misconceptionId: 'comb-mis-blanket-removes-fuel',
    },
    {
      id: 'comb-q7',
      type: 'multiple-choice',
      stem: 'Which of these is the BEST description of combustion at Year 7?',
      tier: 'core',
      options: [
        'A reaction between a fuel and oxygen that releases heat and light',
        'A reaction in which water is split into hydrogen and oxygen',
        'Anything that gets hot when you stir it',
        'A reaction between two metals to give a salt',
      ],
      correctIndex: 0,
      xpValue: 10,
    },
    {
      id: 'comb-q8',
      type: 'multiple-choice',
      stem: 'A school technician needs to put out a small Bunsen-burner fire that has caught a paper towel. They turn off the gas tap. Which side of the fire triangle have they removed?',
      tier: 'core',
      options: ['Fuel', 'Oxygen', 'Heat', 'Water'],
      correctIndex: 0,
      xpValue: 10,
    },
    {
      id: 'comb-q9',
      type: 'multiple-choice',
      stem: 'A pupil in Sevenoaks lights a sparkler outside on Bonfire Night. The sparkler fuel is magnesium powder mixed in a binder. The pupil claims: "The white smoke from the sparkler is just the magnesium evaporating; no new substance is made." What is the BEST response?',
      tier: 'challenge',
      options: [
        'The pupil is right; sparklers just give off magnesium dust',
        'The white smoke is magnesium oxide, a brand new substance made from magnesium reacting with oxygen in the air',
        'The white smoke is steam from water in the air',
        'Sparklers do not burn at all; the white light is electrical',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'comb-mis-burning-is-evaporating',
    },
    {
      id: 'comb-q10',
      type: 'multiple-choice',
      stem: 'A pupil reads on a packet of sausages: "1 kg of natural gas burned on a hob makes about 2.75 kg of carbon dioxide." They are confused: how can the products weigh MORE than the fuel?',
      tier: 'challenge',
      options: [
        'The packet is wrong; products always weigh less than reactants',
        'The hob added mass from the metal',
        'Oxygen from the air also reacts with the methane, so its mass is included in the products',
        'Heat has mass and is added to the carbon dioxide',
      ],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'comb-mis-only-fuel-counts',
    },
    {
      id: 'comb-q11',
      type: 'numeric-entry',
      stem: 'A sealed jar containing a small lit candle weighs 120 g at the start. After the candle has burned and gone out, the sealed jar still weighs the same as before. What is the new mass in grams?',
      tier: 'core',
      correctAnswer: 120,
      unit: 'g',
      xpValue: 10,
      hint: 'A sealed jar traps the gas products. Mass before equals mass after.',
    },
    {
      id: 'comb-q12',
      type: 'numeric-entry',
      stem: 'About what percentage of normal UK air is oxygen, to the nearest whole percent?',
      tier: 'core',
      correctAnswer: 21,
      unit: '%',
      tolerance: 1,
      xpValue: 10,
      hint: 'Air is about one fifth oxygen.',
    },
    {
      id: 'comb-q13',
      type: 'numeric-entry',
      stem: 'A 4 g strip of magnesium ribbon is burned completely in air. It reacts with 2.6 g of oxygen from the air to form magnesium oxide. What is the mass of magnesium oxide formed, in grams?',
      tier: 'confident',
      correctAnswer: 6.6,
      unit: 'g',
      xpValue: 15,
      hint: 'Mass is conserved. Add the mass of magnesium and the mass of oxygen.',
    },
    {
      id: 'comb-q14',
      type: 'numeric-entry',
      stem: 'A school technician in York burns 2 g of pure carbon (charcoal) in a sealed steel chamber. The carbon reacts with all the oxygen inside, using up exactly 5.3 g of oxygen, to make carbon dioxide. What is the mass of carbon dioxide produced, in grams?',
      tier: 'challenge',
      correctAnswer: 7.3,
      unit: 'g',
      xpValue: 25,
      hint: 'mass of carbon + mass of oxygen used = mass of CO₂. Add them.',
    },
    {
      id: 'comb-q15',
      type: 'drag-order',
      stem: 'A pupil writes a wobbly account of the gas-hob reaction. Drag these phrases to put them in the correct order to read as the standard word equation, left to right.',
      tier: 'confident',
      items: [
        'carbon dioxide',
        'methane',
        '+ water',
        '+ oxygen',
        '→',
      ],
      correctOrder: [1, 3, 4, 0, 2],
      xpValue: 20,
    },
    {
      id: 'comb-q16',
      type: 'spot-misconception',
      stem: 'Aisha says: "When a candle burns and the wax disappears, the wax has been destroyed; mass cannot be conserved when something burns away." Is Aisha right?',
      tier: 'core',
      statements: [
        {
          text: 'Aisha is right. Burning destroys mass; the wax simply ceases to exist.',
          isMisconception: true,
        },
        {
          text: 'Aisha is wrong. The wax atoms have not been destroyed; they have left the candle as carbon dioxide and water vapour. If you trap them in a sealed jar the balance reading does not change. Mass is conserved when you count the gases too.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'comb-mis-burning-destroys-mass',
    },
    {
      id: 'comb-q17',
      type: 'spot-misconception',
      stem: 'Olu says: "If a fire has plenty of fuel and plenty of oxygen, it will always keep burning forever." Is Olu right?',
      tier: 'confident',
      statements: [
        {
          text: 'Olu is right. As long as there is fuel and oxygen, a fire will keep going by itself.',
          isMisconception: true,
        },
        {
          text: 'Olu has missed the third side of the triangle. A fire also needs heat to keep going. Cool a fire below the flame point with water and it goes out, even if fuel and oxygen are still there.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'comb-mis-only-two-sides',
    },
    {
      id: 'comb-q18',
      type: 'free-text',
      stem: 'In 2 to 3 sentences, explain why the balance reading drops as an open candle burns, but stays the same when the same candle is sealed inside a jar. Use the word "conserved" in your answer.',
      tier: 'confident',
      sampleAnswer:
        'When a candle burns it makes carbon dioxide and water vapour. With an open candle these gases escape into the room, so the balance only sees the wax that is left and the reading drops. With a sealed jar the gases are trapped inside, so the balance still sees them; the total mass is conserved.',
      keywords: ['conserved', 'gas', 'sealed', 'escape'],
      xpValue: 20,
    },
    {
      id: 'comb-q19',
      type: 'missing-step',
      stem: 'Fill in the missing step in this account of the magnesium combustion experiment.',
      tier: 'confident',
      steps: [
        'A pupil holds a strip of magnesium ribbon in tongs and lowers it into a Bunsen flame',
        'The ribbon catches fire and burns with a bright white light',
        null,
        'A white powder is left in the tongs',
        'The pupil writes: magnesium + oxygen → magnesium oxide',
      ],
      missingStepIndex: 2,
      correctStep:
        'The magnesium reacts with oxygen from the air to make a new substance',
      xpValue: 20,
    },
    {
      id: 'comb-q20',
      type: 'labelled-image',
      stem: 'Drag each label onto the correct corner of the fire triangle.',
      tier: 'core',
      viewBox: '0 0 320 220',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#F8FAFC"/><polygon points="160,30 60,190 260,190" fill="#FED7AA" stroke="#7C2D12" stroke-width="2"/><text x="160" y="120" text-anchor="middle" font-size="14" font-weight="700" fill="#7C2D12">FIRE</text><circle cx="160" cy="30" r="6" fill="#FB923C" stroke="#7C2D12"/><circle cx="60" cy="190" r="6" fill="#3B82F6" stroke="#1E3A8A"/><circle cx="260" cy="190" r="6" fill="#DC2626" stroke="#7C2D12"/></svg>',
      hotspots: [
        { id: 'comb-q20-h-top', x: 50, y: 14, correctLabel: 'Fuel' },
        { id: 'comb-q20-h-left', x: 19, y: 86, correctLabel: 'Oxygen' },
        { id: 'comb-q20-h-right', x: 81, y: 86, correctLabel: 'Heat' },
      ],
      labels: ['Fuel', 'Oxygen', 'Heat', 'Water', 'Salt'],
      xpValue: 20,
    },
    {
      id: 'comb-q21',
      type: 'multiple-choice',
      stem: 'A teacher in Tunbridge Wells lights a tea-light, then places a tall glass cup over it. After a few seconds the flame goes out. Which side of the fire triangle has been removed first?',
      tier: 'challenge',
      options: [
        'Fuel, because the wax has run out',
        'Heat, because the cup is cold',
        'All three at the same time',
        'Oxygen, because the cup traps a small amount of air and the candle uses it up',
      ],
      correctIndex: 3,
      xpValue: 25,
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Chemistry examiner report June 2019 (8462/1F), Q05 on conservation of mass: candidates "wrote that mass had been destroyed when a candle or fuel burned, missing that gas products carry the missing mass". Reinforced by CGP KS3 Chemistry Study Book p.45 Common Mistake box on combustion and conservation of mass.
    {
      id: 'comb-mis-burning-destroys-mass',
      description:
        'When something burns the missing mass has been destroyed; mass is not conserved during combustion.',
      triggerAnswer: 'burning-destroys-mass',
      correction:
        'In fact mass is conserved during combustion. The "missing" mass has left as gas products like carbon dioxide and water vapour; if you trap them in a sealed jar the balance reading stays the same.',
      reExplanation:
        'Picture a candle on a kitchen balance. As it burns, the reading drops because carbon dioxide and water vapour float off into the room. Now picture the same candle sealed in a jar. The reading does not change, because the gas products stay trapped inside. Atoms are not destroyed when fuels burn; they leave as gases.',
    },
    // Source: Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question sets on combustion: a recurring Year 7 expectation is that the mass of products in a burning reaction equals the mass of fuel only, ignoring oxygen. Reinforced by RSC Education article "Common student misconceptions about chemical reactions" (rsc.org/education, accessed 2026-05-10).
    {
      id: 'comb-mis-only-fuel-counts',
      description:
        'In a combustion reaction, only the fuel counts as a reactant; oxygen is "just air" and does not add mass to the products.',
      triggerAnswer: 'only-fuel-counts',
      correction:
        'In fact oxygen is a real reactant. Its mass adds to the mass of the products, which is why combustion products often weigh more than the fuel alone.',
      reExplanation:
        'Burning 12 g of pure carbon uses up 32 g of oxygen from the air to make 44 g of carbon dioxide. The CO₂ is heavier than the carbon because the oxygen mass has joined in. Air is not nothing; about a fifth of every breath we take is oxygen, and combustion uses it up.',
    },
    // Source: CGP KS3 Chemistry Study Book p.46 Common Mistake box on combustion: "Some students think that burning is the same as evaporating, and that no new substance is made". Reinforced by Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education (2004 update).
    {
      id: 'comb-mis-burning-is-evaporating',
      description:
        'Burning is the same as evaporating; nothing new is made when something burns, the substance just turns into a gas.',
      triggerAnswer: 'burning-is-evaporating',
      correction:
        'In fact burning is a chemical reaction with oxygen. New substances are made: carbon dioxide and water from a hob flame, magnesium oxide from a sparkler.',
      reExplanation:
        'Evaporating water gives water vapour, which is still water. Burning methane gives carbon dioxide and water, which are completely different substances from the methane that started. The flame is the visible sign that a chemical reaction is happening, not just a phase change. The white smoke from a sparkler is brand new magnesium oxide, not magnesium dust.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2018 (1CH0/1F), Q08 on combustion: candidates "named magnesium hydroxide or magnesium chloride as the product of burning magnesium ribbon, missing that combustion in air gives the oxide". Reinforced by CLEAPSS PS56-22 (Burning magnesium ribbon: practical guide for school chemistry) and CGP KS3 Chemistry Study Book p.46.
    {
      id: 'comb-mis-magnesium-product',
      description:
        'The product of burning magnesium ribbon in air is magnesium hydroxide or magnesium chloride.',
      triggerAnswer: 'magnesium-wrong-product',
      correction:
        'In fact the product of burning magnesium in air is magnesium oxide, a white powder. Magnesium reacts with oxygen, not with water or chloride, in this reaction.',
      reExplanation:
        'Combustion in plain air pairs the fuel with oxygen, so the product carries the word "oxide". Magnesium plus oxygen gives magnesium oxide. Magnesium hydroxide forms when magnesium oxide is added to water; magnesium chloride forms when magnesium reacts with hydrochloric acid. Different reaction partner, different product.',
    },
    // Source: BEST UCL/STEM Learning diagnostic question sets on combustion: a recurring Year 7 expectation is that "fuel and oxygen alone are enough" or "you only need a spark once". Reinforced by HSE School Chemistry Guidance L96 on Bunsen-burner safety: every fire-triangle teaching example must require all three sides simultaneously.
    {
      id: 'comb-mis-only-two-sides',
      description:
        'A fire only needs two sides of the triangle: as long as there is fuel and oxygen, a fire will keep burning forever.',
      triggerAnswer: 'only-two-sides',
      correction:
        'In fact a fire needs all three sides: fuel, oxygen, and heat. Cool a fire below the flame point with water and it goes out, even with fuel and oxygen still there.',
      reExplanation:
        'A blown-out candle in normal air has plenty of wax (fuel) and plenty of oxygen, but the wick is no longer hot, so the fire is out. To restart it you need to add heat from a match. The same is true for a kitchen pan that has been splashed with water: removing heat alone is enough to put it out.',
    },
    // Source: AQA GCSE Combined Science Trilogy examiner report June 2022 (8464/C/1F), Q06 on extinguishing fires: candidates "named fuel as the only target a fire blanket removes, missing that the blanket cuts off oxygen". Reinforced by CLEAPSS Science Newsletter Spring 2024, p.4: chip-pan fire blanket guidance for UK schools.
    {
      id: 'comb-mis-blanket-removes-fuel',
      description:
        'A fire blanket puts out a fire by smothering the fuel; it removes the fuel side of the fire triangle.',
      triggerAnswer: 'blanket-removes-fuel',
      correction:
        'In fact a fire blanket removes the OXYGEN side of the triangle. It sits over the top of the pan and stops fresh air reaching the flame. The fuel is still in the pan.',
      reExplanation:
        'The fuel in a chip-pan fire is the hot oil; it is still there under the blanket. What has changed is the air supply: the blanket cuts off oxygen, so the reaction has nothing to react with. The same idea explains why a glass cup over a tea-light puts the flame out: the small amount of oxygen trapped under the cup gets used up.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
