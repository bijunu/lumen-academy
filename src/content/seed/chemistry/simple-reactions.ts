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
      stem: 'Aisha says: "When a candle burns and the wax disappears, the wax has been destroyed; mass cannot be conserved when something burns away."',
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
      stem: 'Olu says: "If a fire has plenty of fuel and plenty of oxygen, it will always keep burning forever."',
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

export const acidMetal: SkillNode = {
  id: 'chemistry-simple-reactions-acid-metal',
  title: 'Acid plus Metal: Salt and Hydrogen',
  description:
    'When an acid reacts with a metal, the products are a salt and hydrogen gas. The general word equation is: metal + acid → salt + hydrogen. Classic UK lab examples: zinc + hydrochloric acid → zinc chloride + hydrogen; magnesium + sulfuric acid → magnesium sulfate + hydrogen. The hydrogen is tested with a lit splint: a "squeaky pop" confirms hydrogen. A light reactivity touch only at Y7: of Mg, Zn and Fe, magnesium fizzes the fastest in dilute acid; iron is the slowest. Concentration changes the SPEED of the reaction but not the products.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-simple-reactions',
  zoneName: 'Simple Reactions',
  tier: 'confident',
  prerequisites: ['chemistry-simple-reactions-combustion', 'chemistry-acids-alkalis-common'],
  curriculum: {
    ks3Objective:
      'Combustion, thermal decomposition, oxidation and displacement reactions; chemical reactions as the rearrangement of atoms; representing chemical reactions using formulae and using equations.',
    awardingBodies: {
      aqa: '4.4.2.3 Reactions of acids with metals; 4.4.1.1 Reactivity of metals (GCSE Chemistry 8462)',
      edexcel:
        'Topic 4 Extracting metals; CC9 Reactivity of metals; Topic 8.4 Reactions of acids with metals (GCSE Chemistry 1CH0)',
      ocr: 'C3.2 Reactions of acids; C5.1 The reactivity series (GCSE Chemistry A J248 Gateway)',
    },
  },
  scenes: [
    {
      id: 'am-scene-equation',
      title: 'The General Equation: Metal plus Acid',
      type: 'labelled-diagram',
      instructions:
        'Click each label to read the general word equation for a metal reacting with an acid.',
      data: {
        viewBox: '0 0 320 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#FEF3C7"/><rect x="20" y="60" width="55" height="40" rx="3" fill="#E5E7EB" stroke="#475569" stroke-width="1"/><text x="47" y="80" text-anchor="middle" font-size="10" font-weight="600" fill="#1F2937">metal</text><text x="47" y="92" text-anchor="middle" font-size="8" fill="#1F2937">e.g. Zn, Mg</text><text x="85" y="84" text-anchor="middle" font-size="14" font-weight="700" fill="#475569">+</text><rect x="95" y="60" width="55" height="40" rx="3" fill="#FECACA" stroke="#7C2D12" stroke-width="1"/><text x="122" y="80" text-anchor="middle" font-size="10" font-weight="600" fill="#7C2D12">acid</text><text x="122" y="92" text-anchor="middle" font-size="8" fill="#7C2D12">e.g. HCl</text><text x="160" y="84" text-anchor="middle" font-size="16" font-weight="700" fill="#1E3A8A">→</text><rect x="170" y="60" width="55" height="40" rx="3" fill="#DBEAFE" stroke="#1E3A8A" stroke-width="1"/><text x="197" y="80" text-anchor="middle" font-size="10" font-weight="600" fill="#1E3A8A">salt</text><text x="197" y="92" text-anchor="middle" font-size="8" fill="#1E3A8A">e.g. ZnCl₂</text><text x="235" y="84" text-anchor="middle" font-size="14" font-weight="700" fill="#475569">+</text><rect x="245" y="60" width="55" height="40" rx="3" fill="#FEF9C3" stroke="#854D0E" stroke-width="1"/><text x="272" y="80" text-anchor="middle" font-size="10" font-weight="600" fill="#854D0E">hydrogen</text><text x="272" y="92" text-anchor="middle" font-size="8" fill="#854D0E">H₂ gas</text><text x="160" y="135" text-anchor="middle" font-size="11" font-weight="600" fill="#7C2D12">metal + acid → salt + hydrogen</text><text x="160" y="160" text-anchor="middle" font-size="9" fill="#7C2D12">Two products: a SALT (stays in the liquid)</text><text x="160" y="174" text-anchor="middle" font-size="9" fill="#7C2D12">and HYDROGEN gas (bubbles off).</text></svg>',
        hotspots: [
          {
            id: 'am-h-metal',
            x: 14,
            y: 36,
            label: 'Metal',
            description:
              'Common UK lab metals are magnesium ribbon, zinc granules, and iron filings. The metal sits as a solid in the bottom of the tube.',
          },
          {
            id: 'am-h-acid',
            x: 38,
            y: 36,
            label: 'Acid',
            description:
              'Common UK lab acids are dilute hydrochloric acid (HCl) and dilute sulfuric acid (H₂SO₄). The acid is a colourless liquid.',
          },
          {
            id: 'am-h-salt',
            x: 62,
            y: 36,
            label: 'Salt',
            description:
              'A salt is a compound made when an acid reacts with a metal or a base. The name comes from the metal and the acid: zinc + HCl gives zinc chloride; magnesium + H₂SO₄ gives magnesium sulfate.',
          },
          {
            id: 'am-h-hydrogen',
            x: 87,
            y: 36,
            label: 'Hydrogen gas',
            description:
              'Hydrogen bubbles rise out of the test tube and can be collected. A lit splint at the top of the tube goes "pop", which is the standard UK test for hydrogen.',
          },
          {
            id: 'am-h-rule',
            x: 50,
            y: 70,
            label: 'The rule to remember',
            description:
              'metal + acid → salt + hydrogen. This works for every reactive-enough metal at Y7: magnesium, zinc, iron with dilute HCl or sulfuric acid.',
          },
        ],
      },
    },
    {
      id: 'am-scene-pop-test',
      title: 'The Squeaky-Pop Test for Hydrogen',
      type: 'labelled-diagram',
      instructions:
        'Click each label to see how the standard UK lab test for hydrogen works.',
      data: {
        viewBox: '0 0 320 240',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240"><rect x="0" y="0" width="320" height="240" fill="#FEF3C7"/><rect x="120" y="40" width="50" height="140" rx="2" fill="none" stroke="#1E3A8A" stroke-width="1.4"/><rect x="120" y="155" width="50" height="25" fill="#FECACA" stroke="#7C2D12" stroke-width="0.8"/><g><circle cx="130" cy="120" r="3" fill="#FEF9C3" stroke="#854D0E" stroke-width="0.5"/><circle cx="145" cy="100" r="3" fill="#FEF9C3" stroke="#854D0E" stroke-width="0.5"/><circle cx="158" cy="130" r="3" fill="#FEF9C3" stroke="#854D0E" stroke-width="0.5"/><circle cx="138" cy="80" r="3" fill="#FEF9C3" stroke="#854D0E" stroke-width="0.5"/><circle cx="155" cy="65" r="3" fill="#FEF9C3" stroke="#854D0E" stroke-width="0.5"/></g><g><rect x="135" y="167" width="6" height="10" fill="#94A3B8"/><rect x="148" y="170" width="5" height="7" fill="#94A3B8"/><rect x="155" y="168" width="6" height="9" fill="#94A3B8"/></g><line x1="195" y1="40" x2="220" y2="20" stroke="#1F2937" stroke-width="1"/><polygon points="218,16 224,17 220,24" fill="#FB923C"/><text x="240" y="22" text-anchor="start" font-size="9" fill="#7C2D12">lit splint</text><text x="100" y="100" text-anchor="end" font-size="9" fill="#854D0E">H₂ gas</text><line x1="105" y1="100" x2="125" y2="100" stroke="#854D0E" stroke-width="0.6"/><text x="100" y="170" text-anchor="end" font-size="9" fill="#7C2D12">acid + Zn</text><line x1="105" y1="170" x2="125" y2="170" stroke="#7C2D12" stroke-width="0.6"/><text x="160" y="220" text-anchor="middle" font-size="10" font-weight="600" fill="#1E3A8A">"pop" → hydrogen</text></svg>',
        hotspots: [
          {
            id: 'am-h-tube',
            x: 45,
            y: 50,
            label: 'Test tube of acid + metal',
            description:
              'Zinc granules sit at the bottom of the tube under dilute hydrochloric acid. Bubbles of hydrogen gas rise from the metal as the reaction goes on.',
          },
          {
            id: 'am-h-bubbles',
            x: 31,
            y: 42,
            label: 'Hydrogen bubbles',
            description:
              'Each bubble carries hydrogen gas (H₂). Hydrogen is the lightest gas; it rises straight to the top of the tube.',
          },
          {
            id: 'am-h-splint',
            x: 75,
            y: 9,
            label: 'Lit wooden splint',
            description:
              'A pupil holds a lit wooden splint at the open top of the tube once enough hydrogen has gathered. This is the standard UK pop-test.',
          },
          {
            id: 'am-h-pop',
            x: 50,
            y: 92,
            label: 'The "squeaky pop"',
            description:
              'Hydrogen plus oxygen from the air burns at speed when the splint touches it. The reaction is loud enough to make a sharp "pop" sound. A pop confirms hydrogen.',
          },
        ],
      },
    },
    {
      id: 'am-scene-reactivity',
      title: 'Three Metals, Three Speeds: Mg, Zn, Fe in Dilute Acid',
      type: 'labelled-diagram',
      instructions:
        'Click each test tube to see how three common UK lab metals fizz at different rates in the same dilute acid.',
      data: {
        viewBox: '0 0 320 240',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240"><rect x="0" y="0" width="320" height="240" fill="#FEF3C7"/><g><rect x="20" y="40" width="60" height="160" rx="2" fill="none" stroke="#1E3A8A" stroke-width="1.2"/><rect x="20" y="160" width="60" height="40" fill="#FECACA" stroke="#7C2D12" stroke-width="0.6"/><rect x="35" y="170" width="6" height="20" fill="#94A3B8"/><rect x="48" y="170" width="6" height="20" fill="#94A3B8"/><rect x="60" y="170" width="6" height="20" fill="#94A3B8"/><circle cx="35" cy="120" r="3" fill="#BFDBFE"/><circle cx="50" cy="100" r="3" fill="#BFDBFE"/><circle cx="40" cy="80" r="3" fill="#BFDBFE"/><circle cx="60" cy="90" r="3" fill="#BFDBFE"/><circle cx="55" cy="60" r="3" fill="#BFDBFE"/><circle cx="35" cy="140" r="3" fill="#BFDBFE"/><circle cx="65" cy="130" r="3" fill="#BFDBFE"/><circle cx="50" cy="50" r="3" fill="#BFDBFE"/><text x="50" y="220" text-anchor="middle" font-size="10" font-weight="600" fill="#1E3A8A">MAGNESIUM</text><text x="50" y="232" text-anchor="middle" font-size="8" fill="#1E3A8A">fastest fizz</text></g><g><rect x="120" y="40" width="60" height="160" rx="2" fill="none" stroke="#1E3A8A" stroke-width="1.2"/><rect x="120" y="160" width="60" height="40" fill="#FECACA" stroke="#7C2D12" stroke-width="0.6"/><rect x="135" y="170" width="6" height="20" fill="#475569"/><rect x="148" y="170" width="6" height="20" fill="#475569"/><rect x="160" y="170" width="6" height="20" fill="#475569"/><circle cx="135" cy="120" r="3" fill="#BFDBFE"/><circle cx="150" cy="100" r="3" fill="#BFDBFE"/><circle cx="160" cy="135" r="3" fill="#BFDBFE"/><text x="150" y="220" text-anchor="middle" font-size="10" font-weight="600" fill="#1E3A8A">ZINC</text><text x="150" y="232" text-anchor="middle" font-size="8" fill="#1E3A8A">steady fizz</text></g><g><rect x="220" y="40" width="60" height="160" rx="2" fill="none" stroke="#1E3A8A" stroke-width="1.2"/><rect x="220" y="160" width="60" height="40" fill="#FECACA" stroke="#7C2D12" stroke-width="0.6"/><rect x="235" y="170" width="6" height="20" fill="#7C2D12"/><rect x="248" y="170" width="6" height="20" fill="#7C2D12"/><rect x="260" y="170" width="6" height="20" fill="#7C2D12"/><circle cx="245" cy="135" r="2.5" fill="#BFDBFE"/><text x="250" y="220" text-anchor="middle" font-size="10" font-weight="600" fill="#1E3A8A">IRON</text><text x="250" y="232" text-anchor="middle" font-size="8" fill="#1E3A8A">slow fizz</text></g><text x="160" y="20" text-anchor="middle" font-size="10" font-weight="600" fill="#7C2D12">All three give the SAME products: salt + hydrogen.</text></svg>',
        hotspots: [
          {
            id: 'am-h-mg',
            x: 16,
            y: 50,
            label: 'Magnesium: fastest fizz',
            description:
              'A short strip of magnesium ribbon in dilute HCl bubbles vigorously and may finish reacting in under a minute. The tube can feel warm to the touch.',
          },
          {
            id: 'am-h-zn',
            x: 47,
            y: 50,
            label: 'Zinc: steady fizz',
            description:
              'Zinc granules in the same dilute HCl bubble at a steady rate, slower than magnesium. The reaction continues for many minutes; this is the classic UK lab demo for the squeaky-pop test.',
          },
          {
            id: 'am-h-fe',
            x: 78,
            y: 50,
            label: 'Iron: slow fizz',
            description:
              'Iron filings in the same dilute HCl bubble only slowly. The fizz is quiet; you may need to wait several minutes to collect enough hydrogen for a pop test. Of these three, iron is the least reactive.',
          },
          {
            id: 'am-h-same-products',
            x: 50,
            y: 8,
            label: 'Same products, different speeds',
            description:
              'In each tube the products are a chloride salt plus hydrogen. Magnesium chloride, zinc chloride, iron chloride. The metal changes the speed and the salt name; concentration of the acid would change the speed too, but never the products.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'am-worked-1',
      title: 'Zinc and dilute hydrochloric acid in a school lab',
      steps: [
        {
          explanation:
            'Question: A pupil drops two zinc granules into a test tube of dilute hydrochloric acid. Bubbles rise from the metal. Write the word equation for the reaction and name the gas.',
        },
        {
          explanation:
            'Step 1: spot the type of reaction. Metal plus acid. Use the general rule: metal + acid → salt + hydrogen.',
        },
        {
          explanation:
            'Step 2: name the salt. The acid is hydrochloric, so the salt name ends in chloride. The metal is zinc, so the salt is zinc chloride.',
          maths: 'salt = zinc chloride',
        },
        {
          explanation:
            'Step 3: name the gas. The general rule says hydrogen. The bubbles are hydrogen gas, H₂.',
        },
        {
          explanation: 'Step 4: write the full word equation.',
          maths: 'zinc + hydrochloric acid → zinc chloride + hydrogen',
        },
        {
          explanation:
            'So the answer is: zinc + hydrochloric acid → zinc chloride + hydrogen. Hold a lit wooden splint at the top of the tube and the hydrogen will go "pop".',
        },
      ],
    },
    {
      id: 'am-worked-2',
      title: 'Magnesium and dilute sulfuric acid',
      steps: [
        {
          explanation:
            'Question: A school technician adds a strip of magnesium ribbon to a tube of dilute sulfuric acid. The ribbon fizzes vigorously. Predict the products and write the word equation.',
        },
        {
          explanation:
            'Step 1: spot the reaction type. Metal plus acid → salt + hydrogen.',
        },
        {
          explanation:
            'Step 2: name the salt. Sulfuric acid gives a sulfate salt. The metal is magnesium, so the salt is magnesium sulfate.',
          maths: 'salt = magnesium sulfate',
        },
        {
          explanation:
            'Step 3: name the gas. Every metal + acid reaction releases hydrogen. The fizzing bubbles are hydrogen gas, which can be confirmed with the squeaky-pop test (a lit splint gives a sharp pop).',
          maths: 'gas = hydrogen',
        },
        {
          explanation:
            'Step 4: state the answer. Word equation: magnesium + sulfuric acid → magnesium sulfate + hydrogen. The fizz is hydrogen gas. Magnesium fizzes faster than zinc in the same acid because it is more reactive.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'am-q1',
      type: 'multiple-choice',
      stem: 'What is the general word equation when a metal reacts with an acid?',
      tier: 'core',
      options: [
        'metal + acid → metal oxide + water',
        'metal + acid → salt + water',
        'metal + acid → salt + hydrogen',
        'metal + acid → hydrogen + oxygen',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'am-mis-water-product',
    },
    {
      id: 'am-q2',
      type: 'multiple-choice',
      stem: 'A pupil places zinc granules in dilute hydrochloric acid. What is the name of the salt formed?',
      tier: 'core',
      options: [
        'Zinc sulfate',
        'Zinc oxide',
        'Zinc nitrate',
        'Zinc chloride',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'am-mis-salt-naming',
    },
    {
      id: 'am-q3',
      type: 'multiple-choice',
      stem: 'A pupil places magnesium ribbon in dilute sulfuric acid. What is the name of the salt formed?',
      tier: 'core',
      options: [
        'Magnesium sulfate',
        'Magnesium chloride',
        'Magnesium hydroxide',
        'Magnesium oxide',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'am-mis-salt-naming',
    },
    {
      id: 'am-q4',
      type: 'multiple-choice',
      stem: 'A pupil holds a lit wooden splint at the top of a tube where zinc and acid are reacting. The gas inside the tube goes "pop". What does this confirm?',
      tier: 'core',
      options: [
        'The gas is oxygen',
        'The gas is carbon dioxide',
        'The gas is hydrogen',
        'The gas is steam',
      ],
      correctIndex: 2,
      xpValue: 10,
    },
    {
      id: 'am-q5',
      type: 'multiple-choice',
      stem: 'Of these three UK lab metals in the SAME dilute hydrochloric acid, which fizzes the FASTEST?',
      tier: 'confident',
      options: [
        'Iron',
        'Zinc',
        'Magnesium',
        'They all fizz at the same speed because the acid is the same',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'am-mis-all-same-speed',
    },
    {
      id: 'am-q7',
      type: 'multiple-choice',
      stem: 'A teacher in Sevenoaks doubles the concentration of dilute HCl in a tube containing zinc granules. What changes about the reaction?',
      tier: 'confident',
      options: [
        'The products change: a different salt is now formed',
        'The reaction is faster but the products are still zinc chloride + hydrogen',
        'No hydrogen is produced any more, only oxygen',
        'The zinc turns into a different metal',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'am-mis-conc-changes-products',
    },
    {
      id: 'am-q8',
      type: 'multiple-choice',
      stem: 'A pupil writes: "When iron filings are added to dilute sulfuric acid, the products are iron chloride and hydrogen." Choose the BEST correction.',
      tier: 'challenge',
      options: [
        'The salt should be iron sulfate, because the acid is sulfuric (sulfate); chloride only comes from hydrochloric acid',
        'The salt should be iron oxide, because metals always make oxides',
        'The gas should be oxygen, not hydrogen',
        'The pupil is right; iron chloride is the product',
      ],
      correctIndex: 0,
      xpValue: 25,
      misconceptionId: 'am-mis-salt-naming',
    },
    {
      id: 'am-q9',
      type: 'multiple-choice',
      stem: 'A school technician puts a tiny piece of copper into dilute hydrochloric acid in a UK school lab. After ten minutes there are no bubbles and the copper looks unchanged. Which of these is the BEST Year 7 explanation?',
      tier: 'challenge',
      options: [
        'Copper is too dense to react with acids',
        'Copper is less reactive than magnesium, zinc and iron, so it does not react with dilute hydrochloric acid at school-lab strength',
        'The acid was not strong enough; pure HCl is needed for any metal to react',
        'Copper does react, but the products are invisible',
      ],
      correctIndex: 1,
      xpValue: 25,
    },
    {
      id: 'am-q10',
      type: 'numeric-entry',
      stem: 'Three test tubes hold the SAME dilute HCl. Tube A has magnesium, tube B has zinc, tube C has iron, in equal-mass pieces. Rank the speed of fizzing from fastest to slowest. How many SECONDS does the magnesium tube usually take to finish in a school lab demo: 30 seconds, or several minutes? Type the rough number of seconds (use 30).',
      tier: 'core',
      correctAnswer: 30,
      unit: 's',
      tolerance: 15,
      xpValue: 10,
      hint: 'Magnesium is the fastest of the three; the tube can finish reacting in around half a minute.',
    },
    {
      id: 'am-q11',
      type: 'numeric-entry',
      stem: 'A pupil drops 2 g of zinc into excess dilute hydrochloric acid. After the reaction is over, all the zinc has gone. They evaporate the liquid and weigh the salt left behind: 4.2 g. The hydrogen released into the air weighed 0.06 g. The acid used weighed 2.26 g. Use conservation of mass to check: total mass before should equal total mass after. What was the mass of the acid plus zinc, in grams (give one decimal place)?',
      tier: 'confident',
      correctAnswer: 4.3,
      unit: 'g',
      tolerance: 0.05,
      xpValue: 15,
      hint: 'Add the mass of zinc (2 g) and the mass of acid (2.26 g) used.',
    },
    {
      id: 'am-q12',
      type: 'numeric-entry',
      stem: 'In the previous question, the salt left after evaporating weighed 4.2 g and the hydrogen released weighed 0.06 g. Mass is conserved. What is the total mass of the products in grams (to two decimal places)?',
      tier: 'confident',
      correctAnswer: 4.26,
      unit: 'g',
      tolerance: 0.02,
      xpValue: 15,
    },
    {
      id: 'am-q13',
      type: 'numeric-entry',
      stem: 'A school technician collects hydrogen from a zinc-and-acid reaction in a small test tube held over the fizzing mixture. They time how long the tube takes to fill: zinc takes 90 s, magnesium of the same mass takes 30 s. How many TIMES faster does the magnesium tube fill compared with zinc? Give a whole number.',
      tier: 'challenge',
      correctAnswer: 3,
      xpValue: 25,
      hint: '90 ÷ 30 gives the speed multiplier.',
    },
    {
      id: 'am-q14',
      type: 'drag-order',
      stem: 'A pupil writes a wobbly account of zinc + dilute HCl. Drag these phrases to put them in the correct order to read as the standard word equation, left to right.',
      tier: 'core',
      items: [
        '+ hydrogen',
        'zinc',
        'zinc chloride',
        '→',
        '+ hydrochloric acid',
      ],
      correctOrder: [1, 4, 3, 2, 0],
      xpValue: 20,
    },
    {
      id: 'am-q15',
      type: 'spot-misconception',
      stem: 'Priya argues: "Hydrogen, oxygen, carbon dioxide, they all give a pop test if they are concentrated enough. The pop just means a gas is in the tube."',
      tier: 'core',
      statements: [
        {
          text: 'Priya is right. Any gas in a test tube will go "pop" when a lit splint is held to it.',
          isMisconception: true,
        },
        {
          text: 'Priya is wrong. The squeaky-pop test is specific to hydrogen. Oxygen relights a glowing splint; carbon dioxide turns limewater milky and puts out a flame. Each common gas has its own UK lab test.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'am-mis-pop-any-gas',
    },
    {
      id: 'am-q16',
      type: 'spot-misconception',
      stem: 'Olu says: "If I make the acid more concentrated, the products of zinc + HCl change. Maybe more concentrated acid gives a different salt or even a different gas."',
      tier: 'confident',
      statements: [
        {
          text: 'Olu is right. Concentration of the acid changes which salt and which gas come out.',
          isMisconception: true,
        },
        {
          text: 'Olu is wrong. Concentration changes the SPEED of the reaction (more concentrated acid fizzes faster), but the products stay the same: zinc chloride and hydrogen. Strong vs weak and dilute vs concentrated never change the names of the products at Y7 level.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'am-mis-conc-changes-products',
    },
    {
      id: 'am-q17',
      type: 'free-text',
      stem: 'In 2 to 3 sentences, describe the squeaky-pop test for hydrogen. Mention what you do, what you hear, and why it works.',
      tier: 'confident',
      sampleAnswer:
        'You hold a lit wooden splint at the open top of a test tube where a metal and acid are reacting. The hydrogen gas in the tube reacts with oxygen from the air at the splint flame, very fast, and you hear a sharp "pop". The pop sound confirms the gas is hydrogen.',
      keywords: ['hydrogen', 'splint', 'pop', 'oxygen'],
      xpValue: 20,
    },
    {
      id: 'am-q18',
      type: 'missing-step',
      stem: 'Fill in the missing step in this account of a zinc-and-acid lab session.',
      tier: 'confident',
      steps: [
        'A pupil pours dilute hydrochloric acid into a test tube on a rack',
        'The pupil drops two zinc granules into the tube and stoppers it loosely',
        'Bubbles of gas rise from the metal at a steady rate',
        null,
        'The tube goes "pop", which confirms the gas is hydrogen',
      ],
      missingStepIndex: 3,
      correctStep:
        'The pupil holds a lit wooden splint at the open top of the tube once enough gas has gathered',
      xpValue: 20,
    },
    {
      id: 'am-q19',
      type: 'labelled-image',
      stem: 'Drag each label onto the correct part of this Mg / Zn / Fe reactivity comparison.',
      tier: 'confident',
      viewBox: '0 0 320 200',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><rect x="0" y="0" width="320" height="200" fill="#F8FAFC"/><rect x="20" y="40" width="60" height="120" rx="2" fill="none" stroke="#1E3A8A" stroke-width="1.2"/><rect x="20" y="125" width="60" height="35" fill="#FECACA" stroke="#7C2D12" stroke-width="0.6"/><circle cx="35" cy="100" r="3" fill="#BFDBFE"/><circle cx="55" cy="80" r="3" fill="#BFDBFE"/><circle cx="45" cy="65" r="3" fill="#BFDBFE"/><circle cx="65" cy="55" r="3" fill="#BFDBFE"/><circle cx="40" cy="90" r="3" fill="#BFDBFE"/><circle cx="50" cy="110" r="3" fill="#BFDBFE"/><rect x="120" y="40" width="60" height="120" rx="2" fill="none" stroke="#1E3A8A" stroke-width="1.2"/><rect x="120" y="125" width="60" height="35" fill="#FECACA" stroke="#7C2D12" stroke-width="0.6"/><circle cx="135" cy="105" r="3" fill="#BFDBFE"/><circle cx="155" cy="90" r="3" fill="#BFDBFE"/><circle cx="160" cy="115" r="3" fill="#BFDBFE"/><rect x="220" y="40" width="60" height="120" rx="2" fill="none" stroke="#1E3A8A" stroke-width="1.2"/><rect x="220" y="125" width="60" height="35" fill="#FECACA" stroke="#7C2D12" stroke-width="0.6"/><circle cx="245" cy="115" r="2.5" fill="#BFDBFE"/></svg>',
      hotspots: [
        { id: 'am-q19-h1', x: 16, y: 18, correctLabel: 'Magnesium (fastest)' },
        { id: 'am-q19-h2', x: 47, y: 18, correctLabel: 'Zinc (steady)' },
        { id: 'am-q19-h3', x: 78, y: 18, correctLabel: 'Iron (slowest)' },
      ],
      labels: [
        'Magnesium (fastest)',
        'Zinc (steady)',
        'Iron (slowest)',
        'Copper (fastest)',
        'Sodium (slowest)',
      ],
      xpValue: 20,
    },
    {
      id: 'am-q20',
      type: 'multiple-choice',
      stem: 'A school technician in Norwich has a tube of dilute HCl with zinc; the reaction is fizzing slowly. They want to gather more hydrogen for a pop test. Which UK-school-safe change is MOST likely to speed up the fizz, without changing the products?',
      tier: 'challenge',
      options: [
        'Add salt to the acid',
        'Use more concentrated dilute HCl (still in the safe school range)',
        'Cool the tube in an ice bath',
        'Stopper the tube tightly so no gas escapes',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'am-mis-conc-changes-products',
    },
    {
      id: 'am-q21',
      type: 'multiple-choice',
      stem: 'A pupil claims: "When zinc reacts with dilute HCl, the bubbles you see are oxygen, because oxygen is in the air all around us." What is the BEST response for Year 7?',
      tier: 'challenge',
      options: [
        'The pupil is right; the bubbles are oxygen from the air',
        'The bubbles are nitrogen, the most common gas in air',
        'The bubbles are hydrogen, not oxygen. Hydrogen is made when the H of the acid pairs up with itself; the pop test shows hydrogen, not oxygen',
        'The bubbles are water vapour, made by the acid heating up',
      ],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'am-mis-bubbles-are-oxygen',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Combined Science Trilogy examiner report June 2019 (8464/C/1F), Q07 on metal + acid: candidates "named the gas as oxygen because the bubbles came from a watery liquid". Reinforced by CGP KS3 Chemistry Study Book p.48 Common Mistake box on the squeaky-pop test.
    {
      id: 'am-mis-bubbles-are-oxygen',
      description:
        'The bubbles in a zinc-and-acid reaction are oxygen, because oxygen is the gas in the air around us.',
      triggerAnswer: 'bubbles-are-oxygen',
      correction:
        'In fact the bubbles are hydrogen. The squeaky-pop test confirms hydrogen; oxygen would relight a glowing splint instead.',
      reExplanation:
        'Hydrogen comes from the H part of HCl pairing up to make H₂ molecules. Oxygen would not bubble out of an acid; it would stay in the air. The school-lab test is to hold a lit splint at the top of the tube. A "pop" sound means hydrogen; a glowing splint that bursts back into flame would mean oxygen, but that does not happen in this reaction.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2020 (1CH0/1F), Q06 on naming salts: candidates "named zinc + sulfuric acid as zinc chloride, and magnesium + HCl as magnesium sulfate". Reinforced by CGP KS3 Chemistry Study Book p.49 Common Mistake box on salt naming.
    {
      id: 'am-mis-salt-naming',
      description:
        'Any salt made from acid and metal can be called a chloride; the acid name does not matter for the salt name.',
      triggerAnswer: 'salt-naming',
      correction:
        'In fact the salt name comes from the acid: hydrochloric acid gives a chloride salt, sulfuric acid gives a sulfate salt, nitric acid gives a nitrate salt.',
      reExplanation:
        'Each acid has a matching salt ending. HCl ends in -chloride. H₂SO₄ ends in -sulfate. HNO₃ ends in -nitrate. Magnesium plus HCl gives magnesium chloride. Magnesium plus H₂SO₄ gives magnesium sulfate. The metal sets the first word; the acid sets the second word. Mix the two endings and the salt name is wrong.',
    },
    // Source: Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question sets on metal + acid: a recurring Year 7 expectation is that "more concentrated acid gives different products". Reinforced by RSC Education article "Common student misconceptions about acids and bases" (rsc.org/education, accessed 2026-05-10).
    {
      id: 'am-mis-conc-changes-products',
      description:
        'Making the acid more concentrated changes the products of a metal + acid reaction.',
      triggerAnswer: 'conc-changes-products',
      correction:
        'In fact concentration changes the SPEED of the reaction, not the products. Zinc + HCl always gives zinc chloride + hydrogen, whether the acid is dilute or concentrated.',
      reExplanation:
        'Speed is set by how often acid particles collide with the metal: more particles per mL means more collisions per second, so faster fizz. The chemistry of the products is set by which atoms are there to react. The H of HCl pairs up to make hydrogen gas; the Cl pairs with the metal to make a chloride salt. Adding more HCl to the bottle does not add a new ingredient.',
    },
    // Source: CGP KS3 Chemistry Study Book p.48 Common Mistake box on the squeaky-pop test: "Some students think any gas in a tube goes pop when a splint is held to it". Reinforced by CLEAPSS PS56-22 (Hydrogen pop test guidance for school chemistry).
    {
      id: 'am-mis-pop-any-gas',
      description:
        'Any gas in a test tube will go "pop" when a lit splint is held to it; the pop only means there is gas there.',
      triggerAnswer: 'pop-any-gas',
      correction:
        'In fact the pop test is specific to hydrogen. Oxygen relights a glowing splint; carbon dioxide puts out a flame and turns limewater milky.',
      reExplanation:
        'Each common school-lab gas has its own UK test. Hydrogen: pop with a lit splint. Oxygen: relights a glowing splint. Carbon dioxide: turns limewater (calcium hydroxide solution) cloudy. So the pop sound is a hydrogen-only signature, not a general "gas is here" sign.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2021 (8462/1F), Q08 on metal reactivity: candidates "wrote that all metals fizz at the same speed in the same dilute acid". Reinforced by CGP KS3 Chemistry Study Book p.50 reactivity-series chapter and CLEAPSS PS92-21 Year 7 reactivity-series practical guide.
    {
      id: 'am-mis-all-same-speed',
      description:
        'In the same dilute acid, every metal fizzes at the same speed because the acid is the same.',
      triggerAnswer: 'all-same-speed',
      correction:
        'In fact different metals fizz at different speeds in the same acid, because they have different reactivities. Magnesium is faster than zinc, which is faster than iron.',
      reExplanation:
        'A more reactive metal gives up its outer electron more readily, so it reacts faster with acid. In the school lab Mg is the quickest of the common three, then Zn at a steady rate, then Fe at a slow rate. Copper sits below all three and does not react with dilute HCl at school strength at all.',
    },
    // Source: Edexcel GCSE Combined Science examiner report June 2019 (1SC0/1CF), Q05 on metal + acid: candidates "wrote that water was a product of metal + acid", confusing it with metal-oxide + acid → salt + water. Reinforced by CGP KS3 Chemistry Study Book p.49 Common Mistake box on metal vs metal-oxide reactions.
    {
      id: 'am-mis-water-product',
      description:
        'Water is a product when a metal reacts with an acid, like in a neutralisation reaction.',
      triggerAnswer: 'water-product',
      correction:
        'In fact metal + acid → salt + hydrogen. Water is the second product when a metal OXIDE or alkali reacts with an acid (neutralisation), but pure metal gives hydrogen, not water.',
      reExplanation:
        'Two different general rules at Y7. Pure metal + acid → salt + hydrogen (zinc + HCl → zinc chloride + hydrogen). Metal oxide / hydroxide / alkali + acid → salt + water (copper oxide + sulfuric acid → copper sulfate + water; that is neutralisation). The pop test confirms hydrogen in the first kind; no pop in the second kind.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const rusting: SkillNode = {
  id: 'chemistry-simple-reactions-rusting',
  title: 'Rusting: Iron, Oxygen, Water',
  description:
    'Rusting is a slow chemical reaction that turns iron into a flaky orange-brown solid called rust (iron oxide). The word equation is: iron + oxygen + water → iron oxide. BOTH oxygen AND water must be there for rust to form. The classic UK school three-test-tube experiment proves this: a tube with air and water rusts; a tube with dry air alone does not rust; a tube with boiled water under oil (no oxygen) does not rust either. Prevention: paint, oil, galvanising. UK contexts include garden gates, the Forth Bridge in Scotland, and bicycle chains.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-simple-reactions',
  zoneName: 'Simple Reactions',
  tier: 'confident',
  prerequisites: ['chemistry-simple-reactions-combustion'],
  curriculum: {
    ks3Objective:
      'Combustion, thermal decomposition, oxidation and displacement reactions; chemical reactions as the rearrangement of atoms; representing chemical reactions using formulae and using equations.',
    awardingBodies: {
      aqa: '4.10.1.1 Corrosion and its prevention; rusting of iron requires oxygen and water (GCSE Chemistry 8462)',
      edexcel:
        'Topic 4 Extracting metals; CC10 Reversible reactions; Topic 8 Reactivity of metals (rusting; barrier methods, sacrificial protection) (GCSE Chemistry 1CH0)',
      ocr: 'C5.1d Corrosion; rusting of iron and steel; conditions needed; barrier and sacrificial methods of protection (GCSE Chemistry A J248 Gateway)',
    },
  },
  scenes: [
    {
      id: 'rust-scene-equation',
      title: 'The Word Equation: Iron plus Oxygen plus Water',
      type: 'labelled-diagram',
      instructions:
        'Click each label to read the word equation for rusting and see where each ingredient comes from.',
      data: {
        viewBox: '0 0 320 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#FEF3C7"/><rect x="15" y="60" width="50" height="40" rx="3" fill="#E5E7EB" stroke="#475569" stroke-width="1"/><text x="40" y="80" text-anchor="middle" font-size="9" font-weight="600" fill="#1F2937">iron</text><text x="40" y="92" text-anchor="middle" font-size="8" fill="#1F2937">Fe (metal)</text><text x="73" y="84" text-anchor="middle" font-size="14" font-weight="700" fill="#475569">+</text><rect x="83" y="60" width="50" height="40" rx="3" fill="#DBEAFE" stroke="#1E3A8A" stroke-width="1"/><text x="108" y="80" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">oxygen</text><text x="108" y="92" text-anchor="middle" font-size="8" fill="#1E3A8A">O₂ (air)</text><text x="141" y="84" text-anchor="middle" font-size="14" font-weight="700" fill="#475569">+</text><rect x="151" y="60" width="50" height="40" rx="3" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="1"/><text x="176" y="80" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">water</text><text x="176" y="92" text-anchor="middle" font-size="8" fill="#1E3A8A">H₂O</text><text x="210" y="84" text-anchor="middle" font-size="16" font-weight="700" fill="#7C2D12">→</text><rect x="220" y="60" width="80" height="40" rx="3" fill="#FED7AA" stroke="#9A3412" stroke-width="1"/><text x="260" y="80" text-anchor="middle" font-size="9" font-weight="600" fill="#9A3412">iron oxide</text><text x="260" y="92" text-anchor="middle" font-size="8" fill="#9A3412">(RUST, flaky orange)</text><text x="160" y="135" text-anchor="middle" font-size="11" font-weight="600" fill="#7C2D12">iron + oxygen + water → iron oxide</text><text x="160" y="158" text-anchor="middle" font-size="9" fill="#7C2D12">All three are needed.</text><text x="160" y="172" text-anchor="middle" font-size="9" fill="#7C2D12">Take any one away and rusting stops.</text><g><circle cx="80" cy="195" r="6" fill="#FB923C"/><text x="80" y="197" text-anchor="middle" font-size="6" fill="#7C2D12" font-weight="600">rust</text><text x="160" y="197" text-anchor="middle" font-size="9" fill="#7C2D12">A rusty UK garden gate</text></g></svg>',
        hotspots: [
          {
            id: 'rust-h-iron',
            x: 12,
            y: 36,
            label: 'Iron (Fe)',
            description:
              'Iron is the metal that rusts. Steel is mostly iron with a small amount of carbon, so steel rusts too. Garden gates, car bodies and bicycle frames in the UK are mostly steel.',
          },
          {
            id: 'rust-h-oxygen',
            x: 33,
            y: 36,
            label: 'Oxygen (from the air)',
            description:
              'About a fifth of the air is oxygen. Rusting is a slow form of oxidation: iron atoms join with oxygen atoms to form iron oxide.',
          },
          {
            id: 'rust-h-water',
            x: 55,
            y: 36,
            label: 'Water (rain, damp air, puddles)',
            description:
              'Liquid water or damp air provides the third ingredient. UK weather is often wet, so iron objects left outdoors rust faster than the same objects in a dry shed.',
          },
          {
            id: 'rust-h-rust',
            x: 81,
            y: 36,
            label: 'Iron oxide (rust)',
            description:
              'Rust is iron oxide: a flaky orange-brown solid that crumbles off the metal. As rust falls away, fresh iron underneath is exposed and the rusting goes deeper. Over years, an unprotected iron gate can rust right through.',
          },
          {
            id: 'rust-h-rule',
            x: 50,
            y: 71,
            label: 'Both oxygen AND water',
            description:
              'Rusting is one of the few Year 7 reactions that needs three reactants. Removing any one of iron, oxygen or water stops rusting. This is the pedigree of the school three-test-tube experiment.',
          },
        ],
      },
    },
    {
      id: 'rust-scene-three-tubes',
      title: 'The Three-Test-Tube Experiment',
      type: 'labelled-diagram',
      instructions:
        'Click each tube to read what is inside, what happens, and why.',
      data: {
        viewBox: '0 0 320 240',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240"><rect x="0" y="0" width="320" height="240" fill="#FEF3C7"/><g><rect x="15" y="40" width="60" height="160" rx="2" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="1.2"/><rect x="33" y="120" width="6" height="20" fill="#9A3412"/><rect x="45" y="120" width="6" height="20" fill="#9A3412"/><rect x="55" y="120" width="6" height="20" fill="#9A3412"/><text x="45" y="60" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">TUBE A</text><text x="45" y="74" text-anchor="middle" font-size="8" fill="#1E3A8A">tap water + air</text><text x="45" y="160" text-anchor="middle" font-size="8" fill="#9A3412">RUSTS</text><text x="45" y="174" text-anchor="middle" font-size="7" fill="#9A3412">orange flakes</text><text x="45" y="188" text-anchor="middle" font-size="7" fill="#9A3412">on the nails</text></g><g><rect x="120" y="40" width="60" height="160" rx="2" fill="#FFFFFF" stroke="#475569" stroke-width="1.2"/><rect x="138" y="120" width="6" height="20" fill="#475569"/><rect x="150" y="120" width="6" height="20" fill="#475569"/><rect x="160" y="120" width="6" height="20" fill="#475569"/><text x="150" y="60" text-anchor="middle" font-size="9" font-weight="600" fill="#475569">TUBE B</text><text x="150" y="74" text-anchor="middle" font-size="8" fill="#475569">DRY air only</text><text x="150" y="86" text-anchor="middle" font-size="7" fill="#475569">(silica gel)</text><text x="150" y="160" text-anchor="middle" font-size="8" fill="#1F2937">NO RUST</text><text x="150" y="174" text-anchor="middle" font-size="7" fill="#1F2937">no water</text></g><g><rect x="225" y="40" width="60" height="160" rx="2" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="1.2"/><rect x="225" y="40" width="60" height="20" fill="#FBBF24" stroke="#7C2D12" stroke-width="0.8"/><rect x="243" y="120" width="6" height="20" fill="#475569"/><rect x="255" y="120" width="6" height="20" fill="#475569"/><rect x="265" y="120" width="6" height="20" fill="#475569"/><text x="255" y="80" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">TUBE C</text><text x="255" y="94" text-anchor="middle" font-size="8" fill="#1E3A8A">boiled water</text><text x="255" y="106" text-anchor="middle" font-size="7" fill="#7C2D12">+ oil layer (no air)</text><text x="255" y="160" text-anchor="middle" font-size="8" fill="#1F2937">NO RUST</text><text x="255" y="174" text-anchor="middle" font-size="7" fill="#1F2937">no oxygen</text></g><text x="160" y="220" text-anchor="middle" font-size="10" font-weight="600" fill="#7C2D12">Only the tube with BOTH water AND oxygen rusts.</text></svg>',
        hotspots: [
          {
            id: 'rust-h-a',
            x: 14,
            y: 50,
            label: 'Tube A: tap water and fresh air → RUSTS',
            description:
              'Iron nails sit in tap water with the top of the tube open to the air. Water and oxygen are both present. After a few days the nails go orange-brown and rust flakes drop into the water.',
          },
          {
            id: 'rust-h-b',
            x: 47,
            y: 50,
            label: 'Tube B: dry air only → NO RUST',
            description:
              'Iron nails sit in dry air with a sachet of silica gel (a drying agent) inside. The tube is sealed. There is plenty of oxygen but no water. The nails stay shiny.',
          },
          {
            id: 'rust-h-c',
            x: 80,
            y: 50,
            label: 'Tube C: boiled water under oil → NO RUST',
            description:
              'Iron nails sit in water that has been boiled (to drive out dissolved oxygen) with a layer of cooking oil sealed on top (to keep new air out). There is plenty of water but no oxygen. The nails stay shiny.',
          },
          {
            id: 'rust-h-conclusion',
            x: 50,
            y: 92,
            label: 'Conclusion: BOTH are needed',
            description:
              'Tube A rusts but tubes B and C do not. The only difference is that A has both water and oxygen, while B has no water and C has no oxygen. So rusting needs both.',
          },
        ],
      },
    },
    {
      id: 'rust-scene-prevention',
      title: 'Three Ways to Stop Rust on UK Iron',
      type: 'labelled-diagram',
      instructions:
        'Click each panel to see a UK example of a way to stop iron from rusting.',
      data: {
        viewBox: '0 0 320 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#FEF3C7"/><g><rect x="15" y="20" width="90" height="180" rx="4" fill="#FFFFFF" stroke="#7C2D12" stroke-width="1"/><text x="60" y="40" text-anchor="middle" font-size="10" font-weight="600" fill="#7C2D12">PAINT</text><text x="60" y="56" text-anchor="middle" font-size="8" fill="#7C2D12">Forth Bridge,</text><text x="60" y="68" text-anchor="middle" font-size="8" fill="#7C2D12">Scotland</text><rect x="30" y="90" width="60" height="20" fill="#94A3B8"/><rect x="30" y="85" width="60" height="6" fill="#DC2626"/><text x="60" y="135" text-anchor="middle" font-size="8" fill="#7C2D12">a paint layer</text><text x="60" y="148" text-anchor="middle" font-size="8" fill="#7C2D12">keeps water + oxygen</text><text x="60" y="160" text-anchor="middle" font-size="8" fill="#7C2D12">off the iron</text><text x="60" y="184" text-anchor="middle" font-size="8" font-style="italic" fill="#7C2D12">re-painted continuously</text></g><g><rect x="115" y="20" width="90" height="180" rx="4" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="1"/><text x="160" y="40" text-anchor="middle" font-size="10" font-weight="600" fill="#1E3A8A">OIL / GREASE</text><text x="160" y="56" text-anchor="middle" font-size="8" fill="#1E3A8A">bicycle chain</text><rect x="130" y="90" width="60" height="20" fill="#94A3B8"/><rect x="130" y="85" width="60" height="6" fill="#FACC15"/><text x="160" y="135" text-anchor="middle" font-size="8" fill="#1E3A8A">a thin oil film keeps</text><text x="160" y="148" text-anchor="middle" font-size="8" fill="#1E3A8A">water off the steel</text><text x="160" y="160" text-anchor="middle" font-size="8" fill="#1E3A8A">links</text></g><g><rect x="215" y="20" width="90" height="180" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1"/><text x="260" y="40" text-anchor="middle" font-size="10" font-weight="600" fill="#475569">GALVANISING</text><text x="260" y="56" text-anchor="middle" font-size="8" fill="#475569">UK farm gate</text><rect x="230" y="90" width="60" height="20" fill="#94A3B8"/><rect x="230" y="85" width="60" height="6" fill="#94A3B8"/><text x="260" y="135" text-anchor="middle" font-size="8" fill="#475569">a thin zinc layer</text><text x="260" y="148" text-anchor="middle" font-size="8" fill="#475569">covers the iron</text><text x="260" y="160" text-anchor="middle" font-size="8" fill="#475569">underneath</text></g></svg>',
        hotspots: [
          {
            id: 'rust-h-paint',
            x: 19,
            y: 50,
            label: 'Paint: the Forth Bridge',
            description:
              'The Forth Bridge in Scotland is a famous iron rail bridge. To stop the iron from rusting, paint teams work along the bridge applying fresh paint year after year. The paint barrier keeps water and oxygen off the iron underneath.',
          },
          {
            id: 'rust-h-oil',
            x: 50,
            y: 50,
            label: 'Oil or grease: bicycle chain',
            description:
              'A UK bicycle chain is steel and rusts easily after a wet ride. A thin film of chain oil keeps water off the steel links. Without it, the chain seizes up after a winter.',
          },
          {
            id: 'rust-h-galv',
            x: 81,
            y: 50,
            label: 'Galvanising: farm gate',
            description:
              'A galvanised farm gate has a thin coat of zinc bonded onto the iron. The zinc layer keeps water and oxygen off the iron, and slowly corrodes itself in place of the iron underneath. Used widely on UK farm gates and crash barriers.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'rust-worked-1',
      title: 'Writing the word equation for rusting',
      steps: [
        {
          explanation:
            'Question: An iron garden gate in Manchester is left out through a wet winter and goes orange-brown and flaky. Write the word equation for the reaction.',
        },
        {
          explanation:
            'Step 1: name the metal. Iron is the metal that rusts. Steel rusts too, because steel is mostly iron.',
        },
        {
          explanation:
            'Step 2: name the other reactants. Rusting needs both oxygen (from the air) and water (rain). Both are reactants.',
          maths: 'iron + oxygen + water →',
        },
        {
          explanation:
            'Step 3: name the product. Rust is iron oxide: a flaky orange-brown solid.',
        },
        {
          explanation: 'Step 4: write the full word equation.',
          maths: 'iron + oxygen + water → iron oxide',
        },
        {
          explanation:
            'So the answer is: iron + oxygen + water → iron oxide. Note three reactants on the left, not two; rusting is unusual in needing both oxygen AND water.',
        },
      ],
    },
    {
      id: 'rust-worked-2',
      title: 'Working out which test tube rusts',
      steps: [
        {
          explanation:
            'Question: A teacher sets up three sealed test tubes in a UK school lab. Tube A: iron nails in tap water. Tube B: iron nails with silica gel (dry air, no water). Tube C: iron nails in boiled water with a layer of oil sealing the top (no oxygen). Predict which tube rusts and explain why.',
        },
        {
          explanation:
            'Step 1: write down what rusting needs. iron + oxygen + water → iron oxide. All three must be there.',
        },
        {
          explanation:
            'Step 2: check tube A. Has iron nails (yes). Has air on top of the water, so oxygen is there (yes). Has water (yes). All three present, so rust forms.',
          maths: 'tube A: iron + oxygen + water all present → rusts',
        },
        {
          explanation:
            'Step 3: check tube B. Has iron and air, so oxygen is there (yes). The silica gel absorbs moisture, so no water reaches the nails. No water. Rusting blocked.',
          maths: 'tube B: iron + oxygen present, water missing → no rust',
        },
        {
          explanation:
            'Step 4: check tube C. Has iron and water but the boiled water has lost its dissolved oxygen and the oil layer keeps fresh air out. No oxygen. Rusting blocked.',
          maths: 'tube C: iron + water present, oxygen missing → no rust',
        },
        {
          explanation:
            'Step 5: state the answer. Only tube A rusts. The experiment proves rusting needs BOTH oxygen and water; remove either one and rusting stops.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'rust-q1',
      type: 'multiple-choice',
      stem: 'What is the word equation for rusting?',
      tier: 'core',
      options: [
        'iron + oxygen → iron oxide',
        'iron + water → iron hydroxide',
        'iron + oxygen + water → iron oxide',
        'iron + carbon dioxide → iron carbonate',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'rust-mis-only-oxygen',
    },
    {
      id: 'rust-q2',
      type: 'multiple-choice',
      stem: 'What is rust, in chemistry terms?',
      tier: 'core',
      options: [
        'A new metal',
        'Iron oxide, a flaky orange-brown solid',
        'A type of paint',
        'Pure carbon',
      ],
      correctIndex: 1,
      xpValue: 10,
    },
    {
      id: 'rust-q3',
      type: 'multiple-choice',
      stem: 'In the classic UK three-test-tube experiment, which tube RUSTS?',
      tier: 'core',
      options: [
        'The tube with dry air only (silica gel)',
        'The tube with boiled water under oil (no fresh air)',
        'The tube with iron nails in tap water with air on top',
        'No tubes rust because rusting is too slow to see',
      ],
      correctIndex: 2,
      xpValue: 10,
    },
    {
      id: 'rust-q4',
      type: 'multiple-choice',
      stem: 'In the three-test-tube experiment, why does the tube with DRY air NOT rust?',
      tier: 'core',
      options: [
        'There is no iron in it',
        'There is plenty of oxygen but no water',
        'There is plenty of water but no oxygen',
        'It is too cold',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'rust-mis-only-oxygen',
    },
    {
      id: 'rust-q5',
      type: 'multiple-choice',
      stem: 'In the three-test-tube experiment, why does the tube with BOILED WATER under a layer of OIL not rust?',
      tier: 'confident',
      options: [
        'There is plenty of water but no oxygen',
        'The oil reacts with the iron',
        'Boiled water cannot dissolve iron',
        'The cap is too tight',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'rust-mis-only-water',
    },
    {
      id: 'rust-q7',
      type: 'multiple-choice',
      stem: 'Which of these is a way to STOP an iron object from rusting?',
      tier: 'core',
      options: [
        'Leave it outside in the rain',
        'Paint it, oil it, or galvanise it',
        'Heat it red-hot',
        'Wash it in salty water',
      ],
      correctIndex: 1,
      xpValue: 10,
    },
    {
      id: 'rust-q8',
      type: 'multiple-choice',
      stem: 'The Forth Bridge in Scotland is a famous iron rail bridge. Why is it CONTINUOUSLY repainted?',
      tier: 'confident',
      options: [
        'For decoration only',
        'Because the paint glows in the dark',
        'To attract trains',
        'To stop iron from rusting; the paint layer keeps water and oxygen off the iron',
      ],
      correctIndex: 3,
      xpValue: 15,
    },
    {
      id: 'rust-q9',
      type: 'multiple-choice',
      stem: 'A pupil leaves a steel bicycle chain on a wet front lawn for a week. They notice rust on the chain. Which combination of conditions allowed rusting?',
      tier: 'challenge',
      options: [
        'Iron only; oxygen and water do not matter',
        'Water only; oxygen does not matter',
        'Steel (mostly iron) plus oxygen from the air plus water from the wet lawn; all three were there',
        'The lawn turned the steel into iron, and that started rusting',
      ],
      correctIndex: 2,
      xpValue: 25,
    },
    {
      id: 'rust-q10',
      type: 'multiple-choice',
      stem: 'A school technician in Norwich sets up an extra tube as a check: iron nails in salty seawater. The nails rust FASTER than the same nails in tap water. What can you fairly conclude at Year 7?',
      tier: 'challenge',
      options: [
        'Salt is the only ingredient that matters; oxygen and water are not needed',
        'Rusting still needs iron, oxygen and water; salt speeds the rusting up',
        'Salt stops rust forming, so this is impossible',
        'Salt is now the metal that rusts',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'rust-mis-salt-replaces',
    },
    {
      id: 'rust-q11',
      type: 'numeric-entry',
      stem: 'How many ingredients (reactants) does rusting need? Type the whole number.',
      tier: 'core',
      correctAnswer: 3,
      xpValue: 10,
      hint: 'Iron, oxygen and one more thing.',
    },
    {
      id: 'rust-q12',
      type: 'numeric-entry',
      stem: 'In a UK school lab, a 4 g iron nail is left in damp air. After eight weeks, all the nail has gone orange-brown rust, and the dry rust now weighs 5.7 g. What is the increase in mass, in grams (to one decimal place)?',
      tier: 'confident',
      correctAnswer: 1.7,
      unit: 'g',
      tolerance: 0.05,
      xpValue: 15,
      hint: 'Subtract the starting mass of iron from the final mass of rust.',
      misconceptionId: 'rust-mis-rust-stuck-on',
    },
    {
      id: 'rust-q13',
      type: 'numeric-entry',
      stem: 'In the experiment from the previous question, the extra mass came from oxygen atoms (and a small amount from water atoms) joining the iron. How many oxygen atoms are in one oxygen molecule of the gas in air?',
      tier: 'confident',
      correctAnswer: 2,
      xpValue: 15,
      hint: 'Oxygen as a gas in air comes as O₂ molecules: two atoms per molecule.',
    },
    {
      id: 'rust-q14',
      type: 'numeric-entry',
      stem: 'A UK garden gate weighs 12 kg of iron when new. After ten years of weather, the gate has rusted heavily; the rust now weighs 14.5 kg in total (the iron has reacted with oxygen and water and so weighs more). How much oxygen and water in total has joined the iron, in kg (to one decimal place)?',
      tier: 'challenge',
      correctAnswer: 2.5,
      unit: 'kg',
      tolerance: 0.05,
      xpValue: 25,
    },
    {
      id: 'rust-q15',
      type: 'drag-order',
      stem: 'A pupil writes a wobbly account of rusting. Drag these phrases into the correct order to read as the standard word equation, left to right.',
      tier: 'core',
      items: [
        'iron oxide',
        'iron',
        '+ water',
        '→',
        '+ oxygen',
      ],
      correctOrder: [1, 4, 2, 3, 0],
      xpValue: 20,
    },
    {
      id: 'rust-q16',
      type: 'spot-misconception',
      stem: 'Aisha says: "Rusting only needs iron and oxygen. Water has nothing to do with it."',
      tier: 'core',
      statements: [
        {
          text: 'Aisha is right. Rusting is just iron + oxygen → iron oxide. Water is not part of the reaction.',
          isMisconception: true,
        },
        {
          text: 'Aisha is wrong. Rusting needs iron, oxygen AND water. The three-test-tube experiment shows it: dry-air iron does not rust even though oxygen is there. Both ingredients are needed.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'rust-mis-only-oxygen',
    },
    {
      id: 'rust-q17',
      type: 'spot-misconception',
      stem: 'Ben argues: "Painting an iron gate just hides the rust under a layer of paint. The iron is still rusting, you just cannot see it."',
      tier: 'confident',
      statements: [
        {
          text: 'Ben is right. Paint is only decoration; the iron carries on rusting underneath.',
          isMisconception: true,
        },
        {
          text: 'Ben is wrong. A paint layer keeps water and oxygen OFF the iron, so the rusting reaction has no reactants. As long as the paint is intact, the iron underneath is protected and is not rusting.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'rust-mis-paint-hides',
    },
    {
      id: 'rust-q18',
      type: 'free-text',
      stem: 'In 2 to 3 sentences, explain how the UK three-test-tube experiment proves that rusting needs BOTH oxygen and water. Refer to at least two of the tubes.',
      tier: 'confident',
      sampleAnswer:
        'In tube A, iron nails in tap water are exposed to both oxygen and water; they rust. In tube B, iron nails with silica gel have oxygen but no water; they do not rust. In tube C, iron nails in boiled water under oil have water but no oxygen; they also do not rust. Only the tube with both oxygen and water rusts, so both are needed.',
      keywords: ['oxygen', 'water', 'tube', 'rust'],
      xpValue: 20,
    },
    {
      id: 'rust-q19',
      type: 'missing-step',
      stem: 'Fill in the missing step in this account of the three-test-tube experiment.',
      tier: 'confident',
      steps: [
        'A pupil sets up three tubes A, B, C with iron nails inside',
        'Tube A holds tap water with the top open to the air',
        'Tube B holds dry air with silica gel as a drying agent',
        null,
        'After two weeks, only tube A shows orange-brown rust on the nails',
      ],
      missingStepIndex: 3,
      correctStep:
        'Tube C holds water that has been boiled to drive out dissolved oxygen, with a layer of oil floating on top to keep new air out',
      xpValue: 20,
    },
    {
      id: 'rust-q20',
      type: 'labelled-image',
      stem: 'Drag each label onto the correct tube of the three-test-tube experiment.',
      tier: 'confident',
      viewBox: '0 0 320 200',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><rect x="0" y="0" width="320" height="200" fill="#F8FAFC"/><rect x="20" y="40" width="60" height="120" rx="2" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="1.2"/><rect x="120" y="40" width="60" height="120" rx="2" fill="#FFFFFF" stroke="#475569" stroke-width="1.2"/><rect x="220" y="40" width="60" height="120" rx="2" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="1.2"/><rect x="220" y="40" width="60" height="14" fill="#FBBF24" stroke="#7C2D12" stroke-width="0.6"/><text x="50" y="34" text-anchor="middle" font-size="9" font-weight="600" fill="#1F2937">A</text><text x="150" y="34" text-anchor="middle" font-size="9" font-weight="600" fill="#1F2937">B</text><text x="250" y="34" text-anchor="middle" font-size="9" font-weight="600" fill="#1F2937">C</text></svg>',
      hotspots: [
        { id: 'rust-q20-h1', x: 16, y: 50, correctLabel: 'tap water + air → rusts' },
        { id: 'rust-q20-h2', x: 47, y: 50, correctLabel: 'dry air only → no rust' },
        { id: 'rust-q20-h3', x: 78, y: 50, correctLabel: 'boiled water + oil → no rust' },
      ],
      labels: [
        'tap water + air → rusts',
        'dry air only → no rust',
        'boiled water + oil → no rust',
        'salty water → no rust',
        'hot air only → rusts',
      ],
      xpValue: 20,
    },
    {
      id: 'rust-q21',
      type: 'multiple-choice',
      stem: 'A school caretaker in Sheffield wants to stop a steel handrail from rusting through the winter. They have three options: leave it bare, give it a thin coat of oil each month, or paint it once with weatherproof paint and re-paint every two years. Which option is BEST for stopping rust over five UK winters?',
      tier: 'challenge',
      options: [
        'Leave it bare; rust will form a useful protective layer',
        'Oil only, because oil is thicker than paint',
        'Paint and re-paint every two years; the paint barrier keeps water and oxygen off the steel for years at a time',
        'Pour salt water on it weekly to stop water reaching it',
      ],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'rust-mis-rust-protects',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Chemistry examiner report June 2020 (8462/1F), Q07 on rusting: candidates "wrote that rust forms when iron meets oxygen alone, missing the role of water". Reinforced by CGP KS3 Chemistry Study Book p.51 Common Mistake box on rusting and the three-test-tube experiment.
    {
      id: 'rust-mis-only-oxygen',
      description:
        'Rusting only needs iron and oxygen; water has nothing to do with it.',
      triggerAnswer: 'only-oxygen',
      correction:
        'In fact rusting needs iron, oxygen AND water. Iron in dry air does not rust; the three-test-tube experiment proves it.',
      reExplanation:
        'In the dry-air tube of the school experiment, iron nails sit in oxygen with a drying agent. Even after weeks, the nails stay shiny. Once water is added, rust forms within days. Both oxygen and water must be on the metal surface for rusting to happen. This is why iron in a dry shed lasts much longer than iron left out in UK rain.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2018 (1CH0/1F), Q06 on rusting: candidates "wrote that rust forms when iron meets water, ignoring the oxygen". Reinforced by Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question sets on rusting.
    {
      id: 'rust-mis-only-water',
      description:
        'Rusting only needs iron and water; the role of oxygen is not important.',
      triggerAnswer: 'only-water',
      correction:
        'In fact rusting needs iron, water AND oxygen. Iron under boiled water with no fresh air does not rust; the three-test-tube experiment proves it.',
      reExplanation:
        'In the boiled-water-with-oil tube of the school experiment, iron nails sit in water with no oxygen (boiled out, then sealed under oil). The nails stay shiny for weeks. Add air and rust starts. Both water and oxygen must be on the iron surface; one alone is not enough.',
    },
    // Source: CGP KS3 Chemistry Study Book p.51 Common Mistake box on corrosion prevention: "Some students think paint just hides rust, missing that paint blocks water and air from reaching the metal". Reinforced by RSC Education article "Misconceptions in chemistry: corrosion" (rsc.org/education, accessed 2026-05-10).
    {
      id: 'rust-mis-paint-hides',
      description:
        'Painting iron only hides rust visually; the iron underneath carries on rusting just the same.',
      triggerAnswer: 'paint-hides',
      correction:
        'In fact paint blocks water and oxygen from reaching the iron, so the rusting reaction is starved of two of its reactants and stops. While the paint stays intact, the iron underneath is protected.',
      reExplanation:
        'Rusting needs iron + oxygen + water. A paint layer is a thin barrier that keeps water and oxygen off the iron surface. With no oxygen and no water reaching the metal, the reaction has no reactants and cannot run. This is why the Forth Bridge is repainted continuously: the moment paint cracks or wears, oxygen and water can reach the iron and rust resumes underneath.',
    },
    // Source: AQA GCSE Combined Science examiner report June 2021 (8464/C/1F), Q08 on corrosion prevention: candidates "wrote that a layer of rust protects the iron underneath, confusing iron with aluminium". Reinforced by CGP KS3 Chemistry Study Book p.51 chapter on corrosion.
    {
      id: 'rust-mis-rust-protects',
      description:
        'A layer of rust protects the iron underneath, the way the metal under aluminium oxide is protected.',
      triggerAnswer: 'rust-protects',
      correction:
        'In fact rust does not protect iron. Rust is flaky and crumbles off, exposing fresh iron underneath, which then rusts in turn. Iron objects rust right through over the years.',
      reExplanation:
        'Aluminium oxide is dense and clings to the metal surface, so it stops fresh oxygen and water reaching the metal. Iron oxide (rust) is the opposite: it forms loose flakes that drop away. So an unprotected iron gate keeps rusting deeper and deeper until it is paper-thin. That is why iron gates need painting; aluminium gates do not.',
    },
    // Source: Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question sets on rusting and salt: a recurring Year 7 expectation is that "salt is the rusting agent, not oxygen and water". Reinforced by RSC Education classroom resource on corrosion in seawater.
    {
      id: 'rust-mis-salt-replaces',
      description:
        'Salt is the real cause of rusting; sea air is special because the salt rusts metal directly.',
      triggerAnswer: 'salt-replaces',
      correction:
        'In fact salt is not a reactant in rusting; rusting still needs iron, oxygen and water. Salt makes rusting faster but does not replace any of the three ingredients.',
      reExplanation:
        'A nail in pure tap water rusts; a nail in salty seawater also rusts, only faster. A nail in dry salt powder with no water does not rust. So salt is a speed-up, not a reactant. The actual reaction is still iron + oxygen + water → iron oxide. This is why bridges by the sea, and cars driven on UK roads gritted with rock salt in winter, rust faster than ones inland.',
    },
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education (2004 update). Year 7 learners often think rust is a separate substance "stuck on" iron rather than iron itself transformed. Reinforced by CGP KS3 Chemistry Study Book p.51 chapter on the chemistry of rust.
    {
      id: 'rust-mis-rust-stuck-on',
      description:
        'Rust is a layer of dust or dirt that lands on iron from the air, not iron itself transformed into a new substance.',
      triggerAnswer: 'rust-stuck-on',
      correction:
        'In fact rust IS the iron itself, joined with oxygen and water atoms. Rust is iron oxide; the orange-brown flakes ARE the iron, chemically changed.',
      reExplanation:
        'Pick up a rusty bolt and weigh it. The bolt is heavier than it was when shiny because the iron has joined with oxygen and water to make iron oxide; the new mass has come from the air and the rain. Scrape rust off and underneath is less iron than there was, not the same amount with a layer added on top. So the iron has chemically changed, not just gathered dirt.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
