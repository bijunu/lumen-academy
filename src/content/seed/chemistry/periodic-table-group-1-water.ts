import type { SkillNode } from '@/types/content'

export const group1ReactionsWithWater: SkillNode = {
  id: 'chemistry-periodic-table-group-1-water',
  title: 'Group 1 Reactions with Water',
  description:
    'Group 1 metals (lithium, sodium, potassium and the rarer rubidium and caesium) react with cold water to give a metal hydroxide solution plus hydrogen gas. Write word equations such as sodium + water gives sodium hydroxide + hydrogen. Read the observational evidence: gentle fizz for lithium, a darting silver ball for sodium, a lilac flame for potassium. Predict why rubidium and caesium are never demonstrated in UK schools. Test the alkaline product (red litmus turns blue; universal indicator turns purple, pH about 13). Apply safety: tweezers, filter paper, safety screen, splash goggles, small piece, room-temperature water.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-periodic-table',
  zoneName: 'Periodic Table',
  tier: 'confident',
  prerequisites: ['chemistry-periodic-table-group-1-7'],
  curriculum: {
    ks3Objective:
      'The reactions of Group 1 elements with water; observational evidence (vigour, heat, product observation); reactivity trends down the group.',
    awardingBodies: {
      aqa: '4.1.2.5 Group 1 (the alkali metals): reactions with water; reactivity order (8462)',
      edexcel: 'Topic 1.36 Group 1 alkali metals: reactions with water (1CH0)',
      ocr: 'C1.2c Group 1 alkali metals: reactions; observations and word equations (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'cpt-g1-water-scene-1',
      title: 'The General Word Equation',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read the general word equation for a Group 1 metal reacting with cold water, and the named version for sodium.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#EFF6FF"/><text x="180" y="20" text-anchor="middle" font-size="10" font-weight="700" fill="#1E3A8A">GROUP 1 METAL + WATER</text><g><rect x="20" y="40" width="320" height="50" rx="6" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="1"/><text x="180" y="60" text-anchor="middle" font-size="10" font-weight="600" fill="#1E3A8A">GENERAL WORD EQUATION</text><text x="180" y="80" text-anchor="middle" font-size="10" fill="#1E3A8A">metal + water → metal hydroxide + hydrogen</text></g><g><rect x="20" y="110" width="320" height="60" rx="6" fill="#FEF3C7" stroke="#7C2D12" stroke-width="1"/><text x="180" y="130" text-anchor="middle" font-size="10" font-weight="600" fill="#7C2D12">EXAMPLE: SODIUM</text><text x="180" y="150" text-anchor="middle" font-size="10" fill="#7C2D12">sodium + water → sodium hydroxide + hydrogen</text><text x="180" y="164" text-anchor="middle" font-size="8" fill="#7C2D12">2 Na + 2 H₂O → 2 NaOH + H₂</text></g><text x="180" y="190" text-anchor="middle" font-size="8" fill="#1E3A8A">Two products every time: a metal hydroxide (alkali) and hydrogen gas.</text><text x="180" y="204" text-anchor="middle" font-size="8" fill="#1E3A8A">Swap "sodium" for any Group 1 metal to predict its equation.</text></svg>',
        hotspots: [
          {
            id: 'cpt-g1-water-h-general',
            x: 50,
            y: 30,
            label: 'General pattern',
            description:
              'Every Group 1 metal follows the same pattern with cold water: metal plus water gives metal hydroxide plus hydrogen. The metal hydroxide dissolves and makes the water alkaline.',
          },
          {
            id: 'cpt-g1-water-h-sodium',
            x: 50,
            y: 65,
            label: 'Worked example for sodium',
            description:
              'Sodium plus water gives sodium hydroxide plus hydrogen. The same template works for lithium hydroxide, potassium hydroxide, rubidium hydroxide, caesium hydroxide.',
          },
          {
            id: 'cpt-g1-water-h-products',
            x: 25,
            y: 88,
            label: 'Two products, every time',
            description:
              'You always get two products: a metal hydroxide dissolved in the water, and hydrogen gas bubbling off. The hydrogen gives the squeaky pop in the test tube test.',
          },
          {
            id: 'cpt-g1-water-h-template',
            x: 75,
            y: 88,
            label: 'Predicting any Group 1 metal',
            description:
              'Take the metal name, add hydroxide, and pair it with hydrogen. So caesium + water gives caesium hydroxide + hydrogen, even though no school can safely show this.',
          },
        ],
      },
    },
    {
      id: 'cpt-g1-water-scene-2',
      title: 'Observations: Lithium, Sodium, Potassium',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read the standard UK school observations for lithium, sodium, and potassium reacting with a trough of cold water.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><text x="180" y="18" text-anchor="middle" font-size="10" font-weight="700" fill="#7F1D1D">VIGOUR RISES DOWN THE GROUP</text><g><rect x="20" y="30" width="100" height="170" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1"/><text x="70" y="48" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A8A">Li</text><text x="70" y="60" text-anchor="middle" font-size="8" fill="#1E3A8A">lithium</text><ellipse cx="70" cy="110" rx="35" ry="14" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="0.8"/><circle cx="55" cy="105" r="3" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="0.5"/><circle cx="70" cy="102" r="3" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="0.5"/><circle cx="85" cy="105" r="3" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="0.5"/><text x="70" y="142" text-anchor="middle" font-size="7" fill="#1E3A8A">floats, gentle fizz</text><text x="70" y="153" text-anchor="middle" font-size="7" fill="#1E3A8A">slow hydrogen</text><text x="70" y="164" text-anchor="middle" font-size="7" fill="#1E3A8A">mild warming</text><text x="70" y="180" text-anchor="middle" font-size="7" fill="#7C2D12" font-weight="600">least vigorous</text></g><g><rect x="130" y="30" width="100" height="170" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1"/><text x="180" y="48" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A8A">Na</text><text x="180" y="60" text-anchor="middle" font-size="8" fill="#1E3A8A">sodium</text><ellipse cx="180" cy="110" rx="35" ry="14" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="0.8"/><circle cx="180" cy="100" r="6" fill="#FCD34D" stroke="#7C2D12" stroke-width="0.6"/><text x="180" y="103" text-anchor="middle" font-size="6" fill="#7C2D12">melt</text><circle cx="170" cy="115" r="3" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="0.5"/><circle cx="190" cy="115" r="3" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="0.5"/><text x="180" y="142" text-anchor="middle" font-size="7" fill="#1E3A8A">melts into ball</text><text x="180" y="153" text-anchor="middle" font-size="7" fill="#1E3A8A">darts on surface</text><text x="180" y="164" text-anchor="middle" font-size="7" fill="#1E3A8A">hot and fizzing</text><text x="180" y="180" text-anchor="middle" font-size="7" fill="#7C2D12" font-weight="600">more vigorous</text></g><g><rect x="240" y="30" width="100" height="170" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1"/><text x="290" y="48" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A8A">K</text><text x="290" y="60" text-anchor="middle" font-size="8" fill="#1E3A8A">potassium</text><ellipse cx="290" cy="110" rx="35" ry="14" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="0.8"/><path d="M275,95 Q280,80 290,75 Q300,80 305,95" fill="#A855F7" opacity="0.7" stroke="#581C87" stroke-width="0.8"/><circle cx="290" cy="105" r="4" fill="#FBBF24" stroke="#7C2D12" stroke-width="0.6"/><text x="290" y="142" text-anchor="middle" font-size="7" fill="#1E3A8A">lilac flame</text><text x="290" y="153" text-anchor="middle" font-size="7" fill="#1E3A8A">hydrogen ignites</text><text x="290" y="164" text-anchor="middle" font-size="7" fill="#1E3A8A">small pop</text><text x="290" y="180" text-anchor="middle" font-size="7" fill="#7C2D12" font-weight="600">most vigorous</text></g></svg>',
        hotspots: [
          {
            id: 'cpt-g1-water-h-li-obs',
            x: 19,
            y: 20,
            label: 'Lithium: gentle fizz',
            description:
              'Lithium floats and fizzes gently. You see a slow stream of hydrogen bubbles, the lithium piece slowly shrinks, the water warms only a little, and lithium hydroxide dissolves into the trough.',
          },
          {
            id: 'cpt-g1-water-h-na-obs',
            x: 50,
            y: 20,
            label: 'Sodium: silver ball whizzes',
            description:
              'Sodium melts into a silver ball within a second (its melting point is 98°C and the reaction heat is enough). The ball darts about, hisses, and gives off hydrogen vigorously.',
          },
          {
            id: 'cpt-g1-water-h-k-obs',
            x: 81,
            y: 20,
            label: 'Potassium: lilac flame, pop',
            description:
              'Potassium reacts so vigorously that the heat ignites the hydrogen given off. The flame burns lilac (the potassium ion colour) and ends with a small pop. Never used without a safety screen.',
          },
          {
            id: 'cpt-g1-water-h-ladder',
            x: 50,
            y: 92,
            label: 'Reactivity rises down the group',
            description:
              'The pattern is one-way: vigour rises from lithium to sodium to potassium. The same trend continues for rubidium and caesium, which is why those two are never demonstrated in school.',
          },
        ],
      },
    },
    {
      id: 'cpt-g1-water-scene-3',
      title: 'Testing the Alkaline Hydroxide Product',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how UK schools check that a metal hydroxide solution has formed: red litmus, universal indicator, and a pH meter all confirm an alkaline product.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#F0FDF4"/><text x="180" y="18" text-anchor="middle" font-size="10" font-weight="700" fill="#14532D">TESTING THE PRODUCT: SODIUM HYDROXIDE SOLUTION</text><g><rect x="20" y="35" width="100" height="160" rx="6" fill="#FFFFFF" stroke="#475569" stroke-width="1"/><text x="70" y="55" text-anchor="middle" font-size="9" font-weight="600" fill="#7F1D1D">RED LITMUS</text><rect x="40" y="65" width="60" height="20" fill="#EF4444" stroke="#7F1D1D" stroke-width="0.6"/><text x="70" y="78" text-anchor="middle" font-size="7" fill="#FFFFFF" font-weight="600">red strip</text><text x="70" y="100" text-anchor="middle" font-size="8" fill="#1E3A8A">dip into solution</text><rect x="40" y="115" width="60" height="20" fill="#3B82F6" stroke="#1E3A8A" stroke-width="0.6"/><text x="70" y="128" text-anchor="middle" font-size="7" fill="#FFFFFF" font-weight="600">turns blue</text><text x="70" y="160" text-anchor="middle" font-size="8" font-weight="600" fill="#14532D">alkaline confirmed</text></g><g><rect x="130" y="35" width="100" height="160" rx="6" fill="#FFFFFF" stroke="#475569" stroke-width="1"/><text x="180" y="55" text-anchor="middle" font-size="9" font-weight="600" fill="#7C2D12">UNIVERSAL INDICATOR</text><rect x="150" y="65" width="60" height="20" fill="#22C55E" stroke="#14532D" stroke-width="0.6"/><text x="180" y="78" text-anchor="middle" font-size="7" fill="#FFFFFF" font-weight="600">green start</text><text x="180" y="100" text-anchor="middle" font-size="8" fill="#1E3A8A">add a few drops</text><rect x="150" y="115" width="60" height="20" fill="#7C3AED" stroke="#3B0764" stroke-width="0.6"/><text x="180" y="128" text-anchor="middle" font-size="7" fill="#FFFFFF" font-weight="600">turns purple</text><text x="180" y="160" text-anchor="middle" font-size="8" font-weight="600" fill="#14532D">strongly alkaline</text></g><g><rect x="240" y="35" width="100" height="160" rx="6" fill="#FFFFFF" stroke="#475569" stroke-width="1"/><text x="290" y="55" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">pH METER</text><rect x="260" y="65" width="60" height="40" fill="#1F2937" stroke="#0F172A" stroke-width="0.6"/><text x="290" y="83" text-anchor="middle" font-size="16" font-weight="700" fill="#22D3EE">13</text><text x="290" y="98" text-anchor="middle" font-size="7" fill="#A7F3D0">pH reading</text><text x="290" y="120" text-anchor="middle" font-size="8" fill="#1E3A8A">probe in solution</text><text x="290" y="140" text-anchor="middle" font-size="7" fill="#1E3A8A">scale 0 (acid) to 14 (alkali)</text><text x="290" y="160" text-anchor="middle" font-size="8" font-weight="600" fill="#14532D">close to 13 to 14</text></g><text x="180" y="212" text-anchor="middle" font-size="8" fill="#14532D">All three tests agree: the dissolved metal hydroxide is alkaline (pH well above 7).</text></svg>',
        hotspots: [
          {
            id: 'cpt-g1-water-h-litmus',
            x: 19,
            y: 25,
            label: 'Red litmus turns blue',
            description:
              'A red litmus paper dipped into the trough turns blue. Red to blue is the classic UK school test for an alkali. It works for any Group 1 hydroxide solution.',
          },
          {
            id: 'cpt-g1-water-h-ui',
            x: 50,
            y: 25,
            label: 'Universal indicator turns purple',
            description:
              'A few drops of universal indicator turn the water dark purple. Purple sits at pH 13 to 14 on the colour chart, showing a strongly alkaline solution.',
          },
          {
            id: 'cpt-g1-water-h-ph',
            x: 80,
            y: 25,
            label: 'pH meter reads around 13',
            description:
              'A pH probe in the trough reads about 13. The pH scale runs 0 (strong acid) to 14 (strong alkali), with 7 as neutral water. A value of 13 confirms a strong alkali.',
          },
          {
            id: 'cpt-g1-water-h-product',
            x: 50,
            y: 95,
            label: 'The dissolved hydroxide is the alkali',
            description:
              'The alkaline behaviour comes from the metal hydroxide dissolved in the water (for example sodium hydroxide). It is not the hydrogen gas, and it is not the metal piece itself.',
          },
        ],
      },
    },
    {
      id: 'cpt-g1-water-scene-4',
      title: 'Safety and Rubidium / Caesium',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read the UK CLEAPSS-style safety rules for demonstrating Group 1 reactions, and to see why rubidium and caesium are never used.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><text x="180" y="18" text-anchor="middle" font-size="10" font-weight="700" fill="#7F1D1D">SCHOOL SAFETY AND THE BOTTOM OF GROUP 1</text><g><rect x="20" y="30" width="160" height="170" rx="6" fill="#FFFFFF" stroke="#475569" stroke-width="1"/><text x="100" y="48" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">SAFETY RULES (Li, Na, K)</text><text x="30" y="68" font-size="8" fill="#1E3A8A">• Small pea-sized piece only</text><text x="30" y="84" font-size="8" fill="#1E3A8A">• Tweezers, never bare hands</text><text x="30" y="100" font-size="8" fill="#1E3A8A">• Dry on filter paper first</text><text x="30" y="116" font-size="8" fill="#1E3A8A">• Large trough, cold tap water</text><text x="30" y="132" font-size="8" fill="#1E3A8A">• Safety screen between class</text><text x="30" y="148" font-size="8" fill="#1E3A8A">• Splash goggles for all</text><text x="30" y="164" font-size="8" fill="#1E3A8A">• Store metal under oil</text><text x="30" y="180" font-size="8" fill="#1E3A8A">• Never water any Group 1 fire</text></g><g><rect x="200" y="30" width="140" height="170" rx="6" fill="#FEE2E2" stroke="#7F1D1D" stroke-width="1.2"/><text x="270" y="48" text-anchor="middle" font-size="9" font-weight="600" fill="#7F1D1D">RUBIDIUM AND CAESIUM</text><polygon points="270,60 280,80 260,80" fill="#FCD34D" stroke="#7F1D1D" stroke-width="0.8"/><text x="270" y="76" text-anchor="middle" font-size="9" font-weight="700" fill="#7F1D1D">!</text><text x="210" y="98" font-size="8" fill="#7F1D1D">NEVER demonstrated in</text><text x="210" y="110" font-size="8" fill="#7F1D1D">UK school labs.</text><text x="210" y="128" font-size="8" fill="#7F1D1D">Reaction is explosive:</text><text x="210" y="140" font-size="8" fill="#7F1D1D">shatters the glass trough</text><text x="210" y="152" font-size="8" fill="#7F1D1D">and scatters hot hydroxide.</text><text x="210" y="172" font-size="8" fill="#7F1D1D">Trend predicted from</text><text x="210" y="184" font-size="8" fill="#7F1D1D">group position only.</text></g></svg>',
        hotspots: [
          {
            id: 'cpt-g1-water-h-safety-piece',
            x: 30,
            y: 30,
            label: 'Small piece, dry first',
            description:
              'Use a pea-sized piece picked up with tweezers and dried on filter paper. The metal is stored under oil to keep air and moisture off it until the lesson.',
          },
          {
            id: 'cpt-g1-water-h-safety-screen',
            x: 30,
            y: 65,
            label: 'Trough, screen, goggles',
            description:
              'A large trough of cold tap water spreads the heat. A safety screen sits between the trough and the class, and everyone wears splash goggles in case droplets spray.',
          },
          {
            id: 'cpt-g1-water-h-rb-cs',
            x: 75,
            y: 30,
            label: 'Rubidium and caesium are off-limits',
            description:
              'Rubidium and caesium react so vigorously with water that the heat alone shatters the trough. UK CLEAPSS guidance bans the demonstration in schools.',
          },
          {
            id: 'cpt-g1-water-h-rb-cs-predict',
            x: 75,
            y: 75,
            label: 'Predict from group position',
            description:
              'You can still describe the reaction: rubidium + water gives rubidium hydroxide + hydrogen, with caesium even more vigorous. Trend prediction beats a dangerous demonstration.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'cpt-g1-water-worked-1',
      title: 'Writing the word equation for potassium with water',
      steps: [
        {
          explanation:
            'Question: A teacher drops a small piece of potassium onto a trough of cold tap water. Write the word equation for the reaction.',
        },
        {
          explanation:
            'Step 1: write down the general rule for any Group 1 metal with cold water. The reactants are the metal and water; the products are the metal hydroxide plus hydrogen.',
          maths: 'metal + water → metal hydroxide + hydrogen',
        },
        {
          explanation:
            'Step 2: name the metal. The metal here is potassium (K, Group 1, Period 4).',
        },
        {
          explanation:
            'Step 3: name the metal hydroxide. Take the metal name and add "hydroxide" on the end: potassium hydroxide.',
          maths: 'potassium → potassium hydroxide',
        },
        {
          explanation:
            'Step 4: write the full word equation, putting the two reactants on the left and the two products on the right.',
          maths: 'potassium + water → potassium hydroxide + hydrogen',
        },
        {
          explanation:
            'Check: the observations agree. The lilac flame is the burning hydrogen colour, and the water turns universal indicator purple because potassium hydroxide is dissolved in it.',
        },
      ],
    },
    {
      id: 'cpt-g1-water-worked-2',
      title: 'Predicting caesium with water from its group position',
      steps: [
        {
          explanation:
            'Question: Caesium (Cs) sits at the bottom of Group 1, two rows below potassium. UK schools are not allowed to demonstrate caesium with water. Use the group trend to predict (a) the word equation and (b) the vigour of the reaction compared with potassium.',
        },
        {
          explanation:
            'Step 1: name the predicted products using the general rule. Metal + water gives metal hydroxide + hydrogen, so caesium + water gives caesium hydroxide + hydrogen.',
          maths: 'caesium + water → caesium hydroxide + hydrogen',
        },
        {
          explanation:
            'Step 2: write down the Group 1 reactivity trend. Vigour rises going down: Li < Na < K < Rb < Cs.',
          maths: 'Li < Na < K < Rb < Cs (least to most vigorous)',
        },
        {
          explanation:
            'Step 3: place caesium on that scale. Caesium sits below potassium, so caesium with water is more vigorous than potassium with water.',
        },
        {
          explanation:
            'Step 4: describe what "more vigorous" looks like in practice. Potassium already ignites the hydrogen with a lilac flame. Caesium reacts so violently that the heat shatters the trough and scatters hot caesium hydroxide solution.',
        },
        {
          explanation:
            'Conclusion: the products are predictable from the rule, and the trend explains why CLEAPSS guidance bans the demonstration. The reaction is real, but seeing it in a classroom is not safe.',
        },
      ],
    },
  ],
  questions: [
    // CORE (7)
    {
      id: 'cpt-g1-water-q1',
      type: 'multiple-choice',
      stem: 'What are the two products when a Group 1 metal reacts with cold water?',
      tier: 'core',
      options: [
        'A metal oxide and oxygen',
        'A metal hydroxide and hydrogen',
        'A metal chloride and hydrogen',
        'A metal carbonate and carbon dioxide',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'cpt-g1-water-mis-products-salt',
    },
    {
      id: 'cpt-g1-water-q2',
      type: 'multiple-choice',
      stem: 'Which gas bubbles off when sodium reacts with cold water?',
      tier: 'core',
      options: ['Oxygen', 'Carbon dioxide', 'Hydrogen', 'Nitrogen'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'cpt-g1-water-mis-gas-oxygen',
    },
    {
      id: 'cpt-g1-water-q3',
      type: 'multiple-choice',
      stem: 'A teacher dips red litmus paper into the trough after sodium has finished reacting with water. What colour does the paper turn?',
      tier: 'core',
      options: [
        'Red, because the solution is acidic',
        'Blue, because the solution is alkaline',
        'Green, because the solution is neutral',
        'Yellow, because the solution is salt water',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'cpt-g1-water-mis-products-salt',
    },
    {
      id: 'cpt-g1-water-q4',
      type: 'multiple-choice',
      stem: 'Which observation describes lithium reacting with cold water in a UK school lab?',
      tier: 'core',
      options: [
        'Floats and fizzes gently, giving off slow hydrogen bubbles',
        'Melts into a silver ball and darts across the surface',
        'Catches fire with a lilac flame and a small pop',
        'Explodes and shatters the trough',
      ],
      correctIndex: 0,
      xpValue: 10,
    },
    {
      id: 'cpt-g1-water-q5',
      type: 'numeric-entry',
      stem: 'A trough holds sodium hydroxide solution after the reaction has finished. A pH probe is dipped in and gives a strongly alkaline reading. To one significant figure, which whole number from 1 to 14 is the pH closest to?',
      tier: 'core',
      correctAnswer: 13,
      tolerance: 1,
      xpValue: 10,
      hint: 'Strongly alkaline sits at pH 13 to 14 on the scale (0 = strong acid, 7 = neutral, 14 = strong alkali).',
    },
    {
      id: 'cpt-g1-water-q6',
      type: 'free-text',
      stem: 'Write the word equation for sodium reacting with cold water.',
      tier: 'core',
      sampleAnswer: 'Sodium + water → sodium hydroxide + hydrogen.',
      keywords: ['sodium', 'water', 'sodium hydroxide', 'hydrogen'],
      xpValue: 10,
      hint: 'Use the general pattern: metal + water → metal hydroxide + hydrogen. Replace "metal" with "sodium".',
    },
    {
      id: 'cpt-g1-water-q7',
      type: 'drag-order',
      stem: 'Place these observations in the order a teacher would write them up when a small piece of sodium is dropped onto cold water.',
      tier: 'core',
      items: [
        'Sodium melts into a silver ball within a second',
        'A piece of sodium is dried on filter paper and lowered onto the water',
        'Hydrogen bubbles off and the ball darts about the surface',
        'Red litmus dipped in the trough turns blue, confirming sodium hydroxide formed',
      ],
      correctOrder: [1, 0, 2, 3],
      xpValue: 10,
    },
    // CONFIDENT (8)
    {
      id: 'cpt-g1-water-q8',
      type: 'multiple-choice',
      stem: 'Which word equation describes the reaction of potassium with cold water?',
      tier: 'confident',
      options: [
        'Potassium + water → potassium oxide + hydrogen',
        'Potassium + water → potassium chloride + oxygen',
        'Potassium + water → potassium hydroxide + hydrogen',
        'Potassium + water → potassium carbonate + carbon dioxide',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'cpt-g1-water-mis-products-salt',
    },
    {
      id: 'cpt-g1-water-q9',
      type: 'multiple-choice',
      stem: 'During the potassium-with-water demonstration the hydrogen above the trough catches fire with a lilac flame. What is actually burning to give the flame?',
      tier: 'confident',
      options: [
        'The potassium metal itself is burning in the air',
        'The water is on fire',
        'The hydroxide solution is burning',
        'Hydrogen gas is burning in air; lilac is the potassium ion flame colour',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'cpt-g1-water-mis-flame-is-metal',
    },
    {
      id: 'cpt-g1-water-q10',
      type: 'spot-misconception',
      stem: 'Ravi says: "Group 1 metals only react with water if the water is heated first. Cold water is not reactive enough."',
      tier: 'confident',
      statements: [
        {
          text: 'Ravi is right. You have to warm the trough before lithium, sodium or potassium will react.',
          isMisconception: true,
        },
        {
          text: 'Ravi is wrong. Lithium, sodium and potassium all react with cold tap water at room temperature. The reaction itself provides the heat.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cpt-g1-water-mis-cold-water-needs-heat',
    },
    {
      id: 'cpt-g1-water-q11',
      type: 'numeric-entry',
      stem: 'The balanced symbol equation for sodium with water is 2 Na + 2 H₂O → 2 NaOH + H₂. How many molecules of hydrogen gas (H₂) are produced for every two sodium atoms that react?',
      tier: 'confident',
      correctAnswer: 1,
      xpValue: 15,
      hint: 'Read the coefficient in front of H₂ on the product side. Two Na atoms give one H₂ molecule.',
    },
    {
      id: 'cpt-g1-water-q12',
      type: 'missing-step',
      stem: 'Fill in the missing step in this account of writing the word equation for any Group 1 metal with cold water.',
      tier: 'confident',
      steps: [
        'Write the general pattern: metal + water → metal hydroxide + hydrogen',
        'Identify the Group 1 metal in the question (for example lithium, sodium, potassium)',
        null,
        'Pair the metal hydroxide with hydrogen on the products side',
        'Read the equation back to check the metal name appears in both the reactant and the hydroxide',
      ],
      missingStepIndex: 2,
      correctStep:
        'Build the metal hydroxide name by adding "hydroxide" after the metal name (lithium hydroxide, sodium hydroxide, potassium hydroxide)',
      xpValue: 15,
    },
    {
      id: 'cpt-g1-water-q13',
      type: 'drag-order',
      stem: 'Place these Group 1 metals in order of VIGOUR when added to a trough of cold water. Start with the least vigorous at the top and end with the most vigorous at the bottom.',
      tier: 'confident',
      items: ['Sodium', 'Caesium', 'Lithium', 'Potassium'],
      correctOrder: [2, 0, 3, 1],
      xpValue: 15,
      misconceptionId: 'cpt-g1-water-mis-cs-less-reactive',
    },
    {
      id: 'cpt-g1-water-q14',
      type: 'multiple-choice',
      stem: 'A teacher adds a few drops of universal indicator to the trough after lithium has reacted with cold water. What colour does the indicator turn, and what does that mean?',
      tier: 'confident',
      options: [
        'Red, meaning the solution is strongly acidic',
        'Green, meaning the solution is neutral',
        'Yellow, meaning a weak acid has formed',
        'Purple, meaning the solution is strongly alkaline (lithium hydroxide is dissolved in the water)',
      ],
      correctIndex: 3,
      xpValue: 15,
    },
    {
      id: 'cpt-g1-water-q15',
      type: 'numeric-entry',
      stem: 'In the balanced equation 2 Na + 2 H₂O → 2 NaOH + H₂, how many hydrogen ATOMS in total appear on the right-hand side?',
      tier: 'confident',
      correctAnswer: 4,
      xpValue: 15,
      hint: 'Count the H atoms in 2 NaOH (2 atoms) plus those in 1 H₂ (2 atoms). 2 plus 2 gives the total.',
    },
    // CHALLENGE (5)
    {
      id: 'cpt-g1-water-q16',
      type: 'multiple-choice',
      stem: 'Why do UK school technicians never demonstrate the reaction of caesium with water, even though the curriculum still expects pupils to describe it?',
      tier: 'challenge',
      options: [
        'Caesium is too cheap and easy to obtain, so schools do not bother',
        'Caesium is unreactive with water, so there would be nothing to see',
        'CLEAPSS guidance forbids it: the reaction is so vigorous that the heat shatters the trough and scatters hot caesium hydroxide',
        'Caesium turns into a noble gas in water',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'cpt-g1-water-mis-cs-less-reactive',
    },
    {
      id: 'cpt-g1-water-q17',
      type: 'spot-misconception',
      stem: 'Priya says: "The gas given off when sodium reacts with water is oxygen, because you can see bubbles and water contains oxygen atoms."',
      tier: 'challenge',
      statements: [
        {
          text: 'Priya is right. Water contains oxygen, so oxygen must be released when it splits open.',
          isMisconception: true,
        },
        {
          text: 'Priya is wrong. The gas is hydrogen, not oxygen. A lit splint gives a squeaky pop, which is the standard test for hydrogen. The oxygen atoms from water stay in the new sodium hydroxide.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'cpt-g1-water-mis-gas-oxygen',
    },
    {
      id: 'cpt-g1-water-q18',
      type: 'multiple-choice',
      stem: 'A pupil predicts: "Rubidium with cold water will give rubidium hydroxide plus hydrogen, and the reaction will be more vigorous than potassium with water." Which best evaluates the prediction?',
      tier: 'challenge',
      options: [
        'Correct on both counts: the products match the general pattern, and vigour rises going down Group 1',
        'Wrong products and wrong vigour: rubidium gives a salt, and is less reactive than potassium',
        'Correct products but wrong vigour: rubidium is less reactive than potassium because it sits lower',
        'Correct products but the vigour cannot be predicted without a demonstration',
      ],
      correctIndex: 0,
      xpValue: 20,
    },
    {
      id: 'cpt-g1-water-q19',
      type: 'free-text',
      stem: 'A piece of potassium reacts with cold water. Explain in one or two sentences (a) what the lilac flame is and (b) why the solution left in the trough is alkaline.',
      tier: 'challenge',
      sampleAnswer:
        'The lilac flame is hydrogen gas burning in air, with the lilac colour coming from potassium ions. The solution is alkaline because potassium hydroxide has dissolved in the water (red litmus turns blue, universal indicator turns purple, pH about 13).',
      keywords: [
        'hydrogen',
        'burning',
        'lilac',
        'potassium',
        'hydroxide',
        'alkaline',
      ],
      xpValue: 25,
      hint: 'Two products formed: hydrogen gas (which the heat of the reaction ignites) and potassium hydroxide (which dissolves and makes the water alkaline).',
    },
    {
      id: 'cpt-g1-water-q20',
      type: 'numeric-entry',
      stem: 'A teacher carries out three demonstrations in turn: lithium with cold water, sodium with cold water, potassium with cold water. The class collects the gas from each into a test tube and runs the squeaky-pop test. How many of the three tubes give a squeaky pop?',
      tier: 'challenge',
      correctAnswer: 3,
      xpValue: 20,
      hint: 'Every Group 1 metal with water gives hydrogen, and hydrogen plus a lit splint always gives the squeaky pop.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Chemistry examiner report June 2020 (8462/1F) Q05 on Group 1 reactions: candidates wrote "oxygen" as the gas given off; reinforced by RSC Education classroom resource "Reactions of Group 1 metals with water" (rsc.org/education, accessed 2026-05-12).
    {
      id: 'cpt-g1-water-mis-gas-oxygen',
      description:
        'The gas given off when a Group 1 metal reacts with water is oxygen, because water contains oxygen atoms.',
      triggerAnswer: 'oxygen',
      correction:
        'In fact the gas is hydrogen. A lit splint held above the test tube gives a squeaky pop, which is the standard UK school test for hydrogen.',
      reExplanation:
        'In the reaction metal + water → metal hydroxide + hydrogen, the oxygen atoms from water stay locked into the new hydroxide (sodium hydroxide, for example). Only hydrogen atoms leave the liquid as a gas. The squeaky pop on a lit splint, and the lilac flame above potassium, both confirm it is hydrogen burning.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2021 (1CH0/1F) Q04 on alkali metals: candidates labelled the product as "salt water" rather than an alkaline metal hydroxide; reinforced by CGP KS3 Chemistry Study Book p.41 Common Mistake box on Group 1 reactions.
    {
      id: 'cpt-g1-water-mis-products-salt',
      description:
        'When a Group 1 metal reacts with water the product is salt water (neutral, like sea water).',
      triggerAnswer: 'salt-water',
      correction:
        'In fact the product is a metal hydroxide dissolved in water, which is an alkali (pH about 13), not a neutral salt solution.',
      reExplanation:
        'The general equation is metal + water → metal hydroxide + hydrogen. Sodium gives sodium hydroxide, not sodium chloride. The solution turns red litmus blue and universal indicator purple. Sea water contains sodium chloride, which is neutral; the trough after a sodium-water reaction contains sodium hydroxide, which is strongly alkaline.',
    },
    // Source: Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question set on "patterns in the periodic table": recurring Year 7-8 idea that "Group 1 metals only react with hot water"; reinforced by Royal Society of Chemistry Education in Chemistry article (eic.rsc.org, "Misconceptions about alkali metal reactions" 2021-10-14).
    {
      id: 'cpt-g1-water-mis-cold-water-needs-heat',
      description:
        'Group 1 metals only react with water if the water is heated first; cold tap water is not reactive enough.',
      triggerAnswer: 'needs-heat',
      correction:
        'In fact lithium, sodium and potassium all react with cold tap water at room temperature. The reaction itself releases the heat.',
      reExplanation:
        'Group 1 reactions with water are exothermic: they give out heat. Sodium even melts from its own reaction heat without any flame or hot plate. UK school demonstrations use a trough of cold tap water on purpose, because warm water would make the reaction harder to control. Cold water is plenty reactive enough.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2019 (8462/1H) Q06 on Group 1 trends: candidates "wrote that caesium was less reactive than lithium because it was further from the top"; reinforced by Edexcel GCSE Chemistry examiner report June 2020 (1CH0/1H) Q04 on alkali metals.
    {
      id: 'cpt-g1-water-mis-cs-less-reactive',
      description:
        'Caesium is less reactive than lithium with water because it sits lower in the column.',
      triggerAnswer: 'cs-less-reactive',
      correction:
        'In fact reactivity RISES going down Group 1. Caesium is far more reactive than lithium with water, which is why CLEAPSS guidance bans the school demonstration.',
      reExplanation:
        'Going down Group 1, lithium fizzes gently, sodium darts about, potassium ignites the hydrogen. The trend continues: rubidium is more vigorous than potassium, and caesium more vigorous still. Lower means MORE reactive in Group 1. The opposite (Group 7) is a different rule, so do not mix them up.',
    },
    // Source: David Paterson, "Common pupil errors in Group 1 chemistry", RSC Education CPD article (2022-03-09): pupils "described the lilac flame as the potassium metal burning"; reinforced by CGP KS3 Chemistry Study Book p.41 Common Mistake box on flame tests vs. burning gas.
    {
      id: 'cpt-g1-water-mis-flame-is-metal',
      description:
        'The lilac flame above potassium-on-water is the potassium metal itself burning.',
      triggerAnswer: 'flame-is-metal',
      correction:
        'In fact the flame is hydrogen gas burning in air, ignited by the heat of the reaction. The lilac colour comes from potassium ions in the flame.',
      reExplanation:
        'The reaction produces hydrogen gas, and the heat given out is enough to ignite that hydrogen in the air above the trough. Hydrogen burning in air normally gives an almost colourless flame, but potassium ions dragged up by the spray colour the flame lilac. Sodium would colour the same hydrogen flame orange-yellow.',
    },
    // Source: Royal Society of Chemistry Education in Chemistry article "Why pupils confuse hydrogen with hydroxide" (eic.rsc.org, 2021-05-18): KS3 pupils "swap product names"; reinforced by AQA GCSE Chemistry examiner report June 2021 (8462/1F) Q05 on Group 1 word equations.
    {
      id: 'cpt-g1-water-mis-hydrogen-hydroxide-swap',
      description:
        'In the equation metal + water → metal hydroxide + hydrogen, the hydroxide is the gas and the hydrogen is the dissolved solid.',
      triggerAnswer: 'swap-names',
      correction:
        'In fact the metal hydroxide is the dissolved alkaline product (it stays in the water) and hydrogen is the gas that bubbles off and gives the squeaky pop.',
      reExplanation:
        'The metal hydroxide carries the metal name plus "hydroxide" (sodium hydroxide, potassium hydroxide). It dissolves in the trough, turning litmus blue. Hydrogen is the diatomic gas H₂. Mixing the two up reverses the meaning of the equation. Always check: gas bubbles off above the surface, hydroxide stays dissolved below.',
    },
    // Source: CLEAPSS guidance L195 "Alkali metals" (cleapss.org.uk, accessed 2026-05-12) on safe school demonstrations of Group 1; reinforced by Royal Society of Chemistry "Practical chemistry" page "Reactions of Group 1 elements with water" (edu.rsc.org, accessed 2026-05-12).
    {
      id: 'cpt-g1-water-mis-larger-piece-safer',
      description:
        'A larger piece of sodium gives a more impressive demonstration and is safer because the reaction is spread out.',
      triggerAnswer: 'larger-piece-safer',
      correction:
        'In fact UK CLEAPSS guidance is strict: use only a pea-sized piece of sodium. A larger piece releases more heat and hydrogen at once and can shatter the trough.',
      reExplanation:
        'The amount of heat and hydrogen given off scales with the size of the metal piece. A small piece gives a controlled fizz on a wide trough of cold water with a safety screen. A large piece can ignite the hydrogen explosively and crack the glass. Bigger is not safer in Group 1 demonstrations.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
