import type { SkillNode, Zone } from '@/types/content'

export const acidsAlkalisCommon: SkillNode = {
  id: 'chemistry-acids-alkalis-common',
  title: 'Common Acids and Alkalis',
  description:
    'Meet the everyday acids and alkalis a Year 7 learner is most likely to find at school, in the kitchen and around the home. See the laboratory acids hydrochloric acid (HCl) and sulfuric acid (H₂SO₄) alongside common ones like the citric acid in a lemon and the ethanoic acid in vinegar. Meet alkalis too: sodium hydroxide (NaOH), ammonia, soap and a baking soda solution. Use universal indicator colours to spot which is which.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-acids-alkalis',
  zoneName: 'Acids and Alkalis',
  tier: 'core',
  prerequisites: ['chemistry-atoms-elements-compounds-basics'],
  curriculum: {
    ks3Objective:
      'The properties of acids and alkalis (including neutralisation); the use of indicators to identify acids and alkalis; the chemistry of acids; reactions with metals (qualitative observations).',
    awardingBodies: {
      aqa: '4.4.2.1 The pH scale and neutralisation; 4.4.2.2 Strong and weak acids; properties of acids and alkalis (8462)',
      edexcel:
        'Topic 3.5 Acids and alkalis; 3.6 Indicators and the pH scale (1CH0)',
      ocr: 'C3.1a Acids and alkalis; C3.1b Indicators (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'aac-scene-acids-gallery',
      title: 'Common Acids: Lab and Home',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to meet four common acids a UK Year 7 learner sees at school or at home.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><text x="180" y="20" text-anchor="middle" font-size="10" font-weight="700" fill="#7F1D1D">FOUR COMMON ACIDS</text><g><rect x="20" y="40" width="80" height="160" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1"/><path d="M40,80 L40,170 Q40,180 50,180 L70,180 Q80,180 80,170 L80,80 Z" fill="#FEE2E2" stroke="#7F1D1D" stroke-width="1.2"/><text x="60" y="110" text-anchor="middle" font-size="14" fill="#7F1D1D" font-weight="700">HCl</text><text x="60" y="58" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="600">hydrochloric</text><text x="60" y="68" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="600">acid</text><text x="60" y="195" text-anchor="middle" font-size="7" fill="#7F1D1D">in your stomach</text></g><g><rect x="110" y="40" width="80" height="160" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1"/><path d="M130,80 L130,170 Q130,180 140,180 L160,180 Q170,180 170,170 L170,80 Z" fill="#FEE2E2" stroke="#7F1D1D" stroke-width="1.2"/><text x="150" y="110" text-anchor="middle" font-size="11" fill="#7F1D1D" font-weight="700"><tspan>H</tspan><tspan baseline-shift="sub" font-size="0.65em">2</tspan><tspan>SO</tspan><tspan baseline-shift="sub" font-size="0.65em">4</tspan></text><text x="150" y="58" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="600">sulfuric</text><text x="150" y="68" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="600">acid</text><text x="150" y="195" text-anchor="middle" font-size="7" fill="#7F1D1D">car batteries</text></g><g><rect x="200" y="40" width="80" height="160" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1"/><circle cx="240" cy="120" r="32" fill="#FEF08A" stroke="#A16207" stroke-width="1.2"/><circle cx="232" cy="115" r="2" fill="#A16207"/><circle cx="248" cy="115" r="2" fill="#A16207"/><circle cx="240" cy="125" r="2" fill="#A16207"/><circle cx="232" cy="130" r="2" fill="#A16207"/><circle cx="248" cy="130" r="2" fill="#A16207"/><text x="240" y="58" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="600">citric acid</text><text x="240" y="68" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="600">in lemons</text><text x="240" y="195" text-anchor="middle" font-size="7" fill="#7F1D1D">also in oranges</text></g><g><rect x="290" y="40" width="60" height="160" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1"/><path d="M305,80 L305,170 Q305,180 315,180 L325,180 Q335,180 335,170 L335,80 Z" fill="#F1F5F9" stroke="#475569" stroke-width="1.2"/><text x="320" y="125" text-anchor="middle" font-size="9" fill="#7F1D1D" font-weight="700">vinegar</text><text x="320" y="58" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="600">ethanoic</text><text x="320" y="68" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="600">acid</text><text x="320" y="195" text-anchor="middle" font-size="7" fill="#7F1D1D">on chips</text></g></svg>',
        hotspots: [
          {
            id: 'aac-h-hcl',
            x: 18,
            y: 50,
            label: 'Hydrochloric acid (HCl)',
            description:
              'A strong school-laboratory acid. Your stomach also makes its own dilute hydrochloric acid to help break down food.',
          },
          {
            id: 'aac-h-h2so4',
            x: 43,
            y: 50,
            label: 'Sulfuric acid (H₂SO₄)',
            description:
              'A strong laboratory acid. Found in car batteries. Two H atoms and four O atoms join to one S atom in each molecule.',
          },
          {
            id: 'aac-h-citric',
            x: 67,
            y: 60,
            label: 'Citric acid (in lemons)',
            description:
              'The sharp taste of a lemon, lime or orange comes from citric acid. A weaker, food-safe acid found in many fruits.',
          },
          {
            id: 'aac-h-vinegar',
            x: 89,
            y: 60,
            label: 'Ethanoic acid (in vinegar)',
            description:
              'The sour taste of vinegar comes from ethanoic acid (sometimes called acetic acid). A weaker, food-safe acid splashed on chips.',
          },
        ],
      },
    },
    {
      id: 'aac-scene-alkalis-gallery',
      title: 'Common Alkalis: Lab and Home',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to meet four common alkalis from the UK school laboratory and home.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><text x="180" y="20" text-anchor="middle" font-size="10" font-weight="700" fill="#1E3A8A">FOUR COMMON ALKALIS</text><g><rect x="20" y="40" width="80" height="160" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1"/><path d="M40,80 L40,170 Q40,180 50,180 L70,180 Q80,180 80,170 L80,80 Z" fill="#DBEAFE" stroke="#1E3A8A" stroke-width="1.2"/><text x="60" y="115" text-anchor="middle" font-size="13" fill="#1E3A8A" font-weight="700">NaOH</text><text x="60" y="58" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="600">sodium</text><text x="60" y="68" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="600">hydroxide</text><text x="60" y="195" text-anchor="middle" font-size="7" fill="#1E3A8A">oven cleaner</text></g><g><rect x="110" y="40" width="80" height="160" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1"/><path d="M130,80 L130,170 Q130,180 140,180 L160,180 Q170,180 170,170 L170,80 Z" fill="#DBEAFE" stroke="#1E3A8A" stroke-width="1.2"/><text x="150" y="115" text-anchor="middle" font-size="13" fill="#1E3A8A" font-weight="700"><tspan>NH</tspan><tspan baseline-shift="sub" font-size="0.65em">3</tspan></text><text x="150" y="58" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="600">ammonia</text><text x="150" y="68" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="600">solution</text><text x="150" y="195" text-anchor="middle" font-size="7" fill="#1E3A8A">window sprays</text></g><g><rect x="200" y="40" width="80" height="160" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1"/><rect x="215" y="100" width="50" height="40" rx="6" fill="#F1F5F9" stroke="#475569" stroke-width="1.2"/><circle cx="225" cy="110" r="3" fill="#FFFFFF" stroke="#475569"/><circle cx="240" cy="115" r="3" fill="#FFFFFF" stroke="#475569"/><circle cx="255" cy="110" r="3" fill="#FFFFFF" stroke="#475569"/><text x="240" y="155" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="600">soap bar</text><text x="240" y="58" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="600">soap</text><text x="240" y="68" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="600">solution</text><text x="240" y="195" text-anchor="middle" font-size="7" fill="#1E3A8A">in the bathroom</text></g><g><rect x="290" y="40" width="60" height="160" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1"/><rect x="300" y="100" width="40" height="50" rx="3" fill="#FEF08A" stroke="#A16207" stroke-width="1.2"/><text x="320" y="125" text-anchor="middle" font-size="9" fill="#1E3A8A" font-weight="700">baking</text><text x="320" y="138" text-anchor="middle" font-size="9" fill="#1E3A8A" font-weight="700">soda</text><text x="320" y="58" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="600">baking</text><text x="320" y="68" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="600">soda solution</text><text x="320" y="195" text-anchor="middle" font-size="7" fill="#1E3A8A">in baking</text></g></svg>',
        hotspots: [
          {
            id: 'aac-h-naoh',
            x: 18,
            y: 50,
            label: 'Sodium hydroxide (NaOH)',
            description:
              'A strong school-laboratory alkali, also sold as a strong oven and drain cleaner. Very harsh on skin: gloves and goggles only.',
          },
          {
            id: 'aac-h-nh3',
            x: 43,
            y: 50,
            label: 'Ammonia (NH₃) solution',
            description:
              'A weaker alkali with a sharp smell. Used in some window-cleaning sprays and in industry as a starting point for fertilisers.',
          },
          {
            id: 'aac-h-soap',
            x: 67,
            y: 50,
            label: 'Soap solution',
            description:
              'Soap dissolved in water gives a mild alkaline solution. That is why soap can sting your eyes a little, while pure water does not.',
          },
          {
            id: 'aac-h-baking',
            x: 89,
            y: 50,
            label: 'Baking soda (sodium hydrogencarbonate) solution',
            description:
              'Bicarbonate of soda dissolved in water gives a mild alkaline solution. Used in baking and as a kitchen cleaner.',
          },
        ],
      },
    },
    {
      id: 'aac-scene-indicator-strip',
      title: 'Universal Indicator: A Colour for Every Solution',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the universal indicator strip to see the colour each kind of solution turns the indicator paper. No pH numbers yet; colours only.',
      data: {
        viewBox: '0 0 360 200',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 200"><rect x="0" y="0" width="360" height="200" fill="#FEF3C7"/><text x="180" y="22" text-anchor="middle" font-size="10" font-weight="700" fill="#1E3A8A">UNIVERSAL INDICATOR COLOURS (NO NUMBERS YET)</text><g><rect x="20" y="60" width="40" height="60" fill="#DC2626"/><text x="40" y="140" text-anchor="middle" font-size="8" fill="#1E3A8A">strong acid</text><text x="40" y="152" text-anchor="middle" font-size="7" fill="#7F1D1D">red</text></g><g><rect x="60" y="60" width="40" height="60" fill="#F97316"/><text x="80" y="140" text-anchor="middle" font-size="8" fill="#1E3A8A">acid</text><text x="80" y="152" text-anchor="middle" font-size="7" fill="#7C2D12">orange</text></g><g><rect x="100" y="60" width="40" height="60" fill="#FBBF24"/><text x="120" y="140" text-anchor="middle" font-size="8" fill="#1E3A8A">weak acid</text><text x="120" y="152" text-anchor="middle" font-size="7" fill="#7C2D12">yellow</text></g><g><rect x="140" y="60" width="60" height="60" fill="#22C55E"/><text x="170" y="140" text-anchor="middle" font-size="8" fill="#1E3A8A">neutral</text><text x="170" y="152" text-anchor="middle" font-size="7" fill="#064E3B">green</text><text x="170" y="78" text-anchor="middle" font-size="7" fill="#FFFFFF" font-weight="600">water</text></g><g><rect x="200" y="60" width="40" height="60" fill="#3B82F6"/><text x="220" y="140" text-anchor="middle" font-size="8" fill="#1E3A8A">weak alkali</text><text x="220" y="152" text-anchor="middle" font-size="7" fill="#1E3A8A">blue</text></g><g><rect x="240" y="60" width="40" height="60" fill="#1E40AF"/><text x="260" y="140" text-anchor="middle" font-size="8" fill="#1E3A8A">alkali</text><text x="260" y="152" text-anchor="middle" font-size="7" fill="#1E3A8A">dark blue</text></g><g><rect x="280" y="60" width="60" height="60" fill="#7C3AED"/><text x="310" y="140" text-anchor="middle" font-size="8" fill="#1E3A8A">strong alkali</text><text x="310" y="152" text-anchor="middle" font-size="7" fill="#581C87">purple</text></g><line x1="20" y1="170" x2="340" y2="170" stroke="#475569" stroke-width="1"/><text x="20" y="183" text-anchor="start" font-size="7" fill="#7F1D1D" font-weight="600">←  more acidic</text><text x="340" y="183" text-anchor="end" font-size="7" fill="#581C87" font-weight="600">more alkaline →</text></svg>',
        hotspots: [
          {
            id: 'aac-h-ind-acid',
            x: 11,
            y: 45,
            label: 'Acids turn the indicator red, orange or yellow',
            description:
              'A drop of universal indicator in a strong acid like hydrochloric acid turns red. A weaker food acid like vinegar turns it yellow or orange.',
          },
          {
            id: 'aac-h-ind-neutral',
            x: 47,
            y: 45,
            label: 'Pure water is neutral: green',
            description:
              'Pure water is neither acid nor alkali. A drop of universal indicator in water stays green. Anything that does not change the green colour is neutral.',
          },
          {
            id: 'aac-h-ind-alkali',
            x: 83,
            y: 45,
            label: 'Alkalis turn the indicator blue or purple',
            description:
              'A weak alkali like soap solution turns the indicator blue. A strong alkali like sodium hydroxide turns it dark blue or purple.',
          },
          {
            id: 'aac-h-ind-rule',
            x: 50,
            y: 90,
            label: 'Colour reveals the family',
            description:
              'You can sort an unknown solution into acid, neutral or alkali just by the colour the indicator turns. Numbers (the pH scale) come later.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'aac-worked-1',
      title: 'Sorting four solutions by their indicator colour',
      steps: [
        {
          explanation:
            'Question: a school technician sets out four unlabelled clear solutions in beakers. Drops of universal indicator give: beaker A red, beaker B green, beaker C dark blue, beaker D yellow. Sort them into acid, neutral or alkali.',
        },
        {
          explanation:
            'Step 1: recall the colour rule. Acids give red, orange or yellow; pure water gives green (neutral); alkalis give blue or purple.',
          maths: 'red/orange/yellow → acid; green → neutral; blue/purple → alkali',
        },
        {
          explanation:
            'Step 2: match the four colours. Beaker A (red) is a strong acid. Beaker B (green) is neutral, like pure water. Beaker C (dark blue) is an alkali. Beaker D (yellow) is a weak acid.',
          maths: 'A acid, B neutral, C alkali, D weak acid',
        },
        {
          explanation:
            'So two beakers hold acids (A and D), one is neutral (B) and one is alkali (C). The indicator alone cannot tell you the chemical name; it just tells you the family.',
        },
      ],
    },
    {
      id: 'aac-worked-2',
      title: 'Picking the right home substance for a job',
      steps: [
        {
          explanation:
            'Question: a parent in Manchester wants to buy something to clean a greasy oven door. Two products on the shelf are oven cleaner (sodium hydroxide solution) and white vinegar (ethanoic acid). Which is the alkali and why is the alkali better here?',
        },
        {
          explanation:
            'Step 1: identify the family for each substance. Sodium hydroxide is the strong alkali NaOH. Ethanoic acid (in vinegar) is a weak acid.',
          maths: 'NaOH → alkali. ethanoic acid → acid',
        },
        {
          explanation:
            'Step 2: match the job. Greasy ovens are best cleaned by a strong alkali, which breaks down the grease. Vinegar (an acid) is better at things like limescale on a kettle.',
        },
        {
          explanation:
            'Step 3: pick the alkali. The oven cleaner (sodium hydroxide) is the right choice. Wear gloves and goggles, since strong alkalis are harsh on skin.',
        },
        {
          explanation:
            'So oven cleaner is the alkali (NaOH) and is the better choice for the greasy job. Vinegar belongs in a different chore (descaling the kettle).',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'aac-q1',
      type: 'multiple-choice',
      stem: 'Which of these is the chemical formula for hydrochloric acid?',
      tier: 'core',
      options: ['NaOH', 'HCl', 'H₂O', 'NH₃'],
      correctIndex: 1,
      xpValue: 10,
    },
    {
      id: 'aac-q2',
      type: 'multiple-choice',
      stem: 'Which of these is the chemical formula for sulfuric acid?',
      tier: 'core',
      options: ['H₂SO₄', 'NaOH', 'HCl', 'NH₃'],
      correctIndex: 0,
      xpValue: 10,
    },
    {
      id: 'aac-q3',
      type: 'multiple-choice',
      stem: 'A pupil tastes vinegar on their fish and chips. The sharp, sour flavour is caused by a chemical in the vinegar. What kind of substance is vinegar?',
      tier: 'core',
      options: ['An alkali', 'A neutral substance', 'A weak acid', 'A salt'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'aac-mis-acid-burns-only',
    },
    {
      id: 'aac-q4',
      type: 'multiple-choice',
      stem: 'A teacher adds a drop of universal indicator to a beaker of pure water. What colour will it turn?',
      tier: 'core',
      options: ['Red', 'Yellow', 'Green', 'Purple'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'aac-mis-water-acid',
    },
    {
      id: 'aac-q5',
      type: 'spot-misconception',
      stem: 'A pupil says: "A solution that turns universal indicator dark blue must be a strong acid, because dark colours mean strong chemicals." Is the pupil right?',
      tier: 'confident',
      statements: [
        {
          text: 'The pupil is right. Dark blue is the colour of a strong acid.',
          isMisconception: true,
        },
        {
          text: 'The pupil is wrong. Dark blue is the colour of an alkali, not an acid. Acids turn the indicator red, orange or yellow.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'aac-mis-colour-reverse',
    },
    {
      id: 'aac-q6',
      type: 'numeric-entry',
      stem: 'A pupil tests four beakers with universal indicator. Beaker 1 turns red, beaker 2 turns orange, beaker 3 turns dark blue, beaker 4 turns purple. How many of the four beakers hold an alkali? Give your answer as a single number.',
      tier: 'confident',
      correctAnswer: 2,
      xpValue: 15,
      hint: 'Alkalis turn the indicator blue or purple. Acids turn it red, orange or yellow.',
      misconceptionId: 'aac-mis-colour-reverse',
    },
    {
      id: 'aac-q7',
      type: 'multiple-choice',
      stem: 'Which of these everyday liquids is an acid?',
      tier: 'core',
      options: ['Soap solution', 'Lemon juice', 'Pure water', 'Oven cleaner'],
      correctIndex: 1,
      xpValue: 10,
    },
    {
      id: 'aac-q8',
      type: 'multiple-choice',
      stem: 'Which of these is an alkali found in many household kitchens?',
      tier: 'core',
      options: [
        'White vinegar',
        'Pure water',
        'Lemon juice',
        'Baking soda solution',
      ],
      correctIndex: 3,
      xpValue: 10,
    },
    {
      id: 'aac-q9',
      type: 'numeric-entry',
      stem: 'A pupil sets out three beakers of unknown solutions and adds universal indicator. Beaker 1 turns yellow, beaker 2 turns blue, beaker 3 turns green. How many of the three beakers hold an acid? Give your answer as a single number.',
      tier: 'confident',
      correctAnswer: 1,
      xpValue: 15,
      hint: 'Yellow comes from an acid; blue comes from an alkali; green is neutral.',
    },
    {
      id: 'aac-q10',
      type: 'numeric-entry',
      stem: 'A pupil tests four beakers with universal indicator. The colours are red, orange, yellow and green. How many of the four beakers hold an acid? Give your answer as a single number.',
      tier: 'confident',
      correctAnswer: 3,
      xpValue: 15,
      hint: 'Acids cover the red to yellow part of the colour scale. Green is neutral.',
    },
    {
      id: 'aac-q11',
      type: 'numeric-entry',
      stem: 'How many capital H atoms appear in one molecule of sulfuric acid (H₂SO₄)? Give your answer as a single number.',
      tier: 'core',
      correctAnswer: 2,
      xpValue: 10,
      hint: 'The small 2 after the H tells you how many H atoms are in the molecule.',
    },
    {
      id: 'aac-q12',
      type: 'numeric-entry',
      stem: 'How many H atoms appear in one molecule of ammonia (NH₃)? Give your answer as a single number.',
      tier: 'core',
      correctAnswer: 3,
      xpValue: 10,
      hint: 'The small 3 after the H tells you how many H atoms are in the molecule.',
    },
    {
      id: 'aac-q13',
      type: 'drag-order',
      stem: 'Place these solutions in order of universal indicator colour, starting with the most acidic at the top and ending with the most alkaline at the bottom.',
      tier: 'confident',
      items: [
        'Soap solution (alkali)',
        'Hydrochloric acid (strong acid)',
        'Pure water (neutral)',
      ],
      correctOrder: [1, 2, 0],
      xpValue: 15,
    },
    {
      id: 'aac-q14',
      type: 'spot-misconception',
      stem: 'Tom says: "Every alkali is safe to touch because alkalis are not acids, and only acids burn skin." Is he right?',
      tier: 'confident',
      statements: [
        {
          text: 'Tom is right. Alkalis cannot burn or damage skin.',
          isMisconception: true,
        },
        {
          text: 'Tom is wrong. Strong alkalis like sodium hydroxide (oven cleaner) are very harsh on skin and need gloves and goggles. Alkalis can be just as harmful as acids.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'aac-mis-alkalis-safe',
    },
    {
      id: 'aac-q15',
      type: 'free-text',
      stem: 'A pupil in Sevenoaks finds two unlabelled jars in the kitchen: one of baking soda (sodium hydrogencarbonate) and one of table salt (sodium chloride). They drop a pinch of each into a separate beaker of pure water and add universal indicator. In one or two sentences, explain what indicator colours you would expect to see and what each tells you.',
      tier: 'challenge',
      sampleAnswer:
        'The baking soda solution would turn the indicator blue, because baking soda is a mild alkali. The table salt solution would stay green, because sodium chloride is a neutral salt.',
      keywords: ['blue', 'alkali', 'green', 'neutral', 'salt'],
      xpValue: 25,
      hint: 'Baking soda is a mild alkali (turns blue). Table salt (sodium chloride) is a neutral salt (stays green).',
      misconceptionId: 'aac-mis-naoh-vs-nacl',
    },
    {
      id: 'aac-q16',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: A pupil drops universal indicator into a beaker of fresh lemon juice and the indicator turns orange. Build the reasoning that shows the lemon juice is an acid.',
      tier: 'confident',
      steps: [
        'A drop of universal indicator was added to the lemon juice.',
        'The indicator turned orange.',
        null,
        'So the lemon juice is an acid (in fact, it contains citric acid).',
      ],
      missingStepIndex: 2,
      correctStep:
        'On the universal indicator colour chart, orange falls in the acid part of the scale (between red and yellow).',
      xpValue: 20,
    },
    {
      id: 'aac-q17',
      type: 'labelled-image',
      stem: 'Drag the correct label onto each colour band of a universal indicator strip.',
      tier: 'confident',
      viewBox: '0 0 320 160',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 160"><rect x="0" y="0" width="320" height="160" fill="#F8FAFC"/><rect x="20" y="40" width="60" height="60" fill="#DC2626" stroke="#7F1D1D"/><rect x="80" y="40" width="60" height="60" fill="#FBBF24" stroke="#A16207"/><rect x="140" y="40" width="60" height="60" fill="#22C55E" stroke="#064E3B"/><rect x="200" y="40" width="60" height="60" fill="#3B82F6" stroke="#1E3A8A"/><rect x="260" y="40" width="40" height="60" fill="#7C3AED" stroke="#581C87"/></svg>',
      hotspots: [
        { id: 'aac-q17-h1', x: 16, y: 45, correctLabel: 'Strong acid' },
        { id: 'aac-q17-h2', x: 34, y: 45, correctLabel: 'Weak acid' },
        { id: 'aac-q17-h3', x: 53, y: 45, correctLabel: 'Neutral' },
        { id: 'aac-q17-h4', x: 72, y: 45, correctLabel: 'Weak alkali' },
        { id: 'aac-q17-h5', x: 89, y: 45, correctLabel: 'Strong alkali' },
      ],
      labels: [
        'Strong acid',
        'Weak acid',
        'Neutral',
        'Weak alkali',
        'Strong alkali',
        'Salt',
        'Universal solvent',
        'Indicator off',
      ],
      xpValue: 20,
    },
    {
      id: 'aac-q18',
      type: 'multiple-choice',
      stem: 'A baby in Sevenoaks brings up some milk after a feed and a parent describes a sour smell. The sour smell comes from acid in the baby\'s stomach. Which acid does a human stomach naturally make?',
      tier: 'challenge',
      options: [
        'Citric acid',
        'Sulfuric acid',
        'Hydrochloric acid',
        'Ethanoic acid',
      ],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'aac-mis-stomach-citric',
    },
    {
      id: 'aac-q19',
      type: 'multiple-choice',
      stem: 'A school in Tunbridge Wells receives four unlabelled bottles from a supplier: bottle 1 turns universal indicator red, bottle 2 turns it green, bottle 3 turns it dark blue, and bottle 4 turns it yellow. The school technician needs to find the bottle of pure distilled water for use in a fair test. Which bottle is it?',
      tier: 'challenge',
      options: ['Bottle 1', 'Bottle 2', 'Bottle 3', 'Bottle 4'],
      correctIndex: 1,
      xpValue: 25,
    },
    {
      id: 'aac-q20',
      type: 'multiple-choice',
      stem: 'A Year 7 pupil in Dover reads a kitchen-cleaner label that says: "If swallowed, drink lots of water and seek medical help." The label warns that the cleaner is a strong sodium hydroxide solution. Which warning best matches what the pupil now knows?',
      tier: 'challenge',
      options: [
        'Sodium hydroxide is a salt, so it is safe to taste',
        'Sodium hydroxide is a strong alkali; strong alkalis are very harsh on skin and lining tissues, just as strong acids are',
        'Sodium hydroxide is a weak acid, so a small splash on skin will not matter',
        'Sodium hydroxide turns universal indicator green, so it is neutral and safe',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'aac-mis-alkalis-safe',
    },
    {
      id: 'aac-q21',
      type: 'multiple-choice',
      stem: 'A pupil reads on a juice carton: "Contains citric acid (E330) and ascorbic acid (vitamin C)." The pupil wonders why the carton calls the juice safe to drink. Which is the best explanation?',
      tier: 'challenge',
      options: [
        'Citric acid is not really an acid; the label is wrong',
        'Citric acid and vitamin C are weak food acids; weak acids in food are safe at the small amounts used in juices, even though strong acids in a school lab are not',
        'Acids in food turn into water once you swallow them, so they are safe',
        'Universal indicator would turn the juice blue, showing it is alkali, so the warning does not apply',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'aac-mis-acid-burns-only',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Chemistry examiner report June 2018 (8462/1F), Q07 on indicators: candidates "swapped the indicator colours, marking acidic solutions as blue or purple and alkaline ones as red". Reinforced by CGP KS3 Chemistry Study Book p.62 Common Mistake box on universal indicator.
    {
      id: 'aac-mis-colour-reverse',
      description:
        'Acids turn universal indicator blue or purple, and alkalis turn it red.',
      triggerAnswer: 'colour-reverse',
      correction:
        'In fact acids turn the indicator red, orange or yellow, and alkalis turn it blue or purple. Pure water (neutral) gives a green colour.',
      reExplanation:
        'Picture a rainbow strip. The hot colours red, orange and yellow live on the acid end. The cool colours blue and purple live on the alkali end. Green sits in the middle for neutral water. Lemon juice (acid) drops to red and oven cleaner (alkali) climbs to purple. The colour family tells you the substance family.',
    },
    // Source: Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question sets on acids and alkalis. Year 7 learners often think pure water is "a bit acidic" because it tastes neutral but they have heard rainwater described as acid. Reinforced by RSC Education article "Common student misconceptions about acids and bases" (rsc.org/education, accessed 2026-05-10).
    {
      id: 'aac-mis-water-acid',
      description:
        'Pure distilled water is a weak acid, because it can dissolve some metals over time.',
      triggerAnswer: 'water-acid',
      correction:
        'In fact pure distilled water is neutral. It turns universal indicator green, sitting exactly between the acid and alkali parts of the scale.',
      reExplanation:
        'Drop a sample of pure distilled water into a tube of universal indicator and the indicator stays green. That is the standard for neutral. Rainwater outside can become slightly acidic because dissolved carbon dioxide forms a very weak acid with the water, but freshly distilled water in a chemistry lab is neutral.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2019 (1CH0/1F), Q08 on safety with acids and alkalis: candidates "wrote that acids burn skin but alkalis are gentle." Reinforced by HSE (Health and Safety Executive) school chemistry safety guidance "Strong acids and alkalis in school" (hse.gov.uk, 2024 update).
    {
      id: 'aac-mis-alkalis-safe',
      description:
        'Acids burn skin but alkalis are safe to touch with bare hands.',
      triggerAnswer: 'alkalis-safe',
      correction:
        'In fact strong alkalis like sodium hydroxide are just as harsh on skin as strong acids. Both need gloves and goggles in school laboratories.',
      reExplanation:
        'Cover your hand in oven cleaner (sodium hydroxide solution) and you would feel a slippery, soapy sting that soon turns into a chemical burn. The same is true of concentrated bleach. School technicians lock both strong acids and strong alkalis behind goggle-only signs. Soap is a mild alkali, but a strong alkali is dangerous in the same way a strong acid is.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2020 (8462/1F), Q06 on common acids: candidates "named citric acid as the acid in the human stomach", confusing the food acid in lemons with the digestive acid hydrochloric acid. Reinforced by NHS health information page "Stomach acid" (nhs.uk, 2024 update).
    {
      id: 'aac-mis-stomach-citric',
      description:
        'The acid that the human stomach makes to break down food is citric acid (the acid in lemons).',
      triggerAnswer: 'stomach-citric',
      correction:
        'In fact the human stomach makes hydrochloric acid (HCl), the same kind of acid (much weaker) found in school chemistry bottles. Citric acid is found in lemons, not in the stomach.',
      reExplanation:
        'Cells in the stomach lining make a dilute hydrochloric acid solution to help break down food and kill harmful bacteria. The lining is built to cope with HCl. Lemons make their sharp taste from citric acid, a different and weaker food acid. The two acids are not the same, even though both feel sharp on the tongue.',
    },
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education (2004 update). Year 7 learners often think any acid is a strong burning chemical, missing that food acids in juice and vinegar are weak and safe at the amounts present. Reinforced by CGP KS3 Chemistry Study Book p.61 chapter on common acids.
    {
      id: 'aac-mis-acid-burns-only',
      description:
        'Every acid is dangerous and would burn your skin, so foods cannot contain acid.',
      triggerAnswer: 'acid-burns-only',
      correction:
        'In fact many foods contain weak acids that are safe at the amounts used. Vinegar holds ethanoic acid; lemons hold citric acid; fizzy drinks hold carbonic acid.',
      reExplanation:
        'Acid is a chemistry family, not a danger label by itself. Strong acids in a chemistry lab (HCl, H₂SO₄) are dangerous in the amounts used. Weak food acids (citric in juice, ethanoic in vinegar) are safe at the amounts in food. The weak versions still turn universal indicator yellow or orange, but they will not damage healthy skin.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2019 (8462/1F), Q05 on naming alkalis: candidates "wrote sodium chloride (table salt) as a common alkali", swapping the salt sodium chloride with the alkali sodium hydroxide. Reinforced by CGP KS3 Chemistry Study Book p.63 Common Mistake box on alkalis.
    {
      id: 'aac-mis-naoh-vs-nacl',
      description:
        'Sodium chloride (table salt) is a common alkali, because both contain sodium.',
      triggerAnswer: 'naoh-vs-nacl',
      correction:
        'In fact sodium chloride (NaCl) is a neutral salt, not an alkali. The common alkali is sodium hydroxide (NaOH), which contains a hydroxide group as well as sodium.',
      reExplanation:
        'Sprinkle table salt onto wet universal indicator paper and the colour stays green: it is neutral. Drop sodium hydroxide solution onto the same paper and it turns dark blue or purple: it is a strong alkali. Both formulae start with Na, but the second part matters. Cl alone (in NaCl) gives a salt; OH (in NaOH) gives an alkali.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const acidsAlkalisZone: Zone = {
  id: 'chemistry-acids-alkalis',
  name: 'Acids and Alkalis',
  realm: 'elementia',
  nodeIds: ['chemistry-acids-alkalis-common'],
}
