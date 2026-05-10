import type { SkillNode, Zone } from '@/types/content'

export const atomsElementsCompoundsBasics: SkillNode = {
  id: 'chemistry-atoms-elements-compounds-basics',
  title: 'Atoms, Elements, Compounds and Mixtures',
  description:
    'Build the core idea that an atom is the smallest particle of a substance, an element is made of one type of atom, a compound is two or more different atoms chemically bonded, and a mixture is two or more substances simply mixed together with no chemical bond.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-atoms-elements-compounds',
  zoneName: 'Atoms, Elements, Compounds',
  tier: 'core',
  prerequisites: ['chemistry-particle-model-states'],
  curriculum: {
    ks3Objective:
      'A simple (Dalton) atomic model; differences between atoms, elements and compounds; chemical symbols and formulae for elements and compounds; conservation of mass changes of state and chemical reactions.',
    awardingBodies: {
      aqa: '4.1.1.1 Atoms, elements and compounds; 4.1.1.2 Mixtures (8462)',
      edexcel:
        'Topic 1.1 Atoms, elements and compounds; 1.41 Pure substances and mixtures (1CH0)',
      ocr: 'C1.1a Atoms, elements and compounds; C2.1a Pure and impure substances (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'aec-scene-atom',
      title: 'The Atom: The Smallest Building Block',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the simple atom picture to see what we mean by an atom and why every chemical idea starts here.',
      data: {
        viewBox: '0 0 320 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#FEF3C7"/><circle cx="160" cy="110" r="70" fill="none" stroke="#94A3B8" stroke-width="0.8" stroke-dasharray="3 3"/><circle cx="160" cy="110" r="22" fill="#1E3A8A" stroke="#0F172A" stroke-width="1.5"/><circle cx="156" cy="106" r="6" fill="#FBBF24" opacity="0.8"/><circle cx="160" cy="40" r="6" fill="#3B82F6" stroke="#1E3A8A" stroke-width="0.8"/><circle cx="230" cy="110" r="6" fill="#3B82F6" stroke="#1E3A8A" stroke-width="0.8"/><circle cx="160" cy="180" r="6" fill="#3B82F6" stroke="#1E3A8A" stroke-width="0.8"/><circle cx="90" cy="110" r="6" fill="#3B82F6" stroke="#1E3A8A" stroke-width="0.8"/><text x="160" y="208" text-anchor="middle" font-size="9" fill="#1E3A8A" font-weight="600">A SINGLE ATOM</text></svg>',
        hotspots: [
          {
            id: 'aec-h-atom-whole',
            x: 50,
            y: 50,
            label: 'The whole atom',
            description:
              'An atom is the smallest particle of a substance that still keeps the properties of that substance.',
          },
          {
            id: 'aec-h-atom-nucleus',
            x: 50,
            y: 50,
            label: 'Tiny central nucleus',
            description:
              'The nucleus sits at the centre and holds almost all of the mass of the atom.',
          },
          {
            id: 'aec-h-atom-electrons',
            x: 80,
            y: 50,
            label: 'Electrons in shells around it',
            description:
              'Tiny electrons move in shells around the nucleus. They take up most of the room of the atom.',
          },
          {
            id: 'aec-h-atom-size',
            x: 50,
            y: 92,
            label: 'Smaller than we can see',
            description:
              'A line of about ten million atoms would fit across one millimetre on a ruler. Atoms cannot be seen with a normal light microscope.',
          },
        ],
      },
    },
    {
      id: 'aec-scene-element',
      title: 'An Element: One Type of Atom',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how an element is made of just one type of atom, with three real UK examples.',
      data: {
        viewBox: '0 0 320 200',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><rect x="0" y="0" width="320" height="200" fill="#FEF3C7"/><g><rect x="20" y="40" width="80" height="100" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1.2"/><g fill="#B45309" stroke="#7C2D12" stroke-width="0.6"><circle cx="35" cy="60" r="6"/><circle cx="55" cy="60" r="6"/><circle cx="75" cy="60" r="6"/><circle cx="35" cy="80" r="6"/><circle cx="55" cy="80" r="6"/><circle cx="75" cy="80" r="6"/><circle cx="35" cy="100" r="6"/><circle cx="55" cy="100" r="6"/><circle cx="75" cy="100" r="6"/><circle cx="35" cy="120" r="6"/><circle cx="55" cy="120" r="6"/><circle cx="75" cy="120" r="6"/></g><text x="60" y="32" text-anchor="middle" font-size="9" fill="#1E3A8A" font-weight="600">COPPER (Cu)</text><text x="60" y="155" text-anchor="middle" font-size="8" fill="#7C2D12">a 2p coin</text></g><g><rect x="120" y="40" width="80" height="100" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1.2"/><g fill="#94A3B8" stroke="#475569" stroke-width="0.6"><circle cx="135" cy="60" r="6"/><circle cx="155" cy="60" r="6"/><circle cx="175" cy="60" r="6"/><circle cx="135" cy="80" r="6"/><circle cx="155" cy="80" r="6"/><circle cx="175" cy="80" r="6"/><circle cx="135" cy="100" r="6"/><circle cx="155" cy="100" r="6"/><circle cx="175" cy="100" r="6"/><circle cx="135" cy="120" r="6"/><circle cx="155" cy="120" r="6"/><circle cx="175" cy="120" r="6"/></g><text x="160" y="32" text-anchor="middle" font-size="9" fill="#1E3A8A" font-weight="600">IRON (Fe)</text><text x="160" y="155" text-anchor="middle" font-size="8" fill="#475569">a garden nail</text></g><g><rect x="220" y="40" width="80" height="100" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1.2"/><g fill="#A855F7" stroke="#581C87" stroke-width="0.6" opacity="0.8"><circle cx="235" cy="65" r="4"/><circle cx="265" cy="55" r="4"/><circle cx="285" cy="80" r="4"/><circle cx="240" cy="100" r="4"/><circle cx="270" cy="115" r="4"/><circle cx="290" cy="125" r="4"/><circle cx="245" cy="130" r="4"/></g><text x="260" y="32" text-anchor="middle" font-size="9" fill="#1E3A8A" font-weight="600">HELIUM (He)</text><text x="260" y="155" text-anchor="middle" font-size="8" fill="#581C87">in a party balloon</text></g><text x="160" y="180" text-anchor="middle" font-size="9" fill="#1E3A8A">Each box holds only one type of atom.</text></svg>',
        hotspots: [
          {
            id: 'aec-h-elem-copper',
            x: 19,
            y: 50,
            label: 'Copper: only copper atoms',
            description:
              'A 2p coin is mostly copper plated steel. The copper layer is built from billions of identical copper atoms, so copper is an element.',
          },
          {
            id: 'aec-h-elem-iron',
            x: 50,
            y: 50,
            label: 'Iron: only iron atoms',
            description:
              'A garden nail is mostly iron, which is also an element. Every atom in a piece of pure iron is the same kind.',
          },
          {
            id: 'aec-h-elem-helium',
            x: 81,
            y: 50,
            label: 'Helium: only helium atoms',
            description:
              'A party balloon filled with helium holds only helium atoms. Helium is a gas at room temperature, but it is still an element.',
          },
          {
            id: 'aec-h-elem-rule',
            x: 50,
            y: 92,
            label: 'The rule for an element',
            description:
              'A substance is an element if it is made of only one type of atom. There are about 90 naturally occurring elements.',
          },
        ],
      },
    },
    {
      id: 'aec-scene-compound-mixture',
      title: 'Compound vs Mixture: The Big Year 7 Test',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare a compound with a mixture and see why a compound is a brand new substance, but a mixture is not.',
      data: {
        viewBox: '0 0 320 200',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><rect x="0" y="0" width="320" height="200" fill="#FEF3C7"/><g><rect x="20" y="40" width="120" height="120" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1.2"/><text x="80" y="32" text-anchor="middle" font-size="9" fill="#1E3A8A" font-weight="600">COMPOUND: WATER (H2O)</text><g><circle cx="55" cy="80" r="11" fill="#EF4444" stroke="#7F1D1D" stroke-width="0.8"/><circle cx="42" cy="68" r="5" fill="#FFFFFF" stroke="#475569" stroke-width="0.6"/><circle cx="68" cy="68" r="5" fill="#FFFFFF" stroke="#475569" stroke-width="0.6"/><line x1="55" y1="80" x2="42" y2="68" stroke="#475569" stroke-width="1"/><line x1="55" y1="80" x2="68" y2="68" stroke="#475569" stroke-width="1"/></g><g><circle cx="105" cy="125" r="11" fill="#EF4444" stroke="#7F1D1D" stroke-width="0.8"/><circle cx="92" cy="113" r="5" fill="#FFFFFF" stroke="#475569" stroke-width="0.6"/><circle cx="118" cy="113" r="5" fill="#FFFFFF" stroke="#475569" stroke-width="0.6"/><line x1="105" y1="125" x2="92" y2="113" stroke="#475569" stroke-width="1"/><line x1="105" y1="125" x2="118" y2="113" stroke="#475569" stroke-width="1"/></g><text x="80" y="153" text-anchor="middle" font-size="7" fill="#7F1D1D">red = oxygen, white = hydrogen</text></g><g><rect x="180" y="40" width="120" height="120" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1.2"/><text x="240" y="32" text-anchor="middle" font-size="9" fill="#1E3A8A" font-weight="600">MIXTURE: AIR</text><g><circle cx="200" cy="65" r="6" fill="#3B82F6" stroke="#1E3A8A" stroke-width="0.6"/><circle cx="212" cy="65" r="6" fill="#3B82F6" stroke="#1E3A8A" stroke-width="0.6"/><line x1="206" y1="65" x2="206" y2="65" stroke="#1E3A8A" stroke-width="0.8"/><line x1="200" y1="65" x2="212" y2="65" stroke="#1E3A8A" stroke-width="1"/></g><g><circle cx="240" cy="80" r="6" fill="#22C55E" stroke="#14532D" stroke-width="0.6"/><circle cx="252" cy="80" r="6" fill="#22C55E" stroke="#14532D" stroke-width="0.6"/><line x1="240" y1="80" x2="252" y2="80" stroke="#14532D" stroke-width="1"/></g><g><circle cx="270" cy="120" r="6" fill="#3B82F6" stroke="#1E3A8A" stroke-width="0.6"/><circle cx="282" cy="120" r="6" fill="#3B82F6" stroke="#1E3A8A" stroke-width="0.6"/><line x1="270" y1="120" x2="282" y2="120" stroke="#1E3A8A" stroke-width="1"/></g><g><circle cx="200" cy="135" r="6" fill="#22C55E" stroke="#14532D" stroke-width="0.6"/><circle cx="212" cy="135" r="6" fill="#22C55E" stroke="#14532D" stroke-width="0.6"/><line x1="200" y1="135" x2="212" y2="135" stroke="#14532D" stroke-width="1"/></g><g><circle cx="225" cy="115" r="5" fill="#A855F7" stroke="#581C87" stroke-width="0.6" opacity="0.85"/></g><text x="240" y="153" text-anchor="middle" font-size="7" fill="#1E3A8A">blue = nitrogen, green = oxygen</text></g></svg>',
        hotspots: [
          {
            id: 'aec-h-cm-water',
            x: 25,
            y: 60,
            label: 'Water: a compound',
            description:
              'Water is two hydrogen atoms chemically bonded to one oxygen atom in every water particle. The bonded atoms make a brand new substance with new properties.',
          },
          {
            id: 'aec-h-cm-bond',
            x: 25,
            y: 92,
            label: 'Atoms are chemically bonded',
            description:
              'In a compound the atoms are joined by a chemical bond. The only way to split them apart is a chemical reaction.',
          },
          {
            id: 'aec-h-cm-air',
            x: 75,
            y: 60,
            label: 'Air: a mixture',
            description:
              'Air is mostly nitrogen molecules and oxygen molecules floating around together. The molecules themselves are not bonded to each other.',
          },
          {
            id: 'aec-h-cm-mix-rule',
            x: 75,
            y: 92,
            label: 'Mixtures keep their parts',
            description:
              'In a mixture each substance keeps its own properties, and a physical method like filtration or distillation can separate them again.',
          },
        ],
      },
    },
    {
      id: 'aec-scene-sort',
      title: 'Sort the UK Kitchen Cupboard',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the kitchen scene to read whether the substance is an element, a compound or a mixture.',
      data: {
        viewBox: '0 0 320 200',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><rect x="0" y="0" width="320" height="200" fill="#FEF3C7"/><rect x="0" y="170" width="320" height="30" fill="#D6D3D1"/><g><rect x="20" y="80" width="50" height="80" rx="3" fill="#FFFFFF" stroke="#475569"/><rect x="22" y="95" width="46" height="50" fill="#F8FAFC"/><text x="45" y="165" text-anchor="middle" font-size="7" fill="#1E3A8A">SALT</text><text x="45" y="125" text-anchor="middle" font-size="7" fill="#475569">NaCl</text></g><g><rect x="90" y="80" width="50" height="80" rx="3" fill="#BFDBFE" stroke="#1E3A8A"/><rect x="92" y="100" width="46" height="50" fill="#3B82F6" opacity="0.4"/><text x="115" y="165" text-anchor="middle" font-size="7" fill="#1E3A8A">TAP WATER</text></g><g><rect x="160" y="80" width="50" height="80" rx="3" fill="#FFFFFF" stroke="#475569"/><rect x="162" y="95" width="46" height="50" fill="#FEF3C7"/><text x="185" y="165" text-anchor="middle" font-size="7" fill="#1E3A8A">SUGAR</text></g><g><rect x="230" y="80" width="50" height="80" rx="3" fill="#94A3B8" stroke="#475569"/><circle cx="240" cy="95" r="3" fill="#FBBF24"/><circle cx="255" cy="100" r="3" fill="#FBBF24"/><circle cx="270" cy="92" r="3" fill="#FBBF24"/><text x="255" y="165" text-anchor="middle" font-size="7" fill="#1E3A8A">A 1p COIN</text></g></svg>',
        hotspots: [
          {
            id: 'aec-h-sort-salt',
            x: 14,
            y: 60,
            label: 'Salt: a compound',
            description:
              'Common table salt is sodium chloride. Each particle has one sodium atom bonded to one chlorine atom, so salt is a compound.',
          },
          {
            id: 'aec-h-sort-tap',
            x: 36,
            y: 60,
            label: 'Tap water: a mixture',
            description:
              'Tap water is mostly water (a compound) with small amounts of dissolved salts and minerals. Because there is more than one substance present, it is a mixture.',
          },
          {
            id: 'aec-h-sort-sugar',
            x: 58,
            y: 60,
            label: 'Sugar: a compound',
            description:
              'Sugar (sucrose) is built from carbon, hydrogen and oxygen atoms bonded together in every grain. Different atoms bonded together makes it a compound.',
          },
          {
            id: 'aec-h-sort-coin',
            x: 80,
            y: 60,
            label: '1p coin: a mixture (but copper plating is an element)',
            description:
              'A 1p coin is steel coated in copper. The copper coating is one element, but the coin overall holds steel and copper, so the coin as a whole is a mixture.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'aec-worked-1',
      title: 'Sorting a particle picture into element, compound or mixture',
      steps: [
        {
          explanation:
            'Question: a picture shows a box of particles. Some particles are single red circles. Others are single blue circles. None of them are joined to each other. Is the box an element, a compound or a mixture?',
        },
        {
          explanation:
            'Step 1: count the kinds of atom. Two kinds are present, red and blue. So this cannot be an element, because an element has only one kind of atom.',
          maths: 'kinds of atom present: 2',
        },
        {
          explanation:
            'Step 2: check whether the different atoms are bonded together. Each red circle is on its own, and each blue circle is on its own. Nothing is joined to anything else.',
          maths: 'bonds between different atoms: 0',
        },
        {
          explanation:
            'Step 3: apply the rule. Two or more substances mixed together with no chemical bond between them is a mixture.',
        },
        {
          explanation:
            'So the box shows a mixture of two elements. If the red and blue circles had been joined together, it would have been a compound.',
        },
      ],
    },
    {
      id: 'aec-worked-2',
      title: 'Why a sugar solution is a mixture, not a compound',
      steps: [
        {
          explanation:
            'Question: Aisha stirs a teaspoon of sugar into a mug of tea until the sugar fully dissolves. Is the sweet tea now a compound or a mixture?',
        },
        {
          explanation:
            'Step 1: check whether each substance still keeps its own properties. The water still tastes like water, the sugar still tastes sweet when she sips it.',
          maths: 'sugar still detectable by taste',
        },
        {
          explanation:
            'Step 2: check whether the sugar can be recovered without a chemical reaction. If the mug were left on a sunny windowsill until the water evaporated, sugar crystals would be left at the bottom of the mug.',
          maths: 'evaporate the water and sugar comes back',
        },
        {
          explanation:
            'Step 3: apply the rule. Because each substance keeps its own properties and the dissolved sugar can be recovered by evaporating the water, the sugar and water have not bonded chemically.',
        },
        {
          explanation:
            'So the sweet tea is a mixture, even though it looks clear. Sugar plus water becomes "sugar dissolved in water", not a brand new compound.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'aec-q1',
      type: 'multiple-choice',
      stem: 'Which sentence describes an atom?',
      tier: 'core',
      options: [
        'The smallest particle of a substance that still keeps the properties of that substance',
        'A liquid drop made of millions of substances',
        'A single chemical reaction between two substances',
        'The empty space between particles in a solid',
      ],
      correctIndex: 0,
      xpValue: 10,
    },
    {
      id: 'aec-q2',
      type: 'multiple-choice',
      stem: 'How many different kinds of atom are in a sample of pure copper?',
      tier: 'core',
      options: [
        'Two: copper and oxygen',
        'About ninety, one for each element',
        'One: copper',
        'Three: protons, neutrons and electrons',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'aec-mis-element-multi-atom',
    },
    {
      id: 'aec-q3',
      type: 'multiple-choice',
      stem: 'Which of these substances is an element?',
      tier: 'core',
      options: [
        'Salt',
        'Water',
        'Air',
        'Helium',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'aec-mis-water-element',
    },
    {
      id: 'aec-q4',
      type: 'multiple-choice',
      stem: 'A pupil writes: "A compound is two or more different kinds of atom that are chemically bonded together." Which substance fits that description?',
      tier: 'core',
      options: [
        'Iron in a garden nail',
        'Water in a kettle',
        'Air in a balloon',
        'Helium in a party balloon',
      ],
      correctIndex: 1,
      xpValue: 10,
    },
    {
      id: 'aec-q5',
      type: 'free-text',
      stem: 'Write one sentence that names the main feature a mixture has that a compound does not.',
      tier: 'core',
      sampleAnswer:
        'In a mixture the substances are not chemically bonded, so they can be separated again by a physical method such as filtration or evaporation.',
      keywords: ['separate', 'physical', 'bond'],
      xpValue: 10,
      hint: 'Think about how you could pull a mixture apart again, and whether you could do the same with a compound.',
      misconceptionId: 'aec-mis-mixture-equals-compound',
    },
    {
      id: 'aec-q6',
      type: 'numeric-entry',
      stem: 'A diagram shows a single particle of carbon dioxide. The particle has one carbon atom in the middle and two oxygen atoms either side, all bonded together. How many atoms are in this one particle of carbon dioxide?',
      tier: 'core',
      correctAnswer: 3,
      xpValue: 10,
      hint: 'Count every atom in the particle, of any kind.',
    },
    {
      id: 'aec-q7',
      type: 'numeric-entry',
      stem: 'A diagram shows a single particle of carbon dioxide with one carbon atom and two oxygen atoms bonded together. How many different kinds of atom are in the particle?',
      tier: 'core',
      correctAnswer: 2,
      xpValue: 10,
      hint: 'Count the kinds of atom, not the total number of atoms.',
    },
    {
      id: 'aec-q8',
      type: 'drag-order',
      stem: 'Place these four substances in order of how many different kinds of atom they hold, from fewest to most.',
      tier: 'core',
      items: [
        'Air (a mixture of nitrogen, oxygen, argon and others)',
        'Water (a compound of hydrogen and oxygen)',
        'Helium gas (an element)',
      ],
      correctOrder: [2, 1, 0],
      xpValue: 15,
    },
    {
      id: 'aec-q10',
      type: 'multiple-choice',
      stem: 'A glass holds clear sugar water that Aisha made by stirring sugar into water until it dissolved. Is the sugar water a compound or a mixture?',
      tier: 'confident',
      options: [
        'A compound, because the sugar has chemically bonded with the water',
        'A mixture, because the sugar and water are simply mixed together with no chemical bond',
        'An element, because it looks like a single substance',
        'Neither: dissolving makes a new kind of substance with no name',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'aec-mis-dissolved-bonded',
    },
    {
      id: 'aec-q11',
      type: 'multiple-choice',
      stem: 'Sea water in the English Channel holds water, dissolved salt and small amounts of other dissolved minerals. Which of the following best describes sea water?',
      tier: 'confident',
      options: [
        'A pure element, because every drop looks the same',
        'A pure compound, because the salt and water have bonded',
        'A mixture, because more than one substance is present and each can be separated by physical methods',
        'Neither a mixture nor a compound, because dissolving destroys the original substances',
      ],
      correctIndex: 2,
      xpValue: 15,
    },
    {
      id: 'aec-q12',
      type: 'multiple-choice',
      stem: 'Brass is a yellow metal used in school music room trumpets. It is made by melting copper and zinc together so they mix evenly while liquid. Which of the following best describes brass?',
      tier: 'confident',
      options: [
        'A compound, because the copper and zinc are chemically bonded',
        'An element, because it has its own colour and is one solid block',
        'A pure substance, because it has a fixed colour',
        'A mixture (an alloy) of two metal elements',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'aec-mis-alloy-compound',
    },
    {
      id: 'aec-q13',
      type: 'spot-misconception',
      stem: 'Tom says: "When sugar dissolves in tea, the sugar bonds with the water, so the sweet tea must be a compound." Is he right?',
      tier: 'confident',
      statements: [
        {
          text: 'Tom is right. Dissolving is a kind of chemical reaction, so a new compound forms.',
          isMisconception: true,
        },
        {
          text: 'Tom is wrong. Dissolving spreads the sugar particles between the water particles without making chemical bonds, so the sweet tea is still a mixture.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'aec-mis-dissolved-bonded',
    },
    {
      id: 'aec-q14',
      type: 'labelled-image',
      stem: 'Drag the correct label onto each particle picture. The first box has only red circles. The second has red circles bonded to blue ones. The third has red circles and blue circles loose, with no bonds.',
      tier: 'confident',
      viewBox: '0 0 320 140',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 140"><rect x="0" y="0" width="320" height="140" fill="#F8FAFC"/><g><rect x="10" y="20" width="90" height="100" fill="#FFFFFF" stroke="#475569"/><circle cx="30" cy="40" r="8" fill="#EF4444"/><circle cx="55" cy="50" r="8" fill="#EF4444"/><circle cx="80" cy="40" r="8" fill="#EF4444"/><circle cx="35" cy="80" r="8" fill="#EF4444"/><circle cx="60" cy="90" r="8" fill="#EF4444"/><circle cx="85" cy="80" r="8" fill="#EF4444"/></g><g><rect x="115" y="20" width="90" height="100" fill="#FFFFFF" stroke="#475569"/><g><circle cx="135" cy="50" r="8" fill="#EF4444"/><circle cx="153" cy="50" r="6" fill="#3B82F6"/><line x1="135" y1="50" x2="153" y2="50" stroke="#475569" stroke-width="1.2"/></g><g><circle cx="170" cy="80" r="8" fill="#EF4444"/><circle cx="188" cy="80" r="6" fill="#3B82F6"/><line x1="170" y1="80" x2="188" y2="80" stroke="#475569" stroke-width="1.2"/></g><g><circle cx="140" cy="100" r="8" fill="#EF4444"/><circle cx="158" cy="100" r="6" fill="#3B82F6"/><line x1="140" y1="100" x2="158" y2="100" stroke="#475569" stroke-width="1.2"/></g></g><g><rect x="220" y="20" width="90" height="100" fill="#FFFFFF" stroke="#475569"/><circle cx="240" cy="40" r="8" fill="#EF4444"/><circle cx="265" cy="50" r="6" fill="#3B82F6"/><circle cx="290" cy="40" r="8" fill="#EF4444"/><circle cx="245" cy="75" r="6" fill="#3B82F6"/><circle cx="270" cy="90" r="8" fill="#EF4444"/><circle cx="295" cy="80" r="6" fill="#3B82F6"/><circle cx="240" cy="105" r="8" fill="#EF4444"/></g></svg>',
      hotspots: [
        { id: 'aec-q14-h1', x: 17, y: 50, correctLabel: 'Element' },
        { id: 'aec-q14-h2', x: 50, y: 50, correctLabel: 'Compound' },
        { id: 'aec-q14-h3', x: 83, y: 50, correctLabel: 'Mixture' },
      ],
      labels: ['Element', 'Compound', 'Mixture', 'Atom', 'Solution'],
      xpValue: 20,
    },
    {
      id: 'aec-q15',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: Aisha is told that one drop of sea water holds water, dissolved sodium chloride and dissolved magnesium sulfate. She is asked whether the drop is a compound or a mixture, and to explain her reasoning.',
      tier: 'confident',
      steps: [
        'A compound is two or more different kinds of atom that are chemically bonded into a single new substance with one fixed makeup.',
        'A mixture is two or more substances mixed together with no chemical bond, where each substance keeps its own properties and can be separated by a physical method.',
        null,
        'So the drop of sea water is a mixture, not a compound. The water, the sodium chloride and the magnesium sulfate can each be recovered by physical methods such as evaporation.',
      ],
      missingStepIndex: 2,
      correctStep:
        'In the drop of sea water, the water, the sodium chloride and the magnesium sulfate are simply spread between each other. They are not chemically bonded into one new substance.',
      xpValue: 20,
    },
    {
      id: 'aec-q16',
      type: 'numeric-entry',
      stem: 'A teacher in Sevenoaks shows a particle diagram with 12 hydrogen atoms and 6 oxygen atoms, all loose with no bonds drawn. How many different kinds of atom are present in the box?',
      tier: 'confident',
      correctAnswer: 2,
      xpValue: 15,
      hint: 'Count the kinds of atom: hydrogen and oxygen.',
    },
    {
      id: 'aec-q17',
      type: 'multiple-choice',
      stem: 'A pupil makes a particle picture of a single water molecule with two hydrogen atoms bonded to one oxygen atom. They then add nine more identical molecules to the same box, each one a hydrogen-oxygen-hydrogen unit. Which best describes the box?',
      tier: 'challenge',
      options: [
        'A pure compound, because every particle has the same makeup of two hydrogens bonded to one oxygen',
        'A mixture of two elements, because both hydrogen and oxygen are present',
        'A new element with hydrogen and oxygen as parts',
        'An impossible drawing, because hydrogen and oxygen cannot bond',
      ],
      correctIndex: 0,
      xpValue: 25,
    },
    {
      id: 'aec-q18',
      type: 'multiple-choice',
      stem: 'A school chemistry teacher tells the class that pure copper is an element, the copper plus zinc inside an old penny is brass and is therefore a mixture, and that the green crust on an old church roof in Tunbridge Wells is mostly copper carbonate, where copper, carbon and oxygen atoms are all bonded together. Which best describes the green crust?',
      tier: 'challenge',
      options: [
        'A mixture, because three substances are present',
        'An element, because copper is in the name',
        'A compound, because the copper, carbon and oxygen atoms are chemically bonded into one new substance',
        'A pure metal, because the green colour comes from the copper',
      ],
      correctIndex: 2,
      xpValue: 25,
    },
    {
      id: 'aec-q19',
      type: 'multiple-choice',
      stem: 'A jar holds three substances: small iron filings, table salt and dry sand. None of them have been heated or wetted. Which of the following best describes the jar?',
      tier: 'challenge',
      options: [
        'A new compound formed from iron, salt and sand',
        'An element with three names',
        'A pure substance, because it sits as one block in the jar',
        'A mixture, because the three substances can each be separated again by physical methods',
      ],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'aec-mis-mixture-equals-compound',
    },
    {
      id: 'aec-q20',
      type: 'spot-misconception',
      stem: 'Liam says: "Iron filings stuck to a magnet must be a compound, because two things are touching." Is he right?',
      tier: 'challenge',
      statements: [
        {
          text: 'Liam is right. Two substances touching always counts as a compound.',
          isMisconception: true,
        },
        {
          text: 'Liam is wrong. Touching alone is not a chemical bond. The iron filings are still iron, and the magnet is still a magnet, so the pair is a mixture if anything.',
          isMisconception: false,
        },
      ],
      xpValue: 25,
      misconceptionId: 'aec-mis-touching-bonded',
    },
    {
      id: 'aec-q21',
      type: 'numeric-entry',
      stem: 'A particle picture shows three identical molecules of methane. Each methane molecule has one carbon atom bonded to four hydrogen atoms. What is the total number of atoms shown in the picture?',
      tier: 'challenge',
      correctAnswer: 15,
      xpValue: 25,
      hint: 'Each molecule has 1 + 4 atoms. There are three molecules in the picture.',
    },
  ],
  misconceptions: [
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education (https://edu.rsc.org/particle-diagrams/students-ideas-about-the-particulate-nature-of-matter-beyond-appearances/4017763.article): documents the persistent learner belief that "compounds and mixtures are similar", with learners in particular treating mixtures of two substances as a compound. Reinforced by AQA GCSE Chemistry examiner report June 2019 (8462/1F), Q03 on element/compound/mixture identification: candidates "frequently described mixtures as compounds where two or more elements were present together".
    {
      id: 'aec-mis-mixture-equals-compound',
      description:
        'Any sample with more than one kind of substance is a compound, no matter how the substances are joined together.',
      triggerAnswer: 'mixture-equals-compound',
      correction:
        'In fact a compound only forms when different atoms are chemically bonded into a brand new substance. Substances simply mixed together without bonding form a mixture.',
      reExplanation:
        'Picture a jar of iron filings poured in next to a heap of yellow sulfur powder. Both substances are present, but each grain of iron is still iron, and each grain of sulfur is still sulfur. A magnet still picks up the iron alone. Because nothing has bonded, the jar holds a mixture, not a compound. To make the compound iron sulfide, the jar would need to be heated until the iron and sulfur atoms react and bond.',
    },
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education: Year 7 learners often classify water and air as elements because both look like a single uniform substance. Reinforced by Edexcel GCSE Chemistry examiner report June 2018 (1CH0/1F), Q05: "many candidates incorrectly identified water as an element rather than a compound."
    {
      id: 'aec-mis-water-element',
      description:
        'Water is an element because it looks like a single clear liquid with no parts you can see.',
      triggerAnswer: 'water-element',
      correction:
        'In fact every water particle is two hydrogen atoms chemically bonded to one oxygen atom, so water is a compound built from two different elements.',
      reExplanation:
        'Looking at a glass of water cannot tell us how many kinds of atom are inside, because atoms are far too small to see. Chemists know water is a compound because they can split it back into hydrogen gas and oxygen gas using a chemical method called electrolysis. The recipe for water is always the same: two hydrogens bonded to one oxygen, written H2O. Two different kinds of atom bonded together makes it a compound, not an element.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2018 (8462/1F), Q03 on the difference between elements, compounds and mixtures: candidates "wrote that a sample of pure iron contained both iron and oxygen atoms, mistaking the metallic appearance for a compound." Reinforced by CGP KS3 Chemistry common-mistake callouts on the element definition.
    {
      id: 'aec-mis-element-multi-atom',
      description:
        'A pure element can have more than one kind of atom, as long as they share a single appearance.',
      triggerAnswer: 'element-multi-atom',
      correction:
        'In fact an element is made of only one kind of atom. If a sample has more than one kind, it is either a compound or a mixture.',
      reExplanation:
        'Pure copper is an element because every atom in it is a copper atom. Add even one different atom into the sample and it stops being pure copper. The same rule holds for iron, helium, gold and the other roughly ninety natural elements: one kind of atom, throughout. The kind of atom is also called the element.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2019 (8462/1F), Q04 on dissolving and chemical change: candidates often wrote that "salt dissolved in water becomes a new compound, because the salt has joined with the water." Reinforced by Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question sets on dissolving and on identifying chemical change.
    {
      id: 'aec-mis-dissolved-bonded',
      description:
        'When something dissolves, the substance and the liquid bond chemically into a new compound.',
      triggerAnswer: 'dissolved-bonded',
      correction:
        'In fact dissolving spreads the dissolved particles between the liquid particles without forming a chemical bond. The result is a mixture (a solution), not a compound.',
      reExplanation:
        'Stir sugar into a mug of tea until the sugar disappears from view. The sugar particles have not vanished, they have spread evenly between the water particles. The tea now tastes sweet because the sugar particles are still there, still sugar. Evaporate the water and the sugar reappears unchanged. No new compound has been made; the sugar and the water are just mixed together at the particle level.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2020 (1CH0/1F), Q06 on physical and chemical change: candidates "labelled iron filings clinging to a magnet as a chemical compound, mistaking attraction for a chemical bond." Reinforced by Vanessa Kind's RSC "Beyond Appearances" misconception summary, which documents Year 7 learners equating contact or attraction with bonding.
    {
      id: 'aec-mis-touching-bonded',
      description:
        'Two substances that are touching, sticking or otherwise stuck together are chemically bonded into a compound.',
      triggerAnswer: 'touching-bonded',
      correction:
        'In fact a chemical bond is a particle-level link between atoms, not just two materials being in contact. Touching is a physical situation; bonding takes a chemical reaction.',
      reExplanation:
        'Iron filings clinging to a magnet are still iron filings. Pull the magnet away and the filings drop off, completely unchanged. Compare this with iron and sulfur powder heated in a test tube, which actually react to form iron sulfide. The new black solid does not behave like iron or sulfur on its own. That is what a chemical bond looks like at the macro scale: a brand new substance with new properties, not just two materials in contact.',
    },
    // Source: David Paterson, "Teaching elements, compounds and mixtures at Key Stage 3", RSC Education CPD article (2021-04-13): notes that Year 7 pupils who can list "metals" as an element category often write that an alloy is a compound rather than a mixture, missing that the metal atoms in an alloy are simply mixed together. Reinforced by AQA GCSE Chemistry examiner report June 2020 (8462/1F), Q07 on alloys, where candidates "frequently described brass and steel as compounds of their constituent metals."
    {
      id: 'aec-mis-alloy-compound',
      description:
        'An alloy such as brass or steel is a compound, because two metals have been joined together.',
      triggerAnswer: 'alloy-compound',
      correction:
        'In fact an alloy is a mixture of metals. The metal atoms sit between each other but they are not chemically bonded into a brand new substance.',
      reExplanation:
        'Brass is made by melting copper and zinc together so the two kinds of atom mix evenly while liquid. When the brass cools, the copper atoms and zinc atoms stay side by side, each one still a copper or zinc atom. Because there is no chemical bond between the two kinds of atom, brass is a mixture (specifically, an alloy). The same idea applies to steel, which is iron mixed with a small amount of carbon and other metals.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const atomsZone: Zone = {
  id: 'chemistry-atoms-elements-compounds',
  name: 'Atoms, Elements, Compounds',
  realm: 'elementia',
  nodeIds: ['chemistry-atoms-elements-compounds-basics'],
}
